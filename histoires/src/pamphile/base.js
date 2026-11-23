// « Le Capitaine Pamphile », Alexandre Dumas, 1840 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "pamphile",
  title: "Le Capitaine Pamphile",
  subtitle: "Un roman à lire · Alexandre Dumas, 1840",
  summary: "Paris, 1831. Dans l'atelier d'un peintre vivent un ours, un singe et une grenouille ; un soir, entre deux pipes, un ami lit à la compagnie le récit des voyages du capitaine Pamphile, de Marseille, qui ne paie jamais ce qu'il peut prendre. De l'Afrique au Canada et de Philadelphie à Londres, une farce féroce sur le commerce, les hommes et les bêtes.",
  tags: [
    "aventure",
    "humour",
    "voyage"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2c4a3b"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1840, et une satire",
    "reminder": "Ce chapitre montre des violences, racontées avec l'ironie et les mots de 1840.",
    "text": [
      "*Le Capitaine Pamphile* a paru en 1840. Le texte est celui de Dumas, sans retouche, d'après l'édition numérisée par le projet Gutenberg ; la notice de l'éditeur numérique qui ouvrait le volume n'est pas reprise. Les titres des chapitres sont ceux de Dumas : ils annoncent souvent, pour rire, ce qui arrivera un peu plus tard.",
      "Le narrateur est Dumas lui-même, et ses amis sont des artistes de son temps : les peintres Decamps, Jadin et Flers, l'illustrateur Tony Johannot, l'écrivain Alphonse Karr.",
      "Le livre est une farce, mais une farce noire. Pamphile tue les bêtes pour le plaisir ou le profit, fait pendre un matelot, pille les navires, et finit négrier : il achète des prisonniers de guerre en Afrique et les vend aux Antilles. Dumas raconte tout cela sur le ton de l'éloge, et c'est ce ton faussement admiratif qui accuse.",
      "Le texte emploie les mots et les images de 1840 pour les Africains, les Amérindiens et les Chinois, y compris des mots aujourd'hui injurieux. Ils sont laissés tels quels."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "paris", hour: 11, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
