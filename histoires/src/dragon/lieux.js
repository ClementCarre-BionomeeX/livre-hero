// « L'Heure du dragon » (The Hour of the Dragon), Robert E. Howard, 1935-1936 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// de décembre 1935 à avril 1936 (Project Gutenberg n° 42243, domaine public). Les titres des chapitres sont ceux de Howard ;
// ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  maison_orastes: { ambiance: "nuit", name: "Une maison de Belvérus", map: "hyboria", x: 64, y: 30, region: "Némédie", desc: "Une salle close aux tentures de velours, des cierges, une table d'ébène et un sarcophage de jade.", arrive: "C1_1" },
  belverus: { ambiance: "ville", name: "Belvérus", map: "hyboria", x: 66, y: 28, region: "Némédie", desc: "La capitale de la Némédie, où la peste noire rôde dans les rues.", arrive: "C2_1" },
  valkia: { ambiance: "combat", name: "La vallée de la Valkia", map: "hyboria", x: 56, y: 34, region: "La frontière", desc: "Une large vallée peu profonde, bordée de falaises, où coule la Valkia, sur la frontière de l'Aquilonie.", arrive: "C2_2" },
  palais: { ambiance: "chateau", name: "Le palais royal de Belvérus", map: "hyboria", x: 66, y: 27, region: "Némédie", desc: "Des salles aux tapisseries, des escaliers dérobés, un jardin, et le palais de Tarascus.", arrive: "C4_1" },
  fosses: { ambiance: "souterrain", name: "Les fosses sous le palais", map: "hyboria", x: 66, y: 29, region: "Némédie", desc: "Des cachots, des couloirs sans lumière et des escaliers creusés sous le palais de Belvérus.", arrive: "C5_1" },
  frontiere: { ambiance: "route", name: "La route de la frontière", map: "hyboria", x: 54, y: 36, region: "La frontière", desc: "Une route qui file vers l'ouest à travers un pays nu, puis des collines boisées.", arrive: "C7_1" },
  cabane: { ambiance: "foret", name: "La cabane de Zélata", map: "hyboria", x: 50, y: 38, region: "Les collines", desc: "Une cabane dans les collines, un feu de tamaris, un loup couché devant la porte.", arrive: "C7_4" },
  servius: { ambiance: "champs", name: "Le domaine de Servius Galannus", map: "hyboria", x: 44, y: 40, region: "Aquilonie", desc: "Une grande maison entre les arbres, aux portes de Tarantia, avec des boiseries de chêne sculpté.", arrive: "C8_1" },
  tarantia: { ambiance: "ville", name: "Tarantia", map: "hyboria", x: 42, y: 40, region: "Aquilonie", desc: "La capitale de l'Aquilonie, ses portes voûtées, ses tours et ses rues.", arrive: "C9_1" },
  tourdefer: { ambiance: "chateau", name: "La tour de Fer", map: "hyboria", x: 42, y: 41, region: "Aquilonie", desc: "Une prison de Tarantia, un fût de pierre massive et nue.", arrive: "C9_3" },
  asura: { ambiance: "temple", name: "Le refuge des prêtres d'Asura", map: "hyboria", x: 41, y: 42, region: "Aquilonie", desc: "Une salle cachée au bout de passages secrets, sous Tarantia.", arrive: "C10_1" },
  fleuve: { ambiance: "eau", name: "Le Khorotas", map: "hyboria", x: 40, y: 50, region: "Aquilonie", desc: "Le grand fleuve qui descend vers le sud, à travers les collines, jusqu'aux montagnes du Poitain.", arrive: "C11_1" },
  poitain: { ambiance: "champs", name: "Le Poitain", map: "hyboria", x: 38, y: 58, region: "Le Poitain", desc: "Une province du sud, ses plaines, ses fleurs et ses palmiers, au pied des montagnes.", arrive: "C11_3" },
  zingara: { ambiance: "route", name: "Les routes de Zingara", map: "hyboria", x: 30, y: 64, region: "Zingara", desc: "De longues routes blanches dans un pays de guerres civiles et de seigneurs pillards.", arrive: "C12_1" },
  valbroso: { ambiance: "chateau", name: "Le château de Valbroso", map: "hyboria", x: 28, y: 66, region: "Zingara", desc: "Un château perché comme une aire de vautour sur une colline nue qui domine la route.", arrive: "C12_3" },
  foret: { ambiance: "foret", name: "La forêt des collines", map: "hyboria", x: 34, y: 68, region: "La frontière d'Argos", desc: "Une forêt sombre au pied des collines, entre Zingara et Argos.", arrive: "C12_6" },
  argos: { ambiance: "route", name: "Les routes d'Argos", map: "hyboria", x: 42, y: 70, region: "Argos", desc: "Un pays de collines et de champs, vers la mer.", arrive: "C13_1" },
  messantia: { ambiance: "port", name: "Messantia", map: "hyboria", x: 46, y: 74, region: "Argos", desc: "La grande cité marchande d'Argos, ses quais, ses tavernes et ses maisons de marchands.", arrive: "C13_2" },
  mer: { ambiance: "mer", name: "La mer occidentale", map: "hyboria", x: 40, y: 82, region: "La mer", desc: "La haute mer bleue qui longe la côte vers le sud.", arrive: "C15_1" },
  baie: { ambiance: "eau", name: "Une baie au sud de Khemi", map: "hyboria", x: 58, y: 90, region: "Stygie", desc: "Une petite baie cachée entre les palétuviers, les palmiers et les lianes.", arrive: "C16_2" },
  khemi: { ambiance: "ville", name: "Khemi", map: "hyboria", x: 60, y: 88, region: "Stygie", desc: "Le grand port de la Stygie, ses murs noirs, ses tours et ses rues de nuit.", arrive: "C17_1" },
  temple: { ambiance: "temple", name: "Un temple de Khemi", map: "hyboria", x: 61, y: 88, region: "Stygie", desc: "Un temple sombre aux colonnes énormes, aux galeries pareilles à des corniches de pierre noire.", arrive: "C17_3" },
  pyramide: { ambiance: "souterrain", name: "La pyramide du désert", map: "hyboria", x: 62, y: 92, region: "Stygie", desc: "Une masse noire et triangulaire dans le désert, des couloirs en pente et des salles sans lumière.", arrive: "C18_1" },
  salle_morts: { ambiance: "souterrain", name: "La salle des morts", map: "hyboria", x: 62, y: 93, region: "Stygie", desc: "Une salle immense où s'élèvent, rangée sur rangée, des milliers de sarcophages peints.", arrive: "C19_2" },
  camp: { ambiance: "route", name: "Le camp des Némédiens", map: "hyboria", x: 50, y: 42, region: "La Shirki", desc: "Des tentes et des pavillons dans une plaine, entre Tarantia et la Shirki.", arrive: "C21_1" },
  gorge: { ambiance: "montagne", name: "Les collines de Goralie", map: "hyboria", x: 46, y: 38, region: "La Shirki", desc: "Des collines sauvages, des sentiers tortueux, des défilés et des falaises.", arrive: "C21_7" },
  lions: { ambiance: "combat", name: "La vallée des Lions", map: "hyboria", x: 47, y: 40, region: "La Shirki", desc: "Une vallée en éventail, aux collines escarpées, dont le fond monte en terrasses.", arrive: "C22_1" },
  autel: { ambiance: "montagne", name: "L'Autel du Roi", map: "hyboria", x: 48, y: 41, region: "La Shirki", desc: "La plus haute colline de la vallée, couronnée d'une pierre ancienne pareille à un autel.", arrive: "C22_3" },
};
