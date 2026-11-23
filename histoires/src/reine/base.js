// « La Reine de la Côte noire » (Queen of the Black Coast), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai 1934 (Project Gutenberg n° 42183, domaine public). Les titres des chapitres et les épigraphes sont ceux de
// Howard, traduits ; les titres des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "reine",
  title: "La Reine de la Côte noire",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  summary: "Poursuivi par la garde d'Argos, un jeune barbare du Nord saute d'un étalon sur le pont d'une galère marchande qui part pour les côtes du sud. Le patron le prend à bord à contrecœur, et l'on descend vers Koush, le long de rivages où un nom fait trembler les marins : celui de Bêlit, la reine de la côte noire, et de sa galère, la *Tigresse*. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique",
    "mer"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 15,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#3a1e22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *La Reine de la Côte noire* en mai 1934 dans *Weird Tales*, une revue américaine de récits étranges. C'est l'une des aventures de Conan le Cimmérien, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public. Celui-ci est souvent tenu pour l'un de ses plus beaux.",
      "Chaque chapitre s'ouvre sur quelques vers du « Chant de Bêlit », écrits par Howard. La traduction, nouvelle, faite pour cette bibliothèque, les rend en vers libres, et suit le récit de près dans son style chargé et rapide.",
      "Howard écrit à une époque où les revues américaines peignaient volontiers les Africains en sauvages, et son récit en garde la marque : les corsaires de Bêlit et les villages de la côte n'y ont presque jamais de nom. La traduction garde l'histoire entière, mais retire une comparaison qui fait d'un homme noir une bête, et une phrase qui prête à tout un peuple le goût de l'or.",
      "C'est un récit violent, où l'on meurt beaucoup, souvent de façon horrible. On y parle aussi d'amour et de désir avec une grande franchise, sans scène crue."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "argos", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
