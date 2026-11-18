// L'Île Folle-Aiguille · side story « La plage d'Herlé » (owes its question to La Chèvre de monsieur Seguin: may one
// keep someone safe against his will, when the freedom he wants may kill him?). Act III, the islet: Herlé, seventeen,
// the youngest sailor after the child, raised by the Sisters, sick of the boatswain's rope, has found a beach on the far
// side of the islet where no one gives orders. He means to hide when the Cormorane sails, and asks the child for a
// knife, a flint and silence. The child tells Gobert (vb:denonce), gives him what he asks (vb:laisse), or spends one
// night with him on his beach, to see the island in the dark (vb:nuit). Wired in A3n_ilot.
module.exports = {
  passages: {
    VB_appel: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nature",
      fx: { meet: "herle" },
      text: [
        "Il te prend à part sur le sentier de la source, entre deux barriques, avec des airs de conspirateur qui ne trompent personne. Herlé a dix-sept ans, des taches de rousseur jusque dans le cou, et le dos zébré par le bout de filin de Gobert, qui le trouve lent, rêveur et insolent, ce qui est exact. Il a grandi chez les Sœurs de la Basse-Fosse, puis sur des navires, et il n'a jamais rien possédé à lui qu'un couteau qu'on lui a volé à Morlenc.",
        "« Viens voir », dit-il. Il t'entraîne de l'autre côté de la colline, par une sente de chèvre qu'il a trouvée seul, jusqu'à une petite plage en croissant, close de rochers noirs, où l'eau est si claire qu'on voit les poissons dormir. Il y a des cocos par terre. Il y a une source qui tombe d'un rocher dans une vasque de pierre. Il y a, surtout, personne. Herlé écarte les bras, comme un propriétaire qui fait visiter ses terres. « Ici, dit-il, personne ne me crie dessus. »",
        "Il a tout prévu. Quand la Cormorane appareillera, il ne sera pas à l'appel. On le cherchera une heure, Gobert jurera, la capitaine ne retardera pas le départ pour un matelot de rien. Il vivra ici. Il pêchera. Il construira une cabane. Il lui faut seulement trois choses : un couteau, un briquet, et ton silence. Il te regarde avec des yeux brillants, si heureux, si sûr de lui, que tu as l'impression qu'il te demande la permission d'être libre.",
      ],
      choices: [{ label: "Réfléchir, sur le sentier du retour", to: "VB_verger" }] },
    VB_plage_soir: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nature",
      text: [
        "Au crépuscule, la petite plage change de nature. Le soleil couchant la frappe de biais, par la brèche des rochers, et l'allume d'un coup : le sable devient rose, puis rouge, puis d'une couleur de braise qui s'éteint, et l'eau claire, où l'on voyait dormir les poissons à midi, prend la couleur d'un vin noir où l'on ne voit plus rien.",
        "Herlé n'a pas attendu l'appareillage pour commencer sa cabane. Contre le rocher de la source, il a planté quatre bois flottés et posé dessus la moitié d'un toit de palmes, et il a fait une porte d'une planche d'épave où se lit encore la moitié d'un nom. Dessous, ses trésors, rangés comme dans une sacristie : des coquillages triés par taille sur une étagère de pierres plates, une carapace de tortue en guise de bassine, un caillou percé pendu à une ficelle, et, gravées sur le rocher, des encoches, une par jour, depuis le mouillage, et une ligne vide, au bout, pour les jours à venir.",
        "Il y a deux lits de fougères. Tu le remarques. Il le voit, et il rougit jusqu'aux oreilles. Il dit qu'il en a fait deux parce qu'il y avait assez de fougères. Puis il dit, sans te regarder, qu'il ne sait pas pour qui est le deuxième. Pour quelqu'un. Plus tard. Il dit qu'on ne fait pas un pays tout seul, même un pays de quarante pas.",
        "La lumière s'en va d'un coup, comme on souffle une chandelle. Les rochers deviennent noirs. La forêt, derrière la colline, qui bruissait d'oiseaux un instant plus tôt, se tait, d'un seul coup, toute à la fois, comme si quelqu'un avait levé la main. Herlé ne semble pas le remarquer. Il allume un petit feu de brindilles devant sa demi-cabane, et il te sourit par-dessus les flammes.",
      ],
      choices: [
        { back: "VB_verger", label: "Revenir sur le sentier, avant la nuit noire" }
      ] },
    VB_soeurs: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nature",
      text: [
        "Herlé ramasse un galet et le fait sauter dans sa main. Il dit que c'était propre. Il dit que c'est la première chose dont il se souvienne : la propreté, l'odeur de savon noir, les dalles qu'on lavait à genoux chaque matin, en rang, avant la prière, et la sœur portière qui passait derrière avec une baguette, pour les genoux qui ne touchaient pas assez le sol.",
        "Il dit qu'on se levait à la cloche, qu'on mangeait à la cloche, qu'on se taisait à la cloche, et qu'il y avait même une cloche pour avoir le droit de parler, le dimanche, une heure, dans la cour. Il dit qu'il comptait les cloches, la nuit, et qu'il y en avait trente-deux par jour. Il dit qu'il s'est enfui à douze ans, par le mur du potager, pour aller à la mer, parce que la mer était le seul endroit où l'on ne sonnait rien.",
        "Il fait sauter le galet plus fort. Il dit qu'à bord, on pique l'heure à la cloche, toutes les demi-heures, jour et nuit, et que le bosco a remplacé la sœur portière, et le bout de filin la baguette. Il dit qu'il a changé de cloche, voilà tout. Il dit qu'il a fait le tour de la terre pour retrouver le couvent avec du sel dessus.",
        "Puis il lance le galet, de toutes ses forces, vers la mer, et il regarde l'eau se refermer dessus. Il dit que, sur sa plage, il n'y a pas de cloche. Il dit qu'il n'y a que la marée, et que la marée ne donne pas d'ordre : elle monte et elle descend, et l'on fait ce qu'on veut entre les deux. Il dit cela avec un tel bonheur dans la voix que tu as peur pour lui.",
      ],
      choices: [
        { back: "VB_verger", label: "Revenir au sentier, et réfléchir" }
      ] },
    VB_verger: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nature",
      text: [
        { first: true, text: "Sur le sentier, quelque chose bouge dans les fougères. C'est Sept, accroupi, qui t'a suivi{e} depuis la plage. Il te regarde de ses yeux trop écartés, avec une gravité de vieillard, et il secoue la tête, vite, plusieurs fois. Il désigne la petite plage, derrière la colline. « Jour, bon. Nuit… » Il cherche le mot. Il ne le trouve pas. Il pose la main à plat sur sa propre gorge, et il serre, doucement. Puis il s'en va." },
        { first: true, text: "Tu penses à ce cri, le premier jour, au mouillage, qui montait de la forêt. Tu penses à la maison blanche, à mi-pente, à ses volets clos, et à tout ce qui vit dans cette forêt sans avoir de nom. Tu penses aussi au dos d'Herlé, à ses côtes qu'on compte à travers la chemise, au bout de filin qui siffle, aux hamacs du poste où l'on dort à quarante, aux années de mer qui l'attendent, toutes pareilles, jusqu'à ce qu'il soit vieux, ou noyé." },
        { first: true, text: "Tu as un couteau, dans ta poche, un bon couteau à manche de corne. Tu as un briquet. Tu as la voix qu'il faut pour aller trouver Gobert. Et tu as une nuit devant toi, avant l'appareillage." },
        { again: true, text: "Le soleil descend derrière la colline. Il te reste une nuit, un couteau, un briquet, et ta voix." }
      ],
      choices: [
        { label: "Repasser la colline, au crépuscule, jusqu'à la plage d'Herlé", to: "VB_plage_soir", hide: { seen: "VB_plage_soir" } },
        { label: "Aller demander à Herlé, sur sa plage, comment c'était chez les Sœurs", to: "VB_soeurs", hide: { seen: "VB_soeurs" } },
        { label: "Aller trouver Gobert, et tout lui dire", fx: { flag: "vb:denonce" }, to: "VB_arrache" },
        { label: "Lui donner le couteau et le briquet, et te taire", fx: { flag: "vb:laisse" }, to: "VB_laisse" },
        { label: "Passer la nuit avec lui sur sa plage, pour voir l'île dans le noir", fx: { flag: "vb:nuit" }, to: "VB_goute" },
      ] },
    VB_arrache: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nature",
      text: [
        "Gobert t'écoute sans t'interrompre, en mâchonnant sa chique. Puis il crache, et dit seulement : « C'est bien. » Il attend. Il laisse Herlé à sa plage et à ses plans jusqu'au matin de l'appareillage. Ce matin-là, au moment où la chaloupe va partir pour la dernière fois, il le prend simplement par le col, comme on ramasse un chat, et le jette dans le canot, et s'assied dessus jusqu'au navire. Herlé hurle, se débat, mord. Puis il pleure, à plat ventre, la joue dans l'eau de cale.",
        "Il ne t'adresse plus la parole. Au poste, il change de hamac pour ne plus dormir à côté du tien. À la manœuvre, il te bouscule sans s'excuser. Gobert le trouve moins lent, maintenant, et moins rêveur. Il reçoit moins de coups de filin. Il a cessé de regarder la mer comme une chose qui pourrait mener ailleurs.",
        "Un soir, très longtemps après, dans un port dont tu ne sais plus le nom, il s'arrête devant toi sur le quai, un peu ivre. Il a grandi. Il a des galons de quartier-maître. Il dit : « Tu m'as gardé vivant. » Tu attends. Il ajoute : « C'est tout ce que tu m'as gardé. » Puis il te tape sur l'épaule, presque gentiment, et il s'en va boire ailleurs.",
      ],
      choices: [{ label: "Redescendre à la crique", fx: { quest: "VB" }, back: "A3n_ilot" }] },
    VB_laisse: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nature",
      text: [
        "Tu lui donnes le couteau à manche de corne et le briquet, derrière les barriques. Il les serre contre sa poitrine comme des reliques. Il t'embrasse sur les deux joues, d'un coup, très vite, et rougit jusqu'aux oreilles. Le matin de l'appareillage, il n'est pas à l'appel. Gobert jure, cherche une heure, regarde la forêt, regarde le ciel, puis raye un nom sur sa liste avec le pouce. La capitaine ne retarde pas le départ.",
        "Le soir, de la hune où l'on t'a envoyé{e} ferler, tu regardes l'îlot s'éloigner. Sur l'autre versant, au-dessus de la petite plage en croissant, monte un mince filet de fumée. Il a allumé son feu. Il est chez lui. Tu souris. Tu restes là-haut longtemps, malgré le froid, à regarder ce fil de fumée devenir une étoile.",
        "Puis la brise de terre t'apporte, très loin, très faible, un cri. Long, aigu, interminable. Le même que le premier jour. Il pourrait être celui d'un oiseau, ou d'une bête, ou d'un garçon de dix-sept ans. Il s'arrête net. La fumée, là-bas, continue de monter, tranquille, toute droite. Tu ne sauras jamais. Tu choisis, pour le reste de ta vie, de croire que c'était un oiseau, et tu sais exactement ce que vaut ce choix.",
      ],
      choices: [{ label: "Redescendre à la crique", fx: { quest: "VB" }, back: "A3n_ilot" }] },
    VB_goute: { act: "III", title: "La plage d'Herlé", place: "ilot", ambiance: "nuit",
      text: [
        "Vous allumez un feu sur la petite plage, au crépuscule, avec du bois flotté. Herlé est ivre de bonheur. Il fait griller un poisson qu'il a pris à la main, il chante des chansons des Sœurs, il dessine dans le sable le plan de sa cabane. Puis le soleil tombe, d'un coup, comme on souffle une chandelle, et la forêt, derrière les rochers noirs, se met à parler.",
        "D'abord des craquements. Puis des souffles. Puis, très loin, vers la colline, un chant monotone, à plusieurs voix, des voix rauques qui récitent quelque chose ensemble, en mesure, comme des enfants à l'école, et qui s'arrêtent, et reprennent. Puis des pas, tout autour du feu, à la lisière de la lumière. Des pas qui tournent. Herlé a cessé de chanter. Il tient le couteau. Vous restez dos à dos, sans parler, jusqu'à l'aube, à nourrir le feu de tout ce qui brûle, ses plans de cabane compris.",
        "Au premier rayon, les pas s'éloignent. Herlé se lève, gris, les yeux rouges, et regarde longtemps sa plage, l'eau claire, les poissons qui dorment, la vasque de pierre. Puis il éteint le feu, avec du sable, soigneusement, et prend le sentier de la crique, devant toi, sans un mot. Il est à l'appel. Gobert ne remarque rien. En mer, Herlé redevient lent et rêveur, et reçoit son filin, et ne s'en plaint pas. Il te dit un jour : « Je suis resté une nuit. Toute une nuit. » Il le dit avec fierté. Il a raison d'en être fier.",
      ],
      choices: [{ label: "Redescendre à la crique", fx: { quest: "VB" }, back: "A3n_ilot" }] },
  },
  extras: {
    people: {
      herle: { name: "Herlé", aka: ["le jeune matelot roux"], qui: "Le plus jeune matelot de la Cormorane, élevé par les Sœurs de la Basse-Fosse." },
    },
    quests: [
      { id: "VB", act: "III", kind: "annexe", title: "La plage d'Herlé", start: "VB_appel", doit: "chevreseguin", echo: ["vb:denonce", "vb:laisse", "vb:nuit"] },
    ],
  },
};
