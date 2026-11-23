// « La Fille du géant du gel » (The Frost-Giant's Daughter), Robert E. Howard, écrit en 1932 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (domaine
// public en France). Le titre du chapitre, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont
// de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "La Fille du géant du gel", question: "", levels: [1, 1], start: "C1_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
