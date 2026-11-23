// « La Reine de la Côte noire » (Queen of the Black Coast), Robert E. Howard, 1934 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// en mai 1934 (Project Gutenberg n° 42183, domaine public). Les titres des chapitres et les épigraphes sont ceux de
// Howard, traduits ; les titres des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les lieux du livre.
module.exports = {
  argos: { ambiance: "port", name: "Les quais d'Argos", map: "cotenoire", x: 30, y: 8, region: "Argos", desc: "Une rue en pente qui descend aux quais, des pilotis, et des galères marchandes prêtes à partir.", arrive: "C1_1" },
  argus: { ambiance: "mer", name: "L'Argus", map: "cotenoire", x: 34, y: 30, region: "Les côtes du sud", desc: "Une petite galère marchande d'Argos, haute de poupe, à la voile de soie rayée, avec vingt rameurs.", arrive: "C1_2" },
  cote: { ambiance: "mer", name: "Les côtes de Koush", map: "cotenoire", x: 38, y: 55, region: "Koush", desc: "Des plages frangées de palmiers, une ligne de ressac, et des villages aux hauts murs sur le rivage.", arrive: "C1_3" },
  tigresse: { ambiance: "mer", name: "La Tigresse", map: "cotenoire", x: 40, y: 62, region: "Koush", desc: "Une longue galère mince comme un serpent, quarante avirons de chaque bord, une flamme cramoisie au mât.", arrive: "C1_5" },
  fleuve: { ambiance: "eau", name: "Le Zarkheba", map: "cotenoire", x: 50, y: 76, region: "Le Sud", desc: "Un fleuve large, sombre et trouble, entre des rives de jungle où aucune bête ne vient boire.", arrive: "C2_1" },
  cite: { ambiance: "temple", name: "La cité morte", map: "cotenoire", x: 60, y: 82, region: "Le Sud", desc: "Des tours de pierre verte qui vacillent, des jetées brisées, une pyramide de marbre et un vieil autel.", arrive: "C2_4" },
  jungle: { ambiance: "foret", name: "La jungle du Zarkheba", map: "cotenoire", x: 64, y: 86, region: "Le Sud", desc: "Des lianes pendues comme des pythons, un sol spongieux qui monte doucement, et un silence des premiers âges.", arrive: "C2_5" },
  plage: { ambiance: "mer", name: "L'embouchure du Zarkheba", map: "cotenoire", x: 46, y: 70, region: "Le Sud", desc: "Une plage blanche à l'embouchure du fleuve, entre la mer et les palmes de la jungle.", arrive: "C5_1" },
};
