// « Les Mille et Un Fantômes », Alexandre Dumas, 1849 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "fantomes",
  title: "Les Mille et Un Fantômes",
  subtitle: "Un livre à lire · Alexandre Dumas, 1849",
  summary: "Fontenay-aux-Roses, 1er septembre 1831. Dumas venait chasser ; il assiste aux aveux d'un carrier qui a tué sa femme et jure que la tête lui a parlé. Le soir, chez le maire, de vieux témoins de la Révolution et une dame d'une pâleur de marbre racontent, chacun à son tour, ce qu'ils ont vu de l'autre monde.",
  tags: [
    "fantastique",
    "historique"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "lune",
    "color": "#2b2f3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Des contes noirs de 1849",
    "reminder": "Ce chapitre montre la mort de près : meurtre, guillotine ou pendaison.",
    "text": [
      "*Les Mille et Un Fantômes* ont paru en 1849. Le texte est celui de Dumas, sans retouche, d'après l'édition illustrée Calmann-Lévy numérisée par le projet Gutenberg ; les légendes des gravures ne sont pas reprises. Les titres des chapitres sont ceux de Dumas, et la lettre qui ouvre le livre sert de préface.",
      "Le livre est un dîner où chacun raconte : le narrateur, Dumas lui-même, écoute le maire Ledru, un médecin sceptique, un antiquaire, un prêtre, un vieux cartomancien et une dame pâle. Plusieurs convives sont des personnages réels de l'époque, et les récits mêlent l'histoire de la Terreur au fantastique.",
      "Les contes sont noirs : un meurtre et une tête tranchée, la guillotine et les expériences sur les suppliciés, une profanation de tombeaux, un pendu, un vampire. Dumas les raconte avec précision."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "fontenay", hour: 5, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
