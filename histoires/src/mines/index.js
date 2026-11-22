// « Les Mines du roi Salomon » (King Solomon's Mines), H. Rider Haggard, 1885 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1885 (Project
// Gutenberg n° 2166, domaine public). Les titres des chapitres sont ceux de Haggard, traduits ; ceux des pages, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Quelques mots et généralités sur les
// peuples d'Afrique, courants en 1885 et blessants aujourd'hui, ont été adoucis ou retirés ; la notice le dit.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 21; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
