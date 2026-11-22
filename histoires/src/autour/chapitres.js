// « Autour de la Lune », Jules Verne, 1869 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition illustrée de Hetzel numérisée par le Projet Gutenberg ; les gravures sont retirées. Les notes de
// l'auteur restent entre parenthèses à leur appel. Les titres des chapitres sont ceux de Verne ; les titres des pages
// sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "Chapitre préliminaire", question: "", levels: [1, 1], start: "P_1" },
  { id: "I", title: "I. De dix heures vingt à dix heures quarante-sept minutes du soir", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. La première demi-heure", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Où l'on s'installe", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Un peu d'algèbre", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Les froids de l'espace", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Demandes et réponses", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Un moment d'ivresse", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. À soixante-dix-huit mille cent quatorze lieues", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Conséquences d'une déviation", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Les observateurs de la Lune", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Fantaisie et réalisme", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Détails orographiques", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Paysages lunaires", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. La nuit de trois cent cinquante-quatre heures et demie", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Hyperbole ou parabole", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. L'hémisphère méridional", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Tycho", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Questions graves", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Lutte contre l'impossible", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Les sondages de la « Susquehanna »", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. J.-T. Maston rappelé", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Le sauvetage", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "XXIII. Pour finir", question: "", levels: [1, 1], start: "XXIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
