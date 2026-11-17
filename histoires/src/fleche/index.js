// « La Flèche noire » (The Black Arrow), R. L. Stevenson, 1888 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction de P.-G. La Chesnais (Mercure de France, 1901), transcrite par le Project Gutenberg (n° 70065,
// d'après Gallica ; domaine public). Texte gardé tel quel, sauf la typographie (« À » accentué, les vers en italique)
// et les deux notes de Stevenson, remises entre parenthèses à la fin du paragraphe qui les appelle.
// Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 33; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
