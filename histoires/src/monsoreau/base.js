// « La Dame de Monsoreau », Alexandre Dumas, 1846 : un livre à lire, sans choix (lecture: true). Texte de Dumas
// (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas, sauf celui du chapitre LXXIII, qui n'en a pas dans l'édition ; ceux des pages, comme tout ce qui vit dans
// les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "monsoreau",
  title: "La Dame de Monsoreau",
  subtitle: "Un roman à lire · Alexandre Dumas, 1846",
  summary: "Paris, 1578. Le roi Henri III s'entoure de mignons et de pénitents ; son frère, le duc d'Anjou, conspire ; les Guise montent la Ligue. Bussy d'Amboise, le plus brave gentilhomme du royaume, échappe de justesse à une embuscade et se réveille devant le portrait d'une inconnue. Pendant qu'il la cherche, Chicot, le bouffon du roi, fait semblant de dormir et écoute tout.",
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
    "motif": "lune",
    "color": "#2a2440"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1846",
    "reminder": "Ce chapitre raconte un combat à mort, avec le regard et les mots de 1846.",
    "text": [
      "*La Dame de Monsoreau* fait suite à *La Reine Margot* et précède *Les Quarante-Cinq*. Il a paru en feuilleton dans *Le Constitutionnel*, de 1845 à 1846. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg en trois tomes ; les cinq notes de Dumas sont restées à leur place, entre parenthèses.",
      "Henri III, ses mignons, le duc d'Anjou, Bussy d'Amboise, Chicot, les Guise et la Ligue ont existé, comme le combat des mignons de 1578. Dumas arrange les faits à sa façon. Un chapitre de la troisième partie n'a pas de titre dans l'édition : celui qu'il porte ici est de Claude.",
      "C'est un livre de cour, d'amour et de complots, plein de gaieté, où l'on se bat beaucoup : embuscades de nuit, duels, et un combat à mort à la fin."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "louvre", hour: 22, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
