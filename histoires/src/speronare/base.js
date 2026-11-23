// « Le Speronare », d'Alexandre Dumas (1842) : un livre à lire, sans choix (lecture: true). Domaine public, d'après
// l'édition numérique du projet Gutenberg ; les notes de Dumas sont gardées, un mot retouché (voir la notice). Les titres
// des chapitres sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "speronare",
  title: "Le Speronare",
  subtitle: "Un livre à lire · récit de voyage · Alexandre Dumas, 1842",
  summary: "Août 1835. Refoulé de Naples comme républicain, Alexandre Dumas y entre sous un faux nom et loue, avec le peintre Jadin et son bouledogue, un petit bâtiment sicilien et son équipage. Le voilà parti pour le tour de la Sicile : tempêtes, volcans, temples grecs, brigands, et les histoires que racontent le capitaine et ses matelots.",
  tags: [
    "voyage",
    "mer",
    "historique"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2f5d74"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un voyage de 1835",
    "reminder": "Ce chapitre a des passages violents ou tristes.",
    "text": [
      "En 1835, Alexandre Dumas parcourt l'Italie avec le peintre Godefroy Jadin. À l'été, il loue un speronare à Naples et fait le tour de la Sicile. Il en tire trois livres : *Le Speronare*, publié en 1842, puis *Le Capitaine Arena* et *Le Corricolo*. Il y mêle ce qu'il voit, ce que lui racontent le capitaine, les matelots et les guides, l'histoire de la Sicile et ses légendes. Les dialogues sont arrangés, et le conteur cède volontiers à une bonne histoire.",
      "Le texte est celui de Dumas, d'après l'édition numérique du projet Gutenberg ; ses notes sont gardées, entre parenthèses, et deux fautes de lecture de cette édition sont corrigées. Une retouche : dans le récit de Gelsomina, un entremetteur se déguise « en juif » pour approcher la jeune fille, et le texte l'appelle ensuite « le juif » ; il est ici un colporteur.",
      "Le livre raconte des crimes, des coups de couteau, des duels, des exécutions, des batailles et des massacres de l'histoire de la Sicile. Un des récits parle d'un entremetteur qui cherche des jeunes filles pour un grand seigneur, et l'on visite un caveau où les morts sont séchés et rangés le long des murs."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "rome", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "I_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
