// L'Île Folle-Aiguille · side story « La messe de minuit sur la lande » (owes its question to Barbey d'Aurevilly's
// L'Ensorcelée: what does a village owe a man it has decided is damned, and can a passing stranger serve him?). Act
// III, the ship's boy at Lannoz: on the moor, in the roofless chapel of Coat-Du, a priest with a ruined face says mass
// alone at midnight, though the bishop has forbidden him the altar. The village says he bewitched a farmer's wife, who
// drowned herself in a peat-pool for him. He needs someone to answer the mass. The boy goes, hears him, and decides:
// to serve his mass (tr:sert), to tell the village where he hides (tr:village), or to take his words to the widower
// (tr:mari). Wired in A3o_lannoz.
module.exports = {
  passages: {
    TR_cloche: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Le premier soir, à la veillée, une vieille du village te prend le poignet de sa main sèche, comme un oiseau qui se pose. « Tu entendras peut-être une cloche, cette nuit, dit-elle. Vers minuit. Du côté de Coat-Du, là où il n'y a plus de cloche depuis cinquante ans. Ne va pas voir. C'est le prêtre brûlé qui dit sa messe. Il dit sa messe pour le diable, puisque Dieu n'en veut plus. »",
        "Elle n'en dit pas plus. Les autres, autour du feu de tourbe, regardent ailleurs, comme on évite de marcher sur une tombe.",
        "À minuit, tu es éveillé{e}, couché{e} dans le foin de la grange où l'on a logé la corvée d'eau. Et tu l'entends. Une cloche. Une petite cloche grêle, fêlée, qui tinte trois fois, puis trois fois, puis neuf, à travers la lande, sous la lune, comme un appel qu'on fait sans espérer de réponse."
      ],
      choices: [
        { label: "Te lever et marcher vers la cloche", to: "TR_chapelle" }
      ] },
    TR_chapelle: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      fx: { meet: "lezerec" },
      text: [
        "La chapelle de Coat-Du est au milieu de la lande, entre deux tourbières, sur une petite butte où poussent des ifs noirs, tordus par le vent, qui ont l'air de prier à genoux. Elle n'a plus de toit. La lune entre par le haut, blanche, et pose sur les dalles des carrés de lumière comme des nappes. L'autel est intact, une table de granit nu. Dessus, deux chandelles.",
        "Devant l'autel, un homme en soutane noire, très grand, se tient debout, de dos, immobile. Il tient à la main une clochette d'église, verte de vert-de-gris.",
        "Il se retourne en t'entendant. Tu t'arrêtes. Son visage, à la lueur des chandelles, n'a plus de forme. Toute la moitié droite, du front au menton, est une coulée de chair fondue, rose et blanche, luisante, sans sourcil, sans cil, avec un œil enfoncé au fond comme une bille dans de la cire. La moitié gauche est belle. Une belle figure de quarante ans, noble, dure, aux lèvres minces, avec un œil noir d'une intensité de braise.",
        "« Ah, dit-il. Quelqu'un est venu. » Sa voix est très douce. « Tu viens d'ailleurs. Tu ignores ce que je suis. C'est une chance pour moi. Sais-tu répondre la messe ? »"
      ],
      choices: [
        { label: "Lui demander d'abord qui il est", to: "TR_abbe" }
      ] },
    TR_autel: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "L'autel est une table de granit nue, sans nappe, fendue en travers par un coup de foudre ou de pioche, sur laquelle l'abbé a posé ce qu'il a : deux chandelles de suif dans des bougeoirs de fer, un missel aux pages gondolées par l'humidité, un calice d'étain cabossé, et une clochette de bronze, de celles qu'on accroche au cou des vaches.",
        "Au pied de l'autel, sur la dalle, il y a une couronne de bruyère tressée, fraîche, et à côté, une autre, plus ancienne, sèche, et une autre, et une autre encore, empilées, jusqu'à la plus vieille, qui n'est plus qu'une poussière brune en forme de cercle. Tu en comptes neuf, et la poussière fait la dixième. Une par an.",
        "Sur la plus fraîche, quelqu'un a noué un ruban. Un ruban de coiffe, en dentelle jaunie, de ceux que portent les femmes de la lande le dimanche. L'abbé voit que tu le regardes. Il dit que ce n'est pas lui qui l'a mis. Il dit qu'il trouve une couronne neuve chaque année, le jour de la Saint-Jean, sur la dalle, et qu'il ne sait pas qui l'apporte. Il dit qu'il a guetté, la première année. Puis il a cessé, par respect.",
        "Il prend le ruban entre deux doigts de sa main valide, la seule qui obéisse encore. Il dit, très bas : « C'est celui de sa coiffe. Je le reconnaîtrais entre mille. Elle le portait le soir des feux. » Il le repose sur la bruyère, avec un soin infini. Il dit que quelqu'un, à Lannoz, pense comme lui. Il ne veut pas savoir qui. Il dit que ça lui suffit de savoir que c'est quelqu'un."
      ],
      choices: [
        { back: "TR_abbe", label: "Retourner près de l'abbé" }
      ] },
    TR_clocher: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Le clocher de la chapelle de Coat-Du est un clocher-mur, une simple façade de granit percée en haut de deux arcades, comme deux yeux vides. Dans l'une, rien. Dans l'autre, rien non plus. On a descendu la cloche il y a dix ans, quand l'évêque a fermé la chapelle, et on l'a fondue pour faire des canons au fort de Brisegrève.",
        "Pourtant, tu l'as entendue, à la veillée, à une demi-lieue. Toute la lande l'a entendue. Une cloche grave, lente, au son fêlé, qui sonnait l'élévation au milieu de la nuit. Tu demandes à l'abbé comment. Il agite la clochette de vache, sur l'autel. Un petit son clair, aigrelet, qui ne porterait pas à vingt pas.",
        "Il dit qu'il ne sonne que ça. Il dit qu'il ne sait pas d'où vient l'autre son. Il dit que, la première fois qu'il l'a entendu, il y a neuf ans, il a cru qu'on se moquait de lui, et il est sorti, et il a fait le tour de la chapelle avec une lanterne. Il n'y avait personne. Les arcades étaient vides. Le son venait d'en haut, de l'arcade de gauche, là où pendait la cloche.",
        "« J'ai décidé, dit-il, que c'était Dieu qui se moquait de moi. Ou qu'il me répondait. Je n'ai jamais su lequel des deux. À mon âge, on finit par trouver que c'est la même chose. » Il sourit, du côté gauche. Au-dessus de vous, dans l'arcade vide, le vent passe, et il fait un bruit."
      ],
      choices: [
        { back: "TR_abbe", label: "Retourner près de l'abbé" }
      ] },
    TR_abbe: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        { first: true, text: "Il s'appelle l'abbé Lézérec. Il était recteur de Lannoz, il y a dix ans. Il dit cela avec un sourire du côté gauche." },
        { first: true, text: "« J'ai aimé une femme, dit-il simplement. Jeanne-Marie Le Gonidec. La femme d'un fermier. Je ne l'ai jamais touchée. Je l'ai aimée avec les yeux, à l'église, pendant cinq ans, chaque dimanche, du haut de la chaire, et elle le savait, et elle me regardait aussi. C'est tout. C'est assez pour damner deux âmes, dit l'évêque. L'évêque a peut-être raison." },
        { first: true, text: "« Un soir de la Saint-Jean, le feu de joie, sur la lande. Elle m'a regardé à travers les flammes. Tout le village a vu ce regard. Le lendemain, on l'a retrouvée dans la tourbière du Corbeau, la tête dans l'eau noire. Elle n'avait pas laissé un mot. Le village a dit que je l'avais ensorcelée. L'évêque m'a retiré l'autel." },
        { first: true, text: "« Le jour de son enterrement, je me suis jeté dans le feu de tourbe de la maison curiale. On m'en a tiré. Voilà mon visage. Il est juste. La moitié de moi a brûlé. L'autre attend. »" },
        { first: true, text: "Il pose la clochette sur l'autel. « Depuis dix ans, je dis la messe ici, pour elle, chaque nuit de pleine lune. Je n'en ai plus le droit. Je la dis quand même. Mais une messe sans personne pour répondre, c'est une prière dans un puits. Personne, à Lannoz, ne veut répondre. Ils ont peur que je les ensorcelle à leur tour. »" },
        { again: true, text: "L'abbé Lézérec, devant l'autel, attend qu'on lui pose la question qu'il attend depuis dix ans." }
      ],
      choices: [
        { label: "Regarder l'autel, où brûlent des chandelles de suif", to: "TR_autel", hide: { seen: "TR_autel" } },
        { label: "Lever les yeux vers le clocher, où il n'y a plus de cloche", to: "TR_clocher", hide: { seen: "TR_clocher" } },
        { label: "Lui demander pourquoi elle s'est noyée", to: "TR_pourquoi" }
      ] },
    TR_pourquoi: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Il se tait longtemps. Les chandelles coulent. Un if craque, dehors, sous le vent.",
        "« Je l'ignore, dit-il. Voilà ma damnation. J'ignore si elle est morte de moi, ou de lui, ou d'elle. Son mari, Thomas Le Gonidec, est un homme dur, de cette dureté des landes qui ne frappe pas, qui se tait. Il ne lui a pas parlé pendant cinq ans. Peut-être qu'elle est morte de ce silence-là, et que mon regard était seulement la seule chose chaude dans sa vie. Peut-être qu'elle est morte de honte, parce que tout le village avait vu. Peut-être qu'elle a glissé, la nuit, en rentrant. Les tourbières sont traîtres. Personne n'a cherché à savoir. C'était plus simple, que ce soit moi. »",
        "Il te regarde de son œil noir. « Thomas Le Gonidec vit toujours. Il habite la ferme du Corbeau, au bord de la tourbière. Il est le seul à savoir ce qui s'est dit, ce soir-là, dans sa maison, entre le feu de la Saint-Jean et la tourbière. Il le gardera pour lui. Moi, il m'évite depuis dix ans.",
        "« Alors, répondras-tu ma messe ? »",
        "Dehors, très loin, de l'autre côté de la lande, une lumière bouge. Une lanterne. Deux. Elles viennent du village. Des voix, portées par le vent. Quelqu'un, peut-être, t'a vu partir de la grange."
      ],
      choices: [
        { label: "T'agenouiller et répondre sa messe, comme tu peux", fx: { flag: "tr:sert" }, to: "TR_sert" },
        { label: "Courir au-devant des lanternes, et dire aux gens du village où il est", fx: { flag: "tr:village" }, to: "TR_village" },
        { label: "Lui promettre d'aller frapper, à l'aube, à la ferme du Corbeau", fx: { flag: "tr:mari" }, to: "TR_mari" }
      ] },
    TR_sert: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu t'agenouilles sur la dalle froide, à droite de l'autel, là où il te montre. Tu ne connais pas les répons. Il te les souffle, mot à mot, d'une voix basse, et tu les répètes, en latin, sans comprendre, et ta voix monte toute seule dans la chapelle sans toit, vers la lune.",
        "Il dit sa messe. Il la dit lentement, avec une gravité terrible, chaque geste pesé, la moitié brûlée de son visage dans l'ombre, la moitié belle dans la lumière. Au moment de l'élévation, il lève l'hostie vers le ciel ouvert, et ses mains tremblent si fort que tu crois qu'il va la laisser tomber. Il ne la laisse pas tomber.",
        "Les lanternes arrivent. Elles s'arrêtent à la porte de la chapelle. Quatre hommes, cinq, avec des fourches et des bâtons. Ils regardent. Ils voient le prêtre brûlé, et toi, un mousse étranger, à genoux, qui répond la messe. Ils ne bougent pas. Ils restent sur le seuil, les fourches baissées, sans oser entrer, comme on reste à la porte d'une maison où quelqu'un est en train de mourir.",
        "La messe finit. L'abbé Lézérec se retourne, et bénit. Il bénit la chapelle, la lande, toi, les hommes à la porte. Un des hommes, un vieux, ôte son bonnet. Les autres, après un moment, l'imitent.",
        "Puis ils s'en vont, en silence. L'abbé souffle les chandelles. Il te dit merci, et il ajoute, de sa voix douce : « C'est la première fois en dix ans qu'elle a eu une vraie messe. Il fallait quelqu'un qui ne savait pas. »"
      ],
      choices: [
        { label: "Rentrer à la grange, avant l'aube", fx: { quest: "TR" }, back: "A3o_lannoz" }
      ] },
    TR_village: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu cours au-devant des lanternes. Ce sont des hommes du village, quatre, avec des fourches. Ils te cherchaient : le fermier qui loge la corvée t'a vu partir, et il a eu peur pour toi. Tu leur dis où est le prêtre. Tu leur dis qu'il dit sa messe, qu'il t'a demandé de la répondre, qu'il a un visage à faire peur. Tu le dis vite, parce que tu as eu peur, toi aussi, et que la peur s'en va quand on la donne à d'autres.",
        "Ils se regardent. Puis ils marchent vers Coat-Du, les fourches levées.",
        "Tu les suis de loin. Ils entrent dans la chapelle en criant. Tu entends des voix, des coups, une chandelle qui tombe. Puis rien. Puis les hommes ressortent. Ils ont l'air, plutôt que de vainqueurs, de gens qui ont fait quelque chose de laid sans savoir pourquoi.",
        "L'abbé Lézérec ne ressort pas. Tu attends. Au bout d'un long moment, tu vois sa haute silhouette noire sortir par la brèche du mur, à l'arrière, et s'éloigner sur la lande, vers l'ouest, vers la mer, sans se presser, sans se retourner, entre les tourbières qui luisent sous la lune comme des miroirs.",
        "Le lendemain, la chapelle de Coat-Du est vide. L'autel a été renversé, et la clochette écrasée à coups de talon sur les dalles. Personne, au village, ne parle de la nuit. La vieille qui t'avait prévenu{e} te regarde passer, et te sourit, avec une bonté épouvantable, comme on sourit à quelqu'un qui est enfin devenu de la famille."
      ],
      choices: [
        { label: "Rentrer à la grange", fx: { quest: "TR" }, back: "A3o_lannoz" }
      ] },
    TR_mari: { act: "III", title: "La messe de la lande", place: "lannoz", ambiance: "nature",
      fx: { meet: "gonidec" },
      text: [
        "Tu lui promets d'aller voir le fermier. Il te regarde avec stupeur. Puis il rit, doucement, du côté gauche. « Va, dit-il. Il te fermera la porte. Mais va. » Et il souffle les chandelles, et il disparaît par la brèche du mur avant que les lanternes arrivent.",
        "À l'aube, tu frappes à la ferme du Corbeau, une longue maison basse au bord de la tourbière, avec un toit de chaume noir et une seule fenêtre. Thomas Le Gonidec ouvre. Un homme de cinquante ans, petit, carré, gris, avec des yeux de pierre. Il te regarde. Tu lui dis qui t'envoie. Contre toute attente, il te fait entrer.",
        "Il te fait asseoir au coin du feu. Il te sert du lait. Il ne dit rien pendant longtemps. Puis il parle, en regardant le feu, d'une voix qui n'a pas beaucoup servi.",
        "« Ce soir-là, elle est rentrée de la Saint-Jean, et elle m'a dit : Thomas, parle-moi. Une seule fois. Dis-moi quelque chose, n'importe quoi, et je resterai. Je suis resté muet. Les mots, je les ai toujours cherchés sans les trouver. Elle a attendu, là, debout, à la porte. Puis elle est sortie. »",
        "Il se tait. Il boit son lait. « Le prêtre n'y est pour rien. Je le sais depuis dix ans. Je l'ai laissé brûler, parce que c'était plus facile que de le dire. Dis-lui... » Il s'arrête. Il cherche. Il ne trouve pas. Ses mains de pierre se ferment et s'ouvrent sur la table.",
        "« Dis-lui que je viendrai répondre sa messe, dit-il enfin. À la prochaine lune. Si je sais encore. »"
      ],
      choices: [
        { label: "Rentrer à la grange, porter le message à Coat-Du en passant", fx: { quest: "TR" }, back: "A3o_lannoz" }
      ] }
  },
  extras: {
    people: {
      lezerec: { name: "l'abbé Lézérec", aka: ["le prêtre brûlé"], qui: "Ancien recteur de Lannoz, au visage à moitié brûlé, interdit d'autel, qui dit la messe seul, les nuits de pleine lune, dans la chapelle sans toit de Coat-Du." },
      gonidec: { name: "Thomas Le Gonidec", aka: ["le fermier du Corbeau"], qui: "Fermier de Lannoz, veuf, dont la femme s'est noyée dans la tourbière du Corbeau il y a dix ans." }
    },
    quests: [
      { id: "TR", act: "III", kind: "annexe", title: "La messe de la lande", start: "TR_cloche", doit: "ensorcelee", echo: ["tr:sert", "tr:village", "tr:mari"] }
    ]
  }
};
