// « Robinson Crusoé » (The Life and Strange Surprizing Adventures of Robinson Crusoe), Daniel Defoe, 1719 : un livre à
// lire, sans choix (lecture: true). Texte de Defoe (vers 1660-1731, domaine public), dans la traduction de Petrus Borel
// (Borel et Varenne, 1836, domaine public), d'après la saisie du projet Gutenberg et d'Ebooks libres et gratuits. Les
// titres des chapitres sont ceux de Borel ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots,
// résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  york: { ambiance: "ville", name: "York et Hull", map: "monde", x: 52, y: 14, region: "Le Yorkshire, en Angleterre", desc: "La maison paternelle d'York, et le port de Hull sur l'Humber, d'où partent les navires pour Londres.", arrive: "I_1" },
  yarmouth: { ambiance: "mer", name: "La rade d'Yarmouth", map: "monde", x: 56, y: 18, region: "La côte est de l'Angleterre", desc: "Un mouillage ouvert aux tempêtes, où les navires attendent le vent pour remonter la Tamise.", arrive: "II_1" },
  londres: { ambiance: "ville", name: "Londres", map: "monde", x: 54, y: 21, region: "En Angleterre", desc: "Les quais, les marchands, et la petite maison de la veuve qui garde l'argent de Robinson.", arrive: "III_2" },
  salle: { ambiance: "ville", name: "Sallé", map: "monde", x: 48, y: 36, region: "Le royaume de Maroc", desc: "Un port de corsaires maures, où les captifs chrétiens servent comme esclaves.", arrive: "IV_1" },
  afrique: { ambiance: "mer", name: "La côte d'Afrique", map: "monde", x: 44, y: 48, region: "Entre le Maroc et le cap Vert", desc: "Des plages désertes où les lions rugissent la nuit, des rivières, et des villages de Noirs nus.", arrive: "V_1" },
  large: { ambiance: "mer", name: "En haute mer", map: "monde", x: 32, y: 52, region: "L'Atlantique", desc: "Des semaines de mer, des tempêtes, et des cartes qui ne disent pas tout.", arrive: "III_3" },
  bresil: { ambiance: "champs", name: "La plantation de Bahia", map: "monde", x: 20, y: 78, region: "Le Brésil portugais", desc: "Des champs de tabac et de canne à sucre, un moulin, et des voisins planteurs.", arrive: "VII_1" },
  lisbonne: { ambiance: "ville", name: "Lisbonne", map: "monde", x: 45, y: 30, region: "Le Portugal", desc: "Un grand port, la maison du vieux capitaine portugais, et les flottes du Brésil.", arrive: "LIV_1" },
  pyrenees: { ambiance: "neige", name: "Les Pyrénées", map: "monde", x: 50, y: 27, region: "Entre l'Espagne et la France", desc: "Des passages fermés par la neige, des forêts noires, des loups affamés par l'hiver.", arrive: "LVI_1" },
  rivage: { ambiance: "mer", name: "Le rivage du naufrage", map: "ile", x: 48, y: 80, region: "L'île de Robinson", desc: "Une plage battue par les vagues, un banc de sable au large, et le grand arbre épineux de la première nuit.", arrive: "IX_1" },
  epave: { ambiance: "mer", name: "Le navire échoué", map: "ile", x: 55, y: 92, region: "Au large du rivage", desc: "Un vaisseau couché sur le sable, plein de vivres, de câbles, d'outils et de poudre.", arrive: "IX_3" },
  chateau: { ambiance: "chateau", name: "Le château", map: "ile", x: 40, y: 62, region: "L'île de Robinson", desc: "Une tente et une grotte au pied d'un rocher, derrière une double palissade où l'on entre par une échelle.", arrive: "XI_3" },
  campagne: { ambiance: "foret", name: "La maison de campagne", map: "ile", x: 55, y: 45, region: "La vallée du ruisseau", desc: "Des savanes, des vignes, des citronniers, une tonnelle entourée de pieux qui ont pris racine, et le parc aux chèvres.", arrive: "XIX_3" },
  colline: { ambiance: "montagne", name: "La colline de l'ouest", map: "ile", x: 18, y: 40, region: "L'autre côté de l'île", desc: "Un versant d'où l'on voit, par temps clair, une terre lointaine au-delà de la mer.", arrive: "XXI_2" },
  pointe: { ambiance: "nuit", name: "La pointe des festins", map: "ile", x: 20, y: 78, region: "Le sud-ouest de l'île", desc: "Une grève où les pirogues abordent, un foyer creusé dans le sable, et des os humains.", arrive: "XXXII_3" },
  caverne: { ambiance: "souterrain", name: "La caverne", map: "ile", x: 62, y: 30, region: "Au fond des bois", desc: "Une grotte sèche cachée derrière un hallier, où brillent dans le noir les parois et les yeux d'un vieux bouc.", arrive: "XXXIV_3" },
  courant: { ambiance: "mer", name: "Les courants", map: "ile", x: 85, y: 20, region: "Au large de la pointe est", desc: "Un récif, un courant furieux qui emporte les barques vers la haute mer.", arrive: "XXVII_3" },
};
