"use strict";
// Builds the offline copy in site/ from the built stories histoires/<id>.json (tests/build.js keeps them current):
//   site/index.html            the game, fonts inlined; the books' texts beside it in site/histoires/ (read after start)
//   site/livre-jeu-complet.html  the whole game in one file: opens from disk (file://) with nothing else
//   site/manifest.webmanifest  + icons: makes the page installable (home screen of a tablet or phone)
//   site/sw.js                 service worker: keeps the page so the installed app opens without network
// GitHub Pages serves site/ (see .github/workflows/pages.yml).
// Usage: node tests/site.js
var fs = require("fs"), path = require("path"), crypto = require("crypto");
var P = require("./page.js");
var ROOT = path.join(__dirname, ".."), OUT = path.join(ROOT, "site"), APP = path.join(ROOT, "app");
var THEME = "#2c7464";        // --accent of app.css (light theme)
var ICONS = ["icone-192.png", "icone-512.png", "icone-masquable-512.png", "icone-apple-180.png"];

var stories = P.STORIES.map(function (id) { return JSON.stringify(JSON.parse(fs.readFileSync(path.join(ROOT, "histoires", id + ".json"), "utf8"))); });

// Fonts: the files in app/polices/ inlined, instead of the Google Fonts links of the claude.ai page.
var fontCss = fs.readFileSync(path.join(APP, "polices/polices.css"), "utf8").replace(/url\((polices\/[^)]+\.woff2)\)/g, function (_, f) {
  return "url(data:font/woff2;base64," + fs.readFileSync(path.join(APP, f)).toString("base64") + ")";
});
var head = [
  "<!doctype html>",
  '<html lang="fr">',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  "<title>Livre-jeu</title>",
  '<meta name="theme-color" content="' + THEME + '">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="Livre-jeu">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" href="icone-192.png">',
  '<link rel="apple-touch-icon" href="icone-apple-180.png">',
];
// The service worker only exists over http(s); opened from disk the page simply runs as it is.
var sw = '<script>if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) { var hadSw = !!navigator.serviceWorker.controller; navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(function (r) { return r.update(); }).catch(function () {}); navigator.serviceWorker.addEventListener("controllerchange", function () { if (hadSw && !window.__swReloaded) { window.__swReloaded = true; location.reload(); } }); }</script>';
var build = P.buildOf(stories);
// index.html carries only the books' cards; each book's text is beside it in histoires/ (faster start, piste 35).
// livre-jeu-complet.html keeps everything in one file, to open from the device's disk without network.
var page = P.assemble(stories, { head: head, fonts: "<style>" + fontCss + "</style>", build: build, external: true }) + "\n" + sw + "\n";
var whole = P.assemble(stories, { head: head, fonts: "<style>" + fontCss + "</style>", build: build }) + "\n";

fs.mkdirSync(path.join(OUT, "histoires"), { recursive: true });
fs.writeFileSync(path.join(OUT, "index.html"), page);
fs.writeFileSync(path.join(OUT, "livre-jeu-complet.html"), whole);
P.STORIES.forEach(function (id, i) { fs.writeFileSync(path.join(OUT, "histoires", id + ".json"), stories[i]); });
// The version online, read by the page (no-store) to tell the reader an update is there.
fs.writeFileSync(path.join(OUT, "version.json"), JSON.stringify(build));
ICONS.forEach(function (f) { fs.copyFileSync(path.join(APP, f), path.join(OUT, f)); });
// QR codes to pass a game between devices (Clément, 12/11): loaded by the page only when the reader asks for them.
var VENDOR = ["qrcode.js", "jsQR.js", "jsQR-LICENSE.txt"];
fs.mkdirSync(path.join(OUT, "vendor"), { recursive: true });
VENDOR.forEach(function (f) { fs.copyFileSync(path.join(APP, "vendor", f), path.join(OUT, "vendor", f)); });
fs.writeFileSync(path.join(OUT, "manifest.webmanifest"), JSON.stringify({
  name: "Livre-jeu", short_name: "Livre-jeu", lang: "fr",
  description: "Des romans dont tu tiens la plume, jouables sans réseau.",
  start_url: "./", scope: "./", display: "standalone", background_color: "#e9ece5", theme_color: THEME,
  icons: [
    { src: "icone-192.png", sizes: "192x192", type: "image/png" },
    { src: "icone-512.png", sizes: "512x512", type: "image/png" },
    { src: "icone-masquable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
}, null, 1));

// The shared catalogue (Clément, 13/11, piste 44): the stories families propose, in catalogue/<id>.json, checked like
// an import (a story the checker refuses is left out, and said so), with an index the page reads.
var CAT = path.join(ROOT, "catalogue"), V = require("../src/validateur.js"), catIndex = [];
fs.mkdirSync(path.join(OUT, "catalogue"), { recursive: true });
(fs.existsSync(CAT) ? fs.readdirSync(CAT) : []).filter(function (f) { return /\.json$/.test(f); }).sort().forEach(function (f) {
  var st; try { st = JSON.parse(fs.readFileSync(path.join(CAT, f), "utf8")); } catch (e) { console.log("catalogue/" + f + " : JSON illisible, laissé de côté"); return; }
  var rep = V.staticCheck(JSON.parse(JSON.stringify(st)));
  if (rep.errors.length) { console.log("catalogue/" + f + " : " + rep.errors.length + " erreur(s), laissé de côté — " + rep.errors[0]); return; }
  fs.writeFileSync(path.join(OUT, "catalogue", st.id + ".json"), JSON.stringify(st));
  catIndex.push({ id: st.id, title: st.title, subtitle: st.subtitle || "", summary: st.summary || "", author: st.author || "", age: st.age || null, adult: st.adult || null, passages: Object.keys(st.passages || {}).length, acts: (st.acts || []).length });
});
fs.writeFileSync(path.join(OUT, "catalogue", "index.json"), JSON.stringify(catIndex));

// The cache name changes with the content, so a new build replaces the old copy on the next visit with network.
var files = ["./", "index.html", "manifest.webmanifest"].concat(ICONS, ["vendor/qrcode.js", "vendor/jsQR.js"], P.STORIES.map(function (id) { return "histoires/" + id + ".json"; }));
var version = crypto.createHash("sha1").update(page).update(stories.join("")).update(VENDOR.map(function (f) { return fs.readFileSync(path.join(APP, "vendor", f)); }).join("")).digest("hex").slice(0, 10);
fs.writeFileSync(path.join(OUT, "sw.js"), [
  '"use strict";',
  "// Generated by tests/site.js. Network first, bypassing the browser cache (the newest game when online), the cached copy when offline.",
  'var CACHE = "livre-jeu-' + version + '";',
  "// The quality voices (voix/) live in their own cache, kept across versions: downloaded once, on the reader's request.",
  'var VOIX = "livre-jeu-voix";',
  "var FILES = " + JSON.stringify(files) + ";",
  'self.addEventListener("install", function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES.map(function (f) { return new Request(f, { cache: "reload" }); })); }).then(function () { return self.skipWaiting(); })); });',
  'self.addEventListener("activate", function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE && k !== VOIX; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });',
  'self.addEventListener("fetch", function (e) {',
  '  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;',
  '  if (/\\/voix\\//.test(new URL(e.request.url).pathname)) { e.respondWith(caches.open(VOIX).then(function (c) { return c.match(e.request, { ignoreSearch: true }); }).then(function (m) { return m || fetch(e.request); })); return; }',
  '  e.respondWith(fetch(e.request.url, { cache: "no-cache" }).then(function (r) {',
  '    if (r.ok) { var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }',
  '    return r;',
  '  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (m) { return m || caches.match("index.html"); }); }));',
  "});",
  "",
].join("\n"));
console.log("site/ : index.html " + Math.round(page.length / 1024) + " Ko, version " + version);
