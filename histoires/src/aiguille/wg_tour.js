// L'Île Folle-Aiguille · side story « Le pain coupé en deux » (owes its question to Claude Gueux: who is guilty when a
// hungry man kills the one who took away the hand that fed him?). Act II, Fargue: the biscuit for the voyage is baked
// in the ovens of the Tour-aux-Rats, Morlenc's prison, cheaper than anywhere. In the bakehouse, a giant convict, Hervé
// Corbic, always hungry, shared for two years the bread of a thin boy, Yves Lostanlen, who gave him half of his. The
// head warden Mauduit has moved the boy to the other wing, for nothing, for the pleasure. Corbic tells Fargue, calmly,
// that he will kill Mauduit on Sunday. Fargue warns the warden (wg:avertit), pays Mauduit to put the boy back
// (wg:soudoie), or keeps silent (wg:tait). Wired in XR_jours.
module.exports = {
  passages: {
    WG_four: { act: "II", title: "Le pain coupé en deux", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "corbic" },
      text: [
        "La Tour-aux-Rats est la prison de Morlenc, et elle fait le meilleur biscuit de mer de toute la côte. Les deux choses vont ensemble : un forçat coûte moins qu'un mitron, et un homme qui a faim pétrit avec une ferveur qu'aucun salaire n'achète. Les maîtres-coqs le savent. Ils y viennent tous, avant les longs voyages, par la petite porte du quai, avec une lettre du commissaire et une bourse, et ils repartent avec des sacs de galettes dures comme des ardoises, qui tiennent deux ans en cale et qui ont le goût de la pierre.",
        "Le fournil est une salle basse, voûtée, sous la tour, où il fait la chaleur de l'enfer et où l'on voit à peine, tant la farine flotte dans l'air. Des hommes nus jusqu'à la ceinture, enchaînés deux par deux à la cheville, enfournent et défournent sous l'œil d'un gardien qui somnole sur une chaise. Au milieu d'eux, il y en a un qui dépasse les autres d'une tête et demie. Un géant, roux, à la barbe pleine de farine, avec des épaules de bœuf de labour et un visage d'une douceur étrange, presque enfantine, celui d'un homme qui n'a jamais compris pourquoi il était si grand.",
        "Fargue compte ses sacs. Le géant les charge. À chaque sac, il regarde le pain. Il le regarde comme un chien regarde une main. Fargue connaît ce regard. Il l'a vu sur des bordées entières, au quatrième mois d'une campagne, quand le biscuit a des vers et qu'on les mange aussi.",
      ],
      choices: [{ label: "Lui tendre la moitié d'une galette, quand le gardien regarde ailleurs", to: "WG_corbic" }] },
    WG_corbic: { act: "II", title: "Le pain coupé en deux", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Le géant prend la galette, la casse sur son genou d'un coup sec, et en mange la moitié en deux bouchées. L'autre moitié, il la glisse sous sa chemise, contre sa peau, avec un soin de mère. Fargue lui demande pour qui. Le géant le regarde un moment, avec ses yeux doux, et il le lui dit, à voix basse, sans se presser, comme on raconte une histoire déjà racontée cent fois à soi-même.",
        "Il s'appelle Hervé Corbic. Douze ans pour un vol de farine, avec effraction, à vingt ans, l'hiver où sa mère mourait de faim. Il a faim depuis douze ans. Le règlement donne à chaque homme une livre et demie de pain par jour, et une livre et demie de pain, pour un homme de sa taille, c'est ce qu'il faut pour mourir lentement. Il y a deux ans, on l'a enchaîné à un petit, Yves Lostanlen, dix-huit ans, maigre comme un clou, qui mange comme un oiseau. Le premier soir, le petit lui a donné la moitié de sa ration. Il la lui a donnée tous les soirs, pendant deux ans. Corbic, en échange, a appris au petit à lire, sur les sacs de farine, avec une écharde, et l'a protégé des autres, ce qui, à la Tour-aux-Rats, n'est pas une petite affaire.",
        "« Il y a trois semaines, dit-il, le gardien-chef Mauduit a changé le petit d'aile. Pour rien. Il n'a rien fait. J'ai demandé pourquoi. Mauduit m'a dit : *Parce que.* » Il a un sourire très doux. « Depuis trois semaines, le petit est enchaîné à un homme qui lui prend sa ration. Je le vois maigrir, de l'autre côté de la cour, à la promenade. Et moi, j'ai faim. »",
      ],
      choices: [{ label: "Attendre la suite", to: "WG_dimanche" }] },
    WG_dimanche: { act: "II", title: "Le pain coupé en deux", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "« Je l'ai demandé trois fois, poliment, dit Corbic. Mauduit a ri trois fois. Dimanche, à la messe, il passe dans l'allée, entre les bancs, pour compter les têtes. Je serai au bout du banc. J'ai une hachette, celle du petit bois, dans la paille du four. Personne ne la cherche. » Il dit cela sans colère, comme il dirait l'heure de la marée. « Je vous le dis à vous parce que vous êtes un homme qui a eu faim. Ça se voit. Et parce qu'il faut bien que quelqu'un le sache, avant. Après, ce sera trop tard pour comprendre. »",
        "Fargue repart avec ses sacs, par la petite porte du quai. En traversant la cour, il croise le gardien-chef Mauduit, qui inspecte la promenade, une badine à la main. Un homme petit, rond, propre, bien rasé, avec une bouche minuscule et des yeux d'un bleu très gai. Il salue Fargue avec amabilité, lui demande si le biscuit est à son goût, et lui dit en confidence, en clignant de l'œil, que pour cinq livres de plus par sac, il pourrait faire mettre dans la pâte du saindoux, ce qui la rend moins dure aux dents des officiers.",
        "Au bout de la cour, de l'autre côté de la grille, un garçon très maigre, enchaîné à un homme trapu, regarde vers le fournil.",
      ],
      choices: [
        { label: "Prévenir Mauduit, à mi-voix, de ce qui l'attend dimanche", fx: { flag: "wg:avertit" }, to: "WG_avertit" },
        { label: "Payer Mauduit pour qu'il remette le petit avec le géant", if: { gold: { min: 30 } }, fx: { flag: "wg:soudoie", gold: -30 }, to: "WG_soudoie" },
        { label: "Saluer Mauduit, et repartir avec ses sacs, sans rien dire", fx: { flag: "wg:tait" }, to: "WG_tait" },
      ] },
    WG_avertit: { act: "II", title: "Le pain coupé en deux", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il le dit à Mauduit, à mi-voix, en lui prenant le bras comme un vieil ami. Les yeux bleus cessent d'être gais. Mauduit le remercie, chaleureusement, et lui offre le saindoux pour rien. Le soir même, on fouille le fournil, on trouve la hachette dans la paille, et Hervé Corbic descend au cachot, sous la tour, là où l'eau du port suinte des murs à marée haute, avec des fers aux mains et aux pieds, et une demi-livre de pain par jour, pour lui apprendre.",
        "Fargue revient à la Tour-aux-Rats l'avant-veille de l'appareillage, pour le dernier chargement. Il demande des nouvelles du géant. Le gardien du fournil hausse les épaules. Le géant est toujours au cachot. Il ne dit rien. Il ne mange plus. Il rend sa demi-livre de pain intacte, chaque soir, par le guichet. On ne sait pas pourquoi. Le petit, de l'autre côté de la cour, est à l'infirmerie, avec la fièvre.",
        "Fargue a sauvé la vie d'un homme qui fait mettre du saindoux dans le pain des officiers, et il a condamné deux autres hommes à mourir de faim lentement, chacun de son côté, comme le règlement le prévoit. Il charge ses sacs. Il ne regarde pas vers la grille. Il pense, sans le vouloir, à Annette, qui avait faim aussi, l'hiver où il était en mer, et à qui personne n'a rien demandé.",
      ],
      choices: [{ label: "Retourner aux affaires du bord", fx: { quest: "WG" }, back: "XR_jours" }] },
    WG_soudoie: { act: "II", title: "Le pain coupé en deux", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il prend Mauduit à part, dans l'ombre du porche, et il lui parle du petit Lostanlen, des ailes de la prison, de la bonne entente entre forçats qui fait de la bonne pâte, et, à la fin, de trente livres, posées dans la main propre du gardien-chef, qui se referme dessus avec la souplesse d'une huître. Mauduit est enchanté. Il dit que c'est une excellente idée, qu'il y pensait justement, qu'il ne comprend pas qui a pu séparer ces deux garçons, et qu'il va faire une enquête.",
        "Le lendemain, à la promenade, le géant et le petit sont enchaînés ensemble. Le petit mange. Le géant mange la moitié de ce que mange le petit. Fargue les voit de loin, depuis la cour du fournil, assis contre le mur, épaule contre épaule, à partager une galette. Corbic lève la tête et le regarde. Il ne fait aucun signe. Le soir, dans la paille du four, on trouverait, si on cherchait, une hachette qu'il a remise à sa place.",
        "Fargue sait exactement ce qu'il a acheté. Trente livres de paix, à la Tour-aux-Rats, durent ce que dure la mémoire d'un homme qui aime l'argent : jusqu'au prochain maître-coq. Il le sait, et il est déjà à bord quand l'échéance tombera. C'est le genre d'arrangement qu'il préfère : on fait le bien comme on donne une pièce à un mendiant, en regardant ailleurs, et on s'en va avant de voir ce qu'il en fait.",
      ],
      choices: [{ label: "Retourner aux affaires du bord", fx: { quest: "WG" }, back: "XR_jours" }] },
    WG_tait: { act: "II", title: "Le pain coupé en deux", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il salue Mauduit, refuse le saindoux, et repart avec ses sacs. Le dimanche, à onze heures, il est sur le quai, à surveiller le chargement des pois secs, quand la cloche de la Tour-aux-Rats se met à sonner, à toute volée, à contretemps, comme une cloche qu'on a lâchée. Les portefaix lèvent la tête. Quelqu'un dit que c'est une évasion. Quelqu'un d'autre, qui a un cousin gardien, revient une heure plus tard en disant que c'est le gardien-chef. À la messe. D'un seul coup, entre les bancs. Que le géant ne s'est pas sauvé, qu'il a posé la hachette sur l'autel, et qu'il s'est assis, et qu'il a attendu.",
        "On le pend le vendredi, à la Croix-des-Marées, devant une foule qui est venue pour le spectacle et qui rentre déçue, parce qu'il ne dit rien, ne pleure pas, ne se débat pas. Fargue y est. Il ne sait pas pourquoi il y est. Le géant, sur l'échafaud, cherche quelqu'un dans la foule, et le trouve, et lui fait un petit signe de tête, très poli, comme on salue un homme qu'on a croisé une fois.",
        "En redescendant de la Croix, Fargue passe devant la petite porte de la Tour-aux-Rats. Le nouveau gardien-chef est un grand sec, triste, qui a l'air de ne rien aimer du tout, même l'argent. Fargue se demande si c'est mieux. Il ne trouve pas de réponse. Il trouve seulement qu'il a faim, tout à coup, une faim énorme, une faim de forçat, et il entre dans la première gargote et commande deux soupes, et il les mange toutes les deux.",
      ],
      choices: [{ label: "Retourner aux affaires du bord", fx: { quest: "WG" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      corbic: { name: "Hervé Corbic", aka: ["le géant du fournil"], qui: "Forçat de la Tour-aux-Rats, à Morlenc, qui pétrit le biscuit de mer." },
    },
    quests: [
      { id: "WG", act: "II", kind: "annexe", title: "Le pain coupé en deux", start: "WG_four", doit: "claudegueux", echo: ["wg:avertit", "wg:soudoie", "wg:tait"] },
    ],
  },
};
