// « La Marque des quatre » (The Sign of the Four), Arthur Conan Doyle, 1890 : un livre à lire, sans choix (lecture: true).
// Texte de Conan Doyle (1859-1930, domaine public), dans la traduction française publiée chez Hachette en 1896, d'après
// l'édition du projet Gutenberg. Les titres des chapitres sont ceux de cette traduction ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "quatre",
  title: "La Marque des quatre",
  subtitle: "Un roman à lire · Arthur Conan Doyle, 1890",
  summary: "Londres, un après-midi de septembre. Sherlock Holmes s'ennuie, faute d'un problème à résoudre, et le docteur Watson, son ami, le regarde avec inquiétude. Entre alors miss Mary Morstan, une jeune institutrice : son père a disparu il y a dix ans, un inconnu lui envoie chaque année une perle magnifique, et voici qu'il lui donne rendez-vous le soir même devant un théâtre, avec deux amis si elle le souhaite. Elle propose à Holmes et à Watson de venir.",
  tags: [
    "enquete",
    "aventure"
  ],
  author: "Arthur Conan Doyle",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#3a4a5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1890",
    "text": [
      "« The Sign of the Four » est la deuxième aventure de Sherlock Holmes, publiée en 1890, trois ans après « Une étude en rouge ». Le texte est ici celui d'une traduction française parue chez Hachette en 1896, du vivant de l'auteur, qui l'avait autorisée ; on y lit « livres » et « francs » pour les sommes, et les noms anglais sont parfois francisés, Bartholomé pour Bartholomew, Touga pour Tonga.",
      "Watson raconte. Holmes, pour tromper l'ennui, se pique à la cocaïne au début et à la fin du livre, et Watson le lui reproche : c'était alors un produit vendu en pharmacie, dont on commençait à découvrir les ravages.",
      "La dernière partie se passe aux Indes pendant la révolte de 1857, puis au bagne des îles Andaman. Le récit qu'en fait un ancien soldat anglais parle des Indiens et des insulaires avec les mots et les préjugés de l'époque coloniale."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "bakerstreet", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
