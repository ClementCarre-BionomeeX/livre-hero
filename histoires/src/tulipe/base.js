// « La Tulipe noire », Alexandre Dumas, 1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas, domaine
// public, numérisé par le projet Gutenberg. Les titres des chapitres sont de Dumas ; ceux des pages, comme tout ce qui
// vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "tulipe",
  title: "La Tulipe noire",
  subtitle: "Un roman à lire · Alexandre Dumas, 1850",
  summary: "Hollande, 1672. La ville de Harlem promet cent mille florins à qui fera naître une tulipe noire. Cornélius van Baërle, jeune savant de Dordrecht qui ne vit que pour ses fleurs, est sur le point d'y parvenir, quand la politique, et la jalousie d'un voisin, le jettent en prison. Il ne lui reste que trois caïeux, et la fille de son geôlier, Rosa.",
  tags: [
    "historique",
    "aventure"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "fleur",
    "color": "#2a2233"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1850",
    "reminder": "Ce chapitre montre une foule qui massacre deux hommes, avec le regard et les mots de 1850.",
    "text": [
      "*La Tulipe noire* a paru en 1850. Le texte est celui de l'édition complète numérisée par le projet Gutenberg, sans retouche ; la seule note de Dumas est restée à sa place, entre parenthèses.",
      "Le roman part d'un fait réel : le 20 août 1672, à la Haye, la foule a massacré les frères Jean et Corneille de Witt, qui avaient gouverné la république des Provinces-Unies. Dumas le raconte sans rien cacher, et l'on y voit les corps mis en pièces.",
      "La suite est une histoire d'amour et de fleurs : la « tulipomanie », la folie des tulipes, avait vraiment saisi la Hollande au XVIIe siècle, et des bulbes s'y vendaient le prix d'une maison."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "lahaye", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
