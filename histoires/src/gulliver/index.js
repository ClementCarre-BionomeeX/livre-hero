// « Voyages de Gulliver » (Gulliver's Travels), Jonathan Swift, 1726 : un livre à lire, sans choix (lecture: true).
// Texte de Swift (1667-1745, domaine public), dans la traduction de l'abbé Desfontaines (1727, domaine public), revue
// au XIXe siècle, d'après l'édition d'Ebooks libres et gratuits. Les sommaires en italique ouvrent les chapitres de cette
// édition ; les titres des chapitres et des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 36; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
