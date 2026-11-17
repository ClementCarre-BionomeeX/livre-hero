"use strict";
// The habitual hero (Clément, 16/11): a reader keeps a name and a face from one story to the next, and the game for
// several lists the registered readers, each coming with their hero.
// Usage: node tests/site.js && node tests/habituel-test.js
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var T0 = Date.parse("2026-11-10T10:00:00Z");
var SEED = {
  "idx:profils": ["p1", "p2"], "profils:p1": { name: "Léa", color: "#a33", created: T0 }, "profils:p2": { name: "Tom", color: "#33a", created: T0 + 1 },
  "profil": "p1", "nouveautes-vues": "999",
};

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("habituel-test : lance d'abord node tests/site.js"); process.exit(2); }
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
  var prof = function (id) { return pg.evaluate(function (k) { return JSON.parse(localStorage.getItem("livre-heros:profils:" + k)); }, id); };
  var book = function (title) { return { getByRole: function (r, o) { return { click: async function () { await (await openBook(pg, title)).getByRole(r, o).click(); } }; } }; };
  try {
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    // 1. A first hero: kept as Léa's habitual one (the box is ticked when she has none).
    await book("Kardan").getByRole("button", { name: "Nouvelle partie" }).click();
    check(await pg.inputValue('input[aria-label="Nom du héros"]') === "", "sans héros habituel, le nom est vide");
    await pg.fill('input[aria-label="Nom du héros"]', "Ivo");
    await pg.locator("button.arch").first().click();
    await pg.getByRole("button", { name: /Au féminin/ }).click();
    var keep = pg.locator(".hero-keep input[type=checkbox]");
    check(await keep.count() === 1 && await keep.isChecked(), "la case « Garder ce nom et ce visage » est cochée pour un premier héros");
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForTimeout(500);
    var p1 = await prof("p1");
    check(p1.hero && p1.hero.name === "Ivo" && p1.hero.fem === true && p1.hero.face && p1.hero.face.skin, "le héros habituel de Léa est enregistré avec son visage");

    // 2. Another story starts with the same hero, the same face.
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    await book("Kardan").getByRole("button", { name: "Nouvelle partie" }).click();
    check(await pg.inputValue('input[aria-label="Nom du héros"]') === "Ivo", "une nouvelle histoire reprend le nom habituel");
    check(await pg.locator(".hero-keep").filter({ hasText: "héros habituel de Léa" }).count() === 1, "la création dit que c'est le héros habituel");
    await pg.getByRole("button", { name: "← Bibliothèque" }).click();
    await pg.locator(".reader-btn").click();
    check(await pg.locator(".habitual").filter({ hasText: "Ivo" }).count() === 1, "« Qui lit ? » montre le héros habituel");

    // 3. For several: the registered readers in a list, each with their hero.
    await pg.locator(".reader-btn").click();
    await book("Écu de Vellane").getByRole("button", { name: "Jouer à plusieurs" }).click();
    var sels = pg.locator("select.who-sel");
    check(await sels.count() === 2, "deux listes de joueurs pour une histoire à deux");
    check(await sels.nth(0).inputValue() === "p1" && await sels.nth(1).inputValue() === "p2", "les lecteurs enregistrés sont proposés, celui qui a ouvert le livre en premier");
    check(/Ivo/.test(await sels.nth(0).locator("option").first().innerText()), "la liste montre le héros habituel du lecteur");
    await sels.nth(1).selectOption("");
    check(await pg.locator('input[aria-label="Nom du joueur 2"]').count() === 1, "« Autre joueur… » ouvre un champ pour son nom");
    await pg.fill('input[aria-label="Nom du joueur 2"]', "Mamie");
    await pg.getByRole("button", { name: "Continuer" }).click();
    check(await pg.inputValue('input[aria-label="Nom du héros"]') === "Ivo", "à plusieurs, le joueur 1 (Léa) arrive avec son héros habituel");
  } catch (e) { await pg.screenshot({ path: require("os").tmpdir() + "/habituel-echec.png" }); bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("habituel-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("habituel-test : OK");
})();
