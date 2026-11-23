// « Les Mille et Une Nuits », contes choisis : un livre à lire, sans choix (lecture: true). Traduction d'Antoine Galland
// (1704-1717), édition Morizot illustrée par Godefroy Durand, domaine public, d'après l'édition numérique du projet Gutenberg.
// Les titres des chapitres et des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "nuits",
  title: "Les Mille et Une Nuits",
  subtitle: "Des contes à lire · traduction d'Antoine Galland, 1704-1717 · contes choisis",
  summary: "Un sultan des Indes, trahi par sa femme, épouse chaque soir une jeune fille et la fait mourir au matin. Scheherazade, la fille de son grand vizir, se présente à son tour, avec un conte qu'elle arrête au lever du jour, juste avant la fin. Viennent le pêcheur et le génie, les trois Calenders, les sept voyages de Sindbad, Aladdin et sa lampe, Ali Baba et les quarante voleurs.",
  tags: [
    "fantasy",
    "aventure",
    "voyage"
  ],
  author: "Antoine Galland (traducteur)",
  lecture: true,
  age: 12,
  skin: "sable",
  cover: {
    "motif": "lune",
    "color": "#4a2a4f"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Des contes traduits en 1704",
    "reminder": "Ce conte a des passages violents.",
    "text": [
      "Antoine Galland, orientaliste français, a publié de 1704 à 1717 les douze volumes des *Mille et Une Nuits*, d'après un manuscrit arabe et des contes qu'on lui avait racontés ; Aladdin et Ali Baba viennent de cette seconde source. Le texte est celui d'un choix de contes paru à Paris chez Morizot au XIXe siècle, illustré par Godefroy Durand, d'après l'édition numérique du projet Gutenberg. Ce choix abrège le récit-cadre et quelques contes. Les nuits de Scheherazade y sont marquées en italique.",
      "Les contes de Galland parlent en hommes de leur temps : quelques personnages y étaient désignés par la couleur de leur peau, et un marchand d'Aladdin par sa religion, pour en faire un fourbe. Ces mots ont été remplacés par le rôle du personnage, et le reste suit Galland. Aladdin et Ali Baba ont été coupés en plusieurs chapitres, aux tournants du conte.",
      "Le récit-cadre raconte des femmes mises à mort chaque matin. Les contes ont des coups de fouet, des mutilations, des mangeurs d'hommes, un enterrement d'un vivant et des voleurs tués. On y possède des esclaves, comme dans bien des pays de ce temps-là."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "palais", hour: 22, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
