// « Clous rouges » (Red Nails), Robert E. Howard, 1936 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// de juillet à octobre 1936 (Project Gutenberg n° 32759, domaine public). Les titres des chapitres sont ceux de Howard ;
// ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  foret: { ambiance: "foret", name: "La forêt du Sud", map: "xuchotl", x: 50, y: 90, region: "Au sud du Darfar", desc: "Une forêt épaisse et sombre, sans route ni clairière, qui semble ne jamais finir.", arrive: "C1_1" },
  rocher: { ambiance: "montagne", name: "Le rocher", map: "xuchotl", x: 40, y: 82, region: "Au sud du Darfar", desc: "Un pic rocheux qui dépasse la cime des arbres, avec une corniche et des pommiers aux fruits pourpres à son pied.", arrive: "C1_2" },
  plaine: { ambiance: "champs", name: "La plaine", map: "xuchotl", x: 50, y: 70, region: "Xuchotl", desc: "Une plaine nue, cernée par l'anneau de la forêt, avec une ville au milieu.", arrive: "C1_10" },
  grandesalle: { ambiance: "chateau", name: "La Grande Salle", map: "xuchotl", x: 50, y: 50, region: "Xuchotl", desc: "Une longue salle qui coupe la ville du nord au sud, avec trois galeries à balustres de chaque côté.", arrive: "C2_2" },
  galeries: { ambiance: "nuit", name: "Les salles d'en haut", map: "xuchotl", x: 46, y: 40, region: "Xuchotl", desc: "Des chambres vides au-dessus de la Grande Salle, éclairées de joyaux verts, au sol de pierre rougeoyante.", arrive: "C2_4" },
  silence: { ambiance: "nuit", name: "Les Salles du Silence", map: "xuchotl", x: 40, y: 50, region: "Xuchotl", desc: "Le centre inhabité de la ville, entre les quartiers ennemis, où l'on se glisse pour tuer.", arrive: "C2_9" },
  trone: { ambiance: "chateau", name: "La salle du trône de Tecuhltli", map: "xuchotl", x: 20, y: 50, region: "Tecuhltli", desc: "Une vaste salle aux tentures de velours, une estrade de jade, un siège d'ivoire et une colonne d'ébène derrière.", arrive: "C3_2" },
  chambres: { ambiance: "nuit", name: "Les chambres des hôtes", map: "xuchotl", x: 16, y: 44, region: "Tecuhltli", desc: "Un long couloir derrière l'estrade, des chambres richement ornées, et une porte cerclée de cuivre.", arrive: "C3_7" },
  garde: { ambiance: "chateau", name: "La salle de garde de l'Aigle", map: "xuchotl", x: 26, y: 46, region: "Tecuhltli", desc: "Une pièce carrée derrière la Porte de l'Aigle, avec une chaîne, des verrous et un jeu de miroirs.", arrive: "C3_1" },
  xotalanc: { ambiance: "chateau", name: "Xotalanc", map: "xuchotl", x: 80, y: 50, region: "Xotalanc", desc: "Le quartier est de la ville, pareil à Tecuhltli, derrière une porte de bronze.", arrive: "C5_4" },
  porte: { ambiance: "chateau", name: "La salle de la porte basse", map: "xuchotl", x: 22, y: 58, region: "Tecuhltli", desc: "Une salle aux portes voilées de tapisseries, à l'étage inférieur, devant une porte de bronze extérieure.", arrive: "C6_3" },
  torture: { ambiance: "souterrain", name: "La vieille salle de torture", map: "xuchotl", x: 28, y: 60, region: "Xuchotl", desc: "Une salle hors de Tecuhltli, où reste une machine trop lourde pour être emportée.", arrive: "C7_1" },
  escalier: { ambiance: "nuit", name: "L'escalier dans le mur", map: "xuchotl", x: 18, y: 38, region: "Tecuhltli", desc: "Un escalier d'ivoire caché dans l'épaisseur du mur, qui monte à une tour sur les toits.", arrive: "C7_2" },
};
