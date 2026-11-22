// « Les Enfants du capitaine Grant », Jules Verne, 1868 : un livre à lire, sans choix (lecture: true). Texte de
// Verne, domaine public, d'après l'édition du Projet Gutenberg (ebook 14163). Trois parties, numérotées comme chez
// Verne. Les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "grant",
  title: "Les Enfants du capitaine Grant",
  subtitle: "Un roman à lire · Jules Verne, 1868",
  summary: "Juillet 1864, au large de Glasgow. Dans le ventre d'un requin, l'équipage du yacht de lord Glenarvan trouve une bouteille, et dans la bouteille un appel au secours à moitié effacé par la mer : le capitaine Grant a fait naufrage, quelque part sur le 37e parallèle. Le gouvernement refuse de le chercher. Lord et lady Glenarvan partent avec ses deux enfants, Mary et Robert, et un géographe français monté à bord par erreur. Les Andes, la pampa, l'Australie, la Nouvelle-Zélande : le tour du monde sur une ligne, à la recherche d'un homme. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "mer"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "bouteille",
    "color": "#2c3c5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1868",
    "reminder": "Ce chapitre parle des aborigènes d'Australie avec le regard et les mots de 1868.",
    "text": [
      "Le roman a paru chez Hetzel de 1867 à 1868, en trois parties : l'Amérique du Sud, l'Australie, l'océan Pacifique. Le texte est celui de Verne, sans retouche ; les mesures sont anglaises (pieds, milles, toises), et les dates du livre ne s'accordent pas toujours entre elles.",
      "Les voyages et les guerres que racontent les personnages ont eu lieu : Magellan, Cook, Burke et Wills, la guerre entre les Maoris et les Anglais. Le capitaine Grant, lui, est inventé, et la carte du livre a ses libertés.",
      "Le regard est celui d'un Européen de 1868. Verne dénonce le sort fait aux aborigènes par les colons anglais, mais il les décrit lui-même comme des êtres « dégradés » et cite sans la contredire une science qui les rapprochait des singes : c'est le chapitre 16 de la deuxième partie, qui s'ouvre sur un rappel de cette notice. Les Indiens de la pampa sont des « sauvages », les Maoris des cannibales, et le livre raconte des massacres, des exécutions d'esclaves et une mise à mort en détail."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "glasgow", hour: 14, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
