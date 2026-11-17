// « Les Premiers Hommes dans la Lune » (The First Men in the Moon), H. G. Wells, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project Gutenberg
// n° 1013, domaine public). Les notes de Wells sont gardées dans le texte, entre parenthèses ; les mesures sont converties
// en mètres et en kilomètres. Les titres des chapitres sont ceux de Wells, traduits.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "premiershommes",
  title: "Les Premiers Hommes dans la Lune",
  subtitle: "Un roman à lire · H. G. Wells, 1901",
  summary: "1899, dans le Kent. Bedford, homme d'affaires ruiné, s'est retiré à Lympne pour écrire une pièce qui doit le renflouer. Chaque soir passe devant son bungalow un petit savant qui bourdonne en marchant : Cavor. Il cherche une substance qui arrêterait la pesanteur, et Bedford y flaire une fortune. Le roman de Wells en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["sf","aventure"],
  author: "H. G. Wells · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#2a3550"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1901",
    "reminder": "Ce chapitre contient des idées de 1901 sur les empires, les peuples ou les femmes, gardées telles que l'auteur les a écrites.",
    "text": [
      "*Les Premiers Hommes dans la Lune* a paru en 1901. La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Wells de près.",
      "Bedford, le narrateur, est un homme de son temps et de son pays, et Wells s'en moque souvent. Ivre, il veut « annexer » la lune au nom du « Fardeau de l'homme blanc », la formule de Kipling qui justifiait alors les empires (chapitre XI). Cavor compare son ignorance à celle d'« un Zoulou à Londres » (chapitre XXIII), parle d'un cerveau de femme « aux dimensions presque masculines » (chapitre XXIV), et présente les Anglo-Saxons comme la partie la plus « influente » de l'humanité (chapitre XXV). Ces passages sont gardés tels quels, et chaque chapitre concerné s'ouvre sur un rappel de cette notice.",
      "Le livre contient aussi des combats où des êtres meurent, et la description d'enfants qu'on déforme pour les adapter à un métier."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "bungalow", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
