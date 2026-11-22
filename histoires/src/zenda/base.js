// « Le Prisonnier de Zenda » (The Prisoner of Zenda), Anthony Hope, 1894 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1894 (Project
// Gutenberg n° 95, domaine public). Les titres des chapitres sont ceux de Hope, traduits ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
module.exports = {
  id: "zenda",
  title: "Le Prisonnier de Zenda",
  subtitle: "Un roman à lire · Anthony Hope, 1894",
  summary: "Rudolf Rassendyll, cadet oisif d'une grande famille anglaise, a hérité d'un ancêtre scandaleux le nez long et les cheveux roux des Elphberg, la maison royale de Ruritanie. Il part en curieux assister au couronnement du jeune roi Rudolf V, et rencontre dans la forêt de Zenda un homme qui lui ressemble trait pour trait. Le roman de Hope en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "intrigue",
    "drame"
  ],
  author: "Anthony Hope · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "ecu",
    "color": "#6a2a22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1894",
    "text": [
      "Anthony Hope, avocat londonien, publie *Le Prisonnier de Zenda* en 1894. Le succès est immédiat, et le livre donne son nom à tout un genre : le roman « ruritanien », qui se passe dans un petit royaume d'Europe centrale inventé, plein de châteaux, de complots et de duels. La Ruritanie, Strelsau et Zenda n'existent sur aucune carte.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Hope de près. Rudolf raconte lui-même son histoire, quelques années après, avec l'ironie d'un gentilhomme anglais de son temps.",
      "On s'y bat beaucoup, à l'épée et au revolver, et plusieurs hommes y meurent. Le roman parle aussi d'un amour impossible, et de ce qu'un homme et une femme doivent à leur parole quand le devoir et le cœur tirent chacun de leur côté."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "parklane", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
