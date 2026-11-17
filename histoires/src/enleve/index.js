// « Enlevé ! » (Kidnapped), R. L. Stevenson, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1886 (Project
// Gutenberg n° 421, domaine public). Les quelques notes de Stevenson sur les mots écossais sont fondues dans le texte ;
// l'écossais des personnages est rendu par le ton plus que par l'orthographe. Les titres des chapitres sont ceux de
// Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags : gens, lieux, mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 30; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
