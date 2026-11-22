// « Les Naufragés du Jonathan », Jules Verne, 1909 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1909). Les notes de l'auteur restent entre
// parenthèses à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme
// tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  terredefeu: { ambiance: "foret", name: "La Terre de Feu", x: 50, y: 30, region: "La Magellanie, au sud du détroit de Magellan", desc: "La plus grande île de l'archipel : des forêts de hêtres, des prairies, des montagnes, et le canal du Beagle qui la borde au sud.", map: "magellanie", arrive: "I1_1" },
  ileneuve: { ambiance: "village", name: "L'Île Neuve", x: 80, y: 48, region: "L'entrée du canal du Beagle, par l'Est", desc: "Une petite île en forme de pentagone, une maison de pierre au pied d'un morne, et un campement de Fuégiens.", map: "magellanie", arrive: "I3_1" },
  caphorn: { ambiance: "mer", name: "Le cap Horn", x: 62, y: 90, region: "L'île Horn, à la pointe sud de l'Amérique", desc: "Une énorme croupe de rocher battue par les deux océans, sans un feu pour avertir les navires.", map: "magellanie", arrive: "I3_5" },
  naufrage: { ambiance: "mer", name: "Les récifs de la presqu'île Hardy", x: 25, y: 80, region: "L'île Hoste, côte sud-ouest", desc: "La presqu'île rocailleuse recourbée comme un cimeterre, ses récifs, et la carcasse du Jonathan encastrée entre les pointes.", map: "hoste", arrive: "I4_4" },
  liberia: { ambiance: "village", name: "Libéria", x: 50, y: 45, region: "La baie Scotchwell, au bord de la rivière", desc: "Le campement des naufragés devenu capitale : des maisons démontables, un terre-plein, une place, et peu à peu une ville.", map: "hoste", arrive: "II3_4" },
  bourgneuf: { ambiance: "port", name: "Le Bourg-Neuf", x: 57, y: 43, region: "L'autre rive de la rivière, en face de Libéria", desc: "Le hameau groupé autour de la maison du Kaw-djer, avec son anse où mouillent les embarcations, relié à Libéria par un ponceau.", map: "hoste", arrive: "II7_6" },
  ferme: { ambiance: "champs", name: "La ferme des Rivière", x: 40, y: 28, region: "Un plateau à douze kilomètres de la baie Scotchwell", desc: "Quatre fermes de troncs d'arbres sur les côtés d'un quadrilatère, au bord d'une plaine bornée de forêts.", map: "hoste", arrive: "II4_7" },
  grottes: { ambiance: "souterrain", name: "Les grottes de la pointe de l'Est", x: 72, y: 50, region: "Le littoral, à l'est de Libéria", desc: "Un chapelet de trois grottes au bord de la mer, reliées par une galerie basse qui menace de s'effondrer.", map: "hoste", arrive: "II5_2" },
  dumas: { ambiance: "route", name: "L'isthme de la presqu'île Dumas", x: 30, y: 10, region: "Le nord de l'île Hoste", desc: "Une langue de terre étroite entre deux bras de mer, où la route du Nord s'étrangle.", map: "hoste", arrive: "III7_2" },
  placers: { ambiance: "montagne", name: "Les placers", x: 45, y: 18, region: "L'intérieur de l'île Hoste", desc: "Des vallées de l'intérieur creusées de trous, de claims et de campements.", map: "hoste", arrive: "III11_1" },
};
