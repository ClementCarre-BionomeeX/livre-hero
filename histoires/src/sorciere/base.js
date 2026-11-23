// « Une sorcière naîtra » (A Witch Shall Be Born), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en décembre 1934 (Project Gutenberg n° 42227, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "sorciere",
  title: "Une sorcière naîtra",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  summary: "Une nuit, Taramis, reine de Khauran, voit apparaître dans sa chambre une femme qui a son visage, trait pour trait, et pas du tout son regard. Au matin, la reine ouvre les portes de la ville aux mercenaires d'un aventurier, et le capitaine de sa garde, un Cimmérien nommé Conan, est le seul à crier que ce n'est pas elle. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 16,
  skin: "parchemin",
  cover: {
    "motif": "lune",
    "color": "#3a1c22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *Une sorcière naîtra* en décembre 1934 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est capitaine de la garde de Khauran, un petit royaume au bord du désert, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les passages où Howard décrit des peuples par des traits physiques ou des caractères de « race » : le nez des mercenaires shémites et la « fatalité de leur race », la couleur de peau de voyageurs venus de l'est, et, dans la lettre d'Astreas, un jugement sur les paysans de Khauran et une comparaison avec des esclaves noirs.",
      "C'est le plus dur des récits de Conan, et il faut nommer ce qu'il contient : un viol, que le récit ne montre pas mais qu'il laisse entendre sans doute possible à la fin du premier chapitre ; la torture d'une prisonnière pendant des mois ; une crucifixion décrite longuement ; des femmes livrées aux soldats ; des sacrifices humains."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "palais", hour: 2, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
