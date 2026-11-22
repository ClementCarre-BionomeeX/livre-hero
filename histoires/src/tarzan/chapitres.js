// « Tarzan, l'enfant des singes » (Tarzan of the Apes), Edgar Rice Burroughs, 1912 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1912 (Project
// Gutenberg n° 78, domaine public). Les titres des chapitres sont ceux de Burroughs, traduits (le ch. XXI est renommé) ;
// ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le regard raciste du
// narrateur sur les Africains et sur Esmeralda a été retiré ou adouci ; voir la notice.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Vers le large", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Un foyer sauvage", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · La vie et la mort", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Les grands singes", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Le singe blanc", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Combats dans la jungle", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · La lumière du savoir", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · Le chasseur des cimes", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · L'homme et l'homme", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Le fantôme de la peur", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · « Roi des singes »", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · La raison de l'homme", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · Ses semblables", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · À la merci de la jungle", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · Le dieu de la forêt", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 16 · « Des plus remarquables »", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 17 · Funérailles", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 18 · Le tribut de la jungle", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 19 · L'appel des origines", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 20 · L'hérédité", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 21 · Le poteau de Mbonga", question: "", levels: [1, 1], start: "C21_1" },
  { id: "C22", title: "Chapitre 22 · L'expédition de secours", question: "", levels: [1, 1], start: "C22_1" },
  { id: "C23", title: "Chapitre 23 · Frères humains", question: "", levels: [1, 1], start: "C23_1" },
  { id: "C24", title: "Chapitre 24 · Le trésor perdu", question: "", levels: [1, 1], start: "C24_1" },
  { id: "C25", title: "Chapitre 25 · L'avant-poste du monde", question: "", levels: [1, 1], start: "C25_1" },
  { id: "C26", title: "Chapitre 26 · Le sommet de la civilisation", question: "", levels: [1, 1], start: "C26_1" },
  { id: "C27", title: "Chapitre 27 · Le géant reparaît", question: "", levels: [1, 1], start: "C27_1" },
  { id: "C28", title: "Chapitre 28 · Conclusion", question: "", levels: [1, 1], start: "C28_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
