// « Le Peuple du Cercle noir » (The People of the Black Circle), Robert E. Howard, 1934 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru
// dans Weird Tales de septembre à novembre 1934 (Project Gutenberg n° 42259, domaine public). Les titres des chapitres
// sont ceux de Howard ; ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 10; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
