// « Une ville flottante », Jules Verne, 1871 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Verne n'a pas titré ses
// chapitres : leurs titres, comme ceux des pages, sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux,
// mots, résumés).
module.exports = {
  id: "flottante",
  title: "Une ville flottante",
  subtitle: "La traversée du Great Eastern · Jules Verne, 1871",
  summary: "Mars 1867. Le Great Eastern, le plus grand navire du monde, une ville de fer longue de deux cents mètres, part de Liverpool pour New York avec ses milliers de passagers : chercheurs d'or, mormons, joueurs, jeunes mariés, inventeurs et originaux. Un voyageur français s'embarque par curiosité. À bord, il retrouve un ami, officier de l'armée des Indes, pâle et rongé par un chagrin dont il ne parle pas. Un docteur bavard lui promet des revenants. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
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
    "color": "#3d4a5c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1871",
    "text": [
      "Verne a vraiment fait cette traversée, avec son frère Paul, en mars et avril 1867, à bord du Great Eastern, et il en a tiré ce roman, paru en 1871 chez Hetzel. Le navire, son capitaine, la route, les escales et les chutes du Niagara sont réels ; le narrateur ressemble à Verne, et l'histoire de Fabian et d'Ellen est inventée. Le texte est celui de Verne, sans retouche ; il n'a pas titré ses chapitres, et leurs titres sont de Claude.",
      "Verne y croque les passagers comme un Parisien de 1867, avec les clichés de son temps : un homme y est moqué parce qu'il serait « juif allemand », et les serveurs ou les guides noirs n'ont droit qu'à une ligne. On y parle aussi de folie, de duel et de mort, sans détails crus."
    ],
    "reminder": "Ce chapitre décrit des gens avec les clichés d'un Français de 1867."
  },
  intro: [],
  world: { noFood: true, start: { place: "liverpool", hour: 7, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
