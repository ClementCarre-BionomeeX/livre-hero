// L'Île Folle-Aiguille · side story « Les taches de Tual Pengam » (owes its question to Kafka's The Metamorphosis:
// how long does a family's love hold when one of its own becomes a horror and a burden?). Act III, Victorine on the way
// to Brisegrève: Tual Pengam, gabier, hides pale patches on his back and forearms that feel nothing when she pricks
// them. Leprosy, early. It passes from man to man rarely and slowly, but the word alone would empty the forecastle.
// His younger brother Alan, fifteen, a novice, worships him and sleeps in the next hammock. Victorine tells the
// captain, who will land him at Brisegrève (ue:capitaine), keeps the secret and treats him as she can (ue:secret), or
// tells Alan and leaves the brothers to choose (ue:frere). Wired in A3v_jours.
module.exports = {
  passages: {
    UE_novice: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "mer",
      text: [
        "Il est assis sur la dernière marche de l'échelle, le menton dans les mains, un garçon de quinze ans, blond comme son frère, maigre comme on l'est à cet âge, avec des pieds trop grands et des coudes partout. Il attend. Il se lève quand Victorine passe la tête par la porte, et demande, très vite, si son frère a mal.",
        "Elle dit que ce n'est qu'une écharde. Il respire. Il se rassied. Il dit que son frère ne se plaint jamais, alors il faut deviner. Il dit qu'il est le meilleur gabier de la grand-vergue, que la capitaine l'a dit elle-même, qu'il peut prendre un ris tout seul par grand vent, et qu'il lui apprend, à lui, Alan, un nœud par jour, depuis Morlenc.",
        "Il sort de sa poche un bout de ligne, et il fait devant elle un nœud compliqué, très vite, sans regarder, et le défait d'une saccade. Il dit que c'est un nœud de vache, que son frère dit que c'est le plus utile, parce qu'il tient tout et se défait d'un coup. Il dit qu'un jour, il sera aussi bon que Tual. Il dit qu'ils auront un navire à eux, tous les deux, et que leur mère viendra vivre à bord.",
        "Il regarde vers la porte de l'infirmerie, derrière laquelle son frère remet sa chemise. Il dit, plus bas, que Tual ne veut jamais se baigner avec les autres, même quand il fait chaud, et que les gabiers se moquent, et qu'il les a frappés, deux fois, pour ça. Il est fier de les avoir frappés. Victorine regarde ses mains d'enfant, qui refont le nœud de vache, et le défont, et le refont."
      ],
      choices: [
        { back: "UE_epingle", label: "Retourner dans l'infirmerie" }
      ] },
    UE_traite: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle a emporté de Varnèse trois traités de la Faculté, reliés en veau, qu'elle garde dans son coffre sous ses robes, et qu'elle relit le soir comme d'autres relisent les Évangiles. Elle cherche la page. Elle la connaît. Elle la relit quand même, à la lanterne, avec les mains qui tremblent un peu.",
        "Le premier traité, le plus ancien, dit des choses terribles, en latin, avec des gravures : les doigts qui tombent, les visages de lion, les cliquettes que les malades devaient agiter pour qu'on s'écarte, les messes des morts qu'on disait pour eux de leur vivant, avant de les enfermer. Le deuxième dit à peu près la même chose, en français, avec moins de gravures. Le troisième, le plus récent, écrit par un médecin qui a passé vingt ans dans les colonies des longues routes, dit autre chose.",
        "Il dit que le mal se prend peu, et lentement. Qu'il a vécu vingt ans au milieu des malades sans le prendre. Que les infirmières des lazarets le prennent rarement, et les maris des malades presque jamais. Il dit que la peur du mal a tué plus de malades que le mal lui-même, par l'abandon, la faim, la honte. Il dit, à la dernière ligne du chapitre, une phrase que quelqu'un, avant Victorine, a soulignée à l'encre, d'un trait ferme : « Le plus contagieux, dans cette maladie, c'est l'horreur. »",
        "Elle referme le traité. Elle se demande qui a souligné la phrase. Elle a acheté le livre d'occasion, chez un bouquiniste de Varnèse, dans un lot de livres de médecin mort. Elle se dit qu'il y a eu, avant elle, quelqu'un qui a lu cette page à la lanterne, avec des mains qui tremblaient."
      ],
      choices: [
        { back: "UE_epingle", label: "Retourner dans l'infirmerie" }
      ] },
    UE_epingle: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "mer",
      fx: { meet: "tual" },
      text: [
        { first: true, text: "Il vient pour une écharde, une vraie, plantée dans la paume, qu'elle retire en deux minutes. Puis il reste assis sur le coffre, la chemise ouverte à cause de la chaleur, et elle voit, en lui bandant la main, la tache sur son avant-bras. Une plaque pâle, ovale, aux bords un peu rosés, large comme une pièce de cinq livres, plus claire que la peau autour, sur un bras tanné par vingt ans de soleil. Elle demande s'il en a d'autres. Il dit que non. Il dit non trop vite." },
        { first: true, text: "Tual Pengam, gabier, trente ans, un grand gaillard blond et calme qu'on dit le meilleur ouvrier de la grand-vergue. Elle lui demande d'ôter sa chemise. Il refuse. Elle insiste, d'une voix de médecin. Il obéit. Dans le dos, trois autres plaques, plus grandes. Elle prend une épingle sur sa pelote. Elle pique la peau saine : il sursaute. Elle pique au milieu de la tache : il ne bouge pas. Elle pique plus fort. Il demande, poliment, quand elle va commencer." },
        { first: true, text: "Elle repose l'épingle. Elle connaît ce signe. Elle l'a lu dans les traités et vu une fois, à l'hospice de la Faculté, chez un vieux marin qu'on gardait dans une chambre à part, au bout d'un couloir où personne ne passait. Elle dit le mot à voix basse. Il le connaissait déjà. Il le sait depuis un an. Il a vu les mêmes taches sur un matelot, dans un port des longues routes, et ce qu'on a fait au matelot : on l'a débarqué sur un îlot, avec une barrique d'eau, et le navire est reparti." },
        { again: true, text: "Tual Pengam, assis sur le coffre, la chemise ouverte, attend qu'elle dise le mot qu'il connaît déjà." }
      ],
      choices: [
        { label: "Regarder le novice qui attend son frère, assis sur l'échelle de l'infirmerie", to: "UE_novice", hide: { seen: "UE_novice" } },
        { label: "Ouvrir les traités de la Faculté, à la page de ce mal", to: "UE_traite", hide: { seen: "UE_traite" } },
        { label: "Lui demander qui sait", to: "UE_alan" }
      ] },
    UE_alan: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "mer",
      text: [
        "Personne. Personne ne sait. Il se lave seul, la nuit, quand l'avant dort. Il garde sa chemise sous le soleil des tropiques, ce qui fait rire les autres, qui le disent pudique comme une novice. Il a peur pour un seul homme à bord : son frère. Alan. Quinze ans, novice de la grand-vergue, qui dort dans le hamac voisin, qui mange dans son écuelle, qui le suit partout comme un chien, et qui veut devenir aussi bon gabier que lui. Tual l'a fait embarquer. Leur mère le lui a confié sur le quai.",
        "Victorine lui explique ce qu'elle sait, et ce que les traités disent : ce mal se prend peu, lentement, au bout d'années de vie commune, et beaucoup ne le prennent jamais. Il n'y a pas de remède. Il y a des onguents, de l'huile d'un arbre des longues routes qui ralentit parfois le mal, et le soin des plaies quand elles viennent. Il peut vivre longtemps. Vingt ans. Plus. Mais il n'y a aucun équipage au monde qui garderait à bord un homme dont on sait qu'il a ce mal-là, et aucune capitaine qui le pourrait, même si elle le voulait. Les hommes descendraient tous à Brisegrève avant lui.",
        "Il dit qu'il le sait. Il demande seulement qu'on n'en dise rien à Alan. Il dit que le jour où Alan saura, il le regardera autrement, et que c'est ça, plus que le reste, qu'il ne supportera pas. Il demande aussi, d'une voix très calme, ce qu'elle va faire, elle. Brisegrève est à six jours. Il y a, au fort, à ce qu'on dit, une tour où l'on met les malades qu'on ne veut pas voir. Il rhabille sa chemise, sans hâte, en commençant par la manche de la tache.",
      ],
      choices: [
        { label: "En parler à la capitaine, comme c'est son devoir", fx: { flag: "ue:capitaine" }, to: "UE_capitaine" },
        { label: "Garder le secret, et le soigner en cachette jusqu'à l'île", fx: { flag: "ue:secret" }, to: "UE_secret" },
        { label: "Dire la vérité à Alan, et laisser les deux frères décider", fx: { flag: "ue:frere" }, to: "UE_frere" },
      ] },
    UE_capitaine: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud l'écoute dans sa chambre, sans l'interrompre, en tournant sa longue-vue fermée entre ses doigts. Quand Victorine a fini, elle reste un long moment silencieuse. Puis elle dit qu'elle connaît Pengam depuis dix ans, que c'est le meilleur gabier de son bord, et qu'elle le débarquera à Brisegrève. Elle le dit d'une voix égale. Elle dit qu'elle ne peut pas faire autrement, parce que si elle le garde et que l'avant l'apprend, elle n'aura plus d'avant. Elle dit qu'il le sait. Elle dit qu'elle le lui annoncera elle-même, et qu'elle ne laissera personne d'autre le faire.",
        "Elle le fait le soir même, dans sa chambre, seule avec lui. On n'entend rien de ce qui se dit. Tual en ressort droit, le visage fermé. Le lendemain, la capitaine annonce à l'équipage que Pengam débarque à Brisegrève pour une fièvre qu'il a rapportée des longues routes, que la médecin juge contagieuse, et qu'il sera soigné au fort. Personne ne pose de question. Le mot n'est pas prononcé. La capitaine lui a laissé ça : un mensonge qui sonne comme une maladie ordinaire.",
        "Alan pleure toute la nuit dans son hamac, à côté du hamac vide, qu'on a déjà décroché. Il vient trouver Victorine, le matin. Il demande si c'est grave. Elle dit que c'est long. Il demande s'il peut débarquer avec son frère. Elle dit qu'il faut le demander à son frère. Tual a déjà répondu, la veille, à la capitaine : non. Alan continuera. Alan deviendra gabier. C'est tout ce qu'il demande.",
        "À Brisegrève, Victorine accompagnera Tual jusqu'à la porte de la tour, et elle laissera au fort l'huile, les onguents, et une lettre pour le chirurgien du fort, quand il y en aura un. Elle a fait son devoir. Elle a fait celui de la capitaine aussi, en le lui apportant. Elle sait que personne, sur ce navire, n'a eu le choix, ni elle, ni la capitaine, ni lui. C'est peut-être ce qui rend la chose supportable. C'est sûrement ce qui la rend si triste.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "UE" }, back: "A3v_jours" }] },
    UE_secret: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "mer",
      text: [
        "Elle lui dit qu'elle ne dira rien. Qu'il viendra chaque soir à l'infirmerie, après le quart, pour l'onguent, et qu'il lui montrera tout, chaque fois, les taches, les mains, les pieds, et qu'elle notera. Qu'il ne partagera plus l'écuelle de son frère, ni sa couverture, ni rien de ce qui touche la peau, sous un prétexte quelconque qu'il trouvera. Qu'au premier ulcère, à la première plaie qui ne guérit pas, elle ira trouver la capitaine. Il accepte. Il lui serre la main. Il est le premier, depuis un an, à toucher une main sans avoir peur pour elle.",
        "Il vient chaque soir. Elle frotte les taches à l'huile, une huile épaisse, verdâtre, qui sent la noisette rance, qu'elle avait embarquée pour autre chose. Il ne parle pas beaucoup. Il parle d'Alan. De la façon dont Alan prend un ris. De ce qu'Alan a dit à la cambuse. Il est fier de son frère comme un père. Victorine pense qu'elle soigne un homme pour qu'il puisse continuer à regarder son frère grandir, et que c'est un bon motif pour enfreindre une règle.",
        "Alan, lui, souffre. Son frère ne veut plus manger dans la même écuelle. Il ne veut plus qu'on se prête la vareuse. Il change de hamac, pour un autre, plus loin, en disant qu'il ronfle. Alan croit qu'il a fait quelque chose de mal. Il vient demander à Victorine, un soir, si son frère est fâché contre lui, et pourquoi. Elle dit que non. Elle dit qu'il a ses raisons. Elle voit le garçon partir, les épaules basses, et elle pense que garder un secret, c'est aussi choisir qui va souffrir de ne pas le connaître.",
        "Elle tient son carnet. Les taches ne grandissent pas, pour l'instant. Elle sait que ce répit ne durera pas toujours, et qu'un jour, sur une île ou ailleurs, il faudra dire. Elle s'est donné du temps. Elle en a donné à Tual. Elle en a pris à Alan.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "UE" }, back: "A3v_jours" }] },
    UE_frere: { act: "III", title: "Les taches de Tual Pengam", place: "cormorane", ambiance: "mer",
      text: [
        "Elle fait venir Alan à l'infirmerie, le soir, et elle fait venir Tual aussi. Tual devient blanc en comprenant. Elle dit à Alan, simplement, avec les mots exacts, ce qu'a son frère. Elle dit ce que le mal fait, ce qu'il ne fait pas, comment il se prend, comment il ne se prend presque jamais. Elle dit ce qui attend un gabier dont un équipage apprend la chose. Elle dit que le reste les regarde, eux deux, et personne d'autre. Puis elle sort, et elle s'assied sur l'échelle, de l'autre côté de la porte.",
        "Elle n'entend rien pendant un long moment. Puis elle entend Alan pleurer, des sanglots de garçon, rauques, maladroits. Puis elle entend un bruit qu'elle ne comprend pas. Elle entrouvre la porte. Alan a remonté la manche de son frère et regarde la tache, de tout près. Il la touche du doigt. Il appuie. Il demande si ça fait mal. Tual dit que non, justement, que c'est ça, le mal. Alan dit : « Alors je peux appuyer. » Et il appuie, et il rit à travers ses larmes, et Tual le regarde faire comme on regarde un miracle.",
        "Ils décident, à deux, cette nuit-là. Ils débarqueront ensemble à Brisegrève, quand le moment viendra, ou à l'île, ou au premier port. Tual a voulu refuser. Alan a dit qu'il avait quinze ans et qu'il était inscrit au rôle sous son propre nom, et qu'il débarquerait où il voudrait. Tual a cédé. Jusque-là, ils se taisent. Alan garde l'écuelle à part, de lui-même, sans qu'on le lui demande, et il continue de toucher la tache, le soir, du bout du doigt, comme on vérifie qu'une chose est toujours là.",
        "Victorine a mis entre deux frères un poids qu'un seul portait. Elle se dit que c'était leur poids à tous les deux. Elle se dit aussi qu'elle a peut-être volé à Tual le seul regard qu'il voulait garder intact, et qu'Alan le lui a rendu, ce qu'elle ne pouvait pas savoir d'avance. Elle note dans son carnet : *Les familles. Ne jamais présumer.* Elle souligne deux fois.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "UE" }, back: "A3v_jours" }] },
  },
  extras: {
    people: {
      tual: { name: "Tual Pengam", aka: ["le gabier de la grand-vergue"], qui: "Gabier de la grand-vergue de la Cormorane, frère aîné d'Alan, novice." },
    },
    quests: [
      { id: "UE", act: "III", kind: "annexe", title: "Les taches de Tual Pengam", start: "UE_epingle", doit: "metamorphose", echo: ["ue:capitaine", "ue:secret", "ue:frere"] },
    ],
  },
};
