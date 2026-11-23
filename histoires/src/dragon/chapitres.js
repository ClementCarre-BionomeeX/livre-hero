// « L'Heure du dragon » (The Hour of the Dragon), Robert E. Howard, 1935-1936 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// de décembre 1935 à avril 1936 (Project Gutenberg n° 42243, domaine public). Les titres des chapitres sont ceux de Howard ;
// ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "C1", title: "Chapitre 1 · Dormeur, éveille-toi !", question: "", levels: [1, 1], start: "C1_1" },
  { id: "C2", title: "Chapitre 2 · Un vent noir se lève", question: "", levels: [1, 1], start: "C2_1" },
  { id: "C3", title: "Chapitre 3 · Les falaises chancellent", question: "", levels: [1, 1], start: "C3_1" },
  { id: "C4", title: "Chapitre 4 · De quel enfer es-tu sorti ?", question: "", levels: [1, 1], start: "C4_1" },
  { id: "C5", title: "Chapitre 5 · Ce qui hante les fosses", question: "", levels: [1, 1], start: "C5_1" },
  { id: "C6", title: "Chapitre 6 · Un coup de poignard", question: "", levels: [1, 1], start: "C6_1" },
  { id: "C7", title: "Chapitre 7 · Le voile se déchire", question: "", levels: [1, 1], start: "C7_1" },
  { id: "C8", title: "Chapitre 8 · Braises mourantes", question: "", levels: [1, 1], start: "C8_1" },
  { id: "C9", title: "Chapitre 9 · C'est le roi, ou son fantôme !", question: "", levels: [1, 1], start: "C9_1" },
  { id: "C10", title: "Chapitre 10 · Une pièce de l'Achéron", question: "", levels: [1, 1], start: "C10_1" },
  { id: "C11", title: "Chapitre 11 · Les épées du Sud", question: "", levels: [1, 1], start: "C11_1" },
  { id: "C12", title: "Chapitre 12 · Le croc du dragon", question: "", levels: [1, 1], start: "C12_1" },
  { id: "C13", title: "Chapitre 13 · Un fantôme sorti du passé", question: "", levels: [1, 1], start: "C13_1" },
  { id: "C14", title: "Chapitre 14 · La main noire de Set", question: "", levels: [1, 1], start: "C14_1" },
  { id: "C15", title: "Chapitre 15 · Le retour du corsaire", question: "", levels: [1, 1], start: "C15_1" },
  { id: "C16", title: "Chapitre 16 · Khemi aux murs noirs", question: "", levels: [1, 1], start: "C16_1" },
  { id: "C17", title: "Chapitre 17 · Il a tué le fils sacré de Set !", question: "", levels: [1, 1], start: "C17_1" },
  { id: "C18", title: "Chapitre 18 · Je suis la femme qui ne mourut jamais", question: "", levels: [1, 1], start: "C18_1" },
  { id: "C19", title: "Chapitre 19 · Dans la salle des morts", question: "", levels: [1, 1], start: "C19_1" },
  { id: "C20", title: "Chapitre 20 · De la poussière, l'Achéron se relèvera", question: "", levels: [1, 1], start: "C20_1" },
  { id: "C21", title: "Chapitre 21 · Les tambours du péril", question: "", levels: [1, 1], start: "C21_1" },
  { id: "C22", title: "Chapitre 22 · La route de l'Achéron", question: "", levels: [1, 1], start: "C22_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
