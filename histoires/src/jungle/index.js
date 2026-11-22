// « Le Livre de la jungle » (The Jungle Book), Rudyard Kipling, 1894 : un livre à lire, sans choix (lecture: true).
// Texte de Kipling (1865-1936, domaine public), dans la traduction de Louis Fabulet et Robert d'Humières (1899, domaine
// public), d'après l'édition d'Ebooks libres et gratuits. Les titres des sept récits sont ceux de Kipling ; ceux des
// pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 7; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
