// Le Douzième Coup · chapter 15, both together (act V, the upper Tower inside the eleventh stroke, after M15).
// Hub `K15_galerie` : each shows the other what they know of the stopped town (`K15j_dit_*` for the one who
// passes, `K15r_voit_*` for the one who stays). The landing and the oak door (a sheet under it, a fishbone in the
// lock) ; the upper Chamber (hub `K15_haute`) : the Queen one step from the window, the child woken for a grain
// (`j:aelis_verite` | `j:aelis_douce`), the remedy of 601 put in her hand (`monde:aelis_remede`), the bed, the
// cord, the paper with the red seal, the eight bays. The Cage for two (`r:lu_nom_cage`, `r:corde_vue`). B15 closes
// the chapter when a cane is heard on the stair.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var SORTIS = { has: "monde:noyers_sortis" };
var ATTELE = { has: "monde:girard_attele" };
var JURE = { has: "monde:girard_jure" };
var CORDE_C = { has: "monde:corde_coupee" };
var ECORCE = { has: "monde:aelis_ecorce" };
var PIECE = { has: "monde:florizel_piece" };
var P_SORTIE = { has: "monde:perrine_sortie" };
var P_DEBOUT = { all: [{ has: "monde:perrine_debout" }, { not: { has: "monde:perrine_sortie" } }] };
var P_PRISE = { not: { any: [{ has: "monde:perrine_sortie" }, { has: "monde:perrine_debout" }] } };

Object.assign(P, {
  K15_galerie: { act: "V", title: "Deux, sur un balcon", place: "tour", ambiance: "chateau", hub: true, backName: "la galerie",
    text: [
      { first: true, if: J, text: "Tu tiens debout. Tu t'en assures, une main à la barre : les genoux plient, les doigts serrent, et tout cela répond quand on le demande. Tu as dans ta chemise, noué dans un coin de mouchoir, de quoi avoir ton heure à toi. Il chuinte contre ta peau. On s'y fait vite." },
      { first: true, if: J, text: "{autre} est à côté de toi, les coudes sur la barre, et regarde la ville. {autre:Il} la regarde la bouche un peu ouverte, comme ceux d'en bas. « Elle a des couleurs », dit-{autre:il}." },
      { first: true, if: R, text: "{autre} tient debout, une main à la barre, et s'essaie les genoux. {autre:Il} a noué sa part dans un coin de mouchoir, contre sa peau. Tu l'entends chuinter. Vous faites, à deux, le bruit d'une fontaine très petite." },
      { first: true, if: R, text: "Tu mets les coudes sur la barre, et tu regardes. Tu n'avais vu cette ville qu'en gris, sous un midi sale, par le dessous. La voilà d'en haut, et elle a des couleurs : des toits bleus, des toits bruns, du linge, des rubans, et un or sur tout cela, que tu connaissais des champs et que tu ne lui aurais pas prêté." },
      { again: true, text: "La galerie, le verre tiède, la ville arrêtée dans son midi. La note." },
      { again: true, after: "K15_haute", text: "Dans la vis, très bas, il vient par moments un petit bruit de bois sur de la pierre." },
    ],
    choices: [
      { label: "Lui montrer la place", hide: { any: [R, { seen: "K15j_dit_place" }] }, to: "K15j_dit_place" },
      { label: "Lui montrer la borne de la rue aux Oies", hide: { any: [R, { seen: "K15j_dit_borne" }] }, to: "K15j_dit_borne" },
      { label: "Lui montrer le quai des Almanachs", hide: { any: [R, { seen: "K15j_dit_basse" }] }, to: "K15j_dit_basse" },
      { label: "Lui montrer le septième peuplier", hide: { any: [R, { seen: "K15j_dit_peupliers" }] }, to: "K15j_dit_peupliers" },
      { label: "La place, de face", hide: { any: [J, { seen: "K15r_voit_place" }] }, to: "K15r_voit_place" },
      { label: "Les douze portes peintes", hide: { any: [J, { seen: "K15r_voit_portes" }] }, to: "K15r_voit_portes" },
      { label: "Le quai, et un mur que tu connais", hide: { any: [J, { seen: "K15r_voit_basse" }] }, to: "K15r_voit_basse" },
      { label: "Le bord, vu du dedans", hide: { any: [J, { seen: "K15r_voit_peupliers" }] }, to: "K15r_voit_peupliers" },
      { label: "Monter au palier de la Chambre haute", to: "K15_palier_haut", big: true },
      { label: "Monter à la Cage, à deux", hide: { any: [R, { seen: "K15j_cage_deux" }] }, to: "K15j_cage_deux" },
      { label: "Monter à la Cage, derrière {autre}", hide: { any: [J, { seen: "K15r_cage_deux" }] }, to: "K15r_cage_deux" },
      { label: "Écouter ce qui monte dans la vis", hide: { not: { seen: "K15_haute" } }, to: "B15", big: true },
    ] },

  // ---------- what the one who passes shows ----------
  K15j_dit_place: { act: "V", title: "Les mollets d'un boulanger", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui montres la place. Tu veux dire des noms, et tu t'aperçois que tu en sais peu : un marchand d'oublies, une femme qui rend la monnaie en liards rognés, un archer. Neuf jours font peu de noms dans une ville.",
      "{autre} se tait. {autre:Il} a les yeux sur un endroit précis, près de la fontaine, et {autre:il} y reste si longtemps que tu regardes aussi : un gros homme en tablier blanc, roux de moustache, qui rit.",
      "« Le boulanger. » Sa voix est drôle. « Il a une moustache. Je savais pas. J'ai dormi contre ses mollets, avant-hier. Y avait une place, entre lui et une robe de noces, où le vent passait pas. » {autre:Il} montre plus loin. « Celle-là, qui lève son petit. Je connais son chignon. Je connais pas sa figure. Elle est jeune. »",
      "Tu regardes {autre}, de côté. Tu avais lu cela : *CINQ MILLE, DE DOS.* Tu l'avais lu comme on lit un chiffre. Quelqu'un a passé deux jours à quatre pattes entre les jambes de ces gens, à les savoir par cœur par-derrière, comme on sait un mur.",
      "« De dos, on s'habitue, dit {autre}. On dit *les pris.* On dit pas *les gens.* » {autre:Il} renifle. « Faut plus que je les regarde de face. Ça va me gêner pour le métier. »",
    ],
    choices: [{ back: "K15_galerie" }] },

  K15j_dit_borne: { act: "V", title: "Ce que 601 sait d'une borne", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui montres, au bord de la place, la rue qui tombe entre un cirier et un marchand de peignes. La borne.",
      { if: SORTIS, text: "Tu dis que la borne était à un laboureur, à sa fille, à son garçon ; qu'ils sont partis ce matin dans une charrette bleue, fâchés, vivants ; et qu'un mitron a pris la place. {autre} hoche la tête. « Chez moi, y a ce mitron-là, sur cette borne-là, avec son pain. Je me suis demandé ce qu'il avait de spécial, pour que tu m'en aies jamais rien écrit. Il a rien. Il a ta place vide. » {autre:Il} sourit, pour la première fois. « C'est la plus belle chose que j'ai vue en ville. »" },
      { if: { all: [{ not: SORTIS }, ATTELE] }, text: "Tu dis : Josse Noyer. Le père de Line. Il a laissé partir sa fille à la demie de dix, et il est resté au bord, comme il l'avait promis. {autre} le regarde, la main en visière, comme lui. « Je le connais. Il est pareil, chez moi. Il a une main sur l'épaule, là où elle pesait. » {autre:Il} se tait un peu. « Ta vieille sait où il est. Elle l'a jamais dit aux Veilleurs. Elle voulait pas qu'on lui mette un ruban. »" },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }] }, text: "Tu dis : c'était la borne de Josse Noyer, le père de Line. Elle est vide. Il y a son chapeau. {autre} hoche la tête. « Chez moi aussi. Le chapeau y est encore, le fond en l'air. Lui, il est plus bas, au second coude de la rue. Il court. Il a la bouche grande ouverte sur un nom. » {autre:Il} te regarde. « De toute la ville, c'est le seul qui regarde devant lui. Ta vieille sait où il est. Elle l'a jamais dit aux Veilleurs : elle voulait pas qu'on lui mette un ruban. »" },
      { if: { not: SORTIS }, text: "Tu penses à une petite fille dans de la paille, qui t'a demandé : *et le père ?* Tu as répondu qu'un homme au bord a ses chances. Elle l'a rangé avec les vis." },
    ],
    choices: [{ back: "K15_galerie" }] },

  K15j_dit_basse: { act: "V", title: "Un trait par tête", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui montres la ville basse : le damier des toits, les canaux, le bassin. Tu cherches le quai des Almanachs, l'auvent vert. Tu dis son nom. Tu ne l'avais écrit qu'une fois ou deux, et de biais.",
      { if: P_DEBOUT, text: "« La colporteuse. » {autre} s'est redressé{autre:e}. « Celle qui reste debout, avec de la cire. Écoute. Y a un mur, sur ce quai, au pignon de l'auberge. Un crépi jaune. Hier il était nu : je m'y suis adossé{autre:e}. Ce matin il était plein de traits. Par cinq, le cinquième en travers. » {autre:Il} montre ses doigts. « Deux cent trente et un. J'ai compté deux fois. Elle a écrit au-dessus : *sortis par le bief des Teinturiers, un trait par tête, je mets pas les noms, ils pleuraient.* »" },
      { if: P_DEBOUT, text: "Tu ne dis rien. {autre} continue, plus bas. « Y a un trait tout seul, en dessous. Plus long. Elle a mis : *celui-ci, c'est moi. Je sors la dernière.* Et un article de règlement, avec un numéro. J'ai pas tout compris. » Tu comprends, toi. Tu regardes un auvent vert, de la grosseur d'un grain de riz, sous lequel quelqu'un vient de s'apercevoir que le crieur de moules ne finit pas son mot." },
      { if: P_SORTIE, text: "« L'étal fermé ? Avec le volet ? » {autre} cherche. « Je suis passé{autre:e} devant. J'ai cru à une boutique comme une autre. Y en a tant, de fermées, chez moi, qu'on se demande plus si c'était avant ou après. » {autre:Il} te regarde. « Elle est dehors, alors. Elle a eu soixante ans dehors. C'est ce que tu voulais ? » Tu dis que oui. Tu le dis vite." },
      { if: P_PRISE, text: "« L'auvent vert. » {autre} ne te regarde pas. « Je suis passé{autre:e} devant. Elle y est. Elle tend un almanach à quelqu'un. » Un temps. « J'ai regardé le prix. C'est l'habitude. Je savais pas que c'était quelqu'un à toi. » Tu serres la barre. Tu avais eu neuf jours pour le lui dire mieux, à elle, et tu as parlé d'un peuplier comme on parle du temps." },
      "Sur le bassin, la voile est gonflée, et le bateau a devant lui sa moustache d'écume.",
    ],
    choices: [{ back: "K15_galerie" }] },

  K15j_dit_peupliers: { act: "V", title: "L'arbre grêle", place: "tour", ambiance: "chateau",
    text: [
      "Tu lui montres le chemin du canal, entre ses deux rangs de peupliers. Tu comptes tout haut. Le septième est plus grêle.",
      "« C'est le bord. » {autre} le dit sans hésiter, en personne du pays. « J'y ai marché. De ton côté de cet arbre, chez moi, l'herbe est grise, et les grillons se tiennent en l'air. De l'autre, y a des coquelicots. Ça fait une ligne dans le pré, droite comme si on l'avait tirée au cordeau. Les vaches la connaissent. »",
      { if: SORTIS, text: "Tu dis que trois personnes ont passé cet arbre ce matin, dans une charrette bleue, sans savoir ce qu'elles passaient. {autre} suit le chemin des yeux, jusqu'où il se perd. « Alors y a une vieille, quelque part chez moi, qui a jamais vu ça. » {autre:Il} montre la place, d'un coup de menton. « Qui est partie avant. » Tu n'y avais pas pensé de cette façon." },
      { if: { all: [{ not: SORTIS }, ATTELE, JURE] }, text: "Tu lui montres le point bleu, passé l'arbre, près du ponceau. Un garçon de quatorze ans, une jument, une petite. Il a juré de rester là. « Il y est, dit {autre}. Il est du bon côté. » {autre:Il} plisse les yeux. « Chez moi, y a plus de charrette à cet endroit. Y a un pont de pierre, et des gens qui passent dessus pour aller vendre leurs œufs. »" },
      { if: { all: [{ not: SORTIS }, ATTELE, { not: JURE }] }, text: "Tu lui montres le point bleu. Tu ne dis rien. {autre} le voit, et voit de quel côté de l'arbre il est. « La charrette. Trente pas en dedans. Un gars debout dessus, le fouet en l'air, tourné vers la ville. » {autre:Il} baisse la voix. « Je suis passé{autre:e} à côté. J'ai cru qu'il arrivait. Il revenait, hein ? » Tu dis que oui. Qu'il avait posé la petite, et qu'il revenait chercher son père." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }] }, text: "Tu lui montres, passé l'arbre, la chose claire, minuscule. Tu dis qui c'est. {autre} regarde longtemps. « C'est elle ? Si petite ? » {autre:Il} a un rire dans le nez. « Elle m'a fait porter un livre de dix livres pendant neuf jours, et elle tient dans un pouce. » Puis, plus bas : « Elle est dehors. Elle le sait pas encore. Elle a soixante ans pour l'apprendre. »" },
    ],
    choices: [{ back: "K15_galerie" }] },

  // ---------- what the one who stays sees ----------
  K15r_voit_place: { act: "V", title: "On dit les pris", place: "tour", ambiance: "chateau",
    text: [
      "{autre} te montre la place, et cherche des noms. {autre:Il} en trouve trois : un marchand d'oublies, une femme aux liards rognés, un archer.",
      "Toi, tu en connais cinq mille, et tu n'en sais aucun. Tu les regardes d'en haut, de face, avec leurs bouches rondes. Le boulanger contre les mollets de qui tu as dormi a une moustache rousse. La fermière qui lève son petit, dont tu sais le chignon par cœur, a seize ans peut-être. Tu le dis à {autre}, comme cela vient.",
      "{autre:Il} t'écoute. {autre:Il} a une façon d'écouter que tu ne connaissais à personne : sans regarder ailleurs.",
      "Tu as fouillé des poches pareilles toute ta vie. Des tabliers, des bourses, des paniers. On appelle cela glaner. On dit *les pris*, et le mot fait le travail : un pris, cela se contourne, cela s'enjambe, cela a parfois une montre. Tu as devant toi cinq mille personnes qui avaient pris leur souffle pour crier quelque chose de joyeux. Aucune n'a l'air d'une chose qu'on enjambe.",
      "« Faut plus que je les regarde de face, dis-tu. Ça va me gêner pour le métier. » {autre} garde son sérieux et dit : « Tu auras peut-être plus besoin du métier. » C'est une idée qui ne t'était jamais venue, et elle te fait un peu peur.",
    ],
    choices: [{ back: "K15_galerie" }] },

  K15r_voit_portes: { act: "V", title: "Celle de derrière", place: "tour", ambiance: "chateau",
    text: [
      "Près de la fontaine, les tréteaux, les douze portes peintes sous leur cadran de carton. Tu les as vus gris, de plain-pied, contre des nuques. D'ici, ils sont rouges, bleus, dorés, et le gros homme du milieu a un pourpoint couleur de cerise.",
      "Onze portes ouvertes. Tu sais ce qu'il y a derrière la douzième : tu en as fait le tour.",
      { if: PIECE, text: "« Y a une fille, derrière, dis-tu. Dix-huit ans. Trois épingles dans les cheveux. Elle a la main à plat sur la porte, et les yeux fermés. » {autre} te regarde vivement. « Tu l'as vue ? — J'ai fait le tour. Chez moi elle attend depuis soixante ans. C'est la seule de toute la place qui savait qu'il lui restait quelque chose à faire. » {autre:Il} dit un nom : Colombe. {autre:Il} dit qu'elle a appris le rôle en quatre jours. Tu trouves que cela se voyait." },
      { if: { not: PIECE }, text: "« Y a rien, derrière, dis-tu. Une planche noire, une araignée, une corde. Et une fille en manteau bleu qui tient la corde. Au douzième coup, elle aurait tiré, et cinq mille personnes se seraient signées devant un trou. » {autre} fait une grimace. « On m'avait offert d'y mettre quelqu'un. J'ai passé mon chemin. » {autre:Il} regarde la porte fermée. « J'aurais dû. »" },
      "Une petite, devant la onzième, tient une lanterne de papier et regarde ses pieds. Elle a dix ans. Tu ne l'avais pas remarquée, en bas : de dos, elle ressemblait à un ballot d'étoffe.",
    ],
    choices: [{ back: "K15_galerie" }] },

  K15r_voit_basse: { act: "V", title: "Le pignon de l'auberge", place: "tour", ambiance: "chateau",
    text: [
      "La ville basse. Tu la reconnais mal : il lui manquait l'eau. Les canaux luisent, le bassin a une voile, et sous un pont que tu connais il y a de l'ombre, bleue, fraîche, où tu as vu trente paillasses.",
      "{autre} cherche un quai. {autre:Il} dit un nom, qu'{autre:il} ne t'avait écrit qu'une fois ou deux, de biais : Perrine. Un auvent vert. Des almanachs.",
      { if: P_DEBOUT, text: "Tu te redresses. Tu lui dis le mur : le pignon de l'auberge, le crépi jaune, nu hier, écrit ce matin. Les traits par cinq, le cinquième en travers. Deux cent trente et un. *Sortis par le bief des Teinturiers.* Et le dernier trait, tout seul, plus long. *Celui-ci, c'est moi. Je sors la dernière.*" },
      { if: P_DEBOUT, text: "{autre} ne dit rien. {autre:Il} regarde un point vert, en bas, très loin, de la grosseur d'un grain de riz. {autre:Il} a la figure de quelqu'un à qui l'on rend une chose qu'il croyait avoir cassée. « Article quatre, dit-{autre:il} enfin. On ne ferme pas boutique tant qu'il reste un client. » Tu n'avais pas compris la phrase, sur le mur. Tu la comprends." },
      { if: P_SORTIE, text: "Tu es passé{e} devant. Un étal fermé, un volet. Tu as cru à une boutique comme une autre : il y en a tant, chez toi, qu'on ne se demande plus si l'on a fermé avant ou après. « Elle est dehors, alors », dis-tu. {autre} fait oui. {autre:Il} le fait vite, et regarde ailleurs." },
      { if: P_PRISE, text: "Tu es passé{e} devant. Tu le lui dis, parce qu'il le faut : elle y est. Elle tend un almanach à quelqu'un, ouvert au mois de juin. Tu ne lui dis pas que tu as regardé le prix. Puis tu le lui dis, parce que {autre} te regarde, et qu'on ne s'est pas écrit neuf jours pour commencer à trier." },
      { if: P_PRISE, text: "{autre} serre la barre. Ses jointures blanchissent : elles ont repris leur couleur depuis si peu que cela se remarque." },
    ],
    choices: [{ back: "K15_galerie" }] },

  K15r_voit_peupliers: { act: "V", title: "Du dedans", place: "tour", ambiance: "chateau",
    text: [
      "{autre} compte des peupliers, tout haut, le long d'un canal. Le septième est plus grêle.",
      "Tu connais cet arbre. Tu l'as touché. C'est le bord : de ce côté-ci, chez toi, l'herbe est grise et les grillons se tiennent en l'air ; de l'autre, il y a des coquelicots, et une ligne dans le pré, droite comme si on l'avait tirée au cordeau. Tu as mis deux jours à venir de là jusqu'ici, en comptant tes grains.",
      "D'ici, rien ne le marque. C'est un arbre parmi d'autres, dans une plaine blonde. Personne, sur cette place, ne sait qu'à une lieue d'eux il y a un peuplier qui décide.",
      "Tu regardes au-delà. Tu regardes longtemps, les yeux plissés, avec l'habitude que donnent dix ans de lisière. Tout au bout, passé l'arbre grêle, il te semble qu'un blé remue. C'est trop loin pour le jurer. Tu le jures quand même, pour toi.",
      { if: { all: [{ not: SORTIS }, ATTELE, { not: JURE }] }, text: "En deçà de l'arbre, à trente pas, un point bleu. Tu es passé{e} à côté, avant-hier : une charrette, un garçon debout dessus, le fouet en l'air, tourné vers la ville. Tu avais cru qu'il arrivait. {autre} te dit, très bas, qu'il revenait." },
      { if: { all: [{ not: SORTIS }, { not: ATTELE }] }, text: "Passé l'arbre, il y a quelque chose de clair, de minuscule. {autre} te dit qui. Tu ris dans ton nez. Elle t'a fait porter un livre de dix livres pendant neuf jours, cette femme-là, et elle tient dans un pouce." },
    ],
    choices: [{ back: "K15_galerie" }] },

  // ---------- the oak door ----------
  K15_palier_haut: { act: "V", title: "La porte de chêne", place: "tour", ambiance: "chateau",
    text: [
      { if: J, text: "Vous montez. {autre} va devant, à ton pas, et se retourne à chaque palier pour voir si tu suis : tu suis. Tes jambes ont retrouvé leur âge." },
      { if: R, text: "Vous montez. Tu vas devant, à son pas, et tu te retournes à chaque palier. {autre} suit. {autre:Il} monte comme quelqu'un qui réapprend, et qui trouve cela amusant." },
      "Le palier rond, l'anneau de cuivre, le fil. À droite, la porte de chêne aux armes d'Aurime, haute, cloutée. Elle est fermée de deux tours. Par le trou de la serrure, on voit le bout d'une clef, qui bouche le jour : elle est en dedans.",
      { if: J, text: "{autre} s'accroupit devant la serrure, y met l'œil, puis le petit doigt. {autre:Il} a un sourire que tu ne lui connais pas encore, et qui doit être celui du métier. « Une clef en dedans, c'est une porte ouverte. Faut une feuille. T'as du papier ? »" },
      { if: R, text: "Tu t'accroupis devant la serrure. Tu y mets l'œil, puis le petit doigt. Une clef en dedans, c'est une porte ouverte : on apprend cela à dix ans, dans les fermes prises. Il faut une arête, et une feuille de papier. Tu as l'arête." },
    ],
    choices: [
      { label: "Glisser une feuille sous la porte", hide: R, to: "K15j_feuille", big: true },
      { label: "Mettre l'arête de brochet dans la serrure", hide: J, to: "K15r_arete", big: true },
      { back: "K15_galerie" },
    ] },

  K15j_feuille: { act: "V", title: "La page de juin", place: "tour", ambiance: "chateau",
    text: [
      { if: { item: "almanach_541" }, text: "Tu tires de ta chemise l'almanach de l'année. Tu l'ouvres à juin. Tu hésites, le temps de voir une figure sous un auvent vert ; puis tu arraches la page, d'un coup, au ras de la couture. Elle disait qu'un almanach est fait pour servir." },
      { if: { not: { item: "almanach_541" } }, text: "Tu n'as sur toi que le Cahier, et l'on n'arrache rien à ce livre-là. {autre} fouille dans sa doublure, et en tire une feuille grasse, pliée en huit, qui a été un billet de roulage. « Ça ira. »" },
      "Tu la glisses sous la porte, à plat, jusqu'à ce qu'il n'en dépasse plus qu'un doigt. {autre} a sorti d'on ne sait où une arête de brochet, longue, blanche, polie par l'usage. {autre:Il} l'engage dans le trou, cherche, pousse, de petits coups de poignet, la langue entre les dents.",
      "Il y a un déclic, puis un bruit de sou qui tombe.",
      "Tu retires la feuille, doucement. La clef vient avec : grosse, en fer poli, avec un petit écu sur l'anneau. Elle est tiède de soleil. Il y a une demi-heure, une main de femme l'a tournée deux fois, et une petite voix a demandé : *maman, pourquoi tu fermes ?*",
      "{autre} te la tend. « C'est chez toi, ici. C'est toi qui ouvres. »",
      "Elle tourne deux fois. Le chêne cède, pesamment, sur du jour.",
    ],
    choices: [{ label: "Entrer", to: "K15_haute", big: true }] },

  K15r_arete: { act: "V", title: "Une porte ouverte", place: "tour", ambiance: "chateau",
    text: [
      "{autre} glisse une feuille sous la porte, à plat, jusqu'à ce qu'il n'en dépasse plus qu'un doigt. C'est une page d'almanach, ou un vieux billet à toi : tu ne regardes pas, tu as la serrure.",
      "L'arête entre. Tu trouves le panneton de la clef, de l'autre côté ; tu le redresses, d'un quart, pour qu'il soit d'aplomb dans l'entrée ; et tu pousses, à petits coups de poignet, la langue entre les dents. Tu as fait cela dans cent fermes. Jamais chez une reine.",
      "Un déclic. Un bruit de sou qui tombe.",
      "{autre} retire la feuille. La clef vient avec : grosse, en fer poli, un petit écu sur l'anneau.",
      { if: { item: "clef_haute" }, text: "Tu as la sœur de cette clef dans ta ceinture, décrochée d'un homme en gris. Tu les mets côte à côte. Ce sont les mêmes trois dents. Un sous-maître s'était fait remettre le double de la chambre où il enfermait sa Reine : il voulait pouvoir entrer après. Tu rempoches la sienne. Elle n'ouvrira rien que tu n'aies ouvert plus proprement." },
      "Tu tends la clef à {autre}. « C'est chez toi, ici. C'est toi qui ouvres. » {autre:Il} la prend. Elle tourne deux fois. Le chêne cède sur du jour.",
      "Avant de passer le seuil, tu ôtes tes sabots. Tu ne sais pas pourquoi. On entre ainsi chez les morts, à Roquebise, et dans les églises ; et tu n'as jamais su de quel côté ranger une reine qui dort.",
    ],
    choices: [{ label: "Entrer, les sabots à la main", to: "K15_haute", big: true }] },

  // ---------- the upper Chamber ----------
  K15_haute: { act: "V", title: "La Chambre haute, dans la note", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre haute",
    text: [
      { first: true, text: "C'est une chambre ronde, à huit baies, pleine d'un jour qui vient de partout. On y est au-dessus des toits. La poussière pend dans le soleil, immobile, comme une neige qu'on aurait priée d'attendre." },
      { first: true, if: J, text: "Tu la connais. Tu y es entré{e} ce matin, ou tu l'as vue par un carreau. Tu y entres à présent comme dans son portrait : chaque chose à sa place, et aucune qui respire." },
      { first: true, if: R, text: "Tu n'es jamais entré{e} dans une chambre pareille. On t'a appris à dire *la Reine endormie* comme on dit *le bon Dieu* : quelqu'un au nom de qui l'on jure, et qu'on ne verra pas. Elle est là. Elle est à six pas." },
      { first: true, text: "Elle est debout, à un pas de la croisée du midi, en blanc, le bras droit levé, la main ouverte vers une crémone de cuivre. Sur sa hanche gauche, une enfant de huit ans, pieds nus, en robe de cérémonie, montre la vitre du doigt." },
      { first: true, text: "Une corde descend du plafond et traverse toute la chambre. Le long du mur, un fil mince, à poignée d'ivoire. Sous la baie du levant, un petit lit de bois blanc, et deux souliers d'enfant, l'un debout, l'autre couché." },
      { again: true, text: "La chambre ronde, ses huit baies, sa poussière arrêtée. La Reine, à un pas de la croisée, l'enfant à la hanche." },
    ],
    choices: [
      { label: "La Reine", hide: { any: [R, { seen: "K15j_haute_reine" }] }, to: "K15j_haute_reine" },
      { label: "L'enfant", hide: R, to: "K15j_haute_aelis" },
      { label: "Le lit blanc", hide: { any: [R, { seen: "K15j_haute_lit" }] }, to: "K15j_haute_lit" },
      { label: "La corde", hide: { any: [R, { seen: "K15j_haute_corde" }] }, to: "K15j_haute_corde" },
      { label: "Celle qui dort", hide: { any: [J, { seen: "K15r_haute_reine" }] }, to: "K15r_haute_reine" },
      { label: "L'enfant, et ce qu'elle a aux lèvres", hide: J, to: "K15r_haute_aelis" },
      { label: "Le papier, dans son corsage", hide: { any: [J, { not: { has: "monde:reine_renonce" } }, { seen: "K15r_haute_papier" }] }, to: "K15r_haute_papier" },
      { label: "Les huit baies", hide: { any: [J, { seen: "K15r_haute_baies" }] }, to: "K15r_haute_baies" },
      { label: "Repasser la porte de chêne", to: "K15_galerie", big: true },
    ] },

  K15j_haute_reine: { act: "V", title: "En chemin", place: "tour", ambiance: "chateau",
    text: [
      "Tu fais le tour d'elle, lentement, comme d'une statue dans une église.",
      "Elle a trente ans. Tu ne t'en étais pas avisé{e} : on lui en donne quarante, de loin, à cause du blanc, du deuil, de la façon dont elle se tient. De près, elle a une peau de jeune femme, des cernes, et une mèche échappée du voile, qu'elle n'a pas eu le temps de rentrer.",
      "Elle marchait. Sa robe a gardé le pas : l'étoffe est en avant, sur un genou, et la traîne derrière fait encore sa vague. Elle a dit ce matin, ou elle aurait pu le dire, qu'elle aimait mieux être trouvée en chemin que sur une chaise. On la trouvera en chemin.",
      { after: "monde:reine_sait", text: "Elle savait. Tu le lui as dit, dans cette chambre, il y a une heure : une lieue, soixante ans. Elle a l'enfant du côté gauche, serrée, comme elle l'avait décidé. Ce que tu vois sur sa figure, c'est quelqu'un qui tient parole à une petite fille pendant que le plafond tombe." },
      { before: "monde:reine_sait", text: "Elle ignorait tout. Sa figure le dit : elle est tournée vers la vitre, étonnée, un peu impatiente, en femme qu'on dérange à l'instant d'une cérémonie et qui a déjà préparé son reproche." },
      { after: "j:bague_rendue", text: "À sa main levée, l'anneau d'or pâle a tourné, la pierre en dedans. Elle le donnait aux gens dont elle avait besoin. Tu es la seule personne qui le lui ait rendu, et elle l'a au doigt pour soixante ans, trop grand." },
      { after: "monde:reine_renonce", text: "Un coin de papier dépasse de son corsage, avec un peu de cire rouge. *Il sera sur moi. Qu'on le trouve.*" },
      "Tu es à sa hauteur. Ses yeux sont gris. Ils regardent la vitre, par-dessus ton épaule, l'endroit où il y avait une figure.",
    ],
    choices: [{ back: "K15_haute" }] },

  K15j_haute_aelis: { act: "V", title: "Huit ans, dans une note", place: "tour", ambiance: "chateau",
    text: [
      { first: true, text: "Elle est sur la hanche de sa mère, un bras autour du cou, l'autre tendu vers la croisée. Elle a la bouche ouverte sur un mot. Ses pieds nus pendent ; l'un d'eux a le gros orteil relevé." },
      { first: true, if: ECORCE, text: "Elle a les joues roses. Tu regardes ce rose longtemps. C'est le premier, depuis des mois, a dit le médecin ; il venait d'une écorce rousse et d'une grimace." },
      { first: true, if: { not: ECORCE }, text: "Elle est grise jusqu'aux lèvres. C'est un autre gris que celui de la Dormante : plus mat, plus ancien, et qui vient du dedans. La ville arrêtée n'y a rien ajouté. Elle a seulement cessé de l'aggraver." },
      { again: true, text: "L'enfant, sur la hanche de sa mère, le doigt vers la croisée." },
      { after: "j:aelis_parle", text: "Elle a les doigts un peu refermés, à présent, sur quelque chose qui n'y est plus : ton index." },
      "Tu as dans ta chemise, dans un coin de mouchoir, de quoi lui rendre le temps d'une phrase.",
    ],
    choices: [
      { label: "Poser un grain sur le dos de sa main", hide: { has: "j:aelis_parle" }, if: { stock: "sable", min: 1 }, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:aelis_parle", ep: ["perso", 1000] }, to: "K15j_aelis_eveil", big: true },
      { back: "K15_haute" },
    ] },

  K15j_aelis_eveil: { act: "V", title: "« Maman joue ? »", place: "tour", ambiance: "chateau",
    text: [
      "« ...à la fenêtre, maman, il y a... »",
      "Elle s'arrête. La figure qu'elle montrait n'est plus à la vitre. Elle tourne la tête, et te trouve dans la chambre, à deux pas, du mauvais côté du carreau.",
      { after: "j:aelis_vue", text: "« C'est toi. » Elle n'a pas peur : elle a l'habitude que tu arrives par des endroits où l'on n'arrive pas. « Tu es entré{e} par où ? Maman avait fermé. »" },
      { before: "j:aelis_vue", text: "« Tu étais dehors. » Elle n'a pas peur. Elle te considère, gravement, comme on vérifie une addition. « Tu es entré{e} par où ? Maman avait fermé. »" },
      "Elle attend que sa mère réponde à ta place. Elle lève les yeux vers elle. Elle voit le bras levé, la main ouverte, la figure tournée vers la vitre, et que rien de cela ne bouge.",
      "Elle touche la joue de sa mère, du bout du doigt. Puis elle te regarde.",
      "« Maman joue ? »",
    ],
    choices: [
      { label: "« Elle dort debout. Toute la ville dort. Toi aussi, dans un instant. »", fx: { flag: "j:aelis_verite" }, to: "K15j_aelis_fin", big: true },
      { label: "« Elle écoute la cloche. Elle veut l'entendre jusqu'au bout. »", fx: { flag: "j:aelis_douce" }, to: "K15j_aelis_fin", big: true },
    ] },

  K15j_aelis_fin: { act: "V", title: "C'est long, onze", place: "tour", ambiance: "chateau",
    text: [
      { after: "j:aelis_verite", text: "Elle pèse cela. Les enfants malades ont entendu beaucoup de choses dites à mi-voix derrière des portes ; ils reconnaissent tout de suite une chose dite en face. « Longtemps ? — Longtemps. — Plus que la nuit ? — Beaucoup plus. — Et on se réveille ? » Tu dis que tu es là pour cela. Que vous êtes deux." },
      { after: "j:aelis_verite", text: "« Alors je veux bien. » Elle se réinstalle contre le cou de sa mère, avec le sérieux de quelqu'un qui prend ses dispositions. « Je n'aime pas dormir quand je ne sais pas. Quand je sais, ça va. »" },
      { after: "j:aelis_douce", text: "Elle écoute, elle aussi, la tête penchée. « Elle n'a pas fini ? — Pas encore. — C'est long, onze. » Elle fronce le nez. « Je la sens dans mon ventre. Maman avait dit. » Elle pose la main à plat sur sa robe, pour vérifier, et elle a l'air contente d'une chose promise et tenue." },
      { after: "j:aelis_douce", text: "Elle regarde encore sa mère, du coin de l'œil. Elle est dupe à moitié. Elle a huit ans, et elle sait qu'il y a des réponses qu'on vous donne pour clore les questions. Elle te fait la grâce de s'en contenter." },
      "« Et après onze, il y a douze ? » Tu dis qu'on y travaille. « Qui ? — Quelqu'un en sabots, et moi. » Elle trouve cela raisonnable.",
      { if: ECORCE, text: "« J'ai bu ton écorce. C'est la plus mauvaise chose du royaume. » Elle montre ses joues. « Maman dit que je suis rose. Je ne me vois pas. Je suis rose ? » Tu dis que oui. « Alors il en faudra encore. Tant pis. »" },
      "Elle attrape ton index, à pleine main, comme font les très petits. Sa main est chaude. Elle la sent refroidir avant toi : elle regarde ses doigts, étonnée.",
      "« Tu restes ? »",
      "Tu dis oui. Tu le dis à une bouche qui s'est déjà arrêtée sur le *s.*",
      "Tu dégages ton doigt, doucement. Il te faut un moment.",
    ],
    choices: [{ back: "K15j_haute_aelis" }] },

  K15j_haute_lit: { act: "V", title: "Deux souliers", place: "tour", ambiance: "chateau",
    text: [
      "On a monté pour elle un lit de bois blanc, à barreaux, avec un édredon. Il y a encore, dans l'édredon, la place où elle était assise.",
      "Par terre, ses souliers : de satin blanc, à bouffettes, grands comme ta paume. L'un est debout. L'autre est couché, la semelle en l'air, et la semelle est neuve. Elle les avait ôtés pour avoir monté cent marches.",
      { if: ECORCE, text: "Sur le lit, une pendule de voyage, le dos ouvert, et une épingle à cheveux plantée dans le mouvement. Elle comptait les dents d'une roue. Tu te penches. La roue a soixante dents. Elle en était, d'après la place de l'épingle, à quarante et quelques." },
      { if: { not: ECORCE }, text: "Sur le lit, une poupée de chiffon, assise, à qui l'on a mis un mouchoir autour du cou, en écharpe de malade. Elle regarde la cloche, elle aussi, de ses deux yeux cousus." },
      { after: "j:aelis_line", text: "*Dis-lui que j'ai ouvert la mienne toute seule.* Tu avais promis de le dire à une petite fille de neuf ans. Elle est sur un chemin, ou sur un pont. Tu le lui diras dans soixante ans, si elle veut bien t'ouvrir." },
      "Tu redresses le soulier couché. C'est tout ce qu'il y a à faire dans cette chambre, et tu le fais avec soin.",
    ],
    choices: [{ back: "K15_haute" }] },

  K15j_haute_corde: { act: "V", title: "Douze pieds de chanvre", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: CORDE_C }, text: "La corde descend du plafond, lustrée, grosse comme le poignet, et finit à l'anneau de fer scellé dans le dallage, où on l'a nouée d'un nœud de marinier. Elle traverse la chambre d'un seul trait, à trois pas de la Reine. Elle vrille un peu, d'un quart de tour, et garde sa vrille." },
      { if: { not: CORDE_C }, text: "Tu mets la main dessus. Elle est raide, tendue par tout le poids d'une cloche déformée d'un cheveu. Il faudrait la dénouer de son anneau pour s'y pendre. Le nœud est serré depuis ce matin par un homme qui savait ce qu'il nouait." },
      { if: CORDE_C, text: "La corde est par terre. Elle est tombée du plafond en tas, autour de l'anneau de fer où on l'avait nouée : douze pieds de chanvre, lovés comme un serpent qui dort. Le bout d'en haut est taillé net, de biais." },
      { if: CORDE_C, text: "Tu lèves la tête. Par le trou du plafond, on voit le moignon, là-haut, dans la Cage, immobile au bout de son balancement. Entre lui et ce tas, il manque la longueur d'un couteau de sellier." },
      { if: CORDE_C, text: "{autre} s'est accroupi{autre:e} près du tas. {autre:Il} prend le bout coupé, le tâte, défait trois brins entre le pouce et l'index, comme on tâte une étoffe au marché. « C'est du bon chanvre. Ça se reprend. » {autre:Il} n'en dit pas plus. {autre:Il} a l'air de quelqu'un qui a déjà rabouté des longes au bord d'un fossé, la nuit, avec la Garde derrière." },
      "Une enfant t'a demandé si c'était par là qu'on la faisait sonner. Par là, quand on la sonne à la main. *Toi, tu pourrais.*",
    ],
    choices: [{ back: "K15_haute" }] },

  K15r_haute_reine: { act: "V", title: "Au nom de qui l'on jure", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'approches sur tes pieds nus, tes sabots à la main. Tu ne sais pas où les poser. Tu les gardes.",
      "On jure en son nom depuis soixante ans. Tu as vu ce matin une estrade, un coussin, un livre aux pages cornées ; tu as entendu des trompettes s'accorder pour elle. Dans les camps de la lisière, on dit *par la Dormeuse* quand on veut être cru. Tu l'as dit cent fois, pour vendre une montre.",
      "C'est une femme de trente ans, qui a des cernes et une mèche défaite. Elle marchait vers une fenêtre, une enfant sur la hanche. Sa robe a gardé le pas.",
      "Tu cherches à qui elle ressemble. Tu as vu la Régente, hier, dans une orangerie : aucun trait commun. La Régente vient de la famille de l'oncle. Soixante ans de princes ont juré de rendre le royaume à cette femme-ci, et aucun n'avait son nez.",
      { after: "monde:reine_sait", text: "{autre} te dit, tout bas, qu'elle savait. Qu'{autre:il} le lui a dit ce matin, dans cette chambre : une lieue, soixante ans. Tu regardes la figure. C'est celle de quelqu'un qui tient parole à une petite fille pendant que le plafond tombe." },
      { before: "monde:reine_sait", text: "{autre} te dit, tout bas, qu'elle ignorait tout. Tu regardes la figure : étonnée, un peu impatiente. C'est ainsi qu'on a pris tout le monde. Tu as vu cinq mille fois cet étonnement-là, de dos." },
      "Tu remets ta main dans ta poche. Tu allais faire, par habitude, le geste de voir si elle avait une bourse.",
    ],
    choices: [{ back: "K15_haute" }] },

  K15r_haute_aelis: { act: "V", title: "La langueur grise", place: "tour", ambiance: "chateau",
    text: [
      { first: true, text: "L'enfant a huit ans, des pieds nus, une robe de cérémonie trop lourde pour elle. Elle montre la vitre." },
      { first: true, if: ECORCE, text: "Elle a les joues roses. Tu connais ce rose-là, de dessous : il est encore d'emprunt. C'est le rose des trois premières prises, quand l'écorce chasse le gris du sang sans l'avoir encore délogé des os. À Roquebise, les mères le guettent, et disent aux voisines : *elle a pris couleur*, sans crier victoire." },
      { first: true, if: { not: ECORCE }, text: "Elle est grise jusqu'aux lèvres, d'un gris mat, ancien, qui vient du dedans. Tu le reconnais avant d'avoir cherché : on a cela, chez toi, les hivers mouillés. Les petits surtout. On l'appelle le mal de cave." },
      { first: true, text: "C'est donc pour cela. Une reine a signé, un sous-maître a calculé, une ville de quarante mille âmes s'est arrêtée la bouche ouverte, et toi tu as grandi dans des fossés à ramasser ce qui en suintait : pour une fièvre d'enfant qu'une apothicaire de Roquebise soigne en dix-neuf jours, avec une écorce qu'elle vend au poids, entre les sangsues et le miel rosat." },
      { first: true, text: "Tu en as eu, à sept ans. Tu as craché la tisane. On t'a tenu{e} par le nez." },
      { again: true, text: "L'enfant de huit ans, sur la hanche de sa mère." },
      { after: "monde:aelis_remede", text: "Elle a dans sa main fermée, contre le cou de sa mère, une fiole de grès bouchée de cire. Sur le mur, derrière le lit, en bâtons, au charbon : *UNE PAR JOUR. DIX-HUIT.*" },
      { if: { all: [{ not: { item: "decoction_fievrier" } }, { not: { has: "monde:aelis_remede" } }] }, text: "Tu n'en as pas sur toi. Tu regardes tes mains vides, qui ont porté jusqu'ici un livre de dix livres, un sablier et de quoi crocheter une reine, et rien de ce qu'il fallait." },
    ],
    choices: [
      { label: "Déboucher la décoction du médecin, et poser un grain sur sa main", hide: { any: [{ not: { item: "decoction_fievrier" } }, { has: "monde:aelis_remede" }] }, if: { stock: "sable", min: 1 }, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:aelis_remede", ep: ["histoire", 1200] }, to: "K15r_aelis_dose", big: true },
      { back: "K15_haute" },
    ] },

  K15r_aelis_dose: { act: "V", title: "Ce que les autres ont laissé", place: "tour", ambiance: "chateau",
    text: [
      "Tu tires de ta chemise la fiole de grès que t'a remise un médecin de 541, éveillé le temps d'une ordonnance, dans un pavillon du Palais. Dix-neuf prises. Tu fais sauter la cire de l'ongle. Cela sent l'écorce, le fer, et quelque chose d'amer qui te serre la gorge de souvenir.",
      "Tu poses un grain sur le dos de la petite main.",
      "« ...à la fenêtre, maman, il y a... » Elle s'arrête. Elle te voit : des pieds nus, des sabots à la main, du charbon jusqu'aux coudes. Elle te considère sans peur, avec un intérêt d'enfant qui a peu de visites.",
      "« Tu es pauvre ? — Je suis de la glane. — C'est quoi ? — Quelqu'un qui ramasse ce que les autres ont laissé. » Elle regarde sa mère, arrêtée, le bras en l'air. Elle regarde la chambre, où rien ne bouge. Elle comprend plus vite qu'on ne voudrait. « Alors tu me ramasses. »",
      "Tu ne trouves rien à répondre. Tu lui présentes la fiole. « Une gorgée. Pas deux. »",
      { if: ECORCE, text: "Elle flaire, et recule. « Encore ! J'en ai bu ce matin. C'est la plus mauvaise chose du royaume. » Elle boit pourtant, en se bouchant le nez elle-même, d'un geste qu'elle a déjà. Elle fait la grimace. Tu la connais, cette grimace : tu l'as faite." },
      { if: { not: ECORCE }, text: "Elle flaire, et recule. « Ça sent la cave. — Ça chasse la cave. J'en ai bu à ton âge. On m'a tenu{e} par le nez. » Cela la décide : elle ne veut pas qu'on la tienne. Elle boit, toute seule, et fait une grimace à décrocher les araignées." },
      "« Il en reste ? — Dix-huit. Une par jour. » Tu lui mets la fiole dans la main, et tu lui fermes les doigts dessus. « Tu la gardes. Quand tu te réveilleras pour de bon, tu diras à qui sera là : une par jour, dix-huit. Tu sauras ? » Elle hausse les épaules, vexée. Elle sait compter jusqu'à soixante : elle l'a fait ce matin sur une roue.",
      "Le gris lui reprend les doigts. Elle les regarde. « C'est le sommeil de maman ? — Oui. — Il ne fait pas mal. » Elle se réinstalle contre le cou, la fiole au poing. « Tu ramasses bien », dit-elle. Elle a la bouche sur le *n.*",
      "Tu vas au mur, derrière le lit blanc. Tu tailles ton charbon. Tu écris, en bâtons, gros, pour qui entrera : *UNE PAR JOUR. DIX-HUIT.*",
    ],
    choices: [{ back: "K15r_haute_aelis" }] },

  K15r_haute_papier: { act: "V", title: "Elle appuie de travers", place: "tour", ambiance: "chateau",
    text: [
      "Un coin de papier dépasse de son corsage, avec un peu de cire rouge. Tu ne le tires pas. Tu te penches.",
      "Tu lis mal l'écriture couchée. Tu lis très bien les cires : tu en as revendu. Celle-ci porte un écu, une couronne, et elle est écrasée à gauche, d'un pouce qui appuyait de travers.",
      { if: { item: "ordonnance_garde" }, text: "Tu as la même dans ta chemise, au bas d'une ordonnance qui donnait un escalier à la garde blanche. Un capitaine de 541 l'a reconnue ce matin au toucher. *Elle appuie de travers, à gauche.* Tu les compares, de mémoire. C'est le même pouce." },
      { if: { not: { item: "ordonnance_garde" } }, text: "Tu as vu ce pouce-là sur une feuille, au Palais, dans une chambre où dormait un Conseil. C'est le sien." },
      "{autre} te dit ce qu'il y a dessus. Elle avait dit non. La veille, par écrit, devant son confesseur. On l'a prise quand même, et elle a voulu que le papier fût sur elle pour qu'on le trouve.",
      "Soixante Serments. Soixante fois, un prince est monté sur une estrade jurer qu'on réparerait ce qu'avait voulu la Reine. La preuve du contraire était à trois cent soixante marches au-dessus de sa tête, dans un corsage, et personne n'a monté.",
    ],
    choices: [{ back: "K15_haute" }] },

  K15r_haute_baies: { act: "V", title: "Une lieue, d'un coup d'œil", place: "tour", ambiance: "chateau",
    text: [
      "Tu fais le tour des huit baies. Chacune est une tranche de pays, coupée par des plombs.",
      "Au couchant, la place, la ville basse, le bassin, les peupliers. Au nord, des jardins, une orangerie, un mur que tu as longé de nuit dans une odeur de sureau. Au levant, une colline, quatre logis, un cadran solaire : tu y as campé, au milieu de pupitres. Au midi, des toits de couvent, et plus loin une église basse, vieille, dont tu sais le dallage par cœur, avec son étoile de cuivre.",
      "C'est la première ville : le cercle de 541. Tu l'as traversée en deux jours, grain à grain, la peur au ventre. D'ici, elle tient dans huit fenêtres. On en ferait le tour avec le pouce.",
      "Au-delà, il y a ce que la Dormante a mangé depuis, année après année, et qui est ici du blé, des fermes, des gens qui dînent. L'abbaye. Arvoise et son pont. Roquebise sur sa butte. Tu cherches Roquebise. C'est trop loin ; il y a une brume de chaleur. Tu sais seulement de quel côté.",
      "De ce côté-là, dans cinquante-quatre ans, une petite de cinq ans se retournera au milieu d'une rue.",
    ],
    choices: [{ back: "K15_haute" }] },

  // ---------- the Cage, for two ----------
  K15j_cage_deux: { act: "V", title: "Ce que chantaient les Veilleurs", place: "tour", ambiance: "chateau",
    text: [
      "Vous montez les vingt échelons de frêne. {autre} passe la trappe, se redresse, et reste la tête levée, sans un mot, sous douze pieds de bronze.",
      "Tu attends. Tu sais ce que cela fait, la première fois.",
      "« C'est ça. » {autre:Il} parle bas, comme on fait sous une voûte. « C'est ça qu'ils chantent. Les Veilleurs. Ils ont une note, à l'abbaye, qu'ils se passent depuis toujours, bouche fermée. Je croyais que c'était une prière. C'est elle. » {autre:Il} lève la main vers la lèvre de la cloche, et ne la touche pas. « Ils la gardent juste. Soixante ans sans l'entendre, et ils la gardent juste. »",
      "Tu lui montres le marteau, contre le bronze, et le fil qui en descend. Tu lui montres la place claire, sur la lèvre. Tu dis : onze. Tu dis ce que fait un mur de bruit quand on est dedans.",
      { if: { has: "monde:nom_cage" }, text: "Tu lui montres le banc. {autre:Il} s'accroupit devant le dossier. {autre:Il} suit les lettres du doigt, une à une, en remuant les lèvres ; tu les avais faites droites, sans fioriture, et {autre:il} les lit tout{autre:e} seul{autre:e}. {autre:Il} dit ton nom. Puis {autre:il} met le doigt sur l'oreille ouverte, dessous, et {autre:il} te regarde." },
      { if: { not: CORDE_C }, text: "Tu lui montres la corde, entière, qui s'en va par le trou du plancher. « C'est par là qu'on rend le coup ? » Par là, ou par le marteau. {autre:Il} tâte le chanvre, en connaisseur. « Ça tient. »" },
      { if: CORDE_C, text: "Tu lui montres le moignon, là-haut, hors de portée. {autre:Il} ne dit rien. {autre:Il} regarde le banc, puis la poutre, puis toi ; {autre:il} fait des mesures de glaneur, à l'œil, les lèvres serrées." },
    ],
    choices: [{ back: "K15_galerie" }] },

  K15r_cage_deux: { act: "V", title: "Sous la Patiente", place: "tour", ambiance: "chateau", fx: { flag: "r:vu_cage" },
    text: [
      "Vous montez vingt échelons de frêne. Tu passes la trappe, tu te redresses, et tu restes la tête levée.",
      "Elle est au-dessus de toi. Elle emplit tout : une nuit de bronze, verte et noire, pendue à des poutres plus grosses que des arbres. Elle a, sur la lèvre, une place claire, large comme une assiette, et contre cette place un marteau à tête d'enclume, appuyé, entré d'une ligne.",
      "La note vient de là. Tu la reconnais, à présent que tu es dessous. C'est celle que les Veilleurs se passent à l'abbaye, bouche fermée, depuis toujours ; tu croyais que c'était une prière. Ils l'ont gardée juste. Soixante ans sans l'entendre, et ils l'ont gardée juste.",
      "{autre} te montre le fil, le déclic, la trappe. {autre:Il} dit : onze. {autre:Il} dit que c'est un mur, quand on est dedans, et qu'on crie sans s'entendre. {autre:Il} était ici, sans cire, les oreilles nues, parce qu'il fallait que quelqu'un y fût.",
      "Tu regardes le plancher, au milieu, sous la bouche de bronze. Il y a dans la poussière la marque de quelqu'un qui s'est assis, puis levé.",
    ],
    choices: [
      { label: "Le banc, où il y a des noms", hide: { seen: "K15r_cage_nom" }, fx: { flag: "r:lu_nom_cage", ep: ["perso", 600] }, to: "K15r_cage_nom" },
      { label: "Le bout de corde, au-dessus de vos têtes", hide: { any: [{ not: CORDE_C }, { seen: "K15r_cage_corde" }] }, fx: { flag: "r:corde_vue", ep: ["histoire", 600] }, to: "K15r_cage_corde" },
      { back: "K15_galerie" },
    ] },

  K15r_cage_nom: { act: "V", title: "En lettres droites", place: "tour", ambiance: "chateau",
    text: [
      "C'est un banc de chêne, noir d'usage. Le dossier est couvert de noms, taillés au couteau, l'un sous l'autre, avec des dates. Quarante sonneurs. Tu lis mal l'écriture couchée ; ceux-là ont gravé comme ils pouvaient, en capitales, et tu les suis du doigt.",
      "Le dernier des anciens : *THIBAUT, 481.* Dessous, deux oreilles, avec une croix sur chacune. {autre} te dit ce que cela veut dire. De la cire. Un homme resté debout pendant que la ville s'arrêtait trois psaumes, et qui est remonté rendre le coup.",
      { if: { has: "monde:nom_cage" }, text: "Et sous Thibaut, tout frais, la sciure encore en l'air devant le bois : un nom, en lettres droites, sans date. Tu le déchiffres seul{e}. C'est celui de {autre}. Tu le dis tout haut, pour l'avoir lu." },
      { if: { has: "monde:nom_cage" }, text: "Dessous, une oreille. Une seule, ouverte, sans croix. Tu mets le doigt dessus. Tu comprends sans qu'on te l'épelle : celui-ci a entendu. Tu regardes {autre}, qui regarde ses pieds." },
      { if: { not: { has: "monde:nom_cage" } }, text: "Après Thibaut, le bois est nu. {autre} avait un couteau, et le temps. {autre:Il} a laissé la place vide. Tu gardes ta question. Il y a des gens qui signent, et des gens qui font." },
      "Tu as ton charbon. Tu pourrais ajouter le tien, en bâtons. Tu regardes ce banc, où quarante hommes se sont assis pour attendre l'heure de faire du bruit, et tu remets le charbon dans ta poche. Ta place est en bas.",
    ],
    choices: [{ back: "K15r_cage_deux" }] },

  K15r_cage_corde: { act: "V", title: "Du bon chanvre", place: "tour", ambiance: "chateau",
    text: [
      "La corde pend du joug sur trois coudées, et finit. Le bout est net, taillé de biais. Tu as vu trois brins de ce chanvre-là sur un couteau de sellier, dans la vis, au bout du bras d'un garçon blond.",
      "Tu mesures. Tu sais mesurer une chose qu'on ne peut pas toucher : c'est la moitié du métier. Du plancher au moignon, le bras levé, il manque deux coudées. Avec le banc dessous, une. Et le reste de la corde est en bas, dans la chambre, en tas autour d'un anneau : douze pieds.",
      "Du chanvre à trois torons, commis serré. Cela se reprend. Tu as rabouté des longes au bord d'un fossé, la nuit, avec la Garde derrière ; une épissure courte, les torons décommis sur un empan, mariés, repassés deux fois. Il y faut des doigts et de la salive. Tu as les deux.",
      "Il faudrait remonter les douze pieds par le trou du plancher. Il faudrait le banc. Il faudrait que {autre} te fasse la courte échelle, ou toi à {autre:lui}.",
      "Tu ne dis rien encore. Tu comptes ce que cela prendrait de grains.",
    ],
    choices: [{ back: "K15r_cage_deux" }] },
});

module.exports = { passages: P, extras: {} };
