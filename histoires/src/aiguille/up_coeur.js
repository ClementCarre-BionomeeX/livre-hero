// L'Île Folle-Aiguille · side story « Ce qui cogne sous le gaillard » (owes its question to Poe's The Tell-Tale Heart:
// does a buried fault always betray itself, and should one help a man to silence it or to hear it?). Act III, the mousse
// at sea before Brisegrève: Yann Abgrall, a gabier of forty, cannot sleep. Every night he hears, under the planks of the
// forepeak, something that beats like a heart. He asks the child to listen. Nobody else hears it. In the end he tells
// why: three years ago, on another ship, a young topman slipped on the yard beside him and held out a hand, and Abgrall
// held on to the yard instead. The child finds the loose block that knocks and shows it to him (up:poulie), tells him it
// is the pump and nothing else (up:pompe), or takes him to the chaplain's place, the captain's, to say it aloud (up:avoue).
// Wired in A3m_jours.
module.exports = {
  passages: {
    UP_nuit: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      fx: { meet: "abgrall" },
      text: [
        "Yann Abgrall dort dans le hamac voisin du tien, au poste d'avant. C'est un gabier de quarante ans, sec, silencieux, avec des avant-bras couturés de vieilles brûlures de filin et une réputation de premier sur les vergues par tous les temps. Il ne parle à personne. Il ne boit pas. On le respecte, et on le laisse tranquille, ce qui à bord revient à la même chose.",
        "Depuis trois nuits, il ne dort plus. Tu le sens bouger, à côté, dans le noir, tu l'entends respirer comme un homme qui court. La quatrième nuit, il te secoue par l'épaule, doucement. Il a le visage gris, luisant de sueur, à la lueur du fanal de quart. Il te demande, très bas, si tu entends.",
        "Tu écoutes. Le navire craque, comme toujours. L'eau court le long de la coque, à deux pouces de ta tête. Quelqu'un ronfle, plus loin. Une drisse bat contre un mât, là-haut. Abgrall pose sa main à plat sur les bordages du plancher, et il te dit d'écouter là, en dessous, sous le gaillard. Il dit que ça cogne. Il dit que ça cogne comme un cœur.",
      ],
      choices: [{ label: "Poser l'oreille contre le plancher", to: "UP_ecoute" }] },
    UP_kilian: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      text: [
        "Abgrall met longtemps à répondre. Puis il dit que Kilian sifflait. Tout le temps, faux, des airs de bal qu'il déformait au point qu'on ne les reconnaissait plus, et le second de l'Hirondelle menaçait chaque jour de le mettre aux fers pour atteinte à la musique. Il dit qu'il était maladroit à terre, qu'il trébuchait sur les pavés, qu'il renversait les chopes, et qu'il devenait, dès qu'il montait aux haubans, le garçon le plus adroit qu'Abgrall ait jamais vu dans une mâture.",
        "Il dit que le gamin taillait des bateaux dans des bouts de bois flotté, avec un canif, pour sa petite sœur, restée à Morlenc. Des bateaux pas plus longs qu'un doigt, avec leurs mâts en allumettes et leurs voiles en papier à cigarette. Il en avait commencé un, le dernier jour. Une goélette. Il lui manquait le beaupré.",
        "Abgrall dit qu'il a porté la goélette à la mère, en rentrant à Morlenc. Il est monté jusqu'à la rue, il a trouvé la porte. Il est resté devant une heure, la goélette dans la main. Il n'a pas frappé. Il l'a posée sur le seuil, il est redescendu au port, et il a signé sur le premier navire qui partait. Il dit qu'il ne sait pas si c'est la sœur qui l'a trouvée, ou un chien, ou la pluie.",
        "Il dit qu'il n'a jamais fini le beaupré. Il dit ça comme s'il avouait un deuxième crime, plus grave que le premier. Sous le plancher, ça cogne. Une fois. Il tourne la tête vers le bruit, très lentement, comme on se retourne quand quelqu'un vous appelle dans une rue vide.",
      ],
      choices: [
        { back: "UP_ecoute", label: "Rester près de lui, dans le noir du poste" }
      ] },
    UP_quart: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu montes par l'échelle du gaillard, pieds nus. Là-haut, la nuit est immense, sans lune, et la Cormorane file dans un silence de velours, à peine troublé par le froissement de l'étrave. Le sillage brille derrière elle d'une lumière verte et froide, comme si la mer s'était allumée à son passage et s'éteignait lentement derrière. Les voiles, au-dessus, sont des ombres plus pâles que le ciel.",
        "L'homme de quart, à l'avant, est le vieux Quéméner, qui a l'âge d'avoir connu toutes les mers et la mémoire de n'en avoir oublié aucune. Tu t'accroupis près de lui. Tu tends l'oreille. Ici, on n'entend que la mer et le bois : les craquements longs du mât, le battement mou d'une écoute, et sous tout ça une sorte de souffle qui monte de la coque, comme d'un grand corps qui dort.",
        "Tu lui demandes si un navire peut cogner, la nuit, sous le gaillard. Il dit que tous les navires cognent. Il dit qu'un navire est une maison qu'on a mise à l'eau, et qu'une maison garde les bruits de ceux qui y ont dormi. Il dit que sur son premier bâtiment, il y avait une marche de l'échelle de cale qui gémissait chaque fois qu'on passait au large d'une certaine île, et que le maître d'équipage, un homme très pieux, avait fini par la faire changer, et que la nouvelle marche gémissait aussi.",
        "Puis il te regarde de côté, avec le bon sens féroce des vieux matelots. Il dit qu'en général, ce qui cogne dans un navire, c'est un objet mal saisi, et qu'il suffit de descendre avec une lanterne. Il dit qu'il a remarqué, en cinquante ans de mer, que les gens qui entendent cogner préfèrent presque toujours ne pas descendre. Il crache par-dessus le bord. Il dit que c'est leur affaire. Le sillage brille. Tu redescends.",
      ],
      choices: [
        { back: "UP_ecoute", label: "Redescendre au poste d'avant, près d'Abgrall" }
      ] },
    UP_ecoute: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      text: [
        { first: true, text: "Tu colles l'oreille contre le bois. Il est tiède, humide, il sent le goudron et la cale. Et tu entends. Quelque chose, très loin en dessous, frappe. Un coup sourd, puis un autre, puis un silence, puis deux coups. Les coups tombent presque en mesure, et c'est ce presque qui fait peur : une machine bat juste, un cœur s'essouffle." },
        { first: true, text: "Tu le dis à Abgrall : tu entends quelque chose. Il ferme les yeux. Tu vois ses épaules se relâcher, comme celles d'un homme qu'on vient de détacher d'une vergue. Il dit merci. Il dit que les autres, à qui il a demandé, n'entendaient rien, ou disaient que c'était la pompe, ou se moquaient. Il dit qu'il commençait à croire que c'était dans sa tête. Il dit que c'est pire, de savoir que ça n'y est pas." },
        { first: true, text: "Puis, parce qu'il fait noir, et que la nuit au poste d'avant ressemble à un confessionnal où l'on aurait suspendu quarante hamacs, il te raconte. Il y a trois ans, sur un trois-mâts de Morlenc, l'Hirondelle, par gros temps, ils étaient deux sur la vergue du grand hunier à serrer la voile. L'autre était un gamin de dix-neuf ans, Kilian, qui le suivait partout et l'appelait maître. Le gamin a glissé. Il s'est rattrapé d'une main au marchepied. Il a tendu l'autre main vers Abgrall." },
        { first: true, text: "« J'avais les deux mains sur la vergue, dit Abgrall. Il fallait en lâcher une. Le navire roulait. J'ai pensé que si je lâchais, on tombait tous les deux. J'ai pensé ça pendant une seconde. Une seule. Et pendant cette seconde-là, il est tombé. Sur le pont. Il a vécu jusqu'au soir. Il ne m'a rien dit. Il me regardait. » Il se tait. Sous le plancher, ça cogne, deux fois." },
        { first: true, text: "Il dit que ça a commencé il y a trois nuits. Il a fait le calcul : trois ans, jour pour jour. Il dit qu'il sait bien que Kilian est enterré à Morlenc, au cimetière des marins, et qu'il n'est pas dans la cale de la Cormorane. Il dit qu'il le sait. Il te demande ce qu'il doit faire. Il te le demande à toi, qui as seize ans, parce que tu es le seul être à bord qui ait entendu." },
        { again: true, text: "Abgrall attend, assis dans son hamac, les mains à plat sur les genoux. Sous le plancher, ça cogne, une fois, deux fois." }
      ],
      choices: [
        { label: "Demander à Abgrall comment était Kilian", to: "UP_kilian", hide: { seen: "UP_kilian" } },
        { label: "Monter sur le pont, voir si l'on entend aussi là-haut", to: "UP_quart", hide: { seen: "UP_quart" } },
        { label: "Descendre dans la cale avec une lanterne, et trouver ce qui cogne", fx: { flag: "up:poulie" }, to: "UP_poulie" },
        { label: "Lui dire que c'est la pompe, rien de plus, et qu'il doit dormir", fx: { flag: "up:pompe" }, to: "UP_pompe" },
        { label: "Lui dire qu'il faut le dire à quelqu'un, à voix haute, au jour", fx: { flag: "up:avoue" }, to: "UP_avoue" },
      ] },
    UP_poulie: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu prends la lanterne de quart. Abgrall te suit, pieds nus, sans un mot, comme un homme qu'on mène à la potence. Vous descendez par l'écoutille avant, dans la fosse aux câbles, où l'air est épais comme un bouillon et où les rats s'écartent de la lumière en traînant leur queue. Tu t'arrêtes. Tu écoutes. Ça cogne. Plus près.",
        "Tu cherches longtemps. Tu rampes entre les rouleaux de câble, la lanterne à bout de bras. Et tu trouves. Une vieille poulie de capon, oubliée là depuis Dieu sait quel carénage, pendue à un bout de filin pourri qui s'est pris dans une membrure. Chaque fois que le navire roule, elle part, frappe le bordé, revient, et frappe encore, une fois, ou deux, selon la houle. Un cœur de bois. Tu la décroches. Tu la tends à Abgrall.",
        "Il la prend dans ses deux mains. Il la regarde très longtemps, à la lueur de la lanterne. Puis il rit. Un petit rire étranglé, qui ressemble à autre chose. Il dit que c'est ça. Que ce n'était que ça. Il remonte la poulie au poste d'avant et la pose sous son hamac. Cette nuit-là, il dort. Tu l'entends ronfler, pour la première fois, et c'est un bruit étrangement rassurant.",
        "Les jours suivants, il est comme avant : premier sur les vergues, silencieux, respecté. Mais tu remarques une chose. Quand un jeune gabier monte avec lui, il le fait passer devant. Toujours. Et il garde une main libre. Toujours. Un jour, sur la vergue de misaine, par mer formée, tu le vois tendre la main à Petit-Jules qui n'a rien demandé, et le tenir par la ceinture jusqu'à ce que la voile soit serrée. Tu as trouvé la poulie. Tu n'as pas trouvé ce qui cognait. Il s'en est chargé tout seul.",
      ],
      choices: [{ label: "Regagner ton hamac", fx: { quest: "UP" }, back: "A3m_jours" }] },
    UP_pompe: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu lui dis que c'est la pompe. Tu le dis avec assurance, avec la voix de Gobert quand il explique la marée à un terrien. Tu dis que les pompes de cale cognent, la nuit, quand l'eau s'accumule dans les fonds, que tout le monde le sait, et que les gens qui disent ne rien entendre dorment, voilà tout. Tu dis que Kilian est à Morlenc. Tu dis qu'il faut dormir.",
        "Abgrall te regarde dans la pénombre. Tu ne sais pas s'il te croit. Tu crois qu'il a décidé de te croire, ce qui est une autre chose, plus fatigante. Il dit que tu as raison. Il se recouche. Tu l'entends, une heure plus tard, qui respire encore comme un homme qui court. Puis plus rien. Tu t'endors avant lui.",
        "Le lendemain, il demande au bosco à changer de poste. Il dort désormais à l'arrière, près de la soute aux voiles, aussi loin du gaillard qu'on peut l'être sur un navire de cette taille. Il te salue d'un signe de tête quand il te croise, un signe un peu raide, comme on salue quelqu'un avec qui l'on partage un secret honteux. Il ne te parle plus. Il est premier sur les vergues, par tous les temps, avec une audace qui inquiète Gobert.",
        "Toi, tu dors au poste d'avant. Et, certaines nuits, tu entends cogner, sous le plancher, une fois, deux fois. Tu sais que c'est quelque chose. Une poulie, une barrique, une pompe, sûrement. Tu ne descends pas voir. Tu as dit à un homme que ce n'était rien, et tu tiens à ta parole. Tu te demandes, certaines nuits, si c'est pour lui que tu ne descends pas, ou pour toi.",
      ],
      choices: [{ label: "Regagner ton hamac", fx: { quest: "UP" }, back: "A3m_jours" }] },
    UP_avoue: { act: "III", title: "Ce qui cogne sous le gaillard", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu lui dis que ce qui cogne, c'est ce qu'il a gardé. Tu lui dis qu'il y a trois ans qu'il tient sa vergue à deux mains, et qu'il faut en lâcher une, maintenant, et la tendre à quelqu'un, même si ce n'est plus Kilian. Tu dis qu'il faut le dire. À voix haute. Au jour. À quelqu'un qui ait le droit de l'entendre. Abgrall te demande à qui. Tu réfléchis. Tu dis : à la capitaine.",
        "Il pâlit encore, ce que tu ne croyais pas possible. Il dit qu'on ne va pas trouver la capitaine pour lui dire qu'on a laissé tomber un homme. Il dit qu'on ne va pas trouver la capitaine du tout, quand on est gabier. Puis il se tait longtemps. Sous le plancher, ça cogne. Au matin, à la relève du quart, il se lave le visage dans un seau, met sa chemise propre, et monte à l'arrière. Tu le suis, de loin.",
        "La capitaine Ribaud l'écoute debout, près de la barre, les mains dans le dos. Il parle cinq minutes, sans lever les yeux. Tu ne l'entends pas. Tu vois seulement la capitaine qui ne bouge pas, et la timonière qui regarde fixement la boussole. Quand il a fini, la capitaine reste un moment silencieuse. Puis elle dit quelque chose, très court. Abgrall relève la tête, d'un coup, comme si on l'avait frappé. Puis il redescend.",
        "Il te répète, le soir, ce qu'elle a dit. Elle a dit : « Moi aussi, à Pen-Ternec, sur la Vaillante. Un mousse. J'avais deux mains sur le gouvernail. » Puis elle a dit qu'elle comptait sur lui pour former les jeunes gabiers, à partir d'aujourd'hui, et qu'elle ne voulait plus en entendre parler. Abgrall dit qu'il ne savait pas que les capitaines avaient des choses comme ça. Il dit qu'il croyait que c'était pour ça qu'on les faisait capitaines : parce qu'ils n'en avaient pas.",
        "Cette nuit-là, il dort. Sous le plancher, ça cogne encore, un peu, une fois ou deux. Il ne l'entend plus. Toi, si. Tu te dis que ça doit être une poulie, quelque part, ou une barrique. Tu te dis que tu descendras voir, un jour. Tu n'y descends jamais. Ça ne te gêne pas. Chacun, à bord, a son bruit sous le plancher, et tu commences à trouver que c'est une compagnie.",
      ],
      choices: [{ label: "Regagner ton hamac", fx: { quest: "UP" }, back: "A3m_jours" }] },
  },
  extras: {
    people: {
      abgrall: { name: "Yann Abgrall", aka: ["Abgrall", "le gabier aux brûlures"], qui: "Gabier de la Cormorane, quarante ans, premier sur les vergues par tous les temps, qui ne parle à personne." },
    },
    quests: [
      { id: "UP", act: "III", kind: "annexe", title: "Ce qui cogne sous le gaillard", start: "UP_nuit", doit: "coeurrevelateur", echo: ["up:poulie", "up:pompe", "up:avoue"] },
    ],
  },
};
