// « La Flèche noire » (The Black Arrow), R. L. Stevenson, 1888 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction de P.-G. La Chesnais (Mercure de France, 1901), transcrite par le Project Gutenberg (n° 70065,
// d'après Gallica ; domaine public). Texte gardé tel quel, sauf la typographie (« À » accentué, les vers en italique)
// et les deux notes de Stevenson, remises entre parenthèses à la fin du paragraphe qui les appelle.
// Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  tunstall: { ambiance: "village", name: "Le hameau de Tunstall", map: "tunstall", x: 40, y: 50, region: "Forêt de Tunstall", desc: "Une vingtaine de maisons de chêne dans une longue vallée verte, au-dessus d'une rivière ; un pont, une croix de pierre, l'église entourée d'ifs.", arrive: "P_1" },
  appleyard: { ambiance: "champs", name: "La maison d'Appleyard", map: "tunstall", x: 48, y: 44, region: "Forêt de Tunstall", desc: "La dernière maison du village, isolée parmi les lilas, au bord d'un champ qui monte vers la forêt.", arrive: "P_3" },
  kettley: { ambiance: "village", name: "L'auberge du Soleil, à Kettley", map: "tunstall", x: 20, y: 72, region: "Kettley", desc: "Une auberge de village au bord des marais, où Sir Daniel loge ses hommes et rançonne ses voisins.", arrive: "I1_1" },
  marais: { ambiance: "eau", name: "Les marais", map: "tunstall", x: 26, y: 64, region: "Kettley", desc: "Une chaussée à travers les roseaux, les ajoncs et les saules, coupée de fondrières, sous le grand vent.", arrive: "I2_1" },
  bac: { ambiance: "eau", name: "Le bac de la Till", map: "tunstall", x: 32, y: 58, region: "La Till", desc: "Une rivière argileuse entre des îlots de saules, la hutte du passeur, sa barque.", arrive: "I3_1" },
  grimstone: { ambiance: "foret", name: "La ruine de Grimstone", map: "tunstall", x: 46, y: 32, region: "Forêt de Tunstall", desc: "Une maison forte incendiée au fond d'un vallon d'aubépines, devenue le lieu de réunion des hommes de la forêt.", arrive: "I4_1" },
  foret: { ambiance: "foret", name: "La forêt de Tunstall", map: "tunstall", x: 56, y: 38, region: "Forêt de Tunstall", desc: "Des bois de chênes, de hêtres et de pins, des clairières de bruyère, des sentiers qui se croisent.", arrive: "I3_3" },
  moathouse: { ambiance: "chateau", name: "Moat-House", map: "tunstall", x: 54, y: 50, region: "Forêt de Tunstall", desc: "La forteresse forestière de Sir Daniel : un rectangle de pierre rouge flanqué de tours rondes, entouré d'un fossé plein d'eau.", arrive: "II1_1" },
  shoreby: { ambiance: "ville", name: "Shoreby-sur-Till", map: "tunstall", x: 74, y: 70, region: "Shoreby", desc: "Une petite ville ouverte au bord de la mer, pleine de seigneurs lancastriens et de leurs hommes, sous la neige.", arrive: "III1_1" },
  plage: { ambiance: "mer", name: "La maison sur la plage", map: "tunstall", x: 84, y: 76, region: "Shoreby", desc: "Une maison isolée hors de la ville, entre les dunes de genêt et la grève, avec un jardin clos de murs.", arrive: "III1_2" },
  croix: { ambiance: "neige", name: "La croix de Sainte-Bride", map: "tunstall", x: 68, y: 62, region: "Shoreby", desc: "Une croix de pierre au carrefour de deux routes, à la lisière de la forêt, un peu en arrière de Shoreby.", arrive: "III3_1" },
  port: { ambiance: "mer", name: "Le port de Shoreby", map: "tunstall", x: 80, y: 68, region: "Shoreby", desc: "Un bassin entre des collines de sable, des bateaux à l'ancre, des tavernes de matelots.", arrive: "III4_1" },
  bateau: { ambiance: "mer", name: "La Bonne Espérance", map: "tunstall", x: 90, y: 72, region: "En mer", desc: "Le petit bateau ponté du capitaine Arblaster, un mât, un chien à bord, chargé de vin de Gascogne.", arrive: "III4_3" },
  repaire: { ambiance: "neige", name: "Le terrier de Lawless", map: "tunstall", x: 62, y: 56, region: "Forêt de Tunstall", desc: "Une caverne de terre sous les racines d'un hêtre à demi déraciné, près d'un carrefour de routes.", arrive: "IV1_1" },
  maisondaniel: { ambiance: "ville", name: "La maison de Sir Daniel à Shoreby", map: "tunstall", x: 76, y: 66, region: "Shoreby", desc: "Une grande maison blanchie à la chaux, encadrée de chêne sculpté, pleine de gens d'armes et d'hôtes.", arrive: "IV2_1" },
  abbaye: { ambiance: "nuit", name: "L'église de l'abbaye de Shoreby", map: "tunstall", x: 75, y: 72, region: "Shoreby", desc: "La grande église de Shoreby, ses stalles, son chœur, ses vitraux, et le droit d'asile.", arrive: "IV3_3" },
  risingham: { ambiance: "ville", name: "Le logis du comte Risingham", map: "tunstall", x: 72, y: 68, region: "Shoreby", desc: "La maison d'un simple gentilhomme où loge le comte, gardée par ses hommes.", arrive: "IV5_1" },
  taverne: { ambiance: "mer", name: "Une taverne du port", map: "tunstall", x: 81, y: 66, region: "Shoreby", desc: "Une taverne grossière près du port, où boivent les matelots.", arrive: "IV6_3" },
  holywood: { ambiance: "foret", name: "L'abbaye de Holywood", map: "tunstall", x: 60, y: 20, region: "Holywood", desc: "Une abbaye au fond d'un vallon de la forêt, dont les grandes fenêtres brillent dans la nuit.", arrive: "V6_4" },
};
