// « Le Capitaine Aréna », d'Alexandre Dumas (1842) : un livre à lire, sans choix (lecture: true). Domaine public, d'après
// l'édition numérique du projet Gutenberg ; les notes de Dumas sont gardées, deux passages retouchés (voir la notice). Les titres
// des chapitres sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "La maison des fous", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Mœurs et anecdotes siciliennes", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Excursion aux îles Éoliennes : Lipari", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Excursion aux îles Éoliennes : Vulcano", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Excursion aux îles Éoliennes : Stromboli", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "La sorcière de Palma", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Une trombe", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "La cage de fer", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Scylla", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Le prophète", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Térence le tailleur", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Le Pizzo", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Maïda", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Bellini", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Cosenza", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Terre moti", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Retour", question: "", levels: [1, 1], start: "XVII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
