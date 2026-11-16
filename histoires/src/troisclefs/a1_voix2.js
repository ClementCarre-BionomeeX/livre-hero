// Act I, the voice (post `a1` = voix), second half: the reception of the Heures in the salle des Cadrans. The three
// Clavaires, Crochemore's little automaton, the Syndic's daughter, the register of the post-horses, the provost, and
// the cabinet where the three withdraw at five.
// Sets: monde:a1:itineraires (the three roads are known), monde:a1:invite_chasses (the count has invited the voice to
// Brandelis), monde:a1:celeste_vue (the Syndic's daughter has met the voice). Personal: a1:v_fer, a1:v_cendre,
// a1:v_sang (one road each), a1:v_presente (introduced by Crochemore), a1:v_remarque.
var COSTUME_AIDE = function (envoye, gazetier, laquais) {
  return [{ if: { has: "a1:v_envoye" }, v: envoye }, { if: { has: "a1:v_gazetier" }, v: gazetier }, { if: { has: "a1:v_laquais" }, v: laquais },
    { if: { has: "a1:v_presente" }, v: 10 }, { if: { has: "a1:v_instruit" }, v: 5 }, { if: { has: "a1:v_remarque" }, v: -10 }];
};
var TROIS = { all: [{ has: "a1:v_fer" }, { has: "a1:v_cendre" }, { has: "a1:v_sang" }] };

module.exports = {
  passages: {
    A1v_salon: { act: "I", title: "La salle des Cadrans", place: "heures", hub: true, backName: "la salle des Cadrans",
      text: [
        { first: true, text: "La salle des Cadrans est longue, haute, lambrissée de vert, et l'on n'y voit pas un pan de mur. Les Heures ont tout couvert. Il y a là des pendules de cheminée par régiments, des régulateurs dans leurs gaines de verre, des horloges à planètes où tournent des lunes d'ivoire, des cages où des oiseaux d'émail ouvrent le bec à chaque quart ; et tout cela marche ensemble, avec ce bruissement de feuillage métallique qui fait d'abord parler plus haut, puis plus bas, puis plus du tout, comme dans les lieux où l'on se sent compté." },
        { first: true, text: "Deux cents personnes circulent là-dessous, un verre à la main. Elles ont pris sans y penser le pas de la salle : on avance d'une vitrine à l'autre, on s'arrête, on repart, par petits mouvements réglés. Vue de la porte, la réception des Heures ressemble à l'intérieur d'une montre." },
        { first: true, text: "Tu cherches trois hommes, et tu les trouves aussitôt, parce que la foule s'arrange autour d'eux comme la limaille autour de trois aimants. Près de la cheminée, un cercle bruyant, et au milieu le velours prune du Syndic. Dans l'embrasure de la dernière fenêtre, un fauteuil, une soutane violette, et un vide respectueux de trois pas. Au fond, autour d'une table de marbre, des rires, des jurons de bonne compagnie, et un bruit de dés." },
        { again: true, text: "La salle des Cadrans, son bruissement, ses trois cercles : le prune à la cheminée, le violet à la fenêtre, le cramoisi à la table de marbre." },
        { after: "A1v_cabinet_ok", text: "Les trois sont ressortis du cabinet, l'un après l'autre, par trois portes. On commence à demander les voitures." },
      ],
      choices: [
        { label: "Entrer dans le cercle du Syndic", to: "A1v_q", hide: { any: [{ seen: "A1v_q_ok" }, { seen: "A1v_q_ko" }] } },
        { label: "Franchir les trois pas de vide, vers la soutane violette", to: "A1v_c", hide: { any: [{ seen: "A1v_c_ok" }, { seen: "A1v_c_ko" }] } },
        { label: "Approcher de la table de marbre", to: "A1v_b", hide: { any: [{ seen: "A1v_b_ok" }, { seen: "A1v_b_ko" }] } },
        { label: "Aller voir le petit Juge de Maître Crochemore", to: "A1v_petit", hide: { seen: "A1v_petit" } },
        { label: "Tenir compagnie à la jeune fille qui bâille derrière son éventail", to: "A1v_celeste", hide: { any: [{ seen: "A1v_celeste_ok" }, { seen: "A1v_celeste_ko" }] } },
        { label: "Jeter un œil, au vestibule, sur le gros registre", to: "A1v_registre", hide: { any: [TROIS, { seen: "A1v_registre_ko" }] } },
        { label: "Passer près du prévôt, qui cause avec le secrétaire", to: "A1v_cadenas", hide: { seen: "A1v_cadenas" } },
        { label: "Cinq heures : suivre des yeux les trois Clavaires, qui se retirent ensemble", to: "A1v_cabinet", if: { count: [{ seen: "A1v_q" }, { seen: "A1v_c" }, { seen: "A1v_b" }], min: 2 }, hide: { any: [{ not: { count: [{ seen: "A1v_q" }, { seen: "A1v_c" }, { seen: "A1v_b" }], min: 2 } }, { seen: "A1v_cabinet" }] } },
        { label: "Quitter la réception avant qu'on ferme les portes", to: "A1v_bilan", big: true },
      ] },

    // ------------------------------------------------------------ the Syndic
    A1v_q: { act: "I", title: "Le cercle du Syndic", place: "heures",
      text: [
        "Maître Quincarnon est chez les horlogers comme un bœuf chez des orfèvres, et il s'y plaît. Il tient le milieu de la cheminée, les basques relevées, et il explique aux Heures ce que vaut le temps : tant l'once.",
        { if: { has: "monde:p:reine=propre" }, text: "Il a ce matin la gaieté appliquée d'un homme à qui l'on a pris quelque chose pendant la nuit et qui a décidé que personne ne le saurait. On le sait. On le félicite beaucoup de sa Serrure-Reine, pour le plaisir de le voir remercier.", else: "On lui parle du vol avec des mines d'enterrement. Il écarte le sujet d'un revers de main bagué : « Cinquante écus de prime, c'est le prix d'une gorge. On me la rapportera avant dimanche, et le voleur avec. J'ai la patience des gens qui tiennent les dettes. »" },
        "« … et je pars ce soir, mes amis ! Trois semaines à Ferrières. La cloche, la grande ! Vingt mille livres de bronze. Savez-vous ce que cela coûte, vingt mille livres de bronze ? » Il compte sur ses doigts. Le cercle attend le total.",
        { if: { has: "a1:v_laquais" }, text: "Tu es en livrée. Tu ne lui parleras pas : tu lui verseras à boire, et tu resteras derrière son coude aussi longtemps qu'une carafe peut durer." },
      ],
      fx: { meet: "quincarnon" },
      choices: [
        { label: "Le lancer sur son voyage : la route, les relais, ce qu'il emporte", test: { dom: "social", diff: 0, label: "Social", help: COSTUME_AIDE(15, 10, 10) }, win: { fx: { flag: "a1:v_fer", ep: ["perso", 600] }, to: "A1v_q_ok" }, lose: { to: "A1v_q_ko" } },
        { label: "Lui parler bronze, alliage et prix de la coulée, en connaisseur", test: { dom: "savoir", diff: 0, label: "Savoir", help: COSTUME_AIDE(15, 5, -10) }, win: { fx: { flag: "a1:v_fer", ep: ["perso", 600] }, to: "A1v_q_ok" }, lose: { to: "A1v_q_ko" } },
      ] },
    A1v_q_ok: { act: "I", title: "Le coche du Nord", place: "heures",
      text: [
        "Il ne demande que cela. Un homme qui compte tout aime qu'on lui fasse énumérer.",
        "« Le coche du Nord, à huit heures, cour des Messageries. Je l'ai retenu entier : six places, je n'en occupe que deux avec ma fille, mais je paie les six, pour n'avoir pas de voisins. Deux gardes de la guilde sur le siège. Souper à la Croix-de-Fer, coucher au relais des Trois-Enclumes, et le surlendemain à midi je suis chez moi, au manoir, les pieds sur mes chenets. »",
        "« Et vous emportez la clef, naturellement », dit quelqu'un, pour faire sa cour.",
        "Le Syndic se tapote la poitrine. Sous le velours, contre la chaîne d'or, quelque chose de dur rend un petit bruit. « Elle ne me quitte pas. Je dors dessus. Mon frappeur couche en travers de ma porte. À Ferrières, elle va au coffre de la fonderie, qui a trois pieds de fonte, et dont je suis seul à savoir le mot. » Il rit. « Le Fer garde le Fer, messieurs. Vos pendules sont jolies ; mais essayez donc de fermer une porte avec. »",
        "« Votre frappeur est du voyage ? »",
        "« Il me rejoint demain. Il a une course à faire ce soir. » Le Syndic vide son verre, et parle d'autre chose.",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_q_ko: { act: "I", title: "Tant l'once", place: "heures",
      text: [
        "Tu poses ta question. Le Syndic te regarde, t'évalue, t'inscrit dans une colonne, et te répond par un prix.",
        "Il te vend une serrure. Tu n'en voulais pas, tu n'as rien demandé de tel, et pourtant, au bout de cinq minutes, tu sais ce que coûte chez lui un cadenas à secret, pose comprise, et tu as failli donner ton adresse. Le cercle rit. Quand tu parviens à t'en retirer, il est déjà revenu à sa cloche, et tu n'as appris de son voyage que ce que toute la salle en sait : il part ce soir.",
      ],
      choices: [{ back: "A1v_salon" }] },

    // ------------------------------------------------------------ the Doyen
    A1v_c: { act: "I", title: "Monseigneur", place: "heures",
      text: [
        "Monseigneur Calixte de Saint-Brumaire, Doyen des Morts, est assis dans l'embrasure, le dos à la lumière, de sorte qu'on voit d'abord de lui une couronne de cheveux blancs et deux mains gantées de fil, très longues, posées sur les bras du fauteuil comme sur un livre fermé. Il ne mange pas. Il ne boit pas. Il respire de temps en temps un petit sachet qui sent le buis.",
        "On vient à lui un par un, on s'incline, on baise l'anneau, on repart plus vite. Il a pour chacun un mot, dit d'une voix douce, et chacun en revient avec la figure d'un homme à qui son médecin a souri.",
        "Il lève les yeux quand tu passes les trois pas de vide. Ils sont très clairs, presque sans couleur, et d'une attention qui ne cligne pas.",
        "« Approchez. Je ne vous connais pas. C'est un plaisir qui se fait rare, à mon âge : je connais presque tout le monde, et j'ai enterré le reste. »",
      ],
      fx: { meet: "calixte" },
      choices: [
        { label: "T'incliner sur l'anneau, et demander des prières pour un mort de ta maison", test: { dom: "social", diff: -5, label: "Social", help: COSTUME_AIDE(10, 5, -10) }, win: { fx: { flag: "a1:v_cendre", clue: "s_doyen", ep: ["perso", 700] }, to: "A1v_c_ok" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_c_ko" } },
        { label: "L'interroger sur la fête des Trépassés, ses offices, son ordonnance", test: { dom: "savoir", diff: -5, label: "Savoir", help: COSTUME_AIDE(5, 20, -10) }, win: { fx: { flag: "a1:v_cendre", clue: "s_doyen", ep: ["perso", 700] }, to: "A1v_c_ok" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_c_ko" } },
      ] },
    A1v_c_ok: { act: "I", title: "Une main qui ne se ferme plus", place: "heures",
      text: [
        "Il t'écoute, la tête penchée. Il a cette manière d'écouter des confesseurs, qui donne envie d'en dire plus qu'on ne voulait.",
        "« Ossevaux vous plairait. C'est une ville reposante. Douze mille morts pour un vivant : on y parle bas par politesse. Je pars à l'aube, dans ma litière, par la route des Cyprès. Deux jours, à l'allure des mules. Je couche à l'abbaye de Sainte-Larme, où l'on me doit le souper depuis l'an mil. » Un sourire, très mince. « La fête des Trépassés est dans un mois. Venez. On y pleure admirablement. »",
        "Quelqu'un, derrière toi, risque une plaisanterie sur la clef de Cendre, et l'endroit où un évêque peut bien la mettre en voyage.",
        "« Elle voyage sur mon cœur, mon fils, puisqu'on veut le savoir. Mais à Ossevaux, elle repose où reposent toutes choses : dans une main qui ne se ferme plus. C'est le coffre le plus sûr. Personne n'aime desserrer ces doigts-là. »",
        "Il respire son buis. Ses yeux clairs reviennent à toi.",
        "« On parlera beaucoup du Juge, ces semaines-ci. Vous verrez. Les gens s'inquiètent : cent cinq ans, pour un oracle, c'est un grand âge. Il a beaucoup parlé. » La voix est d'une douceur de linge. « Les vieillards parlent trop, et finissent par dire des choses qui les fatiguent. C'est une charité que de les aider à se taire. Je le dis souvent à mes chanoines. »",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_c_ko: { act: "I", title: "« Je prierai pour vous »", place: "heures",
      text: [
        "Tu parles. Il te laisse aller jusqu'au bout, sans t'aider, avec une politesse qui fait de chacune de tes phrases un pas de plus sur une glace mince.",
        "« C'est très bien dit. » Il respire son buis. « Vous avez une voix qui a servi à beaucoup de choses, et des mains qui ont travaillé, et entre les deux un visage qui ne dit pas d'où il vient. J'ai eu des novices comme vous. Ils faisaient de mauvais prêtres et d'excellents sacristains : ils savaient toujours où étaient les clefs. »",
        "Ses yeux descendent, sans hâte, jusqu'à ton cou, où pend ta clef de baptême, et remontent.",
        "« Je prierai pour vous. Je prie beaucoup pour les gens qui regardent le mien. » Il tend l'anneau. L'audience est finie, et tu as le sentiment précis d'avoir été lu{e}, refermé{e}, et rangé{e} sur un rayon.",
      ],
      choices: [{ back: "A1v_salon" }] },

    // ------------------------------------------------------------ the Connétable
    A1v_b: { act: "I", title: "La table de marbre", place: "heures",
      text: [
        "Les Heures ont eu la faiblesse de laisser une table libre, et le comte de Brandelis l'a prise d'assaut. Il a fait apporter un cornet de cuir. Il a trouvé trois partenaires, deux officiers et un jeune horloger écarlate de son audace. On joue au passe-dix, sur du marbre, au milieu des pendules, avec un bruit d'osselets que les maîtres de la guilde écoutent comme on écoute blasphémer.",
        "C'est un bel homme, encore, large d'épaules, la barbe en pointe, une cicatrice au sourcil qui lui donne l'air de douter de tout. Il a gardé ses bottes. Il jette les dés d'un tour de poignet qui a dû lui coûter une fortune à apprendre.",
        "« Onze ! Je passe. À vous, lieutenant. Ne faites pas cette tête, c'est votre solde qui sort, pas votre sang. » Il perd le coup suivant, et rit du même rire. Devant lui, il n'y a pas une pièce : un carnet, un crayon, et de petits papiers qu'il déchire et signe.",
        "Derrière sa chaise, un grand valet en bottes, une cocarde cramoisie au chapeau, tient un manteau sur son bras et regarde le plafond.",
      ],
      fx: { meet: "brandelis" },
      choices: [
        { label: "Demander à entrer dans la partie", if: { all: [{ gold: { min: 20 } }, { not: { has: "a1:v_laquais" } }] }, test: { dom: "social", diff: 0, label: "Social", help: COSTUME_AIDE(10, 5, 0) }, win: { fx: { gold: 30, flag: ["a1:v_sang", "monde:a1:invite_chasses"], clue: "g_ordre", ep: ["perso", 700] }, to: "A1v_b_ok" }, lose: { fx: { gold: -20 }, to: "A1v_b_ko" }, hide: { has: "a1:v_laquais" } },
        { label: "Regarder jouer, et applaudir aux bons endroits", test: { dom: "social", diff: -5, label: "Social", help: COSTUME_AIDE(5, 15, -5) }, win: { fx: { flag: "a1:v_sang", clue: "g_ordre", ep: ["perso", 600] }, to: "A1v_b_regarde" }, lose: { to: "A1v_b_ko" } },
        { label: "Lui tenir son verre plein, et rester derrière son épaule", if: { has: "a1:v_laquais" }, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { fx: { flag: "a1:v_sang", clue: "g_ordre", ep: ["perso", 600] }, to: "A1v_b_regarde" }, lose: { to: "A1v_b_ko" }, hide: { not: { has: "a1:v_laquais" } } },
      ] },
    A1v_b_ok: { act: "I", title: "Passe-dix", place: "heures",
      text: [
        "« Un joueur ! Dieu soit loué, je croyais cette ville peuplée de balanciers. Asseyez-vous. Vingt sous le point ? »",
        "Tu joues. Tu perds deux coups, tu en gagnes trois, et tu as l'esprit de perdre le dernier avec bonne humeur : c'est tout ce qu'il demande à un partenaire. Il te paie tes trente sous d'un petit papier déchiré, signé d'un B qui tient la moitié de la feuille. *Bon pour trente sous. Brandelis.* « Présentez cela à mon intendant. Il a l'habitude. Il pleure, mais il paie. »",
        "Il s'est pris d'amitié, comme les joueurs, en dix minutes. « Je pars ce soir. À cheval, par la route de la Sylve, avec mes piqueurs : je ne monte en voiture que mort. Trois jours, en chassant sur le chemin. Venez à Brandelis pour la Saint-Hubert ! On y court le cerf le matin, on y danse masqué le soir, et on y joue la nuit. Dites que vous êtes de mes amis de la table de marbre, on vous ouvrira. »",
        "Il porte la main à son col, machinalement. Un ruban cramoisi y disparaît sous la chemise. « J'ai là un porte-bonheur que deux messieurs de cette salle voudraient bien me voir perdre. Il ne me porte bonheur à rien, d'ailleurs. Mais je ne le joue pas. C'est la seule chose au monde que je ne joue pas. »",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_b_regarde: { act: "I", title: "Un homme qui signe", place: "heures",
      text: [
        "Tu regardes, et tu écoutes. Un homme qui joue parle à la table, pas aux gens ; il dit tout.",
        "« … et ce soir je suis en selle. La route de la Sylve, mes piqueurs, trois jours. Je ne monte en voiture que mort. La Saint-Hubert à Brandelis, messieurs : le cerf, le bal, les cartes. Qui m'aime me suive. »",
        "Il perd. Il déchire un coin de son carnet, écrit, signe d'un B énorme, pousse le papier sur le marbre. *Bon pour douze écus.* Le lieutenant le plie avec la résignation d'un homme qui en a déjà une liasse. Le comte ne paie rien en pièces. Il paie en signatures, à tout le monde, avec une largesse de prince ; et tu vois le grand valet à cocarde, derrière sa chaise, suivre chaque papier des yeux, comme un berger compte des moutons qui s'en vont.",
        "Deux fois, en jouant, le comte porte la main à son col, où un ruban cramoisi disparaît sous la chemise.",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_b_ko: { act: "I", title: "La veine", place: "heures",
      text: [
        "La veine est une personne capricieuse, et le comte de Brandelis n'aime que les gens qu'elle aime, ou ceux qui perdent drôlement. Tu ne fais ni l'un ni l'autre. Tu perds avec application, ou tu regardes avec trop de sérieux ; il te tourne le dos au troisième coup, pour un officier qui vient de dire un mot.",
        "Tu restes un moment au bord de la table. Tu en retiens qu'il part ce soir, à cheval. Le reste s'est dit trop bas, entre gens qui se tutoient.",
      ],
      choices: [{ back: "A1v_salon" }] },

    // ------------------------------------------------------------ the little Judge
    A1v_petit: { act: "I", title: "Le petit Juge", place: "heures",
      text: [
        "Maître Crochemore a son coin, près de l'estrade, et sa cour, composée d'apprentis qui n'osent pas s'en aller. Sur un guéridon, sous un globe qu'il ôte avec des gestes de prêtre, il y a un bonhomme de bronze haut de deux empans : une figure assise, en robe, la main levée.",
        "« Ceci, messieurs, est une plaisanterie. Une réduction, à l'usage des enfants et des syndics. » Il remonte une clef dans le dos de la figure. Le petit bras se lève, la mâchoire s'abaisse, et une voix sort du socle, nasillarde, cuivrée, pareille à celle d'un canard qui aurait fait ses classes : *Le Bronze a dit.*",
        "On applaudit. Crochemore lève une main. « Un cylindre, des picots, trois anches. Il sait trois mots et les dira jusqu'à la fin du monde. Voilà ce que le vulgaire croit qu'est le Juge ! Un perroquet de laiton ! Alors que mon bisaïeul… »",
        "« Et cela pourrait en dire plus long ? » La question vient du cercle voisin. Le Syndic s'est approché, son verre à la main, l'œil vif. « Je demande en marchand. Trois mots, c'est un jouet. Mais trente ? Trois cents ? Une page ? »",
        "« Autant qu'on veut, monsieur le Syndic. C'est une affaire de picots, c'est-à-dire de patience et de bronze. Un cylindre gros comme un tonnelet vous réciterait les Sept Causes. Mais il les réciterait *toujours les mêmes*, voilà la différence entre une mécanique et une pensée ! »",
        "« Toujours les mêmes », répète le Syndic. Il sourit, remercie, et retourne à sa cheminée.",
        { if: { has: "monde:a1:crochemore" }, text: "Crochemore t'aperçoit, et son visage s'éclaire. « Ah ! Mon auditeur. Venez, que je vous présente : vous êtes la seule personne ici qui écoute. » Il te présente, en effet, à quatre maîtres et à un juré, comme un phénomène." },
      ],
      fx: { clue: "s_petit", ep: ["perso", 300] },
      choices: [
        { label: "Te laisser présenter", if: { has: "monde:a1:crochemore" }, fx: { flag: "a1:v_presente" }, back: "A1v_salon", hide: { not: { has: "monde:a1:crochemore" } } },
        { back: "A1v_salon" },
      ] },

    // ------------------------------------------------------------ the Syndic's daughter
    A1v_celeste: { act: "I", title: "Mademoiselle Quincarnon", place: "heures",
      text: [
        "Elle est assise sur une banquette, entre deux régulateurs, et elle bâille. Elle le fait derrière un éventail, mais avec une franchise que l'éventail ne suffit pas à couvrir. Dix-neuf ans, une robe qui a coûté le prix d'une maison, et sur toute sa personne l'ennui d'une fille riche qu'on promène.",
        "Elle t'a vu{e} venir. Elle replie l'éventail.",
        "« Si vous venez me dire que les pendules sont jolies, je crie. On me l'a dit onze fois. Je les ai comptées, c'est la seule distraction qu'on m'ait laissée. » Elle a une voix nette, un peu rauque. « Céleste Quincarnon. Mon père est le gros en prune qui vend quelque chose à quelqu'un, là-bas. »",
      ],
      fx: { meet: "celeste", flag: "monde:a1:celeste_vue" },
      choices: [
        { label: "« Elles sont affreuses. On dirait une salle d'attente chez le bon Dieu. »", test: { dom: "social", diff: 5, label: "Social", help: [{ if: { has: "a1:v_laquais" }, v: -10 }, { if: { voie: "comedien" }, v: 10 }] }, win: { fx: { clue: "s_celeste", ep: ["perso", 500] }, to: "A1v_celeste_ok" }, lose: { to: "A1v_celeste_ko" } },
        { label: "Lui demander ce qu'elle fera, de ces trois semaines à Ferrières", test: { dom: "social", diff: 5, label: "Social", help: [{ if: { has: "a1:v_instruit" }, v: 10 }] }, win: { fx: { clue: "s_celeste", ep: ["perso", 500] }, to: "A1v_celeste_ok" }, lose: { to: "A1v_celeste_ko" } },
      ] },
    A1v_celeste_ok: { act: "I", title: "Un endroit où l'on fait des barreaux", place: "heures",
      text: [
        "Elle rit. Ce n'est pas un rire de salon : il lui échappe, bref, et deux douairières se retournent.",
        "« Ferrières. Vous connaissez ? C'est un endroit où l'on fabrique des barreaux, et où l'on en fait usage. Il y a la mine, la forge, le manoir, et moi à la fenêtre du manoir. J'y ai passé tous mes étés à regarder de la fumée. » Elle rouvre l'éventail, pour s'en servir cette fois. « Cette année, j'aurai de la compagnie : mon père y a un gendre en vue. Il me l'a annoncé comme on annonce une livraison. »",
        "« Et vous ? »",
        "« Moi, je suis la marchandise. On ne demande pas son avis au fer. » Elle te regarde par-dessus l'éventail, avec une curiosité subite. « Il a la tête ailleurs, d'ailleurs, mon père. Depuis un mois, il ne parle que d'une commande qu'il a fait fondre là-bas pour la Tour. *Un présent pour le Juge*, dit-il, et il rit tout seul. Je ne l'avais jamais vu rire de quelque chose qui ne rapporte rien. Cela m'a fait peur, figurez-vous. »",
        "Une duègne vient la reprendre. Elle se lève, te fait une révérence qui se moque d'elle-même. « Si jamais vous passez par Ferrières, sifflez sous ma fenêtre. Je m'ennuierai assez pour descendre. »",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_celeste_ko: { act: "I", title: "Douze", place: "heures",
      text: [
        "Tu trouves une phrase. Elle l'écoute, la tête penchée, et son œil s'éteint à mesure, comme une chandelle sous un verre.",
        "« Douze », dit-elle. Elle rouvre son éventail entre vous deux. C'est une cloison très mince, peinte de bergers, et parfaitement infranchissable.",
      ],
      choices: [{ back: "A1v_salon" }] },

    // ------------------------------------------------------------ the register of the post-horses
    A1v_registre: { act: "I", title: "Le registre des relais", place: "heures",
      text: [
        "Le vestibule est vide, sauf le suisse, qui te tourne le dos, et le commis en manches de lustrine, qui taille sa plume. L'homme botté est reparti. Le gros registre est resté ouvert sur son pupitre.",
        "C'est le livre du maître de poste. La ville tient à savoir qui retient des chevaux, pour où, et qui en répond ; les jours de réception, on l'apporte à l'hôtel de ville, afin que ces messieurs puissent commander leurs relais entre deux verres. La page du jour est à moitié pleine, d'une ronde appliquée.",
        "Le commis lève le nez. Il faut une raison d'être là, et des yeux rapides.",
      ],
      choices: [
        { label: "« Mon maître veut savoir si ses chevaux sont inscrits. » Et lire, pendant qu'il cherche", test: { dom: "savoir", diff: 0, label: "Savoir", help: COSTUME_AIDE(5, 10, 20) }, win: { fx: { flag: ["a1:v_fer", "a1:v_cendre", "a1:v_sang"], ep: ["perso", 700] }, to: "A1v_registre_ok" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_registre_ko" } },
        { label: "Faire tomber son encrier, et lire pendant qu'il éponge", test: { dom: "discretion", diff: 0, label: "Discrétion", help: COSTUME_AIDE(0, 0, 15) }, win: { fx: { flag: ["a1:v_fer", "a1:v_cendre", "a1:v_sang"], ep: ["perso", 700] }, to: "A1v_registre_ok" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_registre_ko" } },
      ] },
    A1v_registre_ok: { act: "I", title: "Trois lignes d'une ronde appliquée", place: "heures",
      text: [
        "Trois lignes, l'une sous l'autre, que tu lis à l'envers et que tu garderas à l'endroit.",
        "*M. le Syndic Quincarnon. Coche du Nord, les six places. Départ huit heures du soir. Relais : la Croix-de-Fer, les Trois-Enclumes, Ferrières. Deux gardes de la guilde.*",
        "*Mgr le Doyen. Litière, quatre mules, deux de rechange. Départ à l'aube. Route des Cyprès. Relais : abbaye de Sainte-Larme, Ossevaux. Six clercs à pied, portant cierges.*",
        "*M. le Connétable. Point de relais. Douze chevaux de sa maison. Route de la Sylve. Départ à la nuit.* Et en marge, d'une autre main, pressée : *Deux chevaux de plus, pour gens à lui qui suivront à part. Ne pas inscrire les noms.*",
        "Le commis referme le registre sous ton nez, avec la satisfaction d'un homme qui a fait son devoir. Il l'a fait trois lignes trop tard.",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_registre_ko: { act: "I", title: "Un commis", place: "heures",
      text: [
        "Le commis en manches de lustrine appartient à cette espèce d'hommes que rien n'a jamais distraits de leur registre, ni l'amour, ni la guerre, ni un encrier. Il pose la main à plat sur la page du jour, sans hâte, comme on couvre une casserole.",
        "« Le livre de poste est à la ville. On y inscrit. On n'y lit pas. » Il te regarde bien. « Vous êtes à qui, déjà ? » Tu donnes un nom ; il l'écrit, dans la marge, à tout hasard. Tu regagnes la salle avec ce nom-là de moins à ton service.",
      ],
      choices: [{ back: "A1v_salon" }] },

    // ------------------------------------------------------------ the provost
    A1v_cadenas: { act: "I", title: "La casaque bleue", place: "heures", branch: [
      { if: { has: "monde:p:cadenas_vu" }, to: "A1v_cadenas_vu" }, { to: "A1v_cadenas_passe" }] },
    A1v_cadenas_passe: { act: "I", title: "La casaque bleue", place: "heures",
      text: [
        "Le prévôt d'Aiguemorne est venu en tenue, casaque bleue et baudrier, parce que la réception des Heures est une corvée d'office et qu'il entend qu'on le sache. Il se tient près de la porte, un verre intact à la main. Il mâchonne un clou de girofle. Il regarde la salle comme un paysan regarde un champ : pour voir ce qui dépasse.",
        "Tu passes derrière lui, lentement, en admirant une pendule.",
        "« … Maître Balancier n'est pas venu ? » demande-t-il au secrétaire.",
        "« Il s'est fait excuser. Une indisposition. »",
        "« Une indisposition ? » Le prévôt répète le mot, lentement. « Trente ans que je viens à cette réception. Trente ans qu'il y est le premier, à quatre heures moins une, pour regarder si l'horloge du fronton est juste. » Il tourne son verre. « Vous lui direz que je passerai le saluer demain matin. Il m'a fait tenir un mot, avant-hier, pour me demander une heure. Je n'ai pas eu le temps. J'aurais dû le prendre. »",
      ],
      fx: { meet: "cadenas", clue: "r_mot", ep: ["perso", 300] },
      choices: [{ back: "A1v_salon" }] },
    A1v_cadenas_vu: { act: "I", title: "« Nous nous sommes vus »", place: "heures",
      text: [
        "Le prévôt d'Aiguemorne est venu en tenue, casaque bleue et baudrier. Il se tient près de la porte, un verre intact à la main, et il regarde la salle comme un paysan regarde un champ : pour voir ce qui dépasse.",
        "Tu passes derrière lui. Tu n'as pas fait trois pas qu'il a tourné la tête.",
        "« Nous nous sommes vus. » Ce n'est pas une question. Il mâchonne son clou de girofle, sans hâte. « Hier soir. Chez les Maîtres. Vous n'aviez pas cet habit. » Ses yeux descendent à tes mains, remontent. « Vous changez beaucoup de métier, pour une seule semaine. »",
      ],
      fx: { meet: "cadenas" },
      choices: [
        { label: "« Hier j'observais pour le compte d'un autre. Aujourd'hui aussi. C'est mon métier, monsieur le prévôt, comme le vôtre. »", test: { dom: "social", diff: -10, label: "Social", help: COSTUME_AIDE(5, 20, -10) }, win: { fx: { ep: ["perso", 700], clue: "r_mot" }, to: "A1v_cadenas_ok" }, lose: { fx: { flag: ["a1:v_remarque", "a1:v_chasse"] }, to: "A1v_cadenas_ko" } },
        { label: "Le regarder avec étonnement, et passer : il se trompe de personne", test: { dom: "discretion", diff: -10, label: "Discrétion" }, win: { fx: { ep: ["perso", 500] }, to: "A1v_cadenas_doute" }, lose: { fx: { flag: ["a1:v_remarque", "a1:v_chasse"] }, to: "A1v_cadenas_ko" } },
      ] },
    A1v_cadenas_ok: { act: "I", title: "Deux métiers", place: "heures",
      text: [
        "Il te considère. Quelque chose bouge sous la moustache grise, qui chez un autre serait un sourire.",
        "« Comme le mien ? Non. Moi, on me paie pour dire ce que j'ai vu. » Il boit enfin une gorgée, en homme qui s'accorde une trêve. « Mais vous avez du front, et je n'arrête pas les gens pour leur front. Je les arrête pour ce qu'ils ont dans les poches. Les vôtres sont vides, ce soir. J'ai regardé. »",
        "Il se retourne vers la salle.",
        "« Rendez-moi un service, puisque vous observez. Si vous croisez Maître Balancier, le Remonteur, dites-lui que j'ai eu son mot. Il me demandait une heure, seul à seul. Je passerai demain matin. » Un temps. « Il n'est pas venu aujourd'hui. Trente ans qu'il vient. Je n'aime pas cela. »",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_cadenas_doute: { act: "I", title: "Un visage rangé", place: "heures",
      text: [
        "Tu passes. Tu sens son regard sur ta nuque pendant dix pas, puis plus rien : il a tourné la tête vers autre chose. Il n'est pas sûr. Un homme honnête n'interpelle pas sur une ressemblance, au milieu de deux cents notables, et le Cadenas est honnête : c'est son défaut, la ville basse le sait et s'en sert.",
        "Mais il t'a rangé{e} deux fois. La troisième, il n'hésitera plus.",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_cadenas_ko: { act: "I", title: "Une main sur le bras", place: "heures",
      text: [
        "« Un instant. » La main qui se pose sur ton bras est large, courte, sans brutalité. « Je ne fais pas de scandale chez les Heures. Mais vous allez me donner votre nom, votre rue, et me dire ce que vous faisiez hier entre onze heures et minuit. »",
        "Tu donnes un nom, une rue. Il les écrit sur son carnet, à la mine, d'une écriture de sergent. Il sait qu'ils sont faux. Tu sais qu'il le sait.",
        "« Je vérifierai demain. D'ici là, faites-moi le plaisir de sortir. La porte est derrière vous. » Il te lâche. « Et dites à madame Berlue que je monterai la voir. »",
        "Il a dit le nom sans lever la voix. Tu sors de la réception des Heures entre deux battants qu'un suisse tient ouverts, sous deux cents regards qui n'ont rien compris et qui se souviendront.",
      ],
      choices: [{ label: "Descendre le perron", to: "A1v_bilan" }] },

    // ------------------------------------------------------------ the cabinet des Sabliers
    A1v_cabinet: { act: "I", title: "Le cabinet des Sabliers", place: "heures",
      fx: { until: 17 },
      text: [
        "À cinq heures, il se passe une chose que la salle affecte de ne pas voir. Le Syndic quitte sa cheminée. Le Doyen se lève de son fauteuil. Le Connétable jette les dés une dernière fois et les laisse sur le marbre. Ils ne se regardent pas. Ils sortent par trois portes différentes.",
        "Tu as l'œil de la maison. Les trois portes donnent sur le même couloir, et au bout du couloir il n'y en a plus qu'une : une petite pièce d'angle, où la guilde garde sa collection de sabliers. Le grand valet à cocarde cramoisie s'y adosse, les bras croisés.",
        "Trois hommes qui ne partagent pas une salière viennent de s'enfermer ensemble.",
      ],
      choices: [
        { label: "Passer par la galerie des musiciens, qui longe le cabinet par le haut", test: { dom: "discretion", diff: -5, label: "Discrétion", help: [{ if: { has: "a1:v_laquais" }, v: 20 }, { if: { has: "a1:v_remarque" }, v: -10 }] }, win: { fx: { clue: "s_trois", ep: ["seance", 2000] }, to: "A1v_cabinet_ok" }, lose: { fx: { flag: "a1:v_remarque", pv: -1 }, to: "A1v_cabinet_ko" } },
        { label: "Porter un plateau de rafraîchissements jusqu'à la porte, et t'y attarder", if: { has: "a1:v_laquais" }, test: { dom: "social", diff: 0, label: "Social" }, win: { fx: { clue: "s_trois", ep: ["seance", 2000] }, to: "A1v_cabinet_ok" }, lose: { fx: { flag: "a1:v_remarque" }, to: "A1v_cabinet_ko" }, hide: { not: { has: "a1:v_laquais" } } },
        { label: "N'y pas aller : un valet de cette taille ne garde pas une porte pour rien", back: "A1v_salon" },
      ] },
    A1v_cabinet_ok: { act: "I", title: "Trois voix", place: "heures",
      text: [
        "Tu es contre une cloison de sapin, dans le noir, et de l'autre côté il y a trois voix que tu connais maintenant. Elles parlent bas, comme des gens qui se haïssent et qui sont pressés.",
        "« Le graveur a fini. » C'est le Syndic. « La pièce est à la Tour depuis mardi. Il ne reste qu'à la poser. »",
        "« Et votre vieil homme ? » La voix douce.",
        "« Il fait des difficultés. Il a lu ce qu'il ne devait pas lire. »",
        "« On m'avait dit qu'il ne savait que graisser. » Un rire bref, celui du comte. « Vous comptez mal, Quincarnon, pour un homme qui compte. »",
        "« Il posera, ou l'on posera sans lui. J'ai quelqu'un. » Un silence. « C'est réglé ce soir. »",
        "« Je ne veux pas savoir comment. » La voix douce. « Je veux seulement que la chose soit faite avant la Nuit, et que l'on mure le tour ensuite. Proprement. Mes maçons d'Ossevaux savent murer. »",
        "« Et qui dira quoi, sur votre cylindre ? Nous n'avons pas fini d'en débattre. » Le comte. « Gouverneur à vie, c'est très bien. Encore faut-il le nom. »",
        "« Le nom est gravé », dit le Syndic.",
        "Le silence qui suit dure longtemps. Puis une chaise recule, violemment, et la voix du comte, plus basse encore : « Nous en reparlerons à la Nuit des Clefs. Vous avez votre clef. J'ai la mienne. »",
        "Tu te retires à reculons, sur la pointe des pieds, avant que les trois portes se rouvrent.",
      ],
      choices: [{ back: "A1v_salon" }] },
    A1v_cabinet_ko: { act: "I", title: "Une cocarde cramoisie", place: "heures",
      text: [
        "Tu n'entends rien. Tu entends ton cœur, une cloison qui craque, et un pas derrière toi.",
        "Le grand valet à cocarde n'a pas quitté sa porte : il en a un second, plus petit, que tu n'avais pas vu, et qui avait pour consigne de regarder les gens qui regardent. Celui-là te prend par le coude avec une politesse d'écurie.",
        "« Monsieur le comte n'aime pas qu'on se promène par ici. » Il te ramène à la salle, sans hausser le ton, en te serrant le bras juste assez pour laisser une marque. « On vous a vu{e}. Si on vous revoit, ce sera dans la cour, et sans témoins. »",
      ],
      choices: [{ back: "A1v_salon" }] },

    // ------------------------------------------------------------ leaving
    A1v_bilan: { act: "I", title: "Sur le perron", place: "heures", branch: [
      { if: TROIS, to: "A1v_bilan_ok" }, { to: "A1v_bilan_ko" }] },
    A1v_bilan_ok: { act: "I", title: "Trois routes", place: "heures",
      text: [
        "Dehors, il fait un jour doré, et les quarante cadrans de la place se disputent toujours. Tu descends le perron en respirant, comme on sort d'une eau.",
        "Tu as les trois. Tu te les répètes, dans l'ordre, pour ne rien laisser aux marches. Le Fer : le coche du Nord, ce soir à huit heures, la Croix-de-Fer, les Trois-Enclumes, Ferrières ; la clef sur la poitrine du Syndic, puis au coffre de la fonderie. La Cendre : la litière, à l'aube, la route des Cyprès, Sainte-Larme, Ossevaux ; la clef sur le cœur du Doyen, puis dans une main qui ne se ferme plus. Le Sang : douze chevaux, à la nuit, la route de la Sylve, Brandelis ; la clef au cou du comte, au bout d'un ruban cramoisi.",
        "Trois hommes, trois routes, trois cachettes. La Douairière demandait cela ce matin, sur une table, avec un morceau de charbon.",
      ],
      fx: { flag: "monde:a1:itineraires", ep: ["seance", 2500] },
      choices: [{ label: "Rendre l'habit au père Balthazar, et laisser tomber le soir", to: "A1v_soir" }] },
    A1v_bilan_ko: { act: "I", title: "Des morceaux de routes", place: "heures",
      text: [
        "Dehors, il fait un jour doré, et les quarante cadrans de la place se disputent toujours. Tu descends le perron en respirant, comme on sort d'une eau.",
        "Tu fais le compte de ce que tu rapportes. C'est un filet où il y a des trous.",
        { if: { has: "a1:v_fer" }, text: "Le Fer, tu l'as : le coche du Nord, ce soir, la Croix-de-Fer, les Trois-Enclumes, Ferrières, et le coffre de la fonderie.", else: "Du Syndic, tu sais qu'il part ce soir pour Ferrières, où l'on coule une cloche." },
        { if: { has: "a1:v_cendre" }, text: "La Cendre, tu l'as : la litière, à l'aube, la route des Cyprès, Sainte-Larme, Ossevaux, et cette main qui ne se ferme plus.", else: "Du Doyen, tu sais qu'il rentre à Ossevaux pour la fête des Trépassés." },
        { if: { has: "a1:v_sang" }, text: "Le Sang, tu l'as : douze chevaux, à la nuit, la route de la Sylve, Brandelis, et un ruban cramoisi sous une chemise.", else: "Du Connétable, tu sais qu'il rentre à Brandelis ouvrir ses chasses." },
        "Ferrières, Ossevaux, Brandelis. Trois noms. Pour le détail des chemins, il faudra le prendre sur place, à mesure, comme on apprend une maison en la cambriolant.",
      ],
      fx: { ep: ["seance", 1200] },
      choices: [{ label: "Rendre l'habit au père Balthazar, et laisser tomber le soir", to: "A1v_soir" }] },
    A1v_soir: { act: "I", title: "Entre chien et loup", place: "ferronniers",
      fx: { until: 20 },
      text: [
        "Le père Balthazar reprend son habit, le retourne, cherche le trou, et te le rend des yeux, déçu de n'avoir rien à retenir sur la caution. Tu redeviens toi dans son arrière-boutique, entre une cuirasse et une robe de noces.",
        "Tu manges un morceau, debout, à un étal. La ville haute allume ses lanternes. À huit heures, de la rue des Ferronniers, tu vois passer le coche du Nord, six chevaux, deux lanternes, deux gardes sur le siège ; derrière la vitre, une seconde, un velours prune, et le profil d'une jeune fille qui regarde de l'autre côté.",
        { if: { seen: "A1v_cabinet_ok" }, text: "*C'est réglé ce soir.* La phrase ne t'a pas quitté{e}. Tu ne sais pas ce qu'elle règle. Tu sais seulement que l'homme qui l'a dite vient de passer dans une voiture, bien en vue, devant toute une rue." },
        "Le rendez-vous est à neuf heures, au pied du rempart.",
      ],
      choices: [{ label: "Monter à l'impasse des Poids", to: "A1c_rdv", big: true }] },
  },

  extras: {
    people: {
      celeste: { name: "Céleste Quincarnon", aka: ["Céleste", "Mademoiselle Quincarnon"], qui: "La fille du Syndic.", f: true,
        aspect: { allure: "dix-neuf ans, raide d'ennui dans sa soie", visage: "brune, bouche moqueuse, yeux qui jugent", habits: "robe qui vaut une maison", signe: "compte tout haut les sottises qu'on lui dit", voix: "nette, un peu rauque" },
        desc: "Elle a été élevée pour être donnée, et elle le sait." },
    },
    clues: {
      s_doyen: { rev: "S", text: "Le Doyen des Morts, à propos du Juge : « Il a beaucoup parlé. Les vieillards parlent trop. C'est une charité que de les aider à se taire. »" },
      g_ordre: { rev: "G", text: "Le comte de Brandelis ne paie rien en pièces : il règle ses dettes de jeu en petits billets signés d'un grand B, que suit des yeux son valet à cocarde cramoisie." },
      s_petit: { rev: "S", text: "Devant le petit automate de Crochemore, le Syndic a demandé si un cylindre à picots pourrait « en dire plus long ». Autant qu'on veut, mais « toujours les mêmes » paroles." },
      s_celeste: { rev: "S", text: "Céleste Quincarnon : depuis un mois, son père ne parle que d'une commande fondue à Ferrières pour la Tour, « un présent pour le Juge », et il en rit tout seul." },
      r_mot: { rev: "R", text: "Le prévôt Corbineau : l'avant-veille, le Remonteur lui avait fait tenir un mot pour lui demander « une heure, seul à seul ». Le prévôt n'a pas eu le temps." },
      s_trois: { rev: "S", text: "Au cabinet des Sabliers, les trois Clavaires ensemble : la pièce gravée est à la Tour, le vieil homme « posera, ou l'on posera sans lui », on murera le tour ensuite. Le cylindre nomme un Gouverneur à vie ; le nom est déjà gravé." },
    },
  },
};
