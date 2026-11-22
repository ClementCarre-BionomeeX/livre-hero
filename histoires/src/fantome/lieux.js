// « Le Fantôme de l'Opéra », Gaston Leroux, 1910 : un livre à lire, sans choix (lecture: true). Texte de Leroux
// (1868-1927, domaine public), d'après l'édition du projet Gutenberg ; les notes de l'auteur sont entre parenthèses.
// Les titres des chapitres sont de Leroux ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  paris: { ambiance: "ville", name: "Paris", map: "paris", x: 50, y: 50, region: "Paris", desc: "Les archives de l'Opéra, le cabinet d'un ancien juge, et, rue de Rivoli, en face des Tuileries, le petit appartement d'un vieux Persan.", arrive: "P_1" },
  coulisses: { ambiance: "nuit", name: "Les coulisses de l'Opéra", map: "opera", x: 50, y: 45, region: "L'Opéra", desc: "Des escaliers, des couloirs mal éclairés au gaz, la loge de la Sorelli, le foyer de la danse, des machinistes, des petites danseuses qui ont peur.", arrive: "I_1" },
  salle: { ambiance: "ville", name: "La salle de l'Opéra", map: "opera", x: 50, y: 65, region: "L'Opéra", desc: "Le velours rouge, les loges d'abonnés sur cinq étages, une scène immense, et sous la coupole un lustre de cristal.", arrive: "II_1" },
  logechristine: { ambiance: "nuit", name: "La loge de Christine", map: "opera", x: 35, y: 50, region: "L'Opéra, au bout d'un couloir", desc: "Une petite loge d'artiste au rez-de-chaussée, une table, un divan, et une grande glace qui tient tout un mur.", arrive: "II_5" },
  foyer: { ambiance: "ville", name: "Le grand escalier et le foyer", map: "opera", x: 50, y: 80, region: "L'Opéra", desc: "Le grand escalier de marbre, les galeries, les salons du foyer public où l'on soupe et où l'on danse les soirs de bal.", arrive: "III_2" },
  bureau: { ambiance: "ville", name: "Le cabinet des directeurs", map: "opera", x: 70, y: 40, region: "L'Opéra, l'administration", desc: "Un bureau directorial, des secrétaires, des lettres à l'encre rouge, et derrière la porte capitonnée deux directeurs qui ne rient plus.", arrive: "III_3" },
  loge5: { ambiance: "nuit", name: "La loge n° 5", map: "opera", x: 40, y: 62, region: "L'Opéra, premières loges", desc: "Une première loge comme les autres, à gauche de la scène, près d'une énorme colonne. Personne ne la loue.", arrive: "VII_1" },
  toits: { ambiance: "nuit", name: "Les toits de l'Opéra", map: "opera", x: 50, y: 10, region: "L'Opéra", desc: "Les dômes, les plombs, les gouttières, Paris en bas, et au-dessus du fronton la grande lyre d'Apollon en bronze.", arrive: "XIII_1" },
  dessous: { ambiance: "souterrain", name: "Les dessous de l'Opéra", map: "opera", x: 50, y: 90, region: "Sous la scène", desc: "Cinq étages de charpentes, de trappes, de treuils et de contrepoids, des lumignons, des fermeurs de portes, et tout au fond le mur d'une cuve pleine d'eau.", arrive: "XXI_1" },
  lac: { ambiance: "eau", name: "La demeure du Lac", map: "opera", x: 55, y: 95, region: "Sous l'Opéra", desc: "Un lac noir sous la terre, une barque, et sur l'autre rive une maison avec un orgue, une chambre Louis-Philippe et une chambre sans fenêtres.", arrive: "XXII_1" },
  supplices: { ambiance: "souterrain", name: "La chambre des supplices", map: "opera", x: 60, y: 95, region: "La demeure du Lac", desc: "Une petite pièce hexagonale, six murs de glace, un arbre de fer, et une lumière qui chauffe.", arrive: "XXI_9" },
  perros: { ambiance: "mer", name: "Perros-Guirec", map: "france", x: 20, y: 35, region: "La côte bretonne", desc: "Un bourg au bord de la mer, l'auberge du Soleil-Couchant, la grève où, enfants, Raoul et Christine écoutaient des légendes.", arrive: "VI_2" },
  cimetiere: { ambiance: "neige", name: "Le cimetière de Perros", map: "france", x: 21, y: 34, region: "Perros-Guirec", desc: "Des tombes sous la neige autour de la vieille église, et contre le mur un ossuaire où des crânes sont rangés.", arrive: "VI_7" },
  valerius: { ambiance: "ville", name: "Chez la maman Valérius", map: "paris", x: 55, y: 40, region: "Rue Notre-Dame-des-Victoires", desc: "Un petit appartement, une alcôve, une vieille dame qui tricote dans son lit, et une soubrette.", arrive: "IX_2" },
  chagny: { ambiance: "ville", name: "L'hôtel de Chagny", map: "paris", x: 40, y: 55, region: "Le faubourg Saint-Germain", desc: "Le vieil hôtel des Chagny, la chambre de Raoul, une porte-fenêtre sur un balcon.", arrive: "X_1" },
  bois: { ambiance: "foret", name: "Le Bois de Boulogne", map: "paris", x: 10, y: 50, region: "Aux portes de Paris", desc: "Une allée déserte sous la lune, un froid de loup, et un coupé qui passe au pas.", arrive: "IX_4" },
};
