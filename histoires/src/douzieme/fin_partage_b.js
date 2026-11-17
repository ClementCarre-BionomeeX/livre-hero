// Le Douzième Coup · dénouement « partage », part B : the afternoon of each noon (541 : `Fpj_parvis` ; 601 : `Fpr_parvis`),
// the evening page at the hour-stone (`Fp_soir`, `monde: "cahier"` : `monde:p_an` one page every Grand Midi |
// `monde:p_pages` every evening until the last leaf | `monde:p_adieu` one night, then closed), the two roads, and three
// end passages (`fin:partage`). Flags : `monde:p_jeune_etabli` | `monde:p_jeune_banni` (541, the young Aubespin) ;
// `monde:p_ville_heritiers` | `monde:p_ville_ouverte` | `monde:p_ville_close` (601, the empty city) ; `monde:p_jarres`
// (the old man's jars go to the Lents) ; `r:p_carillon` ; `j:p_loupe` ; `monde:p_depot` (something buried at the stone).
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var SORTIS = { has: "monde:noyers_sortis" };
var REMEDE = { has: "monde:aelis_remede" };
var REFUSE = { has: "monde:jeune_refuse" };
var DICTEE = { has: "monde:p_dictee" };
var PREUVE = { any: [{ has: "monde:oderic_affiche" }, { has: "monde:lettres_garde" }, { has: "monde:lu:lettre" }, { has: "monde:lu:sceau" }, { has: "monde:oderic_demasque" }] };
var AN = { has: "monde:p_an" }, PAGES = { has: "monde:p_pages" };

Object.assign(P, {
  // ===== 541 : a city that dines
  Fpj_parvis: { act: "V", title: "Une fête où tu es seul{e} à savoir", place: "tour", ambiance: "ville", hub: true, backName: "le parvis",
    text: [
      { first: true, text: "Le parvis danse. On a roulé des barriques au pied de la fontaine, les tréteaux du Mystère se vident, des enfants courent après un cerceau. Cinq mille personnes ont crié *Douze !* et sont passées à table. Elles trouvent seulement que la Patiente a pris son temps entre le onzième et le dernier, et elles en plaisantent." },
      { first: true, text: "Tu marches au milieu d'elles avec tes paumes en sang. Tu les as toutes vues grises. Cette femme à la coiffe avait un ruban bleu au poignet. Ce gros homme, une tabatière en moins. Tu les regardes boire, et tu as envie de leur toucher l'épaule à chacun, pour vérifier." },
      { first: true, text: "Tu as le Cahier dans ta chemise. Il pèse. De temps en temps, tu poses la main dessus, comme on tâte une bourse dans une foule." },
      { again: true, text: "Le parvis de 541. On danse. L'ombre de la Tour tourne sur les pavés." },
    ],
    choices: [
      { label: "Le débouché de la rue aux Oies", hide: { seen: "Fpj_line" }, to: "Fpj_line" },
      { label: "Le Grand Maître, qui sort de la Tour avec un homme en gris", hide: { seen: "Fpj_tribunal" }, to: "Fpj_tribunal" },
      { label: "Le Palais, par la porte des Simples", hide: { seen: "Fpj_palais" }, to: "Fpj_palais" },
      { label: "Une hotte, au bord de la place", hide: { seen: "Fpj_perrine" }, to: "Fpj_perrine" },
      { label: "La colline des Jurés", hide: { seen: "Fpj_colline" }, to: "Fpj_colline" },
      { label: "La ruelle des Sonneurs : l'ombre de la Tour a passé le coin", to: "Fp_soir", big: true },
    ] },

  Fpj_line: { act: "V", title: "Deux nattes, et une boîte de fer", place: "tour", ambiance: "ville",
    text: [
      { if: { not: SORTIS }, text: "Josse Noyer est descendu de sa borne. Il a quarante-quatre ans, une blouse neuve, son chapeau sur la tête, et il tient par la main une petite de neuf ans qui tire dans l'autre sens. Elle a deux nattes, des sourcils d'un seul trait, une boîte de fer sous le bras." },
      { if: SORTIS, text: "Une charrette bleue entre sur la place par la rue aux Oies. Ce sont les Noyer. Ils avaient passé le septième peuplier ce matin, comme tu l'avais voulu ; ils ont entendu douze coups, de la route, et la petite a tant fait qu'on a tourné la jument. Elle saute du marchepied avant l'arrêt : deux nattes, des sourcils d'un seul trait, une boîte de fer sous le bras." },
      "Elle te voit. Elle lâche tout, et elle vient droit sur toi, en fendant les danseurs. Elle s'arrête à un pas. Elle te détaille.",
      "« T'as tiré sur quelque chose. » Elle te prend les mains, les retourne. « Et t'as pleuré. T'as la figure de quand la chatte a eu ses petits morts. » Elle regarde autour de toi. « T'avais dit que vous étiez deux. Que l'autre était loin. C'est où, loin ? »",
      "Tu t'accroupis. Tu regardes ces sourcils. Tu les as vus blancs, au-dessus de lunettes remontées, pendant neuf ans. Elle t'a appris à lire sur un almanach. Elle t'a dit : *à moi, donc.* Elle a neuf ans, et elle ne le dira jamais, puisque rien de ce qui l'y a menée n'aura lieu.",
      "« Loin, c'est là où l'autre est resté{autre:e}. On peut s'écrire. — C'est tout ? — C'est tout. » Elle réfléchit. Elle ouvre sa boîte. Elle en tire une vis, la regarde, la remet ; puis un ruban rouge, qu'elle te noue au poignet, en serrant, la langue entre les dents. « C'est pour que tu perdes pas ta main. T'as l'air de quelqu'un qui perd des choses. »",
      "Josse vous a rejoints, le chapeau à la main. « Elle vous a adopté{e}, dit-il. Je vous préviens : elle ne rend rien. » Tu dis que tu le sais.",
    ],
    choices: [{ back: "Fpj_parvis" }] },

  Fpj_tribunal: { act: "V", title: "Un homme jugé sur une vie qu'il n'a pas faite", place: "tour", ambiance: "chateau",
    text: [
      "Le Grand Maître a fait fermer la porte de fer. Il a rangé les neuf dans la salle des poids, au pied de la vis, sans cire, les mains au dos. L'homme de trente ans est debout au milieu.",
      "« La Guilde juge où la faute s'est faite. » Il parle du nez, les talons joints. « La faute est d'avoir tenu ce levier, et nous étions deux à le tenir : je me récuse. Elle est aussi d'avoir vendu une chambre à un duc, et des cuves à soi-même. De cela, je n'ai qu'un témoin. » Il te désigne de la moustache. « Voici ce témoin. Il a vu cet homme-ci. Il a vu l'autre, celui que cet homme serait devenu, et que personne dans cette salle ne verra jamais. Qu'il dise les deux. »",
      "Tu dis les deux. Le billet sous la loupe, *pour demain* ; les cartons ; les douze berceaux. Puis l'autre : soixante ans, la rosée à la pincée, les fossés. Les neuf écoutent. Ils regardent leur sous-maître comme on regarde un homme dont on vient de lire la fin.",
      { if: REFUSE, text: "« Il a lâché, dis-tu. On lui a montré la marge, et il a ouvert les mains. Je ne l'ai pas vu : on me l'a dit dans le fil. La personne qui l'a vu est à soixante ans d'ici. »" },
      { if: { not: REFUSE }, text: "« Il a tenu, dis-tu. Jusqu'au bout. On lui parlait avec sa propre voix, plus vieille ; et il a fallu lui ouvrir les mains. La personne qui l'a fait est à soixante ans d'ici. »" },
      { if: DICTEE, text: "Puis tu relèves ta manche. « J'ai une ligne pour lui. Elle est de l'autre. Il l'a dictée, à midi passé, dans une cave vide. » Tu lis : *Melchior. J'ai eu ce que tu veux. Soixante ans et quarante mille gens. Personne à qui le montrer. Le seul homme qui m'ait tenu tête a une moustache. Il est à trois pas de toi. Je l'ai laissé debout soixante ans pour ne pas l'entendre. Écoute-le.*" },
      { if: DICTEE, text: "Il y a un silence. L'homme de trente ans a reconnu la mesure large. Il regarde le Grand Maître. Le Grand Maître regarde le plafond, très raide, comme un homme à qui l'on vient de faire un compliment par huissier." },
      "« Dites ce qu'on en fait », conclut le vieillard. « Je signerai. »",
    ],
    choices: [
      { label: "« Qu'il reste. Au dernier établi, à portée de votre voix. »", fx: { flag: "monde:p_jeune_etabli" }, to: "Fpj_tribunal_fin" },
      { label: "« Qu'il parte. Sans tablier, avant ce soir. »", fx: { flag: "monde:p_jeune_banni" }, to: "Fpj_tribunal_fin" },
    ] },

  Fpj_tribunal_fin: { act: "V", title: "Signé Coudrier", place: "tour", ambiance: "chateau",
    text: [
      { after: "monde:p_jeune_etabli", text: "« Au dernier établi, répète le Grand Maître. Sous la fenêtre du nord. Il fera des goupilles jusqu'à ce qu'il cesse de compter ce qu'elles rapportent. Et il descendra ici, chaque matin, écouter ce pas. » Il se tourne vers l'homme. « Vous dînerez à ma table. Je parle en mangeant. Vous écouterez : il paraît que c'est une chose qui vous a manqué. »" },
      { after: "monde:p_jeune_etabli", text: "L'homme de trente ans incline la tête. Il défait lui-même ses manchettes de sous-maître, et il les pose sur la table des poids, l'une sur l'autre." },
      { after: "monde:p_jeune_banni", text: "« Avant ce soir, répète le Grand Maître. Par la porte d'Occident. Vous laisserez vos outils. » L'homme de trente ans défait son tablier gris. Il le plie en quatre. Il cherche à qui le rendre ; l'enfant au maillet tend les bras, et le reçoit." },
      { after: "monde:p_jeune_banni", text: "Il passe devant toi. « Je ne ferai pas les cuves, dit-il, très bas. Je vous en donne ma parole, qui ne vaut rien, et dont il faudra bien que je vive. » Il sort. On entend son pas dans la ruelle, jusqu'au coin." },
      "Le Grand Maître signe, debout, sur la table des poids. Il sable. Il te tend la plume. « Le témoin signe aussi. »",
      "Tu signes. Tu regardes la page : il y a ta ligne, en penché, et une place vide à côté. Le vieillard l'a vue aussi. « Il manque une signature. Elle était du jugement. Vous la demanderez ce soir, par où vous savez ; et vous me direz ce qu'on en pense, là-bas, dans cette écriture carrée. Je tiens à l'avis de mes pairs. »",
    ],
    choices: [{ back: "Fpj_parvis" }] },

  Fpj_palais: { act: "V", title: "Un bas de page, sous une porte", place: "palais", ambiance: "chateau",
    text: [
      "On te laisse entrer par la porte des Simples. Les gardes blancs s'écartent : la Reine est rentrée de la Tour à pied, et elle a dit un mot au capitaine.",
      "La chambre d'Aélis est au bout d'une galerie. On a couché l'enfant. Le médecin Anthelme est à la fenêtre, un petit homme sec, en noir.",
      { if: REMEDE, text: "La fiole de grès est sur le chevet, débouchée. « Dix-huit, dit Aélis. J'en ai pris une. C'est très mauvais. » Anthelme flaire le goulot, pour la dixième fois. « Du fièvrier. Une écorce de teinturier. D'où tenez-vous cela ? » Tu dis : d'un pays où l'on en plante un par enfant, dans les cours." },
      { if: { not: REMEDE }, text: "Tu lui tends le bas de la page. Il le prend avec deux doigts. Il lit les bâtons. « *Gros comme un pois, bouilli, matin et soir, dix-neuf jours.* C'est écrit par un charbonnier, et prescrit comme par un confrère. » Il relit le premier mot. Il se frappe le front. « Du fièvrier ! Maugras en a des balles jusqu'au toit, rue des Teinturiers ! » Il est dans la galerie avant d'avoir fini." },
      "La Reine est assise au bord du lit. Elle te regarde. « Vous avez l'air d'avoir enterré quelqu'un. — Non, Madame. On s'écrit. — Alors écrivez ceci, de ma part. » Elle cherche. Elle a l'habitude des édits, et celui-ci lui résiste. « Que la Reine d'Aurime doit sa fille à une personne qu'elle ne pourra ni anoblir, ni doter, ni même saluer. Qu'elle n'a jamais rien dû d'aussi incommode. Et qu'elle le doit quand même. »",
      { if: PREUVE, text: "« Le duc ? — À la Louvière. Il rentre à la brune. » Elle a dans sa manche ce qu'on lui a remis. « Il me rendra son épée ce soir, devant douze gentilshommes. Vous pourrez écrire cela aussi, si l'on s'y intéresse, là où il a eu une statue. »" },
      { if: { not: PREUVE }, text: "« Le duc ? — À la Louvière. Il rentre à la brune. » Elle n'a ni lettre, ni sceau : votre parole, à deux, dont une moitié est à soixante ans. « Il soupera en face de moi. Je ferai goûter mes plats. C'est un règne comme un autre, et j'en connais à présent le prix. »" },
      "Aélis te tire par la manche. « Et la personne qui sent le charbon. Elle viendra ? » Tu dis que non. Elle fronce le nez. « Alors dis-lui que j'ai compté. Dix-neuf moins un. Et que je garde le cheval bleu pour si jamais. »",
    ],
    choices: [{ back: "Fpj_parvis" }] },

  Fpj_perrine: { act: "V", title: "L'almanach de l'année", place: "tour", ambiance: "ville",
    text: [
      "Tu la trouves au bord de la place, sa hotte au dos, qui vend. Elle a dix-sept ans, un drap rouge au cou, et un sourire de côté qui s'en va quand elle te voit.",
      "« Tu avais dit que tu serais mort{e} ou parti{e}. » Elle te regarde les mains, puis la figure. « Tu es ici. Et tu as l'air d'être parti{e} quand même. »",
      "Tu lui dis ce que tu peux. Que tu restes. Que la personne avec qui tu marchais est rentrée dans son pays, par un chemin qui ne se refait pas ; et qu'il reste, entre vous, du papier.",
      "Elle écoute. Elle a mordu des pièces toute sa vie, et elle sait le poids d'une chose qu'on ne dit qu'à moitié. Elle ne demande pas l'autre moitié. Elle pose sa hotte, fouille dans la troisième pile, et te tend un almanach.",
      "« L'année 541. Les lunes, les foires, les jours de marché, la crue de la Thiorne à la bonne date, garantie par moi. Deux sous. Je te le donne. » Elle te le met dans la main. « Si tu écris à quelqu'un de loin, il faut bien qu'il sache quel jour il est chez toi. Arrache une page par lettre. Il y en a pour un an. Après, tu m'en rachèteras un. »",
      "Tu regardes l'almanach. Le papier est plat. Il passera, peut-être, entre deux pages cousues de rouge. Elle te regarde le regarder.",
      "« Je serai à Arvoise pour la Saint-Michel, dit-elle. Puis ici, à la Chandeleur. Je passe, c'est mon métier. Toi, tu restes, c'est le tien, à ce que je comprends. Ça fait qu'on se croisera. » Elle recharge sa hotte. « ...deux sous ! » crie-t-elle à une cliente, le bras levé, et elle te tourne le dos pour que tu ne voies pas sa figure.",
    ],
    choices: [{ back: "Fpj_parvis" }] },

  Fpj_colline: { act: "V", title: "Un établi, sous la meilleure fenêtre", place: "guilde", ambiance: "ville",
    text: [
      "La cour des Jurés. Le père Loquet s'est réveillé sur son tabouret et jure qu'il n'a pas dormi. On dispute déjà, sous la galerie, du temps qu'il y a eu entre le onzième et le dernier : *un Pater*, dit l'un ; *à peine un Ave*, dit l'autre.",
      "Tu montes à l'atelier du levant. Dix établis. Le tien est sous la meilleure fenêtre, ciré, avec ses outils rangés par taille sur une peau de chamois, et la loupe à manche d'ébène où l'on a gravé tes deux lettres.",
      { if: { has: "monde:p_jeune_etabli" }, text: "Celui qui l'a commandée fera des goupilles sous la fenêtre du nord, à partir de demain. Il lèvera les yeux quand tu la prendras." },
      { if: { has: "monde:p_jeune_banni" }, text: "Celui qui l'a commandée a passé la porte d'Occident, à l'heure qu'il est, sans ses outils." },
      "Tu t'assois. C'est une place. Tu en as une. Tu sais des choses qu'on n'a pas encore trouvées ici : l'échappement à ancre, le spiral, la fusée à chaîne que Line te faisait démonter les yeux bandés. Tu les sortiras une à une, en ayant l'air de chercher.",
      { if: { secret: "j_rester" }, text: "Tu avais voulu cela. Tu t'étais vu{e} à ce banc, le soir, dans la paille d'une grange, sans oser l'écrire. Tu y es. Tu regardes l'établi d'à côté, qui est vide, et où personne n'était jamais censé s'asseoir. Il te manque, celui-là, et il n'a pourtant jamais été promis à personne." },
      "Tu sors le Cahier. Tu l'ouvres sur le chamois, pour voir. La page reste comme elle est. On n'est pas sur une borne : ce sont deux cahiers. Tu le refermes. Il y a des endroits pour cela, et tu vas apprendre à les connaître tous.",
    ],
    choices: [
      { label: "Prendre la loupe : elle est à ton nom", fx: { flag: "j:p_loupe" }, to: "Fpj_parvis" },
      { label: "La laisser sur le chamois", to: "Fpj_parvis" },
    ] },

  // ===== 601 : a city where they were
  Fpr_parvis: { act: "V", title: "Cinq mille rubans", place: "tour", ambiance: "ville", hub: true, backName: "le parvis",
    text: [
      { first: true, text: "Tu sors sur le parvis. Il est plus grand que tu ne l'as jamais vu : il n'y a plus personne dessus pour en cacher le pavé." },
      { first: true, text: "Ils étaient cinq mille, la bouche ronde, depuis soixante ans. Tu connaissais le chemin entre eux à quatre pattes : sous le coude de la femme au panier, le long du hallebardier. Il reste la poussière, percée de dix mille semelles propres. Et les rubans. Cinq mille rubans bleus, noués en boucle, tombés chacun où il y avait un poignet. Le vent les remue un peu. Ils ont l'air d'une semaille." },
      { first: true, text: "Autour, il y a ceux d'ici : trois cents Veilleurs en mante bleue, qui se taisent ; la cour de la Régente, sur la passerelle, en habits de 601 ; des manteaux blancs, des casaques noires, mêlés, qui ont oublié de se battre. Ils regardent le pavé. Puis, un par un, ils te regardent, toi, qui sors de la Tour." },
      { first: true, text: "Très loin, par-dessus les toits, il arrive un bruit que personne ici n'a jamais entendu : des cloches. De petites, de paroisse, à une lieue, à deux. Les villages des cercles sonnent leur premier midi depuis vingt ans, depuis quarante. Là-bas, on se réveille." },
      { again: true, text: "Le parvis de 601. Les rubans, par terre. Les cloches des villages, au loin." },
    ],
    choices: [
      { label: "La chaise à sangles, au pied de l'estrade", hide: { seen: "Fpr_line" }, to: "Fpr_line" },
      { label: "Les mantes bleues, et leur Doyenne", hide: { seen: "Fpr_ysoline" }, to: "Fpr_ysoline" },
      { label: "L'estrade du Serment", hide: { seen: "Fpr_regente" }, to: "Fpr_regente" },
      { label: "La plaque de bronze, au pied de l'estrade", hide: { seen: "Fpr_jehan" }, to: "Fpr_jehan" },
      { label: "Ceux de la glane, sous l'auvent du cirier", hide: { seen: "Fpr_glaneurs" }, to: "Fpr_glaneurs" },
      { label: "L'homme de cuivre, à la porte de la Tour", hide: { any: [{ seen: "Fpr_carillon" }, { not: { has: "r:carillon" } }] }, to: "Fpr_carillon" },
      { label: "Le vieil homme qui sort, sur sa canne", hide: { seen: "Fpr_canne" }, to: "Fpr_canne" },
      { label: "La ruelle des Sonneurs : l'ombre de la Tour a passé le coin", to: "Fp_soir", big: true },
    ] },

  Fpr_line: { act: "V", title: "Celle qui regarde derrière toi", place: "tour", ambiance: "ville",
    text: [
      "Elle est où on l'avait mise : à quarante pas de la porte de bronze, sur une chaise de malade, sanglée aux poignets et à la taille. Les deux noirs qui la gardaient sont partis voir. Elle a soixante-neuf ans, des lunettes remontées sur le front, des sourcils d'un seul trait, tout blancs. On l'entend respirer de dix pas.",
      "Tu défais les sangles. Elle te laisse faire. Elle regarde derrière toi, vers la porte de la Tour, avec une patience de soixante ans. Tu finis la dernière boucle. Elle regarde toujours.",
      "« Il y a personne derrière, dis-tu. On l'a dit tous les deux. {autre} est là-bas. Avec eux. » Tu montres le pavé, les rubans. « Moi ici. »",
      "Elle ne bouge pas. Puis elle ôte ses lunettes de son front, les essuie à sa manche, et les remet au même endroit, où elles ne servent à rien. « Tous les deux. » Sa voix siffle. « J'avais compté quatre fins. J'ai eu soixante ans pour les compter, et il m'en vient une cinquième, par deux enfants qui ouvrent la bouche ensemble. »",
      { if: { secret: "j_malade" }, text: "« {autre} m'a écrit, pour vous. Que vous êtes malade. Qu'on vous avait promis de pas me le dire. » Elle a un souffle qui serait un rire. « Et à toi, j'avais fait promettre de ne pas dire que tu le savais. Me voilà trahie des deux côtés, par écrit. C'est bien. C'est ce que je voulais : des gens qui se disent les choses. »" },
      { if: { not: SORTIS }, text: "Elle tourne enfin la tête, vers le débouché d'une rue qui tombe, entre le cirier et le marchand de peignes. Il y avait là un homme, sur une borne, la main en visière. Il y a un chapeau de feutre, par terre, le fond en l'air. « Il est rentré, dit-elle. Je lui ai ramassé ce chapeau soixante fois. Il vient de le remettre sans moi. »" },
      { if: SORTIS, text: "« Mon père est mort en 563, dans son lit. Vous les aviez fait sortir avant la fête. Je n'avais personne sur cette place. » Elle regarde les rubans. « Je n'y ai plus personne non plus dans cet escalier. Me voilà à jour. »" },
      "« Y a une petite, là-bas, dis-tu. Neuf ans, deux nattes, une boîte de fer. Elle a son père. Elle a {autre}. C'est écrit dans le Cahier, de ce midi. » Tu le sors. Tu le lui ouvres sur les genoux, à la page.",
      "Line lit le penché. Elle lit longtemps, pour trois lignes. « Alors elle a les deux, dit-elle. La gamine. Elle a tout ce que j'ai attendu, et elle ne saura jamais ce qu'il a coûté. » Elle referme le Cahier, à plat, de ses deux mains. « C'est le sort des horlogers. On règle, et c'est un autre qui a l'heure. »",
      "Elle te le rend. « Tu as une borne, ce soir. Tu écriras que j'ai dit : *tu as mis le temps.* On comprendra, là-bas, que je suis contente. » Elle tousse. « Et ramène-moi aux Trois-Noyers. Je ne mourrai pas dans une ville, surtout vide. »",
    ],
    choices: [{ back: "Fpr_parvis" }] },

  Fpr_ysoline: { act: "V", title: "Trois mille pages, et un mot à y mettre", place: "tour", ambiance: "ville",
    text: [
      "La Doyenne Ysoline est assise sur une marche, son registre ouvert sur les genoux. Trois mille pages : chaque dormant de la ville, sa rue, son métier, son ruban. Elle a soixante-dix ans. Elle tient sa plume en l'air, et elle ne sait pas quoi écrire.",
      "« Toi. » Elle a pour les glaneurs le regard qu'on a pour les rats d'église ; elle le met de côté. « Tu sors de là. Où sont-ils ? On m'a pris quarante mille personnes en un coup de cloche. J'ai ma grand-mère là-dedans. Dentellière, rue de la Poulie. Je lui renoue son ruban depuis mes huit ans. »",
      "Tu t'assois sur la marche, à côté d'elle. Ce n'est pas une place pour toi, et elle te la laisse.",
      "« Ils sont chez eux. En 541. À l'heure qu'il est, ils dînent. » Tu cherches comment le dire à quelqu'un qui a tenu ce livre toute sa vie. « Le coup est tombé des deux côtés. Là-bas, on l'a rendu aussi. Ils ont eu leur midi. Ils ont jamais su qu'ils l'avaient manqué. Votre grand-mère a vingt-deux ans, elle a fini son cri, et elle rentre rue de la Poulie faire sa dentelle. »",
      "« Tu le sais ? — On me l'écrit. » Tu montres le Cahier. Elle regarde la toile, le fil gris. Elle ne demande pas à lire : elle a manié assez de papiers pour reconnaître celui qui est vrai.",
      "Elle se tait longtemps. Autour, les mantes bleues ramassent les rubans, un par un, en lisant les noms à mi-voix. « Nous les attendions ici, dit-elle enfin. Soixante ans. Nous avions répété ce que nous leur dirions. Et ils se sont réveillés ailleurs, sans nous, sans une parole. » Elle regarde sa page. « C'est ce que nous demandions. Nous n'avions pas demandé d'y être. »",
      "Elle trempe sa plume. Elle écrit, en face du premier nom, un seul mot, de sa belle main d'abbaye : *Rentré.* Puis au second. Elle en a pour l'été.",
      "« Il y a les autres, dis-tu. Ceux des cercles. L'abbaye, Arvoise, Roquebise. Ceux-là se réveillent ici. Ils vont sortir sur les routes sans savoir l'année. » Elle lève la tête. Elle ferme le registre d'un coup, comme on claque une porte. « Macaire ! Les chariots ! » Elle est debout. « On les attendait au mauvais endroit. Il reste les bons. »",
    ],
    choices: [{ back: "Fpr_parvis" }] },

  Fpr_regente: { act: "V", title: "Un royaume à rendre, et personne à qui", place: "tour", ambiance: "ville",
    text: [
      "L'estrade du Serment est tendue de bleu. La Régente Odeline y est debout, seule, en manteau blanc. Elle a vingt-huit ans. Elle tient encore à la main le rouleau qu'elle allait lire : *Je jure de rendre ce royaume à la Reine, le jour de son réveil.*",
      "Elle te voit. Elle te fait monter, d'un signe. Les manteaux blancs s'écartent. Tu grimpes sur des planches où l'on n'a jamais vu de sabots.",
      { if: { has: "monde:regente_alliee" }, text: "« Vous êtes de ceux qui m'ont montré les lettres. » Elle parle bas. « J'ai su ce matin d'où venait ma couronne. Je comptais la rendre à midi. J'ai monté cet escalier pour cela. »" },
      { if: { not: { has: "monde:regente_alliee" } }, text: "« On me dit que vous sortez de la Tour, et que vous savez. » Elle parle bas. « Dites-moi où est la Reine. Mon grand-père a juré, mon père a juré, j'ai juré dix fois. »" },
      "Tu le lui dis. La Chambre haute, le lit creusé, le cheval bleu sur la croisée. Que la Reine est en 541, vivante, avec sa fille, et qu'elle règne. « Vous lui avez rendu le royaume. Le sien. Pas celui-ci. Celui-ci, elle le verra jamais. »",
      "La Régente regarde le rouleau. « Alors ce serment est tenu, ou il est nul, et je ne sais lequel. » Elle a un rire très court. « Soixante ans de Régence au nom d'une dormante, et la dormante s'en va par une porte que je n'ai pas. Je suis reine de fait depuis midi, d'un pays dont la capitale est vide. »",
      "Elle regarde la ville : quarante mille maisons, les volets comme on les a laissés, la soupe dans les écuelles. « Il y a là le bien de quarante mille personnes. Les Veilleurs me diront que c'est à leurs familles. La Maîtrise, que c'est à qui le prend. Mon Conseil, que c'est à la Couronne. » Elle se tourne vers toi. « Vous avez marché là-dedans neuf jours. Vous êtes la seule personne qui sache à qui cela ressemble. Que feriez-vous de cette ville ? »",
    ],
    choices: [
      { label: "« Aux familles. Les Veilleurs ont les noms : chaque maison à ceux qui l'ont attendue. »", fx: { flag: "monde:p_ville_heritiers" }, to: "Fpr_regente_fin" },
      { label: "« À ceux qui se réveillent sans toit, et à ceux qu'on a fait partir des villages. Y a de la place. »", fx: { flag: "monde:p_ville_ouverte" }, to: "Fpr_regente_fin" },
      { label: "« À personne. Qu'on ferme les portes, et qu'on la garde comme elle est. Ils y ont laissé leur midi. »", fx: { flag: "monde:p_ville_close" }, to: "Fpr_regente_fin" },
    ] },

  Fpr_regente_fin: { act: "V", title: "Le premier édit d'une reine de fait", place: "tour", ambiance: "ville",
    text: [
      { after: "monde:p_ville_heritiers", text: "« Aux familles. » Elle pèse cela. « Trois mille pages de Rôle, et en face de chaque nom un petit-fils, une nièce, une fiancée de quatre-vingts ans. On se battra pour des armoires. » Elle hausse une épaule sous le manteau blanc. « On se bat mieux pour une armoire qu'on a attendue que pour une qu'on a trouvée. Soit. La Doyenne tiendra le partage, et vous lui direz ce qui manque : vous savez mieux que personne ce qu'on a sorti de ces maisons. »" },
      { after: "monde:p_ville_ouverte", text: "« À ceux qui n'ont pas de toit. » Elle regarde vers l'occident, où sont les cercles. « Il en sort vingt mille, à l'heure qu'il est, de villages dont les fermes ont été vendues, les terres données, par ma maison, pendant qu'ils dormaient. Et ceux des Trois-Noyers, qu'on a mis sur les routes cette semaine. » Elle hoche la tête. « On leur doit des murs. Il y en a. Ce sera une ville de gens qui auront tous perdu quelque chose : cela fait de bons voisins. »" },
      { after: "monde:p_ville_close", text: "« Fermée. » Elle regarde les rubans, par terre. « Une ville où il y a encore la soupe dans les écuelles, et qu'on laisserait refroidir. » Elle se tait. « Mon Conseil criera. Les Veilleurs comprendront : ils gardent déjà. On ne pille pas une maison dont les gens sont seulement sortis. » Elle roule son serment. « On y entrera un jour par an, à midi, pour sonner. Le reste du temps, elle sera à eux. »" },
      "Elle appelle un greffier. Elle dicte, debout, sans table. C'est court. Elle signe sur le dos d'un page.",
      "« J'ai une autre question, dit-elle, plus bas. Le Maître des Sables. On me dit qu'il a quatre-vingt-dix ans, qu'il est son propre père, et qu'il m'a vendu ma jeunesse à moi aussi, à la pincée, depuis mes vingt ans. Est-ce vrai ? » Tu dis oui. Elle touche sa joue, du bout des doigts, comme on tâte un fruit. « Je vieillirai donc. À partir de ce soir. On me dit que cela se fait très bien. »",
      "Elle te regarde descendre. « Vous ne m'avez rien demandé. — J'ai ce que j'étais venu{e} chercher. Elle est à dix lieues. » Elle a un signe de tête, de reine à quelqu'un qui a une affaire plus pressée qu'elle.",
    ],
    choices: [{ label: "Descendre de l'estrade", to: "Fpr_parvis" }] },

  Fpr_jehan: { act: "V", title: "Par qui vint", place: "tour", ambiance: "ville",
    text: [
      "La plaque est scellée au pied de l'estrade, en bronze, depuis l'an 543. *Ici fut pris, la main au levier, Barnabé Coudrier, Grand Maître, par qui vint la Dormante. Qu'il soit maudit.*",
      { if: { has: "r:jehan_nom" }, text: "Jehan est devant, sa pique à la main, sa casaque noire retournée pour qu'on n'en voie plus l'insigne. Il a vingt ans. Il a dit son vrai nom ce matin, tout haut. Il voulait le dire à quelqu'un qui joignait les talons, dans une cave ; il y est descendu ; il a vu deux semelles." },
      { if: { not: { has: "r:jehan_nom" } }, text: "Un jeune homme est devant, une pique à la main, sa casaque noire retournée pour qu'on n'en voie plus l'insigne. Il lit la plaque. Il a une façon de se tenir que tu as vue ce matin, dans une pincée, à un vieillard : les talons joints." },
      "« Il est parti », dit-il. Tu dis oui. « Je l'ai pas vu. Soixante ans qu'il était là, à la portée de n'importe quel glaneur, et moi je descends le jour où il s'en va. »",
      "Tu lui dis ce que tu as vu. Tu es la seule personne de ce midi qui l'ait entendu parler. Une voix sèche, du nez. Une moustache qui remuait quand il comptait. Qu'il était descendu pour arrêter le levier, pas pour le tenir ; qu'ils étaient deux à la barre, et que l'autre a fait écrire la Chronique. Qu'il a dit, une fois réveillé : *on aurait dû commencer par là.*",
      "« Ça, c'est de famille », dit le jeune homme. Il a les yeux rouges, et il rit.",
      "Il engage le fer sous le bronze. Il pèse. La plaque vient, avec un bruit de dent. Il la retourne. Le dos est nu, vert, propre. Il tire son couteau. « Tu sais écrire ? — En bâtons. — Ça ira. Dis-moi ce qu'il faut. »",
      "Tu cherches. Tu dis, lentement, et il grave : *ICI A TENU SOIXANTE ANS BARNABÉ COUDRIER. IL EST RENTRÉ.* Il scelle la plaque à l'envers, du talon. Elle tient mal. Il dit qu'il reviendra avec du plomb.",
    ],
    choices: [{ back: "Fpr_parvis" }] },

  Fpr_glaneurs: { act: "V", title: "Quarante mille maisons sans personne pour regarder", place: "tour", ambiance: "ville",
    text: [
      "Ils sont sous l'auvent du cirier : une douzaine, en guenilles, le sachet au cou. La Courtepaille est assise sur une borne, sa balance sur les genoux. Elle regarde le parvis vide.",
      "« Te voilà. C'est toi, le levier. » Elle se cure une dent de l'ongle du petit doigt. « Y a plus de lisière. Six cents glaneurs sans un fossé où se baisser. Et en face, quarante mille maisons ouvertes, pas un dormant dedans pour nous faire honte. » Elle crache. « J'ai rêvé de ça toute ma vie. Ça me coupe l'appétit. »",
      "Rouget est derrière elle, quatorze ans, roux, les poings dans les poches. Il sort une montre, à moitié. « Je l'avais prise à un gros, là, au troisième rang. Je voulais la lui remettre, pour voir sa tête. Il est plus là. Je la rends à qui ? »",
      "Tu regardes la montre. Tu dis que le gros est chez lui, en 541, et qu'il doit être en train de se tâter les poches.",
      { if: { has: "monde:p_ville_heritiers" }, text: "« Y a un édit, dis-tu. Les maisons vont aux familles. La Doyenne tient le partage. Elle voudra savoir ce qui manque. » La Courtepaille tape sur une de ses poches, qui en contient d'autres. « J'ai tout noté. De qui, quel jour, combien. Je note toujours. » Elle soupire. « Je vais vendre ma liste aux bleus. Ce sera la première chose honnête que j'aurai vendue, et la plus chère. »" },
      { if: { has: "monde:p_ville_ouverte" }, text: "« Y a un édit, dis-tu. La ville est à ceux qui ont pas de toit. » La Courtepaille lève enfin les yeux. Ils sont petits, gris. « J'ai pas de toit. J'en ai jamais eu. Aucun de ceux-là non plus. » Elle regarde la douzaine. « Tu veux dire qu'on entre par la porte ? Qu'on choisit ? » Elle se lève. C'est la première fois que tu la vois lâcher sa balance." },
      { if: { has: "monde:p_ville_close" }, text: "« Y a un édit, dis-tu. On ferme la ville. On la garde comme elle est. » La Courtepaille ricane. « Garder. Avec quoi ? Des mantes bleues ? » Tu la regardes. « Avec ceux qui connaissent tous les trous des murs. » Elle met un moment. « Tu me proposes d'être portière. À mon âge. » Elle se cure la dent. « Ça paie ? — Ça paiera. — Alors c'est un métier. »" },
      { if: { not: { any: [{ has: "monde:p_ville_heritiers" }, { has: "monde:p_ville_ouverte" }, { has: "monde:p_ville_close" }] } }, text: "« On va vous dire à qui c'est, dis-tu. Y a une estrade, là-bas, et quelqu'un dessus qui cherche. En attendant, touche à rien. » La Courtepaille te regarde. « Tu donnes des ordres. — Je demande. » Elle se cure la dent. « Je te donne jusqu'à ce soir. Par amitié, et parce que je sais pas par quelle rue commencer. »" },
      "Rouget remet la montre dans sa poche. Il la ressort. Il la pose sur le pavé, à côté d'un ruban, à peu près où était le gros. Il s'éloigne vite, les oreilles rouges, comme quelqu'un qui vient de voler à l'envers.",
    ],
    choices: [{ back: "Fpr_parvis" }] },

  Fpr_carillon: { act: "V", title: "Midi, pour personne", place: "tour", ambiance: "ville",
    text: [
      "L'homme de cuivre est debout à la porte de bronze. Il a marché soixante ans autour de ce Mont, sur un cœur de sable, à porter des messages d'une Guilde figée à des jurés figés.",
      "Il te voit. Il s'incline. Il sonne midi, douze petits coups clairs, de la cloche qu'il a dans la poitrine. Puis il tire d'entre deux côtes un papier plié, et il le tend.",
      "C'est l'écriture d'un homme qui parle du nez. Il l'avait donné à porter un matin de 541, pour une personne à qui l'on ne peut plus rien remettre de la main à la main. Tu le prends. « Je le recopierai ce soir. Sur une borne. Ça lui arrivera. » L'automate s'incline. C'est un trajet comme un autre : il en a fait de plus longs.",
      "Puis il reste là. Il n'a plus de message. Ceux qui l'envoyaient sont rentrés. Tu entends, dans sa poitrine, le grain couler : un bruit de sablier, plus lent que ce matin. Le puits ne sue plus. Quand ce qu'il a dans le cœur aura passé, il s'arrêtera, un pied levé, au milieu d'une rue.",
      "Tu as ton sachet au cou. Il y reste ce qu'il y reste. Tu n'en as plus besoin : le gris est retombé, et tu marcheras jusqu'à Roquebise en plein air.",
    ],
    choices: [
      { label: "Lui vider ton sachet dans la poitrine", fx: { flag: "r:p_carillon" }, to: "Fpr_carillon_fin" },
      { label: "Lui dire d'aller s'arrêter où il veut", to: "Fpr_carillon_fin" },
    ] },

  Fpr_carillon_fin: { act: "V", title: "Les heures d'une ville vide", place: "tour", ambiance: "ville",
    text: [
      { after: "r:p_carillon", text: "Tu défais le cordon. L'automate ouvre lui-même la petite porte, entre deux côtes : il y a là un entonnoir de laiton, poli par l'usage. Tu verses. Cela fait un fil gris, tiède, qui coule longtemps pour si peu. C'est six ans de fossés, de nuits froides, de pincées comptées une à une. C'est aussi ce que tu avais volé à une vieille par un soupirail." },
      { after: "r:p_carillon", text: "Il referme. Il sonne un coup, pour dire merci, ou pour dire l'heure : avec lui, c'est le même geste. « Tu sonneras les heures, dis-tu. Ici. Y a plus personne pour le faire. » Il s'incline. Il s'en va par le parvis, entre les rubans, de son pas égal, et tu sais que la ville vide aura midi tous les jours, pendant des années, d'une petite cloche qui marche." },
      { before: "r:p_carillon", text: "« Va où tu veux, dis-tu. T'as plus de maître. » Il penche la tête. C'est un ordre qu'on ne lui a jamais donné, et il lui faut le temps de le comprendre. Puis il s'incline, et il s'en va par le parvis, entre les rubans, de son pas égal." },
      { before: "r:p_carillon", text: "Tu le regardes. Il traverse toute la place. Il monte les trois marches de la Guilde, sur la colline, et il s'arrête devant la porte, tourné vers le dedans, un pied levé. C'est là qu'il voulait être. Il sonne un coup, tout seul, et le grain finit." },
      "Tu remets le cordon à ton cou. Il ne pèse plus rien, ou il pèse encore : tu ne sens pas la différence, et c'est la première fois depuis six ans.",
    ],
    choices: [{ back: "Fpr_parvis" }] },

  Fpr_canne: { act: "V", title: "Ce que pèse un homme qui ne peut plus prêter", place: "tour", ambiance: "ville",
    text: [
      "Il sort de la Tour sur sa canne, seul. Il a vieilli de vingt ans depuis midi moins le quart : la peau des tempes, le coin de la bouche. Le sable le quitte.",
      "Ses gardes le voient. Ils rectifient la position, par habitude, puis ils le regardent mieux. « Messieurs, dit-il. Il n'y aura pas de distribution ce soir. Le puits est guéri. Ce que vous avez dans vos sabliers est tout ce que vous aurez de moi. » Un vieux noir pose sa hallebarde contre le mur, proprement, comme on rend un outil. Les autres suivent. Une Garde de quarante ans se défait en dix pas.",
      "Il te rejoint. Il regarde les rubans. « J'ai tenu ces gens soixante ans. Je les connaissais par quartier. Je savais ce que rendait chacun, à la lisière, en rosée. » Il pousse un ruban du bout de sa canne. « Ils ont fait une chose que je n'avais prévue pour personne : ils sont partis sans rien me devoir. »",
      { if: DICTEE, text: "« Vous avez ma ligne. » Tu dis oui. « Elle passera, ou elle ne passera pas. Dans les deux cas, je l'aurai dite. Il paraît que c'est une satisfaction. Je n'en avais pas l'usage. »" },
      "« Il me reste, rue du Cadran, onze jarres de verre vert. C'est tout le sable qui existera jamais. Je comptais m'en faire vingt ans. » Il s'arrête. Il regarde, à quarante pas, une vieille femme sur une chaise, à qui l'on a ôté ses sangles. « Elle m'a pris un quart d'heure, celle-là, il y a neuf jours, avec une boîte de fer et un cahier. J'ai eu soixante ans pour trouver un adversaire. Il était dans une ferme. »",
      "Il y va. Tu le suis. Il s'arrête devant la chaise, appuyé des deux mains. « Madame. J'ai onze jarres. Vous avez les poumons d'un soufflet crevé. Une pincée par semaine vous mènerait à la Toussaint. Dix, à l'an prochain. Je vous les offre. C'est la première chose que j'offre : je ne garantis pas la manière. »",
      "Line le regarde par-dessus ses lunettes, qu'elle a descendues pour cela. « Gardez-en une pour vous. On ne meurt pas avant d'avoir rendu ses comptes, et vous en avez pour un an. Les dix autres iront aux Lents. Il y en a trois cents, sur ma lisière, qui ont un pied en l'air depuis vingt ans. Qu'ils le posent. » Elle tousse. « Moi, j'ai l'heure. Je n'ai jamais rien demandé d'autre. »",
      "Il incline la tête, de son inclinaison exacte. Il a l'air de quelqu'un qui vient de perdre une seconde fois, et à qui cela commence à plaire.",
    ],
    choices: [{ label: "Les laisser compter les jarres", fx: { flag: "monde:p_jarres" }, to: "Fpr_parvis" }] },

  // ===== the evening page
  Fp_soir: { act: "V", title: "Quand l'ombre a passé le coin", backName: "la borne", place: "tour", ambiance: "ville", charniere: true, aparte: true,
    text: [
      { first: true, text: "L'ombre de la Tour a passé le coin de la ruelle. C'est la même ombre, sur les deux bornes : elle tombe du même mur, à soixante ans de distance, et elle arrive au même pavé." },
      { first: true, if: J, text: "Tu t'assois. La ruelle sent le suif et la friture. On allume des lampions. Tu ouvres le Cahier. Il y a déjà une ligne, en bâtons : *J'Y SUIS. Y A PLUS QUE MOI ET DES RUBANS.*" },
      { first: true, if: R, text: "Tu t'assois. La ruelle est noire, sans une lampe : il n'y a personne pour en allumer. Tu ouvres le Cahier sur ton genou, au jugé, et tu écris gros, pour te relire sans voir : *J'Y SUIS. Y A PLUS QUE MOI ET DES RUBANS.* L'encre de l'autre vient dessous, et elle luit un peu, comme toujours : tu lis à sa lueur." },
      { first: true, text: "On se dit la journée. Ce qu'on a fait d'un homme de trente ans, et ce que l'homme de quatre-vingt-dix a dit en apprenant la sentence. Ce qu'on a fait d'une ville. Qu'une petite de huit ans a compté dix-neuf moins un. Qu'une vieille, sur une chaise, a dit : *tu as mis le temps.* On écrit serré. On se coupe. On répond à une ligne pendant que la suivante arrive." },
      { first: true, if: J, text: "Puis la question revient, où tu l'avais laissée. *T'AS DIT LE MOT POUR QUI ?*" },
      { first: true, if: { all: [J, { secret: "j_rester" }] }, text: "Tu écris la vérité, puisque c'est tout ce qui passe. *Pour moi. Je voulais rester ici. Je te l'ai caché neuf jours. J'ai dit le mot en sachant que tu perdais ton pays, et j'ai cru que tu viendrais avec.* Tu attends. Il vient : *MOI POUR LES MIENS. ON A VOLÉ CHACUN SON MIDI. ÇA TOMBE BIEN, J'AI L'HABITUDE.* Puis, dessous : *T'ES BIEN LÀ-BAS ?* Tu regardes les lampions. Tu écris : *Oui. Il manque quelqu'un.*" },
      { first: true, if: { all: [J, { not: { secret: "j_rester" } }] }, text: "Tu écris ce qui est vrai. *Pour eux. Quarante mille. Je les avais vus dîner neuf jours. Je ne pouvais pas les réveiller chez des étrangers.* Tu attends. Il vient : *MOI POUR LES MIENS. ON A PENSÉ PAREIL, CHACUN À L'ENVERS.* Puis, dessous : *TU M'EN VEUX ?* Tu écris : *Non. Toi ?* La réponse met du temps. *UN PEU. JE SUIS LÀ.*" },
      { first: true, if: R, text: "La réponse à ta question vient, en penché, sans rature." },
      { first: true, if: { all: [R, { secret: "r_soeur" }] }, text: "Tu la lis. Tu réponds la tienne. *POUR LISON. ELLE ÉTAIT QUE DANS UN DES DEUX MOTS. J'AI PAS PESÉ LE RESTE.* Tu regardes ce que tu viens d'écrire. Tu ajoutes : *SI. J'AI PESÉ. J'AI CRU QUE TU TE TAIRAIS.* Il vient : *J'ai cru que tu te tairais aussi.* Vous avez chacun compté sur le silence de l'autre, et vous avez chacun parlé. Tu ris, tout{e} seul{e}, dans une ville vide, et cela fait un bruit." },
      { first: true, if: { all: [R, { not: { secret: "r_soeur" } }] }, text: "Tu la lis. Tu réponds la tienne. *POUR CHEZ MOI. C'EST SALE, C'EST DUR, ON M'Y A CHASSÉ DE PARTOUT. C'EST CHEZ MOI.* Il vient : *Je sais. J'en viens.* Tu regardes cette ligne. {autre} était d'ici, et {autre:il} a choisi là-bas. Toi, tu n'as rien choisi d'autre que de rester où tu es né{e}. Cela fait deux façons d'être têtu." },
      { first: true, text: "Le Cahier a une fin. Vous la voyez pour la première fois : sous le pouce, à droite, les feuillets blancs. On les compte, chacun de son côté, et l'on trouve le même nombre. Quinze. Vingt-quatre feuilles, moins neuf jours de route : cela fait trente pages. Line comptait tout." },
      { first: true, text: "Il faut décider ce qu'on en fait. Quinze feuillets, et soixante ans entre vous, qui ne bougeront pas : quand l'un aura trente ans, l'autre les aura aussi, le même jour, à l'autre bout." },
      { again: true, text: "La borne, le soir. Le Cahier ouvert, et quinze feuillets blancs sous le pouce." },
    ],
    choices: [
      { label: "Vous deux : une demi-page par an, au Grand Midi, sur une borne. Trente pages : de quoi tenir soixante ans.", hide: R, monde: "cahier", option: "an", fx: { flag: "monde:p_an" }, to: "Fpj_depot" },
      { label: "Vous deux : une demi-page par an, au Grand Midi, sur une borne. Trente pages : de quoi tenir soixante ans.", hide: J, monde: "cahier", option: "an", fx: { flag: "monde:p_an" }, to: "Fpr_voiture" },
      { label: "Vous deux : tous les soirs, tant qu'il y a du blanc. Tout se dire, cet été.", hide: R, monde: "cahier", option: "pages", fx: { flag: "monde:p_pages" }, to: "Fpj_depot" },
      { label: "Vous deux : tous les soirs, tant qu'il y a du blanc. Tout se dire, cet été.", hide: J, monde: "cahier", option: "pages", fx: { flag: "monde:p_pages" }, to: "Fpr_voiture" },
      { label: "Vous deux : cette nuit, jusqu'à l'aube. Puis fermer, et vivre chacun son midi.", hide: R, monde: "cahier", option: "adieu", fx: { flag: "monde:p_adieu" }, to: "Fpj_depot" },
      { label: "Vous deux : cette nuit, jusqu'à l'aube. Puis fermer, et vivre chacun son midi.", hide: J, monde: "cahier", option: "adieu", fx: { flag: "monde:p_adieu" }, to: "Fpr_voiture" },
    ] },

  // ===== 541 : the road home
  Fpj_depot: { act: "V", title: "Au pied de la borne", place: "tour", ambiance: "ville",
    text: [
      { after: "monde:p_an", text: "Une demi-page par an. Vous l'avez écrit tous les deux, et souligné. Tu refermes le Cahier sur trois cent soixante-quatre jours de silence, qui commencent." },
      { after: "monde:p_pages", text: "Tous les soirs. Vous avez déjà mangé deux feuillets cette nuit, et tu as mal au poignet. Tu refermes le Cahier jusqu'à demain." },
      { after: "monde:p_adieu", text: "Vous avez écrit jusqu'à l'aube. Tu ne diras à personne ce qu'il y a sur ces pages. La dernière ligne est en bâtons, et tu la sais par cœur. Tu as refermé le Cahier. Il est tiède, comme une chose qu'on a tenue longtemps." },
      "Le jour se lève sur la ruelle. Tu regardes la borne. Autrefois, il y a neuf jours, tu enterrais des choses au pied de ces pierres, et quelqu'un les déterrait soixante ans plus tard, mangées de rouille, sur la même route. C'était le même monde. Il y en a deux.",
      "Tu ignores si cela passe encore. L'encre passe. Le bois d'un banc a peut-être passé.",
      "Tu as à la ceinture un outil de bronze, avec une main au charbon sur le manche. Tu peux le garder. Tu peux le mettre en terre, au pied de cette borne, sous deux pavés, pour quelqu'un qui saurait où creuser.",
    ],
    choices: [
      { label: "L'enterrer, et l'écrire à la prochaine page", fx: { flag: "monde:p_depot" }, to: "Fpj_charrette", big: true },
      { label: "Le garder : il te reste peu de choses de cette main", to: "Fpj_charrette", big: true },
    ] },

  Fpj_charrette: { act: "V", title: "Quatre jours, sur la paille", place: "foire", ambiance: "champs",
    text: [
      "On part à la fraîche, par la porte d'Occident. La jument s'appelle la Grise. Girard mène, le fouet au cou ; Josse marche à la tête ; tu es sur la paille, avec la petite, qui a ouvert sa boîte et qui trie.",
      "Le septième peuplier. Tu le regardes venir. Il y a neuf jours, c'était le bord : en deçà, tout ce qui serait pris ; au-delà, soixante ans de lisière. C'est un peuplier. Girard y fait claquer son fouet, par habitude, et la Grise ne remue pas une oreille.",
      "Quatre jours de route. L'abbaye, où l'on chante les heures à l'heure. Arvoise et son pont. Roquebise sur sa butte, avec ses fours qui fument : tu regardes la rue des Potiers, en passant, la troisième maison après la fontaine. Il y a un jeune ménage sur le seuil. Tu sais leur nom. Tu sais celui d'une arrière-petite-fille qu'ils auront, dans un autre midi, et qui a cinq ans.",
      { if: { any: [AN, PAGES] }, text: "À chaque borne, tu fais arrêter. Josse trouve cela dévot. La petite descend avec toi. Elle te regarde ouvrir le Cahier, attendre, lire. « C'est qui, qui écrit en bâtons ? — Quelqu'un qui n'a pas appris. — C'est joli. On dirait des clôtures. » Elle veut savoir pourquoi cela luit. Tu dis que c'est le fil. Elle regarde le fil gris de très près, longtemps, en remuant les lèvres : elle compte les points." },
      { if: { not: { any: [AN, PAGES] } }, text: "À chaque borne, tu poses la main sur ta chemise. Tu n'ouvres pas. La petite te regarde faire. « T'as mal là ? — Non. J'ai un cahier. — Tu écris pas dedans ? — Il est fini. » Elle réfléchit. « Il est pas fini. Il est gros comme ça, et t'as écrit que comme ça. » Elle montre, entre deux doigts. Tu dis qu'il y a des cahiers qu'on ferme avant la fin. Elle trouve que c'est du gâchis, et elle a raison." },
      "Le quatrième soir, on voit les trois noyers.",
    ],
    choices: [{ label: "La ferme des Noyers", to: "Fpj_grange", big: true }] },

  Fpj_grange: { act: "V", title: "Un cadre de pierre, où l'on accroche les faux", place: "basse", ambiance: "champs",
    text: [
      "La ferme fume. Bérarde est sur le seuil, les poings aux hanches, qui compte son monde et qui en trouve un de plus. L'aïeul Mathurin est sous l'auvent. « Je l'avais dit, qu'on reverrait cette paille-là. »",
      "On te donne la soupente, sur l'étable. Tu poses ton sac. Puis tu vas à la grange, seul{e}, pendant qu'on dételle.",
      "Le cadre de pierre est dans le mur du fond. Deux montants, un linteau, plus vieux que la ferme et plus vieux que la route. Il y a des faux accrochées. C'est par là que tu es tombé{e}, il y a treize jours, de la paille plein les cheveux. C'est la première pierre de la Méridienne : la ligne des bornes part d'ici.",
      "Tu poses la main sur le montant. Il est froid. Il n'y a plus de sable, de ce côté, pour l'ouvrir ; et il n'y a plus, de l'autre, le pays d'où tu venais. La porte donne sur un mur.",
      "Tu t'adosses au montant. Tu sors le Cahier.",
      { if: { any: [AN, PAGES] }, text: "Il y a une ligne. Elle vient d'arriver : elle brille. *J'Y SUIS. SOUS TES NOYERS. LA VIEILLE EST RENTRÉE CHEZ ELLE. ELLE DIT QUE TU TIENS MAL TA GAULE.* Tu ris, dans une grange, contre un mur. Tu n'as pas encore tenu de gaule. Elle le sait depuis soixante ans." },
      { if: { not: { any: [AN, PAGES] } }, text: "Tu ne l'ouvres pas. Tu le tiens à plat contre la pierre, un moment. De l'autre côté, à cette heure, quelqu'un est peut-être adossé au même montant. Tu ne le sauras pas. Vous l'avez voulu ainsi : on ne vit pas dans une ville en gardant l'œil sur la porte." },
      "« Qu'est-ce que tu regardes ? » La petite est dans le jour de la grange, sa boîte sous le bras. Tu dis : une porte. Elle vient voir. Elle passe la main sur le linteau. « C'est pas une porte. Y a pas de trou. » Elle te regarde. « Tu veux que je t'en fasse un ? »",
    ],
    choices: [{ label: "Les années", to: "Fp_fin", big: true }] },

  // ===== 601 : the road home
  Fpr_voiture: { act: "V", title: "Une vieille, à porter chez elle", place: "foire", ambiance: "champs",
    text: [
      { after: "monde:p_an", text: "Une demi-page par an. Vous l'avez écrit tous les deux, et souligné. Tu refermes le Cahier sur trois cent soixante-quatre jours de silence, qui commencent." },
      { after: "monde:p_pages", text: "Tous les soirs. Vous avez déjà mangé deux feuillets cette nuit, et tu as du charbon jusqu'au coude. Tu refermes le Cahier jusqu'à demain." },
      { after: "monde:p_adieu", text: "Vous avez écrit jusqu'à l'aube. Tu ne diras à personne ce qu'il y a sur ces pages. La dernière ligne est en penché, et tu la sais par cœur. Tu as refermé le Cahier. Il est tiède." },
      "Il faut une voiture. Tu en trouves une dans la cour de la Maîtrise : une berline à sablier d'or sur la portière, qui servait à promener des acheteurs le long de la lisière. Tu grattes le sablier avec ton couteau. Un Veilleur te prête deux mules.",
      "On couche Line dedans. Elle dit que c'est trop mou. Elle dit que les ressorts sont mal trempés. Elle le dit jusqu'à la porte d'Occident, puis elle s'endort, la bouche ouverte, et tu mènes au pas.",
      "Le septième peuplier. Toute ta vie, c'était là que commençait la ville grise. Les mules passent. Sur le talus, un homme est assis, en habits d'il y a cinquante ans, la tête dans les mains. C'est un pris de 551. Il s'est réveillé hier. Une mante bleue est accroupie devant lui, et lui parle doucement.",
      "Il y en a tout le long de la route. Des gens debout dans des champs, qui regardent des haies trop hautes. Des charrettes qu'on rattelle. Un enfant qui pleure devant une vieille, et la vieille qui dit : *c'est moi, c'est ta sœur.* Les Veilleurs sont partout. Ils ont les noms. Ils font le métier qu'ils avaient répété pour d'autres.",
      { if: { any: [AN, PAGES] }, text: "À chaque borne, Line se réveille. Elle le sent : elle a gratté ces pierres quarante ans. « Ouvre. » Tu ouvres. Elle te fait lire le penché, tout haut, et elle corrige les nouvelles. « La petite compte les points du fil, à ce que je lis. Écris : *elle en trouvera trois cent douze, et elle aura tort d'un.* » Tu écris en bâtons. Elle regarde. « Tu formes mal tes R. On verra cela. »" },
      { if: { not: { any: [AN, PAGES] } }, text: "À chaque borne, Line se réveille. Elle le sent : elle a gratté ces pierres quarante ans. Elle regarde ta chemise, où est le Cahier. « Fermé ? — Fermé. » Elle hoche la tête. « Je l'aurais laissé ouvert. Je suis de celles qui regardent une porte soixante ans. Vous êtes mieux faits que moi. » Elle se rendort. Tu n'es pas sûr{e} qu'elle ait raison." },
      "Le quatrième soir, on voit les trois noyers. La lisière est partie. Il y a un pré, tout bête, avec des vaches dedans qui ont six semaines de sommeil à rattraper.",
    ],
    choices: [{ label: "L'atelier de Line", to: "Fpr_noyers", big: true }] },

  Fpr_noyers: { act: "V", title: "Je ne mourrai pas dans une ville", place: "basse", ambiance: "champs",
    text: [
      "Le village n'est pas vide. On l'avait mis sur les routes il y a treize jours ; il revient, par charrettes, avec ses matelas. Le père Lubin, qui avait refusé de partir, est sur son seuil, et il regarde rentrer les autres avec la figure d'un homme qui a eu raison.",
      "Tu portes Line dans son atelier. Elle ne pèse rien. Tu la poses dans son fauteuil, devant l'établi, sous la fenêtre. Elle regarde ses outils. Elle déplace une brucelle d'un demi-pouce. « On a fouillé. Ils ne remettent jamais les choses. »",
      "Il y a une paillasse, sous l'escalier, avec un creux. Tu la regardes. Tu connais ce creux par les lettres : {autre} y a couché neuf ans.",
      "« Elle est à toi, dit Line, sans se retourner. Tant que tu voudras. Tu m'as volé trois mesures, et tu m'as rapporté une vieille : je ne sais plus qui doit à qui, et je suis trop fatiguée pour refaire le compte. » Elle tousse. « Tu iras à Roquebise demain. C'est à une journée. Tu reviendras me dire comment elle est, cette petite. Puis tu feras ce que tu voudras. »",
      { if: { has: "monde:p_jarres" }, text: "Il y a, dans la berline, dix jarres de verre vert, calées dans la paille, et un mot d'une écriture exacte : *Pour les Lents. M. A.* Line te regarde les décharger. « Une pincée par tête, sur la main, pas plus. Commence par ceux du pré à Pierrot : il y a une femme, là, qui a le pied en l'air depuis la Chandeleur. »" },
      "Tu vas à la grange, à la brune. Le cadre de pierre est dans le mur du fond. La Garde l'avait cherché neuf jours. Il n'y a plus de Garde. Tu poses la main sur le montant.",
      { if: { any: [AN, PAGES] }, text: "Tu t'adosses. Tu ouvres le Cahier. Tu écris : *J'Y SUIS. SOUS TES NOYERS. LA VIEILLE EST RENTRÉE CHEZ ELLE. ELLE DIT QUE TU TIENS MAL TA GAULE.* Tu attends. Il vient, en penché, d'une main qui tremble de rire : *Je n'en ai pas encore tenu. Dis-lui que j'apprendrai. Je suis dans la grange.* Tu regardes le mur. {autre} est là, adossé{autre:e} à la même pierre, à soixante ans d'épaisseur." },
      { if: { not: { any: [AN, PAGES] } }, text: "Tu t'adosses. Tu tiens le Cahier à plat contre la pierre, un moment, sans l'ouvrir. De l'autre côté, à cette heure, quelqu'un est peut-être adossé au même montant. Tu ne le sauras pas. Vous l'avez voulu ainsi. Tu restes là jusqu'à ce que la pierre ait pris la chaleur de ton dos." },
    ],
    choices: [{ label: "Roquebise, à une journée", to: "Fpr_roquebise", big: true }] },

  Fpr_roquebise: { act: "V", title: "T'as mis six jours", place: "foire", ambiance: "ville",
    text: [
      "Roquebise est sur sa butte, et les fours fument. Ils fument depuis cinq jours : on y est déjà remis au feu, avec la hâte de gens qui croient avoir perdu une nuit.",
      "La rue des Potiers crie sous tes sabots. Les rubans pendent aux portes, dénoués. Frère Macaire est à la fontaine, son registre contre la hanche. « Bordier. Troisième porte. Ils te cherchent depuis lundi. Ils ont battu les foins de ton oncle. » Il tire sa mine de plomb de sa barbe. « Je leur ai dit l'année. Ta mère m'a jeté une écuelle. »",
      "Tu comptes les portes. Tu n'as pas besoin de compter.",
      "Il y a quelqu'un d'assis sur le seuil de la troisième, les pieds nus dans les tessons, un oiseau de terre verte à la bouche. Elle a cinq ans, les cheveux en l'air. Elle siffle : un coup, puis elle regarde le bas de la rue ; un coup, puis elle regarde. Elle fait cela depuis cinq jours.",
      "Elle te voit monter. Elle te détaille : les sabots, les genoux, la figure. Elle cherche plus bas, derrière toi, quelqu'un de dix ans. Puis elle revient à ta bouche. Elle ôte le sifflet de la sienne.",
      "« On m'a dit que t'avais grandi. » Sa voix est sévère. « On m'a dit que j'avais dormi, que c'était long, et que t'étais devenu{e} comme ça. J'ai dit que je verrais. » Elle se lève. Elle te prend la main, la retourne, trouve au pouce une cicatrice qu'elle t'a faite avec un tesson. Elle la tâte. « Bon. C'est toi. » Puis, avec une indignation énorme : « T'as mis six jours ! »",
      "Tu dis que tu as mis six ans. Elle balaie cela. Six ans, elle ne les a pas vus ; six jours, elle les a sifflés un par un sur cette marche.",
      "Tu la prends. Elle pèse ce qu'elle pesait. Par la porte ouverte, il vient un bruit de tour qui s'arrête, et deux notes sifflées, une haute, une basse, qui s'arrêtent aussi. Ton père est dans le couloir, les mains pleines de terre.",
      "« T'es gentil{e}, des fois », dit Lison dans ton cou. Elle te souffle le sifflet dans l'oreille, pour voir.",
    ],
    choices: [{ label: "Les années", to: "Fp_fin", big: true }] },

  // ===== the three ways the Cahier ends
  Fp_fin: { act: "V", title: "Les années",
    branch: [
      { if: AN, to: "Fp_fin_an" },
      { if: PAGES, to: "Fp_fin_pages" },
      { to: "Fp_fin_adieu" },
    ] },

  Fp_fin_an: { act: "V", title: "Trente pages", end: true, epilogue: true, fx: { flag: "fin:partage" },
    text: [
      "Une demi-page par an, au Grand Midi. Il y a toujours une borne à moins d'une journée, sur la route royale ; on s'y rend la veille, on dort contre la pierre, et à midi on ouvre.",
      { if: J, text: "La première année, tu écris l'établi sous la fenêtre, le pont d'Arvoise qui tient, une petite de neuf ans qui a démonté l'horloge du curé. Il vient, en bâtons, une rue de potiers, une sœur qui a perdu une dent, et la mort d'une vieille, à la Saint-Michel, dans son fauteuil, ses lunettes sur le front. *ELLE A DIT QUE T'AVAIS MIS LE TEMPS, ET QUE ÇA ALLAIT.* Tu fermes le Cahier. Tu vas trouver Line, qui a dix ans, et tu la regardes trier ses vis jusqu'au soir sans lui dire pourquoi." },
      { if: R, text: "La première année, tu écris une rue de potiers, une sœur qui a perdu une dent, et la mort d'une vieille, à la Saint-Michel, dans son fauteuil, ses lunettes sur le front. Tu écris ce qu'elle a dit. Il vient, en penché, un établi sous une fenêtre, un pont qui tient, une petite de neuf ans qui a démonté l'horloge d'un curé. Tu lis cela sur une borne, au soleil. Tu as enterré Line sous son troisième noyer à l'automne, et elle est en train de perdre une vis, à l'autre bout de la page." },
      "Les demi-pages se suivent. On apprend à tout faire tenir sur une moitié : les morts, les naissances, le prix du pain, une phrase bête qu'on a gardée onze mois pour l'autre. On apprend à lire entre deux lignes ce qui n'a pas tenu.",
      { if: J, text: "À la dixième, les bâtons sont devenus droits. À la vingt-cinquième, tu écris que le Grand Maître est mort à quatre-vingt-quinze ans, en corrigeant un apprenti. À la trentième, il y a dans la marge une autre main, toute neuve, qui a tracé un oiseau. À la quarantième, que Line Noyer a été reçue jurée, la première femme sur ce banc, avec une montre qui n'a que neuf pièces." },
      { if: R, text: "À la dixième, le penché s'est fait plus large : c'est une main qui a pris de l'établi. À la trentième, tu laisses Lison dessiner un oiseau dans la marge, pour l'autre, qui lui a envoyé la description d'un cheval bleu. À la quarantième, tu lis qu'une certaine Line Noyer a été reçue jurée, là-bas, avec une montre qui n'a que neuf pièces ; et tu vas le dire tout haut à un troisième noyer." },
      { if: J, text: "Il y a une année où tu fais autre chose, la veille. Tu as soixante-sept ans. Tu vas t'asseoir sur une borne de la route de Vauxelles, un soir d'automne, et tu attends. C'est le soir où, dans l'autre midi, on vidait ce village, et où quelqu'un a laissé là un enfant de six ans avec une cuiller. Il passe des charrettes de betteraves. Vauxelles a ses feux allumés. Personne ne pose personne sur cette pierre. Tu rentres à la nuit. Tu n'as jamais su de qui tu étais ; tu sais du moins qu'ici, on ne t'a pas laissé{e}." },
      { if: R, text: "Il y a une année où la page d'en face te dit : *J'ai attendu sur la borne de Vauxelles. Il n'est venu personne.* Tu ne comprends pas. Tu poses la question l'an d'après, et la réponse l'an suivant ; il faut trois Grands Midis pour apprendre d'où venait quelqu'un que tu connais depuis cinquante ans. Tu trouves que c'est le bon pas pour ces choses-là." },
      "La soixantième année, vous avez soixante-seize ans, tous les deux, le même jour. Il reste une demi-page. Line avait compté juste, sans savoir ce qu'elle comptait.",
      { if: { all: [J, { has: "monde:p_depot" }] }, text: "Tu as su, à la deuxième page, que l'outil était arrivé : *TROUVÉ. SOUS DEUX PAVÉS. IL A TA MAIN DESSUS, MAINTENANT, EN ROUILLE.* Il y a donc des choses qui passent. Vous n'en avez jamais abusé. On n'enterre pas une vie par petits morceaux." },
      { if: { all: [R, { has: "monde:p_depot" }] }, text: "Tu as creusé, la deuxième année, au pied de la borne des Sonneurs, sous deux pavés. L'outil y était, vert, mangé, avec sur le manche l'empreinte d'une paume par-dessus la tienne. Il est sur ta cheminée. Lison le montre aux enfants, et elle leur raconte tout de travers." },
      { if: J, text: "Tu es sur la borne des Trois-Noyers. On t'y a porté{e} : tes jambes ont fait leur temps. C'est le vingt et un juin 601. Dans l'autre midi, à cette date, tu avais seize ans et de la paille plein les cheveux ; tu arrives aujourd'hui, par le long chemin, au jour d'où tu étais parti{e} par le court." },
      { if: R, text: "Tu es sur la borne de Roquebise. On t'y a porté{e} : tes jambes ont fait leur temps, et elles avaient commencé tôt. C'est le vingt et un juin 661. Une vieille de soixante-cinq ans te tient ton charbon, parce que tes doigts le lâchent. Elle a un sifflet de terre verte pendu au cou, par coquetterie." },
      "Midi. Tu ouvres à la dernière demi-page. Tu as su toute l'année ce que tu y mettrais. Tu écris. Et l'encre de l'autre vient au même instant, par-dessous la tienne, trait pour trait, si bien que les deux écritures se mêlent, la penchée et la carrée, sur les trois mêmes mots :",
      "*J'y suis.*",
      "Très loin, une cloche sonne douze. Tu la laisses finir. Puis tu refermes le Cahier, qui est plein.",
    ] },

  Fp_fin_pages: { act: "V", title: "Le dernier coin de blanc", end: true, epilogue: true, fx: { flag: "fin:partage" },
    text: [
      "Tous les soirs. On trouve une borne, on s'y assoit à la brune, et l'on écrit jusqu'à ne plus voir. On se dit tout : neuf jours qu'on n'avait eus qu'à moitié, chacun la sienne, et puis le reste, depuis le commencement.",
      { if: J, text: "Tu apprends six ans de fossés, nuit par nuit. Comment on ouvre la main d'un dormant sans la casser. Le goût de l'écorce, à sept ans. Un oncle, des foins, un retour dans une rue grise. Tu apprends pourquoi les bâtons : personne ne lui avait montré, et il a fallu copier des enseignes." },
      { if: R, text: "Tu apprends neuf ans d'atelier, hiver par hiver. Une borne de la route de Vauxelles, une cuiller, une bille bleue. Comment on démonte une fusée à chaîne les yeux bandés. Tu apprends pourquoi le penché : une vieille lui tenait le poignet, et elle tirait à droite." },
      "Quinze feuillets, écrits serré, c'est un été. Le blanc baisse sous le pouce. On écrit plus petit. On écrit dans les marges, puis en travers des lignes, à la façon des gens qui paient le port.",
      { if: J, text: "La petite Line s'assoit avec toi, les derniers soirs. Elle ne lit pas : tu le lui as défendu, et elle obéit, ce qui lui coûte. Elle regarde l'encre venir. Elle a défait un coin de la reliure avec son ongle, pour voir le fil. « C'est mal cousu, dit-elle. Y a un point sur trois qui sert à rien. » Tu dis que celle qui l'a cousu avait soixante-neuf ans et de mauvais yeux. « Alors elle aurait dû me demander. »" },
      { if: R, text: "Lison s'assoit avec toi, les derniers soirs. Elle a décidé d'apprendre à lire, et elle a décidé que ce serait là-dedans. Elle suit le penché du doigt, quand il vient. Elle dit les lettres. Elle apprend à lire dans l'écriture de quelqu'un qu'elle ne verra jamais, et elle la trouve plus belle que la tienne, ce qu'elle te fait savoir." },
      "À la Saint-Michel, il reste un coin, en bas de la dernière page, grand comme une paume.",
      { if: J, text: "Tu écris : *C'est la fin du blanc.* Il vient : *JE SAIS.* Vous restez là, chacun avec sa mine en l'air. Il y aurait mille choses. Aucune ne tient dans une paume. Alors la petite te prend le crayon des doigts, d'autorité, et elle écrit son nom dans le coin, en tirant la langue : *Line.* Et dessous, presque aussitôt, il monte du papier quatre bâtons énormes, tremblés, qui débordent sur la marge : *LISON.*" },
      { if: R, text: "Il vient : *C'est la fin du blanc.* Tu écris : *JE SAIS.* Vous restez là. Il y aurait mille choses. Aucune ne tient dans une paume. Puis tu vois paraître, dans le coin, quatre lettres rondes, appliquées, d'une main d'enfant : *Line.* Lison les regarde. Elle te prend le charbon. Elle écrit dessous, de tout son poing, son nom, le seul mot qu'elle sache : *LISON.* Il déborde sur la marge." },
      "Le Cahier finit là-dessus : deux petites filles qui ont signé l'une sous l'autre, à soixante ans de distance, sans savoir ce qu'elles signaient.",
      { if: { has: "monde:p_depot" }, text: "Il reste l'outil, sous deux pavés, au pied d'une borne. L'un sait qu'il l'a mis. L'autre sait où creuser. On a gardé cela pour plus tard, exprès : il faut bien qu'il y ait encore un endroit où aller." },
      { if: J, text: "Tu ranges le Cahier dans la soupente. Line le trouvera : elle trouve tout. Elle le défera page à page, pour voir, et elle le recoudra mieux. Elle a neuf ans. Elle dit déjà qu'elle en fera un qui marche partout, sans bornes. Elle a le temps, et elle a les sourcils de quelqu'un qui le prend." },
      { if: R, text: "Tu ranges le Cahier dans le coffre, sous les tabliers. Lison le ressortira : elle sait lire, à présent, et il n'y a rien d'autre à lire dans la maison. Elle le saura par cœur avant ses dix ans. Elle te récitera, les soirs où tu te tais trop, des phrases en penché, avec l'accent d'un village où elle n'est jamais allée." },
      "Quelquefois, en passant près d'une borne, tu t'y assois. Tu n'as rien à ouvrir. Tu restes le temps que l'ombre du style avance d'un doigt. Puis tu te lèves, et tu vas à ce que tu as à faire.",
    ] },

  Fp_fin_adieu: { act: "V", title: "Deux midis", end: true, epilogue: true, fx: { flag: "fin:partage" },
    text: [
      "Une nuit. Vous vous êtes tout dit en une nuit, sur deux bornes, et vous avez fermé à l'aube. C'était décidé à deux, comme le reste : on ne vit pas dans une ville en gardant l'œil sur la porte.",
      { if: J, text: "Tu vis. Il y a de quoi. Tu as un établi, des mains qui savent des choses que ce siècle ignore, et une famille de laboureurs qui t'a compté une fois pour toutes dans son monde. Tu apprends à tenir une gaule. Tu remontes l'horloge du curé. Line te regarde faire, et refait tout, le soir, pour voir." },
      { if: R, text: "Tu vis. Il y a de quoi. Tu as une cuisine qui sent la terre, un père qui t'apprend le tour, une mère qui te tâte encore les épaules en passant. Tu as des mains qui savaient ouvrir celles des dormants sans les casser : elles font de bons pots. Lison grandit. Elle te rattrape d'un an tous les ans, et elle te le fait remarquer." },
      { if: J, text: "Le Cahier est dans la soupente, à plat, sous ta chemise des dimanches. Tu passes devant des bornes. Il y en a une tous les quarts de lieue, sur la route royale, et la ligne part du mur de la grange. Tu sais qu'il suffirait. Tu sais aussi que de l'autre côté on le sait, et qu'on s'y tient." },
      { if: R, text: "Le Cahier est dans le coffre, à plat, sous les tabliers. Tu passes devant des bornes. Il y en a une à la fontaine, où frère Macaire tient son Rôle. Tu sais qu'il suffirait. Tu sais aussi que de l'autre côté on le sait, et qu'on s'y tient." },
      "Il reste une douzaine de feuillets blancs. Ils resteront blancs. C'est une chose à quoi l'on pense, certains soirs, comme à une chambre fermée dans une maison où l'on est bien.",
      { if: { all: [J, { has: "monde:p_depot" }] }, text: "Tu as mis un outil en terre, au pied d'une borne, sous deux pavés. Tu ne sauras jamais s'il est arrivé. C'est la seule question que tu te sois laissée." },
      { if: { all: [R, { has: "monde:p_depot" }] }, text: "La dernière nuit, en penché, il y avait : *j'ai mis quelque chose sous la borne.* Tu n'es pas allé{e} creuser. Tu sais que c'est là. Tu le gardes pour un jour où il t'en faudra un." },
      { if: J, text: "Tu vieillis dans un pays qui ne saura jamais ce qu'il a failli être. On y dit que la Patiente, une année, a pris son temps entre le onzième et le dernier. Les anciens en disputent. Toi, tu te tais ; et quand la cloche sonne midi, où que tu sois, tu comptes jusqu'à douze, et tu respires." },
      { if: R, text: "Tu vieillis dans un pays qui apprend à sonner. On refond des cloches. Les enfants de Roquebise ne disent plus *sonner* comme on dit *la mer*. Quand midi tombe, où que tu sois, tu comptes jusqu'à douze ; et au douzième, tu lèves la tête, un peu, comme on répond à quelqu'un." },
      "Il y a deux midis. Tu en as un. C'est assez pour une vie, et c'est la moitié de ce que tu as eu pendant neuf jours.",
      "Quelque part, à soixante ans d'ici, quelqu'un compte aussi jusqu'à douze. Tu n'en as aucune preuve. Tu n'en as jamais demandé.",
    ] },
});

module.exports = { passages: P, extras: {} };
