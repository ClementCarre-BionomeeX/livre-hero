// « Le Démon de fer » (The Devil in Iron), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en août 1934 (Project Gutenberg n° 42209, domaine public). Les chapitres de Howard sont seulement numérotés ; leurs
// titres, ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "demon",
  title: "Le Démon de fer",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  summary: "Après une nuit d'orage, un pêcheur naufragé sur Xapur, île déserte de la mer de Vilayet, trouve un dôme de pierre verte que la foudre a fendu. Sur la côte, un seigneur hyrkanien prépare un piège pour le chef des kozaks qui ravagent sa frontière : un barbare venu du Nord, nommé Conan. Il lui faut un appât, et une île d'où l'on ne s'échappe pas. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 15,
  skin: "parchemin",
  cover: {
    "motif": "sceau",
    "color": "#24342c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *Le Démon de fer* en août 1934 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est chef des *kozaks*, les bandes des steppes, sur les rives de la mer de Vilayet, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège le portrait d'un pêcheur yuetshi, que Howard décrit presque comme une bête, et une phrase qui juge une femme à la pureté de sa « race ».",
      "C'est un récit violent. Octavia y est une captive, vendue et maltraitée, menacée de torture. Et il faut le dire clairement : à la fin, Conan l'embrasse de force alors qu'elle le repousse, et le récit veut qu'elle finisse par céder. C'était un lieu commun des récits d'aventure du temps ; aujourd'hui, on appelle cela une étreinte imposée."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "dome", hour: 6, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
