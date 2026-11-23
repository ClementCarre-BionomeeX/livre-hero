// « Impressions de voyage en Suisse », d'Alexandre Dumas (1833-1837) : un livre à lire, sans choix (lecture: true).
// Domaine public, d'après l'édition numérique d'Ebooks libres et gratuits ; les notes des éditeurs sont retirées, deux
// chapitres remis dans l'ordre du voyage, deux mots retouchés (voir la notice). Les titres des chapitres sont de Dumas ;
// ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "suisse",
  title: "Impressions de voyage en Suisse",
  subtitle: "Un livre à lire · récit de voyage · Alexandre Dumas, 1833-1837",
  summary: "Au printemps de 1832, le choléra ravage Paris, et un journal annonce qu'Alexandre Dumas a été fusillé. Le médecin du jeune auteur lui ordonne de changer d'air. Il part pour la Suisse, sac au dos et bâton à la main, avide de glaciers, de légendes et de bonnes tables.",
  tags: [
    "voyage",
    "historique",
    "humour"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "montagne",
    "color": "#3b5a6e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un voyage de 1832",
    "reminder": "Ce chapitre a des passages violents ou tristes.",
    "text": [
      "En 1832, Alexandre Dumas a trente ans et triomphe déjà au théâtre. Il traverse la Suisse de l'été à l'automne, surtout à pied, et en rapporte ces *Impressions de voyage*, parues dans la *Revue des Deux Mondes* puis en volumes de 1833 à 1837 : le premier de ses grands livres de voyage. Il y mêle ce qu'il voit, ce qu'on lui raconte, l'histoire et la légende. Les dialogues sont arrangés, parfois inventés, et le conteur cède volontiers à une bonne histoire, même quand elle est un peu trop belle pour être vraie.",
      "Le texte est celui de Dumas, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes ajoutées par les éditeurs sont retirées ; celles de Dumas restent. Deux chapitres, « Zurich » et « Les muets qui parlent et les aveugles qui lisent », sont remis dans l'ordre du voyage, et la note de Dumas sur Interlaken, qui tient du guide pratique, ferme le livre.",
      "Le regard est celui de 1832. Dumas appelle « crétins » les malades du crétinisme, un mal alors répandu dans certaines vallées des Alpes ; le mot est expliqué au toucher. Deux retouches seulement : un homme de la montagne qu'il traite de « double crétin » devient « un petit homme de la montagne », et le domestique noir d'un Anglais, qu'il désigne par sa couleur, devient « son valet ».",
      "Le livre raconte aussi des meurtres, des batailles, des accidents de montagne, des chasses et des morts violentes, tirés de l'histoire suisse ou de la bouche de ceux que le voyageur rencontre."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "paris", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "P_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
