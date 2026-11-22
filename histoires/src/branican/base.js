// « Mistress Branican », Jules Verne, 1891 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place.
// Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les
// tags (gens, lieux, mots, résumés).
module.exports = {
  id: "branican",
  title: "Mistress Branican",
  subtitle: "Une femme à la recherche de son mari disparu · Jules Verne, 1891",
  summary: "San Diego, mars 1875. Le capitaine John Branican appareille pour les Indes sur le Franklin, et sa jeune femme Dolly le regarde partir avec leur petit garçon dans les bras. Le Franklin n'arrive jamais à Singapour. Dolly, elle, refuse de se croire veuve : pendant quinze ans, elle va fouiller les mers de Malaisie, les récifs du détroit de Torrès, la mer de Timor, puis les déserts brûlants de l'Australie, avec quelques fidèles et une fortune qu'elle n'a pas demandée. Un roman de deuil, d'obstination et de traîtrise, où l'on croise un collectionneur de chapeaux, un jeune mousse au regard trop familier et un parent qu'on aurait mieux fait de ne pas retrouver. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "drame"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#7a5a2e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1891",
    "text": [
      "Le roman a paru dans le Magasin d'éducation et de récréation, puis en deux volumes chez Hetzel en 1891. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Les mers, les îles, les villes et les stations d'Australie existent, comme les explorateurs que Verne cite ; la famille Branican et ses proches sont inventés. Le livre parle de la mort d'un enfant, de la folie et du deuil, avec gravité et sans détails crus.",
      "Verne écrit au temps des colonies. Il dénonce les massacres des Aborigènes par les colons, mais il décrit aussi les peuples d'Australie avec un mépris qui était courant alors : « sauvages », « cannibales », des êtres « à peine dignes d'appartenir à l'humanité ». Il fait du domestique chinois une caricature et emploie des mots comme « mulâtresse » ou « nègres ». Ces jugements sont faux et blessants ; le livre les garde tels que Verne les a écrits."
    ],
    "reminder": "Ce chapitre parle des Aborigènes ou des Chinois avec les mots et le mépris d'un Français de 1891."
  },
  intro: [],
  world: { noFood: true, start: { place: "port", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
