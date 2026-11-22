// « Le Village aérien », Jules Verne, 1901 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les trois notes de l'auteur
// sont à leur appel, entre parenthèses. Les titres des chapitres sont ceux de Verne, sauf le sixième ; ceux des pages
// sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "village",
  title: "Le Village aérien",
  subtitle: "La grande forêt · Jules Verne, 1901",
  summary: "Afrique centrale, à la fin du XIXe siècle. Deux amis, l'Américain John Cort et le Parisien Max Huber, rentrent d'une longue chasse à l'éléphant avec la caravane du Portugais Urdax et son guide Khamis. Il ne leur reste que quelques jours de marche jusqu'à l'Oubanghi quand, une nuit, des feux s'allument à la lisière d'une immense forêt que personne n'a jamais traversée. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "feuille",
    "color": "#3f5a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1901",
    "text": [
      "Le roman a paru dans le Magasin d'éducation et de récréation, puis en volume chez Hetzel en 1901, sous le titre « La Grande Forêt ». Le texte est celui de Verne, sans retouche. L'Oubanghi, le Congo français et Libreville existent ; la forêt que traversent les héros, sa rivière et son peuple sont inventés. Le professeur Garner, qui voulut apprendre le langage des singes en vivant dans une cage au Gabon, a vraiment existé.",
      "Verne écrit au temps des colonies. Il parle des Africains avec le mépris de son époque, les classe par « races » plus ou moins « inférieures », et bâtit son histoire sur une idée qu'on prenait alors au sérieux : un peuple à mi-chemin entre le singe et l'homme. La science a depuis montré que ce classement des humains était faux. Le livre garde ces mots et ces idées tels que Verne les a écrits, en 1901."
    ],
    "reminder": "Un roman de 1901, avec le racisme et les idées fausses de son temps."
  },
  intro: [],
  world: { noFood: true, start: { place: "tertre", hour: 19, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
