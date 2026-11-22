// « P'tit-Bonhomme », Jules Verne, 1893 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1893). Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui
// vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I1", title: "Première partie · I. Au fond du Connaught", question: "", levels: [1, 1], start: "I1_1" },
  { id: "I2", title: "Première partie · II. Marionnettes royales !", question: "", levels: [1, 1], start: "I2_1" },
  { id: "I3", title: "Première partie · III. Ragged-school", question: "", levels: [1, 1], start: "I3_1" },
  { id: "I4", title: "Première partie · IV. L'enterrement d'une mouette", question: "", levels: [1, 1], start: "I4_1" },
  { id: "I5", title: "Première partie · V. Encore la ragged-school", question: "", levels: [1, 1], start: "I5_1" },
  { id: "I6", title: "Première partie · VI. Limerick", question: "", levels: [1, 1], start: "I6_1" },
  { id: "I7", title: "Première partie · VII. Situation compromise", question: "", levels: [1, 1], start: "I7_1" },
  { id: "I8", title: "Première partie · VIII. La ferme de Kerwan", question: "", levels: [1, 1], start: "I8_1" },
  { id: "I9", title: "Première partie · IX. La ferme de Kerwan (suite)", question: "", levels: [1, 1], start: "I9_1" },
  { id: "I10", title: "Première partie · X. Ce qui s'est passé au Donegal", question: "", levels: [1, 1], start: "I10_1" },
  { id: "I11", title: "Première partie · XI. Prime à gagner", question: "", levels: [1, 1], start: "I11_1" },
  { id: "I12", title: "Première partie · XII. Le retour", question: "", levels: [1, 1], start: "I12_1" },
  { id: "I13", title: "Première partie · XIII. Double baptême", question: "", levels: [1, 1], start: "I13_1" },
  { id: "I14", title: "Première partie · XIV. Et il n'avait pas encore neuf ans", question: "", levels: [1, 1], start: "I14_1" },
  { id: "I15", title: "Première partie · XV. Mauvaise année", question: "", levels: [1, 1], start: "I15_1" },
  { id: "I16", title: "Première partie · XVI. Éviction", question: "", levels: [1, 1], start: "I16_1" },
  { id: "II1", title: "Deuxième partie · I. Leurs Seigneuries", question: "", levels: [1, 1], start: "II1_1" },
  { id: "II2", title: "Deuxième partie · II. Pendant quatre mois", question: "", levels: [1, 1], start: "II2_1" },
  { id: "II3", title: "Deuxième partie · III. À Trelingar-castle", question: "", levels: [1, 1], start: "II3_1" },
  { id: "II4", title: "Deuxième partie · IV. Les lacs de Killarney", question: "", levels: [1, 1], start: "II4_1" },
  { id: "II5", title: "Deuxième partie · V. Chien de berger et chiens de chasse", question: "", levels: [1, 1], start: "II5_1" },
  { id: "II6", title: "Deuxième partie · VI. Dix-huit ans à deux", question: "", levels: [1, 1], start: "II6_1" },
  { id: "II7", title: "Deuxième partie · VII. Sept mois à Cork", question: "", levels: [1, 1], start: "II7_1" },
  { id: "II8", title: "Deuxième partie · VIII. Premier chauffeur", question: "", levels: [1, 1], start: "II8_1" },
  { id: "II9", title: "Deuxième partie · IX. Une idée commerciale de Bob", question: "", levels: [1, 1], start: "II9_1" },
  { id: "II10", title: "Deuxième partie · X. À Dublin", question: "", levels: [1, 1], start: "II10_1" },
  { id: "II11", title: "Deuxième partie · XI. Le bazar des Petites Poches", question: "", levels: [1, 1], start: "II11_1" },
  { id: "II12", title: "Deuxième partie · XII. Comme on se retrouve", question: "", levels: [1, 1], start: "II12_1" },
  { id: "II13", title: "Deuxième partie · XIII. Changement de couleur et d'état", question: "", levels: [1, 1], start: "II13_1" },
  { id: "II14", title: "Deuxième partie · XIV. La mer de trois côtés", question: "", levels: [1, 1], start: "II14_1" },
  { id: "II15", title: "Deuxième partie · XV. Et pourquoi pas ?", question: "", levels: [1, 1], start: "II15_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
