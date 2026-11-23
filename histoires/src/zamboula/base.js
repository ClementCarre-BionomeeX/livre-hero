// « Ombres sur Zamboula » (Shadows in Zamboula), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en novembre 1935 (Project Gutenberg n° 42196, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "zamboula",
  title: "Ombres sur Zamboula",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1935",
  summary: "Zamboula, ville de caravanes au bord du désert, où personne ne dort dans les rues après la tombée de la nuit, pas même les mendiants. Conan, à court d'argent, a loué la chambre la moins chère de la ville, chez un aubergiste dont les hôtes, dit un nomade, disparaissent parfois sans laisser de trace. Au-delà des palmiers, un tambour se met à battre. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 16,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#3a2a18"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1935",
    "text": [
      "Robert E. Howard publie *Ombres sur Zamboula* en novembre 1935 dans *Weird Tales*, une revue américaine de récits étranges. Conan y traverse une ville de caravanes du désert, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, sauf sur un point. Chez Howard, les mangeurs d'hommes du récit sont des esclaves noirs, et il les décrit sans cesse par leur couleur de peau, leurs cheveux, leurs lèvres, en les comparant à des bêtes ; il parle aussi de la population « métissée » de la ville comme d'une chose impure. La traduction a retiré tout cela. Les cannibales sont ici « les hommes de Darfar », un culte d'esclaves venus de ce pays, sans couleur de peau. Le nom du dieu-singe, Hanuman, est celui d'un dieu bien réel de l'Inde, que Howard a pris pour en faire un démon.",
      "Il faut nommer ce que le récit montre. Une jeune femme est enlevée dans la rue, nue, pour être mangée. Conan la caresse alors qu'elle est encore sous le choc, puis attend d'elle d'être « payé ». Un prêtre la force à danser nue au milieu de cobras. Il y a aussi des meurtres d'enfants racontés par leur auteur, et une vengeance d'une grande cruauté."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "bazar", hour: 17, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
