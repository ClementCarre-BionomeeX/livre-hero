// « Lancelot du Lac », mis en nouveau langage par Paulin Paris (Les Romans de la Table Ronde, tomes III et IV, 1872-1875) :
// un livre à lire, sans choix (lecture: true). Domaine public, d'après l'édition numérique du projet Gutenberg. Les laisses sont
// seulement numérotées ; leurs titres viennent de la table de Paulin Paris, abrégés ; ceux des pages, comme tout ce qui vit dans
// les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "lancelot",
  title: "Lancelot du Lac",
  subtitle: "Un roman à lire · roman en prose du XIIIe siècle · mis en nouveau langage par Paulin Paris, 1872-1875",
  summary: "Le vieux roi Ban de Benoïc meurt en voyant brûler son dernier château, et une fée emporte son fils au fond d'un lac. L'enfant grandit sans savoir son nom. À dix-huit ans, il arrive à la cour du roi Artus, et il voit la reine Genièvre.",
  tags: [
    "fantasy",
    "aventure",
    "historique"
  ],
  author: "Paulin Paris (d'après le roman en prose du XIIIe siècle)",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "ecu",
    "color": "#2d3f5c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un roman du XIIIe siècle mis en nouveau langage",
    "reminder": "Ce chapitre a des passages violents.",
    "text": [
      "Le *Lancelot* en prose a été écrit en français vers 1220, par des auteurs dont on ignore les noms ; c'est le cœur du grand cycle de la Table ronde. Paulin Paris, professeur au Collège de France, l'a « mis en nouveau langage » dans les tomes III et IV de ses *Romans de la Table Ronde* (1872 et 1875) : il raconte, abrège parfois et commente en passant, en gardant le ton et les mots des vieux conteurs. Le texte est celui de cette édition, d'après l'édition numérique du projet Gutenberg ; ses notes savantes ont été retirées. Les laisses, ou chapitres, ne portent qu'un numéro : leurs titres viennent de la table de Paulin Paris.",
      "Le tome V, qui continue l'histoire de Lancelot, n'est pas disponible : le livre s'arrête à la fin du tome IV, à la fin d'une grande partie du roman.",
      "C'est un roman de chevalerie : sièges, batailles, combats à mort, têtes tranchées, et l'amour de Lancelot pour la reine Genièvre, femme du roi Artus."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "trebes", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
