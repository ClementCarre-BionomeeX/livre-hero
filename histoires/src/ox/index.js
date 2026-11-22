// « Le Docteur Ox », Jules Verne, 1874 : un livre à lire, sans choix (lecture: true). Recueil de quatre récits de
// Jules Verne et d'un récit de son frère Paul, domaine public, d'après l'édition numérisée par le Projet Gutenberg
// (Hetzel). Les titres des chapitres de « Maître Zacharius » et d'« Un hivernage dans les glaces » sont ceux de Verne ;
// ceux du « Docteur Ox », très longs chez Verne, sont de Claude et cités dans les résumés, comme les titres des pages
// et tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 40; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
