// « Le Prisonnier de Zenda » (The Prisoner of Zenda), Anthony Hope, 1894 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1894 (Project
// Gutenberg n° 95, domaine public). Les titres des chapitres sont ceux de Hope, traduits ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Les Rassendyll, avec un mot sur les Elphberg", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · De la couleur des cheveux des hommes", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Une joyeuse soirée avec un parent éloigné", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Le roi est fidèle au rendez-vous", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Les aventures d'une doublure", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Le secret d'une cave", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · Sa Majesté dort à Strelsau", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · Une belle cousine et un frère ténébreux", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · Un nouvel usage pour une table à thé", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Une belle occasion pour un scélérat", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · La chasse à un très gros sanglier", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · Je reçois une visite et j'amorce un hameçon", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · Un perfectionnement de l'échelle de Jacob", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · Une nuit sous les murs du château", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · Je cause avec un tentateur", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 16 · Un plan désespéré", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 17 · Les divertissements nocturnes du jeune Rupert", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 18 · Le piège forcé", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 19 · Face à face dans la forêt", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 20 · Le prisonnier et le roi", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 21 · Si l'amour était tout !", question: "", levels: [1, 1], start: "C21_1" },
  { id: "C22", title: "Chapitre 22 · Présent, passé… et avenir ?", question: "", levels: [1, 1], start: "C22_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
