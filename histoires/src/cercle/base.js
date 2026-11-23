// « Le Peuple du Cercle noir » (The People of the Black Circle), Robert E. Howard, 1934 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru
// dans Weird Tales de septembre à novembre 1934 (Project Gutenberg n° 42259, domaine public). Les titres des chapitres
// sont ceux de Howard ; ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "cercle",
  title: "Le Peuple du Cercle noir",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1934",
  summary: "Le jeune roi de Vendhya se meurt, et nul poison n'en est la cause : des sorciers tirent son âme hors de son corps, de très loin, depuis une montagne du nord. Sa sœur, la Devi Yasmina, veut venger sa mort. Il lui faut une épée contre la magie, et dans les collines de la frontière, il y a ce chef de tribu venu d'ailleurs, que ses hommes appellent Conan. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 15,
  skin: "parchemin",
  cover: {
    "motif": "montagne",
    "color": "#2c2436"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1934",
    "text": [
      "Robert E. Howard publie *Le Peuple du Cercle noir* en trois parties, de septembre à novembre 1934, dans *Weird Tales*, une revue américaine de récits étranges. Conan y est chef d'une tribu des collines, à la frontière d'un royaume qui ressemble à l'Inde, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège deux passages qui jugent tout un peuple : l'un explique la magie de Khemsa par une prétendue nature des « Orientaux », l'autre prête aux montagnards une haine de l'étranger qui serait propre à leur race.",
      "C'est un récit violent, et il faut nommer ce qu'il contient. Une jeune femme y accuse Conan, à tort, de l'avoir violée ; une vision fait revivre à Yasmina, entre autres souffrances, des viols subis dans des vies passées ; Conan lui donne une claque sur les fesses sans lui demander son avis, et il lui annonce qu'il la gardera, qu'elle le veuille ou non. Le récit présente tout cela comme de la passion. C'était un lieu commun des récits d'aventure du temps ; aujourd'hui, on y voit une emprise."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "ayodhya", hour: 22, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
