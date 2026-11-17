// L'Île Folle-Aiguille · side story « Les hamacs de l'infirmerie » (owes its question to Chekhov's Gusev: what does a
// dying man believe he is sailing home to, and what does one owe him in the last days, the truth or the dream?). Act
// III, Victorine at the Écueil-Rouge, ship at anchor in the heat: two sick sailors hang side by side in the sickbay,
// Primel Gouriou, a consumptive topman from the inland orchards who talks only of going home, and Albéric Pastorel, a
// former notary's clerk who rails against everything and dies first. Gouriou then asks whether he too will go into
// the sea. Victorine obtains a grave in the red rock (sf:terre), lets him believe he will see his orchard (sf:pays),
// or tells him the truth and takes his letter (sf:verite). Optional: SF_pastorel, SF_verger. Wired in A3w_ecueil.
module.exports = {
  passages: {
    SF_poste: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "mer",
      fx: { meet: "gouriou" },
      text: [
        { first: true, text: "Le navire est au mouillage sous l'Écueil, et le vent qui l'a poussé jusque-là est mort en arrivant, comme un cheval crevé à la porte de l'écurie. Dans l'infirmerie, sous la ligne de flottaison, l'air a la consistance d'un bouillon. La lanterne brûle sans flamme visible. Les deux hamacs du fond se balancent à peine, au rythme de deux respirations qui ne vont pas du même pas." },
        { first: true, text: "Dans le premier, Primel Gouriou, gabier, trente ans, grand corps devenu long, les pommettes rouges et le reste blanc, tousse dans un linge qu'il plie ensuite avec soin, la tache en dedans, pour que la médecin ne la voie pas. Il couve la phtisie depuis des mois, et la chaleur l'a fait éclore. Il le sait sans le savoir, à la manière des paysans, qui savent tout ce qu'on ne leur dit pas et n'en croient rien." },
        { first: true, text: "Dans le second, Albéric Pastorel, matelot par accident, ancien clerc de notaire tombé dans la marine pour des raisons qu'il raconte différemment chaque soir, maigre, jaune, la dysenterie au ventre et le venin à la bouche. Il parle. Il parle sans arrêt, d'une voix aiguë qui grince comme une poulie sèche. Il parle contre la capitaine, contre l'armateur, contre la mer, contre Dieu, contre Gouriou." },
        { first: true, text: "« Lui, dit Pastorel à Victorine, en montrant son voisin du menton, il croit qu'il rentre chez lui. Il croit qu'on le débarquera à la prochaine escale, qu'il prendra une diligence, qu'il retrouvera ses pommiers. Regardez-le, madame la médecin. Il est plus mort que moi. Et moi, je proteste. C'est toute la différence. »" },
        { again: true, text: "Les deux hamacs, côte à côte. Gouriou plie son linge. Pastorel proteste." }
      ],
      choices: [
        { label: "Écouter Pastorel jusqu'au bout de sa colère", to: "SF_pastorel", hide: { seen: "SF_pastorel" } },
        { label: "Demander à Gouriou à quoi ressemblent ses pommiers", to: "SF_verger", hide: { seen: "SF_verger" } },
        { label: "Veiller la nuit à l'infirmerie", to: "SF_nuit" }
      ] },
    SF_pastorel: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "mer",
      fx: { meet: "pastorel" },
      text: [
        "Pastorel se soulève sur un coude. Il a attendu toute sa vie quelqu'un qui écoute jusqu'au bout, et cela se voit à la manière dont il s'installe dans sa colère, comme dans un fauteuil.",
        "Il dit que le monde est une étude de notaire. Qu'il a passé quinze ans à recopier des actes où l'on vendait des champs, des maisons, des filles à marier, et qu'il a compris, à la cinquantième succession, que tout se vend, même les morts, surtout les morts. Qu'il s'est embarqué parce qu'on lui avait dit que la mer était libre, et qu'il a trouvé à bord une hiérarchie plus serrée qu'à la préfecture, avec des coups de garcette en plus.",
        "« Je suis le seul homme de ce navire qui dise ce qu'il voit, dit-il. Les autres, ce sont des moutons. Lui, à côté, c'est un mouton malade. Il bêle après ses pommiers. Moi, je mourrai debout. Enfin, couché. Mais en protestant. J'écrirai à l'Amirauté. » Il retombe sur le dos, épuisé, la bouche ouverte.",
        "Gouriou, dans l'autre hamac, attend que le silence soit bien installé. Puis il dit, doucement, sans méchanceté : « Il est savant, le monsieur. Mais il ne sait pas ce que c'est, un pommier en fleur. » Pastorel ne répond rien. Il dort déjà, ou il fait semblant, la mâchoire serrée."
      ],
      choices: [
        { back: "SF_poste", label: "Retourner entre les deux hamacs" }
      ] },
    SF_verger: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Gouriou n'a pas besoin qu'on le pousse. Il parle de son verger comme d'autres parlent de leur femme, avec des yeux qui voient à travers la cloison du bord, la mer, la distance.",
        "Il y a quarante pommiers, sur une pente, derrière une ferme basse, dans l'intérieur des terres, à trois jours de marche de la côte. Des reinettes, des pommes de cidre amères, et un vieux pommier tordu, au fond, qui donne des pommes rouges grosses comme le poing, que personne ne sait nommer. Son frère tient la ferme. Il a une jument grise qui s'appelle la Dame. Au printemps, le verger est blanc. On dirait qu'il a neigé à l'envers, du sol vers le ciel.",
        "Il dit qu'il est parti en mer parce que son frère était l'aîné, et qu'il fallait bien que l'autre parte. Il dit qu'il a gagné de quoi acheter le champ d'à côté, presque, et qu'il rentrera avec. Il demande à Victorine si on peut faire pousser des pommiers sur une île. Elle dit qu'elle ne sait pas. Il dit qu'il essaiera, à l'île, avec les pépins qu'il garde dans un mouchoir, au fond de son sac.",
        "Il tousse. Il plie le linge, la tache en dedans. Il sourit, épuisé, heureux. Il dit que la chaleur, ici, c'est bon pour les poumons, qu'un vieux matelot le lui a juré, à Brisegrève, sur la tête de sa mère. Victorine garde pour elle ce qu'elle pense des serments des vieux matelots."
      ],
      choices: [
        { back: "SF_poste", label: "Retourner entre les deux hamacs" }
      ] },
    SF_nuit: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Pastorel meurt pendant la nuit, entre deux phrases. Il était en train d'expliquer à la lanterne que la mort elle-même est une clause abusive, et la phrase s'arrête au milieu, et la lanterne attend la suite, et la suite ne vient pas. Victorine lui ferme la bouche, qui proteste encore.",
        "Au matin, on le coud dans sa toile de hamac, avec un boulet aux pieds. La capitaine lit trois versets, vite, dans la chaleur. La planche bascule. Le paquet de toile glisse, tombe, fait dans l'eau verte un bruit bref et sans dignité, et s'en va vers le fond en tournant sur lui-même. Des formes grises, longues, sortent d'on ne sait où et le suivent.",
        "Gouriou a voulu monter sur le pont, porté par deux matelots, pour voir. Il a tout vu. Redescendu dans son hamac, il reste longtemps les yeux au plafond. Puis il appelle Victorine. Il lui prend le poignet, de sa main brûlante et légère comme une feuille.",
        "« Madame la médecin, dit-il. Est-ce qu'on me mettra à l'eau, moi aussi ? Avec les bêtes grises ? » Sa mort, il la tient pour acquise. Ce qu'il veut savoir, c'est où on le mettra."
      ],
      choices: [
        { label: "Lui promettre une tombe dans la roche rouge, et aller la demander à la capitaine", fx: { flag: "sf:terre" }, to: "SF_terre" },
        { label: "Lui dire qu'il guérira, et qu'il reverra ses pommiers en fleur", fx: { flag: "sf:pays" }, to: "SF_pays" },
        { label: "Lui dire la vérité, et prendre de quoi écrire", fx: { flag: "sf:verite" }, to: "SF_verite" }
      ] },
    SF_terre: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "La capitaine écoute Victorine sans l'interrompre, puis elle regarde le récif, la roche rouge, poreuse, coupante, sans un pouce de terre. « Vous voulez creuser là-dedans, dit-elle. Avec quoi ? » Victorine dit : avec des barres à mine, et des bras. La capitaine soupire. Elle dit qu'elle retardera l'appareillage d'une demi-journée, et qu'elle donne quatre hommes, pas une minute de plus.",
        "Gouriou meurt le lendemain, à l'aube, en demandant si on a trouvé la place. On l'a trouvée : une fente dans la roche, à mi-pente, à l'abri du vent, que les quatre hommes ont élargie en jurant pendant six heures, les mains en sang, sur cette pierre qui coupe comme du verre. On l'y couche dans sa toile. On remplit la fente avec des blocs rouges. On plante au-dessus une croix de deux lattes, attachées avec du fil à voile.",
        "Avant de refermer, Victorine fouille son sac. Elle y trouve le mouchoir, et dans le mouchoir, une poignée de pépins noirs. Elle les sème sur la tombe, dans le peu de poussière rouge qui s'est accumulée entre les blocs. Elle sait qu'il n'y a ni terre ni eau sur cet écueil, et que rien ne poussera. Elle les sème quand même, un par un.",
        "En remontant dans le canot, un des quatre hommes, celui qui a le plus juré, dit en regardant ses mains coupées : « Au moins, les bêtes grises ne l'auront pas. » Les trois autres hochent la tête. Ils ont l'air presque contents."
      ],
      choices: [
        { label: "Revenir sur le récif", fx: { quest: "SF" }, back: "A3w_ecueil" }
      ] },
    SF_pays: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Victorine lui dit qu'il guérira. Elle le dit d'une voix ferme, sa voix de médecin, celle qu'on croit. Elle dit que la phtisie se soigne au soleil, que la chaleur du sud l'aura asséchée avant l'île, qu'il rentrera au printemps prochain, et qu'il verra le verger blanc.",
        "Il la croit. C'est même effrayant, la facilité avec laquelle il la croit. Son visage se détend d'un coup, comme une voile qu'on largue. Il parle, pendant deux jours, de ce qu'il fera en rentrant : le champ d'à côté, la jument grise, une femme, peut-être, s'il en trouve une qui aime les pommes. Il demande à Victorine si elle aime les pommes. Elle dit oui.",
        "Il meurt le surlendemain, au coucher du soleil, au milieu d'une phrase sur le vieux pommier tordu, comme Pastorel, mais dans l'autre sens : la phrase s'arrête sur un mot heureux. On le coud dans sa toile. La planche bascule. Victorine reste à la lisse longtemps après que les autres sont partis.",
        "Elle regarde le paquet de toile descendre dans l'eau verte, en tournant, et les formes grises qui viennent. Puis, au-dessus, le ciel du soir se met à faire des choses que le ciel ne fait nulle part ailleurs : un nuage en forme d'arc de triomphe, un autre en forme de lion, puis, pendant une minute, toute une longue traînée blanche, rose au bord, qui ressemble à s'y méprendre à une pente plantée d'arbres en fleur. Personne d'autre ne regarde. La mer, en bas, est d'une tendresse obscène."
      ],
      choices: [
        { label: "Revenir sur le récif", fx: { quest: "SF" }, back: "A3w_ecueil" }
      ] },
    SF_verite: { act: "III", title: "Les hamacs de l'infirmerie", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Victorine lui dit la vérité. Elle lui dit qu'il ne rentrera pas. Qu'il a quelques jours. Que, sur un navire, les morts vont à la mer, et que la mer, en vérité, est le cimetière le plus propre qu'elle connaisse. Elle dit tout, dans l'ordre, sans adoucir, parce qu'il le lui a demandé avec ses yeux.",
        "Gouriou reste silencieux une heure. Il regarde le plafond. Puis il dit : « Alors il faut écrire à mon frère. Pour le champ. » Elle prend sa trousse, une feuille, un crayon. Il dicte. La lettre qu'il dicte est une lettre d'affaires : le champ d'à côté, la somme qu'il laisse, à qui la réclamer, ce qu'il faut en faire, la jument grise à ferrer avant l'hiver, le vieux pommier tordu à tailler en mars, pas avant, sinon il pleure.",
        "À la fin, il dit : « Et tu mettras, en bas, que je n'ai pas eu peur. » Victorine écrit. Il demande qu'elle relise. Elle relit. Il dit que c'est bien. Il dit, en refermant les yeux, qu'il n'a pas eu peur, en effet, et qu'il est surpris, et que ça lui fait un drôle d'effet, d'être surpris par soi-même, à trente ans, au fond d'un navire.",
        "Il meurt le surlendemain. On le met à la mer. Victorine plie la lettre en quatre et la glisse dans sa trousse, avec les pépins qu'elle a trouvés dans son mouchoir, pour les envoyer à la première escale où passera un courrier. Elle tient la lettre de la main gauche. La main droite, celle qui a écrit, tremble un peu, ce qui ne lui arrive jamais."
      ],
      choices: [
        { label: "Revenir sur le récif", fx: { quest: "SF" }, back: "A3w_ecueil" }
      ] }
  },
  extras: {
    people: {
      gouriou: { name: "Primel Gouriou", qui: "Gabier phtisique de l'infirmerie, fils de paysans de l'intérieur des terres, qui ne parle que de son verger de quarante pommiers." },
      pastorel: { name: "Albéric Pastorel", qui: "Ancien clerc de notaire devenu matelot, malade de la dysenterie, qui proteste contre tout dans le hamac voisin." }
    },
    quests: [
      { id: "SF", act: "III", kind: "annexe", title: "Les hamacs de l'infirmerie", start: "SF_poste", doit: "goussev", echo: ["sf:terre", "sf:pays", "sf:verite"] }
    ]
  }
};
