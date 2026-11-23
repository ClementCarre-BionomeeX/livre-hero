// « Le Corricolo », d'Alexandre Dumas (1843) : un livre à lire, sans choix (lecture: true). Domaine public, d'après
// l'édition numérique du projet Gutenberg ; les notes de Dumas sont gardées, quelques passages retouchés (voir la notice). Les titres
// des chapitres sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 50; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
