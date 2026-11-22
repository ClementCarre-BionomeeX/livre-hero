// « Le Mouron rouge » (The Scarlet Pimpernel), baronne Orczy, 1905 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1905 (Project
// Gutenberg n° 60, domaine public). Les titres des chapitres sont ceux d'Orczy, traduits ; ceux des pages, comme tout
// ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le portrait du vieux voiturier (ch. XXVI,
// « The Jew » dans l'original) et quelques remarques de narrateur ont été adoucis ; voir la notice.
module.exports = {
  id: "mouron",
  title: "Le Mouron rouge",
  subtitle: "Un roman à lire · Baronne Orczy, 1905",
  summary: "Septembre 1792. À Paris, la guillotine travaille du matin au soir, et pourtant des familles entières d'aristocrates passent les barrières sous le nez des gardes. On dit qu'une bande d'Anglais les fait sortir, menée par un chef dont personne ne connaît le visage et qui signe d'une petite fleur rouge. À Londres, la belle Marguerite Blakeney, Française mariée au plus riche et au plus sot des baronnets anglais, reçoit la visite d'un envoyé de la République qui a de quoi la faire chanter. Le roman d'Orczy en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "intrigue",
    "historique"
  ],
  author: "Baronne Orczy · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "fleur",
    "color": "#8a1f24"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1905",
    "text": [
      "Emma Orczy, baronne hongroise installée à Londres, écrit *Le Mouron rouge* d'abord pour le théâtre, puis en fait un roman, publié en 1905. Le succès est énorme, et le livre invente une figure promise à une longue postérité : le héros à double vie, qui cache sous un masque frivole un justicier insaisissable. Orczy est morte en 1947 ; son roman est dans le domaine public.",
      "L'histoire se passe à l'automne 1792, au début de la Terreur, entre Paris, Douvres, Londres et Calais. Orczy écrit en Anglaise de la Belle Époque, très hostile à la Révolution : ses révolutionnaires sont tous féroces ou ridicules, ses aristocrates presque tous innocents. C'est un parti pris de roman d'aventure, pas un livre d'histoire.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais. Elle suit Orczy de près, à une exception : le chapitre XXVI peignait un vieux voiturier juif avec les préjugés antisémites courants à l'époque, et quelques remarques du même genre traînaient ailleurs. Ces passages ont été adoucis ; le préjugé reste, mais dans la bouche des personnages qui le portent, plus dans celle du narrateur.",
      "On y fait chanter une femme en menaçant la vie de son frère, on y frappe un vieillard, on y parle beaucoup de la guillotine. Mais le cœur du livre est un mariage malheureux, deux orgueilleux qui s'aiment sans oser se le dire, et une femme qui doit réparer seule la faute qu'elle a commise."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "barricade", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "C1_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
