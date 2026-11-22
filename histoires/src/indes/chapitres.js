// « Les Indes noires », Jules Verne, 1877 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit
// dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Deux lettres contradictoires", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Chemin faisant", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Le sous-sol du Royaume-Uni", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. La fosse Dochart", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. La famille Ford", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Quelques phénomènes inexplicables", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Une expérience de Simon Ford", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Un coup de dynamite", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. La Nouvelle-Aberfoyle", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Aller et retour", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Les Dames de feu", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Les exploits de Jack Ryan", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Coal-city", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Suspendu à un fil", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Nell au cottage", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Sur l'échelle oscillante", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Un lever de soleil", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Du lac Lomond au lac Katrine", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Une dernière menace", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Le pénitent", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. Le mariage de Nell", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. La légende du vieux Silfax", question: "", levels: [1, 1], start: "XXII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
