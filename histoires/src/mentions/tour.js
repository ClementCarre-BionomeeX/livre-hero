// « Émotions vendues séparément » · the Tour des Mentions, floor by floor. The lift is the hub; each floor sends the
// reader back to it. What the reader carries changes what the words show (examens, in base.js).
var TOUS_SIX = { all: [{ has: "lettre:1" }, { has: "lettre:2" }, { has: "lettre:3" }, { has: "lettre:4" }, { has: "lettre:5" }, { has: "lettre:6" }] };
module.exports = {
  // ------------------------------------------------------------------ the hall, and Madame Vernis
  A_hall: { act: "I", title: "La Tour des Mentions", place: "hall",
    text: [
      "La Tour des Mentions se dresse à l'angle du Domaine, à l'endroit précis où les jardins cessent d'être des jardins pour devenir des pelouses. Elle est de marbre gris, haute de neuf étages, percée de fenêtres étroites comme des fentes de boîte aux lettres, et elle a l'air, de loin, d'une tombe que l'on aurait étirée pour qu'elle ait le temps de réfléchir.",
      "Le hall est froid, propre, sonore. Tes pas y font un bruit d'horloge qu'on remonte. Au fond, derrière une grille de cuivre en accordéon, attend l'ascenseur, et devant l'ascenseur, un vieil homme en livrée bordeaux, aux gants blancs, aussi immobile que la colonne contre laquelle il ne s'appuie pas.",
      "Un valet en queue-de-pie traverse le hall en poussant un chariot de courrier. Il te salue d'un demi-centimètre de menton, ce qui, au Domaine, est une effusion.",
      "Tu as rendez-vous à quatorze heures avec Madame Vernis, directrice des Mentions légales. Il est quatorze heures moins deux.",
    ],
    choices: [{ label: "Entrer dans l'ascenseur", to: "A_premiere_montee" }] },

  A_premiere_montee: { act: "I", title: "L'ascenseur", place: "ascenseur",
    fx: { meet: "anatole" },
    text: [
      "Le liftier tire la grille. La cabine est d'acajou et de laiton, avec une banquette de velours sur laquelle personne, visiblement, ne s'assied jamais. Il referme, pose la main sur la manette de cuivre, et demande d'une voix grave, sans te regarder : « Étage ? »",
      "Tu dis : Madame Vernis. Il pousse la manette. La cabine monte avec un soupir de soufflet, et, à mesure que les étages défilent derrière la grille, il les annonce, un par étage, d'un ton de tragédien qui aurait renoncé à la scène sans renoncer à la diction :",
      "« *Deuxième : on y saisit le faux, et parfois le vrai même.* » Puis : « *Cinquième : la Galerie, où dort tout ce qu'on aime.* » Puis : « *Septième : les rédacteurs, quarante, et nul ne parle.* » Et, la cabine s'arrêtant tout en haut avec un léger rebond : « *Neuvième. Direction. Le reste, on vous le dira.* »",
      "« Le règlement, dit-il en ouvrant la grille. Tout étage s'annonce en douze syllabes. Je m'appelle Anatole. Le dernier vers boite ; c'est voulu. »",
    ],
    choices: [{ label: "Entrer chez Madame Vernis", to: "A_vernis" }] },

  A_vernis: { act: "I", title: "Madame Vernis", place: "direction",
    fx: { meet: "vernis", item: "loupe", clue: "i_absent" },
    text: [
      "Le bureau de Madame Vernis est une pièce blanche avec un tapis gris, un bureau de verre et une seule chose dessus : un stylo-plume en or, capuchon ôté, posé parallèlement au bord. Madame Vernis est debout derrière, très droite, en tailleur gris perle. Elle te regarde comme on regarde une virgule dont on n'est pas sûr.",
      "« Vous êtes en avance de deux minutes, dit-elle. Ne recommencez pas. Asseyez-vous. Non : restez debout, nous n'avons pas le temps. »",
      "Elle parle avec une précision de notaire qui compte ses mots parce qu'on les lui paie au poids. « Ce soir à dix-neuf heures, au Salon des Lancements, la Maison présente l'Abonnement au Silence™. Un an de silence intégral : personne ne vous adresse la parole. Trois cent trente-trois mille trois cent trente-trois euros. Le Club des Inaccessibles en a déjà réservé quarante. Il manque la mention légale. »",
      "Elle laisse passer un temps exactement suffisant pour que tu comprennes la gravité de ce manque. « Un produit sans mention ne se vend pas. C'est l'article premier de notre Charte, et c'est la seule loi du Domaine que personne n'a jamais songé à acheter. La mention devait être écrite par Monsieur Corps-Huit. Monsieur Corps-Huit n'a pas manqué un jour en trente-sept ans. Ce matin, son chapeau était à sa patère, et lui nulle part. »",
      "Elle ouvre un tiroir, en sort une petite loupe d'horloger à monture d'écaille, et la pose devant toi sur le verre, parallèlement au stylo. « Votre loupe de relecture. Elle grossit huit fois. Vous avez jusqu'à dix-neuf heures. Trouvez Monsieur Corps-Huit. Ou trouvez sa mention. Je ne fais aucune différence entre les deux, et lui non plus, je crois. »",
    ],
    choices: [
      { label: "Demander à quoi ressemble Monsieur Corps-Huit", once: true, to: "A_vernis_portrait" },
      { label: "Demander s'il avait des ennemis", once: true, to: "A_vernis_ennemis" },
      { label: "Reprendre l'ascenseur", to: "A_ascenseur" },
    ] },
  A_vernis_portrait: { act: "I", title: "Le portrait", place: "direction",
    text: [
      "« Petit. Rond. Une moustache taillée au cordeau, des manchettes de lustrine pour ne pas user ses manches, et un tilleul à seize heures. Il chiffre ses notes de service, par goût, comme d'autres font des mots croisés. Il signe tout de son rang : C-8. »",
      "Madame Vernis réfléchit, ce qui chez elle se voit à un léger resserrement des lèvres. « Il a écrit *Émotions vendues séparément* en 1997. La phrase a fait vendre onze mille baguettes. Il a reçu une prime de quarante euros. Il l'a trouvée excessive. »",
    ],
    choices: [{ back: "A_vernis" }] },
  A_vernis_ennemis: { act: "I", title: "Les ennemis", place: "direction",
    text: [
      "« Des ennemis ? » Madame Vernis considère la question comme une coquille dans un contrat. « Monsieur Corps-Huit n'a jamais contredit personne à voix haute. Il écrit ses objections en note de bas de page. On ne se fait pas d'ennemis en corps huit : personne ne lit jusque-là. »",
      "Elle reprend son stylo, le repose. « Il m'a demandé lundi le tarif exact de l'Abonnement. Je le lui ai donné. Il a dit : *C'est raisonnable.* C'est la première fois en trente-sept ans qu'il trouve un de nos prix raisonnable. J'aurais dû m'inquiéter. »",
    ],
    choices: [{ back: "A_vernis" }] },

  // ------------------------------------------------------------------ the lift (the hub)
  A_ascenseur: { act: "I", title: "L'ascenseur", place: "ascenseur", hub: true, backName: "l'ascenseur",
    text: [
      { first: true, text: "Anatole t'attend, la main sur la manette. La cabine sent la cire d'abeille et le laiton chaud. Par la grille de cuivre, on voit défiler les étages comme les pages d'un livre que l'on feuillette sans le lire." },
      { again: true, text: "La cabine d'acajou, la banquette où personne ne s'assied, et Anatole, qui attend l'étage sans impatience, comme on attend une rime." },
      { if: { has: "corps8:trouve" }, text: "Anatole te regarde un instant de plus que d'habitude. « *On dit qu'en bas, ce soir, un homme s'est tu pour de bon.* » Il ne dit pas d'où il le tient." },
      { if: { has: "corps8:parle" }, text: "Quelque part au-dessus, une sonnette a retenti tout à l'heure, longue, nette, comme une sonnette de fin de récréation. Anatole n'en dit rien. Il a l'air d'un homme qui sait exactement ce qu'elle annonçait." },
    ],
    choices: [
      { label: "Le deuxième étage, la Brigade des Contrefaçons", to: "A_brigade" },
      { label: "Le cinquième étage, la Galerie des Produits", to: "A_galerie" },
      { label: "Le septième étage, le Pool des Rédacteurs", to: "A_pool" },
      { label: "Le neuvième étage, la Direction", to: "A_direction" },
      { label: "Le premier sous-sol, les Archives", to: "A_archives" },
      { label: "Monter au Salon des Lancements les mains vides", hide: { has: "corps8:trouve" }, to: "A_salon_vide" },
      { label: "Monter au Salon des Lancements", hide: { not: { has: "corps8:trouve" } }, to: "A_salon" },
    ] },

  // ------------------------------------------------------------------ the pool of the writers (7th floor)
  A_pool: { act: "I", title: "Le Pool des Rédacteurs", place: "pool",
    fx: { clue: "i_signe" },
    text: [
      { first: true, text: "« *Septième : les rédacteurs, quarante, et nul ne parle.* » La grille s'ouvre sur une salle immense, basse de plafond, éclairée de lampes vertes. Quarante bureaux de chêne en rangs parfaits, quarante machines à écrire, quarante rédacteurs en manchettes de lustrine, penchés, qui tapent sans bruit, sur des machines dont on a feutré les marteaux. On entend seulement, de loin en loin, le petit tintement d'une fin de ligne." },
      { first: true, text: "Le bureau de Corps-Huit est le premier du premier rang, sous la fenêtre. Personne ne s'en approche. Ses voisins tapent un peu plus vite, avec la gêne polie d'une famille qui a gardé la chaise du défunt à table." },
      { again: true, text: "Le Pool, ses lampes vertes, ses quarante machines feutrées. Le bureau de Corps-Huit, au premier rang, attend sous la fenêtre." },
      "Sur le bureau, tout est rangé à angle droit : {{examen:sousmain|le sous-main de buvard vert}}, une tasse vide, un pot de crayons taillés, et la machine à écrire noire, capot ouvert, avec {{examen:ruban|son ruban rouge et noir}} tendu entre les deux bobines. Un billet est épinglé au bord de la lampe, d'une écriture ronde et minuscule : *Je reviens. Ne touchez pas au ruban. — H. C-8. Je signe de mon rang.*",
      "À droite, un tiroir fermé à clef, avec une serrure de la taille d'un ongle. À gauche, sous le bureau, une corbeille à papier en osier.",
    ],
    choices: [
      { label: "T'asseoir avec la ligne recopiée du ruban", hide: { any: [{ not: { has: "ruban:lu" } }, { has: "enigme:p_ruban" }] }, to: "A_ruban" },
      { label: "Fouiller la corbeille", hide: { has: "enigme:p_brouillon" }, to: "A_corbeille" },
      { label: "Ouvrir le tiroir avec la petite clef de cuivre", if: { item: "clef_tiroir" }, hide: { has: "tiroir:ouvert" }, to: "A_tiroir" },
      { label: "Te pencher sur la dernière page du Cahier", hide: { any: [{ not: { has: "tiroir:ouvert" } }, { has: "cahier:lu" }] }, to: "A_cahier" },
      { label: "Interroger le rédacteur du bureau voisin", once: true, to: "A_voisin" },
      { back: "A_ascenseur" },
    ] },
  A_voisin: { act: "I", title: "Le voisin", place: "pool",
    text: [
      "Le rédacteur du bureau voisin est un homme long et pâle qui tape comme on prie. Il lève les yeux quand tu t'approches, regarde de chaque côté, puis prend une feuille, y écrit quelque chose, et te la tend sans un mot.",
      "*Ici, on ne parle pas pendant les heures de rédaction. C'est le règlement. Hilaire est arrivé hier soir avec un sac de voyage, très tard, et il est reparti sans le sac. Il avait l'air heureux. Je ne l'avais jamais vu heureux. Cela m'a fait peur.*",
      "Il reprend la feuille, la plie en quatre, la met dans sa bouche, et la mâche avec application, en te regardant. Puis il se remet à taper.",
    ],
    choices: [{ back: "A_pool" }] },
  A_ruban: { act: "I", title: "La ligne du ruban", place: "pool", puzzle: "p_ruban",
    text: ["Tu t'assieds au bord du bureau de Corps-Huit, le coin de papier devant toi, et tu regardes les capitales comme on regarde quelqu'un qui fait semblant de dormir."],
    choices: [{ back: "A_pool" }] },
  A_ruban_lu: { act: "I", title: "Ce que dit le ruban", place: "pool",
    text: [
      "Les lettres reculent de huit rangs, et la phrase se lève, d'un coup, comme un chat qu'on croyait mort :",
      "*Ma clef est dans la vitrine. Lisez les mentions de près, et de nuit.*",
      "Le voisin de bureau, qui regardait par-dessus ton épaule, se remet à taper très vite, comme un homme qui n'a rien vu et le fera savoir.",
    ],
    choices: [{ back: "A_pool" }] },
  A_corbeille: { act: "I", title: "La corbeille", place: "pool", puzzle: "p_brouillon",
    text: [
      "La corbeille est presque vide : des épluchures de crayon, un sachet de tilleul usé, et quatre bandes de papier, déchirées en long d'un geste net, comme on déchire ce qu'on regrette d'avoir bien écrit.",
    ],
    choices: [{ back: "A_pool" }] },
  A_brouillon_colle: { act: "I", title: "Le brouillon", place: "pool",
    text: [
      "Recollées, les bandes donnent deux alexandrins, d'une écriture qui se serre vers la fin, et une note en marge :",
      "*Le silence est vendu au prix de la parole ;*\n*qui l'achète une fois n'entend plus qu'il le vole.*",
      "*(Trop long. Corps huit n'y suffit pas. — H.)*",
      { if: { voie: "poete" }, text: "La rime est riche, le second vers boite à peine, et le sens est méchant. C'est le meilleur slogan que tu aies lu de l'année, et son auteur l'a jeté. Il y a des gens qui jettent les diamants parce qu'ils ne rentrent pas dans l'écrin." },
    ],
    choices: [{ back: "A_pool" }] },
  A_tiroir: { act: "I", title: "Le tiroir", place: "pool", takes: 1,
    fx: { set: { "tiroir": "ouvert" }, flag: "tiroir:ouvert", item: ["cahier", "bon", "typometre"], clue: "i_bon" },
    text: [
      "La petite clef tourne avec un bruit de montre. Le tiroir glisse.",
      "Dedans, dans un ordre parfait : un typomètre de laiton gravé H. C., au cran du huit usé jusqu'au métal ; un cahier relié de toile noire, *Mentions refusées* ; et, posé sur le cahier, un formulaire crème à liseré d'or, dont on a arraché le talon.",
      "Le formulaire porte en titre : *L'Abonnement au Silence™. Bon de souscription n° 1.* Le nom du souscripteur a reçu une goutte d'encre, une seule, bien ronde, juste à l'endroit du nom. Reste le paraphe : un H.",
      "Tu feuillettes le Cahier. Trente-sept ans de mentions refusées, recopiées pour mémoire, chacune avec la raison du refus. La dernière page est écrite en capitales, et ne veut rien dire.",
    ],
    choices: [{ label: "Te pencher sur la dernière page du Cahier", to: "A_cahier" }, { back: "A_pool" }] },
  A_cahier: { act: "I", title: "La dernière page", place: "pool", puzzle: "p_cahier",
    text: ["La dernière page du Cahier, ouverte sur le buvard vert. Les capitales sont alignées avec une régularité de régiment."],
    choices: [{ back: "A_pool" }] },

  // ------------------------------------------------------------------ the gallery of products (5th floor)
  A_galerie: { act: "I", title: "La Galerie des Produits", place: "galerie",
    text: [
      { first: true, text: "« *Cinquième : la Galerie, où dort tout ce qu'on aime.* » La grille s'ouvre sur une longue salle de marbre noir, sans fenêtre, où six vitrines éclairées par en dessous flottent dans la pénombre comme des aquariums sans poissons. Il fait frais. Il règne là ce silence particulier des musées et des chapelles, où l'on baisse la voix sans savoir devant qui." },
      { again: true, text: "La Galerie, sa pénombre, et les six vitrines qui flottent, chacune avec sa petite mention." },
      "Dans la première vitrine, sur un coussin de velours bleu nuit, {{examen:baguette|la Baguette Éternelle™}}, avec sa mention en corps huit. Dans la deuxième, sur un coussin réfrigéré qui ronronne, {{examen:fondant|le Fondant Impérial™}}, couteau de beurre ciselé. Dans la troisième, couronné d'or, {{examen:casque|le Casque de Supériorité™}}.",
      "Dans la quatrième, sous verre épais, {{examen:beurre|le Beurre de Classe™}} dans son écrin de titane. Dans la cinquième, la plus grande, une moto chromée de la roue au guidon : {{examen:moteur|le Silence du Moteur™}}. Dans la sixième, posée sur un lutrin, une carte noire à l'angelot doré : {{examen:dedain|le Droit au Dédain™}}.",
      { if: { all: [{ has: "enigme:p_ruban" }, { not: TOUS_SIX }] }, text: "*Lisez les mentions de près, et de nuit.* De près : c'est ta loupe. De nuit, dans une galerie sans fenêtre, c'est une autre affaire." },
      { if: TOUS_SIX, text: "Tu as relevé, sous six mentions, six petites signatures. Tu les as notées dans l'ordre de leurs chiffres." },
    ],
    choices: [{ back: "A_ascenseur" }] },

  // ------------------------------------------------------------------ the brigade of counterfeits (2nd floor)
  A_brigade: { act: "I", title: "La Brigade des Contrefaçons", place: "brigade",
    fx: { meet: "gaufrage" },
    text: [
      { first: true, text: "« *Deuxième : on y saisit le faux, et parfois le vrai même.* » L'étage sent l'huile de coupe, le métal chaud et, très légèrement, le pain. Sur de longs établis s'alignent des baguettes saisies, par dizaines, chacune avec son étiquette de scellé : des baguettes de fer chromé, des baguettes d'étain, des baguettes de bois peint, une baguette en sucre, et une qui a l'air d'avoir été tricotée." },
      { first: true, text: "Au milieu, en blouse grise, une femme carrée aux cheveux roux tirés en chignon examine une baguette au bout d'une pince, comme un chirurgien examine une appendicite. Elle porte à la ceinture un aimant en fer à cheval, peint en rouge, à la manière d'un revolver." },
      { first: true, text: "« Paulette Gaufrage, Brigade, dit-elle sans lever les yeux. Vous êtes la nouvelle recrue de Vernis. On vous reconnaît : vous avez l'air de chercher quelqu'un. Ici, on cherche des choses. C'est plus reposant. Les choses ne mentent pas, elles sont fausses, nuance. »" },
      { again: true, text: "La Brigade, ses établis, ses scellés. Madame Gaufrage pèse une baguette sur une balance de pharmacien, et en note le poids au gramme près, avec une moue." },
      { if: { item: "lampe" }, text: "Madame Gaufrage jette un œil sur la lampe de Wood qui dépasse de ta poche. « Rendez-la avant vingt heures. Elle est plus vieille que vous et beaucoup plus utile. »" },
    ],
    choices: [
      { label: "Demander à emprunter une lampe de Wood", hide: { any: [{ not: { has: "enigme:p_ruban" } }, { item: "lampe" }, { seen: "A_epreuve" }] }, to: "A_epreuve" },
      { label: "Lui demander ce qu'elle pense de Corps-Huit", once: true, to: "A_gaufrage_corps8" },
      { back: "A_ascenseur" },
    ] },
  A_gaufrage_corps8: { act: "I", title: "L'avis de la Brigade", place: "brigade",
    text: [
      "« Hilaire ? » Madame Gaufrage pose sa pince. « Le seul homme de cette tour qui sait ce qu'il écrit. Les autres écrivent ce qu'on leur paie. Lui aussi, remarquez, mais il le sait, et ça se voit dans les virgules. »",
      "Elle reprend sa pince. « Il est venu me voir lundi. Il voulait savoir combien de temps une lampe de Wood fait briller une encre invisible avant qu'elle ne s'éteigne pour de bon. Je lui ai dit : des années, si on ne l'expose pas au soleil. Il a dit : *Parfait, la Galerie n'a pas de fenêtre.* Je n'ai pas posé de question. À la Brigade, on ne pose pas de question à un homme qui sait ce qu'il fait. On attend qu'il se trompe. »",
    ],
    choices: [{ back: "A_brigade" }] },
  A_epreuve: { act: "I", title: "L'épreuve des trois baguettes", place: "brigade", takes: 1,
    fx: { item: "aimant" },
    text: [
      "« Une lampe de Wood ? » Madame Gaufrage te considère par-dessus sa pince, longuement, comme une baguette dont elle soupçonnerait la croûte. « Je prête ma lampe à qui sait voir. Pas à qui sait demander. »",
      "Elle pose devant toi, sur l'établi, trois baguettes saisies, côte à côte, et décroche l'aimant rouge de sa ceinture pour te le tendre. « Une de ces trois est authentique : inox dix-huit dix, sortie des ateliers de la Maison. Les deux autres sont des contrefaçons. Montrez-moi la vraie, et la lampe est à vous jusqu'à ce soir. Prenez votre temps. Pas trop. »",
      "{{examen:b1|La première baguette}}, brillante comme un miroir. {{examen:b2|La deuxième}}, d'un gris plus doux, rayée au quignon. {{examen:b3|La troisième}}, argentée, et si légère.",
      { if: { voie: "correcteur" }, text: "Tu connais ce genre d'épreuve : la faute qui se voit est rarement la seule. On s'arrête à la première, et la seconde passe à l'impression." },
    ],
    choices: [
      { label: "Désigner la première baguette", to: "A_epreuve_faux" },
      { label: "Désigner la deuxième baguette", to: "A_epreuve_juste" },
      { label: "Désigner la troisième baguette", to: "A_epreuve_faux" },
    ] },
  A_epreuve_juste: { act: "I", title: "La vraie", place: "brigade",
    fx: { item: "lampe", drop: "aimant", flag: "gaufrage:juste", ep: ["seance", 200] },
    text: [
      "Madame Gaufrage prend la deuxième baguette, la retourne, la soupèse. « Le fer chromé colle à l'aimant ; ça, tout le monde le voit. Le pain peint ne colle pas, et c'est là qu'on se fait avoir : on croit que tout ce qui ne colle pas est noble. La moitié du Domaine fait la même erreur sur les gens. » Elle repose la baguette. « Vous avez regardé de près. Bien. »",
      "Elle ouvre un tiroir et te tend une lampe de poche à verre violet, lourde, cabossée, avec une étiquette de scellé sur le manche. « La lampe de Wood. Elle fait briller ce que l'encre ordinaire ne montre pas. Rendez-moi mon aimant. Il ne vous servira plus : vous avez compris. »",
    ],
    choices: [{ back: "A_brigade" }] },
  A_epreuve_faux: { act: "I", title: "La fausse", place: "brigade",
    fx: { item: "lampe", drop: "aimant" },
    text: [
      "Madame Gaufrage soupire, d'un soupir long, technique, qui connaît son métier. Elle prend la baguette que tu as désignée, la pose de côté, puis prend la deuxième, la retourne et te montre, sous ta propre loupe, au fond de la grigne, un angelot gravé si fin qu'il faut retenir son souffle pour le voir.",
      "« Celle-ci. Inox dix-huit dix. La seule qui ne ment pas. » Elle te reprend l'aimant, et te tend quand même une lampe de poche à verre violet, cabossée, scellée. « Prenez la lampe. Je la prête aussi à ceux qui ne savent pas encore voir. C'est même à eux qu'elle sert le plus. »",
    ],
    choices: [{ back: "A_brigade" }] },

  // ------------------------------------------------------------------ the Direction (9th floor)
  A_direction: { act: "I", title: "La Direction", place: "direction",
    text: [
      "« *Neuvième. Direction. Le reste, on vous le dira.* » L'antichambre de Madame Vernis est blanche, avec deux chaises que personne n'ose occuper et une console de verre sur laquelle sont rangées, en éventail, les publications de la Maison : le catalogue de l'hiver, le rapport annuel, et une plaquette crème à l'angelot doré, *Charte typographique*.",
      { before: "corps8:trouve", text: "Par la porte entrouverte, tu vois Madame Vernis debout devant sa fenêtre, son stylo à la main, qui regarde le Domaine comme on relit un contrat déjà signé. Elle ne se retourne pas. « Vous l'avez trouvé ? » Tu dis que non. « Alors pourquoi êtes-vous ici ? »" },
      { after: "corps8:trouve", text: "Madame Vernis est assise, pour la première fois de l'après-midi. Elle te regarde entrer et ne dit rien, ce qui chez elle est une question." },
    ],
    choices: [
      { label: "Prendre une Charte typographique", hide: { item: "charte" }, fx: { item: "charte" }, to: "A_charte" },
      { label: "Dire à Madame Vernis où est Monsieur Corps-Huit", hide: { any: [{ not: { has: "corps8:trouve" } }, { has: "corps8:parle" }] }, to: "A_denonce" },
      { back: "A_ascenseur" },
    ] },
  A_charte: { act: "I", title: "La Charte", place: "direction",
    text: [
      "Tu prends une plaquette sur la console. Douze pages sur papier crème, une typographie superbe, et, page trois, une règle que tu lis deux fois, parce que la Maison a l'art de faire paraître sacrée la chose la plus mince :",
      "*Article 3. Les appels de note se suivent dans l'ordre que voici, et dans nul autre : l'astérisque (\\*), la croix (†), la double croix (‡), le paragraphe (§), les deux barres (‖), le pied-de-mouche (¶).*",
    ],
    choices: [{ back: "A_direction" }] },

  // ------------------------------------------------------------------ the archives (1st basement)
  A_archives: { act: "I", title: "Les Archives", place: "archives",
    fx: { meet: "odilon" },
    text: [
      { first: true, text: "La cabine descend sous le hall, et la lumière change. « *Premier sous-sol : ici dort ce qu'on n'imprime plus.* » Anatole ouvre la grille sur un couloir de rayonnages qui montent jusqu'au plafond et s'en vont, dans les deux sens, plus loin que la lumière des ampoules. Cela sent le papier, la colle de peau, et cette poussière fine, grise, qui recouvre les choses qu'on a cessé d'aimer sans pouvoir les jeter." },
      { first: true, text: "Un jeune homme long et voûté, en gilet de laine, sort d'entre deux rayonnages avec un registre sous chaque bras. Il a des lunettes rondes et des doigts gris jusqu'aux phalanges. « Odilon Cartouche, archiviste. On ne descend jamais ici. Vous êtes perdu{e} ? »" },
      { again: true, text: "Les Archives, leurs rayonnages sans fin, leur poussière grise. Odilon range un registre, à sa place exacte, au millimètre, avec l'air de quelqu'un qui recoud." },
      { before: "enigme:p_ruban", text: "Quand tu lui parles de Corps-Huit, Odilon pâlit un peu sous sa poussière. « Il m'a confié quelque chose hier soir. Pour quelqu'un. Il m'a dit : *à qui saura lire le ruban*. Vous savez lire le ruban ? »" },
      { if: { all: [{ has: "enigme:p_ruban" }, { not: { item: "clef_tiroir" } }, { not: { has: "tiroir:ouvert" } }] }, text: "Tu répètes à Odilon ce que dit le ruban, mot pour mot. Il ferme les yeux pour écouter, comme on vérifie une citation. Puis il tire de la poche de son gilet une enveloppe minuscule, marquée *À qui saura lire le ruban*, et te la tend." },
      { if: { has: "cahier:lu" }, text: "« Le troisième sous-sol ? » Odilon regarde ses chaussures. « L'ascenseur n'y descend pas. Il y a un escalier, au fond, derrière les mentions de 1952. Personne n'y va. C'est là qu'on rangeait les notes de bas de page, avant qu'on décide qu'elles n'avaient plus besoin de place. »" },
    ],
    choices: [
      { label: "Prendre l'enveloppe", hide: { any: [{ not: { has: "enigme:p_ruban" } }, { item: "clef_tiroir" }, { has: "tiroir:ouvert" }] }, fx: { item: "clef_tiroir" }, to: "A_archives" },
      { label: "Parler à Odilon de Corps-Huit", once: true, to: "A_odilon" },
      { label: "Descendre l'escalier derrière les mentions de 1952", hide: { not: { has: "cahier:lu" } }, to: "A_escalier" },
      { back: "A_ascenseur" },
    ] },
  A_odilon: { act: "I", title: "Ce que sait l'archiviste", place: "archives",
    fx: { clue: "i_tarif" },
    text: [
      "Odilon pose ses registres. « C'est lui qui m'a appris le métier. Il dit qu'un archiviste est un rédacteur qui a compris que tout finit ici. » Il hésite. « Il gagnait onze mille euros par an. Il n'a jamais rien acheté, à part son tilleul. En trente-sept ans, il a tout mis de côté. Il me l'a dit une fois, comme on avoue une maladie. »",
      "Il remonte ses lunettes d'un doigt gris. « Lundi, il est descendu ici me demander les plans de la Tour. Les vieux, d'avant l'Effondrement. Il les a regardés longtemps, puis il a dit : *Au moins, en bas, personne ne viendra me demander une virgule.* J'ai cru qu'il plaisantait. Il ne plaisante jamais. »",
    ],
    choices: [{ back: "A_archives" }] },

  // ------------------------------------------------------------------ the stairs and the room of the notes (3rd basement)
  A_escalier: { act: "I", title: "L'escalier", place: "archives", takes: 1,
    text: [
      "Derrière les mentions de 1952, une porte basse, en fer, que la peinture grise a presque fait disparaître dans le mur. Elle n'est pas fermée. Derrière, un escalier de pierre descend en colimaçon, si étroit que les épaules frôlent le mur des deux côtés, et que l'on descend de biais, comme on entre dans un secret.",
      "Les marches sont usées au milieu. La lumière de l'ampoule d'en haut te suit sur trois tours, puis renonce. Tu continues à tâtons, la main sur la pierre froide, dans une obscurité si complète qu'elle prend de l'épaisseur, et l'on finit par croire qu'il suffirait de tendre l'autre main pour la sentir, grasse, au bout des doigts. Tu comptes les marches pour te tenir compagnie. À la cent onzième, il n'y en a plus.",
      "Une lueur jaune, très faible, passe sous une porte. Tu sens une odeur de tilleul.",
    ],
    choices: [{ label: "T'approcher de la porte", to: "A_porte" }] },
  A_porte: { act: "I", title: "La porte de la Salle des Notes", place: "notes", puzzle: "p_porte",
    text: [
      { first: true, text: "La porte est de chêne, vieille, cloutée, sous une voûte basse où l'on se tient courbé. Une plaque de laiton y est vissée, sous laquelle on a monté un clavier de six touches d'ivoire, chacune gravée d'un signe ; c'est la seule chose neuve à cent onze marches à la ronde." },
      "Sur la plaque, en corps huit, on lit {{examen:porte|une inscription}}. La lueur passe sous la porte. Derrière, quelqu'un tourne une page.",
    ],
    choices: [{ back: "A_archives" }] },
  A_porte_bloquee: { act: "I", title: "Le voyant rouge", place: "notes", takes: 1,
    fx: { flag: "porte:erreur" },
    text: [
      "Au quatrième essai, le voyant de cuivre reste rouge, fixe, et une petite trappe se rabat sur le clavier avec un claquement sec, comme une bouche qui se ferme. Tu restes un long moment dans le noir, devant la porte, à écouter tes propres oreilles bourdonner.",
      "Puis des pas, en haut, dans l'escalier. Une lampe. Odilon, essoufflé, un trousseau de clefs à la main. « Le voyant d'en bas sonne aux Archives, dit-il. Je l'ignorais jusqu'à maintenant. » Il essaie trois clefs, la quatrième tourne. « Le passe des Archives. Je ne l'avais jamais utilisé. Personne ne doit savoir que je l'ai. » Il repart sans attendre, sur la pointe des pieds, comme on quitte une église en pleine messe.",
    ],
    choices: [{ label: "Pousser la porte", to: "A_salle" }] },
  A_salle: { act: "I", title: "La Salle des Notes", place: "notes",
    fx: { flag: "corps8:trouve", meet: "corps8", ep: ["seance", 300] },
    text: [
      "La porte s'ouvre sur une petite salle voûtée, aux murs couverts du sol à la voûte de casiers de bois, chacun étiqueté d'un signe : astérisques, croix, doubles croix, paragraphes, et des milliers de petites fiches de bas de page qu'on a rangées là, autrefois, et oubliées. Au milieu, sous une lampe à abat-jour vert, une table, une chaise, une théière, une tasse de tilleul qui fume.",
      "Sur la chaise, un petit homme rond, en manchettes de lustrine, à la moustache taillée au cordeau, lit un livre de poche avec une expression de bonheur si complète qu'elle en est indécente. À ses pieds, un sac de voyage. Sur la table, épinglé à la théière, un carton imprimé en lettres d'or : *Abonné au Silence™. Merci de ne pas m'adresser la parole.*",
      "Il lève les yeux, te voit, et ne dit rien. Il te regarde avec une bienveillance infinie, et un peu d'inquiétude, comme un homme qui vient de s'asseoir dans un bain chaud et voit entrer quelqu'un avec un seau d'eau froide.",
    ],
    choices: [
      { label: "« Monsieur Corps-Huit ? »", to: "A_parle" },
      { label: "Prendre une fiche vierge dans un casier, et lui écrire", to: "A_billets" },
    ] },
  A_parle: { act: "I", title: "Un mot de trop", place: "notes",
    fx: { flag: "corps8:parle", set: { "silence": "rompu" } },
    text: [
      "Ta voix sonne sous la voûte comme une assiette qui tombe.",
      "Monsieur Corps-Huit ferme les yeux. Quelque part au-dessus, très loin, une sonnette retentit, longue et nette, une sonnette de fin de récréation. Il rouvre les yeux, sort de sa poche un exemplaire de son contrat, l'ouvre à la page quatre et pose le doigt sur une ligne, sans un mot : *Résiliation immédiate du contrat aux torts de celui qui parle.*",
      "Puis il prend une fiche, y écrit en corps huit, et te la tend. *Trois cent trente-trois mille trois cent trente-trois euros. Aux torts de celui qui parle. Ce n'est pas votre faute ; c'est la mienne : j'aurais dû écrire la mention plus gros.*",
      "Il range son livre, éteint la lampe, prend son sac de voyage, et remonte l'escalier devant toi, sans hâte, avec la dignité désolée d'un homme qui quitte une plage au premier nuage.",
    ],
    choices: [{ label: "Le suivre dans l'escalier", back: "A_ascenseur" }] },
  A_billets: { act: "I", title: "Les fiches", place: "notes",
    fx: { item: "carte_mention" },
    text: [
      "Tu prends une fiche vierge, et tu écris, en aussi petit que tu peux : *Bonjour, Monsieur Corps-Huit. Madame Vernis vous cherche. Le lancement est à dix-neuf heures. Il manque la mention.*",
      "Il lit. Il hoche la tête. Il prend une fiche, écrit vite, et te la rend. L'écriture est ronde et minuscule, et elle va à l'envers, de droite à gauche, comme un homme qui a passé trente-sept ans à lire ses rubans encreurs :",
      "{{envers:Je sais. Je l'ai écrite. Elle est sur la carte, sous votre main.}}",
      "Sous ta main, en effet, il a glissé une carte de bristol pendant que tu lisais. En corps huit, à l'endroit cette fois : *Mention de l'Abonnement au Silence™ : Silence garanti. Solitude offerte. — H. C-8.*",
      "Tu écris : *Pourquoi ici ?* Il répond, à l'envers encore, avec un petit sourire sous la moustache : {{envers:Trente-sept ans qu'on me demande une virgule. J'ai acheté le droit qu'on ne me demande plus rien. Le premier abonné de la Maison est son dernier rédacteur. Cela fera une belle note de bas de page.}}",
      "Puis une dernière fiche, glissée sous la théière avant que tu partes : {{envers:Vous pouvez porter la mienne. Vous pouvez écrire la vôtre. Vernis ne fait aucune différence. Moi si.}}",
    ],
    choices: [{ label: "Glisser la carte dans ta poche", back: "A_ascenseur" }] },

  // ------------------------------------------------------------------ telling Madame Vernis
  A_denonce: { act: "I", title: "Où il est", place: "direction",
    text: [
      "Tu dis à Madame Vernis où est Monsieur Corps-Huit, et ce qu'il y fait. Elle t'écoute jusqu'au bout sans un geste. Puis elle capuchonne son stylo-plume. C'est la première fois que tu le vois fermé ; cela a l'effet d'un coup de canon.",
      "« L'Abonnement au Silence™, dit-elle. Souscripteur numéro un. Aux torts de celui qui parle. » Elle se lève. « Il a lu le contrat avant de le signer. C'est bien lui. »",
      "Elle sort. Tu la suis. Anatole descend jusqu'au premier sous-sol sans annoncer un seul étage, ce qui est contraire au règlement, et que personne ne lui reprochera.",
    ],
    choices: [{ label: "Descendre avec elle jusqu'à la Salle des Notes", to: "F_vernis" }] },

  // ------------------------------------------------------------------ the Salon des Lancements
  A_salon_vide: { act: "I", title: "Les mains vides", place: "ascenseur",
    text: [
      "Anatole pose la main sur la manette, et ne la pousse pas. « *Monter au salon sans rien, c'est un choix qu'on assume.* » Il te regarde. « Il est encore temps. Le règlement ne m'oblige pas à le dire. Je le dis quand même. »",
    ],
    choices: [
      { label: "Monter quand même", to: "F_vide" },
      { back: "A_ascenseur" },
    ] },
  A_salon: { act: "I", title: "Le Salon des Lancements", place: "salon", takes: "evening",
    text: [
      "« *Le Salon. On y vend ce que l'on n'a pas.* » La grille s'ouvre sur une salle de lustres et de miroirs, où quarante membres du Club des Inaccessibles attendent, en tenue de soirée, chacun à trois mètres du plus proche, en regardant fixement des points différents de la pièce. Personne ne parle. Ils s'entraînent.",
      "Sur une estrade, sous un drap de velours, le produit : un écrin vide, puisqu'il n'y a rien à montrer. Devant l'estrade, Madame Vernis, le stylo ouvert, et, sur un pupitre, une carte de bristol vierge, qui attend sa ligne en corps huit.",
      { if: { has: "corps8:parle" }, text: "Madame Vernis te voit arriver. « La sonnette de résiliation du contrat numéro un a retenti à l'étage de la Direction. » Elle ne dit pas l'heure. Elle ne dit pas ce que cela coûte. Elle n'a pas besoin." },
      { before: "corps8:parle", text: "Madame Vernis te voit arriver, et te tend la main, paume ouverte, sans un mot, pour la mention." },
    ],
    choices: [
      { label: "Lui donner la carte de Corps-Huit", hide: { not: { item: "carte_mention" } }, to: "Z_salon" },
      { label: "Écrire ta propre mention sur la carte vierge", to: "A_ecrire" },
    ] },
  A_ecrire: { act: "I", title: "Ta mention", place: "salon", ask: "mention",
    text: [
      "Tu prends le stylo-plume en or que te tend Madame Vernis. Il est lourd, et chaud de sa main. Quarante inaccessibles regardent des points différents de la pièce. Il faut une phrase en corps huit, qui dise au client ce qu'il n'achète pas, qui se termine par un point, et qui fasse vendre, sur une carte de bristol que l'on imprimera à quarante mille exemplaires.",
      { if: { item: "brouillon" }, text: "Dans ta poche, le brouillon recollé de Corps-Huit : deux alexandrins trop longs pour le corps huit." },
    ],
    choices: [{ label: "Tendre la carte à Madame Vernis", fx: { flag: "mention:tienne" }, to: "Z_salon" }] },
};
