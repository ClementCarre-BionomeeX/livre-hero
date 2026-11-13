// Visual checks (Clément, 13/11, piste 36): screenshots of the main screens, then a comparison with the same screens
// of another version, to see a broken screen before a reader does.
//   node tests/captures.js <page.html> <dossier>          takes the screenshots of that page into <dossier>
//   node tests/captures.js --compare <avant> <après> <dossier>   compares two folders: diff images + rapport.md
// The CI (.github/workflows/captures.yml) takes both versions on the same machine (same fonts), so only the page
// differs. A page error fails the run; a changed screen is only reported, since most changes are wanted.
var fs = require("fs"), path = require("path");
var { chromium } = require("playwright");
var SIZES = { telephone: { width: 390, height: 844 }, tablette: { width: 1180, height: 820 } };
var FIXED_TIME = "2026-11-13T18:00:00";
var DIFF_TOLERANCE = 24;        // per channel: anti-aliasing, not a change
var CHANGED_SHARE = 0.002;      // share of pixels above which a screen is said changed

// Each screen: a name and the steps that lead to it from a fresh page with one reader.
var SCREENS = [
  ["bibliotheque", async function () {}],
  ["bibliotheque-sombre", async function (pg) { await pg.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" }); }],
  ["reglages", async function (pg) { await pg.getByRole("button", { name: /Réglages/ }).first().click(); }],
  ["creation-heros", async function (pg) { await newGame(pg, false); }],
  ["premiere-page", async function (pg) { await newGame(pg, true); }],
  ["carnet", async function (pg) { await newGame(pg, true); await pg.keyboard.press("c"); }],
  ["editeur-graphe", async function (pg) {
    await openAtelier(pg); await pg.getByRole("button", { name: "✎ Éditeur d'histoires" }).click();
    await pg.locator("article.card").filter({ hasText: "Enquête" }).getByRole("button", { name: "Partir de ce gabarit" }).click();
  }],
  ["editeur-lire", async function (pg) {
    await openAtelier(pg); await pg.getByRole("button", { name: "✎ Éditeur d'histoires" }).click();
    await pg.locator("article.card").filter({ hasText: "Kardan" }).getByRole("button", { name: "Lire sans jouer" }).click();
  }],
];
async function openAtelier(pg) { var b = pg.locator("button.fold", { hasText: "Atelier" }).first(); if (await b.count()) await b.click(); }
async function newGame(pg, start) {
  await pg.locator("article.card").filter({ hasText: "Kardan" }).first().getByRole("button", { name: /Nouvelle partie/ }).click();
  await pg.fill('input[aria-label="Nom du héros"]', "Ivo"); await pg.locator("button.arch").first().click();
  if (!start) return;
  for (var box of await pg.locator(".past").all()) await box.locator("button.answer").first().click();
  await pg.getByRole("button", { name: "Commencer la lecture" }).click();
}

async function shoot(page, dir) {
  fs.mkdirSync(dir, { recursive: true });
  var errors = [], server = null, url = page;
  // the site reads its books beside the page (histoires/), which a file:// page cannot: serve the folder
  if (!/^https?:/.test(page)) {
    var root = path.dirname(path.resolve(page)), TYPES = { ".html": "text/html", ".json": "application/json", ".js": "text/javascript", ".png": "image/png", ".webmanifest": "application/manifest+json" };
    server = require("http").createServer(function (q, r) {
      var f = path.join(root, decodeURIComponent(q.url.split("?")[0]));
      if (f.indexOf(root) !== 0 || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
      r.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(r);
    });
    await new Promise(function (ok) { server.listen(0, "127.0.0.1", ok); });
    url = "http://127.0.0.1:" + server.address().port + "/" + path.basename(page);
  }
  var b = await chromium.launch();
  for (var size of Object.keys(SIZES)) for (var sc of SCREENS) {
    var ctx = await b.newContext({ viewport: SIZES[size], deviceScaleFactor: 1, reducedMotion: "reduce", colorScheme: "light", locale: "fr-FR", serviceWorkers: "block" });
    var pg = await ctx.newPage();
    await pg.clock.setFixedTime(new Date(FIXED_TIME));
    await pg.addInitScript(function () { var x = 42; Math.random = function () { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; }; try { localStorage.setItem("livre-heros:nouveautes-vues", JSON.stringify("999")); } catch (e) {} });
    pg.on("pageerror", function (e) { errors.push(size + "/" + sc[0] + " : " + e.message); });
    try {
      await pg.goto(url); await pg.waitForSelector("section");
      // the version line changes with every build: hidden, on one line, so it moves nothing
      await pg.addStyleTag({ content: ".build-line { visibility: hidden; white-space: nowrap; overflow: hidden; }" });
      await pg.fill('input[aria-label="Nom du nouveau lecteur"]', "Léa"); await pg.getByRole("button", { name: "Ajouter" }).first().click();
      await sc[1](pg); await pg.waitForTimeout(400);
      await pg.screenshot({ path: path.join(dir, size + "-" + sc[0] + ".png"), fullPage: false, animations: "disabled" });
    } catch (e) { errors.push(size + "/" + sc[0] + " : l'écran n'a pas pu être atteint (" + String(e.message).split("\n")[0] + ")"); }
    await ctx.close();
  }
  await b.close();
  if (server) server.close();
  fs.writeFileSync(path.join(dir, "erreurs.txt"), errors.join("\n"));
  console.log(dir + " : " + fs.readdirSync(dir).filter(function (f) { return /\.png$/.test(f); }).length + " captures, " + errors.length + " erreur(s)");
  errors.forEach(function (e) { console.log("  " + e); });
  return errors;
}

// The comparison runs in the browser: both images on a canvas, pixel by pixel; changed pixels in red on the diff.
async function compare(before, after, out) {
  fs.mkdirSync(out, { recursive: true });
  var b = await chromium.launch(), pg = await b.newPage(), lines = [], changed = 0;
  var names = fs.readdirSync(after).filter(function (f) { return /\.png$/.test(f); }).sort();
  for (var f of names) {
    if (!fs.existsSync(path.join(before, f))) { lines.push("| " + f + " | nouvel écran |"); continue; }
    var r = await pg.evaluate(async function (a) {
      function load(src) { return new Promise(function (ok, ko) { var i = new Image(); i.onload = function () { ok(i); }; i.onerror = ko; i.src = src; }); }
      var A = await load(a.x), B = await load(a.y), w = Math.max(A.width, B.width), hh = Math.max(A.height, B.height);
      function data(img) { var c = document.createElement("canvas"); c.width = w; c.height = hh; var g = c.getContext("2d"); g.drawImage(img, 0, 0); return g.getImageData(0, 0, w, hh); }
      var d1 = data(A), d2 = data(B), c = document.createElement("canvas"); c.width = w; c.height = hh; var g = c.getContext("2d"), o = g.createImageData(w, hh), n = 0;
      for (var i = 0; i < d1.data.length; i += 4) {
        var diff = Math.max(Math.abs(d1.data[i] - d2.data[i]), Math.abs(d1.data[i + 1] - d2.data[i + 1]), Math.abs(d1.data[i + 2] - d2.data[i + 2]));
        var v = (d2.data[i] + d2.data[i + 1] + d2.data[i + 2]) / 3;
        if (diff > a.tol) { n++; o.data[i] = 230; o.data[i + 1] = 30; o.data[i + 2] = 30; o.data[i + 3] = 255; }
        else { o.data[i] = o.data[i + 1] = o.data[i + 2] = 255 - (255 - v) * 0.25; o.data[i + 3] = 255; }
      }
      g.putImageData(o, 0, 0);
      return { share: n / (w * hh), png: c.toDataURL("image/png") };
    }, { x: "data:image/png;base64," + fs.readFileSync(path.join(before, f)).toString("base64"), y: "data:image/png;base64," + fs.readFileSync(path.join(after, f)).toString("base64"), tol: DIFF_TOLERANCE });
    var is = r.share > CHANGED_SHARE;
    if (is) { changed++; fs.writeFileSync(path.join(out, "diff-" + f), Buffer.from(r.png.split(",")[1], "base64")); }
    lines.push("| " + f + " | " + (is ? "**changé** (" + (100 * r.share).toFixed(1) + " % des pixels)" : "identique") + " |");
  }
  await b.close();
  var report = "# Essais visuels\n\n" + changed + " écran(s) changé(s) sur " + names.length + ". Les images diff-*.png montrent en rouge ce qui a bougé.\n\n| Écran | État |\n|---|---|\n" + lines.join("\n") + "\n";
  var errs = fs.existsSync(path.join(after, "erreurs.txt")) ? fs.readFileSync(path.join(after, "erreurs.txt"), "utf8").trim() : "";
  if (errs) report += "\n## Erreurs de la nouvelle version\n\n" + errs.split("\n").map(function (e) { return "- " + e; }).join("\n") + "\n";
  fs.writeFileSync(path.join(out, "rapport.md"), report);
  console.log(report);
  return errs;
}

var args = process.argv.slice(2);
(args[0] === "--compare" ? compare(args[1], args[2], args[3]) : shoot(args[0] || "dist/index.html", args[1] || "captures"))
  .then(function (errs) { process.exit(errs && errs.length ? 1 : 0); }, function (e) { console.error(e); process.exit(2); });
