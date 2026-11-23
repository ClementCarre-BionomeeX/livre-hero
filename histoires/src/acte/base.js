// « Acté », Alexandre Dumas, 1839 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les chapitres de Dumas n'ont pas de titre ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "acte",
  title: "Acté",
  subtitle: "Un roman à lire · Alexandre Dumas, 1839",
  summary: "Corinthe, l'an 57. Acté, fille du vieil Amyclès, cueille des fleurs au bord de la mer quand aborde une birème dorée. Il en descend un jeune Romain à la barbe d'or, Lucius, venu disputer aux Grecs les couronnes de la lutte, de la course et du chant. Elle lui ouvre la maison de son père, puis son cœur.",
  tags: [
    "historique",
    "drame"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "feuille",
    "color": "#4a2a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un roman antique de 1839",
    "reminder": "Ce chapitre montre des meurtres et des supplices.",
    "text": [
      "*Acté* a paru en 1839. Le texte est celui de Dumas, sans retouche, d'après l'édition établie par ebooksgratuits.com et diffusée par le projet Gutenberg ; la présentation des éditeurs n'est pas reprise. Les chapitres de Dumas n'ont pas de titre.",
      "Dumas suit de près les historiens latins, Tacite et Suétone surtout : les crimes, les fêtes et la fin de l'empereur sont tirés de leurs récits. Acté a existé ; l'aventure qu'il lui prête est de lui. Le dernier chapitre parle des souvenirs que Dumas a recueillis lui-même en Italie.",
      "Le livre se passe à la cour de Rome au premier siècle. Il raconte des empoisonnements, des meurtres de femmes, la persécution des chrétiens, des combats de gladiateurs et des supplices dans l'arène, avec leur sang."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "rivage", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
