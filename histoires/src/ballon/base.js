// « Cinq semaines en ballon », Jules Verne, 1863 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérique illustrée d'Ebooks libres et gratuits ; les gravures sont retirées, et le
// sommaire que Verne met en tête de chaque chapitre est gardé, en italique. Les notes de l'auteur restent entre
// parenthèses à leur appel. Les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés).
module.exports = {
  id: "ballon",
  title: "Cinq semaines en ballon",
  subtitle: "Un roman à lire · Jules Verne, 1863",
  summary: "Londres, janvier 1862. Devant la Société royale de géographie, le docteur Samuel Fergusson annonce qu'il traversera l'Afrique d'est en ouest, par les airs, là où aucun explorateur n'a pu passer à pied. Son ballon, le *Victoria*, a un secret : il monte et descend sans perdre ni gaz ni lest. Son ami Dick Kennedy, chasseur écossais, jure qu'il ne partira pas ; son domestique Joe a déjà bouclé les malles. De Zanzibar au Sénégal, les vents, les orages, la soif et les hommes. Le premier roman de Verne, en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "globe",
    "color": "#4f3a22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1863",
    "reminder": "Ce chapitre parle des Africains avec le regard et les mots de 1863.",
    "text": [
      "C'est le premier roman de Jules Verne, paru chez Hetzel en janvier 1863. Le texte est celui de Verne, sans retouche, avec ses notes et le sommaire qu'il place en tête de chaque chapitre. Les mesures sont anglaises (pieds, milles, livres, degrés Fahrenheit), et l'auteur en donne souvent l'équivalent.",
      "Le voyage est inventé, mais l'Afrique qu'il survole est celle des explorateurs de ce temps-là : Barth, Burton, Speke, Livingstone, Mungo Park, René Caillié ont existé, et le livre raconte leurs expéditions. En 1862, les sources du Nil faisaient encore débat ; la machine du docteur Fergusson, elle, n'a jamais existé.",
      "Le regard est celui d'un Européen de 1863, convaincu que l'Afrique attend la civilisation de l'Europe. Les Africains y sont presque toujours des « sauvages », des « nègres » ou pire, et le livre parle de guerres, de massacres, de cannibalisme et d'esclavage sans s'arrêter sur les personnes. Les héros chassent beaucoup, l'éléphant compris. Le chapitre 19 s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "londres", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
