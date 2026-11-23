// « Ombres au clair de lune » (Shadows in the Moonlight), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en avril 1934 (Project Gutenberg n° 42188, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "ombres",
  title: "Ombres au clair de lune",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  summary: "Sur le Vilayet, mer intérieure d'un âge oublié, Olivia fuit à cheval à travers les roseaux le seigneur hyrkanien qui la tient captive. Il la rattrape au bord de l'eau, quand un homme surgit des roseaux, l'épée à la main : un barbare venu du Nord, seul survivant d'une bande que ce même seigneur a fait massacrer. Ensemble, ils prennent la mer et abordent une île qu'on dit déserte, où un perroquet crie des mots que personne ne comprend. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "lune",
    "color": "#22303f"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard, jeune Texan qui vit de sa plume, publie *Ombres au clair de lune* en avril 1934 dans *Weird Tales*, une revue populaire de récits étranges. C'est l'une des aventures de Conan le Cimmérien, qu'il a inventé deux ans plus tôt. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "Conan vit dans un âge imaginaire que Howard place très loin avant l'histoire connue, l'« âge hyborien » : des royaumes inventés, comme l'Ophir, le Koth ou le Touran, des dieux inventés, comme Crom ou Mitra, et une mer intérieure, le Vilayet. Chaque récit se lit seul.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près, dans son style rapide et chargé. Elle adoucit une injure et retire deux comparaisons qui jugent des peuples par la couleur de leur peau, ordinaires dans les revues américaines du temps.",
      "C'est un récit violent. Un homme y est tué avec acharnement, on y torture un captif en rêve, des pirates y meurent en grand nombre. Olivia a été vendue par son père et retenue captive par un seigneur qui l'a humiliée ; le récit le dit sans détails, mais il le dit."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "roseaux", hour: 16, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
