// « Voyages de Gulliver » (Gulliver's Travels), Jonathan Swift, 1726 : un livre à lire, sans choix (lecture: true).
// Texte de Swift (1667-1745, domaine public), dans la traduction de l'abbé Desfontaines (1727, domaine public), revue
// au XIXe siècle, d'après l'édition d'Ebooks libres et gratuits. Les sommaires en italique ouvrent les chapitres de cette
// édition ; les titres des chapitres et des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude.
module.exports = {
  id: "gulliver",
  title: "Voyages de Gulliver",
  subtitle: "Un livre à lire · Jonathan Swift, 1726",
  summary: "Un chirurgien de marine anglais fait naufrage et s'éveille sur une plage, cloué au sol par des centaines de fils : autour de lui s'agite un peuple haut de six pouces. Après Lilliput viennent un pays de géants, une île qui vole, une académie de savants fous, des immortels qu'on plaint, et enfin un pays où les chevaux raisonnent et où les hommes sont des bêtes. Les quatre voyages de Swift en entier, une satire où chaque peuple renvoie un miroir à l'Europe. Sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "voyage",
    "aventure",
    "humour"
  ],
  author: "Jonathan Swift",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#5a3d22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1726",
    "text": [
      "Jonathan Swift, prêtre irlandais et pamphlétaire, publie les « Voyages de Gulliver » en 1726, sans nom d'auteur, comme le récit véritable d'un capitaine de vaisseau. Sous les petits hommes, les géants et les savants fous, il vise les partis, les cours, les guerres et les savants de son temps.",
      "Le texte est la traduction de l'abbé Desfontaines, parue dès 1727 et revue au XIXe siècle. Desfontaines traduit librement : il abrège, adoucit les passages les plus crus, ajoute çà et là ses propres réflexions (sur l'éducation à Lilliput, par exemple) et regroupe quelques chapitres. C'est ainsi que les lecteurs français ont connu Gulliver pendant deux siècles.",
      "La satire est rude, surtout dans le dernier voyage : les hommes y deviennent des bêtes sales et méchantes, et le voyageur finit par ne plus supporter les siens. Les mesures sont celles de l'époque : un pouce vaut 2,7 centimètres, un pied 32 centimètres, une toise près de 2 mètres."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "mer", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
