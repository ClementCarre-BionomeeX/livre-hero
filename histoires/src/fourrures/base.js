// « Le Pays des fourrures », Jules Verne, 1873 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place. Les
// titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens,
// lieux, mots, résumés).
module.exports = {
  id: "fourrures",
  title: "Le Pays des fourrures",
  subtitle: "Un fort au bord de la mer polaire · Jules Verne, 1873",
  summary: "Mars 1859, au Fort-Reliance, sur le lac de l'Esclave. La Compagnie de la baie d'Hudson envoie le lieutenant Jasper Hobson fonder un fort au-delà du soixante-dixième parallèle, sur la côte de l'océan Glacial, là où les bêtes à fourrure abondent encore. Avec lui partent une vingtaine de soldats et de femmes, une voyageuse célèbre, Mrs. Paulina Barnett, et un astronome venu de Greenwich pour une éclipse de soleil qu'on ne verra bien que là-haut. Traîneaux, tempêtes, ours et nuit polaire : le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "nature"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#4a6a82"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1873",
    "text": [
      "Le roman a paru en feuilleton dans le Magasin d'éducation et de récréation de Hetzel, puis en deux volumes en 1873. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Ce que Verne raconte de la Compagnie de la baie d'Hudson, des explorateurs et des bêtes du Grand Nord vient des récits de voyage de son temps ; le cœur de l'aventure, lui, est inventé.",
      "Le livre suit des chasseurs de fourrures, et l'on y tue beaucoup de bêtes : renards, martres, morses, ours. Verne le dit lui-même : le capitaine Craventy parle de « massacres » faits « sans discernement », Mrs. Paulina Barnett de « cette coûteuse mode des fourrures », et plus tard on épargne les animaux qu'on n'a plus de raison de tuer.",
      "Les Esquimaux (on dit aujourd'hui les Inuit) et les Indiens sont vus avec les yeux d'un Européen de 1873 : une famille esquimaude est comparée à des phoques, et le narrateur s'étonne qu'une jeune femme mette la main devant sa bouche pour tousser. Le livre fait pourtant d'une jeune Esquimaude, Kalumah, l'une de ses plus belles figures."
    ],
    "reminder": "Dans ce chapitre, une famille esquimaude est comparée à des phoques : c'est le regard d'un Européen de 1873. On dit aujourd'hui les Inuit."
  },
  intro: [],
  world: { noFood: true, start: { place: "reliance", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
