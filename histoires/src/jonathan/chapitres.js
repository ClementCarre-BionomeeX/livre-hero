// « Les Naufragés du Jonathan », Jules Verne, 1909 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1909). Les notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I1", title: "Première partie · I. Le guanaque", question: "", levels: [1, 1], start: "I1_1" },
  { id: "I2", title: "Première partie · II. Mystérieuse existence", question: "", levels: [1, 1], start: "I2_1" },
  { id: "I3", title: "Première partie · III. La fin d'un pays libre", question: "", levels: [1, 1], start: "I3_1" },
  { id: "I4", title: "Première partie · IV. À la côte", question: "", levels: [1, 1], start: "I4_1" },
  { id: "I5", title: "Première partie · V. Les naufragés", question: "", levels: [1, 1], start: "I5_1" },
  { id: "II1", title: "Deuxième partie · I. À terre", question: "", levels: [1, 1], start: "II1_1" },
  { id: "II2", title: "Deuxième partie · II. La première loi", question: "", levels: [1, 1], start: "II2_1" },
  { id: "II3", title: "Deuxième partie · III. À la baie Scotchwell", question: "", levels: [1, 1], start: "II3_1" },
  { id: "II4", title: "Deuxième partie · IV. Hivernage", question: "", levels: [1, 1], start: "II4_1" },
  { id: "II5", title: "Deuxième partie · V. Un navire en vue", question: "", levels: [1, 1], start: "II5_1" },
  { id: "II6", title: "Deuxième partie · VI. Libres", question: "", levels: [1, 1], start: "II6_1" },
  { id: "II7", title: "Deuxième partie · VII. La première enfance d'un peuple", question: "", levels: [1, 1], start: "II7_1" },
  { id: "II8", title: "Deuxième partie · VIII. Halg et Sirk", question: "", levels: [1, 1], start: "II8_1" },
  { id: "II9", title: "Deuxième partie · IX. Le deuxième hiver", question: "", levels: [1, 1], start: "II9_1" },
  { id: "II10", title: "Deuxième partie · X. Du sang", question: "", levels: [1, 1], start: "II10_1" },
  { id: "II11", title: "Deuxième partie · XI. Un chef", question: "", levels: [1, 1], start: "II11_1" },
  { id: "III1", title: "Troisième partie · I. Premières mesures", question: "", levels: [1, 1], start: "III1_1" },
  { id: "III2", title: "Troisième partie · II. La cité naissante", question: "", levels: [1, 1], start: "III2_1" },
  { id: "III3", title: "Troisième partie · III. L'attentat", question: "", levels: [1, 1], start: "III3_1" },
  { id: "III4", title: "Troisième partie · IV. Dans les grottes", question: "", levels: [1, 1], start: "III4_1" },
  { id: "III5", title: "Troisième partie · V. Un héros", question: "", levels: [1, 1], start: "III5_1" },
  { id: "III6", title: "Troisième partie · VI. Pendant dix-huit mois", question: "", levels: [1, 1], start: "III6_1" },
  { id: "III7", title: "Troisième partie · VII. L'invasion", question: "", levels: [1, 1], start: "III7_1" },
  { id: "III8", title: "Troisième partie · VIII. Un traître", question: "", levels: [1, 1], start: "III8_1" },
  { id: "III9", title: "Troisième partie · IX. La patrie hostelienne", question: "", levels: [1, 1], start: "III9_1" },
  { id: "III10", title: "Troisième partie · X. Cinq ans après", question: "", levels: [1, 1], start: "III10_1" },
  { id: "III11", title: "Troisième partie · XI. La fièvre de l'or", question: "", levels: [1, 1], start: "III11_1" },
  { id: "III12", title: "Troisième partie · XII. L'île au pillage", question: "", levels: [1, 1], start: "III12_1" },
  { id: "III13", title: "Troisième partie · XIII. Une « journée »", question: "", levels: [1, 1], start: "III13_1" },
  { id: "III14", title: "Troisième partie · XIV. L'abdication", question: "", levels: [1, 1], start: "III14_1" },
  { id: "III15", title: "Troisième partie · XV. Seul !", question: "", levels: [1, 1], start: "III15_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
