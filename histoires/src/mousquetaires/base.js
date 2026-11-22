// « Les Trois Mousquetaires », Alexandre Dumas, 1844 : un livre à lire, sans choix (lecture: true). Texte de Dumas
// (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont
// de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "mousquetaires",
  title: "Les Trois Mousquetaires",
  subtitle: "Un roman à lire · Alexandre Dumas, 1844",
  summary: "Avril 1625. Un jeune Gascon de dix-huit ans monte à Paris sur un cheval jaune, avec quinze écus, une épée et une lettre pour le capitaine des mousquetaires du roi. Le jour même, il provoque en duel trois mousquetaires, Athos, Porthos et Aramis ; le lendemain, il se bat à leurs côtés contre les gardes du cardinal. Puis il y a la reine et ses ferrets de diamants, le cardinal de Richelieu et ses espions, et une femme blonde, belle et terrible, qu'on appelle Milady. Le roman de Dumas en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
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
    "color": "#2f4a7a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1844",
    "reminder": "Ce chapitre décrit un châtiment, une vengeance et une mise à mort avec le regard et les mots de 1844.",
    "text": [
      "Le roman a paru en feuilleton dans *Le Siècle*, de mars à juillet 1844. Dumas l'a écrit avec Auguste Maquet, à partir des *Mémoires de M. d'Artagnan* de Courtilz de Sandras (1700). Le texte est celui de Dumas, sans retouche ; la préface, où il raconte avoir trouvé ces Mémoires à la Bibliothèque royale, fait partie du jeu.",
      "D'Artagnan, Tréville, Richelieu, Louis XIII, Anne d'Autriche, Buckingham, Felton et le siège de La Rochelle ont existé ; Dumas en use librement, comme il l'a dit lui-même : on peut violer l'histoire, à condition de lui faire de beaux enfants.",
      "C'est un livre de duels, de guerre et de vengeance. Les héros battent leurs valets, vivent aux dépens de femmes qu'ils séduisent pour leur argent, et d'Artagnan trompe une femme en se faisant passer pour un autre ; Dumas en rit, et le lecteur d'aujourd'hui peut ne pas en rire. La fin du roman est sombre : un empoisonnement, un procès sans juge, une exécution. Le chapitre « L'homme au manteau rouge » s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "meung", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
