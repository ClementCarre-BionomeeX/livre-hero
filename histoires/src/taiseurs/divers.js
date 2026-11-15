// Lot "divers" of "Le Trésor des Taiseurs": no passages, only epilogue lines ("Ce qu'il advint") for the side quests
// whose echo tag was read by no later act and no ending. One line per outcome when a quest can end several ways.
// A state set by `set: { key: "value" }` is also the flag "key=value" (moteur.js, fx.set): the lines read it with
// `has`, the form the validator's echo rule (validateur.js, echoCheck) counts. A quest whose echo tag is never set
// (PF_faustin) is read through `quest`, which the rule counts too.
var X = {};

// Intent: Q(questId, ...conds) -> Cond = the quest is done, and every given condition holds
function Q(id) { var c = [{ quest: id }].concat([].slice.call(arguments, 1)); return c.length === 1 ? c[0] : { all: c }; }
function H(t) { return { has: t }; }
function N(t) { return { not: { has: t } }; }

X.epilogue = [
  // ------------------------------------------------------------------------------------------------- prologue
  { if: { all: [H("pq:lanternes"), H("pq:lanterne_donnee")] }, text: "**Couzi.** Il brûla la lanterne d'Odeline le jour de l'enterrement, sur la dernière marche de l'escalier d'eau. Il tria les lanternes de la Salve jusqu'à quatre-vingts ans, et garda toujours un panier à part pour celles qui portaient un nom." },
  { if: { all: [H("pq:lanternes"), N("pq:lanterne_donnee")] }, text: "**Couzi.** Il tria les lanternes de la Salve jusqu'à quatre-vingts ans, en trois paniers. Chaque lendemain de fête, il posa une lanterne sans nom en haut du panier des noms, pour Odeline." },

  { if: H("escarbol=paye"), text: "**Félicien Escarbol.** Il raconta longtemps au Lumignon qu'on l'avait payé rubis sur l'ongle au quai des Lanternes, en piles de vingt liards. Il en riait, et il s'acheta une bague de plus pour la main gauche." },
  { if: H("escarbol=renvoye"), text: "**Félicien Escarbol.** Il évita désormais le quai des Lanternes. Pour aller du Lumignon à la rue des Chaudronniers, il passa par le pont des Tanneurs, et la route lui prit un quart d'heure de plus." },
  { if: H("escarbol=saisie"), text: "**Félicien Escarbol.** Il revendit la vitrine d'Odeline au marché de la Saint-Michel, coussins compris. Le luth sans cordes resta trois ans dans sa boutique, et un hiver il le brûla." },

  { if: H("lagrue=paye"), text: "**Bénézet Lagrue.** Le reste de la dette, promis pour Pâques, attendit la Pentecôte, puis la Toussaint. Il écrivit des lettres de deuil sous son escalier jusqu'à sa mort, et trempa sa plume entre chaque ligne." },
  { if: H("lagrue=quitte"), text: "**Bénézet Lagrue.** Il écrivit à la plume d'oie jusqu'à sa mort, comme il l'avait dit. Parmi les modèles épinglés au mur de son échoppe, il en ajouta un : *Pour remercier d'une dette remise.*" },
  { if: H("lagrue=service"), text: "**Bénézet Lagrue.** Il tira son rideau de toile chaque fois qu'un homme de l'île des Changeurs passait sur le quai. Il copia pour les autres le reste de sa vie, et brûla chaque brouillon dans son brasero, devant le client." },

  { if: { all: [H("pf:dette"), H("pf:dette_quittance")] }, text: "**Ursin Gaudrel.** Il renvoya son commis la semaine suivante, pour une erreur d'écriture que le commis avait toujours niée. Il fit désormais signer chaque somme de son registre devant témoin." },
  { if: { all: [H("pf:dette"), H("pf:dette_bluff")] }, text: "**Ursin Gaudrel.** Il raya de son registre relié de fer les dettes des morts, celle de dame Carrus la première. Il prêta ensuite aux vivants, à des taux qu'il écrivait à l'encre fraîche, devant eux." },
  { if: { all: [H("pf:dette"), H("pf:dette_promesse")] }, text: "**Ursin Gaudrel.** Il garda la ligne à ton nom au fond de son registre relié de fer, sous ta signature. Il la relut chaque année à la Saint-Valentin, puis il tourna la page." },
  { if: { all: [H("pf:dette"), H("pf:dette_force")] }, text: "**Ursin Gaudrel.** Il porta plainte au Guet pour ses deux débardeurs, et le Guet rangea la plainte avec les autres. Celui qui avait perdu une dent la porta en pendentif, au bout d'une ficelle." },
  { if: { all: [H("pf:dette"), H("pf:dette_saisie")] }, text: "**Ursin Gaudrel.** Il exposa les pendules et les miroirs de la boutique Carrus derrière la grille de son comptoir, au pont aux Liards. Il les vendit un à un, à des clients qui demandaient d'où ils venaient." },

  { if: Q("PF_faustin"), text: "**Mamert.** Il creusa encore vingt hivers au cimetière des Noyés. Chaque printemps, il gratta de sa bêche la mousse de la barque de pierre, et il lava à l'eau de la Salve le passeur debout au bras tendu." },

  // ---------------------------------------------------------------------------------------------------- act I
  { if: H("ib:oublies"), text: "**Herminie.** Son four roulant fuma au même coin de la place jusqu'à sa mort, et la place sentit le miel chaque matin. Elle légua le fer à oublies à sa nièce, avec les armes gravées dedans et la manière de s'en servir." },
  { if: { all: [H("ib:oublies"), H("ib:cuvelier_tenu")] }, text: "**Anseaume Cuvelier.** Le collecteur des droits de place passa désormais devant le four d'Herminie en regardant son registre. Ses deux gardes, eux, achetèrent des oublies à l'anis." },
  { if: H("ib:crieur"), text: "**Wandrille.** Il cria les ordonnances de Salvèze du haut de sa borne jusqu'à sa mort, quel que fût celui qui les signait. Il fit tinter sa sonnette avant chacune, une seule fois, au creux de la main." },
  { if: H("ib:bonneteau"), text: "**Bréval.** Il quitta Salvèze par la porte du sud le soir même, sans sa planche et sans ses gobelets. On le revit à Orle, deux ans plus tard, un jour de foire, qui tirait les cartes aux charretiers." },
  { if: { all: [H("ib:pigeon"), H("ib:pigeon_mange")] }, text: "**Le pigeon bagué.** Les enfants du puits se passèrent sa bague de cuir rouge tout l'été, de main en main, comme une médaille. À la Cour aux Draps, on attendit le billet trois jours, puis on acheta un autre pigeon." },
  { if: { all: [H("ib:pigeon"), H("ib:guetteur_chasse")] }, text: "**Le guetteur des combles.** Il quitta Salvèze avec son chapeau de feutre, et sa soupente resta aux souris. Les six pigeons bagués de rouge nichèrent au Beffroi, et leurs petits y nichèrent après eux." },
  { if: { all: [H("ib:pigeon"), H("ib:guetteur_fui")] }, text: "**Le guetteur des combles.** Il changea de lucarne et de maître, et nota les passants d'une autre place pour d'autres gages. Il racheta une ardoise neuve le lendemain, chez un papetier du pont." },
  { if: { all: [H("ib:pigeon"), H("ib:guetteur_double")] }, text: "**Le guetteur des combles.** Il écrivit *Rien à signaler* en haut de son ardoise tout le printemps, et garda la moitié du grain, comme convenu. La Cour aux Draps le paya jusqu'à l'été pour des billets vides." },

  { if: { all: [H("ic:coffre"), H("ic_coffre=partage")] }, text: "**Nicole Aguesse.** Elle porta le parchemin des Aguesse chez un notaire de la rive gauche et se le fit lire trois fois. Elle apprit à reconnaître la forme de son nom écrit, et seulement celle-là." },
  { if: { all: [H("ic:coffre"), H("ic_coffre=rendu")] }, text: "**Nicole Aguesse.** Elle vendit le hanap d'argent pour payer un notaire de la rive gauche. Le procès des douze arpents dura onze ans, et elle le suivit jusqu'au bout, au premier rang, sous son chapeau de veuve." },
  { if: { all: [H("ic:coffre"), H("ic_coffre=vole")] }, text: "**Nicole Aguesse.** Elle garda le coffret sur sa cheminée, avec sa paille de seigle grise. Elle raconta aux voisines que son grand-père y avait mis *notre bien*, et qu'un jour quelqu'un l'avait emporté." },

  { if: { all: [H("ic:rosalie"), H("ic_rosalie=vus")] }, text: "**Rosalie Gaucelm.** Elle cousit pour son père, l'hiver suivant, un pourpoint de drap gris aux boutons de corne. Tibère le porta jusqu'à l'usure, et il fit repriser les coudes chez elle." },
  { if: { all: [H("ic:rosalie"), H("ic_rosalie=sait")] }, text: "**Rosalie Gaucelm.** Elle renvoya à Lothaire Brunel, par un commis, la bourse de la semaine, encore nouée. Elle paya ensuite sa chambre à la tâche, et elle prit deux tâches de plus." },
  { if: { all: [H("ic:rosalie"), H("ic_rosalie=laissee")] }, text: "**Rosalie Gaucelm.** Elle finit sa manche bleue et la livra le samedi. Les trois ducats de la semaine arrivèrent encore longtemps, et elle les prit comme ils venaient." },

  { if: { all: [H("ic:rogneur"), H("ic_rogneur=denonce")] }, text: "**Noé Quint.** Le prévôt le jugea pour fausse monnaie à la session de printemps, et on le pendit au pont de la Monnaie. Ce jour-là, les frappeurs arrêtèrent les balanciers une heure." },
  { if: { all: [H("ic:rogneur"), H("ic_rogneur=rien")] }, text: "**Ludovic Mauduit.** L'essayeur pesa des ducats rognés tout l'hiver, un grain de moins à chaque pièce. Il les nota dans un cahier à part, et la Monnaie lui demanda de le brûler." },
  { if: { all: [H("ic:rogneur"), H("ic_rogneur=ordre")] }, text: "**Ludovic Mauduit.** L'essayeur inscrivit au registre de la Monnaie une perte d'or « par la fonte ». Il pesa chaque ducat deux fois jusqu'à sa retraite, et il garda pour lui le chiffre de la seconde pesée." },
  { if: { all: [H("ic:rogneur"), H("ic_rogneur=protege")] }, text: "**La femme de Noé Quint.** Elle se leva de son lit à la fin de l'hiver. Le médecin passa encore deux fois, et Noé le paya en liards de cuivre, comptés sur la table." },

  { if: { all: [H("ic:reine"), H("ic_reine=vraie")] }, text: "**Gédéon.** Le marchand de vieux papiers vendit des copies de la Muette sous les arcades jusqu'à sa mort, sous verre, à trois ducats. Il racontait qu'il avait eu l'original entre les mains, et les clients riaient." },
  { if: { all: [H("ic:reine"), H("ic_reine=fausse")] }, text: "**Gédéon.** Il vendit encore beaucoup de belles copies de la reconnaissance de la reine, à trois ducats, sous sa plaque de verre. L'original dormit au fond de son coffre de cèdre, sous les quittances." },
  { if: { all: [H("ic:reine"), H("ic_reine=lothaire")] }, text: "**Gédéon.** Il revint de chez sa sœur, à Port-Vasier, après la Saint-Jean, et reprit sa place sous les arcades sans coffre de cèdre. Il refusa désormais tout papier qui portait le sceau aux trois besants." },
  { if: { all: [H("ic:reine"), H("ic_reine=laissee")] }, text: "**Gédéon.** Il garda l'original dans son coffre de cèdre jusqu'à sa mort. Ses neveux vendirent le coffre au poids, papiers compris, à un relieur du pont." },

  { if: H("ig_oeil=repris"), text: "**L'œil de pie.** Il retrouva l'étui de cuir rouge d'Odeline. Aux Gouttières, Fauvette raconta longtemps comment on le lui avait pris, et elle racontait l'histoire un peu autrement chaque soir." },
  { if: H("ig_oeil=achete"), text: "**L'œil de pie.** Fauvette porta tes deux ducats à la Reine des Gouttières le soir même. Elle garda le cordon de cuir autour du cou, vide, jusqu'à ce qu'il casse." },
  { if: H("ig_oeil=donne"), text: "**L'œil de pie.** Fauvette dormit mieux, disait-elle, depuis qu'elle voyait les menteurs de la même couleur que les autres. Elle se trompa ensuite sur les gens comme tout le monde, et elle trouva cela reposant." },
  { if: H("ig_oeil=partage"), text: "**L'œil de pie.** Fauvette le demanda souvent, d'abord, puis de moins en moins. La dernière fois, elle le tint devant les yeux d'un garçon des Halles qui lui faisait la cour, et elle le rendit en riant." },
  { if: H("ig_oeil=sauvee"), text: "**Boscot.** Il cassa encore des doigts pour la Reine des Gouttières, deux à la fois, selon sa justice. Sur les toits, il baissa les yeux chaque fois qu'il croisa Fauvette." },
  { if: H("ig:dette_reglee"), text: "**Les couverts de la Saint-Blaise.** Un pêcheur d'anguilles remonta le sac du canal des Gouttières l'été suivant, la soupière avec. Margaux Pelle le lui paya trois ducats, le prix exact de la dette de Fauvette." },
  { if: { all: [H("ig:fontaine_ouverte"), H("ig:porteuses")] }, text: "**Bérangère.** La porteuse apprit aux plus jeunes à tourner la couronne de la reine trois fois vers la mer, ensemble, une fois l'an. Elles touchèrent encore le petit croissant du socle en passant, comme leurs mères." },
  { if: { all: [H("ig:fontaine_ouverte"), N("ig:porteuses")] }, text: "**La Fontaine-Sourde.** La reine de pierre rendit son eau par les oreilles le lendemain matin, comme avant. Les porteuses trouvèrent la plaque des seaux déplacée d'un pouce, et Bérangère la remit en place du pied." },
  { if: H("ig_cloche=marcoul"), text: "**La cloche des fontainiers.** Marcoul la remonta au printemps, avec une chèvre et des palans, et le bronze partit au poids chez un fondeur. Le canal des Gouttières resta muet les nuits de grande marée, et Lubin dormit mal." },
  { if: H("ig_cloche=secret"), text: "**Lubin.** Le passeur du coude garda les deux pieux noirs pour lui, comme sa mère l'aurait voulu. Chaque nuit de grande marée, il arrêta sa barque au milieu du coude, la perche levée, le temps de dix respirations." },
  { if: H("ig_cloche=laissee"), text: "**La cloche des fontainiers.** Elle resta couchée sur le flanc entre ses deux pieux, la bouche vers la Salve. Marcoul et ses débardeurs la cherchèrent tout l'été au grappin, du mauvais côté du coude." },
  { if: H("ig_faux=demasque"), text: "**Rufin Ravoux.** Il replia son velours violet et quitta les Halles avant la fin de la semaine. On le retrouva à Orle, à la foire de la Saint-Martin, qui vendait des cheveux de la reine." },
  { if: H("ig_faux=medecin"), text: "**Quirin.** Le petit-fils de la veuve Pérenne guérit de la fièvre des marais au début de l'été. Sa grand-mère en remercia la dent de la reine, et le médecin ses tisanes." },
  { if: H("ig_faux=gildas"), text: "**Quirin.** Le petit-fils de la veuve Pérenne dormit cette nuit-là, et il guérit avant la Saint-Jean. Il voulut devenir moine, puis saunier, puis les deux." },

  { if: H("i4_barque=rendue"), text: "**Mélisende Jouve.** Elle pêcha l'anguille dans sa barque plate jusqu'à soixante ans. L'été suivant, elle la peignit en bleu vif, pour que les douaniers la reconnaissent de loin." },
  { if: H("i4_barque=perdue"), text: "**Mélisende Jouve.** Elle vida les anguilles des autres pour un liard la douzaine, aux Joncs. La douane vendit sa barque aux enchères, avec ses nasses, à un marchand de sel." },
  { if: H("i4_gages=rendus"), text: "**La boîte des gages.** Ceux du quai qui avaient retrouvé leur gage le portèrent le soir des Lanternes suivant. On vit sur le canal une alliance à un doigt, une croix de corail à un cou, et un sifflet de batelier qui appelait l'écluse." },
  { if: H("i4_gages=vendus"), text: "**La boîte des gages.** Tiercelin vendit les gages d'Odeline aux enchères, un par un, avec la dette. L'alliance partit à Port-Vasier, la croix de corail chez un orfèvre des Changeurs, et le sifflet de batelier chez un ferrailleur." },

  // --------------------------------------------------------------------------------------------------- act II
  { if: H("iij:espion_pris"), text: "**Ardouin Mesle.** Il passa l'hiver au fumoir de Cyprien, nourri d'anguilles. Au printemps, les pêcheurs le mirent sur une barque de sel pour Port-Vasier, son bonnet rouge sur la tête." },
  { if: H("iij:espion_double"), text: "**Ardouin Mesle.** Il écrivit à la Banque, jusqu'à l'été, les lettres qu'on lui dictait, d'une main de plus en plus sûre. Ensuite il garda sa barque neuve, et il apprit à pêcher pour de bon." },
  { if: H("iij:espion_fui"), text: "**Ardouin Mesle.** On revit son bonnet rouge une seule fois, sur la tête d'un enfant des Joncs qui jouait au douanier. Ses nasses neuves pêchèrent pour le village tout l'été." },
  { if: { all: [H("iij:pilotis"), N("joncs:brules")] }, text: "**Vivien Tessier.** Il grava au couteau, dans le pieu neuf, son nom et celui de la veuve Corre. La porte des Tessier ferma de nouveau, et Eulalie Corre lui apporta du poisson fumé chaque dimanche." },
  { if: { all: [H("iij:pilotis"), H("joncs:brules")] }, text: "**Vivien Tessier.** Quand on rebâtit les Joncs après l'incendie, il planta le premier pieu entre sa maison et celle d'Eulalie Corre. Les deux voisins y posèrent leurs galeries ensemble, au même niveau." },

  { if: { all: [H("iis:eudes"), H("iis:meen_revenu")] }, text: "**Eudes.** Il mourut l'hiver suivant, assis devant sa cabane qui penche. Méen chanta le couplet de la reine à l'enterrement, avec la voix trop forte de son grand-père." },
  { if: { all: [H("iis:eudes"), N("iis:meen_revenu")] }, text: "**Eudes.** Il mourut l'hiver suivant, assis devant sa cabane, les yeux sur la mer. Son petit-fils Méen apprit le couplet de la reine plus tard, sur la digue, de la bouche d'une saunière qui l'avait entendu ce jour-là." },
  { if: { all: [H("iis:noye"), H("iis:noye_laisse")] }, text: "**Hamon Lefeuvre.** Le curé l'enterra comme un homme tombé dans l'étier. Sa sœur garda ses sabots près de la porte, et elle les cira chaque samedi." },
  { if: { all: [H("iis:noye"), H("iis:machefer_aveu")] }, text: "**Mâchefer.** Il s'engagea sous un autre nom sur une gabare de sel de Port-Vasier. Chaque automne, il envoya à la sœur de Hamon Lefeuvre un sac de sel blanc, et elle le versa dans l'étier." },
  { if: { all: [H("iis:noye"), H("iis:machefer_parti"), N("iis:machefer_aveu")] }, text: "**Mâchefer.** Il prit la route du sud, son couteau à la ceinture. Des sauniers dirent l'avoir vu, des années plus tard, sur une saline d'Aveline, à compter les sacs d'un autre maître." },
  { if: H("iim:carte"), text: "**Bleiz.** Il resta chez Maître Lhermite à broyer le noir de fumée. À la mort du vieux cartographe, il hérita de la presse et des plaques, et il signa ses cartes des deux noms." },
  { if: H("iim:jaouen"), text: "**Jaouen.** Il garda son tablier et récura les chaudrons de Clervie jusqu'à ce que l'auberge lui revienne. Il interdit les dés sous son toit, et il tint parole." },

  { if: H("iie:goulven=paix"), text: "**Loïg Ker.** Il rangea le bol de Ronan sur l'étagère, au-dessus du lit clos. Les pêcheurs qui relâchaient à l'Ouïe l'entendirent parler à ce bol-là, les soirs de tempête, d'une voix tranquille." },
  { if: H("iie:goulven=huile"), text: "**Loïg Ker.** Il tailla chaque soir les sept mèches de l'Ouïe, très droit, jusqu'à la fin de sa vie. L'huile arriva de Port-Vasier deux fois l'an, et il compta les marches à voix haute à chaque barrique." },
  { if: H("iie:goulven=parti"), text: "**Loïg Ker.** Il finit l'hiver à Port-Vasier, au coin d'un feu, au milieu des gens. Au printemps, il guetta chaque soir, depuis le port, le moment où l'homme de la Veuve Corbière allumait la lampe de l'Ouïe." },
  { if: H("iie:fous"), text: "**Briac.** Il redescendit la falaise de l'île aux Fous chaque printemps, avec une corde neuve et un nœud que sa mère vérifiait. À quinze ans, il rapporta plus d'œufs bleus que Klervi, et il le lui dit." },
  { if: H("iie:jobic=temoin"), text: "**Jobic.** Il répéta devant un juge de Port-Vasier ce qu'il avait vu sur le pont du *Fidèle*, mot pour mot. L'année suivante, il cessa de boire et s'engagea sur une gabare de sel." },
  { if: H("iie:jobic=reste"), text: "**Jobic.** Il resta au camp des Écumeurs avec ses maquereaux et ses yeux rouges. Il suivit du regard chaque voile grise qui passait au large, jusqu'à ce qu'elle disparaisse." },
  { if: { all: [H("iie:jobic"), N("iie:jobic=temoin"), N("iie:jobic=reste")] }, text: "**Jobic.** Il marcha le long de la côte jusqu'à un village de goémoniers, où l'on ignorait tout du *Fidèle*. Il y ramassa le varech toute sa vie, et il réapprit à dormir." },

  { if: H("iit:chapelle"), text: "**Romée.** La sonneuse des noyés tira la cloche de Notre-Dame-des-Joncs chaque dimanche jusqu'à sa mort, pour les noyés de la semaine. Après elle, une fille de pêcheur prit la barque noire, et la même courroie." },
  { if: H("iit:vieille_partie"), text: "**La Vieille des vasières.** Des pêcheurs du large la virent passer un soir d'automne, longue comme une barque, dans le chenal de Port-Vasier. Aux Joncs, Ysoré chanta désormais sa berceuse aux enfants avec les mots du dessous." },
  { if: H("iit:vieille_morte"), text: "**La Vieille des vasières.** Sa carcasse sécha deux étés sur la vase rouge, et les enfants des Joncs y jouèrent à la baleine. Les nasses de la ligne se remplirent de nouveau, d'anguilles plus petites." },
  { if: { all: [H("iit:anguilles_ratee"), N("iit:vieille_partie"), N("iit:vieille_morte")] }, text: "**La Vieille des vasières.** Elle garda les Vasières-Rouges et la ligne de nasses. Les pêcheurs des Joncs posèrent les leurs ailleurs, comme Cyprien l'avait dit, et ils saluèrent le chenal en passant." },
  { if: { all: [H("iit:dentelle"), H("iit:herle")] }, text: "**Gwenola.** Elle épousa Herlé à la Saint-Michel, contre l'avis de son père. Herlé quitta la tour des douanes pour une barque des Joncs, et il rangea le col blanc de lait dans un linge, au fond de son coffre." },
  { if: { all: [H("iit:dentelle"), N("iit:herle")] }, text: "**Gwenola.** Elle garda pour elle ce que disait son col. L'hiver suivant, elle cousit des cols de fête pour la Saint-Jean, au bout de la passerelle, des cols blancs de lait au motif tout uni." },
  { if: H("iit:passeur"), text: "**Maclou.** Il passa des gens dans sa barque verte jusqu'à sa mort, cent quarante, puis deux cents. Chaque Noël, Firmine lui fit porter de Port-Vasier un sac de sel." },
  { if: { all: [H("iit:passeur"), H("iit:firmine_dit")] }, text: "**Firmine.** Elle acheta une maison à Port-Vasier avec les trois pièces de son homme. Ses deux enfants y grandirent, à deux jours de barque du maître saunier de Grisemotte." },

  // -------------------------------------------------------------------------------------------------- act III
  { if: H("iiic:capitaine=pris"), text: "**Wendel Haquin.** Le capitaine aux chevau-légers passa l'été dans un cachot de Salvèze, sous son nom de marchand de vin. À l'automne, on l'échangea contre deux marchands de la ville retenus à Aveline." },
  { if: { all: [H("iiic:capitaine=libre"), N("iiic:capitaine=pris"), N("iiic:capitaine=marche")] }, text: "**Wendel Haquin.** Il rentra à Aveline par la route du nord et porta au duc ce qu'il avait vu des Combes. Il rapporta aussi une barrique de vin d'Orle, pour la table de messeigneurs, et c'est tout ce qu'il acheta du voyage." },
  { if: { all: [H("iiic:capitaine=marche"), N("iiic:capitaine=pris")] }, text: "**Wendel Haquin.** Il remit au duc l'étui de cuir et ses trois feuillets. Il raconta longtemps à la cour le marché de l'auberge d'Orle, et il dit que c'était le seul qu'il eût perdu." },
  { if: { all: [H("iiim:terres"), H("iiim:terres_rendues")] }, text: "**Landry Courtet.** Il tailla la vigne du saule jusqu'à sa mort, en franc-alleu, comme son grand-père. La borne resta au pied du saule, et il y posa la main chaque matin en passant." },
  { if: { all: [H("iiim:terres"), H("iiim:terres_perdues")] }, text: "**Landry Courtet.** Il chargea sa charrette, sa mère assise sur le coffre, et il descendit à Orle se louer à la journée. La vigne du saule donna son vin à la Maison Marrel." },

  // --------------------------------------------------------------------------------------------------- act IV
  { if: { all: [H("ivv:grenier_ouvert"), N("ivv:grenier_partage")] }, text: "**Le grenier de la Halle aux Blés.** La foule le vida en une nuit, à pleines brassées, et les plus forts emportèrent le plus. Le quartier des Halles mangea du pain blanc trois semaines, puis la faim revint." },
  { if: { all: [H("ivv:grenier_partage"), N("ivv:sable")] }, text: "**Jacomet.** Il tint le registre du blé de la Halle jusqu'au dernier sac, à la livre, nom par nom. Il garda ce registre toute sa vie, et il le montra aux échevins chaque fois qu'on parla de disette." },
  { if: { all: [H("ivv:grenier_perdu"), N("ivv:grenier_partage"), N("ivv:grenier_ouvert")] }, text: "**Le grenier de la Halle aux Blés.** Ses portes battirent au vent tout l'été, sur un grenier vide. Les gamins des Halles y jouèrent entre les solives, dans une poussière qui sentait encore le blé." },
  { if: H("ivv:sable"), text: "**Les sacs de sable.** On les vida devant les Halles brûlées, un par un, sous les yeux des échevins. Le sable resta en tas tout l'été, et les enfants du quartier y bâtirent des tours." },
  { if: H("ivv:toits_paix"), text: "**La capitaine Mabire.** Elle garda une copie de sa trêve dans son registre de garde, avec la mention *faute d'hommes*. Les Gouttières tinrent leur ordre elles-mêmes, à leur manière, tout l'été." },
  { if: { all: [H("ivv:toits_assaut"), N("ivv:toits_paix")] }, text: "**Les Gouttières.** Les gamins aux brassards rouges gardèrent leurs tas de tuiles derrière les cheminées longtemps après l'assaut. Le quartier changea ses passerelles à chaque saison, et le chemin du lavoir avec." },
  { if: { all: [H("ivv:vase_rendu"), H("ivv:apolline_vivante")] }, text: "**Fortuné.** Il rangea son bâton de fouilleur le lendemain. À la Saint-Martin, il partit à pied pour Aveline, l'anneau d'argent au petit doigt, chercher sa fille et ses petits-enfants." },
  { if: { all: [H("ivv:vase_rendu"), N("ivv:apolline_vivante")] }, text: "**Fortuné.** Il porta l'anneau d'argent à moitié enfoncé sur son petit doigt jusqu'à sa mort. Il cessa de fouiller la vase, et il vendit ses lanternes de fer-blanc aux ferrailleurs du quai." },
  { if: H("ivv:vase_garde"), text: "**Fortuné.** Il fouilla le fond du canal à chaque basse eau, son bâton planté tous les trois pas. Il mourut l'hiver d'après, sur la dernière marche de l'escalier d'eau, les jambes noires de vase." },
  { if: H("ivv:bannieres_brulees"), text: "**Maîtresse Lesueur.** Ses apprenties ramassèrent dans le ruisseau de la rue des Dames des glands d'argent pour leurs ourlets. Elle cousit désormais du noir, du rouge et du vert, et refusa le bleu à toutes ses pratiques." },
  { if: H("ivv:bannieres_preuve"), text: "**Maîtresse Lesueur.** Elle ouvrit ses livres de comptes à qui voulut les lire. Elle y avait noté soixante bannières bleues, au prix du drap, et le nom de la maison qui les payait." },
  { if: { all: [H("ivv:bannieres_perdues"), N("ivv:bannieres_brulees"), N("ivv:bannieres_preuve")] }, text: "**Maîtresse Lesueur.** Elle toucha le prix des soixante bannières bleues et ferma son arrière-salle à clé. Les apprenties de la rue des Dames chantèrent plus bas, cet été-là." },
  { if: H("tribun:fils_libre"), text: "**Galmier Vimeux.** Son bras démis se remit mal, et il garda l'épaule gauche plus basse que l'autre. Il apprit le sel avec son père, et parla plus tard aussi fort que lui dans les assemblées du port." },
  { if: { all: [H("tribun:fils_perdu"), N("tribun:fils_libre")] }, text: "**Galmier Vimeux.** Il fit ses cinq ans sur les pontons de la Salve et en revint à vingt-deux ans, avec la barbe de son père. Le tribun l'attendait sur le quai, et ils rentrèrent à la Grenouille en parlant de la pêche." },
  { if: H("gilet:verite"), text: "**Babette.** Les laveuses de Salvèze parlèrent tout l'hiver de la tour carrée brodée au coin des draps. Babette lava le linge de l'hôtel Delisle jusqu'au bout, et elle le battit plus fort que les autres." },
  { if: { all: [H("gilet:paix"), N("gilet:verite")] }, text: "**Babette.** Elle enterra Gilet le jeudi, et elle fit dire pour lui une messe chaque année, au jour où on l'avait repêché. Elle crut toute sa vie qu'il était tombé du quai." },
  { if: H("ivb:agasse_libre"), text: "**Jocelyn Agasse.** Il rentra chez Ursule au matin, les mains brûlées, et il dormit deux jours. Il rouvrit son atelier de serrurier et refusa toute commande de l'île des Changeurs, même au double du prix." },
  { if: { all: [H("ivb:sorti"), N("ivb:agasse_libre")] }, text: "**Jocelyn Agasse.** Il resta dans sa cellule de la Banque jusqu'à l'automne. Ursule Agasse tint sa place sur le quai des Changeurs, son panier à ses pieds, chaque jour de ce temps-là." },
  { if: H("ivm:grenier"), text: "**Le blé des Fourcaud.** La laveuse aux mains rouges eut de quoi faire du pain pour ses trois enfants jusqu'à la moisson. La maison Fourcaud fit savoir qu'on l'avait volée, et elle le fit savoir à voix basse." },

  // ---------------------------------------------------------------------------------------------------- act V
  { if: H("vn:rameurs_libres"), text: "**La Fidèle.** La marée suivante souleva la galère et l'emporta vers le large, ses rameurs assis à leurs bancs, les chevilles libres. Les pêcheurs de la balise la virent passer à l'aube, droite, sans voile." },
  { if: { all: [H("vt:secretaires"), H("vt_secretaires=paix")] }, text: "**Les sept secrétaires.** Ils restèrent sous Sorne, assis sur leur banc, leurs jetons d'ambre sur les genoux. La mer recouvrit leur chambre le soir même, et ils gardèrent la reine comme avant." },
  { if: { all: [H("vt:secretaires"), H("vt_secretaires=noms"), N("fin:noyade")] }, text: "**Les sept secrétaires.** Tu rapportas leurs sept noms aux Hautes-Eaux. Dans les familles qui les portaient, à Noël, on s'arrêta sur chacun d'eux, et on raconta son histoire." },
  { if: { all: [H("vt:secretaires"), H("vt_secretaires=noms"), H("fin:noyade")] }, text: "**Les sept secrétaires.** Leurs noms, dits une fois à voix haute sous la voûte, restèrent avec eux sous Sorne. La chambre garda son calme, et la mer y entra doucement." },
  { if: { all: [H("vt:secretaires"), H("vt_secretaires=jetons")] }, text: "**Les jetons d'ambre.** Les sept disques gardèrent leur accord, et ils vibrèrent ensemble chaque fois qu'une même main les tint. Sous Sorne, les sept secrétaires restèrent sur leur banc, les mains ouvertes." },
];

module.exports = { passages: {}, extras: X };
