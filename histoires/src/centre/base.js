// « Voyage au centre de la Terre », Jules Verne, 1864 (édition augmentée de 1867) : un livre à lire, sans choix
// (lecture: true). Texte de Verne, domaine public, d'après l'édition numérique d'Ebooks libres et gratuits ; les runes
// du parchemin et la grille du chapitre III suivent la transcription du Project Gutenberg (n° 4791). Les notes de
// l'auteur sont remises entre parenthèses à leur appel. Verne ne donne pas de titres à ses chapitres : ceux des pages
// sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "centre",
  title: "Voyage au centre de la Terre",
  subtitle: "Un roman à lire · Jules Verne, 1864",
  summary: "Hambourg, mai 1863. Le professeur Lidenbrock, minéralogiste génial et colérique, trouve dans un vieux livre islandais un parchemin couvert de runes. Son neveu Axel en perce le secret : un alchimiste du XVIe siècle, Arne Saknussemm, affirme être descendu au centre de la Terre par le cratère d'un volcan d'Islande. Le lendemain, l'oncle boucle ses malles. Avec Hans, un chasseur d'eider taciturne, ils s'enfoncent dans le Sneffels et descendent, galerie après galerie, vers ce que nul n'a jamais vu. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "sf"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "dedale",
    "color": "#5b2a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  narrator: "axel",
  version: 1,
  notice: {
    "title": "Un livre de 1864",
    "reminder": "Ce chapitre décrit un homme fossile avec les idées de 1867 sur les races humaines.",
    "text": [
      "Le roman a paru en 1864 chez Hetzel ; l'édition de 1867, donnée ici, y ajoute les chapitres sur les animaux et les hommes fossiles. Le texte est celui de Verne, sans retouche, avec ses notes, ses mesures en pieds et en lieues, et les instruments de son temps.",
      "La science du livre est celle des années 1860 : on discutait encore pour savoir si le centre de la Terre était brûlant, et l'on venait de découvrir les premiers restes d'hommes préhistoriques. Plusieurs savants que cite le professeur ont existé, comme Humphry Davy ou Boucher de Perthes ; Arne Saknussemm est inventé.",
      "Axel raconte. Les chapitres 32 à 35 reprennent son journal de bord, au présent.",
      "Le regard est celui d'un Européen de ce temps-là : un marchand est appelé « le juif Hevelius », les Islandais sont décrits de haut, et le chapitre 38 range l'homme fossile parmi les races humaines selon les idées de 1867, aujourd'hui abandonnées. Le chapitre 38 s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "hambourg", hour: 13, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
