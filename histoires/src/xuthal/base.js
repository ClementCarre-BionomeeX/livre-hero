// « L'Ombre qui glisse » (The Slithering Shadow), Robert E. Howard, 1933 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en septembre 1933 (domaine public). Les chapitres de Howard sont seulement numérotés ; leurs titres, ceux des pages et
// tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
module.exports = {
  id: "xuthal",
  title: "L'Ombre qui glisse",
  subtitle: "Un récit de Conan le Cimmérien · Robert E. Howard, 1933",
  summary: "Derniers survivants d'une armée anéantie, Conan et la Brythunienne Natala meurent de soif dans le désert du Sud quand une ville aux murs verts surgit des vagues de chaleur. Ses portes sont ouvertes, ses salles somptueuses et désertes, ses gardes dorment comme des morts. Quelque chose d'autre, pourtant, rôde dans ses palais.",
  tags: [
    "aventure",
    "fantastique",
    "drame"
  ],
  author: "Robert E. Howard · traduction de Claude (2026)",
  lecture: true,
  age: 16,
  skin: "parchemin",
  cover: {
    "motif": "oeil",
    "color": "#1f4a3a"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "troisième personne, passé",
  version: 1,
  notice: {
    "title": "Un récit de 1933",
    "reminder": "Ce chapitre décrit une scène de torture et des violences sanglantes.",
    "text": [
      "Robert E. Howard publie *L'Ombre qui glisse* en septembre 1933 dans *Weird Tales*, une revue américaine de récits étranges ; on le connaît aussi sous le titre de *Xuthal of the Dusk*. Conan y est un soldat de fortune, rescapé d'une armée de mercenaires. Le monde est celui de l'« âge hyborien », un passé imaginaire plein de royaumes et de dieux inventés. Howard est mort en 1936, à trente ans ; ses récits sont dans le domaine public.",
      "La traduction est nouvelle, faite pour cette bibliothèque à partir du texte anglais, et elle suit Howard de près. Elle allège les mots qui désignent sans cesse les gens de Xuthal par la couleur de leur peau. Le récit garde le regard de son époque sur les femmes : Natala a été prise sur un marché aux esclaves, Conan la traite avec rudesse, et les deux femmes se disputent un homme.",
      "Il faut nommer ce que le récit montre. Il est sensuel : la Stygienne Thalis va presque nue et parle de plaisirs. Au deuxième chapitre, elle attache Natala nue à un anneau et la fouette, puis une créature monstrueuse la touche. Les combats sont très sanglants, avec des membres tranchés et un homme éventré."
    ]
  },
  intro: [],
  world: { noFood: true, start: { place: "desert", hour: 15, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
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
