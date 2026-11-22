// « L'Île mystérieuse », Jules Verne, 1874-1875 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes de l'auteur sont remises entre
// parenthèses à leur appel. Verne ne titre pas ses chapitres, seulement ses trois parties ; les titres des pages, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "ilemysterieuse",
  title: "L'Île mystérieuse",
  subtitle: "Un roman à lire · Jules Verne, 1875",
  summary: "Mars 1865, pendant la guerre de Sécession. Cinq prisonniers des sudistes s'échappent de Richmond en ballon, en pleine tempête : un ingénieur, un reporter, un marin, un jeune garçon et un ancien esclave affranchi, avec le chien de l'ingénieur. Le ballon les jette sur une île inconnue du Pacifique. Ils n'ont rien, pas même une allumette ; ils vont tout refaire, le feu, les briques, le fer, la poudre, une maison dans le granit. Et sur cette île déserte, des choses arrivent que personne n'explique. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "mer",
    "nature"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#3f5a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1875",
    "reminder": "Ce chapitre présente Nab, l'ancien esclave affranchi, avec le regard et les mots de 1875.",
    "text": [
      "Le roman a paru en feuilleton dans le *Magasin d'éducation et de récréation*, puis en trois parties chez Hetzel en 1874 et 1875 : « Les naufragés de l'air », « L'abandonné », « Le secret de l'île ». Le texte est celui de Verne, sans retouche, avec ses notes.",
      "Le livre fait suite, de loin, à deux autres romans de Verne, *Les Enfants du capitaine Grant* et *Vingt mille lieues sous les mers* ; il se lit très bien seul. Ses mesures sont celles des Américains (pieds, milles, degrés Fahrenheit) et sa science celle de 1870 ; les savoir-faire des colons, eux, sont pour la plupart exacts.",
      "Les colons sont des nordistes, et Cyrus Smith a combattu l'esclavage. Mais Nab, l'ancien esclave qu'il a affranchi, est appelé « le nègre » au fil du texte, et décrit avec la tendresse condescendante d'un Blanc de ce temps-là ; un orang-outan apprivoisé fait office de domestique. Le roman parle aussi de chasse, de guerre, de pirates et de morts violentes. Le chapitre 2 de la première partie s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "ballon", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
