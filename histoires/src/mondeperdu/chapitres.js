// The sixteen chapters (the acts of the engine). recap: a short summary written by Claude, shown only by
// « Où en étais-je ? » once the chapter is finished, never ahead. notice: the chapter has period racist words or ideas,
// the reminder of the notice opens it (Clément, 15/11).
var T = [
  "« Il y a de l'héroïsme tout autour de nous »",
  "« Tentez votre chance avec le professeur Challenger »",
  "« C'est un personnage parfaitement impossible »",
  "« C'est tout simplement la plus grande chose au monde »",
  "« Question ! »",
  "« J'étais le fléau du Seigneur »",
  "« Demain, nous disparaissons dans l'inconnu »",
  "« Les avant-postes du monde nouveau »",
  "« Qui aurait pu le prévoir ? »",
  "« Les choses les plus merveilleuses sont arrivées »",
  "« Pour une fois, je fus le héros »",
  "« C'était effroyable, dans la forêt »",
  "« Un spectacle que je n'oublierai jamais »",
  "« Ce furent là les vraies conquêtes »",
  "« Nos yeux ont vu de grandes merveilles »",
  "« Une procession ! Une procession ! »",
];
var R = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI"];
var RECAP = require("./resumes.js");
module.exports = T.map(function (t, i) {
  var id = R[i];
  return { id: id, title: "Chapitre " + id + " · " + t, question: "", levels: [1, 1], start: id + "_1", recap: RECAP[id] ? RECAP[id].text : "", notice: !!(RECAP[id] && RECAP[id].notice) };
});
