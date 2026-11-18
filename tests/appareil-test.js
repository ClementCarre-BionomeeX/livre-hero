"use strict";
// The « appareil ancien » mode and the speed diagnosis (13.6, Clément 18/11: « les perfs sont horribles » on his old
// tablet): the mode is offered when the device shows it is slow, it takes off the filters, shadows and motion, the
// books are read only when a screen asks for them; ?diag shows the frames per second and a report to copy.
// Usage: node tests/site.js && node tests/appareil-test.js
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("appareil-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var base = "http://127.0.0.1:" + server.address().port + "/index.html", b = await chromium.launch(), errors = [];
  async function page(init, q) {
    var ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", viewport: { width: 600, height: 900 }, reducedMotion: "no-preference" }), pg = await ctx.newPage();
    pg.on("pageerror", function (e) { errors.push(e.message); });
    await pg.addInitScript(init || function () {});
    await pg.addInitScript(function () { try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {} });
    await pg.goto(base + (q || "")); await pg.waitForFunction(function () { return window.LIVRE_OUVERT; });
    return { ctx: ctx, pg: pg };
  }
  async function reader(pg) { await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click(); }
  async function startKardan(pg) {
    await (await openBook(pg, "Kardan")).getByRole("button", { name: /Nouvelle partie/ }).click();
    await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForSelector(".choices .choice:not([disabled])");
  }
  try {
    // 1. a device with little memory: the mode is offered once; accepted, the page loses its costly drawing
    var P = await page(function () { localStorage.setItem("livre-heros:appareil-offre-test", "true"); Object.defineProperty(navigator, "deviceMemory", { get: function () { return 2; } }); });
    var pg = P.pg;
    await pg.waitForSelector(".modal", { timeout: 5000 }).catch(function () {});
    check(/mémoire de 2 Go/.test(await pg.textContent("body")), "le mode appareil ancien est proposé sur un appareil de 2 Go");
    await pg.getByRole("button", { name: "Passer en appareil ancien" }).click();
    check(await pg.evaluate(function () { return document.documentElement.getAttribute("data-appareil"); }) === "ancien", "le choix met data-appareil=ancien");
    await reader(pg); await startKardan(pg);
    var look = await pg.evaluate(function () { var p = document.querySelector(".page.read"); return { before: getComputedStyle(p, "::before").filter, shadow: getComputedStyle(p, "::before").boxShadow, ink: p.classList.contains("ink-in") }; });
    check(look.before === "none" && look.shadow === "none", "sans filtre ni ombre sur la feuille (" + JSON.stringify(look) + ")");
    var t0 = await pg.textContent("#page-title");
    await pg.locator(".choices .choice:not([disabled])").first().click();
    check(await pg.textContent("#page-title") !== t0, "la page tourne tout de suite, sans trait ni encre");
    check(!(await pg.locator(".page.read.ink-in").count()), "l'encre ne s'écrit pas en appareil ancien");
    var read = await pg.evaluate(function () { return performance.getEntriesByType("resource").filter(function (e) { return /histoires\//.test(e.name); }).map(function (e) { return e.name.split("/").pop(); }); });
    check(read.length <= 2 && read.indexOf("kardan.json") >= 0, "seul le livre ouvert est lu (" + read.join(", ") + ")");
    await P.ctx.close();
    // the choice is kept: no second offer; « Tout garder » keeps the look
    P = await page(function () { localStorage.setItem("livre-heros:appareil-offre-test", "true"); localStorage.setItem("livre-heros:appareil", JSON.stringify("normal")); Object.defineProperty(navigator, "deviceMemory", { get: function () { return 2; } }); });
    await P.pg.waitForTimeout(500);
    check(!(await P.pg.locator(".modal").count()), "une réponse donnée, l'offre ne revient pas");
    await P.ctx.close();
    // 2. a usual device: no offer, the notebook look, the books read in the background
    P = await page(); pg = P.pg;
    await pg.waitForTimeout(500);
    check(!(await pg.locator(".modal").count()), "pas d'offre sur un appareil sans signe de lenteur");
    await reader(pg);
    await pg.waitForFunction(function () { return performance.getEntriesByType("resource").filter(function (e) { return /histoires\//.test(e.name); }).length > 3; }, null, { timeout: 30000 }).catch(function () { bad.push("les livres se lisent en fond sur un appareil ordinaire"); });
    // the setting, in Réglages → Cet appareil
    await startKardan(pg);
    await pg.keyboard.press("r"); await pg.getByLabel("Appareil ancien").check();
    check(await pg.evaluate(function () { return document.documentElement.getAttribute("data-appareil"); }) === "ancien", "la case « Appareil ancien » des réglages met le mode");
    await pg.getByLabel("Appareil ancien").uncheck();
    check(await pg.evaluate(function () { return document.documentElement.getAttribute("data-appareil"); }) === null, "décochée, le carnet revient");
    await P.ctx.close();
    // 3. ?diag: the badge, the report, a measure
    P = await page(null, "?diag"); pg = P.pg;
    check(await pg.locator(".diag-badge").count() === 1, "?diag montre le petit ⏱");
    await reader(pg); await startKardan(pg);
    await pg.locator(".diag-badge").click();
    await pg.getByRole("button", { name: "Mesurer cet écran" }).click();
    await pg.waitForSelector(".diag-report", { timeout: 15000 });
    var rep = await pg.inputValue(".diag-report");
    ["Rapport de vitesse", "Processeurs", "Démarrage", "Livres lus", "Dessins de l'écran", "Images par seconde", "Mesures (game)"].forEach(function (k) { check(rep.indexOf(k) >= 0, "le rapport dit « " + k + " »"); });
    await pg.getByRole("button", { name: "Arrêter le diagnostic" }).click();
    check(!(await pg.locator(".diag-badge").count()), "« Arrêter le diagnostic » retire le ⏱");
    await P.ctx.close();
  } catch (e) { bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("appareil-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("appareil-test : OK");
})();
