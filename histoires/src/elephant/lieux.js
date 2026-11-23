// « La Tour de l'éléphant » (The Tower of the Elephant), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mars 1933 (Project Gutenberg of Australia, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  maul: { ambiance: "ville", name: "Le Maul", map: "zamora", x: 35, y: 60, region: "Le quartier des voleurs, dans une cité de Zamora", desc: "Des rues tortueuses et sans pavés, des tas d'ordures, des bouges où l'on boit et où l'on se bat à la lueur des torches.", arrive: "C1_1" },
  temples: { ambiance: "temple", name: "Le quartier des temples", map: "zamora", x: 55, y: 45, region: "Zamora", desc: "Des piliers de marbre, des dômes d'or et des arches d'argent, les sanctuaires des innombrables dieux de Zamora.", arrive: "C2_1" },
  jardin: { ambiance: "nuit", name: "Le jardin de la tour", map: "zamora", x: 65, y: 35, region: "Au pied de la tour de l'Éléphant", desc: "Deux enceintes de hauts murs, un gazon uni, une fontaine, des buissons plumeux et des arbres exotiques qui ondoient sous les étoiles.", arrive: "C2_2" },
  sommet: { ambiance: "nuit", name: "Le sommet de la tour", map: "zamora", x: 66, y: 30, region: "À cent cinquante pieds au-dessus du jardin", desc: "Un toit plat d'un bleu sombre pailleté d'or, cerné d'un rebord incrusté de joyaux, avec une petite salle d'argent à la porte d'or.", arrive: "C2_6" },
  salle: { ambiance: "chateau", name: "La salle aux joyaux", map: "zamora", x: 67, y: 31, region: "Le haut de la tour", desc: "Une salle de cristal que ses grands joyaux blancs éclairent seuls, avec des divans de soie et des coffres d'acajou ouverts sur des monceaux de pierreries.", arrive: "C2_7" },
  ivoire: { ambiance: "temple", name: "La chambre d'ivoire", map: "zamora", x: 67, y: 32, region: "Dans la tour, au bas de l'escalier d'argent", desc: "Une coupole dorée, des murs de jade vert, un sol d'ivoire, un brasero d'encens sur un trépied d'or et un lit de marbre.", arrive: "C3_1" },
  ebene: { ambiance: "nuit", name: "La chambre d'ébène", map: "zamora", x: 67, y: 33, region: "Dans la tour, plus bas", desc: "Une chambre d'ébène et de jais, un divan de soie noire, et derrière la porte un crâne d'argent qui grimace.", arrive: "C3_4" },
};
