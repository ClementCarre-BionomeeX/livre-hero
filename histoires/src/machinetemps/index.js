// « La Machine à explorer le temps » (The Time Machine), H. G. Wells, 1895 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1895 (Project Gutenberg
// n° 35, domaine public). La traduction d'Henry-D. Davray (1899) reste introuvable en ligne sous une forme réutilisable.
// Les titres des chapitres sont ajoutés (le texte anglais n'en a pas). La note de l'éditeur du chapitre VIII est gardée.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 13; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
