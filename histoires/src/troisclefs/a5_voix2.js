// Les Trois Clefs d'Aiguemorne · act V, the voice (2/2): the third signature (the Count, rue de l'Épée), the robing,
// the procession of the Keys from the place aux Heures to the citadel, what happens on the way, the dais, the
// showing of the three keys to the Voice, and the climb, alone, by the front door. Exit: A5c_rdv.
// Shared marks: monde:a5:comte (he will hold the stairs: also set by the eve), monde:a5:clefs_vues (what each
// Clavaire carries tonight). Personal: a5:v_vu (the hood has slipped once).
var AIDES = [{ if: { has: "monde:a4:reponse=non" }, v: 15 }, { if: { has: "monde:a4:vie_due" }, v: 15 }, { if: { has: "monde:brandelis:parole" }, v: 10 }, { if: { has: "monde:a4:comte_libre" }, v: 10 }, { if: { has: "monde:a4:mere" }, v: 10 }, { if: { has: "monde:a4:estime_comte" }, v: 10 }, { if: { voie: "bretteur" }, v: 5 }, { if: { voie: "comedien" }, v: 5 }];
module.exports = {
  passages: {
    A5v_comte: { act: "V", title: "La rue de l'Épée", place: "ville_haute", ambiance: "chateau",
      fx: { meet: "brandelis" },
      text: [
        "L'hôtel de Brandelis a des tourelles, un écusson martelé par le temps, et une cour où six chevaux attendent, sellés, depuis le matin, parce que le maître aime savoir qu'il pourrait partir.",
        "Maître Ravaudet t'ouvre lui-même. Il voit la robe, le rôle, la clochette du bedeau ; et ses yeux se remplissent, par réflexe, avant qu'il ait calculé ce que coûte une Voix. « Elle ne mange pas ? demande-t-il au bedeau. Elle ne boit rien ? Dieu la bénisse. Par ici. »",
        "Le comte est dans la salle d'armes, en bras de chemise, son ruban cramoisi au cou. On lui a apporté son habit de Connétable sur un mannequin : du rouge, de l'or, une épée de parade large comme la main. Il la regarde avec ennui. Il en porte une autre au côté, mince, sans ornement, qui a servi.",
        { if: { has: "monde:a4:comte_blesse" }, text: "Il a le bras droit en écharpe. Il a signé toute sa vie de cette main-là ; il prend la plume de la gauche, avec un sourire." },
        "« La Voix ! » Il a ce ton sonore, fait pour les cours de château. « Donnez. Où met-on son nom ? J'ai l'habitude : c'est la seule chose que l'on m'ait jamais demandée. »",
        "Il signe, sans lire, d'un B qui crève le parchemin. Puis il te regarde, sous le capuchon, franchement, comme on regarde l'adversaire avant la reprise.",
        { if: { has: "monde:a5:comte" }, text: "« Vous. » Il rit. « On est venu me voir hier soir, à trois. Je ne m'attendais pas à la suite en robe. Décidément, votre maison a de la garde-robe. »", else: "« Tiens, dit-il plus bas. Je connais cette façon de tenir les épaules. Je l'ai eue en face de moi, il n'y a pas trois semaines. » Sa main va à son ruban. « Ne craignez rien. Je ne dénonce pas les gens chez moi. »" },
      ],
      choices: [{ label: "Rouler le rôle, et rester", to: "A5v_comte_b", big: true }] },

    A5v_comte_b: { act: "V", title: "Ce qu'il a au bout de son ruban", place: "ville_haute",
      branch: [
        { if: { has: "monde:a5:comte" }, to: "A5v_comte_allie" },
        { to: "A5v_comte_essai" },
      ] },

    A5v_comte_allie: { act: "V", title: "Le palier de la meurtrière", place: "ville_haute", ambiance: "chateau",
      fx: { ep: ["perso", 800] },
      text: [
        "« J'ai été voir, ce matin, dit-il. La Tour. On ne m'y laisse pas monter avant ce soir ; mais j'ai fait le tour par le rempart, avec une lorgnette. À mi-hauteur, il y a une meurtrière. Donc un palier. » Il mime, du plat de la main, un escalier qui tourne. « Une vis à gauche. Celui qui descend a le bras droit libre, celui qui monte a le mur contre son épée. Mon grand-père a tenu deux heures la vis de Castel-Rouvre, seul, contre trente Lansquenets, dans cette position. Il en est mort, notez. Mais deux heures après. »",
        "Il décroche du mannequin l'épée de parade, la soupèse, la raccroche.",
        "« Je garde la mienne. Je monte le dernier, c'est l'usage, pour garder les degrés ; il y aura derrière moi douze casaques de ce gros homme, si je compte bien ses façons. Au palier, je m'arrête. Je me retourne. Je leur fais observer que la vis de la Tour est domaine du Connétable, depuis la fondation, et que nul n'y porte hallebarde sans mon congé. C'est vrai. Je l'ai fait vérifier par Ravaudet, qui en a pleuré : il a trouvé l'article entre deux notes de sellier. »",
        "« Et s'ils passent outre ? »",
        "« Alors j'aurai enfin, à cinquante-cinq ans, une querelle qui ne soit pas de jeu. » Il sourit, et pour la première fois tu vois ce qu'il a dû être à vingt ans, le matin de ses trois batailles. « Dites à vos deux amis qu'ils ont un quart d'heure de plus que ce qu'ils croient. Je ne garantis pas davantage. Je n'ai jamais rien tenu plus d'un quart d'heure, sauf une rancune contre moi-même. »",
        "Il tire sur son ruban, et te montre ce qu'il y a au bout.",
        { if: { has: "monde:a4:clef=gagnee" }, text: "Il n'y a rien. Le ruban finit sur un nœud. « Je l'ai perdue au jeu, devant témoins. Je monte ce soir avec un ruban et ma parole. C'est plus léger. »" },
        { if: { has: "monde:a4:clef=echangee" }, text: "Il y a une clef rouge, courte, à l'anneau en cœur. Il la fait tourner. « Du plomb doré. Votre horloger travaille bien : je l'ai portée trois semaines sans rien sentir. Je la garde. Elle me rappellera qu'on peut me remplacer une chose sur le cœur pendant que je dors. »" },
        { if: { has: "monde:a4:clef=prise" }, text: "Il y a un dé. Un dé d'ivoire, percé, pendu à la chaîne d'acier, à la place de l'autre. « Il fallait bien y mettre quelque chose. J'ai mis ce que j'avais de plus cher. Si ces messieurs me demandent ma clef, je leur montrerai un six. »" },
      ],
      choices: [{ back: "A5v_ville" }] },

    A5v_comte_essai: { act: "V", title: "Une partie à proposer", place: "ville_haute", ambiance: "chateau",
      text: [
        "Il attend. Il a posé la plume. Il joue avec ses trois dés, de la main gauche, sans les jeter.",
        { if: { has: "monde:a4:reponse=oui" }, text: "« Vous savez ce que j'ai signé le 10, à minuit. Vous y étiez, je crois, dans une galerie. Tout : le cylindre, le mur. On m'a rendu mes bois. Ravaudet a cessé de pleurer une demi-journée. » Il fait sauter les dés. « Je ne m'en vante pas. »", else: "« J'ai dit non à leur mur. C'est le seul non de ma vie, et il m'a coûté mes bois. Pour le reste, je monte ce soir avec eux, comme mon père et mon grand-père : un Brandelis garde les degrés. »" },
        "« Vous êtes venu{e} chercher un *vu*. Vous l'avez. Mais on ne reste pas debout dans ma salle d'armes, le rôle roulé, quand on n'a plus rien à demander. » Il te regarde. « Parlez. J'écoute tout ce qui ressemble à une partie. »",
        "Il y a, à mi-hauteur de la vis, un palier où un homme seul arrête qui il veut. Il y a un Connétable qui monte le dernier, l'épée au côté. Il suffirait qu'il s'y arrête.",
      ],
      choices: [
        { label: "« Votre mère l'a entendue tousser. Vous le savez depuis quinze ans. Ce soir, tenez un escalier pour elle. »",
          test: { dom: "social", diff: 10, label: "Proposer à un joueur la seule mise qu'il n'ait jamais faite", help: AIDES },
          win: { fx: { flag: "monde:a5:comte", ep: ["perso", 1800] }, to: "A5v_comte_ok" }, lose: { to: "A5v_comte_ko" } },
        { label: "« Je vous propose de perdre. Vous savez le faire mieux que personne : perdez contre vos deux collègues, exprès, pour une fois. »",
          test: { dom: "social", diff: 15, label: "Prendre un homme par son insolence", help: AIDES },
          win: { fx: { flag: "monde:a5:comte", ep: ["perso", 1800] }, to: "A5v_comte_ok" }, lose: { to: "A5v_comte_ko" } },
      ] },

    A5v_comte_ok: { act: "V", title: "Trois dés sur une table", place: "ville_haute", ambiance: "chateau",
      text: [
        "Les trois dés s'arrêtent dans sa paume. Il referme la main dessus.",
        "« *Il y a quelqu'un derrière cette porte, Thibert, quelqu'un qui tousse.* » Il le dit d'une autre voix, plus haute, plus sèche : celle d'une vieille femme en grand deuil, qui écoutait. « Elle me l'a dit avec ses dernières commissions, entre la lingerie et les fermages. J'ai été à la chasse. J'y suis depuis quinze ans. »",
        "Il va à la fenêtre. On voit d'ici la Tour, au-dessus des toits.",
        { if: { has: "monde:a4:reponse=oui" }, text: "« J'ai signé leur mur. On ne se dédit pas d'une signature : j'en ai trop donné pour ôter son prix à la seule monnaie que j'aie. Mais on peut arriver en retard à ce qu'elle promet. C'est un talent que tout le monde me reconnaît. »", else: "« J'ai dit non une fois. Quand on n'en a dit qu'un, on y tient. Il serait dommage de le laisser seul. »" },
        "Il se retourne. Il a rajeuni de vingt ans, de cette jeunesse que donnent aux joueurs les coups dont ils ne voient pas la fin.",
        "« À mi-vis, il y a un palier. Je monte le dernier, l'épée au côté ; derrière moi, les hallebardes de ce gros homme. Je m'y arrêterai. Je leur dirai que la vis de la Tour est domaine du Connétable, et que nul n'y porte fer sans mon congé. Je crois même que c'est vrai : Ravaudet me trouvera l'article, il trouve tout, en pleurant. » Il jette les dés sur la table, enfin. Ils roulent. « Un quart d'heure. Je ne garantis pas davantage. »",
        "Tu regardes les dés. Il a fait un trois, un trois et un quatre.",
        "« Dix, dit le comte de Brandelis, enchanté. Pour la première fois de ma vie, je passe. »",
      ],
      choices: [{ back: "A5v_ville" }] },

    A5v_comte_ko: { act: "V", title: "Un salut", place: "ville_haute", ambiance: "chateau",
      text: [
        "Il t'écoute jusqu'au bout. Il y a même un instant où quelque chose passe dans ses yeux, comme passe une bête au fond d'une allée. Puis il referme la main sur ses dés, et son visage redevient ce visage aimable et fermé des gens à qui l'on vient demander de l'argent.",
        "« C'est bien dit. On voit que vous lisez pour le Bronze. » Il te rend le rôle. « Mais voyez-vous, on m'a beaucoup proposé de me racheter. Des confesseurs, des femmes, mon intendant. Je me suis toujours méfié : cela commence par un beau geste, et cela finit par une vie rangée. »",
        "Il va au mannequin, décroche le manteau rouge.",
        "« Je monte ce soir avec mes deux collègues, le dernier, l'épée au côté, comme mon père. Je ne vous cherche pas. Si je vous trouve devant la porte, je ferai mon office, très bien, et sans rancune. » Il te salue, du salut qu'on fait sur le pré. « Allez. Vous aurez été la seule personne de cette semaine à me parler de ma mère sans que je lui en veuille. Cela vaut bien que je vous laisse une demi-journée d'avance. »",
        "Dans la cuisine, Maître Ravaudet te tient la porte, le mouchoir à la main. Il ne dit rien. Il te glisse seulement, d'une voix mouillée : « Il ne dort plus. Il s'exerce jusqu'à trois heures. On ne s'exerce pas ainsi contre des gens que l'on méprise. »",
      ],
      choices: [{ back: "A5v_ville" }] },

    // ───────────────────────────── The robing, the procession ─────────────────────────────
    A5v_habillage: { act: "V", title: "L'habillage", place: "ville_haute", ambiance: "ville",
      fx: { until: 20 },
      text: [
        "Le soir tombe sur la rue du Greffe. On t'habille dans la salle lambrissée, sous le tableau du Juge, entre deux flambeaux. C'est Maître Minutier lui-même qui noue le rabat rouge, avec des doigts qui sentent la colle.",
        "« Écoutez, Voix, et retenez. Vous marchez seule, devant les trois dais, le rôle levé à hauteur du front. Vous ne tournez pas la tête. Dans la cour, vous vous tenez au pied de l'estrade pendant l'hommage des métiers. À la demie de dix heures, MM. les Clavaires vous présentent leurs clefs : vous les regardez, vous dites *trois clefs sont venues*, et je l'écris. C'est le dernier acte que le greffe dresse avant la Sentence. »",
        "Il te met le capuchon.",
        "« Ensuite vous montez. Seule. Vous dressez le rôle sur le pupitre de fer, face à la porte, et vous attendez. Quand MM. les Clavaires seront sur le banc, vous lisez. Lentement. Après la septième Cause, vous dites : *Le rôle est lu. Que le Bronze juge.* Vous rabattez le capuchon sur vos yeux, et vous ne le relevez plus qu'on ne vous ait touché l'épaule. »",
        "« Et pendant qu'il juge ? »",
        "« Vous ne voyez rien, vous n'entendez rien, et vous n'en parlez jamais. » Il recule pour te juger, comme un tailleur. « Baruch avait cette même façon de demander. Tâchez de ne pas finir à la salle des Rôles. »",
        "Dans la cour du greffe, le vieux balayeur est appuyé sur son balai. Il te regarde sortir. Il fait, de la main, un petit geste de haut en bas, très lent : *lentement*.",
      ],
      choices: [{ label: "Gagner la place aux Heures", to: "A5v_place", big: true }] },

    A5v_place: { act: "V", title: "Quarante cadrans", place: "heures", ambiance: "nuit",
      text: [
        "La place aux Heures est le ventre de la ville. Ce soir, on y a allumé les quarante cadrans des quarante maîtres horlogers, chacun derrière sa lanterne ; ils donnent quarante heures voisines, comme toujours, et pour une nuit cela ressemble à une constellation.",
        "Une seule boutique est noire. *CROCHEMORE, DE PÈRE EN FILS, HORLOGER DU BRONZE.* Le cadran de l'enseigne s'est arrêté il y a sept semaines. Quelqu'un y a pendu une lanterne, comme à la Clef Tordue, comme à toutes les maisons vides.",
        "La procession se forme. C'est une chose immense et lente, qui s'ordonne d'elle-même, parce que chacun sait depuis cent cinq ans où est sa place. En tête, les Enfants de la Morne, deux par deux, cent vingt, en sarrau gris, chacun sa lanterne à la main et sa clef à numéro par-dessus le sarrau. Puis les croix des paroisses. Puis les métiers jurés, sous leurs bannières : les Heures, le Fer, les Chaînes, les Balances. Puis un grand vide, de trente pas.",
        "Dans ce vide, il y a toi.",
        "Derrière toi, trois dais portés à bras. Sous le bleu, le Syndic, sa chaîne d'or, et une clef grise sur un coussin de velours. Sous le violet, l'évêque, pâle, et un coffret d'ivoire. Sous le cramoisi, le Connétable, à cheval, son ruban au cou. Ils ne se regardent pas. Trois cortèges de gens d'armes ferment la marche : les casaques rousses, les hallebardes noires, et vingt gentilshommes en habit de chasse.",
        "Les cloches partent. Tu lèves le rôle à hauteur du front, et tu fais le premier pas.",
      ],
      choices: [{ label: "Marcher", to: "A5v_procession", big: true }] },

    A5v_procession: { act: "V", title: "La procession des Clefs", place: "ferronniers", ambiance: "nuit",
      fx: { until: 22 },
      text: [
        "On monte. La rue des Ferronniers, d'abord, entre ses deux cents enseignes de fer qui grincent ; puis les lacets de la Ville-Haute ; puis la rampe. Cela dure une heure et demie. Trente mille personnes regardent passer sept paragraphes que tu portes au bout des bras.",
        "Tu découvres une chose que la Douairière ne t'avait pas apprise : ce que c'est que d'être regardé{e} par une ville qui croit. Ils se taisent sur ton passage. Les hommes ôtent leur bonnet. Les mères lèvent les enfants pour qu'ils voient le rôle. Une vieille tend la main, touche le bas de ta robe, et porte ses doigts à ses lèvres.",
        "Ce qu'ils regardent ainsi, ce n'est pas toi, ni même le parchemin. C'est l'idée qu'il existe quelque part, tout en haut, quelqu'un de juste, à qui l'on peut porter sept questions et qui répondra. Tu as dans tes bras toute la confiance d'une ville. Elle pèse plus que trois clefs.",
        "Et tu sais, toi, qui répondra. Une femme de soixante-cinq ans, qui tousse, à la lumière d'une lampe. Tu te demandes, marche après marche, si ces gens-là seraient déçus de l'apprendre, ou si quelque chose en eux le sait déjà et tient à ne pas le savoir.",
        "À mi-rampe, les cierges de la foule deviennent des lanternes. Tu reconnais des figures : des bonnets du quai, des tabliers de cuir. La ville basse est montée plus haut que d'habitude.",
      ],
      choices: [{ label: "Passer la grande porte", to: "A5v_incident", big: true }] },

    A5v_incident: { act: "V", title: "Sous la voûte", place: "citadelle",
      branch: [
        { if: { has: "monde:douce:doyen" }, to: "A5v_inc_gant" },
        { if: { all: [{ has: "monde:cadenas:poursuit" }, { not: "monde:a5:loi" }] }, to: "A5v_inc_cadenas" },
        { to: "A5v_inc_enfant" },
      ] },

    A5v_inc_gant: { act: "V", title: "Un pénitent", place: "citadelle", ambiance: "nuit",
      text: [
        "Sous la voûte de la grande porte, la procession se resserre. On y marche épaule contre épaule, dans la fumée des torches, entre deux haies de pénitents à cagoule qui portent des cierges.",
        "L'un d'eux a les mains gantées de noir.",
        "Tu le vois trop tard. Il sort du rang d'un demi-pas, comme pour moucher sa flamme, et son bras libre passe devant ta figure. Il ne cherche pas à te prendre : on ne prend pas la Voix au milieu de trente mille personnes. Il cherche le bord de ton capuchon. Un capuchon qui tombe sous une voûte éclairée, à dix pas de trois Clavaires et d'un sergent qui sait une affiche par cœur, voilà tout ce que Sans-Bruit a vendu à Monseigneur.",
      ],
      choices: [
        { label: "Baisser le rôle d'un coup, comme pour le présenter à baiser, entre sa main et ta tête",
          test: { dom: "discretion", diff: 10, label: "Garder un capuchon", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { voie: "crocheteur" }, v: 10 }, { if: { voie: "bretteur" }, v: 10 }, { if: { voie: "coureur" }, v: 5 }] },
          win: { fx: { ep: ["perso", 1500] }, to: "A5v_inc_gant_ok" }, lose: { fx: { flag: "a5:v_vu" }, to: "A5v_inc_gant_ko" } },
      ] },

    A5v_inc_gant_ok: { act: "V", title: "Le rôle à baiser", place: "citadelle", ambiance: "nuit",
      text: [
        "Les deux bâtons d'ébène descendent entre vous. La main gantée rencontre quatre aunes de parchemin scellé, au lieu d'un bord d'étoffe ; et l'homme se trouve, devant toute une voûte, avec le rôle des Sept Causes sous le nez.",
        "Il n'y a qu'une chose à faire en pareil cas, quand on porte une cagoule de pénitent. Il la fait. Il baise le parchemin.",
        "Un murmure d'édification court sous la voûte. Dix autres pénitents sortent du rang pour en faire autant. Tu leur présentes le rôle, à chacun, gravement, et tu avances ainsi jusqu'à la cour, sous la dévotion de gens qui te cachent mieux qu'un mur.",
        "Le gant noir est resté en arrière. Il a soufflé son cierge.",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5v_estrade", big: true }] },

    A5v_inc_gant_ko: { act: "V", title: "Une seconde", place: "citadelle", ambiance: "nuit",
      text: [
        "Les doigts de chevreau accrochent le bord. Le capuchon glisse en arrière, d'un coup, jusqu'aux épaules.",
        "Cela dure une seconde. Tu le rabats à deux mains, en lâchant un bâton du rôle, qui se déroule de trois pieds sur le pavé. Autour de toi, on se précipite, on ramasse, on se signe : une Voix qui laisse tomber le rôle, c'est un présage, et chacun veut l'avoir conjuré.",
        "Dans cette seconde, il y avait des torches, et ta figure dedans. Tu ne sais pas qui a regardé. Sous le dais violet, il t'a semblé qu'un visage très pâle se tournait, avec un sourire. Au pied de la voûte, un sergent à moustache rousse a froncé le sourcil, comme un homme qui cherche un mot.",
        "Tu repars, le rôle levé. Tes mains tremblent. Dans la robe, personne ne le voit.",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5v_estrade", big: true }] },

    A5v_inc_cadenas: { act: "V", title: "Un homme qui regarde les figures", place: "citadelle", ambiance: "nuit",
      fx: { meet: "cadenas" },
      text: [
        "Sous la voûte de la grande porte, le guet fait la haie. Et au bout de la haie, à pied, sans torche, il y a un homme trapu, en casaque bleue, qui mâche un clou de girofle et regarde les figures.",
        "Le prévôt d'Aiguemorne ne croit pas aux processions. Il croit que trois personnes qu'il cherche depuis six semaines sont dans la ville, cette nuit, et qu'elles iront où va tout le monde. Il regarde donc chaque croix, chaque bannière, chaque porteur de dais. Son œil lent arrive sur toi.",
        "On ne regarde pas sous le capuchon de la Voix. C'est l'usage. Géraud Corbineau respecte l'usage ; il regarde autre chose. Il regarde tes mains, sur les bâtons d'ébène. Il regarde ton pas.",
      ],
      choices: [
        { label: "Marcher comme marche un petit clerc qui a peur : trop vite, les coudes serrés",
          test: { dom: "social", diff: 10, label: "Avoir le pas d'un autre", help: [{ if: { voie: "comedien" }, v: 20 }, { if: { voie: "rebouteux" }, v: 5 }, { if: { has: "a5:v_tirage" }, v: 5 }, { if: { has: "a1:signalement" }, v: -10 }] },
          win: { fx: { ep: ["perso", 1500] }, to: "A5v_inc_cad_ok" }, lose: { fx: { flag: "a5:v_vu" }, to: "A5v_inc_cad_ko" } },
      ] },

    A5v_inc_cad_ok: { act: "V", title: "Un copiste", place: "citadelle", ambiance: "nuit",
      text: [
        "Tu marches mal. Tu marches comme Pacôme Tirelet aurait marché : en avalant tes pas, en tenant le rôle trop haut, avec cette raideur des épaules que donne l'épouvante.",
        "L'œil du prévôt te suit pendant six pas. Il voit un copiste de dix-huit ans que le sort a désigné et qui voudrait être ailleurs. Il en a vu quatre, en vingt-six ans de guet. Celui-ci est conforme.",
        "Il passe à la figure suivante.",
        "Tu attends d'être dans la cour pour respirer. La maison Berlue t'avait appris à marcher sans bruit, à marcher vite, à marcher comme quelqu'un de riche. Tu ne savais pas que tu savais marcher comme quelqu'un d'innocent.",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5v_estrade", big: true }] },

    A5v_inc_cad_ko: { act: "V", title: "Un pas que l'on a suivi", place: "citadelle", ambiance: "nuit",
      text: [
        "Tu marches trop bien. Sous une robe de quatre aunes, avec un rouleau à bout de bras, tu poses le pied comme on le pose sur une tuile : du bout, sans peser. Six semaines de toits ne s'effacent pas en un soir.",
        "Le prévôt cesse de mâcher.",
        "Il ne bouge pas. Il ne siffle pas. On n'arrête pas la Voix sous la voûte, devant trois Clavaires, un soir pareil : il le sait mieux que personne, et il déteste le savoir. Mais il fait signe à un sergent, du menton ; et quand tu entres dans la cour, tu as derrière toi, à quinze pas, une casaque bleue qui ne te quittera plus des yeux jusqu'à la porte de la Tour.",
        "Passé cette porte, le guet s'arrête. C'est dans la charte.",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5v_estrade", big: true }] },

    A5v_inc_enfant: { act: "V", title: "Le numéro cent dix-neuf", place: "citadelle", ambiance: "nuit",
      text: [
        "Sous la voûte de la grande porte, la procession se resserre et piétine. Les Enfants de la Morne, devant, se sont arrêtés ; leurs cent vingt lanternes font un mur de petites flammes.",
        "L'un d'eux s'est retourné. C'est le dernier du rang, un garçon de sept ou huit ans, tondu, le sarrau trop long, avec au cou une clef de fer et une plaque : *119*. Il marche à reculons depuis un moment, et il te regarde, toi, par en dessous, là où le capuchon ne cache rien à qui a trois pieds de haut.",
        "« T'es pas Tirelet », dit-il.",
        "Autour de vous, les cloches couvrent tout. Personne n'a entendu.",
        "« Tirelet, il vient nous faire l'écriture le jeudi. Il bégaie. Toi, t'as pas une tête à bégayer. » Il réfléchit, de tout son front. « T'as une tête de l'affiche. »",
        { if: { is: { reve: "nom" } }, text: "Tu as porté ce sarrau. Tu as marché dans ce rang, à la dernière Septaine, ta lanterne à la main, en trichant pour voir. Tu avais un autre numéro. Tu le lui dis, tout bas : le tien. Ses yeux s'arrondissent. « T'es de chez nous », souffle-t-il, et cela règle tout.", else: "Tu mets un doigt sur tes lèvres. Tu fais, sous le rôle, le geste que font tous les enfants des Bas-Fonds pour jurer le secret : le pouce passé sur la gorge, puis sur le cœur. Il le connaît. Il le rend, très sérieux." },
        "« Je dirai rien. La sœur dit que la Voix, on la regarde pas. Moi je regarde tout. » Il se retourne, reprend son rang, sa lanterne bien droite. Puis, par-dessus son épaule : « À minuit, je ferme pas les yeux non plus. Y a un gamin du quai qui est passé le dire. »",
      ],
      choices: [{ label: "Entrer dans la cour", to: "A5v_estrade", big: true }] },

    // ───────────────────────────── The dais, the three keys ─────────────────────────────
    A5v_estrade: { act: "V", title: "Les trois dais", place: "citadelle", ambiance: "nuit",
      text: [
        "La cour de la citadelle est un puits de torches. Six cents personnes en habit de fête, des billets à la main ; au fond, l'estrade ; et derrière, noire, sans une lumière, la Tour, dont le cadran nu reçoit d'en bas une lueur de four.",
        "Les trois Clavaires montent chacun sous son dais. Tu te ranges au pied des marches, le rôle levé. L'hommage commence : les métiers défilent, bannière après bannière, plient le genou trois fois, à gauche, au milieu, à droite. Cela dure trois quarts d'heure. Tu as le temps de regarder.",
        "Le Syndic rend les saluts avec cordialité, en comptant. À sa droite, debout, Maître Hyacinthe Belorgey, en blanc et or, que l'on montre au peuple.",
        { if: { has: "monde:a5:hyacinthe" }, text: "Il te cherche des yeux, sous le capuchon. Il te trouve. Il fait, très légèrement, un signe de tête, et ses lèvres forment un mot de trois lettres, pour s'exercer." },
        "L'évêque bénit, d'une main longue. Il sourit à tout le monde, comme on sourit à des gens qu'on enterrera.",
        "Le Connétable s'ennuie avec grâce. Il a mis pied à terre ; il fait tourner un dé entre ses doigts.",
        { if: { has: "monde:a5:comte" }, text: "Quand ton regard passe sur lui, il lève le dé à hauteur de son œil, et te le montre : un quatre. Puis il regarde la Tour, à mi-hauteur, là où il y a une meurtrière." },
        "À la demie de dix heures, la cloche de la Tour sonne un coup. Maître Minutier s'avance avec son écritoire.",
        "« MM. les Clavaires présentent leurs clefs à la Voix. »",
      ],
      choices: [{ label: "Monter les trois marches", to: "A5v_trois_clefs", big: true }] },

    A5v_trois_clefs: { act: "V", title: "« Trois clefs sont venues »", place: "citadelle", ambiance: "nuit",
      fx: { flag: "monde:a5:clefs_vues", clue: "s5_poches", ep: ["histoire", 1500] },
      text: [
        "C'est le dernier acte que le greffe dresse avant la Sentence. La Voix regarde trois clefs, et dit qu'elle les a vues. Depuis cent cinq ans, personne n'a songé à demander si elle savait les reconnaître.",
        "Tu sais. Tu es, dans cette cour, avec deux autres, la seule personne qui sache.",
        "Le Syndic te tend son coussin de velours bleu.",
        { if: { has: "monde:a2:clef=prise" }, text: "Dessus, une clef d'acier, grise, au panneton en marteau. Elle est neuve. Elle a ce brillant gras du métal qui sort de la lime. Les Maîtres du Fer gardent les gabarits de toutes leurs clefs : il a fait refaire la sienne. Elle ouvrira.", else: "Dessus, une clef d'acier, grise, au panneton en marteau. Elle est vieille, patinée, usée au pouce. C'est la vraie. Celle que vous avez dans un chiffon en est la sœur, tirée d'une empreinte : il y a ce soir deux clefs de Fer dans Aiguemorne, et il n'en connaît qu'une." },
        "« Vu », dis-tu. Il a un petit sourire, pour toi seul{e}.",
        "L'évêque ouvre son coffret d'ivoire.",
        { if: { has: "monde:a3:clef=echangee" }, text: "Dedans, sur la soie violette, une clef d'argent noirci, couronnée d'osselets. Tu la reconnais : l'ouvrage d'une nuit, à Ossevaux. Onze grains de moins que la vraie.", else: "Dedans, sur la soie violette, une clef d'argent trop neuve, d'un dessin à peu près. Un accessoire de procession." },
        { if: { has: "monde:a5:doyen_averti" }, text: "Il la regarde avec toi. « Vu ? » murmure-t-il, d'un ton d'excuse exquis. Il sait ce qu'il te présente. Il te remercie encore, des yeux." },
        "« Vu », dis-tu.",
        "Le Connétable tire sur son ruban cramoisi.",
        { if: { has: "monde:a4:clef=gagnee" }, text: "Il n'y a rien au bout. Un nœud. Il te le montre, dans le creux de sa main, en te cachant de son corps à la cour entière ; et il te regarde dire ce que tu vas dire." },
        { if: { has: "monde:a4:clef=echangee" }, text: "Au bout, une clef rouge sombre, courte, à l'anneau en cœur. Du plomb doré, et de la peinture. Tu ne sais pas s'il le sait : il la présente avec le même ennui que tout le reste." },
        { if: { has: "monde:a4:clef=prise" }, text: "Au bout de la chaîne d'acier, il y a un dé d'ivoire, percé. Il te le montre, dans le creux de sa main, en te cachant de son corps à la cour entière ; et il te regarde dire ce que tu vas dire." },
        "« Vu. »",
        "Tu te retournes vers les six cents. Tu as la plus belle voix du greffe, ce soir, par la grâce d'un billet de papier fort ou d'un garçon qui bégaie. Elle porte jusqu'à la grande porte.",
        "« Trois clefs sont venues. »",
        "Maître Minutier l'écrit. C'est un faux, dressé en bonne forme, devant toute une ville, par la seule personne qui dise vrai sans le savoir : trois clefs sont venues, en effet. Elles sont dans la Tour depuis ce matin.",
      ],
      choices: [{ label: "« Voix, montez dresser le pupitre. »", to: "A5v_montee", big: true }] },

    A5v_montee: { act: "V", title: "Par la grande porte", place: "horloge_close", ambiance: "nuit",
      fx: { until: 23, ep: ["histoire", 2000] },
      text: [
        "Tu traverses la cour, seule figure en marche parmi six cents qui se taisent. Derrière toi, les trois Clavaires descendent de leurs dais et vont à la chapelle, à trois pas l'un de l'autre, sans se regarder. La Veille commence.",
        { if: { has: "a5:v_vu" }, text: "Quelqu'un te suit des yeux, depuis la voûte. Tu le sens entre tes omoplates jusqu'à la porte de la Tour. Là, il s'arrête : c'est dans la charte." },
        "Devant la porte, deux casaques rousses. Elles s'écartent. On ne demande rien à la Voix.",
        "Tu entres dans un froid de cave, et dans un bruit : un soupir long, régulier, qui descend l'escalier. On t'a donné une lanterne. La vis tourne à gauche, dans l'épaisseur du mur, sans une lucarne. Les marches sont creusées au milieu.",
        "Tu montes. La robe traîne. Le rôle pèse. Tu as six semaines dans les jambes : un hôtel de serruriers, une fonderie, une cathédrale, un château, et cet escalier, qui est le dernier.",
        "À la quatre-vingt-dixième marche, un palier, une meurtrière. Tu t'y arrêtes pour souffler. On voit la cour, tout en bas, comme le fond d'un puits où l'on aurait jeté des braises ; la chapelle, close sur trois hommes à genoux ; et, à la grande porte, une lanterne plus grosse que les autres, tenue haut par quelqu'un de petit et de très droit.",
        "Tu reprends. À la cent quatre-vingtième, il y a un plancher, trois tambours, un balancier large comme un bouclier, et des gens que tu connais.",
      ],
      choices: [{ label: "Poser le rôle", to: "A5c_rdv", big: true }] },
  },

  extras: {
    clues: {
      s5_poches: { rev: "S", text: "Ce que les Clavaires ont présenté à la Voix, à dix heures et demie. Le Syndic : une clef de Fer qui ouvre. L'évêque : de l'argent qui n'ouvre rien. Le Connétable : ce qu'il a au bout de son ruban. « Trois clefs sont venues », a écrit le greffe." },
    },
  },
};
