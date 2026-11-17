// L'Île Folle-Aiguille · side story « La signature d'Enora » (owes its question to A Doll's House: what is a marriage
// worth when it rests on a life saved in secret, and on a lie?). Act III, Lannoz: Enora Le Ny, wife of the harbour
// master Edern Le Ny, borrowed three hundred livres two years ago from Rouxel, the harbour clerk, to take her husband,
// dying of a lung fever, to winter on the warm coast. She forged her dead father's signature as surety. Edern believes
// the money came from an inheritance. Now he means to dismiss Rouxel for fiddling the dues; Rouxel threatens to reveal
// the forgery. Enora asks Victorine, a stranger who sails in two days, for help. First Victorine goes to Rouxel
// (VI_rouxel) or advises Enora to tell her husband herself (VI_aveu). Then: plead for Rouxel (vi:plaide) or defy him
// (vi:defie); stay in the room as a witness (vi:temoin) or leave the couple alone (vi:seuls). Wired in A3x_lannoz.
module.exports = {
  passages: {
    VI_enora: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "village",
      fx: { meet: "enora" },
      text: [
        "La maison du maître de port est la seule de Lannoz qui ait un étage et des rideaux. On y fait entrer Victorine sous prétexte d'une toux d'enfant. Il n'y a pas d'enfant qui tousse. Il y a une jeune femme de vingt-six ans, blonde, vive, jolie, en robe de laine claire, qui ferme la porte du salon à clef, s'adosse contre elle, et se met à rire, d'un rire nerveux, aigu, qui se casse au milieu. « Pardonnez-moi, docteur. Je n'ai personne d'autre. Vous partez après-demain. C'est pour ça. »",
        "Elle s'appelle Enora Le Ny. Elle raconte vite, en marchant de long en large, en tripotant un ruban, comme une enfant qui avoue une bêtise et qui en est un peu fière. Il y a deux ans, son mari, Edern, le maître de port, a eu une fièvre de poitrine. Le médecin de l'île a dit qu'il mourrait s'il passait l'hiver dans la bruine de Lannoz, et qu'il lui fallait le soleil d'une côte chaude, six mois, au moins. Ils n'avaient pas l'argent. Edern, qui est fier, aurait préféré mourir qu'emprunter. Alors elle a emprunté, sans lui. Trois cents livres. À Rouxel, le commis du port, qui prête à la petite semaine.",
        "Il fallait une caution. Son père venait de mourir. Elle a signé pour lui, de sa main, en imitant son écriture, et elle a daté le papier, sans y penser, trois jours après l'enterrement. Edern a guéri au soleil. Il croit que l'argent venait de l'héritage. Elle a remboursé, sou par sou, en deux ans, sur l'argent du ménage, en faisant de la couture la nuit. Il ne lui reste que vingt livres à rendre. Elle rit encore. « Je l'ai sauvé, docteur. Toute seule. Il ne le sait pas. C'est mon secret à moi. C'est la seule chose que j'aie jamais faite toute seule. »",
      ],
      choices: [{ label: "Lui demander ce qui ne va pas, alors", to: "VI_menace" }] },
    VI_menace: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "village",
      text: [
        "Le rire s'arrête. Ce qui ne va pas, c'est que Edern a découvert que Rouxel trichait sur les droits de port, depuis des années, quelques sous par navire. Il va le renvoyer, demain, devant tout le monde. Il en parle à table avec une indignation magnifique : un homme qui a falsifié une écriture, dit-il, a l'âme pourrie jusqu'à la racine, et il empoisonne tout ce qu'il touche, sa maison, ses enfants. Enora, en face de lui, sourit et sert la soupe.",
        "Et Rouxel est venu la voir, hier, par la porte de la cuisine. Il a gardé le papier. La reconnaissance, avec la signature du mort, et la date. Il ne veut pas d'argent. Il veut sa place. Si elle n'obtient pas de son mari qu'il le garde, il montrera le papier, à Edern, au recteur, à toute l'île. Il a dit qu'un faussaire en reconnaît un autre, et qu'ils feraient bien de s'entendre.",
        "Enora s'est assise. Elle ne rit plus du tout. Elle demande à Victorine ce qu'elle doit faire. Elle demande aussi, très bas, si c'est vrai, ce que dit Edern : que ces gens-là empoisonnent tout ce qu'ils touchent. Elle a deux enfants, qui dorment à l'étage. Victorine pense à Hector, qui imitait sa signature mieux qu'elle, et dont elle paie encore les dettes. Elle pense que la vie a un goût bien lourd pour les plaisanteries.",
      ],
      choices: [
        { label: "Aller voir Rouxel, ce soir, à sa place", to: "VI_rouxel" },
        { label: "Lui conseiller de tout dire à son mari, elle-même, avant Rouxel", to: "VI_aveu" },
      ] },
    VI_rouxel: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "nuit",
      text: [
        "Rouxel habite une maison basse, derrière la cale, qui sent le poisson et l'encre. C'est un homme de quarante ans, maigre, gris, avec des manchettes de lustrine et des yeux de chien battu qui n'ont pas renoncé à mordre. Il fait entrer Victorine sans surprise. Il savait qu'elle viendrait, ou que quelqu'un viendrait. Il lui offre la seule chaise. Dans la pièce du fond, un enfant tousse, et cette fois c'est vrai.",
        "Il ne nie rien. Il dit qu'il a triché sur les droits, oui, quelques sous, pour payer le médecin de son fils. Il dit qu'il a fait un faux, il y a quinze ans, à Morlenc, pour la même raison, et qu'on l'a chassé de partout, et qu'il est venu au bout du monde, à Lannoz, et qu'il recommençait à être un homme quand le maître de port a décidé de le juger. Il montre le papier d'Enora, sans le lâcher. « Elle et moi, docteur, nous avons fait la même chose, pour la même raison. Lui, il la garde, et moi, il me jette. Expliquez-moi la différence. »",
        "Victorine cherche la différence. Elle finit par la trouver, très mince, et elle tient peut-être à ceci : Enora n'a jamais menacé personne. Rouxel attend sa réponse, en tenant le papier entre deux doigts, au-dessus de la chandelle, comme s'il hésitait lui-même à le brûler ou à le lire à voix haute.",
      ],
      choices: [
        { label: "Lui promettre de plaider sa cause auprès du maître de port", fx: { flag: "vi:plaide" }, to: "VI_plaide" },
        { label: "Lui dire de montrer le papier s'il veut : elle témoignera, elle aussi, de ce qu'il fait", fx: { flag: "vi:defie" }, to: "VI_defie" },
      ] },
    VI_plaide: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "village",
      text: [
        "Le lendemain, elle va voir Edern Le Ny à la capitainerie. C'est un bel homme de trente-cinq ans, droit, propre, qui parle de l'honneur avec la conviction des gens qui n'ont jamais eu à le mettre en gage. Elle lui parle de Rouxel. De l'enfant qui tousse. Des quelques sous. Elle lui dit, en médecin, qu'on ne guérit pas un homme en le jetant dehors. Il l'écoute avec courtoisie. Puis, à sa grande surprise, il cède. Il gardera Rouxel, à l'essai, sous surveillance. Il dit qu'une femme de cœur a parlé, et qu'il est heureux d'avoir été convaincu.",
        "Le soir, Rouxel fait porter chez les Le Ny, par son fils, une enveloppe pour Madame. Dedans, il y a la reconnaissance, déchirée en deux. Enora la brûle dans le poêle de la cuisine, en riant et en pleurant, et elle embrasse Victorine sur les deux joues, et elle danse un peu, seule, au milieu de la cuisine. Le secret est sauf. Edern n'en saura jamais rien.",
        "En partant, sur le seuil, Victorine voit Enora à travers la fenêtre du salon, assise en face de son mari, qui lui parle avec tendresse, en lui tenant la main, comme on parle à une enfant adorable qui n'a jamais rien fait de sérieux de sa vie. Enora sourit. Elle a sauvé cet homme, et elle continuera de sourire en l'entendant lui expliquer le monde. Victorine se demande si elle a sauvé un mariage ou seulement scellé une porte. Elle remonte à bord sans avoir trouvé la réponse.",
      ],
      choices: [{ label: "Regagner le canot", fx: { quest: "VI" }, back: "A3x_lannoz" }] },
    VI_defie: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle lui dit qu'il peut montrer le papier. Que s'il le fait, elle ira trouver le maître de port à son tour, et lui dira, en médecin, ce que ce papier a acheté : la vie de Edern Le Ny. Et qu'elle dira aussi, devant tout Lannoz, ce qu'est un homme qui fait chanter une femme avec la signature d'un mort. Rouxel la regarde longtemps. Puis il sourit, d'un sourire triste et sans malice. « Vous avez du courage, docteur. Moi, je n'ai plus que ça. » Il range le papier dans sa poche.",
        "Il le montre le lendemain matin. Victorine l'apprend à midi, quand Enora la fait chercher. Edern a tout lu. Il a crié. Il a dit qu'elle l'avait déshonoré, qu'elle avait fait de lui l'obligé d'un faussaire, qu'on ne pouvait pas laisser une femme pareille élever ses enfants. Puis Victorine est arrivée, et a dit, devant lui, ce que l'argent avait payé : le soleil, six mois, ses poumons. Edern a pâli. Il s'est tu. Le soir, Rouxel a quitté son poste, avec son fils, sur un caboteur, pour une autre île.",
        "Et le maître de port a fait ce que font les hommes d'honneur quand l'honneur coûte cher : il a arrangé les choses. Il est allé chez Rouxel à la nuit, avec une bourse, et il a payé son passage, et celui de l'enfant, et trois mois de gages, contre le papier, et contre le silence. Il a rapporté le papier à sa femme, plié, sans un mot, et il l'a posé sur la table, et il est allé se coucher. Il n'en a plus parlé. Il a recommencé, au dîner, à expliquer à Enora le prix du sel et la marche des marées. Enora dit à Victorine, le lendemain, sur la cale, en lui serrant la main : « Il a payé Rouxel pour qu'il se taise, docteur. Exactement comme Rouxel me faisait payer. Il ne voit pas la ressemblance. Moi, je ne vois plus qu'elle. » Elle a un visage que Victorine ne lui connaissait pas.",
      ],
      choices: [{ label: "Regagner le canot", fx: { quest: "VI" }, back: "A3x_lannoz" }] },
    VI_aveu: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "village",
      text: [
        "Elle lui dit que Rouxel tient le papier, mais que la vérité, elle, appartient à Enora. Que la dire la première, c'est la garder à soi, et que la laisser dire par un maître chanteur, c'est la perdre deux fois. Enora l'écoute, pâle. Elle dit qu'elle n'a jamais rien dit d'important à son mari, de toute sa vie. Puis elle dit : « Ce soir. » Puis elle demande, d'une petite voix, si Victorine voudra bien être là.",
        "Edern rentre à huit heures, de belle humeur, avec un journal sous le bras et une plaisanterie sur le temps. Il trouve dans son salon sa femme, debout, très droite, et la médecin du navire, assise près du poêle. Il s'étonne. Il demande si l'un des enfants est malade. Enora dit que non. Elle dit qu'elle a quelque chose à lui dire, et qu'elle a demandé au docteur de rester. Puis elle se tourne vers Victorine, et Victorine comprend que le choix lui revient : rester, ou s'en aller.",
      ],
      choices: [
        { label: "Rester, comme témoin, sans rien dire", fx: { flag: "vi:temoin" }, to: "VI_temoin" },
        { label: "Se lever, et les laisser seuls", fx: { flag: "vi:seuls" }, to: "VI_seuls" },
      ] },
    VI_temoin: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "village",
      text: [
        "Elle reste. Enora parle, et parle bien, d'une voix qui tremble au début et qui se raffermit à mesure. La fièvre, le soleil, Rouxel, la signature du mort, les nuits de couture, les vingt livres qui restent. Edern écoute, debout, son journal à la main. À deux reprises, il ouvre la bouche pour crier. À deux reprises, il regarde Victorine, assise près du poêle, avec sa sacoche sur les genoux, et il referme la bouche. On ne crie pas devant un témoin. On réfléchit.",
        "Quand Enora a fini, il pose le journal. Il demande à Victorine, d'une voix blanche, si c'est vrai, qu'il serait mort. Victorine dit que c'est probable. Il s'assied. Il reste longtemps les coudes sur les genoux, la tête dans les mains. Puis il dit, sans relever la tête, à sa femme : « Pourquoi ne me l'as-tu pas dit ? » Elle dit : « Parce que tu m'aurais empêchée. » Il dit : « Oui. » C'est tout. C'est beaucoup.",
        "Rouxel est renvoyé le lendemain, mais Edern lui paie lui-même trois mois de gages, et le passage de son fils chez un médecin de Morlenc. Il ne s'en vante pas. Il paie aussi les vingt livres qui restaient. En raccompagnant Victorine au canot, Enora lui dit qu'elle ne sait pas si son mari l'aime davantage ou moins, ce soir. Elle sait qu'il la regarde, pour la première fois, comme quelqu'un qui pourrait le surprendre. Elle dit que c'est un commencement, et qu'elle a vingt-six ans, et qu'elle a le temps.",
      ],
      choices: [{ label: "Regagner le canot", fx: { quest: "VI" }, back: "A3x_lannoz" }] },
    VI_seuls: { act: "III", title: "La signature d'Enora", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle se lève. Elle dit que ce qui va se dire ici appartient à deux personnes, et qu'elle n'en fait pas partie. Enora la regarde partir avec une panique d'enfant, puis se redresse. La porte se ferme. Victorine attend dans la rue, sous la bruine, adossée au mur d'en face, sa sacoche à la main, comme on attend à la porte d'une salle d'opération. Derrière les rideaux, des ombres. Pendant longtemps, rien. Puis la voix de Edern, très forte. Puis plus rien.",
        "La porte se rouvre une heure plus tard. C'est Enora, seule, en châle, les yeux secs. Elle traverse la rue. Elle dit qu'il a crié, qu'il a parlé de déshonneur, qu'il a dit qu'elle n'était pas digne d'élever ses enfants, et qu'elle l'a laissé dire jusqu'au bout. Puis elle lui a dit qu'il serait mort. Il ne l'a pas crue. Elle lui a montré la date, sur le double de la quittance du médecin de la côte chaude. Il a compris. Il est assis dans le salon, maintenant, sans lampe.",
        "Elle dit à Victorine qu'elle va dormir chez sa sœur, cette nuit, avec les enfants. Peut-être plusieurs nuits. Elle ne sait pas. Elle dit qu'elle a toujours eu peur qu'il apprenne, et que maintenant qu'il sait, elle n'a plus peur de rien, et que c'est une sensation tout à fait nouvelle, comme de marcher sur la lande par grand vent. Elle remercie Victorine d'être partie. Elle dit que si elle était restée, il aurait été plus poli, et qu'elle n'aurait jamais su ce qu'il pensait vraiment.",
      ],
      choices: [{ label: "Regagner le canot", fx: { quest: "VI" }, back: "A3x_lannoz" }] },
  },
  extras: {
    people: {
      enora: { name: "Enora Le Ny", aka: ["la femme du maître de port"], f: true, qui: "Épouse du maître de port de Lannoz." },
    },
    quests: [
      { id: "VI", act: "III", kind: "annexe", title: "La signature d'Enora", start: "VI_enora", doit: "maisonpoupee", echo: ["vi:plaide", "vi:defie", "vi:temoin", "vi:seuls"] },
    ],
  },
};
