// « Arsène Lupin, gentleman-cambrioleur », Maurice Leblanc, 1907 : un livre à lire, sans choix (lecture: true). Texte de
// Leblanc (1864-1941, domaine public), d'après l'édition du projet Gutenberg ; la préface de Jules Claretie n'est pas
// reprise. Les titres des nouvelles sont de Leblanc ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux,
// mots, résumés), sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 9; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
