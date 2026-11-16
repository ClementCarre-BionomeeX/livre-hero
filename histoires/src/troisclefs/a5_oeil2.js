// Les Trois Clefs d'Aiguemorne · act V, the eye (2/2): the Plombs. In by the laundry cart, the yard (hub A5o_plombs):
// the Douairière at the grille, the turnkey, the sixth window of the second row, Ugolin (a witness, or the Syndic's
// man at the door); the drying loft until ten; the cell of the Lantern, the sixty-fourth key, the debtors; the great
// lantern of the prison carried down to the gate; the lead roof under the Tower. Exit: A5c_rdv.
// Shared marks: monde:a5:douairiere (she is out, and leads), monde:a5:berlue_sait (she has been told who is in the
// Bronze), monde:a5:plombs_ouverts (every debtor is out), monde:a5:tousseur (the one who coughs is out),
// monde:a5:ugolin=temoin|retourne|battu, monde:a5:foule (two groups or more will climb; computed at the end).
// Personal: a5:o_bas.
var LOOSE = { not: { any: [{ has: "monde:ugolin:temoin" }, { has: "monde:ugolin:assis" }, { has: "monde:ugolin:parti" }] } };
var GROUPES = [{ has: "monde:a5:f_quai" }, { has: "monde:a5:f_compagnons" }, { has: "monde:a5:f_mineurs" }, { has: "monde:a5:f_pleureuses" }, { has: "monde:a5:plombs_ouverts" }];
module.exports = {
  passages: {
    A5o_plombs_reco: { act: "V", title: "La charrette au linge", place: "citadelle", ambiance: "chateau",
      fx: { until: 16 },
      text: [
        "La charrette au linge sort des Plombs et y rentre deux fois le jour. C'est une chose que la maison Berlue sait depuis septembre, quand la main avait voulu s'y cacher sous un drap et y avait éternué.",
        "La lavandière attend au lavoir de la Poterne, les poings sur les hanches, large, rouge, devant trois paniers de draps gris. Fifrelin lui doit quelque chose, ou elle le lui doit ; il n'a jamais voulu dire quoi. Elle te regarde venir, avec ta figure mal débarbouillée.",
        "« Encore un amoureux. » Elle soulève un drap. « Monte. Et celui-ci, s'il éternue, je l'étouffe avec le traversin. »",
        "On ne respire sous le linge d'une prison que ce que deux cents personnes y ont laissé. Tu y restes un quart d'heure, cahoté{e} de pavé en pavé, la poterne du nord, la voix du factionnaire, une plaisanterie sur le poids, puis le bruit creux d'une voûte et un portail qui se referme.",
        "Le drap se lève. « Descends. Tu es dans la cour au linge. Le guichetier ne compte que ce qui sort. »",
      ],
      choices: [{ label: "Descendre", to: "A5o_plombs", big: true }] },

    A5o_plombs: { act: "V", title: "La cour au linge", place: "plombs", ambiance: "chateau", hub: true, backName: "la cour au linge",
      text: [
        { first: true, text: "Les Plombs, vus du dedans, sont une maison où l'on a tout prévu pour que personne ne s'y plaise et où deux cents personnes vivent quand même. Il y a des cordes à linge d'une fenêtre à l'autre. Il y a un pot de basilic sur un appui, entre deux barreaux. Quelqu'un joue de la guimbarde au premier." },
        { first: true, text: "On y met les débiteurs. Ils y restent jusqu'à ce que la dette soit payée ; comme ils n'y gagnent rien, elle ne l'est jamais, et elle s'augmente chaque mois de leur pension, que le greffe porte en compte. Tu as connu un homme entré là pour quatorze écus et sorti pour quatre-vingts, les pieds devant." },
        { first: true, text: "Aujourd'hui, jour de grâce, les familles ont le parloir jusqu'au soir. Il y a une file de femmes à paniers devant la grille du rez-de-chaussée. Tu en prends un, vide, que la lavandière te met au bras, et tu deviens une parente." },
        { again: true, text: "La cour au linge, ses cordes, son pot de basilic. La file du parloir. La guimbarde, au premier, joue toujours le même air." },
      ],
      choices: [
        { label: "Prendre ton tour à la grille du parloir", to: "A5o_berlue" },
        { label: "Compter les fenêtres du deuxième rang, jusqu'à la sixième", to: "A5o_sixieme", once: true },
        { label: "Regarder de près le guichetier, qui a maigri", to: "A5o_guichetier", once: true },
        { label: "Demander à la lavandière ce que c'est que ce grand diable, à la porte", to: "A5o_ugolin", once: true },
        { label: "Monter au séchoir, et y attendre dix heures", to: "A5o_sechoir", big: true },
      ] },

    // ───────────────────────────── The grille ─────────────────────────────
    A5o_berlue: { act: "V", title: "Le parloir", place: "plombs", ambiance: "chateau", hub: true, backName: "la grille",
      fx: { meet: "douairiere" },
      text: [
        { first: true, text: "Le parloir est un couloir coupé en deux, dans sa longueur, par une double grille. Les visiteurs d'un côté, les prisonniers de l'autre, et entre les deux un pied de vide où se promène un porte-clefs. On se parle en criant. Tout le monde crie des choses tendres." },
        { first: true, text: "Elle est au bout, sur un tabouret qu'on lui a apporté. Elle a son châle, son chignon gris fer, sa robe de veuve, et elle tricote. Elle n'a pas maigri. Elle n'a pas pâli. Six semaines de prison ont passé sur Marjolaine Berlue comme la pluie sur une ardoise." },
        { first: true, text: "Elle lève son œil gauche, le plissé. Il fait le tour de ta personne en une seconde : les souliers, les mains, la figure mal lavée, le panier vide." },
        { first: true, text: "« Ma nièce », dit-elle très haut, à l'usage du porte-clefs. Ou « mon neveu » ; elle a une façon de le dire qui convient à tout le monde. « Tu as mauvaise mine. Tu ne manges pas. Approche, que je te gronde. »" },
        { first: true, text: "Tu colles ta figure aux barreaux. Elle parle sans lever les yeux de ses aiguilles, dans ce murmure du métier qui ne porte pas à deux pas." },
        { again: true, text: "La Douairière, sur son tabouret, derrière la double grille. Ses aiguilles vont. Elle attend la suite." },
      ],
      choices: [
        { label: "« Quel est le plan, pour dix heures ? »", to: "A5o_berlue_plan", once: true },
        { label: "« Vous saviez, pour Balancier ? »", to: "A5o_berlue_balancier", once: true },
        { label: "Lui dire qui est dans le Bronze", fx: { flag: "monde:a5:berlue_sait" }, to: "A5o_berlue_elle", once: true },
        { label: "« Pour qui tricotez-vous ? »", fx: { flag: "a5:o_bas" }, to: "A5o_berlue_bas", once: true },
        { label: "Lui baiser la main à travers la grille, comme font les nièces", back: "A5o_plombs" },
      ] },

    A5o_berlue_plan: { act: "V", title: "La soixante-quatrième", place: "plombs", ambiance: "chateau",
      text: [
        "« Le plan. » Elle compte ses mailles. « On m'a pris soixante-trois clefs en m'écrouant. Le greffier les a comptées devant moi, avec un respect qui m'a fait plaisir. Il n'a pas regardé dans mon chignon. Les hommes ne regardent jamais dans un chignon : ils croient que c'est du cheveu. »",
        "Elle tourne son ouvrage.",
        "« J'ai la soixante-quatrième. C'est un passe des Plombs, forgé par mon second mari, qui y avait séjourné. Il ouvre les cellules, les paliers, et la porte de la cour. Je pouvais sortir le premier soir. »",
        "« Et vous êtes restée six semaines. »",
        "« On ne sort pas d'une prison parce qu'on le peut, mon enfant. On en sort quand c'est l'heure. Dehors, j'étais une receleuse en fuite, avec le guet après moi et trois petits à nourrir de loin. Dedans, j'étais une vieille femme qui s'était livrée, que tout le quai plaignait, et qui avait la meilleure fenêtre de la ville sur la cour de la citadelle. J'ai vu arriver les chariots du gros. J'ai compté ses casaques. J'ai vu monter des briques à la chapelle. » Elle te regarde enfin. « Vous aviez un œil sur la route. Il m'en fallait un ici. »",
        "Elle reprend, plus bas encore.",
        "« À dix heures, le guichetier aura bu à la santé du Bronze un petit tonneau que les dames du marché lui ont fait porter. Tu montes au troisième par l'escalier du linge. Tu grattes à ma porte, pour la forme : j'aime qu'on vienne me chercher. Après quoi je descends dans cette cour, je prends la lanterne de la maison, et je vais au-devant de ceux d'en bas. Ils monteront mieux derrière quelqu'un qu'ils connaissent. »",
      ],
      choices: [{ back: "A5o_berlue" }] },

    A5o_berlue_balancier: { act: "V", title: "Un homme qui voulait parler", place: "plombs", ambiance: "chateau",
      text: [
        "Ses aiguilles s'arrêtent. C'est la première fois.",
        "« Il m'avait fait dire qu'il passerait. Par la petite Toinon, qui lui portait ses œufs. *Dites à Madame Berlue que j'ai besoin d'un conseil sur une chose que j'ai trouvée dans une caisse.* » Elle regarde ses mailles. « Un homme qui graisse le Juge depuis quarante ans, et qui a besoin du conseil d'une voleuse. J'ai compris que c'était gros. Je ne savais pas quoi. »",
        "« Il n'est jamais venu. »",
        "« Il a eu peur d'être suivi. Il vous a donné rendez-vous chez lui, à vous, par prudence. La prudence l'a tué : on l'attendait chez lui. » Elle reprend son tricot, d'un geste sec. « Et l'on vous y attendait après. Quand j'ai vu le guet au bout de l'impasse, ce soir-là, avec le Cadenas en personne, à l'heure juste, j'ai su deux choses. Qu'on avait tué ce pauvre homme pour le faire taire. Et qu'on vous avait choisis pour le porter. »",
        "Elle fait trois mailles.",
        "« Alors je me suis livrée. Ce n'était pas de la bonté. Il fallait que le Cadenas eût quelqu'un entre les mains, pour qu'il cesse de courir une heure ; et il fallait que ce fût quelqu'un d'assez vieux pour qu'il n'ose pas le bousculer. J'ai fait le compte. C'était moi. »",
        "« Il vous a interrogée ? »",
        "« Onze fois. C'est un honnête homme : il pose toujours la même question, et il écoute si la réponse change. La mienne n'a pas changé. À la huitième, il m'a demandé qui avait prévenu le guet, ce soir-là. Je lui ai dit de regarder son propre registre. Il y est allé. Il est revenu avec une autre figure. »",
      ],
      choices: [{ back: "A5o_berlue" }] },

    A5o_berlue_elle: { act: "V", title: "Taillefer", place: "plombs", ambiance: "chateau",
      fx: { ep: ["histoire", 1500] },
      text: [
        "Tu le lui dis en dix mots. Une femme. Elle écrit les Sentences. Une fille des Bas-Fonds, murée à vingt ans, il y a quarante-cinq ans.",
        "La Douairière ne bouge pas. Ses aiguilles restent croisées. Autour de vous, on crie des choses tendres.",
        "« Il y a quarante-cinq ans », dit-elle.",
        "Elle pose son tricot sur ses genoux. Tu ne lui avais jamais vu les mains vides.",
        "« Il n'y avait pas d'hospice, de mon temps. Il y avait le quai, et une cave sous la tannerie, où l'on dormait à quinze dans la paille. On s'appelait par ce qu'on avait : la Rousse, le Boiteux, Trois-Sous. Il y en avait une qui avait trouvé son nom toute seule, sur une enseigne de coutelier. Elle disait qu'on a le droit de se choisir un père, quand on n'en a pas reçu. *Taillefer.* Elle avait trois ans de moins que moi, et elle m'a appris mes lettres, avec un clou, sur une ardoise volée. »",
        "Sa voix n'a pas changé. C'est son œil gauche qui s'est ouvert tout grand, pour la première fois depuis que tu la connais ; et tu vois qu'il est gris, très clair, et qu'il n'a jamais été plissé que par l'habitude.",
        "« À vingt ans, elle écrivait les placets de tout le quai. Elle gagnait leurs procès. Elle faisait peur aux greffiers. Un jour, des messieurs sont descendus la voir, en carrosse : trois, avec des robes. Le lendemain, on nous a dit qu'elle était entrée chez les Recluses, par vocation. » Elle a un petit rire, sans gaieté. « Ludivine, une vocation ! Elle ne croyait qu'aux pièces écrites. Je l'ai pleurée, et je lui en ai voulu. Je me suis dit : la plus forte de nous toutes, et elle va se cacher derrière un mur. »",
        "Elle reprend ses aiguilles. Elles tremblent, puis elles ne tremblent plus.",
        "« Quarante-cinq ans que cette ville me donne tort une fois sur deux, quand je prête à la petite semaine, et raison quand je cache un débiteur. Je croyais que c'était le Bronze. Je me disais : cette mécanique a du bon sens. » Elle fait une maille. « C'était elle. Elle me jugeait par un trou, sans savoir que c'était moi. Ou en le sachant. Avec elle, on ne pouvait jamais dire. »",
        "Elle te regarde.",
        "« Tu vas monter là-haut, toi. Tu lui diras que Marjolaine est dans la cour. Elle saura laquelle. Il n'y en avait qu'une. »",
      ],
      choices: [{ back: "A5o_berlue" }] },

    A5o_berlue_bas: { act: "V", title: "Une paire de bas", place: "plombs", ambiance: "chateau",
      text: [
        "« Pour qui ? » Elle lève l'ouvrage. C'est un bas de laine grise, long, serré, presque fini ; son pareil est roulé dans la poche de son tablier. « Je n'en sais rien. Quand on m'a mise ici, j'ai demandé de la laine. On ne refuse pas de la laine à une vieille. J'ai monté des mailles sans penser à personne. »",
        "Elle l'examine, de son œil plissé.",
        "« Ils sont trop petits pour moi, et trop grands pour le gamin. C'est un pied de femme, étroit. Je ne sais pas pourquoi mes mains ont fait ce pied-là. À mon âge, on les laisse aller : elles en savent plus long que la tête. »",
        "Elle rabat trois mailles.",
        "« Il y a toujours quelqu'un qui a froid, dans cette ville. Je les donnerai à la première personne que je rencontrerai cette nuit et qui aura passé l'hiver sans feu. »",
      ],
      choices: [{ back: "A5o_berlue" }] },

    // ───────────────────────────── The second row ─────────────────────────────
    A5o_sixieme: { act: "V", title: "La sixième fenêtre", place: "plombs", ambiance: "chateau",
      text: [
        "Le deuxième rang est celui des petites dettes : moins de cinq cents écus. On y est à quatre par cellule. La sixième fenêtre a un mouchoir à carreaux noué à un barreau, pour la reconnaître de la cour.",
        { if: { is: { reve: "plombs" } }, text: "C'est la tienne. Tu l'as regardée de la cour, en septembre ; du rempart, hier soir. Tu ne l'avais jamais vue d'aussi près : il y a, derrière le mouchoir, une main posée sur l'appui, que tu reconnaîtrais entre mille, et qui est devenue en deux hivers la main de quelqu'un de vieux.", else: "L'un de vous deux autres a là quelqu'un des siens, depuis deux hivers, pour trois cents écus. Il n'en parle jamais. La Douairière vous l'avait dit à tous, un soir, à sa façon : *dans cette maison, on ne demande pas à qui est la sixième fenêtre du deuxième rang. On le sait.*" },
        "Une toux en sort, longue, creuse, qui n'en finit pas, et que les trois autres de la cellule n'entendent même plus.",
        { if: { is: { reve: "plombs" } }, text: "Tu ne peux pas appeler. Tu ne peux pas monter. Tu restes dessous, ton panier vide au bras, et tu fais la seule chose qui te soit permise : tu siffles, tout bas, quatre notes, celles de la maison, celles du soir, d'avant. La toux s'arrête. La main, sur l'appui, se retourne lentement, la paume en l'air. Puis elle se referme, comme sur quelque chose qu'on lui aurait donné.", else: "Tu notes la fenêtre. Ce soir, si tout va, il y aura dans ce corridor quelqu'un avec un passe ; et tu veux pouvoir dire à qui tu sais, là-haut, sous le balancier, que tu es passé{e} devant." },
      ],
      choices: [{ back: "A5o_plombs" }] },

    A5o_guichetier: { act: "V", title: "Maître Nicaise", place: "plombs", ambiance: "chateau",
      text: [
        "Le guichetier des Plombs fume sur son billot, sous la lanterne de la prison, où pend la grosse clef noire à deux pannetons. Il a effectivement maigri. Il a l'œil cerné d'un homme qui, depuis six semaines, a sous sa garde quelqu'un de plus fort que lui.",
        "La lavandière te renseigne, en tordant un drap.",
        "« C'est le troisième. Le premier, la vieille l'a fait changer parce qu'il volait sur la soupe : elle a écrit au greffe, avec les chiffres, cuillerée par cuillerée. Le second, parce qu'il battait un débiteur ; elle a fait venir la femme du gouverneur, un dimanche, voir les bleus. Celui-ci est honnête. Elle le tient autrement. »",
        "« Comment ? »",
        "« Il a une fille à marier, pas de dot. La vieille lui a dit : *Nicaise, le jour où je sors d'ici, votre fille a quatre cents écus sur le comptoir du notaire.* Elle a ajouté : *je ne vous demande rien en échange.* Depuis, il ne dort plus. Un homme à qui l'on ne demande rien, ça se demande tout le temps ce qu'il devrait faire. »",
        "Un garçon de cabaret traverse la cour, un tonnelet sur l'épaule, et le pose près du billot. *De la part des dames du marché, pour boire à la santé du Bronze.* Maître Nicaise le regarde avec méfiance, puis avec mélancolie. Il tire son gobelet.",
      ],
      choices: [{ back: "A5o_plombs" }] },

    // ───────────────────────────── Ugolin ─────────────────────────────
    A5o_ugolin: { act: "V", title: "Tête-d'Enclume", place: "plombs", ambiance: "chateau",
      branch: [
        { if: { has: "monde:ugolin:temoin" }, fx: { set: { "monde:a5:ugolin": "temoin" } }, to: "A5o_ugolin_temoin" },
        { if: LOOSE, to: "A5o_ugolin_garde" },
        { to: "A5o_ugolin_absent" },
      ] },

    A5o_ugolin_temoin: { act: "V", title: "La cellule du témoin", place: "plombs", ambiance: "chateau",
      fx: { meet: "ugolin", ep: ["perso", 800] },
      text: [
        "« Celui-là ? dit la lavandière. C'est pas un débiteur. C'est le prévôt qui l'a mis là, il y a dix jours, au premier, dans la chambre du greffier, avec un lit et une chaise. Il dit que c'est un témoin. On lui porte à manger du poste. Il a le droit de sortir dans la cour. Il sort pas. »",
        "Il est assis sur une borne, près de la porte, le dos au mur. C'est un colosse au cou plus large que le crâne, tête rasée, front bosselé. Il n'a plus son marteau. Ses mains pendent entre ses genoux, ouvertes, énormes, et il les regarde.",
        "Il te reconnaît. Il ne se lève pas.",
        "« T'es de ceux de Ferrières. » Sa voix est rare, enrouée par la fumée. « Vous m'avez dit que c'était moi qui avais fait. Même si on m'avait commandé. J'y ai pensé dans la mine, avec les planches. J'y ai pensé sur la route. C'est vrai. »",
        "Il ferme une main, la rouvre.",
        "« Le prévôt m'a tout fait dire. Trois fois. Il a écrit. Il m'a demandé si je le redirais devant du monde. J'ai dit oui. Il m'a demandé si je savais ce que ça me vaudrait. J'ai dit oui. » Il lève les yeux vers la Tour, par-dessus le toit. « Il y avait une lampe, chez le vieux. Il graissait une montre. Il m'a dit *bonsoir, Ugolin*, parce qu'il me connaissait : je lui portais des plis. Il s'est pas retourné. On se retourne pas, quand c'est quelqu'un qu'on connaît. »",
        "Il se tait. Tu n'as rien à lui dire qui pèse ce que pèse cela.",
        "« Ma mère est venue avec ceux de la mine, reprend-il. Elle est au quai. Elle lave les morts, elle. Elle m'a dit : *tu diras tout, et après je te laverai.* Je crois qu'elle voulait dire autre chose. »",
      ],
      choices: [{ back: "A5o_plombs" }] },

    A5o_ugolin_absent: { act: "V", title: "Un portier de louage", place: "plombs", ambiance: "chateau",
      text: [
        "« Celui-là ? dit la lavandière. C'est un de Ferrières. Le gros Syndic en a mis un à chaque porte de la citadelle depuis ce matin, pour doubler le guet, qu'il trouve mou. Celui des Plombs s'ennuie. Il m'a demandé si je lavais aussi les casaques. »",
        "C'est une casaque rousse comme les autres, large, jeune, la hallebarde contre le mur. Il mange un oignon.",
        "Tu cherchais quelqu'un d'autre : un colosse à tête rasée, un marteau à la ceinture. Il n'est pas là. Depuis Ferrières, on ne l'a plus vu dans le sillage du Syndic. Il y a des hommes de main qui se perdent en route, comme un outil qu'on a posé quelque part et qu'on ne retrouve pas.",
      ],
      choices: [{ back: "A5o_plombs" }] },

    A5o_ugolin_garde: { act: "V", title: "Un marteau à la porte", place: "plombs", ambiance: "chateau",
      fx: { meet: "ugolin" },
      text: [
        "« Celui-là ? dit la lavandière en baissant la voix. C'est l'homme du gros Syndic. Il est arrivé à midi, avec un papier. *Que nul ne sorte des Plombs cette nuit, de quelque étage que ce soit.* Maître Nicaise a dit que c'était sa besogne à lui. L'autre s'est assis devant la porte de l'escalier. Il a pas bougé depuis. »",
        "Il est sur une borne, au pied de l'escalier du linge, le seul qui monte au troisième. C'est un colosse au cou plus large que le crâne, tête rasée, front bosselé, une oreille en chou. Un marteau de frappeur pend à sa ceinture.",
        "Tu le connais. Tu l'as vu à Ferrières, dans l'ombre du Syndic. Et tu sais, depuis un folio daté du lendemain d'un meurtre, ce que ce marteau a fait le 14 octobre, sous une lampe, à un vieil homme qui graissait une montre.",
        "Il lève les yeux. Il te regarde passer avec ton panier. Il n'a pas la mémoire des figures ; il a celle des consignes.",
        "À dix heures, pour monter chez la Douairière, il faudra passer devant cette borne.",
      ],
      choices: [{ back: "A5o_plombs" }] },

    // ───────────────────────────── The loft, then ten o'clock ─────────────────────────────
    A5o_sechoir: { act: "V", title: "Le séchoir", place: "plombs", ambiance: "nuit",
      fx: { until: 22 },
      text: [
        "Le séchoir est sous le toit : un grenier long, à claire-voie, où pendent les draps de deux cents lits. On y cuit l'été ; ce soir, on y gèle, et le plomb de la couverture, à toucher, colle aux doigts.",
        "Tu t'installes contre une lucarne, entre deux draps, et tu regardes venir la nuit sur la cour de la citadelle.",
        "On allume les torches. L'estrade aux trois dais se couvre de robes. À neuf heures, le bruit monte de la ville : la procession a quitté la place aux Heures. Tu la vois paraître au dernier lacet, un fleuve de feu, avec ses bannières, ses châsses, les Enfants de la Morne en tête, deux par deux, une lanterne à la main ; puis les métiers jurés ; puis trois taches de couleur sous trois dais portés.",
        "La cour s'emplit. Elle ne contient que les gens à billets : cinq ou six cents, en habit de fête. Le reste s'arrête à la grande porte, où le guet a croisé les hallebardes.",
        { if: { count: GROUPES, min: 2 }, text: "Derrière les hallebardes, sur la rampe, il y a ce soir quelque chose que l'on n'y voit pas d'ordinaire. Cela ne fait pas de bruit. Cela monte, par paquets, des lanternes à la main : le quai, les venelles, la ville du bas, qui d'habitude écoute de loin et qui est venue voir.", else: "Derrière les hallebardes, la rampe est à peu près vide. La ville du bas est restée en bas, comme tous les sept ans, sur ses quais, à attendre que le Bronze parle pour elle." },
        "À dix heures, la cloche de la Tour sonne, tout près, dix coups qui font vibrer le plomb.",
        "Dans la cour au linge, sous sa lanterne, Maître Nicaise a posé son gobelet. Il dort, le menton sur la poitrine, avec l'air d'un homme qui a enfin trouvé ce qu'il devait faire.",
      ],
      choices: [{ label: "Descendre par l'escalier du linge", to: "A5o_dix", big: true }] },

    A5o_dix: { act: "V", title: "Dix heures", place: "plombs", ambiance: "nuit",
      branch: [
        { if: LOOSE, to: "A5o_borne" },
        { to: "A5o_cellule" },
      ] },

    A5o_borne: { act: "V", title: "Devant la borne", place: "plombs", ambiance: "nuit",
      text: [
        "Il ne dort pas, lui. Il n'a pas touché au tonnelet. Il est sur sa borne, au pied de l'escalier, son marteau en travers des genoux, et la lanterne de la prison lui fait une tête de pierre.",
        "Tu sors de l'ombre. Il se lève. Debout, il bouche la porte.",
        "« On monte pas. » Il n'y met aucune menace : il récite. « M. Quincarnon a dit. Que nul ne sorte. Si nul ne sort, nul ne monte, c'est pareil. »",
        "Fifrelin est quelque part derrière toi, avec une fronde et beaucoup d'illusions.",
        "Il y a deux façons de passer devant Ugolin Tête-d'Enclume. La maison Berlue a toujours préféré la seconde ; mais il n'est pas certain que cet homme-là en laisse le choix.",
      ],
      choices: [
        { label: "« Ta mère lave les morts du Crassier, Ugolin. Elle a lavé le père Anselme. Qui a lavé le Remonteur ? »",
          test: { dom: "social", diff: 15, label: "Parler à un marteau", help: [{ if: { has: "monde:a2:ugolin_avoue" }, v: 15 }, { if: { has: "remonteur:verite" }, v: 10 }, { if: { voie: "rebouteux" }, v: 10 }, { if: { has: "monde:mineurs:allies" }, v: 5 }] },
          win: { fx: { set: { "monde:a5:ugolin": "retourne" }, ep: ["perso", 2000] }, to: "A5o_borne_parle" }, lose: { to: "A5o_borne_bat" } },
        { label: "Tirer ta lame", to: "A5o_borne_bat" },
      ] },

    A5o_borne_parle: { act: "V", title: "« Bonsoir, Ugolin »", place: "plombs", ambiance: "nuit",
      text: [
        "Le marteau, qui montait, s'arrête à mi-chemin.",
        "« Tu connais ma mère. »",
        "« Je connais ce qu'elle dit des gens à qui l'on commande. »",
        "Il te regarde. Quelque chose travaille derrière ce front bosselé, lentement, comme travaille une poutre.",
        "« Il m'a dit *bonsoir, Ugolin*. » Cela sort d'un coup, sans que tu l'aies demandé. « Le vieux. Il s'est pas retourné, il graissait. Je lui portais des plis, il me connaissait. *Bonsoir, Ugolin, pose ça sur l'établi.* J'avais rien à poser. »",
        "Il baisse le marteau. Il le regarde, au bout de son bras, comme une chose qu'on lui aurait mise dans la main pendant qu'il dormait.",
        "« On m'avait dit : c'est pour la ville. Un vieux qui va tout casser. M. Quincarnon a rayé ma dette le lendemain, sur le grand livre. Soixante écus. Ma mère a su que la dette était rayée. Elle a pas su pourquoi. Elle m'a fait une soupe. » Sa voix se casse, d'une façon horrible chez un homme de cette taille. « J'ai pas pu la manger. »",
        "Il s'écarte de la porte. Il s'assied par terre, contre le mur, le marteau entre les pieds.",
        "« Monte. Sors qui tu veux. Je dirai rien. » Il lève vers toi une figure d'enfant énorme. « Y a le prévôt, dans cette ville. On m'a dit qu'il écoute. Tu crois qu'il écouterait quelqu'un comme moi ? »",
        "Tu lui dis où est le poste de la porte Haute. Il hoche la tête, plusieurs fois, comme on apprend une adresse par cœur.",
      ],
      choices: [{ label: "Monter", to: "A5o_cellule", big: true }] },

    A5o_borne_bat: { act: "V", title: "Le marteau", place: "plombs", ambiance: "nuit",
      text: [
        "Il n'écoute pas, ou il n'entend plus : il a une consigne, et tu es dedans. Le marteau se lève. Il est fait pour frapper le fer rouge à deux mains ; Ugolin le tient d'une seule.",
      ],
      choices: [
        { label: "Te battre, dans la cour au linge, entre les draps",
          fight: { title: "Ugolin Tête-d'Enclume", enemies: [{ id: "tete_enclume", n: 1 }], win: { fx: { set: { "monde:a5:ugolin": "battu" }, ep: ["perso", 2500] }, to: "A5o_borne_gagne" }, lose: { fx: { pv: 2, set: { "monde:a5:ugolin": "battu" } }, to: "A5o_borne_perd" } } },
      ] },

    A5o_borne_gagne: { act: "V", title: "Un homme par terre", place: "plombs", ambiance: "nuit",
      text: [
        "Il est fort comme deux, et lent comme un seul. Chaque coup qu'il manque emporte quelque chose : une corde à linge, un coin de mur, le billot du guichetier, qui roule sans réveiller son maître. Tu tournes. Tu le fais tourner. Les draps le gênent ; il s'y prend, il les arrache, il en a un sur l'épaule comme un linceul.",
        "Il tombe enfin sur un genou, puis sur les deux mains, la tête basse, soufflant. Son marteau est à trois pas. Il ne va pas le chercher.",
        "« J'ai jamais été bon qu'à ça, dit-il au pavé. Taper. On me montre, je tape. »",
        "Tu le laisses là. Fifrelin sort de derrière un drap, sa fronde pendante, les yeux ronds. Il regarde le colosse à genoux, puis toi, et il ne trouve rien à dire, ce qui ne lui était pas arrivé depuis la Saint-Fer.",
      ],
      choices: [{ label: "Monter", to: "A5o_cellule", big: true }] },

    A5o_borne_perd: { act: "V", title: "La soixante-quatrième clef", place: "plombs", ambiance: "nuit",
      text: [
        "Il est fort comme deux. Le troisième coup te prend à l'épaule, et tu vas t'asseoir dans les draps, à quatre pas, avec le ciel qui tourne.",
        "Il vient sur toi. Il lève le marteau à deux mains.",
        "« Ugolin Tirel. »",
        "La voix tombe de l'escalier. Elle est grave, tranquille, sans appel ; elle n'a pas besoin de s'élever. Le colosse s'arrête, les bras en l'air, comme un écolier surpris.",
        "La Douairière est sur la dernière marche, en châle, son tricot sous le bras, une petite clef à la main. Elle s'est ouvert sa porte toute seule.",
        "« Pose cela. Tu vas te faire mal. » Elle descend. Elle marche droit sur lui, qui la dépasse de trois têtes. « J'ai connu ton père. Il me devait onze écus quand il est mort au fond, et je n'ai jamais rien réclamé à ta mère. Tu le lui demanderas. Maintenant tu vas t'asseoir sur cette borne, et tu vas réfléchir à ce que tu fais de tes mains depuis le 14 octobre. Je te donne jusqu'à minuit. »",
        "Il s'assied. Le marteau pend. Tu ne sauras jamais si c'est le nom de sa mère, le chiffre de onze écus, ou seulement ce ton, que l'on n'emploie plus avec lui depuis qu'il a passé six pieds.",
        "Elle te tend la main pour te relever. « J'avais dit de gratter à ma porte, mon enfant. Pas de te faire assommer dessous. »",
      ],
      choices: [{ label: "La suivre", to: "A5o_clefs", big: true }] },

    A5o_cellule: { act: "V", title: "La cellule de la Lanterne", place: "plombs", ambiance: "nuit",
      text: [
        "L'escalier du linge monte droit, entre deux murs qui suent. Au troisième, un corridor, des portes ferrées, des souffles. Tout au bout, sous la porte de la dernière, passe un trait de lumière jaune : le réverbère du chemin de ronde, qui éclaire cette cellule jour et nuit.",
        "Tu grattes.",
        "« Entre. C'est ouvert depuis dix heures moins le quart. »",
        "Elle est debout au milieu de la cellule, en châle et en bonnet, son cabas au bras, comme une femme qui attend le coche. Le lit est fait. Elle a plié la couverture au carré et balayé sous la table. Sur l'appui de la fenêtre, il y a une paire de bas gris, roulés l'un dans l'autre.",
        "« Je ne laisse jamais une chambre en désordre, dit-elle. On ne sait pas qui la prendra après. »",
        "Elle met les bas dans son cabas. Elle jette un dernier regard à la fenêtre, d'où l'on voit toute la cour, l'estrade, la chapelle, et le pied de la Tour.",
        "« Ils sont entrés à Sainte-Clavis il y a un instant, tous les trois, sans se regarder. Le gros soufflait. L'évêque avait l'air d'aller à un mariage. Le comte a levé les yeux vers la Tour avant de passer la porte, et il a fait quelque chose avec son ruban. » Elle hausse les épaules. « Je les aurai regardés vivre six semaines. Je n'en donnerais pas trois sous, d'aucun. Mais c'est le troisième que je rachèterais. »",
      ],
      choices: [{ label: "Sortir dans le corridor", to: "A5o_clefs", big: true }] },

    A5o_clefs: { act: "V", title: "Deux cents portes", place: "plombs", ambiance: "nuit",
      text: [
        "Dans le corridor, elle s'arrête. Elle tient sa petite clef entre le pouce et l'index : un passe plat, bleui, sans un ornement, que son second mari avait limé à la chandelle dans une de ces cellules.",
        "« Il ouvre tout, dit-elle. Je te l'ai dit. Les cellules, les paliers, la cour. »",
        "Derrière les portes, on ne dort pas. On a entendu la procession, les cloches ; on sait quelle nuit c'est. Deux cents personnes retiennent leur souffle sur leurs paillasses, pour des dettes de boulanger, de loyer, de médecin, grossies de leur pension. Une toux, au deuxième, traverse le plancher.",
        "« Je peux descendre seule, par l'escalier du linge, et personne n'en saura rien avant le matin. C'est propre. C'est ce que j'ai toujours fait : on prend ce qu'on est venu prendre, on ne casse rien. » Elle regarde le corridor. « Ou bien je fais le tour des trois étages. Deux cents débiteurs dans la cour de la citadelle, la nuit des Clefs, sous le nez de trois Clavaires. Cela ferait du monde sous la Tour. Cela ferait aussi du désordre, et le guet aime mal le désordre. »",
        "Elle te met le passe dans la main. Il est tiède.",
        "« J'ai présidé assez longtemps. C'est toi qui es là. Dis. »",
      ],
      choices: [
        { label: "« Toutes. »", fx: { flag: ["monde:a5:plombs_ouverts", "monde:a5:tousseur"], ep: ["perso", 1500] }, to: "A5o_clefs_toutes" },
        { label: "« Une seule : la sixième du deuxième rang. »", fx: { flag: "monde:a5:tousseur", ep: ["perso", 1000] }, to: "A5o_clefs_une" },
        { label: "« Aucune. On est venu vous prendre, et l'on ne casse rien. »", to: "A5o_clefs_aucune" },
      ] },

    A5o_clefs_toutes: { act: "V", title: "La levée d'écrou", place: "plombs", ambiance: "nuit",
      text: [
        "Tu commences par le bout du corridor. Le passe entre partout, de la même façon douce, comme une phrase que l'on répète. Une porte. Une autre. Tu ne dis rien ; tu ouvres, et tu passes à la suivante.",
        "Ils ne sortent pas tout de suite. Ils viennent au seuil, en chemise, et ils regardent le corridor, cette chose qu'ils n'ont vue depuis des mois que par un judas. Un vieux demande s'il y a le feu. Une femme serre contre elle un enfant né ici, qui n'a jamais passé une porte sans qu'on la referme derrière lui.",
        "« Il n'y a pas le feu, dit la Douairière, de sa voix de comptoir. Il y a la fête. Mettez vos souliers. On descend dans la cour, tous ensemble, sans courir, et l'on va voir parler le Bronze. Ceux qui ont une dette chez moi, je la déchire. Les autres, on verra demain qui ose vous remettre ici. »",
        "Au deuxième, la sixième porte. Ils sont quatre dedans.",
        { if: { is: { reve: "plombs" } }, text: "Tu ouvres. Quelqu'un est assis sur le bord d'une paillasse, courbé, un châle sur les épaules, et lève la tête à la lumière. Vous vous regardez. Deux hivers. Tu avais préparé des mots pendant six semaines de route : il n'en reste pas un. Tu tends le bras, et l'on s'y appuie, de ce poids que tu as porté toute ton enfance dans l'autre sens.", else: "Tu ouvres. Au fond, sur le bord d'une paillasse, quelqu'un tousse dans son poing, un châle sur les épaules. Tu dis un nom, celui de l'un de vous. La tête se lève, et la figure se défait, de bonheur, comme d'autres se défont de chagrin. Tu donnes ton bras jusqu'à l'escalier." },
        "Ils descendent. Deux cents personnes, en savates, en couvertures, par l'escalier du linge, avec ce bruit de troupeau que font les gens qui ne veulent pas faire de bruit. Maître Nicaise dort. On passe devant lui. Une vieille remonte sur son épaule le manteau qui avait glissé.",
      ],
      choices: [{ label: "Dans la cour", to: "A5o_lanterne", big: true }] },

    A5o_clefs_une: { act: "V", title: "La sixième porte", place: "plombs", ambiance: "nuit",
      text: [
        "Vous descendez au deuxième. Le corridor est le même, plus bas de plafond. Tu comptes six portes.",
        "Le passe entre, tourne. Ils sont quatre, dans une odeur de paille et de fièvre ; trois se dressent sur le coude. Dans le coin, au bord d'une paillasse, il y a quelqu'un sous un châle.",
        { if: { is: { reve: "plombs" } }, text: "Vous vous regardez. Deux hivers. Tu avais préparé des mots pendant six semaines de route : il n'en reste pas un. Tu tends le bras, et l'on s'y appuie, de ce poids que tu as porté toute ton enfance dans l'autre sens.", else: "Tu dis un nom, celui de l'un de vous. La tête se lève, et la figure se défait, de bonheur, comme d'autres se défont de chagrin. Tu donnes ton bras." },
        "Les trois autres n'ont rien dit. Ils regardent la porte ouverte. La Douairière les regarde.",
        "« Je note vos noms, dit-elle. Demain, quoi qu'il arrive cette nuit, il y a quelqu'un à mon comptoir qui paie vos trois dettes. J'ai dit. » Elle referme la porte, doucement, et l'on entend, derrière, quelqu'un qui pleure sans bruit, de ce qu'on l'ait refermée ou de ce qu'on ait promis.",
        "« Ne fais pas cette tête, mon enfant. On ne vide pas une prison avec une clef. On la vide avec une loi. Il y en a une qui s'écrit ce soir, à cent pas d'ici, si j'ai bien compris votre affaire. »",
      ],
      choices: [{ label: "Dans la cour", to: "A5o_lanterne", big: true }] },

    A5o_clefs_aucune: { act: "V", title: "Rien de cassé", place: "plombs", ambiance: "nuit",
      text: [
        "Elle reprend le passe, le regarde une seconde, et le remet dans son chignon.",
        "« C'est le métier, dit-elle. Je t'ai appris cela. Je n'ai pas à m'en plaindre. »",
        "Vous descendez par l'escalier du linge, sans un bruit. Derrière les portes, deux cents personnes écoutent passer deux paires de souliers, et se demandent qui a le droit de marcher là, à cette heure. Au deuxième, une toux vous suit jusqu'au palier.",
        "La Douairière ne se retourne pas. Mais dans la cour, sous la lanterne, elle s'arrête, et elle regarde longuement ces trois rangs de petites fenêtres.",
        "« On ne vide pas une prison avec une clef, dit-elle, comme pour elle-même. On la vide avec une loi. Tâchez, là-haut, qu'il s'en écrive une. »",
      ],
      choices: [{ label: "Dans la cour", to: "A5o_lanterne", big: true }] },

    A5o_lanterne: { act: "V", title: "La lanterne des Plombs", place: "plombs", ambiance: "nuit",
      fx: { flag: "monde:a5:douairiere", ep: ["histoire", 1500] },
      text: [
        "Au-dessus du guichet, la lanterne de la prison brûle, avec dedans la grosse clef noire à deux pannetons. La Douairière monte sur le billot de Maître Nicaise, qui dort, et la décroche.",
        "« Chaque maison porte sa clef, cette nuit, dit-elle. Celle-ci en est une. »",
        "Elle la lève au bout du bras. La clef des Plombs tourne dans la lumière, énorme, et son ombre passe sur les trois étages de fenêtres.",
        { if: { has: "monde:a5:plombs_ouverts" }, text: "Derrière elle, ils sont deux cents, en savates, serrés, muets. Elle ouvre la porte de la cour avec le petit passe. Elle sort la première." },
        "La cour de la citadelle est pleine de robes et de torches, tournées vers la chapelle, où trois hommes prient. Personne ne regarde du côté de la prison. Une vieille femme en châle, une lanterne à la main, longe le mur, passe derrière l'estrade, et marche vers la grande porte, où le guet a croisé ses hallebardes devant la rampe.",
        "Tu la suis des yeux. Elle s'arrête devant le lieutenant. Elle lui dit quelque chose. Tu n'entends pas ; tu vois seulement le jeune homme regarder la lanterne, la clef, les gens qui attendent sur la rampe, et cette figure qu'il a dû voir cent fois, enfant, derrière un comptoir des Bas-Fonds.",
        "Les hallebardes se décroisent. Elles se seraient décroisées devant bien moins.",
        "Fifrelin te tire par la manche. Il a les yeux brillants. « Je reste avec elle, dit-il. Faut quelqu'un qui lui tienne son cabas. » Il court déjà.",
        "Il est dix heures et demie. Tu as encore un toit à passer.",
      ],
      choices: [{ label: "Le toit de plomb du corps de garde", to: "A5o_toit", big: true }] },

    A5o_toit: { act: "V", title: "Le toit de plomb", place: "citadelle", ambiance: "nuit",
      fx: { leave: "fifrelin" },
      text: [
        "Du séchoir des Plombs, une lucarne donne sur le chemin de ronde. Du chemin de ronde, on enjambe un créneau, et l'on a sous les pieds le toit du corps de garde : une nappe de plomb en pente douce, givrée, qui va buter contre le pied de la Tour, du côté du nord.",
        "Il faut la traverser. Dessous, il y a une salle pleine de soldats qui jouent aux dés en attendant la relève ; chaque pas s'y entend comme sur un tambour.",
        { if: { has: "monde:douce:doyen" }, text: "Et quelque part sur ce toit, contre une cheminée, des gens à gants noirs regardent depuis midi de ce côté-là." },
      ],
      choices: [
        { label: "Ramper sur le givre, de soudure en soudure, là où le plomb porte sur les chevrons",
          test: { dom: "discretion", diff: 10, label: "Traverser un tambour", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { voie: "crocheteur" }, v: 10 }, { if: { has: "monde:douce:alliee" }, v: 15 }, { if: { has: "monde:douce:doyen" }, v: -10 }, { if: { has: "a5:o_vu" }, v: -5 }] },
          win: { fx: { ep: ["perso", 1500] }, to: "A5o_toit_ok" }, lose: { fx: { pv: -4 }, to: "A5o_toit_ko" } },
      ] },

    A5o_toit_ok: { act: "V", title: "Au pied du fût", place: "citadelle", ambiance: "nuit",
      text: [
        "Tu rampes. Le plomb te brûle les paumes, de froid. Sous ton ventre, on rit, on jure, un dé roule ; personne ne lève la tête. Tu vas de soudure en soudure, comme on passe un gué de pierre en pierre.",
        { if: { has: "monde:douce:alliee" }, text: "À mi-toit, une main gantée de noir sort de derrière une cheminée, te prend au poignet, et te montre où poser le genou. Elle ne te lâche que de l'autre côté. Tu n'as pas vu la figure." },
        "Tu touches la Tour. La pierre est lisse, glacée, sans un joint. Tu renverses la tête : cela monte, tout droit, dans le noir, jusqu'à une frange de bois où il te semble voir remuer quelque chose.",
      ],
      choices: [{ label: "Lever les bras", to: "A5o_fin_b", big: true }] },

    A5o_toit_ko: { act: "V", title: "Un pas de trop", place: "citadelle", ambiance: "nuit",
      text: [
        "Le givre te trahit au milieu. Ton genou part, tu glisses de deux brasses sur le plomb, et ton talon sonne sur une lucarne comme un coup de maillet.",
        "Dessous, les rires s'arrêtent. « C'est quoi ? » « Les pigeons. » « Ça pèse lourd, pour un pigeon. » Une chaise recule. La lucarne s'ouvre, à trois pieds de ta figure, et une tête en sort, coiffée d'un bonnet de police, qui regarde du mauvais côté.",
        "Tu ne respires plus. Tu es à plat sur le givre, les ongles dans une soudure, avec la ville sous toi.",
        "La tête rentre. « Les pigeons. » La lucarne se referme. Tu repars, sur les coudes, avec le genou ouvert et la certitude d'avoir vieilli.",
        "Tu touches la Tour. La pierre est lisse, glacée, sans un joint. Tu renverses la tête : cela monte, tout droit, dans le noir, jusqu'à une frange de bois où il te semble voir remuer quelque chose.",
      ],
      choices: [{ label: "Lever les bras", to: "A5o_fin_b", big: true }] },

    A5o_fin_b: { act: "V", title: "Quarante toises", place: "horloge_close",
      branch: [
        { if: { count: GROUPES, min: 2 }, fx: { flag: "monde:a5:foule" }, to: "A5o_fin" },
        { to: "A5o_fin" },
      ] },

    A5o_fin: { act: "V", title: "Quarante toises", place: "horloge_close", ambiance: "nuit",
      fx: { until: 23, ep: ["histoire", 2000] },
      text: [
        "Derrière toi, la demie a sonné. Dans la cour, trente mille bruits viennent de se taire à la fois.",
        "Tu te retournes une seconde, le dos à la pierre. D'ici, on voit par-dessus le rempart toute la rampe des Clavaires, jusqu'à la ville.",
        { if: { has: "monde:a5:foule" }, text: "Elle est pleine. Elle est pleine de lanternes, de bas en haut, serrées, immobiles, comme si le quai tout entier avait monté ses portes sur son dos. Il y a là des bonnets, des sarraus, des cannes à rubans, des voiles noirs. Et devant, à la grande porte, une lanterne plus grosse que les autres, tenue haut, où tourne une clef noire.", else: "Il y a du monde à la grande porte : une lanterne plus grosse que les autres, tenue haut, où tourne une clef noire, et derrière elle ce que la ville basse a bien voulu envoyer. Ce n'est pas une foule. C'est une poignée de gens debout, qui ont l'air d'attendre quelqu'un à la sortie d'un tribunal." },
        "Tu as fait ce qu'un œil peut faire. Il y aura quelqu'un pour voir.",
        "Tu fais face au mur. Quarante toises, et là-haut une porte, deux camarades, un horloger, et une femme qui a peut-être levé la tête.",
      ],
      choices: [{ label: "Monter", to: "A5c_rdv", big: true }] },
  },
  extras: {
    enemies: {
      tete_enclume: { name: "Ugolin Tête-d'Enclume", look: "humain", pv: 26, att: 42, def: 16, dmg: 7, desc: "Un marteau de frappeur, tenu d'une seule main, par un homme qui n'a jamais appris qu'à obéir." },
    },
  },
};
