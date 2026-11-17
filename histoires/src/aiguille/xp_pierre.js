// L'Île Folle-Aiguille · side story « La pierre tombée du ciel » (owes its question to The War of the Worlds and The First
// Men in the Moon: what do we do with a thing come from elsewhere, that turns our instruments mad?). Act III, the Red
// Reef. Six years ago a black stone fell here from the sky; a defrocked monk, Brother Calixte, lives by it and measures
// how it bends the compass needles. He has drawn up a table of the deviations of the whole western sea. The child can
// earn it (a night of measuring), the doctor can earn it (his failing eyes), the baron can buy it. Read later:
// correction:calixte (the table), xp:calixte_chiffre (a hint for the cipher), table:baron.
module.exports = {
  passages: {
    // ——— The child, with the watering party.
    XP_m_debut: { act: "III", title: "Le cratère", place: "ecueil_rouge", ambiance: "nature",
      fx: { meet: "calixte" },
      text: [
        "La roche rouge crisse sous les pieds comme du verre pilé. Elle est chaude. Elle est trouée de mille petites bulles, comme une éponge pétrifiée, et sous le soleil elle sent le fer et la poudre. La corvée d'eau cherche la source au bord du récif, en jurant. Toi, tu montes vers le cratère.",
        "Le bord du cratère est un anneau de pierre noire, vitreuse, qui sonne creux sous le talon. En bas, à trente pieds, dans une cuvette de cendre grise, une pierre. Une seule. Noire, lisse, de la taille d'une barrique, à moitié enfoncée dans la cendre, et autour d'elle, la cendre fume encore, six ans après, d'une fumée mince et blanche qui monte tout droit dans l'air immobile.",
        "Tout autour du cratère, plantés dans la roche à intervalles réguliers, il y a des piquets de bois, et sur chaque piquet, une boussole dans une boîte de cuivre. Quarante boussoles, peut-être. Toutes les aiguilles pointent vers la pierre.",
        "« Ne touchez à rien, je vous prie », dit une voix derrière toi.",
        "Un homme est sorti de la maison à la croix. Il est grand, voûté, maigre comme un clou de charpente, vêtu d'une robe de bure délavée jusqu'au blanc, nouée d'une corde, les pieds nus et noirs de cendre. Il a une barbe grise, des cheveux gris noués derrière la nuque, et des yeux étranges, très clairs, voilés d'un brouillard laiteux, qui regardent un peu à côté de toi.",
        "« Frère Calixte, dit-il en s'inclinant. Ancien bénédictin de l'abbaye de Saint-Gildas. Ancien astronome de la même abbaye. Ancien tout, en somme. Je mesure. Vous ne dérangerez pas mes mesures, j'espère ? Elles sont la seule chose qui me reste, avec Dieu, qui me parle moins. »",
      ],
      choices: [
        { label: "« Qu'est-ce que c'est, cette pierre ? »", to: "XP_m_pierre" },
        { label: "« Pourquoi toutes ces boussoles ? »", to: "XP_m_boussoles" },
      ] },
    XP_m_pierre: { act: "III", title: "La pierre", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Frère Calixte s'assied au bord du cratère, les jambes pendantes, et regarde la pierre de ses yeux brouillés, comme on regarde une femme qu'on a aimée.",
        "« Elle est tombée il y a six ans, la nuit de la Saint-Laurent. J'étais à bord d'un navire qui passait, à deux lieues. Une étoile s'est détachée du ciel, à l'ouest, et elle est tombée, en grandissant, en grondant, avec une queue de feu longue comme le firmament. Elle a frappé ce récif. La mer a bouilli. Le navire a failli chavirer. Le lendemain, je me suis fait débarquer ici, avec mes instruments, et l'on m'a cru fou. » Il sourit. « On avait raison. Mais pas pour les raisons qu'on croyait.",
        "« Elle est faite de fer. D'un fer qu'aucune forge n'a jamais fondu, plus pur que celui des rois, plein de petits cristaux qui brillent comme de la glace. Elle est chaude, toujours, même la nuit. Et la nuit, quand tout se tait, si l'on pose l'oreille sur la cendre, on l'entend. » Il baisse la voix. « Elle chante. Une seule note, très basse, qui ne finit pas. Comme si elle appelait quelqu'un, très loin, là d'où elle vient, et que personne ne répondait. »",
        "Il se tait. La fumée monte, droite, entre vous et la pierre.",
        "« Je la regarde depuis six ans. Le soleil sur la cendre m'a brûlé les yeux. Bientôt je ne la verrai plus. Je l'entendrai encore. »",
      ],
      choices: [{ label: "« Et les boussoles ? »", to: "XP_m_boussoles" }] },
    XP_m_boussoles: { act: "III", title: "Les boussoles", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "« La pierre est de fer, et le fer tire l'aiguille, dit le frère. Tout le monde sait cela. Mais personne n'avait jamais mesuré combien, ni comment, ni jusqu'où. » Il te mène de piquet en piquet, en touchant chaque boîte de cuivre comme on touche les grains d'un chapelet. « À dix pas, l'aiguille se tourne droit vers elle. À cent pas, elle hésite. À mille pas, en mer, elle dévie d'un quart, d'un demi-quart, selon le côté. Il y a six ans que je mesure ces déviations, et celles de la mer autour, sur les navires qui passent, dont je reçois les livres de bord contre mes prières.",
        "« Et j'ai trouvé une chose, mon enfant, une chose que personne ne veut croire. La pierre n'est pas seule. Il y a, plus loin au sud-ouest, une île où l'aiguille ne dévie pas d'un quart, mais de trois, et dans le sens contraire, comme si l'île tout entière était faite de ce fer-là. Les marins l'appellent l'île folle. Ils ont raison. Les boussoles y deviennent folles. Pas les hommes : les hommes y sont déjà. »",
        "Il te montre, dans la maison à la croix, sur une table de planches, sous une pierre qui sert de presse-papier, un grand cahier relié de toile. Des colonnes de chiffres, des noms de lieux, des flèches, des petites roses des vents dessinées à l'encre, à la règle, d'une main qui tremble.",
        "« La table des déviations du Couchant, dit-il. Six ans de ma vie. Le seul ouvrage de moi qui servira à quelqu'un. » Il pose la main dessus. « Je ne la vends pas. Je la donne à qui me rend un service. »",
      ],
      choices: [
        { label: "« Quel service ? »", to: "XP_m_service" },
        { label: "Lui montrer ta page de signes", hide: { any: [{ not: { has: "xk:copie" } }, { has: "enigme:xk_chiffre" }] }, fx: { flag: "xp:calixte_chiffre" }, to: "XP_m_chiffre" },
      ] },
    XP_m_chiffre: { act: "III", title: "La page de signes", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Le frère prend ta page, la tient à deux pouces de ses yeux brouillés, la déchiffre ligne à ligne en remuant les lèvres. Il s'arrête au quatrième groupe de signes. Il te la rend, sans l'avoir lue jusqu'au bout.",
        "« Je ne lis pas les secrets des autres, dit-il. C'est la dernière règle de mon ordre qui me reste. » Il réfléchit. « Mais je te dirai comment on lit, ce qui n'est pas la même chose. Le mot de huit signes, après les deux signes qui reviennent, finit par le même signe que celui par lequel commence le premier mot. Et il parle du côté où le soleil se couche, mon enfant, comme toutes les choses qui ont peur. »",
      ],
      choices: [{ label: "« Et le service ? »", to: "XP_m_service" }] },
    XP_m_service: { act: "III", title: "La nuit des mesures", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "« J'ai besoin d'yeux, dit Frère Calixte. Les miens ne valent plus rien la nuit. Cette nuit, il y aura une éclipse de la troisième lune de Jupiter, à onze heures quarante-trois de la pendule de l'abbaye, qui est là, dans ma maison, et qui avance d'une minute par semaine depuis six ans ; j'ai fait le compte. Il me faut quelqu'un qui regarde dans la lunette au moment exact, et qui crie. Avec cela, je saurai enfin où nous sommes. Pas à peu près : exactement. Et ma table vaudra le double. »",
        "Il te regarde de ses yeux laiteux. « La capitaine te laissera-t-elle à terre une nuit ? »",
        { if: { present: "chien" }, text: "Le chien, assis au bord du cratère, regarde la pierre noire sans gronder. Ses oreilles sont couchées. Il tremble." },
      ],
      choices: [
        { label: "Demander à Gobert de rester à terre pour la nuit", to: "XP_m_nuit" },
        { label: "« Je ne peux pas. »", to: "XP_m_refus" },
      ] },
    XP_m_nuit: { act: "III", title: "La troisième lune", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Gobert grogne, puis accepte, à condition qu'un matelot reste avec toi et que tu rentres à la nage si la chaloupe ne vient pas te chercher à l'aube. Le matelot désigné, Tarlet, s'endort à neuf heures contre la maison à la croix.",
        "La nuit tombe sur l'Écueil comme on souffle une bougie. Pas de lune. Des étoiles par milliers, si proches et si nombreuses qu'on les entend presque. Le frère a monté sa lunette sur un trépied, au bord du cratère : un long tube de cuivre, verdi, cabossé, qu'il pointe vers une étoile plus brillante que les autres, en la cherchant au jugé, de ses mains, comme un aveugle cherche un visage.",
        "Tu colles ton œil à l'oculaire. L'étoile est un petit disque blanc, net, entouré de quatre points minuscules, alignés, comme des perles sur un fil.",
        "« Le troisième en partant de la gauche, dit le frère, qui tient sa pendule contre son oreille. Quand il disparaît derrière la planète, crie. Ni avant ni après. »",
        "Derrière toi, dans le cratère, la pierre chante. Tu l'entends, maintenant, dans le grand silence : une note très basse, qui ne monte ni ne descend, qui vient du fond de la terre et du fond du ciel à la fois, et qui te remplit la poitrine comme l'eau remplit un seau.",
      ],
      choices: [{ label: "Regarder, sans ciller", test: { dom: "savoir", diff: 0, label: "L'éclipse" }, win: { to: "XP_m_eclipse" }, lose: { to: "XP_m_eclipse_rate" } }] },
    XP_m_eclipse: { act: "III", title: "La troisième lune", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Le petit point blanc s'approche du disque, lentement, lentement, touche son bord, et s'éteint d'un coup, comme une chandelle qu'on pince.",
        "« Maintenant ! »",
        "Le frère pousse un cri. Il regarde sa pendule, il compte, il écrit dans le noir, à tâtons, sur une ardoise, en marmonnant des chiffres en latin. Puis il pose l'ardoise. Il pleure.",
        "« Vingt-huit degrés et sept minutes de longitude à l'ouest de Saint-Gildas, dit-il. Exactement. Six ans que j'attendais de le savoir. » Il te prend les mains. « Mon enfant, tu viens de faire de moi le seul homme au monde qui sache où il est. »",
        "À l'aube, il te donne le cahier relié de toile, sans cérémonie, comme on rend un objet prêté. « Elle n'a plus besoin de moi, dit-il. Moi, je n'ai plus besoin d'elle. Je reste avec la pierre. Quelqu'un doit l'écouter. »",
      ],
      choices: [{ label: "Prendre la table", fx: { item: "table_calixte", flag: "correction:calixte", quest: "XP", regard: { calixte: "redevable" } }, to: "XP_m_fin" }] },
    XP_m_eclipse_rate: { act: "III", title: "La troisième lune", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Tu regardes si fort que tes yeux se mettent à pleurer. Le petit point blanc tremble, se dédouble, danse. Tu clignes une fois, une seule. Quand tu rouvres l'œil, il n'y a plus que trois points autour du disque.",
        "« Maintenant ? demande le frère.",
        "— Je… je crois. Il y a un instant. »",
        "Il ne dit rien. Il regarde sa pendule, il écrit sur son ardoise, il efface. Il soupire. « À une minute près, dit-il doucement. Une minute, c'est quatre lieues. Ce n'est pas grave. Je recommencerai dans dix jours, à la prochaine. Je suis patient ; je n'ai que ça. »",
        "À l'aube, au moment où la chaloupe arrive, il te met quand même le cahier dans les mains. « Prends-la. Elle sera moins juste que je l'aurais voulu, mais elle sera juste. Et tu as veillé. C'est plus que n'en ont fait les évêques. »",
      ],
      choices: [{ label: "Prendre la table", fx: { item: "table_calixte", flag: "correction:calixte", quest: "XP" } , to: "XP_m_fin" }] },
    XP_m_refus: { act: "III", title: "Le cratère", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Le frère hoche la tête, sans amertume. « Bien sûr. Les enfants ont des bosco, et les bosco ont des horaires. » Il pose la main sur son cahier. « Alors je te dirai seulement une chose, pour rien, parce que tu as écouté un vieux fou sans rire. Là où vous allez, si vous allez où je crois, l'aiguille tire à l'est. Ne la croyez pas. Elle vous mène trois quarts trop loin. »",
        "Il retourne à sa maison, à sa pendule, à sa pierre. Tu redescends vers la chaloupe. La fumée monte derrière toi, droite, dans l'air immobile, comme un doigt levé.",
      ],
      choices: [{ label: "Retrouver la corvée d'eau", fx: { flag: "xp:conseil" }, to: "XP_m_fin" }] },
    XP_m_fin: { act: "III", title: "L'Écueil-Rouge", place: "ecueil_rouge", ambiance: "nature",
      text: [
        { if: { item: "table_calixte" }, text: "Tu caches le cahier sous ta vareuse, contre le parchemin. Il pèse lourd. Tu ne sais pas encore à quoi il servira. Tu sais seulement que quelqu'un a passé six ans à l'écrire, et que ce quelqu'un te l'a donné." },
        { if: { has: "ecueil:barque" }, text: "Avant de partir, tu dis au moine, à voix basse, que tu as vu la barque à l'œil bleu, dans la grotte, et le chapelet de buis. Il reste immobile un long moment. « Il dort sur le côté ? demande-t-il enfin. Les genoux repliés ? » Tu dis oui. « C'est ainsi qu'il dormait, dit Frère Calixte. Il avait toujours froid. » Il ne dit rien d'autre." },
        "Le professeur Gaudrémont, qui a passé la journée à quatre pattes dans la cendre à ramasser des cailloux noirs, remonte dans la chaloupe les poches pleines, la robe de chambre brûlée par endroits, rayonnant. « Du fer céleste ! hurle-t-il. Du fer tombé des étoiles ! L'Académie en mourra de jalousie ! »",
      ],
      choices: [{ back: "A3n_ecueil" }] },

    // ——— The doctor, called to the monk's eyes.
    XP_v_debut: { act: "III", title: "Le frère aveugle", place: "ecueil_rouge", ambiance: "nature",
      fx: { meet: "calixte", flag: "quete-vue:XP" },
      text: [
        "C'est la corvée d'eau qui ramène la nouvelle : il y a un homme sur l'Écueil, un moine, qui vit seul près d'une pierre tombée du ciel et qui devient aveugle. Le professeur Gaudrémont, qui y a passé la matinée à quatre pattes dans la cendre, réclame pour lui une médecin, « et vite, avant qu'il ne voie plus rien de ce qu'il est le seul à avoir vu ».",
        "Victorine descend à terre avec sa trousse. Frère Calixte la reçoit dans sa maison de pierres sèches, une cellule de moine meublée d'une table, d'un grabat, d'une pendule d'abbaye, d'une lunette de cuivre et de quarante boussoles en réserve dans une caisse. Il est grand, voûté, d'une maigreur de clou, en robe de bure blanchie, pieds nus. Ses yeux sont deux lacs de lait.",
        "« On m'a dit que vous étiez médecin, dit-il. Je n'en ai pas vu depuis six ans. Je n'en ai pas eu besoin. Dieu y pourvoyait. Il a cessé. »",
        "Victorine examine ses yeux à la lumière de la porte. La cornée est brûlée, en surface, par six ans de soleil sur la cendre blanche. Dessous, le cristallin commence à se troubler. La cataracte, à son début. Elle a vu à Morlenc des chirurgiens l'abaisser avec une aiguille, à l'hôpital de la Marine. Elle l'a fait une fois, elle-même, sur une vieille femme qui y voyait encore un peu, et qui y voit maintenant tout à fait.",
      ],
      choices: [
        { label: "« Je peux tenter quelque chose. Une aiguille, un œil. Ça fait mal. »", to: "XP_v_aiguille" },
        { label: "« Je peux soigner la brûlure. Pour le reste, il faudrait un hôpital. »", to: "XP_v_onguent" },
      ] },
    XP_v_aiguille: { act: "III", title: "L'aiguille", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Frère Calixte s'allonge sur son grabat, les mains croisées sur la poitrine, comme un gisant. Il ne demande ni eau-de-vie ni laudanum. Il récite à mi-voix un psaume, en latin, et ne s'arrête pas quand elle commence.",
        "Victorine prend l'aiguille d'argent la plus fine de sa trousse. Elle se lave les mains à l'eau de la source, longtemps. Elle pose le pouce sur la paupière du frère. Elle n'a jamais eu la main aussi sûre ; elle n'a jamais eu aussi peur. Elle entre par le blanc de l'œil, au bord, très doucement, cherche le cristallin trouble, le trouve, et l'abaisse, d'un seul mouvement, au fond de l'œil, là où il ne gênera plus.",
      ],
      choices: [{ label: "Retirer l'aiguille", test: { dom: "savoir", diff: 10, label: "L'abaissement de la cataracte" }, win: { to: "XP_v_voit" }, lose: { to: "XP_v_noir" } }] },
    XP_v_voit: { act: "III", title: "La lumière", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Elle bande l'œil. Elle le débande le soir, dans la pénombre de la cellule, à la lueur d'une seule chandelle.",
        "Frère Calixte cligne. Il tourne la tête vers la chandelle. Il la regarde. Puis il tourne la tête vers Victorine, et il la regarde, elle, longtemps, avec une attention bouleversante, comme on regarde un visage qu'on n'a jamais vu et qu'on attendait.",
        "« Vous êtes plus jeune que votre voix, dit-il enfin. Et plus triste. »",
        "Il se lève, va à la porte, regarde la nuit, les étoiles par milliers au-dessus du cratère, la fumée blanche. Il pleure sans bruit. Puis il revient à la table, prend le grand cahier relié de toile, et le lui met dans les mains.",
        "« La table des déviations du Couchant. Six ans de ma vie. La seule chose de moi qui servira. Prenez-la. Vous m'avez rendu le ciel ; je peux bien vous donner la mer. »",
      ],
      choices: [{ label: "Prendre la table", fx: { item: "table_calixte", flag: "correction:calixte", quest: "XP", regard: { calixte: "redevable" } }, to: "XP_v_table" }] },
    XP_v_noir: { act: "III", title: "La nuit", place: "ecueil_rouge", ambiance: "nuit",
      text: [
        "Elle débande l'œil le soir. Il est rouge, gonflé, plein de sang. Le frère ne voit rien. Il ne voit plus rien du tout, de cet œil-là, et l'autre ne vaut guère mieux.",
        "Victorine reste assise à côté du grabat, les mains sur les genoux, sans parler. Il y a des échecs qu'on ne peut pas expliquer aux malades, parce qu'ils sont à vous.",
        "C'est lui qui la console. « Vous avez essayé, dit-il. Personne n'avait essayé. Dieu m'a pris les yeux pour que j'écoute mieux. Il a sans doute raison ; il a souvent raison, c'est ce qui le rend si pénible. » Il cherche à tâtons le cahier sur la table et le lui tend. « Prenez ceci. Je n'en ai plus besoin. Je n'ai plus besoin que d'oreilles, et de la pierre qui chante. »",
      ],
      choices: [{ label: "Prendre la table", fx: { item: "table_calixte", flag: ["correction:calixte", "calixte:aveugle"], quest: "XP" }, to: "XP_v_table" }] },
    XP_v_onguent: { act: "III", title: "L'onguent", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Victorine lave les yeux du frère à l'eau bouillie, y met un collyre de sa composition, lui fabrique une visière de toile pour le soleil et lui en laisse deux autres. Il ne verra pas mieux. Il verra moins mal, et un peu plus longtemps.",
        "Il la remercie avec une politesse d'ancien abbé. Puis il lui montre, sur sa table, le grand cahier relié de toile : la table des déviations de tout le Couchant, six ans de mesures, de chiffres, de petites roses des vents dessinées à la règle d'une main qui tremble.",
        "« Votre baron m'en a offert cent livres, ce matin, dit-il, par la bouche de son professeur. Je ne vends pas. Mais je la prêterai à quelqu'un qui me la recopiera. Vous écrivez vite ? »",
      ],
      choices: [
        { label: "La recopier, toute la nuit", test: { dom: "savoir", diff: 0, label: "Recopier la table" }, win: { fx: { item: "table_calixte", flag: "correction:calixte", quest: "XP" }, to: "XP_v_table" }, lose: { fx: { flag: "xp:conseil", quest: "XP" }, to: "XP_v_table" } },
        { label: "Dire au baron qu'elle est à vendre, à un meilleur prix", fx: { flag: ["table:baron", "correction:calixte"], quest: "XP" }, to: "XP_v_baron" },
      ] },
    XP_v_baron: { act: "III", title: "Le prix d'une table", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "Le baron monte lui-même au cratère, en souliers à boucles d'argent, avec une bourse. Il en ressort une heure plus tard avec le cahier sous le bras et l'air d'un homme qui vient d'acheter une église. Personne ne sait ce qu'il a donné ; Frère Calixte non plus, peut-être. Le soir, depuis la Cormorane, on voit encore la lumière de la maison à la croix, et l'on devine une silhouette assise au bord du cratère, qui écoute la pierre.",
        "Le cahier dort maintenant dans le coffre de fer de la grand-chambre, à côté de la carte.",
      ],
      choices: [{ back: "A3w_ecueil" }] },
    XP_v_table: { act: "III", title: "La table des déviations", place: "ecueil_rouge", ambiance: "nature",
      text: [
        { if: { item: "table_calixte" }, text: "Victorine feuillette le cahier dans la chaloupe, en rentrant. Elle ne comprend pas tout. Elle comprend une page, vers la fin, où le frère a dessiné, à part, une île en forme de croissant, avec une note : *Ici l'aiguille tire à l'est de trois quarts de vent, plus ou moins selon le lieu de l'île. Qui s'y fie se perd.* Elle referme le cahier, et le range dans sa trousse, sous les lancettes." },
        { if: { not: { item: "table_calixte" } }, text: "Au matin, elle n'a recopié que la moitié du cahier, et sa copie est illisible même pour elle. Elle n'en garde qu'une phrase, recopiée deux fois, qu'elle se répète dans la chaloupe : *Là-bas, l'aiguille tire à l'est de trois quarts. Qui s'y fie se perd.*" },
      ],
      choices: [{ back: "A3w_ecueil" }] },
  },
  extras: {
    people: {
      calixte: { name: "Frère Calixte", aka: ["Calixte", "le frère"], f: false,
        face: { age: "ancien", skin: "hale", hair: "gris", coif: "long", beard: "barbe", eyes: "lourds", iris: "clair", nose: "busque", lips: "fines", shape: "allonge", marks: [] },
        desc: "Bénédictin défroqué, astronome, ermite de l'Écueil-Rouge.", qui: "Le moine qui mesure la pierre tombée du ciel.",
        aspect: { allure: "grand, voûté, maigre comme un clou", visage: "yeux laiteux, barbe grise", habits: "robe de bure blanchie, pieds nus" } },
    },
    items: {
      table_calixte: { name: "La table des déviations", kind: "document", keep: true, price: 0, desc: "Un cahier relié de toile : six ans de mesures de Frère Calixte, les déviations du compas sur toute la mer du Couchant, et une page sur une île en croissant." },
    },
    quests: [
      { id: "XP", act: "III", kind: "annexe", title: "La pierre tombée du ciel", start: "XP_m_debut", doit: "guerremondes", echo: ["correction:calixte", "calixte:aveugle"] },
    ],
  },
};
