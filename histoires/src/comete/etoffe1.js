// More of the night, for both readings: a fallen mule on the ice, the old bench of the refuge, the cell window, the
// tour of the tower, the master's room, the accounts, the west wall, the kitchen at night, and what the morning after
// three o'clock shows to those who look.
module.exports = {
  A_charb_sermon: { act: "I", title: "Le sermon", place: "pied",
    text: [
      "Tu la rattrapes au tournant. « Ce qu'il dit, le Chapitre ? » La charbonnière remet son sac à terre, contente qu'on le lui demande. « Le Grand Chantre a fait un sermon à la Toussaint. Il a dit que la comète était une faux, que Dieu l'avait aiguisée soixante et onze ans, et qu'elle venait moissonner un grand de ce monde. Puis il a fait une rime. »",
      "Elle la récite, en traînant sur les syllabes comme à l'église. *Quand la Glaneuse moissonnera, le Prince sans barbe tombera.*",
      "« Le Prince sans barbe, c'est le nôtre. Il veut faire payer l'impôt aux terres du Chapitre, ce qui est une drôle d'idée pour un garçon de dix-neuf ans qui voudrait vivre vieux. » Elle crache. « Moi, je paie déjà l'impôt, la dîme, le péage du pont et le sel. Une comète de plus ou de moins. »",
      "Elle recharge son sac, et cette fois elle descend pour de bon.",
    ],
    choices: [
      { label: "Continuer vers le col", to: "A_borne" },
    ] },

  A_cairn: { act: "I", title: "Le cairn", place: "col",
    text: [
      "Au pied de la borne, les voyageurs ont élevé un cairn : un tas de pierres grand comme un enfant, chacune posée par quelqu'un qui passait. On dit en bas qu'il faut y mettre la sienne pour redescendre.",
      "Tu choisis un caillou plat, gris, veiné de blanc en forme de croix, et tu le poses au sommet, bien d'aplomb.",
      { second: true, text: "La première fois, tu avais choisi un caillou gris veiné de blanc en forme de croix, et tu l'avais posé au sommet. Il a disparu. Le sommet du cairn est exactement tel qu'avant ton passage. Tu prends le même caillou, au même endroit, au bord du chemin, et tu le reposes au même sommet. Tu as la sensation très nette de signer deux fois le même registre." },
    ],
    choices: [
      { back: "A_borne" },
    ] },

  A_mule: { act: "I", title: "La mule sur la glace", place: "refuge",
    text: [
      "Au dernier lacet avant le refuge, le chemin passe sur une coulée de glace noire, lisse comme une vitre. Une mule y est tombée, chargée de bois, les quatre fers en l'air, et elle se débat en raclant la glace de ses sabots avec un bruit de couteau sur une assiette. Un garçon de douze ans tire sur le licol en pleurant de rage.",
      "« C'est le bois du vieux ! crie-t-il en te voyant. Trois charges ! S'il ne l'a pas ce soir, il dira encore que c'est l'oncle Baptistin qui est en retard ! »",
      { if: { has: "passe:coureur" }, text: "Tu as relevé des mules sur toutes les glaces des estives, et tu sais ce que le garçon ignore : une mule couchée se relève seule dès qu'elle a trouvé une prise, et elle cherche d'abord à vous tuer pour se venger de l'humiliation." },
    ],
    choices: [
      { label: "Couper les sangles, décharger le bois et relever la bête", test: { dom: "nature", diff: 0, label: "Nature" }, win: { to: "A_mule_ok" }, lose: { to: "A_mule_ko" } },
      { label: "Lui dire d'attendre son oncle, et passer ton chemin", to: "A_refuge" },
    ] },

  A_mule_ok: { act: "I", title: "La mule debout", place: "refuge",
    fx: { flag: "mule:aidee", ep: ["perso", 300] },
    text: [
      "Tu coupes les sangles, tu fais rouler les fagots sur le côté, tu glisses ta veste sous les sabots de la bête pour qu'elle trouve prise, et tu tires avec le garçon. La mule se relève d'un coup de reins, tremblante, le poil fumant, et pose sur toi un regard plein d'une reconnaissance mêlée de mépris, ce qui est chez les mules le comble de l'affection.",
      "Vous rechargez le bois ensemble. Le garçon s'appelle Jeannot. Il est le neveu de Baptistin, il monte le bois à la Veille trois fois par semaine, et il connaît tout le monde là-haut.",
      "« Le frère Cosme, dit-il en serrant la dernière sangle, il m'a donné un sou pour monter un panier en plus, avant-hier. Un panier lourd. Il a dit de ne pas le secouer. » Il hausse les épaules. « J'ai pas secoué. »",
    ],
    choices: [
      { label: "Lui demander où il a monté ce panier", second: true, to: "S_jeannot" },
      { label: "Finir la montée jusqu'au refuge avec Jeannot", to: "A_refuge" },
    ] },

  A_mule_ko: { act: "I", title: "La glace", place: "refuge",
    fx: { pv: -1 },
    text: [
      "Tu poses le pied sur la coulée, et la glace te prend. Tu tombes à côté de la mule, sur la hanche, dans un bruit de sac qu'on lâche. La bête, effrayée, rue, te manque d'un pouce, et se relève toute seule, dans un grand concert de sabots, avec cette agilité soudaine que les mules réservent aux moments où on ne les aide plus.",
      "Le garçon la rattrape par le licol, te regarde par terre, et éclate de rire à travers ses larmes. Tu te relèves en boitant, une hanche bleue et une dignité à recoudre.",
    ],
    choices: [
      { label: "Finir la montée jusqu'au refuge", to: "A_refuge" },
    ] },

  A_banc: { act: "I", title: "Le vieux banc", place: "refuge",
    text: [
      "Près de la cheminée, il y a un banc de mélèze si vieux que les fesses de trois générations de muletiers l'ont poli comme un manche d'outil. Son dossier est couvert d'entailles : des noms, des dates, des croix, des cœurs, une mule mal dessinée.",
      "Tout en bas, à hauteur d'un enfant assis, des lettres taillées au couteau avec une application maladroite : *O. V. — 312.* Et à côté, une petite comète, une boule et un trait.",
      "« Ça, dit Baptistin en te voyant regarder, c'est la dernière Glaneuse. Ma grand-mère disait qu'un gamin avait passé la soirée à graver ça, pendant qu'elle lui faisait sa soupe, et qu'il avait recommencé la comète trois fois parce qu'elle n'avait pas la bonne queue. »",
    ],
    choices: [
      { back: "A_refuge" },
    ] },

  A_cellule_fenetre: { act: "I", title: "La fenêtre de la cellule", place: "ermitage",
    text: [
      "La fenêtre de la cellule est une ouverture carrée, sans vitre, fermée d'un volet de bois qu'on a laissé entrebâillé. Par la fente, à la lueur d'une veilleuse, tu vois une couchette, un crucifix, une table de bois blanc. Sur la table, un alambic de cuivre, petit, bien astiqué, et des fioles alignées par taille. Contre le mur, des bouquets de plantes sèches pendent tête en bas, comme des chauves-souris endormies.",
      "Un herboriste. Un ermite qui soigne les mules et les gens. Rien que de très ordinaire, sur une montagne.",
    ],
    choices: [
      { back: "A_ermitage" },
    ] },

  B_tour: { act: "II", title: "La tour, de haut en bas", place: "veille",
    fx: { meet: ["tobie"] },
    text: [
      "Tobie te fait visiter la Veille au pas de course, comme un sacristain qui a hâte d'aller déjeuner. « En bas, la grande salle, les cuisines, la citerne. Au premier, la bibliothèque. Au deuxième, mon atelier. Au troisième, le cabinet de la demoiselle Lise, et la chambre du maître. Au-dessus, la coupole. Au-dessus de la coupole, le ciel. »",
      "Il s'arrête sur le palier de la bibliothèque et baisse la voix. « Et derrière la bibliothèque, il y a l'escalier de service. Muré. » Il te fait un clin d'œil appuyé. « Muré pour les grandes personnes. »",
      "Au troisième, il te montre une porte basse. « La chambre du maître. On n'entre pas. Moi, j'entre, quand il a la fièvre. Il ne s'en souvient jamais. »",
    ],
    choices: [
      { label: "Entrer dans la chambre du maître, puisque Tobie y entre", hide: { seen: "B_chambre" }, to: "B_chambre" },
      { label: "Descendre à la citerne avec Tobie", hide: { seen: "B_citerne" }, to: "B_citerne" },
      { back: "B_salle" },
    ] },

  B_chambre: { act: "II", title: "La chambre du maître", place: "veille",
    text: [
      "Une cellule de moine aménagée par un savant : un lit étroit, une table chargée de livres ouverts les uns sur les autres, une cuvette, une cruche, des bottes. Au mur, au-dessus du lit, un portrait à l'huile : un homme maigre, aux cheveux noirs en désordre, qui rit au peintre avec toutes ses dents. Sur le cadre, une plaque : *Joachim Sérac.*",
      "À côté du portrait, sous un petit verre, épinglé sur un carré de velours, un insigne de drap brodé, décoloré, cousu de travers : la plume et le sceau des porteurs jurés du Collège. Le même que celui de ta veste, en plus vieux.",
      { if: { has: "registre:lu" }, text: "Tu penses au cahier gris de la bibliothèque, à son écriture ronde d'écolier, et à la ligne écrite à l'envers de l'alphabet." },
      "Tobie hausse les épaules. « Il dit que c'est un souvenir. Il ne dit pas de quoi. »",
    ],
    choices: [
      { back: "B_tour" },
    ] },

  B_v_pari: { act: "II", title: "Le pari", place: "veille",
    text: [
      "« Je parie sur la mort de tous les porteurs, dit-il, ravi qu'on lui pose la question. C'est une tradition de la maison. Ils montent la nuit, ils glissent, ils boivent chez Baptistin, ils tombent dans la vire, ils arrivent bleus et épuisés avec une lettre de trois lignes qui m'annonce que l'huile de lampe a augmenté. Un sur deux arrive. Je gagne une fois sur deux. C'est la seule statistique honnête de ce pays. »",
      { second: true, text: "Il ajoute, plus bas, sans te regarder : « Moi aussi, j'ai été porteur. Un soir. Il y a longtemps. Je suis arrivé. On ne m'a jamais dit si quelqu'un avait parié. »" },
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_v_lise: { act: "II", title: "Lise", place: "veille",
    text: [
      "« Lise ? » Il fronce ses sourcils broussailleux. « Lise calcule plus vite que moi. Plus juste aussi, quand je suis fatigué, ce qui n'arrive jamais. Elle a recopié quatre cents pages de mes Tables sans une faute. Quatre cents ! Moi-même, j'en fais une tous les cent feuillets, et je l'appelle une variante. »",
      "Il regarde l'escalier où elle a disparu. « C'est la meilleure tête que j'aie eue sous ce toit, après la mienne. Ne le lui répétez pas. Elle en profiterait pour me quitter. »",
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_atlas: { act: "II", title: "L'atlas de l'an 312", place: "veille",
    text: [
      "Couché sur un lutrin, un grand atlas du ciel en folio, relié de cuir fauve, ouvert sur une double page : la course de la dernière Glaneuse, l'an 312, dessinée à l'encre noire et rehaussée d'aquarelle, heure par heure, de l'épaule d'Escalle jusqu'à la Lyre. La main est sûre, élégante, rapide. En bas, la signature : *J. S.*",
      "Le dessin s'arrête à la Lyre. Après trois heures, la page est blanche.",
      { if: { has: "passe:etudiant" }, text: "Au Collège, on montrait aux élèves une copie de cet atlas, sous verre, sans leur laisser tourner les pages. Tu as devant toi l'original, ouvert, à portée de doigt, et personne pour te taper sur les mains." },
      "Dans la marge, une autre main, plus jeune, a tracé au crayon une petite tour ronde et, au-dessus, une comète, avec une flèche et un mot : *encore.*",
    ],
    choices: [
      { back: "B_biblio" },
    ] },

  B_lentilles: { act: "II", title: "Le polissage", place: "veille",
    text: [
      "Tobie te met entre les mains un disque de verre brut, une pincée de poudre grise et un tampon de feutre. « Tu tournes. En huit. Toujours en huit. Si tu tournes en rond, tu fais un creux, et le maître te fait un creux dans la tête. »",
    ],
    choices: [
      { label: "Tourner en huit, patiemment", test: { dom: "savoir", diff: 0, label: "Savoir" }, win: { fx: { flag: "tobie:ami", ep: ["perso", 200] }, to: "B_lentilles_fin" }, lose: { to: "B_lentilles_fin" } },
    ] },

  B_lentilles_fin: { act: "II", title: "Le verre", place: "veille",
    text: [
      { outcome: "win", text: "Au bout d'un quart d'heure, Tobie prend le disque, le lève vers la lampe, regarde à travers en plissant un œil. « Pas mal, dit-il, avec le ton exact du maître. Pour quelqu'un d'en bas. » Il le range parmi les siens, sur un linge. Tu viens de gagner l'estime d'un garçon de quatorze ans, ce qui vaut plus cher qu'une lettre de recommandation et se perd plus vite." },
      { outcome: "lose", text: "Au bout d'un quart d'heure, Tobie prend le disque, le lève vers la lampe, et éclate de rire. « Tu as fait un creux. Un beau creux. On pourrait boire la soupe dedans. » Il le jette dans la bassine des ratés. « C'est rien. Moi, j'en ai fait deux cents, des creux. Le maître les compte. »" },
    ],
    choices: [
      { back: "B_atelier" },
    ] },

  B_registres: { act: "II", title: "Les comptes de la Veille", place: "veille",
    text: [
      "Pendant que Lise range, tu feuillettes le registre des comptes posé sur le pupitre. Une écriture nette, des colonnes justes. L'huile, la chandelle, le bois de Baptistin, trois mulets, *non réglés, le maître conteste*. Le papier, la poudre à polir, les gages de Tobie.",
      "*Frère Cosme, de l'ermitage : miel, cire, eau de mélisse. Rien à régler : don de l'ermitage.* La même ligne revient chaque mois, depuis vingt ans.",
      "Et plus haut, sur une page de l'an 379, une ligne seule, entourée à l'encre rouge : *Chapitre de Salvagnes : offre de cent écus pour la lunette, à condition de suspendre les Tables. Refusé. — O. V.*",
    ],
    choices: [
      { back: "B_cabinet" },
    ] },

  B_ronde_ouest: { act: "II", title: "Le côté de l'ouest", place: "veille",
    text: [
      "Tu fais le tour du chemin de ronde jusqu'au côté de l'ouest, à l'abri du vent. De là, on voit la pente par où tu es monté{e}, l'escalier de dalles qui descend en zigzags, et tout en bas, sous son rocher, l'ermitage.",
      "La chapelle est éclairée. Une petite lumière jaune, immobile. Puis elle bouge, sort de la chapelle, traverse la cour, entre dans la cellule. Elle y reste. Puis elle ressort, et remonte lentement l'escalier de dalles vers la Veille, en se balançant au bout d'un bras.",
      "Frère Cosme monte souper.",
      { if: { has: "jeannot:panier" }, text: "Tu te penches par-dessus le parapet. Tout en bas, au pied de la tour, sous une petite fenêtre bouchée de pierres sèches, la neige est piétinée en rond, comme là où l'on a posé un panier lourd et où quelqu'un est venu le reprendre." },
    ],
    choices: [
      { back: "B_ronde" },
    ] },

  C_cosme_nuit: { act: "III", title: "Le frère, à une heure et demie", place: "veille", back: true,
    text: [
      "Frère Cosme s'est assis sur la dernière marche de l'escalier, sous la coupole, sa lanterne à ses pieds, le psautier ouvert sur les genoux. Il te fait une place à côté de lui.",
      "« Frère Anselme me racontait la dernière Glaneuse, dit-il à mi-voix, pour ne pas troubler le maître. Il disait que le ciel, cette nuit-là, était si blanc qu'on lisait son bréviaire à minuit. Il disait aussi qu'un enfant avait vu le diable dans le grand miroir, et qu'il avait pleuré jusqu'au matin. » Il sourit. « Anselme voyait le diable un peu partout. C'était un saint homme, mais il avait l'imagination d'un chanoine. »",
      "Il referme son psautier. « Dans une demi-heure, je descendrai sonner matines. Il faut bien que quelqu'un, sur cette montagne, dise à Dieu ce qui se passe. »",
    ] },

  C_cuisine_nuit: { act: "III", title: "Les cuisines, la nuit", place: "veille", back: true,
    text: [
      "Tu descends chercher un morceau de pain aux cuisines. Le potager à braises rougeoie encore sous la cendre. Sur la table, le panier de Frère Cosme, vide, sa couverture pliée dedans.",
      "Sous la couverture, une paire de gants de cuir épais, des gants de forgeron, roulés l'un dans l'autre. Tu les déplies machinalement. Ils sont raides, verdis aux doigts, et ils sentent l'amande.",
    ] },

  C_corps: { act: "III", title: "Le corps du maître", place: "veille",
    text: [
      "Tu t'agenouilles de nouveau près du vieil homme. Ses yeux sont fermés, maintenant. Son visage a pris une couleur étrange, rosée, presque vive, la couleur d'un homme qui aurait couru dans le froid.",
      "À sa ceinture, le petit gobelet de corne pend à son cordon. Une goutte verte y brille encore au fond. Ses lèvres sentent l'amande.",
      "Tu remarques autre chose : sa main droite, celle qui t'a serré le poignet, est restée à moitié fermée, comme si elle tenait encore quelque chose. Elle est vide.",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_escalier: { act: "III", title: "L'escalier de service", place: "veille",
    text: [
      "Tobie te tire par la manche, la figure défaite, et t'emmène derrière la bibliothèque. Trois in-folio ont été déplacés sur l'étagère basse, deux pierres retirées. L'escalier de service bâille, noir.",
      "« Je l'ai démuré, souffle-t-il. Moi. Pour me cacher. Je ne l'ai dit à personne. Je le jure. » Il pleure. « Quelqu'un l'a trouvé. »",
      "Tu descends trois marches avec ta lanterne. Sur la pierre, des traces de boue fraîche, et sur la cinquième marche, une goutte de cire, encore molle. Tu la touches. Elle est jaune, et elle sent le miel.",
    ],
    choices: [
      { label: "Monter l'escalier jusqu'en haut", hide: { seen: "C_trappe" }, to: "C_trappe" },
      { label: "Rester avec Tobie, qui tremble", hide: { seen: "C_tobie_apres" }, to: "C_tobie_apres" },
      { back: "C_apres" },
    ] },

  C_helis_apres: { act: "III", title: "Dame Hélis t'interroge", place: "veille",
    text: [
      "Dame Hélis te prend à part, près de la meurtrière, et te dévisage avec une attention nouvelle.",
      "« Et vous, porteur ? Vous êtes arrivé{e} ce soir. Vous aviez une lettre que personne n'a lue. Vous êtes resté{e} à côté du maître toute la nuit. Vous étiez la dernière personne qu'il ait regardée. » Elle hausse un sourcil. « Je ne vous accuse pas. Je fais la liste. À la cour, on fait toujours la liste. Ensuite, on choisit le nom qui arrange. »",
      { if: { has: "helis:refus" }, text: "Elle ajoute, avec un sourire sans chaleur : « Vous avez refusé ma bourse, tout à l'heure. À la cour, on appelle cela de l'honnêteté, ou de l'ambition. Je n'ai pas encore décidé laquelle. »" },
      { if: { has: "helis:bourse" }, text: "Elle baisse les yeux sur ta veste, là où pèse sa bourse. « Je vous avais demandé d'être là. Vous étiez là. Je ne sais pas encore si c'est une bonne ou une mauvaise nouvelle. »" },
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_tobie_apres: { act: "III", title: "Tobie", place: "veille",
    text: [
      "Tobie remonte avec toi et se réfugie sous la table aux feuilles, les genoux contre le menton, comme un enfant beaucoup plus jeune que lui. Tu t'accroupis devant lui.",
      "« Il m'a lu les étoiles, dit-il. Quand j'avais la fièvre. Toute une nuit. C'était très ennuyeux. » Il se met à sangloter, sans bruit. « Je ne lui ai jamais dit merci. Il n'aimait pas qu'on dise merci. Il disait que ça faisait perdre du temps. »",
      { if: { has: "tobie:ami" }, text: "Il renifle, s'essuie le nez sur sa manche, et te regarde. « Ta lentille, celle de tout à l'heure. Je l'ai montrée au maître avant minuit. Il a dit : *pas mal, pour quelqu'un d'en bas.* C'était la dernière chose qu'il m'ait dite. »" },
      "Tu restes là un moment, une main sur son épaule maigre. C'est tout ce que tu peux faire, et c'est déjà quelque chose.",
    ],
    choices: [
      { back: "C_apres" },
    ] },
};
