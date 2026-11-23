// « Les Mille et Un Fantômes », Alexandre Dumas, 1849 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "À M. ***", question: "", levels: [1, 1], start: "P_1" },
  { id: "I", title: "Chapitre I · La rue de Diane à Fontenay-aux-Roses", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · L'impasse des Sergents", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Le procès-verbal", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · La maison de Scarron", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Le soufflet de Charlotte Corday", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Solange", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Albert", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Le chat, l'huissier et le squelette", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · Les tombeaux de Saint-Denis", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · L'Artifaille", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Le bracelet de cheveux", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Les monts Carpathes", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Le château de Brankovan", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Les deux frères", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Le monastère de Hango", question: "", levels: [1, 1], start: "XV_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
