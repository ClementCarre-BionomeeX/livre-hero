// « Robur-le-Conquérant », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1886, dans le domaine public (Project Gutenberg n° 5126). La saisie, faite à partir
// d'une reconnaissance de caractères, a été relue et corrigée (fiches/robur_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre 1 · La trompette du ciel", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre 2 · Le Weldon-Institute", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre 3 · Un inconnu à la tribune", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre 4 · La nuit de Fairmont-Park", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre 5 · La cellule qui tremble", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre 6 · L'aéronef", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre 7 · Le voyage commence", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre 8 · D'un océan à l'autre", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre 9 · Par-dessus le Pacifique", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre 10 · À la remorque", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre 11 · L'Europe en une nuit", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre 12 · Le Sahara et le Dahomey", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre 13 · L'Atlantique du sud", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre 14 · Le cyclone du pôle", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre 15 · L'île X", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre 16 · Une étincelle", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre 17 · Pendant ce temps, à Philadelphie", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre 18 · Le Go a head", question: "", levels: [1, 1], start: "XVIII_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
