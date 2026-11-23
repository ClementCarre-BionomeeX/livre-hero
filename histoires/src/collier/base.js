// « Le Collier de la Reine », Alexandre Dumas, 1849-1850 : un livre à lire, sans choix (lecture: true). Texte de
// Dumas (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres
// sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "collier",
  title: "Le Collier de la Reine",
  subtitle: "Un roman à lire · Alexandre Dumas, 1849-1850",
  summary: "Hiver 1784. Une jeune femme pauvre, qui descend des Valois, reçoit dans son grenier la visite de deux dames de charité. L'une d'elles a oublié une boîte d'or chez elle. Pendant ce temps, à Versailles, la reine refuse un collier de diamants d'un million et demi, et un étrange comte, à Paris, prédit leur mort aux convives d'un dîner.",
  tags: [
    "historique",
    "intrigue",
    "aventure"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#2a2a4a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1849",
    "reminder": "Ce chapitre montre une violence ou une humiliation, avec le regard et les mots de 1849.",
    "text": [
      "*Le Collier de la Reine* a paru en feuilleton de 1849 à 1850. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg ; on y trouve d'abord l'avant-propos où Dumas, en 1848, parle de la République qui vient de naître.",
      "L'affaire du collier a eu lieu en 1784 et 1785 : Mme de La Motte, le cardinal de Rohan, Cagliostro, Mlle Oliva, Réteau de Villette et les joailliers Boehmer et Bossange ont existé, et le procès a fait scandale. Dumas arrange les faits à sa façon, et y mêle des personnages de son roman *Joseph Balsamo* : Andrée, Philippe et le baron de Taverney.",
      "C'est un livre d'intrigue de cour, d'amours impossibles et d'escroqueries, où l'on parle franchement de maîtresses et d'amants ; il finit par un procès, une flagellation et une marque au fer rouge."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "richelieu", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
