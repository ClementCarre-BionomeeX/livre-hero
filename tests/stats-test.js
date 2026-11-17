"use strict";
// Reading statistics (9.9, Clément 16/11): per reader (habits, books finished, the sheet and timeline of a reading)
// and per book (every reader's time); a page read is counted in the game's sittings.
// Usage: node tests/site.js && node tests/stats-test.js
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var D = function (d, hh, mm) { return new Date(2026, 10, d, hh, mm || 0).getTime(); };
var MIN = 60000;
function game(id, profil, hero, o) {
  return Object.assign({ profil: profil, story: "kardan", storyTitle: "Le labyrinthe de Kardan", hero: hero, archLabel: "Guerrier", level: 2, where: "Kardan", state: "{}", undo: [], log: [] }, o);
}
var SEED = {
  "idx:profils": ["p1", "p2"], "profils:p1": { name: "Léa", color: "#a33", created: D(1, 9) }, "profils:p2": { name: "Tom", color: "#33a", created: D(1, 9, 1) },
  "profil": "p1", "nouveautes-vues": "999",
  "idx:parties": ["g1", "g2", "g3"],
  // Léa: Kardan finished in three sittings over three days (from 9.9), with two acts
  "parties:g1": game("g1", "p1", "Ivo", { ended: true, created: D(10, 20), updated: D(12, 21), endedAt: D(12, 21), endTitle: "La porte du matin", playMs: 95 * MIN, wordsRead: 17100, turns: 120,
    days: { "2026-11-10": 40 * MIN, "2026-11-11": 25 * MIN, "2026-11-12": 30 * MIN }, sessions: [[D(10, 20), D(10, 20, 40), 40 * MIN, 7200, 50], [D(11, 20), D(11, 20, 25), 25 * MIN, 4500, 30], [D(12, 20, 30), D(12, 21), 30 * MIN, 5400, 40]],
    actLog: { a1: { t: D(10, 20), ms: 60 * MIN }, a2: { t: D(11, 20, 10), ms: 35 * MIN } }, seenN: 90, passN: 300, undos: 4 }),
  // Léa: an old game, finished before the sittings were counted
  "parties:g2": game("g2", "p1", "Mara", { ended: true, created: D(3, 18), updated: D(4, 19), playMs: 70 * MIN, turns: 80, days: { "2026-11-03": 30 * MIN, "2026-11-04": 40 * MIN } }),
  // Tom: Kardan in 2 h, one evening
  "parties:g3": game("g3", "p2", "Tess", { ended: true, created: D(14, 18), updated: D(14, 20), endedAt: D(14, 20), endTitle: "Le secret de Tom", playMs: 120 * MIN, days: { "2026-11-14": 120 * MIN }, sessions: [[D(14, 18), D(14, 20), 120 * MIN, 18000, 140]] }),
};

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("stats-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), SHOTS = process.env.APERCUS || "", ctx = await b.newContext(Object.assign({ serviceWorkers: "block", locale: "fr-FR", timezoneId: "Europe/Paris", reducedMotion: "reduce" }, SHOTS ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 } : {})), pg = await ctx.newPage(), errors = [];
  pg.on("pageerror", function (e) { errors.push(e.message); });
  pg.on("console", function (m) { if (/^render:/.test(m.text())) errors.push(m.text().slice(0, 600)); });
  await pg.addInitScript(function (seed) {
    if (sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1");
    Object.keys(seed).forEach(function (k) { localStorage.setItem("livre-heros:" + k, JSON.stringify(seed[k])); });
  }, SEED);
  var shot = async function (name) { if (SHOTS) await pg.screenshot({ path: path.join(SHOTS, name), fullPage: true }); };
  var fig = async function (name) { var d = pg.locator(".bilan div").filter({ has: pg.locator("dt", { hasText: new RegExp("^" + name + "$") }) }).first(); return (await d.count()) ? (await d.locator("dd").innerText()).trim() : null; };
  try {
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    // 1. From « Plus », the reader's statistics.
    await pg.getByRole("tab", { name: "Plus" }).click();
    await pg.getByRole("button", { name: "📊 Statistiques de lecture" }).click();
    await pg.waitForSelector("main.stats");
    check(await fig("Livres finis") === "2", "Léa a fini 2 livres (" + await fig("Livres finis") + ")");
    check(await fig("Temps de lecture") === "2 h 45", "temps total de Léa : 2 h 45 (" + await fig("Temps de lecture") + ")");
    check(await fig("Plus longue série") === "3 jours de suite", "série de 3 jours (" + await fig("Plus longue série") + ")");
    check(await fig("Plus longue séance") === "40 min", "plus longue séance 40 min (" + await fig("Plus longue séance") + ")");
    check(await fig("Lit surtout") === "le soir", "Léa lit surtout le soir (" + await fig("Lit surtout") + ")");
    check(await pg.locator(".sr").filter({ hasText: "180 mots/min" }).count() === 1, "l'allure du livre : 17 100 mots en 95 min = 180 mots/min");
    await shot("1-lecteur.png");
    // 2. The sheet of the finished reading, with its timeline; the ending is named on her own sheet.
    var card = pg.locator(".run-card").filter({ hasText: "Ivo" }).first();
    await card.locator(".fold-head").click();
    card = pg.locator(".run-card.open");
    check(await fig("Lu en") === "1 h 35", "Kardan lu en 1 h 35 (" + await fig("Lu en") + ")");
    check(await fig("Séances") === "3", "3 séances (" + await fig("Séances") + ")");
    check(/^3 jours/.test(await fig("Étalé sur") || ""), "étalé sur 3 jours (" + await fig("Étalé sur") + ")");
    check(/^30 %/.test(await fig("Livre découvert") || ""), "30 % du livre découvert (" + await fig("Livre découvert") + ")");
    check(await fig("Fin") === "La porte du matin", "la fin est nommée sur la fiche de la lectrice");
    check(await card.locator(".tl-list li").count() === 3, "la frise a trois jours");
    check(await card.locator(".tl-list li.end").filter({ hasText: "Fin du livre" }).count() === 1, "la frise marque le jour de la fin");
    check(await card.locator(".sr").count() === 2, "le temps de chaque acte (2 actes)");
    await shot("2-fiche-et-frise.png");
    // the old game: a shorter sheet, said so
    await pg.locator(".run-card").filter({ hasText: "Mara" }).locator(".fold-head").click();
    check(await pg.locator(".run-card.open").filter({ hasText: "avant le détail des séances" }).count() === 1, "une ancienne partie dit que ses séances ne sont pas connues");
    // 3. Per book: every reader, the fastest, and another reader's ending stays unnamed.
    await pg.getByRole("tab", { name: "Par livre" }).click();
    check(await fig("Lectures finies") === "3", "3 lectures finies de Kardan (" + await fig("Lectures finies") + ")");
    check(await fig("Le plus rapide") === "1 h 10 (Léa)", "le plus rapide : Léa en 1 h 10 (" + await fig("Le plus rapide") + ")");
    check(await fig("Temps moyen pour le finir") === "1 h 35", "temps moyen 1 h 35 (" + await fig("Temps moyen pour le finir") + ")");
    await pg.locator(".run-card").filter({ has: pg.locator(".fold-title", { hasText: "Tom" }) }).locator(".fold-head").click();
    await shot("3-par-livre.png");
    check(await pg.locator(".run-card.open").filter({ hasText: "Le secret de Tom" }).count() === 0, "la fin d'un autre lecteur n'est pas nommée");
    // 4. A page read is counted: the game keeps its sitting.
    await pg.getByRole("button", { name: "← Bibliothèque" }).click();
    await pg.getByRole("tab", { name: "Bibliothèque" }).click();
    await (await openBook(pg, "Kardan")).getByRole("button", { name: "Nouvelle partie" }).click();
    await pg.fill('input[aria-label="Nom du héros"]', "Zia");
    await pg.locator("button.arch").first().click();
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForSelector(".choices button");
    await pg.waitForTimeout(1200);
    await pg.locator(".choices button").first().click();
    await pg.waitForTimeout(400);
    var g = await pg.evaluate(function () {
      var ids = JSON.parse(localStorage.getItem("livre-heros:idx:parties")); for (var i = 0; i < ids.length; i++) { var d = JSON.parse(localStorage.getItem("livre-heros:parties:" + ids[i])); if (d.hero === "Zia") return d; } return null;
    });
    check(g && g.sessions && g.sessions.length === 1 && g.sessions[0][4] === 1 && g.sessions[0][2] > 0, "le premier choix ouvre une séance d'une page (" + JSON.stringify(g && g.sessions) + ")");
    check(g && g.wordsRead > 0 && g.playMs > 0 && g.pagesRead === 1, "mots, temps et pages comptés");
    check(g && g.passN > 0 && g.seenN >= 1, "la part du livre vue est gardée");
    var a = g && Object.keys(g.actLog || {})[0];
    check(a && g.actLog[a].ms > 0 && g.actLog[a].t > 0, "le temps de l'acte est compté");
  } catch (e) { await pg.screenshot({ path: require("os").tmpdir() + "/stats-echec.png" }); bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("stats-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("stats-test : OK");
})();
