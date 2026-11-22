// « Tarzan, l'enfant des singes » (Tarzan of the Apes), Edgar Rice Burroughs, 1912 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1912 (Project
// Gutenberg n° 78, domaine public). Les titres des chapitres sont ceux de Burroughs, traduits (le ch. XXI est renommé) ;
// ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le regard raciste du
// narrateur sur les Africains et sur Esmeralda a été retiré ou adouci ; voir la notice.
module.exports = {
  id: "tarzan",
  title: "Tarzan, l'enfant des singes",
  subtitle: "Un roman à lire · Edgar Rice Burroughs, 1912",
  summary: "En 1888, un jeune lord anglais et sa femme, en route pour une mission en Afrique, sont débarqués par des mutins sur une côte déserte, au bord d'une jungle immense. Un an plus tard, il ne reste dans leur cabane qu'un tout petit enfant, et une guenon qui vient de perdre le sien. Le garçon grandit parmi les grands singes, apprend seul à lire dans les livres de ses parents, devient le plus redoutable chasseur de la forêt, jusqu'au jour où un bateau dépose sur la plage d'autres hommes blancs, et parmi eux une jeune fille de Baltimore. Le roman de Burroughs en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "nature",
    "drame"
  ],
  author: "Edgar Rice Burroughs · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#2f5a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1912",
    "text": [
      "Edgar Rice Burroughs, Américain de Chicago, a trente-six ans et n'a jamais réussi dans rien quand il publie *Tarzan, l'enfant des singes* dans un magazine populaire, en 1912. Il n'a jamais mis les pieds en Afrique. Le succès est immédiat, et Tarzan devient l'un des héros les plus célèbres du siècle. Burroughs est mort en 1950 ; ce premier roman est dans le domaine public.",
      "C'est un roman d'aventure, et il prend de grandes libertés avec la nature : ses « grands singes » ont une langue, des rois et des danses, sa jungle abrite à la fois des lions et des tigres de convention. Il faut le lire comme un conte, la légende d'un enfant sauvage qui devient homme, avec tout ce que l'époque croyait de l'hérédité, de la noblesse et de la « race ».",
      "C'est là que le livre a mal vieilli. Burroughs peignait les Africains du village de Mbonga, et la servante Esmeralda, avec le mépris et les caricatures ordinaires dans l'Amérique de son temps. La traduction, nouvelle, faite pour cette bibliothèque, garde l'histoire entière, y compris la violence des villageois et celle des Blancs, mais elle retire les injures du narrateur, ses descriptions de visages « bestiaux » et les moqueries sur la façon de parler d'Esmeralda. Le livre rappelle aussi, ce qu'on oublie souvent, que ces villageois ont fui le Congo du roi Léopold II et ses atrocités.",
      "On y tue beaucoup, bêtes et hommes ; il y a une mutinerie, un meurtre, une scène de torture abrégée ici, et des marins affamés qui en viennent au pire. Mais le cœur du livre est un garçon qui cherche à savoir qui il est, et une rencontre que rien ne préparait."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "fuwalda", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
