// L'Île Folle-Aiguille · side story « Le sémaphore » (owes its question to Dickens's The Signal-Man: what does one do
// with a man who receives warnings he cannot read, and is one oneself the warning?). Act III, the ship's boy at
// Brisegrève: the corporal who keeps the signal post on top of the rock has three times seen, on the reef below at dusk,
// a man with an arm over his face, waving and shouting « Holà, en bas ! Gare ! », and each time a death followed. The
// boy brings him his oil, hears the three stories, keeps the night watch with him, and at dawn, when the corporal goes
// down to the reef to see for himself, chooses: to shout the warning from above (tm:crie), to go and fetch the officer
// of the watch (tm:officier), or to go down to the reef in his place (tm:descend). Wired in A3m_brisegreve.
module.exports = {
  passages: {
    TM_huile: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "village",
      fx: { meet: "coadou" },
      text: [
        "La cantinière du bourg te met dans les bras un bidon d'huile à lampe, une miche, un morceau de lard enveloppé dans un journal, et une pièce de deux sous. « Pour le sémaphore, dit-elle. Tout en haut. Tu donnes ça au caporal Coadou, tu redescends, tu gardes les deux sous. Les soldats n'y montent plus. Ils disent que ça porte malheur. Moi, je dis qu'ils ont la flemme. Va. »",
        "Le sémaphore est tout au sommet de Brisegrève, au-dessus du fort, sur la dernière pointe de granit : une tourelle carrée, blanchie à la chaux, surmontée d'un mât à trois bras de bois noir qui servent à parler aux navires, et d'une lanterne. On y monte par un sentier taillé à même la roche, à pic sur la mer, sans rambarde, avec la houle qui explose trois cents pieds plus bas en geysers blancs dont l'écume te monte jusqu'au visage, salée, tiède, comme un crachat.",
        "En haut, un homme t'attend sur le seuil. Il t'a vu monter de loin. Il te regarde arriver avec une attention singulière, une attention de chien qui reconnaît un pas, et quand tu es tout près, il recule d'un pas, comme si tu lui faisais peur.",
        "Puis il dit, d'une voix soulagée : « Ah. Non. Rien. Le bidon, seulement. Entrez. »"
      ],
      choices: [
        { label: "Entrer dans la tourelle", to: "TM_tourelle" }
      ] },
    TM_tourelle: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nuit",
      text: [
        "Dedans, une seule pièce, carrée, propre comme une cellule de moine. Un lit de camp au carré, une table, un livre de signaux ouvert, un registre où il note, d'une écriture fine, chaque navire, chaque signal, chaque heure, une longue-vue de cuivre sur un trépied, et une petite étagère où il range, au cordeau, des livres de mathématiques. Il a appris l'algèbre tout seul, dit-il, ici, pendant les nuits. Il trouve que c'est une science reposante : les inconnues finissent toujours par se laisser trouver.",
        "Le caporal Josselin Coadou a quarante ans, une figure de professeur, maigre, pâle, rasée de près, et des yeux qui reviennent sans arrêt à la fenêtre ouest, celle qui donne sur l'Éperon, une pointe de rochers noirs, très bas, au pied de la falaise, que la mer découvre à marée basse.",
        "Il te remercie pour l'huile. Il te demande de rester un peu. Il le demande poliment, comme on demande l'heure, et sa main tremble sur la table.",
        "« Je voudrais vous raconter quelque chose, dit-il. Vous êtes de passage. Vous repartez après-demain. Vous ne le répéterez à personne qui compte. C'est exactement ce qu'il me faut. »"
      ],
      choices: [
        { label: "Rester et l'écouter", to: "TM_recits" }
      ] },
    TM_recits: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nuit",
      text: [
        "« La première fois, c'était il y a deux ans, au coucher du soleil. J'ai regardé l'Éperon par cette fenêtre, comme tous les soirs. Il y avait un homme debout dessus. Un homme en caban, le bras gauche replié sur le visage, comme quelqu'un qui se protège des embruns, ou d'une lumière trop forte, ou d'une chose qu'il ne veut pas voir. De l'autre bras, il faisait de grands signes, comme ça. Et il criait. On l'entendait d'ici, malgré la houle. Il criait : Holà, en bas ! Gare !",
        "« En bas ? Il était en bas. C'est nous qui sommes en haut. J'ai pris la longue-vue. Il n'y avait plus personne. Le lendemain, une barque de pêche s'est brisée sur l'Éperon, avec deux hommes. On les a retrouvés.",
        "« La deuxième fois, c'était l'hiver dernier. Même heure, même homme, même bras, même cri. Je suis descendu, cette fois, en courant, par le sentier, avec une lanterne. Sur l'Éperon, des moules et de l'eau, rien d'autre. Dans la nuit, la femme du sergent Guégan est morte en couches, au fort, avec l'enfant. »",
        "Il se tait. Il regarde la fenêtre. Tu demandes s'il y a eu une troisième fois.",
        "« Hier soir, dit-il. »"
      ],
      choices: [
        { label: "Lui demander ce qu'il attend, maintenant", to: "TM_attente" }
      ] },
    TM_attente: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nuit",
      text: [
        "« J'attends de comprendre, dit-il. C'est ce qui me tue. La peur, je connais : je suis soldat, j'ai eu peur partout. Ce qui me ronge, c'est le message. Quelqu'un m'avertit, et je ne sais pas de quoi. Gare à quoi ? À qui ? Que faut-il que je fasse ? Si c'est un naufrage, je peux hisser un signal. Si c'est une maladie, je peux prévenir le médecin. Mais il me dit seulement : gare. Comme si je devais savoir. Comme si j'étais un mauvais élève qui n'a pas appris sa leçon. »",
        "Il se lève. Il marche de la porte à la fenêtre, de la fenêtre à la porte, quatre pas, quatre pas.",
        "« Et le bras, dit-il. Le bras sur le visage. Pourquoi cache-t-il son visage ? Parce que je le connais. Voilà ce que je crois. Je le connais, et si je le voyais, je comprendrais. »",
        "Le soleil descend vers la mer, de l'autre côté de la fenêtre ouest. Le caporal s'arrête de marcher. Il dit, sans se retourner : « Restez. Juste ce soir. Regardez avec moi. Si vous le voyez aussi, je ne suis pas fou. Si vous ne le voyez pas, je saurai au moins ça. »"
      ],
      choices: [
        { label: "Rester, et regarder l'Éperon avec lui", to: "TM_guet" }
      ] },
    TM_guet: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nuit",
      text: [
        "Vous regardez ensemble. Le soleil touche l'eau. L'Éperon, en bas, est noir, luisant, découvert par la marée, avec des flaques qui s'allument une à une comme des yeux. La houle monte, recule, monte, avec un bruit de soufflet de forge. L'écume, en retombant, prend des formes : des chevaux, des draps, des femmes qui s'agenouillent. Tu te dis que c'est l'écume. Tu te le dis plusieurs fois.",
        "Et puis, au moment où le soleil disparaît, une gerbe plus haute que les autres monte sur l'Éperon, se tient debout une seconde, toute droite, blanche, avec, sur le côté, une sorte de branche qui se replie vers le haut, et une autre qui s'écarte, et le vent, en passant dans les trous de la roche, fait un bruit de gorge, un bruit qui pourrait être un mot.",
        "Puis rien. La gerbe retombe. La nuit vient.",
        "À côté de toi, le caporal a les deux mains à plat sur le rebord de la fenêtre, les jointures blanches. « Vous l'avez vu, dit-il. Je le sais. Je l'ai senti sur vous. »",
        "Ce que tu as vu, tu l'ignores. Ce que tu as entendu, c'était le vent dans la roche. Tu crois.",
        "Il dit qu'au lever du jour, à marée basse, il descendra sur l'Éperon. Seul. Pour le voir en face, une fois pour toutes, et lui demander ce qu'il veut. Il dit que c'est la seule chose qu'il n'a pas essayée."
      ],
      choices: [
        { label: "Passer la nuit au sémaphore, et le suivre jusqu'au bord à l'aube", to: "TM_aube" }
      ] },
    TM_aube: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nature",
      text: [
        "Il ne dort pas. Toi non plus, ou à peine, sur une chaise, la tête contre le mur, et chaque fois que tu ouvres les yeux il est à la fenêtre, debout, dans la même position, comme un factionnaire.",
        "À l'aube, il boucle son ceinturon, prend sa lanterne, et sort. Tu le suis jusqu'au bord de la falaise, là où le sentier plonge vers l'Éperon. En bas, la marée est basse, l'Éperon découvert, noir, luisant, et la houle de l'aube, plus longue, plus lourde, roule dessus avec une lenteur de bête.",
        "Il commence à descendre. Il est à mi-chemin quand tu vois, au large, une lame plus haute que les autres, une lame de fond, lisse, verte, qui s'avance sans écume, en silence, vers l'Éperon, et qui sera là quand il y arrivera.",
        "Il ne la voit pas. Il regarde ses pieds, le sentier, le rocher. Le vent souffle de face, plein d'embruns. Tu lèves instinctivement le bras gauche devant ton visage, à cause du sel.",
        "Et tu comprends, avec le bras levé, ce que tu es en train de devenir, vu d'en bas."
      ],
      choices: [
        { label: "Crier de toutes tes forces : « Holà, en bas ! Gare ! »", fx: { flag: "tm:crie" }, to: "TM_crie" },
        { label: "Courir au fort chercher l'officier de quart", fx: { flag: "tm:officier" }, to: "TM_officier" },
        { label: "Dévaler le sentier pour le rattraper et descendre à sa place", fx: { flag: "tm:descend" }, to: "TM_descend" }
      ] },
    TM_crie: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nature",
      text: [
        "Tu cries. Le bras sur le visage, l'autre bras battant l'air, de toutes tes forces, contre le vent : « Holà, en bas ! Gare ! »",
        "Il lève la tête. Il te voit. Tu vois son visage, d'en haut, tout petit, tout blanc, qui s'ouvre comme une fenêtre. Il reste figé une seconde, une seule, une seconde de trop, à te regarder, à reconnaître enfin ce qu'il a vu trois fois.",
        "Puis il se jette contre la falaise, à plat, les bras écartés, les doigts dans la roche. La lame passe. Elle monte jusqu'à lui, le recouvre, l'arrache à moitié, retombe. Quand l'eau se retire, il est encore là, collé à la pierre, un bras pendant, cassé, et il rit. Tu l'entends rire d'en haut, à travers le vent, un rire d'homme qui a trouvé la solution d'une équation.",
        "On le remonte avec une corde. Le chirurgien du fort lui remet le bras. Il te serre la main de l'autre, longtemps. « C'était vous, dit-il. Depuis le début. Un souvenir à l'envers, voilà ce que c'était. J'ai vu, trois fois, ce qui allait me sauver. Je ne savais pas que ça sauvait. »",
        "Tu gardes pour toi ce que tu ne comprends pas, et la barque, et la femme du sergent, que rien n'a sauvées. Il est heureux. Il a trouvé son inconnue."
      ],
      choices: [
        { label: "Redescendre au bourg", fx: { quest: "TM" }, back: "A3m_brisegreve" }
      ] },
    TM_officier: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nature",
      text: [
        "Tu cours. Tu cours jusqu'au fort, par l'escalier taillé, en criant au factionnaire qu'il faut l'officier de quart, que le caporal Coadou est sur l'Éperon, qu'une lame arrive. Le factionnaire te regarde, bâille, et finit par aller chercher un lieutenant en bonnet de nuit, qui te suit au pas de promenade jusqu'au bord de la falaise.",
        "En bas, l'Éperon est vide. Entièrement recouvert par la mer, qui monte maintenant, blanche, furieuse. Vous regardez. Le lieutenant enlève son bonnet de nuit.",
        "Puis une voix, derrière vous. C'est le caporal, trempé de la tête aux pieds, qui remonte le sentier à quatre pattes, en crachant de l'eau de mer. La lame l'a jeté contre la falaise, et il s'y est accroché. Il est vivant. Il regarde le lieutenant, il regarde son bonnet de nuit à la main, et il comprend ce que tu as fait.",
        "Le lieutenant le relève de son poste dans l'heure. « Fatigue nerveuse. » On l'enferme dans une chambre au fort, sous surveillance, pour son bien, avec une fenêtre qui donne, par un hasard que personne n'a choisi, sur l'Éperon.",
        "Tu passes le voir avant de partir. Il est assis à la fenêtre. Il te dit, très calmement, que tu as eu raison, qu'il vaut mieux être fou à l'abri que sage sur un rocher. Puis il ajoute, en regardant en bas : « Il est revenu, cette nuit. Il avait baissé son bras. Je n'ai pas eu le temps de voir. »"
      ],
      choices: [
        { label: "Redescendre au bourg", fx: { quest: "TM" }, back: "A3m_brisegreve" }
      ] },
    TM_descend: { act: "III", title: "Le sémaphore", place: "brisegreve", ambiance: "nature",
      text: [
        "Tu dévales le sentier. Tu le rattrapes au dernier coude, tu l'agrippes par le ceinturon, tu le tires en arrière, contre la roche, de tout ton poids. Il se débat. La lame passe en dessous de vous, sur l'Éperon, avec un grondement de charrette, recouvre tout, et repart.",
        "Il te regarde, hors d'haleine, sans comprendre. Tu lui dis que tu vas descendre, toi, à sa place. Que c'est toi qui vas voir. Qu'il remonte.",
        "Il remonte. Tu descends. Sur l'Éperon, à marée basse, entre deux lames, il n'y a personne. Des moules, des flaques, des algues qui ondulent. Et, coincé dans une fente de la roche, à hauteur d'homme, un vieux caban de marin, gonflé d'eau, déchiré, un bras pris dans la pierre, plié vers le haut, l'autre bras pendant, que la houle, à chaque passage, soulève et agite comme on fait signe.",
        "Tu le décroches. Il est lourd, il sent la vase et le mort. Tu le remontes jusqu'au sémaphore, et tu le jettes aux pieds du caporal.",
        "Il le regarde longtemps. Il le touche. Il secoue la tête. « Non, dit-il. Celui-là, je le connais. Il est là depuis l'hiver. L'autre criait. » Puis il te regarde, et il te remercie quand même, avec beaucoup de douceur, comme on remercie un enfant qui vous rapporte un caillou en croyant que c'est de l'or."
      ],
      choices: [
        { label: "Redescendre au bourg", fx: { quest: "TM" }, back: "A3m_brisegreve" }
      ] }
  },
  extras: {
    people: {
      coadou: { name: "Josselin Coadou", aka: ["le caporal du sémaphore"], qui: "Caporal du sémaphore de Brisegrève, quarante ans, algébriste à ses heures, qui voit un homme sur l'Éperon avant chaque malheur." }
    },
    quests: [
      { id: "TM", act: "III", kind: "annexe", title: "Le sémaphore", start: "TM_huile", doit: "signaleur", echo: ["tm:crie", "tm:officier", "tm:descend"] }
    ]
  }
};
