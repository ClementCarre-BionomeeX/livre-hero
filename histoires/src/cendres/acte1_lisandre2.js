// Act I · two more corners of the palace at Vasselin four days before the Fête (Lisandre leads, "tu" feminine), off
// LI_cour: a nursery at the end of the east wing that the queen had shut and that an old governess still dusts every
// morning (the prince is not named: lisandre:nursery); and the royal stables, where the old king's warhorse refuses
// to be harnessed for Pallanche (lisandre:destrier).
var A = { act: "I", place: "vasselin", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "LI_cour" }];
module.exports = {
  LI_k_nursery: P({ title: "La chambre de l'aile est",
    text: [
      "Au bout de l'aile est, après la galerie des portraits, il y a une porte que tu n'as jamais vue ouverte. Ce matin, elle l'est. Une vieille femme en coiffe noire, un plumeau à la main, époussette une pièce où personne n'entre. Elle te voit. Elle ne referme pas.",
      "Une chambre d'enfant. Un berceau de noyer, sculpté de cerfs et de colombes. Un cheval de bois, à bascule, qui a perdu sa crinière. Une petite épée de parade, accrochée trop haut pour qu'un enfant l'atteigne. Tout est propre. Tout brille. Il n'y a pas un grain de poussière, et pas un bruit.",
      "« Sa Majesté l'a fait fermer, dit la vieille. Il y a deux ans. Elle ne vient plus. Elle ne demande plus. Moi, je viens. Tous les matins. » Elle passe le plumeau sur le cheval de bois. « Il faut bien que quelqu'un vienne. »",
    ],
    choices: [
      { label: "Demander à qui était la chambre", fx: { flag: "lisandre:nursery", ep: ["perso", 300] }, to: "LI_k_nursery_qui" },
      { label: "Prendre le cheval de bois, et le faire basculer, une fois", fx: { flag: "lisandre:nursery", ep: ["perso", 300] }, to: "LI_k_nursery_cheval" },
      { label: "Refermer doucement la porte, et la laisser à son ménage", to: "LI_cour" },
    ] }),
  LI_k_nursery_qui: P({ title: "La gouvernante",
    text: ["La vieille te regarde longtemps. « Vous chantiez, dit-elle. Pour lui. Le soir. Vous aviez quinze ans, vous n'étiez encore rien du tout, on vous faisait monter quand il ne voulait pas dormir. » Elle repose le plumeau. « Vous ne vous en souvenez pas ? » Tu fouilles. Tu trouves une berceuse, une petite main qui serrait ton doigt, et pas de nom. La vieille hoche la tête. « Personne ne s'en souvient bien, dit-elle. Moi si. Mais on m'a dit de ne pas le dire. Alors je fais le ménage. »"],
    choices: BACK }),
  LI_k_nursery_cheval: P({ title: "Le cheval de bois",
    text: ["Tu poses la main sur l'encolure peinte. Tu pousses. Le cheval bascule, en avant, en arrière, avec un grincement de bois sec, très doux. La vieille s'est arrêtée de faire le ménage. Elle écoute. Le grincement s'éteint. « C'est la première fois que quelqu'un le fait bouger, dit-elle. Depuis. » Elle ne dit pas depuis quoi. Elle reprend son plumeau. Elle te remercie, en passant derrière toi, d'une petite pression sur le bras."],
    choices: BACK }),
  LI_k_ecuries: P({ title: "Les écuries royales",
    text: [
      "Aux écuries, on attelle pour Pallanche. Soixante chevaux, les voitures de la cour, les fourgons. Au milieu, dans la grande stalle, un destrier gris, énorme, vieux, qui ne veut pas sortir. Trois palefreniers tirent sur la longe. Il ne bouge pas. Il a les sabots plantés dans la paille comme des piliers.",
      "Le maître d'écurie s'éponge le front. « Le cheval du feu roi, dit-il. Trente ans. Il n'a pas quitté Vasselin depuis la dernière campagne. La reine veut qu'il marche en tête du cortège, à vide, comme le veut l'usage. Il ne veut pas. Il n'a jamais refusé un ordre de sa vie. »",
    ],
    choices: [
      { label: "Entrer dans la stalle, et lui chanter quelque chose, tout bas", test: { dom: "nature", label: "Le vieux destrier", help: [{ if: { souv: "lisandre:isaure" }, v: 15 }, { if: { item: "luth" }, v: 5 }] },
        win: { fx: { flag: "lisandre:destrier", ep: ["perso", 600] }, to: "LI_k_ecuries_chant" }, lose: { to: "LI_k_ecuries_non" } },
      { label: "Dire au maître d'écurie de le laisser ici", fx: { ep: ["perso", 200] }, to: "LI_k_ecuries_laisser" },
    ] }),
  LI_k_ecuries_chant: P({ title: "La chanson de soldat",
    text: [
      "Tu entres dans la stalle. Il tourne la tête vers toi, l'œil blanc.",
      { if: { souv: "lisandre:isaure" }, text: "Tu ne sais pas pourquoi tu choisis celle-là. La chanson de soldat, celle de la cantinière et du sergent, que la reine t'a apprise, une nuit d'hiver. Tu la chantes tout bas, d'une voix plate, comme on chante en marchant." },
      { if: { not: { souv: "lisandre:isaure" } }, text: "Tu cherches. Il te vient une chanson, tu ne sais plus d'où, une chanson de soldat, sur une cantinière et un sergent. Tu n'en as que des morceaux. Tu les chantes d'une voix plate, comme on chante en marchant." },
      "Au deuxième couplet, le vieux cheval baisse la tête. Au troisième, il fait un pas. Tu sors de la stalle en chantant, et il te suit, sans longe, au pas, comme on suit un régiment. Les palefreniers s'écartent. Le maître d'écurie ne dit rien. Il ôte son bonnet. « Il chantait celle-là, le roi, dit-il. En campagne. Je l'avais oublié. »",
    ],
    choices: BACK }),
  LI_k_ecuries_non: P({ title: "Les sabots plantés",
    text: ["Tu entres. Tu chantes. Il t'écoute, poliment, l'oreille tournée vers toi, et il ne bouge pas d'un pouce. Ce n'est pas la bonne chanson. Tu ne sais pas laquelle serait la bonne. Le maître d'écurie soupire. « On le laissera, dit-il. On dira à Sa Majesté qu'il boite. » Le destrier te regarde sortir. Il a l'air d'attendre quelqu'un d'autre."],
    choices: BACK }),
  LI_k_ecuries_laisser: P({ title: "À vide",
    text: ["« Laissez-le, dis-tu. Il a fait sa dernière campagne. » Le maître d'écurie hésite. Puis il hoche la tête, soulagé qu'une voix de la cour l'ait dit à sa place. On met un autre cheval en tête du cortège, un alezan de parade qui ne sait rien de rien. Le vieux gris reste dans sa stalle, dans les écuries vides, à regarder la porte par laquelle personne ne reviendra."],
    choices: BACK }),
};
