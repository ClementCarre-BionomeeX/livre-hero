// What the sea brings (encounters, by region, season and sky) and the night watches on deck with the companions
// (vigils). Each scene is played once, and gives back the crossroads it interrupted.
module.exports = {
  // ------------------------------------------------------------------ encounters at sea
  E_dauphins: {
    title: "Les dauphins", back: true,
    text: [
      "« À l'étrave ! » crie la vigie, et tout le pont court à l'avant.",
      "Une bande de dauphins joue dans la vague que pousse la Sterne. Tu en comptes une douzaine, gris sur le dessus et blancs au ventre. Ils sautent par deux, retombent ensemble, filent sous l'étrave et ressortent de l'autre bord. L'un d'eux nage sur le flanc et examine le navire d'un œil rond, avec la curiosité polie d'un inspecteur des douanes.",
      { with: "pierrick", text: "Pierrick s'est couché à plat ventre sur le beaupré, les bras pendus au-dessus de l'eau. « Ils nous accompagnent, dit-il. Les vieux disent que tant qu'ils sont là, le navire arrive. »" },
      { with: "gabin", text: "Gabin les compte à mi-voix, perd le compte, recommence. Pour la première fois depuis Port-Aubier, il rit." },
      "Au bout d'une demi-heure, les dauphins s'en vont tous ensemble vers le large, comme à un signal convenu.",
    ],
    fx: { stock: { equipage: 3 }, conf: { pierrick: 3, gabin: 3 } },
  },
  E_pecheurs: {
    title: "Les pêcheurs", back: true,
    text: [
      "Une barque de pêche à voile rousse vient se ranger le long du bord, à portée de voix : deux hommes et un garçon, tous trois en vareuse brune. Le plus vieux brandit un panier plein de soles et de grondins encore vivants.",
      "« Du poisson pour du tabac ! » crie-t-il. Les matelots se penchent à la lisse et marchandent à grands cris.",
      { temps: "brume", text: "« Méfiez-vous plus au sud, ajoute le pêcheur. La brume est épaisse comme du lait, cette année, et elle reste. »" },
    ],
    choices: [
      { label: "Acheter le panier sur le coffre de bord (deux écus)", if: { stock: "coffre", min: 2 }, fx: { stock: { coffre: -2, equipage: 4 } }, to: "E_pecheurs_achat" },
      { label: "Les saluer et les laisser repartir", back: true },
    ],
  },
  E_pecheurs_achat: {
    title: "Les pêcheurs", back: true,
    text: [
      "Tu paies le pêcheur, qui empoche les pièces avec un clin d'œil et lance le panier par-dessus la lisse. Rozenn arrive aussitôt, son couteau à la main, et emporte le poisson vers sa cambuse avant que quiconque ait eu le temps de le compter.",
      "Le soir, l'équipage mange des soles grillées sur le pont. Les hommes saluent ton passage d'un signe de tête, la bouche pleine, ce qui est chez eux la forme la plus haute du remerciement.",
    ],
  },
  E_baleine: {
    title: "La baleine", back: true,
    text: [
      "Un souffle, à tribord. Un jet de vapeur monte de la mer, haut comme le grand mât, et retombe en pluie fine que le vent rabat sur le pont.",
      "La baleine fait surface à cent brasses du navire. Son dos est long comme la Sterne, gris, couvert de coquillages. Elle souffle encore deux fois, puis elle sonde : sa queue se dresse hors de l'eau, noire et luisante, large comme une vergue, et glisse lentement sous la surface.",
      "Le pont reste silencieux un long moment. Puis Guénolé ôte la pipe de sa bouche. « Trente ans de mer, dit-il. J'en ai vu quatre. »",
      { with: "armelle", text: "Armelle regarde encore l'endroit où la baleine a disparu. « Mon mari en a vu une, la semaine où il s'est noyé, dit-elle. Ça ne veut rien dire. Les bêtes vont où elles vont. »" },
    ],
  },
  E_oiseau: {
    title: "L'hirondelle", back: true,
    text: [
      "Une hirondelle tombe sur le pont, aux pieds de l'homme de barre. Le vent de l'équinoxe a dû l'égarer loin de toute terre. Elle reste là, les ailes ouvertes, le bec entrouvert, et son cœur bat si vite qu'on voit trembler ses plumes.",
      { with: "gabin", text: "Gabin s'agenouille et la prend dans ses deux mains, comme on puise de l'eau. Il la porte à l'abri de la dunette et lui donne à boire au bout de son doigt." },
      { without: "gabin", text: "Pierrick la ramasse et la met au chaud dans son bonnet. Il lui offre des miettes de biscuit, qu'elle dédaigne, et de l'eau, qu'elle boit." },
    ],
    choices: [
      { label: "La garder à l'abri jusqu'à ce qu'elle reparte", takes: 2, fx: { conf: { gabin: 5, pierrick: 5 } }, to: "E_oiseau_vole" },
      { label: "Retourner à ton affaire", back: true },
    ],
  },
  E_oiseau_vole: {
    title: "L'hirondelle", back: true,
    text: [
      "Deux heures plus tard, l'hirondelle se dresse sur ses pattes. Elle secoue ses plumes, fait trois pas sur la paume qui la tient, et s'envole d'un coup. Elle fait une fois le tour du grand mât, puis elle file vers le sud, au ras des vagues.",
      "« Elle va aux Îles, dit Guénolé. Elle sera arrivée avant nous. »",
    ],
  },
  E_tonneau: {
    title: "Le tonneau à la dérive", back: true,
    text: [
      "La vigie signale une épave à bâbord : un tonneau cerclé de fer, couvert d'algues sur un côté, qui roule mollement dans la houle.",
      "Guénolé le regarde longtemps à la longue-vue. « Il flotte haut. Il est à moitié plein, ou à moitié vide. » Il crache. « Avec ce qu'on a perdu dans la cale, je le prendrais bien, moi. »",
    ],
    choices: [
      { label: "Faire mettre le canot à l'eau et repêcher le tonneau", takes: 1, test: { dom: "nature", diff: 0, label: "Nature", help: [{ with: "armelle", v: 10 }, { if: { has: "passe:marin" }, v: 15 }] }, win: { fx: { stock: { eau: 2 } }, to: "E_tonneau_ok" }, lose: { fx: { fatigue: 1 }, to: "E_tonneau_rate" } },
      { label: "Le laisser filer", back: true },
    ],
  },
  E_tonneau_ok: {
    title: "Le tonneau à la dérive", back: true,
    text: [
      "Le canot fait deux allers et retours dans la houle avant que les hommes parviennent à passer une élingue autour du tonneau. On le hisse à bord, ruisselant. Armelle fait sauter la bonde d'un coup de maillet.",
      "C'est de l'eau de pluie, verte et tiède, avec un goût de bois. Daoulas y trempe un doigt, la goûte, et décrète qu'on la boira bouillie. Les hommes la boiront comme du vin.",
    ],
  },
  E_tonneau_rate: {
    title: "Le tonneau à la dérive", back: true,
    text: [
      "Le canot met trop longtemps à descendre. Quand les hommes arrivent sur le tonneau, une lame le soulève et le jette contre le bordé. Les douves éclatent, et l'eau rejoint la mer. Les rameurs remontent à bord trempés et d'une humeur assortie.",
    ],
  },
  E_cloche: {
    title: "La cloche dans la brume", back: true,
    text: [
      "La brume a tout avalé : la mer, les mâts, le bout du beaupré. Il reste pour seuls bruits le grincement des poulies et l'eau contre la coque.",
      "Puis une cloche sonne, quelque part à bâbord. Un coup, lent et grave. Un silence. Un autre coup.",
      "Sur le pont, les hommes se signent. Un vieux gabier murmure qu'on entend parfois sonner, par brume, la cloche des navires perdus. Guénolé le fait taire d'un regard.",
      { if: { any: [{ has: "treguer:abord" }, { item: "routier" }] }, text: "« Une bouée à cloche, dit Kerlo à la barre. Les gens de Marbecq en ont mouillé une sur la Pierre Noire. C'est la houle qui la fait sonner. » Il met deux rayons de barre, et la cloche passe lentement sur l'arrière." },
      { if: { not: { any: [{ has: "treguer:abord" }, { item: "routier" }] } }, text: "Kerlo écoute, la tête penchée, et met deux rayons de barre pour s'éloigner du son. La cloche passe lentement sur l'arrière. Les hommes l'écoutent jusqu'à ce qu'elle se perde dans la brume." },
    ],
  },
  E_feux: {
    title: "Les feux sur les mâts", back: true,
    text: [
      "Dans le noir du grain, une lueur bleue s'allume au bout du grand mât, puis une autre au bout de la vergue de misaine. Bientôt, toutes les pointes du gréement portent une petite flamme pâle et froide, qui siffle doucement.",
      "Les hommes lèvent la tête, la pluie dans les yeux. Guénolé ôte son bonnet. « Les feux de Saint-Elme, dit-il. Ça veut dire que le pire du grain est passé. »",
      { with: "gabin", text: "Gabin a la bouche ouverte. « On l'explique dans les livres, dit-il à voix basse. C'est l'orage qui cherche à descendre par les mâts. » Puis, plus bas encore : « C'est beau quand même. »" },
      "Les flammes pâlissent une à une et s'éteignent. Le grain s'en va vers le nord.",
    ],
    fx: { stock: { equipage: 2 } },
  },
  E_maquereaux: {
    title: "Les maquereaux", back: true,
    text: [
      "À tribord, la mer bouillonne sur une grande tache sombre : un banc de maquereaux qui saute sous un nuage de mouettes.",
      "Guénolé siffle. En deux minutes, toutes les lignes du bord sont à l'eau, avec des plumes de poule attachées aux hameçons en guise d'appât. Les maquereaux mordent dès que la ligne touche l'eau. Ils arrivent sur le pont par grappes, bleus et verts, rayés de noir, et battent les planches de la queue.",
      { with: "pierrick", text: "Pierrick en sort onze à lui seul et les aligne sur le pont pour qu'on les compte, puis les recompte lui-même, au cas où." },
      "Rozenn les fait griller le soir même, avec du sel et un filet de vinaigre. On les mange avec les doigts sur le panneau de la grande écoutille.",
    ],
    fx: { stock: { equipage: 5 } },
  },
  E_voile: {
    title: "Une voile", back: true,
    text: [
      "« Voile ! » crie la vigie. « Une voile au vent, par le travers ! »",
      "Le second monte à la hune avec la longue-vue. Quand il redescend, il a le visage fermé. « Un lougre. Pas de pavillon. Il vient sur nous. »",
      "Le lougre approche vite, couché sous sa toile brune. Bientôt, on distingue des hommes sur son pont, et la gueule noire d'une petite pièce sur l'avant. Guénolé fait ouvrir le coffre d'armes. Les matelots prennent des coutelas et des barres d'anspect, et regardent vers la dunette.",
    ],
    choices: [
      { label: "Faire envoyer toute la toile pour le distancer", test: { dom: "nature", diff: -10, label: "Nature", help: [{ if: { has: "kerlo:route" }, v: 10 }, { if: { has: "passe:marin" }, v: 15 }, { with: "armelle", v: 5 }] }, win: { to: "E_voile_fuite" }, lose: { to: "E_voile_abordage" } },
      { label: "Faire monter tout l'équipage armé sur le pont, bien en vue", test: { dom: "social", diff: -10, label: "Social", help: [{ stock: "equipage", min: 50, v: 15 }, { if: { has: "passe:garde" }, v: 10 }] }, win: { fx: { stock: { equipage: 4 } }, to: "E_voile_bluff" }, lose: { to: "E_voile_abordage" } },
    ],
  },
  E_voile_fuite: {
    title: "Une voile", back: true,
    text: [
      "On largue les huniers, puis les cacatois, puis les bonnettes. La Sterne se couche et se met à courir, toutes voiles pleines, un sillage blanc derrière elle. Le lougre gagne un moment, puis se maintient à la même distance, puis recule.",
      "Au coucher du soleil, sa voile brune a disparu. Les hommes rangent les armes en riant un peu trop fort.",
    ],
    fx: { fatigue: 1 },
  },
  E_voile_bluff: {
    title: "Une voile", back: true,
    text: [
      "Tu fais monter tout le monde : la bordée de repos, la cambuse, le chirurgien, les mousses. Trente silhouettes armées s'alignent le long de la lisse, en plein soleil, dont une bonne moitié tiendrait mal un coutelas. Guénolé fait tirer un coup de mousquet en l'air.",
      "Sur le lougre, on délibère. Puis sa voile brune faseye, se regonfle, et il vire de bord pour s'éloigner. Quelqu'un, sur la Sterne, lui crie une insulte de port, et tout l'équipage éclate de rire.",
    ],
  },
  E_voile_abordage: {
    title: "L'abordage",
    text: [
      "Le lougre arrive bord à bord avec un choc qui fait trembler le mât de misaine. Des grappins volent et s'accrochent à la lisse. Une dizaine d'hommes sautent sur le pont de la Sterne, des coutelas entre les dents.",
      "On se bat partout. Deux corsaires foncent droit sur toi.",
    ],
    choices: [
      { label: "Les recevoir", fight: { title: "L'abordage", enemies: [{ id: "corsaire", n: 2 }], terrain: "bati",
        win: { fx: { stock: { equipage: 6 }, ep: ["seance", 800] }, to: "E_voile_repousse" },
        lose: { fx: { blessure: "cotes", stock: { coffre: -30, equipage: -6 } }, to: "E_voile_pille" } } },
    ],
  },
  E_voile_repousse: {
    title: "L'abordage", back: true,
    text: [
      "Le premier corsaire tombe à genoux. Le second recule jusqu'à la lisse et saute dans son bord. Autour de toi, les autres reculent aussi, chassés à coups de barre d'anspect par Guénolé et la bordée. On tranche les grappins. Le lougre s'écarte et s'en va, emportant ses blessés.",
      "Ce soir-là, les hommes te regardent avec une considération nouvelle.",
    ],
  },
  E_voile_pille: {
    title: "L'abordage", back: true,
    text: [
      "Un coup de crosse dans le flanc te jette contre le cabestan, et le souffle te manque. Quand tu te relèves, les corsaires repassent déjà dans leur bord, chargés de deux sacs de biscuit, d'un baril de rhum et de la cassette des droits de port trouvée dans le carré.",
      "Le lougre s'éloigne. Daoulas te bande les côtes serré et te prescrit de respirer doucement pendant une semaine, comme si la chose dépendait de toi.",
    ],
  },
  E_sucre: {
    title: "Le pain de sucre", back: true,
    text: [
      "Une odeur de beurre chaud et de caramel monte de la cambuse et se répand jusqu'au gaillard d'avant. Les hommes lèvent le nez l'un après l'autre, comme des chiens à l'arrêt.",
      "Rozenn a cassé le dernier pain de sucre du bord. Elle en a fait un far, dans le grand plat de fer, avec la farine qui restait et des pruneaux trempés dans le rhum. Elle le découpe sur le cabestan en trente-deux parts égales, au couteau, et donne la première au plus jeune mousse.",
      { with: "pierrick", text: "Pierrick reçoit sa part comme un sacrement. Il la mange par tout petits morceaux, pour qu'elle dure." },
      "« Il y a quinze ans que je fais ça une fois par voyage, dit Rozenn. Au jour où les hommes en ont le plus besoin. Je le choisis au nez. »",
    ],
    fx: { stock: { equipage: 4 } },
  },
  E_chanson: {
    title: "La chanson du gaillard", back: true,
    text: [
      "Le soir tombe, doux et clair. Un matelot a sorti une vielle de son sac. Il s'assoit sur le panneau de l'écoutille et accorde l'instrument en tournant la manivelle.",
      "Guénolé chante le premier, d'une voix de basse qui surprend tout le monde : une chanson de Port-Aubier, sur une fille qui attend son marin sur la jetée et finit par épouser le boulanger. Au refrain, tout l'équipage reprend en tapant du pied sur le pont, et la morale de l'histoire semble satisfaire chacun.",
      { with: "armelle", text: "Armelle connaît toutes les paroles. Elle chante sans lever les yeux de la poulie qu'elle répare." },
      { with: "gabin", text: "Gabin écoute, adossé au grand mât, et bat la mesure du bout des doigts sur son genou." },
    ],
    fx: { stock: { equipage: 3 } },
  },
  E_lame: {
    title: "La lame",
    text: [
      "Tu traverses le pont quand la vigie hurle. Une lame plus haute que les autres arrive par le travers, grise et lisse, sous une crête qui se brise déjà.",
      "Elle couvre le pont d'un bord à l'autre. L'eau te prend aux jambes, puis à la taille, et t'emporte vers la lisse sous le vent.",
    ],
    choices: [
      { label: "Te jeter sur un cordage et t'y accrocher", test: { dom: "nature", diff: 0, label: "Nature", help: [{ if: { has: "passe:marin" }, v: 20 }] }, win: { to: "E_lame_tenu" }, lose: { fx: { blessure: "cheville", pv: -2 }, to: "E_lame_blesse" } },
    ],
  },
  E_lame_tenu: {
    title: "La lame", back: true,
    text: [
      "Ta main trouve une drisse, et tu t'y cramponnes des deux mains. L'eau passe sur toi, tire, tire encore, puis se retire par les dalots en gargouillant. Tu te retrouves à genoux sur le pont, trempé{e} et vivant{e}, avec un goût de sel jusque dans le nez.",
      "Guénolé passe à côté de toi sans s'arrêter. « Une main pour toi, une main pour le navire », dit-il.",
    ],
  },
  E_lame_blesse: {
    title: "La lame", back: true,
    text: [
      "La lame te roule contre la lisse. Ton pied se prend entre deux montants, et le reste de ton corps poursuit sa route. Tu entends ta cheville craquer.",
      "Quand l'eau se retire, deux matelots te ramassent et te portent chez Daoulas, qui serre la cheville dans des attelles. « Rien de cassé, dit-il. Tu boiteras quelques jours. »",
    ],
  },

  // ------------------------------------------------------------------ vigils on deck
  V_armelle: {
    title: "La veillée d'Armelle", back: true,
    text: [
      "Armelle s'est assise sur un rouleau de cordage, au pied du mât de misaine, avec un bout de bois et son couteau. Elle taille quelque chose de petit à la lueur du fanal.",
      "« Un cheval, dit-elle, sans que tu aies rien demandé. Pour la petite. Elle en a déjà onze, rangés sur la cheminée, un par voyage. »",
      "Elle parle de ses filles. L'aînée, Maïwenn, quinze ans, veut être charpentière comme sa mère et taille déjà mieux que les apprentis du chantier. La petite, Annaïg, a peur de la mer et dort la fenêtre fermée quand le vent souffle. Le beau-père d'Armelle les garde pendant ses voyages : soixante-dix ans, et des mains qui tremblent.",
      { temps: ["calme", "brise"], text: "Au-dessus de vous, les étoiles tournent lentement autour du mât." },
      { temps: "brume", text: "La brume colle au visage. Le fanal fait une boule de lumière jaune autour de vous deux, et le reste du monde a disparu." },
      "« Mon homme, dit-elle encore, il était pêcheur. Un matin, il est parti, et le soir, son bateau est rentré sans lui. On n'a jamais su. » Elle souffle sur le petit cheval pour en chasser les copeaux. « Depuis, je fais des navires qui ramènent les gens. C'est tout ce que je sais faire. »",
    ],
    fx: { conf: { armelle: 10 }, fatigue: 1 },
    choices: [{ label: "Lui souhaiter bonne nuit et aller dormir", takes: 2, back: true }],
  },
  V_armelle2: {
    title: "La veillée d'Armelle", back: true,
    text: [
      "Armelle t'attend au même endroit, au pied du mât de misaine. Le petit cheval de bois est fini, avec une crinière taillée brin à brin.",
      "Ce soir, c'est elle qui pose les questions : d'où tu viens, ce que tu feras à Marbecq, si quelqu'un t'attend quelque part. Elle écoute tes réponses avec attention, comme elle écoute une coque.",
      { if: { has: "manifeste:signe" }, text: "« Tu as signé le manifeste, dit-elle. Je sais. Tout le bord le sait. » Elle te regarde. « Ça ne fait pas de toi un menteur. Ça fait de toi quelqu'un qui a fait confiance une fois de trop. Ça peut se réparer. »" },
      { if: { has: "manifeste:refuse" }, text: "« Tu as refusé de signer le manifeste, dit-elle. Tout le bord le sait. Les hommes ont parié sur le nombre de jours que tu tiendrais. » Elle rit tout bas. « J'ai parié sur toi. »" },
      "Puis elle t'apprend un nœud : le nœud de chaise, qu'on fait d'une seule main, les yeux fermés, autour de sa propre taille. « Le jour où tu tombes à l'eau, c'est ce nœud qui te sauve. Refais-le. Encore. »",
    ],
    fx: { conf: { armelle: 10 }, fatigue: 1 },
    choices: [{ label: "Refaire le nœud une dernière fois, et aller dormir", takes: 2, back: true }],
  },
  V_pierrick: {
    title: "La veillée de Pierrick", back: true,
    text: [
      "Pierrick est assis au pied du grand mât, les genoux sous le menton, enroulé dans une couverture trop grande pour lui. Il fait semblant de dormir, et ouvre un œil quand tu t'assieds.",
      "Il parle de l'hospice de Port-Aubier : les dortoirs de quarante lits, la soupe du soir, la sœur Marie-Joseph qui tapait sur les doigts avec une règle de fer. Il parle des sabots qu'on lui a donnés pour s'engager, les premiers qu'il ait eus à sa taille.",
      { temps: ["calme", "brise"], text: "Il te montre les étoiles qu'il connaît : la Grande Ourse, l'Étoile du Nord, et une étoile rouge, très basse, qu'il appelle la Lanterne du Diable. « C'est Guénolé qui l'appelle comme ça. Je crois qu'il l'a inventé. »" },
      "« Plus tard, je serai pilote, dit-il. Comme Tréguer. Le pilote, il sait des choses que le capitaine sait pas, et le capitaine l'écoute. » Il bâille. « Et on le paie plus cher. »",
      "Il s'endort pour de bon, la tête contre ton épaule.",
    ],
    fx: { conf: { pierrick: 10 }, fatigue: 1 },
    choices: [{ label: "Le porter jusqu'à son hamac", takes: 2, back: true }],
  },
  V_gabin: {
    title: "La veillée de Gabin", back: true,
    text: [
      "Gabin se tient à la poupe, accoudé au couronnement, et regarde le sillage s'allonger, phosphorescent, derrière le navire. Il serre sa boussole de cuivre dans la main.",
      "Il parle de son père aussitôt, comme s'il attendait depuis longtemps qu'on le lui demande. Hervé Corbière aimait les cartes plus que les comptes. Il emmenait son fils au port le dimanche pour lui apprendre à reconnaître les navires à leur gréement. Il possédait la moitié de la maison, et il partait lui-même sur ses navires, ce que son frère trouvait ridicule.",
      "« La veille du départ de la Bergeronnette, ils se sont disputés dans le bureau, mon oncle et lui. J'étais dans l'escalier. Je n'ai entendu que les voix. » Gabin referme sa main sur la boussole. « Le lendemain, mon père m'a embrassé sur le quai, et il m'a dit qu'à son retour, on parlerait de mon avenir. »",
      { temps: "brume", text: "Le sillage se perd dans la brume à dix brasses de la poupe, et le navire semble sortir de rien." },
    ],
    fx: { conf: { gabin: 10 }, fatigue: 1 },
    choices: [{ label: "Rester près de lui jusqu'à ce qu'il aille dormir", takes: 2, back: true }],
  },
  V_gabin2: {
    title: "La veillée de Gabin", back: true,
    text: [
      "Gabin est encore à la poupe. Il a pris quelques années en quelques jours, à moins que ce soit la lumière du fanal.",
      "« Je me demande s'il a eu peur, dit-il. Mon père. Si c'est allé vite. Si quelqu'un était avec lui. » Il parle d'une voix égale et pose les questions une à une, comme on pose des pierres.",
      { if: { clue: "m_bergeronnette" }, text: "Il sait, pour la plaque de la chapelle de Gavre. Il a lu la liste des rescapés, lui aussi, nom par nom, du bout du doigt." },
      "« Quand on sera arrivés, dit-il enfin, je ne rentrerai pas chez mon oncle. Je resterai aux Îles. Je trouverai un capitaine qui prend des mousses de quinze ans qui savent lire une carte. » Il te regarde. « Tu crois que c'est possible ? »",
    ],
    fx: { conf: { gabin: 10 }, fatigue: 1 },
    choices: [
      { label: "Lui dire que oui, et que tu l'y aideras", takes: 2, fx: { flag: "gabin:promesse", conf: { gabin: 5 } }, back: true },
      { label: "Lui dire qu'il en décidera à Marbecq, à tête reposée", takes: 2, back: true },
    ],
  },
};
