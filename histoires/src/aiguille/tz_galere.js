// L'Île Folle-Aiguille · side story « Le rameur » (owes its question to Kipling's The Finest Story in the World: if a
// plain young man remembers, in flashes, a life he never lived, who owns the memory, and should it be kept?). Act III,
// the ship's boy at the Red Reef: a nineteen-year-old topman, felled by the sun on the red rock, wakes speaking of oars,
// chains, a burning galley, in words and details he cannot know. The flashes come back each time the heat strikes. The
// boy writes them down. The professor wants him for science. Then the topman, who has fallen in love with a girl's
// portrait in a locket, begins to forget. The boy gives him the written pages (tz:pages), takes him to the professor
// (tz:professeur), or burns the pages and lets him forget (tz:brule). Wired in A3n_ecueil.
module.exports = {
  passages: {
    TZ_insolation: { act: "III", title: "Le rameur", place: "ecueil_rouge", ambiance: "nature",
      fx: { meet: "kerello" },
      text: [
        "On le ramène de la corvée d'eau sur une civière de rames, à midi, au moment où la roche rouge chauffe tant qu'on voit l'air trembler au-dessus comme au-dessus d'un four. Iffig Kerello, gabier, dix-neuf ans, le plus gai du gaillard d'avant, un garçon de Morlenc tout en dents et en taches de son, qui chante faux et lit à peine. Il est tombé d'un coup, sur la pierre, la tête nue.",
        "On le couche à l'ombre de la voile tendue, sur le pont. On lui mouille la tête. Tu es de garde à côté de lui, avec un seau.",
        "Il ouvre les yeux au bout d'une heure. Il ne te voit pas. Il regarde au-dessus de toi, quelque chose qui n'est pas là. Et il parle. Il parle vite, d'une voix rauque, d'une voix qui n'est pas la sienne, avec des mots que tu ne connais pas, puis avec des mots que tu connais, mais qu'il ne connaît pas, lui, Iffig, qui sait à peine signer son nom.",
        "« Le comite passe avec le nerf de bœuf. Tiens la cadence. Cinquième banc, à bâbord, sous le coursier. La chaîne me coupe la cheville, là où elle a déjà coupé. Le Grec à côté de moi est mort depuis l'aube, on ne l'a pas encore détaché, il rame encore, son bras suit la rame. L'eau entre par les sabords. Le feu à l'avant. On nous oublie. On nous oublie enchaînés. »",
        "Puis il ferme les yeux. Il dort. Quand il se réveille, le soir, il te demande ce qui s'est passé. Il ne se souvient de rien. Il a faim."
      ],
      choices: [
        { label: "Lui raconter ce qu'il a dit", to: "TZ_raconte" }
      ] },
    TZ_cariou: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      fx: { meet: "cariou" },
      text: [
        "Le père Cariou, contre le guindeau, ôte de sa bouche sa pipe vide et te regarde de ses petits yeux de goéland.",
        "« Un comite ? Où t'as pris ça ? » Tu le lui dis. Il ne rit pas. « Mon grand-père en a vu, des galères, dit-il. Il était gamin. Dans un port du sud, il y en avait encore deux, au fond de la darse, qu'on ne sortait plus, avec des forçats dedans, enchaînés, pour l'exemple. Le comite, c'est celui qui marche sur le coursier avec le nerf de bœuf. Le coursier, c'est la planche du milieu, entre les bancs. Mon grand-père disait que, quand le vent tournait, à deux lieues, on sentait la galère avant de la voir. »",
        "Il remet sa pipe. Il tire dessus. Il dit, plus bas : « Et le gamin Kerello, qui sait à peine signer, il sait ça ? »",
        "Tu dis oui. Il se signe, ce que tu ne l'as jamais vu faire. « Écris tout, dit-il. Écris tout ce qu'il dit. Les morts qui parlent par la bouche des vivants, faut pas les laisser repartir sans rien. Ils reviennent. »"
      ],
      choices: [
        { label: "Revenir près d'Iffig", back: "TZ_raconte" }
      ] },
    TZ_raconte: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      text: [
        { first: true, text: "Il rit. Il dit que tu as rêvé, que la chaleur t'a tapé sur la tête aussi. Puis tu lui répètes les mots : le comite, le coursier, les sabords, le cinquième banc à bâbord. Il cesse de rire. Un comite, un coursier : ces mots lui sont aussi étrangers qu'à toi, et qu'à tout le gaillard." },
        { first: true, text: "Le lendemain, la chaleur revient. À midi, sur le pont, en épissant un cordage, Iffig s'arrête, les mains immobiles, les yeux fixes. Et il recommence. Une autre scène. Une galère qui entre dans un port blanc, au son des fifres. Des femmes aux fenêtres. Un marché où l'on vend des hommes. Le nom d'un capitaine. Le goût du biscuit pourri trempé dans le vinaigre. Le compte des coups de rame, jusqu'à mille. Il dit tout cela à voix basse, avec des détails si précis, si laids, si exacts, que tu as froid au milieu de la chaleur." },
        { first: true, text: "Puis il se réveille, et il ne se souvient de rien." },
        { first: true, text: "Tu as un bout de crayon et le carnet où tu notes les nœuds. Tu commences à écrire. Ce soir-là, et le lendemain. Iffig, quand il est lui-même, te regarde écrire avec un mélange de fierté et de peur. « C'est moi qui dis tout ça ? demande-t-il. Je suis peut-être sorcier. » Il te demande de lire. Tu lis. Il écoute comme on écoute une histoire de veillée, les yeux ronds, en oubliant que c'est la sienne." },
        { again: true, text: "Iffig dort, à l'ombre de la voile, la bouche ouverte, avec des taches de son plein la figure." }
      ],
      choices: [
        { label: "Demander au père Cariou ce que c'est, un comite", to: "TZ_cariou", hide: { seen: "TZ_cariou" } },
        { label: "Continuer à écrire, les jours suivants", to: "TZ_carnet" }
      ] },
    TZ_nuit: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu te réveilles dans ton hamac au milieu de la nuit. Quelqu'un marche pieds nus sur le pont, au-dessus de toi, d'un pas lent, régulier, lourd. Tu montes.",
        "C'est Iffig. Il est assis à l'avant, sur le pont, les jambes allongées, les pieds calés contre le bastingage, comme contre un banc. Il a les deux mains serrées sur un aviron de la chaloupe, couché en travers de ses genoux. Et il rame. Il rame dans le vide, dans la nuit, les yeux ouverts, fixes, sans rien voir. Il se penche en avant, il tire, il se renverse en arrière, il se penche, il tire. Il compte, à voix basse, dans une langue qui n'est pas la sienne.",
        "Sa cheville gauche saigne. Il l'a frottée contre le bastingage, à chaque coup, au même endroit, jusqu'à l'écorcher. Là où la chaîne coupait.",
        "Tu n'oses pas le réveiller. Tu t'assieds à côté de lui, et tu le regardes ramer, jusqu'à ce que l'aube grise vienne, et qu'il s'arrête de lui-même, et lâche l'aviron, et se couche sur le pont, et s'endorme comme un enfant. Le matin, il ne se souvient de rien. Il demande pourquoi il a mal à la cheville."
      ],
      choices: [
        { label: "Revenir au carnet", back: "TZ_carnet" }
      ] },
    TZ_carnet: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "mer",
      text: [
        { first: true, text: "En deux jours, tu remplis vingt pages. La galère a un nom. Le banc a un numéro. Le rameur a un nom, qui n'est pas Iffig. Il a eu une femme, quelque part, dans une île où l'on fait du vin noir. Il a été pris par des pirates. Il a ramé quatre ans. Il est mort enchaîné, dans un incendie, pendant une bataille dont il ne savait même pas qui la livrait." },
        { first: true, text: "Le professeur Gaudrémont, qui passe sur le pont, s'arrête derrière toi un soir et lit par-dessus ton épaule. Il pâlit. Il prend le carnet sans demander. Il le feuillette. Il dit que ces termes sont exacts. Que le comite était le garde-chiourme des galères. Que le coursier était l'allée centrale. Que les galères à rames ont disparu des mers depuis plus de cent ans, et qu'aucun gabier de Morlenc ne peut savoir ça." },
        { first: true, text: "« C'est un cas, dit-il, les yeux brillants. Un cas unique. La mémoire des morts. Je veux ce garçon. Je veux l'examiner, l'interroger, le mesurer, le faire parler devant témoins. Je veux qu'il le dise devant l'Académie. Ils ne pourront plus rire. » Il te rend le carnet à regret. « Amène-le-moi. »" },
        { again: true, text: "Le carnet, vingt pages serrées, et le professeur qui t'attend sur le gaillard d'arrière." }
      ],
      choices: [
        { label: "Te réveiller, cette nuit-là, au bruit de quelqu'un qui marche vers l'avant", to: "TZ_nuit", hide: { seen: "TZ_nuit" } },
        { label: "Retourner voir Iffig, le soir", to: "TZ_medaillon" }
      ] },
    TZ_medaillon: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      text: [
        "Le soir, Iffig a autre chose à te montrer. Un médaillon de cuivre, qu'il a acheté à Morlenc à un colporteur, avant le départ, pour presque rien. Dedans, le portrait d'une jeune fille, une miniature naïve, peinte, des cheveux noirs, des yeux sombres, une bouche sérieuse. Qui est-ce ? Il l'ignore. Il l'a achetée parce qu'elle ressemblait à quelqu'un dont le nom lui échappe.",
        "Il est tombé amoureux d'elle. Il le dit en rougissant, comme on avoue une bêtise. Il la regarde le soir, sous la lanterne. Il lui parle. Il lui a donné un nom. Il dit qu'en rentrant il cherchera le colporteur, et la fille, et qu'il l'épousera.",
        "Le lendemain, à midi, sous le soleil, il ne parle pas. Il s'arrête, les mains immobiles, les yeux fixes, comme d'habitude. Et puis rien. Il fronce les sourcils. Il secoue la tête. « C'était là, dit-il. Je l'avais. Le banc, la chaîne. Ça s'en va. » Le jour d'après, plus rien du tout. Il ne s'arrête même plus. Il chante faux en épissant, en regardant son médaillon.",
        "Tu as vingt pages dans ton carnet. Lui n'a plus rien. Il a une jeune fille peinte dans un médaillon de cuivre, et cela lui suffit, et la galère, les chaînes, le Grec mort, le port blanc, tout est parti, comme une marée qui se retire et qui laisse une plage propre.",
        "Le professeur te fait signe, depuis le gaillard d'arrière. Il attend."
      ],
      choices: [
        { label: "Donner le carnet à Iffig, pour qu'il sache ce qu'il a été", fx: { flag: "tz:pages" }, to: "TZ_pages" },
        { label: "Mener Iffig chez le professeur, avec le carnet", fx: { flag: "tz:professeur" }, to: "TZ_professeur" },
        { label: "Brûler les pages, cette nuit, à la lanterne", fx: { flag: "tz:brule" }, to: "TZ_brule" }
      ] },
    TZ_pages: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu lui donnes le carnet. Tu lui dis : c'est à toi. C'est toi qui l'as dit. Tu as le droit de savoir.",
        "Il le prend. Il ne sait pas bien lire. Il te demande de lui lire, encore, comme les premiers soirs. Tu lis. Tout. Les vingt pages. La chaîne, le banc, l'incendie, la femme dans l'île au vin noir.",
        "Il écoute. Mais cette fois, il écoute comme on écoute le médecin. À la fin, il reste longtemps silencieux. Puis il ouvre son médaillon, et regarde la jeune fille peinte aux cheveux noirs. Il regarde le carnet. Il regarde le médaillon.",
        "« Elle avait des cheveux noirs, dit-il. La femme de l'île. Tu l'as écrit. Page sept. » Il referme le médaillon. Il te rend le carnet. « Garde-le. Moi, je l'ai, maintenant. »",
        "Les jours suivants, il épisse en silence, sans chanter. Il regarde la mer avec des yeux qui ont l'air plus vieux. Il a gagné quelque chose, tu le sais. Tu ne sais pas si c'est quelque chose qu'on peut porter, à dix-neuf ans."
      ],
      choices: [
        { label: "Revenir sur le pont", fx: { quest: "TZ" }, back: "A3n_ecueil" }
      ] },
    TZ_professeur: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu mènes Iffig chez le professeur, avec le carnet. Le professeur le reçoit dans sa cabine, au milieu des bocaux et des boîtes d'insectes, avec une politesse extraordinaire, comme on reçoit un prince. Il lui fait asseoir sur sa propre chaise. Il lui offre du madère. Il ouvre le carnet.",
        "Il interroge. Il interroge deux heures. Le comite, le coursier, le port blanc, le nom de la galère. Iffig a tout oublié. Il répond « je ne sais pas, monsieur » avec une gentillesse de chien battu. Le professeur insiste. Il lui fait regarder le soleil, à travers une lentille, pour provoquer la chaleur. Il lui fait réciter des mots grecs. Il le secoue par les épaules. Iffig pleure.",
        "À la fin, le professeur se laisse tomber sur sa couchette. « Fini, dit-il. Envolé. Un cas unique, et il est guéri. Guéri ! Par une miniature de colporteur ! » Il rit, d'un rire amer. Il garde le carnet. Il dit qu'il le publiera quand même, avec des notes, et qu'on dira qu'il a tout inventé, comme pour le fémur.",
        "Iffig sort de la cabine en se frottant les yeux, et va s'asseoir à sa place, sur le gaillard, avec son médaillon. Il te regarde de loin, un peu de travers, comme on regarde un ami qui vous a mené chez le dentiste pour une dent qui ne faisait plus mal."
      ],
      choices: [
        { label: "Revenir sur le pont", fx: { quest: "TZ" }, back: "A3n_ecueil" }
      ] },
    TZ_brule: { act: "III", title: "Le rameur", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu attends la nuit. Tu te mets à l'avant, à l'abri du vent, avec la lanterne. Tu arraches les pages, une à une. Tu les lis une dernière fois, chacune, avant de la tenir au-dessus de la flamme.",
        "Le comite brûle. Le coursier brûle. Le Grec mort, dont le bras suivait la rame, brûle. Le port blanc, les femmes aux fenêtres, le marché aux hommes, le biscuit au vinaigre, l'incendie, la chaîne, la femme aux cheveux noirs dans l'île au vin noir : tout brûle, et les cendres s'envolent par-dessus le bastingage vers l'Écueil-Rouge, qui fume dans la nuit.",
        "Tu te dis qu'un homme a ramé quatre ans et qu'il est mort enchaîné, et que personne n'a jamais écrit son nom, et que tu viens de le brûler une deuxième fois. Tu te dis aussi qu'Iffig a dix-neuf ans, un médaillon, et une vie à vivre, et qu'il n'a pas besoin d'en porter deux.",
        "Le lendemain, Iffig chante faux en épissant. Il te montre son médaillon pour la dixième fois. Tu lui dis qu'elle est très jolie. Tu as, dans le fond de la gorge, un goût de cendre et de vinaigre, qui ne s'en va pas de la journée."
      ],
      choices: [
        { label: "Revenir sur le pont", fx: { quest: "TZ" }, back: "A3n_ecueil" }
      ] }
  },
  extras: {
    people: {
      kerello: { name: "Iffig Kerello", aka: ["le gabier aux taches de son"], qui: "Gabier de la Cormorane, dix-neuf ans, le plus gai du gaillard d'avant, qui sait à peine signer son nom." }
    },
    quests: [
      { id: "TZ", act: "III", kind: "annexe", title: "Le rameur", start: "TZ_insolation", doit: "plusbellehistoire", echo: ["tz:pages", "tz:professeur", "tz:brule"] }
    ]
  }
};
