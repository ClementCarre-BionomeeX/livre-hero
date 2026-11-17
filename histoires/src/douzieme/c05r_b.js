// Le Douzième Coup · chapter 5, the one who stays, second half (act II, the royal road inside the Dormante, from the
// twenty-third hour-stone to the cross of the Hautes-Bordes). The shrine of the Watchers, the old edge at the Vauxelles
// crossroads where the Slow Ones stand, the copper pans of the Mastery of Sands and its gatherers, a farm before the
// cross where the Courtepaille keeps her word (`r:courtepaille_ennemie`), the hamlet of the night of the Leap, and the
// cross from which Roquebise is seen. Before dawn, the hour-stone of the twenty-first league (B05).
var P = {};

Object.assign(P, {
  K05r_route: { act: "II", title: "La chaussée sous l'herbe", place: "ferme", ambiance: "champs", fx: { stock: { sable: -1 } },
    text: [
      "La route royale, de ce côté-ci du temps, est une levée d'herbe entre deux fossés. Les dalles sont dessous ; on les sent au talon. Tous les mille pas une borne penche, verte de mousse, son cadran de bronze tourné vers un soleil qu'on ne voit pas.",
      "Tu n'étais jamais allé{e} plus loin que la croix des Hautes-Bordes, et toujours de nuit, par les prés. De jour, sur la chaussée, la Dormante n'est plus un endroit où l'on entre et d'où l'on sort : c'est un pays. Il a ses champs, où le blé de six printemps différents est debout par bandes, chaque bande à la hauteur qu'il avait le jour où elle fut prise. Il a son ciel, où pendent des oiseaux. Il a son silence, qui n'est pas vide : en prêtant l'oreille, on y devine un fond, très bas, comme le souvenir d'un bruit.",
      { with: "rouget", text: "Rouget marche derrière toi, dans tes pas, le nouet de sable au poignet. Il ne siffle plus. « On dirait une image, dit-il. Une image où on serait rentrés. » Il regarde ses mains, les ouvre, les ferme. « Et nous, on est quoi, dedans ? Les fautes ? »" },
      "Deux lieues jusqu'à la croix. La première pincée de l'après-midi coule déjà.",
    ],
    choices: [{ label: "Marcher", to: "K05r_xxii" }] },
  K05r_xxii: { act: "II", title: "La vingt-deuxième lieue", backName: "la borne de la vingt-deuxième lieue", place: "ferme", ambiance: "champs", hub: true,
    text: [
      { first: true, text: "À la borne suivante, la route passe entre un abreuvoir et une petite bâtisse de planches, pas plus grande qu'une niche à saint. C'est un reposoir des Veilleurs : ils en plantent un à chaque lisière, et quand la lisière avance, ils en plantent un autre plus loin, sans démolir le premier. Celui-ci a cinq ans. La Dormante l'a dépassé depuis trois." },
      { first: true, text: "Dans l'abreuvoir, des canards se posaient. Il y en a quatre : trois sur l'eau, les ailes à demi repliées, et un quatrième encore en l'air, les pattes en avant. Autour de chaque canard, l'eau s'est levée en couronne, une collerette de gouttes rondes qui n'est pas retombée." },
      { again: true, text: "La borne, le reposoir de planches, l'abreuvoir aux quatre canards." },
    ],
    choices: [
      { label: "Le reposoir", to: "K05r_reposoir", hide: { seen: "K05r_reposoir" } },
      { label: "Trois trépieds de cuivre, plantés autour de la borne", to: "K05r_cuvettes", hide: { seen: "K05r_cuvettes" } },
      { label: "Reprendre la chaussée", to: "K05r_croisee", big: true },
    ] },
  K05r_reposoir: { act: "II", title: "Le reposoir", place: "ferme", ambiance: "champs",
    text: [
      "Une planche fait autel. Dessus, des lampes de terre, une vingtaine, et dans chacune une flamme droite, immobile, grosse comme un grain de blé : les Veilleurs les avaient allumées avant de reculer, et la Dormante les a prises telles quelles. Cela fait dans la niche une clarté d'or qui ne tremble jamais.",
      "Au mur, des noms. Ils sont écrits à la craie, au charbon, gravés au clou, brodés sur des rubans : *Jacquette Pansard et ses trois petits. Le vieux Maclou, qui n'a pas voulu. Mon homme, Étienne, pris au puits. Maman.* Sous les noms, ce qu'on leur a laissé : du pain, des œufs peints, un sabot d'enfant, une pipe bourrée, une pièce de monnaie par-ci par-là, pour le cas où il faudrait payer quelque chose en s'éveillant.",
      "Tu connais ces niches. Dans la bande, on les appelle les troncs. La Courtepaille défend d'y toucher, et ce n'est pas par piété : les Veilleurs comptent, et un tronc vidé met dix villages en chasse. Mais ici, il n'y a plus de village, ni personne pour compter.",
      { with: "rouget", text: "Rouget a déjà repéré les pièces. Il te regarde. Il attend de savoir quelle sorte de glaneur tu es aujourd'hui." },
    ],
    choices: [
      { label: "Prendre les pièces : les pris n'ont rien à payer", fx: { gold: 4, flag: "r:pille_reposoir" }, to: "K05r_reposoir_fin" },
      { label: "Ne toucher à rien", to: "K05r_reposoir_fin" },
      { label: "Ajouter un nom au mur, avec ton couteau", fx: { flag: "r:nom_reposoir" }, to: "K05r_reposoir_fin" },
    ] },
  K05r_reposoir_fin: { act: "II", title: "Les noms", place: "ferme", ambiance: "champs",
    text: [
      { after: "r:pille_reposoir", text: "Quatre écus au sablier, un peu verts. Ils tintent dans ta poche avec un bruit que tu connais. Tu remets la pipe droite, en sortant, sans savoir pourquoi : elle avait glissé." },
      { after: "r:nom_reposoir", text: "Tu cherches une place libre, entre *Maman* et un ruban. Tu graves cinq lettres, en bâtons. *LISON*. Tu n'avais jamais mis son nom sur un mur des Veilleurs : c'eût été la ranger avec ceux qu'on attend sans aller les chercher. Aujourd'hui, tu y vas. Le nom peut bien attendre ici que tu repasses avec elle." },
      { after: "r:nom_reposoir", with: "rouget", text: "« C'est qui ? » demande Rouget, qui épelle des lèvres sans y arriver. Tu ne réponds pas tout de suite." },
      { if: { not: { any: [{ has: "r:pille_reposoir" }, { has: "r:nom_reposoir" }] } }, text: "Tu ressors à reculons. Vingt petites flammes te regardent partir, du même regard. Tu n'as rien pris. Tu ne saurais pas dire si c'est du respect, ou seulement que ces lampes ont l'air de savoir compter." },
    ],
    choices: [{ back: "K05r_xxii" }] },
  K05r_cuvettes: { act: "II", title: "Les cuvettes de la Maîtrise", place: "ferme", ambiance: "champs", fx: { flag: "r:sait_cuvettes" },
    text: [
      "Trois trépieds de fer entourent la borne, et sur chacun une cuvette de cuivre, large comme un bouclier, étamée, penchée vers un godet de verre. On les a disposées sous le cadran, à l'aplomb du bronze. Sur le fer, un poinçon : le sablier dans un cercle.",
      "Tu comprends d'un coup ce que la vieille voulait dire avec ses cent hommes. La rosée d'heures perle sur le bronze avant le jour. Toi, tu la balaies d'une plume ; la Maîtrise la laisse goutter dans ses cuvettes, borne après borne, sur toute la route, et des hommes passent relever les godets. Ceux-ci sont vides et propres : on est venu ce matin.",
      "Tu regardes la chaussée, vers le levant. L'herbe y est couchée en deux ornières fraîches, de la largeur d'une charrette à bras. Elles ne sont pas de la Garde. Elles vont de borne en borne.",
    ],
    choices: [{ back: "K05r_xxii" }] },

  // ------------------------------------------------------------ the old edge
  K05r_croisee: { act: "II", title: "La vieille lisière", backName: "la croisée de Vauxelles", place: "ferme", ambiance: "champs", hub: true,
    text: [
      { first: true, text: "Un chemin de terre coupe la chaussée entre deux rangs de peupliers. Un poteau dit encore *Vauxelles*, à qui sait que c'était écrit. La lisière s'est tenue ici trois hivers, de 597 à 600, sans avancer d'un pas ; la Garde y avait planté ses jalons, les Veilleurs leurs lampes, et tout le pays avait fini par croire qu'elle n'irait pas plus loin." },
      { first: true, text: "C'est à cet endroit qu'on les voit. Les glaneurs disent : les Lents. Ce sont ceux qui se sont trouvés sur la ligne, un pied de chaque côté, le temps qu'elle a duré, et que la Dormante a pris à moitié. Ils ne sont pas arrêtés. Ils vont. Un cheveu par jour, un pas par saison ; leur regard vous suit, si vous avez la patience de revenir le lendemain." },
      { first: true, text: "Il y en a une douzaine, le long de l'ancienne corde, dont il reste des piquets. De loin, on dirait des gens qui attendent une voiture." },
      { again: true, text: "La croisée, les peupliers, les piquets de l'ancienne corde. Les Lents sont où tu les as laissés, à un cheveu près." },
    ],
    choices: [
      { label: "Un homme, penché en arrière, la main tendue vers un chien", to: "K05r_lent_chien", hide: { seen: "K05r_lent_chien" } },
      { label: "Un maigre, à genoux, la main dans la poche d'un autre", to: "K05r_lent_glaneur", hide: { seen: "K05r_lent_glaneur" } },
      { label: "Une vieille femme en mante bleue, qui porte une lampe", to: "K05r_lente", hide: { any: [{ has: "r:lente_menee" }, { has: "r:lente_laissee" }] } },
      { label: "La borne du carrefour, au coin du chemin de terre", to: "K05r_borne_vauxelles", hide: { seen: "K05r_borne_vauxelles" } },
      { label: "Passer la vieille corde, et continuer", to: "K05r_recolteurs", big: true },
    ] },
  K05r_lent_chien: { act: "II", title: "L'homme et le chien", place: "ferme", ambiance: "champs",
    text: [
      "Il est tourné vers le couchant, vers la sortie, le corps déjà parti, et il se retourne. Sa main gauche est tendue en arrière, ouverte, vers un chien roux couché à trois pas plus loin dans la Dormante : un vieux chien, la tête sur les pattes, pris tout à fait, qui ne viendra pas.",
      "L'homme a mis trois ans à faire ce geste. Tu le sais, parce que la bande passait ici chaque hiver, et que chaque hiver la main était un peu plus loin du corps. La première année, il regardait la sortie. La seconde, il avait commencé de tourner la tête. Il appelle : cela se lit à sa bouche, ronde, sur une seule syllabe qui n'en finit pas de sortir.",
      { with: "rouget", text: "« Pourquoi il est pas sorti ? demande Rouget. Il avait le temps. Il avait un pied dehors. » Tu réponds que le chien s'appelait probablement d'un nom court, et qu'on ne laisse pas derrière soi ce qu'on a nommé. Rouget se tait. On ne lui a donné qu'un sobriquet, pour la couleur." },
    ],
    choices: [{ back: "K05r_croisee" }] },
  K05r_lent_glaneur: { act: "II", title: "Trois-Doigts", place: "ferme", ambiance: "champs",
    text: [
      "Celui-là, tu le connais. Il était de la bande à la Courtepaille avant toi ; on l'appelait Trois-Doigts, pour ce qui lui restait à la main gauche. L'hiver de 598, il a vu sur la ligne un gros fermier pris debout, une bourse à la ceinture, et il a calculé qu'il avait le temps.",
      "Il est à genoux devant le fermier. Sa main droite est dans la bourse jusqu'au poignet. Sa figure, levée, a l'expression d'un homme qui vient de sentir des pièces sous ses doigts et qui commence, au même instant, à sentir autre chose.",
      "La Courtepaille amène ici tous les nouveaux, une fois, sans rien expliquer. Elle les laisse regarder. Puis elle dit : « Le sable d'abord. La bourse après. » C'est tout son catéchisme, et il tient en une image.",
      "À la ceinture de Trois-Doigts pend son sablier de corne. Personne n'y a touché en trois ans : on ne vole pas un exemple. Dans le col, collé par l'humidité, il reste un fond gris.",
    ],
    choices: [
      { label: "Racler le fond de son sablier", fx: { stock: { sable: 1 }, flag: "r:vole_troisdoigts" }, to: "K05r_croisee" },
      { label: "Le lui laisser : il en aura l'usage dans cent ans", to: "K05r_croisee" },
    ] },
  K05r_borne_vauxelles: { act: "II", title: "La borne sans cadran", place: "ferme", ambiance: "champs",
    text: [
      "Au coin du chemin de terre, une borne de carrefour, sans cadran, haute comme un tabouret, avec une cuvette usée sur le dessus. Tout le village connaît cette pierre, de réputation.",
      "C'est là que la vieille Line a ramassé son apprenti{autre:e}. Il y a dix ans, le soir où l'on vidait Vauxelles, elle revenait de livrer une pendule ; elle a trouvé sur cette borne un enfant de six ans, tout{autre:e} seul{autre:e}, qui tenait une cuiller et ne savait pas dire son nom de famille. Elle l'a pris{autre:e} par la main et ramené{autre:e} chez elle, sans rien demander à personne, elle qui n'avait jamais recueilli un chat.",
      "On en a causé longtemps, aux Trois-Noyers. On disait qu'elle l'avait choisi{autre:e} comme on choisit un outil, en le soupesant. Tu trouvais cela méchant, quand tu l'as entendu dire. Tu t'assois sur la borne. Tu penses aux soixante coches du fenil, ou à ce que tu sais d'elle depuis trois jours, et tu trouves que c'était seulement mal dit.",
    ],
    choices: [{ back: "K05r_croisee" }] },
  K05r_lente: { act: "II", title: "La mante bleue", backName: "la vieille à la lampe", place: "ferme", ambiance: "champs",
    text: [
      { first: true, text: "Elle marche vers l'intérieur. De tous les Lents de la croisée, elle est la seule qui tourne le dos à la sortie. Une mante bleue de Veilleuse, une médaille d'argent, et dans la main droite une lampe de terre dont la flamme penche en arrière, couchée par l'élan d'un pas qui a duré deux ans." },
      { first: true, text: "Elle est entrée exprès. Cela se voit à ses yeux, qui sont grands ouverts, posés droit devant elle, tranquilles. À trente toises plus loin sur la chaussée, là où elle regarde, il y a un homme assis sur le talus : un vieux en sabots, une main sur le genou, pris tout à fait, depuis longtemps, la tête levée vers quelqu'un qui devait arriver par la route." },
      { first: true, text: "Au train dont elle va, elle sera près de lui dans quarante ans." },
      { first: true, if: { item: "medaille" }, text: "Tu reconnais la médaille. Tu as la même à ton cou : une sainte Aure, un sablier dans une main, une lampe dans l'autre." },
      { again: true, text: "La vieille en mante bleue fait son pas. La flamme de sa lampe penche en arrière." },
    ],
    choices: [
      { label: "Lui prendre le bras, et la mener jusqu'à lui : une pincée pour deux", if: { stock: "sable", min: 3 }, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:lente_menee", ep: ["histoire", 500] }, to: "K05r_lente_menee" },
      { label: "La laisser à son pas : elle a choisi sa vitesse", fx: { flag: "r:lente_laissee" }, to: "K05r_croisee" },
    ] },
  K05r_lente_menee: { act: "II", title: "Trente toises", place: "ferme", ambiance: "champs",
    text: [
      "Tu passes ton bras sous le sien, comme tu as tenu la main de {autre} dans les prés, l'autre nuit. Le sable que tu portes fait pour deux, tant qu'on se touche.",
      "Elle achève son pas. Le suivant vient tout seul, à la vitesse des vivants, et elle manque tomber : on n'est pas préparé à ce que le monde reparte. Sa flamme se redresse. Elle tourne vers toi une figure ridée, étonnée, pas effrayée. « Ah, dit-elle. Un ange. Ils les font crottés, cette année. »",
      "Tu lui dis où elle est, et depuis quand. Elle hoche la tête : deux ans, elle s'en doutait, elle avait vu passer les saisons comme on voit passer des hirondelles. « Aldegonde, de Vauxelles. Et celui-là, sur le talus, c'est mon Bénigne. Il s'est assis là pour m'attendre, le jour où la corde a bougé, en 596. Je revenais du marché. Il n'a jamais su marcher sans moi. » Elle se remet en route, à ton bras, d'un petit pas pressé. « Mène-moi, mon ange. Je comptais y mettre le reste de ma vie ; si tu me la fais gagner, je ne m'en plaindrai pas. »",
      "Trente toises. Elle s'assoit sur le talus, à côté du vieux, arrange sa mante, pose la lampe entre eux deux. Elle lui prend la main, celle qui est sur le genou. « Voilà, dit-elle. J'y suis. » Puis, à toi : « Lâche-moi, maintenant. Doucement. »",
      { if: { item: "medaille" }, text: "Elle a vu ta médaille. « Tu connais Orable ? Dis-lui qu'Aldegonde est arrivée. Elle avait parié que non. »" },
      "Tu ôtes ton bras. Elle a le temps d'un sourire, qui lui reste. Ils sont assis côte à côte sur le talus, la lampe entre eux, et elle le regarde, lui, qui regarde toujours la route.",
      { with: "rouget", text: "Rouget n'a rien dit de tout le chemin. Il renifle. « C'est le vent », explique-t-il. Il n'y a pas de vent, ici, depuis 596." },
    ],
    choices: [{ back: "K05r_croisee" }] },

  // ------------------------------------------------------------ the gatherers
  K05r_recolteurs: { act: "II", title: "La charrette aux godets", place: "ferme", ambiance: "champs", takes: 2,
    text: [
      "Passé la vieille corde, le pays est pris depuis plus longtemps, et cela se sent : l'herbe est plus raide, le jour plus gris, le sable coule plus vite dans le col. Tu marches une demi-lieue. Puis tu entends quelque chose, ce qui n'arrive pas dans la Dormante : un grincement d'essieu.",
      "Ils viennent du levant, sur la chaussée. Une charrette à bras, tirée par deux hommes en sarrau gris, poussée par un troisième. Elle porte des casiers, et dans les casiers des godets de verre bouchés à la cire, par dizaines, qui tintent. Un garde marche devant, l'arbalète à l'épaule. Tous ont au cou, pendu à une chaîne, un sablier gros comme le poing, plein à ras : la Maîtrise ne mesure pas le sable à ses gens.",
      "Ce sont les récolteurs. Ils relèvent les cuvettes de borne en borne, deux fois par jour, et ramènent la rosée à Arvoise. Ils sont à trois cents pas. La chaussée est droite, les fossés peu profonds.",
    ],
    choices: [
      { label: "Te coucher dans le fossé, la figure dans l'herbe raide", test: { dom: "discretion", diff: 0, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }, { if: { has: "r:fait_le_dormant" }, v: 10 }] },
        win: { fx: { flag: "r:recolteurs_caches", ep: ["seance", 500] }, to: "K05r_recolteurs_passe" }, lose: { to: "K05r_recolteurs_pris" } },
      { label: "Endosser la casaque du brigadier, et marcher droit sur eux", hide: { not: { item: "casaque_garde" } }, test: { dom: "social", diff: 5, label: "Payer d'audace", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }, { if: { has: "r:consigne_lue" }, v: 15 }] },
        win: { fx: { flag: "r:recolteurs_dupes", stock: { sable: 3 }, ep: ["seance", 700] }, to: "K05r_recolteurs_casaque" }, lose: { to: "K05r_recolteurs_pris" } },
      { label: "Attendre la charrette derrière la haie, et tomber sur le garde", fight: { title: "Les récolteurs", enemies: [{ id: "garde_sable", n: 1 }, { id: "recolteur", n: 2 }], terrain: "nature",
        win: { fx: { flag: "r:recolteurs_battus", stock: { sable: 4 }, ep: ["seance", 900] }, to: "K05r_recolteurs_butin" }, lose: { fx: { pv: 3 }, to: "K05r_recolteurs_pris" },
        flee: { label: "Rompre, et filer par les blés", dom: "discretion", diff: 0, to: "K05r_recolteurs_passe" } } },
    ] },
  K05r_recolteurs_passe: { act: "II", title: "Ce qu'on dit en poussant", place: "ferme", ambiance: "champs",
    text: [
      "La charrette passe à six pieds de ta tête. Tu vois les roues, les sabots, le bas des sarraus. Tu entends tinter les godets, et ces hommes parler, de la voix des gens qui poussent.",
      "« ...douze voitures, je te dis. Bâchées. Elles montent de Port-Régent avec Monseigneur. Le Coutelas les a vues au gué. »",
      "« Douze voitures de quoi ? »",
      "« De vide. Des cuves. Douze cuves de verre, dans la paille, hautes comme toi. On les mène à Méridane pour le Serment. Et tout ce qu'on gratte depuis Pâques va dedans : c'est pour ça qu'on nous fait relever deux fois, et qu'on a repris leur sable aux gardes. »",
      "« Qu'est-ce qu'il veut en faire, de douze cuves pleines ? »",
      "« Est-ce que je sais. Pousse. »",
      "L'essieu s'éloigne. Tu restes dans le fossé jusqu'à ne plus rien entendre, la joue contre une herbe qui ne plie pas.",
    ],
    fx: { flag: "monde:su:cuves" },
    choices: [{ label: "Te relever, et reprendre la chaussée", to: "K05r_metairie" }] },
  K05r_recolteurs_casaque: { act: "II", title: "Brigadier", place: "ferme", ambiance: "champs", fx: { flag: "monde:su:cuves" },
    text: [
      "Tu roules les manches, tu bombes le torse, et tu marches au milieu de la chaussée, du pas compté que tu as vu au vieux. Rouget suit à trois pas, tête basse, les poignets croisés derrière le dos : un glaneur pris, qu'on ramène.",
      "Le garde de la charrette voit les galons avant la figure. Il rectifie la position. « Brigadier. » Tu grognes le mot du camp, *Soixante*, du coin de la bouche. Tu demandes, sans t'arrêter, d'un ton d'homme qui a mal dormi, pourquoi les godets de la vingt-deuxième étaient vides quand tu y es passé, et qui a signé la feuille.",
      "Les trois récolteurs se regardent. Il y a toujours quelque chose qui cloche dans une feuille ; le tout est d'avoir l'air de le savoir. « C'est relevé du matin, brigadier ! On double les tournées, par ordre : Monseigneur veut ses douze cuves pleines pour le Serment, et il manque de quoi en emplir trois. » Le plus vieux, pour se faire bien voir, décroche un godet du casier. « Si le brigadier est à court pour sa ronde... »",
      "Tu prends le godet sans remercier, comme un dû. Trois pincées, bien tassées. Tu repars. Derrière toi, la charrette se remet à grincer, soulagée.",
      { with: "rouget", text: "À cent pas, Rouget décroise ses poignets. Il a la figure de quelqu'un qui vient de voir marcher sur l'eau. « Tu lui as engueulé sa feuille, souffle-t-il. Sa feuille. À un garde. »" },
    ],
    choices: [{ label: "Ôter la casaque avant la prochaine rencontre", to: "K05r_metairie" }] },
  K05r_recolteurs_butin: { act: "II", title: "Des godets dans la paille", place: "ferme", ambiance: "champs", fx: { flag: "monde:su:cuves" },
    text: [
      "Le garde est dans le fossé, son arbalète sous lui. Les deux tireurs se sont battus mal et peu : ce sont des journaliers de Port-Régent, qu'on paie à la tournée et qu'on n'a pas loués pour mourir. Le troisième a couru.",
      "Tu ouvres un casier. Les godets sont rangés dans la paille comme des œufs, chacun avec son étiquette : le numéro de la borne, la date. Tu en vides quatre dans ton sablier, jusqu'au bord. Il t'en faudrait un tonneau pour tout emporter ; tu laisses le reste, et tu regrettes chaque godet.",
      "L'un des journaliers, assis par terre, se tient la tête. Tu lui demandes où va tout cela. « À Arvoise. Dans les cuves de Monseigneur. Douze, en verre, hautes comme un homme : elles montent de Port-Régent sur des voitures. On les veut pleines pour le Serment. » Il te regarde entre ses doigts. « Tu ne devrais pas avoir fait ça. Il les compte. Il compte tout. »",
    ],
    choices: [{ label: "Quitter la chaussée avant que le fuyard donne l'alarme", to: "K05r_metairie" }] },
  K05r_recolteurs_pris: { act: "II", title: "Vingt écus qui courent", place: "ferme", ambiance: "champs", fx: { flag: "r:recolteurs_alerte" },
    text: [
      { outcome: "lose", text: "« Halte ! Qui va là, dans le fossé ? » Le garde a épaulé. « C'est le glaneur ! Les vingt écus ! Lâchez la charrette ! »" },
      "Il n'y a plus qu'une chose à faire dans ce pays quand on est vu, et c'est de quitter la route. Tu sautes le fossé, tu entres dans le blé debout. Il ne plie pas : il casse, avec un bruit de verre, et te coupe les jambes. Un carreau siffle. Rouget court devant, à quatre pattes presque, comme un lièvre.",
      "Ils ne te suivent pas loin. Un récolteur a sa tournée, un garde a sa charrette, et la Maîtrise retient sur la paie les godets cassés. Tu les entends, de derrière une meule, se disputer sur le rapport à faire. Puis l'essieu repart, plus vite, vers le couchant : on saura ce soir aux Trois-Noyers, et demain à Arvoise, que le glaneur au cahier marche sur la chaussée, vers le levant.",
    ],
    choices: [{ label: "Regagner la chaussée plus loin, par les champs", to: "K05r_metairie" }] },

  // ------------------------------------------------------------ the farm before the cross
  K05r_metairie: { act: "II", title: "La métairie d'avant la croix", place: "ferme", ambiance: "champs",
    text: [
      "Au pied de la montée, à main droite, une métairie basse sous des tilleuls. Tu la connais : la bande y a eu sa cache d'hiver, sous la pierre de l'âtre, du temps où la lisière passait par ici. Tu y as dormi. Tu y as pris, dans un lit d'enfant, une poupée de chiffon.",
      { after: "r:courtepaille_ennemie", text: "La porte est ouverte. Elle ne l'était pas, dans ton souvenir. Sur le seuil, quelqu'un a posé une pierre plate, et sur la pierre un sablier de corne, debout, vide : le tien, celui que tu as rendu hier." },
      { after: "r:courtepaille_ennemie", text: "« Entre donc, mon petit, dit une voix dans la salle, avec un rire qui commence avant la phrase. On t'a gardé la place au coin du feu. »" },
      { before: "r:courtepaille_ennemie", text: "La porte est fermée au loquet, comme la bande la laisse. Sur le linteau, trois traits de craie et un rond : le signe de la Courtepaille, qui veut dire *cache pleine, pas touche*." },
    ],
    choices: [
      { label: "Entrer", hide: { not: { has: "r:courtepaille_ennemie" } }, to: "K05r_embuscade" },
      { label: "Passer au large, par le verger", hide: { not: { has: "r:courtepaille_ennemie" } }, test: { dom: "discretion", diff: 5, label: "Discrétion", help: [{ if: { voie: "leste" }, v: 10 }, { if: { voie: "coureur" }, v: 15 }] },
        win: { fx: { flag: "r:courtepaille_evitee", ep: ["seance", 400] }, to: "K05r_bordes" }, lose: { to: "K05r_embuscade" } },
      { label: "Lever le loquet", hide: { has: "r:courtepaille_ennemie" }, to: "K05r_cache" },
      { label: "Respecter la craie, et monter vers la croix", hide: { has: "r:courtepaille_ennemie" }, to: "K05r_bordes" },
    ] },
  K05r_embuscade: { act: "II", title: "La lisière, c'est elle qui te l'a apprise", place: "ferme",
    text: [
      { outcome: "lose", text: "Tu contournes par le verger, plié{e} en deux. Un homme t'y attend, adossé à un pommier, un gourdin sous le bras : elle t'a appris aussi à passer par les vergers. Il te ramène à la porte par le coude, poliment." },
      "La Courtepaille est assise sur la pierre de l'âtre, ses trois jupes étalées, un sablier plein au cou. Elle a deux hommes avec elle : le Borgne, et un grand que tu ne connais pas, d'une autre bande, loué pour la journée. Ils ont des gourdins. Elle a ses mains sur ses genoux.",
      "« Je t'avais dit : on se reverra dedans. J'ai passé par les prés pendant que tu faisais ta visite à la ferme. Tu traînes, mon petit. Tu regardes les choses. C'est ce qui te perdra. » Elle rit. « Cinquante écus. Je ne suis pas gourmande : donne le cahier, garde ton sable, garde ta peau, et va voir ta butte. La Garde ne saura pas de qui je le tiens. »",
      { with: "rouget", text: "Elle avise Rouget, derrière toi. « Tiens. Le lot de l'âne. Le brocanteur le cherche partout ; il dit qu'on lui a mordu la mule. » Rouget ne bouge pas. Il a rentré la tête dans les épaules, comme sous la pluie." },
    ],
    choices: [
      { label: "« Viens le prendre. »", fight: { title: "La métairie d'avant la croix", enemies: [{ id: "glaneur_rival", n: 2 }], terrain: "interieur",
        win: { fx: { flag: "r:courtepaille_battue", ep: ["seance", 900] }, to: "K05r_embuscade_fin" }, lose: { fx: { pv: 3, gold: -5, stock: { sable: -2 }, flag: "r:courtepaille_volee" }, to: "K05r_embuscade_fin" },
        flee: { label: "Sauter par la fenêtre de l'évier", dom: "discretion", diff: 0, to: "K05r_bordes" } } },
      { label: "« Le cahier ne te servira à rien. Je te donne mieux : ce que j'ai entendu sur la chaussée. »", hide: { not: { has: "monde:su:cuves" } }, test: { dom: "social", diff: 0, label: "Marchander", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "leste" }, v: 5 }] },
        win: { fx: { flag: "r:courtepaille_marche", ep: ["seance", 800] }, to: "K05r_embuscade_fin" }, lose: { to: "K05r_embuscade_rate" } },
      { label: "Regarder Rouget", hide: { not: { present: "rouget" } }, if: { conf: "rouget", min: 10 }, why: "Rouget garde la tête rentrée dans les épaules.", fx: { flag: "r:rouget_tient_tete", conf: { rouget: 10 }, ep: ["seance", 800] }, to: "K05r_embuscade_fin" },
    ] },
  K05r_embuscade_rate: { act: "II", title: "Des paroles", place: "ferme",
    text: [
      "« Ce que tu as entendu. » La Courtepaille bâille. « Je t'ai appris à vendre du vent, je ne vais pas t'en acheter. Le cahier, mon petit. »",
      "Le Borgne fait un pas.",
    ],
    choices: [
      { label: "Te mettre en garde", fight: { title: "La métairie d'avant la croix", enemies: [{ id: "glaneur_rival", n: 2 }], terrain: "interieur",
        win: { fx: { flag: "r:courtepaille_battue", ep: ["seance", 900] }, to: "K05r_embuscade_fin" }, lose: { fx: { pv: 3, gold: -5, stock: { sable: -2 }, flag: "r:courtepaille_volee" }, to: "K05r_embuscade_fin" },
        flee: { label: "Sauter par la fenêtre de l'évier", dom: "discretion", diff: 0, to: "K05r_bordes" } } },
    ] },
  K05r_embuscade_fin: { act: "II", title: "Le compte de la Courtepaille", place: "ferme",
    text: [
      { after: "r:courtepaille_battue", text: "Le grand est assis par terre, à chercher une dent. Le Borgne a lâché son gourdin et levé les mains : il te connaît depuis six ans, et il ne tient pas à te connaître davantage. La Courtepaille n'a pas quitté sa pierre. Elle regarde ses deux hommes, puis toi, sans colère, comme on regarde un compte qui ne tombe pas juste." },
      { after: "r:courtepaille_battue", text: "« Bon. Je t'avais appris ça aussi. » Elle se lève, secoue ses jupes. « Cinquante écus, c'était le prix d'hier. Tu viens de monter. Ne t'y trompe pas : je ne t'en veux pas, je te réévalue. » Elle passe devant toi, sans hâte, et s'arrête sur le seuil. « Ce que tu portes, ils le veulent à Arvoise plus que tout le sable de la route. Demande-toi pourquoi, avant d'y arriver. Moi, je me le demande depuis ce matin, et ça m'empêche de dormir. »" },
      { after: "r:courtepaille_volee", text: "Tu reprends tes sens sur les dalles, la bouche pleine de sang. On t'a retourné les poches. Il te manque cinq écus et la moitié de ton sable. La Courtepaille est debout au-dessus de toi, ton sac à la main, vidé, secoué. Elle a la figure de quelqu'un à qui l'on a vendu un âne mort." },
      { after: "r:courtepaille_volee", text: "« Où est-il ? » Tu te tais : tu l'ignores toi-même. Elle te tâte, des aisselles aux chevilles, avec la compétence d'une mère. Rien. Elle jure. « Tu l'as enterré. Tu l'as enterré à une borne, comme la vieille enterre tout. Je les fouillerai toutes. » Elle sort, ses hommes derrière, en emportant tes écus pour le dérangement." },
      { after: "r:courtepaille_volee", with: "rouget", text: "Quand le bruit de leurs pas s'est éteint, Rouget sort de sous l'évier. Il déboutonne sa veste trop grande. Le Cahier est contre sa peau, à plat, tenu par sa ceinture. « Je te l'ai pris pendant que tu causais, dit-il. Tu n'as rien senti. Elle non plus. » Il te le tend, et sa main tremble un peu : c'est la première chose qu'il vole pour la rendre." },
      { after: "r:courtepaille_marche", text: "Tu racontes les douze voitures, les douze cuves, tout le sable de la Garde qui remonte à Arvoise. Tu vois changer la figure de la Courtepaille à mesure : ce ne sont plus cinquante écus qu'elle écoute. « Ils dégarnissent la lisière, dit-elle lentement. Les gardes sans sable, les postes vides. D'ici au Serment, plus personne entre Vauxelles et la Thiorne. » Elle se lève. Ses yeux brillent. « Mon petit, tu viens de me donner dix jours de glane sans une casaque. Ça vaut un cahier. Ça en vaut deux. »" },
      { after: "r:courtepaille_marche", text: "Elle te tape sur l'épaule, à te déboîter. « Va voir ta butte. Et si tu passes la rivière, prends le gué des Sablières : dis au passeur que tu es de chez moi. Je le suis de nouveau, ce soir, ta patronne. »" },
      { after: "r:rouget_tient_tete", text: "Rouget sort la tête de ses épaules. Il passe devant toi. Il est haut comme la table, et sa voix déraille au milieu de la phrase, mais il la dit : « Tu m'as vendu avec l'âne. Trois écus, avec le licol. Alors je suis plus à toi, et {hero} non plus. Tu peux pas reprendre ce que t'as vendu. C'est toi qui nous l'as appris. »" },
      { after: "r:rouget_tient_tete", text: "Il y a un silence. Le Borgne regarde ses pieds. La Courtepaille regarde le gamin, longtemps, et quelque chose remue dans sa large figure, qui est peut-être de l'orgueil. Puis elle rit, de son grand rire, à en faire trembler ses jupes. « Il a raison, le lot de l'âne ! Il a retenu la leçon mieux que moi ! » Elle se lève. « Je ne vole pas ce que j'ai vendu : ça gâte le commerce. Filez. Je vous retrouverai bien le jour où vous aurez quelque chose que je n'ai jamais eu. »" },
    ],
    choices: [{ label: "Monter vers la croix", to: "K05r_bordes" }] },
  K05r_cache: { act: "II", title: "La pierre de l'âtre", place: "ferme",
    text: [
      "La salle est telle que la bande l'a laissée : des paillasses roulées, une marmite, et le lit d'enfant dans son coin, avec le creux qu'y faisait une poupée. Tu soulèves la pierre de l'âtre. Dessous, dans un pot de grès, la réserve : une fiole de sable, cachetée, et quelques objets qu'on n'a pas eu le temps de vendre.",
      { after: "r:courtepaille_quitte", text: "Sur la fiole, un bout de chiffon noué. La Courtepaille ne sait pas écrire ; elle fait des nœuds. Tu les lis du pouce : un gros, deux petits, une boucle. *Pour Roquebise. Une fois.* Elle a su que tu passerais par ici avant que tu le saches toi-même." },
      { after: "r:courtepaille_dupe", text: "La fiole est pleine. La Courtepaille te croit sans cahier, et te compte encore neuf écus de dette : ce sable-là n'est pas pour toi." },
    ],
    choices: [
      { label: "Prendre la fiole qu'elle t'a laissée", hide: { not: { has: "r:courtepaille_quitte" } }, fx: { stock: { sable: 2 } }, to: "K05r_cache_fin" },
      { label: "Prendre la fiole : la bande te doit bien six ans", hide: { has: "r:courtepaille_quitte" }, fx: { stock: { sable: 2 }, flag: "r:vole_bande" }, to: "K05r_cache_fin" },
      { label: "Remettre la pierre", to: "K05r_bordes" },
    ] },
  K05r_cache_fin: { act: "II", title: "Deux pincées", place: "ferme",
    text: [
      { after: "r:vole_bande", text: "Tu casses la cire. Deux pincées coulent dans ton col. Tu remets le pot, la pierre, la cendre par-dessus. Sur le linteau, en sortant, tu effaces de la manche un des trois traits de craie : *cache entamée*. On ne vole pas les siens sans le leur dire, même quand on a cessé d'en être." },
      { after: "r:vole_bande", with: "rouget", text: "Rouget te regarde effacer le trait. « Elle saura que c'est toi. » Oui. « Elle va le compter. » Oui. Il réfléchit. « Alors c'est pas voler. C'est emprunter très fort. »" },
      { before: "r:vole_bande", text: "Tu casses la cire. Deux pincées coulent dans ton col. Tu refais les nœuds du chiffon à l'envers, un gros, deux petits : *reçu*. Tu remets le pot et la pierre." },
    ],
    choices: [{ label: "Monter vers la croix", to: "K05r_bordes" }] },

  // ------------------------------------------------------------ the Hautes-Bordes
  K05r_bordes: { act: "II", title: "Les Hautes-Bordes", backName: "le hameau des Hautes-Bordes", place: "ferme", ambiance: "champs", hub: true, takes: "evening", fx: { stock: { sable: -1 } },
    text: [
      { first: true, text: "La chaussée monte. À la vingt et unième borne, elle passe un épaulement où se tenait un hameau : onze feux, une mare, des meules. On l'a vidé en 596, un an après le Bond, quand la corde est venue jusqu'aux étables. Les toits ont tenu. Les portes sont ouvertes." },
      { first: true, text: "Le jour baisse. Dans la Dormante, cela veut dire que le gris fonce, également, partout à la fois, comme une lampe qu'on mouche. Au-dessus des toits, sur le tertre, la croix." },
      { again: true, text: "Le hameau vide, la mare, les meules. La croix, là-haut, sur le gris qui fonce." },
    ],
    choices: [
      { label: "La première ferme, à main gauche", to: "K05r_oncle", hide: { seen: "K05r_oncle" } },
      { label: "Une vache, debout dans la cour commune", to: "K05r_vache", hide: { seen: "K05r_vache" } },
      { label: "Monter à la croix", to: "K05r_croix", big: true },
    ] },
  K05r_oncle: { act: "II", title: "La ferme de l'oncle", place: "ferme", ambiance: "champs",
    text: [
      "C'est la ferme de ton oncle Bordier. Tu y venais tous les étés, pour les foins. Il y a encore, sous le fenil, la charrette sur laquelle on te hissait pour tasser les fourchées du pied.",
      "Tu montes au fenil. Tu avais dix ans. C'était la nuit du douze au treize juin de l'an 595. Tu dormais là, dans l'odeur du foin neuf, et quelque chose t'a réveillé{e} : un silence. Les grillons s'étaient tus tous ensemble. Tu es allé{e} à la lucarne.",
      "Roquebise était sur sa butte, à deux lieues, avec ses lumières : celles des verriers, qui ne s'éteignaient jamais. Elles étaient là. Elles ne clignaient plus. Une lumière qui ne cligne pas, à deux lieues, on ne sait pas dire ce que cela a d'affreux tant qu'on ne l'a pas vu. Tu as crié. Ton oncle t'a rattrapé{e} à la mare, pieds nus, en chemise, qui courais vers la butte. Il a fallu deux hommes.",
      "La lucarne est là. Tu n'y vas pas. Tu sais ce qu'on y voit.",
      { with: "rouget", text: "Rouget s'est assis dans le foin sans rien demander. Il y a des moments où il a l'âge qu'il a, et d'autres où il a celui de quelqu'un qui a été vendu ; ce soir, c'est le second." },
    ],
    choices: [{ back: "K05r_bordes" }] },
  K05r_vache: { act: "II", title: "La vache des Hautes-Bordes", place: "ferme", ambiance: "champs",
    text: [
      "Elle est célèbre dans toutes les bandes de la lisière. Une vache rousse, prise debout au milieu de la cour, en train de ruminer, la mâchoire de travers. Ses maîtres n'ont pas pu l'emmener : on n'emmène pas ce que la Dormante tient.",
      "C'est celle qu'un glaneur a voulu coucher, pour rire, un soir de vin. Il s'y est mis de l'épaule. La vache n'a pas bougé d'un poil ; l'épaule est sortie de sa boîte, et l'homme a glané de la main gauche jusqu'à la fin de sa vie, qui fut courte.",
      "On lui a mis, depuis, une couronne de foin tressé sur les cornes. Chaque bande qui passe en refait une. C'est la seule chose sur quoi les glaneurs et les Veilleurs se soient jamais entendus, sans se le dire.",
      { with: "rouget", text: "Rouget refait la couronne, gravement, avec du foin de l'oncle. Il la pose de travers, recule, juge, la redresse." },
    ],
    choices: [{ back: "K05r_bordes" }] },
  K05r_croix: { act: "II", title: "La croix", place: "ferme", ambiance: "champs",
    text: [
      "Tu connais les trois marches par cœur. Tu connais le creux qu'y ont fait tes genoux. Tu es monté{e} ici presque toutes les nuits, six ans, en brûlant le sable que tu devais à la bande, pour t'asseoir et regarder.",
      "Roquebise est sur sa butte. Le soir de la Dormante la laisse voir tout entière, grise sur gris : la tour carrée de la porte, le clocher, les toits de tuiles vernies qui ne brillent plus. Dix panaches de fumée montent des fours et s'arrêtent à la même hauteur, comme dix colonnes qui porteraient un plafond. Et les lumières. Une trentaine, jaunes, fixes, qui sont les lampes de la verrerie et les veilleuses des maisons où il y avait un enfant.",
      "Tu sais laquelle est la tienne. Troisième après la fontaine, à l'étage. Tu l'as regardée deux mille nuits. Demain, tu seras dessous.",
      { if: { all: [{ has: "monde:croix_bordes" }, { has: "monde:croix_lettres" }] }, text: "Puis tes yeux descendent au socle, du côté du levant, là où {autre} a dit de regarder. Il y a deux lettres dans la pierre tendre. Le lichen les a remplies ; il faut les suivre du doigt. La sienne, la tienne. Tu t'es assis{e} à un pied de ces deux lettres, deux mille nuits, sans les voir : elles n'y étaient pas. Elles y sont depuis soixante ans. Tu ne cherches plus à ranger ces deux phrases dans le même ordre." },
      { if: { all: [{ has: "monde:croix_bordes" }, { not: { has: "monde:croix_lettres" } }] }, text: "Puis tes yeux descendent au socle, du côté du levant, là où {autre} a dit de regarder. Il y a une aiguille d'horloge gravée dans la pierre tendre, la grande, avec sa pointe en fer de lance. Le lichen l'a remplie. Elle montre Roquebise. Tu t'es assis{e} à un pied de cette aiguille, deux mille nuits, sans la voir : elle n'y était pas. Elle y est depuis soixante ans." },
      { if: { has: "monde:croix_bordes" }, text: "De l'autre côté du socle, il y a aussi une vache, très usée. Celle-là, tu l'as toujours connue." },
      { with: "rouget", text: "« C'est laquelle ? » demande Rouget. Tu lui montres. Il plisse les yeux, longtemps, honnêtement. « Je la vois », ment-il." },
    ],
    choices: [{ label: "Passer la nuit sous la croix", to: "K05r_nuit_croix" }] },
  K05r_nuit_croix: { act: "II", title: "La dernière nuit de la croix", place: "ferme", ambiance: "champs", takes: "night",
    text: [
      "Vous mangez ce qu'il y a. Rouget s'endort d'un coup, comme on tombe, roulé dans ta veste, la main sur son nouet.",
      "Tu ne dors pas tout de suite. Tu regardes la lumière de l'étage, troisième après la fontaine. Pendant six ans, elle a été la chose la plus lointaine du monde, à deux lieues. Cette nuit, il y a plus loin : une noce, sur cette même butte, où l'on danse en ce moment sous des lanternes de terre, et dont pas un bruit ne t'arrive.",
      { if: { item: "dragees" }, text: "Tu as dans ta poche trois dragées dures comme des cailloux, dans un nœud de mouchoir. Une vieille les garde depuis soixante ans. On les jette là-bas, ce soir, à pleines mains." },
      "Vers la fin de la nuit, le froid te réveille, celui qui vient avant le jour. Tu descends à la borne de la vingt et unième lieue, au bord de la chaussée. Le bronze du cadran s'est couvert d'une buée grise, qui luit.",
    ],
    choices: [{ label: "Tirer la plume de ton bonnet", fx: { stock: { sable: 2 } }, to: "B05" }] },
});

module.exports = {
  passages: P,
  extras: {
    enemies: {
      recolteur: { name: "Récolteur de la Maîtrise", look: "humain", pv: 6, att: 16, def: 8, dmg: 2, desc: "Un journalier en sarrau gris, payé à la tournée pour relever les godets. On ne l'a pas loué pour se battre." },
    },
  },
};
