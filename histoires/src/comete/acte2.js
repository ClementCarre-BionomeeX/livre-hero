// Act II · « La Veille » : the tower from nine o'clock to midnight. The great hall is the crossroads; supper splits
// the evening in two. Both readings pass here; the second one has its own doors (choices `second: true`).
module.exports = {
  B_porte: { act: "II", title: "La porte de la Veille", place: "veille",
    fx: { meet: ["lise"] },
    text: [
      "La Veille est plus haute qu'on ne le croit d'en bas, et plus vieille. Une tour ronde de pierre grise, sans autre ornement que ses meurtrières, coiffée d'une coupole de cuivre vert-de-grisé qu'une fente traverse du nord au sud. Elle se dresse sur la dernière dent du mont, au bord d'un vide où la nuit commence tout de suite, et le vent tourne autour d'elle sans cesse, avec un bruit de doigt mouillé sur le bord d'un verre.",
      "La porte est de chêne bardé de fer, basse, profonde. Tobie y frappe trois coups. Elle s'ouvre sur une femme maigre aux cheveux tirés, des lunettes d'acier sur le nez, une plume derrière l'oreille et des taches d'encre jusqu'aux poignets.",
      "« Lise Moranne, dit-elle. Calculatrice. Vous êtes en retard de quarante minutes sur l'heure probable et en avance de deux heures sur l'heure que le maître avait pariée. » Elle s'efface pour te laisser entrer. « Il a parié sur votre mort. Ne le prenez pas pour vous. Il parie sur la mort de tout le monde. Il dit que c'est la seule prédiction qui ne rate jamais. »",
    ],
    choices: [
      { label: "Entrer", to: "B_vellerin" },
    ] },

  B_vellerin: { act: "II", title: "Maître Vellérin", place: "veille",
    fx: { meet: ["vellerin"] },
    text: [
      "La grande salle occupe tout le rez-de-chaussée de la tour : une pièce ronde, voûtée, avec une cheminée où brûle un demi-mélèze, des étagères jusqu'au plafond, des globes, des sphères armillaires, des cartes du ciel clouées partout, et une table longue couverte de papiers sous lesquels on devine, par endroits, du bois. Un escalier de pierre tourne le long du mur et monte dans le noir.",
      "Au milieu de tout cela se tient un vieillard immense, voûté comme une potence, en robe de chambre doublée de renard. Sa barbe blanche lui descend jusqu'à la ceinture. Ses yeux, très bleus, très enfoncés, te transpercent comme on transperce un papillon pour le ranger.",
      "« Le porteur, dit-il d'une voix qui tonne dans la voûte. Vivant. Lise, tu me dois un sou. » Il tend une main osseuse. « Le pli. »",
      "Tu le lui donnes. Il le retourne, lit la consigne de l'enveloppe, et son visage change. Une seconde. Le temps qu'une ombre traverse une pièce quand quelqu'un passe devant la lampe. Puis il éclate.",
      "« *À ouvrir quand la Glaneuse touchera la Lyre !* Le Recteur se prend pour un astrologue, à présent ? Cet homme a deux idées dans la tête, et elles se battent. » Il te rend le pli d'un geste brusque. « Gardez-le. Je ne lis pas les lettres avant leur heure. J'ai des principes. J'en ai même trop, demandez à Lise. À trois heures, si j'ai l'œil à la lunette, ce qui est probable, vous me le lirez. »",
      { second: true, text: "Il a gardé le pli dans sa main une seconde de trop. Cette fois, tu as vu ses doigts trembler." },
    ],
    choices: [
      { label: "Te chauffer à la cheminée", to: "B_salle" },
    ] },

  B_salle: { act: "II", title: "La grande salle", place: "veille", hub: true, backName: "la grande salle",
    text: [
      { before: "souper", text: "Le feu crache des étincelles dans la cheminée. Maître Vellérin a regagné son fauteuil, près de l'âtre, une loupe dans une main, un registre sur les genoux, et il marmonne des chiffres. Lise passe et repasse avec des feuilles. Quelque part au-dessus, on entend Tobie siffler. Par la meurtrière de l'est, la Glaneuse monte, pâle, patiente." },
      { after: "souper", text: "Après le souper, la grande salle s'est vidée. Le feu baisse. La table est couverte de miettes et de papiers. Là-haut, on entend des pas dans la coupole, et la voix du maître, qui donne des ordres au ciel." },
    ],
    choices: [
      { label: "Parler avec Maître Vellérin", before: "souper", to: "B_v_parler" },
      { label: "Monter à la coupole", to: "B_coupole" },
      { label: "La bibliothèque du premier étage", to: "B_biblio" },
      { label: "L'atelier de Tobie", to: "B_atelier" },
      { label: "Le cabinet de Lise", to: "B_cabinet" },
      { label: "Examiner les globes", before: "souper", hide: { seen: "B_globes" }, to: "B_globes" },
      { label: "Demander à Tobie de te faire visiter la tour", before: "souper", hide: { seen: "B_tour" }, to: "B_tour" },
      { label: "Le chemin de ronde", to: "B_ronde" },
      { label: "Dire à Maître Vellérin que tu as déjà vécu cette nuit", second: true, before: "souper", hide: { any: [{ seen: "S_dire" }, { has: "confiance" }] }, to: "S_dire" },
      { label: "Mettre Dame Hélis dans la confidence", second: true, if: { seen: "A_litiere" }, hide: { any: [{ seen: "S_helis_r2" }, { has: "helis:alliee" }] }, to: "S_helis_r2" },
      { label: "Parler au capitaine Ferrand de l'escalier muré", second: true, if: { all: [{ seen: "A_litiere" }, { any: [{ seen: "S_tables_cachees" }, { has: "jeannot:panier" }] }] }, hide: { seen: "S_ferrand_r2" }, to: "S_ferrand_r2" },
      { label: "Prévenir Lise de ce qui l'attend à l'aube", second: true, hide: { seen: "S_lise_r2" }, to: "S_lise_r2" },
      { label: "Te mettre à table quand la cloche sonne", hide: { has: "souper" }, to: "B_souper" },
      { label: "Prendre l'escalier, d'où viennent des éclats de voix", after: "souper", hide: { seen: "B_querelle" }, to: "B_querelle" },
      { label: "Aller voir Frère Cosme aux cuisines", after: "souper", hide: { seen: "B_cosme2" }, to: "B_cosme2" },
      { label: "Aller vers Dame Hélis, qui te fait signe depuis l'escalier", after: "souper", hide: { seen: "B_helis2" }, to: "B_helis2" },
      { label: "Monter à la coupole pour minuit", after: "souper", second: false, fx: { until: 0 }, to: "C_minuit" },
      { label: "Monter à la coupole pour minuit", after: "souper", second: true, fx: { until: 0 }, to: "S_minuit" },
    ] },

  B_v_parler: { act: "II", title: "Près de la cheminée", place: "veille",
    text: [
      "Tu tires un tabouret près du fauteuil. Maître Vellérin lève les yeux de son registre avec l'expression d'un homme qu'on dérange dans son bain.",
      "« Vous avez une question. Je le vois à votre figure. Les gens qui ont une question prennent tous la même figure : celle d'un chien devant une porte. Posez-la. »",
    ],
    choices: [
      { label: "« Qu'est-ce que la Glaneuse, au juste ? »", hide: { seen: "B_v_comete" }, to: "B_v_comete" },
      { label: "« Qui était Maître Sérac ? »", if: { seen: "A_tombe" }, hide: { seen: "B_v_serac" }, to: "B_v_serac" },
      { label: "« Pourquoi Dame Hélis est-elle montée ? »", if: { seen: "A_litiere" }, hide: { seen: "B_v_helis" }, to: "B_v_helis" },
      { label: "« Sur quoi pariez-vous, quand un porteur monte ? »", hide: { seen: "B_v_pari" }, to: "B_v_pari" },
      { label: "« Et Lise ? »", hide: { seen: "B_v_lise" }, to: "B_v_lise" },
      { label: "« Parlez-moi de votre lunette. »", hide: { seen: "B_v_lunette" }, to: "B_v_lunette" },
      { label: "« Pourquoi refusez-vous de vendre vos Tables au Prince ? »", if: { any: [{ seen: "A_ecurie" }, { seen: "B_v_helis" }] }, hide: { seen: "B_v_tables" }, to: "B_v_tables" },
      { back: "B_salle" },
    ] },

  B_v_comete: { act: "II", title: "Un caillou qui revient", place: "veille",
    text: [
      "« La Glaneuse, dit-il, est un caillou. » Il laisse tomber le mot comme on lâche une pierre dans un puits, pour écouter. « Un caillou gros comme une ville, couvert de glace sale, qui fait le tour du soleil en soixante et onze ans, deux mois et onze jours. Quand il approche du soleil, sa glace fume, et la fumée fait la queue que vous voyez. Rien de plus. »",
      "Il pointe sur toi un doigt noueux. « Rien de plus, entendez-vous ? Le Chapitre de Salvagnes prêche depuis l'automne qu'elle vient *moissonner* le Prince. Le Grand Chantre a même trouvé une rime. *Quand la Glaneuse moissonnera, le Prince sans barbe tombera.* J'ai lu de meilleurs vers sur la porte des latrines du Collège, et ceux-là, au moins, étaient sincères. »",
      "Il tapote le registre. « J'ai calculé son retour à la minute. Ce soir, elle a passé l'épaule du mont à neuf heures. Elle touchera la Lyre à trois heures. Elle le fera parce que les lois du ciel l'y obligent, et les lois du ciel se moquent éperdument du Chapitre, du Prince et de la barbe du Prince. Quand ces Tables seront imprimées, le dernier crétin de Salvagnes pourra prévoir un présage avec une règle et un crayon. » Il sourit dans sa barbe, férocement. « C'est la plus belle chose que j'aie faite de ma vie. Et je n'ai fait que des belles choses. »",
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_v_serac: { act: "II", title: "Le premier maître", place: "veille",
    text: [
      "Tu prononces le nom de Sérac. Le vieil homme se tait. C'est si inattendu, ce silence, dans une bouche pareille, que le feu lui-même semble baisser.",
      "« Mon maître, dit-il enfin, d'une voix ordinaire. Joachim Sérac. Il a bâti cette tour, poli le grand miroir de ses mains, et commencé les Tables. Il est mort la nuit de la dernière Glaneuse, devant la lunette, à trois heures. Le cœur. » Il referme le registre. « J'avais quinze ans. J'étais là. »",
      "Il fixe le feu un long moment. Puis il se redresse, et la voix revient, tonnante, comme un rideau qu'on retire. « Et j'ai fini ce qu'il avait commencé, voilà tout. Ne faites pas cette tête. Les jeunes gens font toujours cette tête quand un vieillard parle des morts. Les morts, à mon âge, c'est la famille. »",
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_v_helis: { act: "II", title: "L'envoyée du Prince", place: "veille",
    text: [
      "« Pour m'acheter mes Tables, dit-il. Elle me l'a dit en entrant, avant même d'ôter ses gants, ce qui est soit très franc, soit très mal élevé. À la cour, on ne fait plus la différence depuis longtemps. »",
      "Il ricane. « Le Prince veut les afficher sur la porte de la cathédrale, à côté du sermon. Je trouve l'idée excellente. Je la trouverais même géniale si elle venait de moi. » Il lisse sa barbe. « Je n'ai pas encore dit oui. On ne dit pas oui à une cour le premier soir. Ça lui donne de mauvaises habitudes. »",
    ],
    choices: [
      { back: "B_v_parler" },
    ] },

  B_coupole: { act: "II", title: "La coupole", place: "veille", puzzle: "p_quatrain",
    text: [
      { first: true, text: "L'escalier tourne quatre fois autour de la tour et débouche sous la coupole. Il y fait aussi froid que dehors : la fente de la coupole est ouverte, une bande de ciel noir où les étoiles fourmillent, et le vent y entre en sifflant. Au centre, sur un pied de fonte, la lunette : un long tube de cuivre et de bois, gros comme une jambe, pointé vers l'est. Le long du mur, des cercles gradués, des pendules, une table couverte de feuilles retenues par des cailloux." },
      { first: true, text: "Et en face de la fente, dressé sur un chevalet de fer, le Grand Miroir. Un disque de bronze poli large de trois pieds, enchâssé dans une bague de laiton, sous une housse de drap noir qu'on a relevée à moitié. Dans la moitié découverte, le ciel se reflète, plus noir que le ciel, plus profond, comme si le métal avait un fond. On n'a pas envie de s'y pencher. On s'y penche quand même. On voit son propre visage, pâle, à l'envers de lui-même, et derrière, les étoiles." },
      { again: true, text: "La coupole froide, la fente ouverte sur le ciel, la lunette sur son pied de fonte. Le Grand Miroir sous sa housse noire relevée à moitié." },
      { after: "souper", text: "Maître Vellérin est à la lunette, l'œil collé à l'oculaire, et il dicte des chiffres à Lise sans tourner la tête." },
    ],
    choices: [
      { back: "B_salle" },
    ] },

  B_tiroir: { act: "II", title: "Le premier tiroir", place: "veille",
    text: [
      "Les lettres mobiles s'alignent sur MIROIR avec un déclic doux, et un tiroir plat, pas plus épais qu'un livre de prières, sort de la bague de laiton.",
      "Dedans, sur un lit de velours mangé aux mites, une petite lentille de verre jauni, montée dans un anneau de laiton. Autour de l'anneau, une inscription très fine : *J. S. — pour voir plus loin que soi.*",
      "Tu la prends. Elle est tiède, comme si quelqu'un venait de la tenir.",
      { second: true, text: "Le tiroir, une fois vide, ne s'enfonce pas jusqu'au bout. Derrière lui, il reste dans la bague un espace creux, de la largeur d'une main. Le quatrain avait peut-être deux réponses." },
    ],
    choices: [
      { back: "B_coupole" },
    ] },

  B_biblio: { act: "II", title: "La bibliothèque", place: "veille", puzzle: "p_registre",
    text: [
      { first: true, text: "Le premier étage est une bibliothèque ronde, sans fenêtre, éclairée par une seule lampe à huile qui fume. Les livres montent jusqu'à la voûte, serrés comme les dents d'une vieille mâchoire : des registres, des almanachs, des traités, des atlas du ciel en folio, des manuscrits ficelés. Il y règne cette odeur de papier et de poussière tiède qui est l'odeur même du temps quand il n'a rien d'autre à faire." },
      { first: true, text: "Sur un pupitre, à part, comme une relique, un cahier d'écolier cousu de fil, à la couverture grise. Au dos, à l'encre brunie : *O. V., l'an 312.*" },
      { again: true, text: "La bibliothèque ronde, la lampe qui fume, les livres jusqu'à la voûte. Le cahier gris sur son pupitre." },
      "Tu le feuillettes. Ce sont des comptes d'étoiles, des positions de la Glaneuse notées d'heure en heure, une écriture d'enfant appliquée qui s'efforce de ressembler à celle d'un maître. La dernière page porte une seule ligne de capitales qui ne veut rien dire.",
    ],
    choices: [
      { label: "Chercher un traité sur les miroirs", hide: { seen: "B_traite" }, to: "B_traite" },
      { label: "Regarder l'atlas ouvert sur le lutrin", hide: { seen: "B_atlas" }, to: "B_atlas" },
      { back: "B_salle" },
    ] },

  B_traite: { act: "II", title: "Le traité des miroirs", place: "veille",
    text: [
      "Sur l'étagère de l'optique, entre deux traités des lunettes, un mince volume relié de veau : *Du miroir ardent et du miroir ténébreux*, par Joachim Sérac. Une moitié du livre explique comment polir un bronze. L'autre moitié est une longue rêverie, très peu savante, sur ce que les anciens disaient des miroirs : qu'ils gardent les âmes, qu'ils montrent les morts, qu'ils retournent le temps comme ils retournent la main droite.",
      "En marge, une écriture plus récente, nerveuse, celle de Vellérin sans doute, a noté au crayon à côté de la phrase sur le temps : *Superstition.* Puis, en dessous, d'une autre encre, plus tard : *Peut-être pas.*",
    ],
    choices: [
      { back: "B_biblio" },
    ] },

  B_atelier: { act: "II", title: "L'atelier de Tobie", place: "veille", puzzle: "p_carte",
    text: [
      { first: true, text: "L'atelier occupe le deuxième étage : un établi, un tour à polir à pédale, des bassines d'eau grise, des pots de poudre étiquetés du plus gros au plus fin. Des lentilles sèchent sur des linges comme des yeux sans paupières. Tobie est assis sur l'établi, les jambes ballantes, et il essaie de recoller une carte du ciel déchirée en quatre bandes, qu'il retourne dans tous les sens en se mordant la langue." },
      { again: true, text: "L'établi, le tour à polir, les lentilles qui sèchent sur leurs linges. Tobie fait semblant de travailler." },
      { first: true, text: "« Je l'ai fait tomber, explique-t-il. J'avais noté la course de la Glaneuse pour toute la nuit, et la demoiselle Lise va me tuer. Les morceaux se ressemblent tous. » Il te regarde par en dessous. « Vous savez lire le ciel, vous ? »" },
    ],
    choices: [
      { label: "Bavarder avec Tobie", hide: { seen: "B_tobie" }, to: "B_tobie" },
      { label: "Aider Tobie à polir une lentille", hide: { seen: "B_lentilles" }, to: "B_lentilles" },
      { label: "Dire à Tobie que tu sais pour l'escalier de service", second: true, hide: { seen: "S_tobie_r2" }, to: "S_tobie_r2" },
      { back: "B_salle" },
    ] },

  B_carte_ok: { act: "II", title: "La course de la comète", place: "veille",
    text: [
      "Tobie aligne les quatre bandes sur l'établi et les fixe avec des pots de poudre. La course de la Glaneuse se lit d'un bout à l'autre : sortie de derrière le mont à neuf heures, sous le Bouvier à minuit, descendant vers la Lyre à une heure, et à trois heures, la Lyre.",
      "« Trois heures, répète-t-il en tapotant le papier. La Lyre. C'est là que le maître regardera. Il dit qu'il y a soixante et onze ans, son maître à lui regardait juste à ce moment-là. » Il baisse la voix. « Il dit qu'il veut voir ce que son maître a vu. »",
    ],
    choices: [
      { back: "B_atelier" },
    ] },

  B_tobie: { act: "II", title: "Tobie", place: "veille",
    text: [
      "Tobie parle comme on court dans une descente : vite, en tournant, sans freiner.",
      "Il est de Salvagnes, de la rue des Tanneurs. Sa mère l'a placé ici il y a trois ans, parce qu'il cassait tout ce qu'il touchait et qu'on lui a dit qu'un polisseur de verres apprenait la patience. Il n'a pas appris la patience, mais il polit très bien. Il connaît tous les escaliers de la tour, y compris celui qu'on a muré derrière la bibliothèque, et qui ne l'est plus tout à fait, à cause de lui.",
      "« Le maître crie tout le temps, dit-il. Mais une fois, quand j'avais de la fièvre, il est resté toute la nuit à côté de mon lit à me lire les étoiles. Pas les histoires des étoiles. Les étoiles. Leurs noms, leurs distances, leurs couleurs. » Il hausse les épaules. « C'était très ennuyeux. J'ai guéri. »",
    ],
    choices: [
      { back: "B_atelier" },
    ] },

  B_cabinet: { act: "II", title: "Le cabinet de Lise", place: "veille",
    text: [
      { first: true, text: "Le cabinet de Lise est une pièce étroite au troisième étage, si propre qu'on la dirait inhabitée : un pupitre, des registres alignés par taille, des plumes taillées en rang, un abaque, une bougie. Contre le mur, scellé dans la pierre par quatre pattes de fer, un coffre noir à serrure de cuivre, une serrure à trois molettes." },
      { first: true, before: "souper", text: "Lise est là. Elle range dans le coffre une liasse de feuilles qu'elle vient de recopier. Elle te tourne le dos pour faire tourner les molettes ; tu entends trois déclics, et elle dit entre ses dents, à elle-même : « La même année. Toujours la même année. Un enfant le trouverait. » Puis elle se retourne et te voit, et ses lèvres se pincent." },
      { again: true, text: "Le pupitre, les registres alignés par taille, les plumes en rang. Le coffre noir scellé au mur." },
      { after: "souper", text: "Lise est montée à la coupole avec le maître. Le cabinet est vide." },
    ],
    choices: [
      { label: "Parler avec Lise", before: "souper", hide: { seen: "B_lise1" }, fx: { clue: "i_coffre" }, to: "B_lise1" },
      { label: "Feuilleter le registre des comptes", hide: { seen: "B_registres" }, to: "B_registres" },
      { label: "Demander à Lise si elle a besoin d'aide", before: "souper", if: { seen: "B_lise1" }, hide: { has: "enigme:p_pendules" }, to: "B_epreuve" },
      { label: "Essayer la serrure du coffre", after: "souper", hide: { any: [{ has: "enigme:p_coffre" }, { has: "coffre:change" }] }, to: "B_coffre" },
      { back: "B_salle" },
    ] },

  B_lise1: { act: "II", title: "Lise Moranne", place: "veille",
    text: [
      "« Les Tables, dit-elle en tapotant le coffre, quand tu lui demandes ce qu'il contient. Cinquante ans de calculs. Trois mille pages. Quatre cents de ma main. Il n'y a pas d'autre copie. » Elle ôte ses lunettes et se frotte les yeux. « Il ne veut pas qu'on en fasse une autre copie. Il dit qu'une copie, c'est une occasion de faute. »",
      "Tu lui demandes ce qu'elle fera, après la comète.",
      "Elle te regarde comme on regarde quelqu'un qui a lu par-dessus votre épaule. « Dame Hélis m'a apporté une lettre de l'Académie du Prince. On m'offre une chaire. La première chaire de calcul jamais offerte à une femme dans ce pays. » Elle remet ses lunettes. « Il ne sait pas encore. Il va crier. Il crie toujours quand on part. Il a crié quand sa sœur est morte. »",
    ],
    choices: [
      { back: "B_cabinet" },
    ] },

  B_coffre: { act: "II", title: "Le coffre des Tables", place: "veille", puzzle: "p_coffre",
    text: [
      "Le cabinet est vide, la bougie éteinte. À la lumière de ta lanterne, les trois molettes de cuivre attendent.",
      { second: true, text: "Cette fois, tu sais ce qu'il y aura dedans à deux heures et demie : rien." },
    ],
    choices: [
      { back: "B_cabinet" },
    ] },

  B_coffre_ouvert: { act: "II", title: "Les Tables", place: "veille",
    fx: { flag: "tables:vues" },
    text: [
      "Le coffre s'ouvre. Dedans, quatre registres épais comme des pavés, reliés de toile noire, numérotés à la craie. Tu ouvres le dernier au hasard. Des colonnes de chiffres, des positions, des heures, et en tête de page, de la main de Lise : *Retour de la Glaneuse, l'an 383 : passage de l'épaule d'Escalle à 9 h 0 min ; contact de la Lyre à 3 h 0 min.*",
      "L'an 383 : cette année. Calculé, d'après la date en marge, il y a vingt-six ans.",
      "Tu refermes le registre. Tu le tiens une seconde contre toi, comme on tient un enfant endormi, et tu penses au Grand Chantre de Salvagnes, à sa rime et à son présage, qui pèsent ensemble moins lourd que ces quatre volumes. Une prophétie qu'on peut vérifier n'a plus rien d'une prophétie : c'est un horaire.",
    ],
    choices: [
      { label: "Remettre les Tables dans le coffre et refermer", to: "B_cabinet" },
      { label: "Emporter les Tables et les cacher ailleurs", second: true, if: "confiance", fx: { flag: "tables:cachees" }, to: "S_tables_cachees" },
    ] },

  B_ronde: { act: "II", title: "Le chemin de ronde", place: "veille",
    text: [
      { first: true, text: "Une porte basse donne sur le chemin de ronde, une galerie de pierre qui fait le tour de la tour à mi-hauteur, au-dessus du vide. Le vent t'y attend. Il plaque tes vêtements contre toi, siffle dans les créneaux, et la nuit, de l'autre côté du parapet, n'a pas de fond : la vallée est un gouffre où brillent, très bas, les quelques lumières de Salvagnes, comme des braises au fond d'un puits." },
      { again: true, text: "Le chemin de ronde, le vent, le vide noir où brillent les braises de Salvagnes." },
      "À l'est, la Glaneuse a monté. Elle est plus haute que tout à l'heure, plus pâle, et sa queue s'est allongée ; elle traverse un quart du ciel, fine comme un fil de soie qu'une araignée géante aurait tendu entre deux mondes.",
      { if: { seen: "A_litiere" }, text: "Le capitaine Ferrand est là, accoudé au parapet, immobile. Il regarde la comète comme un soldat regarde l'ennemi qui campe sur la colline d'en face." },
    ],
    choices: [
      { label: "T'accouder au parapet près du capitaine Ferrand", if: { seen: "A_litiere" }, hide: { seen: "B_ferrand2" }, to: "B_ferrand2" },
      { label: "Faire le tour jusqu'au côté de l'ouest", before: "souper", hide: { seen: "B_ronde_ouest" }, to: "B_ronde_ouest" },
      { back: "B_salle" },
    ] },

  B_ferrand2: { act: "II", title: "Le capitaine au parapet", place: "veille",
    fx: { flag: "ferrand:ronde" },
    text: [
      "Tu t'accoudes à côté de lui. Il ne bouge pas. Au bout d'un long moment, il parle, sans te regarder.",
      "« À la bataille de la Sorre, il y avait une comète. Une petite. Le chapelain a dit que c'était la main de Dieu sur nous. On a perdu. Le lendemain, le chapelain d'en face a dit que c'était la main de Dieu sur eux. » Il frotte sa balafre avec son pouce, d'un geste machinal. « Dieu a beaucoup de mains, quand on écoute les chapelains. »",
      "Tu lui demandes ce qu'il pense du frère de l'ermitage.",
      "« Rien. » Il réfléchit. « Il sourit trop. Mais il fait un bon miel. » C'est peut-être, chez le capitaine Ferrand, un éloge.",
      { if: { has: "passe:soldat" }, text: "Il remarque enfin ta façon de te tenir au parapet, le poids sur la jambe arrière, les yeux qui balaient le noir par quartiers. « La garde du Prince ? » Tu hoches la tête. Il hoche la sienne. Entre soldats, cela tient lieu de longue conversation." },
    ],
    choices: [
      { back: "B_ronde" },
    ] },

  B_souper: { act: "II", title: "Le souper", place: "veille",
    fx: { flag: "souper", meet: ["cosme", "helis", "ferrand"], clue: ["i_flasque", "i_melisse"], until: 22 },
    text: [
      "La cloche sonne dix coups, et toute la Veille se retrouve à la longue table de la grande salle, dont Lise a poussé les papiers en tas au bout. Frère Cosme est monté de l'ermitage avec deux paniers : du pain, un fromage de chèvre, des noix, un pot de miel, une cruche de vin qu'il fera chauffer à minuit. Il dit le bénédicité seul, à mi-voix, pendant que le maître beurre son pain avec ostentation.",
      "Dame Hélis a quitté son manteau prune pour une robe noire, et gardé ses gants. Le capitaine Ferrand mange debout, près de la porte, son assiette à la main, comme un homme qui a appris à dîner entre deux alertes. Tobie mange pour quatre. Lise ne mange pas ; elle calcule sur un coin de nappe.",
      "Au milieu du repas, Frère Cosme sort de son panier une flasque d'étain neuve, bouchée de liège, et la pose devant le maître. « Votre eau de mélisse, maître. De l'ermitage. Pour la Lyre. »",
      "« Un doigt de mélisse avant chaque observation, t'explique Lise à voix basse. Il en boit depuis cinquante ans. Il dit que ça lui rend l'œil. »",
      "Le maître met la flasque dans la poche de sa robe de chambre et se lance dans une tirade contre le Chapitre, qui dure jusqu'au fromage et dont le Grand Chantre sort en lambeaux. Dame Hélis l'écoute avec l'attention polie d'une femme qui a déjà entendu des hommes célèbres parler d'eux-mêmes. Quand le frère lui propose du vin, elle couvre son verre de sa main gantée. « J'ai fait un vœu, dit-elle. Pas une goutte de vin avant l'aube. » Frère Cosme s'incline avec un sourire.",
      { second: true, text: "Tu as suivi la flasque des yeux depuis le panier jusqu'à la poche. Tout le reste du souper, tu ne vois plus que la bosse qu'elle fait sous le renard de la robe de chambre." },
    ],
    choices: [
      { label: "Te lever de table", second: false, to: "B_salle" },
      { label: "Te lever de table", second: true, hide: { has: "confiance" }, to: "B_salle" },
      { label: "Renverser ton verre sur le maître pour l'emmener se changer", second: true, if: "confiance", hide: { has: "flasque:prise" }, to: "S_flasque_maladresse" },
      { label: "Laisser faire, et parler au maître après le souper", second: true, if: "confiance", to: "B_salle" },
    ] },

  B_querelle: { act: "II", title: "Dans l'escalier", place: "veille",
    fx: { flag: "querelle:entendue" },
    text: [
      "Dans l'escalier, entre deux étages, des voix. Tu t'arrêtes dans l'ombre d'un tournant.",
      "« …une chaire, maître. La première. — Une chaise ! Ils t'offrent une chaise, et tu lâches cinquante ans de travail pour t'asseoir dessus ! — Vingt ans. J'en ai donné vingt. Les trente autres, c'étaient les vôtres. — Ingrate ! — Exacte. »",
      "Une porte claque. Quelqu'un descend vite. Lise passe devant toi sans te voir, les yeux secs, la bouche serrée sur ce qu'elle n'a pas dit.",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  B_cosme2: { act: "II", title: "Les cuisines", place: "veille",
    text: [
      "Les cuisines sont au fond de la grande salle, sous l'escalier : une pièce basse, voûtée, noire de suie, avec un potager à braises et des chaudrons pendus. Frère Cosme y fait chauffer son vin sans le laisser bouillir, une cuillère de bois à la main. Ça sent la cannelle, le girofle, le miel chaud.",
      "« Ah, dit-il. Vous venez goûter ? Pas encore. À minuit. » Il remue. « Le maître ne boit jamais de mon vin, vous savez. Il dit que le vin brouille l'œil. Il ne boit que sa mélisse. Mais il aime qu'il y en ait pour les autres. »",
      "Tu lui demandes depuis quand il connaît le maître.",
      "« Vingt ans. » Il sourit dans la vapeur. « Frère Anselme, mon prédécesseur, le connaissait depuis l'enfance. Ils ne s'aimaient pas. Le maître n'est jamais venu à son enterrement. » Il goûte, ajoute une pincée de girofle. « Il ne va à aucun enterrement. Il dit que les morts ne s'aperçoivent de rien, et que les vivants s'aperçoivent de tout. »",
      { second: true, text: "Sur la table, à côté des épices, un mortier de pierre a servi. Le pilon est rincé. Le mortier, non : au fond, une pâte verte a séché." },
    ],
    choices: [
      { label: "Gratter le fond du mortier quand il a le dos tourné", second: true, hide: { has: "mortier" }, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { fx: { flag: "mortier" }, to: "S_mortier" }, lose: { to: "S_mortier_vu" } },
      { back: "B_salle" },
    ] },

  B_helis2: { act: "II", title: "Dame Hélis", place: "veille",
    text: [
      "Dame Hélis t'attend sur le palier de la bibliothèque, à l'écart de la lumière. Elle a tiré ses gants, enfin, et tu vois ses mains : fines, couvertes de taches d'encre, des mains de secrétaire et non de dame.",
      "« Vous êtes un porteur juré, dit-elle. Vous connaissez les routes, et on ne fouille pas un porteur juré. » Elle sort de sa manche une bourse ronde. « Si le maître refuse de vendre, et je crains qu'il ne refuse par vanité, c'est-à-dire par habitude, il faudra que les Tables descendent quand même. Le Prince saura se montrer reconnaissant. Et le Chapitre ne pourra rien contre un porteur qui a fait son métier. »",
      { if: { has: "helis:entendue" }, text: "Tu as entendu, dans l'écurie du Pas-de-l'Ours, ce qu'elle compte faire des Tables, et ce qu'elle pense du maître. Elle ignore que tu le sais. Cela change un peu le poids de la bourse." },
      "Tu regardes la bourse, puis elle.",
      "« Je ne vous demande pas de les voler, dit-elle avec un demi-sourire. Je vous demande d'être là quand quelqu'un d'autre essaiera. Car quelqu'un essaiera, cette nuit. J'en mettrais ma main au feu, et j'ai très peu de mains. »",
    ],
    choices: [
      { label: "Refuser la bourse", fx: { flag: "helis:refus" }, to: "B_salle" },
      { label: "Prendre la bourse sans rien promettre", fx: { gold: 20, flag: "helis:bourse" }, to: "B_salle" },
    ] },
};
