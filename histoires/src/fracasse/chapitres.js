// « Le Capitaine Fracasse », Théophile Gautier, 1863 : un livre à lire, sans choix (lecture: true). Texte de Gautier,
// domaine public, d'après l'édition Charpentier de 1913 numérisée par le projet Gutenberg. Les titres des chapitres sont
// de Gautier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · Le château de la misère", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Le chariot de Thespis", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · L'auberge du *Soleil bleu*", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Brigands pour les oiseaux", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Chez monsieur le marquis", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Effet de neige", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Où le roman justifie son titre", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Les choses se compliquent", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · Coups d'épée, coups de bâton et autres aventures", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Une tête dans une lucarne", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Le Pont-Neuf", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Le *Radis couronné*", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Double attaque", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Les délicatesses de Lampourde", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Malartic à l'œuvre", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Vallombreuse", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · La bague d'améthyste", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · En famille", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · Orties et toiles d'araignée", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Déclaration d'amour de Chiquita", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · Hymen, ô hyménée !", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · Le château du bonheur", question: "", levels: [1, 1], start: "XXII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
