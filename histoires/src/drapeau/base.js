// « Face au drapeau », Jules Verne, 1896 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les titres des chapitres
// sont ceux de Verne ; ceux des pages sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots,
// résumés).
module.exports = {
  id: "drapeau",
  title: "Face au drapeau",
  subtitle: "Le Fulgurateur Roch · Jules Verne, 1896",
  summary: "Caroline du Nord, 189… L'inventeur français Thomas Roch, à demi fou de rancune, est enfermé dans une maison de santé avec le secret d'un explosif capable de détruire une flotte entière. Un riche étranger, le comte d'Artigas, demande à visiter l'établissement. Le soir même, l'inventeur et son gardien disparaissent. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "mer"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2f4858"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, puis carnet à la première personne, présent",
  version: 1,
  notice: {
    "title": "Un livre de 1896",
    "text": [
      "Le roman a paru chez Hetzel en 1896. Le texte est celui de Verne, sans retouche. Les Bermudes, la Caroline du Nord et ses villes existent ; l'îlot de Back-Cup, sa caverne et tous les personnages sont inventés. Une grande partie du livre est le carnet que tient l'un d'eux, jour après jour, au présent.",
      "On était alors dans la course aux explosifs : la mélinite, la dynamite, les premiers sous-marins. L'inventeur Eugène Turpin, qui avait mis au point la mélinite, crut se reconnaître dans Thomas Roch et fit un procès à Verne, qui le gagna. Comme souvent à l'époque, Verne range les gens par « races » et prête aux pirates des visages de « sauvages » : ce sont les idées de 1896, que le livre garde telles quelles."
    ],
    "reminder": "Un roman de 1896, avec les idées de son temps sur les « races »."
  },
  intro: [],
  world: { noFood: true, start: { place: "healthful", hour: 14, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
