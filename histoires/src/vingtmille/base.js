// « Vingt mille lieues sous les mers », Jules Verne, 1869-1870 : un livre à lire, sans choix (lecture: true).
// Texte de Verne, domaine public, d'après l'édition numérique illustrée d'Ebooks libres et gratuits (sans les gravures
// ni leurs légendes). Les notes de l'auteur sont remises entre parenthèses à leur appel. Les titres des chapitres sont
// ceux de Verne ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "vingtmille",
  title: "Vingt mille lieues sous les mers",
  subtitle: "Un roman à lire · Jules Verne, 1870",
  summary: "En 1866, un monstre marin plus rapide qu'aucun navire éventre des coques sur toutes les mers du globe. Le professeur Aronnax, du Muséum de Paris, embarque avec son domestique Conseil sur la frégate américaine qui lui donne la chasse, aux côtés de Ned Land, le roi des harponneurs. Le monstre n'est pas un animal : c'est le Nautilus, et son capitaine, qui a rompu avec la terre entière, ne laissera plus partir ceux qui l'ont vu. Commence alors un tour du monde sous les mers. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "mer",
    "sf"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#2f4a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  narrator: "aronnax",
  version: 1,
  notice: {
    "title": "Un livre de 1870",
    "reminder": "Ce chapitre décrit des peuples d'Océanie ou d'Asie avec le regard et les mots d'un Européen de 1870.",
    "text": [
      "Le roman a paru en feuilleton dans le *Magasin d'éducation et de récréation*, puis en deux volumes chez Hetzel en 1869 et 1870. Le texte est celui de Verne, sans retouche, en deux parties, avec ses notes.",
      "Verne écrit avant l'existence des vrais sous-marins : le *Nautilus* mêle la science de son temps à l'imagination. Les longues listes de poissons, de coquillages et de coraux que dresse Aronnax sont celles d'un naturaliste de 1870, avec les noms savants de l'époque, dont certains ont changé depuis.",
      "Le livre raconte des chasses et des massacres d'animaux marins, des naufrages, et des combats où l'on meurt. Il prend le parti des peuples opprimés, mais décrit les habitants des terres lointaines avec le regard d'un Européen de ce temps-là : les Papous y sont des « sauvages », et le mot « nègre » revient quelques fois. Les chapitres 21 et 22 de la première partie et le chapitre 2 de la seconde s'ouvrent sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "newyork", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
