// More road events, two per region, for Acts II, III and IV (wired in base.js regions and world.events):
// combes (Corbe leads, "tu" feminine): the hot spring, the hermit; cour (Lisandre leads, "tu" feminine): the minstrels
// without songs, the toll bridge; outreblanc (the child): the riderless horse, the pedlar of memories; iv_nord: the
// woodcutter who carves names, the avalanche; iv_sud: the wedding, the fleeing greffier; iv_est: the grave in the ditch,
// the wolves of the war. Each one returns to the road.
function P(act) { return function (o) { return Object.assign({ act: act, noLead: true, place: null }, o); }; }
var P2 = P("II"), P3 = P("III"), P4 = P("IV");
var BACK = [{ back: "@route" }];
module.exports = {
  // ---------------------------------------------------------------- combes
  E2_source_chaude: P2({ title: "La source chaude",
    text: [
      "Dans un repli de la crête, de la vapeur. Une source chaude, qui sort de la roche et remplit un bassin naturel, verdâtre, qui sent l'œuf. Le clan la connaît. Tu y as été baignée bébé, comme tous les enfants du Corbeau, pour qu'ils n'aient jamais froid.",
      "La neige fond à trois pas du bord. Il y a de l'herbe verte, en plein hiver, et des mouches.",
    ],
    choices: [
      { label: "S'y baigner, tous", fx: { pv: 8, ep: ["perso", 200] }, to: "E2_source_chaude_bain" },
      { label: "Ne pas s'arrêter", to: "@route" },
    ] }),
  E2_source_chaude_bain: P2({ title: "Le bain",
    text: [
      "Vous vous déshabillez dans le froid, en criant, et vous entrez dans l'eau en criant plus fort. Puis plus personne ne crie. L'eau est chaude comme un bain de reine. Les muscles se dénouent, les engelures piquent, puis cessent de piquer.",
      { with: "ysolde", text: "Ysolde garde sa chemise. Elle a des cicatrices. Personne ne les regarde. Au bout d'un moment, elle enlève la chemise aussi, et personne ne les regarde davantage." },
      { with: "hylas", text: "Hylas flotte sur le dos, les yeux blancs vers le ciel, les bras écartés. « Je n'avais pas eu chaud depuis Pallanche », dit-il. Il reste là une heure, immobile." },
    ],
    choices: BACK }),
  E2_ermite: P2({ title: "L'ermite",
    text: [
      "Une cabane, à l'écart du chemin, avec une croix de bois sur le toit, une croix d'en bas, de vallée. Un ermite en sort, un vieux en robe de bure, la barbe jusqu'à la ceinture. Il vous regarde passer. Il se tait. Il a fait vœu de silence.",
      "Sur le seuil, il a posé une écuelle de bouillie, et à côté, une ardoise, avec une craie. Sur l'ardoise, de son écriture : *Vos noms. Je prierai pour eux.*",
    ],
    choices: [
      { label: "Écrire vos noms sur l'ardoise", fx: { food: 1, ep: ["perso", 300], flag: "nord:ermite" }, to: "E2_ermite_noms" },
      { label: "Prendre la bouillie et repartir", fx: { food: 1 }, to: "@route" },
    ] }),
  E2_ermite_noms: P2({ title: "L'ardoise",
    text: [
      "Tu ne sais pas écrire. Quelqu'un écrit pour toi. Tous les noms, l'un sous l'autre, sur l'ardoise. L'ermite les lit, en remuant les lèvres sans bruit. Puis il prend l'ardoise et rentre dans sa cabane.",
      "En repartant, tu te retournes. Par la fenêtre, tu le vois, agenouillé, l'ardoise devant lui, appuyée contre le mur. Il se tait. Il ne dira jamais rien. Mais il lit, et il relit, et ses lèvres bougent.",
    ],
    choices: BACK }),

  // ---------------------------------------------------------------- cour
  E2_menestrels: P2({ title: "Les ménestrels",
    text: [
      "Au bord de la route, assis dans le fossé, une troupe de ménestrels : un joueur de vielle, un flûtiste, une femme au tambourin, un garçon avec une cornemuse dégonflée. Ils ont leurs instruments. Ils ne jouent pas.",
      "« On allait au tournoi, dit la femme. Et puis, en route, à l'auberge de Marsanne, on a payé la chambre avec nos chansons. Le clerc a dit qu'on en avait trop, qu'on pouvait bien en céder quelques-unes. » Elle tapote son tambourin. « On les a toutes cédées. On ne savait pas qu'on les cédait toutes. On a les mains, on n'a plus les airs. »",
    ],
    choices: [
      { label: "Leur apprendre des chansons", test: { dom: "social", label: "Les airs", help: [{ if: { item: "luth" }, v: 15 }, { if: { has: "sud:luthier" }, v: 10 }] },
        win: { fx: { flag: "sud:menestrels", ep: ["perso", 700] }, to: "E2_menestrels_ok" }, lose: { to: "E2_menestrels_rate" } },
      { label: "Leur souhaiter bonne route", to: "@route" },
    ] }),
  E2_menestrels_ok: P2({ title: "Une chanson de route",
    text: [
      "Tu t'assieds dans le fossé avec eux. Tu chantes une chanson de route, simple, de celles qu'on apprend en une fois. La vielle te suit au troisième vers, la flûte au quatrième. Leurs mains savent. Il leur fallait seulement un air à mettre dedans.",
      "Tu leur en apprends six. Ils repartent vers Vasselin en jouant, faux, joyeux, et tu les entends longtemps, sur la route, derrière toi.",
    ],
    choices: BACK }),
  E2_menestrels_rate: P2({ title: "Le fossé",
    text: ["Tu chantes. Ils écoutent, poliment. Puis ils essaient, et l'air retombe : c'est l'envie qui leur manque. Ils te remercient. Ils restent assis dans le fossé, avec leurs instruments sur les genoux, quand tu repars."],
    choices: BACK }),
  E2_peage: P2({ title: "Le péage",
    text: [
      "Un pont de pierre sur un affluent de la Pallante, avec une barrière et une guérite. Un péager, et deux hommes d'armes aux couleurs de la Chancellerie. Une pancarte neuve : *Péage royal. Un sou, ou un souvenir.*",
      "Devant toi, une vieille femme donne un souvenir pour passer. Le péager pose une plume sur son poignet. Elle passe, et elle ne sait plus pourquoi elle allait de l'autre côté. Elle s'arrête au milieu du pont, et elle regarde l'eau.",
    ],
    choices: [
      { label: "Payer en sous, pour vous tous", fx: { gold: -4 }, to: "@route" },
      { label: "Passer à gué, plus bas", test: { dom: "nature", label: "Le gué", help: [{ if: { present: "rodric" }, v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, to: "@route" }, lose: { fx: { pv: -2, food: -1 }, to: "E2_peage_eau" } },
    ] }),
  E2_peage_eau: P2({ title: "Le gué",
    text: ["Le gué est plus profond qu'il n'en avait l'air. Vous passez, mouillés jusqu'à la poitrine, en tenant les sacs au-dessus de la tête. Un sac de vivres part avec le courant. De l'autre côté, sur le pont, la vieille femme vous regarde, et elle rit, et elle applaudit, sans savoir pourquoi."],
    choices: BACK }),

  // ---------------------------------------------------------------- outreblanc
  E3_cheval: P3({ title: "Le cheval blanc",
    text: [
      "Un cheval blanc, sellé, sans cavalier, qui marche au pas à côté de la file des marcheurs. Il avance, la tête basse, loin de l'herbe. Les étriers battent contre ses flancs. Sur la selle, une couverture brodée d'un cerf.",
      "Il te regarde. Il s'arrête. Il attend, comme un cheval qui attend qu'on monte.",
    ],
    choices: [
      { label: "Monter", fx: { pv: 4, ep: ["perso", 400], flag: "iii:cheval" }, to: "E3_cheval_monte" },
      { label: "Le laisser à sa file", to: "@route" },
    ] }),
  E3_cheval_monte: P3({ title: "En selle",
    text: [
      "Tu montes. Le cheval repart, au pas, et c'est reposant, d'être porté. Il marche une heure avec toi. Puis il s'arrête, et il tourne la tête vers toi, et tu comprends qu'il faut descendre.",
      { with: "ysolde", text: "Ysolde a regardé la couverture brodée tout le temps. « Le cerf de Brenne, dit-elle quand tu descends. C'est le cheval de quelqu'un de chez moi. Il y a très longtemps. » Elle pose la main sur l'encolure. Le cheval repart sans elle." },
      { without: "ysolde", text: "Il repart, seul, au pas, les étriers battant, vers la ville aux tours blanches. Quelqu'un, là-haut, devait l'attendre. Ou ne l'attend plus." },
    ],
    choices: BACK }),
  E3_marchand: P3({ title: "Le marchand de souvenirs",
    text: [
      "Un homme a étalé une couverture sur le blanc, et sur la couverture, des choses. Une boucle de ceinture, un dé à coudre, une clé, un éventail. Il les vend. Pas contre de l'argent, ici, on n'en a pas. Contre une histoire. « Racontez-moi d'où vient un objet à vous, dit-il, et je vous donne d'où vient un des miens. »",
    ],
    choices: [
      { label: "Lui raconter l'histoire d'un objet de ton sac", fx: { ep: ["perso", 500] }, to: "E3_marchand_troc" },
      { label: "Passer", to: "@route" },
    ] }),
  E3_marchand_troc: P3({ title: "Le troc",
    text: [
      "Tu racontes. Il écoute en hochant la tête, les yeux fermés, comme on goûte un vin. Puis il te tend le dé à coudre. « Celui-là, dit-il. D'une couturière de Vasselin, qui cousait des noms dans les ourlets. Elle l'a perdu en dansant, à une fête. Elle n'a jamais su qu'elle l'avait perdu. »",
      "Le dé est chaud dans ta main. Au bout de dix pas, il n'y est plus. Mais tu sais, maintenant, d'où il venait, et ça, tu le gardes.",
    ],
    choices: BACK }),

  // ---------------------------------------------------------------- iv_nord
  E4_bucheron: P4({ title: "Le bûcheron",
    text: [
      "Dans un bois de mélèzes, un bûcheron. Il n'abat pas. Il grave, à la hachette, sur l'écorce de chaque arbre, un nom. Il en a gravé des centaines. Le bois entier porte des noms, à hauteur d'homme.",
      "« Ceux de mon village, dit-il sans s'arrêter. L'année blanche les a pris. Pas morts. Partis. On ne sait pas où. » Il grave. « Les arbres vivent trois cents ans. Ça laisse le temps de revenir. »",
    ],
    choices: [
      { label: "Lui demander une hachette, et graver un nom aussi", fx: { ep: ["perso", 400], flag: "iv:bucheron" }, to: "E4_bucheron_grave" },
      { label: "Le laisser à son bois", to: "@route" },
    ] }),
  E4_bucheron_grave: P4({ title: "Un nom sur l'écorce",
    text: ["Il te prête la hachette en silence. Tu graves. Le nom qui te vient n'est pas le tien. C'est celui de quelqu'un que tu as perdu dans l'année, un nom que tu n'avais pas encore dit à voix haute. Le bûcheron regarde, hoche la tête, et passe à l'arbre suivant."],
    choices: BACK }),
  E4_avalanche: P4({ title: "La coulée",
    text: [
      "Un craquement, au-dessus de vous, comme une porte qu'on arrache. Puis un grondement. La pente blanche se met à couler, d'un bloc, lentement d'abord, puis de plus en plus vite.",
    ],
    choices: [
      { label: "Courir vers les rochers", test: { dom: "nature", label: "La coulée", help: [{ if: { present: "corbe" }, v: 15 }, { if: { present: "givre" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "E4_avalanche_ok" }, lose: { fx: { pv: -5, food: -1 }, to: "E4_avalanche_prise" } },
    ] }),
  E4_avalanche_ok: P4({ title: "Les rochers",
    text: ["Vous atteignez les rochers juste à temps. La coulée passe à trois pas, en soufflant une poudre fine qui vous blanchit tous. Quand le bruit s'arrête, le chemin a disparu sous six pieds de neige. Vous en tracez un autre, plus haut. Personne ne parle pendant une heure."],
    choices: BACK }),
  E4_avalanche_prise: P4({ title: "Sous la neige",
    text: ["La neige te prend aux jambes, te renverse, te roule. Puis tout s'arrête, et il fait noir, et tu as perdu le haut. Tu craches pour voir où tombe la salive, comme on te l'a appris au moulin. Tu creuses dans l'autre sens. Une main attrape la tienne. On te tire dehors, à moitié gelé, sans ton sac de vivres."],
    choices: BACK }),

  // ---------------------------------------------------------------- iv_sud
  E4_noce: P4({ title: "La noce",
    text: [
      "Dans un village de la vallée, une noce. Les violons, les rubans, les tables sous les tilleuls. La mariée est assise, en blanc, toute seule à la table d'honneur. Le marié danse avec les autres. Il a l'air heureux. Il ne la regarde pas.",
      "« Il a payé la taille avec leurs fiançailles, dit une vieille, à côté de toi. Il ne savait pas. Il croyait céder un petit souvenir. Il l'a rencontrée ce matin, à l'église. Il trouve qu'elle est jolie. Il a dit oui quand même. » Elle soupire. « Elle, elle se souvient de tout. »",
    ],
    choices: [
      { label: "Inviter la mariée à danser", fx: { ep: ["perso", 500], flag: "iv:noce" }, to: "E4_noce_danse" },
      { label: "Repartir avant la fin", back: "@route" },
    ] }),
  E4_noce_danse: P4({ title: "La danse",
    text: [
      "Elle te regarde, surprise, puis elle se lève. Vous dansez. Elle danse bien. Au milieu de la ronde, vous croisez le marié, et elle lui sourit, et il lui sourit, comme on sourit à une jolie inconnue.",
      "Au deuxième tour, il demande à la reprendre. Tu la lui laisses. Ils dansent. Il ne se souvient de rien. Il la regarde. Il recommence, depuis le début, à la regarder. Elle pleure en dansant, et elle rit, et les violons jouent plus fort.",
    ],
    choices: BACK }),
  E4_greffier_fuite: P4({ title: "Le greffier en fuite",
    text: [
      "Un homme en robe grise coupe à travers champs, en courant, sans chapeau, une sacoche contre la poitrine. Il te voit. Il s'arrête, essoufflé. Un greffier. Jeune. Il a de l'encre jusqu'aux coudes.",
      "« Ne dites pas que vous m'avez vu, dit-il. Je suis parti. Je ne veux plus. » Il serre sa sacoche. « J'ai recopié les cessions de mon propre village, la semaine dernière. Ma mère. Elle a cédé mon nom pour payer la taille. Je l'ai recopié moi-même. Je ne savais pas que c'était le mien avant d'avoir fini la ligne. »",
    ],
    choices: [
      { label: "Lui donner à manger et lui indiquer le moutier des Veilleurs", fx: { food: -1, ep: ["perso", 600], flag: "iv:greffier_fuite" }, to: "E4_greffier_fuite_ok" },
      { label: "Le laisser courir", to: "@route" },
    ] }),
  E4_greffier_fuite_ok: P4({ title: "Le moutier",
    text: ["Il mange debout, très vite. Tu lui indiques le chemin du moutier, et tu lui nommes Frère Odon, qui prend tout le monde. Il répète le nom, deux fois. Puis il ouvre sa sacoche et te montre : un registre de cessions, le sien, volé. « Je vais le leur rendre, dit-il. À chacun. Un par un. Ça prendra le temps que ça prendra. » Il repart, en courant, mais plus lentement."],
    choices: BACK }),

  // ---------------------------------------------------------------- iv_est
  E4_tombe: P4({ title: "La tombe du fossé",
    text: [
      "Dans le fossé, au bord de la route des Marches, une tombe. Un monticule de terre, une épée plantée, un casque bleu de Corvanne posé sur la garde. Pas de nom. Quelqu'un a mis des fleurs des champs, fraîches, ce matin.",
      "Plus loin, une paysanne bine son champ. Elle te voit regarder. « C'est moi, les fleurs, dit-elle. Il est mort chez moi, l'automne dernier, en revenant de la Lisse. Il m'a dit son nom. Je l'ai oublié le lendemain. Je n'ai rien cédé, pourtant. Je l'ai juste oublié. Comme ça. » Elle reprend sa binette. « Alors je mets des fleurs. »",
    ],
    choices: [{ fx: { ep: ["perso", 300] }, back: "@route" }] }),
  E4_loups_guerre: P4({ title: "Les loups de la guerre",
    combat: { title: "La meute", enemies: ["loup", "loup", "loup"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Grimper sur le talus", to: "@route" },
      win: { fx: { ep: ["seance", 900] }, to: "E4_loups_guerre_fin" }, lose: { fx: { pv: -4 }, to: "E4_loups_guerre_fin" } },
    text: ["Ils sortent d'un bosquet, trois, maigres, le poil terne. Des loups qui ont suivi les armées, l'an dernier, et mangé ce qu'elles laissaient. Ils n'ont plus peur des hommes. Ils en ont trop vu couchés."],
    choices: [] }),
  E4_loups_guerre_fin: P4({ title: "Le talus",
    text: ["Quand c'est fini, tu restes un moment assis sur le talus, à reprendre ton souffle. Le dernier loup est parti en boitant, vers l'est, vers la Lisse, là où il sait qu'il y aura encore à manger, bientôt."],
    choices: BACK }),
};
