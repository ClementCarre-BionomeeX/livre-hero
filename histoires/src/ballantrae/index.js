// « Le Maître de Ballantrae » (The Master of Ballantrae), R. L. Stevenson, 1889 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais
// (Project Gutenberg n° 864, domaine public). Les notes de M. Mackellar, que Stevenson renvoie en fin de volume, sont
// remises à leur appel, entre parenthèses ; les notes de vocabulaire sont fondues dans le texte. Les titres des
// chapitres sont ceux de Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 13; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
