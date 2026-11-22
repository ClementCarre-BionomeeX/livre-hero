// « Kim », Rudyard Kipling, 1901 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais de 1901 (Project
// Gutenberg n° 2226, domaine public). Les épigraphes en vers sont gardées en tête des chapitres. Les titres des
// chapitres (Kipling les numérotait seulement) et ceux des pages sont de Claude, comme tout ce qui vit dans les tags
// (gens, lieux, mots, résumés). Les généralités du narrateur sur les « Orientaux » ont été retirées ou adoucies ; voir la notice.
// Les lieux du livre.
module.exports = {
  canon: { ambiance: "ville", name: "Le canon Zam-Zammah", map: "inde", x: 30, y: 18, region: "Lahore", desc: "Un énorme canon de bronze sur sa plate-forme de brique, devant le musée de Lahore ; qui le tient tient le Pendjab.", arrive: "C1_1" },
  musee: { ambiance: "temple", name: "La Maison des Merveilles", map: "inde", x: 31, y: 18, region: "Lahore", desc: "Le musée de Lahore, ses sculptures gréco-bouddhiques, ses vitrines, et le bureau du conservateur à l'abri des cloisons de bois.", arrive: "C1_4" },
  bazar: { ambiance: "ville", name: "Les bazars de Lahore", map: "inde", x: 29, y: 19, region: "Lahore", desc: "Les rues étroites et grouillantes de la ville, ses boutiques, ses toits plats où l'on dort l'été.", arrive: "C1_8" },
  serai: { ambiance: "nuit", name: "Le caravansérail du Cachemire", map: "inde", x: 30, y: 20, region: "Lahore", desc: "Une grande cour carrée entourée d'arcades, pleine de chameaux, de chevaux, de ballots et de marchands venus du Nord.", arrive: "C1_11" },
  train: { ambiance: "route", name: "Le te-rain", map: "inde", x: 34, y: 21, region: "Le chemin de fer", desc: "Un wagon de troisième classe où s'entassent paysans, soldats, prêtres et femmes voilées, et où chacun raconte sa vie.", arrive: "C2_1" },
  ambala: { ambiance: "nuit", name: "Ambala", map: "inde", x: 38, y: 22, region: "Ambala", desc: "Une grande ville de garnison, ses cantonnements, ses jardins anglais et ses maisons aux vérandas.", arrive: "C2_5" },
  champs: { ambiance: "champs", name: "Les champs de la plaine", map: "inde", x: 37, y: 24, region: "Autour d'Ambala", desc: "Les cultures de la plaine du Pendjab, leurs canaux et leurs talus, sous un soleil écrasant.", arrive: "C3_1" },
  village: { ambiance: "village", name: "Le village du prêtre", map: "inde", x: 36, y: 25, region: "Autour d'Ambala", desc: "Un village de terre, son puits, son temple et son prêtre, et les anciens assis sous l'arbre.", arrive: "C3_3" },
  route: { ambiance: "route", name: "La Grande Route", map: "inde", x: 40, y: 27, region: "La Grande Route", desc: "La grande voie qui traverse l'Inde du nord, bordée d'arbres, où passent sans fin charrettes, pèlerins, soldats et noces.", arrive: "C3_6" },
  parao: { ambiance: "nuit", name: "Le parao", map: "inde", x: 41, y: 28, region: "La Grande Route", desc: "Une halte du bord de la route, avec ses feux, ses charrettes dételées et ses marchands de nourriture.", arrive: "C4_4" },
  bosquet: { ambiance: "champs", name: "Le camp du régiment", map: "inde", x: 42, y: 26, region: "La Grande Route", desc: "Un bosquet de manguiers où un régiment anglais dresse ses tentes pour la nuit, autour du mess des officiers.", arrive: "C5_1" },
  caserne: { ambiance: "ville", name: "L'école du régiment", map: "inde", x: 38, y: 23, region: "Ambala", desc: "Les casernes blanchies à la chaux, la salle de classe des fils de soldats et le dortoir qui sent le savon.", arrive: "C6_1" },
  lucknow: { ambiance: "ville", name: "Lucknow", map: "inde", x: 52, y: 35, region: "Lucknow", desc: "Une grande ville de palais et de jardins, ses bazars, sa gare et ses ruelles où l'on peut se perdre.", arrive: "C7_3" },
  xavier: { ambiance: "chateau", name: "Le collège Saint-Xavier", map: "inde", x: 53, y: 35, region: "Lucknow", desc: "Le collège des fils d'Anglais nés aux Indes, ses classes, ses cours et sa discipline.", arrive: "C7_7" },
  simla: { ambiance: "montagne", name: "Simla", map: "inde", x: 41, y: 17, region: "Simla", desc: "La ville d'été du Gouvernement, accrochée à la montagne, ses chalets, son Mall et ses bureaux.", arrive: "C8_9" },
  boutique: { ambiance: "nuit", name: "La boutique de Lurgan", map: "inde", x: 42, y: 17, region: "Simla", desc: "Une boutique pleine de bijoux, de masques, de bronzes et de choses étranges, avec des chambres derrière où l'on ne va pas seul.", arrive: "C9_1" },
  benares: { ambiance: "temple", name: "Le temple des Tirthankars", map: "inde", x: 58, y: 40, region: "Bénarès", desc: "Un temple jaïn de la ville sainte, ses cellules, sa cour, et les prêtres qui accueillent le lama.", arrive: "C11_1" },
  delhi: { ambiance: "ville", name: "La gare de Delhi", map: "inde", x: 40, y: 30, region: "Delhi", desc: "Un quai noir de monde, où l'on crie, où l'on pousse, et où passent les policiers en pantalon jaune.", arrive: "C12_1" },
  sahiba: { ambiance: "village", name: "La maison de la Sahiba", map: "inde", x: 41, y: 25, region: "Saharanpour", desc: "Une longue maison blanche et tortueuse derrière Saharanpour, sa cour en désordre, son pigeonnier et ses cuisines.", arrive: "C12_5" },
  doon: { ambiance: "champs", name: "Les villages du Doon", map: "inde", x: 43, y: 22, region: "Le Doon", desc: "Les vergers et les villages au pied des Siwaliks, où le lama déroule sa Roue de la Vie le soir.", arrive: "C12_3" },
  montagnes: { ambiance: "montagne", name: "Les vraies Montagnes", map: "inde", x: 45, y: 15, region: "L'Himalaya", desc: "Les forêts de déodars, les cols enneigés, les villages accrochés aux pentes, et les grands pics qui ne bougent pas.", arrive: "C13_1" },
  eperon: { ambiance: "montagne", name: "L'éperon herbeux", map: "inde", x: 46, y: 14, region: "La vallée de Chini", desc: "Un replat d'herbe dorée au-dessus de la forêt, face aux neiges, au bout d'une longue montée.", arrive: "C13_7" },
  shamlegh: { ambiance: "neige", name: "Shamlegh-sous-la-Neige", map: "inde", x: 47, y: 13, region: "La vallée de Chini", desc: "Trois ou quatre huttes de terre et de bois au bord d'un gouffre de deux mille pieds, sous les pâturages d'été.", arrive: "C14_1" },
  banian: { ambiance: "champs", name: "Le banian", map: "inde", x: 42, y: 25, region: "Saharanpour", desc: "Une charrette à bœufs vide sur un tertre, un jeune banian derrière, et la terre fraîchement labourée.", arrive: "C15_10" },
};
