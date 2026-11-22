// « La Chasse au météore », Jules Verne, 1908 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1908). Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres et des pages sont de Claude (ceux de Verne, très longs, sont cités dans les
// résumés quand ils servent), comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Un cavalier à Whaston", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. La tour d'Elisabeth street", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Le donjon de Moriss street", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Deux lettres", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Des nouvelles par les journaux", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Variations sur les météores", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Mitz rabroue son maître", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Une constatation inattendue", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Une orgie de mathématiques", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Zéphyrin Xirdal", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Une violente émotion", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Le juge se déclare incompétent", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Le troisième larron", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. La veuve Thibaut", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Le gros lot", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. En route pour le Groenland", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. À Upernivik", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Escalade et effraction", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. L'aversion de Xirdal", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Les annales astronomiques", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. Le dernier mot du juge", question: "", levels: [1, 1], start: "XXI_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
