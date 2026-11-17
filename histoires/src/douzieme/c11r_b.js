// Le Douzième Coup · chapter 11, the one who stays, second half (act III, 20 June 601, from noon to none). The
// Guild taken, its two closed doors. The butterfly door: nine benches and a tenth (`monde:dixieme_etabli`), the rose
// of Easter 541 under its bell (`r:vu_rose`). The north lodging: the copper man of the landing (bronze key or
// Carillon), the twelve rings (puzzle `p_anneaux` → `enigme:p_anneaux`), the cabinet of the Grand Maître
// (`r:cabinet_ouvert`): the chapter « Du Rendre » (`r:sait_lesquelles` : the one above must have stood under the
// bell when it fell silent, the one below must come from an hour the stroke never took), the bronze-tipped rod
// under the sandglass (item `baguette_bronze`, `r:baguette` : it frees what copper holds, and it fits the groove of
// the wedge), the order of insults, the chest (`r:jehan_timbale`), the window, Carillon asking again
// (`r:lettre_coudrier`, item `lettre_maudit`). At none, the Maître des Sables comes up alone, as every 20 June :
// watched (`r:aubespin_entendu`), heard from behind a pillar (`r:aubespin_evite`) or faced (`r:aubespin_face`) ;
// the number of the lock sold (`r:serrure_vendue`), refused (`r:serrure_refusee`) or lied about. Then B11.
var P = {};
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };
var CLEF_R = { any: [{ item: "clef_apprenti" }, { item: "clef_ansel" }, CARILLON] };
var OUVERT = { has: "enigme:p_anneaux" };
var HEURES = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "·"];

Object.assign(P, {
  K11r_tantot: { act: "III", title: "Midi passé, de ton côté", place: "guilde", ambiance: "chateau",
    text: [
      "Tu remets la dalle, et tu ramènes le gris dessus, à pleines mains, jusqu'à ce que la marche ait repris son drap. Sur le marbre, l'ombre du style est restée au douze. Ton ventre, lui, a marché : il dit deux heures.",
      "{autre} est au Palais, il y a soixante ans, sous des plafonds peints, et attend none comme toi. Entre vous deux, il y a la largeur d'une ville et la hauteur d'une vie d'homme.",
      "Il te reste dans cette cour deux portes fermées. Tu sais laquelle il a fallu soixante ans pour ne pas ouvrir.",
    ],
    choices: [{ label: "Te relever", to: "K11r_cour", big: true }] },

  K11r_papillon: { act: "III", title: "La porte au papillon", backName: "l'atelier au papillon", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Le logis du fond est de pierre blanche, à hautes fenêtres. Sur la porte, à la place du heurtoir, un papillon de bronze aux ailes ouvertes, grand comme la main. Le corps en est usé, d'un brillant de pièce de monnaie : la rigole des souliers fins vient droit dessus." },
      { first: true, text: "Elle cède. Il ne ferme rien : douze hommes de cuivre lui servent de verrou. Dedans, neuf établis sur deux rangs, neuf lampes à boule d'eau, neuf tabourets poussés sous le bois. Les outils sont alignés par taille. Aucun n'a un grain de gris dessus : on époussette ici, une fois l'an, comme on fleurit une tombe." },
      { first: true, if: { has: "monde:dixieme_etabli" }, text: "Il y a un dixième établi, près de la porte du fond. Celui-là a servi. Un jour, deux au plus : la boule de la lampe a son eau, l'étau a mordu une pièce, et la sciure de laiton, sous la presse, tient dans le creux d'une cuiller. {autre} t'a écrit neuf garçons. Quelqu'un a été le dixième, le temps d'une journée, et n'a pas eu de clef à poser sur un oreiller." },
      { first: true, if: { not: { has: "monde:dixieme_etabli" } }, text: "Il y a un dixième établi, près de la porte du fond. Celui-là n'a jamais servi : la boule de la lampe est sèche, et l'étau a gardé sa graisse de magasin. On avait prévu une place, et personne n'est venu la prendre." },
      { again: true, text: "Les neuf établis, le dixième, les outils alignés." },
    ],
    choices: [
      { label: "La porte du fond", to: "K11r_rose" },
      { back: "K11r_cour" },
    ] },

  K11r_rose: { act: "III", title: "Sept cent vingt et un traits", place: "guilde", ambiance: "chateau", fx: { flag: "r:vu_rose", ep: ["histoire", 500] },
    text: [
      { first: true, text: "Une pièce blanche, haute, où il n'y a qu'une table de marbre et une fenêtre sur la Tour. Sur la table, une cloche de verre épais, grande comme une ruche. Dessous, une rose." },
      { first: true, text: "Elle est ouverte à demi. Elle est rouge. Dans cette cour où tout a pris la couleur de la cendre, elle est d'un rouge qui fait mal à regarder. Au bord d'un pétale, une goutte d'eau est arrêtée, ronde, avec la fenêtre dedans." },
      { first: true, text: "Le pied de la cloche a une petite trappe de laiton, et, dessous, une coupelle où une pincée achève de luire. Sur le marbre, tout autour, quelqu'un a rayé des traits à la pointe de diamant, rangés par cinq, par cinquante, par cent. Tu comptes comme on compte des fagots. Il y en a sept cent vingt et un." },
      { first: true, text: "Un trait par mois, depuis un matin de Pâques. Une pincée par trait. Tu as posé une pincée, à Roquebise, sur la main d'une enfant de cinq ans, et tu en as eu dix phrases ; tu as compté ce sable-là grain par grain pendant six ans pour y arriver. Cet homme en a donné sept cent vingt et une à une fleur." },
      { first: true, text: "Elle n'a pas fané d'un pétale. Tu cherches ce qu'il y a de si terrible dans cette pièce, et tu le trouves : c'est une chose tenue avec soin." },
      { again: true, text: "La rose rouge, sa goutte, les sept cent vingt et un traits." },
    ],
    choices: [{ back: "K11r_papillon" }] },

  K11r_nord: { act: "III", title: "L'escalier du nord", backName: "l'escalier du nord", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "Le logis du nord est le plus vieux des quatre. On y monte par un escalier de pierre, droit, raide, où la rigole des souliers fins a pris le milieu des marches. Sur le palier, un homme de cuivre se tient debout, sa lueur au cœur. Celui-là a une porte pour toute ronde." },
      { first: true, text: "Elle est derrière lui, basse, noire, sans poignée, avec quelque chose de bronze à hauteur de poitrine." },
      { again: true, text: "L'escalier droit, l'homme de cuivre du palier, la porte noire." },
      { if: { not: CLEF_R }, text: "L'ovale lisse a pivoté dès la première marche. Il descend à tes mains, et il attend, avec la patience d'une chose qui a quatre cents ans de service. Tu as eu ses trois doigts sur l'épaule, ou tu les as vus sur celle d'un autre. Il te faut une clef de la maison ; elles sont où dorment les apprentis." },
    ],
    choices: [
      { label: "Monter jusqu'à la porte", if: CLEF_R, why: "L'homme de cuivre du palier regarde tes mains, et il n'y trouve rien de la maison.", to: "K11r_anneaux", big: true },
      { back: "K11r_cour" },
    ] },

  K11r_anneaux: { act: "III", title: "Soixante ans de patience", backName: "la porte aux douze anneaux", place: "guilde", ambiance: "chateau", puzzle: "p_anneaux", puzzleLabel: "Poser la main sur le tambour",
    text: [
      { first: true, text: "L'homme de cuivre s'est effacé d'un demi-pas. Tu es devant la porte du Maudit." },
      { first: true, text: "Autour du tambour de bronze, le chêne est labouré. Tu lis cela comme on lit une lisière. Ici, une pince a pesé : le bois a éclaté en long. Là, quatre trous de mèche, en carré, qui s'arrêtent à un pouce de profondeur sur une plaque de fer. Plus bas, un rond noir, où l'on a tenu un fer rouge. Sous la serrure, le chêne a blanchi en coulures : on a essayé l'eau-forte." },
      { first: true, text: "Toutes ces blessures sont grises de vieillesse, et aucune n'est plus jeune que les autres. Elles datent des premières années. Ensuite, la main a changé de méthode : les douze anneaux sont polis comme des galets de rivière. Quelqu'un a cessé de forcer et s'est mis à chercher, un soir par an, pendant un demi-siècle." },
      { first: true, text: "Tu te penches sur le douzième anneau. Deux de ses treize faces ont perdu leur patine. Le XII brille, d'un poli clair, de l'an dernier. La face lisse a un poli sombre, ancien, creusé comme le milieu d'une marche d'église." },
      { first: true, with: "carillon", after: "r:carillon_ferme", text: "Carillon s'est rangé contre le mur, les mains le long du corps. « Carillon regardera. Ensuite, il redemandera. »" },
      { first: true, with: "jehan", text: "Jehan est resté trois marches plus bas. « Je ne monte pas, dit-il. Pas avant que ce soit ouvert. Si elle s'ouvre, c'est que j'ai le droit. »" },
      { again: true, before: "enigme:p_anneaux", text: "La porte noire, le chêne labouré, les douze anneaux polis." },
      { again: true, after: "enigme:p_anneaux", text: "La porte noire est entrouverte, de son poids. Les anneaux sont restés sur leur réponse." },
    ],
    choices: [
      { label: "Pousser la porte", hide: { not: OUVERT }, to: "K11r_cabinet", big: true },
      { back: "K11r_nord" },
    ] },

  K11r_cabinet: { act: "III", title: "Onze heures, le vingt et un", backName: "le cabinet du Grand Maître", place: "guilde", ambiance: "chateau", hub: true, fx: { flag: "r:cabinet_ouvert", ep: ["histoire", 1000] },
    text: [
      { first: true, text: "Douze petits cliquets, puis un déclic plus grave, au fond du bois. La porte tourne vers l'intérieur, de son poids, sans que tu la pousses." },
      { first: true, text: "Il en sort une odeur. C'est la première de la colline : du papier, du suif, du drap qui a séché près d'un homme. Personne n'a passé ce seuil depuis le vingt et un juin 541, à onze heures. La fenêtre était fermée ; le gris est resté dehors, et la pièce a gardé ses couleurs, qui sont le brun et le blanc." },
      { first: true, text: "C'est petit, nu, sans une horloge. Un lit de sangle, un coffre, des livres en piles sur le carreau. Le lit n'est pas défait : quelqu'un s'est assis au bord, longtemps, et le creux y est encore. Sur la table, un cahier ouvert, une plume en travers, une feuille volante, et un sablier haut de trois doigts, dont tout le sable, blond, est en bas." },
      { first: true, text: "Sous le sablier, on a glissé le bout d'une baguette." },
      { first: true, if: { has: "monde:coudrier_sait" }, text: "Sur le mur, à hauteur d'yeux, un compte à la craie, d'une main qui appuie : *541 et 60 font 601.* Le dernier nombre est cerclé deux fois. Dessous : *Ils seront deux. Laisser la porte comme elle est.*" },
      { first: true, with: "jehan", text: "Jehan est monté. Il s'arrête sur le seuil et il ôte son bonnet, lentement, comme on entre chez un mort qu'on a calomnié toute sa vie." },
      { first: true, with: "rouget", text: "Rouget regarde le lit de sangle, la table, le coffre. « C'est ça, le Maudit ? Il avait moins de meubles que la Courtepaille. »" },
      { again: true, text: "Le cabinet, sa table, son lit de sangle. Par la fenêtre, la Tour, à vingt toises." },
    ],
    choices: [
      { label: "Le cahier ouvert", to: "K11r_livre" },
      { label: "La baguette, sous le sablier", hide: { item: "baguette_bronze" }, to: "K11r_baguette" },
      { label: "La feuille volante", hide: { seen: "K11r_marges" }, to: "K11r_marges" },
      { label: "Le coffre", hide: { seen: "K11r_coffre" }, to: "K11r_coffre" },
      { label: "La fenêtre", to: "K11r_fenetre" },
      { label: "Carillon a fait un pas en avant", hide: { any: [{ not: CARILLON }, { not: { has: "r:carillon_ferme" } }, { has: "r:lettre_coudrier" }] }, fx: { flag: "r:lettre_coudrier", item: "lettre_maudit", ep: ["histoire", 600] }, to: "K11r_reponse", big: true },
      { back: "K11r_cour" },
    ] },

  K11r_livre: { act: "III", title: "Du Rendre", place: "guilde", ambiance: "chateau", fx: { flag: "r:sait_lesquelles", ep: ["histoire", 1000] },
    text: [
      { first: true, text: "C'est une copie, d'une écriture ronde et propre, celle d'un garçon qui a peur de mal faire. Dans les marges, une autre main est passée, énorme, carrée, qui troue le papier aux points. Le cahier est ouvert à l'avant-dernier chapitre. Tu lis du doigt, lentement, et tu relis." },
      { first: true, text: "*Chapitre trente-neuvième. Du Rendre.*" },
      { first: true, text: "*Qui aura tenu rendra. Et s'il ne le peut, que d'autres rendent pour lui.*" },
      { first: true, text: "*Qu'ils soient deux : car la barre ne remonte que le temps d'un coup, et nul ne court de la corde au levier dans un coup de cloche.*" },
      { first: true, text: "*Que l'un soit de l'heure tenue. Qu'il se soit trouvé sous la cloche quand elle s'est tue : il sait où le compte s'est arrêté, et lui seul le peut reprendre.*" },
      { first: true, text: "*Que l'autre vienne d'une autre heure, que le coup n'a point prise. Car la barre connaît ceux qu'elle a tenus, et pèse sur eux de tout ce qu'elle garde.*" },
      { first: true, text: "*Et qu'ils s'entendent sans se voir.*" },
      { first: true, text: "Dans la marge, la grosse main : *Évrard, 481 : seul. Il a lâché. C'est tout son mérite.* Plus bas : *« De l'heure tenue » : donc pris. Celui d'en haut doit y être resté. Qui consent à cela ?* Plus bas encore, et repassé deux fois : *Celui d'en bas : personne de ce jour. Ni moi, ni Melchior. La barre nous connaîtrait.*" },
      { first: true, if: { has: "monde:coudrier_sait" }, text: "Et tout au bas de la page, d'une autre encre, plus pâle, écrite vite : *On m'a répondu avant-hier. Il existe quelqu'un d'une autre heure. Il en existe deux. L'un des deux devra consentir, et ne le sait pas encore.*" },
      { first: true, text: "Tu tournes la page. Le quarantième chapitre est une feuille blanche. Le copiste a écrit *XL* tout en haut, de sa ronde appliquée, et il a laissé le reste comme il l'a trouvé." },
      { first: true, text: "Tu reviens en arrière. Un soir, à l'abbaye, tu as tracé deux mots en bâtons, *EN HAUT* et *EN BAS*, sans savoir lequel était le tien. Tu le sais. Tu es né{e} quarante ans après le coup ; la barre n'a rien à te reprocher. Le levier est pour toi." },
      { first: true, text: "Et la corde est pour {autre}, qui doit se trouver demain sous la cloche, au onzième coup, et y rester." },
      { first: true, after: "K05r_chronique", text: "La Chronique le raconte depuis soixante ans, sans comprendre ce qu'elle raconte : *on vit ce jour-là dans la Tour un inconnu.* Elle ajoute qu'on le mit à mort au onzième coup. Tu as traversé une ville entière de gens à qui le onzième coup est arrivé. Aucun n'a eu le temps de finir un geste, et tuer est un geste comme un autre." },
      { again: true, text: "Le chapitre trente-neuvième, ses marges, et la page blanche qui le suit." },
    ],
    choices: [{ back: "K11r_cabinet" }] },

  K11r_baguette: { act: "III", title: "Ce que tient le cuivre", place: "guilde", ambiance: "chateau", fx: { item: "baguette_bronze", flag: "r:baguette", ep: ["perso", 500] },
    text: [
      "Tu soulèves le sablier. Le sable blond y reste en bas, sans un grain qui bouge : c'est du sable de rivière, il n'a jamais mesuré que des visites.",
      "La baguette est de buis, longue d'une coudée, ferrée de bronze à un bout. C'est une baguette de portier, toute neuve : la sienne, celle de Grand Maître, il l'a descendue avec lui. Autour du bois, un papier est noué d'un fil.",
      "*Pour qui a su compter. Elle délie ce que tient le cuivre : touchez le bras, les doigts se lèvent. Elle a aussi, au bout, la grosseur qu'il faut pour une certaine rainure. J'ai pris la mesure sur le dessin de Cliquet, pendant qu'il avait le dos tourné. La mienne est pareille. Si la mienne n'a pas suffi, c'est qu'il y fallait un autre bras que le mien.*",
      { after: "r:sait_cale", text: "Une rainure. Tu as vu un coin, tantôt, en noir de fumée sur un marbre. Un vieillard de soixante-dix ans est descendu sous la Tour avec une baguette, contre un homme qui avait un maillet, et il savait très bien ce qu'il allait faire de sa baguette." },
      { after: "r:tenu_cuivre", text: "Tu poses le bout de bronze sur ton épaule, à l'endroit des trois doigts. Le froid s'en va d'un coup, comme une main qu'on retire." },
      "Tu la passes dans ta ceinture. Elle pèse ce que pèse une cuiller de bois, et c'est tout ce qu'un Grand Maître a pu léguer.",
    ],
    choices: [{ back: "K11r_cabinet" }] },

  K11r_marges: { act: "III", title: "Dans quel ordre", place: "guilde", ambiance: "chateau", fx: { ep: ["perso", 300] },
    text: [
      "La feuille volante est de la grosse main, sans un mot de titre. C'est une liste. Il l'a faite la veille de la séance, à cette table, et il y a mis la journée.",
      "*Rouet : lui dire le prix de ses bas.*",
      "*Balancourt : lui demander combien font quarante mille, ôtés de l'honneur d'une maison.*",
      "*Cliquet : rien. Il est jeune. Lui demander à quoi sert ce qu'il lime.*",
      "*Foliot : lui parler de son oncle, doucement.*",
      "*Lunel : lui parler le dernier.*",
      "*Les regarder tous les six, et compter jusqu'à douze en silence.*",
      "*Le septième : ne pas l'insulter. Le remercier d'être clair.*",
      "Ces hommes te sont inconnus. Tu connais le genre de celui qui a écrit la liste : il pèse ses injures comme d'autres pèsent des remèdes, une par malade, et il a gardé pour le pire la seule politesse du lot.",
      { with: "jehan", text: "Jehan a lu par-dessus ton épaule. Il rit, d'un rire court, étonné, qu'il n'a pas eu depuis le camp d'Arvoise. « Il était drôle. Personne ne m'avait dit qu'il était drôle. »" },
    ],
    choices: [{ back: "K11r_cabinet" }] },

  K11r_coffre: { act: "III", title: "Rue du Pont, à Arvoise", place: "guilde", ambiance: "chateau",
    text: [
      "Le coffre a sa clef dessus. Une seconde houppelande, plus usée que la première ne devait l'être. Trois chemises. Un rasoir. Un homme qui a commandé à la première maison du royaume tenait, linge compris, dans un coffre de soldat.",
      "Au fond, un paquet de lettres noué d'une ficelle. Elles viennent d'Arvoise, d'une écriture d'artisan, et commencent toutes par *Mon oncle.* Elles sont signées *Gilles Coudrier, serrurier, rue du Pont.* La dernière est du deux juin : *Il nous est né un fils le jour de la Saint-Marcellin. Nous l'appelons Barnabé, que cela vous plaise ou non. Venez le voir après votre fête.*",
      "Sous les lettres, roulée dans un bas de laine, une timbale d'argent, neuve, qui n'a jamais servi. On a gravé sur le bord : *B. C. à B. C., 541.* Le cadeau de baptême était prêt. Il attendait la fin d'une fête.",
      { with: "jehan", text: "Jehan s'est assis par terre, d'un coup, comme si on lui avait fauché les jambes. « Barnabé Coudrier. Serrurier. » Sa voix n'a plus de casaque. « C'est mon grand-père. Il signait d'une croix, sur les registres, et d'un autre nom. Il est mort l'hiver de mes dix ans. Il me faisait des sifflets. » Il regarde la timbale dans le bas de laine. « Il n'a jamais su qu'on lui avait fait cela. »" },
    ],
    choices: [
      { label: "Mettre la timbale dans les mains de Jehan", hide: { not: JEHAN }, fx: { flag: "r:jehan_timbale", conf: { jehan: 20 }, ep: ["perso", 500] }, to: "K11r_timbale" },
      { back: "K11r_cabinet" },
    ] },

  K11r_timbale: { act: "III", title: "B. C. à B. C.", place: "guilde", ambiance: "chateau",
    text: [
      "Il la prend à deux mains. Il la tourne vers la fenêtre, et l'argent, qui n'a pas terni, lui met une lueur sur la figure.",
      "« On crachait, dit-il. Chez nous aussi. Mon père crachait plus fort que les autres, pour qu'on ne se doute de rien. » Il passe le pouce sur les quatre lettres. « Et pendant ce temps-là, il y avait ça, dans un bas de laine, à dix lieues, pour mon grand-père qui venait de naître. »",
      "Il la met dans sa chemise, contre sa peau. Puis il se relève, et tu vois qu'il se tient autrement : il a toujours eu le dos d'un soldat, il a maintenant celui d'un homme qui porte un nom.",
      "« Demain, dit Jehan Coudrier, je ne serai pas de ceux qui gardent l'escalier. Je te dois de te le dire. Je serai de ceux qui le montent. »",
    ],
    choices: [{ back: "K11r_cabinet" }] },

  K11r_fenetre: { act: "III", title: "Vingt toises", place: "guilde", ambiance: "chateau",
    text: [
      { first: true, text: "La fenêtre donne sur la Tour, et la Tour la remplit. À vingt toises, on distingue les joints des pierres sous le gris qui ruisselle. Une ruelle étroite longe le pied de la paroi jusqu'à une petite porte de fer, basse, à l'aplomb du grand cadran. Elle est entrebâillée. Quelqu'un est entré par là sans prendre le temps de la tirer derrière lui." },
      { first: true, text: "À l'entrée de la ruelle, quatre hommes à rubans verts ont le nez en l'air. Ils sont pris en badauds, la bouche ouverte, comme les familles de la rue. Ce qu'ils étaient venus empêcher leur a passé devant, et ils regardaient la cloche." },
      { first: true, text: "Tu mesures le chemin, pour demain. De cette cour à la porte de fer : vingt toises à découvert, une ruelle où l'on ne se croise pas, et ton sablier qui filera trois grains pour un." },
      { first: true, after: "r:clef_droit", text: "Ou bien l'autre chemin, celui dont tu as la clef dans ta ceinture : par-dessous, depuis une église, dans le noir." },
      { first: true, with: "carillon", text: "« Carillon est parti de cette table. » Il s'est mis à la fenêtre, à ta gauche. « Le Grand Maître a dit : *descends, et fais vite.* Puis il est sorti par la poterne, et il a pris cette ruelle. Carillon l'a vu de la rue, en se retournant. Carillon n'avait pas l'ordre de se retourner. » *Ding*, fêlé. « Il le signale. »" },
      { again: true, text: "La Tour, la ruelle, la porte de fer entrebâillée." },
    ],
    choices: [{ back: "K11r_cabinet" }] },

  K11r_reponse: { act: "III", title: "Réponse régulière", place: "guilde", ambiance: "chateau",
    text: [
      "« Vous avez ouvert. » Carillon s'est planté devant toi, à un pas. « Carillon redemande. Combien y a-t-il d'Heures ? »",
      "Tu lui réponds ce que la porte vient de t'apprendre : onze qu'on nomme, et une qu'on laisse en blanc.",
      "*Ding.* Clair, plein, et le sable blond en tremble dans son verre. « Réponse régulière. » La petite porte de son flanc s'ouvre. Il te tend un tube de bronze, long comme la main, et cette fois il le lâche.",
      "Dedans, une feuille roulée, d'un gros papier d'atelier, de l'écriture qui remplit les marges du cahier.",
      { if: { has: "monde:coudrier_sait" }, text: "*À qui viendra de l'an 601. On m'a dit votre année avant-hier. Je n'en ai rien cru pendant un jour entier, puis j'ai refait mes comptes, et ils tombent. Si vous avez un livre dans votre chemise, vous savez qui me l'a dite.*" },
      { if: { not: { has: "monde:coudrier_sait" } }, text: "*À qui bouge encore, quel que soit le jour.*" },
      "*Je suis Barnabé Coudrier, Grand Maître des Horlogers-Jurés. Il est onze heures. Dans une heure, un homme tiendra le Balancier, et il s'est fait limer de quoi ne plus le lâcher. Je descends le lui ôter. J'ai soixante-dix ans et une baguette. Si vous lisez ceci, comptez que j'ai échoué.*",
      "*On vous dira que c'est ma faute. Laissez dire, et cherchez plutôt à qui la chose a rapporté.*",
      "*Le coup se rend. Il y faut deux personnes, et le Livre dit lesquelles. Ma copie est dans mon cabinet, logis du nord, derrière douze anneaux. Sous le sablier de ma table, il y a une baguette à bout de bronze. Prenez-la.*",
      "*J'envoie Carillon parce qu'on ne lui a pas fait d'oreilles. Il est honnête, exact et susceptible. Ne l'appelez jamais machine. B. C.*",
      "Tu lèves les yeux de la lettre. Tu es dans le cabinet. Le sablier est sur la table. La lettre a mis soixante ans à faire trois pas.",
      { with: "jehan", text: "Jehan a lu jusqu'aux deux lettres du bas. Il porte la main à sa bouche, du geste qu'on lui a appris à quatre ans pour ce nom-là, et il la laisse à plat sur ses lèvres. « C'était l'oncle de mon arrière-grand-père, dit-il enfin. Je m'appelle Jehan Coudrier. » Carillon pivote. *Ding.* « Coudrier. Nom connu de Carillon. Carillon salue la maison. »" },
    ],
    choices: [
      { label: "Rouler la lettre contre le Cahier", hide: { not: JEHAN }, fx: { flag: "r:jehan_sait_vrai", conf: { jehan: 20 } }, to: "K11r_cabinet", big: true },
      { label: "Rouler la lettre contre le Cahier", hide: JEHAN, to: "K11r_cabinet", big: true },
    ] },
});

// ---------------------------------------------------------------- none: the one who has the key
Object.assign(P, {
  K11r_pas: { act: "III", title: "Le seul qui entre", place: "guilde", ambiance: "chateau",
    text: [
      "Tu es à dix pas du cadran solaire quand l'homme de cuivre des arcades s'arrête. Il ne s'était pas arrêté de la journée. Sa tête lisse tourne vers le portail.",
      "Un pas vient de la rue. Un seul homme, des semelles fines, et le petit coup sec d'une canne, à gauche, tous les deux pas. Le bruit monte dans cette cour comme il monterait dans une église.",
      "Tu es sous une arcade avant d'avoir décidé de bouger. Six ans de lisière vous apprennent cela : on se cache d'abord, on pense ensuite.",
      { if: { has: "r:sait_none" }, text: "*Tous les vingt juin, à none, à pied, sans un garde.* Le vieux sergent te l'avait dit, et tu as laissé passer l'heure sur un marbre où l'ombre ne bouge pas." },
      "Il entre. Les deux statues du portail se sont effacées d'elles-mêmes. Il est mince, vêtu de gris, sans une broderie, et il marche dans sa propre rigole, sans regarder ses pieds, du pas d'un homme qui rentre. Il a l'air d'avoir quarante-cinq ans. À dix pas de toi, sous le jour sans ombre, tu vois ses yeux : un gris, un brun.",
      { with: "carillon", text: "Carillon a fait un pas en arrière, dans le noir de l'arcade, sans que tu le lui demandes. Sa main à trois doigts s'est posée sur sa grille." },
      { with: "jehan", text: "Jehan s'est collé au pilier. Il ne respire plus. Il a salué cet homme, de loin, pendant trois ans, sur un champ de manœuvre, et il a déserté pour ne plus le saluer." },
    ],
    choices: [
      { label: "Rester derrière ton pilier, et le regarder faire", fx: { flag: "r:aubespin_evite" }, to: "K11r_aubespin_parle", big: true },
      { label: "Le suivre jusqu'à la porte au papillon", test: { dom: "discretion", diff: 5, label: "Marcher dans sa rigole", help: [{ if: { voie: "leste" }, v: 10 }, { if: { has: "r:aubespin_flaire" }, v: -10 }] },
        win: { fx: { flag: "r:aubespin_entendu", ep: ["histoire", 600] }, to: "K11r_aubespin_seul" }, lose: { fx: { flag: "r:aubespin_face" }, to: "K11r_aubespin_face" } },
      { label: "Sortir de l'arcade, et te mettre sur son chemin", fx: { flag: "r:aubespin_face" }, to: "K11r_aubespin_face", big: true },
    ] },

  K11r_aubespin_seul: { act: "III", title: "Soixante", place: "guilde", ambiance: "chateau",
    text: [
      "Tu poses tes sabots dans ses traces, et tu arrives à la fenêtre de l'atelier quand il pousse la porte du fond. Par deux vitres en enfilade, tu le vois de dos, devant la cloche de verre.",
      "Il ôte ses gants. Il tire de son gilet une fiole grosse comme un dé, ouvre la petite trappe de laiton, et verse. La coupelle se rallume. Puis il prend dans sa poche un diamant de vitrier, se penche, et raye le marbre d'un trait, court, appuyé, au bout de la dernière rangée.",
      "« Sept cent vingt-deux. » Sa voix est égale, polie, sans âge. Il parle à la rose comme on parle à un malade qui dort. « Demain, soixante ans. Tu n'as pas perdu un pétale, et j'ai tenu parole à tout le monde. On m'avait demandé une chambre. On m'avait payé un palais. C'est un vieillard têtu qui m'a donné la ville, en se pendant à mon levier. »",
      "Il remet ses gants, doigt par doigt. « J'ai mis vingt ans à cesser de lui en vouloir. J'en ai mis quarante à lui en savoir gré. Demain je lui devrai le reste, et je n'aurai plus à venir te donner à boire : il en tombera pour tout ce qui vit. »",
      { if: { has: "monde:montre_aubespin" }, text: "Il sort une montre. Tu la connais sans l'avoir jamais vue : la boîte est petite, sans gravure, et les vis du fond sont de ce bleu-là. Il la remonte de trois tours, l'écoute, et la remet dans son gilet. « Elle marche encore. Soixante ans. Je n'ai su qu'à Arvoise qui l'avait faite. Elle le paiera demain, par sa présence. »" },
      "Il reste là le temps de trois Pater, les mains sur le pommeau de sa canne, devant une fleur. Puis il sort. Tu es à plat contre le mur, entre deux fenêtres. Il passe à quatre pas, et il sent la mélisse.",
    ],
    choices: [
      { label: "Le laisser monter l'escalier du nord, et écouter", fx: { flag: "r:aubespin_evite" }, to: "K11r_aubespin_parle", big: true },
      { label: "Te détacher du mur : « Sept cent vingt-deux. J'ai compté aussi. »", fx: { flag: "r:aubespin_face" }, to: "K11r_aubespin_face" },
    ] },

  K11r_aubespin_parle: { act: "III", title: "À la cour", place: "guilde", ambiance: "chateau",
    text: [
      { before: "r:aubespin_entendu", text: "Il traverse. Il entre par la porte au papillon, sans frapper, et il y reste le temps de trois Pater. Quand il ressort, il a l'air reposé d'un homme qui revient d'une visite." },
      "Il prend l'escalier du nord. L'homme de cuivre du palier s'efface. Tu entends, d'en bas, douze petits cliquets, posés un à un, sans hâte, par une main qui a fait ce geste soixante fois. Un silence. Rien ne s'ouvre.",
      { if: OUVERT, text: "Un autre silence, plus long. Il a vu les anneaux. Tu les avais laissés sur leur réponse, ou brouillés d'une autre façon que lui : un homme qui regarde la même serrure depuis soixante ans sait quand une autre main y a passé." },
      "Il redescend. Sur la dernière marche, il s'arrête, et il regarde le gris. Tes sabots y sont écrits, de l'arcade à l'escalier, de l'escalier au cadran, aussi lisibles qu'une page.",
      { with: "carillon", text: "À côté de tes sabots, il y a d'autres marques : des pieds de cuivre, à trois orteils, de la taille d'un enfant. Il les regarde plus longtemps que les tiennes." },
      "Il parle à la cour, la tête basse, de sa voix égale, comme on dicte.",
      "« Je ne vous cherche pas. Je n'ai personne ici pour vous prendre, et c'est le seul lieu du royaume où cela me plaise. »",
      { if: OUVERT, text: "« Vous avez ouvert sa porte. J'y mets douze depuis soixante ans. Vous savez donc un chiffre que j'ignore, et je l'achète. Mon prix est sur ma figure. Regardez-la demain, au parvis, et dites-vous qu'une enfant de cinq ans, à Roquebise, pourrait avoir la même dans cent ans d'ici. Vous n'aurez qu'à dire le chiffre à un de mes hommes. »" },
      { if: { not: OUVERT }, text: "« Vous avez monté cet escalier. Si vous ouvrez cette porte avant demain, vous saurez un chiffre que je cherche depuis soixante ans, et je l'achète. Mon prix est sur ma figure. Regardez-la au parvis, et dites-vous qu'une enfant de cinq ans, à Roquebise, pourrait avoir la même dans cent ans d'ici. »" },
      { if: { has: "r:jarre_volee" }, text: "« Quant à la jarre, gardez-la. On ne compte pas avec un hôte. »" },
      "Il remet son chapeau. Il traverse la cour dans sa rigole, sans se retourner, et au portail il porte deux doigts à son bord, à gauche, à droite, pour chacun des hommes de cuivre. Le petit coup de canne descend la rue du Cadran et s'éteint.",
      "Tu sors de l'arcade. Il a nommé Roquebise. Il a dit *cinq ans.* Tu n'as jamais dit l'âge de Lison à personne de ce côté-ci de la lisière.",
    ],
    choices: [{ label: "Aller au cadran solaire, les jambes un peu molles", to: "K11r_none", big: true }] },

  K11r_aubespin_face: { act: "III", title: "Un gris, un brun", place: "guilde", ambiance: "chateau", fx: { meet: "aubespin_vieux", ep: ["perso", 600] },
    text: [
      { outcome: "lose", text: "Tu marches dans sa rigole, et ton sabot en casse le bord. Il s'arrête, la main sur le papillon de bronze, sans se retourner. « Il y a des souris chez les Jurés aussi. Celle-ci vient de Roquebise. Qu'elle approche : je n'ai pas de chat. »" },
      "Il te fait face. De près, il n'a pas une ride, et ses mains, sur le pommeau de la canne, ont des taches de vieillard. Il te regarde de ses deux yeux, l'un après l'autre, comme on essaie deux verres. Il sent la mélisse.",
      "« C'est donc vous. On m'a beaucoup parlé de vos pieds, depuis un gué. Je suis content de voir le reste. » Il s'incline d'un pouce. « Vous n'avez rien à craindre dans cette cour. Mes gardes ne passent pas le portail, et j'ai quatre-vingt-dix ans, quoi qu'en dise ma figure. C'est le seul endroit du royaume où je sois sans personne. J'y viens pour cela. »",
      { if: { has: "r:courtenvaux_note" }, text: "« Un jeune homme m'a fait porter six lignes sur vous, tantôt. Il écrit mal, et il vous a trouvé du style. »" },
      { if: { has: "r:jarre_volee" }, text: "« Vous m'avez pris une jarre. Gardez-la. On ne compte pas avec un hôte. »" },
      { with: "carillon", text: "Ses yeux descendent sur Carillon. Pour la première fois, sa figure remue. « Le troisième. Je t'ai remonté de mes mains, quand j'étais... quand mon père était sous-maître ici. » *Dong*, fêlé. « Carillon reconnaît la voix de monsieur le sous-maître. Elle n'a pas changé. Monsieur le sous-maître a envoyé Carillon premier et Carillon second le vingt et un, à dix heures. Carillon demande où ils sont. » L'homme en gris sourit, à peine. « Où il fallait qu'ils s'arrêtent. »" },
      { with: "jehan", text: "« Et le soldat Coudrier. » Jehan a sursauté. « Je savais votre nom le jour où vous avez signé. Cela m'amusait, d'en avoir un dans mes casaques. Vous avez déserté avec quinze jours de solde, que je vous dois. »" },
      "Il montre, du bout de sa canne, l'escalier du nord. « Je monte là-haut une fois l'an. Il y a douze anneaux, et je mets douze. Il disait que j'étais trop intelligent pour sa porte. Soixante ans que je cherche si c'était un compliment. »",
    ],
    choices: [{ label: "Attendre ce qu'il veut", to: "K11r_aubespin_offre", big: true }] },

  K11r_aubespin_offre: { act: "III", title: "Le prix d'un chiffre", place: "guilde", ambiance: "chateau",
    text: [
      { if: OUVERT, text: "« Vos sabots montent cet escalier, et les anneaux ont changé de place. Vous avez ouvert. » Il le dit sans colère, avec une sorte de respect las. « Une personne des champs, en un après-midi. »" },
      { if: { not: OUVERT }, text: "« Vous n'avez pas ouvert. Vous ouvrirez peut-être : ceux qui écrivent dans vos Cahiers savent des choses que je n'ai pas eues. »" },
      "« Ce qu'il y a dedans, je vous le laisse : un lit de sangle, une table, la copie d'un livre que je sais par cœur. Je veux le chiffre. Je veux savoir ce qu'il fallait savoir. » Il a parlé plus bas. C'est la première chose qu'il dit qui ne soit pas polie.",
      "« Voici mon prix. Vous avez une sœur à Roquebise. Cinq ans, un sarrau, une poupée sans bras : on m'a fait le rapport de la maison. Vous lui avez donné une pincée, pour dix phrases : mes gens ont trouvé devant elle la marque de vos deux genoux. Je lui donne cent ans. Cent ans debout, dans un monde tranquille, à l'âge qu'elle voudra. Pour douze anneaux. » Il lève un doigt ganté. « Vous trouvez le marché inégal. C'est que vous n'avez jamais buté soixante ans contre une porte. »",
      { with: "rouget", text: "Rouget te tire par la manche, de derrière le pilier. Il est blanc. « Dis pas oui, souffle-t-il. Dis pas non non plus. Avec ceux-là, on dit rien et on court. »" },
    ],
    choices: [
      { label: "« Onze qu'on nomme. Le douzième sur la face lisse. »", hide: { not: { any: [OUVERT, { has: "r:lettre_coudrier" }, { has: "monde:combinaison" }] } }, fx: { flag: "r:serrure_vendue", stock: { sable: 6 }, regard: { aubespin_vieux: "redevable" } }, to: "K11r_aubespin_fin", big: true },
      { label: "« Douze. Partout. Comme tout le monde. »", fx: { flag: "r:serrure_mentie", regard: { aubespin_vieux: "curieux" } }, to: "K11r_aubespin_fin" },
      { label: "« Vous avez eu soixante ans. Cherchez-en soixante autres. »", fx: { flag: "r:serrure_refusee", regard: { aubespin_vieux: "distant" }, ep: ["perso", 500] }, to: "K11r_aubespin_fin", big: true },
    ] },

  K11r_aubespin_fin: { act: "III", title: "En redescendant, il salue", place: "guilde", ambiance: "chateau",
    text: [
      { if: { has: "r:serrure_vendue" }, text: "Il ne bouge pas. Puis il monte l'escalier, lentement, sans sa canne, qu'il a laissée contre la rampe. Tu entends les douze cliquets. Tu entends le déclic grave. La porte tourne." },
      { if: { has: "r:serrure_vendue" }, text: "Il reste sur le seuil, de dos, le temps d'un Pater. « Rien. Il fallait y mettre rien. » Sa voix est descendue jusqu'à toi, très nette. « Une chose qu'on ne tient pas. Il me l'a répété vingt ans, à table, et j'ai cru qu'il prêchait. Il me donnait le chiffre. »" },
      { if: { has: "r:serrure_vendue" }, text: "Il referme lui-même, et brouille les anneaux, d'un revers de main. Quand il redescend, il a sa figure de tous les jours. Il tire de son gilet une fiole bouchée de cire noire et la pose sur la dernière marche. « Des arrhes. Le reste à Roquebise, quand le monde sera tranquille. Je paie toujours. C'est même ce qu'on me reproche. »" },
      { if: { has: "r:serrure_mentie" }, text: "Il sourit, pour de bon, et cela lui fait soudain la figure d'un homme de trente ans. « Douze partout. Je l'ai fait le premier soir, le vingt-deux juin 541, avec le bruit de la ville arrêtée dans les oreilles. Vous mentez mal, et vous mentez pour un mort. Cela me donne une idée du chiffre : il doit être de ceux qu'on a honte de vendre. »" },
      { if: { has: "r:serrure_refusee" }, text: "Il te regarde un long moment, de l'œil gris, puis de l'œil brun. « Soixante autres. Vous ne savez pas ce que vous dites, et vous le dites très bien. » Il incline la tête. « Il aurait répondu cela. Mot pour mot, je crois. C'est désagréable, à mon âge, de retrouver une voix. »" },
      { if: { has: "r:tour_noire" }, text: "« À demain, donc. Onze heures. L'escalier de la Tour sera gardé par des gens à moi, qui ne lisent pas de romans. Ne les faites pas tuer : ils ont des mères, à ce qu'on m'assure. »" },
      { if: { not: { has: "r:tour_noire" } }, text: "« À demain, donc. Onze heures, au parvis. Il y aura du monde, et une très vieille dame dans une chaise, que vous serez content de voir. »" },
      "Il reprend sa canne. Il traverse la cour dans sa rigole, et au portail il porte deux doigts à son chapeau, à gauche, à droite, pour chacun des hommes de cuivre. Puis le petit coup sec descend la rue du Cadran, et s'éteint.",
      { with: "jehan", text: "Jehan se décolle du pilier. Il a la sueur aux tempes. « Quinze jours de solde, dit-il. Il tient ses comptes. Il a des comptes pour tout le monde. »" },
    ],
    choices: [{ label: "Aller au cadran solaire", to: "K11r_none", big: true }] },

  K11r_none: { act: "III", title: "None, sur un marbre", place: "guilde", ambiance: "chateau", takes: "evening",
    text: [
      "La cour a repris son silence. L'homme de cuivre des arcades s'est remis en marche. Dans le gris, la rigole a un bord neuf, que la chute est déjà en train de poudrer.",
      "Tu t'assois sur la marche du bas, sous les deux mots. L'ombre du style est sur le douze. De l'autre côté de cette pierre, il y a soixante ans, c'est l'heure de none, et sept hommes entrent dans une salle dont on ferme les portes.",
      { after: "r:sait_lesquelles", text: "Tu as une chose à écrire, ce soir, que tu n'as pas envie d'écrire. Tu tailles ton charbon plus longtemps qu'il ne faut." },
      { after: "r:lu_ansel", text: "Tu penses à une veuve, rue de la Poulie, sous l'enseigne du Dé. Hier, là-bas, elle a encore ses oreilles à elle." },
    ],
    choices: [{ label: "Ouvrir le Cahier", to: "B11", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    baguette_bronze: { name: "Baguette à bout de bronze", kind: "divers", keep: true, price: 0, desc: "Une baguette de buis, longue d'une coudée, ferrée de bronze à un bout. Elle délie ce que tient le cuivre, et son bout a la grosseur d'une certaine rainure." },
  },
  puzzles: {
    p_anneaux: { kind: "molettes", title: "Les douze anneaux",
      text: "Un tambour de bronze gros comme un pain, fait de douze anneaux enfilés sur un même axe. Chaque anneau tourne sous le doigt avec un cliquet doux, et montre par une petite fenêtre l'une de ses treize faces : douze chiffres, de I à XII, et une face lisse, où l'on n'a rien gravé. Elle paraît ici comme un point.",
      wheels: [HEURES, HEURES, HEURES, HEURES, HEURES, HEURES, HEURES, HEURES, HEURES, HEURES, HEURES, HEURES],
      answer: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "·"],
      hint: [
        { if: { has: "monde:combinaison" }, text: "L'écriture penchée, lue à une borne : « Chaque anneau sur son Heure, le premier au I, jusqu'au onzième. Le douzième sur la face lisse. »" },
        { if: { all: [{ has: "r:lettre_coudrier" }, { not: { has: "monde:combinaison" } }] }, text: "La lettre du Grand Maître : « Vous savez la serrure, puisque Carillon vous a ouvert son tube : c'est la même question. »" },
        { if: { all: [{ has: "r:sait_treize" }, { not: { has: "monde:combinaison" } }] }, text: "Sur l'épure du vieux Gobin, rue des Aiguilliers : treize cases, douze chiffres. « Lisse. B. y tient. »" },
        { if: { all: [CARILLON, { not: { has: "monde:combinaison" } }] }, text: "Carillon, contre le mur : « Le Grand Maître ouvrait sans regarder. Sa main s'arrêtait onze fois, dans l'ordre. »" },
      ],
      wrongText: "Le tambour ne rend rien. Les douze anneaux retombent d'un cran, avec un petit bruit de dents.",
      tryLabel: "Appuyer sur le tambour",
      leave: "Lâcher le tambour",
      label: "Poser la main sur le tambour",
      win: { to: "K11r_cabinet" } },
  },
} };
