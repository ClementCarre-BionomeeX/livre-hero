// « Robur-le-Conquérant », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1886, dans le domaine public (Project Gutenberg n° 5126). La saisie, faite à partir
// d'une reconnaissance de caractères, a été relue et corrigée (fiches/robur_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "robur",
  title: "Robur-le-Conquérant",
  subtitle: "Jules Verne, 1886",
  summary: "Une trompette sonne dans le ciel, au-dessus du Canada, de l'Europe, de la Chine, et le monde entier lève la tête sans comprendre. À Philadelphie, le Weldon-Institute, club de ballonistes, se dispute sur la place de l'hélice quand un inconnu force la porte de la séance : il s'appelle Robur, il affirme que l'avenir appartient au plus lourd que l'air, et il se fait chasser aux cris de la salle. La nuit même, le président et le secrétaire du club disparaissent de Fairmont-Park. Un roman de Jules Verne, en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "sf"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "soleil",
    "color": "#1b2a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un roman de 1886",
    "text": [
      "Jules Verne publie *Robur-le-Conquérant* en 1886, dix-sept ans avant le premier vol des frères Wright. La querelle du roman est celle de son temps : le « plus léger que l'air », c'est-à-dire le ballon, contre le « plus lourd que l'air », c'est-à-dire la machine à hélices. Verne cite au passage de vrais inventeurs, de vrais essais et de vrais accidents ; il donne raison à l'hélice.",
      "Le texte est celui de l'édition Hetzel, dans le domaine public. La saisie vient d'une reconnaissance de caractères ancienne : elle a été relue, et les lettres mal lues, les accents perdus et les points de ponctuation égarés ont été corrigés, sans rien changer aux phrases de Verne.",
      "Il faut dire ce que le roman montre. Frycollin, le valet de l'un des deux ballonistes, est noir, et Verne en fait un poltron dont il se moque pendant des pages, avec les mots de 1886 : il l'appelle « le Nègre », il écrit sa peur comme une infirmité de nature. Rien de cela n'a été retiré, car c'est le livre tel qu'il a été écrit ; mais c'est bien du racisme ordinaire de l'époque, et non une observation. Le roman montre aussi un roi du Dahomey qui fait massacrer des prisonniers, scène où Verne mêle des faits et des légendes de voyageurs."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "niagara", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
