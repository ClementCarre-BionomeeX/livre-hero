// Le Douzième Coup · chapter 13, the one who stays, second half (act IV, 21 June 601, from dawn to a quarter to
// eleven). Dawn in the lower town taken (hub `K13r_aube`): what the other's night has changed under the
// Trois-Chandelles (`r:brindille_soignee` with the decoction), rue de la Poulie (`r:hurel_vue`), on the quay
// (`r:perrine_marques`) ; the Comptoir. Then the climb with three hundred Veilleurs and the square before the
// Serment (hub `K13r_parvis`): old Line in her strapped chair (`r:line_parle`, `r:girard_dit`, `r:vol_avoue`,
// `r:line_montre`), the Régente according to the night, Hardouin woken at the foot of the Tower for the second
// hand (`r:signe_hardouin` → `monde:ordonnance_garde`), the bronze door counted (`r:vu_postes`), Haudoin's word
// (`r:mot_escalier`), the companions' posts, the twelve doors, Josse Noyer found on his bollard
// (`r:josse_trouve`, `r:josse_eveille`), the forty buyers (`r:vu_acheteurs`). Last, the choice of the way down :
// the stair (`r:voie_escalier`) or the Droit (`r:voie_droit`), and B13.
var P = {};
var JEHAN = { present: "jehan" };
var ROUGET = { present: "rouget" };
var CARILLON = { present: "carillon" };
var UNE_PINCEE = { stock: "sable", min: 3 };
var LIBRE = { has: "monde:regente_libre" };
var DEDANS = { all: [{ has: "monde:regente_dedans" }, { not: { has: "monde:regente_libre" } }] };
var TENUE = { not: { any: [{ has: "monde:regente_libre" }, { has: "monde:regente_dedans" }] } };
var ATTELE = { has: "monde:girard_attele" };
var ORD = { item: "ordonnance_garde" };
var ORD2 = { has: "monde:ordonnance_garde" };
var SORTIE = { has: "monde:brindille_sortie" };
var PIECE = { has: "monde:florizel_piece" };

Object.assign(P, {
  K13r_tantot: { act: "IV", title: "Le dernier nom", place: "basse", ambiance: "temple",
    text: [
      "Tu dors sur la paille, entre une Veilleuse qui ronfle et un pèlerin de 541 qui lève le menton vers la voûte. Tu dors mal, et pourtant d'un trait : c'est un sommeil de glaneur, qu'on prend où il se trouve.",
      "Une main te touche l'épaule. Par le trou de la voûte, le ciel de 601 a blanchi. Les veilleuses ont l'air sales.",
      "Près du chœur, la voix qui récitait s'est faite plus lente. On en est aux derniers feuillets. Trois cents personnes sont debout dans la nef, tournées vers elle, leur couverture sur le bras. La Doyenne lit elle-même. Elle dit un nom, et elle attend ; un Pater ; elle dit le suivant.",
      "« Thibaude Lorin, lavandière, trente ans. » Un Pater. « Son enfant, dont on ignore le nom. » Un Pater.",
      "Elle tourne la dernière page. Elle la regarde un moment. Puis elle ferme le registre, et elle dit, sans lire, d'une autre voix : « Et celle qui chantait à ma gauche, dans le chœur de Sainte-Aure, et qui en était au milieu d'un verset. » Elle se tait le temps d'un Pater. Toute l'église se tait avec elle.",
      { after: "r:nom_lison", text: "Cette nuit, entre deux noms de la rue Droite, quelqu'un a dit : *Lison, de Roquebise, cinq ans.* C'était ta voix. Elle est au registre, à présent, à l'encre, de la main d'une inconnue qui t'a demandé l'orthographe." },
      "« C'est le soixantième matin, dit la Doyenne. Nous montons à huit heures. Ceux qui ont de mauvaises jambes partent maintenant. »",
      { with: "rouget", text: "Rouget te tend un quignon. Il est debout depuis longtemps ; il a fait le tour du quartier. « Y a des choses qui ont changé, dit-il, la bouche pleine. Je sais pas dire lesquelles. C'est comme une chambre où on a déplacé un banc. »" },
    ],
    choices: [{ label: "Te lever de la paille", to: "K13r_aube", big: true }] },

  K13r_aube: { act: "IV", title: "Le soixantième matin", place: "basse", ambiance: "ville", hub: true, backName: "le quai",
    text: [
      { first: true, text: "Il fait deux jours à la fois. Le ciel de 601 se lève au levant, gris de perle, avec une barre rose ; et la ville, dessous, garde sa lumière de midi, qu'elle porte sur elle depuis soixante ans comme un vêtement. Les pris ont leur ombre courte, ramassée sous eux. La tienne s'allonge sur le quai, toute seule, jusqu'à l'eau." },
      { first: true, text: "C'est l'heure où les glaneurs rentrent et où les pèlerins sortent. On se croise sans se saluer, entre les mariniers figés. Des Veilleurs remontent déjà, par petits groupes gris, vers la rue Droite ; ils portent leurs vieux sur des chaises." },
      { first: true, text: "Tu regardes ce quai que tu as traversé trois fois. Quelque chose y a bougé d'un doigt. {autre} a eu sa nuit : elle est passée par ici il y a soixante ans, et ce matin elle est vraie." },
      { again: true, text: "Le quai, les deux jours l'un sur l'autre, les ombres courtes des pris. Là-haut, la Tour a l'aiguille sur le douze." },
    ],
    choices: [
      { label: "Le pont des Trois-Chandelles", hide: { any: [{ seen: "K13r_pont_aube" }, { not: { has: "r:vu_brindille" } }] }, to: "K13r_pont_aube" },
      { label: "La rue de la Poulie, sous l'enseigne du Dé", hide: { any: [{ seen: "K13r_poulie" }, { not: { any: [{ has: "r:lu_ansel" }, { has: "monde:hurel_lettre" }, { has: "monde:hurel_debout" }] } }] }, fx: { flag: "r:hurel_vue", ep: ["perso", 400] }, to: "K13r_poulie" },
      { label: "Le mur de la Patiente, au pignon à la cloche bleue", hide: { any: [{ seen: "K13r_patiente" }, { not: { has: "monde:perrine_debout" } }, { has: "monde:perrine_sortie" }] }, fx: { flag: "r:perrine_marques", ep: ["perso", 400] }, to: "K13r_patiente" },
      { label: "Le Comptoir des glaneurs, le matin du Serment", to: "K13r_comptoir_aube" },
      { label: "Huit heures : monter avec les Veilleurs", to: "K13r_montee", big: true },
    ] },

  K13r_pont_aube: { act: "IV", title: "Sous l'arche, ce matin", place: "basse", ambiance: "eau",
    text: [
      { if: SORTIE, text: "Tu descends aux crampons. Sous l'arche, la banquette est vide." },
      { if: SORTIE, text: "Tu restes un moment sans comprendre. Hier, il y avait ici trente enfants pris, en tas, et une paillasse, avec une petite fille grise dessus, de quatre ans, un pouce dans la bouche. Tu y as peut-être laissé une lampe. Il reste la paillasse, creusée d'un creux d'enfant, sèche, et autour, sur la pierre, des choses rangées avec un soin de pauvres : une écuelle retournée, un os à tracer, trente chiffons pliés." },
      { if: SORTIE, text: "Près de l'écuelle, en ligne, il y a des boulettes grises, de la grosseur d'une noisette, aplaties d'un côté par un pouce. Tu en comptes cinquante-huit. Deux manquent : quelqu'un a gardé les siennes." },
      { if: SORTIE, text: "Sur le pilier, à hauteur d'enfant, on a écrit au charbon, d'une écriture qui n'avait pas appris : *ON A PRI QUE DU PIN. ET DES SOULIÉ.* Dessous, d'une autre main, plus petite : *la petite a marché le dernier bout.*" },
      { if: SORTIE, text: "Tu remontes. Tu as dans la gorge quelque chose de gros. {autre} a fait cela cette nuit, avec de la cire et trois phrases ; et soixante ans après, sous un pont, il manque trente dormants au compte des Veilleurs." },
      { if: { all: [{ not: SORTIE }, { has: "monde:brindille_ecorce" }] }, text: "Tu descends aux crampons. Ils sont là, les trente, en tas, comme hier. La petite est sur sa paillasse." },
      { if: { all: [{ not: SORTIE }, { has: "monde:brindille_ecorce" }] }, text: "Elle a changé. Tu la regardes longtemps avant de dire en quoi. Elle est prise du même geste, le pouce à la bouche ; mais le gris a quitté ses joues, il ne lui reste qu'aux tempes, et elle a au cou, pendue à une ficelle, une cuiller de bois. Son frère, près d'elle, la regardait au moment du coup. Hier, il avait la figure d'un garçon qui compte les jours. Ce matin, il rit." },
      { if: { all: [{ not: SORTIE }, { has: "monde:brindille_ecorce" }] }, text: "Deux cuillerées sur dix-neuf. Elle a soixante ans pour attendre les dix-sept autres, et elles l'attendent quelque part : dans une chemise, là-haut, ou dans ton flacon." },
      { if: { not: { any: [SORTIE, { has: "monde:brindille_ecorce" }] } }, text: "Tu descends aux crampons. Ils sont là, les trente, en tas, comme hier, et la petite sur sa paillasse, grise jusqu'aux lèvres, le pouce à la bouche. Rien n'a bougé sous ce pont. La nuit de {autre} est passée ailleurs." },
      { after: "r:brindille_veilleuse", if: { not: SORTIE }, text: "Ta veilleuse brûle encore à la tête de la paillasse, avec son ruban." },
      { after: "r:brindille_soignee", text: "Elle a, contre sa joue, un flacon vide de la moitié de sa moitié, bouché d'un chiffon." },
    ],
    choices: [
      { label: "Poser une pincée sur le pouce, et la demi-cuillerée sur la langue", hide: { any: [SORTIE, { has: "r:brindille_soignee" }, { not: { item: "decoction_fievrier" } }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:brindille_soignee", ep: ["perso", 700] }, to: "K13r_brindille_dose" },
      { back: "K13r_aube" },
    ] },

  K13r_brindille_dose: { act: "IV", title: "Pour faire plaisir à quelqu'un", place: "basse", ambiance: "eau",
    text: [
      "Tu poses la pincée dans le creux de la petite main, et tu fermes la tienne dessus. Le pouce sort de la bouche. Deux yeux s'ouvrent, très noirs, qui te prennent pour quelqu'un d'autre, puis pour personne.",
      "« J'ai soif », dit-elle. C'est une voix de quatre ans, enrouée, sans peur : elle a vu trop de figures nouvelles sous ce pont pour s'étonner d'une de plus.",
      "Tu as le flacon du médecin, et sa consigne. La demi-cuillerée. De l'eau sucrée derrière. Tu n'as pas de sucre ; tu as une couronne de boulanger, prise au quai, dont tu lui montres la croûte dorée. Elle la regarde. Elle regarde le flacon. Elle a compris le marché avant que tu l'aies proposé.",
      { after: "monde:brindille_ecorce", text: "Elle boit. Elle fait une grimace qui lui prend toute la figure. « C'est le même, dit-elle avec reproche. C'est le même que l'autre. » Elle a déjà bu de ceci, il y a soixante ans et ce matin, de la main de quelqu'un qui t'écrit. Tu lui donnes la croûte." },
      { before: "monde:brindille_ecorce", text: "Elle boit. Elle fait une grimace qui lui prend toute la figure, et elle te regarde avec une indignation entière. « C'est mauvais. » Tu dis que oui. Tu lui donnes la croûte. Elle mord dedans, sans te quitter des yeux, pour s'assurer que tu ne reprendras rien." },
      "Le sable descend, sous ta paume. Elle mâche. Elle regarde son frère, immobile, à un pas, et elle fronce le nez. « Pourquoi il bouge pas, Colin ? — Il dort debout. — C'est pas vrai. On dort pas debout. » Elle bâille. Le gris lui reprend les doigts. « Tu reviens demain ? »",
      "Tu as promis une fois sous ce pont. Tu sais ce qu'il y a là-haut, à midi, et ce qu'on y laisse. Tu dis que quelqu'un reviendra.",
      "Elle remet son pouce. Tu poses le flacon contre sa joue, bouché d'un chiffon, avec la cuiller du médecin. Si quelqu'un passe après toi, il saura lire : c'est écrit dessus, dix-neuf prises, et combien de bues.",
    ],
    choices: [{ back: "K13r_aube" }] },

  K13r_poulie: { act: "IV", title: "Sous l'enseigne du Dé", place: "basse", ambiance: "ville",
    text: [
      "La rue de la Poulie est une rue de fileuses, étroite, où les maisons se touchent du front. Les rouets sont aux fenêtres, arrêtés sur un tour, et les femmes ont toutes la tête levée vers le peu de ciel où l'on devine la Tour.",
      { if: { has: "monde:hurel_debout" }, text: "Sous l'enseigne du Dé, la porte est ouverte, et la maison est vide. Tu entres. Une pièce, un lit, un rouet dont le fil a été coupé net, au couteau, par quelqu'un qui partait. Sur la table, une écuelle lavée, retournée. Au mur, un clou, où pendait un manteau." },
      { if: { has: "monde:hurel_debout" }, text: "Elle a cru une chose incroyable. Elle a mis de la cire dans ses oreilles, un matin de fête, pendant que toute sa rue montait en chantant ; elle a entendu, par ses yeux, onze coups tomber sur cinquante fileuses, et elle est sortie de cette rue debout. Tu ignores où elle a porté ses pas. Tu sais seulement qu'une mère est allée quelque part où l'on pouvait attendre un fils." },
      { if: { has: "monde:hurel_debout" }, text: "Sur le seuil, il y a deux boulettes de cire, grises, posées l'une près de l'autre dans une soucoupe. Elle les a ôtées ici, en passant sa porte. C'est le dernier geste qu'elle a fait chez elle, et il est propre." },
      { if: { all: [{ has: "monde:hurel_lettre" }, { not: { has: "monde:hurel_debout" } }] }, text: "Sous l'enseigne du Dé, une femme maigre est sur son seuil. Elle est prise la tête levée, comme les autres. Elle tient contre sa poitrine, à deux mains, un papier plié en quatre, jauni, cassant, qui a soixante ans de plus qu'elle. Tu le reconnais : tu l'as tenu avant-hier, dans un dortoir, sous un neuvième oreiller." },
      { if: { all: [{ has: "monde:hurel_lettre" }, { not: { has: "monde:hurel_debout" } }] }, text: "La lettre a fait le grand tour. Tu l'as glissée dans un Cahier ; elle a remonté soixante ans, elle a été portée rue de la Poulie par la main qui t'écrit, la veille, et une veuve l'a lue avant que son fils l'ait finie. Elle a entendu les onze coups en la tenant. Elle sait, pour toujours, que le petit pensait à elle." },
      { if: { not: { any: [{ has: "monde:hurel_lettre" }, { has: "monde:hurel_debout" }] } }, text: "Sous l'enseigne du Dé, le volet est tiré. Par la fente, tu vois une femme maigre, à son rouet, le pied sur la pédale. Elle seule, dans cette rue, tient la tête baissée : elle est restée chez elle le jour de la fête, et elle filait, pour s'épargner de compter les coups. Elle a compté quand même. Son fil est cassé." },
      { if: { all: [{ item: "lettre_ansel" }, { not: { has: "monde:hurel_debout" } }] }, text: "Tu as encore sa lettre sur toi. Tu la glisses sous la porte, à plat. Elle y sera, si quelque chose se remet un jour à marcher dans cette rue." },
    ],
    choices: [{ back: "K13r_aube" }] },

  K13r_patiente: { act: "IV", title: "Le compte de la colporteuse", place: "basse", ambiance: "ville",
    text: [
      "Tu connais ce mur. C'est le pignon de l'auberge, sur le quai, à gauche de la porte : un crépi jaune, à hauteur d'épaule, où les mariniers s'adossent pour fumer.",
      "Ce matin, il est écrit. On l'a entaillé avec une pointe, un couteau d'étal peut-être, à petits traits droits, groupés par cinq, le cinquième en travers : la manière dont les colporteurs comptent les almanachs. Les paquets font des lignes, les lignes font un pan. Tu comptes. Tu trouves deux cent trente et un.",
      "Au-dessus, de la même pointe : *Sortis par le bief des Teinturiers. Je mets un trait par tête. Je ne mets pas les noms : ils ne me les disaient pas, ils pleuraient.*",
      "Tout en bas, à part, un dernier trait, plus long, tout seul. Et à côté : *Celui-ci, c'est moi. Je sors la dernière. Règle de la colporteuse, article quatre : on ne ferme pas boutique tant qu'il reste un client.*",
      "Tu poses la main à plat sur le crépi. Les entailles sont émoussées, pleines de la poussière de soixante étés. Hier, ce mur était nu : tu t'y es adossé{e}. Une fille de dix-sept ans, que tu n'as jamais vue, a passé ici un après-midi entier, debout, dans une ville couchée, à pousser des gens vers un canal ; et {autre} l'avait laissée là pour cela.",
      { with: "jehan", text: "Jehan compte aussi, des lèvres. « Deux cent trente et un. La Chronique dit qu'il est sorti de la ville, ce jour-là, *quelques sourds et des enfants.* » Il crache. « Je la brûlerai, cette Chronique. Je commencerai par la page où il y a mon nom. »" },
    ],
    choices: [{ back: "K13r_aube" }] },

  K13r_comptoir_aube: { act: "IV", title: "Le Comptoir, le matin du Serment", backName: "le Comptoir", place: "basse", ambiance: "ville", shop: "iii_comptoir",
    text: [
      { first: true, text: "Le Comptoir a renvoyé ses buveurs et rangé ses bancs. Il reste derrière la balance un commis à qui l'on ne connaît pas de nom, et qui pèse ce matin avec une lenteur de sacristain : le jour du Serment, le sable se vend au grain." },
      { first: true, text: "« Tout le monde monte, dit-il sans lever les yeux. Les bandes, les gris, les dames. Il n'est resté que moi et les prix. Si vous avez l'intention de vous trouver à midi dans un endroit qui en mange, c'est ici qu'on en achète, et c'est la dernière fois que je le dis poliment. »" },
      { again: true, text: "Le commis pèse, grain à grain." },
    ],
    choices: [{ back: "K13r_aube" }] },

  K13r_montee: { act: "IV", title: "Trois cents en gris", place: "tour", ambiance: "ville",
    text: [
      "À huit heures, les Veilleurs sortent de Saint-Gnomon sur deux files, sans bannière, sans chant. Ils montent par la rue Droite, à leur pas, qui est un pas de gens âgés, et tu montes avec eux.",
      "La rue est pleine. Elle l'est depuis soixante ans : des familles qui se tiennent par la manche, une confrérie sous sa bannière, un aveugle que son chien tire, des compagnons en tablier neuf, la bouche ouverte sur une chanson. Tous ont la tête levée, et le pied en l'air. On passe entre eux de biais, en rentrant les coudes. Les Veilleurs le font sans y penser. Une vieille, devant toi, dit *pardon* à chaque dormant qu'elle frôle.",
      "Tu regardes les figures une à une. Tu ne peux pas t'en empêcher. Une femme a mis ses souliers dans son panier, pour ne pas les user à la côte, et elle marche pieds nus, en robe de noces. Un cul-de-jatte, dans sa caisse à roulettes, est poussé par deux gamins dont l'un tire la langue.",
      "Ils montaient à la fête. Il leur restait quatre heures à attendre, et ils étaient contents d'attendre. Tu sais, par une écriture penchée, que quelqu'un a monté cette rue avec eux, ce matin-là, et les a regardés comme tu les regardes.",
      "À la fontaine des Jurés, les deux files grises prennent à droite, vers la place. La Doyenne marche en tête, les mains dans ses manches. Elle ne s'est pas retournée une fois : elle sait qu'on la suit.",
      { with: "carillon", text: "Carillon monte derrière toi, du même pied, à trois pas. Dans sa poitrine, à chaque tournant, la petite cloche sonne un quart qu'elle ne devrait plus savoir." },
    ],
    choices: [{ label: "Déboucher sur la place", to: "K13r_parvis", big: true }] },
});

Object.assign(P, {
  K13r_parvis: { act: "IV", title: "La place, avant le Serment", place: "tour", ambiance: "chateau", hub: true, backName: "la place",
    text: [
      { first: true, text: "On la reçoit en pleine figure. Cinq mille personnes, de dos, la tête renversée, sous leur midi ; et, entre elles et toi, le matin de 601, où l'on s'affaire." },
      { first: true, text: "La Régence a ses habitudes. Des valets en livrée déroulent un tapis de l'Orangerie à l'estrade, par-dessus les pieds des dormants. Des casaques noires ont pris les quatre coins. Les cordes de soie blanche sont tendues ; derrière elles, des dames de la Cour, emmitouflées, assises sur des pliants, prennent le chocolat qu'on leur passe, à dix pas d'une fermière de 541 qui tient encore son enfant à bout de bras pour qu'il voie." },
      { first: true, text: "Au fond, la Tour, qui penche d'un rien. Le dais rouge, à son pied, sur ses quatre porteurs. La porte de bronze. Et, tout le long du flanc, douze cuves de verre, hautes comme des hommes, où quelque chose de gris a commencé de monter pendant la nuit." },
      { first: true, text: "Les Veilleurs se rangent où on les a toujours mis : au bord, derrière les cordes, debout. Trois cents personnes en gris, qui regardent des dos." },
      { first: true, text: "Au pied de l'estrade, du côté du Palais, la chaise à sangles a quelqu'un dedans." },
      { again: true, text: "La place, les cinq mille dos sous leur midi, les cordes de soie. Dans les cuves, le gris a gagné une main." },
      { again: true, after: "r:vu_acheteurs", text: "À la porte basse, deux noirs en gants blancs attendent des invités." },
    ],
    choices: [
      { label: "La chaise à sangles, au pied de l'estrade", to: "K13r_line_chaise" },
      { label: "La Régente", hide: { seen: "K13r_regente_matin" }, to: "K13r_regente_matin" },
      { label: "Le pied de la Tour, où un capitaine de 541 fait face à la place", hide: { any: [{ not: { has: "monde:hardouin_tour" } }, { seen: "K13r_hardouin_pied" }] }, to: "K13r_hardouin_pied" },
      { label: "Compter ce qui garde la porte de bronze", hide: { has: "r:vu_postes" }, to: "K13r_porte_bronze" },
      { label: "Le sergent Haudoin, à la relève des blancs", hide: { any: [{ not: { has: "r:haudoin_averti" } }, { seen: "K13r_haudoin_matin" }] }, to: "K13r_haudoin_matin" },
      { label: "Tes gens, derrière la fontaine", hide: { seen: "K13r_gens" }, to: "K13r_gens" },
      { label: "Les douze portes peintes", hide: { seen: "K13r_theatre" }, to: "K13r_theatre" },
      { label: "Le bord de la place, vers une rue qui descend", hide: { seen: "K13r_josse" }, to: "K13r_josse" },
      { label: "La porte basse, où l'on reçoit", hide: { has: "r:vu_acheteurs" }, fx: { flag: "r:vu_acheteurs", ep: ["histoire", 500] }, to: "K13r_acheteurs" },
      { label: "Il est la demie de dix heures : choisir par où descendre", to: "K13r_choix", big: true },
    ] },

  K13r_line_chaise: { act: "IV", title: "Une vieille femme sanglée", place: "tour", ambiance: "chateau", backName: "la chaise de Line", fx: { flag: "r:line_parle", ep: ["perso", 600] },
    text: [
      { first: true, text: "On l'a portée à neuf heures, par quatre noirs, et posée où tu as vu hier la chaise vide : au pied de l'estrade, du côté du Palais. Deux casaques la gardent, à dix pas, le dos tourné. On ne surveille pas de près une vieille de soixante-neuf ans qui a une sangle sur la poitrine et une autre sur les genoux." },
      { first: true, text: "Tu arrives par la foule. C'est un chemin de glaneur : à quatre pattes, entre les jambes des pris, sous les paniers, le long d'une robe de noces. Tu débouches derrière la chaise, contre le mollet d'un boulanger de 541." },
      { first: true, text: "Elle a maigri. On l'a coiffée, on lui a mis un châle propre, et, sur les genoux, bien en vue, un cahier de toile cirée tout neuf, qui ressemble au tien. Ses mains sont posées dessus, à plat. Tu les reconnaîtrais entre mille : les ongles carrés, le pouce droit fendu, la tache d'huile bleue qui ne part plus." },
      { first: true, text: "« Tu as mis le temps », dit-elle, sans tourner la tête. Elle parle du coin de la bouche, comme on parle à l'établi avec une vis entre les dents. « Reste bas. Ils se retournent tous les cent battements, je les ai comptés. Tu as soixante battements. Tu as bonne mine. Tu as maigri. Montre-moi tes mains. »" },
      { first: true, text: "Tu les lui montres, par-dessous le bras de la chaise. Elle les regarde, de côté. Elle voit le charbon sous les ongles, la corne du sablier, et un cal neuf, à l'index, que fait un Cahier quand on y écrit en bâtons tous les jours. Quelque chose se défait dans sa figure, et se refait aussitôt." },
      { first: true, text: "« Bon. Vous vous êtes écrit. » Elle tousse, d'une toux qu'elle rentre, pour le bruit ; cela lui secoue tout le châle. « C'est tout ce que je voulais savoir. Le reste, je l'ai su avant vous. »" },
      { again: true, text: "La vieille Line, sanglée, les mains à plat sur un cahier neuf. Les deux noirs ont le dos tourné." },
      { again: true, after: "r:girard_dit", text: "Elle remue les lèvres, de temps en temps, sur six mots." },
    ],
    choices: [
      { label: "« Le fer ne branlait pas. C'est de la part de Girard. »", hide: { any: [{ not: { has: "r:message_girard" } }, { has: "r:girard_dit" }] }, fx: { flag: "r:girard_dit", ep: ["perso", 800] }, to: "K13r_line_girard" },
      { label: "« C'est moi qui ai pris votre sable, en janvier. »", hide: { has: "r:vol_avoue" }, fx: { flag: "r:vol_avoue", ep: ["perso", 600] }, to: "K13r_line_vol" },
      { label: "« Où étiez-vous, ce jour-là ? »", hide: { seen: "K13r_line_jour" }, to: "K13r_line_jour" },
      { label: "Tirer ton couteau, pour les sangles", hide: { seen: "K13r_line_sangles" }, to: "K13r_line_sangles" },
      { back: "K13r_parvis" },
    ] },

  K13r_line_girard: { act: "IV", title: "Six mots", place: "tour", ambiance: "chateau",
    text: [
      "Tu le dis bas, près du bras de la chaise. Les six mots, et de qui.",
      "Elle reste immobile, les mains à plat sur la toile cirée. Tu vois seulement ses ongles blanchir.",
      "« Il a dit au père que la jument avait un fer qui branlait. » Sa voix est sèche comme une lime. « Le père a regardé le pied. Il a dit : *je ne vois rien.* Girard a dit : *moi je le sens.* J'étais dans la paille. J'ai su qu'il mentait, et j'ai su pour qui. J'avais neuf ans. Je n'ai rien dit. »",
      "Elle se tait le temps d'un Pater.",
      "« Je suis allée le voir huit fois. À quinze ans, à dix-sept, à vingt. J'ai taillé mon âge sur sa ridelle, pour qu'il le trouve s'il s'éveillait sans moi. À vingt, j'avais du sable pour la première fois, trois grains, que j'avais mis deux ans à tirer d'une lisière. Je lui ai tenu la main. Il m'a regardée. Il a dit : *merci, madame.* » Elle rit, d'un rire qui tousse. « J'avais une robe grise. Il m'a prise pour une dame. Je lui ai tu qui j'étais. Le courage m'a manqué : on n'annonce pas à son grand frère qu'on est plus vieille que lui. »",
      "« Et toi, il t'a parlé. » Elle tourne la tête, cette fois, d'un quart, malgré les noirs. Elle a les yeux secs, très clairs, sous ses deux loupes relevées. « Il t'a donné une commission pour moi. Il savait donc que je vivais. Tu le lui as dit. » Tu fais oui. « Alors il sait que j'ai attendu. C'est bien. C'est la seule chose que je n'avais pas su lui faire dire. »",
      "Elle remet le menton droit. « Le fer ne branlait pas. Soixante ans que je le sais. Il fallait qu'il me le dise lui-même : cela ne valait rien tant que c'était moi qui le savais. »",
    ],
    choices: [{ back: "K13r_line_chaise" }] },

  K13r_line_vol: { act: "IV", title: "Des pieds nus dans la neige", place: "tour", ambiance: "chateau",
    text: [
      "Tu le dis. Trois mesures, en janvier, par le soupirail à charbon. Quarante écus, à la Courtepaille. Tu le dis vite, en regardant le mollet du boulanger.",
      "« Je sais. »",
      "Elle n'a pas changé de ton. « Le lendemain matin, il y avait des pieds nus dans la neige, sous le soupirail. Des pieds de quinze ans, étroits, qui s'en allaient en courant vers la butte de Roquebise. Quelqu'un qui ôte ses sabots pour voler, par un froid pareil, c'est quelqu'un qui pense aux clous. Quelqu'un qui court vers une butte prise avec quarante écus de sable loué, c'est quelqu'un qui a une personne dedans. »",
      "Elle laisse passer un battement. « J'ai demandé à ta patronne sa meilleure paire de jambes. Elle m'a dit que c'était aussi la plus bête, puisqu'elle ne rapportait rien. J'ai dit : *celle-là.* Je voulais voir à qui étaient ces pieds. »",
      "Tu ne trouves rien à répondre. Elle le sait, et elle te laisse ne rien trouver.",
      "« Il en restait pour un passage, et rien pour le retour. Je me le suis reproché tout l'hiver : j'aurais dû mettre un cadenas. Et puis j'ai fait mes comptes. Avec six mesures, j'aurais envoyé quelqu'un qui pouvait revenir. » Ses doigts tapotent la toile cirée. « On ne fait pas la même chose, là-bas, quand on peut revenir. On garde un pied dehors. Je l'ai gardé soixante ans, ce pied, et regarde où cela m'a menée : sur une chaise. »",
      "« Ce que tu m'as pris, c'est un choix, et il était mauvais. Tais-toi, maintenant : ils vont se retourner. »",
    ],
    choices: [{ back: "K13r_line_chaise" }] },

  K13r_line_jour: { act: "IV", title: "Sur les épaules du père", place: "tour", ambiance: "chateau", fx: { flag: "r:sait_rue_oies" },
    text: [
      "Elle montre quelque chose du menton, par-dessus les cinq mille : le bord de la place, à main droite, où une rue tombe entre deux boutiques.",
      "« Là. Sur une borne. Sur les épaules de mon père, qui était monté sur la borne. Il avait promis à quelqu'un de se tenir au bord. Il a tenu : c'était un homme qui tenait. » Elle rentre une toux. « Je voyais tout le cadran. Je n'ai rien regardé d'autre de la matinée. On m'a dit depuis qu'il y avait eu une Reine, des archers, un théâtre. J'ai vu une aiguille. »",
      { if: ATTELE, text: "« À la demie de dix heures, je suis descendue. J'ai couru. La rue, la porte, le pré ; Girard était sur la charrette, attelée, le nez au canal. Il n'a pas demandé pourquoi. Il a jeté l'huile. » Elle se tait un battement. « Je ne me suis pas retournée vers le père. Je me le reproche une fois par jour, à heure fixe. C'est réglé comme le reste. »" },
      { if: { not: ATTELE }, text: "« Vers la demie de onze heures, quelqu'un m'a prise sous le bras, comme un paquet, et m'a descendue de là. Je n'ai jamais su qui. J'ai mordu : je me rappelle un goût de drap et de cire. On m'a portée en courant jusqu'au bassin, on m'a posée sur le chemin des peupliers, et l'on m'a dit : *compte les arbres, et marche.* J'ai compté. » Elle se tait un battement. « Le père a sauté de sa borne. Je l'ai entendu crier mon nom, derrière, dans la rue. Il courait moins vite que l'autre. »" },
      "« Va le voir, si tu as un moment : au coin de cette rue, ou dedans. Les Veilleurs l'ont cherché soixante ans à la Foire. Ils ont écrit *présumé.* Je ne leur ai jamais dit où il est. » Elle a un pli têtu au coin de la mâchoire. « C'est mon père. Je n'avais pas envie qu'on lui mette une lampe et un ruban. »",
    ],
    choices: [{ back: "K13r_line_chaise" }] },

  K13r_line_sangles: { act: "IV", title: "À quarante pas de la porte", place: "tour", ambiance: "chateau",
    text: [
      "Tu as la lame sous la sangle des genoux quand sa main te tombe sur le poignet. Sa force est partie ; la précision lui reste. Elle serre où il faut.",
      "« Range cela. Tu veux m'emporter où ? Je ne marche plus. Tu me porterais dix pas, et tu as quatre-vingts marches à descendre, sans rampe. »",
      "Elle lâche. « Je suis où je veux être. Il croit m'avoir mise là : il m'y a portée, c'est toute la différence. À quinze pas de sa Régente, à quarante de sa porte, avec son beau Cahier sur les genoux. À midi moins le quart, il viendra me le prendre lui-même, devant ses invités, pour l'ouvrir. » Un petit éclair passe sous les loupes. « Je veux voir sa figure. J'ai limé trois jours pour cette figure. »",
      "« Et après ? »",
      "« Après, tu seras en bas, et {autre} en haut, et cela ne me regardera plus. J'ai fait la montre. Je ne suis pas chargée de la porter. » Elle tousse, longuement cette fois, et tu vois ce que la toux laisse dans son mouchoir. Elle le replie avant que tu aies pu en être sûr{e}.",
      "« Ne fais pas cette tête. Une horlogère sait lire un ressort. Le mien a soixante-neuf ans ; il a fait un bel usage. Je voulais qu'il tienne jusqu'à ce midi, et il tient. » Elle regarde la Tour. « Dis-lui, à {autre:lui}, quand vous vous verrez, que j'ai été dure exprès. Il n'y avait pas d'autre moyen d'en faire quelqu'un qui ne lâche pas. »",
      "Les deux noirs remuent. Soixante battements. Tu rentres sous la robe de noces.",
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_regente_matin: { act: "IV", title: "Celle qui jure", place: "tour", ambiance: "chateau",
    text: [
      { if: LIBRE, text: "Elle est avec les Veilleurs, au troisième rang, sous une cape grise qu'une vieille lui a prêtée. On lui a noué les cheveux dans un fichu. Elle a gardé, piquée au corsage, une grappe de sureau qui se fane. Personne, derrière les cordes, n'a encore reconnu la Régente d'Aurime dans une pèlerine debout entre deux grand-mères." },
      { if: LIBRE, text: "Tu te glisses près d'elle. Elle regarde l'estrade, où un chambellan pose un coussin. « Il a fait dire, à sept heures, que j'étais souffrante. Que le Maître des Sables prêterait le Serment en mon nom, par commission. » Elle parle sans remuer les lèvres : elle a appris cela en Conseil. « Il montera ces marches à onze heures. Il lèvera la main. Et à ce moment une personne sortira du rang des pèlerins, ôtera un fichu, et demandera au peuple si elle a l'air souffrante. »" },
      { if: { all: [LIBRE, { has: "monde:lettres_produites" }] }, text: "Elle a sous sa cape un vélin, plié, qui a soixante ans. « Je le lirai. Tout haut. Le nom de mon grand-père y est, avec ce qu'il a commandé à un graveur, et la date. Ce sera le Serment le plus court qu'on ait prêté sur cette place, et le premier qui soit vrai. »" },
      { if: { all: [LIBRE, { not: { has: "monde:lettres_produites" } }] }, text: "« Pour toute preuve, j'ai ma figure, et mon nom. » Elle serre la cape. « Il faudra que cela suffise. Un peuple qui voit sa Régente sortir d'entre les pèlerins écoute au moins la première phrase. Je soignerai la première phrase. »" },
      { if: DEDANS, text: "Elle paraît à dix heures, à la croisée de l'Orangerie, entre deux casaques noires qui se tiennent à un pas. On l'a habillée pour le Serment : le blanc, la traîne, le voile des régentes. Elle descend le perron lentement, s'arrête à chaque marche, se fait rajuster un pli. Un chambellan s'impatiente, et n'ose pas." },
      { if: DEDANS, text: "Elle te trouve, dans le rang des Veilleurs, du premier regard. Sans un signe, elle porte deux doigts à son voile, et elle les y laisse le temps de dire un mot, que tu lis sur ses lèvres : *lentement.* Elle jurera comme on dévide un écheveau. Chaque phrase qu'elle fera durer, là-haut, sera un quart d'heure que tu auras en bas." },
      { if: TENUE, text: "Elle paraît à dix heures, sur le perron de l'Orangerie, entre deux casaques noires qui la tiennent sans la toucher : l'une marche à sa gauche, l'autre à sa droite, à un pas, et leurs mains pendent près de ses coudes. On l'a habillée pour le Serment. Elle est très pâle, très droite, et elle a un bleu à la pommette, qu'on a poudré." },
      { if: TENUE, text: "Elle cherche dans les rangs gris. Elle te trouve. Elle lève le menton d'un doigt : *j'y suis, de toute façon.* Puis elle regarde ailleurs, pour ne pas te désigner. Elle prêtera, tout à l'heure, le texte qu'on lui dictera. Tu as vu comment elle se tient : elle le prêtera mal, et de façon qu'on s'en aperçoive." },
      { if: ORD2, text: "L'ordonnance du Conseil de garde est signée de deux mains. *L'escalier de la Tour à la garde blanche.* Il y a sur cette place, ce matin, une feuille qui vaut plus que le Serment ; et elle voyage dans une chemise." },
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_hardouin_pied: { act: "IV", title: "Du savon sous l'oreille", place: "tour", ambiance: "chateau",
    text: [
      "Il est à dix pas de la porte de bronze, devant six archers de 541 rangés face à la place. Tous les sept regardent en l'air ; mais lui regarde de biais, en soldat, un œil sur le cadran et l'autre sur ses hommes. Il a mis la cuirasse des grands jours. Elle a gardé son poli : le midi d'alors y fait un petit soleil rond, à hauteur du cœur.",
      "Tu t'approches. Sa barbe a été faite trop vite. Sous l'oreille gauche, il reste un flocon de savon, blanc, frais, qui a soixante ans.",
      "La Garde du Sable passe devant lui vingt fois par jour sans le voir. Pour les noirs, c'est un meuble de la place, comme la fontaine. Ils ignorent qui la Reine avait mis là, et de quel droit.",
      { if: { all: [ORD, { not: ORD2 }] }, text: "Tu as sur toi une ordonnance où il manque une main. La sienne est à un pied de toi, gantée, fermée sur la poignée d'une épée." },
      { if: ORD2, text: "Tu as sur toi une ordonnance déjà valable. Il n'a pas besoin de signer. Tu restes pourtant devant lui un moment : il est le seul homme de cette place à être où il faut depuis soixante ans, et à l'ignorer." },
      { if: { not: ORD }, text: "Tu n'as rien à lui faire signer. Tu le regardes : c'est un homme à qui l'on a dit *là-bas*, et qui s'y est mis." },
    ],
    choices: [
      { label: "Poser une pincée sur le gant, et l'ordonnance devant ses yeux", hide: { any: [{ not: ORD }, ORD2, { has: "r:signe_hardouin" }] }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: ["r:signe_hardouin", "monde:ordonnance_garde"], meet: "hardouin", ep: ["histoire", 800] }, to: "K13r_hardouin_signe" },
      { back: "K13r_parvis" },
    ] },

  K13r_hardouin_signe: { act: "IV", title: "La seconde main", place: "tour", ambiance: "chateau",
    text: [
      "Le poing se desserre sous ta paume. Il achève un mouvement : il baisse les yeux du cadran, et il te trouve devant lui, à la place de l'air.",
      "« Qui vive. » Il le dit bas, sans surprise ; trente ans de service lui ont appris à poser la question avant d'avoir peur. Puis il voit ses archers, qui n'ont pas baissé la tête. Il voit, derrière toi, des casaques d'une couleur qu'il ne connaît pas, des cordes de soie, des cuves. Il voit que le bruit de la place s'est tu.",
      "Tu lui mets la cire sous les yeux. Il ôte son gant. Il touche le bord du sceau, du pouce.",
      "« Elle appuie de travers, à gauche. » Sa voix a changé. « C'est donc arrivé. On me l'avait dit. Une personne de votre âge, la veille, dans un corridor. J'ai dégarni mes grilles pour elle. » Il regarde la porte de bronze, fermée. « Sa Majesté est là-haut ? — Là-haut. Comme à midi. — Depuis ? » Tu dis le chiffre. Il le reçoit debout.",
      "Il lit l'ordonnance en remuant les lèvres. *L'escalier de la Tour à la garde blanche.* « J'ai demandé trois fois un ordre sur cette Tour. On m'a souri. » Il prend le charbon que tu lui tends, cherche un appui, n'en trouve pas, et signe sur sa propre cuirasse, la feuille à plat contre le soleil rond. Une croix, par habitude de caserne ; puis son nom, en lettres qui penchent toutes du même côté.",
      "« Deux mains. C'est valable. » Il te rend la feuille. Le gris lui prend déjà les doigts, et il le voit. Il remet son gant, posément, referme le poing sur l'épée, relève le menton vers le cadran. « Vous direz à ceux qui monteront que le capitaine des gardes est à son poste, et qu'ils passent à sa droite. À ma gauche, je frappe. »",
      "Il a repris sa place dans l'air. Le flocon de savon n'a pas bougé.",
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_porte_bronze: { act: "IV", title: "Ce qui garde une porte", place: "tour", ambiance: "chateau",
    text: [
      "Tu fais le tour par la fontaine, les mains aux poches, de l'air d'un glaneur qui cherche une bourse. Personne ne chasse les glaneurs le jour du Serment : la Cour aime qu'il y ait des pauvres au bord, cela fait peuple.",
      "La porte de bronze est fermée. Devant elle, sous le dais rouge, les quatre porteurs sont des pris de 541 qu'on a rhabillés ; ils tiennent leurs hampes depuis soixante ans, et la Maîtrise change le velours aux équinoxes. Derrière le velours, il y a dix casaques noires, sur deux rangs, la pique au pied.",
      "Tu comptes le reste comme on compte une lisière : sans t'arrêter. Dix à la porte. Quatre à chaque coin de la place. Deux à la porte basse, en gants blancs. Soixante dedans, sur les marches, à ce qu'on t'a dit, et tu n'as aucun moyen de le vérifier d'ici.",
    ],
    choices: [
      { label: "Rester le temps d'une relève, et lire comment ils se remplacent",
        test: { dom: "discretion", diff: 11, label: "Un glaneur de plus au bord", help: [{ if: { voie: "leste" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }, { if: JEHAN, v: 15 }] },
        win: { fx: { flag: ["r:vu_postes", "r:vu_releve"], ep: ["histoire", 600] }, to: "K13r_releve" }, lose: { fx: { flag: "r:vu_postes", pv: -2 }, to: "K13r_releve" } },
      { label: "T'en tenir au compte", fx: { flag: "r:vu_postes" }, to: "K13r_parvis" },
    ] },

  K13r_releve: { act: "IV", title: "Tous les quarts", place: "tour", ambiance: "chateau",
    text: [
      { after: "r:vu_releve", text: "Tu t'assois contre la margelle, parmi trois mendiants de 541, et tu prends leur pose : la main ouverte, la tête basse. De là, on voit le dessous du dais." },
      { after: "r:vu_releve", text: "Au quart, un guichet s'ouvre dans le vantail de droite. Il en sort cinq noirs, qui clignent ; il en rentre cinq. Ceux qui sortent ont le teint d'hommes qu'on tire d'une cave. Ils vont droit à un baril, où un fourrier leur verse, dans la paume, ce qu'il faut pour un quart de plus, et ils le regardent tomber." },
      { after: "r:vu_releve", text: "Voilà ce que coûte cet escalier. Soixante hommes n'y tiennent pas : il en faut le double, par moitiés, et du sable à pleines mesures. Le guichet reste ouvert le temps de compter vingt. C'est une porte dans la porte, haute comme un enfant, et l'on y passe un par un, courbé." },
      { after: "r:vu_releve", with: "jehan", text: "« Le fourrier s'appelle Baraton, souffle Jehan. Il pèse court. Les hommes le savent. Un quart d'heure avant chaque relève, ceux du dedans ne pensent qu'à leur paume. »" },
      { before: "r:vu_releve", text: "Tu t'attardes d'un battement de trop. Une casaque sort du rang, et t'applique le bois de sa pique dans les reins, sans colère, comme on pousse une bête hors d'un blé. « Au bord, la glane. » Tu retournes au bord. Tu as eu le temps de voir un guichet, dans le vantail de droite, et qu'il s'ouvrait." },
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_haudoin_matin: { act: "IV", title: "La papillote de prime", place: "tour", ambiance: "chateau", fx: { flag: "r:mot_escalier", ep: ["histoire", 500] },
    text: [
      "Les manteaux blancs relèvent aux grilles du Palais, où on les a renvoyés depuis minuit : la Régence garde ses jardins, et la Maîtrise sa Tour. Le sergent Haudoin fait l'appel, un doigt sur son rôle. Il a la figure de faction où l'on ne lit rien, et les yeux d'un homme qui a fait sa ronde lui-même.",
      "Il te voit. Il finit son appel. Puis il vient au bord, comme pour chasser un pauvre, et il te parle en te poussant de l'épaule.",
      "« J'ai fait l'Orangerie cette nuit. J'ai vu qui entrait. J'ai vu de quelle couleur. » Il te pousse d'un pas. « Dix-neuf Serments. On m'a toujours dit que les noirs gardaient le sable et que nous gardions Madame. Cette nuit, ce sont les noirs qui gardent Madame, et je voudrais savoir ce que nous gardons. »",
      { if: ORD2, text: "Tu lui montres l'ordonnance, pliée, dans le creux de ta main : les deux signatures, le sceau. Il lit mal ; il reconnaît une cire à dix pas. Il devient très rouge, puis très calme. « *À la garde blanche.* C'est écrit. Par qui il faut. » Il respire. « Alors je sais ce que nous gardons. »" },
      { if: { not: ORD2 }, text: "Tu n'as pas de papier valable à lui montrer. Tu lui dis ce que tu as vu. Il t'écoute. « Sans ordre, je ne bouge pas deux cents hommes. Je peux en perdre de vue une douzaine, du côté de la fontaine, vers onze heures. Un sergent a le droit d'avoir la vue basse. »" },
      "Il te pousse encore, pour la forme. « Le mot du jour, chez eux, c'est *Soixante.* Ils l'ont changé à minuit ; le fourrier le donne avec la prise. Au guichet, on le dit en se baissant. » Il crache. « Je ne te l'ai pas dit. Je l'ai dit tout haut en chassant un pauvre, et le pauvre avait des oreilles. »",
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_gens: { act: "IV", title: "Derrière la fontaine", place: "tour", ambiance: "chateau",
    text: [
      "Derrière la fontaine des Jurés, la place fait un renfoncement que la Cour ne voit pas. C'est là qu'on se retrouve.",
      { after: "r:glaneurs_parvis", text: "Les glaneurs sont sur les toits. Tu en comptes vingt, à plat ventre le long des chéneaux, et autant dans les lucarnes ; la Courtepaille a envoyé ses meilleures jambes, contre une part de ce qui tombera. Rouget fait la navette, par les gouttières. « Ils demandent quand. J'ai dit : quand ça chante. C'est bon ? »" },
      { after: "r:rouget_court", before: "r:glaneurs_parvis", text: "Rouget est seul, assis sur le rebord, les sabots pendants. Il a repéré trois chemins de toit entre la place et l'église, et il te les récite. « Tu me dis un mot, je le porte. Je cours plus vite que leurs piques. C'est tout ce que je sais faire, et aujourd'hui ça tombe bien. »" },
      { after: "r:jehan_blancs", text: "Jehan a remis sa casaque à l'envers, la doublure blanche dehors. Autour de lui, par deux, par trois, sans avoir l'air d'être ensemble, il y a des manteaux blancs qui ne sont pas à l'appel : tu en comptes trente. Ils ont des figures de garçons de ferme. « Ils ont vu la feuille, dit Jehan. Ils ont vu la cire. Je leur ai dit mon nom, le vrai. Il y en a deux qui ont craché. Les autres ont demandé par où l'on entre. »" },
      { after: "r:jehan_dos", before: "r:jehan_blancs", text: "Jehan est adossé à la margelle, les bras croisés, sa casaque noire boutonnée jusqu'au cou. « Je monte derrière toi. Je connais chaque palier : j'y ai fait six mois de faction. Je sais lequel a une marche qui sonne. » Il regarde la porte de bronze. « Ils me reconnaîtront. C'est même là-dessus que je compte : un homme qui hésite à frapper un camarade, cela fait une marche de gagnée. »" },
      { after: "r:cuivre_parvis", text: "Dans la ruelle, derrière, il y a une file d'hommes de cuivre, immobiles, hauts comme des armoires, la lanterne éteinte. Carillon se tient devant eux, la baguette de bronze dressée. Il sonne, dans sa poitrine, une heure qui n'existe pas : treize petits coups. Les grands répondent, d'un seul choc sourd, comme une porte de cave." },
      { after: "r:carillon_heure", before: "r:cuivre_parvis", text: "Carillon est debout près de la fontaine, tourné vers la Tour. Il attend de sonner une heure, qu'il garde pour lui : il fait tinter, très bas, onze coups, et il s'arrête, le marteau levé." },
      { after: "r:veilleurs_chant", text: "Et, le long des cordes, il y a les trois cents en gris, debout, les mains dans leurs manches. Ils chanteront une note, une seule, de onze heures à ce qu'il faudra. La Doyenne te regarde, de loin. Elle incline la tête d'un doigt." },
      { before: ["r:glaneurs_parvis", "r:rouget_court", "r:jehan_blancs", "r:jehan_dos", "r:cuivre_parvis", "r:carillon_heure", "r:veilleurs_chant"], text: "Tu y es seul{e}. Tu n'as demandé personne, cette nuit, et personne n'est venu. Tu regardes la porte de bronze avec les yeux de quelqu'un qui a toujours glané sans bande, et qui sait ce que cela permet : on passe où une troupe ne passe pas." },
      "On entend, du côté de l'Orangerie, les trompettes de la Cour qui s'accordent.",
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_theatre: { act: "IV", title: "Onze portes ouvertes", place: "tour", ambiance: "chateau",
    text: [
      "Contre les premières nuques, entre la fontaine et les archers de 541, il y a des tréteaux, et douze portes peintes, en demi-cercle, sous un cadran de carton. La Régence n'y a jamais touché : c'est un théâtre de foire, et l'on ne repeint pas un théâtre de foire.",
      "Onze portes sont ouvertes. Dans chacune, une Heure se tient, en costume : une sainte en manteau bleu, un saint debout, une petite qui fait sa timide. Elles sont sorties une par coup. On jouait avec la cloche.",
      "Devant, à l'avant-scène, un gros homme en pourpoint cerise a les deux bras levés, une canne dans une main, et la bouche grande ouverte. Il annonçait la dernière.",
      "La douzième porte est fermée. Tu en fais le tour.",
      { if: PIECE, text: "Derrière, sur une planche, il y a une fille de dix-huit ans, en robe de drap sans couleur. Elle a trois épingles dans les cheveux. Elle se tient très droite, une main à plat sur le battant, prête à pousser, et elle a les yeux fermés : elle se recueillait, comme font les comédiens, en attendant son coup." },
      { if: { all: [PIECE, { has: "monde:piece_corde" }] }, text: "Dans son autre main, elle tient un bout de corde à cloche, avec un gland rouge. La corde monte derrière le décor, et s'y perd." },
      { if: PIECE, text: "Elle attend le douzième depuis soixante ans, la main sur la porte. C'est la seule personne de cette place qui ait su, à cette seconde, qu'il lui restait quelque chose à faire." },
      { if: { not: PIECE }, text: "Derrière, il y a une planche noire, une araignée, et une corde qui pend. Une fille en manteau bleu se tient à côté, la main sur la corde, la tête levée comme les autres. Elle aurait tiré au douzième coup ; la porte se serait ouverte sur la planche, et cinq mille personnes se seraient signées devant un trou." },
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_josse: { act: "IV", title: "Au coin de la rue aux Oies", place: "tour", ambiance: "chateau", backName: "la rue aux Oies", fx: { flag: "r:josse_trouve", ep: ["perso", 500] },
    text: [
      { first: true, text: "Au bord de la place, à main droite, une rue tombe entre la boutique d'un cirier et celle d'un marchand de peignes : raide, pavée en dos d'âne, avec un ruisseau arrêté au milieu. Au coin, il y a une borne." },
      { first: true, if: ATTELE, text: "Sur la borne, un homme est debout. Il a quarante-quatre ans, une blouse neuve, un chapeau qu'il tient sous son coude. Il est rasé de frais ; il s'est coupé au menton. Il a le front large, les sourcils d'un seul trait." },
      { first: true, if: ATTELE, text: "Il regarde la Tour, comme les autres, une main en visière. L'autre main est posée à plat sur sa propre épaule, la gauche, où pesait tout à l'heure une cheville d'enfant : il tâte la place, comme on tâte celle d'une dent." },
      { first: true, if: { not: ATTELE }, text: "La borne est vide. Il y a dessus la trace de deux semelles à clous, dans la poussière de 541, et, au pied, un chapeau d'homme, tombé, le fond en l'air." },
      { first: true, if: { not: ATTELE }, text: "Tu le trouves plus bas, au second coude de la rue. Il a quarante-quatre ans, une blouse neuve trempée de sueur, le front large, les sourcils d'un seul trait. Il court. Il remontait : il avait fait toutes les rues jusqu'à la porte, et il revenait sur ses pas. Il est pris en pleine foulée, un pied en l'air, les deux bras en avant, et la bouche grande ouverte sur un nom de deux syllabes. De toute cette ville, lui seul regarde devant soi." },
      { first: true, text: "*Noyer Josse, laboureur, quarante-quatre ans. Ville-Haute, parvis de la Tour, présumé.* Le registre de la Deuxième a trois mille pages, et les Veilleurs ont promené soixante ans leurs lampes dans un champ de charrettes. Il était ici. Il avait promis à quelqu'un de se tenir au bord, et il s'y est tenu." },
      { first: true, after: "r:sait_rue_oies", text: "Une vieille femme, sur une chaise, à cent pas, sait où il est, et ne l'a jamais dit. Elle n'a pas voulu qu'on lui mette un ruban." },
      { again: true, if: ATTELE, text: "Josse Noyer, sur sa borne, une main en visière, l'autre à l'épaule." },
      { again: true, if: { not: ATTELE }, text: "Josse Noyer, au second coude de la rue, pris en pleine course." },
      { again: true, after: "r:josse_eveille", text: "Il a la figure un peu moins lourde qu'avant. Tu es seul{e} à le voir." },
    ],
    choices: [
      { label: "Poser une pincée dans sa main", hide: { has: "r:josse_eveille" }, if: UNE_PINCEE, why: "Il te faudrait une pincée de reste.", fx: { stock: { sable: -1 }, flag: "r:josse_eveille", ep: ["perso", 800] }, to: "K13r_josse_eveil" },
      { back: "K13r_parvis" },
    ] },

  K13r_josse_eveil: { act: "IV", title: "Le compte est bon", place: "tour", ambiance: "chateau",
    text: [
      "Tu poses la pincée dans la paume de gauche, large, creusée par le manche, et tu la fermes dans la tienne.",
      { if: ATTELE, text: "« ...onze. » Il achève de compter, à mi-voix, pour lui. Puis il attend le suivant, la tête levée ; il s'aperçoit que l'aiguille est sur le douze, que la place se tait, et qu'on lui tient la main, d'en bas." },
      { if: { not: ATTELE }, text: "« ...ine ! » La fin du nom lui sort à pleine gorge, et sa foulée s'achève : il manque tomber, se rattrape à ton épaule. « La petite ! Neuf ans, deux nattes, une boîte de fer ! Quelqu'un me l'a prise sous son bras, là-haut, et j'ai fait toutes les rues jusqu'à la porte ! Tu l'as vue ? »" },
      "Il te regarde. Il a des yeux lourds, de laboureur, qui ont écouté jusqu'au bout des colporteurs et des sergents recruteurs. Il regarde tes habits, ton sablier de corne. Il regarde autour de lui, par-dessus toi, et il voit que rien ne remue.",
      "Tu dis ce qui presse, comme on te l'a appris sur un chemin de halage. Que la petite est sortie. Qu'elle a passé les peupliers avant le dernier coup. Qu'elle vit.",
      { if: ATTELE, text: "« Le garçon l'a sortie. » Il l'affirme, et il hoche la tête, lentement, et tu vois quelque chose descendre dans sa figure, comme une charge qu'on pose. « Le fer ne branlait pas. Je l'ai regardé, ce pied. J'ai bien vu qu'il mentait. Je l'ai laissé mentir : il ne ment jamais, il fallait que ce fût pour quelque chose. » Il s'essuie la bouche. « Et lui ? »" },
      { if: { not: ATTELE }, text: "« Sortie. » Il le répète, pour le ranger. « Par qui ? » Tu l'ignores. Elle-même l'ignore. « Alors c'est quelqu'un à qui je dois, et je ne saurai pas à qui. C'est une dette que je n'aime pas. » Il s'essuie la bouche. « Et le garçon ? Il était devant, aux archers. Il voulait la voir de près. »" },
      { if: ATTELE, text: "Tu pourrais mentir. Il te regarde de trop près pour cela. Tu dis que Girard est sur le chemin du canal, à trente pas du bord, debout sur sa charrette ; qu'il avait posé la petite, et qu'il revenait." },
      { if: ATTELE, text: "Josse ferme les yeux. Sa main serre la tienne, à faire craquer. « Il revenait. » Il respire, deux fois. « C'est moi qui l'ai fait comme cela. Je lui ai dit toute sa vie qu'on ne laisse pas une bête dans un champ ni un homme dans une peine. Il m'a écouté. » Il rouvre les yeux. Ils sont secs. « Trente pas. Il n'aura pas eu le temps d'avoir peur. C'est toujours cela. »" },
      { if: { not: ATTELE }, text: "Tu regardes vers la haie des archers de 541. Au premier rang, il y a une chemise blanche, trop large, des cheveux plaqués. Tu la lui montres. Il la voit. « Devant. Comme il voulait. » Sa main serre la tienne. « Il l'aura vue de près. Il attendait cela depuis qu'il sait marcher. »" },
      "Le gris lui monte aux doigts. Il le regarde venir, sans retirer sa main, avec la curiosité grave d'un homme qui voit pour la première fois comment gèle une mare.",
      "« Tu connais la petite ? Elle est devenue quoi ? » Tu dis : horlogère. La meilleure de trois provinces. Il rit, un seul coup, du fond de la poitrine. « Je l'avais dit. Pendue ou horlogère. » Il se redresse, et reprend la pose où tu l'as trouvé, de lui-même, comme on se remet au travail. « Dis-lui que j'ai tenu. Que j'étais au bord. J'ai fait neuf lieues pour une cloche, j'en ai entendu onze coups sur douze, et j'ai deux enfants dehors, ou presque. Le compte est... »",
      "La bouche reste sur le mot. Tu retires ta main.",
      { with: "rouget", text: "Rouget t'attend à trois pas, les mains dans les aisselles. « Tu leur parles à tous, dit-il. Tu vas plus avoir de sable. » Il renifle. « Mon père à moi, je sais même pas dans quel cercle il est. Tu crois qu'il a tenu quelque chose ? »" },
    ],
    choices: [{ back: "K13r_josse" }] },

  K13r_acheteurs: { act: "IV", title: "Quarante couverts", place: "tour", ambiance: "chateau",
    text: [
      "Ils arrivent à dix heures, par la rue du Cadran, dans des chaises que portent des noirs. Tu les comptes à la porte basse : quarante, comme sur la feuille.",
      "Il y a là ce que le royaume a de plus cher. Un maréchal qui a gagné deux batailles sous le grand-père de la Régente, et qui a aujourd'hui les joues d'un page. Une duchesse douairière de trente ans, appuyée au bras de son arrière-petit-fils, qui en paraît cinquante. Deux banquiers jumeaux, dont l'un a pris du sable et l'autre non, et qui ne se ressemblent plus. Un évêque, qu'on a rajeuni par économie, pour ne pas payer deux fois les frais d'un sacre.",
      "Ils ont tous la même peau : lisse, tirée, d'un rose de cire, avec des yeux d'un autre âge qu'on a oubliés dedans. Ils se saluent peu. Chacun sait ce que l'autre a vendu pour être là : une terre, une forêt, une fille. On ne se félicite pas, entre gens qui ont payé le même prix.",
      "Chacun porte, pendu à sa ceinture ou tenu par un laquais, un sablier vide, haut d'une coudée, en cristal, bouché d'or. On le leur remplira à table. À midi, quand le puits lâchera, ils auront devant eux leur part de ce que le monde entier aura perdu ; et ils dîneront, pendant qu'au-dehors les provinces s'arrêteront l'une après l'autre, comme des pendules qu'on oublie.",
      "À la porte, un maître d'hôtel pointe les noms. La duchesse s'arrête. « Monsieur le Maître des Sables nous fait dîner dans une cave. — Dans la salle basse de la Tour, Madame. — C'est ce que je dis. » Elle rassemble ses jupes. « J'ai donné la Sologne pour voir cela. J'espère qu'il y aura du feu. »",
      "Ils descendent, un par un, les quatre marches. Le dernier est un jeune homme pâle, seul, sans laquais, qui porte son sablier lui-même, et qui se retourne sur le seuil pour regarder le ciel. Il a l'air de quelqu'un qui a signé hier, et qui voudrait relire.",
      { after: "r:sait_acheteurs", text: "*Quarante et unième couvert*, disait la feuille. Il est pour une femme de vingt-huit ans, en blanc, qu'on amènera après le Serment, entre deux casaques, si l'on y parvient." },
    ],
    choices: [{ back: "K13r_parvis" }] },

  K13r_choix: { act: "IV", title: "Deux chemins vers le bas", place: "tour", ambiance: "chateau",
    text: [
      "La demie de dix heures ne sonne pas : rien ne sonne ici depuis soixante ans. Tu la lis à la pendule de voyage d'une dame de la Cour, posée sur un pliant, et à l'ombre du gnomon de la fontaine, qui est celle de 601.",
      "Il faut que tu sois en bas, la main sur un levier, quand quelqu'un sera en haut, la main sur une corde. Tu as deux chemins, et il est temps de prendre l'un.",
      "L'escalier d'en bas. Quatre-vingts marches sans rampe, derrière la porte de bronze, soixante casaques, et ce que tu as su rassembler pour passer au travers. On y entre à onze heures, quand la place aura les yeux sur l'estrade.",
      { after: "r:droit_mesure", text: "Le Droit. Le boyau des Fondateurs, sous l'étoile de cuivre de la vieille église : tiré au cordeau jusque sous la Tour, vide, sans un garde. Il mange le sable trois fois. Tu l'as mesuré cette nuit : six pincées jusqu'à la grille, et rien pour revenir." },
      { before: "r:droit_mesure", text: "Le Droit. Le boyau des Fondateurs, sous l'étoile de cuivre de la vieille église : tiré au cordeau jusque sous la Tour, vide, sans un garde. On dit qu'il mange le sable trois fois. Tu ne l'as pas mesuré. Il faudrait, à vue de glaneur, six pincées jusqu'au bout, et l'on n'en revient pas." },
      { if: { item: "clef_droit" }, text: "Tu as la clef de sa grille." },
      { after: "monde:droit_grave", text: "{autre} t'a écrit qu'on a gravé pour toi, cette nuit-là, un mur devant cette grille." },
      { with: "jehan", text: "« L'escalier, je le connais, dit Jehan. Le trou, personne ne le connaît. C'est un avantage ou c'est le contraire. Choisis : je suis de celui que tu prends, jusqu'où il veut bien de moi. »" },
    ],
    choices: [
      { label: "L'escalier : rester sur la place jusqu'au Serment", fx: { flag: ["r:voie_escalier", "monde:voie_escalier"] }, to: "K13r_veille_escalier", big: true },
      { label: "Le Droit : redescendre à Saint-Gnomon-le-Vieux", if: { stock: "sable", min: 6 }, why: "Le boyau demande six pincées, et tu ne les as pas.", fx: { flag: ["r:voie_droit", "monde:voie_droit"] }, to: "K13r_veille_droit", big: true },
      { label: "Pas encore : il reste des choses à voir sur la place", to: "K13r_parvis" },
    ] },

  K13r_veille_escalier: { act: "IV", title: "Le quart avant onze", place: "tour", ambiance: "chateau",
    text: [
      "Tu prends ta place : au bord, contre la margelle de la fontaine, d'où l'on voit à la fois l'estrade, la chaise à sangles et le guichet du vantail de droite.",
      "La place se remplit de ce qui manquait. La Cour, derrière ses cordes, a fini son chocolat. Les trompettes ont trouvé leur note. Les Veilleurs sont debout, sur trois rangs, les mains dans leurs manches. Sur l'estrade, le chambellan a posé le coussin, et sur le coussin le livre du Serment, ouvert à la page que soixante mains ont cornée.",
      "Par-dessus tout cela, les cinq mille de 541 regardent en l'air. Ils attendent le douzième. Depuis soixante ans, on jure devant eux qu'on le leur rendra, et l'on redescend dîner.",
      { after: "r:vu_releve", text: "Au quart, le guichet s'ouvrira le temps de compter vingt. Tu as le compte dans les jambes." },
      { after: "r:mot_escalier", text: "Tu as un mot : *Soixante.* On le dit en se baissant." },
      { after: "r:signe_hardouin", text: "Au pied de la Tour, un capitaine de 541 tient sa droite libre, et sa gauche armée." },
      "Tu t'assois sur la margelle. Il te reste un quart d'heure. Tu sors le Cahier ; tu l'ouvres sur tes genoux. Tu lèves les yeux, une fois, vers le haut de la Tour, où il y a des abat-sons, et derrière les abat-sons une cloche, et sous la cloche, tout à l'heure et depuis soixante ans, quelqu'un.",
    ],
    choices: [{ label: "Écrire, une dernière fois avant la Tour", to: "B13", big: true }] },

  K13r_veille_droit: { act: "IV", title: "Le quart avant onze", place: "basse", ambiance: "temple",
    text: [
      "Tu redescends la rue Droite à contre-pente, seul{e}, entre les familles qui montent depuis soixante ans. Tu vas vite. Derrière toi, là-haut, les trompettes de la Cour ont trouvé leur note.",
      "Saint-Gnomon-le-Vieux est vide de ses Veilleurs. Il reste les pèlerins de 541, sur leur paille, la tête levée ; le bedeau, sur sa chaise ; et trois cents veilleuses à ruban, qu'on a laissées brûler. La pièce de soleil, par le trou de la voûte, est à deux dalles de l'étoile. Elle y sera à midi, quoi qu'on sonne.",
      "Derrière l'autel, la dalle à l'anneau pivote avec sa douceur de chose bien faite. Vingt marches, sèches. Le boyau, tiré au cordeau, avec la règle de laiton au milieu du sol ; et, tout au fond du noir, le point gris, de perle, qui se tient immobile.",
      "Tu comptes ce que tu as au cou. Six pincées jusqu'à la grille, et ce qu'il faudra derrière. Tu serres le lacet.",
      { with: "jehan", text: "Jehan s'est arrêté en haut des marches. « J'ai du sable pour vingt pas là-dedans, et il t'en faut pour le bout. » Il te tend la main, la retire, te la tend. « Je remonte à la place. Je ferai du bruit à la porte de bronze, à onze heures, autant qu'un homme peut en faire. Qu'ils regardent de ce côté-là. » Il s'en va, en courant, sa casaque sous le bras." },
      { with: "rouget", text: "Rouget regarde le trou, et il recule d'un pas. « J'y vais pas. Je te le dis en face. Je garde la dalle. Si quelqu'un veut la rabattre sur toi, faudra qu'il me passe dessus, et je mords. »" },
      "Tu t'assois sur la dernière marche, les pieds dans le boyau. Il en vient un souffle froid, égal. Il te reste un quart d'heure avant d'y entrer. Tu sors le Cahier ; tu l'ouvres sur tes genoux, à la lueur de ta veilleuse.",
    ],
    choices: [{ label: "Écrire, une dernière fois avant la Tour", to: "B13", big: true }] },
});

module.exports = { passages: P, extras: {} };
