// Act I · the second and third days: the provost and Matthias come up, the questioning, the second session, what
// Odeline knows, the second night (someone goes to the linen room), the end of the storm and the way down.

module.exports = {
  H_prevot_arrive: { act: "I", title: "Le prévôt", place: "hospice",
    fx: { meet: ["matthias", "bastien"] },
    text: [
      "Ils sont trois dans la cour, couverts de neige jusqu'à la taille, avec deux mules qui fument. Un homme de cinquante ans, carré, une moustache grise prise de givre, un manteau de prévôté à collet rouge : le prévôt Hennequin. Un jeune sergent, maigre, qui tient les mules et regarde partout. Et un troisième homme, grand, large, une barbe brune, une hache passée dans la ceinture, qui ne regarde que toi.",
      "« Matthias Hollier, dit le prévôt en secouant son manteau. Le frère. Il a insisté pour monter. Je l'ai laissé venir : c'est sa famille. » Il te dévisage. « C'est vous, l'arpenteur. Bien. Mère Agnès va nous prêter son bureau. Vous et moi, nous allons parler. »",
      "Matthias Hollier se tait. Il te regarde passer, et ses yeux sont rouges, et il a les mains ouvertes le long du corps, comme un homme qui se retient de les fermer.",
    ],
    choices: [{ label: "Suivre le prévôt", to: "H_interro" }] },

  // the questioning
  H_interro: { act: "I", title: "L'interrogatoire", place: "hospice",
    text: [
      "Le prévôt s'assied derrière le bureau de Mère Agnès, toi devant, le sergent Bastien près de la porte avec une écritoire sur les genoux. Hennequin pose ses gants sur le registre, l'un sur l'autre, bien alignés.",
      "« Je vais vous dire ce que je sais, dit-il. Ensuite vous me direz ce que vous savez. Si les deux ne collent pas, nous recommencerons, autant de fois qu'il faudra. J'ai le temps : la neige me le donne. »",
      "« Il y a quatre jours, un arpenteur du duc arrive à Vaugrenat. Il dort au Chamois. Le lendemain, il monte aux Combes, chez Gaspard Hollier, pour relever la parcelle. Le jour suivant, la maison brûle. On trouve quatre corps : Gaspard, sa femme Agathe, leur fils Benoît, neuf ans, et la mère de Gaspard. Le lendemain à l'aube, on trouve l'arpenteur dans la neige, à un jour de là, la main brûlée, avec vingt écus neufs dans sa bourse. » Il croise les mains. « À vous. »",
    ],
    choices: [
      { label: "« Je ne me souviens de rien. Rien du tout, depuis l'auberge. »", fx: { flag: "interro:rien", conf: { hennequin: 5 } }, to: "H_interro_rien" },
      { label: "Lui montrer ta main, et lui dire ce que Sœur Odeline y a vu", hide: { not: { clue: "h_anneau" } }, fx: { flag: "prevot:anneau", conf: { hennequin: 10 }, ep: ["perso", 600] }, to: "H_interro_anneau" },
      { label: "Lui dire que tu crois t'être disputé avec Gaspard Hollier", hide: { not: { has: "garde:dispute" } }, fx: { flag: "aveu:dispute", conf: { hennequin: -5 } }, to: "H_interro_dispute" },
      { label: "Lui dire que tu te souviens d'une étable, et d'un enfant", hide: { all: [{ not: { has: "garde:etable" } }, { not: { has: "garde:croix" } }] }, fx: { flag: "enfant:dit" }, to: "H_interro_enfant" },
    ] },
  H_interro_rien: { act: "I", title: "Rien", place: "hospice",
    text: [
      "Hennequin te regarde longtemps. « Rien, répète-t-il. Les gens qui ne se souviennent de rien, d'habitude, ils en rajoutent. Ils disent qu'ils ont vu une ombre, une lumière, qu'ils ont entendu crier. Vous, rien. » Il fait signe au sergent d'écrire. « Soit vous êtes honnête, soit vous êtes malin. Je vous préviens : je préfère les honnêtes, mais je pends les malins. »",
    ],
    choices: [{ label: "Attendre la suite", to: "H_interro_bourse" }] },
  H_interro_anneau: { act: "I", title: "L'intérieur", place: "hospice",
    text: [
      "Tu défais le pansement toi-même, malgré la douleur, et tu poses ta main ouverte sur le registre, la paume en l'air. Hennequin se penche. Il regarde l'anneau, la barre. Il regarde longtemps.",
      "« Le côté de l'intérieur, dit-il. C'est la sœur qui dit ça ? » Il se redresse. « Elle a soigné à la Croisette, Sœur Odeline. Elle a vu plus de brûlures que moi. » Il fait signe au sergent. « Écris. *Le témoin présente à la main droite une brûlure en forme de loquet, côté intérieur.* » Le sergent écrit. Hennequin te regarde. « Je ne sais pas ce que ça prouve. Ça prouve que vous étiez dedans, et que vous vouliez sortir. Ou que vous vouliez empêcher quelqu'un d'entrer. »",
      "Mais il a écrit *le témoin*. Pas *l'accusé*.",
    ],
    choices: [{ label: "Attendre la suite", to: "H_interro_bourse" }] },
  H_interro_dispute: { act: "I", title: "La dispute", place: "hospice",
    text: [
      "« Une dispute », répète le prévôt. Il fait signe au sergent, qui écrit, la langue entre les dents. « À quel sujet ? »",
      "Tu ne sais pas. Tu revois la table de bois, les mains à plat, l'homme qui crie. Tu ne sais pas pourquoi il criait. Tu le dis. Le prévôt hoche la tête, lentement.",
      "« Vous ne vous souvenez de rien, mais vous vous souvenez d'une dispute. » Il ne sourit pas. « C'est le docteur qui vous l'a rendue, celle-là ? Il est très fort, le docteur. Il a rendu beaucoup de choses à beaucoup de gens. » Reproche ou mise en garde, tu hésites.",
    ],
    choices: [{ label: "Attendre la suite", to: "H_interro_bourse" }] },
  H_interro_enfant: { act: "I", title: "Un enfant", place: "hospice",
    text: [
      "« Une étable, dit le prévôt. Un enfant. » Il fronce les sourcils. « Le seul enfant des Combes, c'était le petit Benoît, neuf ans. On l'a retrouvé dans son lit. » Il se tourne vers le sergent. « Et la fille ? La grande ? »",
      "Le sergent Bastien rougit. « Lise, monsieur le prévôt. Quatorze ans. Le curé dit qu'elle a dû brûler tout entière, qu'il n'est rien resté. Le frère le dit aussi. Elle dormait dans la souillarde, près du four, c'est là que le feu a été le plus fort. »",
      "Le prévôt se tait un long moment. « Écris-le, Bastien. *Le témoin se souvient d'un enfant dans une étable.* » Il te regarde. « Je vais vous demander une chose, et je ne vous la demanderai qu'une fois. N'en parlez à personne d'autre. À personne. Vous m'entendez ? »",
    ],
    fx: { clue: "j_cheveux", flag: "lise:disparue", ep: ["histoire", 1500] },
    choices: [{ label: "Attendre la suite", to: "H_interro_bourse" }] },
  H_interro_bourse: { act: "I", title: "Les vingt écus", place: "hospice",
    text: [
      "Le prévôt ouvre ta bourse, que Mère Agnès lui a remise, et aligne les vingt écus sur le registre, en quatre rangées de cinq. Ils brillent.",
      "« Le duc paie ses arpenteurs en billets, dit-il. Moi aussi, d'ailleurs, il me paie en billets. Ça, ce sont des écus de la Monnaie de Lorvanne, frappés cette année, et à Vaugrenat, il n'y a qu'une maison qui en reçoit des caisses entières : la Compagnie des Plombs, pour payer les mineurs. » Il te regarde. « D'où viennent-ils ? »",
    ],
    choices: [
      { label: "« Je ne sais pas. »", fx: { flag: "bourse:ignore" }, to: "H_interro_fin" },
      { label: "« Mes gages. Une avance du cadastre. »", fx: { flag: "bourse:mensonge", conf: { hennequin: -10 } }, to: "H_interro_fin" },
      { label: "« Si c'est la Compagnie, c'est à la Compagnie qu'il faut demander pourquoi. »", fx: { flag: "bourse:compagnie", fac: { compagnie: -10 }, conf: { hennequin: 5 } }, to: "H_interro_fin" },
    ] },
  H_interro_fin: { act: "I", title: "Pas encore", place: "hospice",
    text: [
      { if: { has: "bourse:mensonge" }, text: "Le prévôt sourit, pour la première fois. C'est un mauvais sourire. « Une avance du cadastre, dit-il. En écus de la Compagnie. » Il fait signe au sergent d'écrire, et il n'ajoute rien." },
      "Hennequin remet les écus dans la bourse, un à un, et garde la bourse. « Je vous la rendrai, dit-il. Ou je la donnerai au bailli. On verra. »",
      "Il se lève. « Vous n'êtes pas arrêté. Pas encore. Vous ne quittez pas l'hospice, et de toute façon, personne ne le quitte tant que le vent souffle. Quand il tombera, nous descendrons tous à Vaugrenat, vous, moi, le frère et le docteur. Là, on verra la maison. Et on verra si ça vous rend la mémoire. »",
      { if: { has: "enfant:dit" }, text: "Sur le seuil, il se retourne. « Et rappelez-vous ce que je vous ai demandé. » Il ne précise pas. Derrière la porte, dans le couloir, tu entends des pas lourds qui s'éloignent. Quelqu'un écoutait." },
    ],
    fx: { gold: -400 },
    choices: [{ label: "Sortir", back: "H_hospice" }] },

  // Matthias at the table
  H_matthias_table: { act: "I", title: "Matthias Hollier", place: "hospice",
    text: [
      "Tu t'assieds en face de lui. Il lève les yeux de sa soupe. Il se tait longtemps. Puis il pose sa cuillère.",
      "« Ils les ont mis dans l'église, dit-il. Les quatre. Le curé les a lavés. Il ne m'a pas laissé voir le petit. » Sa voix est très calme, très basse. « Ma nièce, Lise, on ne l'a pas trouvée. Le curé dit que le feu l'a prise toute entière, qu'elle dormait près du four. Quatorze ans. Elle voulait apprendre à lire les cartes. Elle me l'avait dit, à Noël. » Il te regarde. « Des cartes. Comme les vôtres. »",
      "Il reprend sa cuillère. « Je ne vous accuse de rien. Le prévôt fera son travail. Mais si c'est vous, je le saurai. Et ce jour-là, il n'y aura pas de prévôt. »",
    ],
    fx: { flag: "matthias:lise", ep: ["perso", 400] },
    choices: [
      { label: "Le regarder, et chercher ce qu'il tait", test: { dom: "social", label: "Social", help: [{ if: { clue: "h_fille" }, v: 15 }] },
        win: { fx: { flag: "matthias:lu", ep: ["perso", 500] }, to: "H_matthias_lu" }, lose: { to: "H_matthias_rien" } },
      { label: "« Je suis désolé pour votre famille. »", to: "H_matthias_desole" },
    ] },
  H_matthias_lu: { act: "I", title: "Ce qu'il tait", place: "hospice",
    text: [
      "Il parle de sa nièce au passé. Il en parle bien, avec tendresse, avec des détails : les cartes, Noël. Mais quand il dit *on ne l'a pas trouvée*, ses yeux font un petit mouvement de côté, vers le couloir, vers l'escalier qui monte à la lingerie, et reviennent sur toi.",
      "Et ses mains. Ses mains de mineur, larges, noueuses, posées de chaque côté de son bol. Sur le dos de la droite, une brûlure récente, mal soignée, en traînée, comme une main qui a frôlé une flamme en passant. Pas une main qui a tenu un loquet. Une main qui a tenu une torche.",
    ],
    choices: [{ back: "H_refectoire" }] },
  H_matthias_rien: { act: "I", title: "Un homme en deuil", place: "hospice",
    text: ["Tu ne vois rien d'autre qu'un homme en deuil, qui mange sa soupe parce qu'il faut manger, et qui te hait. Peut-être à raison. Tu ne sais pas."],
    choices: [{ back: "H_refectoire" }] },
  H_matthias_desole: { act: "I", title: "Désolé", place: "hospice",
    text: ["Matthias te regarde comme si tu lui avais craché dessus. Puis il se lève, prend sa hache sur le banc, et sort. Sa soupe fume encore dans le bol."],
    choices: [{ back: "H_refectoire" }] },

  // the second session
  H_seance2: { act: "I", title: "Un souvenir", place: "hospice",
    text: [
      "La chaleur, la lourdeur. Plus vite que la première fois : ton corps connaît déjà le chemin. La voix dit : *la nuit. Vous êtes dehors. Il fait froid. Vous tenez quelque chose.*",
      "Tu tiens une lanterne. La neige crisse sous tes pas. Devant toi, la masse noire d'une maison, un toit pointu, une cheminée. Tu marches vers elle. La lanterne se balance au bout de ton bras, et sa lumière court sur la neige devant toi, jaune, régulière.",
      "*Vous marchez vers la maison*, dit la voix. *Vous savez ce que vous allez faire.*",
      "Tu ne sais pas. Tu sais seulement que la lanterne pèse, et que tu as froid, et que la cheminée de la maison est froide. Elle devrait fumer. En hiver, la nuit, toutes les cheminées fument.",
      "Puis la neige s'éteint, et tu es assis dans la cellule du docteur, en sueur, la bouche pleine d'un goût de cuivre.",
      "« Bien, dit le docteur Corvin en écrivant. Nous approchons. »",
    ],
    choices: [
      { label: "Garder ce souvenir", fx: { flag: "garde:lanterne" }, to: "H_seance2_fin" },
      { label: "Ne pas y croire", fx: { flag: "doute:lanterne" }, to: "H_seance2_fin" },
    ] },
  H_seance2_fin: { act: "I", title: "La cheminée", place: "hospice",
    text: [
      "Tu redescends. Tu as la lanterne dans la main, encore : tu en sens le poids. Tu as beau ouvrir et fermer les doigts, elle est là.",
      "Mais une chose te reste, venue d'ailleurs que de la voix du docteur, et qui t'intrigue : la cheminée était froide.",
    ],
    fx: { flag: "cheminee:froide" },
    choices: [{ back: "H_hospice" }] },

  // what Odeline knows
  B_odeline_mains: { title: "Les mains de Sœur Odeline",
    text: [
      "Sœur Odeline refait ton pansement, le soir, à la chandelle. Elle travaille vite et bien, sans un geste de trop. Au bout d'un moment, elle dit, sans lever les yeux :",
      "« J'avais vingt ans à la Croisette. Je n'étais pas encore religieuse. J'étais la fille du chirurgien, et je tenais la lampe. Un soir, on a amené un déserteur. Le capitaine voulait savoir avec qui il avait déserté. On l'a fait parler. Je tenais la lampe. » Elle serre le dernier nœud. « Il a donné six noms. On les a pendus tous les six. Le lendemain, on a su qu'il avait déserté seul. Il avait donné les noms de ses camarades de chambrée, parce que c'étaient les seuls qu'il connaissait. »",
      "Elle range ses ciseaux. « Les gens disent n'importe quoi, quand on les fait souffrir assez longtemps. Ou quand on les fait dormir assez profond. »",
    ],
    choices: [
      { label: "« Vous parlez du docteur. »", fx: { conf: { odeline: 10 } }, to: "@ret" },
      { label: "« Et le déserteur ? »", fx: { conf: { odeline: 5 }, flag: "odeline:deserteur" }, to: "@ret" },
    ] },
  H_odeline_aveu: { act: "I", title: "Ce que sait Sœur Odeline", place: "hospice",
    text: [
      "Sœur Odeline ferme la porte de l'infirmerie, et elle s'assied sur le tabouret, en face de toi, les mains sur les genoux. Ses mains sont vides. C'est la première fois que tu la vois sans tricot.",
      "« Le premier matin, dit-elle, le chien est revenu seul et il a aboyé. Je suis sortie avec lui. À cent pas de la porte, dans la neige, il y avait une fille. Pieds nus, en chemise, les mains en sang, les cheveux brûlés d'un côté. Elle ne disait rien. Elle ne pouvait rien dire. Je l'ai portée jusqu'à la lingerie, parce que c'est la pièce la plus chaude. Le chien est reparti. Il est revenu avec vous. »",
      "« Le soir, le frère est monté. Il a demandé une fille. J'ai vu la tête de la petite quand elle a entendu sa voix dans le couloir. Je lui ai coupé les cheveux le soir même, avec mes ciseaux de couture. Mère Agnès a écrit dans son registre ce que je lui ai demandé d'écrire. » Elle te regarde. « Elle s'appelle Lise Hollier. Elle a quatorze ans. Et je ne sais pas encore si c'est de vous qu'elle a peur, ou de lui. »",
    ],
    fx: { flag: ["lise:connue", "odeline:confie"], meet: ["jeanne"], ep: ["histoire", 3000] },
    choices: [
      { label: "« Je ne sais pas non plus. »", fx: { conf: { odeline: 10 } }, to: "H_odeline_aveu2" },
      { label: "« Ce n'est pas de moi. »", to: "H_odeline_aveu2" },
    ] },
  H_odeline_aveu2: { act: "I", title: "Personne", place: "hospice",
    text: [
      { with: "odeline", text: "Sœur Odeline hoche la tête. « Personne ne le sait. C'est pour ça que personne d'autre ne doit savoir qui elle est. Le prévôt, le docteur, le frère : tous l'ignorent. Pas encore. » Elle se lève, et reprend son tricot dans la poche de son tablier. « Elle vous a laissé une poupée de paille, la première nuit. Elle en faisait pour son petit frère. Je ne sais pas ce que ça veut dire. Mais elle ne l'a fait pour personne d'autre. »" },
    ],
    choices: [{ back: "H_hospice" }] },
  H_infirmerie: { act: "I", title: "L'infirmerie", place: "hospice",
    text: ["Ton lit, ton tabouret, la fenêtre aveuglée de neige. Sœur Odeline y passe plusieurs fois par jour, pour ta main."],
    choices: [
      { label: "Lui demander de te dire ce qu'elle sait", hide: { any: [{ seen: "H_odeline_aveu" }, { not: { has: "jour:2" } }] }, if: { conf: "odeline", min: 40 }, why: "Sœur Odeline ne te fait pas encore assez confiance pour te dire ce qu'elle tait.", to: "H_odeline_aveu" },
      { label: "Lui apporter un des flacons du docteur", hide: { any: [{ seen: "H_odeline_flacon" }, { not: { has: "flacon:vole" } }] }, to: "H_odeline_flacon" },
      { label: "Te reposer", fx: { rest: true }, back: "H_hospice" },
    ] },

  // stealing a phial
  H_corvin_vol: { act: "I", title: "La mallette", place: "hospice",
    text: [
      "Le docteur est au chevet de Gaudry, ou de ce qu'il en reste, et il a laissé sa cellule ouverte. La mallette est fermée à clé. Mais sur la table, à côté du cahier noir, il y a un flacon débouché, à moitié plein, qu'il a oublié de ranger.",
    ],
    choices: [
      { label: "Prendre le flacon", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { flag: "flacon:vole", ep: ["perso", 500] }, to: "H_corvin_vol_ok" }, lose: { fx: { flag: "corvin:mefiant" }, to: "H_corvin_vol_pris" } },
      { label: "Ouvrir le cahier noir", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { flag: "cahier:vu", ep: ["perso", 600] }, to: "H_corvin_cahier" }, lose: { fx: { flag: "corvin:mefiant" }, to: "H_corvin_vol_pris" } },
      { label: "Ne toucher à rien", back: "H_hospice" },
    ] },
  H_corvin_vol_ok: { act: "I", title: "Le flacon", place: "hospice",
    text: ["Tu glisses le flacon dans ta manche, et tu ressors. Personne dans le couloir. Ton cœur bat comme si tu avais volé l'hostie."],
    choices: [{ back: "H_hospice" }] },
  H_corvin_vol_pris: { act: "I", title: "Surpris", place: "hospice",
    text: [
      "« Je peux vous aider ? » Le docteur est sur le seuil, sa trousse à la main. Il te regarde, puis regarde la table. Il s'en tient là. Il entre, range le flacon dans la mallette, et ferme le cahier.",
      "« La curiosité est un bon signe, dit-il enfin, avec douceur. Elle montre que l'esprit revient. Mais ne touchez pas à mes médicaments. Certains sont dangereux pour qui ne sait pas les doser. »",
    ],
    choices: [{ back: "H_hospice" }] },
  H_corvin_cahier: { act: "I", title: "Le cahier noir", place: "hospice",
    text: [
      "Une écriture fine, penchée, très régulière. Des noms de mineurs, des dates, des doses. Puis une page à ton nom, ou plutôt à ton métier : *L'arpenteur.*",
      "*Sujet très suggestible, comme prévu. Commencer par le plus vraisemblable.* Le reste de la page est barré, raturé, réécrit, comme un brouillon de lettre. Tu n'as pas le temps de lire davantage : un pas dans l'escalier. Tu refermes le cahier.",
      "*Comme prévu.* Prévu par qui ?",
    ],
    choices: [{ back: "H_hospice" }] },
  H_odeline_flacon: { act: "I", title: "Le goût", place: "hospice",
    fx: { clue: "c_gouttes", conf: { odeline: 10 }, ep: ["histoire", 1500] },
    text: [
      "Sœur Odeline débouche le flacon, le sent, et pose une goutte sur le bout de son doigt, puis sur sa langue. Elle grimace.",
      "« Laudanum, dit-elle. Et autre chose, qui est amer et qui gratte. De la jusquiame. On en donnait aux fous, à l'asile de Sarre, quand j'étais novice : ça les rend dociles, ça les fait rêver éveillés, et ils croient tout ce qu'on leur dit pendant qu'ils rêvent. » Elle rebouche le flacon et te le rend. « Ne buvez plus ça. Et si vous en avez déjà bu, ne croyez pas tout ce que vous avez vu. »",
    ],
    choices: [{ back: "H_hospice" }] },

  // the second night
  H_nuit2: { act: "I", title: "La deuxième nuit", place: "hospice",
    text: [
      "Le vent souffle encore, mais plus bas, comme une bête qui se fatigue. Tout l'hospice dort : le prévôt dans la chambre des hôtes, le sergent sur une paillasse devant sa porte, Matthias Hollier dans le dortoir des voyageurs, le docteur dans sa cellule.",
      { if: { clock: "brume", min: 2 }, text: "Le laudanum te tire vers le fond. Tu lui résistes un moment, puis tu cèdes. Tu dors comme une pierre au fond d'un puits." },
      { if: { clock: "brume", max: 1 }, text: "Tu ne dors pas. Vers deux heures, tu entends un plancher qui craque au-dessus de toi. Puis un autre. Quelqu'un marche à l'étage, dans le noir, du côté de la lingerie, très lentement, comme on marche quand on ne veut pas être entendu." },
    ],
    choices: [
      { label: "Monter", hide: { clock: "brume", min: 2 }, to: "H_nuit2_monter" },
      { label: "Réveiller le prévôt", hide: { clock: "brume", min: 2 }, to: "H_nuit2_prevot" },
      { label: "Dormir", hide: { clock: "brume", max: 1 }, to: "H_nuit2_dormi" },
    ] },
  H_nuit2_monter: { act: "I", title: "La lingerie, la nuit", place: "hospice",
    text: [
      "Tu montes pieds nus, ta main bandée contre ta poitrine. La porte de la lingerie est entrouverte. À l'intérieur, une forme large, penchée sur le lit étroit de Jeanne, qui appuie quelque chose dessus, un oreiller, avec les deux mains, de tout son poids. Sous l'oreiller, des pieds qui battent sans bruit.",
    ],
    choices: [
      { label: "Te jeter sur lui", to: "H_nuit2_lutte" },
      { label: "Crier, crier de toutes tes forces", fx: { flag: "nuit:cri" }, to: "H_nuit2_cri" },
    ] },
  H_nuit2_lutte: { act: "I", title: "Dans le noir", place: "hospice",
    text: [
      "Tu le prends par les épaules et tu tires. Il est lourd comme un bœuf. Il lâche l'oreiller et se retourne, et vous roulez ensemble entre les piles de draps, dans le noir. Il sent la sueur et l'eau-de-vie. Il frappe. Tu frappes. Ta main brûlée heurte quelque chose, et la douleur t'aveugle.",
    ],
    choices: [
      { label: "Lui griffer le visage, de ta main valide", test: { dom: "combat", label: "Combat" },
        win: { fx: { flag: ["nuit:marque", "nuit:lutte"], ep: ["histoire", 2500], conf: { lise: 20 } }, to: "H_nuit2_fuite" }, lose: { fx: { pv: -5, flag: "nuit:lutte", conf: { lise: 10 } }, to: "H_nuit2_fuite" } },
    ] },
  H_nuit2_cri: { act: "I", title: "Le cri", place: "hospice",
    text: [
      "Tu cries. Ta voix casse au milieu, et tu continues, sans mots. La forme se redresse d'un bond, te bouscule, te jette contre le chambranle, et passe. Tu entends ses pas dévaler l'escalier. En bas, des portes s'ouvrent, des voix, le chien qui aboie, le prévôt qui demande ce qui se passe.",
    ],
    fx: { conf: { lise: 15 } },
    choices: [{ label: "Courir au lit de Jeanne", to: "H_nuit2_jeanne" }] },
  H_nuit2_fuite: { act: "I", title: "Il s'enfuit", place: "hospice",
    text: [
      { if: { has: "nuit:marque" }, text: "Tes ongles accrochent une joue, une barbe, et tirent. Il pousse un juron étouffé, te repousse d'un coup de genou, et s'enfuit. Tu as de la peau sous les ongles, et du sang." },
      { if: { not: { has: "nuit:marque" } }, text: "Il te cogne la tête contre le montant du lit, une fois, et tu vois des étoiles. Quand tu reprends tes esprits, il est parti. Tu entends ses pas dans l'escalier." },
    ],
    choices: [{ label: "Courir au lit de Jeanne", to: "H_nuit2_jeanne" }] },
  H_nuit2_jeanne: { act: "I", title: "Jeanne", place: "hospice",
    text: [
      "Jeanne est assise dans son lit, le dos au mur, les genoux contre la poitrine. Elle respire par grandes goulées sifflantes. Elle a les yeux grands ouverts. Elle te regarde.",
      "Elle ne recule pas. Elle tend la main vers toi, ta main gauche, et elle la serre, si fort que ses ongles entrent dans ta peau. Elle ne la lâche pas quand Sœur Odeline arrive avec une chandelle, ni quand le prévôt arrive derrière elle, en chemise, l'épée à la main.",
    ],
    fx: { flag: "nuit:sauvee", ep: ["histoire", 2000] },
    choices: [{ label: "Attendre le matin", to: "H_jour3" }] },
  H_nuit2_prevot: { act: "I", title: "Le prévôt", place: "hospice",
    text: [
      "Tu traverses le couloir, tu enjambes le sergent endormi, et tu frappes à la porte du prévôt. Il ouvre au deuxième coup, en chemise, l'épée déjà à la main : il veillait, lui aussi. Tu lui dis : à l'étage, quelqu'un, la lingerie.",
      "Il ne pose pas de question. Il monte. Tu le suis. Quand vous arrivez, la porte de la lingerie est grande ouverte, la fenêtre aussi, et la neige entre. Jeanne est debout dans un coin, un fer à repasser à la main, froid, levé au-dessus de sa tête. Il n'y a personne d'autre.",
      "Le prévôt regarde le lit défait, l'oreiller par terre, la fenêtre. Puis il regarde Jeanne. Longtemps. « Qui es-tu, toi ? » dit-il doucement. Elle se tait.",
    ],
    fx: { flag: ["nuit:prevot", "prevot:jeanne"], conf: { hennequin: 10, lise: 10 }, ep: ["histoire", 2000] },
    choices: [{ label: "Attendre le matin", to: "H_jour3" }] },
  H_nuit2_dormi: { act: "I", title: "Le fond du puits", place: "hospice",
    text: [
      "Tu ne te réveilles pas. Tu rêves d'une lanterne qui se balance, d'une table de bois, d'un homme qui crie. Quelque part, très loin, un chien aboie, longtemps, et un bruit de bois frappé contre la pierre, régulier, obstiné, comme une canne contre un mur. Ça ne te concerne pas. Rien ne te concerne.",
      "Au matin, Sœur Odeline te secoue. Elle a les yeux rouges. « Cette nuit, dit-elle, quelqu'un est monté à la lingerie. Abel l'a entendu, il a tapé sur le mur avec sa jambe de bois jusqu'à réveiller la maison. La petite a eu le temps de sortir par la fenêtre, sur le toit de l'étable. Elle y est restée deux heures, en chemise. » Elle te regarde. « Vous, vous n'avez rien entendu. Le docteur dit que c'est normal, avec ce qu'il vous a donné. »",
    ],
    fx: { flag: ["nuit:dormi", "abel:nuit"], conf: { odeline: -5 } },
    choices: [{ label: "Te lever", to: "H_jour3" }] },

  // the third day
  H_jour3: { act: "I", title: "Le troisième jour", place: "hospice",
    fx: { flag: "jour:3", quest: "I_jours" },
    text: [
      "Le vent tombe à l'aube, d'un coup, comme on ferme une porte. Le silence qui suit est si grand qu'on entend la neige glisser des toits.",
      "Au réfectoire, tout le monde est là. Le prévôt, qui n'a pas dormi. Le sergent, qui a honte d'avoir dormi. Le docteur, rasé de frais. Matthias Hollier, qui mange.",
      { if: { has: "nuit:marque" }, text: "Matthias a trois longues griffures sur la joue gauche, qui descendent dans la barbe. Il dit qu'il s'est battu avec la porte des latrines, dans le noir. Personne ne rit. Le prévôt le regarde longtemps, puis te regarde, toi, et tes ongles." },
      { if: { all: [{ not: { has: "nuit:marque" } }, { has: "nuit:lutte" }] }, text: "Matthias a la lèvre fendue. Il dit qu'il a glissé dans l'escalier en allant aux latrines. Toi, tu as une bosse sur le front. Le prévôt vous regarde tous les deux, et il se tait." },
      { if: { not: { has: "nuit:lutte" } }, text: "Matthias n'a rien. Il dit qu'il a dormi d'une traite. Personne ne peut dire le contraire." },
      "« On descend, dit le prévôt. Tout le monde. Le chemin est dégagé jusqu'à la croix, les frères ont tracé. On sera à Vaugrenat avant la nuit. » Il te regarde. « Vous venez avec moi. »",
    ],
    choices: [{ label: "Chercher Sœur Odeline", to: "H_jour3_odeline" }] },
  H_jour3_odeline: { act: "I", title: "Sœur Odeline", place: "hospice",
    text: [
      "Sœur Odeline est dans la lingerie, avec Jeanne. Elle plie dans un baluchon des vêtements de laine, une couverture, l'ardoise. Elle ne lève pas les yeux.",
      "« Mère Agnès m'envoie à Vaugrenat chercher des remèdes, dit-elle. Pour deux semaines. Elle a dit que ma nièce pouvait venir avec moi, pour voir le pays. » Elle serre le nœud du baluchon. « Je ne la laisse pas ici, alors que tout le monde descend, et que personne ne sait qui est monté cette nuit. »",
      "Elle se tourne vers toi. « Le prévôt va vous demander ce que vous savez sur elle. Il l'a regardée, ce matin. Il n'est pas bête. » Elle attend.",
    ],
    choices: [
      { label: "« Je ne lui dirai rien. C'est à elle de parler, quand elle pourra. »", fx: { quest: "I_jeanne", flag: ["jeanne:secret", "jeanne:sort"], conf: { odeline: 15, lise: 10 }, ep: ["histoire", 2000] }, to: "H_jour3_secret" },
      { label: "« Il faut qu'il sache. Il est le seul à pouvoir la protéger. »", fx: { quest: "I_jeanne", flag: ["jeanne:revelee", "jeanne:sort"], conf: { hennequin: 15, odeline: -5, lise: -5 }, ep: ["histoire", 2000] }, to: "H_jour3_revele" },
    ] },
  H_jour3_secret: { act: "I", title: "Le secret", place: "hospice",
    text: [
      { with: "odeline", text: "Sœur Odeline hoche la tête. Jeanne, derrière elle, te regarde. Puis elle va chercher sous son matelas une petite boîte de fer-blanc, et elle la serre contre elle sans l'ouvrir, comme on montre à quelqu'un qu'on a quelque chose à soi." },
      { if: { has: "jeanne:boussole" }, text: "C'est ta boussole. Elle la remet dans la boîte, la boîte dans le baluchon. Elle la garde." },
    ],
    choices: [{ label: "Descendre", back: "H_hospice" }] },
  H_jour3_revele: { act: "I", title: "Le prévôt saura", place: "hospice",
    text: [
      "Sœur Odeline te regarde longtemps. Puis elle soupire. « Vous avez peut-être raison. Je ne sais plus. » Elle prend la main de Jeanne. « Je viendrai avec vous lui parler. Pas devant le frère. »",
      "Le prévôt vous écoute, dans le bureau de Mère Agnès, porte fermée. Il écoute tout le récit en silence. À la fin, il se lève, va à la fenêtre, et regarde la cour où Matthias charge les mules.",
      "« Lise Hollier, dit-il. Vivante. » Il ne se retourne pas. « Personne d'autre ne le sait. Ni le frère, ni le docteur, ni le sergent. Elle descend avec la sœur, comme sa nièce, et elle loge au presbytère, chez le curé Vidal. Je le connais : il ne parle qu'à Dieu, et encore. » Il se retourne. « Et vous, vous restez à portée de ma main. Je ne sais toujours pas de quel côté de la porte vous étiez. »",
    ],
    fx: { flag: "prevot:lise" },
    choices: [{ label: "Descendre", back: "H_hospice" }] },

  // the way down: end of act I
  H_descente: { act: "I", title: "La descente", place: "hospice",
    fx: { quest: "I_jours", ep: ["histoire", 3000] },
    text: [
      "On part à dix heures, en file : le sergent devant avec les mules, Matthias, le docteur, le prévôt, toi, et Sœur Odeline et Jeanne derrière, à distance, comme deux sœurs qui vont au marché. Brac vous accompagne jusqu'à la croix des Gélines, et s'assied là, et vous regarde descendre.",
      "Tu passes devant la croix. Tu t'arrêtes. Le rocher, la croix de fer, la neige tassée à son pied, comme si quelqu'un s'y était assis longtemps. Tous se taisent. Le prévôt attend que tu repartes.",
      { if: { has: "fente:connue" }, text: "Derrière la croix, sur la gauche, une pente d'éboulis enneigés monte vers une dalle de rocher fendue en deux. Tu la regardes. Tu te tais." },
      "Le chemin descend dans la forêt. La neige devient lourde, puis mouillée, puis de la boue. À quatre heures, au détour d'un lacet, Vaugrenat apparaît au fond de la vallée : des toits d'ardoise, un clocher pointu, un filet de fumée par cheminée. Toutes les cheminées fument.",
    ],
    choices: [{ label: "Fin de l'acte I", big: true, to: "V_aube" }] },
};
