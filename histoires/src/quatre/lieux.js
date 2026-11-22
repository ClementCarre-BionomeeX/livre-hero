// « La Marque des quatre » (The Sign of the Four), Arthur Conan Doyle, 1890 : un livre à lire, sans choix (lecture: true).
// Texte de Conan Doyle (1859-1930, domaine public), dans la traduction française publiée chez Hachette en 1896, d'après
// l'édition du projet Gutenberg. Les titres des chapitres sont ceux de cette traduction ; ceux des pages, comme tout ce
// qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  bakerstreet: { ambiance: "ville", name: "Baker Street", map: "londres", x: 40, y: 35, region: "Londres", desc: "Le salon du 221 bis, la cheminée, le violon, la seringue dans son écrin, la fenêtre sur la rue, et Mrs Hudson qui monte les cartes de visite.", arrive: "I_1" },
  lyceum: { ambiance: "ville", name: "Le Lyceum Théâtre", map: "londres", x: 50, y: 45, region: "Le Strand", desc: "Une foule devant les entrées, une file de fiacres, des becs de gaz noyés dans le brouillard, et le troisième pilier à gauche.", arrive: "III_3" },
  thaddeus: { ambiance: "ville", name: "La maison de Thaddeus Sholto", map: "londres", x: 52, y: 70, region: "Un faubourg au sud de la Tamise", desc: "Une maison misérable dans une rue de villas neuves, et derrière une porte un salon tendu de soie, des peaux de tigre et un narghilé.", arrive: "IV_1" },
  pondichery: { ambiance: "nuit", name: "Pondichery Lodge", map: "londres", x: 55, y: 90, region: "Upper Norwood", desc: "Une grande maison carrée derrière un haut mur, un jardin retourné comme une carrière, un laboratoire sous les toits.", arrive: "V_1" },
  lambeth: { ambiance: "ville", name: "Pinchin Lane", map: "londres", x: 48, y: 55, region: "Lambeth", desc: "Des maisons basses et misérables, et la boutique d'un vieil empailleur pleine de bêtes, vivantes ou mortes.", arrive: "VII_1" },
  rues: { ambiance: "ville", name: "Les rues de Londres", map: "londres", x: 50, y: 60, region: "Londres, au petit matin", desc: "Des rues de faubourg, des chantiers de bois, des tavernes, et un chien qui court le nez au sol.", arrive: "VII_4" },
  embarcadere: { ambiance: "eau", name: "L'embarcadère de Mordecai Smith", map: "londres", x: 45, y: 50, region: "Au bord de la Tamise, en face de Millbank", desc: "Un petit ponton de bois, une maison de brique, l'écriteau « Bateaux à louer », une femme et un petit garçon.", arrive: "VIII_2" },
  camberwell: { ambiance: "ville", name: "Chez Mrs Forrester", map: "londres", x: 58, y: 65, region: "Camberwell", desc: "Une maison tranquille, un salon, une lampe à abat-jour et une fenêtre entrouverte.", arrive: "XI_2" },
  tamise: { ambiance: "eau", name: "La Tamise", map: "londres", x: 70, y: 50, region: "De la Tour aux marais de Plumstead", desc: "Des chantiers, des forêts de mâts, des gabares lourdes, et plus bas les marais sous la lune.", arrive: "X_2" },
  agra: { ambiance: "chateau", name: "Le fort d'Agra", map: "inde", x: 45, y: 35, region: "Les Indes, 1857", desc: "Une immense forteresse au bord du fleuve, des quartiers abandonnés, des couloirs sans fin et une petite poterne gardée la nuit.", arrive: "XII_3" },
  andaman: { ambiance: "mer", name: "Les îles Andaman", map: "inde", x: 75, y: 75, region: "Le golfe du Bengale", desc: "Un bagne sous un climat humide, des marais, des forçats, et des officiers qui jouent aux cartes le soir.", arrive: "XII_10" },
};
