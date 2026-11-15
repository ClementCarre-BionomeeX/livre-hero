// Lot iv2 of "Le Trésor des Taiseurs" (Act IV): the Council of Counters in a crisis session, the provost Haumont
// Delisle's secret bargain with the duke's envoy Amaury de Sauveterre (mystery S: unmasked by ciphered letters, the
// horn, a frightened secretary, wine, a night tailing; foiled by the Council, the envoy, the street or the Bank),
// lifting the warrant on the hero, the factions, three side quests (the secretary, Fourcaud's grain, the tribune's
// son) and four treasures (Aveline's gifts, the provost's secret cabinet, the old seal of the Republic).

var P = {}, V = {}, C = {}, PEOPLE = {}, ITEMS = {}, ENEMIES = {}, QUESTS = [];
var S = "salveze";

// The ways of knowing what the provost sells (mystery S): two are enough to see it whole. The last four were heard
// or seen in earlier lots (Haquin's words and the duke's letter at the Combes, the provost's livery on the Saint-Vrain bridge, the
// provost at the Bank's ball, the order for the Amont gate).
var PREUVES = [{ voile: "ivc_e_prevot_nuit" }, { has: "ivc:p_cornet" }, { has: "ivc:p_lettre" }, { has: "ivc:p_firmin" }, { has: "ivc:p_vin" }, { has: "ivc:p_filature" }, { has: "ivc:p_cabinet" },
  { has: "iiic:complice" }, { has: "iiid:livree_prevot" }, { has: "ivb:prevot_entendu" }, { has: "iv:cles_amont" }];
var DEMASQUABLE = { count: PREUVES, min: 2 };
// What can be read aloud in the Council: papers and a witness.
var PIECES = [{ item: "ivc_lettre_claire" }, { item: "ivc_traite" }, { has: "firmin:sauve" }, { has: "ivc:amaury_temoin" }];
// The warrant still runs.
var RECHERCHE = { all: [{ has: "mandat" }, { not: { has: "mandat:leve" } }] };

// ==================================================================== the session (hub of the lot)
Object.assign(P, {
  IVC_seance: { act: "IV", title: "Le Conseil des Comptoirs", place: S, hub: true, backName: "la galerie du Conseil",
    text: [
      { first: true, text: "La grande salle du Conseil est pleine jusqu'aux tribunes. Quarante bancs de chêne en fer à cheval, un par maison de commerce, chacun marqué d'un écusson peint : la tour d'argent des Delisle, les trois besants des Marrel, la gerbe verte des Fourcaud, la navette des Vernier. Au fond, sur une estrade de trois marches, le fauteuil du prévôt, à dossier haut, et derrière lui une tapisserie usée où l'on devine encore une reine à demi effacée, qu'on a recouverte d'un écu de la République il y a longtemps, en cousant par-dessus." },
      { first: true, text: "Tu es monté{e} par l'escalier des tribunes publiques, avec les clercs, les commis et les curieux. On se serre sur les gradins. Il fait chaud, il sent la laine mouillée et la chandelle. Dehors, à travers les hautes fenêtres, monte par vagues la rumeur de la place, où la foule attend le pain qu'on lui a promis hier." },
      { first: true, text: "Un huissier frappe trois coups de sa canne d'ébène. « Séance de crise, crie-t-il. La dette de la République envers Monseigneur le duc d'Aveline. Le terme de la Saint-Jean. L'ordre dans les rues. » Le prévôt Haumont Delisle se lève. C'est un vieil homme maigre, le crâne nu, la robe de velours noir fermée jusqu'au menton, et il attend que le silence se fasse avec la patience de quelqu'un qui l'a toujours obtenu." },
      { first: true, if: RECHERCHE, text: "Tu gardes ton capuchon rabattu. Ton nom est affiché au portail, avec ceux des voleurs de chevaux et des faux-monnayeurs, et un sergent du Guet se tient au pied de l'escalier des tribunes, le dos au mur, les yeux sur les visages." },
      { first: true, with: "fauvette", text: "Fauvette s'est glissée sur le gradin derrière toi et compte les bourses du premier rang, des yeux seulement, par habitude. « Quarante maisons, souffle-t-elle, et pas une qui paierait pour la ville. »" },
      { again: true, before: "ivc:seance", text: "Les bancs, les tribunes, la chaleur, la rumeur de la place derrière les vitres. La séance continue, et le prévôt laisse parler tout le monde avant de répondre." },
      { again: true, when: "day", if: { all: [{ has: "ivc:seance" }, { not: { has: "prevot:dejoue" } }] }, text: "La galerie des pas perdus, devant la grande salle. Des clercs passent avec des liasses sous le bras, les huissiers somnolent sur leurs cannes, et des conseillers parlent bas dans les embrasures. Par les fenêtres, on entend la place." },
      { again: true, when: "night", if: { all: [{ has: "ivc:seance" }, { not: { has: "prevot:dejoue" } }] }, text: "La galerie du Conseil, la nuit. Une seule lanterne au bout, près du poste des huissiers. Les portes de la grande salle sont fermées à double tour. Au loin, quelque part vers les ponts, une patrouille du Guet crie l'heure du couvre-feu." },
      { again: true, after: "prevot:dejoue", text: "La galerie du Conseil a changé d'air. On y parle plus fort. Les huissiers ont décroché du mur le portrait du prévôt, et il reste à sa place un rectangle de pierre plus claire, que tout le monde regarde en passant." },
      { after: "ivc:dette_corisande", text: "Une voiture noire, sans armoiries, passe parfois sur la place quand tu y es, au pas, sans s'arrêter. Tu dois quelque chose à la Banque Marrel, et la Banque le sait." },
      { after: "gilet:verite", when: "day", text: "Aux fontaines, les laveuses se taisent quand passe un homme en livrée grise, et le regardent jusqu'au bout de la rue." },
      { after: "ivv:sable", text: "Au pied de l'estrade du prévôt, sur les dalles, quelqu'un a posé un sac au cercle blanc, crevé, d'où coule un ruisseau de sable gris. Les huissiers l'ont laissé là. Les conseillers l'enjambent pour gagner leurs bancs." },
      { after: "tribun:fils_perdu", text: "Au banc des Hautes-Eaux, le tribun parle désormais assis, les mains à plat sur la table." },
      { after: "ivc:seance", before: "prevot:demasque", text: "Le prévôt, à chaque séance, dit qu'il défendra la ville. Tu as maintenant des raisons d'écouter ce qu'il dit en dessous." },
    ],
    choices: [
      { label: "Écouter le tribun des Hautes-Eaux, debout au bout des bancs", hide: { any: [{ seen: "IVC_levee" }, { seen: "IVC_s_tribun" }] }, to: "IVC_s_tribun" },
      { label: "Écouter Maître Fourcaud, qui demande la parole", hide: { any: [{ seen: "IVC_levee" }, { seen: "IVC_s_fourcaud" }] }, to: "IVC_s_fourcaud" },
      { label: "Écouter Dame Vernier, au banc de la navette", hide: { any: [{ seen: "IVC_levee" }, { seen: "IVC_s_vernier" }] }, to: "IVC_s_vernier" },
      { label: "Écouter Corisande Marrel, qui se lève sans qu'on l'appelle", hide: { any: [{ seen: "IVC_levee" }, { seen: "IVC_s_corisande" }] }, to: "IVC_s_corisande" },
      { label: "Écouter l'envoyé d'Aveline lire la lettre du duc", hide: { any: [{ seen: "IVC_levee" }, { seen: "IVC_s_amaury" }] }, to: "IVC_s_amaury" },
      { label: "Écouter le prévôt répondre à l'envoyé", hide: { any: [{ seen: "IVC_levee" }, { seen: "IVC_s_prevot" }, { not: { seen: "IVC_s_amaury" } }] }, to: "IVC_s_prevot" },
      { label: "Attendre que le prévôt lève la séance", big: true, hide: { seen: "IVC_levee" }, to: "IVC_levee" },
      { label: "La chancellerie du Conseil, où l'on copie les lettres", hide: { not: { seen: "IVC_levee" } }, to: "IVC_greffe" },
      { label: "Le greffe criminel, où dort ton mandat", hide: { any: [{ not: { seen: "IVC_levee" } }, { not: { has: "mandat" } }, { has: "mandat:leve" }] }, to: "IVC_mandat" },
      { label: "Chercher le secrétaire du prévôt, celui qui tremblait", hide: { any: [{ not: { seen: "IVC_levee" } }, { seen: "IVC_firmin" }] }, to: "IVC_firmin" },
      { label: "Demander audience au prévôt", hide: { any: [{ not: { seen: "IVC_levee" } }, { seen: "IVC_audience" }, { has: "prevot:dejoue" }] }, to: "IVC_audience" },
      { label: "L'hôtel du Cygne, où loge l'envoyé d'Aveline", hide: { not: { seen: "IVC_levee" } }, to: "IVC_ambassade" },
      { label: "L'hôtel Delisle, la maison du prévôt", hide: { any: [{ not: { seen: "IVC_levee" } }, { seen: "IVC_cabinet" }] }, to: "IVC_hotel" },
      { label: "Guetter la sortie du prévôt, à la nuit tombée, et le suivre", hide: { any: [{ not: { seen: "IVC_levee" } }, { has: "ivc:p_filature" }, { has: "prevot:dejoue" }] }, to: "IVC_filature" },
      { label: "Le comptoir Vernier, rue des Navettes", hide: { not: { seen: "IVC_levee" } }, to: "IVC_vernier" },
      { label: "Le comptoir Fourcaud, sur le quai aux Grains", hide: { not: { seen: "IVC_levee" } }, to: "IVC_fourcaud" },
      { label: "La Grenouille, la taverne où boit le tribun", hide: { not: { seen: "IVC_levee" } }, to: "IVC_tribun" },
      { label: "Le lavoir des Tanneurs, où travaille la sœur du valet noyé", hide: { any: [{ not: { seen: "IVC_firmin_parle" } }, { seen: "IVC_gilet" }] }, to: "IVC_gilet" },
      { label: "Rester dans la grande salle quand tout le monde est parti", hide: { any: [{ not: { seen: "IVC_levee" } }, { seen: "IVC_salle_nuit" }] }, to: "IVC_salle_nuit" },
      { label: "Rassembler ce que tu sais du prévôt", big: true, hide: { any: [{ has: "prevot:demasque" }, { not: DEMASQUABLE }] }, to: "IVC_demasque" },
      { label: "Décider comment abattre le prévôt", big: true, hide: { any: [{ not: { has: "prevot:demasque" } }, { has: "prevot:dejoue" }] }, to: "IVC_dejouer" },
      { label: "Voir le prévôt dans sa cellule", hide: { any: [{ not: { is: { ivc_chute: "cellule" } } }, { seen: "IVC_cellule" }] }, to: "IVC_cellule" },
      { label: "Ressortir sur la place, dans la ville en armes", back: "IV_hub" },
    ] },

  IVC_s_tribun: { act: "IV", title: "Le tribun des Hautes-Eaux", place: S, fx: { meet: "ivc_vimeux" },
    text: [
      "Au bout du fer à cheval, il y a un banc sans écusson, plus bas que les autres : celui des Hautes-Eaux, qui ont une voix au Conseil depuis la grande crue et aucun vote. L'homme qui s'y lève est large, tanné, les avant-bras couverts de vieilles brûlures de sel. Achille Vimeux, saunier de Grisemotte, tribun des marais. Il parle sans notes, d'une voix faite pour porter d'un bassin à l'autre.",
      "« Messieurs les Comptoirs, vous avez fermé les greniers pour faire monter le blé, et vous fermez les ponts pour que la faim reste de l'autre côté. Les Hautes-Eaux {{oreille|prieront pour la République, comme toujours|ouvriront les vannes de la Salve et noieront vos entrepôts du bas, si un enfant de plus meurt aux Joncs}}. » Une rumeur court sur les bancs. Quelqu'un rit.",
      "Il attend que le rire passe. « {{oreille#ivc_v_tribun_fils|Je parle pour tous les marais, et pour personne d'autre|Je parle pour mon fils Galmier, que le Guet a pris aux émeutes de mardi et qu'on garde à la Barbacane sans jugement}}. » Il se rassied. Ses mains tremblent sur ses genoux, et il les cache sous la table.",
      { after: "joncs:brules", text: "Sur la manche du tribun, un brassard de toile noire. Les Joncs-Bas ont brûlé, et toute la ville le sait." },
      { with: "lison", text: "Lison s'est penchée en avant, les coudes sur les genoux. « Vimeux ne bluffe pas sur les vannes, dit-elle tout bas. Mon grand-père les a ouvertes une fois, l'année de la crue. »" },
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_s_fourcaud: { act: "IV", title: "Maître Fourcaud", place: S, fx: { meet: "ivc_fourcaud" },
    text: [
      "Maître Fourcaud se lève au banc de la gerbe verte : un homme rond, rose, aux mains baguées, qui parle toujours en souriant, comme s'il s'excusait d'avoir raison. Sa maison tient le commerce du grain depuis quatre générations.",
      "« On m'accuse d'affamer la ville, dit-il, et je le prends avec patience, parce que la faim rend injuste. Mais je vous le dis devant Dieu et devant le prévôt : ma maison {{oreille#ivc_v_grain|n'a plus un sac de grain dans ses greniers depuis la Chandeleur|garde du blé derrière un mur neuf, et attend que le prix double}}. »",
      "Il ouvre les mains, paumes en l'air. « Que le duc soit payé, et les bateaux du nord reviendront. Je {{oreille|voterai tout impôt qui sauvera la ville|voterai ce que le prévôt me dira de voter, puisqu'il me paie mieux que la ville}}. » Il se rassied en tapotant son ventre, et le banc des Delisle hoche la tête avec lui.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_s_vernier: { act: "IV", title: "Dame Vernier", place: S, fx: { meet: "ivc_vernier" },
    text: [
      "Au banc de la navette, une femme d'une soixantaine d'années se lève en s'appuyant sur une canne à pommeau d'ivoire. Dame Vernier, veuve, qui a pris la maison de drap de son mari à sa mort et l'a doublée en dix ans. Elle porte le deuil depuis si longtemps qu'on ne sait plus de qui.",
      "« J'ai voté avec le prévôt pendant douze ans, dit-elle d'une voix sèche. {{oreille|Je voterai encore avec lui, comme toujours|Je voterai avec lui tant que je ne saurai pas ce qu'il fait la nuit chez l'envoyé}}. Je demande seulement qu'on nous dise où en sont les pourparlers avec Aveline. On nous en parle à chaque séance, et on ne nous montre jamais une lettre. »",
      "Elle se tourne vers les tribunes, un instant, comme pour prendre la ville à témoin. « Je {{oreille#ivc_v_vernier_dette|ne dois rien à personne dans cette ville, et j'en suis fière|dois à une vieille brocanteuse du quai d'avoir retrouvé l'anneau de ma fille morte, et je ne l'ai jamais payée de ce que ça valait}}. Qu'on ne vienne pas me parler de loyauté. » Elle se rassied.",
      { if: { has: "metier:parole" }, text: "Tu connais ce genre de voix. Odeline disait que les veuves riches parlent sec pour qu'on ne les entende pas pleurer." },
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_s_corisande: { act: "IV", title: "La Banque se lève", place: S, fx: { meet: "corisande" },
    text: [
      "Corisande Marrel n'attend pas qu'on lui donne la parole. Elle se lève au banc des trois besants, petite, droite, les cheveux blancs tirés sous une coiffe de dentelle noire, et la salle se tait plus vite que pour le prévôt. Derrière elle, appuyé à une colonne, un homme en gants gris regarde les tribunes.",
      "« La Banque Marrel porte la dette de la République depuis dix ans, dit-elle. La Banque {{oreille|tiendra ses engagements jusqu'au dernier liard|tombera avec la ville si la ville tombe, et je n'ai pas l'intention de tomber}}. Je demande au prévôt de dire au Conseil, ici, ce que l'envoyé d'Aveline accepterait en gage. »",
      "Le prévôt sourit et dit qu'on en parlera en comité. Corisande se rassied sans le quitter des yeux. « {{oreille#ivc_v_corisande|Le prévôt a toute la confiance de ma maison|Le prévôt soupe trois fois la semaine chez l'envoyé, et je fais compter les plats}}, dit-elle encore, assez fort pour les premiers bancs. »",
      { if: { any: [{ has: "lothaire:vaincu" }, { has: "lothaire:mort" }] }, text: "L'homme aux gants gris est un remplaçant de Lothaire, plus jeune, qui porte les mêmes gants et regarde de la même façon, avec moins de patience.", else: "L'homme aux gants gris, c'est Lothaire Brunel. Il garde les yeux sur le parquet, la tête un peu penchée, comme on écoute de la musique dans une autre pièce." },
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_s_amaury: { act: "IV", title: "La lettre du duc", place: S, fx: { meet: "amaury" },
    text: [
      "Dans la tribune des ambassadeurs, à droite de l'estrade, un homme se lève : trente-cinq ou quarante ans, les cheveux mi-longs, rasé de près, un pourpoint bleu d'Aveline brodé d'un cygne d'argent. Amaury de Sauveterre déplie une lettre scellée de cire bleue et la lit sans hausser la voix. Il a une belle diction, et l'air de trouver la lettre un peu longue.",
      "*« Monseigneur le duc d'Aveline, à ses chers voisins du Conseil des Comptoirs. Quatre millions de ducats sont dus à la Saint-Jean. Passé ce terme, Monseigneur reprendra en gage ce qui lui revient. »*",
      "Il replie la lettre. « Monseigneur {{oreille#ivc_v_amaury_ville|souhaite la paix entre nos deux peuples, et l'a toujours souhaitée|a déjà la ville dans sa poche, et attend seulement qu'on lui ouvre la porte de l'intérieur}}. Je reste à la disposition du Conseil. {{oreille|Je n'ai d'autre mission ici que cette lettre|J'ai une seconde lettre, pour un seul homme de cette salle, et elle est déjà remise}}. »",
      "Il se rassied et croise les jambes. Sur l'estrade, le prévôt n'a pas regardé l'envoyé une seule fois pendant la lecture.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_s_prevot: { act: "IV", title: "La réponse du prévôt", place: S,
    text: [
      "Le prévôt Delisle descend une marche de son estrade, une seule, et s'adresse au Conseil plutôt qu'à l'envoyé. Sa voix est douce, un peu voilée par l'âge. On l'écoute en se penchant.",
      "« Salvèze n'a pas plié devant la mer, dit-il. Elle ne pliera pas devant un créancier. Je vous le jure sur ce fauteuil : {{oreille#ivc_v_gouverneur|tant que je serai prévôt, la ville gardera ses portes|quand je ne serai plus prévôt, je serai gouverneur, et la ville sera mieux gardée}}. »",
      "Des bancs applaudissent. Il lève la main pour les arrêter. « Quant à ces rumeurs de trésor, ce Registre de la Muette que les brocanteurs cherchent dans les égouts, {{oreille#ivc_v_registre|c'est une fable de quai, qui n'intéresse pas le Conseil|c'est la seule pièce que Monseigneur m'a demandée en propre, et je la lui porterai moi-même}}. Nous paierons le duc avec de l'or, messieurs, pas avec des contes. »",
      { if: { has: "taiseurs:serment" }, text: "Tu entends sa phrase deux fois, la dite et l'autre, et tu sens sous ta langue le goût du serment des Joncs. Les Taiseurs ont un mot pour les hommes comme lui : ceux qui parlent double pour vendre." },
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_levee: { act: "IV", title: "La séance levée", place: S, fx: { meet: ["ivc_dessart", "delisle"] },
    fx: { flag: "ivc:seance", ep: ["seance", 1200] },
    text: [
      "Le prévôt lève la séance sans vote. « En comité demain », dit-il, et l'huissier frappe ses trois coups. Les conseillers se lèvent dans un grand bruit de bancs. Dehors, la rumeur de la place monte d'un ton : la foule a compris qu'il n'y aurait pas de pain aujourd'hui.",
      "Tu vois le prévôt quitter l'estrade par une petite porte basse, derrière la tapisserie. Une minute plus tard, l'envoyé d'Aveline quitte sa tribune par l'escalier opposé, sans hâte, et prend le même couloir.",
      "Derrière le prévôt, un jeune homme en robe de clerc ramasse les papiers sur l'estrade. Il est maigre et pâle, et ses mains tremblent si fort qu'il en lâche une liasse ; les feuilles glissent jusqu'au pied des marches. Il les rassemble à genoux, très vite, en regardant la petite porte. Un huissier te dit son nom sans que tu le demandes : Léonce Dessart, le secrétaire du prévôt. « Il ne dort plus, dit l'huissier. Ça se voit, hein ? »",
      "Sur la place, une vitre éclate. Quelqu'un crie le nom du prévôt, suivi d'une injure.",
    ],
    choices: [
      { label: "Descendre sur la place, où la foule gronde", to: "IVC_emeute" },
      { back: "IVC_seance" },
    ] },
});

Object.assign(V, {
  ivc_v_gouverneur: { fx: { flag: "ivc:p_cornet", clue: "ivc_c_gouverneur", ep: ["perso", 400] } },
  ivc_v_registre: { fx: { clue: "ivc_c_registre", ep: ["perso", 300] } },
  ivc_v_tribun_fils: { fx: { questSeen: "IVC_q_fils" } },
  ivc_v_grain: { fx: { ep: ["perso", 200] } },
  ivc_v_corisande: { fx: { clue: "ivc_c_soupers" } },
  ivc_v_amaury_ville: { fx: { ep: ["perso", 200] } },
  ivc_v_vernier_dette: { fx: { ep: ["perso", 200] } },
});
Object.assign(C, {
  ivc_c_gouverneur: { rev: "S", text: "Au Conseil, sous ses mots, le prévôt Delisle : « Quand je ne serai plus prévôt, je serai gouverneur. »" },
  ivc_c_registre: { rev: "S", text: "Le prévôt Delisle, sous ses mots : le Registre de la Muette est « la seule pièce que Monseigneur m'a demandée en propre ». Il compte le porter lui-même au duc d'Aveline." },
  ivc_c_soupers: { rev: "S", text: "Corisande Marrel, au Conseil : le prévôt soupe trois fois la semaine chez l'envoyé d'Aveline, et la Banque fait compter les plats." },
});

// ==================================================================== the riot on the square, the hall at night
Object.assign(P, {
  IVC_emeute: { act: "IV", title: "La place en colère", place: S,
    text: [
      "La place est noire de monde. Des femmes des Gouttières avec des paniers vides, des débardeurs sans travail depuis que les gabares du nord ne viennent plus, des sauniers en sabots montés des marais. Au milieu, renversée, une charrette du Conseil : elle devait apporter du pain, elle n'apportait que des sacs de son. Le son est répandu sur les pavés, et des enfants le ramassent à pleines mains.",
      "Devant le portail du Conseil, une ligne de gardes du Guet, hallebardes basses. Un jeune lieutenant au casque trop grand se tient devant eux, les bras écartés, comme pour retenir aussi bien ses hommes que la foule. Derrière lui, un sergent à barbe grise frappe le pavé du talon de sa hallebarde, à coups réguliers, pour donner le rythme de la charge.",
      "« {{oreille|J'ai ordre de tenir la place, rien de plus|J'ai ordre de charger si la foule passe la fontaine, et je ne veux pas charger}} ! crie le lieutenant. Reculez jusqu'à la fontaine ! » Le sergent ricane. « {{oreille#ivc_v_emeute_ordre|On attend les ordres du prévôt, mon lieutenant|Le prévôt a dit qu'une bonne émeute lui servirait, mon lieutenant, et qu'on ne la retienne pas trop}}. »",
      "Une pierre vole et sonne sur un casque. La foule avance d'un pas.",
      { with: "fauvette", text: "Fauvette s'est collée à ton dos. « Je connais une ruelle derrière les Cardeurs, dit-elle. Si ça charge, on y met les petits. »" },
      { with: "tibere", text: "Tibère regarde le sergent à barbe grise. « Je le connais, dit-il. Tesson. Il a toujours aimé charger. » Il a déjà la main sur sa masse." },
    ],
    choices: [
      { label: "Monter sur la charrette renversée et parler à la foule", test: { dom: "social", diff: -10, label: "Retenir une foule affamée", help: [{ if: { seen: "IVC_s_tribun" }, v: 10 }, { if: { fac: "hautes", min: 10 }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }, { with: "lison", v: 5 }] },
        win: { fx: { fac: { hautes: 5 }, flag: "ivc:gaudrel", ep: ["perso", 800] }, to: "IVC_emeute_calme" }, lose: { to: "IVC_emeute_coups" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "La voix d'un ancien sergent" },
        win: { fx: { flag: "ivc:gaudrel", conf: { tibere: 5 }, ep: ["perso", 800] }, to: "IVC_emeute_calme" }, lose: { to: "IVC_emeute_coups" } },
      { label: "Faire filer les femmes et les enfants par la ruelle des Cardeurs", test: { dom: "discretion", diff: -10, label: "Vider la place par le côté", help: [{ with: "fauvette", v: 20 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { fac: { hautes: 5 }, ep: ["perso", 600] }, to: "IVC_emeute_ruelle" }, lose: { to: "IVC_emeute_coups" } },
      { label: "Te mettre entre les hallebardes et la foule", fight: { title: "Le sergent qui aimait charger", enemies: [{ id: "garde_guet", n: 2 }, { id: "ivc_sergent", n: 1 }], spare: true,
        win: { fx: { fac: { hautes: 10, conseil: -5 }, ep: ["perso", 1000] }, to: "IVC_emeute_coups" }, lose: { fx: { pv: -4 }, to: "IVC_emeute_coups" },
        flee: { label: "Te jeter dans la foule et disparaître", dom: "discretion", diff: 0, to: "IVC_emeute_ruelle" }, calm: { to: "IVC_emeute_calme" } } },
      { label: "Rester sous le portail et regarder", back: "IVC_seance" },
    ] },

  IVC_emeute_calme: { act: "IV", title: "La fontaine", place: S, fx: { meet: "ivc_gaudrel" },
    text: [
      "Les gens reculent jusqu'à la fontaine, pas plus loin, en grondant. C'est assez. Le lieutenant fait relever les hallebardes, ligne par ligne, avant que son sergent ait trouvé quoi dire. Une femme te crie que les mots ne se mangent pas, et elle a raison, et elle recule quand même.",
      "Le lieutenant enlève son casque. Il a vingt-cinq ans au plus, les cheveux collés de sueur. « Crespin Gaudrel, dit-il, lieutenant au Guet, troisième compagnie. Je vous dois une place sans morts. » Il baisse la voix. « {{oreille#ivc_v_gaudrel|Le prévôt sera content que tout se soit bien passé|Le prévôt va me faire casser pour ne pas avoir chargé, et je recommencerais}}. Si vous avez besoin du Guet un jour, demandez la troisième compagnie, au poste des Sauniers. »",
      { if: RECHERCHE, text: "Il te regarde un peu trop longtemps. Il a vu l'affiche, au portail. Il remet son casque et regarde ailleurs." },
      { with: "tibere", text: "Tibère tape sur l'épaule du jeune homme, comme on le faisait de son temps. « Bon garçon, dit-il. Ça ne durera pas, au Guet, mais bon garçon. »" },
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_emeute_ruelle: { act: "IV", title: "La ruelle des Cardeurs", place: S,
    text: [
      { outcome: "flee", text: "Tu plonges entre deux débardeurs et la foule se referme derrière toi comme l'eau. On te pousse, on te marche sur les pieds, et tu te retrouves dans la ruelle des Cardeurs, avec ceux qui ont eu la même idée." },
      "La ruelle des Cardeurs est étroite, tordue, et pleine de bourre de laine qui vole. Tu y fais passer une vingtaine de femmes, des vieux, des enfants qui serrent leur son dans leur tablier. Derrière vous, sur la place, la charge sonne : un grand bruit de bois et de fer, des cris, puis plus rien qu'une longue plainte.",
      "Au bout de la ruelle, une vieille saunière te prend le poignet. « On dira aux Joncs qui t'étais », dit-elle. Elle a les mains crevassées par le sel, et elle serre fort.",
      { with: "fauvette", text: "Fauvette compte les enfants deux fois, du doigt, et ferme la marche. « Vingt-trois, dit-elle. Il en manque pas. »" },
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_emeute_coups: { act: "IV", title: "Après la charge", place: S,
    text: [
      { outcome: "win", text: "Le sergent est assis contre la fontaine, le nez en sang, et ses deux hommes ont lâché leurs hallebardes. La foule, derrière toi, a vu. On t'applaudit. Sur les marches du Conseil, des conseillers aussi ont vu, et ils n'applaudissent pas." },
      { outcome: "lose", text: "Un coup de hampe te prend aux côtes et tu te retrouves à genoux dans le son répandu. Quand tu relèves la tête, la charge est passée sur toi et au-delà." },
      { if: { not: { seen: "IVC_emeute_calme" } }, text: "La place se vide par toutes ses rues. Il reste des sabots, un panier écrasé, des taches sombres sur les pavés, et des gens assis qui tiennent leur tête. Le jeune lieutenant du Guet va de l'un à l'autre avec une gourde, le casque à la main. Il a l'air d'un homme qui vient d'apprendre quelque chose sur son métier." },
      "Contre le portail, un crieur du Conseil recloue l'affiche du couvre-feu, que la foule avait arrachée. Il tape du marteau sans regarder personne.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_salle_nuit: { act: "IV", title: "La grande salle, vide", place: S, takes: "evening",
    text: [
      "Tu te laisses enfermer derrière un pilier de la tribune. Les huissiers font leur ronde, soufflent les chandelles, tirent les verrous. Il ne reste que la lumière grise des hautes fenêtres, et les quarante bancs vides en fer à cheval.",
      "Tu descends dans la salle. Sous le fauteuil du prévôt, l'estrade n'est faite que d'une seule pierre, très ancienne, plus vieille que les murs : une dalle de marbre gris veiné de vert, usée en creux au milieu. Les guides disent aux voyageurs que c'était la marche du trône de la reine. Elle est restée là quand on a bâti le Conseil autour. {{echo#ivc_e_comptoirs|Le marbre est froid sous ta main, et lisse comme une eau morte|Le marbre te rend une voix d'homme, il y a trois siècles, dans une salle pleine : « Il faut qu'elle ne puisse plus témoigner devant le duc. La langue. Marrel tiendra le couteau, et Delisle tiendra la reine, puisque c'est un Delisle qui a eu l'idée »}}.",
      "La salle {{echo#ivc_e_prevot_nuit|est vide depuis que les huissiers sont partis|garde encore les voix de la nuit dernière, sous la tapisserie : le prévôt, et un homme à l'accent du nord. « La porte des Sauniers, la nuit de la Grande Basse. Toute la garde sera sur les digues. » « Et votre Conseil ? » « Mon Conseil votera ce que je lui dirai de voter, le lendemain »}}.",
      "Tu {{miroir|es là pour le prévôt, pour la ville, pour la Charte|es là parce que tu as aimé, une seconde, l'idée que toute une salle se taise en t'écoutant}}.",
    ],
    choices: [
      { label: "Poser le diapason sur la marche de la reine, et la laisser chanter", once: true, hide: { not: { item: "diapason" } }, fx: { recharge: { echo: 3 }, ep: ["perso", 300] }, to: "IVC_salle_pierre" },
      { label: "Ressortir par une fenêtre basse, avant la ronde de minuit", back: "IVC_seance" },
    ] },

  IVC_salle_pierre: { act: "IV", title: "La marche du trône", place: S,
    text: [
      "Tu poses la fourche de bronze à plat sur le marbre, au creux de l'usure. Pendant un moment, rien. Puis la pierre se met à chanter, très bas, une note qui monte du sol et que tu sens dans tes dents plus que dans tes oreilles. Le diapason la boit. Il tiédit dans ta paume.",
      "La note dure longtemps après que tu as retiré la main. Les quarante bancs vides la renvoient de l'un à l'autre. Quand elle s'éteint, tu entends de nouveau la place, au-dehors, et une patrouille qui passe en criant l'heure.",
      { with: "gildas", text: "Frère Gildas s'est agenouillé près de la marche, les deux mains posées à plat sur le marbre, les yeux fermés. Il reste ainsi jusqu'à la fin de la note. Ce qu'il a entendu, il le garde." },
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_emeute_ordre: { fx: { clue: "ivc_c_emeute" } },
  ivc_v_gaudrel: { fx: { flag: "ivc:gaudrel" } },
  ivc_e_comptoirs: { fx: { ep: ["perso", 500] } },
  ivc_e_prevot_nuit: { fx: { clue: "ivc_c_porte", ep: ["perso", 800] } },
});
Object.assign(C, {
  ivc_c_emeute: { rev: "S", text: "Un sergent du Guet, sous ses mots, pendant l'émeute : « Le prévôt a dit qu'une bonne émeute lui servirait, et qu'on ne la retienne pas trop. »" },
  ivc_c_porte: { rev: "S", text: "La porte des Sauniers sera ouverte au duc la nuit de la Grande Basse, quand toute la garde sera sur les digues." },
});
Object.assign(ENEMIES, {
  ivc_sergent: { name: "Le sergent Tesson", look: "humain", pv: 40, att: 72, def: 26, dmg: 7, desc: "Un vieux sergent du Guet à barbe grise, qui aime l'ordre, et la charge plus encore." },
});

// ==================================================================== the councillors: Vernier, Fourcaud, the tribune
Object.assign(P, {
  IVC_vernier: { act: "IV", title: "Le comptoir Vernier", place: S, backName: "le comptoir Vernier",
    text: [
      { first: true, text: "La maison Vernier occupe tout un côté de la rue des Navettes : au rez-de-chaussée, la halle aux draps, des rouleaux de laine teinte empilés jusqu'aux poutres, bleu guède, rouge garance, vert de Salvèze ; à l'étage, le comptoir. Un commis te fait attendre une heure sur un banc, puis te fait monter." },
      { first: true, text: "Dame Vernier te reçoit debout, derrière une table couverte de registres, appuyée sur sa canne. Sur un dressoir, seul, un hanap posé comme on pose une chose qu'on veut voir partir : une coupe sur pied, {{pie#ivc_p_hanap|d'argent massif, ciselée de cygnes, le cadeau d'un duc|de vermeil sur un pied bien plus ancien que la coupe, marqué d'une couronne de sel, l'orfèvrerie de Sorne, qu'Aveline a dû piller il y a trois siècles}}. « Le cadeau de l'envoyé, dit-elle en voyant ton regard. Il en a fait porter un à chaque banc qui vote. Le mien est le plus laid. »" },
      { again: true, text: "La halle aux draps, l'escalier, le comptoir. Dame Vernier lève les yeux de ses registres." },
      { first: true, if: RECHERCHE, text: "« Je sais qui vous êtes, ajoute-t-elle. Votre nom est sur le portail du Conseil. Vous avez le temps de me dire ce que vous voulez avant que mon commis aille chercher le Guet. Il est lent. »" },
      { again: true, after: "tresor:ivc_hanap", text: "Sur le dressoir, la place du hanap est vide. La poussière en garde le rond, et Dame Vernier la laisse." },
      { after: "ivc:vernier", text: "Elle te fait asseoir, maintenant, et elle fait apporter du vin coupé. « Dites-moi ce que vous avez sur lui. »" },
    ],
    choices: [
      { label: "Lui parler de l'anneau de sa fille, et de la vieille Odeline Carrus", hide: { any: [{ not: { voile: "ivc_v_vernier_dette" } }, { has: "ivc:vernier" }] }, fx: { flag: "ivc:vernier", fac: { conseil: 5 }, ep: ["perso", 800] }, to: "IVC_vernier_dette" },
      { label: "Lui demander son appui contre le prévôt", hide: { any: [{ has: "ivc:vernier" }, { seen: "IVC_vernier_refus" }] },
        test: { dom: "social", diff: -20, label: "Gagner une veuve qui ne doit rien à personne", help: [{ if: DEMASQUABLE, v: 20 }, { if: { item: "ivc_lettre_claire" }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: "ivc:vernier", fac: { conseil: 5 }, ep: ["perso", 800] }, to: "IVC_vernier_dette" }, lose: { to: "IVC_vernier_refus" } },
      { label: "Lui dire d'où vient vraiment son hanap", once: true, hide: { not: { voile: "ivc_p_hanap" } }, to: "IVC_vernier_hanap" },
      { back: "IVC_seance" },
    ] },

  IVC_vernier_dette: { act: "IV", title: "L'anneau", place: S,
    text: [
      { if: { voile: "ivc_v_vernier_dette" }, text: "Tu lui parles d'Odeline Carrus, chercheuse de choses perdues sur le quai des Lanternes, et d'un anneau d'enfant qu'on lui a apporté à retrouver, une année de fièvres. Dame Vernier pose sa canne contre la table. Elle s'assied, pour la première fois.", else: "Tu lui dis ce que tu sais, et ce que tu crois. Elle écoute, sans t'interrompre, les deux mains sur le pommeau de sa canne. À la fin, elle s'assied, pour la première fois." },
      "« Odeline, dit-elle. Elle l'a retrouvé dans la vase du canal des Teinturiers, sous la maison où ma fille est morte. Elle m'a demandé deux ducats. J'en ai donné un, parce que j'étais en deuil, et que j'étais avare. » Elle regarde ses mains. « {{oreille|Je n'ai jamais aimé les dettes|Je pense à ce ducat chaque fois que je passe le pont des Lanternes, depuis dix-neuf ans}}. »",
      "Elle se redresse. « Bien. La maison Vernier vous doit un service. Un seul, mais un vrai. Elle signera ce qu'il faudra signer au Conseil, et elle parlera au juge des causes criminelles, qui me doit de l'argent. Ne me demandez pas d'aimer ça. »",
      { if: { has: "passe:gage" }, text: "Tu penses à ton père, qui t'a laissé{e} en gage sur ce même quai pour une dette qu'il n'a jamais payée. Les dettes vont par familles, à Salvèze." },
    ],
    choices: [{ back: "IVC_vernier" }] },

  IVC_vernier_refus: { act: "IV", title: "La porte de la rue des Navettes", place: S,
    text: [
      "Dame Vernier t'écoute jusqu'au bout, puis appelle son commis. « Raccompagnez. » Sur le seuil, elle ajoute : « Revenez avec une lettre, une vraie, ou un homme qui parle. Je ne vote pas sur des soupçons. J'en ai trop eu moi-même, et j'ai eu tort chaque fois. »",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_vernier_hanap: { act: "IV", title: "Le hanap de Sorne", place: S,
    fx: { item: "ivc_tr_hanap", clock: { tresors: 1 }, flag: "tresor:ivc_hanap", ep: ["perso", 600] },
    text: [
      "Tu prends le hanap, tu le tournes vers la fenêtre, et tu lui montres le pied : sous la crasse de trois siècles, une petite couronne de sel poinçonnée, et autour, en lettres usées, le nom d'un orfèvre de Sorne. La coupe d'argent est neuve. Le pied vient d'un pillage.",
      "Dame Vernier le regarde longtemps. « Il m'a offert la vaisselle de la reine, dit-elle enfin, pour acheter ma voix contre la ville de la reine. » Elle a un petit rire sec. « Prenez-le. Je ne boirai pas là-dedans, et je ne veux pas le voir sur mon dressoir quand je lui dirai non. »",
    ],
    choices: [{ back: "IVC_vernier" }] },

  IVC_fourcaud: { act: "IV", title: "Le comptoir Fourcaud", place: S, backName: "le comptoir Fourcaud",
    text: [
      { first: true, text: "Le quai aux Grains est désert. Les gabares du nord n'accostent plus depuis l'automne, et les grues de bois sont immobiles, les crochets pendus au-dessus de l'eau. Seul le comptoir Fourcaud a de la lumière : une maison étroite à pignon vert, gardée par quatre hommes en livrée verte armés de gourdins, parce que la foule est déjà venue deux fois." },
      { first: true, text: "Maître Fourcaud te reçoit dans sa salle des comptes, un verre de vin cuit à la main. À son doigt, une bague neuve, {{pie#ivc_p_bague|un rubis gros comme une noisette, sur une monture d'or|un verre rouge sur du cuivre doré, de quoi payer une semaine de pain à une famille}}, qu'il fait tourner en parlant. « Un présent de Monseigneur d'Aveline, dit-il. Il sait reconnaître ses amis. »" },
      { again: true, text: "Le comptoir à pignon vert, les gourdins à la porte. Maître Fourcaud fait tourner sa bague." },
      "« Que puis-je pour vous ? dit-il. Du grain, je n'en ai plus. {{oreille|Je le répète à qui veut l'entendre, la Pointe est vide|Je le répète, et je fais garder la Pointe par trois hommes de plus chaque semaine}}. »",
      { after: "ivc:fourcaud", text: "Il te reçoit maintenant dans le petit salon, avec du vin cuit, et parle du prévôt comme d'un ancien associé qui l'aurait volé au jeu." },
    ],
    choices: [
      { label: "Lui demander sa signature pour une séance extraordinaire", hide: { any: [{ not: { has: "prevot:demasque" } }, { has: "ivc:fourcaud" }, { has: "prevot:dejoue" }] }, to: "IVC_fourcaud_signe" },
      { back: "IVC_seance" },
    ] },

  IVC_tribun: { act: "IV", title: "La Grenouille", place: S, backName: "la Grenouille", taverne: { mise: 2, adversaire: "un pêcheur d'anguilles des Joncs" },
    text: [
      { first: true, text: "La Grenouille est une salle basse au bord du port aux Sauniers, à demi enterrée, où l'on descend par trois marches toujours mouillées. Elle sent l'anguille fumée, la tourbe et le vin de marais, aigre et clair. Ce sont des gens des Hautes-Eaux qui la tiennent et la remplissent : sauniers, dentellières venues vendre, pêcheurs qui ne peuvent plus repartir depuis qu'on garde les ponts." },
      { first: true, text: "Achille Vimeux est assis au fond, devant une chope qu'il ne boit pas. Des hommes viennent lui parler à l'oreille, un par un, et repartent. Il te regarde descendre les marches, sans quitter son banc." },
      { again: true, text: "La Grenouille, son odeur de tourbe et d'anguille. Le tribun au fond, à sa table." },
      { first: true, text: "« {{oreille|Les Hautes-Eaux n'ont besoin de personne en ville|Les Hautes-Eaux ont besoin de quelqu'un en ville, et je n'ai plus confiance en personne}}, dit-il quand tu t'assieds. Et toi, qu'est-ce que tu viens vendre ? »" },
      { after: "joncs:sauves", text: "Un vieux pêcheur te reconnaît, à la table voisine, et lève sa chope vers toi. Il était aux Joncs, la nuit de la tempête." },
      { after: "tribun:fils_libre", text: "Galmier, le fils du tribun, sert à boire derrière le comptoir avec un bras en écharpe. Il te fait un signe de tête, gauche et sérieux." },
    ],
    choices: [
      { label: "Lui dire que tu peux sortir son fils de la Barbacane", hide: { any: [{ not: { voile: "ivc_v_tribun_fils" } }, { seen: "IVC_fils" }] }, to: "IVC_fils" },
      { label: "Demander au patron pourquoi le tribun ne boit pas", hide: { any: [{ voile: "ivc_v_tribun_fils" }, { seen: "IVC_fils" }] }, fx: { devoile: "ivc_v_tribun_fils", questSeen: "IVC_q_fils" }, to: "IVC_tribun_patron" },
      { label: "Lui demander la voix des Hautes-Eaux contre le prévôt", hide: { any: [{ has: "ivc:tribun" }, { not: { has: "prevot:demasque" } }] }, to: "IVC_tribun_allie" },
      { back: "IVC_seance" },
    ] },

  IVC_tribun_patron: { act: "IV", title: "Le patron de la Grenouille", place: S,
    text: [
      "Le patron essuie une chope avec un torchon plus sale qu'elle. « Son garçon, dit-il. Galmier. Dix-sept ans. Pris mardi, aux émeutes du pont des Teinturiers, avec une pierre dans la main. Ils l'ont mis à la Barbacane, la prison du Conseil, avec les voleurs et les fous. Pas de juge, pas de jour. »",
      "Il pose la chope. « On dit que le prévôt le garde pour tenir le père. Tant que le garçon est là-bas, Vimeux parle fort au Conseil et n'ouvre pas les vannes. Tout le monde le sait. Personne ne le dit devant lui. »",
    ],
    choices: [
      { label: "Retourner à la table du tribun, et lui proposer d'aller chercher son fils", to: "IVC_fils" },
      { back: "IVC_tribun" },
    ] },

  IVC_tribun_allie: { act: "IV", title: "La voix des marais", place: S,
    text: [
      "Tu dis au tribun ce que tu sais du prévôt : la porte, la Grande Basse, la charge de gouverneur. Vimeux t'écoute sans boire. Quand tu as fini, il fait tourner sa chope sur la table, un tour complet.",
      { if: { any: [{ has: "tribun:fils_libre" }, { fac: "hautes", min: 15 }] }, text: "« Bon, dit-il. Les marais se lèveront. Au Conseil, je parlerai. Dans la rue, les sauniers tiendront la porte des Sauniers, puisqu'elle porte notre nom. Tu as notre voix. »", else: "« Tu me demandes de parler contre l'homme qui tient mon fils, dit-il. Sors-le de là d'abord. Ou montre aux marais que tu es des leurs. Après, je parlerai. »" },
      { if: { has: "taiseurs:serment" }, text: "Il te regarde un moment de plus, puis il pose deux doigts sur ses lèvres, très vite, le geste des Joncs. Il sait." },
    ],
    choices: [
      { label: "Prendre sa main tendue", hide: { not: { any: [{ has: "tribun:fils_libre" }, { fac: "hautes", min: 15 }] } }, fx: { flag: "ivc:tribun", fac: { hautes: 5 }, ep: ["perso", 800] }, back: "IVC_tribun" },
      { label: "Te lever sans rien promettre", hide: { any: [{ has: "tribun:fils_libre" }, { fac: "hautes", min: 15 }] }, back: "IVC_tribun" },
    ] },
});
Object.assign(ITEMS, {
  ivc_tr_hanap: { name: "Le hanap de Sorne", kind: "tresor", price: 90, desc: "Une coupe d'argent neuve, ciselée de cygnes, sur un pied de vermeil bien plus ancien, poinçonné d'une couronne de sel : l'orfèvrerie de la reine Ysaure, pillée par Aveline et rendue à Salvèze en cadeau d'achat." },
});

// ==================================================================== the chancery: the lost letters, the register, the old seal
Object.assign(P, {
  IVC_greffe: { act: "IV", title: "La chancellerie du Conseil", place: S, fx: { meet: "ivc_sirven" }, backName: "la chancellerie",
    text: [
      { first: true, text: "La chancellerie est une longue salle voûtée sous les combles du Conseil, où douze clercs copient debout devant des pupitres inclinés. Ça sent l'encre de noix, la colle de peau et la poussière chaude. Au bout, derrière une table chargée de sceaux et de cire, un vieil homme aux lunettes de corne surveille tout le monde à la fois : maître Sirven, greffier du Conseil depuis quarante ans." },
      { first: true, text: "Derrière lui, sur une étagère, une caisse de bois porte une étiquette : *Plis trouvés, non réclamés.* « Ce que les noyés et les ivrognes perdent sous le sceau du Conseil, explique-t-il. On le garde un an et un jour, puis on le brûle. Vous êtes chercheur de choses perdues, je vois ça à vos mains. Vous venez fouiller ma caisse, comme les autres. »" },
      { again: true, text: "La chancellerie, les pupitres, le grattement des plumes. Maître Sirven lève les yeux par-dessus ses lunettes." },
      { first: true, text: "Il tapote la caisse. « Il y a un drôle de pli, là-dedans. Trouvé il y a huit jours sur un valet noyé dans le canal des Tanneurs. Le sceau du Conseil, et dedans, {{oreille#ivc_v_sirven|rien qu'un fatras de chiffres sans intérêt|des chiffres de chancellerie, du chiffre de prévôt, que j'ai reconnu et que je n'ai pas voulu reconnaître}}. Personne ne l'a réclamé. Personne ne le réclamera. »" },
    ],
    choices: [
      { label: "Demander à voir le pli du noyé", hide: { any: [{ item: "ivc_lettre_chiffree" }, { seen: "IVC_greffe_refus" }] },
        test: { dom: "social", diff: -10, label: "Convaincre un vieux greffier", help: [{ if: { voile: "ivc_v_sirven" }, v: 20 }, { if: { has: "metier:lire" }, v: 10 }, { if: { fac: "conseil", min: 10 }, v: 10 }] },
        win: { fx: { item: "ivc_lettre_chiffree", ep: ["perso", 500] }, to: "IVC_lettre" }, lose: { to: "IVC_greffe_refus" } },
      { label: "Lui payer les « frais de recherche » d'usage : trois ducats", hide: { item: "ivc_lettre_chiffree" }, fx: { gold: -60, item: "ivc_lettre_chiffree" }, to: "IVC_lettre" },
      { label: "Laisse-moi faire", who: "fauvette", hide: { item: "ivc_lettre_chiffree" }, test: { dom: "discretion", diff: 0, label: "Fauvette et la caisse du greffier" },
        win: { fx: { item: "ivc_lettre_chiffree", ep: ["perso", 500] }, to: "IVC_lettre" }, lose: { to: "IVC_greffe_refus" } },
      { label: "Feuilleter le registre des plis scellés, pendant qu'il a le dos tourné", hide: { seen: "IVC_greffe_registre" }, to: "IVC_greffe_registre" },
      { label: "Relire le pli chiffré", hide: { not: { item: "ivc_lettre_chiffree" } }, to: "IVC_lettre" },
      { label: "La salle des minutes, au fond, et son coffre de fer", hide: { any: [{ not: { voile: "ivc_l_sceau" } }, { seen: "IVC_greffe_coffre" }] }, to: "IVC_greffe_coffre" },
      { back: "IVC_seance" },
    ] },

  IVC_greffe_refus: { act: "IV", title: "Un an et un jour", place: S,
    text: [
      "Maître Sirven referme la caisse et pose dessus ses deux mains tachées d'encre. « Un an et un jour, dit-il. Ce sont les règles. Si le propriétaire se présente avec une pièce qui prouve que c'est à lui, il repart avec. Sinon, il attend le feu, comme tout le monde. »",
      { outcome: "lose", with: "fauvette", text: "Fauvette revient près de toi les mains vides, en sifflotant. « Il a des yeux derrière les lunettes, dit-elle. Et une sonnette sous la table. »" },
      "Il te regarde par-dessus ses lunettes. « Les frais de recherche, en revanche, cela se discute toujours. »",
    ],
    choices: [{ back: "IVC_greffe" }] },

  IVC_greffe_registre: { act: "IV", title: "Le registre des plis", place: S,
    text: [
      "Le registre des plis scellés est ouvert sur un lutrin, à côté de la table du greffier. Chaque lettre qui sort sous le sceau du Conseil y est notée : la date, le destinataire, le porteur, la copie gardée. L'écriture de Sirven est petite et droite comme une haie taillée.",
      "Sur la page de la semaine dernière, une ligne a été grattée au couteau, puis recouverte. *Pli au sceau du Conseil, pour Aveline, {{loupe#ivc_l_plis|porté par le courrier ordinaire, copie gardée|porté de nuit par un valet de l'hôtel Delisle, sans copie, sur ordre exprès du prévôt}}.* Deux pages plus haut, une autre ligne, à peu près la même.",
      "En tête du registre, collée sur la garde, une feuille plus ancienne, jaune et cassante : l'inventaire de la chancellerie à la fondation de la République. *Un coffre de fer {{loupe#ivc_l_sceau|vide, au fond de la salle des minutes|à double fond, au fond de la salle des minutes, où l'on a enfermé la matrice du sceau de la reine, pour qu'elle ne serve plus jamais}}.*",
      { if: { has: "metier:lire" }, text: "Tu as passé des années à lire des registres pour Odeline. Une ligne grattée se voit toujours : le papier est plus mince et l'encre y boit." },
    ],
    choices: [{ back: "IVC_greffe" }] },

  IVC_greffe_coffre: { act: "IV", title: "La salle des minutes", place: S,
    text: [
      "La salle des minutes est une cave voûtée sous la chancellerie, pleine d'étagères où dorment trois siècles d'actes du Conseil, ficelés par années. Au fond, sous une couche de poussière grise, un coffre de fer bas, aux coins rongés de rouille. Il est ouvert, et vide : des clercs y ont jeté des bouts de chandelle pendant des générations.",
      "Le fond {{pie#ivc_p_coffre|est une plaque de fer, rivée aux parois|sonne creux sous les doigts : la plaque est un faux fond, tenu par quatre rivets dont un seul est vrai}}.",
    ],
    choices: [
      { label: "Défaire le faux fond avec tes crochets", hide: { any: [{ not: { item: "crochets" } }, { has: "tresor:ivc_sceau" }] }, fx: { item: "ivc_tr_sceau", clock: { tresors: 1 }, flag: "tresor:ivc_sceau", ep: ["perso", 800] }, to: "IVC_greffe_sceau" },
      { label: "Chercher à tâtons le rivet qui joue", test: { dom: "savoir", diff: -10, label: "Trouver le vrai rivet", help: [{ if: { voile: "ivc_p_coffre" }, v: 30 }, { if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { item: "ivc_tr_sceau", clock: { tresors: 1 }, flag: "tresor:ivc_sceau", ep: ["perso", 800] }, to: "IVC_greffe_sceau" }, lose: { to: "IVC_greffe_force" } },
      { label: "Laisse-moi faire", who: "salome", fx: { item: "ivc_tr_sceau", clock: { tresors: 1 }, flag: "tresor:ivc_sceau", ep: ["perso", 800], conf: { salome: 3 } }, to: "IVC_greffe_sceau" },
      { back: "IVC_greffe" },
    ] },

  IVC_greffe_force: { act: "IV", title: "Le coffre forcé", place: S,
    fx: { item: "ivc_tr_sceau", clock: { tresors: 1 }, flag: "tresor:ivc_sceau", fac: { conseil: -5 } },
    text: [
      "Les rivets ne bougent pas. Tu finis par glisser la lame de ta dague sous la plaque et par faire levier. Le fer cède d'un coup, avec un bruit qui monte par l'escalier jusqu'à la chancellerie. En haut, les plumes s'arrêtent.",
      "Sous la plaque, dans un lit de laine mangée aux mites, il y a ce que tu cherchais. Tu le prends et tu sors par la porte des archives pendant que maître Sirven descend l'escalier en criant au voleur. Il saura qui c'était. Le Conseil aussi.",
    ],
    choices: [{ label: "Regarder ce que tu as pris", to: "IVC_greffe_sceau" }] },

  IVC_greffe_sceau: { act: "IV", title: "Le sceau de la reine", place: S,
    text: [
      "C'est une matrice de sceau en bronze, ronde, large comme une paume, avec une poignée en forme de bouton de rose. Tu la retournes. En creux, à l'envers, une femme assise sur un trône, une couronne de sel sur la tête, la main levée, et autour, en lettres anciennes : *YSAVRE REINE DES EAVX ET DES TERRES GAGNÉES*.",
      "Une entaille profonde, faite au ciseau, barre le visage de la reine en diagonale. On l'a défigurée pour qu'elle ne scelle plus rien, puis on l'a cachée au lieu de la fondre. Quelqu'un, à la fondation de la République, n'a pas pu se résoudre à la détruire.",
      { with: "gildas", text: "Frère Gildas tend la main, puis la retire avant de toucher le bronze. « Les actes du Registre portent ce sceau, dit-il. Ce qu'il en reste. »" },
    ],
    choices: [{ back: "IVC_greffe" }] },

  IVC_lettre: { act: "IV", title: "Le pli du noyé", place: S,
    text: [
      "Le pli a séché de travers et ondule comme une feuille de chou. Le sceau du Conseil est brisé. Dedans, une seule feuille, couverte de quarante lignes de chiffres romains séparés par des points, d'une écriture régulière de clerc. Aucun mot en clair, aucune signature. Au bas, seulement, une initiale : *H.*",
      "Tu le sais d'Odeline : un chiffre de chancellerie se lit avec une grille, un livre que l'écrivain et le lecteur possèdent tous deux. Sans la grille, on peut y passer un hiver.",
      { if: { has: "metier:lire" }, text: "Les nombres vont de un à cent cinquante, jamais au-delà. Un livre de cent cinquante pièces, ou de cent cinquante pages. Tu en connais un, très commun, qu'on trouve dans chaque chapelle." },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "gildas", hide: { item: "ivc_lettre_claire" }, test: { dom: "savoir", diff: -10, label: "Frère Gildas et le chiffre" },
        win: { fx: { conf: { gildas: 3 } }, to: "IVC_dechiffre" }, lose: { to: "IVC_dechiffre_rate" } },
      { label: "T'y mettre toi-même, à la chandelle", hide: { item: "ivc_lettre_claire" },
        test: { dom: "savoir", diff: -30, label: "Casser un chiffre de prévôt", help: [{ if: { item: "ivc_cle_chiffre" }, v: 50 }, { if: { voile: "ivc_l_lettre_cle" }, v: 25 }, { if: { has: "metier:lire" }, v: 10 }] },
        win: { to: "IVC_dechiffre" }, lose: { to: "IVC_dechiffre_rate" } },
      { back: "IVC_greffe" },
    ] },

  IVC_dechiffre: { act: "IV", title: "La lettre en clair", place: S, takes: 4,
    fx: { item: "ivc_lettre_claire", flag: "ivc:p_lettre", clue: "ivc_c_porte", ep: ["seance", 1800] },
    text: [
      "Il faut quatre heures, une chandelle entière et un psautier emprunté à la chapelle du Conseil. Chaque paire de nombres donne un psaume et une lettre. Les mots viennent un à un, lentement, puis d'un coup, parce qu'à partir d'un moment on les devine avant de les avoir.",
      "Tu recopies le tout en clair, d'une écriture que la fatigue rend tremblante. Puis tu relis.",
      { with: "gildas", text: "Frère Gildas a récité les psaumes de tête, sans ouvrir le livre, pendant que tu comptais les lettres. À la fin, il se tait longtemps. « Il a pris le psautier pour vendre la ville, dit-il. Il fallait y penser. »" },
    ],
    choices: [{ back: "IVC_greffe" }] },

  IVC_dechiffre_rate: { act: "IV", title: "Des chiffres", place: S, takes: 3,
    text: [
      "Tu essaies les livres qu'on trouve partout : l'almanach des marées, le tarif des douanes, la Bible de la chapelle. Rien ne tient. À force, deux mots seulement sortent des chiffres, isolés, et tu n'es même pas sûr{e} de ne pas les avoir inventés : *sauniers*, et plus bas, *basse*.",
      "Il te faudrait la grille. Le secrétaire qui l'utilise doit la connaître par cœur.",
    ],
    choices: [
      { label: "Reprendre avec la grille de Léonce Dessart", hide: { not: { item: "ivc_cle_chiffre" } }, to: "IVC_dechiffre" },
      { back: "IVC_greffe" },
    ] },
});
Object.assign(V, {
  ivc_v_sirven: { fx: { ep: ["perso", 200] } },
  ivc_l_plis: { fx: { clue: "ivc_c_plis", ep: ["perso", 300] } },
  ivc_l_sceau: { fx: { ep: ["perso", 200] } },
  ivc_p_coffre: { fx: { ep: ["perso", 100] } },
  ivc_p_hanap: { fx: { ep: ["perso", 200] } },
  ivc_l_lettre_cle: { fx: { ep: ["perso", 300] } },
});
Object.assign(C, {
  ivc_c_plis: { rev: "S", text: "Registre des plis du Conseil : des lettres sous le sceau de la République partent pour Aveline de nuit, portées par un valet de l'hôtel Delisle, sans copie, sur ordre du prévôt." },
});
Object.assign(ITEMS, {
  ivc_lettre_chiffree: { name: "Le pli du noyé", kind: "document", form: "lettre", desc: "Un pli au sceau du Conseil, trouvé sur un valet noyé dans le canal des Tanneurs. Quarante lignes de chiffres romains.",
    text: "*IV · XII · XXXI · VII · CXIX · II · LI · XIX · XC · III · XXIII · I…*\n\n(Quarante lignes ainsi, d'une écriture régulière de clerc.)\n\n*H.*\n\nAu bas de la feuille, {{loupe#ivc_l_lettre_cle|une tache de cire bleue, rien d'autre|d'une encre pâle qui ne se lit qu'à l'ambre : « psautier, premier nombre le psaume, second la lettre »}}." },
  ivc_lettre_claire: { name: "La lettre du prévôt, en clair", kind: "document", form: "lettre", hand: "tremblee", desc: "Ta copie en clair du pli chiffré du prévôt Delisle, faite à la chandelle avec un psautier.",
    text: "*Monseigneur,*\n\n*La porte des Sauniers sera ouverte la nuit de la Grande Basse, à la troisième heure, quand toute la garde sera sur les digues à surveiller la mer. Vos gens entreront par la rive des salines, sans bannières. Le Conseil votera le lendemain ce que je lui dirai de voter.*\n\n*En échange, la charge de gouverneur de la province de Salvèze, viagère, telle que votre envoyé me l'a promise.*\n\n*Le Registre de la Muette suivra, dès que le chercheur de la Banque l'aura sorti de terre pour moi. Je vous le porterai en personne.*\n\n*H.*" },
  ivc_tr_sceau: { name: "La matrice du sceau d'Ysaure", kind: "tresor", price: 150, desc: "Un sceau de bronze au bouton de rose, cachée trois siècles dans un coffre de la chancellerie. La reine sur son trône, la couronne de sel, et une entaille au ciseau en travers du visage." },
});

// ==================================================================== the frightened secretary (side quest IVC_q_firmin)
Object.assign(P, {
  IVC_firmin: { act: "IV", title: "La chapelle du Conseil", place: S, takes: "evening",
    text: [
      "La chapelle du Conseil est une pièce étroite, sous l'escalier d'honneur, où les conseillers viennent jurer en début d'année et où personne ne vient le reste du temps. Une lampe rouge, six chaises, un lutrin. Sur le lutrin, un psautier relié de cuir vert, ouvert, et devant, les deux mains posées à plat sur les pages, Léonce Dessart.",
      "Il sursaute si fort en t'entendant que le lutrin vacille. C'est un garçon de trente ans qui en paraît vingt, les cheveux en épis, une tache d'encre sur la joue. « La chapelle est fermée, dit-il. Je {{oreille#ivc_v_firmin_prie|prie pour la ville, comme chaque soir, voilà tout|prie pour qu'on ne me retrouve pas dans le canal des Tanneurs, comme Gilet, le valet qui portait les plis}}. »",
      "Ses doigts restent collés au psautier. Il a les ongles rongés jusqu'au sang.",
      { if: RECHERCHE, text: "Il te reconnaît. Tu le vois à ses yeux, qui vont de ton visage à la porte. Ton portrait est affiché au portail, et lui, il passe devant chaque matin." },
    ],
    choices: [
      { label: "T'asseoir près de lui et lui parler doucement de Gilet", test: { dom: "social", diff: -10, label: "Rassurer un homme qui a peur", help: [{ if: { voile: "ivc_v_firmin_prie" }, v: 20 }, { if: { has: "metier:parole" }, v: 10 }, { with: "gildas", v: 10 }] },
        win: { to: "IVC_firmin_parle" }, lose: { fx: { flag: "ivc:firmin_menace" }, to: "IVC_firmin_parle" } },
      { label: "Poser devant lui le pli chiffré du noyé", hide: { not: { item: "ivc_lettre_chiffree" } }, to: "IVC_firmin_parle" },
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 3 } }, to: "IVC_firmin_parle" },
      { label: "Le prendre au col et le plaquer contre le mur", fx: { flag: "ivc:firmin_menace", mark: 1 }, tag: "Marque +1", stain: true, to: "IVC_firmin_parle" },
    ] },

  IVC_firmin_parle: { act: "IV", title: "Le psautier", place: S,
    fx: { flag: "ivc:p_firmin", item: "ivc_cle_chiffre", questSeen: "IVC_q_firmin", clue: "ivc_c_firmin", ep: ["seance", 1500] },
    text: [
      { if: { has: "ivc:firmin_menace" }, text: "Il parle très vite, la voix étranglée, en regardant tes mains. Il dirait n'importe quoi pour que tu le lâches, et pourtant ce qu'il dit tient debout.", else: "Il parle d'abord par morceaux, puis tout d'un coup, comme on vide un seau. On voit qu'il a récité tout cela dans sa tête pendant des nuits, à qui voudrait l'entendre." },
      "« C'est moi qui chiffre, dit-il. Le prévôt dicte, je chiffre, avec ce psautier-là, le premier nombre pour le psaume, le second pour la lettre. Gilet portait les plis au camp d'Aveline, la nuit, par la porte des Sauniers. Il y a huit jours, on l'a retrouvé dans le canal. Il avait trop bu, a dit le maître d'armes. Gilet ne buvait pas. »",
      "Il arrache une page de garde du psautier, où des colonnes de nombres sont notées au crayon, et te la tend. « La grille. Je n'en ai plus besoin, je la sais par cœur. » Il avale sa salive. « Le prévôt voit l'envoyé deux nuits par semaine, le mardi et le vendredi, dans la tour de la porte des Sauniers. Il y va seul, en chaise, sans armoiries. Moi, j'attends en bas avec la lanterne. »",
      "Puis il te prend le poignet, et ses doigts sont glacés. « Ma femme, Hermine. Ma fille, Méliande, elle a quatre ans. Le maître d'armes du prévôt fait surveiller ma maison, rue des Tanneurs. Si on apprend que j'ai parlé, ils sont morts avant moi. {{oreille|Je ne vous demande rien, je voulais seulement le dire à quelqu'un|Sortez-les de la ville, et je dirai tout devant le Conseil, en entier, sous serment}}. »",
    ],
    choices: [
      { label: "Lui promettre de sortir sa femme et sa fille de la ville, cette nuit", big: true, to: "IVC_firmin_famille" },
      { label: "Lui dire de tenir encore quelques jours, et partir avec la grille", refuse: true, fx: { flag: "firmin:seul" }, back: "IVC_seance" },
    ] },

  IVC_firmin_famille: { act: "IV", title: "La rue des Tanneurs", place: S, takes: "night",
    text: [
      "La rue des Tanneurs longe le canal du même nom, et l'odeur des cuves de tan prend à la gorge dès le pont. La maison de Dessart est étroite, à colombages, avec une lampe à la fenêtre de l'étage. Hermine attend derrière la porte, un baluchon dans une main, l'enfant endormie dans l'autre bras. Elle a les yeux secs et la bouche serrée.",
      "En face, sous le porche d'une tannerie, un homme est assis sur un tonneau, un manteau sur les épaules, et il ne dort pas. Plus loin, au bout du pont, la lanterne d'un poste du Guet. Le couvre-feu est sonné depuis une heure. Aucune barque ne doit circuler sur les canaux.",
      { with: "lison", text: "Lison regarde le canal des Tanneurs, l'eau noire, les arches basses. « Ma barque est au bassin des Lanternes, dit-elle. Par les canaux, je les mets à la Salve en une heure, et de la Salve aux marais avant l'aube. »" },
      { with: "fauvette", text: "Fauvette regarde les toits. « Par en haut, dit-elle, avec la petite dans un drap noué. Je l'ai fait avec des chats. C'est plus facile, une gamine : elle ne griffe pas. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 5 }, ep: ["perso", 800] }, to: "IVC_firmin_sauve" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Par les toits, avec une enfant" },
        win: { fx: { conf: { fauvette: 5 }, ep: ["perso", 800] }, to: "IVC_firmin_sauve" }, lose: { to: "IVC_firmin_pris" } },
      { label: "Laisse-moi faire", who: "salome", fx: { conf: { salome: 5 }, ep: ["perso", 800] }, to: "IVC_firmin_sauve" },
      { label: "Régler son compte au guetteur d'abord", fight: { title: "Le guetteur de la rue des Tanneurs", enemies: [{ id: "ivc_sbire", n: 1 }],
        win: { fx: { ep: ["perso", 800] }, to: "IVC_firmin_sauve" }, lose: { fx: { pv: -3 }, to: "IVC_firmin_pris" },
        flee: { label: "Lâcher prise et courir vers le pont", dom: "discretion", diff: -10, to: "IVC_firmin_pris" } } },
      { label: "Payer le poste du Guet pour qu'il regarde ailleurs : quatre ducats", fx: { gold: -80, ep: ["perso", 500] }, to: "IVC_firmin_sauve" },
      { label: "Les faire sortir par l'arrière-cour, sans bruit", test: { dom: "discretion", diff: -20, label: "Passer sous les yeux d'un guetteur", help: [{ if: { arch: "voleur" }, v: 15 }, { if: { night: true }, v: 10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IVC_firmin_sauve" }, lose: { to: "IVC_firmin_pris" } },
    ] },

  IVC_firmin_sauve: { act: "IV", title: "Avant l'aube", place: S,
    fx: { flag: "firmin:sauve", quest: "IVC_q_firmin", fac: { conseil: 3 }, regard: { ivc_dessart: "redevable" } },
    text: [
      { with: "lison", text: "La barque de Lison glisse sous les arches sans un bruit de rame. Hermine est couchée au fond, l'enfant contre elle, sous une toile goudronnée. Aux postes du Guet, on entend des hommes jouer aux dés. À la Salve, Lison laisse le courant faire le travail." },
      { with: "salome", without: "lison", text: "Salomé a une plate amarrée au port aux Sauniers, qu'elle a « empruntée » à un pêcheur qui lui devait de l'argent. Elle passe la chaîne du port à la perche, au ras de l'eau, avec la femme et l'enfant sous des filets." },
      "À l'aube, Hermine et Méliande sont chez une cousine, à deux lieues au-dessus de la ville, dans une ferme où l'on ne pose pas de questions. Hermine t'a dit merci une seule fois, sur le seuil, sans te regarder, et c'était assez.",
      "Quand tu rentres, Léonce Dessart t'attend à la chapelle, avec la même tache d'encre sur la joue. Tu lui fais un signe de tête. Il s'assied d'un coup sur une des six chaises et pleure dans ses mains, sans bruit, pendant un long moment. Puis il se relève. « Quand vous voudrez, dit-il. Devant le Conseil entier, s'il le faut. »",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_firmin_pris: { act: "IV", title: "Le sifflet", place: S,
    fx: { flag: "firmin:pris", quest: "IVC_q_firmin" },
    text: [
      "Le guetteur siffle. Trois notes, puis trois encore. Des portes s'ouvrent dans la rue, des lanternes, des hommes en manteau sombre qui courent sans crier. Tu pousses Hermine et l'enfant dans une ruelle vers le canal, et tu te retournes pour faire face.",
      "Hermine et Méliande passent : tu les vois disparaître sous une arche, la mère courbée sur l'enfant. Léonce Dessart, lui, est sorti de la chapelle et accourait vers sa maison. Les hommes du prévôt le prennent au coin de la rue, sous tes yeux, et le jettent dans une chaise fermée qui part au trot vers l'île des Changeurs.",
      "Il a regardé la ruelle où sa femme avait disparu, et il a souri, une seconde, avant qu'on lui mette un sac sur la tête.",
      { after: "ivc:firmin_menace", text: "Tu penses au mur de la chapelle, à ta main sur son col. Tu as eu ce qu'il savait, et tu ne lui as rien rendu." },
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_firmin_prie: { fx: { ep: ["perso", 200] } },
});
Object.assign(C, {
  ivc_c_firmin: { rev: "S", text: "Léonce Dessart, secrétaire du prévôt : le prévôt voit l'envoyé d'Aveline le mardi et le vendredi, la nuit, dans la tour de la porte des Sauniers. C'est Dessart qui chiffre ses lettres, avec le psautier de la chapelle." },
});
Object.assign(ITEMS, {
  ivc_cle_chiffre: { name: "La grille de Dessart", kind: "document", desc: "Une page de garde arrachée au psautier de la chapelle du Conseil, couverte de colonnes de nombres au crayon.",
    text: "*Ps. I : a b c… Ps. II : …*\n\nDes colonnes de nombres et de lettres au crayon, d'une main pressée : la clé du chiffre du prévôt, psaume par psaume." },
});
QUESTS.push({ id: "IVC_q_firmin", act: "IV", kind: "annexe", title: "Le secrétaire qui a peur", start: "IVC_firmin", echo: ["firmin:sauve", "firmin:pris", "firmin:seul"] });

// ==================================================================== an audience with the provost
Object.assign(P, {
  IVC_audience: { act: "IV", title: "Le cabinet du prévôt", place: S,
    text: [
      "Tu t'attends à attendre des jours. L'huissier revient au bout d'une heure : le prévôt te reçoit, tout de suite, seul. Deux gardes en livrée gris et argent te fouillent à la porte et te laissent tout, sauf ta lame.",
      "Le cabinet du prévôt au Conseil est une pièce chaude, tendue de cuir de Cordoue, avec un feu de bois de pommier et une carte du delta sur la table. Haumont Delisle est assis près du feu, une couverture sur les genoux. De près, il est plus vieux encore : la peau du crâne transparente, des taches brunes sur les mains, des yeux gris et très clairs. Il te sourit comme à un neveu.",
      { if: RECHERCHE, text: "« Votre nom est au portail, dit-il, et vous entrez chez moi par la grande porte. J'aime le courage. On en manque, au Conseil. »" },
      "« Vous cherchez la même chose que tout le monde, dit-il. Les feuillets de la Muette. Moi aussi. La différence, c'est que moi, je sais ce qu'il faut en faire. Le Registre {{oreille#ivc_v_audience_registre|doit dormir aux Archives de la République, à l'abri des fous et des marchands|partira pour Aveline dans un coffret à mes armes, et le duc brûlera la Charte devant sa cour, pour qu'on voie qu'il peut}}. Vous me les apportez, et {{oreille|le mandat contre vous sera levé dès demain|le mandat sera levé, et je vous ferai pendre le jour où le duc entrera, par propreté}}. »",
      "Tu {{miroir|écoutes l'offre sans la peser|as pesé l'offre, une seconde de trop, et tu as pensé au mandat avant de penser à la ville}}.",
    ],
    choices: [
      { label: "Promettre, sans rien donner, et prendre ce qu'il offre", fx: { flag: "ivc:promesse_prevot", ep: ["perso", 500] }, to: "IVC_audience_marche" },
      { label: "Refuser poliment", to: "IVC_audience_sortie" },
      { label: "Lui dire que tu sais ce qu'il prépare avec l'envoyé", hide: { not: { has: "prevot:demasque" } },
        test: { dom: "social", diff: -20, label: "Faire peur à un vieux renard", help: [{ if: { item: "ivc_lettre_claire" }, v: 20 }, { if: { has: "firmin:sauve" }, v: 10 }] },
        win: { fx: { flag: "ivc:prevot_peur", ep: ["perso", 800] }, to: "IVC_audience_sortie" }, lose: { fx: { flag: "ivc:prevot_alerte" }, to: "IVC_audience_sortie" } },
    ] },

  IVC_audience_marche: { act: "IV", title: "Le sauf-conduit", place: S,
    fx: { item: "ivc_saufconduit" },
    text: [
      "Le prévôt sourit, sans surprise. Il tire d'un tiroir une feuille déjà écrite, déjà signée, et y ajoute ton nom de sa main, d'une écriture fine et penchée. Il a préparé le papier avant de te faire entrer.",
      "« Un sauf-conduit, dit-il. Quinze jours. Le Guet vous laissera passer les ponts. Au seizième, si je n'ai rien vu venir, je le déchire, et vous avec. » Il souffle sur l'encre. « Nous nous comprenons. Les gens comme nous se comprennent toujours. »",
      "Tu sors du cabinet avec le papier dans ta manche. Il est léger, et il pèse.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_audience_sortie: { act: "IV", title: "L'escalier d'honneur", place: S,
    text: [
      { outcome: "win", text: "Le prévôt reste immobile, mais sa main serre la couverture sur ses genoux. « Vous avez beaucoup d'imagination, dit-il enfin. Sortez. » Il a peur. Tu le vois aux phalanges, blanches sur la laine. Un homme qui a peur se presse, et un homme pressé fait des fautes." },
      { outcome: "lose", text: "Le prévôt rit doucement. « Des lettres ? Des secrétaires ? Les lettres se brûlent, les secrétaires se noient. » Il sonne. « Raccompagnez. » Dans l'escalier, tu sais qu'il fera doubler la garde de sa maison cette nuit." },
      { if: { not: { any: [{ has: "ivc:prevot_peur" }, { has: "ivc:prevot_alerte" }] } }, text: "« Comme vous voudrez, dit le prévôt. Le Guet vous trouvera bien un jour, et ce jour-là, vous viendrez me revoir. » Il retourne à son feu." },
      "Les gardes te rendent ta lame au pied de l'escalier d'honneur. L'un d'eux te glisse, sans te regarder : « Il ne reçoit jamais personne si vite. Il vous attendait. »",
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_audience_registre: { fx: { flag: "ivc:p_cornet", clue: "ivc_c_registre", ep: ["perso", 400] } },
  ivc_l_saufconduit: { fx: { ep: ["perso", 300] } },
});
Object.assign(ITEMS, {
  ivc_saufconduit: { name: "Le sauf-conduit du prévôt", kind: "document", desc: "Quinze jours de libre passage sur les ponts, signés de la main du prévôt Delisle.",
    text: "*Le porteur, {{loupe#ivc_l_saufconduit|chercheur de choses perdues, va et vient pour le service de la République|est à moi. Qu'on le laisse aller, et qu'on me dise où il va}}. Quinze jours.*\n\n*Haumont Delisle, prévôt.*" },
});

// ==================================================================== the envoy: the Swan house, the gifts, the supper and the wine
Object.assign(P, {
  IVC_ambassade: { act: "IV", title: "L'hôtel du Cygne", place: S, backName: "l'hôtel du Cygne",
    text: [
      { first: true, text: "Le duc d'Aveline loue pour son envoyé l'hôtel du Cygne, une grande maison de brique au bord du canal des Orfèvres, et il l'a remplie de ses gens : des soldats en cuirasse bleue à la porte, des valets en bleu dans l'escalier, des cygnes d'argent brodés sur tout ce qui se brode. Les Salvézans passent sur l'autre trottoir. Les enfants des Gouttières crachent dans le canal sous les fenêtres et s'enfuient." },
      { first: true, text: "On te fait attendre dans un vestibule dallé de noir et de blanc. Puis Amaury de Sauveterre descend lui-même l'escalier, en chemise, une plume à la main, de l'encre aux doigts. « Le chercheur de choses perdues, dit-il. On me parle de vous dans toutes les antichambres. Je m'ennuie à mourir dans cette ville, et vous êtes la seule personne qu'on y décrive avec des adjectifs. Vous souperez avec moi. »" },
      { again: true, text: "Le vestibule noir et blanc, les cuirasses bleues. Un valet monte prévenir l'envoyé." },
      { first: true, text: "Il te regarde de haut en bas. « Rassurez-vous, ajoute-t-il, {{oreille#ivc_v_amaury_mandat|je ne livre personne au Guet, ce n'est pas mon métier|je ne vous livrerai pas, vous m'êtes plus utile en liberté, à chercher pour moi ce que le prévôt m'a promis}}. »" },
      { after: "ivc:amaury_mefiant", before: "ivc:amaury_retourne", text: "Le valet qui te reçoit a ordre de ne te servir que de l'eau. Il te le dit avec un sourire d'excuse." },
      { after: "ivc:amaury_retourne", text: "Les soldats bleus te saluent maintenant, d'un petit coup de pique sur la dalle. Amaury a dû leur dire quelque chose." },
    ],
    choices: [
      { label: "Accepter son souper", hide: { seen: "IVC_souper" }, to: "IVC_souper" },
      { label: "Jeter un œil dans le salon des présents, en passant", hide: { seen: "IVC_cadeaux" }, to: "IVC_cadeaux" },
      { label: "Aller lui parler de ce que prépare le prévôt", hide: { any: [{ not: { has: "prevot:demasque" } }, { has: "prevot:dejoue" }, { seen: "IVC_amaury_face" }] }, to: "IVC_amaury_face" },
      { back: "IVC_seance" },
    ] },

  IVC_cadeaux: { act: "IV", title: "Le salon des présents", place: S,
    text: [
      "La porte du salon des présents est ouverte, et le valet qui la garde regarde passer une servante. Sur une longue table couverte de velours bleu, des objets sont alignés avec une étiquette chacun, comme à une vente : des coupes, des chaînes, des bagues, des tabatières, des croix pectorales. Chaque étiquette porte le nom d'une maison du Conseil.",
      "Les croix, surtout, sont belles : une douzaine, {{pie|d'or rouge, émaillées de bleu, au cygne d'Aveline|de plomb doré à la feuille, l'émail est du verre coloré, et le cygne ne tient que par la colle}}. Au bout de la table, le registre des présents est ouvert à la page du jour.",
      "*Pour la maison Fourcaud : une bague. Pour la maison Vernier : un hanap. Pour la maison Marrel : rien, elle refuserait. {{loupe#ivc_l_presents|Pour le prévôt : la chaîne du Cygne, remise en main propre|Pour le prévôt : la chaîne du Cygne et cinq cents florins, à l'hôtel Delisle, pour le capitaine de la porte des Sauniers, qui se paie en florins}}.*",
      { with: "fauvette", text: "Fauvette s'est approchée de la table, les mains derrière le dos, l'air très sage. « Une croix, dit-elle, ça se glisse dans une manche. Personne ne compterait. »" },
    ],
    choices: [
      { label: "Glisser une des croix dans ta manche", once: true, fx: { item: "ivc_croix", mark: 1 }, tag: "Marque +1", stain: true, back: "IVC_ambassade" },
      { back: "IVC_ambassade" },
    ] },

  IVC_souper: { act: "IV", title: "Le souper de l'envoyé", place: S, takes: "evening",
    text: [
      "Amaury de Sauveterre soupe seul avec toi, dans une petite salle tendue de bleu, à une table pour huit. Anguille aux herbes, pâté de héron, fromages du nord, et un vin d'Aveline rouge sombre, épais, qu'un valet verse dès qu'un verre baisse d'un doigt. L'envoyé mange peu, boit beaucoup, et parle avec plaisir, comme un homme qui n'a eu que des conseillers pour lui répondre depuis trois mois.",
      "« Votre ville, dit-il, est la plus belle que j'aie vue, et la plus bête. Quarante maisons qui se volent depuis trois siècles et qui s'étonnent d'être pauvres. {{oreille#ivc_v_amaury_honneur|Votre prévôt est un homme d'État, au moins, lui|Votre prévôt me lève le cœur, et je ne lui serrerai pas la main le jour où il m'ouvrira}}. »",
      "Il fait tourner son verre. « La Grande Basse, j'ai entendu parler de ça. La mer se retire, la vieille ville sort de l'eau, les brocanteurs courent dans la vase avec des lanternes. {{oreille#ivc_v_amaury_basse|C'est un spectacle que je ne manquerai pas pour un empire|C'est la nuit où l'on m'ouvrira la porte des Sauniers, et je serai occupé ailleurs}}. »",
      { with: "salome", text: "Salomé, invitée au bout de la table parce que l'envoyé aime les capitaines, vide son verre d'un trait et le tend au valet. « Votre vin est trop sucré, dit-elle. Mais je vais en reboire, pour être sûre. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "salome", fx: { flag: "ivc:p_vin", conf: { salome: 3 }, ep: ["perso", 800] }, to: "IVC_souper_vin" },
      { label: "Boire avec lui, verre pour verre, et le faire parler", test: { dom: "social", diff: -10, label: "Tenir le vin d'Aveline", help: [{ if: { has: "metier:parole" }, v: 10 }, { if: { arch: "barde" }, v: 10 }, { if: { item: "eau_de_vie" }, v: 10 }] },
        win: { fx: { flag: "ivc:p_vin", ep: ["perso", 800] }, to: "IVC_souper_vin" }, lose: { fx: { flag: "ivc:amaury_mefiant" }, to: "IVC_souper_rate" } },
      { label: "Lui répondre que tu seras aussi à la Grande Basse, et le regarder", hide: { not: { voile: "ivc_v_amaury_basse" } }, fx: { flag: "ivc:p_vin", ep: ["perso", 1000] }, to: "IVC_souper_vin" },
      { label: "Finir ton assiette, le remercier, et partir", back: "IVC_ambassade" },
    ] },

  IVC_souper_vin: { act: "IV", title: "La troisième bouteille", place: S,
    fx: { clue: "ivc_c_porte" },
    text: [
      "À la troisième bouteille, l'envoyé a renvoyé les valets et ôté son pourpoint. Il est accoudé à la table, le menton dans la main, et il parle de son pays avec tendresse, de son duc avec ironie, et du prévôt avec un dégoût qu'il ne cache plus.",
      "« Vous savez ce qu'il m'a demandé ? Gouverneur. Viager. À soixante et onze ans. » Il rit. « Il m'ouvre la porte des Sauniers la nuit de votre Grande Basse, la troisième heure, pendant que toute votre garde regarde la mer sur les digues, et je lui donne la province. Il m'a même promis le Registre de votre reine muette, en prime, comme on ajoute une tarte au marché. » Il se verse un verre, regarde le vin. « {{oreille#ivc_v_amaury_regret|Monseigneur sera content, c'est tout ce qui compte|Je prendrai votre ville sans perdre un homme, et je n'en serai pas fier une seule seconde}}. »",
      "Puis il te regarde, plus net tout à coup, comme si le vin s'était retiré d'un seul coup de ses yeux. « Je vous ai dit tout cela parce que vous ne pouvez rien en faire, dit-il. Qui croira un chercheur de choses perdues contre le prévôt de la République ? » Il sourit. « Bonne nuit. Revenez souper. J'aime vos silences. »",
    ],
    choices: [{ back: "IVC_ambassade" }] },

  IVC_souper_rate: { act: "IV", title: "Le vin d'Aveline", place: S,
    text: [
      "Le vin d'Aveline est traître : il descend comme du lait et remonte d'un coup. À la deuxième bouteille, c'est toi qui parles trop. Tu t'entends rire d'une plaisanterie qui n'en était pas une, et répondre à une question qu'on ne t'avait pas posée.",
      "L'envoyé, lui, a toujours le même regard. « Vous êtes venu{e} me faire boire, dit-il aimablement. C'est touchant. À Aveline, les pages le font mieux. » Il se lève. « Je ne vous en veux pas. Mais je dînerai seul, désormais, quand vous viendrez. »",
      "Un valet te reconduit jusqu'au canal, et te tient le bras sur le pont, parce que tu en as besoin.",
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_amaury_mandat: { fx: { ep: ["perso", 200] } },
  ivc_v_amaury_honneur: { fx: { flag: "ivc:amaury_honneur", ep: ["perso", 300] } },
  ivc_v_amaury_basse: { fx: { ep: ["perso", 400] } },
  ivc_v_amaury_regret: { fx: { flag: "ivc:amaury_honneur" } },
  ivc_l_presents: { fx: { clue: "ivc_c_florins", ep: ["perso", 300] } },
});
Object.assign(C, {
  ivc_c_florins: { rev: "S", text: "Registre des présents de l'hôtel du Cygne : pour le prévôt, la chaîne du Cygne, et cinq cents florins à l'hôtel Delisle, pour le capitaine de la porte des Sauniers, « qui se paie en florins »." },
});
Object.assign(ITEMS, {
  ivc_croix: { name: "Une croix du Cygne", kind: "tresor", price: 1, desc: "Une croix pectorale d'Aveline, émaillée de bleu, au cygne d'argent. Elle est très belle de loin." },
});

// ==================================================================== the night tailing, the Salt-makers' gate tower
Object.assign(P, {
  IVC_filature: { act: "IV", title: "Le couvre-feu", place: S, takes: "night",
    text: [
      "Un mardi, à la nuit, tu guettes la porte de derrière de l'hôtel Delisle, sur l'île des Changeurs. À la onzième heure, une chaise à porteurs sort par la ruelle des Écuyers : une chaise de louage, noire, sans armoiries, avec deux porteurs et un valet qui porte la lanterne fermée. Les rideaux sont tirés. Le valet a la même livrée grise que les gardes du cabinet du prévôt.",
      "Tu la suis de loin. Les rues sont vides : le couvre-feu est sonné, et le Guet tient chaque pont. La chaise passe le pont des Changeurs sans s'arrêter, sur un mot du valet. Toi, au pied du pont, tu as devant toi deux gardes, une lanterne et une chaîne tendue.",
      { if: { all: [{ item: "ivc_saufconduit" }, { not: { voile: "ivc_l_saufconduit" } }] }, text: "Tu as dans ta manche le sauf-conduit du prévôt. Il est fait pour ce genre de chaîne." },
      { with: "lison", text: "Lison regarde sous le pont, où l'eau est noire. « Il y a une barque de passeur amarrée sous la troisième arche, dit-elle. Le passeur dort dedans. »" },
    ],
    choices: [
      { label: "Montrer le sauf-conduit du prévôt aux gardes", hide: { any: [{ not: { item: "ivc_saufconduit" } }, { voile: "ivc_l_saufconduit" }] }, to: "IVC_filature_perdue" },
      { label: "Laisse-moi faire", who: "lison", fx: { conf: { lison: 3 } }, to: "IVC_tour_sauniers" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Par les toits de l'île" }, win: { to: "IVC_tour_sauniers" }, lose: { to: "IVC_filature_perdue" } },
      { label: "Passer sous le pont, accroché{e} aux poutres", test: { dom: "discretion", diff: -20, label: "Sous le nez du Guet", help: [{ if: { arch: "voleur" }, v: 15 }, { if: { item: "corde" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IVC_tour_sauniers" }, lose: { to: "IVC_filature_perdue" } },
      { label: "Dire aux gardes que tu portes un message urgent du lieutenant Gaudrel", hide: { not: { has: "ivc:gaudrel" } }, fx: { ep: ["perso", 400] }, to: "IVC_tour_sauniers" },
      { label: "Bousculer les gardes et passer", fight: { title: "La chaîne du pont", enemies: [{ id: "garde_guet", n: 2 }], spare: true,
        win: { fx: { fac: { conseil: -3 } }, to: "IVC_filature_perdue" }, lose: { fx: { pv: -3 }, to: "IVC_filature_perdue" } } },
    ] },

  IVC_filature_perdue: { act: "IV", title: "La chaise vide", place: S,
    text: [
      { if: { all: [{ item: "ivc_saufconduit" }, { not: { voile: "ivc_l_saufconduit" } }] }, text: "Les gardes lisent le sauf-conduit, te laissent passer, puis l'un d'eux part en courant dans la direction de la chaise. Tu ne comprends que plus tard pourquoi.", else: "Le temps de passer le pont, la chaise a disparu dans le dédale des quais." },
      "Tu cours de rue en rue, au hasard, puis plus au hasard. Tu finis par la retrouver, une heure plus tard, au pied de la tour de la porte des Sauniers : vide, posée sur ses brancards, les porteurs assis dessus à manger du pain. Là-haut, dans la tour, une fenêtre éclairée vient de s'éteindre.",
      "Tu attends dans l'ombre d'une arche. La chaise repart, lourde de nouveau, vers l'île. Un autre homme sort de la tour, enveloppé d'un manteau, et prend à pied la direction du canal des Orfèvres. Tu as manqué la rencontre. Les pierres, elles, y ont assisté.",
    ],
    choices: [{ label: "Monter à la salle de la tour, maintenant vide", to: "IVC_tour_vide" }] },

  IVC_tour_vide: { act: "IV", title: "La salle de garde", place: S,
    text: [
      "L'escalier de la tour est en colimaçon, étroit, usé. En haut, la salle de garde de la porte des Sauniers : une table, deux tabourets, un brasero encore tiède, deux gobelets. Le capitaine de la porte dort ailleurs cette nuit : on le lui a demandé.",
      "Les murs de la salle sont de vieilles pierres de la muraille de la reine, grises et serrées. Le brasero {{echo#ivc_e_tour|craque en refroidissant, rien d'autre|craque, et sous le craquement deux voix reviennent : « Et si votre Conseil se réveille avant ? » « Alors vos gens entreront quand même, et je dirai à la ville que c'est la Banque qui leur a ouvert. On me croira : on hait la Banque »}}.",
      { if: { not: { item: "diapason" } }, text: "Tu fouilles la salle à la lueur de ta lanterne. Dans les cendres du brasero, un coin de papier a échappé au feu : quelques mots d'une écriture fine et penchée, *…troisième heure… les florins au capitaine…* Assez pour savoir qui était là, pas assez pour le prouver." },
    ],
    fx: { flag: "ivc:p_filature", ep: ["perso", 800] },
    choices: [{ back: "IVC_seance" }] },

  IVC_tour_sauniers: { act: "IV", title: "La tour de la porte des Sauniers", place: S,
    fx: { flag: "ivc:p_filature", clue: "ivc_c_porte", ep: ["seance", 2000] },
    text: [
      "La porte des Sauniers est la plus vieille de la ville, une arche basse entre deux tours rondes, au bout du port, là où la route des salines entre dans Salvèze. La chaise est posée au pied de la tour de gauche. Les porteurs mangent du pain, assis sur les brancards. Une fenêtre est éclairée, en haut.",
      "Tu montes l'escalier de la tour à pas de chat, jusqu'à la dernière marche avant la porte de la salle de garde. Il y a un jour sous la porte, et des voix. Le cornet contre ton oreille, tu entends le bois, puis à travers lui.",
      "« La troisième heure, dit le prévôt. La garde sera sur les digues ; la mer, cette nuit-là, descend plus bas que jamais et remonte plus vite. Le capitaine de la porte a ses florins. {{oreille#ivc_v_digues|Mes gens des digues auront fort à faire avec la mer, voilà tout|Les éclusiers de Grisemotte ouvriront les vannes à la quatrième heure, et mes gens des digues ne reviendront pas pour témoigner le lendemain}}. » Un silence. Puis la voix d'Amaury de Sauveterre, plus froide : « Vous parlez de trois cents hommes, prévôt. » « Je parle d'une ville à vous offrir, monsieur l'envoyé. »",
      "« Et le Registre ? » « Le chercheur de la Banque le cherche pour la Banque, et il le trouvera pour moi. Corisande Marrel paie, je ramasse. Je vous le porterai en personne. »",
    ],
    choices: [
      { label: "Redescendre sans un bruit avant qu'ils sortent", test: { dom: "discretion", diff: -10, label: "Un escalier de pierre, la nuit", help: [{ with: "fauvette", v: 10 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { back: "IVC_seance" }, lose: { to: "IVC_rdv_surpris" } },
      { label: "Attendre l'envoyé dans l'ombre, en bas, pour lui parler seul", hide: { not: { voile: "ivc_v_digues" } }, to: "IVC_amaury_face" },
    ] },

  IVC_rdv_surpris: { act: "IV", title: "Le maître d'armes", place: S,
    text: [
      "Une marche craque sous ton pied. La porte s'ouvre d'un coup sur un homme sec, en pourpoint gris, une rapière nue à la main, qui attendait derrière le battant. Le maître d'armes de l'hôtel Delisle. En bas, les deux porteurs ont lâché leur pain et tiré des coutelas de sous la chaise.",
      "« Le chercheur de choses perdues, dit le maître d'armes, sans élever la voix. Vous avez perdu votre chemin. »",
    ],
    choices: [
      { label: "Te battre dans l'escalier", fight: { title: "L'escalier de la tour", enemies: [{ id: "ivc_maitre_armes", n: 1 }, { id: "ivc_sbire", n: 2 }],
        win: { fx: { ep: ["seance", 1500] }, to: "IVC_rdv_fuite" }, lose: { fx: { pv: -5, flag: "ivc:prevot_alerte" }, to: "IVC_rdv_canal" },
        flee: { label: "Sauter par la meurtrière dans le port", dom: "nature", diff: -10, to: "IVC_rdv_canal" } } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "combat", diff: -10, label: "Tibère tient l'escalier" }, win: { fx: { conf: { tibere: 5 } }, to: "IVC_rdv_fuite" }, lose: { fx: { flag: "ivc:prevot_alerte" }, to: "IVC_rdv_canal" } },
    ] },

  IVC_rdv_fuite: { act: "IV", title: "Le port, la nuit", place: S,
    text: [
      { outcome: "win", text: "Le maître d'armes est assis sur une marche, la main sur la cuisse, et le sang coule entre ses doigts. Il te regarde passer sans bouger. Il est d'une race d'hommes qui savent quand le combat est fini." },
      "Tu dévales l'escalier, tu traverses le quai en courant, et le port te prend dans ses ombres, ses cordages, ses tas de sel couverts de bâches. Derrière toi, quelqu'un crie. Puis plus rien.",
      "Le prévôt saura qu'on l'a entendu. Ce qu'on a entendu au juste, il l'ignore. Tu gardes cela dans un coin de ta tête, comme une pièce dans une poche cousue.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_rdv_canal: { act: "IV", title: "La vase du port", place: S,
    text: [
      "L'eau du port est froide comme une main de mort, et noire, et elle sent le sel et la pourriture. Tu remontes en crachant, tu nages à l'aveugle jusqu'à une chaîne d'amarrage, tu t'y pends. Au-dessus, sur le quai, des lanternes cherchent.",
      "Tu attends dans l'eau, entre deux coques, jusqu'à ce que les lanternes s'en aillent. Puis tu te hisses sur un ponton et tu restes couché{e} là, à grelotter, jusqu'à ce que le ciel blanchisse.",
      "Le prévôt sait. Sa maison sera mieux gardée, ses lettres mieux brûlées. Mais toi aussi, tu sais, et cela, tu l'as gardé, même dans l'eau.",
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_e_tour: { fx: { flag: "ivc:p_filature", clue: "ivc_c_banque_accusee", ep: ["perso", 600] } },
  ivc_v_digues: { fx: { flag: "ivc:digues", clue: "ivc_c_digues", ep: ["perso", 600] } },
});
Object.assign(C, {
  ivc_c_banque_accusee: { rev: "B", text: "Le prévôt à l'envoyé, dans la tour des Sauniers : si le Conseil se réveille, il dira à la ville que c'est la Banque qui a ouvert la porte. « On me croira : on hait la Banque. »" },
  ivc_c_digues: { rev: "S", text: "Le prévôt : les éclusiers de Grisemotte ouvriront les vannes à la quatrième heure de la Grande Basse, et les trois cents hommes de garde sur les digues « ne reviendront pas pour témoigner le lendemain »." },
});
Object.assign(ENEMIES, {
  ivc_sbire: { name: "Homme du prévôt", look: "humain", pv: 40, att: 70, def: 26, dmg: 7, desc: "Manteau sombre, coutelas sous le manteau, livrée grise quand il la porte. Payé par l'hôtel Delisle pour les besognes de nuit." },
  ivc_maitre_armes: { name: "Le maître d'armes de l'hôtel Delisle", look: "humain", pv: 110, att: 82, def: 30, dmg: 9, fearless: true, desc: "Un homme sec en pourpoint gris, rapière et main gauche, qui parle bas et ne rate jamais rien deux fois." },
});

// ==================================================================== the provost's house and its secret cabinet
Object.assign(P, {
  IVC_hotel: { act: "IV", title: "L'hôtel Delisle", place: S, backName: "l'hôtel Delisle",
    text: [
      "L'hôtel Delisle occupe la pointe amont de l'île des Changeurs : une façade étroite et haute, de pierre grise, avec une tour d'angle carrée qui porte au sommet la tour d'argent de la famille, sculptée et dorée. Derrière, un jardin muré descend jusqu'à l'eau, avec un ponton privé. Les Delisle habitent là depuis que la République existe. Ils y habitaient déjà avant, sous un autre nom de maison, dit-on.",
      "Le prévôt passe ses journées au Conseil. Le jour, la maison n'a que ses domestiques, deux gardes en livrée grise à la porte de la rue et un troisième qui fait le tour du jardin en sifflant.",
      { if: { has: "ivc:prevot_alerte" }, text: "Depuis la nuit de la tour, ils sont six. Le maître d'armes a fait poser des clochettes sur le mur du jardin, et un dogue dort contre le ponton.", else: "Le gardien du jardin siffle toujours le même air, et fait le tour en un quart d'heure exactement. Tu le comptes deux fois." },
      { with: "fauvette", text: "Fauvette a déjà repéré la gouttière de la tour d'angle. « Elle est neuve, dit-elle. Ça tient. Les vieilles, ça lâche. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Par la gouttière de la tour", help: [{ if: { has: "ivc:prevot_alerte" }, v: -10 }] },
        win: { fx: { conf: { fauvette: 3 } }, to: "IVC_hotel_dedans" }, lose: { to: "IVC_hotel_surpris" } },
      { label: "Escalader le mur du jardin entre deux rondes", test: { dom: "discretion", diff: -10, label: "Le mur des Delisle", help: [{ if: { has: "ivc:prevot_alerte" }, v: -20 }, { if: { arch: "voleur" }, v: 15 }, { if: { item: "corde" }, v: 5 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IVC_hotel_dedans" }, lose: { to: "IVC_hotel_surpris" } },
      { label: "Te présenter à la porte en clerc de la chancellerie, une liasse sous le bras", test: { dom: "social", diff: -10, label: "Un clerc qu'on attendait", help: [{ if: { has: "metier:parole" }, v: 10 }, { if: { seen: "IVC_greffe" }, v: 10 }, { if: { has: "ivc:prevot_alerte" }, v: -10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IVC_hotel_dedans" }, lose: { to: "IVC_hotel_surpris" } },
      { label: "Entrer par la porte des cuisines, avec la clé que t'a donnée Dessart", hide: { not: { has: "firmin:sauve" } }, to: "IVC_hotel_dedans" },
      { label: "Forcer la grille du ponton, de nuit, et faire face à ce qui vient", fight: { title: "Le ponton des Delisle", enemies: [{ id: "ivc_sbire", n: 3 }],
        win: { fx: { flag: "ivc:prevot_alerte", ep: ["perso", 1000] }, to: "IVC_hotel_dedans" }, lose: { fx: { pv: -4 }, to: "IVC_hotel_surpris" },
        flee: { label: "Plonger sous le ponton", dom: "nature", diff: 0, to: "IVC_hotel_surpris" } } },
      { back: "IVC_seance" },
    ] },

  IVC_hotel_dedans: { act: "IV", title: "Le cabinet de travail", place: S,
    text: [
      "Le cabinet de travail du prévôt est au premier étage de la tour d'angle, une pièce carrée aux murs couverts de livres jusqu'au plafond, avec une table de travail nue et un fauteuil tourné vers la fenêtre. Ça sent la cire, le pommier brûlé et le vieil homme. La table est nue : le prévôt range tout.",
      "Le mur du fond est une grande bibliothèque de chêne, {{pie#ivc_p_bibliotheque|chargée de coutumiers et de registres reliés en veau|dont le troisième rayon est un faux : des dos de livres collés sur un panneau, avec une serrure derrière le quatrième}}.",
      "La pièce {{echo#ivc_e_cabinet|sent la cire et ne rend que le bruit de tes pas|garde la voix du prévôt, très douce : « Le troisième rayon, Dessart. Et refermez à double tour, c'est là que je mets ma vieillesse »}}.",
      { if: { has: "firmin:sauve" }, text: "Dessart te l'a dit, à la chapelle : le prévôt garde ce qui compte derrière ses livres. Tu ignores lesquels." },
    ],
    choices: [
      { label: "Ouvrir le troisième rayon", hide: { not: { any: [{ voile: "ivc_p_bibliotheque" }, { voile: "ivc_e_cabinet" }] } }, to: "IVC_cabinet" },
      { label: "Sonder la bibliothèque, rayon par rayon", hide: { any: [{ voile: "ivc_p_bibliotheque" }, { voile: "ivc_e_cabinet" }] },
        test: { dom: "savoir", diff: -10, label: "Trouver le faux rayon", help: [{ if: { has: "metier:mains" }, v: 20 }, { if: { has: "firmin:sauve" }, v: 10 }, { with: "gildas", v: 10 }] },
        win: { to: "IVC_cabinet" }, lose: { to: "IVC_hotel_surpris" } },
      { label: "Descendre aux caves, d'où monte un bruit de chaîne", hide: { any: [{ not: { has: "firmin:pris" } }, { has: "firmin:libere" }] }, to: "IVC_hotel_cave" },
    ] },

  IVC_cabinet: { act: "IV", title: "Le cabinet secret", place: S,
    fx: { flag: "ivc:p_cabinet", item: "ivc_traite", ep: ["seance", 2000] },
    text: [
      "Derrière le faux rayon, un réduit grand comme une armoire, sans fenêtre, tendu de velours vert. Une étagère, un coffret, une écritoire. C'est là que le prévôt garde sa vieillesse.",
      "Sur l'étagère, posée sur un coussin comme une relique, une chaîne d'or à gros maillons plats, chacun gravé d'un cygne, et au bout un pendentif : un cygne d'or aux ailes ouvertes, un saphir à l'œil. {{pie|Elle est lourde et pleine, une vraie chaîne de prince|Elle est d'or plein, toute, et le saphir est vrai : la seule chose honnête que le duc ait envoyée à Salvèze}}.",
      "Le coffret est une cassette de fer cloutée, ouverte : cinq cents florins d'Aveline, en rouleaux cachetés de bleu, prêts à porter. {{pie#ivc_p_cassette|Le fond de la cassette est de fer, comme les côtés|Le fond de la cassette est plus haut d'un doigt que celui du dehors : sous les florins, un double fond}}.",
      "Sur l'écritoire, une feuille de parchemin couverte de ratures, de l'écriture fine et penchée que tu commences à connaître : un brouillon, plié en deux. En tête : *Articles convenus avec Monseigneur d'Aveline.*",
    ],
    choices: [
      { label: "Prendre la chaîne du Cygne", once: true, hide: { has: "tresor:ivc_collier" }, fx: { item: "ivc_tr_collier", clock: { tresors: 1 }, flag: "tresor:ivc_collier" }, to: "IVC_cabinet" },
      { label: "Prendre la cassette, florins compris", once: true, hide: { has: "tresor:ivc_cassette" }, fx: { item: "ivc_tr_cassette", clock: { tresors: 1 }, flag: ["tresor:ivc_cassette", "ivc:florins_pris"] }, to: "IVC_cabinet" },
      { label: "Ouvrir le double fond de la cassette", once: true, hide: { not: { voile: "ivc_p_cassette" } }, fx: { item: "ivc_lettre_corisande", ep: ["perso", 500] }, to: "IVC_cabinet" },
      { label: "Lire le brouillon, et l'emporter", hide: { seen: "IVC_traite" }, to: "IVC_traite" },
      { label: "Refermer le rayon et ressortir comme tu es venu{e}", to: [{ if: { has: "ivc:prevot_alerte" }, to: "IVC_hotel_surpris" }, { to: "IVC_hotel_sortie" }] },
    ] },

  IVC_traite: { act: "IV", title: "Les articles convenus", place: S,
    text: [
      "Tu lis debout, dans le réduit, à la lueur qui vient du cabinet. Le brouillon tient en sept articles numérotés, corrigés, recorrigés, avec des mots barrés et d'autres ajoutés au-dessus. Tu as le texte en entier dans ton sac, maintenant.",
      "Le premier article parle de la porte des Sauniers. Le deuxième, des florins. Le troisième, de la charge de gouverneur, *viagère et héréditaire*, le mot *héréditaire* ajouté d'une autre encre. Le septième, du Registre. Tu reviens au quatrième, parce qu'il est plus court que les autres et plus raturé.",
      { if: { has: "passe:voleur" }, text: "Tu as appris à quatorze ans qu'avant de prendre une chose, on regarde par où on ressort. Odeline te l'a appris la main sur ton col. Tu regardes la porte." },
    ],
    choices: [{ back: "IVC_cabinet" }] },

  IVC_hotel_cave: { act: "IV", title: "La cave de l'hôtel", place: S,
    fx: { flag: "firmin:libere", ep: ["perso", 1000] },
    text: [
      "La cave de l'hôtel Delisle est une cave à vin, voûtée, fraîche, avec des tonneaux en rang. Au fond, enchaîné par une cheville à un anneau du mur, Léonce Dessart est assis sur la paille, la tête sur les genoux. Il a le visage gonflé et deux doigts de la main droite dans un sale bandage. Il relève la tête en entendant tes pas, et il a peur, puis il te reconnaît.",
      "« Hermine ? » dit-il d'abord. Tu lui dis qu'elle est passée. Il ferme les yeux. La cheville cède au troisième coup de pied ; il ne tient pas debout seul, et tu le portes à moitié jusqu'à la porte des cuisines.",
      "« Ils m'ont demandé ce que j'avais dit, et à qui, souffle-t-il dans l'escalier. Je leur ai donné des noms. Des noms de morts, dans le cimetière des Noyés. Ils vont les chercher longtemps. »",
    ],
    choices: [{ label: "Sortir avec lui par les cuisines", to: "IVC_hotel_sortie" }] },

  IVC_hotel_surpris: { act: "IV", title: "Le dogue et le maître d'armes", place: S,
    text: [
      "Une clochette tinte, puis un dogue aboie, puis des pas courent sur le gravier. Le maître d'armes de l'hôtel arrive le dernier, sans courir, une rapière à la main et un manteau jeté sur sa chemise.",
      { if: { seen: "IVC_rdv_surpris" }, text: "« Encore vous, dit-il. Je commence à vous connaître. »", else: "« Un voleur, dit-il. Chez le prévôt de la République. Il y a des gens qui n'ont peur de rien. »" },
    ],
    choices: [
      { label: "Te battre", fight: { title: "Le jardin des Delisle", enemies: [{ id: "ivc_maitre_armes", n: 1 }, { id: "ivc_sbire", n: 1 }],
        win: { fx: { ep: ["seance", 1500] }, to: "IVC_hotel_sortie" }, lose: { fx: { pv: -5, gold: -40, flag: "ivc:prevot_alerte" }, to: "IVC_hotel_jete" },
        flee: { label: "Courir jusqu'au ponton et plonger", dom: "nature", diff: -10, to: "IVC_hotel_jete" } } },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "combat", diff: -10, label: "Salomé et le maître d'armes" }, win: { fx: { conf: { salome: 5 } }, to: "IVC_hotel_sortie" }, lose: { to: "IVC_hotel_jete" } },
    ] },

  IVC_hotel_jete: { act: "IV", title: "À la Salve", place: S,
    text: [
      "Ils te jettent à la Salve depuis le ponton, sans cérémonie, en comptant sur le courant et le froid pour faire le reste. Le courant te roule jusqu'à la pile du pont des Changeurs, où tu t'agrippes à un anneau de fer couvert d'algues. Tu en ressors une heure plus tard, plus léger{e} de ta bourse et de quelques illusions.",
      "Le maître d'armes ne t'a pas tué{e}. Tu te demandes pourquoi, puis tu comprends : un chercheur de choses perdues noyé devant l'hôtel Delisle, la semaine où l'on parle de trahison, ce serait une preuve. Le prévôt n'aime pas les preuves.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_hotel_sortie: { act: "IV", title: "Le pont des Changeurs", place: S,
    text: [
      "Tu ressors de l'île par le pont des Changeurs, au milieu des changeurs qui remballent leurs balances, avec les autres passants, ni plus vite ni plus lentement qu'eux. Personne ne te regarde. Dans ton sac, des choses qui pèsent plus lourd que leur poids.",
      { if: { has: "firmin:libere" }, text: "Dessart marche à côté de toi, appuyé à ton épaule, le chapeau d'un cuisinier sur la tête. Au bout du pont, il se redresse et retire son bras. « Je marcherai seul, dit-il. Je veux marcher seul, au moins jusqu'au Conseil. »" },
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_p_bibliotheque: { fx: { ep: ["perso", 300] } },
  ivc_e_cabinet: { fx: { ep: ["perso", 300] } },
  ivc_p_cassette: { fx: { ep: ["perso", 300] } },
  ivc_l_digues_traite: { fx: { flag: "ivc:digues", clue: "ivc_c_digues", ep: ["perso", 500] } },
  ivc_l_corisande: { fx: { clue: "ivc_c_double_jeu", ep: ["perso", 500] } },
});
Object.assign(C, {
  ivc_c_double_jeu: { rev: "B", text: "Dans la cassette du prévôt, une lettre de Corisande Marrel : la Banque prête au prévôt de quoi tenir le Conseil jusqu'à la Saint-Jean, contre la promesse qu'aucun accord avec Aveline ne se fera sans elle. Elle croit l'acheter." },
});
Object.assign(ITEMS, {
  ivc_tr_collier: { name: "La chaîne du Cygne", kind: "tresor", price: 220, desc: "Une chaîne d'or à maillons plats gravés de cygnes, avec un cygne d'or aux ailes ouvertes et un saphir à l'œil. Le cadeau du duc d'Aveline au prévôt Delisle, pour la ville." },
  ivc_tr_cassette: { name: "La cassette aux florins", kind: "tresor", price: 250, desc: "Une cassette de fer cloutée, et dedans cinq cents florins d'Aveline en rouleaux cachetés de bleu : le prix de la porte des Sauniers, que son capitaine attend encore." },
  ivc_traite: { name: "Les articles convenus", kind: "document", form: "lettre", desc: "Le brouillon, de la main du prévôt, de son accord avec le duc d'Aveline. Sept articles, raturés.",
    text: "*Articles convenus avec Monseigneur d'Aveline.*\n\n*I. La porte des Sauniers sera ouverte la nuit de la Grande Basse, à la troisième heure.*\n\n*II. Cinq cents florins au capitaine de la porte.*\n\n*III. La charge de gouverneur de la province, viagère et héréditaire.*\n\n*IV. {{loupe#ivc_l_digues_traite|La garde des digues sera retenue à son poste par la marée|Les éclusiers de Grisemotte ouvriront les vannes à la quatrième heure ; la garde des digues ne reviendra pas}}.*\n\n*V. Les biens des maisons qui voteront contre, saisis au profit du gouverneur.*\n\n*VI. Le Conseil maintenu, pour la forme.*\n\n*VII. Le Registre dit de la Muette, remis à Monseigneur en mains propres, pour être brûlé devant sa cour.*" },
  ivc_lettre_corisande: { name: "La lettre de Corisande au prévôt", kind: "document", form: "lettre", desc: "Trouvée sous le double fond de la cassette du prévôt. Le cachet aux trois besants.",
    text: "*Mon cher prévôt,*\n\n*Ma maison vous avance de quoi tenir le Conseil jusqu'à la Saint-Jean. {{loupe#ivc_l_corisande|Je ne doute pas de votre loyauté envers la République|En échange, aucun accord avec Aveline ne se fera sans moi. Je vous connais, Haumont : vous vendriez votre mère, mais vous la vendriez à crédit, et le crédit, c'est moi}}.*\n\n*C. M.*" },
});

// ==================================================================== the provost unmasked; how to bring him down
Object.assign(P, {
  IVC_demasque: { act: "IV", title: "Qui vend Salvèze", place: S, takes: 2,
    fx: { flag: "prevot:demasque", ep: ["seance", 3000] },
    text: [
      "Tu t'assieds sur les marches du Beffroi, en face de la façade du Conseil, à l'heure où l'on allume les lanternes. La place est vide, couvre-feu oblige. Un chien maigre fouille le son répandu de la dernière émeute.",
      "Haumont Delisle, prévôt de la République de Salvèze, va ouvrir la porte des Sauniers au duc d'Aveline la nuit de la Grande Basse, et il sera gouverneur le lendemain. Tu le sais, de la même façon que tu sais où Odeline rangeait ses crochets.",
      "Ce que tu sais ne vaut rien tant que tu es seul{e} à le savoir. Le prévôt a le Conseil, le Guet, quarante ans de services rendus et une réputation de vieil homme intègre. Toi, tu as une affiche au portail avec ton nom dessus.",
      { if: { has: "mandat:leve" }, text: "L'affiche a été barrée d'un trait de craie, il est vrai. C'est toujours ça." },
      { with: "lison", text: "Lison s'assied une marche au-dessus de toi. « Aux Joncs, dit-elle, on dirait qu'il parle double pour vendre. C'est la pire chose qu'on puisse dire d'un homme, chez nous. » Elle regarde le Conseil. « Il est vieux. Il ne verra pas grand-chose de son gouvernement. Il le fait pour le plaisir d'avoir eu raison contre tout le monde. »" },
      { with: "tibere", text: "Tibère crache entre ses bottes. « J'ai monté la garde devant ce bonhomme pendant six ans, dit-il. Il me disait bonjour tous les matins, il connaissait le prénom de ma fille. » Il se tait. « Il le connaît toujours, sans doute. »" },
      { with: "salome", text: "Salomé fait sauter une pièce dans sa main. « Gouverneur, dit-elle. À son âge. La mer l'aurait pris plus vite, et pour moins cher. »" },
      { with: "fauvette", text: "Fauvette s'est couchée sur la marche, les mains sous la tête. « Moi, dit-elle, ça ne m'étonne pas. Les vieux riches, ils volent comme nous, mais en grand, et ils appellent ça la politique. »" },
      { with: "gildas", text: "Frère Gildas regarde la tapisserie qu'on devine par les fenêtres du Conseil, la reine cousue sous l'écu. « Il y a trois siècles, dit-il, il y avait un Delisle dans cette salle, la nuit des Comptoirs. Les familles ont de la mémoire. »" },
    ],
    choices: [{ label: "Te lever, et choisir par où l'attaquer", big: true, to: "IVC_dejouer" }] },

  IVC_dejouer: { act: "IV", title: "Quatre façons d'abattre un prévôt", place: S,
    text: [
      { first: true, text: "Il y a quatre forces dans cette ville qui peuvent arrêter le prévôt, et aucune ne t'aime. Le Conseil, qui l'a élu et qui peut le casser, à condition qu'on lui lise des preuves en séance et que dix maisons le demandent. L'envoyé d'Aveline, qui peut refuser la porte qu'on lui ouvre. La rue, les Gouttières et le Guet, qui peuvent tenir la porte des Sauniers cette nuit-là, quoi que dise le prévôt. Et la Banque, que la trahison ruinerait, et qui sait abattre un homme sans un bruit." },
      { again: true, text: "Le Conseil, l'envoyé, la rue, la Banque. Chacun te demandera quelque chose." },
      { if: { has: "ivc:prevot_peur" }, text: "Le prévôt a eu peur, dans son cabinet. Il va se presser. Il te reste moins de temps qu'à lui." },
      { if: { has: "ivc:digues" }, text: "Trois cents hommes sur les digues, la nuit de la Grande Basse. Les éclusiers de Grisemotte. La quatrième heure." },
      { if: { has: "ivc:conseil_echec" }, text: "Le Conseil t'a entendu{e} une fois, et il a voté. La prochaine fois qu'il t'entendra, ce sera après la Saint-Jean." },
      { if: { has: "ivc:amaury_vainqueur" }, text: "Tu as donné ta parole à l'envoyé, l'épée à la main, d'oublier ce que tu sais jusqu'à la Grande Basse. Chaque pas que tu fais contre le prévôt, maintenant, tu le fais en reniant cette parole." },
    ],
    choices: [
      { label: "Le Conseil : faire lire les preuves en séance extraordinaire", hide: { has: "ivc:conseil_echec" }, if: { all: [{ has: "ivc:vernier" }, { any: [{ has: "ivc:fourcaud" }, { has: "ivc:tribun" }] }, { count: PIECES, min: 1 }] },
        why: "Il te faut dix maisons pour convoquer le Conseil (Dame Vernier, et Maître Fourcaud ou le tribun), et au moins une pièce à lire : une lettre, le brouillon, un témoin.", to: "IVC_seance_extra" },
      { label: "L'envoyé : le retourner contre le prévôt", if: { any: [{ has: "ivc:amaury_honneur" }, { has: "ivc:digues" }] }, why: "Tu ne sais rien de l'envoyé qui te donne prise sur lui.", hide: { seen: "IVC_amaury_face" }, to: "IVC_amaury_face" },
      { label: "La rue : tenir la porte des Sauniers avec les Gouttières et le Guet", hide: { seen: "IVC_rue" }, to: "IVC_rue" },
      { label: "La Banque : aller voir Corisande Marrel", hide: { seen: "IVC_banque_rdv" }, to: "IVC_banque_rdv" },
      { back: "IVC_seance" },
    ] },
});

// ==================================================================== by the Council: the signatures, the extraordinary session
Object.assign(P, {
  IVC_fourcaud_signe: { act: "IV", title: "La signature de Fourcaud", place: S,
    text: [
      "Tu poses devant Maître Fourcaud la feuille de convocation : *Les maisons soussignées demandent au prévôt la réunion du Conseil en séance extraordinaire, sous huitaine, pour entendre des pièces touchant la sûreté de la République.* Il faut dix signatures. Dame Vernier en a déjà réuni cinq autour de la sienne.",
      "Fourcaud lit, sourit, et repousse la feuille du bout de sa bague. « La maison Fourcaud {{oreille|ne signe rien qui puisse nuire à la paix de la ville|ne signe rien contre l'homme qui l'a fait riche, à moins qu'on lui montre qu'il l'a fait cocu}}. »",
    ],
    choices: [
      { label: "Lui montrer de près, à la fenêtre, ce que vaut sa bague", hide: { not: { voile: "ivc_p_bague" } }, fx: { flag: "ivc:fourcaud", ep: ["perso", 800] }, to: "IVC_fourcaud_vexe" },
      { label: "Lui parler du blé derrière son mur neuf", hide: { not: { voile: "ivc_v_grain" } }, fx: { flag: "ivc:fourcaud", regard: { ivc_fourcaud: "rancunier" }, ep: ["perso", 600] }, to: "IVC_fourcaud_menace" },
      { label: "Lui offrir le hanap de Sorne pour sa collection", hide: { not: { item: "ivc_tr_hanap" } }, fx: { drop: "ivc_tr_hanap", flag: "ivc:fourcaud", ep: ["perso", 400] }, to: "IVC_fourcaud_vexe" },
      { back: "IVC_fourcaud" },
    ] },

  IVC_fourcaud_vexe: { act: "IV", title: "La plume", place: S,
    text: [
      { if: { voile: "ivc_p_bague" }, text: "Tu lui prends la main, poliment, et tu la tournes vers la lumière. Tu lui montres la bulle d'air prise dans le rubis, la soudure de cuivre sous la feuille d'or. Il retire sa main. Il regarde la bague longtemps. Puis il l'enlève, et la pose sur la table, à côté de l'encrier, comme on pose un insecte mort.", else: "Il soulève le hanap à deux mains, le tourne, cherche le poinçon de Sorne, le trouve. Ses yeux brillent comme ceux d'un enfant devant un gâteau. Il pose la coupe sur son bureau, à sa droite, là où il peut la voir en travaillant." },
      "« Bien, dit-il. » Il trempe sa plume et signe d'un grand paraphe qui déborde sur la marge. « La maison Fourcaud a toujours voté avec le plus fort. Il paraît que ça a changé. »",
    ],
    choices: [{ back: "IVC_fourcaud" }] },

  IVC_fourcaud_menace: { act: "IV", title: "Le mur neuf", place: S,
    text: [
      "Tu lui dis ce que tu sais du mur neuf, et du blé derrière, à voix basse, en regardant la fenêtre qui donne sur le quai, où des portefaix sans travail sont assis par terre. Fourcaud cesse de sourire. Cela change tout son visage, et il paraît plus vieux.",
      "Il signe, d'un paraphe court, presque illisible. « Vous m'avez eu, dit-il en te rendant la feuille. On se reverra quand la ville aura mangé, et qu'elle aura oublié qui lui a ouvert les greniers. Moi, je n'oublierai pas. »",
    ],
    choices: [{ back: "IVC_fourcaud" }] },

  IVC_seance_extra: { act: "IV", title: "La séance extraordinaire", place: S,
    text: [
      "La grande salle est plus pleine encore que le jour de la lettre du duc. Le bruit a couru qu'on allait lire des pièces contre quelqu'un, et chacun a regardé son voisin. Le prévôt préside, sur son fauteuil, une couverture sur les genoux, très calme. Dame Vernier s'est levée la première pour demander qu'on t'entende, au nom des dix maisons.",
      { if: RECHERCHE, text: "Le sergent du Guet au pied des tribunes s'avance pour t'arrêter. Dame Vernier frappe sa canne sur le plancher. « La tribune du Conseil protège qui y parle, dit-elle. C'est la loi de la fondation. Arrêtez-le{e} à la sortie, si vous voulez. » Le sergent recule.", else: "Tu traverses la salle jusqu'au pupitre des orateurs, au milieu du fer à cheval. Quarante maisons te regardent." },
      "Le prévôt te sourit, de loin, avec bienveillance. « Le Conseil vous écoute, dit-il. {{oreille#ivc_v_prevot_calme|Nous n'avons rien à craindre de la vérité|Je vous écoute, et je tiens prêts trois hommes qui jureront que vos papiers sont des faux de la Banque}}. »",
      { with: "tibere", text: "Tibère s'est assis au premier rang des tribunes, son chapeau sur les genoux. Il a mis sa vieille ceinture du Guet." },
    ],
    choices: [
      { label: "Lire tes pièces, une à une, d'une voix égale", big: true,
        test: { dom: "social", diff: -20, label: "Abattre un prévôt devant son Conseil", help: [{ if: { item: "ivc_lettre_claire" }, v: 15 }, { if: { item: "ivc_traite" }, v: 20 }, { if: { any: [{ has: "firmin:sauve" }, { has: "firmin:libere" }] }, v: 20 }, { if: { has: "ivc:amaury_temoin" }, v: 25 }, { if: { has: "ivc:tribun" }, v: 10 }, { if: { has: "ivc:digues" }, v: 10 }, { if: { voile: "ivc_v_prevot_calme" }, v: 10 }] },
        win: { to: "IVC_seance_triomphe" }, lose: { to: "IVC_seance_echec" } },
    ] },

  IVC_seance_triomphe: { act: "IV", title: "La chute du prévôt", place: S,
    fx: { flag: "prevot:dejoue", set: { ivc_dejoue: "conseil", ivc_chute: "cellule" }, fac: { conseil: 15, hautes: 5 }, ep: ["histoire", 5000] },
    text: [
      "Tu lis la lettre en clair. Tu lis les sept articles, le quatrième deux fois. La salle se tait, puis murmure, puis se tait encore. Au quatrième article, un vieux conseiller du banc des Tonneliers se lève : son fils commande une compagnie sur les digues.",
      { if: { any: [{ has: "firmin:sauve" }, { has: "firmin:libere" }] }, text: "Puis Léonce Dessart monte au pupitre, le bras en écharpe ou la tache d'encre sur la joue, et jure sur le psautier vert. Il dit le mardi et le vendredi, la tour, la chaise sans armoiries, le valet noyé. Il garde les yeux sur le psautier." },
      { if: { has: "ivc:amaury_temoin" }, text: "Puis l'envoyé d'Aveline se lève dans sa tribune et dit, d'une voix ennuyée : « Je confirme. Monseigneur ne prend pas les villes par la porte de service. » Et il se rassied." },
      "Le prévôt est resté dans son fauteuil. Quand tu te tais, il se lève, lentement, et la salle se tait avec lui, par habitude. « Messieurs, dit-il, {{oreille#ivc_v_prevot_chute|je remets ma charge entre vos mains, et ma vie à votre justice|j'ai eu raison trop tôt, et vous aurez tort trop tard}}. » Il ôte la chaîne de prévôt de son cou, la pose sur le fauteuil, et descend les trois marches tout seul. Les gardes du Conseil hésitent, puis le prennent par les bras, doucement, comme on aide un vieillard.",
      "Dehors, la nouvelle traverse la place plus vite qu'un homme qui court. Tu entends, par les hautes fenêtres, la foule qui crie, et pour une fois c'est de joie.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_seance_echec: { act: "IV", title: "Des faux de la Banque", place: S,
    fx: { flag: "ivc:conseil_echec", fac: { conseil: -10 } },
    text: [
      "Tu lis, et la salle écoute. Puis le prévôt fait un signe, et trois hommes se lèvent sur les bancs : un notaire, un clerc de la chancellerie, un capitaine de la porte des Sauniers. Ils jurent que l'écriture est imitée, que le psautier est une fable, que le capitaine n'a jamais vu de florins. Le notaire montre deux lettres du prévôt, vraies, et les pose à côté des tiennes. Elles se ressemblent. Elles se ressemblent trop, et c'est assez pour semer le doute.",
      "« La Banque Marrel, dit le prévôt avec tristesse, cherche à abattre l'homme qui refuse de lui livrer la République. Elle a trouvé une voix pour le faire. Je ne lui en veux pas. Elle est désespérée. » Des bancs applaudissent. D'autres se taisent. Dame Vernier reste immobile, les deux mains sur sa canne.",
      "Le vote de confiance passe à vingt-deux voix contre dix-huit. Le prévôt reste prévôt. Mais dix-huit maisons ont voté contre lui à visage découvert, et il les a comptées.",
      { if: RECHERCHE, text: "À la sortie, le sergent du Guet t'attend. Le tribun et ses sauniers font un mur entre lui et toi, assez longtemps pour que tu gagnes la ruelle des Cardeurs." },
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_p_bague: { fx: { ep: ["perso", 200] } },
  ivc_v_prevot_calme: { fx: { ep: ["perso", 300] } },
  ivc_v_prevot_chute: { fx: { ep: ["perso", 300] } },
});

// ==================================================================== by the envoy: turning Amaury de Sauveterre
Object.assign(P, {
  IVC_amaury_face: { act: "IV", title: "L'envoyé, seul", place: S,
    text: [
      { if: { seen: "IVC_tour_sauniers" }, text: "L'envoyé descend l'escalier de la tour seul, enveloppé dans un manteau sans broderie. Quand tu sors de l'ombre de l'arche, il a la main sur son épée avant que tu aies dit un mot. Puis il te reconnaît, et la main se relâche, à moitié.", else: "Amaury de Sauveterre te reçoit dans sa bibliothèque, au premier étage de l'hôtel du Cygne, debout, une main sur la cheminée. Il a renvoyé ses valets. « Vous avez l'air de quelqu'un qui vient dire une chose désagréable, dit-il. Allez-y. Je suis payé pour en entendre. »" },
      "Tu lui dis ce que tu sais. Il t'écoute sans t'interrompre, le visage immobile, jusqu'au moment où tu parles des digues.",
      { if: { has: "ivc:digues" }, text: "« Trois cents hommes, répète-t-il. Il me l'a dit, cette nuit, dans la tour. J'ai cru à une manière de parler. » Il se tait. « {{oreille#ivc_v_amaury_digues|Monseigneur jugera de ce qu'il convient de faire|Je suis venu prendre une ville, pas noyer sa garde dans la vase pour le confort d'un vieillard}}. »" },
      "« Vous me demandez de refuser une ville qu'on m'offre, dit-il enfin. Mon duc la veut. Il la prendra à la Saint-Jean de toute façon, si on ne le paie pas. Qu'est-ce que j'y gagne, à part le plaisir de vous rendre service ? »",
    ],
    choices: [
      { label: "Lui promettre que le duc sera payé à la Saint-Jean, en or de la reine", hide: { not: { voile: "ivc_v_amaury_digues" } }, fx: { flag: ["ivc:promesse_or", "ivc:amaury_retourne"], ep: ["perso", 800] }, to: "IVC_amaury_retourne" },
      { label: "Lui dire qu'un homme qui a de l'honneur n'entre pas par la porte de service", hide: { not: { has: "ivc:amaury_honneur" } },
        test: { dom: "social", diff: -20, label: "Toucher l'honneur d'un cynique", help: [{ if: { has: "ivc:digues" }, v: 20 }, { if: { has: "ivc:p_vin" }, v: 10 }, { if: { has: "ivc:amaury_mefiant" }, v: -10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: "ivc:amaury_retourne", ep: ["perso", 1000] }, to: "IVC_amaury_retourne" }, lose: { to: "IVC_amaury_duel" } },
      { label: "Le provoquer en duel, puisqu'il aime les règles", to: "IVC_amaury_duel" },
      { label: "Le laisser à sa ville, et partir", back: "IVC_seance" },
    ] },

  IVC_amaury_duel: { act: "IV", title: "Au premier sang", place: S,
    text: [
      "« Un duel, dit l'envoyé, et pour la première fois depuis que tu le connais, il a l'air content. Au premier sang. Si vous gagnez, j'écris ce soir à Monseigneur que la porte des Sauniers est un piège, que le prévôt est démasqué, et qu'il vaut mieux attendre la Saint-Jean comme des gens bien élevés. Si je gagne, vous oubliez ce que vous savez jusqu'à la Grande Basse. »",
      "Il ôte son pourpoint, choisit une épée sur le râtelier de la bibliothèque, et pousse les fauteuils contre le mur avec le pied. « Je vous préviens, ajoute-t-il, {{oreille|je suis un escrimeur très ordinaire|j'ai tué deux hommes en duel, et je le regrette pour l'un des deux}}. »",
    ],
    choices: [
      { label: "Prendre l'épée qu'il te tend", fight: { title: "Le duel de l'envoyé", enemies: [{ id: "ivc_amaury", n: 1 }], spare: true,
        win: { fx: { flag: "ivc:amaury_retourne", ep: ["seance", 2000] }, to: "IVC_amaury_retourne" }, lose: { fx: { pv: -3, flag: "ivc:amaury_vainqueur" }, to: "IVC_amaury_perdu" },
        calm: { to: "IVC_amaury_retourne" } } },
    ] },

  IVC_amaury_perdu: { act: "IV", title: "Le premier sang", place: S,
    text: [
      "La pointe de l'envoyé t'ouvre la manche et la peau dessous, proprement, au-dessus du coude. Il recule aussitôt, salue de l'épée, et la repose sur le râtelier. « Premier sang, dit-il. Vous tirez mieux que vous ne le croyez, et moins bien que vous ne le voudriez. »",
      "Il te tend un mouchoir brodé d'un cygne pour le bras. « J'ai votre parole. Je la tiendrai pour vous, si vous l'oubliez. » Il te raccompagne lui-même jusqu'au vestibule. Sur le seuil, il ajoute, sans te regarder : « Les éclusiers de Grisemotte boivent à la Grenouille, à ce qu'on m'a dit. Je ne vous ai rien dit. »",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_amaury_retourne: { act: "IV", title: "La lettre bleue", place: S,
    fx: { flag: ["prevot:demasque", "prevot:dejoue", "ivc:amaury_temoin"], set: { ivc_dejoue: "envoye", ivc_chute: "fuite" }, regard: { amaury: "admiratif" }, ep: ["histoire", 4500] },
    text: [
      "L'envoyé s'assied à son écritoire et écrit, sans brouillon, une lettre d'une page à son duc. Il te la lit à voix haute avant de la cacheter de cire bleue. *La porte des Sauniers est un piège tendu par un homme qui vendra Monseigneur comme il vend sa ville. Je reste à Salvèze jusqu'à la Saint-Jean, pour le compte de la dette, et pour rien d'autre.*",
      { if: { has: "ivc:promesse_or" }, text: "« Vous m'avez promis de l'or, dit-il en scellant. Je n'y crois pas beaucoup. Mais je vous ai entendu{e} le promettre, et j'ai bonne mémoire. Si le duc n'a pas ses quatre millions à la Saint-Jean, je reviendrai, et par la grande porte. »" },
      "Puis il fait une chose que tu n'attendais pas : il se rend au Conseil, en plein comité, et annonce aux maisons réunies que Monseigneur d'Aveline ne traite qu'avec la République, et non avec ses prévôts. Il le dit d'une voix ennuyée, en regardant ses ongles. Seul le prévôt comprend, et il devient gris.",
      "Le lendemain matin, l'hôtel Delisle a les volets clos. Le prévôt est parti dans la nuit, en chaise, sans armoiries, par la porte des Sauniers, la seule qu'il était sûr de trouver ouverte. On dit qu'il va chez une nièce, dans les Combes. Le Conseil élit un prévôt provisoire avant midi.",
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_amaury_digues: { fx: { ep: ["perso", 500] } },
});
Object.assign(ENEMIES, {
  ivc_amaury: { name: "Amaury de Sauveterre", look: "humain", pv: 90, att: 84, def: 32, dmg: 7, fearless: true, desc: "L'envoyé d'Aveline en chemise, une épée de duel à la main. Il se bat comme il parle : sans hausser le ton." },
});

// ==================================================================== by the street: the Gutters and the Watch hold the gate
Object.assign(P, {
  IVC_rue: { act: "IV", title: "La porte des Sauniers", place: S,
    text: [
      "De jour, la porte des Sauniers est une arche basse et sombre, entre deux tours rondes, où passent en grinçant les charrettes de sel de Grisemotte. Les battants sont de chêne ferré, épais d'une main, et la herse se lève et s'abaisse par un treuil dans la tour de gauche. Le capitaine de la porte, un gros homme en cuirasse rouillée, fume sa pipe sur un banc en regardant passer le sel.",
      "Le treuil {{pie#ivc_p_treuil|est un vieux cabestan de chêne, graissé de frais|a un cliquet neuf, en fer d'Aveline, posé la semaine dernière : il bloque la herse en haut, et seule une clé l'en délivre}}.",
      "Pour tenir cette porte la nuit de la Grande Basse contre son propre capitaine, il te faut deux choses : des hommes qui n'obéissent pas au prévôt, et des yeux partout dans le quartier. Le Guet a les uns. Les Gouttières ont les autres.",
      { if: { has: "ivc:tribun" }, text: "Et puis les sauniers. Le tribun te l'a promis : la porte porte leur nom." },
      { if: { has: "ivc:florins_pris" }, text: "Le capitaine de la porte tape sa pipe contre le banc plus souvent qu'il ne faudrait, et regarde la route de l'île à chaque chaise qui passe. Il attend quelque chose qui ne vient pas. Toi, tu sais ce que c'est : cinq cents florins, dans ton sac." },
    ],
    choices: [
      { label: "Les Gouttières, et la Reine qui les tient", hide: { has: "ivc:rue_gouttieres" }, to: "IVC_rue_reine" },
      { label: "Le Guet, et la troisième compagnie du lieutenant Gaudrel", hide: { has: "ivc:rue_guet" }, to: "IVC_rue_guet" },
      { label: "Tout mettre en place pour la nuit de la Grande Basse", big: true, if: { all: [{ has: "ivc:rue_guet" }, { any: [{ has: "ivc:rue_gouttieres" }, { has: "ivc:tribun" }] }] }, why: "Il te faut le Guet, et les Gouttières ou les sauniers du tribun.", to: "IVC_rue_pacte" },
      { back: "IVC_seance" },
    ] },

  IVC_rue_reine: { act: "IV", title: "Le grenier de la Reine", place: S,
    text: [
      "On te fait monter par une échelle qu'on retire derrière toi, dans un grenier de tisserand au-dessus de trois rues. Margaux Pelle, la Reine des Gouttières, est assise sur un fauteuil de prélat volé, un châle de cachemire sur les épaules et des bagues à tous les doigts. Elle t'écoute en épluchant une pomme avec un couteau à manche de nacre.",
      "« La porte des Sauniers, dit-elle. Mes enfants y vont tous les jours, on y vole du sel. » Elle coupe un quartier de pomme. « {{oreille#ivc_v_reine|Je n'ai rien contre le duc d'Aveline, moi|Le duc d'Aveline pend les voleurs aux portes des villes qu'il prend, mes enfants les premiers}}. Combien ? »",
      { with: "fauvette", text: "Fauvette se tient derrière toi, les mains dans le dos, très droite, comme une écolière. La Reine la regarde. « Toi, dit-elle, je te croyais partie avec les gens des marais. » « Je suis revenue, dit Fauvette. » « On revient toujours. »" },
    ],
    choices: [
      { label: "Lui donner la cassette aux florins du prévôt", hide: { not: { item: "ivc_tr_cassette" } }, fx: { drop: "ivc_tr_cassette", flag: "ivc:rue_gouttieres", ep: ["perso", 800] }, to: "IVC_rue_reine_oui" },
      { label: "Lui donner la chaîne du Cygne", hide: { not: { item: "ivc_tr_collier" } }, fx: { drop: "ivc_tr_collier", flag: "ivc:rue_gouttieres", ep: ["perso", 800] }, to: "IVC_rue_reine_oui" },
      { label: "Lui rappeler ce que le duc fait des voleurs", hide: { not: { voile: "ivc_v_reine" } }, fx: { flag: ["ivc:rue_gouttieres", "ivc:dette_reine"], ep: ["perso", 800] }, to: "IVC_rue_reine_oui" },
      { label: "Laisse-moi faire", who: "fauvette", fx: { flag: ["ivc:rue_gouttieres", "ivc:dette_reine"], conf: { fauvette: 5 } }, to: "IVC_rue_reine_oui" },
      { back: "IVC_rue" },
    ] },

  IVC_rue_reine_oui: { act: "IV", title: "La parole de la Reine", place: S,
    text: [
      "La Reine essuie son couteau sur son châle. « Mes enfants seront sur les toits du quartier des Sauniers la nuit de la Grande Basse, dit-elle. Tous. S'il y a des bannières bleues sur la route des salines, on le saura avant le capitaine. S'il y a un homme au treuil qui n'a rien à y faire, il tombera dans le port. »",
      { if: { has: "ivc:dette_reine" }, text: "« Et toi, ajoute-t-elle, tu me devras quelque chose. Je ne sais pas encore quoi. Je te le dirai le jour où j'en aurai besoin, et ce jour-là tu viendras. »", else: "Elle soupèse ce que tu lui as donné, sans le regarder, et le fait disparaître sous son châle." },
    ],
    choices: [{ back: "IVC_rue" }] },

  IVC_rue_guet: { act: "IV", title: "La troisième compagnie", place: S,
    text: [
      "Le poste du Guet des Sauniers est une maison basse contre le rempart, où la troisième compagnie dort en deux tours sur des paillasses. Crespin Gaudrel te reçoit dans la salle d'armes, le casque sous le bras.",
      { if: { has: "ivc:gaudrel" }, text: "Il te reconnaît tout de suite. « La place sans morts », dit-il. Il t'écoute jusqu'au bout. « La capitaine Mabire n'aime pas le prévôt, dit-il. Elle me donnera la nuit de la porte si je la lui demande. Mais il faut que je la lui demande avec une raison. »", else: "Il t'écoute avec méfiance, en regardant ta figure, puis le mur, où ton affiche est peut-être clouée. « Pourquoi je vous croirais ? »" },
      "« {{oreille|Le Guet obéit au prévôt, c'est la règle|Le Guet obéit au prévôt, et le prévôt veut que je charge les affamés, et j'en ai assez de la règle}}. »",
    ],
    choices: [
      { label: "Lui montrer une pièce : la lettre, le brouillon", hide: { not: { any: [{ item: "ivc_lettre_claire" }, { item: "ivc_traite" }] } }, fx: { flag: "ivc:rue_guet", ep: ["perso", 800] }, to: "IVC_rue_guet_oui" },
      { label: "Le convaincre sur parole", test: { dom: "social", diff: -10, label: "Un lieutenant qui hésite", help: [{ if: { has: "ivc:gaudrel" }, v: 25 }, { if: { has: "ivc:digues" }, v: 15 }, { if: { has: "ivc:florins_pris" }, v: 10 }, { with: "tibere", v: 10 }] },
        win: { fx: { flag: "ivc:rue_guet", ep: ["perso", 800] }, to: "IVC_rue_guet_oui" }, lose: { back: "IVC_rue" } },
      { back: "IVC_rue" },
    ] },

  IVC_rue_guet_oui: { act: "IV", title: "La nuit de la porte", place: S,
    text: [
      "Gaudrel remet son casque. « La troisième compagnie prendra la porte la nuit de la Grande Basse, dit-il. La capitaine signera. Le capitaine de la porte ira dormir au poste, avec deux de mes hommes pour lui tenir compagnie. » Il réfléchit. « Il faudra quelqu'un qui connaisse le treuil. »",
      { if: { voile: "ivc_p_treuil" }, text: "Tu lui parles du cliquet neuf, en fer d'Aveline. Il siffle entre ses dents. « Un forgeron le sciera demain. »" },
      { with: "tibere", text: "Tibère serre la main du lieutenant, longtemps. « Je l'ai tenu, ce treuil, dit-il. Il y a vingt ans. Il grince à la troisième dent. »" },
    ],
    choices: [{ back: "IVC_rue" }] },

  IVC_rue_pacte: { act: "IV", title: "La porte tenue", place: S,
    fx: { flag: "prevot:dejoue", set: { ivc_dejoue: "rue", ivc_chute: "rue" }, fac: { hautes: 10, conseil: -5 }, ep: ["histoire", 4000] },
    text: [
      "Les choses se font en deux jours, et sans bruit. Le cliquet du treuil est scié par un forgeron du Guet. Le capitaine de la porte est invité à souper au poste, et il y restera jusqu'au lendemain de la Grande Basse. Sur les toits du quartier des Sauniers, des gamins se relaient pour regarder la route des salines. Au port, des sauniers en sabots réparent des filets devant la porte et ne s'en vont plus.",
      "Le prévôt l'apprend, bien sûr. Il voit que la porte ne lui appartient plus, que les rues ont des yeux, que son capitaine dort au poste. Il ne peut rien dire sans dire pourquoi. Il continue de présider le Conseil, de sourire, de parler de l'honneur de la ville. Il a perdu sa porte, et il garde sa chaîne.",
      "C'est la victoire de la rue : elle laisse le prévôt debout, lui retire sa ville sous les pieds, et garde sa trahison sans nom. Ce qu'il a voulu faire, seuls toi, Gaudrel et quelques voleurs le savent.",
      { if: { has: "ivc:dette_reine" }, text: "Et la Reine des Gouttières attend son dû." },
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_reine: { fx: { ep: ["perso", 300] } },
  ivc_p_treuil: { fx: { ep: ["perso", 300] } },
});

// ==================================================================== by the Bank: Corisande Marrel
Object.assign(P, {
  IVC_banque_rdv: { act: "IV", title: "La voiture noire", place: S,
    text: [
      "Corisande Marrel te trouve la première. Le soir même, sur le quai des Orfèvres, une voiture fermée, noire, sans armoiries, s'arrête à ta hauteur au pas de ses deux chevaux gris. La portière s'ouvre. « Montez », dit une voix de vieille femme.",
      "À l'intérieur, il fait chaud : une chaufferette de cuivre aux pieds de Corisande, une couverture de martre sur ses genoux, une odeur de cire et de lavande. Elle est assise bien droite, les mains croisées sur une canne d'ébène. La voiture repart, au pas, et fait le tour de l'île des Changeurs, lentement, sans fin.",
      { if: { not: { any: [{ has: "lothaire:vaincu" }, { has: "lothaire:mort" }] } }, text: "Sur le siège du cocher, à côté du cocher, il y a un homme en gants gris. Tu le sais sans le voir. Il a l'oreille contre la cloison de cuir.", else: "Le cocher est un vieil homme sourd. Corisande a pris l'habitude, depuis quelque temps, de choisir ses gens pour ce qu'ils n'entendent pas." },
      "« On me dit que vous fouillez dans les affaires du prévôt, dit-elle. Moi aussi. Je fais compter ses plats. Dites-moi ce que vous savez, et je vous dirai si ça vaut quelque chose. »",
    ],
    choices: [{ label: "Lui dire ce que tu sais", to: "IVC_corisande" }] },

  IVC_corisande: { act: "IV", title: "Le tour de l'île", place: S,
    text: [
      "Tu lui dis. Elle écoute jusqu'au bout. À la porte des Sauniers, elle ferme les yeux. À la charge de gouverneur, elle a un petit rire sec. À la Grande Basse, elle rouvre les yeux.",
      "« Si le duc entre, dit-elle, il annule toutes les dettes de la République envers ma maison. C'est ce que font les ducs qui prennent des villes : ils effacent les créanciers, et le peuple les applaudit. Ma maison tombe le lendemain. Huit cents familles qui vivent de ma banque tombent avec elle. » Elle regarde la vitre noire. « {{oreille#ivc_v_cori_trahison|Je déteste les traîtres par principe|Je déteste les traîtres qui me ruinent, et j'aurais aimé être celle qui vend la ville}}. »",
      { if: { not: { any: [{ has: "lothaire:vaincu" }, { has: "lothaire:mort" }] } }, text: "La cloison de cuir frappe deux petits coups. Corisande penche la tête, comme pour écouter. « Mon chercheur dit que vous pensez à autre chose en parlant, dit-elle. À ce que je vais vous demander en échange. Vous avez raison d'y penser. »" },
      "« Je peux l'abattre en un jour, dit-elle. Sa maison me doit plus qu'elle ne vaut. Mais il me faut une raison que mon Conseil d'administration comprenne, et vous, il me faut savoir ce que vous me coûterez. »",
    ],
    choices: [
      { label: "Lui rendre sa propre lettre, trouvée dans la cassette du prévôt", hide: { not: { item: "ivc_lettre_corisande" } }, fx: { drop: "ivc_lettre_corisande", flag: "ivc:dette_corisande", fac: { banque: 10 } }, to: "IVC_banque_coup" },
      { label: "Lui dire que le prévôt compte accuser la Banque d'avoir ouvert la porte", hide: { not: { voile: "ivc_e_tour" } }, fx: { flag: "ivc:dette_corisande", fac: { banque: 10 } }, to: "IVC_banque_coup" },
      { label: "Lui montrer les sept articles", hide: { not: { item: "ivc_traite" } }, test: { dom: "social", diff: -10, label: "Convaincre la Banque", help: [{ if: { has: "ivc:digues" }, v: 10 }, { if: { fac: "banque", min: 0 }, v: 10 }] },
        win: { fx: { flag: "ivc:dette_corisande", fac: { banque: 10 } }, to: "IVC_banque_coup" }, lose: { to: "IVC_corisande_non" } },
      { label: "Lui demander de te croire sur parole", hide: { any: [{ item: "ivc_traite" }, { item: "ivc_lettre_corisande" }, { voile: "ivc_e_tour" }] }, to: "IVC_corisande_non" },
    ] },

  IVC_corisande_non: { act: "IV", title: "Le quai des Orfèvres", place: S,
    text: [
      "Corisande frappe le plafond de sa canne. La voiture s'arrête. « Revenez avec du papier, dit-elle. Je ne prête jamais sur parole, et j'ai soixante-sept ans de bonne santé pour le prouver. »",
      "La voiture repart. Tu restes sur le quai des Orfèvres, devant les vitrines fermées, avec l'odeur de lavande qui s'en va.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_banque_coup: { act: "IV", title: "Le crédit coupé", place: S,
    fx: { flag: "prevot:dejoue", set: { ivc_dejoue: "banque", ivc_chute: "ruine" }, fac: { hautes: -5 }, ep: ["histoire", 4000] },
    text: [
      "« Bien, dit Corisande. Vous me devez une chose, maintenant. Je vous la demanderai le jour où j'en aurai besoin. » Elle frappe le plafond de sa canne. La voiture s'arrête au pont des Changeurs, et tu descends.",
      "Le lendemain, à l'ouverture des comptoirs, la Banque Marrel réclame à la maison Delisle le remboursement immédiat de onze prêts. À midi, les créanciers de la maison Delisle font la queue devant l'hôtel. Le soir, le capitaine de la porte des Sauniers reçoit, de la main d'un commis de la Banque, le double des florins qu'on lui avait promis, et l'ordre de garder sa porte fermée.",
      "Le surlendemain, le prévôt Haumont Delisle remet sa charge au Conseil, pour raison de santé. Le Conseil le remercie de quarante ans de services. On élit à sa place un vieux conseiller de la maison des Tonneliers, qui doit à la Banque ses deux navires et sa maison de campagne.",
      "La ville est sauvée de la porte des Sauniers. Elle appartient à la Banque un peu plus qu'avant. Personne ne saura ce que le prévôt a voulu faire, et Corisande Marrel n'a aucune raison de le dire.",
      "Tu {{miroir|as fait ce qu'il fallait faire, avec les armes qu'on avait|as aimé, une seconde, t'asseoir dans cette voiture chaude, à côté de quelqu'un qui pouvait tout}}.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_cellule: { act: "IV", title: "La Barbacane", place: S,
    text: [
      "On a mis l'ancien prévôt à la Barbacane, la prison du Conseil, dans la meilleure cellule : une pièce voûtée avec une fenêtre grillée sur la Salve, un lit, une table, et du bois pour le feu, parce qu'il est vieux et que le Conseil a des égards. Il est assis près du feu, une couverture sur les genoux, comme dans son cabinet.",
      "« Ah, dit-il. Le chercheur de choses perdues. Vous venez voir ce que vous avez trouvé. » Il te fait signe de t'asseoir. Tu restes debout. « Vous croyez avoir sauvé la ville. Vous l'avez rendue à la Banque, et la Banque la vendra plus cher que moi, et à quelqu'un de pire. {{oreille#ivc_v_cellule|J'aimais cette ville, figurez-vous|J'ai haï cette ville toute ma vie, ses quarante maisons, ses comptes, ses noyés, et je voulais la voir obéir une fois}}. »",
      "Il regarde le feu. « Vous savez ce qu'il y a dans le Registre de la Muette ? Mon ancêtre. Sa main sur la reine, la nuit des Comptoirs. {{oreille#ivc_v_cellule_registre|Je voulais le brûler pour l'honneur de ma maison|Je voulais le donner au duc pour qu'il le brûle, et que ma maison soit la seule à savoir ce qu'il disait}}. »",
      { if: { has: "ivc:promesse_prevot" }, text: "Il sourit. « Vous m'aviez promis les feuillets. Je savais que vous mentiez. Je mentais aussi. C'est ce qui rendait la conversation agréable. »" },
      "Tu {{miroir|le plains un peu, malgré toi|te reconnais un peu en lui, et c'est cela qui te fait reculer vers la porte}}.",
    ],
    choices: [{ label: "Le laisser à son feu", fx: { ep: ["perso", 800] }, back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_cori_trahison: { fx: { clue: "ivc_c_cori_ruine", ep: ["perso", 300] } },
  ivc_v_cellule: { fx: { ep: ["perso", 300] } },
  ivc_v_cellule_registre: { fx: { ep: ["perso", 400] } },
});
Object.assign(C, {
  ivc_c_cori_ruine: { rev: "B", text: "Corisande Marrel : si le duc d'Aveline prend la ville, il annule les dettes de la République envers la Banque, et la Banque tombe le lendemain, avec huit cents familles." },
});

// ==================================================================== lifting the warrant
Object.assign(P, {
  IVC_mandat: { act: "IV", title: "Le greffe criminel", place: S, backName: "le greffe criminel",
    text: [
      { first: true, text: "Le greffe criminel occupe le rez-de-chaussée de la tour nord du Conseil, derrière une porte basse que gardent deux hallebardiers somnolents. Dedans, des casiers de bois jusqu'au plafond, chacun étiqueté d'un nom, et un clerc à manches de lustrine qui mange des noix sur son registre." },
      { first: true, text: "Ton nom a son casier, dans la rangée des *M*, pour *meurtre*. Le clerc te regarde, regarde le casier, te regarde encore. « Vous avez du culot, dit-il. Les pièces se consultent, c'est la loi. On ne dit pas qu'on doit consulter son propre dossier sans se faire prendre. Moi, je mange mes noix. »" },
      { again: true, text: "Le greffe criminel, les casiers, le clerc et ses noix." },
      "Dans le dossier, la feuille de recherche, deux dépositions, et un reçu. La déposition de l'allumeur du quai est signée d'une croix. Elle est écrite {{loupe#ivc_l_deposition|d'une main de clerc ordinaire, à l'encre noire du greffe|d'une main fine et régulière qui n'est pas celle du greffe, à l'encre grise des registres de la Banque, et le nom de Lothaire Brunel est gratté sous la croix}}.",
      "Le reçu est une petite feuille, épinglée au dos : *{{loupe#ivc_l_recu|Frais de témoin, deux liards, payés par le greffe|Vingt ducats remis à Théodore Sauzet pour sa peine, par ordre de la Banque Marrel}}.*",
      { if: { has: "iv:sauzet_aveu" }, text: "L'allumeur Théodore Sauzet a dit, devant un notaire, qu'il dormait sous le pont des Noyés cette nuit-là. Sa déposition est toujours dans le casier, comme si de rien n'était." },
    ],
    choices: [
      { label: "Porter au juge la preuve du faux témoin", hide: { has: "mandat:leve" }, if: { count: [{ voile: "ivc_l_deposition" }, { voile: "ivc_l_recu" }, { has: "iv:sauzet_aveu" }], min: 2 },
        why: "Il te faudrait deux preuves que le témoin a menti : la déposition lue de près, le reçu, ou l'aveu de l'allumeur lui-même.", to: "IVC_mandat_preuve" },
      { label: "Demander à Dame Vernier son service : un mot au juge des causes criminelles", hide: { any: [{ not: { has: "ivc:vernier" } }, { has: "mandat:leve" }] }, to: "IVC_mandat_juge" },
      { label: "Demander à Tibère de dire devant le juge ce qu'il a vu, et pour qui il travaillait", hide: { any: [{ not: { present: "tibere" } }, { has: "tibere:vendu" }, { has: "mandat:leve" }] },
        if: { loyal: "tibere" }, why: "Tibère n'en est pas là avec toi. Il te faudrait sa confiance entière.", to: "IVC_tibere_temoin" },
      { back: "IVC_seance" },
    ] },

  IVC_mandat_preuve: { act: "IV", title: "L'audience du juge", place: S,
    fx: { fac: { banque: -10 }, regard: { lothaire: "hostile" }, set: { ivc_mandat: "preuve" } },
    text: [
      "Le juge des causes criminelles, maître Aiguillon, tient audience trois matins par semaine dans la petite salle du tribunal du Conseil. Il entend ce matin-là un vol de poules, deux rixes, et toi. Il a l'air de préférer les poules.",
      "Tu poses devant lui ce que tu as : la déposition écrite d'une main qui n'est pas celle du greffe, le reçu épinglé au dos, et ce que l'allumeur a fini par avouer. Au banc des parties, un avocat en robe noire se lève pour la Banque Marrel, sans qu'on l'ait appelé. « La Banque, dit-il, {{oreille#ivc_v_avocat|n'a aucun intérêt dans cette affaire, et s'étonne qu'on la nomme|a payé ce témoin, et me paie pour que personne ne puisse le dire tout haut}}. »",
      "Le juge regarde le reçu, puis l'avocat, puis le reçu. Il soupire. Il lève le mandat « faute de témoin recevable », et ordonne qu'on raye la déposition. L'avocat de la Banque sort le premier. Sur le seuil, il se retourne et te regarde, longtemps, pour se souvenir de ta figure.",
    ],
    choices: [{ label: "Prendre l'ordre de levée", to: "IVC_mandat_leve" }] },

  IVC_mandat_juge: { act: "IV", title: "Le juge des causes criminelles", place: S,
    fx: { unflag: "ivc:vernier", set: { ivc_mandat: "vernier" } },
    text: [
      "Dame Vernier t'emmène elle-même chez le juge des causes criminelles, maître Aiguillon, un homme gras qui reçoit en robe de chambre dans une maison trop grande pour lui. Elle reste debout. Elle pose sur la table une reconnaissance de dette signée du juge, et à côté, le dossier de ton affaire.",
      "« Le témoin a été payé par la Banque, dit-elle. Le juge le sait. Moi aussi. Inutile de le prouver. Je demande que le mandat soit levé ce soir, et que cette reconnaissance-ci soit déchirée demain matin. » Le juge regarde la reconnaissance. Il signe l'ordre de levée sans relire le dossier.",
      "Dans la rue, Dame Vernier remonte son col. « Voilà mon service rendu, dit-elle. Je vous dois un ducat de moins. Pour le reste, contre le prévôt, il faudra me convaincre de nouveau. »",
    ],
    choices: [{ label: "Prendre l'ordre de levée", to: "IVC_mandat_leve" }] },

  IVC_tibere_temoin: { act: "IV", title: "Le témoignage de Tibère", place: S, with: "tibere",
    fx: { conf: { tibere: 10 }, set: { ivc_mandat: "tibere" } },
    text: [
      "L'audience est publique, dans la petite salle du tribunal du Conseil, et il y a du monde : le bruit a couru qu'un ancien sergent allait parler. Tibère s'avance à la barre, rasé de frais, sa vieille ceinture du Guet bouclée sur son pourpoint râpé. Il pose son chapeau sur la barre et ses deux mains dessus.",
      "« J'ai constaté la mort d'Odeline Carrus, le matin des Lanternes, pour le Guet, dit-il. Une chute. Le bougeoir remis à sa place, la porte fermée de l'intérieur, pas de trace de lutte sur l'apprenti{e}. Je l'ai écrit. Et à la même époque, je touchais cinq ducats par semaine de la Banque Marrel pour rapporter ce que faisait l'apprenti{e}. Je le dis ici parce que l'homme qui me payait est le même qui a payé le témoin. »",
      "La salle bruisse. Tibère garde le dos à la salle. « {{oreille#ivc_v_tibere_barre|Je n'ai rien d'autre à dire à la cour|Je dis ça pour Rosalie, qui est au fond de la salle, et qui ne m'a pas regardé depuis trois ans}}. »",
      "Le juge lève le mandat sur le banc, faute de témoin honnête. Tibère reprend son chapeau. Dans la rue, il marche vite, sans parler, et tu le laisses marcher.",
    ],
    choices: [{ label: "Le rattraper", to: "IVC_mandat_leve" }] },

  IVC_mandat_leve: { act: "IV", title: "Le mandat levé", place: S,
    fx: { flag: "mandat:leve", ep: ["seance", 2500] },
    text: [
      { if: { is: { ivc_mandat: "preuve" } }, text: "L'ordre du juge tient en deux lignes. Tu le portes toi-même à la capitaine Mabire, qui le lit debout, la plume derrière l'oreille, et le glisse sous son encrier. « J'avais le nez, dit-elle. Je n'avais pas le temps. Vous l'avez eu pour moi. »" },
      { if: { is: { ivc_mandat: "vernier" } }, text: "L'ordre du juge porte un sceau de cire verte et trois lignes : le mandat est levé, faute de témoin. Le mot innocent{e} n'y figure nulle part. À Salvèze, c'est la même chose, à condition de ne pas le lire de trop près." },
      { if: { is: { ivc_mandat: "tibere" } }, with: "tibere", text: "Tu rattrapes Tibère au pont des Lanternes. Il s'est arrêté au milieu, les coudes sur le parapet, et regarde l'eau. « Elle est sortie avant la fin, dit-il. Rosalie. Mais elle était là. » Il crache dans le canal. « Tu es libre. Moi aussi, un peu. »" },
      "Le lendemain, sur le portail du Conseil, au pont des Changeurs, au Beffroi, un clerc passe avec un seau de craie et barre ton affiche d'un trait. Il écrit *levé* dessous, d'une écriture appliquée. Les passants regardent les sacs de grain, et les portes.",
      { if: { has: "passe:voleur" }, text: "Tu as passé ta vie à éviter le Guet, depuis tes quatorze ans. Tu croises un garde sur le pont, et il te salue d'un signe de tête, pour rien. Tu ne sais pas quoi faire de tes mains." },
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_l_deposition: { fx: { ep: ["perso", 300] } },
  ivc_l_recu: { fx: { clue: "ivc_c_temoin_paye", ep: ["perso", 300] } },
  ivc_v_avocat: { fx: { ep: ["perso", 300] } },
  ivc_v_tibere_barre: { fx: { ep: ["perso", 300] } },
});
Object.assign(C, {
  ivc_c_temoin_paye: { rev: "B", text: "Au dos de ton dossier, au greffe criminel : « Vingt ducats remis à Théodore Sauzet pour sa peine, par ordre de la Banque Marrel. »" },
});

// ==================================================================== side quest: the tribune's son (IVC_q_fils)
Object.assign(P, {
  IVC_fils: { act: "IV", title: "La Barbacane", place: S,
    fx: { questSeen: "IVC_q_fils" },
    text: [
      "La Barbacane est une tour ronde et trapue, au pied du pont des Teinturiers, l'ancien ouvrage avancé de la muraille de la reine. Le Conseil y enferme ce qu'il ne sait pas où mettre : les voleurs en attente de jugement, les fous, les débiteurs, et depuis un mois, les émeutiers. On entend, par les meurtrières, des voix qui chantent et d'autres qui pleurent.",
      "Le geôlier est un gros homme assis devant la porte, sur un banc, avec un trousseau de clés sur les genoux et une écuelle de soupe à côté de lui. Tu lui demandes Galmier Vimeux. Il mange une cuillerée avant de répondre.",
      "« Le fils du tribun, dit-il. Au secret. {{oreille#ivc_v_geolier|Sur ordre, et l'ordre est en règle|Sur ordre du prévôt, de vive voix, et je n'ai pas un bout de papier pour le garder}}. Personne ne le voit. »",
      { with: "fauvette", text: "Fauvette compte les meurtrières du deuxième étage, du bout du menton. « La troisième, dit-elle. Les barreaux sont plus neufs que les autres. On en a déjà scié un, là. »" },
    ],
    choices: [
      { label: "Exiger de voir l'ordre écrit qui le garde au secret", hide: { not: { voile: "ivc_v_geolier" } }, fx: { ep: ["perso", 1000] }, to: "IVC_fils_libre" },
      { label: "Poser cinq ducats à côté de son écuelle", fx: { gold: -100, ep: ["perso", 400] }, to: "IVC_fils_libre" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "La troisième meurtrière, de nuit" },
        win: { fx: { conf: { fauvette: 5 }, ep: ["perso", 800] }, to: "IVC_fils_libre" }, lose: { to: "IVC_fils_perdu" } },
      { label: "Revenir de nuit avec une corde et une lime", test: { dom: "discretion", diff: -20, label: "Une évasion par la meurtrière", help: [{ if: { item: "corde" }, v: 10 }, { if: { arch: "voleur" }, v: 15 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IVC_fils_libre" }, lose: { to: "IVC_fils_perdu" } },
      { label: "Prendre les clés au geôlier, de force", fight: { title: "La porte de la Barbacane", enemies: [{ id: "garde_guet", n: 2 }],
        win: { fx: { fac: { conseil: -5 }, ep: ["perso", 800] }, to: "IVC_fils_libre" }, lose: { fx: { pv: -3 }, to: "IVC_fils_perdu" } } },
      { label: "Repartir pour l'instant", back: "IVC_seance" },
    ] },

  IVC_fils_libre: { act: "IV", title: "Galmier", place: S, fx: { meet: "ivc_galmier" },
    fx: { flag: "tribun:fils_libre", quest: "IVC_q_fils", fac: { hautes: 10 }, regard: { ivc_vimeux: "redevable" } },
    text: [
      "Galmier Vimeux sort de la Barbacane en clignant des yeux, un bras serré contre la poitrine : on le lui a démis aux émeutes, et personne ne l'a remis. Il a dix-sept ans, les épaules de son père et pas encore sa barbe. Il se tait tout le long du chemin jusqu'au port aux Sauniers. Il regarde l'eau, les barques, le ciel, comme on regarde des choses qu'on avait cru perdues.",
      "À la Grenouille, le tribun se lève de sa table si vite qu'il renverse sa chope. Il prend son fils dans ses bras et le serre jusqu'à ce que le garçon crie à cause du bras. Puis il se retourne vers toi. « Les Hautes-Eaux te doivent un fils, dit-il. Elles paient leurs dettes. »",
      "Le patron remet le bras du garçon d'un coup sec, sur le comptoir, et lui donne une eau-de-vie. Toute la salle boit à la santé de Galmier. On te fait boire aussi, plusieurs fois.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_fils_perdu: { act: "IV", title: "Les pontons", place: S,
    fx: { flag: "tribun:fils_perdu", quest: "IVC_q_fils", fac: { hautes: -5 } },
    text: [
      "On donne l'alarme avant que tu aies pu atteindre la troisième meurtrière. Des torches, des cris, le tocsin de la tour qui sonne pour une évasion. Tu dois fuir par les quais, et tu n'as pas revu le garçon.",
      "Le lendemain, le prévôt fait transférer Galmier Vimeux, avec six émeutiers, sur les pontons du port, les vieilles coques démâtées où l'on garde les condamnés aux galères d'État. Les pontons sont ancrés au milieu de la Salve, sous la garde de deux barques armées. On y reste cinq ans au moins.",
      "À la Grenouille, le tribun t'écoute raconter jusqu'au bout, sans un reproche. Il pose les deux mains à plat sur la table, et tu vois ses brûlures de sel. « Je vais parler moins fort au Conseil, maintenant, dit-il. Et je vais penser aux vannes. »",
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_geolier: { fx: { ep: ["perso", 300] } },
});
QUESTS.push({ id: "IVC_q_fils", act: "IV", kind: "annexe", title: "Le fils du tribun", start: "IVC_fils", echo: ["tribun:fils_libre", "tribun:fils_perdu"] });

// ==================================================================== side quest: the drowned servant (IVC_q_gilet)
Object.assign(P, {
  IVC_gilet: { act: "IV", title: "Le lavoir des Tanneurs", place: S,
    fx: { meet: "ivc_babette" },
    text: [
      "Le lavoir des Tanneurs est un toit de tuiles sur quatre piliers, au bord du canal, où l'eau arrive brune des cuves de tan et repart plus brune encore. Les laveuses y battent le linge des maisons de l'île à genoux sur des planches, en chantant faux pour couvrir le bruit des battoirs.",
      "On te montre Babette, la sœur du valet noyé : une grande fille rousse aux avant-bras rouges, qui bat un drap comme on bat quelqu'un. Elle s'arrête quand tu dis le nom de son frère.",
      "« Gilet buvait pas, dit-elle. Jamais. Il avait fait le vœu à notre mère. Et il portait toujours sa médaille de saint Nicolas, en étain, à son cou, avec un lacet de cuir. Sur son corps, plus de médaille. » Elle essore le drap à deux mains. « {{oreille#ivc_v_babette|Je veux juste qu'on l'enterre avec|Je veux savoir qui l'a tué, et je veux qu'il ait peur}}. Vous êtes chercheur de choses perdues. Trouvez-la. »",
    ],
    choices: [
      { label: "Aller voir le corps à la chapelle des Noyés", to: "IVC_gilet_noyes" },
      { label: "Lui dire que tu n'as pas le temps", refuse: true, back: "IVC_seance" },
    ] },

  IVC_gilet_noyes: { act: "IV", title: "La chapelle des Noyés", place: S,
    text: [
      "La chapelle des Noyés est au bout du cimetière du même nom, une maison basse et blanchie à la chaux où l'on étend sur des tréteaux les corps que la Salve rend, en attendant qu'on les réclame ou qu'on les enterre aux frais de la paroisse. Il fait froid. Un vieux sacristain y entretient une lampe et fume la pipe pour l'odeur.",
      "Gilet est sur le tréteau du fond, sous un drap. C'est un garçon de vingt ans aux cheveux couleur de paille. Le noyé {{pie#ivc_p_gilet|a la figure gonflée et pâle des corps qui ont séjourné dans l'eau|a la gorge marquée de quatre doigts, et sous l'oreille, en creux, la marque d'une bague à chaton, une petite tour carrée : il était mort avant l'eau}}.",
      "Le sacristain tire sur sa pipe. « On l'a sorti sous le pont des Tanneurs, dit-il. Là où le courant tourne et dépose tout. Les dragueurs y trouvent des choses, des fois. »",
      { with: "salome", text: "Salomé regarde le corps sans détourner les yeux, longtemps. « Sous le pont des Tanneurs, il y a trois pieds de vase, dit-elle. Ce qu'on y lâche y reste. Je peux y descendre. »" },
    ],
    choices: [
      { label: "Laisse-moi faire", who: "salome", fx: { item: "ivc_medaille", conf: { salome: 5 }, ep: ["perso", 800] }, to: "IVC_gilet_fin" },
      { label: "Fouiller toi-même la vase sous le pont, à marée basse", test: { dom: "nature", diff: -10, label: "Trouver une médaille dans la vase", help: [{ if: { has: "metier:mains" }, v: 20 }, { if: { item: "lanterne" }, v: 5 }] },
        win: { fx: { item: "ivc_medaille", ep: ["perso", 800] }, to: "IVC_gilet_fin" }, lose: { to: "IVC_gilet_fin" } },
    ] },

  IVC_gilet_fin: { act: "IV", title: "La médaille de Gilet", place: S,
    text: [
      { if: { item: "ivc_medaille" }, text: "La médaille est là, sous le pont, dans la vase, avec son lacet de cuir arraché net : une petite rondelle d'étain où l'on devine saint Nicolas et trois enfants dans un baquet. Tu la laves dans le canal et tu la portes au lavoir.", else: "Tu fouilles la vase jusqu'à ce que la marée remonte et te chasse. Tu trouves des tessons, des clous, une cuillère, un rat mort, et pas de médaille. Tu retournes au lavoir les mains vides." },
      { if: { item: "ivc_medaille" }, text: "Babette prend la médaille dans sa main rouge et la serre si fort que les bords lui marquent la paume. Puis elle te regarde, et elle attend que tu lui dises le reste.", else: "Babette regarde tes mains vides, puis ta figure. Elle attend que tu lui dises au moins ce que tu sais." },
    ],
    choices: [
      { label: "Lui dire la vérité : la bague à la tour, la gorge, l'hôtel Delisle", hide: { not: { voile: "ivc_p_gilet" } }, fx: { flag: "gilet:verite", quest: "IVC_q_gilet", ep: ["perso", 800] }, to: "IVC_gilet_verite" },
      { label: "Lui dire qu'il est tombé à l'eau, et qu'il n'a pas souffert", fx: { flag: "gilet:paix", quest: "IVC_q_gilet", ep: ["perso", 500] }, to: "IVC_gilet_paix" },
    ] },

  IVC_gilet_verite: { act: "IV", title: "Le battoir", place: S,
    text: [
      "Tu lui dis tout. Babette écoute à genoux sur sa planche, le battoir dans la main. Quand tu as fini, elle se relève, et les autres laveuses se sont tues autour d'elle. « La tour carrée, dit-elle. C'est sur les draps que je lave pour l'hôtel Delisle, brodé dans le coin. Je lave leurs draps depuis trois ans. »",
      "Elle ramasse son panier. « Je vais le dire, dit-elle. À toutes les laveuses de la ville. On lave pour toutes les maisons de l'île. Dans huit jours, toutes les cuisines de Salvèze sauront ce que fait le maître d'armes du prévôt. » Les laveuses reprennent leurs battoirs, toutes ensemble, et cette fois en silence.",
    ],
    choices: [{ back: "IVC_seance" }] },

  IVC_gilet_paix: { act: "IV", title: "Saint Nicolas", place: S,
    text: [
      "Tu lui dis que l'eau était froide, qu'il a dû tomber du quai en portant un pli de nuit, et qu'on ne souffre pas, dans l'eau froide. Babette te regarde longtemps. Tu ignores si elle te croit. Elle hoche la tête.",
      { if: { item: "ivc_medaille" }, text: "Elle noue le lacet de la médaille autour de son propre cou, à deux nœuds. « On l'enterre jeudi, dit-elle. Avec ou sans elle, maintenant. Avec moi, plutôt. »" },
      "Tu {{miroir|l'as épargnée, par bonté|t'es épargné sa colère, et ses questions, et ce qu'elle aurait fait de la vérité}}.",
    ],
    choices: [{ back: "IVC_seance" }] },
});
Object.assign(V, {
  ivc_v_babette: { fx: { ep: ["perso", 200] } },
  ivc_p_gilet: { fx: { clue: "ivc_c_gilet", ep: ["perso", 400] } },
});
Object.assign(C, {
  ivc_c_gilet: { rev: "S", text: "Gilet, le valet qui portait les plis du prévôt, a été étranglé avant d'être jeté à l'eau. Sous son oreille, la marque d'une bague à chaton : une tour carrée, l'emblème des Delisle." },
});
Object.assign(ITEMS, {
  ivc_medaille: { name: "La médaille de Gilet", kind: "objet", desc: "Une petite médaille d'étain de saint Nicolas, au lacet de cuir arraché net, retrouvée dans la vase sous le pont des Tanneurs." },
});
QUESTS.push({ id: "IVC_q_gilet", act: "IV", kind: "annexe", title: "La médaille du noyé", start: "IVC_gilet", echo: ["gilet:verite", "gilet:paix"] });

// ==================================================================== people of this lot
Object.assign(PEOPLE, {
  ivc_vimeux: { name: "Achille Vimeux", qui: "Saunier de Grisemotte, tribun des Hautes-Eaux au Conseil des Comptoirs.", aspect: { allure: "large, tanné", signe: "avant-bras couverts de brûlures de sel", voix: "faite pour porter d'un bassin à l'autre" }, f: false, face: { age: "mur", coif: "court", beard: "barbe", skin: "hale", marks: ["brulure"] }, desc: "Saunier de Grisemotte, tribun des Hautes-Eaux au Conseil des Comptoirs : une voix, et pas de vote." },
  ivc_galmier: { name: "Galmier Vimeux", qui: "Le fils du tribun Vimeux, dix-sept ans.", aspect: { allure: "jeune saunier hâlé" }, f: false, face: { age: "jeune", coif: "court", skin: "hale" }, desc: "Le fils du tribun, dix-sept ans, pris aux émeutes du pont des Teinturiers." },
  ivc_fourcaud: { name: "Maître Fourcaud", qui: "Chef de la maison Fourcaud, le commerce du grain.", aspect: { allure: "rond, rose", signe: "mains baguées", voix: "toujours souriante" }, f: false, face: { age: "mur", coif: "degarni", shape: "rond" }, desc: "Chef de la maison Fourcaud, le commerce du grain. Rond, rose, bagué, toujours souriant." },
  ivc_vernier: { name: "Dame Vernier", qui: "Veuve, tête de la maison de drap Vernier.", aspect: { allure: "soixante ans, droite", habits: "habits de deuil", signe: "canne à pommeau d'ivoire", voix: "sèche" }, f: true, face: { age: "ancien", coif: "chignon", hair: "gris" }, desc: "Veuve, tête de la maison de drap Vernier, au banc de la navette. Une canne à pommeau d'ivoire et une voix sèche." },
  ivc_dessart: { name: "Léonce Dessart", qui: "Le secrétaire du prévôt Delisle.", aspect: { allure: "trente ans, l'air d'en avoir vingt, nerveux", visage: "cheveux en épis, tache d'encre sur la joue", signe: "ongles rongés, psautier de cuir vert" }, f: false, face: { age: "adulte", coif: "court" }, desc: "Le secrétaire du prévôt Delisle, qui chiffre ses lettres avec un psautier, et qui a peur." },
  ivc_sirven: { name: "Maître Sirven", qui: "Greffier du Conseil depuis quarante ans.", aspect: { allure: "vieil homme qui surveille tout", visage: "lunettes de corne", signe: "mains tachées d'encre, sceaux et cire" }, f: false, face: { age: "ancien", coif: "degarni", marks: ["lunettes"] }, desc: "Greffier du Conseil depuis quarante ans. Il garde un an et un jour les plis perdus sous le sceau de la République." },
  ivc_gaudrel: { name: "Crespin Gaudrel", qui: "Lieutenant au Guet, troisième compagnie, poste des Sauniers.", aspect: { allure: "vingt-cinq ans, casque sous le bras", visage: "cheveux collés de sueur" }, f: false, face: { age: "jeune", coif: "court" }, desc: "Lieutenant au Guet, troisième compagnie, poste des Sauniers. Il n'aime pas charger les gens qui ont faim." },
  ivc_babette: { name: "Babette", qui: "Laveuse au lavoir des Tanneurs, la sœur du valet Gilet.", aspect: { allure: "grande fille, bat le linge fort", visage: "cheveux roux", signe: "avant-bras rouges, battoir" }, f: true, face: { age: "jeune", hair: "roux", marks: ["rousseur"] }, desc: "Laveuse au lavoir des Tanneurs, la sœur de Gilet, le valet noyé qui portait les plis du prévôt." },
});

// @@FIN
module.exports = { passages: P, extras: { people: PEOPLE, items: ITEMS, enemies: ENEMIES, clues: C, quests: QUESTS, veils: V } };
