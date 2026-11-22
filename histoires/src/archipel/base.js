// « L'Archipel en feu », Jules Verne, 1884 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les notes de l'auteur restent
// entre parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "archipel",
  title: "L'Archipel en feu",
  subtitle: "Pirates et patriotes dans la guerre de l'indépendance grecque · Jules Verne, 1884",
  summary: "Octobre 1827. La Grèce se bat depuis six ans pour son indépendance, et les pirates écument l'Archipel. Un soir, une sacolève entre dans le port de Vitylo, au fond du Magne, et son capitaine monte seul vers une maison abandonnée. À Corfou, un jeune officier français, Henry d'Albaret, s'apprête à épouser la fille d'un banquier silencieux. Puis tout se défait, et la poursuite commence d'île en île, jusqu'au pavillon noir du plus redouté des forbans. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "mer",
    "historique"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2f5d7c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1884",
    "text": [
      "Le roman a paru en feuilleton dans Le Temps, puis en volume chez Hetzel en 1884. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. La guerre de l'indépendance grecque (1821-1829), Navarin, le colonel Fabvier, Bobolina ou Canaris ont existé ; les héros du livre, leur corvette et le pirate Sacratif sont inventés.",
      "Verne est tout entier du côté des Grecs. Les Turcs et les Égyptiens d'Ibrahim n'y paraissent guère que pour massacrer ou vendre des captifs, et les gens du Magne sont décrits comme des « demi-sauvages » vivant du pillage. C'est le regard d'un Français de 1884 sur une guerre que l'Europe entière a suivie avec passion.",
      "Le livre parle beaucoup de la traite des prisonniers : hommes, femmes et enfants vendus aux enchères sur les marchés de l'Archipel et d'Afrique du Nord. Verne la montre sans détour, et c'est là le cœur du roman."
    ],
    "reminder": "Ce chapitre raconte la guerre de l'indépendance grecque avec les yeux d'un Français de 1884 : supplices et massacres y sont nommés sans fard."
  },
  intro: [],
  world: { noFood: true, start: { place: "vitylo", hour: 17, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
