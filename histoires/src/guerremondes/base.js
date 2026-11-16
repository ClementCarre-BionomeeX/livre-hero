// « La Guerre des mondes » (The War of the Worlds), H. G. Wells, 1898 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Henry-D. Davray (1900, édition illustrée de 1906), Project Gutenberg n° 60656, domaine public
// (Wells est mort en 1946, Davray en 1944). Texte de Davray gardé tel quel, sauf la typographie (tirets, espaces, accents
// sur les capitales) et deux coquilles ; les légendes des gravures, qui répétaient le texte, sont retirées.
// Tout ce qui n'est pas de Wells ou de Davray vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "guerremondes",
  title: "La Guerre des mondes",
  subtitle: "Un roman à lire · H. G. Wells, 1898",
  summary: "Surrey, au tournant du siècle. Un cylindre tombé du ciel s'enfonce dans la lande de Horsell, près de Woking. Les curieux s'attroupent autour du trou ; le couvercle se met à tourner. Le narrateur, un écrivain qui habite à deux pas, va vivre l'invasion des Marsiens jour après jour, de son jardin jusqu'aux rues désertes de Londres. Le roman de Wells en entier, dans la traduction d'Henry-D. Davray, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  author: "H. G. Wells · traduction d'Henry-D. Davray (1900)",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#5a2a22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1898",
    "reminder": "Ce chapitre contient des mots et des idées de 1898 sur les « races », gardés tels que l'auteur les a écrits.",
    "text": [
      "*La Guerre des mondes* a paru en 1898, quand la Grande-Bretagne régnait sur le plus grand empire colonial du monde. Wells s'en sert pour retourner la situation : cette fois, ce sont les Anglais qui subissent une conquête venue d'ailleurs, par des envahisseurs qui les jugent inférieurs.",
      "Le livre emploie pourtant les mots de son temps. Le premier chapitre parle de « races humaines inférieures », et plus loin un personnage rêve d'une humanité « triée », où l'on laisserait mourir les faibles. Ce sont des idées répandues en 1898, que la science a démenties depuis. Le roman, lui, les met dans la bouche d'hommes que la peur égare.",
      "Ces passages sont gardés tels quels. Les deux chapitres concernés s'ouvrent sur un rappel de cette notice.",
      "Le livre décrit aussi des morts nombreuses, parfois en détail. La traduction est celle d'Henry-D. Davray (1900) : elle écrit « Marsiens » pour Martiens, comme on le faisait alors."
    ]
  },
  intro: [
    "*Mais qui habite ces mondes, s'ils sont habités ?… Sommes-nous, ou sont-ils, les seigneurs du monde ?… Et comment toutes choses ont-elles été faites pour l'homme ?*\n— Kepler (cité par Robert Burton dans *L'Anatomie de la mélancolie*)"
  ],
  world: { noFood: true, start: { place: "ottershaw", hour: 21, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
