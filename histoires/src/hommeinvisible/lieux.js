// « L'Homme invisible » (The Invisible Man), H. G. Wells, 1897 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Achille Laurent (La Revue de Paris, 1900-1901, puis Mercure de France), transcrite par
// Wikisource (domaine public ; transcription reprise d'un export Wikisource de février 2025). Texte gardé tel quel, sauf la
// typographie ; la note du traducteur sur les fenêtres anglaises est mise entre parenthèses dans sa page.
// Tout ce qui n'est pas de Wells ou de son traducteur vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  auberge: { ambiance: "village", name: "L'auberge d'Iping", map: "sussex", x: 30, y: 40, region: "Iping", desc: "L'auberge de M. et Mme Hall, avec son bar et son petit salon, où descend l'étranger.", arrive: "I_1" },
  iping: { ambiance: "village", name: "Iping", map: "sussex", x: 33, y: 44, region: "Iping", desc: "Un petit village de la campagne anglaise, sa grand-rue, sa boutique, sa forge, ses fêtes de la Pentecôte.", arrive: "IV_1" },
  presbytere: { ambiance: "village", name: "Le presbytère", map: "sussex", x: 37, y: 38, region: "Iping", desc: "La maison du pasteur Bunting et de sa femme, à Iping.", arrive: "IV_3" },
  dunes: { ambiance: "champs", name: "Les dunes", map: "sussex", x: 25, y: 30, region: "Iping", desc: "Les grandes dunes désertes autour d'Iping, couvertes d'herbe rase.", arrive: "VIII_1" },
  route: { ambiance: "route", name: "La route d'Adderdean", map: "sussex", x: 48, y: 46, region: "Sur les routes", desc: "Une route de campagne, entre Iping, Adderdean et Bramblehurst.", arrive: "IX_1" },
  portstowe: { ambiance: "village", name: "Port-Stowe", map: "sussex", x: 70, y: 64, region: "La côte", desc: "Une petite ville de la côte, ses auberges de faubourg et son quai.", arrive: "XIV_1" },
  kemp: { ambiance: "ville", name: "La maison du docteur Kemp", map: "sussex", x: 82, y: 72, region: "Port-Burdock", desc: "Une grande maison sur la colline au-dessus de Port-Burdock, avec un belvédère d'où le docteur Kemp domine la ville et la mer.", arrive: "XV_1" },
  cricket: { ambiance: "ville", name: "Aux Joyeux Joueurs de cricket", map: "sussex", x: 86, y: 80, region: "Port-Burdock", desc: "Une auberge au bas de la colline, à la tête de ligne du tramway.", arrive: "XVI_1" },
  burdock: { ambiance: "ville", name: "Port-Burdock", map: "sussex", x: 88, y: 84, region: "Port-Burdock", desc: "La ville au bord de la mer, au pied de la colline de Kemp : ses villas, son tramway, ses rues ouvrières.", arrive: "XXVIII_2" },
  campagne: { ambiance: "champs", name: "La sablière de Burdock", map: "sussex", x: 76, y: 60, region: "Port-Burdock", desc: "La campagne autour de Port-Burdock, ses champs, ses haies et une sablière au bord d'un chemin.", arrive: "XXVI_1" },
  portland: { ambiance: "ville", name: "Great Portland Street", map: "londres", x: 40, y: 30, region: "Londres", desc: "Une grosse maison de rapport mal tenue, au fond d'une impasse de Great Portland Street, où Griffin louait une chambre.", arrive: "XX_1" },
  oxford: { ambiance: "ville", name: "Oxford Street", map: "londres", x: 40, y: 46, region: "Londres", desc: "La grande rue commerçante de Londres, ses omnibus, sa foule.", arrive: "XXI_1" },
  omnium: { ambiance: "ville", name: "L'Omnium", map: "londres", x: 52, y: 40, region: "Londres", desc: "Un grand magasin de Londres où l'on vend de tout, près de Tottenham Court Road.", arrive: "XXII_1" },
  drurylane: { ambiance: "ville", name: "La boutique de Drury Lane", map: "londres", x: 62, y: 52, region: "Londres", desc: "Une petite boutique de costumier dans une rue écartée près de Drury Lane, la rue des théâtres.", arrive: "XXIII_1" },
  auberge_ep: { ambiance: "village", name: "À l'Homme invisible", map: "sussex", x: 66, y: 60, region: "La côte", desc: "Une petite auberge près de Port-Stowe.", arrive: "EP_1" },
};
