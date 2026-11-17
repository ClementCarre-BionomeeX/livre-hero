// « L'Île du docteur Moreau » (The Island of Doctor Moreau), H. G. Wells, 1896 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1896 (Project Gutenberg
// n° 159, domaine public). Les notes de bas de page de Wells sont gardées dans le texte, entre parenthèses ou crochets.
// Les titres des chapitres sont ceux de Wells, traduits.
// Tout ce qui n'est pas de Wells vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "ilemoreau",
  title: "L'Île du docteur Moreau",
  subtitle: "Un roman à lire · H. G. Wells, 1896",
  summary: "1887, dans le Pacifique. Seul rescapé d'un naufrage, Edward Prendick est recueilli par une goélette qui transporte un puma, des chiens, des lapins, un homme nommé Montgomery et un domestique au visage étrange. On le débarque, contre son gré, sur une petite île volcanique où vit, loin de tout, un savant chassé d'Angleterre : le docteur Moreau. Le roman de Wells en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["sf","fantastique"],
  author: "H. G. Wells · traduction de Claude (2026)",
  lecture: true,
  age: 14,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2f4a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1896",
    "reminder": "Ce chapitre contient des descriptions de 1896 fondées sur l'idée de « types » humains, gardées telles que l'auteur les a écrites.",
    "text": [
      "*L'Île du docteur Moreau* a paru en 1896. La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Wells de près.",
      "Le livre décrit des visages et des corps en les rapprochant de « types » humains : un visage « aux traits négroïdes » (chapitre VI), un « type négroïde » (chapitre XIV), des marins « aux sangs mêlés » (chapitre XV), une expression « comme le type juif le plus grossier » (chapitre XVI). Ces comparaisons reposent sur l'idée, répandue en 1896 et démentie depuis, d'une hiérarchie naturelle entre les peuples.",
      "Ces passages sont gardés tels quels. Chaque chapitre concerné s'ouvre sur un rappel de cette notice.",
      "Le livre est dur : expériences sur des animaux vivants, douleur, violence, morts. Il s'adresse à des lecteurs prêts à le lire."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "youyou", hour: 12, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "INTRO_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
