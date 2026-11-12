// Act I · more of the feast of the hay at Sauvelune, before the snow (the child leads, "tu"), off EN_place: the bear
// shown by a travelling showman (the small bear Pim saw), the fiddlers of Pont-de-Saule and a dance, and the tart
// contest where Agathe has competed for twenty years against the blacksmith's old aunt.
function P(o) { return Object.assign({ act: "I", place: "sauvelune", noLead: true }, o); }
module.exports = {
  EN_k_ours: P({ title: "Le montreur d'ours",
    text: [
      "Au coin de l'auberge, un cercle d'enfants autour d'un homme maigre, à l'accent du sud, qui tient au bout d'une chaîne un ours. Un petit ours. Pas plus haut qu'un chien de berger, brun, pelé aux coudes, avec un collier de cuir rouge et des yeux très doux.",
      "« Bertrand ! annonce l'homme. L'ours le plus savant des trois royaumes ! Bertrand, salue ! » L'ours se dresse sur ses pattes de derrière et fait une révérence. Les enfants hurlent. Pim, au premier rang, en pleure de joie.",
      "Puis l'homme fait la quête. Il passe devant toi avec son chapeau. De près, tu vois que l'ours a une cicatrice au museau, ancienne, en forme de croix.",
    ],
    choices: [
      { label: "Donner un sou", fx: { gold: -1, ep: ["perso", 100] }, to: "EN_k_ours_sou" },
      { label: "Demander d'où vient l'ours", to: "EN_k_ours_histoire" },
    ] }),
  EN_k_ours_sou: P({ title: "Bertrand",
    text: ["L'homme te remercie d'un clin d'œil. L'ours, Bertrand, te regarde passer le sou, et il tend le museau vers ta main, pour la sentir. Il sent longtemps. Puis il éternue, et tous les enfants rient, et toi aussi."],
    choices: [{ label: "Revenir sur la place", to: "EN_place" }] }),
  EN_k_ours_histoire: P({ title: "D'où vient l'ours",
    text: [
      "« Du nord, dit l'homme, plus bas, quand les enfants sont partis. Des gens du Corbeau me l'ont vendu, ourson, il y a six ans. Sa mère était morte dans une avalanche. Ils m'ont dit qu'il avait un nom, chez eux, mais qu'ils ne pouvaient pas me le dire. Un nom, là-haut, ça ne se donne pas. Alors je l'ai appelé Bertrand. »",
      "Il gratte l'ours entre les oreilles. « Il répond à Bertrand. Mais quand il dort, il grogne autre chose. Toujours la même chose. Deux syllabes. Je crois que c'est son vrai nom. Je crois qu'il s'en souvient. »",
    ],
    choices: [{ label: "Revenir sur la place", fx: { ep: ["perso", 200] }, to: "EN_place" }] }),

  EN_k_bal: P({ title: "Les violons",
    text: [
      "Les violons de Pont-de-Saule jouent sur le perron de l'auberge. Trois violons, une vielle, un tambourin. Ils jouent une bourrée, puis une autre. On danse sur la place, les vieux avec les vieilles, les filles entre elles, les garçons qui n'osent pas.",
      "Tess est là, au bord de la danse, les bras croisés, son tablier de forge encore noué. Elle fait semblant de ne pas regarder. Elle regarde.",
    ],
    choices: [
      { label: "Inviter Tess", fx: { flag: "tess:bal", ep: ["perso", 300] }, to: "EN_k_bal_tess" },
      { label: "Inviter Agathe, qui tape des mains au premier rang", fx: { ep: ["perso", 200] }, to: "EN_k_bal_agathe" },
      { label: "Regarder danser", to: "EN_place" },
    ] }),
  EN_k_bal_tess: P({ title: "La bourrée",
    text: [
      "Elle hausse les épaules, comme si ça lui était égal, et elle dénoue son tablier. Vous dansez. Elle danse mal, comme une forgeronne, en frappant du pied trop fort. Toi aussi. Vous vous marchez dessus. Vous riez.",
      "Au troisième tour, elle te dit à l'oreille, entre deux pas : « Si un jour tu pars, tu reviens. Promets. » Tu promets, sans réfléchir, parce que la musique va vite et que partir ne t'est jamais venu à l'idée.",
    ],
    choices: [{ label: "Revenir sur la place", to: "EN_place" }] }),
  EN_k_bal_agathe: P({ title: "Une danse avec Agathe",
    text: ["Agathe proteste, pour la forme, puis elle te prend les mains. Elle danse comme on pétrit, avec énergie, en riant. Joris, sur un banc, fait semblant d'être jaloux. À la fin, elle t'embrasse sur les deux joues, essoufflée, et elle dit : « Tu danses comme ton père. » Puis elle se reprend, très vite, sans savoir pourquoi. « Comme Joris, je veux dire. » Et elle rit encore."],
    choices: [{ label: "Revenir sur la place", to: "EN_place" }] }),

  EN_k_tartes: P({ title: "Le concours de tartes",
    text: [
      "Sur une table à tréteaux, sous le tilleul, les tartes du concours. Douze. Le Père Anselme est juge, comme tous les ans, assis devant, une fourchette dans chaque main, l'air grave d'un évêque.",
      "Depuis vingt ans, c'est entre Agathe et la grand-tante Ferrand, la tante du maréchal, qui tient sa maison depuis que la mère de Tess est morte. Tarte aux myrtilles contre tarte aux pommes. Vingt ans, dix victoires chacune. Les deux femmes se tiennent de part et d'autre de la table, chacune derrière sa tarte, sans se regarder.",
    ],
    choices: [
      { label: "Goûter les deux, en douce, avant le jugement", test: { dom: "discretion", label: "La fourchette", help: [{ if: { seen: "EN_tess" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300], pv: 2 }, to: "EN_k_tartes_gout" }, lose: { to: "EN_k_tartes_pris" } },
      { label: "Attendre le jugement", to: "EN_k_tartes_jugement" },
    ] }),
  EN_k_tartes_gout: P({ title: "Deux bouchées",
    text: ["Tu passes derrière le tilleul, tu tends la main, deux fois. Myrtilles : sucrée, épaisse, avec un goût de bois. Pommes : acide, fine, la pâte qui se casse. Tu ne saurais pas choisir. Tu crois comprendre pourquoi Anselme met chaque année si longtemps à se décider."],
    choices: [{ label: "Attendre le jugement", to: "EN_k_tartes_jugement" }] }),
  EN_k_tartes_pris: P({ title: "La main dans la tarte",
    text: ["La tante Ferrand t'attrape le poignet au-dessus de sa tarte, sans se retourner. « Toi, dit-elle. Je te vois faire depuis que tu as six ans. » Elle te lâche. Agathe, de l'autre côté, te foudroie du regard. Tout le monde rit. Tu es rouge jusqu'aux oreilles."],
    choices: [{ label: "Attendre le jugement", to: "EN_k_tartes_jugement" }] }),
  EN_k_tartes_jugement: P({ title: "Le jugement",
    text: [
      "Anselme goûte. Il goûte encore. Il ferme les yeux. Il pose ses deux fourchettes. Il se lève, et il annonce, solennel, comme on annonce une naissance : « Égalité. »",
      "Les deux femmes se regardent, pour la première fois de la journée. Puis la tante Ferrand coupe une part de sa tarte, et la tend à Agathe, et Agathe coupe une part de la sienne, et la tend à la tante Ferrand, et elles mangent, chacune la tarte de l'autre, sans un mot, pendant que tout le village applaudit.",
      "« L'an prochain, dit Agathe, la bouche pleine. — L'an prochain », dit la tante Ferrand.",
    ],
    choices: [{ label: "Revenir sur la place", to: "EN_place" }] }),
};
