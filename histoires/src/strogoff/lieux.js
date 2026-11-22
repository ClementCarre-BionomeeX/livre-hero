// « Michel Strogoff », Jules Verne, 1876 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition numérique d'Ebooks libres et gratuits. Les notes de l'auteur sont remises entre parenthèses
// à leur appel. Les titres des chapitres sont de Verne ; ceux des pages, comme tout ce qui vit dans les tags (gens,
// lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  moscou: { ambiance: "ville", name: "Moscou", map: "russie", x: 6, y: 50, region: "La Russie d'Europe", desc: "Le Palais-Neuf illuminé pour une fête, ses salons, ses uniformes, et le cabinet du czar où arrivent les dépêches.", arrive: "I1_1" },
  nijni: { ambiance: "ville", name: "Nijni-Novgorod", map: "russie", x: 14, y: 48, region: "La Russie d'Europe", desc: "La ville au confluent du Volga et de l'Oka, et sa foire géante, des marchands de toute l'Asie entassés dans des rues de bois.", arrive: "I4_6" },
  volga: { ambiance: "eau", name: "Le Volga et la Kama", map: "russie", x: 20, y: 52, region: "La Russie d'Europe", desc: "Le pont du *Caucase*, le *steam-boat* chargé de fuyards, Kazan au bord du fleuve, puis la Kama et ses rives boisées.", arrive: "I7_1" },
  ourals: { ambiance: "montagne", name: "Les monts Ourals", map: "russie", x: 30, y: 46, region: "Entre l'Europe et l'Asie", desc: "Une route de défilés et de forêts, la nuit, sous un orage qui fait tout trembler.", arrive: "I10_1" },
  steppe: { ambiance: "route", name: "La route de poste", map: "russie", x: 36, y: 52, region: "La Sibérie occidentale", desc: "La grande route de Sibérie, ses relais de poste, ses télègues, et la steppe à perte de vue.", arrive: "I9_1" },
  ichim: { ambiance: "village", name: "Le relais d'Ichim", map: "russie", x: 40, y: 54, region: "La Sibérie occidentale", desc: "Une maison de poste au bord de la steppe, des chevaux qu'on se dispute, et une salle où tout le monde regarde.", arrive: "I12_5" },
  irtyche: { ambiance: "eau", name: "L'Irtyche", map: "russie", x: 45, y: 52, region: "La Sibérie occidentale", desc: "Un fleuve large et rapide, en crue, et un bac que le courant emporte.", arrive: "I13_3" },
  omsk: { ambiance: "ville", name: "Omsk", map: "russie", x: 47, y: 54, region: "La Sibérie occidentale", desc: "La ville natale de Michel Strogoff, sa ville haute qui résiste encore, sa ville basse aux mains des Tartares.", arrive: "I14_1" },
  baraba: { ambiance: "champs", name: "Les marais de la Baraba", map: "russie", x: 52, y: 52, region: "La Sibérie occidentale", desc: "Des marécages sans fin, des roseaux plus hauts qu'un cavalier, des moustiques en nuages, et des villages vides.", arrive: "I15_1" },
  obi: { ambiance: "eau", name: "L'Obi", map: "russie", x: 57, y: 50, region: "La Sibérie occidentale", desc: "Un taillis au bord de la route, des Tartares à la lueur des torches, puis un grand fleuve à traverser à la nage.", arrive: "I16_2" },
  kolyvan: { ambiance: "combat", name: "Kolyvan", map: "russie", x: 59, y: 50, region: "La Sibérie occidentale", desc: "Une petite ville au bord de l'Obi, la fusillade aux portes, et le bureau du télégraphe où l'on paie au mot.", arrive: "I17_1" },
  camp: { ambiance: "combat", name: "Le camp de l'émir", map: "russie", x: 61, y: 48, region: "Près de Tomsk", desc: "Une plaine couverte de tentes, de cavaliers et de prisonniers, et la tente de l'émir au milieu.", arrive: "II1_1" },
  tomsk: { ambiance: "ville", name: "Tomsk", map: "russie", x: 63, y: 46, region: "La Sibérie occidentale", desc: "Une grande ville prise par les Tartares, une place préparée pour la fête de l'émir, son trône, ses danses et ses torches.", arrive: "II4_1" },
  route: { ambiance: "route", name: "La route de l'Est", map: "russie", x: 72, y: 48, region: "La Sibérie orientale", desc: "Une route vide, des villages abandonnés, une kibitka tirée par un seul cheval, et le chien qui court derrière.", arrive: "II6_1" },
  yenisei: { ambiance: "eau", name: "Krasnoiarsk et l'Yeniseï", map: "russie", x: 74, y: 46, region: "La Sibérie orientale", desc: "Une ville désertée, et un fleuve immense, coupé d'îles, à passer sans bateau.", arrive: "II7_1" },
  angara: { ambiance: "eau", name: "Le Baïkal et l'Angara", map: "russie", x: 86, y: 54, region: "La Sibérie orientale", desc: "Un lac grand comme une mer, un radeau de fugitifs, puis la rivière rapide qui descend vers Irkoutsk entre deux rives ennemies.", arrive: "II10_1" },
  irkoutsk: { ambiance: "ville", name: "Irkoutsk", map: "russie", x: 88, y: 50, region: "La Sibérie orientale", desc: "La capitale de la Sibérie orientale, assiégée, ses églises, ses remparts de bois, et le palais du grand-duc.", arrive: "II12_1" },
};
