"use strict";
// The notebook style (11.5, Clément 17/11: « plus organique »): the reading page is a sheet of paper, the chosen line is
// ringed by hand before the page turns, the new page's ink dries; « Classique » keeps the earlier look, at once.
// Usage: node tests/site.js && node tests/carnet-test.js
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }

async function firstPage(pg, url) {
  await pg.goto(url); await pg.waitForSelector("section");
  await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click();
  await (await openBook(pg, "Kardan")).getByRole("button", { name: /Nouvelle partie/ }).click();
  await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
  for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
  await pg.getByRole("button", { name: "Commencer la lecture" }).click();
  await pg.waitForSelector(".choices .choice:not([disabled])");
}

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("carnet-test : lance d'abord node tests/site.js"); process.exit(2); }
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html", b = await chromium.launch(), errors = [];
  try {
    // with motion: the ring, then the next page with drying ink
    var ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", viewport: { width: 390, height: 844 }, reducedMotion: "no-preference" }), pg = await ctx.newPage();
    await pg.addInitScript(function () { try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {} });
    pg.on("pageerror", function (e) { errors.push(e.message); });
    await firstPage(pg, url);
    var look = await pg.evaluate(function () {
      var r = document.documentElement, page = document.querySelector(".page.read"), cs = getComputedStyle(page), before = getComputedStyle(page, "::before");
      return { style: r.getAttribute("data-style"), screen: r.getAttribute("data-screen"), defs: !!document.getElementById("carnet-bord"), border: cs.borderTopWidth, filter: before.filter,
        choiceBorder: getComputedStyle(document.querySelector(".choice")).borderTopWidth, title: document.querySelector("#page-title").textContent };
    });
    check(look.style === "carnet" && look.screen === "game", "le carnet est le style par défaut sur la page de lecture (" + look.style + ", " + look.screen + ")");
    check(look.defs && /carnet-bord/.test(look.filter), "la feuille a ses bords tremblés (" + look.filter + ")");
    check(look.border === "0px" && look.choiceBorder === "0px", "plus de cadre autour de la page ni des choix");
    await pg.locator(".choices .choice:not([disabled])").first().click();
    var ring = await pg.evaluate(function () { return { ring: !!document.querySelector(".choice.picked .carnet-cercle path"), others: [].every.call(document.querySelectorAll(".choices .choice"), function (c) { return c.disabled; }) }; });
    check(ring.ring, "le choix pris est entouré à la main");
    check(ring.others, "les autres choix attendent pendant le trait (pas de double choix)");
    await pg.waitForFunction(function (t) { var e = document.querySelector("#page-title"); return e && e.textContent !== t; }, look.title, { timeout: 3000 }).catch(function () { bad.push("la page suivante arrive après le trait"); });
    check(await pg.evaluate(function () { return !!document.querySelector(".page.read.ink-in"); }), "l'encre de la nouvelle page sèche (ink-in)");
    await ctx.close();
    // reduced motion: no ring, the page turns at once
    ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", reducedMotion: "reduce" }); pg = await ctx.newPage();
    await pg.addInitScript(function () { try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {} });
    pg.on("pageerror", function (e) { errors.push(e.message); });
    await firstPage(pg, url);
    var t0 = await pg.textContent("#page-title");
    await pg.locator(".choices .choice:not([disabled])").first().click();
    check(await pg.textContent("#page-title") !== t0, "moins d'animations : la page tourne tout de suite");
    // Classique: the earlier look
    await pg.keyboard.press("r"); await pg.getByRole("button", { name: "Classique" }).click(); await pg.keyboard.press("Escape");
    var classic = await pg.evaluate(function () { return { style: document.documentElement.getAttribute("data-style"), border: getComputedStyle(document.querySelector(".choice")).borderTopWidth }; });
    check(classic.style === "classique" && classic.border !== "0px", "« Classique » rend les choix encadrés (" + JSON.stringify(classic) + ")");
    await ctx.close();
  } catch (e) { bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close();
  if (bad.length) { console.log("carnet-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("carnet-test : OK");
})();
