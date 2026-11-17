// L'Île Folle-Aiguille · side story « Le chant de l'Écueil » (owes its question to the Odyssey's sirens: when a man
// asks to be bound against himself, which of the two must one obey, the man who asked or the man who begs?). Act III,
// the mousse at the Écueil-Rouge: at night the porous rock sings when the land breeze cools it, and sailors say the
// voice calls the listener by name. Briac Le Saux, a gabier whose father heard it thirty years ago and was never the
// same, asks the child to bind him to the mainmast and not to free him before dawn, whatever he says. The child keeps
// him bound (vu:tient), unties him when he begs (vu:delie), or stops his ears with wax so that he hears nothing
// (vu:cire). Wired in A3n_ecueil.
module.exports = {
  passages: {
    VU_demande: { act: "III", title: "Le chant de l'Écueil", place: "cormorane", ambiance: "mer",
      fx: { meet: "briac" },
      text: [
        "Briac Le Saux est gabier de misaine, trente-cinq ans, maigre et sec comme un bout de filin goudronné, avec une figure en lame de couteau et des yeux clairs qui ne se posent jamais longtemps. Il ne parle à personne à bord, et à toi moins qu'aux autres. Aussi, quand il vient s'asseoir à côté de toi sur le panneau de cale, au coucher du soleil, avec deux pommes ridées dont il te tend la plus belle, tu comprends qu'il va te demander quelque chose de difficile.",
        "« Tu sais ce qu'on dit de cette roche ? » Tu ne sais pas. Il te le dit. La nuit, quand la brise de terre se lève et que la pierre rouge se refroidit, l'Écueil chante. Les anciens de Morlenc le savent. Un chant sans paroles, d'abord, comme un vent dans une bouteille. Puis, si on écoute trop longtemps, il y a des paroles. Puis il y a ton nom. Ceux qui l'entendent prononcer leur nom vont vers la roche. À la nage, s'il le faut.",
        "Son père l'a entendu, il y a trente ans, en passant par ici sur un baleinier. On l'a repêché à vingt brasses de la roche, à demi noyé, en train de nager vers elle. Il a vécu encore vingt ans, très doux, très poli, à regarder la mer depuis la fenêtre, sans jamais dire ce qu'il avait entendu. Briac avait cinq ans. Il a passé sa vie à se demander ce qu'on avait dit à son père, ce soir-là, qui valait plus que sa femme et son fils.",
      ],
      choices: [{ label: "Lui demander ce qu'il attend de toi", to: "VU_noeud" }] },
    VU_noeud: { act: "III", title: "Le chant de l'Écueil", place: "cormorane", ambiance: "nuit",
      text: [
        "Il veut l'entendre. Il veut savoir. Mais il ne veut pas finir à la fenêtre. Alors voici : cette nuit, tu l'attacheras au grand mât, par la taille et par les poignets, avec des nœuds qu'il ne sait pas défaire et que toi seul{e} sauras. Et quoi qu'il dise, quoi qu'il ordonne, quoi qu'il promette, tu ne le détacheras pas avant que le soleil touche la mer. Il te fait répéter. « Quoi qu'il dise. » Tu répètes.",
        "Pourquoi toi ? Parce que tu es mousse, et qu'un mousse ne se laisse pas commander par un gabier attaché, et parce que tu as les nœuds du Gabier dans les doigts, à ce qu'on raconte. Et parce que les hommes, eux, rient de cette histoire, et qu'il ne veut pas qu'on rie de son père.",
        "À la tombée de la nuit, la bordée de quart s'est mise à l'arrière. Briac s'adosse au grand mât. Tu passes le filin autour de sa taille, trois tours, puis les poignets, derrière, en croisant. Tu serres. Il éprouve les nœuds, tire, se tord, et sourit pour la première fois. « C'est du bon travail. Souviens-toi de ce sourire. Tout à l'heure, je t'en ferai d'autres. Ils mentiront. »",
        "La brise de terre se lève vers dix heures. Elle sent la pierre chaude et le soufre.",
      ],
      choices: [{ label: "Attendre le chant, assis{e} au pied du mât", to: "VU_chant" }] },
    VU_chant: { act: "III", title: "Le chant de l'Écueil", place: "cormorane", ambiance: "nuit",
      text: [
        "Cela commence comme on souffle dans une cruche vide. Une note grave, longue, qui vient de la roche et qui traverse l'eau noire jusqu'au navire, si basse qu'on la sent dans les planches avant de l'entendre. Puis une deuxième, au-dessus. Puis une troisième. Les trois tiennent ensemble, montent, se défont, se reprennent, et cela fait un accord, un vrai, un accord d'orgue désaccordé dans une église engloutie. La pierre poreuse respire la brise par ses mille trous, et chaque trou a sa voix.",
        "Tu l'écoutes, et tu sais exactement ce que c'est : de l'air dans des trous. Tu le sais très bien. Et pourtant, au bout d'un moment, sous l'accord, il y a autre chose, une ligne plus douce, qui fredonne, qui hésite, qui reprend, à la façon d'une femme qui chante pour elle-même en pliant du linge, sans faire attention. Tu as entendu ce fredonnement-là, autrefois, dans une cuisine, avant la fièvre. Tu te lèves sans t'en apercevoir. Tu es debout. Tu te rassieds, très vite, les mains à plat sur le pont.",
        "Briac, derrière toi, a fermé les yeux. Une heure passe. Puis il parle, d'une voix tranquille et raisonnable : la corde lui coupe le sang des poignets, il ne sent plus ses mains, il faudrait juste desserrer d'un tour. Tu regardes ses mains. Elles sont blanches. Puis il ordonne, d'une voix de gabier, qu'on le détache, que c'est un ordre. Puis il rit, et dit que l'épreuve est finie, qu'il a entendu ce qu'il voulait, qu'il est guéri. Puis il dit ton nom, ton vrai nom, avec une douceur qu'il n'a jamais eue, et il dit qu'on l'appelle, qu'on l'appelle par le sien, que c'est son père, que son père l'attend, là-bas, et qu'il n'a qu'à nager vingt brasses.",
        "Puis il pleure. Il tire sur les cordes jusqu'à se mettre les poignets en sang. Il te supplie. Il a cinq ans, il a trente-cinq ans, il n'a plus d'âge. L'aube est à quatre heures. Il est une heure du matin.",
      ],
      choices: [
        { label: "Tenir parole à celui qui t'a demandé de l'attacher", fx: { flag: "vu:tient" }, to: "VU_tient" },
        { label: "Le détacher, parce que c'est lui qui le demande maintenant", fx: { flag: "vu:delie" }, to: "VU_delie" },
        { label: "Faire fondre une chandelle et lui boucher les oreilles à la cire", fx: { flag: "vu:cire" }, to: "VU_cire" },
      ] },
    VU_tient: { act: "III", title: "Le chant de l'Écueil", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu ne bouges pas. Tu t'assieds dos au mât, contre lui, pour qu'il sente que tu es là, et tu tiens ses chevilles avec tes deux mains, parce que c'est la seule chose que tu puisses tenir. Il t'insulte. Il te maudit, toi, ton père, ta mère morte, avec une précision qui fait mal, parce qu'il sait viser, cette nuit, comme jamais. Tu serres les chevilles. Tu comptes les notes de la roche. Tu te répètes le sourire de tout à l'heure, celui qui disait la vérité.",
        "Vers trois heures, il se tait. Il respire seulement, très fort, comme après une course. Le chant, lui, continue, plus faible, à mesure que la roche refroidit. À quatre heures moins le quart, la brise tourne. Le chant s'arrête au milieu d'une note, net, comme une porte qu'on ferme. Le silence qui suit est si grand qu'on entend les herbes frotter contre la coque. Le soleil touche la mer. Tu défais les nœuds. Ils ont durci ; il te faut longtemps.",
        "Il glisse le long du mât et reste assis sur le pont, les poignets en sang sur les genoux. Il regarde la roche. Il dit, d'une voix enrouée, qu'il a su ce qu'on avait dit à son père. Tu demandes quoi. Il secoue la tête. Il dit seulement que son père avait raison de ne pas le répéter, et qu'il avait raison, aussi, de regarder par la fenêtre, et que lui, Briac, n'aura pas besoin de fenêtre, parce qu'il a eu un nœud. Il te serre la main, une fois, très fort, avec une main qui n'a plus de sang. Puis il va se coucher.",
        "Il ne t'en reparle jamais. Mais il te garde, désormais, la plus belle pomme, chaque fois qu'il en a deux.",
      ],
      choices: [{ label: "Rejoindre ton hamac, à l'aube", fx: { quest: "VU" }, back: "A3n_ecueil" }] },
    VU_delie: { act: "III", title: "Le chant de l'Écueil", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu te lèves. Tu défais les poignets d'abord, parce que tu vois le sang, puis la taille. Les nœuds viennent tout seuls ; tu les avais faits pour qu'on puisse les défaire, sans le savoir. Il s'écarte du mât. Il frotte ses mains. Il te remercie, très poliment, comme on remercie un domestique. Puis il marche vers le bastingage, sans se presser, du pas de quelqu'un qui rentre chez lui.",
        "Il enjambe. Tu cours. Il est déjà dans l'eau noire, entre les herbes, et il nage vers la roche, d'une brasse lente, régulière, appliquée. Tu cries. La bordée de quart accourt de l'arrière, avec une lanterne, et ne voit rien. Toi, tu as encore le filin dans les mains, celui de la taille, quinze brasses de bon chanvre. Tu en fais une boucle, un nœud coulant, celui que le Gabier appelle le nœud du pendu et qui sert surtout à ne pas l'être, et tu le lances, une fois, deux fois, à la lueur de la lanterne, dans la direction de la tête qui s'éloigne.",
        "À la troisième fois, il le prend. Il le prend avec la main, sans y penser, comme on attrape une branche en tombant. Les hommes du quart halent. On le remonte, ruisselant, couvert d'herbes, à moitié noyé, qui tousse de l'eau salée et qui se débat encore. On l'attache à nouveau, cette fois au pied du mât de misaine, par les hommes du quart, qui font des nœuds de terriens.",
        "À l'aube, quand le chant s'arrête, il te fait venir. Il dit que tu as eu raison deux fois cette nuit, de le détacher et de lancer la corde, et que c'est beaucoup pour une seule nuit, et qu'il ne sait pas laquelle des deux fois il te reprochera. Il dit qu'il a entendu son nom. Il dit qu'il y est allé. Il dit qu'il en est revenu, et que son père, lui, n'avait personne pour lancer une corde. Il regarde ses mains. Il dit qu'il aurait préféré que ce soit lui qui choisisse. Puis il dit que, justement, il avait choisi, au coucher du soleil, avec une pomme, et que tu ne l'as pas écouté, ce Briac-là. Il a l'air de ne pas savoir s'il est en colère.",
      ],
      choices: [{ label: "Rejoindre ton hamac, à l'aube", fx: { quest: "VU" }, back: "A3n_ecueil" }] },
    VU_cire: { act: "III", title: "Le chant de l'Écueil", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu descends dans l'entrepont prendre une chandelle, et tu la fais fondre dans le creux de ta main au-dessus de la lanterne, en te brûlant. Tu remontes. Il ne comprend pas ce que tu fais jusqu'au moment où tu lui enfonces la première boule de cire tiède dans l'oreille. Il hurle. Il secoue la tête. Tu attends qu'il se fatigue, et tu enfonces la seconde. Puis tu te bouches les tiennes avec ce qui reste.",
        "Le monde devient épais. Tu n'entends plus la roche, ni la mer, ni lui. Tu le vois seulement, attaché au mât, qui crie quelque chose, la bouche grande ouverte, sans un son, comme un noyé qu'on regarde à travers une vitre. Il crie longtemps. Puis il ne crie plus. Il regarde la roche, avec une fixité terrible, comme s'il essayait d'entendre par les yeux. Puis il baisse la tête.",
        "À l'aube, tu lui ôtes la cire et les cordes. Il ne te remercie pas. Il dit, très calme, plus calme que tu ne l'as jamais vu, que tu lui as volé la seule chose qu'il était venu chercher. Il dit qu'il t'avait demandé de l'attacher, pas de le rendre sourd. Il dit qu'il avait tout prévu, sauf qu'un enfant de seize ans décide pour lui de ce qu'il pouvait entendre. Tu lui dis qu'il est vivant. Il dit que son père aussi l'était.",
        "Il ne te parle plus, les jours qui suivent. Puis un soir, beaucoup plus tard, en haute mer, il vient s'asseoir sur le panneau de cale, sans pomme. Il dit qu'il a eu le temps de réfléchir, et qu'il n'arrive pas à te le reprocher autant qu'il le voudrait, et que c'est ça, au fond, qu'il te reproche. Il te demande, à toi, ce que tu as entendu, avant de te boucher les oreilles. Tu ne réponds pas. Il hoche la tête. Il dit que c'est juste.",
      ],
      choices: [{ label: "Rejoindre ton hamac, à l'aube", fx: { quest: "VU" }, back: "A3n_ecueil" }] },
  },
  extras: {
    people: {
      briac: { name: "Briac Le Saux", aka: ["le gabier de misaine"], qui: "Gabier de misaine de la Cormorane, fils d'un baleinier qui a entendu chanter l'Écueil-Rouge." },
    },
    quests: [
      { id: "VU", act: "III", kind: "annexe", title: "Le chant de l'Écueil", start: "VU_demande", doit: "odyssee", echo: ["vu:tient", "vu:delie", "vu:cire"] },
    ],
  },
};
