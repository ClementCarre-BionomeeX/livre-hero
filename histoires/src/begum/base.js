// « Les Cinq Cents Millions de la Bégum », Jules Verne, 1879 : un livre à lire, sans choix (lecture: true). Texte de
// Verne, domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les deux notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "begum",
  title: "Les Cinq Cents Millions de la Bégum",
  subtitle: "Un roman à lire · Jules Verne, 1879",
  summary: "Brighton, octobre 1871. Un matin, le bon docteur Sarrasin, venu à un congrès d'hygiène, reçoit la visite d'un homme de loi londonien : il hérite d'une bégum des Indes plus d'un demi-milliard de francs. Il sait déjà quoi en faire. Mais un autre héritier se présente, un professeur allemand qui a, lui aussi, ses idées. Le roman en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "guerre"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "ecu",
    "color": "#3a3f47"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1879",
    "text": [
      "Le roman a paru en feuilleton en 1879, puis chez Hetzel la même année. Il est né d'un manuscrit d'André Laurie, que Verne a repris et réécrit. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens.",
      "Le livre est écrit huit ans après la guerre de 1870, que la France a perdue avec l'Alsace et la Lorraine. Il oppose une ville française idéale à une cité allemande de l'acier, et l'Allemand Schultze y est une caricature. Ses théories sur la supériorité d'une race sur une autre sont celles du méchant de l'histoire, que Verne fait parler pour les rendre odieuses.",
      "Le regard reste celui d'un Français de 1879 : on y lit quelques mots et quelques images d'époque sur les peuples d'ailleurs, comme « Nègre » ou « coolies »."
    ],
    "reminder": "Dans ce chapitre, le professeur Schultze expose ses idées sur les races. C'est le méchant qui parle, et Verne le fait parler pour le rendre odieux."
  },
  intro: [],
  world: { noFood: true, start: { place: "brighton", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
