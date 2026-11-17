"use strict";
// Finding a book (Clément, 17/11): the genres every book declares, the fuzzy search (typos, accents, words run
// together), the filters and the orders of the library; then the page itself (search line, filters, focus kept while
// typing), with captures for a phone and a tablet.
// Usage: node tests/site.js && node tests/bibliotheque-test.js [--captures <dossier>]
var fs = require("fs"), path = require("path"), http = require("http");
var B = require("../src/bibliotheque.js"), V = require("../src/validateur.js"), P = require("./page.js");
var HIST = path.join(__dirname, "..", "histoires"), ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var args = process.argv.slice(2), shots = args[0] === "--captures" ? args[1] : null;

// ---------------------------------------------------------------- the books and the engine's part
var stories = P.STORIES.map(function (id) { return JSON.parse(fs.readFileSync(path.join(HIST, id + ".json"), "utf8")); });
var cards = stories.map(B.card);
stories.forEach(function (st) {
  check(Array.isArray(st.tags) && st.tags.length, st.id + " : aucun genre déclaré (tags)");
  var r = B.checkTags(st);
  check(!r.errors.length && !r.warnings.length, st.id + " : " + r.errors.concat(r.warnings).join(" ; "));
  check(!!st.author, st.id + " : pas d'auteur");
  check(/^\d{4}-\d{2}-\d{2}$/.test(st.added || ""), st.id + " : pas de date d'arrivée (added)");
});
var GENRES = B.GENRES.map(function (g) { return g.k; });
GENRES.forEach(function (g) { check(cards.some(function (m) { return B.facets(m).genres.indexOf(g) >= 0; }), "genre « " + g + " » porté par aucun livre"); });
var bad1 = { id: "x", title: "x", start: "a", acts: [{ id: "I", start: "a" }], passages: { a: { act: "I", text: ["x"], end: "fin" } }, endings: { fin: { title: "Fin" } }, tags: "aventure" };
check(V.staticCheck(bad1).errors.some(function (e) { return /tags/.test(e); }), "le vérificateur accepte des tags qui ne sont pas une liste");
bad1.tags = ["aventur"];
check(V.staticCheck(bad1).warnings.some(function (e) { return /aventur/.test(e); }), "le vérificateur ne signale pas un genre inconnu");

var f = function (id) { return B.facets(cards.filter(function (m) { return m.id === id; })[0]); };
check(f("jekyll").type === "lecture" && f("jekyll").joueurs === null && f("jekyll").longueur === "court", "Jekyll : roman à lire court " + JSON.stringify(f("jekyll")));
check(f("courrier").type === "cartes", "Le Courrier : histoire à cartes");
check(f("adeux").joueurs === "deux" && f("vaudrenne").joueurs === "plusieurs" && f("kardan").joueurs === "seul", "nombre de joueurs");
check(f("cendres").longueur === "long" && f("kardan").longueur === "moyen" && f("soiree").longueur === "court", "longueurs des jeux");
check(f("maree").public === "adulte" && f("kardan").public === "tous", "public");
check(f("ile").auteur === "R. L. Stevenson" && f("kardan").auteur === "Claude" && f("mondeperdu").auteur === "Arthur Conan Doyle", "auteurs : " + f("ile").auteur + ", " + f("kardan").auteur);
check(B.matches(cards[0], { joueurs: ["deux", "plusieurs"] }) === !!cards[0].multi, "filtre joueurs");

// Searches: [query, the book that must come first, books that must not come at all]
var top = function (q) { var r = B.search(cards, q); return r.length ? r[0].m.id : null; };
var ids = function (q) { return B.search(cards, q).map(function (x) { return x.m.id; }); };
[["stevensn", "ile|enleve|jekyll|fleche|ballantrae"], ["welles", "guerremondes|hommeinvisible|ilemoreau|machinetemps|premiershommes"], ["jeckyl", "jekyll"],
  ["ile au tresor", "ile"], ["Île au trésor", "ile"], ["l'ile du docteur", "ilemoreau"], ["huisclos", "huisclos"], ["huis clos", "huisclos"], ["enquete", "enquete"],
  ["machine temps", "machinetemps"], ["invisble", "hommeinvisible"], ["croc blanc", "crocblanc"], ["conan doyle", "mondeperdu"], ["douzième coup", "douzieme"],
  ["sarance", "siege"], ["londn", "crocblanc"], ["cendre", "cendres"], ["science fiction", "guerremondes|hommeinvisible|ilemoreau|machinetemps|premiershommes|mondeperdu"]].forEach(function (c) {
  check(new RegExp("^(" + c[1] + ")$").test(top(c[0]) || ""), "recherche « " + c[0] + " » : premier livre " + top(c[0]) + ", attendu " + c[1]);
});
check(ids("stevenson").length === 5, "« stevenson » : les cinq Stevenson, rien d'autre (" + ids("stevenson").join(", ") + ")");
check(ids("wells").length === 5, "« wells » : les cinq Wells (" + ids("wells").join(", ") + ")");
check(ids("mer").indexOf("huisclos") < 0, "« mer » ne trouve pas la « mère » du Huis clos");
check(ids("à deux").slice(0, 3).sort().join() === "adeux,douzieme,pages", "« à deux » : les trois livres à deux d'abord (" + ids("à deux").join(", ") + ")");
check(ids("zzzz").length === 0, "« zzzz » ne trouve rien");
check(B.sortKey({ title: "Le Monde perdu" }) === "monde perdu" && B.sortKey({ title: "L'Île au trésor" }) === "ile au tresor", "titres rangés sans l'article");

// ---------------------------------------------------------------- the page
(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("bibliotheque-test : lance d'abord node tests/site.js"); process.exit(2); }
  var { chromium } = require("playwright");
  var server = http.createServer(function (q, r) {
    var fl = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (fl.indexOf(ROOT) !== 0 || !fs.existsSync(fl) || fs.statSync(fl).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(fl) ? "application/json" : /\.js$/.test(fl) ? "text/javascript" : "text/html" }); fs.createReadStream(fl).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var T0 = Date.parse("2026-11-15T10:00:00Z");
  var SEED = { "idx:profils": ["p1"], "profils:p1": { name: "Léa", color: "#a33", created: T0 }, profil: "p1", "nouveautes-vues": "999", shelf: "tous",
    "idx:parties": ["g1", "g2"], "parties:g1": { profil: "p1", story: "kardan", storyTitle: "Le labyrinthe de Kardan", hero: "Ivo", level: 2, where: "Kardan", ended: false, updated: T0, state: "{}", undo: [], log: [] },
    "parties:g2": { profil: "p1", story: "jekyll", storyTitle: "L'Étrange Cas du Dr Jekyll et de Mr Hyde", hero: "Léa", level: 1, where: "Londres", ended: true, archived: true, updated: T0 - 1, state: "{}", undo: [], log: [] } };
  var b = await chromium.launch(), errors = [];
  async function open(view) {
    var ctx = await b.newContext(Object.assign({ serviceWorkers: "block", locale: "fr-FR" }, view)), pg = await ctx.newPage();
    await pg.clock.setFixedTime(new Date("2026-11-17T20:00:00"));   // « Nouveau »: added on the 15th, 16th or 17th
    pg.on("pageerror", function (e) { errors.push(e.message); });
    await pg.addInitScript(function (seed) {
      if (sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1");
      Object.keys(seed).forEach(function (k) { localStorage.setItem("livre-heros:" + k, JSON.stringify(seed[k])); });
    }, SEED);
    await pg.goto(url); await pg.waitForSelector(".lib-q");
    return pg;
  }
  var titles = function (pg) { return pg.$$eval(".lib-results .book h3", function (x) { return x.map(function (e) { return e.textContent; }); }); };
  try {
    var pg = await open({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    // 9.4 kept « Pour tous » on the device: it is now the « Public » filter, still chosen.
    check(await pg.locator(".lib-chosen .chip").count() === 1, "le choix « Pour tous » d'avant n'est pas repris comme filtre");
    var all = await titles(pg);
    check(all.indexOf("Les Fils de la Marée") < 0, "un livre aux thèmes adultes reste malgré « Pour tous »");
    check(await pg.locator(".shelf-h", { hasText: "Romans à lire" }).count() === 1, "pas de rayon « Romans à lire »");
    if (shots) await pg.screenshot({ path: path.join(shots, "1-telephone-rayons.png") });
    // Typing: the list follows each letter, the field keeps the focus
    await pg.click(".lib-q"); await pg.keyboard.type("stevensn", { delay: 20 });
    var found = await titles(pg);
    check(found.length === 5 && found.every(function (t) { return !/Wells|Kardan/.test(t); }), "« stevensn » : " + found.join(" | "));
    check(await pg.evaluate(function () { return document.activeElement && document.activeElement.id === "lib-q"; }), "le champ de recherche perd la main pendant la frappe");
    if (shots) await pg.screenshot({ path: path.join(shots, "2-telephone-recherche.png") });
    await pg.keyboard.press("Escape");
    check(await pg.inputValue(".lib-q") === "" && await pg.locator(".lib-total").count() === 0 && await pg.locator(".shelf-h").count() > 0, "Échap ne vide pas la recherche");
    // Filters: open, pick « À deux » (counts shown), then « Fantasy »: the kinds narrow down
    await pg.click(".lib-filter-btn");
    await pg.locator(".lib-panel .chip", { hasText: "Pour tous" }).click();   // take the device's filter off
    await pg.locator(".lib-panel .chip", { hasText: "À deux" }).click();
    var two = await titles(pg);
    check(two.length === 3, "« À deux » : " + two.join(" | "));
    await pg.locator(".lib-panel .chip", { hasText: "Fantasy" }).click();
    var two2 = await titles(pg);
    check(two2.length === 2 && two2.indexOf("Le Pli de Brumefond") < 0, "« À deux » + « Fantasy » : " + two2.join(" | "));
    if (shots) await pg.screenshot({ path: path.join(shots, "3-telephone-filtres.png"), fullPage: false });
    await pg.locator(".lib-panel button", { hasText: "Fermer les filtres" }).click();
    check(await pg.locator(".lib-chosen .chip").count() === 2, "les filtres choisis ne restent pas affichés une fois le panneau fermé");
    await pg.locator(".lib-chosen button", { hasText: "Tout effacer" }).click();
    // Orders
    await pg.selectOption(".lib-sort", "titre");
    var byTitle = await titles(pg);
    check(byTitle.length === P.STORIES.length && byTitle[0] === "Le Cahier de Solène" && byTitle[1] === "Ce que garde la neige", "ordre par titre : " + byTitle.slice(0, 3).join(" | "));
    await pg.selectOption(".lib-sort", "recent");
    check((await titles(pg))[0] === "Le labyrinthe de Kardan", "« Lus récemment » : Kardan d'abord");
    await pg.selectOption(".lib-sort", "rayons");
    // A book's genres lead to the books that share them
    var card = pg.locator(".book", { hasText: "Croc-Blanc" });
    await card.getByRole("button", { name: "En savoir plus" }).click();
    await pg.locator(".book", { hasText: "Croc-Blanc" }).locator(".book-tags .chip", { hasText: "Nature et animaux" }).click();
    var nat = await titles(pg);
    check(nat.length === 2 && nat.indexOf("Croc-Blanc") >= 0 && nat.indexOf("Le Monde perdu") >= 0, "genre « Nature et animaux » depuis la fiche : " + nat.join(" | "));
    // Progress of the reader
    await pg.locator(".lib-chosen button", { hasText: "Tout effacer" }).click();
    await pg.click(".lib-filter-btn");
    await pg.locator(".lib-panel .chip", { hasText: "En cours" }).click();
    check((await titles(pg)).join() === "Le labyrinthe de Kardan", "filtre « En cours » : " + (await titles(pg)).join(" | "));
    await pg.locator(".lib-panel .chip", { hasText: "En cours" }).click();
    await pg.locator(".lib-panel button", { hasText: "Fermer les filtres" }).click();
    // The reader's views: newest first, not started yet, finished ones hidden; kept after a reload
    await pg.locator(".lib-views .chip", { hasText: "Nouveautés" }).click();
    var news = await titles(pg), adds = news.map(function (t) { var m = cards.filter(function (c) { return c.title === t; })[0]; return m && m.added; });
    check(news.length === P.STORIES.length && adds.every(function (d, i) { return !i || d <= adds[i - 1]; }), "Nouveautés : tous les livres du plus récent au plus ancien (" + adds.join(",") + ")");
    check(await pg.locator(".lib-total", { hasText: "derniers arrivés" }).count() === 1, "Nouveautés : la ligne « les derniers arrivés d'abord »");
    var fresh = cards.filter(function (m) { return m.added >= "2026-11-15" && m.id !== "kardan" && m.id !== "jekyll"; }).length;
    check(await pg.locator(".lib-results .new-tag").count() === fresh, "badges « Nouveau » : " + await pg.locator(".lib-results .new-tag").count() + " au lieu de " + fresh);
    check(await pg.locator(".lib-results .book", { hasText: "Le Douzième Coup" }).locator(".new-tag").count() === 1, "Le Douzième Coup n'a pas son badge");
    check(await pg.locator(".lib-results .book", { hasText: "Le Douzième Coup" }).locator("text=arrivé le 17 novembre").count() === 1, "la date d'arrivée n'est pas montrée");
    if (shots) await pg.screenshot({ path: path.join(shots, "5-telephone-nouveautes.png") });
    await pg.locator(".lib-views .chip", { hasText: "Pas encore commencés" }).click();
    var fresh2 = await titles(pg);
    check(fresh2.indexOf("Le labyrinthe de Kardan") < 0 && fresh2.indexOf("L'Étrange Cas du Dr Jekyll et de Mr Hyde") < 0 && fresh2.length === P.STORIES.length - 2, "Pas encore commencés : " + fresh2.length);
    await pg.locator(".lib-views .chip", { hasText: "Tous" }).click();
    check((await titles(pg)).indexOf("L'Étrange Cas du Dr Jekyll et de Mr Hyde") >= 0, "Jekyll terminé reste visible par défaut");
    await pg.locator(".lib-hide input").check();
    check((await titles(pg)).indexOf("L'Étrange Cas du Dr Jekyll et de Mr Hyde") < 0, "« Masquer les terminés » laisse Jekyll");
    await pg.reload(); await pg.waitForSelector(".lib-q");
    check((await titles(pg)).indexOf("L'Étrange Cas du Dr Jekyll et de Mr Hyde") < 0 && await pg.locator(".lib-hide input").isChecked(), "« Masquer les terminés » oublié au rechargement");
    await pg.context().close();

    var tab = await open({ viewport: { width: 1024, height: 1366 }, deviceScaleFactor: 2 });
    await tab.click(".lib-q"); await tab.keyboard.type("enquete");
    await tab.click(".lib-filter-btn");
    if (shots) await tab.screenshot({ path: path.join(shots, "4-tablette-enquete-filtres.png") });
    await tab.context().close();
  } catch (e) { bad.push("page : " + (e && e.message)); }
  await b.close(); server.close();
  errors.forEach(function (e) { bad.push("erreur dans la page : " + e); });
  if (bad.length) { console.log("bibliotheque-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("bibliotheque-test : tout va bien");
})();
