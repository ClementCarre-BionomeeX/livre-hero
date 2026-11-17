// L'Île Folle-Aiguille · side story « L'héritage du lieutenant Kerprat » (owes its question to Ibsen's Ghosts: must one
// tell a son that his father's respectability was a lie, when the lie has left him a sickness?). Act III, Victorine at
// sea before Brisegrève: Armel Kerprat, twenty-two, third officer of the Cormorane, son of a famous captain of Morlenc
// whom the whole town honours, comes about headaches and a sore that will not heal. Victorine recognizes, in his notched
// teeth and his eyes, the inherited form of the sailors' pox, which his father must have carried for thirty years. Armel
// is to marry at the return. Victorine tells him the whole truth about his father (td:verite), tells him only that he is
// ill and must be treated before marrying (td:soin), or writes to his mother, who must know (td:mere).
// Wired in A3v_jours.
module.exports = {
  passages: {
    TD_consultation: { act: "III", title: "L'héritage du lieutenant Kerprat", place: "cormorane", ambiance: "mer",
      fx: { meet: "kerprat" },
      text: [
        "Le lieutenant Kerprat frappe à la porte de l'infirmerie à l'heure où personne ne passe dans la coursive, ce qui est déjà un symptôme. C'est le troisième officier du bord, vingt-deux ans, grand, blond, d'une élégance un peu raide, le fils du capitaine Yann-Marie Kerprat, dont le portrait est à la Bourse de Morlenc et le nom sur une rue. Il dit qu'il a des maux de tête. Il dit qu'il voit trouble, le soir, à la lanterne. Il dit, en rougissant, qu'il a aussi une petite plaie, à la jambe, qui ne guérit pas.",
        "Victorine l'examine. La plaie est une ulcération ronde, propre, indolore, au bord taillé comme à l'emporte-pièce. Les yeux, à la lumière du hublot, ont un voile très léger sur la cornée. Elle lui demande d'ouvrir la bouche, pour la gorge. Elle voit les dents. Les deux incisives du haut sont échancrées, en forme de croissant, comme si on les avait limées. Elle a vu ces dents-là deux fois dans sa vie, à l'hospice des enfants trouvés de Morlenc.",
        "Elle pose la spatule. Elle lui demande, du ton le plus neutre qu'elle connaisse, s'il a toujours eu ces dents-là. Il dit que oui. Il dit que son père les avait aussi, en moins marqué. Il dit que c'est un trait de famille. Elle lui demande s'il a des frères et sœurs. Il dit qu'il en a eu trois, morts tout petits, avant lui. Il dit que sa mère n'en parle jamais.",
      ],
      choices: [{ label: "Lui demander de revenir demain, et réfléchir", to: "TD_nuit" }] },
    TD_nuit: { act: "III", title: "L'héritage du lieutenant Kerprat", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine passe la nuit avec ses livres, à la lanterne. Elle n'a pas besoin de ses livres. Elle sait. Le mal que les marins rapportent des ports, celui dont on ne dit pas le nom dans les salons, qui se cache vingt ans et ressort dans les os, dans les yeux, dans la tête. Et celui qu'ils donnent, sans le savoir ou en le sachant, à leurs femmes, et que les femmes donnent aux enfants qu'elles portent. Trois enfants morts tout petits. Un quatrième qui vit, avec des dents en croissant.",
        "Le capitaine Yann-Marie Kerprat est mort il y a deux ans, à Morlenc, fou. On a dit, en ville, que c'était une fièvre cérébrale rapportée des mers chaudes. On l'a enterré avec les honneurs de la marine, et l'évêque a fait son éloge. Victorine se souvient de l'enterrement : tout Morlenc y était. Elle se souvient de la veuve, très droite, sous son voile, qui n'a pas pleuré, et dont un médecin de la Faculté a dit, au retour du cimetière, qu'elle avait le regard de quelqu'un qui sait.",
        "Il y a, dans la poche de la vareuse d'Armel, elle l'a vu pendant l'examen, un médaillon avec un portrait de jeune fille. Il se marie au retour. Il l'a dit à tout le bord. Le mariage est fixé à la Saint-Michel, à la cathédrale de Morlenc, avec la fille d'un armateur. Victorine fait le compte : six mois. Le traitement au mercure dure des années, et ne guérit pas toujours. Et ce qu'elle a vu dans les yeux, ce voile, finira peut-être comme le père a fini.",
        "Le matin, elle sait ce qu'elle doit lui dire, médicalement. Elle ne sait pas ce qu'elle doit lui dire du reste. Il frappe à neuf heures, ponctuel comme un fils de capitaine.",
      ],
      choices: [
        { label: "Tout lui dire : le mal, son père, ses frères morts", fx: { flag: "td:verite" }, to: "TD_verite" },
        { label: "Lui dire qu'il est malade, qu'il doit se soigner et attendre, sans parler du père", fx: { flag: "td:soin" }, to: "TD_soin" },
        { label: "Écrire à sa mère, à Morlenc, avant de lui parler", fx: { flag: "td:mere" }, to: "TD_mere" },
      ] },
    TD_verite: { act: "III", title: "L'héritage du lieutenant Kerprat", place: "cormorane", ambiance: "mer",
      text: [
        "Elle lui dit tout. Le nom du mal, sans détour. D'où il vient : de son père, qui l'a rapporté d'un port, sans doute avant le mariage, et qui l'a donné à sa mère, qui le lui a donné, à lui, avant sa naissance, comme aux trois autres qui en sont morts. Elle lui dit que la fièvre cérébrale de son père n'était pas une fièvre. Elle lui dit qu'il ne doit pas se marier à la Saint-Michel. Elle lui dit le traitement, le mercure, les années, les chances.",
        "Armel Kerprat l'écoute debout, au garde-à-vous, comme on écoute un ordre de bataille. Il ne l'interrompt pas. Il devient de plus en plus pâle, et de plus en plus droit. Quand elle a fini, il dit, très poliment, que c'est impossible. Il dit que son père était l'homme le plus honorable de Morlenc. Il dit qu'il a son portrait dans sa cabine. Puis il s'assied, sans qu'on l'y invite, ce qu'il n'a jamais fait devant une femme. Et il dit : « Les trois petits. Ma mère allait sur leurs tombes tous les dimanches. Seule. Elle ne voulait pas qu'il vienne. »",
        "Il reste assis longtemps. Puis il demande, d'une voix d'enfant, si sa mère savait. Victorine dit qu'elle ne sait pas. Elle dit qu'elle croit que oui. Il dit que sa mère l'a laissé admirer son père pendant vingt-deux ans. Il dit qu'elle l'a laissé apprendre à marcher comme lui, à saluer comme lui, à vouloir être lui. Il dit qu'il ne sait pas s'il doit la remercier ou la haïr. Victorine dit qu'il a le temps de choisir. Elle dit que le mercure aussi demande du temps.",
        "Le soir, Victorine voit, par la porte entrouverte de la cabine du lieutenant, le portrait du capitaine Kerprat posé à l'envers sur la couchette. Le lendemain, Armel prend son quart à l'heure, impeccable, rasé, droit. Il commence le traitement. Il écrit une longue lettre à la fille de l'armateur, qu'il confie à la poste de Brisegrève. Il ne dit à personne ce qu'elle contient. Victorine se dit qu'elle a donné à un jeune homme la vérité sur son mal, et qu'avec elle, sans le vouloir, elle lui a pris son père. Elle se dit que les deux ne pouvaient pas se séparer. Elle se demande si elle a essayé.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "TD" }, back: "A3v_jours" }] },
    TD_soin: { act: "III", title: "L'héritage du lieutenant Kerprat", place: "cormorane", ambiance: "mer",
      text: [
        "Elle lui dit qu'il est malade. Elle lui dit le nom du mal, parce qu'il faut qu'il sache ce qu'il soigne, et parce qu'un homme qui ignore ce qu'il a peut le donner. Elle lui dit qu'on peut le soigner, au mercure, longtemps. Elle lui dit qu'il ne doit pas se marier à la Saint-Michel, ni avant que le traitement ait fait son œuvre. Elle ne lui dit pas d'où vient le mal. Il ne le demande pas tout de suite.",
        "Il pâlit. Il se tait. Puis il dit, très bas, en regardant le plancher, qu'il a été à terre, quelquefois, dans des ports. Il dit qu'il ne savait pas. Il dit qu'il a honte. Victorine sait que ce n'est pas des ports qu'il tient ce mal : les dents le disent, et les yeux, et les trois petits morts. Elle le laisse croire. Elle le laisse porter la faute d'un autre, parce que l'autre est mort et que ce garçon a besoin d'un père, même mort, plus que d'une vérité. Elle se dit qu'elle le décide pour lui. Elle se dit qu'elle n'en a pas le droit. Elle le fait quand même.",
        "Il commence le traitement. Il supporte le mercure, les gencives qui saignent, la salive, la fatigue, avec une discipline d'officier. Il dit à tout le monde qu'il a une fièvre tenace. Il écrit à sa fiancée pour repousser le mariage, en invoquant un voyage plus long que prévu. Il garde le portrait de son père dans sa cabine. Il lui parle, quelquefois, le soir. Victorine l'entend, à travers la cloison. Il lui demande pardon.",
        "Victorine a eu, cette nuit-là, une envie violente d'ouvrir la porte et de tout lui dire, pour qu'il cesse de demander pardon à l'homme qui lui avait tout pris. Elle ne l'a pas fait. Elle s'est dit qu'un fils qui demande pardon à son père est un fils qui a encore un père. Elle s'est dit que c'était un mensonge charitable. Elle s'est dit aussi que les mensonges charitables sont ceux qu'on paie le plus cher, et rarement soi-même.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "TD" }, back: "A3v_jours" }] },
    TD_mere: { act: "III", title: "L'héritage du lieutenant Kerprat", place: "cormorane", ambiance: "mer",
      text: [
        "Elle lui dit, ce matin-là, ce qu'il a, et comment on le soigne, et qu'il ne doit pas se marier avant d'être guéri. Elle ne lui dit pas d'où vient le mal. Elle lui dit qu'elle a besoin de quelques renseignements de famille, pour le traitement, et qu'elle va écrire à sa mère. Il donne l'adresse sans méfiance : Madame veuve Kerprat, rue de l'Amirauté, à Morlenc. Il dit que sa mère sera contente d'avoir des nouvelles.",
        "Le soir, Victorine écrit. Elle écrit à une femme qu'elle a vue une fois, sous un voile, à un enterrement. Elle écrit d'une écriture de médecin, nette, sans adjectifs. Elle dit ce qu'elle a vu, les dents, les yeux, la plaie. Elle dit qu'elle n'a rien dit à Armel de l'origine. Elle dit que ce n'est pas à elle de le lui dire. Elle dit que c'est à sa mère de choisir, puisque c'est sa mère qui a choisi de se taire pendant vingt-deux ans, et qu'elle avait sans doute ses raisons. Elle confie la lettre à la poste de Brisegrève.",
        "Armel, les jours suivants, commence le traitement avec une discipline d'officier. Il demande, une fois, si sa mère a répondu. Victorine dit que la poste de Brisegrève est lente. Il dit que sa mère écrit toujours très vite, d'ordinaire, et qu'elle met toujours une prière au bas de ses lettres. Il dit qu'il a hâte de rentrer, pour lui dire qu'il est malade, parce qu'il ne veut pas qu'elle l'apprenne d'une autre. Victorine se tait. Elle pense que la lettre est en route, et que deux personnes qui veulent s'épargner l'une l'autre vont se retrouver un jour face à face, chacune avec ce qu'elle a tu.",
        "Elle pense à cette femme, sous son voile, qui a porté seule trente ans de silence pour qu'un garçon aux dents en croissant puisse marcher droit dans les rues de Morlenc. Elle pense qu'elle lui a rendu le droit de parler, en lui laissant la charge. Elle se dit qu'elle a peut-être fait la seule chose juste : rendre la vérité à celle à qui elle appartenait. Elle se dit aussi qu'elle a été lâche, d'une lâcheté très bien élevée. Les deux pensées tiennent dans la même lettre.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "TD" }, back: "A3v_jours" }] },
  },
  extras: {
    people: {
      kerprat: { name: "Armel Kerprat", aka: ["le lieutenant Kerprat", "le troisième officier"], qui: "Troisième officier de la Cormorane, vingt-deux ans, fils d'un capitaine célèbre de Morlenc." },
    },
    quests: [
      { id: "TD", act: "III", kind: "annexe", title: "L'héritage du lieutenant Kerprat", start: "TD_consultation", doit: "revenants", echo: ["td:verite", "td:soin", "td:mere"] },
    ],
  },
};
