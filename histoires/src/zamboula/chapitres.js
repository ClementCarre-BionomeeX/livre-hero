// « Ombres sur Zamboula » (Shadows in Zamboula), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en novembre 1935 (Project Gutenberg n° 42196, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Un tambour commence", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Ceux qui rôdent la nuit", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Des mains qui serrent", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Danse, fille, danse !", question: "", levels: [1, 1], start: "C4_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
