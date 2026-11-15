// Lot v1 of "Le Trésor des Taiseurs": the night of the Great Ebb, the crossing of drowned Sorne (act V). The sea
// withdraws for about six hours (clock "maree", 0 to 6; at 6 the sea comes back, one clear way leads to VF_noyade).
// The Sea Gate, the square of the Four Wells (hub), the queen's palace, the drowned cathedral, the galley harbour,
// Aymeric Vasse's house, the square of the Comptoirs; the doors of the Taiseurs (hidden words, force or guile), the
// drowned guards, the race against Lothaire, the Bank and Aveline's soldiers; three side quests, seven treasures;
// the last door (VN_porte) and the way down to the treasure hall (VT_seuil, lot v2).
var P = {};
// the conditions this lot reads often (data only)
var LIBRE = { not: { any: [{ has: "lothaire:vaincu" }, { has: "lothaire:mort" }, { has: "lothaire:allie" }] } };
var COURSE = { all: [LIBRE, { not: { has: "vn:lothaire_retarde" } }] };
var KEYS = [{ voile: "vn_cle_vasse" }, { voile: "vn_cle_comptoirs" }, { voile: "vn_cle_crypte" }, { voile: "vn_cle_palais" }, { voile: "vn_cle_nage" }];
function M(min, max) { var c = { clock: "maree", min: min }; if (max !== undefined) c.max = max; return c; }
var MER = M(6);

// ==================================================================== the ebb, the strand, the Sea Gate
Object.assign(P, {
  V_debut: { act: "V", title: "La Grande Basse", place: "sorne",
    fx: { ep: ["seance", 1500], questSeen: "V_sorne" },
    text: [
      "Vous mouillez au crépuscule, à trois encablures de la balise de Sorne : un mât de chêne noir planté en pleine mer, coiffé d'une cage de fer où les pêcheurs de Port-Vasier allument un feu une nuit par an. Ce soir, la cage est vide. L'eau est plate et grise jusqu'à l'horizon. Au nord, la côte des Hautes-Eaux fait une ligne basse de roseaux, et plus loin, très loin, une lueur rousse : Salvèze, qui veille.",
      "La lune se lève à l'est, pleine et jaune. Alors la mer commence à partir. Un courant tire sur l'ancre, la surface entière se met à aspirer avec un bruit de bassin qu'on vide, des remous tournent le long de la coque. En une heure, la balise sort de l'eau de trois toises, noire de moules jusqu'à la cage. Sous la quille, quelque chose racle : une pierre taillée, avec une moulure.",
      "Et Sorne se lève. D'abord une flèche, cassée en biseau, que la lune éclaire par le travers. Puis deux tours carrées que tu prends pour des rochers jusqu'à ce que la lumière passe par leurs fenêtres. Puis les toits, des centaines, couverts de coquillages blancs, et les rues, pleines d'algues brunes couchées toutes dans le même sens, celui de la mer qui s'en va. Au milieu d'une place, une galère est posée de travers, son mât appuyé contre une façade, ses avirons pendus le long de la coque.",
      "L'air sent la vase, le varech et la pierre froide. De la ville monte {{echo#vn_debut_ville|un grand bruit d'eau qui s'égoutte de partout à la fois|le bruit d'une ville qui vit encore : des volets qu'on rabat, un chien, une cloche, et une femme qui appelle un enfant par son nom, deux fois, puis plus du tout}}.",
      { if: { has: "basse:bateau" }, text: "Le bateau que tu as trouvé pour cette nuit tient bien sa place : une coque solide, deux ancres, un mât qu'on voit de loin. Il sera là au retour, si quelqu'un reste à bord pour le garder.", else: "La barque que tu as pu trouver est trop petite pour cette mer et trop lourde pour être tirée sur la vase. Elle prend l'eau par une couture, à l'arrière, et il faut écoper toutes les heures." },
      { if: { has: "basse:equipage" }, text: "L'équipage que tu as rassemblé se tait en regardant la ville sortir de l'eau. Un gros homme fait le signe contre le mauvais œil, puis il le fait une deuxième fois, pour les autres. Ils ont tous accepté de descendre avec toi jusqu'à la porte de Mer, et de tenir la grève." },
      { if: { has: "basse:taiseurs" }, text: "À cinquante brasses, une barque des Joncs-Bas dérive sans rames. Trois Taiseurs y sont assis, immobiles, leurs capuchons de dentelle rabattus. Le plus vieux, que les autres appellent l'Aîné, lève la main vers toi, la paume ouverte, le pouce replié : le signe qui veut dire *nous écoutons*." },
      { with: "salome", text: "Salomé a sorti la table des marées, recopiée de sa main, et elle la lit à la lanterne en suivant les chiffres du doigt. « Six heures, dit-elle. Six heures de la basse au flot, et le flot, ici, monte au galop. À la cinquième heure, on remonte, trésor ou pas trésor. Je {{oreille#vn_salome_six|veux que tu me le promettes|ai déjà perdu quelqu'un qui disait encore une heure}}. »" },
      { without: "salome", text: "La table des marées que tu as recopiée à Salvèze est pliée dans ta manche. Six heures, de la basse au flot. Le vieux maître de port qui te l'a vendue a ajouté, du bout de l'ongle, sous la dernière ligne : *et le flot monte au galop*." },
      { with: "salome", if: { has: "ivm:heure_juste" }, text: "Tu lui dis la ligne gravée au dos de l'astrolabe : la mer se tait à Sorne une demi-heure plus tard qu'à la Salve. Salomé corrige sa table d'un trait d'ongle. « Une demi-heure de plus au bout, dit-elle. Je la garde pour la remontée, pas pour l'or. »" },
      { without: "salome", if: { has: "ivm:heure_juste" }, text: "Sous la dernière ligne de la table, tu ajoutes d'un trait d'ongle la demi-heure du sel, gravée au dos de l'astrolabe. Tu la gardes pour la remontée." },
      { with: "lison", text: "Lison se tient debout à la proue, les bras croisés, et regarde la ville de ses ancêtres sortir de la mer. Elle a les yeux secs. « Ma grand-mère m'a chanté Sorne tous les soirs pendant quinze ans, dit-elle. Les rues, les portes, le nom des fontaines. Je {{oreille#vn_lison_sorne|croyais que c'étaient des berceuses|savais déjà que je viendrais ici un jour pour mourir, ou pour la venger}}. »" },
      { with: "gildas", text: "Frère Gildas a joint les mains, et il regarde, les lèvres serrées, comme on regarde un visage qu'on a connu. « Les frères du Mont disent qu'aucun Taiseur n'est entré dans Sorne depuis cent ans, dit-il. Je ne sais pas si c'est vrai. »" },
      { with: "tibere", text: "Tibère se gratte la moustache. « Au Guet, on racontait que les noyés de Sorne sortaient à la Grande Basse pour compter leurs sous. J'ai toujours trouvé que c'était une histoire de sergent. » Il regarde la galère dans sa place. « Je {{oreille#vn_tibere_noyes|vais finir par la croire|ai promis à Rosalie de revenir, et je n'ai jamais tenu une promesse de ma vie}}. »" },
      { with: "fauvette", text: "Fauvette s'est perchée sur le plat-bord, accroupie, les yeux brillants. « Des toits, souffle-t-elle. Une ville entière de toits, et personne dessus. » Puis, plus bas : « Ça glisse, les coquillages ? »" },
      "Tu as {{miroir#vn_debut_miroir|attendu cette nuit pour rendre la Charte à ceux qu'on a volés|attendu cette nuit parce que, depuis la mort d'Odeline, chercher est la seule chose qui te tienne debout}}.",
    ],
    choices: [
      { label: "Mettre pied sur la grève de Sorne", big: true, to: "V_greve" },
    ] },

  V_greve: { act: "V", title: "La grève de Sorne", place: "sorne",
    text: [
      "La quille se couche dans la vase avec un soupir. Tu sautes : la grève est dure sous une main d'algues, faite de sable et de tessons. Devant, à deux cents pas, le rempart de Sorne barre la nuit : un mur de pierre grise couvert de moules jusqu'aux créneaux, et au milieu, entre deux tours rondes, la porte de Mer, fermée par une herse de bronze vert.",
      "Le long du rempart, la mer a laissé ses choses : des crabes qui fuient de biais vers l'eau qui recule, une ancre plus haute qu'un homme, un banc de poissons argentés qui se débattent dans une flaque. Et partout le bruit de l'eau, qui court sous les algues, dans les fentes, dans les égouts de la ville, vers le large.",
      { if: LIBRE, text: "À l'est de la grève, une seconde barque est déjà tirée sur la vase : une coque fine, peinte en gris. Des lanternes sourdes bougent le long du rempart. Une silhouette en manteau, gants gris, regarde de ton côté sans se presser, puis se détourne. Lothaire Brunel est arrivé avant toi." },
      { after: "lothaire:allie", text: "Lothaire Brunel descend de ta barque le dernier, ses gants gris à la main, en regardant ses bottes s'enfoncer dans la vase avec dégoût. Il a juré de t'aider contre Corisande. Il regarde le rempart comme on regarde le coffre de quelqu'un d'autre." },
      { if: { not: { any: [LIBRE, { has: "lothaire:allie" }] } }, text: "À l'est de la grève, une barge de la Banque est tirée sur la vase, large et plate, avec la bannière noire aux besants d'or roulée sur sa hampe. Une douzaine d'hommes en descendent avec des pelles, des cordes et des pinces. Sans Lothaire, ils ont l'air de déménageurs envoyés dans un cimetière." },
      { before: "prevot:dejoue", text: "Au large, dans l'ouest, trois coques plus hautes que les autres ont jeté l'ancre là où l'eau reste profonde. Des chaloupes en descendent, chargées d'hommes, et la lune accroche des cuirasses : des soldats d'Aveline. Le prévôt a vendu au duc l'heure de la Grande Basse avec le reste." },
      { after: "prevot:dejoue", text: "Au large, la mer est vide jusqu'à l'horizon. Le duc d'Aveline ignore tout de cette nuit : le prévôt a échoué à la lui vendre." },
      { if: { has: "basse:equipage" }, text: "Tes gens tirent la barque au-dessus de la ligne des algues et plantent une perche avec une lanterne au bout. « On tient la grève, dit le gros homme. On allume un feu si quelqu'un vient. On souffle dans la conque si la mer revient. »" },
      { if: { has: "basse:taiseurs" }, text: "Les trois Taiseurs ont tiré leur barque à côté de la tienne. L'Aîné marche jusqu'au rempart et pose la paume à plat sur la pierre, longtemps. Puis il revient vers toi et dit, sans te regarder : « La ville {{oreille#vn_aine_ville|est grande, il faut se hâter|a sept portes qui parlent, et je ne connais les mots que de deux}}. »" },
      { with: "fauvette", text: "Fauvette ramasse un coquillage sur la grève, le retourne, le jette. « Ils ont tous la même forme, dit-elle. Les toits, tout à l'heure. Ce sont des huîtres. Des millions d'huîtres. » Elle a l'air presque vexée qu'on ne puisse pas les voler toutes." },
    ],
    choices: [
      { label: "Observer les autres barques et ce qu'on y décharge", hide: { seen: "VN_greve_guet" }, to: "VN_greve_guet" },
      { label: "Marcher jusqu'à la porte de Mer", big: true, to: "V_porte_mer" },
    ] },

  VN_greve_guet: { act: "V", title: "Les autres barques", place: "sorne",
    fx: { flag: "vn:guet", ep: ["perso", 400] },
    text: [
      "Tu t'accroupis derrière l'ancre géante et tu regardes. Chacun est pressé, chacun a ses ordres, et ton ombre se perd dans celle de l'ancre.",
      { if: LIBRE, text: "Les hommes de Lothaire laissent la porte de Mer de côté et longent le rempart vers l'est, à la file, avec une échelle de corde et un tonneau qu'ils portent à deux. Lothaire marche en tête, le cornet jumeau à l'oreille, en s'arrêtant tous les vingt pas pour écouter le mur. Il passera par le haut. Il aura besoin d'une heure pour trouver un endroit sûr, peut-être moins." },
      { if: { not: LIBRE }, text: "Les hommes de la Banque se partagent la grève à grands cris. Celui qui commande est un homme carré, une chaîne d'argent sur la poitrine : Léandre Escoffe, le capitaine des gardes de Corisande. Il crie à ses gens de chercher {{oreille#vn_berald_or|la Charte avant toute chose|l'or d'abord, la Charte si on la croise, et de ne rien rapporter à la vieille de ce qui tient dans une poche}}." },
      { before: "prevot:dejoue", text: "Les chaloupes d'Aveline accostent plus au sud, du côté où le rempart s'est effondré en pente douce. Les soldats sautent dans la vase jusqu'aux genoux et se forment en carré, piques droites, comme sur un champ de foire. Un officier crie des ordres en langue du nord. Ils vont vers le port des galères : tu vois de là-bas la mâture des épaves." },
      "La barge de la Banque {{pie#vn_barge|est lourdement chargée de pelles, de barres et de cordages|est lourdement chargée, et sous la bâche il y a des barils de poix et de salpêtre : de quoi faire sauter une porte, ou un mur entier}}.",
      { with: "tibere", text: "Tibère regarde lui aussi. « Ils sont deux fois plus nombreux que nous, dit-il, et ils ont des pelles. Nous, on a des oreilles. » Il crache dans la vase. « J'espère que ça vaut des pelles. »" },
    ],
    choices: [
      { label: "Marcher jusqu'à la porte de Mer", big: true, to: "V_porte_mer" },
    ] },

  V_porte_mer: { act: "V", title: "La porte de Mer", place: "sorne", backName: "la porte de Mer",
    text: [
      { first: true, text: "La porte de Mer est un passage voûté entre deux tours rondes, assez large pour deux charrettes. Une herse de bronze vert la ferme jusqu'au sol, chaque barreau épais comme un bras, et la mer a soudé ses pointes dans le sable. Au-dessus de la voûte, un visage de bronze plus grand que nature : un homme aux yeux ouverts, aux lèvres closes, cousues d'un trait de métal. Le premier muet des Taiseurs. Sous lui, gravée dans la pierre, une ligne d'écriture que les moules ont épargnée." },
      { again: true, text: "La porte de Mer, sa herse verte, le visage de bronze aux lèvres cousues." },
      "L'inscription dit : *{{loupe#vn_pm_inscr|Ici finit la mer et commence la reine|Dis à la bouche close : la mer se tait, je parle pour elle}}.*",
      "Sous la voûte, derrière la herse, l'air garde {{echo#vn_pm_echo|une odeur de fourrage pourri et de chevaux morts|une voix d'homme, basse et pressée : « Écoute bien, petit. La mer se tait, je parle pour elle. Tu le dis à la bouche, et la grille monte. Tu ne l'écris nulle part »}}.",
      "La herse {{pie#vn_pm_herse|est d'un seul bloc de bronze, scellée dans le seuil|est d'un seul bloc, mais son contrepoids, dans la tour de gauche, ne tient plus qu'à une chaîne rongée par le sel jusqu'au tiers}}. La tour de gauche a une fenêtre basse, à hauteur d'homme, que la mer a élargie.",
      { if: COURSE, text: "Loin vers l'est, sur le rempart, une lanterne sourde monte le long du mur, lentement. Lothaire passe par le haut." },
    ],
    choices: [
      { label: "Dire à la bouche close : « La mer se tait, je parle pour elle »", hide: { not: { any: [{ voile: "vn_pm_inscr" }, { voile: "vn_pm_echo" }] } }, fx: { set: { vn_porte_mer: "parole" } }, to: "VN_pm_parole" },
      { label: "Laisser l'Aîné des Taiseurs dire ce qu'il sait", hide: { any: [{ not: { has: "basse:taiseurs" } }, { voile: "vn_pm_inscr" }, { voile: "vn_pm_echo" }] }, fx: { set: { vn_porte_mer: "taiseurs" } }, to: "VN_pm_parole" },
      { label: "Entrer dans la tour de gauche et trancher la chaîne rongée", hide: { not: { voile: "vn_pm_herse" } }, to: "VN_pm_chaine" },
      { label: "Lever la herse à la force des bras, avec des barres de fer", fx: { clock: { maree: 1 } },
        test: { dom: "combat", diff: -20, label: "Soulever une herse de bronze", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }, { if: { has: "basse:equipage" }, v: 15 }] },
        win: { fx: { set: { vn_porte_mer: "force" } }, to: "VN_pm_force" }, lose: { to: "VN_pm_rejete" } },
      { label: "Longer le rempart jusqu'à une brèche, au sud", fx: { clock: { maree: 1 } }, to: "VN_pm_breche" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: -10, label: "Fauvette passe entre les barreaux du haut" },
        win: { fx: { set: { vn_porte_mer: "fauvette" }, conf: { fauvette: 5 } }, to: "VN_pm_fauvette" }, lose: { fx: { clock: { maree: 1 } }, to: "VN_pm_breche" } },
    ] },

  VN_pm_parole: { act: "V", title: "La bouche close", place: "sorne",
    fx: { ep: ["seance", 2000] },
    text: [
      { if: { is: { vn_porte_mer: "parole" } }, text: "Tu t'approches de la tête de bronze jusqu'à sentir le froid du métal sur ta joue. Les lèvres cousues ont une fente, très fine, au coin gauche. Tu y dis la phrase à mi-voix, comme on la dirait à un enfant endormi : « La mer se tait, je parle pour elle. »" },
      { if: { is: { vn_porte_mer: "taiseurs" } }, text: "L'Aîné s'avance, retire son capuchon de dentelle et approche sa bouche de la fente, au coin des lèvres de bronze. Il dit quelque chose que tu entends sans le comprendre : des mots de tous les jours, posés dans un ordre étrange, comme un inventaire. Puis il recule, et il te regarde enfin. « Mon grand-père me l'a appris, dit-il. Je ne l'avais jamais dit. »" },
      "D'abord rien. Puis, dans la tour de gauche, un bruit de chaîne qui se dévide, un grincement qui monte dans les pierres, et la herse s'arrache du sable avec un bruit de succion. Elle monte d'une toise, de deux, puis s'arrête, et l'eau de mer qui dormait dans ses barreaux tombe en pluie sur le seuil.",
      "Sous la voûte, des algues pendent comme des rideaux. Au bout, la ville.",
      { with: "lison", text: "Lison passe la première, sans attendre, et touche du plat de la main le mur de la voûte en passant, comme on touche l'épaule de quelqu'un qu'on retrouve. Elle se tait, et pourtant ses lèvres bougent." },
      { with: "gildas", text: "Frère Gildas regarde la herse levée un long moment. « Trois cents ans, dit-il. Et elle obéit encore. » Il passe sous la voûte la tête baissée." },
    ],
    choices: [
      { label: "Entrer dans Sorne", big: true, to: "V_hub" },
    ] },

  VN_pm_chaine: { act: "V", title: "La chaîne du contrepoids", place: "sorne",
    text: [
      "La fenêtre de la tour de gauche est une gueule de pierre ouverte sur le noir. Tu t'y glisses. Dedans, l'eau t'arrive aux genoux, froide à couper le souffle. Un treuil de chêne noir, gros comme un tonneau, monte jusqu'au plafond, et une chaîne s'enroule dessus pour plonger dans un puits, où pend le contrepoids : un bloc de pierre de la taille d'un lit.",
      "La chaîne est rongée là où l'œil de pie l'a montrée. Trois maillons ne tiennent plus que par un fil de fer rouillé.",
      { with: "salome", text: "Salomé passe la main sur les maillons. « Si ça casse d'un coup, le contrepoids tombe, et la herse monte comme un bouchon. Et tout ce qui dort dans le coin se réveille au bruit. » Elle sort son coutelas de bord. « Je coupe. Tu te tiens loin du puits. »" },
    ],
    choices: [
      { label: "Frapper les maillons rongés de toutes tes forces", test: { dom: "combat", diff: 0, label: "Briser une chaîne pourrie", help: [{ with: "salome", v: 15 }, { with: "tibere", v: 10 }] },
        win: { fx: { set: { vn_porte_mer: "chaine" }, ep: ["perso", 800] }, to: "VN_pm_force" }, lose: { fx: { pv: -4, clock: { maree: 1 } }, to: "VN_pm_force" } },
      { label: "Limer le fil de fer sans bruit, maillon après maillon", fx: { clock: { maree: 1 } }, test: { dom: "discretion", diff: 0, label: "Ouvrir une herse sans réveiller la ville" },
        win: { fx: { set: { vn_porte_mer: "chaine" }, flag: "vn:pm_silence", ep: ["perso", 1000] }, to: "VN_pm_parole_silence" }, lose: { to: "VN_pm_force" } },
    ] },

  VN_pm_parole_silence: { act: "V", title: "La herse", place: "sorne",
    text: [
      "Le dernier maillon cède entre tes mains, et tu retiens la chaîne une seconde, de tout ton poids, avant de la lâcher. Le contrepoids descend dans son puits avec un frottement long, et dehors la herse monte, lentement, en pleurant son eau sur le seuil. Aucun bruit plus fort qu'une vague.",
      "Tu ressors par la fenêtre, trempé{e} jusqu'aux cuisses. La voûte est ouverte. Au bout, sous la lune, une rue d'algues monte vers le cœur de la ville.",
    ],
    choices: [
      { label: "Entrer dans Sorne", big: true, to: "V_hub" },
    ] },

  VN_pm_force: { act: "V", title: "Le gardien de la porte", place: "sorne",
    text: [
      { if: { is: { vn_porte_mer: "force" } }, text: "Vous glissez des barres sous le dernier barreau, et vous pesez ensemble, en comptant. La herse s'arrache au sable avec un cri de bronze qui roule sous la voûte et va se perdre dans la ville. Elle monte d'une toise, et vous la calez sur deux barres." },
      { if: { is: { vn_porte_mer: "chaine" } }, text: "La chaîne casse d'un coup avec un bruit de cloche fêlée. Le contrepoids tombe dans son puits, et tu entends, dehors, la herse jaillir du sable et cogner en haut de sa course. Le choc fait trembler la tour jusqu'aux créneaux." },
      "Au bout de la voûte, quelque chose bouge. Une forme se dresse dans les algues, avec un bruit d'eau qui ruisselle et de coquilles qui se brisent : une armure entière, casque fermé, couverte de moules noires et de petites algues vertes qui pendent comme une barbe. Elle tient une hallebarde. Elle avance d'un pas, puis d'un autre, sans hâte, vers la porte ouverte.",
      "Un gardien noyé. Ce qu'il y a dedans, tu préfères ne pas le savoir. Le casque {{pie#vn_gardien_casque|est fermé et soudé par le sel|est fermé, et vide : l'armure marche sur un mécanisme de poids et de ressorts, et une lame d'ambre dans le gorgerin vibre au moindre bruit}}.",
      { with: "gildas", text: "Frère Gildas lève son bâton. « Ils ont fait ça, souffle-t-il. Les gens d'Aymeric. Des gardes qui ne dorment pas. »" },
    ],
    choices: [
      { label: "Se battre sous la voûte", fight: { title: "Le gardien de la porte de Mer", enemies: [{ id: "gardien_noye", n: 1 }],
        win: { fx: { ep: ["seance", 1800] }, to: "V_hub" }, lose: { to: "VN_pm_rejete" },
        flee: { label: "Passer sous la voûte en courant", dom: "discretion", diff: -10, to: "V_hub" } } },
      { label: "Rester immobile et sans bruit, pour que la lame d'ambre se taise", hide: { not: { voile: "vn_gardien_casque" } }, fx: { flag: "vn:gardien_sourd", ep: ["perso", 1000] }, to: "VN_pm_immobile" },
    ] },

  VN_pm_immobile: { act: "V", title: "Sans bruit", place: "sorne",
    text: [
      "Tu lèves la main. Tout le monde se fige. Le gardien fait encore un pas, puis un demi, et s'arrête au milieu de la voûte, la hallebarde levée. Dans son gorgerin, la lame d'ambre vibre encore un peu, un bourdonnement de mouche, puis plus rien.",
      "Vous passez à côté de lui un par un, en posant les pieds sur les algues, là où elles étouffent le bruit. Tu passes si près que tu sens l'odeur de l'armure : la marée et l'huile rance. Elle reste là, derrière vous, la lame en l'air, à garder une porte ouverte.",
      { with: "fauvette", text: "Fauvette, en passant, lui tapote le casque du bout de l'ongle, très doucement, et rit sans bruit en voyant l'armure rester immobile." },
    ],
    choices: [
      { label: "Entrer dans Sorne", big: true, to: "V_hub" },
    ] },

  VN_pm_fauvette: { act: "V", title: "Par le haut de la herse", place: "sorne",
    fx: { ep: ["perso", 800] },
    text: [
      { with: "fauvette", text: "Fauvette ôte ses bottes, les noue autour de son cou, et grimpe la herse comme une échelle, pieds nus sur le bronze gluant. En haut, entre le dernier barreau et la voûte, il reste un vide large comme un pain. Elle s'y glisse en expirant tout l'air qu'elle a, disparaît, et tu l'entends retomber de l'autre côté avec un juron." },
      { with: "fauvette", text: "Puis un long silence. Puis un bruit de chaîne dans la tour de gauche, et la herse se lève de deux toises en tremblant. Fauvette ressort de la tour en s'essuyant les mains sur ses cuisses. « Il y avait un levier, dit-elle. Avec une flèche peinte dessus. Il fallait juste être de ce côté-là. »" },
    ],
    choices: [
      { label: "Entrer dans Sorne", big: true, to: "V_hub" },
    ] },

  VN_pm_breche: { act: "V", title: "La brèche du rempart", place: "sorne",
    text: [
      "Vous longez le rempart vers le sud, les pieds dans la vase jusqu'aux chevilles. Le mur a cédé à un endroit, il y a longtemps : un éboulis de blocs gros comme des coffres monte en pente jusqu'aux créneaux, et redescend de l'autre côté dans une ruelle. L'escalade prend du temps. Chaque bloc bouge un peu sous le pied, couvert de varech qui glisse.",
      { before: "prevot:dejoue", text: "En haut de l'éboulis, tu vois, à quatre cents pas plus au sud, une autre brèche, plus large, par où entrent les soldats d'Aveline en colonne, au pas. Leurs piques dépassent du rempart comme des roseaux." },
      "Tu redescends dans une ruelle si étroite que tes épaules frottent les deux murs. Des algues pendent des fenêtres. Une porte entrouverte {{echo#vn_breche_porte|grince sur ses gonds au moindre souffle|garde une dispute : « Ferme, ferme, la mer monte ! » et une autre voix : « Le berceau, d'abord, le berceau ! »}}. La ruelle débouche sur une place.",
      { with: "salome", text: "Salomé regarde vers la mer en redescendant, comme elle le fera maintenant toutes les dix minutes. « Une heure de perdue », dit-elle seulement." },
    ],
    choices: [
      { label: "Déboucher sur la place", big: true, to: "V_hub" },
    ] },

  VN_pm_rejete: { act: "V", title: "Dans les douves", place: "sorne",
    fx: { pv: -2 },
    text: [
      { if: { seen: "VN_pm_force" }, text: "Le gardien frappe avec sa hallebarde de toute la longueur de son bras de fer. Tu pares mal, et le coup t'envoie rouler sur la pente de la grève jusque dans les douves, une rigole de vase et d'eau noire au pied du rempart.", else: "La herse t'échappe des mains, retombe dans le sable avec un bruit sourd, et une barre te revient en travers des côtes. Tu glisses, et tu roules jusque dans les douves, une rigole de vase et d'eau noire au pied du rempart." },
      "Tu te relèves couvert{e} de vase jusqu'aux cheveux. Les douves courent le long du mur vers le sud, et tu les suis, faute de mieux, jusqu'à une poterne effondrée qui ouvre sur une ruelle. Une heure de perdue, et un goût de sel dans la bouche.",
    ],
    choices: [
      { label: "Entrer par la poterne", big: true, fx: { clock: { maree: 1 } }, to: "V_hub" },
    ] },
});

// ==================================================================== the square of the Four Wells (hub), the tide
Object.assign(P, {
  V_hub: { act: "V", title: "La place des Quatre-Puits", place: "sorne", hub: true, backName: "la place des Quatre-Puits",
    text: [
      { first: true, text: "La rue d'algues monte jusqu'à une grande place carrée, au cœur de Sorne. Quatre puits couverts de dômes de pierre en marquent les coins, et l'eau y gronde encore en descendant vers la mer par des chemins à elle. Au milieu, sur les pavés, la galère que tu as vue du large est couchée sur le flanc, longue comme une église, ses avirons étalés sur la place comme les doigts d'une main. Des crabes courent sur sa coque." },
      { first: true, text: "Tout autour, la ville. Au nord, une rampe pavée de coquillages monte vers une masse de tours et de terrasses : le palais de la reine. À l'est, la flèche cassée de la cathédrale. Au sud, la mâture des épaves, au-dessus des toits : le port des galères. À l'ouest, une rue droite et large, bordée d'arcades, finit sur une place plus vaste que celle-ci : les Comptoirs. Et entre le palais et la cathédrale, une chaussée bordée de statues descend vers quelque chose que tu ne vois pas." },
      { first: true, text: "Sur la margelle du puits du nord-est, quelqu'un a gravé {{echo#vn_hub_vasse|des marques de crue, une par siècle|une voix qui donne un chemin à quelqu'un de pressé : « Le chancelier ? Rue des Chanceliers, derrière la cathédrale, la maison au muet de cuivre. Tu frappes trois fois et tu te tais »}}." },
      { again: true, text: "La place des Quatre-Puits, la galère couchée, ses avirons en éventail sur les pavés." },
      { if: M(0, 1), text: "Les puits grondent encore. La mer est loin, quelque part derrière le rempart, et la lune est haute." },
      { if: M(2, 3), text: "Les puits se sont tus. L'eau ne descend plus : elle dort au fond, noire et immobile. La lune a passé le haut du ciel. La mer, au loin, est une ligne d'argent qui ne bouge pas." },
      { if: M(4, 4), text: "Au fond des puits, l'eau remonte. Tu l'entends clapoter contre les pierres, un bruit doux et régulier, comme quelqu'un qui boit. Dans les rues basses, vers le port, les algues ont commencé à se relever, toutes ensemble, dans l'autre sens." },
      { if: M(5, 5), text: "L'eau sort des puits. Elle coule sur les margelles en nappes minces et court entre les pavés vers le centre de la place, où elle fait déjà une flaque large comme une chambre autour de la galère. La coque grince. La mer revient, et il te reste une heure, peut-être moins." },
      { if: MER, text: "La place est sous l'eau jusqu'aux chevilles, et l'eau monte encore pendant que tu la regardes. La galère bouge sur son flanc avec un long gémissement de bois. Les puits débordent en bouillonnant. Au loin, vers la porte de Mer, un grondement continu : le flot qui entre dans la ville." },
      { if: { all: [M(5), { has: "basse:equipage" }] }, text: "De la grève monte le son de la conque, trois fois, longuement : tes gens t'appellent." },
      { if: M(4), with: "salome", text: "Salomé a cessé de regarder les maisons. Elle regarde l'eau des puits, et elle compte à voix basse." },
      { if: { all: [COURSE, M(1, 2)] }, text: "Vers la chaussée des statues, une lanterne sourde bouge, s'arrête, repart. Lothaire cherche lui aussi." },
      { after: "vn:helis_sauvee", text: "Sur le toit de la rue des Tonneliers, la lanterne d'Hélis s'est éteinte : elle est redescendue vers la grève." },
      { after: "vn:helis_reste", if: M(0, 5), text: "Sur le toit de la rue des Tonneliers, la lanterne d'Hélis brûle toujours, immobile, au bout de sa gaffe." },
      { after: "vn:helis_laissee", if: M(0, 5), text: "Sur les toits de la rue des Tonneliers, la lanterne d'Hélis bouge encore, d'une cheminée à l'autre. Elle cherche seule." },
    ],
    choices: [
      { label: "Le palais de la reine, par la rampe des Coquillages", hide: { any: [MER, { seen: "VN_rampe" }] }, fx: { clock: { maree: 1 } }, to: "VN_rampe" },
      { label: "Le palais de la reine, en haut de la rampe", hide: { any: [MER, { not: { seen: "VN_rampe" } }] }, fx: { clock: { maree: 1 } }, to: "VN_palais" },
      { label: "La cathédrale engloutie", hide: MER, fx: { clock: { maree: 1 } }, to: "VN_parvis" },
      { label: "Le port des galères, par le canal des Pêcheurs", hide: { any: [MER, { seen: "VN_canal" }] }, fx: { clock: { maree: 1 } }, to: "VN_canal" },
      { label: "Le port des galères", hide: { any: [MER, { not: { seen: "VN_canal" } }] }, fx: { clock: { maree: 1 } }, to: "VN_port" },
      { label: "La maison d'Aymeric Vasse, rue des Chanceliers", hide: { any: [MER, { not: { any: [{ voile: "vn_hub_vasse" }, { present: "lison" }, { has: "basse:taiseurs" }, { has: "vn:plan_ville" }] } }] }, fx: { clock: { maree: 1 } }, to: "VN_vasse" },
      { label: "Chercher la maison du chancelier de rue en rue", hide: { any: [MER, { voile: "vn_hub_vasse" }, { present: "lison" }, { has: "basse:taiseurs" }, { has: "vn:plan_ville" }] }, fx: { clock: { maree: 2 } }, to: "VN_vasse" },
      { label: "La place des Comptoirs, au bout de la rue des Arcades", hide: MER, fx: { clock: { maree: 1 } }, to: "VN_comptoirs" },
      { label: "La lanterne qui bouge sur un toit, rue des Tonneliers", hide: { any: [MER, { seen: "VN_helis" }] }, to: "VN_helis" },
      { label: "Les piques qui approchent par la rue du Sud", hide: { any: [MER, { has: "prevot:dejoue" }, { seen: "VN_patrouille" }] }, to: "VN_patrouille" },
      { label: "Frapper le diapason sur la margelle du grand puits", once: true, hide: { any: [MER, { not: { item: "diapason" } }] }, fx: { recharge: { echo: 2 }, note: "La margelle du grand puits est une pierre chantante : le diapason se ravive." }, to: "VN_puits" },
      { label: "La chaussée des statues, vers la dernière porte", big: true, to: "VN_chaussee" },
      { label: "La mer revient : courir, vite", big: true, hide: { not: MER }, to: "V_maree" },
    ] },

  VN_puits: { act: "V", title: "Le grand puits", place: "sorne",
    text: [
      "Tu frappes le diapason sur la margelle. La pierre répond. Elle chante une note grave, bien plus grave que celle du bronze, et la note descend dans le puits, rebondit sur l'eau, remonte, et le diapason se met à vibrer dans ta main jusqu'au coude, chaud comme un animal.",
      "Au fond du puits, l'eau {{echo#vn_puits_voix|frissonne en cercles réguliers|répète les mots d'un porteur d'eau, il y a trois cents ans : « Elle n'est pas folle. Je l'ai vue à la fenêtre. Elle m'a fait le signe des marais, celui qui veut dire tiens bon »}}.",
      { with: "lison", text: "Lison s'est penchée sur la margelle à côté de toi. « Tiens bon, dit-elle. On le fait encore, aux Joncs. » Elle te montre : deux doigts serrés contre la paume, le pouce par-dessus." },
    ],
    choices: [{ back: "V_hub" }] },

  V_maree: { act: "V", title: "Le flot", place: "sorne",
    fx: { flag: "vn:maree_haute" },
    text: [
      "Le grondement vient de partout à la fois. Dans les rues basses, l'eau arrive en vague courte, haute comme un genou, qui pousse devant elle des algues, des coquilles, un tonneau défoncé. Elle a cessé de monter : elle court. Les avirons de la galère se soulèvent un à un sur la place, et la coque roule sur le flanc avec un bruit de tonnerre.",
      "Une seule partie de Sorne est plus haute que le reste : la chaussée des statues, qui monte vers la dernière porte, au pied du palais. L'eau y viendra aussi, mais plus tard.",
      { if: { has: "basse:equipage" }, text: "La conque sonne encore sur la grève, puis elle se tait d'un coup. Tes gens ont dû remonter dans la barque, ou la tirer plus loin. Tu espères qu'ils l'ont fait." },
      { with: "salome", text: "Salomé t'attrape par le bras, si fort que tu sens ses ongles à travers ta manche. « Maintenant, dit-elle. On monte. On ne retourne nulle part. Tu m'entends ? Nulle part. »" },
      { with: "tibere", text: "Tibère a de l'eau jusqu'aux mollets et regarde la rue du port d'un air de regret. « On aurait pu vider ce coffre, dit-il. » Puis il secoue la tête et se met à monter." },
      { with: "lison", text: "Lison se tait. Elle te pousse dans le dos, vers la chaussée." },
      { if: { has: "vn:helis_reste" }, text: "Sur un toit de la rue des Tonneliers, une lanterne brûle au-dessus de l'eau qui monte. Elle reste à sa place." },
      { with: "gildas", text: "Frère Gildas a relevé sa bure jusqu'aux genoux. « Montons », dit-il simplement." },
      { without: "any", text: "Tu es seul{e} à décider. L'eau te touche les chevilles, froide comme une main de mort, et tire déjà vers le bas." },
    ],
    choices: [
      { label: "Monter vers la chaussée des statues, maintenant", big: true, to: "VN_chaussee" },
      { label: "Redescendre une dernière fois vers ce que tu as laissé dans les rues basses", to: "VN_dernier_coffre" },
    ] },

  VN_dernier_coffre: { act: "V", title: "Une dernière fois", place: "sorne",
    text: [
      "Tu redescends. Chaque pas pèse le double du précédent. L'eau est à tes genoux au coin de la place, à tes cuisses dans la rue des Arcades. Elle pousse et tire à la fois, et sous elle les pavés sont devenus de savon.",
      "Au bout de la rue, sous l'eau trouble, une forme brille : de l'or, peut-être, un coffre éventré par le flot, ou seulement la lune dans une flaque plus profonde que les autres. Il faudrait plonger. Il faudrait retenir son souffle, descendre, chercher à tâtons, remonter. Le courant te fait déjà tourner sur toi-même.",
      { with: "any", text: "Derrière toi, on crie ton nom. Une fois, deux fois, puis la voix se perd dans le bruit de l'eau." },
      "Tu {{miroir#vn_coffre_miroir|veux seulement ce dernier coffre, pour que ce voyage serve à quelque chose|sais que ce coffre est une excuse, et que tu as peur de ce qui t'attend derrière la dernière porte}}.",
    ],
    choices: [
      { label: "Remonter, tant qu'il est temps, vers la chaussée des statues", big: true, to: "VN_chaussee" },
      { label: "Prendre ton souffle et plonger", to: "VF_noyade" },
    ] },
});

// ==================================================================== Hélis, the old woman on the roof (side quest)
Object.assign(P, {
  VN_helis: { act: "V", title: "La lanterne sur le toit", place: "sorne", backName: "le toit d'Hélis",
    fx: { meet: "vn_helis", questSeen: "VN_helis" },
    text: [
      { first: true, text: "La lanterne est posée sur le faîte d'un toit, rue des Tonneliers. À côté d'elle, assise jambes pendantes dans les coquillages, une vieille femme en ciré de pêcheur pêche à la gaffe dans la rue d'en dessous. Elle ramène un pot, le regarde, le jette. Elle ramène un soulier, le regarde plus longtemps, le jette aussi. Quand tu t'approches, elle lève sa lanterne sans se lever." },
      { first: true, text: "« Hélis Graumont, de Port-Vasier, dit-elle. Ne vous gênez pas pour moi. Je viens à chaque Grande Basse. C'est la quatorzième. » Elle a la voix râpée par le sel, des mains énormes, et une corde nouée autour de la taille dont l'autre bout est attaché à la cheminée." },
      { again: true, text: "Hélis est toujours sur son toit, la gaffe en travers des genoux. Elle te regarde venir." },
      "« Je {{oreille#vn_helis_cherche|cherche des choses qui se vendent, comme tout le monde|cherche mon fils, Aloïs, qui est resté ici à la Basse de l'an dernier, et que la mer n'a jamais rendu}}, dit-elle. Pour mes petits-enfants. Ils mangent, les petits-enfants. »",
      { with: "salome", text: "Salomé s'est arrêtée net. « Hélis, dit-elle. C'est toi. » La vieille femme hausse les épaules. « C'est moi, Brac. Toi aussi, tu viens chercher quelqu'un ? » Salomé se tait." },
    ],
    choices: [
      { label: "« Votre fils. Parlez-moi de lui. »", hide: { not: { voile: "vn_helis_cherche" } }, to: "VN_helis_recit" },
      { label: "Lui demander ce qu'elle a trouvé en quatorze Basses", hide: { seen: "VN_helis_recit" }, to: "VN_helis_recit" },
      { label: "La laisser à sa pêche", back: "V_hub" },
    ] },

  VN_helis_recit: { act: "V", title: "Aloïs", place: "sorne",
    text: [
      { if: { voile: "vn_helis_cherche" }, text: "Hélis te regarde longtemps, la bouche pincée. Puis elle pose sa gaffe. « Vous avez une drôle d'oreille, vous. » Elle dit les choses d'un trait, comme on vide un seau.", else: "Hélis rit, un rire qui finit en toux. « Ce que j'ai trouvé ? Des pots. Une cuiller d'argent, une fois. Et l'an dernier… » Elle s'arrête. Elle reprend d'un trait, comme on vide un seau." },
      "« Aloïs avait trente ans. Il venait avec moi depuis tout petit. L'an dernier, il a vu de l'or dans une maison de la rue des Souffleurs, la maison du Verrier. Je lui ai dit de laisser, que la mer revenait. Il m'a dit : *va devant, Mère, je te rattrape*. Je suis allée devant. » Elle montre la rue d'en bas. « J'ai attendu sur ce toit jusqu'à l'eau aux genoux. Puis j'ai nagé jusqu'à la barque. »",
      "« La maison du Verrier, reprend-elle, je n'ose pas y entrer. Il y a un de ces hommes de fer dans l'escalier. Je l'ai vu par la fenêtre. Et puis, si j'y entre, {{oreille#vn_helis_rester|je ne sais pas si j'aurai la force d'en ressortir|je sais que je n'en ressortirai pas, et je ne suis pas venue pour en ressortir}}. »",
      { with: "gildas", text: "Frère Gildas s'est assis à côté d'elle sur le toit, sans rien demander. Elle le regarde de travers, puis lui tend sa gourde. Il boit." },
    ],
    choices: [
      { label: "Aller à la maison du Verrier, rue des Souffleurs, à sa place", hide: { seen: "VN_verrier" }, fx: { clock: { maree: 1 } }, to: "VN_verrier" },
      { label: "« Venez avec nous. La mer reviendra pour tout le monde. »", hide: { seen: "VN_helis_choix" }, to: "VN_helis_choix" },
      { label: "Lui dire que tu ne peux rien pour elle, et partir", refuse: true, fx: { quest: "VN_helis", flag: "vn:helis_laissee" }, back: "V_hub" },
    ] },

  VN_verrier: { act: "V", title: "La maison du Verrier", place: "sorne",
    text: [
      "La rue des Souffleurs est une rue de verriers : des fours ronds sous les arcades, des tas de verre fondu en larmes vertes, des fenêtres faites de culs de bouteille. La maison du Verrier est la plus grande, avec une enseigne de cuivre en forme de vase. La porte est ouverte. Le flot de l'an dernier l'a enfoncée de l'intérieur.",
      "Dedans, tout est de verre. Des coupes, des lampes, des flacons alignés sur des étagères, couverts de sel comme de givre, et au fond, sur une table, un tas d'objets qui brillent jaune sous ta lanterne. Le tas {{pie#vn_verrier_or|est de l'or, des coupes et des colliers entassés|est du verre doré à la feuille, de la marchandise de foire, et le seul or de la pièce est la bague au doigt du mort}}.",
      "Le gardien noyé est dans l'escalier, assis sur une marche, sa hallebarde en travers des genoux. À ses pieds, sous l'escalier, un corps est recroquevillé contre le mur, dans des restes de ciré : Aloïs. Il a gravé des traits sur la pierre avec son couteau, des dizaines, en rangées. La marque des heures.",
      "La pièce {{echo#vn_alois_voix|sent la vase et le verre froid|garde une voix d'homme jeune, enrouée, qui parle très bas : « Dis à la Mère de ne pas revenir. Dis-lui que j'ai trouvé l'or. Dis-lui n'importe quoi, mais qu'elle ne revienne pas »}}.",
      { if: M(4), text: "Par la porte enfoncée, tu entends l'eau qui clapote déjà dans le bas de la rue." },
    ],
    choices: [
      { label: "Écarter le gardien et prendre le couteau d'Aloïs", fight: { title: "Le gardien de l'escalier", enemies: [{ id: "gardien_noye", n: 1 }],
        win: { fx: { item: "vn_couteau_alois", ep: ["perso", 1500] }, to: "VN_helis_choix" }, lose: { fx: { pv: -2 }, to: "VN_verrier_fuite" },
        flee: { label: "Ressortir dans la rue", dom: "discretion", diff: 0, to: "VN_verrier_fuite" } } },
      { label: "Glisser sous l'escalier sans réveiller le gardien", test: { dom: "discretion", diff: -10, label: "Ramper sous une hallebarde", help: [{ with: "fauvette", v: 15 }, { if: { has: "vn:gardien_sourd" }, v: 15 }] },
        win: { fx: { item: "vn_couteau_alois", ep: ["perso", 1500] }, to: "VN_helis_choix" }, lose: { to: "VN_verrier_fuite" } },
      { label: "Prendre la bague d'or au doigt du mort", hide: { not: { voile: "vn_verrier_or" } }, once: true, fx: { item: "vn_tr_bague_verrier", clock: { tresors: 1 }, flag: "tresor:vn_bague_verrier" }, to: "VN_verrier_bague" },
    ] },

  VN_verrier_bague: { act: "V", title: "La bague", place: "sorne",
    text: [
      "La bague vient sans résistance : le doigt n'est plus qu'un os. C'est un anneau d'or épais, gravé à l'intérieur d'un nom de femme et d'une date de trois siècles. Aloïs l'avait trouvée, et il l'avait passée à son doigt pour ne pas la perdre en nageant.",
      "Tu {{miroir#vn_bague_miroir|la ranges pour la rendre à sa mère|la ranges dans ta poche avant de te demander à qui elle revient}}.",
    ],
    choices: [{ back: "VN_verrier" }] },

  VN_verrier_fuite: { act: "V", title: "La rue des Souffleurs", place: "sorne",
    text: [
      "Le gardien se lève d'un bloc, et l'escalier entier tremble. Tu recules, tu ressors à reculons par la porte enfoncée, et il s'arrête sur le seuil comme si la rue n'était pas à lui. Il reste là, la hallebarde haute, à garder un mort.",
      "Tu reviens vers Hélis les mains vides.",
    ],
    choices: [{ label: "Remonter sur le toit d'Hélis", to: "VN_helis_choix" }] },

  VN_helis_choix: { act: "V", title: "La vieille femme et la mer", place: "sorne",
    text: [
      { if: { item: "vn_couteau_alois" }, text: "Tu poses le couteau d'Aloïs sur les genoux d'Hélis. C'est un couteau de pêche à manche de corne, avec une encoche au pouce. Elle le reconnaît tout de suite. Elle le prend à deux mains, et elle reste comme ça, sans pleurer, longtemps." },
      { if: { not: { item: "vn_couteau_alois" } }, text: "Hélis t'écoute en silence. Puis elle hoche la tête, deux fois, comme quand on vous annonce un prix trop cher." },
      { if: { seen: "VN_verrier" }, text: "« Il était là, dit-elle. Sous l'escalier. Je le savais. Je l'ai su tout de suite, l'an dernier, en nageant. »" },
      "Elle défait la corde de sa taille, et la laisse pendre le long de la cheminée. « Je vais rester encore un peu, dit-elle. Vous, partez. La mer {{oreille#vn_helis_fin|va revenir, il faut que je surveille ma barque|va revenir, et cette fois je l'attends ici, avec lui}}. »",
      { with: "salome", text: "Salomé s'accroupit devant elle. « Maïwenn aussi, dit-elle. Je ne suis jamais allée la chercher. J'ai cru pendant trois ans que c'était de la lâcheté. » Hélis la regarde. Salomé soutient son regard." },
    ],
    choices: [
      { label: "Lui répéter ce que dit la maison : « Dis à la Mère de ne pas revenir »", hide: { not: { voile: "vn_alois_voix" } }, fx: { quest: "VN_helis", flag: "vn:helis_sauvee", ep: ["seance", 2500], fac: { hautes: 5 } }, to: "VN_helis_part" },
      { label: "La convaincre de redescendre vers la grève", test: { dom: "social", diff: -10, label: "Ramener une mère vers la vie", help: [{ with: "salome", v: 15 }, { with: "gildas", v: 10 }, { if: { item: "vn_couteau_alois" }, v: 15 }] },
        win: { fx: { quest: "VN_helis", flag: "vn:helis_sauvee", ep: ["seance", 2000], fac: { hautes: 5 } }, to: "VN_helis_part" }, lose: { fx: { quest: "VN_helis", flag: "vn:helis_reste" }, to: "VN_helis_reste" } },
      { label: "La laisser choisir", fx: { quest: "VN_helis", flag: "vn:helis_reste", ep: ["perso", 800] }, to: "VN_helis_reste" },
    ] },

  VN_helis_part: { act: "V", title: "Hélis redescend", place: "sorne",
    text: [
      { if: { voile: "vn_alois_voix" }, text: "Tu lui dis les mots, tels quels, avec la voix qui les a dits. Hélis ferme les yeux. « Il disait toujours *la Mère*, dit-elle. Jamais maman. Personne ne peut savoir ça. »" },
      "Elle se lève, renoue la corde à sa taille, éteint sa lanterne d'un souffle. Elle descend du toit par une échelle que tu n'avais pas vue, lentement, sur ses vieilles jambes. En bas, elle se retourne une fois.",
      "« Si vous trouvez la reine, dit-elle, dites-lui que les gens de Port-Vasier se souviennent. On ne sait plus de quoi, mais on se souvient. » Et elle s'en va vers la porte de Mer, le couteau de son fils passé à sa ceinture.",
    ],
    choices: [{ back: "V_hub" }] },

  VN_helis_reste: { act: "V", title: "Hélis reste", place: "sorne",
    text: [
      "Hélis reprend sa gaffe, la pose en travers de ses genoux, et regarde la rue des Souffleurs. Elle a l'air tranquille, à présent. Elle a l'air d'une femme qui attend une barque à l'heure dite.",
      "« Allez, dit-elle sans se retourner. Vous avez votre trésor à trouver. Moi, j'ai trouvé le mien. »",
      { with: "any", text: "Vous redescendez la rue des Tonneliers en silence. Derrière vous, la lanterne reste allumée sur le toit." },
    ],
    choices: [{ back: "V_hub" }] },
});

// ==================================================================== Aveline's patrol (if the provost was not stopped)
Object.assign(P, {
  VN_patrouille: { act: "V", title: "La patrouille d'Aveline", place: "sorne",
    text: [
      "Ils sont six, en file, les piques sur l'épaule, et ils marchent au pas même dans les algues. Cuirasses bleues, casques ronds, des bottes jusqu'aux cuisses. Un jeune lieutenant blond les mène, une carte à la main, qu'il éclaire avec une lanterne de cuivre. Il lève les yeux, te voit, et la file s'arrête net.",
      "« Au nom du duc, dit-il dans un salvézan appliqué. Cette ville est terre ducale depuis trois siècles, par droit de la reine Ysaure. Tout ce qui s'y trouve est au duc. Déposez ce que vous portez, et {{oreille#vn_lieutenant|vous repartirez libres|vous serez pendus à l'aube sur la grève, mes ordres sont de ne laisser repartir aucun témoin}}. »",
      { with: "tibere", text: "Tibère compte les piques à mi-voix. « Six. Des soldats, des vrais. » Il assure sa masse dans sa main." },
      { if: { has: "vn:pm_silence" }, text: "Le lieutenant te dévisage, sa carte à demi baissée. Il croyait la porte de Mer fermée et la ville vide : ta herse est montée sans un bruit, et la nouvelle de ton entrée arrive avec toi." },
      { if: { has: "vn:guet" }, text: "Tu les as regardés débarquer, tout à l'heure, depuis l'ombre de l'ancre. Ils manœuvrent tout d'un bloc, en carré, et un carré tourne lentement dans une ruelle." },
    ],
    choices: [
      { label: "Charger avant qu'ils ne baissent les piques", fight: { title: "La patrouille d'Aveline", enemies: [{ id: "soldat_aveline", n: 3 }],
        win: { fx: { ep: ["seance", 2500], flag: "vn:patrouille_battue" }, to: "VN_patrouille_fin" }, lose: { fx: { pv: -3, clock: { maree: 1 } }, to: "VN_patrouille_prise" },
        flee: { label: "Se jeter dans une ruelle", dom: "discretion", diff: -10, to: "VN_patrouille_fin" } } },
      { label: "« Vos ordres sont de ne laisser repartir personne. Vos hommes le savent-ils ? »", hide: { not: { voile: "vn_lieutenant" } }, to: "VN_patrouille_parle" },
      { label: "Faire semblant d'obéir, et filer dans la galère couchée", test: { dom: "discretion", diff: -10, label: "Disparaître sous la coque", help: [{ with: "fauvette", v: 15 }, { with: "lison", v: 10 }, { if: { has: "vn:guet" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "VN_patrouille_fin" }, lose: { fx: { clock: { maree: 1 } }, to: "VN_patrouille_prise" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: -10, label: "Tibère parle aux soldats en sergent" },
        win: { fx: { conf: { tibere: 5 } }, to: "VN_patrouille_parle" }, lose: { to: "VN_patrouille_prise" } },
    ] },

  VN_patrouille_parle: { act: "V", title: "Le lieutenant", place: "sorne",
    fx: { flag: "vn:aveline_doute", ep: ["seance", 2000] },
    text: [
      { if: { voile: "vn_lieutenant" }, text: "Tu le dis assez fort pour que la file entende. Les soldats se regardent. Le plus vieux, un barbu au nez cassé, se tourne lentement vers le lieutenant. « Personne ? dit-il. On a des cousins à Salvèze, mon lieutenant. »" },
      { with: "tibere", text: "Tibère s'avance, les pouces dans le ceinturon, et parle aux soldats par-dessus la tête du lieutenant, comme un sergent parle à des recrues. « Vous êtes payés à la semaine ou à la pièce, les gars ? Parce que pendre des gens en pleine nuit dans une ville noyée, au Guet, on appelait ça du travail à la pièce. »" },
      "Le lieutenant rougit jusqu'aux oreilles. Il est plus jeune que tu ne le croyais : vingt ans, peut-être. « Le duc veut la Charte, dit-il enfin, très vite. Pour la brandir devant le Conseil. Il {{oreille#vn_lieutenant_duc|la gardera pour le bien de tous|la brûlera dès qu'il aura la ville, il l'a dit devant moi en riant}}. »",
      "Il range sa carte. « Je ne vous ai pas vus, dit-il. Mais l'autre compagnie, celle du capitaine, vous verra. Elle est au port. »",
    ],
    choices: [{ back: "V_hub" }] },

  VN_patrouille_fin: { act: "V", title: "La rue du Sud", place: "sorne",
    text: [
      { outcome: "win", text: "Le dernier soldat tombe dans les algues, et ne se relève pas. Les autres ont reculé jusqu'au coin de la rue, ramassé leur lieutenant, et disparu vers le port en jurant dans leur langue." },
      { outcome: "flee", text: "Vous courez dans une ruelle trop étroite pour les piques. Derrière, des cris, des ordres, puis plus rien." },
      { if: { not: { any: [{ has: "vn:patrouille_battue" }] } }, text: "Tu reviens sur la place par un autre chemin. La patrouille est partie vers le sud, et elle te cherchera." },
      { after: "vn:patrouille_battue", text: "Tu essuies ta lame sur une algue. Sur la place, une lanterne de cuivre brûle encore, posée dans une flaque." },
    ],
    choices: [{ back: "V_hub" }] },

  VN_patrouille_prise: { act: "V", title: "Prisonnier des piques", place: "sorne",
    text: [
      "Les piques te poussent contre la coque de la galère. On t'attache les mains avec une courroie de cuir, on te fouille, on rit de ce qu'on trouve. Le lieutenant lit ta table des marées sans y rien comprendre.",
      "Ce qui te sauve, c'est la mer. Un puits déborde d'un coup derrière eux, et l'eau court entre les jambes des soldats ; le lieutenant crie un ordre, tout le monde regarde en arrière, et tu files dans la ruelle la plus proche, les mains toujours liées. Il te faut une heure pour scier la courroie sur un coin de pierre et retrouver la place par un détour.",
      { with: "any", text: "Tes compagnons te retrouvent au coin de la place. Ils ont suivi les cris." },
    ],
    choices: [{ back: "V_hub" }] },
});

// ==================================================================== the queen's palace
Object.assign(P, {
  VN_rampe: { act: "V", title: "La rampe des Coquillages", place: "sorne",
    text: [
      "La rampe monte vers le palais en trois longs lacets, entre des maisons hautes aux balcons de fer tordu. Elle est {{pie#vn_rampe_pave|pavée de coquillages blancs scellés dans un mortier dur comme la pierre|pavée de coquillages posés sur les voûtes de vieilles caves que la mer a pourries : le milieu ne porte plus rien, seul le bord, contre les façades, tient encore}}. Sous la lune, elle brille comme une rivière de nacre.",
      "Au premier lacet, un morceau de balcon tombe d'une façade sans raison et éclate sur les coquillages. Le bruit roule jusqu'en bas. Sous tes pieds, la rampe répond par un craquement long et creux, comme une barrique qu'on défonce.",
      { with: "fauvette", text: "Fauvette regarde les toits, à gauche, qui se touchent d'une maison à l'autre jusqu'au palais. « Par là-haut, dit-elle. Les toits, ça ne s'effondre jamais tous en même temps. »" },
    ],
    choices: [
      { label: "Monter par le bord de la rampe, contre les façades, un pas après l'autre", hide: { not: { voile: "vn_rampe_pave" } }, fx: { ep: ["perso", 800] }, to: "VN_palais" },
      { label: "Monter vite par le milieu, avant que tout cède", test: { dom: "nature", diff: -10, label: "Courir sur une rampe qui s'effondre", help: [{ with: "lison", v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 1000] }, to: "VN_palais" }, lose: { to: "VN_rampe_chute" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette ouvre le chemin des toits" },
        win: { fx: { conf: { fauvette: 5 }, ep: ["perso", 1000] }, to: "VN_palais" }, lose: { to: "VN_rampe_chute" } },
    ] },

  VN_rampe_chute: { act: "V", title: "Dans la cave", place: "sorne",
    fx: { pv: -3, clock: { maree: 1 } },
    text: [
      "La rampe s'ouvre sous toi d'un seul coup. Tu tombes dans un fracas de coquilles et de mortier, deux toises plus bas, sur un tas de sable mouillé qui te sauve les jambes. Une cave voûtée, pleine d'amphores couchées dans la vase, et une odeur de vin tourné vieille de trois cents ans.",
      { with: "any", text: "D'en haut, par le trou, on t'appelle. Une corde descend, puis se balance : le bord du trou cède dès qu'on s'en approche. Il faudra trouver une autre sortie." },
      "La cave {{echo#vn_cave_echo|goutte de partout dans le noir|garde la voix d'un sommelier qui compte ses amphores à mi-voix, puis qui s'arrête : « Par ici, Madame. Le passage des cuisines. Personne ne vous verra »}}. Au fond, une porte basse ouvre sur un couloir qui monte. Il te faut une bonne heure, à tâtons, pour en trouver le bout : une trappe sous les cuisines du palais.",
    ],
    choices: [
      { label: "Pousser la trappe des cuisines", to: "VN_palais_cuisines" },
    ] },

  VN_palais: { act: "V", title: "La cour d'honneur", place: "sorne", backName: "la cour d'honneur du palais",
    text: [
      { first: true, text: "En haut de la rampe, la cour d'honneur du palais s'ouvre devant toi, vaste et nue, pavée de dalles de marbre que les algues n'ont pas pu prendre. Tout au fond, sur un perron de neuf marches, deux battants de bronze hauts comme trois hommes. Au-dessus, la devise de la reine, en lettres de cuivre vert, et au milieu de chaque battant, un heurtoir en forme de main fermée." },
      { again: true, text: "La cour d'honneur, ses dalles nues, les deux battants de bronze en haut du perron." },
      { after: "vn:palais_ouvert", text: "Les battants sont restés entrouverts. Un filet d'eau coule entre eux et descend le perron marche après marche." },
      "La devise dit : *{{loupe#vn_palais_devise|Je garde ma parole|Frappe sept coups, tais-toi jusqu'au septième, et la reine t'ouvrira}}.*",
      "Le perron {{echo#vn_palais_echo|est usé au milieu par des siècles de pas|garde la voix d'un garde qui rit avec un autre : « Les ambassadeurs crient leur nom, et on les laisse à la porte. Ceux qui frappent et se taisent, on leur ouvre. La reine aime les gens qui se taisent »}}.",
      "Chaque battant {{pie#vn_palais_gonds|tient sur trois gonds de bronze scellés dans le marbre|tient sur trois gonds, mais le gond du bas, à droite, est fendu de part en part : un coup de barre, et le battant penche}}.",
      { if: COURSE, text: "Sur le perron, des traces de bottes fraîches, de la vase encore humide. Quelqu'un est déjà venu, a essayé, et est reparti." },
      { if: M(4), text: "Du haut du perron, tu vois la mer. Elle a cessé de reculer." },
    ],
    choices: [
      { label: "Frapper sept coups, et se taire", hide: { not: { any: [{ voile: "vn_palais_devise" }, { voile: "vn_palais_echo" }] } }, fx: { flag: "vn:palais_ouvert", ep: ["perso", 1500] }, to: "VN_palais_ouvert" },
      { label: "Laisse-moi faire", who: "gildas", hide: { any: [{ voile: "vn_palais_devise" }, { voile: "vn_palais_echo" }] }, fx: { flag: "vn:palais_ouvert", conf: { gildas: 5 } }, to: "VN_palais_gildas" },
      { label: "Abattre le battant droit par le gond fendu", hide: { any: [{ not: { voile: "vn_palais_gonds" } }, { has: "vn:palais_ouvert" }] }, fx: { flag: "vn:palais_ouvert" }, to: "VN_palais_force" },
      { label: "Forcer les battants à coups de barre", hide: { has: "vn:palais_ouvert" }, fx: { clock: { maree: 1 }, flag: "vn:palais_ouvert" }, to: "VN_palais_force" },
      { label: "Contourner la cour vers les cuisines", hide: { has: "vn:palais_ouvert" }, fx: { clock: { maree: 1 } }, test: { dom: "discretion", diff: 0, label: "Trouver l'entrée des cuisines" }, win: { to: "VN_palais_cuisines" }, lose: { to: "VN_rampe_chute" } },
      { label: "Entrer dans la salle du trône", hide: { not: { has: "vn:palais_ouvert" } }, to: "VN_salle_trone" },
      { label: "Redescendre la rampe", back: "V_hub" },
    ] },

  VN_palais_ouvert: { act: "V", title: "Sept coups", place: "sorne",
    text: [
      "Tu soulèves le heurtoir. Il est lourd, froid, et il retombe sur le bronze avec un son plein, profond, qui entre dans la poitrine. Un. Deux. Tu comptes dans ta tête. À chaque coup, l'envie de dire quelque chose monte dans ta gorge, un nom, un mot, n'importe quoi pour remplir le silence qui suit. Tu te tais. Cinq. Six. Sept.",
      "Rien, pendant le temps de trois respirations. Puis un déclic, loin dans l'épaisseur du bronze, et les battants s'écartent d'une main, d'un pied, d'une toise, sans un grincement, comme s'ils avaient été huilés hier.",
      { with: "lison", text: "Lison laisse échapper un rire bref. « La reine aime les gens qui se taisent, dit-elle. Mes ancêtres, je les reconnais bien là. »" },
    ],
    choices: [{ label: "Entrer dans la salle du trône", to: "VN_salle_trone" }] },

  VN_palais_gildas: { act: "V", title: "Le moine et la porte", place: "sorne",
    text: [
      { with: "gildas", text: "Frère Gildas monte les marches seul. Il regarde la devise un long moment, puis il prend le heurtoir et frappe, lentement, avec le soin qu'il met à tailler une plume. Il frappe sept coups. Entre chaque coup, il reste immobile, et son silence est d'une qualité nouvelle pour toi : celui d'un homme qui n'a aucun mot à retenir." },
      { with: "gildas", text: "Les battants s'ouvrent. Gildas descend une marche, se retourne vers toi. « Au Mont, dit-il, on apprend aux novices qu'une porte de Taiseur s'ouvre au silence, et à rien d'autre. Je croyais que c'était une image. »" },
      "Tu {{miroir#vn_gildas_miroir|lui sais gré, et rien de plus|te demandes ce qu'un homme doit avoir à taire pour se taire aussi bien}}.",
    ],
    choices: [{ label: "Entrer dans la salle du trône", to: "VN_palais_ouvert_suite" }] },

  VN_palais_ouvert_suite: { act: "V", title: "Le vestibule", place: "sorne",
    text: [
      "Le vestibule est une salle haute, aux murs couverts de tapisseries que la mer a changées en draperies de vase verte. Elles pendent, lourdes, et quand tu passes, elles bougent à peine. Sous l'une d'elles, tu devines une chasse : des chiens, un cerf, une femme à cheval.",
      "Au fond, une seconde porte, ouverte celle-là. La salle du trône.",
    ],
    choices: [{ label: "Entrer dans la salle du trône", to: "VN_salle_trone" }] },

  VN_palais_force: { act: "V", title: "Les gardes du perron", place: "sorne",
    text: [
      { if: { voile: "vn_palais_gonds" }, text: "Trois coups de barre sur le gond fendu, et le battant droit s'affaisse d'un coup, penche, et s'abat sur le perron avec un fracas qui fait trembler toute la cour.", else: "Vous attaquez les battants à la barre, à coups lents, en cherchant la jointure. Il faut une heure pour que le bronze cède. Le battant gauche s'arrache enfin de ses gonds et s'abat sur le perron dans un fracas qui fait trembler toute la cour." },
      "Le bruit réveille ce qui dort dans le vestibule. Deux gardiens noyés s'avancent par l'ouverture, côte à côte, l'un avec une hallebarde, l'autre avec une épée longue rongée de rouille. Leurs armures ruissellent.",
    ],
    choices: [
      { label: "Les recevoir sur le perron", fight: { title: "Les gardes du perron", enemies: [{ id: "gardien_noye", n: 2 }],
        win: { fx: { ep: ["seance", 2500] }, to: "VN_salle_trone" }, lose: { fx: { pv: -3, clock: { maree: 1 } }, to: "VN_palais_repousse" },
        flee: { label: "Redescendre la rampe en courant", dom: "discretion", diff: -10, to: "VN_palais_repousse" } } },
      { label: "Se figer, et les laisser chercher le bruit", hide: { not: { voile: "vn_gardien_casque" } }, fx: { ep: ["perso", 1000] }, to: "VN_salle_trone" },
    ] },

  VN_palais_repousse: { act: "V", title: "En bas du perron", place: "sorne",
    text: [
      "Tu roules au bas du perron, le souffle coupé. Les deux gardiens s'arrêtent sur la dernière marche, et ils y restent, immobiles, comme si la cour appartenait à d'autres. Ils gardent la porte, et rien au-delà.",
      "Tu reprends ton souffle dans l'ombre d'une colonne. Le battant abattu laisse une ouverture que les gardiens bouchent de leurs deux corps de fer.",
    ],
    choices: [
      { label: "Contourner la cour vers les cuisines", fx: { clock: { maree: 1 } }, to: "VN_palais_cuisines" },
      { label: "Redescendre la rampe", back: "V_hub" },
    ] },

  VN_palais_cuisines: { act: "V", title: "Les cuisines du palais", place: "sorne",
    text: [
      "Les cuisines de la reine sont une salle basse, voûtée, avec deux cheminées où tiendrait un bœuf. Des chaudrons de cuivre pendent encore aux crémaillères, verts de sel. Sur une table, des écuelles d'étain sont alignées pour un repas que personne n'a mangé.",
      "La salle {{echo#vn_cuisines_echo|est silencieuse, à part l'eau qui goutte des voûtes|garde la voix d'une femme, celle qui commandait ici : « Elle n'a rien mangé depuis trois jours. Elle ne peut plus. Écrasez les fèves, faites du bouillon. Et que personne ne dise à la ville ce qu'ils lui ont fait à la bouche »}}.",
      "Un escalier de service monte vers le haut du palais. La troisième marche {{pie#vn_cuisines_marche|est une dalle comme les autres|est posée sur un pivot : un piège de Taiseur, pour qui monte sans savoir}}.",
    ],
    choices: [
      { label: "Monter en enjambant la troisième marche", hide: { not: { voile: "vn_cuisines_marche" } }, to: "VN_salle_trone" },
      { label: "Monter l'escalier de service", test: { dom: "nature", diff: -10, label: "Se rattraper quand la marche bascule", help: [{ with: "fauvette", v: 10 }] },
        win: { to: "VN_salle_trone" }, lose: { fx: { pv: -4 }, to: "VN_salle_trone" } },
    ] },

  VN_salle_trone: { act: "V", title: "La salle du trône", place: "sorne", backName: "la salle du trône",
    text: [
      { first: true, text: "La salle du trône est longue comme une nef, et la mer l'a remplie trois siècles durant sans la briser. Des colonnes de pierre blanche, couvertes à mi-hauteur d'une croûte de coquillages, portent une voûte peinte d'étoiles d'or que la lune, par les hautes fenêtres, fait encore briller. Au fond, sur une estrade de sept marches, le trône : un siège de bois noir incrusté de nacre, et sur le coussin de velours pourri, une couronne." },
      { first: true, text: "Au pied des marches, un gardien noyé est assis sur un tabouret de pierre, la tête penchée, les mains posées sur le pommeau d'une épée plantée entre ses pieds. Son armure est plus belle que les autres, avec des restes de dorure sur les épaules. Le capitaine." },
      { again: true, text: "La salle du trône, ses colonnes de coquillages, ses étoiles d'or. Le trône au bout." },
      { after: "vn:capitaine_releve", text: "Le capitaine est debout au pied des marches, l'épée au fourreau. Il te regarde passer." },
      { after: "vn:capitaine_vaincu", text: "Le capitaine gît au pied des marches, en morceaux, au milieu de ses ressorts." },
      "La couronne {{pie#vn_couronne|est d'or, haute, sertie de perles et de pierres rouges|est de plomb doré, ses perles sont de verre, et elle tient au coussin par un fil relié à quelque chose sous l'estrade}}.",
      { if: M(5), text: "De l'eau entre par les fenêtres basses, en filets, et court sur le dallage vers les marches du trône." },
    ],
    choices: [
      { label: "Prendre la couronne sur le trône", hide: { seen: "VN_couronne" }, to: "VN_couronne" },
      { label: "Glisser la main sous le coussin du trône, sans toucher la couronne", hide: { any: [{ not: { voile: "vn_couronne" } }, { seen: "VN_tablette" }] }, to: "VN_tablette" },
      { label: "S'approcher du capitaine assis", hide: { any: [{ has: "vn:capitaine_releve" }, { has: "vn:capitaine_vaincu" }, { has: "vn:capitaine_contourne" }] }, to: "VN_capitaine" },
      { label: "La porte basse, derrière le trône, vers les appartements de la reine", hide: { not: { any: [{ has: "vn:capitaine_releve" }, { has: "vn:capitaine_vaincu" }, { has: "vn:capitaine_contourne" }] } }, to: "VN_chambre_reine" },
      { label: "Le grand balcon, sur le côté de la salle", hide: { seen: "VN_palais_balcon" }, to: "VN_palais_balcon" },
      { label: "Redescendre vers la place", back: "V_hub" },
    ] },

  VN_couronne: { act: "V", title: "La couronne", place: "sorne",
    fx: { item: "vn_tr_couronne", clock: { maree: 1, tresors: 1 }, flag: "tresor:vn_couronne", pv: -3 },
    text: [
      "Tu montes les sept marches. Tu soulèves la couronne. Elle est lourde, bien plus lourde que l'or, et un fil se tend sous le coussin, et casse.",
      "L'estrade bascule. Le trône, les marches, toi : tout glisse d'un coup vers l'arrière, dans un fracas de bois et de pierre, et tu te retrouves dans une fosse pleine d'eau noire, jusqu'à la poitrine, avec la couronne dans les mains. Au-dessus, l'estrade s'est refermée.",
      "Tu nages à tâtons, tu trouves un mur, puis un conduit, puis une grille rouillée qui cède. Une heure plus tard, tu ressors dans la salle par une bouche d'égout, sous une colonne, crachant de l'eau salée. La couronne pèse toujours aussi lourd. Tu {{pie#vn_couronne_plomb|la regardes à la lune : elle brille d'un or épais|la regardes à la lune : c'est du plomb sous une feuille d'or, un appât, et rien d'autre}}.",
      { with: "tibere", text: "Tibère t'aide à sortir du trou. Il regarde la couronne, puis toi. « Elle va bien avec ta figure », dit-il." },
    ],
    choices: [{ back: "VN_salle_trone" }] },

  VN_tablette: { act: "V", title: "Sous le coussin", place: "sorne",
    fx: { item: "vn_tablette", ep: ["seance", 2000] },
    text: [
      "Tu montes les sept marches sans regarder la couronne. Le coussin de velours s'effrite sous tes doigts. Dessous, le bois du siège est creusé d'une niche, et dans la niche, enveloppée dans une toile cirée qui a tenu trois siècles, une tablette de cire dans un cadre de buis, avec son stylet attaché par un cordon.",
      "C'est la tablette d'une femme qui ne pouvait plus parler. La cire est couverte de mots courts, effacés, récrits, de lettres serrées : *Eau.* *Non.* *Aymeric.* *Mes enfants du marais.* Et au milieu, d'une écriture plus ferme que les autres, une phrase entière que personne n'a effacée.",
    ],
    choices: [{ back: "VN_salle_trone" }] },

  VN_capitaine: { act: "V", title: "Le capitaine des gardes", place: "sorne",
    text: [
      "De près, le capitaine est plus grand que toi d'une tête, même assis. Son armure porte, sur le plastron, la marque des Taiseurs : une bouche fermée d'un trait. Il reste immobile. Mais quand tu poses le pied sur la première dalle devant lui, quelque chose cliquette dans son épaule, et sa tête se relève d'un cran.",
      "Le dallage, autour du tabouret, {{echo#vn_capitaine_ordre|est usé par les pas des gardes qui se relevaient ici|garde l'ordre d'un capitaine vivant à ses hommes : « La relève se fait au mot. Qui vient sans le mot, on l'arrête. Le mot est : la Muette veille »}}.",
      { if: { not: { voile: "vn_capitaine_ordre" } }, text: "Il attend quelque chose. Il attend depuis trois cents ans." },
    ],
    choices: [
      { label: "Lui dire : « La Muette veille »", hide: { not: { voile: "vn_capitaine_ordre" } }, fx: { flag: "vn:capitaine_releve", ep: ["seance", 2500] }, to: "VN_capitaine_releve" },
      { label: "Dégainer avant qu'il ne se lève", fight: { title: "Le capitaine des gardes de la reine", enemies: [{ id: "vn_capitaine_noye", n: 1 }],
        win: { fx: { flag: "vn:capitaine_vaincu", ep: ["seance", 3000] }, to: "VN_salle_trone" }, lose: { fx: { pv: -4, clock: { maree: 1 } }, to: "VN_capitaine_defaite" },
        flee: { label: "Reculer hors de sa portée", dom: "discretion", diff: 0, to: "VN_salle_trone" } } },
      { label: "Passer derrière lui, le long du mur, sans bruit", test: { dom: "discretion", diff: -20, label: "Passer dans le dos du capitaine", help: [{ with: "fauvette", v: 15 }, { if: { has: "vn:gardien_sourd" }, v: 10 }] },
        win: { fx: { flag: "vn:capitaine_contourne" }, to: "VN_chambre_reine" }, lose: { to: "VN_capitaine_defaite" } },
    ] },

  VN_capitaine_releve: { act: "V", title: "La relève", place: "sorne",
    text: [
      "Tu dis les trois mots. Ils sonnent étrangement dans la grande salle, comme s'ils y avaient déjà été dits des milliers de fois.",
      "Le capitaine se lève. Il le fait lentement, en grinçant de toutes ses articulations, et l'eau qui dormait dans son armure coule par les jointures. Debout, il lève son épée devant son visage, la lame droite, le salut des gardes, puis il la remet au fourreau. Il fait un pas de côté. Derrière lui, au pied du trône, une petite porte basse.",
      { with: "lison", text: "Lison s'approche du capitaine et pose la main sur son plastron, sur la bouche fermée gravée dans le fer. « Repos », lui dit-elle doucement. L'armure reste droite." },
    ],
    choices: [{ back: "VN_salle_trone" }] },

  VN_capitaine_defaite: { act: "V", title: "Hors de la salle", place: "sorne",
    text: [
      "Le capitaine frappe comme une porte qui se ferme. Le coup te jette en arrière, à travers la salle, contre une colonne, et le monde devient blanc un moment. Quand tu rouvres les yeux, il s'est rassis sur son tabouret, l'épée plantée devant lui, la tête penchée. Il est resté à sa place : sa tâche est de garder.",
      { with: "any", text: "On t'aide à te relever. Tu as du sang dans la bouche et une douleur dans le flanc qui te fait voir des étoiles plus nombreuses que celles de la voûte." },
    ],
    choices: [{ back: "VN_salle_trone" }] },

  VN_palais_balcon: { act: "V", title: "Le grand balcon", place: "sorne",
    fx: { flag: "vn:vu_course", ep: ["perso", 800] },
    text: [
      "Le grand balcon donne sur toute la ville. Tu vois Sorne entière sous la lune : la place des Quatre-Puits et sa galère couchée, la flèche cassée de la cathédrale, la forêt de mâts du port, et à l'ouest la place des Comptoirs, immense et nue, où brillent des lanternes. Plus loin, le rempart, la grève, et la mer, une ligne d'argent qui {{pie#vn_balcon_mer|semble ne pas bouger|a déjà commencé à revenir : la ligne de la grève est plus proche qu'à ton arrivée}}.",
      { if: LIBRE, text: "Les lanternes de Lothaire sont sur la chaussée des statues, entre le palais et la cathédrale. Elles avancent, s'arrêtent devant chaque statue, repartent. Il cherche la dernière porte, et il est sur le bon chemin." },
      { before: "prevot:dejoue", text: "Au port, des torches en carré : les soldats d'Aveline ont fait halte autour d'une galère. D'autres torches montent vers la cathédrale." },
      "Sur la balustrade, quelqu'un a gravé avec une pointe : *{{loupe#vn_balcon_graffite|Ysaure, reine du delta|Ils l'ont emmenée par la place des Comptoirs. J'ai tout vu d'ici. Je n'ai rien fait}}.*",
    ],
    choices: [{ back: "VN_salle_trone" }] },

  VN_chambre_reine: { act: "V", title: "La chambre de la reine", place: "sorne",
    fx: { ep: ["seance", 2500] },
    text: [
      "La chambre de la reine est petite. C'est la première chose qui te frappe. Un lit à colonnes aux rideaux changés en guenilles vertes, un métier à tisser, une table de bois sombre près de la fenêtre, un coffre. Sur la table, une écritoire, des plumes pétrifiées par le sel, un encrier de corne.",
      "Les murs sont couverts d'écriture. Partout, à hauteur de main, des lignes tracées au charbon, puis à la pointe, puis du bout des ongles dans l'enduit : des listes de noms, des comptes, des dates. Une ligne, sur le mur du lit, dit : *{{loupe#vn_mur_reine|Que Dieu garde mon peuple du delta|Delisle, Marrel, Fourcaud, Vernier ont signé les actes faux le jour de la Saint-Michel, chez Marrel, et l'évêque a mis le sceau}}.*",
      "Le coffre {{pie#vn_coffre_reine|est un coffre de chêne bardé de fer, fermé à clé|est un coffre vide : le vrai fond est le plancher en dessous, une latte plus claire que les autres}}.",
      "La chambre {{echo#vn_chambre_echo|est silencieuse comme une chapelle|garde la voix d'une servante qui pleure en pliant du linge : « Ils ont dit à la ville qu'elle était folle. Elle écrit sur les murs parce qu'ils lui ont pris le papier »}}.",
      "Tu {{miroir#vn_chambre_miroir|regardes cette chambre avec des yeux de métier, pour ce qu'elle cache|regardes ce lit et tu revois celui d'Odeline, la veille de l'enterrement, défait, et tes mains qui le refaisaient trois fois}}.",
    ],
    choices: [
      { label: "Soulever la latte claire, sous le coffre", hide: { any: [{ not: { voile: "vn_coffre_reine" } }, { seen: "VN_chambre_latte" }] }, to: "VN_chambre_latte" },
      { label: "Retourner dans la salle du trône", back: "VN_salle_trone" },
    ] },

  VN_chambre_latte: { act: "V", title: "Sous le plancher", place: "sorne",
    fx: { item: "vn_tr_peigne", clock: { tresors: 1 }, flag: "tresor:vn_peigne", ep: ["seance", 2000] },
    text: [
      "La latte se soulève avec la pointe de ta dague. Dessous, dans un creux garni de laine pourrie, un peigne d'écaille blonde serti d'argent, avec trois dents cassées, et enroulé autour des dents, un long cheveu gris.",
      "C'est tout. La chose qu'une femme cache quand on lui a tout pris, pour garder une chose à elle.",
      { with: "lison", text: "Lison prend le peigne, le retourne, et te le rend. Elle a les yeux brillants. Elle les essuie d'un revers de manche en grommelant contre le sel." },
    ],
    choices: [{ back: "VN_chambre_reine" }] },
});

// ==================================================================== the drowned cathedral
Object.assign(P, {
  VN_parvis: { act: "V", title: "Le parvis de la cathédrale", place: "sorne", backName: "le parvis de la cathédrale",
    text: [
      { first: true, text: "La cathédrale de Sorne se dresse au bout d'un parvis en pente, plus haute que tout le reste de la ville, sa flèche cassée en biseau à mi-hauteur. Sa façade est couverte d'une croûte de coquillages si épaisse que les statues des portails ressemblent à des rochers sculptés par la mer. La grande rose, au-dessus du portail, a perdu presque tous ses vitraux : la lune passe au travers en rayons blancs." },
      { again: true, text: "Le parvis en pente, la façade de coquillages, la rose percée de lune." },
      "Le grand portail est fermé par deux vantaux de chêne doublés de plomb. Au tympan, un Christ en majesté, et sous ses pieds, une ligne gravée : *{{loupe#vn_tympan|Venez à moi, vous qui peinez|Les portes de Dieu s'ouvrent au chant des vêpres, chanté à la façon des marais}}.*",
      "Les marches du parvis {{echo#vn_chant_portail|sont glissantes d'algues jusqu'au seuil|gardent un chant de femmes, lent, qui monte et redescend sur trois notes : « Ouvrez la porte à qui se tait, ouvrez la porte à qui se tait », la voix grave tenant la dernière note longtemps}}.",
      "Sur le côté, une porte basse {{pie#vn_porte_laterale|est murée de pierres sèches|est murée de pierres sèches, mais le mortier a fondu : les pierres tiennent par habitude}}. Plus haut, à hauteur de deux hommes, la rose percée.",
      { before: "prevot:dejoue", text: "Au bas du parvis, des torches montent de la rue du port : une compagnie d'Aveline vient vers la cathédrale, sans se presser." },
      { if: M(4), text: "Au pied du parvis, l'eau a recouvert la première marche, et elle lèche la deuxième." },
    ],
    choices: [
      { label: "Chanter sur trois notes : « Ouvrez la porte à qui se tait »", hide: { any: [{ not: { voile: "vn_chant_portail" } }, { seen: "VN_nef" }] }, fx: { ep: ["perso", 1500] }, to: "VN_cath_chant" },
      { label: "Laisse-moi faire", who: "gildas", hide: { seen: "VN_nef" }, fx: { conf: { gildas: 5 } }, to: "VN_cath_chant" },
      { label: "Laisse-moi faire", who: "lison", hide: { any: [{ seen: "VN_nef" }, { present: "gildas" }] }, fx: { conf: { lison: 5 } }, to: "VN_cath_chant" },
      { label: "Défaire les pierres de la porte murée", hide: { any: [{ not: { voile: "vn_porte_laterale" } }, { seen: "VN_nef" }] }, to: "VN_cath_laterale" },
      { label: "Abattre la porte murée à coups de barre", hide: { any: [{ voile: "vn_porte_laterale" }, { seen: "VN_nef" }] }, fx: { clock: { maree: 1 } }, to: "VN_cath_laterale" },
      { label: "Grimper jusqu'à la rose et entrer par un vitrail cassé", hide: { seen: "VN_nef" }, test: { dom: "discretion", diff: -10, label: "Escalader une façade de coquillages", help: [{ with: "fauvette", v: 20 }, { if: { item: "corde" }, v: 10 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "VN_nef" }, lose: { fx: { pv: -3, clock: { maree: 1 } }, to: "VN_cath_laterale" } },
      { label: "Entrer dans la nef", hide: { not: { seen: "VN_nef" } }, to: "VN_nef" },
      { label: "Redescendre vers la place", back: "V_hub" },
    ] },

  VN_cath_chant: { act: "V", title: "Les vêpres des marais", place: "sorne",
    text: [
      { if: { voile: "vn_chant_portail" }, text: "Tu chantes. Ta voix est mal assurée, au début, et elle sonne petite sur le grand parvis. Puis tu trouves les trois notes, et tu tiens la dernière, longtemps, comme la voix de femme l'a tenue." },
      { with: "gildas", text: "Frère Gildas chante. Sa voix est grave, juste, nourrie de trente ans de vêpres au Mont, et quand il arrive à la dernière note, il la tient si longtemps que tu crois qu'il va manquer d'air. Il le fait à la façon des moines, d'une seule haleine." },
      { with: "lison", without: "gildas", text: "Lison chante. C'est une berceuse des Joncs-Bas, tu la reconnais : sa grand-mère la chante aux enfants qui ne dorment pas. Ici, elle a d'autres mots, et la dernière note tient comme une amarre." },
      "Derrière les vantaux, quelque chose répond. Une vibration grave, d'abord dans les pierres du parvis, puis dans tes os, puis un bruit de barre qui glisse. Les vantaux de chêne s'écartent d'un pied, lentement, en raclant la vase du seuil.",
      { with: "tibere", text: "Tibère se signe deux fois, à l'envers puis à l'endroit. « J'ai chanté à la messe pendant vingt ans, dit-il. Personne ne m'avait dit que ça ouvrait les portes. »" },
    ],
    choices: [{ label: "Entrer dans la nef", to: "VN_nef" }] },

  VN_cath_laterale: { act: "V", title: "La porte murée", place: "sorne",
    text: [
      { if: { voile: "vn_porte_laterale" }, text: "Tu tires la première pierre. Elle vient toute seule, et les autres suivent, une par une, dans une pluie de sable. En peu de temps, l'ouverture est assez grande pour passer en se courbant.", else: "Il faut une heure de coups de barre pour défaire le mur. Les pierres tombent en dedans avec un bruit qui résonne dans toute la nef, et chaque coup te semble un appel." },
      "Tu passes. De l'autre côté, un petit baptistère, une cuve de pierre pleine d'eau de mer, et dans l'eau, quelque chose de long qui ondule et se retourne vers toi.",
    ],
    choices: [
      { label: "Frapper avant qu'elles ne sortent", fight: { title: "Les anguilles du baptistère", enemies: [{ id: "anguille", n: 3 }],
        win: { fx: { ep: ["perso", 1500] }, to: "VN_nef" }, lose: { fx: { pv: -3 }, to: "VN_nef" } } },
      { label: "Passer le long du mur, loin de la cuve", test: { dom: "nature", diff: 0, label: "Éviter des anguilles", help: [{ with: "lison", v: 15 }, { with: "salome", v: 10 }] },
        win: { to: "VN_nef" }, lose: { fx: { pv: -4 }, to: "VN_nef" } },
    ] },

  VN_nef: { act: "V", title: "La nef", place: "sorne", backName: "la nef de la cathédrale",
    text: [
      { first: true, text: "La nef est une forêt. Les piliers montent dans l'ombre, couverts d'anémones de mer fermées qui palpitent quand ta lanterne les touche. Le sol est de sable fin, ridé comme une plage, et des bancs de chêne y sont à demi enfouis, alignés encore, face à l'autel. Tout au fond, le chœur, où la lune tombe de la rose en une seule colonne blanche." },
      { first: true, text: "Le silence est si complet que tu entends les anémones se refermer." },
      { again: true, text: "La nef de sable et ses piliers d'anémones. La colonne de lune sur le chœur." },
      "La nef {{echo#vn_nef_messe|est un grand vide où l'eau goutte|garde la dernière messe : un évêque qui chante très vite, et en dessous, dans les bancs, des chuchotements qui courent : « On dit qu'ils l'ont emmenée cette nuit. » « Tais-toi. » « On dit qu'elle a craché le sang. » « Tais-toi, je te dis, ils écoutent »}}.",
      "Le troisième pilier à gauche {{pie#vn_pilier|est un pilier comme les autres, couvert d'anémones|est taillé dans une pierre d'un vert pâle, veinée de blanc : une pierre chantante, la seule de la nef}}.",
      { if: M(5), text: "L'eau entre par le portail et s'étale sur le sable de la nef en langues minces, qui avancent vers le chœur." },
      { before: "prevot:dejoue", text: "Du parvis montent des bruits de bottes et d'ordres. Les soldats d'Aveline ne sont plus loin." },
    ],
    choices: [
      { label: "Frapper le diapason contre le pilier de pierre verte", once: true, hide: { any: [{ not: { voile: "vn_pilier" } }, { not: { item: "diapason" } }] }, fx: { recharge: { echo: 2 }, note: "La colonne de pierre verte chante : le diapason se ravive." }, to: "VN_pilier" },
      { label: "Le tombeau de l'évêque, dans le bas-côté", hide: { seen: "VN_tombeau" }, to: "VN_tombeau" },
      { label: "Le chœur, sous la colonne de lune", hide: { seen: "VN_calice" }, to: "VN_calice" },
      { label: "L'escalier de la crypte, qui descend dans l'eau noire", hide: { seen: "VN_crypte_fond" }, to: "VN_crypte" },
      { label: "L'escalier du clocher", hide: { seen: "VN_clocher" }, to: "VN_clocher" },
      { label: "Faire face aux soldats qui entrent", hide: { any: [{ has: "prevot:dejoue" }, { seen: "VN_cath_soldats" }] }, to: "VN_cath_soldats" },
      { label: "Ressortir sur le parvis", back: "VN_parvis" },
    ] },

  VN_pilier: { act: "V", title: "Le pilier vert", place: "sorne",
    text: [
      "Le diapason touche la pierre, et la pierre se met à chanter. La note monte le long du pilier, se répand dans la voûte, et revient de partout à la fois, comme si la cathédrale entière avait été accordée sur elle. Les anémones s'ouvrent toutes ensemble, d'un pilier à l'autre, jusqu'au fond de la nef.",
      "Le diapason vibre dans ta main, chaud, plein. Tu sens qu'il pourra faire parler la ville encore deux fois.",
      { with: "gildas", text: "Frère Gildas a fermé les yeux. « C'est la note du Mont, dit-il. La note des vêpres. Ils ont pris l'ambre au même endroit. »" },
    ],
    choices: [{ back: "VN_nef" }] },

  VN_tombeau: { act: "V", title: "Le tombeau de l'évêque", place: "sorne",
    text: [
      "Le tombeau est un gisant de marbre blanc, un évêque mitré, les mains jointes sur une crosse. La mer l'a poli comme un galet. Sur la dalle, son épitaphe : *{{loupe#vn_eveque|Ici repose Monseigneur Hildebert, pasteur fidèle, qui aima la paix|Ici repose Hildebert, qui scella les actes faux pour quatre cents ducats et une maison sur l'île des Changeurs, et qui en eut honte sur le tard}}.*",
      "Sous la crosse de marbre, la mer a creusé un trou dans la dalle. Dedans, tu vois briller une chaîne d'argent, prise dans la pierre. Elle {{pie#vn_chaine_eveque|est une belle chaîne d'argent, longue d'une coudée|est une chaîne d'argent noirci, sans valeur, la chaîne de la croix pectorale, et elle est restée accrochée au cou de l'évêque, en dessous}}.",
      { with: "gildas", text: "Frère Gildas lit l'épitaphe par-dessus ton épaule, à la lumière de ta lanterne. En silence, il pose deux doigts sur la dalle, puis il les retire, et il s'essuie la main sur sa bure." },
    ],
    choices: [{ back: "VN_nef" }] },

  VN_calice: { act: "V", title: "Le chœur", place: "sorne",
    text: [
      "Le chœur est un rond de sable blanc sous la colonne de lune. L'autel de pierre y est à demi enfoui, et sur l'autel, un calice renversé, couvert de petits coquillages. Le calice {{pie#vn_calice_faux|est d'or, ciselé de feuilles de vigne|est d'étain doré, une pièce de sacristie, et la lune joue sur quelque chose qui affleure dans le sable, au pied de l'autel, côté nord}}.",
      "Le sable du chœur est épais, tassé par les siècles. Fouiller tout le pourtour de l'autel prendra du temps.",
    ],
    choices: [
      { label: "Creuser au pied de l'autel, côté nord", hide: { not: { voile: "vn_calice_faux" } }, fx: { item: "vn_tr_calice", clock: { tresors: 1 }, flag: "tresor:vn_calice", ep: ["seance", 2000] }, to: "VN_calice_trouve" },
      { label: "Fouiller le sable tout autour de l'autel, à mains nues", fx: { clock: { maree: 1 } }, test: { dom: "nature", diff: 0, label: "Fouiller le sable d'un chœur", help: [{ if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { item: "vn_tr_calice", clock: { tresors: 1 }, flag: "tresor:vn_calice", ep: ["seance", 1500] }, to: "VN_calice_trouve" }, lose: { to: "VN_calice_rien" } },
      { label: "Laisser le chœur", back: "VN_nef" },
    ] },

  VN_calice_trouve: { act: "V", title: "Le calice d'ambre", place: "sorne",
    text: [
      "Tes doigts touchent un rebord froid et lisse. Tu dégages un pied, une coupe, et tu le soulèves dans la lumière : un calice taillé dans un seul bloc d'ambre, couleur de miel foncé, cerclé d'or à la lèvre. Quand le vent passe par la rose, il chante, très bas, une note qui ressemble à celle du diapason.",
      "Sous le pied, gravé : *Donné par la reine à l'église de Sorne, l'an de son couronnement.*",
      { with: "fauvette", text: "Fauvette siffle entre ses dents. « Ça, à la Reine des Gouttières, dit-elle, ça paie une maison. Avec un jardin. » Puis elle regarde l'autel et ajoute, plus bas : « Bon. On le prend quand même ? »" },
    ],
    choices: [{ back: "VN_nef" }] },

  VN_calice_rien: { act: "V", title: "Le chœur", place: "sorne",
    text: [
      "Tu fouilles une heure. Tu trouves des tessons, une boucle de ceinture, un os de mouton, un sou rongé. Le sable retombe dans chaque trou dès que tu le creuses. Quand tu te relèves, les mains en sang, la colonne de lune a glissé de trois pas sur le dallage.",
    ],
    choices: [{ back: "VN_nef" }] },

  VN_crypte: { act: "V", title: "L'escalier de la crypte", place: "sorne",
    text: [
      "L'escalier de la crypte descend dans une eau noire et immobile qui monte jusqu'à la sixième marche. La mer est restée ici. Ta lanterne éclaire des voûtes basses, des tombeaux à demi immergés, et à la surface, des remous lents, larges, qui vont et viennent. Quelque chose de gros vit là-dessous.",
      { with: "salome", text: "Salomé regarde l'eau longtemps. « Un congre, dit-elle. Ou trois. Ils mangent tout ce qui tombe. » Elle défait sa ceinture, et commence à ôter ses bottes. « Je {{oreille#vn_salome_crypte|plonge, je sais faire|n'ai pas plongé depuis Maïwenn, et si je ne le fais pas maintenant, je ne le ferai plus jamais}}. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "salome", test: { dom: "nature", diff: -10, label: "Salomé plonge dans la crypte" },
        win: { fx: { flag: "salome:plonge", conf: { salome: 15 }, ep: ["seance", 2000] }, to: "VN_crypte_fond" }, lose: { fx: { conf: { salome: 5 } }, to: "VN_crypte_congre" } },
      { label: "Descendre dans l'eau, la dague à la main", to: "VN_crypte_congre" },
      { label: "Laisser la crypte à ses bêtes", back: "VN_nef" },
    ] },

  VN_crypte_congre: { act: "V", title: "Le congre", place: "sorne",
    text: [
      "L'eau te saisit jusqu'à la poitrine, si froide que tu en perds le souffle. Tu avances entre les tombeaux, un pied après l'autre, sur des dalles que tu ne vois pas. Un remous passe contre tes jambes, lourd, lent, et revient. Puis une tête sort de l'eau devant toi, grise, large comme un seau, la gueule ouverte sur trois rangées de dents.",
      { with: "salome", text: "Salomé remonte à côté de toi en crachant, le coutelas au poing, du sang sur la joue. « Il m'a manquée, dit-elle. Pas toi. »" },
    ],
    choices: [
      { label: "Se battre dans l'eau noire", fight: { title: "Le congre de la crypte", enemies: [{ id: "vn_congre", n: 1 }],
        win: { fx: { ep: ["seance", 2500] }, to: "VN_crypte_fond" }, lose: { fx: { pv: -4, clock: { maree: 1 } }, to: "VN_crypte_remonte" },
        flee: { label: "Regagner l'escalier", dom: "nature", diff: -10, to: "VN_crypte_remonte" } } },
    ] },

  VN_crypte_remonte: { act: "V", title: "Les marches", place: "sorne",
    text: [
      "Tu te hisses sur les marches, le bras ouvert d'une morsure, et tu remontes en rampant hors de l'eau. Le congre reste en bas, sa tête grise à fleur d'eau, à te regarder. Il a son domaine, et il le garde.",
      "Il te faut un long moment pour bander ton bras et retrouver ton souffle.",
    ],
    choices: [{ back: "VN_nef" }] },

  VN_crypte_fond: { act: "V", title: "Le tombeau d'Aymeric", place: "sorne",
    fx: { ep: ["seance", 2000] },
    text: [
      { if: { has: "salome:plonge" }, text: "Salomé remonte trois fois, et la troisième fois elle reste en surface, accrochée à un tombeau, à rire sans bruit, les cheveux collés au front. « Il y a une salle sèche, dit-elle. Derrière l'eau. Une marche plus haut que la mer. » Elle a l'air d'avoir vingt ans." },
      "Au fond de la crypte, derrière un rideau d'eau, une petite salle s'élève d'une marche au-dessus de la mer, sèche comme un grenier. Un seul tombeau, nu, anonyme. Sur le couvercle, une bouche fermée d'un trait, gravée dans la pierre. La marque des Taiseurs.",
      "La salle {{echo#vn_cle_crypte|est sèche et calme|garde la voix d'un vieil homme, essoufflé, qui fait répéter quelqu'un : « Encore. À la dernière porte, à la septième bouche, celle qui n'a pas de bouche. Nous nous taisons pour qu'elle parle. Encore. Plus bas. Tu ne l'écris nulle part »}}.",
      { with: "lison", text: "Lison s'agenouille devant le tombeau sans nom. « Aymeric, dit-elle. Ma grand-mère dit qu'il a voulu être enterré sous l'église, pour que l'évêque marche sur lui à chaque messe. » Elle sourit à moitié. « Il avait de la rancune, l'ancêtre. »" },
    ],
    choices: [{ back: "VN_nef" }] },

  VN_clocher: { act: "V", title: "Le clocher", place: "sorne",
    fx: { flag: "vn:vu_course", ep: ["perso", 800] },
    text: [
      "L'escalier du clocher tourne dans l'épaisseur du mur, deux cent douze marches couvertes de fientes de mouettes. En haut, la chambre des cloches s'ouvre aux quatre vents, et une seule cloche y pend encore, énorme, verte, son battant pris dans une gangue de coquillages.",
      "D'ici, tu vois toute la chaussée des statues, qui descend en pente douce entre le palais et la cathédrale vers une place ronde. Au bout de la place, adossée à la colline du palais, une porte. Petite, de loin.",
      { if: LIBRE, text: "Sur la chaussée, les lanternes de Lothaire. Six hommes, une échelle, un tonneau. Ils avancent de statue en statue, et ils sont à mi-chemin de la porte." },
      { before: "prevot:dejoue", text: "Au pied de la cathédrale, une compagnie d'Aveline fait halte sur le parvis. Une autre, au port, charge des coffres dans les chaloupes." },
      { if: { not: LIBRE }, text: "Sur la place des Comptoirs, les gens de la Banque creusent, en grand nombre, à la lumière des torches. Ils ont l'air de savoir où ils cherchent." },
      "La cloche {{pie#vn_cloche|est prise dans sa gangue et ne sonnera plus|est prise dans sa gangue, mais le battant tient par un seul crochet rouillé : un coup de barre, et la cloche sonne, une fois, assez fort pour toute la ville}}.",
    ],
    choices: [
      { label: "Libérer le battant, et faire sonner la cloche de Sorne", hide: { any: [{ not: { voile: "vn_cloche" } }, { seen: "VN_cloche" }] }, to: "VN_cloche" },
      { label: "Redescendre dans la nef", back: "VN_nef" },
    ] },

  VN_cloche: { act: "V", title: "La cloche de Sorne", place: "sorne",
    fx: { ep: ["seance", 2500] },
    text: [
      "Le crochet cède au premier coup. Le battant tombe, et la cloche de Sorne sonne. Une seule fois, mais si fort que la tour tremble et que tu sens le son te traverser comme un coup de poing. Il roule sur la ville, sur les toits de coquillages, sur la grève, jusqu'à la mer.",
      { if: COURSE, text: "Sur la chaussée, les lanternes de Lothaire s'arrêtent net. Puis elles se mettent à courir, en arrière, vers la grève : ses hommes croient que la mer revient. Tu vois une lanterne seule qui reste en place, longtemps, puis qui finit par suivre les autres. Lothaire a perdu ses hommes, et une bonne heure." },
      { if: { all: [COURSE, { not: { has: "prevot:dejoue" } }] }, text: "Et sur le parvis, la compagnie d'Aveline se retourne d'un bloc vers le son, puis vers les lanternes qui courent sur la chaussée. Un officier crie. Les piques descendent la pente au pas de course, droit sur les gens de Lothaire." },
      { if: { not: COURSE }, text: "Sur la place des Comptoirs, les torches de la Banque s'immobilisent, puis refluent toutes ensemble vers la rue des Arcades. Des cris montent : *la mer, la mer.* Il leur faudra une bonne heure pour comprendre et revenir." },
      { with: "fauvette", text: "Fauvette s'est bouché les oreilles des deux mains, et elle rit si fort que tu vois ses dents à la lune." },
    ],
    choices: [
      { label: "Redescendre dans la nef", fx: { flag: "vn:lothaire_retarde" }, back: "VN_nef" },
    ] },

  VN_cath_soldats: { act: "V", title: "La compagnie d'Aveline", place: "sorne",
    text: [
      "Ils entrent par le portail en colonne, une vingtaine, les piques droites, et se déploient dans la nef entre les bancs enfouis. Le capitaine qui les mène est un homme sec, grisonnant, une écharpe bleue en travers de la cuirasse. Il te voit, lève la main, et la colonne s'arrête.",
      "« Le duc vous remercie de lui avoir ouvert cette porte, dit-il en salvézan, avec un fort accent. La suite, nous la ferons nous-mêmes. {{oreille#vn_capitaine_aveline|Posez vos armes, et vous serez traités en prisonniers|Posez vos armes : j'ai ordre de ne laisser personne de Salvèze remonter dans une barque}}. »",
      { with: "tibere", text: "Tibère recule d'un pas, puis d'un autre, en direction du pilier vert. Il te regarde, puis le pilier, puis toi. Il a compris quelque chose avant toi." },
    ],
    choices: [
      { label: "Frapper le diapason contre le pilier vert, de toutes tes forces", hide: { any: [{ not: { voile: "vn_pilier" } }, { not: { item: "diapason" } }] }, fx: { ep: ["seance", 3000], flag: "vn:soldats_chasses" }, to: "VN_cath_chantent" },
      { label: "Se battre entre les piliers", fight: { title: "La compagnie d'Aveline", enemies: [{ id: "soldat_aveline", n: 4 }],
        win: { fx: { ep: ["seance", 3500], flag: "vn:soldats_chasses" }, to: "VN_cath_chantent" }, lose: { fx: { pv: -4, clock: { maree: 1 } }, to: "VN_cath_prise" },
        flee: { label: "Fuir par la porte du baptistère", dom: "discretion", diff: -10, to: "VN_parvis" } } },
      { label: "Gagner l'escalier du clocher et s'y barricader", test: { dom: "discretion", diff: -10, label: "Disparaître dans l'escalier", help: [{ with: "fauvette", v: 15 }] },
        win: { to: "VN_clocher" }, lose: { fx: { clock: { maree: 1 } }, to: "VN_cath_prise" } },
    ] },

  VN_cath_chantent: { act: "V", title: "La cathédrale chante", place: "sorne",
    text: [
      { if: { has: "vn:soldats_chasses" }, text: "Les derniers soldats reculent vers le portail." },
      { if: { voile: "vn_pilier" }, text: "La pierre verte répond au diapason, et la cathédrale entière se met à chanter. La note gronde dans les piliers, roule dans la voûte, fait trembler le sable du sol. Les anémones s'ouvrent toutes à la fois. Les soldats lâchent leurs piques et se bouchent les oreilles. Puis ils fuient vers le portail en se bousculant, en criant dans leur langue un mot qui doit vouloir dire *sorcellerie*." },
      "Le capitaine sort le dernier, à reculons, la main sur la garde de son épée. Sur le seuil, il te regarde encore. « Le duc saura qui vous êtes », dit-il. Puis il disparaît dans le noir du parvis.",
    ],
    choices: [{ back: "VN_nef" }] },

  VN_cath_prise: { act: "V", title: "Entre les piques", place: "sorne",
    text: [
      "Ils te désarment, te lient les mains, te font asseoir sur un banc à demi enfoui dans le sable, sous la garde de deux piquiers. Le capitaine fouille ton sac lui-même, avec soin, et met de côté tout ce qui ressemble à un écrit.",
      "C'est l'eau qui te libère. Une vague courte entre par le portail, plus haut qu'elle ne devrait, et fait glisser un banc ; les deux gardes regardent la mer, et tu plonges derrière un pilier, et tu rampes jusqu'au baptistère, et tu ressors par la porte murée, les mains encore liées. Il te faut une heure pour te défaire et retrouver ton chemin.",
      { with: "any", text: "Tes compagnons te retrouvent sur le parvis. Ils ont repris ton sac, ou presque tout." },
    ],
    choices: [{ back: "VN_parvis" }] },
});

// ==================================================================== the galley harbour
Object.assign(P, {
  VN_canal: { act: "V", title: "Le canal des Pêcheurs", place: "sorne",
    text: [
      "Le canal des Pêcheurs descend vers le port entre deux quais de pierre. La mer l'a vidé presque entièrement : il ne reste au fond qu'une rigole d'eau noire, large de trois pas, et une vase épaisse où dorment des barques couchées. Un pont de bois l'enjambe, à mi-chemin. Le pont {{pie#vn_pont|est un pont de chêne, noir et luisant|est un pont de chêne, mais ses piles sont mangées par le taret, creuses comme des flûtes : il ne portera pas un homme}}.",
      "Dans la rigole, l'eau bouge. Une, deux, dix formes longues s'y tordent les unes sur les autres : les anguilles de la Basse, qui attendent la mer au seul endroit où il en reste. Elles sont épaisses comme un bras. Quand ta lanterne passe sur elles, elles lèvent toutes la tête.",
      { with: "lison", text: "Lison regarde les anguilles avec un intérêt de professionnelle. « Elles ont faim, dit-elle. Elles ont peur. Les deux à la fois, c'est le pire. » Elle fouille dans sa besace et en sort un sachet de toile qui sent la vase et le sang." },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 5 }, ep: ["perso", 1200] }, to: "VN_canal_lison" },
      { label: "Traverser par le pont", hide: { voile: "vn_pont" }, to: "VN_canal_pont" },
      { label: "Longer le quai jusqu'à l'écluse du port, plus bas", hide: { not: { voile: "vn_pont" } }, fx: { clock: { maree: 1 } }, to: "VN_port" },
      { label: "Sauter dans la vase et passer au milieu d'elles, vite", fight: { title: "Les anguilles du canal", enemies: [{ id: "anguille", n: 3 }],
        win: { fx: { ep: ["perso", 1500] }, to: "VN_port" }, lose: { fx: { pv: -3 }, to: "VN_port" },
        flee: { label: "Remonter sur le quai d'en face", dom: "nature", diff: -10, to: "VN_port" } } },
    ] },

  VN_canal_lison: { act: "V", title: "Le sachet de Lison", place: "sorne",
    text: [
      { with: "lison", text: "Lison descend sur la vase, jusqu'à trois pas de la rigole, et vide son sachet loin sur la gauche : des têtes de poisson et du sang caillé. L'eau s'agite d'un coup de ce côté-là, se met à bouillir. Elle revient en marchant à reculons, sans se presser. « Maintenant, dit-elle. À droite. Et sans courir : ça les fait se retourner. »" },
      { with: "lison", text: "Vous passez la rigole à droite, de l'eau jusqu'aux cuisses, pendant qu'à dix pas les anguilles se battent pour les têtes. Sur l'autre quai, Lison s'essuie les mains sur sa jupe. « Aux Joncs, dit-elle, on apprend ça avant de savoir nager. »" },
    ],
    choices: [{ label: "Descendre vers le port", to: "VN_port" }] },

  VN_canal_pont: { act: "V", title: "Le pont", place: "sorne",
    fx: { pv: -4, clock: { maree: 1 } },
    text: [
      "Au milieu du pont, le chêne craque, puis cède. Tu tombes avec les planches dans la vase, à deux pas de la rigole, et les anguilles sont sur toi avant que tu aies pu te relever. Une morsure au mollet, une autre au poignet. Tu te débats, tu roules, tu rampes sur la vase jusqu'au quai d'en face.",
      "Le temps de bander les morsures et de retrouver ton souffle, une heure a passé.",
    ],
    choices: [{ label: "Descendre vers le port", to: "VN_port" }] },

  VN_port: { act: "V", title: "Le port des galères", place: "sorne", backName: "le port des galères",
    text: [
      { first: true, text: "Le port des galères est un bassin carré, fermé par un môle, et la mer l'a laissé à sec. Les galères y sont posées sur la vase, couchées sur le flanc ou droites sur leur quille, une douzaine, comme des bêtes endormies : les galères de la reine, que les Comptoirs ont désarmées la nuit de la trahison et que la mer a gardées. Leurs mâts se croisent au-dessus du bassin. Au bout du môle, une tour carrée : la capitainerie." },
      { first: true, text: "La plus grande galère est droite au milieu du bassin, sa proue dorée tournée vers la ville. À l'avant, en lettres d'or écaillé : *La Fidèle*." },
      { again: true, text: "Le bassin à sec, les galères couchées, la tour de la capitainerie au bout du môle." },
      "Le môle {{echo#vn_mole|est couvert de varech jusqu'à la tour|garde le cri d'un maître de galère : « Ils ont pris les rames ! Ils ont mis des chaînes à nos hommes ! Ce sont nos propres gardes qu'ils mettent au banc ! »}}.",
      "Au pied de la tour, une borne d'amarrage {{pie#vn_borne|est une borne de pierre grise, usée par les cordages|est une borne de pierre vert pâle, veinée de blanc : la même pierre que les instruments}}.",
      { before: "prevot:dejoue", text: "À l'autre bout du bassin, les soldats d'Aveline ont allumé des torches autour d'une galère couchée. Ils en sortent des coffres et les portent vers des chaloupes tirées sur la vase, au pied du môle." },
      { if: M(4), text: "Au-delà du môle, la mer est revenue. Tu entends les vagues battre la pierre de l'autre côté, et un filet d'eau passe déjà par une brèche et descend dans le bassin." },
    ],
    choices: [
      { label: "Monter à bord de La Fidèle", hide: { quest: "VN_rameurs" }, to: "VN_fidele" },
      { label: "La tour de la capitainerie", hide: { seen: "VN_solde" }, to: "VN_solde" },
      { label: "Frapper le diapason sur la borne d'amarrage", once: true, hide: { any: [{ not: { voile: "vn_borne" } }, { not: { item: "diapason" } }] }, fx: { recharge: { echo: 2 }, note: "La borne du môle est une pierre chantante : le diapason se ravive." }, to: "VN_port_borne" },
      { label: "Les chaloupes d'Aveline, au pied du môle", hide: { any: [{ has: "prevot:dejoue" }, { seen: "VN_port_soldats" }] }, to: "VN_port_soldats" },
      { label: "Remonter vers la place", back: "V_hub" },
    ] },

  VN_port_borne: { act: "V", title: "La borne du môle", place: "sorne",
    text: [
      "Le diapason frappe la borne, et la borne chante, une note ronde qui court le long du môle et fait vibrer les mâts des galères comme des cordes. Le bronze se réchauffe dans ta paume.",
      "Le môle, autour de toi, {{echo#vn_borne_echo|résonne longtemps|rend une voix de vieux marin qui parle à un mousse : « Tu vois cette pierre ? On l'a remontée des Écueils. Elle écoute. Quand la reine sera revenue, elle chantera toute seule »}}.",
    ],
    choices: [{ back: "VN_port" }] },

  VN_fidele: { act: "V", title: "La Fidèle", place: "sorne",
    fx: { questSeen: "VN_rameurs" },
    text: [
      { first: true, text: "Tu montes à bord par une échelle de corde pourrie qui tient par miracle. Le pont de La Fidèle est couvert de varech, et sur toute sa longueur, de part et d'autre de la coursive, les bancs de nage : vingt-quatre de chaque côté. Sur chaque banc, des os. Des squelettes assis, trois par rame, les chevilles prises dans des fers rivés au banc, les mains encore sur le bois des avirons." },
      { first: true, text: "Ils sont tournés vers la poupe, comme des rameurs doivent l'être. Ils regardent la ville." },
      { again: true, text: "La Fidèle, ses bancs de nage, ses rameurs d'os enchaînés." },
      "Les bancs {{echo#vn_cle_nage|grincent quand le vent passe dans les avirons|gardent un chant de nage, cent quarante voix d'hommes qui rament à vide, au rythme du tambour : « Nous nous taisons, hisse, pour qu'elle parle, hisse, à la septième bouche, hisse, celle qui n'en a pas »}}.",
      "À la poupe, cloué au mât de pavillon, un rouleau de parchemin dans un étui de cuivre. Tu le déroules : *{{loupe#vn_role|Rôle de la chiourme de La Fidèle, forçats condamnés pour vol et brigandage|Rôle des gardes de la reine, condamnés au banc par les Comptoirs pour avoir refusé de livrer leur maîtresse}}.* Suivent cent quarante-quatre noms.",
      { with: "salome", text: "Salomé passe entre les bancs sans rien toucher. Au douzième, elle s'arrête, se penche sur le parchemin que tu tiens, puis lit un nom à voix haute. « Brac, dit-elle. Pierre Brac, de Port-Vasier. » Elle regarde les os longtemps. « Mon père disait qu'on avait toujours été dans la marine de la reine. Je croyais qu'il se vantait. »" },
      { if: M(4), text: "L'eau entre dans le bassin par la brèche du môle. Elle arrive déjà sous la quille de La Fidèle, et la galère gémit." },
    ],
    choices: [
      { label: "Briser les fers, un banc après l'autre, pour que la mer les emporte libres", fx: { clock: { maree: 1 } }, to: "VN_fidele_fers" },
      { label: "Emporter le rôle, pour rendre les noms aux Hautes-Eaux", hide: { item: "vn_role" }, fx: { item: "vn_role" }, to: "VN_fidele_role" },
      { label: "Redescendre sur la vase", back: "VN_port" },
    ] },

  VN_fidele_fers: { act: "V", title: "Les fers", place: "sorne",
    fx: { quest: "VN_rameurs", flag: "vn:rameurs_libres", ep: ["seance", 3000], fac: { hautes: 10, taiseurs: 5 } },
    text: [
      "Les fers sont rouillés jusqu'au cœur. Un coup de barre, et le rivet saute. Tu vas de banc en banc. Quand le fer tombe, les os restent assis, les mains sur la rame. Mais les chevilles sont libres.",
      { with: "any", text: "Les autres s'y mettent avec toi, sans qu'on le leur demande. On entend seulement les coups de barre et le bruit des fers qui tombent sur le pont, cent quarante-quatre fois." },
      "Quand tu redescends, l'eau arrive sous la galère. Elle la soulève d'un pouce, la repose. À la prochaine marée, elle l'emportera, et les rameurs avec, chacun à son banc, libres.",
      "Tu {{miroir#vn_fers_miroir|as fait ce qu'il fallait faire|as donné une heure à des morts, et cette heure-là, tu la garderas toute ta vie}}.",
    ],
    choices: [{ back: "VN_port" }] },

  VN_fidele_role: { act: "V", title: "Le rôle de La Fidèle", place: "sorne",
    fx: { quest: "VN_rameurs", flag: "vn:rameurs_noms", ep: ["seance", 2500], fac: { hautes: 10 } },
    text: [
      "Tu roules le parchemin dans son étui et tu le glisses sous ta chemise, contre la peau, là où la mer ne l'atteindra pas. Cent quarante-quatre noms. Des Brac, des Graumont, des Vasse, des noms de Port-Vasier, des Joncs-Bas, de la Saline. Les familles des Hautes-Eaux ont envoyé leurs fils garder la reine, et les Comptoirs les ont mis au banc.",
      "On les appelle encore *les forçats de Sorne*, dans les chansons de Port-Vasier. Avec ce rouleau, on pourra changer la chanson.",
      { with: "salome", text: "Salomé te regarde ranger le rouleau. « Tu le liras à Port-Vasier, dit-elle. Sur la place, un jour de marché. Tous les noms, un par un. Je tiendrai la lanterne. »" },
    ],
    choices: [{ back: "VN_port" }] },

  VN_solde: { act: "V", title: "La capitainerie", place: "sorne",
    text: [
      "La tour de la capitainerie a gardé sa porte. Dedans, une salle ronde : une table, des registres collés en blocs par le sel, un tabouret, et dans un coin, un coffre bardé de fer, la serrure ouverte, le couvercle rabattu. La solde des galères. Le coffre est plein de ducats noircis, à l'effigie d'une femme couronnée. Ysaure.",
      "Le coffre {{pie#vn_solde|est plein jusqu'au bord, une fortune|est plein jusqu'à mi-hauteur seulement : le reste est un faux fond de plomb, et sous le plomb, un second compartiment, lourd, fermé par un loquet}}.",
      "Il pèse le poids d'un âne. Le porter jusqu'à la grève prendrait une heure, et deux bras de plus.",
      { if: M(4), text: "Par la meurtrière, l'eau bat déjà le pied de la tour." },
    ],
    choices: [
      { label: "Ouvrir le second compartiment, sous le plomb", hide: { not: { voile: "vn_solde" } }, fx: { item: "vn_tr_solde", clock: { tresors: 1 }, flag: "tresor:vn_solde", ep: ["perso", 1500] }, to: "VN_solde_fond" },
      { label: "Charger le coffre entier et le traîner jusqu'à la grève", fx: { clock: { maree: 1 }, gold: 300, flag: "tresor:vn_coffre", ep: ["perso", 800] }, to: "VN_solde_porte" },
      { label: "Remplir tes poches d'une poignée de ducats", once: true, fx: { gold: 40 }, to: "VN_solde_poignee" },
      { label: "Laisser la solde des galères à la mer", back: "VN_port" },
    ] },

  VN_solde_fond: { act: "V", title: "Le second fond", place: "sorne",
    text: [
      "Le loquet cède. Sous le plomb, enveloppés dans du cuir huilé, six lingots d'or petits comme des savons, frappés de la bouche fermée des Taiseurs. Et un pli scellé, tout sec, adressé à *Aymeric Vasse, chancelier*. Tu le décachettes : c'est un reçu. *Reçu du capitaine de La Fidèle la paie de ses hommes, qu'il ne peut plus leur verser, pour être gardée jusqu'au retour de la reine.*",
      "Les lingots tiennent dans une besace. Tu laisses les ducats.",
    ],
    choices: [{ back: "VN_port" }] },

  VN_solde_porte: { act: "V", title: "Le coffre sur la vase", place: "sorne",
    text: [
      "Vous traînez le coffre sur la vase, par une corde, en vous relayant, jusqu'à la porte de Mer, puis jusqu'à la grève. Il laisse un sillon profond derrière lui. Il te faut une heure, et quand tu reviens dans la ville, tu as les épaules en feu.",
      { if: { has: "basse:equipage" }, text: "Tes gens, sur la grève, regardent le coffre avec des yeux ronds. Le gros homme y plonge la main, ressort un ducat noirci, le mord. « On le garde, dit-il. Promis. »", else: "Tu caches le coffre sous la barque, dans la vase, et tu repars en espérant que la mer et les autres l'oublieront." },
    ],
    choices: [{ back: "V_hub" }] },

  VN_solde_poignee: { act: "V", title: "Une poignée", place: "sorne",
    text: [
      "Tu plonges les mains dans les ducats noircis et tu en remplis tes poches. Ils sont froids, gras de sel. Une quarantaine, peut-être. Tu sens leur poids sur tes hanches à chaque pas.",
    ],
    choices: [{ back: "VN_solde" }] },

  VN_port_soldats: { act: "V", title: "Les chaloupes d'Aveline", place: "sorne",
    text: [
      "Les chaloupes sont tirées sur la vase au pied du môle, six, chacune amarrée à un anneau de la pierre par une seule aussière. Les soldats y chargent des coffres pris dans une galère couchée : de la vaisselle d'argent, des armes de parade, et un grand coffre que quatre hommes portent avec peine. Un sergent compte à voix haute. La plupart des soldats sont dans la galère, à fouiller.",
      "Le sergent dit à un piquier : « On {{oreille#vn_sergent|charge, et on repart avant la marée|charge, et à l'aube on repasse prendre la ville, les Salvézans croiront voir revenir leurs pêcheurs}}. »",
    ],
    choices: [
      { label: "Trancher les aussières, et laisser la mer emporter les chaloupes", test: { dom: "discretion", diff: -10, label: "Couper six amarres sous le nez d'un sergent", help: [{ with: "fauvette", v: 15 }, { with: "salome", v: 10 }] },
        win: { fx: { flag: "vn:chaloupes", ep: ["seance", 3000] }, to: "VN_port_chaloupes" }, lose: { to: "VN_port_combat" } },
      { label: "Prévenir les autres : la flotte du duc va remonter vers Salvèze à l'aube", hide: { not: { voile: "vn_sergent" } }, fx: { flag: "vn:aveline_aube", ep: ["perso", 1000] }, back: "VN_port" },
      { label: "Laisser les soldats à leur pillage", back: "VN_port" },
    ] },

  VN_port_chaloupes: { act: "V", title: "Les amarres", place: "sorne",
    text: [
      "Tu rampes d'un anneau à l'autre sous le môle, dans l'ombre, pendant que le sergent compte ses coffres. Six aussières. Tu les entames toutes aux trois quarts, assez pour qu'elles tiennent encore sur la vase, et cèdent au premier mouvement de l'eau.",
      "Quand la mer reviendra, elle soulèvera les chaloupes, et les emportera au large, avec leurs coffres. Les soldats d'Aveline resteront dans Sorne, à attendre que leurs navires envoient d'autres barques. Ça leur prendra la nuit.",
    ],
    choices: [{ back: "VN_port" }] },

  VN_port_combat: { act: "V", title: "Le sergent", place: "sorne",
    text: [
      "Le sergent te voit à la troisième amarre. Il crie. Des soldats sautent de la galère, piques basses.",
    ],
    choices: [
      { label: "Se battre au pied du môle", fight: { title: "Les gardes des chaloupes", enemies: [{ id: "soldat_aveline", n: 3 }],
        win: { fx: { flag: "vn:chaloupes", ep: ["seance", 3000] }, to: "VN_port_chaloupes" }, lose: { fx: { pv: -3, clock: { maree: 1 } }, to: "VN_port" },
        flee: { label: "Fuir entre les galères couchées", dom: "discretion", diff: -10, to: "VN_port" } } },
    ] },
});

// ==================================================================== the house of Aymeric Vasse
Object.assign(P, {
  VN_vasse: { act: "V", title: "La rue des Chanceliers", place: "sorne", backName: "la porte du chancelier",
    text: [
      { first: true, text: "La rue des Chanceliers longe le chevet de la cathédrale : des maisons étroites et hautes, à pignons de pierre, où logeaient les gens de la reine. La plus haute a une porte de chêne noir, et au milieu de la porte, à hauteur de visage, un masque de cuivre vert : un homme aux lèvres closes, aux yeux grands ouverts. Le muet du chancelier." },
      { again: true, text: "La rue des Chanceliers, la porte noire, le masque de cuivre aux yeux ouverts." },
      "Sur le linteau, une ligne gravée : *{{loupe#vn_linteau|Ici demeure Aymeric Vasse, chancelier de la reine|Le loquet est dans l'œil gauche du muet ; la serrure est pour les voleurs}}.*",
      "La serrure {{pie#vn_serrure_vasse|est une belle serrure de bronze, à trois gardes|est une belle serrure de bronze, et au fond du canon, une aiguille d'acier attend la pointe d'un crochet, enduite d'une pâte noire}}.",
      "La rue, devant la porte, {{echo#vn_vasse_rue|est jonchée de tuiles tombées|garde la voix d'une petite fille : « Père, pourquoi le monsieur de cuivre il a les yeux ouverts ? » Et un homme qui rit : « Pour voir qui vient. Et la bouche fermée, pour ne pas le dire »}}.",
      { with: "lison", text: "Lison s'est arrêtée devant la porte, les mains dans les poches. « La maison où le muet cligne de l'œil, dit-elle. C'est dans une chanson. Je croyais que ça voulait dire qu'il était saoul. »" },
    ],
    choices: [
      { label: "Appuyer sur l'œil gauche du muet de cuivre", hide: { any: [{ not: { voile: "vn_linteau" } }, { seen: "VN_vasse_entree" }] }, fx: { ep: ["perso", 1200] }, to: "VN_vasse_entree" },
      { label: "Laisse-moi faire", who: "lison", hide: { any: [{ voile: "vn_linteau" }, { seen: "VN_vasse_entree" }] }, test: { dom: "savoir", diff: 0, label: "Lison se souvient de la chanson du muet qui cligne" },
        win: { fx: { conf: { lison: 5 } }, to: "VN_vasse_entree" }, lose: { fx: { clock: { maree: 1 } }, to: "VN_vasse_entree" } },
      { label: "Crocheter la serrure", hide: { any: [{ voile: "vn_serrure_vasse" }, { seen: "VN_vasse_entree" }] }, test: { dom: "discretion", diff: -10, label: "Crocheter une serrure de Taiseur", help: [{ if: { item: "crochets" }, v: 10 }] },
        win: { to: "VN_vasse_piege" }, lose: { to: "VN_vasse_piege" } },
      { label: "Enfoncer les volets du rez-de-chaussée", hide: { seen: "VN_vasse_entree" }, fx: { clock: { maree: 1 } }, test: { dom: "combat", diff: 0, label: "Enfoncer des volets de chêne", help: [{ with: "tibere", v: 15 }, { with: "salome", v: 10 }] },
        win: { to: "VN_vasse_entree" }, lose: { fx: { pv: -2, clock: { maree: 1 } }, to: "VN_vasse_entree" } },
      { label: "Entrer chez le chancelier", hide: { not: { seen: "VN_vasse_entree" } }, to: "VN_vasse_entree" },
      { label: "Revenir vers la place", back: "V_hub" },
    ] },

  VN_vasse_piege: { act: "V", title: "L'aiguille", place: "sorne",
    fx: { pv: -5 },
    text: [
      "Le crochet entre, tourne, accroche la première garde, et quelque chose pique le bout de ton doigt, très vite, comme une guêpe. Tu retires la main. Une goutte de sang, et autour, la peau qui devient blanche, puis grise.",
      "La douleur monte dans ta main, puis dans ton bras, lente, froide. Tu t'assieds sur le seuil, le bras serré contre toi, et tu attends que le monde arrête de tourner. Le poison a trois cents ans : il a perdu sa force. Il lui en reste assez pour te faire vomir dans le caniveau.",
      { with: "gildas", text: "Frère Gildas t'incise le doigt avec son canif, presse, presse encore, et te fait mâcher une feuille amère sortie de sa besace. « De la sauge des Combes, dit-il. Tu vivras. Tu auras mal, et tu vivras. »" },
      "Quand tu te relèves, la serrure a cédé : le crochet est resté dedans, et la porte s'est ouverte toute seule, d'un pouce.",
    ],
    choices: [{ label: "Entrer chez le chancelier", to: "VN_vasse_entree" }] },

  VN_vasse_entree: { act: "V", title: "La maison du chancelier", place: "sorne", backName: "le vestibule du chancelier",
    text: [
      { first: true, text: "La maison d'Aymeric Vasse a été fermée avant que la mer n'entre, et elle a tenu. Tu le sens dès le seuil : l'air est humide, mais il sent la cire, le vieux papier et l'ambre. Le vestibule est carrelé de noir et de blanc. Un escalier de bois monte vers l'étage ; une porte basse descend vers ce qui doit être un atelier. Sur un coffre, une paire de gants d'homme, posés là comme si on allait revenir les prendre." },
      { again: true, text: "Le vestibule du chancelier, son carrelage noir et blanc, les gants sur le coffre." },
      "Les murs du vestibule {{echo#vn_vestibule|sont lambrissés de chêne sombre|gardent la voix d'un homme qui donne des ordres à des gens qui partent : « Les instruments aux Écueils, au Beffroi, à la Saline, au Mont. Un feuillet chacun. La Charte reste ici, avec le gros. Personne ne sait tout. C'est ça, notre serment : que personne ne sache tout »}}.",
    ],
    choices: [
      { label: "Le cabinet du chancelier, à l'étage", hide: { seen: "VN_vasse_cabinet" }, to: "VN_vasse_cabinet" },
      { label: "La chambre, au fond du couloir de l'étage", hide: { seen: "VN_vasse_chambre" }, to: "VN_vasse_chambre" },
      { label: "L'atelier, en bas", hide: { seen: "VN_vasse_atelier" }, to: "VN_vasse_atelier" },
      { label: "Ressortir dans la rue des Chanceliers", back: "VN_vasse" },
    ] },

  VN_vasse_cabinet: { act: "V", title: "Le cabinet du chancelier", place: "sorne",
    fx: { ep: ["seance", 2000], questSeen: "VN_aymeric", flag: "vn:plan_ville" },
    text: [
      "Le cabinet est une pièce carrée tapissée de livres. Une table de travail sous la fenêtre, et dessus, tout est resté : l'encrier, les plumes taillées, une lampe, un sablier tombé sur le flanc. Au mur, une grande carte de Sorne, peinte sur toile, chaque rue, chaque maison, avec des petits signes à l'encre rouge.",
      "La carte {{loupe#vn_cle_vasse|montre la ville telle qu'elle était, et ses sept portes|montre, sous l'encre visible, un tracé plus pâle : une chaussée qui descend entre le palais et la cathédrale jusqu'à une place ronde, une porte, sept bouches dessinées en rang, et sous la septième, qui n'a pas de bouche, une phrase : nous nous taisons pour qu'elle parle}}.",
      "Sur la table, une lettre pliée, cachetée, que personne n'a envoyée. L'adresse dit : *À ma fille Isabeau, aux Joncs-Bas.*",
      "Tu {{miroir#vn_cabinet_miroir|t'assieds à cette table pour lire, par habitude de métier|t'assieds à cette table comme tu t'asseyais à celle d'Odeline, quand elle était sortie, pour faire semblant d'être la maîtresse}}.",
    ],
    choices: [
      { label: "Ouvrir la lettre d'Aymeric à sa fille", hide: { any: [{ item: "vn_lettre_aymeric" }, { quest: "VN_aymeric" }] }, fx: { item: "vn_lettre_aymeric" }, to: "VN_vasse_lettre" },
      { label: "Redescendre au vestibule", back: "VN_vasse_entree" },
    ] },

  VN_vasse_lettre: { act: "V", title: "La lettre d'Aymeric", place: "sorne",
    text: [
      "Le cachet de cire s'effrite sous ton pouce. La lettre est courte, d'une écriture penchée, rapide, qui s'appuie trop fort sur la plume. Tu la lis, et tu la glisses avec tes affaires. Elle ira où elle doit aller.",
      { with: "lison", text: "Lison lit par-dessus ton épaule. Quand tu as fini, elle tend la main. Tu lui donnes la lettre. Elle la relit seule, deux fois, les lèvres serrées. « Isabeau Vasse, dit-elle. C'est la première du nom, aux Joncs. On a toutes une Isabeau dans la famille. » Elle te rend la lettre. « Garde-la. Ma grand-mère voudra l'entendre de ta bouche. »" },
      { without: "lison", text: "Une lettre de père, écrite la nuit, pour une fille qui l'a peut-être attendue toute sa vie aux Joncs-Bas. Mère Ancolie voudra l'entendre." },
    ],
    choices: [
      { label: "Garder la lettre pour la rendre aux Vasse des Joncs-Bas", fx: { quest: "VN_aymeric", flag: "vn:aymeric_lettre", ep: ["seance", 2000], fac: { taiseurs: 10 } }, back: "VN_vasse_cabinet" },
      { label: "La reposer sur la table, où elle attend depuis trois siècles", fx: { quest: "VN_aymeric", drop: "vn_lettre_aymeric", flag: "vn:aymeric_laissee" }, back: "VN_vasse_cabinet" },
    ] },

  VN_vasse_chambre: { act: "V", title: "La chambre du chancelier", place: "sorne",
    text: [
      "La chambre est simple : un lit à rideaux, deux coffres, un berceau de bois peint au pied du lit, poussé contre le mur. Dans le berceau, une poupée de chiffon que la mer a changée en boule de sel.",
      "La chambre {{echo#vn_aymeric_nuit|est silencieuse, et le sel crisse sous tes pas|garde deux voix, la nuit, très bas. Une femme : « Tu ne viendras pas avec nous. » Un homme : « Quelqu'un doit fermer les portes. » La femme : « Et après ? » L'homme, après un long temps : « Après, je me tairai, comme les autres »}}.",
      "Tu {{miroir#vn_berceau_miroir|regardes ce berceau sans rien ressentir de particulier|regardes ce berceau en te demandant si ta mère, aux Joncs-Bas, en avait un pour toi, avant de te donner}}.",
      { with: "gildas", text: "Frère Gildas reste sur le seuil de la chambre. Il regarde le berceau, et sa main droite monte, sans qu'il s'en aperçoive, toucher son front à la racine des cheveux." },
    ],
    choices: [{ back: "VN_vasse_entree" }] },

  VN_vasse_atelier: { act: "V", title: "L'atelier des instruments", place: "sorne",
    text: [
      "L'atelier est une cave voûtée, sèche, éclairée par un soupirail. Des établis, des tours à pédale, des limes, des gouges, des pots de colle de poisson durcie. Sur les étagères, des blocs d'ambre brut, des morceaux d'os de baleine longs comme des bras, et des moules de plâtre en deux parties : la forme d'un cornet, d'une loupe, d'une fourche. C'est ici qu'on a fait les instruments.",
      "L'atelier {{echo#vn_atelier_echo|est plein d'une odeur de résine froide|garde la voix d'Aymeric qui explique à un apprenti : « L'ambre écoute. L'os retient. Le bronze rend. Un instrument, c'est une oreille qu'on a appris à ne pas oublier »}}.",
      "Dans un moule ouvert, sur l'établi, il reste une forme coulée et oubliée. Elle {{pie#vn_anneau|ressemble à un bouchon de plâtre|est un anneau d'or épais, serti d'un éclat d'ambre chantant, coulé dans le moule et jamais démoulé}}.",
      { with: "fauvette", text: "Fauvette passe la main sur les outils, un par un, avec respect. « Des gens qui savaient travailler, dit-elle. Ça se voit à l'usure des manches. »" },
    ],
    choices: [
      { label: "Briser le plâtre et prendre l'anneau", hide: { any: [{ not: { voile: "vn_anneau" } }, { item: "vn_tr_anneau" }] }, fx: { item: "vn_tr_anneau", clock: { tresors: 1 }, flag: "tresor:vn_anneau", ep: ["perso", 1500] }, to: "VN_vasse_anneau" },
      { label: "Remonter au vestibule", back: "VN_vasse_entree" },
    ] },

  VN_vasse_anneau: { act: "V", title: "L'anneau du chancelier", place: "sorne",
    text: [
      "Le plâtre éclate sous le manche de ta dague. L'anneau tombe dans ta paume, encore poudré de blanc. L'éclat d'ambre, au chaton, est de la taille d'une lentille. Quand tu le passes à ton doigt, tu entends, très loin, un murmure, comme quand on approche l'oreille d'un coquillage : les voix de la pièce, à peine, sans les mots.",
      "Avec ça au doigt, tu sens mieux quand quelqu'un se tait exprès.",
    ],
    choices: [{ back: "VN_vasse_atelier" }] },
});

// ==================================================================== the square of the Comptoirs
Object.assign(P, {
  VN_comptoirs: { act: "V", title: "La place des Comptoirs", place: "sorne", backName: "la place des Comptoirs",
    text: [
      { first: true, text: "La rue des Arcades débouche sur la plus grande place de Sorne. Elle est bordée sur trois côtés d'arcades profondes, et sous chaque arcade, une porte, une enseigne de fer : les comptoirs des grandes maisons. Tu reconnais des emblèmes que tu as vus à Salvèze sur des façades bien vivantes : les besants des Marrel, la tour des Delisle, la gerbe des Fourcaud. Le quatrième côté est fermé par une halle à colonnes, la halle des Comptoirs, avec son fronton." },
      { first: true, text: "Au milieu de la place, une seule chose : une pierre plate et carrée, large comme une table, au ras des pavés. C'est là que, cette nuit-là, il y a trois siècles, les Comptoirs ont attendu la reine." },
      { again: true, text: "La place des Comptoirs, ses arcades, ses enseignes, la halle au fond. La pierre carrée au milieu." },
      "La pierre carrée {{pie#vn_pierre_poids|est une dalle de granit noir, usée au centre|est une pierre de pesée, vert pâle et veinée de blanc : une pierre chantante, la plus grande que tu aies vue}}.",
      { if: { not: { has: "corisande:pacte" } }, text: "Devant la halle, des torches, des pelles qui sonnent sur la pierre, des cris : les gens de la Banque creusent sous les colonnes. Des barils sont alignés au pied du fronton." },
      { after: "corisande:pacte", text: "Devant la halle, les gens de la Banque creusent sous les colonnes à la lumière des torches. Ils te voient, et le capitaine lève la main vers toi, comme on salue un associé qu'on surveille." },
      { if: M(4), text: "L'eau sort des égouts de la place par les grilles, en bouillonnant, et se répand entre les pavés." },
    ],
    choices: [
      { label: "Frapper le diapason sur la pierre de pesée", once: true, hide: { any: [{ not: { voile: "vn_pierre_poids" } }, { not: { item: "diapason" } }] }, fx: { recharge: { echo: 2 }, note: "La pierre de pesée chante : le diapason se ravive." }, to: "VN_comptoirs_echo" },
      { label: "Te tenir sur la pierre carrée, et écouter", hide: { seen: "VN_comptoirs_echo" }, to: "VN_comptoirs_echo" },
      { label: "La halle des Comptoirs, où creusent les gens de la Banque", hide: { any: [{ has: "vn:berald_tenu" }, { has: "vn:berald_achete" }, { has: "vn:berald_battu" }, { seen: "VN_effondre" }] }, to: "VN_berald" },
      { label: "Les caves de la halle, et le bureau du greffier", hide: { any: [{ item: "vn_tr_sceau" }, { not: { any: [{ has: "vn:berald_tenu" }, { has: "vn:berald_achete" }, { has: "vn:berald_battu" }, { seen: "VN_effondre" }] } }] }, to: "VN_halle" },
      { label: "Le comptoir aux besants : la maison Marrel", hide: { seen: "VN_marrel" }, to: "VN_marrel" },
      { label: "Revenir vers la place des Quatre-Puits", back: "V_hub" },
    ] },

  VN_comptoirs_echo: { act: "V", title: "La pierre carrée", place: "sorne",
    fx: { ep: ["seance", 2500] },
    text: [
      { if: { seen: "VN_comptoirs_echo" }, text: "La pierre de pesée chante sous le diapason, une note si basse qu'elle fait trembler les arcades. Le bronze se réchauffe dans ta main, plein de nouveau." },
      "Tu te tiens sur la pierre carrée. Autour de toi, la place est vide et blanche de lune. Il fait froid.",
      "La pierre {{echo#vn_nuit_comptoirs|est froide sous tes semelles|garde des voix d'hommes, nombreux, essoufflés : « Tenez-la. » « Pas ici, Marrel, pas devant le peuple. » « Le peuple dort. Delisle, la lanterne. Plus près. » Et une femme qui se débat sans un mot, le bruit de ses talons sur la pierre}}.",
      "Les arcades {{echo#vn_couteau|te renvoient le bruit de tes propres pas|te renvoient un bruit de lutte, un cri étouffé dans une main, puis un homme, d'une voix très calme : « Voilà. Elle ne dira plus rien à personne. Demain, on écrit qu'elle est devenue muette de chagrin »}}.",
      "Sous l'arcade du coin nord, {{echo#vn_cle_comptoirs|une flaque reflète la lune|un homme chuchote très vite à quelqu'un qui pleure : « Écoute-moi, Isabeau. Retiens ces mots et oublie le reste : nous nous taisons pour qu'elle parle. À la septième bouche. Maintenant cours, cours jusqu'aux Joncs »}}.",
      { with: "lison", text: "Lison s'est assise sur les marches d'une arcade, les coudes sur les genoux, et regarde la pierre. Sans diapason, elle reste sourde à ces voix. Elle te regarde écouter, et elle attend." },
      { with: "tibere", text: "Tibère regarde l'enseigne aux besants, sous l'arcade d'en face. « Marrel », dit-il, et il crache par terre." },
    ],
    choices: [{ back: "VN_comptoirs" }] },

  VN_marrel: { act: "V", title: "Le comptoir Marrel", place: "sorne",
    text: [
      "Le comptoir Marrel est une salle basse et longue, des pupitres de clercs alignés, des balances de cuivre, des casiers. Au fond, sur la table du maître, un coffret de nacre enchaîné au plateau par une chaîne de fer, et ouvert : dedans, sur du velours noir, un collier de trois rangs de perles grosses comme des pois. Les perles de la reine, dit-on à Salvèze, vendues par les Marrel au duc de l'époque.",
      "Les perles {{pie#vn_perles|sont rondes, laiteuses, d'un orient parfait|sont de verre soufflé, remplies d'écaille de poisson broyée : la copie que les Marrel montraient aux visiteurs, quand ils avaient déjà vendu les vraies}}.",
      "Sur un pupitre, un registre de comptes, ouvert, collé par le sel. Une page se lit encore : *{{loupe#vn_registre_marrel|Frais de la Saint-Michel : chandelles, cire, encre, quatre ducats|Frais de la Saint-Michel : à l'évêque, pour le sceau, quatre cents ducats ; à Delisle, pour la lanterne et le silence, deux cents ; au barbier, pour la langue, trente}}.*",
    ],
    choices: [
      { label: "Briser la chaîne et emporter le coffret de perles", fx: { item: "vn_tr_perles", clock: { maree: 1, tresors: 1 }, flag: "tresor:vn_perles" }, to: "VN_marrel_perles" },
      { label: "Arracher la page du registre", hide: { any: [{ not: { voile: "vn_registre_marrel" } }, { item: "vn_page_marrel" }] }, fx: { item: "vn_page_marrel", flag: "vn:page_marrel", ep: ["seance", 2000] }, back: "VN_comptoirs" },
      { label: "Ressortir sur la place", back: "VN_comptoirs" },
    ] },

  VN_marrel_perles: { act: "V", title: "La chaîne du coffret", place: "sorne",
    text: [
      "La chaîne est rivée au plateau par en dessous, et le plateau est d'un seul tenant de chêne. Il faut une heure pour scier le rivet avec ta dague, en se relayant, pendant que dehors les pelles de la Banque sonnent sur la pierre. Le coffret vient enfin. Les perles roulent dans le velours avec un petit bruit de grêle.",
      { with: "fauvette", text: "Fauvette prend une perle entre deux doigts, la fait tourner devant la lanterne, la mord. Elle fait une grimace. « Du verre, dit-elle. Je l'ai sentie craquer. » Elle la remet dans le coffret quand même. « Ça se vend, le verre. À des gens qui n'ont pas de dents. »" },
    ],
    choices: [{ back: "VN_comptoirs" }] },

  VN_berald: { act: "V", title: "La halle des Comptoirs", place: "sorne",
    text: [
      "Sous les colonnes de la halle, une douzaine d'hommes de la Banque creusent le dallage à la pioche. Ils ont ouvert un trou large comme une charrette, qui descend dans des caves, et ils y ont descendu une échelle. Au bord du trou, les barils. Un homme carré, une chaîne d'argent sur la poitrine, surveille le travail, les poings sur les hanches : Léandre Escoffe.",
      { if: { not: { has: "corisande:pacte" } }, text: "Il te voit. Il fait un signe, et quatre hommes lâchent leurs pioches pour prendre des épées courtes. « La place est à la Banque, dit-il. La Banque l'a achetée à la République, avec le reste des fonds marins, il y a cent ans. Vous {{oreille#vn_berald_menace|êtes sur un terrain privé|allez mourir ici, et personne ne saura où chercher}}. »" },
      { after: "corisande:pacte", text: "Il te voit, et vient vers toi en souriant de toutes ses dents. « L'associé de Madame, dit-il. Madame m'a dit de vous aider. Si vous trouvez la Charte, {{oreille#vn_berald_pacte|vous me la confierez, pour plus de sûreté|je dois vous la prendre, et vous jeter dans le premier puits venu}}. »" },
      "Dans les caves, sous la halle, tu aperçois les clercs de la Banque qui fouillent un bureau de greffier, et en sortent des liasses qu'ils jettent dans un sac. Un coffre de fer, au fond, résiste à leurs pinces.",
    ],
    choices: [
      { label: "« Madame Marrel saura ce que vous gardez pour vous, Escoffe. »", hide: { not: { voile: "vn_berald_or" } }, fx: { flag: "vn:berald_tenu", ep: ["seance", 2500] }, to: "VN_halle" },
      { label: "« Je sais ce que Madame vous a ordonné. Essayez, et vos hommes sauront ce que vous valez. »", hide: { not: { voile: "vn_berald_pacte" } }, fx: { flag: "vn:berald_tenu", ep: ["seance", 2500] }, to: "VN_halle" },
      { label: "Lui offrir de l'or pour qu'il retienne ses hommes", if: { gold: { min: 60 } }, why: "Il te faudrait soixante ducats au moins.", fx: { gold: -60, flag: "vn:berald_achete" }, to: "VN_halle" },
      { label: "Se battre au bord du trou", fight: { title: "Les gens de la Banque", enemies: [{ id: "spadassin", n: 4 }],
        win: { fx: { ep: ["seance", 3000], flag: "vn:berald_battu" }, to: "VN_halle" }, lose: { fx: { pv: -3 }, to: "VN_effondre" },
        flee: { label: "Se jeter dans le trou, vers les caves", dom: "nature", diff: -10, to: "VN_effondre" } } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: -10, label: "Tibère parle aux gens de la Banque en ancien de la maison" },
        win: { fx: { conf: { tibere: 10 }, flag: "vn:berald_tenu" }, to: "VN_halle" }, lose: { to: "VN_effondre" } },
      { label: "Laisser la halle à la Banque", back: "VN_comptoirs" },
    ] },

  VN_effondre: { act: "V", title: "L'effondrement", place: "sorne",
    fx: { pv: -3, clock: { maree: 1 } },
    text: [
      "Quelqu'un renverse une torche. Elle roule jusqu'au bord du trou, sur un baril crevé, et la poudre prend avec un souffle blanc. L'explosion est courte, sourde. Le dallage de la halle se soulève, se fend, et une colonne s'abat en travers de la place dans un fracas qui fait taire toute la ville.",
      "Tu te retrouves en bas, dans les caves, sous une pluie de poussière et de coquilles, une jambe prise sous une poutre. Autour, des hommes de la Banque qui toussent, qui crient, qui cherchent l'échelle. Il te faut une heure pour te dégager, trouver un soupirail, et ressortir par l'arrière de la halle, couvert de plâtre, les oreilles sifflantes.",
      { with: "any", text: "On te retrouve à l'arrière de la halle. Tout le monde est vivant, blanc de plâtre, et chacun s'en étonne." },
      "Le bureau du greffier, au fond des caves, est resté debout. Le coffre de fer aussi.",
    ],
    choices: [{ label: "Fouiller les caves jusqu'au bureau du greffier", to: "VN_halle" }] },

  VN_halle: { act: "V", title: "Le bureau du greffier", place: "sorne",
    text: [
      { if: { any: [{ has: "vn:berald_tenu" }, { has: "vn:berald_achete" }] }, text: "Léandre Escoffe rappelle ses hommes d'un geste sec, et ils s'écartent pour te laisser descendre l'échelle. Il garde les yeux sur ses bottes." },
      { if: { has: "vn:berald_battu" }, text: "Les gens de la Banque se sont repliés vers les arcades en traînant leurs blessés. Léandre Escoffe te crie des menaces de loin, puis se tait." },
      "Le bureau du greffier des Comptoirs est une salle basse, sous la halle, pleine de casiers. Au fond, le coffre de fer que les clercs n'ont pas pu ouvrir. Sur le couvercle, en relief, les armes des quatre maisons, et une serrure à quatre clés. Le coffre {{pie#vn_coffre_greffier|est d'un fer épais, sans faille|est d'un fer épais, mais ses charnières sont à l'extérieur, et le sel en a mangé les goupilles}}.",
      "Sur un pupitre, des copies d'actes, les mêmes en dix exemplaires. *{{loupe#vn_actes|Par la présente, la reine Ysaure, en pleine possession de ses esprits, cède aux maisons du Conseil les terres gagnées sur la mer|Écrit le lendemain de la Saint-Michel, la reine étant enfermée et privée de la parole, et le sceau apposé hors de sa présence}}.*",
    ],
    choices: [
      { label: "Chasser les goupilles des charnières, et ouvrir le coffre par le dos", hide: { any: [{ not: { voile: "vn_coffre_greffier" } }, { item: "vn_tr_sceau" }] }, fx: { item: "vn_tr_sceau", clock: { tresors: 1 }, flag: "tresor:vn_sceau", ep: ["seance", 3000] }, to: "VN_sceau" },
      { label: "Forcer le coffre à la barre", hide: { any: [{ voile: "vn_coffre_greffier" }, { item: "vn_tr_sceau" }] }, fx: { clock: { maree: 1 } }, test: { dom: "combat", diff: -10, label: "Forcer un coffre de fer", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { item: "vn_tr_sceau", clock: { tresors: 1 }, flag: "tresor:vn_sceau", ep: ["seance", 2500] }, to: "VN_sceau" }, lose: { back: "VN_comptoirs" } },
      { label: "Emporter une copie des actes", hide: { any: [{ not: { voile: "vn_actes" } }, { item: "vn_acte_faux" }] }, fx: { item: "vn_acte_faux", flag: "vn:acte_faux" }, back: "VN_comptoirs" },
      { label: "Remonter sur la place", back: "VN_comptoirs" },
    ] },

  VN_sceau: { act: "V", title: "Le sceau des Comptoirs", place: "sorne",
    text: [
      "Dans le coffre, sur un lit de laine noire, une matrice de bronze grande comme une paume, avec sa poignée d'ivoire : le grand sceau des Comptoirs. Les armes des quatre maisons, et autour, en lettres à l'envers, la devise du Conseil. Celle qu'on voit encore aujourd'hui sur toutes les lettres de change de Salvèze.",
      "C'est avec ce sceau-là qu'on a scellé les actes faux. Il porte, sur le bord, une petite fêlure en forme de V, que tu retrouves sur chaque copie du pupitre. N'importe quel greffier de Salvèze la reconnaîtra.",
      { with: "tibere", text: "Tibère prend le sceau, le soupèse, le retourne. « Au Guet, dit-il, on appelait ça une pièce à conviction. » Il te le rend avec précaution, comme un œuf." },
    ],
    choices: [{ back: "VN_comptoirs" }] },
});

// ==================================================================== the causeway, Lothaire, the last door
var SOLDATS_PORTE = { all: [{ not: { has: "prevot:dejoue" } }, { not: { has: "vn:soldats_chasses" } }, { not: { seen: "VN_porte_soldats" } }] };
Object.assign(P, {
  VN_chaussee: { act: "V", title: "La chaussée des Muets", place: "sorne", backName: "la chaussée des Muets",
    text: [
      { first: true, text: "La chaussée descend en pente douce entre la colline du palais et le chevet de la cathédrale. Elle est large, dallée de pierre bleue, et bordée de statues : sept de chaque côté, plus grandes que nature, des hommes et des femmes en robe de clerc, debout, les mains jointes devant la bouche. Les Taiseurs d'Aymeric. La mer leur a mis des barbes de varech et des colliers de moules." },
      { first: true, text: "Au bout, la chaussée s'ouvre sur une place ronde, adossée à la colline. Dans la paroi, une porte." },
      { again: true, text: "La chaussée des Muets, ses quatorze statues aux mains jointes, la place ronde au bout." },
      "Au pied de la dernière statue, la chaussée {{echo#vn_chaussee_pas|est usée en son milieu|garde le pas de quelqu'un qui marche seul, lentement, et qui compte à voix basse : « Sept à gauche, sept à droite, et la septième bouche au bout. » Puis plus rien que la mer, très loin}}.",
      "La quatrième statue de gauche {{pie#vn_statue|tient un livre de pierre contre sa poitrine|tient un livre de pierre, et le livre est creux : il y a une niche dedans, vide, la place d'un cornet}}.",
      { if: M(5), text: "L'eau monte sur la chaussée par le bas, en nappe mince, et elle s'arrête au pied de la quatrième statue. Plus haut, la pierre est encore sèche." },
      { if: MER, text: "Derrière toi, la ville s'enfonce. Le flot couvre la place des Quatre-Puits, entre dans les rues, roule vers la chaussée. La place ronde, au bout, est le seul endroit sec qui reste." },
      { after: "lothaire:allie", text: "Lothaire Brunel marche à côté de toi, le cornet jumeau à la main. Il s'arrête devant chaque statue et l'écoute, la tête penchée. « Ils ont tous la même voix, dit-il enfin. Comme une seule personne qui se répète. »" },
      { if: { all: [COURSE, M(0, 2)] }, text: "Sur la chaussée, à mi-pente, des lanternes : Lothaire Brunel et ses hommes. Ils ont posé leur tonneau au pied d'une statue, et Lothaire, le cornet jumeau à l'oreille, écoute la pierre." },
      { if: { all: [COURSE, M(0, 2), { has: "vn:vu_course" }] }, text: "D'en haut, tout à l'heure, tu les as vus avancer de statue en statue. Ils en ont gagné trois depuis. Ils écoutent chaque pierre, et cela leur prend du temps." },
      { if: { all: [COURSE, M(3)] }, text: "La chaussée est vide. Au bout, sur la place ronde, des lanternes sont posées par terre, en rond, et la porte, dans la paroi, est ouverte. Lothaire est passé avant toi." },
    ],
    choices: [
      { label: "Aborder Lothaire Brunel, au milieu de la chaussée", hide: { any: [{ not: COURSE }, M(3), { seen: "VN_lothaire" }] }, to: "VN_lothaire" },
      { label: "Courir vers la porte ouverte", big: true, hide: { any: [{ not: COURSE }, M(0, 2)] }, fx: { flag: ["vn:lothaire_devant", "vn:porte_ouverte"], set: { vn_porte: "lothaire" } }, to: "VN_porte_lothaire" },
      { label: "Descendre jusqu'à la place ronde et la dernière porte", big: true, hide: { any: [{ all: [COURSE, M(3)] }, SOLDATS_PORTE] }, to: "VN_porte" },
      { label: "Descendre vers la place ronde, où brillent des cuirasses", big: true, hide: { any: [{ all: [COURSE, M(3)] }, { not: SOLDATS_PORTE }] }, to: "VN_porte_soldats" },
      { label: "Remonter vers la place des Quatre-Puits", hide: MER, back: "V_hub" },
    ] },

  VN_lothaire: { act: "V", title: "Lothaire Brunel", place: "sorne",
    text: [
      "Lothaire te voit venir de loin et reste où il est. Il ôte le cornet jumeau de son oreille, le regarde, le remet. Ses hommes se lèvent, la main sur l'épée. Il les arrête d'un doigt. Ses gants gris sont noirs de vase jusqu'aux poignets.",
      "« Vous voilà, dit-il de sa voix douce. J'ai entendu votre cloche, ou vos pas, ou vos pensées : ça fait du bruit, une personne qui cherche. » Il sourit. « Je {{oreille#vn_lothaire_or|ne veux que l'or. Gardez votre Charte, je n'en ai que faire|veux la Charte. Corisande la croit bonne à brûler ; le duc, lui, la paiera le prix d'une ville}}. »",
      { if: { has: "ivb:lothaire_libre" }, text: "« Nous nous sommes quittés chez Madame, ajoute-t-il. Je vous y ai laissé{e} avec ses gardes, et vous en êtes sorti{e} quand même. Je l'ai appris le lendemain. J'ai souri toute la journée. »" },
      "Il penche la tête, écoute. « Vous pensez que je mens. Vous avez raison, bien sûr. Mais vous pensez aussi que vous ne savez pas où est la porte. Et ça, c'est vrai. » Il montre le bout de la chaussée. « Moi, je le sais presque. »",
      { with: "salome", if: { has: "salome:maiwenn" }, text: "Salomé se tait. Elle a la main sur son coutelas, les jointures blanches, et elle regarde Lothaire comme on regarde une vague qui monte. Lothaire évite de la regarder. Tu remarques qu'il l'a vue avant toi." },
      { with: "tibere", text: "Tibère se tient un pas en arrière. Lothaire lui adresse un petit signe de tête, aimable, comme à un employé. Tibère {{oreille#vn_tibere_lothaire|lui rend son salut, par politesse|serre les mâchoires, et pense à cinq ducats la semaine et à tout ce qu'ils lui ont coûté}}." },
    ],
    choices: [
      { label: "Lui dire que la porte est sous le port, en pensant au port de toutes tes forces", if: { has: "taiseurs:serment" }, why: "Il entend ce que tu penses. Il faudrait savoir se taire en dedans, comme les Taiseurs.", fx: { flag: "vn:lothaire_retarde", ep: ["seance", 3000] }, to: "VN_lothaire_trompe" },
      { label: "Lui dire que la porte est sous le port", hide: { has: "taiseurs:serment" }, to: "VN_lothaire_entend" },
      { label: "« Ce que le duc paiera, il vous le paiera en corde. Demandez à vos hommes s'ils veulent servir Aveline. »", hide: { not: { voile: "vn_lothaire_or" } }, fx: { flag: "vn:lothaire_seul", ep: ["seance", 2500] }, to: "VN_lothaire_seul" },
      { label: "Lui proposer d'ouvrir la porte ensemble, et de partager", fx: { flag: "vn:lothaire_marche" }, to: "VN_lothaire_marche" },
      { label: "Frapper le premier", fight: { title: "Lothaire et ses hommes", enemies: [{ id: "spadassin", n: 3 }, { id: "vn_lothaire", n: 1 }],
        win: { fx: { flag: "vn:lothaire_retarde", ep: ["seance", 3500] }, to: "VN_lothaire_fuit" }, lose: { fx: { pv: -3, clock: { maree: 1 }, flag: "vn:lothaire_devant" }, to: "VN_lothaire_devance" },
        flee: { label: "Remonter la chaussée", dom: "discretion", diff: -10, to: "VN_lothaire_devance" } } },
    ] },

  VN_lothaire_trompe: { act: "V", title: "Le port", place: "sorne",
    text: [
      "Tu dis : « Sous le port. La septième galère. » Et pendant que tu le dis, tu ne penses à rien d'autre. Tu as appris aux Joncs-Bas à laisser une pensée devant les autres comme on laisse une barque devant la sienne dans un chenal étroit. Tu penses au port, aux galères, à la septième. Tu le vois, tu le sens.",
      "Lothaire écoute longtemps. Puis il ôte le cornet de son oreille et le regarde, avec une expression que tu ne lui connais pas : de la surprise. « Le port, dit-il. Merci. » Il fait un geste. Ses hommes ramassent le tonneau et l'échelle, et la troupe remonte la chaussée vers la ville basse, au pas de course.",
      "Il se retourne une fois, en haut de la chaussée. Il doute. Mais il continue.",
    ],
    choices: [{ back: "VN_chaussee" }] },

  VN_lothaire_entend: { act: "V", title: "Ce que vous pensez", place: "sorne",
    fx: { flag: "vn:lothaire_devant" },
    text: [
      "Tu dis : « Sous le port. » Lothaire rit, sans bruit, de toutes ses dents.",
      "« Vous dites le port, dit-il. Vous pensez la chaussée, et une porte au bout, et vous pensez *pourvu qu'il me croie*. » Il tapote le cornet jumeau. « Merci quand même. Vous venez de me dire que je suis sur la bonne route. »",
      "Il fait un geste. Ses hommes reprennent le tonneau, et la troupe descend la chaussée, plus vite qu'avant.",
      "Tu {{miroir#vn_lothaire_miroir|te dis que tu as essayé, au moins|sais qu'il a entendu aussi autre chose : que tu as peur de lui, et que tu l'admires un peu}}.",
    ],
    choices: [{ back: "VN_chaussee" }] },

  VN_lothaire_seul: { act: "V", title: "Les hommes de Lothaire", place: "sorne",
    fx: { flag: "vn:lothaire_retarde" },
    text: [
      "Tu le dis assez fort pour que ses hommes l'entendent. Ils sont six, des spadassins de la Banque, des gens de Salvèze. Ils se regardent. Le plus vieux pose son bout du tonneau par terre.",
      "« Le duc, dit-il. Vous nous aviez dit la Banque, maître Brunel. » Lothaire ouvre la bouche, la referme. Pour la première fois, tu le vois chercher ses mots. « La Banque, bien sûr, dit-il. Le duc paiera la Banque. » Personne ne le croit. Son cornet sait entendre ; persuader, c'est une autre affaire.",
      "Les hommes repartent vers la grève, un par un, sans courir. Lothaire reste seul sur la chaussée, avec son tonneau, trop lourd pour lui seul. Il te regarde, et il te salue, très bas. « Joliment joué », dit-il. Puis il s'assied sur le tonneau, et il recommence à écouter la pierre, seul.",
    ],
    choices: [{ back: "VN_chaussee" }] },

  VN_lothaire_marche: { act: "V", title: "Le marché", place: "sorne",
    text: [
      "Lothaire t'écoute, le cornet à l'oreille, et il hoche la tête. « Ensemble, dit-il. Et puis, devant le trésor, chacun pour soi. Vous pensez exactement ça, et moi aussi. C'est très honnête. » Il te tend la main, une main gantée de gris, pleine de vase.",
      "« Je {{oreille#vn_lothaire_marche|tiendrai parole jusqu'à la porte|vous laisserai ouvrir, et je prendrai ce qu'il y a derrière avant que vous ayez fini d'avoir peur}}, dit-il. Et vous, vous me trahirez dès que vous pourrez. Nous voilà associés. »",
      { with: "lison", text: "Lison regarde la main tendue sans la prendre. « Si tu la serres, dit-elle, je ne te parle plus. » Elle le dit sans colère, comme un fait." },
    ],
    choices: [{ back: "VN_chaussee" }] },

  VN_lothaire_fuit: { act: "V", title: "La chaussée", place: "sorne",
    text: [
      "Le dernier spadassin tombe. Lothaire, lui, a déjà reculé jusqu'à la statue la plus proche, une main sur l'épaule, où ta lame l'a touché. Il saigne sur son gant gris. Il te regarde comme un joueur regarde une partie perdue, sans colère.",
      "« Une autre fois », dit-il. Et il s'en va, à reculons d'abord, puis en courant, vers la ville basse, où la mer l'attend. Il lui faudra du temps pour retrouver ses hommes, ou pour en trouver d'autres.",
    ],
    choices: [{ back: "VN_chaussee" }] },

  VN_lothaire_devance: { act: "V", title: "Sur la pierre bleue", place: "sorne",
    text: [
      "Tu te relèves sur la pierre bleue de la chaussée. Lothaire et ce qui lui reste d'hommes sont déjà loin, en bas, sur la place ronde. Ils ont leur tonneau. Ils ont leur échelle. Ils ont une avance.",
      { with: "any", text: "On t'aide à te remettre debout. Chacun garde pour soi ce qu'il pense." },
    ],
    choices: [{ back: "VN_chaussee" }] },

  VN_porte_soldats: { act: "V", title: "La compagnie de la place ronde", place: "sorne",
    text: [
      "Sur la place ronde, une compagnie d'Aveline a pris position devant la porte : vingt piques en deux rangs, un capitaine à cheval sur un tonneau renversé, des torches plantées dans les joints des dalles. Ils ont trouvé la porte, et ils ignorent comment l'ouvrir. Le capitaine fait frapper dessus à la masse, à coups réguliers, depuis un moment, sans résultat.",
      { if: { has: "vn:chaloupes" }, text: "Un soldat arrive en courant de la ville basse, essoufflé, et crie quelque chose au capitaine en langue du nord. Tu comprends un mot : *chaloupes*. Les soldats se regardent. Leurs barques sont parties avec la mer. Ils sont pris dans Sorne comme toi." },
      { if: { has: "vn:aveline_doute" }, text: "Dans le second rang, tu reconnais le jeune lieutenant blond de la place. Il te voit aussi. Il baisse les yeux." },
      "Le capitaine se tourne vers toi. « Vous arrivez à point, dit-il. Le duc {{oreille#vn_capitaine_porte|vous paiera bien pour ouvrir cette porte|vous fera pendre dès qu'elle sera ouverte, mais je ne suis pas obligé de vous le dire}}. Ouvrez-la. »",
    ],
    choices: [
      { label: "« Vos barques sont parties. Ouvrez-vous un chemin vers la grève tant que l'eau le permet. »", hide: { not: { has: "vn:chaloupes" } }, fx: { flag: "vn:soldats_chasses", ep: ["seance", 3000] }, to: "VN_porte" },
      { label: "Ouvrir la porte, et la refermer derrière toi avant eux", hide: { not: { voile: "vn_capitaine_porte" } }, fx: { flag: "vn:soldats_dehors", ep: ["seance", 2000] }, to: "VN_porte" },
      { label: "Se battre pour la place ronde", fight: { title: "La compagnie de la place ronde", enemies: [{ id: "soldat_aveline", n: 4 }],
        win: { fx: { flag: "vn:soldats_chasses", ep: ["seance", 4000] }, to: "VN_porte" }, lose: { fx: { pv: -4, clock: { maree: 1 }, flag: "vn:soldats_porte" }, to: "VN_porte" } } },
      { label: "Feindre d'obéir, et ouvrir sous leurs piques", fx: { flag: "vn:soldats_porte" }, to: "VN_porte" },
    ] },

  VN_porte: { act: "V", title: "La dernière porte", place: "sorne", backName: "la dernière porte",
    text: [
      { first: true, text: "La porte est taillée dans la colline même, sous les fondations du palais : une dalle de bronze vert, haute de deux hommes, lisse d'un bord à l'autre. Au-dessus, sur le linteau, sept visages de bronze sont alignés, sept muets. Les six premiers ont une bouche, fermée d'un trait. Le septième n'en a pas : là où elle devrait être, le bronze est lisse." },
      { again: true, text: "La dernière porte, sa dalle de bronze, les sept visages sur le linteau." },
      { if: { has: "vn:porte_ouverte" }, text: "La dalle de bronze est ouverte. Derrière, un escalier descend dans la colline, et l'air qui en monte est sec, et sent l'ambre." },
      "Les six bouches fermées {{pie#vn_porte_pie|sont six bouches de bronze, semblables|sont six pièges : chaque fente cache une lame montée sur ressort, pour qui y glisserait les doigts ou une pince. Sous le menton du septième visage, en revanche, il y a une fente plus fine, et derrière elle, un mécanisme de cliquets}}.",
      "La place ronde {{echo#vn_porte_echo|est silencieuse, au pied de la colline|garde la voix d'Aymeric Vasse, vieille, fatiguée : « Fermez. Et que celui qui l'ouvrira sache pourquoi il l'ouvre. La porte le lui demandera »}}.",
      "Tu {{miroir#vn_porte_miroir|as fait tout ce chemin pour finir ce qu'Odeline a commencé|as fait tout ce chemin parce que tu as dit à Odeline qu'elle mourrait seule avec ses secrets, et que tu veux que ses secrets, au moins, trouvent quelqu'un}}.",
      { if: { has: "vn:soldats_porte" }, text: "Derrière toi, les piques d'Aveline attendent, en demi-cercle. Le capitaine a la main sur son épée." },
      { if: M(5, 5), text: "L'eau est au bas de la chaussée. Elle sera ici dans une heure." },
      { if: MER, text: "L'eau entre sur la place ronde. Elle te couvre les pieds. Derrière toi, la ville a disparu sous un fleuve gris qui monte. Le seul chemin qui reste est cette porte." },
      { with: "gildas", text: "Frère Gildas lève les yeux vers le septième visage, celui qui n'a pas de bouche. Il le regarde longtemps, en silence." },
    ],
    choices: [
      { label: "Franchir la dernière porte", big: true, hide: { not: { has: "vn:porte_ouverte" } }, to: "VT_seuil" },
      { label: "Dire la parole au septième visage", hide: { any: [{ has: "vn:porte_ouverte" }, { not: { count: KEYS, min: 1 } }] }, fx: { flag: "vn:porte_ouverte", set: { vn_porte: "parole" }, ep: ["histoire", 4000] }, to: "VN_porte_parole" },
      { label: "Dire au septième visage pourquoi tu es là, vraiment", hide: { any: [{ has: "vn:porte_ouverte" }, { not: { voile: "vn_porte_miroir" } }] }, fx: { flag: ["vn:porte_ouverte", "vn:porte_verite"], set: { vn_porte: "verite" }, ep: ["histoire", 4000] }, to: "VN_porte_verite" },
      { label: "Glisser ta lame dans la fente sous le menton du septième visage", hide: { any: [{ has: "vn:porte_ouverte" }, { not: { voile: "vn_porte_pie" } }] }, fx: { clock: { maree: 1 } },
        test: { dom: "discretion", diff: -10, label: "Jouer les cliquets d'une serrure de Taiseur", help: [{ if: { item: "crochets" }, v: 15 }, { with: "fauvette", v: 15 }, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { flag: "vn:porte_ouverte", set: { vn_porte: "mecanisme" }, ep: ["histoire", 3000] }, to: "VN_porte_mecanisme" }, lose: { fx: { pv: -3 }, to: "VN_porte_force" } },
      { label: "Laisse-moi faire", who: "lison", hide: { has: "vn:porte_ouverte" }, test: { dom: "savoir", diff: -10, label: "Lison cherche la parole dans les berceuses de sa grand-mère", help: [{ if: { has: "basse:taiseurs" }, v: 10 }, { if: { has: "lison:loyale" }, v: 10 }] },
        win: { fx: { flag: "vn:porte_ouverte", set: { vn_porte: "lison" }, conf: { lison: 10 }, ep: ["histoire", 3000] }, to: "VN_porte_lison" }, lose: { fx: { clock: { maree: 1 } }, to: "VN_porte_force" } },
      { label: "Laisser les Taiseurs de l'Aîné chercher la parole sur le linteau", hide: { any: [{ has: "vn:porte_ouverte" }, { not: { has: "basse:taiseurs" } }] }, fx: { clock: { maree: 1 }, flag: "vn:porte_ouverte", set: { vn_porte: "taiseurs" }, ep: ["histoire", 3000] }, to: "VN_porte_taiseurs" },
      { label: "Forcer la dalle de bronze", hide: { has: "vn:porte_ouverte" }, fx: { clock: { maree: 1 } }, to: "VN_porte_force" },
    ] },

  VN_porte_parole: { act: "V", title: "La septième bouche", place: "sorne",
    text: [
      "Tu montes sur la pierre d'appui, sous le linteau, jusqu'à avoir le septième visage à hauteur du tien. Le bronze lisse, là où devrait être la bouche, est froid et un peu gras, comme une joue. Tu approches tes lèvres.",
      "« Nous nous taisons pour qu'elle parle. »",
      { if: { count: KEYS, min: 3 }, text: "Tu l'as entendue dite par tant de voix, cette nuit, que la tienne te semble la dernière d'une longue file." },
      "Le bronze vibre contre ta bouche. Dans l'épaisseur de la colline, un mécanisme se met en marche : des cliquets, une roue, un poids qui descend. La dalle recule d'un pouce, puis glisse de côté, lentement, dans la paroi, et derrière elle, un escalier de pierre sèche descend dans le noir. L'air qui monte sent l'ambre, la cire et le vieux bois.",
      { with: "lison", text: "Lison a fermé les yeux. Elle répète la phrase en silence, les lèvres seules, une fois. Puis elle les rouvre et passe devant toi sans attendre." },
    ],
    choices: [{ label: "Franchir la dernière porte", big: true, to: "VT_seuil" }] },

  VN_porte_verite: { act: "V", title: "Ce que la porte demande", place: "sorne",
    text: [
      "Tu poses la main sur le bronze lisse du septième visage. Tu dis la chose tout bas, à lui seul. Pas la Charte, pas Salvèze, pas le trésor. La dispute de la nuit des Lanternes, la porte claquée, la phrase. Et la raison qui t'a fait descendre jusqu'ici.",
      "Tu n'avais jamais dit ça à voix haute. Ta voix tremble sur le dernier mot.",
      "Le bronze se réchauffe sous ta paume. Dans la colline, un mécanisme s'ébranle, des cliquets, une roue, et la dalle recule, glisse de côté, ouvre sur un escalier qui descend. Les Taiseurs ont fait une porte qui s'ouvre au silence, à la parole cachée, ou à la vérité. Aymeric avait prévu les trois.",
      { with: "gildas", text: "Frère Gildas a tout entendu. Il te regarde, et ses lèvres bougent, comme pour dire quelque chose qu'il garde depuis longtemps. Il le garde encore. Il baisse la tête et passe la porte derrière toi." },
    ],
    choices: [{ label: "Franchir la dernière porte", big: true, to: "VT_seuil" }] },

  VN_porte_mecanisme: { act: "V", title: "Les cliquets", place: "sorne",
    text: [
      "Ta lame entre dans la fente sous le menton. Tu sens les cliquets un par un, de l'autre côté, comme on sent des dents sous un drap. Il y en a douze. Il faut les lever dans l'ordre, et l'ordre t'est inconnu ; tu le trouves en tâtonnant, en revenant en arrière, en recommençant. Une heure passe. Ta main tremble de fatigue.",
      "Le douzième cliquet tombe avec un bruit de verrou. La dalle recule, glisse dans la paroi, et un escalier descend dans la colline.",
      { with: "fauvette", text: "Fauvette, qui t'a tenu la lanterne tout ce temps, siffle doucement. « Si un jour tu veux changer de métier, dit-elle, il y a de la place aux Gouttières. »" },
    ],
    choices: [{ label: "Franchir la dernière porte", big: true, to: "VT_seuil" }] },

  VN_porte_lison: { act: "V", title: "La berceuse", place: "sorne",
    text: [
      { with: "lison", text: "Lison monte sur la pierre d'appui, face au septième visage, et se met à chanter tout bas. Une berceuse des Joncs-Bas, que sa grand-mère lui chantait. Elle la chante une fois en entier, puis elle recommence, en sautant des mots, en gardant d'autres, comme on trie des perles. Au troisième passage, il ne reste plus qu'une phrase." },
      { with: "lison", text: "« Nous nous taisons pour qu'elle parle », chante Lison, sur l'air de la berceuse. Le bronze vibre. La dalle recule et glisse. Lison descend de la pierre, très pâle. « Elle me la chantait tous les soirs, dit-elle. Tous les soirs. Et elle ne m'a jamais dit ce que ça voulait dire. »" },
    ],
    choices: [{ label: "Franchir la dernière porte", big: true, to: "VT_seuil" }] },

  VN_porte_taiseurs: { act: "V", title: "Les Taiseurs devant la porte", place: "sorne",
    text: [
      "L'Aîné et les deux autres Taiseurs se placent sous le linteau, côte à côte, et regardent les sept visages. Ils se taisent, et se parlent par signes, très vite, les doigts contre les paumes, pendant que l'eau monte au bas de la chaussée. Ça dure une heure. C'est la plus longue heure de ta vie.",
      "Puis l'Aîné monte sur la pierre d'appui et murmure quelque chose au septième visage. La dalle s'ouvre. Il redescend, et il pleure, sans bruit, la bouche fermée. « Nous avons cherché la phrase pendant trois cents ans, dit-il. Elle était dans toutes nos chansons. »",
    ],
    choices: [{ label: "Franchir la dernière porte", big: true, to: "VT_seuil" }] },

  VN_porte_force: { act: "V", title: "La dalle de bronze", place: "sorne",
    text: [
      "Vous attaquez la dalle à la barre et à la masse, en cherchant une jointure. Au troisième coup, les six visages du linteau ouvrent leurs bouches toutes ensemble avec un claquement de ressorts, et deux niches s'ouvrent dans la paroi, de chaque côté de la porte. Il en sort deux gardiens noyés, les plus grands que tu aies vus, et derrière eux un bruit de mécanisme qui tourne.",
      { if: { has: "vn:soldats_porte" }, text: "Les soldats d'Aveline reculent en désordre au fond de la place." },
    ],
    choices: [
      { label: "Se battre devant la porte", fight: { title: "Les gardiens de la dernière porte", enemies: [{ id: "gardien_noye", n: 2 }],
        win: { fx: { flag: "vn:porte_ouverte", set: { vn_porte: "force" }, ep: ["histoire", 3000] }, to: "VN_porte_brisee" }, lose: { fx: { pv: -4, clock: { maree: 1 }, flag: "vn:porte_ouverte", set: { vn_porte: "force" } }, to: "VN_porte_brisee" } } },
      { label: "Se figer, et laisser les gardiens chercher le bruit", hide: { not: { voile: "vn_gardien_casque" } }, fx: { flag: "vn:porte_ouverte", set: { vn_porte: "force" }, ep: ["histoire", 3000] }, to: "VN_porte_brisee" },
    ] },

  VN_porte_brisee: { act: "V", title: "Les niches ouvertes", place: "sorne",
    text: [
      { outcome: "win", text: "Le second gardien tombe en travers de la place, et ses ressorts se dévident sur la dalle avec un long bruit de pendule cassée." },
      { outcome: "lose", text: "Tu te retrouves à terre, le souffle coupé, une douleur dans l'épaule. Mais les gardiens ne frappent plus : ils se sont arrêtés au milieu d'un geste, la hallebarde levée, leur mécanisme à bout de course." },
      "Dans les niches d'où ils sont sortis, les murs sont creux. Au fond de la niche de droite, un passage étroit contourne la dalle, une fente où un homme peut se glisser de côté. Elle descend dans la colline, par le même chemin que l'escalier, en plus étroit et en plus long. Les Taiseurs avaient prévu ceux qui forceraient la porte : ils les font entrer par la porte de service.",
    ],
    choices: [{ label: "Se glisser dans la fente et descendre", big: true, to: "VT_seuil" }] },

  VN_porte_lothaire: { act: "V", title: "Derrière Lothaire", place: "sorne",
    text: [
      "Tu cours. La place ronde est déserte, à part les lanternes posées en cercle par terre, et un tonneau ouvert, vide. La dalle de bronze, sous les sept visages, a glissé dans la paroi. Lothaire l'a ouverte. Avec quoi, tu ne le sauras peut-être jamais : son cornet jumeau, la patience, ou une chance de héron.",
      "Derrière la porte, un escalier descend dans la colline. Tout en bas, très loin, une lumière bouge, et tu entends des pas qui se dépêchent.",
      { with: "any", text: "On descend en silence." },
    ],
    choices: [{ label: "Descendre derrière Lothaire", big: true, to: "VT_seuil" }] },
});

// ==================================================================== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      vn_helis: { name: "Hélis Graumont", qui: "Une vieille femme de Port-Vasier, pêcheuse à la gaffe.", aspect: { allure: "vieille femme sur un toit, encordée", signe: "mains énormes, gaffe et lanterne", voix: "râpée par le sel" }, f: true, face: { age: "ancien", coif: "foulard" }, desc: "Une vieille femme de Port-Vasier qui vient à chaque Grande Basse pêcher à la gaffe dans les rues de Sorne. Son fils Aloïs y est resté l'an dernier." },
      vn_berald: { name: "Léandre Escoffe", qui: "Capitaine des gardes de Corisande Marrel.", aspect: { allure: "homme carré, poings sur les hanches", signe: "chaîne d'argent sur la poitrine, mains de débardeur" }, f: false, face: { age: "mur", coif: "court", beard: "barbe" }, desc: "Capitaine des gardes de Corisande Marrel. Une chaîne d'argent sur la poitrine, des mains de débardeur." },
    },
    items: {
      vn_couteau_alois: { name: "Le couteau d'Aloïs", kind: "outil", price: 1, desc: "Un couteau de pêche à manche de corne, une encoche au pouce. Il appartenait au fils d'Hélis Graumont." },
      vn_tr_couronne: { name: "La couronne de coquillages", kind: "tresor", price: 3, desc: "Une couronne haute, sertie de perles et de pierres rouges. Du plomb sous une feuille d'or, et du verre : l'appât d'un piège des Taiseurs, posé sur le trône de la reine." },
      vn_tr_peigne: { name: "Le peigne de la reine", kind: "tresor", price: 120, desc: "Un peigne d'écaille blonde serti d'argent, trois dents cassées. Caché sous le plancher de la chambre d'Ysaure." },
      vn_tablette: { name: "La tablette de la reine", kind: "document", form: "tablette", hand: "tremblee", desc: "Une tablette de cire dans un cadre de buis, trouvée sous le coussin du trône. La reine y écrivait quand elle ne pouvait plus parler.",
        text: "*Eau.* *Non.* *Aymeric.* *Mes enfants du marais.*\n\n*{{loupe#vn_cle_palais|Je suis reine et je me tais|À la dernière porte, à la bouche qui n'a pas de bouche, qu'on dise : nous nous taisons pour qu'elle parle}}.*\n\n*Qu'ils me croient folle. Les fous vivent longtemps.*" },
      vn_tr_calice: { name: "Le calice d'ambre", kind: "tresor", price: 400, desc: "Un calice taillé dans un seul bloc d'ambre, cerclé d'or à la lèvre. Quand le vent passe dessus, il chante très bas. Donné par la reine Ysaure à l'église de Sorne." },
      vn_tr_solde: { name: "Les lingots de La Fidèle", kind: "tresor", price: 600, desc: "Six petits lingots d'or frappés de la bouche fermée des Taiseurs, la paie des gardes de la reine, gardée trois siècles sous le faux fond d'un coffre." },
      vn_role: { name: "Le rôle de La Fidèle", kind: "document", form: "parchemin", desc: "Un rouleau de parchemin dans un étui de cuivre, cloué au mât de pavillon de la galère de la reine. Cent quarante-quatre noms.",
        text: "*{{loupe#vn_role|Rôle de la chiourme de La Fidèle, forçats condamnés pour vol et brigandage|Rôle des gardes de la reine, condamnés au banc par les Comptoirs pour avoir refusé de livrer leur maîtresse}}.*\n\n*Pierre Brac, de Port-Vasier. Jehan Graumont, de Port-Vasier. Guillaume Vasse, des Joncs-Bas. Martin Vasse, des Joncs-Bas. Aubry Le Saunier, de Grisemotte…* et cent trente-neuf autres." },
      vn_lettre_aymeric: { name: "La lettre d'Aymeric Vasse", kind: "document", form: "lettre", hand: "penchee", desc: "Une lettre jamais envoyée, trouvée sur la table du chancelier de la reine, à Sorne. Adressée à sa fille Isabeau, aux Joncs-Bas.",
        text: "*Ma petite Isabeau,*\n\n*Ta mère et toi partirez demain avant le jour, avec les dentellières, par la route des roseaux. {{loupe#vn_lettre_aymeric|Ne reviens pas à Sorne, la ville n'est plus sûre pour les nôtres|Le jour où ceux qui ont volé la reine auront ruiné à leur tour la ville qu'ils lui ont prise, rendez la Charte. Pas avant. Pas à un roi, pas à un duc : au peuple du delta, devant tous}}. Apprends à te taire, mais n'oublie jamais pourquoi.*\n\n*Ton père, A. V.*" },
      vn_tr_anneau: { name: "L'anneau du chancelier", kind: "tresor", price: 150, bonus: { savoir: 10, social: 5 }, desc: "Un anneau d'or serti d'un éclat d'ambre chantant, coulé dans l'atelier d'Aymeric Vasse et jamais démoulé. Au doigt, on entend mieux ceux qui se taisent exprès." },
      vn_tr_perles: { name: "Les perles de la reine", kind: "tresor", price: 4, desc: "Un collier de trois rangs de perles dans un coffret de nacre. Du verre soufflé rempli d'écaille de poisson broyée : la copie que montraient les Marrel." },
      vn_page_marrel: { name: "La page du registre Marrel", kind: "document", form: "page", desc: "Une page arrachée au registre de comptes du comptoir Marrel de Sorne, collée par le sel.",
        text: "*{{loupe#vn_registre_marrel|Frais de la Saint-Michel : chandelles, cire, encre, quatre ducats|Frais de la Saint-Michel : à l'évêque, pour le sceau, quatre cents ducats ; à Delisle, pour la lanterne et le silence, deux cents ; au barbier, pour la langue, trente}}.*" },
      vn_tr_sceau: { name: "Le sceau des Comptoirs", kind: "tresor", price: 200, desc: "La matrice de bronze du grand sceau des Comptoirs, poignée d'ivoire, une fêlure en V sur le bord. Celle qui a scellé les actes faux de la nuit de la Saint-Michel." },
      vn_acte_faux: { name: "Une copie de l'acte de cession", kind: "document", form: "acte", desc: "Une des dix copies de l'acte par lequel la reine Ysaure aurait cédé les terres gagnées sur la mer. Trouvée dans le bureau du greffier des Comptoirs, à Sorne.",
        text: "*{{loupe#vn_actes|Par la présente, la reine Ysaure, en pleine possession de ses esprits, cède aux maisons du Conseil les terres gagnées sur la mer|Écrit le lendemain de la Saint-Michel, la reine étant enfermée et privée de la parole, et le sceau apposé hors de sa présence}}.*\n\n*Scellé du grand sceau des Comptoirs.*" },
      vn_tr_bague_verrier: { name: "La bague du Verrier", kind: "tresor", price: 60, desc: "Un anneau d'or épais, gravé à l'intérieur d'un nom de femme et d'une date de trois siècles. Trouvé au doigt d'un noyé, dans la maison du Verrier." },
    },
    enemies: {
      vn_lothaire: { name: "Lothaire Brunel", look: "humain", pv: 40, att: 56, def: 24, dmg: 7, desc: "Gants gris, une rapière fine, une patience de héron. Il entend ce que tu penses avant que tu frappes." },
      vn_congre: { name: "Le congre de la crypte", look: "serpent", pv: 34, att: 50, def: 18, dmg: 8, desc: "Gris, épais comme une cuisse, une tête large comme un seau. Il vit dans la crypte depuis plus longtemps que toi." },
      vn_capitaine_noye: { name: "Le capitaine noyé", look: "ombre", pv: 60, att: 58, def: 24, dmg: 9, desc: "Une armure dorée sous les moules, la bouche des Taiseurs gravée sur le plastron. Il garde la porte de la reine depuis trois siècles." },
    },
    quests: [
      { id: "VN_rameurs", act: "V", kind: "annexe", title: "Les rameurs de La Fidèle", start: "VN_fidele", echo: "vn:rameurs_libres" },
      { id: "VN_aymeric", act: "V", kind: "annexe", title: "La lettre du chancelier", start: "VN_vasse_cabinet", echo: "vn:aymeric_lettre" },
      { id: "VN_helis", act: "V", kind: "annexe", title: "La lanterne sur le toit", start: "VN_helis", echo: "vn:helis_sauvee" },
    ],
    veils: {
      vn_debut_ville: { fx: { ep: ["perso", 400] } },
      vn_debut_miroir: { fx: { ep: ["perso", 600] } },
      vn_salome_six: { fx: { conf: { salome: 3 } } },
      vn_lison_sorne: { fx: { conf: { lison: 3 } } },
      vn_tibere_noyes: { fx: { conf: { tibere: 3 } } },
      vn_aine_ville: { fx: { ep: ["perso", 400] } },
      vn_berald_or: { fx: { ep: ["perso", 600] } },
      vn_pm_inscr: { fx: { ep: ["perso", 600] } },
      vn_pm_echo: { fx: { ep: ["perso", 600] } },
      vn_hub_vasse: { fx: { ep: ["perso", 600] } },
      vn_puits_voix: { fx: { ep: ["perso", 800] } },
      vn_helis_cherche: { fx: { ep: ["perso", 600] } },
      vn_alois_voix: { fx: { ep: ["perso", 800] } },
      vn_lieutenant_duc: { fx: { flag: "vn:duc_brule", ep: ["perso", 800] } },
      vn_mur_reine: { fx: { ep: ["seance", 1500] } },
      vn_balcon_graffite: { fx: { ep: ["perso", 600] } },
      vn_cuisines_echo: { fx: { ep: ["perso", 600] } },
      vn_eveque: { fx: { ep: ["perso", 800] } },
      vn_nef_messe: { fx: { ep: ["perso", 600] } },
      vn_role: { fx: { ep: ["perso", 800] } },
      vn_sergent: { fx: { ep: ["perso", 600] } },
      vn_vestibule: { fx: { ep: ["perso", 800] } },
      vn_aymeric_nuit: { fx: { ep: ["perso", 600] } },
      vn_lettre_aymeric: { fx: { flag: "vn:aymeric_volonte", ep: ["seance", 2000] } },
      vn_nuit_comptoirs: { fx: { ep: ["seance", 2000] } },
      vn_couteau: { fx: { ep: ["seance", 1500] } },
      vn_registre_marrel: { fx: { ep: ["seance", 1500] } },
      vn_actes: { fx: { ep: ["seance", 1500] } },
      vn_lothaire_or: { fx: { ep: ["perso", 800] } },
      vn_porte_echo: { fx: { ep: ["perso", 800] } },
      vn_porte_miroir: { fx: { ep: ["seance", 1500] } },
      vn_cle_vasse: { fx: { ep: ["seance", 1500] } },
      vn_cle_comptoirs: { fx: { ep: ["seance", 1500] } },
      vn_cle_crypte: { fx: { ep: ["seance", 1500] } },
      vn_cle_palais: { fx: { ep: ["seance", 1500] } },
      vn_cle_nage: { fx: { ep: ["seance", 1500] } },
    },
  },
};
