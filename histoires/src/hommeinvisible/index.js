// « L'Homme invisible » (The Invisible Man), H. G. Wells, 1897 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Achille Laurent (La Revue de Paris, 1900-1901, puis Mercure de France), transcrite par
// Wikisource (domaine public ; transcription reprise d'un export Wikisource de février 2025). Texte gardé tel quel, sauf la
// typographie ; la note du traducteur sur les fenêtres anglaises est mise entre parenthèses dans sa page.
// Tout ce qui n'est pas de Wells ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
// La base (le livre, sa notice, ses chapitres, ses gens, ses lieux, ses mots) et les pages des chapitres, dans l'ordre du
// livre. Un livre à lire (lecture: true) : l'ordre des pages est l'ordre de lecture.
var base = require("./base.js");
for (var n = 1; n <= 29; n++) {
  var ps = require("./chapitre" + (n < 10 ? "0" : "") + n + ".js");
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
}
module.exports = base;
