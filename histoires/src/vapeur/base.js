// « La Maison à vapeur », Jules Verne, 1880 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur place. Les
// titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens,
// lieux, mots, résumés).
module.exports = {
  id: "vapeur",
  title: "La Maison à vapeur",
  subtitle: "Voyage à travers l'Inde septentrionale · Jules Verne, 1880",
  summary: "Calcutta, 1867. Dix ans après la grande révolte des Cipayes, le colonel sir Edward Munro vit enfermé dans son deuil : sa femme a disparu dans le massacre de Cawnpore. Pour l'en arracher, ses amis l'emmènent vers le nord de l'Inde dans un équipage inouï, deux maisons roulantes tirées par un éléphant d'acier qui marche à la vapeur. Avec eux, un capitaine qui veut tuer son cinquantième tigre et un jeune Français qui raconte. Mais le nabab Nana Sahib, dont la tête est mise à prix, n'a rien oublié. Le roman en entier, sans choix, page après page, avec les gens, les lieux et les mots expliqués d'un appui.",
  tags: [
    "aventure",
    "voyage",
    "historique"
  ],
  author: "Jules Verne",
  lecture: true,
  age: 12,
  skin: "parchemin",
  cover: {
    "motif": "soleil",
    "color": "#8a5a2b"
  },
  glossary: Object.assign({}, require("../glossaire.js"), require("./mots.js")),
  voice: "première personne, passé",
  version: 1,
  notice: {
    "title": "Un livre de 1880",
    "text": [
      "Le roman a paru en feuilleton dans le Magasin d'éducation et de récréation de Hetzel, puis en deux volumes en 1880. Le texte est celui de Verne, sans retouche ; les titres des chapitres sont les siens. Ce que Verne raconte de l'Inde et de la révolte de 1857 vient des livres de son temps, qu'il cite souvent. Nana Sahib a existé : il a disparu vers 1859, et nul ne sait au juste comment il a fini. L'éléphant à vapeur et toute l'aventure sont inventés.",
      "Le livre se tient du côté des Anglais, qui gouvernent alors l'Inde. La révolte de 1857 y est une « révolte » ou une « insurrection », et un personnage indien l'appelle « guerre de l'indépendance » : c'est le nom que beaucoup d'Indiens lui donnent aujourd'hui. Verne raconte les massacres commis par les révoltés, et il ne cache pas les représailles anglaises, qu'il dit « véritablement épouvantables ».",
      "Les Indiens y sont souvent appelés « fanatiques », on compare des insurgés à des « Sioux », et le cuisinier de l'expédition, un Français, est désigné par un mot qui est aujourd'hui une insulte. On y chasse le tigre et l'éléphant sans compter : le capitaine Hod tient le registre de ses tigres comme un palmarès, et l'on s'en amuse."
    ],
    "reminder": "Ce chapitre raconte la révolte de 1857 avec les yeux d'un Européen de 1880 : les massacres des deux camps y sont décrits sans fard."
  },
  intro: [],
  world: { noFood: true, start: { place: "aurungabad", hour: 18, gold: 0, food: 0, items: [], kits: { guerrier: [], rodeur: [], voleur: [], mage: [], pretre: [], barde: [] } }, places: require("./lieux.js"), routes: [], regions: {}, events: {} },
  start: "I1_1",
  acts: require("./chapitres.js"),
  companions: {},
  factions: {},
  relics: {},
  people: require("./gens.js"),
  items: require("./objets.js"),
  endings: { fin: { title: "Fin du livre" } },
  passages: {},
};
