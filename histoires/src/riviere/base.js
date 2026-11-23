// « Au-delà de la rivière Noire » (Beyond the Black River), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai et juin 1935 (Project Gutenberg n° 42254, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "riviere",
  title: "Au-delà de la rivière Noire",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1935",
  summary: "Le Conajohara est une mince bande de forêt que l'Aquilonie a prise aux Pictes, tenue par un fort de rondins au bord de la rivière Noire. Balthus, un jeune homme venu de l'est pour s'y établir, rencontre sur la piste un coureur des bois cimmérien qui vient de tuer un Picte embusqué. Sur l'autre rive, un sorcier a juré de se venger du fort, et les tambours parlent chaque nuit. Un récit de Conan le Cimmérien, de Robert E. Howard, en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "fantastique"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 15,
  skin: "parchemin",
  cover: {
    "motif": "feuille",
    "color": "#1f2b22"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1935",
    "text": [
      "Robert E. Howard publie *Au-delà de la rivière Noire* en mai et juin 1935 dans *Weird Tales*, une revue américaine de récits étranges. Conan y est coureur des bois sur une frontière de colons, dans l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "C'est un récit de frontière, écrit comme les histoires de l'Ouest américain : des colons prennent la terre d'un peuple de la forêt, les Pictes, qui se défend. Le récit dit lui-même qu'on les a chassés « par la tuerie et le massacre », et Conan juge cette colonisation folle ; mais la plupart du temps, on voit les Pictes avec les yeux de colons qui les craignent et les appellent « diables ». La traduction est nouvelle et suit Howard de près. Elle retire une phrase sur la « race blanche » des Pictes et les mots qui opposent sans cesse les « hommes blancs » aux Pictes « à la peau sombre ». Elle garde en revanche, tel quel, le jugement de Howard sur la barbarie qui ferme le récit.",
      "Il faut nommer ce que le récit montre : des têtes coupées, un prisonnier mis en pièces par une bête, des massacres de colons, et un jeune couple tué sur la route, la femme dépouillée de ses vêtements et mutilée."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "piste", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
