// « Les Quarante-Cinq », Alexandre Dumas, 1847-1848 : un livre à lire, sans choix (lecture: true). Texte de Dumas
// (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "quarantecinq",
  title: "Les Quarante-Cinq",
  subtitle: "Un roman à lire · Alexandre Dumas, 1847-1848",
  summary: "Paris, 1585. Henri III n'a pas d'enfants, son frère le duc d'Anjou guerroie en Flandre, et les Guise attendent leur heure. Un matin, à la porte Saint-Antoine, quarante-cinq gentilshommes gascons entrent dans Paris sans savoir qui les a fait venir. Un bourgeois très grand et très curieux les regarde passer, et note tout.",
  tags: [
    "historique",
    "aventure",
    "intrigue"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "ecu",
    "color": "#3a2a1c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1847",
    "reminder": "Ce chapitre raconte une scène de mort violente, avec le regard et les mots de 1847.",
    "text": [
      "*Les Quarante-Cinq* fait suite à *La Reine Margot* et à *La Dame de Monsoreau*, et clôt la trilogie des derniers Valois. Il a paru en feuilleton dans *Le Constitutionnel*, de 1847 à 1848. Dumas l'a écrit avec Auguste Maquet. Le texte est celui de Dumas, tel que l'a numérisé le projet Gutenberg en trois tomes, sans retouche sauf quelques coquilles évidentes ; la note de Dumas est restée à sa place, entre parenthèses.",
      "Henri III, le duc d'Anjou, les Guise, la duchesse de Montpensier, Joyeuse, d'Épernon, le roi de Navarre et la Ligue ont existé, comme le supplice de Salcède, la prise de Cahors et le désastre d'Anvers. Dumas arrange les faits à sa façon.",
      "C'est un livre de complots, de voyages et de vengeance, plein d'esprit, où l'on meurt beaucoup : un supplice en place publique, une bataille, des duels, un meurtre et un empoisonnement."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "saintantoine", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
