// « Le Mystère de la chambre jaune », Gaston Leroux, 1907 : un livre à lire, sans choix (lecture: true). Texte de Leroux
// (1868-1927, domaine public), d'après l'édition du projet Gutenberg ; les deux plans de Rouletabille ne sont pas
// reproduits, leurs légendes le sont. Les titres des chapitres sont de Leroux ; ceux des pages, comme tout ce qui vit dans
// les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "jaune",
  title: "Le Mystère de la chambre jaune",
  subtitle: "Un roman à lire · Gaston Leroux, 1907",
  summary: "Octobre 1892, au château du Glandier, à la lisière de la forêt de Sainte-Geneviève. Une nuit, dans le pavillon où le professeur Stangerson travaille, sa fille Mathilde crie à l'assassin derrière la porte de sa chambre. On enfonce la porte, fermée à clef et au verrou de l'intérieur ; la fenêtre est grillée ; Mathilde gît, le crâne ouvert, et la chambre est vide. Joseph Rouletabille, petit reporter de dix-huit ans, entraîne son ami l'avocat Sainclair sur les lieux, et défie le plus grand policier de France.",
  tags: [
    "enquete",
    "aventure"
  ],
  author: "Gaston Leroux",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#8a6a14"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1907",
    "text": [
      "Gaston Leroux, journaliste et chroniqueur judiciaire, a publié « Le Mystère de la chambre jaune » en feuilleton en 1907, puis en volume en 1908. C'est l'une des premières énigmes de « chambre close » : un crime dans une pièce fermée de l'intérieur, d'où personne n'a pu sortir.",
      "Le récit est fait par Sainclair, un jeune avocat, l'ami de Rouletabille ; il cite des articles de journaux, des procès-verbaux d'interrogatoire et des pages du carnet du reporter. Leroux donne au lecteur, chemin faisant, tous les indices dont Rouletabille se sert.",
      "Le livre raconte deux tentatives de meurtre et un homme tué d'un coup de couteau. Deux plans dessinés par Rouletabille accompagnaient le texte ; ils ne sont pas reproduits ici, mais leurs légendes le sont."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "pavillon", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
