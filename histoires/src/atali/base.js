// « La Fille du géant du gel » (The Frost-Giant's Daughter), Robert E. Howard, écrit en 1932 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (domaine
// public en France). Le titre du chapitre, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont
// de Claude.
module.exports = {
  id: "atali",
  title: "La Fille du géant du gel",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1932",
  summary: "Sur un champ de bataille du Nord glacé, le jeune Conan, mercenaire chez les Æsir, vient d'abattre le dernier de ses ennemis. Épuisé, il tombe dans la neige. Quand il relève les yeux, une jeune femme aux cheveux d'or rit de lui, pieds nus sur la neige, et l'invite à la suivre.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 16,
  skin: "parchemin",
  cover: {
    "motif": "flocon",
    "color": "#2a3f5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1932",
    "reminder": "Ce récit montre un homme qui poursuit une femme pour la prendre de force.",
    "text": [
      "Robert E. Howard écrit *La Fille du géant du gel* en 1932. La revue *Weird Tales* le refuse ; Howard en tire une autre version sans Conan, et celle-ci ne paraît qu'après sa mort. Conan y est jeune, mercenaire chez les Æsir, un peuple du Nord glacé où l'on jure par Ymir, le géant du gel. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses textes sont dans le domaine public en France.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Le récit tient en un seul chapitre.",
      "Il faut nommer ce que le récit montre. Il s'ouvre sur un champ de bataille couvert de morts, et les combats sont sanglants. Surtout, la jeune femme, presque nue, se moque de Conan et l'attire ; fou de désir, il la poursuit pour s'emparer d'elle, et l'étreint de force avant qu'elle ne lui échappe. Le récit montre cette violence sans la condamner."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "champ", hour: 12, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
