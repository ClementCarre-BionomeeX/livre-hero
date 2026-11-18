// L'Île Folle-Aiguille · side story « Le fils de la lavandière » (owes its question to Maupassant's Le Papa de Simon:
// what makes a father, the name a child can throw back at the others or the arm that answers for him?). Act II, the
// ship's boy in the Basse-Fosse of Morlenc: a pack of street children chases a seven-year-old, Tudy Mahé, to the edge
// of the marsh, chanting that he has no father. The boy wants to walk into the water. The ship's boy brings him home
// to his mother, Azenor, a washerwoman, and then asks the big rope-maker of the street to stand in as his father
// (se:cordier), goes to teach the pack a lesson with fists (se:bat), or gives the child what a motherless mousse knows
// about living with a hole in the family (se:apprend). Optional: the pack's leader (SE_meneur), the mother's story
// (SE_azenor). Wired in A2m_bf.
module.exports = {
  passages: {
    SE_marais: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "tudy" },
      text: [
        "En bas de la Basse-Fosse, là où les ruelles cessent de descendre parce qu'il n'y a plus que de l'eau, le marais commence : une étendue plate, grise, hérissée de roseaux, que la marée remplit et vide deux fois par jour avec un bruit de bouche qui tète. L'odeur y est douce et pourrie. Les corneilles y marchent comme des huissiers.",
        "Une bande d'enfants dévale la dernière ruelle en hurlant. Dix, douze, pieds nus, la morve au nez, des bâtons à la main. Devant eux court un petit garçon de sept ans, en blouse propre, les cheveux blonds collés de sueur, qui tient ses sabots à la main pour courir plus vite. Les autres chantent derrière lui, sur l'air d'une ronde : « Tudy n'a pas de papa ! Tudy n'a pas de papa ! »",
        "Le petit garçon arrive au bord de l'eau. Il s'arrête. Il se retourne. La bande s'arrête aussi, à dix pas, ravie, essoufflée. Le plus grand, un gaillard de douze ans aux poings rouges, crie : « Où il est, ton papa ? Dans l'eau ? Va le chercher ! »",
        "Le petit garçon les regarde. Puis il pose ses sabots sur la berge, bien rangés, l'un à côté de l'autre, comme on les pose avant d'entrer dans une église. Et il se tourne vers le marais."
      ],
      choices: [
        { label: "Courir jusqu'à lui", to: "SE_berge" }
      ] },
    SE_berge: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu le rattrapes au moment où il a de l'eau jusqu'aux genoux. Il se laisse ramener, raide, le visage fermé, avec une dignité de petit vieux. La bande, en te voyant, recule de quelques pas, puis remonte la ruelle en sifflant, sans hâte, comme une meute qui sait qu'elle reviendra.",
        "Tu l'assieds sur la berge. Il remet ses sabots. Il ne pleure pas. Il dit, d'une voix très calme : « Je voulais me noyer. Parce que je n'ai pas de papa. »",
        "Tu lui demandes qui lui a dit qu'on se noyait pour ça. Il hausse les épaules. Il dit que le père Kervoal, le vieux pêcheur de la cale, s'est noyé l'an dernier, après la mort de sa femme, et que tout le monde a dit qu'il avait bien fait. Il dit que lui, il n'a personne à perdre, alors c'est encore plus simple.",
        "Il s'appelle Tudy Mahé. Sa mère est lavandière, au lavoir du bas, la plus belle femme de la rue, dit-il, et c'est pour ça que les autres mères ne lui parlent pas. Il dit ça sans comprendre, en récitant. Puis il te demande, très sérieusement, si toi, tu as un papa."
      ],
      choices: [
        { label: "Lui répondre que oui, et le ramener chez sa mère", to: "SE_lavoir" }
      ] },
    SE_meneur: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu retrouves le grand aux poings rouges assis sur une borne, à l'entrée de la rue des Cordiers, à cracher des noyaux de prune sur les passants. Il s'appelle Bertrand, c'est le fils du charcutier, et il a sur la pommette gauche une marque violette, à demi passée, en forme de quatre doigts.",
        "Il te regarde venir avec méfiance, puis avec mépris, puis, quand tu t'assieds à côté de lui sans rien dire, avec curiosité. Tu lui demandes pourquoi Tudy. Il crache un noyau. Il dit : « Parce qu'il est propre. »",
        "Il explique, en crachant. La mère de Tudy lave le linge des bourgeois de la haute ville, et elle lave son fils avec le même savon. Il a une blouse sans trou, des sabots cirés, les cheveux peignés tous les matins. Il sent le linge frais. Il apprend à lire chez les Sœurs. « Et il n'a pas de père, dit Bertrand. Il devrait être plus sale que nous. C'est pas juste. »",
        "Tu regardes la marque sur sa joue. Il voit que tu la regardes. Il dit, très vite, qu'il est tombé. Puis il ajoute, sans que tu demandes rien, que son père à lui rentre saoul le samedi, et que le samedi, il vaut mieux être dans la rue. Il crache un dernier noyau, très loin. « Lui, il a de la chance, dit-il. Il n'a personne pour le cogner. »"
      ],
      choices: [
        { back: "SE_lavoir", label: "Retourner au lavoir" }
      ] },
    SE_azenor: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      text: [
        "Azenor Mahé te raconte son histoire en battant le linge, parce qu'elle ne sait pas raconter autrement. Chaque phrase tombe avec le battoir.",
        "Elle avait dix-sept ans. Il était commis chez un armateur de la haute ville, il avait des manchettes, il parlait bien. Il a promis. Il est parti sur un navire de la compagnie, pour deux ans, en lui laissant une bague de cuivre et une adresse. La bague a verdi. L'adresse était celle d'un entrepôt. Elle a écrit trois fois. La troisième lettre est revenue, avec écrit dessus, d'une autre main : « Inconnu. »",
        "Le battoir s'arrête. Elle tord une chemise, longuement, jusqu'à ce que l'eau ne coule plus. Elle dit qu'elle ne lui en veut plus. Elle dit qu'elle en veut aux autres femmes du lavoir, qui lavent leur linge à trois pierres d'elle depuis sept ans sans lui dire bonjour, et qui ont, toutes, des maris qui boivent ou qui battent, et qui la regardent comme si c'était elle qui avait la maladie.",
        "« Je l'élève bien, dit-elle. Il est propre. Il sait ses prières. Il saura lire. Je ne peux pas lui fabriquer un père avec du savon. » Elle reprend le battoir. Elle frappe plus fort."
      ],
      choices: [
        { back: "SE_lavoir", label: "Retourner près de Tudy" }
      ] },
    SE_lavoir: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "azenor" },
      text: [
        { first: true, text: "Le lavoir du bas est une longue pierre inclinée sous un toit d'ardoises, au bord d'un ruisseau qui descend de la haute ville en emportant avec lui le savon des riches. Les femmes y sont à genoux, en rang, dans des caisses de bois garnies de paille, et elles battent le linge en parlant toutes à la fois. Quand tu arrives avec l'enfant, elles se taisent toutes à la fois." },
        { first: true, text: "Au bout du rang, seule, à trois pierres des autres, une jeune femme se relève. Elle est belle, en effet, d'une beauté fatiguée, avec de grands bras rouges et des yeux qui ont pleuré souvent sans que personne ne le voie. Elle voit le bas mouillé de la blouse. Elle comprend tout. Elle prend son fils contre elle, et le serre si fort qu'il proteste." },
        { first: true, text: "Elle te remercie, d'une voix basse. Derrière toi, les femmes du lavoir ont repris le battoir, plus fort qu'avant, et l'une d'elles dit, assez haut pour être entendue : « Le marais n'aurait pas été une grande perte. » Azenor Mahé ne se retourne pas. Ses épaules tremblent une fois, puis plus." },
        { first: true, text: "Au même moment, en haut de la ruelle, un homme énorme passe, un rouleau de chanvre sur l'épaule, qui doit peser autant qu'un veau. C'est le cordier de la rue, Yves-Marie Le Saout. Il s'est arrêté. Il a tout entendu. Il regarde la femme du lavoir qui a parlé, longuement, jusqu'à ce qu'elle baisse le nez sur son linge. Puis il regarde Azenor. Puis il s'en va, en silence, son veau de chanvre sur l'épaule." },
        { again: true, text: "Le lavoir bat son linge. Azenor Mahé, à trois pierres des autres, bat le sien, et Tudy, assis sur une marche, la regarde en balançant ses sabots." }
      ],
      choices: [
        { label: "Aller trouver le grand aux poings rouges, qui mène la bande", to: "SE_meneur", hide: { seen: "SE_meneur" } },
        { label: "Rester un moment près de Azenor Mahé, qui bat son linge", to: "SE_azenor", hide: { seen: "SE_azenor" } },
        { label: "Monter à la corderie, et demander à Le Saout s'il voudrait bien être le papa de Tudy", fx: { flag: "se:cordier" }, to: "SE_cordier" },
        { label: "Chercher la bande, demain, et lui apprendre à se taire", fx: { flag: "se:bat" }, to: "SE_bat" },
        { label: "Emmener Tudy au port, et lui dire ce que tu sais des familles qui ont un trou", fx: { flag: "se:apprend" }, to: "SE_apprend" }
      ] },
    SE_cordier: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "lesaout" },
      text: [
        "La corderie est une allée couverte, longue de deux cents pas, où l'on marche à reculons. Le Saout y file le chanvre, un paquet de filasse noué autour de la taille, en reculant à petits pas pendant qu'un apprenti tourne la roue à l'autre bout. Le fil sort de son ventre comme d'une araignée géante. Ses mains sont couvertes de corne et de cicatrices.",
        "Tu viens avec Tudy, qui a voulu venir. Le Saout s'arrête de reculer. Tu lui expliques. Il écoute, en roulant entre ses doigts un bout de fil. Tudy, lui, ne dit rien non plus ; il regarde l'homme d'en bas, de très bas, avec une attention de juge.",
        "Le Saout s'accroupit. Ça prend du temps, il est grand. Il met son visage à hauteur de celui de l'enfant. Il dit : « Je veux bien. Si ta mère veut bien. » Tudy réfléchit. Il demande : « Est-ce que tu es fort ? » Le Saout lui tend un bout de cordage, gros comme un poignet, et le casse en deux, d'un coup, entre ses mains. Tudy hoche la tête. Il dit que ça ira.",
        "Le lendemain, tu repasses au marais. La bande est là. Tudy aussi. Il leur crie, d'une voix aiguë et triomphante : « Mon papa, il s'appelle Yves-Marie Le Saout, et il casse les cordes, et il vous cassera aussi ! » Personne ne rit. Bertrand, le grand aux poings rouges, crache par terre et s'en va.",
        "Le soir, tu vois Le Saout descendre au lavoir, en habit du dimanche, un jour de semaine, les cheveux mouillés, avec un bouquet de fleurs de lande qu'il tient comme un cordage dont il aurait peur qu'il casse. Les femmes du lavoir s'arrêtent de battre. Azenor Mahé devient rouge jusqu'aux cheveux. Tu t'en vas avant la suite. Elle regarde ces deux-là, et toi, tu as un navire."
      ],
      choices: [
        { label: "Remonter dans la Basse-Fosse", fx: { quest: "SE" }, back: "A2m_bf" }
      ] },
    SE_bat: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu trouves la bande le lendemain, sur le terre-plein derrière la halle aux poissons, en train de jouer aux palets avec des têtes de morue. Tu demandes qui est le chef. Bertrand se lève, en roulant des épaules. Il a douze ans. Tu en as seize. Le combat est inégal, tu le sais, il le sait, et il vient quand même, avec un courage qui te gêne.",
        "Ça dure peu. Tu le mets par terre deux fois. La deuxième fois, il reste assis, le nez en sang, la marque violette de sa pommette devenue rouge. Les autres regardent. Personne ne bouge pour l'aider. Tu dis, à toute la bande, que le prochain qui chante sous le nez de Tudy Mahé aura affaire à un marin.",
        "Ils hochent la tête. Ils ont peur. Ça marche. Tu vois, pendant les jours qui suivent, Tudy passer dans les ruelles sans qu'on lui chante rien. Il passe en regardant derrière lui, toutes les dix enjambées.",
        "Le dernier soir, tu le croises devant la halle. Il te demande quand tu pars. Tu lui dis : bientôt. Il réfléchit. Il dit : « Et après ? » Tu n'as pas de réponse. Derrière lui, sur le terre-plein, Bertrand joue aux palets avec les autres. Il a encore le nez enflé. Il te regarde. Il attend que le navire parte, comme tout le monde."
      ],
      choices: [
        { label: "Remonter dans la Basse-Fosse", fx: { quest: "SE" }, back: "A2m_bf" }
      ] },
    SE_apprend: { act: "II", title: "Le fils de la lavandière", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu l'emmènes au port, un matin, avec la permission de sa mère, qui la donne en hésitant, comme on prête un objet précieux à quelqu'un qui part. Tu t'assieds avec lui au bout de la cale, les jambes dans le vide, au-dessus de l'eau verte où flottent des épluchures.",
        "Tu lui dis que toi, tu as un père, mais que tu n'as plus de mère. Qu'elle est morte de la fièvre, il y a six ans, quand tu en avais dix. Que sur le port, les autres enfants disaient que tu sentais la soupe de ton père, parce qu'il n'y avait plus personne pour laver tes chemises. Qu'un trou dans une famille, ça se voit, et que les enfants le sentent, comme les chiens sentent la peur.",
        "Il t'écoute avec une attention terrible. Il demande ce que tu as fait. Tu lui dis : rien de bien malin. Que tu as appris à laver tes chemises. Que tu as appris des nœuds. Que tu as appris à être bon à quelque chose, pour qu'on parle de ça plutôt que du reste. Puis tu lui apprends un nœud de chaise, avec un bout de ligne. Il le rate onze fois. Il le réussit la douzième, et il le défait, et il le refait, les dents serrées, vingt fois de suite.",
        "Les jours suivants, tu le vois au marais, au milieu de la bande, qui fait des nœuds de chaise avec une ficelle, à toute vitesse, pendant que les autres essaient et ratent. Ils ne chantent pas. Ils le regardent. Bertrand, le grand aux poings rouges, lui demande de lui montrer, d'un air de ne pas y toucher. Tudy lui montre. Il ne sourit pas. Il est sérieux comme un maître d'équipage."
      ],
      choices: [
        { label: "Remonter dans la Basse-Fosse", fx: { quest: "SE" }, back: "A2m_bf" }
      ] }
  },
  extras: {
    people: {
      tudy: { name: "Tudy Mahé", qui: "Garçon de sept ans de la Basse-Fosse, propre comme un sou neuf, sans père, que les enfants du quartier poursuivent jusqu'au marais." },
      azenor: { name: "Azenor Mahé", qui: "Lavandière de la Basse-Fosse, mère de Tudy, la plus belle femme de la rue, qui bat son linge à trois pierres des autres." },
      lesaout: { name: "Yves-Marie Le Saout", qui: "Cordier de la Basse-Fosse, énorme et muet, qui casse les cordages entre ses mains." }
    },
    quests: [
      { id: "SE", act: "II", kind: "annexe", title: "Le fils de la lavandière", start: "SE_marais", doit: "papasimon", echo: ["se:cordier", "se:bat", "se:apprend"] }
    ]
  }
};
