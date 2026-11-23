// « Le Pilote du Danube », Jules Verne, 1908 : un livre à lire, sans choix (lecture: true).
// Texte : l'édition Hetzel de 1908, dans le domaine public (Project Gutenberg n° 11484). La seule saisie disponible
// avait perdu ses accents : ils ont été rétablis et relus (fiches/pilote_texte.py). Les titres des pages et tout
// ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  sigmaringen: { ambiance: "ville", name: "Le Rendez-vous des Pêcheurs", map: "pilote", x: 6, y: 44, region: "Sigmaringen", desc: "Un cabaret au bord du Danube, des chopes de Munich, des pipes, et une centaine de pêcheurs à la ligne qui crient.", arrive: "I_1" },
  sources: { ambiance: "foret", name: "Les sources du Danube", map: "pilote", x: 3, y: 46, region: "Donaueschingen", desc: "Deux ruisseaux, la Breg et la Brigach, qui se rejoignent au sortir de la Forêt-Noire.", arrive: "II_5" },
  haut: { ambiance: "eau", name: "Le haut Danube", map: "pilote", x: 12, y: 42, region: "Wurtemberg et Bavière", desc: "Un fleuve encore étroit, des rives escarpées, des bourgs où l'on attend le pêcheur sur le quai.", arrive: "III_1" },
  ulm: { ambiance: "ville", name: "Ulm", map: "pilote", x: 15, y: 40, region: "Wurtemberg", desc: "Des boutiques à enseignes de fer, une cathédrale à flèche inachevée, et un quai désert à la nuit tombante.", arrive: "III_3" },
  ratisbonne: { ambiance: "ville", name: "Ratisbonne", map: "pilote", x: 26, y: 31, region: "Bavière", desc: "Une vieille cité de donjons, un pont de pierre sur le fleuve, une table d'hôte où l'on parle de la bande.", arrive: "V_3" },
  defiles: { ambiance: "montagne", name: "De Passau à Vienne", map: "pilote", x: 36, y: 34, region: "Autriche", desc: "Le fleuve se resserre entre des parois sauvages ; des rapides, des remous, des bancs de sable.", arrive: "VI_4" },
  vienne: { ambiance: "ville", name: "Le Prater", map: "pilote", x: 45, y: 37, region: "Vienne", desc: "Les allées d'un grand parc au bord du Danube, des cafés, une foule de promeneurs, et des faubourgs pauvres derrière.", arrive: "VII_1" },
  gran: { ambiance: "eau", name: "De Presbourg à Gran", map: "pilote", x: 53, y: 42, region: "Hongrie", desc: "Un fleuve large, des îles, des plaines, et des villages que la bande a déjà visités.", arrive: "VIII_1" },
  pilis: { ambiance: "foret", name: "Le mont Pilis", map: "pilote", x: 55, y: 46, region: "Hongrie", desc: "Une auberge à un carrefour de trois routes, des bois épais, et une clairière où l'on dort à même le sol.", arrive: "IX_1" },
  villa: { ambiance: "chateau", name: "La villa Hagueneau", map: "pilote", x: 54, y: 44, region: "Près de Gran", desc: "Une belle maison de campagne au bord du fleuve, ses tableaux, ses tapis, son coffre-fort.", arrive: "IX_5" },
  chaland: { ambiance: "souterrain", name: "Dans le noir", map: "pilote", x: 57, y: 50, region: "Sur le Danube", desc: "Un réduit sans lumière au fond d'un bateau, l'eau qui coule de l'autre côté des planches.", arrive: "X_5" },
  puzsta: { ambiance: "champs", name: "La puzsta", map: "pilote", x: 59, y: 58, region: "Hongrie", desc: "La grande plaine hongroise : des landes, des marais, des îles de bouleaux et de saules.", arrive: "XI_8" },
  budapest: { ambiance: "ville", name: "Budapest", map: "pilote", x: 57, y: 49, region: "Hongrie", desc: "Deux villes face à face sur le fleuve, des quais, des églises dorées et des barques de police.", arrive: "XI_5" },
  semlin: { ambiance: "ville", name: "Semlin", map: "pilote", x: 64, y: 70, region: "Frontière serbe", desc: "La dernière ville de l'empire austro-hongrois, face à Belgrade, avec son quai, sa foule et son Palais de justice.", arrive: "XII_3" },
  prison: { ambiance: "souterrain", name: "La prison de Semlin", map: "pilote", x: 65, y: 72, region: "Semlin", desc: "Une cellule au quatrième étage, une table, une chaise, une paillasse, et une fenêtre grillée.", arrive: "XIV_1" },
  portes: { ambiance: "montagne", name: "Les Portes de Fer", map: "pilote", x: 73, y: 74, region: "Serbie et Roumanie", desc: "Un défilé fameux bordé de murailles de quatre cents mètres, où le fleuve se brise sur les rochers.", arrive: "XV_1" },
  balkans: { ambiance: "montagne", name: "Les Balkans", map: "pilote", x: 80, y: 88, region: "Empire ottoman", desc: "Des montagnes, des peuples soumis depuis des siècles, et en 1876 une révolte qui couve.", arrive: "IV_1" },
  roustchouk: { ambiance: "ville", name: "Roustchouk", map: "pilote", x: 84, y: 78, region: "Bulgarie", desc: "Une ville bulgare sous l'autorité turque, face à Giurgievo, des ruelles sans éclairage et des échoppes de bois.", arrive: "IV_2" },
  delta: { ambiance: "mer", name: "Le delta du Danube", map: "pilote", x: 97, y: 56, region: "Mer Noire", desc: "Des bras de fleuve entre des roseaux, des marais, Kilia et Sulina, et la mer au bout.", arrive: "XVII_1" },
};
