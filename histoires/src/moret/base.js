// « Le Comte de Moret », Alexandre Dumas, vers 1866 : un livre à lire, sans choix (lecture: true). Texte de Dumas,
// domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres sont ceux de Dumas ; les
// titres des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "moret",
  title: "Le Comte de Moret",
  subtitle: "Un roman à lire · Alexandre Dumas, 1866",
  summary: "Paris, décembre 1628. Dans une auberge du Marais, un gentilhomme bossu paie un spadassin pour tuer le comte de Moret, fils naturel de Henri IV, qui revient d'Italie avec des lettres pour les reines. Autour du cardinal de Richelieu, de Louis XIII et de leur cour, on conspire, on espionne, on déchiffre, avant de partir en plein hiver forcer les passages des Alpes.",
  tags: [
    "historique",
    "aventure"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "plume",
    "color": "#6b1f24"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1866, resté inachevé",
    "reminder": "Ce chapitre montre des scènes cruelles, avec le regard et les mots de 1866.",
    "text": [
      "Dumas a écrit *Le Comte de Moret* vers 1865 et 1866 ; on le connaît aussi sous le titre *Le Sphinx rouge*. Le texte est celui de Dumas, sans retouche, d'après l'édition du *Messager franco-américain* numérisée par le projet Gutenberg.",
      "Dumas n'a pas achevé ce roman : le récit s'arrête au milieu de l'intrigue, sur l'arrivée d'un personnage à la cour.",
      "Presque tous les personnages ont existé : Richelieu, Louis XIII, les deux reines, Gaston d'Orléans, Antoine de Bourbon, comte de Moret, et bien d'autres. Dumas mêle à l'histoire des chapitres entiers d'histoire, qu'on peut lire ou survoler.",
      "Le livre parle avec la liberté de son temps des amours de la cour et des favoris du roi. Certaines scènes sont dures : l'assassinat de Henri IV et le supplice de Ravaillac racontés par un témoin, une femme murée vivante, des pendaisons, la peste de Lyon."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "barbe", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
