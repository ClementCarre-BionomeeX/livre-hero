// Act IV · "L'ossuaire de Saint-Gilles", an adventure inside the adventure at Pallanche (the child leads, "tu"), opened
// from IV_pal: under the church, the old ossuary where the city's dead are stacked, each skull with a name painted on
// the brow, and the names are fading because a Glaneur feeds down there. A hub of three galleries (the painted skulls,
// the sexton's lodge, the well) and the Glaneur at the bottom. iv:ossuaire=repeint|nettoye.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  IV_O_entree: P({ title: "Le sacristain", place: "pallanche",
    fx: { questSeen: "IV_Q_ossuaire" },
    text: [
      "Sur le parvis de Saint-Gilles, le vieux sacristain t'attrape par la manche. Petit, voûté, les ongles noirs de cire. « Tu viens d'en haut, toi, dit-il. Tu as l'air de quelqu'un qui n'a pas peur des choses blanches. »",
      "« L'ossuaire, sous l'église. Six cents ans de morts de la paroisse. Les os rangés, et les crânes alignés sur les étagères, avec le nom peint sur le front, pour qu'on sache. Ça s'est toujours fait. » Il baisse la voix. « Depuis l'hiver, les noms s'effacent. Tous les matins, un rang de plus. Et la nuit, on entend quelque chose qui mange, en bas. »",
    ],
    choices: [
      { label: "Descendre avec une lanterne", fx: { item: "torche" }, to: "IV_O_galeries" },
      { label: "« Pas maintenant. »", to: "IV_pal" },
    ] }),
  IV_O_galeries: P({ title: "L'ossuaire", place: "pallanche", hub: true,
    text: [
      { first: true, text: "Un escalier en colimaçon, très étroit, qui sent la terre et le froid. En bas, des galeries basses, voûtées, et partout, le long des murs, du sol au plafond, des os. Des tibias empilés comme du bois de chauffe. Et des crânes, en rangs, sur des étagères de pierre, qui te regardent passer." },
      "Ta lanterne fait bouger les ombres dans les orbites.",
      { once: true, text: "Quelque part, loin, au fond, un bruit léger, régulier. Comme quelqu'un qui lape." },
    ],
    choices: [
      { label: "La galerie des crânes peints", hide: { seen: "IV_O_cranes" }, to: "IV_O_cranes" },
      { label: "La loge du fossoyeur", hide: { seen: "IV_O_loge" }, to: "IV_O_loge" },
      { label: "Le puits, d'où monte le froid", hide: { seen: "IV_O_puits" }, to: "IV_O_puits" },
      { label: "Aller vers le bruit, au fond", if: { any: [{ seen: "IV_O_cranes" }, { seen: "IV_O_loge" }] }, why: "Tu veux d'abord savoir à quoi tu as affaire.", to: "IV_O_fond", big: true },
      { label: "Remonter", to: "IV_O_remonter" },
    ] }),
  IV_O_cranes: P({ title: "Les crânes peints", place: "pallanche",
    text: [
      "Une galerie longue, et sur les étagères, des milliers de crânes, chacun avec son nom peint au front, en lettres rouges, noires, ocre, selon le siècle et le peintre. *Jehan Moreau, tonnelier. Alix, fille du tonnelier. Le petit Pierre, trois jours.*",
      "Au bout de la galerie, les noms pâlissent. Puis il n'y en a plus. Des centaines de crânes au front blanc, lisse, propre, comme lavé. Et sur le sol, entre les étagères, de la poussière de peinture, rouge, noire, ocre, que quelque chose a léchée.",
      "Sur une étagère, un pot de peinture rouge et un pinceau. Le sacristain a dû essayer.",
    ],
    choices: [
      { label: "Prendre le pinceau, et repeindre les noms effacés", fx: { flag: "iv:ossuaire_pinceau", ep: ["perso", 600] }, to: "IV_O_cranes_peindre" },
      { back: "IV_O_galeries" },
    ] }),
  IV_O_cranes_peindre: P({ title: "Le pinceau", place: "pallanche",
    text: [
      "Tu n'as pas le registre de la paroisse. Mais sur le mur du fond, gravée dans la pierre, il y a la liste des morts de la paroisse, siècle après siècle, que personne n'a pensé à effacer parce que personne ne lit les murs. Tu prends le pinceau. Tu recopies, du mur aux fronts. Un nom par crâne, dans l'ordre.",
      "Tu en fais trente. Puis cinquante. Le pinceau s'use. Tu ne sais pas si tu mets le bon nom sur le bon crâne. Tu te dis que les morts s'arrangeront entre eux.",
    ],
    choices: [{ back: "IV_O_galeries" }] }),
  IV_O_loge: P({ title: "La loge du fossoyeur", place: "pallanche",
    text: [
      "Une petite pièce taillée dans le roc, avec une paillasse, une table, une cruche, un crucifix. Le fossoyeur y dormait. Il n'y est plus. Sur la table, son carnet, ouvert, avec une plume.",
      "*Lundi : un rang de noms partis, galerie Saint-Jacques. Mardi : deux rangs. Mercredi : l'ai vu. Blanc, grand comme un veau, sans visage. Il lèche les fronts. Jeudi : il m'a regardé. Je ne sais plus le nom de ma mère. Vendredi :* et puis rien. La plume a roulé par terre.",
    ],
    choices: [{ label: "Prendre le carnet et revenir aux galeries", fx: { ep: ["perso", 400], flag: "iv:ossuaire_carnet" }, to: "IV_O_galeries" }] }),
  IV_O_puits: P({ title: "Le puits", place: "pallanche",
    text: [
      "Au croisement de trois galeries, un puits. Pas d'eau. Un trou rond, noir, qui descend plus bas que tout, et d'où monte un froid de janvier. Sur la margelle, des traces. Pas de pieds. Des traces de quelque chose qui rampe, qui monte et qui descend, souvent.",
      "Tu laisses tomber une pierre. Tu n'entends pas le fond. Tu entends, au bout d'un long moment, très loin, une cloche. Une seule. Puis rien.",
    ],
    choices: [{ fx: { ep: ["perso", 300] }, back: "IV_O_galeries" }] }),
  IV_O_fond: P({ title: "Le mangeur de noms", place: "pallanche",
    text: [
      "La dernière galerie. Il est là. Blanc, accroupi entre deux étagères, grand comme un veau, sans visage. Il lèche un crâne, lentement, avec une langue grise, et le nom peint sur le front pâlit à chaque passage.",
      "Il s'arrête. Il tourne vers toi ce qui lui sert de tête. Il ne t'attaque pas. Il attend. Il a l'air de se demander si tu as un nom, toi aussi, et quel goût il a.",
      { if: { has: "glaneur_petit:nourri" }, text: "Tu te souviens du petit Glaneur du pierrier, sur la route, à qui tu avais donné une miette. Celui-ci est de la même espèce, en plus vieux. En plus affamé. Ils ont tous faim. C'est tout ce qu'ils sont." },
    ],
    choices: [
      { label: "L'affronter", to: "IV_O_combat" },
      { label: "Lui donner le carnet du fossoyeur, plein de jours oubliés", hide: { not: { has: "iv:ossuaire_carnet" } }, test: { dom: "magie", label: "Le mangeur", help: [{ if: { present: "gaspard" }, v: 20 }, { if: { has: "glaneur_petit:nourri" }, v: 15 }, { if: { present: "givre" }, v: 10 }] },
        win: { fx: { flag: "iv:ossuaire=nourri", ep: ["perso", 1800] }, to: "IV_O_nourri" }, lose: { to: "IV_O_combat" } },
    ] }),
  IV_O_combat: P({ title: "La dernière galerie",
    combat: { title: "Le mangeur de noms", enemies: ["glaneur", "glaneur_petit"], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Courir vers l'escalier", to: "IV_O_remonter" },
      win: { fx: { flag: "iv:ossuaire=nettoye", ep: ["seance", 2000] }, to: "IV_O_vaincu" }, lose: { fx: { pv: -5 }, to: "IV_O_remonter" } },
    text: ["Il se déplie. Il est plus grand debout. Et derrière lui, d'une étagère, un deuxième se laisse tomber, plus petit, qui léchait les os des enfants."],
    choices: [] }),
  IV_O_vaincu: P({ title: "La poussière blanche", place: "pallanche",
    text: [
      "Il tombe en poussière blanche, comme les autres, et la poussière ne se pose pas : elle monte, vers la voûte, et passe à travers la pierre, vers le haut, vers le ciel.",
      "Les crânes au front lisse restent lisses. Ce qu'il a mangé, il l'a emporté. Mais il ne mangera plus.",
    ],
    choices: [{ label: "Remonter", to: "IV_O_remonter" }] }),
  IV_O_nourri: P({ title: "Les jours du fossoyeur", place: "pallanche",
    text: [
      "Tu ouvres le carnet. Tu le poses devant lui. Il se penche. Il lèche la première page : les jours ordinaires du fossoyeur, la soupe, la pluie, un enterrement. L'encre pâlit. Il lèche la deuxième. Il ralentit.",
      "Il mange tout le carnet, page après page, jusqu'à la couverture. Puis il se couche, entre les étagères, rassasié, comme un chien. Il ne lèche plus les crânes. Il dort.",
      "En remontant, tu te demandes ce qu'il mangera demain. Tu ne te le demandes pas longtemps. Il y a des carnets partout, en ville, pleins de jours dont personne n'a besoin. On pourrait les lui descendre.",
    ],
    choices: [{ label: "Remonter", to: "IV_O_remonter" }] }),
  IV_O_remonter: P({ title: "Le parvis", place: "pallanche",
    text: [
      "Tu remontes l'escalier en colimaçon. Le sacristain t'attend sur le parvis, sa cruche à la main.",
      { if: { has: "iv:ossuaire=nettoye" }, text: "« C'est fini ? » Tu dis oui. Il hoche la tête. « Je repeindrai, dit-il. J'ai le temps. J'ai six cents ans de noms à repeindre, et le temps qu'il me reste. Ça ira ensemble. »" },
      { if: { has: "iv:ossuaire=nourri" }, text: "Tu lui expliques. Il te regarde comme si tu étais fou. Puis il réfléchit. « Des carnets, dit-il. Des vieux livres de comptes. Des almanachs. Il y en a plein la sacristie. » Il sourit, d'un sourire de vieux qui vient de trouver une bonne affaire. « Je le nourrirai. Il gardera les morts. Comme un chien. »" },
      { if: { not: { any: [{ has: "iv:ossuaire=nettoye" }, { has: "iv:ossuaire=nourri" }] } }, text: "Il voit ta figure. Il ne demande rien. Il te donne à boire, de sa cruche, du vin aigre. « Demain, un rang de plus, dit-il. Et après-demain. Je descendrai repeindre, tant que je pourrai. »" },
    ],
    choices: [{ fx: { quest: "IV_Q_ossuaire" }, back: "IV_pal" }] }),
};
