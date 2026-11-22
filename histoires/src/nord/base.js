// « Nord contre Sud », Jules Verne, 1887 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place. Les
// titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens,
// lieux, mots, résumés).
module.exports = {
  id: "nord",
  title: "Nord contre Sud",
  subtitle: "Une famille dans la guerre de Sécession · Jules Verne, 1887",
  summary: "Floride, février 1862. La guerre de Sécession approche des rives du Saint-John. James Burbank, planteur venu du Nord et ennemi de l'esclavage, vit à Camdless-Bay avec les siens pendant que son fils sert dans la flotte fédérale. En face, à Jacksonville, l'Espagnol Texar soulève la populace contre lui, et cet homme qu'on accuse de tous les crimes a toujours un alibi. Le roman en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "guerre",
    "historique"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#34405a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1887",
    "text": [
      "Le roman a paru en feuilleton en 1887, puis chez Hetzel la même année, en deux parties. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Plusieurs chapitres racontent la guerre de Sécession elle-même, bataille après bataille : Verne cite l'histoire de cette guerre écrite par le comte de Paris.",
      "Le sujet du livre est l'esclavage, et Verne est du côté de ceux qui le combattent : son héros affranchit ses esclaves, et le livre finit sur l'abolition. Il écrit pourtant avec les mots et les regards de son temps : « Nègres », « métisse », « mulâtres », « négrillons », des esclaves décrits comme « à demi abrutis », et un jeune serviteur noir, Pygmalion, qui est surtout là pour faire rire.",
      "Le régisseur Perry soutient que les noirs sont faits pour être esclaves ; Zermah lui répond, et le livre lui donne tort. Les Indiens séminoles, eux, sont vus avec les yeux d'un Européen de 1887."
    ],
    "reminder": "Dans ce chapitre, le régisseur Perry dit que les noirs sont faits pour être esclaves : le livre lui donne tort. Les mots pour parler des noirs sont ceux de 1887."
  },
  intro: [],
  world: { noFood: true, start: { place: "picolata", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
