// « La Femme au collier de velours », Alexandre Dumas, 1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · L'Arsenal", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · La famille d'Hoffmann", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Un amoureux et un fou", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Maître Gottlieb Murr", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Antonia", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Le serment", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Une barrière de Paris en 1793", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Comment les musées et les bibliothèques étaient fermés, mais comment la place de la Révolution était ouverte", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · « Le Jugement de Pâris »", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Arsène", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · La deuxième représentation du « Jugement de Pâris »", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · L'estaminet", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Le portrait", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Le tentateur", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Le numéro 113", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Le médaillon", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Un hôtel de la rue Saint-Honoré", question: "", levels: [1, 1], start: "XVII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
