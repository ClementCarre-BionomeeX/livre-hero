// « Le Pilote du Danube », Jules Verne, 1908 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1908, dans le domaine public (Project Gutenberg n° 11484). La seule saisie disponible
// avait perdu ses accents : ils ont été rétablis et relus (fiches/pilote_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre 1 · Au concours de Sigmaringen", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre 2 · Aux sources du Danube", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre 3 · Le passager d'Ilia Brusch", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre 4 · Serge Ladko", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre 5 · Karl Dragoch", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre 6 · Les yeux bleus", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre 7 · Chasseurs et gibiers", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre 8 · Un portrait de femme", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre 9 · Les deux échecs de Dragoch", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre 10 · Prisonnier", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre 11 · Au pouvoir d'un ennemi", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre 12 · Au nom de la loi", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre 13 · Une commission rogatoire", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre 14 · Entre ciel et terre", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre 15 · Près du but", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre 16 · La maison vide", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre 17 · À la nage", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre 18 · Le pilote du Danube", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre 19 · Épilogue", question: "", levels: [1, 1], start: "XIX_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
