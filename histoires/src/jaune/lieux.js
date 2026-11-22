// « Le Mystère de la chambre jaune », Gaston Leroux, 1907 : un livre à lire, sans choix (lecture: true). Texte de Leroux
// (1868-1927, domaine public), d'après l'édition du projet Gutenberg ; les deux plans de Rouletabille ne sont pas
// reproduits, leurs légendes le sont. Les titres des chapitres sont de Leroux ; ceux des pages, comme tout ce qui vit dans
// les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  pavillon: { ambiance: "foret", name: "Le pavillon de la chênaie", map: "glandier", x: 30, y: 60, region: "Le parc du Glandier", desc: "Un pavillon d'un seul étage au fond du parc, contre le mur d'enceinte : un vestibule, un laboratoire aux fourneaux, un lavatory, et la petite Chambre Jaune.", arrive: "I_1" },
  chambrejaune: { ambiance: "nuit", name: "La Chambre Jaune", map: "glandier", x: 28, y: 62, region: "Le pavillon de la chênaie", desc: "Une pièce toute petite, tendue de papier jaune, un lit de fer, une table de nuit à dessus de marbre, une seule fenêtre grillée et une seule porte.", arrive: "I_3" },
  glandier: { ambiance: "chateau", name: "Le château du Glandier", map: "glandier", x: 55, y: 40, region: "La forêt de Sainte-Geneviève", desc: "Un vieux donjon féodal, un corps de logis refait sous Louis XIV, une cour d'honneur, une grille et la loge des concierges.", arrive: "IV_1" },
  galerie: { ambiance: "nuit", name: "Les galeries du premier étage", map: "glandier", x: 60, y: 35, region: "Le château du Glandier, aile droite", desc: "Une galerie droite et une galerie tournante, éclairées comme en plein jour, l'appartement de Mlle Stangerson, et sous les fenêtres une terrasse.", arrive: "XIV_1" },
  parc: { ambiance: "foret", name: "Le parc et la chênaie", map: "glandier", x: 40, y: 55, region: "Le parc du Glandier", desc: "Des allées de gravier, un bosquet, la chênaie, un mur d'enceinte et un fossé.", arrive: "VIII_1" },
  etang: { ambiance: "eau", name: "L'étang", map: "glandier", x: 20, y: 45, region: "Le parc du Glandier", desc: "Un étang aux bords de terre molle, où les traces se perdent, et un petit sentier vers la route d'Épinay.", arrive: "IX_3" },
  donjon: { ambiance: "village", name: "L'auberge du Donjon", map: "glandier", x: 70, y: 25, region: "Près de la grille du château", desc: "Une masure aux poutres noircies par la fumée, un grand feu de bois, une omelette au lard, un aubergiste rustre et une jeune femme aux yeux doux.", arrive: "X_1" },
  epinay: { ambiance: "village", name: "Épinay-sur-Orge", map: "glandier", x: 85, y: 70, region: "La route de Paris", desc: "Une petite gare de la ligne d'Orléans, un cabaret où l'on attend le train, et la grande route qui mène au château.", arrive: "XII_2" },
  train: { ambiance: "route", name: "Le train d'Épinay", map: "france", x: 50, y: 50, region: "La ligne d'Orléans", desc: "Un compartiment de banlieue, au départ de la gare d'Orléans, où voyagent un juge d'instruction et son greffier.", arrive: "III_1" },
  paris: { ambiance: "ville", name: "Paris", map: "france", x: 52, y: 40, region: "Paris", desc: "La chambre d'un jeune avocat, le café du Barreau, les couloirs du Palais, la salle de rédaction de *L'Époque*.", arrive: "I_4" },
  versailles: { ambiance: "ville", name: "La cour d'assises de Versailles", map: "france", x: 40, y: 42, region: "Seine-et-Oise", desc: "Une salle d'assises comble, des avocats jusque sur les marches, des jurés, et une barre où l'on vient témoigner.", arrive: "XXVI_2" },
};
