// « Histoire d'un casse-noisette », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas (raccourcis pour VII à X) ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "casse",
  title: "Histoire d'un casse-noisette",
  subtitle: "Un conte à lire · Alexandre Dumas, 1844",
  summary: "Le soir de Noël, à Nuremberg, la petite Marie trouve sous l'arbre un drôle de bonhomme de bois à grosse tête, qui casse les noisettes entre ses mâchoires. Son frère lui brise trois dents ; Marie le soigne. À minuit, dans le salon désert, l'armoire aux joujoux s'éveille et les souris sortent de partout.",
  tags: [
    "fantasy",
    "humour"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 8,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#2a3a5a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un conte de Noël de 1844",
    "text": [
      "*Histoire d'un casse-noisette* a paru en 1844. Dumas y raconte à sa façon un conte allemand d'E. T. A. Hoffmann, *Casse-Noisette et le Roi des souris* (1816), et c'est sa version que Tchaïkovski a mise en musique pour son ballet. Le texte est celui de Dumas, d'après une édition de Gallica numérisée par le projet Gutenberg ; le volume contenait aussi « L'Égoïste » et « Nicolas le philosophe », qui ne sont pas repris ici.",
      "La numérisation avait perdu des lettres accentuées, surtout en fin de ligne : les « à », les « é » et les « où » manquants ont été rétablis, ainsi que quelques coquilles. Les titres des chapitres sont ceux de Dumas ; les quatre chapitres de l'histoire de la princesse Pirlipate portaient de longues phrases en guise de titres, raccourcies ici."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "boudoir", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "P_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
