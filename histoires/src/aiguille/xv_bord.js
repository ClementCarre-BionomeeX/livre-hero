// L'Île Folle-Aiguille · act III, more days on board. The child, on the way to Brisegrève: the crossing of the Tropic and
// the Bonhomme Tropique (bord:bapteme_rit, bord:bapteme_paye, bord:bapteme_refus), the shark of the stern (bord:requin),
// the log line with Gobert (bord:loch), a fight over dice between Coquerel and Daguenet (penchants move); in the calms,
// the fires of the sea (bord:feux). The doctor: a topman fallen from the yard (bord:jambe_sauvee, bord:jambe_coupee), the
// captain's secret (ribaud:secret), and, in the calms, the rats of the hold (bord:rats_chat, bord:rats_poison).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child: the Tropic
    XV_bapteme: { act: "III", title: "Le Bonhomme Tropique", place: "mer_couchant", ambiance: "mer",
      text: [
        "Le sixième jour, à midi, Lemerle relève le soleil au sextant, fait un calcul sur l'ardoise, et annonce d'une voix de prêtre que la Cormorane passe le Tropique. Aussitôt, l'équipage disparaît dans l'entrepont avec des mines de conspirateurs, et Gobert aussi, et même la capitaine, qui laisse la barre à Lemerle avec un sourire que tu ne lui connaissais pas.",
        "Un quart d'heure plus tard, une procession monte de l'écoutille avant. En tête, un matelot déguisé en ours, avec une peau de mouton et un tambour. Derrière, deux gabiers en robes de femme, barbus, qui jettent des poignées de farine sur le pont. Puis, sur un affût de canon tiré par quatre hommes, un trône. Et sur le trône, une barbe d'étoupe jusqu'aux genoux, une couronne de fer-blanc, un trident fait d'une gaffe et de trois fourchettes, et une voix que tu reconnaîtrais au fond d'un puits : le Bonhomme Tropique en personne, souverain des mers chaudes, qui ressemble trait pour trait à Maître Gobert.",
        "« Où sont les païens ? tonne le Bonhomme. Où sont ceux qui n'ont jamais passé ma ligne ? »",
        "Tous les regards se tournent vers toi, Petit-Jules, le professeur Gaudrémont et deux matelots de Morlenc. Devant le trône, une grande baille pleine d'eau de mer, avec une planche en travers. Un barbier à rasoir de bois et à savon de goudron t'attend à côté, en aiguisant sa lame sur sa semelle.",
      ],
      choices: [
        { label: "T'avancer, et t'asseoir sur la planche en riant", fx: { flag: "bord:bapteme_rit", penche: { gobert: 1 } }, to: "XV_bapteme_rit" },
        { label: "Offrir au Bonhomme un tribut, pour éviter la baille", fx: { flag: "bord:bapteme_paye" }, to: "XV_bapteme_paye" },
        { label: "Refuser : tu as déjà reçu un baptême, et tu le dis", fx: { flag: "bord:bapteme_refus" }, to: "XV_bapteme_refus" },
      ] },
    XV_bapteme_rit: { act: "III", title: "Le Bonhomme Tropique", place: "mer_couchant", ambiance: "mer",
      text: [
        "Tu t'assieds sur la planche. Le barbier te barbouille la figure de goudron et de farine, te rase avec son rasoir de bois en chantant une chanson obscène, te fait boire une cuiller d'un mélange d'eau de mer, de poivre et de rhum qui te brûle jusqu'aux genoux. Puis le Bonhomme lève son trident, et la planche bascule, et tu tombes à la renverse dans la baille, sous les acclamations.",
        "Tu ressors, crachant, aveuglé{e}, couvert{e} de goudron, et tu ris. Tu ne sais pas pourquoi. Tout le monde rit avec toi, et on te tape dans le dos, et on te donne un verre de vrai rhum, cette fois.",
        "Le Bonhomme Tropique te délivre un brevet, sur un morceau de toile à voile, rédigé par le professeur Gaudrémont en latin de cuisine et signé d'une croix et d'un poisson. Il te serre la main. Sous la barbe d'étoupe, Gobert a l'air presque heureux. Il ne le restera pas longtemps. Mais pour quelques minutes, tu as vu ce que Gobert serait sans la mer, sans les mutins, sans le baron : un vieil enfant qui aime se déguiser.",
        "Petit-Jules, après toi, hurle comme un cochon qu'on égorge et doit être plongé trois fois. Le professeur Gaudrémont, lui, exige d'être baptisé en dernier, pour observer la cérémonie, et prend des notes jusque dans la baille.",
      ],
      choices: [{ label: "Te sécher au soleil", back: "A3m_jours" }] },
    XV_bapteme_paye: { act: "III", title: "Le Bonhomme Tropique", place: "mer_couchant", ambiance: "mer",
      text: [
        "Tu fouilles tes poches. Tu tends au Bonhomme ce que tu as : une pièce, un bout de tabac pour sa pipe, un hameçon. La coutume le permet. Les passagers riches paient d'une bouteille ; les pauvres, de ce qu'ils ont. Le baron Clavières, qu'on a dispensé de baille en raison de sa fièvre, a envoyé une caisse de vin de Morlenc, et l'équipage l'a accueillie avec une dévotion de pèlerins.",
        "Le Bonhomme regarde ton tribut avec dédain. Puis il le prend, quand même. Il te verse une seule goutte d'eau de mer sur la tête, du bout de son trident, et te déclare baptisé{e} par grâce spéciale.",
        "Personne ne se moque de toi. Mais tout l'après-midi, tu regardes les autres sortir de la baille couverts de goudron, en riant, et tu te sens un peu en dehors d'une chose qui était peut-être plus importante qu'un bain. Le soir, Petit-Jules te prête son brevet pour que tu le lises. Il en a deux, puisqu'on l'a plongé trois fois.",
      ],
      choices: [{ label: "Reprendre le service", back: "A3m_jours" }] },
    XV_bapteme_refus: { act: "III", title: "Le Bonhomme Tropique", place: "mer_couchant", ambiance: "mer",
      text: [
        "« J'ai reçu le baptême à Sainte-Anne-des-Grèves, dis-tu, par l'abbé Morisseau, et une fois suffit. »",
        "Un silence. Puis le Bonhomme Tropique se lève de son trône, lentement, de toute sa hauteur, sa barbe d'étoupe au vent, et pointe son trident sur toi. « L'abbé Morisseau, dit-il d'une voix d'outre-tombe, n'a aucune juridiction sous le Tropique ! Saisissez l'hérétique ! »",
        "Huit mains t'empoignent. On te porte à la baille comme un sac, en chantant un cantique de circonstance que Gaudrémont a composé le matin même. On te plonge quatre fois au lieu d'une, une pour toi et trois pour l'abbé Morisseau. On te barbouille de goudron jusqu'aux oreilles. On te rase deux fois.",
        "Quand on te relâche enfin, ruisselant{e}, le Bonhomme te remet ton brevet avec une mention spéciale : *Hérétique repenti{e}, quatre immersions.* C'est le plus beau brevet de l'équipage. Gobert te le dit lui-même, plus tard, sans sa barbe. « Il en faut un comme toi par voyage, dit-il. Sinon, c'est pas drôle. »",
      ],
      choices: [{ label: "Te sécher au soleil", fx: { penche: { gobert: 1 } }, back: "A3m_jours" }] },

    // ---------------------------------------------------------------- the child: the shark
    XV_requin: { act: "III", title: "Le requin", place: "mer_couchant", ambiance: "mer",
      text: [
        "Depuis deux jours, un requin suit la Cormorane. On le voit de la poupe, à quelques brasses dans le sillage, une ombre grise et longue qui ne se presse pas, avec son aileron qui fend l'eau sans un bruit, comme un couteau qui coupe une étoffe. Les matelots disent que c'est mauvais signe. Les matelots disent qu'un requin qui suit un navire sait qu'il y aura un mort à bord.",
        "Lagadec décide de le pêcher. Il prend un croc de fer gros comme un pouce, une chaîne, un filin d'un pouce, et il y accroche un quartier de lard rance. Il le jette à l'arrière. « Tiens la chaîne avec moi, dit-il. Quand il prend, il tire. Fort. »",
        "Le requin tourne autour du lard pendant une heure. Puis il le prend. La chaîne se tend d'un coup, si fort que le filin chante, et vous voilà, Lagadec et toi, arc-boutés contre le couronnement, les talons glissant sur le pont, à tirer contre la mer elle-même.",
        "Il faut six hommes pour le hisser à bord. Il retombe sur le pont avec un bruit de sac de sable, et se débat, et claque des mâchoires, et un matelot qui s'est approché trop près perd la moitié de sa botte. Lagadec l'achève à coups de hache, longuement, méthodiquement, avec un plaisir que tu préfères ne pas regarder.",
        "Puis il l'ouvre, au couteau, pour voir ce qu'il y a dedans. C'est la coutume. Dans le ventre d'un requin, dit-on, on trouve de tout.",
      ],
      choices: [{ label: "Regarder ce qu'il y a dedans", fx: { flag: "bord:requin" }, to: "XV_requin_ventre" }] },
    XV_requin_ventre: { act: "III", title: "Le requin", place: "mer_couchant", ambiance: "mer",
      text: [
        "Il y a de tout, en effet. Des poissons à moitié digérés. Une tortue entière. Un morceau de toile goudronnée. Un collier de chien, en cuir, avec une plaque de cuivre où l'on a gravé un nom effacé par l'acide. Une bouteille vide, bouchée, sans message. Et, tout au fond, une montre.",
        "Une montre de poche en argent, à double boîtier, bossuée, verdie, avec un bout de chaîne. Lagadec la ramasse, l'essuie à sa culotte, l'ouvre. Le cadran est intact. Les aiguilles sont arrêtées à quatre heures moins dix. Dans le couvercle, une inscription gravée : *À mon fils, pour qu'il revienne à l'heure.*",
        "Lagadec la regarde longtemps. Puis il la referme, et la jette à la mer, par-dessus la lisse, sans un mot.",
        "« Pourquoi ? » demandes-tu.",
        "Il hausse les épaules. « Elle est pas à moi. » Il réfléchit. « Et puis, elle porte malheur. Il est jamais revenu à l'heure, le fils. Le requin l'a pas attendu. » Il essuie son couteau. « On mange le requin ce soir. Le cuisinier en fait des beignets. C'est bon, le requin. Ça a le goût de tout ce qu'il a mangé. »",
        "Le soir, tu ne manges pas de beignets. Personne ne te demande pourquoi.",
      ],
      choices: [{ label: "Reprendre le service", back: "A3m_jours" }] },

    // ---------------------------------------------------------------- the child: the log line
    XV_loch: { act: "III", title: "Le loch", place: "mer_couchant", ambiance: "mer",
      text: [
        "Toutes les heures, au son de la cloche, on jette le loch. Gobert te l'apprend, un matin, à la poupe : une planchette de bois lestée de plomb, en forme de quart de cercle, au bout d'une ligne enroulée sur un tour. Sur la ligne, des nœuds, à intervalles réguliers. On jette la planchette, qui reste plantée dans l'eau comme un piquet ; la ligne file ; on retourne le sablier de trente secondes ; et quand le sable est passé, on compte les nœuds qui ont filé.",
        "« Sept nœuds, dit Gobert. La Cormorane fait sept nœuds. Sept milles à l'heure. » Il rembobine la ligne. « Le loch, c'est la seule chose à bord qui dise jamais de mensonge. Le compas ment, quand il y a du fer à côté. Les étoiles mentent, quand il y a des nuages. Le capitaine ment, quand il a peur. Le loch, lui, ne sait que compter. »",
        "Il te fait jeter le loch toi-même, toutes les heures, pendant tout ton quart. Tu comptes les nœuds. Tu notes sur l'ardoise. Lemerle reporte tes chiffres sur sa carte, en traçant une petite ligne au crayon, et la petite ligne avance, heure après heure, vers le sud, sur le grand papier blanc de la mer.",
        "À la fin du quart, tu regardes la ligne que tu as tracée, toi, avec tes nœuds. Elle est droite, régulière, minuscule. Elle va quelque part. C'est la première fois que tu sais exactement où tu es dans le monde, à un mille près, au milieu de rien.",
      ],
      choices: [{ label: "Rendre l'ardoise à Lemerle", fx: { flag: "bord:loch", penche: { lemerle: 1 } }, back: "A3m_jours" }] },

    // ---------------------------------------------------------------- the child: the fight
    XV_rixe: { act: "III", title: "Les dés", place: "mer_couchant", ambiance: "nuit",
      text: [
        "Dans l'entrepont, la nuit, à la lueur d'un fanal sourd, on joue aux dés sur un coffre. C'est interdit. Tout le monde le fait. Ce soir, Coquerel et Daguenet jouent l'un contre l'autre depuis deux heures, et Coquerel perd, et Coquerel a bu.",
        "Daguenet est gabier, jeune, rieur, un des meilleurs de la mâture. Coquerel est matelot, plus âgé, trapu, avec un cou de taureau et une rancune toujours prête, qu'il porte sur lui comme d'autres portent un couteau. Il vient de perdre sa paie du mois. Il ramasse les dés. Il les regarde. Il les soupèse.",
        "« Ils sont pipés », dit-il.",
        "Daguenet rit. Coquerel lui envoie le coffre dans les jambes, et les deux hommes roulent sur le plancher, entre les hamacs, dans un fracas de chopes renversées. Les autres font cercle, sans intervenir. Coquerel a un couteau. Tu le vois briller, une seconde, dans sa main, sous le fanal.",
      ],
      choices: [
        { label: "Courir réveiller Gobert", fx: { penche: { coquerel: -1, daguenet: 1 } }, to: "XV_rixe_gobert" },
        { label: "Renverser le fanal, pour faire le noir", test: { dom: "discretion", diff: 1, label: "Le noir" }, win: { fx: { penche: { coquerel: 1, daguenet: 1 } }, to: "XV_rixe_noir" }, lose: { fx: { penche: { daguenet: 1 } }, to: "XV_rixe_gobert" } },
        { label: "Ne rien faire, comme les autres", fx: { penche: { daguenet: -1 } }, to: "XV_rixe_rien" },
      ] },
    XV_rixe_gobert: { act: "III", title: "Les dés", place: "mer_couchant", ambiance: "nuit",
      text: [
        "Gobert arrive en chemise, pieds nus, une garcette à la main, et il n'a pas besoin de crier. Il frappe. Une fois Coquerel, une fois Daguenet, une fois le coffre aux dés, sans distinction, avec une équité de juge. Le couteau tombe. Les deux hommes se relèvent. Daguenet saigne au bras, une estafilade, rien de grave.",
        "Le lendemain, la capitaine fait mettre Coquerel aux fers pour deux jours, à fond de cale, au pain et à l'eau, pour le couteau. Daguenet, lui, est privé de rhum pour une semaine, pour les dés. Il trouve que c'est cher payé. Il le dit en riant, et te tape sur l'épaule en passant : il sait qui est allé chercher Gobert.",
        "Coquerel le sait aussi. Quand il remonte de la cale, deux jours plus tard, gris, raide, il passe à côté de toi sur le pont, et s'arrête, et te regarde, d'un regard sans colère, attentif, qui prend tes mesures. Puis il passe son chemin. Tu sens ce regard dans ton dos jusqu'à la fin du voyage.",
      ],
      choices: [{ label: "Reprendre le service", back: "A3m_jours" }] },
    XV_rixe_noir: { act: "III", title: "Les dés", place: "mer_couchant", ambiance: "nuit",
      text: [
        "Tu donnes un coup de pied dans le fanal. Il roule, s'éteint. L'entrepont tombe dans un noir absolu, épais, qui sent le suif chaud et la sueur.",
        "Dans le noir, plus personne ne sait où est personne. On entend des jurons, des chocs, des hamacs qui se balancent, quelqu'un qui marche sur quelqu'un d'autre. Le couteau de Coquerel ne sait plus où frapper. Il frappe une poutre, d'après le bruit. Puis des mains attrapent Coquerel, et d'autres Daguenet, et on les sépare, à tâtons, en riant à moitié, parce que dans le noir, tout devient comique, même un couteau.",
        "Quand quelqu'un rallume le fanal, Coquerel est assis contre une barrique, le souffle court, et regarde son couteau planté dans un barrot, à deux pieds au-dessus de sa tête, sans comprendre comment il est arrivé là. Daguenet rit. Puis, au bout d'un moment, Coquerel rit aussi, d'un rire de taureau fatigué.",
        "Personne ne réveille Gobert. Personne ne va aux fers. Le lendemain, Coquerel et Daguenet jouent de nouveau aux dés, avec d'autres dés, sur le même coffre. Coquerel perd encore. Il ne dit rien. Il te regarde, une fois, de loin, et tu ne sais pas lire ce qu'il y a dans ce regard. Il y a peut-être pire que la haine dans ce regard : de la reconnaissance.",
      ],
      choices: [{ label: "Reprendre le service", back: "A3m_jours" }] },
    XV_rixe_rien: { act: "III", title: "Les dés", place: "mer_couchant", ambiance: "nuit",
      text: [
        "Tu restes dans ton hamac, comme les autres, et tu regardes. On regarde toujours, dans un entrepont. C'est le seul spectacle gratuit.",
        "Ça dure une minute, qui est longue. Le couteau monte, descend. Daguenet crie. Puis c'est Pellerin, le vieil ivrogne, qui se lève de son hamac en bâillant, attrape Coquerel par le col avec une force qu'on ne lui soupçonnait pas, et le cogne contre un épontil, une fois, proprement, comme on ouvre une huître. Coquerel s'assied par terre, sonné.",
        "Daguenet a une entaille au flanc, longue, qui saigne beaucoup. On l'emmène à l'infirmerie. Il s'en remettra. En passant devant ton hamac, porté par deux hommes, il te regarde. Il ne dit rien. Il n'a rien à dire : tu étais là, à trois pas, et tu as regardé.",
      ],
      choices: [{ label: "Fermer les yeux, et faire semblant de dormir", back: "A3m_jours" }] },

    // ---------------------------------------------------------------- the child, in the calms: the fires of the sea
    XV_feux: { act: "III", title: "Les feux de la mer", place: "sargues", ambiance: "nuit",
      text: [
        "Une nuit sans lune, dans la marmite, quelqu'un crie à l'avant. Tout le quart se penche à la lisse.",
        "La mer brûle. Autour de la coque, le long des herbes, dans le sillage immobile, l'eau s'est allumée d'une lumière froide, bleu-vert, qui palpite. Chaque vaguelette qui touche la coque s'embrase d'étincelles. Chaque poisson qui passe laisse derrière lui une traînée de feu, comme une comète. Les herbes jaunes, éclairées par en dessous, ondulent comme des chevelures de noyées dans un incendie.",
        "Tu jettes une corde à la mer. Elle s'allume sur toute sa longueur, comme une mèche. Tu la retires ; elle ruisselle de lumière, et tes mains aussi, un instant, deviennent des mains de spectre, phosphorescentes, puis s'éteignent.",
        "Les vieux marins se signent. Lemerle dit que ce sont les âmes des noyés qui sortent prendre l'air quand il fait trop chaud au fond. Le professeur Gaudrémont, en chemise de nuit, à plat ventre sur le beaupré, une fiole à la main, dit que ce sont des animalcules. Ils se disputent jusqu'à l'aube. L'aube leur donne raison à tous les deux, en éteignant tout.",
        "Tu restes accoudé{e} à la lisse jusqu'au bout. Tu as seize ans, et tu viens de voir la mer brûler, et tu sais que personne au Fanal ne te croira, et cela te remplit d'une joie avare, absolue, que tu garderas pour toi.",
      ],
      choices: [{ label: "Aller dormir, enfin", fx: { flag: "bord:feux" }, back: "A3n_jours" }] },

    // ---------------------------------------------------------------- the doctor: the fall from the yard
    XV_chute: { act: "III", title: "La chute", place: "cormorane", ambiance: "mer",
      text: [
        "Un cri, en haut. Puis un bruit sourd sur le pont, comme un sac de blé qu'on lâche.",
        "Quand Victorine arrive, en courant, sa trousse à la main, l'homme est couché sur le dos au pied du grand mât, les yeux ouverts, le visage gris. Mathurin Le Gall, gabier, trente ans, tombé de la grand-vergue en serrant un ris. Vingt pieds. Il a eu la chance de tomber sur un rouleau de cordage. Il a eu la malchance que sa jambe gauche tombe à côté.",
        "La cuisse est cassée. Victorine le voit avant même de toucher : la jambe fait un angle là où il n'en faut pas, à mi-cuisse, et sous la toile de la culotte, déchirée, un bout d'os blanc a percé la peau. Fracture ouverte du fémur. À terre, dans un hôpital, avec du temps, on en meurt une fois sur deux. En mer, sous ce soleil, avec la gangrène qui se lève comme une mauvaise herbe dans la chaleur, on en meurt plus souvent.",
        "Le Gall la regarde. Il ne crie pas. Il a les yeux d'un homme qui a compris aussi vite qu'elle. « Coupez, dit-il. Je préfère vivre avec une jambe. »",
        "Elle pourrait couper. Ce serait plus sûr. Ce serait rapide. Il vivrait, probablement, et il serait mendiant à Morlenc dans un an, sur une jambe de bois, à la porte d'une église. Ou elle pourrait réduire la fracture, ici, sur le pont, tirer la jambe dans l'axe, remettre l'os, attelle, traction, et prier pour que la plaie ne pourrisse pas.",
      ],
      choices: [
        { label: "Réduire, et sauver la jambe", test: { dom: "savoir", diff: 2, label: "Un fémur ouvert, en mer" }, win: { fx: { flag: "bord:jambe_sauvee" }, to: "XV_chute_jambe" }, lose: { fx: { flag: "bord:jambe_coupee" }, to: "XV_chute_gangrene" } },
        { label: "Couper, comme il le demande", fx: { flag: "bord:jambe_coupee" }, to: "XV_chute_coupe" },
      ] },
    XV_chute_jambe: { act: "III", title: "La chute", place: "cormorane", ambiance: "mer",
      text: [
        "Elle fait coucher Le Gall sur une porte, à l'ombre de la chaloupe, et donne à quatre hommes une épaule, un bassin, une jambe saine et une corde. Puis elle tire. Elle tire de tout son poids, le pied du blessé calé contre sa hanche, pendant que les muscles de la cuisse, tendus comme des câbles, résistent. Le Gall hurle, enfin, une fois, longuement. L'os rentre. On l'entend rentrer.",
        "Elle lave la plaie à l'eau-de-vie, la débride, la laisse ouverte sous une compresse, pour qu'elle coule. Elle fabrique avec le charpentier Fréville une attelle de bois, de la hanche au talon, et une poulie au pied, avec un boulet de quatre livres au bout, pour tirer la jambe dans l'axe pendant six semaines. Le charpentier, ravi, appelle l'appareil sa machine.",
        "Pendant dix jours, la plaie hésite. Elle rougit, elle gonfle, elle sent. Victorine la nettoie trois fois par jour, l'incise, la draine, la lave, en jurant à mi-voix, en latin, ce qui impressionne le blessé. Le onzième jour, la rougeur recule. Le quinzième, la plaie est rose et propre.",
        "Mathurin Le Gall remarchera. Il boitera toute sa vie, d'une jambe plus courte de deux pouces. Il remontera dans la mâture, un jour, plus lentement que les autres. Le soir, dans l'entrepont, il fait voir sa cicatrice à tout le monde, et dit que la médecin a tiré sur sa jambe comme sur une drisse, et qu'il ne savait pas qu'une femme pouvait tirer comme ça.",
      ],
      choices: [{ label: "Remonter sur le pont", back: "A3v_jours" }] },
    XV_chute_gangrene: { act: "III", title: "La chute", place: "cormorane", ambiance: "mer",
      text: [
        "Elle réduit. L'os rentre. Elle attelle, elle lave, elle draine. Pendant quatre jours, elle croit qu'elle a gagné.",
        "Le cinquième jour, l'odeur vient. Douce, écœurante, une odeur de fruit trop mûr, qu'elle reconnaîtrait les yeux fermés dans une salle de cent malades. Elle défait la compresse. Autour de la plaie, la peau a noirci, et le noir monte, en traînées violettes, vers l'aine.",
        "Elle coupe le soir même, au-dessus du genou, aussi haut qu'elle ose, pendant que Gobert et Fréville tiennent le blessé, et que Le Gall, ivre de rhum et de laudanum, chante une chanson de Lannoz entre ses dents serrées. Elle coupe vite. Elle a toujours coupé vite. Le chirurgien qui l'a appris à Morlenc chronométrait ses amputations, et elle le battait.",
        "Le Gall vivra. Avec une jambe. Il lui dit, quelques jours plus tard, d'une voix faible, en regardant le moignon : « Je vous avais dit de couper. » Sa voix est sans reproche, pleine d'une gentillesse qui fait plus mal.",
      ],
      choices: [{ label: "Remonter sur le pont", back: "A3v_jours" }] },
    XV_chute_coupe: { act: "III", title: "La chute", place: "cormorane", ambiance: "mer",
      text: [
        "Elle coupe. Sur le pont, à l'ombre de la chaloupe, sur une porte posée sur deux barriques, avec Gobert et Fréville qui tiennent, et Le Gall, ivre de rhum, qui mord un morceau de cuir. Garrot. Incision circulaire. Scie. Ligature. Lambeau. Huit minutes. Le chirurgien qui l'a appris à Morlenc chronométrait ses amputations ; elle le battait.",
        "La jambe, on la jette à la mer, enveloppée dans un bout de toile, avec un boulet, parce que Le Gall a demandé qu'on ne la donne pas au requin qui suit le navire. Gobert dit une prière. Elle est courte. Il n'en connaît pas de plus longue.",
        "Le Gall vit. Le moignon guérit bien, proprement, sans fièvre. Dans six semaines, Fréville lui taillera une jambe de bois dans un bout d'espar, et il clopinera sur le pont en sifflant.",
        "Victorine sait qu'elle a choisi la sûreté. Elle sait aussi qu'elle n'a pas essayé. Ces deux savoirs logent côte à côte dans sa tête, comme deux pensionnaires qui ne se parlent pas, et elle les entend respirer la nuit.",
      ],
      choices: [{ label: "Remonter sur le pont", back: "A3v_jours" }] },

    // ---------------------------------------------------------------- the doctor: the captain's secret
    XV_ribaud: { act: "III", title: "Le secret de la capitaine", place: "cormorane", ambiance: "mer",
      text: [
        "Le troisième jour de grosse mer, la capitaine Ribaud ne paraît pas au dîner. Elle fait dire qu'elle travaille sur ses cartes. Le quatrième jour non plus. Le second, Benoît Quémeneur, prend le quart du matin à sa place, avec une mine de confesseur.",
        "Victorine frappe à la cabine de la capitaine, le soir, sous un prétexte, une liste de médicaments à signer. On lui crie d'entrer d'une voix étranglée.",
        "La cabine est sens dessus dessous. Les cartes ont glissé de la table. La lampe se balance à son crochet. Et la capitaine, Solange Ribaud, trente ans de mer, vingt navires, deux naufrages, une médaille de l'Amirauté et une réputation de granit dans tous les ports du Couchant, est assise par terre, le dos contre sa couchette, verte, en sueur, une cuvette entre les genoux.",
        "Elle lève les yeux vers Victorine. Elle a l'air d'une assassin prise sur le fait.",
        "« Le mal de mer, dit-elle. Trois jours, chaque fois que ça forcit. Depuis trente ans. » Elle se penche sur la cuvette. Quand elle se redresse, elle a les yeux humides et la voix ferme. « Si un seul homme de cet équipage l'apprend, Madame, je vous fais pendre à la grand-vergue. Je n'aurai pas le droit, mais je trouverai. »",
      ],
      choices: [
        { label: "Lui préparer une infusion de gingembre, et se taire", fx: { flag: "ribaud:secret", regard: { ribaud: "cordial" } }, to: "XV_ribaud_tait" },
        { label: "Lui dire que l'équipage s'en doute déjà", fx: { flag: "ribaud:secret" }, to: "XV_ribaud_dit" },
      ] },
    XV_ribaud_tait: { act: "III", title: "Le secret de la capitaine", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine ne dit rien. Elle descend à l'infirmerie, revient avec une racine de gingembre, du miel, un petit réchaud, et prépare une infusion, à genoux sur le plancher qui tangue, pendant que la capitaine la regarde faire d'un œil soupçonneux, comme on regarde un empoisonneur.",
        "Elle lui tend la tasse. La capitaine boit. Elle grimace. Elle boit encore. Au bout d'une demi-heure, ses joues ont repris une couleur à peu près humaine, et elle s'est assise sur sa couchette, au lieu d'en dessous.",
        "« Je ne vous remercierai pas, dit-elle.",
        "— Je n'en attendais pas tant, Capitaine. »",
        "Le lendemain, la capitaine Ribaud paraît sur la dunette à l'aube, droite, sèche, le porte-voix à la main, et engueule le timonier pour une demi-quart d'écart, d'une voix qui porte jusqu'au beaupré. Au passage, sans tourner la tête, elle demande à Victorine si elle a encore de cette racine. Elle en a. Elle en aura jusqu'à la fin du voyage.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", back: "A3v_jours" }] },
    XV_ribaud_dit: { act: "III", title: "Le secret de la capitaine", place: "cormorane", ambiance: "mer",
      text: [
        "« Capitaine, dit Victorine, vos hommes savent. Ils savent depuis le premier jour de grosse mer. Ils le savaient avant d'embarquer, d'ailleurs, puisque la moitié a navigué avec vous. »",
        "La capitaine la regarde, la bouche ouverte, la cuvette oubliée.",
        "« Ils appellent ça les trois jours de la vieille, continue Victorine. Ils prennent le quart en silence, ils marchent sur la pointe des pieds devant votre porte, et Gobert interdit qu'on en parle, sous peine de garcette. Ils vous aiment, Capitaine. C'est très embarrassant pour eux, et ils le cachent aussi bien que vous cachez votre cuvette. »",
        "Un long silence. Puis la capitaine Ribaud éclate de rire. Un rire énorme, enroué, qui finit dans la cuvette. Quand elle se redresse, elle a les larmes aux yeux, et ce n'est pas seulement le mal de mer.",
        "« La vieille, dit-elle. Ces chiens. » Elle s'essuie la bouche. « Envoyez-moi Gobert. Non. Ne m'envoyez personne. Laissez-moi mourir en paix, et revenez demain avec un remède, si la Faculté en a inventé un depuis trente ans. »",
      ],
      choices: [{ label: "Aller chercher du gingembre", back: "A3v_jours" }] },

    // ---------------------------------------------------------------- the doctor, in the calms: the rats
    XV_rats: { act: "III", title: "Les rats", place: "sargues", ambiance: "nuit",
      text: [
        "Dans la marmite, avec la chaleur, les rats sortent. Ils étaient là depuis Morlenc, discrets, dans la cale, entre les barriques, à grignoter le biscuit et à se reproduire avec l'application de bons bourgeois. La chaleur les rend fous. Ils montent. On les voit courir sur les barrots, la nuit, dans l'entrepont, au-dessus des hamacs. Ils mordent les orteils des dormeurs. Ils ont mangé, en une nuit, le cuir d'une paire de bottes et la moitié d'une Bible.",
        "Un matin, un mousse de la cambuse apporte à l'infirmerie un rat mort, trouvé dans le biscuit. Victorine le regarde. Il a le ventre gonflé, et sous l'aisselle, une grosseur dure, noire, de la taille d'une noisette.",
        "Elle sait ce que c'est, peut-être. Elle a lu les récits de la grande peste de Morlenc, il y a cent ans. Elle ne l'a jamais vu. Elle espère se tromper, et elle sait que l'espoir n'est pas une méthode.",
        "La capitaine l'écoute en silence. Puis elle demande : « Qu'est-ce qu'il vous faut ? »",
      ],
      choices: [
        { label: "Le chat du professeur, et tous les chats du bord", fx: { flag: "bord:rats_chat" }, to: "XV_rats_chat" },
        { label: "De l'arsenic dans le biscuit, et la cale fermée trois jours", fx: { flag: "bord:rats_poison" }, to: "XV_rats_poison" },
      ] },
    XV_rats_chat: { act: "III", title: "Les rats", place: "sargues", ambiance: "nuit",
      text: [
        "Il y a trois chats à bord : celui de la cambuse, un vieux matou roux, borgne, obèse, qui n'a pas chassé depuis le règne précédent ; celui de la capitaine, une chatte grise qui ne quitte pas la cabine ; et celui du professeur Gaudrémont, un angora blanc nommé Linné, qui voyage dans une cage d'osier et mange du poisson cuit dans une assiette de porcelaine.",
        "Victorine les fait descendre tous les trois dans la cale. Le professeur proteste. Il dit que Linné est un animal de laboratoire, pas un ouvrier. La capitaine lui dit que tout le monde travaille, à bord, même les savants, même les chats de savants.",
        "Le vieux matou roux ne fait rien. Il s'endort sur une barrique. La chatte grise tue onze rats en deux nuits, proprement, à la nuque, et les aligne devant la porte de la capitaine, comme une offrande. Et Linné, l'angora blanc, le chat de porcelaine, se révèle un tueur d'une férocité inouïe, qui remonte de la cale à l'aube, gris de suie, une oreille déchirée, avec un rat dans la gueule presque aussi gros que lui, et le dépose aux pieds du professeur, qui manque s'évanouir d'orgueil.",
        "Aucun autre rat n'a de grosseur sous l'aisselle. Victorine ne saura jamais si elle s'était trompée, ou si les chats ont été plus rapides que le mal. Elle choisit de croire aux chats.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", back: "A3w_jours" }] },
    XV_rats_poison: { act: "III", title: "Les rats", place: "sargues", ambiance: "nuit",
      text: [
        "Elle fait monter tout le biscuit sur le pont, au soleil, et trier, miette par miette, par trois hommes et Petit-Jules. Elle prépare dans un mortier, avec de l'arsenic de sa pharmacie et du suif, des boulettes, qu'elle fait glisser dans la cale, partout, entre les barriques. On ferme les écoutilles. On attend trois jours.",
        "Quand on rouvre, l'odeur monte avant la lumière. Une odeur douceâtre, épaisse, qui fait reculer les hommes. Il faut une journée entière pour sortir les cadavres, à la pelle, par centaines, et les jeter à la mer, où les poissons ne les touchent pas.",
        "Le problème, c'est que les rats morts sont aussi dans les endroits où on ne peut pas aller : entre les membrures, sous le vaigrage, dans les fonds. Pendant tout le reste du voyage, la Cormorane sent le rat crevé. Les matelots disent qu'elle sent le cimetière. Gobert dit qu'elle sent la médecine.",
        "Mais il n'y a plus de rats. Et aucun homme n'a de grosseur sous l'aisselle. Victorine ne saura jamais si elle s'était trompée. Elle préfère ne pas le savoir, en respirant, chaque matin, l'odeur de son remède.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", back: "A3w_jours" }] },
  },
  extras: {},
};
