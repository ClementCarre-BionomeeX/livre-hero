// « La Citadelle écarlate » (The Scarlet Citadel), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en janvier 1933 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "citadelle",
  title: "La Citadelle écarlate",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1933",
  summary: "Trahi par un allié, Conan, roi d'Aquilonie, voit sa chevalerie tomber dans la plaine de Shamu et se retrouve aux fers. On l'emmène à Khorshemish, au pied de la citadelle rouge du sorcier Tsotha-lanti, sous laquelle s'ouvrent des fosses dont personne ne revient. Pendant ce temps, son royaume le croit mort.",
  tags: [
    "aventure",
    "fantastique",
    "guerre"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#5a1414"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1933",
    "reminder": "Ce chapitre décrit des scènes de grande violence.",
    "text": [
      "Robert E. Howard publie *La Citadelle écarlate* en janvier 1933 dans *Weird Tales*, une revue américaine de récits étranges. C'est le deuxième récit de Conan à paraître ; comme dans *Le Phénix sur l'épée*, le Cimmérien y est déjà roi d'Aquilonie. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les mots qui désignent un esclave kouchite et des gardes par la couleur de leur peau, et les insultes qui s'y attachent. La copie anglaise écrit « Tamar » pour la capitale d'Aquilonie ; la traduction garde Tarantia, le nom des autres récits. Chaque chapitre s'ouvre sur quelques vers ou un proverbe, que Howard attribue à des chants ou à des livres imaginaires ; ils sont traduits en vers libres.",
      "Il faut nommer ce que le récit montre. Des batailles sanglantes et un massacre ; un homme éventré, dont un sorcier relève ensuite le cadavre ; des monstres dans les souterrains ; un prince jeté du haut d'une tour ; une décapitation. Les méchants menacent de faire écorcher les femmes du roi ou de sacrifier des jeunes filles, et les femmes du palais sont emmenées de force par des soldats."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "shamu", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
