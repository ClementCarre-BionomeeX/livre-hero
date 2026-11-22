// « Le Château des Carpathes », Jules Verne, 1892 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses
// à leur place. Les chapitres de Verne n'ont pas de titre ; les titres des pages sont de Claude, comme tout ce qui vit
// dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  paturage: { ambiance: "champs", name: "Les pâturages du Retyezat", map: "transylvanie", x: 40, y: 62, region: "La Transylvanie", desc: "Un plateau d'herbe au pied du Retyezat, un troupeau de moutons, et de loin, sur un autre plateau, la silhouette d'un vieux burg.", arrive: "I_1" },
  werst: { ambiance: "village", name: "Werst", map: "transylvanie", x: 48, y: 58, region: "Le col de Vulkan", desc: "Un village d'une seule rue en pente, entre la frontière valaque et la Transylvanie, avec sa terrasse et la maison de pierre du biró.", arrive: "III_1" },
  auberge: { ambiance: "village", name: "Le « Roi Mathias »", map: "transylvanie", x: 50, y: 60, region: "Werst", desc: "L'auberge du village, moitié bois, moitié pierre, sa grande salle, ses tables, son bahut, et quelques chambres pour les voyageurs.", arrive: "IV_2" },
  foret: { ambiance: "foret", name: "Les forêts du Plesa", map: "transylvanie", x: 56, y: 46, region: "Le massif du Plesa", desc: "Des chênes, des hêtres, des épines, des ravins, une sapinière aux fûts droits, et le torrent du Nyad qui descend du plateau.", arrive: "V_2" },
  orgall: { ambiance: "montagne", name: "Le plateau d'Orgall", map: "transylvanie", x: 60, y: 34, region: "Le col de Vulkan", desc: "Un plateau aride semé de roches, sans un arbre, au pied des murailles du burg.", arrive: "VI_1" },
  burg: { ambiance: "chateau", name: "Le château des Carpathes", map: "transylvanie", x: 62, y: 28, region: "Le plateau d'Orgall", desc: "Un burg du Moyen Âge, son donjon, ses bastions, sa chapelle, son pont-levis relevé, ses souterrains, et un vieux hêtre devant la porte.", arrive: "II_1" },
  krajowa: { ambiance: "chateau", name: "Krajowa", map: "transylvanie", x: 58, y: 90, region: "La Valachie", desc: "Le vieux château des comtes de Télek, au fond du pays valaque.", arrive: "IX_1" },
  naples: { ambiance: "ville", name: "Naples", map: "transylvanie", x: 6, y: 92, region: "L'Italie", desc: "Le théâtre San-Carlo, ses loges, son public de connaisseurs, et le cimetière du Campo Santo Nuovo.", arrive: "IX_2" },
  kolosvar: { ambiance: "ville", name: "Kolosvar", map: "transylvanie", x: 30, y: 8, region: "La capitale du comitat", desc: "La capitale du comitat, ses magistrats et son tribunal.", arrive: "XVIII_1" },
};
