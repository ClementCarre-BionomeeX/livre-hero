// « Face au drapeau », Jules Verne, 1896 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les titres des chapitres
// sont ceux de Verne ; ceux des pages sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots,
// résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Healthful-House", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Le comte d'Artigas", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Double enlèvement", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. La goélette Ebba", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Où suis-je ?", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Sur le pont", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Deux jours de navigation", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Back-Cup", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Dedans", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Ker Karraje", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Pendant cinq semaines", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Les conseils de l'ingénieur Serkö", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. À Dieu vat !", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Le Sword aux prises avec le tug", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Attente", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Encore quelques heures", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Un contre cinq", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. À bord du Tonnant", question: "", levels: [1, 1], start: "XVIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
