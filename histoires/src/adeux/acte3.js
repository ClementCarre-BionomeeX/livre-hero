// Le Pli de Brumefond · act III: Brumefond. The descent (act rendezvous), the gorge of the Ourse and the rider of the
// posts (role "gaut": one takes his letter, the other tends him or buries him), the bridge of Brume and the man in green
// (a rendezvous and a world choice), the ferry (an aparte; a world choice to walk through the night when a day was
// lost), the city if there is time, and the Assembly (a rendezvous and the last world choice). The time lost on the way
// is read from the world marks: a day at Sorgue (the mule, the wind), two days by the valley, one won back by night.
var PLI = { has: "role:pli" }, ROUTE = { has: "role:route" };
var PERDU = { any: [{ has: "monde:retard_mule" }, { has: "monde:retard_attente" }] };
var VALLEE = { has: "monde:retard_vallee" }, FORCE = { has: "monde:nuit_forcee" };
var RETARD = { any: [PERDU, VALLEE] };
var TARD = { any: [{ all: [VALLEE, PERDU] }, { all: [VALLEE, { not: FORCE }] }] };
var MATIN = { any: [{ all: [{ not: PERDU }, { not: VALLEE }] }, { all: [PERDU, FORCE, { not: VALLEE }] }] };
var VIVANT = { all: [{ not: PERDU }, { not: VALLEE }] };
var CYGNE = { all: [{ any: [{ has: "monde:cygne_pris" }, { has: "monde:gaut_soigne" }] }, { not: { has: "monde:cygne_rendu" } }, { any: [{ not: { has: "monde:cygne_vole" } }, { has: "monde:ancelin_vaincu" }] }] };
var PREUVES = [{ has: "monde:preuve_cire" }, { has: "monde:preuve_cendre" }, { confie: "p_vu" }, { has: "monde:preuve_pere" }, { has: "monde:preuve_ancelin" },
  { has: "monde:preuve_hesme" }, { has: "monde:preuve_gaut" }, { has: "monde:preuve_billet" }];
var SEUL = { has: "monde:guide_parti" };

var passages = {
  E_descente: { act: "III", title: "La descente", place: "ourse", fx: { catchup: 2, catchupWhy: "la traversée des Dents de Sorgue" },
    text: [
      { if: { not: VALLEE }, text: "Le matin se lève sur l'autre versant. Vous descendez du col par de grandes pentes douces, la neige jusqu'aux genoux, puis jusqu'aux chevilles, puis plus du tout : des pâturages jaunes, des mélèzes, un ruisseau qui chante sous la glace. En bas, le lac de Brume remplit tout l'horizon, gris et lisse comme une ardoise." },
      { if: VALLEE, text: "Le second jour de la route des salines, vous tournez autour de la dernière Dent, et le lac de Brume apparaît d'un coup au bout d'une vallée, gris et lisse comme une ardoise. La route remonte un peu vers le nord pour rejoindre le débouché de la gorge de l'Ourse, là où passe le chemin du lac." },
      { if: { all: [{ not: VALLEE }, { has: "monde:sans_brunette" }] }, text: "Le bât vous scie les épaules. Vous pensez tous les deux à Brunette, au chaud chez Berthe." },
      { if: RETARD, text: "Vous avez un jour de retard, ou deux, et ce matin vous les sentez tous les deux dans les jambes." },
      "Vers midi, le chemin rejoint le torrent de l'Ourse à l'endroit où il sort de la montagne par une fente de rocher noir. C'est là que la gorge des contrebandiers débouche sur le chemin du lac.",
    ],
    choices: [{ label: "Descendre jusqu'au débouché de la gorge", to: "E_gorge" }] },
  E_gorge: { act: "III", title: "Le débouché de la gorge", place: "ourse",
    text: [
      { first: true, text: "Brunette s'arrête et refuse d'avancer, les naseaux ouverts. Au bord du torrent, dans la neige, un cheval est couché sur le flanc, raide, un carreau d'arbalète planté dans le poitrail. Une selle des postes, le cor de chasse brodé sur la housse." },
      { first: true, if: { has: "monde:sans_brunette" }, text: "Sans Brunette, vous ne l'auriez pas vu tout de suite : c'est le corbeau sur le flanc qui vous l'a montré." },
      { first: true, if: { has: "monde:lumiere_gorge" }, text: "La lanterne qui descendait la gorge, la nuit, depuis le refuge : elle venait d'ici." },
      { first: true, text: "Les fontes sont ouvertes et vidées dans la neige. Du pain, de l'avoine, une couverture. Et des taches rouges, de la taille d'une pièce, qui partent du cheval et montent entre les rochers de la gorge." },
      { again: true, text: "Le cheval des postes est couché au bord du torrent. Les taches rouges montent entre les rochers." },
    ],
    choices: [{ label: "Suivre les taches de sang entre les rochers", to: [{ if: VIVANT, to: "E_gaut_vivant" }, { to: "E_gaut_mort" }] }] },
  E_gaut_vivant: { act: "III", title: "Le cavalier des postes", place: "ourse", fx: { meet: "gaut" },
    text: [
      { first: true, text: "Il est assis dans un creux de rocher, à cent pas du cheval, les genoux contre la poitrine, une main serrée sur l'épaule gauche. Un garçon de vingt ans, la peau tannée, les lèvres bleues. Le carreau d'arbalète lui a traversé l'épaule. Il a passé la nuit là, sans feu, et il vous regarde arriver sans bouger, comme on regarde la neige tomber." },
      { first: true, text: "« Vérenne ? » Sa voix est un souffle. « Vous êtes le pli de la chancellerie. » Il rit, et ça lui fait mal. « Je m'appelle Gaut. J'avais un jour d'avance sur vous. »" },
      { first: true, text: "Il ouvre son manteau. Contre sa chemise, dans un étui de cuir comme le tien, il y a une lettre fermée de cire blanche, au cygne. « À la présidente Lorge. En séance. Avant l'autre. Dame Hesmé a dit : avant l'autre. »" },
      { again: true, text: "Gaut est adossé au rocher, la main sur l'épaule." },
    ],
    choices: [
      { label: "Prendre le pli au cygne que Gaut te tend", role: "gaut", option: "pli", to: "E_gaut_pli", big: true },
      { label: "Panser l'épaule de Gaut et l'emmener avec vous", role: "gaut", option: "soin", to: "E_gaut_soin", big: true },
    ] },
  E_gaut_pli: { act: "III", title: "Le pli au cygne", place: "ourse",
    fx: { item: ["pli_cygne", "billet_hesme"], clue: ["cygne_pli", "gaut_ordre"], flag: ["monde:cygne_pris", "monde:preuve_billet"], ep: ["histoire", 1500] },
    text: [
      "La lettre est tiède de la chaleur de Gaut. Avec elle, il te donne un billet froissé, plié en quatre, de la même main pressée que l'adresse.",
      { if: PLI, text: "Tu as maintenant deux plis contre la poitrine. Un rouge et un blanc. Deux réponses de la même duchesse au même message. Elles pèsent le même poids." },
      { if: ROUTE, text: "Tu ranges le pli au cygne sous ta chemise, contre ta peau. Tu es guide, pas courrier. Tu portes maintenant une lettre de duchesse." },
    ],
    choices: [
      { label: "Panser aussi l'épaule de Gaut", role: "gaut", option: "soin", hide: { has: "monde:gaut_soigne" }, to: "E_gaut_soin" },
      { label: "Descendre vers le pont de Brume", to: "E_pont" },
    ] },
  E_gaut_soin: { act: "III", title: "Une épaule", place: "ourse",
    fx: { flag: ["monde:gaut_soigne", "monde:preuve_gaut"], ep: ["perso", 600] },
    text: [
      "Tu casses le carreau au ras de la peau et tu tires l'autre bout, d'un coup, par derrière. Gaut crie dans ton gant. Tu bandes l'épaule avec une chemise découpée, tu lui fais boire ce qu'il reste dans la gourde, tu le frictionnes jusqu'à ce que ses lèvres changent de couleur.",
      { if: { has: "monde:sans_brunette" }, text: "Il lui faut de l'aide pour marcher. Vous le soutiendrez à deux, un bras sur chaque épaule, jusqu'au lac." },
      { if: { not: { has: "monde:sans_brunette" } }, text: "Brunette accepte Gaut sur son bât en soufflant comme une forge. Il s'y couche, la joue contre la couverture." },
      "« Le pli au cygne, dit-il en fermant les yeux. Il ne me quitte pas. Je le donne à Lorge moi-même, ou à vous si je meurs en route. »",
    ],
    choices: [
      { label: "Prendre quand même le pli au cygne, par précaution", role: "gaut", option: "pli", hide: { has: "monde:cygne_pris" }, to: "E_gaut_pli" },
      { label: "Descendre vers le pont de Brume, avec Gaut", to: "E_pont" },
    ] },
  E_gaut_mort: { act: "III", title: "Le cavalier des postes", place: "ourse", fx: { meet: "gaut" },
    text: [
      { first: true, text: "Il est assis dans un creux de rocher, à cent pas du cheval, les genoux contre la poitrine, une main serrée sur l'épaule gauche. Un garçon de vingt ans. Le givre lui a blanchi les cils. Il est mort pendant la nuit, ou la nuit d'avant, seul, en tenant son épaule." },
      { first: true, text: "Un carreau d'arbalète lui a traversé l'épaule. Son manteau est fermé jusqu'au menton, boutonné de travers, comme on boutonne les mains gelées." },
      { again: true, text: "Gaut est assis dans son creux de rocher, les cils blancs." },
    ],
    choices: [
      { label: "Ouvrir son manteau et fouiller ses poches", role: "gaut", option: "pli", to: "E_gaut_fouille", big: true },
      { label: "Lui fermer les yeux et le couvrir de pierres", role: "gaut", option: "soin", to: "E_gaut_cairn", big: true },
    ] },
  E_gaut_fouille: { act: "III", title: "Le manteau boutonné", place: "ourse",
    fx: { item: ["pli_cygne", "billet_hesme"], clue: ["cygne_pli", "gaut_ordre"], flag: ["monde:cygne_pris", "monde:preuve_billet"], ep: ["histoire", 1500] },
    text: [
      "Contre sa chemise, dans un étui de cuir comme celui des courriers de la chancellerie, il y a une lettre fermée de cire blanche, au cygne de la duchesse, adressée à la présidente Aude Lorge, en main propre. Et un billet froissé, plié en quatre.",
      "Il a boutonné son manteau par-dessus, avec ses mains gelées, pour que l'homme à l'arbalète ne la trouve pas.",
    ],
    choices: [
      { label: "Lui fermer les yeux, ensuite, et le couvrir de pierres", role: "gaut", option: "soin", hide: { has: "monde:gaut_enterre" }, to: "E_gaut_cairn" },
      { label: "Descendre vers le pont de Brume", to: "E_pont" },
    ] },
  E_gaut_cairn: { act: "III", title: "Un cairn", place: "ourse", fx: { flag: "monde:gaut_enterre" },
    text: [
      "Tu lui fermes les yeux. Les paupières résistent, puis cèdent. Tu poses des pierres sur lui, des pierres plates du torrent, une à une, jusqu'à ce qu'il soit une petite pyramide grise au bord de la gorge, comme les cairns du col.",
      { if: { has: "passe:livre" }, text: "Tu lis la page des voyageurs, à voix haute, pour lui." },
      { if: { has: "passe:flute" }, text: "Tu joues l'air que tu as inventé à quinze ans. Le torrent fait le reste." },
    ],
    choices: [
      { label: "Fouiller ses poches avant de poser la dernière pierre", role: "gaut", option: "pli", hide: { has: "monde:cygne_pris" }, to: "E_gaut_fouille" },
      { label: "Descendre vers le pont de Brume", to: "E_pont" },
    ] },

  // ---------------------------------------------------------------- the bridge
  E_pont: { act: "III", title: "Le pont de Brume", place: "ourse", charniere: true, fx: { meet: "ancelin" },
    text: [
      { first: true, text: "Le pont de Brume est un pont couvert, en bois noirci, qui enjambe l'Ourse juste avant qu'elle se jette dans le lac. À son entrée, il y a la maison du péager, et sur le banc de la maison, au soleil d'hiver, trois hommes. L'un d'eux porte un manteau vert." },
      { first: true, text: "Il se lève sans hâte. Les deux autres se lèvent aussi, et l'un d'eux tient une arbalète, chargée, la pointe vers le sol." },
      { first: true, if: { has: "monde:menti_vert" }, text: "« La famille de Sorgue va bien ? » Il sourit. La cicatrice tire sur son œil gauche." },
      { first: true, if: { has: "monde:vert_mefiant" }, text: "« Le cheval noir mord toujours », dit-il. Il te regarde, toi, qui as touché à sa selle." },
      { first: true, if: { has: "monde:dit_vert" }, text: "« Brumefond, vous m'aviez dit. Vous voyez, je vous crois toujours. »" },
      { first: true, if: { has: "monde:carte_vert" }, text: "La croix sur sa carte, au bas de la gorge. Il vous attendait ici depuis le début." },
      { first: true, text: "« Je m'appelle Ancelin. Je ne vous veux pas de mal. Vous portez une lettre de la chancellerie, vous la porterez jusqu'au bout, c'est votre métier. » Il tend la main, paume ouverte. « Mais le cavalier des postes ne portait rien sur son cheval. Donc il portait sur lui. Je veux la lettre au cygne. »" },
      { first: true, if: { not: CYGNE }, text: "Ses hommes vous fouillent, vite, en professionnels. Ils ne trouvent que le pli de la chancellerie, et ils le laissent dans son étui. Ancelin hausse les épaules. « Alors elle est restée dans la gorge. Tant pis pour elle. Passez. »" },
      { again: true, text: "Ancelin attend, la main ouverte. L'arbalète regarde le sol." },
    ],
    choices: [
      { label: "Passer le pont", hide: CYGNE, to: "E_bac" },
      { label: "Lui donner le pli au cygne", if: CYGNE, monde: "pont", option: "donner", fx: { flag: "monde:cygne_rendu" }, to: [{ if: { item: "pli_cygne" }, to: "E_pont_rendu_moi" }, { to: "E_pont_rendu" }], big: true },
      { label: "Lui tendre le billet de Dame Hesmé, plié comme une lettre", if: { all: [CYGNE, { item: "billet_hesme" }] }, monde: "pont", option: "ruse", test: { dom: "discretion", diff: -10, label: "Discrétion" },
        win: { fx: { drop: "billet_hesme", unflag: "monde:preuve_billet", flag: "monde:ruse_pont", ep: ["seance", 1500] }, to: "E_pont_ruse" }, lose: { to: "E_pont_combat" }, big: true },
      { label: "Refuser, et tirer ton arme", if: CYGNE, monde: "pont", option: "battre", to: "E_pont_combat", big: true },
    ] },
  E_pont_rendu_moi: { act: "III", title: "La main ouverte", place: "ourse", fx: { drop: "pli_cygne" },
    text: [
      "Tu sors le pli au cygne de sous ta chemise et tu le poses dans la main ouverte d'Ancelin. La cire blanche est tiède encore.",
    ],
    choices: [{ label: "Regarder ce qu'il en fait", to: "E_pont_rendu" }] },
  E_pont_rendu: { act: "III", title: "La lettre au cygne", place: "ourse",
    text: [
      "Ancelin tient le pli au cygne entre deux doigts. Il le garde fermé. Il le regarde, comme on regarde une carte qu'on vient de gagner, et il le glisse sous son manteau vert.",
      { if: { has: "monde:gaut_soigne" }, text: "Sur le bât de Brunette, Gaut tourne la tête vers le lac et ferme les yeux." },
      "« Passez, dit Ancelin. Bonne séance. » Ses hommes s'écartent. Le pont couvert sent le bois humide et la fiente de pigeon. Vous le traversez sans vous retourner.",
    ],
    choices: [{ label: "Descendre vers le bac", to: "E_bac" }] },
  E_pont_ruse: { act: "III", title: "Un billet plié", place: "ourse",
    text: [
      "Tu plies le billet de Dame Hesmé en quatre, comme une lettre, en cachant l'écriture dans ta paume, et tu le poses dans la main d'Ancelin avec la mine de quelqu'un qui perd. Il le glisse sous son manteau sans le déplier. Les gens qui gagnent ne vérifient pas.",
      "« Passez. Bonne séance. » Vous traversez le pont couvert d'un pas égal. Au milieu du pont, tu entends derrière vous un juron, très loin, et puis rien : vous êtes déjà sur l'autre rive, et l'autre rive appartient aux Ligues, où un homme de Vérenne avec une arbalète ne se promène pas.",
    ],
    choices: [{ label: "Descendre vers le bac", to: "E_bac" }] },
  E_pont_combat: { act: "III", title: "Le pont couvert", place: "ourse",
    combat: { title: "Le pont de Brume", enemies: ["ancelin", "homme_vert"], range: "contact", terrain: "nature",
      win: { fx: { flag: ["monde:ancelin_vaincu", "monde:preuve_ancelin"], clue: "ancelin_lettre", ep: ["seance", 2000] }, to: "E_pont_vaincu" },
      lose: { to: [{ if: { item: "pli_cygne" }, to: "E_pont_vole" }, { to: "E_pont_battu" }] },
      flee: { label: "Sauter du pont dans le torrent", dom: "nature", diff: -10, to: "E_pont_saut" } },
    text: [
      "L'arbalète se lève. Le carreau part, siffle, et se plante dans le poteau du pont, à une main de ta tête. Ancelin tire son épée longue, et l'autre homme jette l'arbalète pour prendre une hache.",
    ] },
  E_pont_vaincu: { act: "III", title: "Le manteau vert", place: "ourse",
    text: [
      "Ancelin est à genoux sur les planches du pont, l'épée tombée à l'eau, une main sur la cuisse qui saigne. Ses hommes ont fui par la route du col. Il te regarde avec une sorte d'intérêt.",
      "Dans son manteau, il y a une bourse, un briquet, et une lettre sans signature, d'une belle écriture de chancellerie : *Qu'aucune autre réponse n'arrive. Tu sais à qui t'adresser au lac.*",
      "« Prends-la, dit Ancelin. Elle ne me servira plus. » Il sourit avec la moitié de la bouche. « Lui non plus ne me servira plus, quand il saura. »",
    ],
    choices: [
      { label: "Le laisser au péager, les mains liées", fx: { flag: "monde:ancelin_lie" }, to: "E_bac" },
      { label: "Le laisser partir, à pied, vers le col", to: "E_bac" },
    ] },
  E_pont_vole: { act: "III", title: "Les planches du pont", place: "ourse", fx: { drop: "pli_cygne", flag: "monde:cygne_vole" },
    text: [
      "Tu te réveilles sur les planches du pont, la joue dans la poussière et le sel. Ta tête sonne. Ta chemise est ouverte, et l'étui du pli au cygne est vide.",
      "Le pli de la chancellerie est toujours là, dans l'autre étui. Ancelin n'en voulait pas.",
    ],
    choices: [{ label: "Te relever et descendre vers le bac", to: "E_bac" }] },
  E_pont_battu: { act: "III", title: "Les planches du pont", place: "ourse",
    text: [
      "Tu te réveilles sur les planches du pont, la joue dans la poussière et le sel. Ta tête sonne. Le péager te regarde depuis sa porte, une bassine d'eau à la main, sans oser approcher.",
      "Tes poches ont été retournées. On t'a laissé tout ce qui était à toi.",
    ],
    choices: [{ label: "Te relever et descendre vers le bac", to: "E_bac" }] },
  E_pont_saut: { act: "III", title: "L'Ourse", place: "ourse", fx: { flag: "monde:pont_saut" },
    text: [
      "Tu sautes par-dessus le garde-fou. L'eau de l'Ourse est si froide qu'elle te prend le souffle avant de te prendre tout le reste. Le torrent t'emporte, te roule, te recrache cent pas plus bas sur une grève de galets, au bord du lac.",
      "Tu as gardé tes plis. Tu les sens contre ta poitrine, mouillés, dans leurs étuis de cuir. Tu grelottes jusqu'au bac.",
    ],
    choices: [{ label: "Rejoindre le bac", to: "E_bac" }] },

  // ---------------------------------------------------------------- the ferry
  E_bac: { act: "III", title: "Le bac de Brume", place: "brumefond", aparte: true,
    text: [
      { first: true, text: "Le bac est un grand radeau de planches tiré par une corde d'une rive à l'autre, et le passeur est un vieux qui chique et qui garde ses questions pour lui. De l'autre côté de l'eau, à une heure, Brumefond allume ses lumières une à une : les quais, les ponts couverts, et au milieu, sur une butte, le toit d'ardoise de la salle de l'Assemblée." },
      { first: true, if: { has: "monde:gaut_soigne" }, text: "Gaut dort sur le bât de Brunette, ou sur vos manteaux. Il respire." },
      { first: true, if: { has: "monde:pont_saut" }, text: "Le passeur te jette une couverture de cheval sans rien dire." },
      { first: true, if: RETARD, text: "« Le vote, c'est demain soir, dit le passeur en crachant dans l'eau. Toute la ville ne parle que de ça. »" },
      { again: true, text: "Le bac glisse sur l'eau noire. Les lumières de Brumefond se rapprochent." },
    ],
    choices: [
      { label: "Dormir chez le passeur, et entrer dans Brumefond à l'aube", monde: "nuit", option: "dormir", to: "E_aube" },
      { label: "Ne pas dormir : marcher toute la nuit pour rattraper le temps perdu", monde: "nuit", option: "marcher", if: RETARD, fx: { flag: "monde:nuit_forcee", pv: -2 }, to: "E_aube" },
    ] },
  E_aube: { act: "III", title: "Les portes de Brumefond", place: "brumefond",
    text: [
      { if: FORCE, text: "Vous avez marché toute la nuit le long du lac, sans vous arrêter, en vous relayant pour porter la lanterne. À l'aube, vous avez les jambes en bois et les portes de Brumefond devant vous." },
      { if: { not: FORCE }, text: "Le passeur vous réveille à l'aube avec un bol de lait de chèvre. Les portes de Brumefond ouvrent au son d'une cloche fêlée." },
      { if: TARD, text: "La ville est pavoisée de rouge. Il y a des affiches fraîches sur toutes les portes, et la cloche de la salle de l'Assemblée sonne à toute volée." },
      { if: { all: [{ not: TARD }, { not: MATIN }] }, text: "Le soleil est déjà bas sur le lac quand vous passez les portes : il faut courir." },
      { if: MATIN, text: "C'est le matin du vote. La séance ouvre au coucher du soleil. Vous avez le jour devant vous." },
    ],
    choices: [{ label: "Entrer dans la ville", to: [{ if: TARD, to: "E_fin_tard" }, { if: MATIN, to: "E_ville" }, { to: "E_juste" }] }] },

  // ---------------------------------------------------------------- the city
  E_ville: { act: "III", title: "Brumefond", place: "brumefond", hub: true,
    text: [
      { first: true, text: "Brumefond sent le poisson fumé, le sel et le bois mouillé. On parle partout du vote : dans les échoppes, sur les ponts, aux fontaines. Les gens vous regardent passer, avec vos manteaux de Vérenne et vos bottes de montagne." },
      { first: true, text: "Sur le quai aux Sels, une enseigne de bois peint montre un cygne blanc. Plus loin, la place du Marché-aux-Sels s'ouvre sur le lac, avec une estrade de planches au milieu. Et au-dessus de tout, sur sa butte, la salle de l'Assemblée." },
      { again: true, text: "Le jour avance sur Brumefond. La cloche de l'Assemblée sonnera au coucher du soleil." },
    ],
    choices: [
      { label: "Aller sur la place du Marché-aux-Sels", hide: { seen: "E_place" }, to: "E_place" },
      { label: "Chercher le registre de la prévôté", if: PLI, hide: { any: [{ seen: "E_registre" }, { seen: "E_prevote" }] }, to: "E_prevote" },
      { label: "Entrer à l'auberge du Cygne, sur le quai aux Sels", if: ROUTE, hide: { seen: "E_cygne" }, to: "E_cygne" },
      { label: "Monter à la salle de l'Assemblée", to: "E_assemblee" },
    ] },
  E_place: { act: "III", title: "Le Marché-aux-Sels", place: "brumefond",
    text: [
      "La place est pavée de pierres roses, usées par le sel. Les marchands ont replié leurs étals : il n'y a plus de sel à vendre depuis trois ans. Au milieu, une estrade de planches, où l'on monte les jours de fête pour jouer des farces. Et les jours de justice pour autre chose.",
      { if: PLI, text: "Tu restes au pied de l'estrade. Tu avais une image de cette place, depuis douze ans, faite de l'affiche et de ce que ta mère n'a pas dit. Elle est plus petite. Il y a des enfants qui jouent à la marelle sur les pierres roses, et un chat sur les marches de l'estrade." },
      { if: { all: [PLI, { has: "passe:couteau" }] }, text: "Tu sors le couteau à manche de corne de ta botte. Tu le tiens longtemps. Puis tu le ranges." },
      { if: { all: [ROUTE, { secret: "p_pere" }] }, text: "C'est ici. Tu regardes {autre}, au pied de l'estrade, et tu te tais. Tu restes un peu en arrière, assez près pour qu'on te sache là." },
      { if: { all: [ROUTE, { not: { secret: "p_pere" } }] }, text: "{autre} s'arrête au pied de l'estrade et reste là un long moment, sans un mot, à regarder les planches. Tu attends. Tu ne sais pas ce que tu attends." },
    ],
    choices: [{ back: "E_ville" }] },
  E_prevote: { act: "III", title: "La prévôté", place: "brumefond",
    text: [
      "La prévôté de Brumefond tient ses registres dans une salle voûtée, sous la tour de l'horloge. Le greffier est un homme gris aux manches de lustrine, qui lève la tête de son écritoire comme on la lève de son lit.",
      "« Les registres d'il y a douze ans ? Pour un nom ? » Il te regarde, regarde ton manteau aux armes de Vérenne. « Un jour de vote ? »",
    ],
    choices: [
      { label: "Lui dire ton nom, et celui de ton père", test: { dom: "social", diff: 0, label: "Social" },
        win: { to: "E_registre" }, lose: { to: "E_prevote_non" } },
    ] },
  E_prevote_non: { act: "III", title: "Le greffier", place: "brumefond",
    text: [
      "« Cabrol. » Le greffier repose sa plume. « Je me souviens de l'affaire. Je ne vous montrerai rien. Revenez après le vote, s'il y a encore une prévôté. »",
    ],
    choices: [
      { label: "Poser deux écus sur l'écritoire", fx: { gold: -2 }, to: "E_registre" },
      { back: "E_ville" },
    ] },
  E_registre: { act: "III", title: "Le registre de la Saint-Clair", place: "brumefond",
    fx: { clue: "pere_registre", flag: "monde:preuve_pere", ep: ["histoire", 1000] },
    text: [
      "Le greffier pose devant toi un gros registre relié de veau, ouvert à la date de la Saint-Clair, il y a douze ans. Une écriture fine, à l'encre pâlie.",
      "*Aymon Cabrol, de Vérenne, marchand de sel, convaincu d'espionnage pour le compte du duché. Ont été saisies sur lui onze lettres chiffrées, signées d'un clerc de la chancellerie de Vérenne, O. Daumas, qui l'employait. Requis par l'Assemblée, le duché a répondu ne connaître ni Cabrol ni Daumas. Pendu au Marché-aux-Sels.*",
      "O. Daumas. Maître Oriel Daumas, chancelier. *J'ai connu ton père. Il servait bien.*",
      "Tu recopies la ligne sur la page de garde de ton livre, ou sur ta main, sur ce que tu as.",
    ],
    choices: [{ back: "E_ville" }] },
  E_cygne: { act: "III", title: "L'auberge du Cygne", place: "brumefond",
    fx: { flag: "monde:preuve_hesme" },
    text: [
      "L'auberge du Cygne est une salle basse aux poutres noires, qui sent la bière et la fumée. Derrière le comptoir, un vieil homme en tablier essuie des chopes. Il te regarde entrer, regarde tes bottes, et pose sa chope.",
      { if: { has: "argent_pris" }, text: "« Le guide de l'Ourse. » Il sort une bourse du tiroir et la pose sur le comptoir. Quinze écus. Puis il se penche. « Dame Hesmé m'a écrit par pigeon. Gaut est-il arrivé ? Un cavalier des postes, par la gorge. Il devait être ici hier. »" },
      { if: { not: { has: "argent_pris" } }, text: "« Le guide qui a refusé. » Il sourit. « Dame Hesmé m'a écrit par pigeon. Elle a de l'estime pour les gens qu'elle ne peut pas acheter. » Il se penche. « Gaut est-il arrivé ? Un cavalier des postes, par la gorge. Il devait être ici hier. »" },
      "Et il t'explique, à voix basse, parce qu'il croit que tu sais déjà la moitié : la duchesse a écrit oui. Sa réponse est partie de la chancellerie, et Dame Hesmé se méfie du chancelier. Elle a fait écrire une seconde réponse par Sa Grâce, scellée du cygne, et l'a confiée à Gaut. Le jour de retard, c'était pour que le cygne parle le premier.",
      { if: { has: "monde:gaut_soigne" }, text: "Tu lui dis que Gaut est vivant, au bac, avec une épaule ouverte. Le vieil homme ferme les yeux une seconde." },
      { if: { all: [{ not: { has: "monde:gaut_soigne" } }, { has: "monde:gaut_enterre" }] }, text: "Tu lui dis où est Gaut, sous un cairn au bord de la gorge. Le vieil homme pose ses deux mains à plat sur le comptoir." },
    ],
    choices: [
      { label: "Prendre les quinze écus, et partir par la porte du lac", if: { has: "argent_pris" }, fx: { gold: 15, flag: "monde:guide_parti" }, to: "E_fin_fuite" },
      { label: "Prendre les quinze écus, et monter à l'Assemblée", if: { has: "argent_pris" }, fx: { gold: 15 }, to: "E_ville" },
      { label: "Laisser la bourse sur le comptoir", if: { has: "argent_pris" }, fx: { flag: "monde:argent_laisse" }, to: "E_ville" },
      { label: "Le remercier, et remonter vers l'Assemblée", if: { not: { has: "argent_pris" } }, to: "E_ville" },
    ] },
  E_juste: { act: "III", title: "La cloche", place: "brumefond",
    text: [
      "Vous courez dans les rues de Brumefond, Brunette à la longe, ou sans Brunette, à travers les marchés qui ferment et les ponts couverts où les gens vous regardent passer. La cloche de l'Assemblée sonne au-dessus de la ville. Elle sonne la séance.",
      "Vous montez la butte quatre à quatre. Les huissiers ferment déjà les portes.",
    ],
    choices: [{ label: "Passer les portes avant qu'elles se ferment", to: "E_assemblee" }] },

  // ---------------------------------------------------------------- the Assembly
  E_assemblee: { act: "III", title: "L'Assemblée des Ligues", place: "brumefond", charniere: true, fx: { meet: ["lorge", "varrache"] },
    text: [
      { first: true, text: "La salle de l'Assemblée est longue et haute, sous une charpente de chêne noirci, avec quarante délégués sur des bancs de part et d'autre et, au fond, sous les armes des Ligues, une vieille femme à la peau sombre et aux cheveux blancs tressés : la présidente Aude Lorge. À sa droite, debout, les gants à la main, un homme blond à moustache, Odo Varrache, capitaine-général." },
      { first: true, text: "L'huissier annonce : « Le courrier de Vérenne, avec la réponse de Sa Grâce la duchesse Ysaure. » Quarante têtes se tournent." },
      { first: true, if: SEUL, text: "Tu es seul{e}. {autre} n'est pas venu{autre:e}. Tu as cherché sur le quai, au Cygne, aux portes. Tu remontes l'allée entre les bancs avec ta sacoche et ton souffle." },
      { first: true, if: { has: "monde:gaut_soigne" }, text: "Derrière vous, deux garçons du port portent Gaut sur une civière. Il a voulu venir. Il a le visage gris et les yeux ouverts." },
      { first: true, if: { has: "monde:pli_brise" }, text: "Le sceau de la chancellerie, sur le pli, est fendu en deux. Tout le monde le verra." },
      { first: true, if: { has: "monde:mahaut" }, text: "Tu penses à Mahaut, dans sa cuisine sans toit de Salins-Bas. *Dites-leur que Salins-Bas a voté.*" },
      { first: true, text: "Varrache sourit. La présidente tend la main." },
      { again: true, text: "La présidente attend, la main tendue. Quarante délégués retiennent leur souffle." },
    ],
    choices: [
      { label: "Remettre le pli de la chancellerie, comme on te l'a ordonné", monde: "remise", option: "chancellerie", to: "E_fin_guerre", big: true },
      { label: "Remettre le pli au cygne", if: CYGNE, monde: "remise", option: "cygne", to: "E_fin_cygne", big: true },
      { label: "Remettre les deux plis, et dire tout ce que vous savez", if: CYGNE, monde: "remise", option: "deux", to: [{ if: { count: PREUVES, min: 3 }, to: "E_fin_paix" }, { to: "E_fin_treve" }], big: true },
      { label: "Ne rien remettre, et sortir de la salle", monde: "remise", option: "partir", to: "E_fin_chemin", big: true },
    ] },

  // ---------------------------------------------------------------- endings
  E_fin_paix: { act: "III", title: "La paix des salines", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:paix" },
    text: [
      "Aude Lorge brise le cachet rouge et lit en silence. Puis elle brise le cachet blanc, et lit encore. Elle pose les deux lettres côte à côte devant elle, l'une portant un cygne de cire au dedans, l'autre rien.",
      "Alors vous parlez. Vous dites tout, l'un après l'autre, sans vous regarder : la cire refondue, la lettre brûlée à minuit, l'homme au manteau vert, le cavalier de la gorge, le registre de la prévôté, ce que chacun a vu de son côté. Quarante délégués écoutent. Varrache, à la troisième phrase, a cessé de sourire.",
      "La présidente lit à haute voix la réponse au cygne. *Nous acceptons. Que les salines soient partagées, que les morts soient pleurés des deux côtés, et que nos enfants apprennent le chemin du lac.* Puis elle lève la lettre rouge. « Et ceci est l'écriture d'un homme que cette Assemblée a déjà rencontrée, il y a douze ans. »",
      "On vote à main levée, à la lumière des chandelles. Trente et une mains pour la paix. Varrache sort avant la fin du compte.",
      { if: PLI, text: "En sortant, tu passes par la place du Marché-aux-Sels. L'estrade est vide. Tu t'assieds sur ses marches, à côté du chat, et {autre} s'assied à côté de toi." },
      { if: ROUTE, text: "En sortant, {autre} prend le chemin de la place du Marché-aux-Sels. Tu suis. {autre} s'assied sur les marches de l'estrade, et tu t'assieds à côté." },
    ] },
  E_fin_cygne: { act: "III", title: "Le cachet au cygne", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:cygne" },
    text: [
      "Tu tends à la présidente le pli fermé de cire blanche. Elle reconnaît le cygne avant même de le toucher, et quelque chose se détend dans son vieux visage.",
      "*Nous acceptons. Que les salines soient partagées, que les morts soient pleurés des deux côtés, et que nos enfants apprennent le chemin du lac.*",
      "On vote à main levée. Vingt-six mains pour la paix. Varrache vote contre, et vote contre en souriant, ce qui est pire.",
      "Le pli rouge reste dans son étui, contre ta poitrine. Personne ne le demande. À Vérenne, la chancellerie apprendra la paix par la rumeur, et le chancelier Oriel attendra tout l'hiver sa guerre, en se demandant où son mensonge s'est perdu.",
    ] },
  E_fin_treve: { act: "III", title: "Un mois de trêve", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:treve" },
    text: [
      "Aude Lorge lit les deux lettres, l'une après l'autre. La rouge dit non. La blanche dit oui. Deux réponses de la même duchesse, arrivées le même jour, par deux chemins.",
      "Vous parlez. Vous dites ce que vous savez, et c'est trop peu : un cachet, un nom, une impression. Varrache se lève. « Vérenne ne sait pas ce qu'elle veut. Ou elle veut que nous ne le sachions pas. Une duchesse qui écrit oui et non le même jour mérite qu'on lui réponde par l'épée. »",
      "La présidente lève la main. « Une duchesse qui écrit oui et non le même jour mérite qu'on lui demande laquelle de ses mains a écrit. » L'Assemblée vote une trêve d'un mois et l'envoi de trois délégués à Vérenne.",
      "Un mois, c'est l'hiver qui passe. C'est la neige qui fond sur l'Ourse. C'est un chancelier qui a un mois pour trouver une explication.",
    ] },
  E_fin_guerre: { act: "III", title: "La réponse de la chancellerie", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:guerre" },
    text: [
      "Tu tends le pli de la chancellerie. Aude Lorge brise la cire et lit à haute voix, d'une voix égale qui ne monte à aucun moment. *Nous ne partageons pas les salines de la Sorgue. Nous ne pleurons pas avec ceux qui brûlent nos villages. Que l'Assemblée vote ce qu'elle voudra : Vérenne a voté.*",
      { if: { has: "monde:pli_lu" }, text: "Tu connais chaque mot avant qu'elle le lise." },
      { if: { has: "monde:pli_brise" }, text: "Elle s'arrête sur le sceau fendu, et te regarde par-dessus la lettre. Elle ne dit rien." },
      { if: CYGNE, text: "Contre ta poitrine, ou contre celle de {autre}, le pli au cygne reste dans son étui. Personne ne le demande." },
      "On vote à main levée. Trente-quatre mains pour la guerre. Varrache remet ses gants. Il passe près de vous en sortant, et il vous remercie, très poliment, d'avoir fait si bonne route.",
      "Au printemps, quand la neige aura fondu sur l'Ourse, les troupes des Ligues passeront le col que vous venez de passer.",
    ] },
  E_fin_chemin: { act: "III", title: "Le chemin du retour", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:chemin" },
    text: [
      "Tu baisses la main. Tu regardes la présidente, et Varrache, et les quarante délégués, et tu fais demi-tour. L'huissier s'écarte. Le règlement de l'Assemblée a tout prévu, sauf un courrier qui repart avec son pli.",
      "Dehors, la nuit est tombée sur le lac. Derrière vous, dans la salle, la séance continue sans réponse de Vérenne, et une Assemblée sans réponse vote ce que son capitaine-général lui dit de voter.",
      "Vous redescendez la butte, côte à côte, avec deux lettres dans vos étuis, et la nuit pour décider ce qu'elles valaient.",
    ] },
  E_fin_tard: { act: "III", title: "Trop tard", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:tard" },
    text: [
      "Les affiches sur les portes sont fraîches de la nuit. *L'Assemblée des Ligues, réunie au soir de la nouvelle lune, n'ayant reçu aucune réponse du duché de Vérenne, déclare la paix offerte caduque et confie au capitaine-général Varrache la défense des salines de la Sorgue.*",
      "Le vote a eu lieu hier soir. Vous avez passé les portes ce matin.",
      "Tu as encore le pli contre ta poitrine. Personne ne le demandera plus.",
    ] },
  E_fin_fuite: { act: "III", title: "La porte du lac", place: "brumefond", end: true, epilogue: true, fx: { flag: "fin:fuite" },
    text: [
      "Tu prends la bourse. Trente écus en tout, avec ceux de Vérenne. Le prix de deux mules, ou d'une vie ailleurs. Le vieil homme du Cygne te regarde faire sans rien dire.",
      "La porte du lac s'ouvre sur la route de l'est, vers les pays où l'on parle d'autre chose que des salines. Tu la prends. Derrière toi, {autre} monte seul{autre:e} vers la salle de l'Assemblée, avec ce que tu sais et que tu n'auras pas dit.",
      "Tu ne te retournes pas avant le premier tournant. Au premier tournant, tu te retournes.",
    ] },
};
module.exports = { passages: passages, PREUVES: PREUVES };
