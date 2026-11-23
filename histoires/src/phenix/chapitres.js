// « Le Phénix sur l'épée » (The Phoenix on the Sword), Robert E. Howard, 1932 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1932 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Les conjurés", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Le roi et sa carte", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · L'Anneau du serpent", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Le sage de Golamira", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · La nuit des assassins", question: "", levels: [1, 1], start: "C5_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
