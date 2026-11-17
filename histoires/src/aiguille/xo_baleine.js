// L'Île Folle-Aiguille · side story « La baleinière » (owes its question to Moby-Dick: what becomes of a man who hunts one
// thing for too long, and of those who row for him?). Act III, in the Sargasso calms. A whaler from Kerverzot, the
// Constance, lies becalmed a cable away; her captain, Corentin Le Moal, has been after one grey-headed sperm whale for
// eleven years. The child rows in a whaleboat for a share of oil, and may cut the line that drags a man under
// (xo:ligne_coupee, xo:homme_perdu), and bring back a lump of ambergris (item ambre_gris). The doctor is called aboard
// for the captain, who no longer sleeps; the mate asks her to declare him unfit (xo:certifie, xo:refuse, xo:dort).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child
    XO_m_debut: { act: "III", title: "La Constance", place: "sargues", ambiance: "mer",
      fx: { meet: "lemoal" },
      text: [
        "Un matin, dans la brume des herbes, une voile. Un navire, encalminé comme vous, à une encablure, qui n'était pas là la veille au soir et que la nuit a apporté on ne sait comment. Un trois-mâts trapu, ventru, noirci de suie, avec sur le pont deux grands chaudrons de brique et, pendues aux bossoirs, cinq longues embarcations pointues aux deux bouts. Une odeur l'accompagne, que le moindre souffle porte jusqu'à la Cormorane : l'huile rance, la graisse brûlée, le poisson pourri, et quelque chose de plus profond, de plus animal, qui colle à la gorge.",
        "« Un baleinier, dit Gobert en crachant. On le sentirait à trois lieues dans le noir. »",
        "La *Constance*, de Kerverzot. Son capitaine vient à bord dans l'après-midi, dans une de ses embarcations, pour échanger des nouvelles et du tabac contre de l'eau douce, dont il manque. C'est un homme d'une soixantaine d'années, maigre, voûté, aux mains brûlées jusqu'aux poignets par les lignes, avec des yeux d'un gris si pâle qu'ils semblent délavés par trop de mer. Il s'appelle Corentin Le Moal. Il parle peu, poliment, d'une voix basse. Il ne regarde jamais son interlocuteur. Il regarde la mer, par-dessus son épaule, sans arrêt, comme on surveille une porte.",
        "Il propose un marché à la capitaine Ribaud. Ses hommes ont le scorbut, la moitié ne peut plus ramer. Les baleines sont là : il en a vu souffler à l'aube, au sud, dans les chenaux. Qu'on lui prête quatre bras jeunes pour une chasse, et il paiera l'eau en huile, et chaque rameur aura sa part.",
        "La capitaine hésite. Gobert lui montre quatre volontaires du menton, dont toi.",
      ],
      choices: [
        { label: "Descendre dans la baleinière", to: "XO_m_baleiniere" },
        { label: "Laisser ta place à un autre", back: "A3n_jours" },
      ] },
    XO_m_baleiniere: { act: "III", title: "La baleinière", place: "sargues", ambiance: "mer",
      text: [
        "La baleinière est longue, étroite, légère comme une feuille, pointue aux deux bouts pour reculer aussi vite qu'elle avance. Six hommes : quatre rameurs, un timonier debout à l'arrière avec un long aviron de queue, et à l'avant, le harponneur, un grand homme silencieux venu des îles du Levant, nommé Siméon, qui ne rame pas, qui attend, la main posée sur ses fers comme sur l'épaule d'un ami. Au milieu, dans deux bailles, la ligne, lovée avec un soin de dentellière, des centaines de brasses de chanvre blanc qui court jusqu'au harpon.",
        "« Ne mets jamais le pied dans les tours de la ligne, te dit le timonier, un vieux Kerverzotais aux joues creuses. Jamais. Quand elle file, elle file plus vite qu'un cheval au galop, et elle emporte ce qui est dedans. Une jambe, un bras, un homme. J'en ai vu partir trois. On ne les revoit pas. »",
        "Vous ramez vers le sud, entre les îles d'herbes jaunes, sur l'eau lisse comme de l'huile, pendant deux heures. Il fait une chaleur de forge. Le chanvre de la ligne sent le goudron chaud. Personne ne parle.",
        "Puis le timonier lève la main. Devant, à trois encablures, la mer se soulève, lentement, comme si quelque chose d'énorme respirait dessous, et un jet de vapeur monte, droit, blanc, en forme de bouquet, avec un bruit de soufflet de forge qu'on entend jusqu'ici. Puis un autre. Puis le dos. Un dos noir, ridé, luisant, long comme la Cormorane, qui roule à la surface sans hâte, avec une indifférence de montagne.",
      ],
      choices: [{ label: "Ramer, sans un bruit", to: "XO_m_chasse" }] },
    XO_m_chasse: { act: "III", title: "La chasse", place: "sargues", ambiance: "mer",
      text: [
        "On approche. On rame à petits coups, les avirons gainés de toile, en retenant son souffle. La baleine dort, ou fait semblant. Elle est à cinquante brasses. À vingt. À dix. Tu vois son œil. Il est minuscule, dans ce corps immense, petit comme un œil de vache, très ancien, et il te regarde.",
        "Siméon se lève à l'avant. Il prend son fer. Il le lève au-dessus de sa tête, à deux mains, et il reste ainsi une seconde, immobile, comme un homme qui prie. Puis il le lance.",
        "Le fer entre dans le dos noir jusqu'à la hampe. La baleine tressaille, d'un frisson qui court sur toute sa longueur comme une onde sur un drap. Puis elle sonde. Sa queue se lève au-dessus de la baleinière, gigantesque, ruisselante, plus large que la maison du Fanal, et retombe à un pied du plat-bord, et l'eau vous gifle tous ensemble.",
        "Et la ligne file. Elle sort de la baille en sifflant, si vite qu'elle fume en passant dans l'entaille de l'avant, et le timonier l'arrose avec un seau pour qu'elle ne prenne pas feu. La baleinière file avec elle, tirée par la bête, à une vitesse folle, sur l'eau lisse, en sautant sur les herbes, et les hommes hurlent de joie et de peur.",
        "Alors le rameur devant toi, un jeune Kerverzotais aux cheveux de paille, glisse. Son pied entre dans un tour de ligne. La ligne se referme sur sa cheville. Il est arraché du banc, jeté contre le plat-bord. Il s'accroche. La ligne le tire. Il crie.",
      ],
      choices: [
        { label: "Prendre la hachette du bord, et couper la ligne", test: { dom: "combat", diff: 1, label: "Un coup, un seul" }, win: { fx: { flag: "xo:ligne_coupee" }, to: "XO_m_coupe" }, lose: { fx: { flag: ["xo:ligne_coupee", "xo:homme_perdu"] }, to: "XO_m_perdu" } },
        { label: "Te jeter sur lui, et le retenir à bras-le-corps", test: { dom: "nature", diff: 2, label: "Contre une baleine" }, win: { to: "XO_m_retenu" }, lose: { fx: { flag: "xo:homme_perdu" }, to: "XO_m_perdu" } },
      ] },
    XO_m_coupe: { act: "III", title: "La ligne", place: "sargues", ambiance: "mer",
      text: [
        "La hachette est là, dans son étui, à l'avant, pour ça. Tu la prends. Tu frappes. Une fois, sur le chanvre tendu comme une corde de harpe, entre l'entaille et la cheville du garçon. La ligne cède avec un claquement de fouet, et son bout libre part dans la mer comme un serpent, et disparaît.",
        "La baleinière s'arrête net. Le garçon aux cheveux de paille est couché au fond, la cheville en sang, à moitié écorchée, vivante. Il te regarde sans comprendre.",
        "Le timonier te regarde aussi. Il ne dit rien pendant un long moment. Puis il crache dans l'eau. « Tu viens de couper trois cents brasses de ligne neuve, un fer et la plus belle baleine de la saison, dit-il. Et un garçon de dix-sept ans qui n'aurait pas revu Kerverzot. » Il reprend son aviron. « Le compte est bon. Ramez. »",
        "Au loin, la baleine refait surface, une fois, souffle, avec le fer planté dans le dos et la ligne qui traîne derrière elle comme une queue de cerf-volant. Elle s'en va vers le sud, lentement. Elle portera ce fer longtemps. Ils en portent tous.",
      ],
      choices: [{ label: "Ramer vers la Constance", to: "XO_m_capitaine" }] },
    XO_m_retenu: { act: "III", title: "La ligne", place: "sargues", ambiance: "mer",
      text: [
        "Tu te jettes sur lui. Tu l'attrapes par la ceinture, à deux bras, et tu te cales les pieds contre le banc. La ligne tire. Tu tires. Pendant une seconde, deux, trois, la baleine et toi vous disputez un garçon de dix-sept ans, et la baleine pèse soixante tonnes.",
        "Puis Siméon est là. Il a traversé la baleinière d'un bond, par-dessus les bancs. Il passe la main dans la boucle, à la cheville du garçon, entre la corde et la peau, et il ouvre la boucle, d'un geste, comme on dénoue un lacet. Le pied sort. La ligne repart toute seule, en sifflant, et vous tombez tous les trois au fond de la baleinière, emmêlés, trempés.",
        "Siméon se relève, retourne à l'avant, et reprend sa place, sans un mot, la main sur ses fers. La chasse continue.",
        "Elle dure trois heures. La baleine tire la baleinière à travers la mer des Sargues comme un traîneau, puis se fatigue, puis remonte. On l'achève à la lance. Elle meurt en soufflant du sang, un jet rouge qui monte droit et retombe en pluie sur vous tous, chaud, et la mer autour devient rose, puis rouge, et les herbes jaunes rougissent aussi, sur une demi-lieue.",
        "Tu regardes son œil, à la fin, quand elle roule sur le flanc. Il est ouvert. Il ne regarde plus rien.",
      ],
      choices: [{ label: "Remorquer la baleine jusqu'à la Constance", to: "XO_m_depecage" }] },
    XO_m_perdu: { act: "III", title: "La ligne", place: "sargues", ambiance: "mer",
      text: [
        "Tu n'as pas le temps. Personne n'a le temps. Le garçon aux cheveux de paille passe par-dessus le plat-bord, la cheville prise dans la ligne, d'un seul coup, sans même crier une deuxième fois, et l'eau se referme sur lui, et la ligne continue de filer, avec lui au bout, vers le fond.",
        { if: { has: "xo:ligne_coupee" }, text: "Ta hachette tombe sur le chanvre une seconde trop tard. La ligne coupée part dans la mer comme un serpent, et disparaît avec ce qu'elle emportait." },
        "Le timonier regarde l'endroit où il a disparu. Il ôte son bonnet. Les rameurs aussi. Siméon, à l'avant, ne bouge pas.",
        "« Yann Le Bris, dit le timonier. Dix-sept ans. De Kerverzot. » Il remet son bonnet. « C'est le quatrième. »",
        "On rame vers la Constance, en silence, dans la chaleur. Les regards évitent le tien, sans reproche. C'est la chasse. Ils le savaient tous en descendant dans la baleinière. Toi aussi, depuis que le timonier te l'a dit. Ça ne change rien à ce que tu sens, et que tu n'arrives pas à poser.",
      ],
      choices: [{ label: "Ramer vers la Constance", to: "XO_m_capitaine" }] },
    XO_m_depecage: { act: "III", title: "Le dépeçage", place: "sargues", ambiance: "mer",
      text: [
        "Le dépeçage dure deux jours et deux nuits, le long du bord de la Constance, sous les chaudrons allumés qui fument noir dans le ciel blanc. Des hommes en sabots, sur la baleine même, découpent la graisse en longues bandes avec des pelles tranchantes, et des palans les hissent à bord, en spirale, comme on épluche une orange monstrueuse. L'huile bout. La fumée sent la friture et la chair. Les requins arrivent par dizaines et mordent dans la carcasse, et les hommes les tuent à coups de pelle, et d'autres viennent.",
        "Le deuxième jour, en fouillant les entrailles avec une gaffe, le timonier pousse un cri. Il ramasse une masse grise, cireuse, de la taille d'un pain, qui flotte sur le sang. Il la flaire. Son visage s'illumine.",
        "« De l'ambre, dit-il. De l'ambre gris. » Il te la tend. « Pour toi. C'est la coutume : l'ambre est à celui qui a sauvé un homme dans la chasse. Ça vaut son poids d'or, chez les parfumeurs de Morlenc. Ça sent la merde, aujourd'hui. Dans un an, ça sentira la rose. Garde-la au sec. »",
        "Tu prends la masse grise. Elle sent, en effet, le fumier, la mer et le musc, et quelque chose d'autre, très loin, qui ressemble déjà à un parfum.",
      ],
      choices: [{ label: "L'envelopper dans ta chemise", fx: { item: "ambre_gris" }, to: "XO_m_capitaine" }] },
    XO_m_capitaine: { act: "III", title: "Le capitaine", place: "sargues", ambiance: "nuit",
      text: [
        "Le dernier soir, avant que tu redescendes à la Cormorane, le capitaine Le Moal te fait appeler dans sa cabine. Une cabine étroite, nue, qui sent l'huile. Aux murs, des dents de cachalot gravées au couteau, des dizaines, toutes représentant la même baleine : un cachalot énorme à la tête grise, presque blanche, avec trois harpons plantés dans le dos.",
        "« La Grise, dit-il, en suivant ton regard. Onze ans que je la cherche. Elle a pris mon fils, à Kerverzot, au large de la pointe, dans la première baleinière qu'il commandait. Elle a pris la baleinière, le fils et cinq hommes. Elle n'en a laissé aucun. » Il touche une des dents gravées. « Je l'ai revue quatre fois. Je lui ai mis trois fers. Elle les porte. Elle est là, quelque part, dans ces herbes. Je le sens. »",
        "Il te regarde, pour la première fois, droit dans les yeux. Ses yeux délavés ont une fixité qui fait peur.",
        "« Tu as le pied marin. Tu as la tête froide. Reste à bord de la Constance. Je te ferai harponneur dans trois ans. Tu seras là, le jour où on la trouvera. »",
      ],
      choices: [
        { label: "« Non, capitaine. Elle ne vous a rien laissé. Laissez-la. »", fx: { flag: "xo:refus_moal" }, to: "XO_m_fin" },
        { label: "« Non. J'ai déjà quelqu'un à suivre. »", to: "XO_m_fin" },
      ] },
    XO_m_fin: { act: "III", title: "La Constance", place: "sargues", ambiance: "mer",
      text: [
        { if: { has: "xo:refus_moal" }, text: "Le capitaine Le Moal te regarde longtemps. Puis il hoche la tête, lentement, comme si tu avais dit quelque chose qu'il savait déjà, qu'il se répète tous les soirs, et qui ne sert à rien. « Je la laisserai, dit-il, le jour où elle me laissera. » Il retourne à ses dents gravées." },
        "Le vent revient deux jours plus tard. La Constance met le cap au sud, sur la piste d'une ombre. La Cormorane met le cap au sien. Tu regardes le baleinier s'éloigner, noir de suie, avec ses chaudrons qui fument, jusqu'à ce qu'il ne soit plus qu'un point dans les herbes.",
        { if: { not: { has: "xo:homme_perdu" } }, text: "À la poupe, un garçon aux cheveux de paille, la cheville bandée, te fait de grands signes, des deux bras, jusqu'à ce que tu ne le voies plus." },
        "On a rempli deux barriques d'huile de baleine, pour la lampe de l'habitacle. Elle brûle clair, sans fumée. Elle sent, très légèrement, la mer chaude et le sang.",
      ],
      choices: [{ label: "Reprendre le service", fx: { quest: "XO" }, back: "A3n_jours" }] },

    // ---------------------------------------------------------------- the doctor
    XO_v_debut: { act: "III", title: "La Constance", place: "sargues", ambiance: "mer",
      fx: { meet: "lemoal", flag: "quete-vue:XO" },
      text: [
        "Le baleinier est arrivé dans la nuit, avec la brume, et il est là au matin, à une encablure, noir de suie, ventru, puant, avec ses chaudrons de brique sur le pont et ses baleinières pendues aux bossoirs. Une odeur l'accompagne que Victorine connaît des quais de Morlenc, l'huile rance et la graisse brûlée, et qu'elle n'avait jamais respirée de si près.",
        "À midi, une baleinière vient chercher la médecin. C'est le second du baleinier qui la demande, un homme carré, calme, aux yeux fatigués, nommé Hervé Kerjégu. Il a le scorbut à bord, dit-il, mais ce n'est pas pour le scorbut qu'il vient. C'est pour le capitaine.",
        "Dans la baleinière, pendant qu'on rame, il parle à voix basse, pour que les rameurs n'entendent pas. « Le capitaine ne dort plus. Depuis trois semaines. Il reste sur le pont, la nuit, à regarder la mer. Il parle tout seul. Il parle à une baleine. » Il regarde ses mains. « Il cherche une baleine, Madame. Une seule. Depuis onze ans. Nous, on cherche de l'huile, pour nourrir nos familles. Il y a dix-huit mois qu'on n'a pas vu Kerverzot. »",
      ],
      choices: [{ label: "Monter à bord de la Constance", to: "XO_v_capitaine" }] },
    XO_v_capitaine: { act: "III", title: "Le capitaine", place: "sargues", ambiance: "mer",
      text: [
        "Le capitaine Corentin Le Moal la reçoit dans sa cabine, debout, courtois, avec une tasse de thé noir qu'il ne boit pas. Il a soixante ans, des mains brûlées par les lignes, et des yeux d'un gris délavé qui ne se posent jamais sur elle : ils regardent par le hublot, la mer, sans arrêt, comme on surveille une porte.",
        "Elle l'examine. Le pouls est rapide, filant. Les mains tremblent. Les pupilles sont larges, le blanc de l'œil injecté. Il a maigri de vingt livres, dit le second. Il mange à peine. Il ne dort pas. Sa folie, si c'en est une, ressemble peu à celles de l'hospice de Saint-Lazare : il est usé, jusqu'à la trame, comme une voile qu'on a laissée trop longtemps au vent.",
        "Aux murs, des dents de cachalot gravées au couteau, toutes représentant la même baleine : un cachalot à la tête presque blanche, avec trois harpons plantés dans le dos.",
        "« Elle a pris mon fils, dit-il, sans quitter le hublot des yeux, comme s'il continuait une conversation commencée avec quelqu'un d'autre. Il y a onze ans. Je la trouverai. Je ne dors pas parce qu'elle ne dort pas. Elle est là, dans ces herbes, je le sens, et le jour où je dormirai, elle passera. »",
        "Quand Victorine sort de la cabine, le second l'attend dans la coursive. Il a un papier à la main, et une plume.",
        "« Un certificat, Madame, dit-il très bas. Que le capitaine est malade, hors d'état de commander. Avec votre signature de médecin, je prends le commandement, et on rentre à Kerverzot avec ce qu'on a. Personne ne sera puni. On dira qu'il a eu une fièvre. Trente hommes vous béniront. »",
      ],
      choices: [
        { label: "Signer le certificat", fx: { flag: "xo:certifie" }, to: "XO_v_certifie" },
        { label: "Refuser : il est épuisé, il n'est pas fou", fx: { flag: "xo:refuse" }, to: "XO_v_refuse" },
        { label: "Proposer autre chose : le faire dormir, trois jours, et voir", fx: { flag: "xo:dort" }, to: "XO_v_dort" },
      ] },
    XO_v_certifie: { act: "III", title: "Le certificat", place: "sargues", ambiance: "mer",
      text: [
        "Elle signe. *Je soussignée, Victorine Davrigny, médecin, certifie avoir examiné ce jour le capitaine Corentin Le Moal, et l'avoir trouvé en état d'épuisement nerveux grave, incompatible avec l'exercice du commandement.* Tout est vrai. C'est ce qui rend la chose si facile, et si laide.",
        "Le second lit le certificat devant l'équipage assemblé, le soir même. Le capitaine écoute, debout, très droit, sans protester. Quand le second a fini, il lui tend lui-même la clef de sa cabine, et la longue-vue, et le livre de bord. Puis il va à l'arrière, et il s'assied sur un rouleau de cordage, et il regarde la mer.",
        "En partant, Victorine le voit encore, de la baleinière qui la ramène à la Cormorane. Il n'a pas bougé. Il regarde le sud. La Constance mettra le cap au nord, vers Kerverzot, dès que le vent reviendra, et il le sait, et il regarde le sud quand même, et il le regardera jusqu'à ce qu'il ne puisse plus.",
        "Elle a fait ce qu'il fallait. Elle en est sûre. Elle en sera sûre longtemps, sauf certaines nuits, où elle se demande ce qu'on retire exactement à un homme quand on lui retire la seule chose qui le tient debout.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "XO" }, back: "A3w_jours" }] },
    XO_v_refuse: { act: "III", title: "Le certificat", place: "sargues", ambiance: "mer",
      text: [
        "« Non, dit-elle. Votre capitaine est épuisé, monsieur Kerjégu. Il a perdu un fils. Il cherche ce qui le lui a pris. C'est une douleur, et une obstination, et une folie peut-être, mais c'est la sienne, et je ne vais pas la signer à sa place pour vous arranger. »",
        "Le second la regarde. Il ne se met pas en colère. Il a l'air d'un homme qui s'attendait à ce refus, et qui l'espérait un peu, pour n'avoir rien à se reprocher.",
        "« Alors on continue, dit-il. Jusqu'à ce qu'elle passe, ou qu'il meure, ou que nous mourions. » Il plie son papier, le range. « Merci, Madame. Vous êtes honnête. On n'en demandait pas tant. »",
        "Elle redescend dans la baleinière. En s'éloignant, elle voit le capitaine Le Moal, sur le pont, à la lisse, qui regarde la mer, et le second, à trois pas derrière lui, qui regarde le capitaine. Elle se demande lequel des deux craquera le premier. Elle préfère ne pas le savoir.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "XO" }, back: "A3w_jours" }] },
    XO_v_dort: { act: "III", title: "Le sommeil", place: "sargues", ambiance: "nuit",
      text: [
        "« Ni l'un ni l'autre, dit-elle. Laissez-moi le faire dormir. Trois jours. Ensuite, nous verrons ce qu'il reste de lui. »",
        "Le capitaine refuse d'abord. Puis il accepte, à condition qu'on le réveille si quelqu'un voit souffler une baleine à tête grise. On le lui promet. Elle lui donne du laudanum, une dose de cheval, dans son thé noir, et elle reste à côté de lui pendant qu'il s'endort, assis dans son fauteuil, face au hublot, les yeux ouverts jusqu'au dernier moment.",
        "Il dort trois jours. Il dort comme on tombe dans un puits. Victorine reste à bord de la Constance, pour le veiller, et soigner le scorbut de l'équipage avec ce qu'elle a. Le troisième jour, au matin, il se réveille.",
        "Il regarde le hublot. Puis il regarde Victorine. Pour la première fois, ses yeux délavés se posent sur quelqu'un.",
        "« J'ai rêvé de lui, dit-il. Mon fils. Pas de la baleine. De lui. Il riait. Il avait onze ans, il était sur la grève de Kerverzot, il me montrait un crabe. » Il se tait. « Je n'avais pas rêvé de lui depuis onze ans. Je ne rêvais que d'elle. »",
        "Le soir même, il donne l'ordre de mettre le cap au nord, dès que le vent reviendra, vers Kerverzot. L'équipage pleure de soulagement. Le second vient serrer la main de Victorine, longtemps, sans rien dire. Le capitaine, lui, reste à la poupe, à regarder le sud. Mais il dort, la nuit, maintenant. Un peu.",
      ],
      choices: [{ label: "Retourner à la Cormorane", fx: { quest: "XO" }, back: "A3w_jours" }] },
  },
  extras: {
    people: {
      lemoal: { name: "Corentin Le Moal", aka: ["Le Moal", "le capitaine baleinier"], f: false,
        face: { age: "ancien", skin: "hale", hair: "gris", coif: "court", beard: "barbe", eyes: "lourds", iris: "gris", nose: "fin", lips: "fines", shape: "allonge", marks: ["cicatrice"] },
        desc: "Le capitaine du baleinier la Constance, de Kerverzot.", qui: "Le capitaine baleinier qui cherche une seule baleine.",
        aspect: { allure: "maigre, voûté", visage: "yeux d'un gris délavé qui surveillent la mer", signe: "les mains brûlées par les lignes" } },
    },
    items: {
      ambre_gris: { name: "Une masse d'ambre gris", kind: "divers", keep: true, price: 0, desc: "Une masse grise et cireuse, de la taille d'un pain, sortie du ventre d'un cachalot dans la mer des Sargues. Elle sent la mer, le musc et autre chose. Dans un an, dit le timonier de la Constance, elle sentira la rose." },
    },
    quests: [
      { id: "XO", act: "III", kind: "annexe", title: "La baleinière", start: "XO_m_debut", doit: "mobydick", echo: ["xo:ligne_coupee", "xo:homme_perdu", "xo:certifie", "xo:dort"] },
    ],
  },
};
