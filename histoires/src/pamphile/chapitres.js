// « Le Capitaine Pamphile », Alexandre Dumas, 1840 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les chapitres (les actes du moteur). recap : résumé montré par « Où en étais-je ? » seulement une fois le chapitre fini.
var RECAP = require("./resumes.js");
module.exports = [
  { id: "I", title: "Chapitre I · Introduction à l'aide de laquelle le lecteur fera connaissance avec les principaux personnages de cette histoire et l'auteur qui l'a écrite", question: "", levels: [1, 1], start: "I_1" },
  { id: "II", title: "Chapitre II · Comment Jacques Ier voua une haine féroce à Tom, et cela à propos d'une carotte", question: "", levels: [1, 1], start: "II_1" },
  { id: "III", title: "Chapitre III · Comment mademoiselle Camargo tomba en la possession de M. Decamps", question: "", levels: [1, 1], start: "III_1" },
  { id: "IV", title: "Chapitre IV · Comment le capitaine Pamphile, commandant le brick de commerce la Roxelane fit, sur le bord de la rivière Bango, une meilleure chasse que n'avait fait Alexandre Decamps, dans la plaine Saint-Denis", question: "", levels: [1, 1], start: "IV_1" },
  { id: "V", title: "Chapitre V · Comment Jacques Ier fut arraché des bras de sa mère expirante et porté à bord du brick de commerce la Roxelane (capitaine Pamphile)", question: "", levels: [1, 1], start: "V_1" },
  { id: "VI", title: "Chapitre VI · Comment Jacques Ier commença par plumer des poules et finit par plumer un perroquet", question: "", levels: [1, 1], start: "VI_1" },
  { id: "VII", title: "Chapitre VII · Comment Tom embrassa la fille de la portière, qui montait de la crème, et quelle décision fut prise à propos de cet événement", question: "", levels: [1, 1], start: "VII_1" },
  { id: "VIII", title: "Chapitre VIII · Comment Tom démit le poignet d'un garde municipal, et d'où venait la frayeur que lui inspirait cette respectable milice", question: "", levels: [1, 1], start: "VIII_1" },
  { id: "IX", title: "Chapitre IX · Comment le capitaine Pamphile apaisa une sédition à bord du brick la Roxelane, et de ce qui s'ensuivit", question: "", levels: [1, 1], start: "IX_1" },
  { id: "X", title: "Chapitre X · Comment le capitaine Pamphile, croyant aborder sur une île, aborda sur une baleine, et devint le serviteur du Serpent-Noir", question: "", levels: [1, 1], start: "X_1" },
  { id: "XI", title: "Chapitre XI · Comment le capitaine Pamphile remonta le fleuve Saint-Laurent pendant cinq journées, et échappa au Serpent-Noir vers la fin de la sixième", question: "", levels: [1, 1], start: "XI_1" },
  { id: "XII", title: "Chapitre XII · Comment le capitaine Pamphile passa deux nuits fort agitées, l'une sur un arbre, l'autre dans une hutte", question: "", levels: [1, 1], start: "XII_1" },
  { id: "XIII", title: "Chapitre XIII · Comment le capitaine Pamphile fit la rencontre de la mère de Tom sur les bords de la rivière Delawarre, et de ce qui s'ensuivit", question: "", levels: [1, 1], start: "XIII_1" },
  { id: "XIV", title: "Chapitre XIV · Comment Jacques Ier, n'ayant pu digérer l'épingle du papillon, fut atteint d'une perforation de la péritonite", question: "", levels: [1, 1], start: "XIV_1" },
  { id: "XV", title: "Chapitre XV · Comment Tony Johannot, n'ayant pas assez de bois pour passer son hiver, se procura une chatte, et comment, cette chatte étant morte, Jacques II eut la queue gelée", question: "", levels: [1, 1], start: "XV_1" },
  { id: "XVI", title: "Chapitre XVI · Comment le capitaine Pamphile proposa un prix de deux mille francs et la croix de la Légion d'honneur, afin de savoir si le nom de Jeanne d'Arc s'écrivait par un Q ou par un K", question: "", levels: [1, 1], start: "XVI_1" },
  { id: "XVII", title: "Chapitre XVII · Comment le capitaine Pamphile, ayant abordé sur la côte d'Afrique, au lieu d'un chargement d'ivoire qu'il venait y chercher, fut forcé de prendre une partie de bois d'ébène", question: "", levels: [1, 1], start: "XVII_1" },
  { id: "XVIII", title: "Chapitre XVIII · Comment le capitaine Pamphile, s'étant défait avantageusement de sa cargaison de bois d'ébène à la Martinique, et de son alcool aux grandes Antilles, retrouva son ancien ami le Serpent-Noir cacique des Mosquitos, et acheta son caciquat pour une demi-pipe d'eau-de-vie", question: "", levels: [1, 1], start: "XVIII_1" },
  { id: "XIX", title: "Chapitre XIX · Comment le cacique des Mosquitos donna une constitution à son peuple, pour se faciliter un emprunt de douze millions", question: "", levels: [1, 1], start: "XIX_1" },
  { id: "CONCL", title: "Conclusion", question: "", levels: [1, 1], start: "CONCL_1" },
  { id: "PJ", title: "Pièces justificatives", question: "", levels: [1, 1], start: "PJ_1" },
].map(function (a) { var r = RECAP[a.id] || {}; a.recap = r.text || ""; a.notice = !!r.notice; return a; });
