// L'Île Folle-Aiguille · side story « Les amants de la troisième veine » (owes its question to Romeo and Juliet: can love
// defy the law of a closed community, and what if the law knows something the lovers do not?). Act IV, the mousse in the
// Wells: Aourell, seventeen, and Herri, eighteen, a young smelter, love each other; the Mothers have refused the match
// and promised Aourell to another. They ask the child, a stranger who belongs to no family, to carry their notes and help
// them flee up to the orchards. Then the eldest Mother tells the child why: Herri and Aourell have the same father, a
// smelter dead on the day of the keys, and the Wells have learned what comes of such marriages. The child tells them the
// secret (th:secret), keeps it and helps the Mothers part them gently (th:tait), or helps them flee anyway (th:fuite).
// Wired in XD_forge.
module.exports = {
  passages: {
    TH_billet: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      fx: { meet: "aourell" },
      text: [
        "Elle te glisse le premier billet dans la main à la fontaine, en te bousculant exprès. Un bout de cuir gratté, plié en quatre, avec des signes tracés au charbon. Tu ne sais pas les lire. Elle te dit, à voix basse, qu'il faut le porter à Herri, le fondeur aux mains brûlées, dans la galerie des creusets, et ne le montrer à personne. Elle s'appelle Aourell. Elle a dix-sept ans, des cheveux presque blancs, et des yeux gris très clairs qui, dans la pénombre rouge de la forge, ont l'air de deux braises froides.",
        "Herri lit le billet en cachette, derrière un creuset, et sourit d'un sourire qui lui change tout le visage. Il a dix-huit ans, de larges épaules, des mains couturées de brûlures d'argent fondu. Il te donne la réponse, sur un autre bout de cuir. Tu la portes. Tu en portes dix, en deux jours. Tu deviens leur messager, parce que tu n'appartiens à aucune famille des Puits, et qu'ici, où tout le monde se montre tout, un étranger est la seule personne qu'on ne regarde pas.",
        "Le deuxième soir, ils te disent tout, ensemble, au bout d'une galerie morte. Ils s'aiment depuis l'enfance. Ils ont demandé aux Mères la permission de se marier, comme on doit le faire. Les Mères ont refusé. Sans explication. Elles ont promis Aourell à un garçon de la galerie basse, un brave garçon qu'elle ne déteste pas et qu'elle n'aime pas. Le mariage est dans trois jours. Herri dit qu'ils partiront avant. Par le puits d'aération du nord, jusqu'au jour, jusqu'au Haut-Verger. Ils ont besoin de toi pour la corde, et pour leur dire comment on vit là-haut.",
      ],
      choices: [{ label: "Aller demander aux Mères pourquoi elles ont refusé", to: "TH_meres" }] },
    TH_galerie: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      text: [
        "La galerie basse est la plus ancienne des Puits, une longue voûte creusée à même la roche noire, où l'eau suinte des parois en filets si lents qu'ils ont eu le temps, au fil des années, de bâtir des colonnes de pierre blanche, pareilles à des cierges fondus. L'air y est tiède et sent la cire froide et le lait. On y loge ceux dont les Puits prennent soin : les vieux qui ne marchent plus, les blessés de la forge, et les enfants.",
        "Ils sont six. Ils sont assis par terre, sur des peaux, autour d'une lampe qu'on a posée au milieu d'eux et qu'ils ne regardent pas. Ils ont entre cinq et quinze ans. Ils ont tous les mêmes yeux, entièrement blancs, sans iris, pareils à des yeux de statue. Ils se balancent doucement, d'avant en arrière, tous ensemble, au même rythme, comme si une seule respiration les traversait. L'un d'eux chantonne une note, toujours la même, très basse, sans reprendre son souffle.",
        "Une femme les garde, une grosse femme calme qui file de la laine en les surveillant. Elle te dit qu'ils sont gentils. Elle dit qu'ils n'ont jamais fait de mal à personne. Elle dit qu'ils mangent seuls, qu'ils se lavent seuls, et qu'ils savent tous retrouver leur natte dans le noir. Elle dit que la plus grande, celle qui chantonne, sait réciter les noms de toutes les familles des Puits, dans l'ordre, sans en oublier un, et que personne ne sait qui les lui a appris.",
        "La grande fille cesse de chantonner. Elle tourne vers toi son visage aux yeux blancs, comme si elle te voyait. Puis elle se met à réciter, d'une voix très douce, une longue litanie de noms, de pères et de mères, de fils et de filles, qui coule comme l'eau des parois. Tu en reconnais quelques-uns. Tu reconnais celui d'Aourell. Tu reconnais celui de Herri. Elle les dit l'un après l'autre, sans s'arrêter, et elle sourit.",
      ],
      choices: [
        { back: "TH_meres", label: "Revenir auprès de la Mère" }
      ] },
    TH_comptes: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      text: [
        "La vieille Mère rit, d'un petit rire sec, quand tu lui poses la question. Elle dit que c'est la question des étrangers. Elle dit que les gens d'en haut écrivent tout, sur du papier qui brûle, et qu'ils s'étonnent qu'on puisse se souvenir. Elle dit qu'ici, on n'a pas de papier. On a trois têtes. Elle dit que chacune des trois Mères sait tout, et que, quand l'une meurt, les deux autres choisissent une femme et lui apprennent tout, une nuit entière, sans dormir, et qu'au matin il y a de nouveau trois Mères.",
        "Elle reprend son tricot. Elle dit que c'est une drôle de charge. Elle dit qu'elle sait qui est le père de chacun, ici, mieux que les mères elles-mêmes, et qu'elle croise tous les jours, à la fontaine, des femmes qui lui sourient et qui ne savent pas ce qu'elle sait d'elles. Elle dit qu'on finit par regarder les gens comme des additions. Elle dit qu'elle a perdu, à ce métier, l'habitude de penser aux visages. Puis elle se reprend, et elle dit qu'elle pense encore à certains.",
        "Elle parle du fondeur mort. Pas de son nom : de sa voix. Elle dit qu'il chantait en coulant l'argent, des chansons d'avant les clefs, et que les femmes s'arrêtaient de travailler pour l'écouter. Elle dit que c'était un homme doux, qui faisait ce qu'on lui demandait, et que les Mères lui ont beaucoup demandé. Elle dit qu'il est mort sans savoir combien d'enfants il laissait, parce qu'elles ne le lui ont pas dit non plus.",
        "Elle pose son tricot sur ses genoux. Elle dit que, le jour où les trois Mères mourront en même temps, d'une fièvre, d'un éboulement, les Puits oublieront tout, d'un coup, comme on souffle une lampe. Elle dit qu'elle y pense chaque nuit. Elle dit qu'elle ne sait pas si ce serait un malheur ou une délivrance. Elle dit qu'elle est trop vieille pour trancher, et qu'elle compte sur les jeunes pour se tromper autrement.",
      ],
      choices: [
        { back: "TH_meres", label: "Revenir à ce qu'il faut faire des billets" }
      ] },
    TH_meres: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      text: [
        { first: true, text: "La plus vieille des Mères pose son tricot quand tu t'assieds devant elle. Elle sait pourquoi tu viens. Elle te le dit avant que tu ouvres la bouche : ici, on montre tout, et les billets qui passent de main en main à la fontaine, on les voit aussi. Elle t'offre un bouillon. Elle attend que tu l'aies bu. Puis elle te dit pourquoi." },
        { first: true, text: "« Le jour des clefs, dit-elle, nos hommes sont morts. Presque tous. Ceux qui sont restés étaient peu. Les femmes étaient nombreuses. Il a fallu des enfants, pour que les Puits ne meurent pas. Alors certains hommes ont eu des enfants avec plusieurs femmes. On l'a décidé ensemble, nous trois, et on ne l'a pas écrit. On a gardé les noms ici. » Elle se touche la tempe. « Herri et Aourell ont le même père. Un fondeur. Kaourintin. Mort dans la fièvre, la deuxième année. Elles ne le savent pas, leurs mères. Ils ne le savent pas. Nous, on le sait. »" },
        { first: true, text: "Elle dit qu'au début, avant qu'on tienne les comptes, il y a eu des mariages entre demi-frères et demi-sœurs, parce qu'on ne savait pas. Elle dit que leurs enfants sont dans la galerie basse. Les enfants aux yeux tout blancs, qui ne parlent pas. Tu les as vus. Tu n'avais pas compris. Elle dit que c'est pour ça qu'on tient les comptes, maintenant, et que les Mères décident qui marie qui. Elle dit que les jeunes appellent ça de la tyrannie, et que les Mères appellent ça de l'arithmétique." },
        { first: true, text: "Elle te regarde avec ses yeux blancs. Elle dit que les Mères n'ont pas dit la raison aux enfants, parce que, si on la leur dit, il faut la dire à leurs mères, et que les mères sont vivantes, et que les Puits sont petits, et que la vérité, ici, ferait plus de morts que la fièvre. Elle dit que tu peux la leur dire, toi. Elle dit qu'elle ne t'en empêchera pas. Elle dit qu'elle voulait seulement que tu saches ce que tu portes, dans tes billets." },
        { again: true, text: "La plus vieille des Mères a repris son tricot, et elle attend, sans te presser, que tu décides de ce que tu feras de ce qu'elle t'a dit." }
      ],
      choices: [
        { label: "Descendre voir les enfants de la galerie basse", to: "TH_galerie", hide: { seen: "TH_galerie" } },
        { label: "Demander à la Mère comment trois vieilles femmes tiennent les comptes de tout un peuple", to: "TH_comptes", hide: { seen: "TH_comptes" } },
        { label: "Dire la vérité à Herri et Aourell", fx: { flag: "th:secret" }, to: "TH_secret" },
        { label: "Garder le secret, et aider les Mères à les séparer doucement", fx: { flag: "th:tait" }, to: "TH_tait" },
        { label: "Les aider à fuir quand même, sans rien leur dire", fx: { flag: "th:fuite" }, to: "TH_fuite" },
      ] },
    TH_secret: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      text: [
        "Tu les retrouves au bout de la galerie morte, le soir. Ils ont la corde. Ils ont un sac. Ils sont prêts. Tu leur dis de s'asseoir. Tu leur dis ce que la Mère t'a dit. Le jour des clefs, les hommes, les comptes, le fondeur Kaourintin. Tu ne dis pas les enfants de la galerie basse. Tu n'en as pas besoin. Tu vois, sur le visage d'Aourell, qu'elle y a pensé avant que tu finisses.",
        "Herri ne te croit pas. Il crie. Il dit que les Mères mentent pour garder le pouvoir, que les vieilles femmes ont toujours une raison. Puis il se tait. Il regarde Aourell. Elle le regarde. Ils se regardent, longtemps, dans la lueur de ta chandelle, et tu vois qu'ils cherchent, l'un sur le visage de l'autre, le visage d'un homme mort qu'ils n'ont jamais connu. Ils le trouvent. Le même menton. Les mêmes yeux gris presque blancs. Tu les vois le trouver.",
        "Aourell se met à rire. Un rire terrible, qui résonne dans la galerie. Elle dit qu'elle l'a toujours aimé comme un frère, et qu'elle croyait que c'était une façon de parler. Herri se lève et s'en va dans le noir, sans chandelle. On entend ses pas s'éloigner, puis plus rien. Aourell reste assise, la corde sur les genoux. Elle te demande si tu savais, en portant les billets. Tu dis non. Elle dit que ça ne change rien. Elle dit merci, d'une voix qui ne remercie pas.",
        "Le mariage d'Aourell avec le garçon de la galerie basse a lieu trois jours plus tard, devant la forge. Elle porte une couronne de fils d'argent. Herri a fondu l'argent lui-même. Il est au premier rang. Il ne pleure pas. Elle non plus. Tu es là, parce qu'on t'a invité{e}. Les Mères tricotent, près du foyer. La plus vieille te fait un signe de tête, une fois. Tu ne sais pas si c'est un remerciement ou un reproche. Tu te dis qu'ici, où l'on montre tout, tu as montré la seule chose que les Mères avaient choisi de cacher, et que les Puits tiennent encore debout. Pour l'instant.",
      ],
      choices: [{ label: "Retourner à la forge", fx: { quest: "TH" }, back: "XD_forge" }] },
    TH_tait: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      text: [
        "Tu dis à la Mère que tu ne leur diras rien. Elle hoche la tête. Elle dit qu'il faut que tu fasses une chose plus difficile : que tu ne portes plus les billets. Que tu leur dises que tu as peur, que tu ne veux plus t'en mêler. Qu'ils perdent leur messager, et qu'ils aient le temps de réfléchir, chacun de son côté, sans billet qui les relie. Elle dit que les Mères feront le reste : on enverra Herri à la veine du nord, pour trois jours, avec les fondeurs. Elle dit que trois jours sans billet, à dix-huit ans, c'est long.",
        "Tu le fais. Tu dis à Aourell, à la fontaine, que tu ne porteras plus rien. Elle te regarde comme on regarde un traître, et elle a raison. Tu dis à Herri, dans la galerie des creusets, que tu as peur des Mères. Il crache par terre, à tes pieds. Le lendemain, on l'envoie à la veine du nord. Aourell pleure deux jours. Puis elle se tait. Elle va à la fontaine sans regarder personne. Elle tricote avec les femmes. Tu la croises. Elle ne te salue plus.",
        "Le mariage a lieu le troisième jour. Herri n'est pas revenu de la veine du nord ; les Mères l'y ont laissé. Aourell porte une couronne de fils de fer. Elle dit oui d'une voix nette. Elle a l'air d'une femme qui a décidé de vivre. Le garçon de la galerie basse la regarde avec une gratitude maladroite. Les Mères tricotent. La plus vieille te regarde. Elle te remercie d'un signe. Tu ne lui rends pas son signe.",
        "Tu te dis que tu as protégé deux enfants d'une vérité qui les aurait brisés, et d'enfants qui auraient pu naître avec des yeux tout blancs. Tu te dis qu'ils te haïssent tous les deux, et qu'ils te haïront toujours, parce qu'ils ne sauront jamais pourquoi. Tu te dis que c'est le prix du secret, et que les Mères le paient depuis vingt ans, chaque fois qu'elles refusent un mariage sans dire pourquoi. Tu comprends un peu mieux pourquoi elles tricotent sans lever les yeux.",
      ],
      choices: [{ label: "Retourner à la forge", fx: { quest: "TH" }, back: "XD_forge" }] },
    TH_fuite: { act: "IV", title: "Les amants de la troisième veine", place: "puits", ambiance: "souterrain",
      text: [
        "Tu te dis que leur vie leur appartient, à eux, et ni à toi ni aux Mères. Tu te dis que là-haut, au Haut-Verger, il y a des gens qui oublient tout, et qu'on peut y vivre sans comptes ni secrets. Tu ne leur dis rien. Tu les aides. La nuit du départ, tu tiens la corde au fond du puits d'aération du nord, pendant qu'ils montent, l'un après l'autre, vers un carré de ciel où brillent trois étoiles.",
        "Aourell, en haut, se penche, et te fait un signe. Herri crie, très bas, un merci que l'écho du puits multiplie. Puis plus rien. Tu restes au fond, la corde dans les mains, à regarder les trois étoiles. Puis tu redescends. Tu croises, dans la galerie, la plus vieille des Mères, qui attend, assise sur un tabouret de fer, sans lumière. Elle t'a vu{e} passer avec la corde. Elle n'a rien fait pour t'arrêter.",
        "Elle dit seulement qu'ils auront peut-être de la chance. Elle dit qu'un enfant sur trois naît sain, dans ces mariages-là, à ce qu'on a vu. Elle dit que là-haut, ils auront de l'écorce, pour oublier ce qu'ils auront à oublier. Elle dit que les Puits ont perdu une fondeuse et un fondeur, et que les Puits sont petits. Elle se lève. Elle dit que c'est le choix qu'ils ont fait sans savoir, et le choix que tu as fait en sachant, et qu'il faudra que tu le portes, toi, puisqu'eux ne le pourront pas.",
        "Plus tard, au Haut-Verger, tu verras peut-être un couple aux cheveux presque blancs, couronné de fleurs, qui sourit en mâchant de l'écorce, et qui ne te reconnaîtra pas. Tu ne sauras pas s'ils sont heureux. Tu sauras qu'ils sont libres, et que tu les as laissés partir avec une chose qu'ils ignorent. Tu te demanderas, longtemps, si l'amour excuse ce qu'on ne sait pas, ou si c'est toi qu'il fallait excuser, toi qui savais.",
      ],
      choices: [{ label: "Retourner à la forge", fx: { quest: "TH" }, back: "XD_forge" }] },
  },
  extras: {
    people: {
      aourell: { name: "Aourell", aka: ["la fille aux yeux de braise froide"], f: true, qui: "Jeune femme des Puits, dix-sept ans, qui aime Herri le fondeur." },
    },
    quests: [
      { id: "TH", act: "IV", kind: "annexe", title: "Les amants de la troisième veine", start: "TH_billet", doit: "romeo", echo: ["th:secret", "th:tait", "th:fuite"] },
    ],
  },
};
