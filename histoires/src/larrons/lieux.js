// « Larrons dans la maison » (Rogues in the House), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en janvier 1934 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  cour: { ambiance: "chateau", name: "Le palais de Murilo", map: "corinthie", x: 45, y: 35, region: "Le quartier des palais de marbre et d'ivoire aux tours pourpres", desc: "Une fête à la cour, puis la chambre d'un jeune noble, où l'on ouvre en tremblant un petit coffret d'or.", arrive: "C1_1" },
  cachot: { ambiance: "souterrain", name: "Le cachot de la ville", map: "corinthie", x: 55, y: 50, region: "La prison la plus solide de la ville", desc: "Une cellule obscure, des chaînes au mur, du pain moisi et de l'eau, et un seul garde la nuit.", arrive: "C1_2" },
  dedale: { ambiance: "ville", name: "Le Dédale", map: "corinthie", x: 70, y: 65, region: "Les bas quartiers, à l'ombre du temple d'Anu", desc: "Des ruelles sans pavés pleines de boue et d'ordures, des cours fermées, des escaliers qui grincent, et des gens qui ne s'occupent que de leurs affaires.", arrive: "C2_2" },
  maison: { ambiance: "nuit", name: "La maison du Prêtre rouge", map: "corinthie", x: 35, y: 45, region: "Parmi les jardins clos de murs", desc: "Un jardin sombre où rôde un grand chien, des tentures de velours, et une salle ronde à galerie, meublée comme pour un roi.", arrive: "C1_3" },
  souterrains: { ambiance: "souterrain", name: "Les souterrains", map: "corinthie", x: 35, y: 47, region: "Sous la maison du Prêtre rouge", desc: "Des couloirs de dalles bien jointes, un tunnel vers les égouts barré d'une herse, et au mur du fond un grand disque d'argent qui luit faiblement.", arrive: "C3_1" },
  salle: { ambiance: "chateau", name: "La salle aux miroirs", map: "corinthie", x: 36, y: 44, region: "Dans la maison du Prêtre rouge", desc: "Des miroirs aux murs entre des tentures de velours, des divans de soie, des portes voilées de rideaux, et une épaisse corde de velours qui pend près d'une porte.", arrive: "C3_8" },
};
