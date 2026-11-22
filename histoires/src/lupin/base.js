// « Arsène Lupin, gentleman-cambrioleur », Maurice Leblanc, 1907 : un livre à lire, sans choix (lecture: true). Texte de
// Leblanc (1864-1941, domaine public), d'après l'édition du projet Gutenberg ; la préface de Jules Claretie n'est pas
// reprise. Les titres des nouvelles sont de Leblanc ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux,
// mots, résumés), sont de Claude.
module.exports = {
  id: "lupin",
  title: "Arsène Lupin, gentleman-cambrioleur",
  subtitle: "Neuf aventures à lire · Maurice Leblanc, 1907",
  summary: "Un paquebot file vers New York quand le télégraphe de bord annonce qu'Arsène Lupin est parmi les passagers, sous un nom qui commence par R. Le cambrioleur que toute la France admire et que la police poursuit en vain vole les bijoux, les tableaux et les secrets des riches, se déguise, se moque des juges, et signe ses coups. Neuf aventures, du transatlantique au château normand, avec le vieil inspecteur Ganimard toujours sur ses talons.",
  tags: [
    "aventure",
    "enquete"
  ],
  author: "Maurice Leblanc",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#1f2a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première et troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1907",
    "text": [
      "Maurice Leblanc a publié les aventures d'Arsène Lupin dans le magazine *Je sais tout* à partir de 1905, puis les a réunies en volume en 1907. Ce livre donne les neuf nouvelles du recueil, dans leur ordre ; chacune se lit seule, mais elles se répondent.",
      "Plusieurs sont racontées par un « je » : tantôt Lupin lui-même, tantôt l'ami qui se fait son historien. On y vole beaucoup et l'on y tue deux fois : une femme est assassinée, un homme se tire une balle.",
      "Le détective anglais de la dernière nouvelle s'appelait d'abord Sherlock Holmès ; Arthur Conan Doyle protesta, et Leblanc le rebaptisa Herlock Sholmès. Une page en garde l'ancien nom."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "provence", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
