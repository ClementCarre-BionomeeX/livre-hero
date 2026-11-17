// L'Île Folle-Aiguille · side story « Le sac de la Toussaint » (owes its question to Twain's The Man That Corrupted
// Hadleyburg: is a man honest, or only untempted, and what does one gain by proving that everyone can be bought?).
// Act IV, Fargue in the mutineers' camp: one morning a heavy sack is found buried under the cook's oven, with a letter
// in a fine hand: the gold inside is for the sailor who, three years ago at Morlenc, gave a ruined stranger an écu and a
// piece of advice; let him write the advice to the cook, and the cook will open the sack before everyone. Nine men
// write. Fargue reads the nine letters, finds gold paint on the fingers of Le Rouzic, the man the camp shaved and
// beat for a theft he did not commit, and opens the sack: gilded lead. He reads the nine letters at the fire
// (so:revele), burns them unread by anyone (so:brule), or tells the camp who set the trap (so:rouzic). Optional:
// SO_lettres. Wired in A4f_jours.
module.exports = {
  passages: {
    SO_four: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nature", second: true,
      text: [
        "Le four que Fargue a creusé dans le sable, au bout du camp, est un trou d'une toise, tapissé de pierres plates, qu'on chauffe à blanc avec du bois de cocotier et où l'on enterre, sous des feuilles et du sable, ce qu'on veut cuire. Un matin, en déblayant les cendres de la veille, la pelle de Fargue heurte quelque chose de mou et de lourd, enfoui sous les pierres, là où personne n'a le droit de creuser.",
        "C'est un sac de toile à voile, cousu au point de voilier, gros comme une tête d'enfant, si lourd que Fargue doit s'y prendre à deux mains pour le sortir. Le sac tinte, sourdement, comme une bourse trop pleine. Cousue sur le dessus, une enveloppe de papier huilé. Dans l'enveloppe, une lettre, d'une écriture fine, appliquée, d'homme qui a eu un maître d'école.",
        "« Ce sac contient de l'or. Il appartient à un homme de ce camp. Il y a trois ans, à Morlenc, la nuit de la Toussaint, un homme ruiné, qui allait se jeter dans le bassin, a reçu d'un matelot inconnu un écu et un conseil. L'écu l'a nourri. Le conseil l'a sauvé. Il a fait fortune depuis. Il veut rendre au centuple. Que le matelot écrive au cuisinier, en secret, la phrase exacte qu'il a dite cette nuit-là. Que le cuisinier ouvre le sac au feu du soir, dans trois jours, devant tous, et le donne à celui qui aura écrit la bonne phrase. »",
        "Fargue relit la lettre deux fois. Il soupèse le sac. Il regarde autour de lui le camp qui s'éveille : les voiles tendues, les feux, les hommes qui se grattent, qui crachent, qui se disputent un reste de rhum. Il se dit qu'il y a quelqu'un, ici, qui veut savoir combien vaut ce camp. Il remet le sac dans le trou, sous les pierres, et la lettre dans sa poche. Puis il la ressort. Puis il va la clouer sur le mât du drapeau, au milieu du camp, pour que tout le monde la lise."
      ],
      choices: [
        { label: "Attendre les lettres", to: "SO_attente" }
      ] },
    SO_attente: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nature", second: true,
      text: [
        { first: true, text: "Le camp lit la lettre. Ceux qui ne savent pas lire se la font lire, et relire, et ceux qui la lisent ajoutent un peu à chaque fois. Le soir, tout le monde sait par cœur la phrase de la nuit de la Toussaint, sauf que personne ne la connaît. On en discute autour des feux. On fouille sa mémoire. On se souvient, avec une précision soudaine, d'avoir été à Morlenc, il y a trois ans, à la Toussaint, et d'avoir rencontré, sur le quai, dans le brouillard, un homme qui avait l'air triste." },
        { first: true, text: "La première lettre arrive à Fargue le lendemain matin, glissée sous sa marmite, pliée en huit. Puis une autre, le soir, dans sa main, avec un clin d'œil. Puis une troisième, dictée à voix basse, par un homme qui ne sait pas écrire, et qui fait jurer au cuisinier de ne pas changer un mot. Au bout du deuxième jour, Fargue en a neuf. Neuf hommes, sur la vingtaine que compte le camp, ont fait l'aumône d'un écu, un soir de Toussaint, à un homme qui allait se noyer. Le monde est plein de bonté, songe Fargue." },
        { first: true, text: "Il y a un homme qui n'écrit pas. Le Rouzic. Un gabier maigre et taciturne, au crâne rasé de travers, avec une cicatrice fraîche à l'arcade. Le camp l'a tondu, la semaine dernière, et battu, parce qu'on l'accusait d'avoir volé le rhum de Boucaut, et Boucaut a retrouvé son rhum, le surlendemain, dans son propre sac, où il l'avait oublié. Personne ne s'est excusé. Le Rouzic se tient à l'écart, au bout de la plage, et il regarde le mât du drapeau, où la lettre claque au vent, avec un drôle de sourire." },
        { again: true, text: "La lettre claque au mât du drapeau. Les hommes passent devant la cambuse avec des airs innocents. Le Rouzic, au bout de la plage, sourit tout seul." }
      ],
      choices: [
        { label: "Lire les neuf lettres, seul, à la lanterne", to: "SO_lettres", hide: { seen: "SO_lettres" } },
        { label: "Aller s'asseoir près du Rouzic, au bout de la plage", to: "SO_rouzic" }
      ] },
    SO_lettres: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue les lit la nuit, dans son abri, à la lanterne, comme on lit des confessions qu'on n'a pas eu le droit d'entendre. Il les lit avec l'attention d'un juge et le plaisir d'un gourmet.",
        "Boucaut a écrit : « Va te coucher, demain il fera jour. » Un mutin qui a fait ses classes a écrit une phrase de dix lignes, en latin, tirée d'un livre. Le vieux Kerhallet a dicté : « La mer ne veut pas de toi, mon gars, elle a assez de poisson. » Un jeune a écrit : « Bois un coup. » Un autre : « Pense à ta mère. » Un autre, le plus honnête du camp, celui qui partage toujours son tabac, a écrit, après avoir raturé trois fois : « Je ne me souviens pas des mots exacts, mais c'était quelque chose sur l'espérance. »",
        "Neuf phrases. Neuf hommes qui, il y a trois ans, la nuit de la Toussaint, à Morlenc, étaient ivres, en mer, en prison, au lit, ou à l'autre bout du monde. Fargue les connaît assez pour le savoir. Ils le savent aussi. Ils ont écrit quand même. Il remarque que chacun a choisi la phrase qu'il aurait aimé dire, et qu'on peut lire, dans chaque lettre, le portrait exact de son auteur, en meilleur.",
        "Il replie les neuf lettres. Il les range dans sa poche de poitrine, contre son cœur, ce qui le fait sourire. Il se dit qu'il tient là, pour un cuisinier, une collection de prix : neuf menteurs, avec leur signature. Le surplus, c'est l'investissement. Puis il pense au sac, sous les pierres de son four. Il trouve qu'il tinte trop sourdement pour de l'or."
      ],
      choices: [
        { back: "SO_attente", label: "Revenir au camp, où l'on attend" }
      ] },
    SO_rouzic: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nature", second: true,
      fx: { meet: "rouzic" },
      text: [
        "Le Rouzic ne se lève pas quand Fargue s'assied à côté de lui. Il continue de regarder la mer. Il a les mains posées sur les genoux, de longues mains maigres, et Fargue remarque, dans les plis des phalanges, sous les ongles, de minuscules paillettes dorées, qui brillent au soleil comme des écailles de poisson.",
        "Fargue dit qu'il ne lui a pas écrit. Le Rouzic dit que non. Fargue dit qu'il est peut-être le seul honnête homme du camp. Le Rouzic rit, sans bruit. Il dit qu'il a été maître d'école, autrefois, dans un village de la côte, avant que l'inspecteur le chasse pour une histoire de mauvaise conduite qu'il n'avait pas eue. Il dit qu'il a une belle écriture. Il dit qu'on lui a appris, à l'école normale, à faire des lettres pour les gens qui ne savent pas.",
        "Puis il dit, toujours en regardant la mer : « Ils m'ont tondu, cuisinier. Ils m'ont battu. Ils ont dit que j'étais un voleur. Je voulais seulement savoir lesquels d'entre eux le sont. Maintenant, je le sais. Toi aussi. Neuf. » Il lève une main, regarde les paillettes, les frotte contre son pantalon sans parvenir à les ôter. « La dorure, ça colle. Je l'ai prise dans la caisse du charpentier, avant de débarquer, un petit pot. Le plomb, ce sont des balles de mousquet fondues. Ça tinte presque pareil. »",
        "Il se tourne enfin vers Fargue. Il dit qu'il ne veut rien. Ni excuses ni vengeance. Il veut que le cuisinier ouvre le sac, au feu, ce soir, comme c'est écrit. Après, dit-il, chacun fera ce qu'il voudra de sa honte. Il se relève. Il retourne au bout de la plage. Le soleil se couche. Le feu du soir s'allume, au milieu du camp, et les hommes se rassemblent, en se poussant du coude."
      ],
      choices: [
        { label: "Ouvrir le sac au feu, et lire les neuf lettres à voix haute", fx: { flag: "so:revele" }, to: "SO_revele" },
        { label: "Ouvrir le sac au feu, et jeter les neuf lettres au four sans les lire", fx: { flag: "so:brule" }, to: "SO_brule" },
        { label: "Ouvrir le sac au feu, et dire au camp qui l'a cousu, et pourquoi", fx: { flag: "so:rouzic" }, to: "SO_aveu" }
      ] },
    SO_revele: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue apporte le sac au feu. Il le pose sur une caisse. Tout le camp fait cercle, les neuf au premier rang. Il sort de sa poche les neuf lettres. Il dit qu'il va les lire, toutes, l'une après l'autre, et que celui qui a écrit la bonne phrase se lèvera. Il lit la première. Boucaut. « Va te coucher, demain il fera jour. » Boucaut se lève à moitié. Fargue lit la deuxième. Kerhallet se lève à moitié. À la troisième, ils se rassoient tous les deux.",
        "Il lit les neuf. Lentement, avec le nom au bout. Le cercle se tait, puis il ricane, puis il rit, d'un rire énorme, cruel, joyeux, le rire de ceux qui n'ont pas écrit contre les neuf qui ont écrit. Les neuf ne rient pas. Ils regardent le sable. Le plus honnête du camp, celui de l'espérance, est devenu gris. Puis Fargue prend son couteau, fend le sac. Il en coule des balles de plomb dorées, qui roulent dans le sable, et dont la dorure s'écaille au premier contact, comme une peau morte.",
        "Le rire s'arrête net. Ceux qui n'ont pas écrit regardent le plomb. Ils comprennent, un par un, qu'ils n'ont pas écrit parce qu'ils n'y avaient pas pensé, ou parce qu'un autre l'avait déjà fait, ou parce qu'ils ne savaient pas écrire et n'osaient pas demander. Ils comprennent qu'ils auraient écrit. Le rire meurt dans leurs gorges, et leurs yeux quittent les neuf.",
        "Le Rouzic, au bout du cercle, se lève. Il ramasse une balle dorée, la met dans sa poche, et retourne au bout de la plage. Le camp, cette nuit-là, se couche sans chanter. Le lendemain, on ne parle de rien. Mais Fargue voit, à l'heure de la soupe, Boucaut porter sa gamelle au Rouzic, en silence, et la poser à côté de lui, sur le sable, et repartir sans attendre de merci."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SO" }, back: "A4f_jours" }
      ] },
    SO_brule: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue apporte le sac au feu. Tout le camp fait cercle. Il sort de sa poche les neuf lettres, les montre, toutes, en éventail, à la lueur des flammes. Neuf hommes se raidissent. Puis Fargue se tourne, et jette les lettres dans le feu, d'un geste large, comme on sème. Le papier se tord, noircit, s'envole en flammèches. Il dit qu'aucune n'avait la bonne phrase. Il dit qu'il n'y avait pas de bonne phrase.",
        "Il fend le sac. Les balles de plomb dorées coulent dans le sable. Les hommes regardent. Ils comprennent. Le cercle gronde, puis rit, d'un rire de soulagement, parce que tout le monde, au fond, avait peur que ce soit vrai. Boucaut ramasse une balle, la mord, crache. Il dit que c'est une bonne farce, et qu'il aimerait bien savoir qui l'a faite, pour lui payer un coup. Personne ne sait. Fargue ne dit rien.",
        "Plus tard, dans la nuit, quand le camp dort, le Rouzic vient s'asseoir près du four. Il dit à Fargue qu'il lui a volé sa vengeance. Fargue dit oui. Il dit qu'une vengeance, c'est comme une soupe : ça se mange chaud ou ça ne se mange pas, et que celle-là aurait été froide dès la première cuillère, parce qu'on ne fait pas honte à neuf hommes sans s'en faire neuf ennemis. Il dit qu'il préfère que le Rouzic ait neuf hommes qui lui doivent quelque chose sans le savoir.",
        "Le Rouzic réfléchit longtemps. Puis il demande, avec une curiosité de maître d'école, si le cuisinier les a lues, lui, les lettres, avant de les brûler. Fargue sourit. Il dit qu'il a une excellente mémoire. Le Rouzic rit, pour la première fois depuis qu'on l'a tondu. Il dit que le cuisinier est le pire des deux. Fargue dit que oui, sans doute, mais qu'il fait la meilleure soupe."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SO" }, back: "A4f_jours" }
      ] },
    SO_aveu: { act: "IV", title: "Le sac de la Toussaint", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Fargue apporte le sac au feu. Il le fend d'abord, avant de rien dire. Les balles de plomb dorées coulent dans le sable. Le cercle reste muet, la bouche ouverte. Puis Fargue dit qu'il a reçu neuf lettres, et qu'il ne dira pas de qui. Il dit qu'il sait qui a cousu le sac. Il dit pourquoi.",
        "Il raconte. Le rhum de Boucaut. La tonte. Les coups. Le rhum retrouvé dans le sac de Boucaut, le surlendemain, et personne pour aller dire au Rouzic qu'on s'était trompé. Il raconte ça de sa voix de cuisinier, tranquille, en touillant le feu avec un bâton, comme une histoire de cambuse. Puis il dit : « Il voulait savoir combien d'entre vous sont des voleurs. Neuf. Moi, je trouve que pour un camp de mutins, c'est un bon score. »",
        "Le camp se tourne vers le Rouzic, au bout du cercle. Un moment, Fargue croit qu'ils vont le battre une seconde fois. Boucaut se lève, énorme. Il traverse le cercle. Il s'arrête devant le Rouzic, qui ne recule pas. Il le regarde longtemps, de haut. Puis il passe la main sur le crâne tondu de travers, rudement, comme on frotte la tête d'un chien. Il dit : « Ça repousse. » Il retourne s'asseoir.",
        "La tension tombe d'un coup. On rit. On se passe le plomb doré de main en main. On se demande, à haute voix, qui sont les neuf, et chacun jure qu'il n'en est pas, et on rit encore plus. Le Rouzic reste au bout du cercle. Il ne rit pas. Mais quelqu'un lui tend une gamelle, et il la prend. Fargue, en rentrant à son abri, brûle les neuf lettres dans son four, sans les relire. Il les connaît par cœur."
      ],
      choices: [
        { label: "Revenir au fourneau", fx: { quest: "SO" }, back: "A4f_jours" }
      ] }
  },
  extras: {
    people: {
      rouzic: { name: "Le Rouzic", qui: "Gabier maigre et taciturne, ancien maître d'école, que les mutins ont tondu et battu pour un vol qu'il n'avait pas commis." }
    },
    quests: [
      { id: "SO", act: "IV", kind: "annexe", title: "Le sac de la Toussaint", start: "SO_four", doit: "hadleyburg", echo: ["so:revele", "so:brule", "so:rouzic"] }
    ]
  }
};
