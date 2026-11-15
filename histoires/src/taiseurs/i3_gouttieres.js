// Lot i3 of "Le Trésor des Taiseurs" (act I): the Gouttières (thieves' quarter, roofs, canal, singing fountain,
// drowned bell, the Queen of the Gouttières) and the Halles (fences, fake relics, the scrap stall); Fauvette and the
// magpie's eye (oeil_pie), her debt, her testimony (a monk leaving the shop at midnight); four side quests.

var TIB = { with: "tibere", v: 10 }, LIS = { with: "lison", v: 10 }, GIL = { with: "gildas", v: 10 }, FAU = { with: "fauvette", v: 15 };
// The treasures of this lot that the Queen of the Gouttières takes in payment (her scales weigh them).
var TRESORS = [["ig_tr_broche", "la broche aux grenats"], ["ig_tr_anneau", "l'anneau de la cloche noyée"], ["ig_tr_nef", "la nef d'argent"],
  ["ig_tr_compas", "le compas de marée"], ["ig_tr_sceau", "le sceau des fontainiers"], ["ig_tr_bague", "la bague de deuil"], ["ig_tr_soie", "le drap de soie brodé"]];
function troc(to) {
  return TRESORS.map(function (t) { return { label: "Poser sur la balance " + t[1], hide: { not: { item: t[0] } }, fx: { drop: t[0] }, to: to }; });
}
var P = {};

// ==================================================================== the Gouttières: crossroads, tavern, the singer
Object.assign(P, {
  IG_entree: { act: "I", title: "Les Gouttières", place: "gouttieres", hub: true, backName: "les Gouttières",
    text: [
      { first: true, text: "Les Gouttières commencent rue des Tanneurs, à l'endroit précis où le pavé s'arrête. Suivent la terre battue, des planches posées sur la boue, et des maisons qui penchent l'une vers l'autre jusqu'à se toucher par le haut. Là-haut, des passerelles de planches vont d'une lucarne à l'autre, des cordes à linge servent de rampes, et tout un peuple circule à hauteur des cheminées. En bas, l'eau des toits tombe en fils sur les têtes ; elle a donné son nom au quartier." },
      { first: true, text: "Un gamin assis sur une borne te regarde passer en comptant tes poches ; il en trouve trois, à en juger par ses yeux. Une femme vide un seau par une fenêtre du second. Au bout de la rue, le canal des Gouttières fait un coude, vert et lent, et quelque part derrière les toits une fontaine coule avec un bruit de voix basses." },
      { again: true, when: "day", text: "Les Gouttières : la boue, les planches, le linge tendu entre les toits. L'eau tombe en fils devant les portes, et là-haut, sur les passerelles, quelqu'un siffle pour annoncer ton passage." },
      { again: true, when: "night", text: "Les Gouttières, la nuit. Une lanterne à une fenêtre sur dix, et des pas sur les toits, plus nombreux que dans la rue. On marche au milieu de la ruelle, loin des porches." },
      { first: true, with: "tibere", text: "Tibère a remonté son col. « J'ai fait trois rafles ici, du temps du Guet. On m'a vidé un pot de chambre sur le casque à chaque fois. Le même pot, je crois bien. »" },
      { first: true, with: "lison", text: "Lison lève le nez vers les passerelles. « Là-haut, ils nous ont déjà vus, pesés et vendus deux fois. Marche comme quelqu'un qui habite ici. »" },
      { first: true, with: "gildas", text: "Frère Gildas rabat sa capuche. Trois enfants le suivent un moment en chantonnant un bénédicité de travers, puis se lassent et remontent sur un auvent." },
      { after: "fauvette:amie", without: "fauvette", text: "Depuis que Fauvette te connaît, les gamins des bornes te saluent d'un claquement de langue, et les regards glissent sur tes poches sans s'y arrêter." },
      { with: "fauvette", text: "Fauvette marche devant toi, les mains dans les manches. Les gens des Gouttières s'écartent pour elle avec un mot, une moquerie, un signe du menton vers les toits." },
      { after: "ig:reine_amie", text: "Sur le seuil de la Cour des Pelles, Boscot lève deux doigts à ton passage. C'est le salut que la Reine accorde aux siens." },
    ],
    choices: [
      { label: "Le Pot Fêlé, la taverne au coude du canal", to: "IG_pot" },
      { label: "La Cour des Pelles, où règne la Reine des Gouttières", to: "IG_cour" },
      { label: "Monter sur les toits par l'escalier des Fileuses", to: "IG_toits" },
      { label: "Le canal des Gouttières, par la ruelle des Fileuses", to: [{ if: { not: { seen: "IG_merlot" } }, to: "IG_merlot" }, { to: "IG_canal" }] },
      { label: "La place de la Fontaine-Sourde, d'où vient ce bruit de voix", to: "IG_fontaine" },
      { label: "Chercher Fauvette sur les toits", hide: { any: [{ not: { has: "ig:fauvette_connue" } }, { present: "fauvette" }] }, to: "IG_fauvette_toit" },
      { label: "Les Halles, de l'autre côté du pont aux Tripes", to: "IG_halles" },
      { back: "I_hub" },
    ] },

  IG_pot: { act: "I", title: "Le Pot Fêlé", place: "gouttieres", backName: "le Pot Fêlé",
    text: [
      { first: true, text: "La taverne tient dans une ancienne teinturerie : les cuves ont été comblées, et l'on boit assis sur leurs margelles, sous des poutres encore bleues. Le pot qui sert d'enseigne pend au-dessus de la porte, fendu du col au cul, cerclé de fil de fer. Une grande femme aux avant-bras de laveuse essuie le comptoir avec un chiffon qui le salit. C'est Hermance, la patronne, et elle te regarde entrer comme on regarde la pluie." },
      { again: true, text: "Le Pot Fêlé, ses cuves comblées, ses poutres bleues. Hermance lève les yeux, puis les rabaisse sur son chiffon." },
      { when: "night", text: "Le soir, la salle est pleine de gens qui sentent le toit : la suie, la mousse, l'ardoise mouillée. Au fond, une vieille femme chante pour un liard, et seuls l'écoutent ceux qui écoutent tout." },
      { when: "day", text: "Le jour, il y a surtout des débardeurs entre deux chargements, et une vieille femme au fond qui chantonne pour elle-même en épluchant des navets." },
      "« On a de la bière, de la petite et de l'eau du canal, dit Hermance. La troisième est gratuite. Qu'est-ce que tu cherches, qui se perd chez nous ? »",
      { with: "tibere", text: "Tibère s'accoude au comptoir. « Un pichet ? {{oreille|Non, je bois plus pendant le service|Oui, et un deuxième, et une place à la table de dés du fond}}. » Il tourne le dos à la table de dés avec un effort visible." },
      { with: "lison", text: "Lison s'assied sur une margelle, sa gaffe en travers des genoux. Deux hommes qui occupaient la margelle se lèvent et vont boire ailleurs." },
    ],
    fx: { meet: "ig_hermance" },
    choices: [
      { label: "Payer une bière et demander qui vend des choses volées sur le quai des Lanternes", hide: { seen: "IG_pot_rousse" }, fx: { gold: -1 }, to: "IG_pot_rousse" },
      { label: "Demander à Hermance comment on entre chez la Reine des Gouttières", hide: { seen: "IG_pot_reine" }, to: "IG_pot_reine" },
      { label: "Écouter la vieille femme qui chante, au fond", to: "IG_chanteuse" },
      { back: "IG_entree" },
    ] },

  IG_pot_rousse: { act: "I", title: "Le Pot Fêlé", place: "gouttieres", backName: "le comptoir du Pot Fêlé",
    text: [
      "Hermance pose la bière, prend ton liard, le mord. Elle écoute ta question sans s'arrêter d'essuyer. Tu parles de la nuit des Lanternes, de la boutique Carrus, de ce qui a disparu de l'établi.",
      "« Le lendemain de la fête, dit-elle, une fille a payé sa tournée avec une bague d'argent. Toute la salle a bu. Une rousse. » Elle repose le chiffon. « La rousse ? {{oreille#ig_he_rousse|Je la connais de vue, sans plus|C'est Fauvette, elle dort dans la cage aux pigeons de la tour des Drapiers, et je l'ai nourrie deux hivers}}. »",
      "« La Reine la cherche aussi, ajoute-t-elle plus bas. Elle lui doit de l'argent. Quand la Reine cherche quelqu'un, je conseille aux gens de se faire tout petits. »",
      { if: { has: "passe:voleur" }, text: "Tu connais ce genre de tournée. Tu en as payé une, à quatorze ans, avec une timbale volée sur un étal. C'est ce qu'on fait quand on a peur de ce qu'on porte : on s'en débarrasse en le buvant avec les autres." },
      { after: "voile:ig_he_rousse", text: "Hermance voit ton regard et durcit le sien. « Tu ne tiens pas ça de moi. Si tu lui fais du mal, je saurai d'où tu sors, et le canal est profond devant ma porte. »" },
    ],
    fx: { flag: "ig:piste", questSeen: "IG_oeil" },
    choices: [
      { label: "Promettre à Hermance de rien faire de mal à la fille", hide: { not: { voile: "ig_he_rousse" } }, fx: { flag: "ig:hermance_promesse" }, back: "IG_pot" },
      { back: "IG_pot" },
    ] },

  IG_pot_reine: { act: "I", title: "Le Pot Fêlé", place: "gouttieres", backName: "le comptoir du Pot Fêlé",
    text: [
      "Hermance rit, ce qui lui découvre deux dents de plomb. « La Reine ? Margaux Pelle. Elle tient la Cour des Pelles, l'ancienne fabrique de pelles derrière le lavoir. Tout ce qui se vole à Salvèze passe par sa balance, et elle prend un liard par ducat à tous ceux qui travaillent sur les toits. »",
      "« Pour entrer chez elle, {{oreille#ig_he_mot|faut lui apporter quelque chose qui vaut le dérangement|faut dire aux casseurs de la porte qu'on vient « rendre la monnaie » ; c'est le mot de la semaine, il change le lundi}}. Sinon ils te pèsent avant elle, et ils pèsent mal. »",
      { with: "tibere", text: "Tibère grimace. « Son homme de porte s'appelle Boscot. Je l'ai coffré deux fois. Il m'a cassé un doigt la seconde. On devrait se reconnaître. »" },
      "Elle reprend son chiffon. « Margaux est juste, à sa façon. Elle pèse tout le monde avec les mêmes poids. Seulement, c'est elle qui a fondu les poids. »",
    ],
    fx: { flag: "ig:reine_connue" },
    choices: [{ back: "IG_pot" }] },

  IG_chanteuse: { act: "I", title: "La chanteuse du Pot Fêlé", place: "gouttieres", backName: "le fond de la salle",
    text: [
      { first: true, text: "Elle s'appelle Huguette Clopin, dit-elle, et elle a quatre-vingts ans ou à peu près. Elle a une voix de verre fêlé et des mains qui tremblent sur un bol de bois où dorment trois liards. « Une chanson des toits, pour un liard ? Celle des Gouttières. Les gamins la chantent sur les faîtes, et ils la chantent mal. »" },
      { again: true, text: "Huguette Clopin te reconnaît à ta voix et tapote son bol." },
      { first: true, text: "Tu poses un liard. Elle ferme les yeux et chante, lentement, en marquant la mesure du pied :" },
      { first: true, text: "« Sur les toits de la Muette, / {{oreille#ig_hu_chanson|on se tait pour mieux chanter|les Vasse gardent sa voix aux Joncs-Bas}}, / qui a langue n'a pas tête, / {{oreille#ig_hu_cle|qui se tait garde la clé|qui se tait sait où dort la clé de la reine}}. »" },
      { first: true, text: "Les mots tremblent dans la bouche de la vieille femme comme une mèche sous le vent. Elle chante une chanson, et elle en pense une autre, plus ancienne, qu'elle tient de quelqu'un." },
      { with: "lison", text: "Lison écoute sans bouger. Quand la vieille reprend le refrain, elle dit : « Elle {{oreille#ig_li_faux|chante faux|chante juste, et elle ne devrait pas}}. » Puis elle laisse un liard dans le bol." },
      { with: "gildas", text: "Frère Gildas écoute la chanson les mains jointes dans les manches. À la fin, il dit seulement : « C'est un vieil air. Les moines du Mont en chantent un qui lui ressemble, aux complies. »" },
    ],
    fx: { meet: "ig_huguette", gold: -1 },
    choices: [
      { label: "Lui demander d'où elle tient cette chanson", hide: { seen: "IG_chanteuse_origine" }, to: "IG_chanteuse_origine" },
      { back: "IG_pot" },
    ] },

  IG_chanteuse_origine: { act: "I", title: "La chanteuse du Pot Fêlé", place: "gouttieres", backName: "le fond de la salle",
    text: [
      "Huguette Clopin passe son pouce sur le bord du bol. « Ma grand-mère la tenait {{oreille#ig_hu_grandmere|d'une chanteuse des rues, comme moi|d'une batelière des Joncs-Bas, qui lui avait fait jurer de la chanter faux devant les gens}}. Elle disait qu'elle était aussi vieille que la fontaine. »",
      "« La fontaine de la place, celle qu'on appelle Sourde ? Elle chante, elle aussi, au lever du jour, quand on ouvre les vannes du haut quartier. On dit qu'elle a été faite pour la reine, et qu'elle chante sa chanson à elle. Moi, j'entends de l'eau. Mais j'ai de vieilles oreilles. »",
      { after: "voile:ig_hu_chanson", text: "Tu répètes, à mi-voix, les mots de dessous : *les Vasse gardent sa voix aux Joncs-Bas*. La vieille femme s'arrête de respirer un instant. « Qui t'a appris ça ? On ne le chante plus comme ça depuis ma grand-mère. »" },
      { if: { has: "passe:trouve" }, text: "Tu as entendu cet air, petit{e}. Avant Odeline, avant le quai. Tu ne sais pas où, et l'air, lui, le sait peut-être." },
    ],
    choices: [{ back: "IG_pot" }] },
});

// ==================================================================== the cut-purse, the Queen's court
Object.assign(P, {
  IG_merlot: { act: "I", title: "La ruelle des Fileuses", place: "gouttieres", backName: "la ruelle des Fileuses",
    text: [
      "La ruelle des Fileuses descend vers le canal entre deux murs si proches que tu les touches des deux coudes. Des écheveaux de laine sèchent au-dessus, et l'eau qui en tombe est bleue. Un gamin arrive en sens inverse en courant, glisse sur une planche, se rattrape à toi.",
      "« Pardon, m'sieur-dame. » Il repart. Ta ceinture est plus légère. Le cordon de ta bourse pend, tranché net, et le gamin file vers le canal, maigre comme un clou, une casquette de feutre enfoncée jusqu'aux yeux.",
      { with: "lison", text: "Lison a déjà tendu sa gaffe en travers de la ruelle, à hauteur de cheville. Le gamin saute par-dessus comme un chat et prend de l'avance." },
      { with: "tibere", text: "Tibère jure et part au trot, en soufflant comme un soufflet de forge. Il a passé l'âge de rattraper quiconque, et il le sait." },
    ],
    choices: [
      { label: "Le rattraper avant le canal", test: { dom: "discretion", diff: -10, label: "Courir sur les planches sans glisser", help: [LIS] },
        win: { to: "IG_merlot_pris" }, lose: { fx: { gold: -3 }, to: "IG_merlot_file" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Un coup de gaffe dans les jambes" }, win: { to: "IG_merlot_pris" }, lose: { fx: { gold: -3 }, to: "IG_merlot_file" } },
      { label: "Le laisser filer : ce n'était qu'une poignée de liards", fx: { gold: -3 }, to: "IG_merlot_file" },
    ] },

  IG_merlot_file: { act: "I", title: "La ruelle des Fileuses", place: "gouttieres",
    text: [
      "Le gamin disparaît dans une porte basse. Quand tu y arrives, la porte donne sur une cour, la cour sur une autre ruelle, et la ruelle sur le canal où trois barques de laveuses se balancent. Ta bourse, elle, a quitté le quartier par les toits.",
      "Une laveuse rit sans lever les yeux de son linge. « C'est Merlot. Il travaille pour la Reine, comme tout le monde ici. Si tu veux tes liards, va les demander à la Cour des Pelles. Ils y sont déjà. »",
      { if: { has: "poids:dette" }, text: "Une petite somme. Un peu de ce que tu dois, tout de même." },
    ],
    fx: { flag: "ig:merlot_vole" },
    choices: [{ label: "Continuer jusqu'au canal", to: "IG_canal" }] },

  IG_merlot_pris: { act: "I", title: "La ruelle des Fileuses", place: "gouttieres",
    text: [
      "Tu le tiens par le col au bout de la ruelle, à deux pas de l'eau. Il pèse le poids d'un chat mouillé et se débat comme un chat. Ta bourse tombe de sa manche. Puis deux silhouettes se détachent d'un porche, plus grandes, avec chacune une lame courte qui brille dans le poing.",
      "« Lâchez-moi, crie le gamin, {{oreille#ig_me_cri|j'ai rien fait, j'ai rien pris|si la Reine apprend que je me suis fait prendre, Boscot me casse les doigts}} ! »",
      "Les deux autres approchent sans se presser. Ils ont seize ans, peut-être, et des couteaux à écailler. « Rends-nous le petit, dit l'un, et garde ta bourse. On est des gens raisonnables. »",
      { with: "gildas", text: "Frère Gildas se place à côté de toi, son bâton planté dans la boue. Il se tait. Les deux garçons regardent le bâton, puis la bure, et hésitent." },
    ],
    choices: [
      { label: "Dire au gamin que Boscot n'en saura rien, s'il te parle", hide: { not: { voile: "ig_me_cri" } }, fx: { ep: ["perso", 150] }, to: "IG_merlot_parle" },
      { label: "Lui proposer un marché : un liard contre ce qu'il sait du quartier", test: { dom: "social", diff: -10, label: "Parler au gamin plus vite que ses amis", help: [TIB, GIL] },
        win: { fx: { gold: -1 }, to: "IG_merlot_parle" }, lose: { fx: { gold: -5, pv: -2, note: "Le gamin te mord le poignet, les deux grands foncent, et la ruelle est trop étroite pour reculer." }, to: "IG_merlot_file" } },
      { label: "Garder le gamin et faire face aux deux autres", fight: { title: "Les moineaux de la ruelle", enemies: [{ id: "coupe_bourse", n: 2 }],
        win: { fx: { ep: ["perso", 200] }, to: "IG_merlot_parle" }, lose: { fx: { gold: -5 }, to: "IG_merlot_file" },
        flee: { label: "Lâcher le gamin et reculer", dom: "discretion", diff: 0, to: "IG_merlot_file" } } },
      { label: "Le lâcher : la bourse te suffit", to: "IG_canal" },
    ] },

  IG_merlot_parle: { act: "I", title: "La ruelle des Fileuses", place: "gouttieres",
    text: [
      "Les deux grands sont partis. Le gamin s'appelle Merlot, il a onze ans ou douze, et il s'assied sur une bitte d'amarrage en se frottant le cou. « Tu cherches quoi ? Tout le monde cherche quelque chose. La Reine cherche la rousse. L'homme aux gants gris aussi. »",
      "« La rousse, c'est Fauvette. La meilleure sur les toits. Elle m'a appris à couper un cordon sans toucher la ceinture. » Il hésite. « Elle {{oreille#ig_me_nid|dort jamais deux fois au même endroit|dort dans la cage aux pigeons de la tour des Drapiers, et elle a un truc au cou qu'elle regarde tout le temps}}. »",
      "« Un gant gris est passé hier au Pot, ajoute-t-il. Il a donné un liard à chaque gamin qui lui dirait où elle dort. J'ai pris le liard. J'ai rien dit. » Il crache. « Il a de belles mains, mais il sent la banque. »",
    ],
    fx: { meet: "ig_merlot", flag: "ig:piste", questSeen: "IG_oeil" },
    choices: [
      { label: "Lui laisser un liard pour son silence", fx: { gold: -1, flag: "ig:merlot_ami" }, to: "IG_canal" },
      { label: "Continuer jusqu'au canal", to: "IG_canal" },
    ] },

  IG_cour: { act: "I", title: "La Cour des Pelles", place: "gouttieres", backName: "la Cour des Pelles",
    text: [
      { first: true, text: "Derrière le lavoir, une voûte basse donne sur une cour pavée de briques. C'était une fabrique de pelles : il en reste des centaines, plantées en faisceaux le long des murs, rouillées, emmanchées de frêne gris. Au fond, un grand atelier à deux étages, aux fenêtres grillées. Devant la voûte, trois hommes jouent aux osselets sur un tonneau. Ils ont des mains de débardeurs, et chacun un bâton ferré posé à portée." },
      { first: true, text: "Le plus gros se lève. Il a le crâne rasé, une oreille en chou-fleur, et la voix douce. « Boscot. C'est moi qui pèse les gens avant la Reine. Tu viens pour quoi ? »" },
      { again: true, before: "ig:cour_ouverte", text: "Boscot et ses osselets, devant la voûte de la Cour des Pelles. Il lève les yeux, et il attend." },
      { again: true, after: "ig:cour_ouverte", text: "Boscot s'écarte de la voûte sans quitter son tonneau des yeux. Tu peux passer." },
      { with: "tibere", before: "ig:cour_ouverte", text: "Boscot voit Tibère et sourit lentement. « Sergent Gaucelm. On m'avait dit que le Guet t'avait mis dehors. On m'avait dit vrai. »" },
      { after: "ig:merlot_vole", before: "ig:cour_ouverte", text: "Sur le tonneau, à côté des osselets, il y a une bourse au cordon tranché. La tienne." },
    ],
    fx: { meet: "ig_boscot" },
    choices: [
      { label: "Entrer voir la Reine", big: true, hide: { not: { has: "ig:cour_ouverte" } }, to: "IG_reine" },
      { label: "Dire que tu viens « rendre la monnaie »", hide: { any: [{ not: { voile: "ig_he_mot" } }, { has: "ig:cour_ouverte" }] }, fx: { flag: "ig:cour_ouverte", ep: ["perso", 200] }, to: "IG_reine" },
      { label: "Demander audience au nom d'Odeline Carrus, qui achetait ici", hide: { has: "ig:cour_ouverte" }, test: { dom: "social", diff: -10, label: "Convaincre Boscot", help: [{ if: { has: "metier:parole" }, v: 10 }, LIS] },
        win: { fx: { flag: "ig:cour_ouverte" }, to: "IG_reine" }, lose: { to: "IG_cour_refus" } },
      { label: "Laisse-moi faire", who: "tibere", hide: { has: "ig:cour_ouverte" }, test: { dom: "social", diff: 0, label: "Rappeler à Boscot ce qu'il doit au sergent" },
        win: { fx: { flag: "ig:cour_ouverte", conf: { tibere: 5 } }, to: "IG_cour_tibere" }, lose: { to: "IG_cour_refus" } },
      { label: "Passer par les toits et entrer par une lucarne de l'atelier", hide: { has: "ig:cour_ouverte" }, to: "IG_cour_toits" },
      { label: "Écarter Boscot et ses hommes de la voûte", hide: { has: "ig:cour_ouverte" }, fight: { title: "La voûte des Pelles", enemies: [{ id: "ig_casseur", n: 2 }, { id: "ig_boscot", n: 1 }],
        win: { fx: { flag: "ig:cour_ouverte", ep: ["perso", 300] }, to: "IG_reine" }, lose: { to: "IG_cour_rosse" },
        flee: { label: "Repartir vers le lavoir", dom: "discretion", diff: 0, to: "IG_entree" } } },
      { back: "IG_entree" },
    ] },

  IG_cour_refus: { act: "I", title: "La Cour des Pelles", place: "gouttieres",
    text: [
      "Boscot t'écoute jusqu'au bout, hoche la tête et se rassied. « Non. » Il reprend ses osselets. « La Reine reçoit ceux qui apportent, ceux qui doivent, et ceux qu'elle fait chercher. Tu n'es rien des trois. Reviens quand tu seras l'un ou l'autre. »",
      "Un de ses hommes ajoute, sans lever le nez : « Ou passe par le toit, comme les autres. On aime bien quand les gens passent par le toit. » Les trois rient.",
    ],
    choices: [
      { label: "Passer par les toits", to: "IG_cour_toits" },
      { back: "IG_entree" },
    ] },

  IG_cour_tibere: { act: "I", title: "La Cour des Pelles", place: "gouttieres", with: "tibere",
    text: [
      "Tibère s'approche du tonneau et pose un doigt sur les osselets, l'un après l'autre, comme on compte. « La seconde fois que je t'ai coffré, Boscot, tu avais sur toi la bourse du doyen des drapiers. Je l'ai rendue au doyen, et j'ai écrit dans le registre que tu l'avais trouvée par terre. Tu as fait trois jours au lieu de trois ans. »",
      "Boscot regarde le doigt, puis Tibère. « {{oreille#ig_bo_tibere|Je m'en souviens pas|Je m'en souviens tous les soirs, et ma mère aussi s'en souvient}}. » Il se lève et s'efface de la voûte. « Une fois, sergent. On est quittes. »",
      "En passant, Tibère te souffle : « Je le regrettais, ce registre. Je le regrette moins. »",
    ],
    fx: { ep: ["perso", 200] },
    choices: [{ label: "Entrer voir la Reine", big: true, to: "IG_reine" }] },

  IG_cour_toits: { act: "I", title: "Les toits de la Cour", place: "gouttieres",
    text: [
      "Une échelle de meunier, un auvent, une gouttière de plomb qui gémit sous ton poids, et tu es sur le toit du lavoir. De là, une poutre jetée en travers de la ruelle mène au toit de l'atelier, couvert de tuiles moussues. Au milieu, une lucarne ouverte souffle une odeur de cire chaude et de métal.",
      "La poutre fait deux toises. En bas, Boscot et ses hommes jouent aux osselets. L'un d'eux lève parfois la tête vers le ciel, par habitude.",
    ],
    choices: [
      { label: "Traverser la poutre et descendre par la lucarne", test: { dom: "discretion", diff: -10, label: "Marcher sur la poutre sans un bruit", help: [LIS, { if: { item: "corde" }, v: 5 }] },
        win: { fx: { flag: "ig:cour_ouverte", ep: ["perso", 250] }, to: "IG_reine_lucarne" }, lose: { fx: { pv: -3 }, to: "IG_chute" } },
      { label: "Redescendre et revenir par la voûte", back: "IG_cour" },
    ] },

  IG_cour_rosse: { act: "I", title: "Le lavoir", place: "gouttieres",
    text: [
      "Tu te réveilles dans l'eau froide du lavoir, la joue contre une pierre à battre. Une laveuse te regarde, les mains dans le linge, sans s'arrêter de frotter. « Boscot t'a porté jusqu'ici lui-même. Il dit que la Reine aime bien qu'on lui rende les gens propres. »",
      "Tu as mal partout, et ta bourse est plus légère. Sur le rebord du bassin, quelqu'un a posé une pelle rouillée, en travers, à côté de ta tête. C'est une manière de signer.",
      { with: "any", text: "Tes compagnons sont assis sur le muret du lavoir, aussi trempés que toi, et aussi peu fiers." },
    ],
    fx: { gold: -4, flag: "ig:rosse" },
    choices: [
      { label: "Passer par les toits, cette fois", to: "IG_cour_toits" },
      { back: "IG_entree" },
    ] },
});

// ==================================================================== Margaux Pelle, the Queen of the Gouttières
Object.assign(P, {
  IG_reine: { act: "I", title: "La Reine des Gouttières", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      { first: true, text: "L'atelier des Pelles est une halle de poutres où des cordes tendues portent des manteaux, des bottes, des harnais, des chasubles. Sur de longues tables, le butin est trié par métal : les cuivres, les étains, les argents, et les ors sous une cloche de verre. Partout des balances, de la romaine de boucher au trébuchet d'orfèvre ; tu en comptes onze avant de renoncer. Des commis écrivent. Personne ne parle fort." },
      { first: true, text: "Sur un pilier, près de l'entrée, une ardoise porte d'une écriture de commis : *{{loupe#ig_mg_ardoise|Dîme des toits : un liard par ducat, payable le lundi|Dîme des toits : un liard par ducat ; Boscot en garde un sur dix, et je le laisse faire}}*." },
      { first: true, text: "Au fond, sous la seule fenêtre propre, une femme de cinquante ans pèse une cuiller d'argent. Elle est large, vêtue de laine grise, les cheveux pris dans une résille, des bésicles d'acier sur le nez. Elle ne lève pas les yeux. « Tu es l'apprenti{e} de la Carrus, dit Margaux Pelle. Assieds-toi. Ne touche à rien : tout ce qui est ici a déjà été volé une fois. »" },
      { first: true, text: "« Odeline Carrus ? {{oreille#ig_mg_odeline|Une cliente comme une autre|La seule du quai qui me payait le prix juste, et je lui en voulais pour ça}}. Elle venait le jeudi, elle achetait ce que les gens pleuraient, et elle le leur rendait au double. C'était du commerce honnête. Je n'ai jamais compris comment elle en vivait. »" },
      { first: true, if: { has: "passe:voleur" }, text: "Margaux te regarde enfin, par-dessus ses bésicles. « Toi, je te connais. Tu travaillais pour moi, à quatorze ans, sans le savoir. Toutes les bourses du quai finissent ici. Puis la Carrus t'a pris par le col. J'ai perdu une bonne main ce jour-là. »" },
      { again: true, text: "Margaux Pelle, sous sa fenêtre propre, pèse une chose qu'elle n'a pas encore décidé d'acheter. « Encore toi. Assieds-toi, et dis vite. »" },
      { first: true, text: "En pesant, elle fredonne un air, toujours le même, celui que chantent les gamins sur les faîtes. Tu lui demandes ce que c'est. « Une chanson de ma mère. Ma mère {{oreille#ig_mg_mere|vendait de l'anguille au pont aux Tripes et chantait pour attirer le client|venait des Joncs-Bas, et le soir, porte fermée, elle me la chantait avec d'autres mots}}. »" },
      { with: "gildas", text: "Margaux regarde la bure de Frère Gildas sans plaisir. « Les moines achètent peu et prient beaucoup pour ce qu'ils ont acheté. Mettez-vous près de la porte, mon frère. Le courant d'air vous fera du bien. »" },
      { after: "ig:reine_amie", text: "Depuis que tu lui as chanté la chanson de sa mère, Margaux te sert un doigt de liqueur de coing dans un dé à coudre d'argent, et elle le reprend quand tu l'as bu." },
    ],
    fx: { meet: "margaux", flag: "ig:reine_vue" },
    choices: [
      { label: "Lui parler de Fauvette, et de ce qu'elle a pris chez Odeline", hide: { seen: "IG_reine_marche" }, to: "IG_reine_marche" },
      { label: "Lui dire que l'homme aux gants gris travaille pour la Banque Marrel, et paie en promesses", hide: { any: [{ not: { voile: "ig_mg_petite" } }, { seen: "IG_reine_gants" }] }, to: "IG_reine_gants" },
      { label: "Chanter pour elle le couplet avec les mots de dessous", hide: { any: [{ not: { voile: "ig_mg_mere" } }, { not: { voile: "ig_hu_chanson" } }, { seen: "IG_reine_chanson" }] }, to: "IG_reine_chanson" },
      { label: "Lui dire où dort Fauvette", tag: "Vendre une fille des toits", stain: true, hide: { any: [{ not: { has: "ig:nid" } }, { seen: "IG_reine_vendre" }, { has: "ig:fauvette_connue" }] }, to: "IG_reine_vendre" },
      { label: "Régler la dette de Fauvette", hide: { any: [{ not: { has: "ig:dette_connue" } }, { has: "ig:dette_reglee" }] }, to: "IG_dette_reine" },
      { label: "Lui proposer le travail du grenier Ravoux", hide: { any: [{ not: { seen: "IG_reliques" } }, { seen: "IG_reine_grenier" }] }, to: "IG_reine_grenier" },
      { label: "Regarder ce que la Reine vend à ceux qui travaillent sur les toits", to: "IG_reine_balance" },
      { back: "IG_entree" },
    ] },

  IG_reine_lucarne: { act: "I", title: "Par la lucarne", place: "gouttieres",
    text: [
      "La lucarne donne sur une soupente pleine de chaises empilées, puis sur une échelle, puis sur l'atelier. Tu descends le dernier barreau au milieu de trois commis qui écrivent. Tous trois continuent d'écrire.",
      "Au fond, une femme en laine grise pose une cuiller sur un plateau de balance. « On entre par le toit, chez moi, quand on a du talent, dit-elle sans se retourner. Ceux qui en ont, je les reçois. Les autres, je les reçois aussi, mais en bas, dans la cour, avec Boscot. Approche. »",
    ],
    fx: { ep: ["perso", 100] },
    choices: [{ label: "Approcher de la Reine", to: "IG_reine" }] },

  IG_reine_marche: { act: "I", title: "La balance de la Reine", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Margaux Pelle repose la cuiller et retire ses bésicles. « Fauvette. Une rousse, dix-neuf ans, les doigts les plus fins des Gouttières, la tête la plus dure. Elle a pris quelque chose chez la Carrus, la nuit des Lanternes. Tout le quartier le sait. Elle ne me l'a pas apporté. Tout le quartier le sait aussi. »",
      "« La petite {{oreille#ig_mg_petite|me doit trois ducats, rien de plus|me doit trois ducats, et un homme aux gants gris m'en offre cinquante pour la lentille qu'elle porte au cou}}. Elle a perdu un sac de couverts à la Saint-Blaise, en tombant d'une gouttière, et les couverts étaient à moi. Ici, ce qu'on perd en chemin, on le doit. »",
      "Elle pose ses deux mains à plat sur la table. « Voilà ce que je te propose. Tu la trouves. Tu m'apportes ce qu'elle porte au cou. Je te donne dix ducats, et j'efface sa dette. Elle garde ses doigts. Tout le monde y gagne. »",
      { with: "lison", text: "Lison, derrière toi, dit à mi-voix : « {{oreille#ig_li_reine|Dix ducats, c'est un bon prix|Cinquante, elle en a parlé avec ses mains, et elle t'en donne dix}}. »" },
      { with: "tibere", text: "Tibère se gratte la moustache. « {{oreille#ig_ti_dix|Dix ducats, ça ne se refuse pas|Dix ducats, c'est deux mois de ce que la Banque me donne pour te suivre}}. »" },
    ],
    fx: { flag: ["ig:piste", "ig:dette_connue"], questSeen: "IG_oeil" },
    choices: [
      { label: "Accepter le marché, du bout des lèvres", fx: { flag: "ig:reine_accord" }, to: "IG_reine_accord" },
      { label: "Refuser : ce qu'elle porte au cou appartenait à Odeline", to: "IG_reine_accord" },
    ] },

  IG_reine_accord: { act: "I", title: "La balance de la Reine", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      { if: { has: "ig:reine_accord" }, text: "Margaux crache dans sa paume et te la tend. Tu la serres. Elle a la main sèche et chaude, et elle la garde un moment de plus que nécessaire, pour voir si tu la retires. « Elle travaille les toits au-dessus des Halles, à l'heure des chariots, quand tout le monde regarde la marchandise. Pour le reste, débrouille-toi. Si tu me trompes, je le saurai, parce qu'on finit toujours par venir me vendre quelque chose. »" },
      { if: { not: { has: "ig:reine_accord" } }, text: "« Ce qui appartenait à la Carrus appartient à la Carrus, dit Margaux. Et la Carrus est sous la terre des Noyés. » Elle hausse les épaules. « Comme tu voudras. Boscot trouvera la petite avant toi. Il est moins aimable, et il casse ce qu'il trouve. Elle travaille au-dessus des Halles, à l'heure des chariots. Je te le dis gratis : j'aime bien qu'il y ait de la concurrence, ça fait monter les prix. »" },
      "Elle remet ses bésicles. L'entretien est fini.",
    ],
    choices: [{ back: "IG_reine" }] },

  IG_reine_gants: { act: "I", title: "Les gants gris", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Tu parles de Lothaire Brunel, de la Banque Marrel, des gants gris. Margaux t'écoute en tapotant le plateau de sa balance avec un ongle. Quand tu as fini, elle reste un moment silencieuse.",
      "« La Banque. » Elle prononce le mot comme un poids faux. « Il m'a acheté trois choses depuis l'hiver, ton gant gris. Une boîte de corne gravée d'un croissant. Un sifflet d'os. Une clé d'ambre qui n'ouvrait rien. Il a payé comptant, et il a demandé à chaque fois si j'en avais d'autres, des choses avec le croissant. »",
      "« La Banque paie bien quand elle commence, et mal quand elle a fini, dit-elle. Mon père avait un compte chez Marrel. Il est mort en le payant. » Elle referme le registre. « La petite garde sa lentille, pour ce qui me regarde. Ce que tu feras, toi, ce sont tes affaires. Sa dette, elle me la doit toujours. »",
    ],
    fx: { flag: "ig:reine_gants", clue: "ig_c_gants", ep: ["perso", 300] },
    choices: [{ back: "IG_reine" }] },

  IG_reine_chanson: { act: "I", title: "La chanson de la mère", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Tu chantes mal, et à voix basse, au-dessus du trébuchet : *Sur les toits de la Muette, les Vasse gardent sa voix aux Joncs-Bas.* Les commis s'arrêtent d'écrire. C'est la première fois que tu les vois faire ça.",
      "Margaux Pelle retire ses bésicles et les plie. Elle a les yeux d'une femme qui a vu passer beaucoup de choses sur une balance et qui n'en a pesé qu'une seule pour de bon. « Ma mère la chantait comme ça. Porte fermée, volets fermés. Elle me disait : tu la chantes faux dehors, et juste ici. J'ai cru toute ma vie que c'était une manie de vieille. »",
      "« Les Joncs-Bas, dit-elle. Je n'y suis jamais allée. Ma mère en parlait comme d'un endroit où l'on garde quelque chose sous l'eau, avec des gens qui se taisent dessus. » Elle remet ses bésicles. « Tu as payé ta place ici avec ça. Tu entres quand tu veux, et Boscot te salue. Ne m'en demande pas davantage. Je n'ai pas l'habitude. »",
    ],
    fx: { flag: ["ig:reine_amie", "ig:cour_ouverte"], fac: { taiseurs: 3 }, ep: ["seance", 500] },
    choices: [{ back: "IG_reine" }] },

  IG_reine_vendre: { act: "I", title: "La balance de la Reine", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Tu dis la tour des Drapiers, la cage aux pigeons. Margaux ne note rien. Elle fait un signe, et un commis se lève et sort par la cour. Elle pose sur la table un ducat neuf, et le pousse vers toi du bout de l'ongle.",
      "« Voilà ce que vaut une adresse. Tu viens de faire ton premier commerce dans les Gouttières. » Elle te regarde ramasser la pièce. « La Carrus n'aurait pas fait ça. C'est pour ça qu'elle est morte pauvre. »",
      { with: "lison", text: "Lison sort de l'atelier en silence. Tu la retrouves dans la cour, adossée à un faisceau de pelles, et elle regarde ailleurs." },
      { with: "tibere", text: "Tibère regarde le ducat sur la table, puis le plancher. « {{oreille#ig_ti_vendre|C'est le métier|C'est ce que je fais avec toi depuis le premier jour}}, dit-il. »" },
    ],
    fx: { gold: 20, mark: 1, flag: "ig:fauvette_vendue", conf: { lison: -5 } },
    choices: [{ back: "IG_reine" }] },

  IG_reine_balance: { act: "I", title: "La balance de la Reine", place: "gouttieres", shop: "ig_balance", backName: "l'atelier de la Reine",
    text: [
      "Un commis t'ouvre une armoire de chêne. Dedans, rangé comme chez un drapier, tout ce dont on a besoin sur les toits : des crochets, des cordes, des lanternes sourdes, des gants de cuir à paume de résine, un corselet de cuir bouilli qui a appartenu à un sergent du Guet et qui porte encore son numéro.",
      "« Prix des Gouttières, dit le commis. C'est le prix du quai, moins ce que tu ne demanderas pas sur la provenance. »",
      { with: "tibere", text: "Tibère regarde le numéro sur le corselet et se tait. Ce n'est pas le sien." },
    ],
    choices: [{ back: "IG_reine" }] },

  IG_chute: { act: "I", title: "Une cour des Gouttières", place: "gouttieres",
    text: [
      "Une tuile part sous ton talon, puis une autre, et le toit devient une pente lisse. Tu attrapes une gouttière, qui se décroche avec un bruit de cloche fêlée. Tu tombes à travers une corde à linge, deux draps, un auvent de paille, et tu atterris sur un tas de fumier, au fond d'une cour où une chèvre te regarde en mâchant.",
      "Rien de cassé. Tout fait mal. Une femme sort sur le seuil avec un balai et te regarde, puis regarde son auvent. « Deux liards pour l'auvent. Les draps, je les relave. »",
      { with: "any", text: "Tes compagnons arrivent par la porte cochère, un peu plus tard, par l'escalier, comme tout le monde." },
      { if: { has: "passe:voleur" }, text: "Odeline disait que tout voleur tombe une fois, et que ce qui compte est l'endroit. Un fumier, c'est un bon endroit." },
    ],
    fx: { gold: -2 },
    choices: [
      { back: "IG_toits" },
      { back: "IG_entree" },
    ] },
});

// ==================================================================== the roofs, the magpie's nest, the chase
Object.assign(P, {
  IG_toits: { act: "I", title: "Les toits des Gouttières", place: "gouttieres", backName: "les toits des Gouttières",
    text: [
      { first: true, text: "L'escalier des Fileuses monte en colimaçon dans une tour de brique et débouche sur un toit plat, couvert de plomb, où l'on a mis à sécher des peaux. De là, la ville change de forme. Les toits des Gouttières font une seconde ville posée sur la première, avec ses rues de planches, ses ponts de cordes, ses carrefours autour des cheminées. On y croise des couvreurs, des ramoneurs, des enfants, des chats, et des gens qui préfèrent ne croiser personne." },
      { again: true, when: "day", text: "Les toits, leurs passerelles de planches, leurs cordes à linge. Le vent sent la suie et l'eau du canal. Au loin, les Halles font une grande carène de tuiles brunes." },
      { when: "night", text: "La nuit, les toits sont plus peuplés que les rues. Des silhouettes passent devant la lune d'une cheminée à l'autre, sans bruit, et chacune feint d'ignorer les autres." },
      { first: true, text: "Sur la cheminée de l'ancienne teinturerie, à deux toises au-dessus de toi, une pie a bâti un nid énorme, hérissé de brindilles et de choses qui brillent." },
      { with: "lison", text: "Lison marche sur les planches comme sur le plat-bord de sa barque, sans regarder ses pieds. « Les toits, c'est un canal sans eau, dit-elle. On y tombe pareil. »" },
      { with: "tibere", text: "Tibère se tient à une cheminée, le teint gris. « Le Guet avait une règle, dit-il. On n'arrête personne au-dessus du deuxième étage. Je comprends pourquoi. »" },
      { with: "fauvette", text: "Fauvette saute d'une poutre à l'autre, les mains dans les poches, pour le plaisir de te voir pâlir." },
    ],
    choices: [
      { label: "Grimper jusqu'au nid de pie, sur la cheminée de la teinturerie", hide: { seen: "IG_toits_pie" }, to: "IG_toits_nid" },
      { label: "Guetter Fauvette au-dessus des Halles, à l'heure des chariots", hide: { any: [{ not: { has: "ig:piste" } }, { has: "ig:fauvette_connue" }] }, to: "IG_traque" },
      { label: "La tour des Drapiers et sa cage aux pigeons", hide: { any: [{ not: { has: "ig:nid" } }, { has: "ig:fauvette_connue" }] }, to: "IG_nid" },
      { label: "Le grenier de Rufin Ravoux, par les toits", hide: { any: [{ not: { has: "ig:grenier_connu" } }, { seen: "IG_grenier" }] }, to: "IG_grenier_entree" },
      { back: "IG_entree" },
    ] },

  IG_toits_nid: { act: "I", title: "La cheminée de la teinturerie", place: "gouttieres",
    text: [
      "La cheminée est un tronc de briques noires, haut de deux toises, avec des crampons de fer rouillés plantés pour les ramoneurs. Un sur trois manque. Le nid occupe tout le couronnement : une boule de branches grosse comme un tonnelet, et dedans, quand le soleil passe, des éclats de toutes les couleurs.",
      "La pie est là. Elle te regarde de côté, la tête penchée, puis elle crie, un cri de crécelle, et deux autres pies arrivent des toits voisins.",
      { with: "fauvette", text: "Fauvette rit. « Je l'ai visité l'an passé, ce nid. J'ai trouvé des boutons. Mais j'avais pas ce qu'il fallait pour regarder. »" },
    ],
    choices: [
      { label: "Monter par les crampons, sans regarder en bas", test: { dom: "nature", diff: -10, label: "Escalader la cheminée", help: [LIS, FAU, { if: { item: "corde" }, v: 10 }] },
        win: { to: "IG_toits_pie" }, lose: { fx: { pv: -3 }, to: "IG_chute" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette monte" }, win: { to: "IG_toits_pie" }, lose: { fx: { pv: -2 }, to: "IG_chute" } },
      { back: "IG_toits" },
    ] },

  IG_toits_pie: { act: "I", title: "Le nid de pie", place: "gouttieres",
    text: [
      "Accroché{e} au couronnement d'une main, tu fouilles le nid de l'autre, avec les pies qui tournent autour de ta tête en criant. Il faut choisir vite : la brique s'effrite sous tes doigts, et tu ne pourras emporter qu'une poignée.",
      "Il y a des boutons de livrée, un dé à coudre, des éclats de vitrail, une cuiller tordue. Il y a une clé {{pie#ig_ni_cle|d'argent, longue comme un doigt, à l'anneau ouvragé|d'étain argenté, une clé de coffret de foire qui n'a jamais ouvert que du carton}}. Il y a une bague {{pie#ig_ni_bague|d'or fin, avec une pierre bleue|de cuivre doré, la pierre bleue en verre de lampe}}. Et il y a, presque enfouie, une broche {{pie#ig_ni_broche|de verre rouge sur une monture de cuivre, un bijou de foire|d'or rouge, sertie de trois grenats, signée au revers d'un poinçon d'orfèvre du Changeurs}}.",
      { if: { lens: "pie" }, text: "À travers l'œil de pie, le nid change de lumière. Certaines choses s'y éteignent, d'autres y rougeoient comme des braises. La pie a meilleur goût que les gens des Halles, mais pas toujours." },
    ],
    choices: [
      { label: "Prendre la broche aux grenats", hide: { not: { voile: "ig_ni_broche" } }, fx: { item: "ig_tr_broche", clock: { tresors: 1 }, flag: "tresor:ig_broche", ep: ["perso", 300], note: "Dans ta paume, en bas, au jour ordinaire, la broche pèse plus que le verre ne pèse. Au revers, un poinçon : une tour et une lettre." }, back: "IG_toits" },
      { label: "Prendre la clé d'argent", fx: { item: "ig_faux_cle", note: "En bas, dans la lumière ordinaire, c'est un objet de foire, dix pour un liard. La pie avait crié pour la broche." }, back: "IG_toits" },
      { label: "Prendre la bague à la pierre bleue", fx: { item: "ig_faux_bague", note: "En bas, dans la lumière ordinaire, c'est un objet de foire, dix pour un liard. La pie avait crié pour la broche." }, back: "IG_toits" },
      { label: "Juger à l'œil nu, en chercheur de choses perdues", hide: { voile: "ig_ni_broche" }, test: { dom: "savoir", diff: -20, label: "Reconnaître l'or sous la crasse", help: [{ if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { item: "ig_tr_broche", clock: { tresors: 1 }, flag: "tresor:ig_broche", ep: ["perso", 300], note: "Dans ta paume, en bas, au jour ordinaire, la broche pèse plus que le verre ne pèse. Au revers, un poinçon : une tour et une lettre." }, to: "IG_toits" }, lose: { fx: { item: "ig_faux_cle", note: "En bas, dans la lumière ordinaire, c'est un objet de foire, dix pour un liard. La pie avait crié pour la broche." }, to: "IG_toits" } },
    ] },

  IG_traque: { act: "I", title: "Au-dessus des Halles", place: "gouttieres", takes: "morning",
    text: [
      "Tu attends dans le froid, à plat ventre sur un faîtage, avant l'aube. En bas, la rue des Halles s'emplit de chariots : des choux, des barriques, des cages de poules, des balles de laine. Les charretiers se crient dessus, les commis comptent, et tous ont les yeux sur la marchandise.",
      "Elle arrive par l'est, d'un toit à l'autre, sans hâte. Une fille mince, en veste de futaine, les cheveux roux coupés court au couteau. Elle s'accroupit au bord d'une gouttière au-dessus d'un chariot de drapier, laisse descendre une ficelle lestée d'un hameçon, et remonte une bourse comme on remonte un goujon. Ensuite elle reste là, et elle porte quelque chose à son œil, un petit disque sombre, pour regarder dans la bourse.",
      { with: "lison", text: "Lison souffle : « C'est joli. C'est du travail de batelière, ça, la ficelle. »" },
      { with: "tibere", text: "Tibère souffle : « Au Guet, on l'aurait laissée faire, pour voir à qui elle revend. »" },
    ],
    choices: [
      { label: "Lui courir après sur les toits", big: true, to: "IG_poursuite" },
      { label: "La suivre de loin, sans te montrer, jusqu'à là où elle dort", test: { dom: "discretion", diff: -20, label: "Suivre une fille des toits sans qu'elle le sache", help: [LIS, { if: { arch: "voleur" }, v: 10 }] },
        win: { fx: { flag: "ig:nid", ep: ["perso", 250] }, to: "IG_nid" }, lose: { to: "IG_poursuite" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "discretion", diff: 0, label: "Lison file la voleuse" }, win: { fx: { flag: "ig:nid" }, to: "IG_nid" }, lose: { to: "IG_poursuite" } },
      { label: "L'appeler par son nom : « Fauvette ! »", fx: { flag: "ig:appelee" }, to: "IG_poursuite" },
    ] },

  IG_poursuite: { act: "I", title: "La course sur les toits", place: "gouttieres",
    text: [
      "Elle court sur les toits comme d'autres marchent dans la rue. Une passerelle de planches, un appentis, un saut d'un pignon à l'autre, une glissade le long d'une rive de tuiles. Toi, tu cours derrière avec le bruit d'un cheval dans une cuisine. Les tuiles se déchaussent sous tes pas, et une femme, à une lucarne, te crie de payer la casse.",
      { after: "ig:appelee", text: "À son nom, elle s'est retournée d'un bloc, la bourse encore à la main, et t'a jaugé{e} : la distance, ton poids, tes chaussures. Puis elle a souri d'une dent cassée, a dit « Raté », et elle est partie." },
      "Elle se retourne une fois, pour voir si tu suis. Tu suis. Elle a l'air surprise, et un peu vexée.",
      { with: "tibere", text: "Tibère a renoncé au premier saut. Tu l'entends crier, d'en bas, la direction qu'elle prend, et il crie juste." },
      { with: "gildas", text: "Frère Gildas suit par les rues, la bure retroussée sur des mollets de marcheur, et lève de temps en temps la tête pour te retrouver." },
    ],
    choices: [
      { label: "Rester sur ses talons, passerelle après passerelle", test: { dom: "nature", diff: -10, label: "Courir sur les toits", help: [LIS, TIB] },
        win: { to: "IG_poursuite_saut" }, lose: { to: "IG_poursuite_perdue" } },
      { label: "Couper par le toit du lavoir pour lui barrer le chemin", test: { dom: "savoir", diff: -10, label: "Deviner où elle va", help: [LIS, { if: { has: "ig:merlot_ami" }, v: 10 }] },
        win: { to: "IG_poursuite_saut" }, lose: { to: "IG_poursuite_perdue" } },
    ] },

  IG_poursuite_saut: { act: "I", title: "Le saut du canal", place: "gouttieres", urgent: 20,
    text: [
      "Elle arrive au bord du dernier toit avant le canal, et elle garde son allure. Entre ce toit et celui d'en face, le canal des Gouttières : trois toises de vide, et l'eau verte en bas. Une planche de couvreur est jetée en travers, trop courte d'une coudée, posée d'un seul côté. Fauvette court sur la planche, saute la coudée qui manque, roule sur les tuiles d'en face, et se relève.",
      "Elle se retourne. Elle attend de voir. La planche bascule encore un peu sur son appui.",
    ],
    choices: [
      { label: "Courir sur la planche et sauter", test: { dom: "nature", diff: -10, label: "Le saut du canal", help: [LIS, FAU] },
        win: { fx: { ep: ["perso", 300] }, to: "IG_rencontre" }, lose: { fx: { pv: -3 }, to: "IG_poursuite_canal" } },
      { label: "Lancer ta corde vers la cheminée d'en face", if: { item: "corde" }, why: "Il te faudrait une corde.", test: { dom: "nature", diff: 0, label: "Une corde jetée sur une cheminée" },
        win: { to: "IG_rencontre" }, lose: { to: "IG_poursuite_perdue" } },
      { label: "Lui crier que tu viens de la part d'Odeline Carrus", to: "IG_poursuite_cri" },
      { label: "Hésiter au bord du toit", timeout: true, to: "IG_poursuite_perdue" },
    ] },

  IG_poursuite_cri: { act: "I", title: "Le saut du canal", place: "gouttieres",
    text: [
      "« Je viens pour Odeline Carrus ! » Ta voix part au-dessus du canal et revient de tous les murs. Sur le toit d'en face, Fauvette se fige. Elle regarde l'eau, puis toi, puis l'eau.",
      "« La vieille du quai ? » Elle crie aussi. « Elle est morte ! » Elle hésite, un pied sur le faîtage, prête à partir. Puis elle s'accroupit, les coudes sur les genoux. « Passe par le pont des Cordiers. Je t'attends cinq cents battements de cœur. Pas un de plus. »",
      "Tu cours. Elle a tenu parole, à peu près.",
    ],
    choices: [{ label: "La rejoindre de l'autre côté du canal", to: "IG_rencontre" }] },

  IG_poursuite_canal: { act: "I", title: "Le canal des Gouttières", place: "gouttieres",
    text: [
      "La planche bascule à mi-course. Tu sautes quand même, et tu manques le toit d'une main. Le canal te prend : une eau froide, épaisse, qui sent l'écorce et l'égout. Tu remontes en crachant contre une barque de laveuse, qui te tend un battoir pour t'y accrocher.",
      "Sur le toit d'en face, Fauvette te regarde, accroupie. Elle rit, longtemps. Puis elle cesse de rire et descend par une gouttière jusqu'au quai, à trois pas de toi. « T'es têtu{e}. J'aime bien les têtus. Ils se noient moins que les autres. »",
    ],
    choices: [{ label: "Sortir de l'eau et lui parler", to: "IG_rencontre" }] },

  IG_poursuite_perdue: { act: "I", title: "Les toits des Gouttières", place: "gouttieres",
    text: [
      "Tu la perds derrière une rangée de cheminées. Il y a là quatre chemins de planches, un trou de lucarne, une corde qui pend dans une cour, et le silence. Tu restes un moment à reprendre ton souffle, les mains sur les genoux.",
      "Au loin, au-dessus des toits, la tour carrée des Drapiers dépasse le reste, avec sa cage à pigeons au sommet. Une silhouette rousse en escalade la façade, petite comme une mouche, et entre dans la cage. Elle se croit seule.",
      { with: "tibere", text: "Tibère arrive par l'escalier, rouge, en se tenant le côté. Il suit ton regard. « La tour des Drapiers. Fermée depuis la faillite de la guilde. Un bon endroit pour dormir, si on aime les pigeons. »" },
    ],
    fx: { flag: "ig:nid" },
    choices: [
      { label: "La tour des Drapiers", to: "IG_nid" },
      { back: "IG_toits" },
    ] },

  IG_nid: { act: "I", title: "La tour des Drapiers", place: "gouttieres", backName: "la tour des Drapiers",
    text: [
      "La tour des Drapiers est carrée, de pierre grise, avec une horloge qui a perdu ses aiguilles. La porte est murée depuis la faillite de la guilde. Sur la face nord, des trous de boulin font une échelle à qui sait les voir, jusqu'à la cage aux pigeons du sommet : une loge de bois et de grillage, où roucoule une centaine d'oiseaux.",
      { if: { has: "ig:fauvette_vendue" }, text: "Le grillage de la cage pend, arraché. Sur la pierre, en dessous, des plumes, une couverture déchirée, un bol renversé. Les hommes de la Reine sont passés. Au loin, du côté du canal, on entend crier.", else: "Dans la cage, entre les perchoirs, il y a une paillasse, une couverture de cheval, un bol, un pot de miel, et une collection de choses brillantes alignées sur une poutre comme dans une vitrine." },
      { when: "night", if: { not: { has: "ig:fauvette_vendue" } }, text: "Fauvette dort, roulée dans la couverture, le poing fermé sur un cordon passé autour de son cou. Les pigeons dorment autour d'elle. Elle respire vite, comme ceux qui dorment en guettant." },
      { when: "day", if: { not: { has: "ig:fauvette_vendue" } }, text: "La cage est vide, à cette heure. Fauvette travaille. Elle reviendra au crépuscule, quand les toits se vident." },
    ],
    choices: [
      { label: "Courir vers les cris, au canal", big: true, hide: { not: { has: "ig:fauvette_vendue" } }, to: "IG_guetapens" },
      { label: "Décrocher le cordon de son cou sans la réveiller", hide: { any: [{ not: { night: true } }, { has: "ig:fauvette_vendue" }] }, test: { dom: "discretion", diff: -20, label: "Voler une voleuse endormie", help: [{ if: { item: "crochets" }, v: 5 }, { if: { arch: "voleur" }, v: 15 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { to: "IG_nid_vol" }, lose: { to: "IG_rencontre" } },
      { label: "La réveiller doucement, de loin, en disant ton nom", hide: { any: [{ not: { night: true } }, { has: "ig:fauvette_vendue" }] }, to: "IG_rencontre" },
      { label: "L'attendre dans la cage jusqu'au crépuscule", hide: { any: [{ night: true }, { has: "ig:fauvette_vendue" }] }, to: "IG_nid_attente" },
      { back: "IG_toits" },
    ] },

  IG_nid_attente: { act: "I", title: "La cage aux pigeons", place: "gouttieres", takes: "evening",
    text: [
      "Tu attends dans la cage, assis{e} sur la paillasse, avec les pigeons qui marchent sur tes bottes. Sur la poutre, sa vitrine : une boucle de ceinture, trois dés d'os, un peigne d'écaille, une médaille de pèlerin, une petite tête de poupée en porcelaine. Rien de tout cela ne vaut deux liards. Tout est rangé avec soin, à égale distance.",
      "Au crépuscule, elle arrive par les trous de boulin, passe la tête par la trappe, et te voit. Elle garde le silence. Elle sort un rasoir de sa manche et l'ouvre, d'un coup de pouce.",
    ],
    choices: [{ label: "Lever les mains, lentement", to: "IG_rencontre" }] },

  IG_nid_vol: { act: "I", title: "La cage aux pigeons", place: "gouttieres",
    text: [
      "Le cordon est noué d'un nœud de batelier. Tes doigts le défont dans le noir, un tour après l'autre, au rythme de son souffle. Elle bouge une fois, dit un mot dans son sommeil, un nom, peut-être. Puis le cordon glisse, et tu tiens dans ta paume un anneau de corne et une lentille de quartz fumé, encore tiède.",
      "L'œil de pie. Odeline le gardait dans un étui de cuir rouge, sur l'étagère du haut, et ne s'en servait jamais devant toi.",
      "Fauvette dort. Sur sa poutre, sa vitrine de choses brillantes attend le jour. Tu portes l'anneau à ton œil, par curiosité, et tu regardes la cage : sur la poutre, une seule chose rougeoie comme une braise qu'on souffle, la médaille de pèlerin, dont l'argent est du plomb. Fauvette la range au milieu, à la place d'honneur.",
    ],
    fx: { item: "oeil_pie", flag: ["ig:fauvette_connue", "ig:fauvette_fachee"], set: { ig_oeil: "repris" }, quest: "IG_oeil", ep: ["seance", 1000] },
    choices: [
      { label: "Laisser deux ducats sur sa poutre, à la place", fx: { gold: -40, flag: "ig:vol_paye" }, back: "IG_entree" },
      { label: "Redescendre par les trous de boulin sans rien laisser", back: "IG_entree" },
    ] },

});

// ==================================================================== Fauvette: the meeting, the ambush, the debt, the witness
Object.assign(P, {
  IG_rencontre: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "Fauvette se tient à trois pas, accroupie sur un faîtage, les avant-bras sur les genoux, un rasoir pliant ouvert dans la main droite. De près, elle est plus jeune et plus fatiguée que sur les toits. Des taches de son, une dent cassée, des ongles rongés jusqu'au sang. Un cordon de cuir sort de son col et disparaît sous sa chemise.",
      { first: true, text: "« Tu cours mal, mais longtemps, dit-elle. Qu'est-ce que tu veux ? » Tu parles de la boutique, de l'établi, de la nuit des Lanternes. Elle t'écoute sans ciller." },
      { again: true, text: "« Encore toi », dit Fauvette. Tu reparles de l'œil, de la boutique, de la vieille. Elle t'écoute sans ciller, comme la première fois, et elle a gardé le même rasoir." },
      "« Ce que j'ai pris chez la vieille ? Deux bagues. Je les ai bues. Le reste, {{oreille#ig_fv_vendu|je l'ai vendu à un borgne des Halles|je l'ai au cou, sous ma chemise, et je dors avec la main dessus}}. La boutique était {{oreille#ig_fv_porte|fermée, je suis passée par la lucarne|ouverte, la porte battait, et je suis entrée parce que quelqu'un venait d'en sortir}}. »",
      "« Et puis, pourquoi je le garderais ? {{oreille#ig_fv_garde|Ça se revend bien, c'est tout|À travers, pour une fois, je vois qui me roule}}. » Elle crache entre ses pieds. « La Reine, {{oreille#ig_fv_reine|je m'en moque bien|me fera casser les mains si je ne lui apporte pas trois ducats avant dimanche}}. »",
      { with: "lison", text: "Lison s'est assise sur une cheminée, un peu en retrait. Elle regarde Fauvette comme on regarde un chat sauvage qui s'approche d'un bol : sans bouger." },
      { with: "tibere", text: "Tibère a gardé la main loin de sa masse, ostensiblement. Fauvette l'a vu, et elle a vu le reste : la moustache, la carrure, la façon de se tenir. « Toi, t'es du Guet. Ça se sent à trois toits. »" },
    ],
    fx: { met: "fauvette", flag: "ig:fauvette_connue" },
    choices: [
      { label: "Lui dire que tu sais ce qu'elle porte sous sa chemise", hide: { not: { voile: "ig_fv_vendu" } }, fx: { ep: ["perso", 200] }, to: "IG_rencontre_parole" },
      { label: "Lui proposer de partager l'œil : tu en as besoin, et elle aussi", hide: { not: { voile: "ig_fv_garde" } }, fx: { ep: ["perso", 300] }, to: "IG_rencontre_partage" },
      { label: "Lui proposer de régler son affaire avec la Reine", hide: { any: [{ not: { voile: "ig_fv_reine" } }, { has: "ig:dette_reglee" }] }, to: "IG_dette" },
      { label: "Lui demander qui sortait de la boutique", hide: { any: [{ not: { voile: "ig_fv_porte" } }, { has: "ig:qui_demande" }] }, fx: { flag: "ig:qui_demande", note: "Fauvette referme son rasoir d'un coup sec. « Je te connais pas. Ce que j'ai vu, je le dis à des gens que je connais. Et encore, pas à tous. »" }, back: "IG_rencontre" },
      { label: "Lui offrir deux ducats pour ce qu'elle porte au cou", fx: { gold: -40 }, to: "IG_rencontre_achat" },
      { label: "La convaincre de te le rendre", test: { dom: "social", diff: -10, label: "Parler à une fille des toits", help: [LIS, { if: { has: "metier:parole" }, v: 10 }, { if: { has: "ig:hermance_promesse" }, v: 10 }] },
        win: { to: "IG_rencontre_parole" }, lose: { to: "IG_fauvette_fuit" } },
      { label: "Lui arracher le cordon du cou", tag: "Force", test: { dom: "combat", diff: -10, label: "Plus vite qu'une voleuse", help: [TIB] },
        win: { to: "IG_rencontre_force" }, lose: { fx: { pv: -2 }, to: "IG_fauvette_fuit" } },
    ] },

  IG_rencontre_achat: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "Tu poses deux ducats sur la tuile, entre vous. Elle les regarde, puis toi. Elle en prend un, le mord, le fait sonner sur la tuile. Puis elle passe le cordon par-dessus sa tête, d'un geste brusque, et te le lance.",
      "Tu l'attrapes. Un anneau de corne, une lentille de quartz fumé, encore tiède. L'œil de pie. Odeline le gardait dans un étui de cuir rouge sur l'étagère du haut, et ne s'en servait jamais devant toi.",
      "« Deux ducats, dit Fauvette. La Reine en veut trois. Il m'en manque un. » Elle range les pièces dans sa botte. « Mais c'est un bon prix. T'as pas marchandé. Les gens qui marchandent pas, d'habitude, c'est qu'ils ont peur ou qu'ils sont bêtes. T'as pas l'air bête. »",
    ],
    fx: { item: "oeil_pie", set: { ig_oeil: "achete" }, quest: "IG_oeil", flag: "ig:dette_connue", questSeen: "IG_dette", conf: { fauvette: 5 }, ep: ["seance", 800] },
    choices: [{ label: "Regarder à travers", to: "IG_premier_regard" }] },

  IG_rencontre_parole: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "Elle garde le silence un long moment. Puis elle tire le cordon hors de sa chemise et le tient au bout de ses doigts, entre vous, au-dessus du vide de la ruelle. Un anneau de corne, une lentille de quartz fumé.",
      "« J'ai regardé à travers toute la semaine, dit-elle. Les bagues de la Reine, le pain du boulanger, les yeux de Boscot. Tout ce qui ment devient rouge. C'est fatigant. » Elle te le tend. « Prends-le. C'était à la vieille. Je le savais en le prenant. »",
      "Tu le prends. Odeline le gardait dans un étui de cuir rouge sur l'étagère du haut, et ne s'en servait jamais devant toi. L'œil de pie.",
    ],
    fx: { item: "oeil_pie", set: { ig_oeil: "donne" }, quest: "IG_oeil", conf: { fauvette: 10 }, ep: ["seance", 1000] },
    choices: [{ label: "Regarder à travers", to: "IG_premier_regard" }] },

  IG_rencontre_partage: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "« Partager ? » Elle rit, puis s'arrête de rire, parce que tu ne ris pas. « Comment on partage un œil ? On le coupe en deux ? »",
      "Tu expliques. Tu en as besoin pour ce qu'Odeline a laissé derrière elle. Elle en a besoin pour savoir qui la roule. Tu le portes ; elle marche avec toi ; quand elle veut savoir, elle demande. Elle t'écoute en faisant tourner le rasoir fermé entre ses doigts.",
      "« Personne m'a jamais proposé de partager quoi que ce soit, dit-elle. D'habitude, on me propose de rendre. » Elle passe le cordon par-dessus sa tête et te le met au cou elle-même, avec des gestes de mère qui habille un enfant. « Tu le portes. Moi, je regarde. Et si tu me roules, je le saurai, puisque c'est toi qui l'as. » Elle a l'air contente de sa phrase.",
      "« Mais d'abord, la Reine. Tant que je lui dois, je marche avec personne. Elle casse aussi ceux qui marchent avec moi. »",
    ],
    fx: { item: "oeil_pie", set: { ig_oeil: "partage" }, quest: "IG_oeil", flag: ["fauvette:amie", "ig:dette_connue"], questSeen: "IG_dette", conf: { fauvette: 15 }, ep: ["seance", 1200] },
    choices: [{ label: "Regarder à travers", to: "IG_premier_regard" }] },

  IG_rencontre_force: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "Tu saisis le cordon et tu tires. Le cuir lui scie la nuque, elle crie, le rasoir passe à un doigt de ta main et entaille ta manche. Le cordon casse. Tu tiens l'anneau de corne et la lentille. Elle roule en arrière sur les tuiles, se relève à deux pas du bord, la main sur le cou.",
      "« Voleur, dit-elle, et c'est elle qui le dit. Ça va, t'es comme les autres. » Elle saute dans la ruelle par une corde à linge, et disparaît.",
      { with: "lison", text: "Lison détourne les yeux. « C'était le plus court, dit-elle. Le plus court, c'est rarement le meilleur, sur l'eau. »" },
    ],
    fx: { item: "oeil_pie", set: { ig_oeil: "repris" }, quest: "IG_oeil", flag: "ig:fauvette_fachee", conf: { lison: -3 }, ep: ["seance", 800] },
    choices: [{ label: "Regarder à travers", to: "IG_premier_regard" }] },

  IG_premier_regard: { act: "I", title: "L'œil de pie", place: "gouttieres",
    text: [
      "Tu portes l'anneau de corne à ton œil droit, et tu fermes l'autre. Le quartz fumé assombrit le jour. Puis certaines choses, autour de toi, se mettent à rougeoir doucement : le bord d'une tuile vernie, qui est de la terre peinte ; une girouette dorée, qui est de fer ; une alliance à la main d'une laveuse, en bas, qui est d'or vrai et qui reste d'or.",
      "Tu baisses l'œil. Le monde redevient ce qu'il a l'air d'être. Tu le relèves. Tes propres boutons de veste sont de corne teinte. Tu le savais. Tu ne l'avais jamais vu.",
      { with: "fauvette", text: "Fauvette te regarde regarder. « Ça fait ça la première fois, dit-elle. Après, on s'habitue. Après, c'est pire. »" },
      { with: "gildas", text: "Frère Gildas regarde l'anneau de corne dans ta main avec une attention de copiste. « Un beau travail ancien, dit-il. La corne a été taillée à la main, et le quartz poli au sable. »" },
    ],
    choices: [{ back: "IG_entree" }] },

  IG_fauvette_fuit: { act: "I", title: "Les toits des Gouttières", place: "gouttieres",
    text: [
      "Fauvette secoue la tête. Elle se laisse glisser sur le dos le long de la pente du toit, attrape une gouttière au passage, se balance et disparaît dans une lucarne. Le temps que tu arrives au bord, il n'y a plus que la lucarne, battante, et une poule qui proteste dans le grenier.",
      "Tu la cherches jusqu'au soir. Le soir, c'est elle qui te trouve, d'une certaine manière : du côté du canal, sous le pont des Cordiers, une voix de fille crie, puis se tait d'un coup, et une voix d'homme dit quelque chose de calme.",
    ],
    fx: { flag: "ig:fauvette_connue" },
    choices: [{ label: "Courir vers le pont des Cordiers", big: true, to: "IG_guetapens" }] },

  IG_guetapens: { act: "I", title: "Sous le pont des Cordiers", place: "gouttieres", takes: "evening",
    text: [
      "Sous l'arche du pont des Cordiers, le quai fait une petite plage de vase où l'on remise les barques. Trois hommes y tiennent Fauvette contre une bitte d'amarrage. Deux casseurs de la Cour des Pelles lui tiennent les bras, et le troisième, Boscot, tient un maillet de tonnelier. Il a posé la main droite de la fille à plat sur le bois de la bitte, et il la maintient là, doucement, avec la sienne.",
      "Fauvette ne crie plus. Elle regarde sa main.",
      "Boscot te voit arriver. Il ne lâche pas la main. « La Reine {{oreille#ig_bo_mains|veut ses trois ducats, c'est tout|m'a dit de lui casser les mains, et j'en ai pas envie, je l'ai vue grandir sur ce quai}}, dit-il de sa voix douce. Va-t'en. C'est une affaire des Gouttières. »",
      { if: { has: "ig:reine_accord" }, text: "Puis il te reconnaît. « Ah. L'associé{e} de la Reine. Tu tombes mal. La Reine a changé d'avis : la lentille, c'est Boscot qui la rapporte, et la fille avec. Tes dix ducats, tu les demanderas à elle. »" },
      { with: "tibere", text: "Tibère s'est arrêté à côté de toi, la main sur sa masse. « Boscot, dit-il seulement. — Sergent », répond Boscot, sans tourner la tête." },
    ],
    fx: { met: "fauvette", flag: "ig:fauvette_connue" },
    choices: [
      { label: "Dire à Boscot qu'il n'a pas envie de faire ça, et que tu iras voir la Reine toi-même", hide: { not: { voile: "ig_bo_mains" } }, fx: { ep: ["seance", 500] }, to: "IG_guetapens_parole" },
      { label: "Laisse-moi faire", who: "tibere", hide: { not: { seen: "IG_cour_tibere" } }, test: { dom: "social", diff: 0, label: "Tibère rappelle à Boscot qu'ils sont quittes, et ce que ça veut dire" },
        win: { fx: { conf: { tibere: 5 } }, to: "IG_guetapens_parole" }, lose: { to: "IG_guetapens_combat" } },
      { label: "Payer les trois ducats de sa dette, là, sur le quai", fx: { gold: -60, flag: "ig:dette_reglee" }, to: "IG_guetapens_paye" },
      { label: "Parler plus fort que le maillet", test: { dom: "social", diff: -20, label: "Raisonner un homme qui tient un maillet", help: [LIS, GIL, { if: { has: "ig:reine_amie" }, v: 20 }] },
        win: { to: "IG_guetapens_parole" }, lose: { to: "IG_guetapens_combat" } },
      { label: "Frapper le premier", fight: { title: "Sous le pont des Cordiers", enemies: [{ id: "ig_boscot", n: 1 }, { id: "ig_casseur", n: 2 }],
        win: { fx: { flag: "ig:reine_fachee", ep: ["seance", 800] }, to: "IG_sauvee" }, lose: { to: "IG_guetapens_perdu" } } },
    ] },

  IG_guetapens_combat: { act: "I", title: "Sous le pont des Cordiers", place: "gouttieres",
    text: [
      "Boscot soupire comme un homme qu'on dérange à table. Il lâche la main de Fauvette, ramasse son maillet, et vient vers toi. Les deux casseurs lâchent la fille pour le suivre. Fauvette tombe à genoux dans la vase, puis se relève, et elle reste.",
    ],
    combat: { title: "Sous le pont des Cordiers", enemies: [{ id: "ig_boscot", n: 1 }, { id: "ig_casseur", n: 2 }],
      win: { fx: { flag: "ig:reine_fachee", ep: ["seance", 800] }, to: "IG_sauvee" }, lose: { to: "IG_guetapens_perdu" } },
    choices: [] },

  IG_guetapens_parole: { act: "I", title: "Sous le pont des Cordiers", place: "gouttieres",
    text: [
      "Boscot t'écoute. Il regarde la main de Fauvette sous la sienne, longtemps, comme s'il la voyait pour la première fois. Puis il retire sa main. « La Reine sera pas contente », dit-il. Il le dit sans conviction, pour la forme, comme on ferme une porte qui ne ferme plus.",
      "« Tu iras la voir, dit-il. Toi. Demain. Et tu lui diras que Boscot a pas trouvé la petite. » Il fait un signe, les deux casseurs lâchent Fauvette, et ils remontent tous les trois l'escalier du pont, sans se presser, le maillet sur l'épaule.",
    ],
    fx: { flag: "ig:dette_connue", questSeen: "IG_dette" },
    choices: [{ label: "Aller vers Fauvette", to: "IG_sauvee" }] },

  IG_guetapens_paye: { act: "I", title: "Sous le pont des Cordiers", place: "gouttieres",
    text: [
      "Tu comptes trois ducats dans la paume de Boscot. Il les compte à son tour, deux fois, en remuant les lèvres. Puis il lâche la main de Fauvette. « La Reine aime qu'on paie, dit-il. Elle aime moins qu'on paie pour les autres. Elle dit que ça fait des habitudes. »",
      "Il s'en va avec ses hommes. Sous l'arche, il ne reste que l'eau, la vase, les barques, et Fauvette qui frotte son poignet.",
    ],
    fx: { quest: "IG_dette", set: { ig_dette: "payee" }, ep: ["seance", 600] },
    choices: [{ label: "Aller vers Fauvette", to: "IG_sauvee" }] },

  IG_guetapens_perdu: { act: "I", title: "Sous le pont des Cordiers", place: "gouttieres",
    text: [
      "Tu te réveilles dans la vase, la joue contre le flanc d'une barque. Il fait nuit. Ta tête bourdonne comme un rucher. Sous l'arche, personne. Sur la bitte d'amarrage, quelqu'un a laissé le cordon de cuir, coupé, sans rien au bout.",
      "Une laveuse, sur le quai, rince son linge à la lanterne. « Ils l'ont emmenée à la Cour, dit-elle sans lever la tête. Entière. Boscot a dit que la Reine déciderait. Il avait l'air de quelqu'un qui préfère que ce soit la Reine qui décide. »",
    ],
    fx: { pv: -2 },
    choices: [{ label: "Aller à la Cour des Pelles racheter Fauvette", big: true, to: "IG_reine_rachat" }] },

  IG_reine_rachat: { act: "I", title: "La balance de la Reine", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "On te laisse entrer sans rien te demander : on t'attendait. Fauvette est assise sur un tabouret au milieu de l'atelier, les mains liées dans le dos, entière, la lèvre fendue. Sur la table de Margaux, sous la cloche de verre des ors, il y a l'œil de pie.",
      "« Voilà, dit Margaux Pelle. Une fille qui me doit trois ducats, et une lentille qu'un homme aux gants gris veut payer cinquante. Je suis une femme d'affaires. Fais-moi une offre, et fais-la bonne : la Banque attend à la porte, dans ma tête. »",
    ],
    choices: [
      { label: "Lui chanter la chanson de sa mère, avec les mots de dessous", hide: { any: [{ not: { voile: "ig_mg_mere" } }, { not: { voile: "ig_hu_chanson" } }] }, fx: { flag: "ig:reine_amie" }, to: "IG_rachat_fin" },
      { label: "Lui rappeler que la Banque paie en promesses", hide: { not: { has: "ig:reine_gants" } }, to: "IG_rachat_fin" },
      { label: "Lui offrir un trésor de ton sac", if: { any: [{ item: "ig_tr_broche" }, { item: "ig_tr_anneau" }, { item: "ig_tr_nef" }, { item: "ig_tr_compas" }, { item: "ig_tr_sceau" }, { item: "ig_tr_bague" }] }, why: "Tu n'as rien qui la tente.", to: "IG_rachat_troc" },
      { label: "Payer : trois ducats pour la fille, trois pour la lentille", fx: { gold: -120 }, to: "IG_rachat_fin" },
      { label: "Revenir cette nuit par les toits et la faire sortir", test: { dom: "discretion", diff: -20, label: "Libérer une prisonnière de la Reine", help: [LIS, { if: { seen: "IG_cour_toits" }, v: 10 }] },
        win: { fx: { flag: "ig:reine_fachee" }, to: "IG_sauvee" }, lose: { fx: { gold: -10, pv: -2 }, to: "IG_rachat_fin" } },
    ] },

  IG_rachat_fin: { act: "I", title: "La balance de la Reine", place: "gouttieres",
    text: [
      { outcome: "lose", text: "Boscot t'attend sous la lucarne et te cueille au bas de l'échelle, sans méchanceté. On te fouille, on te prend ce que tu as, et l'on te ramène devant la Reine, qui n'a pas bougé de sa chaise. « Voilà ton offre, dit-elle. Elle est faite. »" },
      "Margaux soulève la cloche de verre, prend l'anneau de corne entre deux doigts, et te le tend. Un commis tranche les liens de Fauvette avec un canif à plume. La fille se lève, frotte ses poignets, ne dit pas merci.",
      "« Sa dette est effacée, dit Margaux. Les gants gris attendront. J'ai toujours aimé faire attendre la Banque. » Elle remet ses bésicles. « Sortez. Tous les deux. Vous me coûtez de l'argent. »",
    ],
    fx: { flag: "ig:dette_reglee", quest: "IG_dette", set: { ig_dette: "rachetee" } },
    choices: [{ label: "Sortir avec Fauvette", to: "IG_sauvee" }] },

  IG_sauvee: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "Fauvette s'assied sur le rebord d'une barque, au bord de l'eau, et elle tremble. Ça ne dure pas. Elle se mord la lèvre, se lève, se secoue comme un chien qui sort du canal. « Ils m'auraient cassé les deux, dit-elle. Boscot fait toujours les deux. Il dit que c'est plus juste. »",
      { if: { not: { item: "oeil_pie" } }, text: "Elle fouille sous sa chemise, ou dans sa botte, ou dans l'ourlet de sa manche, tu ne vois pas bien, et elle te tend l'anneau de corne et la lentille de quartz fumé. « Tiens. Garde-le. Il porte malheur, ou c'est moi. Depuis que je l'ai, tout le monde veut me casser quelque chose. »" },
      "Elle te regarde, et pour la première fois elle ne compte pas tes poches. « T'es venu{e}. Personne vient, sous les ponts. » Elle te tape sur l'épaule, fort, pour ne pas avoir à faire autre chose. « Je te dois une main. Deux. Je paie toujours ce que je dois, même à la Reine, quand je peux. »",
      { with: "lison", text: "Lison tend à Fauvette un mouchoir pour sa lèvre. Fauvette le prend, le regarde, et le met dans sa poche sans s'en servir. Lison sourit à l'eau." },
    ],
    fx: { item: "oeil_pie", set: { ig_oeil: "sauvee" }, quest: "IG_oeil", flag: "fauvette:amie", unflag: "ig:fauvette_fachee", conf: { fauvette: 20 }, ep: ["seance", 1500] },
    choices: [
      { label: "Regarder à travers l'œil de pie", hide: { seen: "IG_premier_regard" }, to: "IG_premier_regard" },
      { label: "Lui parler sur les toits, plus tard, au calme", to: "IG_fauvette_toit" },
    ] },
});

// ==================================================================== Fauvette afterwards: the roof, the debt, what she saw
Object.assign(P, {
  IG_fauvette_toit: { act: "I", title: "Le toit du pont des Cordiers", place: "gouttieres", backName: "le toit de Fauvette",
    text: [
      { first: true, text: "Fauvette a un endroit à elle, dit-elle, à part la cage aux pigeons : le toit de la maison du péage, sur le pont des Cordiers. Une plate-forme de plomb entre deux cheminées, avec vue sur trois canaux, les Halles et le Beffroi. On y monte par une gouttière qu'elle seule trouve commode." },
      { again: true, text: "Le toit du péage, sur le pont des Cordiers. Fauvette est là, ou elle arrive quand tu y es depuis un moment, sans que tu l'aies entendue." },
      { if: { has: "ig:fauvette_fachee" }, text: "Elle te regarde arriver sans bouger. « Tiens. Le voleur de voleuses. » Elle a noué un nouveau cordon à son cou, sans rien au bout, par habitude ou par défi.", else: "Elle te fait de la place sur le plomb chaud, d'un mouvement de hanche. Elle épluche une orange volée et t'en donne la moitié, quartier par quartier." },
      { if: { all: [{ has: "ig:fauvette_fachee" }, { has: "ig:vol_paye" }] }, text: "« Deux ducats sur ma poutre, dit-elle. T'aurais pu rien laisser. » Elle hausse les épaules. « Ça change rien. Ça change un peu. »" },
      { after: "ig:dette_reglee", text: "« La Reine m'a fait dire que j'étais quitte, dit-elle. C'est la première fois de ma vie. Je sais pas quoi faire de mes mains. »" },
    ],
    fx: { met: "fauvette" },
    choices: [
      { label: "Lui parler de l'œil de pie, qu'elle porte encore au cou", hide: { item: "oeil_pie" }, to: [{ if: { has: "fauvette:amie" }, to: "IG_rencontre_parole" }, { to: "IG_rencontre" }] },
      { label: "Lui demander ce qu'elle a vu, la nuit des Lanternes", hide: { any: [{ not: { has: "fauvette:amie" } }, { seen: "IG_temoin" }, { has: "ig:fauvette_fachee" }] }, to: "IG_temoin" },
      { label: "Lui parler de sa dette envers la Reine", hide: { has: "ig:dette_reglee" }, to: "IG_dette" },
      { label: "Lui demander de venir avec toi", hide: { any: [{ not: { has: "fauvette:amie" } }, { has: "ig:fauvette_fachee" }] }, if: { has: "ig:dette_reglee" }, why: "Tant qu'elle doit à la Reine, elle ne marche avec personne.", to: "IG_rejoint" },
      { back: "IG_entree" },
    ] },

  IG_dette: { act: "I", title: "La dette de Fauvette", place: "gouttieres", backName: "le toit de Fauvette",
    text: [
      "« À la Saint-Blaise, dit Fauvette, j'ai pris un sac de couverts chez un orfèvre des Changeurs, pour la Reine. Commande. Douze couverts, une soupière. En repassant par les Gouttières, une gouttière a cédé. Le sac est tombé dans le canal. Moi, je suis tombée sur une charrette de foin. » Elle a un rire bref. « La Reine dit que ce qu'on perd en chemin, on le doit. Trois ducats. Je lui en ai rendu un. Il m'en reste deux, et les intérêts. »",
      "« Elle me fait chercher. Boscot me cherche. Il est gentil, Boscot, mais il casse les mains quand on lui dit de casser. » Elle regarde ses doigts, longs, abîmés, les doigts les plus fins des Gouttières. « C'est tout ce que j'ai, ça. »",
      { if: { has: "poids:dette" }, text: "Tu connais le goût de ce genre de chiffre. Tu en as un, toi aussi, chez des gens qu'on ne fait pas attendre, et tu y penses en t'endormant." },
      { with: "tibere", text: "Tibère se frotte la nuque. « {{oreille#ig_ti_dette|Trois ducats, ce n'est pas grand-chose|Trois ducats, je les ai perdus en une soirée, le soir où Rosalie m'a fermé la porte}}. »" },
    ],
    fx: { met: "fauvette", flag: "ig:dette_connue", questSeen: "IG_dette" },
    choices: [
      { label: "Lui donner de quoi payer, ici, maintenant", fx: { gold: -60 }, to: "IG_dette_fin" },
      { label: "Aller voir la Reine toi-même, à la Cour des Pelles", to: "IG_dette_reine" },
      { label: "Lui promettre d'y penser", back: "IG_entree" },
      { label: "Lui dire que ses dettes ne te regardent pas", hide: { has: "ig:dette_reglee" }, refuse: true, fx: { conf: { fauvette: -5 } }, back: "IG_entree" },
    ] },

  IG_dette_reine: { act: "I", title: "La balance de la Reine", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Margaux Pelle écoute ta demande en pesant une boucle de soulier. « La dette de la petite. » Elle note quelque chose dans son registre. « Deux ducats, plus un pour les intérêts, plus un pour le dérangement de Boscot. Trois, je te fais un prix. Ou quelque chose qui les vaut, sur ma balance. Ou un service. »",
      "« Ici, dit-elle, on règle toujours. On ne règle pas toujours en argent. »",
      { after: "ig:reine_amie", text: "Elle te regarde par-dessus ses bésicles, et quelque chose dans sa bouche hésite. Elle se souvient de la chanson de sa mère. Elle n'a pas l'habitude qu'on s'en souvienne avec elle." },
    ],
    fx: { flag: "ig:dette_connue", questSeen: "IG_dette" },
    choices: [
      { label: "Lui rappeler la chanson de sa mère", hide: { not: { has: "ig:reine_amie" } }, fx: { set: { ig_dette: "chanson" } }, to: "IG_dette_fin" },
      { label: "Payer trois ducats", fx: { gold: -60, set: { ig_dette: "payee" } }, to: "IG_dette_fin" },
      { label: "Lui offrir quelque chose qui les vaut", if: { any: TRESORS.map(function (t) { return { item: t[0] }; }) }, why: "Tu n'as rien sur toi qui pèse assez sur sa balance.", to: "IG_dette_troc" },
      { label: "Lui proposer un service", hide: { seen: "IG_reine_grenier" }, to: "IG_reine_grenier" },
      { label: "Marchander, en gens du métier", hide: { has: "ig:marchande" }, test: { dom: "social", diff: -20, label: "Faire baisser la Reine", help: [{ if: { has: "metier:parole" }, v: 10 }, LIS, { if: { has: "ig:reine_gants" }, v: 10 }] },
        win: { fx: { gold: -20, set: { ig_dette: "marchandee" } }, to: "IG_dette_fin" }, lose: { fx: { flag: "ig:marchande", note: "Margaux t'écoute marchander comme on écoute un musicien de rue qui joue presque juste. « Joli. Non. Je n'ai jamais baissé un prix pour quelqu'un qui en avait besoin. »" }, to: "IG_dette_reine" } },
      { back: "IG_reine" },
    ] },

  IG_dette_troc: { act: "I", title: "La balance de la Reine", place: "gouttieres",
    text: [
      "Tu poses sur la table ce que tu as trouvé dans les Gouttières. Margaux sort un trébuchet d'orfèvre, une pierre de touche, un flacon d'eau-forte, et une loupe de cristal. Elle prend son temps. Les commis se sont levés pour voir.",
    ],
    choices: troc("IG_dette_fin").concat([{ back: "IG_dette_reine" }]) },

  IG_rachat_troc: { act: "I", title: "La balance de la Reine", place: "gouttieres",
    text: [
      "Tu poses ta trouvaille sur la table, à côté de la cloche de verre où dort l'œil de pie. Margaux la soupèse, la gratte d'un ongle, la passe à la pierre de touche. Fauvette, sur son tabouret, suit chaque geste sans respirer.",
    ],
    choices: troc("IG_rachat_fin").concat([{ back: "IG_reine_rachat" }]) },

  IG_dette_fin: { act: "I", title: "La dette réglée", place: "gouttieres",
    text: [
      { if: { is: { ig_dette: "chanson" } }, text: "Margaux referme son registre sans rien y écrire. « Ma mère m'aurait battue, dit-elle, si j'avais fait payer quelqu'un qui connaissait les mots. La petite est quitte. Dis-le-lui, et dis-lui de ne plus tomber des gouttières. »" },
      { if: { not: { is: { ig_dette: "chanson" } } }, text: "Margaux raye une ligne dans son registre, d'un trait de plume bien droit, puis elle souffle sur l'encre. « Quitte. Elle est quitte. Je n'aime pas ce mot, il ne rapporte rien. »" },
      "Le soir, Fauvette t'attend sur la margelle du lavoir. Elle sait déjà. Tout se sait dans les Gouttières avant d'arriver. Elle ne dit pas merci. Elle te tend un petit objet enveloppé dans un chiffon : une médaille de pèlerin, la seule de sa vitrine qui soit à elle depuis toujours. « Tu me la rendras quand je te devrai plus rien. Donc jamais. »",
      { if: { has: "ig:fauvette_fachee" }, text: "« Tu m'as pris l'œil, dit-elle. T'as payé ma dette. Je sais pas faire ce compte-là. Je vais arrêter de le faire. »" },
    ],
    fx: { flag: ["ig:dette_reglee", "fauvette:amie", "ig:fauvette_connue"], unflag: "ig:fauvette_fachee", quest: "IG_dette", met: "fauvette", conf: { fauvette: 15 }, ep: ["seance", 800] },
    choices: [
      { label: "Lui demander ce qu'elle a vu, la nuit des Lanternes", hide: { seen: "IG_temoin" }, to: "IG_temoin" },
      { label: "Lui demander de venir avec toi", hide: { any: [{ present: "fauvette" }, { seen: "IG_rejoint" }] }, to: "IG_rejoint" },
      { back: "IG_entree" },
    ] },

  IG_temoin: { act: "I", title: "Ce que Fauvette a vu", place: "gouttieres", takes: "night",
    text: [
      "Fauvette t'emmène sur le toit du péage, la nuit, et elle attend que la lune passe derrière le Beffroi pour parler.",
      { with: "any", text: "Elle a voulu que tu montes seul{e}. Tes compagnons sont restés en bas, sur le pont, à regarder l'eau." },
      "« La nuit des Lanternes, j'étais sur le toit du cordier, en face de chez la vieille. Je guettais la fête. À minuit, un moine est sorti de la boutique. Capuche, bure, une main sur le front. Il a tiré la porte, mal, elle a rebattu. Il est parti vers le pont des Noyés, sans courir. »",
      "« Après, je suis descendue. La porte battait. En bas des marches de la cave, il y avait la vieille. J'ai pris ce qui brillait sur l'établi et je suis repartie par le toit. » Elle se tait. « Voilà. Je l'ai dit une fois. Je le redirai pas. »",
      "Tu {{miroir#ig_mi_fete|étais à la fête, à minuit, comme toute la ville|étais à la fête, à minuit, parce que tu avais claqué la porte, et tu as traîné là-bas pour ne pas avoir à rentrer t'excuser}}.",
    ],
    fx: { flag: "fauvette:temoin", clue: "ig_c_moine", met: "fauvette", conf: { fauvette: 5 }, ep: ["seance", 1000] },
    choices: [
      { label: "Lui demander de venir avec toi", hide: { any: [{ present: "fauvette" }, { seen: "IG_rejoint" }, { not: { has: "ig:dette_reglee" } }] }, to: "IG_rejoint" },
      { back: "IG_entree" },
    ] },

  IG_rejoint: { act: "I", title: "Fauvette", place: "gouttieres",
    text: [
      "Fauvette te regarde comme on regarde un toit qu'on n'a jamais pris : la pente, les tuiles, ce qui tient et ce qui lâchera. « Avec toi ? Pour faire quoi ? »",
      "Tu le lui dis : la boutique, la cave, les écrits d'Odeline, le Beffroi, la Banque qui rôde. Elle écoute jusqu'au bout, puis elle saute sur ses pieds. « T'as des ennuis avec la Banque, la Reine te salue, et tu portes un œil qui voit le faux. » Elle remonte son col. « Je viens. Les toits se débrouilleront sans moi. Je veux voir la tête des banquiers à travers ton œil. »",
      { with: "lison", text: "Lison la toise de haut en bas. « Tu sais nager ? — Non. — Bien. Comme ça, tu resteras dans la barque. » Fauvette sourit de sa dent cassée." },
      { with: "tibere", text: "Tibère soupire. « Une voleuse. Le Guet me reprendrait rien que pour la ramener. » Fauvette lui fait une révérence de cour, parfaite, et lui rend sa propre bourse." },
    ],
    fx: { join: "fauvette", flag: "fauvette:amie", conf: { fauvette: 10 }, ep: ["seance", 800] },
    choices: [{ back: "IG_entree" }] },
});

// ==================================================================== the canal and the drowned bell
Object.assign(P, {
  IG_canal: { act: "I", title: "Le canal des Gouttières", place: "gouttieres", backName: "le canal des Gouttières",
    text: [
      { first: true, text: "Le canal des Gouttières est le plus vieux de Salvèze, et le plus étroit : deux barques s'y croisent en rentrant les rames. Ses quais sont de pierre noire, rongée au ras de l'eau, plantés de pieux de chêne où l'on amarre les barques des laveuses. L'eau est verte, épaisse, et elle sent l'écorce de tan, le savon noir et la vase. À l'endroit où il fait un coude, un vieux passeur attend sur une barque plate, une perche en travers des genoux, qu'on veuille aller de l'autre côté." },
      { again: true, when: "day", text: "Le canal des Gouttières, ses laveuses à genoux sur les marches, ses battoirs qui claquent. Le passeur somnole sur sa barque, au coude." },
      { again: true, when: "night", text: "Le canal la nuit : une lanterne sur la barque du passeur, et l'eau noire qui monte doucement le long des marches. On entend les rats sur les pieux, et, de temps en temps, rien du tout, ce qui est pire." },
      { when: "night", after: "voile:ig_lu_sonne", text: "Tu tends l'oreille vers le coude du canal. Sous l'eau, très loin, quelque chose fait un son rond, qui ne finit pas tout à fait." },
      { after: "ig:cloche_marcoul", text: "Les débardeurs de Marcoul ont planté une chèvre de levage sur le quai, au-dessus des pieux noirs. Ils te saluent en passant, d'un coup de menton." },
    ],
    choices: [
      { label: "Parler au vieux passeur", to: "IG_cloche" },
      { label: "S'asseoir au bord de l'eau avec Lison", hide: { any: [{ not: { present: "lison" } }, { seen: "IG_lison_canal" }] }, to: "IG_lison_canal" },
      { label: "Les débardeurs qui sondent le canal avec des grappins", hide: { any: [{ not: { seen: "IG_cloche" } }, { seen: "IG_cloche_debardeurs" }] }, to: "IG_cloche_debardeurs" },
      { label: "Plonger vers la cloche, entre les deux pieux noirs", hide: { any: [{ not: { has: "ig:cloche_lieu" } }, { seen: "IG_cloche_dedans" }] }, to: "IG_cloche_plonge" },
      { back: "IG_entree" },
    ] },

  IG_cloche: { act: "I", title: "Le passeur du coude", place: "gouttieres", backName: "la barque du passeur",
    text: [
      { first: true, text: "Le passeur s'appelle Lubin, il a soixante-dix ans, et il a passé ce canal, dit-il, plus de fois qu'il n'a dit bonjour. Il a les mains comme des racines et une voix de gorge, enrouée par l'eau." },
      { again: true, text: "Lubin te voit venir et pose sa perche. « Encore la cloche ? Tout le monde veut la cloche, cette semaine. »" },
      "Tu lui parles de ce qu'on raconte au Pot Fêlé : une cloche au fond du canal, qui sonnerait les nuits de grande marée. Il rit, et le rire lui fait tousser. « La cloche de la chapelle des fontainiers. Ils l'ont jetée à l'eau la nuit des Comptoirs, il y a trois cents ans, pour qu'elle ne sonne pas l'alarme. C'est ce qu'on dit. La cloche ? {{oreille#ig_lu_cloche|C'est une histoire pour faire peur aux enfants|Je l'ai touchée, à quinze ans, en plongeant pour une ancre, et il y avait de l'air dedans, assez pour respirer trois fois}}. »",
      "« Elle sonne {{oreille#ig_lu_sonne|aux grandes marées, à ce qu'on dit|quand l'eau monte dans sa panse et pousse l'air, et l'air chante par une fente du bronze}}. Les vieux disent qu'elle sonne pour la reine. Moi, je dis qu'elle sonne pour rien, comme moi. »",
      { with: "lison", text: "Lison s'accroupit au bord du quai et regarde l'eau, longuement, comme on lit. « Courant de fond vers le nord, dit-elle. Vase molle. Si elle est là, elle s'est enfoncée de travers. »" },
      { with: "gildas", text: "Frère Gildas demande au passeur s'il connaît le nom de la cloche. Lubin le regarde de travers. « Une cloche, ça a un nom, chez les moines ? — Chez nous, oui, dit Gildas. On les baptise. »" },
    ],
    fx: { meet: "ig_lubin", questSeen: "IG_cloche" },
    choices: [
      { label: "Lui demander où elle est exactement", hide: { any: [{ not: { voile: "ig_lu_cloche" } }, { has: "ig:cloche_lieu" }] }, fx: { flag: "ig:cloche_lieu", ep: ["perso", 200] }, to: "IG_cloche_lieu" },
      { label: "L'écouter cette nuit, à la marée", hide: { any: [{ has: "ig:cloche_lieu" }, { night: true }] }, to: "IG_cloche_nuit" },
      { label: "L'écouter maintenant, avec Lubin", hide: { any: [{ has: "ig:cloche_lieu" }, { not: { night: true } }] }, to: "IG_cloche_nuit" },
      { back: "IG_canal" },
    ] },

  IG_cloche_lieu: { act: "I", title: "Le passeur du coude", place: "gouttieres",
    text: [
      "Lubin te regarde longtemps, comme s'il cherchait sur ton visage d'où tu tiens ça. Puis il pointe sa perche vers deux pieux plus noirs que les autres, au milieu du coude. « Entre les deux. Quatre brasses. Elle est couchée sur le flanc, la bouche vers la Salve. On entre par en dessous. On ressort pareil. Et on ne reste pas. »",
      "« Je l'ai jamais dit à personne. Ma mère disait que ça portait malheur, de parler de ce qui est au fond. » Il crache dans l'eau. « Ma mère est morte de vieillesse. Je vois pas où était le malheur. »",
    ],
    choices: [{ back: "IG_canal" }] },

  IG_cloche_nuit: { act: "I", title: "La marée du coude", place: "gouttieres", takes: "night",
    text: [
      "La nuit, l'eau monte dans le canal, poussée par la marée qui remonte la Salve. Lubin t'a fait asseoir dans sa barque, au coude, la lanterne posée sur le banc. Il ne dit rien. Les rats ont quitté les pieux.",
      "Vers la deuxième heure, l'eau se met à frissonner autour de la barque. Puis vient le son : une note ronde, très basse, qui monte de l'eau elle-même, et qui fait trembler le bois sous tes mains. Elle dure le temps de dix respirations, et elle ne finit pas tout à fait. Les deux pieux noirs, devant toi, frémissent.",
      "« Là, dit Lubin. Tu l'as entendue. Maintenant, tu sais. »",
      { with: "lison", text: "Lison a posé la main à plat sur l'eau, les yeux fermés. « Elle est vivante, dit-elle. Je veux dire : elle a de l'air. »" },
    ],
    fx: { flag: "ig:cloche_lieu", ep: ["perso", 250] },
    choices: [
      { label: "Plonger tout de suite", to: "IG_cloche_plonge" },
      { back: "IG_canal" },
    ] },

  IG_cloche_debardeurs: { act: "I", title: "Les grappins de Marcoul", place: "gouttieres",
    text: [
      "Quatre débardeurs sondent le canal depuis une gabare plate, avec des grappins au bout de longues cordes. Ils ont le torse nu malgré le froid, et des crochets de quai à la ceinture. Le plus vieux, un homme à la barbe grise tressée, se présente : Marcoul. Il te demande, sans aménité, ce que tu regardes.",
      "« La cloche ? On la remonte, dit-il. Le bronze se vend au poids. {{oreille#ig_ma_bronze|C'est le droit des débardeurs, tout ce qui coule dans le canal est à nous|La Reine nous a payés d'avance, deux ducats, et j'ai bu l'avance avec les gars ; si on remonte rien, elle me fait jeter dans le canal à sa place}}. » Il te montre son crochet. « Alors tu regardes ailleurs. »",
      { with: "lison", text: "Lison regarde leurs grappins. « Avec ça, vous accrocherez des chaises et des chats crevés, dit-elle. Elle est enfoncée de travers sous la vase. »" },
    ],
    fx: { meet: "ig_marcoul" },
    choices: [
      { label: "Dire à Marcoul que la Reine saura, pour l'avance bue, si tu lui en parles", hide: { not: { voile: "ig_ma_bronze" } }, fx: { flag: "ig:marcoul_tenu", ep: ["perso", 250] }, to: "IG_cloche_accord" },
      { label: "Lui proposer un marché : tu plonges, il remonte le bronze après", test: { dom: "social", diff: -10, label: "Traiter avec des débardeurs", help: [TIB, LIS] },
        win: { to: "IG_cloche_accord" }, lose: { to: "IG_cloche_rate" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: 0, label: "Lison leur montre où chercher, ailleurs" }, win: { fx: { conf: { lison: 3 } }, to: "IG_cloche_accord" }, lose: { to: "IG_cloche_rate" } },
      { label: "Leur dire de déguerpir", fight: { title: "Sur la gabare de Marcoul", enemies: [{ id: "docker", n: 3 }],
        win: { fx: { ep: ["perso", 300], flag: "ig:marcoul_battu" }, to: "IG_cloche_accord" }, lose: { fx: { pv: -2 }, to: "IG_cloche_rate" },
        flee: { label: "Sauter sur le quai", dom: "nature", diff: 0, to: "IG_canal" } } },
      { back: "IG_canal" },
    ] },

  IG_cloche_accord: { act: "I", title: "Les grappins de Marcoul", place: "gouttieres",
    text: [
      { after: "ig:marcoul_battu", text: "Marcoul se relève, essuie le sang de sa lèvre avec le dos de la main, et rit. « Bon. T'as la main lourde. On peut parler, alors. »" },
      "Marcoul s'assied sur le plat-bord. « Bon. Tu plonges. Tu nous dis où elle est. Ce que tu trouves dedans, c'est pour toi ; le bronze, c'est pour nous. On la remontera au printemps, avec une chèvre et des palans, comme des gens sérieux. » Il te tend une main énorme. « Et la Reine aura son bronze. »",
    ],
    fx: { flag: "ig:cloche_accord" },
    choices: [
      { label: "Toper", fx: { flag: "ig:cloche_lieu" }, back: "IG_canal" },
    ] },

  IG_cloche_plonge: { act: "I", title: "Entre les pieux noirs", place: "gouttieres",
    text: [
      "Tu te déshabilles sur la barque de Lubin, en grelottant. L'eau du canal est noire, même en plein jour, et froide comme une lame. Lubin a noué une corde à ta cheville et l'autre bout au banc de la barque. « Trois tirs, je te remonte. Pas de tirs, je te remonte aussi. »",
      { with: "lison", text: "Lison s'est déshabillée elle aussi, en silence. « J'irai devant, dit-elle. Je vois mieux que toi dans l'eau trouble. C'est de famille. »" },
      { if: { voile: "ig_lu_cloche" }, text: "Tu sais ce que Lubin a gardé pour lui pendant cinquante-cinq ans : il y a de l'air dedans, assez pour respirer trois fois. Ce savoir change la façon dont on remplit ses poumons." },
    ],
    choices: [
      { label: "Plonger", test: { dom: "nature", diff: -20, label: "Quatre brasses dans l'eau noire", help: [LIS, { if: { voile: "ig_lu_cloche" }, v: 15 }, { if: { item: "corde" }, v: 5 }] },
        win: { to: "IG_cloche_dedans" }, lose: { fx: { pv: -4 }, to: "IG_cloche_rate" } },
      { label: "Laisse-moi faire", who: "lison", test: { dom: "nature", diff: -10, label: "Lison plonge la première et te guide" }, win: { fx: { conf: { lison: 5 } }, to: "IG_cloche_dedans" }, lose: { fx: { pv: -3 }, to: "IG_cloche_rate" } },
      { back: "IG_canal" },
    ] },

  IG_cloche_rate: { act: "I", title: "Le canal des Gouttières", place: "gouttieres",
    text: [
      "L'eau te prend, te retourne, te colle à la vase. Le haut et le bas se confondent. Ta main heurte un pieu, glisse sur les moules, puis une corde se tend à ta cheville et te tire, sans douceur, vers une lumière jaune. Tu sors la tête en vomissant de l'eau verte.",
      "Lubin te hisse dans la barque par la ceinture comme un sac de farine. « Voilà, dit-il. Maintenant tu sais ce que ça fait. La plupart, ça leur suffit. »",
      { with: "lison", text: "Lison remonte à son tour, de l'autre côté de la barque. « Tu as nagé vers le nord, dit-elle. Elle est au sud. Recommence quand tu auras arrêté de trembler. »" },
    ],
    choices: [
      { label: "Replonger, dès que tu peux respirer", to: "IG_cloche_plonge" },
      { label: "Laisser la cloche au canal", fx: { set: { ig_cloche: "laissee" }, quest: "IG_cloche" }, back: "IG_canal" },
    ] },

  IG_cloche_dedans: { act: "I", title: "La panse de la cloche", place: "gouttieres",
    text: [
      "Tu passes sous la lèvre de bronze, à tâtons dans la vase, et ta tête crève une surface que tu ne voyais pas. De l'air. Il sent la rouille et la pierre, et il est si vieux que tu as peur de le respirer. Tu le respires. Tu es dans la cloche, la tête dans la bulle, le corps dans l'eau noire, et ta main trouve le bronze au-dessus de toi, couvert d'une écriture en relief.",
      "Tu la lis du bout des doigts, lettre après lettre, comme les aveugles : *FONDUE POUR YSAURE REINE DU DELTA · LES SEPT QUI SE TAISENT M'ONT DESCENDUE ICI · QUAND L'EAU ME REMPLIT JE CHANTE POUR EUX*. Et à la fin, un croissant de lune, gravé en creux.",
      "Le battant pend au milieu de la bulle, figé dans le vert-de-gris. Quelqu'un y a noué, il y a longtemps, une bourse de cuir que l'eau a mangée. Dedans, quand ta main la défait, il reste un anneau. Il est lourd, et il ne s'est pas terni.",
      { with: "lison", text: "Lison émerge à côté de toi, dans la bulle, ses cheveux plaqués sur le front. Elle passe la main sur le croissant de lune, et son visage se ferme. Elle se tait. Ici, l'air manque pour parler." },
    ],
    fx: { item: "ig_tr_anneau", clock: { tresors: 1 }, flag: "tresor:ig_anneau", clue: "ig_c_cloche", ep: ["seance", 800] },
    choices: [{ label: "Nager vers la lumière, l'anneau au poing", to: "IG_cloche_fin" }] },

  IG_cloche_fin: { act: "I", title: "Le canal des Gouttières", place: "gouttieres",
    text: [
      "Tu remontes dans la barque de Lubin en claquant des dents, l'anneau serré dans ton poing. Au jour, il est d'or rouge, gravé à l'intérieur d'un croissant et d'un nom effacé. Lubin ne demande pas à voir. Il te tend une couverture qui sent le chien mouillé.",
      { if: { has: "ig:cloche_accord" }, text: "Sur le quai, Marcoul attend avec ses hommes. Il te regarde, puis regarde les pieux noirs. « Entre les deux ? » Tu hoches la tête. Il sourit dans sa barbe tressée. La Reine aura son bronze au printemps." },
      "Le soir, au Pot Fêlé, on raconte déjà que quelqu'un a parlé à la cloche noyée. On ne sait pas qui. On sait que la cloche n'a pas répondu, ce qui, d'après Hermance, est plutôt bon signe.",
    ],
    choices: [
      { label: "Dire à Marcoul où elle est : le bronze est à ceux qui le remontent", hide: { any: [{ has: "ig:cloche_accord" }, { not: { seen: "IG_cloche_debardeurs" } }] }, fx: { set: { ig_cloche: "marcoul" }, flag: "ig:cloche_marcoul", gold: 10, quest: "IG_cloche" }, back: "IG_canal" },
      { label: "Laisser Marcoul remonter le bronze, comme convenu", hide: { not: { has: "ig:cloche_accord" } }, fx: { set: { ig_cloche: "marcoul" }, flag: "ig:cloche_marcoul", quest: "IG_cloche" }, back: "IG_canal" },
      { label: "Garder le secret : la cloche chantera encore pour ceux qui l'ont descendue", hide: { has: "ig:cloche_accord" }, fx: { set: { ig_cloche: "secret" }, fac: { taiseurs: 3 }, quest: "IG_cloche" }, back: "IG_canal" },
    ] },

  IG_lison_canal: { act: "I", title: "Au bord du canal", place: "gouttieres", with: "lison",
    text: [
      "Lison s'assied sur les marches du canal, les pieds au ras de l'eau, et tu t'assieds à côté d'elle. Une laveuse chante plus loin, en battant son linge. Lison ramasse un caillou, le fait tourner entre ses doigts, ne le lance pas.",
      "« Les canaux de la ville, {{oreille#ig_li_canaux|je les connais par cœur, c'est mon métier|ma grand-mère me les a fait apprendre un par un, avec les égouts de la reine, pour le jour où il faudrait te sortir de Salvèze}}, dit-elle. Celui-ci est le plus vieux. Il passait sous le palais, avant. Il en reste des voûtes, sous les Gouttières, où l'eau va toute seule. »",
      "Elle lance le caillou, enfin. Il ricoche quatre fois. « Ma grand-mère dit que les villes ont deux langues : celle des rues et celle des canaux. La seconde est plus honnête. Elle va toujours vers la mer. »",
    ],
    fx: { conf: { lison: 3 } },
    choices: [
      { label: "Lui demander quel jour, au juste, il faudrait te sortir de Salvèze", hide: { not: { voile: "ig_li_canaux" } }, to: "IG_lison_jour" },
      { back: "IG_canal" },
    ] },

  IG_lison_jour: { act: "I", title: "Au bord du canal", place: "gouttieres", with: "lison",
    text: [
      "Lison ne se retourne pas tout de suite. Elle regarde l'eau, là où le caillou a coulé. Puis elle dit, sans colère : « Tu m'écoutes avec ça, hein. Le cornet de la vieille. »",
      "« Le jour où la ville voudra te garder, répond-elle. Ma grand-mère dit qu'il vient toujours, pour les gens comme toi. Elle a souvent raison, et ça m'agace. » Elle se lève, s'essuie les mains sur ses cuisses. « Je connais le chemin. C'est tout ce que tu as besoin de savoir. Le reste, demande-le-lui à elle, quand tu la verras. »",
    ],
    fx: { conf: { lison: 5 }, ep: ["perso", 200] },
    choices: [{ back: "IG_canal" }] },
});

// ==================================================================== the singing fountain
Object.assign(P, {
  IG_fontaine: { act: "I", title: "La Fontaine-Sourde", place: "gouttieres", backName: "la place de la Fontaine-Sourde",
    text: [
      { first: true, text: "La place est un triangle de pavés gras entre trois maisons à encorbellement. Au milieu, la fontaine : un bassin octogonal de pierre grise et, adossé à une colonne au-dessus, un mascaron de femme couronnée, les yeux ouverts, les lèvres serrées. L'eau sort de ses deux oreilles, en deux filets minces, et tombe dans le bassin avec un bruit de conversation." },
      { first: true, text: "On l'appelle la Fontaine-Sourde parce que personne, dit-on, ne l'écoute. Les porteuses d'eau du quartier y remplissent leurs seaux à la file, avec des jougs d'épaule et des chapeaux de paille, et elles se taisent en le faisant, toutes, comme on se tait à l'église." },
      { again: true, when: "day", text: "La Fontaine-Sourde, son mascaron à la bouche close, ses deux filets d'eau. Les porteuses font la queue, leurs seaux à la main." },
      { again: true, when: "night", text: "La place est vide, la nuit. L'eau coule des oreilles de la reine de pierre, et ce bruit tient compagnie à qui passe." },
      "Le bassin est {{pie#ig_fo_bassin|de pierre commune, comme le mascaron, comme tout le reste|de pierre commune ; la couronne du mascaron, elle, est de bronze sous la mousse, montée sur un pivot, et elle a tourné, autrefois}}.",
      { with: "gildas", text: "Frère Gildas s'arrête devant le mascaron et lit la ligne gravée sur le socle, effacée par l'eau. « Des lettres anciennes, dit-il. Un nom, je crois, et un mot que je ne sais pas lire. »" },
      { after: "ig:fontaine_ouverte", text: "La couronne du mascaron a été tournée, et les porteuses le savent. Elles regardent la reine de pierre d'un autre œil, et toi aussi." },
    ],
    fx: { questSeen: "IG_fontaine" },
    choices: [
      { label: "Attendre l'aube pour entendre la fontaine chanter", hide: { seen: "IG_fontaine_chant" }, to: "IG_fontaine_chant" },
      { label: "Regarder de près le socle et son inscription", hide: { seen: "IG_fontaine_socle" }, to: "IG_fontaine_socle" },
      { label: "Parler aux porteuses d'eau", hide: { any: [{ night: true }, { seen: "IG_fontaine_porteuses" }] }, to: "IG_fontaine_porteuses" },
      { label: "Tourner la couronne du mascaron, trois fois vers la mer", hide: { any: [{ has: "ig:fontaine_ouverte" }, { not: { any: [{ voile: "ig_fo_chant" }, { voile: "ig_fo_bassin" }] } }] }, to: "IG_fontaine_couronne" },
      { back: "IG_entree" },
    ] },

  IG_fontaine_chant: { act: "I", title: "L'aube à la Fontaine-Sourde", place: "gouttieres", takes: "morning",
    text: [
      "Tu passes la fin de la nuit assis{e} sur la margelle, le dos à la colonne. À l'aube, très loin, dans le haut quartier, les fontainiers ouvrent les vannes du grand réservoir. Tu l'entends arriver dans les tuyaux sous la place : un grondement, puis un souffle. Les deux filets d'eau grossissent d'un coup, et la fontaine se met à chanter.",
      "C'est l'eau qui passe par les conduits creusés dans la tête de pierre, des conduits de longueurs différentes, comme les tuyaux d'un orgue. Ça fait une mélodie de trois notes, puis de cinq, et l'on croit entendre des voyelles. Les porteuses arrivées tôt baissent la tête.",
      "Tu portes le cornet d'os à ton oreille. Le chant de l'eau se met à trembler comme une voix qui dit une chose et en pense une autre : « {{oreille#ig_fo_chant|Ooo, ooo, l'eau descend, l'eau s'en va|Tourne ma couronne trois fois vers la mer, et prends ce que je garde}}. » Puis, plus bas, comme le second couplet d'une chanson : « {{oreille#ig_fo_vasse|Ooo, l'eau dort, l'eau revient|Aymeric Vasse m'a fait chanter pour ceux qui savent se taire}}. »",
      "Le chant dure le temps qu'il faut à l'eau pour remplir les conduits, puis le grondement s'apaise, et il ne reste que deux filets d'eau qui parlent dans le bassin.",
      { with: "lison", text: "Lison a fermé les yeux pendant que l'eau chantait. Quand tu la regardes, elle ne les rouvre pas tout de suite. « {{oreille#ig_li_fontaine|C'est joli|Je connais cet air, ma grand-mère le fredonne en faisant sa dentelle}}, dit-elle. »" },
    ],
    choices: [{ back: "IG_fontaine" }] },

  IG_fontaine_socle: { act: "I", title: "Le socle de la fontaine", place: "gouttieres",
    text: [
      "Tu t'agenouilles dans l'eau qui déborde. Sur le socle, sous la mousse, une ligne gravée en capitales anciennes, usée par trois siècles d'éclaboussures. Tu la déchiffres avec les doigts autant qu'avec les yeux : *{{loupe#ig_fo_socle|LA REINE ÉCOUTE SA VILLE|LA REINE ÉCOUTE SA VILLE PAR LES OREILLES QUE LES COMPTOIRS LUI ONT LAISSÉES · A. V. FECIT}}*.",
      "Sous l'inscription, un petit croissant de lune, presque effacé, que les porteuses touchent du doigt en passant, sans savoir pourquoi, parce que leurs mères le faisaient.",
      { with: "gildas", text: "Frère Gildas suit les lettres du doigt à côté du tien. « *Fecit* : il l'a faite. Un artisan qui signe. » Il s'arrête sur le croissant, un instant, puis se relève en époussetant sa bure." },
      { if: { has: "metier:lire" }, text: "Tu as lu des actes de cette époque, aux archives, pour retrouver des terres perdues. Les initiales qui signent un ouvrage public, en ce temps-là, étaient celles de celui qui le payait, rarement celles du maçon." },
    ],
    choices: [{ back: "IG_fontaine" }] },

  IG_fontaine_porteuses: { act: "I", title: "Les porteuses d'eau", place: "gouttieres",
    text: [
      "La plus âgée des porteuses s'appelle Bérangère. Elle a des épaules taillées par le joug et un chapeau de paille noué sous le menton. Elle t'écoute poser tes questions sur la fontaine, puis elle pose ses seaux.",
      "« On n'y touche pas, à la reine, dit-elle. Celui qui la touche fait tarir la fontaine. Nos mères le disaient, et leurs mères. Nous, on {{oreille#ig_be_tarir|a peur qu'elle tarisse, voilà tout|a peur que quelqu'un trouve avant nous ce que nos mères cherchaient, elles aussi, et qu'elles n'ont jamais osé prendre}}. »",
      "Les autres porteuses se sont rapprochées, leurs jougs sur l'épaule. Elles sont six, et elles ont toutes des bras qui portent soixante livres d'eau dix fois par jour.",
    ],
    fx: { meet: "ig_berangere" },
    choices: [
      { label: "Leur proposer de tourner la couronne ensemble, et de partager ce qu'elle garde", hide: { not: { voile: "ig_be_tarir" } }, fx: { flag: "ig:porteuses", ep: ["perso", 250], note: "Bérangère consulte les autres d'un mouvement de menton. « Ensemble, et devant nous. Ma mère a essayé seule, une nuit. Elle disait qu'il fallait savoir dans quel sens. »" }, back: "IG_fontaine" },
      { label: "Leur promettre de ne rien abîmer", test: { dom: "social", diff: -10, label: "Rassurer les porteuses", help: [GIL, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: "ig:porteuses", note: "Bérangère consulte les autres d'un mouvement de menton. « Ensemble, et devant nous. Ce qui sort de la reine, on le voit sortir. »" }, to: "IG_fontaine" }, lose: { fx: { note: "Bérangère reprend ses seaux sans te répondre." }, to: "IG_fontaine" } },
      { back: "IG_fontaine" },
    ] },

  IG_fontaine_couronne: { act: "I", title: "La couronne de la reine", place: "gouttieres",
    text: [
      "Tu grimpes sur la margelle, les pieds dans l'eau, et tu prends à deux mains la couronne du mascaron. Sous la mousse, le bronze est froid et rugueux, et le pivot a trois siècles de calcaire dans la gorge. Vers la mer : vers le sud, vers la Salve. Tu tires.",
      { after: "ig:porteuses", text: "Bérangère grimpe à côté de toi, puis une autre porteuse, puis une troisième. Six paires de mains sur une couronne de bronze. « À trois, dit Bérangère, comme pour un seau. »" },
      { when: "night", before: "ig:porteuses", text: "La place est vide et noire. Personne pour te voir faire. Personne pour t'aider." },
      { when: "day", before: "ig:porteuses", text: "Les porteuses se sont arrêtées dans la file. L'une d'elles pose son seau, lentement, et dit ton nom à une autre, qu'elle ne connaissait pas il y a un instant." },
    ],
    choices: [
      { label: "Tourner avec les porteuses", hide: { not: { has: "ig:porteuses" } }, fx: { ep: ["perso", 200] }, to: "IG_fontaine_cache" },
      { label: "Forcer le pivot à la seule force des bras", hide: { has: "ig:porteuses" }, test: { dom: "combat", diff: -20, label: "Trois siècles de calcaire", help: [TIB, { if: { item: "masse" }, v: 5 }] },
        win: { to: "IG_fontaine_cache" }, lose: { fx: { pv: -2 }, to: "IG_fontaine_rate" } },
      { label: "Dissoudre le calcaire au vinaigre, puis tourner doucement", hide: { has: "ig:porteuses" }, test: { dom: "savoir", diff: -10, label: "Un tour de fontainier", help: [GIL, { if: { has: "metier:mains" }, v: 10 }] },
        win: { to: "IG_fontaine_cache" }, lose: { to: "IG_fontaine_rate" } },
      { label: "Laisse-moi faire", who: "gildas", hide: { has: "ig:porteuses" }, test: { dom: "savoir", diff: 0, label: "Frère Gildas cherche le cran du pivot" }, win: { to: "IG_fontaine_cache" }, lose: { to: "IG_fontaine_rate" } },
    ] },

  IG_fontaine_rate: { act: "I", title: "La couronne de la reine", place: "gouttieres",
    text: [
      "La couronne bouge d'un doigt, puis se bloque. Un filet d'eau jaillit de travers et t'arrose de la tête aux pieds. Sur la place, quelqu'un rit, puis plusieurs. Les porteuses gardent leur sérieux : elles te regardent comme on regarde quelqu'un qui a marché sur une tombe.",
      "Bérangère s'approche, mains sur les hanches. « Seul{e}, tu n'y arriveras pas. Ma mère non plus. Si tu veux la reine, demande-nous. »",
    ],
    choices: [
      { label: "Parler aux porteuses", to: "IG_fontaine_porteuses" },
      { back: "IG_fontaine" },
    ] },

  IG_fontaine_cache: { act: "I", title: "Ce que garde la reine", place: "gouttieres",
    text: [
      "Au troisième tour, quelque chose cède dans la colonne avec un claquement de serrure. Les deux filets d'eau s'arrêtent net. Dans le silence, la plaque de pierre sous le mascaron, celle où l'on posait les seaux, pivote d'un pouce. Derrière, une niche, sèche, grande comme un coffret.",
      "Dedans, un objet de bronze emballé dans un cuir devenu dur comme du bois : un sceau à long manche, dont la matrice porte une fontaine couronnée et, en légende, *FONTAINIERS DE LA REINE*. Et, collée au fond de la niche, une plaque de plomb gravée d'une seule ligne : *QUI ÉCOUTE L'EAU TROUVE L'EAU*.",
      "Tu replaces la pierre. La couronne revient d'elle-même, d'un demi-tour. L'eau reprend, d'un coup, par les deux oreilles de la reine, avec un hoquet, puis le bruit de conversation habituel.",
      { after: "ig:porteuses", text: "Bérangère prend le sceau, le regarde, le soupèse, et te le rend. « Ma mère cherchait de l'or. C'est un tampon. » Elle rit, d'un rire fatigué. « Garde-le. Nous, on a vu. C'est ce qu'on voulait. » Les porteuses reprennent leurs seaux, et la file se reforme." },
    ],
    fx: { item: "ig_tr_sceau", clock: { tresors: 1 }, flag: ["tresor:ig_sceau", "ig:fontaine_ouverte"], set: { ig_fontaine: "ouverte" }, quest: "IG_fontaine", ep: ["seance", 800] },
    choices: [{ back: "IG_fontaine" }] },
});

// ==================================================================== Rufin Ravoux's attic (a fence's loft in the Gouttières)
Object.assign(P, {
  IG_reine_grenier: { act: "I", title: "Le service de la Reine", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Margaux Pelle repose sa loupe. « Un service. Bon. Il y a aux Halles un marchand de reliques, Rufin Ravoux. Des dents de la reine, des cheveux de la reine, des clous de son cercueil. Il vend à des veuves et à des chanoines. Il gagne gros. Il ne me paie rien, parce qu'il dit qu'il est des Halles et pas des toits. »",
      "« Il a son grenier ici, rue des Tanneurs, au-dessus d'un fondeur de suif. C'est là qu'il fabrique ses saintetés. Et c'est là qu'il garde son livre de ventes. Rapporte-moi ce livre. Avec, je lui ferai payer trois ans de retard, et il paiera, parce que dedans il y a des noms de chanoines. » Elle sourit, pour la première fois, et c'est un spectacle dont on se passerait. « Pour ta peine, la dette de la petite est effacée. Ou deux ducats, si la petite t'est égale. »",
      { with: "gildas", text: "Frère Gildas se tient près de la porte, comme on le lui a demandé. « Des clous de cercueil, répète-t-il à mi-voix. Il y a des gens qui achètent ça. »" },
    ],
    fx: { flag: ["ig:grenier_connu", "ig:job_grenier"] },
    choices: [
      { label: "Le grenier de Ravoux, par les toits de la rue des Tanneurs", to: "IG_grenier_entree" },
      { back: "IG_reine" },
    ] },

  IG_grenier_entree: { act: "I", title: "Rue des Tanneurs, par les toits", place: "gouttieres",
    text: [
      "Le grenier de Ravoux est le dernier étage d'une maison étroite, au-dessus d'un fondeur de suif dont la fumée grasse monte le long de la façade. On y accède par le toit voisin : une lucarne à volets, fermée d'un cadenas de cuivre tout neuf, le seul objet neuf à vingt toises à la ronde.",
      "Le cadenas est {{pie#ig_gr_cadenas|massif, de belle facture, à secret|de belle facture à l'extérieur, et creux en dedans : le pêne ne tient que par un ressort de laiton qu'un coup sec ferait sauter}}.",
      { with: "fauvette", text: "Fauvette s'accroupit devant la lucarne et sourit. « Ravoux. Il paie bien pour les cheveux roux. Il les vend comme ceux de la reine. Elle était rousse, à ce qu'il raconte. »" },
    ],
    choices: [
      { label: "Prendre la clé sous la tuile fendue, à gauche de la lucarne", hide: { not: { voile: "ig_ap_cle" } }, fx: { ep: ["perso", 200] }, to: "IG_grenier" },
      { label: "Frapper le cadenas d'un coup sec, à l'endroit du ressort", hide: { not: { voile: "ig_gr_cadenas" } }, fx: { ep: ["perso", 200] }, to: "IG_grenier" },
      { label: "Crocheter le cadenas", test: { dom: "discretion", diff: -20, label: "Un cadenas neuf", help: [{ if: { item: "crochets" }, v: 15 }, { if: { arch: "voleur" }, v: 10 }] },
        win: { to: "IG_grenier" }, lose: { to: "IG_grenier_surpris" } },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "discretion", diff: 0, label: "Fauvette et le cadenas" }, win: { fx: { conf: { fauvette: 3 } }, to: "IG_grenier" }, lose: { to: "IG_grenier_surpris" } },
      { label: "Arracher le volet", test: { dom: "combat", diff: -10, label: "Un volet de chêne", help: [TIB] },
        win: { to: "IG_grenier_surpris" }, lose: { fx: { pv: -2 }, to: "IG_chute" } },
      { back: "IG_toits" },
    ] },

  IG_grenier: { act: "I", title: "Le grenier de Ravoux", place: "gouttieres",
    text: [
      "Tu te laisses glisser dans le grenier. Il sent la colle de peau, le brou de noix et l'encens bon marché. Sous les poutres, c'est un atelier : un établi couvert de petits pots, des limes, des pinces, des reliquaires d'étain empilés comme des gobelets à la foire. Dans un baquet, des dents trempent dans une eau brune. Sur une corde, des mèches de cheveux sèchent, roux, blonds, gris, étiquetées à la plume.",
      "Sur l'établi, un registre relié de basane, ouvert. À côté, pour tenir la page, une saucière {{pie#ig_gr_nef|d'étain noirci, pleine de colle de peau figée|d'argent massif sous la crasse et la colle : une nef de table, une salière de banquet, avec un écu couronné sur la poupe}}. Et partout, des petites étiquettes : *Dent de la reine Ysaure, {{loupe#ig_gr_etiquette|trouvée à Sorne par un pêcheur pieux|veau, abattoir de la rue aux Veaux, lot de mars, au jus de citron pour mémoire}}.*",
      { with: "lison", text: "Lison prend une mèche rousse sur la corde, la regarde, la remet en place avec un soin étrange. « Il faudrait le noyer, dit-elle calmement. Avec ses dents. »" },
    ],
    choices: [
      { label: "Prendre la nef d'argent", hide: { any: [{ not: { voile: "ig_gr_nef" } }, { has: "tresor:ig_nef" }] }, fx: { item: "ig_tr_nef", clock: { tresors: 1 }, flag: "tresor:ig_nef", ep: ["perso", 300] }, back: "IG_grenier" },
      { label: "Gratter la colle de la saucière avec ton couteau", hide: { any: [{ voile: "ig_gr_nef" }, { has: "tresor:ig_nef" }] }, test: { dom: "savoir", diff: -10, label: "Reconnaître l'argent sous la colle", help: [{ if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { item: "ig_tr_nef", clock: { tresors: 1 }, flag: "tresor:ig_nef", ep: ["perso", 300] }, back: "IG_grenier" }, lose: { to: "IG_grenier_surpris" } },
      { label: "Prendre le registre de ventes", hide: { has: "ig:livre_pris" }, fx: { item: "ig_livre_ravoux", flag: "ig:livre_pris" }, back: "IG_grenier" },
      { label: "Prendre une dent du baquet et une étiquette, comme preuves", hide: { has: "ig:preuve_ravoux" }, fx: { flag: "ig:preuve_ravoux" }, back: "IG_grenier" },
      { label: "Repartir par la lucarne", test: { dom: "discretion", diff: -10, label: "Ressortir avant le retour de Ravoux", help: [LIS, FAU] },
        win: { to: "IG_grenier_sortie" }, lose: { to: "IG_grenier_surpris" } },
    ] },

  IG_grenier_surpris: { act: "I", title: "Le grenier de Ravoux", place: "gouttieres",
    text: [
      "La trappe du plancher se soulève. Une tête paraît, ronde, luisante, coiffée d'un bonnet de velours : Rufin Ravoux. Derrière lui, sur l'échelle, un grand garçon aux épaules de débardeur, son neveu sans doute, avec un crochet de quai.",
      "Ravoux te voit. Il voit l'établi, le baquet, la corde aux cheveux. Il pâlit, puis rougit. « {{oreille#ig_ra_peur|Je vais appeler le Guet|Si la Reine apprend ce que je garde ici, je suis mort, et si le Guet vient, il trouvera les dents}} ! » crie-t-il, et il ne bouge pas de l'échelle.",
    ],
    choices: [
      { label: "Lui dire que tu viens de la part de la Reine, et que le Guet trouverait les dents", hide: { not: { voile: "ig_ra_peur" } }, fx: { ep: ["perso", 250] }, to: "IG_grenier_sortie" },
      { label: "Le menacer de tout raconter aux Halles", test: { dom: "social", diff: -10, label: "Faire peur à un faussaire", help: [TIB, { if: { has: "ig:job_grenier" }, v: 10 }] },
        win: { to: "IG_grenier_sortie" }, lose: { fx: { pv: -3, note: "Le neveu monte l'échelle d'un bond et te pousse vers la lucarne, puis dehors." }, to: "IG_chute" } },
      { label: "Ressortir par la lucarne, en vitesse", test: { dom: "discretion", diff: 0, label: "Filer par le toit", help: [LIS, FAU] }, win: { to: "IG_grenier_sortie" }, lose: { fx: { pv: -3 }, to: "IG_chute" } },
      { label: "Faire face au neveu", fight: { title: "Le grenier de Ravoux", enemies: [{ id: "docker", n: 1 }, { id: "ig_ravoux", n: 1 }],
        win: { fx: { ep: ["perso", 300] }, to: "IG_grenier_sortie" }, lose: { fx: { gold: -5, pv: -2 }, to: "IG_chute" } } },
    ] },

  IG_grenier_sortie: { act: "I", title: "Rue des Tanneurs, par les toits", place: "gouttieres",
    text: [
      "Tu ressors sur le toit dans la fumée du fondeur de suif, avec ce que tu as pris. En bas, rue des Tanneurs, la vie continue : un charretier crie, un chien aboie, un enfant chante la chanson des toits avec les mauvais mots.",
      { if: { has: "ig:livre_pris" }, text: "Le registre de Ravoux pèse sous ton bras. Tu le feuillettes, accroupi{e} contre une cheminée : des dates, des sommes, des noms de chanoines et de veuves. Des dents à deux ducats, des cheveux à un, des clous à dix liards. Trois ans de saintetés." },
      { if: { has: "ig:preuve_ravoux" }, text: "Dans ta poche, enveloppée dans un mouchoir, une dent de veau limée, encore brune de brou de noix, et son étiquette : *Dent de la reine Ysaure.*" },
    ],
    choices: [
      { label: "Porter le registre à la Reine", hide: { any: [{ not: { has: "ig:job_grenier" } }, { not: { has: "ig:livre_pris" } }, { seen: "IG_reine_livre" }] }, to: "IG_reine_livre" },
      { back: "IG_toits" },
    ] },

  IG_reine_livre: { act: "I", title: "Le livre de Ravoux", place: "gouttieres", backName: "l'atelier de la Reine",
    text: [
      "Margaux Pelle feuillette le registre de Ravoux, page après page, en mouillant son doigt. De temps en temps, elle s'arrête sur un nom et sourit. « Le chanoine de Saint-Pol. Trois dents. Il en a mis une dans chaque église de sa paroisse. » Elle referme le livre et le pose sous la cloche des ors. « Ravoux paiera. Il paiera longtemps. »",
      { if: { has: "ig:dette_connue" }, text: "« La petite est quitte, dit-elle. Dis-le-lui. Et dis-lui que c'est toi qui as payé, pour qu'elle te doive quelque chose à toi plutôt qu'à moi. C'est mieux pour tout le monde. »", else: "Elle compte deux ducats sur la table. « Deux, comme convenu. Tu as de l'avenir, dans les Gouttières. »" },
    ],
    fx: { drop: "ig_livre_ravoux", flag: "ig:reine_livre" },
    choices: [
      { label: "Dire à Fauvette qu'elle est quitte", hide: { any: [{ not: { has: "ig:dette_connue" } }, { has: "ig:dette_reglee" }] }, fx: { set: { ig_dette: "service" } }, to: "IG_dette_fin" },
      { label: "Prendre les deux ducats", hide: { has: "ig:dette_connue" }, fx: { gold: 40 }, back: "IG_reine" },
    ] },
});

// ==================================================================== the Halles: crossroads, first look, the shop
Object.assign(P, {
  IG_halles: { act: "I", title: "Les Halles", place: "halles", hub: true, backName: "les Halles",
    text: [
      { first: true, text: "Les Halles de Salvèze sont une nef de bois plus longue que la cathédrale, posée sur des piliers de chêne gros comme des tours. Le toit de tuiles brunes descend presque jusqu'au sol. Dessous, dans une pénombre traversée de rayons de poussière, mille étals : la viande, le poisson, le sel, les draps, le fer, les livres, les épices, les choses de la mer, et, tout au fond, sous la grande poutre, ceux qui vendent ce qui a appartenu à quelqu'un d'autre." },
      { first: true, text: "Le bruit est un mur. Les marchands crient leurs prix, les acheteurs crient les leurs, les débardeurs crient qu'on s'écarte. L'air sent la marée, le cuir, le pain chaud, le crottin. Un crieur juré, sur une estrade, annonce la criée des épaves pour la prochaine heure." },
      { again: true, when: "day", text: "Les Halles, leur pénombre pleine de cris, leurs rayons de poussière. Sous la grande poutre, les receleurs ont déplié leurs tapis." },
      { again: true, when: "night", text: "Les Halles la nuit : les étals bâchés, les piliers comme une forêt. Des gardiens font leur ronde avec des chiens. Sous la grande poutre, quelques lanternes encore, autour de marchands qui ne vendent qu'à la nuit tombée." },
      { if: { item: "oeil_pie" }, text: "Avec l'œil de pie dans ta poche, les Halles deviennent un autre endroit : un musée du faux, où chaque étal attend que tu regardes." },
      { with: "tibere", first: true, text: "Tibère se tâte la ceinture par réflexe. « Aux Halles, on se fait voler deux fois : une fois en achetant, une fois en sortant. »" },
      { with: "fauvette", text: "Fauvette marche à côté de toi les mains dans le dos, très sage, pour montrer qu'elle ne vole pas aujourd'hui. Les marchands, eux, la reconnaissent et rapprochent leurs marchandises." },
    ],
    choices: [
      { label: "Regarder les Halles à travers l'œil de pie", hide: { any: [{ not: { item: "oeil_pie" } }, { seen: "IG_halles_oeil" }] }, big: true, to: "IG_halles_oeil" },
      { label: "La rangée des Borgnes, sous la grande poutre", to: "IG_borgnes" },
      { label: "L'étal de reliques de Rufin Ravoux", to: "IG_reliques" },
      { label: "Le tas du ferrailleur, au bout de l'allée des chaudronniers", to: "IG_ferraille" },
      { label: "Les orfèvres de la galerie haute", to: "IG_bijoux" },
      { label: "La criée des épaves, sur l'estrade", hide: { any: [{ night: true }, { seen: "IG_encheres" }] }, to: "IG_encheres" },
      { label: "Le bouquiniste, contre le pilier des libraires", to: "IG_livres" },
      { label: "La halle aux poissons", hide: { seen: "IG_poissons" }, to: "IG_poissons" },
      { label: "Les étals de fournitures, pour ce qu'on peut acheter honnêtement", to: "IG_etals" },
      { label: "Les Gouttières, de l'autre côté du pont aux Tripes", to: "IG_entree" },
      { back: "I_hub" },
    ] },

  IG_etals: { act: "I", title: "Les étals de fournitures", place: "halles", shop: "ig_etals", backName: "les étals de fournitures",
    text: [
      "Entre la halle aux draps et la halle au fer, une allée de marchands honnêtes, ou presque : cordiers, chandeliers, apothicaires, fripiers. On y vend au poids et à l'aune, et les poids portent le poinçon de la République, ce qui ne prouve rien, mais rassure.",
      { if: { item: "oeil_pie" }, text: "À travers l'œil de pie, le poinçon d'un des poids rougeoit doucement : il est vrai, mais quelqu'un a creusé le dessous et l'a rebouché au plomb. Le marchand te voit regarder, et change de poids." },
    ],
    choices: [{ back: "IG_halles" }] },

  IG_halles_oeil: { act: "I", title: "Les Halles à travers l'œil de pie", place: "halles",
    text: [
      "Tu portes l'anneau de corne à ton œil au milieu de l'allée centrale, et tu restes là, immobile, pendant que les gens te bousculent. Les Halles s'assombrissent sous le quartz fumé. Puis elles se mettent à rougeoir par endroits, partout, comme un champ de chaumes après le passage du feu.",
      "Le safran du marchand d'épices {{pie#ig_ha_safran|d'un rouge sombre et sec, le meilleur d'Orient|coupé de fleurs de souci et de fil de soie teinte}}. Les bottes du cordonnier {{pie#ig_ha_bottes|de cuir de Cordoue|de cuir de mouton graissé, sauf la paire du haut, la seule qu'on te laissera essayer}}. Le vin du tavernier {{pie#ig_ha_vin|de la Côte, vieux de dix ans|de la Côte, coupé d'eau du puits et de mûres pour la couleur}}. Le drap bleu des Flandres {{pie#ig_ha_drap|tissé serré, teint au pastel|tissé lâche, apprêté à la colle pour paraître serré, et qui rétrécira d'un quart au premier lavage}}.",
      { if: { has: "pq:galabru_honte" }, text: "Au fond d'une échoppe de doreur, trois broches en forme de couronne sèchent sur un fil, la feuille d'or encore fraîche. Elles rougeoient toutes les trois. Prosper Galabru en vend deux par semaine aux pèlerins." },
      { if: { all: [{ has: "pq:broche_achetee" }, { item: "pq_tr_broche" }] }, text: "Dans ton sac, contre ta hanche, quelque chose rougeoit à travers la toile. Tu l'en sors : la broche de Galabru, sa couronne de cuivre doré, ses perles de verre. Vingt liards." },
      "Tu baisses l'œil de pie. Les Halles redeviennent bruyantes, chaudes, aimables. Tu sais désormais ce qu'elles valent, et qu'elles le valaient déjà avant.",
      { with: "fauvette", text: "Fauvette rit tout bas. « Tu vois ? Toute la ville vole. Nous, on le fait au moins sans sourire. »" },
      { with: "tibere", text: "Tibère regarde le vin, longtemps, à travers l'œil que tu lui prêtes. « Douze ans que je bois chez lui, dit-il. Douze ans d'eau du puits. » Il rend l'œil. Il a l'air presque soulagé." },
    ],
    fx: { ep: ["perso", 300] },
    choices: [{ back: "IG_halles" }] },
});

// ==================================================================== the Halles: the fences, Bocquet, Tibère's ring
Object.assign(P, {
  IG_borgnes: { act: "I", title: "La rangée des Borgnes", place: "halles", backName: "la rangée des Borgnes",
    text: [
      { first: true, text: "Sous la grande poutre, au fond des Halles, une douzaine de marchands ont déplié des tapis à même le sol, et sur les tapis, tout ce qu'une ville peut perdre : des chandeliers, des montres, des missels, des bottes dépareillées, des couverts, des dentiers, des épées sans fourreau. On les appelle les Borgnes, parce qu'ils ne voient jamais d'où viennent les choses. Ils voient très bien ce qu'elles valent." },
      { again: true, text: "Les Borgnes et leurs tapis, sous la grande poutre. On te reconnaît, et les tapis se replient d'un coin." },
      "Un chandelier à sept branches {{pie#ig_bo_chandelier|d'argent massif, poinçonné|de laiton argenté, le poinçon frappé à froid sur une pastille d'argent soudée}}. Une montre de poche {{pie#ig_bo_montre|de Nuremberg, à répétition|vide, le cadran peint sur une boîte sans mouvement}}. Un missel {{pie#ig_bo_missel|relié de cuir, fermoirs d'argent|relié de cuir, fermoirs d'argent, et volé hier à Saint-Pol, l'étiquette du chanoine encore collée sous la garde}}.",
      { if: { has: "passe:voleur" }, text: "Tu as vendu ici, à quatorze ans, une timbale et deux cuillers. Le Borgne qui te les avait achetées est mort, dit-on. Son tapis a été repris par son fils, qui a les mêmes mains." },
    ],
    choices: [
      { label: "L'étal d'Alexis Bocquet, le seul Borgne qui ait vraiment un œil en moins", to: "IG_bocquet" },
      { label: "Suivre le regard de Tibère vers un plateau de bagues", hide: { any: [{ not: { present: "tibere" } }, { seen: "IG_tibere_bague" }] }, to: "IG_tibere_bague" },
      { back: "IG_halles" },
    ] },

  IG_bocquet: { act: "I", title: "Alexis Bocquet", place: "halles", backName: "l'étal de Bocquet",
    text: [
      { first: true, text: "Alexis Bocquet porte un bandeau de velours noir sur l'œil gauche et une loupe de joaillier vissée dans l'œil droit, si bien qu'il n'a jamais l'air de regarder que les choses. Son étal est le mieux tenu de la rangée : un tapis de Smyrne, des coussinets de velours, et les objets posés dessus un par un, comme dans un écrin." },
      { again: true, text: "Bocquet dévisse sa loupe pour te regarder, ce qui est chez lui une politesse." },
      "« La boutique Carrus ? dit-il quand tu en parles. Paix à son âme. Une connaisseuse. » Il frotte une cuiller. « Une rousse ? {{oreille#ig_bq_rousse|Je ne me souviens jamais des visages, c'est le métier|Fauvette, la petite de la Reine ; elle m'a vendu une bague de la Carrus et m'a montré une lentille de quartz qu'elle n'a pas voulu me laisser}}. »",
      "« Je travaille {{oreille#ig_bq_gants|pour moi seul, comme mon père|pour un homme aux gants gris qui paie le double pour tout ce qui porte un croissant, et qui m'a dit de lui signaler quiconque viendrait de la part de la Carrus}}. » Il te sourit. « Une bague de la Carrus, justement. Un ducat. Pour vous, quinze liards. »",
      { after: "ig:bague_odeline", text: "La bague d'Odeline est à ton petit doigt, arrêtée à la deuxième phalange. Odeline la mettait le dimanche pour aller au cimetière des Noyés, et l'ôtait en rentrant pour la poser dans une soucoupe, près de la fenêtre." },
      { with: "fauvette", text: "Fauvette s'est plantée devant l'étal et regarde Bocquet en silence. Bocquet range sa cuiller dans sa manche, puis la ressort, gêné." },
    ],
    fx: { meet: "ig_bocquet" },
    choices: [
      { label: "Lui dire que tu sais pour qui il travaille, et ce qu'il doit lui signaler", hide: { any: [{ not: { voile: "ig_bq_gants" } }, { seen: "IG_bocquet_menace" }] }, to: "IG_bocquet_menace" },
      { label: "Racheter la bague d'Odeline", hide: { has: "ig:bague_odeline" }, fx: { gold: -15, item: "ig_bague_odeline", flag: "ig:bague_odeline" }, back: "IG_bocquet" },
      { back: "IG_borgnes" },
    ] },

  IG_bocquet_menace: { act: "I", title: "Alexis Bocquet", place: "halles",
    text: [
      "Tu te penches au-dessus du tapis de Smyrne et tu parles bas : les gants gris, le croissant, la Carrus, ceux qu'il doit signaler. L'œil qui reste à Bocquet s'arrondit. Il regarde à droite, à gauche, puis dévisse lentement sa loupe.",
      "« Je n'ai rien dit, chuchote-t-il. Je ne dirai rien. Il paie bien, mais il fait peur, et vous, vous avez l'air de savoir des choses que personne ne vous a dites. Ça fait plus peur encore. » Il pousse vers toi la bague d'Odeline. « Pour la peine. Et dites-lui, si vous le voyez, que Bocquet n'a vu personne. »",
      { with: "tibere", text: "Tibère regarde Bocquet suer, et il a l'air de quelqu'un qui reconnaît une expression qu'il a vue dans un miroir." },
    ],
    fx: { item: "ig_bague_odeline", flag: ["ig:bague_odeline", "ig:bocquet_tenu"], ep: ["perso", 300] },
    choices: [{ back: "IG_borgnes" }] },

  IG_tibere_bague: { act: "I", title: "Un plateau de bagues", place: "halles", with: "tibere",
    text: [
      "Tibère s'est arrêté devant le tapis d'un Borgne voisin. Sur un plateau de feutre, vingt bagues de femme, alignées. Il en regarde une, une alliance large, gravée de deux initiales entrelacées. Il ne la touche pas.",
      "« Cette bague {{oreille#ig_ti_bague|ressemble à une que j'ai connue, c'est tout|est celle de ma femme ; je l'ai mise en gage l'hiver dernier pour une dette de dés, et Rosalie ne le sait pas, et elle la cherche dans la maison depuis}}, dit-il. Allez, viens. On a mieux à faire. »",
      "Le Borgne a vu le regard. Il dit, sans lever le nez : « Vingt liards, sergent. Le gage est échu depuis la Chandeleur. »",
    ],
    choices: [
      { label: "Racheter la bague pour Tibère, sans rien dire de Rosalie", hide: { not: { voile: "ig_ti_bague" } }, fx: { gold: -20, flag: "ig:bague_tibere", conf: { tibere: 15 }, ep: ["perso", 300] }, to: "IG_tibere_bague_fin" },
      { label: "Racheter la bague, puisqu'il la regarde", hide: { voile: "ig_ti_bague" }, fx: { gold: -20, flag: "ig:bague_tibere", conf: { tibere: 10 } }, to: "IG_tibere_bague_fin" },
      { label: "Suivre Tibère, qui s'éloigne", back: "IG_borgnes" },
    ] },

  IG_tibere_bague_fin: { act: "I", title: "Un plateau de bagues", place: "halles", with: "tibere",
    text: [
      "Tu poses la bague dans la main de Tibère. Il la regarde comme on regarde une lettre qu'on n'a pas le courage d'ouvrir. Puis il la met dans la poche de son gilet, celle de dessus, et il boutonne la poche.",
      "« Je te rembourserai, dit-il. {{oreille#ig_ti_rembourse|Sur ma solde|Avec l'argent de la Banque, et c'est la première fois que cet argent-là me servira à quelque chose de propre}}. » Il se mouche bruyamment. « Il y a de la poussière, dans ces Halles. »",
    ],
    choices: [{ back: "IG_borgnes" }] },
});

// ==================================================================== the Halles: the false relics (side quest)
Object.assign(P, {
  IG_reliques: { act: "I", title: "Les reliques de Ravoux", place: "halles", backName: "l'étal de Ravoux",
    text: [
      { first: true, text: "L'étal de Rufin Ravoux est tendu de velours violet, comme une chapelle. Une enseigne peinte à l'or : *Reliques et souvenirs de la reine Ysaure, authentifiés.* Sous des cloches de verre, posées sur des coussins, des choses brunes et petites, chacune avec son étiquette calligraphiée. Ravoux, rond, luisant, en bonnet de velours, les présente avec des gestes de sacristain. Un apprenti maigre tient le registre." },
      { again: true, before: "ig:ravoux_demasque", text: "Ravoux sous son velours violet. Il te reconnaît et pose une main protectrice sur une de ses cloches de verre." },
      { after: "ig:ravoux_demasque", text: "L'étal de Ravoux est bâché. L'enseigne peinte a été retournée contre le pilier. Un marchand de fromages a déjà posé une meule sur le coin libre." },
      { before: "ig:ravoux_demasque", text: "Une dent de la reine {{pie#ig_re_dent|jaunie, longue, humaine, trouvée à Sorne|de veau, limée en forme, teinte au brou de noix}}. Une mèche de ses cheveux {{pie#ig_re_meche|rousse, nouée d'un fil d'or|rousse, coupée la semaine dernière, nouée d'un fil de laiton}}. Un fragment de sa langue, dans un reliquaire de cristal {{pie#ig_re_langue|ancien, serti d'argent|de verre moulé, serti d'étain, autour d'un morceau de cuir séché teint au vin}}. Une clé de Sorne {{pie#ig_re_cle|forgée il y a trois siècles|forgée à la Saint-Martin dernière, et rouillée au vinaigre}}." },
      { before: "ig:ravoux_demasque", text: "L'apprenti, un garçon de quinze ans aux doigts tachés d'encre, te voit regarder l'étal plutôt que le patron. Il te dit tout bas, quand Ravoux tourne le dos : « Le patron {{oreille#ig_ap_cle|garde tout sur lui, même la clé de chez lui|cache la clé de son grenier sous la tuile fendue, à gauche de la lucarne, rue des Tanneurs ; je voudrais qu'on le vole, une fois}}. »" },
      { before: "ig:ravoux_demasque", text: "Devant l'étal, une vieille femme en coiffe de saunière compte des pièces dans sa main, pour la troisième fois." },
    ],
    fx: { meet: "ig_ravoux", questSeen: "IG_faux" },
    choices: [
      { label: "Parler à la vieille saunière", hide: { any: [{ seen: "IG_reliques_veuve" }, { has: "ig:ravoux_demasque" }] }, to: "IG_reliques_veuve" },
      { back: "IG_halles" },
    ] },

  IG_reliques_veuve: { act: "I", title: "La veuve Pérenne", place: "halles", backName: "l'étal de Ravoux",
    text: [
      "Elle s'appelle Pérenne, veuve d'un saunier de Grisemotte. Son petit-fils, Quirin, sept ans, a la fièvre des marais depuis la Chandeleur. Le barbier a saigné, le curé a prié. On lui a dit qu'une dent de la reine, posée sur la poitrine d'un enfant des Hautes-Eaux, chasse la fièvre, parce que la reine aimait les gens des marais.",
      "« Deux ducats, dit-elle. J'ai mis un an à les mettre de côté. » Elle te montre ses pièces, des liards et des sous noirs, dans sa paume crevassée par le sel.",
      "Ravoux se penche au-dessus du velours. « Cette dent {{oreille#ig_ra_dent|a été trouvée à Sorne par un pêcheur, à la Grande Basse, il y a cent ans|sort de l'abattoir de la rue aux Veaux, comme les quarante autres que j'ai vendues cette année}}, dit-il avec onction. Elle a guéri un enfant de Vasier l'an passé. Je n'en demande que le prix du cristal. »",
      { with: "gildas", text: "Frère Gildas regarde la vieille femme, puis Ravoux, et ses mâchoires se serrent sous la barbe." },
    ],
    fx: { meet: "ig_perenne" },
    choices: [
      { label: "Dire tout haut que cette dent vient de l'abattoir de la rue aux Veaux", hide: { not: { voile: "ig_ra_dent" } }, to: "IG_reliques_demasque" },
      { label: "Dire tout haut que cette dent est une dent de veau limée et teinte", hide: { not: { voile: "ig_re_dent" } }, to: "IG_reliques_demasque" },
      { label: "Poser sur le velours la dent de veau et l'étiquette prises dans son grenier", hide: { not: { has: "ig:preuve_ravoux" } }, fx: { ep: ["perso", 300] }, to: "IG_reliques_demasque" },
      { label: "Examiner la dent en connaisseur, devant tout le monde", test: { dom: "savoir", diff: -20, label: "Reconnaître une dent de veau", help: [GIL, { if: { has: "metier:mains" }, v: 10 }] },
        win: { to: "IG_reliques_demasque" }, lose: { fx: { note: "Ravoux te fait passer pour un apprenti jaloux. La foule rit, et la veuve serre ses pièces. Il te faudrait une preuve, ou des oreilles qui entendent ce qu'il pense en vendant." }, to: "IG_halles" } },
      { label: "Laisse-moi faire", who: "gildas", test: { dom: "savoir", diff: 0, label: "Frère Gildas propose d'aller voir l'enfant" }, win: { fx: { conf: { gildas: 5 } }, to: "IG_reliques_gildas" }, lose: { fx: { note: "Ravoux te fait passer pour un apprenti jaloux. La foule rit, et la veuve serre ses pièces. Il te faudrait une preuve, ou des oreilles qui entendent ce qu'il pense en vendant." }, to: "IG_halles" } },
      { label: "Donner à la veuve de quoi payer un vrai médecin", fx: { gold: -20, set: { ig_faux: "medecin" }, quest: "IG_faux", ep: ["perso", 300] }, to: "IG_reliques_fin" },
      { label: "Laisser la veuve acheter sa dent", refuse: true, back: "IG_halles" },
    ] },

  IG_reliques_gildas: { act: "I", title: "La veuve Pérenne", place: "halles", with: "gildas",
    text: [
      "Frère Gildas s'agenouille devant la vieille femme, sur la paille des Halles, ce qui fait reculer Ravoux d'un pas. « Je soigne, au Mont, dit-il. La fièvre des marais, je la connais. Gardez vos pièces. Emmenez-moi voir l'enfant. »",
      "La veuve regarde la bure, le visage, les mains du moine. Puis elle referme le poing sur ses deux ducats. « Venez », dit-elle. Ravoux, derrière son velours, retourne une étiquette d'un geste sec.",
      "Gildas revient le soir, les manches roulées, l'odeur de l'écorce de saule sur les mains. « Il dormira cette nuit, dit-il. Il guérira, si l'on fait ce que j'ai dit. » Il s'assied, très fatigué. Il s'en tient là.",
    ],
    fx: { set: { ig_faux: "gildas" }, quest: "IG_faux", fac: { hautes: 3 }, ep: ["seance", 500] },
    choices: [{ back: "IG_halles" }] },

  IG_reliques_demasque: { act: "I", title: "La dent de la Muette", place: "halles",
    text: [
      "Tu le dis fort, assez fort pour la rangée entière. Une dent de veau. L'abattoir de la rue aux Veaux. Le brou de noix. Les quarante autres. Il se fait un silence d'une étendue étonnante, dans les Halles, pour un endroit aussi bruyant.",
      "Ravoux ouvre la bouche, la referme. Il regarde la foule qui s'est massée, les saunières, les débardeurs, un chanoine en camail qui fronce les sourcils. « Calomnie », dit-il, d'une voix trop aiguë. Un boucher de la rue aux Veaux, son tablier taché, s'avance, prend la dent sous la cloche, la regarde. « C'est une des miennes, dit-il. Je les reconnais, je les arrache moi-même. Tu me les paies un liard la douzaine, Ravoux. »",
      "La foule rit, puis cesse de rire. La veuve Pérenne range ses deux ducats dans sa coiffe, très lentement. Ravoux replie son velours sous les regards.",
      { if: { has: "ig:preuve_ravoux" }, text: "L'étiquette que tu as posée sur le velours passe de main en main : *Dent de la reine Ysaure.* L'écriture est celle de l'apprenti, qui baisse la tête et sourit dans son col." },
    ],
    fx: { flag: "ig:ravoux_demasque", set: { ig_faux: "demasque" }, quest: "IG_faux", fac: { hautes: 5 }, ep: ["seance", 700] },
    choices: [{ label: "Parler à la veuve", to: "IG_reliques_fin" }] },

  IG_reliques_fin: { act: "I", title: "La veuve Pérenne", place: "halles",
    text: [
      { if: { is: { ig_faux: "medecin" } }, text: "La veuve regarde les pièces que tu lui mets dans la main, puis toi. « Un médecin, répète-t-elle. Avec une dent, au moins, on sait ce qu'on achète. » Elle garde quand même les pièces. Elle achète quand même la dent. Tu la regardes s'éloigner, la dent dans un mouchoir, et l'argent du médecin dans sa coiffe." },
      { if: { is: { ig_faux: "demasque" } }, text: "La veuve Pérenne te prend la main dans ses deux mains, rugueuses comme du sel. « Deux ducats, dit-elle. Avec deux ducats, on paie un médecin, et un de Salvèze, encore. » Elle s'en va vers la porte des Halles d'un pas de saunière, droit et lent." },
      "Plus tard, en passant devant le pilier des fromagers, tu entends deux marchandes parler d'un chercheur de choses perdues qui sait reconnaître les fausses reliques. Le bruit court déjà. Aux Halles, il court plus vite que les voleurs.",
    ],
    choices: [{ back: "IG_halles" }] },
});

// ==================================================================== the Halles: the scrap pile, the jewellers, the wreck auction, the books, the fish hall
Object.assign(P, {
  IG_ferraille: { act: "I", title: "Le tas de Gondran", place: "halles", backName: "le tas du ferrailleur",
    text: [
      { first: true, text: "Au bout de l'allée des chaudronniers, là où la lumière n'arrive plus, Gondran le ferrailleur vend au poids. Un tas de métal haut comme un homme, sur une bâche : des casques cabossés, des chaînes, des serrures sans clés, des fers de cheval, des chaudrons percés, des poids de balance, des grilles. Gondran est assis sur un tabouret à côté, une balance romaine entre les genoux. « Six liards la livre de fer. Dix la livre de cuivre. Ce que tu trouves, tu le pèses. Ce que tu pèses, tu le paies. »" },
      { again: true, text: "Le tas de Gondran a changé de forme depuis ta dernière visite, comme une dune. Gondran, lui, n'a pas bougé de son tabouret." },
      "Tu fouilles. Un chandelier d'église {{pie#ig_fe_chandelier|en bronze doré, lourd, d'un beau travail|en plomb doré à la feuille, lourd parce que c'est du plomb}}. Une cassette de fer {{pie#ig_fe_cassette|fermée, qui sonne plein quand on la secoue|fermée sur trois cailloux qu'un malin a mis là pour qu'elle sonne plein}}. Un casque de sergent {{pie#ig_fe_casque|bosselé, bon pour la fonte|bosselé, bon pour la fonte, en effet}}. Et, coincé sous une grille, un vieux compas de laiton {{pie#ig_fe_compas|tordu, vert-de-grisé, bon pour la fonte|de bronze doré : une volvelle de pilote, des cercles de marée gravés pour la Salve et les Écueils, juste encrassée et faussée d'un coup}}.",
      { with: "fauvette", text: "Fauvette s'accroupit à côté de toi et chuchote : « Gondran, c'est le seul honnête des Halles. Il sait pas ce qu'il vend. »" },
    ],
    fx: { meet: "ig_gondran" },
    choices: [
      { label: "Peser le compas tordu, avec un fer de cheval pour faire bonne mesure", hide: { any: [{ not: { voile: "ig_fe_compas" } }, { has: "tresor:ig_compas" }] }, fx: { gold: -3, item: "ig_tr_compas", clock: { tresors: 1 }, flag: "tresor:ig_compas", ep: ["perso", 300] }, to: "IG_ferraille_fin" },
      { label: "Peser le chandelier d'église, la plus belle pièce du tas", hide: { has: "ig:chandelier" }, fx: { gold: -12, item: "ig_faux_chandelier", flag: "ig:chandelier" }, to: "IG_ferraille_fin" },
      { label: "Fouiller le tas en connaisseur, pour trouver la pièce que Gondran ignore", hide: { any: [{ voile: "ig_fe_compas" }, { has: "tresor:ig_compas" }, { has: "ig:ferraille_fouillee" }] }, test: { dom: "savoir", diff: -20, label: "Le trésor sous la ferraille", help: [{ if: { has: "metier:mains" }, v: 15 }, LIS] },
        win: { fx: { gold: -3, item: "ig_tr_compas", clock: { tresors: 1 }, flag: ["tresor:ig_compas", "ig:ferraille_fouillee"], ep: ["perso", 300] }, to: "IG_ferraille_fin" },
        lose: { fx: { gold: -12, item: "ig_faux_chandelier", flag: ["ig:chandelier", "ig:ferraille_fouillee"] }, to: "IG_ferraille_fin" } },
      { back: "IG_halles" },
    ] },

  IG_ferraille_fin: { act: "I", title: "Le tas de Gondran", place: "halles",
    text: [
      "Gondran pose ta trouvaille sur le crochet de sa romaine, fait glisser le poids, lit, annonce, encaisse. Il ne regarde jamais ce qu'il pèse. Il regarde le fléau.",
      { if: { item: "ig_tr_compas" }, text: "Le compas pèse trois liards avec le fer de cheval. Dans ta main, une fois frotté avec ta manche, il montre des cercles de cuivre rouge gravés de lettres fines, *SALVE · ÉCUEILS · SORNE*, et une aiguille de marée qui tourne encore. Un pilote de la reine s'en servait pour savoir quand la mer laisse passer. Gondran l'aurait fondu demain." },
      { if: { item: "ig_faux_chandelier" }, text: "Le chandelier pèse lourd, et douze liards. En sortant des Halles, au grand jour, tu frottes la dorure de l'ongle. Elle part en paillettes. Dessous, c'est gris, mou, et ça marque sous l'ongle : du plomb. Gondran, lui, a vendu du plomb au prix du plomb. Il n'a volé personne." },
    ],
    choices: [{ back: "IG_ferraille" }] },

  IG_bijoux: { act: "I", title: "La galerie des orfèvres", place: "halles", backName: "la galerie des orfèvres",
    text: [
      { first: true, text: "Un escalier de bois mène à la galerie haute, au-dessus de la halle aux draps, où les orfèvres et les joailliers des Halles tiennent boutique derrière des grilles. Ici on parle bas, on vend sur des coussinets, et l'on regarde les mains des clients avant leurs visages." },
      "Au centre de la galerie, sous une cloche de cristal gardée par un valet en livrée, *la couronne de sel de la reine Ysaure, retrouvée dans les sables de Sorne* : un diadème blanc, scintillant, piqué de perles, {{pie#ig_bi_couronne|de sel gemme taillé, à ce qu'on dit, serti d'argent|de plâtre, saupoudré de verre pilé et de sucre candi, serti d'étain verni}}. On paie un liard pour la regarder de près.",
      "À l'étal voisin, un collier de la reine {{pie#ig_bi_collier|aux trois rangs de perles fines|aux trois rangs de perles de verre soufflé, emplies de cire et d'écaille d'ablette}}. Et, dans une coupelle de bric-à-brac à cinq liards la pièce, une bague de deuil {{pie#ig_bi_bague|en jais noir, sans valeur, comme on en fait par milliers|en jais noir sur un jonc d'or massif, que quelqu'un a noirci pour le cacher, avec une mèche de cheveux sous le chaton}}.",
      { after: "ig:couronne_dite", text: "La cloche de cristal a disparu du centre de la galerie. Le valet en livrée est toujours là, sans mouches à chasser, et il te salue d'un signe de tête quand tu passes." },
      { with: "lison", text: "Lison regarde la couronne de sel avec un drôle de sourire. « Chez nous, dit-elle, on dit que la couronne de sel fondrait si on la sortait de l'eau. Ça arrangerait bien ceux qui la vendent. »" },
    ],
    choices: [
      { label: "Acheter la bague de deuil dans la coupelle à cinq liards", hide: { any: [{ not: { voile: "ig_bi_bague" } }, { has: "tresor:ig_bague" }] }, fx: { gold: -5, item: "ig_tr_bague", clock: { tresors: 1 }, flag: "tresor:ig_bague", ep: ["perso", 250] }, to: "IG_bijoux_fin" },
      { label: "Fouiller la coupelle à cinq liards", hide: { any: [{ voile: "ig_bi_bague" }, { has: "tresor:ig_bague" }, { has: "ig:coupelle" }] }, test: { dom: "savoir", diff: -20, label: "L'or sous le jais", help: [{ if: { has: "metier:mains" }, v: 15 }] },
        win: { fx: { gold: -5, item: "ig_tr_bague", clock: { tresors: 1 }, flag: ["tresor:ig_bague", "ig:coupelle"], ep: ["perso", 250] }, to: "IG_bijoux_fin" }, lose: { fx: { gold: -5, flag: "ig:coupelle" }, to: "IG_bijoux_fin" } },
      { label: "Dire au valet ce qu'il garde sous sa cloche de cristal", hide: { any: [{ not: { voile: "ig_bi_couronne" } }, { seen: "IG_bijoux_couronne" }] }, to: "IG_bijoux_couronne" },
      { back: "IG_halles" },
    ] },

  IG_bijoux_fin: { act: "I", title: "La galerie des orfèvres", place: "halles",
    text: [
      { if: { item: "ig_tr_bague" }, text: "Tu paies tes cinq liards au commis, qui ne lève pas les yeux. Dehors, sur l'escalier, tu grattes le jais de l'ongle. Il s'écaille comme une peinture. Dessous, l'or jaune, épais, et sous le chaton une mèche de cheveux blancs tressée, et deux mots gravés au burin : *À ma Muette.* Un mari a dû l'appeler ainsi, pour rire, il y a longtemps. Ou pas pour rire.", else: "Tu repars avec une bague de jais à cinq liards, qui vaut cinq liards. Le commis te remercie avec une politesse qui te coûte un liard de plus." },
    ],
    choices: [{ back: "IG_bijoux" }] },

  IG_bijoux_couronne: { act: "I", title: "La couronne de sel", place: "halles",
    text: [
      "Tu te penches vers le valet en livrée et tu lui dis, aimablement, ce que tu vois sous la cloche : du plâtre, du verre pilé, du sucre candi. Le valet reste immobile. Puis une mouche, une seule, vient se poser sur la cloche de cristal, et tourne, et cherche une entrée. Le valet la regarde. Tu la regardes.",
      "« Le sucre, dit-il enfin, à voix basse, sans remuer les lèvres. Les mouches. Tout l'été. » Il soupire. « Le patron paie un liard la journée pour que je les chasse. Si vous le dites aux gens, il me paiera pour autre chose, ou pour rien. Je vous en prie. »",
    ],
    choices: [
      { label: "Te taire, pour le valet", fx: { ep: ["perso", 150] }, back: "IG_bijoux" },
      { label: "Le dire aux gens qui paient leur liard pour regarder", fx: { ep: ["perso", 150], flag: "ig:couronne_dite" }, back: "IG_bijoux" },
    ] },

  IG_encheres: { act: "I", title: "La criée des épaves", place: "halles", takes: 2,
    text: [
      "Sur l'estrade, le crieur juré vend ce que le canal, le port et les noyés ont rendu dans le mois : des barriques, des cordages, une ancre, un coffre de marin, des sacs détrempés. On enchérit en levant le doigt. Un clerc de la République inscrit tout, et prend un dixième.",
      "Lot douze : un coffret de chêne cerclé de fer, trouvé dans la vase du port aux Sauniers, scellé. Le crieur le soulève à deux mains, en ployant. Il est {{pie#ig_en_coffret|lourd, plein à en juger par le poids et le bruit sourd|lesté de deux briques calées dans de la paille, et le sceau a été posé hier, à la cire de chandelle}}. La salle s'anime. Un gros homme en pelisse lève le doigt avant même la mise à prix.",
      "Lot treize : un sac de cordages pourris {{pie#ig_en_sac|bon à faire de l'étoupe|avec, roulé au milieu des cordes, un drap de soie brodée de fils d'argent, enveloppé dans une toile cirée qui l'a gardé sec}}. Personne ne lève le doigt. Le crieur bâille.",
      { with: "tibere", text: "Tibère se penche : « {{oreille#ig_ti_encheres|Le gros en pelisse, je ne le connais pas|Le gros en pelisse, c'est le beau-frère du crieur ; ils font monter les lots à deux et partagent}}. »" },
    ],
    choices: [
      { label: "Enchérir sur le coffret scellé", fx: { gold: -30, item: "ig_faux_coffret" }, to: "IG_encheres_fin" },
      { label: "Lever le doigt pour le sac de cordages pourris", hide: { not: { voile: "ig_en_sac" } }, fx: { gold: -2, item: "ig_tr_soie", clock: { tresors: 1 }, flag: "tresor:ig_soie", ep: ["perso", 300] }, to: "IG_encheres_fin" },
      { label: "Prendre le sac de cordages, sur une intuition de chercheur", hide: { voile: "ig_en_sac" }, test: { dom: "savoir", diff: -20, label: "Ce que cache un sac d'épave", help: [LIS, { if: { has: "metier:mains" }, v: 10 }] },
        win: { fx: { gold: -2, item: "ig_tr_soie", clock: { tresors: 1 }, flag: "tresor:ig_soie", ep: ["perso", 300] }, to: "IG_encheres_fin" }, lose: { fx: { gold: -2 }, to: "IG_encheres_fin" } },
      { label: "Regarder les autres se ruiner", back: "IG_halles" },
    ] },

  IG_encheres_fin: { act: "I", title: "La criée des épaves", place: "halles",
    text: [
      { if: { item: "ig_faux_coffret" }, text: "Le gros en pelisse a fait monter le coffret jusqu'à trente liards, puis il a laissé tomber le doigt avec un soupir de regret. Tu fais sauter le sceau dans une encoignure des Halles. De la paille, deux briques. Sur l'une, quelqu'un a gravé à la pointe : *Merci.* Le crieur, sur l'estrade, ne te regarde pas. Son beau-frère non plus." },
      { if: { item: "ig_tr_soie" }, text: "Tu emportes le sac sur l'épaule ; il sent le goudron et la vase. Dans une encoignure, tu défais les cordes, puis la toile cirée. La soie se déplie entre tes mains, gris perle, brodée de fils d'argent : des poissons, des roseaux, une barque, et au centre une femme couronnée qui pose un doigt sur ses lèvres. Le travail est des Hautes-Eaux, et ancien." },
      { if: { all: [{ not: { item: "ig_faux_coffret" } }, { not: { item: "ig_tr_soie" } }] }, text: "Dans le sac, des cordages pourris, une poulie fendue, et une odeur qui te suivra jusqu'au soir. Le crieur a bâillé en encaissant." },
    ],
    choices: [{ back: "IG_halles" }] },

  IG_livres: { act: "I", title: "Le bouquiniste", place: "halles", backName: "le pilier des libraires",
    text: [
      { first: true, text: "Contre le pilier des libraires, un vieil homme en lunettes vend des livres empilés dans des paniers à poisson : des almanachs, des psautiers, des romans de chevalerie sans couverture, des feuilles volantes imprimées à deux liards, avec des chansons, des complaintes de pendus, des prédictions pour l'année." },
      { again: true, text: "Le bouquiniste et ses paniers à poisson pleins de papier. Il lit, en attendant, et ne lève les yeux que pour les pièces." },
      "Dans un panier, entre une complainte et un almanach, une feuille plus vieille que les autres : un parchemin gratté et réécrit, où quelqu'un a copié à la main, d'une écriture ancienne, *La chanson des Gouttières*. « Celle-là, dit le bouquiniste, je l'ai trouvée dans la reliure d'un psautier. Un liard. Personne n'en veut, les gamins la savent par cœur. »",
      "Un almanach des marées, à côté, {{pie#ig_li_almanach|de cette année, imprimé à Salvèze|de l'an passé, la date grattée et corrigée à la plume, les marées toutes fausses d'un jour}}.",
      { with: "gildas", text: "Frère Gildas prend le parchemin, l'approche de son œil, le retourne. « Un palimpseste, dit-il. On a gratté un texte pour en écrire un autre. Le premier était d'une autre main. » Il le repose dans le panier, très doucement." },
    ],
    choices: [
      { label: "Acheter la vieille copie de la chanson", hide: { item: "ig_feuille_chanson" }, fx: { gold: -1, item: "ig_feuille_chanson", ep: ["perso", 100] }, back: "IG_livres" },
      { back: "IG_halles" },
    ] },

  IG_poissons: { act: "I", title: "La halle aux poissons", place: "halles",
    text: [
      "La halle aux poissons est un vacarme mouillé. Des anguilles dans des baquets, des harengs en tonnes, des raies pendues par la queue, et des poissonnières aux bras rouges qui crient plus fort que tout. Tu traverses, tu te fais bousculer, un gamin se cogne à toi, s'excuse, file.",
      "Trois pas plus loin, une poissonnière hurle qu'on lui a volé sa bourse. Ses deux fils, des débardeurs, lâchent leurs paniers. L'un d'eux te montre du doigt : tu étais là. Et dans la poche de ta veste, ta main trouve une bourse de cuir graisseux, au cordon tranché, qui appartient à quelqu'un d'autre.",
      "Le gamin qui t'a bousculé{e} s'est arrêté au bout de l'allée. Il crie avec les autres, en te montrant : « {{oreille#ig_po_gamin|C'est lui, m'dame, je l'ai vu faire|C'est moi, et si elle regarde le cordon, elle verra ma coupe en biseau, celle que Fauvette m'a apprise}} ! »",
      { with: "fauvette", text: "Fauvette a déjà repéré le gamin. Elle siffle entre ses dents, deux notes, et le gamin pâlit." },
    ],
    choices: [
      { label: "Montrer le cordon tranché en biseau, et dire qui coupe ainsi", hide: { not: { voile: "ig_po_gamin" } }, fx: { ep: ["perso", 250] }, to: "IG_poissons_fin" },
      { label: "Laisse-moi faire", who: "fauvette", test: { dom: "social", diff: 0, label: "Fauvette rappelle le gamin à l'ordre" }, win: { fx: { conf: { fauvette: 3 } }, to: "IG_poissons_fin" }, lose: { to: "IG_poissons_combat" } },
      { label: "Rendre la bourse et jurer que tu n'y es pour rien", test: { dom: "social", diff: -20, label: "Convaincre une poissonnière volée", help: [TIB, GIL] },
        win: { to: "IG_poissons_fin" }, lose: { to: "IG_poissons_combat" } },
      { label: "Te frayer un chemin vers la sortie entre les baquets", test: { dom: "discretion", diff: -10, label: "Fuir la halle aux poissons", help: [LIS] },
        win: { fx: { flag: "ig:poissons_fui" }, back: "IG_halles" }, lose: { to: "IG_poissons_combat" } },
    ] },

  IG_poissons_combat: { act: "I", title: "La halle aux poissons", place: "halles",
    text: [
      "Les deux fils de la poissonnière arrivent sur toi, un crochet de quai à la main. La foule fait cercle, ravie. Quelqu'un parie sur toi, quelqu'un d'autre sur eux, à trois contre un.",
    ],
    combat: { title: "La halle aux poissons", enemies: [{ id: "docker", n: 2 }],
      win: { fx: { ep: ["perso", 250], flag: "ig:poissons_battus" }, to: "IG_poissons_fin" }, lose: { fx: { gold: -5, pv: -2 }, to: "IG_poissons_fin" },
      flee: { label: "Plonger sous les étals", dom: "discretion", diff: 0, to: "IG_halles" } },
    choices: [] },

  IG_poissons_fin: { act: "I", title: "La halle aux poissons", place: "halles",
    text: [
      { outcome: "lose", text: "Tu te relèves dans l'eau des baquets, une écaille de hareng collée à la joue, et un fils de la poissonnière te tend la main pour t'aider, maintenant que c'est fini. Ta bourse, elle, a payé pour la sienne." },
      { after: "ig:poissons_battus", text: "Les deux fils de la poissonnière sont assis par terre, au milieu des anguilles échappées, et ils ont l'air de chercher où ils ont eu tort." },
      { if: { voile: "ig_po_gamin" }, text: "La poissonnière prend le cordon, le regarde, regarde le gamin. Le gamin est déjà loin. « La coupe en biseau, dit-elle. Je la connais. » Elle te fait des excuses à sa façon : elle te met une anguille fumée dans les mains, enveloppée dans une feuille de chou." },
      "La halle aux poissons reprend son vacarme. Ici, seule l'odeur dure.",
    ],
    fx: { food: 1 },
    choices: [{ back: "IG_halles" }] },
});

// ==== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      ig_hermance: { name: "Hermance", qui: "La patronne du Pot Fêlé.", aspect: { allure: "grande femme, avant-bras de laveuse", visage: "deux dents de plomb", signe: "chiffon sur le comptoir" }, f: true, face: { age: "mur", coif: "foulard" }, desc: "La patronne du Pot Fêlé, une ancienne teinturerie des Gouttières. Avant-bras de laveuse, deux dents de plomb." },
      ig_huguette: { name: "Huguette Clopin", qui: "Vieille chanteuse du Pot Fêlé.", aspect: { allure: "quatre-vingts ans, mains tremblantes", signe: "bol de bois à liards", voix: "voix de verre fêlé" }, f: true, face: { age: "ancien", coif: "foulard", hair: "blanc" }, desc: "Vieille chanteuse du Pot Fêlé. Elle chante la chanson des Gouttières pour un liard, avec des mots qu'elle tient de sa grand-mère." },
      ig_merlot: { name: "Merlot", qui: "Un coupe-bourse de onze ou douze ans.", aspect: { allure: "gamin vif, toujours en mouvement", habits: "casquette de feutre enfoncée jusqu'aux yeux" }, f: false, face: { age: "jeune", coif: "court" }, desc: "Un coupe-bourse de onze ou douze ans, casquette de feutre enfoncée jusqu'aux yeux. Fauvette lui a appris le métier." },
      ig_boscot: { name: "Boscot", qui: "L'homme de porte de la Reine des Gouttières.", aspect: { allure: "gros, assis à son tonneau", visage: "crâne rasé, oreille en chou-fleur", signe: "osselets", voix: "douce" }, f: false, face: { age: "adulte", coif: "degarni", marks: ["cicatrice"] }, desc: "L'homme de porte de la Reine des Gouttières. Crâne rasé, oreille en chou-fleur, voix douce. Il casse les mains quand on le lui dit." },
      ig_lubin: { name: "Lubin", qui: "Le passeur du coude du canal des Gouttières.", aspect: { allure: "soixante-dix ans, appuyé sur sa perche", signe: "mains comme des racines", voix: "voix de gorge, enrouée par l'eau" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Le passeur du coude du canal des Gouttières. Soixante-dix ans, des mains comme des racines." },
      ig_marcoul: { name: "Marcoul", qui: "Chef d'une équipe de débardeurs du canal des Gouttières.", aspect: { allure: "débardeur solide", visage: "barbe grise tressée", signe: "crochet de quai" }, f: false, face: { age: "mur", beard: "barbe", hair: "gris" }, desc: "Chef d'une équipe de débardeurs du canal des Gouttières. Barbe grise tressée, crochet de quai." },
      ig_berangere: { name: "Bérangère", qui: "La doyenne des porteuses d'eau de la Fontaine-Sourde.", aspect: { allure: "épaules taillées par le joug", habits: "chapeau de paille noué sous le menton", signe: "joug et deux seaux" }, f: true, face: { age: "mur", coif: "foulard" }, desc: "La doyenne des porteuses d'eau de la Fontaine-Sourde. Des épaules taillées par le joug." },
      ig_ravoux: { name: "Rufin Ravoux", qui: "Marchand de reliques aux Halles.", aspect: { allure: "rond, luisant, gestes de sacristain", habits: "bonnet de velours", signe: "étal tendu de velours violet" }, f: false, face: { age: "adulte", coif: "court" }, desc: "Marchand de reliques aux Halles : dents, cheveux et clous de la reine Ysaure, fabriqués dans son grenier de la rue des Tanneurs." },
      ig_perenne: { name: "La veuve Pérenne", qui: "Veuve d'un saunier de Grisemotte, venue aux Halles.", aspect: { allure: "vieille femme inquiète", signe: "paume crevassée par le sel, liards serrés" }, f: true, face: { age: "ancien", coif: "foulard" }, desc: "Veuve d'un saunier de Grisemotte. Elle est venue aux Halles acheter une dent de la reine pour guérir son petit-fils." },
      ig_bocquet: { name: "Alexis Bocquet", qui: "Receleur des Halles.", aspect: { allure: "regarde les choses avant les gens", visage: "bandeau de velours noir sur l'œil gauche", signe: "loupe de joaillier dans l'œil droit" }, f: false, face: { age: "mur", coif: "degarni", marks: ["bandeau"] }, desc: "Receleur des Halles, le seul Borgne de la rangée qui ait vraiment un œil en moins. Il achète pour un homme aux gants gris." },
      ig_gondran: { name: "Gondran", qui: "Ferrailleur des Halles.", aspect: { allure: "vieux, assis sur un tabouret", signe: "balance romaine entre les genoux" }, f: false, face: { age: "ancien", beard: "barbe" }, desc: "Ferrailleur des Halles. Il vend au poids, et ne regarde jamais ce qu'il pèse." },
    },
    items: {
      ig_tr_broche: { name: "La broche aux grenats", kind: "tresor", price: 70, desc: "Or rouge, trois grenats, un poinçon d'orfèvre des Changeurs au revers. Trouvée dans un nid de pie, sur une cheminée des Gouttières." },
      ig_tr_anneau: { name: "L'anneau de la cloche noyée", kind: "tresor", price: 80, desc: "Un anneau d'or rouge, lourd, gravé à l'intérieur d'un croissant de lune et d'un nom que l'eau a effacé. Il était noué au battant de la cloche du canal." },
      ig_tr_sceau: { name: "Le sceau des fontainiers", kind: "tresor", price: 60, desc: "Un sceau de bronze à long manche. La matrice porte une fontaine couronnée et la légende : FONTAINIERS DE LA REINE." },
      ig_tr_nef: { name: "La nef d'argent", kind: "tresor", price: 120, desc: "Une salière de banquet en forme de navire, d'argent massif, un écu couronné sur la poupe. Elle servait de pot à colle à un faussaire." },
      ig_tr_compas: { name: "Le compas de marée", kind: "tresor", price: 90, bonus: { nature: 10 }, desc: "Une volvelle de pilote en bronze doré : des cercles de cuivre gravés SALVE · ÉCUEILS · SORNE, et une aiguille qui dit quand la mer laisse passer." },
      ig_tr_bague: { name: "La bague de deuil", kind: "tresor", price: 50, desc: "Un jonc d'or massif noirci au jais, une mèche de cheveux blancs sous le chaton, et deux mots gravés : À ma Muette." },
      ig_tr_soie: { name: "Le drap de soie brodée", kind: "tresor", price: 60, desc: "Une soie gris perle brodée d'argent : des poissons, des roseaux, une barque, et une femme couronnée qui pose un doigt sur ses lèvres. Un travail ancien des Hautes-Eaux." },
      ig_faux_cle: { name: "Une clé d'étain", kind: "tresor", price: 1, desc: "Une clé de coffret de foire, argentée. Elle brillait dans le nid de la pie." },
      ig_faux_bague: { name: "Une bague de cuivre doré", kind: "tresor", price: 1, desc: "La pierre bleue est du verre de lampe. La pie l'avait gardée quand même." },
      ig_faux_chandelier: { name: "Un chandelier de plomb doré", kind: "tresor", price: 3, desc: "Lourd, beau de loin. La dorure part sous l'ongle." },
      ig_faux_coffret: { name: "Un coffret de chêne aux briques", kind: "tresor", price: 2, desc: "Cerclé de fer, scellé à la cire de chandelle. Dedans, de la paille, deux briques, et le mot Merci gravé sur l'une." },
      ig_bague_odeline: { name: "La bague d'Odeline", kind: "souvenir", price: 10, desc: "Une bague d'argent simple, un peu ovale. Odeline la mettait le dimanche pour aller au cimetière des Noyés." },
      ig_feuille_chanson: { name: "La chanson des Gouttières", kind: "document", form: "feuille", hand: "ancienne",
        desc: "Une vieille copie manuscrite de la chanson des toits, sur un parchemin gratté et réécrit, trouvée dans la reliure d'un psautier.",
        text: "*La chanson des Gouttières*\n\n*Sur les toits de la Muette,\n{{loupe#ig_ch_palimpseste|on se tait pour mieux chanter|la fontaine garde le sceau, la cloche garde l'anneau}},\nqui a langue n'a pas tête,\n{{loupe#ig_ch_sorne|qui se tait garde la clé|et Sorne, sous la mer, garde le reste}}.*\n\n*Sur les toits de la Muette,\nles pies volent ce qui luit,\nqui a tête n'a pas langue,\n{{loupe#ig_ch_nuit|qui se tait passe la nuit|qui se tait descend la nuit où la mer s'en va}}.*" },
      ig_livre_ravoux: { name: "Le registre de Ravoux", kind: "document", form: "registre", hand: "soignee",
        desc: "Le livre de ventes de Rufin Ravoux, marchand de reliques. Relié de basane, taché de colle.",
        text: "*Livre de ventes de R. Ravoux, marchand de saintetés, aux Halles.*\n\n*Dent de la reine Ysaure, à la veuve Gillot de Vasier : deux ducats.*\n*Mèche de la reine, rousse, à une dame du Changeurs : un ducat.*\n*Trois dents de la reine, au chanoine de Saint-Pol : cinq ducats.*\n*À M. B., gants gris : {{loupe#ig_lr_brunel|un clou du cercueil de la reine, dix liards|une boîte de corne au croissant, trouvée chez un fondeur de la rue des Tanneurs, quatre ducats ; il en veut d'autres et paiera double}}.*\n*{{loupe#ig_lr_reine|Payé ce mois à la Reine des Gouttières : rien|Caché ce mois à la Reine des Gouttières : trente-deux ducats}}.*" },
    },
    enemies: {
      ig_casseur: { name: "Casseur de la Reine", look: "humain", pv: 14, att: 30, def: 12, dmg: 5, desc: "Un homme de la Cour des Pelles : bâton ferré, mains de débardeur, ordres reçus de Boscot." },
      ig_boscot: { name: "Boscot", look: "humain", pv: 36, att: 40, def: 14, dmg: 6, desc: "L'homme de porte de la Reine. Il se bat sans colère, comme on fait un travail." },
      ig_ravoux: { name: "Rufin Ravoux", look: "humain", pv: 10, att: 20, def: 8, dmg: 3, desc: "Un marchand de reliques rond et luisant, armé d'un chandelier de sacristie." },
    },
    clues: {
      ig_c_moine: { rev: "O", text: "Fauvette : « La nuit des Lanternes, à minuit, un moine est sorti de la boutique de la vieille. Capuche, bure, une main sur le front. Il a tiré la porte, mal, et il est parti vers le pont des Noyés, sans courir. »" },
      ig_c_chanson: { rev: "T", text: "La chanson des Gouttières, chantée par Huguette Clopin, dit sous ses mots : « Sur les toits de la Muette, les Vasse gardent sa voix aux Joncs-Bas. »" },
      ig_c_fontaine: { rev: "T", text: "Le chant de la Fontaine-Sourde, au cornet : « Aymeric Vasse m'a fait chanter pour ceux qui savent se taire. »" },
      ig_c_cloche: { rev: "T", text: "Dans la panse de la cloche noyée du canal, en relief dans le bronze : FONDUE POUR YSAURE REINE DU DELTA · LES SEPT QUI SE TAISENT M'ONT DESCENDUE ICI · QUAND L'EAU ME REMPLIT JE CHANTE POUR EUX. Un croissant de lune." },
      ig_c_gants: { rev: "B", text: "Margaux Pelle : l'homme aux gants gris lui a acheté depuis l'hiver une boîte de corne gravée d'un croissant, un sifflet d'os et une clé d'ambre, et il demande toujours « des choses avec le croissant »." },
    },
    veils: {
      ig_he_rousse: { fx: { flag: ["ig:piste", "ig:nid"], ep: ["perso", 150] } },
      ig_me_nid: { fx: { flag: ["ig:piste", "ig:nid"], ep: ["perso", 150] } },
      ig_bq_rousse: { fx: { flag: "ig:piste", questSeen: "IG_oeil", ep: ["perso", 100] } },
      ig_hu_chanson: { fx: { clue: "ig_c_chanson", ep: ["perso", 200] } },
      ig_fo_vasse: { fx: { clue: "ig_c_fontaine", ep: ["perso", 200] } },
      ig_fo_chant: { fx: { ep: ["perso", 200] } },
      ig_li_canaux: { fx: { ep: ["perso", 150] } },
      ig_fv_porte: { fx: { ep: ["perso", 100] } },
      ig_ch_palimpseste: { fx: { ep: ["perso", 200] } },
      ig_ch_sorne: { fx: { ep: ["perso", 200] } },
      ig_lr_reine: { fx: { ep: ["perso", 100] } },
      ig_mi_fete: { fx: { ep: ["perso", 300] } },
      ig_ti_dix: { fx: { flag: "tibere:espion", ep: ["perso", 200] } },
      ig_ti_vendre: { fx: { flag: "tibere:espion", ep: ["perso", 200] } },
      ig_ti_bague: { fx: { ep: ["perso", 150] } },
    },
    quests: [
      { id: "IG_oeil", act: "I", kind: "annexe", title: "L'œil de pie", start: "IG_entree", echo: ["ig_oeil=repris", "ig_oeil=achete", "ig_oeil=donne", "ig_oeil=partage", "ig_oeil=sauvee"] },
      { id: "IG_dette", act: "I", kind: "annexe", title: "La dette de Fauvette", start: "IG_dette", echo: "ig:dette_reglee" },
      { id: "IG_fontaine", act: "I", kind: "annexe", title: "La fontaine qui chante", start: "IG_fontaine", echo: "ig:fontaine_ouverte" },
      { id: "IG_cloche", act: "I", kind: "annexe", title: "La cloche noyée", start: "IG_cloche", echo: ["ig_cloche=marcoul", "ig_cloche=secret", "ig_cloche=laissee"] },
      { id: "IG_faux", act: "I", kind: "annexe", title: "La dent de la Muette", start: "IG_reliques", echo: ["ig_faux=demasque", "ig_faux=medecin", "ig_faux=gildas"] },
    ],
    shops: {
      ig_balance: { name: "La balance de la Reine", sells: [{ item: "crochets", price: 18 }, { item: "lanterne", price: 7 }, { item: "corde", price: 4 }, { item: "cuir", price: 45 }, { item: "arbalete", price: 32 }, { item: "rapiere", price: 45 }] },
      ig_etals: { name: "Les étals des Halles", food: 1, sells: [{ item: "onguent", price: 6 }, { item: "eau_de_vie", price: 3 }, { item: "corde", price: 3 }, { item: "lanterne", price: 6 }, { item: "gambison", price: 25 }, { item: "baton", price: 4 }] },
    },
  },
};
