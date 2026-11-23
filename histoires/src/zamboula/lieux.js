// « Ombres sur Zamboula » (Shadows in Zamboula), Robert E. Howard, 1935 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en novembre 1935 (Project Gutenberg n° 42196, domaine public). Les titres des chapitres sont ceux de Howard ; ceux des
// pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  bazar: { ambiance: "ville", name: "Le bazar des Fourbisseurs", map: "zamboula", x: 50, y: 50, region: "Zamboula", desc: "Un coin de bazar où passent marchands, mendiants, courtisanes, nomades et cavaliers touraniens.", arrive: "C1_1" },
  taverne: { ambiance: "nuit", name: "La taverne d'Aram Baksh", map: "zamboula", x: 20, y: 52, region: "Le bord du désert", desc: "La dernière maison habitée de la rue, entre un jardin de dattiers et une palmeraie, au bord du désert.", arrive: "C1_3" },
  huttes: { ambiance: "nuit", name: "Les huttes abandonnées", map: "zamboula", x: 22, y: 56, region: "Le bord du désert", desc: "Une rangée de huttes vides en face de la taverne, sous des palmiers épars.", arrive: "C2_2" },
  rues: { ambiance: "ville", name: "Les rues de nuit", map: "zamboula", x: 40, y: 50, region: "Zamboula", desc: "Des rues désertes, des maisons sans lumière, des boutiques fermées et des arches obscures.", arrive: "C2_4" },
  temple: { ambiance: "temple", name: "Le temple d'Hanuman", map: "zamboula", x: 56, y: 44, region: "Zamboula", desc: "Un édifice trapu au milieu d'une place, des portes de bronze ouvertes, une idole de marbre noir.", arrive: "C2_6" },
  maison: { ambiance: "ville", name: "Une maison derrière une porte cintrée", map: "zamboula", x: 46, y: 46, region: "Zamboula", desc: "Une maison au fond d'une rue étroite, des lampes de cuivre et un divan de velours.", arrive: "C4_4" },
};
