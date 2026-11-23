// « La Reine Margot », Alexandre Dumas, 1845 : un livre à lire, sans choix (lecture: true). Texte de Dumas, domaine
// public, d'après la saisie d'Ebooks libres et gratuits numérisée par le projet Gutenberg. Les titres des chapitres sont
// de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "margot",
  title: "La Reine Margot",
  subtitle: "Un roman à lire · Alexandre Dumas, 1845",
  summary: "Paris, août 1572. Marguerite de Valois, sœur du roi Charles IX, épouse le protestant Henri de Navarre, et l'on croit la paix faite entre catholiques et huguenots. Six jours plus tard vient la nuit de la Saint-Barthélemy. Deux jeunes gentilshommes arrivés le même soir, La Mole et Coconnas, se retrouvent pris dans les complots du Louvre, entre une reine mère qui empoisonne et un roi de Navarre qui sourit et attend.",
  tags: [
    "historique",
    "aventure"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "couronne",
    "color": "#5a1e2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1845",
    "reminder": "Ce chapitre montre un massacre, un poison ou la torture, avec le regard et les mots de 1845.",
    "text": [
      "*La Reine Margot* a paru en feuilleton dans *La Presse*, de 1844 à 1845, l'année même des *Trois Mousquetaires*. Le texte est celui de l'édition en deux parties, sans retouche ; les six notes de Dumas sont restées à leur place, entre parenthèses.",
      "Dumas part de faits réels : le mariage de Marguerite de Valois et de Henri de Navarre, le massacre de la Saint-Barthélemy, la mort de Charles IX. Il les arrange à sa façon, invente des scènes, prête aux gens des paroles qu'ils n'ont jamais dites.",
      "Le livre est violent : la nuit du 24 août, on égorge les protestants dans les rues de Paris, et l'on voit tuer des hommes, des femmes, des vieillards. Il y a aussi des poisons, la torture et des exécutions. Les protestants y sont appelés « parpaillots » ou « hérétiques » : ce sont les injures de l'époque."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "louvre", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
