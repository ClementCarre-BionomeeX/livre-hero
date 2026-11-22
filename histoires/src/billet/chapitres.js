// « Un billet de loterie », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). L'unique note de l'auteur
// reste entre parenthèses à sa place. Verne n'a pas titré ses chapitres : leurs titres, comme ceux des pages, sont de
// Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Une lettre de loin", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Dal, dans le Telemark", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. La famille Hansen", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Le Viken", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Les préparatifs de la noce", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Un voyageur désagréable", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Au passage du Maan", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Le Rjukanfos", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Sylvius Hog", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Une dette à payer", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Le retard du Viken", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Ce que tout le monde veut acheter", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. À Bergen", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Le secret de dame Hansen", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Le numéro aux enchères", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Vers Christiania", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. La veille du tirage", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Le bazar de M. Benett", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Le tirage", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Le cadre de bois", question: "", levels: [1, 1], start: "XX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
