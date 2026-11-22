// « Le Vagabond des étoiles » (The Star Rover), Jack London, 1915 : un livre à lire, sans choix (lecture: true).
// Texte de London (1876-1916, domaine public), dans la traduction de Paul Gruyer et Louis Postif (Crès, 1925, domaine
// public), d'après la saisie du projet Gutenberg. Les titres des chapitres sont ceux des traducteurs ; ceux des pages,
// comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  cellule: { ambiance: "souterrain", name: "La cellule solitaire nº 1", map: "prison", x: 45, y: 40, region: "Le bagne de San Quentin, Californie", desc: "Une cellule étroite et presque noire, un guichet à barreaux, un rai de lumière où brille un brin de paille, et des murs qui parlent la nuit.", arrive: "I_1" },
  sanquentin: { ambiance: "ville", name: "San Quentin", map: "prison", x: 30, y: 30, region: "Sur la baie de San Francisco", desc: "Les ateliers de jute, le réfectoire, le bureau du gouverneur, et les cachots où l'on lace les hommes dans la camisole.", arrive: "II_1" },
  folsom: { ambiance: "nuit", name: "Folsom", map: "prison", x: 70, y: 25, region: "La prison de Folsom, Californie", desc: "Le Quartier des Assassins, la cellule des condamnés à mort, le garde qui ne dort pas, et la potence au bout du couloir.", arrive: "I_2" },
  etoiles: { ambiance: "nuit", name: "Parmi les étoiles", map: "prison", x: 50, y: 10, region: "Hors du temps", desc: "Un espace sans murs, où l'esprit marche d'astre en astre une baguette de cristal à la main.", arrive: "XI_2" },
  ferme: { ambiance: "champs", name: "La ferme du Minnesota", map: "prison", x: 85, y: 70, region: "L'enfance de Darrell Standing", desc: "La cuisine où un missionnaire montre ses photographies de Terre Sainte à un enfant de six ans.", arrive: "VI_2" },
  piste: { ambiance: "route", name: "La piste de l'Utah", map: "ouest", x: 40, y: 30, region: "Le territoire de l'Utah, 1857", desc: "Quarante chariots dans la poussière, des colonies mormones qui ne vendent rien, et le désert de sauge.", arrive: "XII_1" },
  prairies: { ambiance: "champs", name: "Les Prairies-des-Montagnes", map: "ouest", x: 55, y: 70, region: "Au sud de Cedar City", desc: "Un vallon de pâturages, une source au pied de la pente, des collines d'où l'on tire, et la fosse creusée sous les chariots.", arrive: "XIII_5" },
  coree: { ambiance: "mer", name: "La côte de Cho-Sen", map: "coree", x: 30, y: 75, region: "La Corée du XVIIe siècle", desc: "Des falaises battues par la mer, des villages de pêcheurs, des jonques, et les mandarins vêtus de soie.", arrive: "XVI_1" },
  keijo: { ambiance: "chateau", name: "Keijo", map: "coree", x: 45, y: 40, region: "La capitale de la Corée", desc: "Une ville vêtue de blanc, un palais aux murs sculptés, des festins, des danseuses et des intrigues.", arrive: "XVII_1" },
  fusan: { ambiance: "mer", name: "Fusan", map: "coree", x: 70, y: 80, region: "La pointe sud de la Corée", desc: "Les falaises face à la mer, où de vieux mendiants guettent pendant des années un navire d'Europe.", arrive: "XVIII_5" },
  drakkar: { ambiance: "mer", name: "Les navires du Nord", map: "nord", x: 40, y: 40, region: "Les mers du Nord", desc: "Des bateaux de guerre pris dans la tempête, des pots d'hydromel, des crânes pour coupes, et les marais où vivent les hors-la-loi.", arrive: "XX_1" },
  jerusalem: { ambiance: "ville", name: "Jérusalem", map: "nord", x: 75, y: 75, region: "La Judée, sous Tibère", desc: "La porte de Jaffa, le palais de Pilate, une ville pleine de pèlerins, de prêtres et de prophètes.", arrive: "XXI_1" },
  rocher: { ambiance: "mer", name: "Le rocher de Daniel Foss", map: "nord", x: 20, y: 85, region: "Le Pacifique sud", desc: "Une île rocheuse si basse que les embruns la couvrent, sans une herbe, peuplée de phoques, et une pyramide de pierres.", arrive: "XXIII_1" },
};
