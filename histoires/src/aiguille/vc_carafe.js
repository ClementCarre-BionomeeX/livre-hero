// L'Île Folle-Aiguille · side story « La carafe de Kermarrec » (owes its question to Le Horla: when a man says that
// something invisible lives beside him, is the doctor's duty to cure him or to believe him?). Act III, the Écueil-Rouge:
// Goustan Kermarrec, quartermaster, forty, a calm and sober man, comes to Victorine after the first night at anchor under the
// crater. Someone drinks his water at night. Someone stands behind him at the helm. Victorine makes him sleep with
// laudanum (vc:calme), watches his night herself (vc:veille), or asks him to write down everything, every morning
// (vc:ecrit). Wired in A3w_ecueil.
module.exports = {
  passages: {
    VC_timonier: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nature",
      fx: { meet: "kermarrec" },
      text: [
        "Il vient à l'infirmerie le premier matin, sous la fumée du cratère, rasé de frais, la casquette à la main, avec la politesse d'un homme qui ne dérange jamais personne. Goustan Kermarrec, quartier-maître, quarante ans, vingt-cinq de mer. Victorine le connaît de vue : c'est l'homme le plus calme du bord, celui à qui la timonière confie la roue quand elle dort, parce qu'il a les mains d'un horloger et le pouls d'une tortue. Il ne boit pas. Il lit des almanachs. Il s'assied, et il dit, d'une voix posée : « Docteur, je crois que je deviens fou, et je voudrais savoir si c'est vrai. »",
        "Il raconte. Il pose chaque soir, sur la tablette de sa couchette, une carafe d'eau pleine, bouchée, parce qu'il a soif la nuit. Depuis qu'on a mouillé sous l'Écueil, il la retrouve vide au matin. Le bouchon remis. Il n'a pas soif au réveil ; il a la bouche sèche, au contraire, comme quelqu'un qui n'a pas bu. Hier, à la barre, pendant son quart, il a senti quelqu'un debout derrière lui, très près, à respirer au même rythme que lui. Il s'est retourné. Il n'y avait que le compas, dont l'aiguille tremblait.",
        "Il dit tout cela sans trembler lui-même, avec une précision de rapport de bord. Il a vérifié la carafe à la craie. Il a mis un cheveu sur le bouchon. Le cheveu était à sa place, ce matin, et la carafe vide. Il demande à Victorine si c'est la fièvre, ou l'air du cratère, ou autre chose. Il dit qu'il préfère que ce soit la fièvre. Il dit qu'il a peur pour la première fois de sa vie, et que ce qu'il craint, c'est la nuit prochaine, et toutes celles qui suivront ; la mort lui a toujours paru une affaire raisonnable.",
      ],
      choices: [{ label: "L'ausculter, puis réfléchir", to: "VC_examen" }] },
    VC_carafe: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Il va la chercher dans sa cabine, au bout de la coursive, et il la rapporte comme on rapporte une pièce à conviction, à deux mains, en la tenant par le fond. Une carafe d'étain, ventrue, au col étroit, fermée d'un bouchon de liège taillé au couteau. Elle est à moitié pleine. Autour du col, il a noué un fil de laine rouge, serré, à la hauteur exacte de l'eau.",
        "Il explique, avec une précision de quartier-maître. Chaque soir, il remplit la carafe jusqu'au fil. Il la bouche. Il la pose dans le râtelier, au-dessus de sa couchette, là où personne ne passe. Il ne boit pas la nuit : il n'a jamais bu la nuit, il le sait, il en est sûr, il se connaît. Le matin, l'eau est sous le fil. Un doigt. Parfois deux. Jamais plus, comme si quelqu'un avait soif, mais pas trop, et avait des manières.",
        "Victorine prend la carafe. Elle est tiède, de la tiédeur moite de toutes choses dans ce mouillage sans vent. Elle regarde le liège. Il est sec, au-dessus, et humide, en dessous, sur un bon demi-pouce, ce qui ne prouve rien. Elle pense à l'évaporation, à la chaleur qui monte du récif, au liège poreux. Elle pense qu'un doigt d'eau, en une nuit, par cette chaleur, c'est beaucoup. Elle pense que c'est possible.",
        "Elle remarque autre chose, en la reposant. Sur l'étain terni du col, juste au-dessus du fil rouge, il y a des marques de doigts. Des traces légères, laissées par une peau humide sur un métal mat. Elle en compte quatre d'un côté, une de l'autre, comme on tient une carafe pour boire. Elle regarde les mains de Kermarrec, posées sur ses genoux. Elle ne lui dit rien des marques. Il pourrait les avoir laissées lui-même, en l'apportant. Elle sait qu'il la tenait par le fond.",
      ],
      choices: [
        { back: "VC_examen", label: "Lui rendre la carafe" }
      ] },
    VC_barre: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Annick Lemerle est au poste de barre, par habitude plus que par nécessité, puisque le navire est à l'ancre, et elle astique les rayons de la roue avec un chiffon gras, du geste lent qu'on a pour flatter un cheval. Elle écoute la question de Victorine sans s'arrêter d'astiquer. Elle dit que oui, elle a remarqué. Tout le monde a remarqué. Kermarrec se retourne.",
        "Elle dit qu'aux quarts de nuit, depuis qu'on a mouillé sous ce caillou rouge, il se retourne toutes les cinq minutes, d'un coup, comme on se retourne quand quelqu'un vous souffle dans le cou. Il regarde derrière lui, l'espace vide entre la barre et le couronnement, puis il revient à l'habitacle, et il reprend. Elle dit qu'un quartier-maître qui se retourne, à la barre, c'est comme un curé qui se gratte pendant l'élévation : ça ne se fait pas, et ça se voit.",
        "Victorine lui demande si elle a senti quelque chose, elle. La timonière s'arrête d'astiquer. Elle regarde l'habitacle, où l'aiguille du compas, depuis le mouillage, tremble sans repos sur sa rose, comme une bête inquiète. Elle dit qu'elle ne sent rien. Elle dit qu'elle n'aime pas cette aiguille. Elle dit que ça n'a rien à voir.",
        "Puis elle reprend son chiffon, et elle dit, du ton qu'on prend pour clore une conversation : « On n'est jamais seul à la barre, docteur. Il y a toujours le navire. Kermarrec, lui, a l'air de trouver qu'on est un de trop. » Elle astique. Le récif fume. L'aiguille tremble. Victorine redescend.",
      ],
      choices: [
        { back: "VC_examen", label: "Redescendre auprès de Kermarrec" }
      ] },
    VC_examen: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nature",
      text: [
        { first: true, text: "Elle l'ausculte. Le cœur est lent et régulier, les poumons clairs, la langue nette, l'œil vif, avec des cernes de trois nuits blanches. Le corps d'un homme sain, d'un bout à l'autre, et cette santé insolente l'inquiète davantage qu'une fièvre. Elle lui pose les questions des manuels, sur sa mère, sur ses rêves, sur les coups qu'il a pu recevoir à la tête. Il répond à tout avec patience, et chacune de ses réponses est celle d'un homme sain." },
        { first: true, text: "Pendant qu'il se rhabille, elle regarde par le hublot le récif rouge, poreux, couleur de sang séché, et la fumée blanche qui monte tout droit, sans vent, jusqu'au ciel. Elle pense aux aiguilles des compas, qui tremblent depuis qu'on a mouillé. Elle pense au moine de la maison à la croix, qui perd la vue. Elle pense qu'elle est une femme de science et qu'il existe, dans ce récif, des choses que la science n'a pas encore pesées ; et que ces deux pensées tiennent très mal ensemble, dans une même tête, à une encablure d'un volcan." },
        { first: true, text: "Kermarrec boutonne sa vareuse. Il dit, sans la regarder : « La nuit dernière, juste avant de m'endormir, j'ai entendu qu'on remettait le bouchon. Doucement. Avec soin. Comme moi. »" },
        { again: true, text: "Kermarrec attend, sa vareuse boutonnée jusqu'au col, et le récif fume derrière le hublot." }
      ],
      choices: [
        { label: "Demander à voir la carafe", to: "VC_carafe", hide: { seen: "VC_carafe" } },
        { label: "Interroger la timonière sur les nuits de Kermarrec à la barre", to: "VC_barre", hide: { seen: "VC_barre" } },
        { label: "Lui donner du laudanum, pour qu'il dorme d'une traite", fx: { flag: "vc:calme" }, to: "VC_calme" },
        { label: "Veiller elle-même, cette nuit, au pied de sa couchette", fx: { flag: "vc:veille" }, to: "VC_veille" },
        { label: "Lui demander d'écrire tout ce qu'il remarque, chaque matin, dans un cahier", fx: { flag: "vc:ecrit" }, to: "VC_ecrit" },
      ] },
    VC_calme: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Elle lui compte vingt gouttes dans un verre d'eau, devant lui, et elle lui explique ce qu'elle fait, parce qu'il est de ceux qui veulent savoir. Il boit. Il remercie. Il dit que c'est une bonne idée : s'il dort, il saura. Le lendemain, il revient, reposé, presque gai. La carafe était pleine au matin. Il a dormi comme une souche. Il rit, d'un rire de soulagement qui lui fait monter les larmes aux yeux. C'était donc lui, dit-il, somnambule, ou fou, mais fou d'une folie qui se soigne au laudanum. Victorine renouvelle la dose. La carafe reste pleine.",
        "La Cormorane quitte l'Écueil. Les compas cessent de trembler. Kermarrec continue de demander ses vingt gouttes chaque soir, poliment, et Victorine continue de les lui donner, puis de les espacer, puis de les diminuer, comme on fait. Au bout de dix jours, elle lui en refuse une. Il ne discute pas. Il remercie.",
        "Le lendemain matin, il est à la barre, calme, rasé, les mains d'horloger sur les rayons. Il lui fait un signe de tête. Elle s'approche. Il dit, à voix basse, sans quitter le compas des yeux : « Elle était vide, docteur. Il a attendu que vous partiez. Il a de la patience. Moi aussi. Redonnez-moi les gouttes, s'il vous plaît. » Elle les lui redonne. Elle ne sait pas si elle soigne un homme ou si elle l'aide à fermer une porte sur quelqu'un.",
      ],
      choices: [{ label: "Regagner l'infirmerie", fx: { quest: "VC" }, back: "A3w_ecueil" }] },
    VC_veille: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Elle s'installe sur un tabouret, au pied de sa couchette, dans le poste, avec une lanterne sourde, son châle et un livre qu'elle ne lit pas. Autour d'eux, les hamacs se balancent, pleins d'hommes qui ronflent. Kermarrec pose sa carafe sur la tablette, pleine, bouchée, la touche du doigt comme on touche un talisman, et s'endort, rassuré par sa présence, comme un enfant. Le navire grince. Le récif fume. À travers le bordé, très loin, on entend le volcan respirer.",
        "À trois heures, il se redresse. Il a les yeux ouverts. Il ne la voit pas. Il prend la carafe, la débouche, la boit, lentement, jusqu'à la dernière goutte, avec une soif horrible, une soif qui n'est pas la sienne. Puis il remet le bouchon, doucement, avec soin, en le tournant d'un quart de tour, comme le ferait un homme très méticuleux. Il se recouche. Il dort. Victorine reste assise jusqu'à l'aube, sa lanterne sur les genoux, glacée, en se disant qu'elle vient de voir un cas de somnambulisme tout à fait ordinaire.",
        "Au matin, elle lui dit ce qu'elle a vu, avec des mots de médecin, en détachant chaque syllabe pour qu'elles soient rassurantes. Il l'écoute. Il regarde la carafe vide. Puis il dit, très doucement : « Vous avez vu mon corps boire, docteur. Ça, je vous crois. Moi, je vous demande qui avait soif. » Elle n'a pas de réponse. Il n'en attendait pas. Il va prendre son quart. De ce jour, il pose deux carafes sur sa tablette, et il en retrouve toujours une pleine.",
      ],
      choices: [{ label: "Regagner l'infirmerie", fx: { quest: "VC" }, back: "A3w_ecueil" }] },
    VC_ecrit: { act: "III", title: "La carafe de Kermarrec", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Elle lui donne un cahier de toile, un de ceux où elle tient ses observations, et un crayon. Elle lui demande d'y noter, chaque matin, l'heure de son réveil, l'état de la carafe, la position du bouchon, ses rêves, et tout ce qu'il a senti à la barre. Elle lui dit qu'un mal qu'on écrit cesse d'être une ombre pour devenir un cas, et qu'on soigne les cas. Il prend le cahier avec gratitude, comme on prend une arme.",
        "Il le lui rapporte chaque soir. L'écriture est belle, ronde, appliquée, l'écriture d'un homme qui a appris tard et qui en est fier : *Carafe vide. Bouchon tourné d'un quart. Pas soif. Senti quelqu'un à la barre à deux heures, côté bâbord. Froid au cou.* Le récif s'éloigne. Les compas se calment. Les notes s'espacent, deviennent plus courtes, plus tranquilles. *Carafe pleine. Dormi.* Victorine se félicite. Elle recopie le cas dans son propre carnet, avec l'intention d'en faire un mémoire.",
        "Le dixième soir, en feuilletant le cahier à la lanterne, elle trouve, sous la note du matin, quelques lignes d'une autre main. Une écriture penchée, rapide, pointue, qui dit seulement : *Il dort bien, maintenant. Merci, docteur. Je reste.* Elle compare. Elle compare longtemps. C'est l'écriture de Kermarrec. Celle qu'il aurait s'il écrivait de la main gauche. Il est droitier. Le lendemain, elle lui rend le cahier sans un mot sur ces lignes. Il ignore ces lignes, elle en est certaine, et elle préfère qu'il les ignore toujours.",
      ],
      choices: [{ label: "Regagner l'infirmerie", fx: { quest: "VC" }, back: "A3w_ecueil" }] },
  },
  extras: {
    people: {
      kermarrec: { name: "Goustan Kermarrec", aka: ["le quartier-maître"], qui: "Quartier-maître de la Cormorane, l'homme le plus calme du bord." },
    },
    quests: [
      { id: "VC", act: "III", kind: "annexe", title: "La carafe de Kermarrec", start: "VC_timonier", doit: "horla", echo: ["vc:calme", "vc:veille", "vc:ecrit"] },
    ],
  },
};
