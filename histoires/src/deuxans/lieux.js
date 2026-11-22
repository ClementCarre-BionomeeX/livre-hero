// « Deux ans de vacances », Jules Verne, 1888 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition numérique d'Ebooks libres et gratuits ; la préface de l'auteur n'est pas reprise. Les notes
// de l'auteur restent entre parenthèses à leur appel. Verne ne donne pas de titres à ses chapitres : ceux des pages
// sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  sloughi: { ambiance: "mer", name: "Le « Sloughi »", map: "monde", x: 4, y: 84, region: "Le Pacifique", desc: "Un yacht de cent tonneaux, sans équipage, qui fuit devant la tempête, ses voiles en lambeaux et la mer qui balaie le pont.", arrive: "I_1" },
  auckland: { ambiance: "ville", name: "La pension Chairman", map: "monde", x: 95, y: 82, region: "Auckland, en Nouvelle-Zélande", desc: "Une pension renommée de la ville d'Auckland, ses élèves de huit à quatorze ans, et le port où attend le yacht.", arrive: "III_1" },
  baie: { ambiance: "eau", name: "Sloughi-bay", map: "chairman", x: 16, y: 52, region: "L'île Chairman", desc: "Une baie de sable au pied d'une falaise, des récifs où gît l'épave du yacht, et la bouche d'un rio.", arrive: "II_1" },
  promontoire: { ambiance: "montagne", name: "False-Sea-point", map: "chairman", x: 16, y: 30, region: "L'île Chairman", desc: "Un promontoire au nord de la baie, d'où la lunette porte sur la mer de l'ouest et, à l'est, sur une ligne bleue.", arrive: "V_5" },
  foret: { ambiance: "foret", name: "Traps-woods", map: "chairman", x: 30, y: 46, region: "L'île Chairman", desc: "Une forêt épaisse entre la falaise et le lac, de hêtres, de bouleaux, de pins et de chênes verts, pleine de gibier.", arrive: "VII_1" },
  lac: { ambiance: "eau", name: "Family-lake", map: "chairman", x: 52, y: 44, region: "L'île Chairman", desc: "Un grand lac au milieu de l'île, si long qu'on le prend d'abord pour la mer ; il gèle en hiver.", arrive: "VIII_1" },
  frenchden: { ambiance: "souterrain", name: "French-den", map: "chairman", x: 38, y: 54, region: "L'île Chairman", desc: "Une caverne au pied de la falaise, entre le lac et le rio : un hall, un magasin, des poêles, une porte, et Sport-terrace devant.", arrive: "VIII_4" },
  sandy: { ambiance: "champs", name: "Sandy-desert", map: "chairman", x: 50, y: 14, region: "Le nord de l'île", desc: "Une plaine de sable et de dunes au nord du lac, sans un arbre, où nichent des oiseaux de mer.", arrive: "XIV_5" },
  moors: { ambiance: "eau", name: "Les South-moors", map: "chairman", x: 40, y: 78, region: "Le sud de l'île", desc: "Des marais à perte de vue au sud de French-den, des flamants, des canards, et de l'eau jusqu'aux genoux.", arrive: "XVIII_2" },
  deception: { ambiance: "mer", name: "Deception-bay", map: "chairman", x: 82, y: 46, region: "La côte de l'est", desc: "Une rivière qui descend du lac par la forêt, puis une baie bordée de blocs de granit, face à une mer vide.", arrive: "XVII_5" },
  bearrock: { ambiance: "souterrain", name: "Bear-rock", map: "chairman", x: 80, y: 38, region: "La côte de l'est", desc: "Une caverne dans les rochers, près de l'embouchure de l'East-river, assez grande pour toute une colonie.", arrive: "XXI_1" },
  magellan: { ambiance: "mer", name: "Les canaux de Magellan", map: "chairman", x: 88, y: 86, region: "L'archipel magellanique", desc: "Des canaux étroits entre des îles de roche et de neige, et la chaloupe qui les descend vers le détroit.", arrive: "XXIX_5" },
};
