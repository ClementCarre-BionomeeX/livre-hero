"use strict";
// Writing styles (25.5, Clément 26/11): a book read in « mélange » (today's text), « doyle » or « sobre ».
// 1. The engine: each table of histoires/ecritures/ changes only prose. The book's shape (passages, choices, marks,
//    conditions) is the same in every writing, the tokens ({e}, {hero}, {{…}}) of each string too, and every page reads.
// 2. The app (site/): Réglages → « Style d'écriture » changes the page being read, at the same page.
// Usage: node tests/site.js && node tests/ecritures-test.js [--no-page]
var fs = require("fs"), path = require("path"), http = require("http");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js")), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
function isProse(s) { return s.length > 12 && / /.test(s); }
function skel(x) {
  if (typeof x === "string") return isProse(x) ? "§" : JSON.stringify(x);
  if (!x || typeof x !== "object") return JSON.stringify(x);
  if (Array.isArray(x)) return "[" + x.map(skel).join(",") + "]";
  return "{" + Object.keys(x).sort().map(function (k) { return k + ":" + skel(x[k]); }).join(",") + "}";
}
function tokens(s) { return (s.match(/\{[^{}]*\}|\{\{|\}\}|\*\*?/g) || []).sort().join(" "); }
function diffs(a, b, out) {
  if (typeof a === "string") { if (a !== b) out.push([a, b]); return; }
  if (!a || typeof a !== "object") return;
  Object.keys(a).forEach(function (k) { diffs(a[k], b[k], out); });
}

var dir = path.join(ROOT, "histoires/ecritures");
fs.readdirSync(dir).filter(function (f) { return /\.json$/.test(f); }).forEach(function (f) {
  var id = f.replace(/\.json$/, ""), st = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires", f), "utf8")), T = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  M.freshState(st);   // the engine prepares a book once (choices « back » get their target and label)
  var shape = skel(Object.assign({}, st, { writing: null })), ref = skel(st);
  Object.keys(T).filter(function (w) { return Object.keys(T[w]).length >= 20; }).forEach(function (w) {
    var x = M.writing(st, T[w], w), d = [];
    check(x.writing === w, id + "/" + w + " : le livre dit son écriture");
    check(skel(Object.assign({}, x, { writing: null })) === shape, id + "/" + w + " : la forme du livre change");
    diffs(st, x, d);
    check(d.length > 0, id + "/" + w + " : aucun texte ne change");
    d.forEach(function (p) { if (tokens(p[0]) !== tokens(p[1])) bad.push(id + "/" + w + " : jetons différents dans « " + p[0].slice(0, 60) + " »"); });
    // every passage reads in this writing (the engine draws it from a fresh state)
    var n = 0;
    Object.keys(x.passages).forEach(function (pid) {
      try { M.textList(x, M.freshState(x), x.passages[pid].text); n++; } catch (e) { bad.push(id + "/" + w + " : " + pid + " ne se lit pas (" + e.message + ")"); }
    });
    console.log(id + " · " + w + " : " + d.length + " textes changés, " + n + " pages lues");
  });
  // the base book is left as it was
  check(skel(st) === ref, id + " : le livre d'origine a changé");
});

(async function () {
  if (process.argv.indexOf("--no-page") < 0) await page();
  console.log(bad.length ? "ÉCHECS :\n  " + bad.join("\n  ") : "ecritures-test : tout est bon");
  process.exit(bad.length ? 1 : 0);
})();

async function page() {
  var SITE = path.join(ROOT, "site");
  if (!fs.existsSync(path.join(SITE, "index.html"))) { bad.push("lance d'abord node tests/site.js"); return; }
  var openBook = require("./ouvrir-livre"), { chromium } = require("playwright");
  var server = http.createServer(function (q, r) {
    var f = path.join(SITE, decodeURIComponent(q.url.split("?")[0]));
    if (f.indexOf(SITE) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var url = "http://127.0.0.1:" + server.address().port + "/index.html";
  var T = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/ecritures/kardan.json"), "utf8")), st = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/kardan.json"), "utf8"));
  var today = st.passages[st.start].text[0], sobre = T.sobre[M.writingKey(today)], doyle = T.doyle[M.writingKey(today)];
  var SEED = { "idx:profils": ["p1"], "profils:p1": { name: "Léa", color: "#a33", created: 1, prefs: { ecriture: "sobre" } }, "profil": "p1", "nouveautes-vues": "999" };
  var b = await chromium.launch(), ctx = await b.newContext({ serviceWorkers: "block", locale: "fr-FR" }), pg = await ctx.newPage(), errors = [];
  pg.on("pageerror", function (e) { errors.push(e.message); });
  await pg.addInitScript(function (seed) {
    if (sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1");
    Object.keys(seed).forEach(function (k) { localStorage.setItem("livre-heros:" + k, JSON.stringify(seed[k])); });
  }, SEED);
  // the last words of a paragraph (its first letter may be a drop cap; two writings often begin alike)
  var words = function (t) { return t.replace(/[*«»]/g, "").split(/\s+/).slice(-8).join(" "); };
  var pageHas = async function (t) { var txt = (await pg.locator(".page").first().innerText()).replace(/\s+/g, " "); return txt.indexOf(words(t)) >= 0; };
  try {
    await pg.goto(url); await pg.waitForSelector("article.card, .spine");
    await (await openBook(pg, "Kardan")).getByRole("button", { name: "Nouvelle partie" }).click();
    await pg.fill('input[aria-label="Nom du héros"]', "Ivo");
    await pg.locator("button.arch").first().click();
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForSelector(".page");
    await pg.waitForTimeout(400);
    check(sobre && await pageHas(sobre), "Kardan en sobre : la première page a son premier texte");
    check(!(await pageHas(today)), "Kardan en sobre : le texte d'aujourd'hui n'est pas montré");
    // Réglages → Doyle, then Mélange: the same page changes its text
    await pg.keyboard.press("r");
    await pg.getByRole("group", { name: "Style d'écriture" }).getByRole("button", { name: "Doyle" }).click();
    await pg.waitForTimeout(400);
    await pg.getByRole("button", { name: "Fermer" }).first().click();
    check(doyle && await pageHas(doyle), "réglage Doyle : la page en cours prend le texte Doyle");
    await pg.keyboard.press("r");
    await pg.getByRole("group", { name: "Style d'écriture" }).getByRole("button", { name: "Mélange" }).click();
    await pg.waitForTimeout(400);
    await pg.getByRole("button", { name: "Fermer" }).first().click();
    check(await pageHas(today), "réglage Mélange : la page revient au texte d'aujourd'hui");
  } catch (e) { bad.push("parcours interrompu : " + e.message.split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de page : " + e); });
  await b.close(); server.close();
}
