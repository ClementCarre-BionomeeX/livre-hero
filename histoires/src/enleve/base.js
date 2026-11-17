// « Enlevé ! » (Kidnapped), R. L. Stevenson, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1886 (Project
// Gutenberg n° 421, domaine public). Les quelques notes de Stevenson sur les mots écossais sont fondues dans le texte ;
// l'écossais des personnages est rendu par le ton plus que par l'orthographe. Les titres des chapitres sont ceux de
// Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags : gens, lieux, mots, résumés des chapitres.
module.exports = {
  id: "enleve",
  title: "Enlevé !",
  subtitle: "Un roman à lire · R. L. Stevenson, 1886",
  summary: "Écosse, juin 1751. David Balfour a dix-sept ans ; son père vient de mourir, et le pasteur du village lui remet une lettre pour la maison de Shaws, près d'Édimbourg, où vit un oncle dont il ignorait tout. La maison est à moitié bâtie, l'oncle avare et méfiant, et les gens du pays changent de visage quand on leur en demande le chemin. Le roman de Stevenson en entier, dans une traduction nouvelle, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  author: "R. L. Stevenson · traduction de Claude (2026)",
  lecture: true,
  age: 11,
  skin: "parchemin",
  cover: {
    "motif": "vague",
    "color": "#2b3a46"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1886",
    "reminder": "Ce chapitre parle de l'esclavage dans les plantations d'Amérique, avec les mots du narrateur en 1751.",
    "text": [
      "*Enlevé !* a paru en feuilleton puis en livre en 1886. La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Stevenson de près.",
      "L'histoire se passe en 1751, cinq ans après la défaite des jacobites à Culloden. Les Highlands sont occupés par les soldats du roi George ; les clans qui ont suivi le prince Charles Stuart sont désarmés, leurs chefs exilés ou cachés. Stevenson mêle à son roman des faits et des gens réels, dont le meurtre de Colin Campbell de Glenure, en 1752 dans la réalité.",
      "Le roman raconte un enlèvement, un combat à bord d'un navire, un meurtre et une longue fuite. On y parle de vendre des hommes comme esclaves dans les plantations d'Amérique : au chapitre VIII, David se voit « peinant aux côtés des esclaves noirs dans les champs de tabac ». Ce passage est gardé tel quel, et le chapitre s'ouvre sur un rappel de cette notice.",
      "Les personnages parlent l'écossais des Lowlands ou le gaélique des Highlands ; la traduction rend leur façon de parler par le ton, et garde quelques mots du pays, expliqués d'un toucher."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "essendean", hour: 6, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
