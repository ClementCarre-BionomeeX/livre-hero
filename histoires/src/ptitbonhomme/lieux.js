// « P'tit-Bonhomme », Jules Verne, 1893 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (Hetzel, 1893). Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui
// vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  westport: { ambiance: "ville", name: "Westport", x: 24, y: 36, region: "Comté de Mayo, province de Connaught", desc: "Une petite ville au fond de la baie de Clew, son mail planté d'ormes, son port presque vide et ses ruelles misérables.", map: "irlande", arrive: "I1_1" },
  galway: { ambiance: "ville", name: "Galway et sa ragged-school", x: 28, y: 48, region: "Comté de Galway, province de Connaught", desc: "Une petite ville sur sa baie, et dans une ruelle, l'école des déguenillés de M. O'Bodkins, son grenier et sa cour.", map: "irlande", arrive: "I3_1" },
  limerick: { ambiance: "ville", name: "Limerick", x: 38, y: 60, region: "Comté de Limerick, province de Munster", desc: "Une des grandes villes de l'île, sur le Shannon, son hôtel et son théâtre.", map: "irlande", arrive: "I6_2" },
  kerwan: { ambiance: "champs", name: "La ferme de Kerwan", x: 27, y: 67, region: "Comté de Kerry, près de la rivière de Cashen", desc: "Une ferme d'une centaine d'acres : la maison moitié pierre moitié chaume, les étables, les champs d'avoine et de pommes de terre, les moutons.", map: "irlande", arrive: "I8_1" },
  rindok: { ambiance: "village", name: "Rindok", x: 38, y: 12, region: "Comté de Donegal, province d'Ulster", desc: "Un hameau misérable de la côte du Donegal, et la cabane de la Hard.", map: "irlande", arrive: "I10_1" },
  tralee: { ambiance: "ville", name: "Tralee", x: 21, y: 72, region: "Le chef-lieu du comté de Kerry", desc: "La ville la plus proche de Kerwan, à une douzaine de milles par la route.", map: "irlande", arrive: "I16_4" },
  trelingar: { ambiance: "chateau", name: "Trelingar-castle", x: 42, y: 74, region: "Comté de Cork, province de Munster", desc: "Un château de trois siècles, son parc, ses écuries, ses chenils et ses annexes.", map: "irlande", arrive: "II1_1" },
  routes: { ambiance: "route", name: "Sur les routes", x: 48, y: 70, region: "Les campagnes du comté de Cork", desc: "Des routes désertes à travers une région ruinée, des fermes abandonnées, des rivières.", map: "irlande", arrive: "II2_2" },
  killarney: { ambiance: "foret", name: "Les lacs de Killarney", x: 30, y: 79, region: "Comté de Kerry", desc: "Trois lacs entre les montagnes, leurs îles, leurs ruines d'abbayes, leurs bois et leurs échos.", map: "irlande", arrive: "II4_2" },
  cork: { ambiance: "ville", name: "Cork", x: 50, y: 84, region: "La capitale du Munster", desc: "Une grande ville sur la Lee, ses faubourgs, ses quais, et plus bas sa baie et le port de Queenstown.", map: "irlande", arrive: "II7_1" },
  cote: { ambiance: "route", name: "La côte du sud-est", x: 66, y: 74, region: "De Youghal à Waterford, puis vers Wicklow", desc: "Une route qui suit le littoral, ses bourgades, ses plages et ses stations de bains.", map: "irlande", arrive: "II9_1" },
  dublin: { ambiance: "ville", name: "Dublin", x: 72, y: 45, region: "La capitale de l'Irlande, comté de Dublin, province de Leinster", desc: "La Liffey et ses quais, ses ponts, ses grandes rues, ses statues et ses quartiers pauvres.", map: "irlande", arrive: "II10_1" },
  bazar: { ambiance: "ville", name: "Le bazar de Bedfort-street", x: 70, y: 48, region: "Un quartier populaire de Dublin", desc: "Une petite boutique au rez-de-chaussée d'une maison à trois étages : deux pièces, une sur la rue, une sur la cour.", map: "irlande", arrive: "II11_1" },
  belfast: { ambiance: "ville", name: "Belfast", x: 70, y: 17, region: "Comté d'Antrim, province d'Ulster", desc: "Une ville industrielle à l'embouchure du Lagan, ses filatures de lin et ses ouvrières.", map: "irlande", arrive: "II12_7" },
  londonderry: { ambiance: "ville", name: "Londonderry", x: 50, y: 9, region: "Comté de Londonderry, province d'Ulster", desc: "Une ville de commerce au fond de son lough, et son port.", map: "irlande", arrive: "II14_3" },
  mer: { ambiance: "mer", name: "En mer", x: 82, y: 10, region: "Au large de la côte nord de l'Irlande", desc: "La mer qui baigne l'Irlande au nord, entre l'île et l'Écosse.", map: "irlande", arrive: "II14_1" },
};
