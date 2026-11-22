// « Le Dernier des Mohicans » (The Last of the Mohicans), James Fenimore Cooper, 1826 : un livre à lire, sans choix
// (lecture: true). Texte de Cooper (1789-1851, domaine public), dans la traduction d'Auguste-Jean-Baptiste Defauconpret
// (1767-1843, domaine public), d'après l'édition d'Ebooks libres et gratuits. Les chapitres n'ont pas de titre dans
// cette traduction : ceux d'ici, comme ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 33; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
