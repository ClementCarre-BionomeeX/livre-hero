// « P'tit-Bonhomme », Jules Verne, 1893 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1893). Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui
// vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "ptitbonhomme",
  title: "P'tit-Bonhomme",
  subtitle: "Un enfant seul au monde dans l'Irlande pauvre · Jules Verne, 1893",
  summary: "L'Irlande des années 1870, ses fermes ruinées, ses landlords et ses enfants abandonnés. Un petit garçon de trois ans, sans nom, sans famille, qui ne sait de lui-même que son surnom, P'tit-Bonhomme, passe de main en main : un montreur de marionnettes brutal, une école de déguenillés où un grand garçon au bon cœur le protège, une actrice qui le prend pour jouet, une ferme du Kerry où on l'aime enfin. Têtu, honnête, doué pour les chiffres, il refuse la charité et veut gagner sa vie. Le roman suit ses débuts dans l'existence, de trois à quatorze ans, à travers tout le pays, de Galway à Dublin et de Cork à Belfast : un roman d'éducation à la manière de Dickens, et le seul livre de Verne où il n'y a ni voyage extraordinaire ni machine. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "feuille",
    "color": "#3f5a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1893",
    "text": [
      "Le roman a paru chez Hetzel en 1893. Le texte est celui de cette édition, sans retouche ; les titres des chapitres sont ceux de Verne. Les villes, les comtés, les lacs et les troubles agraires de l'Irlande de 1875 à 1886 sont réels ; les familles et la ferme de Kerwan sont inventées.",
      "Le livre montre sans fard la misère des enfants pauvres de ce temps : un enfant battu et enfermé, des écoles sordides, des nourrices qui laissent mourir les petits qu'on leur confie. Il prend parti pour les paysans irlandais contre les grands propriétaires anglais. Le narrateur parle aussi, en passant, de certains groupes avec les mots et les préjugés d'un Français de 1893 (les « juifs d'origine », les plaisanteries sur les « nègres »). Ces façons de voir sont datées et parfois blessantes ; le livre les garde telles qu'il les a écrites.",
      "Grip, le grand garçon de l'école, parle un français populaire qui avale les lettres (« cett' », « d'ssus », « prop' ») : c'est voulu par l'auteur."
    ],
    "reminder": "Ce chapitre montre des enfants maltraités, ou parle de certains groupes avec les mots et les préjugés d'un Français de 1893."
  },
  intro: [],
  world: { noFood: true, start: { place: "westport", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
