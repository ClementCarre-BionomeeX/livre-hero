// « Le Docteur Ox », Jules Verne, 1874 : un livre à lire, sans choix (lecture: true). Recueil de quatre récits de
// Jules Verne et d'un récit de son frère Paul, domaine public, d'après l'édition numérisée par le Projet Gutenberg
// (Hetzel). Les titres des chapitres de « Maître Zacharius » et d'« Un hivernage dans les glaces » sont ceux de Verne ;
// ceux du « Docteur Ox », très longs chez Verne, sont de Claude et cités dans les résumés, comme les titres des pages
// et tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "ox",
  title: "Le Docteur Ox",
  subtitle: "Quatre récits de Jules Verne, et une ascension du mont Blanc par son frère Paul · 1874",
  summary: "Un recueil en cinq récits. « Une fantaisie du docteur Ox » : Quiquendone, petite ville flamande si paisible qu'on y met dix ans à prendre une décision, accepte l'offre d'un savant étranger qui veut l'éclairer au gaz, à ses frais. Bientôt, la ville la plus calme du monde change d'humeur. « Maître Zacharius » : à Genève, au temps des premières montres, un vieil horloger de génie, orgueilleux de son œuvre, voit toutes ses horloges s'arrêter l'une après l'autre. « Un drame dans les airs » : un aéronaute, à Francfort, s'élève en ballon avec un passager qu'il n'a pas invité. « Un hivernage dans les glaces » : à Dunkerque, un vieux capitaine part chercher son fils perdu dans les mers du Groenland, avec la fiancée de celui-ci à son bord. Enfin, le récit vrai d'une ascension du mont Blanc en 1871, par Paul Verne. Une comédie, un conte fantastique, deux aventures, un récit de montagne. Le livre en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "humour"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "bouteille",
    "color": "#4a3a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1874",
    "text": [
      "Le volume a paru chez Hetzel en 1874. « Une fantaisie du docteur Ox » était alors toute récente ; « Maître Zacharius », « Un drame dans les airs » et « Un hivernage dans les glaces » datent des débuts de Verne, vingt ans plus tôt, avant ses grands romans. Le dernier récit, l'ascension du mont Blanc, est de son frère Paul Verne, qui l'a vraiment faite en août 1871. Le texte est celui de l'édition de Hetzel, sans retouche, avec son orthographe du temps (« très-beau », « Groënland », « norwégien »). L'avertissement de l'éditeur, qui présente le volume, n'est pas repris.",
      "« Un hivernage dans les glaces » décrit en passant les habitants du Groenland avec le regard d'un Européen de 1855. « Maître Zacharius » est un conte fantastique et religieux. Ces façons de voir sont datées ; le livre les garde telles qu'il les a écrites."
    ],
    "reminder": "Ce chapitre décrit les habitants du Groenland avec le regard d'un Européen de 1855."
  },
  intro: [],
  world: { noFood: true, start: { place: "parloir", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
