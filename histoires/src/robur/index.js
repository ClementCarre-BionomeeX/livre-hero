// « Robur-le-Conquérant », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1886, dans le domaine public (Project Gutenberg n° 5126). La saisie, faite à partir
// d'une reconnaissance de caractères, a été relue et corrigée (fiches/robur_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 18; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
