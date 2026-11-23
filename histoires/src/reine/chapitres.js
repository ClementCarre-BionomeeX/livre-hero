// « La Reine de la Côte noire » (Queen of the Black Coast), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai 1934 (Project Gutenberg n° 42183, domaine public). Les titres des chapitres et les épigraphes sont ceux de
// Howard, traduits ; les titres des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Conan se fait pirate", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Le Lotus noir", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · L'horreur dans la jungle", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · L'attaque venue du ciel", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Le bûcher", question: "", levels: [1, 1], start: "C5_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
