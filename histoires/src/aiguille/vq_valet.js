// L'Île Folle-Aiguille · side story « Les gencives de Pradel » (owes its question to A Simple Heart: is a devotion that
// asks for nothing a virtue or a servitude, and has one the right to interrupt it?). Act III, the Sargasso calm: Pradel,
// the baron's grey and silent valet, thirty years in his service, hides the scurvy that is starting in him so as to go
// on shaving, dressing and serving his master. Victorine notices the blood on the shaving towel. She tells the baron
// (vq:baron), treats Pradel in secret and keeps his secret (vq:secret), or orders him to his hammock against his will
// (vq:alite). Pradel lives in every branch (he shaves the baron on the parapet in act IV). Wired in A3w_jours.
module.exports = {
  passages: {
    VQ_serviette: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      fx: { meet: "pradel" },
      text: [
        "Chaque matin, à huit heures précises, au milieu de la marmite, sous un soleil qui fait fondre la poix des coutures, le baron Clavières se fait raser sur la dunette, dans un fauteuil de rotin, comme à Morlenc. C'est le spectacle du bord. Le valet, Pradel, un homme gris, sans âge, sans voix, l'enveloppe d'une serviette blanche, fait mousser le savon, passe le rasoir, essuie, poudre, recule d'un pas, et attend. Il fait ça depuis trente ans. Il le fait avec la perfection d'un prêtre qui dit sa messe.",
        "Ce matin-là, Victorine, qui monte respirer, voit la serviette posée sur le bastingage après le rasage. Il y a du sang dessus. Pas celui du baron : le baron est intact, rose, poudré. De petites taches rouges, rondes, sur le coin de la serviette dont Pradel s'est servi, en se détournant, pour s'essuyer la bouche. Elle regarde le valet. Il a les lèvres serrées. Il a, sous les yeux, des cernes bleus. Il marche avec précaution, comme quelqu'un qui a mal aux jambes et qui ne veut pas qu'on le sache.",
        "Elle le fait venir à l'infirmerie, sous un prétexte. Il vient, poliment. Elle lui demande d'ouvrir la bouche. Il hésite, puis obéit, parce qu'on lui a toujours dit d'obéir. Les gencives sont gonflées, violacées, saignantes. Deux dents bougent. Sur les tibias, quand elle relève son pantalon, des taches brunes. Le scorbut, déjà avancé. Elle le lui dit. Il hoche la tête. Il dit qu'il le sait depuis dix jours.",
      ],
      choices: [{ label: "Lui demander pourquoi il n'a rien dit", to: "VQ_aveu" }] },
    VQ_reduit: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      text: [
        "Pradel dort dans un placard. Le mot est exact : un réduit de lambris, entre la chambre du baron et la coursive, large comme un cercueil debout, où l'on a tendu un hamac en travers, si court qu'un homme de sa taille doit y dormir les genoux pliés. Une porte à claire-voie, pour entendre la sonnette. La sonnette est là, au-dessus du hamac, à portée de main, reliée par un fil de laiton à la chambre voisine.",
        "Il n'y a presque rien. Un rasoir dans un étui de chagrin. Un nécessaire à cirer. Une brosse à habits. Une deuxième livrée, pliée au carré, sur une étagère. Pas un objet qui ne serve au baron. Victorine cherche, malgré elle, la chose qui serait à lui seul. Elle ne la trouve pas. Puis elle la trouve : sous la livrée, un petit carnet relié de toile grise, usé aux coins, fermé d'un élastique.",
        "Elle l'ouvre, à une page au hasard. Une date, et en dessous, d'une écriture minuscule et ronde : « Monsieur est de méchante humeur. A trouvé le chocolat trop clair. N.B. : le mardi, toujours plus épais. » Une autre page, dix ans plus tôt : « Monsieur a ri, à table, d'une histoire de l'abbé. N.B. : l'abbé revenir. » Trente ans de pages. Trente ans d'humeurs, de goûts, de fatigues et de colères, notées, classées, corrigées, comme un savant tient le journal d'une étoile.",
        "Il n'y a pas une ligne sur Pradel. Pas une. Victorine referme le carnet, remet l'élastique, et replace la livrée par-dessus, au carré, exactement comme elle l'a trouvée. Elle pense qu'elle vient de lire la seule biographie du baron Clavières qui sera jamais écrite avec amour, et que l'auteur n'y figure nulle part.",
      ],
      choices: [
        { back: "VQ_aveu", label: "Revenir auprès de Pradel, avant qu'il s'en aperçoive" }
      ] },
    VQ_chocolat: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      text: [
        "À neuf heures, sous la tente de la dunette, le baron est assis dans son fauteuil de rotin, un livre sur les genoux, qu'il ne lit pas. Pradel arrive avec le plateau, à pas comptés, malgré le roulis mou du calme, sans qu'une goutte tremble dans la tasse. Il pose le plateau. Il verse. Il tend la tasse, l'anse tournée vers la main du baron, à l'angle exact où la main se trouvera quand elle se lèvera. Elle se lève. Elle trouve l'anse.",
        "Le baron boit une gorgée. Il dit, sans lever les yeux de son livre, que c'est un peu chaud. Pradel dit : « Pardon, monsieur le baron. » Il le dit comme on dit amen. Le baron boit une deuxième gorgée. Il ne dit plus rien. Pradel se tient à trois pas, en arrière, à gauche, la serviette sur le bras, immobile comme une console.",
        "Victorine, de la lisse, voit ce que le baron ne voit pas. Pradel serre les mâchoires. Un peu de rose, au coin de sa bouche, qu'il essuie d'un geste si rapide, d'un coin de serviette, qu'il passe pour un tic. Le baron tourne une page. Il dit, toujours sans regarder, du ton dont on parle d'un meuble qu'on aime bien : « Vous avez maigri, Pradel. Le voyage ne vous vaut rien. Il faudra que vous mangiez. »",
        "Pradel dit : « Oui, monsieur le baron. » Le baron tend la tasse vide, à l'aveugle. Pradel la prend. Il repart, à pas comptés. Victorine reste à la lisse. Elle se demande si le baron vient de remarquer quelque chose, ou s'il vient seulement de dire, par habitude, la phrase qu'on dit aux domestiques, et elle comprend qu'elle ne le saura jamais, et que Pradel non plus.",
      ],
      choices: [
        { back: "VQ_aveu", label: "Revenir trouver Pradel, à l'office" }
      ] },
    VQ_aveu: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      text: [
        { first: true, text: "Il dit que Monsieur le baron a besoin d'être rasé. Il dit que personne d'autre à bord ne sait le raser, ni l'habiller, ni lui préparer son chocolat comme il l'aime, ni plier ses chemises, ni deviner ce qu'il veut avant qu'il le veuille. Il dit que s'il se couche, Monsieur le baron sera mal servi, et que Monsieur le baron mal servi devient méchant avec tout le monde, et que ce serait de sa faute, à lui, Pradel. Il dit tout cela d'une voix égale, sans plainte, comme on expose un fait de navigation." },
        { first: true, text: "Victorine lui demande si le baron s'est aperçu de quelque chose. Pradel paraît surpris de la question. Non, naturellement. Monsieur le baron n'a pas à s'apercevoir. C'est le métier de Pradel de faire en sorte que Monsieur le baron ne s'aperçoive jamais de rien. Il ajoute, et c'est la seule fois qu'elle l'entendra parler de lui-même, qu'il est entré au service de la maison Clavières à quatorze ans, comme garçon de cuisine, qu'il n'a jamais eu de femme, ni de maison, ni de jour à lui, et qu'il ne s'en plaint pas, parce que c'est sa vie, et qu'elle est bien remplie." },
        { first: true, text: "Il demande, très poliment, s'il peut retourner à la dunette. Monsieur le baron prend son chocolat à neuf heures. Victorine regarde cet homme gris qui saigne des gencives pour un chocolat. Elle ne sait pas si elle a devant elle un saint, un esclave, ou les deux, et si la différence l'intéresse, lui. Elle sait que si on le laisse faire, il mourra d'ici trois semaines, très proprement, une serviette sur le bras." },
        { again: true, text: "Pradel attend, debout, la serviette sur le bras, qu'on lui permette de retourner à la dunette." }
      ],
      choices: [
        { label: "Regarder le réduit où dort Pradel, à côté de la chambre du baron", to: "VQ_reduit", hide: { seen: "VQ_reduit" } },
        { label: "Observer, à neuf heures, le baron qui prend son chocolat", to: "VQ_chocolat", hide: { seen: "VQ_chocolat" } },
        { label: "Aller dire au baron que son valet est malade, et pourquoi", fx: { flag: "vq:baron" }, to: "VQ_baron" },
        { label: "Le soigner en secret, et garder son secret", fx: { flag: "vq:secret" }, to: "VQ_secret" },
        { label: "Lui ordonner, en médecin, de se coucher, qu'il le veuille ou non", fx: { flag: "vq:alite" }, to: "VQ_alite" },
      ] },
    VQ_baron: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      text: [
        "Le baron l'écoute dans la grand-chambre, son chocolat à la main. Il fronce les sourcils. Il dit : « Pradel ? Malade ? » Il le dit avec l'étonnement d'un homme à qui l'on apprend que sa pendule a des sentiments. Puis il pose sa tasse. Il reste silencieux un long moment. Victorine s'attend à de l'agacement, à un mot sur le service. Il dit seulement, très bas : « Trente ans. Je ne lui ai jamais demandé s'il allait bien. Il ne m'est jamais venu à l'idée qu'il pouvait aller mal. »",
        "Ce que fait alors le baron Clavières, personne à bord ne l'aurait prédit. Il fait porter à l'infirmerie les deux bouteilles de jus de citron qu'il gardait pour lui seul, dans sa cave de voyage, et qu'il n'avait déclarées à personne. Il ordonne que Pradel se couche. Pradel refuse. Le baron, pour la première fois en trente ans, élève la voix contre son valet, et Pradel, pour la première fois en trente ans, obéit à contrecœur.",
        "Le baron se rase seul pendant deux semaines, à la dunette, devant tout l'équipage, et se coupe tous les matins, et jure, et s'entête. Personne ne rit. Pradel guérit. Le jour où il remonte, il trouve son maître couvert de petites coupures. Il ne dit rien. Il reprend le rasoir. Victorine les regarde, le lendemain matin, le maître et le valet, dans le même silence qu'avant, et elle cherche ce qui a changé. Elle trouve : le baron dit maintenant « merci, Pradel », à la fin du rasage. Deux mots. Pradel ne sait pas quoi en faire. Il en est bouleversé.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "VQ" }, back: "A3w_jours" }] },
    VQ_secret: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      text: [
        "Elle lui dit qu'il pourra continuer à servir, à une condition : qu'il passe chaque soir à l'infirmerie, et qu'il prenne ce qu'elle lui donnera, sans discuter. Il accepte, avec une gratitude si profonde qu'elle en est gênée. Chaque soir, il vient, après avoir couché le baron. Elle lui donne ce qu'elle a : une décoction d'aiguilles de pin du coffre de Morlenc, de la choucroute de la réserve de Fargue, quelques gouttes du jus de citron qu'elle garde pour les plus malades. Il est le plus malade. Il ne le sait pas.",
        "Il guérit lentement, sans jamais manquer un rasage. Les gencives dégonflent. Les taches pâlissent. Le baron ne s'aperçoit de rien, puisque c'est le métier de Pradel. Il remarque seulement, un matin, que son valet sent le pin. Il en fait la remarque. Pradel dit que c'est une eau de toilette que lui a conseillée la médecin. Le baron dit qu'il en voudrait aussi. Victorine lui en prépare un flacon, avec la même décoction, un peu plus parfumée. Le baron la trouve exquise.",
        "Le dernier soir de la marmite, Pradel, en quittant l'infirmerie, s'arrête sur le seuil. Il dit que personne, jamais, n'a gardé un secret pour lui. Il dit qu'il ne sait pas comment on remercie quelqu'un pour ça, puisqu'on ne lui a jamais appris. Il fait une chose étrange : il prend la main de Victorine, et il la regarde, comme on regarde un objet qu'on va nettoyer, et puis il la lâche, et il s'incline très bas, plus bas qu'il ne s'incline devant le baron. Puis il s'en va. Victorine se dit qu'elle a sauvé un homme pour qu'il puisse continuer à ne pas vivre. Elle se dit aussi que ce n'est pas à elle d'en juger. Elle ne sait pas laquelle de ces deux pensées est la bonne.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "VQ" }, back: "A3w_jours" }] },
    VQ_alite: { act: "III", title: "Les gencives de Pradel", place: "cormorane", ambiance: "mer",
      text: [
        "Elle lui ordonne de se coucher. Il refuse. Elle lui dit qu'elle est médecin du bord, et que, sur ce navire, en matière de maladie, même le baron lui obéit. Il pâlit. Il dit qu'elle n'a pas le droit. Elle dit qu'elle l'a. Elle appelle deux matelots, qui l'emmènent à son hamac, à moitié porté, sans qu'il se débatte, car il ne s'est jamais débattu de sa vie, mais en pleurant, en silence, de grosses larmes de vieil homme. Elle n'a jamais vu personne pleurer d'être soigné.",
        "Le baron, le lendemain, se trouve sans valet. Il exige des explications. Victorine les lui donne. Il dit qu'on aurait pu le prévenir, qu'on aurait pu trouver un remplaçant, qu'on aurait pu attendre la prochaine escale. Puis il fait raser par Gobert, qui le rase comme on racle une coque, et il devient d'une humeur exécrable pour toute la durée du calme. Il passe ses journées dans la grand-chambre. Le bord respire.",
        "Pradel guérit en deux semaines, couché, nourri de choucroute et de décoctions, sans dire un mot à personne. Il ne pardonne pas à Victorine. Il le lui fait sentir avec une politesse impeccable, glacée, chaque fois qu'il la croise. Il reprend son service dès qu'il peut se tenir debout. Le jour où il rase de nouveau le baron, il a les mains qui tremblent un peu, de faiblesse ou d'émotion. Le baron ferme les yeux sous le rasoir avec un soupir d'aise. Victorine se dit qu'elle a eu raison. Elle se dit qu'il y a des gens qu'on ne peut sauver qu'en leur faisant du mal, et qu'ils ne vous le pardonnent pas, et qu'ils ont le droit.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "VQ" }, back: "A3w_jours" }] },
  },
  extras: {
    quests: [
      { id: "VQ", act: "III", kind: "annexe", title: "Les gencives de Pradel", start: "VQ_serviette", doit: "coeursimple", echo: ["vq:baron", "vq:secret", "vq:alite"] },
    ],
  },
};
