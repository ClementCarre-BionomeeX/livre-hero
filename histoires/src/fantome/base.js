// « Le Fantôme de l'Opéra », Gaston Leroux, 1910 : un livre à lire, sans choix (lecture: true). Texte de Leroux
// (1868-1927, domaine public), d'après l'édition du projet Gutenberg ; les notes de l'auteur sont entre parenthèses.
// Les titres des chapitres sont de Leroux ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés), sont de Claude.
module.exports = {
  id: "fantome",
  title: "Le Fantôme de l'Opéra",
  subtitle: "Un roman à lire · Gaston Leroux, 1910",
  summary: "Paris, à la fin du siècle. Depuis des mois, on ne parle à l'Opéra que d'un fantôme en habit noir qui hante les couloirs, des caves aux greniers, et qu'aucun directeur n'ose contrarier. Le soir où les directeurs s'en vont, une petite chanteuse inconnue, Christine Daaé, triomphe à la place de la grande Carlotta, et le jeune vicomte Raoul de Chagny, qui l'a connue enfant au bord de la mer, l'entend parler, seule dans sa loge, à une voix d'homme. Celui qui raconte a retrouvé les papiers d'un témoin, et jure que le fantôme a existé.",
  tags: [
    "aventure",
    "enquete"
  ],
  author: "Gaston Leroux",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#6a1a1a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1910",
    "text": [
      "Gaston Leroux, l'auteur du « Mystère de la chambre jaune », a publié « Le Fantôme de l'Opéra » en feuilleton dans *Le Gaulois* en 1909 et 1910, puis en volume en 1910. Le palais Garnier, inauguré en 1875, existe toujours : ses cinq étages de dessous, sa grande cuve d'eau creusée sous la scène, la loge n° 5 et son lustre sont bien réels.",
      "Le récit se donne pour une enquête : le narrateur cite les mémoires d'un directeur, l'interrogatoire d'un témoin, et, dans les derniers chapitres, les papiers d'un vieux Persan qui a tout vu. Les noms des opéras qu'on chante, *Faust*, *Roméo et Juliette*, *la Juive*, *le Prophète*, étaient ceux du répertoire de l'époque.",
      "Le livre raconte un homme trouvé pendu, un lustre qui tombe sur la salle, un enlèvement et une chambre de supplices."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "coulisses", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
