// « Robinson Crusoé » (The Life and Strange Surprizing Adventures of Robinson Crusoe), Daniel Defoe, 1719 : un livre à
// lire, sans choix (lecture: true). Texte de Defoe (vers 1660-1731, domaine public), dans la traduction de Petrus Borel
// (Borel et Varenne, 1836, domaine public), d'après la saisie du projet Gutenberg et d'Ebooks libres et gratuits. Les
// titres des chapitres sont ceux de Borel ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés), sont de Claude.
module.exports = {
  id: "robinson",
  title: "Robinson Crusoé",
  subtitle: "Un livre à lire · Daniel Defoe, 1719",
  summary: "Robinson Crusoé, fils d'un bourgeois d'York, veut courir les mers malgré son père. Esclave des Maures, évadé, planteur au Brésil, il s'embarque pour la Guinée et fait naufrage sur une île déserte à l'embouchure de l'Orénoque. Seul survivant, il sauve ce qu'il peut de l'épave, bâtit sa forteresse, apprend à semer, à cuire le pain et l'argile, à apprivoiser les chèvres, et tient le compte de ses jours sur un poteau. Vingt-huit ans passent, avec un perroquet, la peur des cannibales, une trace de pied nu dans le sable, et un jour un compagnon, Vendredi.",
  tags: [
    "aventure",
    "mer",
    "voyage"
  ],
  author: "Daniel Defoe",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2f5a4a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1719",
    "text": [
      "Daniel Defoe publie en 1719 les « Aventures de Robinson Crusoé, écrites par lui-même », sans nom d'auteur, comme le récit vrai d'un marin d'York. Il s'inspire peut-être d'Alexander Selkirk, un matelot écossais qui vécut seul quatre ans sur une île du Pacifique. Le livre a un tel succès que Defoe lui donne la même année une suite, les « Nouvelles aventures », qui ne sont pas reprises ici : ce livre-ci s'arrête où s'arrête la première partie.",
      "Le texte est la traduction de Petrus Borel, poète romantique, parue en 1836 : il voulait rendre Defoe mot pour mot, contre les traductions élégantes et fautives qui couraient depuis un siècle. Sa langue garde l'orthographe de son temps (« appercevoir », « long-temps », « très-grand ») ; on a seulement ramené à « tous » ses « touts » voulus. Ses notes de polémique contre les autres traducteurs ne sont pas reprises ; les notes qui expliquent un mot le sont.",
      "Robinson est un homme de son siècle : il a fait la traite des Noirs, vend le jeune Xury, appelle Vendredi son serviteur et se veut roi de son île. Le livre parle aussi beaucoup de Dieu, de la Providence et de la Bible, que Robinson découvre seul, malade, et qu'il enseigne ensuite à Vendredi. Les cannibales y sont décrits avec horreur, et Robinson se demande longtemps s'il a le droit de les tuer."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "york", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
