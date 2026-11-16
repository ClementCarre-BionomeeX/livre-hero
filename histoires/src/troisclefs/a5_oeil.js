// Les Trois Clefs d'Aiguemorne · act V, the eye (1/2): the lower town on the day of the Saint-Éloi. One errand:
// that at midnight there be people under the Tower, and that they keep their eyes open. The quay (hub A5o_quai): the
// old chain-maker and his bench, the journeymen locksmiths, the miners of Ferrières (friends or not), the Mourners,
// Fifrelin's gang, a patrol of the watch, the Black-Gloves if they serve the Dean.
// Shared marks: monde:a5:f_quai, monde:a5:f_compagnons, monde:a5:f_mineurs, monde:a5:f_pleureuses (who will climb),
// monde:a5:mineurs_colere (the miners come for the Syndic alone), monde:a5:chant=remonteur|ville|juge (what the
// Mourners will sing), monde:a5:clous (the children carry the word). Personal: a5:o_vu (the watch has a fresh
// description), a5:o_maison.
var MIN = { any: [{ has: "monde:mineurs:allies" }, { has: "monde:mineurs:trahis" }] };
module.exports = {
  passages: {
    A5o_aube: { act: "V", title: "Les yeux ouverts", place: "basfonds", ambiance: "ville",
      fx: { until: 8, join: "fifrelin" },
      text: [
        "Tu redescends par l'escalier des Teinturiers derrière le gamin, qui saute les marches trois par trois. Le jour se lève sur trente mille lanternes éteintes. Elles pendent aux portes, grises de suie, avec leur clef au bout du fil ; la ville a l'air d'un arbre après la fête.",
        "Les portes sont restées ouvertes. On voit les gens se lever, rallumer le feu, chercher leurs sabots. Personne n'a été volé cette nuit : c'est la seule de sept années où la maison Berlue elle-même aurait eu honte.",
        "{qui:a5:main} est sous une trousse d'horloger, sur la rampe, avec trois chiffons. {qui:a5:voix} est en chemin vers un greffe. Toi, tu as la ville basse, un gamin de onze ans, et une consigne dictée dans un torchon : qu'à minuit, il y ait du monde sous la Tour.",
        "« Du monde, il y en aura, dit Fifrelin. La cour est pleine à chaque Septaine. Seulement c'est le monde d'en haut : les robes, les métiers jurés, ceux qui ont des billets. Nous autres, on écoute d'en bas, du quai. On entend rien, on fait comme si. »",
        "« Et à minuit, que fait-on ? »",
        "Il te regarde comme si tu avais oublié ton catéchisme. « On ferme les yeux, tiens. Tout le monde. *Le Bronze ne se regarde pas, il s'écoute.* La sœur tourière nous tapait sur la tête si on trichait. » Il réfléchit. « J'ai triché une fois, à la dernière. J'avais quatre ans. J'ai vu que des gens qui fermaient les yeux. »",
        "Voilà donc l'ouvrage, et il tient en une phrase, que tu vas porter de seuil en seuil jusqu'à la nuit. *Montez ce soir. Et à minuit, quand tous baisseront la tête, gardez la vôtre levée.*",
      ],
      choices: [{ label: "Commencer par le quai", to: "A5o_quai", big: true }] },

    A5o_quai: { act: "V", title: "Le quai, le jour de la Saint-Éloi", place: "basfonds", ambiance: "ville", hub: true, backName: "le quai",
      text: [
        { first: true, text: "Le quai de la Morne, un matin de fête, c'est une rue qui a mis sa chemise propre sur ses habits de tous les jours. On ne travaille pas ; mais les forges sont tièdes de la veille, et les hommes, qui ne savent pas se tenir sans un outil, restent debout devant leurs portes à regarder leurs mains." },
        { first: true, text: "L'affiche est toujours aux murs. Tu marches dessous, dans une blouse de teinturier que Fifrelin a décrochée d'une corde, la figure passée au bleu jusqu'aux oreilles. À Aiguemorne, on ne regarde jamais un teinturier en face : cela déteint." },
        { again: true, text: "Le quai, ses forges tièdes, ses hommes debout. Les lanternes éteintes pendent aux portes ouvertes." },
        { if: { has: "a5:o_vu" }, text: "Au bout du quai, deux casaques bleues remontent en regardant les figures." },
      ],
      choices: [
        { label: "T'asseoir sur le banc du père Cubizolle", to: "A5o_cubizolle", hide: { any: [{ seen: "A5o_cub_ok" }, { seen: "A5o_cub_ko" }] } },
        { label: "Entrer chez la Mère des compagnons, d'où sort un bruit de chopes", to: "A5o_cayenne", hide: { any: [{ seen: "A5o_cay_ok" }, { seen: "A5o_cay_ko" }] } },
        { label: "Aller au quai aux Fers, chez ceux de Ferrières", if: MIN, to: "A5o_mineurs", once: true, hide: { not: MIN } },
        { label: "Pousser jusqu'au lavoir des Tanneurs", if: { has: "monde:pleureuses:alliees" }, to: "A5o_pleureuses", once: true, hide: { not: { has: "monde:pleureuses:alliees" } } },
        { label: "Suivre Fifrelin, qui veut te montrer « ses hommes »", to: "A5o_clous", once: true },
        { label: "Laisser passer midi", to: "A5o_midi", big: true },
      ] },

    // ───────────────────────────── The bench ─────────────────────────────
    A5o_cubizolle: { act: "V", title: "Onze Nuits des Clefs", place: "basfonds", ambiance: "ville",
      text: [
        "Le père Cubizolle a ressorti son banc. Il y a autour de lui les mêmes qu'hier, et quelques autres : un quai entier de vieux, en bonnet, qui tiennent conseil sur ce qu'ils ne décident pas.",
        "On parle encore du *pour toujours*. On en parle moins fort que la veille. Le jour, les idées qui venaient toutes seules à la lanterne ont peur de leur ombre.",
        "« Après tout, dit un cloutier, si le Bronze le veut. Il sait mieux que nous. Il a toujours su. »",
        "« Il a su pour l'hospice », dit une femme.",
        "« Il a su pour le denier des serrures. Il a su pour le pain à deux sous, la quatrième Septaine : mon père en parlait. » Le cloutier s'anime. « C'est drôle, tout de même. Un juge que ceux d'en haut ont bâti, que ceux d'en haut remontent, et qui depuis quarante ans leur donne tort une fois sur deux. On dirait qu'il nous a à la bonne. »",
        "« Raison de plus pour pas le regarder de travers », conclut quelqu'un. Et l'on se tait, satisfait d'avoir conclu.",
        "Le vieux chaînetier n'a rien dit. Il mâche sa chique. Il t'a vu{e} t'asseoir au bout du banc, dans ta blouse bleue, et son œil s'est arrêté sur tes mains, qui ne sont pas des mains de teinturier.",
      ],
      choices: [
        { label: "Dire, sans lever la voix : « Un juge qui vous a à la bonne, et qui vous nomme un maître pour toujours. Vous ne trouvez pas qu'il a changé de caractère ? »",
          test: { dom: "social", diff: 10, label: "Faire penser un banc", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { voie: "rebouteux" }, v: 10 }, { if: { has: "sentence:connue" }, v: 5 }, { if: { has: "juge:verite" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:f_quai", ep: ["perso", 1200] }, to: "A5o_cub_ok" }, lose: { to: "A5o_cub_ko" } },
        { label: "Leur parler du Remonteur : de ce qu'un homme graisse pendant quarante ans, et de ce qu'on lui a fait la veille du jour où il allait parler",
          test: { dom: "savoir", diff: 10, label: "Raconter un mort à ceux qui l'ont connu", help: [{ if: { has: "remonteur:verite" }, v: 15 }, { if: { voie: "crocheteur" }, v: 5 }, { if: { voie: "alchimiste" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:f_quai", ep: ["perso", 1200] }, to: "A5o_cub_ok" }, lose: { to: "A5o_cub_ko" } },
      ] },

    A5o_cub_ok: { act: "V", title: "Tricher une fois", place: "basfonds", ambiance: "ville",
      text: [
        "Cela tombe dans le banc comme une pierre dans une mare. Il y a un rond, puis un autre.",
        "« Changé de caractère », répète le cloutier, lentement.",
        "« Un homme change, dit la femme. Mon défunt avait changé. Mais c'était la boisson. »",
        "Le père Cubizolle crache sa chique. Il se lève, ce qui lui prend du temps, et tout le banc se tait, parce qu'il a vu onze Nuits des Clefs.",
        "« Je vais vous dire une chose que j'ai jamais dite. À ma troisième, j'avais vingt ans, j'étais monté dans la cour avec mon patron. À minuit, j'ai pas fermé les yeux. Par bravade. » Il regarde la Tour, là-haut, en face, sans les baisser. « J'ai vu le cadran bouger. Ça s'est fendu par le milieu, comme une porte de grange, et il y avait du noir derrière. J'ai eu si peur que j'ai refermé tout de suite. J'en ai jamais parlé : on m'aurait pris pour un menteur ou pour un impie, et dans mon état on a besoin de pratiques. »",
        "Il se tourne vers toi. Il te parle, à toi seul{e}, par-dessus les bonnets.",
        "« Je sais pas qui tu es sous ton bleu, et je veux pas le savoir. Mais j'ai quatre-vingts ans, j'ai plus de pratiques à perdre, et j'aimerais bien voir, avant de mourir, ce qu'il y a dans ce noir-là. » Il frappe son banc du plat de la main. « Ce soir, le quai monte. Tout le quai. Avec les lanternes. Et celui qui ferme les yeux à minuit, je lui retire mon salut. »",
        "Dans les Bas-Fonds, le salut du père Cubizolle vaut une lettre de change. Avant midi, la phrase a fait trois rues.",
      ],
      choices: [{ back: "A5o_quai" }] },

    A5o_cub_ko: { act: "V", title: "Un teinturier qui cause", place: "basfonds", ambiance: "ville",
      text: [
        "Tu le dis un ton trop haut, ou avec des mots qui ne sont pas du quai. Les bonnets se tournent vers toi. On ne te connaît pas ; et un inconnu qui médit du Bronze le jour de la Saint-Éloi, cela sent le guet ou le prêcheur.",
        "« De quelle cuve tu sors, toi ? » demande le cloutier.",
        "« De chez Barthomieu », souffle Fifrelin derrière ton épaule. Tu le répètes. On hoche la tête ; on ne te croit qu'à moitié.",
        "Le père Cubizolle te regarde longuement, en mâchant. « Il a peut-être pas tort, le bleu, dit-il enfin. Mais il a tort de le dire là. Va-t'en, petit. On pensera ce qu'on voudra quand tu seras parti. »",
        "Le banc pensera, peut-être. Il ne montera pas : il écoutera du quai, les yeux fermés, comme il a fait onze fois.",
      ],
      choices: [{ back: "A5o_quai" }] },

    // ───────────────────────────── The journeymen ─────────────────────────────
    A5o_cayenne: { act: "V", title: "Chez la Mère", place: "basfonds", ambiance: "taverne",
      text: [
        "Les compagnons serruriers logent chez *la Mère*, une auberge à leur usage où l'on n'entre qu'en disant son nom de Devoir. Le gamin dit le sien, qu'il a inventé, avec un aplomb si grand que le rouleur le laisse passer et toi derrière.",
        "La salle est basse, enfumée, pleine de garçons de vingt ans en veste courte, leurs cannes à rubans pendues au mur. Ce sont eux qui font les serrures d'Aiguemorne ; les Maîtres les signent. Ils ont un tour de pays à finir, un chef-d'œuvre à présenter, et pour la plupart aucune chance d'être reçus maîtres un jour, parce que les maîtrises se vendent, et que c'est le Syndic qui tient le prix.",
        "Celui qui parle, debout sur un banc, est un grand rouquin qu'on appelle Va-de-Bon-Cœur. C'est le Premier en ville.",
        "« …et l'on nous dit : ce soir, vous porterez les torches. Bien. Nous les avons toujours portées. Mais on nous dit aussi que le nouveau Gouverneur sera le gendre de l'homme qui nous vend nos maîtrises, et qu'il le sera *à vie*, et après lui celui qu'il choisira ! Je demande au pays : quel compagnon de cette salle sera maître, dans une ville où le même homme fait les prix et les lois, sans qu'on le recompte jamais ? »",
        "Il y a un grondement. Il est d'accord, et il n'ira pas plus loin : ces garçons ont des cannes, des rubans, des chansons, et le respect de tout ce qui est écrit. Va-de-Bon-Cœur le sent. Il se rassoit, la bouche amère.",
        "« On portera les torches, dit-il. Comme des chandeliers. »",
      ],
      choices: [
        { label: "Lui dire à l'oreille ce qui est gravé depuis octobre sur une cloche, à Ferrières",
          test: { dom: "savoir", diff: 5, label: "Donner une date à un homme en colère", help: [{ if: { has: "sentence:connue" }, v: 15 }, { if: { seen: "A5c_bas_cubizolle" }, v: 5 }, { if: { voie: "crocheteur" }, v: 10 }] },
          win: { fx: { flag: "monde:a5:f_compagnons", ep: ["perso", 1200] }, to: "A5o_cay_ok" }, lose: { to: "A5o_cay_ko" } },
        { label: "Monter sur le banc à ton tour : « Un chandelier, cela éclaire. Ce soir, tournez vos torches vers le cadran. »",
          test: { dom: "social", diff: 10, label: "Parler debout dans une salle de compagnons", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { voie: "bretteur" }, v: 5 }, { if: { voie: "crocheteur" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:f_compagnons", ep: ["perso", 1200] }, to: "A5o_cay_ok" }, lose: { to: "A5o_cay_ko" } },
      ] },

    A5o_cay_ok: { act: "V", title: "Deux cents torches", place: "basfonds", ambiance: "taverne",
      text: [
        "Va-de-Bon-Cœur t'écoute, d'abord de côté, puis de face. À mesure, ses taches de rousseur ressortent sur une figure qui blanchit.",
        "« En octobre », dit-il.",
        "Il remonte sur le banc. Il n'a plus sa voix de discours ; il a celle d'un ouvrier qui lit une cote fausse sur un plan.",
        "« Pays. Le Bronze parle à la Saint-Éloi. Il n'a jamais rien dit avant. C'est toute sa vertu : personne ne sait, on l'apprend ensemble. Or il y a une cloche, à Ferrières, coulée à la Saint-Luc, où le nom du Gouverneur est fondu en toutes lettres, avec *perpétuel* et *an premier*. Ou bien le fondeur est prophète, ou bien la Sentence de ce soir était écrite il y a deux mois, par quelqu'un qui paie des cloches. »",
        "Cette fois, le grondement va plus loin. Un banc tombe.",
        "« On porte les torches ! crie le Premier. On les porte comme on nous l'a commandé, en rang, deux cents, jusque dans la cour. Mais à minuit, pays, quand tous ces bourgeois fermeront les yeux, nous lèverons le bras. Deux cents torches sur ce cadran. Si le Juge a quelque chose à dire, il le dira en pleine lumière ; et s'il y a derrière lui quelqu'un qui souffle, on verra la main. »",
        "Ils décrochent leurs cannes. Ils chantent déjà. La Mère, au comptoir, s'essuie les yeux avec son tablier et marque les chopes au compte de la société.",
      ],
      choices: [{ back: "A5o_quai" }] },

    A5o_cay_ko: { act: "V", title: "Le Devoir", place: "basfonds", ambiance: "taverne",
      text: [
        "Tu parles. La salle t'écoute poliment, comme on écoute un passant.",
        "« Ton nom de Devoir ? » demande un ancien, quand tu as fini.",
        "Tu n'en as pas. Le gamin en souffle un, trop tard, et qui est celui d'un charpentier.",
        "« Il n'est pas du pays », dit l'ancien, sans méchanceté. Il se tourne vers les autres. « Ce qu'il raconte est peut-être vrai. Mais un compagnon ne marche pas sur la parole d'un étranger sans couleurs. C'est la règle. On portera les torches, comme c'est écrit, et l'on verra. »",
        "Va-de-Bon-Cœur te raccompagne à la porte. Il a l'air d'un homme à qui l'on a montré une clef en lui défendant de l'essayer. « Je te crois, moi, dit-il tout bas. Je lèverai la mienne. Une torche. C'est peu. »",
      ],
      choices: [{ back: "A5o_quai" }] },

    // ───────────────────────────── The miners ─────────────────────────────
    A5o_mineurs: { act: "V", title: "Un feu de houille", place: "basfonds", ambiance: "ville",
      branch: [
        { if: { has: "monde:mineurs:allies" }, fx: { flag: "monde:a5:f_mineurs" }, to: "A5o_min_allies" },
        { to: "A5o_min_trahis" },
      ] },

    A5o_min_allies: { act: "V", title: "Trente voix qui portent", place: "basfonds", ambiance: "ville",
      fx: { meet: "zenobie", ep: ["perso", 800] },
      text: [
        "Ils ont dormi autour de leur feu, roulés dans leurs sarraus, à même le quai. Zénobie la Grise ne paraît pas avoir dormi. Elle compte les étages de la ville, encore, comme on compte les cadres d'un puits.",
        "« Je me demandais par où ça tient, dit-elle sans te saluer. Chez nous, c'est simple : il y a le fond, il y a le jour, et entre les deux une cage. Ici, vous avez mis les gens par couches, et chaque couche croit qu'elle porte celle du dessus par plaisir. »",
        "Tu lui dis ce que tu es venu{e} dire. *Montez ce soir. Gardez les yeux ouverts.*",
        "« On monte. On est venus pour ça. » Elle tire de son sarrau un papier plié en huit, sali à tous les plis : la troisième Cause, recopiée par le maître d'école du Crassier. « *Les jetons de l'Économat sont-ils une monnaie ?* Onze ans qu'on la pose. On veut l'entendre de sa bouche. Si c'est non, on rentre, et on a du pain. Si c'est oui… » Elle replie le papier. « Si c'est oui, on rentre aussi. Mais on aura entendu, et on saura à quoi s'en tenir sur les juges. »",
        "Tu hésites. Tu sais, toi, ce qui attend cette Cause dans la bouche du Bronze, si rien ne change là-haut.",
        "Elle a vu l'hésitation. Elle a passé sa vie à lire des plafonds qui vont tomber.",
        "« Tu sais quelque chose. Ne me le dis pas : je le dirais aux hommes, et j'ai besoin qu'ils montent calmes. » Elle se lève. « Dis-moi seulement où il faut être. »",
        "« Au pied de la Tour. Du côté du cadran. »",
        "« On y sera. Trente, en rang, la lampe au front. Et s'il faut crier, ne t'inquiète pas de savoir si l'on nous entendra de là-haut. On s'est fait entendre de sept cents pieds sous terre. »",
      ],
      choices: [{ back: "A5o_quai" }] },

    A5o_min_trahis: { act: "V", title: "Le prix d'Anselme", place: "basfonds", ambiance: "ville",
      fx: { meet: "zenobie" },
      text: [
        "Ils te voient venir. Ils se lèvent, les uns après les autres, sans hâte, et ils font autour de leur feu ce qu'ils font au fond d'une taille quand le toit craque : ils se mettent dos à dos.",
        "Zénobie la Grise sort du cercle. Elle a les mains dans les poches de son sarrau.",
        "« Tu as du front. » Elle te regarde sous le bleu, sans effort. « À Ferrières, tu nous as fait un beau discours sur la grève, et puis les casaques ont su l'heure. On a eu deux blessés. On a eu le père Anselme, qui était aveugle, qui ne pouvait pas courir, et qu'un cheval a pris dans la rue de l'Économat. Je l'ai porté jusque chez lui. Il ne pesait rien. »",
        "Derrière elle, trente hommes ne disent pas un mot.",
        "« Je ne suis pas venue pour toi. Je suis venue entendre une Cause. Mais puisque tu es là, dis ce que tu as à dire, et dis-le court. »",
      ],
      choices: [
        { label: "Ne rien plaider. Poser cent écus sur le quai, pour la maison d'Anselme, et dire seulement où il faut être ce soir",
          if: { gold: { min: 2000 } }, why: "Il te faudrait cent écus.", fx: { gold: -2000, flag: "monde:a5:f_mineurs", ep: ["perso", 1000] }, to: "A5o_min_tr_ok" },
        { label: "Dire la vérité : que vous avez vendu leur heure pour une clef, et ce que cette clef ouvre",
          test: { dom: "social", diff: 15, label: "Avouer à trente hommes", help: [{ if: { has: "juge:verite" }, v: 10 }, { if: { voie: "rebouteux" }, v: 10 }, { if: { voie: "comedien" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:f_mineurs", ep: ["perso", 1500] }, to: "A5o_min_tr_ok" }, lose: { fx: { flag: "monde:a5:mineurs_colere" }, to: "A5o_min_tr_ko" } },
        { label: "Te retirer : il y a des dettes que l'on n'acquitte pas en un matin", fx: { flag: "monde:a5:mineurs_colere" }, to: "A5o_min_tr_ko" },
      ] },

    A5o_min_tr_ok: { act: "V", title: "On ne fait pas le tour", place: "basfonds", ambiance: "ville",
      text: [
        "Elle ne te remercie pas. Elle ne te pardonne pas non plus : ce n'est pas un mot de son pays, où l'on dit seulement d'un boisage qu'il tient ou qu'il ne tient pas.",
        "« Ça ne rend pas Anselme », dit-elle.",
        "« Non. »",
        "« Bon. Tu le sais. C'est déjà plus que le Syndic. » Elle se tourne à demi vers les hommes. Quelque chose passe entre eux et elle, sans paroles, comme passe au fond le signal de remonter. Le cercle se défait. Ils se rassoient.",
        "« Au pied de la Tour, du côté du cadran. Les yeux ouverts. » Elle répète ta consigne comme une cote. « On y sera, parce que c'est là qu'on entend le mieux, et pas pour te faire plaisir. Si ce que tu dis est vrai, on le verra. Si c'est encore une de tes manœuvres, on sera trente à l'avoir vue, et la route de Ferrières passe devant ta maison. »",
        "Un vieux crache dans le feu. Personne ne t'offre de soupe. Mais quand tu t'en vas, personne non plus ne te suit des yeux, et tu comprends que c'est, pour aujourd'hui, toute la paix que tu pouvais acheter.",
      ],
      choices: [{ back: "A5o_quai" }] },

    A5o_min_tr_ko: { act: "V", title: "Trente dos", place: "basfonds", ambiance: "ville",
      text: [
        "Elle t'écoute jusqu'au bout, ce qui est sa manière d'être juste. Puis elle secoue la tête.",
        "« Des clefs. Un juge. Vos affaires de ville. » Elle retourne vers le feu. « Nous, on avait une heure, et tu l'as vendue. Ce que tu en as fait ensuite, c'est entre toi et ceux d'ici. »",
        "Les trente hommes se sont rassis. Ils te tournent le dos, tous, d'un seul mouvement, comme une porte qui se ferme.",
        "« On sera sous la Tour ce soir, dit-elle encore, sans se retourner. Pour le Syndic. Quand il redescendra, il nous trouvera en bas de son escalier, et on lui demandera ce que vaut un jeton. Si tu es sur le chemin, range-toi. On ne fera pas le tour. »",
      ],
      choices: [{ back: "A5o_quai" }] },

    // ───────────────────────────── The Mourners ─────────────────────────────
    A5o_pleureuses: { act: "V", title: "Qui l'on pleure", place: "basfonds", ambiance: "eau",
      fx: { meet: "scholastique", flag: "monde:a5:f_pleureuses" },
      text: [
        "Au lavoir des Tanneurs, on a tendu des cordes, et quarante voiles de crêpe sèchent au-dessus de l'eau, repassés de la veille. Dame Scholastique Onfroy inspecte les mains, rang par rang : une pleureuse d'Ossevaux a les ongles nets et pas une bague.",
        "Elle vient à toi, son carnet ouvert.",
        "« Vous êtes à l'heure. C'est rare, dans votre métier. » Elle lèche son crayon. « Je vous ai dit hier qu'il me fallait un sujet. Je monte ce soir avec quarante gorges et un permis pour *le deuil du Juge, si la Sentence déplaît.* On ne m'a pas précisé à qui elle devait déplaire. C'est une lacune du contrat, et je compte m'y loger. »",
        "Elle baisse la voix. De près, elle sent l'amidon et l'eau de mélisse.",
        "« Seulement, mon enfant, on ne pleure pas en l'air. Il faut un nom, ou du moins une figure. Une foule, cela se mène comme un convoi : si la tête ne sait pas qui est dans la bière, la queue rentre chez elle. Dites-moi qui l'on pleure à minuit, et je vous réponds de la place. »",
        "Tu réfléchis. C'est une décision de métier, et elle te la laisse.",
      ],
      choices: [
        { label: "« Le Remonteur. Un vieil homme que cette ville a laissé tuer, et pour qui personne n'a chanté. »", fx: { set: { "monde:a5:chant": "remonteur" }, ep: ["perso", 800] }, to: "A5o_pl_remonteur" },
        { label: "« La ville. Trente mille personnes qui ferment les yeux tous les sept ans. »", fx: { set: { "monde:a5:chant": "ville" }, ep: ["perso", 800] }, to: "A5o_pl_ville" },
        { label: "« Le Juge. Chantez-le comme on chante quelqu'un qui a servi très longtemps, et à qui l'on n'a jamais dit merci. »", fx: { set: { "monde:a5:chant": "juge" }, ep: ["perso", 800] }, to: "A5o_pl_juge" },
      ] },

    A5o_pl_remonteur: { act: "V", title: "Un office pour un graisseur", place: "basfonds", ambiance: "eau",
      text: [
        "Elle note. *Balancier, Symphorien, Remonteur. Mort sans office.*",
        "« Je l'ai veillé, celui-là. À Ossevaux, le soir de la Toussaint ; ou plutôt l'une des vôtres l'a veillé pour moi, et fort bien. Un petit vieux, des doigts noirs. Personne ne l'a réclamé. » Elle referme le carnet. « C'est un bon sujet. Une ville aime qu'on lui rappelle ses morts quand elle a quelque chose à se reprocher : cela lui tient lieu de repentir, et c'est moins cher. »",
        "Elle se tourne vers ses rangs, frappe dans ses mains.",
        "« Mesdames ! Ce soir, grand deuil d'artisan. Le *De profundis* en faux-bourdon, et après chaque verset, le nom, sur la tierce. *Sym-pho-rien.* Trois syllabes, cela se chante très bien. Je veux qu'à minuit, il n'y ait pas un bourgeois sur cette place qui ne l'ait dans l'oreille. »",
        "Quarante voix l'essaient, à bouche fermée. Le nom du vieil homme monte du lavoir et s'en va sur la rivière, par-dessus les barques.",
      ],
      choices: [{ back: "A5o_quai" }] },

    A5o_pl_ville: { act: "V", title: "Le deuil de soi", place: "basfonds", ambiance: "eau",
      text: [
        "Elle lève son face-à-main et te regarde au travers, longuement.",
        "« C'est hardi. On ne m'avait jamais commandé le deuil des vivants. » Elle note. « Cela se fait, remarquez. Il y a un office pour cela, très ancien, que l'on chantait à Ossevaux pendant les pestes : le *Miserere* des Portes. On le chante tourné vers la foule, et non vers l'autel. Les gens n'aiment pas. Ils restent. »",
        "Elle frappe dans ses mains.",
        "« Mesdames ! Ce soir, le *Miserere* des Portes. Vous regarderez les gens. Dans les yeux. Vous pleurerez *sur eux*, un par un, comme sur un proche dont on vient d'apprendre la maladie. Je ne veux pas de sanglots : je veux de la compassion, c'est beaucoup plus difficile à supporter. »",
        "Elle revient à toi.",
        "« Je vous préviens du résultat. Une foule que l'on plaint ne ferme pas les yeux. Elle veut savoir de quoi elle est malade. »",
      ],
      choices: [{ back: "A5o_quai" }] },

    A5o_pl_juge: { act: "V", title: "Quelqu'un qui a servi", place: "basfonds", ambiance: "eau",
      text: [
        "Son crayon s'arrête.",
        "« Quelqu'un. » Elle a relevé le mot. « Vous dites *quelqu'un* d'une machine. »",
        "Tu ne réponds rien. Elle n'insiste pas : on ne mène pas vingt ans la Maison des Larmes sans apprendre ce qu'un client garde pour lui.",
        "« À Ossevaux, dit-elle seulement, il y a un clos, derrière la cathédrale, avec sept dalles sans nom. Mes filles n'y sont jamais commandées. On m'a toujours dit que ces mortes-là n'avaient besoin de personne. J'ai toujours pensé que c'était une drôle de chose à dire d'une morte. »",
        "Elle note, très lentement. *Office des Fidèles Serviteurs. Sans nom. Voix de femmes seules.*",
        "« Mesdames ! Ce soir, l'office des Serviteurs. Celui que l'on chante pour les vieux domestiques, les nourrices, les sacristains, pour tous ceux qui ont fait marcher une maison pendant que les maîtres signaient. Pas de nom. On dit *celle qui*, *celui qui*. Et à la fin, le remerciement, tout doucement. » Elle te regarde. « Il n'y a rien qui trouble davantage une assemblée que d'entendre remercier quelqu'un qu'elle ne savait pas devoir. »",
      ],
      choices: [{ back: "A5o_quai" }] },

    // ───────────────────────────── Fifrelin's gang ─────────────────────────────
    A5o_clous: { act: "V", title: "Les Clous", place: "basfonds", ambiance: "ville",
      fx: { flag: "monde:a5:clous", ep: ["perso", 800] },
      text: [
        "Ses hommes ont entre six et douze ans. Ils sont une vingtaine, dans la cour d'une tannerie abandonnée, assis sur des peaux, et ils se lèvent quand il entre. Il en est très fier. Il tâche de ne pas le montrer.",
        "« Les Clous, dit-il. Parce qu'on est petits et qu'on tient tout. C'est moi qui ai trouvé. »",
        "Ce sont les enfants du quai : apprentis qu'on bat, vendeurs d'allumettes, trois ou quatre évadés de l'hospice, qui portent encore au cou leur clef à numéro. Ils savent toutes les cours, tous les soupiraux, l'heure de toutes les rondes. Depuis six semaines, ils tiennent la maison Berlue à eux seuls, sans que personne le leur ait demandé : ils montent la soupe aux Plombs, ils surveillent les scellés, ils ont pendu la lanterne.",
        "« C'était vous, la lanterne ? »",
        "« Non, dit une petite, très vite. C'est une dame avec des gants. Nous on l'a rependue quand le guet l'a ôtée. Quatre fois. »",
        "Fifrelin monte sur une cuve.",
        "« Écoutez voir. Ce soir, on a de l'ouvrage. Vous prenez chacun une rue. Vous entrez partout, les portes sont ouvertes, et vous dites aux gens : *la Douairière fait dire de monter, et de pas fermer les yeux.* Vous dites pas pourquoi. Vous le savez pas. Moi non plus. »",
        "« Et si on nous demande qui c'est, la Douairière ? » dit un tout petit.",
        "Il y a un silence scandalisé. Vingt têtes se tournent vers lui.",
        "« Tu dis : *celle qui vous a prêté quand le Syndic voulait pas.* Ils sauront. »",
        "Ils partent comme une poignée de pois qu'on jette. Fifrelin redescend de sa cuve. « Ça fera pas des soldats, dit-il. Mais ça fera du bruit dans les escaliers. »",
      ],
      choices: [{ back: "A5o_quai" }] },

    // ───────────────────────────── Noon: the watch, and the gloves ─────────────────────────────
    A5o_midi: { act: "V", title: "Deux casaques bleues", place: "basfonds", ambiance: "ville",
      fx: { until: 13 },
      text: [
        "Midi sonne à quarante cadrans, sur la place aux Heures, et pendant un quart d'heure la ville entière est en désaccord avec elle-même.",
        "C'est à ce moment qu'ils tournent le coin : un sergent du guet, deux hommes, et l'affiche. Ils remontent le quai maison par maison. Ils entrent dans les cours. Ils font ôter les bonnets.",
        { if: { has: "monde:a5:loi" }, text: "Le prévôt avait dit : *je vous cherche très activement, dans la ville basse.* Il tient parole. Seulement ses hommes ne savent pas qu'il cherche pour ne pas trouver ; et ceux-ci cherchent bien." },
        "Ils sont à vingt pas. Derrière toi, le quai finit sur l'eau. À ta gauche, une gouttière. À ta droite, une porte ouverte, comme toutes les portes, avec une vieille femme sur le seuil, qui écosse des pois.",
        "« Par les toits », souffle Fifrelin.",
        "La vieille femme a levé les yeux. Elle regarde le sergent, puis ta blouse bleue, puis l'affiche. Elle se pousse un peu sur son seuil.",
      ],
      choices: [
        { label: "La gouttière",
          test: { dom: "nature", diff: 10, label: "Monter trois étages devant le guet", help: [{ if: { voie: "coureur" }, v: 20 }, { if: { item: "corde" }, v: 5 }, { if: { voie: "bretteur" }, v: 5 }] },
          win: { fx: { ep: ["perso", 1000] }, to: "A5o_midi_toits" }, lose: { fx: { flag: "a5:o_vu", pv: -3 }, to: "A5o_midi_ko" } },
        { label: "La porte ouverte", fx: { flag: "a5:o_maison", ep: ["perso", 1000] }, to: "A5o_midi_maison" },
      ] },

    A5o_midi_toits: { act: "V", title: "Par le dessus", place: "basfonds", ambiance: "ville",
      text: [
        "La gouttière est de plomb, tiède de soleil, et elle tient. Tu es au premier avant que le sergent ait levé la tête, au second quand il la lève, et sur les tuiles au moment où il se demande s'il a vu passer un teinturier ou un chat.",
        "Fifrelin est déjà là-haut. Il ne monte pas par les gouttières : il a des chemins à lui, par l'intérieur des maisons, où il traverse les cuisines en disant bonjour.",
        "Du faîte, on voit le quai tout entier, et les trois casaques qui entrent dans la cour d'en face. On voit aussi autre chose. Sur les toits de la rive haute, de cheminée en cheminée, il y a ce matin des silhouettes qui n'y sont pas d'ordinaire : des hommes couchés, patients, vêtus de gris.",
        { if: { has: "monde:douce:alliee" }, text: "L'un d'eux lève deux doigts gantés de noir, sans se retourner. Les gens de Sans-Bruit prennent leurs postes. Ils ont huit heures d'avance sur la nuit ; c'est leur façon d'être à l'heure." },
        { if: { has: "monde:douce:doyen" }, text: "Ils ont des gants noirs. Ils ne te font aucun signe. Ils regardent tous du même côté : vers la citadelle, vers le toit de plomb du corps de garde, par où il faudra bien que quelqu'un passe cette nuit." },
        "Tu redescends plus loin, par une lucarne, dans une rue où personne ne te cherche encore.",
      ],
      choices: [{ label: "L'après-midi", to: "A5o_gants", big: true }] },

    A5o_midi_ko: { act: "V", title: "Un teinturier sur un toit", place: "basfonds", ambiance: "ville",
      text: [
        "La gouttière tient. C'est le collier du second étage qui lâche. Tu restes pendu{e} par une main, les pieds battant le mur, à la vue de tout un quai, pendant le temps qu'il faut au sergent pour dire « Hé ! là-haut ! » et à ses deux hommes pour courir.",
        "Tu te rétablis. Tu passes le chéneau à plat ventre, tu t'écorches à une tuile, tu cours sur le faîte. En bas, on siffle. On siffle longtemps. Une blouse bleue, un teinturier qui grimpe comme un couvreur : ce soir, toutes les rondes de la ville basse auront cela dans l'oreille.",
        "Fifrelin te rattrape trois toits plus loin. Il a ôté sa veste, et il te la jette. « Enlève ton bleu. Ils cherchent un bleu. » Il crache. « Et frotte-toi la figure, t'as l'air d'une prune. »",
      ],
      choices: [{ label: "L'après-midi", to: "A5o_gants", big: true }] },

    A5o_midi_maison: { act: "V", title: "La mère Toinon", place: "basfonds", ambiance: "ville",
      text: [
        "Tu entres. La vieille femme ne se retourne pas ; elle continue d'écosser, sur son seuil, entre le guet et toi. Elle dit seulement, sans remuer les lèvres : « Au fond. L'alcôve. Tire le rideau. »",
        "C'est une pièce unique, propre, pauvre. Un établi de cloutière près de la fenêtre. Trois chaises. Au fond, une alcôve, un lit haut, un rideau d'indienne. Tu t'y glisses avec Fifrelin, qui se roule en boule à tes pieds comme un chien.",
        "Par la fente du rideau, tu vois le sergent s'arrêter devant la porte.",
        "« On cherche trois particuliers, la mère. Vous avez l'affiche. »",
        "« Je l'ai sous ma lanterne. Je sais pas lire. »",
        "« Il faut qu'on voie chez vous. »",
        "« Voyez. C'est ouvert, c'est la fête. » Elle n'a pas bougé de son seuil ; il faudrait l'enjamber. « Seulement j'ai mon homme dans l'alcôve, qui passe, depuis mardi. Le prêtre est venu ce matin. Si vous voulez tirer le rideau sur un mourant, le jour de la Saint-Éloi, tirez. Moi, à votre place, j'aurais peur que ça me porte quelque chose. »",
        "Le sergent regarde le rideau. Il regarde la lanterne, au-dessus de sa tête, avec la clef de la maison dedans. Il se signe, et il passe.",
        "La mère Toinon finit ses pois. Quand le quai est vide, elle rentre, tire le rideau elle-même, et te regarde, assis{e} sur son lit, avec ta figure bleue.",
        "« Mon homme est mort il y a neuf ans, dit-elle. Aux Plombs. Pour quatorze écus. C'est la Berlue qui a payé le cercueil. » Elle retourne à ses pois. « File. Et dis-lui que ce soir, je monte. »",
      ],
      choices: [{ label: "L'après-midi", to: "A5o_gants", big: true }] },

    A5o_gants: { act: "V", title: "Ceux qui regardent du même côté", place: "basfonds", ambiance: "ville",
      branch: [
        { if: { has: "monde:douce:doyen" }, to: "A5o_gants_doyen" },
        { to: "A5o_plombs_reco" },
      ] },

    A5o_gants_doyen: { act: "V", title: "La venelle des Chaînes", place: "basfonds", ambiance: "ville",
      text: [
        "Tu remontes vers la citadelle par la venelle des Chaînes, où l'on marche de profil. C'est là qu'ils t'attendent. Deux, un devant, un derrière ; ils sont descendus des toits sans un bruit, comme tombe la suie.",
        "Ils ont des foulards jusqu'au nez et des gants noirs. Tu en connais un : il avait une scie, à Brandelis.",
        "« Sans-Bruit fait dire, commence celui de devant, que Monseigneur d'Ossevaux paie cent écus par figure, et qu'il les veut entières. Il a trois chambres blanches, à l'évêché, qui vous attendent depuis la Toussaint. » Il fait un pas. « Elle fait dire aussi que ce n'est pas contre vous. C'est contre un clou. Elle a dit que vous comprendriez. »",
        "Tu comprends. Il y a à Ossevaux un cercueil à clochette dont on l'a laissée sortir seule.",
        "Fifrelin a disparu. Tu ne l'as pas vu partir.",
      ],
      choices: [
        { label: "Dégainer : la venelle est étroite, ils n'y passeront qu'un par un",
          fight: { title: "La venelle des Chaînes", enemies: [{ id: "gant_noir", n: 2 }], win: { fx: { ep: ["perso", 1500] }, to: "A5o_gants_bat" }, lose: { fx: { pv: 2, flag: "a5:o_vu" }, to: "A5o_gants_perd" } } },
      ] },

    A5o_gants_bat: { act: "V", title: "Un gant par terre", place: "basfonds", ambiance: "ville",
      text: [
        "Dans une venelle où l'on marche de profil, deux hommes ne valent jamais qu'un homme et demi. Le premier recule sur le second. Le second glisse. Quand ils se relèvent, il y en a un qui se tient le poignet, et l'autre qui a perdu son foulard.",
        "Ils s'en vont par où ils sont venus : par le haut. Il reste sur le pavé un gant noir, retourné comme une peau de lapin.",
        "Fifrelin reparaît au bout de la venelle, avec six Clous armés de frondes, essoufflés, déçus d'arriver après. « J'étais allé chercher du monde, dit-il. T'aurais pu attendre. »",
        "Tu ramasses le gant. Il est en chevreau très fin, cousu à points perdus : de l'ouvrage de la rue des Ferronniers, payé avec de l'argent d'évêque.",
      ],
      choices: [{ label: "Reprendre la montée", to: "A5o_plombs_reco", big: true }] },

    A5o_gants_perd: { act: "V", title: "Vingt frondes", place: "basfonds", ambiance: "ville",
      text: [
        "Ils sont deux, ils sont frais, et ils ont le métier. Tu es à genoux, un bras tordu dans le dos, quand il commence à grêler.",
        "Ce sont des clous. De vrais clous de charpente, lancés à la fronde, du haut des deux murs, par vingt petites mains qui ne manquent pas un pigeon à trente pas. L'homme qui te tient reçoit le premier sur l'oreille. Il jure. Il lâche.",
        "« Les Clous ! Les Clous ! » On entend courir sur les tuiles. La grêle redouble. Les deux Gants-Noirs remontent par leur corde, la tête dans les épaules, avec moins de dignité qu'ils n'en avaient mis à descendre.",
        "Fifrelin saute du mur. « Cent écus par figure, dit-il, vexé. Ils m'ont même pas compté. »",
        "Tu te relèves. Tu as l'épaule démise à moitié et une côte qui parle. Les Gants-Noirs savent à présent par où tu montes.",
      ],
      choices: [{ label: "Reprendre la montée, par un autre chemin", to: "A5o_plombs_reco", big: true }] },
  },
  extras: {},
};
