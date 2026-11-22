// « Le Village aérien », Jules Verne, 1901 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les trois notes de l'auteur
// sont à leur appel, entre parenthèses. Les titres des chapitres sont ceux de Verne, sauf le sixième ; ceux des pages
// sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Après une longue étape", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Les feux mouvants", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Dispersion", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Parti à prendre, parti pris", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Première journée de marche", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Les rhinocéros", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. La cage vide", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Le docteur Johausen", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Au courant du rio Johausen", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Ngora !", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. La journée du 19 mars", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Sous bois", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Le village aérien", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Les Wagddis", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Trois semaines d'études", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Sa Majesté Msélo-Tala-Tala", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. En quel état le docteur Johausen !", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Brusque dénouement", question: "", levels: [1, 1], start: "XVIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
