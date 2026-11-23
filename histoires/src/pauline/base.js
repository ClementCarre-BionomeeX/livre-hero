// « Pauline », Alexandre Dumas, 1838 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les chapitres de Dumas n'ont pas de titre ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "pauline",
  title: "Pauline",
  subtitle: "Un roman à lire · Alexandre Dumas, 1838",
  summary: "En Suisse, Dumas croise deux fois son ami Alfred de Nerval au bras d'une femme voilée qui veut rester inconnue. Des mois plus tard, Alfred lui raconte tout : une tempête sur la côte normande, une abbaye en ruine, une clef enterrée dans la nuit, et une jeune femme que tout Paris croit morte.",
  tags: [
    "drame",
    "intrigue"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "lune",
    "color": "#2f2a3e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un roman noir de 1838",
    "reminder": "Ce chapitre montre un crime violent contre une femme.",
    "text": [
      "*Pauline* a paru en 1838. Le texte est celui de Dumas, sans retouche, d'après l'édition Michel Lévy de 1848 numérisée par le projet Gutenberg. Le volume contenait aussi « Murat » et « Pascal Bruno », qui ne sont pas repris ici. Les chapitres de Dumas n'ont pas de titre.",
      "Le récit passe de bouche en bouche : Dumas écoute son ami Alfred, qui rapporte à son tour la confession de Pauline. Le roman emprunte au roman noir anglais ses ruines, ses souterrains et ses portes dérobées.",
      "Le livre raconte des meurtres, une femme ligotée qu'on se dispute puis qu'on tue, un empoisonnement, et la lente agonie d'une prisonnière dans un caveau. Il montre aussi la chasse au sanglier et au tigre avec leur sang."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "grisier", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
