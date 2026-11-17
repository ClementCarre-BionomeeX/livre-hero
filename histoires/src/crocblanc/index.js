// « Croc-Blanc » (White Fang), Jack London, 1906 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1906 (Project Gutenberg
// n° 910, domaine public). La traduction française de Gruyer et Postif (1923) est abrégée : celle-ci suit le roman en entier.
// Les mesures sont converties en mètres, en kilos et en degrés Celsius. Les titres des chapitres sont ceux de London, traduits.
// Tout ce qui n'est pas de London vit dans les tags : gens, lieux, mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 25; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
