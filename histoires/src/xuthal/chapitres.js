// « L'Ombre qui glisse » (The Slithering Shadow), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en septembre 1933 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · La cité du désert", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Le couloir secret", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Le puits sans fond", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Le vin d'or", question: "", levels: [1, 1], start: "C4_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
