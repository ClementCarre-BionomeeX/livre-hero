// « Le Capitaine Paul », Alexandre Dumas, 1838 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Cette édition ne titre pas ses chapitres ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "paul",
  title: "Le Capitaine Paul",
  subtitle: "Un roman à lire · Alexandre Dumas, 1838",
  summary: "Octobre 1779. Une frégate inconnue mouille devant Port-Louis, en Bretagne, et tout le pays se demande qui la commande. Un jeune comte vient y livrer un prisonnier d'État ; le capitaine Paul, marin sans nom au service de l'Amérique, accepte de le conduire à Cayenne. Quelques mois plus tard, le même capitaine frappe à la porte d'un sombre château du Morbihan, où l'on prépare un mariage.",
  tags: [
    "historique",
    "aventure",
    "mer"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#1f3348"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1838",
    "reminder": "Ce chapitre montre un combat naval, avec le regard et les mots de 1838.",
    "text": [
      "*Le Capitaine Paul* a paru en feuilleton dans *le Siècle* en 1838. Le texte est celui de Dumas, sans retouche, tel que l'a numérisé le projet Gutenberg ; cette édition ne donne pas de titres aux chapitres, seulement leur numéro.",
      "Le héros s'inspire de John Paul Jones, le marin écossais qui se battit pour l'indépendance des États-Unis et mourut à Paris en 1793. Le château d'Auray et ses habitants sont de Dumas.",
      "La préface, écrite pour une édition plus tardive, raconte l'histoire du livre et laisse deviner ce que deviennent les personnages : on peut la lire après le roman."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "paris", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
