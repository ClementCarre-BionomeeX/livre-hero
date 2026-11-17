// « Le Maître de Ballantrae » (The Master of Ballantrae), R. L. Stevenson, 1889 : un livre à lire, sans choix
// (lecture: true). Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais
// (Project Gutenberg n° 864, domaine public). Les notes de M. Mackellar, que Stevenson renvoie en fin de volume, sont
// remises à leur appel, entre parenthèses ; les notes de vocabulaire sont fondues dans le texte. Les titres des
// chapitres sont ceux de Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags.
// Les lieux du livre.
module.exports = {
  edimbourg: { ambiance: "ville", name: "Édimbourg", map: "ecosse", x: 66, y: 52, region: "Lothian", desc: "La maison de M. Johnstone Thomson, avoué, dans la ville où l'éditeur est né.", arrive: "C0_1" },
  durrisdeer: { ambiance: "chateau", name: "La maison de Durrisdeer", map: "ecosse", x: 50, y: 82, region: "Le Solway", desc: "Une haute maison de pierre au bord du Solway, sa grand-salle aux portraits, sa tour, sa terrasse, et le bruit de la mer dans toutes les chambres.", arrive: "C1_1" },
  saintebride: { ambiance: "village", name: "Sainte-Bride", map: "ecosse", x: 47, y: 80, region: "Le Solway", desc: "Le bourg voisin de Durrisdeer, ses rues étroites, sa croix, ses cabarets de contrebandiers.", arrive: "C1_5" },
  bosquet: { ambiance: "foret", name: "Le long bosquet", map: "ecosse", x: 52, y: 84, region: "Le Solway", desc: "Une allée d'arbustes et d'arbres toujours verts qui descend de la maison vers la baie, avec un espace découvert au milieu.", arrive: "C5_3" },
  baie: { ambiance: "mer", name: "La baie de Durrisdeer", map: "ecosse", x: 54, y: 88, region: "Le Solway", desc: "La grève, le débarcadère des contrebandiers, et le Craig Head sous lequel les lougres attendent le vent.", arrive: "C2_6" },
  sarah: { ambiance: "mer", name: "Le « Sarah »", map: "monde", x: 22, y: 52, region: "En mer", desc: "Un navire marchand tombé aux mains du pirate Teach : un pont plein de rhum, de cris et de sang.", arrive: "C3_1" },
  marais: { ambiance: "eau", name: "Les marais de la côte d'Amérique", map: "monde", x: 20, y: 44, region: "La côte d'Amérique", desc: "Des forêts noyées, de l'eau chaude jusqu'à la ceinture, des moustiques et des serpents.", arrive: "C3_8" },
  albany: { ambiance: "ville", name: "Albany", map: "monde", x: 22, y: 36, region: "La province de New York", desc: "Une ville de marchands hollandais et de traitants, en haut de l'Hudson, dernière étape avant le désert.", arrive: "C3_11" },
  desert: { ambiance: "foret", name: "Le désert de l'Ouest", map: "monde", x: 18, y: 32, region: "Les forêts d'Amérique", desc: "Des forêts sans fin, des rivières, des portages, des montagnes, et pas une maison.", arrive: "C3_13" },
  inde: { ambiance: "ville", name: "Une ville des Indes", map: "monde", x: 70, y: 52, region: "Les Indes", desc: "Un quartier de jardins clos de murs, une maison à véranda, une lampe sur le plancher.", arrive: "C7_1" },
  route: { ambiance: "route", name: "La route de Glasgow", map: "ecosse", x: 44, y: 60, region: "Les landes", desc: "Des collines de landes dans la brume, des torrents gonflés, une chaise de poste qui monte au pas.", arrive: "C8_8" },
  nonesuch: { ambiance: "mer", name: "Le « Nonesuch »", map: "monde", x: 36, y: 34, region: "L'Atlantique", desc: "Un très vieux navire trop chargé, à la dunette haute, qui roule à n'y pas croire.", arrive: "C9_2" },
  newyork: { ambiance: "ville", name: "New York", map: "monde", x: 23, y: 39, region: "La province de New York", desc: "Une petite ville au fond d'un vaste port, la maison de milord dans son jardin, avec une grange immense.", arrive: "C10_1" },
  echoppe: { ambiance: "ville", name: "L'échoppe du Master", map: "monde", x: 24, y: 40, region: "La province de New York", desc: "Une petite maison de planches sous des acacias, un guichet ouvert sur la rue, un banc devant, la baie en face.", arrive: "C10_3" },
  hudson: { ambiance: "eau", name: "L'Hudson et ses bords", map: "monde", x: 21, y: 34, region: "La province de New York", desc: "Le fleuve et ses rives, les bateaux de Sir William, les camps du soir au bord de l'eau.", arrive: "C11_5" },
  camp: { ambiance: "neige", name: "Le camp de Sir William", map: "monde", x: 19, y: 30, region: "Les forêts d'Amérique", desc: "Des feux sur une hauteur, au-dessus d'un lac gelé, entre les forêts et les montagnes blanches.", arrive: "C11_6" },
  tombe: { ambiance: "neige", name: "Le plateau de la tombe", map: "monde", x: 18, y: 29, region: "Les forêts d'Amérique", desc: "Un plateau nu sous les montagnes, une tente givrée, des marchandises éparses et une tombe peu profonde.", arrive: "C12_6" },
};
