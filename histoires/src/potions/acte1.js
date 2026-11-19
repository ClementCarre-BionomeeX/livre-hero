// Act I, « L'enseigne » (days 1 to 4): the morning after the storm, Mémé's letter, the new sign (the reader names the
// shop), the first client, the inspector of the Guild and his decree, the first evening, the grey frog, Ortie walking
// in her sleep, and the morning Tiennot does not wake up.
var WITH = "ortie";
module.exports = {
  A_reveil: {
    act: "I", title: "Le matin de l'orage", place: "chambre",
    fx: { join: "ortie", conf: { ortie: 20 }, ep: ["seance", 100] },
    text: [
      "Quelque chose de lourd te tombe sur le ventre, et ce quelque chose parle.",
      "« Réveille-toi. Réveille-toi. Tu dors ? Tu dors encore ? L'enseigne est tombée. L'orage l'a cassée. Elle est dans les orties. Je ne l'ai pas touchée. Enfin, un peu. Réveille-toi. »",
      "C'est Ortie, ta petite sœur, huit ans, assise à califourchon sur toi dans sa chemise de nuit, les cheveux dressés sur la tête comme une couronne de ronces. Elle a une dent qui manque devant, et elle s'en sert pour siffler quand on ne l'écoute pas. Elle siffle.",
      "Par la lucarne ronde, le ciel est lavé, d'un bleu de vitre neuve. L'orage a grondé toute la nuit au-dessus du bois, et tu as rêvé de portes qui claquent. Une seule a claqué pour de bon, à ce qu'il paraît : celle du destin, sous la forme d'une planche peinte.",
      "Dans l'escalier, Bistre, le vieux chat noir de Mémé, réclame son lait d'une voix de chanoine enrhumé.",
    ],
    choices: [{ label: "Descendre voir l'enseigne", to: "A_lettre" }],
  },
  A_lettre: {
    act: "I", title: "L'enseigne dans les orties", place: "boutique",
    fx: { item: "lettre" },
    text: [
      "L'enseigne de Mémé gît dans le carré d'orties, sous la fenêtre, fendue en deux. Pendant cinquante ans, elle a grincé au-dessus de la porte, au bout de ses deux chaînes : une planche de chêne peinte en vert, avec un chaudron jaune et, en lettres rouges, *Chez Mémé Hulotte, sorcière*. Le vent de la nuit a arraché les chaînes. La peinture, à l'endroit de la cassure, montre le bois nu, d'un blanc de chair.",
      "Tu la ramasses avec les gants du jardin. Elle est plus légère que tu ne l'aurais cru.",
      "Mémé est partie il y a un mois. Tu as trouvé sa lettre le lendemain matin, glissée sous le pot de miel du comptoir. Depuis, tu as gardé la boutique fermée, le volet mis, la clochette muette, et tu as attendu. Tu as cueilli, un peu ; préparé, presque rien. Les gens des Ronceraies ont frappé, puis ils ont cessé de frapper. Ce matin, les étagères sont à moitié vides, la boîte en fer-blanc contient six sous, et l'enseigne de Mémé est en deux morceaux dans les orties.",
      "Tu relis la lettre, debout dans le jardin, avec la planche cassée sous le bras.",
      { with: WITH, text: "Ortie est sortie pieds nus derrière toi, et regarde l'enseigne en silence, ce qui est rare. Puis elle dit : « On en fait une autre. Avec ton nom. Mémé a dit que la boutique était à toi. »" },
    ],
    choices: [{ label: "Faire une nouvelle enseigne", to: "A_enseigne" }],
  },
  A_enseigne: {
    act: "I", title: "La nouvelle enseigne", place: "boutique", ask: "boutique",
    text: [
      "Dans la remise, il y a une planche de chêne de la bonne taille, un pot de peinture verte à peine entamé, du jaune, du rouge, et le pinceau de Mémé, raide comme une queue de chat mort. Tu poses la planche sur deux tréteaux, devant la porte, au soleil.",
      "Le chaudron, tu sais le peindre : Mémé t'a appris. Le nom, c'est autre chose. *Chez Mémé Hulotte*, ce n'est plus vrai. Il faut un nom à toi, que les gens des Ronceraies diront en descendant le chemin, et que les voyageurs liront de loin entre les houx.",
      { with: WITH, text: "Ortie trempe un doigt dans le pot de jaune, réfléchit, et propose « La Boutique des Deux Sœurs et de Monseigneur ». Monseigneur est son crapaud. Tu lui réponds que c'est ta boutique, et elle te tire la langue, jaune." },
    ],
    choices: [{ label: "Peindre l'enseigne", to: "A_enseigne_finie" }],
  },
  A_enseigne_finie: {
    act: "I", title: "« {nom:boutique} »", place: "boutique",
    fx: { ep: ["seance", 150] },
    text: [
      "Tu peins jusqu'à midi, la langue entre les dents, comme Mémé. Le fond vert, le chaudron jaune, et en lettres rouges, aussi droites que ta main le permet : *{nom:boutique}*.",
      "Puis tu recules de trois pas pour juger. C'est beau. C'est un peu de travers à la fin, parce qu'il a fallu serrer les dernières lettres, mais c'est beau.",
      { with: WITH, text: "Pendant que tu lavais le pinceau, Ortie a ajouté quelque chose dans le coin en bas à droite : un crapaud vert, assis, avec une couronne. Il a l'air très content de lui. Il est plus gros que le chaudron." },
      { with: WITH, text: "Ortie se tient à côté de la planche, les mains dans le dos, couverte de peinture jusqu'aux coudes, et attend ce que tu vas dire." },
    ],
    choices: [
      { label: "Éclater de rire et laisser Monseigneur sur l'enseigne", with: WITH, fx: { conf: { ortie: 10 }, flag: "enseigne:crapaud" }, to: "A_ouverture" },
      { label: "Soupirer, et peindre une feuille par-dessus le crapaud", with: WITH, fx: { conf: { ortie: -10 }, flag: "enseigne:feuille" }, to: "A_ouverture" },
      { label: "Dire à Ortie que le crapaud est très réussi, mais un peu gros", with: WITH, fx: { conf: { ortie: 5 }, flag: "enseigne:crapaud" }, to: "A_ouverture" },
    ],
  },
  A_ouverture: {
    act: "I", title: "La boutique rouvre", place: "boutique",
    text: [
      { if: { has: "enseigne:feuille" }, text: "Ortie regarde la feuille verte, à l'endroit où était le crapaud, et ne dit rien. Elle ne dit rien pendant une heure, ce qui doit être un record. Puis elle va bouder dans le jardin, et elle boude avec application." },
      { if: { has: "enseigne:crapaud" }, text: "Ortie pousse un cri de victoire et va chercher Monseigneur dans sa poche pour lui montrer son portrait. Monseigneur, tenu à bout de bras devant l'enseigne, ne manifeste rien. C'est un crapaud ; il a vu d'autres honneurs." },
      "Vous accrochez l'enseigne aux chaînes, en montant sur la brouette. Elle grince aussitôt, comme l'ancienne, avec la même note, comme si le grincement venait des chaînes et qu'il attendait une planche pour reprendre sa chanson.",
      "Tu ôtes le volet. Tu décroches le carton *Fermé*. La clochette, au-dessus de la porte, se balance un peu dans le courant d'air.",
      "Il faut maintenant remplir les étagères, et pour cela, il faut cueillir au jardin et dans le bois, préparer au chaudron de l'arrière-boutique, puis vendre au comptoir, de neuf heures du matin à sept heures du soir. Le grimoire de Mémé contient trois recettes que tu connais par cœur : le sirop de bourrache, le baume de plantain, la tisane de lavande. Pour le reste, il faudra apprendre, ou chercher.",
    ],
    choices: [{ label: "Ouvrir la boutique", to: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the inspector
  A_corvin: {
    act: "I", title: "L'inspecteur de la Guilde", place: "boutique",
    fx: { meet: "corvin", item: "decret" },
    text: [
      "Un homme attend devant la boutique, debout au milieu du chemin, comme un piquet qu'on aurait planté là pour mesurer quelque chose. Il est grand, maigre, vêtu de noir de la tête aux pieds, avec des lunettes rondes cerclées d'acier, une barbe taillée en pointe, et au revers de son manteau un sceau de cire rouge gros comme une pièce de deux sous. Il tient une sacoche de cuir sous le bras et regarde ton enseigne avec l'expression d'un médecin devant une éruption.",
      "« Maître Corvin Lachaise, dit-il sans te tendre la main. Magicien diplômé de l'Académie de Valombre, membre titulaire de la Guilde des Alambics, inspecteur des préparations pour le comté de Rocheclaire. C'est vous, la sorcière ? Vous êtes jeune. Ce n'est pas un reproche : c'est une observation, et je ne fais que des observations. »",
      "Il sort de sa sacoche un parchemin roulé, scellé de rouge, et le déroule devant ton nez. « Un décret de madame la comtesse, à la requête de ma Guilde. Toute personne qui vend potions, sirops, élixirs et autres décoctions sur les terres du comté paiera une patente de cinq livres avant le douzième jour de ce mois, à midi, et présentera à l'inspecteur, c'est-à-dire moi, une préparation de sa main. Faute de quoi, fermeture, saisie, et le reste, que je vous épargne parce qu'il est en latin. »",
      "Cinq livres. Cent sous. Il y en a six dans la boîte en fer-blanc.",
      "Maître Corvin regarde par la fenêtre les étagères à moitié vides, le chaudron qu'on aperçoit par la porte de l'arrière-boutique, les bottes d'herbes qui pendent au plafond. « Des herbes, dit-il, avec un mépris si pur qu'il en devient presque beau. Un chaudron. Pas un alambic, pas un thermomètre, pas une balance de précision. Vous faites de la cuisine, mademoiselle, et vous la vendez comme de la science. »",
      { with: WITH, text: "Ortie, sur le pas de la porte, le regarde de bas en haut, de haut en bas, et lui demande s'il a toujours eu une tête de corbeau ou si ça lui est venu avec le diplôme." },
    ],
    choices: [
      { label: "Lui répondre que la cuisine de Mémé a guéri plus de gens que toute sa Guilde", test: { dom: "social", diff: 10, label: "Répartie" },
        win: { to: "A_corvin_pique", fx: { regard: { corvin: "curieux" }, flag: "corvin:pique" } }, lose: { to: "A_corvin_froid", fx: { regard: { corvin: "mefiant" } } } },
      { label: "Prendre le décret poliment, et demander ce qu'il appelle une préparation « conforme »", fx: { regard: { corvin: "neutre" } }, to: "A_corvin_poli" },
      { label: "Lui proposer de goûter le dernier sirop de bourrache de Mémé", if: { item: "p_toux" }, fx: { drop: "p_toux", regard: { corvin: "curieux" }, flag: "corvin:goute" }, to: "A_corvin_goute" },
    ],
  },
  A_corvin_pique: {
    act: "I", title: "Une observation", place: "boutique",
    fx: { ep: ["seance", 200] },
    text: [
      "Maître Corvin te regarde par-dessus ses lunettes, longtemps, comme une plante inconnue. « Guéri, dit-il. C'est un mot de cuisinière, cela aussi. Guéri combien ? Dans quelle proportion ? Avec quelle dose, et comparé à quoi ? Vous n'en savez rien. Personne n'en sait rien. C'est tout le problème des sorcières : elles ont parfois raison, et elles ne savent jamais pourquoi. »",
      "Il roule le décret, te le met dans la main, et ajoute, d'un ton beaucoup moins sec : « Si vous avez raison, mademoiselle, prouvez-le. Je n'ai jamais refusé une preuve. Les miens me le reprochent assez. »",
    ],
    choices: [{ label: "Le regarder s'éloigner sur le chemin", to: "H_boutique" }],
  },
  A_corvin_froid: {
    act: "I", title: "Une observation", place: "boutique",
    text: [
      "Maître Corvin hausse un sourcil, un seul, avec la précision d'un instrument. « Toute ma Guilde, répète-t-il. Vous avez fait le compte ? Non. Vous parlez comme on parle au marché. » Il te met le décret dans la main. « Le douzième jour, à midi. Cinq livres et une préparation. Je serai exact. Je le suis toujours, c'est mon seul vice. »",
    ],
    choices: [{ label: "Le regarder s'éloigner sur le chemin", to: "H_boutique" }],
  },
  A_corvin_poli: {
    act: "I", title: "Une préparation conforme", place: "boutique",
    text: [
      "« Conforme, dit Maître Corvin, enchanté qu'on lui pose une question. Conforme à ce qu'elle prétend être, mademoiselle. Un sirop contre la toux qui calme la toux. Un baume qui ferme une plaie. Pas de l'eau colorée vendue à des paysans crédules, comme j'en ai saisi quarante-deux flacons à la foire de Valombre, dont trois portaient l'étiquette « Élixir d'immortalité » et appartenaient à un homme mort la semaine suivante. »",
      "Il roule le décret, te le tend. « Le douzième jour, à midi. Je serai là. Je suis toujours là où je dois être. On me le reproche aussi. »",
    ],
    choices: [{ label: "Le regarder s'éloigner sur le chemin", to: "H_boutique" }],
  },
  A_corvin_goute: {
    act: "I", title: "Le sirop de Mémé", place: "boutique",
    fx: { ep: ["seance", 200] },
    text: [
      "Maître Corvin hésite, puis prend le flacon, le débouche, le renifle, et en verse trois gouttes sur le bout de sa langue avec la mine d'un homme qui avale du poison pour la science. Il réfléchit. Il en reprend trois gouttes.",
      "« Bourrache, dit-il. Miel de bruyère. Et autre chose, que je ne reconnais pas, et que je n'aime pas ne pas reconnaître. » Il regarde le flacon contre le jour. « Ma gorge va mieux. C'est probablement une coïncidence. Je vais le garder, pour l'analyser. »",
      "Il range le sirop dans sa sacoche avec soin, te met le décret dans la main, et s'en va sans payer. C'est, pour un inspecteur de la Guilde, une forme de compliment.",
    ],
    choices: [{ label: "Le regarder s'éloigner sur le chemin", to: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the first evening
  A_soir: {
    act: "I", title: "Le premier soir", place: "atelier",
    text: [
      "La nuit tombe sur Vergeronde, et tu fermes la boutique : le volet, le verrou, la clochette qu'on immobilise d'un chiffon. Dans l'arrière-boutique, le feu du chaudron sert aussi à la soupe. Vous mangez toutes les deux à la grande table, entre les mortiers, avec Bistre sur le troisième tabouret, qui ne mange pas de soupe mais tient à sa place.",
      { with: WITH, text: "Ortie parle pendant toute la soupe. Elle parle de Tiennot, le fils du forgeron, qui lui a dit que les sorcières mangent les enfants, et à qui elle a répondu que oui, mais seulement les garçons, et seulement les bêtes. Elle parle de Monseigneur, qui a mangé une mouche. Elle parle de l'enseigne. Puis, d'un seul coup, entre deux cuillerées, elle demande : « Mémé, elle revient quand ? »" },
      "Le feu craque. Bistre ouvre un œil.",
    ],
    choices: [
      { label: "Lui dire la vérité : tu ne sais pas", with: WITH, fx: { conf: { ortie: 5 }, flag: "soir:verite" }, to: "A_soir_fin" },
      { label: "Lui promettre qu'elle reviendra bientôt", with: WITH, fx: { flag: "soir:promesse" }, to: "A_soir_fin" },
      { label: "Lui lire la lettre de Mémé, en entier", with: WITH, fx: { conf: { ortie: 10 }, flag: "soir:lettre" }, to: "A_soir_fin" },
    ],
  },
  A_soir_fin: {
    act: "I", title: "Le premier soir", place: "atelier",
    text: [
      { if: { has: "soir:verite" }, with: WITH, text: "Ortie hoche la tête, très sérieusement, comme une grande. « Moi non plus, dit-elle. Mais on peut ne pas savoir à deux. » Elle finit sa soupe, et toi la tienne." },
      { if: { has: "soir:promesse" }, with: WITH, text: "Ortie te regarde un long moment, avec ses yeux verts de chat. « Tu ne sais pas, dit-elle. Tu dis ça pour que je dorme. » Elle finit sa soupe sans rien ajouter. Elle a huit ans ; elle n'est pas bête." },
      { if: { has: "soir:lettre" }, with: WITH, text: "Tu lis la lettre à voix haute, lentement. Ortie écoute sans bouger. À « Elle est comme moi à son âge, en pire », elle éclate de rire, puis de sanglots, puis de rire encore, le nez dans sa manche. « En pire », répète-t-elle, très fière." },
      "Plus tard, dans la chambre sous le toit, elle s'endort la première, une main hors du lit, ouverte, comme pour qu'on la prenne.",
    ],
    choices: [{ label: "Monter vous coucher", to: "H_chambre" }],
  },

  // ------------------------------------------------------------------ the grey frog
  A_grenouille: {
    act: "I", title: "La grenouille grise", place: "atelier",
    fx: { clue: "g_grenouille", ep: ["seance", 150] },
    text: [
      { with: WITH, text: "Ce soir-là, Ortie rentre à la nuit tombée, les genoux crottés, avec quelque chose dans les mains en coupe, qu'elle tient comme on tient de l'eau. « Regarde, dit-elle. Elle est malade. Je l'ai trouvée au bord de l'étang. Il y en a d'autres. »" },
      "C'est une grenouille. Elle est vivante : sa gorge bat, lentement, très lentement. Mais elle est grise. Pas du gris-vert des grenouilles d'étang : un gris de cendre froide, uniforme, des yeux jusqu'au bout des pattes, comme si on l'avait taillée dans une pierre tendre. Elle dort, et rien ne la réveille, ni le doigt d'Ortie, ni la chaleur du feu, ni l'eau fraîche que tu fais couler sur son dos.",
      "Bistre saute sur la table, renifle la grenouille, et recule en crachant, le poil hérissé du nez à la queue. Il ne crache jamais sur une grenouille : il les mange.",
      "Tu feuillettes le grimoire de Mémé. Pas une ligne sur des grenouilles grises. Il y a seulement la page arrachée, et son bord déchiré.",
    ],
    choices: [
      { label: "Mettre la grenouille dans un bocal, près du feu", with: WITH, fx: { conf: { ortie: 5 }, flag: "grenouille:gardee" }, to: "A_grenouille_fin" },
      { label: "Dire à Ortie de la rapporter à l'étang demain", with: WITH, fx: { flag: "grenouille:rendue" }, to: "A_grenouille_fin" },
    ],
  },
  A_grenouille_fin: {
    act: "I", title: "La grenouille grise", place: "atelier",
    text: [
      { if: { has: "grenouille:gardee" }, text: "Ortie installe la grenouille dans un bocal, sur un lit de mousse, près du chaudron, et lui donne un nom : Madame Cendre. Elle lui dit bonne nuit avant de monter. Madame Cendre ne répond pas." },
      { if: { has: "grenouille:rendue" }, text: "Ortie pose la grenouille sur le rebord de la fenêtre, dans une soucoupe d'eau, et lui explique très sérieusement qu'elle la ramènera chez elle demain matin. La grenouille dort." },
      "Par la fenêtre, le bois est noir. Au nord, très loin, au cœur des collines, il y a un endroit où le noir est plus pâle, comme une tache de lait sur une nappe sombre. Tu le regardes longtemps avant d'aller te coucher.",
    ],
    choices: [{ label: "Monter vous coucher", to: "H_chambre" }],
  },

  // ------------------------------------------------------------------ Ortie walks in her sleep
  A_somnambule: {
    act: "I", title: "La nuit", place: "jardin",
    fx: { clue: "m_chanson", ep: ["seance", 150] },
    text: [
      "Tu te réveilles sans savoir pourquoi, au milieu de la nuit, avec la certitude qu'il manque un bruit. Il te faut un long moment pour comprendre lequel : la respiration d'Ortie, de l'autre côté de la malle. Son lit est vide. Les couvertures sont rejetées. La porte de la chambre est ouverte sur l'escalier noir.",
      "Tu descends pieds nus. La boutique est obscure, et l'horloge y bat avec une régularité d'horloge qui n'a jamais semblé si lente ni si forte ; les flacons des étagères te regardent passer de leurs reflets de lune. La porte de derrière est entrouverte, et l'air de la nuit entre par la fente, froid, chargé d'une odeur de mousse que tu ne connais pas, plus profonde que celle du jardin, l'odeur d'un endroit qu'on n'a pas ouvert depuis longtemps.",
      "Ortie est au fond du jardin, devant la haie de buis, debout, en chemise de nuit, les pieds dans l'herbe mouillée. Elle te tourne le dos. Elle regarde vers le nord, vers le cœur du bois, et elle chante.",
      "C'est un air que tu n'as jamais entendu : lent, sur quatre notes qui reviennent, avec des mots que tu comprends à moitié, comme on comprend une langue qu'on a parlée enfant. « Une qui veille… une qui chante… » Sa voix est plus grave que la sienne. Ses yeux sont ouverts. Elle ne te voit pas.",
      "Bistre est assis devant elle, au pied de la haie, entre Ortie et le bois. Il ne bouge pas. Il lui barre le chemin.",
    ],
    choices: [
      { label: "La réveiller tout doucement, en l'appelant par son nom", with: WITH, fx: { conf: { ortie: 5 }, flag: "somnambule:reveillee" }, to: "A_somnambule_fin" },
      { label: "La prendre dans tes bras sans la réveiller, comme Mémé disait de faire", with: WITH, fx: { conf: { ortie: 5 }, flag: "somnambule:portee" }, to: "A_somnambule_fin" },
    ],
  },
  A_somnambule_fin: {
    act: "I", title: "La nuit", place: "chambre", takes: "morning",
    text: [
      { if: { has: "somnambule:reveillee" }, text: "Ortie cligne des yeux, regarde l'herbe sous ses pieds, la haie, le ciel, et toi. « Pourquoi on est dehors ? » demande-t-elle, d'une voix de petite fille, la sienne. Elle ne se souvient de rien. Elle a froid. Tu la ramènes en la tenant par les épaules, et elle s'endort avant d'avoir posé sa tête sur l'oreiller." },
      { if: { has: "somnambule:portee" }, text: "Tu la soulèves. Elle est légère et glacée, et elle continue de chanter à voix basse contre ton cou, de plus en plus bas, jusqu'à l'escalier, où elle s'arrête au milieu d'un mot. Tu la couches. Elle soupire et se tourne vers le mur." },
      "Toi, tu ne te rendors pas. Tu restes assise sur ton lit, les bras autour des genoux, et tu écoutes la respiration d'Ortie jusqu'à ce que la lucarne pâlisse. Bistre est remonté avec vous. Il s'est couché en travers du seuil de la chambre, et cette nuit-là, il ne bouge plus.",
    ],
    choices: [{ label: "Descendre, quand le jour se lève", to: "N_matin" }],
  },

  // ------------------------------------------------------------------ Tiennot
  A_tiennot: {
    act: "I", title: "Le forgeron", place: "boutique",
    fx: { meet: ["ferrand", "tiennot"], quest: "I_boutique" },
    text: [
      "On frappe à la porte de la boutique à coups de poing, si fort que la clochette se décroche et tombe sur le plancher. Sur le seuil se tient Maître Ferrand, le forgeron des Ronceraies, un homme si grand qu'il bouche la porte et si large qu'il en bouche aussi le jour. Il a couru depuis le hameau. Il a encore son tablier de cuir, et ses mains tremblent.",
      "« Tiennot, dit-il. Mon fils. Il ne se réveille pas. Depuis hier soir. Il dort, il respire, et il est gris. Gris comme la cendre, les lèvres, les mains, tout. Le curé lui a lu des prières. J'ai versé de l'eau froide. Je l'ai secoué. » Sa voix casse sur le dernier mot. « Ta grand-mère savait tout guérir. Viens. Je t'en prie. Viens. »",
      { with: WITH, text: "Derrière toi, Ortie a lâché le balai. Tiennot est son ennemi juré depuis qu'ils savent marcher, et ils se battent chaque fois qu'ils se voient, et elle est devenue toute blanche." },
    ],
    choices: [{ label: "Prendre ta besace et courir aux Ronceraies", big: true, exit: true, to: "B_forge" }],
  },
};
