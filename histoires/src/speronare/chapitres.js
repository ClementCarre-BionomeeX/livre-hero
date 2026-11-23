// « Le Speronare », d'Alexandre Dumas (1842) : un livre à lire, sans choix (lecture: true). Domaine public, d'après
// l'édition numérique du projet Gutenberg ; les notes de Dumas sont gardées, un mot retouché (voir la notice). Les titres
// des chapitres sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "La Santa-Maria di Pie di Grotta", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Caprée", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Gaëtano Sferra", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "L'anniversaire", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Messine la Noble", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Le pesce spado", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Catane", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Les bénédictins de Saint-Nicolas-le-Vieux", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "L'Etna", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Syracuse", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "La chapelle gothique", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Carmela", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Le souterrain", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Un requin", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Il signor Anga", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Girgenti la Magnifique", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Le colonel Santa-Croce", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "L'intérieur de la Sicile", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Palerme l'Heureuse", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Gelsomina", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Sainte Rosalie", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Le couvent des capucins", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Grecs et Normands", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Charles d'Anjou", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Jean de Procida", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "Pierre d'Aragon", question: "", levels: [1, 1], start: "XXVI_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
