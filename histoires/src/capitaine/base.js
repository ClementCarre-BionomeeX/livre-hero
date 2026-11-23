// « Le Capitaine Aréna », d'Alexandre Dumas (1842) : un livre à lire, sans choix (lecture: true). Domaine public, d'après
// l'édition numérique du projet Gutenberg ; les notes de Dumas sont gardées, deux passages retouchés (voir la notice). Les titres
// des chapitres sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "capitaine",
  title: "Le Capitaine Aréna",
  subtitle: "Un livre à lire · récit de voyage · Alexandre Dumas, 1842",
  summary: "Automne 1835. Après le tour de la Sicile, Dumas et le peintre Jadin repartent sur leur speronare : une maison de fous à Palerme, les volcans des îles Éoliennes, les histoires de sorcières et de bandits que racontent les matelots, puis la Calabre à dos de mulet, sur les pas du roi Murat, dans un pays qui tremble.",
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
    "color": "#5d4a2f"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un voyage de 1835",
    "reminder": "Ce chapitre a des passages violents ou tristes.",
    "text": [
      "En 1835, Alexandre Dumas parcourt l'Italie avec le peintre Godefroy Jadin. Il loue à Naples un speronare, petit bâtiment sicilien, et fait le tour de la Sicile avec le capitaine Aréna et son équipage. *Le Capitaine Aréna*, publié en 1842, fait suite au *Speronare* : les îles Éoliennes, puis la Calabre, que Dumas traverse à l'automne, au moment où un tremblement de terre secoue le pays. Il y mêle ce qu'il voit, ce que lui racontent les matelots, les guides et les témoins, et l'histoire du royaume de Naples. Les dialogues sont arrangés, et le conteur cède volontiers à une bonne histoire.",
      "Le texte est celui de Dumas, d'après l'édition numérique du projet Gutenberg ; ses notes sont gardées, entre parenthèses. Deux retouches : là où Dumas écrit que les créanciers des seigneurs siciliens étaient « presque tous des juifs et des usuriers », on lit ici « presque tous des usuriers » ; et à Pestum, une phrase qui refuse aux pauvres métayers des temples d'appartenir à l'espèce humaine est coupée.",
      "Le livre raconte des meurtres, des coups de couteau, une exécution, une noyade, la torture d'un innocent, la vie d'un bandit et les morts du grand tremblement de terre de 1783. La maison des fous du premier chapitre montre des malades tels qu'on les voyait en 1835."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "palerme", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
