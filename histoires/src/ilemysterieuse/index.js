// « L'Île mystérieuse », Jules Verne, 1874-1875 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes de l'auteur sont remises entre
// parenthèses à leur appel. Verne ne titre pas ses chapitres, seulement ses trois parties ; les titres des pages, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 62; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
