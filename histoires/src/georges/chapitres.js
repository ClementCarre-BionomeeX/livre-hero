// « Georges », Alexandre Dumas, 1843 : un livre à lire, sans choix (lecture: true). Texte de Dumas (avec
// Félicien Mallefille), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; les titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · L'île de France", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Lions et léopards", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Trois enfants", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Quatorze ans après", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · L'enfant prodigue", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Transfiguration", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · La berloque", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · La toilette du nègre marron", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · La rose de la rivière noire", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Le bain", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Le prix des nègres", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Le bal", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Le négrier", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Philosophie négrière", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · La boîte de Pandore", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · La demande en mariage", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Les courses", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · Laïza", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · Le Yamsé", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Le rendez-vous", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · Le refus", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · La révolte", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Chapitre XXIII · Un cœur de père", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Chapitre XXIV · Les grands bois", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Chapitre XXV · Juge et bourreau", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "Chapitre XXVI · La chasse aux nègres", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "Chapitre XXVII · La répétition", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "Chapitre XXVIII · L'église du Saint-Sauveur", question: "", levels: [1, 1], start: "XXVIII_1" },
  { id: "XXIX", title: "Chapitre XXIX · Le « Leycester »", question: "", levels: [1, 1], start: "XXIX_1" },
  { id: "XXX", title: "Chapitre XXX · Le combat", question: "", levels: [1, 1], start: "XXX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
