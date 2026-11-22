// « Sans dessus dessous », Jules Verne, 1889 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (troisième édition Hetzel). Les notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres et des pages sont de Claude (ceux de Verne, très longs, sont cités
// dans les résumés quand ils servent), comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "sansdessus",
  title: "Sans dessus dessous",
  subtitle: "Le Gun-Club veut redresser la Terre · Jules Verne, 1889",
  summary: "Vingt ans après avoir envoyé trois hommes autour de la Lune, les artilleurs du Gun-Club de Baltimore s'ennuient. Une société mystérieuse achète aux enchères le Pôle nord, que personne n'a jamais atteint, sous le nez des délégués furieux de la vieille Europe. Que compte-t-elle en faire ? Le président Barbicane l'annonce devant une salle comble, et le monde entier passe de l'admiration à l'épouvante. Il ne reste qu'un homme pour savoir où et quand : J.-T. Maston, le calculateur au crochet de fer, que rien ne fera parler, pas même la riche veuve qui l'adore. Une satire joyeuse des savants, des journaux et des puissances, en vingt et un chapitres. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "humour",
    "sf"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "globe",
    "color": "#4a3b2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1889",
    "text": [
      "Le roman a paru chez Hetzel en 1889 ; c'est la troisième aventure du Gun-Club, après « De la Terre à la Lune » et « Autour de la Lune ». Le texte est celui de Verne, sans retouche ; les titres des chapitres, très longs chez lui, sont remplacés par des titres courts. Les calculs du livre sont ceux de Verne et de son ami mathématicien Albert Badoureau ; les explorateurs, les journaux et les savants cités ont existé, la Société et ses membres sont inventés.",
      "Verne écrit en 1889 et ses personnages pensent comme on pensait alors. Maston affirme qu'aucune femme ne fera jamais avancer la science, et le livre s'en amuse sans le démentir vraiment. Le domestique noir de Maston est un personnage de farce, et les ouvriers africains du Kilimandjaro sont décrits comme une main-d'œuvre qu'un sultan menace de supplices. Ces façons de voir sont fausses et blessantes ; le livre les garde telles que Verne les a écrites."
    ],
    "reminder": "Ce chapitre parle des femmes ou des Africains avec les préjugés d'un Français de 1889."
  },
  intro: [],
  world: { noFood: true, start: { place: "newpark", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
