// Les Trois Clefs d'Aiguemorne · act IV, the voice (1): the 6th of November, by day. The players' trunks, an envoy
// of the grand duke of Lithovia at the great gate, the count on horseback, and the drawing rooms of Brandelis while
// the hunt is out: a baroness, a portrait, the Syndic and his son-in-law, the Dean, a chevalier.
// Shared: monde:a4:presente (received: a seat near the count), monde:a4:clef_vue (the key on the portrait, told),
// monde:a4:hyacinthe_doute (the son-in-law has said he is afraid), monde:a4:syndic_doute (the Syndic watches the
// envoy), monde:a4:doyen_reconnu (the Dean knows who is under the fur), monde:a4:complice (the count has recognised
// the gambler of the marble table, and keeps it for himself).
// Personal: a4:v_maniere=hauteur|rondeur|silence, a4:v_gratis, a4:v_histoire_clef, a4:v_ornevault (challenged),
// a4:v_bruyere, a4:v_mot_doyen. Ends at A4v_soir (a4_voix2).
var VU = { any: [{ all: [{ role: "a3", is: "main" }, { has: "monde:a3:m_vu" }] }, { all: [{ role: "a3", is: "oeil" }, { has: "monde:a3:o_vu" }] }, { all: [{ role: "a3", is: "voix" }, { any: [{ has: "monde:a3:v_vue" }, { has: "monde:a3:doyen=soupcon" }] }] }] };
var TABLE = { all: [{ has: "a1:v_sang" }, { has: "monde:a1:invite_chasses" }] };
var CONNU_SYNDIC = { any: [{ all: [{ role: "a2", is: "voix" }, { has: "monde:a2:v_soupcon" }] }, { has: "monde:a4:syndic_vu" }] };
module.exports = {
  passages: {
    A4v_malles: { act: "IV", title: "Les malles des comédiens", place: "brandelis", ambiance: "nuit",
      fx: { until: 5, rest: true },
      text: [
        "Le fourgon des comédiens est sous la sixième arche, entre un carrosse et une chaise de poste. On y a peint, il y a longtemps, deux masques, l'un qui rit, l'autre qui pleure ; la pluie de vingt routes a fait couler le premier sur le second.",
        "Il y a de la lumière sous la bâche, à cinq heures du matin. Une femme y coud. Elle est grande, forte, cinquante ans, des bras de lavandière, un reste de rouge de la veille sur une joue ; elle a sur les genoux une robe de reine, et dans la bouche six épingles, à travers lesquelles elle te parle sans en perdre une.",
        "« C'est fermé. On joue le 10. Si c'est pour une place, on n'en vend pas : c'est monsieur le comte qui régale, en papier. »",
        "Elle s'appelle Rosalba Trinquet. Elle dirige depuis vingt ans la troupe des Comédiens de la Rousse : sept personnes, un âne, trois tragédies et une farce. Elle a derrière elle, cordées, étiquetées, quatre malles, dont elle sait le contenu à un galon près.",
        "Tu lui dis ce qu'il te faut. Un habit de cour. D'une cour où personne ne soit allé.",
        "Elle ôte ses épingles, une à une, et te regarde de bas en haut, en femme qui a habillé des rois sur des tréteaux de foire.",
      ],
      choices: [
        { label: "« Je suis de la partie. J'ai joué les valets et les rois, de foire en foire. »", if: { voie: "comedien" }, hide: { not: { voie: "comedien" } }, to: "A4v_trinquet", fx: { flag: "a4:v_gratis", ep: ["perso", 500] } },
        { label: "Poser cinq écus sur la malle, sans marchander", if: { gold: { min: 100 } }, why: "Cinq écus : c'est son prix, et elle l'a vu dans tes yeux avant que tu parles.", to: "A4v_trinquet", fx: { gold: -100 } },
        { label: "« Je vous le rends le 10, avec une histoire que vous jouerez dix ans. »",
          test: { dom: "social", diff: 10, label: "Louer un habit de cour contre une promesse", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { item: "fards" }, v: 5 }] },
          win: { fx: { flag: "a4:v_gratis", ep: ["perso", 600] }, to: "A4v_trinquet" }, lose: { fx: { gold: -40 }, to: "A4v_trinquet" } },
      ] },
    A4v_trinquet: { act: "IV", title: "La Lithovie", place: "brandelis", ambiance: "nuit",
      text: [
        { if: { all: [{ has: "a4:v_gratis" }, { voie: "comedien" }] }, text: "« De la partie. » Elle te prend le menton, te tourne la figure vers sa lanterne. « Oui. Tu as la bouche qui a servi. On se doit cela, entre gens de planches. »" },
        { if: { all: [{ has: "a4:v_gratis" }, { not: { voie: "comedien" } }] }, text: "Elle rit, d'un grand rire de poitrine. « Une histoire ! On m'a payée en poules, en fromages, en papier signé d'un B. Jamais encore en histoire. Je prends. Si elle est mauvaise, je te ferai siffler dans trois provinces. »" },
        { if: { not: "a4:v_gratis" }, text: "Elle fait disparaître ton argent dans son corsage, avec la prestesse d'une femme que l'on n'a pas souvent payée en vrai." },
        "Elle ouvre la troisième malle. Il en sort une odeur de camphre et de vieille gloire.",
        "« Voilà. C'est l'habit du Tartare, dans *Tamerlan vaincu*. Une houppelande de velours vert, fourrée de loup : c'est du lapin, on n'y voit rien aux bougies. Un bonnet à aigrette. Une chaîne, qui est du cuivre. Des bottes rouges. Personne n'a jamais vu de Tartare, on peut donc être Tartare tant qu'on veut ; mais *Tartare*, cela fait peur. Il te faut un nom de pays qui fasse loin sans faire peur. »",
        "Elle réfléchit, une épingle entre les dents.",
        "« La Lithovie. C'est derrière la Pologne, à gauche. Il y a un grand-duc, des forêts, des ours, et l'on y chasse l'aurochs à l'épieu : tu diras cela à un Brandelis, il te mettra à sa droite. Tu es son envoyé extraordinaire. On te dit *Votre Excellence* ; cela dispense de tout, même d'un nom. »",
        "Elle t'habille elle-même, debout dans le fourgon, à gestes brefs. Elle te serre la houppelande d'une ceinture, te pose le bonnet, recule.",
        "« L'habit y est. Reste la manière. Un ambassadeur, cela se joue de trois façons, et il n'y en a pas quatre. Choisis-en une, et n'en change plus jusqu'au rideau. »",
      ],
      choices: [
        { label: "La hauteur : peu de mots, le menton levé, et l'air de trouver la France petite", to: "A4v_chaise", fx: { set: { "a4:v_maniere": "hauteur" } } },
        { label: "La rondeur : rire fort, taper sur les épaules, trouver tout admirable", to: "A4v_chaise", fx: { set: { "a4:v_maniere": "rondeur" } } },
        { label: "Le silence : savoir vingt mots de français, les placer bien, et sourire pour le reste", to: "A4v_chaise", fx: { set: { "a4:v_maniere": "silence" } } },
      ] },
    A4v_chaise: { act: "IV", title: "Son Excellence", place: "brandelis", ambiance: "chateau",
      fx: { until: 6 },
      text: [
        "On ne devient pas ambassadeur dans une remise. Il faut arriver. Mademoiselle Trinquet t'a prêté pour une heure la chaise de la troupe, repeinte à la colle, et son Scapin pour cocher, en livrée de tragédie. On est sorti par la porte des cuisines, à la nuit ; on a fait le tour par le village ; et l'on revient par la chaussée de l'étang, au grand trot, lanternes allumées, comme le jour se lève.",
        "Scapin fait claquer son fouet sous la voûte. Il a une voix à remplir une halle.",
        "« Place ! Son Excellence l'envoyé extraordinaire de Son Altesse le grand-duc de Lithovie, venant de sa cour, pour les Chasses de M. le Connétable ! »",
        "Maître Ravaudet sort de sa loge en pantoufles, son registre sur le bras. Il regarde la chaise, la fourrure, les bottes rouges. Ses yeux se remplissent.",
        "« Un ambassadeur », dit-il faiblement. « Avec sa suite ? »",
      ],
      choices: [
        { label: "Répondre selon ta manière",
          test: { dom: "social", diff: 10, label: "Entrer à Brandelis par la grande porte, sous un bonnet de théâtre", help: [{ if: { voie: "comedien" }, v: 20 }, { if: { item: "fards" }, v: 5 }, { if: { item: "loup_velours" }, v: 0 }, { if: { has: "a4:v_maniere=hauteur" }, v: 5 }, { if: { voie: "bretteur" }, v: 5 }] },
          win: { fx: { flag: "monde:a4:presente", ep: ["perso", 1000] }, to: "A4v_ravaudet" }, lose: { to: "A4v_ravaudet" } },
      ] },
    A4v_ravaudet: { act: "IV", title: "Une suite restée à la frontière", place: "brandelis", ambiance: "chateau",
      text: [
        { if: { has: "a4:v_maniere=hauteur" }, text: "Tu ne tournes pas la tête. Tu laisses tomber, vers le pavé, trois mots : « À la frontière. » Tu en ajoutes deux, après un temps : « La fièvre. » Un envoyé de Lithovie ne s'explique pas devant un homme en pantoufles." },
        { if: { has: "a4:v_maniere=rondeur" }, text: "Tu sautes à terre, tu lui prends les deux mains, tu les secoues. « Ma suite ! Trente personnes, mon ami, trente ! Je les ai laissées à la frontière, avec la fièvre, les chevaux, et la moitié de mon linge. Je n'ai pas voulu manquer le Dix-Cors. Vous me logerez bien dans un coin ? »" },
        { if: { has: "a4:v_maniere=silence" }, text: "Tu souris. Tu cherches, visiblement, dans une langue qui n'est pas la tienne. « Suite… malade. Loin. » Tu montres le nord, avec regret. « Moi, seul. Pardon. »" },
        { outcome: "win", text: "L'intendant fait le compte, en un éclair, de ce que coûte un ambassadeur sans suite contre un ambassadeur avec. Deux larmes roulent, qui sont cette fois de soulagement. « Votre Excellence est la bienvenue. Je la mets au Héron, sur la cour. Monsieur le comte monte à cheval à l'instant : si Votre Excellence veut bien se montrer au perron, elle soupera ce soir à sa gauche. »" },
        { outcome: "lose", text: "L'intendant te regarde un peu trop longtemps. Il regarde la chaise, où la colle fraîche a coulé sur une roue ; le cocher, qui a aux pieds des souliers de valet de comédie. Il n'a pas été vingt-deux ans l'intendant d'un homme que tout le monde vole sans avoir appris à compter les galons. « Votre Excellence est la bienvenue », dit-il enfin, parce qu'un hôte de plus ou de moins ne changera rien au total. « Je la mets au Héron. Pour la table de Monsieur, nous verrons : il y a des préséances. »" },
        "Il écrit dans son registre : *Lithovie, 1.* Il hésite sur la colonne de la dépense, et y met un point d'interrogation.",
      ],
      choices: [{ label: "Aller au perron, où l'on sonne le boute-selle", to: "A4v_perron", big: true }] },
    A4v_perron: { act: "IV", title: "Le comte à cheval", place: "brandelis", ambiance: "chateau",
      text: [
        "La cour est pleine de chevaux qui dansent. Les trompes sonnent ; les valets courent ; une amazone ajuste son gant. Le comte de Brandelis est déjà en selle, sur un grand bai brun, une cuisse de volaille à la main, et il gouverne tout ce désordre de la voix, sans cesser de manger.",
        "Il voit sur son perron une houppelande verte, un bonnet à aigrette, des bottes rouges. Il arrête son cheval net.",
        "« Qu'est-ce que c'est que ce perroquet ? »",
        "« L'envoyé de Lithovie, monsieur le comte », souffle l'intendant.",
        "« De quoi ? »",
        { if: { has: "a4:v_maniere=hauteur" }, text: "Tu descends deux marches. Tu t'arrêtes à la troisième, pour rester plus haut que sa botte. « Mon maître chasse l'aurochs, à l'épieu, dans des forêts où celle-ci tiendrait trois fois. Il a voulu savoir comment un Brandelis sert un cerf. Il m'a dit : *va voir, et ne reviens pas si c'est moins bien que chez nous.* »" },
        { if: { has: "a4:v_maniere=rondeur" }, text: "Tu descends les marches en ouvrant les bras. « De Lithovie ! Derrière la Pologne, à gauche ! On y chasse l'aurochs à l'épieu, monsieur le comte, et l'on y boit après ; mais mon maître a entendu parler de vos chiens jusque dans ses neiges, et il m'a dit : *va, et rapporte-moi un chiot, dusses-tu le voler.* »" },
        { if: { has: "a4:v_maniere=silence" }, text: "Tu descends les marches. Tu t'inclines, la main sur le cœur, à la mode d'un pays que tu inventes. « Lithovie. Loin. Forêt… grande. » Tu fais, des deux mains, des cornes d'une envergure effrayante. « Aurochs. Mon maître, épieu. Vous : cerf, dague. Lui veut savoir. Moi, voir. »" },
        { if: TABLE, text: "Il t'écoute. Et tu vois, pendant que tu parles, son sourcil coupé se froncer, ses yeux s'arrêter sur ta bouche, sur tes mains ; puis toute sa figure s'éclairer d'un coup, comme une salle où l'on apporte les flambeaux. Il se penche sur l'encolure, jusqu'à ton oreille. Il sent le cuir et le vin du matin." },
        { if: TABLE, text: "« La table de marbre », dit-il tout bas. « Aiguemorne, la Saint-Fer. Vous m'avez pris trente sous. Hier, vous portiez la trousse d'un horloger, et ce matin vous êtes la Lithovie. » Ses épaules tremblent : il rit, sans bruit, de tout son corps. « Ne dites rien. Ne me dites surtout pas pourquoi. C'est la première chose amusante qui m'arrive depuis que ce gros homme compte mes arbres. Je vous garde. Vous souperez à ma gauche, vous jouerez contre moi, et si vous me volez quelque chose, tâchez que ce soit avec esprit. »" },
        { if: { not: TABLE }, text: "Il t'écoute, la tête penchée, en homme qui juge un cheval qu'on lui amène. Puis il éclate de rire, à faire lever les corneilles des sept tours. « L'aurochs ! À l'épieu ! Messieurs, voilà un pays où l'on sait vivre ! » Il te tend, du haut de sa selle, une main large comme un battoir. « Excellence, vous êtes chez vous. On chasse petit aujourd'hui : un daguet. Reposez-vous. Ce soir, vous me direz comment on sert un aurochs, et je vous dirai si je vous crois. »" },
        "Il pique. La chasse s'engouffre sous la voûte, dans un tonnerre de fers, et la cour, d'un coup, est vide.",
      ],
      choices: [
        { label: "Passer la grande porte, pour la première fois de ta vie par le devant", to: "A4v_jour", big: true, if: { not: TABLE }, hide: TABLE },
        { label: "Passer la grande porte, avec son rire dans le dos", to: "A4v_jour", big: true, if: TABLE, hide: { not: TABLE }, fx: { flag: "monde:a4:complice", ep: ["perso", 600] } },
      ] },

    // ───────────────────────────── The drawing rooms ─────────────────────────────
    A4v_jour: { act: "IV", title: "Les salons de Brandelis", place: "brandelis", ambiance: "chateau", hub: true, backName: "le grand salon",
      text: [
        { first: true, text: "Un château dont les hommes sont à la chasse appartient, jusqu'au soir, à ceux qui restent : les femmes, les vieillards, les créanciers. On t'a ouvert le grand salon. Il a douze fenêtres sur l'étang, un plafond où des dieux bleus s'écaillent, et un mobilier dépareillé, fait de ce que l'on n'a pas pu vendre : des fauteuils sublimes, auxquels il manque un pied." },
        { first: true, text: "On t'y regarde. Une houppelande verte, à Brandelis, par un matin de novembre, est une distraction que l'on n'espérait plus. Tu avances là-dedans comme sur une scène dont tu ne saurais pas la pièce, avec cette consolation que personne d'autre ne la sait." },
        { again: true, text: "Le grand salon, ses douze fenêtres, ses dieux écaillés. Les dames brodent ; un laquais remet du bois. On te fait place avec la curiosité polie que l'on a pour une bête rare." },
      ],
      choices: [
        { label: "Faire ta cour à la dame en amazone, qui n'a pas suivi la chasse", to: "A4v_baronne", once: true },
        { label: "Te promener dans la galerie des Trophées", to: "A4v_galerie", once: true },
        { label: "Aborder le gros homme en velours prune, qui regarde les tapisseries de près", to: "A4v_syndic", once: true },
        { label: "Tenir compagnie au jeune homme blond, qui s'ennuie à une fenêtre", to: "A4v_hyacinthe", once: true },
        { label: "À midi, te trouver sur le passage de Monseigneur", to: "A4v_doyen", once: true },
        { label: "Répondre au gentilhomme qui te toise depuis une heure", to: "A4v_ornevault", once: true },
        { label: "Attendre le retour de la chasse", to: "A4v_soir", big: true, if: { any: [{ seen: "A4v_baronne" }, { seen: "A4v_galerie" }, { seen: "A4v_syndic" }] }, why: "La journée est longue, et tu n'as encore parlé à personne." },
      ] },

    A4v_baronne: { act: "IV", title: "La baronne de Hautecombe", place: "brandelis", ambiance: "chateau",
      fx: { flag: "a4:v_histoire_clef", clue: "s4_jouee" },
      text: [
        "Elle a quarante-cinq ans, le teint des femmes qui vivent à cheval, et un pied dans une éclisse : sa jument s'est dérobée hier devant un fossé. Elle est étendue sur une bergère, furieuse, une tapisserie abandonnée sur les genoux.",
        "« Asseyez-vous, Excellence. Parlez-moi de vos ours. Non : ne m'en parlez pas, vous mentiriez, tous les voyageurs mentent. Laissez-moi plutôt vous dire chez qui vous êtes, puisque vous arrivez. C'est la seule chose que je puisse encore faire à cheval : médire. »",
        "Elle médit bien, sans méchanceté, en amie de trente ans.",
        "« Thibert est le meilleur homme du monde, et le plus perdu. Il a tout joué. Vous verrez ce soir : il jouerait sa chemise, si quelqu'un mettait une chemise en face. Il n'y a qu'une chose qu'il ne joue pas. » Elle touche son cou. « Vous avez vu son ruban ? Dessous, il y a la clef de la ville. Celle du Sang. On ne vous a pas dit cela en Lithovie ? »",
        "Tu fais l'ignorance. Elle est ravie.",
        "« Il l'a jouée une fois. Il y a quinze ans, ivre mort, à quatre heures du matin, contre le chevalier d'Ornevault, qui est là-bas et qui vous regarde de travers. Il avait tout perdu, il a arraché cela de son cou, il l'a jeté sur la table : *Mon passe-dix contre ta soirée.* Il a fait neuf. »",
        "Elle laisse durer le silence, en conteuse.",
        "« Ornevault a ramassé la clef. Il l'a gardée toute la nuit dans son poing, assis sur une chaise, devant la porte de Thibert qui cuvait. Au matin, il est entré, il la lui a remise dans la main, et il lui a dit : *Thibert, on ne garde pas cela. Mais si tu la rejoues, je te tue.* Le jour même, Thibert a fait venir un armurier d'Aiguemorne, et il s'est fait souder cette chaîne. Comme on se fait attacher au mât. »",
        "Elle reprend sa tapisserie.",
        "« Voilà pourquoi je l'aime. Il sait très exactement ce qu'il vaut, et il a pris ses précautions contre lui-même. »",
      ],
      choices: [{ back: "A4v_jour" }] },

    A4v_galerie: { act: "IV", title: "Une clef peinte", place: "brandelis", ambiance: "chateau",
      fx: { flag: ["monde:a4:clef_vue", "a4:v_bruyere"], clue: "s4_portrait" },
      text: [
        "On te laisse aller où tu veux : un ambassadeur visite. Tu prends la galerie des Trophées par le bout du jour.",
        "Les trois cents massacres te regardent passer. Ils sont, à la lumière, moins terribles qu'aux lanternes, et plus tristes : on voit la poussière dans les orbites, les plaques de cuivre vertes, et, sous chacune, sur le plancher, la petite tache que fait en trois siècles une goutte tombant d'un os.",
        "Le portrait de la comtesse douairière est au milieu. Tu t'arrêtes devant en personne qui admire la peinture, les mains derrière le dos.",
        "Le peintre aimait les étoffes et les clefs. Le trousseau de la châtelaine est rendu maillon par maillon ; et la clef rouge, la courte, est tournée de trois quarts, comme s'il avait voulu que l'on pût s'en servir. L'anneau en cœur, plein. Une tige forée. Un panneton à plusieurs dents, dont la peinture, de près, se résout en quatre touches de brun, peut-être cinq. Tu la récites trois fois dans ta tête, comme un rôle.",
        "Sous le cadre, le bouquet de bruyère est frais. On l'a changé ce matin : il y a de la rosée sur les brins, et sur le plancher, de la galerie jusqu'à l'escalier, les marques humides de deux grandes bottes, que le jour n'a pas encore séchées.",
        "Une servante passe avec un balai. Elle fait un détour pour ne pas marcher dans ces traces-là.",
      ],
      choices: [{ back: "A4v_jour" }] },

    A4v_syndic: { act: "IV", title: "Un homme qui fait un inventaire", place: "brandelis", ambiance: "chateau",
      text: [
        "Maître Quincarnon est debout devant une tapisserie des Flandres, le nez à six pouces de la laine. Il en soulève un coin, regarde l'envers, compte les fils. Il tient à la main un petit carnet, où il vient d'écrire quelque chose.",
        "« Excellence ! » Il s'est retourné tout d'une pièce, rond, rose, cordial, la main tendue. « Polycarpe Quincarnon, Syndic des Maîtres du Fer d'Aiguemorne. La Lithovie ! Vous avez du fer, là-bas ? Non. Vous avez des forêts : donc vous avez du charbon de bois, et vous achetez votre fer aux Suédois, qui vous étranglent. Je vous le fais à un tiers de moins, rendu sur la Baltique. Parlons-en. »",
        "Ses petits yeux vifs ne sont pas dans son sourire. Ils te parcourent, de l'aigrette aux bottes, avec la rapidité d'un homme qui estime un lot.",
        { if: CONNU_SYNDIC, text: "Ils s'arrêtent une seconde de trop sur ta figure. Tu connais ce regard : il l'avait à Ferrières, pour quelqu'un qu'il essayait de se rappeler." },
        "Tu lui réponds. Il faut répondre à cet homme comme on répond à une douane : sans rien déclarer.",
      ],
      choices: [
        { label: "Marchander son fer, pied à pied, en personne qui a des ordres",
          test: { dom: "social", diff: 10, label: "Tenir tête au Syndic sur son propre terrain", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { voie: "alchimiste" }, v: 10 }, { if: { has: "a4:v_maniere=rondeur" }, v: 5 }, { if: CONNU_SYNDIC, v: -15 }, { if: { has: "monde:a2:clef=prise" }, v: -5 }] },
          win: { fx: { ep: ["perso", 900], clue: "s4_inventaire" }, to: "A4v_syndic_dit" }, lose: { fx: { flag: "monde:a4:syndic_doute" }, to: "A4v_syndic_dit" } },
        { label: "T'excuser : ton maître ne t'a pas envoyé{e} pour le fer", to: "A4v_jour" },
      ] },
    A4v_syndic_dit: { act: "IV", title: "Rendu sur la Baltique", place: "brandelis", ambiance: "chateau",
      text: [
        { outcome: "win", text: "Tu discutes le prix du quintal, le fret, le change. Tu ne sais rien du fer ; mais tu as écouté pendant huit jours, à Ferrières, des gens qui ne parlaient que de cela, et il t'en revient assez pour dire non trois fois de suite, au bon endroit. Il s'échauffe. Il aime qu'on lui résiste sur un chiffre : cela le repose de tous ceux qui lui cèdent." },
        { outcome: "win", text: "« Vous êtes dur, Excellence ! Tant mieux. Je n'aime traiter qu'avec des gens durs ; les autres, je les achète. » Il baisse la voix, en homme qui fait une faveur. « Tenez, regardez autour de vous. Cette tapisserie : six cents écus. Ce plafond : rien, c'est du plâtre. Les bois, dehors : je les ai fait mesurer ce matin. Tout ce que vous voyez sera à moi à la Saint-Éloi, de la cave au coq du clocher, et le maître avec. Il ne le sait pas encore tout à fait. Il le saura le 10. » Il referme son carnet. « Voilà comment je travaille. Dites-le à votre grand-duc : il saura à qui il achète. »" },
        { outcome: "lose", text: "Tu te trompes sur le quintal. Ce n'est rien : un chiffre pour un autre. Mais il s'est arrêté de parler. Il te regarde avec une attention aimable, la tête un peu de côté." },
        { outcome: "lose", text: "« Curieux », dit-il. « Vous comptez en livres de Ferrières. Soixante-douze à l'arrobe : il n'y a que chez moi qu'on compte ainsi, c'est moi qui l'ai fixé. Je ne savais pas que l'usage en fût passé jusqu'en Lithovie. » Il sourit. Il n'ajoute rien. Il écrit un mot dans son carnet, au-dessous de la tapisserie, et te salue très bas." },
      ],
      choices: [{ back: "A4v_jour" }] },

    A4v_hyacinthe: { act: "IV", title: "Le Gouverneur perpétuel", place: "brandelis", ambiance: "chateau",
      text: [
        "Maître Hyacinthe Belorgey est dans une embrasure, le front à la vitre. Il regarde l'étang. Il a vingt-six ans, de la soie gris perle, et la mine d'un écolier que l'on a mis au premier rang.",
        "Il te salue avec une politesse parfaite, et te demande aussitôt, parce que c'est la question qu'il se pose à lui-même depuis des semaines :",
        "« Votre grand-duc, Excellence. Comment l'est-il devenu ? »",
        "« Par son père. »",
        "« Ah. » Il a l'air envieux. « C'est le plus simple. On n'a pas à se demander si on le mérite. »",
        "Il ne sait pas à qui il parle ; un étranger de passage, qui repartira derrière la Pologne. C'est à ces gens-là que l'on dit les choses.",
        { if: { has: "monde:celeste:libre" }, text: "« Je devais me marier. Elle est partie. Elle a laissé ses souliers sur une borne, les pointes vers la maison. On me dit qu'elle reviendra, quand je serai quelque chose. » Il fait de la buée sur la vitre, et l'essuie. « Je crois qu'elle est partie précisément pour cela. »" },
        { if: { has: "monde:celeste:trahie" }, text: "« Je me marie à Noël. Elle ne me parle plus. Elle ne parle plus à personne : il lui est arrivé quelque chose, à l'automne, que son père appelle une imprudence. » Il fait de la buée sur la vitre. « Je voudrais lui demander pardon, et je ne sais pas de quoi. »" },
      ],
      choices: [
        { label: "« Et vous, monsieur, qu'allez-vous devenir ? »",
          test: { dom: "social", diff: 5, label: "Faire dire à un honnête garçon ce qu'il n'ose pas penser", help: [{ if: { voie: "rebouteux" }, v: 15 }, { if: { voie: "comedien" }, v: 5 }, { if: { has: "a4:v_maniere=silence" }, v: 10 }, { if: { has: "monde:celeste:libre" }, v: 5 }] },
          win: { fx: { flag: "monde:a4:hyacinthe_doute", clue: "s4_hyacinthe", ep: ["perso", 1000] }, to: "A4v_hyacinthe_dit" }, lose: { to: "A4v_hyacinthe_dit" } },
        { back: "A4v_jour" },
      ] },
    A4v_hyacinthe_dit: { act: "IV", title: "À jamais", place: "brandelis", ambiance: "chateau",
      text: [
        { outcome: "win", text: "Il regarde derrière lui. Le gros homme est à l'autre bout du salon, le nez dans une tapisserie." },
        { outcome: "win", text: "« Gouverneur. De ma ville. Pour sept ans ; et puis pour sept ans ; et puis… » Il a un petit geste de la main, qui s'en va. « C'est une machine qui le dira. Elle le dira toujours. Je me suis renseigné, auprès d'un ouvrier : elle le dira même si je suis mauvais. Même si je deviens fou. Même si l'on me met à ma place un mannequin de son, avec mon habit. » Il rit, mal. « Savez-vous ce que c'est, Excellence, que d'être nommé par quelque chose qui ne peut pas vous renvoyer ? Mon beau-père appelle cela la tranquillité. Moi, la nuit, j'appelle cela autrement. »" },
        { outcome: "win", text: "Il se tait. Puis, très vite, tout bas : « Si quelqu'un, la Nuit des Clefs, me demandait devant la ville si je le veux… je ne sais pas ce que je répondrais. Personne ne me le demandera. Ce n'est pas prévu. »" },
        { outcome: "lose", text: "« Ce que l'on fera de moi, Excellence. » Il s'est redressé ; la politesse est revenue sur sa figure comme un store. « J'ai l'honneur d'être destiné à une charge, dans ma cité. Je m'y prépare. » Il te parle ensuite de la pluie, de l'étang, des chasses, pendant un quart d'heure, avec une application désolée. Tu l'as regardé trop en face. Il y a des gens que l'on ne confesse que de profil." },
      ],
      choices: [{ back: "A4v_jour" }] },

    A4v_doyen: { act: "IV", title: "Ce que l'on dit en Lithovie", place: "brandelis", ambiance: "chateau",
      fx: { until: 12 },
      text: [
        "Midi. On a entendu les mules sur la chaussée. Tout ce qui reste au château s'est porté dans le vestibule, pour voir entrer un évêque : c'est, après un ambassadeur, la seconde distraction du jour.",
        "Monseigneur d'Ossevaux traverse cette haie comme un cierge que l'on porte. Il bénit à droite, à gauche. Il a déjà regardé l'horloge, dans la cour ; il a les yeux d'un homme qui vient d'avoir un plaisir.",
        "Maître Ravaudet te présente, parce que le protocole le veut : *Son Excellence l'envoyé de Lithovie.*",
        "Les yeux très clairs se posent sur la houppelande, sur l'aigrette. Ils ne s'y arrêtent pas ; ils vont à ta figure, et ils y restent avec douceur.",
        "« La Lithovie », dit-il. « Je n'ai jamais eu personne de ce pays. Dites-moi, Excellence : chez vous, que dit-on, quand on meurt ? »",
        "Tout le vestibule écoute. On trouve la question étrange ; on ne la trouvera plus étrange dans une heure, quand on saura qu'il la pose à tout le monde.",
      ],
      choices: [
        { label: "« On dit : *Rendez l'ours à la forêt.* C'est notre proverbe. »",
          test: { dom: "social", diff: 10, label: "Mentir au Doyen des Morts sur la manière de mourir", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { has: "a4:v_maniere=hauteur" }, v: 5 }, { if: VU, v: -20 }, { if: { has: "monde:a4:doyen_reconnu" }, v: -10 }] },
          win: { fx: { set: { "a4:v_mot_doyen": "ours" }, ep: ["perso", 1000] }, to: "A4v_doyen_rep" }, lose: { fx: { set: { "a4:v_mot_doyen": "ours" }, flag: "monde:a4:doyen_reconnu" }, to: "A4v_doyen_rep" } },
        { label: "« Rien, Monseigneur. Chez nous, on meurt en écoutant. »",
          test: { dom: "social", diff: 5, label: "Lui dire la seule chose qu'il respecte", help: [{ if: { voie: "rebouteux" }, v: 10 }, { if: { has: "a4:v_maniere=silence" }, v: 10 }, { if: VU, v: -20 }, { if: { has: "monde:a4:doyen_reconnu" }, v: -10 }] },
          win: { fx: { set: { "a4:v_mot_doyen": "rien" }, ep: ["perso", 1000] }, to: "A4v_doyen_rep" }, lose: { fx: { set: { "a4:v_mot_doyen": "rien" }, flag: "monde:a4:doyen_reconnu" }, to: "A4v_doyen_rep" } },
      ] },
    A4v_doyen_rep: { act: "IV", title: "Un évêque en visite", place: "brandelis", ambiance: "chateau",
      text: [
        { outcome: "win", if: { has: "a4:v_mot_doyen=ours" }, text: "« *Rendez l'ours à la forêt.* » Il le répète, en le goûtant. L'aumônier a tiré son carnet. « C'est très beau. C'est d'un peuple qui sait qu'on lui a prêté quelque chose. Écrivez, mon fils : *Lithovie.* » Il te bénit, d'un geste court, et passe. Tu viens d'inventer un proverbe à un pays qui n'existe pas, et il est dans le carnet d'un évêque, entre une chèvre et une lampe." },
        { outcome: "win", if: { has: "a4:v_mot_doyen=rien" }, text: "« En écoutant. » Il incline sa tête blanche. « Alors, Excellence, nous sommes du même pays, vous et moi, quel que soit le vôtre. » L'aumônier écrit. Monseigneur te bénit, d'un geste court, et passe." },
        { outcome: "lose", text: "Il t'écoute jusqu'au bout. Il fait signe à l'aumônier d'écrire. Puis il s'approche d'un pas, de ce pas qui ne fait aucun bruit, et il te parle sous le bord de ton bonnet, pour toi seul{e}." },
        { outcome: "lose", text: "« C'est fort bien dit. Mais j'ai déjà votre réponse, mon enfant. La vraie. Vous me l'avez donnée ailleurs, sous un autre habit. » Il sourit, du coin de la bouche. « Rassurez-vous : la fourrure vous va, et je suis chez un autre. Je voudrais seulement vous voir un soir, à la chambre des Évêques, avant le bal. Vous ressortirez, je vous en donne ma parole de prêtre. J'ai à vous dire une chose qui vous arrangera. »" },
        "Il s'éloigne dans le vestibule, vers le perron, où on lui amène soixante chiens à bénir.",
      ],
      choices: [{ back: "A4v_jour" }] },

    A4v_ornevault: { act: "IV", title: "Le chevalier d'Ornevault", place: "brandelis", ambiance: "chateau",
      fx: { flag: "a4:v_ornevault" },
      text: [
        "Il est adossé à la cheminée depuis une heure, les bras croisés, et il ne t'a pas quitté{e} des yeux. C'est un homme de cinquante ans, sec, grisonnant, en habit cramoisi sans un galon, avec une figure en lame de couteau et une épée que l'on devine avoir servi. Il n'a pas suivi la chasse : une vieille balle, dans la hanche, lui interdit le cheval par temps humide.",
        "Tu vas à lui, puisqu'il faut bien.",
        "« Excellence. » Il ne se décroise pas. « J'ai fait six campagnes. J'ai vu la Pologne. J'ai regardé ce qu'il y avait derrière, à gauche : il y a un marais, et après le marais, des Russes. Je n'y ai pas vu de grand-duc. »",
        "Sa voix est basse, sans insolence. Il parle pour toi seul{e}.",
        "« Je vais vous dire qui je suis, pour que nous nous entendions. Je suis l'ami de cet homme. Il n'en a qu'un. Il a des compagnons, des créanciers, des chiens ; il a moi. Depuis quinze ans, je regarde qui s'assied à sa table. J'ai vu passer des barons qui avaient des dés dans la manche, un abbé qui marquait les cartes avec l'ongle, et une marquise qui n'était ni l'une ni l'autre. Je les ai tous reconduits à la chaussée. »",
        "Il te regarde les mains.",
        "« Vous souperez ce soir à sa gauche. Vous jouerez : il vous le demandera. Jouez droit, perdez ce que vous voudrez, et repartez pour votre marais ; je vous tiendrai moi-même l'étrier. Mais si je vois, ce soir, un de vos doigts faire une chose qu'un doigt ne doit pas faire, je vous prie de me rejoindre après souper dans la galerie, sous les trophées. Avec ce que vous portez au côté, si c'est autre chose qu'un accessoire. »",
      ],
      choices: [
        { label: "« Monsieur, je serai dans la galerie après souper, quoi que fassent mes doigts. »", to: "A4v_jour", fx: { flag: "a4:v_defi", ep: ["perso", 400] } },
        { label: "« Je jouerai droit, chevalier. Vous êtes la première personne ici qui m'ait parlé de lui sans rien lui vouloir. »", to: "A4v_jour", fx: { flag: "a4:v_paix", ep: ["perso", 400] } },
      ] },
  },

  extras: {
    people: {
      trinquet: { name: "Rosalba Trinquet", aka: ["Mademoiselle Trinquet", "la Trinquet", "Rosalba"], qui: "La directrice des Comédiens de la Rousse, venus pour le bal.", f: true,
        aspect: { allure: "grande, forte, des bras de lavandière", visage: "un reste de rouge sur une joue", habits: "caraco, tablier à épingles", signe: "parle avec six épingles aux dents", voix: "de poitrine, faite pour les halles" },
        desc: "Vingt ans de routes, sept comédiens, un âne. Elle sait le contenu de ses quatre malles à un galon près, et ce que vaut un mensonge bien habillé." },
      ornevault: { name: "Le chevalier d'Ornevault", aka: ["Ornevault", "le chevalier", "d'Ornevault"], qui: "Le seul ami du comte de Brandelis.", f: false,
        aspect: { allure: "sec, droit, une hanche raide", visage: "en lame de couteau, grisonnant", habits: "cramoisi sans un galon", signe: "épée qui a servi", voix: "basse, sans insolence" },
        desc: "Six campagnes. Il a gagné une nuit la clef de Sang aux dés, et l'a rendue au matin. Depuis, il regarde qui s'assied à la table de son ami." },
    },
    clues: {
      s4_jouee: { rev: "S", text: "Le comte a joué la clef de Sang une fois, il y a quinze ans, ivre, contre le chevalier d'Ornevault. Il a perdu. Le chevalier la lui a rendue au matin : « Si tu la rejoues, je te tue. » Le jour même, il s'est fait souder la chaîne." },
      s4_portrait: { rev: "S", text: "Sur le portrait de la comtesse douairière, la clef de Sang, à sa ceinture : rouge sombre, courte, l'anneau en cœur plein, quatre dents, peut-être cinq." },
      s4_inventaire: { rev: "S", text: "Le Syndic, devant une tapisserie de Brandelis : « Tout ce que vous voyez sera à moi à la Saint-Éloi, de la cave au coq du clocher, et le maître avec. Il le saura le 10. »" },
      s4_hyacinthe: { rev: "S", text: "Hyacinthe Belorgey, le gendre : « Être nommé par quelque chose qui ne peut pas vous renvoyer. Si quelqu'un, la Nuit des Clefs, me demandait devant la ville si je le veux, je ne sais pas ce que je répondrais. »" },
    },
  },
};
