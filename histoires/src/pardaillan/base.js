// « Les Pardaillan », Michel Zévaco, 1902 : un livre à lire, sans choix (lecture: true). Texte de Zévaco, domaine public,
// d'après l'édition du projet Gutenberg (les deux premiers tomes, « Les Pardaillan » et « L'Épopée d'amour »). Les titres
// des chapitres sont de Zévaco ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "pardaillan",
  title: "Les Pardaillan",
  subtitle: "Un roman à lire · Michel Zévaco, 1902",
  summary: "1553, dans la vallée de Montmorency. Jeanne de Piennes épouse en secret François de Montmorency, la nuit même où il part pour la guerre ; Henri, son frère, la convoite et ne pardonne pas. Dix-huit ans plus tard, à Paris, à la veille de la Saint-Barthélemy, un jeune chevalier sans le sou, Jean de Pardaillan, guette à la fenêtre d'en face une jeune fille qui brode avec sa mère, la Dame en noir. Il a pour tout bien un cheval, un chien, une épée, et les conseils d'un père qui s'y connaît en mauvais coups. Les deux premiers tomes de la saga, qui forment une seule histoire.",
  tags: [
    "aventure",
    "historique",
    "intrigue"
  ],
  author: "Michel Zévaco",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "sceau",
    "color": "#6b1d24"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1902",
    "reminder": "Ce chapitre ouvre le massacre de la Saint-Barthélemy, tel que Zévaco le racontait en 1902 : la suite du livre est faite de tueries.",
    "text": [
      "Michel Zévaco a publié « Les Pardaillan » en feuilleton à partir de 1902, puis en volumes ; ce livre réunit les deux premiers, « Les Pardaillan » et « L'Épopée d'amour », qui racontent une seule histoire. Catherine de Médicis, Charles IX, Marie Touchet, Coligny, Guise, Ramus, Ruggieri et les deux frères Montmorency ont existé, comme le mariage secret de François de Montmorency et de Jeanne de Piennes, que le pape fit casser ; les Pardaillan sont de Zévaco. Le texte est celui de l'auteur, sans retouche.",
      "C'est un roman de cape et d'épée qui finit dans le massacre de la Saint-Barthélemy. On y torture, on y empoisonne, on s'y tue de sa propre main ; les rues de Paris s'emplissent de cadavres, et Zévaco ne détourne pas les yeux. Il hait les fanatiques, et noircit Catherine de Médicis, les moines et la cour plus que les historiens ; les filles de la reine, les ribaudes et le juif Isaac Ruben sont peints avec les idées et les mots de 1902."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "margency", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
