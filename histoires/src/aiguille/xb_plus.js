// L'Île Folle-Aiguille · side story « Les deux frères », the night of the ball. After the glove, the doctor may follow
// the Chevalier into the town, to a gambling house where he loses with joy and wins with boredom; one hand of pharaon
// with him (item bague_chevalier, or chevalier:dette_reponse: she owes him one true answer, claimed at his table on the
// island); the story of his death, told his way; what she tells him of the voyage (chevalier:sait_ile); and the dawn on
// the Pré-aux-Mouettes, where he waits for a brother who never comes (chevalier:aube_vue). Or she may take Héloïse home,
// and see the watch that came from Pondichéry, and what is engraved inside the lid: a date when the dead man was alive
// (freres:montre_vue). The watch may go to Benoît (freres:montre_montree), into the canal (freres:montre_jetee), or to the
// doctor's bag (item montre_alexis).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- following the Chevalier
    XB_c_suivre: { act: "II", title: "La rue", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle prend sa mante au vestiaire et sort par la petite porte de la Bourse, celle des valets. Il pleut. La rue est vide, luisante, et au bout, sous un réverbère, il y a un homme en velours noir qui attend, adossé au mur, en fumant un cigare tordu comme une racine.",
        "« Je savais que vous viendriez, dit le Chevalier, sans se retourner. Les femmes qui soignent ont toujours envie de voir la blessure de près. » Il jette son cigare dans le ruisseau. « Venez. Je vais perdre beaucoup d'argent ce soir. C'est un spectacle qu'il faut avoir vu une fois, comme une exécution. »",
        "Il lui offre le bras. Elle ne le prend pas. Il rit, et marche devant, en sifflant, comme un homme qui promène son chien.",
      ],
      choices: [{ label: "Le suivre", to: "XB_c_tripot" }] },
    XB_c_tripot: { act: "II", title: "Le Lansquenet", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Le Lansquenet est une maison de jeu au fond d'une cour de la rue des Douze-Apôtres, où les échevins viennent masqués le samedi, et les autres jours à visage découvert, parce que tout le monde les connaît. Des tables vertes, des chandelles, des femmes trop fardées qui ne regardent que les mains des hommes, et une odeur de cire, de sueur et d'argent.",
        "Le Chevalier s'assied au pharaon. Il pose sur le tapis une bourse entière, sans la compter. Il perd. Il perd une heure durant, avec une gaieté parfaite, en plaisantant le banquier sur sa cravate, en offrant à boire à ceux qui gagnent contre lui. Puis il gagne, d'un coup, une main énorme, et son visage s'éteint. Il pousse ses gains au milieu de la table, et joue tout sur la carte suivante, et le perd, et sourit de nouveau.",
        "« Vous voyez, dit-il à Victorine, qui se tient derrière sa chaise. Gagner m'ennuie. Perdre me fait du bien. On se sent léger, après. On se sent mort. C'est ce que j'ai éprouvé de plus agréable dans ma vie : être mort. »",
        "Il se tourne vers elle, et pose devant la place vide, à côté de lui, un jeton d'ivoire.",
        "« Une main, Madame. Une seule. Si vous gagnez, je vous donne ma bague. Si je gagne, vous me devez une réponse vraie, à une question que je poserai quand je voudrai. »",
      ],
      choices: [
        { label: "S'asseoir, et jouer la main", test: { dom: "social", diff: 1, label: "Le pharaon, contre lui" }, win: { fx: { item: "bague_chevalier", regard: { chevalier: "admiratif" } }, to: "XB_c_gagne" }, lose: { fx: { flag: "chevalier:dette_reponse", regard: { chevalier: "cordial" } }, to: "XB_c_perdu" } },
        { label: "« Je ne joue pas. Je regarde. »", fx: { regard: { chevalier: "curieux" } }, to: "XB_c_histoire" },
      ] },
    XB_c_gagne: { act: "II", title: "La bague", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Le banquier tire. Le valet. Le valet est à elle.",
        "Le Chevalier regarde la carte, longtemps. Puis il ôte de son petit doigt une bague d'or, épaisse, avec une pierre noire où sont gravées deux lettres entrelacées, un A et un Q, et la pose dans la paume de Victorine, en lui refermant les doigts dessus.",
        "« Elle était à mon père, dit-il. Il l'a léguée à Benoît, par testament, après ma mort. Je l'ai reprise à mon frère il y a huit ans, la veille de mon départ, dans sa chambre, pendant qu'il dormait. Il ne s'en est jamais aperçu, ou il n'a rien dit, ce qui revient au même avec lui. » Il sourit. « Vous la lui rendrez, si vous voulez. Ou pas. C'est la première fois que quelqu'un me gagne une chose que je tenais à garder. C'est très désagréable. Merci. »",
      ],
      choices: [{ label: "Glisser la bague dans sa poche", to: "XB_c_histoire" }] },
    XB_c_perdu: { act: "II", title: "La dette", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Le banquier tire. Le roi. Le roi est au Chevalier.",
        "Il ne triomphe pas. Il ramasse le jeton d'ivoire, et le glisse dans la poche du gilet de Victorine, du bout des doigts, sans la toucher.",
        "« Gardez-le, dit-il. C'est la reconnaissance de dette. Le jour où je vous poserai ma question, vous me le rendrez avec la réponse. » Il se lève. « Je ne la poserai pas ce soir. Les questions, c'est comme le vin de Madère : meilleur après un long voyage. »",
      ],
      choices: [{ label: "Sortir avec lui", to: "XB_c_histoire" }] },
    XB_c_histoire: { act: "II", title: "Pondichéry", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Ils marchent le long du fleuve, sous la pluie, vers le Pré-aux-Mouettes. Il parle. Il parle comme il joue, en jetant tout sur la table.",
        "« Je n'ai jamais eu la fièvre. À Pondichéry, il y avait un capitaine de la Compagnie qui mourait, lui, pour de bon, dans la chambre voisine de la mienne, et qui n'avait personne pour l'écrire chez lui. J'ai écrit pour lui. J'ai signé de mon nom. J'ai envoyé ma montre à ma fiancée, avec la lettre. J'ai pris son navire, ses papiers, son nom pour un temps, et ses dettes, qui étaient beaucoup moins lourdes que les miennes. » Il rit. « Je suis mort de la fièvre à sa place, et lui a vécu six semaines de plus, à la mienne, dans un registre. Nous y avons gagné tous les deux. »",
        "« Et votre frère ? Votre fiancée ?",
        "— Mon frère a payé mes dettes. Il a vendu ses chevaux. Il a épousé ma fiancée. Il a été heureux, à ce qu'il paraît, huit ans, avec ce que je lui avais laissé. » Il s'arrête sur le quai. « Il me doit tout. Il ne le sait pas. C'est ce que je viens lui apprendre. »",
        "Puis, sans transition, en la regardant de côté : « Et vous, Madame, où va votre Cormorane, avec un baron, un professeur, trente fusils et un cuisinier qui chante ? »",
      ],
      choices: [
        { label: "« Dans une île. Une île que personne ne trouve. »", fx: { flag: "chevalier:sait_ile", regard: { chevalier: "cordial" } }, to: "XB_c_aube" },
        { label: "« Aux Antilles, pour le sucre. »", fx: { regard: { chevalier: "curieux" } }, to: "XB_c_aube" },
        { label: "Ne rien répondre", to: "XB_c_aube" },
      ] },
    XB_c_aube: { act: "II", title: "Le Pré-aux-Mouettes", place: "haute_ville", ambiance: "mer",
      text: [
        { if: { has: "chevalier:sait_ile" }, text: "Il hoche la tête, lentement, comme on reçoit une carte qu'on attendait. « Une île que personne ne trouve, répète-t-il. Il n'y en a qu'une, dans tout le Couchant, dont on dise cela dans les tavernes. Merci, Madame. Vous venez de me faire gagner trois semaines. »" },
        { if: { not: { has: "chevalier:sait_ile" } }, text: "Il sourit, sans insister. « Vous mentez mal, dit-il. Ou vous vous taisez bien. Les deux sont rares. »" },
        "Le Pré-aux-Mouettes est une langue d'herbe au bord du fleuve, où l'on se bat en duel depuis deux siècles, et où l'on a planté, par ironie, un calvaire. L'aube se lève. Le brouillard monte du fleuve. Le Chevalier tire son épée, la regarde, et se met en garde, seul, face à rien.",
        "Il attend. Le jour vient. Personne ne vient. Les mouettes crient. Il fait quelques passes, dans le brouillard, contre un adversaire qui n'est pas là, avec une précision terrible, et chaque passe est mortelle.",
        "« Il ne viendra pas, dit-il enfin, en rengainant. Il n'est jamais venu. Quand nous étions enfants, je l'attendais déjà, ici, pour me battre avec lui, au bâton, et il ne venait pas. Il allait à la messe. » Il regarde le calvaire. « Je l'ai toujours attendu. C'est lui qui m'a appris à attendre. Il ne le sait pas. »",
        "Il s'en va dans le brouillard sans la saluer. Victorine rentre au Cormoran, trempée, avec le jour.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { flag: "chevalier:aube_vue" }, to: "A2vv_nuit" }] },

    // ---------------------------------------------------------------- Héloïse and the watch
    XB_h_voiture: { act: "II", title: "La voiture", place: "haute_ville", ambiance: "nuit",
      text: [
        "Benoît est parti seul, à pied, sous la pluie, pour marcher, a-t-il dit. Héloïse ne veut pas rentrer seule. Victorine monte avec elle dans la voiture de louage qui les ramène à la maison des Quémeneur, sur le quai de la Fosse-aux-Lions.",
        "Dans la voiture, Héloïse ne pleure plus. Elle regarde par la vitre la ville qui défile, et elle tient serré contre elle son petit sac de soirée, à deux mains, comme on tient un enfant.",
        "« Vous allez voir quelque chose, dit-elle, à mi-chemin. Je ne l'ai jamais montré à personne. Pas même à Benoît. Surtout pas à Benoît. Je ne savais pas pourquoi. Je crois que je le sais, maintenant. »",
      ],
      choices: [{ label: "Entrer avec elle", to: "XB_h_montre" }] },
    XB_h_montre: { act: "II", title: "La montre", place: "haute_ville", ambiance: "nuit",
      text: [
        "Dans sa chambre, elle ouvre un tiroir de commode fermé à clef, et en sort une montre d'homme, en or, enveloppée dans un mouchoir de batiste brodé d'un A et d'un Q.",
        "« On me l'a envoyée de Pondichéry, avec la lettre. Elle était à son cou quand il est mort, disait la lettre. Elle était arrêtée. À trois heures dix. L'heure de sa mort, disait la lettre. » Elle la pose dans la main de Victorine. « Je la remonte tous les soirs, depuis huit ans. Je ne sais pas pourquoi. Pour qu'il y ait quelque chose de lui qui marche. »",
        "La montre est lourde, belle, d'un horloger de Varnèse. Elle marche. Victorine l'ouvre, par habitude de médecin, pour voir le mouvement. Et sous le couvercle intérieur, dans l'or, gravée au burin d'une main experte, il y a une inscription qu'Héloïse ne connaît pas, parce qu'Héloïse n'a jamais ouvert ce couvercle-là.",
        "*À A. Q., de ses amis de Port-Louis, pour son retour d'entre les morts. 14 mars.*",
        "Le 14 mars de l'année qui a suivi la lettre. Un an après sa mort, à Port-Louis, des amis faisaient graver une montre pour fêter qu'il était vivant. Puis la montre a pris le chemin de la fiancée, avec la lettre, pour faire plus vrai.",
      ],
      choices: [
        { label: "Montrer l'inscription à Héloïse", to: "XB_h_lire" },
        { label: "Refermer le couvercle, et rendre la montre sans rien dire", to: "XB_h_tue" },
      ] },
    XB_h_lire: { act: "II", title: "L'inscription", place: "haute_ville", ambiance: "nuit",
      text: [
        "Héloïse lit. Elle relit. Elle compte, sur ses doigts, comme une enfant, les mois entre la lettre et la date. Elle ne dit rien.",
        "Puis elle s'assied sur le bord du lit, la montre ouverte sur ses genoux, et elle se met à rire. Un petit rire étouffé, incrédule, terrible, qui dure longtemps, et qui finit en sanglot, et qui revient en rire.",
        "« Il a envoyé sa montre, dit-elle. Pour faire vrai. Il a pensé à ça. Il a pensé à moi, ce jour-là, assez pour m'envoyer sa montre. » Elle s'essuie les yeux. « Je la remonte depuis huit ans, Madame. Tous les soirs. »",
        "Dans l'escalier, en bas, une porte s'ouvre. Des pas lourds, mouillés. Benoît rentre.",
      ],
      choices: [
        { label: "« Montrez-la-lui. Ce soir. »", fx: { flag: "freres:montre_montree", regard: { heloise: "redevable", benoit: "redevable" } }, to: "XB_h_benoit" },
        { label: "« Jetez-la. Il n'a pas besoin de la voir. »", fx: { flag: "freres:montre_jetee", regard: { heloise: "cordial" } }, to: "XB_h_canal" },
        { label: "« Donnez-la-moi. Je la garde, pour le jour où il faudra. »", fx: { item: "montre_alexis", regard: { heloise: "redevable" } }, to: "XB_h_garde" },
      ] },
    XB_h_tue: { act: "II", title: "La montre", place: "haute_ville", ambiance: "nuit",
      text: [
        "Victorine referme le couvercle, doucement, et rend la montre. Héloïse la remonte, comme tous les soirs, trois tours de clef, et la range dans le mouchoir, dans le tiroir, sous clef.",
        "« Merci de l'avoir regardée, dit-elle. Personne ne l'avait regardée. »",
        "Victorine sort par l'escalier de service, pour ne pas croiser Benoît qui rentre. Elle emporte l'inscription dans sa tête, et elle sait déjà qu'elle ne s'en débarrassera pas aussi facilement qu'on referme un couvercle.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { flag: "freres:montre_tue" }, to: "A2vv_nuit" }] },
    XB_h_benoit: { act: "II", title: "Benoît", place: "haute_ville", ambiance: "nuit",
      text: [
        "Benoît entre dans la chambre, trempé, tête nue, les cheveux collés au front. Il voit sa femme, la montre, la médecin. Il s'arrête.",
        "Héloïse se lève, va vers lui, et lui met la montre ouverte dans la main.",
        "Il lit. Il est lent. Il lit les lettres l'une après l'autre, en remuant les lèvres, comme un homme qui a appris tard. Puis il referme le couvercle, avec le pouce, très délicatement, comme on ferme les yeux d'un mort.",
        "« Je savais, dit-il. Pas la date. Mais je savais. Un homme comme lui ne meurt pas de la fièvre. Il meurt d'une balle, dans un endroit absurde, ou il ne meurt pas. » Il rend la montre à sa femme. « Je n'ai rien dit, parce que je ne voulais pas le savoir. Toi non plus. Nous sommes quittes. »",
        "Il prend sa femme dans ses bras, la montre entre eux deux, et Victorine sort, et referme la porte, et descend l'escalier dans le noir, sans lumière, en tâtant le mur.",
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "A2vv_nuit" }] },
    XB_h_canal: { act: "II", title: "Le canal", place: "haute_ville", ambiance: "nuit",
      text: [
        "Héloïse ouvre la fenêtre. En bas, sous le quai, coule le canal de la Fosse-aux-Lions, noir, lent, avec la pluie qui le crible.",
        "Elle remonte la montre une dernière fois, trois tours de clef, par habitude. Puis elle la lance. L'or brille une seconde dans la lumière de la fenêtre, et disparaît, sans bruit.",
        "« Voilà, dit-elle. Elle marchera encore un jour et demi, au fond de l'eau. Puis elle s'arrêtera. Comme il aurait dû. »",
        "Benoît monte l'escalier. Héloïse referme la fenêtre, s'essuie les yeux, et va à sa rencontre avec un sourire de bal. Victorine sort par l'escalier de service.",
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "A2vv_nuit" }] },
    XB_h_garde: { act: "II", title: "La montre", place: "haute_ville", ambiance: "nuit",
      text: [
        "Héloïse referme le couvercle, enveloppe la montre dans le mouchoir brodé, et la pose dans la main de Victorine.",
        "« Gardez-la, dit-elle. Vous partez avec mon mari. Vous partez peut-être là où l'autre va aussi. S'il faut un jour qu'on la voie, vous saurez quand. Moi, je ne saurais pas. Je l'aurais montrée trop tôt, ou jamais. »",
        "Victorine met la montre dans la poche de sa robe. Elle marche. Elle la sent battre contre sa cuisse, toute la nuit, comme un second cœur, plus rapide que le sien.",
      ],
      choices: [{ label: "Rentrer au Cormoran, par l'escalier de service", to: "A2vv_nuit" }] },
  },
  extras: {
    items: {
      bague_chevalier: { name: "La bague des Quémeneur", kind: "divers", keep: true, price: 0, desc: "Une bague d'or épaisse, à pierre noire, gravée d'un A et d'un Q entrelacés. Gagnée au pharaon, au Lansquenet, contre le Chevalier." },
      montre_alexis: { name: "La montre de Pondichéry", kind: "divers", keep: true, price: 0, desc: "Une montre d'homme en or, de Varnèse, enveloppée dans un mouchoir brodé A. Q. Sous le couvercle intérieur : « À A. Q., de ses amis de Port-Louis, pour son retour d'entre les morts. 14 mars. »" },
    },
  },
};
