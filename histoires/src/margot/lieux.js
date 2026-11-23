// « La Reine Margot », Alexandre Dumas, 1845 : un livre à lire, sans choix (lecture: true). Texte de Dumas, domaine
// public, d'après la saisie d'Ebooks libres et gratuits numérisée par le projet Gutenberg. Les titres des chapitres sont
// de Dumas ; ceux des pages, comme tout ce qui vit dans les tags (gens, lieux, mots, résumés), sont de Claude.
// Les lieux du livre.
module.exports = {
  louvre: { ambiance: "chateau", name: "Le Louvre", map: "france", x: 50, y: 30, region: "Paris", desc: "Des galeries pleines de courtisans, des escaliers dérobés, des passages secrets, des cabinets où l'on se cache, et des portes dont la reine mère a les doubles clefs.", arrive: "I_1" },
  belleetoile: { ambiance: "ville", name: "L'hôtellerie de la *Belle-Étoile*", map: "france", x: 50, y: 31, region: "Paris, rue de l'Arbre-Sec", desc: "Une enseigne peinte, une salle où l'on joue aux dés, une cuisine où rôtissent des volailles, et un hôte qui fourbit son vieux casque.", arrive: "IV_1" },
  rues: { ambiance: "nuit", name: "Les rues de Paris", map: "france", x: 51, y: 30, region: "Paris", desc: "Des rues étroites et noires, des croix blanches aux chapeaux, des torches, des arquebusades, et la cloche qui sonne.", arrive: "VII_7" },
  hotelguise: { ambiance: "ville", name: "L'hôtel de Guise", map: "france", x: 51, y: 29, region: "Paris", desc: "Le grand hôtel des princes lorrains, où loge la duchesse de Nevers, et une chambre où l'on soigne un blessé.", arrive: "XII_3" },
  montfaucon: { ambiance: "champs", name: "Le gibet de Montfaucon", map: "france", x: 52, y: 28, region: "Aux portes de Paris", desc: "Une butte nue, des piliers de pierre, des chaînes, des corps pendus, et des corbeaux.", arrive: "XV_7" },
  pilori: { ambiance: "souterrain", name: "La tour du Pilori", map: "france", x: 50, y: 29, region: "Paris, aux Halles", desc: "La maison du bourreau au pied de la tour, une salle basse, et le réduit où l'on dépose les suppliciés.", arrive: "XVIII_2" },
  rene: { ambiance: "souterrain", name: "La boutique de René", map: "france", x: 50, y: 32, region: "Paris, pont Saint-Michel", desc: "Une boutique de parfums sombre le soir, des fioles, des herbes, un cabinet secret, et un autel où l'on lit l'avenir.", arrive: "XIX_1" },
  cloche: { ambiance: "ville", name: "La maison de la rue Cloche-Percée", map: "france", x: 52, y: 31, region: "Paris, au Marais", desc: "Une petite maison à deux portes, l'une rue Cloche-Percée, l'autre rue Tizon, où l'on se rend masqué.", arrive: "XXIV_4" },
  touchet: { ambiance: "nuit", name: "Chez Marie Touchet", map: "france", x: 52, y: 30, region: "Paris", desc: "Une maison discrète, une chambre où une jeune femme dort au pied du berceau d'un enfant.", arrive: "XXXVI_1" },
  bondy: { ambiance: "champs", name: "La forêt de Bondy", map: "france", x: 54, y: 28, region: "À l'est de Paris", desc: "Des futaies, des piqueurs, une meute, et la bauge d'un sanglier.", arrive: "XXIX_3" },
  saintgermain: { ambiance: "champs", name: "La forêt de Saint-Germain", map: "france", x: 47, y: 29, region: "À l'ouest de Paris", desc: "La plaine où l'on vole le héron au faucon, et le pavillon de François Ier sous les arbres.", arrive: "L_4" },
  vincennes: { ambiance: "chateau", name: "Le château de Vincennes", map: "france", x: 53, y: 31, region: "À l'est de Paris", desc: "Un donjon, des fossés, des ponts-levis, des cachots, une chapelle, et la chambre où l'on soigne un roi malade.", arrive: "LIV_1" },
  greve: { ambiance: "ville", name: "La place Saint-Jean-en-Grève", map: "france", x: 51, y: 31, region: "Paris", desc: "La place devant l'Hôtel de Ville, une foule matinale, et un échafaud.", arrive: "LX_1" },
};
