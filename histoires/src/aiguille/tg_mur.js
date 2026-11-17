// L'Île Folle-Aiguille · side story « Le mur de la rue Basse » (owes its question to Balzac's La Grande Bretèche: when a
// woman swears on the cross that no one is behind a door, and her husband takes her at her word by walling it up, who
// breaks the wall?). Act III, Victorine at Brisegrève: Jory Le Moan, the soldiers' village mason, comes to her at night.
// The chief gaoler Kerlévéo, suspecting a lover, found his wife's cellar door locked; she swore on her cross that no one
// was there, and he had the mason brick it up before him, at once. The mason heard, through the last bricks, someone
// cough. Victorine goes with him to break the wall (tg:casse), goes to the husband (tg:mari), or goes to the wife to make
// her speak (tg:femme). Behind the wall is Typhaine Kerlévéo's brother, a deserter. Wired in A3v_brisegreve.
module.exports = {
  passages: {
    TG_macon: { act: "III", title: "Le mur de la rue Basse", place: "brisegreve", ambiance: "nuit",
      fx: { meet: "lemoan" },
      text: [
        "Il accoste la Cormorane vers minuit, dans une barque de pêcheur qu'il manœuvre mal, et demande la médecin au matelot de garde. Un homme trapu, en tablier de cuir, les mains blanches de chaux jusqu'aux coudes, le visage gris. Il dit qu'il s'appelle Jory Le Moan, maçon du bourg. Il dit qu'il a besoin d'un conseil, et qu'il n'ose le demander ni au curé, ni au gouverneur, ni à sa femme. Il dit qu'on lui a dit que la médecin du navire était une personne qui ne répétait rien.",
        "Victorine le fait monter, et asseoir dans l'infirmerie. Il tremble. Il raconte. Ce soir, vers neuf heures, le gardien-chef de la prison du fort, Kerlévéo, est venu le chercher chez lui, avec un falot, et l'a emmené rue Basse, à sa maison, avec sa truelle, son mortier et une brouette de briques. Dans la cuisine, il y avait la femme de Kerlévéo, Typhaine, debout devant la porte de la cave, toute blanche, une croix d'argent serrée dans la main. Et Kerlévéo, très calme, trop calme.",
        "Kerlévéo a demandé à sa femme d'ouvrir la cave. Elle a dit qu'elle avait perdu la clef. Il lui a demandé s'il y avait quelqu'un dans la cave. Elle a juré sur sa croix que non. Il a dit : « Très bien. Puisqu'il n'y a personne, maçon, murez-moi cette porte. » Et il s'est assis sur une chaise, devant, avec sa femme debout à côté de lui, et il a regardé le maçon travailler, brique par brique, pendant deux heures, sans dire un mot. Elle non plus.",
        "Jory dit qu'à la dernière rangée, en posant la dernière brique, il a entendu, derrière la porte, quelqu'un tousser. Une toux étouffée, dans un tissu. Il a regardé Kerlévéo. Kerlévéo l'a regardé aussi, et lui a mis dans la main un écu d'argent, et lui a dit qu'il ne fallait jamais réveiller les morts. Puis il l'a renvoyé chez lui. Jory dit qu'il a l'écu dans sa poche. Il dit qu'il ne peut pas le toucher. Il demande à la médecin ce qu'il doit faire.",
      ],
      choices: [{ label: "Lui demander combien d'air il reste, derrière une cave murée", to: "TG_air" }] },
    TG_air: { act: "III", title: "Le mur de la rue Basse", place: "brisegreve", ambiance: "nuit",
      text: [
        "Le maçon dit que la cave est petite, voûtée, creusée dans le roc, sans soupirail. Huit pieds sur dix. Il l'a vue une fois, quand il a refait la voûte, il y a trois ans. Victorine fait le compte, de tête, comme on lui a appris à la Faculté à compter l'air d'une salle d'hôpital. Un homme qui respire, dans huit pieds sur dix, avec une porte murée au mortier frais. Deux jours. Trois, s'il reste couché et qu'il ne parle pas. Moins, s'il a peur.",
        "Jory dit aussi ce que tout le bourg sait, à mi-voix. Typhaine Kerlévéo a un frère cadet, Brendan, qui était soldat au fort, et qui a déserté il y a trois semaines, après avoir frappé un sergent. On le cherche partout. On ne l'a pas trouvé. Le conseil de guerre l'attend. Pour un soldat qui frappe un sergent et qui déserte, c'est le peloton. Kerlévéo, en tant que gardien-chef, aurait dû le livrer lui-même, s'il l'avait trouvé.",
        "Victorine comprend. La femme a caché son frère dans la cave. Le mari a cru à un amant. Ou bien il a su que c'était le frère, et il a choisi de ne pas savoir, en murant la porte, pour n'avoir ni à le livrer ni à le cacher. Elle ne sait pas laquelle des deux hypothèses est la pire. Elle sait que derrière la porte, quelqu'un respire un air qui s'épuise, pendant que deux personnes, dans la cuisine, gardent un silence qu'elles ont juré.",
        "Le maçon la regarde. Il attend. Il dit que sa truelle est dans la brouette, à la porte, et qu'il a encore son marteau.",
      ],
      choices: [
        { label: "Aller avec lui, tout de suite, casser le mur", fx: { flag: "tg:casse" }, to: "TG_casse" },
        { label: "Aller trouver Kerlévéo, et lui parler en médecin", fx: { flag: "tg:mari" }, to: "TG_mari" },
        { label: "Aller trouver Typhaine, au lavoir, à l'aube, et la faire parler", fx: { flag: "tg:femme" }, to: "TG_femme" },
      ] },
    TG_casse: { act: "III", title: "Le mur de la rue Basse", place: "brisegreve", ambiance: "nuit",
      text: [
        "Elle prend sa trousse. Le maçon prend son marteau. Vous traversez le bourg endormi, rue Basse, jusqu'à la maison du gardien-chef. La porte n'est pas fermée à clef. Dans la cuisine, à la lueur d'une chandelle presque morte, Kerlévéo est toujours assis sur sa chaise, devant le mur neuf. Sa femme est toujours debout à côté de lui. Ils n'ont pas bougé depuis trois heures. Ils lèvent les yeux, ensemble, vers la médecin et le maçon.",
        "Victorine dit, d'une voix nette : « Il y a quelqu'un derrière ce mur, et il va mourir. Je suis médecin. Je vais l'ouvrir. » Kerlévéo ne bouge pas. Typhaine ferme les yeux. Le maçon lève son marteau, regarde le gardien-chef, attend. Kerlévéo ne dit rien. Alors Jory frappe. Le mortier frais cède au troisième coup. Les briques tombent. Un souffle d'air froid, rance, sort du trou.",
        "Le garçon est couché sur le sol de la cave, recroquevillé, un mouchoir sur la bouche, les yeux immenses. Dix-neuf ans. Il se met à genoux. Il dit : « Je n'ai pas toussé. Je vous jure que je n'ai pas toussé exprès. » Typhaine se jette sur lui, en sanglots. Kerlévéo se lève, enfin. Il regarde le garçon. Il dit, d'une voix sans timbre : « Brendan. » Il savait. Victorine le voit dans ses yeux : il a toujours su.",
        "Ce qui se passe ensuite ne la regarde pas, et elle le sait. Kerlévéo dit au maçon de rentrer chez lui et de garder son écu. Il dit à Victorine qu'elle n'a rien vu. Il dit à sa femme de faire du café. Il dit au garçon de s'asseoir. Le lendemain, à l'aube, la Cormorane voit passer, à une encablure, une barque de pêche qui file vers le large, avec deux hommes à bord, dont l'un est le gardien-chef de Brisegrève. La barque revient le soir, avec un seul homme. Personne, au bourg, ne pose de question. Victorine se dit qu'elle a cassé un mur, et que derrière il y avait un homme qui avait choisi de ne pas savoir, et qui attendait qu'on l'en délivre.",
      ],
      choices: [{ label: "Redescendre au mouillage", fx: { quest: "TG" }, back: "A3v_brisegreve" }] },
    TG_mari: { act: "III", title: "Le mur de la rue Basse", place: "brisegreve", ambiance: "nuit",
      text: [
        "Elle va seule, sans le maçon, rue Basse. Elle frappe. Kerlévéo ouvre lui-même. Derrière lui, la cuisine, la chandelle, le mur neuf, et sa femme, debout. Victorine ne regarde pas le mur. Elle regarde le gardien-chef, un homme de cinquante ans, massif, rasé, aux yeux pâles, avec les clefs du fort à la ceinture. Elle lui dit qu'elle est médecin, et qu'elle voudrait lui parler, dehors, cinq minutes.",
        "Dehors, sous le réverbère unique de la rue Basse, elle lui dit qu'une cave de huit pieds sur dix, sans soupirail, contient de l'air pour deux jours, à peine. Elle ne dit pas qui est dedans. Elle ne dit pas qu'elle sait. Elle dit seulement, en médecin, combien de temps il faut à un homme pour mourir d'étouffement, et comment, et dans quel ordre on perd les choses : d'abord le calme, puis la raison, puis les ongles, contre la porte. Elle le dit d'une voix égale, en le regardant dans les yeux. Elle voit les mains de Kerlévéo se fermer.",
        "Il dit : « Vous savez qui c'est. » Elle dit oui. Il dit qu'il est gardien-chef. Il dit que, s'il ouvre, il doit le livrer, et que, s'il le livre, on le fusille, et que sa femme ne le lui pardonnera jamais. Il dit que, s'il n'ouvre pas, personne ne saura jamais rien, et qu'il a cru, pendant deux heures, devant ce mur, qu'il pourrait vivre avec. Il dit qu'il s'est trompé. Il dit qu'il entend tousser depuis la dernière brique, et qu'il entendra tousser jusqu'à sa mort.",
        "Il rentre. Victorine reste dans la rue. Elle entend, à travers la porte, un coup de masse, puis un autre, puis des briques qui tombent, puis la voix de la femme. Le lendemain, Kerlévéo fait porter à la médecin un billet sans signature : « Il est parti par la mer. Je n'ai rien vu. Vous non plus. » Victorine brûle le billet. Elle pense qu'elle a forcé un homme à choisir entre sa loi et son beau-frère, en lui décrivant les ongles contre la porte. Elle pense que c'était la seule langue qu'il pouvait entendre. Elle pense aussi que c'était une cruauté, et qu'elle en a l'habitude, de ces cruautés-là, qui sauvent.",
      ],
      choices: [{ label: "Redescendre au mouillage", fx: { quest: "TG" }, back: "A3v_brisegreve" }] },
    TG_femme: { act: "III", title: "Le mur de la rue Basse", place: "brisegreve", ambiance: "village",
      text: [
        "Elle attend l'aube, au lavoir du bourg, sous la pluie fine. Typhaine Kerlévéo arrive la première, avec un panier de linge, comme chaque matin, parce qu'on la regarderait si elle ne venait pas. Elle a trente ans, un visage maigre, des yeux rouges de n'avoir pas dormi. Victorine s'agenouille à côté d'elle, prend un drap dans le panier, et le trempe dans l'eau froide. Elle dit, sans la regarder, qu'il reste à son frère deux jours d'air, peut-être moins.",
        "Typhaine lâche son battoir. Elle dit qu'elle a juré. Elle dit qu'elle a juré sur la croix de sa mère qu'il n'y avait personne, et que si elle se parjure, elle sera damnée. Elle dit qu'elle a juré pour le sauver, et que maintenant le serment le tue. Elle dit qu'elle ne sait plus ce que Dieu veut. Victorine lui dit que Dieu, elle n'en sait rien, mais qu'un serment fait pour sauver un homme ne peut pas l'obliger à le laisser mourir, ou alors ce serment est devenu une corde.",
        "Typhaine la regarde longtemps, avec une sorte de haine, la haine qu'on a pour ceux qui disent ce qu'on n'ose pas penser. Puis elle se lève. Elle laisse le linge dans l'eau. Elle remonte la rue Basse en courant, sous la pluie. Victorine la suit, de loin. Elle entre chez elle. Victorine entend, à travers la porte, la voix de la femme, très haute, qui dit : « J'ai menti. Il y a mon frère. J'ai menti sur la croix. Ouvre, ou je casse le mur avec mes mains. »",
        "Il y a un silence. Puis un coup de masse. Puis un autre. Victorine s'en va. Elle apprend le soir, par la cantinière, que le frère de Typhaine a été retrouvé dans la cave, vivant, et que le gardien-chef l'a lui-même conduit au fort, et remis au conseil de guerre, parce que c'était son devoir, et que sa femme avait parlé devant témoins. Elle apprend aussi que Kerlévéo a écrit, la même nuit, au gouverneur Lebihan, pour demander la grâce du garçon, en se portant garant de lui sur son grade et sa pension. Elle ne saura pas la réponse : la Cormorane appareille. Elle se dit qu'elle a sauvé un homme de l'étouffement pour le remettre au peloton, ou à la grâce d'un collectionneur de tabatières. Elle se dit que c'est souvent ça, la médecine : déplacer la mort de quelques pas, et laisser les autres décider du reste.",
      ],
      choices: [{ label: "Redescendre au mouillage", fx: { quest: "TG" }, back: "A3v_brisegreve" }] },
  },
  extras: {
    people: {
      lemoan: { name: "Jory Le Moan", aka: ["le maçon du bourg"], qui: "Maçon du bourg des soldats de Brisegrève, à qui l'on a fait murer une cave." },
    },
    quests: [
      { id: "TG", act: "III", kind: "annexe", title: "Le mur de la rue Basse", start: "TG_macon", doit: "grandebreteche", echo: ["tg:casse", "tg:mari", "tg:femme"] },
    ],
  },
};
