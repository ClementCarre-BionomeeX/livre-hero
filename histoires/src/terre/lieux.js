// « De la Terre à la Lune », Jules Verne, 1865 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine
// public, d'après l'édition du Projet Gutenberg. Les notes de l'auteur restent entre parenthèses à leur appel. Les titres
// des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit dans les tags (gens, lieux,
// mots, résumés).
// Les lieux du livre.
module.exports = {
  gunclub: { ambiance: "ville", name: "Le Gun-Club", map: "etats", x: 80, y: 38, region: "Baltimore, Maryland", desc: "Une grande salle au 21, Union-Square, des colonnes faites de canons posés sur des mortiers, et le fauteuil du président taillé comme un mortier.", arrive: "I_1" },
  baltimore: { ambiance: "ville", name: "Baltimore", map: "etats", x: 79, y: 40, region: "Le Maryland", desc: "Les rues, les quais, la maison du président au 3, Republican-street, et une foule qui ne dort plus.", arrive: "III_1" },
  cambridge: { ambiance: "ville", name: "L'Observatoire de Cambridge", map: "etats", x: 88, y: 27, region: "Le Massachusetts", desc: "Le bureau astronomique de la ville où fut fondée la première université des États-Unis.", arrive: "IV_1" },
  lune: { ambiance: "nuit", name: "La Lune", map: "monde", x: 50, y: 6, region: "Le ciel", desc: "L'astre des nuits, ses montagnes, ses cratères, ses taches sombres, et la face qu'elle tourne toujours vers la Terre.", arrive: "V_1" },
  tampa: { ambiance: "ville", name: "Tampa-Town", map: "etats", x: 74, y: 82, region: "La Floride", desc: "Une petite ville au fond de la baie d'Espiritu-Santo, le fort Brooke, un port, et une population qui double, puis décuple.", arrive: "XIII_1" },
  floride: { ambiance: "foret", name: "La Floride du Sud", map: "etats", x: 76, y: 84, region: "La Floride", desc: "Des champs, des forêts presque impénétrables, des rivières à caïmans, et des cavaliers séminoles à l'horizon.", arrive: "XIII_2" },
  stoneshill: { ambiance: "champs", name: "Stone's-Hill", map: "etats", x: 77, y: 85, region: "La Floride", desc: "Une colline de pierres au milieu d'une plaine brûlée, un puits de neuf cents pieds, et douze cents fours rangés en cercle.", arrive: "XIII_3" },
  skersnaw: { ambiance: "foret", name: "Le bois de Skersnaw", map: "etats", x: 75, y: 81, region: "La Floride", desc: "Un fourré épais de cyprès géants, de sycomores, de tulipiers et de magnolias, aux portes de Tampa-Town.", arrive: "XXI_2" },
  longspeak: { ambiance: "montagne", name: "Long's-Peak", map: "etats", x: 40, y: 36, region: "Les montagnes Rocheuses", desc: "Un sommet des montagnes Rocheuses, et le télescope géant de l'Observatoire de Cambridge.", arrive: "XXIV_3" },
};
