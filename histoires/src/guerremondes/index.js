// « La Guerre des mondes » (The War of the Worlds), H. G. Wells, 1898 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Henry-D. Davray (1900, édition illustrée de 1906), Project Gutenberg n° 60656, domaine public
// (Wells est mort en 1946, Davray en 1944). Texte de Davray gardé tel quel, sauf la typographie (tirets, espaces, accents
// sur les capitales) et deux coquilles ; les légendes des gravures, qui répétaient le texte, sont retirées.
// Tout ce qui n'est pas de Wells ou de Davray vit dans les tags : gens, lieux, mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 27; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
