// « Histoire d'un casse-noisette », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas (raccourcis pour VII à X) ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "Préface", question: "", levels: [1, 1], start: "P_1" },
  { id: "I", title: "Chapitre I · Le parrain Drosselmayer", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · L'arbre de Noël", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Le petit homme au manteau de bois", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Choses merveilleuses", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · La bataille", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · La maladie", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · La naissance de Pirlipate", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · La vengeance de dame Souriçonne", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · La noisette Krakatuk", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Le jeune homme qui devait la casser", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · L'oncle et le neveu", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · La capitale", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Le royaume des poupées", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Le voyage", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Conclusion", question: "", levels: [1, 1], start: "XV_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
