// « Les Indes noires », Jules Verne, 1877 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit
// dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "indes",
  title: "Les Indes noires",
  subtitle: "Un roman à lire · Jules Verne, 1877",
  summary: "Écosse, décembre. Les houillères d'Aberfoyle sont fermées depuis dix ans, leur charbon épuisé. L'ingénieur James Starr reçoit une lettre du vieil overman Simon Ford, resté vivre au fond de la mine avec sa famille : qu'il vienne, il y a du nouveau. Le soir même, une seconde lettre, sans signature, lui dit de ne pas se déranger. Le roman en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "drame"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "plume",
    "color": "#2c2b31"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1877",
    "text": [
      "Le roman a paru en feuilleton dans *Le Temps* en 1877, puis chez Hetzel la même année. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Les quelques notes de l'auteur restent entre parenthèses.",
      "Les « Indes noires », ce sont les mines de charbon du Royaume-Uni, plus riches pour lui que ses Indes véritables. Verne décrit le travail des mineurs de son temps, le grisou, les lampes de sûreté et la vie au fond, d'après les livres et les ingénieurs de l'époque.",
      "Certaines idées de 1877 ont vieilli : la houille y semble promise à durer des siècles, et l'on y parle de creuser sous la mer sans souci de la nature."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "edimbourg", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
