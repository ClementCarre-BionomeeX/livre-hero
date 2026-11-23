// « Le Chevalier de Maison-Rouge », Alexandre Dumas, 1845-1846 : un livre à lire, sans choix (lecture: true). Texte de
// Dumas (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres
// sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "maisonrouge",
  title: "Le Chevalier de Maison-Rouge",
  subtitle: "Un roman à lire · Alexandre Dumas, 1845-1846",
  summary: "Paris, mars 1793. La reine est prisonnière au Temple, la Terreur commence. Un soir de pluie, un jeune républicain sauve des patrouilles une inconnue sans carte de civisme, qui disparaît en lui laissant une bague. En la cherchant, il entre dans une maison où l'on ne l'attendait pas, et où l'on a des secrets.",
  tags: [
    "historique",
    "aventure",
    "intrigue"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "fleur",
    "color": "#5a1a1e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1845",
    "reminder": "Ce chapitre raconte une mort violente, avec le regard et les mots de 1845.",
    "text": [
      "*Le Chevalier de Maison-Rouge* a paru en feuilleton de 1845 à 1846. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg ; les vers et les chansons, nombreux, gardent leurs lignes. Deux chapitres portent le même titre deux fois, « La déesse Raison » et « Le billet » : c'est ainsi dans l'édition.",
      "Marie-Antoinette, sa famille, Simon, Santerre, Fouquier-Tinville, le Temple et la Conciergerie ont existé, comme le complot de l'œillet ; le chevalier de Maison-Rouge s'inspire d'un vrai conspirateur royaliste. Dumas arrange les faits à sa façon.",
      "C'est un livre d'amour et de conspiration sous la Terreur, où l'on rit beaucoup et où l'on meurt beaucoup : émeutes, exécutions, un duel, et la guillotine jusqu'à la dernière page."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "sainthonore", hour: 22, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
