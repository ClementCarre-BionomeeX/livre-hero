// « Les Naufragés du Jonathan », Jules Verne, 1909 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1909). Les notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "jonathan",
  title: "Les Naufragés du Jonathan",
  subtitle: "Mille émigrants jetés sur une île du bout du monde · Jules Verne, 1909",
  summary: "Magellanie, 1880. Aux confins de l'Amérique du Sud, entre la Terre de Feu et le cap Horn, vit un homme sans nom que les Indiens appellent le Kaw-djer. Il soigne, il chasse, il n'obéit à personne : il a fui le monde et ses lois. Une nuit de tempête, un clipper chargé de plus de mille émigrants se brise sur les récifs de l'île Hoste. Voilà ces naufragés sans chef, sans navire, sans loi, sur une terre libre, avec des beaux parleurs qui prêchent chacun sa société idéale, des ivrognes, des avares, des enfants, des braves gens. Le Kaw-djer, qui déteste tout pouvoir, va-t-il les laisser se débrouiller ? Un grand roman d'aventure et d'idées sur la liberté et ses limites, en trois parties et trente et un chapitres. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "drame"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2f4a5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1909",
    "text": [
      "Le roman a paru chez Hetzel en 1909, quatre ans après la mort de Jules Verne. Il en avait laissé le manuscrit sous le titre « En Magellanie » ; son fils Michel l'a beaucoup récrit et allongé, et c'est cette version qu'on lit ici. Le texte est celui de l'édition de 1909, sans retouche ; les titres des chapitres sont ceux du livre. Les lieux de la Magellanie existent ; la colonie de l'île Hoste et ses habitants sont inventés.",
      "Le livre parle beaucoup de politique : anarchisme, communisme, autorité, propriété, et le narrateur prend parti. Il décrit les Indiens de la Terre de Feu et de Patagonie avec les mots et le mépris d'un Européen de 1900 (« misérables », « sauvages »). Il montre un ivrogne qui bat sa femme, des émeutes, des meurtres et une guerre. Ces façons de voir sont datées et parfois blessantes ; le livre les garde telles qu'il les a écrites."
    ],
    "reminder": "Ce chapitre parle des Indiens avec les préjugés d'un Européen de 1909, ou montre des violences."
  },
  intro: [],
  world: { noFood: true, start: { place: "terredefeu", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
