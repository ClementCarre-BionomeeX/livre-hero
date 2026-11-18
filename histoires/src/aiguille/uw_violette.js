// L'Île Folle-Aiguille · side story « La femme aux violettes » (owes its question to Wells's The Country of the
// Blind: must one give up what sets one apart, to be loved by those who lack it?). Act IV, the High Orchard: Violette,
// one of the Gentle, thirty years old, was a girl of ten when the Company came down. She meets the child and, chewing,
// cries out that the child has come back. She takes the child home, makes up a bed, braids flowers, and asks only one
// thing: that the child chew, so as to stay, and be happy, and be hers. Aubépine knows that Violette had a little brother,
// Jakez, who died on the crossing. The child refuses kindly (uw:refuse), lives one whole day as her brother or sister
// without chewing (uw:jour), or gives her back the name of the dead boy (uw:nom). Wired in XD_verger.
module.exports = {
  passages: {
    UW_reconnu: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "village",
      fx: { meet: "violette" },
      text: [
        "Elle lâche son panier de prunes quand elle te voit. Les prunes roulent dans l'herbe, violettes, éclatées, et les guêpes arrivent aussitôt. Elle ne les ramasse pas. Elle traverse le verger en courant, pieds nus, sa couronne de violettes de travers, et elle te prend le visage entre ses deux mains. Elle a trente ans, peut-être, de grands yeux bruns un peu vagues, la bouche brune d'écorce. Elle rit. Elle pleure. Elle dit : « Te voilà. Te voilà revenu{e}. Je savais. »",
        "Tu ne la connais pas. Tu le lui dis. Elle rit encore plus fort, comme si tu avais fait une bonne plaisanterie. Elle dit que tu as toujours aimé faire ces plaisanteries-là. Elle te prend par la main et elle t'emmène chez elle, une maison sans porte au bout d'une terrasse, et elle te fait asseoir, et elle te donne du lait, du pain, des figues, et elle te regarde manger avec un bonheur si complet que tu n'oses pas t'arrêter.",
        "Elle ne se souvient pas de ton nom. Elle ne se souvient pas du sien, en dehors de Violette. Elle ne sait pas d'où tu reviens, ni quand tu es parti{e}. Elle sait seulement que tu es à elle, que tu lui manquais, et que maintenant tu es là. Elle le sait avec une certitude qui ne s'appuie sur rien, et qui est d'autant plus solide.",
      ],
      choices: [{ label: "Rester, le temps qu'elle finisse de te regarder manger", to: "UW_lit" }] },
    UW_maison: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "village",
      text: [
        "La maison est faite de branches tressées et de terre sèche, et la lumière y entre par mille petits trous, en aiguilles d'or où dansent des poussières. Elle est propre comme une chapelle. Tout y va par deux. Deux bols de bois sur l'étagère. Deux cuillères. Deux tabourets, un grand et un petit. Deux couvertures pliées, l'une sur l'autre, la plus petite dessus.",
        "Dans le coin opposé au lit qu'elle t'a fait, il y a un autre lit, un lit d'enfant, bas, fait d'un cadre de bois et d'une paillasse. Il est fait. La paillasse est fraîche, et la couverture tirée au carré, avec un pli au bord, comme le font les mères. Une fleur de violette séchée est posée sur l'oreiller. Elle est récente. Il y en a d'autres, plus anciennes, tombées entre le lit et le mur, brunes, noires, réduites en poussière : un tas de fleurs mortes qui a l'épaisseur des années.",
        "Sur une planche, au-dessus du petit lit, une rangée de chemises tissées en fibre d'écorce, pliées, de plus en plus grandes, de gauche à droite. Tu les comptes. Il y en a cinq. La première est pour un enfant de six ans. La cinquième pour un enfant de dix. Puis plus rien. La rangée s'arrête au milieu de la planche, comme une phrase qu'on a cessé d'écrire.",
        "Tu restes là, au milieu des choses qui vont par deux. Tu te demandes ce qui a fait cesser les chemises, la cinquième année. Tu penses à l'écorce. Tu penses qu'il a fallu cinq ans à l'oubli pour arrêter une main, et qu'il ne l'a pas arrêtée tout à fait, puisque les violettes continuent. Dehors, au loin, quelqu'un chante, au verger, une chanson sans paroles.",
      ],
      choices: [
        { back: "UW_lit", label: "Revenir près du lit qu'elle t'a fait" }
      ] },
    UW_verger: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "nature",
      text: [
        "Tu la suis de loin, entre les troncs. Le verger, à cette heure, est plein d'une lumière épaisse et douce, couleur de miel, qui tombe en biais entre les branches chargées, et les Doux y travaillent sans hâte, cueillent, chantent, s'arrêtent pour regarder un insecte, repartent. Tout le monde y sourit. Au bout d'un moment, c'est ce sourire général qui te met mal à l'aise, comme un tableau où tous les personnages regarderaient le peintre.",
        "Violette va d'un arbre à l'autre, un panier au bras, en mâchant. À chaque personne qu'elle croise, elle dit la même chose, d'une voix ravie : « Mon frère est revenu. » Un homme qui gaule des figues lui sourit et dit que c'est bien. Une femme qui tresse un panier lui sourit et dit que c'est bien. Un vieux lui caresse la joue. Ils disent tous que c'est bien, du même ton, et ils se remettent au travail.",
        "Tu t'approches de la femme au panier, quand Violette est passée. Elle te regarde avec sa bonté vague, sans te reconnaître pour celui ou celle dont on parle. Tu lui demandes si Violette a souvent un frère qui revient. La femme réfléchit, longtemps, avec un effort visible, comme on cherche un objet au fond d'une eau trouble. Puis elle dit que oui. Un chevreau, une année. Une mouette à l'aile cassée, une autre. Un petit garçon des proscrits, perdu, qu'on a rendu aux siens. Elle dit que, chaque fois, Violette a été très heureuse. Elle dit que c'est bien.",
        "Elle se remet à tresser. Tu regardes Violette, au loin, qui lève les bras pour cueillir une figue, et qui rit toute seule, la bouche verte. Tu te dis qu'elle t'aimera de tout son cœur, et qu'elle aimera le prochain de la même façon. Tu ne sais pas si cela rend la chose plus triste, ou plus légère. Le soleil baisse. Les arbres allongent leurs ombres jusqu'à tes pieds.",
      ],
      choices: [
        { back: "UW_lit", label: "Revenir à la maison de Violette, avant elle" }
      ] },
    UW_lit: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "village",
      text: [
        { first: true, text: "Elle te fait un lit. Elle va chercher de la paille fraîche, des feuilles de figuier, une couverture tissée de fibres, et elle te fait un lit dans un coin de sa maison, sous la fenêtre, en chantonnant. Elle te tresse une couronne de violettes, la pose sur ta tête, recule pour juger, et dit que c'est mieux. Elle dit que tu vas rester, cette fois. Elle dit que tu seras bien, ici, et qu'on ne te fera plus jamais de mal." },
        { first: true, text: "Puis elle sort de sa poche un morceau d'écorce, et elle te le tend, avec le même sourire qu'elle avait pour le lait. Elle dit qu'il faut mâcher. Elle dit que c'est comme ça qu'on reste. Ceux qui ne mâchent pas s'en vont, toujours, un jour ou l'autre. Elle le dit avec une logique tranquille de femme qui a vu partir des gens. Elle te supplie, doucement. Elle dit : « Reste, cette fois. Ne t'en va plus. »" },
        { first: true, text: "Tu prends l'écorce. Tu la gardes dans ta main fermée. Tu lui dis que tu vas réfléchir. Elle dit oui, oui, qu'il n'y a rien de pressé, et elle repart à son verger, en se retournant trois fois pour s'assurer que tu es toujours là." },
        { first: true, text: "Tu vas trouver Aubépine sous son figuier. Elle sait déjà. Elle dit que Violette s'appelait Gwenola, et qu'elle avait dix ans quand la Compagnie est descendue. Elle avait un petit frère, Jakez, six ans, qui est mort de la fièvre sur le navire, la dernière semaine, et qu'on a jeté à la mer, cousu dans une toile, avec un boulet aux pieds. Gwenola a hurlé trois jours. Puis on lui a donné l'écorce. Depuis vingt ans, elle attend quelqu'un sans savoir qui. Elle a reconnu un enfant de la mer. Elle t'a reconnu{e}, toi." },
        { first: true, if: { item: "carnet_noms" }, text: "Tu ouvres le carnet d'Aubépine. Tu cherches. Tu trouves : Le Moal, Gwenola, dix ans, sans métier, de Kervrastic. Le Moal, Jakez, six ans. Et à côté du second nom, une petite croix, et une vague dessinée à l'encre, que la vieille femme a tracée pour ceux que la mer a pris." },
        { first: true, text: "Aubépine te regarde avec ses yeux de racine. Elle dit que ce n'est pas à elle de te dire quoi faire. Elle dit qu'elle, à ta place, aurait peur, parce que c'est la chose la plus douce qu'on puisse t'offrir sur cette île, et la plus dangereuse : quelqu'un qui t'aime sans te connaître." },
        { again: true, text: "La couronne de violettes te pèse sur la tête, et l'écorce, dans ta main fermée, est devenue tiède." }
      ],
      choices: [
        { label: "Regarder la maison de Violette, pendant qu'elle est au verger", to: "UW_maison", hide: { seen: "UW_maison" } },
        { label: "Suivre Violette au verger, de loin, entre les arbres", to: "UW_verger", hide: { seen: "UW_verger" } },
        { label: "Rendre l'écorce à Violette, et lui dire doucement que tu repars", fx: { flag: "uw:refuse" }, to: "UW_refuse" },
        { label: "Garder l'écorce dans ta joue sans la mâcher, et lui donner une journée", fx: { flag: "uw:jour" }, to: "UW_jour" },
        { label: "Lui rendre le nom de son frère", fx: { flag: "uw:nom" }, to: "UW_nom" },
      ] },
    UW_refuse: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "village",
      text: [
        "Tu reviens à la maison sans porte. Violette est là, qui arrange encore ton lit, qui y glisse une pomme, comme on cache une surprise. Tu lui rends l'écorce. Tu lui dis, doucement, que tu ne peux pas mâcher. Tu lui dis que tu dois te souvenir, parce que des gens t'attendent, en bas, et qu'ils ont besoin que tu te souviennes d'eux. Tu lui dis merci pour le lait, et pour le lit, et pour la couronne.",
        "Elle t'écoute avec un sourire qui ne s'efface pas, mais qui change, lentement, et devient le sourire de quelqu'un qui a l'habitude. Elle hoche la tête. Elle dit qu'elle comprend. Elle dit que c'est toujours comme ça, avec ceux qui ne mâchent pas. Elle te serre dans ses bras, très fort, longtemps. Elle sent la prune et l'écorce. Puis elle te lâche, et elle met un morceau d'écorce dans sa bouche, et elle mâche.",
        "Tu restes là, devant elle. Tu vois ses yeux devenir plus vagues, plus doux. Au bout d'un moment, elle te regarde avec curiosité, comme on regarde un voyageur qui passe, et elle te demande si tu veux une prune. Tu dis oui. Elle t'en donne une. Elle retourne à son verger. Elle chante. Elle ne se retourne pas.",
        "Le soir, à la danse, elle te croise sans te reconnaître. Elle danse avec un garçon couronné de liserons. Elle a l'air heureuse. Tu as la couronne de violettes dans ta poche, fanée. Tu as refusé d'oublier pour être aimé{e}, et tu as découvert que l'oubli marchait aussi dans l'autre sens. Tu te demandes lequel de vous deux a eu le plus mal. Tu sais déjà que c'est toi, et que c'est le prix de ce que tu as gardé.",
      ],
      choices: [{ label: "Retourner parmi les vergers", fx: { quest: "UW" }, back: "XD_verger" }] },
    UW_jour: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "village",
      text: [
        "Tu mets l'écorce dans ta joue, sans la mâcher. Elle a un goût de cannelle amère et de terre. Tu la gardes là, toute la journée, pendant que Violette te mène par la main à travers les terrasses. Elle te montre ses arbres. Elle te dit le nom de chacun, des noms inventés, qu'elle change d'une heure à l'autre. Elle te fait cueillir des prunes, elle te fait boire à la source, elle te coiffe, elle te raconte des histoires qui n'ont pas de fin, parce qu'elle oublie le début en route.",
        "Tu joues le jeu. Tu l'appelles grande sœur, parce qu'elle te l'a demandé. Tu ris de ses histoires. Tu manges ce qu'elle te donne. Tu as l'impression étrange d'être un autre enfant, plus petit, dont toute la vie tiendrait dans ce verger, entre une grande sœur aux pieds nus et des prunes à cueillir. C'est très reposant. C'est terrifiant à quel point c'est reposant.",
        "Le soir, elle te couche dans le lit de paille, sous la fenêtre. Elle s'assied à côté. Elle chante, très bas, une chanson que tu ne connais pas, une berceuse de la côte, avec des mots de marin, une berceuse qu'on chante aux petits garçons. Sa voix se brise sur un mot. Elle s'arrête. Elle te regarde, dans le noir, avec une expression d'effroi. Puis elle reprend, et termine, et t'embrasse sur le front, et s'endort assise contre le mur.",
        "Tu craches l'écorce à l'aube, dans ta main. Tu poses la couronne de violettes sur ta paillasse. Tu sors sans bruit. Tu n'as rien oublié. Tu as seulement prêté une journée de ta vie à quelqu'un qui en avait perdu vingt. Tu te demandes si c'était un cadeau ou une cruauté. Tu te dis qu'elle a dormi assise, contre le mur, d'un sommeil de sentinelle, et qu'elle n'avait pas dormi comme ça depuis longtemps.",
      ],
      choices: [{ label: "Retourner parmi les vergers", fx: { quest: "UW" }, back: "XD_verger" }] },
    UW_nom: { act: "IV", title: "La femme aux violettes", place: "haut_verger", ambiance: "village",
      text: [
        "Tu reviens à la maison sans porte. Violette arrange ton lit. Tu t'assieds sur le seuil. Tu attends qu'elle vienne s'asseoir près de toi. Elle vient. Alors tu lui dis, très doucement, que tu n'es pas celui qu'elle attend. Tu lui dis qu'elle s'appelle Gwenola. Tu lui dis qu'elle avait un petit frère, il y a longtemps, sur un navire, et qu'il s'appelait Jakez.",
        "Elle te regarde sans comprendre. Elle répète le nom. Jakez. Elle le dit une fois, deux fois, comme on goûte un fruit inconnu. À la troisième fois, quelque chose se passe sur son visage. Tu le vois arriver de très loin, du fond de vingt ans d'écorce, comme une vague qui monte d'un large qu'on croyait calme. Elle porte la main à sa bouche. Elle dit : « La toile. Ils l'ont cousu dans une toile. » Et elle se met à crier.",
        "Elle crie longtemps. Les Doux accourent, inquiets, souriants, et lui tendent de l'écorce, des mains entières d'écorce. Elle les repousse. Elle te serre contre elle, à t'étouffer, et elle pleure dans ton cou, et elle dit Jakez, Jakez, et elle dit aussi ton nom, {joueur}, qu'elle a dû entendre ce matin, et elle les mélange. Tu la laisses faire. Tu as peur d'avoir fait une chose qu'on ne répare pas.",
        "Quand elle se calme, à la nuit, elle a les yeux rouges et parfaitement clairs. Elle te regarde, et elle sait que tu n'es pas Jakez. Elle te remercie. Elle dit qu'elle a attendu vingt ans quelqu'un qui ne pouvait pas revenir, et que c'est fini, maintenant, puisqu'elle sait qui elle attendait. Elle dit qu'elle va descendre jusqu'à la mer, demain, pour la voir, celle qui l'a pris. Puis elle regarde le morceau d'écorce dans sa main. Elle hésite très longtemps. Elle le pose sur le seuil, à côté d'elle. Elle ne le mâche pas. Elle ne le jette pas non plus. Tu pars sans savoir ce qu'elle en fera, le matin venu.",
      ],
      choices: [{ label: "Retourner parmi les vergers", fx: { quest: "UW" }, back: "XD_verger" }] },
  },
  extras: {
    people: {
      violette: { name: "Violette", aka: ["Gwenola Le Moal", "la femme aux violettes"], f: true, qui: "Une des Doux du Haut-Verger, trente ans, qui avait dix ans quand la Compagnie est descendue." },
    },
    quests: [
      { id: "UW", act: "IV", kind: "annexe", title: "La femme aux violettes", start: "UW_reconnu", doit: "paysaveugles", echo: ["uw:refuse", "uw:jour", "uw:nom"] },
    ],
  },
};
