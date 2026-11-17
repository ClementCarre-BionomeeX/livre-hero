// L'Île Folle-Aiguille · side story « Le noyé de la Bienvenue » (owes its question to Colonel Chabert: can a man the law
// has declared dead take his life back, and what does it cost the living?). In the Basse-Fosse, an old sailor sits every
// day facing a ship-chandler's shop. He is Yves Jaouen, drowned on paper nine years ago with the Bienvenue, nine years a
// galley slave on the coast of the Sands; his wife Maryvonne has married the chandler Gourvennec and has two small
// children. He asks the child to carry a letter (yn:lettre) or to ask the notary Brindejonc what the law says
// (yn:notaire). He takes her money and goes (yn:argent), goes to law (yn:proces), or leaves without either (yn:parti).
// Wired in A2m_bf.
module.exports = {
  passages: {
    YN_banc: { act: "II", title: "Le noyé", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "jaouen" },
      text: [
        "Il est là chaque fois que tu passes par la rue des Cordiers : un vieil homme assis sur une borne d'amarrage, en face de la boutique d'un shipchandler, avec un caban trop grand et un bonnet de laine enfoncé jusqu'aux sourcils. Il ne mendie pas. Il regarde la boutique. Le soir, il est encore là, à la même place, et il la regarde toujours, comme un chien regarde une porte derrière laquelle il a entendu son nom.",
        "La boutique est belle. *GOURVENNEC, APPROVISIONNEMENT DE NAVIRES*, en lettres dorées sur fond vert. Des cordages en glènes, des fanaux de cuivre, des barils de clous, du biscuit en caisse, une odeur de goudron frais qui se mêle, l'après-midi, à une odeur de pain. Derrière le comptoir, une femme de quarante ans, ronde, bien coiffée, rit avec un client. Deux enfants jouent sur le seuil avec un chat.",
        "Le troisième jour, le vieil homme te fait signe. De près, il est moins vieux que tu le croyais : cinquante ans, peut-être, avec une figure de cuir cuit et recuit, des mains couvertes de cals en anneau, aux poignets, comme en laissent les fers qu'on a portés longtemps.",
        "« Tu es de la Cormorane, dit-il. Je t'ai vu{e} avec le bosco. Tu sais lire ? » Il tire de son caban une feuille pliée et repliée, molle comme un vieux mouchoir. « Lis-moi ça. Tout haut. Je le sais par cœur. Je voudrais l'entendre dans la bouche de quelqu'un d'autre. »",
      ],
      choices: [{ label: "Lire", to: "YN_avis" }] },
    YN_avis: { act: "II", title: "Le noyé", place: "basse_fosse", ambiance: "ville",
      text: [
        "C'est un avis de l'Amirauté de Morlenc, imprimé, vieux de neuf ans. *Le brick la Bienvenue, de ce port, porté disparu corps et biens dans les parages de la côte des Sables. Sont déclarés morts en mer, et leurs successions ouvertes :* suit une liste de quatorze noms. Le septième est souligné à l'encre, d'un trait si appuyé qu'il a percé le papier. *Yves Jaouen, maître d'équipage, de Morlenc, époux de Maryvonne Le Roux.*",
        "« C'est moi, dit l'homme quand tu as fini. Le septième. » Il reprend la feuille, la replie, la range contre sa poitrine. « La Bienvenue a coulé, c'est vrai. Les corsaires des Sables nous ont pris dans la chaloupe, cinq survivants, et nous ont vendus. Neuf ans aux galères de là-bas, à ramer pour des gens qui ne parlaient pas ma langue. Les quatre autres sont morts. Moi, j'ai été racheté par des moines, l'an dernier, avec quarante autres, contre de l'argent qu'une quête avait ramassé dans les églises du Ponant. Peut-être bien à Varnèse. Peut-être bien dans la tienne. »",
        "Il regarde la boutique. La femme ronde, derrière le comptoir, rend la monnaie à un client, et le raccompagne jusqu'à la porte en riant.",
        "« Maryvonne, dit-il. Elle a attendu deux ans, à ce qu'on m'a dit. Puis elle a épousé Gourvennec, qui était veuf, et qui avait la boutique. Ils ont eu les deux petits. Je suis revenu il y a trois semaines. Je n'ai pas encore osé traverser la rue. » Il te regarde. « Je suis mort, tu comprends. Sur ce papier, à l'Amirauté, à l'église, dans ma propre maison. Un mort qui traverse la rue, ça fait du bruit. »",
      ],
      choices: [
        { label: "Proposer de porter une lettre à sa femme", to: "YN_lettre" },
        { label: "Proposer d'aller demander au notaire ce que dit la loi", fx: { flag: "yn:notaire" }, to: "YN_notaire" },
      ] },
    YN_lettre: { act: "II", title: "La boutique", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il dicte. Il dicte mal, en reprenant chaque phrase, en effaçant avec la main dans l'air ce que tu viens d'écrire, et la lettre, à la fin, tient en cinq lignes, parce qu'il a tout enlevé. *Maryvonne. Je suis vivant. Je suis dans la rue, en face. Je ne veux rien te prendre. Je voudrais seulement que tu me regardes une fois. Yves.*",
        "Tu traverses la rue avec la lettre. Dans la boutique, ça sent le goudron et le pain chaud. Les deux enfants te regardent entrer. La femme ronde te sourit, avec un sourire de commerce, et prend la lettre sans comprendre. Elle la lit. Le sourire reste en place, une seconde, accroché à rien. Puis elle devient blanche, d'un coup, jusqu'aux lèvres, et elle s'assied sur un baril de clous, et elle regarde par la vitrine l'homme sur la borne, qui a ôté son bonnet.",
        "Elle le regarde longtemps. Elle le reconnaît ; tu le vois à ses mains, qui se mettent à trembler. Puis elle se lève, va à la caisse, compte des pièces, beaucoup, les enveloppe dans la lettre elle-même, et te met le paquet dans la main.",
        "« Dis-lui que je ne connais pas cet homme, dit-elle, très bas, sans le quitter des yeux. Dis-lui que mon mari est mort en mer il y a neuf ans, et que j'ai porté son deuil, et que je l'ai pleuré, et que c'est fini. » Sa voix se casse. « Dis-lui de prendre ça et de s'en aller très loin. Pour les petits. Il comprendra. Il a toujours tout compris. »",
      ],
      choices: [{ label: "Retraverser la rue avec le paquet", to: "YN_choix" }] },
    YN_notaire: { act: "II", title: "Le notaire", place: "haute_ville", ambiance: "ville",
      text: [
        "Maître Brindejonc te reçoit parce qu'il reçoit tout le monde : c'est un vieil homme qui a trop de temps et pas assez d'auditoire. Il écoute l'histoire en hochant la tête, les mains croisées sur un ventre de chanoine, et quand tu as fini, il se renverse dans son fauteuil avec la satisfaction d'un gourmet devant un plat compliqué.",
        "« Admirable, dit-il. Un cas d'école. Votre homme a la loi pour lui, entièrement. Le jugement de décès tombe dès qu'il prouve qu'il vit : il lui faut deux témoins qui l'ont connu avant, et le certificat des moines. Le second mariage est nul de plein droit. La boutique ? La boutique a été achetée en partie avec la succession de votre homme, c'est-à-dire avec son argent ; il peut en réclamer la moitié. » Il sourit. « Et les deux enfants, bien entendu, deviennent des bâtards. Adultérins, même. Un mot très laid, que les juges prononcent avec beaucoup de dignité. »",
        "Il prend une prise de tabac. « Ça durera trois ans. Ça coûtera tout ce qu'ils ont, et tout ce qu'il n'a pas. Il gagnera. Je n'ai jamais vu personne de plus malheureux qu'un homme qui gagne ce genre de procès. » Il se mouche. « Dites-lui de venir me voir. Je prends très cher, mais je suis très bon. »",
        "Quand tu redescends à la Basse-Fosse, la femme de la boutique est sur le seuil. Quelqu'un lui a dit. On dit tout, dans ce quartier. Elle regarde la borne, l'homme qui a ôté son bonnet, et elle rentre précipitamment, et tu la vois, par la vitrine, compter des pièces à la caisse, beaucoup, et appeler un des petits pour qu'il les porte de l'autre côté de la rue.",
      ],
      choices: [{ label: "Retraverser la rue avec le petit", to: "YN_choix" }] },
    YN_choix: { act: "II", title: "Le noyé", place: "basse_fosse", ambiance: "ville",
      text: [
        "L'argent est là, sur la borne, à côté de lui : deux cents livres, peut-être, en pièces d'argent et en papier de banque, enveloppées dans un mouchoir brodé d'un G. Yves Jaouen ne le touche pas. Il regarde la boutique, dont on a fermé les volets en plein après-midi.",
        { if: { has: "yn:notaire" }, text: "Tu lui répètes ce qu'a dit le notaire. Tout. La moitié de la boutique, le second mariage nul, le mot très laid. Il écoute en hochant la tête, comme on écoute le compte de ses blessures." },
        "« Elle m'a reconnu, dit-il enfin. Elle a eu peur. C'est juste ; à sa place, j'aurais eu peur aussi. » Il prend une pièce dans le mouchoir, la fait tourner entre ses doigts. « Neuf ans, j'ai ramé en pensant à elle. Elle, pendant ce temps, a vécu. Je ne sais pas qui des deux a eu le plus de courage. » Il te regarde. « Toi qui as lu le papier. Qu'est-ce que je fais ? »",
      ],
      choices: [
        { label: "« Prends l'argent, et pars. Laisse-la vivre. »", fx: { flag: "yn:argent" }, to: "YN_argent" },
        { label: "« Va chez le notaire. C'est ta vie, ils te l'ont prise. »", fx: { flag: "yn:proces" }, to: "YN_proces" },
        { label: "« Laisse l'argent sur la borne. Tu ne lui dois rien, elle ne te doit rien. »", fx: { flag: "yn:parti" }, to: "YN_parti" },
      ] },
    YN_argent: { act: "II", title: "Le noyé", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il noue le mouchoir, lentement, avec un nœud de marin, et le met dans son caban, à côté de l'avis de l'Amirauté. Il se lève de la borne. Il regarde une dernière fois les volets fermés, la belle enseigne verte, le chat sur le seuil.",
        "« Un mort qui a de l'argent, dit-il, c'est presque un vivant. Je vais aller voir si on prend des maîtres d'équipage, à Lannoz, ou plus loin. Des gens qui ne m'auront pas connu. » Il te serre la main, d'une poigne de galérien. « Merci. Tu as dit ce qu'il fallait. Ça ne veut pas dire que c'était juste. »",
        "Il s'en va vers le port, sans se retourner. Le lendemain, la borne est vide. Le surlendemain, les volets de la boutique sont rouverts, et la femme ronde rit avec un client, un peu trop fort.",
      ],
      choices: [{ label: "Remonter vers le quai", fx: { quest: "YN" }, back: "A2m_bf" }] },
    YN_proces: { act: "II", title: "Le noyé", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il te regarde longtemps, puis il prend le mouchoir, et va le poser, sans un mot, sur le seuil de la boutique fermée, contre la porte. Il revient s'asseoir sur la borne.",
        "« Tu as raison, dit-il. Je suis vivant. Je veux qu'on me l'écrive. » Il rit, d'un rire qui fait mal. « Neuf ans de rame, ça vaut bien trois ans de procès. Et puis, au moins, pendant trois ans, j'aurai une affaire. Les morts n'en ont pas. »",
        "Le lendemain, il monte à la Haute-Ville, chez Maître Brindejonc, avec son certificat de moines et ses mains de galérien. Le surlendemain, la boutique Gourvennec reste fermée toute la journée. Les deux petits jouent derrière la vitrine, avec le chat, et ne sortent plus.",
      ],
      choices: [{ label: "Remonter vers le quai", fx: { quest: "YN" }, back: "A2m_bf" }] },
    YN_parti: { act: "II", title: "Le noyé", place: "basse_fosse", ambiance: "ville",
      text: [
        "Il hoche la tête. Il se lève, laisse le mouchoir et l'argent sur la borne, comme on laisse une offrande sur une tombe, et il remet son bonnet.",
        "« Tu as raison. On est quittes. Elle m'a pleuré, je l'ai aimée, et on est morts tous les deux, chacun à sa façon. » Il regarde la boutique fermée. « Dis-lui, si tu la revois, que le septième nom de la liste est reparti en mer. Elle peut le rayer pour de bon. »",
        "Il s'en va vers le port. Le soir, quand tu repasses, le mouchoir est toujours sur la borne, avec l'argent dedans, et personne n'y a touché, dans un quartier où l'on vole les clous des semelles. On dirait que toute la Basse-Fosse a compris ce que c'était.",
      ],
      choices: [{ label: "Remonter vers le quai", fx: { quest: "YN" }, back: "A2m_bf" }] },
  },
  extras: {
    people: {
      jaouen: { name: "Yves Jaouen", aka: ["le noyé", "le noyé de la Bienvenue"],
        qui: "Un maître d'équipage déclaré mort en mer il y a neuf ans, revenu des galères à la Basse-Fosse." },
    },
    quests: [
      { id: "YN", act: "II", kind: "annexe", title: "Le noyé de la Bienvenue", start: "YN_banc", doit: "chabert", echo: ["yn:argent", "yn:proces", "yn:parti"] },
    ],
  },
};
