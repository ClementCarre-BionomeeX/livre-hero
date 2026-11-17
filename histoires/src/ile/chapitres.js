// « L'Île au trésor » (Treasure Island), R. L. Stevenson, 1883 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (Project Gutenberg
// n° 120, domaine public). La dédicace et le poème « À l'acheteur qui hésite » ouvrent le livre ; la note de Stevenson
// au chapitre 21 est remise à son appel, entre parenthèses. Les titres des chapitres sont ceux de Stevenson, traduits ;
// les six parties du roman sont rappelées dans les résumés. Tout ce qui n'est pas de Stevenson vit dans les tags.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C0", title: "Dédicace", question: "", levels: [1, 1], start: "C0_1" },
  { id: "C1", title: "Chapitre 1 · Le vieux loup de mer de l'Amiral-Benbow", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Chien-Noir paraît et disparaît", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · La tache noire", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · Le coffre de marin", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · La fin de l'aveugle", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Les papiers du capitaine", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · Je vais à Bristol", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · À l'enseigne de la Longue-Vue", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · La poudre et les armes", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Le voyage", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · Ce que j'entendis dans le tonneau de pommes", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · Conseil de guerre", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · Comment commença mon aventure à terre", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · Le premier coup", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · L'homme de l'île", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 16 · Récit continué par le docteur : comment le navire fut abandonné", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 17 · Récit continué par le docteur : le dernier voyage de la yole", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 18 · Récit continué par le docteur : fin du combat du premier jour", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 19 · Récit repris par Jim Hawkins : la garnison de la palissade", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 20 · L'ambassade de Silver", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 21 · L'attaque", question: "", levels: [1, 1], start: "C21_1" },
  { id: "C22", title: "Chapitre 22 · Comment commença mon aventure en mer", question: "", levels: [1, 1], start: "C22_1" },
  { id: "C23", title: "Chapitre 23 · Le jusant court", question: "", levels: [1, 1], start: "C23_1" },
  { id: "C24", title: "Chapitre 24 · La croisière du coracle", question: "", levels: [1, 1], start: "C24_1" },
  { id: "C25", title: "Chapitre 25 · J'amène le Jolly Roger", question: "", levels: [1, 1], start: "C25_1" },
  { id: "C26", title: "Chapitre 26 · Israel Hands", question: "", levels: [1, 1], start: "C26_1" },
  { id: "C27", title: "Chapitre 27 · « Pièces de huit »", question: "", levels: [1, 1], start: "C27_1" },
  { id: "C28", title: "Chapitre 28 · Dans le camp de l'ennemi", question: "", levels: [1, 1], start: "C28_1" },
  { id: "C29", title: "Chapitre 29 · La tache noire, encore", question: "", levels: [1, 1], start: "C29_1" },
  { id: "C30", title: "Chapitre 30 · Sur parole", question: "", levels: [1, 1], start: "C30_1" },
  { id: "C31", title: "Chapitre 31 · La chasse au trésor : l'indicateur de Flint", question: "", levels: [1, 1], start: "C31_1" },
  { id: "C32", title: "Chapitre 32 · La chasse au trésor : la voix parmi les arbres", question: "", levels: [1, 1], start: "C32_1" },
  { id: "C33", title: "Chapitre 33 · La chute d'un chef", question: "", levels: [1, 1], start: "C33_1" },
  { id: "C34", title: "Chapitre 34 · Et pour finir", question: "", levels: [1, 1], start: "C34_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
