"use strict";
// The offline copy (14.2, Clément 18/11: « tout doit fonctionner hors ligne au maximum, le minimum de réseau »): once
// installed, the site opens and plays without network; « Plus → Hors ligne » says every book is kept; a new version
// downloads only the files whose content changed.
// Usage: node tests/site.js && node tests/horsligne-test.js
var fs = require("fs"), path = require("path"), http = require("http"), os = require("os"), crypto = require("crypto");
var openBook = require("./ouvrir-livre");
var { chromium } = require("playwright");
var SITE = path.join(__dirname, "..", "site"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }

(async function () {
  if (!fs.existsSync(path.join(SITE, "sw.js"))) { console.log("horsligne-test : lance d'abord node tests/site.js"); process.exit(2); }
  var ROOT = fs.mkdtempSync(path.join(os.tmpdir(), "horsligne-"));
  fs.cpSync(SITE, ROOT, { recursive: true });
  var up = true, asked = [];
  var server = http.createServer(function (q, r) {
    var u = q.url.split("?")[0]; if (!up) { q.socket.destroy(); return; }
    asked.push(u);
    var f = path.join(ROOT, decodeURIComponent(u === "/" ? "/index.html" : u));
    if (f.indexOf(ROOT) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
    r.writeHead(200, { "Content-Type": /\.json$/.test(f) ? "application/json" : /\.js$/.test(f) ? "text/javascript" : /\.webmanifest$/.test(f) ? "application/manifest+json" : /\.png$/.test(f) ? "image/png" : "text/html" }); fs.createReadStream(f).pipe(r);
  });
  await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
  var base = "http://127.0.0.1:" + server.address().port + "/", b = await chromium.launch(), errors = [];
  var ctx = await b.newContext({ locale: "fr-FR", viewport: { width: 600, height: 900 }, reducedMotion: "reduce" }), pg = await ctx.newPage();
  pg.on("pageerror", function (e) { errors.push(e.message); });
  await pg.addInitScript(function () { try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {} });
  try {
    await pg.goto(base); await pg.waitForFunction(function () { return window.LIVRE_OUVERT; });
    await pg.waitForFunction(function () { return navigator.serviceWorker && navigator.serviceWorker.controller; }, null, { timeout: 120000 });
    await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click();
    await pg.getByRole("tab", { name: "Plus" }).click();
    await pg.getByRole("button", { name: /Hors ligne/ }).click();
    await pg.waitForFunction(function () { return /Tout est gardé sur cet appareil/.test(document.getElementById("app").innerText); }, null, { timeout: 20000 }).catch(function () { bad.push("Plus → Hors ligne dit que tout est gardé (" + (/\d+ livres sur \d+[^.]*/.exec("") || "") + ")"); });
    // « Tout télécharger » after three books were lost: it shows its progress and says it is done (14.3)
    await pg.evaluate(function () {
      window.__avance = []; navigator.serviceWorker.addEventListener("message", function (e) { if (e.data && e.data.kind === "horsligne-avance") window.__avance.push(e.data); });
      return caches.open("livre-jeu-fichiers").then(function (c) { return c.keys().then(function (ks) { return Promise.all(ks.filter(function (r) { return /histoires\/(kardan|temoin|siege)\.json/.test(r.url); }).map(function (r) { return c.delete(r); })); }); });
    });
    await pg.getByRole("button", { name: "Tout télécharger maintenant" }).click();
    await pg.waitForFunction(function () { return /Téléchargement terminé/.test(document.getElementById("app").innerText); }, null, { timeout: 30000 }).catch(function () { bad.push("« Tout télécharger » dit quand c'est fini"); });
    var av = await pg.evaluate(function () { return window.__avance; });
    // the three books, and the other writings of the books (25.5), kept only on a reader's request until « Tout télécharger »
    var W = fs.existsSync(path.join(ROOT, "histoires/ecritures")) ? fs.readdirSync(path.join(ROOT, "histoires/ecritures")).length : 0, N = 3 + W;
    check(av.length === N + 1 && av[N].done === N && av[N].total === N, "l'avancement compte les fichiers un par un (" + JSON.stringify(av.map(function (x) { return x.done + "/" + x.total; })) + ")");
    // without network: the site opens, a book starts
    up = false;
    await pg.reload(); await pg.waitForFunction(function () { return window.LIVRE_OUVERT; }, null, { timeout: 20000 });
    await pg.getByRole("tab", { name: "Bibliothèque" }).click();
    await (await openBook(pg, "Kardan")).getByRole("button", { name: /Nouvelle partie/ }).click();
    await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
    for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
    await pg.getByRole("button", { name: "Commencer la lecture" }).click();
    await pg.waitForSelector(".choices .choice", { timeout: 20000 }).catch(function () { bad.push("sans réseau, une partie de Kardan commence"); });
    // a new version where only one book changed: only that book (and the page's own files) is downloaded again
    up = true;
    var book = path.join(ROOT, "histoires", "kardan.json"); fs.appendFileSync(book, " ");
    var sw = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8"), h = crypto.createHash("sha1").update(fs.readFileSync(book)).digest("hex").slice(0, 10);
    sw = sw.replace(/"histoires\/kardan\.json":"[0-9a-f]+"/, '"histoires/kardan.json":"' + h + '"').replace(/var VERSION = "[0-9a-f]+"/, 'var VERSION = "essai"');
    fs.writeFileSync(path.join(ROOT, "sw.js"), sw);
    asked = [];
    await pg.evaluate(function () { return navigator.serviceWorker.getRegistration().then(function (r) { return r.update(); }); });
    await pg.waitForFunction(function () { return navigator.serviceWorker.getRegistration().then(function (r) { return !r.installing && !r.waiting; }); }, null, { timeout: 60000, polling: 500 });
    await pg.waitForTimeout(1000);
    var books = asked.filter(function (u) { return /histoires\//.test(u); });
    check(books.length === 1 && /kardan/.test(books[0]), "la nouvelle version ne retélécharge que le livre modifié (" + books.join(", ") + ")");
  } catch (e) { bad.push("le parcours s'est arrêté : " + String(e.message).split("\n")[0]); }
  errors.forEach(function (e) { bad.push("erreur de la page : " + e); });
  await b.close(); server.close(); fs.rmSync(ROOT, { recursive: true, force: true });
  if (bad.length) { console.log("horsligne-test : " + bad.length + " problème(s)"); bad.forEach(function (x) { console.log("  " + x); }); process.exit(1); }
  console.log("horsligne-test : OK");
})();
