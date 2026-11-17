// « L'Île au trésor » (Treasure Island), R. L. Stevenson, 1883 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (Project Gutenberg
// n° 120, domaine public). La dédicace et le poème « À l'acheteur qui hésite » ouvrent le livre ; la note de Stevenson
// au chapitre 21 est remise à son appel, entre parenthèses. Les titres des chapitres sont ceux de Stevenson, traduits ;
// les six parties du roman sont rappelées dans les résumés. Tout ce qui n'est pas de Stevenson vit dans les tags.
module.exports = {
  id: "ile",
  title: "L'Île au trésor",
  subtitle: "Un roman à lire · R. L. Stevenson, 1883",
  summary: "Sur la côte anglaise, vers 1750, un vieux marin balafré vient loger à l'auberge de l'Amiral-Benbow avec un coffre qu'il ne quitte jamais. Il meurt de peur et d'eau-de-vie, et le jeune Jim Hawkins, le fils de l'aubergiste, trouve dans le coffre la carte d'une île où le pirate Flint a enterré son trésor. Le squire Trelawney arme une goélette à Bristol, le docteur Livesey s'embarque, et Jim part comme mousse, avec un cuisinier à une jambe, aimable et serviable, qui s'appelle Long John Silver. Le roman de Stevenson en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: ["aventure","mer"],
  author: "R. L. Stevenson · traduction de Claude (2026)",
  lecture: true,
  age: 11,
  skin: "sable",
  cover: {
    "motif": "etoile",
    "color": "#2f4a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1883",
    "reminder": "Ce chapitre raconte un combat à mort entre Jim et un pirate, sans rien adoucir.",
    "text": [
      "Le roman a paru en feuilleton en 1881 et 1882, puis en livre en 1883 : *L'Île au trésor* est le premier roman de Stevenson. La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Stevenson de près.",
      "L'histoire se passe vers le milieu du XVIIIe siècle, une génération après les grands pirates des Antilles. Stevenson mêle à ses personnages inventés quelques noms réels de ce temps-là, comme le capitaine Kidd, Edward England ou Bartholomew Roberts.",
      "Le livre est en six parties : le vieux boucanier, le cuisinier du bord, mon aventure à terre, la palissade, mon aventure en mer, le capitaine Silver. Jim raconte presque tout ; trois chapitres sont racontés par le docteur Livesey.",
      "Le roman parle de mutinerie, de meurtre et de combats où l'on meurt pour de bon, et les pirates boivent sans mesure. Les marins parlent leur jargon, que la traduction rend par un français populaire. Les gens de couleur y sont nommés avec le regard d'un Anglais de ce temps-là ; la traduction garde ce regard, sans les mots devenus des insultes. Le chapitre 26 s'ouvre sur un rappel de cette notice."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "benbow", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
