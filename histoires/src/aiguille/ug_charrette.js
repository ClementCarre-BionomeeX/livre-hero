// L'Île Folle-Aiguille · side story « La charrette de la Persévérante » (owes its question to Manon Lescaut: how far may
// love follow a person who has betrayed it, and who has the right to stop it?). Act II, the mousse in Morlenc: a cart
// of condemned women is led down the quay to the Persévérante, a transport bound for the penal islands of the West.
// Behind it, bareheaded, walks Gaspard de Kermorvan, twenty, son of a councillor of the Haute-Ville, who means to follow
// Désirée Gall, the girl who ruined him twice, to the end of the world. Désirée, when the child brings water to the
// cart, asks: « Tell him to go home. » The child delivers her message (ug:message), helps Gaspard sign on the transport
// (ug:aide), or runs up to the Haute-Ville to fetch his father (ug:pere). Wired in A2m_jours.
module.exports = {
  passages: {
    UG_flute: { act: "II", title: "La charrette de la Persévérante", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Au pied de la passerelle de la Persévérante, un matelot épisse un cordage, assis sur une bitte, avec la tranquillité d'un homme qui en a vu d'autres. Il a la cinquantaine, une figure couleur de vieux cuir, et un anneau de cuivre à chaque oreille. Il répond à ta question sans lever les yeux de son épissure, comme on parle du temps qu'il fera.",
        "Il dit que la traversée dure entre deux et trois mois, selon les vents. Que les femmes voyagent dans l'entrepont, à fond de cale, dans un parc fermé par des barreaux, où l'on tient debout en se courbant. Qu'on les monte sur le pont une heure par jour, par groupes de dix, pour l'air, quand il fait beau. Qu'on leur donne la même ration qu'aux matelots, moins le vin.",
        "Il dit que, sur une vingtaine, il en arrive d'ordinaire quinze. Les autres, la fièvre, le flux de sang, le chagrin. Il dit que le chagrin tue plus vite qu'on ne croit, surtout les jeunes. Il dit qu'on coud les mortes dans un sac, avec un boulet, et que l'aumônier dit trois mots, quand il y a un aumônier. Cette fois, il n'y en a pas.",
        "Il serre son épissure. Il dit, en regardant enfin la charrette : « Les jolies, c'est les premières à partir. Elles ne mangent pas. Elles ont l'habitude qu'on les nourrisse. » Puis il te regarde, toi. Il demande si tu connais l'une d'elles. Tu dis non. Il dit que c'est mieux, et il reprend son cordage."
      ],
      choices: [
        { back: "UG_quai", label: "Retourner au bord du quai" }
      ] },
    UG_mere: { act: "II", title: "La charrette de la Persévérante", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Elle marche à côté de la charrette, de l'autre côté du jeune homme, une vieille femme en coiffe noire, voûtée, avec un pain rond serré sous le bras comme un enfant. Les gendarmes la repoussent du plat de leur sabre. Elle recule de trois pas, puis revient, comme une mouette qu'on chasse d'un tas de poissons. Elle ne crie pas. Elle suit.",
        "Tu marches un moment à côté d'elle. Elle te regarde, avec des yeux rougis, sans larmes, et elle te dit, comme si tu lui avais demandé, que sa fille est la troisième à gauche, la grande, la brune, celle qui a le front bandé. Elle dit que sa fille a volé une pièce de drap chez un marchand de la rue des Juges, pour lui faire un manteau, à elle, la mère, parce qu'elle avait froid l'hiver dernier.",
        "Elle dit qu'elle a le manteau sur le dos. Tu regardes. C'est un manteau de drap gris, épais, neuf encore, trop beau pour une vieille femme de la Basse-Fosse. Elle dit que les gendarmes ont voulu le reprendre, comme pièce à conviction, et que le juge a dit de le lui laisser, par pitié. Elle dit que le juge était un brave homme. Elle dit que sa fille part pour toujours, et qu'elle a un manteau.",
        "Elle te tend le pain. Elle te demande de le porter à sa fille, toi qui as l'air de pouvoir passer. Elle dit que les gendarmes laisseront passer un mousse. Elle dit : « C'est du pain de chez nous. Elle aimait la croûte. » Tu prends le pain. Il est encore tiède."
      ],
      choices: [
        { back: "UG_quai", label: "Retourner au bord du quai, le pain sous le bras" }
      ] },
    UG_quai: { act: "II", title: "La charrette de la Persévérante", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "gaspard" },
      text: [
        { first: true, text: "Elle descend le quai des Hollandes au pas, une charrette de ferme à ridelles, tirée par deux bœufs, entre quatre gendarmes à cheval. Dedans, debout, serrées comme des harengs en caque, une vingtaine de femmes, enchaînées deux par deux par la cheville. Voleuses, receleuses, filles des quartiers bas, une empoisonneuse, à ce qu'on dit, et deux ou trois qui ne savent pas elles-mêmes ce qu'on leur reproche. Au bout du quai, le transport les attend : la Persévérante, une flûte ventrue, à la peinture écaillée, qui part demain pour les îles du Couchant, où l'on envoie ce que Morlenc ne veut plus voir." },
        { first: true, text: "Les dockers s'arrêtent pour regarder. On lance des quolibets, des trognons, un mot obscène qui fait rire. Les femmes regardent devant elles. L'une d'elles, au milieu, est plus jeune que les autres, dix-huit ans peut-être, avec des cheveux châtains coupés court par le bourreau, et un visage d'une beauté si insolente que les quolibets s'arrêtent net quand ils arrivent à elle, comme s'ils hésitaient." },
        { first: true, text: "Derrière la charrette, à vingt pas, tête nue, marche un jeune homme. Habit de bon drap, souillé de boue jusqu'aux genoux. Cravate défaite. Pas de chapeau, pas de canne, pas de montre : on voit la chaîne qui pend, vide, à son gilet. Il ne regarde rien d'autre que la nuque de la fille aux cheveux coupés. Il marche comme on marche derrière un cercueil." },
        { first: true, text: "Gobert, qui t'a envoyé chercher un rouleau de filin, s'arrête à côté de toi et crache. « Le fils Kermorvan, dit-il. Le conseiller. Il la suit depuis la prison. Ça fait trois jours. Elle l'a ruiné deux fois, à ce qu'on raconte, et elle l'a quitté deux fois pour un autre. Et le voilà. » Il hausse les épaules. « L'amour, mousse. C'est pire que le scorbut. Au moins le scorbut, on sait ce qui le soigne. »" },
        { again: true, text: "La charrette attend au pied de la passerelle, et derrière elle, tête nue, le fils Kermorvan regarde une nuque aux cheveux coupés." }
      ],
      choices: [
        { label: "Demander à un matelot de la Persévérante comment se passent ces traversées", to: "UG_flute", hide: { seen: "UG_flute" } },
        { label: "Regarder la vieille femme qui suit la charrette avec un pain sous le bras", to: "UG_mere", hide: { seen: "UG_mere" } },
        { label: "Porter le seau d'eau du quai aux femmes de la charrette", to: "UG_eau" }
      ] },
    UG_eau: { act: "II", title: "La charrette de la Persévérante", place: "quai_hollandes", ambiance: "ville",
      text: [
        "La charrette s'arrête au pied de la passerelle, le temps qu'on prépare l'embarquement. Il fait chaud. Les femmes ont soif. Personne ne bouge. Tu prends le seau de la fontaine du quai et la louche de fer, et tu t'approches. Un gendarme lève la main, puis la baisse. Tu fais passer la louche, de main en main. Les femmes boivent comme des bêtes, en renversant. La fille aux cheveux coupés boit la dernière, lentement, en te regardant par-dessus la louche.",
        "Elle dit, à voix basse : « Tu le vois, derrière ? » Tu dis oui. Elle dit qu'elle s'appelle Désirée. Elle dit qu'il s'appelle Gaspard, qu'il est fou, qu'il a vendu sa montre, ses livres, la bague de sa mère, pour payer les avocats, puis les geôliers, puis rien. Elle dit qu'elle l'a trompé, et volé, et quitté, et qu'il le sait. Elle dit qu'elle l'aime aussi, à sa façon, qui ne vaut pas grand-chose, mais que c'est la seule qu'elle ait. Elle te rend la louche.",
        "Puis elle te prend le poignet, fort, avec une main sale qui ne tremble pas. « Dis-lui de rentrer chez son père. Dis-lui que je ne veux pas de lui là-bas. Que je ne l'ai jamais aimé. Que je me moque de lui. Dis-le bien, avec des mots méchants. Il croira un gamin. Il ne me croit plus, moi. » Elle te lâche. Elle se retourne vers la passerelle. Tu vois ses épaules, et tu sais qu'elle pleure, et qu'elle ne veut pas qu'on la voie.",
        "Gaspard de Kermorvan s'est approché. Il a vu la fille te parler. Il te prend par la manche, très poliment, et te demande ce qu'elle a dit. Puis, sans attendre ta réponse, il te demande autre chose : tu es de la marine, tu connais le quai, tu sais comment on s'engage sur un navire. Il veut s'engager sur la Persévérante. Matelot, mousse, cuisinier, n'importe quoi. Il a vingt ans. Il ne sait rien faire. Il paiera avec ce qu'il lui reste, c'est-à-dire avec rien.",
      ],
      choices: [
        { label: "Lui répéter ce qu'elle a dit, avec les mots méchants", fx: { flag: "ug:message" }, to: "UG_message" },
        { label: "L'emmener chez le maître d'équipage de la Persévérante", fx: { flag: "ug:aide" }, to: "UG_aide" },
        { label: "Courir à la Haute-Ville chercher le conseiller son père", fx: { flag: "ug:pere" }, to: "UG_pere" },
      ] },
    UG_message: { act: "II", title: "La charrette de la Persévérante", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Tu lui répètes. Tous les mots, et les méchants, ceux qu'elle a voulus. Qu'elle ne veut pas de lui. Qu'elle ne l'a jamais aimé. Qu'elle se moque de lui. Tu les dis mal, parce que ce ne sont pas les tiens, et parce que tu as vu ses épaules. Mais tu les dis. Il t'écoute jusqu'au bout. Il ne bouge pas. Puis il demande, très doucement, si elle t'a dit de dire ça avec des mots méchants. Tu ne réponds pas. Il comprend. Il sourit, d'un sourire terrible.",
        "Il dit qu'elle a toujours menti pour son propre compte, et que c'est la première fois qu'elle ment pour le sien à lui. Il dit que c'est la plus belle chose qu'elle lui ait jamais donnée. Il dit merci. Puis il s'assied sur une bitte d'amarrage, au bord du quai, et il regarde embarquer les femmes, une par une, sur la passerelle, avec leurs chaînes qui sonnent sur les planches. Désirée passe la dernière. Elle ne se retourne pas. Il ne l'appelle pas.",
        "Il reste là jusqu'au soir. Tu passes deux fois devant lui. La deuxième fois, il te demande ton nom, et il te dit qu'il rentrera chez son père, demain, puisqu'elle l'a demandé, et que c'est la seule chose qu'elle lui ait jamais demandée. Il dit qu'il la respectera. Il dit qu'il ne sait pas s'il aura le courage, ni pour combien de temps.",
        "La Persévérante appareille à l'aube. Il est sur le quai, tête nue, et il regarde la flûte jusqu'à ce qu'elle passe le bout de la jetée. Puis il remonte vers la Haute-Ville, à pied, très lentement. Tu as porté une lettre d'amour déguisée en lettre de rupture, et elle est arrivée. Tu ne sais pas si tu as aidé une femme à sauver un homme, ou à le perdre plus sûrement.",
      ],
      choices: [{ label: "Retourner à la Cormorane, avec le rouleau de filin", fx: { quest: "UG" }, back: "A2m_jours" }] },
    UG_aide: { act: "II", title: "La charrette de la Persévérante", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Tu ne lui dis rien du message. Tu te dis que ce n'est pas à toi de choisir entre ce qu'elle dit et ce que disaient ses épaules. Tu le mènes au maître d'équipage de la Persévérante, un gros homme au nez violet qui recrute sur un tonneau, au pied de la passerelle, et qui le regarde de haut en bas, l'habit, les mains blanches, la chaîne de montre vide. Il rit. Puis il dit qu'il manque un aide au coq, à cause d'une rixe, et qu'il prendra n'importe quoi qui sait éplucher une pomme de terre. Sans solde. Pour la nourriture.",
        "Gaspard signe. Il signe de son nom entier, avec la particule, d'une belle écriture de collège, sur le registre crasseux, sous une croix et une autre croix. Le maître d'équipage rit encore plus fort. Puis il lui jette un tablier. Gaspard le noue sur son habit de bon drap. Il te remercie. Il te serre la main, comme à un égal. Il monte la passerelle derrière les femmes, son tablier sur le ventre, et il disparaît dans l'écoutille de la cuisine.",
        "Le soir, tu le revois sur le pont de la flûte, au bord de l'écoutille grillagée de la cale des femmes. Il est assis par terre, le dos contre le grillage. De l'autre côté, une tête aux cheveux coupés est appuyée contre le même grillage, à la même hauteur, dos à dos. Ils ne se regardent pas. Ils parlent, peut-être. Le soleil se couche sur le port.",
        "La Persévérante appareille à l'aube. Gobert, qui l'apprend, te traite d'imbécile et te dit que tu as envoyé un fils de conseiller à la mort, aux fièvres du Couchant, pour une voleuse qui le volera encore. Il a peut-être raison. Tu as donné à un homme ce qu'il demandait, contre ce qu'elle demandait. Tu ne sais pas lequel des deux avait le droit de décider. Tu sais seulement qui marchait derrière la charrette.",
      ],
      choices: [{ label: "Retourner à la Cormorane, avec le rouleau de filin", fx: { quest: "UG" }, back: "A2m_jours" }] },
    UG_pere: { act: "II", title: "La charrette de la Persévérante", place: "haute_ville", ambiance: "ville",
      text: [
        "Tu cours. La côte des Hollandes, la rue des Juges, les places aux noms de saints. On t'indique l'hôtel Kermorvan, une maison grise à grand portail. Un valet te ferme la porte au nez. Tu frappes encore. Tu cries le nom du fils. La porte se rouvre. Le conseiller de Kermorvan descend lui-même, un homme sec, en robe de chambre, avec le visage de quelqu'un qui n'a pas dormi depuis trois jours, lui non plus. Il t'écoute. Il prend son chapeau. Il ne prend pas le temps de s'habiller.",
        "Il arrive au quai en fiacre, au moment où les femmes montent la passerelle. Il descend, en robe de chambre, et marche droit sur son fils. Il ne crie pas. Il lui pose la main sur l'épaule. Gaspard se retourne. Ils se regardent. Le père dit seulement : « Viens. » Gaspard secoue la tête. Le père dit : « Ta mère. » Gaspard ferme les yeux. Sur la passerelle, Désirée s'est arrêtée, la dernière, et regarde la scène, de haut, avec un visage qu'on ne peut pas lire.",
        "Puis elle fait une chose étrange. Elle crie, d'une voix de harengère, que le petit monsieur peut bien rentrer chez son papa, qu'elle en a eu assez de lui, qu'il ne valait pas une montre en fer blanc. Les dockers rient. Gaspard la regarde. Elle rit aussi, d'un rire faux qu'on entend jusqu'au bout du quai. Puis elle disparaît dans l'écoutille. Gaspard se laisse emmener. Il monte dans le fiacre. Le conseiller te jette une pièce d'or, sans te regarder, par la portière.",
        "Tu regardes la pièce dans ta main. Tu as rendu un fils à son père, et une femme a menti pour t'aider, sans que tu le lui demandes. Tu ne sais pas si tu as fait ce qu'elle voulait, ou si tu lui as seulement épargné de le faire elle-même. Tu gardes la pièce. Elle pèse plus lourd qu'elle ne devrait.",
      ],
      choices: [{ label: "Retourner à la Cormorane, avec le rouleau de filin", fx: { gold: 10, quest: "UG" }, back: "A2m_jours" }] },
  },
  extras: {
    people: {
      gaspard: { name: "Gaspard de Kermorvan", aka: ["le fils du conseiller"], qui: "Fils d'un conseiller de la Haute-Ville de Morlenc, qui a suivi à pied la charrette des condamnées." },
    },
    quests: [
      { id: "UG", act: "II", kind: "annexe", title: "La charrette de la Persévérante", start: "UG_quai", doit: "manonlescaut", echo: ["ug:message", "ug:aide", "ug:pere"] },
    ],
  },
};
