// « L'Île au trésor » (Treasure Island), R. L. Stevenson, 1883 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (Project Gutenberg
// n° 120, domaine public). La dédicace et le poème « À l'acheteur qui hésite » ouvrent le livre ; la note de Stevenson
// au chapitre 21 est remise à son appel, entre parenthèses. Les titres des chapitres sont ceux de Stevenson, traduits ;
// les six parties du roman sont rappelées dans les résumés. Tout ce qui n'est pas de Stevenson vit dans les tags.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 35; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
