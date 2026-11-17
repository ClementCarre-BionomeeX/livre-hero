// « Croc-Blanc » (White Fang), Jack London, 1906 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1906 (Project Gutenberg
// n° 910, domaine public). La traduction française de Gruyer et Postif (1923) est abrégée : celle-ci suit le roman en entier.
// Les mesures sont converties en mètres, en kilos et en degrés Celsius. Les titres des chapitres sont ceux de London, traduits.
// Tout ce qui n'est pas de London vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  piste: { ambiance: "neige", name: "La piste du fleuve gelé", map: "nord", x: 52, y: 34, region: "Le Grand Nord", desc: "Un fleuve gelé entre deux murs d'épicéas noirs, en plein hiver, à des jours de marche du poste de Fort McGurry.", arrive: "I_1" },
  wild: { ambiance: "neige", name: "Les terres du Wild", map: "nord", x: 44, y: 44, region: "Le Grand Nord", desc: "Des forêts, des lacs gelés et des lignes de partage basses, où la bande de loups court après la viande.", arrive: "IV_1" },
  taniere: { ambiance: "foret", name: "La caverne du ruisseau", map: "nord", x: 38, y: 52, region: "Le Grand Nord", desc: "Une petite caverne dans une paroi de terre, au bord d'un ruisseau qui se jette dans le Mackenzie.", arrive: "V_1" },
  camp: { ambiance: "village", name: "Le camp de Castor-Gris", map: "nord", x: 34, y: 56, region: "Le Mackenzie", desc: "Un camp d'Indiens au bord de l'eau : des tipis de peaux, des feux, des femmes, des enfants et une foule de chiens.", arrive: "IX_2" },
  bois: { ambiance: "foret", name: "Les bois", map: "nord", x: 30, y: 46, region: "Le Mackenzie", desc: "Les forêts autour des camps, où un jeune loup seul doit trouver sa viande.", arrive: "XII_1" },
  mackenzie: { ambiance: "neige", name: "Le Mackenzie gelé", map: "nord", x: 26, y: 34, region: "Le Mackenzie", desc: "Le grand fleuve du Nord, qui coule vers la mer Arctique. L'hiver, sa glace sert de route aux traîneaux.", arrive: "XII_2" },
  fortyukon: { ambiance: "village", name: "Fort Yukon", map: "nord", x: 62, y: 22, region: "Le Yukon", desc: "Un vieux poste de traite de la Compagnie de la baie d'Hudson, au confluent du Porcupine et du Yukon. Les vapeurs s'y arrêtent.", arrive: "XV_4" },
  dawson: { ambiance: "ville", name: "Dawson", map: "nord", x: 74, y: 40, region: "Le Yukon", desc: "La ville de la ruée vers l'or du Klondike, née en quelques mois au bord du Yukon.", arrive: "XVII_2" },
  arene: { ambiance: "combat", name: "Le cercle du combat", map: "nord", x: 72, y: 44, region: "Le Yukon", desc: "Un cercle d'hommes dans la neige, à l'écart de Dawson, où l'on fait se battre des chiens pour de l'argent.", arrive: "XVIII_1" },
  cabane: { ambiance: "neige", name: "La cabane de Weedon Scott", map: "nord", x: 76, y: 36, region: "Le Yukon", desc: "Une cabane de rondins sur la colline, près de Dawson, où vivent un ingénieur des mines et son conducteur de chiens.", arrive: "XIX_1" },
  sanfrancisco: { ambiance: "ville", name: "San Francisco", map: "californie", x: 40, y: 40, region: "La Californie", desc: "La grande ville du Pacifique : immeubles, tramways à câble, voitures et foules.", arrive: "XXII_1" },
  sierravista: { ambiance: "champs", name: "Sierra Vista", map: "californie", x: 55, y: 60, region: "La Californie", desc: "La propriété du juge Scott, dans la vallée de Santa Clara : pelouses, noyers, écuries, poulaillers et collines dorées.", arrive: "XXII_2" },
};
