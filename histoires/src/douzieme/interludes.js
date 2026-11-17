// Le Douzième Coup · interludes : a scene told from someone else's point of view, played before the first page of
// acts II to V, a different one for each role, with variants (first matching condition wins). No act, no place, no hub.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };

Object.assign(P, {
  // ============================================================ act II
  I2j_line: { title: "Une mesure sur quatre", interlude: { who: "line", where: "Les Trois-Noyers, la nuit de ton départ" }, back: true,
    text: [
      "La grange est vide. Line ramasse la lanterne. Dans le mur du fond, le cadre de pierre est redevenu ce qu'il était pour son grand-père : deux montants, un linteau, des clous à faux.",
      "Elle y pose la main, à plat. La pierre est tiède, à hauteur d'épaule, sur la largeur d'un corps. Elle retire sa main avant que cela refroidisse : elle a horreur de constater.",
      "Elle rentre à l'atelier, à petits pas, en s'arrêtant deux fois pour le souffle. Elle s'assoit à l'établi. Elle ouvre le tiroir du bas, où sont les sabliers de réserve. Il y en avait quatre. Il y en a un, et il est vide.",
      "« Un passage, dit-elle tout haut, à personne. J'avais dit deux et un retour. » Elle referme le tiroir. Elle a fait ses comptes cet hiver, le lendemain du vol, et elle les a refaits chaque soir depuis, dans l'espoir d'une erreur. Elle compte juste : c'est son infirmité.",
      "Elle prend l'autre Cahier, celui qui reste. Elle l'ouvre. La page est blanche. Elle le sait : il faut une borne, et que les deux soient ouverts. Elle regarde la page quand même, longtemps, comme on regarde une fenêtre où quelqu'un doit paraître.",
      "On frappe. Ce sont des coups de gantelet, espacés, administratifs. Elle remonte ses lunettes sur son front. Elle range le Cahier sous une pile de chiffons à huile, d'un geste qui a soixante ans d'avance.",
      "« Entrez, capitaine. C'est ouvert. Je n'ai jamais rien eu qui vaille une serrure. » Elle se met à tousser avant qu'il ait passé le seuil. Elle tousse bien : elle n'a pas à forcer. Un homme botté hésite toujours devant une vieille qui tousse, et c'est autant de pris sur la nuit.",
    ] },

  I2r_petite: { title: "Tombé du grenier", interlude: { who: "Line Noyer, neuf ans", where: "La ferme des Noyers, un matin de juin 541" }, back: true,
    text: [
      "Line Noyer a neuf ans, deux nattes, et une boîte de fer où elle range ce qui mérite d'être gardé. Ce matin, elle y a mis une vis de charrue. Elle va à la grange chercher s'il y en a d'autres.",
      "Il y a quelqu'un dans le foin. Quelqu'un d'à peu près seize ans, à plat ventre, avec de la paille plein les cheveux, des souliers comme on n'en fait pas, et l'air de tomber d'un grenier. Or la grange n'a pas de grenier.",
      "Line ne crie pas. On ne crie pas, aux Trois-Noyers. Elle s'accroupit, à trois pas, sa boîte sur les genoux, et elle regarde. Elle regarde les mains : il y a de la limaille sous les ongles. Elle regarde ce qui dépasse de la chemise : un cahier de toile, cousu d'un fil qui accroche le jour.",
      "La personne ouvre les yeux. Elle voit Line. Elle fait une figure extraordinaire : celle de quelqu'un qui reconnaît, et qui ne devrait pas. Line n'a jamais vu cette figure sur personne. Elle la range.",
      "« T'es qui ? » La personne dit un nom. « T'es d'où ? » La personne dit : de loin. Line considère cette réponse. Elle est fausse, et elle n'est pas un mensonge. Ce sont les plus intéressantes.",
      "« T'as faim ? » Oui. Line se lève. Elle va chercher du pain, sans rien dire à sa mère, parce que sa mère poserait de mauvaises questions. Sur le seuil de la grange, elle se retourne. La personne s'est mise debout, et elle touche le mur du fond, là où le grand-père accroche ses faux, comme on tâte une porte.",
      "« C'est un mur », dit Line. La personne dit qu'elle sait. Line hoche la tête. Elle a décidé, entre le seuil et le foin, que ceci était à elle : comme la vis, comme la boîte. Elle ne sait pas encore pour combien de temps. Elle a toujours eu de la suite dans les idées.",
    ] },

  I2r_brassac: { title: "Renseignement exact", interlude: { who: "brassac", where: "La Ferme-Vieille, cette nuit" }, back: true,
    text: [
      "Le capitaine Brassac arrive à la Ferme-Vieille avec vingt hommes, des lanternes sourdes, et dans la doublure de sa casaque un carnet où il a noté : *cinq écus au sablier. La Ferme-Vieille, cette nuit.*",
      "Il a payé. Il paie toujours. C'est ce que ses hommes ne comprennent pas : on n'obtient rien de ces gens-là par le plat du sabre, qu'ils connaissent mieux que leur mère. On obtient tout pour le prix d'une paire de sabots. Et ensuite ils vous regardent comme si vous les aviez volés.",
      "Celui-là, ou celle-là, a ramassé les pièces sans les compter. Brassac a noté cela aussi. Quelqu'un qui ne compte pas cinq écus a autre chose en tête, et il n'aime pas ne pas savoir quoi.",
      "La lisière est à trente pas de la cour. Elle luit, par en dessous, sans source. Les hommes n'aiment pas cela. Ils ont du sable au cou, pesé de la main du Maître ; ils savent ce qu'il vaut, et ce qui arrive quand il n'y en a plus.",
      "La grange. La porte bat. Brassac entre le premier, la lanterne haute. Du foin, des faux, une odeur de bête partie depuis le printemps. Dans le mur du fond, un cadre de pierre, plus vieux que la ferme. Il pose le gantelet dessus.",
      "La pierre est tiède, à hauteur d'épaule, sur la largeur d'un corps.",
      "Il ôte son gant. Il met la paume nue. Il compte, comme on compte après un coup de canon, pour savoir à quelle distance. La chaleur s'en va sous sa main. Une heure. Moins.",
      "Il ressort. Il écrit, debout, à la lanterne : *Renseignement exact. Trop tard d'une heure. Quelqu'un est passé.* Il souligne *quelqu'un.* Puis il regarde vers le village, où une seule fenêtre est éclairée, celle d'une horlogère. « Chez la vieille, dit-il. Et qu'on me retrouve qui m'a vendu cela. Je veux savoir si l'on m'a vendu l'heure aussi. »",
    ] },

  // ============================================================ act III
  I3j_aubespin: { title: "Pour un an", interlude: { who: "aubespin", where: "La colline des Jurés, quatre jours avant le Grand Midi" }, back: true,
    text: [
      "Le sous-maître Melchior Aubespin a trente ans, de belles mains, et un œil de chaque couleur, ce qui fait dire aux apprentis qu'il regarde deux choses à la fois. Ils ont raison.",
      "Il est à son établi, à la chandelle, devant un carton déroulé. On y voit une chambre, en coupe : la Chambre haute de la Tour. Un lit d'enfant. Un fil de laiton, qui descend. Tout en bas, un levier. C'est un beau dessin. Il l'a refait onze fois.",
      "Une chambre. Un an. La Reine le lui a demandé à genoux, ou peu s'en faut, et le Grand Maître a refusé en citant le Livre, les talons joints. Aubespin n'a pas cité le Livre. Il a dit : *cela se peut.* Il a vu la figure de cette femme changer. Il y pense souvent, à cette figure. C'est la première fois qu'on le regardait comme on regarde le Grand Maître.",
      "Il y a un second carton, sous le premier. Il le sort quand la porte est fermée. Douze berceaux de chêne, autour du puits. Douze cuves. Un Balancier qu'on tient sue à sa lisière, comme un front : les Fondateurs le savaient, et ils en ont fait un chapitre d'interdits. Aubespin en a fait un devis. La lettre pour les verriers de Roquebise est écrite. Elle n'est pas partie.",
      "On gratte à la porte. C'est un homme à la livrée de Hautgué, avec une bourse et un sourire. Il pose la bourse sur le premier carton, sur le lit de l'enfant. « Monseigneur le duc s'intéresse à vos travaux. Il se demande si la chambre pourrait être un peu plus grande. Et le délai un peu moins sûr. »",
      "Aubespin regarde la bourse. Il regarde le carton, dessous. Il pourrait dire non. Il se voit le dire : il a de l'imagination. Puis il pense à douze cuves, à un an de rosée, à ce qu'un homme de trente ans ferait d'un an de temps en plus, sans le prendre à personne.",
      "« Un peu plus grande, dit-il. Cela se peut. » Il écarte la bourse du lit de l'enfant, par propreté, et la pose à côté. Il se dit que c'est pour un an. Il se le dit avec la netteté des gens qui ont un œil pour chaque chose.",
    ] },

  I3j_hotte: { title: "Entre deux piles d'almanachs", interlude: { who: "Line Noyer, neuf ans", where: "La porte d'Occident, dans une hotte" }, back: true,
    text: [
      "Line Noyer est dans la hotte. Elle y est depuis l'aube, entre la pile des almanachs de l'année et celle des complaintes, les genoux au menton, sa boîte de fer sur le ventre. Perrine marche bien : on est à peine secoué.",
      "Elle a décidé cela seule. On lui avait dit de rester à la ferme. On lui avait dit qu'elle viendrait à la foire avec son père, dans quatre jours, comme tout le monde. Mais la personne tombée du grenier allait à la ville *maintenant*, pour une chose qu'elle ne disait pas, et Line ne laisse pas partir ce qui est à elle sans savoir où.",
      "Par les trous de l'osier, elle voit. Elle voit des morceaux : une roue, un chien, le bas d'une robe. Puis une ombre, froide, qui passe sur la hotte tout entière. C'est la porte. Un garde demande ce qu'il y a là-dedans. « Du papier », dit Perrine. « Ça pèse, ton papier. — C'est qu'il y a des choses écrites dessus. »",
      "On passe. Line respire. Elle colle l'œil à un trou plus large.",
      "La ville. Il y en a trop. Des maisons les unes sur les autres, des enseignes, des gens qui ne se disent pas bonjour. Et des horloges : une à chaque carrefour, sur des potences de fer. Line les regarde passer. Celle-ci marque dix heures. Celle-là, dix heures et un quart. La troisième n'a qu'une aiguille.",
      "Elle est indignée. Aux Trois-Noyers, il y a une horloge, celle du curé, et elle est fausse, mais au moins elle est seule. Ici, on en a cent, et aucune ne dit la même chose. Elle se demande qui s'en occupe. Elle se dit que quelqu'un devrait.",
      "Tout en haut, par le trou, entre deux toits, il y a une Tour, avec un cadran grand comme une aire à battre. Line la regarde longtemps. Elle ne sait pas pourquoi elle a froid, dans une hotte, au mois de juin. Elle serre sa boîte. Elle y rangera cela ce soir : le jour où elle a vu la Tour pour la première fois, par un trou.",
    ] },

  I3r_regente: { title: "Le soixantième", interlude: { who: "odeline", where: "La route du Serment, quatre jours avant le Grand Midi" }, back: true,
    text: [
      "La Régente Odeline a vingt-huit ans, et elle va jurer pour la dixième fois. La berline roule sur la route royale, entre deux haies de manteaux blancs. Elle a le rouleau sur les genoux. Elle le sait par cœur. Elle le relit.",
      "*Je jure de rendre ce royaume à la Reine, le jour de son réveil.* Son grand-père l'a juré vingt fois. Son père, trente. Elle a appris à lire là-dessus. Enfant, elle demandait : *et si elle se réveille ?* On riait. Elle a cessé de demander. Elle n'a pas cessé d'y penser.",
      "En face d'elle, sur la banquette, il y a un coffret de vermeil. Dedans, un sablier d'or, pas plus gros qu'un dé. Le Maître des Sables le lui fait porter chaque matin, depuis ses vingt ans, avec ses hommages. Une pincée. Elle la prend. Elle a vingt-huit ans, et un visage de vingt : toute la cour le lui dit, et elle a fini par trouver cela naturel, comme d'avoir des gardes.",
      "Par la portière, elle voit la lisière. Elle est plus près que l'an dernier. Il y avait là un moulin. Il n'y a plus de moulin : il y a du gris, et dedans la forme d'un moulin.",
      "Au bord du fossé, des hommes en casaque noire courent après quelque chose. C'est petit, maigre, pieds nus. Cela saute une haie comme un lièvre. Un noir lance le plat de sa hallebarde.",
      "« Qu'est-ce que c'est ? » Le lieutenant de Courtenvaux se penche. « Des glaneurs, Madame. Des pillards. Ils entrent chez les dormants, et ils leur font les poches. — Celui-là a quel âge ? — L'âge de courir, Madame. »",
      "Elle regarde la chose maigre disparaître dans un champ. Elle regarde le coffret de vermeil. Il lui vient une question, qu'elle ne pose pas, parce qu'elle a appris à ne plus poser celles dont on rit : d'où vient ce qu'il y a dans ce sablier, et qui le ramasse.",
      "Elle referme le rouleau. Elle jurera dans quatre jours, devant une reine qui dort. Elle se demande, pour la première fois depuis l'enfance, ce qu'elle ferait si cette femme ouvrait les yeux. Elle s'aperçoit qu'elle le sait, et que cela ne plairait à personne dans cette voiture.",
    ] },

  I3r_lison: { title: "Le rêve", interlude: { who: "Lison, cinq ans", where: "Roquebise, sous le toit, au milieu d'un souffle" }, back: true,
    text: [
      "Lison dort. Elle dort depuis que le père a soufflé la veilleuse, et que {hero} n'est pas rentré{e} des foins. Elle respire. Elle est au milieu de respirer.",
      "C'est long, ce milieu. Elle ne sait pas que c'est long. Il n'y a personne dedans pour le lui dire. Il y a le noir de derrière les yeux, et quelquefois une couleur, qui passe.",
      "Puis il y a le rêve.",
      "Quelqu'un est assis au bord du lit. Quelqu'un de grand, de maigre, de sale, qui sent le dehors. Elle n'a pas peur : dans les rêves, on connaît les gens. Celui-ci a la bouche de {hero}, mais {hero} est petit{e}, et celui-ci tient à peine sous le toit.",
      "Le rêve lui parle. Il a une voix qui gratte. Il dit des choses de grand : *bientôt, je reviens, dors.* Il lui met dans la main quelque chose de froid et de rond, avec un bec. Elle serre. Elle sait ce que c'est sans regarder : c'est l'oiseau du père, celui qui siffle, et que {hero} ne prête jamais.",
      "Elle veut demander pourquoi le rêve a l'oiseau de {hero}. Elle ouvre la bouche. Elle a le temps de dire trois mots, peut-être quatre. Puis le noir de derrière les yeux revient, tout doucement, par les bords, comme l'eau dans une trace de pas.",
      "Elle respire. Elle est au milieu de respirer. Mais elle a quelque chose dans le poing, à présent, qui n'y était pas. Les rêves ne laissent rien, d'ordinaire. Celui-là a laissé un oiseau. Elle le dira à {hero} demain, quand {hero} rentrera des foins.",
    ] },

  // ============================================================ act IV
  I4j_coudrier: { title: "À qui ouvrira ce cabinet", interlude: { who: "coudrier", where: "La colline des Jurés, la veille du Grand Midi" }, back: true,
    text: [
      "Maître Barnabé Coudrier a soixante-dix ans, une moustache, et l'habitude de joindre les talons, même assis. Il est à son pupitre. La chandelle a un doigt. Il écrit.",
      "Il a perdu, aujourd'hui. Il le sait. Il a parlé une heure devant les Jurés, le Livre ouvert, et il a vu sept figures se fermer l'une après l'autre : la Reine pleure, le duc paie, et le sous-maître dit *cela se peut.* On ne tient pas contre *cela se peut* avec un chapitre d'interdits.",
      "Demain, à midi, on tiendra le Balancier. On le tiendra *un peu*, *pour un an*, *dans une chambre.* Coudrier a lu tout ce que les Fondateurs ont écrit, et il n'y a pas trouvé une seule chose qu'on tienne un peu.",
      "Il écrit donc. À personne : à qui ouvrira ce cabinet, quand il n'y sera plus. Il ne sait pas quand ce sera. Il écrit ce qu'il a dit, ce qu'on lui a répondu, et ce qu'il compte faire demain, seul, à l'heure où la ville regardera la cloche. Il y a un escalier, sous la Tour. Il en a la clef.",
      "*Je n'ai pas voulu ce qu'on dira que j'ai voulu.* Il relit la phrase. Elle est gauche. Il la laisse : il n'a jamais su se plaindre, et ce n'est pas à son âge qu'on apprend.",
      "Il sable. Il plie. Il cherche où la mettre. Un tiroir se force ; un livre se feuillette. Il regarde la serrure de son cabinet, qui est de sa main, à combinaison, et que deux personnes au monde savent ouvrir. Il se lève. Il glisse la lettre derrière la platine, dans le mécanisme même, où il faudrait être horloger, ou voleur, pour la trouver.",
      "Il se rassoit. Il regarde le dernier chapitre du Livre : un titre, et une page blanche. On le lui a assez reproché. Il trempe sa plume. Il la tient au-dessus du blanc, longtemps. Puis il la repose. Il n'a rien à y mettre qu'il sache. Il descendra demain apprendre ce qu'il aurait fallu écrire.",
    ] },

  I4j_josquin: { title: "Le second", interlude: { who: "josquin", where: "La colline des Jurés, la veille du Grand Midi" }, back: true,
    text: [
      "Josquin a seize ans, et il a été second. Il le sera toute sa vie, d'une façon ou d'une autre : il s'en doute depuis ce matin, où un nom a été crié sur l'estrade des apprentis, qui n'était pas le sien, et qui n'était celui de personne d'ici.",
      "Il est dans le couloir, devant le cabinet du maître. La porte est fermée. Il y a de la lumière dessous. Il attend qu'on l'appelle, un plateau à la main, avec une tisane qui refroidit.",
      "Il en veut à quelqu'un. Il cherche à qui. À cette personne qui lime d'une manière qu'on n'enseigne pas ici, avec un tour de poignet à droite, et qui a gagné sans avoir l'air de savoir que c'était un concours. Il ne peut pas lui en vouloir : il a regardé la pièce. Elle était meilleure. Josquin est honnête, et cela lui gâche jusqu'à ses rancunes.",
      "Il en veut donc au maître, qui a dit seulement : *c'est bien jugé.* Et qui, ce soir, après le Conseil, est rentré sans un mot, s'est enfermé, et écrit. Le maître n'écrit jamais le soir. Le maître dit que ce qu'on écrit à la chandelle, on le rature au jour.",
      "La porte s'ouvre. Le Grand Maître est sur le seuil, très droit, les talons joints. Il prend la tisane. Il ne la boit pas. « Demain, Josquin, vous ferez ce que je vous dirai, sans demander pourquoi. Vous aurez de la cire. Vous vous en mettrez dans les oreilles, à onze heures, et vous ne l'ôterez sous aucun prétexte. »",
      "« De la cire, maître ? — Vous avez demandé pourquoi. » Josquin se tait. Le vieillard le regarde, et il se passe sur sa figure une chose que Josquin n'y avait jamais vue : il hésite. « Vous êtes le meilleur apprenti que j'aie eu. Je ne vous l'ai pas dit ce matin, parce que ce n'était pas vrai ce matin : il y en avait un autre. C'est vrai ce soir, pour une raison que vous comprendrez plus tard. Allez dormir. »",
      "Josquin s'en va, avec son plateau vide. Il ne comprend pas. Il a seulement compris que le maître a peur, et qu'il vient de lui dire adieu d'une façon que personne d'autre n'aurait reconnue.",
    ] },

  I4r_vieux: { title: "Onze jarres", interlude: { who: "aubespin_vieux", where: "Rue du Cadran, la veille du soixantième Grand Midi" }, back: true,
    text: [
      "Le Maître des Sables a quatre-vingt-dix ans. Il en paraît quarante-cinq. Il se fait passer pour son propre fils depuis si longtemps qu'il lui arrive, en signant, de se demander lequel des deux tient la plume.",
      "Il est dans la resserre de la rue du Cadran, une lampe à la main. Onze jarres de verre vert, pleines jusqu'au col. Il les compte. Il les a comptées ce matin. Il les recomptera demain à l'aube : c'est un plaisir qui ne s'use pas.",
      "Onze jarres, c'est vingt ans pour un homme seul. Ce n'est rien. Demain, à midi, le puits cédera : il l'a calculé à une heure près, sur soixante ans de registres. La vague prendra tout. Et un puits tenu au fond, pour toujours, sue pour toujours. Il y aura du sable pour mille ans.",
      "Il a fait dresser la table. Quarante couverts d'argent, pour quarante personnes qui lui ont donné des forêts, des ports, des filles à marier. Il les connaît toutes. Aucune ne le connaît. Elles croient dîner chez le fils d'un homme mort.",
      "Il s'arrête devant le miroir de la resserre. Un œil gris, un œil brun. Il cherche, dans cette figure de quarante-cinq ans, celle de trente. Il y a longtemps qu'il ne la trouve plus. Elle est en bas, à trois cent soixante marches, les doigts sur un cuir. Il ira la voir demain. Il se demande ce qu'on dit à quelqu'un qu'on a été.",
      "Il pense à la vieille. Une paysanne, une horlogère de village, qui gratte des bornes depuis quarante ans et qui a cousu deux cahiers. Ses gardes la lui amèneront ce soir. Elle lui a fait parvenir, il y a neuf jours, une chose qu'il n'avait pas reçue depuis 541 : une difficulté.",
      "Il sonne. « Un quarante et unième couvert, dit-il au valet. D'étain. Au bas bout. » Le valet attend un nom. Il n'en a pas. « Pour quelqu'un qui viendra peut-être. Je n'ai eu qu'un adversaire dans ma vie, et je l'ai laissé debout dans une cave. Si l'on m'en envoie un second, je veux pouvoir l'inviter. »",
    ] },

  I4r_carillon: { title: "Porter", interlude: { who: "carillon", where: "Le Mont-Cadran, heure par heure" }, back: true,
    text: [
      "Six heures. Le remontage. Une main, autrefois, tournait la clef entre les deux côtes. Il n'y a plus de main. Le grain suffit : il tombe d'un cône dans l'autre, et le cuivre marche.",
      "Sept heures. La tournée. De la Guilde au Palais, du Palais à la Tour, de la Tour à la Guilde. Trois mille pas. Les destinataires sont à leur place. Ils ne prennent pas le pli. On le leur présente ; on compte jusqu'à douze ; on le remporte. C'est la consigne pour les absents. Ils sont absents depuis vingt et un mille neuf cents tournées.",
      "Huit heures. Il y a quelqu'un de nouveau. Petit, pieds nus, qui bouge. Depuis des tournées et des tournées, rien ne bougeait dans la ville que les hommes de cuivre et, quelquefois, des choses qui prennent dans les poches. Celui-ci a pris aussi, autrefois. Aujourd'hui il ne prend pas. Il regarde.",
      "Neuf heures. Le nouveau a parlé. Il n'a pas donné d'ordre : il a demandé. On n'avait pas demandé depuis le Grand Maître. Le cuivre n'a pas de consigne pour *demandé.* Il a sonné une fois, ce qui veut dire : *reçu.*",
      "Dix heures. Entre deux côtes, il y a un pli. Il est là depuis la dernière main. *À porter à qui rendra le coup.* Il n'y avait pas d'adresse. On l'a présenté à la Tour, à chaque tournée ; on a compté jusqu'à douze ; on l'a remporté.",
      "Onze heures. On marche derrière le nouveau. Ce n'est pas la tournée. C'est une autre route, par des rues où le cuivre n'allait pas. Le grain tombe plus vite : il y a longtemps qu'on n'avait pas marché pour quelque chose.",
      "Midi. On sonne douze. On est le seul, dans cette ville, à sonner douze : la grande, là-haut, s'est arrêtée à onze. On le sait. On ne lui en veut pas. On sonne pour elle, tous les jours, la part qui lui manque, en attendant quelqu'un à qui remettre le pli.",
    ] },

  // ============================================================ act V
  I5j_aelis: { title: "La question", interlude: { who: "aelis", where: "La Chambre haute, pendant que la cloche sonne" }, back: true,
    text: [
      "Madame Aélis a huit ans, et elle compte. Elle est dans le petit lit blanc qu'on a monté pour elle, en haut de la Tour, sous la cloche. Sa mère est assise au bord. La cloche sonne.",
      "Un. C'est très fort. Le lit tremble. Aélis avait demandé à être sous la cloche, parce qu'on lui avait dit non, et qu'on lui dit oui à tout depuis qu'elle a les ongles gris.",
      "Quatre. Elle regarde sa mère. Sa mère ne compte pas : elle regarde la porte. Elle a sa figure du Conseil, celle qui ne bouge pas, et dessous une autre, qu'Aélis connaît mieux.",
      "Sept. On lui a expliqué. Au douzième, tout s'arrêtera dans cette chambre. Rien que dans cette chambre. Elle n'aura pas mal. Elle ne s'en apercevra pas. Et quand on aura trouvé ce qu'il faut pour ses ongles, on rouvrira, et il sera midi et un instant.",
      "Neuf. Il y a quelque chose qu'elle ne comprend pas, là-dedans. Elle y pense depuis hier. Si tout s'arrête, et qu'elle ne s'en aperçoit pas, alors comment saura-t-elle que c'est arrivé ? Et si personne, dans la chambre, ne s'en aperçoit, qui est-ce qui attend ?",
      "Dix. Elle se tourne vers sa mère. Elle ouvre la bouche. Elle a la question toute prête, avec ses mots : *Maman, pendant que ce sera arrêté, est-ce que vous serez toute seule ?*",
      "Onze.",
    ] },

  I5j_josse: { title: "Cours", interlude: { who: "josse", where: "La rue aux Oies, sur une borne" }, back: true,
    text: [
      "Josse Noyer est debout sur la borne de la rue aux Oies, sa fille sur l'épaule, son chapeau sur la tête. On voit mieux de là : toute la place, les tréteaux, le dais, et la Tour, avec son cadran grand comme une aire à battre.",
      "Il a quarante-quatre ans. Il est venu à la foire tous les ans depuis qu'il marche. Il sait à quelle borne on se met, à quelle heure, pour que la petite voie la cloche sans avoir la foule dans les jambes.",
      "Quelqu'un lui a parlé, ce matin. Quelqu'un de jeune, qui avait couché dans sa grange, mangé son pain, et qui savait des choses. *S'il arrive quoi que ce soit, au onzième, posez-la par terre, et qu'elle coure. Vers la porte. Jusqu'au septième arbre.* Josse a demandé ce qui pouvait arriver, un jour de fête, en plein midi. On ne lui a pas répondu. On l'a regardé.",
      "C'est un laboureur. Il ne croit pas ce qu'on lui dit ; il croit ce qu'il voit. Il a vu cette figure. Il a vu la même à des gens qui regardaient monter un orage sur du blé mûr.",
      "La cloche sonne. La petite compte, à voix haute, en tapant sur son chapeau. Sept. Huit. Toute la place compte. Josse ne compte pas. Il regarde la Tour. Il lui semble que le son s'épaissit. Qu'il met plus de temps à s'en aller.",
      "Dix. L'air a une couleur. Il la connaît : c'est celle d'avant la grêle. Il ne réfléchit pas. Il prend la petite sous les bras, il la pose sur le pavé, il la tourne vers le bas de la rue. Son chapeau tombe. « Cours. » Elle le regarde. Elle a sa boîte de fer. « Cours, Line. Jusqu'à l'arbre. Je viens. »",
      "Elle court. Elle a toujours fait ce qu'il fallait, celle-là, sans qu'on explique. Il la regarde descendre la rue, ses deux nattes à l'horizontale. Il lève la main en visière, pour la suivre plus loin. Il a le temps de penser qu'il a dit *je viens*, et qu'il faudrait descendre de cette borne.",
    ] },

  I5r_line: { title: "Entre deux hallebardes", interlude: { who: "line", where: "Le parvis de Méridane, le matin du soixantième Grand Midi" }, back: true,
    text: [
      "On l'a mise sur une chaise de malade, à quarante pas de la porte de bronze, sanglée aux poignets et à la taille, entre deux gardes noirs. Le Maître des Sables a voulu qu'elle voie. Line trouve que c'est une politesse, et qu'il aura lieu de la regretter.",
      "Elle a soixante-neuf ans. Elle respire comme un soufflet percé. Elle n'était jamais revenue jusqu'ici qu'en pèlerine, une fois l'an, un ruban à la main. On ne l'avait jamais portée.",
      "Le parvis est gris. Cinq mille personnes, la bouche ronde. Elle en connaît quelques-unes. Elle avait neuf ans : elle se rappelle la marchande aux deux doigts levés, le grand maigre sur les tréteaux, avec sa faux de carton. Ils n'ont pas bougé d'une ligne. Elle a pris soixante ans.",
      "Elle ne regarde pas la Tour. Elle regarde, entre l'épaule d'un archer et le coin du cirier, le débouché d'une rue qui tombe. Elle le regarde sans tourner la tête, pour que les deux noirs ne sachent pas où elle a les yeux.",
      "Autour, les mantes bleues chantent, à bouche fermée, la note que la cloche tient. Sur la passerelle, on monte une estrade. Une jeune femme en blanc va jurer. Line a entendu jurer soixante fois. Elle sait ce que cela vaut : c'est sincère, et cela ne remonte rien.",
      "Quelque chose passe, à ras du pavé, entre un hallebardier et une borne. Sous le coude d'une femme au panier. Le long du mur. C'est maigre, pieds nus, et cela connaît le chemin. Les deux noirs regardent l'estrade. Line regarde ses genoux.",
      "*Ce petit animal ira loin*, avait-elle pensé, un hiver, devant un soupirail, en comptant ce qui lui manquait. Elle remonte ses lunettes sur son front, des deux mains liées, ce qui ne sert à rien et qu'elle fait toujours. Elle a monté cette horloge pièce à pièce. Elle n'entendra peut-être pas si elle part. Elle voudrait seulement savoir, avant, lequel des deux aura la main la plus sûre.",
    ] },

  I5r_jehan: { title: "Deux lettres changées", interlude: { who: "jehan", where: "Au pied de l'escalier du Balancier" }, back: true,
    text: [
      "Jehan a vingt ans, une casaque noire qu'il a retournée, et une pique dont il ne sait plus contre qui il la tient. Il est au pied des marches. On lui a dit : *attends là.* Il attend.",
      "Il a été élevé sous un nom qui n'était pas le sien. Son grand-père en avait changé deux lettres, l'année où l'on a scellé la plaque sur le parvis. Son père est entré dans la Garde du Sable pour qu'on ne cherche pas plus loin. On ne se fait pas tuer pour une orthographe, disait-il. Il est mort en la portant.",
      "Jehan a déserté il y a neuf jours. Pour une raison qui lui a paru bonne, et qu'il a depuis cessé de pouvoir dire en une phrase. Il a suivi quelqu'un de maigre, qui volait, qui mentait par habitude, et qui marchait vers cette Tour comme on rentre chez soi.",
      "Ce matin, dans la vis, il a dit son vrai nom. Tout haut. Il ne l'avait jamais prononcé. Cela a fait un bruit, dans la pierre, comme une chose qu'on pose.",
      "En bas, derrière la herse, il y a une cave. Dans la cave, il y a un homme, debout, les mains à une barre, depuis soixante ans. La Chronique dit que c'est par lui que tout est venu. La plaque dit : *qu'il soit maudit.* Le grand-père disait autre chose, à voix basse, les soirs où il avait bu : *il était descendu pour l'arrêter.*",
      "Jehan n'a jamais su lequel croire. Il a une pique, vingt ans, et un arrière-grand-père à trente marches, qu'il n'ose pas aller regarder.",
      "Le gris monte dans l'escalier. Il luit par en dessous. Jehan serre sa hampe. Il se dit que si quelqu'un remonte de là avec une réponse, il la prendra, quelle qu'elle soit. Il se dit aussi, parce qu'il est honnête, qu'il aimerait mieux l'une que l'autre, et il écarte un peu les talons, pour tenir.",
    ] },
});

module.exports = { passages: P, extras: { interludes: [
  { act: "II", to: "I2r_brassac", if: { all: [R, { secret: "r_garde" }] } },
  { act: "II", to: "I2j_line", if: J },
  { act: "II", to: "I2r_petite", if: R },
  { act: "III", to: "I3j_hotte", if: { all: [J, { has: "monde:line_route" }] } },
  { act: "III", to: "I3j_aubespin", if: J },
  { act: "III", to: "I3r_lison", if: { all: [R, { has: "r:lison_sifflet" }] } },
  { act: "III", to: "I3r_regente", if: R },
  { act: "IV", to: "I4j_josquin", if: { all: [J, { has: "monde:concours_gagne" }] } },
  { act: "IV", to: "I4j_coudrier", if: J },
  { act: "IV", to: "I4r_carillon", if: { all: [R, { has: "r:carillon" }] } },
  { act: "IV", to: "I4r_vieux", if: R },
  { act: "V", to: "I5j_josse", if: { all: [J, { has: "monde:mot_josse" }] } },
  { act: "V", to: "I5j_aelis", if: J },
  { act: "V", to: "I5r_jehan", if: { all: [R, { has: "r:jehan_marche" }] } },
  { act: "V", to: "I5r_line", if: R },
] } };
