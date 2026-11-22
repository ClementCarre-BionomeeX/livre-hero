// « L'Île à hélice », Jules Verne, 1895 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place.
// Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les
// tags (gens, lieux, mots, résumés).
module.exports = {
  id: "helice",
  title: "L'Île à hélice",
  subtitle: "Un quatuor de Paris sur une île qui navigue · Jules Verne, 1895",
  summary: "Mai, en Basse-Californie. Quatre musiciens parisiens, le Quatuor Concertant, doivent donner un concert à San Diego le lendemain, et leur voiture vient de verser au bord d'une route déserte. Ils marchent toute la nuit, leurs instruments sur le dos, jusqu'à ce qu'un Américain fort aimable leur offre un bon hôtel dans une ville qu'il ne veut pas nommer. Le matin, la ville est splendide, électrique, immensément riche, et elle a quelque chose de très étrange. Un an de navigation à travers les archipels du Pacifique, deux familles de milliardaires qui se détestent, et quelques passagers qu'on aurait mieux fait de regarder de près. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "humour"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2c5a6e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, présent",
  version: 1,
  notice: {
    "title": "Un livre de 1895",
    "text": [
      "Le roman a paru dans le Magasin d'éducation et de récréation, puis en deux volumes chez Hetzel en 1895. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Les archipels que visite l'île existent, avec leurs ports, leurs missions et leurs rois de l'époque ; l'île à hélice, sa ville et ses habitants sont inventés.",
      "Verne écrit au temps des colonies. Il admire certains peuples du Pacifique pour leur beauté et en méprise d'autres : il parle de « sauvages », de « cannibales », d'êtres « au bas de l'échelle humaine », et classe les habitants des îles comme on le faisait alors. Ces classements sont faux, et le livre les garde tels que Verne les a écrits. On y voit aussi des combats sanglants, racontés sans détails crus."
    ],
    "reminder": "Ce chapitre parle des peuples du Pacifique avec les mots et le mépris d'un Français de 1895."
  },
  intro: [],
  world: { noFood: true, start: { place: "californie", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
