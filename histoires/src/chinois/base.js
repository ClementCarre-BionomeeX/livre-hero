// « Les Tribulations d'un Chinois en Chine », Jules Verne, 1879 : un livre à lire, sans choix (lecture: true). Texte
// de Verne, domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent à leur
// place. Les titres courts des chapitres, comme ceux des pages, sont de Claude, ainsi que tout ce qui vit dans les
// tags (gens, lieux, mots, résumés).
module.exports = {
  id: "chinois",
  title: "Les Tribulations d'un Chinois en Chine",
  subtitle: "Kin-Fo et la Centenaire · Jules Verne, 1879",
  summary: "Chine, 1879. Kin-Fo a trente et un ans, une immense fortune, un beau yamen à Shang-Haï, une fiancée qu'il aime à Péking, et il s'ennuie. Son vieux maître Wang, le philosophe, lui répète qu'il ne connaîtra le bonheur qu'après avoir connu le malheur. Une lettre arrive, avec huit jours de retard. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "humour"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "sceau",
    "color": "#8a2b22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1879",
    "text": [
      "Le roman a paru en feuilleton dans Le Temps, puis en volume chez Hetzel en 1879. Le texte est celui de Verne, sans retouche ; les titres courts des chapitres sont ajoutés pour s'y retrouver, ceux de Verne étant de longues phrases. Les villes, les fleuves et la Grande Muraille existent ; les personnages sont inventés. La révolte des Taï-ping, dont parle le livre, a vraiment eu lieu : elle a ravagé la Chine de 1851 à 1864.",
      "Verne n'est jamais allé en Chine. Il l'a connue par les récits de voyageurs, qu'il cite, et il en parle avec les mots et les idées des Européens de son temps : il classe les gens par « races » et par couleur de peau, se moque des coutumes qu'il trouve bizarres et fait du valet Soun une caricature. Ce sont les préjugés de 1879, que le livre garde tels quels."
    ],
    "reminder": "Un roman de 1879, avec les préjugés de son temps sur la Chine."
  },
  intro: [],
  world: { noFood: true, start: { place: "canton", hour: 21, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
