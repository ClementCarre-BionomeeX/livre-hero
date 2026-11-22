// « Deux ans de vacances », Jules Verne, 1888 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition numérique d'Ebooks libres et gratuits ; la préface de l'auteur n'est pas reprise. Les notes
// de l'auteur restent entre parenthèses à leur appel. Verne ne donne pas de titres à ses chapitres : ceux des pages
// sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "deuxans",
  title: "Deux ans de vacances",
  subtitle: "Un roman à lire · Jules Verne, 1888",
  summary: "Mars 1860, en plein Pacifique. Un yacht sans équipage fuit devant la tempête, avec à son bord quinze garçons de huit à quatorze ans, élèves d'une pension d'Auckland, et un jeune mousse. Le *Sloughi* s'échoue sur une côte inconnue. Île ou continent ? Il faut trouver un abri avant l'hiver, chasser, pêcher, apprendre à vivre ensemble, choisir un chef, et s'entendre quand le Français Briant et le fier Doniphan ne peuvent pas se souffrir. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "mer",
    "nature"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 10,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2a4a4d"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1888",
    "reminder": "Ce chapitre traite le mousse Moko avec le regard et les mots de 1888.",
    "text": [
      "Le roman a paru en feuilleton dans le *Magasin d'éducation et de récréation* en 1888, puis en deux volumes chez Hetzel. Le texte est celui de Verne, sans retouche, avec ses notes ; il compte en milles, en pieds et en yards, à l'anglaise, comme ses héros.",
      "Verne dit dans sa préface qu'il a voulu écrire un « pensionnat de Robinsons » : des enfants seuls, qui doivent tout apprendre par eux-mêmes. Service a le *Robinson Crusoé* et le *Robinson suisse* toujours en tête. L'île existe ; son vrai nom se découvre en route.",
      "Le regard est celui d'un Européen de ce temps-là. Moko, le mousse, est appelé « jeune nègre » ; il est courageux et adroit, mais il fait la cuisine et sert les autres sans qu'on lui demande son avis, et au chapitre 18, quand on élit un chef, il n'a pas le droit de voter « en sa qualité de noir ». Le narrateur aime aussi opposer le caractère anglais et le caractère français. Le chapitre 18 s'ouvre sur un rappel de cette notice. On chasse beaucoup dans ce livre, et la fin est violente."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "sloughi", hour: 1, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
