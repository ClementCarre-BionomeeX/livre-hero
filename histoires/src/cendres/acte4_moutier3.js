// Act IV · three more corners of the moutier of the Veilleurs a year later (the child leads, "tu" masculine), off
// IV_moutier: the refectory where the brothers now say one name before eating, the children's game in the cloister,
// and the gate where the porter keeps a lantern lit for those who arrive at night.
var A = { act: "IV", noLead: true, place: "moutier" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir sous les arcades", back: "IV_moutier" }];
module.exports = {
  IV_m_refectoire: P({ title: "Le réfectoire",
    text: [
      "Au réfectoire, le repas se prend en silence, comme toujours, sur de longues tables de chêne. Mais la règle a changé depuis la neige. Avant de manger, chacun, frère, novice ou réfugié, se lève, dit un nom, à voix haute, un seul, et se rassied. Puis on mange.",
      "On ne dit pas le sien. On dit celui de quelqu'un. N'importe qui. Quelqu'un qu'on ne veut pas laisser partir. Les noms montent sous la voûte, un par un, cent noms, et l'écho les garde un moment. Ton tour vient.",
    ],
    choices: [
      { label: "Dire le nom de Pim", fx: { ep: ["perso", 300] }, to: "IV_m_refectoire_pim" },
      { label: "Dire le nom de ta mère, celle qui chante", if: { has: "maera:sait" }, why: "Tu ne sais pas encore son nom.", fx: { ep: ["perso", 400] }, to: "IV_m_refectoire_maera" },
      { label: "Dire un nom que personne ne connaît, celui d'un marcheur de la plaine", fx: { ep: ["perso", 400], flag: "iv:refectoire_inconnu" }, to: "IV_m_refectoire_inconnu" },
    ] }),
  IV_m_refectoire_pim: P({ title: "Pim",
    text: ["« Pim. » Tu le dis, et tu te rassieds. À la table d'en face, un frère que tu ne connais pas répète, à mi-voix, « Pim », comme on goûte un plat. Puis il mange. Tu n'as jamais pensé que le nom de ton frère pouvait être dit par un inconnu, dans une salle de pierre, à cent lieues du moulin. Il tient. Il tient même là."],
    choices: BACK }),
  IV_m_refectoire_maera: P({ title: "Maëra",
    text: ["« Maëra. » Le nom monte sous la voûte. Il sonne étrange, ici, avec ses deux voyelles qui se touchent. Personne ne le connaît. Au bout de la table, une vieille réfugiée, qui n'a rien dit depuis son arrivée, lève la tête. Elle fredonne, très bas, trois notes. Puis elle se tait, et elle mange. Tu ne sauras jamais où elle les a entendues."],
    choices: BACK }),
  IV_m_refectoire_inconnu: P({ title: "Un marcheur",
    text: ["Tu dis le nom d'un homme que tu as croisé dans la plaine blanche, qui marchait vers la ville aux tours et qui te l'a dit en passant, sans s'arrêter. Personne, ici, ne sait qui c'est. Personne, nulle part, ne sait plus qui c'est. Le frère qui préside te regarde, et il hoche la tête, lentement, comme si c'était exactement ce qu'il fallait faire. Il note le nom dans la marge du bénédicité. Il le dira demain, lui aussi."],
    choices: BACK }),
  IV_m_jeu: P({ title: "Le jeu des noms",
    text: [
      "Dans le cloître, une dizaine d'enfants, réfugiés et novices mêlés, jouent à un jeu que tu ne connais pas. L'un d'eux est au milieu, les yeux bandés. Les autres tournent autour. Il en attrape un, au hasard, et il doit dire son nom. S'il se trompe, il reste au milieu. S'il trouve, c'est l'autre qui prend le bandeau.",
      "Ils appellent ça le jeu du Glaneur. Celui du milieu, c'est le Glaneur. Il faut qu'il retrouve les noms, sinon il a perdu. Les enfants ont inventé ça cet hiver. Ils rient beaucoup. Le petit au milieu ne trouve jamais. Il rit aussi.",
    ],
    choices: [
      { label: "Te laisser attraper", fx: { ep: ["perso", 300] }, to: "IV_m_jeu_pris" },
      { label: "Prendre le bandeau, pour que le petit puisse sortir", fx: { ep: ["perso", 300], flag: "iv:jeu_glaneur" }, to: "IV_m_jeu_bandeau" },
      { label: "Les regarder jouer, assis sur le muret", to: "IV_m_jeu_regarde" },
    ] }),
  IV_m_jeu_pris: P({ title: "Attrapé",
    text: ["Le petit Glaneur t'attrape par la manche. Il palpe ton bras, ton épaule, ton visage, du bout des doigts, en fronçant le nez. Il ne te connaît pas. Il ne peut pas deviner. Il cherche quand même, très sérieusement. Puis il dit, au hasard : « Le géant ! » Tous les enfants éclatent de rire. Il a perdu. Il garde le bandeau. Il est ravi."],
    choices: BACK }),
  IV_m_jeu_bandeau: P({ title: "Le bandeau",
    text: [
      "Tu prends le bandeau. Les enfants tournent autour de toi en riant. Tu tends les mains. Tu attrapes un poignet, maigre. Tu palpes. Une tresse. Une cicatrice au menton. Tu ne sais pas qui c'est. Tu ne connais aucun de ces enfants.",
      "Alors tu dis un nom, celui qui te vient. Le premier qui vient. Il y a un silence. Puis la petite, sous tes doigts, dit : « Oui. » Tu enlèves le bandeau. Elle te regarde, les yeux ronds. « C'est mon nom, dit-elle. Comment tu savais ? » Tu ne savais pas. Personne ne le saura. Le jeu reprend.",
    ],
    choices: BACK }),
  IV_m_jeu_regarde: P({ title: "Le muret",
    text: ["Tu t'assieds sur le muret. Tu les regardes. Au bout d'un moment, tu remarques une chose : quand le petit Glaneur se trompe de nom, l'enfant qu'il a attrapé ne le corrige jamais tout de suite. Il attend. Il laisse au Glaneur le temps de chercher encore. Personne ne leur a appris ça. Ils ont trouvé tout seuls que c'était la règle la plus importante du jeu."],
    choices: BACK }),
  IV_m_portier: P({ takes: "day", title: "Le portier",
    text: [
      "À la porte du moutier, frère Gildas, le portier, un vieux tout rond, assis sur un tabouret, une lanterne allumée à côté de lui, en plein jour. Il garde la porte depuis quarante ans. Il ne la ferme plus depuis la neige.",
      "« Ils arrivent la nuit, surtout, dit-il. Les égarés. Ils ne savent plus d'où ils viennent, mais ils savent qu'il faut aller vers une lumière. Alors je laisse la lanterne. Le jour aussi. On ne sait jamais. » Il te regarde. « Toi, tu as la tête de quelqu'un qui revient de loin. Plus loin que les autres. »",
    ],
    choices: [
      { label: "« De très loin. »", to: "IV_m_portier_oui" },
      { label: "Lui proposer de garder la porte, une heure, pendant qu'il dort", fx: { ep: ["perso", 400], flag: "iv:portier" }, to: "IV_m_portier_garde" },
    ] }),
  IV_m_portier_oui: P({ title: "La lanterne",
    text: ["Il hoche la tête, sans demander d'où. Il remonte la mèche de sa lanterne. « Je me souviens de tous ceux qui sont passés par cette porte, dit-il. Pas de leurs noms. De leurs pieds. Ceux qui arrivent pieds nus, ceux qui ont des sabots, ceux qui traînent la jambe. » Il regarde les tiens. « Toi, tu marches comme quelqu'un qui a marché longtemps sur quelque chose de mou. De la neige. Ou pire. » Il ne demande pas ce qui est pire. Il te laisse repartir vers le cloître."],
    choices: BACK }),
  IV_m_portier_garde: P({ title: "Une heure",
    text: [
      "Il hésite. Puis il te laisse le tabouret, et la lanterne, et il s'endort aussitôt, contre le mur, la bouche ouverte. Tu gardes la porte. Une heure. Personne ne vient. La route descend vers la vallée, vide, poussiéreuse, sous le soleil.",
      "Puis, au bout de l'heure, quelqu'un. Une femme, au loin, qui monte, lentement, un enfant sur la hanche. Elle voit la lanterne, en plein jour. Elle presse le pas. Tu te lèves. Tu ouvres grand la porte. Tu ne sais pas qui elle est. Elle non plus, sans doute. Ça n'a pas d'importance. Tu dis : « Entrez. » Frère Gildas, derrière toi, ouvre un œil, et le referme, content.",
    ],
    choices: BACK }),
};
