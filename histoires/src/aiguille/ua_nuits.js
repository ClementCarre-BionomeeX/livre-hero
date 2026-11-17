// L'Île Folle-Aiguille · side story « Les quatre nuits du quai » (owes its question to Dostoevsky's White Nights: is it
// a kindness to keep someone company in a hope one does not share, and what does one owe a person who waits?).
// Act II, the mousse in Morlenc: four nights running, a young lace-maker, Clervie Lanoë, waits at the end of the quai
// des Hollandes for a sailor who promised, a year ago, to come back « on the first evening of the fair ». The child keeps
// her company. On the third day the child learns that Tangi Guézennec, the sailor, has been in town for a week. The
// child tells her (ua:dit), goes to fetch him (ua:cherche), or says nothing and waits with her (ua:tait).
// Wired in A2m_jours.
module.exports = {
  passages: {
    UA_premiere: { act: "II", title: "Les quatre nuits du quai", place: "quai_hollandes", ambiance: "nuit",
      fx: { meet: "clervie" },
      text: [
        "Tu as le quart de mouillage, de onze heures à minuit, et rien à faire que regarder le quai des Hollandes s'éteindre fenêtre par fenêtre. Au bout du quai, sur la dernière bitte d'amarrage, celle qui regarde la passe, une jeune femme est assise avec une lanterne sourde sur les genoux. Elle était là hier. Elle est là ce soir. Elle ne bouge pas. Elle regarde l'entrée du port comme on regarde une porte.",
        "Le guetteur de nuit passe, avec sa hallebarde et son gros ventre, et lui dit de rentrer chez elle, qu'une fille seule sur un quai à cette heure, on sait ce que c'est. Elle ne répond rien. Il insiste. Il lui prend le bras. Tu descends la planche avant d'avoir décidé de la descendre, et tu dis au guetteur que la demoiselle est avec toi, qu'elle attend ton patron, qui doit rentrer par le dernier canot. Le guetteur te regarde, toi, ta vareuse trop grande, ton âge. Il hausse les épaules. Il s'en va.",
        "Elle te remercie, sans sourire. Elle dit qu'elle s'appelle Clervie, qu'elle fait de la dentelle chez sa tante, au-dessus de la blanchisserie de la rue des Cordiers, et qu'elle n'attend pas ton patron. Tu dis que tu le sais. Elle te regarde pour la première fois. Elle a des yeux gris, fatigués, et une petite cicatrice blanche au coin de la lèvre. Elle dit : « Alors restez. Ça m'évitera le guetteur. »",
        "Tu restes jusqu'à minuit et demi, sans parler. Puis elle souffle sa lanterne, se lève, te dit bonsoir, et s'en va, très droite, sans se retourner.",
      ],
      choices: [{ label: "Descendre de nouveau la planche, le lendemain soir", to: "UA_deuxieme" }] },
    UA_dentelle: { act: "II", title: "Les quatre nuits du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Elle ouvre sa lanterne d'un cran, juste assez pour éclairer ses genoux, et elle te montre. Un carreau de dentellière, rond, bourré de son, posé sur sa jupe, hérissé d'épingles, avec trente fuseaux de buis qui pendent au bout de leurs fils comme des cloches minuscules. Au milieu, la dentelle avance, blanche, à peine plus large que deux doigts, d'un dessin si fin qu'on dirait du givre sur une vitre.",
        "Elle dit que c'est un voile. Le sien. Pour la noce. Elle a commencé le lendemain du départ de la Belle-Ourse, et elle fait un pouce par soir, pas plus, parce qu'un voile de mariée ne doit pas se presser. Elle a calculé : il fallait qu'il fasse quatre aunes à la foire. Il en fait trois et demie. Il lui manque un demi-aune, et elle dit que c'est le retard de la Belle-Ourse qui le lui donnera.",
        "Les fuseaux cliquettent sous ses doigts, sans qu'elle regarde. Tu demandes comment elle fait, dans le noir. Elle dit qu'elle n'a pas besoin de voir. Elle dit que ses mains connaissent le dessin par cœur : une rangée de vagues, une rangée de mouettes, et au milieu, tous les trois pouces, un petit trois-mâts toutes voiles dehors, qui fait le tour du voile et revient au point de départ.",
        "Elle dit, en souriant pour la première fois, que s'il ne revient pas, elle aura au moins le plus beau voile de la rue des Cordiers, et qu'on pourra l'enterrer avec. Elle dit ça pour rire. Tu ne ris pas. Elle non plus, au bout d'un instant. Elle referme la lanterne. Les fuseaux continuent de cliqueter dans le noir."
      ],
      choices: [
        { back: "UA_deuxieme", label: "Retourner sur la bitte, près d'elle" }
      ] },
    UA_tante: { act: "II", title: "Les quatre nuits du quai", place: "basse_fosse", ambiance: "ville",
      text: [
        "Au-dessus de la blanchisserie de la rue des Cordiers, au bout d'un escalier où l'on monte dans la vapeur et l'odeur de lessive, il y a deux pièces basses, propres, où trois dentellières travaillent à la fenêtre, en rang, leur carreau sur les genoux. La tante de Clervie est la plus vieille, une petite femme sèche, aux lunettes de fer, qui ne lève pas les yeux de ses fuseaux pour te parler.",
        "Elle prend le torchon. Elle dit merci. Elle sait qui tu es. Clervie lui a parlé du mousse du quai. Elle dit, sans s'arrêter de travailler, qu'elle a été fiancée, elle aussi, à dix-neuf ans, à un marin qui partait pour les longues routes, et qu'elle a fait un voile, elle aussi, et qu'elle l'a encore, dans un coffre, plié dans du papier bleu, jamais porté.",
        "Elle dit qu'elle n'a rien dit à Clervie. Elle dit qu'on ne dit rien à une fille qui attend : ça ne sert qu'à la faire attendre plus fort. Elle dit que les marins qui promettent à la foire sont comme les fuseaux : ils tournent dans un sens, puis dans l'autre, et le fil s'emmêle ou ne s'emmêle pas, selon une loi que personne ne connaît.",
        "Elle lève enfin les yeux, par-dessus ses lunettes. Elle te regarde longtemps. Elle dit : « Tu restes avec elle, le soir. C'est bien. Le mien, je l'ai attendu seule. Ça dure plus longtemps, seule. » Elle retourne à ses fuseaux. Les deux autres dentellières n'ont pas levé la tête une seule fois."
      ],
      choices: [
        { back: "UA_deuxieme", label: "Retourner au quai, le soir" }
      ] },
    UA_deuxieme: { act: "II", title: "Les quatre nuits du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        { first: true, text: "Elle est là. Elle a apporté deux galettes, une pour elle et une pour toi, enveloppées dans un torchon. Elle parle, ce soir-là, parce que la nuit est douce et qu'on parle mieux à quelqu'un dont on ne voit pas la figure." },
        { first: true, text: "Il s'appelle Tangi Guézennec. Il était maître d'équipage sur la Belle-Ourse, un trois-mâts de commerce qui fait les longues routes. Ils se sont rencontrés à la foire de l'an dernier, au Quai-aux-Harengs. Il a dansé avec elle trois soirs de suite. Le quatrième, la Belle-Ourse partait. Il lui a dit qu'il n'avait rien, que ce voyage le ferait riche, ou presque, et qu'il reviendrait l'épouser, ici, à la foire prochaine, le premier soir, au bout du quai des Hollandes. Il a dit : *Attends-moi sur la bitte qui regarde la passe. Je te verrai de la mer.*" },
        { first: true, text: "La foire a commencé il y a trois jours. Elle vient chaque soir. Elle dit que les navires ont du retard, toujours, qu'un vent contraire peut coûter deux semaines, qu'il a peut-être relâché ailleurs. Elle dit tout cela très vite, en ordre, comme on récite une leçon apprise par cœur, et tu comprends qu'elle se la récite à elle-même depuis trois nuits." },
        { first: true, text: "Tu ne dis rien. Tu manges ta galette. Elle est bonne, au beurre salé. Tu te surprends à souhaiter, très fort, que la Belle-Ourse ait un vent contraire pour toujours. Tu as honte de ce souhait. Tu le gardes quand même." },
        { again: true, text: "Clervie, sur la bitte qui regarde la passe, attend, et sa lanterne sourde éclaire à peine ses genoux." }
      ],
      choices: [
        { label: "Demander à Clervie ce qu'elle brode, sous sa lanterne", to: "UA_dentelle", hide: { seen: "UA_dentelle" } },
        { label: "Rapporter le torchon, le lendemain, chez la tante de la rue des Cordiers", to: "UA_tante", hide: { seen: "UA_tante" } },
        { label: "Le lendemain, aller porter un pli à la capitainerie pour Gobert", to: "UA_capitainerie" }
      ] },
    UA_capitainerie: { act: "II", title: "Les quatre nuits du quai", place: "quai_hollandes", ambiance: "ville",
      text: [
        "La capitainerie du port tient, sur un grand tableau noir, la liste des navires arrivés, avec la date, à la craie. Tu poses le pli de Gobert sur le comptoir, et tu lis le tableau en attendant le reçu, parce qu'on lit toujours ce qu'on a devant les yeux. Au milieu de la liste, à la date d'il y a huit jours, il y a écrit : *Belle-Ourse, trois-mâts, retour des longues routes. Quai du Commerce.*",
        "Tu demandes au commis, l'air de rien. Oui, la Belle-Ourse est arrivée la semaine dernière. L'équipage est payé, dispersé. Le maître d'équipage ? Guézennec ? Il loge à la taverne du Pélican, à ce qu'on dit, depuis huit jours, et il y boit sa part de voyage. Un bon voyage. Une bonne part.",
        "Tu passes devant le Pélican en rentrant. Tu descends les six marches. Il est là, tu le reconnais sans l'avoir jamais vu, parce qu'elle l'a décrit trop bien : grand, roux, une barbe en collier. Il est assis seul, au fond, devant une chope qu'il ne boit pas. Il a la main gauche bandée, une main qui n'est plus une main : un moignon, enveloppé dans un linge propre, posé sur la table comme une chose qu'il aurait apportée pour la montrer à quelqu'un.",
        "Il est là depuis huit jours. Elle attend depuis trois. Il ne va pas au quai. Ce soir est la quatrième nuit, et la dernière de la foire.",
      ],
      choices: [
        { label: "Dire à Clervie, ce soir, qu'il est en ville et qu'il ne vient pas", fx: { flag: "ua:dit" }, to: "UA_dit" },
        { label: "Aller t'asseoir en face de lui, au Pélican, et lui parler d'elle", fx: { flag: "ua:cherche" }, to: "UA_cherche" },
        { label: "Ne rien dire, et attendre avec elle la dernière nuit", fx: { flag: "ua:tait" }, to: "UA_tait" },
      ] },
    UA_dit: { act: "II", title: "Les quatre nuits du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Tu le lui dis, le soir, sur la bitte, avant qu'elle allume la lanterne. La Belle-Ourse. Huit jours. Le Pélican. Tu ne lui parles pas de la main. Tu ne sais pas pourquoi. Peut-être parce que c'est à lui de la montrer.",
        "Elle t'écoute sans un mot. Puis elle se lève, très droite, et elle part, à grands pas, vers la Basse-Fosse, sa lanterne éteinte à la main. Tu la suis de loin. Elle descend les six marches du Pélican. Tu restes dans la rue. À travers le carreau sale, tu la vois traverser la salle, s'arrêter devant la table du fond. Lui se lève. Il cache sa main sous la table, trop tard. Elle la regarde. Elle le regarde.",
        "Tu ne sais pas ce qu'elle lui dit. Elle parle longtemps. Il baisse la tête. Puis elle s'assied en face de lui, et elle prend la main bandée entre les siennes, sur la table, au milieu des chopes, devant tout le Pélican qui fait semblant de ne pas regarder. Il pleure. Un grand roux qui pleure, dans une taverne, c'est une chose qu'on n'oublie pas.",
        "Elle ressort une heure plus tard, seule, et elle te trouve dans la rue. Elle dit qu'il avait honte. Qu'il pensait qu'une dentellière ne voudrait pas d'un homme qui ne peut plus tenir une drisse. Qu'il venait au bout du quai, chaque nuit, plus loin, derrière les barriques, pour la regarder attendre, sans oser. Elle dit que tu lui as épargné une nuit de plus à attendre un homme caché derrière une barrique, et que c'est la plus longue nuit qu'on puisse épargner à quelqu'un. Elle t'embrasse sur le front. Elle s'en va le rejoindre.",
      ],
      choices: [{ label: "Remonter la planche, seul{e}, pour la fin du quart", fx: { quest: "UA" }, back: "A2m_jours" }] },
    UA_cherche: { act: "II", title: "Les quatre nuits du quai", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu t'assieds en face de lui. Il te regarde, surpris, puis méfiant : un mousse qui s'assied à la table d'un maître d'équipage, c'est qu'il veut quelque chose. Tu dis seulement : « La bitte qui regarde la passe. Elle y est tous les soirs. » Il pâlit sous sa barbe rousse. Il retire sa main bandée de la table et la cache sur ses genoux.",
        "Il parle, longtemps, à voix basse. Un palan qui a cédé, au milieu de l'océan, une main prise entre la poulie et le réa. Le chirurgien du bord a coupé au poignet. Le voyage a été bon, la part est grosse, il est presque riche, comme il l'avait promis. Mais un maître d'équipage sans main gauche, c'est un homme qui ne remontera plus jamais dans une mâture. Et une jeune fille qui a dansé avec un gabier ne voudra pas épouser un manchot qui vit de sa part. Il le sait. Il en est sûr. Il va la voir chaque nuit, de loin, caché derrière les barriques du quai, pour la regarder attendre un homme qui n'existe plus.",
        "Tu lui dis que tu ne sais pas ce qu'elle voudra. Tu dis que lui non plus. Tu dis qu'elle a apporté une galette pour lui, chaque soir, et qu'elle la mange elle-même à minuit, quand il n'est pas venu. Tu ne sais pas si c'est vrai. Tu l'as deviné à la façon dont elle tenait le torchon, la deuxième nuit : il y avait trois galettes dedans.",
        "Ce soir-là, sur la bitte, tu restes à côté d'elle jusqu'à onze heures. Puis tu vois une grande silhouette sortir de derrière les barriques, et marcher vers vous, lentement, une main dans la poche. Tu te lèves. Tu remontes à bord sans dire au revoir. Du pont, tu vois la lanterne sourde s'ouvrir, et deux ombres sur le quai, l'une contre l'autre, longtemps, et une galette qu'on partage en deux. Tu finis ton quart. Tu as seize ans, et tu viens de rendre à quelqu'un l'homme qu'il attendait, et tu ne sais pas pourquoi ça te fait si mal et si bien à la fois.",
      ],
      choices: [{ label: "Regagner le pont pour la fin du quart", fx: { quest: "UA" }, back: "A2m_jours" }] },
    UA_tait: { act: "II", title: "Les quatre nuits du quai", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Tu ne dis rien. Tu te dis que ce n'est pas à toi de le dire, que c'est à lui de venir, et que si tu le dis, tu lui voles sa venue. Tu te dis aussi autre chose, que tu ne te dis pas tout à fait, et qui a le goût d'une galette au beurre salé.",
        "La quatrième nuit, elle a mis sa robe du dimanche, bleue, avec un col de dentelle qu'elle a fait elle-même. Vous attendez. La foire, de l'autre côté du port, éteint ses lampions un par un. Minuit. Une heure. Elle parle de moins en moins. Puis plus du tout. Une fois, tu crois voir bouger une ombre derrière les barriques, au bout du quai. Tu ne dis rien. L'ombre ne bouge plus.",
        "À deux heures, elle souffle sa lanterne. Elle dit qu'elle a compris. Qu'il est mort, ou marié ailleurs, ou qu'il a oublié, et que ça revient au même. Elle dit qu'elle ne reviendra plus sur ce quai. Puis elle te regarde, et elle dit que tu as été bonne compagnie, quatre nuits, et que personne, de toute l'année, ne lui avait tenu compagnie sans rien lui demander. Elle te donne le torchon des galettes, plié en quatre, brodé à son initiale. Elle s'en va.",
        "Le lendemain, à la capitainerie, on t'apprend que le maître d'équipage de la Belle-Ourse a repris la mer, à l'aube, sur un caboteur, comme simple matelot. On dit qu'il lui manquait une main, et qu'il a signé quand même. Tu gardes le torchon. Tu ne sais pas si c'était de la bonté ou de la lâcheté. Tu sais que tu as eu, pendant quatre nuits, quelque chose qui n'était pas à toi, et que tu l'as gardé une nuit de trop.",
      ],
      choices: [{ label: "Regagner le pont, à l'aube", fx: { quest: "UA" }, back: "A2m_jours" }] },
  },
  extras: {
    people: {
      clervie: { name: "Clervie Lanoë", aka: ["la dentellière du quai"], f: true, qui: "Dentellière de la rue des Cordiers, qui attend un marin au bout du quai des Hollandes." },
    },
    quests: [
      { id: "UA", act: "II", kind: "annexe", title: "Les quatre nuits du quai", start: "UA_premiere", doit: "nuitsblanches", echo: ["ua:dit", "ua:cherche", "ua:tait"] },
    ],
  },
};
