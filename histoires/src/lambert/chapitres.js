// « Gabriel Lambert », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · Le forçat", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Henry de Faverne", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Le foyer de l'Opéra", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Préparatifs", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · L'allée de la Muette", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Le manuscrit", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Le malade", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · Le billet de cinq cents francs", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Un coin du voile", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Un terrible aveu", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Départ pour Paris", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Confession", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Suite de la confession", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · La bouquetière", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Catastrophe", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Bicêtre", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · Une veillée du roi", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · Le pendu", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Procès-verbal", question: "", levels: [1, 1], start: "XX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
