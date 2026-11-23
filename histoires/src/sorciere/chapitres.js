// « Une sorcière naîtra » (A Witch Shall Be Born), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1934 (Project Gutenberg n° 42227, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Le croissant rouge sang", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · L'arbre de mort", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Une lettre pour la Némédie", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Les loups du désert", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · La voix du cristal", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Les ailes du vautour", question: "", levels: [1, 1], start: "C6_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
