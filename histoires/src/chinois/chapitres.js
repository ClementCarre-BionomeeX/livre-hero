// « Les Tribulations d'un Chinois en Chine », Jules Verne, 1879 : un livre à lire, sans choix (lecture: true). Texte
// de Verne, domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent à leur
// place. Les titres courts des chapitres, comme ceux des pages, sont de Claude, ainsi que tout ce qui vit dans les
// tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Un dîner à Canton", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Kin-Fo et Wang", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Shang-Haï", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Une lettre en retard", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Lé-ou", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. La Centenaire", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Des funérailles bien préparées", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Une proposition sérieuse", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Craig et Fry", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Deux gardes du corps", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. L'homme le plus célèbre de l'Empire", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. À l'aventure", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Les cinq veilles du Centenaire", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Péking", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Le mariage", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. À la recherche de Lao-Shen", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. La Sam-Yep", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. La cale de la jonque", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Les appareils du capitaine Boyton", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Seuls sur la mer", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. La lune se lève", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Le bout du voyage", question: "", levels: [1, 1], start: "XXII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
