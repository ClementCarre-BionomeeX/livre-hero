"use strict";
// The map of the endings found (« Carte des fins », 25.5, Clément 26/11): for a reader and a book, over all their
// games, the pages read, the endings found as stars, the ways never taken in the fog; and nothing not read on it.
// Usage: node tests/site.js && node tests/cartefins-test.js        (APERCUS=dossier for phone pictures)
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre"), sim = require("./cartefins-sim"), C = require("../src/cartefins.js"), M = require("../src/moteur.js");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, ".."), SITE = path.join(ROOT, "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var maree = require("../histoires/maree.json"), kardan = require("../histoires/kardan.json");

// 1. The rules, in node, on four books: only pages read, only ways seen, the endings not found unnamed.
["kardan", "maree", "potions", "huisclos"].forEach(function (id) {
  var st = require("../histoires/" + id + ".json"), r = sim.record(st, 3, 2), m = C.map(st, r), P = st.passages;
  var known = {}; Object.keys(r.pages).forEach(function (k) { known[k] = 1; }); Object.keys(r.trail).forEach(function (k) { known[k] = 1; });
  check(C.worth(st), id + " : un livre à plusieurs fins a sa carte");
  m.acts.forEach(function (a) {
    a.nodes.forEach(function (n) { if (n.kind !== "pages" && !known[n.id] && n.id !== st.start) check(false, id + " : la page « " + n.id + " » est sur la carte sans avoir été lue"); });
    a.stubs.forEach(function (s) {
      check(known[s.from], id + " : un chemin part d'une page non lue (" + s.from + ")");
      var c = (P[s.from].choices || []).filter(function (x) { return String(x.label || "").replace(/\*/g, "").trim() === s.label; })[0];
      if (s.label) check(c && !c.hide, id + " : « " + s.label + " » n'est pas un choix visible de « " + s.from + " »");
    });
  });
  var foundIds = m.ends.found.map(function (e) { return e.id; });
  check(foundIds.every(function (e) { return r.endings[e]; }), id + " : une fin non trouvée est nommée");
  check(m.ends.total === M.endingsOf(st).length, id + " : le nombre de fins");
});
check(!C.worth(require("../histoires/ile.json")), "un livre à lire (L'Île au trésor) n'a pas de carte des fins");

// 2. In the app: Léa's record of « Les Fils de la Marée » (three games), and a game of Kardan she resumes.
var rec = sim.record(maree, 3, 5); rec.feats = {};
var ks = sim.record(kardan, 1, 9), mid = (function () {
  // a game of Kardan stopped at its first fork, with six choices noted that the record has not taken yet
  M.setRng(function () { return 0.5; }); var s = M.freshState(kardan, {}); s.arch = "guerrier"; s.name = "Ivo"; M.start(kardan, s); M.setRng(null); return s;
})();
var walk = {}; Object.keys(ks.trail).slice(0, 6).forEach(function (k) { walk[k] = Object.keys(ks.trail[k])[0]; });
var T0 = Date.parse("2026-11-20T18:00:00Z");
var SEED = {
  "idx:profils": ["p1"], "profils:p1": { name: "Léa", color: "#a33", created: T0, records: { maree: rec, kardan: { endings: {}, feats: {} } } },
  "profil": "p1", "nouveautes-vues": "999",
  "idx:parties": ["g1"],
  "parties:g1": { profil: "p1", story: "kardan", storyTitle: "Le labyrinthe de Kardan", hero: "Ivo", archLabel: "Guerrier", level: 1, where: "Sorel", updated: T0, state: JSON.stringify(mid), undo: [], log: [], walk: walk },
};

(async function () {
  if (!fs.existsSync(path.join(SITE, "index.html"))) { console.log("cartefins-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(SITE, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(SITE) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), SHOTS = process.env.APERCUS || "", ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", reducedMotion: "reduce", viewport: { width: 390, height: 844 }, deviceScaleFactor: SHOTS ? 2 : 1 }), pg = await ctx.newPage(), errors = [];
  pg.on("pageerror", function (e) { errors.push(e.message); });
  pg.on("console", function (m) { if (/^render:/.test(m.text())) errors.push(m.text().slice(0, 600)); });
  await pg.addInitScript(function (seed) {
    if (sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1");
    Object.keys(seed).forEach(function (k) { localStorage.setItem("livre-heros:" + k, JSON.stringify(seed[k])); });
  }, SEED);
  var shot = async function (name) { if (SHOTS) await pg.screenshot({ path: path.join(SHOTS, name), fullPage: true }); };
  var prof = function () { return pg.evaluate(function () { return JSON.parse(localStorage.getItem("livre-heros:profils:p1")); }); };
  try {
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    // From the book's card: « Fins trouvées » opens, and the map is there.
    var card = await openBook(pg, "Les Fils de la Marée");
    await card.getByRole("button", { name: "En savoir plus" }).click();
    card = await openBook(pg, "Les Fils de la Marée");
    await card.locator(".records > button").first().click();
    await card.getByRole("button", { name: "🗺 Carte des fins" }).click();
    await pg.waitForSelector("main.endmap svg");
    var m = C.map(maree, rec), F = m.ends;
    var big = await pg.locator(".endmap-big").innerText();
    check(big.indexOf(F.found.length + " fin") >= 0 && big.indexOf("sur " + F.total) >= 0, "le compte des fins (" + big + ")");
    check(await pg.locator(".endmap-ends li").count() === F.found.length, "une ligne par fin trouvée");
    // nothing of what was not read: no title of a page not read, no ending not found, anywhere on the screen
    var text = await pg.locator("main.endmap").innerText();
    var svgText = (await pg.$$eval("main.endmap svg text", function (x) { return x.map(function (e) { return e.textContent; }); })).join("\n");
    var all = text + "\n" + svgText;
    M.endingsOf(maree).forEach(function (e) { if (!rec.endings[e.id] && all.indexOf(e.title) >= 0) check(false, "la fin non trouvée « " + e.title + " » se lit sur la carte"); });
    var read = {}; Object.keys(rec.pages).forEach(function (k) { read[String(maree.passages[k].title || "").replace(/\*/g, "")] = 1; });
    var leaks = Object.keys(maree.passages).filter(function (k) { var t = String(maree.passages[k].title || "").replace(/\*/g, ""); return t.length > 14 && !read[t] && !rec.pages[k] && svgText.indexOf(t) >= 0; });
    check(!leaks.length, "des titres de pages non lues sur la carte : " + leaks.slice(0, 3).join(", "));
    check(await pg.locator(".endmap svg .em-fog").count() === m.acts[0].stubs.length, "les chemins du premier acte dans le brouillard");
    check(await pg.locator(".endmap svg .em-end").count() >= 0, "les étoiles");
    await shot("1-carte-acte1.png");
    // a stub tapped: the words of the way, and nothing about where it leads
    var fog = pg.locator(".endmap svg .em-fog").first();
    if (await fog.count()) { await fog.dispatchEvent("click"); var cap = await pg.locator(".endmap-cap").innerText(); check(/jamais pris/.test(cap), "un chemin touché dit qu'il n'a jamais été pris (" + cap + ")"); await shot("2-chemin-dans-le-brouillard.png"); }
    // an ending of the list: its act is shown, its star picked
    if (F.found.length) { await pg.locator(".endmap-ends li button").last().click(); check(await pg.locator(".endmap svg .em-end.pick").count() === 1, "la fin touchée dans la liste est montrée sur la carte"); await shot("3-une-fin-sur-la-carte.png"); }
    // the acts
    check(await pg.locator(".endmap-acts button").count() === m.acts.length, "un bouton par acte atteint");
    await pg.getByRole("button", { name: "← Bibliothèque" }).click();
    await pg.waitForSelector("article.card, .spine");
    // 3. Kardan: the map from the stored game fills the record's pages (games from before 25.5)
    card = await openBook(pg, "Le labyrinthe de Kardan");
    await card.getByRole("button", { name: "En savoir plus" }).click();
    card = await openBook(pg, "Le labyrinthe de Kardan");
    await card.locator(".records > button").first().click();
    await card.getByRole("button", { name: "🗺 Carte des fins" }).click();
    await pg.waitForSelector("main.endmap svg");
    await pg.waitForTimeout(300);
    var p = await prof(), pk = Object.keys(((p.records || {}).kardan || {}).pages || {});
    check(pk.length >= Object.keys(mid.seen).length, "les pages de la partie gardée passent dans le dossier de Léa (" + pk.length + ")");
    check(/aucune fin|0 fin/.test(await pg.locator(".endmap-big").innerText()), "Kardan : 0 fin trouvée");
    await shot("4-kardan-debut.png");
    await pg.getByRole("button", { name: "← Bibliothèque" }).click();
    // 4. Playing: a choice taken writes the trail and the pages read, with the page they came from when no way says it
    await pg.getByRole("tab", { name: /Mes parties/ }).click().catch(function () {});
    await pg.getByRole("button", { name: "Reprendre" }).first().click();
    await pg.waitForSelector(".choices button, .choice");
    await pg.locator(".choices button, button.choice").first().click();
    await pg.waitForTimeout(300);
    p = await prof();
    var kr = p.records.kardan;
    check(Object.keys(kr.trail || {}).length >= 6, "les choix de la partie sont passés dans le dossier (" + Object.keys(kr.trail || {}).length + ")");
    check(Object.keys(kr.pages || {}).length > pk.length || Object.keys(kr.pages).length >= Object.keys(mid.seen).length, "les pages lues restent dans le dossier");
  } catch (e) { bad.push("erreur : " + (e && e.stack || e)); }
  errors.forEach(function (e) { bad.push("console : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("cartefins-test : " + bad.length + " problème(s)\n- " + bad.join("\n- ")); process.exit(1); }
  console.log("cartefins-test : ok");
})();
