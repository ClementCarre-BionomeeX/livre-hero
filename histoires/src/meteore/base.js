// « La Chasse au météore », Jules Verne, 1908 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1908). Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres et des pages sont de Claude (ceux de Verne, très longs, sont cités dans les
// résumés quand ils servent), comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "meteore",
  title: "La Chasse au météore",
  subtitle: "Deux astronomes amateurs se disputent un bolide · Jules Verne, 1908",
  summary: "Whaston, Virginie. Mr Dean Forsyth, du haut de sa tour, et le docteur Sydney Hudelson, du haut de son donjon, sont deux vieux amis qui fouillent le ciel avec leurs lunettes. Le même matin, à la même minute, chacun aperçoit un bolide qui traverse le ciel, et chacun écrit en secret à un observatoire pour s'en assurer la gloire. Or le neveu de l'un doit épouser la fille de l'autre. Bientôt les journaux s'en mêlent, puis le monde entier, car ce bolide n'est pas tout à fait comme les autres. Une comédie joyeuse sur les savants, la presse, la justice, les diplomates et la folie des foules, avec une servante qui écorche tous les mots et un juge qui marie et démarie avec la même bonne humeur. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "humour"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#3b3a5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1908",
    "text": [
      "Le roman a paru chez Hetzel en 1908, trois ans après la mort de Jules Verne. Il en avait laissé le manuscrit ; son fils Michel l'a retouché et augmenté avant la publication, et c'est cette version qu'on lit ici. Le texte est celui de l'édition de 1908, sans retouche ; les titres des chapitres, très longs chez Verne, sont remplacés par des titres courts. La ville de Whaston est inventée ; les observatoires, les journaux et les savants cités ont existé.",
      "Mitz, la vieille servante de Mr Forsyth, déforme les mots et les expressions (« haut servatoire » pour observatoire, « ami Krone » pour Omicron) : ces fautes sont voulues par l'auteur, et le texte les met en italique."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "proth", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
