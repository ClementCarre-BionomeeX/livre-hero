// Les Trois Clefs d'Aiguemorne · act IV, the common opening: Brandelis on the evening of the 5th of November.
// The steward who weeps, the court of honour, the tower of the clock where the four are lodged, the stopped clock and
// its bronze Huntsman, a moment alone, and the council (posts `a4`).
// Personal marks: a4:mathurin (the valet's hours), a4:galerie_vue (the dowager's portrait), a4:cale_vue (what stops
// the clock), a4:lanterne_vue (a lantern at the postern). Nothing here is shared.
module.exports = {
  passages: {
    A4c_arrivee: { act: "IV", title: "Encore quatre bouches", place: "brandelis", ambiance: "chateau",
      fx: { until: 19 },
      text: [
        "La chaussée de l'étang a trois cents pas, sans parapet, et l'eau des deux côtés est noire comme une ardoise. Au bout, un pont dormant, une herse levée depuis si longtemps que le lierre la tient, et une voûte où brûlent deux torches.",
        "Sous la voûte, il y a un homme en habit gris, un registre ouvert sur le bras gauche, une plume à la main droite, et un mouchoir grand comme une serviette passé dans sa boutonnière. Il vous regarde venir. À mesure que vous approchez, on voit ses yeux se remplir.",
        "« Quatre », dit-il. Sa voix se mouille sur le chiffre. « Monsieur le comte m'a fait dire *un horloger*. Il a oublié de me faire dire *et ses gens*. Quatre lits, quatre chandelles, quatre couverts à l'office deux fois le jour, et l'avoine, s'il y avait des bêtes. Vous n'avez pas de bêtes ? » Vous n'en avez pas. Il s'essuie un œil. « Dieu vous le rende. »",
        "C'est Maître Onésime Ravaudet, intendant de Brandelis depuis vingt-deux ans. Il écrit vos quatre noms d'emprunt dans une colonne, et, dans la colonne d'à côté, ce que vous allez coûter ; il fait le total de la page ; et deux larmes, bien rondes, descendent le long de son nez et tombent sur le total, qu'il sèche au buvard par habitude.",
        "« Il y a cent quarante personnes dans cette maison depuis la Saint-Hubert. Il y a soixante-deux chiens, qui mangent mieux qu'elles. Et il me dit ce matin, en riant, que M. le Syndic est arrivé avec un portefeuille. » Il referme le registre. « Suivez-moi. Je vous mets dans la tour : c'est la seule chambre du château qui ne me coûte rien, personne n'en veut. »",
      ],
      choices: [{ label: "Le suivre sous la voûte", to: "A4c_cour", big: true }] },

    // ───────────────────────────── The court ─────────────────────────────
    A4c_cour: { act: "IV", title: "La cour d'honneur", place: "brandelis", ambiance: "chateau", hub: true, backName: "la cour d'honneur",
      text: [
        { first: true, text: "La cour d'honneur de Brandelis est un puits de pierre rouge. Sept tours la ferment, que relient des corps de logis de tous les âges, et chaque comte y a laissé quelque chose : l'un un perron, l'autre une galerie, un troisième un cadran solaire que les murs d'en face tiennent à l'ombre depuis deux cents ans. Tout y est grand, noble, et fendu. Une gargouille pend par son fer au-dessus de la porte des cuisines ; on a mis un baquet dessous." },
        { first: true, text: "Ce soir, la cour est pleine. Des palefreniers promènent des chevaux en sueur. Des laquais portent des bassinoires. Par les fenêtres de la grande salle, au premier étage, tombe la lumière de deux cents bougies, avec un bruit de couverts et de rires ; et de l'autre côté de l'eau, les chenils répondent, par bouffées." },
        { first: true, text: "Au fond, la tour carrée monte plus haut que toutes les autres. De la cour, on voit le cadran par-dessous, énorme, bleu, arrêté. Personne ici ne lève plus les yeux vers lui : on ne regarde pas l'heure à une horloge qui dit la même depuis onze ans." },
        { again: true, text: "La cour d'honneur, son puits de pierre rouge, ses chevaux que l'on promène. Les fenêtres de la grande salle sont allumées. Au fond, le cadran bleu marque trois heures dix." },
      ],
      choices: [
        { label: "Faire causer l'intendant, qui s'est assis sur une borne", to: "A4c_intendant", once: true },
        { label: "Monter à la tribune des musiciens, d'où l'on voit souper", to: "A4c_salle", once: true },
        { label: "Longer la galerie des Trophées", to: "A4c_galerie", once: true },
        { label: "Aller au bord de l'eau, en face des chenils", to: "A4c_chenil_vue", once: true },
        { label: "Passer devant les remises", to: "A4c_remises", once: true },
        { label: "Offrir du feu au valet qui fume sur le perron", to: "A4c_mathurin", once: true },
        { label: "T'arrêter à l'éventaire du marchand de plumes", to: "A4c_plumes" },
        { label: "Monter à la tour de l'Horloge", to: "A4c_tour", big: true },
      ] },

    A4c_intendant: { act: "IV", title: "Maître Ravaudet", place: "brandelis", ambiance: "chateau",
      text: [
        "Il s'est assis sur une borne, son registre sur les genoux, et il regarde passer un quartier de chevreuil sur les épaules d'un marmiton, avec les yeux d'un homme qui voit passer son propre convoi.",
        "« Je ne pleure pas par caractère », dit-il, sans que tu aies rien demandé. « Mon père était intendant de feu Madame, et il avait l'œil sec. De son temps, Brandelis avait trois fermes, deux moulins, les bois jusqu'à la Rousse. On chassait huit jours l'an ; on jouait aux échecs. »",
        "Il compte sur ses doigts, ce qui va vite.",
        "« Les moulins sont partis en une nuit, il y a neuf ans, contre un baron qui avait un quatorze. Les fermes en trois hivers. Les bois sont à M. Quincarnon depuis la Chandeleur, sur le papier ; il nous les laisse pour les Chasses, par bonté, comme on laisse sa montre à un homme qu'on va faire saisir. Il nous reste le château, les chiens, et la signature de Monsieur. C'est avec la signature que je paie. »",
        "Il te montre une page. Elle est couverte de petits B, recopiés de sa main, un par billet, avec le nom de qui l'a reçu : le boucher, le sellier, un lieutenant, une charbonnière, le curé pour ses messes.",
        "« Il signe sans lire. Il signe à cheval. Il a signé un soir sur le dos d'un chien. Et le plus beau, c'est qu'ils les prennent : parce qu'il leur tape sur l'épaule, parce qu'il sait le nom de leurs enfants, parce qu'il a rapporté lui-même un piqueur blessé sur trois lieues. On ne refuse rien à cet homme-là. C'est ce qui nous tue. »",
        { if: { item: "bons_brandelis" }, text: "Tu as dans ta chemise une liasse de ces B. Tu la sens contre ta peau, pendant qu'il parle, comme une lettre dont on connaît l'auteur." },
        "Il se mouche, longuement.",
        "« M. le Syndic loge à la chambre du Sanglier, avec son gendre dans le cabinet. Monseigneur d'Ossevaux arrive demain pour bénir la meute : je lui donne la chambre des Évêques, il lui faut douze lits pour ses hallebardes. Et le 10, il y a bal. *Masqué.* » Sa voix se brise. « Savez-vous ce que coûtent trois cents bougies de cire, à la livre ? »",
      ],
      choices: [{ back: "A4c_cour" }] },

    A4c_salle: { act: "IV", title: "La grande salle", place: "brandelis", ambiance: "chateau",
      text: [
        "Un escalier de service mène à la tribune des musiciens : un balcon de bois, à hauteur de lustre, où quatre violons et une basse attendent le dessert en mangeant des noix. De là, tu vois toute la table.",
        "Elle a soixante couverts, et elle est dressée en fer à cheval sous une forêt de bois de cerf dont chacun porte sa bougie. On y a soupé comme on chasse, à grand bruit ; les valets desservent des carcasses. Tu reconnais la dame en amazone qui riait au bord de la mare, un abbé rouge jusqu'aux oreilles qui raconte la chasse avec ses deux mains, vingt gentilshommes en habit cramoisi.",
        "À droite du maître, une place d'honneur, et dedans un homme rond en velours prune, qui a mangé de tout et qui additionne en mâchant. Maître Quincarnon regarde les plats, la vaisselle, les lustres, de l'œil attentif et bienveillant d'un homme qui fait un inventaire. Près de lui, un jeune homme blond s'ennuie avec politesse.",
        "Au sommet du fer à cheval, le comte. Il est dans un fauteuil à bras, le pourpoint ouvert, un pied sur un tabouret, un lévrier gris sous la main. Il a au cou un ruban cramoisi, large de deux doigts, noué derrière, que l'on prendrait pour une coquetterie de vieux beau. Il boit comme il fait tout, à pleine gorgée, en regardant quelqu'un.",
        "On apporte les fruits. Il repousse son assiette, et tire de sa poche trois dés, qu'il fait sauter dans sa main.",
        "« Messieurs ! La chasse est finie, la soirée commence. Qui me doit sa revanche ? »",
        "Vingt chaises reculent. Maître Quincarnon, lui, reste assis. Il croise ses mains sur son ventre, et il sourit à la nappe.",
        "« Vous jouerez, monsieur le Syndic ? » lance le comte, par-dessus la table.",
        "« Jamais, monsieur le comte. Je regarde jouer. C'est moins cher, et à la fin c'est moi qui gagne. »",
        "Toute la table rit. Le comte rit plus fort que les autres ; et sa main, pendant qu'il rit, est montée d'elle-même à son ruban.",
      ],
      choices: [{ back: "A4c_cour" }] },

    A4c_galerie: { act: "IV", title: "La galerie des Trophées", place: "brandelis", ambiance: "chateau",
      fx: { flag: "a4:galerie_vue" },
      text: [
        "La galerie court le long du premier étage, sur cent pas, éclairée d'une lanterne à chaque bout. Entre les deux, on marche sous les morts.",
        "Il y en a trois cents. Chaque cerf servi par un Brandelis depuis l'an de la première pierre a ici son massacre, cloué sur un écusson de chêne, avec une plaque : le jour, le carrefour, le nom des chiens de tête. Les plus vieux ont perdu leur couleur et pris celle du mur. Les orbites te regardent passer, des deux côtés, à hauteur de plafond ; et le plancher, dessous, craque d'un bout à l'autre comme si l'on y marchait derrière toi.",
        "Entre les bois, les portraits. Ce sont tous le même homme, à des âges et sous des perruques différentes : la barbe en pointe, l'œil brun, la main sur une dague. Le peintre a mis chaque fois, au coin de la toile, une tour d'or.",
        "Il y a une femme. Elle est au milieu de la galerie, seule de son espèce, dans un cadre noir. Elle est en grand deuil, assise de face, les mains à plat sur les genoux, avec un visage long, sans beauté, d'une fermeté terrible. Le peintre lui a donné des yeux qui écoutent.",
        "*Hermengarde, comtesse douairière de Brandelis, régente de la Clef pendant la minorité de son fils.*",
        "À sa ceinture pend un trousseau de châtelaine ; et parmi les clefs de cave et de lingerie, peinte de la même touche que les autres, il y en a une rouge sombre, courte, dont l'anneau est un cœur.",
        "Sous le cadre, quelqu'un a posé un bouquet de bruyère. Il est frais de ce matin.",
      ],
      choices: [{ back: "A4c_cour" }] },

    A4c_chenil_vue: { act: "IV", title: "La soupe des chiens", place: "brandelis", ambiance: "eau",
      text: [
        "Une passerelle de planches traverse le bout de l'étang. De l'autre côté, il y a une ville de bois : les chenils du Connétable, bâtis en carré autour d'une cour sablée, avec un toit d'ardoise, une fontaine, une infirmerie, et un four à pain qui ne cuit que pour eux.",
        "On donne la soupe. Soixante chiens blancs et fauves, hauts comme des veaux, sont rangés derrière une barrière, debout, tremblants, la bave aux babines, et pas un ne bouge : un petit vieux à jambes torses, en habit cramoisi déteint, se tient devant l'auge avec un fouet qu'il ne lève pas. Il les regarde. Il les nomme, un par un, à mi-voix. Puis il dit : « Allez. » Le bruit que cela fait te recule d'un pas.",
        "« C'est La Brisée », dit un garçon de chenil, qui lave une écuelle à côté de toi. « Premier piqueur. Il a fait les chiens du père, il fait ceux du fils. Il te dit l'âge d'un cerf sur une fumée, et l'humeur de Monsieur sur son coup de trompe. »",
        "Le petit vieux a tourné la tête. Il t'a vu{e}, de l'autre bord de la passerelle, et il t'a jaugé{e} du même œil que sa meute.",
        "« On manque de valets de limier ! » crie-t-il, sans s'adresser à personne. « J'en ai deux au lit avec la fièvre des bois, et le Dix-Cors à détourner dans trois jours. S'il y a là-dedans quelqu'un qui sache tenir une bête au trait sans parler, qu'il vienne me voir avant le jour. Je ne paie pas. Je nourris. »",
        "Il te tourne le dos. Les chiens mangent.",
      ],
      choices: [{ back: "A4c_cour" }] },

    A4c_remises: { act: "IV", title: "Sous les remises", place: "brandelis", ambiance: "chateau",
      text: [
        "Les remises occupent tout un côté de la cour : douze arches, où l'on a rangé à la file ce qui a roulé jusqu'ici. Une chaise de poste. Deux carrosses armoriés. Un fourgon de comédiens, peint de masques, avec ses malles encore cordées : on les a fait venir pour le bal.",
        "La berline prune est sous la troisième arche. On l'a lavée ; ses six chevaux mangent à côté. Un laquais du Syndic dort sur le siège, les bras croisés, un pistolet d'arçon en travers des genoux. Il a l'air d'un homme à qui l'on a dit sur quoi il dort.",
        { if: { has: "monde:a4:syndic_vu" }, text: "Tu passes au large. Celui qui t'a tendu dix sous au gué est assis sur le marchepied, et il regarde les mains de tout ce qui approche." },
        "Un jeune homme blond fait les cent pas sous les arches, les mains derrière le dos, en souliers de bal sur le pavé gras. Il s'arrête devant chaque voiture et lit les armes. Maître Hyacinthe Belorgey a soupé, il a refusé de jouer, et on l'a dispensé du reste. Il parle seul, à mi-voix, comme on répète.",
        "« … *Messieurs de la cité, le Bronze a parlé. Je reçois de lui, avec une humilité profonde…* Profonde. Sincère ? Profonde. »",
        "Il aperçoit quelqu'un et se tait. Il a rougi jusqu'aux oreilles, en homme honnête que l'on surprend à essayer un habit qu'on ne lui a pas encore livré.",
      ],
      choices: [{ back: "A4c_cour" }] },

    A4c_mathurin: { act: "IV", title: "Trente ans de service", place: "brandelis", ambiance: "chateau",
      fx: { flag: "a4:mathurin" },
      text: [
        "Il a soixante ans, une livrée cramoisie reprise aux coudes, et la dignité d'un chambellan. Il fume une pipe de terre, sur le perron, à l'heure où son maître joue : c'est son heure.",
        "« Mathurin. Valet de chambre de Monsieur. Je l'ai habillé pour sa première chasse ; je l'habillerai pour la dernière, s'il me laisse le temps de passer devant. » Il tire sur sa pipe. « On me doit onze ans de gages. Je ne les réclame pas : il me les jouerait, et il les perdrait. »",
        "Tu le laisses dire. Un valet de trente ans parle de son maître comme un marin de la mer.",
        "« Monsieur se lève à cinq heures. Il chasse. Il rentre à la nuit, crotté comme vous, et il lui faut son bain avant toute chose : une cuve de cuivre, devant le feu, dans le cabinet de la tour du Midi ; huit seaux, que je monte. Il y reste une demi-heure. Il soupe. Il joue jusqu'à deux heures, trois heures. Il se couche avec ses deux lévriers sur les pieds, Fanfare et Rapide, qui entendent une puce changer de place. »",
        "« Et son ruban ? »",
        "Il te regarde. Il met un moment à décider que la question vient d'un sot.",
        "« Monsieur ne l'ôte pas. Ni au bain, ni au lit. Je le lui change le dimanche, devant lui, sans toucher à ce qu'il y a dessous. » Il vide sa pipe contre la pierre. « Un homme a bien le droit de garder quelque chose sur lui, quand il a perdu tout le reste sur des tables. »",
      ],
      choices: [{ back: "A4c_cour" }] },

    A4c_plumes: { act: "IV", title: "Le marchand de plumes", place: "brandelis", ambiance: "chateau", shop: "plumassier",
      text: [
        { first: true, text: "Il a fait la route avec la noblesse, son éventaire sur le ventre, et il a ouvert boutique sous une arche, entre deux flambeaux. Un marchand de plumes vend de tout, aux Chasses : la plume d'abord, de héron, de coq, de faisan, pour les chapeaux ; puis ce qui se perd dans les bois et ce qui se casse dans les bals." },
        { first: true, text: "« Et des loups ! » Il en lève une grappe, de velours noir, avec leurs cordons. « Le 10, tout le monde en voudra, et je n'en aurai plus. Un masque acheté la veille du bal, c'est un masque qu'on a vu choisir. »" },
        { again: true, text: "L'éventaire du marchand de plumes, entre ses deux flambeaux : des aigrettes, des gants, des masques de velours qui pendent par leurs cordons." },
      ],
      choices: [{ back: "A4c_cour" }] },

    // ───────────────────────────── The tower ─────────────────────────────
    A4c_tour: { act: "IV", title: "La chambre de l'Horloge", place: "tour_horloge", ambiance: "chateau", hub: true, backName: "la chambre de l'Horloge",
      text: [
        { first: true, text: "On y monte par une vis de cent douze marches, dont Maître Ravaudet vous a remis la clef en détournant la tête. La porte du haut a résisté. Il a fallu trois épaules." },
        { first: true, text: "C'est une salle carrée, haute, sans plafond : on voit, au-dessus de soi, monter dans le noir une charpente de chêne, et dans cette charpente quelque chose d'énorme et d'immobile, des roues plus grandes que des roues de chariot, des barres, des tambours, un balancier long comme un homme qui pend tout droit, la lentille à hauteur de ta tête. Trois poids de pierre, gros comme des bornes, sont arrêtés à mi-course au bout de leurs cordes, au-dessus de trois trous ronds percés dans le plancher." },
        { first: true, text: "Tout cela est gris. Onze ans de poussière ont fait à cette machine un pelage ; des toiles d'araignée vont d'une dent à l'autre, épaisses comme du linge ; une chouette a niché dans le grand tambour, et ce qu'elle a laissé craque sous le pied. L'air sent l'huile morte et le froid. On entend, à travers la muraille, le vent qui passe sur le cadran avec un bruit de main sur une table." },
        { first: true, text: "L'intendant a fait monter quatre paillasses, une cruche, un brasero. Du côté de la cour, une porte basse donne sur la niche : on y voit de dos, à contre-nuit, un homme de bronze qui tient une trompe." },
        { again: true, text: "La chambre de l'Horloge : les grandes roues grises dans la charpente, le balancier qui pend tout droit, les trois poids arrêtés au-dessus de leurs trous. Le brasero rougit. Le vent passe sur le cadran." },
      ],
      choices: [
        { label: "Regarder Maître Crochemore entrer dans la machine", to: "A4c_croch_horloge", once: true },
        { label: "Le suivre dans la niche du Veneur", to: "A4c_veneur", once: true, if: { seen: "A4c_croch_horloge" }, hide: { not: { seen: "A4c_croch_horloge" } } },
        { label: "Te pencher sur les trois trous du plancher", to: "A4c_puits", once: true },
        { label: "Regarder la nuit par la meurtrière", to: "A4c_meurtriere", once: true },
        { label: "T'asseoir un moment à l'écart, contre le grand tambour", to: "A4c_reve", once: true },
        { back: "A4c_cour" },
        { label: "Tenir conseil autour du brasero", to: "A4c_conseil", big: true, if: { seen: "A4c_croch_horloge" }, why: "Maître Crochemore est dans la machine jusqu'aux épaules. Il faut d'abord qu'il en sorte, et qu'il parle." },
      ] },

    A4c_croch_horloge: { act: "IV", title: "Une montre de trente pieds", place: "tour_horloge", ambiance: "chateau",
      fx: { flag: "a4:cale_vue" },
      text: [
        "Il a ôté son habit, ce que vous ne l'aviez vu faire qu'à une forge. Il a pris la lanterne. Il est monté dans la charpente par l'échelle de meunier, et pendant une demi-heure vous n'avez plus eu de lui qu'une lueur qui se promenait entre des roues, des éternuements, et de loin en loin un mot, dit à la machine et non à vous : « Bien. » « Tiens. » « Ah, celui-là, je le reconnais. »",
        "Il redescend gris jusqu'aux favoris. Il a aux lèvres quelque chose que tu ne lui connaissais pas, et qui est, il faut bien le dire, un sourire.",
        "« Elle est superbe. Vous ne pouvez pas le savoir, vous êtes des gens de serrure. C'est une montre de trente pieds de haut. Il a taillé cela à quatre-vingts ans, d'une main qui tremblait, et il n'y a pas une dent qui ait un cheveu de jeu. » Il essuie ses bésicles. « Trois horlogers sont montés ici, à ce qu'il nous a dit. Ils ont cherché ce qui était cassé. Ce sont des ânes. Rien n'est cassé. »",
        "Il ouvre la main. Dedans, il y a un petit livre, pas plus grand qu'une paume, relié de maroquin noir, dont la tranche porte l'empreinte nette de deux dents de laiton.",
        "« Un livre d'heures. Je l'ai trouvé dans la roue d'échappement, entre la roue et l'ancre, enfoncé à la main. Je l'ai ôté pour le voir ; je l'ai remis où il était. » Sa voix a baissé. « Cette horloge ne s'est pas arrêtée la nuit où la vieille dame est morte. On l'a arrêtée. Quelqu'un a monté cent douze marches, à trois heures dix, avec ce livre, et savait où il fallait le mettre. »",
        "Il se rhabille. Il boutonne son gilet de travers et le reboutonne.",
        "« Je la ferai sonner pour le bal, puisque je l'ai dit. Il suffit d'ôter le livre et de graisser : c'est l'affaire d'une matinée, et j'y mettrai cinq jours, avec des airs. Cinq jours pendant lesquels nous sommes des gens de la maison. » Il lève un doigt. « Maintenant, écoutez-moi. Les deux autres avaient mis leur clef dans une cave et dans la main d'un mort. Celui-ci l'a sur la peau. C'est le plus sot des trois, et c'est lui qui a trouvé la meilleure cachette : on ne crochète pas un homme. »",
      ],
      choices: [{ label: "« Alors comment la lui prend-on ? »", to: "A4c_croch_plan", big: true }] },
    A4c_croch_plan: { act: "IV", title: "Un homme n'est pas une cave", place: "tour_horloge", ambiance: "chateau",
      text: [
        "« Je n'en sais rien. » Il le dit avec humeur : c'est une phrase dont il n'a pas l'usage. « Je sais deux choses, qui sont de mon métier. »",
        "« *Primo.* Sans-Bruit nous l'a dit, ou la rumeur : la chaîne est soudée. Un anneau qu'on a fermé au feu sur son cou, il y a des années, et qu'on a limé ensuite pour qu'il n'y paraisse plus. Cela ne s'ouvre pas : cela se scie. Je peux vous faire une scie avec un ressort de montre, qui passe dans un maillon et qui mord sans crier. Encore me faut-il savoir ce que c'est que cet acier : il y a chaîne et chaîne. »",
        "« *Secundo.* Je vous ai fait une clef pour un évêque. Je peux vous en faire une pour un comte. Il me faut la même chose qu'à Ossevaux : la clef vue de près, cotée, par quelqu'un qui sait regarder. Je ne suis pas inquiet de l'anneau : il est en cœur, mon aïeul l'a écrit. C'est le panneton que je veux. »",
        "Il s'assied sur une paillasse, et il a tout à coup son âge.",
        "« Le reste est à vous. Un homme, cela dort, cela se baigne, cela chasse, cela joue. Celui-ci fait les quatre, et avec excès. Il doit bien y avoir une de ces heures où il ne tient pas sa main sur son ruban. »",
        { if: { has: "monde:douce:marche" }, text: "Il tire de son sac trois cartons glacés, à tranche dorée, qu'il pose sur le brasero éteint comme on abat un jeu. *Le comte de Brandelis prie… de lui faire l'honneur d'assister au bal masqué qu'il donnera en son château, la veille de la Saint-Martin.* Les noms sont en blanc. « C'est ce que la dame du cercueil nous a payé pour sa vie. Elle les avait volés à qui les avait volés. Je les garde pour le 10, si nous allons jusqu'au 10. »" },
        { if: { has: "monde:cendre:sait" }, text: "« Encore un mot. L'évêque sait ce que nous lui avons pris. Il arrive demain. Vous aurez deux hommes sur trois, sous ce toit, qui savent à quoi vous ressemblez ; vous n'en avez qu'un à voler. Tâchez de ne pas vous tromper de porte. »" },
      ],
      choices: [{ back: "A4c_tour" }] },

    A4c_veneur: { act: "IV", title: "Le Veneur de bronze", place: "tour_horloge", ambiance: "nuit",
      text: [
        "La niche est un balcon sans garde-fou, à cent pieds au-dessus de la cour. Le vent y tient debout. Le Veneur occupe le milieu, plus grand que nature, vert-de-grisé dans les plis, un genou en avant, la tête rejetée, la trompe aux lèvres : on a envie de se taire pour le laisser sonner.",
        "De face, d'en bas, c'est un homme. De dos, où vous êtes, c'est un meuble. Maître Crochemore a trouvé tout de suite les quatre vis, sous le pan de l'habit de bronze. Il ôte une plaque grande comme un volet, la pose contre le mur, et lève sa lanterne.",
        "Dans le Veneur, il y a un soufflet de forge, en cuir craquelé. Il y a sept tuyaux de cuivre, de sept longueurs, qui montent se réunir dans le bras et dans la trompe. Et il y a, couché en travers du ventre, un cylindre de buis gros comme une bûche, hérissé de petites pointes de laiton, par milliers, plantées en lignes qui tournent.",
        "« Une serinette », dit Maître Crochemore.",
        "Tu attends la suite. Il a coutume d'en donner.",
        "« C'est une serinette. Le poids descend, le cylindre tourne, les pointes lèvent des soupapes, le soufflet donne. Il sonne le lancer à six heures, la vue à midi, l'hallali à la nuit. Trois fanfares. Il les sonne depuis soixante ans exactement de la même façon, sans une faute, et il les sonnerait devant un cerf, devant un enterrement, devant le Jugement dernier. Il n'a pas à savoir ce qui se passe. Tout ce qu'il dira jamais est planté là-dedans, pointe par pointe, depuis le premier jour. »",
        "Il passe le doigt sur le cylindre. Les pointes y font un petit bruit de peigne.",
        "« C'est du très beau travail. »",
        "Il a dit cela d'une voix blanche. Il reste devant ce ventre ouvert, sa lanterne à la main, dans le vent, plus longtemps qu'il n'en faut pour admirer une serinette ; puis il remet la plaque, ses quatre vis, et il rentre sans vous regarder.",
      ],
      choices: [{ back: "A4c_tour" }] },

    A4c_puits: { act: "IV", title: "Trois trous dans un plancher", place: "tour_horloge", ambiance: "chateau",
      text: [
        "Les poids d'une horloge de cette taille ont besoin de descendre loin. On leur a percé trois puits dans l'épaisseur de la tour, côte à côte, larges comme des margelles, qui traversent les étages jusqu'aux fondations. Les cordes y pendent, raides, depuis onze ans.",
        "Tu t'allonges au bord du premier. Il en monte un air de cave, et rien d'autre.",
        "Du deuxième, il monte de la lumière. Très bas, à quarante pieds peut-être, le puits passe derrière une cloison de planches mal jointes, et une lueur de feu en raie les fentes. On entend de l'eau qu'on verse, un seau qu'on repose ; puis une voix sonore, étouffée par le bois, qui chante faux une fanfare de chasse.",
        "Du troisième, il monte une odeur de buis.",
        "Tu te relèves. Tu regardes la tour comme elle est faite : carrée, plantée à l'angle où le logis du Midi rejoint l'aile des hôtes. Les trois puits de l'horloge descendent dans le noir derrière les chambres de ceux qui dorment là. Un vieil homme de quatre-vingts ans, en les perçant, ne s'est sûrement pas demandé qui coucherait de l'autre côté de la planche.",
      ],
      choices: [{ back: "A4c_tour" }] },

    A4c_meurtriere: { act: "IV", title: "Ce qu'on voit de cent pieds", place: "tour_horloge", ambiance: "nuit",
      fx: { flag: "a4:lanterne_vue" },
      text: [
        "La meurtrière regarde l'ouest. Tu y passes la tête et une épaule.",
        "Dessous, les toits du château, bleus de lune, avec leurs sept poivrières. Plus bas, l'étang, tout en longueur, qui s'en va entre deux rives de roseaux jusque sous les arbres : on en voit luire le bout, très loin, dans la Sylve, comme une lame qu'on aurait oubliée. Autour, la forêt, sans une lumière, jusqu'au bord du ciel. On comprend d'ici ce qu'est un Brandelis : un homme qui possède tout ce qu'il voit, et qui le doit.",
        "Il y a pourtant une lumière. Elle est au pied de la muraille, du côté de l'eau, sous un bouquet de saules. C'est une lanterne sourde, dont on a ouvert le volet le temps de trouver une serrure. Une petite porte s'ouvre dans le rocher ; une forme en sort, large, bottée, une cape sur les épaules ; elle descend vers une barque, sans se presser, en homme qui est chez lui partout.",
        "La barque s'éloigne sur l'étang, vers la forêt, à la godille. Dans la grande salle, les fenêtres sont encore allumées, et l'on rit. Le maître de la maison a donc quitté sa table au milieu d'une partie, tout seul, par une porte de derrière.",
        { if: { has: "a4:sentiers" }, text: "*Une poterne, sous les saules, par où il sort la nuit quand il a trop perdu.* La Brûlée ne t'avait pas dit où il allait. La barque tient le milieu de l'eau ; elle va vers le bout qui luit." },
      ],
      choices: [{ back: "A4c_tour" }] },

    // ───────────────────────────── A moment alone ─────────────────────────────
    A4c_reve: { act: "IV", title: "Contre le grand tambour", place: "tour_horloge", branch: [
      { if: { is: { reve: "atelier" } }, to: "A4c_reve_atelier" }, { if: { is: { reve: "plombs" } }, to: "A4c_reve_plombs" },
      { if: { is: { reve: "nom" } }, to: "A4c_reve_nom" }, { to: "A4c_reve_large" }] },
    A4c_reve_atelier: { act: "IV", title: "Fecit", place: "tour_horloge", ambiance: "chateau",
      fx: { ep: ["perso", 500] },
      text: [
        "Sur le bâti de l'horloge, à hauteur d'yeux, il y a une plaque de laiton. Tu en ôtes la poussière avec ta manche.",
        "*AUBRY CROCHEMORE, D'AIGUEMORNE, M'A FAITE EN SA QUATRE-VINGTIÈME ANNÉE.* Les lettres sont profondes, régulières, d'un homme qui savait que l'on viendrait lire.",
        "Dessous, tout au bord, il y a autre chose, que la plaque n'avait pas prévu. C'est gravé à la pointe, de travers, par quelqu'un qui se cachait : *J. B. a limé les 288 dents. Il avait 14 ans.*",
        "Tu restes là, le doigt sur ces deux lignes. La première a eu son enseigne, sa statue, un arrière-petit-fils qui la récite. La seconde a eu une pointe, un quart d'heure pendant que le maître dînait, et l'idée que quelqu'un, un jour, ôterait la poussière.",
        "Tu as toujours voulu la plaque. Tu découvres ce soir que tu aurais gravé le bord.",
      ],
      choices: [{ back: "A4c_tour" }] },
    A4c_reve_plombs: { act: "IV", title: "Le prix d'un souper", place: "tour_horloge", ambiance: "chateau",
      fx: { ep: ["perso", 500] },
      text: [
        "Tu as fait le compte sans le vouloir, en traversant la cour. Soixante couverts. Six services. Du vin de trois pays. Deux cents bougies de cire, qui brûlent jusqu'à trois heures. Maître Ravaudet te l'aurait dit au sou près, en pleurant : cela fait, pour un soir, dans les trois cents écus.",
        "Trois cents écus. Il y a quelqu'un des tiens, sous les toits de la citadelle, qui tousse depuis l'hiver pour cette somme-là.",
        "Et l'homme qui la mange ce soir en doit quarante mille. Il les doit en riant, à la face de ses créanciers, qui lui tiennent l'étrier. Personne ne songe à le mettre aux Plombs : on y met les gens qui doivent peu. À partir d'un certain chiffre, une dette cesse d'être une faute ; elle devient un rang.",
        "Tu t'adosses au tambour. La Douairière disait cela autrement : *vole un écu, tu es un voleur ; vole une ville, on te la donne à gouverner.* Tu avais pris la phrase pour une plaisanterie de vieille.",
      ],
      choices: [{ back: "A4c_tour" }] },
    A4c_reve_nom: { act: "IV", title: "Le livre des chiens", place: "tour_horloge", ambiance: "chateau",
      fx: { ep: ["perso", 500] },
      text: [
        "Tu l'as vu au chenil, sur un pupitre, sous l'auvent : un registre plus gros qu'un missel, relié de peau de cerf, que le garçon t'a laissé feuilleter en riant.",
        "C'est le livre de la meute. Chaque chien de Brandelis y a sa ligne depuis trois cents ans : son nom, le jour de sa naissance, sa robe, et, dans deux colonnes, *le père* et *la mère*. *Tonnerre, par Tambour et Fanfare ; Tambour, par Ravaud et Mirette ; Ravaud, par…* On remonte ainsi, de page en page, jusqu'à une chienne blanche que le premier comte avait rapportée d'une guerre.",
        "Tu as cherché Tonnerre, qui menait la meute ce soir. Tu lui as compté vingt-six aïeux, tous nommés.",
        "Tu as, toi, une clef de fer à ton cou, avec un numéro, et un registre d'hospice où la colonne du père et celle de la mère portent le même trait de plume.",
        "Tu n'en veux à personne. Tu remarques seulement que dans ce pays l'on sait d'où sortent les chiens, et qu'il doit bien exister quelque part un livre aussi bien tenu pour les enfants que la Morne a rendus.",
      ],
      choices: [{ back: "A4c_tour" }] },
    A4c_reve_large: { act: "IV", title: "Les oies", place: "tour_horloge", ambiance: "nuit",
      fx: { ep: ["perso", 500] },
      text: [
        "Elles passent vers minuit. Tu les entends avant de comprendre : un bruit de poulie mal graissée, très haut, qui vient du nord.",
        "Tu vas à la meurtrière. Elles sont cent, peut-être, en deux lignes qui se rejoignent, et la lune leur passe à travers. Elles survolent le château, les chenils, l'étang où l'on a servi tant de bêtes, sans daigner y descendre. Les chiens, dessous, se sont tus pour écouter.",
        "Personne ne tire les oies sauvages, la nuit. On n'a jamais su leur faire de carrefour. Elles vont où il fait doux, par un chemin que nul comte n'entretient, et elles reviendront au printemps sans rien devoir à personne.",
        "Tu les suis jusqu'à ce que le bruit se perde dans le sud. Puis tu regardes la forêt, dessous, avec ses allées droites, ses poteaux, ses noms de bêtes mortes ; et tu te dis qu'il y a deux sortes de pays, ceux où l'on court en rond derrière quelque chose, et ceux que l'on traverse.",
      ],
      choices: [{ back: "A4c_tour" }] },

    // ───────────────────────────── The council ─────────────────────────────
    A4c_conseil: { act: "IV", title: "Trois habits pour une maison", place: "tour_horloge", ambiance: "nuit",
      fx: { until: 23 },
      text: [
        "Vous tenez conseil autour du brasero, sous le balancier. Sa lentille de cuivre pend entre vous, immobile, à hauteur de visage : on s'y voit, tout petit, à l'envers.",
        "« Je résume », dit Maître Crochemore, qui a remis son habit et retrouvé son ton. « Nous sommes le 5. La grande chasse est le 8. Le bal est le 10, et le 11 au matin toute cette noblesse monte en voiture pour Aiguemorne, la clef avec. Demain, vous avez la journée pour me rapporter trois choses : ce qu'est cette clef, ce qu'est cette chaîne, et une heure où cet homme est seul. Demain à la nuit, on vote. »",
        "Il a réglé les habits lui-même, en homme qui a lu les affiches de trois villes.",
        "**La main.** « L'horloger a un aide. Il porte ma trousse, il monte, il descend, il a de l'huile jusqu'aux coudes, et il entre partout où passe une corde de cette horloge. Elles passent derrière beaucoup de murs. On l'appellera *l'horloge*, comme on appelle un chien : c'est ce qu'il nous faut. » Les trois puits, les chambres de derrière la planche, et ce qui dort dedans.",
        "**L'œil.** « Leur vieux piqueur manque de valets de limier. C'est un métier où l'on tient une laisse et où l'on se tait. Celui de vous qui le prend sera dans les bois avant le jour, aux chenils à midi, et saura le soir où cet homme-là finit ses chasses, et avec qui. » La forêt, la meute, les gens qui rôdent autour d'un château, et le chemin par où l'on en sort.",
        "**La voix.** « Il y a sous les remises un fourgon de comédiens, et dans ce fourgon des malles. Il me faut demain matin, à la grande porte, en chaise, quelqu'un d'une cour si lointaine que personne ici n'y soit allé. On dit *Votre Excellence* à ces gens-là, on les assied près du maître, et on les laisse perdre aux dés. » La table, le jeu, et un comte de près.",
        "*Chaque poste revient à un seul d'entre vous, et l'on peut changer depuis Ossevaux. Mettez-vous d'accord à voix haute ; le premier qui choisit est servi.*",
      ],
      choices: [
        { label: "La main : tu portes la trousse de l'horloger", role: "a4", option: "main", to: "A4m_matin", big: true },
        { label: "L'œil : tu vas trouver La Brisée avant le jour", role: "a4", option: "oeil", to: "A4o_aube", big: true },
        { label: "La voix : tu ouvres les malles des comédiens", role: "a4", option: "voix", to: "A4v_malles", big: true },
      ] },
  },

  extras: {
    places: {
      tour_horloge: { ambiance: "chateau", region: "brandelis", name: "La tour de l'Horloge", map: "pays", x: 19, y: 57, arrive: "A4c_tour", desc: "La plus haute tour de Brandelis : cent douze marches, une horloge arrêtée à trois heures dix, et un homme de bronze qui tient une trompe." },
    },
    people: {
      ravaudet: { name: "Maître Onésime Ravaudet", aka: ["Ravaudet", "l'intendant", "Maître Ravaudet"], qui: "L'intendant de Brandelis : il tient les comptes du comte, et il en pleure.", f: false,
        aspect: { allure: "maigre, voûté sur un registre", visage: "yeux rouges, nez humide", habits: "habit gris râpé", signe: "mouchoir grand comme une serviette", voix: "mouillée, qui se brise sur les chiffres" },
        desc: "Vingt-deux ans de service. Il paie tout le pays avec la signature de son maître, et il sait le total." },
      labrisee: { name: "La Brisée", aka: ["La Brisée", "le premier piqueur", "le vieux piqueur"], qui: "Le premier piqueur de Brandelis : il mène la meute du comte.", f: false,
        aspect: { allure: "petit vieux à jambes torses", visage: "tanné, un œil plissé", habits: "habit cramoisi déteint", signe: "fouet qu'il ne lève jamais", voix: "basse, pour les chiens" },
        desc: "Il a fait les chiens du père et ceux du fils. Il lit l'âge d'un cerf dans une empreinte, et l'humeur de son maître dans un coup de trompe." },
      mathurin: { name: "Mathurin", aka: ["Mathurin", "le valet de chambre"], qui: "Le valet de chambre du comte de Brandelis.", f: false,
        aspect: { allure: "soixante ans, un port de chambellan", visage: "rasé, impassible", habits: "livrée cramoisie reprise aux coudes", signe: "pipe de terre", voix: "mesurée, sans illusions" },
        desc: "Trente ans de service, onze de gages en retard. Il parle de son maître comme un marin parle de la mer." },
    },
    shops: {
      plumassier: { sells: [{ item: "loup_velours", price: 10 }, { item: "fards", price: 16 }, { item: "corde", price: 10 }, { item: "lanterne", price: 14 }, { item: "onguent", price: 14 }, { item: "eau_de_vie", price: 8 }, { item: "dague", price: 20 }, { item: "couteaux", price: 24 }], food: 5 },
    },
    items: {
      loup_velours: { name: "Loup de velours", kind: "outil", bonus: { social: 5 }, price: 10, desc: "Un demi-masque noir, à cordons. Il cache le haut d'un visage et donne de l'aplomb au bas." },
    },
  },
};
