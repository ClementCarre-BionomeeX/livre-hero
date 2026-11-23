// « Le Roman de Tristan et Iseut », renouvelé par Joseph Bédier (1900) : un livre à lire, sans choix (lecture: true).
// Édition Piazza, préface de Gaston Paris, domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des
// chapitres sont de Bédier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 20; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
