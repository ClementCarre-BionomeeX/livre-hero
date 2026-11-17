// « Le Maître de Ballantrae » (The Master of Ballantrae), R. L. Stevenson, 1889 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais
// (Project Gutenberg n° 864, domaine public). Les notes de M. Mackellar, que Stevenson renvoie en fin de volume, sont
// remises à leur appel, entre parenthèses ; les notes de vocabulaire sont fondues dans le texte. Les titres des
// chapitres sont ceux de Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags.
module.exports = {
  id: "ballantrae",
  title: "Le Maître de Ballantrae",
  subtitle: "Un roman à lire · R. L. Stevenson, 1889",
  summary: "Écosse, 1745. Le prince Charles Stuart débarque pour reprendre le trône, et la maison de Durrisdeer, sur le rivage du Solway, décide de jouer sur les deux tableaux : un fils partira avec les rebelles, l'autre restera fidèle au roi George. Les deux frères tirent leur sort à pile ou face. Le récit en est fait, des années plus tard, par l'intendant de la famille, Ephraim Mackellar, qui a tout vu. Le roman de Stevenson en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["historique","drame","aventure"],
  added: "2026-11-17",
  author: "R. L. Stevenson · traduction de Claude (2026)",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "sceau",
    "color": "#4a2228"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1889",
    "reminder": "Ce chapitre raconte une suite de meurtres dans les forêts d'Amérique, avec les mots qu'on employait en 1764 pour parler des Indiens.",
    "text": [
      "*Le Maître de Ballantrae* a paru en feuilleton puis en livre en 1889. La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Stevenson de près.",
      "L'histoire court de 1745 à 1764. Elle commence avec le dernier soulèvement des jacobites, les partisans des Stuarts, écrasés à Culloden en 1746, et passe par la mer des pirates, les Indes de la guerre entre Français et Anglais, puis la province de New York et ses forêts. Stevenson y mêle quelques personnages réels, comme Sir William Johnson, chargé des affaires indiennes.",
      "Le récit est fait par M. Mackellar, l'intendant de la famille, qui prend parti dès la première page ; d'autres passages sont tirés des mémoires du chevalier Burke, qui voit les choses tout autrement. Aucun des deux n'est un témoin neutre : c'est au lecteur de faire la part.",
      "Le livre parle de duel, de piraterie, de meurtre et d'une jalousie qui ronge une famille. Les narrateurs emploient les mots de leur temps : « sauvages » pour les Indiens d'Amérique, « Noirs » pour les esclaves d'un marchand, et le chapitre XI raconte des meurtres et des scalps. Ces passages sont gardés tels quels, et le chapitre XI s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "edimbourg", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "C0_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
