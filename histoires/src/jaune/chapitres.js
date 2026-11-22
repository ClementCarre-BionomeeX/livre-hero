// « Le Mystère de la chambre jaune », Gaston Leroux, 1907 : un livre à lire, sans choix (lecture: true). Texte de Leroux
// (1868-1927, domaine public), d'après l'édition du projet Gutenberg ; les deux plans de Rouletabille ne sont pas
// reproduits, leurs légendes le sont. Les titres des chapitres sont de Leroux ; ceux des pages, comme tout ce qui vit dans
// les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "I. Où l'on commence à ne pas comprendre", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "II. Où apparaît pour la première fois Joseph Rouletabille", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "III. « Un homme a passé comme une ombre à travers les volets »", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "IV. « Au sein d'une nature sauvage »", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "V. Où Joseph Rouletabille adresse à M. Robert Darzac une phrase qui produit son petit effet", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "VI. Au fond de la chênaie", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "VII. Où Rouletabille part en expédition sous le lit", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "VIII. Le juge d'instruction interroge Mlle Stangerson", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "IX. Reporter et policier", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "X. « Maintenant, il va falloir manger du saignant »", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "XI. Où Frédéric Larsan explique comment l'assassin a pu sortir de la Chambre Jaune", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "XII. La canne de Frédéric Larsan", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "XIII. « Le presbytère n'a rien perdu de son charme ni le jardin de son éclat »", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "XIV. « J'attends l'assassin, ce soir »", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "XV. Traquenard", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "XVI. Étrange phénomène de dissociation de la matière", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "XVII. La galerie inexplicable", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "XVIII. Rouletabille a dessiné un cercle entre les deux bosses de son front", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "XIX. Rouletabille m'offre à déjeuner à l'auberge du « Donjon »", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "XX", title: "XX. Un geste de Mlle Stangerson", question: "", levels: [1, 1], start: "XX_1" },
  { id: "XXI", title: "XXI. À l'affût", question: "", levels: [1, 1], start: "XXI_1" },
  { id: "XXII", title: "XXII. Le cadavre incroyable", question: "", levels: [1, 1], start: "XXII_1" },
  { id: "XXIII", title: "XXIII. La double piste", question: "", levels: [1, 1], start: "XXIII_1" },
  { id: "XXIV", title: "XXIV. Rouletabille connaît les deux moitiés de l'assassin", question: "", levels: [1, 1], start: "XXIV_1" },
  { id: "XXV", title: "XXV. Rouletabille part en voyage", question: "", levels: [1, 1], start: "XXV_1" },
  { id: "XXVI", title: "XXVI. Où Joseph Rouletabille est impatiemment attendu", question: "", levels: [1, 1], start: "XXVI_1" },
  { id: "XXVII", title: "XXVII. Où Joseph Rouletabille apparaît dans toute sa gloire", question: "", levels: [1, 1], start: "XXVII_1" },
  { id: "XXVIII", title: "XXVIII. Où il est prouvé qu'on ne pense pas toujours à tout", question: "", levels: [1, 1], start: "XXVIII_1" },
  { id: "XXIX", title: "XXIX. Le mystère de Mlle Stangerson", question: "", levels: [1, 1], start: "XXIX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
