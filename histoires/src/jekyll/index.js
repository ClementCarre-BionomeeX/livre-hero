// « L'Étrange Cas du Dr Jekyll et de Mr Hyde » (Strange Case of Dr Jekyll and Mr Hyde), R. L. Stevenson, 1886 : un livre
// à lire, sans choix (lecture: true). Texte : la traduction de Théo Varlet (1871-1938, domaine public), d'après l'édition
// électronique du groupe Ebooks libres et gratuits (2003). Texte gardé tel quel, sauf la typographie et une virgule
// égarée (« plein de, santé »). Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux,
// mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 10; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
