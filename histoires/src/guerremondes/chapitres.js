// « La Guerre des mondes » (The War of the Worlds), H. G. Wells, 1898 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Henry-D. Davray (1900, édition illustrée de 1906), Project Gutenberg n° 60656, domaine public
// (Wells est mort en 1946, Davray en 1944). Texte de Davray gardé tel quel, sauf la typographie (tirets, espaces, accents
// sur les capitales) et deux coquilles ; les légendes des gravures, qui répétaient le texte, sont retirées.
// Tout ce qui n'est pas de Wells ou de Davray vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Livre I · Chapitre I · À la veille de la guerre", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Le Météore", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Sur la lande", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Le cylindre se dévisse", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Le Rayon Ardent", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Le Rayon Ardent sur la route de Chobham", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Comment je rentrai chez moi", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Vendredi soir", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · La lutte commence", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · En pleine mêlée", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · À la fenêtre", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Ce que je vis de la destruction de Weybridge et de Shepperton", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Par quel hasard je rencontrai le vicaire", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · À Londres", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Ce qui s'était passé dans le Surrey", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · La panique", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Le « Fulgurant »", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Livre II · Chapitre XVIII · Sous le talon", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · Ce que nous vîmes de la maison en ruines", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "Chapitre XX · Les jours d'emprisonnement", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "Chapitre XXI · La mort du vicaire", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "Chapitre XXII · Le silence", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "Chapitre XXIII · L'ouvrage de quinze jours", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "Chapitre XXIV · L'homme de Putney Hill", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "Chapitre XXV · Londres mort", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "Chapitre XXVI · Le désastre", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "Chapitre XXVII · Épilogue", question: "", levels: [1, 1], start: "XXVII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
