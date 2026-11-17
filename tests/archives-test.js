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
  "idx:profils": ["p1", "p9"], "profils:p1": { name: "Léa", color: "#a33", created: T0 }, "profils:p9": { name: "Colin", color: "#3a3", created: T0 + 5 },
  // games for several: one of Léa's, finished; one of the children's, from before 9.5 (names only)
  "idx:multis": ["m1", "m2"],
  "multis:m1": { kind: "local", story: "pages", storyTitle: "L'Écu de Vellane", players: ["Léa", "Mamie"], readers: ["p1", null], updated: T0 + 5 * 60000, game: JSON.stringify({ players: [{ id: "j1", name: "Léa", wait: { kind: "fin" } }, { id: "j2", name: "Mamie", wait: { kind: "fin" } }] }) },
  "multis:m2": { kind: "local", story: "pages", storyTitle: "L'Écu de Vellane", players: ["Colin", "Coliane"], updated: T0 + 6 * 60000, game: JSON.stringify({ players: [{ id: "j1", name: "Colin", wait: null }] }) },
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
  // the home in tabs (9.4): the games are under « Mes parties »
  var gamesTab = async function () { var t = pg.getByRole("tab", { name: /Mes parties/ }); if (await t.count()) await t.click(); await pg.waitForSelector(".saved-games"); };
  try {
    await pg.goto(url); await pg.waitForSelector("section"); await gamesTab();
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

    await pg.reload(); await pg.waitForSelector("section"); await gamesTab();
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
    await pg.reload(); await pg.waitForSelector("section"); await gamesTab();
    check(await lines() === 3, "avant l'import, Mara est dans la liste");
    var more = pg.getByRole("tab", { name: "Plus" });
    if (await more.count()) { await more.click(); await pg.locator("button.fold-head", { hasText: "Sauvegardes" }).click(); }
    await pg.setInputFiles('input[aria-label="Fichier de sauvegarde"]', file);
    await pg.waitForTimeout(600); await gamesTab();
    check((await doc("g2")).archived === true, "une sauvegarde importée où la partie a été archivée plus tard l'archive ici");
    check(await lines() === 2, "après l'import, Mara a quitté la liste");
    // Games for several (Clément, 16/11): only the reader's own, and a finished one goes to the archives too.
    var mlines = function () { return pg.locator(".multi-games > .save-line").count(); };
    check(await mlines() === 1, "à plusieurs : seule la partie où Léa joue est montrée, pas celle des enfants");
    check(/terminée/.test(await pg.locator(".multi-games > .save-line").first().innerText()), "la partie à plusieurs finie est dite terminée");
    await pg.locator(".multi-games > .save-line").first().getByRole("button", { name: /Archiver/ }).click();
    await pg.waitForTimeout(300);
    check(await mlines() === 0, "la partie à plusieurs archivée quitte la liste");
    var m1 = await pg.evaluate(function () { return JSON.parse(localStorage.getItem("livre-heros:multis:m1")); });
    check(m1 && m1.archived === true && m1.game, "la partie à plusieurs archivée est enregistrée, avec son jeu");
    check(await pg.locator(".multi-games .archives-fold").count() === 1, "« Archives (1) » sous les parties à plusieurs");
  } catch (e) { bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("archives-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("archives-test : OK");
})();
