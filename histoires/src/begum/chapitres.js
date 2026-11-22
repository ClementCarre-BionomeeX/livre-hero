// « Les Cinq Cents Millions de la Bégum », Jules Verne, 1879 : un livre à lire, sans choix (lecture: true). Texte de
// Verne, domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les deux notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Où Mr. Sharp fait son entrée", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Deux copains", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Un fait divers", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Part à deux", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. La Cité de l'Acier", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Le puits Albrecht", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Le Bloc central", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. La caverne du dragon", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. « P.P.C. »", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Un article de l'« Unsere Centurie », revue allemande", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Un dîner chez le docteur Sarrasin", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Le Conseil", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Marcel Bruckmann au professeur Schultze, Stahlstadt", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Branle-bas de combat", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. La Bourse de San Francisco", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Deux Français contre une ville", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Explications à coups de fusil", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. L'amande du noyau", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Une affaire de famille", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Conclusion", question: "", levels: [1, 1], start: "XX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
