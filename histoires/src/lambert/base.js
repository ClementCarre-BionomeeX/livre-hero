// « Gabriel Lambert », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "lambert",
  title: "Gabriel Lambert",
  subtitle: "Un roman à lire · Alexandre Dumas, 1844",
  summary: "Toulon, 1835. Parmi les forçats qui rament pour lui, Dumas croit reconnaître un homme croisé autrefois dans les salons de Paris. Un nom gravé sur une carte de visite, un duel au bois de Boulogne, le journal d'un médecin et la confession d'une jeune paysanne normande remontent peu à peu le fil d'une vie fausse de bout en bout.",
  tags: [
    "drame",
    "intrigue"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "plume",
    "color": "#3a3a46"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un roman de 1844, au temps de la peine de mort",
    "reminder": "Ce chapitre parle de la peine de mort ou d'un suicide.",
    "text": [
      "*Gabriel Lambert* a paru en 1844. Le texte est celui de Dumas, sans retouche, d'après l'édition numérisée par le projet Gutenberg ; le volume contenait aussi d'autres récits, qui ne sont pas repris ici.",
      "Le narrateur est Dumas lui-même, et le roman se présente comme une histoire vraie qu'on lui a racontée. Une grande partie en est faite de récits rapportés : le journal du docteur Fabien, la confession de Marie Granger, une lettre de forçat écrite dans la langue du bagne.",
      "En 1844, la loi française punit encore de mort les faussaires, et la guillotine est publique. Le livre parle de condamnation à mort, de grâce royale, de la vie des forçats, et raconte un suicide en détail, sur le ton froid d'un témoin."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "bastide", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
