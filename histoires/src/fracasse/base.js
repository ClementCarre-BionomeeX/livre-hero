// « Le Capitaine Fracasse », Théophile Gautier, 1863 : un livre à lire, sans choix (lecture: true). Texte de Gautier,
// domaine public, d'après l'édition Charpentier de 1913 numérisée par le projet Gutenberg. Les titres des chapitres sont
// de Gautier ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "fracasse",
  title: "Le Capitaine Fracasse",
  subtitle: "Un roman à lire · Théophile Gautier, 1863",
  summary: "Sous Louis XIII, dans les Landes, le jeune baron de Sigognac meurt de faim dans un château en ruine, avec un vieux valet, un chat noir et un chien. Une nuit d'orage, une troupe de comédiens ambulants frappe à sa porte. Il les suit sur les routes, pour l'amour d'une jeune comédienne, Isabelle, et devient lui-même comédien sous un nom de théâtre : le capitaine Fracasse.",
  tags: [
    "historique",
    "aventure"
  ],
  author: "Théophile Gautier",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "plume",
    "color": "#6b3d22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1863",
    "reminder": "Ce chapitre montre un supplice public, celui de la roue, avec le regard et les mots de 1863.",
    "text": [
      "*Le Capitaine Fracasse* a paru en feuilleton dans la *Revue nationale et étrangère*, de 1861 à 1863. Gautier en avait l'idée depuis trente ans. Le texte est celui de l'édition de 1913, sans retouche ; ses gravures, de Gustave Doré, ne sont pas reprises.",
      "Gautier écrit pour le plaisir des mots : des descriptions longues comme des tableaux, des tournures du XVIIe siècle, des noms de la mythologie et du théâtre à chaque page. Le glossaire en explique une partie.",
      "C'est un roman de cape et d'épée : des duels, des bretteurs à gages, un enlèvement, un grand seigneur qui veut prendre de force une femme qui le refuse, et une exécution sur la place de Grève. Çà et là, le livre parle des « juifs » prêteurs d'argent et lance des injures sur la couleur de la peau : ce sont les préjugés de l'époque."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "sigognac", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
