// Le Douzième Coup · chapter 4, the one who passes, second half (act II, the farm of the Noyers in 541, afternoon and
// night). Perrine the pedlar arrives with her almanacs; the timber merchant comes for the middle walnut tree
// (`monde:noyer_sauve`); a royal courier nails a notice to the hour-stone; at night Line climbs to the hayloft with her
// conclusions (`monde:line_sait`). At dawn the household leaves for the wedding at Roquebise (B04).
var P = {};

Object.assign(P, {
  K04j_tantot: { act: "II", title: "L'après-midi", backName: "la cour, l'après-midi", place: "ferme", hub: true,
    text: [
      { first: true, text: "Tu reviens de la borne par le verger. La ferme fait la sieste des jours de fenaison, qui dure le temps de digérer : les valets dorment à l'ombre de la charrette, le chapeau sur la figure, et Josse, debout sous le noyer du milieu, la main à plat sur l'écorce, regarde la route de Roquebise." },
      { first: true, text: "Sur cette route, deux choses approchent. La plus proche est une hotte : une haute hotte d'osier, chargée jusqu'au ciel, sous laquelle il doit y avoir quelqu'un, puisqu'elle chante. La plus lointaine est un cabriolet jaune, encore gros comme un hanneton, dans sa poussière." },
      { again: true, before: "K04j_ragot", text: "La cour, l'ombre des trois noyers. Sur la route, le cabriolet jaune a grossi." },
      { again: true, after: "K04j_ragot", text: "La cour, le soir qui vient. Les hirondelles rasent le pavé." },
    ],
    choices: [
      { label: "Aller au-devant de la hotte qui chante", to: "K04j_perrine", hide: { seen: "K04j_perrine" } },
      { label: "Perrine, qui a déballé sous le portail", to: "K04j_perrine_etal", hide: { not: { seen: "K04j_perrine" } } },
      { label: "La borne, où un cavalier vient de s'arrêter", to: "K04j_courrier", hide: { seen: "K04j_courrier" } },
      { label: "Josse, sous le noyer du milieu", to: "K04j_josse", hide: { any: [{ seen: "K04j_josse" }, { seen: "K04j_ragot" }] } },
      { label: "Le cabriolet jaune entre dans la cour", to: "K04j_ragot", if: { seen: "K04j_perrine" }, why: "Il est encore loin sur la route.", hide: { seen: "K04j_ragot" }, big: true },
      { label: "La cloche du souper", to: "K04j_souper", if: { seen: "K04j_ragot" }, hide: { not: { seen: "K04j_ragot" } }, big: true },
    ] },

  // ------------------------------------------------------------ Perrine
  K04j_perrine: { act: "II", title: "La hotte qui chante", place: "ferme", fx: { met: "perrine" },
    text: [
      "Sous la hotte, il y a une fille de dix-sept ans, hâlée, le nez en l'air, des taches de son et deux tresses nouées sur la nuque. Elle marche vite, penchée en avant, du pas des gens dont la marchandise pèse. Elle a cessé de chanter en te voyant ; elle a commencé de vendre.",
      "« Almanachs ! L'almanach d'Aurime pour l'an 541, le seul qui dise vrai, avec les lunes, les foires, les saints, le temps qu'il fera et celui qu'il a fait ! Aiguilles, lacets, rubans, images de sainte Aure, peignes en corne, et de quoi écrire à sa bonne amie ! » Elle reprend son souffle. « Tu es de la maison ? Non. Tu as l'air d'être de quelque part comme moi je suis évêque. Tiens-moi ça. »",
      "Elle se défait de la hotte en te la mettant dans les bras. Elle pèse le poids d'un veau. Perrine s'étire, fait craquer son dos, et te regarde plier les genoux avec la sympathie d'une personne du métier.",
      "« Perrine. Colporteuse, fille de passeur. Je fais Vauxelles, les Noyers, Roquebise, Arvoise et Méridane, quatre fois l'an, et la foire du Grand Midi par-dessus. » Elle compte les étapes sur ses doigts, vite, le pouce d'abord. « Demain la noce de Roquebise, où je vends mes rubans. Après-demain Arvoise, où ils bénissent leur pont. » Elle a dit *leur pont* comme on dit *leur gale*.",
    ],
    choices: [{ label: "Porter la hotte jusqu'au portail", to: "K04j_perrine_etal" }] },
  K04j_perrine_etal: { act: "II", title: "L'étal de Perrine", backName: "l'étal de Perrine", place: "ferme", shop: "ii_perrine",
    text: [
      { first: true, text: "Elle déballe sous le portail, sur un drap rouge, en moins de temps qu'il n'en faut à Bérarde pour ôter son tablier. Toute la ferme y vient, même les valets, même Finaud. Line est au premier rang, les mains derrière le dos." },
      { first: true, text: "« L'almanach, mesdames ! Trois sous, et vous saurez tout. Voyez, à la page de juin : *le Grand Midi, vingt et unième jour, temps clair, grande affluence à Méridane, Sa Majesté au balcon*. Si l'un de ces quatre points se trouve faux, je vous le rembourse, et je vous donne un ruban. » Elle n'a jamais remboursé un almanach. Elle le dit, d'ailleurs : c'est son meilleur argument." },
      { again: true, text: "Perrine range et dérange son drap rouge. Elle vend en parlant et parle en vendant, sans qu'on puisse dire lequel des deux soutient l'autre." },
    ],
    choices: [
      { label: "« Pourquoi dis-tu leur pont comme tu dirais leur gale ? »", to: "K04j_perrine_pont", hide: { seen: "K04j_perrine_pont" } },
      { label: "« Tu vas à Méridane. Moi aussi. »", to: "K04j_perrine_route", hide: { seen: "K04j_perrine_route" } },
      { back: "K04j_tantot" },
    ] },
  K04j_perrine_pont: { act: "II", title: "Le bac d'Arvoise", place: "ferme",
    text: [
      "Perrine plie un ruban, soigneusement, en huit.",
      "« Mon père passait le bac d'Arvoise. Trente ans. Il connaissait la Thiorne comme toi tes poches : où elle tourne, où elle creuse, où elle ment. Quand ils ont décidé leur pont, il est allé dire au maître d'œuvre que la troisième pile serait sur du sable, qu'il y avait là un trou où l'eau travaille par en dessous. On lui a répondu qu'un passeur a intérêt à ce qu'il n'y ait pas de pont. » Elle serre le ruban dans son poing. « L'hiver d'après, la crue l'a pris avec son bac. Le pont, lui, n'a pas bougé. Tu vois que la rivière a de l'esprit. »",
      "« Ils le bénissent après-demain, à midi, avec l'évêque, les échevins, la musique, et tout le pays dessus. J'y vendrai mes images, parce qu'il faut manger. Je n'y mettrai pas le pied. Je passerai par le bac, s'il reste un bac. » Elle rouvre la main et se remet à sourire, avec méthode. « Et toi, tu en veux, de mes images ? »",
    ],
    choices: [{ back: "K04j_perrine_etal" }] },
  K04j_perrine_route: { act: "II", title: "Deux hottes", place: "ferme", fx: { join: "perrine", flag: "j:perrine_route" },
    text: [
      "« À Méridane. À pied, sans paquet, avec ces mains-là. » Perrine te retourne une main, examine la paume, la rend. « Des mains qui ne portent rien et qui ne labourent rien. Clerc ? Tailleur ? Non : il y a de l'huile sous les ongles, et de la bonne. Tu travailles dans quelque chose de petit. »",
      "Elle réfléchit, les yeux au ciel, et tu comprends qu'elle compte. « J'ai une seconde hotte, vide, que je remplis à Roquebise de poteries pour la foire. Seule, je fais deux voyages, ou je paie un âne. Tu la portes jusqu'à Méridane, je te nourris et je te dis à qui parler dans chaque bourg, ce qui vaut plus que la nourriture. On partage ce que rapportent les pots : deux parts pour moi, une pour toi. » Elle crache dans sa main et la tend. « C'est un marché de voleuse, mais je suis une voleuse honnête : je te le dis avant. »",
      "Tu tapes dans la main. Elle a une poigne de garçon. « Bon. Règle de la maison : on marche vite, on paie ce qu'on doit, et on ne me ment pas sur ce qui vient. Je vends l'avenir à trois sous, je sais ce que ça vaut. »",
      "Tu regardes la pile d'almanachs sur le drap rouge. *Temps clair, grande affluence.* Tu te dis que le premier article de la règle ne posera aucune difficulté.",
    ],
    choices: [{ back: "K04j_perrine_etal" }] },

  // ------------------------------------------------------------ the king's courier
  K04j_courrier: { act: "II", title: "Le placard de la borne", place: "ferme",
    text: [
      "Un cavalier en livrée bleue, crotté jusqu'aux yeux, s'est arrêté à la borne. Il a tiré de sa sacoche un placard imprimé, un marteau, quatre clous, et il cloue son papier sur le poteau d'à côté, sans descendre de cheval, avec l'adresse d'un homme qui a fait cela vingt fois depuis le matin. Puis il repart au trot vers le couchant.",
      "Le placard porte en tête les armes de la reine, la couronne et le croissant.",
      "*De par la Reine. Madame Aélis, notre fille et unique héritière, étant depuis l'automne affligée de la langueur grise, que nos médecins n'ont su ni guérir ni nommer mieux, il est fait savoir à tous médecins, apothicaires, herboristes et gens de savoir de notre royaume et d'ailleurs, que celui qui apportera au Palais remède certain à ce mal recevra mille écus d'or et notre reconnaissance. Il sera dit des prières dans toutes les paroisses.*",
      "Un valet de la ferme, venu voir, épelle le titre et s'en retourne. « La petite princesse. Huit ans. Ma mère dit que ça se voit sur les monnaies neuves, que la reine a maigri. »",
      "Tu relis. *La langueur grise.* Tu n'as jamais entendu ce nom-là. De ton côté, soixante ans plus tard, on ne meurt plus de grand-chose qui porte un nom de couleur ; quelqu'un, là-bas, saurait peut-être de quoi il s'agit.",
    ],
    fx: { flag: ["j:placard_lu", "monde:placard"] },
    choices: [{ back: "K04j_tantot" }] },

  // ------------------------------------------------------------ the debt and the walnut tree
  K04j_josse: { act: "II", title: "Sous le noyer du milieu", place: "ferme",
    text: [
      "Josse ne tourne pas la tête. « Cent quatre ans, dit-il, la main sur l'écorce. On a le papier, avec la date. L'arrière-grand-père l'a planté le jour où il a fini le toit de la grange. Il donne douze boisseaux de noix les bonnes années. »",
      "Il se tait. C'est un homme qui parle peu et qui, ayant commencé, ne sait plus s'arrêter proprement. « Deux années de grêle. La première, on mange ses réserves. La seconde, on emprunte. Le Ragot prête volontiers. Il prête toujours à ceux qui ont un bel arbre. » Il ôte sa main. « J'ai signé. Je sais signer : c'est bien tout ce que je sais écrire, et voilà où ça mène. »",
    ],
    fx: { flag: "j:sait_dette" },
    choices: [{ back: "K04j_tantot" }] },
  K04j_ragot: { act: "II", title: "Maître Fulcran Ragot", place: "ferme", fx: { meet: "ragot" },
    text: [
      "Le cabriolet jaune s'arrête sous les noyers. Il en descend d'abord un bûcheron, la cognée sur l'épaule, puis une chaîne d'arpenteur, puis maître Fulcran Ragot, marchand de bois à Roquebise, fournisseur juré de la Guilde : un homme rose, rond, aimable, vêtu d'un drap que personne ici ne peut payer, et qui salue Bérarde comme une duchesse.",
      "Il fait d'abord le tour de l'arbre. Il le tapote, colle l'oreille au tronc, recule pour juger la tête. « Quatorze pieds de fût sans un nœud. On en tirera les caisses de vingt régulateurs, et il restera de quoi plaquer un cabinet pour le Palais. Mes compliments à l'arrière-grand-père. » Il a les larmes aux yeux : c'est un homme qui aime sincèrement les arbres, de la façon dont un rôtisseur aime les oies.",
      "Puis il tire un papier de son gilet. « Trente écus à la Saint-Jean, mon bon Josse. Nous y sommes à huit jours près, et je pars demain pour la foire. Vous ne les avez pas. Je ne vous en veux pas : la grêle n'est la faute de personne. Je prends l'arbre pour quitte, je vous laisse les branches pour votre feu, et nous restons amis. » Il fait un signe au bûcheron, qui sort de sa poche un morceau de craie rouge.",
      "Josse a ôté son chapeau. Bérarde est sur le seuil, très droite. Line est montée dans le noyer : on voit ses deux pieds nus sur la première branche.",
    ],
    choices: [
      { label: "« Je peux voir ce papier ? Je sais lire. »", test: { dom: "savoir", diff: 0, label: "Savoir", help: [{ if: { voie: "rouage" }, v: 10 }, { if: { voie: "diseur" }, v: 10 }, { if: { has: "j:sait_dette" }, v: 10 }] },
        win: { fx: { flag: ["monde:noyer_sauve", "j:noyer_billet"], ep: ["seance", 900], regard: { josse: "redevable", ragot: "rancunier" } }, to: "K04j_billet" }, lose: { to: "K04j_billet_rate" } },
      { label: "Tirer ta montre de ta veste : « Combien, pour ceci ? »", if: { item: "montre_line" }, fx: { drop: "montre_line", flag: ["monde:noyer_sauve", "j:montre_donnee"], ep: ["seance", 900], regard: { josse: "redevable" } }, to: "K04j_ragot_montre" },
      { label: "Faire signe à Perrine, qui écoute en rangeant ses rubans", if: { has: "j:perrine_route" }, hide: { not: { has: "j:perrine_route" } }, fx: { flag: ["monde:noyer_sauve", "j:noyer_perrine"], conf: { perrine: 5 }, ep: ["perso", 500], regard: { ragot: "rancunier" } }, to: "K04j_ragot_perrine" },
      { label: "Te taire : c'est leur dette, et leur arbre", fx: { flag: "j:noyer_croix" }, to: "K04j_ragot_croix" },
    ] },
  K04j_billet: { act: "II", title: "Le denier douze", place: "ferme",
    text: [
      "Ragot te tend le papier avec un sourire d'indulgence. Les valets de ferme qui savent lire, il en a vu : ils lisent leur nom.",
      "C'est une reconnaissance en bonne forme, d'une belle écriture de tabellion. *Vingt-quatre écus prêtés à la Saint-Jean de 539, à rendre sous deux ans avec l'intérêt convenu.* L'intérêt convenu fait six écus. Tu comptes, comme Line t'a appris à compter les dents d'une roue : six sur vingt-quatre en deux ans, c'est le denier huit. L'ordonnance du roi, affichée à la porte de toutes les églises, fixe le denier vingt et punit l'usure de l'amende et du pilori.",
      "Tu le dis. Tu le dis posément, en montrant la ligne, et tu ajoutes le calcul : au denier vingt, on doit vingt-six écus et huit sous. Josse ouvre la bouche. Bérarde descend une marche.",
      "Maître Ragot ne rougit pas, n'étant pas de ceux qui rougissent ; il devient seulement un peu moins rose. « L'intérêt convenu », répète-t-il. « Convenu, dis-tu, entre un marchand qui sait compter et un laboureur qui sait signer ? Le bailli d'Arvoise aimera ce mot. » Tu t'entends parler, et tu reconnais la voix : c'est celle de Line, soixante ans plus tard, expliquant à un client qu'il a tort.",
      "Le marchand replie son papier. Il regarde l'arbre une dernière fois, comme on regarde une oie qui s'envole. « Vingt-six écus, à la Toussaint. Je ferai refaire l'acte. » Il remonte en cabriolet sans saluer la duchesse.",
    ],
    choices: [{ label: "Regarder s'éloigner le cabriolet jaune", to: "K04j_noyer_sauve" }] },
  K04j_billet_rate: { act: "II", title: "Une belle écriture", place: "ferme",
    text: [
      "Ragot te tend le papier avec un sourire d'indulgence. C'est une reconnaissance en bonne forme, d'une belle écriture de tabellion, pleine de *susdit* et de *comme dessus*. Tu sens qu'il y a quelque chose : le chiffre de l'intérêt te gêne comme une dent qui dépasse d'une roue. Tu n'arrives pas à dire quoi. Les ordonnances, Line te les faisait réciter en même temps que les prières, et tu écoutais les horloges.",
      "« Eh bien ? » dit le marchand, très doux. Tu rends le papier.",
    ],
    choices: [
      { label: "Tirer ta montre de ta veste : « Combien, pour ceci ? »", if: { item: "montre_line" }, fx: { drop: "montre_line", flag: ["monde:noyer_sauve", "j:montre_donnee"], ep: ["seance", 900], regard: { josse: "redevable" } }, to: "K04j_ragot_montre" },
      { label: "Faire signe à Perrine, qui écoute en rangeant ses rubans", if: { has: "j:perrine_route" }, hide: { not: { has: "j:perrine_route" } }, fx: { flag: ["monde:noyer_sauve", "j:noyer_perrine"], conf: { perrine: 5 }, ep: ["perso", 500], regard: { ragot: "rancunier" } }, to: "K04j_ragot_perrine" },
      { label: "Baisser la tête", fx: { flag: "j:noyer_croix" }, to: "K04j_ragot_croix" },
    ] },
  K04j_ragot_montre: { act: "II", title: "Le prix d'un arbre", place: "ferme",
    text: [
      "Tu poses la montre dans la main rose du marchand. Il l'ouvre d'un ongle. Sa figure change : il fournit la Guilde, il sait ce qu'il tient.",
      "« Un chef-d'œuvre de maîtrise. Échappement à verge, fusée, coq ciselé... Elle a trente ans, quarante, et elle a servi. » Il la porte à son oreille, et ses yeux se ferment à demi. « D'où un garçon de ferme... Non. Je ne demande rien. Je ne demande jamais. » Il a vu le L, à l'intérieur ; il passe le pouce dessus. « Trente écus pour quitte, et je déchire ceci. »",
      "Elle en vaut cent, et vous le savez tous les deux. Tu fais oui de la tête. Ragot déchire la reconnaissance en quatre, avec une courtoisie parfaite, et en tend les morceaux à Bérarde.",
      "La montre disparaît dans le gilet de drap fin. Tu n'entends plus qu'un seul tic-tac dans cette cour, celui de l'aïeul, par la fenêtre. La seule chose qui marchait à l'heure des Trois-Noyers s'en va vers Roquebise en cabriolet jaune ; il te reste le soleil, comme à tout le monde.",
      "Josse a remis son chapeau. Il l'ôte de nouveau. Il ne trouve rien à dire, et tu lui en sais gré.",
    ],
    choices: [{ label: "Regarder s'éloigner le cabriolet jaune", to: "K04j_noyer_sauve" }] },
  K04j_ragot_perrine: { act: "II", title: "Du bois de lune", place: "ferme",
    text: [
      "Perrine arrive sans se presser, un ruban autour du doigt. « Maître Ragot ! On ne se voit qu'aux foires. Vous avez bonne mine. C'est toujours vous qui fournissez ces messieurs de la Guilde ? »",
      "« Toujours, ma fille. »",
      "« En noyer de quatre ans de séchage, comme le veut leur règlement ? Parce que j'étais à Arvoise, en mars, quand vos charretiers ont chargé pour la colline des Jurés. Le bois sortait de la coupe. Il pissait la sève, sauf votre respect. On l'avait passé au brou pour le vieillir. » Elle compte sur ses doigts. « Du bois de lune, vendu pour du quatre ans. Le sous-maître de la Guilde s'appelle Aubespin, je lui vends son almanach tous les ans. C'est un homme qui n'aime pas qu'on le vole, lui : il préfère s'en charger. »",
      "Il y a un silence, où l'on entend les poules. Maître Ragot considère Perrine, puis l'arbre, puis Perrine, avec l'air d'un rôtisseur à qui l'oie vient de parler.",
      "« Vingt-quatre écus, dit-il enfin. Sans intérêt. À la Toussaint. » Et à Josse, en remontant dans son cabriolet : « Vous avez de drôles de valets, mon bon. Et de drôles d'amies. »",
      "Perrine le regarde partir. « Je lui vends son almanach aussi, à celui-là. Je lui compterai cinq sous. »",
    ],
    choices: [{ label: "Regarder s'éloigner le cabriolet jaune", to: "K04j_noyer_sauve" }] },
  K04j_noyer_sauve: { act: "II", title: "Les deux pieds nus", place: "ferme",
    text: [
      "Les deux pieds nus sont toujours sur la première branche. Ils se balancent, à présent.",
      "Bérarde s'est assise sur le banc de pierre, ce qui ne lui arrive jamais, et elle rit et pleure dans son tablier sans choisir. Josse marche jusqu'à l'arbre, y remet la main, à plat, la laisse.",
      { after: "j:noyer_billet", text: "« Le denier vingt, répète-t-il lentement. C'était écrit à la porte de l'église. Je passe devant tous les dimanches. » Il te regarde, de dessous son chapeau. « La petite apprendra à lire. Elle l'apprendra cet hiver, quoi que ça coûte. »" },
      "Line descend du noyer, à reculons, sa robe accrochée partout. Arrivée en bas, elle ne te remercie pas. Elle te demande, tout bas, pour que les grands n'entendent pas :",
      "« Tu savais qu'on allait le couper ? Tu avais l'air de le savoir. Tu regardais la place où il est comme s'il n'y était déjà plus. »",
    ],
    choices: [{ back: "K04j_tantot" }] },
  K04j_ragot_croix: { act: "II", title: "La craie rouge", place: "ferme",
    text: [
      "Le bûcheron trace sur l'écorce une croix rouge, à hauteur d'homme, large comme deux mains. Ragot serre celle de Josse. « Mes gens viendront après la foire, avec la scie de long. Vous serez à Méridane, vous n'entendrez rien : c'est mieux pour madame. »",
      "Le cabriolet jaune s'en va. Josse reste devant la croix. Bérarde rentre, et on l'entend, dans la salle, ranger des assiettes qui étaient déjà rangées.",
      "Line descend du noyer, à reculons. Elle va droit à la croix et la frotte avec sa manche, avec son tablier, puis avec de la salive. La craie s'étale et ne s'en va pas. Elle frotte encore. Personne ne lui dit d'arrêter.",
      "Cette nuit, de l'autre côté de soixante ans, il y avait entre deux noyers une souche large comme une table.",
    ],
    choices: [{ back: "K04j_tantot" }] },

  // ------------------------------------------------------------ the evening
  K04j_souper: { act: "II", title: "Le souper", place: "ferme", takes: "evening",
    text: [
      "On soupe à la chandelle, les fenêtres ouvertes sur la cour. Il y a douze personnes à table et un seul sujet : demain. La charrette partira au jour. On couchera à Roquebise, chez la tante, après la noce. Bérarde a repassé les coiffes ; Girard a ciré des souliers qu'il ne met qu'à Pâques ; Josse emporte un jambon, pour ne pas arriver les mains vides.",
      { after: "monde:horloge_ferme", text: "La grande horloge sonne huit heures au milieu de la soupe. Tout le monde se tait pour l'écouter, la cuiller en l'air. Au huitième coup, l'aïeul Mathurin dit « Amen », et l'on recommence à parler tous ensemble." },
      { with: "perrine", text: "Perrine mange pour trois et paie en nouvelles. « À Méridane, on a déjà monté les tribunes du Grand Midi. La reine a fait dorer le balcon. La Guilde va régler la grande horloge à la seconde, devant tout le monde, comme tous les ans ; sauf que cette année, il paraît que ces messieurs se disputent. Le vieux Grand Maître et le jeune sous-maître ne se saluent plus. On le dit jusque chez les marchandes de harengs. »" },
      { after: "j:placard_lu", text: "On parle aussi du placard de la borne. Bérarde se signe. « Huit ans. L'âge de la nôtre, à un an près. » Elle regarde Line, qui regarde son assiette. « On ne devrait pas laisser mourir les enfants des reines non plus. »" },
      "Après le souper, les hommes fument sur le banc. On te donne la paille du fenil, au-dessus de l'étable, avec une couverture et la bénédiction distraite de l'aïeul.",
    ],
    choices: [{ label: "Monter au fenil", to: "K04j_fenil" }] },
  K04j_fenil: { act: "II", title: "Les conclusions de Line", place: "ferme",
    text: [
      "Tu ne dors pas. Il y a trop de bruits : les vaches, en dessous, les grillons, un rossignol dans le verger, toute cette nuit pleine dont tu n'as pas l'habitude. Vers dix heures, l'échelle craque. Une chandelle monte, et Line derrière, en chemise, sa boîte de fer-blanc sous le bras.",
      "Elle s'assoit en tailleur dans la paille, à bonne distance, pose la chandelle sur une poutre, et ouvre sa boîte comme on ouvre un dossier.",
      { after: "j:montre_vue", text: "« J'ai fini de réfléchir. Grand-père n'a qu'une montre : j'ai regardé dans ses poches pendant qu'il dormait. Tu n'es pas un menteur, ou alors tu mens très bien, parce que tu ne savais pas non plus, pour le L : tu avais l'air aussi bête que moi. Il reste la troisième façon. » Elle avale sa salive. « Tu viens d'après. La montre est à moi, plus tard. C'est moi qui te l'ai donnée. »" },
      { before: "j:montre_vue", text: "« J'ai trouvé. Tes souliers. Ta veste, qui a des boutons en quelque chose que je ne connais pas. Tu n'avais jamais mangé de pain blanc, et tu as regardé le noyer du milieu comme on regarde un mort. Et à table, quand on a parlé du Grand Midi, tu es devenu{e} tout{e} gris{e}. » Elle avale sa salive. « Tu ne viens pas de loin. Tu viens d'après. »" },
      "Elle a dit cela sans trembler. La flamme de la chandelle tremble pour elle.",
    ],
    choices: [
      { label: "Lui dire tout : d'où tu viens, et ce qui arrive dans huit jours", fx: { flag: ["monde:line_sait", "j:line_tout"], ep: ["seance", 800] }, to: "K04j_line_tout" },
      { label: "Lui dire d'où tu viens, et te taire sur ce qui arrive", fx: { flag: ["monde:line_sait", "j:line_dou"], ep: ["seance", 800] }, to: "K04j_line_dou" },
      { label: "« D'après ? Tu as lu trop d'almanachs. Va te coucher. »", fx: { flag: "j:line_menti" }, to: "K04j_line_rien" },
    ] },
  K04j_line_tout: { act: "II", title: "Tout", place: "ferme",
    text: [
      "Tu lui dis tout. Tu avais juré de te taire, à une vieille femme, sur le pas d'une boutique ; c'est cette vieille femme qui te le demande, à neuf ans, en chemise, et tu ne sais plus laquelle des deux tu trahis.",
      "Tu dis la Tour, les onze coups, le douzième qui ne vient pas. Tu dis la ville arrêtée, la reine, les pigeons au-dessus des toits. Tu dis que cela s'étend, année après année, et que dans soixante ans cette grange sera prise, avec un chat en l'air dans la cour. Tu ne dis pas *tes parents*. Tu dis : tous ceux qui seront à Méridane ce jour-là.",
      "Line t'écoute comme elle écoutera plus tard battre les échappements : la tête penchée, sans un geste. Quand tu as fini, elle reste longtemps à regarder sa chandelle.",
      "« On y sera. On y va tous les ans. » Sa voix est toute petite, et très nette. « Si je le dis à papa, il ne me croira pas : j'ai dit une fois que la jument parlait. Si c'est toi qui le dis, il te chassera avec la fourche, et il ira quand même, pour montrer qu'il n'a pas peur. » Elle referme sa boîte. « Alors il faut y aller. Il faut y aller, et trouver qui tient la roue qui commande, et l'empêcher. C'est pour ça que tu es là. C'est moi qui t'envoie, hein ? Plus tard ? »",
      "« Oui. »",
      "« Je suis comment, vieille ? »",
      "Tu cherches. « Tu as raison tout le temps. C'est fatigant. » Elle hoche la tête, satisfaite : cela lui paraît vraisemblable.",
    ],
    choices: [{ label: "L'écouter encore", to: "K04j_promesse" }] },
  K04j_line_dou: { act: "II", title: "D'après", place: "ferme",
    text: [
      "« Oui, dis-tu. D'après. De soixante ans après. » C'est une phrase qu'on ne s'attend pas à prononcer dans sa vie, et qui sort pourtant sans peine, dans un fenil, devant une chandelle.",
      "Tu lui dis la grange, la porte, la pierre aux faux. Tu lui dis qu'une vieille horlogère t'a élevé{e}, qui t'a mis cette montre dans la main, et qui porte son nom à elle. Tu ne dis rien du Grand Midi. Tu dis que tu as quelque chose à faire à Méridane, avant la fête, et que tu ne peux pas en parler.",
      "Line n'est pas dupe. Elle a neuf ans : elle sait très bien reconnaître quand les grands s'arrêtent au bord d'une chose. « Il arrive quelque chose, au Grand Midi. Tu es devenu{e} gris{e}, à table. » Elle attend. Tu ne réponds pas. « Bon. Tu ne veux pas. C'est que c'est grave, alors, et que tu crois que je suis petite. »",
      "Elle referme sa boîte de fer-blanc d'un coup sec. « Je trouverai. J'ai huit jours. J'ai bien trouvé pour toi, en un seul. »",
    ],
    choices: [{ label: "L'écouter encore", to: "K04j_promesse" }] },
  K04j_line_rien: { act: "II", title: "Trop d'almanachs", place: "ferme",
    text: [
      "Tu ris, d'un rire qui sonne comme une cloche fêlée. Tu parles d'une montre achetée à un brocanteur, d'un L qui s'y trouvait, d'une ressemblance. Tu parles de cordonniers de ton pays qui font les deux pieds pareils par économie.",
      "Line t'écoute jusqu'au bout. Elle te regarde avec une déception immense, tranquille, la déception d'une personne qui avait posé un problème juste et à qui l'on rend une réponse fausse.",
      "« Tu mens mal, dit-elle. Tu clignes. » Elle reprend sa chandelle et sa boîte. « Ça ne fait rien. Quand je serai vieille, je saurai bien, puisque c'est moi qui t'aurai donné la montre. Je me le dirai à moi-même. » À l'échelle, elle se retourne. « Je serai en colère contre toi pendant soixante ans. Tu verras si c'est long. »",
    ],
    choices: [{ label: "Rester seul{e} dans la paille", to: "K04j_aube" }] },
  K04j_promesse: { act: "II", title: "Ce qu'on promet à neuf ans", place: "ferme",
    text: [
      "La chandelle a baissé. En bas, une vache se retourne dans sa litière.",
      "« Quand tu auras fini, à Méridane, demande Line, tu repars ? Par la pierre aux faux ? » Elle arrache des brins de paille, un à un. « Tu pourrais rester. On a de la place. Papa dit que tu fauches comme un cochon mais que tu as de la tête. Tu m'apprendrais le dedans des montres. »",
      "Elle ne te regarde pas en disant cela. Elle a posé la question à la paille.",
    ],
    choices: [
      { label: "« Je reviendrai te voir avant de repartir. Promis. »", fx: { flag: ["monde:promesse_line", "j:promet_revenir"] }, to: "K04j_aube" },
      { label: "« Je t'apprendrai le dedans des montres. Ça, je peux le promettre. »", fx: { flag: ["monde:promesse_line", "j:promet_montres"] }, to: "K04j_aube" },
      { label: "« Je ne promets rien. Quelqu'un m'a dit de faire attention à ce que je te promets. »", fx: { flag: "j:promet_rien" }, to: "K04j_aube" },
      { label: "« Si je pouvais rester... » T'arrêter là", fx: { flag: "j:tente_rester", secret: "j_rester" }, to: "K04j_aube" },
    ] },
  K04j_aube: { act: "II", title: "Le chant du coq", place: "ferme", takes: "morning",
    text: [
      { after: "j:promet_revenir", text: "« Promis », répète Line, et elle crache dans la paille, pour que cela tienne. Elle redescend. Tu entends ses pieds nus sur chaque barreau." },
      { after: "j:promet_montres", text: "« Le dedans, répète Line. Tout le dedans. Le balancier, et ce qui le pousse, et pourquoi. » Elle redescend en comptant les barreaux, à voix haute, pour s'exercer aux nombres." },
      { after: "j:promet_rien", text: "« C'est moi, dit Line. C'est moi qui te l'ai dit, vieille. » Elle considère cette personne à venir, sans tendresse. « Je dois être devenue prudente. C'est dommage. » Elle redescend." },
      { after: "j:tente_rester", text: "Line attend la fin de la phrase. Elle ne vient pas. « Tu vois, dit-elle doucement, tu y penses. » Elle redescend, et te laisse avec cette idée, qu'elle a posée dans la paille comme on pose un œuf." },
      "Tu dors enfin, d'un sommeil de faucheur. Un coq t'éveille, qui n'est pas celui du père Lubin et qui chante à l'heure. Dans la cour, on attelle. Bérarde compte les paniers ; Girard, en souliers de Pâques, n'ose plus marcher ; l'aïeul Mathurin, de sa fenêtre, donne des ordres que personne n'écoute et qui sont tous justes.",
      { after: "monde:noyer_sauve", text: "Le noyer du milieu est plein de moineaux. Josse, en passant, lui donne une claque sur le tronc, comme à un cheval." },
      { after: "j:noyer_croix", text: "Sur le noyer du milieu, la croix rouge a séché. Josse fait le tour de la cour pour ne pas passer devant." },
      "« La borne ! crie Perrine, déjà sous sa hotte. Je t'attends à la borne, on a quatre lieues ! » La charrette s'ébranle. Tu prends ton sac, et tu sors par le verger.",
    ],
    choices: [{ label: "Gagner la borne avant la charrette", to: "B04" }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      ragot: { name: "Maître Fulcran Ragot", f: false, aka: ["Ragot", "maître Ragot"], face: { age: "mur", skin: "clair", hair: "blond", coif: "degarni", eyes: "ronds", iris: "bleu", nose: "large", lips: "pleines", shape: "rond" },
        aspect: { allure: "un homme rose, rond, aimable", habits: "un drap fin, un gilet à gousset", signe: "tapote les arbres comme des oies" }, qui: "Un marchand de bois de Roquebise, en 541.", desc: "Il fournit la Guilde en noyer pour les caisses d'horloge, et prête volontiers à ceux qui ont un bel arbre." },
    },
    items: {
      almanach: { name: "Almanach d'Aurime pour l'an 541", kind: "divers", price: 1, desc: "Les lunes, les foires, les saints, et le temps qu'il fera. À la page de juin : « le Grand Midi, vingt et unième jour, temps clair, grande affluence à Méridane, Sa Majesté au balcon »." },
      ruban: { name: "Ruban rouge", kind: "divers", price: 1, desc: "Une aune de ruban de soie rouge, de quoi nouer une natte ou un bouquet de noce." },
      image_aure: { name: "Image de sainte Aure", kind: "divers", flat: true, price: 1, desc: "Une image coloriée au pochoir : la sainte qui ouvre le jour, un sablier dans une main, une lampe dans l'autre." },
      ecritoire: { name: "Plumes et encre", kind: "divers", price: 1, desc: "Trois plumes d'oie taillées et une corne d'encre : de quoi écrire à sa bonne amie, dit Perrine." },
    },
    shops: {
      ii_perrine: { name: "Le drap rouge de Perrine", sells: [{ item: "almanach", price: 1 }, { item: "ruban", price: 1 }, { item: "image_aure", price: 1 }, { item: "ecritoire", price: 1 }, { item: "onguent", price: 3 }] },
    },
    // What Line wrote in the margins of the chronicle, over sixty years: it follows what the other hero did at the farm.
    chronique: [
      { id: "marge_horloge", head: "En marge, de la main de Line", v: [
        { if: { has: "monde:horloge_ferme" }, text: "*L'horloge de la salle a resonné l'été de mes neuf ans, après deux ans de silence. J'ai regardé faire. C'est ce jour-là que j'ai su ce que je ferais de mes mains.*" }] },
      { id: "marge_noyer", head: "En marge, de la main de Line", v: [
        { if: { has: "monde:noyer_sauve" }, text: "*Le noyer du milieu a failli partir pour une dette, cet été-là. Il est toujours debout. Je n'ai jamais su compter un intérêt sans penser à lui.*" },
        { text: "*On a abattu le noyer du milieu l'été de mes neuf ans, pour trente écus. Il a fait les caisses de vingt régulateurs. J'en ai réparé trois.*" }] },
      { id: "marge_etranger", head: "En marge, de la main de Line", v: [
        { if: { has: "monde:line_sait" }, text: "*On m'a tout dit dans le fenil, à la chandelle. J'ai cru chaque mot, parce que j'avais neuf ans. J'ai eu raison, et c'est la seule fois que cet âge-là m'a servi.*" },
        { if: { has: "monde:line_lire" }, text: "*On m'a appris à lire l'heure sur une montre que je ne devais graver que plus tard. J'ai mis des années à comprendre cette phrase.*" }] },
    ],
  },
};
