// « Un billet de loterie », Jules Verne, 1886 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). L'unique note de l'auteur
// reste entre parenthèses à sa place. Verne n'a pas titré ses chapitres : leurs titres, comme ceux des pages, sont de
// Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  auberge: { ambiance: "village", name: "L'auberge de Dal", x: 40, y: 58, region: "Le Vestfjorddal, dans le Telemark", desc: "Une maison de sapin aux parois roses, aux balcons sculptés, où l'on sert la meilleure cuisine du Telemark.", map: "norvege", arrive: "I_1" },
  dal: { ambiance: "village", name: "Dal", x: 41, y: 57, region: "Le Telemark", desc: "Un hameau de quelques maisons peintes, éparses au fond de l'étroite vallée du Vestfjorddal, au pied des collines.", map: "norvege", arrive: "II_1" },
  maan: { ambiance: "eau", name: "Le passage du Maan", x: 42, y: 59, region: "Près de Dal", desc: "Une rivière impétueuse qu'on passe en bac, avec la hutte du passeur un peu en arrière de la rive.", map: "norvege", arrive: "VII_1" },
  rjukanfos: { ambiance: "montagne", name: "Le Rjukanfos", x: 33, y: 55, region: "Le haut du Vestfjorddal", desc: "Une chute célèbre où le Maan se jette dans un gouffre, entre deux murailles à pic, dans un nuage d'écume.", map: "norvege", arrive: "VIII_1" },
  gousta: { ambiance: "montagne", name: "Le Gousta", x: 37, y: 53, region: "Au-dessus du Vestfjorddal", desc: "La plus haute montagne du Telemark, un cône de neige qui sort d'une forêt de sapins.", map: "norvege", arrive: "X_4" },
  bergen: { ambiance: "ville", name: "Bergen", x: 8, y: 42, region: "La côte ouest", desc: "Un vieux port de commerce entre deux fiords, d'où partent les navires pour la grande pêche.", map: "norvege", arrive: "XIII_1" },
  tinn: { ambiance: "eau", name: "Le lac Tinn", x: 45, y: 62, region: "Le Telemark", desc: "Un long lac entre des montagnes boisées, semé d'îlots, de Moel à Tinoset.", map: "norvege", arrive: "XVI_1" },
  bamble: { ambiance: "champs", name: "La ferme de Bamble", x: 52, y: 70, region: "Le Telemark", desc: "Le gaard du fermier Helmboë, l'un des plus importants de la province.", map: "norvege", arrive: "XVI_3" },
  route: { ambiance: "route", name: "La route de Christiania", x: 63, y: 66, region: "Par Kongsberg et Drammen", desc: "Une route de montagne, puis de forêts et de champs, coupée de barrières à péage, jusqu'au fiord de Christiania.", map: "norvege", arrive: "XVI_4" },
  christiania: { ambiance: "ville", name: "Christiania", x: 72, y: 63, region: "Au fond de son fiord", desc: "La capitale de la Norvège, qu'on appelle aujourd'hui Oslo : un port animé, des quartiers neufs et une ceinture de collines vertes.", map: "norvege", arrive: "XVII_1" },
  hotel: { ambiance: "ville", name: "L'Hôtel Victoria", x: 73, y: 62, region: "Christiania", desc: "Un hôtel de la capitale, sous le vestibule duquel on lit : Fiat lux.", map: "norvege", arrive: "XVIII_3" },
  benett: { ambiance: "ville", name: "Le bazar de M. Benett", x: 71, y: 62, region: "Christiania", desc: "Un immense magasin où l'on trouve de tout, des kariols aux bijoux anciens.", map: "norvege", arrive: "XVIII_1" },
  universite: { ambiance: "ville", name: "L'Université de Christiania", x: 72, y: 61, region: "Christiania", desc: "Une grande salle, des cours, et ce jour-là une foule qui déborde jusque dans les rues.", map: "norvege", arrive: "XIX_1" },
};
