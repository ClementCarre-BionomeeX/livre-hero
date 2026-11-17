// « Les Premiers Hommes dans la Lune » (The First Men in the Moon), H. G. Wells, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project Gutenberg
// n° 1013, domaine public). Les notes de Wells sont gardées dans le texte, entre parenthèses ; les mesures sont converties
// en mètres et en kilomètres. Les titres des chapitres sont ceux de Wells, traduits.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · M. Bedford rencontre M. Cavor à Lympne", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · La première fabrication de la Cavorite", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · La construction de la sphère", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Dans la sphère", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Le voyage vers la lune", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · L'arrivée sur la lune", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Le lever du soleil sur la lune", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Un matin lunaire", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · L'exploration commence", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Perdus dans la lune", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Les pâturages des veaux de lune", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Le visage du Sélénite", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · M. Cavor fait quelques suggestions", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Essais de conversation", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Le pont du vertige", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Points de vue", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Le combat dans la caverne des bouchers", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · Au soleil", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · M. Bedford seul", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · M. Bedford dans l'espace infini", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · M. Bedford à Littlestone", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · L'étonnante communication de M. Julius Wendigee", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Chapitre XXIII · Résumé des six premiers messages de M. Cavor", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Chapitre XXIV · Histoire naturelle des Sélénites", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Chapitre XXV · Le Grand Lunaire", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "Chapitre XXVI · Le dernier message de Cavor à la terre", question: "", levels: [1, 1], start: "XXVI_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
