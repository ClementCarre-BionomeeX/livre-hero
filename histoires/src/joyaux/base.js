// « Les Joyaux de Gwahlur » (Jewels of Gwahlur), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mars 1935 (Project Gutenberg n° 42236, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "joyaux",
  title: "Les Joyaux de Gwahlur",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1935",
  summary: "Au royaume de Keshan, on garde depuis des siècles un trésor dont personne n'a vu la couleur : les Dents de Gwahlur. Conan est venu les prendre, sous couvert d'offrir son épée au roi ; un Stygien qui a la même idée lui dispute la place. Le grand prêtre décide d'interroger l'oracle, une princesse morte depuis mille ans, dans le palais désert d'une vallée que nul ne visite plus. Conan part en avance. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 15,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#233024"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1935",
    "text": [
      "Robert E. Howard publie *Les Joyaux de Gwahlur* en mars 1935 dans *Weird Tales*, une revue américaine de récits étranges. Conan, devenu aventurier et chef de guerre à louer, y court après un trésor dans les royaumes du Sud de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège ce que Howard écrit sur la « race » des peuples du Sud : la hiérarchie de couleur qu'il prête au Keshan (une noblesse « métissée » qui descendrait d'une « race blanche » régnant sur un peuple noir), et les mots qui désignent sans cesse les prêtres et les soldats par leur couleur de peau. Ces mots sont devenus « royaumes du Sud », « lanciers », « prêtres » ou « colosse ». Quelques insultes que Conan adresse à Muriela ont aussi été adoucies.",
      "Il faut nommer ce que le récit montre. Muriela est une esclave, achetée à un marchand, que son maître fouette. Conan la démasque en lui arrachant ses vêtements, la frappe et l'assoit sur ses genoux ; plus tard, il compte se servir d'elle. Le dernier chapitre décrit un massacre en détail."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "falaises", hour: 6, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
