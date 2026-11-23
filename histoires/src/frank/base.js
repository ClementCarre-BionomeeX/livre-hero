// « Frankenstein », Mary Shelley, 1818 : un livre à lire, sans choix (lecture: true). Traduction française de 1821 (J. S.,
// attribuée à Jules Saladin), domaine public, d'après l'édition numérique du projet Gutenberg. Les chapitres n'ont pas de titre ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "frank",
  title: "Frankenstein",
  subtitle: "Un roman à lire · Mary Shelley, 1818 · traduction de 1821",
  summary: "Dans les glaces du pôle, l'équipage d'un navire de découverte recueille un homme à bout de forces, qui poursuivait sur un traîneau une silhouette gigantesque. Il s'appelle Victor Frankenstein. Étudiant à Ingolstadt, il a voulu percer le secret de la vie, et il y est parvenu.",
  tags: [
    "fantastique",
    "drame",
    "voyage"
  ],
  author: "Mary Shelley",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "flocon",
    "color": "#2f3b44"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un roman de 1818",
    "reminder": "Ce chapitre raconte un meurtre.",
    "text": [
      "*Frankenstein ou le Prométhée moderne* a paru à Londres en 1818, sans nom d'auteur ; Mary Shelley avait vingt ans. Le texte est celui de la première traduction française, parue à Paris en 1821 sous les initiales J. S. et attribuée à Jules Saladin, d'après l'édition numérique du projet Gutenberg. Elle suit la version de 1818, plus ancienne que celle que Mary Shelley a revue en 1831 et que l'on lit le plus souvent aujourd'hui.",
      "Le roman commence par les lettres de Robert Walton à sa sœur ; Victor Frankenstein prend ensuite la parole, et la créature raconte elle-même sa vie au milieu du livre. La traduction avait laissé le mot anglais *Switzerland* pour la Suisse : il a été remplacé, avec quelques coquilles de la numérisation. Les chapitres n'ont pas de titre ; la préface, sans signature, est de Percy Shelley, le mari de l'autrice.",
      "Le livre raconte des meurtres, dont celui d'un enfant, une exécution et des corps de morts. La créature fait peur, mais Mary Shelley lui donne la parole aussi longtemps qu'à son créateur."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "lac", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "P_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
