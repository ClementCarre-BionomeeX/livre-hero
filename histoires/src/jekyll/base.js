// « L'Étrange Cas du Dr Jekyll et de Mr Hyde » (Strange Case of Dr Jekyll and Mr Hyde), R. L. Stevenson, 1886 : un livre
// à lire, sans choix (lecture: true). Texte : la traduction de Théo Varlet (1871-1938, domaine public), d'après l'édition
// électronique du groupe Ebooks libres et gratuits (2003). Texte gardé tel quel, sauf la typographie et une virgule
// égarée (« plein de, santé »). Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux,
// mots, résumés des chapitres.
module.exports = {
  id: "jekyll",
  title: "L'Étrange Cas du Dr Jekyll et de Mr Hyde",
  subtitle: "Un roman à lire · R. L. Stevenson, 1886",
  summary: "Londres, un dimanche. M. Utterson, notaire austère, se promène avec son cousin Enfield quand celui-ci lui montre une porte sans sonnette au fond d'une petite rue, et lui raconte ce qu'il a vu là une nuit d'hiver : un petit homme qui piétinait une enfant, et qui a payé pour se tirer d'affaire avec le chèque d'un gentleman respecté. Utterson connaît ce nom. Il a dans son coffre-fort un testament qui l'inquiète depuis longtemps. Le roman de Stevenson en entier, dans la traduction de Théo Varlet, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["fantastique","enquete"],
  added: "2026-11-17",
  author: "R. L. Stevenson · traduction de Théo Varlet",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "sceau",
    "color": "#3a2626"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1886",
    "text": [
      "*L'Étrange Cas du Dr Jekyll et de Mr Hyde* a paru à Londres en janvier 1886. Le roman est donné ici en entier, dans la traduction française de Théo Varlet.",
      "C'est une histoire de peur, courte et serrée : un notaire enquête sur un ami qu'il croit en danger. Le livre raconte des violences, dont un meurtre, et parle d'une drogue qui ronge celui qui la prend.",
      "Les deux derniers chapitres sont des lettres laissées par deux des personnages : le récit y passe à la première personne."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "laporte", hour: 14, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
