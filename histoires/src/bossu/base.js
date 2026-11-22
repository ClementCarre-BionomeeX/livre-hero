// « Le Bossu », Paul Féval, 1857 : un livre à lire, sans choix (lecture: true). Texte de Féval, domaine public,
// d'après l'édition d'Ebooks libres et gratuits. Les titres des chapitres sont de Féval ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "bossu",
  title: "Le Bossu",
  subtitle: "Un roman à lire · Paul Féval, 1857",
  summary: "1699, au pied des Pyrénées. Le duc de Nevers, la plus fine lame du royaume, a épousé en secret la fille d'un vieux marquis jaloux ; une nuit, sous les fenêtres du château de Caylus, des spadassins l'attendent. Un jeune chevau-léger, Henri de Lagardère, qui voulait seulement apprendre sa botte secrète, se bat à ses côtés, voit la main de l'homme qui frappe par-derrière, et s'enfuit avec un enfant dans les bras. Dix-huit ans plus tard, Paris joue sa fortune rue Quincampoix, et un petit bossu loue la niche d'un chien pour trente mille livres.",
  tags: [
    "aventure",
    "historique",
    "intrigue"
  ],
  author: "Paul Féval",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "ecu",
    "color": "#5a2a44"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1857",
    "reminder": "Ce chapitre commence l'amour d'une jeune fille pour l'homme qui l'a élevée depuis le berceau, tel que Féval le racontait en 1857.",
    "text": [
      "Le roman a paru en feuilleton dans *Le Siècle* en 1857, puis en livre ; Féval en a tiré un drame avec Anicet Bourgeois. Le Régent, Law, la rue Quincampoix et la Chambre ardente ont existé ; Lagardère, Nevers et Gonzague sont de Féval. Le texte est celui de l'auteur, sans retouche.",
      "C'est un livre d'épée et de vengeance. On s'y bat beaucoup, on y tue par-derrière, on y empoisonne ; les courtisans de la Régence y boivent avec des filles d'Opéra. Aurore aime l'homme qui l'a élevée depuis le berceau, et il l'épouse : Féval y voit une belle histoire, le lecteur d'aujourd'hui en jugera. Les gitanos y sont peints avec les idées de 1857."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "louron", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
