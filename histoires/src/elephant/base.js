// « La Tour de l'éléphant » (The Tower of the Elephant), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mars 1933 (Project Gutenberg of Australia, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "elephant",
  title: "La Tour de l'éléphant",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1933",
  summary: "Dans une taverne du Maul, le quartier des voleurs de Zamora, un jeune barbare venu du Nord entend parler d'une tour d'argent où le prêtre Yara garde un joyau, le Cœur de l'Éléphant. Personne n'a jamais pu le voler. Le barbare ne voit pas pourquoi.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#1f2a3d"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1933",
    "reminder": "Ce chapitre montre un être torturé et un cœur arraché.",
    "text": [
      "Robert E. Howard publie *La Tour de l'éléphant* en mars 1933 dans *Weird Tales*, une revue américaine de récits étranges. C'est l'une des toutes premières aventures de Conan : il est encore un jeune voleur, nouveau venu dans les villes civilisées de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle laisse de côté les mots qui désignent des peuples par la couleur de leur peau (les prêtres « au crâne jaune » du Khitaï), et rend par « engeance » ou « peuple » ce que Howard appelle la « race » de Yara.",
      "Il faut nommer ce que le récit montre. Au début, un homme se vante de vendre une jeune fille enlevée ; on se bat au couteau dans le noir. Le dernier chapitre montre un être torturé, puis un cœur arraché."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "maul", hour: 23, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "C1_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
