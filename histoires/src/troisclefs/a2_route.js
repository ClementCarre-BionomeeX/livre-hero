// Act II, the road: three days from the lock of the Trois-Saules to the pass above Ferrières. The towpath, the inn of
// the Croix-de-Fer (where Maître Crochemore catches up), the Bois-Noir and its charcoal-burners, the Syndic's barrier.
// Sets: monde:a2:charbonniers (the burners owe the Rossignols a turn). Personal: a2:croch_confiant | a2:croch_mefiant,
// a2:douce_route (saw Sans-Bruit ride north), a2:hote (knows who slept at the inn), a1:signalement (read here).
module.exports = {
  passages: {
    A2c_route: { act: "II", title: "L'écluse des Trois-Saules", place: "canal", ambiance: "eau",
      fx: { catchup: 5, catchupWhy: "ce que la ville t'a appris en deux nuits", until: 9, rest: true },
      text: [
        "La gabare vous laisse à l'écluse des Trois-Saules, où la Morne et le canal du Nord se séparent comme deux personnes qui n'ont plus rien à se dire : la rivière s'en va vers le sud, large, paresseuse, entre ses prés ; le canal file au nord-est, droit, étroit, bordé d'un chemin de halage où l'herbe a renoncé.",
        { if: { has: "a1:large_patron" }, text: "Le marinier à barbe rousse te regarde sauter sur la berge. « Tu descends là ? La mer est de l'autre côté. » Il hausse les épaules. « La place reste. Je repasse à la lune. » Il pousse sa perche, et la *Sarcelle* emporte vers l'aval tout ce que tu avais voulu." },
        "Il est neuf heures, il fait beau, et vous êtes trois compagnons limeurs qui vont chercher de l'ouvrage à Ferrières. Les passeports le disent. C'est à trois jours : le canal jusqu'à l'auberge de la Croix-de-Fer, le Bois-Noir, puis le col.",
        "L'éclusier, un manchot qui tourne ses vannes avec le coude, vous regarde compter vos pieds. « À pied, vous y serez après-demain soir, si vous avez de bonnes jambes. Y a une gabare de fer qui remonte à vide et cherche des haleurs : ça paie dix sous, ça use les épaules. Ou le roulier, là, qui charge du charbon. Lui, faut le payer, ou l'écouter. »",
      ],
      choices: [
        { label: "Le chemin de halage, à pied, à ton pas", to: "A2c_halage" },
        { label: "La bricole à l'épaule, avec les haleurs de la gabare", test: { dom: "combat", diff: 10, label: "Combat" }, win: { fx: { gold: 10, ep: ["perso", 400] }, to: "A2c_gabare" }, lose: { fx: { pv: -2, gold: 5 }, to: "A2c_gabare" } },
        { label: "Le chariot du roulier, pour cinq sous", if: { gold: { min: 5 } }, fx: { gold: -5 }, to: "A2c_roulier" },
      ] },

    A2c_halage: { act: "II", title: "Le chemin de halage", place: "canal", ambiance: "eau",
      text: [
        "On marche bien, le long d'un canal. Le chemin est plat, l'eau tient compagnie, et les peupliers comptent les pas à votre place. De loin en loin, une gabare vous croise, chargée de barres de fer jusqu'au ras du bord, si lente qu'on a le temps d'échanger des nouvelles avec l'homme de barre et d'en changer d'avis avant qu'il soit passé.",
        "Vers midi, vous rattrapez un colporteur. Il porte sur le dos une hotte à tiroirs et, à bout de perche, un tableau de toile peinte divisé en six cases, qu'il explique en chantant aux villages : c'est le canard du pays, les nouvelles en images pour ceux qui ne lisent pas.",
        "La toile est neuve. La peinture en est encore poisseuse. Dans la première case, une tour ; dans la seconde, un vieillard à sa table ; dans la troisième, trois figures noires, masquées, dont l'une lève un marteau.",
      ],
      choices: [{ label: "L'écouter chanter sa complainte", to: "A2c_images" }] },
    A2c_images: { act: "II", title: "La complainte des trois Rossignols", place: "canal",
      text: [
        "Il ne se fait pas prier. Il plante sa perche, frappe la toile d'une baguette, et chante, sur l'air des pendus :",
        "*Écoutez, gens d'Aiguemorne et d'ailleurs, / Le forfait de trois oiseaux de malheur…*",
        "Il y a douze couplets. Vous y égorgez le Remonteur pour lui voler une montre d'or, vous buvez son vin, vous dansez autour du cadavre ; au onzième, le Juge de Bronze, du haut de sa tour, verse une larme d'huile. Le douzième promet cent écus.",
        { if: { has: "monde:a1:fuite=propre" }, text: "Les trois figures peintes n'ont pas de visage : des capes, des masques, des griffes. Le peintre n'avait rien pour travailler. Vous pourriez poser devant la toile qu'on ne ferait pas le rapport.", else: "Le peintre avait de quoi travailler. Les trois figures sont masquées, mais on leur a donné une taille, une carrure, une façon de se tenir, d'après ce qu'ont vu vingt gardes. C'est grossier, et c'est vous." },
        "« Deux liards la feuille, dit le colporteur. J'en ai vendu quarante depuis hier. Les gens aiment bien quand c'est des voleurs : ça les change des loups. »",
      ],
      choices: [
        { label: "Lui acheter la complainte : on aime savoir ce qu'on a fait", if: { gold: { min: 1 } }, fx: { gold: -1, clue: "r_complainte", ep: ["perso", 200] }, to: [{ if: { has: "monde:a1:fuite=propre" }, to: "A2c_soir1" }, { to: "A2c_images_regard" }] },
        { label: "Presser le pas, et le laisser derrière", to: [{ if: { has: "monde:a1:fuite=propre" }, to: "A2c_soir1" }, { to: "A2c_images_regard" }] },
      ] },
    A2c_images_regard: { act: "II", title: "Trois limeurs", place: "canal",
      text: [
        "Le colporteur vous regarde vous éloigner. Puis il regarde sa toile. Puis vous, de nouveau, trois dos sur un chemin de halage, dans cet ordre de taille.",
        "Il ne dit rien. Un colporteur vit de ce qu'il raconte, et il lui faut du temps pour raconter : il ne courra pas au guet. Mais au prochain village, il chantera un treizième couplet.",
      ],
      fx: { flag: "a1:signalement" },
      choices: [{ label: "Marcher jusqu'au soir", to: "A2c_soir1" }] },

    A2c_gabare: { act: "II", title: "La bricole", place: "canal", ambiance: "eau",
      text: [
        { outcome: "lose", text: "La bricole est une sangle de cuir qu'on se passe en travers de la poitrine, et au bout de laquelle il y a soixante tonneaux de bateau. Au bout d'une lieue, tu as compris pourquoi les haleurs marchent penchés toute leur vie. Au bout de deux, le patron te fait monter à bord, par pitié, et te retient la moitié de la paie." },
        { outcome: "win", text: "La bricole est une sangle de cuir qu'on se passe en travers de la poitrine, et au bout de laquelle il y a soixante tonneaux de bateau. On ne tire pas : on se laisse tomber en avant, et l'on recommence. Tu trouves le pas avant la première lieue." },
        "La gabare s'appelle la *Bonne-Mesure* et remonte à vide chercher du fer. Son patron, assis sur le rouf, parle aux haleurs comme on parle à des chevaux, sans attendre de réponse.",
        "« Vingt mille livres de bronze, leur cloche. J'en ai monté le cuivre, moi, en trois voyages. Et l'étain. Et vous savez ce qu'ils ont mis dedans, pour finir ? Des sous. Des sous de la vallée. Le Syndic a fait une quête dans les corons : *chacun donnera pour la cloche, elle sonnera pour tous.* Les gueules grises ont donné. On leur avait fait comprendre. » Il crache dans le canal. « Elle sonnera pour tous, ça oui. Elle sonnera l'heure de descendre. »",
      ],
      choices: [{ label: "Tirer jusqu'au soir", to: "A2c_soir1" }] },

    A2c_roulier: { act: "II", title: "Le chariot de charbon", place: "canal",
      text: [
        "Le roulier s'appelle le père Anthime et mène quatre chevaux gris de poussière, attelés à un chariot dont les roues sont plus hautes que toi. Il vous fait monter sur les sacs. On s'y enfonce ; on en sortira nègres comme des ramoneurs, mais on y est assis.",
        "Il parle. Un roulier seul sur une route droite parle à ses chevaux, à ses roues, à Dieu ; un passager est une aubaine.",
        "« Ferrières ? De l'ouvrage, il y en a. Pour être payé, c'est autre chose. Là-bas, on ne touche pas de sous, on touche des jetons : des rondelles de fer, avec le marteau du Syndic dessus. Ça ne vaut qu'à l'Économat, qui est au Syndic, où le pain coûte le double. Alors on doit. Toute la vallée doit. C'est écrit dans un gros livre, qu'il garde sous clef, et à la mort du père la dette passe au fils avec la pioche. »",
        "Il fait claquer son fouet. « Y en a une, là-haut, qui dit que ça suffit. Une veuve. La Grise, on l'appelle. Elle a perdu son homme et deux garçons dans la même galerie, et le Syndic lui a porté leurs dettes le lendemain de l'enterrement. Elle veut arrêter la mine le jour de la cloche. Moi je dis qu'elle a raison, et je dis aussi qu'on la trouvera un matin au fond d'un puits. »",
      ],
      fx: { clue: "s_jetons", ep: ["perso", 300] },
      choices: [{ label: "Rouler jusqu'au soir", to: "A2c_soir1" }] },

    // ------------------------------------------------------------ the Croix-de-Fer
    A2c_soir1: { act: "II", title: "La Croix-de-Fer", place: "croixdefer", hub: true, backName: "la salle de la Croix-de-Fer",
      fx: { until: 19 },
      text: [
        { first: true, text: "L'auberge de la Croix-de-Fer est au carrefour du canal et de la grand-route, et elle a l'aspect des maisons qui ont vu passer beaucoup de monde sans s'attacher à personne : une façade longue, des écuries pour quarante chevaux, et au-dessus de la porte une croix de fer forgé haute de six pieds, où les rouliers accrochent leurs fouets en entrant." },
        { first: true, text: "La salle est basse, enfumée, pleine. On y soupe à la grande table, tous ensemble, voyageurs et postillons. Sur la porte, à l'intérieur, à hauteur d'yeux, on a cloué un placard encore humide de colle." },
        { first: true, text: "Vous vous asseyez au bas bout, là où s'asseyent les compagnons qui cherchent de l'ouvrage." },
        { again: true, text: "La salle, sa fumée, la grande table. Le placard sur la porte. L'hôte va et vient, un torchon sur l'épaule." },
      ],
      choices: [
        { label: "Lire le placard", to: "A2c_affiche", once: true },
        { label: "Faire causer l'hôte, en commandant la soupe", to: "A2c_hote", once: true },
        { label: "Regarder qui soupe au haut bout", to: "A2c_brigadier", once: true },
        { label: "Aller voir ce qui fait ce vacarme dans la cour", to: "A2c_croch", hide: { any: [{ has: "a2:croch_confiant" }, { has: "a2:croch_mefiant" }] } },
        { label: "Monter dormir", to: "A2c_nuit1", big: true, if: { any: [{ has: "a2:croch_confiant" }, { has: "a2:croch_mefiant" }] }, why: "On crie ton nom de métier dans la cour : mieux vaut aller voir avant de dormir." },
      ] },
    A2c_affiche: { act: "II", title: "Cent écus", place: "croixdefer",
      text: [
        "*DE PAR LE GOUVERNEUR ET LE PRÉVÔT D'AIGUEMORNE. Cent écus à qui livrera, morts ou vifs, les trois malfaiteurs dits les Rossignols, prévenus du meurtre de Maître S. Balancier, Remonteur de la Tour.*",
        { if: { has: "monde:a1:fuite=propre" }, text: "Suit un signalement qui tient en deux lignes et conviendrait à la moitié du pays : *trois personnes, jeunes, agiles, vêtues de sombre.* Le prévôt est un homme honnête. Il n'a pas inventé ce qu'il n'a pas vu.", else: "Suit un signalement, en trois paragraphes, où il y a des tailles, des cheveux, une démarche. Tu lis le tien. C'est une impression curieuse : on se reconnaît moins bien qu'on ne reconnaît les deux autres." },
        "Tout en bas, d'un caractère plus petit, une ligne que les gens ne lisent pas : *Le prévôt recevra aussi, et tiendra secret, tout renseignement sur les personnes vues aux abords de l'impasse des Poids dans la soirée du crime, quelles qu'elles soient.*",
        { if: { has: "monde:a1:lettre_remise" }, text: "*Quelles qu'elles soient.* Il a lu la demi-feuille. Il cherche trois voleurs parce qu'on le lui ordonne ; il cherche autre chose parce qu'il est le Cadenas." },
      ],
      fx: { clue: "r_placard" },
      choices: [{ back: "A2c_soir1" }] },
    A2c_hote: { act: "II", title: "L'hôte", place: "croixdefer",
      text: [
        "L'hôte de la Croix-de-Fer a une mémoire d'aubergiste : il oublie les visages et retient les additions.",
        "« Du beau monde ? Avant-hier, le Syndic des Maîtres du Fer, en personne. Le coche entier pour lui. Il a soupé de six plats, il a recompté la note deux fois, et il m'a fait ôter les bouts de chandelle : *je paie la chandelle brûlée, pas la chandelle fournie.* Sa demoiselle n'a rien mangé. Elle a passé la soirée à la fenêtre, à regarder la route par où elle était venue. »",
        "« Et depuis ? »",
        "« Hier, un seul. Mais il comptait pour trois. » L'hôte baisse la voix, malgré lui. « Un homme sur un cheval de labour, parce qu'un cheval de selle n'en voudrait pas. La tête rase, un tablier de cuir. Il n'a pas voulu de lit : il a dormi à l'écurie, assis, le dos au mur. Au matin, le palefrenier l'a trouvé qui lavait quelque chose à l'abreuvoir. Un marteau. Il le lavait comme on lave un enfant. »",
        "L'hôte essuie la table. « Il a payé avec un jeton de Ferrières. Je l'ai pris. Je n'ai pas osé dire que ça n'avait pas cours. »",
      ],
      fx: { flag: "a2:hote", clue: "r_abreuvoir", ep: ["perso", 300] },
      choices: [{ back: "A2c_soir1" }] },
    A2c_brigadier: { act: "II", title: "Le haut bout", place: "croixdefer",
      text: [
        "Au haut bout de la table, près du feu, soupent deux cavaliers de la maréchaussée, le chapeau sur la chaise, le sabre entre les jambes. Le brigadier a une moustache rousse et mange avec méthode. De temps en temps, il lève les yeux de son assiette et fait le tour de la salle, sans s'arrêter sur personne, comme on compte un troupeau.",
        { if: { has: "a1:signalement" }, text: "Sur toi, il s'arrête. Une seconde. Il a dans sa poche le papier que le sergent de l'Octroi a écrit, ou le treizième couplet d'un colporteur lui est venu aux oreilles.", else: "Il passe sur toi comme sur les autres. Trois limeurs au bas bout : cela se voit tous les soirs." },
      ],
      choices: [
        { label: "Lui porter le pichet, en garçon serviable, et lui montrer ton passeport sans qu'il le demande", if: { has: "a1:signalement" }, test: { dom: "social", diff: 0, label: "Social", help: [{ if: { item: "cachet_merlettes" }, v: 10 }] }, win: { fx: { unflag: "a1:signalement", ep: ["perso", 500] }, to: "A2c_brigadier_ok" }, lose: { to: "A2c_brigadier_ko" }, hide: { not: { has: "a1:signalement" } } },
        { label: "Garder le nez dans ta soupe", back: "A2c_soir1" },
      ] },
    A2c_brigadier_ok: { act: "II", title: "Un passeport en règle", place: "croixdefer",
      text: [
        "Il lit le passeport en remuant les lèvres. Il le retourne. Il regarde le timbre de l'Octroi, qui est vrai, la signature du commis, qui est vraie, et le nom, qui ne l'est pas et n'a aucun moyen de le dire.",
        "« Compagnon limeur. Pour Ferrières. » Il te le rend. « On m'avait parlé de trois têtes de trop sur la rivière. Vous en êtes trois, avec trois papiers. Ça fait le compte, pas le surplus. » Il déchire quelque chose dans sa poche, et retourne à son lard.",
      ],
      choices: [{ back: "A2c_soir1" }] },
    A2c_brigadier_ko: { act: "II", title: "Un homme méthodique", place: "croixdefer",
      text: [
        "« Je ne t'ai rien demandé. » Le brigadier ne touche pas au passeport. « Les gens qui montrent leurs papiers avant qu'on les demande, j'en ai connu. Ils avaient tous de très bons papiers. »",
        "Il te regarde regagner ta place. Il ne fera rien ce soir : il a son souper, ses bottes sèchent, et il lui faudrait des ordres. Mais il ira demain à Ferrières, par la grand-route, à cheval, et il y sera avant vous.",
      ],
      choices: [{ back: "A2c_soir1" }] },

    // ------------------------------------------------------------ Crochemore catches up
    A2c_croch: { act: "II", title: "Une chaise de poste", place: "croixdefer",
      text: [
        "Dans la cour, une chaise de poste vient d'arriver, jaune, crottée jusqu'au toit, et il en sort un petit homme en habit puce qui injurie le postillon avec une précision d'horloger.",
        "« Quatre heures et vingt-deux minutes pour onze lieues ! J'ai trois montres, monsieur, et elles sont d'accord, ce qui ne leur arrive jamais ! » Il se retourne, vous aperçoit dans la porte, et s'arrête net.",
        { if: { has: "monde:a1:crochemore" }, text: "Maître Zéphyrin Crochemore, président des Heures. Il reconnaît d'abord son auditeur de la fontaine, et son visage s'éclaire ; puis il vous compte, un, deux, trois, et son visage se referme comme une boîte de montre.", else: "Maître Zéphyrin Crochemore, président des Heures. Tout Aiguemorne connaît ses favoris et ses colères. Il vous compte, un, deux, trois, et sa figure prend la couleur de son habit." },
        "« Trois. Jeunes. Sur la route du nord. » Il a baissé la voix, ce qui chez lui est plus alarmant qu'un cri. « J'ai lu le placard à la dernière poste. Balancier était mon confrère. Trente ans que je le voyais à nos séances, assis au fond, à ne rien dire de sensé. C'était le seul homme de la guilde qui touchât tous les jours à l'œuvre de mon bisaïeul. » Sa canne à pommeau de laiton se lève d'un pouce. « Dites-moi pourquoi je n'appelle pas ces deux cavaliers qui soupent. »",
      ],
      fx: { met: "crochemore" },
      choices: [
        { label: "Lui montrer le frottis trouvé dans l'horloge du mort", if: { has: "monde:a1:epreuve" }, fx: { flag: "a2:croch_confiant", conf: { crochemore: 15 }, ep: ["seance", 1500] }, to: "A2c_croch_frottis", hide: { not: { has: "monde:a1:epreuve" } } },
        { label: "« Parce qu'on a livré à la Tour, mardi, un cylindre à picots gros comme un tonnelet, et que Balancier a refusé de le poser. »", test: { dom: "savoir", diff: 5, label: "Savoir", help: [{ if: { clue: "s_cylindre" }, v: 25 }, { if: { clue: "s_petit" }, v: 15 }, { if: { has: "monde:a1:crochemore" }, v: 10 }] }, win: { fx: { flag: "a2:croch_confiant", conf: { crochemore: 10 }, ep: ["seance", 1500] }, to: "A2c_croch_ok" }, lose: { fx: { flag: "a2:croch_mefiant", ep: ["seance", 700] }, to: "A2c_croch_ko" } },
        { label: "« Parce que vous êtes un homme de faits, et que vous n'en avez pas un seul contre nous. »", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { has: "monde:a1:crochemore" }, v: 20 }] }, win: { fx: { flag: "a2:croch_confiant", conf: { crochemore: 10 }, ep: ["seance", 1500] }, to: "A2c_croch_ok" }, lose: { fx: { flag: "a2:croch_mefiant", ep: ["seance", 700] }, to: "A2c_croch_ko" } },
      ] },
    A2c_croch_frottis: { act: "II", title: "Un fait", place: "croixdefer",
      text: [
        "Il prend le feuillet. Il chausse ses bésicles. Il le lit à la lanterne de sa chaise, une fois, puis une seconde fois en suivant du doigt, et pendant qu'il lit, quelque chose de très rare se produit : Maître Crochemore se tait.",
        "« C'est de la lettre de Sentence. Le corps, l'empattement, tout. Je la connais, j'ai les rouleaux de mon bisaïeul. » Sa voix a changé. « *Dans les mêmes termes, sans qu'il soit besoin d'y revenir.* Mais c'est… Ils veulent… » Il ôte ses bésicles. Ses mains tremblent de fureur. « Un cylindre. Ils veulent mettre un cylindre sur le Juge. Faire d'une balance d'idées une serinette ! C'était donc cela, la question de ce gros homme, devant mon petit Juge. Et moi qui lui ai répondu ! Je lui ai donné la recette ! »",
        "Il plie le feuillet et vous le rend, avec un soin d'officiant.",
        "« Balancier a refusé de poser cela. Naturellement. C'était un sot, mais c'était un horloger. » Il redresse sa petite taille. « Je vais à Ferrières. Cette abomination y a été fondue : je veux voir le moule, et le casser. Vous y allez pour une autre raison, que je ne veux pas connaître. Nous ferons route séparément et cause commune. »",
      ],
      choices: [{ label: "L'écouter régler la suite", to: "A2c_croch_plan" }] },
    A2c_croch_ok: { act: "II", title: "Un homme qui écoute, quand on lui parle picots", place: "croixdefer",
      text: [
        "Il t'écoute. La canne redescend d'un pouce, puis de deux.",
        "« Un cylindre. À la Tour. » Il répète, lentement, comme on essaie une clef. « Le gros homme, devant mon petit Juge. *Et cela pourrait en dire plus long ?* » Il devient très pâle. « Je lui ai répondu. Je lui ai donné la recette, devant deux cents personnes, en me rengorgeant ! »",
        "Il fait trois pas dans la cour, revient.",
        "« Je ne dis pas que je vous crois. Je dis que ce que vous dites est mécaniquement possible, ce qui est davantage. Balancier aurait refusé, oui. C'était un sot, mais c'était un horloger. » Il redresse sa petite taille. « Je vais à Ferrières. Si cette abomination existe, elle y a été fondue : je veux voir le moule, et le casser. Vous y allez pour une autre raison, que je ne veux pas connaître. Nous ferons route séparément et cause commune. »",
      ],
      choices: [{ label: "L'écouter régler la suite", to: "A2c_croch_plan" }] },
    A2c_croch_ko: { act: "II", title: "Une opinion contre une autre", place: "croixdefer",
      text: [
        "Il t'écoute jusqu'au bout, ce qui lui coûte, et tire sa montre de gauche.",
        "« Une opinion. Vous m'apportez une opinion, et j'en ai une autre, qui est imprimée sur une porte. » Il rempoche la montre. « Je n'appellerai pas ces cavaliers. Non que je vous croie : parce que je vais à Ferrières vérifier une chose, et que si vous mentez, vous y allez pour la même, et je vous y aurai sous les yeux. Je préfère un assassin que je surveille à un assassin qui court. »",
        "Il te plante sa canne dans la poitrine, sans appuyer. « Vous serez mes commis. Je l'ai décidé. Un président des Heures voyage avec des commis, et je saurai ainsi où vous couchez. »",
      ],
      choices: [{ label: "L'écouter régler la suite", to: "A2c_croch_plan" }] },
    A2c_croch_plan: { act: "II", title: "Les commis de Maître Crochemore", place: "croixdefer",
      text: [
        "Il règle la suite comme il règle une fontaine : en donnant des ordres à des objets.",
        "« Je suis attendu à Ferrières. La guilde des Heures fournit le mouvement de la grande cloche, le marteau, la roue de compte : c'est moi qui viens le poser, la veille de la coulée. J'ai une lettre du Syndic lui-même. J'entre à la fonderie, au manoir, partout. » Il vous regarde, l'un après l'autre. « Un président ne porte pas ses outils. Il lui faut des gens. Vous serez ces gens. Descendez au Soufflet d'Or, sur la place ; dites que vous êtes à moi. »",
        "Il remonte dans sa chaise jaune, se penche à la portière.",
        "« Je roule de nuit. J'y serai demain. Vous, à pied, après-demain : tâchez d'arriver propres. Et ne touchez pas à mes outils. »",
        "Le postillon fouette. La chaise de poste s'en va dans la nuit, en cahotant, avec ses trois montres.",
      ],
      choices: [{ back: "A2c_soir1" }] },

    A2c_nuit1: { act: "II", title: "Le grenier à foin", place: "croixdefer", ambiance: "nuit",
      fx: { until: 6, rest: true, pv: 4, food: -1 },
      text: [
        "Les compagnons qui cherchent de l'ouvrage couchent au grenier à foin, pour un sou, avec les postillons. C'est un bon lit. Le foin sent l'été, les chevaux remuent en dessous, et par la lucarne on voit un morceau de ciel où il y a plus d'étoiles qu'à Aiguemorne.",
        "Tu dors mal, puis tu dors. Vers le matin, tu rêves d'une salle pleine d'horloges, où quelqu'un que tu ne vois pas écrit.",
      ],
      choices: [{ label: "Reprendre la route à l'aube", to: "A2c_bois", big: true }] },

    // ------------------------------------------------------------ the Bois-Noir
    A2c_bois: { act: "II", title: "Le Bois-Noir", place: "boisnoir", ambiance: "foret",
      text: [
        "Passé la Croix-de-Fer, le pays change de maître. La plaine finit ; la route monte, et la forêt la prend.",
        "On l'appelle le Bois-Noir, et il n'a pas volé son nom. Les forges de Ferrières mangent du charbon de bois depuis trois cents ans, et tout ce qui pousse ici pousse pour elles : des taillis de vingt ans, serrés, pâles, entre lesquels s'ouvrent de loin en loin des clairières rondes où l'herbe ne revient plus. Dans chacune, une meule fume. Ce sont des tertres de terre et de mousse, hauts comme des maisons, sous lesquels le bois cuit sans flamme, pendant des semaines ; et l'on dirait, à les voir alignés dans la brume du matin, avec leur filet de fumée bleue, les tombeaux d'un peuple dont les morts ne seraient pas tout à fait éteints.",
        "Il y flotte une odeur douce et âcre qui prend à la gorge. Aucun oiseau ne chante.",
        "À la première meule, la route se divise. La grand-route continue, large, ferrée, par le fond de la vallée. Un sentier de charbonniers part à gauche et grimpe droit dans le taillis : il coupe, dit-on, une demi-journée.",
      ],
      choices: [
        { label: "La grand-route : elle est gardée, mais elle est sûre", to: "A2c_cavaliers" },
        { label: "Le sentier des charbonniers", to: "A2c_meule" },
      ] },
    A2c_cavaliers: { act: "II", title: "Deux chevaux au galop", place: "boisnoir", ambiance: "foret",
      text: [
        "Vous marchez depuis une heure quand le sol se met à battre. Vous vous rangez. Deux chevaux passent au galop, des bêtes de prix, couvertes d'écume, qui vous jettent de la boue jusqu'aux yeux.",
        "Le premier cavalier est petit, emmitouflé, cramponné à sa selle avec l'air d'un homme qui regrette un échafaudage. Le second monte à califourchon, en culotte de daim, tête nue, les cheveux coupés à la nuque. Elle tourne la tête en passant. Elle vous reconnaît à cent pas, comme on reconnaît une démarche.",
        "Elle ne ralentit pas. Elle lève deux doigts gantés de noir à sa tempe, et elle rit, tu le vois sans l'entendre. Puis la forêt se referme sur les deux croupes.",
        "Sans-Bruit va à Ferrières. Elle y sera ce soir. Vous y serez demain.",
      ],
      fx: { flag: "a2:douce_route", clue: "g_route_nord" },
      choices: [{ label: "Continuer", to: "A2c_peage" }] },
    A2c_peage: { act: "II", title: "La barrière du Syndic", place: "boisnoir", ambiance: "foret",
      text: [
        "À midi, une barrière. Elle est peinte de noir et de prune, avec un marteau dans un cercle. Quatre hommes la tiennent, en casaque de cuir, la pique au poing : ce ne sont pas des gardes du guet, ni la maréchaussée. Ce sont les gardes des forges, que le Syndic paie de sa poche et qui ne répondent qu'à lui.",
        "Ils arrêtent tout ce qui monte. Devant vous, un colporteur vide sa hotte sur la route ; une vieille ouvre son panier.",
        "« Papiers. Ce que vous venez faire. Chez qui. »",
      ],
      choices: [
        { label: "Tendre ton passeport de limeur, et dire le nom de Maître Crochemore", if: { any: [{ has: "a2:croch_confiant" }, { has: "a2:croch_mefiant" }] }, fx: { ep: ["perso", 300] }, to: "A2c_peage_ok" },
        { label: "Tendre ton passeport, et attendre", test: { dom: "social", diff: 5, label: "Social", help: [{ if: { has: "a1:signalement" }, v: -15 }] }, win: { fx: { ep: ["perso", 300] }, to: "A2c_peage_ok" }, lose: { fx: { gold: -20 }, to: "A2c_peage_ko" } },
      ] },
    A2c_peage_ok: { act: "II", title: "« Passez »", place: "boisnoir", ambiance: "foret",
      text: [
        "Le garde lit, compare, rend. « Limeurs. Y a de l'ouvrage à l'atelier des moules, jusqu'à la coulée. Après, on vous renverra. » Il lève la barrière. « On ne cause pas aux gueules grises. On ne va pas au Crassier après le couvre-feu. On ne chante pas dans la rue. C'est le règlement de la vallée. »",
        "« Et si l'on chante ? »",
        "Il te regarde avec un commencement d'intérêt. « On ne chante pas. »",
      ],
      choices: [{ label: "Passer la barrière", to: "A2c_nuit2" }] },
    A2c_peage_ko: { act: "II", title: "Le droit de barrière", place: "boisnoir", ambiance: "foret",
      text: [
        "Le garde lit le passeport, le retourne, te regarde, regarde le passeport. Il n'y trouve rien. C'est ce qui l'ennuie.",
        "« Y a un droit. » Il n'y en avait pas pour la vieille au panier. « Un écu par tête, pour l'entretien de la route. » Tu paies. Il empoche, sans reçu, et note quelque chose sur une ardoise : le jour, l'heure, trois limeurs, et un mot que tu lis à l'envers, qui est *revoir*.",
      ],
      choices: [{ label: "Passer la barrière", to: "A2c_nuit2" }] },

    A2c_meule: { act: "II", title: "La meule", place: "boisnoir", ambiance: "foret",
      text: [
        "Le sentier grimpe entre les taillis, noir de poussier, doux sous le pied comme une cendre. Vous passez trois clairières, trois meules, sans voir une âme : les charbonniers se montrent quand ils veulent.",
        "À la quatrième, on crie.",
        "La meule s'est ouverte. Tout un flanc a glissé, et par la plaie le feu, qui couvait depuis quinze jours, a trouvé de l'air : il sort en langues courtes, orange, avec un ronflement. Un homme et une femme, noirs de la tête aux pieds, jettent de la terre à pleines pelles. Ils ne crient pas pour le feu. Ils crient un nom. Au pied de l'éboulis, à demi pris sous les mottes fumantes, il y a un enfant.",
      ],
      urgent: 30,
      choices: [
        { label: "Courir à l'enfant et le tirer de là, à mains nues", test: { dom: "combat", diff: 5, label: "Combat" }, win: { fx: { flag: "monde:a2:charbonniers", ep: ["seance", 1500] }, to: "A2c_meule_ok" }, lose: { fx: { pv: -3, flag: "monde:a2:charbonniers", ep: ["seance", 1000] }, to: "A2c_meule_brule" } },
        { label: "Prendre une pelle et fermer la brèche avec eux, au vent du feu", timeout: true, test: { dom: "nature", diff: 5, label: "Nature" }, win: { fx: { flag: "monde:a2:charbonniers", ep: ["seance", 1500] }, to: "A2c_meule_ok" }, lose: { fx: { pv: -2, ep: ["seance", 600] }, to: "A2c_meule_ko" } },
      ] },
    A2c_meule_ok: { act: "II", title: "Un enfant noir", place: "boisnoir", ambiance: "foret",
      text: [
        "L'enfant sort de la terre comme une racine, et il hurle, ce qui est le meilleur signe. Il a six ans, une jambe écorchée, les cheveux roussis. La femme le prend, le palpe, le secoue, et le gifle, de soulagement.",
        "La brèche se referme sous les pelles. Le ronflement s'étouffe ; la meule recommence à fumer bleu, innocente.",
        "L'homme s'essuie les yeux avec un bras plus sale que sa figure. Il s'appelle Jacquot le Sourd. Il n'est pas sourd : on l'appelle ainsi parce qu'il n'entend que ce qu'il veut.",
        "« Vous allez en bas. » Ce n'est pas une question. « Ceux d'en bas, on leur vend le charbon, et ils nous le paient en rondelles. On est comme les gueules grises, nous autres : on doit. » Il regarde la meule, puis vous. « Si vous avez besoin de passer sans que les casaques de cuir le sachent, d'entrer dans la vallée ou d'en sortir, vous dites mon nom à n'importe quelle meule. On connaît des chemins qu'ils ne gardent pas. On ne les a jamais dits à personne. »",
      ],
      choices: [{ label: "Reprendre le sentier", to: "A2c_embuscade" }] },
    A2c_meule_brule: { act: "II", title: "Les mottes", place: "boisnoir", ambiance: "foret",
      text: [
        "Les mottes sont brûlantes. Tu le savais, et tu y plonges les bras quand même, jusqu'aux coudes, parce qu'il y a là-dessous une petite main qui remue. Tu tires. L'enfant vient. Tu sens seulement après, en le posant, que tes avant-bras ont cuit.",
        "La femme le prend. L'homme ferme la brèche. Puis il vient à toi, regarde tes bras, et sans rien dire va chercher dans sa hutte un pot de quelque chose de gras, de noir, qui sent le goudron et qui ôte le feu en une minute.",
        "« Je m'appelle Jacquot le Sourd. Tu dis mon nom à n'importe quelle meule du Bois-Noir, et on te fait passer où tu veux, sans que les casaques de cuir le sachent. On connaît des chemins qu'ils ne gardent pas. » Il rebouche son pot. « On ne les a jamais dits à personne. Mais personne n'avait mis les bras là-dedans pour nous. »",
      ],
      choices: [{ label: "Reprendre le sentier", to: "A2c_embuscade" }] },
    A2c_meule_ko: { act: "II", title: "Le vent du feu", place: "boisnoir", ambiance: "foret",
      text: [
        "Tu prends la pelle du mauvais côté. Le vent tourne, la flamme te lèche, et tu recules en te tenant les yeux, aveuglé{e}, inutile, pendant que le charbonnier, sans un regard pour toi, se jette dans l'éboulis et en arrache son fils.",
        "Tout finit bien, et sans toi. La brèche se ferme. L'enfant hurle. La femme te tend une gourde, par politesse ; l'homme te remercie d'être venu{e}, du ton dont on remercie quelqu'un qui a tenu la porte.",
      ],
      choices: [{ label: "Reprendre le sentier", to: "A2c_embuscade" }] },
    A2c_embuscade: { act: "II", title: "Les Pieds-Poudreux", place: "boisnoir", ambiance: "foret",
      text: [
        "Le sentier redescend vers la vallée par une gorge. C'est un endroit fait pour cela, et vous le sentez une seconde avant que cela arrive.",
        "Ils sont quatre. Ils sortent du taillis des deux côtés, sans hâte, en gens qui ont l'habitude. Des vestes de soldat sans boutons, des pieds nus dans la poussière noire, et pour armes ce qu'on trouve : une fourche, deux gourdins, un vieux sabre de cavalerie. Des déserteurs, ou des mineurs qu'on a chassés ; dans ce pays, on passe de l'un à l'autre par la faim.",
        "« Les sacs, dit celui au sabre. Et les souliers. On vous laisse les chemises, on est honnêtes. »",
      ],
      choices: [
        { label: "Tirer ton arme : on ne te prend pas tes souliers", fight: { title: "Dans la gorge du Bois-Noir", enemies: [{ id: "pied_poudreux", n: 2 }, { id: "pied_poudreux_chef", n: 1 }], win: { fx: { ep: ["seance", 1500], gold: 15 }, to: "A2c_embuscade_ok" }, lose: { fx: { gold: -60 }, to: "A2c_embuscade_ko" } } },
        { label: "« Jacquot le Sourd nous fait passer. Demandez-lui ce qu'il en pense. »", if: { has: "monde:a2:charbonniers" }, fx: { ep: ["perso", 500] }, to: "A2c_embuscade_nom", hide: { not: { has: "monde:a2:charbonniers" } } },
        { label: "Leur parler de la Grise, et du jour de la cloche", test: { dom: "social", diff: 0, label: "Social", help: [{ if: { clue: "s_jetons" }, v: 20 }] }, win: { fx: { ep: ["seance", 1200] }, to: "A2c_embuscade_parle" }, lose: { fx: { gold: -40 }, to: "A2c_embuscade_ko" } },
        { label: "Jeter une poignée de sous dans la poussière, et passer pendant qu'ils ramassent", if: { gold: { min: 30 } }, fx: { gold: -30 }, to: "A2c_nuit2" },
      ] },
    A2c_embuscade_ok: { act: "II", title: "Quatre hommes assis", place: "boisnoir", ambiance: "foret",
      text: [
        "Cela ne dure pas. Ils avaient faim, et vous aviez dormi. L'homme au sabre s'assied dans la poussière en se tenant le poignet ; les autres l'imitent, par discipline.",
        "Vous ne leur prenez rien : ils n'ont rien. Dans la veste du chef, il y a pourtant quelques sous, volés à plus pauvre, que vous jugez équitable de remettre en circulation.",
        "« Vous n'êtes pas des limeurs », dit-il, sans rancune. « Les limeurs pleurent. »",
      ],
      choices: [{ label: "Descendre vers la vallée", to: "A2c_nuit2" }] },
    A2c_embuscade_nom: { act: "II", title: "Un nom", place: "boisnoir", ambiance: "foret",
      text: [
        "Le sabre s'abaisse. Les quatre se regardent.",
        "« Le Sourd ? » L'homme se gratte la barbe. « Fallait le dire tout de suite. On mange son pain, l'hiver. » Il rengaine, avec la dignité d'un officier qui lève un siège. « Passez. Et si vous voyez des casaques de cuir, nous, vous nous avez pas vus. »",
      ],
      choices: [{ label: "Descendre vers la vallée", to: "A2c_nuit2" }] },
    A2c_embuscade_parle: { act: "II", title: "Des gueules grises", place: "boisnoir", ambiance: "foret",
      text: [
        "Tu parles des jetons, du gros livre, de la veuve qui veut arrêter la mine. Tu vois les gourdins descendre à mesure.",
        "« On en était, dit l'homme au sabre. De la Gueule. Galerie Sainte-Barbe. On a réclamé nos sous en sous. Les casaques nous ont menés à la barrière, avec la femme et les petits, en nous disant de ne pas nous retourner. » Il regarde ses pieds nus. « La Grise nous fait porter du pain par les charbonniers. Elle dit d'attendre le jour de la cloche. On attend. En attendant, on vole. »",
        "Il s'écarte du sentier. « Passez. Vous lui direz que ceux du Bois-Noir descendront, ce jour-là. Elle saura. »",
      ],
      fx: { flag: "a2:pieds_poudreux", clue: "s_bannis" },
      choices: [{ label: "Descendre vers la vallée", to: "A2c_nuit2" }] },
    A2c_embuscade_ko: { act: "II", title: "Honnêtes", place: "boisnoir", ambiance: "foret",
      text: [
        "Ils sont quatre, ils ont faim, et la gorge est à eux. Cela finit comme ils l'avaient dit : les sacs ouverts sur le sentier, une bonne part de ton or dans une veste sans boutons.",
        "Ils te laissent les souliers, à la réflexion. « T'as des pieds de la ville, dit le chef. Tu ferais pas une lieue. » C'est de la bonté, à sa manière, et tu la reçois avec les sentiments qu'on imagine.",
      ],
      choices: [{ label: "Descendre vers la vallée", to: "A2c_nuit2" }] },

    // ------------------------------------------------------------ second night
    A2c_nuit2: { act: "II", title: "Les Trois-Enclumes", place: "boisnoir", ambiance: "nuit",
      fx: { until: 21, food: -1 },
      text: [
        "Vous couchez au relais des Trois-Enclumes, qui est une grange avec une enseigne, ou dans une hutte de charbonnier que personne n'habite : dans ce pays, on ne fait pas la différence. Il y a un feu. C'est le premier depuis Aiguemorne autour duquel vous soyez assis tous les trois sans rien avoir à voler dans l'heure.",
        "On se tait d'abord. Puis quelqu'un dit : « Elle doit dormir, à cette heure. Aux Plombs, on couche tôt. » Et personne ne demande de qui l'on parle.",
        "Il faut bien, un soir comme celui-ci, se dire à soi-même pourquoi l'on continue.",
      ],
      choices: [
        { label: "Pour elle. On lui doit une grâce, et il n'y a qu'un endroit où la prendre", fx: { set: { "a2:pourquoi": "douairiere" }, ep: ["perso", 400] }, to: "A2c_nuit2_feu" },
        { label: "Pour le vieil homme. Quelqu'un doit payer ce coup de marteau", fx: { set: { "a2:pourquoi": "balancier" }, ep: ["perso", 400] }, to: "A2c_nuit2_feu" },
        { label: "Pour les trois mille écus. On ne vit pas de belles raisons", fx: { set: { "a2:pourquoi": "or" }, ep: ["perso", 400] }, to: "A2c_nuit2_feu" },
        { label: "Pour savoir ce qui écrit derrière cette porte", fx: { set: { "a2:pourquoi": "savoir" }, ep: ["perso", 400] }, to: "A2c_nuit2_feu" },
      ] },
    A2c_nuit2_feu: { act: "II", title: "Le feu", place: "boisnoir", ambiance: "nuit",
      fx: { until: 6, rest: true, pv: 4 },
      text: [
        { if: { has: "a2:pourquoi=douairiere" }, text: "Tu le dis, ou tu le penses assez fort. Elle a tendu les poignets pour vous. On peut être voleur et savoir compter : c'est une dette, et de toutes celles qu'on t'a apprises, la seule qui ne se règle pas en écus." },
        { if: { has: "a2:pourquoi=balancier" }, text: "Tu le dis, ou tu le penses assez fort. Tu revois la joue sur l'établi, les bésicles au bord de la table. Il vous attendait. Il avait laissé la porte poussée. On a beau être de la Clef Tordue, il y a des invitations qu'on honore." },
        { if: { has: "a2:pourquoi=or" }, text: "Tu le dis, ou tu le penses assez fort. Mille écus chacun. C'est une raison propre, qui ne demande rien à personne et ne se dément pas le matin. Les deux autres te regardent ; l'un d'eux sourit, comme on sourit à quelqu'un qui se vante d'être pire qu'il n'est." },
        { if: { has: "a2:pourquoi=savoir" }, text: "Tu le dis, ou tu le penses assez fort. Un petit bruit sec, de gauche à droite, derrière un chêne ferré. Depuis l'autre nuit, tu l'entends chaque fois que tu fermes les yeux. Il y a des serrures qu'on ouvre pour ce qu'il y a derrière, et d'autres parce qu'on ne dormira plus tant qu'elles seront fermées." },
        "Le feu baisse. Dehors, le Bois-Noir fume par cent tertres, sous la lune, comme une ville endormie.",
      ],
      choices: [{ label: "Dormir, et monter au col à l'aube", to: "A2c_col", big: true }] },

    A2c_col: { act: "II", title: "Le col", place: "boisnoir",
      text: [
        "Le col est une échancrure dans une crête de roche rousse, où le vent s'engouffre. Vous y arrivez vers dix heures, soufflant, et vous vous arrêtez, parce qu'on s'arrête toujours là.",
        "La vallée de Ferrières est rouge. Ce n'est pas une façon de parler : la terre, les talus, les chemins, les toits mêmes ont la couleur de la rouille, d'un bout à l'autre, comme si l'on avait ouvert une blessure dans la montagne et négligé de la panser. Au fond coule un torrent, rouge aussi, que barrent dix retenues ; à chaque retenue une roue, à chaque roue un marteau, et de ces dix marteaux qui frappent sans s'accorder monte jusqu'au col un battement sourd, continu, qui entre par les semelles.",
        "La ville est au milieu, noire, sous sa fumée. On distingue trois choses plus hautes que les autres : à gauche, sur un replat, un manoir à tours carrées, bâti sur une forge comme une maison sur un pont ; à droite, contre la montagne, un grand trou sombre surmonté d'un chevalement, que les gens d'ici nomment la Gueule ; et entre les deux, une halle immense, neuve, dont le toit fume par vingt lanterneaux.",
        "Sous cette halle, dans une fosse, attend le moule d'une cloche de vingt mille livres. Et quelque part entre ces trois toits, sous trois pieds de fonte, une clef.",
      ],
      choices: [{ label: "Descendre vers la ville", to: "A2c_arrivee", big: true }] },
  },

  extras: {
    places: {
      canal: { ambiance: "plaine", region: "route_nord", name: "Le canal du Nord", map: "pays", x: 56, y: 42, arrive: "A2c_route", desc: "Un canal droit entre deux rangs de peupliers, et son chemin de halage." },
      croixdefer: { ambiance: "taverne", region: "route_nord", name: "La Croix-de-Fer", map: "pays", x: 62, y: 35, arrive: "A2c_soir1", desc: "L'auberge du carrefour, où le canal rejoint la grand-route du nord." },
      boisnoir: { ambiance: "foret", region: "route_nord", name: "Le Bois-Noir", map: "pays", x: 69, y: 28, arrive: "A2c_bois", desc: "La forêt des charbonniers : des taillis pâles, et dans chaque clairière une meule qui fume." },
    },
    enemies: {
      pied_poudreux: { name: "Pied-Poudreux", look: "humain", pv: 9, att: 26, def: 10, dmg: 3, desc: "Une veste de soldat sans boutons, un gourdin, et la faim." },
      pied_poudreux_chef: { name: "L'homme au sabre", look: "humain", pv: 13, att: 32, def: 14, dmg: 5, desc: "Il a gardé de l'armée un vieux sabre et le ton du commandement." },
    },
    clues: {
      r_complainte: { rev: "R", text: "La complainte des trois Rossignols court le pays : on y fait tuer le Remonteur « pour une montre d'or », à coups de marteau, par trois figures masquées." },
      s_jetons: { rev: "S", text: "À Ferrières, le Syndic paie en jetons de fer qui n'ont cours qu'à son Économat. Toute la vallée lui doit ; les dettes sont dans un gros livre sous clef, et passent du père au fils." },
      r_placard: { rev: "R", text: "Au bas du placard qui met à prix les Rossignols, le prévôt demande « tout renseignement sur les personnes vues aux abords de l'impasse des Poids le soir du crime, quelles qu'elles soient »." },
      r_abreuvoir: { rev: "R", text: "À la Croix-de-Fer, le lendemain du meurtre : un colosse à tête rase, en tablier de cuir, a dormi à l'écurie et lavé son marteau à l'abreuvoir. Il a payé d'un jeton de Ferrières." },
      g_route_nord: { rev: "G", text: "Sans-Bruit et l'un de ses hommes galopaient vers Ferrières, sur des chevaux de prix, une journée avant les Rossignols." },
      s_bannis: { rev: "S", text: "Des mineurs chassés de Ferrières pour avoir réclamé leur paie en sous vivent de rapine au Bois-Noir. La Grise leur fait dire d'attendre « le jour de la cloche »." },
    },
  },
};
