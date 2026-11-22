// « Le Dernier des Mohicans » (The Last of the Mohicans), James Fenimore Cooper, 1826 : un livre à lire, sans choix
// (lecture: true). Texte de Cooper (1789-1851, domaine public), dans la traduction d'Auguste-Jean-Baptiste Defauconpret
// (1767-1843, domaine public), d'après l'édition d'Ebooks libres et gratuits. Les chapitres n'ont pas de titre dans
// cette traduction : ceux d'ici, comme ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés),
// sont de Claude.
module.exports = {
  id: "mohicans",
  title: "Le Dernier des Mohicans",
  subtitle: "Un roman à lire · James Fenimore Cooper, 1826",
  summary: "Amérique du Nord, été 1757. Français et Anglais se disputent les forêts entre l'Hudson et les lacs, chacun avec ses alliés indiens. Le marquis de Montcalm marche sur le fort William-Henry, et les deux filles de son commandant, le vieux colonel Munro, veulent le rejoindre malgré tout. Le major Heyward les escorte par un sentier de forêt, guidé par un coureur huron, Magua, que l'on appelle le Renard-Subtil. Sur leur route se trouvent un chasseur blanc, Œil-de-Faucon, et deux Mohicans, Chingachgook et son fils Uncas, les derniers de leur peuple. Le roman de Cooper en entier, sans choix : on le lit page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "historique",
    "guerre"
  ],
  author: "James Fenimore Cooper",
  lecture: true,
  age: 13,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#34452c"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1826",
    "text": [
      "Cooper publie « The Last of the Mohicans » en 1826. Le roman se passe soixante-dix ans plus tôt, pendant la guerre que la France et l'Angleterre se font en Amérique, et il raconte un fait réel : le siège du fort William-Henry et le massacre de la garnison qui en sortait, en août 1757. Le texte est ici celui de la traduction de Defauconpret, qui a fait connaître Cooper aux lecteurs français ; les notes de l'auteur sont entre parenthèses.",
      "Presque chaque chapitre s'ouvre sur une épigraphe, quelques vers de Shakespeare, de Gray ou de Pope, en italique. Cooper fait aussi de longues pauses pour expliquer au lecteur les peuples, la géographie et la guerre.",
      "On y lit les mots de l'époque : les Indiens y sont souvent appelés des « sauvages », et chaque personnage juge les autres peuples avec les préjugés de son temps. La violence de la guerre est montrée en face, scalps et massacre compris. Le livre fait aussi entendre la plainte de peuples chassés de leur terre."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "edouard", hour: 0, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
