// « Clous rouges » (Red Nails), Robert E. Howard, 1936 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// de juillet à octobre 1936 (Project Gutenberg n° 32759, domaine public). Les titres des chapitres sont ceux de Howard ;
// ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "clous",
  title: "Clous rouges",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1936",
  summary: "Valéria de la Confrérie Rouge, pirate, a fui un camp de mercenaires vers le sud, et Conan l'a suivie. Un monstre les chasse de la forêt ; au milieu d'une plaine se dresse une ville sans fenêtres, sans gardes, aux salles éclairées par des pierres de feu. Ses habitants, peu nombreux, s'entretuent depuis cinquante ans, et à chaque mort ils plantent un clou rouge dans une colonne d'ébène. Le dernier récit de Conan écrit par Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 16,
  skin: "parchemin",
  cover: {
    "motif": "cle",
    "color": "#5a0f0f"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1936",
    "text": [
      "Robert E. Howard publie *Clous rouges* en trois livraisons, de juillet à octobre 1936, dans *Weird Tales*, une revue américaine de récits étranges. C'est le dernier récit de Conan qu'il a écrit ; il est mort en juin 1936, à trente ans, avant la fin de la parution. Le récit se passe dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Il est dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, sauf sur deux points. Howard décrit sans cesse les gens par leur couleur de peau, et il glisse des remarques méprisantes sur les « peuples noirs » du Sud, sur le « sang mêlé » des habitants de la ville, et sur les esclaves qui l'auraient bâtie. La traduction a retiré ces hiérarchies : il reste des descriptions de personnes, sans jugement attaché à leur peau. Elle a aussi rendu plus sobres des passages où Howard s'attarde sur la nudité et le corps de ses héroïnes.",
      "Il faut nommer ce que le récit montre. Conan poursuit Valéria de ses avances alors qu'elle le repousse. Valéria fouette une servante ligotée pour la faire parler. Un prince s'empare de Valéria par la force, et une sorcière l'étend sur un autel pour la sacrifier. On raconte des tortures, des massacres, des têtes conservées comme trophées, et des sacrifices humains offerts à un dragon."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "foret", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
