// L'Île Folle-Aiguille · the port of call of Brisegrève, beyond the prisoner Number Nine. For the child: the convicts'
// stair and a boy in irons who shares a biscuit (brise:biscuit); the soldiers' children, who fish bottles out of the
// sea under the prison drains, and one letter that never reached its mother (item lettre_forcat); the canteen woman and
// her stories of escapes, and the Devil's Hole where the sea goes in (brise:trou). For the doctor: the fort's infirmary
// and its drunken surgeon-major (brise:infirmerie); the chaplain's Sunday, and what a confessor may say of a man's
// silence (brise:aumonier).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child
    XQ_b_escalier: { act: "III", title: "L'escalier des forçats", place: "brisegreve", ambiance: "mer",
      text: [
        "Du bourg au fort, on monte par un escalier taillé dans le granit, à flanc de roche, six cents marches sans rampe, glissantes d'embruns, que les marins appellent l'escalier des forçats parce que ce sont eux qui l'ont taillé, et qu'ils le montent encore tous les matins, chargés.",
        "Tu en montes cent. Puis tu t'arrêtes, collé{e} à la paroi, pour laisser descendre une file d'hommes.",
        "Ils sont vingt, enchaînés deux à deux par la cheville, en casaque rouge délavée, la tête rasée, le dos courbé sous des hottes de pierre. Ils ne regardent personne. Ils descendent en comptant les marches à voix basse, tous ensemble, comme une litanie, pour ne pas tomber : cent dix, cent neuf, cent huit. Un sergent marche derrière, une canne à la main.",
        "Le dernier de la file est un garçon. Il a ton âge, ou un peu plus. Il est enchaîné à un vieil homme qui boite, et il porte la hotte du vieux en plus de la sienne. Il passe devant toi. Il te regarde, une seconde, avec des yeux d'une couleur incroyable, verts, très clairs, dans un visage gris de poussière.",
        "Tu as dans ta poche un biscuit de mer, le tien, celui du déjeuner.",
      ],
      choices: [
        { label: "Le lui glisser dans la main, au passage", test: { dom: "discretion", diff: 0, label: "Sous l'œil du sergent" }, win: { fx: { flag: "brise:biscuit" }, to: "XQ_b_biscuit" }, lose: { to: "XQ_b_biscuit_vu" } },
        { label: "Le regarder passer", back: "A3m_brisegreve" },
      ] },
    XQ_b_biscuit: { act: "III", title: "Le biscuit", place: "brisegreve", ambiance: "mer",
      text: [
        "Ta main frôle la sienne. Le biscuit change de main. Il ne ralentit pas, il ne te regarde pas, il ne fait rien. Il continue de compter avec les autres, cent trois, cent deux. Le biscuit a disparu dans sa casaque.",
        "Plus bas, au tournant de l'escalier, la file s'arrête un instant, le temps que le sergent rallume sa pipe. Le garçon aux yeux verts rompt le biscuit en deux, sans regarder, sous sa hotte, et en glisse une moitié dans la main du vieux qui boite.",
        "Puis il lève la tête vers toi, cent marches plus haut. Il ne sourit pas. Il hoche la tête, une fois. Puis la file repart, et il redevient un dos courbé parmi d'autres.",
      ],
      choices: [{ label: "Redescendre vers le bourg", back: "A3m_brisegreve" }] },
    XQ_b_biscuit_vu: { act: "III", title: "La canne", place: "brisegreve", ambiance: "mer",
      text: [
        "Le sergent a vu. Il ne dit rien. Il lève sa canne et l'abat sur l'épaule du garçon, une fois, d'un coup sec, sans colère, comme on chasse une mouche. Le biscuit tombe, roule sur deux marches, et tombe dans le vide, vers la mer.",
        "Le garçon n'a pas crié. Il continue de descendre, de compter. Le sergent passe devant toi, et te dit, très poliment, en touchant son chapeau : « Ici, on ne nourrit pas les bêtes, mon enfant. Ça les rend paresseuses. »",
        "Tu restes collé{e} contre la roche longtemps après qu'ils sont passés.",
      ],
      choices: [{ label: "Redescendre vers le bourg", back: "A3m_brisegreve" }] },
    XQ_b_bouteilles: { act: "III", title: "Les bouteilles", place: "brisegreve", ambiance: "mer",
      text: [
        "Au pied du fort, du côté du large, là où les grilles rouillées des égouts de la prison crachent dans la mer un filet noir, il y a des enfants. Les enfants des soldats du bourg. Ils sont cinq, pieds nus sur les rochers, avec des épuisettes, et ils pêchent.",
        "Ils ne pêchent pas des poissons. Ils pêchent des bouteilles.",
        "« Ils les jettent dans les latrines, t'explique la plus grande, une fille maigre aux cheveux attachés avec une ficelle. Les prisonniers. Avec des lettres dedans. Ils croient que la mer va les porter chez eux. » Elle rit. « La mer, elle les porte ici. Le courant tourne autour de la roche. Elles reviennent toujours. »",
        "Ils ont une cachette, dans une fente de rocher, au-dessus de la marée haute. Elle te la montre, avec fierté. Des bouteilles. Des dizaines. Bouchées à la cire, à la mie de pain, au chiffon. Dans chacune, un papier roulé.",
        "« On ne sait pas lire, dit-elle. Mais on les garde. C'est joli. »",
      ],
      choices: [
        { label: "En ouvrir une", to: "XQ_b_lettre" },
        { label: "Les laisser à leur trésor", back: "A3m_brisegreve" },
      ] },
    XQ_b_lettre: { act: "III", title: "La lettre", place: "brisegreve", ambiance: "mer",
      text: [
        "La fille choisit pour toi, avec le sérieux d'un notaire, une bouteille verte, bouchée à la cire noire. Tu la casses sur un rocher. Le papier est sec. L'écriture est maladroite, appliquée, avec des fautes, au crayon de plomb.",
        "« Ma chère maman, je suis à Brisegrève depuis l'automne. Je vais bien. On mange le soir. On travaille à l'escalier. Je ne suis pas malade. Ne pleurez pas. Ce que j'ai fait, je l'ai fait pour le pain du petit, et je recommencerais. Dites au petit que je suis soldat. Je vous embrasse. Votre fils, Yann Le Gall, de Plouvenec, rue du Lavoir, chez la veuve Le Gall. »",
        "Il n'y a pas de date.",
        "Plouvenec. C'est à quatre lieues de Pointe-aux-Corneilles. Tu y es allé{e} à la foire, avec ton père. Il y a un lavoir, au bout de la rue, sous des saules.",
        "La fille te regarde. « Tu sais lire ? Qu'est-ce qu'il dit ? »",
      ],
      choices: [
        { label: "Lui lire la lettre, et la garder pour la porter", fx: { item: "lettre_forcat" }, back: "A3m_brisegreve" },
        { label: "Lui lire la lettre, et la remettre dans la cachette", back: "A3m_brisegreve" },
      ] },
    XQ_b_cantine: { act: "III", title: "La cantinière", place: "brisegreve", ambiance: "ville",
      text: [
        "La cantine du bourg est une salle basse, enfumée, où les soldats boivent un vin aigre, debout, en silence, comme des gens qui ont tout dit depuis longtemps. La cantinière, la mère Kerboul, une femme énorme, rouge, avec des bras de lavandière et une moustache, t'assied sur un tonneau et te donne un bol de soupe aux poissons sans te demander ton avis.",
        "Elle parle. Elle parle des évasions. C'est sa spécialité. Il y en a eu onze, en deux cents ans. Elle les connaît toutes, par cœur, avec les noms, les dates, les détails, et elle les raconte comme des vies de saints.",
        "Le marquis de Saint-Brieuc, qui s'est fait descendre dans un tonneau de vin vide. Les frères Le Floch, qui ont percé le mur avec une cuillère, en sept ans, et sont tombés dans la mer, et ont été repris le lendemain, à la nage, à une lieue, parce qu'ils ne savaient pas nager. Et le Trou du Diable.",
        "« Une grotte, au pied du fort, côté nord, que la mer remplit à marée haute et vide à marée basse, dit-elle, en baissant la voix. Elle monte, à l'intérieur, jusque sous les cachots du bas. On dit qu'un homme a creusé jusqu'à elle, une fois, depuis sa cellule, il y a cent ans. On dit qu'il y est encore, coincé, qu'il attend la marée. Les soldats n'y vont pas. Les enfants y vont, pour se faire peur. Toi, tu n'y vas pas. »",
        "Elle te ressert de la soupe. « Le seul qui ne s'est jamais évadé, et qui aurait pu, c'est le Numéro Neuf. Dix-neuf ans. On lui a proposé, une fois, un gardien acheté. Il a refusé. Il a dit qu'il attendait quelqu'un. »",
      ],
      choices: [{ label: "Finir ta soupe", fx: { flag: "brise:trou" }, back: "A3m_brisegreve" }] },

    // ---------------------------------------------------------------- the doctor
    XQ_b_infirmerie: { act: "III", title: "L'infirmerie du fort", place: "brisegreve", ambiance: "chateau",
      text: [
        "Le lendemain du dîner, Victorine demande à voir l'infirmerie. Le gouverneur hésite, puis accepte, avec un sourire de propriétaire qui ouvre une cave dont il n'est pas fier.",
        "L'infirmerie est une salle voûtée, sous la cour, éclairée par trois soupiraux. Vingt grabats, et sur les grabats, des hommes en casaque rouge, maigres, gris, qui toussent. Ça sent le pus, la paille pourrie, le vinaigre. Au fond, à une table, un homme en habit d'uniforme déboutonné, la perruque de travers, dort, la tête sur ses bras, à côté d'une bouteille vide.",
        "Le chirurgien-major. Le sergent qui l'accompagne le secoue. Il se réveille, voit une femme, se lève, salue, retombe sur sa chaise, et lui offre à boire.",
        "Victorine fait le tour des grabats. Des fièvres. Des plaies infectées aux chevilles, là où frottent les fers. Deux scorbuts. Un homme qui a la jambe gangrenée et que personne n'a coupée, parce que le chirurgien-major tremble trop.",
      ],
      choices: [
        { label: "Retrousser ses manches", fx: { flag: "brise:infirmerie" }, to: "XQ_b_infirmerie_jour" },
        { label: "Remercier, et remonter", back: "A3v_brisegreve" },
      ] },
    XQ_b_infirmerie_jour: { act: "III", title: "Une journée", place: "brisegreve", ambiance: "chateau",
      text: [
        "Elle y passe la journée. Elle nettoie les chevilles au vin, les bande avec la charpie de sa trousse. Elle fait ouvrir les soupiraux. Elle fait brûler la paille et en fait apporter de la fraîche. Elle coupe la jambe gangrenée, au-dessus du genou, avec la scie du chirurgien-major, qu'elle a fait bouillir, pendant que quatre soldats tiennent le forçat et que le chirurgien-major, dégrisé par la peur, tient la lanterne.",
        "Le forçat vit. Il la regarde, le soir, du fond de son grabat, avec des yeux qui ne comprennent pas.",
        "« Pourquoi ? dit-il. Je suis à perpétuité, madame. On m'a coupé la jambe. Vous m'avez rendu quelques années de plus à faire ici. Pourquoi ? »",
        "Victorine se lave les mains dans une cuvette. Elle cherche une réponse. Elle n'en trouve qu'une, qui est la vraie, et qui n'est pas suffisante.",
        "« Parce que c'est mon métier », dit-elle.",
        "Le chirurgien-major, en la raccompagnant, lui demande à voix basse s'il peut lui écrire, à Varnèse, pour des conseils. Il a l'air d'un homme qui se noie et qui voit passer une planche.",
      ],
      choices: [{ label: "Remonter dans la cour", back: "A3v_brisegreve" }] },
    XQ_b_aumonier: { act: "III", title: "L'aumônier", place: "brisegreve", ambiance: "chateau",
      text: [
        "Le dimanche, à la chapelle du fort, l'aumônier dit la messe pour la garnison et pour les forçats, qui l'entendent à travers une grille, au fond, dans le noir. On voit leurs mains accrochées aux barreaux. On ne voit pas leurs visages.",
        "Il prêche sur la patience. Il prêche bien. C'est un petit homme sec, aux yeux rouges, qui a l'air de ne pas croire un mot de ce qu'il dit et de le dire quand même avec une conviction terrible, comme un homme qui pousse une charrette dans une côte.",
        "Après la messe, Victorine reste. Il vient s'asseoir à côté d'elle, sur le banc, sans façon.",
        "« Vous êtes allée voir le Neuf, dit-il. Ou vous allez y aller. Tous les visiteurs y vont. Il est devenu une curiosité, comme le phare ou la grotte. » Il soupire. « Je le confesse depuis dix-neuf ans. Une fois par mois. »",
        "« Et que dit-il ? »",
        "L'aumônier sourit. « Rien. Dix-neuf ans de confessions, madame, et cet homme ne m'a jamais confié un seul péché. Il me récite des chiffres. Des angles. Des longitudes. Il dit que c'est sa façon de prier, et que Dieu comprendra. » Il se lève. « Je ne peux pas vous dire ce qu'il dit à Dieu. Mais je peux vous dire ce qu'il ne dit pas. Il ne dit jamais le nom du capitaine qu'il servait. Il le garde comme on garde une dette. »",
      ],
      choices: [{ label: "Le remercier", fx: { flag: "brise:aumonier" }, back: "A3v_brisegreve" }] },
  },
  extras: {
    items: {
      lettre_forcat: { name: "Une lettre de forçat", kind: "document", form: "lettre", hand: "maladroite", keep: true, price: 0,
        desc: "Un papier roulé, sorti d'une bouteille verte, pêchée sous les égouts de la prison de Brisegrève.",
        text: "« Ma chère maman, je suis à Brisegrève depuis l'automne. Je vais bien. On mange le soir. On travaille à l'escalier. Je ne suis pas malade. Ne pleurez pas. Ce que j'ai fait, je l'ai fait pour le pain du petit, et je recommencerais. Dites au petit que je suis soldat. Je vous embrasse. Votre fils, Yann Le Gall, de Plouvenec, rue du Lavoir, chez la veuve Le Gall. »" },
    },
  },
};
