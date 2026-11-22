// « Michel Strogoff », Jules Verne, 1876 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes de l'auteur sont remises entre parenthèses
// à leur appel. Les titres des chapitres sont de Verne ; ceux des pages, comme tout ce qui vit dans les tags (gens,
// lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "strogoff",
  title: "Michel Strogoff",
  subtitle: "Un roman à lire · Jules Verne, 1876",
  summary: "Juillet, à Moscou, pendant un bal au palais. Une dépêche arrive : les Tartares ont envahi la Sibérie, le télégraphe est coupé, et le frère du czar est isolé à Irkoutsk, à cinq mille verstes. Un traître, Ivan Ogareff, marche avec les envahisseurs pour le livrer. Il faut qu'une lettre passe. Le czar la confie à un courrier de trente ans, né en Sibérie : Michel Strogoff. Il voyagera sous un faux nom, à travers un pays en guerre, sans jamais dire qui il est, pas même à sa mère s'il la croise en chemin. Le roman de Verne en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "guerre"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "sable",
  cover: {
    "motif": "sceau",
    "color": "#6a3b2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1876",
    "reminder": "Ce chapitre décrit l'armée tartare avec le regard et les mots de 1876.",
    "text": [
      "Le roman a paru en feuilleton dans le *Magasin d'éducation et de récréation*, puis en deux volumes chez Hetzel en 1876. Le texte est celui de Verne, sans retouche, avec ses notes ; ses mesures sont russes (verstes, roubles, kopeks) et l'auteur en donne lui-même l'équivalent.",
      "L'invasion de la Sibérie par les Tartares de Boukhara est inventée, et la géographie, très exacte, est celle d'un lecteur de cartes : Verne n'est jamais allé en Russie. Hetzel, son éditeur, a fait lire le manuscrit à Tourgueniev, et le roman ménage avec soin l'empire des czars, qui était alors l'allié espéré de la France.",
      "Les Tartares, les Kirghis et les peuples d'Asie centrale y sont décrits en barbares, en hordes fanatiques et cruelles, face aux Russes civilisés ; les tsiganes, en voleurs et en espions. C'est le regard d'un Européen de ce temps-là. Le roman parle aussi de guerre, de massacres, de pillage et d'un supplice. Le premier chapitre de la seconde partie s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "moscou", hour: 22, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
