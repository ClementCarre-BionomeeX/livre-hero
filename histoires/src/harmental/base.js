// « Le Chevalier d'Harmental », Alexandre Dumas, 1842 : un livre à lire, sans choix (lecture: true). Texte de
// Dumas (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Cette édition ne
// titre pas ses chapitres ; les titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "harmental",
  title: "Le Chevalier d'Harmental",
  subtitle: "Un roman à lire · Alexandre Dumas, 1842",
  summary: "Paris, mars 1718. Un jeune colonel disgracié se bat en duel avec trois amis du régent, puis reçoit d'une main inconnue un rendez-vous au bal de l'Opéra. On lui y propose un autre avenir que sa province. Rue du Temps-Perdu, en face de la mansarde où on le cache, une jeune fille ouvre sa fenêtre.",
  tags: [
    "historique",
    "intrigue",
    "aventure"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "plume",
    "color": "#2f3a4a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1842",
    "reminder": "Ce chapitre montre un combat à mort, avec le regard et les mots de 1842.",
    "text": [
      "*Le Chevalier d'Harmental* a paru en feuilleton en 1841 et en livre en 1842. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg ; cette édition ne donne pas de titres aux chapitres, seulement leur numéro.",
      "La conspiration de Cellamare a eu lieu en 1718 : la duchesse du Maine, l'ambassadeur d'Espagne, Malezieux, Pompadour, Laval, Polignac, le régent, Dubois, la Fillon et Buvat le copiste ont existé. Le chevalier d'Harmental, Bathilde et Roquefinette sont de Dumas.",
      "C'est une comédie d'intrigue et d'amour, dans une Régence galante : on y soupe chez une entremetteuse, on y parle de maîtresses, on s'y bat en duel."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "pontneuf", hour: 8, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
