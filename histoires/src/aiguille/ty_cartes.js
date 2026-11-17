// L'Île Folle-Aiguille · side story « Trois cartes » (owes its question to Pushkin's The Queen of Spades: what does a man
// become when he believes in a secret that wins every time, and is it kinder to give it to him or take it away?). Act
// II, Fargue at Morlenc: at the café des Navigateurs, a pale lieutenant of engineers watches the faro table every night
// without playing. He has heard that an old countess of the Haute-Ville knows three cards that never lose. He asks the
// cook, who has the reputation of having known gamblers, how one makes an old woman talk. Fargue goes to see the
// countess himself, and learns the truth of the three cards. He gives them to the lieutenant (ty:cartes), plays him
// at his own game and wins everything before returning it (ty:joue), or warns the countess's household (ty:comtesse).
// Wired in XR_jours.
module.exports = {
  passages: {
    TY_pale: { act: "II", title: "Trois cartes", place: "quai_hollandes", ambiance: "nuit", second: true,
      fx: { meet: "ansquer" },
      text: [
        "Au café des Navigateurs, dans l'arrière-salle, il y a une table de pharaon où les armateurs perdent, le soir, ce qu'ils ont gagné le jour sur les naufrages des autres. Et chaque soir, debout contre une colonne, il y a le même jeune homme, en uniforme de lieutenant du génie, pâle comme un cierge, qui regarde les cartes tomber jusqu'à deux heures du matin, et qui ne joue jamais.",
        "Fargue le remarque le deuxième soir. Le troisième, il lui apporte un café. Le jeune homme le prend sans le regarder. Il dit, les yeux sur le tapis vert : « On m'a dit que vous aviez connu des joueurs, autrefois. De vrais joueurs. Sur des navires où l'on jouait sa part. »",
        "Fargue dit qu'on dit beaucoup de choses.",
        "Le jeune homme se tourne vers lui. Il a des yeux noirs, fixes, brûlants, des yeux de fièvre lente, qui ne cillent pas. Il s'appelle Théodule Ansquer. Il a vingt-six ans, une solde de lieutenant, un père qui lui a appris que le jeu est un vice, et un héritage de huit cents livres qu'il n'a jamais touché, parce qu'on ne risque pas le nécessaire pour gagner le superflu. Il dit cela comme une leçon apprise. Puis il dit autre chose."
      ],
      choices: [
        { label: "L'écouter", to: "TY_secret" }
      ] },
    TY_liberte: { act: "II", title: "Trois cartes", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        "Le lieutenant le regarde comme si la question était absurde. Puis il réfléchit, et l'on voit qu'il n'y a jamais réfléchi.",
        "Une maison, dit-il. Une maison à lui. Avec un jardin clos. Des livres. Des matins sans clairon, des jours sans colonel, et plus jamais les lettres mensuelles d'un père qui demande s'il économise. Il se tait. Il cherche autre chose, en vain. Il recommence : une maison, un jardin, des livres.",
        "« Et dans le jardin ? » demande Fargue.",
        "Ansquer ouvre la bouche. Il la referme. Il regarde le tapis vert, où le banquier ramasse les mises avec un petit râteau d'ivoire. « Je ne sais pas, dit-il. Je verrai. Il faut d'abord les cartes. » Ses yeux reviennent au tapis, comme une aiguille de compas revient au nord.",
        "Fargue pense qu'il a connu des hommes qui voulaient l'or pour ce qu'il achète, et d'autres qui le voulaient pour lui-même, et que les seconds étaient toujours les plus dangereux, parce qu'ils ne s'arrêtaient jamais d'avoir soif."
      ],
      choices: [
        { label: "Revenir à la table de pharaon", back: "TY_secret" }
      ] },
    TY_secret: { act: "II", title: "Trois cartes", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        { first: true, text: "« Il y a, dans la Haute-Ville, une vieille femme, la comtesse de Trolong. Elle a quatre-vingt-quinze ans. Il y a soixante ans, à la cour, elle a perdu au jeu une somme énorme, une fortune, en une nuit. Le lendemain, elle a tout regagné. En trois cartes. Trois cartes de suite, sur lesquelles elle a tout misé, et qui sont sorties. On dit qu'un homme lui a donné le secret. Un aventurier, un alchimiste, un diable, on ne sait pas. Elle l'a gardé pour elle, même devant ses fils, qui se sont ruinés au jeu. »" },
        { first: true, text: "Il serre la tasse de café si fort que Fargue craint pour la porcelaine." },
        { first: true, text: "« Trois cartes. Avec trois cartes, je triple mon héritage, je quadruple, je le multiplie par sept. Je quitte l'armée. J'ai une maison. Je suis libre. Il suffit qu'elle parle. Elle a quatre-vingt-quinze ans, à quoi lui sert le secret ? Elle va mourir avec. C'est un crime, monsieur. C'est un gaspillage. »" },
        { first: true, text: "Il se penche. « Vous savez faire parler les gens. Ça se voit. Dites-moi comment on fait parler une vieille femme. »" },
        { first: true, text: "Fargue le regarde. Il a vu, dans sa vie, beaucoup d'hommes qui voulaient quelque chose. Il en a vu très peu qui le voulaient avec des yeux pareils." },
        { again: true, text: "Le lieutenant fixe le tapis vert, la tasse refroidie entre ses mains." }
      ],
      choices: [
        { label: "Lui demander ce qu'il ferait de sa liberté", to: "TY_liberte", hide: { seen: "TY_liberte" } },
        { label: "Aller voir lui-même la comtesse, le lendemain", to: "TY_comtesse" }
      ] },
    TY_portrait: { act: "II", title: "Trois cartes", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Au-dessus de la cheminée, dans un cadre doré écaillé, il y a un grand portrait. Une jeune femme de vingt ans, en robe de cour couleur de pêche, poudrée, avec une mouche au coin des lèvres et un éventail fermé à la main, qui regarde le peintre avec une insolence délicieuse.",
        "Derrière elle, dans la pénombre du tableau, à peine esquissé, on devine un homme. Un homme brun, en habit sombre, assis à une table de jeu, qui ne regarde pas le peintre. Il regarde la jeune femme. Il tient à la main, négligemment, trois cartes, dont on ne voit que le dos.",
        "« Il a voulu être dans le tableau, dit la comtesse derrière Fargue, de sa voix de crécelle. Le peintre ne voulait pas. Mon mari non plus. Il a payé le peintre, alors, pour qu'il le mette dans le noir, au fond, là où mon mari ne regarderait pas. Il ne l'a jamais vu. Personne ne le voit. Vous, vous l'avez vu tout de suite. »",
        "Elle rit. Elle mange un autre feuilleté. « Les cuisiniers ont l'œil, dit-elle. C'est le métier : on voit ce qu'il y a dans la sauce. »"
      ],
      choices: [
        { label: "Revenir près de son fauteuil", back: "TY_comtesse" }
      ] },
    TY_comtesse: { act: "II", title: "Trois cartes", place: "haute_ville", ambiance: "ville", second: true,
      fx: { meet: "trolong" },
      text: [
        { first: true, text: "Il y va le lendemain, par la porte de service, avec un panier de pâtisseries qu'il a faites lui-même, des feuilletés à l'ancienne, comme on en servait à la cour il y a soixante ans. Il demande à les offrir à madame la comtesse, de la part d'un admirateur. Une jeune femme maigre, en robe grise, sa dame de compagnie, Ysolde, le regarde avec méfiance, puis le fait monter." },
        { first: true, text: "La comtesse de Trolong est assise dans un grand fauteuil, devant une glace, au milieu d'un salon où tout a cent ans : les tapisseries, les pendules, les chiens empaillés, la poudre. Elle est petite, voûtée, jaune, couverte de dentelles et de rubans, avec un visage de momie fardée et une perruque à l'ancienne. Ses yeux sont vides. Puis elle goûte un feuilleté, et ses yeux s'allument." },
        { first: true, text: "Elle parle. Elle parle de la cour, des bals, des hommes, pendant une heure, d'une voix de crécelle. Fargue écoute. Il ramène, doucement, la conversation vers le jeu. Elle rit, d'un rire de squelette." },
        { first: true, text: "« Les trois cartes ? Tout le monde veut les trois cartes. Mes fils les voulaient. Ils m'ont reniée parce que je ne les ai pas données. Je vais vous les dire, à vous, cuisinier, parce que vous faites le feuilleté comme on le faisait de mon temps. Le trois. Le sept. L'as. » Elle rit encore. « Et l'homme qui tenait la banque, cette nuit-là, était mon amant. Il trichait pour moi. Voilà le secret. Sans lui, mes cartes ne valent rien. Il est mort il y a cinquante ans. Le secret est mort avec lui. Je ne l'ai jamais dit à mes fils. Ça leur aurait fait trop de peine d'apprendre que leur mère avait été heureuse. »" },
        { first: true, text: "En sortant, dans l'escalier, Ysolde le retient par la manche. « Il y a un officier, dit-elle très bas. Il passe sous les fenêtres tous les soirs. Il m'écrit des lettres. Il m'a demandé la clef de la porte du jardin. Je crois qu'il m'aime. » Elle rougit. « Vous qui êtes un homme d'expérience : est-ce que je dois la lui donner ? »" },
        { again: true, text: "La comtesse grignote un feuilleté, devant sa glace. Ysolde attend sur le palier." }
      ],
      choices: [
        { label: "Regarder, avant de partir, le portrait au-dessus de la cheminée", to: "TY_portrait", hide: { seen: "TY_portrait" } },
        { label: "Rapporter les trois cartes au lieutenant, telles quelles", fx: { flag: "ty:cartes" }, to: "TY_cartes" },
        { label: "Proposer au lieutenant une partie, et lui prendre tout ce qu'il a", fx: { flag: "ty:joue" }, to: "TY_joue" },
        { label: "Dire à Ysolde ce que veut vraiment l'officier", fx: { flag: "ty:comtesse" }, to: "TY_ysolde" }
      ] },
    TY_cartes: { act: "II", title: "Trois cartes", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        "Le soir, au café, il donne les trois cartes au lieutenant. Le trois, le sept, l'as. Le reste, il le garde. Il se dit qu'un homme qui veut un secret à ce point-là mérite de l'avoir, et d'apprendre ce qu'il vaut, et qu'aucun discours ne lui apprendra aussi vite qu'un tapis vert.",
        "Ansquer pâlit encore, si c'est possible. Il ne remercie pas. Il court.",
        "Le lendemain, il mise ses huit cents livres sur le trois. Le trois sort. Il double. Le surlendemain, il mise tout sur le sept. Le sept sort. Tout le café des Navigateurs se presse autour de la table de pharaon, debout sur les chaises. Le troisième soir, il mise tout, trois mille deux cents livres, sur l'as.",
        "Fargue est là, contre la colonne, à sa place. Il regarde le banquier, un gros homme placide, qui tire les cartes. Il voit ses mains. Il voit, à un petit mouvement du pouce, ce que le lieutenant ne verra jamais. La carte tombe : une dame. La dame de pique.",
        "Ansquer la regarde. Il la regarde longtemps. Puis il dit, d'une voix d'enfant, qu'elle lui a fait un clin d'œil. La dame. Qu'elle lui a souri. Il rit. Il ne s'arrête plus de rire. On l'emmène.",
        "Fargue paie son café. Il pense que les deux premières cartes, la maison les lui a laissé gagner pour le ferrer. Il pense que la vieille comtesse avait raison : sans un homme qui triche pour vous, les cartes ne valent rien. Avec un homme qui triche contre vous, elles valent tout ce que vous avez."
      ],
      choices: [
        { label: "Retourner aux préparatifs", fx: { quest: "TY" }, back: "XR_jours" }
      ] },
    TY_joue: { act: "II", title: "Trois cartes", place: "quai_hollandes", ambiance: "nuit", second: true,
      text: [
        "Le soir, au café, il s'assied en face du lieutenant, à une petite table, et pose dessus un jeu de cartes neuf. Il dit qu'il a le secret. Il dit qu'il le lui vendra, s'il le gagne. Une partie de pharaon, à deux, lui banquier, l'autre ponte. Ansquer mise ses huit cents livres. Il a les mains qui tremblent.",
        "Fargue tient la banque. Il tient la banque comme on la tenait, il y a vingt ans, dans l'entrepont d'un certain navire, à la lanterne, pour des hommes qui avaient des couteaux. Il ne triche pas, ou presque. Il n'a pas besoin. Ansquer mise sur des cartes qu'il croit inspirées, et qui ne le sont pas. En une heure, il a tout perdu. Les huit cents livres, sa montre, son épée.",
        "Il reste assis, devant le tapis vide, blanc comme une nappe. Il dit qu'il va se tuer. Il le dit très calmement.",
        "Fargue pousse vers lui, sur la table, toute la pile. L'argent, la montre, l'épée. « Il n'y a pas de secret, dit-il. Il y avait un homme qui trichait pour elle. Il est mort. Ce soir, c'était moi. Demain, ce sera le banquier, et il trichera contre vous. Reprenez votre argent, lieutenant. Achetez une maison. Épousez la petite en gris qui vous écrit. Et ne mettez plus les pieds dans cette salle. »",
        "Ansquer prend l'argent. Il regarde Fargue avec une haine profonde, la haine qu'on garde pour ceux qui vous ont sauvé de vous-même et qui l'ont vu. Il s'en va sans un mot. Fargue rentre à la Cormorane en sifflant un air de quart, un air qu'il n'avait pas sifflé depuis longtemps."
      ],
      choices: [
        { label: "Retourner aux préparatifs", fx: { quest: "TY" }, back: "XR_jours" }
      ] },
    TY_ysolde: { act: "II", title: "Trois cartes", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Il s'assied avec elle sur une marche de l'escalier. Il lui dit, aussi doucement qu'il peut, ce qu'il sait : le lieutenant au café, le pharaon, les yeux fixes, les trois cartes. Il lui dit que la clef du jardin ouvre la chambre de la comtesse, et que l'officier en veut à la chambre bien plus qu'à la dame de compagnie.",
        "Ysolde l'écoute sans pleurer. Elle a l'habitude, dit-elle. Les gens qui viennent dans cette maison veulent toujours la comtesse, à travers elle. Les fils, les neveux, les héritiers. Elle croyait qu'une fois, pour une fois, quelqu'un était venu pour elle. Elle se trompait. Elle remercie Fargue, très poliment, avec ses mains croisées sur sa robe grise.",
        "Le soir même, la porte du jardin est verrouillée à double tour. Le lieutenant Ansquer attend sous les fenêtres jusqu'à trois heures du matin. Il ne reçoit plus de lettres.",
        "Fargue sait seulement qu'il a laissé à une vieille femme un secret qui n'en était pas un, et qu'il a pris à une jeune fille une illusion qui en était une. Il se demande lequel des deux vaut le plus cher, au pharaon."
      ],
      choices: [
        { label: "Retourner aux préparatifs", fx: { quest: "TY" }, back: "XR_jours" }
      ] }
  },
  extras: {
    people: {
      ansquer: { name: "Théodule Ansquer", aka: ["le lieutenant pâle"], qui: "Lieutenant du génie à Morlenc, vingt-six ans, qui regarde chaque soir la table de pharaon des Navigateurs sans jamais jouer." },
      trolong: { name: "la comtesse de Trolong", aka: ["la vieille comtesse"], f: true, qui: "Comtesse de la Haute-Ville, quatre-vingt-quinze ans, qui a regagné une fortune en trois cartes, il y a soixante ans." }
    },
    quests: [
      { id: "TY", act: "II", kind: "annexe", title: "Trois cartes", start: "TY_pale", doit: "damepique", echo: ["ty:cartes", "ty:joue", "ty:comtesse"] }
    ]
  }
};
