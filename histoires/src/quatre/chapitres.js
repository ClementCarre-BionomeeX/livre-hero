// « La Marque des quatre » (The Sign of the Four), Arthur Conan Doyle, 1890 : un livre à lire, sans choix (lecture: true).
// Texte de Conan Doyle (1859-1930, domaine public), dans la traduction française publiée chez Hachette en 1896, d'après
// l'édition du projet Gutenberg. Les titres des chapitres sont ceux de cette traduction ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. La déduction élevée à la hauteur d'une science", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Exposé de l'affaire", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. À la recherche d'une solution", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Récit de l'homme chauve", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Le drame de Pondichery Lodge", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Théorie de Sherlock Holmes", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Incident du baril", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Les irréguliers de Baker Street", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. En défaut", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Comment périt l'insulaire Andaman", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Le trésor d'Agra", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. L'étrange histoire de Jonathan Small", question: "", levels: [1, 1], start: "XII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
