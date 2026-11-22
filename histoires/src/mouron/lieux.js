// « Le Mouron rouge » (The Scarlet Pimpernel), baronne Orczy, 1905 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1905 (Project
// Gutenberg n° 60, domaine public). Les titres des chapitres sont ceux d'Orczy, traduits ; ceux des pages, comme tout
// ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le portrait du vieux voiturier (ch. XXVI,
// « The Jew » dans l'original) et quelques remarques de narrateur ont été adoucis ; voir la notice.
// Les lieux du livre.
module.exports = {
  barricade: { ambiance: "ville", name: "La barricade de l'Ouest, à Paris", map: "manche", x: 66, y: 92, region: "Paris", desc: "Une des barrières de Paris, près de la place de la Révolution : des gardes, des charrettes fouillées, et la foule qui attend le soir.", arrive: "C1_1" },
  auberge: { ambiance: "village", name: "« Le Repos du Pêcheur », à Douvres", map: "manche", x: 66, y: 32, region: "Douvres", desc: "La vieille auberge de M. Jellyband, ses poutres de chêne, sa cuisine aux casseroles de cuivre et sa salle pleine de pêcheurs.", arrive: "C2_1" },
  falaises: { ambiance: "mer", name: "Les falaises de Douvres", map: "manche", x: 68, y: 34, region: "Douvres", desc: "Le chemin des falaises blanches au-dessus de la Manche, où l'on voit les bateaux sortir du port.", arrive: "C7_1" },
  opera: { ambiance: "ville", name: "L'opéra de Covent Garden", map: "manche", x: 42, y: 16, region: "Londres", desc: "Le théâtre de Covent Garden un soir de gala, ses loges dorées, sa foule en soie et en diamants.", arrive: "C10_1" },
  grenville: { ambiance: "ville", name: "L'hôtel de lord Grenville", map: "manche", x: 41, y: 14, region: "Londres", desc: "La grande demeure londonienne du ministre, ses salons de bal, ses petits boudoirs et sa salle à manger déserte après le souper.", arrive: "C11_1" },
  richmond: { ambiance: "champs", name: "La maison de Richmond", map: "manche", x: 32, y: 18, region: "Richmond", desc: "La belle maison des Blakeney au bord de la Tamise, sa terrasse, ses pelouses qui descendent jusqu'au fleuve et son jardin.", arrive: "C16_1" },
  cabinet: { ambiance: "chateau", name: "Le cabinet de sir Percy", map: "manche", x: 33, y: 18, region: "Richmond", desc: "Une pièce sévère, sans un bibelot, où personne n'entre jamais : un bureau, des cartes et un portrait.", arrive: "C18_2" },
  pallmall: { ambiance: "ville", name: "Pall Mall", map: "manche", x: 43, y: 15, region: "Londres", desc: "Le logement de sir Andrew Ffoulkes, dans une rue élégante de Londres.", arrive: "C20_1" },
  mer: { ambiance: "mer", name: "La Manche", map: "manche", x: 76, y: 46, region: "Entre Douvres et Calais", desc: "Le détroit, ses vents contraires et ses traversées de quelques heures, quand le temps le permet.", arrive: "C22_1" },
  calais: { ambiance: "ville", name: "Les rues de Calais", map: "manche", x: 82, y: 58, region: "Calais", desc: "Une ville de pêcheurs et de soldats, ses rues étroites et sales, ses bonnets rouges et ses cocardes.", arrive: "C22_2" },
  chatgris: { ambiance: "village", name: "Le Chat gris", map: "manche", x: 80, y: 60, region: "Calais", desc: "Une auberge isolée hors de la ville, une salle crasseuse au papier taché, et une soupente au-dessus, derrière un rideau.", arrive: "C22_3" },
  route: { ambiance: "nuit", name: "La route de Miquelon", map: "manche", x: 76, y: 64, region: "La côte de Calais", desc: "Une route de campagne dans la nuit, entre la falaise et les champs, bordée de haies basses.", arrive: "C27_1" },
  falaise: { ambiance: "nuit", name: "La falaise près de Gris-Nez", map: "manche", x: 72, y: 60, region: "La côte de Calais", desc: "Un sentier pierreux au sommet de la falaise, un bloc de rocher, et la mer qui gronde loin en dessous.", arrive: "C28_2" },
  cabane: { ambiance: "mer", name: "La cabane du père Blanchard", map: "manche", x: 70, y: 61, region: "La côte de Calais", desc: "Une cabane de bois isolée au bord de la falaise, avec une petite lueur rouge, et la plage rocheuse en contrebas.", arrive: "C30_1" },
};
