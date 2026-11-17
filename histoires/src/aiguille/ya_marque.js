// L'Île Folle-Aiguille · side story « Le matelot marqué » (owes its question to Les Misérables: can a man who was a
// convict become someone else, and has the law the right to take him back?). Toussaint Guérec, topman of the Cormorane,
// carries on his shoulder the two letters burnt into the convicts of Brisegrève, from which he escaped twelve years ago.
// The doctor sees them (at the crew's medical visit in Morlenc, or at the infirmary on the way: ya:marque_vue); the
// child learns the stars from him and sees that he fears the island (ya:guerec_ami). At Brisegrève the fort's soldiers
// search the ship (ya:cache, or ya:repris, or ya:rendu when he gives himself up). In the calms, Malandain, who knew him
// in the prison, blackmails him into the plot (ya:aveu when he goes to the captain, or ya:tu). On the island, he holds
// the chapel door, or he comes over the wall at night with a warning (ya:averti). On the last morning the captain
// judges (ya:raye: written dead in the log under his false name; ya:fers: kept in irons for Morlenc; ya:reste: left on
// the island by his own choice).
var VU = { has: "ya:marque_vue" };
var AMI = { has: "ya:guerec_ami" };
var ENFANT = { team: "mousse" };
var MEDECIN = { team: "victorine" };
module.exports = {
  passages: {
    // ---------------------------------------------------------------- act II, the doctor: the medical visit
    YA_visite: { act: "II", title: "La visite", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "guerec" },
      text: [
        "La capitaine Ribaud ne veut à bord que des hommes qui tiendront six mois sans pourrir, et elle a demandé à la médecin de les regarder un par un, dans le magasin du quai, avant qu'ils signent. Victorine les fait défiler torse nu devant une fenêtre, comme des chevaux à la foire de Varnèse, et note sur une liste : poitrine, dents, yeux, hernies, vérole, gale. Les dents sont mauvaises, la gale est bonne, la vérole est partout ; à ce compte, on n'appareillerait jamais, et elle signe presque tout.",
        "Le vingt-troisième est un géant. Quarante ans peut-être, des épaules de portefaix, des mains énormes et propres, et une figure de paysan doux, avec des yeux gris pâle qui ne regardent pas en face. Toussaint Guérec, gabier, de Kerverzot. Il garde sa chemise.",
        "« Enlevez la chemise, monsieur Guérec. — J'ai pas de mal, docteur. — C'est moi qui dirai si vous avez du mal. »",
        "Il l'enlève, très lentement, et se tourne de face, pour lui cacher le dos, ce qui est la seule manière sûre de montrer à une femme ce qu'on veut lui cacher. Elle fait le tour. Sur l'épaule droite, au-dessous de la clavicule, il y a deux lettres, grandes comme un pouce, blanches et luisantes dans la peau tannée, faites au fer rouge et vieilles de plus de dix ans : *B.G.*",
        "Victorine sait lire ces lettres-là. Tout le monde, sur la côte du Ponant, sait les lire. Brisegrève, galères. On les met à l'épaule des forçats du fort, pour qu'ils ne puissent plus jamais se mêler aux honnêtes gens, et on les met à droite, pour que la main droite, en se levant, les montre à tout le monde.",
        "Guérec ne bouge pas. Il regarde la fenêtre. Il dit, très bas : « Douze ans que je suis honnête, docteur. Douze ans. J'ai un nom qui est pas à moi, mais je l'ai pas volé à un vivant. Je demande rien d'autre que de monter là-dessus et de tirer sur des cordes. »",
      ],
      choices: [
        { label: "Écrire « bon pour le service » et passer au suivant", fx: { flag: "ya:marque_vue" }, to: "YA_visite_tait" },
        { label: "« La capitaine doit savoir qui elle embarque. »", fx: { flag: ["ya:marque_vue", "ya:dit_capitaine"] }, to: "YA_visite_dit" },
      ] },
    YA_visite_tait: { act: "II", title: "La visite", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Victorine écrit *bon pour le service*, de sa belle écriture, et ajoute dans la marge, pour elle seule, une petite croix qui ne veut rien dire pour personne d'autre.",
        "« Remettez votre chemise, monsieur Guérec. Il fait froid, et vous avez une épaule qui craint les courants d'air. »",
        "Il remet sa chemise. Il ne dit pas merci. Il la regarde, une seconde, pour la première fois en face, et ses yeux gris pâle ont l'expression qu'ont les chiens battus quand on lève la main pour les caresser : la peur d'abord, puis, très lentement, quelque chose qui ressemble à de l'incrédulité.",
        "« Au suivant », dit Victorine.",
      ],
      choices: [{ label: "Finir la visite", back: true }] },
    YA_visite_dit: { act: "II", title: "La visite", place: "quai_hollandes", ambiance: "ville",
      text: [
        "La capitaine Ribaud écoute, debout, les mains derrière le dos. Puis elle fait venir Guérec. Il entre, sa chemise à la main, et il ne la remet pas.",
        "Elle regarde les lettres. Il regarde le plancher. Le silence dure le temps d'un grain qui passe sur le quai et tambourine aux vitres.",
        "« Douze ans, dit-elle enfin. Où ? — Sur des caboteurs, capitaine. Le Couchant, les îles. Jamais un jour de fers, jamais un mot de travers. Demandez. — Je ne demanderai rien. Si je demande, on me répondra, et je saurai. » Elle se tourne vers la fenêtre. « Vous embarquez, Guérec. Vous ne descendez pas à Brisegrève, vous ne vous montrez pas au fort, et le jour où vous lèverez la main sur un homme de mon bord, je vous livrerai moi-même, au premier port, avec une lettre de ma main. — Oui, capitaine. »",
        "Quand il est sorti, elle reste un moment sans rien dire. « Merci, docteur, dit-elle. Vous avez bien fait. Je vous en veux un peu. C'est souvent comme ça, avec les gens qui font bien. »",
      ],
      choices: [{ label: "Finir la visite", fx: { regard: { ribaud: "cordial" } }, back: true }] },

    // ---------------------------------------------------------------- act III.1, the doctor: the crushed hand
    YA_v_main: { act: "III", title: "La main du gabier", place: "cormorane", ambiance: "mer",
      fx: { meet: "guerec" },
      text: [
        "On lui descend un géant, la main gauche écrasée entre une poulie et un cordage, qui s'excuse de déranger. Toussaint Guérec, gabier. Il tient sa main blessée dans sa main droite comme on tient un oiseau tombé du nid, et il ne crie pas quand Victorine remet les deux doigts cassés, l'un après l'autre. Il transpire seulement, à grosses gouttes, et sa chemise colle à son dos et à ses épaules.",
        "Elle lui demande de l'enlever, pour ne pas qu'il prenne froid. Il refuse. Elle insiste. Il refuse encore, avec une politesse désespérée. Elle tire elle-même sur l'encolure, avec l'autorité de la Faculté, et l'épaule droite apparaît, et sur l'épaule droite, au-dessous de la clavicule, deux lettres blanches, faites au fer, vieilles de plus de dix ans : *B.G.*",
        "Brisegrève, galères. Et Brisegrève est à six jours.",
        "Guérec ferme les yeux. « Douze ans que je suis honnête, docteur, dit-il. Douze ans sans un jour de fers. J'ai un nom qui est pas à moi, mais je l'ai pas volé à un vivant. »",
      ],
      choices: [
        { label: "Remonter la chemise sur l'épaule, et finir le pansement", fx: { flag: "ya:marque_vue" }, to: "YA_v_main_fin" },
        { label: "« Je vais devoir le dire à la capitaine. »", fx: { flag: ["ya:marque_vue", "ya:dit_capitaine"] }, to: "YA_v_main_dit" },
      ] },
    YA_v_main_fin: { act: "III", title: "La main du gabier", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine remonte la chemise, l'attache au cou avec une épingle, et termine l'attelle. Elle ne dit rien. Il ne dit rien. Elle lui explique seulement comment tenir la main, et combien de jours il doit la tenir, et qu'il viendra la voir tous les matins.",
        "Sur la porte de l'infirmerie, il se retourne. « Brisegrève, docteur. Si on y mouille, je resterai à bord. Je dirai que c'est la main. — C'est la main, dit Victorine. Je l'écrirai. »",
      ],
      choices: [{ label: "Retourner à tes malades", back: "A3v_jours" }] },

    YA_v_main_dit: { act: "III", title: "La chambre de la capitaine", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud écoute Victorine, debout devant le compas de route, les mains derrière le dos. Puis elle fait venir Guérec, la main dans son attelle, la chemise ouverte sur l'épaule, puisque de toute façon il n'y a plus rien à cacher.",
        "Elle regarde les lettres longtemps. « Brisegrève est à six jours, dit-elle. Vous resterez à bord pendant l'escale, Guérec, et vous ne vous montrerez pas sur le pont quand le canot du fort viendra. Le jour où vous lèverez la main sur un homme de mon bord, je vous livrerai moi-même, avec une lettre de ma main. D'ici là, vous êtes gabier, et je ne connais pas d'autre nom que celui du rôle. »",
        "Quand il est sorti, elle se tourne vers la médecin. « Merci, docteur. Vous avez bien fait. Je vous en veux un peu. C'est souvent comme ça, avec les gens qui font bien. »",
      ],
      choices: [{ label: "Redescendre à l'infirmerie", fx: { regard: { ribaud: "cordial" } }, back: "A3v_jours" }] },

    // ---------------------------------------------------------------- act III.1, the child: the stars
    YA_m_etoiles: { act: "III", title: "Le grand Toussaint", place: "cormorane", ambiance: "nuit",
      fx: { meet: "guerec" },
      text: [
        "Le grand Toussaint Guérec, gabier de misaine, est le seul homme du bord qui ne t'ait jamais appelé{e} bigorneau, crevette ou mousse de malheur. Il ne t'appelle pas du tout. Il te fait signe, d'un mouvement de tête, et tu viens, et il te montre quelque chose. Un nœud. Une épissure. Comment on monte dans les haubans sans regarder en bas. Ce soir-là, au quart de minuit, couché sur le dos sur le gaillard d'avant, il te montre les étoiles.",
        "Il les connaît toutes, avec des noms qui ne sont pas ceux des livres : le Chaudron, la Faucille, la Mère-aux-Poussins, le Clou du Nord, autour duquel tout le ciel tourne comme une meule autour de son axe. « Celui-là, il bouge jamais. Quand tu sais où il est, tu sais où tu es. C'est le seul dans le ciel qu'on peut croire. »",
        "Tu lui demandes où il a appris tout ça. Il met longtemps à répondre. Le navire roule doucement, et le ciel avec lui, d'un bord à l'autre, comme un plafond qui hésite.",
        "« Dans une cour, dit-il enfin. Une cour de pierre, sans toit, avec des murs si hauts qu'on voit rien que le ciel. Onze ans, j'ai regardé le ciel dans cette cour. Il fallait bien regarder quelque chose. »",
        "Il se tait. Puis il dit, d'une voix différente, plus basse : « On mouille à Brisegrève, dans six jours. Moi, je descends pas. Si on te demande, tu m'as jamais vu regarder le fort. »",
      ],
      choices: [{ label: "« Je ne t'ai jamais vu regarder le fort. »", fx: { flag: "ya:guerec_ami" }, back: "A3m_jours" }] },

    // ---------------------------------------------------------------- Brisegrève: the search
    YA_b_fouille: { act: "III", title: "La fouille", place: "brisegreve", ambiance: "mer",
      text: [
        "Le deuxième matin, un canot du fort accoste la Cormorane avec un sergent, six soldats, et un vieux surveillant des galères en redingote noire, maigre, voûté, avec des yeux de corbeau sous un chapeau trop grand. Un forçat s'est évadé dans la nuit. On fouille tous les navires de l'anse.",
        "Le surveillant ne fouille pas. Il se plante au pied du grand mât, les mains dans le dos, et il regarde passer les hommes de l'équipage, un par un, que le second fait défiler devant lui. Il les regarde comme on lit une liste. Il a gardé les galères de Brisegrève trente ans. Il dit qu'il n'oublie jamais une figure ; on le croit volontiers. Ses yeux sont faits pour ça et pour rien d'autre.",
        { if: ENFANT, text: "Tu cherches Guérec du regard. Il n'est pas sur le pont. Tu le trouves dans la cale aux câbles, à l'avant, assis dans le noir sur les glènes de la grosse ancre, les mains entre les genoux, très calme, de ce calme qu'ont les hommes qui ont déjà tout perdu une fois et savent comment ça se passe." },
        { if: MEDECIN, text: "Victorine cherche Guérec du regard. Il n'est pas sur le pont. Elle le trouve à l'infirmerie, assis sur le coffre aux pansements, la main dans son attelle ou sans attelle, très calme, de ce calme qu'ont les hommes qui ont déjà tout perdu une fois et savent comment ça se passe." },
        "« Il va venir me chercher, dit Guérec. Le second va compter. Il manque un homme sur la liste, il me fera chercher, et le vieux me reconnaîtra. Il reconnaît tout le monde. Il m'a mis les fers lui-même. »",
        "Sur le pont, le second compte. Il en est à vingt.",
      ],
      choices: [
        { label: "Le cacher sous les voiles de rechange, dans la soute à voiles", test: { dom: "discretion", diff: 1, label: "Un géant sous la toile" },
          win: { fx: { flag: "ya:cache" }, to: "YA_b_cache" }, lose: { fx: { flag: "ya:repris" }, to: "YA_b_repris" } },
        { label: "Aller dire au second que Guérec est malade, au lit, et contagieux", if: MEDECIN, hide: { not: MEDECIN }, test: { dom: "savoir", diff: 0, label: "Une fièvre de commande" },
          win: { fx: { flag: "ya:cache" }, to: "YA_b_fievre" }, lose: { fx: { flag: "ya:repris" }, to: "YA_b_repris" } },
        { label: "Le laisser décider", to: "YA_b_rendu" },
      ] },
    YA_b_cache: { act: "III", title: "La soute à voiles", place: "brisegreve", ambiance: "nuit",
      text: [
        "La soute à voiles est un caveau de toile pliée, sentant le goudron et le moisi, où l'on ne voit rien et où l'on entend tout. Guérec s'y couche, sous trois voiles d'étai et une misaine de rechange, et vous empilez par-dessus tout ce qui pèse et ne se déplie pas.",
        "Sur le pont, le second appelle « Guérec ! » Personne. Il appelle encore. Puis les pas du sergent descendent l'échelle, et la lanterne entre dans la soute, et la lumière glisse sur la toile, très lentement, pli par pli, en s'arrêtant sur chaque bosse, comme des doigts qui cherchent un pouls.",
        "La lanterne s'arrête sur la misaine. Sous la misaine, rien ne bouge, pas même une respiration. On entend l'eau contre la coque, et le cœur qui bat dans les tempes, et un rat, quelque part, qui trotte sur une membrure, jusqu'au bout.",
        "« Rien », dit le sergent. La lanterne s'en va.",
        "Le soir, le second inscrit au rôle d'équipage, en face du nom de Guérec : *descendu à terre, revenu ivre, consigné*. Le second ne pose pas de questions. Il a regardé longtemps la soute à voiles avant de remonter, avec l'air d'un homme qui préfère ne pas savoir ce qu'il sait.",
      ],
      choices: [{ label: "Laisser Guérec sortir à la nuit", to: "YA_b_fin" }] },
    YA_b_fievre: { act: "III", title: "La fièvre", place: "brisegreve", ambiance: "mer",
      text: [
        "« Fièvre des prisons, dit Victorine au second, assez fort pour que le sergent l'entende. Il l'a prise au port de Morlenc, dans un garni. Il délire. Il a des pustules. Je l'ai isolé à l'infirmerie, avec du vinaigre partout ; vous pouvez y descendre, sergent, je vous prêterai un mouchoir. »",
        "Le sergent recule d'un pas. Les six soldats en reculent de deux. Le vieux surveillant, lui, ne recule pas : il regarde la médecin, longtemps, avec ses yeux de corbeau, et l'on sent qu'il a vu des centaines de mensonges et qu'il les reconnaît tous, et qu'il est en train de décider si celui-ci vaut la peine d'être démasqué.",
        "« La fièvre des prisons, dit-il enfin, d'une voix sèche. Je l'ai eue. J'en ai vu mourir trois cents. On ne s'en relève qu'une fois sur dix. » Il remet son chapeau. « Prenez bien soin de votre malade, madame. Ce serait dommage qu'il en réchappe. »",
        "Il descend dans le canot. Il ne se retourne pas. Victorine ne saura jamais s'il a cru. Elle penche pour non. Elle pense qu'il est trop vieux, et trop las, et qu'il a gardé trop de forçats pour se donner encore la peine d'en reprendre un qui ne s'enfuit plus.",
      ],
      choices: [{ label: "Descendre dire à Guérec qu'il est mourant", to: "YA_b_fin" }] },
    YA_b_repris: { act: "III", title: "La fouille", place: "brisegreve", ambiance: "mer",
      text: [
        "Le sergent le trouve. Ou le vieux le reconnaît, sur le pont, d'un seul regard, au milieu des autres. Ou c'est un matelot qui a parlé, pour une raison qu'on ne connaîtra pas. Cela revient au même : Toussaint Guérec, gabier, de Kerverzot, est un forçat évadé de Brisegrève, numéro deux cent douze, condamné à vingt ans pour le vol d'un pain et de deux poules et pour trois évasions, et il descend dans le canot du fort les mains liées derrière le dos.",
        "Il ne résiste pas. Il marche entre deux soldats, très droit, plus grand qu'eux d'une tête. À la coupée, il s'arrête, et il cherche quelqu'un des yeux.",
        { if: ENFANT, text: "Il te trouve. Il lève le menton vers le ciel, une fois, très vite. Le Clou du Nord. Le seul qu'on peut croire." },
        { if: MEDECIN, text: "Il trouve Victorine. Il lui fait un petit signe de tête, poli, presque gai, comme on salue un médecin à la sortie de l'église." },
        "Le canot s'éloigne vers le fort. Le soir, on entend sonner une cloche, là-haut, qui sonne pour l'entrée d'un forçat. Elle sonne longtemps. Douze ans.",
      ],
      choices: [{ label: "Regarder le fort jusqu'à la nuit", back: true }] },
    YA_b_rendu: { act: "III", title: "Le choix du gabier", place: "brisegreve", ambiance: "mer",
      text: [
        "Guérec se lève. Il prend le temps de remettre sa chemise bien droite, de la boutonner jusqu'au cou. Il dit : « Si je me cache, ils vont fouiller. S'ils fouillent, ils vont trouver d'autres choses. Il y a des hommes à bord qui ont plus à cacher que moi, je le sais ; ils me le pardonneraient pas. »",
        "Il monte sur le pont. Il traverse, devant tout l'équipage, et il s'arrête devant le vieux surveillant, et il ouvre sa chemise.",
        "« Deux cent douze, dit-il. Guérec, c'est pas mon nom. Je m'appelle Jean-Marie Kerhervé. Vous m'avez mis les fers vous-même, monsieur Tréhorel, il y a vingt-trois ans. »",
        "Le vieux surveillant le regarde longtemps. Puis il fait une chose que personne n'attend : il ôte son chapeau.",
        "« Je me souviens, dit-il. Le pain et les deux poules. » Il remet son chapeau. « Vous avez bien fait de vous rendre, Kerhervé. Je dirai au commandant que vous vous êtes rendu. C'est six mois de moins. Ce n'est rien. C'est six mois. »",
        "Guérec, qui s'appelle Kerhervé, descend dans le canot sans qu'on lui lie les mains.",
      ],
      choices: [{ label: "Le regarder partir", fx: { flag: "ya:rendu" }, back: true }] },
    YA_b_fin: { act: "III", title: "La nuit", place: "brisegreve", ambiance: "nuit",
      text: [
        "À la nuit, Guérec monte sur le pont. Il s'accoude à la lisse, du côté du large, le dos au fort, et il reste là, sans bouger, à respirer. Le fort, derrière lui, allume ses feux, un par un, sur ses six étages, jusqu'à ressembler à un énorme navire de pierre échoué sur la roche, qui ne partira jamais.",
        "« Merci », dit-il, sans se retourner. Il ne le dit qu'une fois. Ce n'est pas un homme à qui les mots coûtent peu.",
      ],
      choices: [{ label: "Le laisser à la mer", back: true }] },

    // ---------------------------------------------------------------- act III.2, the calms: the blackmail
    YA_chantage: { act: "III", title: "Le canonnier", place: "sargues", ambiance: "nuit",
      text: [
        "Dans les calmes, les hommes ont du temps, et le temps, à bord, sert surtout à se rappeler des choses. Ulric Malandain s'est rappelé quelque chose.",
        { if: ENFANT, text: "C'est Guérec lui-même qui te le dit, une nuit, sur le gaillard d'avant, couché sur le dos, la figure vers les étoiles, d'une voix qui a perdu son calme." },
        { if: MEDECIN, text: "C'est Guérec lui-même qui vient le dire à Victorine, une nuit, à l'infirmerie, assis sur le coffre aux pansements, d'une voix qui a perdu son calme." },
        "« Malandain était à Brisegrève. Dans la cour du nord, l'année de mon évasion ; il faisait trois ans pour un coup de poing. Il m'a reconnu le premier jour, je crois. Il a attendu. Hier, il est venu me voir dans les haubans. Il m'a dit qu'il y aurait du travail, bientôt, sur l'île. Un travail pour des hommes qui ont des épaules. Il a dit que si j'en étais, il avait jamais vu mes lettres. Et que si j'en étais pas, la capitaine les verrait. »",
        "Il se passe la main sur la figure. « Je sais ce que c'est, ce travail-là. J'ai pas besoin qu'on me l'explique. Je veux pas en être. Mais je veux pas retourner dans la cour. J'ai quarante ans, je crois. J'en ressortirais pas. »",
      ],
      choices: [
        { label: "« Va trouver la capitaine toi-même, avant lui. Dis-lui tout. »", to: "YA_chantage_aveu" },
        { label: "« Fais semblant d'en être. Et tiens-toi prêt. »", to: "YA_chantage_tu" },
      ] },
    YA_chantage_aveu: { act: "III", title: "La chambre de la capitaine", place: "sargues", ambiance: "nuit",
      text: [
        "Il y va. On ne sait pas ce qui se dit dans la chambre de la capitaine. On sait qu'il y reste une heure, et qu'il en ressort pâle, et qu'il passe le reste de la nuit sur le gaillard d'avant, à regarder le Clou du Nord.",
        { if: { has: "ya:dit_capitaine" }, text: "Le lendemain, la capitaine le croise sur le pont, et lui dit seulement, sans s'arrêter : « Vous n'avez pas levé la main, Guérec. Vous êtes venu me voir. C'est noté. »" },
        { if: { not: { has: "ya:dit_capitaine" } }, text: "Le lendemain, la capitaine le croise sur le pont, et lui dit seulement, sans s'arrêter : « Je ne vous ai pas demandé votre nom, à Morlenc, Guérec. Je ne vous le demanderai pas ici. Restez près de Benoît. »" },
        "Et le soir, Malandain le regarde, de l'autre bout du pont, longtemps, en se curant les dents avec un éclat de bois. Il a compris. Il ne dit rien. Il attend. Il attend toujours, Malandain. C'est la seule vertu qu'on lui connaisse.",
      ],
      choices: [{ label: "Le laisser à sa nuit", fx: { flag: "ya:aveu", penche: { malandain: -1 } }, back: true }] },
    YA_chantage_tu: { act: "III", title: "Le canonnier", place: "sargues", ambiance: "nuit",
      text: [
        "Guérec hoche la tête, lentement. « Faire semblant. J'ai fait semblant douze ans. Je sais faire. »",
        "Le lendemain, on le voit à la cambuse, à l'heure où s'y retrouvent les hommes du maître-coq, avec un quart de rhum qu'il ne boit pas. Malandain lui donne une claque sur l'épaule, l'épaule droite, au-dessous de la clavicule, et rit très fort. Guérec rit aussi. Son rire ressemble à un cordage qui casse.",
      ],
      choices: [{ label: "Le laisser à sa nuit", fx: { flag: "ya:tu" }, back: true }] },

    // ---------------------------------------------------------------- act IV, the chapel
    YA_porte: { act: "IV", title: "La porte", place: "misericorde", ambiance: "chateau",
      text: [
        "Toussaint Guérec s'est donné tout seul la garde de la porte de la chapelle, et personne n'a osé la lui reprendre. Il y passe les nuits, assis sur une pierre, un mousquet en travers des genoux, le dos au battant de chêne, si large que le battant disparaît derrière lui.",
        "Victorine lui apporte de l'eau de la source. Il boit, et il dit, en lui rendant la timbale, comme on parle du temps : « Ils sont tous là-bas, en bas, à la plage. Malandain. Ceux de la cour. S'ils montent, ils montent par ici. Je les connais. Je sais comment ils se battent. » Il caresse le mousquet. « Ils savent pas comment je me bats, moi. J'ai jamais eu l'occasion de le leur montrer. »",
      ],
      choices: [{ label: "Le laisser à sa porte", back: "A4w_jours" }] },
    YA_mur: { act: "IV", title: "Le mur", place: "misericorde", ambiance: "nuit",
      text: [
        "Au milieu de la nuit, une pierre tombe dans la cour, du côté du ravin, avec un bruit mat. Puis une autre. Puis une voix, très basse, de l'autre côté du mur : « Docteur. C'est Guérec. Tirez pas. »",
        "Il est accroché au mur par le bout des doigts, à quatre toises au-dessus du ravin, là où les sentinelles ne regardent pas parce que personne ne peut grimper par là. Il a grimpé par là.",
        "« J'ai fait semblant, dit-il, essoufflé. Ils m'ont cru. Demain, avant l'aube, ils montent par le ravin de l'ouest, pas par le sentier. Malandain mène. Ils sont quatorze. Ils ont la poudre de la sainte-barbe. Ils vont faire sauter la porte de la sacristie. Dites-le à la capitaine. »",
        "« Montez. Restez avec nous. — Non. S'ils me voient pas revenir, ils sauront. Ils changeront de chemin. » Il hésite, accroché au vide. « Si je reviens pas de demain, docteur, dites à la capitaine que j'ai pas levé la main sur un homme de son bord. C'est tout ce qu'elle m'a demandé. »",
        "Il disparaît dans le noir. On entend, longtemps, des cailloux qui roulent dans le ravin.",
      ],
      choices: [{ label: "Courir réveiller la capitaine", fx: { flag: "ya:averti" }, back: "A4w_jours" }] },

    // ---------------------------------------------------------------- act V, the last morning: the judgement
    YA_jugement: { act: "V", title: "Le livre de bord", place: "misericorde", ambiance: "temple",
      text: [
        "Le dernier matin, la capitaine Ribaud fait venir Guérec dans la sacristie, devant la médecin, avec le livre de bord ouvert sur la table, à la page du jour, la plume trempée. Elle ne s'assied pas.",
        { if: { has: "ya:aveu" }, text: "« Vous êtes venu me voir avant qu'on vienne me le dire, Guérec. Vous avez tenu la porte. Vous avez fait plus que votre part. »" },
        { if: { has: "ya:averti" }, text: "« Vous avez escaladé un mur de quatre toises au-dessus d'un ravin pour nous dire par où ils montaient. Sans vous, nous serions morts dans la sacristie, ou dans leurs mains. »" },
        "« Maintenant, écoutez-moi. Je suis capitaine au commerce. Je tiens un livre de bord. Ce livre ira devant l'Amirauté de Morlenc, et l'Amirauté le lira. Si j'écris que j'ai à bord un forçat évadé de Brisegrève, on viendra vous chercher à la coupée. Si je ne l'écris pas, et qu'on l'apprend, on viendra me chercher, moi. » Elle regarde la plume. « Je n'ai jamais rien écrit de faux dans ce livre. Jamais. Pas une heure, pas un nœud. Mon père non plus. »",
        "Guérec se tait. Il regarde le plancher.",
        "La capitaine se tourne vers Victorine. « Docteur. Vous êtes la seule ici qui signe les actes de décès. Qu'est-ce que vous me conseillez ? »",
      ],
      choices: [
        { label: "« Toussaint Guérec est mort des fièvres, cette nuit. Je signerai. »", to: "YA_jugement_raye" },
        { label: "« Vous n'avez jamais rien écrit de faux. Ne commencez pas pour lui, ni pour moi. »", to: "YA_jugement_fers" },
        { label: "« Demandez-lui ce qu'il veut, lui. Personne ne le lui a jamais demandé. »", to: "YA_jugement_reste" },
      ] },
    YA_jugement_raye: { act: "V", title: "Le livre de bord", place: "misericorde", ambiance: "temple",
      text: [
        "La capitaine regarde la médecin longtemps. Puis elle s'assied, enfin, et elle écrit, d'une main qui ne tremble pas, sur la page du jour : *Ce matin, à quatre heures, décédé des fièvres le nommé Toussaint Guérec, gabier, de Kerverzot. Inhumé à terre. Constaté par Mme V. Davrigny, médecin du bord.* Elle tend la plume. Victorine signe.",
        "« Voilà, dit la capitaine. Toussaint Guérec est mort. Paix à son âme ; c'était un bon gabier. » Elle referme le livre. « Il me manque un homme pour la manœuvre du retour. Je vais embaucher le premier qui se présente. Vous vous appelez comment, vous ? »",
        "Le géant la regarde. Il ouvre la bouche, et il ne sait pas quoi dire. Il n'a jamais choisi son nom. On lui en a donné un au baptême, un numéro au fort, un autre nom sur un quai.",
        "« Je sais pas, capitaine. — Alors trouvez, d'ici ce soir. Un nom qui ne soit à personne. Je vous l'inscrirai. »",
        "Il sort dans la cour, au soleil. On le voit marcher de long en large, entre les tombes de la fosse et la source, en remuant les lèvres, comme un enfant qui apprend une leçon, à la recherche d'un nom à lui.",
      ],
      choices: [{ label: "Le regarder chercher", fx: { quest: "YA", flag: "ya:raye" }, back: "A5x_debut" }] },
    YA_jugement_fers: { act: "V", title: "Le livre de bord", place: "misericorde", ambiance: "temple",
      text: [
        "La capitaine hoche la tête, lentement, comme si elle avait espéré une autre réponse et se félicitait de ne pas l'avoir reçue.",
        "Elle écrit : *Le nommé Guérec, gabier, reconnu pour forçat évadé des galères de Brisegrève. S'est conduit à terre avec un courage remarquable. Ramené à Morlenc pour y être remis à l'Amirauté, avec la présente recommandation.* Elle signe. Elle fait signer Victorine en témoin. Puis elle ajoute, en dessous, une ligne qu'elle souligne : *Je demande sa grâce.*",
        "« On ne vous mettra pas aux fers à bord, Guérec. Vous travaillerez comme les autres. À Morlenc, vous descendrez avec moi, et je parlerai pour vous. On m'écoute, à l'Amirauté. Pas toujours. »",
        "Guérec ne dit rien. Il regarde la page, où il ne sait pas lire son nom, ni l'autre. Puis il dit : « Douze ans, j'ai attendu qu'on me reprenne. C'est presque reposant, maintenant que c'est fait. »",
      ],
      choices: [{ label: "Fermer la porte de la sacristie derrière eux", fx: { quest: "YA", flag: "ya:fers" }, back: "A5x_debut" }] },
    YA_jugement_reste: { act: "V", title: "Ce qu'il veut", place: "misericorde", ambiance: "temple",
      text: [
        "La capitaine se tourne vers lui. « Eh bien, Guérec ? »",
        "Il met longtemps. Il regarde par la porte de la sacristie, la cour, la source, les arbres qui ont percé le toit de la nef, et plus loin, entre deux troncs, la mer.",
        "« Je reste, dit-il. Ici. Il y a de l'eau, il y a des fruits, il y a des gens là-haut qui oublient tout et des gens en bas qui savent rien. Personne ici sait lire mes lettres. Personne. » Il ouvre sa chemise, et pour la première fois, il la laisse ouverte. « Je veux me lever le matin sans regarder si on me regarde. Je l'ai jamais fait. Je voudrais savoir ce que c'est, avant de mourir. »",
        "La capitaine écrit : *Le nommé Guérec, gabier, a demandé à rester à terre. Accordé.* Elle signe. C'est vrai, chaque mot. Elle a l'air soulagée.",
        "Avant le départ, il donne à Victorine son couteau de gabier, le seul objet qu'il possède, pour l'enfant du Fanal, ou pour quelqu'un d'autre, comme elle voudra.",
      ],
      choices: [{ label: "Prendre le couteau", fx: { quest: "YA", flag: "ya:reste" }, back: "A5x_debut" }] },
  },
  extras: {
    people: {
      guerec: { name: "Toussaint Guérec", aka: ["Guérec", "le grand Toussaint", "le gabier de misaine"], f: false,
        qui: "Un gabier géant et doux, de Kerverzot, qui garde sa chemise et ne descend pas à terre." },
    },
    quests: [
      { id: "YA", act: "III", kind: "annexe", title: "Le matelot marqué", start: "YA_m_etoiles", doit: "miserables", echo: ["ya:raye", "ya:fers", "ya:reste", "ya:repris", "ya:rendu"] },
    ],
  },
};
