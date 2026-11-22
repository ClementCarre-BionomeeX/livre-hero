// « Tarzan, l'enfant des singes » (Tarzan of the Apes), Edgar Rice Burroughs, 1912 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1912 (Project
// Gutenberg n° 78, domaine public). Les titres des chapitres sont ceux de Burroughs, traduits (le ch. XXI est renommé) ;
// ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude. Le regard raciste du
// narrateur sur les Africains et sur Esmeralda a été retiré ou adouci ; voir la notice.
// Les lieux du livre.
module.exports = {
  fuwalda: { ambiance: "mer", name: "À bord du Fuwalda", map: "jungle", x: 18, y: 30, region: "Au large de l'Afrique", desc: "Un petit trois-mâts de commerce, sale et mal tenu, son pont où se croisent des officiers brutaux et des matelots qui grondent.", arrive: "C1_1" },
  plage: { ambiance: "mer", name: "La plage de la rade", map: "jungle", x: 34, y: 52, region: "La côte", desc: "Une petite rade fermée entre deux pointes boisées, une plage de sable, la jungle qui commence au bord de la clairière.", arrive: "C2_3" },
  cabane: { ambiance: "foret", name: "La cabane de rondins", map: "jungle", x: 37, y: 50, region: "La côte", desc: "Une cabane de rondins bâtie de ses mains par un Anglais, sa lourde porte, ses fenêtres grillagées, sa table, ses livres et son berceau.", arrive: "C3_1" },
  foret: { ambiance: "foret", name: "La forêt des grands singes", map: "jungle", x: 52, y: 42, region: "Le plateau", desc: "La forêt du plateau, en arrière de l'océan : des arbres immenses, des lianes, des clairières où la tribu se nourrit et se repose.", arrive: "C4_1" },
  arene: { ambiance: "nuit", name: "L'amphithéâtre du Dum-Dum", map: "jungle", x: 60, y: 36, region: "Le plateau", desc: "Une clairière ronde cernée de grands arbres, au gazon doux, avec en son centre le tambour de terre des grands singes.", arrive: "C7_4" },
  cimes: { ambiance: "foret", name: "Les cimes de la jungle", map: "jungle", x: 56, y: 50, region: "La jungle", desc: "Les chemins aériens de la forêt, la terrasse moyenne et la terrasse supérieure des branches, à trente mètres du sol.", arrive: "C8_2" },
  riviere: { ambiance: "eau", name: "Le lac de la forêt", map: "jungle", x: 48, y: 56, region: "La jungle", desc: "Une petite étendue d'eau claire et tranquille au milieu de la forêt, où l'on vient boire, et où personne d'autre ne se baigne.", arrive: "C5_3" },
  mbonga: { ambiance: "village", name: "Le village de Mbonga", map: "jungle", x: 72, y: 30, region: "Au bord de la rivière", desc: "Un village de huttes de chaume entouré d'une palissade, ses champs de manioc, ses feux, et au milieu un grand poteau.", arrive: "C10_1" },
  piste: { ambiance: "foret", name: "La piste des éléphants", map: "jungle", x: 64, y: 40, region: "La jungle", desc: "Une vieille piste d'éléphants qui serpente vers le nord-est, assez large pour qu'on y marche en file indienne.", arrive: "C21_1" },
  croiseur: { ambiance: "mer", name: "Le croiseur français", map: "jungle", x: 22, y: 52, region: "Au large de la rade", desc: "Un petit croiseur de la marine française qui patrouille la côte, ses canots, ses officiers et ses marins.", arrive: "C19_5" },
  mission: { ambiance: "village", name: "La mission du père Constantin", map: "jungle", x: 40, y: 18, region: "Plus au nord", desc: "Quelques bâtiments entourés d'une forte palissade, un champ cultivé, une chapelle : le premier poste de la civilisation.", arrive: "C25_5" },
  port: { ambiance: "ville", name: "Le port à l'embouchure du fleuve", map: "jungle", x: 38, y: 8, region: "La côte, au nord", desc: "Un petit port colonial à l'embouchure d'un grand fleuve, ses bateaux, son télégraphe, son hôtel à véranda où l'on boit l'absinthe.", arrive: "C26_1" },
  paris: { ambiance: "ville", name: "La préfecture de police, à Paris", map: "monde", x: 52, y: 22, region: "Paris", desc: "Le bureau d'un haut fonctionnaire de la police, sa fenêtre sur le boulevard et ses boîtes d'empreintes digitales.", arrive: "C26_4" },
  baltimore: { ambiance: "ville", name: "La maison des Porter, à Baltimore", map: "monde", x: 24, y: 28, region: "Baltimore", desc: "Une vieille demeure des faubourgs de Baltimore et sa bibliothèque encombrée de livres.", arrive: "C27_1" },
  ferme: { ambiance: "champs", name: "La ferme du Wisconsin", map: "monde", x: 18, y: 22, region: "Le Wisconsin", desc: "Une petite maison de ferme remise à neuf sur une éminence, au milieu des épaisses forêts du Nord.", arrive: "C27_3" },
  incendie: { ambiance: "foret", name: "La forêt en feu", map: "monde", x: 17, y: 23, region: "Le Wisconsin", desc: "La route forestière prise entre deux murs de flammes, sous une fumée noire.", arrive: "C27_5" },
  hameau: { ambiance: "village", name: "L'auberge du hameau", map: "monde", x: 19, y: 21, region: "Le Wisconsin", desc: "La modeste auberge d'un petit hameau, son salon étouffant et sa véranda étroite.", arrive: "C28_1" },
  gare: { ambiance: "ville", name: "La gare", map: "monde", x: 20, y: 21, region: "Le Wisconsin", desc: "La petite salle d'attente d'une gare de campagne, un soir.", arrive: "C28_4" },
};
