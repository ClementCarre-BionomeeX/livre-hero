// L'Île Folle-Aiguille · side story « Le quart de minuit » (owes its question to A Captain at Fifteen: can a child hold
// a ship for one night, when the man in charge falls?). In the calms of the Sargues, a waterspout rises at midnight;
// a block falls from aloft and knocks the second, Benoît, senseless; the child is alone on deck with the helmswoman
// Lemerle, who will steer and will not command, and Petit-Jules at the bow. The child wakes the captain (ym:capitaine),
// orders to bear away (ym:barre, or ym:voile if the topsail goes), or lets Lemerle cut the spout with her knife
// (ym:couteau). The captain judges at dawn. Wired in A3n_jours.
module.exports = {
  passages: {
    YM_quart: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "nuit",
      text: [
        "Le quart de minuit, dans les calmes, est le plus long de tous. Il fait aussi chaud qu'à midi, d'une chaleur moite, sans soleil, qui sort de la mer elle-même comme d'une bête endormie. Les voiles pendent. Le pont colle sous les pieds nus. Benoît Quémeneur, officier de quart, fait les cent pas du grand mât à la lisse, de son pas lent de laboureur, et regarde l'horizon du sud, où des éclairs s'allument depuis une heure sans le moindre bruit, comme des lampes qu'on promènerait derrière un drap.",
        "Tu es de quart avec lui, pour porter les ordres. Annick Lemerle tient la barre, qui ne sert à rien, puisque rien n'avance ; elle la tient quand même, par principe, les deux mains posées sur les poignées comme sur les épaules d'un enfant. Petit-Jules est à la vigie de l'avant, assis sur le beaupré, les jambes dans le vide.",
        "Vers une heure, un éclair plus long que les autres reste suspendu une seconde, et dans cette seconde, tu la vois. À deux milles, peut-être moins, sous le ventre noir d'un nuage, une colonne relie le ciel à la mer : une corde d'eau tordue, épaisse comme une tour, qui tourne sur elle-même avec une lenteur de rêve. À son pied, la mer bouillonne en une couronne blanche. Puis l'éclair s'éteint, et il ne reste que le bruit, qui arrive enfin, un sifflement grave, continu, comme le souffle d'une forge immense.",
        "« Trombe ! » crie Petit-Jules, d'une voix qui se casse.",
        "Benoît court vers l'avant pour voir. Au même instant, la première rafale tombe sur la Cormorane, sortie de nulle part, chaude comme une haleine, et le navire immobile depuis dix jours se couche d'un coup sur le flanc. Là-haut, quelque chose craque. Une poulie se détache de la vergue de misaine, file au bout de son bout de manœuvre, et frappe Benoît à la tempe, au passage, avec un bruit de bûche fendue. Il tombe sur le pont, de tout son long, et ne bouge plus.",
      ],
      choices: [{ label: "Courir à lui", to: "YM_seul" }] },
    YM_seul: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "nuit",
      text: [
        "Il respire. Il saigne de la tempe, beaucoup, comme saignent les têtes, et ses yeux sont ouverts sur rien. Tu l'appelles. Il te répond quelque chose sur des chevaux, dans un patois de la campagne, et se tait.",
        "Tu te relèves. La rafale est tombée aussi vite qu'elle était venue ; les voiles pendent de nouveau, mais l'air siffle, et la colonne, à chaque éclair, est un peu plus grande. Elle vient sur vous. Ou bien c'est vous qui allez vers elle, sur un reste de courant ; dans la nuit, on ne sait plus qui marche.",
        "Lemerle n'a pas lâché la barre. Elle te regarde, par-dessus la roue, avec ses yeux de pierre. « C'est toi, l'officier, mousse, dit-elle. Tu es le seul debout qui ait le droit de donner un ordre. Moi, je tiens la barre. Je ne commande pas. Je n'ai jamais commandé. »",
        "Petit-Jules a quitté le beaupré et se tient au pied du mât de misaine, livide, avec son couteau à la main sans savoir pourquoi. Il te regarde aussi. Tout le pont te regarde : deux personnes, et un homme couché.",
        "« Il y a trois choses, dit Lemerle très vite. Tu cours à l'arrière réveiller la capitaine, et tu perds deux minutes. Tu me fais laisser porter, si on a assez de vent pour gouverner, et on essaie de lui passer à côté. Ou tu me laisses faire ce que faisait mon père. » Elle tire de sa ceinture un couteau à manche noir. « On coupe la trombe. Avec ça, et la prière qu'il faut. Ça marche une fois sur deux. Comme tout le reste. »",
      ],
      choices: [
        { label: "Courir réveiller la capitaine", fx: { flag: "ym:capitaine" }, to: "YM_capitaine" },
        { label: "« Laisse porter ! Petit-Jules, aux bras de misaine ! »", test: { dom: "nature", diff: 1, label: "Lire le vent qui n'existe pas" },
          win: { fx: { flag: "ym:barre" }, to: "YM_barre" }, lose: { fx: { flag: "ym:voile" }, to: "YM_voile" } },
        { label: "« Coupe-la. »", fx: { flag: "ym:couteau", penche: { lemerle: 1 } }, to: "YM_couteau" },
      ] },
    YM_capitaine: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "nuit",
      text: [
        "Tu cours. La porte de la chambre de l'arrière est fermée ; tu cognes des deux poings. La capitaine Ribaud ouvre au troisième coup, en chemise de nuit, ses cheveux gris défaits, un pistolet à la main, et elle a compris avant que tu aies fini la première phrase. Elle passe devant toi pieds nus.",
        "Sur le pont, elle regarde la trombe une seule seconde. Puis elle donne quatre ordres, d'une voix que tu ne lui connaissais pas, une voix de tôle qui couvre le sifflement, et le navire se réveille sous elle : l'équipage jaillit des écoutilles, les vergues pivotent, Lemerle met la barre dessous. La Cormorane, sur un souffle que toi, tu n'avais pas senti, s'écarte de la colonne d'une encablure. La trombe passe sur bâbord, en hurlant, en arrachant à la mer une pluie salée qui retombe sur vous comme une averse tiède. Puis elle s'éloigne vers le nord, se défait en haut, et s'effondre dans un grand bruit d'eau.",
        "Il a fallu deux minutes. Les deux minutes que tu as perdues ont suffi.",
      ],
      choices: [{ label: "Attendre l'aube", to: "YM_aube" }] },
    YM_barre: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "nuit",
      text: [
        "Tu l'as senti, sur ta joue mouillée : un fil d'air, venu de l'est, si mince qu'on le prendrait pour une respiration. Tu le cries à Lemerle. Elle met la barre dessus sans discuter, et Petit-Jules, qui pleure de peur, pèse de tout son poids sur les bras de la vergue de misaine, avec toi, jusqu'à ce que la voile se gonfle à moitié, et que la Cormorane, à une lenteur de bœuf, se mette à glisser.",
        "La trombe passe à deux encablures sur bâbord. Tu la vois, à la lueur des éclairs, tout entière : elle a la couleur des cendres, et dans son tourbillon, il y a des choses qui montent, des algues, des poissons, un tronc d'arbre arraché on ne sait où, qui tournent autour d'elle comme des oiseaux autour d'un clocher. Elle hurle. L'eau qu'elle arrache retombe sur le pont en averse salée et tiède. Puis elle s'éloigne, et se défait en haut comme un nœud qu'on lâche.",
        "Le navire est entier. Quand la capitaine Ribaud monte enfin sur le pont, réveillée par le bruit, tout est fini, et c'est toi qu'elle trouve debout à côté de la barre, trempé{e}, les mains en sang des cordages.",
      ],
      choices: [{ label: "Attendre l'aube", to: "YM_aube" }] },
    YM_voile: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "nuit",
      text: [
        "Tu as cru sentir un souffle, de l'est. C'était l'aspiration de la trombe elle-même, qui tire l'air à elle comme une cheminée. Lemerle met la barre où tu dis ; la misaine se gonfle, d'un coup, du mauvais côté, et la Cormorane se met à glisser droit vers la colonne.",
        "Elle passe tout près, si près qu'à la lueur d'un éclair tu vois des poissons tourner dans son tourbillon. La misaine éclate. Elle s'en va en lambeaux dans la nuit, avec un bruit de drap qu'on déchire sur toute sa longueur, et une vergue tombe sur le pont à deux pas de Petit-Jules. La trombe passe. Le navire tremble encore longtemps après, comme un chien qui s'ébroue.",
        "La capitaine Ribaud monte au milieu de ce désordre, en chemise de nuit, un pistolet à la main, pour trouver une voile en morceaux, un officier sans connaissance, un novice qui pleure et toi, debout près de la barre, avec un ordre faux encore dans la bouche.",
      ],
      choices: [{ label: "Attendre l'aube", to: "YM_aube" }] },
    YM_couteau: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "nuit",
      text: [
        "Lemerle te passe la barre. Tu la prends à deux mains ; elle est chaude comme une chose vivante. Annick Lemerle monte sur le bastingage, face à la trombe, se tient d'une main à un hauban, et de l'autre lève son couteau à manche noir. Elle trace dans l'air, lentement, une grande croix, de haut en bas, puis de gauche à droite, en disant des mots que tu n'entends pas, dans la langue des îles du Ponant que les vieilles parlent encore à Pointe-aux-Corneilles, et que tu croyais être seul{e} à comprendre à bord.",
        "La trombe vient. Elle grossit à chaque éclair. Puis, à moins d'un mille, sans raison, elle se met à pencher, se tord en son milieu comme une corde qu'on lâche, se défait en haut, et s'effondre dans la mer avec un fracas de cataracte. Une vague tiède passe sous la Cormorane, la soulève, la repose. Et c'est fini.",
        "Lemerle redescend du bastingage, remet le couteau à sa ceinture, et reprend la barre de tes mains. « Une fois sur deux, dit-elle. Ce soir, c'était la bonne. » Elle ne te regarde pas. Ses mains tremblent sur les poignées. Tu comprends qu'elle a eu peur autant que toi, et qu'elle l'aurait fait quand même, seule, si tu avais dit non.",
      ],
      choices: [{ label: "Attendre l'aube", to: "YM_aube" }] },
    YM_aube: { act: "III", title: "Le quart de minuit", place: "sargues", ambiance: "mer",
      text: [
        "À l'aube, Benoît Quémeneur est dans son hamac, la tête bandée par la médecin, et demande à tout le monde, poliment, quel jour on est. La capitaine Ribaud te fait appeler à l'arrière. Elle est habillée, coiffée, et tient le livre de bord ouvert devant elle, la plume à la main.",
        { if: { has: "ym:capitaine" }, text: "« Tu es venu{e} me chercher, dit-elle. Tu as perdu deux minutes, et tu le sais. » Elle trempe la plume. « Tu as eu raison. Un mousse qui joue à l'officier perd des navires, et les officiers qui ont joué au mousse sont tous au fond. J'écris que le mousse de quart a donné l'alerte. C'est tout ce qu'on attendait de toi. » Elle écrit. Tu regardes la plume courir, et tu te sens soulagé{e}, et un peu volé{e}, sans savoir de quoi." },
        { if: { has: "ym:barre" }, text: "« Tu as fait laisser porter, dit-elle. Sur un souffle que je n'ai pas senti moi-même depuis ma chambre. » Elle trempe la plume, la tient au-dessus de la page. « Je vais écrire que l'officier de quart, blessé, a été remplacé par le mousse, qui a manœuvré. Ça ne s'écrit pas souvent. Ça ne se lit jamais à voix haute, à Morlenc : les armateurs n'aiment pas qu'un enfant leur sauve un navire, ça les fait réfléchir aux salaires. » Elle écrit. « Ne recommence pas. Et si tu dois recommencer, recommence pareil. »" },
        { if: { has: "ym:voile" }, text: "« Tu as donné un ordre, dit-elle. Il était faux. » Elle trempe la plume. « Un ordre faux, donné à temps, vaut mieux que pas d'ordre du tout, et ne vaut pas mieux que ça. La misaine coûte quatre cents livres au baron. Je le lui dirai moi-même ; ça me fera plaisir. » Elle écrit. « Tu as tenu le pont, mousse. Mal. Le pont a tenu. Va dormir. »" },
        { if: { has: "ym:couteau" }, text: "« Lemerle me dit que tu lui as permis de couper la trombe, dit-elle, d'une voix sans aucune expression. Avec un couteau à manche noir. » Elle trempe la plume, la tient au-dessus de la page, longtemps. « Je ne peux pas écrire ça dans un livre de bord. Je vais écrire que la trombe s'est défaite à un mille, ce qui est vrai. » Elle écrit. Puis, sans lever les yeux : « Mon père avait le même couteau. Il est mort dans son lit. Va dormir. »" },
      ],
      choices: [{ label: "Descendre dormir", fx: { quest: "YM" }, back: "A3n_jours" }] },
  },
  extras: {
    quests: [
      { id: "YM", act: "III", kind: "annexe", title: "Le quart de minuit", start: "YM_quart", doit: "capitainequinze", echo: ["ym:capitaine", "ym:barre", "ym:voile", "ym:couteau"] },
    ],
  },
};
