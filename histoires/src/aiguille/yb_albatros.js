// L'Île Folle-Aiguille · side story « L'albatros » (owes its question to The Rime of the Ancient Mariner: does a
// senseless killing call down a punishment, and who decides who must pay for it?). In the calms, a great white bird
// follows the Cormorane; Coquerel, who laughs at everything, shoots it with the baron's fowling piece (yb:tue), unless
// the child knocks the barrel aside (yb:sauve, the bird nursed and let go: yb:envole). The wind dies. The men hang the
// dead bird round the laugher's neck; at night some of them want to give the sea its Jonah. The child or the doctor
// calls the captain (yb:capitaine), throws the bird back to the sea with words over it (yb:rendu), or lets it happen
// (yb:jete: thrown over, he hangs all night on the rudder chains). The cook, on his side, can use the bird against the captain or calm the men (fargue:albatros_exploite,
// fargue:albatros_calme). Wired in A3n_jours, A3w_jours and A3f_jours.
var ENFANT = { team: "mousse" };
var MEDECIN = { team: "victorine" };
module.exports = {
  passages: {
    YB_oiseau: { act: "III", title: "L'oiseau blanc", place: "sargues", ambiance: "mer",
      fx: { meet: "coquerel" },
      text: [
        "Depuis trois jours, un oiseau suit la Cormorane. Un albatros, disent les anciens, et ils baissent la voix pour le dire, comme on parle d'un évêque en visite. Il est blanc, d'un blanc de suaire, avec le bout des ailes noir, et ces ailes, quand il les déploie, sont plus longues que deux hommes couchés bout à bout. Il ne les bat presque jamais. Il glisse, au ras des herbes flottantes, de bâbord à tribord et de tribord à bâbord, en grands cercles lents, comme s'il dessinait autour du navire une figure que lui seul comprend.",
        { if: ENFANT, text: "Le matin, tu lui jettes un morceau de biscuit, du gaillard d'arrière. Il plonge, le prend, remonte, et revient se poser sur l'eau dans le sillage, à vingt brasses, à t'attendre. Le soir, il se perche sur la vergue de perroquet, et il dort là-haut, la tête sous l'aile, comme une lanterne blanche qu'on aurait oublié d'éteindre." },
        { if: MEDECIN, text: "Victorine le regarde chaque matin depuis la fenêtre de l'infirmerie. Elle a lu, dans un traité d'histoire naturelle, que ces oiseaux font le tour du monde sans se poser et dorment en volant. Elle a lu aussi qu'on ne sait pas pourquoi ils suivent les navires. Les marins, eux, le savent : ils portent les âmes des noyés. Elle trouve l'explication plus élégante que l'absence d'explication, et se le reproche." },
        "Le quatrième jour, Barthélemy Coquerel, qu'on appelle Coq parce qu'il rit comme on chante le matin, sort de la grand-chambre avec le fusil de chasse du baron, que le valet lui a prêté pour une piastre. Il le charge, sur le pont, en riant, sous les yeux de tout le monde. « Un oiseau pareil, dit-il, ça fait un oreiller pour toute la bordée ! »",
        "Personne ne l'arrête. On le regarde épauler. Les anciens se signent.",
      ],
      choices: [
        { label: "Te jeter sur le fusil", if: ENFANT, hide: { not: ENFANT }, test: { dom: "combat", diff: 1, label: "Le canon, d'un coup d'épaule" },
          win: { to: "YB_rate" }, lose: { fx: { flag: "yb:tue" }, to: "YB_tue" } },
        { label: "Crier son nom", if: MEDECIN, hide: { not: MEDECIN }, fx: { flag: "yb:tue" }, to: "YB_tue" },
        { label: "Regarder", fx: { flag: "yb:tue" }, to: "YB_tue" },
      ] },
    YB_rate: { act: "III", title: "L'oiseau blanc", place: "sargues", ambiance: "mer",
      text: [
        "Tu arrives sur lui au moment où le coup part. Le canon saute vers le ciel ; la décharge passe à une brasse au-dessus de l'oiseau, qui fait un écart, lourdement, et retombe sur l'eau, une aile traînante, touchée par un seul grain de plomb, peut-être deux.",
        "Coquerel te regarde, le fusil fumant à la main. Il rit encore, par habitude, puis il s'arrête de rire, et il a l'air, pour la première fois depuis Morlenc, de quelqu'un qui vient de comprendre une chose.",
        "« Tu m'as sauvé, l'anguille, dit-il. Je sais pas de quoi. Mais je le sens. » Il rend le fusil au valet sans un mot de plus.",
        "Le soir, on repêche l'oiseau avec une épuisette de bossoir, parce qu'il ne peut plus décoller, et on le dépose dans une cage à poules vide, sur le gaillard d'arrière, où il reste immobile, énorme, magnifique, à regarder la mer avec un œil rond qui ne pardonne rien et ne reproche rien.",
      ],
      choices: [{ label: "Lui porter du poisson", to: "YB_soin" }] },
    YB_soin: { act: "III", title: "L'oiseau blanc", place: "sargues", ambiance: "mer",
      text: [
        "Il faut quatre jours. Tu lui portes du poisson, il le prend avec une délicatesse de chanoine. La médecin vient voir l'aile, retire du bout de la pince un grain de plomb planté sous les plumes, et ne dit rien de plus que : « Il volera. » Coquerel lui apporte des harengs de sa ration, sans rire, et reste assis à côté de la cage à le regarder, en silence, ce qui de mémoire de bordée ne lui était jamais arrivé.",
        "Le cinquième matin, le vent se lève. L'oiseau s'agite, ouvre ses ailes dans la cage, les heurte aux barreaux. Tu ouvres la porte. Il sort, marche sur le pont avec une gaucherie de vieux marin à terre, grimpe sur la lisse, ouvre les ailes, et le vent le prend.",
        "Il ne bat pas des ailes. Il monte, simplement, comme une feuille, et il fait trois fois le tour du navire, très haut, puis il part vers le couchant, devant l'étrave, dans la direction où vous allez, et il disparaît.",
        "« Il nous montre le chemin », dit un ancien. Personne ne le contredit.",
      ],
      choices: [{ label: "Reprendre le travail", fx: { quest: "YB", flag: "yb:envole", penche: { coquerel: 2 } }, back: true }] },
    YB_tue: { act: "III", title: "L'oiseau blanc", place: "sargues", ambiance: "mer",
      text: [
        "Le coup part. L'oiseau se plie en l'air, comme une lettre qu'on froisse, et tombe sur les herbes, à trente brasses, les ailes ouvertes, et reste là, blanc sur le jaune des sargues, sans bouger.",
        "Coquerel rit. Il est le seul. Il rit un moment, tout seul, au milieu du pont silencieux, puis son rire s'use, s'amincit, et s'arrête, comme une corde qui file jusqu'au bout. On met la chaloupe à l'eau pour aller chercher l'oiseau, parce que Coquerel a dit oreiller, et qu'on ne laisse pas pourrir sur l'eau une chose qu'on a tuée. Quand on le hisse à bord, il est plus grand mort que vivant.",
        "Le soir même, le peu de vent qui restait tombe tout à fait.",
      ],
      choices: [{ label: "Attendre le vent", back: true }] },

    YB_calme: { act: "III", title: "Le calme blanc", place: "sargues", ambiance: "mer",
      text: [
        "Le vent ne revient pas. Le lendemain, pas un souffle ; le surlendemain non plus. La mer devient une plaque d'étain, les herbes jaunes y pourrissent sans bouger, et le soleil y tape si fort que le goudron des coutures fond et coule sur le pont en larmes noires. Les voiles pendent aux vergues comme du linge sur une tombe. La nuit, les herbes luisent, d'une lumière verdâtre, phosphorescente, qui monte de l'eau comme une haleine, et sur cette lumière glissent des choses, longues, molles, sans yeux, qui laissent derrière elles des traînées de feu pâle.",
        "Le quatrième jour, les anciens ont décidé. Ils prennent l'oiseau mort, qu'on a laissé dans la cale aux câbles, raide, puant déjà, et ils le passent au cou de Coquerel, avec un bout de ligne, comme un collier. Coquerel ne se défend pas. Il ne rit pas. Il porte l'oiseau sur sa poitrine, les ailes pendantes sur ses bras, et il marche, et il travaille, avec ce poids blanc et cette odeur, et personne ne lui adresse plus la parole.",
        { if: ENFANT, text: "Tu le croises à la pompe. Il te regarde avec des yeux d'enfant battu. « C'était un oiseau, dit-il. Rien qu'un oiseau. Hein, l'anguille ? Rien qu'un oiseau. » Tu ne sais pas quoi répondre." },
        { if: MEDECIN, text: "Victorine vient voir la capitaine. « Ils vont lui donner la fièvre, avec cette charogne. — Je sais, docteur. Si je la lui enlève, ils en trouveront une autre, et elle sera vivante. Laissez-leur leur oiseau. On ne gouverne pas des superstitions. On les laisse s'user. »" },
      ],
      choices: [{ label: "Attendre encore", back: true }] },
    YB_jonas: { act: "III", title: "Le Jonas", place: "sargues", ambiance: "nuit",
      text: [
        "Le sixième jour du calme, la nuit, il y a des pas sur le gaillard d'avant, et des voix basses, et une lanterne qu'on masque d'une main. Six hommes, sept. Ulric Malandain est devant, et il ne parle pas fort ; il n'en a pas besoin.",
        "« La mer veut son homme, dit-il. Elle l'a dit. On lui donne, le vent revient. C'est comme ça depuis Jonas. C'est dans le livre. »",
        "Coquerel est au milieu d'eux, l'albatros pourri au cou, les mains attachées dans le dos. Il ne crie pas. Il pleure, sans bruit, et il dit, de temps en temps, « c'était un oiseau », d'une petite voix d'enfant, à personne.",
        { if: ENFANT, text: "Tu es dans les haubans de misaine, où tu dors depuis que la chaleur a rendu l'entrepont invivable. Ils ne t'ont pas vu{e}." },
        { if: MEDECIN, text: "Victorine est montée prendre l'air, à la proue, parce que l'infirmerie est un four. Ils ne l'ont pas vue, dans l'ombre du foc." },
        "Ils le poussent vers la lisse. Le pont est très calme. La mer est très calme. Les choses molles, sans yeux, glissent sous la surface, et leur feu pâle éclaire par en dessous les figures des hommes, qui ont l'air, dans cette lumière, d'être déjà morts eux aussi.",
      ],
      choices: [
        { label: "Courir réveiller la capitaine", to: "YB_capitaine" },
        { label: "Descendre au milieu d'eux, couper l'oiseau, et le rendre à la mer avec des mots", test: { dom: "social", diff: 1, label: "Parler plus fort que la peur" },
          win: { to: "YB_rendu" }, lose: { to: "YB_capitaine" } },
        { label: "Ne pas bouger", to: "YB_noye" },
      ] },
    YB_capitaine: { act: "III", title: "Le Jonas", place: "sargues", ambiance: "nuit",
      text: [
        "La capitaine Ribaud monte sur le gaillard d'avant en chemise de nuit, pieds nus, un pistolet dans chaque main, les cheveux défaits, et elle ne crie pas, elle non plus.",
        "« Malandain. Lâchez cet homme. Le premier qui le touche, je le pends demain à la vergue de misaine, et le vent reviendra peut-être, puisque vous dites que la mer veut quelqu'un. Je lui donnerai le pendu, il est plus lourd. »",
        "Un long moment, rien ne bouge. Puis Malandain lâche le bras de Coquerel, et recule, en souriant d'un côté de la bouche. Les autres reculent avec lui. Ils redescendent par l'écoutille, un par un, sans un mot.",
        "La capitaine coupe la ligne au cou de Coquerel avec un couteau qu'elle a pris on ne sait où, prend l'albatros par une patte, et le jette par-dessus bord, sans un mot, sans une prière. Il flotte un instant, blanc, puis il s'enfonce.",
        "Le vent ne revient pas cette nuit-là. Il revient deux jours plus tard, comme il revient toujours. Mais à bord, on dit désormais que la capitaine a privé la mer de son homme, et que la mer s'en souviendra.",
      ],
      choices: [{ label: "Redescendre", fx: { quest: "YB", flag: "yb:capitaine", penche: { coquerel: 1, malandain: -1 } }, back: true }] },
    YB_rendu: { act: "III", title: "Le Jonas", place: "sargues", ambiance: "nuit",
      text: [
        { if: ENFANT, text: "Tu te laisses glisser le long d'un hauban et tu tombes au milieu d'eux. Tu as ton couteau à la main. Tu coupes la ligne au cou de Coquerel avant que personne ait compris, tu prends l'oiseau dans tes bras, lourd, raide, puant, et tu montes sur la lisse avec." },
        { if: MEDECIN, text: "Victorine sort de l'ombre du foc. Elle a son scalpel à la main, celui qu'elle garde dans la poche du tablier. Elle coupe la ligne au cou de Coquerel avant que personne ait compris, prend l'oiseau dans ses bras, lourd, raide, puant, et monte sur la lisse avec." },
        "« Vous voulez rendre quelque chose à la mer ? Rendez-lui ce qu'on lui a pris. »",
        "Et l'oiseau tombe, les ailes ouvertes, et se pose à plat sur l'eau phosphorescente, qui s'illumine autour de lui en un cercle de feu pâle, et il reste là, blanc au milieu de la lumière verte, et il s'éloigne, lentement, sans courant, sans vent, comme si quelque chose en dessous l'emportait.",
        "Les mots viennent ensuite, seuls, ceux qu'on dit aux enterrements en mer, et qu'on sait tous par cœur sur la côte du Ponant, même ceux qui ne vont jamais à la messe. Les hommes les disent l'un après l'autre, Malandain le dernier, du bout des lèvres, parce qu'il ne peut pas faire autrement sans avoir l'air d'avoir peur de Dieu.",
        "Au matin, un souffle ride l'eau. À midi, les voiles portent. Personne à bord ne croit à une coïncidence.",
        { if: ENFANT, text: "Toi non plus, tout à fait." },
        { if: MEDECIN, text: "Victorine non plus, tout à fait, et cela l'agace considérablement." },
      ],
      choices: [{ label: "Redescendre, les bras sentant la charogne", fx: { quest: "YB", flag: "yb:rendu", penche: { coquerel: 2 } }, back: true }] },
    YB_noye: { act: "III", title: "Le Jonas", place: "sargues", ambiance: "nuit",
      text: [
        { if: ENFANT, text: "Tu ne bouges pas. Tu as tes raisons, qui sont toutes bonnes et qui pèsent toutes le même poids : rien." },
        { if: MEDECIN, text: "Victorine ne bouge pas. Elle a ses raisons, qui sont toutes bonnes et qui pèsent toutes le même poids : rien." },
        "Ils le font passer par-dessus la lisse, avec l'oiseau. Il y a un bruit, pas très fort, un bruit d'eau épaisse. La lumière verte s'agite un moment à l'endroit où il est tombé, puis elle se calme, et redevient égale, comme une couverture qu'on lisse. Les hommes redescendent sans un mot.",
        "À l'aube, Maître Gobert, qui fait le tour du bord avant le branle-bas, entend gémir sous la voûte de l'arrière. Coquerel est là, accroché aux chaînes du gouvernail, dans l'eau jusqu'aux épaules, les mains liées passées autour d'un gond, où il s'est tenu toute la nuit, pendant que les choses sans yeux lui frôlaient les jambes. L'albatros flotte à côté de lui, au bout de sa ligne, comme un compagnon fidèle.",
        "On le hisse. Il ne dit pas qui. Il ne dit rien. Il a les yeux grands ouverts, et il ne les ferme plus beaucoup, les jours suivants. Le vent revient trois jours plus tard. Coquerel ne rit plus. On s'aperçoit seulement alors combien on entendait ce rire, et combien il prenait de place.",
      ],
      choices: [{ label: "Vivre avec", fx: { quest: "YB", flag: "yb:jete", penche: { coquerel: -1 } }, back: true }] },

    // ---------------------------------------------------------------- the cook's side
    YB_f_oiseau: { act: "III", title: "L'albatros", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Fargue a vu tirer l'oiseau. Il a vu le vent tomber. Il a vu les anciens passer la charogne au cou de Coquerel, son propre homme, qui riait trop. Il a laissé faire : un homme qui rit trop, dans une mutinerie, est un homme qui parle trop.",
        "Maintenant, la bordée de tribord vient à la cambuse, chaque soir, avec des figures de carême, et murmure. La mer est fâchée. Le navire est maudit. On ne reverra jamais Morlenc. Ce sont exactement les mots dont un homme qui prépare une mutinerie a besoin, et ils lui arrivent gratis, servis à la louche.",
        "Il pourrait les tourner un peu. Dire, en remuant la soupe, que c'est le fusil du baron qui a tiré, que c'est la capitaine qui a laissé faire, que des patrons qui tuent les âmes des noyés pour s'amuser ne ramènent pas leurs hommes au port. Il pourrait aussi leur dire la vérité : qu'un calme, c'est un calme, qu'il en a vu de quarante jours sans un oiseau à bord, et que la mer se fiche de leurs oreillers.",
      ],
      choices: [
        { label: "Tourner la peur contre le baron et la capitaine", fx: { flag: "fargue:albatros_exploite", penche: { daguenet: -1, boucaut: -1 } }, to: "YB_f_exploite" },
        { label: "Leur dire la vérité, et servir la soupe", fx: { flag: "fargue:albatros_calme" }, to: "YB_f_calme" },
      ] },
    YB_f_exploite: { act: "III", title: "L'albatros", place: "sargues", ambiance: "mer", second: true,
      text: [
        "Il dit les mots en remuant la soupe, l'air de rien, comme on ajoute une pincée de sel. Il ne les dit qu'une fois. Une fois suffit. Le lendemain, il les entend revenir de l'autre bout du pont, dans la bouche d'hommes qui ne se souviennent plus où ils les ont pris et qui les croient à eux. C'est le principe d'une bonne sauce : au bout d'un moment, on ne sait plus ce qu'on y a mis.",
        "Il se sent sale, un peu. Il a l'habitude.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "YB" }, back: "A3f_jours" }] },
    YB_f_calme: { act: "III", title: "L'albatros", place: "sargues", ambiance: "mer", second: true,
      text: [
        "« Un calme, c'est un calme, dit-il en servant. J'en ai fait un de quarante jours, en mer des Moussons, avec un équipage qui avait pas tué une mouche. On a mangé les rats. On a bu la pluie. On est arrivés. Mangez votre soupe : elle, au moins, elle est pas maudite. »",
        "Ils mangent. Ils rient un peu. C'est un mauvais calcul pour un homme qui prépare une mutinerie, et il le sait, et il remplit les écuelles une deuxième fois. Il y a des choses qu'on ne fait pas, même quand elles servent. Il en reste deux ou trois, dans sa liste. Il y tient.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "YB" }, back: "A3f_jours" }] },
  },
  extras: {
    quests: [
      { id: "YB", act: "III", kind: "annexe", title: "L'albatros", start: "YB_oiseau", doit: "vieuxmarin", echo: ["yb:envole", "yb:capitaine", "yb:rendu", "yb:jete"] },
    ],
  },
};
