// « Kéraban-le-Têtu », Jules Verne, 1883 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Distributed Proofreaders). Les notes de l'auteur restent
// entre parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
module.exports = {
  id: "keraban",
  title: "Kéraban-le-Têtu",
  subtitle: "Le tour de la mer Noire pour ne pas payer dix paras · Jules Verne, 1883",
  summary: "Constantinople, août 1882, en plein Ramadan. Le gouvernement vient de taxer de dix paras chaque passage en caïque sur le Bosphore. Le seigneur Kéraban, riche marchand de tabac et Vieux Turc plus entêté qu'une mule, refuse de payer : il ira dîner chez lui à Scutari, de l'autre côté du détroit, mais par la terre, en faisant le tour de la mer Noire. Son ami hollandais Van Mitten, qui n'a jamais su dire non, monte dans la chaise de poste avec lui. Six semaines de route, un mariage qui attend, et quelqu'un qui épie. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "humour"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "lune",
    "color": "#8c3b2e"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1883",
    "text": [
      "Le roman a paru en feuilleton dans Le Temps, puis en deux volumes chez Hetzel en 1883. Verne en a aussi tiré une pièce de théâtre. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Les villes, les routes et les fleuves du tour de la mer Noire existent ; les personnages sont inventés.",
      "C'est une comédie, et Verne s'y amuse des peuples qu'il traverse comme un Parisien de 1883 : le Turc entêté, le Hollandais flegmatique, la Kurde terrible, la jeune « Zingare » gaie et dévouée. Ce sont des types de théâtre, pas des portraits ; on les lit aujourd'hui pour ce qu'ils disent de leur auteur autant que des pays.",
      "On y enlève une jeune fille pour la vendre au harem d'un riche seigneur, comme Verne dit que cela se faisait encore sur les côtes de la mer Noire. Le livre n'en montre rien de cru, mais il en fait le ressort de l'intrigue."
    ],
    "reminder": "Ce chapitre parle des peuples du tour de la mer Noire avec les yeux et les clichés d'un Français de 1883."
  },
  intro: [],
  world: { noFood: true, start: { place: "tophane", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
