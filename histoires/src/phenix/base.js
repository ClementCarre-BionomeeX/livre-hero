// « Le Phénix sur l'épée » (The Phoenix on the Sword), Robert E. Howard, 1932 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1932 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "phenix",
  title: "Le Phénix sur l'épée",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1932",
  summary: "Conan, l'ancien voleur et mercenaire, est roi d'Aquilonie. Il s'ennuie dans les affaires d'État, griffonne une carte des pays du Nord et sent venir quelque chose qu'il ne peut pas fendre de son épée. Dans une maison obscure de la capitale, un hors-la-loi et son esclave stygien préparent sa mort.",
  tags: [
    "aventure",
    "fantastique",
    "intrigue"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "plume",
    "color": "#3a2a1a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1932",
    "reminder": "Ce chapitre décrit un combat sanglant.",
    "text": [
      "Robert E. Howard publie *Le Phénix sur l'épée* en décembre 1932 dans *Weird Tales*, une revue américaine de récits étranges. C'est le tout premier récit de Conan à paraître : Howard le montre déjà roi d'Aquilonie, au milieu de sa vie, et racontera plus tard sa jeunesse de voleur, de pirate et de mercenaire. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les mots qui désignent sans cesse le Stygien par la couleur de sa peau. Chaque chapitre s'ouvre sur quelques vers, que Howard attribue à des livres imaginaires ; ils sont traduits en vers libres.",
      "Il faut nommer ce que le récit montre. Un homme est poignardé ; le dernier chapitre décrit un combat sanglant dans la chambre du roi, avec des crânes fendus, et une créature monstrueuse."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "repaire", hour: 5, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
