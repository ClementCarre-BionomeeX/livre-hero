// L'Île Folle-Aiguille · side story « L'homme de l'Alcyon » (owes its question to Conrad's The Secret Sharer: would you
// hide a man who has killed, because you recognize yourself in him?). Act III, the mousse in the calm: on the middle
// watch, a naked man hangs from the anchor chain. He is Yves Gourlaouen, mate of the Alcyon, a merchantman becalmed two
// miles off. Three days ago he struck down a drunken boatswain who was beating a ship's boy with a rope's end; the man
// fell against the windlass and did not get up. His captain put him in irons, to hand him to the law at the first port.
// He broke out and swam two miles through the weed. The child hides him in the sail locker (tb:cache), calls the officer
// of the watch (tb:quart), or gives him water, bread and a cork float, and lets the sea decide (tb:flotteur).
// Wired in A3n_jours.
module.exports = {
  passages: {
    TB_chaine: { act: "III", title: "L'homme de l'Alcyon", place: "sargues", ambiance: "nuit",
      text: [
        "Le quart de minuit à quatre, dans le calme, c'est la solitude la plus complète qu'on puisse connaître sur un navire plein d'hommes. L'homme de barre dort debout, appuyé à la roue qui ne sert à rien. L'officier de quart somnole sur le banc de poupe. Toi, on t'a mis à l'avant, à surveiller les herbes, au cas où. Au cas où quoi, personne ne le sait. Tu regardes les étoiles se refléter dans l'eau noire, si nombreuses qu'on ne sait plus où est le ciel.",
        "Vers deux heures, tu entends un bruit dans l'eau. Un clapotis, doux, régulier, qui n'est pas celui d'un poisson. Tu te penches par-dessus le bossoir. Il y a un homme dans l'eau. Accroché à la chaîne de l'ancre, à la surface, une main sur un maillon, la tête renversée en arrière, la bouche ouverte, qui respire comme un soufflet de forge. Il est nu. Les herbes jaunes lui collent aux épaules comme une crinière. Il lève les yeux. Il te voit.",
        "Il ne crie pas. Il dit, d'une voix basse, cassée par l'effort : « Ne réveille personne. Je t'en prie. Juste de l'eau. » Il a des yeux très clairs, dans un visage d'homme de trente ans, rasé, aux traits nets. Il a l'air de tout, sauf d'un noyé. Il a l'air d'un officier.",
      ],
      choices: [{ label: "Lui descendre un seau d'eau douce, et l'écouter", to: "TB_recit" }] },
    TB_recit: { act: "III", title: "L'homme de l'Alcyon", place: "sargues", ambiance: "nuit",
      text: [
        "Il boit tout le seau, accroché à la chaîne, à longues gorgées, en fermant les yeux. Puis il parle, à voix basse, la joue contre un maillon. Il s'appelle Yves Gourlaouen. Il est second sur l'Alcyon, le trois-mâts marchand qu'on voit, le jour, encalminé à deux milles sur bâbord. Il a nagé deux milles, la nuit, dans les herbes. Il dit que les herbes, c'est le pire. Elles s'enroulent autour des jambes comme des mains.",
        "Il y a trois jours, sur l'Alcyon, le maître d'équipage, un ivrogne nommé Le Floc'h, a pris en grippe le mousse du bord, un gamin de treize ans, et l'a battu au bout de filin, devant tout le monde, pour une écoute mal lovée. Il frappait encore quand le gamin ne bougeait plus. Gourlaouen lui a dit d'arrêter. L'autre a ri. Gourlaouen l'a frappé une fois, au visage, du poing. Le Floc'h est tombé en arrière. Sa tête a heurté le guindeau. Il ne s'est pas relevé.",
        "« Je ne voulais pas le tuer, dit-il. Je voulais qu'il s'arrête. Il s'est arrêté. » Le capitaine de l'Alcyon, un vieil homme qui ne veut pas d'histoires, l'a fait mettre aux fers dans la cale. Il le remettra à la justice au premier port. Gourlaouen sait ce que dira la justice : un officier qui tue un maître d'équipage, à bord, devant l'équipage, c'est la corde, ou le bagne, quelle que soit la raison. Il a forcé ses fers avec un clou, cette nuit. Il a sauté. Il a nagé vers la seule lumière qu'il voyait. La tienne.",
        "Il te regarde, d'en bas. Il dit qu'il ne te demande rien. Il dit que tu peux appeler l'officier de quart, et qu'il comprendra. Il dit qu'il a seulement besoin de savoir une chose : est-ce qu'il a eu tort ? Il demande ça à un mousse de seize ans, la nuit, accroché nu à une chaîne d'ancre. Tu penses au gamin de treize ans. Tu penses à Gobert, au bout de filin de Gobert. Tu penses que ça aurait pu être toi, sur l'Alcyon, et lui, le second, qui aurait levé le poing pour toi.",
      ],
      choices: [
        { label: "Le hisser à bord, et le cacher dans la soute aux voiles", fx: { flag: "tb:cache" }, to: "TB_cache" },
        { label: "Réveiller l'officier de quart", fx: { flag: "tb:quart" }, to: "TB_quart" },
        { label: "Lui descendre du pain, une gourde et un flotteur de liège, et le laisser repartir", fx: { flag: "tb:flotteur" }, to: "TB_flotteur" },
      ] },
    TB_cache: { act: "III", title: "L'homme de l'Alcyon", place: "sargues", ambiance: "nuit",
      text: [
        "Tu lui lances un bout. Il grimpe, ruisselant, couvert d'herbes, et tu le guides à quatre pattes le long de la lisse, dans l'ombre des chaloupes, jusqu'à l'écoutille de la soute aux voiles. Tu le fais descendre. Tu lui donnes ta couverture, ton biscuit, et une vieille chemise à toi, trop petite, qui craque aux épaules. Tu le caches derrière les rouleaux de toile de rechange, là où personne ne va jamais pendant un calme, puisqu'on ne change pas de voiles quand il n'y a pas de vent.",
        "Le lendemain matin, une chaloupe arrive de l'Alcyon, à la rame, à travers les herbes. Un vieux capitaine monte à bord, demande à parler à la capitaine Ribaud, et explique qu'un de ses officiers, un meurtrier, s'est évadé cette nuit et s'est sans doute noyé, mais qu'on ne sait jamais. Il demande si personne n'a rien vu. La capitaine fait demander à l'homme de quart, à l'officier de quart, au mousse de l'avant. Tu dis que tu n'as rien vu. Tu le dis en regardant la capitaine dans les yeux. Elle te regarde un moment de trop. Puis elle dit au vieux capitaine qu'il n'y a rien à voir à bord de la Cormorane.",
        "Pendant quatre jours, tu le nourris en cachette. Tu voles du biscuit, de l'eau, une fois une pomme. La nuit, tu descends lui parler. Il te raconte des ports, des navires, sa mère à Kerlanvez, une fiancée qu'il ne reverra pas. Il te demande des nouvelles du bord. Il te parle comme à un égal. Tu as l'impression d'avoir un frère, dans le noir de la soute, un frère aîné qui a fait une chose que tu aurais peut-être faite. Tu te demandes si c'est pour ça que tu le caches.",
        "La cinquième nuit, il te dit qu'il a entendu, toute la journée, par la fente de l'écoutille, crier des oiseaux de terre, et qu'une côte n'est pas loin, au sud-ouest. Il dit qu'il partira cette nuit. Tu lui donnes un flotteur de liège, une gourde, ton couteau. Il te serre la main, longtemps. Il dit qu'il ne saura jamais te rendre ça. Il glisse dans l'eau noire, sans un bruit, et s'éloigne vers le sud-ouest, en nageant lentement, sur le dos, en regardant les étoiles. Le lendemain matin, la capitaine Ribaud passe près de toi, sur le pont, et dit, sans s'arrêter : « La soute aux voiles sent l'homme, mousse. Fais-la aérer. » Tu ne sauras jamais combien elle en savait.",
      ],
      choices: [{ label: "Regagner ton hamac", fx: { quest: "TB" }, back: "A3n_jours" }] },
    TB_quart: { act: "III", title: "L'homme de l'Alcyon", place: "sargues", ambiance: "nuit",
      text: [
        "Tu dis à l'homme, en bas, que tu vas chercher l'officier. Tu le dis franchement, en le regardant. Il hoche la tête. Il dit que c'est bien. Il dit que c'est ce qu'il aurait fait, à ton âge, et peut-être même au sien. Il ne lâche pas la chaîne. Il ne cherche pas à s'enfuir. Il attend, dans l'eau noire, la tête renversée, en regardant les étoiles.",
        "L'officier de quart, c'est Benoît Quémeneur, le second. Il se réveille d'un coup, écoute, et vient voir. Il fait hisser l'homme, lui fait donner une couverture et du tafia. Il l'écoute raconter, dans la lumière de la lanterne, sans l'interrompre. Puis il réveille la capitaine. Ils parlent tous les trois dans la grand-chambre, porte close, jusqu'à l'aube. Tu attends dehors, assis{e} sur un rouleau de cordage, sans savoir ce que tu as fait.",
        "Au matin, une chaloupe de la Cormorane rame jusqu'à l'Alcyon, avec la capitaine Ribaud à l'arrière, en uniforme, et Gourlaouen assis à l'avant, enveloppé dans une vareuse de la Cormorane, les mains libres. Elle revient trois heures plus tard. Seule. La capitaine monte à bord, va droit vers toi, et te dit ce qui s'est passé. Elle dit que le mousse de l'Alcyon a parlé, et l'équipage aussi, devant elle. Elle dit que le vieux capitaine a accepté de consigner l'affaire au journal de bord comme un accident survenu pendant une rixe. Elle dit que Gourlaouen reste aux fers jusqu'au port, mais que les témoignages sont écrits, signés, et qu'elle a signé aussi, comme capitaine témoin.",
        "Elle dit que tu as bien fait. Elle dit qu'un homme qu'on cache est un homme qu'on condamne à se cacher toute sa vie. Elle dit qu'un homme qu'on livre avec ses témoins a une chance. Elle dit que c'est une petite chance. Puis elle te regarde, longuement, et elle dit qu'elle aurait sans doute fait comme toi, à ton âge, mais qu'elle n'est pas sûre qu'elle l'aurait fait aussi vite. Tu ne sais pas si c'est un compliment. Tu passes la nuit suivante à regarder les lumières de l'Alcyon, à deux milles, en pensant à un homme aux fers, qui respire, et qui a une petite chance.",
      ],
      choices: [{ label: "Regagner ton hamac", fx: { quest: "TB" }, back: "A3n_jours" }] },
    TB_flotteur: { act: "III", title: "L'homme de l'Alcyon", place: "sargues", ambiance: "nuit",
      text: [
        "Tu ne réveilles personne. Tu ne le fais pas monter non plus. Tu descends à la cambuse sur la pointe des pieds, et tu remontes avec un demi-pain, une gourde pleine, et un des flotteurs de liège qui servent à baliser les filets de Lagadec. Tu les lui descends au bout d'un filin. Il les prend. Il te regarde, et il comprend ce que tu lui donnes, et ce que tu lui refuses.",
        "Tu lui dis que tu ne sais pas s'il a eu tort. Tu dis que tu ne peux pas le cacher, parce que tu ne sais pas mentir à la capitaine, et que tu ne peux pas le livrer, parce que tu penses au gamin de treize ans. Tu dis que l'île est quelque part au sud-ouest, à deux jours de nage, peut-être, ou à cinq, ou nulle part. Tu dis que tu lui donnes ce que tu as, et que la mer fera le reste. Tu as honte en le disant. Il sourit.",
        "Il dit que c'est plus que ce qu'il espérait. Il dit qu'on lui a donné, à bord de l'Alcyon, le choix entre la corde et le bagne, et que tu lui donnes le choix entre la mer et la mer, ce qui est beaucoup plus honnête. Il passe le bras dans le filin du flotteur, accroche la gourde à son cou, met le pain dans sa bouche, comme un chien qui emporte un os. Puis il lâche la chaîne.",
        "Tu le regardes s'éloigner, dans les herbes, sur le dos, en battant doucement des pieds, vers le sud-ouest, vers les étoiles basses, jusqu'à ce que tu ne distingues plus le blanc du liège. Le lendemain, la chaloupe de l'Alcyon vient demander si l'on a vu un homme. Tu dis non. Tu ne mens pas tout à fait : tu ne l'as plus vu, depuis deux heures du matin. Tu ne sauras jamais s'il a atteint une terre. Tu regardes la mer, certains soirs, en te disant qu'elle a eu le dernier mot, et que tu lui as laissé exprès.",
      ],
      choices: [{ label: "Regagner ton hamac", fx: { quest: "TB" }, back: "A3n_jours" }] },
  },
  extras: {
    people: {
      gourlaouen: { name: "Yves Gourlaouen", aka: ["l'homme de l'Alcyon", "le nageur"], qui: "Second du trois-mâts l'Alcyon, encalminé à deux milles de la Cormorane dans la mer des Sargues." },
    },
    quests: [
      { id: "TB", act: "III", kind: "annexe", title: "L'homme de l'Alcyon", start: "TB_chaine", doit: "compagnonsecret", echo: ["tb:cache", "tb:quart", "tb:flotteur"] },
    ],
  },
};
