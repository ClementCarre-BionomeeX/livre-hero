// « Croc-Blanc » (White Fang), Jack London, 1906 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1906 (Project Gutenberg
// n° 910, domaine public). La traduction française de Gruyer et Postif (1923) est abrégée : celle-ci suit le roman en entier.
// Les mesures sont converties en mètres, en kilos et en degrés Celsius. Les titres des chapitres sont ceux de London, traduits.
// Tout ce qui n'est pas de London vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "crocblanc",
  title: "Croc-Blanc",
  subtitle: "Un roman à lire · Jack London, 1906",
  summary: "Le Grand Nord canadien, à la fin du XIXe siècle. Dans une tanière au bord d'un ruisseau naît un louveteau gris, fils d'une louve et d'un vieux loup borgne. Le Wild le forme d'abord, avec sa loi : manger ou être mangé. Puis viennent les hommes, leurs feux, leurs gourdins, et toutes les façons qu'ils ont de faire un animal. Le roman de London en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["nature","aventure"],
  added: "2026-11-17",
  author: "Jack London · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "flocon",
    "color": "#3a4a5c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1906",
    "reminder": "Ce chapitre contient des idées de 1906 sur les peuples, ou des combats de chiens, gardés tels que l'auteur les a écrits.",
    "text": [
      "*Croc-Blanc* a paru en 1906, trois ans après *L'Appel de la forêt*, dont il fait le chemin inverse : un loup qui vient vers les hommes. La traduction française de 1923 (Gruyer et Postif) coupe une bonne part du texte ; celle-ci est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit London en entier. Le livre a cinq parties : la piste (chapitres I à III), la naissance dans le Wild (IV à VIII), les dieux du camp indien (IX à XIV), le temps de la haine (XV à XIX) et le maître d'amour (XX à XXV).",
      "London raconte presque tout par les yeux du loup, qui appelle les hommes des « dieux ». Il parle des Indiens comme on le faisait en 1906 : Castor-Gris commerce « en vrai Indien », les femmes du camp sont des « squaws », et quand le loup voit ses premiers hommes blancs, il les prend pour « une race de dieux supérieurs » (chapitre XV). Le marchand de whisky qui ruine Castor-Gris est, lui, peint sans aucune indulgence (chapitre XVI). Ces passages sont gardés tels quels, et chaque chapitre concerné s'ouvre sur un rappel de cette notice.",
      "Le livre est dur avec les bêtes. Les loups tuent pour manger, les hommes battent les chiens, et Croc-Blanc est longtemps un chien de combat qu'on fait se battre à mort pour de l'argent (chapitres XVII et XVIII). London ne cache rien de ces combats, et c'est voulu : il les montre pour qu'on les juge."
    ]
  },
  intro: [],
  lore: {
    "names": {
      "Dehors|Dedans": "Dans le parler du Klondike, le Dehors est le monde du Sud, d'où l'on vient ; le Dedans, le pays de l'or."
    }
  },
  world: { noFood: true, start: { place: "piste", hour: 10, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
