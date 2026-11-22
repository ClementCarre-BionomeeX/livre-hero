// « Le Vagabond des étoiles » (The Star Rover), Jack London, 1915 : un livre à lire, sans choix (lecture: true).
// Texte de London (1876-1916, domaine public), dans la traduction de Paul Gruyer et Louis Postif (Crès, 1925, domaine
// public), d'après la saisie du projet Gutenberg. Les titres des chapitres sont ceux des traducteurs ; ceux des pages,
// comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Darrell Standing se présente", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Une histoire de dynamite", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. L'interrogatoire", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. « Assieds-toi, Standing ! »", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Des tapotements dans la nuit", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. « Samarie ! »", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. La camisole de force", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. La dynamite ou la mort", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Vouloir mourir", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. Un sourire quand même", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. À travers les étoiles", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. La caravane vers l'Ouest", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. La grande trahison des Mormons", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. Le supplice de la soif", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Rêves d'opium ou réalités ?", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. « Et quoi encore, Vandervoot ? »", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. Seigneur ! Seigneur ! Un pauvre matelot…", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. « Maintenant, ô mon roi ! »", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Oppenheimer demeure sceptique", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Quand j'étais Ragnar Lodbrog", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. Sur le volcan juif de Jérusalem", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Comment je serai pendu", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "XXIII. À l'instar de Robinson", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "XXIV. La double camisole", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "XXV. Je rends visite à Jake Oppenheimer", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "XXVI. C'est l'amour qui m'a perdu", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "XXVII. Une chauve-souris dans la lumière", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "XXVIII. Qui serai-je quand je revivrai ?", question: "", levels: [1, 1], start: "XXVIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
