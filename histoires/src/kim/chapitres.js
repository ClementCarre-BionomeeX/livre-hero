// « Kim », Rudyard Kipling, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project
// Gutenberg n° 2226, domaine public). Les épigraphes en vers sont gardées en tête des chapitres. Les titres des
// chapitres (Kipling les numérotait seulement) et ceux des pages sont de Claude, comme tout ce qui vit dans les tags
// (gens, lieux, mots, résumés). Les généralités du narrateur sur les « Orientaux » ont été retirées ou adoucies ; voir la notice.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Le canon de Lahore", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Le train d'Ambala", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Le vieux soldat", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · La Grande Route", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Le Taureau Rouge", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Sahib malgré lui", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · Saint-Xavier", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · Les deux faces de la tête", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · La boutique de Lurgan", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Le poulain est prêt", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · Le retour du chéla", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · Le Grand Jeu dans la plaine", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · Les vraies Montagnes", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · La Femme de Shamlegh", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · La Rivière de la Flèche", question: "", levels: [1, 1], start: "C15_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
