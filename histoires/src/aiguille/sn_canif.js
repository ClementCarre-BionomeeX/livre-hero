// L'Île Folle-Aiguille · side story « Les figurines du Canif » (owes its question to Hoffmann's Mademoiselle de Scudéri,
// where the goldsmith Cardillac cannot bear his jewels to belong to anyone else: can a maker ever let go of what he has
// made, and who owns a thing, the hand that paid or the hand that loved it?). Act III, the ship's boy at sea: Guirec
// Kervizic, called the Canif, carves little figures of wood and bone on the forecastle and sells them for tobacco.
// Then the figures begin to vanish from the hammocks at night, and two men fight over a stolen dog. The boy keeps
// watch and sees the Canif taking his own work back from a sleeper's hand. The boy makes him return everything
// (sn:rend), keeps his secret and accepts the one figure he gives away (sn:garde), or tells the crew to stop the fights
// (sn:dit). Optional: SN_coffre. Wired in A3m_jours.
module.exports = {
  passages: {
    SN_gaillard: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "mer",
      fx: { meet: "canif" },
      text: [
        "Le soir, sur le gaillard d'avant, quand les autres fument et mentent, Guirec Kervizic sculpte. On l'appelle le Canif, à cause de l'outil qu'il tient toujours à la main, un petit couteau à lame courte, usée en croissant à force d'affûtages, avec lequel il tire d'un bout de bois flotté ou d'un os de bœuf du saloir des choses qui n'ont rien à faire sur un navire : un chien couché, un cheval qui se cabre, une vieille femme qui file, un trois-mâts toutes voiles dehors, pas plus grand qu'un doigt.",
        "Il travaille vite, sans regarder ses mains, en regardant la chose qu'il fait comme on regarde quelqu'un qu'on aime et qui dort. Les copeaux tombent entre ses pieds, fins comme des cheveux. Il souffle dessus. La chose apparaît. On dirait qu'elle était dans le bois et qu'il l'a seulement délivrée.",
        "Les hommes les lui achètent. Une chique, deux chiques, une ration de tafia pour les plus belles. Ils les gardent dans leur sac, dans leur poche, accrochées au-dessus de leur hamac avec un bout de fil. Le grand Le Cam a acheté le chien couché pour sa fille. Guivarch a la vieille femme qui file, parce qu'elle ressemble à sa mère, dit-il, sauf qu'elle file mieux.",
        "Le Canif vend sans discuter le prix. Mais tu remarques, chaque fois, qu'il garde la figurine dans sa main une seconde de trop, en la tendant, et que l'acheteur doit tirer un peu pour qu'il la lâche."
      ],
      choices: [
        { label: "Regarder le Canif ouvrir son coffre, où il range ses outils", to: "SN_coffre", hide: { seen: "SN_coffre" } },
        { label: "Laisser passer quelques jours", to: "SN_vols" }
      ] },
    SN_coffre: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "nuit",
      text: [
        "Son coffre est un petit coffre de marin, en chêne, avec sur le couvercle, sculpté en creux, un phare et une mouette. À l'intérieur, rangés sur un velours de laine noire, ses outils : sept couteaux de tailles différentes, des gouges, des limes, des bouts de verre pour polir, une peau de chien de mer pour adoucir. Chaque outil a sa place, son creux dans le velours. Il les touche en les rangeant, comme on caresse des bêtes.",
        "Au fond du coffre, sous le velours, il y a une figurine qu'il ne vend pas. Il te la montre, parce que tu as regardé longtemps sans rien demander. Une femme debout, en os, haute comme une main, dans une robe dont on voit chaque pli, avec un châle sur les épaules et les mains jointes devant elle. Elle est parfaite. Elle n'a pas de visage. À la place, une surface lisse, polie, blanche comme un œuf.",
        "Il dit que c'est sa femme. Qu'elle est morte en couches, il y a neuf ans, avec l'enfant. Qu'il a commencé cette figurine le lendemain de l'enterrement, et qu'il a fait le corps en un mois. Le visage, il n'a jamais pu. Chaque fois qu'il approche la lame, il a peur de se tromper. Il dit qu'un visage raté, ce serait la tuer une seconde fois.",
        "Il remet la femme sans visage dans son creux, sous le velours. Il referme le coffre. Il dit qu'il en a fait, depuis, des centaines d'autres, et qu'il les a toutes vendues, et que c'est sans doute pour ça qu'il en fait tant : pour s'entraîner. Il dit : « Un jour, je saurai. » Puis il s'assied sur le coffre, et il sculpte un chat."
      ],
      choices: [
        { back: "SN_gaillard", label: "Retourner sur le gaillard d'avant" }
      ] },
    SN_vols: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "mer",
      fx: { meet: "lecam" },
      text: [
        "Les figurines commencent à disparaître. D'abord une, le cheval qui se cabre, du sac d'un gabier. On croit qu'il l'a perdue. Puis deux, puis trois, en une semaine. La vieille femme qui file de Guivarch. Le trois-mâts d'un matelot de la bordée de tribord. Elles disparaissent la nuit, pendant le sommeil, de l'endroit exact où leur propriétaire les avait mises, sans que rien d'autre ne bouge.",
        "Le poste devient mauvais. On se regarde. On ferme les sacs. On dort avec la main sur sa poche. On accuse les deux mousses, puis un gabier qui a des dettes, puis personne et tout le monde. Le Canif, lui, sculpte, sans rien dire, et refuse d'en vendre d'autres. Il dit que ça porte malheur, maintenant.",
        "Le cinquième jour, le chien couché du grand Le Cam disparaît. Le Cam, qui l'avait acheté pour sa fille, devient fou de rage. Il accuse Guivarch, qui avait dit qu'il le voulait. Ils se battent dans l'entrepont, au couteau, devant tout le poste. On les sépare. Guivarch a l'avant-bras ouvert. Le bosco les met tous les deux aux fers pour la nuit. Le Cam crie, à travers la cloison, qu'il retrouvera le voleur et qu'il le jettera à la mer.",
        "Tu as remarqué une chose. Le Canif, pendant la bagarre, ne regardait pas les deux hommes. Il regardait ses mains. Ce soir-là, tu décides de ne pas dormir."
      ],
      choices: [
        { label: "Veiller dans ton hamac, les yeux mi-clos", to: "SN_nuit" }
      ] },
    SN_nuit: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "nuit",
      text: [
        "La nuit est longue. Les hamacs se balancent tous ensemble, comme un champ de cocons au vent. Les ronflements, les grincements du bois, l'eau contre le bordé. Vers la troisième heure, une ombre se lève, sans bruit, pieds nus, et passe entre les hamacs. Elle s'arrête au-dessus de celui d'un vieux matelot, qui dort la main ouverte sur la poitrine, et dans la main, une petite mouette d'os, la dernière figurine encore à bord.",
        "L'ombre se penche. Une main se tend, très doucement, et retire la mouette de la main du dormeur, un doigt après l'autre, comme on ôte une écharde. Le dormeur grogne et se retourne. L'ombre se redresse. Dans le rayon de lune qui tombe du panneau, tu vois le visage. Le Canif. Il regarde la mouette, dans le creux de sa paume. Il pleure.",
        "Tu le suis jusqu'à son coffre. Il l'ouvre. Sous le velours noir, à côté de la femme sans visage, il y a toutes les autres, rangées en rang, bien propres, astiquées, le chien couché, la vieille qui file, le cheval, le trois-mâts. Il pose la mouette au bout du rang. Il se retourne. Il te voit. Il ne cherche pas à mentir.",
        "Il dit, tout bas, qu'il ne peut pas. Qu'il les vend parce qu'il faut du tabac, et qu'ensuite, il les voit, dans les sacs, avec les chaussettes sales, dans les poches, avec les miettes, qu'il voit le grand Le Cam se servir du chien pour tasser sa pipe, et Guivarch laisser la vieille femme tomber trois fois par jour dans l'eau de cale. Il dit qu'il entend les figurines l'appeler, la nuit. Il dit qu'il va les chercher pour les sauver. Il dit : « Elles sont à moi. Je les ai faites. Le tabac, ça ne compte pas. »"
      ],
      choices: [
        { label: "Lui dire qu'il doit les rendre, toutes, cette nuit, avant que quelqu'un meure pour un chien de bois", fx: { flag: "sn:rend" }, to: "SN_rend" },
        { label: "Lui promettre de garder le secret", fx: { flag: "sn:garde" }, to: "SN_garde" },
        { label: "Aller réveiller le bosco, et dire qui est le voleur", fx: { flag: "sn:dit" }, to: "SN_dit" }
      ] },
    SN_rend: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu lui dis qu'il doit les rendre. Que Le Cam et Guivarch sont aux fers à cause de lui, que Guivarch a le bras ouvert, et que la prochaine fois, ce sera la gorge. Il t'écoute, à genoux devant son coffre, en serrant la mouette. Il dit que tu as raison. Il dit qu'il ne peut pas. Puis il dit qu'il va le faire, si tu viens avec lui. Il dit que, tout seul, ses mains les reprendraient.",
        "Vous les rendez ensemble, à la troisième heure, figurine par figurine, de hamac en hamac, sur la pointe des pieds. Tu tiens la lanterne sourde. Il remet chaque figurine exactement à l'endroit d'où il l'a prise, dans le même sac, dans la même poche, sous le même bout de fil, avec un soin d'orfèvre. Chaque fois, il hésite au-dessus du dormeur, la main ouverte. Chaque fois, il finit par lâcher.",
        "Pour les deux hommes aux fers, c'est plus difficile. Il glisse le chien couché par le hublot de la soute aux fers, dans la paille, aux pieds du grand Le Cam qui ronfle, et la vieille qui file à côté de Guivarch. Au matin, les deux hommes se réveillent avec leur figurine contre leur flanc. Ils se regardent. Ils ne comprennent rien. On les libère. Ils se serrent la main, de mauvaise grâce.",
        "Le Canif ne sculpte plus de toute la traversée. Puis, un soir, au large de Brisegrève, il ressort son couteau. Il sculpte une baleine. Il la donne au grand Le Cam, pour rien, pour sa fille. Il ne la tient pas une seconde de trop. Il ouvre la main tout de suite, très vite, comme on lâche quelque chose de brûlant."
      ],
      choices: [
        { label: "Revenir aux jours de mer", fx: { quest: "SN" }, back: "A3m_jours" }
      ] },
    SN_garde: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu lui promets de te taire. Il te regarde avec une reconnaissance terrible, puis avec méfiance, puis avec quelque chose d'autre. Il fouille dans le coffre. Il en sort une figurine, une seule, et te la tend : un mousse, en os, assis en haut d'un mât, les jambes dans le vide, qui regarde au loin. Tu ne l'avais jamais vue. Il dit qu'il l'a faite en te regardant, les premiers jours, quand tu montais dans la mâture.",
        "Il dit : « Celle-là, je te la donne. Je ne viendrai pas la reprendre. Je te le jure. » Il te la met dans la main. Il garde ses doigts dessus. Une seconde. Deux. Trois. Puis il les retire, d'un coup, comme on s'arrache une dent.",
        "Les vols cessent. Le Canif ne vend plus rien. Les figurines déjà disparues restent disparues ; on finit par accuser le roulis, les rats, le diable. Le Cam et Guivarch, sortis des fers, ne se parlent plus de la traversée. Guivarch garde une cicatrice à l'avant-bras qui ressemble, dit-il, à une signature.",
        "Tu gardes le petit mousse d'os dans ta poche. Tu le touches, la nuit, dans ton hamac. Deux fois, en te réveillant, tu le retrouves déplacé, posé sur ta poitrine au lieu d'être dans ta poche, comme si quelqu'un l'avait pris, regardé, et remis. Tu ne sais pas si c'est toi qui l'as sorti en dormant. Tu ne demandes pas."
      ],
      choices: [
        { label: "Revenir aux jours de mer", fx: { quest: "SN" }, back: "A3m_jours" }
      ] },
    SN_dit: { act: "III", title: "Les figurines du Canif", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu vas réveiller le bosco. Tu le mènes au coffre. Le bosco l'ouvre, soulève le velours, et voit les figurines, toutes, rangées en rang, astiquées, avec la femme sans visage au milieu. Il les regarde longtemps, à la lanterne. Il ne dit rien. Puis il regarde le Canif, qui attend, debout, les bras le long du corps, comme un homme qui attend le peloton.",
        "Au matin, le bosco fait rassembler le poste. Il rend à chacun sa figurine, une par une, en disant le nom. Puis il dit qui les avait prises. Les hommes regardent le Canif. Le poste se tait. Le grand Le Cam, qui sort des fers avec Guivarch, s'avance vers lui en serrant le chien couché dans son poing. Tout le monde s'attend à un coup.",
        "Le Cam ouvre la main. Il regarde le chien. Il dit, de sa grosse voix, qu'il s'en servait pour tasser sa pipe, et que la queue est un peu noircie, et qu'il en est désolé. Il demande au Canif s'il peut la nettoyer. Le Canif prend le chien. Il le nettoie, sur place, avec un bout de verre, devant tout le monde, et le rend. Le Cam le range dans sa vareuse, contre sa poitrine.",
        "Le bosco retient au Canif trois jours de tabac, pour la forme, et l'affaire est close. Mais les hommes, depuis, rangent leurs figurines autrement. Sur une étagère, dans un coin propre, à l'abri. Ils les regardent, le soir. Le Canif fait semblant de ne pas les voir regarder. Tu le surprends, une nuit, qui sourit en dormant."
      ],
      choices: [
        { label: "Revenir aux jours de mer", fx: { quest: "SN" }, back: "A3m_jours" }
      ] }
  },
  extras: {
    people: {
      canif: { name: "Guirec Kervizic", aka: ["le Canif"], qui: "Matelot qui sculpte, le soir, sur le gaillard d'avant, des figurines de bois et d'os qu'il vend pour du tabac." },
      lecam: { name: "Le Cam", qui: "Grand matelot qui a acheté au Canif un chien couché pour sa fille." }
    },
    quests: [
      { id: "SN", act: "III", kind: "annexe", title: "Les figurines du Canif", start: "SN_gaillard", doit: "scuderi", echo: ["sn:rend", "sn:garde", "sn:dit"] }
    ]
  }
};
