// « Cinq semaines en ballon », Jules Verne, 1863 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérique illustrée d'Ebooks libres et gratuits ; les gravures sont retirées, et le
// sommaire que Verne met en tête de chaque chapitre est gardé, en italique. Les notes de l'auteur restent entre
// parenthèses à leur appel. Les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés).
// Les lieux du livre.
module.exports = {
  londres: { ambiance: "ville", name: "Londres", map: "monde", x: 47, y: 33, region: "L'Angleterre", desc: "La Société royale de géographie, le Traveller's Club, et l'atelier où l'on coud l'enveloppe du ballon.", arrive: "I_1" },
  resolute: { ambiance: "mer", name: "Le « Resolute »", map: "monde", x: 50, y: 70, region: "En mer", desc: "Un transport de la marine anglaise, qui porte le ballon plié dans sa cale, du Cap jusqu'à Zanzibar.", arrive: "VIII_2" },
  zanzibar: { ambiance: "ville", name: "Zanzibar", map: "afrique", x: 82, y: 61, region: "La côte de l'est", desc: "Une île au large de la côte, la maison du consul anglais, et un îlot où l'on gonfle le ballon.", arrive: "XI_1" },
  mrima: { ambiance: "champs", name: "Le Mrima", map: "afrique", x: 80, y: 62, region: "La côte de l'est", desc: "Une côte de champs et de villages sur pilotis, vue de quinze cents pieds de haut.", arrive: "XII_1" },
  rubeho: { ambiance: "montagne", name: "Le mont Rubeho", map: "afrique", x: 77, y: 62, region: "L'Ousagara", desc: "Des marais pleins de fièvre, puis une montagne qu'on passe à six mille pieds dans un vent violent.", arrive: "XIII_1" },
  gommiers: { ambiance: "foret", name: "La forêt de gommiers", map: "afrique", x: 75, y: 60, region: "L'Ounyamouézi", desc: "Une forêt d'arbres à gomme, des antilopes, des singes, et des plaines sèches et fendues.", arrive: "XIV_1" },
  kazeh: { ambiance: "village", name: "Kazeh", map: "afrique", x: 73, y: 59, region: "L'Ounyamouézi", desc: "Un grand marché au carrefour des caravanes, plein de bruit et de monde, et le tembé du sultan.", arrive: "XV_1" },
  lune: { ambiance: "montagne", name: "Les montagnes de la Lune", map: "afrique", x: 70, y: 55, region: "Le pays de la Lune", desc: "Un océan d'herbes hautes, des forêts, des éléphants, et des montagnes bleues à l'horizon.", arrive: "XVI_1" },
  nyanza: { ambiance: "eau", name: "Le lac Ukéréoué", map: "afrique", x: 73, y: 53, region: "Le Nyanza", desc: "Un lac si grand qu'on le prend pour la mer, des îles, des cascades, et un fleuve qui en sort vers le nord.", arrive: "XVIII_1" },
  nil: { ambiance: "eau", name: "Le Nil", map: "afrique", x: 71, y: 47, region: "Le Nil Blanc", desc: "Le fleuve qui descend vers le nord entre des rochers et des forêts, et la route des caravanes d'esclaves.", arrive: "XIX_1" },
  foret: { ambiance: "foret", name: "Les forêts géantes", map: "afrique", x: 65, y: 45, region: "Le pays des Nyam-Nyam", desc: "Des arbres de trois cents pieds, des villages en guerre, et un poteau au milieu d'une place.", arrive: "XX_1" },
  ravin: { ambiance: "montagne", name: "Le ravin de quartz", map: "afrique", x: 61, y: 43, region: "Des montagnes arides", desc: "Un ravin de rochers clairs, qui brillent au soleil, et une tombe.", arrive: "XXIII_1" },
  desert: { ambiance: "route", name: "Le désert", map: "afrique", x: 53, y: 34, region: "Le désert", desc: "Du sable à perte de vue, un ciel blanc de chaleur, pas un souffle de vent, et un puits tari.", arrive: "XXIV_1" },
  oasis: { ambiance: "eau", name: "L'oasis", map: "afrique", x: 50, y: 33, region: "Le désert", desc: "Des palmiers, des mimosas, une source fraîche, et des traces de lion dans le sable.", arrive: "XXVII_2" },
  adamova: { ambiance: "champs", name: "L'Adamova", map: "afrique", x: 43, y: 40, region: "Le Soudan", desc: "Un pays magnifique de pâturages et de forêts, le fleuve Benoué, et la ville d'Yola.", arrive: "XXIX_1" },
  loggoum: { ambiance: "ville", name: "Le Loggoum", map: "afrique", x: 46, y: 36, region: "Le Soudan", desc: "Une capitale de tisserands, son gouverneur, sa cour, et une foule qui hurle sous le ballon.", arrive: "XXX_1" },
  tchad: { ambiance: "eau", name: "Le lac Tchad", map: "afrique", x: 46, y: 33, region: "Le Bornou", desc: "Un lac de roseaux et de papyrus, des îles de pirates, des hippopotames, et des oiseaux de proie.", arrive: "XXXI_1" },
  sahel: { ambiance: "route", name: "La route de l'ouest", map: "afrique", x: 38, y: 30, region: "Aghadès et le désert", desc: "Des plaines, des caravanes, des cavaliers arabes, et le désert qui recommence.", arrive: "XXXVI_1" },
  niger: { ambiance: "eau", name: "Le Niger", map: "afrique", x: 24, y: 31, region: "Le Niger", desc: "Le grand fleuve, ses îles, les monts Hombori, et Tombouctou au bord du désert.", arrive: "XXXVIII_2" },
  senegal: { ambiance: "foret", name: "Les approches du Sénégal", map: "afrique", x: 12, y: 34, region: "Le Sénégal", desc: "Des collines, des forêts de sycomores, des villages ruinés par la guerre, et le fleuve Sénégal et ses cataractes.", arrive: "XLI_1" },
  saintlouis: { ambiance: "ville", name: "Saint-Louis du Sénégal", map: "afrique", x: 8, y: 32, region: "Le Sénégal", desc: "Les postes français le long du fleuve, Médine, puis Saint-Louis et la mer.", arrive: "XLIV_1" },
};
