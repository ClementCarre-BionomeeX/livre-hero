// « Le Peuple du Cercle noir » (The People of the Black Circle), Robert E. Howard, 1934 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru
// dans Weird Tales de septembre à novembre 1934 (Project Gutenberg n° 42259, domaine public). Les titres des chapitres
// sont ceux de Howard ; ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · La mort frappe un roi", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Un barbare des collines", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Khemsa use de magie", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Une rencontre dans le col", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · L'étalon noir", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · La montagne des Voyants noirs", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · En route pour Yimsha", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · Yasmina connaît la terreur", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · Le château des sorciers", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Yasmina et Conan", question: "", levels: [1, 1], start: "C10_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
