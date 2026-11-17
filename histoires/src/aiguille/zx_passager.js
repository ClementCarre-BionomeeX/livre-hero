// L'Île Folle-Aiguille · side story in three parts « Le passager de la soute » (owes its question to Huckleberry Finn:
// will you break the law of everyone you respect for a friend the law says you must give up?). Act II, Morlenc: Erwan,
// thirteen, foundling rented by the Hospital to a ropemaker who beats him, begs the child to hide him aboard. The
// child hides him in the sail-locker (zx:cache) or refuses (zx:refus). Act III, on the way to Brisegrève: Gobert finds
// him. The child says « it was me », lets him take it alone, or takes him to the captain first. The first and
// the last make him a ship's boy (zx:engage); silence lands him at Brisegrève (zx:debarque).
// Act V, on the beach: Erwan wants to stay on the island. The child helps him (zx:reste) or talks him into the boat
// (zx:part). Wired in A2m_jours, A3m_jours, A5o_debut.
module.exports = {
  passages: {
    ZX_corderie: { act: "II", title: "Le passager de la soute", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "erwan" },
      text: [
        "La corderie Ropars est un hangar de trois cents pas de long, au bord du marais, où des hommes marchent à reculons toute la journée en filant du chanvre qu'ils tirent de leur ventre, comme des araignées. Au bout du hangar, une roue. À la roue, un enfant qui la tourne, tourne, tourne, du matin au soir, pour tordre les torons. Quand il ralentit, le contremaître lui donne un coup de bout de corde sur les jambes, sans méchanceté particulière, comme on fouette un âne.",
        "Il s'appelle Erwan. Treize ans, petit, roux, maigre, les jambes zébrées de marques violettes. Il est de l'Hôpital des Enfants-Trouvés, qui le loue à Ropars quatre sous la semaine, comme on loue une charrette. Il te voit passer, un soir, avec Gobert, quand on vient prendre livraison des drisses de la Cormorane. Il te suit jusqu'au quai. Il t'attrape la manche dans l'ombre d'une pile de bois.",
        "« Ton navire, il part loin ? » Tu dis oui. Très loin. « Cache-moi dedans. Je ne mange presque rien. Je tiens dans un tonneau. Je sais faire des nœuds, tous. Personne ne me cherchera, à part Ropars, et Ropars, il cherchera un mois, et après il en louera un autre. » Il te montre ses jambes. « Encore un an de roue, et je serai bossu. Ils le sont tous, à la fin. »",
        "Tu sais ce que c'est. C'est un vol : l'Hôpital l'a loué, Ropars l'a payé, il est à eux. Cacher un enfant loué, c'est cacher une charrette volée, au regard de la loi. Gobert te ferait fouetter. La capitaine te débarquerait. Et tout le monde, à la Pointe, ton père le premier, te dirait que la loi, c'est la loi, et qu'un mousse ne se mêle pas de ça.",
      ],
      choices: [
        { label: "Le cacher, la nuit, dans la soute aux voiles", fx: { flag: "zx:cache" }, to: "ZX_soute" },
        { label: "Lui dire que tu ne peux pas", fx: { flag: "zx:refus" }, to: "ZX_refus" },
      ] },
    ZX_soute: { act: "II", title: "Le passager de la soute", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu le fais monter la nuit, à la marée de deux heures, quand le quai dort et que le matelot de garde ronfle sur un rouleau de câble. Il grimpe à la chaîne d'ancre comme un écureuil. Tu le mènes, pieds nus, par l'écoutille avant, jusqu'à la soute aux voiles, sous le gaillard, où dorment les voiles de rechange, pliées, énormes, qui sentent le chanvre et le suif. Tu lui fais un trou entre deux huniers. Il s'y glisse, s'y roule en boule, et il rit, sans bruit, de bonheur, dans le noir.",
        "Tu lui portes à manger chaque nuit, ce que tu voles à ta gamelle : un quart de biscuit, un bout de lard, de l'eau dans une bouteille. Il ne se plaint jamais. Il dit que c'est le plus beau lit qu'il ait eu de sa vie, et que les voiles parlent la nuit, quand le navire bouge à quai, comme des grandes bêtes qui rêvent.",
        "Le jour de l'appareillage, au moment où la Cormorane déborde, tu l'entends, à travers le pont, sous tes pieds, qui chante. Très bas. Une chanson de l'Hôpital, une prière. Tu tapes du talon, deux fois. Il se tait. Tu as le cœur qui bat comme un tambour. Tu viens de voler un enfant à toute une ville, et la ville s'éloigne, et personne n'en sait rien.",
      ],
      choices: [{ label: "Reprendre ta corvée sur le quai", back: "A2m_jours" }] },
    ZX_refus: { act: "II", title: "Le passager de la soute", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu dis que tu ne peux pas. Tu dis que Gobert fouille partout, que la capitaine débarque les clandestins à la première escale, que tu ne veux pas d'histoires. Tu le dis bien, avec des raisons. Il écoute les raisons, en hochant la tête, très poliment, comme on écoute un sermon dont on connaît la fin.",
        "Puis il te lâche la manche. « Ça ne fait rien, dit-il. Je demanderai à un autre. » Il s'en va vers le marais, vers la corderie, en boitant un peu, entre les piles de bois, et la nuit l'avale.",
        "Le lendemain, en passant devant la corderie avec Gobert, tu regardes par la porte ouverte du hangar. Au bout, à la roue, un enfant roux tourne, tourne, tourne. Il ne lève pas la tête. Il y a une marque de plus sur ses jambes, toute fraîche. Gobert, à côté de toi, dit qu'il faut presser le pas, que les drisses n'attendent pas.",
      ],
      choices: [{ label: "Reprendre ta corvée sur le quai", fx: { quest: "ZX" }, back: "A2m_jours" }] },
    ZX_trouve: { act: "III", title: "Le passager de la soute", place: "cormorane", ambiance: "mer",
      text: [
        "C'est Gobert qui le trouve, le neuvième jour, en descendant chercher un hunier de rechange après un coup de vent. Tu entends le cri depuis le gaillard : un cri de surprise, puis un juron énorme, puis la grosse voix du bosco qui hurle ton nom, pas celui d'un autre, ton nom, comme s'il savait déjà.",
        "Quand tu arrives, Erwan est debout sur le pont, tenu au collet par le poing de Gobert, clignant des yeux dans le soleil comme un hibou qu'on a tiré de son trou, sale, pâle, avec ses jambes zébrées. Tout l'équipage fait cercle. Personne ne rit. Un passager clandestin, en mer, c'est une bouche de plus, de l'eau en moins, et la malchance à bord, disent les anciens. On en a jeté à la mer, autrefois, pour moins.",
        "Gobert te regarde. « Un gamin ne tient pas neuf jours dans une soute sans manger, dit-il lentement. Quelqu'un l'a nourri. » Il te regarde toujours. Erwan, au bout de son poing, te regarde aussi. Il ne dit rien. Il a décidé de ne rien dire. Ça se voit à sa mâchoire.",
        "Derrière Gobert, sur la dunette, la capitaine Ribaud est sortie de sa chambre, et descend l'échelle, sans se presser.",
      ],
      choices: [
        { label: "« C'est moi. Je l'ai caché, à Morlenc. »", to: "ZX_aveu" },
        { label: "Ne rien dire, et laisser Erwan se taire tout seul", to: "ZX_nie" },
        { label: "Prendre Erwan par la main, et aller au-devant de la capitaine", to: "ZX_capitaine" },
      ] },
    ZX_aveu: { act: "III", title: "Le passager de la soute", place: "cormorane", ambiance: "mer",
      text: [
        "Tu le dis. Tout l'équipage se tourne vers toi. Gobert ne lâche pas Erwan, mais son poing se desserre un peu. La capitaine arrive, écoute, et te regarde, de ce regard gris qui pèse sur la nuque. « Pourquoi ? » demande-t-elle. Tu lui montres les jambes d'Erwan. Tu dis : la roue.",
        "Elle regarde les jambes. Elle regarde Gobert, qui regarde ailleurs. « Le vol d'un enfant loué par l'Hôpital, dit-elle, c'est trois ans de bagne, à Morlenc. Pour toi. Et pour moi, si je le ramène et qu'on demande qui l'a laissé monter. » Elle se tait. Elle réfléchit, en tapotant sa jambe avec sa longue-vue. « Je n'ai pas de clandestin à bord. J'ai un novice, engagé à Morlenc, que le commis a oublié d'inscrire. Commis ! Inscrivez. »",
        "Le commis aux vivres, un homme sans humour, inscrit, en demandant comment ça s'écrit, Erwan. Gobert lâche le collet. Il dit qu'il prend le novice dans sa bordée, et qu'il le fera travailler comme une bête, et qu'il ne veut pas l'entendre se plaindre. Puis, à toi, à voix basse, en passant : « Toi, tu feras ses quarts de nuit pendant une semaine, en plus des tiens. Pour le biscuit. »",
        "Erwan, le soir, dans l'entrepont, s'allonge dans un vrai hamac pour la première fois de sa vie. Il dit qu'il ne dormira pas, que c'est trop beau. Il dort en trente secondes.",
      ],
      choices: [{ label: "Prendre ton premier quart de nuit en trop", fx: { flag: "zx:engage" }, back: "A3m_jours" }] },
    ZX_capitaine: { act: "III", title: "Le passager de la soute", place: "cormorane", ambiance: "mer",
      text: [
        "Tu traverses le cercle. Tu prends la main d'Erwan, qui est sale et glacée, et tu l'arraches au poing de Gobert, qui est si surpris qu'il le lâche. Et tu marches avec lui au-devant de la capitaine, devant tout l'équipage, jusqu'au pied de l'échelle de la dunette, où tu t'arrêtes, et tu lèves la tête.",
        "Tu dis tout. Morlenc, la corderie, la roue, les jambes, la soute, le biscuit. Tu ne demandes rien. Tu dis seulement que c'est toi, que c'est ta faute, et que tu acceptes la punition, quelle qu'elle soit, mais que lui n'y est pour rien, qu'il est venu parce que tu as dit oui.",
        "La capitaine Ribaud t'écoute jusqu'au bout. Elle a un drôle de visage, à la fin, que tu ne lui connaissais pas. Elle dit, assez fort pour que tout le pont entende : « Un mousse qui vient se dénoncer lui-même, devant tout l'équipage, au lieu d'attendre qu'on le trouve. J'en ai vu un, une fois, il y a vingt ans. Il est devenu capitaine. » Elle se tourne vers le commis. « Inscrivez le petit comme novice, engagé à Morlenc. L'autre, privé de rhum jusqu'à Brisegrève. » Il n'y a pas de rhum pour les mousses. Tout le monde le sait. Des matelots rient. Gobert crache par-dessus bord, avec un air de profonde satisfaction.",
      ],
      choices: [{ label: "Retourner au travail, avec un novice dans les jambes", fx: { flag: "zx:engage" }, back: "A3m_jours" }] },
    ZX_nie: { act: "III", title: "Le passager de la soute", place: "cormorane", ambiance: "mer",
      text: [
        "Tu te tais. Gobert attend. Erwan aussi. La capitaine arrive, demande qui, demande comment, et personne ne répond, ni toi, ni lui. Erwan dit qu'il s'est caché tout seul, qu'il a volé le biscuit dans la cambuse, la nuit, qu'il connaît le chemin. Il ment mal. Tout le monde voit qu'il ment. Personne ne te regarde. Tu as l'impression qu'on ne regarde que toi.",
        "La capitaine dit qu'on le débarquera à Brisegrève, au gouverneur, qui le renverra à Morlenc par le prochain navire de l'État, avec un rapport. En attendant, aux fers, à fond de cale. Il descend l'échelle de la cale sans se retourner, entre deux matelots, en boitant un peu.",
        "Tu lui portes à manger, la nuit, à fond de cale. Il te remercie. Il ne te reproche rien. Il dit que c'était normal, que tu avais ta place à garder, qu'à l'Hôpital on apprend ça tout petit : chacun pour soi, et on ne dénonce personne. Il dit que tu as été bien, de le cacher neuf jours. Que c'était les neuf meilleurs jours de sa vie. Tu remontes. Tu as envie de vomir. À Brisegrève, on le débarque, entre deux soldats, et il te fait un signe de la main, depuis le canot, sans rancune, ce qui est pire que tout.",
      ],
      choices: [{ label: "Retourner au travail", fx: { quest: "ZX", flag: "zx:debarque" }, back: "A3m_jours" }] },
    ZX_plage: { act: "V", title: "Le passager de la soute", place: "anse_morte", ambiance: "mer",
      text: [
        "Erwan te trouve sur la plage, au chant du rocher. Il a changé, en quelques semaines. Il a pris des joues, du soleil, des épaules. Ses jambes ont perdu leurs marques violettes ; on n'y voit plus que de vieilles traces blanches, comme des fils. Il a passé le siège à porter de l'eau, à charger les mousquets, à courir sous les balles avec une audace de chat, et les hommes l'appellent maintenant *le Rouquin* avec une sorte de respect.",
        "Il s'assied à côté de toi. Il regarde la mer. Il dit, sans te regarder : « Je reste. » Il a parlé à des gens de l'île. Il a trouvé un endroit, dans la Sylve, ou au Haut-Verger, peu importe, où personne ne le louera jamais à personne. « Là-bas, à Morlenc, je suis à l'Hôpital. Je suis à Ropars. Je suis à quelqu'un. Même engagé, je suis au navire. Ici, je ne suis à personne. Il n'y a même pas de mot pour ça, ici. »",
        "Tu sais que la capitaine ne le laissera pas. Un novice inscrit au rôle qui reste sur une île, c'est un déserteur, et un déserteur, à Morlenc, on le pend, ou on pend celui qui l'a laissé faire. Tu sais aussi qu'il a raison. Tu sais que tu es le seul à qui il l'ait dit.",
      ],
      choices: [
        { label: "L'aider à disparaître dans la Sylve, avant qu'on fasse l'appel", fx: { flag: "zx:reste" }, to: "ZX_reste" },
        { label: "Le convaincre de monter dans la chaloupe", fx: { flag: "zx:part" }, to: "ZX_part" },
      ] },
    ZX_reste: { act: "V", title: "Le passager de la soute", place: "anse_morte", ambiance: "mer",
      text: [
        "Vous le faites ensemble, comme à Morlenc, comme pour la soute. Tu vas chercher son sac à la chapelle, pendant qu'il attend derrière les cocotiers. Tu y mets du biscuit, un couteau, une ligne et des hameçons, ta propre couverture. Tu lui donnes le tout à la lisière de la Sylve. Il le prend. Il te regarde. Il ne sait pas comment on dit au revoir. On ne le lui a jamais appris. Il te serre la main, très fort, comme un homme, et il entre dans la forêt, et la forêt se referme.",
        "À l'appel, sur la plage, quand le commis dit *Erwan*, personne ne répond. Le commis répète. Gobert, à côté de toi, regarde la forêt, longtemps. Puis il dit, d'une voix de bosco, très forte, sans te regarder : « Le novice est tombé de la falaise, hier, en cherchant des œufs. Je l'ai vu. Il est mort. » Le commis le regarde. La capitaine le regarde. Gobert soutient le regard de la capitaine. Elle dit : « Inscrivez. Tombé de la falaise. Paix à son âme. » Et elle s'en va vers la chaloupe.",
        "Gobert, en montant dans la chaloupe, te marche sur le pied, exprès, de tout son poids. Il ne dit rien. C'est la plus belle chose qu'il t'ait jamais faite.",
      ],
      choices: [{ label: "Regarder la mer encore un peu", fx: { quest: "ZX" }, back: "A5o_debut" }] },
    ZX_part: { act: "V", title: "Le passager de la soute", place: "anse_morte", ambiance: "mer",
      text: [
        "Tu lui parles longtemps. Tu lui dis qu'un engagé n'est pas un loué, qu'un novice gagne une solde, qu'au bout de trois voyages on est matelot, au bout de dix, on choisit son navire, qu'on n'est jamais à personne, sur la mer, quand on sait son métier. Tu lui dis que l'île, c'est beau, mais que l'île est à quelqu'un aussi, au Vieux, aux Fondeurs, à la mer. Tu ne sais pas si tu y crois. Tu le dis bien.",
        "Il t'écoute. Il ramasse une poignée de sable, la laisse couler entre ses doigts. Il dit : « Tu crois que je serai matelot ? » Tu dis oui. Il dit : « Et capitaine ? » Tu dis : pourquoi pas. Il rit. Il dit que tu mens comme un curé, mais que tu mens bien.",
        "Il monte dans la chaloupe, avec les autres, son sac sur l'épaule, et il prend un aviron sans qu'on le lui demande. Il regarde l'île s'éloigner, jusqu'au bout, sans rien dire. Puis il se retourne vers le large, et il ne regarde plus en arrière. Tu ne sais pas si tu viens de le sauver ou de lui reprendre la seule chose qu'il ait jamais eue. Tu sais qu'il te fait confiance. C'est lourd, la confiance d'un enfant de l'Hôpital. On ne la reçoit pas deux fois.",
      ],
      choices: [{ label: "Regarder la mer encore un peu", fx: { quest: "ZX" }, back: "A5o_debut" }] },
  },
  extras: {
    people: {
      erwan: { name: "Erwan", aka: ["le Rouquin", "le passager de la soute"], qui: "Un enfant trouvé de treize ans, loué par l'Hôpital à la corderie Ropars, à Morlenc." },
    },
    quests: [
      { id: "ZX", act: "II", kind: "annexe", title: "Le passager de la soute", start: "ZX_corderie", doit: "huckleberry", echo: ["zx:cache", "zx:refus", "zx:engage", "zx:debarque", "zx:reste", "zx:part"] },
    ],
  },
};
