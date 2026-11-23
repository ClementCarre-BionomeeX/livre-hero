// « Georges », Alexandre Dumas, 1843 : un livre à lire, sans choix (lecture: true). Texte de Dumas (avec
// Félicien Mallefille), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; les titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "georges",
  title: "Georges",
  subtitle: "Un roman à lire · Alexandre Dumas, 1843",
  summary: "L'île de France, au temps des planteurs et des esclaves. Enfant, Georges Munier a vu son père, un homme de couleur riche et brave, chassé des rangs par les blancs. Quatorze ans plus tard, il revient d'Europe, transformé, décidé à affronter le préjugé qui l'a humilié. Une jeune créole, un frère qui court les mers, un homme d'Anjouan qui attend son heure : la partie va se jouer entre eux tous.",
  tags: [
    "historique",
    "aventure",
    "mer"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2a4a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1843, sur l'esclavage",
    "reminder": "Ce chapitre montre des violences et des morts, avec le regard et les mots de 1843.",
    "text": [
      "*Georges* a paru en 1843. Dumas l'a écrit avec Félicien Mallefille. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg.",
      "C'est un roman contre le préjugé de couleur, écrit par un homme dont la grand-mère avait été esclave à Saint-Domingue. Il se passe à l'île de France, l'actuelle île Maurice, devenue anglaise en 1810, où l'esclavage n'est aboli qu'en 1835.",
      "Le livre emploie les mots de son temps, que l'on ne dit plus : « nègre », « mulâtre ». Le narrateur et ses personnages prêtent aussi aux uns et aux autres des traits de « race » que l'on sait aujourd'hui faux et blessants. On les a laissés tels quels, pour ne pas trahir le texte ; le livre lui-même montre ce qu'ils ont de cruel.",
      "On y voit l'esclavage, la traite, des châtiments, une révolte et sa répression, une exécution."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "pieterboot", hour: 17, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
