// « Arsène Lupin, gentleman-cambrioleur », Maurice Leblanc, 1907 : un livre à lire, sans choix (lecture: true). Texte de
// Leblanc (1864-1941, domaine public), d'après l'édition du projet Gutenberg ; la préface de Jules Claretie n'est pas
// reprise. Les titres des nouvelles sont de Leblanc ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux,
// mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. L'arrestation d'Arsène Lupin", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Arsène Lupin en prison", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. L'évasion d'Arsène Lupin", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Le mystérieux voyageur", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Le collier de la reine", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Le sept de cœur", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Le coffre-fort de madame Imbert", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. La perle noire", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Herlock Sholmès arrive trop tard", question: "", levels: [1, 1], start: "IX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
