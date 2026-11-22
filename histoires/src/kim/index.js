// « Kim », Rudyard Kipling, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project
// Gutenberg n° 2226, domaine public). Les épigraphes en vers sont gardées en tête des chapitres. Les titres des
// chapitres (Kipling les numérotait seulement) et ceux des pages sont de Claude, comme tout ce qui vit dans les tags
// (gens, lieux, mots, résumés). Les généralités du narrateur sur les « Orientaux » ont été retirées ou adoucies ; voir la notice.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 15; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
