// « L'Île au trésor » (Treasure Island), R. L. Stevenson, 1883 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais (Project Gutenberg
// n° 120, domaine public). La dédicace et le poème « À l'acheteur qui hésite » ouvrent le livre ; la note de Stevenson
// au chapitre 21 est remise à son appel, entre parenthèses. Les titres des chapitres sont ceux de Stevenson, traduits ;
// les six parties du roman sont rappelées dans les résumés. Tout ce qui n'est pas de Stevenson vit dans les tags.
// Les lieux du livre.
module.exports = {
  benbow: { ambiance: "village", name: "L'Amiral-Benbow", map: "angleterre", x: 22, y: 86, region: "La côte anglaise", desc: "Une auberge isolée au bord d'une anse, sous les falaises, avec sa salle basse, sa route et le bruit du ressac.", arrive: "C0_1" },
  route: { ambiance: "route", name: "La route du hameau", map: "angleterre", x: 24, y: 84, region: "La côte anglaise", desc: "Une route de lande au-dessus de l'anse, un petit pont, un fossé, et le brouillard qui monte de la mer.", arrive: "C5_1" },
  manoir: { ambiance: "chateau", name: "Le manoir du squire", map: "angleterre", x: 27, y: 82, region: "La côte anglaise", desc: "La maison du squire Trelawney, sa grande bibliothèque tapissée de livres, ses bustes et le feu dans la cheminée.", arrive: "C6_1" },
  bristol: { ambiance: "ville", name: "Les quais de Bristol", map: "angleterre", x: 38, y: 70, region: "Bristol", desc: "Les docks, des navires de toutes nations, l'odeur du goudron et du sel, et les vieux marins aux anneaux d'oreilles.", arrive: "C7_3" },
  taverne: { ambiance: "ville", name: "La taverne de la Longue-Vue", map: "angleterre", x: 39, y: 71, region: "Bristol", desc: "Une petite taverne claire sur le port, enseigne neuve, rideaux rouges, sol sablé, et des marins qui parlent fort.", arrive: "C8_1" },
  hispaniola: { ambiance: "mer", name: "L'Hispaniola", map: "monde", x: 34, y: 50, region: "En mer", desc: "Une goélette de deux cents tonneaux, sa cabine à l'arrière, le tonneau de pommes sur le pont, la cambuse du cuisinier.", arrive: "C9_1" },
  mouillage: { ambiance: "eau", name: "Le mouillage du capitaine Kidd", map: "ile", x: 56, y: 82, region: "L'Île au trésor", desc: "Une baie fermée au sud de l'île, l'île du Squelette à l'entrée, des eaux immobiles et des marais qui sentent la fièvre.", arrive: "C13_1" },
  bois: { ambiance: "foret", name: "Les bois de l'île", map: "ile", x: 48, y: 68, region: "L'Île au trésor", desc: "Des marais, des chênes verts tordus, des pins, des sables chauds, et des serpents à sonnette dans les herbes.", arrive: "C14_1" },
  fortin: { ambiance: "foret", name: "Le fortin", map: "ile", x: 62, y: 70, region: "L'Île au trésor", desc: "Une maison de rondins sur un tertre, entourée d'une palissade de pieux, avec une source claire tout près.", arrive: "C18_1" },
  rivage: { ambiance: "eau", name: "La grève et le rocher blanc", map: "ile", x: 52, y: 88, region: "L'Île au trésor", desc: "La langue de sable au bord du mouillage, et la tente de peaux de chèvre de Ben Gunn sous le rocher blanc.", arrive: "C22_2" },
  coracle: { ambiance: "mer", name: "Le coracle", map: "ile", x: 14, y: 56, region: "La côte ouest", desc: "Un petit bateau rond de peaux de chèvre tendues sur des baguettes, qui danse sur la houle comme un bouchon.", arrive: "C23_2" },
  criquenord: { ambiance: "eau", name: "La crique du Nord", map: "ile", x: 46, y: 12, region: "L'Île au trésor", desc: "Une crique étroite et boisée au nord de l'île, avec une épave ancienne échouée dans les herbes et une grève de sable.", arrive: "C26_3" },
  plateau: { ambiance: "foret", name: "Le plateau", map: "ile", x: 40, y: 60, region: "L'Île au trésor", desc: "Un plateau incliné sous l'épaulement de la Longue-Vue, des pins espacés, des genêts, des muscadiers, et la vue sur les deux mers.", arrive: "C31_3" },
  grotte: { ambiance: "souterrain", name: "La grotte de Ben Gunn", map: "ile", x: 78, y: 30, region: "L'Île au trésor", desc: "Une grande grotte aérée sur la colline aux deux pics, une source sous les fougères, un sol de sable.", arrive: "C33_3" },
  retour: { ambiance: "mer", name: "Le voyage du retour", map: "monde", x: 22, y: 58, region: "L'Amérique espagnole", desc: "Un golfe fermé dans un port de l'Amérique espagnole, ses barques de fruits, les lumières de la ville, puis la longue route de Bristol.", arrive: "C34_3" },
};
