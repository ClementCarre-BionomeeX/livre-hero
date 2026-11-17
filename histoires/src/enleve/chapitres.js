// « Enlevé ! » (Kidnapped), R. L. Stevenson, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1886 (Project
// Gutenberg n° 421, domaine public). Les quelques notes de Stevenson sur les mots écossais sont fondues dans le texte ;
// l'écossais des personnages est rendu par le ton plus que par l'orthographe. Les titres des chapitres sont ceux de
// Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Je me mets en route pour la maison de Shaws", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · J'arrive au bout de mon voyage", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Je fais la connaissance de mon oncle", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Je cours un grand danger dans la maison de Shaws", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Je vais à Queensferry", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Ce qui arriva à Queensferry", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · Je prends la mer sur le brick « Covenant », de Dysart", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · La dunette", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · L'homme à la ceinture d'or", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Le siège de la dunette", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · Le capitaine met les pouces", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · J'entends parler du « Renard rouge »", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · La perte du brick", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · L'îlot", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · Le garçon au bouton d'argent : à travers l'île de Mull", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 16 · Le garçon au bouton d'argent : à travers le Morven", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 17 · La mort du Renard rouge", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 18 · Je parle avec Alan dans le bois de Lettermore", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 19 · La maison de la peur", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 20 · La fuite dans la bruyère : les rochers", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 21 · La fuite dans la bruyère : le ravin de Corrynakiegh", question: "", levels: [1, 1], start: "C21_1" },
  { id: "C22", title: "Chapitre 22 · La fuite dans la bruyère : la lande", question: "", levels: [1, 1], start: "C22_1" },
  { id: "C23", title: "Chapitre 23 · La Cage de Cluny", question: "", levels: [1, 1], start: "C23_1" },
  { id: "C24", title: "Chapitre 24 · La fuite dans la bruyère : la querelle", question: "", levels: [1, 1], start: "C24_1" },
  { id: "C25", title: "Chapitre 25 · Dans le Balquhidder", question: "", levels: [1, 1], start: "C25_1" },
  { id: "C26", title: "Chapitre 26 · Fin de la fuite : nous passons le Forth", question: "", levels: [1, 1], start: "C26_1" },
  { id: "C27", title: "Chapitre 27 · Je vais chez M. Rankeillor", question: "", levels: [1, 1], start: "C27_1" },
  { id: "C28", title: "Chapitre 28 · Je pars à la conquête de mon héritage", question: "", levels: [1, 1], start: "C28_1" },
  { id: "C29", title: "Chapitre 29 · J'entre dans mon royaume", question: "", levels: [1, 1], start: "C29_1" },
  { id: "C30", title: "Chapitre 30 · Adieu", question: "", levels: [1, 1], start: "C30_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
