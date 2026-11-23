// « La Femme au collier de velours », Alexandre Dumas, 1850 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "velours",
  title: "La Femme au collier de velours",
  subtitle: "Un roman à lire · Alexandre Dumas, 1850",
  summary: "Dumas se souvient de son ami Charles Nodier et de l'histoire qu'il racontait : celle du jeune Hoffmann, peintre, musicien et poète, qui quitte sa fiancée de Mannheim pour le Paris de 1793 et s'éprend d'une danseuse de l'Opéra, qui porte au cou un étroit collier de velours noir fermé par une agrafe de diamants.",
  tags: [
    "fantastique",
    "historique"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#3a2230"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un conte fantastique de 1850",
    "reminder": "Ce chapitre montre la Terreur et la guillotine.",
    "text": [
      "*La Femme au collier de velours* a paru en 1850. Le texte est celui de Dumas, sans retouche, d'après l'édition établie par ebooksgratuits.com et diffusée par le projet Gutenberg. Les titres des chapitres sont ceux de Dumas.",
      "Le premier chapitre est un long souvenir de Charles Nodier et de ses soirées à l'Arsenal ; le conte commence au deuxième. Son héros est l'écrivain allemand E. T. A. Hoffmann, jeune, tel que Dumas l'imagine, et l'on croise Danton et madame Du Barry.",
      "Le livre se passe sous la Terreur, au pied de l'échafaud. Il montre des exécutions, la passion du jeu, et une nuit d'amour qui tourne à l'épouvante."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "tunis", hour: 5, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
