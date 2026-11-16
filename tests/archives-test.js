"use strict";
// Archived games (Clément, 16/11): a finished game leaves the reader's list without being deleted, comes back with
// « Remettre dans la liste », and the archiving travels like any save (a backup file, the shared folder: the fresher
// copy wins, archiving counted as a change).
// Usage: node tests/site.js && node tests/archives-test.js
var fs = require("fs"), path = require("path"), http = require("http");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }

var T0 = Date.parse("2026-11-10T10:00:00Z");
function game(id, hero, ended, min) {
  return { profil: "p1", story: "kardan", storyTitle: "Le labyrinthe de Kardan", hero: hero, archLabel: "Guerrier", level: 2, where: "Kardan", ended: ended, updated: T0 + min * 60000, state: "{}", undo: [], log: [] };
}
var SEED = {
  "idx:profils": ["p1"], "profils:p1": { name: "Léa", color: "#a33", created: T0 },
  "idx:parties": ["g1", "g2", "g3"],
  "parties:g1": game("g1", "Ivo", true, 1), "parties:g2": game("g2", "Mara", true, 2), "parties:g3": game("g3", "Tess", false, 3),
  "profil": "p1", "nouveautes-vues": "999",
};

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("archives-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR" }), pg = await ctx.newPage(), errors = [];
  pg.on("pageerror", function (e) { errors.push(e.message); });
  await pg.addInitScript(function (seed) {
    if (sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1");
    Object.keys(seed).forEach(function (k) { localStorage.setItem("livre-heros:" + k, JSON.stringify(seed[k])); });
  }, SEED);
  var doc = function (id) { return pg.evaluate(function (k) { return JSON.parse(localStorage.getItem("livre-heros:parties:" + k)); }, id); };
  var lines = function () { return pg.locator(".saved-games > .save-line").count(); };
  try {
    await pg.goto(url); await pg.waitForSelector(".saved-games");
    check(await lines() === 3, "trois parties dans la liste au départ");
    check(await pg.locator(".archives-fold").count() === 0, "pas d'archives au départ");
    await pg.getByRole("button", { name: "🗄 Archiver les 2 parties terminées" }).click();
    await pg.waitForTimeout(300);
    check(await lines() === 1, "une partie reste dans la liste après « Archiver les parties terminées »");
    check(/Archives \(2\)/.test(await pg.locator(".archives-fold").innerText()), "le pli « Archives (2) » apparaît");
    var g1 = await doc("g1");
    check(g1 && g1.archived === true && g1.archivedAt > 0, "la partie archivée est enregistrée comme telle");
    check(g1 && g1.updated === T0 + 60000, "archiver ne change pas la date de la dernière lecture");
    check(g1 && g1.state === "{}", "la partie archivée garde sa sauvegarde");

    await pg.reload(); await pg.waitForSelector(".saved-games");
    check(await lines() === 1, "l'archivage tient après un rechargement");
    await pg.locator(".archives-fold").click();
    check(await pg.locator(".archives .save-line").count() === 2, "le pli ouvert montre les deux parties archivées");
    await pg.locator(".archives .save-line").filter({ hasText: "Ivo" }).getByRole("button", { name: "Remettre dans la liste" }).click();
    await pg.waitForTimeout(300);
    check(await lines() === 2, "« Remettre dans la liste » ramène la partie");
    g1 = await doc("g1");
    check(g1 && g1.archived === false, "la partie remise n'est plus archivée");

    // A backup made elsewhere: Mara archived there later, nothing played since. The archiving must win here.
    await pg.locator(".archives-fold").click().catch(function () {});
    var g2 = await doc("g2");
    await pg.evaluate(function () { localStorage.setItem("livre-heros:parties:g2", JSON.stringify(Object.assign(JSON.parse(localStorage.getItem("livre-heros:parties:g2")), { archived: false, archivedAt: 0 }))); });
    var file = path.join(require("os").tmpdir(), "archives-test-sauvegarde.json");
    var other = Object.assign({}, g2, { id: "g2", archived: true, archivedAt: T0 + 3600000 });
    fs.writeFileSync(file, JSON.stringify({ format: "livre-heros-sauvegarde", version: 1, exported: Date.now(), collections: { parties: [other] } }));
    await pg.reload(); await pg.waitForSelector(".saved-games");
    check(await lines() === 3, "avant l'import, Mara est dans la liste");
    await pg.setInputFiles('input[aria-label="Fichier de sauvegarde"]', file);
    await pg.waitForTimeout(600);
    check((await doc("g2")).archived === true, "une sauvegarde importée où la partie a été archivée plus tard l'archive ici");
    check(await lines() === 2, "après l'import, Mara a quitté la liste");
  } catch (e) { bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("archives-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("archives-test : OK");
})();
