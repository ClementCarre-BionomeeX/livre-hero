// « Le Dernier des Mohicans » (The Last of the Mohicans), James Fenimore Cooper, 1826 : un livre à lire, sans choix
// (lecture: true). Texte de Cooper (1789-1851, domaine public), dans la traduction d'Auguste-Jean-Baptiste Defauconpret
// (1767-1843, domaine public), d'après l'édition d'Ebooks libres et gratuits. Les chapitres n'ont pas de titre dans
// cette traduction : ceux d'ici, comme ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Le coureur de Munro", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Le sentier du Renard", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. Trois hommes au bord de la rivière", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. Le guide démasqué", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Le canot", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. La caverne de Glenn", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. La nuit des cris", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Le siège du rocher", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Découverts", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Les prisonniers du Renard", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. La proposition de Magua", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. Le combat de la colline", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. Le vieux fort", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Dans le brouillard", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Le parlementaire", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Le récit de Munro", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Le massacre", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. La plaine des morts", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Dans les ruines", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. La poursuite sur le lac", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. La piste perdue", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Les castors", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "XXIII. Au camp des Hurons", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "XXIV. Le jongleur et l'ours", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "XXV. Le Renard ligoté", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "XXVI. La ruse de l'ours", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "XXVII. La colère des Hurons", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "XXVIII. Le camp des Delawares", question: "", levels: [1, 1], start: "XXVIII_1" },
  { id: "XXIX", title: "XXIX. Le jugement de Tamenund", question: "", levels: [1, 1], start: "XXIX_1" },
  { id: "XXX", title: "XXX. La tortue", question: "", levels: [1, 1], start: "XXX_1" },
  { id: "XXXI", title: "XXXI. Le chant de guerre", question: "", levels: [1, 1], start: "XXXI_1" },
  { id: "XXXII", title: "XXXII. La bataille", question: "", levels: [1, 1], start: "XXXII_1" },
  { id: "XXXIII", title: "XXXIII. Les funérailles", question: "", levels: [1, 1], start: "XXXIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
