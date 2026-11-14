"use strict";
// Intent: assemble([StoryJson]) -> Html = the game page with the engine, the validator, the app and the stories inlined
// Why: the claude.ai page (tests/build.js -> dist/index.html) and the offline copy (tests/site.js -> site/) are the same
// page; only what surrounds it differs.
var fs = require("fs"), path = require("path");
var ROOT = path.join(__dirname, "..");
var FONTS_LINKS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=IM+Fell+English:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&display=swap">';
function read(f) { return fs.readFileSync(path.join(ROOT, f), "utf8"); }
// Grimoire Clair is no Google font: both pages carry it inlined (4 × ~18 KB), from app/polices/grimoire.css.
function grimoireCss() {
  return read("app/polices/grimoire.css").replace(/url\((polices\/[^)]+\.woff2)\)/g, function (_, f) {
    return "url(data:font/woff2;base64," + fs.readFileSync(path.join(ROOT, "app", f)).toString("base64") + ")";
  });
}
// Intent: buildOf([StoryJson]) -> { id, date } = the version shown in the app (Clément, 13/11): a hash of everything the
// page carries, so the claude.ai page and the site show the same id when they hold the same game.
function buildOf(storiesJson) {
  var hsh = require("crypto").createHash("sha1");
  ["src/moteur.js", "src/multi.js", "src/validateur.js", "src/relecture.js", "app/app.js", "app/app.css"].forEach(function (f) { hsh.update(read(f)); });
  storiesJson.forEach(function (j) { hsh.update(JSON.stringify(JSON.parse(j))); });
  var d = new Date(), date = d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", timeZone: "Europe/Paris" }) + " à " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" });
  // The version number (VERSION, raised by hand at each batch of changes; the CI tags v<VERSION> on main) comes first.
  var version = fs.existsSync(path.join(ROOT, "VERSION")) ? read("VERSION").trim() : "";
  return { version: version, id: hsh.digest("hex").slice(0, 7), date: date };
}
// The library card of a story (same fields as storyMeta in app/app.js), and where its whole text is (site only).
function cardOf(json) {
  var st = JSON.parse(json);
  return { id: st.id, title: st.title, subtitle: st.subtitle || "", summary: st.summary || "", version: st.version || 1, acts: (st.acts || []).length, passages: Object.keys(st.passages || {}).length,
    multi: st.multi || null, kid: st.kid || null, adult: st.adult || null, cover: st.cover || null, age: st.age || null, author: st.author || null, file: "histoires/" + st.id + ".json" };
}
function safe(js) { return js.replace(/<\/script/gi, "<\\/script"); }
// opts.fonts: the HTML that brings the fonts (Google Fonts links by default); opts.head: lines placed before it.
function assemble(storiesJson, opts) {
  opts = opts || {};
  return (opts.head || [
    "<title>Livre-jeu</title>",
    '<meta name="claude:viewport-fit-sides" content="cover">',
  ]).concat([
    opts.fonts || FONTS_LINKS,
    "<style>" + grimoireCss() + "</style>",
    "<style>" + read("app/app.css") + "</style>",
    '<div id="app"></div>',
    opts.external ? '<script type="application/json" id="histoires-resume">' + safe(JSON.stringify(storiesJson.map(cardOf))) + "</script>"
      : '<script type="application/json" id="histoires-fournies">[' + storiesJson.map(safe).join(",") + "]</script>",
    "<script>window.LIVRE_BUILD = " + JSON.stringify(opts.build || buildOf(storiesJson)) + ";</script>",
    "<script>" + safe(read("src/moteur.js")) + "</script>",
    "<script>" + safe(read("src/multi.js")) + "</script>",
    "<script>" + safe(read("src/validateur.js")) + "</script>",
    "<script>" + safe(read("src/relecture.js")) + "</script>",
    "<script>" + safe(read("app/app.js")) + "</script>",
  ]).join("\n");
}
var STORIES = ["kardan", "cendres", "vaudrenne", "pages", "quarante", "temoin", "malvoran", "soiree", "enquete", "siege"];
module.exports = { assemble: assemble, buildOf: buildOf, STORIES: STORIES };
