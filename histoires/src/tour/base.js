// « Le Tour du monde en quatre-vingts jours », Jules Verne, 1872 : un livre à lire, sans choix (lecture: true).
// Texte de Verne, domaine public, d'après l'édition numérique d'Ebooks libres et gratuits ; les légendes des gravures
// sont retirées. Les notes de l'auteur restent entre parenthèses à leur appel. Les titres des chapitres sont de Verne ;
// ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "tour",
  title: "Le Tour du monde en quatre-vingts jours",
  subtitle: "Un roman à lire · Jules Verne, 1872",
  summary: "Londres, 2 octobre 1872. Phileas Fogg, gentleman réglé comme une horloge, que personne au Reform-Club ne connaît vraiment, parie vingt mille livres qu'il fera le tour de la Terre en quatre-vingts jours. Le soir même, il part avec Passepartout, son nouveau domestique, un Français qui espérait enfin une place tranquille. Paquebots, chemins de fer, éléphant, traîneau à voiles : chaque correspondance compte. Et un inspecteur de police, persuadé d'avoir trouvé le voleur de la Banque d'Angleterre, les suit d'escale en escale. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "humour"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 10,
  skin: "parchemin",
  cover: {
    "motif": "globe",
    "color": "#2c3c5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1872",
    "reminder": "Ce chapitre décrit les Sioux avec le regard et les mots de 1872.",
    "text": [
      "Le roman a paru en feuilleton dans *Le Temps* à la fin de 1872, puis en volume chez Hetzel en 1873. Le texte est celui de Verne, sans retouche, avec ses notes ; il compte en livres sterling et donne lui-même l'équivalent en francs entre parenthèses.",
      "Le voyage est possible depuis peu : le canal de Suez a ouvert en 1869, le chemin de fer qui traverse les États-Unis la même année, et celui de l'Inde en 1870. Les paquebots, les trains et leurs horaires sont ceux des guides de l'époque. Le Reform-Club existe toujours, à Londres ; Phileas Fogg et ses partenaires de whist sont inventés.",
      "Le regard est celui d'un Européen de ce temps-là, fier de l'Empire britannique. Les Indiens, les Chinois, les Japonais et les Mormons sont souvent décrits de haut ou en caricature ; un serveur noir est appelé « nègre », et les Sioux, au chapitre 29, ne sont qu'une horde qu'on abat. Ce chapitre s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "savillerow", hour: 11, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
