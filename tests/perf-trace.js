"use strict";
// Where the time goes on a slow device: a Chromium trace of three gestures (the library scrolled, three pages turned,
// the hero's notebook opened), summed by thread: the page's own work (script, style, layout, paint: slowed down like
// an old processor) and the drawing of the pixels (raster, the compositor), which an old tablet's graphics chip pays.
// Usage: node tests/site.js && node tests/perf-trace.js [--style carnet|classique] [--leger] [--cpu 6] [--css "règles à essayer"]
var fs = require("fs"), path = require("path"), http = require("http"), os = require("os");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var ROOT = path.join(__dirname, "..", "site"), argv = process.argv.slice(2);
function arg(k, d) { var i = argv.indexOf(k); return i < 0 ? d : (argv[i + 1] && !/^--/.test(argv[i + 1]) ? argv[i + 1] : true); }
var CPU = +arg("--cpu", 6), STYLE = arg("--style", "carnet"), LITE = !!arg("--leger", false), CSS = arg("--css", "");

(async function () {
  var server = http.createServer(function (q, r) {
    var f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var b = await chromium.launch(), ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR", viewport: { width: 600, height: 960 }, deviceScaleFactor: 2, reducedMotion: "no-preference" }), pg = await ctx.newPage();
  await pg.addInitScript(function (o) {
    try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); if (o.lite) localStorage.setItem("livre-heros:appareil", JSON.stringify("ancien")); } catch (e) {}
    try { var k = Object.keys(localStorage).filter(function (x) { return /^livre-heros:profils:/.test(x); })[0]; if (k) { var p = JSON.parse(localStorage.getItem(k)); p.prefs = p.prefs || {}; p.prefs.style = o.style; localStorage.setItem(k, JSON.stringify(p)); } } catch (e) {}
    if (o.css) document.addEventListener("DOMContentLoaded", function () { var st = document.createElement("style"); st.textContent = o.css; document.head.appendChild(st); });
  }, { style: STYLE, lite: LITE, css: CSS });
  var cdp = await ctx.newCDPSession(pg);
  if (CPU > 1) await cdp.send("Emulation.setCPUThrottlingRate", { rate: CPU });
  await pg.goto(url); await pg.waitForFunction(function () { return window.LIVRE_OUVERT; }, null, { timeout: 120000 });
  await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click();
  await pg.waitForTimeout(800);
  await pg.reload(); await pg.waitForFunction(function () { return window.LIVRE_OUVERT; }, null, { timeout: 120000 }); await pg.waitForSelector(".spine, article.card");
  await pg.waitForTimeout(1500);
  var out = {};
  async function traced(name, fn) {
    var file = path.join(os.tmpdir(), "perf-trace-" + process.pid + ".json");
    await b.startTracing(pg, { path: file, categories: ["devtools.timeline", "disabled-by-default-devtools.timeline", "cc", "viz", "toplevel"] });
    var t0 = Date.now(); await fn(); var wall = Date.now() - t0;
    await b.stopTracing(); if (process.env.THREADS) { var tn = {}; JSON.parse(fs.readFileSync(file, "utf8")).traceEvents.forEach(function (e) { if (e.ph === "X" && e.dur) { tn[e.tid + ":" + e.name] = (tn[e.tid + ":" + e.name] || 0) + e.dur / 1000; } }); console.log(Object.entries(tn).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 15)); }
    var ev = JSON.parse(fs.readFileSync(file, "utf8")).traceEvents; fs.unlinkSync(file);
    var names = {}; ev.forEach(function (e) { if (e.ph === "M" && e.name === "thread_name") names[e.pid + ":" + e.tid] = e.args.name; });
    var sum = { ms: wall, page: 0, raster: 0, compositeur: 0, style: 0, layout: 0, paint: 0 };
    ev.forEach(function (e) {
      if (e.ph !== "X" || !e.dur) return; var th = names[e.pid + ":" + e.tid] || "", d = e.dur / 1000;
      if (th === "CrRendererMain" && e.name === "RunTask") sum.page += d;
      if (e.name === "RasterTask") sum.raster += d;
      if (th === "VizCompositorThread" && e.name === "Display::DrawAndSwap") sum.compositeur += d;
      if (th === "CrRendererMain" && (e.name === "UpdateLayoutTree" || e.name === "RecalculateStyles")) sum.style += d;
      if (th === "CrRendererMain" && e.name === "Layout") sum.layout += d;
      if (th === "CrRendererMain" && e.name === "Paint") sum.paint += d;
    });
    Object.keys(sum).forEach(function (k) { sum[k] = Math.round(sum[k]); });
    out[name] = sum;
  }
  await traced("bibliothèque défilée", async function () { for (var i = 0; i < 8; i++) { await pg.mouse.wheel(0, 250); await pg.waitForTimeout(150); } });
  await (await openBook(pg, "Kardan")).getByRole("button", { name: /Nouvelle partie/ }).click();
  await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
  for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
  await traced("ouvrir Kardan", async function () { await pg.getByRole("button", { name: "Commencer la lecture" }).click(); await pg.waitForSelector(".choices .choice:not([disabled])", { timeout: 60000 }); });
  await traced("3 pages tournées", async function () {
    for (var i = 0; i < 3; i++) {
      var t = await pg.textContent("#page-title");
      await pg.locator(".choices .choice:not([disabled])").first().click();
      await pg.waitForFunction(function (t) { var e = document.querySelector("#page-title"); return e && e.textContent !== t; }, t, { timeout: 30000 });
      await pg.waitForSelector(".choices .choice:not([disabled])", { timeout: 30000 });
    }
  });
  await traced("lecture défilée", async function () { for (var i = 0; i < 8; i++) { await pg.mouse.wheel(0, 200); await pg.waitForTimeout(150); } });
  await traced("carnet du héros", async function () { await pg.keyboard.press("c"); await pg.waitForSelector(".drawer", { timeout: 20000 }); await pg.waitForTimeout(300); });
  await b.close(); server.close();
  console.log("style " + STYLE + (LITE ? ", appareil ancien" : "") + ", processeur ×" + CPU + " (ms)");
  Object.keys(out).forEach(function (k) { console.log("  " + k.padEnd(24) + JSON.stringify(out[k])); });
})();
