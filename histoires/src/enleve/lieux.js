// « Enlevé ! » (Kidnapped), R. L. Stevenson, 1886 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1886 (Project
// Gutenberg n° 421, domaine public). Les quelques notes de Stevenson sur les mots écossais sont fondues dans le texte ;
// l'écossais des personnages est rendu par le ton plus que par l'orthographe. Les titres des chapitres sont ceux de
// Stevenson, traduits. Tout ce qui n'est pas de Stevenson vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  essendean: { ambiance: "village", name: "Essendean", map: "ecosse", x: 62, y: 90, region: "La forêt d'Ettrick", desc: "Le village natal de David, au sud, avec son presbytère, son cimetière et la Forth au loin.", arrive: "C1_1" },
  cramond: { ambiance: "champs", name: "Les environs de Cramond", map: "ecosse", x: 66, y: 75, region: "Lothian", desc: "Une campagne de collines et de champs, au-dessus du Forth, avec ses fermes et ses chemins.", arrive: "C2_1" },
  shaws: { ambiance: "chateau", name: "La maison de Shaws", map: "ecosse", x: 65, y: 73, region: "Lothian", desc: "Une grande maison à moitié bâtie au fond d'un vallon, sans fumée, une aile jamais finie, une tour d'escalier.", arrive: "C2_3" },
  queensferry: { ambiance: "mer", name: "Queensferry", map: "ecosse", x: 63, y: 71, region: "Le Forth", desc: "Le passage du Forth, la jetée du bac, l'auberge de Hawes et les navires à l'ancre.", arrive: "C5_3" },
  covenant: { ambiance: "mer", name: "Le brick « Covenant »", map: "ecosse", x: 40, y: 30, region: "En mer", desc: "Un brick de Dysart, sa cale, son gaillard d'avant où dorment les matelots.", arrive: "C7_1" },
  dunette: { ambiance: "mer", name: "La dunette du « Covenant »", map: "ecosse", x: 34, y: 36, region: "En mer", desc: "La cabine de poupe : une table, des couchettes, les armes et la poudre, deux portes et une claire-voie.", arrive: "C8_2" },
  erraid: { ambiance: "mer", name: "L'îlot d'Earraid", map: "ecosse", x: 10, y: 60, region: "Mull", desc: "Un îlot de granit et de bruyère au bout de Mull, face à Iona, battu par la pluie.", arrive: "C14_1" },
  mull: { ambiance: "montagne", name: "L'île de Mull", map: "ecosse", x: 18, y: 56, region: "Mull", desc: "Des landes sans chemins, des marais et des collines, quelques maisons de pierre basses.", arrive: "C15_1" },
  morven: { ambiance: "montagne", name: "Le Morven", map: "ecosse", x: 24, y: 48, region: "Le Morven", desc: "La côte en face de Mull, des montagnes sauvages, des routes d'herbe au bord des lochs.", arrive: "C16_1" },
  lettermore: { ambiance: "foret", name: "Le bois de Lettermore", map: "ecosse", x: 32, y: 46, region: "Appin", desc: "Un bois de bouleaux accroché à une pente raide au-dessus du loch, en Appin, sur la route de Glenure.", arrive: "C17_1" },
  aucharn: { ambiance: "village", name: "Aucharn, la maison de James des Glens", map: "ecosse", x: 35, y: 44, region: "Appin", desc: "Une ferme de la vallée de Duror, où l'on cache des armes à la lueur des torches.", arrive: "C19_1" },
  rochers: { ambiance: "montagne", name: "Les rochers de la vallée", map: "ecosse", x: 38, y: 46, region: "Les montagnes", desc: "Une vallée de pierre où gronde un torrent ; un grand rocher plat, nu, brûlant au soleil.", arrive: "C20_1" },
  corrynakiegh: { ambiance: "montagne", name: "Le ravin de Corrynakiegh", map: "ecosse", x: 40, y: 49, region: "Les montagnes", desc: "Une fente dans la montagne, des bouleaux, un ruisseau où l'on pêche à la main.", arrive: "C21_1" },
  lande: { ambiance: "montagne", name: "La lande de Rannoch", map: "ecosse", x: 46, y: 45, region: "Rannoch", desc: "Une étendue plate de bruyère, de tourbières et de flaques noires, sans un arbre où se cacher.", arrive: "C22_1" },
  cage: { ambiance: "montagne", name: "La Cage de Cluny", map: "ecosse", x: 48, y: 38, region: "Le Ben Alder", desc: "Une hutte suspendue dans un bois escarpé du Ben Alder, accrochée aux arbres, avec un foyer contre le rocher.", arrive: "C23_1" },
  ericht: { ambiance: "montagne", name: "Les montagnes au-delà du loch Ericht", map: "ecosse", x: 50, y: 50, region: "Les montagnes", desc: "Des sommets sinistres, des sources de rivières, la pluie et le brouillard pendant trois nuits.", arrive: "C24_1" },
  balquhidder: { ambiance: "village", name: "Le Balquhidder", map: "ecosse", x: 50, y: 60, region: "Le Balquhidder", desc: "Les pentes d'un pays de petits clans, la maison de Duncan Dhu Maclaren et sa cornemuse.", arrive: "C25_1" },
  stirling: { ambiance: "eau", name: "Le pont de Stirling", map: "ecosse", x: 54, y: 66, region: "Le Forth", desc: "Le vieux pont sur le Forth, sous le château, avec sa sentinelle.", arrive: "C26_1" },
  limekilns: { ambiance: "village", name: "Limekilns", map: "ecosse", x: 60, y: 69, region: "Le Forth", desc: "Un village de pêcheurs sur la rive nord du Forth, son auberge, ses barques sur la grève.", arrive: "C26_3" },
  rankeillor: { ambiance: "ville", name: "La maison de M. Rankeillor", map: "ecosse", x: 63, y: 69, region: "Le Forth", desc: "Une belle maison de Queensferry, un cabinet plein de papiers et de livres de droit.", arrive: "C27_2" },
  edimbourg: { ambiance: "ville", name: "Édimbourg", map: "ecosse", x: 69, y: 73, region: "Lothian", desc: "La capitale vue de la colline de Corstorphine : le château sur son rocher, les maisons de dix et quinze étages.", arrive: "C30_2" },
};
