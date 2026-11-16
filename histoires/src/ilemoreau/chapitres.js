// « L'Île du docteur Moreau » (The Island of Doctor Moreau), H. G. Wells, 1896 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1896 (Project Gutenberg
// n° 159, domaine public). Les notes de bas de page de Wells sont gardées dans le texte, entre parenthèses ou crochets.
// Les titres des chapitres sont ceux de Wells, traduits.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "INTRO", title: "Introduction", question: "", levels: [1, 1], start: "INTRO_1" },
  { id: "I", title: "Chapitre I · Dans le youyou de la Lady Vain", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · L'homme qui n'allait nulle part", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · L'étrange visage", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Au bastingage de la goélette", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · L'homme qui n'avait nulle part où aller", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Les bateliers à l'air mauvais", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · La porte fermée à clef", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Le cri du puma", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · La chose dans la forêt", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Le cri de l'homme", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · La chasse à l'homme", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Les Diseurs de la Loi", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Pourparlers", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Le docteur Moreau s'explique", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Au sujet des Gens-Bêtes", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Comment les Gens-Bêtes goûtèrent au sang", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Une catastrophe", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · On retrouve Moreau", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · La fête de Montgomery", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Seul avec les Gens-Bêtes", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · La régression des Gens-Bêtes", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · L'homme seul", question: "", levels: [1, 1], start: "XXII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
