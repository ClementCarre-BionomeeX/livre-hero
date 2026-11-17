// « L'Étrange Cas du Dr Jekyll et de Mr Hyde » (Strange Case of Dr Jekyll and Mr Hyde), R. L. Stevenson, 1886 : un livre
// à lire, sans choix (lecture: true). Texte : la traduction de Théo Varlet (1871-1938, domaine public), d'après l'édition
// électronique du groupe Ebooks libres et gratuits (2003). Texte gardé tel quel, sauf la typographie et une virgule
// égarée (« plein de, santé »). Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux,
// mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · À propos d'une porte", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · En quête de Mr Hyde", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · La parfaite tranquillité du Dr Jekyll", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · L'assassinat de Sir Danvers Carew", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · L'incident de la lettre", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Le remarquable incident du Dr Lanyon", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · L'incident de la fenêtre", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · La dernière nuit", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · La narration du Dr Lanyon", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Henry Jekyll fait l'exposé complet de son cas", question: "", levels: [1, 1], start: "X_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
