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
    '<script type="application/json" id="histoires-fournies">[' + storiesJson.map(safe).join(",") + "]</script>",
    "<script>" + safe(read("src/moteur.js")) + "</script>",
    "<script>" + safe(read("src/multi.js")) + "</script>",
    "<script>" + safe(read("src/validateur.js")) + "</script>",
    "<script>" + safe(read("app/app.js")) + "</script>",
  ]).join("\n");
}
var STORIES = ["kardan", "cendres", "vaudrenne", "pages", "quarante", "temoin"];
module.exports = { assemble: assemble, STORIES: STORIES };
