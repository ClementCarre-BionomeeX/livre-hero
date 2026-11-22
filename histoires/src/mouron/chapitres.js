// « Le Mouron rouge » (The Scarlet Pimpernel), baronne Orczy, 1905 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1905 (Project
// Gutenberg n° 60, domaine public). Les titres des chapitres sont ceux d'Orczy, traduits ; ceux des pages, comme tout
// ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le portrait du vieux voiturier (ch. XXVI,
// « The Jew » dans l'original) et quelques remarques de narrateur ont été adoucis ; voir la notice.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Paris, septembre 1792", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Douvres : « Le Repos du Pêcheur »", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Les réfugiés", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · La ligue du Mouron rouge", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Marguerite", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Un dandy exquis de 1792", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · La femme la plus brillante d'Europe", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · L'agent accrédité", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · Le guet-apens", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Dans la loge de l'Opéra", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · Le bal de lord Grenville", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · Le bout de papier", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · Ou bien… ou bien ?", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · Une heure précise !", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · Le doute", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 16 · Richmond", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 17 · Adieu", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 18 · L'emblème mystérieux", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 19 · Le Mouron rouge", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 20 · L'ami", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 21 · L'attente", question: "", levels: [1, 1], start: "C21_1" },
  { id: "C22", title: "Chapitre 22 · Calais", question: "", levels: [1, 1], start: "C22_1" },
  { id: "C23", title: "Chapitre 23 · L'espoir", question: "", levels: [1, 1], start: "C23_1" },
  { id: "C24", title: "Chapitre 24 · Le piège mortel", question: "", levels: [1, 1], start: "C24_1" },
  { id: "C25", title: "Chapitre 25 · L'aigle et le renard", question: "", levels: [1, 1], start: "C25_1" },
  { id: "C26", title: "Chapitre 26 · Le vieux voiturier", question: "", levels: [1, 1], start: "C26_1" },
  { id: "C27", title: "Chapitre 27 · Sur la piste", question: "", levels: [1, 1], start: "C27_1" },
  { id: "C28", title: "Chapitre 28 · La cabane du père Blanchard", question: "", levels: [1, 1], start: "C28_1" },
  { id: "C29", title: "Chapitre 29 · Pris au piège", question: "", levels: [1, 1], start: "C29_1" },
  { id: "C30", title: "Chapitre 30 · La goélette", question: "", levels: [1, 1], start: "C30_1" },
  { id: "C31", title: "Chapitre 31 · L'évasion", question: "", levels: [1, 1], start: "C31_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
