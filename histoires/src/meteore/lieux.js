// « La Chasse au météore », Jules Verne, 1908 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1908). Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres et des pages sont de Claude (ceux de Verne, très longs, sont cités dans les
// résumés quand ils servent), comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  proth: { ambiance: "ville", name: "La place de la Constitution", x: 50, y: 50, region: "Le centre de Whaston, Virginie", desc: "La grande place de Whaston, ses hôtels, son terre-plein, la maison du juge John Proth et la salle du Tribunal.", map: "whaston", arrive: "I_1" },
  forsyth: { ambiance: "ville", name: "La tour d'Elisabeth street", x: 35, y: 35, region: "Elisabeth street, Whaston", desc: "La maison de Mr Dean Forsyth, surmontée d'une tour : une chambre ronde à quatre fenêtres, des lunettes et des télescopes.", map: "whaston", arrive: "II_1" },
  hudelson: { ambiance: "ville", name: "Le donjon de Moriss street", x: 62, y: 32, region: "17, Moriss street, Whaston", desc: "La maison du docteur Hudelson et son donjon d'astronome, à un demi-mille de la tour de Forsyth, qu'on voit de ses fenêtres.", map: "whaston", arrive: "III_1" },
  lambeth: { ambiance: "ville", name: "La maison de Lambeth street", x: 45, y: 70, region: "Lambeth street, Whaston", desc: "Une maison confortable avec un jardin et une vaste terrasse, préparée pour de futurs mariés.", map: "whaston", arrive: "V_2" },
  paris: { ambiance: "ville", name: "Paris", x: 55, y: 55, region: "France", desc: "La chambre en désordre de Zéphyrin Xirdal, et non loin, le cabinet du banquier Robert Lecœur.", map: "voyage", arrive: "X_1" },
  washington: { ambiance: "ville", name: "Washington", x: 25, y: 60, region: "La capitale des États-Unis", desc: "La ville où siège la Conférence Internationale.", map: "voyage", arrive: "XIII_3" },
  mozik: { ambiance: "mer", name: "À bord du Mozik", x: 33, y: 45, region: "L'Atlantique Nord, de Charleston au Groenland", desc: "Un steamer bondé de curieux, qui longe la côte américaine puis remonte vers le Groenland.", map: "voyage", arrive: "XVI_1" },
  upernivik: { ambiance: "neige", name: "Upernivik", x: 40, y: 15, region: "La côte ouest du Groenland", desc: "Une île rocheuse, une station danoise, quelques centaines d'habitants, et une rade pleine de navires.", map: "voyage", arrive: "XVII_1" },
};
