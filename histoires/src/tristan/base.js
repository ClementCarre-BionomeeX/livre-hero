// « Le Roman de Tristan et Iseut », renouvelé par Joseph Bédier (1900) : un livre à lire, sans choix (lecture: true).
// Édition Piazza, préface de Gaston Paris, domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des
// chapitres sont de Bédier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "tristan",
  title: "Le Roman de Tristan et Iseut",
  subtitle: "Un roman à lire · renouvelé par Joseph Bédier, 1900 · d'après les poèmes du XIIe siècle",
  summary: "Seigneurs, vous plaît-il d'entendre un beau conte d'amour et de mort ? Tristan, neveu du roi Marc de Cornouailles, va chercher en Irlande la fiancée de son oncle, Iseut la Blonde. Sur la nef du retour, il fait chaud, et la servante a laissé à portée de main un flacon de vin.",
  tags: [
    "fantasy",
    "drame",
    "historique"
  ],
  author: "Joseph Bédier",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "fleur",
    "color": "#3c4a2e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un roman renouvelé des trouvères",
    "reminder": "Ce chapitre a des passages violents.",
    "text": [
      "La légende de Tristan et Iseut ne nous est parvenue qu'en morceaux : des fragments de poèmes français du XIIe siècle, de Béroul et de Thomas, et leurs imitations en allemand, en anglais, en norrois. Joseph Bédier, médiéviste et professeur au Collège de France, en a tiré en 1900 un seul récit en prose, dans une langue qui garde le parfum des vieux poèmes. Chaque chapitre s'ouvre sur quelques vers de ces sources, en ancien français, en allemand ou en provençal, tels que Bédier les a choisis. Le texte est celui de l'édition Piazza, d'après l'édition numérique du projet Gutenberg ; la préface est de Gaston Paris, le maître de Bédier. La note où Bédier donnait ses sources, chapitre par chapitre, a été retirée.",
      "C'est l'histoire d'un amour adultère que rien ne peut défaire, avec ses ruses et ses mensonges. On y condamne au bûcher sans jugement, une reine y est livrée à des lépreux, des traîtres y sont tués et décapités, et l'on y meurt."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "tintagel", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
