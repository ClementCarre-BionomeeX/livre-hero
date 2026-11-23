// « Les Compagnons de Jéhu », Alexandre Dumas, 1857 : un livre à lire, sans choix (lecture: true). Texte de
// Dumas, domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres
// sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "jehu",
  title: "Les Compagnons de Jéhu",
  subtitle: "Un roman à lire · Alexandre Dumas, 1857",
  summary: "Automne 1799. À Avignon, un jeune officier jette son assiette au visage d'un royaliste qui insulte Bonaparte. Sur les routes du Midi et de la Bresse, des gentilshommes masqués arrêtent les diligences et ne prennent que l'argent du gouvernement. Et dans une chartreuse abandonnée, près de Bourg, on dit que les moines morts reviennent.",
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
    "motif": "oeil",
    "color": "#3a2a24"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1857",
    "reminder": "Ce chapitre montre une exécution ou un massacre, avec le regard et les mots de 1857.",
    "text": [
      "*Les Compagnons de Jéhu* a paru en feuilleton en 1857. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg ; il commence par un prologue sur Avignon et finit par « Un mot au lecteur », où Dumas raconte d'où lui est venue l'histoire.",
      "Les compagnons de Jéhu ont existé, et Dumas a bâti son roman sur leur histoire. Bonaparte, Joséphine, Fouché, Bourrienne, Cadoudal, Moreau, Bernadotte et bien d'autres sont des personnages historiques ; Roland, Amélie, sir John et Morgan sont de Dumas.",
      "C'est un roman du coup d'État de Brumaire et de la guerre des Chouans. Dumas y aime ses deux camps, et y montre sans détour des massacres, des duels, des combats et des exécutions."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "avignon", hour: 12, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
