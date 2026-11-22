// « Le Vagabond des étoiles » (The Star Rover), Jack London, 1915 : un livre à lire, sans choix (lecture: true).
// Texte de London (1876-1916, domaine public), dans la traduction de Paul Gruyer et Louis Postif (Crès, 1925, domaine
// public), d'après la saisie du projet Gutenberg. Les titres des chapitres sont ceux des traducteurs ; ceux des pages,
// comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "vagabond",
  title: "Le Vagabond des étoiles",
  subtitle: "Un livre à lire · Jack London, 1915",
  summary: "Darrell Standing, professeur d'agronomie, purge une peine à vie au bagne de San Quentin pour le meurtre d'un collègue. Accusé d'avoir caché de la dynamite qui n'existe pas, il est jeté au cachot et lacé des jours entiers dans la camisole de force. Un voisin de cellule, qui ne lui parle qu'en frappant au mur, lui apprend à quitter son corps : alors Standing s'en va à travers les étoiles et revit ses vies passées, enfant dans une caravane de pionniers, matelot naufragé en Corée, guerrier du Nord à Jérusalem. Il écrit tout cela dans la cellule des condamnés à mort. Sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "historique",
    "fantastique"
  ],
  author: "Jack London",
  lecture: true,
  age: 15,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#262a3d"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1915",
    "text": [
      "Jack London écrit « The Star Rover » en 1915, un an avant sa mort, d'après les confidences d'Ed Morrell, un vrai détenu de San Quentin qui avait passé cinq ans au cachot et subi la camisole de force. Morrell, Jake Oppenheimer et le capitaine Jamie ont existé ; le livre est aussi un réquisitoire contre les bagnes et la peine de mort.",
      "Le texte est la traduction de Paul Gruyer et Louis Postif, parue en 1925 : avec l'accord de la veuve de London, ils ont allégé certains passages. Leur préface, qui raconte tout le livre jusqu'à sa fin, n'est pas reprise ici ; leurs notes le sont, sauf une, sur Darwin, qui disait faux.",
      "Les vies passées de Standing traversent l'histoire : le massacre des Prairies-des-Montagnes, où une milice mormone et des Indiens tuèrent en 1857 une caravane d'émigrants ; la Corée du XVIIe siècle, d'après le récit du matelot hollandais Hendrik Hamel ; la Jérusalem de Ponce Pilate. Le livre est dur : tortures, massacres, pendaisons, et un narrateur qui tue."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "cellule", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
