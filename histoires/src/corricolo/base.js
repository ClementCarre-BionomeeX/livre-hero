// « Le Corricolo », d'Alexandre Dumas (1843) : un livre à lire, sans choix (lecture: true). Domaine public, d'après
// l'édition numérique du projet Gutenberg ; les notes de Dumas sont gardées, quelques passages retouchés (voir la notice). Les titres
// des chapitres sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "corricolo",
  title: "Le Corricolo",
  subtitle: "Un livre à lire · récit de voyage · Alexandre Dumas, 1843",
  summary: "Hiver 1835. Revenus de Sicile, Dumas et le peintre Jadin s'installent à Naples et la parcourent en corricolo, la petite voiture qui emporte quinze personnes au galop : ses rues, ses lazzaroni, son roi Nasone, son saint Janvier et son miracle, le Vésuve, Pompéi, les fantômes de Néron et de Masaniello, puis la route de Rome, où la police du pape attend le voyageur.",
  tags: [
    "voyage",
    "historique"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "soleil",
    "color": "#8a4b2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Naples en 1835",
    "reminder": "Ce chapitre a des passages violents ou tristes.",
    "text": [
      "En 1835, Alexandre Dumas parcourt l'Italie avec le peintre Godefroy Jadin. Après le tour de la Sicile, raconté dans *Le Speronare* et *Le Capitaine Aréna*, il passe l'hiver à Naples. *Le Corricolo*, publié en 1843, en est le récit : la ville rue par rue, ses habitants, ses rois, ses saints, ses croyances, les ruines des environs, puis le départ pour Rome. Dumas y mêle ce qu'il voit, ce qu'on lui raconte et l'histoire de Naples depuis les Romains. Les dialogues sont arrangés, et le conteur cède volontiers à une bonne histoire.",
      "Le texte est celui de Dumas, d'après l'édition numérique du projet Gutenberg ; ses notes sont gardées, entre parenthèses, et l'introduction est donnée en préface. Les deux parties du livre se suivent ici, numérotées d'un bout à l'autre. Quelques retouches : au premier chapitre, le cuisinier du pacha, que Dumas décrit par sa couleur de peau comme un objet verni, devient « un grand Nubien » ; au sixième, le prêteur que Dumas appelle « le juif » devient « l'usurier » ; au vingtième, dans un édit de l'empereur Dioclétien, « ce même Christ que les Juifs ont cloué sur une croix » devient « qu'on a cloué sur une croix » ; vers la fin, un petit paysan au teint cuivré, que les voyageurs avaient « pris pour un nègre », est pris pour un Africain, et « juif » au sens de brocanteur rapace devient « brocanteur » ou « rapace ».",
      "Le livre raconte des exécutions, celles de 1799 et d'autres, un duel, le martyre de saint Janvier, des brigands, la mort de Masaniello, les proscriptions de Rome et le meurtre d'Agrippine. Un chapitre montre un seigneur qui abuse de son pouvoir sur une jeune fille pour accorder la grâce de son père ; c'est dit à demi-mot, et suivi d'une vengeance."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "naples", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
