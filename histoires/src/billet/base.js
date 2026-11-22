// « Un billet de loterie », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). L'unique note de l'auteur
// reste entre parenthèses à sa place. Verne n'a pas titré ses chapitres : leurs titres, comme ceux des pages, sont de
// Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "billet",
  title: "Un billet de loterie",
  subtitle: "Le numéro 9672 · Jules Verne, 1886",
  summary: "Norvège, 1862. Au hameau de Dal, dans le Telemark, dame Hansen tient une auberge avec ses deux enfants : Joël, guide de montagne, et Hulda, fiancée à leur cousin Ole Kamp, parti pêcher la morue sur les bancs de Terre-Neuve. Ole doit rentrer en mai pour le mariage, et ses lettres parlent d'une fortune qu'il rapportera. Mais un voyageur peu aimable vient inspecter l'auberge, et la mère se tait. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "drame",
    "aventure"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 10,
  skin: "parchemin",
  cover: {
    "motif": "bouteille",
    "color": "#3b5f7a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1886",
    "text": [
      "Le roman a paru dans le Magasin d'éducation et de récréation, puis en volume chez Hetzel en 1886. Le texte est celui de Verne, sans retouche ; Verne avait seulement numéroté ses chapitres, et les titres qu'on lit ici sont ajoutés pour s'y retrouver. Les lieux existent : le Telemark, le lac Tinn, la chute du Rjukanfos, le Gousta, Bergen, Christiania (aujourd'hui Oslo). Les personnages sont inventés.",
      "En 1862, la Norvège a sa propre constitution et son parlement, le Storthing, mais elle partage son roi avec la Suède. Verne, qui l'a visitée en 1861, en fait un pays sans crime et sans noblesse, peuplé de gens honnêtes et instruits : c'est une Norvège un peu rêvée."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "auberge", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
