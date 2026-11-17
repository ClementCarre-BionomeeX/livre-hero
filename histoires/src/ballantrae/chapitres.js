// « Le Maître de Ballantrae » (The Master of Ballantrae), R. L. Stevenson, 1889 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais
// (Project Gutenberg n° 864, domaine public). Les notes de M. Mackellar, que Stevenson renvoie en fin de volume, sont
// remises à leur appel, entre parenthèses ; les notes de vocabulaire sont fondues dans le texte. Les titres des
// chapitres sont ceux de Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C0", title: "Préface", question: "", levels: [1, 1], start: "C0_1" },
  { id: "C1", title: "Chapitre 1 · Résumé des événements pendant les errances du Master", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Résumé des événements (suite)", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Les errances du Master", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Persécutions endurées par M. Henry", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Récit de tout ce qui se passa dans la nuit du 27 février 1757", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Résumé des événements pendant la seconde absence du Master", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · Aventure du chevalier Burke aux Indes", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · L'ennemi dans la maison", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · Voyage de M. Mackellar avec le Master", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Passages à New York", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · Le voyage dans le désert", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · Le voyage dans le désert (suite)", question: "", levels: [1, 1], start: "C12_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
