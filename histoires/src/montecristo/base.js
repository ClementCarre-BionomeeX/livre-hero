// « Le Comte de Monte-Cristo », Alexandre Dumas, 1844-1846 : un livre à lire, sans choix (lecture: true). Texte de
// Dumas (avec Auguste Maquet), domaine public, d'après l'édition numérique du projet Gutenberg. Les titres des chapitres
// sont de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "montecristo",
  title: "Le Comte de Monte-Cristo",
  subtitle: "Un roman à lire · Alexandre Dumas, 1844-1846",
  summary: "Marseille, février 1815. Edmond Dantès a dix-neuf ans ; il ramène au port le navire dont il va devenir capitaine, et il épouse demain la belle Catalane qu'il aime. Trois hommes le jalousent, un quatrième a peur de lui. Le soir des fiançailles, on l'arrête. Il passera quatorze ans dans un cachot du château d'If, où un vieux prêtre lui apprendra tout ce qu'un homme peut savoir, et lui confiera le secret d'un trésor. Puis, un jour, à Paris, un homme très riche et très pâle fait son entrée dans le monde.",
  tags: [
    "aventure",
    "intrigue",
    "historique"
  ],
  author: "Alexandre Dumas",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "sceau",
    "color": "#1f3a4a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1844",
    "reminder": "Ce chapitre raconte une mort violente, choisie par celui qui meurt, avec les mots de 1844.",
    "text": [
      "Le roman a paru en feuilleton dans le *Journal des débats*, d'août 1844 à janvier 1846. Dumas l'a écrit avec Auguste Maquet ; l'idée vient d'une affaire réelle, celle du cordonnier Picaud, emprisonné sur une dénonciation et revenu se venger. Le texte est celui de Dumas, sans retouche.",
      "C'est un livre de vengeance. On y empoisonne, on y tue, on y enterre un enfant vivant, on s'y donne la mort ; une jeune femme y a été achetée comme esclave, et le héros fume du hachisch. Les personnages parlent des Juifs, des Orientaux et des femmes avec les préjugés de 1844 ; le lecteur d'aujourd'hui les reconnaîtra au passage."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "marseille", hour: 12, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
