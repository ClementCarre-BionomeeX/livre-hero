// Le Douzième Coup · dénouement « immobile » (at the foot of the stairs, the two accept the old man's table and leave
// him the lever : the note ends by itself, « neither rendered nor refused », and in 601 the wave finishes its course.
// The whole world is taken. Awake : the Master of Sands, his forty buyers, and the two guests, on an allowance of
// pinches). `F_immobile`, the wave (`Fi_vague`), the table (`Fi_table`), the still world (`Fi_monde`, hub) : the
// parvis, the sea, the copper man, the forty, the cellar ; the one who stays at Roquebise on Sundays (`r:i_dimanches`),
// the one who passes at Line's chair (`j:i_line_eveil`) ; the years (`Fi_annees`) ; the last choice (`Fi_choix`,
// `monde: "table"` : `monde:i_rester` | `monde:i_gris` | `monde:i_dimanche`) ; three end passages (`fin:immobile`).
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var SORTIS = { has: "monde:noyers_sortis" };
var LACHE = { has: "monde:coudrier_lache" };

Object.assign(P, {
  F_immobile: { act: "V", title: "Deux couverts", place: "tour", ambiance: "chateau",
    text: [
      "Vous retournez vers le berceau. Le vieil homme vous regarde venir. Il n'a pas l'air surpris : il a l'air de quelqu'un qui recompte une somme et qui la trouve juste.",
      { if: J, text: "C'est toi qui parles, ou c'est {autre}. « On monte pas. On descend pas. On prend votre table. » Tu entends ta propre voix. Elle est calme. Tu avais cru qu'il faudrait la forcer." },
      { if: R, text: "C'est toi qui parles, ou c'est {autre}. « On monte pas. On descend pas. On prend votre table. » Tu connais cette phrase. Tu l'as dite cent fois, en plus petit, au bord des fermes prises : *on entre, on prend, personne dira rien.* Elle n'avait jamais eu ce goût." },
      "« Je ne sépare pas ce qui est venu ensemble », dit-il. Il se lève, en deux temps. « Vous avez pesé. Vous avez trouvé, comme moi, que les deux autres portes coûtaient trop : quarante mille veufs d'un côté, soixante ans de gens défaits de l'autre. Vous choisissez celle où personne ne perd rien. On vous dira que c'est la porte des lâches. Ceux qui vous le diraient ne seront pas en état de le dire. »",
      "Il va à l'homme de trente ans. Il lui pose un grain sur le dos de la main, puis un second. L'homme respire. Il a les doigts au cuir, la barre au fond. « Avons-nous gagné ? » demande-t-il. « Nous avons gagné, dit le vieux. Tiens seulement. » Et l'autre tient, avec un sourire que vous reconnaissez : c'est le même, à soixante ans près.",
      { if: LACHE, text: "Le Grand Maître est debout à côté, les bras le long du corps. Il avait lâché la barre, à la prière qu'on lui en avait faite. Il regarde le puits, de ses yeux de plâtre. Il ne saura jamais ce qu'on a fait de son geste." },
      { if: { not: LACHE }, text: "Le Grand Maître a les deux poings à la barre, de l'autre côté. Il pousse vers le haut depuis soixante ans, de toute sa colère. Deux hommes le tiennent en échec, qui sont le même. Il ne saura jamais que vous étiez là." },
      "« Remontons, dit le vieil homme. La note va finir d'elle-même : le Livre dit *ni rendu, ni refusé.* Il vaut mieux être en haut. On voit mieux. »",
    ],
    choices: [{ label: "Remonter derrière lui", to: "Fi_vague", big: true }] },

  Fi_vague: { act: "V", title: "La vague achève sa course", backName: "la herse", place: "tour", ambiance: "chateau", charniere: true,
    text: [
      { first: true, text: "La note finit. Elle finit sans coup, sans cloche : elle se retire, comme un bruit auquel on s'était fait et dont on remarque seulement l'absence. Vous êtes sur le palier de la herse, entre deux lanternes. C'est le vingt et un juin 601. Il est midi." },
      { first: true, text: "Sous vos pieds, quelque chose cède. Cela ne fait pas de bruit non plus. C'est un affaissement, très bas, comme d'une digue que l'eau aurait travaillée soixante ans." },
      { first: true, text: "Le gris monte par l'escalier. Il vous passe aux chevilles, aux genoux, à la poitrine. Il est tiède. Vous avez du sable au cou : il vous traverse sans vous prendre, et vous le regardez sortir par la herse levée, dans la ruelle, sur le parvis." },
      { first: true, if: R, text: "Tu vois cela. Trois cents Veilleurs en mante bleue, qui chantaient la note à bouche fermée : la vague leur passe dessus, et ils restent, la bouche close, au milieu d'une respiration. La passerelle du Serment, avec ses manteaux blancs. Une jeune femme, sur l'estrade, un rouleau à la main, la bouche ouverte sur *je jure.* Des noirs, des blancs, mêlés, qui se battaient dans la vis ce matin, et qui ont à présent le même gris jusqu'aux yeux." },
      { first: true, if: J, text: "Tu vois cela. Tu n'avais jamais vu 601 que neuf ans, par la fenêtre d'un atelier. Des gens en mante bleue, qui chantaient ; une jeune femme sur une estrade, un rouleau à la main ; des hommes en noir, des hommes en blanc. La vague leur passe dessus. Ils restent comme ils étaient. Et à quarante pas de la porte de bronze, sur une chaise de malade, sanglée, une vieille femme qui avait des lunettes sur le front." },
      { first: true, text: "La vague ne s'arrête pas au parvis. On la voit descendre les rues, passer les portes, s'étaler sur la plaine comme une ombre de nuage qui n'aurait pas de nuage. Elle va vite. Elle a soixante ans d'élan." },
      { first: true, text: "« Elle sera à la mer ce soir, dit le vieil homme, la main en visière. Aux frontières dans trois jours. Je l'avais calculé à une heure près. » Il laisse retomber sa main. « Voilà. Plus rien ne s'abîmera. »" },
      { again: true, text: "Le palier de la herse. Dehors, le parvis gris, sous un soleil qui a cessé de tourner." },
    ],
    choices: [{ label: "Le suivre à table", to: "Fi_table", big: true }] },

  Fi_table: { act: "V", title: "Le quarante et unième, et le quarante-deuxième", backName: "la table", place: "tour", ambiance: "chateau", charniere: true, aparte: true,
    text: [
      { first: true, text: "La salle est derrière le dixième berceau, par une porte de fer. Elle est basse, voûtée, tendue de drap gris. Une table en fer à cheval. Quarante couverts d'argent, quarante sabliers d'or. Et au bout, deux chaises de plus, avec deux couverts d'étain : on en a ajouté un, à la hâte, qui ne va pas avec l'autre." },
      { first: true, text: "Ils sont quarante, debout, en velours. Des joues de cire, des mains de vieillards. Ils applaudissent quand le Maître entre. Puis ils vous voient : des sabots, du charbon, de la sciure, seize ans. Les applaudissements se défont." },
      { first: true, text: "« Mes hôtes, dit le vieil homme. Ils auraient pu m'empêcher. Ils ne l'ont pas fait. Je leur dois ce que vous me devez tous. » On s'incline, de mauvaise grâce. Une femme à perruque vous demande, d'une voix flûtée, de quelle maison vous êtes." },
      { first: true, if: R, text: "Tu la regardes. Tu connais ses fossés : on t'a chassé{e} de sa lisière à coups de plat de hallebarde, deux hivers de suite. « De Roquebise », dis-tu. Elle sourit sans comprendre. Elle a des parts sur Roquebise." },
      { first: true, if: J, text: "{autre} la regarde, et répond : « De Roquebise. » Elle sourit sans comprendre. Tu vois, à la figure de {autre}, qu'{autre:il} a déjà eu affaire à ses gardes." },
      { first: true, text: "On remplit les sabliers à la cuve, tous ensemble, par cérémonie. Le sable coule : gris, tiède, sans fin. Le puits est tenu au fond, pour toujours, et il sue comme il n'a jamais sué. On remplit les vôtres : deux sabliers d'étain, qu'on a trouvés à l'office." },
      { first: true, text: "On s'assoit. Il n'y a rien dans les assiettes. On n'a plus faim, dans un monde arrêté ; on se met à table pour savoir qui est à la droite de qui. Le Maître lève son sablier. « À ce qui dure. »" },
      { first: true, text: "Vous levez les vôtres. C'est fait. Vous regardez, par-dessus le bord, quarante figures qui ont payé des forêts pour être ici, et vous cherchez sur chacune ce que vous êtes devenus depuis une heure." },
      { again: true, text: "La table en fer à cheval. Quarante sabliers d'or, deux d'étain." },
    ],
    choices: [{ label: "Le monde, dehors", to: "Fi_monde", big: true }] },

  Fi_monde: { act: "V", title: "Un monde où plus rien ne court après personne", place: "tour", ambiance: "ville", hub: true, backName: "le monde arrêté",
    text: [
      { first: true, text: "On vous a compté vos pincées : assez pour marcher tant que vous voudrez, à condition de revenir. C'est la règle de la table. Le sable est au Maître ; il le donne le dimanche, à la cuve, de sa main." },
      { first: true, text: "Dehors, il est midi. Il sera midi toujours. Le soleil est droit sur le Mont-Cadran. Les fumées sont debout. Il y a, à mi-hauteur de la Tour, une hirondelle, posée sur l'air." },
      { first: true, text: "Vous pouvez aller partout. Aucune porte n'est gardée. Aucune Garde ne vous courra après : elle est sur le parvis, la hallebarde au pied, grise. Vous aurez toutes les maisons, et le temps de les visiter." },
      { again: true, text: "Midi, sur un monde arrêté. Vos sabliers d'étain, à la ceinture." },
    ],
    choices: [
      { label: "Le parvis de 601", hide: { seen: "Fi_parvis" }, to: "Fi_parvis" },
      { label: "La chaise à sangles, au pied de l'estrade", hide: { any: [R, { seen: "Fij_line" }] }, to: "Fij_line" },
      { label: "Ceux de la glane, sous l'auvent du cirier", hide: { any: [J, { seen: "Fir_camp" }] }, to: "Fir_camp" },
      { label: "L'homme de cuivre, qui marche encore", hide: { seen: "Fi_carillon" }, to: "Fi_carillon" },
      { label: "Les quarante, et ce qu'ils font de leur temps", hide: { seen: "Fi_acheteurs" }, to: "Fi_acheteurs" },
      { label: "La Chambre basse, et ses cuves", hide: { seen: "Fi_cuves" }, to: "Fi_cuves" },
      { label: "La mer, à dix jours de marche", hide: { seen: "Fi_mer" }, to: "Fi_mer" },
      { label: "Roquebise, la troisième porte", hide: { any: [J, { seen: "Fir_roquebise" }] }, to: "Fir_roquebise" },
      { label: "Les Trois-Noyers, l'atelier", hide: { any: [R, { seen: "Fij_noyers" }] }, to: "Fij_noyers" },
      { label: "Laisser venir les années", to: "Fi_annees", big: true },
    ] },

  Fi_parvis: { act: "V", title: "Je jure", place: "tour", ambiance: "ville",
    text: [
      "Le parvis a deux foules, à présent, l'une dans l'autre. Les cinq mille de 541, la bouche ronde, sous soixante ans de poussière. Et ceux de ce matin : les mantes bleues, la cour, les gardes.",
      "La Doyenne des Veilleurs est assise sur une marche, son registre sur les genoux, la plume levée. Trois mille pages : chaque dormant, sa rue, son ruban. Elle a soixante-dix ans. Elle a passé sa vie à tenir le Rôle de ceux qui étaient pris. Elle y est. Personne ne l'inscrira.",
      "Sur l'estrade, la Régente Odeline a vingt-huit ans et un rouleau à la main. *Je jure de rendre ce royaume à la Reine, le jour de son réveil.* Elle en était à *je jure.* Elle le dira toujours.",
      { if: R, text: "Au pied de la Tour, il y a un garçon de vingt ans, en casaque noire retournée, une pique en travers. Jehan. Il t'avait suivi{e} jusque-là. Il cherchait son nom. Il regarde la porte par où tu devais ressortir avec une cloche. Tu passes devant lui. Tu ne trouves pas où mettre tes yeux." },
      { if: J, text: "{autre} s'arrête devant un garçon de vingt ans, en casaque noire retournée, une pique en travers. {autre:Il} ne dit pas qui c'est. {autre:Il} reste là, et tu vois ses mains chercher ses poches. Le garçon regarde la porte de la Tour, comme on attend quelqu'un qui a dit : *je reviens.*" },
      "Les rubans bleus sont à tous les poignets de 541. On les renouait tous les ans. Ils passeront, à la longue : le tissu, lui, n'est pas pris. Vous vous surprenez à penser qu'il faudrait les refaire, et vous vous demandez pour qui.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fij_line: { act: "V", title: "Elle ne mourra pas", place: "tour", ambiance: "ville",
    text: [
      "Elle est où on l'avait mise : à quarante pas de la porte de bronze, sur une chaise de malade, sanglée aux poignets et à la taille. Soixante-neuf ans, des sourcils d'un seul trait, tout blancs. Ses lunettes sont sur son front.",
      "Tu défais les sangles. Cela ne sert à rien : elle ne se lèvera pas. Tu les défais quand même, à genoux, et tu les jettes le plus loin que tu peux.",
      { if: { not: SORTIS }, text: "Elle regardait le débouché de la rue aux Oies, entre le cirier et le marchand de peignes. Il y a là un homme sur une borne, la main en visière, depuis soixante ans. Elle venait le voir tous les ans. Elle le regarde encore. Ils se regarderont toujours, à cent pas, sans se rejoindre." },
      { if: SORTIS, text: "Elle regardait la porte de la Tour. Elle attendait d'en voir sortir quelqu'un. Elle a les yeux à la hauteur où ta tête aurait paru." },
      { if: { secret: "j_malade" }, text: "Elle était mourante. Elle te l'avait fait jurer : *il lui faut un guide, pas un pleureur.* Elle ne mourra pas. Ses poumons sont arrêtés au milieu d'un sifflement, et ils y resteront. Tu l'as sauvée, de la seule façon dont elle n'aurait pas voulu." },
      "Tu as du sable. Une pincée, sur sa main, et elle te parlerait le temps de quelques phrases. Tu sais ce qu'elle dirait d'abord. Elle regarderait le soleil, les mantes bleues prises, ta figure ; et elle n'aurait pas besoin que tu expliques.",
    ],
    choices: [
      { label: "Poser le grain", fx: { flag: "j:i_line_eveil", stock: { sable: -1 } }, to: "Fij_line_eveil" },
      { label: "Lui remettre ses lunettes sur le nez, et t'en aller", back: "Fi_monde" },
    ] },

  Fij_line_eveil: { act: "V", title: "Ne me dépense pas", place: "tour", ambiance: "ville",
    text: [
      "Le gris se retire de ses doigts. Elle respire : on l'entend, comme un soufflet percé. Elle te voit. Elle voit, derrière toi, trois cents mantes bleues la bouche close, et le soleil. Elle remonte ses lunettes, qui n'avaient pas bougé.",
      "« C'est passé. » Ce n'est pas une question. « Tout. Jusqu'où ? — Jusqu'à la mer, ce soir. — Et tu es debout. » Elle regarde le sablier d'étain, à ta ceinture. Elle comprend le reste. Elle a toujours tout compris par les outils.",
      "Tu attends la colère. Elle ne vient pas. Il vient quelque chose de plus las.",
      "« J'ai remonté cette horloge soixante ans. Je t'ai trouvé{e} sur une borne, je t'ai appris à lire, je t'ai tiré le poignet à droite pendant neuf hivers. Je t'ai envoyé{e} rendre un coup de cloche. » Elle tousse. « Et tu me réveilles pour me dire que tu as pris une chaise. »",
      "Tu dis pourquoi. Les deux portes, ce que coûtait chacune. Elle écoute. Le grain baisse.",
      "« Je sais ce qu'elles coûtaient. Je les avais comptées avant ta naissance. J'avais compté aussi celle-ci, et je ne te l'avais pas dite, parce que je ne croyais pas que tu la prendrais. » Elle te regarde, longtemps, sans dureté. « Je me suis trompée sur une pièce. Cela arrive. C'est toujours celle qu'on a limée soi-même. »",
      "Elle retire ses lunettes. Elle les plie. Elle te les met dans la main. « Ne me dépense pas. Je ne veux pas de tes dimanches. Si un jour tu trouves comment défaire ce que tu as laissé faire, tu viendras, et tu me le diras. Sinon, laisse-moi regarder où je regardais. J'y étais bien. »",
      "Le gris revient. Elle a tourné la tête, juste à temps, vers l'endroit qu'elle voulait.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fir_camp: { act: "V", title: "La balance, au milieu d'une pesée", place: "tour", ambiance: "ville",
    text: [
      "Ils étaient venus jusqu'au parvis, pour voir. Une douzaine, en guenilles, le sachet au cou. Ils avaient du sable : la vague a été plus forte que leurs pincées. Ils ont grisonné lentement, les derniers, en comprenant.",
      "La Courtepaille est assise sur une borne, sa balance sur les genoux. Elle pesait quelque chose : un plateau est plus bas que l'autre. Elle t'a ramassé{e} à dix ans. Elle t'a appris à ouvrir une main sans la casser. Elle a les yeux levés vers la Tour, petits, gris, avec une expression que tu lui connais : celle d'un fermier qui regarde grêler.",
      "Rouget est derrière elle. Quatorze ans, roux, les poings dans les poches. Il a couru : il a un pied en l'air. Il venait te dire quelque chose. Il a la bouche ouverte sur ton nom.",
      "Tu connais ce métier. Tu sais ce qu'on fait devant un dormant : on ouvre la main, on regarde les poches. Tu regardes celles de Rouget. Il y a une montre, qu'il a prise à un gros de 541 et qu'il voulait lui remettre pour voir sa tête. Tu la lui laisses.",
      "Tu as passé six ans à entrer chez des gens pris, en te disant qu'ils ne sentaient rien. Ceux-ci, tu sais leurs voix. Tu t'aperçois que cela ne change rien à ce qu'ils sentent, et que cela change tout à ce que tu fais là.",
      "Tu ôtes la balance des genoux de la vieille. Tu la poses par terre, d'aplomb, les plateaux égaux. C'est tout ce que tu trouves.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fi_carillon: { act: "V", title: "Le troisième qui bouge", place: "guilde", ambiance: "ville",
    text: [
      "Il y a un bruit, dans la ville. Un seul : un pas égal, métallique, sur le pavé de la colline. Vous le suivez.",
      "C'est un homme de cuivre, haut de six pieds, une cloche dans la poitrine. Un veilleur de la Guilde. Il marche sur un cœur de sable, depuis les Fondateurs, à porter des messages entre des jurés. Le sable, lui, ne manque plus : le puits sue à pleins bords, et l'automate sait où est la cuve.",
      "Il vous voit. Il s'incline. Il sonne midi, douze petits coups clairs. C'est l'heure. Ce sera l'heure à chaque fois qu'il la sonnera.",
      { if: { has: "r:carillon" }, text: "Vous le connaissez. Il a marché avec vous, à travers trois cercles. Il tire d'entre deux côtes un papier plié, de l'écriture d'un homme qui parlait du nez, et il le tend. Il le tend depuis soixante ans à quelqu'un qui devait rendre un coup. Personne ne le prend. Il attend, le bras levé, avec la patience des choses bien faites." },
      { if: { not: { has: "r:carillon" } }, text: "Il a un papier, entre deux côtes, qu'on voit dépasser. Il le tire, le tend. Vous ne savez pas pour qui c'était. Vous savez seulement que ce n'était pas pour des gens assis à cette table." },
      "Il n'a pas de table, lui. Il n'a rien accepté ; on ne lui a rien proposé. Il fait ce pour quoi on l'a remonté. Vous le regardez s'éloigner, de son pas égal, vers une porte où personne n'ouvrira. Il est, avec vous et quarante vieillards, tout ce qui bouge au monde ; et il est le seul des quarante-trois à savoir pourquoi.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fi_acheteurs: { act: "V", title: "Ce qu'on fait de mille ans", place: "palais", ambiance: "chateau",
    text: [
      "Les quarante ont pris le Palais. Ils y logent dans les appartements de 541, entre des dames d'honneur de plâtre. Ils ont mille ans devant eux, et il faut bien les employer.",
      "Les premiers temps, ils visitent. Ils entrent partout. Ils ouvrent les coffres, lisent les lettres, essaient les habits des morts qui ne sont pas morts. Un gros homme, qui avait donné la forêt de Vauxelles pour dix ans, s'est fait une collection de tabatières, prises dans les poches du parvis. Il vous les montre. Il y en a trois cents.",
      "Puis ils s'ennuient. Cela vient plus vite qu'on ne croirait. Ils se font des dîners où l'on ne mange rien. Ils jouent, pour des pincées. Une femme à perruque habille les dormants : elle a mis une robe de bal à une porteuse d'eau, au milieu de la ruelle des Sonneurs, et elle vient la regarder tous les jours.",
      { if: R, text: "Tu la regardes faire. Tu as volé des dormants six ans. Tu ne leur avais jamais rien mis. Tu ôtes la robe de bal, un jour où elle n'est pas là, tu la plies, et tu rends à la porteuse son tablier. La femme à perruque se plaint au Maître. Il te regarde, par-dessus son sablier. Il ne te dit rien. Il te compte tes pincées, ce dimanche-là, une par une, plus lentement." },
      { if: J, text: "{autre} ôte la robe de bal, un jour où la femme n'est pas là, la plie, et rend à la porteuse son tablier. La femme à perruque se plaint au Maître. Il ne dit rien. Il compte les pincées de {autre}, ce dimanche-là, une par une, plus lentement. Tu comprends ce jour-là comment la table tient : par la main qui verse." },
      "Deux d'entre eux se battent en duel, la troisième année, pour une place à table. On ne meurt pas bien, dans un monde arrêté : le blessé ne guérit ni n'empire. Il reste avec son trou, et il dîne.",
      "Un autre, un matin qui est midi comme les autres, pose son sablier sur la table, à l'envers, et va s'asseoir sur le parvis, à côté d'une statue de sa mère. On le trouve gris le dimanche. Le Maître fait ôter son couvert. Ils sont trente-neuf.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fi_cuves: { act: "V", title: "La barre, au fond", place: "tour", ambiance: "chateau",
    text: [
      "Vous redescendez. La Chambre basse a ses douze cuves, et elles sont pleines : le gris y monte à vue d'œil, tiède, luisant, par les tuyaux de verre. Il déborde dans des jarres. On ne sait plus où le mettre.",
      "Au levier, l'homme de trente ans tient. Il a du sable ; on lui en donne. Il tient depuis le premier jour, les doigts au cuir, la barre au fond. On le relève, par quarts, avec un garde qu'on a éveillé pour cela. Il ne remonte jamais. Il a demandé une chaise.",
      "« Elle est faussée », dit-il, quand vous approchez. Il parle de la barre. « Quelque chose a cédé dessous, le jour de la vague. Elle ne remonterait plus, même si je lâchais. Je tiens pour la forme. » Il a un sourire, qui n'est plus tout à fait celui de l'autre. « On m'avait dit que nous avions gagné. Je regarde ce puits depuis des années. Il ne bouge pas. Je me demande ce que c'est, gagner, sur une chose qui ne bouge pas. »",
      { if: R, text: "Tu regardes le coin de bronze. Il est dans sa rainure, enfoncé jusqu'à la tête. Tu avais un chasse pour le faire sauter. Tu l'as encore, à la ceinture. Tu le présentes au petit bout, par-dessous, pour voir. Tu frappes. Rien ne répond : c'est comme frapper une montagne. Tu ranges l'outil." },
      { if: J, text: "Tu regardes le fil de laiton. Il pend de la voûte, mou, détendu. Il ne tirera plus sur rien. Là-haut, à trois cent soixante marches, une cloche de douze pieds a son marteau entré d'une ligne dans la lèvre, et elle y restera. Tu poses la main sur le fil. Il ne porte plus de note." },
      "Le Grand Maître est toujours là, gris, à sa place. On n'a pas osé le déplacer. Les acheteurs descendent le voir, quelquefois, comme on va voir un ours.",
      "Vous remontez. Vous savez à présent ce que vous étiez descendus vérifier : cela ne se défait pas.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fi_mer: { act: "V", title: "Des vagues debout", place: "basse", ambiance: "eau",
    text: [
      "Vous marchez jusqu'à la mer. Aucun de vous ne l'avait vue. Il y a dix jours de route, par le dehors des cercles, dans des pays que la vague a pris d'un seul coup, à midi, le même jour.",
      "C'est autre chose que la Dormante. La Dormante avait ses années, ses couches, comme un tronc. Ici, tout est du même instant. Des moissonneurs, la faux à mi-course, dans vingt lieues de blé. Une noce, sur une place, avec le violon levé. Un chien qui saute, et qui n'est pas retombé. Des oiseaux partout, posés sur l'air, à toutes les hauteurs.",
      "Port-Régent. La mer. Elle est verte, et elle ne bouge pas. Les vagues sont debout, avec leur crête, comme du verre soufflé. On peut marcher dessus, si l'on a du sable et qu'on ose : cela porte. Vous avancez de vingt pas sur l'eau, en vous tenant par la manche.",
      { if: R, text: "À l'entrée du port, il y a une galère du Levant, les rames levées. Tu montes à bord. Dans la cale, des balles d'écorce, par centaines : du fièvrier, pour les teinturiers et les apothicaires. Tu en ouvres une. Tu en as bu dix-neuf jours, à sept ans. Il y a là de quoi guérir un royaume, arrêté à une encablure du quai." },
      { if: J, text: "{autre} monte à bord d'une galère du Levant, arrêtée à l'entrée du port, les rames levées. {autre:Il} redescend avec une poignée d'écorce brune. « Du fièvrier. Y en a plein la cale. » {autre:Il} la regarde dans sa paume. « Y a une petite, dans une tour, qui attend ça depuis soixante ans. On pourrait le lui porter. Elle le boirait pas. »" },
      "Vous vous asseyez sur une vague. Le soleil est droit. Il n'y a pas de vent, pas de sel dans l'air : l'odeur de la mer est arrêtée avec elle. Vous vous étiez promis de la voir, un soir, par écrit, sur une borne. Vous la voyez.",
      "« C'est grand », dit l'un. L'autre ne répond pas. C'est grand, et cela ne fait aucun bruit.",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fir_roquebise: { act: "V", title: "Trois pincées par dimanche", place: "foire", ambiance: "ville",
    text: [
      "Tu vas à Roquebise. Tu as demandé au Maître ce qu'il t'avait promis. Il a tenu : *trois pincées par dimanche, et je vous en compterai quatre.* Il te les a versées lui-même, dans un cornet de papier, comme un apothicaire.",
      "La rue des Potiers. La troisième porte. Tu entres. La cuisine, le four, le tour. Ton père est au tour, de dos, les mains dans la terre : il sifflait. Ta mère est au feu. Tu passes entre eux. Tu ne les éveilles pas. Quatre pincées, c'est pour une seule personne, et tu as choisi depuis six ans.",
      "L'escalier. La marche qui craque ne craque pas. La chambre, sous le toit. Elle dort sur le côté, tournée vers la vitre, les cheveux en l'air, un oiseau de terre verte dans le poing.",
      "Tu t'assois au bord du lit. Tu poses un grain sur sa main.",
      "Elle achève son souffle. Elle ouvre les yeux. Elle te voit : quelqu'un de grand, de maigre, de sale. Elle n'a pas peur. « T'es le rêve », dit-elle. Tu étais déjà venu{e}, il y a des jours, dans une pincée. Elle s'en souvient comme d'un songe.",
      "« {hero} est rentré{e} des foins ? » Tu as quatre pincées. Tu ne les dépenses pas à expliquer. Tu dis : « Bientôt. » Tu siffles deux notes, une haute, une basse. Elle rit. Elle souffle dans son oiseau, pour répondre. Elle te demande si les rêves ont faim. Tu dis que non.",
      "Le quatrième grain baisse. Elle bâille. « Tu reviens ? — Dimanche. — C'est quand ? » Elle a refermé les yeux avant la réponse. Le gris la reprend comme elle était : tournée vers la vitre, au milieu d'un souffle.",
      "Tu restes là. Tu as ce que tu étais venu{e} chercher : elle t'a parlé. Tu l'auras tous les dimanches, quatre pincées, tant qu'il y aura quelqu'un pour te les compter.",
    ],
    choices: [{ label: "Redescendre l'escalier", fx: { flag: "r:i_dimanches" }, to: "Fir_dimanches" }] },

  Fir_dimanches: { act: "V", title: "Le rêve vieillit", place: "foire", ambiance: "ville",
    text: [
      "Tu reviens. Tous les dimanches. Il y a quatre jours de marche ; tu apprends à les faire en trois. Tu passes plus de temps sur cette route qu'à la table.",
      "Elle se réveille toujours au même souffle. Elle dit toujours : « T'es le rêve. » Puis elle se souvient des autres fois, à sa façon, comme on se souvient d'une histoire qu'on vous raconte par morceaux le soir. Elle te demande la suite. Tu lui racontes une ville, une cloche, une personne qui écrit en penché. Elle veut savoir comment cela finit. Tu dis que tu ne sais pas encore.",
      "Tu as dix-sept ans, dix-huit, vingt. Elle a cinq ans. Un dimanche, elle te regarde longtemps, et elle dit : « T'as changé. T'avais pas ça. » Elle touche ta joue, où il te vient de la barbe, ou une ride : le rêve vieillit. Elle trouve cela drôle. Puis elle trouve cela moins drôle. « Pourquoi moi je change pas ? »",
      "Tu n'as jamais menti à un dormant. Tu lui dis. Elle écoute, avec tout son front. « Alors c'est pas toi le rêve. C'est moi. » Elle a cinq ans, et elle a trouvé cela seule. Tu n'as pas assez de pincées pour la consoler : le grain finit.",
      "Le dimanche suivant, elle se réveille au même souffle. Elle dit : « T'es le rêve. » Elle a gardé l'histoire. Elle n'a pas gardé cela. Tu ne le lui redis pas.",
      "Un jour, tu demandes au Maître de quoi l'éveiller pour de bon : un sachet à son cou, renouvelé. Il te regarde, de ses yeux de deux couleurs. « Une enfant de cinq ans, éveillée, dans un monde où il n'y a pas un autre enfant. Qui ne grandira pas : le sable vous donne votre temps, il ne vous en fabrique pas. Vous voulez cela pour elle ? » Tu ne réponds pas. « Je vous le donnerais. Je vous connais : vous viendriez me le rendre au bout d'un mois. Gardez vos dimanches. C'est la dose. »",
    ],
    choices: [{ back: "Fi_monde" }] },

  Fij_noyers: { act: "V", title: "Un balancier arrêté à bout de course", place: "basse", ambiance: "champs",
    text: [
      "Tu vas aux Trois-Noyers. Quatre jours, par des cercles que tu avais traversés dans l'autre année, puis par un pays tout neuf dans le gris : la vague y est passée le matin même où l'on finissait de charger les matelas.",
      "Le village est sur la route, arrêté en file. Des charrettes, des cages à poules, un sergent qui recensait. Le père Lubin est sur son seuil : il avait refusé de partir. Il a eu raison. Il est le seul à être resté chez lui.",
      "L'atelier. La table, l'établi sous la fenêtre, les outils par taille. Ta paillasse, sous l'escalier, avec ton creux. Sur la table, une bobine de fil gris, et une aiguille piquée dedans.",
      "L'horloge de la cuisine est arrêtée, le balancier à bout de course, à gauche. Tu l'ouvres, par métier. Rien n'est cassé. Elle marcherait. Tu pousses le balancier du doigt : il va où tu le mènes, et il y reste. Il n'y a plus rien dans le monde pour le ramener.",
      "Tu es horloger. C'est tout ce que tu sais faire, et tu viens d'accepter une place à une table où ce métier n'a plus d'objet. Tu ranges tes brucelles. Tu les ranges à leur place, par taille, comme on te l'a appris.",
      { if: { has: "j:i_line_eveil" }, text: "Tu as dans ta poche une paire de lunettes pliées. Tu les poses sur l'établi, à l'endroit où elle les cherchait toujours. *Si un jour tu trouves comment défaire.* Tu regardes autour de toi. Il y a là quarante ans de cahiers, de calculs, de bornes grattées. Tu as mille ans. Tu t'assois à sa place. Tu ouvres le premier cahier." },
      { if: { not: { has: "j:i_line_eveil" } }, text: "Il y a là quarante ans de cahiers, de calculs, de bornes grattées. Elle avait compté quatre fins. Tu cherches, dans les marges, si elle en avait vu une cinquième. Tu as mille ans pour lire." },
    ],
    choices: [{ back: "Fi_monde" }] },

  Fi_annees: { act: "V", title: "Midi, la vingtième année", backName: "la table", place: "tour", ambiance: "chateau", charniere: true, aparte: true,
    text: [
      { first: true, text: "Les années viennent, pour ceux qui ont du sable. On les compte par dimanches, puisqu'il n'y a plus de saisons : cinquante-deux versements à la cuve, et l'on dit *un an.*" },
      { first: true, text: "Vous avez vingt ans, puis trente. Vous vieillissez : le sable vous donne votre temps, et le temps fait ce qu'il fait. Les quarante, eux, se dosent large, et ne bougent plus. Ils sont trente-six. Chaque année, un ou deux posent leur sablier à l'envers." },
      { first: true, if: J, text: "Tu as lu tous les cahiers de Line. Tu as refait ses calculs. Tu as trouvé une erreur, à la page d'un hiver de 580, et tu as eu envie de la lui dire. {autre} fait la route de Roquebise, tous les dimanches, et rentre le mardi avec une figure que tu as appris à ne pas questionner." },
      { first: true, if: R, text: "Tu fais la route de Roquebise. {autre} lit des cahiers, aux Trois-Noyers, et revient avec de l'encre aux doigts et des chiffres plein la tête. Vous vous retrouvez à la table, le dimanche, devant deux sabliers d'étain. Vous vous parlez moins qu'aux bornes. Il n'y a plus de bornes : il n'y a plus de distance." },
      { first: true, text: "Le Maître des Sables a cessé de se doser. Vous êtes les seuls à l'avoir remarqué. Il a quatre-vingt-dix ans, et il les prend enfin, par petites touches, comme on se laisse glisser d'une chaise." },
      { first: true, text: "« J'ai ce que je voulais, vous dit-il un dimanche, quand les autres sont sortis. Un monde où rien ne s'abîme, et mille ans de quoi le regarder. » Il tourne son sablier d'or. « Je vous ai voulus à cette table pour une raison que je ne vous ai pas dite. Ces gens-là m'ont acheté. Ils ne m'ont jamais regardé. Vous deux, vous m'aviez regardé en face, dans une cave, avec le pouvoir de me défaire. Il me fallait quelqu'un qui sût ce que j'avais fait, pour que cela fût fait. »" },
      { first: true, text: "Il vous considère. « Je vois que cela ne vous suffit pas. Cela ne me suffit pas non plus. C'est une découverte tardive, et je vous la donne pour ce qu'elle vaut : on ne tient pas une chose pour l'avoir. On la tient pour ne pas la rendre. Une fois qu'il n'y a plus personne à qui la rendre, on a les mains pleines, et rien dedans. »" },
      { again: true, text: "La table en fer à cheval. Trente-six sabliers d'or. Deux d'étain." },
    ],
    choices: [{ label: "Le dimanche suivant", to: "Fi_choix", big: true }] },

  Fi_choix: { act: "V", title: "Le sablier à l'envers", backName: "la cuve", place: "tour", ambiance: "chateau", charniere: true, aparte: true,
    text: [
      { first: true, text: "Le dimanche suivant, il n'est pas à la cuve. On le trouve sur son berceau, dans la Chambre basse, les deux mains sur sa canne, gris. Son sablier d'or est posé à côté de lui, à l'envers, vide." },
      { first: true, text: "Il a laissé un mot, de son écriture exacte, sur le rebord de la première cuve. *La cuve est à qui sait compter. Je l'ai tenue soixante ans, et j'en sors par la porte que j'avais gardée pour les autres. M. A.* Et dessous, plus petit : *Aux deux couverts d'étain : vous savez où est la clef.*" },
      { first: true, text: "Les trente-six se regardent. Ils ont payé pour être servis ; aucun n'a jamais puisé. Ils se tournent vers vous. Vous êtes les seuls, à cette table, à savoir ce que pèse une pincée." },
      { first: true, if: R, text: "Tu regardes les douze cuves. Il y a là de quoi tenir mille ans à trente-huit. Ou de quoi faire autre chose. Tu as passé six ans à compter du sable grain par grain ; tu n'en avais jamais vu autant, et jamais sans maître." },
      { first: true, if: J, text: "{autre} regarde les douze cuves, avec les yeux de quelqu'un qui a compté du sable grain par grain pendant six ans. « Y a de quoi tenir mille ans à trente-huit, dit-{autre:il}. Ou de quoi faire autre chose. »" },
      { first: true, text: "Vous en parlez, à deux, comme vous auriez dû le faire au pied de quatre-vingts marches. On peut rester. Tenir la cuve, servir la table, et vivre : il y a un monde entier à regarder, et vous êtes deux. On peut poser son sablier à l'envers, chacun près des siens : une chaise sur un parvis, un lit sous un toit. Ou l'on peut ouvrir les cuves, toutes, et faire une chose que le Maître n'a jamais faite : donner. Il n'y a pas de quoi rendre le monde. Il y a de quoi donner un dimanche à beaucoup de gens." },
      { again: true, text: "La Chambre basse. Douze cuves pleines, et un vieil homme gris, sur son berceau." },
    ],
    choices: [
      { label: "Vous deux : rester. Tenir la cuve, et regarder le monde, à deux.", monde: "table", option: "rester", fx: { flag: "monde:i_rester" }, to: "Fi_fin_table" },
      { label: "Vous deux : poser le sablier à l'envers, chacun près des siens.", monde: "table", option: "gris", fx: { flag: "monde:i_gris" }, to: "Fi_fin_gris" },
      { label: "Vous deux : ouvrir les cuves. Un dimanche pour tous ceux qu'on pourra.", monde: "table", option: "dimanche", fx: { flag: "monde:i_dimanche" }, to: "Fi_dimanche" },
    ] },

  Fi_fin_table: { act: "V", title: "À ce qui dure", end: true, epilogue: true, fx: { flag: "fin:immobile" },
    text: [
      "Vous restez. Vous tenez la cuve. Vous versez, le dimanche, d'une main qui sait : ni trop, ni trop peu. Les trente-six vous appellent *Maîtres*, d'abord par dérision, puis par habitude.",
      "Vous changez la règle. Plus de robes de bal sur les porteuses d'eau. Plus de tabatières. On remet les choses dans les poches. Ceux à qui cela déplaît peuvent poser leur sablier : il y en a.",
      { if: R, text: "Tu fais ta route, le dimanche. Elle se réveille au même souffle. Elle dit : « T'es le rêve. » Tu as trente ans, quarante. Elle te demande la suite de l'histoire, et tu la lui inventes, à présent, parce que la vraie n'en a plus." },
      { if: J, text: "Tu lis. Tu as rapporté les cahiers de Line à la Tour, et tu les continues, de ton écriture penchée, sur ses marges. Tu cherches une cinquième fin. Tu as des siècles. Tu ne l'as pas trouvée ; tu n'as pas trouvé non plus la preuve qu'il n'y en ait pas." },
      "Vous marchez. Vous voyez le monde : les montagnes, les villes du Levant, des déserts où le vent a laissé le sable en l'air. Partout il est midi. Partout il y a des gens au milieu d'un geste, et vous apprenez à ne plus les compter.",
      "On s'y fait. C'est ce qu'il y a de plus terrible à en dire, et c'est vrai : on s'y fait. Il y a des jours où vous riez. Il y a un soir, qui est midi, où vous vous asseyez sur une vague, à Port-Régent, et où l'un de vous dit que c'est beau.",
      "Vous avez une table, du sable pour mille ans, et quelqu'un qui sait d'où vous venez. Vous avez tout ce qu'un vieil homme avait voulu, avec une chose de plus, qu'il n'avait pas : vous êtes deux à savoir ce que cela a coûté.",
      "Le dimanche, vous levez vos sabliers d'étain. Vous ne dites pas *à ce qui dure.* Vous ne dites rien. Vous buvez à ceux qui sont dehors, la bouche ouverte sur un mot, et qui ne sauront jamais lequel vous avez gardé.",
    ] },

  Fi_fin_gris: { act: "V", title: "Près des siens", end: true, epilogue: true, fx: { flag: "fin:immobile" },
    text: [
      "Vous remontez de la cave. Vous laissez les cuves aux trente-six, qui se battront pour elles. Cela ne vous regarde plus.",
      "Vous vous dites adieu sur le parvis, au pied de la Tour. Il n'y a pas de quoi faire de phrases : vous avez eu vingt ans pour les faire. Vous vous tenez un moment par les avant-bras, comme on fait dans la glane avant de passer une lisière.",
      { if: J, text: "Tu n'as que quarante pas à faire. La chaise de Line. Tu t'assois par terre, à côté, le dos contre le pied de bois, tourné du côté où elle regarde. Tu poses ton sablier d'étain sur le pavé, à l'envers." },
      { if: { all: [J, { has: "j:i_line_eveil" }] }, text: "Tu as ses lunettes dans ta poche. Tu les lui remets, sur le front, où elles ne servent à rien. Elle t'avait dit : *si tu trouves comment défaire, viens me le dire.* Tu n'as pas trouvé. Tu viens lui dire cela aussi, de la seule façon qui reste." },
      { if: J, text: "Cela prend un moment. Les doigts, d'abord. Tu regardes {autre} s'éloigner vers la porte d'Occident, de son pas qui n'appuie pas. {autre:Il} ne se retourne pas : c'est la règle, quand on sort. Tu {autre:le} suis des yeux tant que tes yeux te suivent." },
      { if: R, text: "Tu as quatre jours de route. Tu les fais une dernière fois, sans te presser. Roquebise. La troisième porte. Tu passes entre ton père et ta mère. Tu montes. La marche ne craque pas." },
      { if: R, text: "Elle dort, tournée vers la vitre. Tu ne l'éveilles pas : tu n'as plus de quoi lui dire *dimanche.* Tu t'allonges par terre, au pied du lit, comme tu faisais à dix ans quand elle avait peur de l'orage. Tu poses ton sablier d'étain sur le plancher, à l'envers." },
      { if: R, text: "Cela prend un moment. Tu lèves la main, et tu trouves la sienne, qui pend hors du drap, avec l'oiseau de terre. Tu la tiens. Tu siffles deux notes, une haute, une basse, pour personne. Tu as vingt ans de plus qu'elle, ce matin, et bientôt tu ne les auras plus : vous aurez le même âge, qui est aucun." },
      "Il y a un dormant de plus sur un parvis, assis contre une chaise. Il y en a un de plus dans une chambre, sous un toit, la main levée. Ils ont la bouche fermée.",
      "Le soleil est droit. Un homme de cuivre traverse la place, de son pas égal, et sonne midi.",
    ] },

  Fi_dimanche: { act: "V", title: "Ouvrir les cuves", place: "tour", ambiance: "chateau", charniere: true, backName: "les cuves",
    text: [
      { first: true, text: "Vous le dites aux trente-six. Ils crient. Ils ont payé des forêts. Vous leur montrez la cuve, et qui tient la louche." },
      { first: true, if: R, text: "« J'ai été chassé{e} de vos fossés, dis-tu. Tous. Pendant six ans. Vous aviez des gardes. Y en a plus. » Tu n'as pas besoin d'en dire davantage. Ils regardent tes mains. Ils ont l'âge de savoir compter un rapport de forces, même à trente-six contre deux, quand les deux sont les seuls à savoir puiser." },
      { first: true, if: J, text: "« On m'a chassé{autre:e} de vos fossés pendant six ans, dit {autre}. Vous aviez des gardes. Y en a plus. » Ils regardent ses mains. Ils ont l'âge de savoir compter un rapport de forces." },
      { first: true, text: "Vous faites le compte, à la craie, sur le pavé de la cave. Douze cuves. Une pincée éveille quelqu'un le temps de quelques phrases ; cent, le temps d'une après-dînée. On ne rendra pas le monde. On peut donner un dimanche à une rue. À deux villages. À un parvis." },
      { first: true, text: "Il faut choisir qui. C'est la chose que vous aviez fuie, au pied des marches : choisir pour d'autres. Elle vous a rattrapés, vingt ans après, sous une forme plus petite. Vous la prenez." },
      { first: true, text: "Roquebise, la rue des Potiers. Les Trois-Noyers, arrêtés en file sur la route. Et le parvis, autant qu'il en tiendra : une vieille sur une chaise, des mantes bleues, un garçon avec une pique, un roux de quatorze ans. Vous remplissez des sacs. Vous réveillez un mulet, pour porter : c'est le premier être que vous éveillez pour de bon, et il brait de scandale." },
      { again: true, text: "Les cuves, ouvertes. Des sacs de sable, sur le pavé." },
    ],
    choices: [{ label: "Un dimanche", to: "Fi_fin_dimanche", big: true }] },

  Fi_fin_dimanche: { act: "V", title: "Un dimanche", end: true, epilogue: true, fx: { flag: "fin:immobile" },
    text: [
      "Cela prend des semaines à préparer, et une matinée à faire. Vous passez de l'un à l'autre, un sac à l'épaule, une poignée sur chaque main. Derrière vous, les gens respirent.",
      { if: R, text: "Roquebise s'éveille. Les fours sont froids ; on y court. Ton père cesse de siffler, regarde ses mains, regarde la porte. Ta mère te voit : quelqu'un de trente-six ans, dans sa cuisine, avec la bouche de son enfant. Elle lâche la cuiller. Tu n'expliques pas tout. Tu dis qu'on a un jour. Un seul. Qu'il faut le prendre." },
      { if: R, text: "Lison descend l'escalier. Elle te regarde. Elle ne dit pas *t'es le rêve.* Elle voit ses parents debout, le feu qu'on rallume, la rue pleine de voix. « C'est pour de vrai ? — Jusqu'à ce soir. » Elle ne demande pas ce qu'il y a après. Elle a cinq ans, et un jour, pour elle, c'est toute la longueur qui existe. Elle te prend par le pouce. Elle t'emmène voir ses poules." },
      { if: J, text: "Les Trois-Noyers s'éveillent en file, sur la route, au milieu d'un départ. On se retourne. On voit qu'il n'y a plus de lisière : il n'y a plus que du gris, partout, sauf autour de soi. Tu montes sur une charrette. Tu dis qu'on a un jour. Le père Lubin, de son seuil, crie qu'il l'avait bien dit, sans savoir quoi." },
      { if: J, text: "Sur le parvis, tu gardes Line pour la fin. Elle ouvre les yeux. Elle voit des mantes bleues qui remuent, un garçon roux qui court, des gens qui s'embrassent. Elle te regarde. Tu as trente-six ans. « Tu as trouvé ? — Non. J'ai trouvé un jour. » Elle considère cela, longtemps, pour une pincée. « C'est mal réglé, dit-elle. Ça avance, puis ça s'arrête. » Elle tousse. « Mais ça sonne. Aide-moi à me lever. Je veux aller jusqu'à cette borne, rue aux Oies. J'ai quelqu'un à voir de près. »" },
      "C'est un dimanche. Le soleil ne bouge pas, et pourtant on jurerait qu'il y a une après-midi : cela tient aux voix. On mange du pain d'il y a vingt ans, qui est chaud. On danse, à Roquebise, sur les tessons. Un Veilleur retrouve une sœur. Une vieille, sur le parvis, marche cent pas au bras de quelqu'un, et s'arrête devant un homme en blouse neuve.",
      "Les trente-six regardent cela des fenêtres du Palais. Quelques-uns descendent. Un gros homme rend trois cents tabatières, une par une, en demandant pardon à des gens qui ne comprennent pas pourquoi.",
      "Vous ne gardez rien pour vous. Vous l'aviez décidé à la craie. Quand les cuves sont vides, vous allez chacun où vous devez être, et vous regardez le dernier grain de vos sabliers d'étain.",
      { if: R, text: "Lison s'est endormie sur tes genoux, d'un vrai sommeil, celui d'une enfant qui a couru tout le jour. Le gris viendra sur ce sommeil-là. Elle aura eu un dimanche entier, et elle l'emporte. Tu poses ta main sur ses cheveux. Tu attends avec elle." },
      { if: J, text: "Line s'est assise sur la borne, à côté de son père, qui a remis son chapeau. Ils ne se sont presque rien dit. Elle t'a fait signe de t'asseoir de l'autre côté. Tu t'assois. Elle regarde la place, où l'on danse encore. « Tu as mis le temps », dit-elle. Et elle te prend le poignet, pour une fois, sans le tirer à droite." },
      "Le monde est immobile. Il l'était, et il le reste. Mais il y a dedans, à présent, quelques milliers de gens qui ont été pris au milieu d'un rire.",
    ] },
});

module.exports = { passages: P, extras: {} };
