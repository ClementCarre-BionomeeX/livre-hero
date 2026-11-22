// « Voyages et aventures du capitaine Hatteras », Jules Verne, 1866 : un livre à lire, sans choix (lecture: true). Texte
// de Verne, domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre
// parenthèses à leur appel. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "hatteras",
  title: "Voyages et aventures du capitaine Hatteras",
  subtitle: "Un roman à lire · Jules Verne, 1866",
  summary: "Liverpool, avril 1860. Le *Forward*, un brick à hélice bâti pour les glaces, appareille avec des vivres pour six ans, une paye cinq fois plus forte que l'ordinaire, et pas de capitaine : les ordres arrivent par lettres signées de deux initiales. À bord, un second qui ne sait pas où il va, un vieux maître d'équipage, un docteur qui veut tout voir, et un grand chien danois que les matelots regardent de travers. Le roman en entier, en deux parties, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "flocon",
    "color": "#2b4a5e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1866",
    "reminder": "Ce chapitre décrit les Esquimaux du Groënland avec le regard et les mots de 1866.",
    "text": [
      "Le roman a paru en feuilleton de 1864 à 1865, puis chez Hetzel en 1866, en deux parties : « Les Anglais au pôle Nord » et « Le désert de glace ». Le texte est celui de Verne, sans retouche. Les températures sont en degrés Fahrenheit, avec leur équivalent en degrés centigrades entre parenthèses ; les distances sont en milles, en pieds et en toises.",
      "Les explorateurs que citent les personnages ont existé, et leurs voyages ont eu lieu : Parry, les Ross, Kane, Mac Clure, le lieutenant français Bellot, et Franklin, disparu en 1845 avec *l'Erebus* et *le Terror*, dont on n'a retrouvé les épaves qu'en 2014 et 2016. Hatteras et son équipage sont inventés, comme les terres qu'ils découvrent. On sait aujourd'hui qu'il n'y a ni terre ni mer libre au pôle Nord : un océan profond, couvert de glaces qui dérivent. Personne n'y est allé à pied avant 1968.",
      "Le regard est celui d'un Européen de 1866 : Verne décrit les Esquimaux avec dégoût, et nomme le cuisinier du bord par sa couleur de peau. Son capitaine, lui, est un patriote anglais jusqu'à l'aveuglement, et le livre ne lui donne pas toujours raison."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "liverpool", hour: 11, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "I1_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
