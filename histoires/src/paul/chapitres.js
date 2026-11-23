// « Le Capitaine Paul », Alexandre Dumas, 1838 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Cette édition ne titre pas ses chapitres ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "Préface", question: "", levels: [1, 1], start: "P_1" },
  { id: "I", title: "Chapitre I", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "E", title: "Épilogue", question: "", levels: [1, 1], start: "E_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
