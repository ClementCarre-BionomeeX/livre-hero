// « L'Île mystérieuse », Jules Verne, 1874-1875 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes de l'auteur sont remises entre
// parenthèses à leur appel. Verne ne titre pas ses chapitres, seulement ses trois parties ; les titres des pages, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  ballon: { ambiance: "mer", name: "Le ballon dans l'ouragan", map: "ile", x: 80, y: 8, region: "Au-dessus du Pacifique", desc: "Une nacelle sous un ballon à demi dégonflé, la mer en furie à quelques centaines de pieds, et rien à jeter.", arrive: "I1_1" },
  cote: { ambiance: "eau", name: "La côte des naufragés", map: "ile", x: 70, y: 50, region: "L'île Lincoln", desc: "Un îlot de sable, un canal, puis une haute muraille de granit qui borde la côte est.", arrive: "I2_1" },
  cheminees: { ambiance: "souterrain", name: "Les Cheminées", map: "ile", x: 66, y: 52, region: "L'île Lincoln", desc: "Un entassement de rochers au pied de la falaise, des couloirs où le vent s'engouffre, et un premier feu.", arrive: "I4_4" },
  foret: { ambiance: "foret", name: "Les bois du Jacamar", map: "ile", x: 56, y: 44, region: "L'île Lincoln", desc: "Une forêt épaisse de pins, de chênes verts et d'arbres inconnus, des tétras, des couroucous, des kangourous.", arrive: "I6_3" },
  franklin: { ambiance: "montagne", name: "Le mont Franklin", map: "ile", x: 44, y: 30, region: "L'île Lincoln", desc: "Un volcan éteint à deux cônes, ses pentes de forêt puis de lave, et du cratère, l'Océan à perte de vue.", arrive: "I10_2" },
  granite: { ambiance: "village", name: "Granite-house", map: "ile", x: 64, y: 46, region: "L'île Lincoln", desc: "Une grande caverne dans la falaise de granit, des fenêtres sur la mer, des chambres, un magasin, et une échelle qu'on remonte le soir.", arrive: "I18_2" },
  plateau: { ambiance: "champs", name: "Le plateau de Grande-Vue", map: "ile", x: 60, y: 42, region: "L'île Lincoln", desc: "Le plateau au-dessus de Granite-house, entre le lac Grant et la mer, ses champs, sa basse-cour et son moulin.", arrive: "I16_2" },
  ouest: { ambiance: "foret", name: "L'ouest de l'île", map: "ile", x: 26, y: 46, region: "L'île Lincoln", desc: "La forêt des eucalyptus, la rivière de la Chute, des dunes, des marais, et la caverne d'un jaguar.", arrive: "II3_1" },
  corral: { ambiance: "champs", name: "Le corral", map: "ile", x: 46, y: 40, region: "L'île Lincoln", desc: "Une enceinte de palissades au pied du mont Franklin, une maison de bois, des mouflons, des chèvres et des onaggas.", arrive: "II9_5" },
  bonadventure: { ambiance: "mer", name: "Le Bonadventure", map: "pacifique", x: 50, y: 50, region: "En mer", desc: "Un petit bateau ponté construit sur l'île, gréé en cotre, qui tient la mer mieux qu'on ne l'espérait.", arrive: "II12_5" },
  tabor: { ambiance: "foret", name: "L'île Tabor", map: "pacifique", x: 20, y: 40, region: "Le Pacifique", desc: "Une île basse et déserte à cent cinquante milles, une cabane abandonnée, et quelque chose qui vit dans les bois.", arrive: "II13_4" },
  speedy: { ambiance: "combat", name: "La baie de l'Union", map: "ile", x: 70, y: 30, region: "L'île Lincoln", desc: "La baie au nord de Granite-house, un brick noir à l'ancre, et les colons embusqués dans les rochers.", arrive: "III2_1" },
  serpentine: { ambiance: "foret", name: "La presqu'île Serpentine", map: "ile", x: 20, y: 70, region: "L'île Lincoln", desc: "La longue presqu'île du sud-ouest, ses forêts, ses côtes désertes et ses cavernes.", arrive: "III12_1" },
  crypte: { ambiance: "souterrain", name: "La crypte Dakkar", map: "ile", x: 30, y: 22, region: "L'île Lincoln", desc: "Une caverne immense sous la montagne, ouverte sur la mer, et dans la caverne, un long fuseau de métal qui brille.", arrive: "III15_5" },
  eruption: { ambiance: "montagne", name: "Le volcan réveillé", map: "ile", x: 44, y: 30, region: "L'île Lincoln", desc: "La lave coule sur les forêts, les cendres tombent sur le plateau, et la terre gronde.", arrive: "III19_1" },
  roc: { ambiance: "mer", name: "Le rocher", map: "pacifique", x: 60, y: 60, region: "Le Pacifique", desc: "Un roc isolé de trente pieds de long au milieu de l'Océan, et rien d'autre.", arrive: "III20_1" },
};
