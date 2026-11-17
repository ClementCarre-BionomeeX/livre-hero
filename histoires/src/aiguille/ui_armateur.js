// L'Île Folle-Aiguille · side story « L'armateur sous la pluie » (owes its question to King Lear: what is love worth when
// it must be said aloud to be paid, and what do children owe the father who measured it?). Act II, Victorine in
// Morlenc: at night, on the quay, the watch brings her old Joachim Cadoret, eighty, once the richest shipowner of the
// Hollandes, in a nightshirt in the rain. A year ago he divided his ships between his two elder daughters, who swore
// their love in fine words; the youngest, Maïna, said only that she loved him « as a daughter must », and married a
// pilot of the Basse-Fosse. Tonight the elders have put him out. Victorine takes him to the eldest, Gwladys, where she
// lets him go to the hospice (ui:hospice) or shames the daughter before her guests (ui:honte); or to Maïna's door,
// where she makes him go in (ui:entre) or leaves the choice to the two of them (ui:porte). Wired in A2v_jours.
module.exports = {
  passages: {
    UI_quai: { act: "II", title: "L'armateur sous la pluie", place: "quai_hollandes", ambiance: "nuit",
      fx: { meet: "cadoret" },
      text: [
        "On frappe chez elle à minuit, à l'auberge du Cormoran. Le guetteur de nuit, sa lanterne à la main, de l'eau plein le chapeau, demande si c'est bien elle, la médecin. Il a quelqu'un pour elle, sous l'auvent de la criée. Un vieux. Il ne sait pas quoi en faire. Il n'ose pas le mettre au violon, à cause de qui c'est.",
        "Sous l'auvent, assis sur une caisse de harengs vide, il y a un vieillard en chemise de nuit et en pantoufles, trempé jusqu'aux os, avec une couverture de cheval jetée sur les épaules par une main charitable. De longs cheveux blancs collés au crâne. Une figure de vieux lion, osseuse, avec un nez de proue et des yeux très pâles qui regardent la pluie tomber sur le port comme on regarde une armée défiler. Il parle. Il parle tout seul, d'une voix forte, à la mer, aux navires, au ciel, en comptant des tonneaux et des noms de navires.",
        "Le guetteur dit, à voix basse, que c'est le vieux Cadoret. Joachim Cadoret, l'armateur. Douze navires, de son temps, le plus gros armement des Hollandes. L'an dernier, il a tout partagé entre ses deux filles aînées, de son vivant, devant notaire. Il paraît qu'elles lui avaient fait de si beaux discours. La plus jeune n'a rien voulu dire, et elle n'a rien eu. Elle a épousé un pilote du port, et elle vit à la Basse-Fosse. Le guetteur ajoute qu'il a trouvé le vieux devant la porte de l'aînée, rue des Juges, en train de frapper. On ne lui ouvrait pas.",
      ],
      choices: [{ label: "S'agenouiller devant lui, et lui prendre le pouls", to: "UI_pouls" }] },
    UI_pouls: { act: "II", title: "L'armateur sous la pluie", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Le pouls est rapide, irrégulier ; la peau glacée ; une toux qui commence, grasse, au fond de la poitrine. Une nuit de plus sous cette pluie, et il ne passera pas la semaine. Il la laisse faire. Puis il la regarde, et il la reconnaît, ou il croit la reconnaître : il l'appelle Gwladys. Puis il se reprend. Il dit qu'elle n'est pas Gwladys, parce que Gwladys ne lui aurait pas pris la main.",
        "Il raconte, par morceaux, sans ordre. Gwladys lui avait dit qu'elle l'aimait plus que la lumière du jour. Solenn, la deuxième, plus que la mer elle-même. Il a trouvé ça très beau. Il leur a donné six navires chacune. Maïna, la petite, a dit qu'elle l'aimait comme une fille doit aimer son père, ni plus ni moins, et qu'elle ne savait pas le dire mieux. Il l'a trouvée sèche. Il l'a trouvée ingrate. Il ne lui a rien donné, et il ne lui a plus parlé.",
        "Puis il a vécu chez Gwladys. On lui a pris son cheval, d'abord, parce qu'il coûtait cher. Puis son valet. Puis sa chambre du premier, pour une chambre sous les toits. Puis, ce soir, à table, devant des invités, il a dit qu'un des navires était mal mené, et Gwladys a dit qu'il radotait, et il s'est levé, et il a crié, et on l'a mis dehors, en chemise, pour qu'il se calme. Il dit qu'il a frappé deux heures. Il dit que Solenn, chez qui il est allé ensuite, n'a pas ouvert non plus. Il dit qu'il ne sait pas où est la maison de Maïna. Il ne l'a jamais su.",
        "Il faut le mettre au chaud. Tout de suite. Victorine fait signe au guetteur de chercher un fiacre.",
      ],
      choices: [
        { label: "Le ramener chez Gwladys, rue des Juges, et frapper elle-même", to: "UI_aine" },
        { label: "Demander au guetteur où vit la femme du pilote, et l'y conduire", to: "UI_cadette" },
      ] },
    UI_aine: { act: "II", title: "L'armateur sous la pluie", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle frappe à la porte de l'hôtel Cadoret, rue des Juges, avec le pommeau de la canne du guetteur, assez fort pour réveiller la rue. Un valet ouvre, puis une femme de quarante ans, en robe de soirée bleue, avec des diamants au cou, et derrière elle, dans le salon éclairé, des invités qui se sont tus. Gwladys Cadoret regarde son père, dans sa couverture de cheval, et la médecin qui le soutient. Elle ne fait pas un geste vers lui.",
        "Elle dit, d'une voix de salon, que son père est malade de l'esprit depuis l'hiver, qu'il fait des scènes, qu'il insulte ses gens, qu'il ne sait plus ce qu'il dit, et qu'on ne peut plus le garder. Elle dit qu'elle allait justement, demain, le faire admettre à l'hospice de la Marine, dans une bonne chambre, payée. Elle tire une bourse de sa poche. Elle la tend à Victorine. Elle dit que si madame la médecin voulait bien l'y conduire elle-même, cette nuit, ce serait un grand service, et qu'il y aurait dans la bourse de quoi payer sa peine et la chambre pour un an.",
        "Derrière elle, au salon, un invité tousse. Le vieux Cadoret regarde sa fille comme on regarde un navire qu'on a lancé soi-même et qui chavire au sortir de la cale. Il ne dit rien. Il a cessé de parler. Il tremble.",
      ],
      choices: [
        { label: "Prendre la bourse, et le conduire à l'hospice, où il aura chaud", fx: { flag: "ui:hospice" }, to: "UI_hospice" },
        { label: "Entrer de force dans le salon, et dire devant les invités ce qu'on a fait de lui", fx: { flag: "ui:honte" }, to: "UI_honte" },
      ] },
    UI_hospice: { act: "II", title: "L'armateur sous la pluie", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle prend la bourse. Elle ne dit pas merci. Gwladys referme la porte avant qu'elle ait tourné le dos. Le fiacre les conduit à l'hospice de la Marine. On réveille la sœur portière, qui reconnaît le nom et s'agite. On trouve une chambre, avec un feu, un lit sec, une chemise propre. Victorine le frictionne elle-même, à l'eau-de-vie, longtemps. Elle lui fait boire du vin chaud. La toux se calme vers trois heures. Il s'endort, sa main dans la sienne.",
        "Il vit. Il passe l'hiver à l'hospice, dans la meilleure chambre, payée par sa fille, au milieu des vieux marins qu'il a jadis armés, payés, renvoyés. Ils le reconnaissent. Ils sont gentils avec lui, d'une gentillesse un peu moqueuse de vieux qui ont leur revanche. Victorine passe le voir avant l'appareillage. Il la reconnaît, cette fois. Il lui demande si elle connaît une femme de pilote, à la Basse-Fosse, qui s'appelle Maïna. Il demande si elle va bien. Il demande s'il pourrait la voir, un jour, si elle voulait bien.",
        "Victorine dit qu'elle ne sait pas. Elle a sauvé un vieil homme de la pluie avec l'argent de la fille qui l'y a mis. Elle a fait la chose sûre, la chose chaude, la chose sèche. Elle se demande, en sortant, pourquoi elle n'a pas pensé, cette nuit-là, à demander au guetteur où vivait la troisième. Elle connaît la réponse, et elle n'aime pas la connaître : la porte de la riche était plus près, et la bourse était pleine.",
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UI" }, back: "A2v_jours" }] },
    UI_honte: { act: "II", title: "L'armateur sous la pluie", place: "haute_ville", ambiance: "nuit",
      text: [
        "Elle repousse la bourse. Elle passe sous le bras de Gwladys avant que le valet ait refermé, avec le vieux appuyé contre elle, et elle entre au salon, trempée, crottée, avec un vieillard en chemise de nuit et en couverture de cheval. Les invités se lèvent. Il y a là deux échevins, un juge, un banquier, et leurs dames. Elle assied Joachim Cadoret dans le meilleur fauteuil, près du feu. Puis elle se tourne vers l'assistance, et elle dit, d'une voix de clinique, ce qu'elle a trouvé sous l'auvent de la criée, à minuit, et dans quel état, et à qui appartient le salon.",
        "Elle ne crie pas. Elle énumère : le pouls, la toux, la chemise, les pantoufles, deux heures de pluie, deux portes fermées. Elle dit le nom de l'hôtel où il a été chassé. Elle dit le nombre de navires qu'il a donnés. Elle dit que dans son métier, on appelle cela une exposition au froid, et que si le malade meurt, on appelle cela autrement, au tribunal. Le juge baisse les yeux. Un échevin prend son chapeau. Les dames se lèvent, une à une, et partent, sans un mot à la maîtresse de maison.",
        "Gwladys est devenue blanche sous ses diamants. Elle reste au milieu de son salon vide. Puis elle fait chauffer la chambre du premier, la vraie, et un bouillon, et elle sert son père elle-même, devant Victorine, avec des mains qui tremblent de rage. Le vieux la regarde faire. Il dit, très doucement, qu'elle a toujours été très belle quand elle était en colère, et que c'était sa mère tout craché.",
        "Victorine sait ce qu'elle a fait. Elle a forcé une fille à garder son père par peur du qu'en-dira-t-on, et ça tiendra, à Morlenc, tant que Morlenc regardera. Elle part dans quelques jours. Elle se dit que la honte publique est un mauvais remède, qui marche, et que les remèdes qui marchent ne sont pas toujours ceux qu'on voudrait donner. Elle laisse son adresse à l'hospice, au cas où.",
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UI" }, back: "A2v_jours" }] },
    UI_cadette: { act: "II", title: "L'armateur sous la pluie", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Le guetteur sait, bien sûr. Tout le quai sait. Une maison basse, au fond d'une cour de la Basse-Fosse, avec une barque retournée contre le mur et un filet qui sèche sous la pluie, pour rien. Le fiacre ne passe pas dans la ruelle. Victorine fait les derniers pas à pied, le vieux pendu à son bras, ses pantoufles noyées dans les flaques. Il demande où on le mène. Elle le lui dit. Il s'arrête net au milieu de la cour.",
        "Il dit qu'il ne veut pas. Il dit que Maïna ne l'a jamais aimé, puisqu'elle n'a rien su dire. Il dit qu'il ne frappera pas à la porte d'une fille ingrate, en chemise de nuit, pour qu'elle le voie ainsi et qu'elle rie. Il dit qu'il préfère retourner sous l'auvent. Il le dit avec une dignité affreuse, dans sa couverture de cheval, sous la pluie, au milieu d'une cour où pourrissent des filets.",
        "La porte s'ouvre avant qu'on ait frappé. Une jeune femme de trente ans, en jupon, un châle sur les épaules, une chandelle à la main. Elle a entendu la voix. Elle regarde son père. Elle ne dit rien. Elle ne court pas vers lui. Elle reste sur le seuil, la chandelle levée, sans bouger, et Victorine comprend qu'elle aussi attend quelque chose, depuis un an, et qu'elle ne fera pas le premier pas, parce que le premier pas, c'est lui qui le doit.",
      ],
      choices: [
        { label: "Pousser le vieil homme vers la porte, et le faire entrer, qu'il le veuille ou non", fx: { flag: "ui:entre" }, to: "UI_entre" },
        { label: "Rester en arrière, et les laisser tous les deux à la distance d'une cour", fx: { flag: "ui:porte" }, to: "UI_porte" },
      ] },
    UI_entre: { act: "II", title: "L'armateur sous la pluie", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Victorine ne lui demande pas son avis. Elle le prend par le bras, fermement, comme on mène un malade au lit, et elle le pousse vers la porte, en lui disant, assez fort pour que la fille entende, qu'il a une congestion de poitrine, que c'est la maison la plus proche, et qu'il entrera parce que sa médecin l'ordonne. Maïna s'écarte. Le vieux passe le seuil, trébuche. Sa fille le rattrape. C'est la première fois qu'elle le touche depuis un an.",
        "La maison n'a qu'une pièce, un feu de bois flotté, un lit, deux enfants qui dorment dans un coffre. On met le vieux dans le lit. Maïna le déshabille, le sèche, le couvre, avec des gestes rapides, sans un mot. Le pilote, son mari, un grand gars silencieux, rentre de la passe vers deux heures, voit son beau-père dans son lit, et s'assied sur le coffre, sans poser de question, en ôtant ses bottes.",
        "Au matin, la fièvre est tombée. Le vieux Cadoret ouvre les yeux. Il voit sa fille endormie sur une chaise, à côté du lit, la tête sur le bord du matelas, la main sur sa main. Il ne la réveille pas. Il regarde, longtemps. Quand Victorine revient le soir, il lui dit qu'il a compris une chose cette nuit, une chose bête, qu'un enfant sait : qu'on ne paie pas l'amour en navires, et qu'on ne le mesure pas en discours. Il dit qu'il est trop vieux pour l'avoir appris si tard, et qu'il a de la chance de l'avoir appris quand même.",
        "Victorine l'a fait entrer de force. Elle sait qu'elle a forcé deux orgueils à la fois. Elle se dit que, parfois, entre deux personnes qui s'attendent, il faut un tiers qui pousse, et qu'on ne remercie jamais le tiers. On ne la remercie pas, en effet. Le petit-fils, en partant à l'école, lui fait seulement un signe de la main, très sérieux, comme à une parente.",
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UI" }, back: "A2v_jours" }] },
    UI_porte: { act: "II", title: "L'armateur sous la pluie", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Victorine lâche le bras du vieil homme. Elle recule de trois pas, jusqu'à l'entrée de la cour, sous l'avancée d'un toit. Elle les laisse. Elle a sa sacoche, et le fiacre attend au bout de la ruelle, et elle se tient prête. Le reste ne lui appartient pas. Le vieux, au milieu de la cour, sous la pluie, regarde sa fille sur le seuil. La fille regarde son père. Une minute passe. Puis une autre. La chandelle coule.",
        "Puis le vieux Cadoret fait un pas. Un seul. Il s'arrête. Il dit, d'une voix enrouée, qu'il ne sait pas quoi dire. Maïna répond, de sa voix sèche, qu'elle n'a jamais su non plus, et que c'est pour ça qu'il l'a chassée. Il dit qu'il ne l'a pas chassée, qu'il ne lui a rien donné, ce qui n'est pas la même chose. Elle dit que si, c'est la même chose. Il baisse la tête. Il dit qu'elle a raison. Il dit : « Pardon. » Il le dit au filet qui sèche, plutôt qu'à elle, mais il le dit.",
        "Elle descend la marche. Elle lui met son châle sur la tête, par-dessus la couverture de cheval, et le fait entrer, sans un mot de plus. La porte se referme. Victorine attend encore un peu dans la cour. Puis elle retourne au fiacre. Le lendemain, elle passe prendre des nouvelles. Le vieux tousse dans le lit unique de la maison, et sa fille lui fait boire une tisane, et ils ne se parlent pas beaucoup, mais il y a dans la pièce une sorte de paix maladroite qu'aucun des deux ne sait encore porter.",
        "Victorine se dit qu'elle aurait pu pousser, et que c'est la chose la plus difficile qu'elle ait faite à Morlenc, de ne pas pousser. Elle a laissé deux personnes s'avancer chacune d'un pas, à leur vitesse, sous la pluie, avec le risque que l'un des deux ne fasse pas le sien. Ils l'ont fait. Elle ne saura jamais ce qui serait arrivé autrement, et c'est très bien ainsi.",
      ],
      choices: [{ label: "Retourner à l'auberge du Cormoran", fx: { quest: "UI" }, back: "A2v_jours" }] },
  },
  extras: {
    people: {
      cadoret: { name: "Joachim Cadoret", aka: ["le vieil armateur"], qui: "Ancien armateur des Hollandes, qui a partagé ses navires entre ses deux filles aînées." },
    },
    quests: [
      { id: "UI", act: "II", kind: "annexe", title: "L'armateur sous la pluie", start: "UI_quai", doit: "lear", echo: ["ui:hospice", "ui:honte", "ui:entre", "ui:porte"] },
    ],
  },
};
