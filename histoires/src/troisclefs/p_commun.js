// Prologue, the common thread: the attic, Loridan's test, the council under the porch (posts `p`), the rendezvous at
// eleven, the vote on the plan (`plan_p`), the return, the real bargain and the vote on it (`marche`).
// Shared marks read here: monde:p:mecanisme, monde:p:ancrage, monde:p:apprenti (main) · monde:p:rondes, monde:p:fuite,
// monde:p:charretier (oeil) · monde:p:clef_chasse, monde:p:toast, monde:p:ermeline (voix) · monde:p:reine=propre|bruit.
var POSTE = function (m, o, v) { return [{ if: { role: "p", is: "main" }, to: m }, { if: { role: "p", is: "oeil" }, to: o }, { to: v }]; };

module.exports = {
  passages: {
    // ------------------------------------------------------------ the attic
    Pc_grenier: { act: "P", title: "Le grenier de la Clef Tordue", place: "clef_tordue", backName: "le grenier",
      text: [
        { first: true, text: "Le grenier de la Clef Tordue a la forme d'une coque de barque retournée, et à peu près la même odeur. Trois paillasses s'y partagent l'espace avec une cheminée qui traverse la pièce sans la chauffer, un coffre dont la Douairière garde la clef, et une lucarne par laquelle Aiguemorne se montre telle qu'elle est : un piton de roche noire hérissé de toits, coiffé d'une citadelle, et piqué, de bas en haut, de plus d'enseignes de serruriers qu'un hérisson n'a d'épines." },
        { first: true, text: "C'est le soir de la Saint-Fer. Depuis midi, les cloches des Maîtres sonnent l'une après l'autre, chaque atelier tenant à faire entendre que la sienne est mieux fondue que celle du voisin ; il en résulte un vacarme pieux, d'une régularité d'horloge détraquée, que les Bas-Fonds écoutent en haussant les épaules. Là-haut, on fête le fer. Ici, on le lime." },
        { again: true, text: "Le grenier, ses trois paillasses, sa lucarne ouverte sur les toits. Les cloches de la Saint-Fer sonnent toujours." },
        { first: true, text: "{autre} sont là, chacun sur sa paillasse, à faire ce que font les gens du métier un soir sans ouvrage : graisser un outil qui n'en a nul besoin, et guetter l'escalier." },
        { first: true, if: { is: { reve: "atelier" } }, text: "Sous ta paillasse, dans un bas de laine, dorment quatre écus et onze sous. Rue des Ferronniers, le bail d'une échoppe en coûte deux cents, et la maîtrise le double. Tu as fait le calcul : au train où vont les affaires, tu accrocheras ton enseigne vers l'âge de cent quarante ans." },
        { first: true, if: { is: { reve: "plombs" } }, text: "De la lucarne, en se penchant, on aperçoit tout en haut du piton une ligne de toits gris, plus ternes que les autres : les Plombs. Quelqu'un des tiens compte les jours là-dessous depuis deux hivers, pour trois cents écus de dette. Tu regardes ces toits chaque soir, comme d'autres font leur prière, et avec à peu près autant de résultat." },
        { first: true, if: { is: { reve: "nom" } }, text: "Ta clef de baptême pend à ton cou, comme celle de tout le monde. La tienne porte une particularité : l'hospice de la Morne te l'a remise à six ans, d'un lot acheté à la grosse, et le registre qui dit qui t'a déposé{e} à sa porte est rangé quelque part sous une serrure que tu n'as pas encore trouvée." },
        { first: true, if: { is: { reve: "large" } }, text: "Tu as cloué au-dessus de ta paillasse une carte du pays, volée à un colporteur. Aiguemorne y tient la place d'une tache d'encre ; tout autour, des routes s'en vont vers des noms que tu n'as jamais entendu prononcer. Tu les sais par cœur, dans l'ordre, comme un chapelet." },
        { first: true, text: "Des pas dans l'escalier, lents, appuyés, accompagnés d'un cliquetis de trousseau. La Douairière monte rarement jusqu'ici. Quand elle prend cette peine, c'est qu'il y a de l'argent en bas, ou des ennuis ; d'ordinaire, les deux ont pris la même chaise." },
        { first: true, text: "Sa tête paraît au ras du plancher, chignon gris, œil plissé. « Descendez. Tous les trois. Lavez-vous les mains, il y a du monde. »" },
      ],
      fx: { meet: "douairiere" },
      choices: [
        { label: "Descendre à la salle du fond", to: "Pc_salle", big: true, hide: { seen: "Pc_offre" } },
        { label: "Passer d'abord au comptoir de la Douairière", to: "Pc_comptoir", if: { seen: "Pc_offre" }, hide: { not: { seen: "Pc_offre" } } },
        { label: "La rue des Ferronniers vous attend : y monter", to: "Pc_rue", big: true, hide: { not: { seen: "Pc_depart" } } },
      ] },

    Pc_salle: { act: "P", title: "La salle du fond", place: "clef_tordue",
      text: [
        "La salle du fond est celle où la Douairière reçoit les gens qui préfèrent entrer par la cour. Une table, un banc, une chandelle de suif, et un judas qui donne sur la grande salle, afin que la conversation la plus privée de la maison reste la mieux surveillée.",
        "Un homme est assis au bout de la table, très droit, les mains à plat devant lui. Il porte du drap noir sans un pli, et des gants gris qu'il a gardés pour s'asseoir, pour toucher son verre, et probablement pour naître. Il vous regarde entrer l'un après l'autre, sans hâte, comme un notaire compte des héritiers.",
        "« Voici les trois, dit la Douairière. Monsieur s'appelle Loridan. Il a de l'argent, des manières, et une proposition. Je vous énumère ses qualités dans l'ordre où je les estime. »",
        "L'homme incline la tête d'un pouce. « Madame Berlue me flatte. Asseyez-vous. Je serai bref : je ne suis pas payé à l'heure. »",
      ],
      fx: { meet: "loridan" },
      choices: [{ label: "T'asseoir sur le banc", to: "Pc_offre" }] },

    Pc_offre: { act: "P", title: "L'examen", place: "clef_tordue", backName: "la table de Loridan",
      text: [
        { first: true, text: "« Ce soir, à l'hôtel des Maîtres du Fer, on expose la Serrure-Reine. » Loridan parle d'une voix de sacristie, égale et basse, qui oblige à se pencher. « Le chef-d'œuvre de l'année. Onze pênes, un secret, neuf livres d'acier bleui sous une cloche de verre, au milieu de trois cents convives. À minuit, on la descendra au trésor de la guilde, d'où elle ne sortira plus. »" },
        { first: true, text: "Il pose sur la table une bourse plate, qui rend en touchant le bois le son mat des pièces bien tassées. « Soixante écus si la Serrure-Reine se trouve sur cette table avant la cloche de minuit. Entière. Et sans qu'une goutte de sang ait coulé pour elle, d'un côté ou de l'autre : je tiens à ce point plus qu'à la serrure. »" },
        { first: true, text: "La Douairière s'est adossée au mur, bras croisés. « Soixante écus pour un objet qui en vaut six cents chez un amateur. Monsieur se moque de la serrure. Monsieur vous fait passer un examen, mes enfants, et il a la bonté de vous payer pendant l'épreuve. C'est déjà plus que n'en font les universités. »" },
        { first: true, text: "Loridan ne dément pas. Il attend, les mains à plat, avec la patience d'un homme qui a déjà obtenu la réponse et vient seulement la chercher." },
        { again: true, text: "Loridan attend, les mains à plat sur la table, la bourse entre ses gants." },
      ],
      choices: [
        { label: "« Un examen pour quoi ? »", to: "Pc_q_pourquoi", once: true },
        { label: "« Qui vous envoie ? »", to: "Pc_q_qui", once: true },
        { label: "« Et si l'on vous rapporte la serrure à minuit et quart ? »", to: "Pc_q_echec", once: true },
        { label: "Regarder {autre}, puis hocher la tête : marché conclu", to: "Pc_depart", big: true },
      ] },
    Pc_q_pourquoi: { act: "P", title: "Pour quoi", place: "clef_tordue",
      text: [
        "« Pour une affaire plus longue, plus haute et mieux payée, que je vous exposerai à minuit si vous êtes en état de l'entendre. » Il réfléchit, cherchant visiblement jusqu'où il peut aller. « J'ai besoin de trois personnes qui travaillent ensemble, qui se taisent ensuite, et qui épargnent les gens. On m'a dit que cela existait dans cette maison. Je suis venu vérifier ; je suis d'un naturel vérificateur. »",
        "« On t'a dit vrai pour les deux premiers points, grogne la Douairière. Le troisième leur coûte, mais ils s'y tiennent. »",
      ],
      choices: [{ back: "Pc_offre" }] },
    Pc_q_qui: { act: "P", title: "Qui", place: "clef_tordue",
      text: [
        "« Une personne qui ne peut pas se déplacer. » Loridan a répondu tout de suite, et s'arrête là, avec l'air de quelqu'un qui vient de dire une chose exacte et qui en est quitte.",
        "« Malade ? »",
        "« Empêchée. » Il lisse le poignet de son gant gauche. « Vous aurez remarqué que je réponds aux questions. Vous remarquerez, à l'usage, que je réponds rarement à côté et jamais au-delà. C'est une infirmité de mon ancien état ; j'ai longtemps écrit sous la dictée. »",
      ],
      fx: { clue: "c_empechee" },
      choices: [{ back: "Pc_offre" }] },
    Pc_q_echec: { act: "P", title: "Minuit et quart", place: "clef_tordue",
      text: [
        "« Alors je vous paierai la moitié, je vous remercierai, et j'irai frapper à une autre porte. Il y en a une, dans cette ville, où l'on porte des gants d'une autre couleur. »",
        "La Douairière décroise les bras. Le trousseau, à sa ceinture, sonne une fois, sèchement. Dans tout Aiguemorne, il n'existe qu'une autre porte de ce genre, et celle qui la tient a appris le métier ici même, dans cette salle, avant de partir avec la moitié de la clientèle.",
        "« Ils seront à l'heure », dit-elle.",
      ],
      choices: [{ back: "Pc_offre" }] },

    Pc_depart: { act: "P", title: "La règle", place: "clef_tordue",
      text: [
        "Loridan se lève, salue, et sort par la cour en homme qui connaît le chemin. La Douairière attend que le loquet soit retombé.",
        "« Écoutez-moi, parce que je le dis une fois par affaire et que c'est toujours la même chose. Un coup, c'est trois choses : un œil qui voit, une voix qui ment, une main qui prend. L'œil reste dehors : il compte les rondes, il flaire la sortie, il sait avant tout le monde quand il faut courir. La voix entre par la grande porte, bien habillée, et occupe les gens du côté où l'on ne travaille pas. La main passe par où l'on ne passe pas, et touche à l'objet. »",
        "Elle vous regarde tous les trois, l'un après l'autre. « Chacun de vous sait faire les trois, plus ou moins mal. Partagez-vous les postes comme vous l'entendrez, sur place, quand vous aurez vu la maison ; je ne veux pas le savoir. Retrouvez-vous à onze heures sous le porche du tonnelier, en face de l'hôtel, et dites-vous tout. Tout. Une compagnie où l'on garde ce qu'on a vu, cela s'appelle trois voleurs qui se trouvent habiter la même rue. »",
        "« Fifrelin traînera du côté de la fête. S'il siffle deux fois, c'est le guet. S'il siffle trois fois, c'est moi, et vous ne voulez pas savoir pourquoi. »",
      ],
      fx: { ep: ["perso", 200], met: "fifrelin" },
      choices: [
        { label: "Passer au comptoir : la Douairière vend aussi aux siens", to: "Pc_comptoir" },
        { label: "Monter avec {autre} vers la rue des Ferronniers", to: "Pc_rue", big: true },
      ] },

    Pc_comptoir: { act: "P", title: "Le comptoir de la Douairière", place: "clef_tordue", shop: "douairiere",
      text: [
        { first: true, text: "Derrière le comptoir de la grande salle, sous les pichets, la Douairière tient un second commerce dans un tiroir à double fond. Elle l'ouvre pour vous avec la mine d'un apothicaire qui délivre des poisons à des gens de connaissance." },
        { first: true, text: "« Prix d'amis. C'est-à-dire que je vous vole moins que les autres, et que je vous fais crédit de ma conversation. »" },
        { again: true, text: "Le tiroir à double fond, ses outils rangés par taille, et la Douairière qui attend que tu te décides." },
      ],
      choices: [
        { label: "Monter vers la rue des Ferronniers", to: "Pc_rue", big: true, hide: { seen: "Pc_rue" } },
        { back: "Pc_grenier" },
      ] },

    // ------------------------------------------------------------ the street, the council
    Pc_rue: { act: "P", title: "La rue des Ferronniers, le soir de la Saint-Fer", place: "ferronniers", backName: "la rue des Ferronniers",
      fx: { until: 20 },
      text: [
        "On monte des Bas-Fonds à la rue des Ferronniers par l'escalier des Cent-Verrous, dont chaque marche porte, scellé dans la pierre, un cadenas offert par un apprenti reçu maître : la coutume veut qu'on en jette la clef dans la Morne. La ville garde ainsi, sous les pieds de tout le monde, plusieurs milliers de serrures que personne n'ouvrira plus, et elle trouve cela très beau.",
        "En haut, la rue flambe. Cent enseignes de fer forgé, clefs géantes, coqs, soleils, mains fermées, se balancent au-dessus d'une foule en habits de fête, et chacune a reçu pour la nuit sa lanterne, de sorte que les ombres des clefs se croisent sur les façades comme les barreaux d'une grille. On vend des gaufres moulées en forme de serrure. Un montreur fait ouvrir un coffre par un singe, aux applaudissements de gens qui paieraient cher, demain, pour que le singe ignore leur adresse.",
        "L'hôtel des Maîtres du Fer occupe le milieu de la rue : une façade étroite et haute, noire, percée de fenêtres à meneaux derrière lesquelles on voit passer des lustres et des perruques. Deux gardes en casaque bleue encadrent le perron. Sur le toit, entre les cheminées, une lanterne des morts brûle pour les Maîtres défunts ; elle éclaire juste assez d'ardoises pour qu'on mesure tout ce qu'elle laisse dans le noir.",
        "En face, le porche du tonnelier offre son ombre et son odeur de futaille. Vous vous y rangez tous les trois, et vous regardez la maison comme on regarde une serrure : en cherchant où elle a été faite pour céder.",
      ],
      choices: [{ label: "Tenir conseil sous le porche", to: "Pc_conseil" }] },

    Pc_conseil: { act: "P", title: "Sous le porche du tonnelier", place: "ferronniers",
      text: [
        "Trois postes, trois personnes. La Douairière a raison sur un point au moins : la maison décidera pour vous si vous tardez.",
        "**La main.** Les toits. La maison du gantier touche l'hôtel par le pignon, et sa gouttière a l'air de tenir. De là-haut, on doit pouvoir entrer par les combles et venir voir la grande salle par le dessus.",
        "**L'œil.** La rue et la ruelle de derrière. Les rondes du guet, la porte des cuisines, le chemin que prendra la Serrure-Reine à minuit pour gagner le trésor, et celui que vous prendrez, vous, pour gagner le large.",
        "**La voix.** Le perron, les lustres, les trois cents convives. Il faut une figure, un mensonge et de l'aplomb, pour approcher la cloche de verre et ceux qui la gardent.",
        "*Chaque poste revient à un seul d'entre vous. Mettez-vous d'accord à voix haute avant de toucher à l'écran : le premier qui choisit est servi.*",
      ],
      choices: [
        { label: "La main : tu prends les toits", role: "p", option: "main", to: "Pm_gantier", big: true },
        { label: "L'œil : tu prends la rue", role: "p", option: "oeil", to: "Po_rue", big: true },
        { label: "La voix : tu prends le perron", role: "p", option: "voix", to: "Pv_fripier", big: true },
      ] },

    // ------------------------------------------------------------ eleven o'clock: pooling, the plan, the vote
    Pc_porche: { act: "P", title: "Onze heures sous le porche", place: "ferronniers", charniere: true,
      fx: { until: 23 },
      text: [
        "Onze heures sonnent à quarante clochers, dans un désordre où chaque horloger d'Aiguemorne reconnaît la sienne et plaint les autres. Le porche du tonnelier est noir comme l'intérieur d'un coffre.",
        "Tu t'adosses à une futaille et tu attends. La fête, en face, a pris ce ton plus haut et plus pâteux des banquets qui ont passé le rôti. Il reste une heure.",
      ],
      choices: [{ label: "Mettre en commun ce que chacun rapporte", to: "Pc_commun", big: true }] },

    Pc_commun: { act: "P", title: "Ce que chacun rapporte", place: "ferronniers",
      text: [
        "Vous parlez bas, vite, l'un après l'autre, comme la Douairière l'exige : d'abord ce qu'on a vu, ensuite ce qu'on en pense, et jamais l'inverse.",
        { if: { not: { role: "p", is: "main" } }, text: "{qui:p:main} redescend des toits avec de la suie jusqu'aux coudes." },
        { if: { has: "monde:p:mecanisme" }, text: "**Du côté de la main.** La cloche de verre est piégée : un fil d'archal court du socle à un timbre caché dans le lambris. On le neutralise en tournant d'un quart, à rebours, la rosace de cuivre du socle. Vu d'en haut, cela prend le temps de dire un Ave.", else: "**Du côté de la main.** La grande salle se voit bien depuis la galerie des combles ; la cloche de verre cache un mécanisme, cela se devine au socle, mais son secret est resté en bas." },
        { if: { has: "monde:p:ancrage" }, text: "Au-dessus de la cloche, à l'aplomb, la poutre maîtresse porte un anneau de fer : celui du grand lustre d'autrefois. Une corde y tiendrait." },
        { if: { has: "monde:p:apprenti" }, text: "Un apprenti caché dans les combles a dit par où la Serrure-Reine descendra à minuit : l'escalier de service, la cour, puis la charrette du trésor, sous une bâche, avec deux valets et pas un de plus." },
        { if: { not: { role: "p", is: "oeil" } }, text: "{qui:p:oeil} a fait trois fois le tour du pâté de maisons, et le sait par cœur." },
        { if: { has: "monde:p:rondes" }, text: "**Du côté de l'œil.** Le guet passe devant le perron tous les quarts d'heure, et dans la ruelle de derrière une fois sur deux seulement : entre la demie et les trois quarts, la ruelle est à qui la veut.", else: "**Du côté de l'œil.** Le guet tourne, c'est certain, mais sa cadence est restée brouillée par la foule : il faudra compter avec le hasard." },
        { if: { has: "monde:p:fuite" }, text: "Dans la cour du tonnelier, une trappe à barriques descend vers les caves, et les caves vers le quai de la Morne. La sortie est trouvée." },
        { if: { has: "monde:p:charretier" }, text: "Le charretier du trésor boit au Marteau d'Or depuis huit heures. À minuit, il verra deux bâches où il y en a une." },
        { if: { not: { role: "p", is: "voix" } }, text: "{qui:p:voix} sent la cire de lustre et le vin de dessert." },
        { if: { has: "monde:p:clef_chasse" }, text: "**Du côté de la voix.** L'empreinte de la clef du socle est prise, dans la cire, et la Douairière a de quoi en tirer une copie en un quart d'heure.", else: "**Du côté de la voix.** La clef du socle pend à la ceinture de l'intendant de la guilde, Maître Onfroy, qui ne la quitte pas plus que sa bedaine." },
        { if: { has: "monde:p:toast" }, text: "À minuit moins le quart, le Syndic portera la santé de la Serrure-Reine : toute la salle se lèvera et se tournera vers l'estrade, le dos à la cloche. Cela dure le temps d'un discours de Quincarnon, c'est-à-dire qu'on aurait le loisir de démonter la cheminée." },
        { if: { has: "monde:p:ermeline" }, text: "Celle qui a forgé la serrure a prévenu : son secret se venge. Qui la force ou la secoue trop fort fait tomber un douzième pêne, et elle reste close à jamais. Il faudra la porter comme un nourrisson." },
        "Un sifflement monte de la rue, un seul, long et moqueur. Fifrelin est assis sur une borne, les jambes ballantes, et vous regarde délibérer avec l'intérêt d'un enfant devant un combat de coqs.",
      ],
      fx: { ep: ["perso", 300] },
      choices: [{ label: "Passer aux plans", to: "Pc_plans" }] },

    Pc_plans: { act: "P", title: "Trois façons de s'y prendre", place: "ferronniers",
      text: [
        "Il y a, comme toujours, trois façons de s'y prendre, et chacune flatte un poste aux dépens des deux autres.",
        "**Par le haut.** Pendant la santé du Syndic, la main descend une corde depuis les combles, soulève la cloche, et remonte la serrure. La voix tient la salle tournée du bon côté ; l'œil garde la sortie par les toits.",
        "**Par l'échange.** La Douairière garde dans son coffre une vieille serrure de maîtrise, bleuie, qui fera illusion sous verre une demi-heure. La voix l'apporte sous son manteau et fait l'échange au socle ; la main, d'en haut, coupe le timbre ; l'œil prépare la retraite.",
        "**Par la ruelle.** On laisse la guilde descendre elle-même sa merveille jusqu'à la charrette du trésor, et on la prend là, dans la ruelle, entre deux rondes. C'est l'affaire de l'œil ; la main vient par la cour, la voix retient les valets.",
        "On vote. Fifrelin tend son bonnet. Chacun y laissera tomber un caillou sans montrer sa main : un gris pour le haut, un blanc pour l'échange, un noir pour la ruelle. C'est la coutume de la maison, et elle a évité plus de disputes que de mauvais coups.",
      ],
      choices: [
        { label: "Un caillou gris : par le haut", voix: "plan_p", option: "haut", to: "Pc_urne" },
        { label: "Un caillou blanc : par l'échange", voix: "plan_p", option: "echange", to: "Pc_urne" },
        { label: "Un caillou noir : par la ruelle", voix: "plan_p", option: "ruelle", to: "Pc_urne" },
      ] },

    Pc_urne: { act: "P", title: "Le bonnet de Fifrelin", place: "ferronniers", charniere: true,
      text: [
        "Ton caillou tombe dans le bonnet avec un petit bruit de dent. Fifrelin referme le poing sur la laine et prend l'air important d'un greffier.",
        "« Quand y aura les trois, je retourne. Pas avant. C'est la règle. »",
      ],
      choices: [{ label: "Regarder Fifrelin retourner le bonnet", to: "Pc_tranche", big: true }] },
    Pc_tranche: { act: "P", title: "Le compte", place: "ferronniers", branch: [
      { if: { scrutin: "plan_p", is: "haut" }, to: "Pc_plan_haut" },
      { if: { scrutin: "plan_p", is: "echange" }, to: "Pc_plan_echange" },
      { if: { scrutin: "plan_p", is: "ruelle" }, to: "Pc_plan_ruelle" },
      { to: "Pc_plan_dispute" }] },

    Pc_plan_haut: { act: "P", title: "Par le haut", place: "ferronniers",
      text: [
        "Les cailloux roulent sur le pavé : le gris l'emporte. Ce sera par le haut.",
        { if: { role: "p", is: "main" }, text: "C'est donc toi qui descendras la corde. Tu regardes le toit de l'hôtel, sa lanterne des morts, ses cheminées, et tu lui trouves soudain beaucoup plus de hauteur qu'à huit heures." },
        { if: { role: "p", is: "voix" }, text: "Ton affaire, à toi, sera la salle : trois cents paires d'yeux à tenir tournées vers l'estrade pendant que quelque chose descend du plafond derrière elles. On a vu des comédiens demander un rappel pour moins que cela." },
        { if: { role: "p", is: "oeil" }, text: "Toi, tu tiendras les toits et la descente : que la main trouve, en remontant, un chemin libre jusqu'à la cour du tonnelier, et personne dessus." },
        "« Minuit moins le quart, résume Fifrelin, qui a tout écouté. Je siffle si ça tourne. »",
      ],
      choices: [{ label: "Gagner ton poste", to: POSTE("Pm_coup", "Po_coup", "Pv_coup"), big: true }] },
    Pc_plan_echange: { act: "P", title: "Par l'échange", place: "ferronniers",
      text: [
        "Les cailloux roulent sur le pavé : le blanc l'emporte. Ce sera l'échange.",
        "Fifrelin file aux Bas-Fonds et revient avant que la demie ait sonné, soufflant comme un soufflet de forge, un paquet de drap sous le bras : la vieille serrure de la Douairière, bleuie, graissée, lourde. De près, elle ressemble à la Serrure-Reine comme une mule ressemble à un cheval de parade ; sous verre et aux chandelles, la différence se discutera.",
        { if: { role: "p", is: "voix" }, text: "C'est toi qui la porteras, sous ton manteau, jusqu'au socle. Neuf livres d'acier contre les côtes, un sourire par-dessus, et trois cents convives à traverser." },
        { if: { role: "p", is: "main" }, text: "Ton affaire, à toi, sera le timbre : depuis la galerie, à la perche ou à la pince, il faut que le fil d'archal soit mort quand la cloche se lèvera." },
        { if: { role: "p", is: "oeil" }, text: "Toi, tu tiendras la porte des cuisines et la ruelle : c'est par là que la voix sortira, chargée, et il faut qu'elle sorte dans une rue vide." },
      ],
      choices: [{ label: "Gagner ton poste", to: POSTE("Pm_coup", "Po_coup", "Pv_coup"), big: true }] },
    Pc_plan_ruelle: { act: "P", title: "Par la ruelle", place: "ferronniers",
      text: [
        "Les cailloux roulent sur le pavé : le noir l'emporte. Ce sera la ruelle.",
        "Le plan a pour lui sa paresse : la guilde fera elle-même le plus difficile, qui est de sortir la merveille de sa cloche, de la salle et de l'escalier. Il vous restera à la cueillir entre la porte de la cour et la charrette, sur vingt pas de pavé gras, dans l'intervalle de deux rondes.",
        { if: { role: "p", is: "oeil" }, text: "C'est ton terrain, et c'est donc toi qui prendras. Tu sais où la bâche sera posée, et de quel côté le charretier penche quand il a bu." },
        { if: { role: "p", is: "main" }, text: "Ton affaire, à toi, sera la cour : y descendre par les toits avant minuit, et faire en sorte que la porte de la ruelle, quand les valets la pousseront, se referme derrière eux plus mal que d'habitude." },
        { if: { role: "p", is: "voix" }, text: "Toi, tu retiendras les valets : il suffit d'un convive égaré, bavard, qui cherche les lieux d'aisance et tient absolument à ce qu'on l'y conduise." },
      ],
      choices: [{ label: "Gagner ton poste", to: POSTE("Pm_coup", "Po_coup", "Pv_coup"), big: true }] },
    Pc_plan_dispute: { act: "P", title: "Trois cailloux, trois couleurs", place: "ferronniers",
      text: [
        "Les cailloux roulent sur le pavé : un gris, un blanc, un noir. Fifrelin les contemple avec ravissement.",
        "« Ben ça. La vieille dit que ça arrive une fois l'an, et que ça finit toujours pareil. »",
        "Cela finit, en effet, toujours pareil : il reste trois quarts d'heure, personne ne cède, et chacun part de son côté avec la ferme intention de réussir à sa manière et de l'expliquer ensuite aux deux autres. La Douairière a un mot pour ce genre de soirée. Elle l'appelle *la foire*, et elle ajoute que les foires rapportent quelquefois, à condition de courir vite.",
      ],
      fx: { flag: "p:foire" },
      choices: [{ label: "Tenter ta chance à ta façon", to: POSTE("Pm_coup", "Po_coup", "Pv_coup"), big: true }] },

    // ------------------------------------------------------------ past midnight: the table, the pay, the real bargain
    Pc_retour: { act: "P", title: "Minuit passé, à la Clef Tordue", place: "clef_tordue", charniere: true,
      fx: { until: 1 },
      text: [
        "La cour de la Clef Tordue sent le fumier froid et la lessive. Tu y entres par la porte charretière, que la Douairière a laissée sur le loquet, et tu t'arrêtes le temps que ton souffle redevienne celui d'une personne honnête.",
        "Là-haut, sur le piton, les cloches de la Saint-Fer se sont tues l'une après l'autre. Il en reste une, obstinée, qui sonne encore du côté de la rue des Ferronniers, et dont le rythme s'entend très bien d'ici.",
        "Derrière le volet de la salle du fond, une chandelle brûle.",
      ],
      choices: [{ label: "Entrer dans la salle du fond", to: "Pc_table", big: true }] },

    Pc_table: { act: "P", title: "Neuf livres d'acier bleui", place: "clef_tordue",
      text: [
        "La Serrure-Reine est sur la table.",
        "De près, à la chandelle, elle a quelque chose d'un animal qui dort : un corps d'acier bleu nuit, long comme un missel, onze pênes rentrés dans leurs logements comme des griffes dans une patte, et sur le palastre, gravée au burin, une couronne de myosotis d'une finesse à faire douter qu'une main l'ait tenue. Celle qui a fait cela a mis un an de sa vie dans neuf livres de métal.",
        { if: { has: "monde:p:reine=propre" }, text: "Loridan la retourne entre ses gants, la soupèse, écoute un instant contre son oreille le jeu des pênes. Puis il tire sa montre. Minuit moins quatre. « Entière, à l'heure, et la rue dort. » Il range la montre. « Madame Berlue, je vous dois des excuses : je vous croyais une réputation, vous avez une maison. »", else: "Loridan la retourne entre ses gants, la soupèse, écoute contre son oreille le jeu des pênes. Puis il lève un doigt, et tout le monde entend ce qu'il écoute : la cloche d'alarme des Maîtres du Fer, là-haut, qui sonne à toute volée, et les sifflets du guet qui lui répondent de rue en rue. « Entière et à l'heure, dit-il. Quant à la discrétion, je note qu'une moitié de la ville est debout pour saluer votre passage. »" },
        { if: { has: "p:foire" }, text: "La Douairière vous regarde tous les trois par-dessus la chandelle. Elle a déjà su, par Fifrelin, pour les trois cailloux. Elle se tait d'une manière qui promet." },
      ],
      choices: [{ label: "Attendre qu'il ouvre sa bourse", to: "Pc_paie" }] },
    Pc_paie: { act: "P", title: "La paie", place: "clef_tordue", branch: [
      { if: { has: "monde:p:reine=propre" }, to: "Pc_paie_propre" }, { to: "Pc_paie_bruit" }] },
    Pc_paie_propre: { act: "P", title: "Soixante écus", place: "clef_tordue",
      text: [
        "Soixante écus font, sur une table de taverne, trois petites piles qui tiennent sous un bol. La Douairière en écarte une du plat de la main, la sienne, par un geste que vingt ans de pratique ont rendu aussi naturel que celui de se moucher ; le reste se partage en trois.",
        "Tu fais sauter une pièce dans ta paume. Elle est neuve, d'un jaune de beurre frais, et son listel coupe encore. Au revers, à la place du pont d'Aiguemorne qui orne les écus de tout le monde, on a frappé une tour sans fenêtres.",
      ],
      fx: { gold: 260, quest: "P_reine", ep: ["seance", 2500], clue: "c_ecus", fac: { rossignol: 10 } },
      choices: [{ label: "Empocher ta part", to: "Pc_marche" }] },
    Pc_paie_bruit: { act: "P", title: "Quarante écus", place: "clef_tordue",
      text: [
        "« J'avais dit soixante pour un travail, reprend Loridan. Vous m'apportez la serrure et un tocsin. Je paie la serrure. » Il compte quarante écus, sans humeur, et repousse les vingt autres au fond de la bourse. La Douairière prélève sa pile avant que les autres aient refroidi ; le reste se partage en trois.",
        "Tu fais sauter une pièce dans ta paume. Elle est neuve, d'un jaune de beurre frais, et son listel coupe encore. Au revers, à la place du pont d'Aiguemorne qui orne les écus de tout le monde, on a frappé une tour sans fenêtres.",
      ],
      fx: { gold: 170, quest: "P_reine", ep: ["seance", 1800], clue: "c_ecus", flag: "monde:p:cadenas_alerte" },
      choices: [{ label: "Empocher ta part", to: "Pc_marche" }] },

    Pc_marche: { act: "P", title: "La vraie affaire", place: "clef_tordue", backName: "la table de Loridan",
      text: [
        { first: true, text: "Loridan a enveloppé la Serrure-Reine dans un drap, avec des soins de sage-femme, et l'a posée à ses pieds. Il reste assis. L'examen est fini ; ce qui commence a un autre poids, et tu le sens à ceci, que la Douairière a tiré le verrou du judas." },
        { first: true, text: "« Dans six semaines, c'est la Nuit des Clefs. Les trois Clavaires monteront à la Tour de l'Horloge-Close, tourneront ensemble leurs trois clefs, et le Juge de Bronze rendra sa Sentence pour sept ans. Il la rendra par une anche de bronze longue comme la main, logée dans sa gorge, que les gens du métier appellent la Langue du Juge. Sans elle, il remue les lèvres et rien ne sort. »" },
        { first: true, text: "Il pose les deux mains à plat. « La personne que je sers veut que trois hommes ou femmes de confiance entrent dans la Chambre du Juge avant les Clavaires, la Nuit des Clefs, et en ressortent avec cette Langue. Trois mille écus, dont trois cents ce soir. Comment vous aurez les trois clefs d'ici là, c'est votre art, et je m'interdis d'y entendre quelque chose. »" },
        { first: true, text: "Dans le silence, on entend la chandelle grésiller. Faire taire le Bronze. À Aiguemorne, des gens ont été pendus pour l'avoir proposé en riant, à la fin d'un souper." },
        { again: true, text: "Loridan attend. Trois mille écus, la Chambre du Juge, la Langue de bronze, six semaines." },
      ],
      choices: [
        { label: "« Qui a intérêt à ce que le Juge se taise ? »", to: "Pc_m_qui", once: true },
        { label: "« Les Clavaires ont chacun leur clef chez eux, à trois bouts du pays. »", to: "Pc_m_clefs", once: true },
        { label: "Demander son avis à la Douairière", to: "Pc_m_douairiere", once: true },
        { label: "En délibérer à trois, et voter", to: "Pc_vote_marche", big: true },
      ] },
    Pc_m_qui: { act: "P", title: "Qui y gagne", place: "clef_tordue",
      text: [
        "« Tout le monde, par moments. » Loridan a presque souri. « Le Syndic, quand la Sentence taxe le fer. Le Doyen, quand elle rogne les rentes des morts. Le Connétable, chaque fois qu'elle nomme Gouverneur un autre que lui. Chacun des trois donnerait cher pour un Juge muet, à la seule condition que ce ne soit pas l'un des deux autres qui lui ait coupé la parole. »",
        "« Et la personne que vous servez ? »",
        "« Elle ne veut pas que le Juge se taise. Elle veut que la Langue sorte de la Tour, cette nuit-là, dans vos mains. » Il se tait un instant. « Je conviens que la nuance, vue d'ici, est mince. »",
      ],
      fx: { clue: "c_nuance" },
      choices: [{ back: "Pc_marche" }] },
    Pc_m_clefs: { act: "P", title: "Trois clefs, trois routes", place: "clef_tordue",
      text: [
        "« C'est exact, et c'est ce qui vous laisse une chance. À la citadelle, la Nuit des Clefs, elles seront au cou de trois hommes entourés de cent gardes. D'ici là, chacune dort chez son maître. » Il compte sur ses doigts gantés, sans y penser, puis s'en aperçoit et repose la main. « La clef de Fer à Ferrières, chez Maître Quincarnon. La clef de Cendre à Ossevaux, chez Monseigneur Calixte. La clef de Sang à Brandelis, chez le comte, qui y donne ses Grandes Chasses. Ils quittent tous trois Aiguemorne dans la semaine. »",
        "« Trois voyages, donc, dit la Douairière. Trois maisons fortes. Et il faut que personne ne s'aperçoive de rien, ou qu'on s'en aperçoive trop tard. Monsieur a le sens de l'économie : il nous commande trois coups et il en paie un. »",
        "« Je paie le quatrième, madame. Les trois premiers sont des outils. »",
      ],
      choices: [{ back: "Pc_marche" }] },
    Pc_m_douairiere: { act: "P", title: "L'avis de la maison", place: "clef_tordue",
      text: [
        "La Douairière prend son temps. Elle mouche la chandelle, ce qui chez elle tient lieu de réflexion.",
        "« J'ai soixante-huit ans. J'ai vu rendre neuf Sentences, et j'ai applaudi les neuf, sur la place, avec tout le monde, parce que celui qui garde les mains dans ses poches ce jour-là est noté. Le Bronze a fait pendre mon premier mari, qui le méritait, et taxer mon auberge, qui ne le méritait pas. Je ne l'aime pas et je ne le déteste pas ; c'est le temps qu'il fait. »",
        "Elle regarde Loridan. « Trois mille écus, c'est le prix d'une chose qui en vaut trente mille à quelqu'un. Je voudrais savoir à qui. Mais j'ai passé l'âge de grimper, et ce n'est pas mon cou qu'on joue. Votez, mes enfants. Je tiendrai ce que vous aurez voté, et je vous le reprocherai toute ma vie, quoi que ce soit. »",
      ],
      choices: [{ back: "Pc_marche" }] },

    Pc_vote_marche: { act: "P", title: "Trois voix pour une affaire", place: "clef_tordue",
      text: [
        "Loridan a la délicatesse de sortir dans la cour, où on l'entend marcher de long en large, d'un pas égal, comme on arpente une pièce qu'on veut louer. Fifrelin, qui dormait sous le banc, tend son bonnet sans ouvrir les yeux.",
        "**Accepter.** Trois mille écus, et l'affaire d'une vie. On tope ce soir, on touche l'avance, on se met en route.",
        "**Marchander.** L'homme a besoin de vous plus qu'il ne le dit : il a fait son examen, il a payé, il est revenu s'asseoir. Cela vaut quatre mille, une avance plus ronde, et quelques réponses.",
        "**Refuser.** Toucher au Juge, c'est toucher à la seule chose que toute la ville respecte ensemble. Les soixante écus de ce soir sont de l'argent propre. Le reste sent la corde.",
      ],
      choices: [
        { label: "Un caillou blanc : accepter", voix: "marche", option: "accepter", to: "Pc_urne2" },
        { label: "Un caillou gris : marchander", voix: "marche", option: "marchander", to: "Pc_urne2" },
        { label: "Un caillou noir : refuser", voix: "marche", option: "refuser", to: "Pc_urne2" },
      ] },
    Pc_urne2: { act: "P", title: "Le bonnet, une seconde fois", place: "clef_tordue", charniere: true,
      text: [
        "Le caillou tombe. Fifrelin, cette fois, garde les yeux fermés : il a décidé que les votes de nuit comptaient double et se payaient en sommeil.",
        "Dans la cour, les pas de Loridan vont et viennent.",
      ],
      choices: [{ label: "Retourner le bonnet sur la table", to: "Pc_m_tranche", big: true }] },
    Pc_m_tranche: { act: "P", title: "Le compte", place: "clef_tordue", branch: [
      { if: { scrutin: "marche", is: "accepter" }, to: "Pc_m_accepte" },
      { if: { scrutin: "marche", is: "marchander" }, to: "Pc_m_marchande" },
      { if: { scrutin: "marche", is: "refuser" }, to: "Pc_m_refuse" },
      { to: "Pc_m_sommeil" }] },
    Pc_m_accepte: { act: "P", title: "Topé", place: "clef_tordue",
      text: [
        "On rappelle Loridan. Il regarde les cailloux, puis vos trois visages, et il ôte son gant droit pour toper. Sa main est sèche, froide, tachée d'encre à la dernière phalange du majeur, à l'endroit où appuie la plume.",
        "« Trois cents ce soir. » La seconde bourse rejoint la première sur la table. « Je vous retrouverai sur votre route. Vous n'aurez pas à me chercher : je suis de ces gens qu'on trouve assis quand on entre. »",
        "Il remet son gant, prend sous son bras la Serrure-Reine dans son drap, et s'en va par la cour. La Douairière compte l'avance deux fois, par principe, et la trouve juste, par malheur : elle aurait préféré une raison de se méfier.",
      ],
      fx: { gold: 1300, ep: ["histoire", 3000] },
      choices: [{ label: "Monter dormir : demain, la Tour", to: "A1c_matin", exit: true, big: true }] },
    Pc_m_marchande: { act: "P", title: "Quatre mille", place: "clef_tordue",
      text: [
        "On rappelle Loridan, et la Douairière, qui n'a pas voté, se charge de la suite avec la gourmandise d'une femme à qui l'on vient de rendre son métier. Cela dure le temps d'une chandelle. Elle parle de trois voyages, de trois maisons fortes, de la corde ; il parle de limites, d'instructions, d'une personne qui n'est pas riche.",
        "« Pas riche, répète la Douairière. Et qui trouve trois mille écus. »",
        "« Elle a économisé longtemps. Elle a peu de dépenses. » Il dit cela sans sourire, et quelque chose dans sa voix fait que personne ne rit. Puis il cède : quatre mille, dont quatre cents ce soir. Et une réponse, une seule, à la question de votre choix, le jour où vous lui apporterez la première clef.",
      ],
      fx: { gold: 1800, ep: ["histoire", 3000], flag: "p:reponse_due" },
      choices: [{ label: "Monter dormir : demain, la Tour", to: "A1c_matin", exit: true, big: true }] },
    Pc_m_refuse: { act: "P", title: "Non", place: "clef_tordue",
      text: [
        "On rappelle Loridan. Il regarde les cailloux noirs et hoche la tête, lentement, à la manière d'un homme qui retrouve dans la réalité un passage qu'il avait lu d'avance.",
        "« C'est la réponse de gens sensés. J'en aurais voulu d'autres, pour cette raison même. » Il tire de son habit un pli cacheté de cire grise et le pose devant la Douairière. « Madame Berlue, ceci est pour vous seule. Je repasserai demain à l'angélus. Si la réponse est encore non, je vous saluerai, et vous n'entendrez plus parler de moi. »",
        "Il sort. La Douairière brise le cachet, lit, relit. La lettre tient en quatre lignes. Quand elle relève la tête, elle a vieilli de l'épaisseur d'un hiver. « Montez vous coucher », dit-elle, et sa voix a perdu son trousseau.",
        "Au matin, vous trouvez sur la table du grenier trois cents écus, comptés en trois piles, et un mot de sa grande écriture de cuisine : *J'ai dit oui pour vous. Je dois à la personne qui écrit plus que vous ne me devez. Je vous expliquerai un jour. Pardon.*",
      ],
      fx: { gold: 1300, ep: ["histoire", 3000], clue: "c_lettre_grise", flag: "p:dette_douairiere" },
      choices: [{ label: "Descendre : il faut bien regarder cette Tour", to: "A1c_matin", exit: true, big: true }] },
    Pc_m_sommeil: { act: "P", title: "Un blanc, un gris, un noir", place: "clef_tordue",
      text: [
        "Un blanc, un gris, un noir. Deux fois dans la même nuit : Fifrelin en rouvre un œil.",
        "La Douairière ramasse les trois cailloux et les met dans sa poche. « Bien. Quand trois têtes font trois avis, c'est la quatrième qui tranche, et dans cette maison la quatrième, c'est la mienne. » Elle ouvre la porte de la cour. « Monsieur Loridan ! Ils acceptent. Ils marchandent aussi, mais mal, je m'en charge : trois mille cinq cents, trois cent cinquante ce soir. Et ils ont des scrupules, que vous aurez la bonté de leur laisser. »",
        "Loridan paie sans discuter, ce qui inquiète la Douairière plus qu'un refus. Vous montez vous coucher avec de l'or plein les poches et le sentiment, assez neuf, d'avoir été vendus par quelqu'un qui vous aime.",
      ],
      fx: { gold: 1500, ep: ["histoire", 2500] },
      choices: [{ label: "Monter dormir : demain, la Tour", to: "A1c_matin", exit: true, big: true }] },
  },

  extras: {
    scrutins: {
      plan_p: { title: "Le plan de la Saint-Fer", options: { haut: "Par le haut", echange: "Par l'échange", ruelle: "Par la ruelle" }, tie: "foire", tieSay: "Trois cailloux, trois couleurs : chacun fera à sa façon." },
      marche: { title: "Le marché de Loridan", options: { accepter: "Accepter", marchander: "Marchander", refuser: "Refuser" }, tie: "sommeil", tieSay: "Trois avis : c'est la Douairière qui tranchera." },
    },
    clues: {
      c_empechee: { rev: "C", text: "Loridan sert « une personne qui ne peut pas se déplacer ». Malade ? « Empêchée. » Lui-même a longtemps écrit sous la dictée." },
      c_ecus: { rev: "C", text: "Loridan paie en écus neufs. Au revers, à la place du pont d'Aiguemorne, une tour sans fenêtres." },
      c_nuance: { rev: "C", text: "Selon Loridan, la personne qu'il sert ne veut pas que le Juge se taise : elle veut que la Langue sorte de la Tour, la Nuit des Clefs, dans les mains des trois." },
      c_lettre_grise: { rev: "C", text: "Un pli à la cire grise, quatre lignes, a suffi pour que la Douairière accepte le marché à la place des trois. Elle doit beaucoup à la personne qui écrit." },
    },
    shops: {
      douairiere: { sells: [{ item: "rossignols", price: 30 }, { item: "corde", price: 8 }, { item: "lanterne", price: 12 }, { item: "cire", price: 10 }, { item: "fards", price: 14 }, { item: "onguent", price: 12 }, { item: "eau_de_vie", price: 6 }, { item: "dague", price: 16 }, { item: "gourdin", price: 6 }, { item: "gambison", price: 50 }], food: 3 },
    },
  },
};
