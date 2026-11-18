// L'Île Folle-Aiguille · side story « Le tablier » (owes its question to Lorenzaccio: when a man has worn a mask long
// enough, which face is left under it?). At the mutineers' camp, one night, Fargue comes back from the forest and finds
// at the fire young Mével, a Morlenc recruit, wearing his cook's apron and doing him, word for word, the ladle, the
// song, the kind voice, to the men's laughter. The imitation is perfect. Fargue steps into the light and plays himself,
// better (zp:joue), lets the men see the quartermaster under the cook (zp:masque), or sits down in the dark and asks
// Mével, later, what he saw (zp:demande). Wired in A4f_jours.
module.exports = {
  passages: {
    ZP_feu: { act: "IV", title: "Le tablier", place: "plage", ambiance: "nuit", second: true,
      fx: { meet: "mevel" },
      text: [
        "Il revient de la forêt à la nuit tombée, par le sentier du ruisseau, sans lanterne. Il entend le rire avant de voir le feu : un grand rire d'hommes, gras, généreux, comme on n'en a plus entendu au camp depuis le débarquement. Il s'arrête à la lisière, entre deux troncs, dans le noir.",
        "Autour du feu, une vingtaine d'hommes, assis dans le sable. Au milieu, debout, la louche à la main, il y a Fargue.",
        "Il y a Fargue, avec son tablier de toile, noué deux fois autour d'un ventre qu'on a rembourré d'un sac de biscuit. Il y a Fargue, qui tourne la marmite d'un geste rond, en levant le petit doigt. Il y a Fargue qui dit, de cette voix chaude et un peu traînante, en plissant les yeux : « Mange, mon agneau, mange, c'est la soupe qui fait les hommes, et les hommes qui font les soupes. » Et les hommes hurlent de rire. Et Fargue, à la lisière, dans le noir, voit Fargue, en pleine lumière, cacher sa main droite derrière son dos, trois doigts repliés, d'un geste si exact qu'il sent ses propres doigts bouger dans sa poche.",
        "C'est le petit Mével. Un gabier de vingt ans, de la rue des Cordiers, recruté à Morlenc à la dernière heure, maigre, pâle, avec une figure de fouine et un don qu'on ne lui connaissait pas. Il fait Fargue comme Fargue lui-même n'aurait pas su le faire. Il a tout pris. La louche. Le clin d'œil. La chanson, fredonnée entre deux phrases. La bonté.",
      ],
      choices: [{ label: "Regarder encore", to: "ZP_regarde" }] },
    ZP_regarde: { act: "IV", title: "Le tablier", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Mével sert la soupe, louche après louche, et à chacun il dit un mot, et c'est chaque fois le mot que Fargue aurait dit. À Malandain, une plaisanterie sur sa barbe. À Boucaut, un compliment sur ses mains. Au Hareng, un souvenir de la Maraude, inventé de toutes pièces, mais avec le ton juste, ce ton de confidence qu'on n'accorde qu'à vous. Les hommes rient, mais ils tendent leur gamelle quand même, et ils la prennent avec un petit air de gratitude, et Fargue, dans le noir, se rend compte qu'ils ne savent plus très bien qui la leur donne.",
        "Puis Mével pose la louche. Il se redresse. Il change de visage. Pas beaucoup : un rien, le menton, les yeux qui cessent de plisser. Il dit, de la même voix, plus bas, sans traîner du tout : « Et si l'un de vous me fait défaut, mon agneau, je le mangerai moi-même. Avec des oignons. » Personne ne rit. Il y a un silence. Puis quelqu'un rit, trop tard, et tous les autres rient avec lui, très fort, pour couvrir le silence.",
        "Fargue reste à la lisière. Il a, pour la première fois depuis vingt ans, la sensation de se voir de dos. Il se demande lequel des deux visages le petit a trouvé le plus difficile à imiter. Il se demande lequel il a imité en dernier, et pourquoi.",
      ],
      choices: [
        { label: "Entrer dans la lumière en riant, prendre la louche, et faire Fargue mieux que lui", fx: { flag: "zp:joue" }, to: "ZP_joue" },
        { label: "Entrer dans la lumière sans sourire, et laisser le camp voir l'autre visage", fx: { flag: "zp:masque" }, to: "ZP_masque" },
        { label: "S'asseoir dans le noir, et attendre que le petit soit seul", fx: { flag: "zp:demande" }, to: "ZP_demande" },
      ] },
    ZP_joue: { act: "IV", title: "Le tablier", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il entre dans la lumière en riant, de son grand rire de cambuse, les bras ouverts. Les hommes se retournent. Mével devient blanc sous la suie. Fargue lui prend la louche des mains, doucement, comme on prend un jouet à un enfant, et lui donne une claque sur l'épaule qui le fait vaciller. « Pas mal, mon agneau. Pas mal du tout. Mais tu as oublié une chose. »",
        "Il goûte la soupe. Il fait la grimace. Il ajoute du sel, du poivre, une poignée d'herbes sèches qu'il tire de sa poche, et il tourne, et il goûte encore, et il hoche la tête. « Le vrai, dit-il, il sait cuisiner. » Les hommes hurlent de rire, plus fort qu'avant. Il sert la soupe lui-même, louche après louche, et à chacun il dit un mot, et c'est chaque fois un meilleur mot que celui de Mével.",
        "Il garde Mével à côté de lui toute la soirée, le bras sur ses épaules, comme un fils. Il lui fait chanter la chanson, avec lui, en canon. Il le fait rire. À minuit, quand le camp dort, il lui dit à l'oreille, toujours souriant, de sa voix chaude : « La prochaine fois, petit, fais-moi seulement la soupe. Le reste, c'est à moi. » Mével hoche la tête. Il tremble un peu. Il ne refera jamais Fargue.",
        "Fargue, en se couchant, se dit qu'il a gagné, et qu'il a joué ce soir-là le meilleur rôle de sa vie, et qu'il ne se souvient plus très bien quand il a cessé de le jouer, ni s'il l'a jamais cessé.",
      ],
      choices: [{ label: "Dormir", fx: { quest: "ZP" }, back: "A4f_jours" }] },
    ZP_masque: { act: "IV", title: "Le tablier", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il entre dans la lumière, le visage fermé, les yeux grands ouverts. Il marche jusqu'au feu, de son pas lourd, et les rires s'arrêtent un à un, comme des chandelles qu'on souffle, à mesure qu'il passe. Il s'arrête devant Mével. Il le regarde. Il tend la main, la main à trois doigts, sans la cacher, paume ouverte.",
        "Mével lui donne la louche. Puis il dénoue le tablier, en tremblant, et le lui donne aussi. Fargue le noue autour de sa taille, deux fois, lentement. Puis il s'assied sur un tonneau, à côté de la marmite, et il regarde le feu, et il dit, sans élever la voix, avec ce ton plat que seuls connaissent les anciens de la Maraude : « La soupe est prête. Mangez. »",
        "Ils mangent. En silence. Le Hareng, qui était sur la Maraude, a baissé les yeux sur sa gamelle dès qu'il a entendu le ton. Les jeunes regardent Fargue à la dérobée, comme on regarde un chien qu'on croyait connaître et qui vient de montrer les dents. Le rire est mort pour la soirée. Et de toute la semaine, chaque ordre est suivi à la lettre.",
        "Fargue sait qu'il a perdu quelque chose. Il ne sait pas encore quoi. Il le saura plus tard, quand il voudra redevenir le bon cuisinier, mon agneau, la louche, le clin d'œil, et qu'il s'apercevra que les hommes, désormais, voient les deux visages à la fois, et ne croient plus à aucun.",
      ],
      choices: [{ label: "Dormir", fx: { quest: "ZP" }, back: "A4f_jours" }] },
    ZP_demande: { act: "IV", title: "Le tablier", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il attend dans le noir que le feu baisse et que le camp s'endorme. Vers minuit, Mével vient se laver la figure au ruisseau, le tablier encore noué autour de la taille, et il se retourne d'un bloc quand Fargue sort de l'ombre, à trois pas, en silence. Il ouvre la bouche pour s'excuser. Fargue lève la main.",
        "« Ça ne me fâche pas, dit-il. Je veux seulement savoir une chose. Tu m'as regardé pendant six semaines, pour faire ça. Mieux que personne. Mieux que moi. » Il s'assied sur une pierre, au bord de l'eau. « Alors dis-moi. Lequel est le vrai ? »",
        "Mével le regarde longtemps, avec ses yeux de fouine, dans le clair de lune. Il réfléchit. On voit qu'il réfléchit pour de bon, qu'il ne cherche pas à plaire. Puis il dit, lentement : « Celui de la soupe, je l'ai appris en trois jours. L'autre, celui des oignons, je l'ai appris en une seconde. Je l'ai vu une fois, à bord, un soir où un matelot a renversé votre soupe exprès, et où vous l'avez regardé ramasser la gamelle. » Il hésite. « Mais c'est le premier que les hommes aiment. Et c'est le premier que vous faites quand vous croyez que personne ne regarde. Je vous ai vu, avec le petit mousse, et le soir où vous avez parlé de votre fille, à la cambuse. »",
        "Fargue reste assis sur sa pierre après que le petit est parti se coucher. Il écoute le ruisseau. Il se dit qu'il a posé la question à la seule personne au monde qui pouvait y répondre, et qu'elle y a répondu, et qu'il n'en sait pas plus. Il se dit aussi qu'il faudra surveiller ce Mével. Il se dit les deux choses à la fois, et il ne sait pas lequel des deux Fargue le pense.",
      ],
      choices: [{ label: "Dormir", fx: { quest: "ZP" }, back: "A4f_jours" }] },
  },
  extras: {
    people: {
      mevel: { name: "Yvon Mével", aka: ["le petit Mével"], qui: "Gabier de vingt ans, de la rue des Cordiers, recruté à Morlenc à la dernière heure ; un don pour l'imitation." },
    },
    quests: [
      { id: "ZP", act: "IV", kind: "annexe", title: "Le tablier", start: "ZP_feu", doit: "lorenzaccio", echo: ["zp:joue", "zp:masque", "zp:demande"] },
    ],
  },
};
