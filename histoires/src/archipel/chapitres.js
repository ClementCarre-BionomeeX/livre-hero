// « L'Archipel en feu », Jules Verne, 1884 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les notes de l'auteur restent
// entre parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Navire au large", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. En face l'un de l'autre", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Grecs contre Turcs", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Triste maison d'un riche", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. La côte messénienne", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Sus aux pirates de l'archipel !", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. L'inattendu", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Vingt millions en jeu", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. L'archipel en feu", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Campagne dans l'archipel", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Signaux sans réponse", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Une enchère à Scarpanto", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. À bord de la « Syphanta »", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Sacratif", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Dénouement", question: "", levels: [1, 1], start: "XV_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
