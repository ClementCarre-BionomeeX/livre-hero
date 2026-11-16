// « La Machine à explorer le temps » (The Time Machine), H. G. Wells, 1895 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1895 (Project Gutenberg
// n° 35, domaine public). La traduction d'Henry-D. Davray (1899) reste introuvable en ligne sous une forme réutilisable.
// Les titres des chapitres sont ajoutés (le texte anglais n'en a pas). La note de l'éditeur du chapitre VIII est gardée.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · La quatrième dimension", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Le dîner du jeudi", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Le voyage", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Les petits êtres", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Les puits", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · La descente", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Vers le Palais", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Le Palais de Porcelaine verte", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · La forêt", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Le piège du Sphinx blanc", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · La plage du bout du monde", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Le retour", question: "", levels: [1, 1], start: "XII_1" },
  { id: "EP", title: "Épilogue", question: "", levels: [1, 1], start: "EP_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
