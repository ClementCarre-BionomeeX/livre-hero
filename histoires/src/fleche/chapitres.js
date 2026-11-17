// « La Flèche noire » (The Black Arrow), R. L. Stevenson, 1888 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction de P.-G. La Chesnais (Mercure de France, 1901), transcrite par le Project Gutenberg (n° 70065,
// d'après Gallica ; domaine public). Texte gardé tel quel, sauf la typographie (« À » accentué, les vers en italique)
// et les deux notes de Stevenson, remises entre parenthèses à la fin du paragraphe qui les appelle.
// Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "P", title: "Prologue · Jean Répare-tout", question: "", levels: [1, 1], start: "P_1" },
  { id: "I1", title: "Livre I, chapitre 1 · À l'enseigne du Soleil, à Kettley", question: "", levels: [1, 1], start: "I1_1" },
  { id: "I2", title: "Livre I, chapitre 2 · Dans les marais", question: "", levels: [1, 1], start: "I2_1" },
  { id: "I3", title: "Livre I, chapitre 3 · Le bac du marais", question: "", levels: [1, 1], start: "I3_1" },
  { id: "I4", title: "Livre I, chapitre 4 · Les compagnons de la forêt", question: "", levels: [1, 1], start: "I4_1" },
  { id: "I5", title: "Livre I, chapitre 5 · Sanguinaire comme un chasseur", question: "", levels: [1, 1], start: "I5_1" },
  { id: "I6", title: "Livre I, chapitre 6 · Jusqu'à la fin du jour", question: "", levels: [1, 1], start: "I6_1" },
  { id: "I7", title: "Livre I, chapitre 7 · La face masquée", question: "", levels: [1, 1], start: "I7_1" },
  { id: "II1", title: "Livre II, chapitre 1 · Dick questionne", question: "", levels: [1, 1], start: "II1_1" },
  { id: "II2", title: "Livre II, chapitre 2 · Les deux serments", question: "", levels: [1, 1], start: "II2_1" },
  { id: "II3", title: "Livre II, chapitre 3 · La chambre au-dessus de la chapelle", question: "", levels: [1, 1], start: "II3_1" },
  { id: "II4", title: "Livre II, chapitre 4 · Le passage", question: "", levels: [1, 1], start: "II4_1" },
  { id: "II5", title: "Livre II, chapitre 5 · Dick change de parti", question: "", levels: [1, 1], start: "II5_1" },
  { id: "III1", title: "Livre III, chapitre 1 · La maison sur la plage", question: "", levels: [1, 1], start: "III1_1" },
  { id: "III2", title: "Livre III, chapitre 2 · Escarmouche dans la nuit", question: "", levels: [1, 1], start: "III2_1" },
  { id: "III3", title: "Livre III, chapitre 3 · La croix de Sainte-Bride", question: "", levels: [1, 1], start: "III3_1" },
  { id: "III4", title: "Livre III, chapitre 4 · « La Bonne Espérance »", question: "", levels: [1, 1], start: "III4_1" },
  { id: "III5", title: "Livre III, chapitre 5 · « La Bonne Espérance » (suite)", question: "", levels: [1, 1], start: "III5_1" },
  { id: "III6", title: "Livre III, chapitre 6 · « La Bonne Espérance » (fin)", question: "", levels: [1, 1], start: "III6_1" },
  { id: "IV1", title: "Livre IV, chapitre 1 · Le repaire", question: "", levels: [1, 1], start: "IV1_1" },
  { id: "IV2", title: "Livre IV, chapitre 2 · Dans la maison de mes ennemis", question: "", levels: [1, 1], start: "IV2_1" },
  { id: "IV3", title: "Livre IV, chapitre 3 · L'espion mort", question: "", levels: [1, 1], start: "IV3_1" },
  { id: "IV4", title: "Livre IV, chapitre 4 · Dans l'église de l'abbaye", question: "", levels: [1, 1], start: "IV4_1" },
  { id: "IV5", title: "Livre IV, chapitre 5 · Le comte Risingham", question: "", levels: [1, 1], start: "IV5_1" },
  { id: "IV6", title: "Livre IV, chapitre 6 · Encore Arblaster", question: "", levels: [1, 1], start: "IV6_1" },
  { id: "V1", title: "Livre V, chapitre 1 · La trompette perçante", question: "", levels: [1, 1], start: "V1_1" },
  { id: "V2", title: "Livre V, chapitre 2 · La bataille de Shoreby", question: "", levels: [1, 1], start: "V2_1" },
  { id: "V3", title: "Livre V, chapitre 3 · La bataille de Shoreby (fin)", question: "", levels: [1, 1], start: "V3_1" },
  { id: "V4", title: "Livre V, chapitre 4 · Le sac de Shoreby", question: "", levels: [1, 1], start: "V4_1" },
  { id: "V5", title: "Livre V, chapitre 5 · Nuit dans les bois : Alicia Risingham", question: "", levels: [1, 1], start: "V5_1" },
  { id: "V6", title: "Livre V, chapitre 6 · Nuit dans les bois (fin) : Dick et Joanna", question: "", levels: [1, 1], start: "V6_1" },
  { id: "V7", title: "Livre V, chapitre 7 · La vengeance de Dick", question: "", levels: [1, 1], start: "V7_1" },
  { id: "V8", title: "Livre V, chapitre 8 · Conclusion", question: "", levels: [1, 1], start: "V8_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
