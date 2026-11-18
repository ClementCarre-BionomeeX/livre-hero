"use strict";
// Measures the game on a slow device (Clément, 18/11: « les perfs sont horribles » on his old Android tablet).
// Chromium with its processor slowed down (CDP throttling, 6x by default), a tablet screen (600×960, 2 pixels per
// point), then: the start, the library's tabs, a new game of Kardan, five pages turned, the hero's notebook, the
// frames per second still and while scrolling, a big book opened, the memory. Prints a table; --json writes it.
// Usage: node tests/site.js && node tests/perf-mesure.js [--cpu 6] [--style carnet|classique] [--leger] [--json out.json]
var fs = require("fs"), path = require("path"), http = require("http");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site");
var argv = process.argv.slice(2);
function arg(k, d) { var i = argv.indexOf(k); return i < 0 ? d : (argv[i + 1] && !/^--/.test(argv[i + 1]) ? argv[i + 1] : true); }
var CPU = +arg("--cpu", 6), STYLE = arg("--style", ""), LITE = !!arg("--leger", false), OUT = arg("--json", "");
var BIG = arg("--gros", "Cendres");

function serve() {
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  return new Promise(function (ok) { server.listen(0, "127.0.0.1", function () { ok(server); }); });
}

(async function () {
  if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.log("perf-mesure : lance d'abord node tests/site.js"); process.exit(2); }
  var server = await serve(), url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), res = {}, errors = [];
  var ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", viewport: { width: 600, height: 960 }, deviceScaleFactor: 2, hasTouch: true, reducedMotion: "no-preference" });
  var pg = await ctx.newPage();
  pg.on("pageerror", function (e) { errors.push(e.message); });
  await pg.addInitScript(function (o) {
    try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {}
    if (o.lite) try { localStorage.setItem("livre-heros:appareil", JSON.stringify("ancien")); } catch (e) {}
    // long tasks, kept for the measures
    window.__lt = []; try { new PerformanceObserver(function (l) { l.getEntries().forEach(function (e) { window.__lt.push(e.duration); }); }).observe({ entryTypes: ["longtask"] }); } catch (e) {}
  }, { lite: LITE });
  var cdp = await ctx.newCDPSession(pg);
  await cdp.send("Performance.enable");
  if (CPU > 1) await cdp.send("Emulation.setCPUThrottlingRate", { rate: CPU });
  async function metrics() { var m = (await cdp.send("Performance.getMetrics")).metrics, o = {}; m.forEach(function (x) { o[x.name] = x.value; }); return o; }
  async function step(name, fn) {
    var m0 = await metrics(); await pg.evaluate(function () { window.__lt = []; });
    var t0 = Date.now(); await fn(); var wall = Date.now() - t0;
    var m1 = await metrics(), lt = await pg.evaluate(function () { return window.__lt.slice(); });
    var d = function (k) { return Math.round((m1[k] - m0[k]) * 1000); };
    res[name] = { ms: wall, script: d("ScriptDuration"), style: d("RecalcStyleDuration"), layout: d("LayoutDuration"), task: d("TaskDuration"), longest: Math.round(Math.max.apply(null, [0].concat(lt))) };
  }
  async function fps(name, secs, during) {
    var p = pg.evaluate(function (ms) {
      return new Promise(function (ok) {
        var n = 0, t0 = performance.now(), last = t0, worst = 0;
        function f(t) { n++; worst = Math.max(worst, t - last); last = t; if (t - t0 < ms) requestAnimationFrame(f); else ok({ fps: Math.round(n * 1000 / (t - t0)), worst: Math.round(worst) }); }
        requestAnimationFrame(f);
      });
    }, secs * 1000);
    if (during) await during();
    res[name] = await p;
  }
  async function newGame(title) {
    await (await openBook(pg, title)).getByRole("button", { name: /Nouvelle partie/ }).click();
    await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
  }
  try {
    await step("démarrage", async function () { await pg.goto(url); await pg.waitForFunction(function () { return window.LIVRE_OUVERT; }, null, { timeout: 120000 }); });
    await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click();
    await pg.waitForSelector(".spine, article.card");
    await step("onglet Mes parties", async function () { await pg.getByRole("tab", { name: "Mes parties" }).click(); await pg.waitForTimeout(50); });
    await step("onglet Bibliothèque", async function () { await pg.getByRole("tab", { name: "Bibliothèque" }).click(); await pg.waitForSelector(".spine, article.card"); });
    await fps("images/s bibliothèque immobile", 3);
    await fps("images/s bibliothèque défilée", 3, async function () { for (var i = 0; i < 12; i++) { await pg.mouse.wheel(0, 250); await pg.waitForTimeout(200); } });
    await newGame("Kardan");
    await step("ouvrir Kardan (Commencer)", async function () { await pg.getByRole("button", { name: "Commencer la lecture" }).click(); await pg.waitForSelector(".choices .choice:not([disabled])", { timeout: 60000 }); });
    if (STYLE === "classique") { await pg.keyboard.press("r"); await pg.getByRole("button", { name: "Classique" }).click(); await pg.keyboard.press("Escape"); }
    var turns = [];
    for (var i = 0; i < 5; i++) {
      var title = await pg.textContent("#page-title");
      var choice = pg.locator(".choices .choice:not([disabled])").first();
      if (!(await choice.count())) break;
      await step("page " + (i + 1), async function () {
        await choice.click();
        await pg.waitForFunction(function (t) { var e = document.querySelector("#page-title"); return e && e.textContent !== t; }, title, { timeout: 30000 }).catch(function () {});
        await pg.waitForSelector(".choices .choice:not([disabled])", { timeout: 30000 }).catch(function () {});
      });
      turns.push(res["page " + (i + 1)]);
    }
    await fps("images/s lecture immobile", 3);
    await fps("images/s lecture défilée", 3, async function () { for (var i = 0; i < 12; i++) { await pg.mouse.wheel(0, 200); await pg.waitForTimeout(200); } });
    await step("carnet du héros", async function () { await pg.keyboard.press("c"); await pg.waitForSelector(".drawer", { timeout: 20000 }).catch(function () {}); await pg.waitForTimeout(100); });
    await pg.keyboard.press("Escape");
    res.mémoire_Mo = Math.round((await metrics()).JSHeapUsedSize / 1048576);
    await step("retour bibliothèque", async function () { await pg.keyboard.press("Escape"); await pg.evaluate(function () { var b = [].find.call(document.querySelectorAll("button"), function (x) { return /Bibliothèque/.test(x.textContent); }); if (b) b.click(); }); await pg.waitForSelector(".spine, article.card", { timeout: 30000 }); });
    await newGame(BIG);
    await step("ouvrir " + BIG + " (Commencer)", async function () { await pg.getByRole("button", { name: "Commencer la lecture" }).click(); await pg.waitForSelector(".choices .choice:not([disabled])", { timeout: 120000 }); });
    res.mémoire_gros_Mo = Math.round((await metrics()).JSHeapUsedSize / 1048576);
    res.dom_noeuds = (await metrics()).Nodes;
  } catch (e) { errors.push("parcours arrêté : " + String(e.message).split("\n")[0]); }
  await b.close(); server.close();
  console.log("Processeur ralenti ×" + CPU + (LITE ? ", appareil ancien" : "") + (STYLE ? ", style " + STYLE : ""));
  Object.keys(res).forEach(function (k) { console.log("  " + k.padEnd(34) + JSON.stringify(res[k])); });
  errors.forEach(function (e) { console.log("  ERREUR " + e); });
  if (OUT) fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
})();
