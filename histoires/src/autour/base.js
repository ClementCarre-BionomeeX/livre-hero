// « Autour de la Lune », Jules Verne, 1869 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition illustrée de Hetzel numérisée par le Projet Gutenberg ; les gravures sont retirées. Les notes de
// l'auteur restent entre parenthèses à leur appel. Les titres des chapitres sont ceux de Verne ; les titres des pages
// sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "autour",
  title: "Autour de la Lune",
  subtitle: "Un roman à lire · Jules Verne, 1869",
  summary: "Floride, 1er décembre, dix heures vingt du soir. Barbicane, Nicholl et Michel Ardan s'enferment dans l'obus d'aluminium, au fond de la Columbiad, avec deux chiens, des vivres pour un an et des instruments. Personne n'a jamais quitté la Terre. Le coup part. Ce qui se passe ensuite dans le projectile, les trois hommes sont les seuls à le savoir : le froid de l'espace, les calculs qui inquiètent, les surprises de la route, et la Lune qui grossit au hublot. La suite de « De la Terre à la Lune », en entier, sans choix : on la lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "lune",
    "color": "#3a2a4f"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1869",
    "text": [
      "Le roman a paru en feuilleton en 1869, puis chez Hetzel en 1870. C'est la suite de *De la Terre à la Lune*, que Verne résume dans un chapitre préliminaire : on peut donc le lire seul. Le texte est celui de Verne, sans retouche, avec ses notes, ses calculs et ses formules.",
      "La science est celle des années 1860. Les cartes de la Lune que cite Verne sont réelles, comme les noms de ses cirques et de ses mers. D'autres choses ont été démenties depuis : on sait aujourd'hui qu'il n'y a ni eau, ni air, ni forêts sur la Lune, et qu'aucun canon ne pourrait y envoyer des hommes vivants. Un siècle plus tard, en 1968, trois astronautes américains ont pourtant fait le tour de la Lune, partis de Floride, avant de retomber dans le Pacifique.",
      "Le livre est surtout une longue conversation à trois, dans un espace fermé. Barbicane explique, Nicholl calcule, Michel Ardan plaisante et se trompe avec bonne humeur."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "stoneshill", hour: 22, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
