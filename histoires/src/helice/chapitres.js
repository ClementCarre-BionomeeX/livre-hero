// « L'Île à hélice », Jules Verne, 1895 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place.
// Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les
// tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I1", title: "Première partie · I. Le Quatuor Concertant", question: "", levels: [1, 1], start: "I1_1" },
  { id: "I2", title: "Première partie · II. Puissance d'une sonate cacophonique", question: "", levels: [1, 1], start: "I2_1" },
  { id: "I3", title: "Première partie · III. Un loquace cicérone", question: "", levels: [1, 1], start: "I3_1" },
  { id: "I4", title: "Première partie · IV. Le Quatuor Concertant déconcerté", question: "", levels: [1, 1], start: "I4_1" },
  { id: "I5", title: "Première partie · V. Standard-Island et Milliard-City", question: "", levels: [1, 1], start: "I5_1" },
  { id: "I6", title: "Première partie · VI. Invités… inviti", question: "", levels: [1, 1], start: "I6_1" },
  { id: "I7", title: "Première partie · VII. Cap à l'ouest", question: "", levels: [1, 1], start: "I7_1" },
  { id: "I8", title: "Première partie · VIII. Navigation", question: "", levels: [1, 1], start: "I8_1" },
  { id: "I9", title: "Première partie · IX. L'archipel des Sandwich", question: "", levels: [1, 1], start: "I9_1" },
  { id: "I10", title: "Première partie · X. Passage de la ligne", question: "", levels: [1, 1], start: "I10_1" },
  { id: "I11", title: "Première partie · XI. Îles Marquises", question: "", levels: [1, 1], start: "I11_1" },
  { id: "I12", title: "Première partie · XII. Trois semaines aux Pomotou", question: "", levels: [1, 1], start: "I12_1" },
  { id: "I13", title: "Première partie · XIII. Relâche à Tahiti", question: "", levels: [1, 1], start: "I13_1" },
  { id: "I14", title: "Première partie · XIV. De fêtes en fêtes", question: "", levels: [1, 1], start: "I14_1" },
  { id: "II1", title: "Seconde partie · I. Aux îles de Cook", question: "", levels: [1, 1], start: "II1_1" },
  { id: "II2", title: "Seconde partie · II. D'îles en îles", question: "", levels: [1, 1], start: "II2_1" },
  { id: "II3", title: "Seconde partie · III. Concert à la cour", question: "", levels: [1, 1], start: "II3_1" },
  { id: "II4", title: "Seconde partie · IV. Ultimatum britannique", question: "", levels: [1, 1], start: "II4_1" },
  { id: "II5", title: "Seconde partie · V. Le Tabou à Tonga-Tabou", question: "", levels: [1, 1], start: "II5_1" },
  { id: "II6", title: "Seconde partie · VI. Une collection de fauves", question: "", levels: [1, 1], start: "II6_1" },
  { id: "II7", title: "Seconde partie · VII. Battues", question: "", levels: [1, 1], start: "II7_1" },
  { id: "II8", title: "Seconde partie · VIII. Fidji et Fidjiens", question: "", levels: [1, 1], start: "II8_1" },
  { id: "II9", title: "Seconde partie · IX. Un casus belli", question: "", levels: [1, 1], start: "II9_1" },
  { id: "II10", title: "Seconde partie · X. Changement de propriétaires", question: "", levels: [1, 1], start: "II10_1" },
  { id: "II11", title: "Seconde partie · XI. Attaque et défense", question: "", levels: [1, 1], start: "II11_1" },
  { id: "II12", title: "Seconde partie · XII. Tribord et Bâbord, la barre", question: "", levels: [1, 1], start: "II12_1" },
  { id: "II13", title: "Seconde partie · XIII. Le mot de la situation dit par Pinchinat", question: "", levels: [1, 1], start: "II13_1" },
  { id: "II14", title: "Seconde partie · XIV. Dénouement", question: "", levels: [1, 1], start: "II14_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
