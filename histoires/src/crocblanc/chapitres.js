// « Croc-Blanc » (White Fang), Jack London, 1906 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1906 (Project Gutenberg
// n° 910, domaine public). La traduction française de Gruyer et Postif (1923) est abrégée : celle-ci suit le roman en entier.
// Les mesures sont converties en mètres, en kilos et en degrés Celsius. Les titres des chapitres sont ceux de London, traduits.
// Tout ce qui n'est pas de London vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · La piste de la viande", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · La louve", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Le cri de la faim", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · La bataille des crocs", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · La tanière", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Le louveteau gris", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Le mur du monde", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · La loi de la viande", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · Les faiseurs de feu", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · La servitude", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Le paria", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · La piste des dieux", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Le pacte", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · La famine", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · L'ennemi de son espèce", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Le dieu fou", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Le règne de la haine", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · La mort qui s'accroche", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · L'indomptable", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Le maître d'amour", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · La longue piste", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · Le Sud", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Chapitre XXIII · Le domaine du dieu", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Chapitre XXIV · L'appel de l'espèce", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Chapitre XXV · Le loup qui dort", question: "", levels: [1, 1], start: "XXV_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
