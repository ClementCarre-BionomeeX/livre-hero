// « Le Peuple du Cercle noir » (The People of the Black Circle), Robert E. Howard, 1934 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru
// dans Weird Tales de septembre à novembre 1934 (Project Gutenberg n° 42259, domaine public). Les titres des chapitres
// sont ceux de Howard ; ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  ayodhya: { ambiance: "chateau", name: "Le palais d'Ayodhya", map: "himeliens", x: 82, y: 88, region: "Vendhya", desc: "La capitale de Vendhya, ses temples et ses gongs, et la chambre au dôme d'or où se meurt le roi.", arrive: "C1_1" },
  fort: { ambiance: "chateau", name: "Le fort de Peshkhauri", map: "himeliens", x: 48, y: 62, region: "La frontière", desc: "La forteresse du gouverneur, ses bastions, ses cours et sa prison, aux portes des collines.", arrive: "C2_1" },
  peshkhauri: { ambiance: "ville", name: "La ville de Peshkhauri", map: "himeliens", x: 50, y: 64, region: "La frontière", desc: "Une ville frontière aux toits plats, à un mille du fort, où les caravanes arrivent par le col.", arrive: "C3_1" },
  zhaibar: { ambiance: "nuit", name: "Le col du Zhaibar", map: "himeliens", x: 40, y: 52, region: "Les Himéliens", desc: "La grande route des caravanes à travers les montagnes, ses gorges noires et ses embuscades.", arrive: "C4_1" },
  khurum: { ambiance: "village", name: "Le village de Khurum", map: "himeliens", x: 32, y: 44, region: "Le pays wazuli", desc: "Des huttes de pierre et de boue au fond d'une vallée, et la maison-forteresse du chef, à la porte de bronze.", arrive: "C5_1" },
  pistes: { ambiance: "montagne", name: "Les pistes des Himéliens", map: "himeliens", x: 26, y: 36, region: "Les Himéliens", desc: "Des sentiers à peine tracés, des ravins sans fond, des arêtes coupantes et un vent qui descend des glaces.", arrive: "C6_1" },
  corniche: { ambiance: "montagne", name: "La corniche", map: "himeliens", x: 22, y: 30, region: "Les Himéliens", desc: "Une large corniche entre des pentes accidentées et un précipice gigantesque.", arrive: "C6_4" },
  crete: { ambiance: "route", name: "La longue crête", map: "himeliens", x: 24, y: 32, region: "Les Himéliens", desc: "Une crête étroite comme une chaussée au-dessus d'un lit de rivière à sec, et des sentiers taillés dans les failles.", arrive: "C7_1" },
  salle: { ambiance: "nuit", name: "La salle aux dragons", map: "himeliens", x: 17, y: 21, region: "Le Yimsha", desc: "Une grande salle obscure, sans portes visibles, tendue de tapisseries où rampent des dragons.", arrive: "C8_1" },
  pente: { ambiance: "montagne", name: "Les pentes du Yimsha", map: "himeliens", x: 18, y: 26, region: "Le Yimsha", desc: "Une pente nue semée de rochers, et tout en haut, une tour de pierre.", arrive: "C9_1" },
  gouffre: { ambiance: "souterrain", name: "Le gouffre de brume", map: "himeliens", x: 17, y: 23, region: "Le Yimsha", desc: "Un ravin à pic qui fait le tour de la montagne, empli d'une brume rose, au fond brillant comme l'argent.", arrive: "C9_3" },
  chateau: { ambiance: "temple", name: "Le château des Voyants noirs", map: "himeliens", x: 16, y: 20, region: "Le Yimsha", desc: "Un édifice en pyramide taillé dans la montagne, ses galeries de jade vert et ses escaliers.", arrive: "C9_5" },
  arete: { ambiance: "route", name: "L'arête entre deux vallées", map: "himeliens", x: 21, y: 27, region: "Les Himéliens", desc: "Une haute arête d'où l'on plonge à droite et à gauche sur deux vallées profondes.", arrive: "C10_2" },
  gorge: { ambiance: "combat", name: "La gorge sans issue", map: "himeliens", x: 23, y: 28, region: "Les Himéliens", desc: "Un étroit défilé qui finit en cuvette fermée de murailles infranchissables.", arrive: "C10_5" },
};
