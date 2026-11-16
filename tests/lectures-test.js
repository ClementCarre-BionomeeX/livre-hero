"use strict";
// Books to read (story.lecture): each one opens, shows its notice, reads its first pages with « Suivant », names its
// people from their entrance, and its reading is counted in the statistics (9.9) like any other book.
// Why: Clément, 16/11 — the novels of H. G. Wells join « Le Monde perdu » ; their reading time must be counted.
// Usage: node tests/site.js && node tests/lectures-test.js [id…]
var fs = require("fs"), path = require("path"), http = require("http");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var IDS = process.argv.slice(2);
var BOOKS = (IDS.length ? IDS : require("./page.js").STORIES).map(function (id) { return JSON.parse(fs.readFileSync(path.join(__dirname, "..", "histoires", id + ".json"), "utf8")); }).filter(function (st) { return st.lecture; });

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("lectures-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), SHOTS = process.env.APERCUS || "";
  for (var st of BOOKS) {
    var ctx = await b.newContext(Object.assign({ serviceWorkers: "block", locale: "fr-FR", timezoneId: "Europe/Paris" }, SHOTS ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 } : {})), pg = await ctx.newPage(), errors = [];
    pg.on("pageerror", function (e) { errors.push(e.message); });
    pg.on("console", function (m) { if (/^render:/.test(m.text())) errors.push(m.text().slice(0, 600)); });
    await pg.addInitScript(function () { try { if (!localStorage.getItem("livre-heros:profil")) { localStorage.setItem("livre-heros:idx:profils", JSON.stringify(["p1"])); localStorage.setItem("livre-heros:profils:p1", JSON.stringify({ name: "Léa", color: "#a33", created: Date.now(), prefs: { gens: "noms" } })); localStorage.setItem("livre-heros:profil", JSON.stringify("p1")); localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } } catch (e) {} });
    var shot = async function (n) { if (SHOTS) { fs.mkdirSync(SHOTS, { recursive: true }); await pg.screenshot({ path: path.join(SHOTS, st.id + "-" + n) }); } };
    try {
      await pg.goto(url); await pg.waitForSelector("article.card");
      var card = pg.locator("article.card").filter({ hasText: st.title }).first();
      check(await card.count() === 1, st.id + " : le livre est dans la bibliothèque");
      await card.getByRole("button", { name: "Nouvelle partie" }).click();
      await pg.getByRole("button", { name: "Commencer la lecture" }).waitFor();
      if (st.notice) check(await pg.locator("aside.book-notice").count() === 1, st.id + " : la notice s'affiche à l'ouverture");
      await shot("1-ouverture.png");
      await pg.getByRole("button", { name: "Commencer la lecture" }).click();
      await pg.waitForSelector(".choices button");
      var order = Object.keys(st.passages), first = st.passages[order[0]];
      check(await pg.locator("#page-title").innerText() === first.title, st.id + " : la première page s'ouvre (" + await pg.locator("#page-title").innerText() + ")");
      var met = (first.fx && first.fx.meet) || [];
      var named = met.filter(function (k) { return (st.people[k].aka || []).length; });
      if (named.length) check(await pg.locator("button.pp").count() > 0, st.id + " : les gens de la première page sont cliquables");
      await shot("2-premiere-page.png");
      await pg.waitForTimeout(1200);
      for (var i = 0; i < 3; i++) { await pg.locator(".choices button").first().click(); await pg.waitForTimeout(250); }
      check(await pg.locator("#page-title").innerText() === st.passages[order[3]].title, st.id + " : « Suivant » mène aux pages dans l'ordre du livre");
      await shot("3-quatrieme-page.png");
      var g = await pg.evaluate(function (id) {
        var ids = JSON.parse(localStorage.getItem("livre-heros:idx:parties")); for (var i = 0; i < ids.length; i++) { var d = JSON.parse(localStorage.getItem("livre-heros:parties:" + ids[i])); if (d.story === id) return d; } return null;
      }, st.id);
      check(g && g.wordsRead > 0 && g.playMs > 0 && g.pagesRead === 3, st.id + " : mots, temps et pages comptés (" + JSON.stringify(g && [g.wordsRead, g.playMs, g.pagesRead]) + ")");
      check(g && g.sessions && g.sessions.length === 1, st.id + " : la lecture ouvre une séance");
      var a = g && Object.keys(g.actLog || {})[0];
      check(a && g.actLog[a].ms > 0, st.id + " : le temps du chapitre est compté");
    } catch (e) { await pg.screenshot({ path: require("os").tmpdir() + "/lectures-echec-" + st.id + ".png" }); bad.push(st.id + " : le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
    errors.forEach(function (e) { bad.push(st.id + " : erreur de la page : " + e); });
    await ctx.close();
  }
  await b.close(); server.close();
  if (bad.length) { console.log("lectures-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("lectures-test : OK (" + BOOKS.map(function (s) { return s.id; }).join(", ") + ")");
})();
