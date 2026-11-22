// « Le Château des Carpathes », Jules Verne, 1892 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses
// à leur place. Les chapitres de Verne n'ont pas de titre ; les titres des pages sont de Claude, comme tout ce qui vit
// dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "carpathes",
  title: "Le Château des Carpathes",
  subtitle: "Un roman à lire · Jules Verne, 1892",
  summary: "Transylvanie, au pied du Retyezat. Au-dessus du village de Werst, un vieux burg abandonné depuis des années, que tout le pays croit hanté. Un soir de mai, le berger Frik voit dans une lunette de colporteur une fumée sortir du donjon. Il faut que quelqu'un aille voir. Un forestier s'y décide, et un docteur de village qui s'est trop vanté doit le suivre. Le roman en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "drame"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#3b2f3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1892",
    "text": [
      "Le roman a paru en feuilleton en 1892, puis chez Hetzel la même année. Le texte est celui de Verne, sans retouche ; ses chapitres n'ont pas de titre, seulement un numéro. Les quelques notes de l'auteur restent entre parenthèses.",
      "La Transylvanie, ses villages, ses montagnes et ses croyances sont décrits d'après les voyageurs du temps. Le téléphone et le phonographe venaient d'être inventés quand Verne écrivait, et ils tiennent leur place dans l'histoire.",
      "Le regard est celui d'un Français de 1892 : l'aubergiste et le colporteur sont décrits par leur origine juive, avec les clichés de l'époque."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "paturage", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
