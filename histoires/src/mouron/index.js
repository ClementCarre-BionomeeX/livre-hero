// « Le Mouron rouge » (The Scarlet Pimpernel), baronne Orczy, 1905 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1905 (Project
// Gutenberg n° 60, domaine public). Les titres des chapitres sont ceux d'Orczy, traduits ; ceux des pages, comme tout
// ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le portrait du vieux voiturier (ch. XXVI,
// « The Jew » dans l'original) et quelques remarques de narrateur ont été adoucis ; voir la notice.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 31; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
