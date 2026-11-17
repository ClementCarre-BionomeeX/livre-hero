// L'Île Folle-Aiguille · side story « Le coup gardé » (owes its question to Pushkin's The Shot: what is revenge
// worth if the other man does not fear it, and may a third person decide when it is paid?). Act III, Victorine at
// Brisegrève: an artillery captain of the fort fires a pistol every dawn on the jetty. Twelve years ago, in a duel, his
// opponent fired first, missed, and waited for the reply peeling an apple; the captain kept his shot, to take it when
// the man had something to lose. The man has just landed, newly married, on the supply tender. The duel is set for
// dawn, and the captain asks the doctor to attend. Victorine warns the governor (to:gouverneur), speaks to the bride
// (to:femme), or attends as the surgeon and holds her tongue (to:temoin). Wired in A3v_brisegreve.
module.exports = {
  passages: {
    TO_coups: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "nature",
      fx: { meet: "kermadec" },
      text: [
        "Le premier matin, à l'aube, Victorine est réveillée par un coup de pistolet. Puis un autre, une minute après. Puis un autre. Elle compte jusqu'à douze. Sur le pont, l'homme de quart hausse les épaules : c'est le capitaine d'artillerie du fort, dit-il, qui tire tous les matins, sur la jetée, depuis des années. Le bourg règle ses horloges dessus.",
        "Elle descend à terre. Au bout de la jetée, face au large, un homme en redingote noire recharge un pistolet de duel, avec des gestes lents, précis, presque tendres. Devant lui, à vingt-cinq pas, planté dans une fente de la roche, un piquet de bois où l'on a cloué une carte à jouer, un as de cœur. Le cœur a disparu. À la place, un trou, un seul, net, de la taille d'une pièce. Les douze balles sont passées par le même trou.",
        "Il se retourne. Un homme de quarante ans, mince, sec, au visage jaune et immobile, avec une moustache noire et des yeux d'un gris si pâle qu'ils paraissent vides. Il s'incline. « Capitaine Tancrède Kermadec. Vous êtes la médecin de la Cormorane. On m'a parlé de vous au dîner du gouverneur. Vous avez de bonnes mains, paraît-il. Moi aussi. » Il lève le pistolet, vise, tire. Treizième balle, même trou."
      ],
      choices: [
        { label: "Lui demander pourquoi il tire tous les matins", to: "TO_histoire" }
      ] },
    TO_histoire: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "nature",
      text: [
        "« Pour garder la main, dit-il. J'ai un coup à tirer. Je le dois à quelqu'un depuis douze ans. »",
        "Il raconte en rechargeant, sans hâte, comme on raconte une recette.",
        "« J'étais lieutenant, à Morlenc. Il y avait au régiment un jeune homme, le vicomte de Lesven, riche, beau, drôle, aimé, heureux de tout, qui réussissait sans effort tout ce que je faisais avec peine. Je l'ai haï, je l'avoue, avec application. Un soir, il m'a dit un mot, au jeu. Je l'ai provoqué. Nous nous sommes battus à l'aube, sur la grève, à douze pas. Le sort l'a désigné pour tirer le premier. Il a tiré. Il a troué mon chapeau.",
        "« Puis il a attendu mon coup. Il avait, dans sa poche, une pomme. Il l'a sortie. Il a pris son canif, et il l'a pelée, pendant que je le visais, en une seule spirale, sans se presser, en me regardant de temps en temps d'un air aimable, comme on regarde un domestique qui tarde à servir. Il n'avait pas peur. Il n'avait peur de rien. Il avait vingt-deux ans, et rien à perdre que la vie, qui ne lui coûtait rien.",
        "« J'ai baissé mon pistolet. J'ai dit que je garderais mon coup, et que je viendrais le tirer le jour où sa vie lui coûterait quelque chose. Il a ri, il a mangé la pomme, il a dit : à votre service. Puis j'ai demandé ma mutation ici, au bout du monde, et j'ai attendu. »",
        "Il referme le pistolet. « Il a débarqué hier soir, du ravitailleur. Avec sa femme. Ils se sont mariés il y a deux mois. Elle a dix-neuf ans. Elle s'appelle Isaure. Il est inspecteur des fortifications, et il ne m'a pas reconnu. Demain, à l'aube, ici, il me reconnaîtra. J'aimerais que vous soyez là. Un médecin, dans ces affaires, c'est l'usage. »"
      ],
      choices: [
        { label: "Aller voir ce vicomte de Lesven, au fort", to: "TO_vicomte" }
      ] },
    TO_isaure: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "village",
      text: [
        "Isaure de Lesven grimpe l'escalier du rempart deux marches à la fois, en relevant ses jupes, et arrive en haut hors d'haleine et ravie. Elle se penche entre deux créneaux, au-dessus du vide, au-dessus de la mer grise qui bat le pied de la roche trois cents pieds plus bas. Victorine la retient par la taille. Isaure rit. Elle dit qu'elle n'a jamais eu peur de rien, que c'est pour cela que son mari l'a épousée.",
        "Elle parle de lui sans s'arrêter, comme on parle d'un pays qu'on vient de découvrir. Qu'il fait tout bien, sans effort, le cheval, la danse, l'escrime, le dessin, les mathématiques des fortifications. Qu'on l'aime partout. Qu'il n'a pas d'ennemis. Elle dit : « Il prétend qu'il en a eu un, une fois, au régiment, un garçon très sombre qui ne riait jamais, et qu'il a dû se battre avec lui. Il dit qu'il ne se rappelle même plus son nom. Il dit que c'était un duel pour rire. »",
        "Elle se retourne, adossée au créneau, les cheveux défaits par le vent, et elle regarde le bourg, en bas, la jetée noire qui avance dans la mer. Elle dit qu'il y a un homme, là-bas, qui tire au pistolet tous les matins, et que ça l'a réveillée, et que c'est sinistre, de se réveiller dans un endroit pareil au bruit d'un pistolet. Elle frissonne, puis rit de nouveau.",
        "Puis, plus bas, la main sur son ventre, elle dit qu'elle n'en a encore parlé qu'à son mari, mais qu'elle est presque sûre, pour l'été. Elle demande à Victorine si on peut le savoir, déjà, à des signes. Victorine lui pose deux questions. Isaure répond. Victorine dit oui, on peut le savoir. Isaure lui saute au cou, sur le rempart, au-dessus de la mer."
      ],
      choices: [
        { back: "TO_vicomte", label: "Retourner dans la cour du fort" }
      ] },
    TO_lebihan: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "village",
      text: [
        "Le gouverneur Lebihan range ses tabatières dans un coffret de palissandre, une par une, chacune dans son alvéole de velours, et il répond à Victorine sans lever les yeux, avec la placidité d'un homme qui a fait de l'ordre sa seule passion.",
        "Kermadec ? Un excellent officier. Le meilleur tireur de la garnison, et peut-être de la côte. Il a demandé sa mutation à Brisegrève il y a douze ans, ce que tout le monde fuit, et il y est resté, ce qui s'est vu encore moins. Sobre, sans jeu, sans visites. Il lit, il tire, il fait son service. Il vit sans amis, et s'en porte très bien.",
        "Le gouverneur referme le coffret. Il dit qu'on l'a proposé trois fois pour une promotion, et qu'il a refusé trois fois, parce qu'une promotion l'aurait obligé à quitter le fort. Il dit qu'il lui a demandé un jour ce qu'il attendait, au bout du monde. Kermadec lui a répondu : « Un ravitailleur, mon gouverneur. » Le gouverneur a cru à une plaisanterie. Il a ri. Il s'en souvient parce que c'est la seule fois.",
        "Il caresse le coffret. Il dit, en passant, que l'inspecteur des fortifications est arrivé hier par le ravitailleur, justement, et qu'il faudrait les présenter l'un à l'autre, deux officiers de valeur, à dîner. Il demande à Victorine si elle croit que ce serait une bonne idée. Victorine dit qu'elle ne croit pas."
      ],
      choices: [
        { back: "TO_vicomte", label: "Retourner dans la cour du fort" }
      ] },
    TO_vicomte: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "village",
      fx: { meet: "lesven" },
      text: [
        { first: true, text: "Elle le trouve dans la cour du fort, avec le gouverneur Lebihan, qui lui montre ses tabatières. L'inspecteur des fortifications a trente-quatre ans. Il est toujours beau, un peu épaissi, un peu doré, avec le rire facile d'un homme que la vie n'a jamais contrarié qu'une fois, et qui l'a oublié." },
        { first: true, text: "Sa femme est à son bras. Isaure de Lesven, dix-neuf ans, petite, brune, vive, une figure de chat qui rit de tout, et qui regarde son mari comme on regarde une vitrine de confiseur. Elle a le mal de mer depuis Morlenc. Elle vient demander à la médecin un remède, en riant de sa propre faiblesse." },
        { first: true, text: "Victorine lui donne du gingembre. Elle regarde le vicomte. Il est heureux. Il est heureux d'une façon presque indécente, comme un enfant à une fête. Il parle de sa femme, de son poste, de la maison qu'ils vont acheter au retour, avec un verger, et de l'enfant qu'ils attendent, peut-être, pour l'été. Isaure rougit. Il rit." },
        { first: true, text: "Il a, pour la première fois de sa vie, quelque chose à perdre. Victorine le voit. Elle se dit que le capitaine Kermadec a vu la même chose, hier soir, depuis la jetée, avec ses yeux vides." },
        { again: true, text: "Le vicomte de Lesven rit dans la cour du fort, sa femme à son bras, heureux comme un enfant à une fête." }
      ],
      choices: [
        { label: "Accompagner Isaure sur les remparts, qui veut voir la mer d'en haut", to: "TO_isaure", hide: { seen: "TO_isaure" } },
        { label: "Demander au gouverneur ce qu'il sait du capitaine Kermadec", to: "TO_lebihan", hide: { seen: "TO_lebihan" } },
        { label: "Rentrer à bord, et passer la nuit à réfléchir", to: "TO_nuit" }
      ] },
    TO_nuit: { act: "III", title: "Le coup gardé", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle ne dort pas. Elle entend, de l'autre côté de l'eau, la mer battre le pied de Brisegrève avec une régularité de bourreau qui frappe un tambour. Elle entend, dans sa tête, le petit bruit sec du pistolet qu'on referme.",
        "Elle fait la liste, comme elle fait toujours, comme à l'hôpital. Le duel est interdit ; le gouverneur peut l'empêcher d'un mot, et mettre le capitaine aux arrêts, et ce sera fini, et le capitaine attendra encore douze ans, ailleurs, et tirera ailleurs. La femme ne sait rien ; elle a dix-neuf ans, et le droit, peut-être, de savoir qu'on va tuer son mari à l'aube. Ou bien rien, ne rien faire, aller sur la jetée avec sa trousse, comme on le lui a demandé, parce qu'un médecin, dans ces affaires, c'est l'usage, et que les affaires des hommes sont aux hommes.",
        "Vers trois heures, elle s'aperçoit qu'elle a les mains froides. Elle se dit que c'est la peur. Elle s'aperçoit ensuite, avec stupeur, que sa peur va tout entière à l'autre, celui qui tire tous les matins sur un as de cœur, et qui va, demain, s'il tire, n'avoir plus rien à faire de sa vie.",
        "À quatre heures, elle se lève."
      ],
      choices: [
        { label: "Monter au fort réveiller le gouverneur", fx: { flag: "to:gouverneur" }, to: "TO_gouverneur" },
        { label: "Frapper à la porte de la jeune femme, avant l'aube", fx: { flag: "to:femme" }, to: "TO_femme" },
        { label: "Prendre sa trousse et aller sur la jetée, comme on le lui a demandé", fx: { flag: "to:temoin" }, to: "TO_temoin" }
      ] },
    TO_gouverneur: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "nuit",
      text: [
        "Le gouverneur Lebihan, réveillé en bonnet de coton, écoute en caressant une tabatière qu'il a prise sur sa table de nuit par réflexe, comme d'autres prennent un chapelet. Quand elle a fini, il soupire.",
        "« Un duel. Dans mon fort. Avec un inspecteur. » Il se lève. « Vous avez bien fait, docteur. Vous avez très bien fait. Vous m'avez évité un rapport. »",
        "À l'aube, quand le capitaine Kermadec arrive au bout de la jetée, il y trouve quatre soldats et un sergent qui le prient de leur remettre son épée et ses pistolets. Il les remet. Il regarde Victorine, qui est là, sur le quai, sa trousse à la main, parce qu'elle a jugé qu'elle lui devait au moins d'être là.",
        "Il ne lui en veut pas. C'est le pire. Il s'incline, poliment, comme le premier jour. « Vous m'avez rendu un mauvais service, docteur. Le seul qu'on pouvait me rendre. Il va falloir que j'attende encore. Je ne sais pas si j'ai encore douze ans. »",
        "On l'emmène aux arrêts. Le vicomte, mis au courant au déjeuner, rit beaucoup, avec sa femme, de cet artilleur qui avait la mémoire si longue. Puis, au dessert, il cesse de rire, et Victorine, à l'autre bout de la table du gouverneur, le voit poser son couteau à fruits, lentement, sans finir sa poire."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TO" }, back: "A3v_brisegreve" }
      ] },
    TO_femme: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "nuit",
      text: [
        "Isaure de Lesven ouvre en chemise, une bougie à la main, la figure gonflée de sommeil. Le lit, derrière elle, est vide. Son mari est sorti avant quatre heures, dit-elle, pour une inspection matinale. Victorine lui dit la vérité. Elle la dit en dix phrases.",
        "La jeune femme ne crie pas. Elle pose la bougie. Elle s'habille en une minute, mal, à l'envers, et elle sort en courant, pieds nus, par l'escalier du fort, vers la jetée, et Victorine court derrière elle.",
        "Au bout de la jetée, à l'aube grise, ils sont face à face, à douze pas. Le vicomte a déjà tiré : il y a encore de la fumée au-dessus de lui. Il a manqué. Il attend. Il n'a pas de pomme. Il est blanc comme un drap. Le capitaine Kermadec lève lentement son pistolet.",
        "Isaure se jette entre eux. Elle se jette contre son mari, les bras autour de son cou, et elle hurle, elle supplie, elle tourne vers le capitaine une figure défaite, mouillée, laide de terreur. Le vicomte essaie de l'écarter. Il dit : « Va-t'en, va-t'en, je t'en prie. » Sa voix tremble. Ses mains tremblent.",
        "Le capitaine regarde. Il regarde longtemps. Il regarde la peur sur le visage de l'homme qui pelait une pomme. Puis il sourit, pour la première fois, un sourire mince, presque doux.",
        "« Voilà, dit-il. Je l'ai vu. C'est tout ce que je voulais. » Il se tourne vers la mer, et il tire, en l'air, au-dessus des vagues. Il remet son pistolet dans sa boîte. Il s'incline devant Isaure. « Je vous demande pardon, madame. » Il s'éloigne sur la jetée, sans se retourner.",
        "Le lendemain matin, le bourg de Brisegrève ne sait pas l'heure. Personne n'a tiré, à l'aube."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TO" }, back: "A3v_brisegreve" }
      ] },
    TO_temoin: { act: "III", title: "Le coup gardé", place: "brisegreve", ambiance: "nature",
      text: [
        "Elle va sur la jetée, avec sa trousse. Elle se tient à l'écart, contre un bollard, comme on lui a dit que se tiennent les médecins. Elle ne dit rien. Elle a décidé que les paroles, ce matin, appartenaient aux autres.",
        "Le vicomte arrive, avec un sergent pour témoin. Il a reconnu le capitaine, la veille au soir, en le croisant dans la cour ; on le voit sur sa figure. Il essaie de rire. Il rit mal. Le sort le désigne, encore, pour tirer le premier. Il tire. Il manque, de beaucoup ; il a tiré trop vite, et la balle se perd dans la mer.",
        "Il attend. Il a, dans sa poche, quelque chose. Il le sort, par une sorte de bravade désespérée, de fidélité au jeune homme qu'il a été : une pomme. Il sort son canif. Il commence à la peler. Ses mains tremblent si fort que la peau se casse au premier tour, au deuxième, au troisième. Il laisse tomber le canif.",
        "Le capitaine Kermadec le regarde. Puis il lève son pistolet, vise, et tire. La pomme saute de la main du vicomte, coupée en deux, et roule sur les pavés de la jetée, jusqu'aux pieds de Victorine.",
        "Le capitaine remet son pistolet dans sa boîte. « Nous sommes quittes, monsieur, dit-il. Vous avez eu peur. Je n'en demandais pas davantage. » Il s'éloigne. En passant devant Victorine, il ramasse une moitié de pomme, la regarde, la lui tend. « Pour votre trousse, docteur. Contre le scorbut. C'est le seul usage honnête qu'on en ait jamais fait. »",
        "Elle la garde. Elle ne sait pas si elle a eu raison de se taire. Elle sait que personne n'est mort, ce matin, et elle soupçonne qu'elle n'y est pour rien."
      ],
      choices: [
        { label: "Rentrer à bord", fx: { quest: "TO" }, back: "A3v_brisegreve" }
      ] }
  },
  extras: {
    people: {
      kermadec: { name: "Tancrède Kermadec", aka: ["le capitaine d'artillerie"], qui: "Capitaine d'artillerie du fort de Brisegrève, qui tire douze balles par le même trou chaque matin, sur la jetée, depuis douze ans." },
      lesven: { name: "le vicomte de Lesven", aka: ["l'inspecteur des fortifications"], qui: "Inspecteur des fortifications, jeune marié, débarqué à Brisegrève avec sa femme Isaure ; il pelait une pomme pendant un duel, il y a douze ans." }
    },
    quests: [
      { id: "TO", act: "III", kind: "annexe", title: "Le coup gardé", start: "TO_coups", doit: "coupdepistolet", echo: ["to:gouverneur", "to:femme", "to:temoin"] }
    ]
  }
};
