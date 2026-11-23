// « Le Pilote du Danube », Jules Verne, 1908 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1908, dans le domaine public (Project Gutenberg n° 11484). La seule saisie disponible
// avait perdu ses accents : ils ont été rétablis et relus (fiches/pilote_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "pilote",
  title: "Le Pilote du Danube",
  subtitle: "Jules Verne, 1908",
  summary: "Août 1876. À Sigmaringen, au grand concours de la Ligue Danubienne, un pêcheur hongrois que personne ne connaît rafle les deux premiers prix, puis annonce qu'il va descendre le Danube de sa source à la mer Noire, la ligne à la main, en vivant de sa pêche. Le même soir, on apprend qu'une police est créée sur tout le fleuve pour traquer une bande de pillards que nul n'a jamais vue. Une descente de deux mille huit cents kilomètres, des faux noms, des cachettes et la Bulgarie en révolte : un roman de Jules Verne, en entier, sans choix, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2c3e33"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un roman de 1908",
    "text": [
      "*Le Pilote du Danube* paraît en 1908, trois ans après la mort de Jules Verne. Il en avait laissé un manuscrit, *Le Beau Danube jaune* ; son fils Michel l'a beaucoup remanié avant de le publier, et c'est ce texte remanié que l'on lit ici. Le roman se passe en 1876, l'année où la Bulgarie se soulève contre l'Empire ottoman.",
      "La seule saisie de ce livre que l'on trouve dans le domaine public avait perdu tous ses accents. Ils ont été rétablis mot à mot, en relisant à la main chaque cas où un mot pouvait s'écrire de deux façons (a et à, ou et où, fut et fût, ferme et fermé…). Il peut rester quelques fautes ; les phrases, elles, sont celles du livre.",
      "Il faut dire ce que le roman montre. Deux personnages sont désignés d'abord comme « le juif » : un brocanteur de Vienne présenté comme usurier et receleur, et le pilote d'un bateau de voleurs. C'est un préjugé de l'époque, que le livre reprend sans le discuter. Le roman raconte aussi, d'après un historien de son temps, les massacres commis en Bulgarie au printemps 1876."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "sigmaringen", hour: 9, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
