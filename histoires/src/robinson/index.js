// « Robinson Crusoé » (The Life and Strange Surprizing Adventures of Robinson Crusoe), Daniel Defoe, 1719 : un livre à
// lire, sans choix (lecture: true). Texte de Defoe (vers 1660-1731, domaine public), dans la traduction de Petrus Borel
// (Borel et Varenne, 1836, domaine public), d'après la saisie du projet Gutenberg et d'Ebooks libres et gratuits. Les
// titres des chapitres sont ceux de Borel ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés), sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 59; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
