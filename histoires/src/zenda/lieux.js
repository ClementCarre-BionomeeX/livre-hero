// « Le Prisonnier de Zenda » (The Prisoner of Zenda), Anthony Hope, 1894 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1894 (Project
// Gutenberg n° 95, domaine public). Les titres des chapitres sont ceux de Hope, traduits ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  parklane: { ambiance: "ville", name: "Park Lane, à Londres", map: "europe", x: 22, y: 30, region: "Londres", desc: "La maison de lord Burlesdon, au 305 Park Lane, avec ses portraits de famille aux cheveux roux.", arrive: "C1_1" },
  paris: { ambiance: "ville", name: "Paris", map: "europe", x: 30, y: 45, region: "France", desc: "L'appartement de George Featherly, attaché d'ambassade, où l'on parle des femmes et des ducs.", arrive: "C2_1" },
  auberge: { ambiance: "village", name: "L'auberge de Zenda", map: "ruritanie", x: 63, y: 68, region: "Zenda", desc: "Une petite auberge tenue par une grosse vieille dame et ses deux filles, au pied de la colline du château.", arrive: "C2_2" },
  ville: { ambiance: "village", name: "La ville de Zenda", map: "ruritanie", x: 62, y: 70, region: "Zenda", desc: "Une petite ville paisible au bout de la vallée, entre le château du duc et la forêt.", arrive: "C15_1" },
  foret: { ambiance: "foret", name: "La forêt de Zenda", map: "ruritanie", x: 70, y: 60, region: "Zenda", desc: "De grands arbres enlacés, des clairières, de longues allées d'herbe, et des routes qui se croisent.", arrive: "C3_1" },
  pavillon: { ambiance: "foret", name: "Le pavillon de chasse", map: "ruritanie", x: 74, y: 56, region: "Zenda", desc: "Une maison de bois d'un seul étage, au milieu de la forêt, avec sa cave à vin et sa cave à charbon.", arrive: "C3_4" },
  gare: { ambiance: "ville", name: "La gare de Strelsau", map: "ruritanie", x: 31, y: 38, region: "Strelsau", desc: "Le quai, le buffet, et la foule des dignitaires venus accueillir le roi.", arrive: "C4_3" },
  strelsau: { ambiance: "ville", name: "Les rues de Strelsau", map: "ruritanie", x: 30, y: 34, region: "Strelsau", desc: "Les grands boulevards de la Ville Neuve, fidèle au roi, et les rues tortueuses de la Vieille Ville, fidèle au duc.", arrive: "C5_1" },
  cathedrale: { ambiance: "temple", name: "La cathédrale de Strelsau", map: "ruritanie", x: 29, y: 32, region: "Strelsau", desc: "Une grande façade grise ornée de centaines de statues, des portes de chêne, une nef où gronde l'orgue.", arrive: "C5_3" },
  palais: { ambiance: "chateau", name: "Le palais de Strelsau", map: "ruritanie", x: 31, y: 33, region: "Strelsau", desc: "Le palais royal sur la grande place, son escalier de marbre, et le cabinet du roi avec son passage secret.", arrive: "C6_1" },
  flavia: { ambiance: "ville", name: "La maison de la princesse Flavia", map: "ruritanie", x: 33, y: 36, region: "Strelsau", desc: "Une belle demeure de Strelsau, une terrasse sur le jardin, un petit salon du matin.", arrive: "C8_2" },
  kiosque: { ambiance: "nuit", name: "Le kiosque de la Nouvelle Avenue", map: "ruritanie", x: 26, y: 30, region: "Strelsau", desc: "Un jardin à l'abandon derrière une grande maison, et au fond, un kiosque de bois auquel on monte par six marches.", arrive: "C9_2" },
  route: { ambiance: "route", name: "La route de Zenda", map: "ruritanie", x: 48, y: 50, region: "Entre Strelsau et Zenda", desc: "Quarante milles de route, des auberges de campagne, puis les lisières de la forêt et une bifurcation.", arrive: "C6_2" },
  tarlenheim: { ambiance: "chateau", name: "Le château de Tarlenheim", map: "ruritanie", x: 56, y: 74, region: "Zenda", desc: "Un beau château moderne au sommet d'une colline boisée, à cinq milles de Zenda, face au château du duc.", arrive: "C12_1" },
  chateau: { ambiance: "chateau", name: "Le château de Zenda", map: "ruritanie", x: 66, y: 63, region: "Zenda", desc: "Le château neuf du duc, ses appartements, son vestibule, et le pont-levis qui le relie au vieux donjon.", arrive: "C18_1" },
  douves: { ambiance: "eau", name: "Les douves de Zenda", map: "ruritanie", x: 67, y: 65, region: "Zenda", desc: "Une eau noire et profonde au pied des grands murs moussus du vieux château.", arrive: "C14_2" },
  cellule: { ambiance: "souterrain", name: "Les cellules du vieux château", map: "ruritanie", x: 68, y: 64, region: "Zenda", desc: "Deux pièces taillées dans le roc au bas d'un escalier de pierre, une fenêtre carrée sur les douves.", arrive: "C18_2" },
  frontiere: { ambiance: "champs", name: "La gare de la frontière", map: "ruritanie", x: 92, y: 82, region: "La frontière", desc: "Une petite gare au bord de la route, un pré, un ruisseau, juste au-delà de la frontière.", arrive: "C21_4" },
};
