// « L'Étrange Cas du Dr Jekyll et de Mr Hyde » (Strange Case of Dr Jekyll and Mr Hyde), R. L. Stevenson, 1886 : un livre
// à lire, sans choix (lecture: true). Texte : la traduction de Théo Varlet (1871-1938, domaine public), d'après l'édition
// électronique du groupe Ebooks libres et gratuits (2003). Texte gardé tel quel, sauf la typographie et une virgule
// égarée (« plein de, santé »). Tout ce qui n'est pas de Stevenson ou de son traducteur vit dans les tags : gens, lieux,
// mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  laporte: { ambiance: "ville", name: "La porte de la petite rue", map: "londres", x: 46, y: 52, region: "Londres", desc: "Une porte écaillée, sans sonnette ni heurtoir, sous un pignon aveugle, dans une petite rue commerçante et proprette. Derrière : une cour.", arrive: "I_1" },
  chezutterson: { ambiance: "ville", name: "Chez M. Utterson", map: "londres", x: 34, y: 46, region: "Londres", desc: "Le logis de célibataire du notaire : le coin du feu, le cabinet de travail, le coffre-fort.", arrive: "II_1" },
  lanyon: { ambiance: "ville", name: "Chez le Dr Lanyon", map: "londres", x: 30, y: 30, region: "Cavendish Square", desc: "La maison du Dr Lanyon, sur Cavendish Square, où il reçoit la foule de ses malades.", arrive: "VI_1" },
  maisonjekyll: { ambiance: "ville", name: "La maison du Dr Jekyll", map: "londres", x: 52, y: 46, region: "Londres", desc: "Une belle maison ancienne sur une place, au coin de la petite rue : un vestibule chauffé, des meubles de chêne, un vieux maître d'hôtel.", arrive: "II_4" },
  cabinet: { ambiance: "nuit", name: "Le cabinet du docteur", map: "londres", x: 50, y: 53, region: "Londres", desc: "Au fond du jardin, l'ancien amphithéâtre de dissection, puis un escalier, une porte de serge rouge et une grande pièce garnie de vitrines, avec trois fenêtres poussiéreuses sur la cour.", arrive: "V_1" },
  riviere: { ambiance: "nuit", name: "La rue près du fleuve", map: "londres", x: 60, y: 72, region: "Londres", desc: "Une rue tranquille non loin de la Tamise, sous la lune, vue de la fenêtre d'une servante.", arrive: "IV_1" },
  soho: { ambiance: "ville", name: "Soho", map: "londres", x: 40, y: 40, region: "Soho", desc: "Un quartier sale et misérable, avec ses débits de gin, ses gargotes françaises et ses enfants en guenilles, sous le brouillard brun.", arrive: "IV_2" },
  parc: { ambiance: "champs", name: "Regent's Park", map: "londres", x: 28, y: 18, region: "Londres", desc: "Le grand parc au nord de Londres, ses bancs, un beau jour de janvier où le givre fond.", arrive: "X_7" },
  hotel: { ambiance: "ville", name: "Un hôtel de Portland Street", map: "londres", x: 32, y: 24, region: "Londres", desc: "Un hôtel de Portland Street, un salon particulier, un feu.", arrive: "X_8" },
};
