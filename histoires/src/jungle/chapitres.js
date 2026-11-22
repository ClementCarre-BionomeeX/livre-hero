// « Le Livre de la jungle » (The Jungle Book), Rudyard Kipling, 1894 : un livre à lire, sans choix (lecture: true).
// Texte de Kipling (1865-1936, domaine public), dans la traduction de Louis Fabulet et Robert d'Humières (1899, domaine
// public), d'après l'édition d'Ebooks libres et gratuits. Les titres des sept récits sont ceux de Kipling ; ceux des
// pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Les frères de Mowgli", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. La chasse de Kaa", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. « Au tigre, au tigre ! »", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Le phoque blanc", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Rikki-tikki-tavi", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Toomai des Éléphants", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Service de la Reine", question: "", levels: [1, 1], start: "VII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
