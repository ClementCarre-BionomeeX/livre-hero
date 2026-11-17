// L'Île Folle-Aiguille · act III, chapter III.2 followed by the doctor: the Sargasso calms. The first bleeding gums
// (what was bought at Morlenc and Brisegrève now counts), the baron raving in a fever about a book bound in sharkskin,
// a loaded pistol in a hammock where none should be (complot:soupcon), the pilot who knows a voice, the cook asking a
// doctor how long a consumptive girl may live in the sun. Two ports of call: the Red Reef (xp_pierre.js) and the
// Shaper's islet (xf_faconneur.js).
var JOURS = [{ seen: "A3w_scorbut" }, { seen: "A3w_baron" }, { seen: "A3w_hamac" }, { seen: "A3w_brousse" }, { seen: "A3w_fargue" }, { seen: "XJ_bord" }];
module.exports = {
  passages: {
    A3w_debut: { act: "III", title: "La marmite", place: "sargues", ambiance: "mer",
      text: [
        "Le vent meurt au sud de Brisegrève, et la chaleur s'installe dans le faux-pont comme une locataire qui ne paiera jamais. L'infirmerie, sous la ligne de flottaison, devient une étuve. L'eau de la mer, de l'autre côté du bordé, est tiède ; le bois sue ; les fioles se couvrent de buée ; le laudanum épaissit ; les sangsues meurent. Victorine travaille en chemise, les manches roulées, les cheveux noués sur le haut de la tête, et boit sa pinte d'eau par gorgées comptées, comme les autres.",
        "Elle connaît les calmes par les livres. Elle sait ce qui y vient, dans l'ordre : la soif, la colère, la fièvre, et en dernier, quand le biscuit a pourri et que le lard a tourné, les gencives qui saignent.",
      ],
      choices: [{ label: "Attendre le vent", to: "A3w_jours" }] },

    A3w_jours: { act: "III", title: "La marmite", place: "sargues", hub: true, noLead: true, backName: "l'infirmerie", ambiance: "mer",
      text: [
        { first: true, text: "Les jours de calme se ressemblent tant qu'on les perd. Le matin, la brume sur les herbes ; à midi, le soleil qui tombe comme un couvercle ; le soir, le ciel de cuivre. Les hommes deviennent silencieux, puis mauvais, puis malades. L'infirmerie ne désemplit pas : insolations, coliques, coups de couteau dont personne ne sait l'origine." },
        { again: true, text: "Un jour de plus dans la marmite. Le soleil, les herbes, la soif." },
      ],
      choices: [
        { label: "Examiner les bouches de l'avant", to: "A3w_scorbut", hide: { seen: "A3w_scorbut" } },
        { label: "Soigner le baron, qui a la fièvre", to: "A3w_baron", hide: { seen: "A3w_baron" } },
        { label: "Descendre soigner le canonnier, frappé d'insolation", to: "A3w_hamac", hide: { seen: "A3w_hamac" }, if: { count: JOURS, min: 1 }, why: "Personne n'est encore tombé." },
        { label: "Parler au pilote", to: "A3w_brousse", hide: { any: [{ seen: "A3w_brousse" }, { not: { has: "brousse:abord" } }] } },
        { label: "Recevoir le maître-coq, qui apporte un bouillon", to: "A3w_fargue", hide: { seen: "A3w_fargue" } },
        { label: "Surveiller son aide-chirurgien, la nuit", to: "XJ_bord", hide: { any: [{ seen: "XJ_bord" }, { not: { has: "vauclair:engage" } }] } },
        { label: "L'Écueil-Rouge en vue", to: "A3w_ecueil", big: true, hide: { seen: "A3w_ecueil" }, if: { count: JOURS, min: 2 }, why: "Le navire n'a pas encore assez avancé." },
        { label: "L'îlot en vue", to: "A3w_ilot", big: true, if: { all: [{ seen: "A3w_ecueil" }, { count: JOURS, min: 4 }] }, why: "L'îlot est encore loin dans les herbes." },
      ] },

    A3w_scorbut: { act: "III", title: "Les gencives", place: "cormorane", ambiance: "mer",
      text: [
        "Elle fait défiler l'avant à l'infirmerie, homme par homme, et elle regarde les bouches, à la lanterne, en tenant les lèvres écartées avec une spatule de buis. Les hommes rient, gênés, comme des chevaux chez le maquignon.",
        "Chez trois d'entre eux, les gencives sont gonflées, violacées, et saignent au premier toucher. Chez Gobert, une vieille cicatrice de coutelas, qui datait de vingt ans, s'est rouverte toute seule sur l'avant-bras. Le scorbut. Il arrive toujours en même temps que l'ennui, et il prend les mêmes.",
        { if: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }] }, text: "Elle a ce qu'il faut. Une cuiller de jus de citron par homme et par jour, dans la pinte d'eau, sous ses yeux, et l'on avale sans grimacer ou l'on n'a pas d'eau. Les hommes jurent, avalent, et en une semaine les gencives dégonflent." },
        { if: { not: { any: [{ has: "pharmacie:citron" }, { has: "citrons:victorine" }, { has: "citrons:mousse" }] } }, text: "Elle n'a rien. Ni citrons, ni oranges, ni choucroute. Elle fait bouillir les dernières pommes de terre germées, fait mâcher aux malades les herbes des Sargues, qui ne servent à rien, et elle note dans son carnet, à la date du jour, combien de semaines il reste jusqu'à l'île. Elle refait le compte trois fois. Il ne change pas." },
      ],
      choices: [{ label: "Noter les noms des malades", fx: { flag: "scorbut:vu" }, to: "A3w_scorbut_fin" }] },
    A3w_scorbut_fin: { act: "III", title: "Les gencives", place: "cormorane", ambiance: "mer",
      text: [
        "Le soir, à l'avant, on parle du scorbut. On en parle comme d'un passager. Le maître-coq passe dans les plats de huit avec une marmite de soupe aux pois et un sourire, et dit qu'il a vu pire, et qu'on s'en sort toujours si l'on chante. Il chante. On rit. Victorine, à l'arrière, entend rire, et elle pense que cet homme vaut, pour le moral d'un équipage, toute sa pharmacie.",
      ],
      choices: [{ back: "A3w_jours" }] },

    A3w_baron: { act: "III", title: "La fièvre du baron", place: "cormorane", ambiance: "nuit",
      fx: { meet: "claviere" },
      text: [
        "Le baron Clavières a voulu se baigner au soleil de midi, nu-tête, comme un jeune homme. À quatre heures, il est rouge. À six heures, il est brûlant. À minuit, il délire.",
        "Victorine le soigne dans la grand-chambre, fenêtres de poupe ouvertes sur la nuit, avec des linges mouillés d'eau de mer et de la tisane de saule. Il s'agite dans sa couchette. Il parle. Il parle vite, à voix basse, à quelqu'un qui n'est pas là.",
        "« … en peau de requin, père, je sais, en peau de requin, avec des fermoirs de fer… tous les noms, toutes les sommes… Pérignac, Hautecloque, les Varembert… vous aussi, père, vous êtes dedans, vous êtes au début… » Il se dresse sur un coude. Il regarde Victorine sans la voir. « S'il revient, Morlenc brûle. S'il revient chez moi, Morlenc est à moi. Vous comprenez ? À moi. » Il retombe. « Il faut le trouver avant eux. Avant les autres. Il faut le brûler, ou le garder. Je ne sais pas. Je n'ai jamais su. »",
        { if: { has: "victorine:six" }, text: "Victorine se souvient des six convives de l'hôtel Clavières, de leurs mains qui tremblaient sur les cuillères. Elle comprend, enfin, de quoi ils avaient peur. Ce n'était pas de la mer. C'était d'un livre." },
        "Vers trois heures, la fièvre tombe. Le baron dort, la bouche ouverte, comme un enfant. Sur sa table de nuit, sa chaîne de montre, avec la clef du coffre de fer.",
      ],
      choices: [
        { label: "Ouvrir le coffre, pendant qu'il dort", test: { dom: "discretion", diff: 10, label: "Le coffre de fer" }, win: { fx: { flag: ["victorine:livre", "victorine:coffre"] }, to: "A3w_coffre" }, lose: { fx: { flag: "victorine:livre" }, to: "A3w_coffre_rate" } },
        { label: "Rester assise à le veiller", fx: { flag: "victorine:livre" }, to: "A3w_baron_fin" },
      ] },
    A3w_coffre: { act: "III", title: "Le coffre de fer", place: "cormorane", ambiance: "nuit",
      text: [
        "La clef tourne sans bruit. Le couvercle se soulève. Dans le coffre, posés sur une pile de lettres de change et de traites cachetées, il y a la carte de l'île, pliée en quatre, et une liasse de papiers jaunis, attachée d'un ruban noir, avec une étiquette de la main du baron : *Papiers de mon père. Ne pas ouvrir.*",
        "Victorine défait le ruban. Des lettres, des comptes, des reçus. Une lettre, surtout, sur le dessus, d'une écriture penchée, énergique, signée d'un J et d'un D entrelacés. Elle n'en lit que les premières lignes, à la lueur de la fenêtre de poupe, avant que le baron ne remue dans son sommeil :",
        "*Mon cher Clavières, la Miséricorde est à nous. Vingt et une caisses d'argent, les vases, les piastres. Votre part vous attend, comme convenu, et celle de nos six amis. J'en tiens le compte exact dans mon livre, comme toujours ; vous connaissez mes manies. Le navire est avarié. Je dois enterrer. Je vous enverrai la carte par Fulbert…*",
        "Le baron soupire. Elle remet la lettre, le ruban, ferme le coffre, remet la clef sur la table de nuit, et se rassied, les mains sur les genoux, le cœur battant comme celui d'un voleur.",
      ],
      choices: [{ label: "Le veiller jusqu'au matin", to: "A3w_baron_fin" }] },
    A3w_coffre_rate: { act: "III", title: "Le coffre de fer", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle prend la clef. Au moment où elle la glisse dans la serrure, une voix dit, derrière elle, très calme :",
        "« Docteur. »",
        "Le baron la regarde de sa couchette, les yeux grands ouverts, tout à fait lucide. Il ne bouge pas. Il ne crie pas. Il tend seulement la main, paume ouverte. Elle y pose la clef.",
        "« Je vous croyais plus intelligente, dit-il doucement. Les gens intelligents ne volent pas. Ils attendent qu'on leur donne. » Il remet la clef à sa chaîne. « Je vais dormir. Vous allez rester là, sur cette chaise, jusqu'au matin, à me veiller. C'est votre métier. Et demain, nous oublierons tous deux cette nuit. Moi, parce que j'avais la fièvre. Vous, parce que vous me devez trois mille quatre cents livres. »",
      ],
      choices: [{ label: "Rester sur la chaise", fx: { regard: { claviere: "mefiant" } }, to: "A3w_baron_fin" }] },
    A3w_baron_fin: { act: "III", title: "La fièvre du baron", place: "cormorane", ambiance: "mer",
      text: [
        "Au matin, le baron s'éveille guéri, affamé, et d'excellente humeur. Il ne se souvient de rien, dit-il. Il remercie Victorine avec effusion, lui baise la main, demande son chocolat.",
        "Elle sait maintenant ce qu'il est venu chercher. Ce n'est pas l'argent. Un livre, relié en peau de requin, où un pirate a écrit le nom de sept familles de Morlenc, et la somme que chacune a reçue.",
      ],
      choices: [{ back: "A3w_jours" }] },

    A3w_hamac: { act: "III", title: "Le hamac du canonnier", place: "cormorane", ambiance: "mer",
      fx: { meet: "malandain" },
      text: [
        "Ulric Malandain est tombé sur le pont à midi, foudroyé par le soleil, comme un bœuf à l'abattoir. On l'a descendu dans l'entrepont à six hommes et couché dans son hamac, où il délire en grognant, rouge, brûlant, énorme.",
        "Victorine le soigne sur place : on ne monte pas un homme pareil dans l'échelle du faux-pont. Elle lui fait boire de l'eau salée, lui mouille la tête, lui défait sa ceinture. En glissant la main sous son dos, pour le retourner, elle sent sous la toile du hamac, roulé dans une chemise, quelque chose de dur, de lourd, de froid.",
        "Un pistolet. Chargé, amorcé, la pierre à fusil neuve. Les pistolets du bord sont à la sainte-barbe, sous clef ; la capitaine en a la clef. Celui-ci n'a pas de numéro d'armurerie. Il sent l'huile fraîche.",
        "Malandain ouvre un œil. Il voit sa main sous le hamac. Il ne dit rien. Il la regarde, d'un œil rouge, injecté, très lent, comme on regarde une mouche qu'on va écraser quand on aura la force de lever le bras.",
      ],
      choices: [
        { label: "Laisser le pistolet où il est, finir de le soigner, et aller voir la capitaine", fx: { flag: "complot:soupcon" }, to: "A3w_hamac_capitaine" },
        { label: "Prendre le pistolet et le porter à la capitaine", fx: { flag: ["complot:soupcon", "pistolet:pris"] }, to: "A3w_hamac_pris" },
      ] },
    A3w_hamac_pris: { act: "III", title: "Le hamac du canonnier", place: "cormorane", ambiance: "mer",
      text: [
        "Elle prend le pistolet, le glisse dans sa trousse, sous les lancettes, finit de soigner Malandain, et monte. Le canonnier ne bouge pas. Il la regarde partir.",
        "Le soir même, guéri, il se présente à la capitaine et déclare qu'on lui a volé un pistolet qu'il avait acheté à Morlenc, de ses deniers, pour se défendre contre les rats. La capitaine lui répond qu'à son bord, on se défend contre les rats avec un chat, et lui donne huit jours de fers. Il les fait sans un mot. Quand il ressort, il passe devant l'infirmerie, s'arrête sur le seuil, et regarde Victorine en souriant, longtemps, sans rien dire.",
      ],
      choices: [{ label: "Lui rendre son sourire", fx: { penche: { malandain: -1 } }, to: "A3w_hamac_fin" }] },
    A3w_hamac_capitaine: { act: "III", title: "La capitaine", place: "cormorane", ambiance: "mer",
      fx: { meet: "ribaud" },
      text: [
        "La capitaine Ribaud écoute Victorine dans sa cabine, debout, les mains à plat sur sa table à cartes. Quand elle a fini, elle ne dit rien pendant longtemps.",
        { if: { has: "victorine:alliee_capitaine" }, text: "« Je vous avais dit que le cœur de mon navire était dans la cambuse, dit-elle enfin. Il a des pistolets, maintenant, le cœur. »" },
        "« Je ne peux rien faire, reprend-elle. Si je fouille l'avant, ils sauront que je sais. Ils sont combien ? Quatre, cinq, dix ? Et les autres, de quel côté tomberont-ils, si ça commence ici, en pleine mer, à quatre mille lieues de toute justice ? » Elle se redresse. « Nous attendrons. Nous compterons. Vous, docteur, vous continuerez de soigner tout le monde, de la même main. C'est votre arme. Ils ne se méfient pas d'une main qui soigne. »",
      ],
      choices: [{ label: "Promettre", fx: { flag: "complot:capitaine", regard: { ribaud: "allie" } }, to: "A3w_hamac_fin" }] },
    A3w_hamac_fin: { act: "III", title: "Le hamac du canonnier", place: "cormorane", ambiance: "mer",
      text: [
        "Le soir, Victorine écrit dans son carnet, sous la date du jour, une ligne de plus, qu'elle souligne : *Ils ont des armes.* Puis elle la rature, très soigneusement, jusqu'à ce qu'on ne puisse plus la lire, parce qu'à bord, tout le monde ouvre les malles des autres.",
      ],
      choices: [{ back: "A3w_jours" }] },

    A3w_brousse: { act: "III", title: "Le pilote", place: "sargues", ambiance: "mer",
      fx: { meet: "brousse" },
      text: [
        "Le pilote se tient à la lisse de bâbord, comme toujours, à regarder les herbes. Il a repris des forces ; il se tient droit ; ses yeux supportent la lumière. Il a coupé ses ongles.",
        { if: { has: "brousse:victorine" }, text: "Quand Victorine s'accoude à côté de lui, il incline la tête, comme un homme d'autrefois devant une dame. « Ma bienfaitrice. Ma créancière. » Il sourit. « Je n'ai jamais aimé devoir quelque chose à quelqu'un. Avec vous, c'est supportable. »" },
        { if: { has: "brousse:baron" }, text: "Quand Victorine s'accoude à côté de lui, il ne tourne pas la tête. « Vous m'avez vendu au fils Clavières, dit-il. Vous ne saviez pas. Personne ne sait jamais rien. Mais vous m'avez vendu quand même. »" },
        { if: { has: "brousse:evade" }, text: "Il connaît Victorine de vue : la médecin, celle qui lui a donné du bouillon le premier soir, après qu'un enfant l'a tiré de son trou. Il la salue d'un signe de tête." },
        "À l'avant, dans la cambuse, quelqu'un chante. La voix de baryton monte dans l'air immobile, ronde, chaude, juste. Une chanson à virer le cabestan.",
        "Brousse se raidit. Ses mains se crispent sur la lisse. Il écoute jusqu'au bout, les yeux fermés.",
        "« Cette chanson, dit-il très bas. Cette voix. Je les ai entendues ensemble une seule fois, une nuit, sur un pont, pendant que… » Il s'arrête. Il ouvre les yeux. « Qui chante ?",
        "— Le maître-coq. Monsieur Fargue. »",
        "Il répète le nom. Puis il dit, plus bas encore : « À l'époque, on l'appelait autrement. » Il regarde Victorine. Elle voit qu'il pèse ce qu'il peut dire, comme un homme qui a appris, en dix-neuf ans, le prix exact d'un mot. « Méfiez-vous de lui, Madame. Et ne lui dites pas que je l'ai reconnu. Il me tuerait avant la prochaine île. »",
      ],
      choices: [{ label: "Promettre de se taire", fx: { flag: "brousse:reconnait" }, to: "A3w_brousse_fin" }] },
    A3w_brousse_fin: { act: "III", title: "Le pilote", place: "sargues", ambiance: "mer",
      text: [
        "Le soir, au souper, Victorine regarde Fargue servir la soupe le long des plats de huit, avec une louche exacte et une plaisanterie pour chacun. Il passe derrière le pilote, qui garde la tête baissée sur son écuelle. Il ne s'arrête pas. Il ne le regarde pas. Il ne le regarde jamais. Victorine se dit qu'on ne met pas tant de soin à ne pas regarder quelqu'un qu'on ne connaît pas.",
      ],
      choices: [{ back: "A3w_jours" }] },

    A3w_fargue: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "mer",
      text: [
        "Le maître-coq descend à l'infirmerie, un soir, avec un bol de bouillon fumant et un morceau de pain blanc qu'il a fait lever il ne sait comment dans cette chaleur. « Pour la médecin, dit-il. Elle soigne tout le monde, et personne ne la soigne. »",
        "Il s'assied sur le tabouret des malades, sans y être invité, et la regarde manger, avec une satisfaction de cuisinier. Le bouillon est excellent. Il le sait. Il parle de choses et d'autres, du calme, des herbes, du professeur, du baron qu'il bat aux échecs « une fois sur deux, par charité ». Il est drôle. Il est charmant. Il est toujours charmant.",
        "Puis, au moment de reprendre le bol vide, il ne se lève pas. Il regarde ses mains, la droite, la gauche aux trois doigts.",
        "« Docteur, dit-il, sans la regarder. Une question de médecine. Une jeune fille de dix-neuf ans. La poitrine. Elle crache rouge depuis un an, le matin. Les médecins de la Haute-Ville disent : le soleil avant le printemps, le sud, la viande, le repos. » Il lève les yeux. « Ils disent vrai ? Ou ils disent ça pour qu'on les paie ? Le soleil, ça guérit ? »",
      ],
      choices: [
        { label: "« Parfois. Pas souvent. Mais c'est la seule chance qu'elle ait. »", fx: { flag: "victorine:lisette", regard: { fargue: "redevable" } }, to: "A3w_fargue_fin" },
        { label: "« Le soleil soulage. Il ne guérit pas. Il lui donnera un an, peut-être deux. »", fx: { flag: ["victorine:lisette", "victorine:verite_fargue"], regard: { fargue: "redevable" } }, to: "A3w_fargue_fin" },
        { label: "« Qui est-ce ? »", to: "A3w_fargue_qui" },
      ] },
    A3w_fargue_qui: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "mer",
      text: [
        "« Ma fille, dit-il simplement. Lisette. Elle est chez les Sœurs, à la Basse-Fosse. Elle coud près d'une fenêtre à géraniums. Elle rit tout le temps. Elle tousse en riant. » Il sourit. « Je lui ai promis le soleil. Je tiens mes promesses, docteur. C'est ce qui me rend si dangereux. »",
        "Victorine pense que le baron a dit la même phrase, mot pour mot, dans la grand-chambre, une semaine plus tôt. Les deux bouts de ce navire parlent la même langue.",
        "« Alors ? reprend-il. Le soleil ?",
        "— Parfois, dit-elle. Pas souvent. Mais c'est la seule chance qu'elle ait. »",
      ],
      choices: [{ label: "Lui rendre son bol", fx: { flag: "victorine:lisette", regard: { fargue: "redevable" } }, to: "A3w_fargue_fin" }] },
    A3w_fargue_fin: { act: "III", title: "Le bouillon", place: "cormorane", ambiance: "mer",
      text: [
        { if: { has: "victorine:verite_fargue" }, text: "Il reste immobile longtemps. Puis il hoche la tête, lentement, comme on accepte une addition. « Un an. Deux. » Il se lève. « Merci. Vous êtes la première qui ne m'a pas menti. Les autres voulaient être payés ; vous, on vous a déjà payée, c'est ce qui vous rend honnête. » Il reprend le bol. Sur le seuil, il se retourne. « Je m'en souviendrai, docteur. Quoi qu'il arrive. »" },
        { if: { not: { has: "victorine:verite_fargue" } }, text: "Il se lève, reprend le bol, et lui sourit, d'un sourire qu'elle ne lui connaissait pas, tout à fait sans malice. « Merci. » Sur le seuil, il se retourne. « Je m'en souviendrai, docteur. Quoi qu'il arrive. »" },
        "Il remonte l'échelle en chantonnant. Victorine reste seule avec le bol de bouillon dont elle a encore le goût dans la bouche, et une phrase qui lui tourne dans la tête : *quoi qu'il arrive*. Elle se demande ce qui va arriver, que cet homme sait déjà.",
      ],
      choices: [{ back: "A3w_jours" }] },

    A3w_ecueil: { act: "III", title: "L'Écueil-Rouge", place: "ecueil_rouge", escale: "ecueil", hub: true, noLead: true, backName: "l'Écueil-Rouge", ambiance: "nature",
      text: [
        { first: true, text: "Une brise légère se lève un matin, juste assez pour pousser le navire, et vers midi la vigie signale une fumée, droit devant : un fil blanc, vertical, tendu entre la mer et le ciel comme pour les recoudre." },
        { first: true, text: "Sous la fumée, un récif de pierre rougeâtre, poreuse, couleur de sang séché, sans un arbre ni un oiseau, avec au centre un cratère, et sur le flanc du cratère une petite maison de pierres sèches surmontée d'une croix. Sur les deux compas du bord, les aiguilles se mettent à trembler, un peu, comme un chien qui sent l'orage. La capitaine fait mouiller à une encablure pour chercher de l'eau dans la roche." },
        { again: true, text: "La roche rouge, la fumée blanche, la maison à la croix." },
      ],
      choices: [
        { label: "Descendre voir le moine qui devient aveugle", to: "XP_v_debut", hide: { seen: "XP_v_debut" } },
        { label: "Gratter la croûte blanche autour du cratère", to: "XQ_v_sel", hide: { seen: "XQ_v_sel" }, if: { seen: "XP_v_debut" }, why: "Elle n'est pas encore descendue à terre." },
        { label: "Faire le tour de la maison du moine", to: "XQ_v_tombe", hide: { seen: "XQ_v_tombe" }, if: { seen: "XP_v_debut" }, why: "Elle n'est pas encore descendue à terre." },
        { label: "Rester à bord, l'après-midi, près de la capitaine", to: "XQ_v_compas", hide: { seen: "XQ_v_compas" } },
      ] },
    A3w_apres_ecueil: { act: "III", title: "La marmite", place: "sargues", ambiance: "mer",
      text: [
        "L'Écueil s'enfonce derrière la poupe avec sa fumée. La brise retombe le soir même, et les herbes jaunes se referment autour de la coque.",
        "Les compas, eux, ont cessé de trembler.",
        { if: { has: "ecueil:ribaud_compas" }, text: "La capitaine en note la dernière position, avec l'heure, dans son carnet. Victorine la voit, le soir, à la lanterne, recopier ses chiffres, encore et encore, comme on vérifie un pouls qui vous inquiète." },
      ],
      choices: [{ back: "A3w_jours" }] },
    A3w_ilot: { act: "III", title: "L'îlot", place: "ilot", escale: "ilot", hub: true, noLead: true, backName: "l'îlot", ambiance: "nature",
      text: [
        { first: true, text: "L'îlot paraît à l'aube, une colline ronde, verte, boisée jusqu'à la mer, si fraîche au milieu de l'eau morte qu'on la croirait peinte : une plage blanche, des palmiers penchés, une source au fond d'une crique, et à mi-pente, à demi cachée par les arbres, une grande maison blanche à volets verts, avec une véranda." },
        { first: true, text: "Au moment où l'on mouille, un cri monte de la forêt, long, aigu, qui pourrait être celui d'un oiseau, ou d'une bête, ou d'un enfant, et qui s'arrête net. La capitaine fait armer la chaloupe. Il faut de l'eau ; on prendra de l'eau." },
        { again: true, text: "La crique, les palmiers, la maison blanche, le silence." },
      ],
      choices: [
        { label: "Attendre la corvée d'eau sur la plage", to: "XF_v_debut", hide: { seen: "XF_v_debut" } },
      ] },
  },
  extras: {},
};
