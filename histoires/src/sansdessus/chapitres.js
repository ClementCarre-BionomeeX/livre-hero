// « Sans dessus dessous », Jules Verne, 1889 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (troisième édition Hetzel). Les notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres et des pages sont de Claude (ceux de Verne, très longs, sont cités
// dans les résumés quand ils servent), comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Le Pôle à vendre", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Les délégués de la vieille Europe", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. L'adjudication", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. De vieilles connaissances", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Du charbon au Pôle ?", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Une conversation interrompue", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Le président Barbicane parle", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Comme dans Jupiter", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Un ingénieur français", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Les inquiétudes", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Le carnet de J.-T. Maston", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. J.-T. Maston se tait", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Une réponse épique", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Le lieu x", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Avis pressant", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Le chœur des mécontents", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Huit mois au Kilimandjaro", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Minuit au Wamasai", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Le lendemain", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Le fin mot de l'histoire", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. Rassurant pour l'avenir", question: "", levels: [1, 1], start: "XXI_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
