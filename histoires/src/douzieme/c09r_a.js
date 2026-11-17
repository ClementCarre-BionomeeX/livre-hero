// Le Douzième Coup · chapter 9, the one who stays, first half (act III, 18 June 601, three days before the
// sixtieth Grand Midi). From the abbey down to the Fair, taken whole at the eleventh stroke of 21 June 541. The
// Barrier of the Second (`r:barriere_veilleur` | `r:barriere_garde` | `r:barriere_champs` | `r:barriere_ordre`,
// `r:pour_girard`), the stroke still hanging in the air, ten thousand backs. Hub `K09r_arriere`, behind the Fair:
// the field of carts and the Noyers' place (with `monde:girard_attele`: a gap, and ruts to the towpath), the basin,
// the towpath where a boy of fourteen drives back in (`r:girard_eveille`, `r:girard_vrai` | `r:girard_doux`,
// `r:message_girard`), Line's iron box (`r:boite_line`), the wall of lamps (`r:vu_veilleuse`), the canteen of the
// Mastery (shop `iii_cantine`), the foot of the Regent's footbridge (`r:sait_passerelle`). Then into the crowd, to
// the First milestone (M09).
var P = {};
var UNE_PINCEE = { stock: "sable", min: 3 };
var ATTELE = { has: "monde:girard_attele" };
var ADMIS = { any: [{ has: "r:entre_medaille" }, { has: "r:entre_jeton" }, { has: "r:veilleurs_amis" }] };

Object.assign(P, {
  K09r_route: { act: "III", title: "Le plus vieux gris", place: "abbaye", ambiance: "champs", takes: "morning", fx: { stock: { sable: -1 } },
    text: [
      "Tu as dormi deux heures sous le dernier tilleul, la tête sur ton sac, dans la clarté des lampes. Quand tu rouvres les yeux, il y a du mouvement derrière le mur de l'abbaye : des chevaux qu'on sangle, une voix qui fait l'appel. La Régente partira au jour, avec ses manteaux blancs, ses casaques noires et sa berline. Tu pars avant elle.",
      "La chaussée descend. Passé le vallon, on entre dans un pays que la Dormante tient depuis plus longtemps que tout ce que tu as traversé : ces terres-là ont été prises entre 541 et 555, par petites bandes, un champ après l'autre. Le gris y est d'une autre qualité. À Roquebise, il avait six ans, et l'on aurait dit une buée. Ici, il a un demi-siècle : il est mat, serré, il a du grain, comme l'étain des vieux plats.",
      "C'est aussi le pays le plus glané du royaume. La Régence a commencé de murer en 555 ; avant, elle laissait faire, et l'on a fait. Trois générations de glaneurs ont passé dans ces fermes. Il y manque les portes, les gonds des portes, les clous des gonds. Dans une cour, un puits a perdu sa margelle, pierre à pierre. Le long de la chaussée, les ormes sont debout dans un vent de 547, toutes leurs feuilles tirées du même côté, et sous chaque arbre un Veilleur a posé une lampe.",
      "La Tour grandit. Hier, c'était une épine sur l'horizon. Ce matin, on lui voit la taille, les épaules, et le rond pâle d'un cadran.",
      { with: "rouget", text: "Rouget marche en regardant ses pieds. Il a remarqué que la poussière qu'il lève retombe sitôt qu'il s'arrête, et reste en l'air sitôt qu'il a passé. « Elle attend que je sois parti, dit-il. C'est poli, ou c'est sournois. J'ai pas décidé. »" },
      { with: "jehan", text: "Jehan compte les bornes. « La Deuxième est à une heure. Il y a une barrière : douze hommes, un brigadier, un registre. On la relève le premier du mois. » Il passe la main sur son crâne ras. « J'y ai fait un mois, l'an dernier. On s'y ennuie à pleurer. C'est le poste où l'on met les gens qu'on veut garder à l'œil. »" },
    ],
    choices: [{ label: "Descendre vers la Deuxième", to: "K09r_barriere", big: true }] },

  K09r_barriere: { act: "III", title: "La Barrière de la Deuxième", backName: "la Barrière", place: "foire", ambiance: "champs",
    text: [
      { first: true, text: "La deuxième borne est un cube de marbre, sur deux marches, avec un chiffre. La Régence a bâti autour : une palissade en travers de la chaussée, d'un fossé à l'autre, une barre à contrepoids, un corps de garde en planches goudronnées, et un mât où pend un drapeau noir au sablier d'or, que rien ne remue." },
      { first: true, text: "Devant la barre, une file. Ce sont les pèlerins du Serment, ceux qui viennent une fois l'an, pour le jour : des vieux, pour la plupart, en habits de dimanche, chacun avec son sablier de corne au cou et sa lampe dans un panier. Ils avancent d'un pas tous les deux Pater. À gauche de la barre, une table, où un Veilleur en manteau gris tient un registre épais comme un pavé. À droite, un guichet, où un commis de la Maîtrise pèse du sable dans une balance d'apothicaire." },
      { first: true, text: "Un écriteau donne le tarif, en belles lettres. *Pèlerinage de la Foire. Une pincée par lieue et par personne, fournie par la Maîtrise des Sables, au prix de trois écus la pincée. Retour compris. On ne fait pas crédit.* La Régence a trouvé le moyen de vendre aux gens, à la lieue, le droit d'aller regarder leurs morts ; et elle a pensé au retour, ce qui prouve qu'elle a du cœur." },
      { again: true, text: "La palissade, la barre, le drapeau noir qui pend. La file avance d'un pas." },
      { first: true, after: "r:aubespin_flaire", text: "Le brigadier est sorti du corps de garde avant que tu aies pris la file. Il a un papier à la main. Il le lit, te regarde, relit, et tu vois ses lèvres former un mot ou deux : une taille, une couleur de cheveux. Puis il plie le papier, le met dans sa manche, et pose la main sur le contrepoids de la barre, sans hâte, en te regardant venir." },
      { first: true, with: "jehan", text: "Jehan a rabattu son col. « Le grand, à la barre, c'est Trochu. Il était de ma chambrée. Il me doit six sous et un coup de poing. » Il réfléchit. « Le mot de la semaine, on le change le lundi. Lundi, c'était moi qui portais le pli. Si on ne l'a pas rechangé à cause de moi, je le sais. »" },
    ],
    choices: [
      { label: "Marcher à la barre : le brigadier la lève déjà", hide: { not: { has: "r:aubespin_flaire" } }, fx: { flag: "r:barriere_ordre" }, to: "K09r_barriere_fin", big: true },
      { label: "Prendre la file des pèlerins, jusqu'à la table du Veilleur", hide: { has: "r:aubespin_flaire" }, to: "K09r_pour_qui" },
      { label: "Laisser Jehan dire le mot, d'une voix de corvée", hide: { any: [{ has: "r:aubespin_flaire" }, { not: { present: "jehan" } }] }, test: { dom: "social", diff: 5, label: "Passer pour une corvée de la Garde", help: [{ if: { item: "casaque_garde" }, v: 15 }, { if: { voie: "diseur" }, v: 10 }] },
        win: { fx: { flag: "r:barriere_garde", ep: ["seance", 300] }, to: "K09r_barriere_fin" }, lose: { fx: { flag: "r:barriere_champs", stock: { sable: -1 } }, to: "K09r_barriere_fin" } },
      { label: "Passer la casaque noire, et marcher droit au guichet", hide: { any: [{ has: "r:aubespin_flaire" }, { present: "jehan" }, { not: { item: "casaque_garde" } }] }, test: { dom: "social", diff: 10, label: "Porter une casaque comme si elle était à toi", help: [{ if: { voie: "diseur" }, v: 15 }, { if: { voie: "tetu" }, v: 5 }] },
        win: { fx: { flag: "r:barriere_garde", ep: ["seance", 300] }, to: "K09r_barriere_fin" }, lose: { fx: { flag: "r:barriere_champs", stock: { sable: -1 } }, to: "K09r_barriere_fin" } },
      { label: "Le chanvre, à main gauche : il est haut, il est pris, et il va jusqu'au fossé", hide: { has: "r:aubespin_flaire" }, test: { dom: "discretion", diff: 5, label: "Traverser une chènevière sans la faire parler", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }, { if: { present: "rouget" }, v: 5 }] },
        win: { fx: { flag: "r:barriere_champs", ep: ["seance", 300] }, to: "K09r_barriere_fin" }, lose: { fx: { flag: ["r:barriere_champs", "r:barriere_vu"], stock: { sable: -1 }, pv: -2 }, to: "K09r_barriere_fin" } },
    ] },

  K09r_pour_qui: { act: "III", title: "Pour qui ?", place: "foire", ambiance: "champs",
    text: [
      "La file te mène à la table. Le Veilleur est un homme d'âge, chauve, avec des lunettes de corne et des manchettes de lustrine ; il a devant lui le registre de la Foire, qui a trois mille pages, et il les connaît.",
      "« Pour qui ? »",
      "C'est la question de sœur Gaude, à la porte de l'abbaye. Ici, elle a une suite. « La Foire a dix mille deux cent quatorze dormants, dont sept mille neuf cents reconnus. Vous me dites un nom. Je vous dis l'allée, le rang, et si l'on peut approcher. Les autres, on les appelle par leur place : *l'homme au panier d'œufs, grande allée, quatrième rang*. Il y a des gens qui viennent pour ceux-là aussi. »",
      { if: ADMIS, text: "Il a vu ce que tu portes de la maison de Sainte-Aure, et il a déjà trempé sa plume. Pour lui, tu es en règle : il ne te manque qu'un nom dans sa colonne." },
      { if: { not: ADMIS }, text: "Il te regarde par-dessus ses lunettes. Tu n'as ni médaille ni jeton ; tu as de la poussière de trois provinces, et des mains de quelqu'un qui porte. « Je ne refuse personne qui dit un nom, ajoute-t-il plus bas. Mais il faut le dire. »" },
    ],
    choices: [
      { label: "« Girard Noyer. Quatorze ans. Des Trois-Noyers. »", fx: { flag: ["r:barriere_veilleur", "r:pour_girard"] }, to: "K09r_barriere_fin" },
      { label: "« Personne à la Foire. Quelqu'un plus loin, dans la ville. » Et payer le guichet", if: { gold: { min: 3 } }, why: "Le guichet veut trois écus.", fx: { gold: -3, flag: "r:barriere_veilleur" }, to: "K09r_barriere_fin" },
      { back: "K09r_barriere" },
    ] },

  K09r_barriere_fin: { act: "III", title: "Passé la Deuxième", place: "foire", ambiance: "champs",
    text: [
      { after: "r:barriere_ordre", text: "La barre monte. Le brigadier porte deux doigts à son chapeau, avec une politesse où il entre de la curiosité. « On vous souhaite bon pèlerinage. » Il n'a demandé ni nom, ni jeton, ni trois écus. Derrière toi, la file murmure : on a fait passer quelqu'un devant quarante vieillards, et sans payer." },
      { after: "r:barriere_ordre", text: "Tu marches. Tu sens la barre redescendre dans ton dos. Hier, une voix égale disait, à travers un tambour de bois : *J'aime savoir où elles vont.* On t'ouvre les portes. C'est la manière la plus commode de suivre quelqu'un." },
      { after: "r:pour_girard", text: "Le Veilleur tourne ses pages par paquets, du pouce. « Noyer. Noyer Josse, laboureur, quarante-quatre ans. Noyer Girard, son fils, quatorze. Noyer Adeline, sa fille, neuf : rayée, sortie le jour même. » Il suit la ligne du doigt. « Les deux premiers : *Ville-Haute, parvis de la Tour, présumés.* On ne les a jamais reconnus à la Foire. Présumés, cela veut dire que personne ne les a vus depuis, et qu'une enfant a dit où ils allaient. » Il lève les yeux. « Vous venez pour quelqu'un que vous n'atteindrez pas d'ici, mon enfant. Passez tout de même. On regarde aussi de loin. »" },
      { after: "r:pour_girard", text: "Il écrit ton nom dans la colonne, en face de celui d'un garçon de quatorze ans. *Sortie le jour même.* Elle avait neuf ans, et quelqu'un a pris sa déposition." },
      { if: { all: [{ has: "r:barriere_veilleur" }, { not: { has: "r:pour_girard" } }] }, text: "Le commis du guichet pèse trois écus de la même balance que son sable, avec le même soin. Le Veilleur écrit dans sa colonne : *pour la ville.* « Il en passe dix par an qui disent cela, remarque-t-il. Il en revient huit. » La barre monte." },
      { after: "r:barriere_garde", text: "« Corvée de lampes pour la Passerelle. » La voix de corvée est une voix qui s'ennuie, et qui en veut à quelqu'un. Le grand, à la barre, ne regarde que la casaque : on lui a appris à saluer le drap. La barre monte. Vous êtes dix pas plus loin quand il dit, pour lui seul : « Tiens. On dirait la démarche à Jehan. » Et il se remet à s'ennuyer." },
      { if: { all: [{ has: "r:barriere_champs" }, { not: { has: "r:barriere_vu" } }] }, text: "Le chanvre de 544 est haut de sept pieds, serré, raide comme un peigne. On y entre de biais. Chaque tige que tu touches reprend sa souplesse le temps de ton passage, plie, bruit, et se fige derrière toi dans le pli que tu lui as donné : il restera, de la Deuxième au fossé, un sentier couché que le prochain brigadier trouvera dans un an, et qu'il mettra sur le compte des sangliers." },
      { after: "r:barriere_vu", text: "Le chanvre de 544 est haut de sept pieds, et il parle. Chaque tige que tu touches se réveille, plie, et casse avec un bruit de coup de fouet. Au corps de garde, une tête se lève. « Qui vive ! » Tu cours, courbé{e}, dans une forêt de baguettes ; une balle passe, lente d'abord, puis franche en entrant dans ton rond, et t'emporte un morceau de manche avec la peau. Le fossé te reçoit. On ne te poursuit pas : il faudrait du sable, et le brigadier en doit le compte." },
    ],
    choices: [{ label: "Descendre la dernière lieue", to: "K09r_dos", big: true }] },

  K09r_dos: { act: "III", title: "Dix mille dos", place: "foire", ambiance: "champs", fx: { stock: { sable: -1 } },
    text: [
      "Cela commence par l'oreille. Tu marches depuis un quart d'heure sur une chaussée muette, entre des ormes muets, quand il te vient dans la poitrine une pesée douce, pareille à une main posée à plat. Tu t'arrêtes pour comprendre. Elle cesse. Tu repars : elle revient. Au bout de cent pas, elle a un son.",
      "C'est une cloche. Une note, une seule, basse, large, qui ne commence ni ne finit, et qu'on entend avec le sternum autant qu'avec la tête. Elle est là comme le brouillard est là. On y entre. Tu sais ce que c'est avant de te l'être dit : à Sainte-Aure, on traverse en marchant un office de 555. Ici, on traverse un coup de cloche de 541, le onzième, qui était en route vers la campagne quand on l'a arrêté, et qui tient l'air depuis soixante ans, d'un bord à l'autre de la plaine.",
      "Tu marches dedans. Les ormes s'écartent.",
      "La Foire est devant toi, et elle te tourne le dos.",
      "Il y a d'abord cinq cents charrettes, les brancards en l'air, sur un chaume. Puis des toiles, des mâts, des bannières qui pendent. Puis, à perte de vue, jusqu'à un mur doré qui ferme la plaine à une lieue de là, des têtes. Des chapeaux de paille, des coiffes, des bonnets, des crânes nus d'enfants portés sur des épaules. Dix mille personnes debout, immobiles, toutes tournées du même côté, comme des blés qu'un vent aurait peignés et qui auraient gardé le pli. Aucune ne te regarde. Elles regardent, au-dessus du mur doré, une tour grise qui a le soleil au front et l'aiguille sur le douze.",
      "Tu as vu des dormants. Tu en as vu dans des lits, à des tables, sur un bac. Ceux-là étaient à leurs affaires, chacun dans son heure. Ici, ils sont dix mille dans le même instant, et l'instant a un nom : ils comptent. Ils en sont à onze. Ils ont la bouche à demi ouverte sur le chiffre suivant.",
      { with: "rouget", text: "Rouget s'est arrêté. Le son a cessé pour lui ; il fait un pas pour le ravoir, puis un pas en arrière pour le perdre. « Ils attendent, dit-il tout bas. Regarde leurs épaules. Ils attendent tous quelque chose, et ça fait soixante ans qu'ils l'ont sur le bout de la langue. »" },
      { with: "jehan", text: "Jehan s'est découvert, par habitude de caserne. « On nous menait ici, à l'instruction. Le sergent nous rangeait sur le chaume et nous disait : *Voilà ce que vous gardez.* Il y en avait toujours un pour rire. » Il remet son chapeau. « La seconde fois qu'on y vient, on ne rit plus. »" },
    ],
    choices: [{ label: "Avancer jusqu'au chaume", to: "K09r_arriere", big: true }] },

  K09r_arriere: { act: "III", title: "Derrière la Foire", backName: "le chaume, derrière la Foire", place: "foire", ambiance: "champs", hub: true,
    text: [
      { first: true, text: "Le chaume est le pays des vivants. Les pèlerins y ont leur campement d'un jour, à l'abri des dernières charrettes : des pliants, des paniers, des vieux qui mangent sans parler en regardant un dos, toujours le même. Le long de la première ligne de voitures, on a bâti avec le temps un mur de lampes, haut comme un homme, long de trois cents pas." },
      { first: true, text: "À main droite, le bassin du canal, avec son eau plate, ses barques, et un grand coche jaune au milieu, qui arrivait. À main gauche, la Régence : une cantine en planches, sous le drapeau noir ; et le pied d'un ouvrage de charpente, tout neuf d'aspect, qui monte du chaume par une rampe et s'en va par-dessus les têtes, droit vers le mur doré, sur des pilotis." },
      { first: true, text: "Devant, la grande allée. On y voit, à trois cents pas, le dos d'une borne de marbre sur ses marches, avec des gens debout dessus pour mieux voir. C'est la Première. C'est là que {autre} a creusé." },
      { again: true, text: "Le chaume, le mur de lampes, le coche jaune sur son bassin. Devant, dix mille dos, et la note qui revient dès qu'on marche." },
    ],
    choices: [
      { label: "Le champ des charrettes", to: "K09r_charrettes" },
      { label: "Le bassin, et le coche jaune", to: "K09r_bassin" },
      { label: "Le mur de lampes", to: "K09r_lampes" },
      { label: "La cantine de la Maîtrise", to: "K09r_cantine" },
      { label: "L'ouvrage de charpente, sur ses pilotis", to: "K09r_passerelle" },
      { label: "Rouget, qui regarde un gamin de son âge, sur une ridelle", hide: { any: [{ not: { present: "rouget" } }, { seen: "K09r_rouget_foire" }] }, to: "K09r_rouget_foire" },
      { label: "Entrer dans la grande allée, vers la Première", to: "K09r_entree", big: true },
    ] },

  K09r_rouget_foire: { act: "III", title: "Un gamin sur une ridelle", place: "foire", ambiance: "champs",
    text: [
      { with: "rouget", text: "C'est un garçon de treize ou quatorze ans, grimpé sur la ridelle d'une charrette pour voir par-dessus les chapeaux, une main en visière, l'autre accrochée à la bâche. Il a les pieds nus, un pantalon trop court, et la figure fendue d'un bonheur complet : c'est la première fois qu'on l'emmène." },
      { with: "rouget", text: "Rouget est planté dessous, la tête levée. « Il a un trou à son fond de culotte. Le même que moi. Au même endroit. » Il tourne autour de la charrette, revient. « Il a soixante-quatorze ans, ce gars-là. Soixante-quatorze, et il a pas encore usé sa culotte. »" },
      { with: "rouget", text: "Il se tait un moment. « Quand ça repartira, si ça repart, il descendra de sa ridelle. Il dira : *t'as vu, papa.* Et moi je serai un vieux, ou je serai mort, et il aura toujours son trou. » Il renifle, s'essuie le nez sur sa manche, et te regarde avec défi, pour le cas où tu aurais remarqué quelque chose. « C'est la poussière. »" },
    ],
    choices: [{ back: "K09r_arriere" }] },

  // ---------- the carts ----------
  K09r_charrettes: { act: "III", title: "Le champ des charrettes", backName: "le champ des charrettes", place: "foire", ambiance: "champs",
    text: [
      { first: true, text: "Cinq cents voitures de ferme, rangées par paroisses, les brancards au ciel. Chacune est une maison : une bâche pour toit, la paille pour lit, le derrière de la caisse pour table. On dînait. Il était midi, et les gens des champs dînent à midi, fête ou non." },
      { first: true, text: "Ils se sont levés pour compter. On le voit aux écuelles, posées en hâte sur les genoux, sur une roue, par terre ; aux cuillers restées dans les poings. Une femme tient un pain contre sa poitrine et le couteau dans l'autre main, à moitié de la tranche. Un chien, sous un essieu, a la gueule ouverte sur un os qu'un enfant lui jetait : l'os est en l'air, à deux pieds du sol, et il y a soixante ans que le chien le voit venir." },
      { first: true, text: "Tu passes entre les roues. La note de la cloche t'accompagne. Sur une voiture, tu lis un nom de village à la craie ; sur une autre, un prix. Les glaneurs ont laissé ce champ tranquille : les Veilleurs y campent toute l'année, et l'on vole mal sous trois cents lampes." },
      { first: true, text: "Tu cherches une marque. Sur l'établi de Line, aux Trois-Noyers, il y a depuis toujours une cruche de grès où elle met ses pinceaux, et dans la terre de cette cruche, sous l'anse, trois noix griffées à l'ébauchoir. Tu ne lui as jamais demandé d'où elle venait." },
      { again: true, text: "Les cinq cents charrettes, les écuelles, l'os en l'air devant le chien." },
    ],
    choices: [
      { label: "Chercher les trois noix, de voiture en voiture", hide: { seen: "K09r_noyers" }, to: "K09r_noyers" },
      { label: "La place des Noyers", hide: { not: { seen: "K09r_noyers" } }, to: "K09r_noyers" },
      { label: "Glaner : il y a là cinq cents bourses de fermiers, et du vieil or", hide: { any: [{ has: "r:glane_foire" }, { has: "r:foire_respect" }] }, to: "K09r_glane" },
      { back: "K09r_arriere" },
    ] },

  K09r_glane: { act: "III", title: "Du vieil or", place: "foire", ambiance: "champs",
    text: [
      "Tu connais le geste. Deux doigts sous la ceinture, à gauche, où les fermiers nouent leur bourse ; on tire le cordon, on ne regarde pas la figure. Le vieil or vaut double chez tous les changeurs du royaume, et il y en a ici de quoi acheter une ferme.",
      "Tu as la main sur une ceinture de cuir. L'homme est grand, rouge, en blouse bleue, le menton levé vers la Tour ; il a un enfant de trois ans sur les épaules, qui lui tient les oreilles. Sa bourse est lourde. Il avait vendu ses oies.",
      "Derrière toi, à vingt pas, sur un pliant, une vieille en coiffe de pèlerinage a cessé de manger. Elle regarde ta main.",
    ],
    choices: [
      { label: "Tirer le cordon : les morts n'ont pas d'emplettes à faire", fx: { gold: 12, flag: "r:glane_foire", regard: { ysoline: "mefiant" } }, to: "K09r_glane_fin" },
      { label: "Retirer ta main, et renouer ce que tu as défait", fx: { flag: "r:foire_respect", ep: ["perso", 300] }, to: "K09r_glane_fin" },
    ] },

  K09r_glane_fin: { act: "III", title: "Une vieille sur un pliant", place: "foire", ambiance: "champs",
    text: [
      { after: "r:glane_foire", text: "Douze écus à la couronne, chauds comme s'ils sortaient d'une poche, ce qui est le cas. Tu les fais passer dans ta chemise. La vieille s'est levée. Elle vient à toi de son petit pas, et tu attends le cri, le bâton, les Veilleurs." },
      { after: "r:glane_foire", text: "Elle te dépasse. Elle va à l'homme en blouse bleue, lui retend sa ceinture d'un coup sec, comme on rajuste un enfant avant la messe, et lui lisse sa blouse du plat de la main. Puis elle s'en retourne à son pliant et reprend sa croûte, en te regardant mâcher ta honte. C'était son père. Elle était sur ses épaules." },
      { after: "r:foire_respect", text: "Tu renoues le cordon. Tu le renoues bien, d'un nœud de marché, à deux tours. La vieille, sur son pliant, te regarde faire jusqu'au bout. Quand tu passes devant elle, elle te tend la moitié de sa croûte, avec un morceau de lard." },
      { after: "r:foire_respect", text: "« C'est mon père, dit-elle. Je suis là-haut, sur ses épaules. Je lui tiens les oreilles. » Elle rit, d'un rire de trois ans dans une bouche de soixante-trois. « Il les avait grandes. On les lui tirait tous, pour monter. »" },
    ],
    choices: [{ back: "K09r_charrettes" }] },

  K09r_noyers: { act: "III", title: "Trois noix sous une anse", backName: "la place des Noyers", place: "foire", ambiance: "champs",
    text: [
      { first: true, if: ATTELE, text: "Tu trouves les cruches avant de trouver la voiture. Elles sont vingt, en grès gris, bouchées de paille, et elles sont par terre : couchées, roulées, jetées du haut d'une caisse par quelqu'un qui n'avait pas le temps de les poser. L'une s'est fendue. Il en sort une langue d'huile blonde, épaisse, arrêtée à mi-chemin du chaume, où le soleil de 541 allume une goutte. Sous l'anse de chacune, il y a trois noix griffées dans la terre." },
      { first: true, if: ATTELE, text: "La voiture manque. Entre une charrette de Vauxelles et une charrette de Saint-Gnomon-des-Vignes, le rang a un trou : un rectangle de chaume foulé, avec le crottin d'une jument, la marque de quatre roues, et un sac à avoine pendu à rien, tombé de côté. Les quatre cent quatre-vingt-dix-neuf autres ont leurs brancards en l'air. Celle-ci était attelée." },
      { first: true, if: ATTELE, text: "Les ornières partent en biais, à travers le chaume, vers le bassin. Elles sont profondes au départ et s'allègent après les cruches : on a jeté la charge pour aller plus vite. Elles ont été faites avant le onzième coup, puisque rien ne bouge après. De peu : l'huile coule encore." },
      { first: true, if: { not: ATTELE }, text: "Tu la trouves au neuvième rang, entre une charrette de Vauxelles et une charrette de Saint-Gnomon-des-Vignes. Vingt cruches de grès, bouchées de paille, rangées sur le derrière de la caisse, et sous l'anse de chacune trois noix griffées dans la terre. Les brancards sont en l'air. La jument, à l'attache, a le nez dans son sac." },
      { first: true, if: { not: ATTELE }, text: "Il n'y a personne. Les voisins sont à leurs écuelles, debout, la tête tournée ; ici, on a mesuré de l'huile le matin, on a posé la mesure, et l'on est parti. Sur la paille, il reste un chapeau d'homme, une blouse pliée, et un creux, de la taille d'un enfant, où quelqu'un a dormi." },
      { first: true, if: { not: ATTELE }, text: "Sur la ridelle de gauche, le bois est entaillé. Des encoches au couteau, l'une sous l'autre, et à côté de chacune un chiffre. *15. 17. 20. 24. 31. 40. 52. 61.* Tu connais cette façon de tailler : il y a la pareille sur un montant de porte, à la Ferme-Vieille. Là-bas, on mesurait des enfants. Ici, quelqu'un a compté ses propres visites, avec son âge, pendant quarante-six ans." },
      { again: true, if: ATTELE, text: "Vingt cruches renversées, un rectangle de chaume foulé, des ornières qui filent vers le bassin." },
      { again: true, if: { not: ATTELE }, text: "La charrette des Trois-Noyers, ses cruches, sa jument. Les encoches sur la ridelle." },
      { first: true, after: "r:line_vue_abbaye", text: "*Du côté où les dix mille ne regardent pas.* Tu te retournes. Derrière toi, il y a le chaume, le bassin, une ligne de peupliers." },
    ],
    choices: [
      { label: "Passer la main sous le siège", hide: { any: [ATTELE, { has: "r:boite_line" }] }, fx: { flag: "r:boite_line", stock: { sable: 3 }, ep: ["histoire", 500] }, to: "K09r_boite" },
      { label: "Suivre les ornières", hide: { not: ATTELE }, to: "K09r_bassin" },
      { back: "K09r_charrettes" },
    ] },

  // ---------- the basin, the towpath ----------
  K09r_bassin: { act: "III", title: "Le bassin du canal", backName: "le bassin", place: "foire", ambiance: "eau",
    text: [
      { first: true, text: "Le canal finit ici, dans un bassin carré, maçonné, large comme une place. L'eau y est prise depuis le premier jour ; elle a la couleur du ciel de ce midi-là et elle en garde les nuages, deux petits, ronds, que le vent n'a jamais emmenés." },
      { first: true, text: "Au milieu, le coche d'eau. Il est jaune, long, pansu, avec un toit plat où des gens sont debout ; ses deux chevaux, sur le halage, ont le collier tendu et un sabot levé. Il arrivait. Il était à quinze toises du quai, il avait à son bord soixante personnes qui venaient voir la fête, et il lui manquait le temps d'un Ave pour être à l'heure. Le patron a encore la bouche en rond sur le mot qu'il criait à son haleur." },
      { first: true, text: "Au coin du bassin, une forge de maréchal, sa porte ouverte, son feu rouge qui éclaire sans chauffer. De l'autre côté, un petit pont de pierre enjambe l'entrée du canal, et au-delà du pont le chemin de halage s'en va vers le couchant, entre deux rangs de peupliers." },
      { again: true, text: "Le bassin, ses deux nuages, le coche jaune qui arrivait. Au-delà du petit pont, les peupliers du halage." },
      { first: true, if: ATTELE, text: "Les ornières passent devant la forge, prennent le pont en écornant la borne, où une roue a laissé du bleu, et s'en vont par le halage. Du bleu de charrette, frais. Celui qui tenait les guides n'a pas ralenti pour tourner." },
      { first: true, if: { all: [{ has: "r:line_vue_abbaye" }, { not: ATTELE }] }, text: "*Du côté où les dix mille ne regardent pas.* C'est ici. Le bassin, le pont, les peupliers. Le coche jaune lui-même tourne le dos à ce chemin." },
    ],
    choices: [
      { label: "Passer le petit pont, et prendre le halage", hide: { not: ATTELE }, to: "K09r_halage" },
      { label: "Monter sur l'eau, jusqu'au coche", hide: { seen: "K09r_coche" }, to: "K09r_coche" },
      { label: "La forge du maréchal", hide: { seen: "K09r_forge" }, to: "K09r_forge" },
      { back: "K09r_arriere" },
    ] },

  K09r_coche: { act: "III", title: "Soixante qui arrivaient", place: "foire", ambiance: "eau",
    text: [
      "L'eau du bassin porte comme un plancher ciré, pourvu qu'on ne s'y arrête pas. Tu la prends d'un bon pas. Sous ta semelle, elle a une élasticité de glace neuve, et tu vois, en baissant les yeux, des ablettes arrêtées dans leur virage, à un pied sous toi.",
      "Tu fais le tour du coche sans ralentir. Soixante personnes, sur le toit et aux fenêtres : des bourgeois d'Arvoise, une noce, deux moines, un petit garçon qu'on tient par sa ceinture au-dessus de l'eau pour qu'il voie la Tour. Ils la voyaient. Ils l'entendaient : ils ont la figure des dix mille, le menton levé, la bouche sur le chiffre.",
      "Une femme, à l'arrière, regarde ailleurs. Elle est assise sur une malle, un mouchoir sur la bouche, verte : elle avait le mal de l'eau, et la Tour pouvait bien sonner. C'est la seule personne de la Foire, à ta connaissance, que le Grand Midi ait prise occupée d'autre chose.",
      "Sur le flanc du coche, sous les fenêtres, quelqu'un a peint en lettres noires, par-dessus le jaune : *LA DILIGENTE. Arvoise à Méridane en deux jours. On arrive toujours.*",
    ],
    choices: [{ back: "K09r_bassin" }] },

  K09r_forge: { act: "III", title: "Le maréchal du bassin", place: "foire", ambiance: "champs",
    text: [
      "Le maréchal est sorti sur son seuil pour compter, le tablier de cuir aux genoux, un fer rouge au bout de sa pince. Le fer est resté rouge. On peut en approcher la main : il éclaire le dessous du menton de l'homme et il est froid comme un caillou.",
      "Dans la forge, un cheval de roulier attend, le pied sur le genou d'un apprenti. Au mur, l'ardoise du jour, à la craie. *Lundi 21. La grise à Mathieu, deux fers. Le bai du coche, un clou. Le roulier, quatre.*",
      { if: ATTELE, text: "Tout en bas, d'une autre craie, plus appuyée : *La jument aux Noyers : un fer qui branle. Vu. Il ne branle pas. Le gamin dit que si. Reviendra.* Le maréchal de 541 avait de la conscience, et de l'humeur. Dehors, les ornières passent devant sa porte sans s'y arrêter." },
      { if: { not: ATTELE }, text: "L'ardoise s'arrête là. C'était une petite matinée : un jour de fête, on ferre peu, et l'on ferme à midi." },
    ],
    choices: [{ back: "K09r_bassin" }] },

  K09r_halage: { act: "III", title: "Entre les peupliers", backName: "le halage", place: "foire", ambiance: "eau", fx: { stock: { sable: -1 } },
    text: [
      { first: true, text: "Le halage est une levée de terre battue, droite, entre le canal et une double rangée de peupliers. Personne ne vient ici. Les pèlerins ont leurs morts devant eux ; la Régence a sa Passerelle ; et le chemin par où l'on arrivait à la Foire en bateau ne mène plus, depuis soixante ans, qu'à un pays vide." },
      { first: true, text: "Les ornières le suivent, bien marquées dans la poussière, le long de l'eau. Un cheval au trot, une voiture légère, deux cents pas, trois cents. La note de la cloche faiblit à mesure que tu t'éloignes ; au cinquième peuplier, il faut tendre l'oreille ; au septième, elle s'éteint, et tu es dans le gris ordinaire, celui de 542, où il n'y a plus que ton propre bruit." },
      { first: true, text: "Tu comprends, à ce silence, où tu viens de passer. Jusqu'au septième peuplier, on entendait. Après, non. C'est le bord du premier jour : la ligne où s'est arrêté ce qui avait ouï. Les ornières la traversent sans ralentir, et continuent." },
      { first: true, text: "Puis elles reviennent. À cinquante pas de là, près d'un ponceau sur un bief, la voiture a tourné court, dans l'herbe, en labourant le talus ; et les mêmes roues, plus légères encore, repartent en sens inverse, par-dessus leurs propres traces." },
      { first: true, text: "Tu te retournes. Tu l'avais dépassée sans la voir, parce qu'on ne regarde pas derrière soi sur un chemin droit. Elle est à trente pas en deçà du septième peuplier, du côté où l'on entend." },
      { again: true, text: "Le halage, les peupliers, le septième, où la cloche s'éteint. Les ornières vont et reviennent." },
    ],
    choices: [
      { label: "Aller à elle", to: "K09r_girard", big: true },
      { back: "K09r_bassin" },
    ] },

  K09r_girard: { act: "III", title: "Girard, quatorze", backName: "la charrette du halage", place: "foire", ambiance: "eau",
    text: [
      { first: true, text: "C'est une charrette de ferme, peinte en bleu, vide, attelée d'une jument baie qui a les quatre pieds à terre et l'encolure basse. Elle marchait. Elle était entrée au trot, on le lit dans les traces ; puis le trot s'est allongé, alourdi, les foulées se sont rapprochées comme les battements d'une montre qui s'arrête, et les dernières empreintes sont celles d'une bête qui pose ses pieds un à un dans de la poix." },
      { first: true, text: "Sur le siège, debout, les guides dans une main, il y a un garçon. Il est penché en avant, de tout son corps, à la façon dont on pousse une porte. Son bras droit est à demi levé, avec un fouet dont la mèche fait dans l'air une boucle qui ne se défera pas. Il a la bouche ouverte. Il criait à sa jument, et son cri s'est ralenti avec elle, jusqu'à devenir cette bouche." },
      { first: true, text: "Il a quatorze ans. Tu le sais par un montant de porte. Il a le front large, les sourcils d'un seul trait, et, au coin de la mâchoire, un pli têtu que tu as vu tous les jours pendant neuf ans sur la figure d'une vieille femme penchée sur un établi." },
      { first: true, text: "Il regarde la Tour, comme les dix mille. Mais les dix mille étaient dedans, et attendaient une fête. Lui venait de dehors. Il a vu la Foire s'arrêter, de l'autre côté du septième peuplier, là où l'on est en sûreté ; et il a fait demi-tour." },
      { first: true, text: "Sur la ridelle, à portée de sa main gauche, le bois est entaillé. Des encoches au couteau, l'une sous l'autre, avec un chiffre à côté de chacune. *15. 17. 20. 24. 31. 40. 52. 61.* Celle du vingt est plus creuse que les autres." },
      { first: true, text: "Dans la caisse, il reste de la paille, avec le creux d'un petit corps. Sous le siège, dans l'ombre, quelque chose a un reflet bleu." },
      { again: true, text: "La charrette bleue, la jument, le garçon debout, le fouet en l'air. Les encoches sur la ridelle." },
      { first: true, with: "rouget", text: "Rouget n'approche pas. Il s'est assis sur le talus, les bras autour des genoux. « Il est revenu, dit-il. Il était sorti. Il avait qu'à continuer. » Sa voix déraille. « Je l'aurais pas fait, moi. Je te le dis. Je serais à Arvoise à l'heure qu'il est, et je courrais encore. »" },
      { after: "r:pour_girard", first: true, text: "*Ville-Haute, parvis de la Tour, présumé.* Le registre de la Deuxième a trois mille pages, et il se trompe d'une lieue. Personne n'est venu regarder sur ce chemin, excepté quelqu'un qui tenait un couteau, et qui n'a rien dit aux Veilleurs." },
    ],
    choices: [
      { label: "La chose bleue, sous le siège", hide: { has: "r:boite_line" }, fx: { flag: "r:boite_line", stock: { sable: 3 }, ep: ["histoire", 500] }, to: "K09r_boite" },
      { label: "Poser une pincée sur la main qui tient les guides", hide: { has: "r:girard_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:girard_eveille" }, to: "K09r_girard_eveil" },
      { label: "Le laisser à son chemin", to: "K09r_bassin" },
    ] },

  K09r_boite: { act: "III", title: "Une boîte à vis bleues", place: "foire", ambiance: "champs",
    text: [
      "C'est une boîte de fer, grande comme un livre de messe, rouillée aux coins. Le couvercle tient par quatre vis, et les quatre vis sont bleues : passées au feu, de ce bleu de gorge de pigeon que Line donne à tout ce qui sort de ses mains. Elles sont plus neuves que la boîte. On les a changées souvent.",
      "Tu les défais avec l'ongle du pouce. Dedans, une corne de sable, bouchée à la cire, pleine jusqu'au bord ; et une feuille pliée en quatre, de cette écriture que tu connais, penchée, serrée, où les *t* n'ont pas de barre.",
      { if: ATTELE, text: "*Pour qui passera ici avec un cahier. Il s'appelle Girard. Il a quatorze ans. On m'a redescendue du parvis jusqu'à lui. Il attendait depuis le matin, attelé, le nez vers le canal. Il a jeté l'huile, il a mené la jument jusqu'au pont du bief, et là il m'a posée par terre et m'a dit de ne pas bouger. On a entendu les coups. Il en est venu onze. Il a attendu le temps de deux Ave, et il est retourné chercher le père.*" },
      { if: ATTELE, text: "*Je l'ai éveillé une fois. J'avais vingt ans, j'avais mis deux ans à gagner le sable. Il m'a demandé si j'avais vu une petite de neuf ans au pont du bief, avec une boîte de fer. J'ai dit que oui, qu'elle allait bien. Il a dit : merci, madame. J'ai laissé retomber sa main.*" },
      { if: ATTELE, text: "*Je suis revenue. J'ai fait une encoche chaque fois, pour qu'il y ait quelqu'un qui compte. Le sable est pour toi : j'en mets depuis mes quarante ans, et je change les vis. Si tu lui parles, garde mon âge pour toi.*" },
      { if: { not: ATTELE }, text: "*Pour qui passera ici avec un cahier. C'est notre charrette. Nous sommes montés à trois, le matin, le père, Girard et moi ; j'étais sur les épaules de Girard, parce que le père avait promis que je verrais la Reine. Ils sont là-haut, au bord du parvis, près d'une rue qui descend. Moi, on m'a redescendue. J'avais neuf ans, je n'ai jamais su par quelles mains : je me suis retrouvée ici, dans la paille, et la jument ne bougeait plus.*" },
      { if: { not: ATTELE }, text: "*Je suis sortie à pied, le long du canal. J'ai mis six ans à pouvoir revenir. Je ne peux pas aller jusqu'à eux : il y faut le sable triple, et je n'en ai jamais eu que pour venir m'asseoir dans cette voiture. J'ai fait une encoche chaque fois. Le sable est pour toi : j'en mets depuis mes quarante ans, et je change les vis. Si tu montes, regarde-les pour moi.*" },
      "Pour signature, sous la dernière ligne, elle a dessiné, d'un trait de plume, une roue à dents de scie, et une petite verge en travers.",
      { after: "monde:line_dedans", text: "*Tac*, a-t-elle écrit à côté, en lettres d'enfant, d'une autre encre : la première encre de cette feuille, plus brune que tout le reste." },
      "Tu verses la corne dans ton sablier. Trois pincées, tassées. Tu remets la feuille dans la boîte, la boîte sous le siège, et les quatre vis bleues, une à une, du même ongle.",
    ],
    choices: [
      { label: "Te redresser", hide: { not: ATTELE }, to: "K09r_noyers" },
      { label: "Te redresser, devant le garçon au fouet", hide: ATTELE, to: "K09r_girard" },
    ] },

  K09r_girard_eveil: { act: "III", title: "Hue", place: "foire", ambiance: "eau",
    text: [
      "Tu poses la pincée dans le creux de sa main gauche, entre le cuir des guides et la paume, et tu refermes ta main sur la sienne.",
      "« ...ue ! Hue donc, la Grise ! Hue ! » Le cri lui revient tout entier, à pleine gorge, et le bras achève son coup de fouet dans un air qui ne le rend pas. Il manque tomber en avant. La jument n'a pas bougé. Il tire sur les guides, les trouve dures comme du fer, les regarde, te voit.",
      "« Lâche-moi ! » Il a une voix qui mue, et qui casse sur le deuxième mot. « Lâche, je te dis, j'ai mon père là-haut ! Tu as vu ? Tu as vu ce qu'ils ont ? Toute la Foire ! D'un coup, comme des quilles qu'on aurait clouées ! » Il montre devant lui, du manche. « Ça a sonné onze. J'étais au pont. On a attendu l'autre, la petite et moi, on a attendu, et il est pas venu. »",
      { after: "monde:line_dedans", text: "« Elle s'est mise à pleurer. Elle pleure jamais. Elle a dit : *ça retient, et ça lâche plus.* Je sais pas ce qu'elle voulait dire. Elle a neuf ans, elle a des idées de montre plein la tête depuis trois jours. »" },
      { before: "monde:line_dedans", text: "« Elle s'est mise à pleurer. Elle pleure jamais. Elle a dit : *il en manque un, Girard, il en manque un.* Comme si je savais pas compter. »" },
      "Il s'aperçoit que la jument ne répond pas. Il s'aperçoit de tes habits, qui ne sont d'aucune paroisse qu'il connaisse, et du petit sablier de corne que tu as au cou. Il a quatorze ans : il met toutes ces choses de côté, pour plus tard, et garde la seule qui presse.",
      "« Tu viens du pont ? Tu as vu une petite, au pont du bief ? Neuf ans, une boîte de fer sous le bras. Je lui ai dit de pas bouger. »",
      "Dans sa main, sous la tienne, tu sens le sable descendre.",
    ],
    choices: [
      { label: "« Je l'ai vue. Elle n'a pas bougé. Elle va bien. »", fx: { flag: ["r:girard_doux", "r:message_girard"], ep: ["perso", 600] }, to: "K09r_girard_fin" },
      { label: "« Girard. Écoute-moi. Il y a soixante ans que tu as sonné onze. »", fx: { flag: ["r:girard_vrai", "r:message_girard"], ep: ["perso", 600] }, to: "K09r_girard_fin" },
    ] },

  K09r_girard_fin: { act: "III", title: "Le temps d'une pincée", place: "foire", ambiance: "eau",
    text: [
      { after: "r:girard_doux", text: "Tout son corps se défait d'un cran : les épaules, le cou, le poing sur les guides. Il respire. « Bon. Bon. Elle écoute, des fois. » Il s'essuie la figure du revers de sa manche, sans lâcher le fouet." },
      { after: "r:girard_doux", text: "« Alors lâche-moi, que j'aille au père. Il est au bord, près d'une rue qui descend, il l'a promis à quelqu'un. Je le charge, je reviens, on prend la petite au pont et on est aux Trois-Noyers après-demain. » Il fronce ses sourcils d'un seul trait. « Si tu repasses par là-bas avant moi, dis-lui de garder sa boîte fermée. Les vis se perdent dans la paille. Et dis-lui... » Il hésite, rougit. « Dis-lui que le fer branlait pas. Elle comprendra. Elle était là quand j'ai menti au père. J'aime pas lui avoir menti un jour pareil. »" },
      { after: "r:girard_doux", text: "Tu dis que tu le diras. Le gris lui prend déjà le bout des doigts. Il ne le voit pas ; il s'est retourné vers sa jument, il rassemble ses guides, il prend son souffle pour crier. « Hue, la... »" },
      { after: "r:girard_vrai", text: "Il rit. C'est un rire court, de garçon à qui l'on en conte, et qui s'arrête de lui-même. Il regarde les peupliers. Les feuilles sont tournées toutes du même côté, sur leur envers, blanches, et pas une ne tremble. Il regarde la poussière que son fouet a levée, et qui se tient en l'air, à hauteur de son coude, comme une fumée dans une chambre. Il regarde tes mains." },
      { after: "r:girard_vrai", text: "« Soixante. » Il s'assoit sur le siège, d'un bloc. « Et la petite ? »" },
      { after: "r:girard_vrai", text: "Tu avais une consigne, écrite sur une feuille pliée en quatre, ou tu n'en avais pas. Tu dis ce qui est. Qu'elle a attendu au pont. Qu'elle est sortie à pied, par le canal. Qu'elle a soixante-neuf ans, qu'elle fait des montres, les meilleures de trois provinces, et que c'est elle qui t'envoie." },
      { after: "r:girard_vrai", text: "« Des montres. » Cette fois, il rit pour de bon, la tête en arrière, et tu vois d'où Line tient ses dents. « Elle parlait que de ça ! Trois jours qu'elle nous cassait la tête avec ce qui pousse et ce qui retient ! » Le rire tombe. Il compte sur ses doigts, lentement, en remuant les lèvres. « Soixante-neuf. Elle est plus vieille que la mère. Elle est plus vieille que l'aïeul. »", if: { has: "monde:line_dedans" } },
      { after: "r:girard_vrai", text: "« Des montres. » Cette fois, il rit pour de bon, la tête en arrière, et tu vois d'où Line tient ses dents. « Elle démontait tout ! Le tournebroche, la serrure du cellier ! Le père disait qu'elle finirait pendue ou horlogère ! » Le rire tombe. Il compte sur ses doigts, lentement, en remuant les lèvres. « Soixante-neuf. Elle est plus vieille que la mère. Elle est plus vieille que l'aïeul. »", if: { not: { has: "monde:line_dedans" } } },
      { after: "r:girard_vrai", text: "Puis, plus bas : « Il est venu une dame, tantôt. Pour moi, c'était tantôt. Une grande, avec une robe grise. Elle m'a tenu la main comme tu fais. Elle avait une boîte de fer. » Il te regarde. Tu fais oui. « Je lui ai dit *merci, madame*. » Il devient rouge jusqu'aux oreilles. « Dis-lui que c'est à cause de la robe. Dis-lui que le fer branlait pas, elle comprendra. Et le père ? »" },
      { after: "r:girard_vrai", text: "« Là-haut. Comme à midi. » Il hoche la tête. Le gris lui prend le bout des doigts ; il le voit, lui, et il se relève, reprend ses guides, se penche en avant de tout son corps. « Alors j'y vais quand même. Il sera moins seul. Hue, la... »" },
      "La bouche reste ouverte sur le nom de la jument. Le fouet refait sa boucle. Tu retires ta main ; la sienne garde la forme de tes doigts un instant, puis celle des guides.",
      "Tu restes là. La note de la cloche est partie avec ton pas, et sur le halage il n'y a plus un bruit : un garçon debout, une bête, des peupliers. Au-dessus d'eux, à une lieue, la Tour a l'aiguille sur le douze.",
      { with: "jehan", text: "Jehan a tout entendu, à dix pas, le chapeau à la main. « À la caserne, on nous disait qu'ils ne sentent rien. Qu'il ne fallait pas y penser. » Il remet son chapeau, de travers. « Il a dit *il sera moins seul*. » Il s'en tient là, et marche devant toi jusqu'au pont, pour te cacher sa figure.", if: { has: "r:girard_vrai" } },
    ],
    choices: [{ label: "Reprendre le halage, vers le bassin", to: "K09r_bassin", big: true }] },

  // ---------- lamps ----------
  K09r_lampes: { act: "III", title: "Le mur de lampes", backName: "le mur de lampes", place: "foire", ambiance: "temple",
    text: [
      { first: true, text: "On l'a bâti sans maçon. Ce sont des planches sur des pieux, des étagères de fortune, des caisses retournées, ajoutées d'année en année par des gens qui avaient une lampe à poser et qui ne trouvaient plus de place. Cela fait un rempart de terre cuite et de petites flammes, long de trois cents pas, tourné vers la Foire ; chaque lampe a son nom noué au col, et chaque flamme, allumée puis laissée, tient droite dans l'air sans consumer sa mèche." },
      { first: true, text: "Les noms sont ceux qu'on a pu savoir. Pour les autres, les Veilleurs ont écrit ce qu'on voyait. *La marchande d'oublies. L'enfant au cerceau. Le vieux qui dort sur son banc.* Celui-là dormait déjà quand la cloche a sonné ; on suppose qu'il n'a rien entendu, et qu'il est le seul de la Foire à avoir fait un somme de soixante ans par ses propres moyens." },
      { first: true, text: "Devant le mur, sur des pliants, les pèlerins sont assis par familles. Ils regardent chacun leur dos. Ils se le montrent : *Là, sous la bannière verte, le troisième, avec le chapeau.* Ils ont apporté à manger. Quelques-uns parlent tout haut, vers la foule, d'une voix de conversation, et racontent l'année." },
      { again: true, text: "Trois cents pas de petites flammes droites. Les pèlerins, sur leurs pliants, parlent à des dos." },
    ],
    choices: [
      { label: "Une femme seule, au bout du mur, qui ne regarde personne", hide: { seen: "K09r_veilleuse" }, fx: { flag: "r:vu_veilleuse" }, to: "K09r_veilleuse" },
      { label: "Chercher, parmi les noms, ceux que tu connais", hide: { seen: "K09r_lampes_noms" }, to: "K09r_lampes_noms" },
      { back: "K09r_arriere" },
    ] },

  K09r_lampes_noms: { act: "III", title: "Des noms au col", place: "foire", ambiance: "temple",
    text: [
      "Tu longes les étagères. La plupart des noms ne te disent rien : des Mathieu, des Colas, des paroisses entières rangées ensemble, parce qu'on était venu ensemble.",
      { after: "monde:florizel_piece", text: "Sur une caisse, sept lampes pareilles, peintes chacune d'un petit soleil. *La troupe de maître Florizel. Non vus à la Foire : ils jouaient ce jour-là sur le parvis de la Tour.* Quelqu'un, d'une autre main, a ajouté sous la septième : *Colombe, qui faisait la Douzième.* L'encre en est pâle. La lampe est plus neuve que les six autres." },
      { before: "monde:florizel_piece", text: "Sur une caisse, sept lampes pareilles, peintes chacune d'un petit soleil. *La troupe de maître Florizel. Non vus à la Foire : ils jouaient ce jour-là sur le parvis de la Tour.*" },
      "Plus loin, une lampe seule, grosse, vernie de noir, sans flamme. *La mère Sept-Heures, devineresse. Baraque noire, entre les gaufres et les puces. Elle a défendu qu'on l'allume.* Dessous, un Veilleur consciencieux a noté : *Défense reçue de sa bouche, par une pincée, en 566. A dit : j'ai l'habitude du noir. A dit aussi une chose au frère qui l'éveillait ; le frère a quitté l'ordre.*",
      "Et, tout en bas, sur la planche des oubliés, une lampe de rien, ébréchée, avec un bout de ficelle rouge. *Un tire-laine, grande allée, la main dans la poche d'un bourgeois. On ne sait pas son nom. Priez pour lui aussi.* Elle est allumée. Quelqu'un la remplit.",
    ],
    choices: [{ back: "K09r_lampes" }] },

  K09r_veilleuse: { act: "III", title: "Vingt-deux ans, soixante-deux", place: "foire", ambiance: "temple",
    text: [
      "Elle a une soixantaine d'années, un châle noir, des mains de lingère. Elle est assise de biais, les yeux sur ses genoux. Tout le mur regarde la Foire. Elle, elle a choisi de regarder son tablier.",
      "Tu t'es arrêté{e}. Elle te parle sans lever la tête, en personne qui a besoin de le dire à quelqu'un qui s'en ira.",
      "« Elle est à quarante pas. La troisième à gauche du mât bleu, avec un panier de cerises. Elle rit. Elle venait de dire une bêtise à sa voisine, on le voit à la voisine. » Elle lisse son tablier. « C'est ma mère. Elle a vingt-deux ans. Moi, j'étais restée chez ma tante, à cause d'une rougeole. »",
      "« J'ai mon sable, comme tout le monde. Soixante ans que la Doyenne me dit que je peux, pour une fois, et que les autres le font. Je vais jusqu'à elle. Je la regarde rire. Et je reviens. » Elle lève enfin les yeux, qui sont clairs. « Qu'est-ce que je lui dirais ? Elle me demanderait où est sa petite. Elle la chercherait derrière moi. »",
      "Elle se tait. Puis, avec un petit mouvement d'épaules : « J'ai quarante ans de plus que ma mère. Je la gronderais. Je lui dirais de mettre un fichu, avec ce soleil. »",
    ],
    choices: [{ back: "K09r_lampes" }] },

  // ---------- the Regency ----------
  K09r_cantine: { act: "III", title: "La cantine de la Maîtrise", backName: "la cantine", place: "foire", ambiance: "champs", shop: "iii_cantine",
    text: [
      { first: true, text: "C'est une baraque de planches goudronnées, avec un comptoir, un auvent, et un cantinier manchot qui a été sergent. La Maîtrise des Sables y vend aux pèlerins tout ce qu'un pèlerin peut souhaiter au bord de ses morts : de la soupe, du pain, des veilleuses, et le sable du retour, pour ceux qui ont trop regardé." },
      { first: true, text: "Les prix sont à la craie, et ils ont été corrigés ce matin. « Le Serment, dit le manchot, qui a suivi ton œil. Trois jours avant, ça monte. Le jour même, ça double. C'est la loi du marché, à ce qu'on m'explique. Moi, je croyais que la loi, c'était le reste. »" },
      { first: true, text: "Il essuie une écuelle sous son moignon, avec une adresse de vieux soldat. « Si tu veux voir passer Son Altesse, c'est à la brune. Elle prend la Passerelle, avec toute la boutique. On ferme l'ouvrage aux pèlerins depuis vêpres. D'en bas, tu verras des semelles. »" },
      { again: true, text: "Le comptoir, l'auvent, les prix à la craie. Le manchot essuie." },
    ],
    choices: [{ back: "K09r_arriere" }] },

  K09r_passerelle: { act: "III", title: "La Passerelle du Serment", backName: "le pied de la Passerelle", place: "foire", ambiance: "champs", fx: { flag: "r:sait_passerelle" },
    text: [
      { first: true, text: "On ne déplace pas un dormant : il pèse plus que sa maison. La grande allée de la Foire en porte quatre mille, épaule contre épaule, de la Première jusqu'à la porte d'Occident, et c'était le seul chemin de Méridane. Le premier Régent est donc passé par-dessus." },
      { first: true, text: "L'ouvrage part du chaume par une rampe douce, faite pour des chevaux. Il monte à dix pieds, et là il devient une chaussée de madriers, large de deux toises, bordée de garde-fous, portée de quinze pas en quinze pas par des pilotis qu'on a plantés où il restait de la terre entre les gens. Il file au-dessus des chapeaux, tout droit, pendant une lieue. De loin, on dirait un pont sur une rivière de têtes." },
      { first: true, text: "Chaque Régent y a mis du sien. Le premier l'a bâti en sapin. Le second l'a refait en chêne et y a mis un tapis. La Régente actuelle a fait ôter le tapis, et poser, tous les cent pas, une lampe. Sur le premier pilotis, une plaque de cuivre dit : *Passerelle du Serment. Ouvrage provisoire. An 542.*" },
      { first: true, text: "Deux manteaux blancs gardent la rampe, la pique au pied. Un écriteau frais : *Passage de Son Altesse ce jour, à la brune. La Passerelle est fermée aux pèlerins de vêpres à matines.*" },
      { first: true, text: "Dessous, entre les pilotis, il fait une ombre rayée. Les dormants de la grande allée y sont comme sous une halle. On leur a bâti un toit sans leur demander, et ils continuent de regarder la Tour à travers les madriers." },
      { again: true, text: "La rampe, les deux manteaux blancs, la chaussée de bois qui s'en va sur les têtes." },
      { first: true, with: "jehan", text: "« La Garde n'y monte pas, dit Jehan. C'est aux blancs. Il y a eu des coups pour cela, du temps du père de Brassac. La Maîtrise voulait la Passerelle : qui tient la Passerelle tient l'entrée de la ville. » Il baisse la voix. « On nous disait que cela changerait. On ne nous disait pas quand. »" },
    ],
    choices: [{ back: "K09r_arriere" }] },

  // ---------- into the crowd ----------
  K09r_entree: { act: "III", title: "Dans le coup", place: "foire", ambiance: "ville", fx: { stock: { sable: -1 } },
    text: [
      "On entre dans la foule comme dans un taillis. Il faut chercher les jours : entre une hanche et un panier, sous un coude, derrière une voiture à bras. Ce que tu touches en passant reprend pour toi, un instant, sa mollesse de drap ou de chair, puis redevient pierre. Ceux contre qui tu t'appuies ne cèdent pas d'une ligne. Tu as l'impression de te glisser entre des statues qui seraient tièdes.",
      "La note monte à mesure que tu avances. Sur le chaume, c'était une pesée. Ici, c'est une voûte : elle a un toit, des piliers, elle te tient les côtes. Et il vient autre chose dessous, que tu prends d'abord pour ton sang dans tes oreilles, un froissement léger, immense, pareil au bruit d'un bois de bouleaux. Tu passes près d'une bouche, et tu comprends. C'est le *onze* de dix mille personnes, dit à mi-voix, chacune pour soi, et resté dans l'air à la hauteur des lèvres.",
      "Tu t'arrêtes pour souffler. Tout se tait d'un coup, la cloche, le chiffre, et tu te retrouves debout dans un silence de cave, le nez contre la nuque d'un marchand de sifflets. Tu repars. Tout revient.",
      "Les figures, vues de près, sont pires que les dos. Elles sont contentes. Elles ont cet air de fête qu'on prend pour compter les coups d'une grosse cloche, les sourcils un peu levés, l'œil en l'air, la bouche qui s'arrondit. Un homme tient son fils par le poignet et lui plie les doigts un à un : il en est au premier de la seconde main. Une fille a fermé les yeux, pour mieux entendre.",
      { with: "rouget", text: "Rouget te suit en te tenant par le pan de ta veste. Il passe où tu passes, de profil, en rentrant le ventre. « Y en a une qui m'a regardé, souffle-t-il. La grosse, avec les cerises. Je te jure. » Il se trouvait, simplement, où elle regardait." },
      "La Première est devant toi : trois marches de marbre, une borne, et dessus une grappe de gens qui se sont hissés là pour dominer les chapeaux. Un gamin est assis à califourchon sur la borne même.",
    ],
    choices: [{ label: "Faire le tour de la borne, du côté de l'ombre", to: "K09r_premiere", big: true }] },

  K09r_premiere: { act: "III", title: "La dalle, sous un talon", place: "foire", ambiance: "ville",
    text: [
      "Derrière la borne, du côté de l'ombre, les dalles du socle sont plus petites. L'une d'elles a du jeu. Tu la reconnais au joint, qui est propre : on l'a levée il y a trois jours, de ton côté ; il y a soixante ans, du sien.",
      "Elle a un talon dessus. Un talon de soulier à boucle, large, ciré, appartenant à un bourgeois en habit prune qui s'est reculé contre la borne pour laisser passer sa femme, et qui écrase de tout son poids de dormant le coin de la dalle où tu dois mettre les doigts.",
      "On ne pousse pas un pris. Tu regardes le soulier. Tu regardes la dalle. Elle fait un pied de côté, et le talon n'en tient qu'un angle, large comme trois doigts. La terre, dessous, est à toi dès que tu la touches. Tu sors ton couteau, tu te couches sur les marches, entre les jambes d'un enfant de chœur et le panier d'une marchande, et tu creuses par le flanc, sous la pierre, comme un blaireau.",
      "La terre vient par poignées, meuble, brune, d'une fraîcheur de cave. Tu en es au coude quand tes doigts rencontrent de la toile.",
      "Tu tires. Au-dessus de toi, le bourgeois prune regarde la Tour, avec satisfaction. Il ne saura jamais sur quoi il a mis le pied.",
    ],
    choices: [{ label: "Ouvrir le Cahier, le dos à la borne", to: "M09", big: true }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      girard_pris: { name: "Girard Noyer", f: false, aka: ["Girard"], face: { age: "enfant", skin: "hale", hair: "chatain", coif: "court", beard: "sans", eyes: "amande", iris: "noisette", nose: "retrousse", lips: "fines", shape: "carre" },
        aspect: { allure: "quatorze ans, debout sur un siège", habits: "une blouse, un fouet en l'air", signe: "les sourcils d'un seul trait" }, qui: "Le frère de Line, sur le halage.", desc: "Le frère aîné de Line. Il a quatorze ans depuis soixante ans, sur une charrette bleue, entre deux rangs de peupliers, à trente pas du bord." },
    },
    shops: {
      iii_cantine: { name: "La cantine de la Maîtrise", sells: [{ item: "pain", price: 1 }, { item: "veilleuse", price: 2 }, { item: "onguent", price: 4 }, { item: "fiole_sable", price: 15 }] },
    },
  },
};
