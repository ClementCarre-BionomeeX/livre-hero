// « La Guerre des mondes » (The War of the Worlds), H. G. Wells, 1898 : un livre à lire, sans choix (lecture: true).
// Texte : la traduction d'Henry-D. Davray (1900, édition illustrée de 1906), Project Gutenberg n° 60656, domaine public
// (Wells est mort en 1946, Davray en 1944). Texte de Davray gardé tel quel, sauf la typographie (tirets, espaces, accents
// sur les capitales) et deux coquilles ; les légendes des gravures, qui répétaient le texte, sont retirées.
// Tout ce qui n'est pas de Wells ou de Davray vit dans les tags : gens, lieux, mots, résumés des chapitres.
// Les lieux du livre.
module.exports = {
  ottershaw: { ambiance: "nuit", name: "L'observatoire d'Ottershaw", map: "surrey", x: 38, y: 48, region: "Surrey", desc: "L'observatoire de l'astronome Ogilvy, dans la campagne près de Woking : une coupole obscure, un télescope, un mouvement d'horlogerie.", arrive: "I_1" },
  lande: { ambiance: "champs", name: "La lande de Horsell", map: "surrey", x: 45, y: 58, region: "Surrey", desc: "Une lande de bruyère, de genêts et de pins entre Horsell, Ottershaw et Woking, avec ses sablières. Le premier cylindre y est tombé.", arrive: "II_1" },
  woking: { ambiance: "ville", name: "Woking", map: "surrey", x: 52, y: 66, region: "Surrey", desc: "La petite ville du narrateur, sa gare, son pont sur le canal, ses rues de chalets neufs.", arrive: "VII_1" },
  maison: { ambiance: "ville", name: "La maison de Maybury Hill", map: "surrey", x: 56, y: 70, region: "Surrey", desc: "La maison du narrateur et de sa femme, sur la colline de Maybury, à Woking. De la fenêtre du bureau, on voit la lande.", arrive: "VII_2" },
  leatherhead: { ambiance: "ville", name: "Leatherhead", map: "surrey", x: 88, y: 86, region: "Surrey", desc: "La petite ville où habitent les cousins du narrateur, à une douzaine de milles de Maybury.", arrive: "X_1" },
  addlestone: { ambiance: "nuit", name: "La route d'Addlestone", map: "surrey", x: 50, y: 50, region: "Surrey", desc: "La route qui descend de la colline vers Woking, entre les bois de pins, sous l'orage.", arrive: "X_2" },
  byfleet: { ambiance: "champs", name: "La route de Byfleet", map: "surrey", x: 60, y: 55, region: "Surrey", desc: "La route de Woking à Weybridge, par Byfleet, le long des bois.", arrive: "XII_2" },
  weybridge: { ambiance: "champs", name: "Weybridge et Shepperton", map: "surrey", x: 64, y: 36, region: "Surrey", desc: "Le confluent de la Wey et de la Tamise, son écluse, le bac de Shepperton, et les prés plats au bord de l'eau.", arrive: "XII_3" },
  halliford: { ambiance: "champs", name: "Halliford", map: "surrey", x: 70, y: 30, region: "Surrey", desc: "Un village au bord de la Tamise, en aval de Shepperton, avec ses prairies basses et ses haies.", arrive: "XIII_1" },
  sunbury: { ambiance: "champs", name: "Sunbury et Twickenham", map: "surrey", x: 78, y: 24, region: "Surrey", desc: "La route qui suit la Tamise vers Londres, par Sunbury, Hampton et Twickenham.", arrive: "XVIII_2" },
  sheen: { ambiance: "ville", name: "La maison en ruines de Sheen", map: "surrey", x: 90, y: 14, region: "Surrey", desc: "Une maison de Sheen, près de Richmond, au bord de la Tamise : une cuisine, une laverie, un office.", arrive: "XVIII_3" },
  wimbledon: { ambiance: "champs", name: "Vers Wimbledon et Putney", map: "londres", x: 18, y: 86, region: "Londres", desc: "La route de Richmond Park et de Wimbledon vers Putney, à travers la campagne envahie.", arrive: "XXIII_2" },
  putney: { ambiance: "ville", name: "Putney Hill", map: "londres", x: 26, y: 74, region: "Londres", desc: "La colline de Putney, au sud-ouest de Londres, au-dessus de la Tamise : ses villas, son auberge au sommet de la côte.", arrive: "XXIV_1" },
  kensington: { ambiance: "ville", name: "South Kensington", map: "londres", x: 36, y: 56, region: "Londres", desc: "Les grands musées, Exhibition Road, et le quartier chic de l'ouest de Londres.", arrive: "XXV_1" },
  regentpark: { ambiance: "ville", name: "Regent's Park", map: "londres", x: 46, y: 34, region: "Londres", desc: "Le grand parc du nord de Londres, son jardin zoologique et son canal.", arrive: "XXV_2" },
  primrose: { ambiance: "ville", name: "Primrose Hill", map: "londres", x: 44, y: 24, region: "Londres", desc: "Une colline herbeuse au nord de Regent's Park, d'où l'on voit tout Londres.", arrive: "XXV_3" },
  londres: { ambiance: "ville", name: "Londres", map: "londres", x: 56, y: 46, region: "Londres", desc: "La plus grande ville du monde en 1898 : six millions d'habitants, ses gares, ses journaux, le Strand, Oxford Street.", arrive: "XIV_1" },
  edgware: { ambiance: "champs", name: "La route d'Edgware", map: "nord", x: 26, y: 62, region: "Au nord de Londres", desc: "La route qui sort de Londres vers le nord-ouest, entre les champs et les villas.", arrive: "XVI_2" },
  barnet: { ambiance: "champs", name: "La grand-route du Nord, à Barnet", map: "nord", x: 40, y: 40, region: "Au nord de Londres", desc: "La grande route qui part de Londres vers le nord, à la hauteur de Barnet.", arrive: "XVI_4" },
  essex: { ambiance: "mer", name: "La côte de l'Essex", map: "nord", x: 92, y: 60, region: "Essex", desc: "La côte plate de l'Essex, près de Tillingham et de l'embouchure de la Blackwater, face à la mer du Nord.", arrive: "XVII_2" },
};
