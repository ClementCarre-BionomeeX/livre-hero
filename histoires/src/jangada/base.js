// « La Jangada », Jules Verne, 1881 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place, et le
// document chiffré est donné ligne à ligne comme dans l'édition. Les titres des chapitres sont ceux de Verne ; les titres
// des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "jangada",
  title: "La Jangada",
  subtitle: "Huit cents lieues sur l'Amazone · Jules Verne, 1881",
  summary: "Pérou, mai 1852. Dans la forêt, près du Haut-Amazone, un aventurier relit un document écrit en lettres sans suite, qui doit faire sa fortune. Non loin de là, à la fazenda d'Iquitos, Joam Garral, un riche fermier silencieux, consent enfin à conduire les siens jusqu'à Bélem pour y marier sa fille. Toute la maison descendra le fleuve sur un radeau grand comme un village : la jangada. Le roman en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "feuille",
    "color": "#2f4a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1881",
    "text": [
      "Le roman a paru en feuilleton en 1881, puis chez Hetzel la même année, en deux parties que Verne appelle des épisodes. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Le document chiffré est imprimé tel qu'il est dans le livre : on peut essayer de le lire avant les personnages.",
      "L'histoire se passe en 1852 au Pérou et au Brésil, où l'esclavage existait encore : le Brésil ne l'a aboli qu'en 1888. L'un des personnages a été chasseur d'esclaves en fuite, et les serviteurs noirs de la fazenda, si bien traités soient-ils dans le livre, ne sont pas libres. Verne écrit qu'au Brésil les esclaves ont toujours été traités avec douceur : c'est le regard d'un Européen de 1881, que l'histoire a démenti.",
      "On y lit aussi les mots de l'époque, comme « nègre », « négresse » ou « mulâtresse », et des jugements rapides sur les Indiens du fleuve."
    ],
    "reminder": "Dans ce chapitre, les serviteurs noirs de la fazenda sont encore esclaves, en 1852. Verne dit qu'ils sont traités avec douceur : c'est son regard d'Européen de 1881."
  },
  intro: [],
  world: { noFood: true, start: { place: "foret", hour: 14, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "I1_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
