// L'Île Folle-Aiguille · side story « L'oraison sur le sable » (owes its question to Julius Caesar: may one move a crowd
// with the truth, or only with an art that resembles lying?). Act IV, the mutineers' camp: at dawn, the chapel's fire
// kills Jos Le Dantec, nineteen, at the stream. Malandain makes a speech over the body: Fargue's parleys killed him,
// tonight they storm the chapel. The men turn toward the cook. Fargue answers with an oration built like a trap
// (wi:harangue), with the bare truth (wi:vrai), or with nothing but the soup (wi:louche). Wired in A4f_jours.
module.exports = {
  passages: {
    WI_corps: { act: "IV", title: "L'oraison sur le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "On le rapporte du ruisseau sur une voile pliée, à quatre, comme on porte une table. Jos Le Dantec, dix-neuf ans, gabier, de Morlenc, le plus jeune du camp après Petit-Jules. Il était descendu à l'aube remplir les barriques, en chantant, parce qu'il chantait toujours, et parce que la chapelle ne tirait plus depuis deux jours. Elle a tiré. Une seule balle, de très haut, de très loin, de celles qu'on tire pour voir et qui trouvent.",
        "On le couche sur le sable, devant les feux. Le soleil se lève sur lui. Il a les yeux ouverts, l'air étonné, la bouche entrouverte au milieu d'une chanson. Le trou est sous la clavicule, petit, net, presque propre. Le sang a coulé dans le dos, dans la voile, et il a séché en dessinant sur la toile une grande tache brune qui a la forme exacte d'une île.",
        "Les hommes viennent, un par un, de leurs abris, en se frottant les yeux. Ils regardent. Ils ne disent rien. Puis ils regardent vers la chapelle, là-haut, sur l'éperon, où le drapeau de la capitaine pend dans l'air immobile. Puis, tous, ils regardent Fargue. Et Malandain monte sur un tonneau.",
      ],
      choices: [{ label: "Écouter Malandain", to: "WI_malandain" }] },
    WI_malandain: { act: "IV", title: "L'oraison sur le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Malandain n'est pas un orateur. Il parle comme il aiguise son couteau : par petits coups secs, répétés, sur le même endroit. Il dit que Jos est mort. Il dit que Jos est mort parce qu'on parlemente. Il dit que depuis quatre jours, on parlemente, on monte avec des drapeaux blancs, on fait des sourires, on fait des soupes, et que pendant ce temps-là, la capitaine compte ses balles et nous tire comme des lapins quand nous allons boire. Il dit que Jos avait dix-neuf ans. Il le dit quatre fois.",
        "Il dit que ce soir, à la nuit, on monte. Tous. Avec les haches, les échelles du canot, les mousquets qu'on a. Il dit que la chapelle n'a plus que vingt hommes debout, qu'on est quarante, et que les morts de la chapelle ne pèseront pas plus lourd que Jos. Il dit qu'il montera le premier. Il dit que ceux qui ne montent pas, il s'en souviendra. Il ne regarde personne en le disant, et chacun se sent regardé.",
        "Les hommes grondent. C'est un bruit que Fargue connaît, le bruit d'une bordée au sixième mois d'une campagne, quand on a trop bu, trop mal mangé, et qu'on cherche quelqu'un à qui faire payer le temps. Il sait qu'une attaque, ce soir, fera vingt morts au pied du mur, sous les mousquets de la chapelle, et qu'elle échouera. Il sait aussi que s'il dit seulement *non*, Malandain dira *lâche*, et que le mot restera.",
        "Malandain descend de son tonneau. « À toi, cuisinier, dit-il. Dis-nous comment on fait la soupe avec Jos. »",
      ],
      choices: [
        { label: "Monter sur le tonneau, et leur faire un discours qui les retourne", fx: { flag: "wi:harangue" }, to: "WI_harangue" },
        { label: "Monter sur le tonneau, et leur dire la vérité, toute nue", fx: { flag: "wi:vrai" }, to: "WI_vrai" },
        { label: "Ne pas monter sur le tonneau, et aller allumer le feu sous la marmite", fx: { flag: "wi:louche" }, to: "WI_louche" },
      ] },
    WI_harangue: { act: "IV", title: "L'oraison sur le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il monte. Il commence par donner raison à Malandain. Entièrement, chaleureusement, longuement. Malandain a raison : Jos est mort. Malandain a raison : on a trop parlementé. Malandain est un homme brave, le plus brave du camp, chacun le sait, et quand Malandain dit qu'il montera le premier, Fargue le croit. Il le répète : Fargue le croit. Il descend du tonneau, il va au corps, il s'agenouille, il ouvre la chemise de Jos sur le petit trou net, et il le montre, à tous, longtemps. Puis il dit : « Une balle. Une seule. De là-haut. Elle tire juste, la capitaine. »",
        "Et il compte, à voix haute, devant eux, comme on fait un inventaire : vingt hommes derrière un mur de six pieds, quarante mousquets chargés, une porte de chêne, une capitaine qui tire juste. Il compte les échelles du canot : deux. Il compte les marches de la pente, sous le feu : deux cents. Il ne dit jamais *non*. Il dit : « Malandain montera le premier. Qui monte le deuxième ? » Et il attend. Et il regarde les hommes, un par un, avec une curiosité sincère, presque tendre. Personne ne lève la main. Il dit : « Le troisième, alors ? » Personne.",
        "À la fin, c'est Gabet qui dit qu'on pourrait peut-être attendre. Puis Boucaut. Puis tous. Fargue, très ému, dit qu'il n'aurait jamais osé le proposer, et que c'est leur décision, et qu'il s'incline. Malandain est debout, seul, au milieu du cercle, le couteau à la main, un homme brave dont tout le monde vient de constater qu'il est seul. Il regarde Fargue. Fargue lui sourit. On enterre Jos à midi. Le soir, Malandain dort à l'écart, et pour la première fois, il aiguise son couteau en regardant le cuisinier.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "WI" }, back: "A4f_jours" }] },
    WI_vrai: { act: "IV", title: "L'oraison sur le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il monte. Il dit, sans élever la voix, qu'ils sont des mutins. Que Jos est mort parce qu'il était un mutin, sur une île, sous un fort tenu par des gens qui ont le droit de les pendre. Que si l'on monte ce soir, on sera vingt de plus, couchés sur des voiles, et que la capitaine ne perdra pas cinq hommes. Qu'il le sait parce qu'il a vu, jadis, sous un autre pavillon, monter des hommes à l'assaut de murs plus bas que celui-là, et qu'il a aidé à les enterrer. Qu'il n'a pas de meilleure idée. Qu'il en cherche une. Que c'est tout.",
        "On l'écoute en silence. Puis quelqu'un, derrière, ricane. Quelqu'un d'autre dit qu'il n'a pas besoin d'un cuisinier pour savoir qu'il est un mutin. La vérité, découvre Fargue, n'a aucun goût dans la bouche des hommes ; ils l'avalent comme de l'eau, sans la sentir, et ils ont encore soif. Malandain ne remonte pas sur son tonneau. Il n'en a pas besoin. Il dit seulement : « Il a peur. » Et le mot fait le tour du cercle, et revient.",
        "Personne ne monte, ce soir-là. Malandain n'a pas assez d'hommes pour monter seul, et il le sait, et il ne le pardonne à personne. Mais le camp a changé. On obéit encore à Fargue, parce qu'il tient la marmite ; on ne l'écoute plus de la même manière. Il l'a vu dans les yeux de Gabet, qui l'aimait bien. Il pense, en enterrant Jos à midi, sous le sable, qu'il a dit la vérité une fois dans sa vie à quarante hommes à la fois, et que ce ne sera pas une habitude.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "WI" }, back: "A4f_jours" }] },
    WI_louche: { act: "IV", title: "L'oraison sur le sable", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il ne monte pas. Il passe devant le tonneau, devant Malandain, devant le corps, sans s'arrêter, et il va à son feu. Il le rallume. Il met de l'eau dans la marmite, et des pois, et le dernier morceau de lard, et des oignons, et un bouquet de cette herbe de l'île qui sent l'anis. Les hommes le regardent faire. Malandain parle encore, plus fort, puis moins fort. Un discours, ça a besoin qu'on lui réponde. Celui-là, personne ne lui répond.",
        "L'odeur monte. Elle monte doucement, dans l'air du matin, au-dessus des feux, au-dessus du corps, et elle va chercher les hommes un par un, dans le ventre, là où ils sont plus faibles que partout ailleurs. Au bout d'une heure, il y a une file devant la marmite. Fargue sert. Il sert Jos en premier : une écuelle pleine, qu'il pose sur le sable à côté de sa tête, comme on fait chez lui, à Morlenc, pour les veillées. Puis il sert les autres. Puis il sert Malandain, qui prend l'écuelle, et qui mange, parce qu'il a faim lui aussi.",
        "On enterre Jos à midi, l'estomac plein, et l'on chante pour lui la chanson qu'il chantait en descendant au ruisseau, et quelques-uns pleurent, et personne ne parle plus de monter. Malandain ne lui pardonne pas cette soupe, Fargue le sait. Mais Malandain n'a pas de soupe à offrir, lui, et c'est toute la politique qu'il y a sur cette plage. Le soir, Fargue lave sa marmite au bord de la mer, à genoux dans l'écume, et il pense qu'il commande quarante hommes avec une louche, et qu'il aurait préféré commander un fourneau.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "WI" }, back: "A4f_jours" }] },
  },
  extras: {
    quests: [
      { id: "WI", act: "IV", kind: "annexe", title: "L'oraison sur le sable", start: "WI_corps", doit: "juliuscesar", echo: ["wi:harangue", "wi:vrai", "wi:louche"] },
    ],
  },
};
