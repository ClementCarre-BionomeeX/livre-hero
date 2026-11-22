// « Les Mines du roi Salomon » (King Solomon's Mines), H. Rider Haggard, 1885 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1885 (Project
// Gutenberg n° 2166, domaine public). Les titres des chapitres sont ceux de Haggard, traduits ; ceux des pages, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Quelques mots et généralités sur les
// peuples d'Afrique, courants en 1885 et blessants aujourd'hui, ont été adoucis ou retirés ; la notice le dit.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Avant-propos", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 1 · Je fais la connaissance de sir Henry Curtis", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 2 · La légende des mines de Salomon", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 3 · Umbopa entre à notre service", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 4 · Une chasse à l'éléphant", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 5 · Notre marche dans le désert", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 6 · De l'eau ! De l'eau !", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 7 · La route de Salomon", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 8 · Nous entrons au pays des Koukouanas", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 9 · Twala le roi", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 10 · La chasse aux sorciers", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 11 · Nous donnons un signe", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 12 · Avant la bataille", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 13 · L'attaque", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 14 · Le dernier carré des Gris", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 15 · Good tombe malade", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 16 · Le Lieu de la Mort", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 17 · La chambre du trésor de Salomon", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 18 · Nous perdons tout espoir", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 19 · Les adieux d'Ignosi", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 20 · Retrouvé", question: "", levels: [1, 1], start: "C21_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
