// L'Île Folle-Aiguille · side story « Les chèvres de Bourrache » (owes its question to Schiller's The Robbers: can a band
// that lives outside every law still owe something to the weak, and who will make it pay?). Act IV, Fargue at the
// mutineers' camp: two men, Tréanton and the one they call le Mulot, went up to the High Orchard, took an old man's two
// goats, and beat him when he smiled at them. The camp ate the goats. Two days later the old man, Bourrache, comes down
// to the beach with a basket of figs, smiling, having forgotten everything, and asks whether anyone has seen his goats.
// Fargue punishes the two men himself (te:punit), makes Malandain give the camp a rule (te:loi), or takes two of the
// camp's own goats up to the orchard by night (te:rend). Wired in A4f_jours.
module.exports = {
  passages: {
    TE_vieux: { act: "IV", title: "Les chèvres de Bourrache", place: "plage", ambiance: "nature", second: true,
      fx: { meet: "bourrache" },
      text: [
        "Il descend de la forêt à midi, par le sentier du ruisseau, un panier au bras. Un vieil homme maigre, très brun, aux cheveux blancs couronnés de fleurs jaunes, la bouche brune d'écorce, avec un sourire doux et vague. Les sentinelles le laissent passer en riant : un Doux, un de ceux du verger, inoffensif. Il traverse le camp, salue tout le monde, et pose son panier devant le feu de Fargue. Des figues. Il dit qu'il les apporte pour les gens de la mer.",
        "Il a un œil fermé, gonflé, violet. Une croûte noire à la tempe. Il boite. Il ne semble pas s'en souvenir. Il dit qu'il s'appelle Bourrache. Il dit qu'il cherche ses chèvres. Il en avait deux, une blanche et une noire, qui s'appelaient Lait et Nuit. Il ne les trouve plus. Il demande gentiment si quelqu'un, sur la plage, les aurait vues passer.",
        "Autour du feu, il y a un silence. Fargue le sent passer comme un courant d'air froid. Il voit Tréanton, un grand roux aux bras tatoués, baisser les yeux vers son écuelle. Il voit le Mulot, petit et noir, ricaner, puis s'arrêter. Il se souvient du ragoût d'avant-hier. Deux chèvres, rapportées du haut de l'île par deux hommes qui se vantaient d'avoir fait la leçon à un vieux fou qui leur souriait. Il a cuisiné le ragoût lui-même. Il était bon.",
      ],
      choices: [{ label: "Donner une écuelle de soupe au vieil homme, et le regarder manger", to: "TE_camp" }] },
    TE_peaux: { act: "IV", title: "Les chèvres de Bourrache", place: "plage", ambiance: "nature", second: true,
      text: [
        "Derrière les tonneaux, sur deux cadres de branches plantés dans le sable, deux peaux sèchent au soleil, tendues par des ficelles comme des voiles de navire jouet. L'une est blanche, l'autre noire. Le sel du vent les a déjà raidies, et les mouches les couvrent d'un velours bourdonnant qui s'envole quand Fargue approche et se repose aussitôt, comme une pensée importune.",
        "Au cou de la peau blanche, on a laissé un collier. Une tresse de fleurs jaunes, fanées, brunies, nouée avec soin par des doigts qui avaient du temps. Les mêmes fleurs que celles qui couronnent les cheveux du vieil homme. Personne n'a pensé à l'ôter. Elle pend là, au bout de la peau vide, avec l'air un peu ridicule et parfaitement atroce des choses tendres qu'on retrouve après un massacre.",
        "Le Mulot arrive, une écuelle à la main, et voit Fargue devant ses peaux. Il dit, très content de lui, qu'il compte s'en faire un gilet, blanc devant et noir derrière, pour avoir l'air d'un notaire quand il rentrera riche à Morlenc. Il dit que la noire est plus belle, mais que la blanche est plus chaude. Il dit qu'il a déjà taillé les boutonnières avec son couteau.",
        "Fargue regarde la tresse de fleurs. Il ne dit rien. Il pense à toutes les marmites qu'il a remplies dans sa vie, et à la quantité de bêtes qu'elles ont englouties sans qu'il se demande jamais à qui elles avaient appartenu. Il se dit que l'innocence d'un cuisinier tient tout entière dans l'ignorance du nom des bêtes, et que celles-ci s'appelaient Lait et Nuit.",
      ],
      choices: [
        { back: "TE_camp", label: "Revenir au feu" }
      ] },
    TE_coquerel: { act: "IV", title: "Les chèvres de Bourrache", place: "plage", ambiance: "nature", second: true,
      text: [
        "Barthélemy Coquerel était de l'expédition, Fargue le sait, parce que Coquerel l'a raconté à tout le monde, le soir même, en riant. Il est assis sur un rocher, au bord de l'eau, à se curer les ongles avec la pointe d'un couteau. Quand Fargue lui demande comment ça s'est passé, là-haut, il rit, d'abord. Puis il raconte.",
        "Il dit qu'ils sont montés à trois, pour voir le verger. Il dit qu'ils ont trouvé le vieux devant sa maison, en train de traire la blanche. Il dit que le vieux leur a souri, et leur a tendu le bol de lait, comme ça, à des inconnus armés. Il dit que Tréanton a pris le bol, et l'a bu, et l'a jeté par terre. Il dit que le vieux a souri encore. Il dit que c'est ce sourire-là qui a tout gâché. Tréanton a dit que le vieux se moquait de lui, et il a frappé. Puis il a frappé encore, parce que le vieux souriait toujours, par terre, avec le sang qui lui coulait dans l'œil.",
        "Coquerel rit en le racontant. Il rit de bon cœur, en se tapant la cuisse. Il dit que c'était la chose la plus drôle qu'il ait vue de sa vie, un grand roux qui cogne un vieillard parce que le vieillard ne comprend pas qu'on le cogne. Puis il cesse de rire, d'un coup, au milieu d'un hoquet, et il regarde son couteau.",
        "Il dit, à voix basse, qu'il a ri là-haut aussi. Pendant que Tréanton frappait. Il dit qu'il n'a pas pu s'en empêcher. Il dit qu'il rit depuis qu'il est petit, aux enterrements, aux coups de fouet, aux naufrages, et qu'on l'a battu pour ça toute son enfance. Il dit que le vieux, par terre, l'a regardé rire, et qu'il lui a souri à lui aussi, comme à un camarade. Il dit qu'il n'arrive plus à dormir. Puis il se remet à rire, très fort, pour que les autres l'entendent, et il retourne au feu.",
      ],
      choices: [
        { back: "TE_camp", label: "Revenir au feu" }
      ] },
    TE_camp: { act: "IV", title: "Les chèvres de Bourrache", place: "plage", ambiance: "nature", second: true,
      text: [
        { first: true, text: "Le vieil homme mange avec appétit, en remerciant après chaque cuillerée. Il parle de ses chèvres, de la blanche qui est gourmande et de la noire qui est têtue. Il dit qu'elles reviendront sûrement, qu'elles reviennent toujours. Il ne regarde pas Tréanton ni le Mulot. Il les a peut-être oubliés. Ou bien il ne les a jamais vraiment vus, de son œil intact, perdu dans le brouillard de l'écorce." },
        { first: true, text: "Les hommes regardent ailleurs. Quelques-uns ont l'air gênés. La plupart ont l'air de rien. Un mutin, au fond, dit à voix haute qu'on ne va pas pleurer pour deux biques d'un Doux, qu'on n'est pas à la messe. On rit, un peu. Malandain, sous sa voile tendue, nettoie son pistolet et ne lève pas la tête. Fargue comprend qu'il sait, et qu'il s'en moque, et que tout le camp attend de voir si quelqu'un, ici, va s'en soucier." },
        { first: true, text: "Fargue pense à ce que c'est qu'un camp de mutins. Trente hommes qui ont déchiré la loi du bord, et qui vivent sans loi, entre la forêt et la mer, en attendant de prendre la chapelle et l'or. Il pense que ça peut devenir deux choses. Une bande d'hommes libres, qui se donnent leurs propres règles. Ou une meute. Il pense que la différence entre les deux, c'est un vieil homme qui sourit avec un œil crevé devant le ragoût de ses chèvres. Il pense qu'il est le seul, ici, à tenir la louche." },
        { first: true, text: "Le vieil homme finit sa soupe. Il remercie. Il reprend son panier vide. Il dit qu'il remonte chercher ses chèvres. Il dit que, s'il les trouve, il en apportera le lait aux gens de la mer. Il s'en va par le sentier du ruisseau, en boitant, en chantonnant." },
        { again: true, text: "Le vieil homme mange sa soupe, Tréanton et le Mulot regardent ailleurs, et Fargue tient toujours la louche." }
      ],
      choices: [
        { label: "Aller voir, derrière les tonneaux, ce qui sèche au soleil", to: "TE_peaux", hide: { seen: "TE_peaux" } },
        { label: "Demander à Coquerel comment ça s'est passé, là-haut", to: "TE_coquerel", hide: { seen: "TE_coquerel" } },
        { label: "Aller trouver Tréanton et le Mulot, ce soir, à l'écart", fx: { flag: "te:punit" }, to: "TE_punit" },
        { label: "Aller trouver Malandain, et lui demander une règle pour le camp", fx: { flag: "te:loi" }, to: "TE_loi" },
        { label: "Prendre, cette nuit, deux chèvres du troupeau du camp, et monter au verger", fx: { flag: "te:rend" }, to: "TE_rend" },
      ] },
    TE_punit: { act: "IV", title: "Les chèvres de Bourrache", place: "plage", ambiance: "nuit", second: true,
      text: [
        "Il les trouve à la nuit, derrière les tonneaux, en train de jouer aux dés avec un troisième, qui s'éclipse en voyant la tête de Fargue. Il ne leur dit pas grand-chose. Il dit qu'un homme qui bat un vieillard qui lui sourit n'a pas besoin de couteau pour être un lâche. Le Mulot ricane, et dit que le cuistot n'est pas le capitaine. Fargue le frappe. Une fois, au creux de l'estomac, d'un coup court, d'homme qui a appris à se battre dans des endroits où l'on n'a qu'un coup.",
        "Le Mulot tombe à genoux, sans air. Tréanton se lève, énorme, les poings fermés. Fargue ne recule pas. Il le regarde, simplement, avec ses trois doigts à la main gauche posés sur le manche de sa louche, comme sur une arme. Tréanton hésite. Puis il se rassoit. Fargue leur dit que, la prochaine fois, ils ne mangeront plus. Ni ce jour-là, ni le lendemain, ni jamais, tant qu'il tiendra la marmite. Il dit que c'est la seule loi qu'il connaisse, et qu'elle suffit.",
        "Le lendemain, le camp sait. Les hommes regardent Fargue autrement. Certains avec respect. D'autres avec une méfiance nouvelle, parce qu'un cuisinier qui frappe est un cuisinier qui pense. Malandain le fait appeler, le soir, et lui dit, en souriant, qu'il n'aime pas qu'on fasse la police dans son camp. Fargue dit qu'il ne fait pas la police. Il dit qu'il fait la cuisine, et qu'il choisit pour qui. Malandain le regarde longtemps, et ne dit rien de plus.",
        "Fargue se dit qu'il a protégé un vieil homme qui ne s'en souviendra pas, au prix d'une partie de la confiance de Malandain, dont il a besoin pour d'autres choses. Il se dit que c'était une mauvaise affaire. Il se dit qu'il la referait. Il ne comprend pas très bien pourquoi, lui qui a toujours tout calculé. Il se dit que c'est peut-être l'œil crevé. Ou le sourire. Ou le ragoût, qu'il a cuisiné, et qui était bon.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "TE" }, back: "A4f_jours" }] },
    TE_loi: { act: "IV", title: "Les chèvres de Bourrache", place: "plage", ambiance: "nature", second: true,
      text: [
        "Fargue va trouver Malandain sous sa voile. Il ne parle pas de morale. Il sait que Malandain rit de la morale. Il parle de stratégie. Il dit que les Doux sont nombreux, là-haut, avec des vergers, de l'eau, des chèvres, des fruits. Il dit qu'un camp qui pille ceux qui le nourrissent est un camp qui aura faim dans un mois. Il dit que les gens de la chapelle, eux, n'ont pas de verger. Il dit qu'il faut une règle : on ne touche pas aux Doux. On échange. On paie, au besoin, avec ce qu'on a.",
        "Malandain l'écoute en nettoyant son pistolet. Il dit que Fargue parle comme un armateur. Fargue dit qu'il parle comme un cuisinier qui sait compter les jours de vivres. Malandain rit. Puis il se lève, et il rassemble le camp autour du feu, le soir même. Il annonce la règle. On ne touche pas aux Doux. Celui qui y touche est attaché au poteau un jour sans eau. Il le dit d'une voix de capitaine, comme si l'idée venait de lui. Fargue le laisse dire. C'est ce qu'il voulait.",
        "Tréanton et le Mulot passent la journée suivante au poteau, sous le soleil, pour l'exemple, parce que Malandain aime les exemples. Les hommes les regardent sans pitié. Une règle, c'est un spectacle, et ce camp a faim de spectacles. Le soir, on les détache. Ils ne disent rien. Ils regardent Fargue, longtemps, depuis l'autre côté du feu.",
        "Les jours suivants, des Doux descendent au camp avec des fruits, des œufs, du lait, et repartent avec du sel, des clous, des bouts de toile. Le camp mange mieux. Malandain s'en attribue le mérite. Fargue se dit qu'il a donné une loi à des hommes sans loi, et que la loi a tenu parce qu'elle servait leur ventre. Il se dit que c'est sans doute comme ça que naissent toutes les lois. Il pense aussi qu'il a fait de Malandain un meilleur chef, et il ne sait pas encore si c'était une bonne idée.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "TE" }, back: "A4f_jours" }] },
    TE_rend: { act: "IV", title: "Les chèvres de Bourrache", place: "haut_verger", ambiance: "nuit", second: true,
      text: [
        "Le camp a un petit troupeau, pris sur la Cormorane : six chèvres, pour le lait des malades, qu'on garde attachées derrière les tonneaux. Fargue en détache deux, à minuit, une blanche et une noire, pendant que la sentinelle dort. Il les mène par la corde, dans la forêt, à la lanterne sourde, par le sentier du ruisseau. Il monte toute la nuit. Les chèvres protestent, s'arrêtent, mangent des feuilles. Il les tire. Il jure à voix basse. Il se demande ce qu'il fait là.",
        "Il arrive au Haut-Verger à l'aube. Les Doux dorment dans leurs maisons sans portes. Il trouve la maison de Bourrache, au bout d'une terrasse, à cause de l'enclos vide et de la mangeoire pleine de foin frais, qu'il a dû remplir hier en attendant ses bêtes. Il attache les deux chèvres dans l'enclos. Il s'en va.",
        "Il est au bout de la terrasse quand il entend un cri. Il se retourne. Le vieil homme est sorti, en chemise, et il est à genoux dans l'enclos, les bras autour du cou de la chèvre noire, qui n'est pas la sienne, et il pleure de joie, et il dit : « Nuit. Nuit. Tu es revenue. » Il voit Fargue. Il lui fait signe, de loin, avec un sourire immense. Il dit : « Je savais qu'elles reviendraient. Elles reviennent toujours. »",
        "Fargue redescend vers la plage. Au camp, on a remarqué les deux chèvres manquantes. On accuse la sentinelle, qui jure qu'elle n'a rien vu. Fargue ne dit rien. Il se dit qu'il a volé deux chèvres à des voleurs pour les rendre à un homme qui ne se souviendra pas d'en avoir perdu, ni d'en avoir retrouvé. Il se dit que c'est l'acte le plus inutile qu'il ait jamais fait. Il se dit qu'il a vu, au bout d'une terrasse, à l'aube, un vieil homme serrer le cou d'une chèvre comme on serre un enfant qu'on croyait mort, et que rien, dans toute sa vie calculée, ne lui a jamais rapporté autant.",
      ],
      choices: [{ label: "Retourner à la marmite", fx: { quest: "TE" }, back: "A4f_jours" }] },
  },
  extras: {
    people: {
      bourrache: { name: "Bourrache", aka: ["le vieux Doux aux chèvres"], qui: "Vieil homme du Haut-Verger, qui a perdu ses deux chèvres, Lait et Nuit, et qui les cherche en souriant." },
    },
    quests: [
      { id: "TE", act: "IV", kind: "annexe", title: "Les chèvres de Bourrache", start: "TE_vieux", doit: "brigands", echo: ["te:punit", "te:loi", "te:rend"] },
    ],
  },
};
