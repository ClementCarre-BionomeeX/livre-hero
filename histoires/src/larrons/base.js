// « Larrons dans la maison » (Rogues in the House), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en janvier 1934 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "larrons",
  title: "Larrons dans la maison",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  summary: "Dans une cité de Corinthie, le jeune noble Murilo reçoit en cadeau une oreille coupée : le Prêtre rouge, maître secret de la ville, a découvert ses trafics. Pour sauver sa tête, il fait évader de prison un voleur cimmérien et lui demande de tuer le prêtre cette nuit même. Mais la maison de Nabonidus est pleine de pièges, et quelqu'un d'autre y est déjà entré.",
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
    "motif": "oeil",
    "color": "#6a1a1a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1934",
    "reminder": "Ce chapitre décrit des scènes de grande violence.",
    "text": [
      "Robert E. Howard publie *Larrons dans la maison* en janvier 1934 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est encore un jeune voleur, dans une cité de Corinthie sans nom. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, avec son humour noir. Le récit s'ouvre sur un vers de comptine, traduit en vers libre.",
      "Il faut nommer ce que le récit montre. Conan tue un geôlier et un rival, et se venge brutalement d'une femme qui l'a trahi. Dans la maison du prêtre, des hommes pris au piège d'une poudre de folie s'entretuent sous les yeux du lecteur, et un long combat à mort, très sanglant, oppose Conan à une créature."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "cour", hour: 21, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
