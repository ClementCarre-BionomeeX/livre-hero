// L'Île Folle-Aiguille · side story « Le sang du vieux Le Rest » (owes its question to Corneille's Le Cid: can love
// outlive a debt of blood, and who may forgive in a dead man's name?). Act IV, Victorine in the outlaws' cave: three
// months ago, young Judicaël Madec killed old Le Rest, who had struck his father, too old to answer. The camp's law
// leaves Judicaël's fate to the dead man's daughter, Morgane, who loved him and loves him still. Today Judicaël lies
// gored by a boar, under Victorine's care, and Morgane comes to the sickbed with her father's knife. Victorine steps
// aside and lets her choose (ub:laisse), stands between her and her patient (ub:defend), or asks Jeanne Brasdefer to
// call the whole camp to judge (ub:conseil). Wired in XS_camp.
module.exports = {
  passages: {
    UB_pere: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "nature",
      text: [
        "Le père de Judicaël vit au fond de la grotte, dans une niche de rocher que l'eau de la cascade éclabousse quand le vent tourne. Un vieillard de soixante-dix ans, très droit, avec une barbe blanche et un bras droit qui pend, inerte, maigre, enveloppé dans une écharpe de laine. Il taille des pointes de flèches avec la main gauche, sur une pierre plate, lentement, à petits coups secs.",
        "Il sait pourquoi Victorine est venue. Il demande, sans lever les yeux, si son fils vivra. Elle dit qu'elle le croit, si la fièvre ne tourne pas. Il hoche la tête. Il dit merci. Il continue de tailler.",
        "Puis il dit qu'il n'a jamais demandé à son fils de le venger. Qu'il aurait préféré prendre la gifle et la garder, comme on garde une pierre dans sa poche, et l'oublier avec le temps. Il dit qu'à son âge, une gifle ne fait plus mal à la figure, seulement au fils qui la voit. Il dit que c'est pour ça qu'on ne devrait jamais frapper un vieux devant son fils. Le vieux Le Rest le savait. Il l'a fait quand même.",
        "Il pose la pointe de flèche, finie, sur la pierre, à côté des autres. Il dit que si Morgane choisit la mort, il ne dira rien, parce que c'est la loi, et qu'il l'a votée, autrefois, à main levée, avec son bras droit. Il regarde son bras mort. Il dit que c'est drôle, ce qu'on vote avec un bras qui ne sert plus."
      ],
      choices: [
        { back: "UB_sanglier", label: "Retourner au chevet du blessé" }
      ] },
    UB_lerest: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "nature",
      text: [
        "Le vieux Kerjean allume sa pipe à un tison, tire trois bouffées, et parle du mort avec l'équité scrupuleuse qu'on doit aux morts qu'on n'aimait pas.",
        "Le vieux Le Rest était le plus dur des proscrits. Le plus avare de ses mots, de son gibier, de son tabac. Il avait la main lourde avec les chiens, avec les enfants, avec sa fille. Personne ne l'aimait. Mais, le premier hiver, quand le camp a manqué de tout, c'est lui qui est parti seul, à travers la Sylve, pendant neuf jours, et qui est revenu avec un cerf sur le dos, à moitié mort de froid. Il n'a jamais rappelé ce cerf à personne. Tout le monde s'en souvient.",
        "Kerjean dit que le vieux avait une raison pour la gifle. Une mauvaise raison, mais une raison : le père de Judicaël, vingt ans plus tôt, dans un autre pays, avant la Sylve, avait témoigné contre lui devant un juge, dans une affaire de bornage, et Le Rest avait perdu sa terre. C'est pour ça qu'il était venu ici. Il avait attendu vingt ans pour rendre la gifle. Une part de gibier avait suffi.",
        "Kerjean tire sur sa pipe. Il dit qu'il n'y a pas d'innocents dans cette histoire, seulement des gens qui ont attendu trop longtemps pour régler leurs comptes. Il dit que Morgane, elle, attend depuis trois mois. Il dit qu'il espère qu'elle n'attendra pas vingt ans."
      ],
      choices: [
        { back: "UB_sanglier", label: "Retourner au chevet du blessé" }
      ] },
    UB_sanglier: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "nature",
      fx: { meet: "morgane" },
      text: [
        { first: true, text: "Les chasseurs le rapportent à l'aube, sur une civière de branches, la cuisse ouverte du genou à l'aine par la défense d'un sanglier. Un garçon de vingt ans, Judicaël Madec, brun, maigre, avec une figure d'enfant de chœur et des mains d'archer. Victorine nettoie, ligature, recoud. Il serre les dents sur un bâton et ne crie pas. Quand elle a fini, il ouvre les yeux et lui demande, avant toute chose, si Morgane sait qu'il est blessé." },
        { first: true, text: "Personne ne répond. Les chasseurs s'en vont. Le vieux Kerjean, qui est resté, explique à Victorine, à voix basse, en bourrant sa pipe, ce que tout le camp sait. Il y a trois mois, le vieux Le Rest, un homme dur, a frappé le père de Judicaël au visage, à propos d'une part de gibier, devant tout le monde. Le père de Judicaël a soixante-dix ans et un bras mort. Il n'a pas pu répondre. Judicaël a répondu pour lui. Au couteau. Le vieux Le Rest est mort la nuit même." },
        { first: true, text: "La loi du camp est simple, parce qu'il faut qu'elle le soit : quand on tue un des leurs, c'est le plus proche parent du mort qui décide du sort du meurtrier. La mort, l'exil, ou le pardon. Le plus proche parent du vieux Le Rest, c'est sa fille, Morgane. Elle n'a rien décidé. Depuis trois mois, elle ne décide rien. Et tout le camp sait aussi que Morgane et Judicaël devaient se marier à la fin de l'hiver." },
        { again: true, text: "Judicaël Madec, la cuisse recousue, dort d'un sommeil agité, et personne au camp ne prononce le nom de Morgane." }
      ],
      choices: [
        { label: "Aller voir le père de Judicaël, le vieil homme au bras mort", to: "UB_pere", hide: { seen: "UB_pere" } },
        { label: "Demander au vieux Kerjean qui était le vieux Le Rest", to: "UB_lerest", hide: { seen: "UB_lerest" } },
        { label: "Veiller le blessé, la nuit, près du rideau d'eau", to: "UB_veille" }
      ] },
    UB_veille: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "nuit",
      text: [
        "La fièvre monte au milieu de la nuit. Judicaël parle. Il ne demande pas pardon pour le vieux. Il dit qu'il le referait. Il dit qu'un fils qui laisse frapper son père n'est plus un fils, et qu'un homme qui n'est plus un fils ne vaut rien pour une femme, pas même pour celle-là. Il dit qu'il a choisi entre Morgane et son père, et que c'était la seule façon de rester digne d'elle, et que c'est cela qui l'a perdue. Il rit dans sa fièvre. Il trouve ça drôle. Victorine ne le trouve pas drôle du tout.",
        "Vers trois heures, le rideau d'eau s'écarte. Une jeune femme entre, grande, pâle, les cheveux noués serré, un couteau de chasse à la main, à la lame large, au manche de corne. Le couteau de son père. Elle s'arrête au pied de la paillasse. Elle regarde Judicaël, qui dort enfin. Elle regarde Victorine. Elle dit, très calme : « On m'a dit qu'il allait guérir. »",
        "Victorine dit que oui, s'il ne fait pas de fièvre de plaie. Morgane hoche la tête. Elle dit que, s'il guérit, elle devra décider, puisqu'il ne sera plus un blessé, mais de nouveau un homme qui a tué son père. Elle dit qu'elle ne peut pas décider. Elle dit qu'elle l'aime, et que son père est mort, et que les deux choses sont vraies en même temps, et qu'elle ne peut en tuer aucune. Elle dit que, cette nuit, il dort, il est faible, il ne saura rien. Elle dit que ce serait plus simple. Elle a les mains qui tremblent autour du manche.",
      ],
      choices: [
        { label: "Se lever, et lui laisser la place près du lit", fx: { flag: "ub:laisse" }, to: "UB_laisse" },
        { label: "Se mettre entre elle et son malade", fx: { flag: "ub:defend" }, to: "UB_defend" },
        { label: "Lui demander d'attendre l'aube, et aller réveiller Jeanne Brasdefer", fx: { flag: "ub:conseil" }, to: "UB_conseil" },
      ] },
    UB_laisse: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "nuit",
      text: [
        "Victorine se lève. Elle dit qu'elle est médecin, et que la loi de ce camp n'est pas la sienne, et que ce choix appartient à une seule personne au monde. Elle va s'asseoir plus loin, près du feu, le dos tourné. C'est la chose la plus difficile qu'elle ait faite depuis son arrivée sur l'île. Elle entend l'eau tomber. Elle entend sa propre respiration. Elle n'entend rien d'autre pendant un temps qui lui paraît une nuit entière.",
        "Puis elle entend un bruit qu'elle ne comprend pas d'abord : un frottement régulier, doux, obstiné. Elle se retourne. Morgane est assise au bord de la paillasse. Elle a pris la main de Judicaël, et, avec le couteau de son père, elle lui coupe les ongles, un par un, avec soin, comme on fait aux blessés qui ne peuvent pas le faire eux-mêmes. Elle pleure en le faisant. Elle ne s'arrête pas.",
        "À l'aube, Judicaël se réveille avec les ongles propres et Morgane endormie contre son épaule, le couteau posé par terre. Elle ne dit pas qu'elle pardonne. Elle ne dira jamais ce mot, l'apprend-on plus tard. Elle dit seulement qu'elle reste. Le vieux Kerjean, en les voyant, dit que la loi du camp ne prévoit pas ce cas-là. Jeanne Brasdefer répond qu'elle l'ajoutera.",
        "Victorine pense qu'elle a laissé un couteau près de la gorge d'un homme qu'elle venait de recoudre. Elle pense qu'elle recommencerait. Elle ne sait pas si c'est du courage ou de la paresse, ce qu'on appelle respecter le choix des autres.",
      ],
      choices: [{ label: "Retourner à la grotte, au jour", fx: { quest: "UB" }, back: "XS_camp" }] },
    UB_defend: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "nuit",
      text: [
        "Victorine se lève et se met entre la paillasse et le couteau. Elle ne dit rien d'abord. Puis elle dit que cet homme est son malade, et qu'aucun malade n'a jamais été tué dans un lit où elle l'avait couché. Elle dit que Morgane peut faire ce qu'elle veut quand il marchera, à la lumière du jour, devant tout le monde, mais pas ici, pas cette nuit, pas pendant qu'il dort.",
        "Morgane la regarde longtemps. Puis elle baisse le couteau. Elle dit, d'une voix sans colère, que Victorine vient de lui ôter la seule nuit où elle aurait pu le faire, et qu'elle le savait. Elle dit qu'à la lumière du jour, devant tout le monde, elle ne pourra pas, parce qu'elle verra son visage, et que tout le monde verra le sien. Elle dit que c'est peut-être un service. Elle dit qu'elle ne sait pas encore si elle en remerciera Victorine ou si elle la haïra. Elle sort.",
        "Judicaël guérit. Il se lève au bout de quatre jours, avec une canne. Morgane ne décide toujours rien. Le camp vit avec cette chose en suspens au milieu de lui, comme une hache plantée dans une table. On les voit se croiser à la source, chaque matin, en silence. Une fois, Victorine les surprend, de loin, assis côte à côte au bord de l'eau, sans se parler, chacun regardant devant soi, à une coudée de distance. Ils restent là une heure.",
        "Victorine se dit qu'elle a sauvé son malade et qu'elle a figé deux vies. Elle se dit qu'un médecin protège le corps qu'on lui confie, et que le reste ne la regarde pas. Elle se le dit plusieurs fois. Ça ne suffit pas tout à fait.",
      ],
      choices: [{ label: "Retourner à la grotte, au jour", fx: { quest: "UB" }, back: "XS_camp" }] },
    UB_conseil: { act: "IV", title: "Le sang du vieux Le Rest", place: "sylve", ambiance: "village",
      text: [
        "Victorine demande à Morgane d'attendre l'aube, une heure, pas plus, et elle va réveiller Jeanne Brasdefer. Jeanne écoute, en se frottant les yeux. Puis elle dit que la loi est la loi, et que c'est Morgane qui décide. Victorine dit que la loi met sur une seule paire d'épaules un poids que personne ne peut porter seul, et qu'une loi qui écrase celle qu'elle doit servir est une mauvaise loi. Jeanne la regarde. Elle dit : « Et c'est une étrangère qui me le dit. » Puis elle se lève, et fait battre le tambour.",
        "Le camp se réunit devant la cascade, au petit jour, quarante personnes en cercle, encore pleines de sommeil. On porte Judicaël sur sa civière. Morgane est debout, le couteau à la main. Jeanne expose le cas, d'une voix de forge. Puis elle demande au camp si la loi doit changer. On discute. On crie. Le père de Judicaël, avec son bras mort, se lève et dit que c'est lui qui aurait dû mourir, et qu'on le prenne à la place de son fils. Personne ne le prend au mot.",
        "Le camp décide, à main levée, que la fille du mort ne portera pas seule la décision : elle la portera avec sept autres, tirés au sort. Les sept et Morgane se retirent derrière le rideau d'eau. Ils en ressortent au bout d'une heure. Exil. Un an, dans la cabane de la crête, seul, à chasser pour le camp sans y descendre. Après un an, il reviendra, et l'on verra. Morgane rend le couteau de son père à Jeanne, pour qu'elle le garde jusque-là.",
        "Ce soir-là, près du feu, Victorine fait le compte. Elle a donné au camp une loi nouvelle, et une jeune femme soulagée d'un poids qu'elle portait seule depuis trois mois. Elle lui a ôté aussi, peut-être, la seule chance qu'elle avait de pardonner elle-même, en son nom, sans sept témoins tirés au sort. Elle y pense longtemps. Elle se dit qu'il y a des choses qu'on ne partage pas sans les changer, et que le pardon en est une, et la vengeance aussi.",
      ],
      choices: [{ label: "Retourner à la grotte", fx: { quest: "UB" }, back: "XS_camp" }] },
  },
  extras: {
    people: {
      morgane: { name: "Morgane Le Rest", aka: ["la fille du vieux Le Rest"], f: true, qui: "Proscrite de la grotte de la cascade, fille du vieux Le Rest, fiancée de celui qui l'a tué." },
    },
    quests: [
      { id: "UB", act: "IV", kind: "annexe", title: "Le sang du vieux Le Rest", start: "UB_sanglier", doit: "cid", echo: ["ub:laisse", "ub:defend", "ub:conseil"] },
    ],
  },
};
