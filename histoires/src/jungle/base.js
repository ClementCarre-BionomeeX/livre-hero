// « Le Livre de la jungle » (The Jungle Book), Rudyard Kipling, 1894 : un livre à lire, sans choix (lecture: true).
// Texte de Kipling (1865-1936, domaine public), dans la traduction de Louis Fabulet et Robert d'Humières (1899, domaine
// public), d'après l'édition d'Ebooks libres et gratuits. Les titres des sept récits sont ceux de Kipling ; ceux des
// pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "jungle",
  title: "Le Livre de la jungle",
  subtitle: "Un livre à lire · Rudyard Kipling, 1894",
  summary: "Un soir très chaud, sur les collines de Seeonee, dans l'Inde, un petit enfant tout nu entre dans la caverne d'une famille de loups : le tigre Shere Khan le chassait. Mère Louve le garde et l'appelle Mowgli, la Grenouille. L'ours Baloo lui apprend la Loi de la Jungle, la panthère Bagheera le protège, et Shere Khan l'attend. Le livre de Kipling en entier : trois récits de Mowgli, puis un phoque blanc dans la mer de Behring, une mangouste dans un jardin, un petit cornac et les éléphants, et les bêtes d'un camp militaire, chaque récit ouvert et fermé par un chant. Sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "nature"
  ],
  author: "Rudyard Kipling",
  lecture: true,
  age: 9,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#2f4a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1894",
    "text": [
      "Kipling, né à Bombay, publie « The Jungle Book » en 1894. Le texte est ici la traduction de Louis Fabulet et Robert d'Humières, parue en 1899 et relue par Kipling ; c'est elle qui a fait de Bagheera une panthère au féminin. Les noms des bêtes viennent souvent de l'hindoustani : Baloo veut dire l'ours, Hathi l'éléphant, Bandar-log le peuple singe.",
      "Le livre réunit sept récits. Les trois premiers suivent Mowgli ; les autres se passent dans la mer de Behring, dans un jardin, dans les montagnes de l'Assam et dans un camp de l'armée des Indes. Chaque récit s'ouvre sur un poème et se termine par un chant, rendus ici en vers.",
      "Le livre est écrit au temps de l'Empire britannique des Indes, et le dernier récit célèbre l'ordre de l'armée de la reine. On y chasse, on y tue, et les phoques y sont assommés pour leur fourrure : la Loi de la Jungle est dure, et Kipling la raconte sans détour."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "caverne", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
