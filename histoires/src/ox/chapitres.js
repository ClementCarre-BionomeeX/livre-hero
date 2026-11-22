// « Le Docteur Ox », Jules Verne, 1874 : un livre à lire, sans choix (lecture: true). Recueil de quatre récits de
// Jules Verne et d'un récit de son frère Paul, domaine public, d'après l'édition numérisée par le Projet Gutenberg
// (Hetzel). Les titres des chapitres de « Maître Zacharius » et d'« Un hivernage dans les glaces » sont ceux de Verne ;
// ceux du « Docteur Ox », très longs chez Verne, sont de Claude et cités dans les résumés, comme les titres des pages
// et tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I1", title: "Une fantaisie du docteur Ox · I. Quiquendone", question: "", levels: [1, 1], start: "I1_1" },
  { id: "I2", title: "Une fantaisie du docteur Ox · II. Le parloir du bourgmestre", question: "", levels: [1, 1], start: "I2_1" },
  { id: "I3", title: "Une fantaisie du docteur Ox · III. Le commissaire Passauf", question: "", levels: [1, 1], start: "I3_1" },
  { id: "I4", title: "Une fantaisie du docteur Ox · IV. Le docteur Ox", question: "", levels: [1, 1], start: "I4_1" },
  { id: "I5", title: "Une fantaisie du docteur Ox · V. Une visite au docteur", question: "", levels: [1, 1], start: "I5_1" },
  { id: "I6", title: "Une fantaisie du docteur Ox · VI. Frantz et Suzel", question: "", levels: [1, 1], start: "I6_1" },
  { id: "I7", title: "Une fantaisie du docteur Ox · VII. Les Huguenots", question: "", levels: [1, 1], start: "I7_1" },
  { id: "I8", title: "Une fantaisie du docteur Ox · VIII. La valse", question: "", levels: [1, 1], start: "I8_1" },
  { id: "I9", title: "Une fantaisie du docteur Ox · IX. Quelques mots", question: "", levels: [1, 1], start: "I9_1" },
  { id: "I10", title: "Une fantaisie du docteur Ox · X. L'épidémie", question: "", levels: [1, 1], start: "I10_1" },
  { id: "I11", title: "Une fantaisie du docteur Ox · XI. Une résolution héroïque", question: "", levels: [1, 1], start: "I11_1" },
  { id: "I12", title: "Une fantaisie du docteur Ox · XII. Un avis raisonnable", question: "", levels: [1, 1], start: "I12_1" },
  { id: "I13", title: "Une fantaisie du docteur Ox · XIII. La tour du beffroi", question: "", levels: [1, 1], start: "I13_1" },
  { id: "I14", title: "Une fantaisie du docteur Ox · XIV. Un dénoûment immédiat", question: "", levels: [1, 1], start: "I14_1" },
  { id: "I15", title: "Une fantaisie du docteur Ox · XV. Le dénoûment", question: "", levels: [1, 1], start: "I15_1" },
  { id: "I16", title: "Une fantaisie du docteur Ox · XVI. Le lecteur intelligent", question: "", levels: [1, 1], start: "I16_1" },
  { id: "I17", title: "Une fantaisie du docteur Ox · XVII. La théorie du docteur Ox", question: "", levels: [1, 1], start: "I17_1" },
  { id: "II1", title: "Maître Zacharius · I. Une nuit d'hiver", question: "", levels: [1, 1], start: "II1_1" },
  { id: "II2", title: "Maître Zacharius · II. L'orgueil de la science", question: "", levels: [1, 1], start: "II2_1" },
  { id: "II3", title: "Maître Zacharius · III. Une visite étrange", question: "", levels: [1, 1], start: "II3_1" },
  { id: "II4", title: "Maître Zacharius · IV. L'église de Saint-Pierre", question: "", levels: [1, 1], start: "II4_1" },
  { id: "II5", title: "Maître Zacharius · V. L'heure de la mort", question: "", levels: [1, 1], start: "II5_1" },
  { id: "III1", title: "Un drame dans les airs", question: "", levels: [1, 1], start: "III1_1" },
  { id: "IV1", title: "Un hivernage dans les glaces · I. Le pavillon noir", question: "", levels: [1, 1], start: "IV1_1" },
  { id: "IV2", title: "Un hivernage dans les glaces · II. Le projet de Jean Cornbutte", question: "", levels: [1, 1], start: "IV2_1" },
  { id: "IV3", title: "Un hivernage dans les glaces · III. Lueur d'espoir", question: "", levels: [1, 1], start: "IV3_1" },
  { id: "IV4", title: "Un hivernage dans les glaces · IV. Dans les passes", question: "", levels: [1, 1], start: "IV4_1" },
  { id: "IV5", title: "Un hivernage dans les glaces · V. L'île Liverpool", question: "", levels: [1, 1], start: "IV5_1" },
  { id: "IV6", title: "Un hivernage dans les glaces · VI. Le tremblement de glaces", question: "", levels: [1, 1], start: "IV6_1" },
  { id: "IV7", title: "Un hivernage dans les glaces · VII. Les installations de l'hivernage", question: "", levels: [1, 1], start: "IV7_1" },
  { id: "IV8", title: "Un hivernage dans les glaces · VIII. Plan d'explorations", question: "", levels: [1, 1], start: "IV8_1" },
  { id: "IV9", title: "Un hivernage dans les glaces · IX. La maison de neige", question: "", levels: [1, 1], start: "IV9_1" },
  { id: "IV10", title: "Un hivernage dans les glaces · X. Enterrés vivants", question: "", levels: [1, 1], start: "IV10_1" },
  { id: "IV11", title: "Un hivernage dans les glaces · XI. Un nuage de fumée", question: "", levels: [1, 1], start: "IV11_1" },
  { id: "IV12", title: "Un hivernage dans les glaces · XII. Retour au navire", question: "", levels: [1, 1], start: "IV12_1" },
  { id: "IV13", title: "Un hivernage dans les glaces · XIII. Les deux rivaux", question: "", levels: [1, 1], start: "IV13_1" },
  { id: "IV14", title: "Un hivernage dans les glaces · XIV. Détresse", question: "", levels: [1, 1], start: "IV14_1" },
  { id: "IV15", title: "Un hivernage dans les glaces · XV. Les ours blancs", question: "", levels: [1, 1], start: "IV15_1" },
  { id: "IV16", title: "Un hivernage dans les glaces · XVI. Conclusion", question: "", levels: [1, 1], start: "IV16_1" },
  { id: "V1", title: "Quarantième ascension française au mont Blanc, par Paul Verne", question: "", levels: [1, 1], start: "V1_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
