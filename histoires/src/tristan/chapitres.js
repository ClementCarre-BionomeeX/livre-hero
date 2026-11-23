// « Le Roman de Tristan et Iseut », renouvelé par Joseph Bédier (1900) : un livre à lire, sans choix (lecture: true).
// Édition Piazza, préface de Gaston Paris, domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des
// chapitres sont de Bédier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "Préface de Gaston Paris", question: "", levels: [1, 1], start: "P_1" },
  { id: "I", title: "Les Enfances de Tristan", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Le Morholt d'Irlande", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "La Quête de la Belle aux cheveux d'or", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Le Philtre", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Brangien livrée aux serfs", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Le Grand Pin", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Le Nain Frocin", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Le Saut de la chapelle", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "La Forêt du Morois", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "L'Ermite Ogrin", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Le Gué Aventureux", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Le Jugement par le fer rouge", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "La Voix du rossignol", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Le Grelot merveilleux", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Iseut aux Blanches Mains", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Kaherdin", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Dinas de Lidan", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Tristan fou", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "La Mort", question: "", levels: [1, 1], start: "XIX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
