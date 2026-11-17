// L'Île Folle-Aiguille · side story « L'affaire du poisson » (owes its question to The Duel: what is the honour that
// makes two grown men fight over nothing, and should one save them from it?). Act III, on the way to Brisegrève: at the
// captain's table, the baron calls a fish of the professor's « a badly salted cod ». The professor slaps him with his
// napkin. The baron demands satisfaction: pistols, at dawn, on the forecastle, at twelve paces. Both ask Victorine to be
// the surgeon of the field. She attends as surgeon and lets honour run its course (wy:temoin), loads the pistols herself
// with powder and no ball (wy:poudre), or goes to the captain so that she forbids it (wy:capitaine). Wired in A3v_jours.
module.exports = {
  passages: {
    WY_serviette: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "mer",
      text: [
        "Tout commence par un poisson. Le professeur Gaudrémont l'a pêché l'avant-veille, au filet traînant, par quarante brasses : une bête bleue, lourde, cuirassée d'écailles épaisses comme des ongles, avec des nageoires qui ressemblent à de petits bras, et une gueule d'avocat général. Il l'a mise dans l'alcool. Il l'a montrée à tout le monde. Il a déclaré à table, au dîner de la capitaine, que c'était une espèce qu'on croyait éteinte depuis le Déluge, et que ce poisson ferait plus pour sa gloire que vingt ans de mémoires à l'Académie.",
        "Le baron Clavières, qui avait bu, a regardé le bocal avec son lorgnon, longtemps, et il a dit : « Mon cher, c'est une morue mal salée. » La table a ri. Le professeur est devenu violet. Il a dit que le baron était un marchand de sucre qui ne reconnaîtrait pas un poisson d'un notaire, ce qui, a-t-il ajouté, n'était pas étonnant, vu ses fréquentations. Le baron a cessé de rire. Le professeur, emporté par son élan, lui a jeté sa serviette au visage.",
        "Il y a eu un silence d'église. Puis le baron s'est levé, a essuyé sa joue avec son mouchoir, et a dit, d'une voix très douce, qu'il attendrait le professeur demain, à l'aube, sur le gaillard d'avant, avec ses pistolets, à douze pas. Le professeur a dit qu'il y serait. La capitaine, au bout de la table, a continué de manger sa soupe. Puis, l'un après l'autre, les deux hommes se sont tournés vers Victorine, et lui ont demandé, avec la même courtoisie glacée, si elle voudrait bien leur faire l'honneur d'être leur chirurgien.",
      ],
      choices: [{ label: "Passer la nuit à réfléchir, dans l'infirmerie", to: "WY_nuit" }] },
    WY_bocal: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "nuit",
      text: [
        "Le bocal est sur la table de la grand-chambre, là où il était au moment de la serviette, et personne n'a osé y toucher depuis, comme on laisse en place l'arme d'un crime. Victorine approche sa lanterne. Le poisson flotte dans l'alcool, la gueule ouverte, entre deux eaux, et la lumière lui rend des couleurs qu'il n'avait plus.",
        "Ce n'est pas une morue. C'est l'évidence même, à la lanterne : une bête bleue, d'un bleu de nuit d'orage, cuirassée d'écailles épaisses comme des ongles, avec des nageoires charnues, presque des pattes, qui pendent sous le ventre comme les bras d'un noyé. Une gueule de vieillard, triste et lippue. Des yeux énormes, ronds, faits pour un fond où la lumière n'arrive pas. Elle a l'air d'appartenir à un autre âge de la terre, et d'en être revenue par erreur.",
        "Collée au bocal, une étiquette, de la grosse écriture du professeur, encore humide de l'encre de l'avant-veille : un nom latin de quatre mots, une date, une profondeur, et cette mention, soulignée trois fois : « Espèce nouvelle. » En dessous, plus petit, d'une encre plus fraîche, d'une main qui a tremblé : « Cause d'un duel. »",
        "Victorine regarde le poisson, et le poisson la regarde, avec ses yeux de grand fond. Elle pense que deux hommes vont risquer leur vie, à l'aube, pour une bête que l'un a sortie de quarante brasses et que l'autre a appelée morue. Elle pense que si le poisson pouvait rire, il le ferait. Elle remet la lanterne au crochet.",
      ],
      choices: [
        { back: "WY_nuit", label: "Revenir à sa cabine, où l'on attend sa réponse" }
      ] },
    WY_etui: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "nuit",
      text: [
        "L'étui est posé sur le coffre, dans la coursive, devant la porte du baron, comme un objet qu'on veut montrer sans avoir l'air. Une boîte de noyer, longue, plate, garnie de velours vert, aux armes des Clavières gravées sur une plaque d'argent. Dedans, dans leurs logements creusés à leur forme, deux pistolets jumeaux, la poire à poudre, le moule à balles, le maillet, les bourres, tout l'attirail d'un homme qui n'aime pas improviser.",
        "Les pistolets sont beaux, d'une beauté inquiétante d'objet qui ne sert qu'à une chose. Canons bleuis, crosses de noyer quadrillé, chiens en col de cygne. Victorine en prend un. Il est lourd, et il tombe dans la main comme s'il avait été fait pour elle, ce qui est désagréable. Sur la crosse, dans le bois, quatre petites encoches, très fines, faites au canif.",
        "Elle compte les encoches. Quatre. Le baron a dit quatre duels. Elle regarde l'autre pistolet. Sa crosse est intacte. Elle remarque autre chose, en le soupesant : son guidon, au bout du canon, a été limé, légèrement, sur le côté gauche, et l'acier y est plus clair. Un pistolet qui tire un peu à gauche, qu'on a corrigé, ou qu'on a déréglé.",
        "Elle repose les deux armes dans leur velours, exactement à leur place. Elle se demande lequel des deux le baron prendra, et lequel il tendra au professeur, et si un homme qui a limé un guidon dans sa jeunesse se souvient encore de quel côté. Elle referme l'étui. Le fermoir claque, dans la coursive silencieuse, comme un chien qu'on arme.",
      ],
      choices: [
        { back: "WY_nuit", label: "Revenir à sa cabine" }
      ] },
    WY_nuit: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "nuit",
      text: [
        { first: true, text: "Le professeur vient la voir à minuit. Il ne s'excuse pas. Il dit qu'il a soixante ans, qu'il n'a jamais tenu un pistolet de sa vie, qu'il est myope comme une taupe, et qu'il va mourir pour un poisson. Il dit qu'il ne retirera pas un mot. Il dit que c'est une question de principe : si l'on laisse un banquier appeler morue un témoin du Déluge, demain on laissera les banquiers dire ce qu'est la science, et la civilisation sera finie. Il demande s'il peut lui confier ses notes, au cas où." },
        { first: true, text: "Le baron vient la voir à une heure. Il ne s'excuse pas non plus. Il dit qu'il tire très bien, qu'il a eu quatre duels dans sa jeunesse, qu'il ne veut pas tuer ce vieil imbécile, mais qu'un Clavières qu'on a souffleté avec une serviette ne peut plus se montrer à la Bourse s'il ne tire pas. Il dit qu'il visera l'épaule. Il dit qu'il espère que le professeur visera mal, ce qui est probable. Il dit qu'on doit tout cela à quelque chose qui s'appelle l'honneur, et qu'il serait bien en peine de dire ce que c'est, mais qu'il sait qu'il en mourrait de ne pas l'avoir." },
        { first: true, text: "Victorine les écoute tous les deux. Elle pense que ce sont deux vieux enfants, qu'ils vont peut-être s'entretuer, au milieu de l'océan, pour une morue, et qu'ils en sont parfaitement conscients, et que c'est justement ce qui les décide. Les pistolets du baron sont dans leur boîte, sur la table de l'infirmerie, où il les a fait porter, avec la poudre et les balles, pour qu'elle les ait sous la main, en cas de besoin. Il fait très sombre. La boîte est ouverte." },
        { again: true, text: "Il est deux heures. Les deux vieux enfants sont allés se coucher, et Victorine reste seule avec leur duel." }
      ],
      choices: [
        { label: "Aller regarder le poisson, dans son bocal", to: "WY_bocal", hide: { seen: "WY_bocal" } },
        { label: "Examiner l'étui à pistolets que le baron a laissé ouvert", to: "WY_etui", hide: { seen: "WY_etui" } },
        { label: "Être leur chirurgien, et laisser l'honneur suivre son cours", fx: { flag: "wy:temoin" }, to: "WY_temoin" },
        { label: "Charger elle-même les deux pistolets, avec de la poudre et sans balle", fx: { flag: "wy:poudre" }, to: "WY_poudre" },
        { label: "Aller réveiller la capitaine, et lui demander d'interdire le duel", fx: { flag: "wy:capitaine" }, to: "WY_capitaine" },
      ] },
    WY_temoin: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "mer",
      text: [
        "À l'aube, sur le gaillard d'avant, il y a tout l'équipage, qui fait semblant de travailler. Les deux hommes se mettent en place, à douze pas, en chemise. Le second compte. Le professeur lève son pistolet en tremblant, ferme les yeux, et tire le premier, vers le ciel, ou vers le baron, ou vers la mer ; la balle part on ne sait où. Le baron vise. Longtemps. Le professeur, les yeux toujours fermés, attend, très droit, avec une dignité de vieux héron. Le baron baisse son pistolet d'un pouce, et tire.",
        "La balle traverse le chapeau du professeur et l'emporte par-dessus bord. Le professeur ouvre les yeux. Il porte la main à sa tête. Il est intact. Il se retourne, il regarde son chapeau qui flotte sur l'eau, s'éloigne, et coule, et il dit, d'une voix blanche : « C'était mon seul chapeau. » Le baron s'incline, et dit que l'honneur est satisfait. Le professeur s'incline aussi. Victorine range sa trousse, qui n'a pas servi.",
        "Le soir, à table, les deux hommes se parlent avec une courtoisie exquise, comme deux vieux amis. Le baron offre au professeur un de ses propres chapeaux, qui lui va mal. Le professeur l'accepte, et le porte, jusqu'à la fin du voyage. Le poisson, dans son bocal, reste sur le buffet, entre eux. Personne n'en parle plus. Victorine les regarde et se dit qu'elle ne comprendra jamais les hommes, et qu'ils ont peut-être raison, de temps en temps, de se tirer dessus pour une morue : ils ont l'air tellement soulagés.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "WY" }, back: "A3v_jours" }] },
    WY_poudre: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle charge les deux pistolets, à la lueur de la lanterne, avec soin, comme on prépare une seringue : la poudre, la bourre, la bourre encore, et pas de balle. Elle met les deux balles dans sa poche. Elle referme la boîte. Elle se couche. Elle ne dort pas. Elle se demande si elle vient de sauver deux vies, ou d'en voler deux, ce qui, dans le langage de ces messieurs, revient au même.",
        "À l'aube, sur le gaillard d'avant, le professeur tire le premier, les yeux fermés. Il y a une flamme, un nuage de fumée, un bruit énorme. Le baron ne bouge pas. Il vise, longuement, et il tire. Rien. Le professeur ouvre les yeux, intact. Le baron regarde son pistolet. Il regarde Victorine. Il comprend. Il ne dit rien. Il s'incline, et déclare l'honneur satisfait, d'une voix parfaitement neutre. Le professeur, ivre de soulagement, serre la main du baron, et puis celle de Victorine, et puis celle de Gobert, et puis de tout le monde.",
        "Le soir, le baron fait demander Victorine dans la grand-chambre. Il lui tend la main, paume ouverte. Elle y pose les deux balles. Il les regarde. « Vous m'avez rendu ridicule, docteur, dit-il, et je vous en remercie, et je ne vous le pardonnerai jamais. » Il garde les balles. Elle apprend plus tard qu'il les porte sur lui, dans une petite bourse de cuir, comme d'autres portent une médaille. Le professeur, lui, ne saura jamais rien. Il raconte, dans les escales, qu'il a essuyé le feu d'un tireur d'élite sans ciller.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "WY" }, back: "A3v_jours" }] },
    WY_capitaine: { act: "III", title: "L'affaire du poisson", place: "cormorane", ambiance: "nuit",
      text: [
        "La capitaine Ribaud l'écoute en bonnet de nuit, assise dans sa couchette, un livre de comptes ouvert sur les genoux. Quand Victorine a fini, elle dit qu'elle le savait, qu'elle l'avait entendu à table, et qu'elle attendait de voir si quelqu'un aurait le bon sens de venir la réveiller. Puis elle se lève. Elle s'habille. Elle monte sur le pont. Elle fait mettre aux fers, dans la cale, côte à côte, le baron et le professeur, jusqu'à nouvel ordre, pour tapage et mise en danger d'un navire de commerce.",
        "Ils protestent tous les deux. Le baron dit qu'il a armé ce navire. Le professeur dit qu'il est membre de l'Académie. La capitaine dit qu'elle s'en moque, et qu'ils sortiront quand ils se seront serré la main, et pas avant. Ils passent la journée dans la cale, sur une barrique, à se tourner le dos. Le soir, ils passent la nuit, de même. Le lendemain matin, Gobert, qui leur porte la soupe, rapporte qu'ils jouent aux cartes, sur la barrique, et que le baron triche, et que le professeur le sait, et qu'ils ont l'air de s'amuser beaucoup.",
        "Ils sortent à midi, en se serrant la main, la mine grave. À table, le soir, ils se parlent avec une politesse parfaite. Mais l'un et l'autre, quand ils croisent Victorine, la saluent d'un signe de tête un peu raide. Elle les a empêchés de mourir, et ils ne lui en veulent pas ; ils lui en veulent de les avoir empêchés de risquer de mourir, ce qui est autre chose, et qu'aucun des deux, d'ailleurs, ne saurait expliquer. La capitaine, elle, lui verse un verre de vin, à la fin du dîner, sans un mot. C'est la première fois.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", fx: { quest: "WY" }, back: "A3v_jours" }] },
  },
  extras: {
    quests: [
      { id: "WY", act: "III", kind: "annexe", title: "L'affaire du poisson", start: "WY_serviette", doit: "duel", echo: ["wy:temoin", "wy:poudre", "wy:capitaine"] },
    ],
  },
};
