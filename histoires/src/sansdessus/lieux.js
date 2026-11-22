// « Sans dessus dessous », Jules Verne, 1889 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (troisième édition Hetzel). Les notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres et des pages sont de Claude (ceux de Verne, très longs, sont cités
// dans les résumés quand ils servent), comme tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  newpark: { ambiance: "chateau", name: "L'hôtel de New-Park", x: 70, y: 30, region: "Le riche quartier de New-Park, à Baltimore", desc: "Le palais de Mrs Evangélina Scorbitt : façade à balcons, salons dorés, galeries de tableaux, et un téléphone qui mène tout droit chez Maston.", map: "baltimore", arrive: "I_1" },
  ville: { ambiance: "ville", name: "Baltimore", x: 50, y: 50, region: "Le Maryland, États-Unis", desc: "La grande ville du Maryland, ses rues, ses journaux, ses bars, ses foules qui s'enflamment pour une nouvelle.", map: "baltimore", arrive: "I_2" },
  auctions: { ambiance: "ville", name: "La salle des ventes", x: 45, y: 58, region: "Bolton-street, Baltimore", desc: "La salle ordinaire des enchères publiques, avec son bureau, son marteau d'ivoire, sa barrière et son public de curieux.", map: "baltimore", arrive: "III_1" },
  gunclub: { ambiance: "chateau", name: "Le Gun-Club", x: 55, y: 42, region: "Union-square, Baltimore", desc: "Le cercle des artilleurs de Baltimore : un vaste hall orné de canons, de mortiers et de souvenirs de batailles.", map: "baltimore", arrive: "IV_1" },
  cottage: { ambiance: "village", name: "Balistic-Cottage", x: 30, y: 35, region: "179, Franklin-street, Baltimore", desc: "La petite maison de J.-T. Maston, dans une rue tranquille : une véranda, un salon modeste et un cabinet où trône le tableau noir.", map: "baltimore", arrive: "VI_1" },
  prison: { ambiance: "souterrain", name: "La prison de Baltimore", x: 40, y: 70, region: "Baltimore", desc: "Une prison solide, une cellule étroite, et une foule qui gronde au-dehors.", map: "baltimore", arrive: "XII_2" },
  zanzibar: { ambiance: "port", name: "Zanzibar", x: 62, y: 62, region: "La côte orientale d'Afrique", desc: "Une île et un port sur la côte de Zanguebar, où réside un consul des États-Unis.", map: "monde", arrive: "XIV_1" },
  kisongo: { ambiance: "village", name: "Kisongo", x: 59, y: 60, region: "Le pays de Wamasai, en Afrique orientale", desc: "La bourgade où réside le sultan Bâli-Bâli, au pied des premières pentes du Kilimandjaro.", map: "monde", arrive: "XVII_1" },
  kilimandjaro: { ambiance: "montagne", name: "Le Kilimandjaro", x: 59, y: 59, region: "Le pays de Wamasai, à trois degrés au sud de l'Équateur", desc: "La plus haute montagne d'Afrique, ses neiges, ses forêts, et des chantiers immenses sur son flanc sud.", map: "monde", arrive: "XVII_2" },
};
