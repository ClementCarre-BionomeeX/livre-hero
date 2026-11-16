// « La Machine à explorer le temps » (The Time Machine), H. G. Wells, 1895 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1895 (Project Gutenberg
// n° 35, domaine public). La traduction d'Henry-D. Davray (1899) reste introuvable en ligne sous une forme réutilisable.
// Les titres des chapitres sont ajoutés (le texte anglais n'en a pas). La note de l'éditeur du chapitre VIII est gardée.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "machinetemps",
  title: "La Machine à explorer le temps",
  subtitle: "Un roman à lire · H. G. Wells, 1895",
  summary: "Richmond, un jeudi soir. Autour de la cheminée, un savant que ses amis appellent le Voyageur du Temps leur explique que le temps est une dimension comme les autres, où l'on peut se déplacer. Il leur montre une petite machine de cuivre et d'ivoire, puis celle, grandeur nature, qui attend dans son laboratoire. Une semaine plus tard, il arrive au dîner en retard, boitant, couvert de poussière, et commence son récit. Le roman de Wells en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  author: "H. G. Wells · traduction de Claude (2026)",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "etoile",
    "color": "#3b3352"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1895",
    "reminder": "Ce chapitre contient un mot et une comparaison de 1895 sur les Africains, gardés tels que l'auteur les a écrits.",
    "text": [
      "*La Machine à explorer le temps* a paru en 1895 ; c'est le premier roman de Wells. La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Wells de près.",
      "Au chapitre V, le Voyageur compare son désarroi à celui d'un Africain qui découvrirait Londres, et il emploie le mot « nègre », courant à l'époque. La comparaison repose sur l'idée, répandue en 1895 et démentie depuis, d'un écart naturel entre les peuples.",
      "Ce passage est gardé tel quel. Le chapitre concerné s'ouvre sur un rappel de cette notice.",
      "Le livre contient aussi des scènes de violence et de peur."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "salon", hour: 20, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
