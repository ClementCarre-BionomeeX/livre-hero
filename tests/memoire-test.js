"use strict";
// The books remember the reader, in the app (25.8): a finished game leaves its traces in the reader's profile, and a
// new game of another book starts with what that book asks about. Engine and validator: tests/ailleurs-test.js.
// Usage: node tests/site.js && node tests/memoire-test.js
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var T0 = Date.parse("2026-11-10T10:00:00Z");
var SEED = {
  "idx:profils": ["p1", "p2"], "profil": "p1", "nouveautes-vues": "999",
  // Léa gave the last page to Madame Vernis, in an earlier game of the Catalogue; Tom has read nothing.
  "profils:p1": { name: "Léa", color: "#a33", created: T0, records: { catalogue: { endings: { "fin:vernis": T0 }, feats: {}, axes: { page: { id: "page-mentions", t: T0 } } } } },
  "profils:p2": { name: "Tom", color: "#33a", created: T0 + 1 },
};

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("memoire-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR" }), pg = await ctx.newPage(), errors = [];
  pg.on("pageerror", function (e) { errors.push(e.message); });
  pg.on("console", function (m) { if (/^render:/.test(m.text())) errors.push(m.text().slice(0, 600)); });
  await pg.addInitScript(function (seed) {
    if (sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1");
    Object.keys(seed).forEach(function (k) { localStorage.setItem("livre-heros:" + k, JSON.stringify(seed[k])); });
  }, SEED);
  var ls = function (k) { return pg.evaluate(function (k) { return JSON.parse(localStorage.getItem("livre-heros:" + k)); }, k); };
  // The games of a reader for a story, newest first, with their engine state.
  var games = async function (prof, story) {
    var out = [];
    for (var id of (await ls("idx:parties")) || []) { var d = await ls("parties:" + id); if (d && d.profil === prof && d.story === story) out.push(d); }
    return out.sort(function (a, c) { return c.created - a.created; }).map(function (d) { return Object.assign(d, { s: typeof d.state === "string" ? JSON.parse(d.state) : d.state }); });
  };
  var begin = async function (title) {
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    await (await openBook(pg, title)).getByRole("button", { name: "Nouvelle partie" }).click();
    var name = pg.locator('input[aria-label="Nom du héros"]');
    if (await name.count()) { await name.fill("Ivo"); if (await pg.locator("button.arch").count()) await pg.locator("button.arch").first().click(); }
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForSelector(".choices button");
  };
  try {
    // 1. Léa opens La Grande Fonte: her game starts with what she did in the Catalogue, and nothing else.
    await begin("La Grande Fonte");
    await pg.waitForTimeout(400);
    var g1 = (await games("p1", "croute"))[0];
    check(g1 && JSON.stringify(g1.s.ailleurs) === JSON.stringify({ "catalogue:page-mentions": 1 }), "la partie de Léa part avec la trace du Catalogue : " + JSON.stringify(g1 && g1.s.ailleurs));

    // 2. Tom, who has read nothing, starts the same book with no memory at all.
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    await pg.evaluate(function () { localStorage.setItem("livre-heros:profil", JSON.stringify("p2")); });
    await begin("La Grande Fonte");
    await pg.waitForTimeout(400);
    var g2 = (await games("p2", "croute"))[0];
    check(g2 && g2.s.ailleurs === undefined, "la partie de Tom part sans mémoire");

    // 3. Tom reads the Catalogue to an ending: the trace of that game is kept in his profile, on its axis.
    await begin("Le Catalogue de 1899");
    for (var i = 0; i < 80 && !(await pg.locator(".ending, .end-card, .fin").count()); i++) {
      var p2 = await ls("profils:p2");
      if (p2.records && p2.records.catalogue && Object.keys(p2.records.catalogue.endings || {}).length) break;
      // straight to the sale, then the last choice offered each time (the first ones look around the room)
      var sale = pg.locator(".choices button").filter({ hasText: /Ouvrir la vente/ }), btns = pg.locator(".choices button:not([disabled])");
      if (await sale.count()) await sale.first().evaluate(function (el) { el.click(); }); else if (await btns.count()) await btns.last().evaluate(function (el) { el.click(); });
      await pg.waitForTimeout(350);
    }
    var rec = ((await ls("profils:p2")).records || {}).catalogue || {};
    check(Object.keys(rec.endings || {}).length === 1, "Tom a fini le Catalogue : " + JSON.stringify(rec.endings));
    check(rec.axes && rec.axes.page && /^page-/.test(rec.axes.page.id), "la trace de sa partie est gardée sur son axe : " + JSON.stringify(rec.axes));

    // 4. His next game of La Grande Fonte knows it; the one he had begun before does not change.
    if (rec.axes && rec.axes.page) {
      await begin("La Grande Fonte");
      await pg.waitForTimeout(400);
      var gs = await games("p2", "croute"), want = "catalogue:" + rec.axes.page.id, asked = ["catalogue:page-lue", "catalogue:page-mentions", "catalogue:page-vendue"].indexOf(want) >= 0;
      check(gs.length === 2 && (asked ? gs[0].s.ailleurs && gs[0].s.ailleurs[want] === 1 : gs[0].s.ailleurs === undefined), "la nouvelle partie de Tom connaît sa trace (" + want + ") : " + JSON.stringify(gs[0] && gs[0].s.ailleurs));
      check(gs[1] && gs[1].s.ailleurs === undefined, "la partie commencée avant reste comme elle était");
    }
  } catch (e) { await pg.screenshot({ path: require("os").tmpdir() + "/memoire-echec.png" }); bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("memoire-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("memoire-test : OK");
})();
