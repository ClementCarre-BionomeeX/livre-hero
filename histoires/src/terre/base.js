// « De la Terre à la Lune », Jules Verne, 1865 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition du Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur appel. Les titres
// des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux,
// mots, résumés).
module.exports = {
  id: "terre",
  title: "De la Terre à la Lune",
  subtitle: "Un roman à lire · Jules Verne, 1865",
  summary: "Baltimore, après la guerre de Sécession. Les artilleurs du Gun-Club, à qui la paix a laissé des crochets de fer, des jambes de bois et beaucoup d'ennui, se demandent à quoi servir encore. Leur président, Impey Barbicane, a une réponse : envoyer un boulet dans la Lune. Il faudra le plus grand canon du monde, des millions de dollars, toute l'Amérique derrière lui, et compter avec le capitaine Nicholl, son vieil ennemi, qui parie contre lui. Puis arrive de Paris une dépêche de vingt mots qui change tout. Le roman de Verne, en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
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
    "color": "#23304f"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1865",
    "text": [
      "Le roman a paru en feuilleton dans le *Journal des débats* en 1865, puis chez Hetzel. Le texte est celui de Verne, sans retouche, avec ses notes. Les mesures sont américaines (pieds, yards, milles, livres, degrés Fahrenheit), et l'auteur en donne souvent l'équivalent en mesures françaises.",
      "Le livre se moque, avec un grand sérieux apparent, des Américains, de leurs clubs, de leurs journaux, et surtout de ses héros artilleurs, qui comptent leurs victimes avec fierté et regrettent la guerre. Cette ironie est voulue. Les Indiens n'y paraissent que de loin, avec le regard de 1865.",
      "La science est celle des années 1860. Les calculs des astronomes sont à peu près justes ; le canon, lui, est impossible : le choc du départ écraserait n'importe quel passager. Plusieurs savants et inventeurs cités ont existé ; les membres du Gun-Club, eux, sont inventés. Le roman s'arrête au milieu de l'aventure, et Verne en a écrit la suite cinq ans plus tard, *Autour de la Lune*."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "gunclub", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
