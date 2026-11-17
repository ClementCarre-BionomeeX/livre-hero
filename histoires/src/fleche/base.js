// « La Flèche noire » (The Black Arrow), R. L. Stevenson, 1888 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction de P.-G. La Chesnais (Mercure de France, 1901), transcrite par le Project Gutenberg (n° 70065,
// d'après Gallica ; domaine public). Texte gardé tel quel, sauf la typographie (« À » accentué, les vers en italique)
// et les deux notes de Stevenson, remises entre parenthèses à la fin du paragraphe qui les appelle.
// Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "fleche",
  title: "La Flèche noire",
  subtitle: "Un roman à lire · R. L. Stevenson, 1888",
  summary: "Angleterre, au temps de la guerre des Deux-Roses. Dans le hameau de Tunstall, un vieil archer tombe, frappé d'une flèche noire, et l'on trouve clouée sur la porte de l'église une menace en vers contre Sir Daniel Brackley, le seigneur du lieu, et ses hommes. Dick Shelton, le pupille de Sir Daniel, a près de dix-huit ans ; il ne sait pas encore ce qu'on raconte de la mort de son père, ni qui est le garçon effrayé qu'il va aider à fuir à travers les marais. Le roman de Stevenson en entier, dans la traduction de P.-G. La Chesnais, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  author: "R. L. Stevenson · traduction de P.-G. La Chesnais (1901)",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "ecu",
    "color": "#2c3a2a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1888",
    "text": [
      "*La Flèche noire* a paru en feuilleton en 1883, puis en livre en 1888. Le roman est donné ici en entier, dans la traduction française de P.-G. La Chesnais, publiée en 1901.",
      "L'histoire se passe au XVe siècle, pendant la guerre des Deux-Roses, qui oppose pour la couronne d'Angleterre la maison de Lancastre à celle d'York. Elle raconte des combats, des embuscades, des pendaisons et une ville mise à sac.",
      "Stevenson prend des libertés avec l'histoire : il le dit lui-même dans deux notes, gardées dans le texte."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "tunstall", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "P_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
