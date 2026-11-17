// L'Île Folle-Aiguille · side story « Le domaine dans la brume » (owes its question to Le Grand Meaulnes: can one find
// again a place one has seen only once, on a night when one was lost?). Coming back from Varnèse in a fog, the child
// loses the road and finds a manor lit up on the moor, a feast of masks and children, a girl in blue who waits for a
// bridegroom who does not come. The child dances with her (zb:danse) or keeps a blue ribbon (zb:ruban). Next day the
// road leads to nothing but a burnt house that Zélie says has been a ruin for twenty years. Wired in A1_jours.
module.exports = {
  passages: {
    ZB_brume: { act: "I", title: "Le domaine dans la brume", place: "route_varnese", ambiance: "nuit",
      text: [
        "Tu reviens de Varnèse à la nuit tombante, avec un panier de clous pour ton père, et la brume te prend à mi-chemin, sur la lande, d'un coup, comme une main qu'on pose sur les yeux. Elle monte de la mer sans un bruit. En dix pas, tu ne vois plus le chemin. En vingt, tu ne vois plus tes pieds. Tu continues, parce qu'on continue, en suivant au pied la sente de terre battue entre les bruyères, et au bout d'un moment tu t'aperçois que tes sabots sont dans la bruyère, et que la sente a disparu.",
        "Tu t'arrêtes. Tu écoutes. Tu n'entends pas la mer. À la Pointe, on entend toujours la mer ; c'est la première chose qu'on entend en naissant, et la dernière, dit Zélie, en mourant. Ce soir, rien. La brume a tout mangé.",
        "Alors tu entends autre chose. Très loin, à droite, ou à gauche, on ne sait pas, dans la brume : un violon. Une danse. Un air que tu ne connais pas, vif, ancien, avec des reprises, et des rires par-dessus, des rires d'enfants.",
      ],
      choices: [{ label: "Marcher vers la musique", to: "ZB_manoir" }] },
    ZB_manoir: { act: "I", title: "Le domaine dans la brume", place: "route_varnese", ambiance: "nuit",
      text: [
        "Tu marches longtemps, plus longtemps qu'il ne faudrait pour traverser la lande de la Pointe d'un bout à l'autre. Puis un mur sort de la brume, un mur de pierres sèches couvert de lichen, avec une grille de fer ouverte, et derrière la grille, une allée de grands hêtres, et au bout de l'allée, une maison.",
        "Une maison de maître, longue, à deux étages, avec un toit d'ardoise et des tourelles aux angles, et toutes ses fenêtres allumées, toutes, du rez-de-chaussée aux lucarnes, si bien qu'elle flotte dans la brume comme une lanterne de papier. Il y a des lampions dans les hêtres. Il y a des voitures dans la cour, de vieilles voitures à la caisse peinte, dont les chevaux mangent dans des sacs. Il y a des enfants qui courent dans l'allée, en costumes de bergers, de pages, de Turcs, avec des masques de carton, et qui passent à côté de toi en riant comme si tu étais attendu{e}.",
        "Personne ne te demande rien. Un vieil homme en habit à la mode d'autrefois, avec une perruque poudrée, te met dans la main une coupe de cidre doux et te dit : « Vous êtes de la noce ? Bien sûr. Tout le monde est de la noce, ce soir. » Et il s'en va.",
        "Dans le grand salon, on danse. Les meubles sont vieux, superbes, un peu usés ; les miroirs sont piqués ; les chandelles coulent sur les tapis sans que personne les mouche. Au milieu de la danse, il y a une jeune fille en robe bleue, dix-huit ans peut-être, très pâle, avec des cheveux blonds relevés et un ruban bleu dedans, qui ne danse pas. Elle regarde la porte. Elle la regarde comme on regarde la mer quand on attend un navire.",
      ],
      choices: [{ label: "Demander qui elle attend", to: "ZB_fiancee" }] },
    ZB_fiancee: { act: "I", title: "Le domaine dans la brume", place: "route_varnese", ambiance: "nuit",
      text: [
        "Tu le demandes à une petite fille déguisée en fée, qui te répond en soufflant dans un mirliton : « Le fiancé ! Il devait être là à la nuit. Il vient de Morlenc. Il ne vient pas. » Elle rit. « Ça fait des heures. Tout le monde danse quand même. C'est le marquis qui l'a dit. On ne gâche pas une fête pour un homme en retard. »",
        "La jeune fille en bleu t'a vu{e}. Elle traverse le salon, entre les danseurs, et vient à toi. Elle a des yeux gris, immenses, qui ne cillent presque pas. « Vous venez du dehors, dit-elle. De la route. Vous l'avez vu ? Un cavalier, en manteau gris, sur un cheval pie ? »",
        "Tu n'as vu personne. Tu le dis. Elle hoche la tête, lentement, comme si elle le savait déjà, et qu'elle avait seulement besoin de l'entendre dans une bouche de plus.",
        "« Alors dansez avec moi, dit-elle. Une seule fois. Pour qu'on ne dise pas que la mariée n'a pas dansé, le soir de ses noces. »",
      ],
      choices: [
        { label: "Danser avec elle", fx: { flag: "zb:danse" }, to: "ZB_danse" },
        { label: "Refuser, poliment, et lui demander seulement un ruban, pour te souvenir", fx: { flag: "zb:ruban" }, to: "ZB_ruban" },
      ] },
    ZB_danse: { act: "I", title: "Le domaine dans la brume", place: "route_varnese", ambiance: "nuit",
      text: [
        "Tu ne sais pas danser cette danse. Elle te la montre, à mesure, d'une pression de la main, d'un regard. Vous tournez au milieu du salon, sous les chandelles qui coulent, entre les miroirs piqués, et les enfants masqués font un cercle autour de vous et frappent dans leurs mains. Sa main est froide. Très froide, comme une main qu'on aurait tenue longtemps dans l'eau de la fontaine.",
        "Quand la danse s'arrête, elle te sourit, pour la première fois. « Merci. Il ne viendra pas. Je le sais depuis le début de la soirée. Je voulais seulement danser une fois. » Elle retourne près de la porte. Elle recommence à la regarder.",
        "Tu sors dans la cour. La brume a encore épaissi. Tu t'assieds sur le marchepied d'une voiture, pour te reposer une minute, en écoutant le violon. Et tu t'endors.",
      ],
      choices: [{ label: "Te réveiller", to: "ZB_matin" }] },
    ZB_ruban: { act: "I", title: "Le domaine dans la brume", place: "route_varnese", ambiance: "nuit",
      text: [
        "Elle te regarde, étonnée. Puis elle dénoue le ruban bleu de ses cheveux, d'un geste lent, et te le met dans la main. Il est de soie, un peu passé, et il sent la lavande et quelque chose de plus ancien, de la poussière d'armoire.",
        "« Gardez-le, dit-elle. Si vous le voyez, sur la route, montrez-le-lui. Il comprendra que je l'ai attendu. » Ses cheveux défaits tombent sur ses épaules. Elle retourne près de la porte, et recommence à la regarder.",
        "Tu sors dans la cour, le ruban dans ton poing. La brume a encore épaissi. Tu t'assieds sur le marchepied d'une voiture, pour te reposer une minute, en écoutant le violon. Et tu t'endors.",
      ],
      choices: [{ label: "Te réveiller", to: "ZB_matin" }] },
    ZB_matin: { act: "I", title: "Le domaine dans la brume", place: "route_varnese", ambiance: "nature",
      text: [
        "C'est le froid qui te réveille, et le cri d'une corneille. Il fait jour. La brume s'est levée. Tu es couché{e} dans la bruyère, au bord de la lande, à un quart de lieue du Fanal, ton panier de clous à côté de toi. Il n'y a pas de voiture. Il n'y a pas de cour.",
        "Il y a, à cent pas, sur une petite butte que tu connais depuis toujours sans l'avoir jamais regardée, un mur de pierres sèches couvert de lichen, et une grille de fer rouillée, tordue, couchée dans les ronces. Derrière, une double rangée de souches noires, là où il y avait des arbres. Et au bout, des pans de murs effondrés, noircis par le feu, envahis par le lierre, avec des fenêtres vides qui donnent sur le ciel.",
        { if: { has: "zb:ruban" }, text: "Tu ouvres la main. Le ruban bleu est là. Il est pâle, presque gris, et il se défait entre tes doigts, comme un tissu qui aurait dormi vingt ans au fond d'une armoire." },
        { if: { has: "zb:danse" }, text: "Tu as encore froid à la main droite. Tu la frottes contre ta cuisse. Le froid ne s'en va pas, de toute la matinée." },
        "Au Fanal, Zélie t'écoute, en épluchant ses pommes de terre, sans lever les yeux. « Kerlivit, dit-elle. Le manoir de Kerlivit. Il a brûlé il y a vingt ans, la nuit d'une noce. Le fiancé n'est jamais venu. On dit qu'il s'est noyé dans la brume, avec son cheval, dans les marais de Varnèse. La fille a mis le feu, ou les chandelles. On n'a jamais su. » Elle coupe une pomme de terre en deux. « Tu n'iras plus sur la lande les soirs de brume. Ou alors avec ton père. »",
      ],
      choices: [{ label: "Rentrer les clous à l'atelier", back: "A1_jours" }] },
  },
  extras: {
    quests: [
      { id: "ZB", act: "I", kind: "annexe", title: "Le domaine dans la brume", start: "ZB_brume", doit: "meaulnes", echo: ["zb:danse", "zb:ruban"] },
    ],
  },
};
