// Act V, lot V2: the bottom of the Breach. The Voice (her last offer, the fight, the second chance), Malvoran (the
// stone hand, the door, the face, his name), the choice of the ending, and the six endings with a long epilogue
// that reads back every choice of the whole story (one line per person and per side quest).
var RET = "@ret";
var A_PIP = { with: "pip", v: 10 };
var A_COL = { with: "coliane", v: 10 };
var A_GLO = { with: "gloup", v: 10 };
var A_CHA = { with: "charline", v: 10 };
var A_AUB = { with: "aubin", v: 10 };
var A_THA = { with: "thavary", v: 10 };
function H(f) { return { has: f }; }
function N(c) { return { not: c }; }
function ANY() { return { any: [].slice.call(arguments) }; }
function ALL() { return { all: [].slice.call(arguments) }; }
function L(cond, text) { return { if: cond, text: text }; }
// What weakens the Voice before the fight: her name said aloud, a companion's help, an ally from upstairs.
var AIDES = [H("VF:voix_dite"), H("VF:aide_pip"), H("VF:aide_aubin"), H("VF:aide_charline"), H("VF:aide_coliane"), H("VF:aide_gloup"),
  H("VF:aide_thavary"), H("ardhal:allie"), H("V:ardhal_tenu"), H("VF:veyra_contre")];
// The three keys in hand (given ones came back at the floors of the Descent: V1 gives them back with `relic`).
var TROIS_CLES = ALL({ relic: "clou" }, { relic: "cloche" }, { relic: "anneau" });
// BIBLE 8.1, "Libéré et guéri": the truth, the Voice named, a clean palm, Aubin or Charline loyal (and here).
var GUERISSEUR = ANY(ALL({ present: "aubin" }, { loyal: "aubin" }), ALL({ present: "charline" }, { loyal: "charline" }));
var LIBERE = ALL(H("R:revele"), H("voix:nommee"), { mark: { max: 1 } }, GUERISSEUR);
// BIBLE 8.1, "Détruit": the dragon purified or killed, and two keys.
var DRAGON_FEU = ANY(H("dragon=purifie"), H("dragon=tue"));
var DETRUIT = ALL(DRAGON_FEU, { relics: { min: 2 } });
var P = {};
// A gift left at his feet (side quest VF_q_dette): each one is its own scene.
function don(title, text, after) {
  return { act: "V", title: title, place: "VF_l_fond", fx: { set: { dette: "rendue" }, quest: "VF_q_dette" },
    text: [text, after, { once: true, text: "Tu ne sais pas si ça sert à quelque chose. Il ne sait pas non plus. Mais quelque chose a changé dans la façon dont il se tient : un poids de moins, ou un poids de plus, de ceux qui aident à rester debout." }],
    choices: [{ back: "VF_malvoran" }] };
}

Object.assign(P, {
  // ================================================================== the threshold
  VF_seuil: { act: "V", title: "Le fond", place: "VF_l_fond", backName: "la grève noire",
    fx: { ep: ["histoire", 5000] },
    text: [
      "La pente finit sur une grève de gravier noir, et la grève finit sur l'eau. Tu ne vois pas l'autre bord. Tu ne vois pas de voûte non plus : le noir monte au-dessus de toi sans qu'on sache où il s'arrête, et la lumière que tu portes n'y accroche rien. Il ne fait plus froid. Il fait tiède, d'une tiédeur de bête endormie, et l'air sent le bief en été, la vase chaude, le linge qu'on a laissé tremper trop longtemps.",
      "Loin sur l'eau, la forme est assise. Tu ne sais pas mesurer sa taille : il n'y a rien à côté d'elle pour comparer. Une tête penchée sur une poitrine, des épaules qui portent quelque chose de plus large qu'elles, un bras levé, plié au coude, la main ouverte vers le haut. Derrière elle, à peine plus claire que le noir, une porte. La forme reste immobile. Tu sais pourtant qu'elle vit, parce que l'eau frémit autour d'elle à intervalles réguliers, très lents, comme frémit l'eau d'un seau posé près d'un homme qui respire.",
      "Et entre elle et toi, debout sur l'eau comme sur un plancher, la femme. De près, elle n'est pas plus terrible que de loin. Une robe qui coule sans cesse vers ses pieds et remonte sans cesse vers ses épaules. Des cheveux d'algue lourds d'eau. Un visage qui pourrait être celui de n'importe qui, et qui a, par moments, les yeux de quelqu'un que tu as connu. Elle t'a regardé{e} descendre la pente du début à la fin. Elle attend que tu aies fini de regarder, par politesse.",
      L({ mark: { min: 3 } }, "Ta main gauche se tend vers elle avant que tu l'aies décidé. Tu la rattrapes de la droite, par le poignet, comme on retient un chien qui a reconnu son maître. La tache bat. Elle a chaud. Elle est contente d'être arrivée."),
      L({ mark: { max: 0 } }, "Ta paume est froide et propre. Il n'y a rien en toi qui la connaisse. C'est peut-être pour cela qu'elle te regarde avec tant d'attention, comme on regarde une serrure dont on n'a pas la clé."),
      { with: "pip", text: "Pip s'est collé contre ton cou, si près que tu sens sa chaleur sur ta peau. Il ne regarde pas la femme. Il regarde, très loin derrière elle, la main ouverte. Sa lumière tremble au même rythme que l'eau." },
      { with: "coliane", text: "Coliane a deux couteaux dans les mains et elle ne s'en rend pas compte. Elle se tait. Elle regarde l'eau sous les pieds de la femme, et tu sais à quoi elle pense : à une écluse, une nuit, et un village qui dormait." },
      { with: "aubin", text: "Frère Aubin a tiré son chapelet de sa manche. Il ne prie pas. Il tient les grains serrés dans son poing, comme une fronde." },
      L(H("V:cles_veyra"), "Derrière toi, sur la pente, des pas. Des bottes ferrées qui glissent sur la glace, un juron étouffé, le cliquetis d'une épée qu'on retient contre sa cuisse. Veyra descend. Tu lui as promis de la laisser tourner les clés. Elle vient chercher sa promesse."),
      L(H("V:pacte_vendrel"), "Au bord de l'eau, à vingt pas sur ta gauche, un homme est assis sur un rocher plat, les mains croisées sur un genou, comme on attend une audience. Des gants blancs. Un col montant. À sa ceinture pend une clé rouge, et au bout de la clé, une goutte de lumière qui vient de tes reliques. Maître Vendrel te fait un petit signe de tête. Il t'attendait."),
      L(H("ardhal:allie"), "Tout en haut de la pente, une lueur blanche : Ardhal s'est couché au bord du vide, la tête penchée, et il regarde. Il n'avait jamais vu cette eau. Il sait ce qu'on y a laissé. Il ne la quitte pas des yeux."),
      "« {hero} », dit-elle. Elle dit ton nom comme on le disait quand tu étais petit{e}, le soir, pour te faire rentrer. Personne ne t'a appelé{e} comme ça depuis des années. « Tu es venu{e} jusqu'au bout. Je savais que tu viendrais. Je t'attendais depuis la pierre fendue. »",
    ],
    choices: [
      { label: "Relire la lettre de ta maîtresse, une dernière fois", hide: { seen: "VF_lettre" }, to: "VF_lettre" },
      { label: "Avancer sur la grève, jusqu'au bord de l'eau", big: true,
        to: [{ if: ALL(H("V:cles_veyra"), N({ seen: "VF_veyra_cles" })), to: "VF_veyra_cles" },
          { if: ALL(H("V:pacte_vendrel"), N({ seen: "VF_vendrel" })), to: "VF_vendrel" },
          { to: "VF_voix" }] },
    ] },
  VF_lettre: { act: "V", title: "La lettre pliée en quatre", place: "VF_l_fond",
    text: [
      "Tu sors la lettre de ta besace. Le papier est mou d'avoir été plié et déplié, l'encre a pâli aux pliures, et il y a, dans un coin, une tache de graisse qui date de la Lanterne éteinte, le premier soir, aux Trois-Bornes. Tu la connais par cœur. Tu la relis quand même, à la lueur de ce que tu portes.",
      "*Regarde sous le château. Ne prends rien que tu ne saurais rendre.*",
      L(H("marque:eclat"), "Sous le château, tu as pris l'éclat. Il est encore dans ta besace, tiède, et il bat contre la lettre comme un second cœur. Tu ne sais toujours pas à qui tu pourrais le rendre. Peut-être à elle. Peut-être à lui."),
      L(H("eclat:refuse"), "Sous le château, tu n'as rien pris. Tu as laissé l'éclat dans la pierre fendue, et tu t'en es voulu, plus tard, chaque fois qu'un combat tournait mal. Ici, au bord de cette eau, tu ne t'en veux plus."),
      L({ item: "lettre_maitre" }, "Contre elle, dans la même poche, l'autre lettre, la longue, celle de Hautecombe, avec son écriture qui tremble à la fin. *Ne frappe jamais quelqu'un qui tient une porte.* Ou peut-être était-ce *ne laisse personne pleurer seul dans le noir*, ou *compte les mains*. Tu les mélanges, maintenant. Elles disent la même chose."),
      L(H("maitre=sauve"), "Celle qui l'a écrite est vivante, là-haut. Elle ne sait plus tenir une plume. Tu lui raconteras ce qu'il y avait sous le château, si tu remontes, et elle hochera la tête comme si elle s'en doutait."),
      L(H("maitre=mort"), "Celle qui l'a écrite est sous une pierre sans nom, au-dessus de Merle. Tu as la lettre. C'est tout ce qui reste de sa voix qui ne soit pas à la femme de l'eau."),
      L(H("maitre=perdu"), "Celle qui l'a écrite est quelque part dans cette eau. Peut-être qu'elle te regarde lire. Tu replies la lettre très vite."),
      "Tu la replies en quatre, selon les vieux plis. Tu la ranges contre ta poitrine.",
    ],
    choices: [{ back: "VF_seuil" }] },

  // ------------------------------------------------------------------ Veyra comes for the keys (V:cles_veyra)
  VF_veyra_cles: { act: "V", title: "La promesse du fort", place: "VF_l_fond",
    text: [
      "Veyra arrive sur la grève, essoufflée, la cape déchirée par la glace, ses gants noirs aux mains. Derrière elle, en haut de la pente, trois de ses épées se sont arrêtées et ne descendent pas plus bas. Elle ne les regarde pas. Elle regarde la forme assise, au loin, et sa bouche s'ouvre, et se referme, comme quelqu'un qui allait dire un nom et qui découvre qu'il ne le connaît pas.",
      "« Les clés, dit-elle. Tu as promis. » Elle tend les deux mains, paumes en l'air, et tu vois qu'elles tremblent.",
      "Alors la femme de l'eau se tourne vers elle, lentement, avec une tendresse infinie, et elle dit, de la voix qu'on prend pour consoler : « Veyra. Toi seule le comprends. Libère-le. »",
      "Veyra se fige. Ce sont les mots. Ce sont exactement les mots, avec la même voix, la même pause avant *libère-le*. Les mots de sept ans de rêves, de toutes les nuits, depuis le jour où elle a jeté son gant gris dans la Sorbe. Elle se tourne vers toi, très pâle. Elle attend que tu lui dises quelque chose. N'importe quoi.",
    ],
    choices: [
      { label: "Lui faire entendre ce qu'elle vient d'entendre", test: { dom: "social", diff: -20, label: "Ouvrir les yeux de Veyra", help: [{ if: H("R:revele"), v: 10 }, { if: H("voix:nommee"), v: 10 }, { if: { item: "lettre_maitre" }, v: 5 }, A_PIP, A_AUB] }, win: { fx: { ep: ["histoire", 4000] }, to: "VF_veyra_comprend" }, lose: { to: "VF_veyra_combat" } },
      { label: "« Regarde-la avec moi. Regarde bien », dit Pip", who: "pip", test: { dom: "magie", diff: -20, label: "Éclairer le visage de la femme", help: [A_PIP] }, win: { fx: { conf: { pip: 5 }, ep: ["histoire", 4000] }, to: "VF_veyra_comprend" }, lose: { to: "VF_veyra_combat" } },
      { label: "Tenir ta parole, et lui poser les clés dans les mains", tag: "Marque +1", stain: true, fx: { mark: 1, conf: { pip: -10, aubin: -10, coliane: -10 } }, to: "VF_veyra_cle_tournee" },
      { label: "Reprendre ta parole, la main sur ton arme", to: "VF_veyra_combat" },
    ] },
  VF_veyra_comprend: { act: "V", title: "Les mots des rêves", place: "VF_l_fond",
    fx: { flag: "VF:veyra_contre", regard: { veyra: "allie" }, fac: { cercle: 5 } },
    text: [
      { outcome: "win", text: "Tu ne lui dis pas qu'elle s'est trompée. Tu lui demandes seulement qui lui parlait, dans ses rêves. Si c'était la voix d'un homme. Si cette voix avait jamais eu froid, ou peur, ou faim. Si elle lui avait jamais demandé quelque chose pour lui-même, au lieu de lui dire ce qu'elle voulait entendre." },
      { with: "pip", text: "Pip quitte ton épaule. Il vole droit vers la femme, sans hâte, et il s'arrête devant son visage, à un pied, et il brille, de toute sa force. La lumière ne la traverse pas. Elle glisse dessus. Sous la lumière, le visage n'a pas de traits : de la vase lissée par une main, et deux creux à la place des yeux, et rien du tout à la place du cœur." },
      "Veyra regarde. Longtemps. Puis elle enlève ses gants noirs, l'un après l'autre, et elle les jette dans l'eau, aux pieds de la femme. « C'est toi, dit-elle. Depuis le début. Ce n'était pas lui. Il ne m'a jamais rien demandé. Il ne sait même pas que j'existe. »",
      "La femme de l'eau se tait. Elle sourit, un peu tristement, comme on sourit à une enfant qui vient de comprendre que les cadeaux ne viennent pas du ciel. Veyra tire son épée grise. « Je suis venue délivrer un homme, dit-elle. Je l'aurais vendu à sa pire blessure. » Elle se place à ta gauche, face à l'eau. « Je ne te demande rien. Je frappe avec toi. Après, on verra ce que je dois. »",
    ],
    choices: [{ label: "Avancer avec elle vers l'eau", big: true, to: [{ if: ALL(H("V:pacte_vendrel"), N({ seen: "VF_vendrel" })), to: "VF_vendrel" }, { to: "VF_voix" }] }] },
  VF_veyra_combat: { act: "V", title: "Veyra sur la grève", place: "VF_l_fond",
    combat: { title: "Veyra de Hautcastel", enemies: ["VE_veyra", { id: "VE_epee_noire", n: 1 }], terrain: "galerie",
      win: { fx: { ep: ["histoire", 5000] }, to: "VF_veyra_tombe" }, lose: { fx: { pv: -10 }, to: "VF_veyra_cle_tournee" } },
    text: [
      { outcome: "lose", text: "Tu cherches les mots, et tu ne les trouves pas assez vite. Veyra secoue la tête, comme pour chasser une mouche, et la voix de l'eau lui murmure encore quelque chose que tu n'entends pas." },
      "« Je ne te laisserai pas l'enchaîner une deuxième fois », dit Veyra. Elle tire son épée grise. Un de ses gants noirs, le plus jeune, a désobéi et descend la pente en courant pour se placer à côté d'elle. Ils se mettent en garde ensemble, à la manière de la commanderie, épaule contre épaule.",
      "Sur l'eau, la femme ne bouge pas. Elle regarde, les mains jointes devant sa robe qui coule, avec l'intérêt poli de quelqu'un qui a parié sur les deux.",
    ] },
  VF_veyra_tombe: { act: "V", title: "Veyra à genoux", place: "VF_l_fond",
    fx: { flag: "VF:veyra_tombee", pv: 30 },
    text: [
      "Veyra tombe à genoux dans le gravier, l'épée lâchée, la main sur le flanc. Son gant noir est assis plus loin, la tête dans les mains. Tu reprends ton souffle. Et sur l'eau, la femme rit. Un rire très doux, très bref, sans méchanceté, le rire de quelqu'un qui a gagné quand même.",
      "« Elle t'aurait aimé{e}, te dit la femme, les yeux sur Veyra. Si tu l'avais laissée faire. Vous auriez été deux à me l'ouvrir. »",
      "Veyra relève la tête. Elle regarde la femme, puis toi, puis la femme. Tu vois le moment exact où elle comprend : il passe sur son visage comme une ombre de nuage sur un champ. « Ce n'était pas lui, dit-elle. Dans les rêves. Ce n'était jamais lui. » Elle n'essaie pas de se relever. « Va. Je reste là. Je veux le voir, quand tu y seras. Le voir, cette fois. Pas l'entendre. »",
    ],
    choices: [{ label: "La laisser sur la grève, et avancer vers l'eau", big: true, to: [{ if: ALL(H("V:pacte_vendrel"), N({ seen: "VF_vendrel" })), to: "VF_vendrel" }, { to: "VF_voix" }] }] },
  VF_veyra_cle_tournee: { act: "V", title: "La clé tournée", place: "VF_l_fond",
    fx: { flag: "VF:veyra_noyee", relicLose: true, ep: ["seance", 2000] },
    text: [
      "Veyra prend ce qu'elle trouve dans ta besace, les mains tremblantes, et elle avance sur l'eau. L'eau la porte. La femme marche à côté d'elle, une main posée sur son épaule, comme une sœur aînée qui accompagne la plus jeune à l'autel. Elles traversent ensemble tout le noir, et tu les vois rapetisser, deux silhouettes et une lumière qui vient de toi.",
      "Au pied de la forme assise, Veyra s'arrête. Elle lève la clé vers la porte. Tu entends le bruit d'ici, un bruit de pierre contre métal, puis un craquement qui court dans toute la caverne, sous tes pieds, dans tes dents, dans le gravier qui saute sur la grève. L'eau monte d'un coup jusqu'à tes chevilles. Elle est chaude.",
      "Alors la main de pierre bouge. La grande main ouverte, celle qui n'a pas bougé depuis quatre cents ans, se referme. Lentement. Elle se referme sur Veyra comme on referme la main sur un oiseau, sans serrer, et elle la tire vers le bas, dans l'eau, et Veyra ne crie pas. La clé tombe. Tu la vois briller une seconde sous la surface, puis plus rien. La main se rouvre, vide, et reprend sa place, et le craquement s'arrête.",
      "Il a tenu. Même contre elle. Même contre toi. Sur l'eau, la femme regarde la main se rouvrir, et pour la première fois, tu vois passer sur son visage quelque chose qui ressemble à de la colère.",
    ],
    choices: [{ label: "Avancer vers l'eau, ce qui te reste de clés serré contre toi", big: true, to: [{ if: ALL(H("V:pacte_vendrel"), N({ seen: "VF_vendrel" })), to: "VF_vendrel" }, { to: "VF_voix" }] }] },

  // ------------------------------------------------------------------ Vendrel waits with his red key (V:pacte_vendrel)
  VF_vendrel: { act: "V", title: "L'homme aux gants blancs", place: "VF_l_fond",
    text: [
      "Vendrel se lève de son rocher. Il époussette son genou, par habitude, bien qu'il n'y ait pas de poussière ici. La clé rouge pend à sa ceinture ; au bout, la goutte de lumière que tu lui as prêtée à la forge bat doucement, au rythme de tes reliques. Il a l'air reposé. Il a l'air d'un homme qui va enfin signer le traité qu'il prépare depuis dix ans.",
      "« Vous voilà, dit-il. Je vous avoue que j'ai craint, un moment, que vous ne remontiez. On a des scrupules, en descendant. On les perd en route, d'ordinaire. » Il désigne la porte, au loin. « Nous allons y aller ensemble. Ma clé ouvre. La vôtre ferme. À nous deux, nous déciderons de ce qui passe. C'est cela, gouverner. »",
      "Sur l'eau, la femme tourne la tête vers lui. « Mon ami », dit-elle, d'une voix si chaude que Vendrel ferme les yeux une seconde, comme un chat au soleil. Elle n'ajoute rien. Elle n'a jamais besoin d'ajouter.",
      { with: "coliane", text: "Coliane crache par terre. « Il y croit encore, dit-elle à mi-voix. Regarde-le. Il y croit encore. »" },
    ],
    choices: [
      { label: "Lui rappeler ce qu'elle a promis, et à qui", test: { dom: "social", diff: -20, label: "Faire douter Vendrel", help: [{ if: H("V:secretaire_parle"), v: 10 }, { if: { clues: "V", min: 3 }, v: 10 }, A_AUB, A_PIP] }, win: { fx: { ep: ["histoire", 4000] }, to: "VF_vendrel_rompu" }, lose: { to: "VF_vendrel_combat" } },
      { label: "Reprendre la goutte que tu lui as prêtée", test: { dom: "magie", diff: -20, label: "Rappeler ta lumière", help: [{ if: { mark: { min: 3 } }, v: 10 }, A_PIP, A_CHA] }, win: { fx: { ep: ["histoire", 4000] }, to: "VF_vendrel_rompu" }, lose: { to: "VF_vendrel_combat" } },
      { label: "Le laisser aller à celle qu'il a servie", fx: { conf: { coliane: 5, aubin: -5 } }, to: "VF_vendrel_pris" },
      { label: "Frapper le premier", to: "VF_vendrel_combat" },
    ] },
  VF_vendrel_combat: { act: "V", title: "Le conseiller sur la grève", place: "VF_l_fond",
    combat: { title: "Maître Vendrel", enemies: ["VE_vendrel", { id: "vf_fille_vase", n: 1 }], terrain: "galerie",
      win: { fx: { ep: ["histoire", 5000] }, to: "VF_vendrel_vaincu" }, lose: { fx: { pv: -10 }, to: "VF_vendrel_pris" } },
    text: [
      "Vendrel soupire. Il ôte son gant blanc droit, le plie, le range dans sa manche. Dessous, la main n'est plus une main : de la vase noire, luisante, aux doigts trop longs, qui s'allonge encore quand il la lève. À ses pieds, l'eau se soulève et prend une forme : une petite fille de vase, sans visage, qui se tient à sa jambe comme à celle d'un père.",
      "« Vous m'obligez à des manières, dit-il. Je déteste les manières. »",
    ] },
  VF_vendrel_vaincu: { act: "V", title: "La clé rouge", place: "VF_l_fond",
    fx: { flag: "VF:vendrel_fini", unflag: "V:pacte_vendrel", conf: { coliane: 5, thavary: 5 }, pv: 30 },
    text: [
      "Vendrel tombe dans le gravier. La clé rouge se détache de sa ceinture, roule, et se fend en deux sur une pierre, avec un bruit de verre. La goutte de lumière qu'elle portait remonte en flottant jusqu'à ta besace et y rentre, comme un chien qui revient à la niche.",
      "Il essaie de se relever. Il n'y arrive pas. Il rampe, alors, vers l'eau, très dignement pour un homme qui rampe, en tendant sa main noire vers la femme. « Madame, dit-il. Madame, je vous en prie. »",
      "La femme le regarde venir. Puis elle détourne les yeux, comme on détourne les yeux d'un mendiant qu'on a déjà payé. L'eau monte sur la grève, une seule vague, lente, et quand elle redescend, Vendrel n'est plus là. Il ne reste qu'une paire de gants blancs, l'un plié, l'autre ouvert, posés côte à côte sur le gravier noir.",
    ],
    choices: [{ label: "Laisser les gants où ils sont, et avancer", big: true, to: "VF_voix" }] },
  VF_vendrel_rompu: { act: "V", title: "Sur quelle tête", place: "VF_l_fond",
    fx: { flag: "VF:vendrel_fini", unflag: "V:pacte_vendrel" },
    text: [
      { outcome: "win", text: "La goutte de lumière quitte la clé rouge et revient vers toi. Ou bien c'est Vendrel qui l'a laissée partir : tu ne sais pas. Tu as parlé, ou tu as tendu la main, et il t'a regardé{e} faire avec cette curiosité polie qu'il a pour tout, même pour sa propre défaite." },
      "« Madame, dit-il à l'eau, sans te quitter des yeux. Une question de forme. Quand vous m'avez promis la couronne. »",
      "« Je n'ai jamais dit sur quelle tête, mon ami », répond la femme, très doucement. Elle le dit comme on annonce à un enfant que le chien est mort, avec ménagement, parce que c'est triste et que ça ne change rien.",
      "Vendrel hoche la tête. Il remet son gant blanc, soigneusement, doigt par doigt. Puis il s'assied sur son rocher plat, les mains croisées sur le genou, et il regarde la porte au loin, et il ne bouge plus. Quand tu repasses à côté de lui, plus tard, il n'est plus qu'une forme de vase sèche qui a gardé la position d'un homme qui attend une audience.",
    ],
    choices: [{ label: "Le laisser attendre, et avancer", big: true, to: "VF_voix" }] },
  VF_vendrel_pris: { act: "V", title: "Ce qu'elle prend", place: "VF_l_fond",
    fx: { flag: "VF:vendrel_pris", unflag: "V:pacte_vendrel" },
    text: [
      { outcome: "lose", text: "Tu te retrouves sur le dos dans le gravier, l'arme à trois pas, le souffle coupé. Vendrel ne t'achève pas. Il ne t'a jamais haï{e} : tu étais un obstacle, et un obstacle à terre n'en est plus un." },
      "Il marche vers l'eau, la clé rouge à la main. L'eau le porte. Il traverse jusqu'à la femme, et il s'incline devant elle, à l'ancienne, très bas. Elle lui ouvre les bras. Il y entre.",
      "Ce n'est pas long. Il ne crie pas. La vase se referme sur lui comme une porte qu'on tire, et la femme grandit, d'un coup, d'une tête, et sa robe coule plus vite, et ses yeux, pendant une seconde, sont gris et cernés et polis, les yeux d'un conseiller qui a toujours un coup d'avance. Puis ils redeviennent les siens. La clé rouge flotte un moment sur l'eau, puis s'enfonce.",
      "Ta besace est plus légère d'une goutte. Tu ne la reverras pas. Elle est à elle, maintenant, avec tout le reste.",
    ],
    choices: [{ label: "Avancer vers elle", big: true, to: "VF_voix" }] },
});

Object.assign(P, {
  // ================================================================== the Voice
  VF_voix: { act: "V", title: "La femme de l'eau", place: "VF_l_fond", hub: true, backName: "le bord de l'eau",
    text: [
      { first: true, text: "Tu t'arrêtes au bord de l'eau. Elle est à trois pas. De près, elle sent ce que sentent les choses qu'on aime et qu'on a laissées trop longtemps : le linge de ta mère, la soupe du soir, l'étable, la pluie sur un toit de chaume. Elle sent tout cela en même temps, et rien de tout cela tout à fait. Sous la robe qui coule, tu ne vois pas de pieds. Elle ne se tient pas sur l'eau. Elle en sort." },
      { first: true, text: "« N'aie pas peur, dit-elle. Je ne mens pas. Tu le sais, maintenant : tu m'as entendue dans le puits de Brumefeuille, sous le moulin, dans le lac, dans le torrent, dans les citernes. Je ne t'ai jamais menti. J'ai choisi ce que je disais. Tout le monde fait ça. » Elle sourit. « Lui, là-bas, il a cessé de choisir il y a longtemps. Il ne dit plus rien. C'est moi qui parle pour lui. »" },
      { again: true, text: "La femme de l'eau t'attend, à trois pas, les mains jointes devant sa robe qui coule. Elle a tout son temps. Elle a eu quatre cents ans." },
      L(ALL(H("VF:chute"), { not: { seen: "VF_voix_vaincue" } }), "Tu as encore le goût de son eau dans la bouche. Elle ne t'en veut pas. Elle te regarde avec une patience terrible, la patience des choses qui savent qu'elles finiront par avoir raison."),
      L(H("VF:voix_dite"), "Depuis que tu l'as nommée, elle a perdu quelque chose. Elle a toujours sa voix, sa robe, ses cheveux d'algue. Mais elle n'a plus de visage à emprunter : il ne reste que de la vase lissée, et deux creux."),
      L(H("VF:vendrel_pris"), "Elle a gardé, depuis qu'elle a pris Vendrel, une façon de pencher la tête pour écouter, poliment, qui n'était pas à elle."),
      L(H("VF:veyra_contre"), "Veyra se tient à ta gauche, l'épée grise tirée, les mains nues. Elle ne regarde pas la femme dans les yeux. Elle a appris."),
      L(H("VF:veyra_tombee"), "Derrière toi, sur la grève, Veyra est assise dans le gravier, la main sur le flanc. Elle regarde."),
      L(H("maitre=mort"), "Pendant une seconde, elle a les yeux de ta maîtresse, tels qu'ils étaient au bord du gué, quand elle a levé le menton pour te faciliter le geste. Puis ils redeviennent d'eau."),
      L(ANY(H("maitre=perdu"), H("V:maitre_laissee")), "Pendant une seconde, elle a la voix de ta maîtresse. « Tiens ta garde haute », dit-elle. Puis elle rit, doucement, comme on rit d'une vieille plaisanterie entre amis."),
    ],
    choices: [
      { label: "« Qui es-tu ? »", hide: { seen: "VF_voix_qui" }, to: "VF_voix_qui" },
      { label: "« Qu'est-ce que tu veux ? »", hide: { seen: "VF_voix_veut" }, to: "VF_voix_veut" },
      { label: "« Pourquoi moi ? »", hide: { seen: "VF_voix_pourquoi" }, to: "VF_voix_pourquoi" },
      { label: "« Tu n'es pas lui. Tu es ce qu'il serait devenu s'il avait cédé. »", if: H("voix:nommee"), why: "Pour la nommer, il faudrait savoir ce qu'elle est vraiment. Tu ne le sais pas.", hide: H("VF:voix_dite"), fx: { flag: "VF:voix_dite", ep: ["histoire", 5000], conf: { pip: 5, aubin: 5, charline: 5 } }, to: "VF_voix_nom" },
      { label: "Écouter ce qu'elle a à te proposer", hide: { seen: "VF_offre" }, to: "VF_offre" },
      { label: "« Elle n'a pas de lumière à elle. Laisse-moi lui montrer », dit Pip", who: "pip", hide: { seen: "VF_aide_pip" }, test: { dom: "magie", diff: -20, label: "Éclairer l'eau jusqu'au fond", help: [A_PIP, { if: H("V:pip_souvenir"), v: 10 }] }, win: { fx: { flag: "VF:aide_pip", conf: { pip: 5 } }, to: "VF_aide_pip" }, lose: { to: "VF_aide_pip" } },
      { label: "« Cette eau a été bénie, autrefois. Elle s'en souviendra », dit Frère Aubin", who: "aubin", hide: { seen: "VF_aide_aubin" }, test: { dom: "magie", diff: -20, label: "Bénir l'eau de la Brèche", help: [A_AUB, { if: { item: "VE_chapelet" }, v: 10 }, { if: H("V:verset_fini"), v: 5 }] }, win: { fx: { flag: "VF:aide_aubin", conf: { aubin: 5 } }, to: "VF_aide_aubin" }, lose: { to: "VF_aide_aubin" } },
      { label: "« La vase, ça cuit. Recule », dit Charline", who: "charline", hide: { seen: "VF_aide_charline" }, test: { dom: "magie", diff: -20, label: "Faire bouillir l'eau autour d'elle", help: [A_CHA, { if: H("charline_arc=forge"), v: 5 }, { if: H("charline_arc=brule"), v: 10 }] }, win: { fx: { flag: "VF:aide_charline", conf: { charline: 5 } }, to: "VF_aide_charline" }, lose: { to: "VF_aide_charline" } },
      { label: "« J'ai quelque chose à jeter dans cette eau », dit Coliane", who: "coliane", hide: { seen: "VF_aide_coliane" }, test: { dom: "discretion", diff: -20, label: "Viser juste, au cœur de l'eau", help: [A_COL, { if: H("V:galet_coliane"), v: 10 }] }, win: { fx: { flag: ["VF:aide_coliane", "VF:galet_jete"], conf: { coliane: 10 } }, to: "VF_aide_coliane" }, lose: { fx: { flag: "VF:galet_jete" }, to: "VF_aide_coliane" } },
      { label: "Gloup se glisse jusqu'au bord de l'eau, et fait un bruit", who: "gloup", hide: { seen: "VF_aide_gloup" }, test: { dom: "nature", diff: -20, label: "Parler à la vase comme on parle aux siens", help: [A_GLO, { if: H("gloup_arc=lui"), v: 10 }, { if: H("gloup:lave"), v: 5 }] }, win: { fx: { flag: "VF:aide_gloup", conf: { gloup: 10 } }, to: "VF_aide_gloup" }, lose: { to: "VF_aide_gloup" } },
      { label: "Thavary tire l'épée de Thavar : « À l'ancienne. Moi d'abord. »", who: "thavary", hide: { seen: "VF_aide_thavary" }, test: { dom: "combat", diff: -20, label: "Ouvrir la garde de la femme", help: [A_THA, { if: H("thavary_arc=honneur"), v: 10 }] }, win: { fx: { flag: "VF:aide_thavary", conf: { thavary: 5 } }, to: "VF_aide_thavary" }, lose: { fx: { pv: -6 }, to: "VF_aide_thavary" } },
      { label: "Frapper", big: true,
        to: [{ if: H("VF:chute"), to: "VF_combat2" },
          { if: ALL({ count: AIDES, min: 3 }, N(H("VF:vendrel_pris"))), to: "VF_combat_nue" },
          { if: { count: AIDES, min: 4 }, to: "VF_combat_nue" },
          { if: { count: AIDES, min: 1 }, to: "VF_combat_mi" },
          { to: "VF_combat" }] },
    ] },
  VF_voix_qui: { act: "V", title: "Ce qu'elle dit d'elle", place: "VF_l_fond",
    text: [
      "« Qui je suis ? » Elle réfléchit, ou fait semblant, la tête un peu penchée. « Je suis celle qui écoute. Tout le monde a besoin de quelqu'un qui écoute. Le meunier avait besoin d'entendre sa fille. Le conseiller avait besoin d'entendre qu'il avait raison. La chevalière avait besoin d'entendre qu'elle seule comprenait. Je leur ai donné ce qu'ils voulaient entendre. Ce n'est pas un crime. C'est de la bonté, à ma façon. »",
      "« Avant, j'étais une flaque. Une flaque dans le noir, à ses pieds, là où tombaient ses larmes. Il a pleuré longtemps, tu sais. Plus longtemps qu'on ne peut. Et une flaque où l'on pleure quatre cents ans finit par apprendre à parler. » Elle te regarde. « Il ne m'a pas voulue. Mais il m'a faite. Les enfants qu'on n'a pas voulus sont souvent ceux qui ressemblent le plus à leurs parents. »",
      L(H("voix:nommee"), "Tu connais la suite. On te l'a dite à Hautecombe. Tu sens les mots dans ta bouche, prêts. Elle le sait. Elle attend de voir si tu oseras."),
      L(N(H("voix:nommee")), "Tu cherches ce qu'il faudrait lui répondre. Tu as des morceaux, ramassés en route. Ils ne font pas un nom. Elle le voit, et elle a la bonté de ne pas sourire."),
      { with: "aubin", text: "Frère Aubin dit, très bas, sans lever les yeux : « Les noyés de Saint-Ivo s'arrêtaient tous au même mot. *Tenir.* C'est toi qui leur prenais la suite. »" },
    ],
    choices: [{ back: "VF_voix" }] },
  VF_voix_nom: { act: "V", title: "Le nom qu'elle n'a pas", place: "VF_l_fond",
    text: [
      "« Tu n'es pas lui, dis-tu. Tu es ce qu'il serait devenu s'il avait cédé. Tu es sa rancune, debout. Tu n'as pas de nom à toi. Tu prends celui des morts qu'on pleure. »",
      "Rien ne se passe, d'abord. Puis le visage de la femme se met à couler. Pas comme de la cire : comme du sable mouillé qu'on a moulé dans un seau et qu'on démoule trop tôt. Les yeux de ta maîtresse, la bouche de Margot, le menton d'une femme de Saint-Gilles dont tu avais oublié jusqu'à l'existence, tout glisse, tout tombe dans l'eau, plouf, plouf, comme des cailloux. Il ne reste qu'une forme lisse, sans traits, avec deux creux.",
      "« C'est vrai, dit-elle, de sa voix qui n'a pas changé. C'est vrai. Et alors ? » Mais elle a reculé d'un pas, et sa robe coule moins vite, et l'eau autour d'elle est un peu moins noire. Les mots qu'on dit à voix haute pèsent, ici. C'est le seul endroit du monde où ils pèsent autant.",
      { with: "pip", text: "Pip s'est arrêté de trembler. Il brille, posé sur ton épaule, d'une lumière égale et calme, comme une chandelle dans une pièce où il n'y a plus de courant d'air." },
    ],
    choices: [{ back: "VF_voix" }] },
  VF_offre: { act: "V", title: "Le dernier marché", place: "VF_l_fond",
    fx: { flag: "VF:offre_entendue" },
    text: [
      "« Je vais te faire une offre, dit-elle. La dernière. Je t'en ai fait une à chaque fois, tu t'en souviens : sous le moulin, au bord du torrent, ailleurs. Celle-ci est la bonne. Écoute-la jusqu'au bout, après tu feras ce que tu veux. »",
      "« Ne touche à rien. Laisse-le là où il est, laisse la porte comme elle est, laisse les clés où tu voudras. Remonte. Je ne monterai haut comme les puits que je choisirai, et je n'en choisirai pas beaucoup. Un par vallée. Un par an, peut-être. Les gens se noieront un peu, comme ils se sont toujours noyés. Pas plus. Les rois feront la paix, parce que je leur dirai de la faire. Personne ne saura que c'est moi. Tu vivras très longtemps. Ceux que tu aimes aussi. »",
      L(H("maitre=mort"), "« Et je te rendrai sa voix. Celle de ta maîtresse. Tu pourras lui parler, le soir, au bord d'un seau. Elle te répondra. Elle te dira que tu as bien fait, au gué. C'est ce que tu veux entendre, non ? »"),
      L(ANY(H("maitre=perdu"), H("V:maitre_laissee")), "« Ta maîtresse est chez moi. Elle n'a plus mal nulle part. Je peux te la laisser, en paix, ou te la rendre à moitié. Comme tu préfères. »"),
      L(H("passe:profite"), "« Et les terres de Saint-Gilles, que tu as rachetées pour rien quand l'eau a tourné, je les laisserai propres. Personne ne viendra te les reprocher. Personne ne s'en souviendra. »"),
      L(H("passe:fui"), "« Et Saint-Gilles. Tu es parti{e} avant que l'eau tourne. Tu entends encore ceux qui sont restés, la nuit. Je peux les faire taire. »"),
      { with: "coliane", text: "« Hautgrès ne recommencera pas, dit-elle à Coliane, sans la regarder. Plus jamais d'écluse. Je te le promets. » Coliane reste immobile. Elle a les jointures blanches sur ses couteaux." },
      { with: "thavary", text: "« Et toi, ma belle, tu auras tes terres, dit-elle à Thavary. Toutes. Le verger, les bornes, les toits refaits. Ta grand-mère mourra dans un lit de Thavar. » Thavary serre la mâchoire." },
      { with: "charline", text: "« Ton père retrouvera ses mains, dit-elle à Charline. Je le ferai, tu sais. Ça m'est facile. » Charline pâlit, puis rougit, et ne dit rien." },
      { with: "aubin", text: "« Tes frères auront fini leur office, dit-elle à Aubin. Ils dormiront. Et l'enfant de Morteau aura un père qui n'aura pas à se cacher. » Aubin ferme les yeux." },
      "« Je ne te demande qu'une chose, {hero}. Dis oui. Avec ta main dans mon eau. C'est tout. »",
    ],
    choices: [
      { label: "Mettre ta main dans son eau, et dire oui", tag: "Marque +1", stain: true, fx: { mark: 1 }, to: "VF_marche_oui" },
      { label: "« Et toi, qu'est-ce que tu prendras ? »", hide: { seen: "VF_offre_prix" }, to: "VF_offre_prix" },
      { label: "Retirer ta main, et dire non", fx: { conf: { pip: 5, coliane: 5, aubin: 5 } }, back: "VF_voix" },
    ] },

  // ------------------------------------------------------------------ the companions' help before the fight
  VF_aide_pip: { act: "V", title: "La lumière dans l'eau", place: "VF_l_fond", with: "pip",
    text: [
      "Pip descend de ton épaule et se pose sur l'eau, juste devant la femme, comme une feuille. Puis il s'enfonce. Il ne coule pas : il descend, exprès, en brillant de plus en plus fort, et l'eau noire s'éclaire tout entière autour de lui, sur une toise, puis deux, puis dix.",
      { outcome: "win", text: "Sous la surface, il n'y a pas de corps. La robe de la femme ne finit nulle part. Elle descend jusqu'au fond, jusqu'aux pieds de la forme assise, là-bas, et elle y est attachée par un fil de vase, un seul, comme un enfant par le cordon. Tout le monde le voit. Elle le sait. Elle se tourne pour le cacher, et c'est trop tard : la lumière de Pip a laissé dans l'eau une traînée pâle qui ne s'efface pas, et qui montre où frapper." },
      { outcome: "lose", text: "L'eau se referme sur sa lumière comme une main. Tu le vois pâlir, rapetisser, et tu tends le bras dans l'eau tiède jusqu'à l'épaule, et tu l'attrapes, et tu le tires dehors. Il tremble. « Elle est trop épaisse, dit-il. Je n'ai pas vu le fond. Pardon. »" },
      "Il revient se poser sur ton épaule, mouillé, si on peut le dire d'une lumière. Il ne quitte plus la femme des yeux.",
    ],
    choices: [{ back: "VF_voix" }] },
  VF_aide_aubin: { act: "V", title: "La bénédiction des eaux", place: "VF_l_fond", with: "aubin",
    text: [
      "Frère Aubin entre dans l'eau jusqu'aux genoux, sa coule flottant autour de lui. Il fait le signe de la Main au-dessus de la surface, puis il dit la bénédiction des eaux, celle qu'on disait à Saint-Ivo le jour de la fête du lac, quand les barques des pêcheurs passaient sous le porche une à une.",
      { outcome: "win", text: "L'eau autour de ses jambes s'éclaircit. Pas beaucoup : un rond d'eau grise dans l'eau noire, large comme une meule. Mais le rond s'étend, à chaque verset, et quand il touche la robe de la femme, elle recule. Elle recule vraiment, d'un pas, comme on recule devant une flaque d'eau froide. Aubin ouvre les yeux. « Elle s'en souvient, dit-il. Je le savais. L'eau se souvient de tout. »" },
      { outcome: "lose", text: "L'eau ne s'éclaircit pas. Elle remonte le long de sa coule, lentement, en l'assombrissant, et Aubin s'arrête au milieu d'un verset, la bouche ouverte, parce que les mots ne viennent plus. Tu le tires en arrière par la manche. Il te laisse faire. « Je ne sais plus la fin, dit-il. Je la savais il y a un instant. »" },
      L({ item: "VE_chapelet" }, "Il a pris le chapelet du prieur Anthelme dans ta besace sans te le demander. Il le rend en silence. Les grains de buis sont tièdes."),
    ],
    choices: [{ back: "VF_voix" }] },
  VF_aide_charline: { act: "V", title: "La vase qui cuit", place: "VF_l_fond", with: "charline",
    text: [
      "Charline s'avance jusqu'au bord, les manches retroussées. Elle pose les deux mains à plat au-dessus de l'eau, à un pouce de la surface, et elle ferme les yeux. Tu sens la chaleur d'où tu es : une chaleur sèche, de forge, qui sent le charbon et le fer, et qui n'a rien à faire ici.",
      { outcome: "win", text: "L'eau se met à fumer. Puis à bouillir, à gros bouillons lents, autour de la femme, et la vase de sa robe cuit, durcit, se craquelle comme la terre d'un four. Elle ne crie pas. Elle regarde Charline avec une sorte d'étonnement, et les fissures montent jusqu'à sa taille avant qu'elle ne les recouvre d'eau fraîche. Elles restent. Elles restent comme des cicatrices. « Hildre forgeait avec ça, dit Charline, essoufflée. On n'oublie pas d'où on vient. »" },
      { outcome: "lose", text: "L'eau fume, un peu, puis plus du tout. Charline retire ses mains d'un coup, comme d'un poêle : la vapeur lui a brûlé les paumes. Elle serre les poings et ne se plaint pas. « Trop d'eau, dit-elle. Il y a trop d'eau. Il faudrait le feu de toute une forge. »" },
    ],
    choices: [{ back: "VF_voix" }] },
  VF_aide_coliane: { act: "V", title: "Le galet de Hautgrès", place: "VF_l_fond", with: "coliane",
    text: [
      "Coliane sort de sa chemise le galet percé, celui du gué devant chez elle, celui de son frère. Elle le soupèse une seconde. Elle ne dit rien de solennel. Elle le lance, comme on lance une pierre plate sur la rivière, d'un coup de poignet, à ras de l'eau.",
      { outcome: "win", text: "Le galet ricoche trois fois et entre dans la robe de la femme, à hauteur du cœur, avec un petit bruit sec. Il ne ressort pas. La femme baisse les yeux vers sa poitrine, surprise. Autour du trou, la vase blanchit, devient grise, devient claire, et une eau propre, une eau de gué de montagne, se met à couler hors d'elle, un filet, puis un ruisseau. « Voilà, dit Coliane. Maintenant, il y a quelque chose de propre dedans. »" },
      { outcome: "lose", text: "Le galet ricoche deux fois et coule, à un pas de la femme. Coliane le regarde s'enfoncer. Elle ne jure pas. Elle reste longtemps les mains vides. « Ça ne fait rien, dit-elle enfin. Il est dans l'eau d'en bas. C'est ce que j'avais promis. Le reste, c'était pour moi. »" },
    ],
    choices: [{ back: "VF_voix" }] },
  VF_aide_gloup: { act: "V", title: "Ce que Gloup leur dit", place: "VF_l_fond", with: "gloup",
    text: [
      "Gloup roule jusqu'au bord de l'eau et s'y arrête, tout petit, tout rond. Il fait un bruit. Un seul, mouillé, très long, qui monte et qui descend. Tu ne l'as jamais entendu le faire. Autour de la femme, l'eau se ride, et des formes commencent à s'en lever : des petites silhouettes de vase, des enfants sans visage, qui sortent de la robe de leur mère et viennent écouter.",
      { outcome: "win", text: "Gloup refait son bruit. Plus bas, cette fois. Les petites formes hésitent. Puis l'une d'elles, la plus proche, roule jusqu'à lui et se colle contre lui, comme il se colle contre tes bottes. Les autres suivent. Elles ne retournent pas dans la robe. Elles restent là, au bord, en tas, autour de Gloup, à écouter. La femme les rappelle. Elles restent immobiles. Elle n'aura pas d'enfants pour se battre à sa place." },
      { outcome: "lose", text: "Les petites formes l'écoutent, puis elles se détournent, et rentrent dans la robe de leur mère, une à une. La dernière se retourne vers Gloup avant de disparaître. Gloup reste au bord, tout aplati. Il revient vers toi très lentement et se colle à ta botte en silence." },
    ],
    choices: [{ back: "VF_voix" }] },
  VF_aide_thavary: { act: "V", title: "Le salut de Thavar", place: "VF_l_fond", with: "thavary",
    text: [
      "Thavary s'avance dans l'eau jusqu'aux mollets. Elle salue la femme de l'épée, à la manière ancienne, la lame droite devant le visage, puis abaissée. La femme la regarde faire, amusée. Puis Thavary frappe.",
      { outcome: "win", text: "Le premier coup ouvre la robe de l'épaule à la hanche. Le deuxième, à revers, emporte une main, qui tombe dans l'eau et se dissout. La femme se reforme, bien sûr. Mais plus lentement, et pas tout à fait : sa garde reste ouverte du côté gauche, là où la lame de Thavar est passée deux fois. Thavary recule, essuie l'épée sur sa manche. « Elle a un côté faible, dit-elle. Comme tout le monde. »" },
      { outcome: "lose", text: "La lame entre dans la vase et n'en ressort pas. Thavary tire, et la vase tire de l'autre côté, et pendant une seconde elles se tiennent toutes les deux, la femme et elle, comme deux lavandières qui tordent un drap. Puis la vase lâche d'un coup, et Thavary part en arrière et tombe dans l'eau. Elle se relève, trempée, furieuse, l'épée à la main. « Elle triche », dit-elle." },
    ],
    choices: [{ back: "VF_voix" }] },

  // ------------------------------------------------------------------ the fight (three strengths, and a second chance)
  VF_combat: { act: "V", title: "La Voix", place: "VF_l_fond",
    combat: { title: "La Voix", enemies: ["vf_voix", { id: "vf_fille_vase", n: 2 }], terrain: "galerie",
      win: { fx: { ep: ["histoire", 8000] }, to: "VF_voix_vaincue" }, lose: { to: "VF_chute" } },
    text: [
      "Elle soupire. « Comme tu voudras », dit-elle, et elle ouvre les bras. L'eau se soulève avec eux. Deux formes sortent de sa robe et se posent sur la grève à côté d'elle, deux petites filles de vase, sans visage, qui se tiennent par la main. Elle les pousse doucement vers toi, comme on pousse des enfants vers des invités pour qu'ils disent bonjour.",
      "Puis elle marche sur toi, et l'eau marche avec elle.",
    ] },
  VF_combat_mi: { act: "V", title: "La Voix", place: "VF_l_fond",
    combat: { title: "La Voix", enemies: ["vf_voix", { id: "vf_fille_vase", n: 1 }], terrain: "galerie",
      win: { fx: { ep: ["histoire", 8000] }, to: "VF_voix_vaincue" }, lose: { to: "VF_chute" } },
    text: [
      "Elle soupire. « Comme tu voudras. » L'eau se soulève avec ses bras, mais moins haut que tu ne l'aurais cru. Une seule petite forme sort de sa robe, une enfant de vase qui hésite, qui regarde derrière elle, puis qui vient.",
      L(H("VF:aide_pip"), "Dans l'eau, la traînée pâle que Pip a laissée brille encore, et montre le fil qui la tient au fond."),
      L(H("VF:aide_charline"), "Les fissures de la cuisson de Charline courent toujours sur sa robe, jusqu'à la taille."),
      L(H("VF:aide_coliane"), "L'eau claire du galet de Coliane coule toujours de sa poitrine, un filet qui ne tarit pas."),
      L(H("VF:aide_thavary"), "Sa garde gauche reste ouverte, là où Thavary a frappé deux fois."),
      L(H("ardhal:allie"), "En haut de la pente, Ardhal ouvre la gueule. Le feu descend sur l'eau en une seule nappe blanche, et la vapeur monte jusqu'au noir."),
      L(H("V:ardhal_tenu"), "En haut de la pente, Ardhal ouvre la gueule, parce que ta main le lui ordonne. Le feu descend, gris et blanc. Il ne te regarde pas en le faisant."),
      L(H("VF:veyra_contre"), "Veyra frappe la première, en silence, à la manière de la commanderie."),
      "Puis elle marche sur toi, et l'eau marche avec elle.",
    ] },
  VF_combat_nue: { act: "V", title: "La Voix, nommée", place: "VF_l_fond",
    combat: { title: "La Voix", enemies: ["vf_voix_nue"], terrain: "galerie",
      win: { fx: { ep: ["histoire", 8000] }, to: "VF_voix_vaincue" }, lose: { to: "VF_chute" } },
    text: [
      "Elle ouvre les bras, et rien ne sort de sa robe. Aucun enfant de vase, aucune vague. Elle regarde ses mains vides avec une sorte de curiosité. « Tiens », dit-elle.",
      L(H("VF:voix_dite"), "Elle n'a plus de visage. Elle n'a plus personne à être. Il ne reste qu'elle : de l'eau sale qui veut vivre."),
      L(H("VF:aide_gloup"), "Au bord de l'eau, les petites formes de vase sont toujours en tas autour de Gloup. Elles ne bougent pas quand leur mère les appelle."),
      L(H("VF:aide_aubin"), "Le rond d'eau grise qu'a béni Aubin s'est étendu jusqu'à ses pieds. Elle ne s'y appuie pas."),
      L(H("ardhal:allie"), "En haut de la pente, Ardhal ouvre la gueule. Le feu descend sur l'eau en une seule nappe blanche, et la vapeur monte jusqu'au noir."),
      L(H("V:ardhal_tenu"), "En haut de la pente, Ardhal ouvre la gueule, parce que ta main le lui ordonne. Le feu descend, gris et blanc."),
      L(H("VF:veyra_contre"), "Veyra frappe la première, en silence, à la manière de la commanderie."),
      "Elle marche sur toi quand même. Elle a toujours marché.",
    ] },
  VF_chute: { act: "V", title: "Sous l'eau", place: "VF_l_fond",
    fx: { flag: "VF:chute", pv: "max" },
    text: [
      "Tu coules. C'est très doux. L'eau est tiède et épaisse, et elle te tient de partout à la fois, comme un lit de plume. Tu ne sens plus ton arme. Tu ne sens plus ta main gauche, ou bien tu ne sens plus qu'elle. Il n'y a pas de fond. Il y a des voix : ta mère, ta maîtresse, Mère Ternes à la Lanterne, une enfant que tu n'as jamais vue et qui te demande de jouer.",
      "Et puis quelque chose te pousse vers le haut. Une paume. Une paume immense, rugueuse, froide comme une marche d'église, qui te soulève par en dessous sans se presser, et qui te dépose sur le gravier de la grève, et qui redescend. Tu ne l'as pas vue. Tu sais à qui elle est. Là où elle t'a touché{e}, entre les omoplates, la fatigue s'en va, et la douleur, et le froid, comme on les ôte d'un coup avec un manteau mouillé. Il t'a donné ce qui lui restait.",
      { with: "pip", text: "Pip est sur ta poitrine, si brillant que tu fermes les yeux. « Respire, dit-il. Respire. Il t'a remonté{e}. Il n'a presque plus de force et il t'a remonté{e}. »" },
      { without: "pip", text: "Tu restes allongé{e} sur le dos, à cracher de l'eau noire. Personne ne te parle. Tu entends seulement, très loin, un bruit de pierre qui se repose." },
      "La femme est debout au-dessus de toi, sur l'eau. Elle ne t'achève pas. Elle ne l'a jamais voulu. « Une fois, dit-elle. Je ne t'en veux pas. Repose-toi. Réfléchis. Je t'ai dit que j'étais patiente. »",
    ],
    choices: [
      { label: "Te relever, et frapper encore", big: true, back: "VF_voix" },
      { label: "Lui dire oui, enfin", tag: "Marque +1", stain: true, fx: { mark: 1 }, to: "VF_marche_oui" },
    ] },
  VF_combat2: { act: "V", title: "La seconde fois", place: "VF_l_fond",
    combat: { title: "La Voix", enemies: ["vf_voix_blessee"], terrain: "galerie",
      win: { fx: { ep: ["histoire", 8000] }, to: "VF_voix_vaincue" }, lose: { to: "VF_engloutie" } },
    text: [
      "Tu te relèves. Tes jambes tremblent. La femme te regarde faire avec une sorte de tristesse, comme on regarde quelqu'un qui remonte sur un cheval qui l'a déjà jeté par terre.",
      "« Il ne te remontera pas deux fois, dit-elle. Il n'a plus la force. Tu le sais. » Elle a raison, et tu le sais. Elle aussi a perdu quelque chose dans la première passe : sa robe coule moins vite, et ses enfants de vase ne sont pas revenus.",
      { with: "any", text: "Ceux qui sont avec toi se mettent en ligne, à ta droite et à ta gauche, sans qu'on le leur dise. Tous se taisent." },
    ] },
  VF_engloutie: { act: "V", title: "La seconde chute", place: "VF_l_fond",
    fx: { flag: "VF:engloutie" },
    text: [
      "Tu tombes une seconde fois, et cette fois personne ne te pousse vers le haut. Tu sens, très loin sous toi, la grande paume qui essaie. Elle se soulève d'un pouce, et retombe. Elle se soulève encore, et retombe. Et puis elle ne bouge plus.",
      "L'eau entre dans ta bouche, et elle n'a pas mauvais goût. Elle a le goût de ce que tu voulais entendre. La femme se penche sur toi et pose sa main sur ton front, avec une douceur de mère. « Là, dit-elle. Là. C'est fini. Tu as eu beaucoup de courage. Ça ne sert à rien, le courage. Mais c'est joli. »",
      "Au-dessus de toi, la porte grince. Le bruit le plus long que tu aies jamais entendu.",
    ],
    choices: [{ label: "Fermer les yeux", big: true, to: "F_triomphe" }] },
  VF_voix_vaincue: { act: "V", title: "La flaque", place: "VF_l_fond",
    fx: { flag: "VF:voix_vaincue", ep: ["histoire", 6000] },
    text: [
      "Elle ne tombe pas. Elle se défait. La robe d'abord, qui coule dans l'eau et ne remonte plus. Les cheveux d'algue, qui s'étalent sur la surface et s'enfoncent. Les bras. Le visage en dernier, qui te regarde jusqu'au bout, sans haine, avec une sorte d'étonnement. Puis il n'y a plus qu'une tache plus sombre sur l'eau sombre, et la tache s'allonge, et elle file, comme un serpent d'eau, vers le large, vers la forme assise.",
      "Elle n'est pas morte. Tu le sais en la regardant partir. On ne tue pas une blessure avec une épée. Elle retourne d'où elle vient : au pied de la forme, là où tombaient les larmes. Elle s'y enroule, et elle attend.",
      { with: "pip", text: "Pip regarde la tache disparaître. « Elle est rentrée chez lui, dit-il. C'est chez lui, chez elle. C'est triste. »" },
      { with: "aubin", text: "Frère Aubin s'assied dans le gravier, d'un coup, comme si ses jambes avaient décidé pour lui. Il rit, un peu, sans joie. « J'ai eu peur, dit-il. Je n'ai jamais eu si peur. Même cette nuit-là. »" },
      { with: "coliane", text: "Coliane essuie ses couteaux sur sa cuisse, un, puis l'autre, et les range. Elle se tait. Elle regarde la forme, au loin." },
      L(H("VF:chute"), "Ta poitrine te fait mal à chaque souffle. Il y a encore de son eau dedans. Tu la cracheras longtemps, si tu remontes."),
      "Devant toi, l'eau noire est calme, à présent. Elle ne frémit plus qu'au rythme de la respiration de là-bas. Et elle te porte, si tu y poses le pied : épaisse, tiède, comme un sol de boue durcie qui céderait si tu t'arrêtais.",
    ],
    choices: [{ label: "Marcher sur l'eau, jusqu'à lui", big: true, to: "VF_eau" }] },
});

Object.assign(P, {
  // ================================================================== Malvoran
  VF_eau: { act: "V", title: "Sur l'eau noire", place: "VF_l_fond",
    text: [
      "Tu marches sur l'eau. Elle cède un peu sous chaque pas, comme la boue d'un chemin en mars, et elle te rend ton pied quand tu le soulèves, avec un petit bruit de succion. Tu n'oses pas t'arrêter. Tu n'oses pas regarder dessous. Tu regardes devant toi, la forme qui grandit, et qui grandit encore, et qui n'en finit pas de grandir.",
      "Tu comprends, à mi-chemin, que tu ne verras jamais tout de lui à la fois. Il est assis comme on s'assied au bord d'un lit quand on n'a plus la force de se coucher, le dos contre la porte, les genoux remontés. Ses jambes sont de la roche. Son torse est de la roche, presque tout entier, avec des veines de quelque chose qui n'est pas de la roche et qui bat encore. Son bras gauche est enchaîné à la porte. Son bras droit est levé, plié au coude, et sa main est ouverte vers le haut, à la hauteur d'un clocher.",
      L(H("VF:veyra_noyee"), "Au pied de la main, à la surface, flotte une cape. Tu reconnais l'agrafe. Tu passes à côté sans la toucher."),
      L(H("VF:vendrel_pris"), "Quelque part sous tes pieds, très loin, une clé rouge fait un petit point de lumière qui s'éteint."),
      { with: "gloup", text: "Gloup ne marche pas sur l'eau : il nage, à ta hauteur, en faisant des ronds. Il a l'air de connaître le chemin." },
      { with: "thavary", text: "Thavary marche juste derrière toi, dans tes pas exactement, comme on traverse un étang gelé. Elle a remis son épée au fourreau. On ne tire pas l'épée devant ça." },
      { with: "charline", text: "Charline marche les mains ouvertes, paumes vers le bas, au-dessus de l'eau. Tu ne sais pas si c'est pour se tenir en équilibre ou pour sentir la chaleur. Elle compte à voix basse, en ancien. Puis elle s'arrête de compter." },
      "Tu arrives au pied de la porte. Tu es si petit{e}, à côté de lui, que tu pourrais te tenir debout dans le creux d'un de ses ongles. Tout est silencieux. On n'entend que l'eau qui frémit, et, de loin en loin, un craquement de pierre, comme une maison qui se tasse la nuit.",
    ],
    choices: [{ label: "Lever les yeux", big: true, to: "VF_malvoran" }] },
  VF_malvoran: { act: "V", title: "Celui qui tient la porte", place: "VF_l_fond", hub: true, backName: "le pied de la porte",
    fx: { questSeen: "VF_q_dette" },
    text: [
      { first: true, text: "La porte est faite de la même pierre noire que la grève, et elle n'a ni battant ni gonds : c'est un pan de montagne qu'on a taillé droit et sur lequel on a gravé des mains. Lui est assis devant, le dos contre elle, de tout son poids, comme on s'appuie contre une porte quand quelque chose pousse de l'autre côté. Tu sens que quelque chose pousse. Tu le sens dans tes pieds, à travers l'eau : une pression lente, énorme, patiente, qui ne s'arrête jamais." },
      { first: true, text: "Son visage est penché sur sa poitrine. Tu n'en vois que le front, une arête de pierre lisse et grise, et des cheveux qui ne sont plus des cheveux, des coulures de calcaire figées le long de ses tempes. Il n'a pas bougé quand tu es arrivé{e}. Il ne sait peut-être pas que tu es là." },
      { again: true, text: "Il est toujours là, le dos contre la porte, la main levée. L'eau frémit à chaque respiration. Elles sont très lentes. Tu en comptes une pendant que tu cherches quoi faire, et tu as le temps de compter jusqu'à quarante." },
      L(H("VF:eveille"), "Il te regarde, maintenant, de son œil qui reste. Il ne te presse pas. Il n'a jamais pressé personne."),
      L(H("VF:nom_rendu"), "Depuis que tu lui as rendu son nom, il respire un peu plus vite. Ou un peu plus fort. Tu ne sais pas si c'est un bien."),
      L(H("VF:pip_main"), "Pip est venu se poser dans sa paume, tout en haut, et sa lumière éclaire le dessous de la voûte, pour la première fois depuis quatre cents ans."),
    ],
    choices: [
      { label: "Regarder la main ouverte", hide: { seen: "VF_main" }, to: "VF_main" },
      { label: "Regarder la porte et ses chaînes", hide: { seen: "VF_porte" }, to: "VF_porte" },
      { label: "Regarder son visage", hide: { seen: "VF_visage" }, to: "VF_visage" },
      { label: "« Qui es-tu ? »", if: H("VF:eveille"), why: "Il dort. Regarde-le d'abord en face.", hide: { seen: "VF_m_qui" }, to: "VF_m_qui" },
      { label: "« Est-ce que tu as encore froid ? »", hide: { any: [N(H("VF:eveille")), N({ clue: "m_moines" }), { seen: "VF_m_froid" }] }, to: "VF_m_froid" },
      { label: "Lui parler des cinq autres", hide: { any: [N(H("VF:eveille")), { seen: "VF_m_cinq" }] }, to: "VF_m_cinq" },
      { label: "Lui lire la lettre de Thavar", hide: { any: [N(H("VF:eveille")), N({ item: "VE_lettre_thavar" }), { seen: "VF_m_lettre" }] }, to: "VF_m_lettre" },
      { label: "Lui parler de la femme de l'eau", hide: { any: [N(H("VF:eveille")), { seen: "VF_m_voix" }] }, to: "VF_m_voix" },
      { label: "Lui parler de ta maîtresse", hide: { any: [N(H("VF:eveille")), { seen: "VF_m_maitre" }] }, to: "VF_m_maitre" },
      { label: "Pip s'envole vers la main ouverte", hide: { any: [N(H("VF:eveille")), N({ present: "pip" }), { seen: "VF_m_pip" }] }, to: "VF_m_pip" },
      { label: "Lui parler d'Ardhal", hide: { any: [N(H("VF:eveille")), N({ any: [H("dragon=purifie"), H("dragon=tue"), H("dragon=lie")] }), { seen: "VF_m_ardhal" }] }, to: "VF_m_ardhal" },
      { label: "Laisser Veyra le regarder en face", hide: { any: [N(H("VF:eveille")), N({ any: [H("VF:veyra_contre"), H("VF:veyra_tombee"), H("veyra:ralliee")] }), { seen: "VF_m_veyra" }] }, to: "VF_m_veyra" },
      { label: "Frère Aubin s'approche de la pierre", hide: { any: [N(H("VF:eveille")), N({ present: "aubin" }), { seen: "VF_m_aubin" }] }, to: "VF_m_aubin" },
      { label: "Charline pose la main sur la chaîne", hide: { any: [N(H("VF:eveille")), N({ present: "charline" }), { seen: "VF_m_charline" }] }, to: "VF_m_charline" },
      { label: "Thavary s'avance, l'épée de Thavar à plat sur les mains", hide: { any: [N(H("VF:eveille")), N({ present: "thavary" }), { seen: "VF_m_thavary" }] }, to: "VF_m_thavary" },
      { label: "Coliane lève les yeux vers lui", hide: { any: [N(H("VF:eveille")), N({ present: "coliane" }), { seen: "VF_m_coliane" }] }, to: "VF_m_coliane" },
      { label: "Gloup roule jusqu'à son pied de pierre", hide: { any: [N(H("VF:eveille")), N({ present: "gloup" }), { seen: "VF_m_gloup" }] }, to: "VF_m_gloup" },
      { label: "Lui montrer ta main tachée", hide: { any: [N(H("VF:eveille")), N({ mark: { min: 3 } }), { seen: "VF_m_marque" }] }, to: "VF_m_marque" },
      { label: "« Qu'y a-t-il derrière la porte ? »", hide: { any: [N(H("VF:eveille")), { seen: "VF_m_derriere" }] }, to: "VF_m_derriere" },
      { label: "Lui parler de la pierre fendue, sous le château des trolls", hide: { any: [N(H("VF:eveille")), { seen: "VF_m_chateau" }] }, to: "VF_m_chateau" },
      { label: "Poser ta main sur la sienne", hide: { any: [N(H("VF:eveille")), N({ any: [H("V:main_posee"), H("V:main_escalier")] }), { seen: "VF_m_mains" }] }, to: "VF_m_mains" },
      { label: "Lui demander de parler de sa mère", hide: { any: [N({ seen: "VF_m_nom" }), { seen: "VF_m_mere" }] }, to: "VF_m_mere" },
      // what is owed to him (side quest VF_q_dette)
      { label: "Nouer l'écharpe d'Isaure autour de son poignet de pierre", hide: { any: [N(H("VF:eveille")), N({ item: "VE_echarpe_isaure" })] }, fx: { drop: "VE_echarpe_isaure" }, to: "VF_don_echarpe" },
      { label: "Poser le chapelet du prieur dans le creux de sa main", hide: { any: [N(H("VF:eveille")), N({ item: "VE_chapelet" })] }, fx: { drop: "VE_chapelet" }, to: "VF_don_chapelet" },
      { label: "Lui montrer les médailles des pèlerins gelés", hide: { any: [N(H("VF:eveille")), N({ item: "VE_medailles" })] }, fx: { drop: "VE_medailles" }, to: "VF_don_medailles" },
      { label: "Poser à ses pieds le gant gris de l'ossuaire", hide: { any: [N(H("VF:eveille")), N({ item: "VE_gant_ancien" })] }, fx: { drop: "VE_gant_ancien" }, to: "VF_don_gant" },
      { label: "Poser contre sa poitrine le cœur d'Ardhal", hide: { any: [N(H("VF:eveille")), N({ item: "VE_coeur_ardhal" })] }, fx: { drop: "VE_coeur_ardhal", flag: "VF:don_coeur" }, to: "VF_don_coeur" },
      { label: "Lui donner ton manteau, puisqu'il a froid", hide: { any: [N(H("VF:eveille")), H("VF:don_manteau")] }, fx: { flag: "VF:don_manteau" }, to: "VF_don_manteau" },
      { label: "Lui rendre son nom", big: true, if: H("R:revele"), why: "Tu ne sais pas qui il était. On ne rend pas un nom qu'on ne connaît pas.", hide: { any: [N(H("VF:eveille")), H("VF:nom_rendu")] }, fx: { flag: "VF:nom_rendu", meet: "VF_malvoran", ep: ["histoire", 6000], conf: { pip: 10, aubin: 10, charline: 5, coliane: 5, thavary: 5, gloup: 5 } }, to: "VF_m_nom" },
      { label: "« Qu'est-ce que tu veux ? »", hide: { any: [N(H("VF:eveille")), { seen: "VF_m_demande" }] }, to: "VF_m_demande" },
      { label: "Te retourner vers ceux qui sont venus avec toi", hide: { any: [N(H("VF:eveille")), N({ party: { min: 1 } })] }, to: "VF_avant" },
      { label: "Décider de ce que tu fais de lui", big: true, if: H("VF:eveille"), why: "Il dort. Tu ne peux pas décider pour quelqu'un qui ne t'a pas vu{e}.", to: "VF_choix" },
    ] },
  VF_main: { act: "V", title: "La main ouverte", place: "VF_l_fond",
    text: [
      "Tu lèves les yeux le long du bras jusqu'à la main. Il te faut longtemps. Le poignet est épais comme un tronc de chêne de cent ans, la paume large comme l'aire d'une grange, et les doigts sont repliés juste assez pour faire un creux, comme on tient de l'eau qu'on veut boire.",
      "Elle est fendue. Une fissure part du poignet et monte jusqu'à la racine du majeur, assez large pour y passer le bras. Tu as déjà vu cette fissure, sous une crête, au tout début de ta route.",
      "Au creux de la paume, il y a une petite cuvette, lisse, polie, comme une pierre de gué que l'eau a usée. Elle a la taille d'un poing d'enfant. Elle est vide. Quelque chose y est resté posé si longtemps que la pierre en a pris la forme.",
      { with: "pip", text: "Pip se tait. Il regarde la cuvette. Sa lumière a pris, sans qu'il s'en rende compte, exactement sa forme." },
      "Tu remarques autre chose. La main est vide, mais tout autour, sur le poignet, sur l'avant-bras, il n'y a rien non plus : pas une bague, pas une amulette, pas un fil. Ceux qui ont enchaîné un homme lui ont tout pris, jusqu'au nom. Il n'a même pas de quoi se couvrir. Tu penses à ce que tu portes dans ta besace, et à ce que tu pourrais lui laisser.",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_porte: { act: "V", title: "La porte et les chaînes", place: "VF_l_fond",
    text: [
      "Sur la porte, de part et d'autre de lui, des mains sont gravées dans la pierre, hautes comme toi. Tu les comptes. Une, deux, trois, quatre, cinq, à hauteur d'épaule, paumes ouvertes, tournées vers lui. Et une sixième, au milieu, que tu ne vois pas : il est assis devant. Il la couvre de son dos.",
      "La chaîne part de son poignet gauche. Elle est faite d'un métal qui n'est pas du fer, gris et terne, et chaque maillon est gros comme un tonneau. Elle court sur la porte et s'y fixe en trois endroits, par trois serrures. La première est un trou carré, profond, de la taille d'un clou de charpente. La deuxième est une dalle de pierre ronde, nue, polie au centre, sur laquelle on pose quelque chose qui sonne. La troisième est un anneau de pierre, à hauteur d'homme, où l'on passe le doigt.",
      L({ relic: "clou" }, "Dans ta besace, le Clou de Hildre tire vers le trou carré, si fort que la courroie te scie l'épaule."),
      L({ relic: "cloche" }, "La Cloche d'Ivo bourdonne contre ta hanche. Elle connaît la dalle. Elle a envie d'y être posée."),
      L({ relic: "anneau" }, "L'Anneau de Thavar s'est resserré sur ton doigt au point de te faire mal."),
      L({ relics: { max: 0 } }, "Tu n'as aucune des trois clés. Les serrures te regardent, vides, et tu les regardes."),
      "Tu comprends, en regardant les serrures, comment le Sceau tient. Les clés ne ferment pas la porte. Elles ferment la chaîne. La porte, c'est lui qui la tient fermée, de son dos, depuis quatre cents ans. Les clés servent à ce qu'il ne puisse pas se lever.",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_visage: { act: "V", title: "Le visage", place: "VF_l_fond",
    fx: { flag: "VF:eveille", ep: ["histoire", 4000] },
    text: [
      "Tu grimpes. Il n'y a pas d'autre moyen : le long de la chaîne, maillon après maillon, puis sur son genou de pierre, puis dans le pli de son coude, jusqu'à ce que tu sois à la hauteur de son visage penché. Tu t'arrêtes sur son épaule. Elle est tiède, sous ta main, d'une tiédeur de pierre qui a été au soleil, et il n'y a jamais eu de soleil ici.",
      "Son visage est à moitié de pierre. La moitié gauche, celle de la chaîne, est grise et lisse, sans rides, comme une statue d'église qu'on a trop lavée. La moitié droite est encore à lui : une joue creuse, une barbe de quelques jours qui n'a pas poussé depuis quatre cents ans, une bouche fine, et un œil fermé. Il est jeune. C'est ce qui te frappe le plus. Il n'a pas trente ans.",
      "L'œil s'ouvre. Il est brun, très ordinaire, l'œil de n'importe quel garçon de village. Il met longtemps à te trouver. Quand il te trouve, il ne s'étonne pas.",
      "« Il fait jour, là-haut ? » demande-t-il. Sa voix est un bruit de pierre qu'on traîne, très bas, mais c'est une voix, avec des mots. Il ne demande pas qui tu es. Il demande le temps qu'il fait.",
      { with: "pip", text: "Pip, sur ton épaule, s'est mis à briller si fort que l'œil se plisse. L'œil le regarde. Il se tait. Mais l'eau, en bas, cesse de frémir pendant une respiration entière." },
    ],
    choices: [
      { label: "« Oui. C'est le matin. Les premières neiges. »", back: "VF_malvoran" },
      { label: "« Je ne sais pas. Il y a longtemps que je suis descendu{e}. »", back: "VF_malvoran" },
    ] },
  VF_m_qui: { act: "V", title: "Qui il était", place: "VF_l_fond",
    text: [
      "« Qui je suis ? » L'œil se ferme, se rouvre. « Je ne sais plus. Ils me l'ont pris. Non. Je l'avais prêté. On ne me l'a jamais rendu. »",
      "Il réfléchit, longtemps, et l'eau frémit trois fois pendant qu'il réfléchit. « Je soignais. Ça, je m'en souviens. Je soignais des gens. J'avais un bol, en bois, avec une fêlure que j'avais réparée avec du fil de lin. Je ne me souviens pas de mon nom. Je me souviens du bol. C'est bête. »",
      L(H("R:revele"), "Tu sais son nom. Il est dans ta bouche depuis Hautecombe. Tu ne le dis pas encore. Il n'a pas demandé à l'entendre ; il a dit qu'il ne s'en souvenait pas."),
      L(N(H("R:revele")), "Tu as un nom, un seul : celui qu'on dit aux enfants, l'hiver, pour qu'ils restent au lit. Tu ne le lui dis pas. Tu sens que ce n'est pas le sien, ou que ce n'est plus le sien, et que le dire serait le frapper."),
      "« Toi, dit-il. Tu soignes ? » Tu ne sais pas quoi répondre. Il a l'air de trouver ça normal.",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_froid: { act: "V", title: "Le froid", place: "VF_l_fond",
    text: [
      "Tu lui poses la question des moines de Saint-Ivo, celle qu'ils te posaient chacun leur tour, sous l'eau du lac, avec leurs voix de noyés. Est-ce qu'il a encore froid.",
      "L'œil se pose sur toi, longtemps. Puis il se mouille. Une seule larme, qui coule sur la joue qui reste, et qui tombe dans l'eau, en bas, avec un bruit minuscule. Autour de l'endroit où elle tombe, l'eau noircit un peu.",
      "« Oui, dit-il. Tout le temps. On s'y fait. » Puis : « On ne s'y fait pas. » Il se tait. « Qui t'a demandé de me le demander ? »",
      "Tu lui parles des moines. Des frères d'Ivo, noyés dans leur chapelle, qui chantaient le verset sans pouvoir le finir.",
      L(H("V:verset_fini"), "Tu lui dis qu'ils l'ont fini. Qu'on le leur a fini, en bas, dans la nef du lac, et qu'ils sont partis. Il ferme l'œil. « Jusqu'à ce qu'on vienne le relever, dit-il. Ivo l'a écrit pour moi. Il me l'a chanté le dernier jour. Il pleurait. Il chantait faux. »"),
      L(N(H("V:verset_fini")), "Tu lui dis qu'ils chantent encore, sans pouvoir finir. Il hoche la tête, à peine, un bruit de rocher qui glisse. « Ivo chantait faux, dit-il. Il le chantait quand même. »"),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_cinq: { act: "V", title: "Les cinq autres", place: "VF_l_fond",
    text: [
      "Tu lui parles d'eux. Des cinq. Des bornes où l'on a sculpté leurs mains, des maisons qu'ils ont fondées, de l'Ordre qui garde leur souvenir. Tu ne sais pas comment il va le prendre. Il écoute, et à chaque nom l'œil bouge un peu, comme on reconnaît quelqu'un dans une foule.",
      "« Aldar buvait trop, et se disait roi avant de l'être, dit-il. Orine comptait tout, même les étoiles, même les pas. Hildre ne parlait jamais, elle avait des avant-bras comme des cuisses. Thavar pleurait pour rien, c'était le plus doux. Ivo chantait faux. » Il se tait. « Ils avaient peur que je lâche. Ils avaient raison. J'ai voulu lâcher. Mille fois. Plus. »",
      "« Ce n'est pas eux qui m'ont mis là, tu sais. Je m'y suis mis. Eux, ils ont mis la chaîne. Ce n'est pas la même chose. » Il réfléchit. « Ou peut-être que si. Je ne sais plus. J'ai eu le temps d'y penser, pourtant. »",
      L(H("edrin=ecrit"), "Tu lui dis qu'un vieil homme, à Hautecombe, a dicté toute une nuit ce que les cinq ont fait, pour qu'on le lise après lui. L'œil s'agrandit. « Écrit, dit-il. Sur du papier. Avec des mots. » Il a l'air de trouver ça extraordinaire."),
      L(H("edrin=parle"), "Tu lui dis qu'un vieil homme, à Hautecombe, l'a dit, devant trois cents personnes affamées, sur le parvis. Qu'ils étaient six. L'œil reste ouvert très longtemps. « Devant tout le monde », répète-t-il."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_lettre: { act: "V", title: "La lettre de Thavar", place: "VF_l_fond",
    fx: { flag: "VF:lettre_lue" },
    text: [
      "Tu sors la lettre scellée de cire grise, celle qu'a portée le vieil intendant jusque dans la Descente, et tu la lis à voix haute, assis{e} sur son épaule, contre son oreille de pierre. Ta voix tremble au début. Puis elle ne tremble plus.",
      "*À celui qui n'a plus de nom, de Thavar qui en a trop. Je t'écris parce que je n'ai pas le courage de descendre te le dire. Nous avons décidé ce soir. Les trois clés. La chaîne. Le nom effacé. J'ai voté avec les autres. J'ai eu peur comme les autres.*",
      "Il t'écoute jusqu'au bout. *Pardonne-nous. Non. Ne nous pardonne pas. Tiens seulement.* Quand tu as fini, il reste silencieux si longtemps que tu crois qu'il s'est rendormi.",
      "« Il pleurait pour rien, dit-il enfin. Je te l'avais dit. » Et il rit. C'est un bruit terrible, un bruit d'éboulis, et tout le noir autour de vous en tremble, mais c'est un rire. « Il a écrit. Il n'a pas osé descendre, et il a écrit. C'est tout lui. »",
      { with: "thavary", text: "Thavary a écouté, debout dans l'eau, en bas. Elle ne regarde pas le visage de pierre. Elle regarde ses propres mains." },
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_voix: { act: "V", title: "Ce qu'il a pleuré", place: "VF_l_fond",
    text: [
      "Tu lui parles de la femme de l'eau. Tu ne sais pas comment l'appeler devant lui. Tu dis : elle.",
      "L'œil se baisse vers ses pieds, là où l'eau est plus noire qu'ailleurs, là où la tache s'est enroulée tout à l'heure. « Je sais, dit-il. Je l'entends. Elle me parle tout le temps. Elle me dit de lâcher. Elle me dit que ce n'est pas juste, et c'est vrai, ce n'est pas juste. Elle me dit qu'ils m'ont trahi, et c'est vrai. Elle ne ment jamais. C'est ça le pire. »",
      "« Je ne l'ai pas voulue. Je n'ai pas su m'en empêcher. On ne choisit pas ce qu'on pleure, ni ce qui pousse dedans. » Il se tait. « Elle est ce que je serais, si je lâchais. Je la regarde, des fois. Pour me rappeler pourquoi je tiens. »",
      L(H("VF:voix_vaincue"), "« Tu l'as fait tomber, ajoute-t-il. Je l'ai senti. Elle est revenue se coucher à mes pieds comme une chienne battue. Elle ne t'en voudra pas. Elle n'en veut à personne. Elle veut, c'est tout. »"),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_maitre: { act: "V", title: "Ta maîtresse", place: "VF_l_fond",
    text: [
      "Tu lui parles de ta maîtresse. La raison t'échappe. Peut-être parce que c'est par elle que tout a commencé : une lettre pliée en quatre, une crête, un château.",
      L(H("maitre:hauberte"), "Hauberte de Sarn, chevalière sans cheval, qui t'a appris à tenir une lame et à ne pas t'en servir trop vite."),
      L(H("maitre:ortie"), "Ortie, l'herboriste des marais, qui t'a appris à regarder l'eau avant de la boire."),
      L(H("maitre:maelle"), "Maëlle Vautrin, qui t'a appris à lire le pays comme un livre, et qui a trouvé la page arrachée."),
      L(H("maitre=sauve"), "Il écoute. « Elle est vivante ? » Tu dis oui. Qu'elle ne sait plus écrire, ni très bien parler, mais qu'elle est vivante, et qu'elle a cessé d'entendre l'eau. « Alors elle a eu de la chance, dit-il. Elle a eu quelqu'un qui est venu la chercher. »"),
      L(H("maitre=mort"), "Il écoute. Tu lui dis le gué, l'eau jusqu'à la poitrine, le menton levé. Tu ne l'as dit à personne. Il se tait longtemps. Puis : « Elle t'a demandé de le faire. Elle a eu de la chance aussi. Moi, personne n'a voulu. »"),
      L(H("maitre=perdu"), "Il écoute. « Je l'ai entendue, dit-il. Elle est passée par ici. Par l'eau. Elle parlait de toi. Elle disait : *tiens ta garde haute*. Elle le disait à quelqu'un qui n'était pas là. »"),
      "« Elle t'a envoyé{e} ici, dit-il. Ou elle t'a envoyé{e} ailleurs, et tu es venu{e} ici quand même. C'est pareil. Les gens qui nous envoient quelque part ne savent jamais où on va. »",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_pip: { act: "V", title: "La lumière revenue", place: "VF_l_fond", with: "pip",
    fx: { flag: "VF:pip_main", conf: { pip: 15 }, ep: ["histoire", 5000] },
    text: [
      "Pip quitte ton épaule. Il se tait. Il monte, lentement, le long du bras de pierre, comme une étincelle qui monte d'un feu, et il s'arrête au-dessus de la main ouverte. Il hésite. Puis il descend, et il se pose dans la petite cuvette polie, au creux de la paume. Il y tient exactement.",
      "La main ne se referme pas. Elle tremble. Tout le bras tremble, de l'épaule au bout des doigts, et des écailles de pierre s'en détachent et tombent dans l'eau, plouf, plouf. Puis l'œil se lève, très lentement, vers la paume, et il regarde Pip. Il le regarde comme on regarde quelqu'un qui revient de la guerre, et qu'on avait fini par croire mort.",
      "« Tu es revenu », dit-il.",
      "« Je suis allé voir, dit Pip. Il y a des gens, là-haut. Il y a des moulins, et des trolls, et une bergère qui a un chien. Il y a quelqu'un qui m'a pris avec lui. » Il se tourne vers toi. « C'est lui. C'est ma main. Je me souviens, maintenant. Il me chantait le verset. Il me tenait au chaud. Et un jour, il a ouvert les doigts. »",
      "« Il fallait que quelqu'un sache, dit la pierre. Je ne pouvais pas monter. Toi, tu pouvais. » L'œil revient sur toi. « Il a trouvé quelqu'un. C'est tout ce que je voulais. »",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_ardhal: { act: "V", title: "Le vieux dragon", place: "VF_l_fond",
    text: [
      "Tu lui parles d'Ardhal, le dragon blanc du glacier, qui a vu les six descendre et cinq remonter.",
      L(ALL(H("dragon=purifie"), H("ardhal:allie")), "Avant que tu aies fini, une ombre blanche descend la pente, au loin, et se pose sur la grève. Ardhal ne vient pas plus près : l'eau le brûlerait. Il allonge le cou et il regarde, et l'œil de pierre le regarde. « Te voilà vieux, dit la pierre. — Te voilà pierre, dit le dragon. » Ils se taisent tous les deux. C'est une conversation de quatre cents ans, et elle s'arrête là. Elle n'a pas besoin d'aller plus loin."),
      L(ALL(H("dragon=purifie"), N(H("ardhal:allie"))), "« Il est blanc ? demande la pierre. Encore blanc ? » Tu dis oui. Qu'il était veiné de noir, et que vous l'avez lavé. « Il avait peur du noir, dit-il. Les dragons ont peur du noir, tu ne le savais pas. C'est pour ça qu'il est resté en haut, dans la glace : c'est clair, la glace. »"),
      L(H("dragon=tue"), "Tu lui dis que tu l'as tué. Que le noir le prenait, et qu'il te l'avait demandé, faute d'autre moyen. L'œil se ferme. « Il m'a gardé, dit-il. Quatre cents ans. Il ne m'a jamais quitté. Il m'appelait, des fois, par la glace. » Il ne te le reproche pas. Il ne dit plus rien."),
      L(H("dragon=lie"), "Tu lui dis que tu l'as lié, de ta main. L'œil descend vers ta main, la gauche, la tachée. Il regarde longtemps. « Tu le tiens comme ils m'ont tenu, dit-il. Avec une chaîne qu'on ne voit pas. Pour qu'il ne lâche pas. » Il ne le dit pas méchamment. Il le dit comme on constate qu'il pleut."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_veyra: { act: "V", title: "Veyra devant lui", place: "VF_l_fond",
    fx: { flag: "VF:veyra_face" },
    text: [
      L(H("veyra:ralliee"), "Des pas, sur l'eau, derrière toi. Veyra est descendue du fort. Elle a laissé ses épées tenir l'escalier et elle est venue seule, la main sur une blessure, comme elle te l'avait dit : pour le regarder en face."),
      L(N(H("veyra:ralliee")), "Veyra traverse l'eau derrière toi, d'un pas qui n'est pas sûr. Elle se tient le flanc. Elle ne dit rien jusqu'au pied de la porte."),
      "Elle lève les yeux vers le visage de pierre. Elle reste comme ça longtemps, la tête renversée, en silence. Puis elle détache son épée grise, celle de l'Ordre, qu'elle avait gardée tout ce temps sous les gants noirs. Elle la pose en travers du genou de pierre.",
      "« Je m'appelle Veyra de Hautcastel, dit-elle. J'ai porté le gant gris vingt ans pour garder la porte que vous tenez. Je l'ai jeté le jour où j'ai su. J'ai cru que je venais vous délivrer. Je venais vous vendre. » Elle se tait. « Je ne vous demande rien. Je voulais que vous sachiez qu'il y en a eu au moins une qui est venue vous regarder. »",
      "L'œil la regarde. « Il y en a eu deux, dit-il, et l'œil se tourne vers toi. Ça fait beaucoup, en quatre cents ans. »",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_aubin: { act: "V", title: "Le dernier frère d'Ivo", place: "VF_l_fond", with: "aubin",
    text: [
      "Frère Aubin s'approche de la pierre et pose la main à plat sur la chaîne, là où elle sort du poignet. Il ne dit pas de prière. Il dit son nom : « Aubin. De Saint-Ivo. Le dernier. Les autres sont morts. » Il hésite. « J'étais à la taverne, la nuit où ils sont morts. »",
      "« Ivo aussi allait à la taverne, dit la pierre. Plus souvent qu'à son tour. Il en revenait en chantant faux. » Aubin lève les yeux, saisi. Puis il rit, d'un rire qui se casse au milieu.",
      L(H("aubin_arc=offrande"), "Il ne retire pas sa main de la chaîne. Tu vois ses doigts se refermer sur le maillon, comme on prend la main de quelqu'un pour lui dire qu'on ne la lâchera pas. Il te regarde, par-dessus son épaule. Tu sais ce qu'il est en train de mesurer."),
      L(H("aubin_arc=quitte"), "Il retire sa main. « Je ne suis plus prêtre, dit-il. Je l'ai dit là-haut, dans la tour. Mais je voulais qu'un frère d'Ivo soit venu, une fois. Même un frère qui n'en est plus un. »"),
      L(H("aubin_arc=pretre"), "Il fait le signe de la Main sur la chaîne, lentement, à l'ancienne, comme on bénit une maison. « Je suis prêtre, dit-il. Je l'ai décidé là-haut. C'est la première fois que je le suis devant quelqu'un qui en a vraiment besoin. »"),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_charline: { act: "V", title: "La fille de la forge", place: "VF_l_fond", with: "charline",
    text: [
      "Charline pose la main sur la chaîne et la retire aussitôt, comme d'un fer chaud, alors qu'elle est froide. Puis elle la repose, et la laisse. « C'est Hildre qui l'a forgée, dit-elle. Je reconnais le coup. Mon père frappe pareil. Frappait. » Elle a la voix qui s'étrangle sur le dernier mot.",
      "« Hildre pleurait en la forgeant, dit la pierre. Elle ne pleurait jamais. Elle a pleuré tout le temps qu'il a fallu. Les larmes sont dans le métal : c'est pour ça qu'il ne rouille pas. »",
      L(H("charline_arc=pardon"), "Charline se tait. Elle passe le pouce sur le maillon, longtemps, comme on passe le pouce sur la cicatrice de quelqu'un qu'on aime. « J'ai pardonné à mon père, dit-elle enfin. Là-haut, dans la tour. Ou il m'a pardonné. Je ne sais plus dans quel sens c'était. »"),
      L(H("charline_arc=forge"), "Charline relève la tête. « Je reprendrai la Forge-Mère, dit-elle, comme si elle répondait à une question. Et je ne forgerai jamais de chaîne. Jamais. »"),
      L(H("charline_arc=brule"), "Charline serre le poing sur le maillon, et une petite fumée monte entre ses doigts. « Le Cercle savait, dit-elle. Ils avaient la page. Ils l'ont arrachée. J'ai brûlé le reste. » La pierre se tait. La fumée se dissipe."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_thavary: { act: "V", title: "L'héritière de Thavar", place: "VF_l_fond", with: "thavary",
    text: [
      "Thavary s'avance dans l'eau jusqu'au genou de pierre, l'épée de Thavar posée à plat sur ses deux mains, comme on présente une épée à un roi. Elle met un genou à terre, dans l'eau. Elle ne lève pas les yeux.",
      "« Thavary de Thavar, dit-elle. La dernière. Mon ancêtre vous a enchaîné. Il a voté avec les autres. Il a écrit qu'il en avait honte, et il a laissé la honte à ses enfants. Elle est arrivée jusqu'à moi avec l'anneau. » Elle se tait. « Je n'ai rien d'autre à vous rendre que ça. »",
      "L'œil la regarde longtemps. « Relève-toi, dit-il enfin. Thavar s'agenouillait tout le temps. Ça m'agaçait. »",
      L(H("thavary_arc=liberee"), "Thavary se relève. Elle remet l'épée au fourreau. Et elle sourit, pour la première fois depuis que tu la connais, un vrai sourire, un peu de travers. « Je savais que je n'aurais pas dû m'agenouiller », dit-elle."),
      L(H("thavary_arc=honneur"), "Thavary se relève, droite comme une lance. « Une dette est une dette, dit-elle. Thavar ne l'a pas payée. Moi, je peux. » La pierre se tait. Elle ne dit pas non."),
      L(H("thavary_arc=vengeance"), "Thavary se relève. Elle regarde la chaîne, les serrures, les mains gravées. « Ils ont bâti des maisons sur vous, dit-elle. Je les ferai tomber. Toutes. » « Ça ne me relèvera pas », dit la pierre, doucement."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_coliane: { act: "V", title: "Ce que demande Coliane", place: "VF_l_fond", with: "coliane",
    text: [
      "Coliane lève les yeux vers lui, les mains vides, et elle demande, d'une voix sèche, ce qu'elle a envie de demander depuis la pente : « Est-ce que vous auriez pu le retenir ? L'écluse. Hautgrès. Si vous aviez tenu plus fort. »",
      "L'œil ne se détourne pas. « Oui, dit-il. Peut-être. Je faiblis depuis cent ans. Chaque fois que je faiblis, quelque chose monte, quelque part. Je ne vois pas où. Je sens seulement que ça monte. » Il se tait. « Je ne te demande pas pardon. Je n'ai pas le droit. Je te dis que c'est vrai. »",
      "Coliane le regarde longtemps. Puis elle hoche la tête, une fois, comme on scelle un marché honnête. « Merci, dit-elle. Personne ne m'avait encore dit la vérité, sur Hautgrès. Personne. »",
      L(H("coliane_arc=justice"), "« Josse a parlé devant les gens de chez nous, ajoute-t-elle. Devant Guiraud. Tout. Ça n'a rendu personne. Mais c'était dit. »"),
      L(H("coliane_arc=vengeance"), "Elle baisse les yeux sur ses mains. « J'ai tué Josse, dit-elle, à la pierre, pas à toi. Je ne sais pas pourquoi je vous le dis. » « Parce que je suis une porte, dit la pierre. On dit des choses aux portes. »"),
      L(H("coliane_arc=pitie"), "« J'ai laissé partir celui qui a ouvert l'écluse, ajoute-t-elle. Je ne sais toujours pas si j'ai eu raison. » « Moi non plus, dit la pierre. On ne sait jamais. On choisit quand même. »"),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_gloup: { act: "V", title: "Né de son eau", place: "VF_l_fond", with: "gloup",
    text: [
      "Gloup roule jusqu'au pied de pierre et s'y colle, comme il se colle à tes bottes. Il fait un bruit, un petit, interrogatif. L'œil descend jusqu'à lui, très lentement, tout le long du corps.",
      "« Tu es né de moi ? » demande la pierre. Gloup fait un autre bruit. « Non, dit la pierre, après un moment. De ce que j'ai pleuré. Ce n'est pas pareil. Elle aussi, elle est née de ce que j'ai pleuré. Ce n'est pas pareil non plus. Toi, tu es parti. »",
      L(H("gloup_arc=propre"), "Gloup brille un peu, de cette clarté laiteuse qu'il a depuis la tour, depuis qu'on l'a lavé tout entier. « Tu es propre, dit la pierre, étonnée. Je ne savais pas que ça pouvait se laver. »"),
      L(H("gloup_arc=lui"), "Gloup est toujours de la couleur de l'eau d'ici, ni tout à fait propre ni tout à fait sale. « Tu es resté ce que tu es, dit la pierre. C'est bien. C'est le plus difficile. »"),
      L(N(ANY(H("gloup_arc=propre"), H("gloup_arc=lui"))), "Gloup se colle plus fort à la pierre. La pierre le laisse faire. Il n'y a rien d'autre à dire."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_marque: { act: "V", title: "La main tachée", place: "VF_l_fond",
    text: [
      "Tu lèves la main gauche vers son œil. La tache. Elle a gagné le poignet, ou le coude, ou plus haut, selon les jours. Elle bat, ici, plus fort qu'ailleurs, et elle tire vers lui, ou vers la porte derrière lui, tu ne sais pas.",
      "L'œil la regarde. Pour la première fois, il a peur. Ce n'est pas de toi qu'il a peur : c'est de ce que tu tiens.",
      "« Elle t'a donné ce qu'elle m'offre tous les jours, dit-il. La force. La facilité. De quoi tenir n'importe quoi, de quoi tout ouvrir. » Il se tait. « J'ai dit non quatre cents ans. Toi, tu as dit oui quelques fois. Ça ne fait pas de toi quelqu'un de mauvais. Ça fait de toi quelqu'un qui pourrait s'asseoir à ma place, et ne pas tenir la porte. L'ouvrir. »",
      { with: "pip", text: "Pip se cache derrière ton col. Il se tait. Il tremble." },
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_don_echarpe: don("L'écharpe d'Isaure", "Tu noues l'écharpe d'Isaure autour du poignet de pierre, là où la chaîne a usé la roche. Elle fait à peine le tour d'un doigt, sur lui. Laine de ses brebis, poils de son chien. L'œil la regarde longtemps. « C'est chaud », dit-il, étonné. Ce n'est pas possible. Il le dit quand même.", "Il replie les doigts de pierre, très lentement, d'un cheveu, pour que l'écharpe ne glisse pas. Tu ne l'avais jamais vu bouger les doigts."),
  VF_don_chapelet: don("Le chapelet du prieur", "Tu poses le chapelet du prieur Anthelme dans le creux de sa paume, à côté de la cuvette. Les grains de buis noir tiennent dans un pli de la pierre. « Les frères d'Ivo, dit-il. Ils priaient avec ça ? Pour moi ? » Tu ne sais pas pour qui ils priaient. Tu dis oui.", "Il ne referme pas la main dessus. Il le regarde, simplement, longtemps, comme on regarde un visage qu'on a connu jeune."),
  VF_don_medailles: don("Les médailles", "Tu lui montres les sept médailles d'étain, l'une après l'autre, et tu lis les noms et les villages au dos. Sorbe. Ferrance. Morteau. Des pèlerins qui montaient vers lui, et que la glace a pris en chemin. Il écoute chaque nom. « Ils venaient me voir ? » Tu dis oui. « Personne ne venait me voir », dit-il. Tu poses les médailles en rang sur son genou.", "Il te demande de les lui relire. Tu les relis. Il les répète après toi, un nom après l'autre, mal, avec sa voix de pierre. Il les sait, à la fin."),
  VF_don_gant: don("Le gant gris", "Tu poses à ses pieds le gant gris de l'ossuaire, durci comme du bois, celui d'un frère de l'Ordre mort dans la Descente il y a deux cents ans. L'œil le regarde. « Ils descendaient, dit-il. Je les entendais. Ils s'arrêtaient au fort, ils n'allaient jamais plus loin. Celui-là est le premier qui arrive jusqu'ici. »", "« Je ne savais pas qu'il en était resté en chemin, dit-il. Je croyais qu'ils remontaient tous. »"),
  VF_don_coeur: don("Le cœur du dragon", "Tu poses le cœur d'Ardhal contre sa poitrine de pierre. La pierre bleue bat, une fois, puis une autre, et quelque chose répond, sous la roche, très faiblement. « Ardhal, dit-il. Il est venu, finalement. » Il n'en demande pas plus.", "Pendant un moment, ils battent ensemble, le cœur du dragon et ce qui bat encore sous la roche. Puis le cœur d'Ardhal se tait, et l'autre continue, un peu plus fort."),
  VF_don_manteau: don("Un manteau", "Tu ôtes ton manteau et tu le poses sur ses genoux. C'est ridicule. Il est grand comme un clocher, et ton manteau couvre à peine une de ses rotules. Il le regarde, et il ne trouve pas ça ridicule. « Merci », dit-il. C'est peut-être le premier merci qu'il dit depuis quatre cents ans.", "Tu as froid, maintenant. C'est bien fait. Tu as froid comme lui, un peu, et tu restes là, dans le froid, à côté de lui, et ça ne fait pas si mal."),
  VF_voix_veut: { act: "V", title: "Ce qu'elle veut", place: "VF_l_fond",
    text: [
      "« Ce que je veux ? » Elle rit, doucement, comme si tu lui avais demandé son âge. « Naître. Tout entière. Pas seulement une voix dans un puits, pas seulement une flaque qui parle. Une femme debout, avec des pieds, qui marche dans la Sorbe et qu'on voit. Pour ça, il faut que la porte s'ouvre. Il faut qu'il lâche. »",
      "« Ce qu'il y a derrière la porte, c'est moi. Tout ce qu'il a pleuré depuis quatre cents ans, et qu'il retient de son dos. Tu crois qu'il retient un monstre. Il retient son chagrin. Il a peur de ce qu'il ferait au monde. Moi, je n'ai pas peur. »",
      "Elle penche la tête. « Je ne suis pas méchante, tu sais. L'eau n'est pas méchante. Elle va où on la laisse aller. Ce sont les gens qui construisent des moulins, des écluses, des portes. »",
      { with: "coliane", text: "« Les écluses, dit Coliane, c'est quelqu'un qui les ouvre. » La femme ne la regarde pas. Elle sourit seulement un peu plus." },
    ],
    choices: [{ back: "VF_voix" }] },
  VF_voix_pourquoi: { act: "V", title: "Pourquoi toi", place: "VF_l_fond",
    text: [
      "« Pourquoi toi ? » Elle a l'air presque touchée par la question. « Parce que tu es descendu{e} sous le château, et que tu as regardé la pierre fendue. Les trolls ne la regardaient plus. Ta maîtresse avait peur de la regarder. Toi, tu l'as regardée. On remarque les gens qui regardent. »",
      L(H("marque:eclat"), "« Et tu as pris l'éclat. Je te l'avais tendu. Tu l'as pris. Depuis, je suis dans ta main, un peu. Je t'ai aidé{e}, souvent. Tu ne m'as jamais remerciée. Ce n'est pas grave. »"),
      L(H("eclat:refuse"), "« Et tu n'as pas pris l'éclat. Tu es la seule personne en quatre cents ans qui ait laissé quelque chose dans cette pierre au lieu de l'en sortir. Je me suis demandé ce que tu étais. Je me le demande encore. »"),
      "« Et puis il y a la lumière. » Elle regarde ton épaule, ou l'endroit où Pip devrait être. « Il l'a lâchée pour toi. Pour que quelqu'un sache. Tu es ce quelqu'un. Lui et moi, on t'attendait. Pas pour la même chose. »",
    ],
    choices: [{ back: "VF_voix" }] },
  VF_offre_prix: { act: "V", title: "Le prix", place: "VF_l_fond",
    text: [
      "« Ce que je prendrai ? » Elle réfléchit, honnêtement. « Un puits par vallée. Un par an. Peut-être un peu plus, les années sèches. Les gens qui s'y pencheront entendront ceux qu'ils ont perdus. Certains se noieront. Pas tous. Ceux qui le voudront le plus. »",
      "« Et lui. » Elle montre la forme assise, au loin, du menton. « Il continuera à tenir. Un peu moins chaque année. Il ne lâchera pas de ton vivant : je te le promets. Après, on verra. Tu ne seras plus là pour t'en soucier. C'est l'avantage. »",
      "« Et ta main. Elle restera dans mon eau. Juste un peu. Tu ne t'en apercevras presque pas. »",
      { with: "aubin", text: "Frère Aubin dit, très bas : « C'est ce qu'on a dit à Josse, pour l'écluse. Presque rien. » La femme se tait." },
    ],
    choices: [{ back: "VF_offre" }] },
  VF_m_derriere: { act: "V", title: "Derrière la porte", place: "VF_l_fond",
    text: [
      "Tu lui demandes ce qu'il y a derrière. Ce qui pousse. Ce qu'il retient de son dos depuis quatre cents ans.",
      "Il met longtemps à répondre. « Au début, dit-il, c'était la Brèche. Une fente dans la montagne, de l'eau noire qui montait, la mine d'Aldar trop profonde, la terre qui avait tremblé. C'était une blessure de la terre. Je l'ai tenue fermée, comme on tient une plaie fermée avec la main, en attendant qu'elle se referme. »",
      "« Elle ne s'est pas refermée. On ne referme pas une plaie en appuyant dessus quatre cents ans. Elle s'est remplie. De moi. De ce que je pleurais. » L'œil se ferme. « Aujourd'hui, je ne sais plus ce qu'il y a derrière. Je crois que c'est moi. Je crois que je me tiens moi-même fermé. »",
      L(H("R:revele"), "Tu penses à ce qu'a dit Edrin, à Hautecombe : que la souillure monte parce qu'il faiblit. Tu le regardes, et tu te demandes s'il faiblit, ou s'il pleure davantage."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_chateau: { act: "V", title: "La pierre fendue", place: "VF_l_fond",
    text: [
      "Tu lui parles du château des trolls, sur la crête, au-dessus des Trois-Bornes. Des caves murées de tonneaux, des mains sur les murs tournées vers le bas, de la salle qui chantait. Et de la main de pierre, paume ouverte, fendue.",
      "« C'est la mienne, dit-il. Celle d'en haut. Quand j'ai lâché la lumière, je l'ai poussée aussi loin que j'ai pu, par la fente, jusqu'à ce que ma main touche le jour. Elle ne l'a pas touché. Elle s'est arrêtée sous un château. » Il a presque l'air de s'en excuser. « Je n'avais pas prévu les trolls. »",
      L(H("grauk:vivant"), "Tu lui dis que le roi des trolls avait peur de ce qui chantait sous son château. « Il avait raison, dit-il. Ce n'était pas moi qui chantais. C'était elle, dans la flaque, au pied de ma main. Moi, je ne chante plus depuis longtemps. »"),
      L(H("grauk:mort"), "Tu lui dis que le roi des trolls est mort, et pas de ta faute seulement. Il se tait. Il ne connaissait pas Grauk. Il a l'air triste quand même, comme on est triste pour un voisin qu'on n'a jamais vu."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_mains: { act: "V", title: "Main contre main", place: "VF_l_fond",
    text: [
      "Tu grimpes jusqu'à sa paume ouverte, et tu poses ta main à plat contre la pierre, au bord de la cuvette, comme tu l'as posée là-haut, sur la porte de bronze, et sur les marches de l'escalier des mains, parmi des milliers d'autres.",
      "La pierre est tiède. Sous ta paume, tu sens battre quelque chose, très lentement, une fois toutes les quarante de tes respirations. Il ne bouge pas la main. Mais tu sens qu'il sait que tu es là, comme on sait qu'un enfant s'est endormi contre vous sans le regarder.",
      "« Ils mettaient tous leur main, dit-il. Sur les marches, en descendant. Je les sentais. Des milliers. Pour me retenir, je crois. Ou pour me dire qu'ils étaient là. » Il se tait. « Personne ne l'avait encore mise dans la mienne. »",
      L({ mark: { min: 3 } }, "La tache de ta paume, contre la pierre, se met à brûler. Tu retires la main. Il se tait. Il a senti, lui aussi."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_mere: { act: "V", title: "La lavandière de Sorbe", place: "VF_l_fond",
    text: [
      "Tu lui demandes de te parler de sa mère, puisqu'il s'en souvient. Il ne se fait pas prier. Il en parle comme si elle était dans la pièce d'à côté.",
      "« Elle lavait le linge des autres, à Sorbe, au bord de la rivière, sur une pierre plate. Elle chantait en battant le linge. Pas bien. Elle avait les mains rouges tout l'hiver, et elle les mettait sous mes aisselles pour les réchauffer, et je criais. » Il rit. « C'est elle qui m'a appris à regarder l'eau avant de la boire. On voit tout, dans l'eau, disait-elle. Il faut juste la regarder assez longtemps. »",
      "« Je suis parti à quinze ans avec un guérisseur qui passait. Je ne suis jamais rentré. Je lui envoyais des nouvelles par les colporteurs. Je ne sais pas si elle les a reçues. » Il se tait. « Je ne sais pas si elle a su ce qu'on a dit de moi, après. J'espère que non. J'espère qu'elle est morte avant. »",
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_nom: { act: "V", title: "Le nom", place: "VF_l_fond",
    text: [
      "Tu te penches vers l'oreille de pierre. Tu n'as pas besoin de crier. Tu le dis comme on dit un nom à quelqu'un qu'on réveille.",
      "« Malvoran. Tu t'appelais Malvoran. Malvoran le Guérisseur. Tu allais de village en village avec une trousse de cuir et un bol. Tu soignais les fièvres. Tu recousais les bûcherons. Tu étais le sixième, et le plus jeune. Tu t'es proposé. »",
      "Il reste immobile. Puis l'œil se remplit, d'un coup, et déborde, et la larme qui tombe dans l'eau, en bas, ne la noircit pas. Elle l'éclaircit. Un petit rond d'eau claire, au milieu de tout ce noir, qui ne se referme pas.",
      "« Malvoran, répète-t-il. Oui. Oui. C'est ça. » Il le dit encore, plusieurs fois, en essayant les syllabes comme on essaie des bottes qu'on n'a pas mises depuis longtemps. « On m'appelait Malvoran. Ma mère disait Malvo. Elle était lavandière, à Sorbe. » Il rit, ce bruit d'éboulis. « Je me souviens de ma mère. »",
      { with: "pip", text: "Dans sa paume, ou sur ton épaule, Pip brille si fort que tout le fond de la Brèche s'éclaire, pour la première fois, jusqu'aux voûtes : de la roche noire, haute, avec des milliers de mains gravées, toutes tournées vers le bas." },
      { with: "aubin", text: "Frère Aubin s'est mis à genoux dans l'eau. Il pleure sans bruit. Il dit le nom, lui aussi, à voix basse, comme on l'ajoute à une litanie." },
      L(H("VF:veyra_face"), "Veyra a fermé les yeux. Elle répète le nom sans bruit, les lèvres seules, pour l'apprendre."),
    ],
    choices: [{ back: "VF_malvoran" }] },
  VF_m_demande: { act: "V", title: "Ce qu'il veut", place: "VF_l_fond",
    text: [
      "Tu lui demandes ce qu'il veut. Personne ne le lui a demandé, tu le comprends en le disant. Les cinq lui ont demandé de tenir. La femme de l'eau lui demande de lâcher. Personne ne lui a demandé ce qu'il voulait, lui.",
      "L'œil reste fixé sur toi très longtemps. « Que quelqu'un vienne me relever, dit-il enfin. C'est ce que chantait Ivo. Je ne sais pas ce que ça veut dire. Que quelqu'un prenne ma place, ou que quelqu'un m'aide à me lever, ou que quelqu'un me dise que je peux m'arrêter. Je n'ai jamais su. J'ai eu le temps d'y penser. Je ne sais toujours pas. »",
      "« Je suis fatigué, dit-il. C'est tout ce que je sais. Je suis tellement fatigué. »",
      L({ mark: { min: 4 } }, "Ta main gauche brûle. Elle sait ce qu'elle veut, elle. Elle veut s'asseoir à sa place, et faire autre chose de la porte."),
    ],
    choices: [{ back: "VF_malvoran" }] },
});

Object.assign(P, {
  // ================================================================== before the choice: the last words of those who came
  VF_avant: { act: "V", title: "Ceux qui sont venus", place: "VF_l_fond",
    text: [
      "Tu redescends de son épaule. Ceux qui sont venus avec toi t'attendent au pied de la porte, dans l'eau jusqu'aux chevilles, serrés les uns contre les autres sans s'en rendre compte. Ils te regardent. Ils savent que tu vas décider, et que ce que tu décideras les décidera aussi.",
      { with: "any", text: "Personne ne dit : fais ceci. Personne ne dit : ne fais pas cela. Mais chacun a quelque chose dans la bouche, et attend que tu le lui demandes." },
    ],
    choices: [
      { label: "Pip", hide: { any: [N({ present: "pip" }), { seen: "VF_adieu_pip" }] }, to: "VF_adieu_pip" },
      { label: "Coliane", hide: { any: [N({ present: "coliane" }), { seen: "VF_adieu_coliane" }] }, to: "VF_adieu_coliane" },
      { label: "Frère Aubin", hide: { any: [N({ present: "aubin" }), { seen: "VF_adieu_aubin" }] }, to: "VF_adieu_aubin" },
      { label: "Charline", hide: { any: [N({ present: "charline" }), { seen: "VF_adieu_charline" }] }, to: "VF_adieu_charline" },
      { label: "Thavary", hide: { any: [N({ present: "thavary" }), { seen: "VF_adieu_thavary" }] }, to: "VF_adieu_thavary" },
      { label: "Gloup", hide: { any: [N({ present: "gloup" }), { seen: "VF_adieu_gloup" }] }, to: "VF_adieu_gloup" },
      { back: "VF_malvoran" },
    ] },
  VF_adieu_pip: { act: "V", title: "Ce que dit Pip", place: "VF_l_fond", with: "pip",
    text: [
      "Pip se pose sur ta main. Il est léger. Il a toujours été léger, mais là, il ne pèse rien du tout, comme s'il était déjà ailleurs.",
      "« Je sais ce que je suis, dit-il. Je suis ce qu'il a gardé. La dernière chose. Celle qui ne voulait pas avoir froid. » Il se tait. « Si quelqu'un doit rester avec la porte, je peux. Je tiens dans sa main. J'y ai toujours tenu. Ce ne serait pas tenir, pour moi. Ce serait rentrer. »",
      "« Mais je préférerais rester avec toi, ajoute-t-il, très vite. Je voulais que tu le saches aussi. Les deux sont vrais. »",
      L({ mark: { min: 3 } }, "Il regarde ta main gauche. « Ne t'assieds pas à sa place, dit-il. Toi, non. Pas avec ça. Elle t'attend depuis le château. »"),
    ],
    choices: [{ back: "VF_avant" }] },
  VF_adieu_coliane: { act: "V", title: "Ce que dit Coliane", place: "VF_l_fond", with: "coliane",
    text: [
      "Coliane ne te regarde pas. Elle regarde l'eau, là où la tache s'est enroulée. « Je n'ai pas de conseil, dit-elle. Je n'ai jamais eu de conseil pour personne. Mais je vais te dire ce que je ne supporterai pas. »",
      "« Un marché. Quoi que tu fasses, pas de marché avec elle. Pas une goutte. Pas un oui. J'ai vu ce que c'est, un marché dans l'ombre : c'est une écluse qu'on ouvre la nuit sur un village qui dort, contre la promesse qu'on soignera ta femme. Et elle meurt quand même. » Elle se tait. « Le reste, je suivrai. Même si tu te trompes. Mais pas ça. »",
      L(H("VF:galet_jete"), "Elle a les mains vides. Le galet est dans l'eau d'en bas. Elle a l'air plus légère, et plus seule."),
      L(N(H("VF:galet_jete")), "Elle a toujours le galet dans le poing. Elle le serre si fort que ses jointures sont blanches."),
    ],
    choices: [{ back: "VF_avant" }] },
  VF_adieu_aubin: { act: "V", title: "Ce que dit Aubin", place: "VF_l_fond", with: "aubin",
    text: [
      "Frère Aubin te prend par le bras et t'emmène un peu à l'écart, comme on emmène quelqu'un hors d'une chambre de malade. « Je vais te dire une chose de prêtre, dit-il, et tu en feras ce que tu voudras. On ne guérit pas une blessure en la fermant par-dessus. Ça pourrit dessous. Ça fait quatre cents ans que ça pourrit dessous. »",
      L(H("aubin_arc=offrande"), "« Et je vais te dire une chose d'homme, ajoute-t-il. Si quelqu'un doit rester, je peux. Je l'ai décidé là-haut, dans la tour, au milieu des noyés. Je n'étais pas là pour mes frères. Je peux être là pour lui. Ne me regarde pas comme ça. Ce n'est pas une pénitence. C'est une place. »"),
      L(H("aubin_arc=quitte"), "« Et je vais te dire une chose d'homme, ajoute-t-il. J'ai un fils, à Morteau. Il s'appelle Ivo. Je voudrais le voir marcher. Je te le dis pour que tu ne me demandes pas de rester. Si tu me le demandes, je resterai. Mais je voulais que tu saches ce que ça coûterait. »"),
      L(H("aubin_arc=pretre"), "« Et si tu veux le délivrer, ajoute-t-il, j'ai des mains de prêtre. Elles n'ont pas su sauver mes frères. Elles sauront peut-être soigner un homme de pierre. Je ne promets rien. Je promets d'essayer. »"),
      L({ loyal: "aubin" }, "Il te serre le bras, fort, et te lâche. « Quoi que tu choisisses, je serai là. Même si c'est pour te dire que tu as eu tort. »"),
    ],
    choices: [{ back: "VF_avant" }] },
  VF_adieu_charline: { act: "V", title: "Ce que dit Charline", place: "VF_l_fond", with: "charline",
    text: [
      "Charline a sorti son carnet. Elle ne l'ouvre pas. Elle le tient fermé contre sa poitrine, comme un bouclier. « J'ai lu tout ce que le Cercle avait sur le feu d'Hildre, dit-elle. Ce qu'il fait au métal. Ce qu'il fait à la pierre. Il rend les choses à ce qu'elles étaient avant qu'on les forge. »",
      "« Je crois que je peux le soigner. Pas le rendre comme avant : on ne rend personne comme avant. Mais lui rendre assez de chair pour qu'il se lève. Je crois. » Elle se mord la lèvre. « La dernière fois que j'ai cru pouvoir faire quelque chose avec le feu, mon père a perdu ses mains. »",
      "« Et si tu dois refermer, ajoute-t-elle, une Hildrand a forgé cette chaîne. Une Hildrand peut la porter. Ce serait juste. Je ne dis pas que je le veux. Je dis que ce serait juste. »",
      L(H("clou:reforge"), "Elle regarde ta besace, où le Clou reforgé par son père attend son trou carré. « Il l'a reforgé pour qu'il tienne, dit-elle. Pas pour qu'il ouvre. Mon père a toujours su ce qu'il voulait d'un clou. »"),
    ],
    choices: [{ back: "VF_avant" }] },
  VF_adieu_thavary: { act: "V", title: "Ce que dit Thavary", place: "VF_l_fond", with: "thavary",
    text: [
      "Thavary se tient droite, la main sur la garde, comme à l'inspection. « Thavar a voté pour la chaîne, dit-elle. Il a laissé une lettre au lieu de descendre. Toute ma maison est sortie de ce vote. Le manoir, les terres, l'Anneau, et la honte. »",
      L(H("thavary_arc=honneur"), "« Une dette se paie, dit-elle. Si quelqu'un doit prendre sa place, que ce soit une Thavar. Ça soldera le compte. Je ne demande pas qu'on me plaigne. Je ne le supporterais pas. Je demande qu'on me laisse payer. »"),
      L(H("thavary_arc=liberee"), "« Je l'ai posée, là-haut, cette dette, dit-elle. Tu m'as dit que je pouvais. Je ne la reprendrai pas. Mais si tu as besoin d'une épée pour ce que tu vas faire, quel que soit ce que tu vas faire, elle est à toi. »"),
      L(H("thavary_arc=vengeance"), "« Ils ont bâti leurs maisons sur lui, dit-elle. Aldaran, Vel-Orin, l'Ordre, et la mienne. Si tu brises tout, je ne pleurerai pas. »"),
      L(H("thavary:hesite"), "Elle baisse les yeux. « À la chapelle, j'ai failli te prendre l'Anneau. Tu le sais. Je ne te demanderai jamais pardon pour ça. Mais je suis encore là. »"),
    ],
    choices: [{ back: "VF_avant" }] },
  VF_adieu_gloup: { act: "V", title: "Ce que dit Gloup", place: "VF_l_fond", with: "gloup",
    text: [
      "Gloup ne parle pas. Il ne l'a jamais fait. Mais il roule jusqu'à toi et se colle à ta botte, puis il se décolle, et roule jusqu'au pied de pierre, et s'y colle, puis il revient. Il fait ça trois fois. Puis il s'arrête au milieu, entre les deux, et il te regarde.",
      "Tu comprends. Il est de cette eau. Il pourrait y vivre, au fond, à côté de la porte, sans se dissoudre comme les autres, parce qu'il est parti et revenu. Il pourrait tenir de l'intérieur ce que la femme tient de l'intérieur, et le tenir dans l'autre sens.",
      L(H("gloup_arc=propre"), "Il brille un peu, de sa clarté laiteuse. Il est propre. Il ne sait pas s'il le resterait, en bas. Il te le demande, avec un petit bruit."),
      L(H("gloup_arc=lui"), "Il est de la couleur de l'eau d'ici. Il ne craint rien de cette eau. Il fait un bruit content, presque une chanson."),
      "Puis il revient se coller à ta botte, et il n'en bouge plus. Il a dit ce qu'il avait à dire. C'est à toi.",
    ],
    choices: [{ back: "VF_avant" }] },

  // ================================================================== the choice of the ending (BIBLE 8.1)
  VF_choix: { act: "V", title: "Ce que tu donnes", place: "VF_l_fond",
    text: [
      "Tu te tiens au pied de la porte, devant lui. Il te regarde de son œil brun. Il n'attend rien. Il a cessé d'attendre il y a très longtemps, et c'est peut-être pour ça qu'il est encore là.",
      "Tu penses à tout ce que tu as dans les mains, et à tout ce que tu as laissé derrière : la lettre pliée en quatre, la pierre fendue sous le château, le puits de Brumefeuille, la forge, la chapelle sous le lac, la guerre au gué, le glacier. Tout ce que tu as gardé. Tout ce que tu as donné. Ça se pèse, ici. Tu le sens dans tes épaules.",
      L(TROIS_CLES, "Les trois clés sont dans ta besace, et elles chantent ensemble, à trois voix, une note qui te remplit la poitrine. Elles savent où aller."),
      L(N(TROIS_CLES), "Il te manque des clés. Les serrures de la porte attendent, et tu ne peux pas toutes les remplir."),
      L(LIBERE, "Tu sais son nom, tu sais ce qu'elle est, et ta paume est presque propre. Et quelqu'un à côté de toi a des mains qui savent soigner."),
      L({ mark: { min: 4 } }, "Ta main gauche est noire jusqu'au coude, et elle te dit, très calmement, qu'elle saurait quoi faire de cette porte."),
      L(DETRUIT, "Tu as de quoi faire du feu. Un feu qui brûlerait tout, la chaîne, les clés, la porte, et lui."),
      "Derrière lui, la porte pousse. Sous l'eau, à ses pieds, la tache attend. Et lui, il te regarde, et il ne te demande rien.",
    ],
    choices: [
      { label: "Refermer le Sceau, et que quelqu'un prenne sa place", big: true, if: TROIS_CLES, why: "Il faut les trois clés en main : le Clou de Hildre, la Cloche d'Ivo et l'Anneau de Thavar.", to: "VF_rescelle_qui" },
      { label: "Le délivrer, et le soigner", big: true, if: LIBERE, why: "Il faudrait savoir qui il était, savoir ce qu'est la Voix, avoir la paume presque propre, et qu'Aubin ou Charline soit à tes côtés et te fasse confiance.", to: "VF_libere" },
      { label: "Briser le Sceau, et lui avec, par le feu", big: true, if: DETRUIT, why: "Il faudrait le feu du dragon, purifié ou mort, et au moins deux des trois clés.", to: "VF_detruit" },
      { label: "T'asseoir à sa place, et prendre la main de l'eau", big: true, tag: "Marque", stain: true, if: { mark: { min: 4 } }, why: "Ta main n'est pas assez noire pour commander à ce qui pousse derrière la porte. Il faudrait que la Marque t'ait pris bien davantage.", to: "VF_maitre" },
      { label: "Appeler la femme de l'eau, et accepter son marché", tag: "Marque +1", stain: true, fx: { mark: 1 }, to: "VF_marche_tardif" },
      { back: "VF_malvoran" },
    ] },

  // ------------------------------------------------------------------ Rescellé: who takes his place
  VF_rescelle_qui: { act: "V", title: "Qui reste", place: "VF_l_fond",
    text: [
      "Tu lui dis ce que tu vas faire. Refermer. Renouveler ce que les cinq ont fait, mais autrement : avec quelqu'un qui le choisit, et qui sait ce qu'il choisit, et dont on n'effacera pas le nom. Et lui, il pourra s'arrêter.",
      "L'œil se ferme. Quand il se rouvre, il est mouillé. « Il faut que quelqu'un reste, dit-il. Je ne peux pas te dire qui. Je ne peux pas te dire que ce n'est pas lourd. C'est lourd. Mais ce n'est pas le noir, si on sait pourquoi on y est. C'est le noir quand on ne sait plus. »",
      { with: "any", text: "Derrière toi, personne ne bouge. Personne ne recule non plus." },
    ],
    choices: [
      { label: "Frère Aubin", hide: N({ met: "aubin" }), if: ALL({ present: "aubin" }, { loyal: "aubin" }), why: "Frère Aubin n'est pas avec toi, ou ne te fait pas assez confiance pour que tu le lui demandes.", to: "VF_rescelle_aubin" },
      { label: "Thavary de Thavar", hide: N({ met: "thavary" }), if: ALL({ present: "thavary" }, { loyal: "thavary" }), why: "Thavary n'est pas avec toi, ou ne te fait pas assez confiance pour que tu le lui demandes.", to: "VF_rescelle_thavary" },
      { label: "Charline Hildrand", hide: N({ met: "charline" }), if: ALL({ present: "charline" }, { loyal: "charline" }), why: "Charline n'est pas avec toi, ou ne te fait pas assez confiance pour que tu le lui demandes.", to: "VF_rescelle_charline" },
      { label: "Gloup", hide: N({ met: "gloup" }), if: ALL({ present: "gloup" }, { loyal: "gloup" }), why: "Gloup n'est pas avec toi, ou ne te fait pas assez confiance pour que tu le lui demandes.", to: "VF_rescelle_gloup" },
      { label: "Pip", if: { present: "pip" }, why: "Pip n'est plus avec toi.", to: "VF_rescelle_pip" },
      { label: "Toi", big: true, to: "VF_rescelle_heros" },
      { back: "VF_choix" },
    ] },
  VF_rescelle_aubin: { act: "V", title: "Le frère qui reste", place: "VF_l_fond", with: "aubin",
    fx: { flag: "VF:tient_aubin", conf: { aubin: 10 } },
    text: [
      "Tu te tournes vers Frère Aubin. Tu n'as pas besoin de parler. Il hoche la tête avant que tu aies ouvert la bouche, comme un homme à qui l'on confirme une nouvelle qu'il connaissait déjà.",
      "« Bon, dit-il. Bon. » Il enlève sa coule, la plie, et te la tend. « Pour Ida. Elle en fera des langes, ou des torchons. Dis-lui que je n'étais pas à la taverne, cette fois. Dis-le à Ivo, quand il sera grand. Que son père était à son poste. »",
      L(H("ida=dit"), "« Je sais que j'ai un fils, maintenant, ajoute-t-il. Tu me l'as dit à Morteau. C'est grâce à ça que je peux le faire. Un homme qui sait qu'il a un fils peut aller n'importe où. »"),
      "Il marche jusqu'à la porte, dans l'eau, sans se presser. Il s'arrête devant la pierre et lève les yeux. « Frère Malvoran, dit-il. Je suis Aubin, de Saint-Ivo. Je viens vous relever. Ce n'est pas trop tôt, hein ? »",
      "L'œil de pierre le regarde. Et pour la première fois, tu vois le coin de la bouche de pierre bouger. Ce n'est pas tout à fait un sourire. C'est ce qu'il en reste après quatre cents ans.",
    ],
    choices: [{ label: "Tourner les clés", big: true, to: "VF_rescelle_rite" }] },
  VF_rescelle_thavary: { act: "V", title: "La dette de Thavar", place: "VF_l_fond", with: "thavary",
    fx: { flag: "VF:tient_thavary", conf: { thavary: 10 } },
    text: [
      "Tu te tournes vers Thavary. Elle te regarde droit, sans ciller, et elle détache son épée de sa ceinture, fourreau compris, et te la tend à deux mains. « L'épée de Thavar, dit-elle. Rapporte-la au manoir. Pose-la sur la table de la grande salle, devant ma grand-mère. Elle comprendra. »",
      L(H("thavary_arc=honneur"), "« Thavar a voté. Thavar a eu peur. Thavar a écrit au lieu de descendre. Moi, je descends. Le compte est soldé. » Elle le dit sans emphase, comme on lit le bas d'un registre."),
      L(N(H("thavary_arc=honneur")), "« Ce n'est pas pour la dette, dit-elle. Je l'ai posée, là-haut. C'est parce que je le veux. Tu peux le croire ou non. Moi, je le crois. »"),
      "Elle marche jusqu'à la porte, dans l'eau, et elle s'arrête devant la pierre. Elle ne s'agenouille pas, cette fois. « Thavary de Thavar, dit-elle. Je prends ma part. Toute. Thavar n'en a tenu qu'un peu. Je tiendrai le reste. »",
      "« Il pleurait pour rien, dit la pierre. Toi, tu ne pleures pas. » Thavary hausse les épaules. « Pas devant les gens », dit-elle.",
    ],
    choices: [{ label: "Tourner les clés", big: true, to: "VF_rescelle_rite" }] },
  VF_rescelle_charline: { act: "V", title: "La chaîne d'Hildre", place: "VF_l_fond", with: "charline",
    fx: { flag: "VF:tient_charline", conf: { charline: 10 } },
    text: [
      "Tu te tournes vers Charline. Elle ferme son carnet, et elle te le donne. « Pour mon père, dit-elle. Il ne sait pas lire mes notes, mais il aime les regarder. Il dit que j'ai une écriture de forgeron, qu'on voit où je frappe. »",
      L(H("ansgar=parle"), "« Dis-lui que je ne lui en veux pas, ajoute-t-elle. Il le sait. On se l'est dit. Dis-le-lui quand même. Il aime qu'on lui répète les choses. »"),
      L(H("ansgar=silence"), "« Dis-lui… » Elle s'arrête. « Non. Ne lui dis rien. On ne s'est jamais rien dit. On ne va pas commencer par un messager. Donne-lui le carnet, c'est tout. Il comprendra ce qu'il pourra. »"),
      "Elle marche jusqu'à la porte et pose les deux mains à plat sur la chaîne, au poignet de pierre. La chaîne rougit sous ses paumes, puis blanchit, et elle ne retire pas les mains. « Hildre l'a forgée en pleurant, dit-elle à la pierre. Moi, je la porterai sans pleurer. Ou presque. Ça fera une différence. »",
      "« Elle avait tes avant-bras, dit la pierre. Pas ta langue. »",
    ],
    choices: [{ label: "Tourner les clés", big: true, to: "VF_rescelle_rite" }] },
  VF_rescelle_gloup: { act: "V", title: "Celui qui est de l'eau", place: "VF_l_fond", with: "gloup",
    fx: { flag: "VF:tient_gloup", conf: { gloup: 10 } },
    text: [
      "Tu te baisses vers Gloup. Il est déjà décollé de ta botte. Il le savait. Il fait un petit bruit, puis un autre, et tu te souviens de la grotte du Rouvre, des bêtes grises qui le protégeaient, du premier jour où il s'est collé à toi sans que tu l'aies demandé.",
      L(H("gloup:lave"), "Tu l'as lavé, une fois, à la source du Rouvre. Il s'en souvient. Il se roule une dernière fois dans tes mains, comme ce jour-là."),
      "Il roule jusqu'à l'eau, au pied de la porte, et il y entre. Il ne se dissout pas. Il s'étale, il s'enfonce, il devient une tache claire dans l'eau noire, qui descend jusqu'aux pieds de la pierre, là où la femme s'est enroulée. Tu vois la tache claire et la tache noire se toucher. La noire recule.",
      "« Tu es parti, dit la pierre, à l'eau. Et tu es revenu. Elle, elle n'est jamais partie. C'est pour ça que tu peux la tenir. »",
      "De l'eau monte un bruit mouillé, très long, qui monte et qui descend. Le bruit content. Presque une chanson.",
    ],
    choices: [{ label: "Tourner les clés", big: true, to: "VF_rescelle_rite" }] },
  VF_rescelle_pip: { act: "V", title: "La lumière qui rentre", place: "VF_l_fond", with: "pip",
    fx: { flag: "VF:tient_pip", conf: { pip: 10 } },
    text: [
      "Tu regardes Pip. Il te regarde. Il n'y a rien à expliquer.",
      "« Ce ne sera pas tenir, dit-il. Je te l'ai dit. Ce sera rentrer. » Il se pose sur ta joue, une seconde, chaud comme une main d'enfant. « Merci de m'avoir emmené voir. C'était bien, là-haut. Les moulins. Les trolls. La bergère. Toi. »",
      "Il s'envole, et il ne monte pas vers la main ouverte. Il descend, derrière le dos de pierre, là où la sixième main est gravée sur la porte, celle que personne n'a jamais vue parce que quelqu'un était assis devant. Malvoran se penche, d'un pouce, pour le laisser passer. Tu entends la pierre crier.",
      "Pip se pose au creux de la sixième main. Elle s'allume. Toute la porte s'allume, d'un coup, de l'intérieur, comme une lanterne de corne quand on y met la chandelle, et les cinq autres mains gravées deviennent visibles jusque dans leurs lignes de vie, et elles sont tournées vers lui.",
    ],
    choices: [{ label: "Tourner les clés", big: true, to: "VF_rescelle_rite" }] },
  VF_rescelle_heros: { act: "V", title: "Ta place", place: "VF_l_fond",
    fx: { flag: "VF:tient_heros", ep: ["histoire", 4000] },
    text: [
      "Tu poses ta besace dans l'eau. Tu enlèves ce que tu portes d'inutile, et tout est inutile, ici. Tu gardes la lettre pliée en quatre. Tu la mets contre ta poitrine.",
      { with: "pip", text: "Pip comprend avant les autres. Il ne crie pas. Il se pose sur ton épaule et il ne dit rien du tout, et il brille, de toute sa force, pour que tu le voies bien une dernière fois." },
      { with: "coliane", text: "Coliane te prend par le col, à deux mains, et te secoue, une fois, fort. Puis elle te lâche. « Imbécile », dit-elle. Elle a les yeux secs. Elle les garde secs exprès." },
      { with: "aubin", text: "Frère Aubin te bénit du pouce, sur le front, comme on bénit les enfants. Il ne s'en excuse pas." },
      { with: "thavary", text: "Thavary te salue de l'épée, à la manière ancienne. Elle se tait. Elle tient le salut plus longtemps qu'il ne faut." },
      { with: "charline", text: "Charline ouvre la bouche, la referme. Elle te serre dans ses bras, maladroitement, et elle sent le charbon et l'encre." },
      { with: "gloup", text: "Gloup se colle à ta botte, et il faut le décoller doucement, avec les deux mains." },
      { without: "any", text: "Il n'y a personne pour te dire adieu. Tu l'as voulu ainsi, ou la route l'a voulu pour toi. Ça ne change rien à la porte." },
      "Tu marches jusqu'à lui. « Je viens vous relever », dis-tu. Tu ne savais pas que tu dirais ces mots-là. Ce sont les seuls qui conviennent.",
    ],
    choices: [{ label: "Tourner les clés", big: true, to: "VF_rescelle_rite" }] },
  VF_rescelle_rite: { act: "V", title: "Les trois clés", place: "VF_l_fond",
    fx: { ep: ["histoire", 8000] },
    text: [
      "Le Clou de Hildre d'abord. Tu l'enfonces dans le trou carré, et il glisse, et il s'arrête, et tu frappes la tête du plat de la main, une fois, comme Hildre l'aurait fait au marteau. Le métal chante. Puis la Cloche d'Ivo, que tu poses sur la dalle ronde, et qui sonne sans battant, une note si pure que tu sens tes os la répéter. Puis l'Anneau de Thavar, que tu passes dans l'anneau de pierre, et qui se resserre dessus comme sur un doigt.",
      L(H("clou:reforge"), "Le Clou reforgé par Ansgar entre plus loin que l'ancien ne l'aurait fait. Le vieux forgeron savait ce qu'il faisait."),
      L(H("cloche:benie"), "La prière gravée à neuf sur la robe de la Cloche s'allume, ligne après ligne, quand elle sonne."),
      L(H("anneau:lettre"), "L'Anneau tient, et tu entends, ou tu crois entendre, une voix d'homme qui pleure pour rien et qui dit : enfin."),
      "La chaîne bouge. Elle glisse hors du poignet de pierre, maillon après maillon, avec un bruit de rivière en crue, et elle va chercher celui qui reste.",
      L(H("VF:tient_aubin"), "Elle s'enroule autour du poignet de Frère Aubin, doucement, comme une étole. Il s'assied dos à la porte, dans l'eau, et il pose les mains sur ses genoux, et il commence à chanter le verset, d'une voix qui ne chante pas faux."),
      L(H("VF:tient_thavary"), "Elle s'enroule autour du poignet de Thavary, et Thavary la regarde faire, sans broncher, comme on regarde un écuyer boucler une armure. Elle s'assied dos à la porte, les jambes croisées, droite. « C'est lourd, dit-elle. Bien. »"),
      L(H("VF:tient_charline"), "Elle s'enroule autour des avant-bras de Charline, et le métal rougit à son contact, puis reste rouge, d'un rouge de braise, qui éclaire tout le fond. Charline s'assied dos à la porte. Elle a chaud. Elle n'aura plus jamais froid."),
      L(H("VF:tient_gloup"), "Elle descend dans l'eau, jusqu'à la tache claire qui est Gloup, et elle s'y attache, sans serrer, comme on attache une barque à un ponton. L'eau noire, autour, recule encore d'une coudée."),
      L(H("VF:tient_pip"), "Elle s'enroule autour de la porte elle-même, autour de la sixième main allumée, et la lumière de Pip passe à travers les maillons et les fait briller comme de l'argent. La porte ne pousse plus. Elle est tenue par une lanterne."),
      L(H("VF:tient_heros"), "Elle s'enroule autour de ton poignet gauche. Elle est froide, puis elle ne l'est plus. Tu t'assieds dos à la porte, et tu sens la poussée, de l'autre côté, énorme, patiente. Tu la sens, et tu la tiens. Ce n'est pas si difficile. C'est seulement long."),
      "Et Malvoran se penche en avant. Lentement, comme un arbre qu'on a fini de scier. Tu le reçois. Tu ne sais pas comment : il est grand comme un clocher et il tombe dans tes bras comme un enfant. La pierre se défait en tombant, elle s'effrite, elle coule en sable dans l'eau, et ce que tu tiens, à la fin, c'est un jeune homme maigre, très pâle, à la barbe de quelques jours, qui pèse le poids d'un sac de farine.",
      L(H("VF:nom_rendu"), "« Malvoran, dit-il, comme pour vérifier qu'il l'a encore. Malvoran. » Il sourit. « Merci de me l'avoir rapporté. Je n'en aurai pas besoin longtemps, mais c'est mieux de partir avec. »"),
      L(N(H("VF:nom_rendu")), "Il te regarde, et il cherche quelque chose, longtemps, dans ses souvenirs. Il ne le trouve pas. « Ça ne fait rien, dit-il. Je sais qui je suis. Je soignais des gens. J'avais un bol. »"),
      "Il ferme les yeux. Il respire trois fois, très doucement, des respirations d'homme, courtes, chaudes. Puis il ne respire plus. Il n'a pas eu mal. Tu le sais. Il avait l'air de quelqu'un qui se couche enfin, après une très longue journée.",
    ],
    choices: [{ label: "Le coucher dans l'eau claire", big: true, to: "F_rescelle" }] },
});

Object.assign(P, {
  // ------------------------------------------------------------------ Libéré et guéri
  VF_libere: { act: "V", title: "Les chaînes sans nom", place: "VF_l_fond",
    fx: { flag: "VF:nom_rendu", meet: "VF_malvoran", ep: ["histoire", 6000] },
    text: [
      "Tu lui dis que tu ne vas pas refermer. Ni briser. Que tu vas le délivrer, et que quelqu'un, ici, va le soigner. L'œil te regarde comme on regarde quelqu'un qui dit une bêtise très gentille. « La porte, dit-il. Si je me lève, la porte. »",
      "« La porte, c'est elle qui pousse, dis-tu. La femme de l'eau. Ce qu'il y a derrière, c'est ce que tu as pleuré. Si tu guéris, il n'y aura plus rien pour pousser. »",
      L({ seen: "VF_m_nom" }, "Tu redis son nom, à voix haute, pour que la chaîne l'entende. « Malvoran. »"),
      L(N({ seen: "VF_m_nom" }), "Et tu lui rends son nom, là, maintenant, à voix haute, pour que la chaîne l'entende. « Malvoran. Malvoran le Guérisseur. Tu étais le sixième. Tu t'es proposé. » Il tressaille de tout son corps, comme on tressaille quand on vous appelle dans une foule."),
      "La chaîne frémit. Puis le premier maillon, celui du poignet, s'ouvre, tout seul, avec un petit bruit sec. Et le suivant. Et tous, un à un, le long de la porte, jusqu'aux trois serrures. Elle a été forgée pour tenir quelqu'un qui n'avait pas de nom. Elle ne sait pas tenir Malvoran.",
      L({ relics: { min: 1 } }, "Dans ta besace, les clés se taisent, d'un coup, comme des chiens qui reconnaissent un pas. Elles n'ont plus rien à fermer."),
      "Il ne se lève pas. Il ne peut pas : il est de pierre jusqu'à la taille. Mais son bras gauche, libre, retombe le long de son flanc, pour la première fois depuis quatre cents ans, et il le regarde comme on regarde le bras d'un autre.",
    ],
    choices: [{ label: "Laisser faire celle ou celui qui sait soigner", big: true, to: "VF_libere_soin" }] },
  VF_libere_soin: { act: "V", title: "La pierre et la chair", place: "VF_l_fond",
    fx: { flag: "VF:gueri" },
    text: [
      L(ALL({ present: "aubin" }, { loyal: "aubin" }), "Frère Aubin entre dans l'eau jusqu'à la poitrine et pose les deux mains à plat sur le genou de pierre. Il ne prie pas tout de suite. Il dit d'abord ce qu'on dit aux malades, à Saint-Ivo, avant tout le reste : « Je suis là. Je ne pars pas. » Puis il prie, et sous ses mains, la pierre devient grise, puis brune, puis rose, et chaude, et elle se met à saigner un peu, comme saigne une peau qu'on a trop longtemps comprimée. Aubin ne retire pas les mains. Il pleure, et il continue."),
      L(ALL({ present: "charline" }, { loyal: "charline" }), "Charline pose les mains sur le poignet libéré et ferme les yeux. Le feu d'Hildre sort d'elle, blanc, sans flamme, une chaleur qui sent le métal et le pain qui cuit, et il entre dans la pierre comme l'eau entre dans la terre sèche. La pierre se fendille, s'écaille, tombe en plaques, et dessous il y a de la peau, pâle, fripée, comme sous un pansement qu'on aurait laissé un an. Charline tremble de tout son corps. Elle ne s'arrête pas. « Je sais ce que je fais, dit-elle entre ses dents. Cette fois, je sais. »"),
      "Ça dure longtemps. Tu ne sais pas combien. La pierre tombe, par plaques, par pans entiers, dans l'eau qui fume. Ce qui reste, à mesure, rapetisse : un homme ne peut pas être grand comme un clocher. Il redevient de la taille d'un homme, un peu au-dessus, puis tout à fait. À la fin, il y a dans l'eau, à genoux, nu, couvert de poussière de roche, un jeune homme maigre aux cheveux bruns, qui tient son bras gauche contre sa poitrine et qui respire vite, par la bouche, comme quelqu'un qui a couru.",
      "Il lève la main droite, celle qui était ouverte, et il la regarde, et il replie les doigts, un par un, et il les rouvre. Il fait ça plusieurs fois. Il rit, tout bas, d'un vrai rire, qui n'a plus rien d'un éboulis.",
      { with: "pip", text: "Pip descend de la voûte et se pose dans la main qui s'ouvre. Elle est petite, maintenant, une main d'homme. Il y tient quand même. Il y tient très bien." },
    ],
    choices: [{ label: "Regarder la porte", big: true, to: "VF_libere_breche" }] },
  VF_libere_breche: { act: "V", title: "La Brèche se ferme", place: "VF_l_fond",
    fx: { ep: ["histoire", 8000] },
    text: [
      "La porte ne s'ouvre pas. Elle ne pousse plus. Tu poses la main dessus, là où il s'appuyait : la pierre est froide, ordinaire, une pierre de montagne. Derrière, tu n'entends rien. Pas de poussée, pas de souffle. Le silence d'une cave vide.",
      "À vos pieds, l'eau noire baisse. Elle baisse comme baisse une rivière à la fin d'un orage, sans bruit, en laissant sur la grève des herbes mortes et une ligne de vase. La tache, celle qui s'était enroulée à ses pieds, n'a plus rien où s'enrouler. Tu la vois une dernière fois : une forme de femme couchée dans une flaque, qui lève la tête vers lui.",
      "Elle se tait. Lui non plus. Il la regarde, longtemps, avec une sorte de pitié, comme on regarde une lettre de colère qu'on a écrite il y a très longtemps et qu'on retrouve au fond d'un tiroir. Puis il dit, très doucement : « Je n'ai plus besoin de toi. » Et la flaque sèche. Elle sèche en un instant, comme sèche une flaque de juillet sous le soleil, et il ne reste sur la pierre qu'une trace grise en forme de femme, qui pâlit, et qui disparaît.",
      "Sous la Fenne, tu entends la montagne bouger. Pas un tremblement : un tassement, long, lent, le bruit d'une plaie qui se referme. La Brèche n'était que ça. Une blessure qu'on n'avait jamais soignée, et qu'on avait fermée par-dessus.",
      L(H("VF:voix_dite"), "Tu l'avais nommée, tout à l'heure. Tu comprends maintenant que tu ne t'étais pas trompé{e}. Une rancune ne survit pas à celui qui cesse de l'avoir."),
      "Il se lève. Il tombe. Tu le rattrapes. Il se relève, appuyé sur ton épaule, et il fait son premier pas, dans l'eau qui baisse, vers la pente, vers le haut. Il demande s'il fait froid, là-haut. Tu dis que oui, que c'est l'hiver, les premières neiges. Il dit que c'est bien. Qu'il aime la neige. Qu'il l'avait oubliée.",
    ],
    choices: [{ label: "Remonter avec lui, une marche à la fois", big: true, to: "F_libere" }] },

  // ------------------------------------------------------------------ Détruit
  VF_detruit: { act: "V", title: "Le feu", place: "VF_l_fond",
    text: [
      "Tu lui dis que tu vas tout briser. La chaîne, les clés, la porte. Et lui avec. Qu'il n'y aura plus de Sceau, plus de gardien, plus personne à enchaîner, jamais.",
      "L'œil te regarde, longtemps. Tu t'attends à de la peur. Il n'y en a pas. « Oui, dit-il. Oui. Je suis tellement fatigué. » Puis : « Elle va brûler avec moi ? » Tu dis oui. « Alors c'est bien. Ce qu'elle a déjà mis dans le monde y restera. Il faudra le laver à la main. Ce sera long. Mais elle n'en mettra plus. »",
      L(ALL(H("dragon=purifie"), H("ardhal:allie")), "Tu lèves la main vers la pente. Ardhal descend. Il se pose sur la grève, il allonge le cou au-dessus de l'eau, et il regarde la pierre une dernière fois. « J'ai vu les six descendre, dit-il. J'en ai vu cinq remonter. Je n'ai rien dit. » Il ouvre la gueule."),
      L(ALL(H("dragon=purifie"), N(H("ardhal:allie"))), "Tu appelles Ardhal, comme il te l'a appris, par la glace. Il vient. Il ne t'est rien, il ne te doit rien, mais il vient, parce que c'est lui, et qu'il a vu les six descendre. Il se pose sur la grève. Il ouvre la gueule."),
      L(ALL(H("dragon=tue"), ANY({ item: "VE_coeur_ardhal" }, H("VF:don_coeur"))), "Tu prends le cœur d'Ardhal, la pierre bleue qui bat de loin en loin, et tu le poses contre la porte, entre les trois serrures. Tu frappes dessus avec le Clou, une fois. Il s'ouvre comme un fruit, et dedans, il y a le feu."),
      L(ALL(H("dragon=tue"), N(ANY({ item: "VE_coeur_ardhal" }, H("VF:don_coeur")))), "Ardhal est mort, là-haut, et tu n'as pas pris son cœur. Mais son feu est dans tes clés : tu l'as senti en descendant, depuis le glacier, depuis le jour où tu l'as tué. Tu frappes les clés l'une contre l'autre, au-dessus de la chaîne, et elles s'allument d'un feu blanc, sans chaleur, le feu qu'il avait gardé pour les six."),
    ],
    choices: [{ label: "Laisser le feu prendre", big: true, to: "VF_detruit_feu" }] },
  VF_detruit_feu: { act: "V", title: "Ce que le feu prend", place: "VF_l_fond",
    fx: { ep: ["histoire", 8000], flag: "VF:brise" },
    text: [
      "Le feu est blanc. Il ne fait pas de bruit. Il coule sur la chaîne comme de l'eau, et la chaîne fond, et les clés fondent dans leurs serrures, le Clou, la Cloche, l'Anneau, tout ce que tu as porté depuis l'automne, et tu les regardes partir sans rien pouvoir faire, et sans le vouloir.",
      "Puis le feu prend la pierre. Malvoran ne crie pas. Il te regarde à travers le feu, de son œil brun, jusqu'au bout. La pierre craque, éclate, tombe en morceaux brûlants dans l'eau qui siffle, et la vapeur monte jusqu'au noir. Tu entends, à la fin, très bas, à travers le grondement : « Merci. » Peut-être. Peut-être que tu l'inventes.",
      "Et sous ses pieds, dans l'eau, la femme brûle aussi. Elle brûle avec lui, parce qu'elle est de lui. Elle se tord, elle monte, une colonne de vapeur noire en forme de femme debout, qui ouvre la bouche, et pour la première fois elle n'a rien à dire. Puis la colonne se disperse, et il n'y a plus rien.",
      "La porte s'effondre. Derrière, il n'y a pas de monstre. Il y a la Brèche : une fente dans la montagne, noire, profonde, d'où monte une odeur de vase. Elle reste ouverte. Elle ne poussera plus : il n'y a plus personne pour la faire pousser. Mais ce qui en est sorti en quatre cents ans est dans les puits, dans les rivières, dans les bêtes, dans les gens. Ça, aucun feu ne le brûlera.",
      { with: "pip", text: "Pip a regardé jusqu'au bout. Il se tait. Sa lumière est devenue très pâle, et elle ne revient pas." },
    ],
    choices: [{ label: "Remonter, avec ce qui reste à laver", big: true, to: "F_detruit" }] },

  // ------------------------------------------------------------------ Le nouveau maître
  VF_maitre: { act: "V", title: "La main noire", place: "VF_l_fond",
    text: [
      "Tu poses ta main gauche à plat sur la porte, à côté de lui. Ta main noire jusqu'au coude. La pierre est tiède sous ta paume, et la poussée de l'autre côté te traverse le bras, l'épaule, la poitrine, et ta main la reconnaît. Elle n'a pas peur. Elle a faim.",
      "« Non », dit la pierre. C'est la première fois qu'il élève la voix. « Non. Pas comme ça. »",
      "À vos pieds, l'eau remue. La femme se déroule et se lève, et elle n'a pas de visage, ou elle a le tien. Elle vient vers ta main. Tu la laisses venir. Elle entre par la paume, comme on rentre chez soi, et tu sens toute l'eau des Marches d'un coup : les puits de Brumefeuille, le bief, le lac de Morteau, l'Isarde, les citernes de Hautecombe, le glacier, les larmes de tous ceux qui pleurent ce soir dans la vallée. Tout cela est à toi. Tout cela t'écoute.",
      { with: "pip", text: "Pip crie. Tu ne l'avais jamais entendu crier. Il s'envole hors de ta portée, très haut, et il ne redescend pas." },
      { with: "coliane", text: "Coliane a tiré ses couteaux. Elle ne frappe pas. Elle recule, pas à pas, sur l'eau, sans te quitter des yeux, jusqu'à la grève." },
      { with: "aubin", text: "Frère Aubin dit ton nom, une fois, comme on appelle quelqu'un qui part dans le brouillard." },
    ],
    choices: [{ label: "Pousser Malvoran hors de la porte", big: true, tag: "Marque +1", stain: true, fx: { mark: 1 }, to: "VF_maitre_prise" }] },
  VF_maitre_prise: { act: "V", title: "La porte à toi", place: "VF_l_fond",
    fx: { flag: "VF:maitre_assis", ep: ["histoire", 8000] },
    text: [
      "Tu n'as même pas besoin de le pousser. Ta main sur la porte suffit : la poussée ne vient plus contre lui, elle vient vers toi, et il n'a plus rien à tenir. La chaîne glisse de son poignet comme une manche trop large. Il s'effondre sur lui-même, la pierre en sable, le sable dans l'eau, et son œil te regarde jusqu'au bout, sans colère, avec une immense tristesse. Puis il n'y a plus d'œil.",
      "Tu t'assieds à sa place, dos à la porte. Elle pousse. Tu ne la retiens pas. Tu la règles. Comme on règle la vanne d'un moulin, un peu plus, un peu moins, selon ce qu'on veut moudre. Tu peux l'ouvrir d'un doigt. Tu peux la fermer d'un doigt. Tu ne fais ni l'un ni l'autre. Tu écoutes. L'eau te raconte tout.",
      "La femme n'est plus devant toi. Elle est dans ta main. Elle parle avec ta voix, maintenant, quand elle parle. Elle ne te ment pas. Elle choisit ce qu'elle te dit. Tu choisis ce que tu lui réponds.",
    ],
    choices: [{ label: "Écouter l'eau", big: true, to: "F_maitre" }] },

  // ------------------------------------------------------------------ Le marché
  VF_marche_oui: { act: "V", title: "Oui", place: "VF_l_fond",
    fx: { flag: "VF:oui", ep: ["histoire", 3000] },
    text: [
      "Tu t'agenouilles au bord et tu mets la main dans son eau. Elle est tiède. Elle se referme autour de tes doigts comme une main d'enfant qui prend la tienne pour traverser la rue. « Oui », dis-tu. Ce n'est pas difficile. C'est même étrangement facile. Ta voix ne tremble pas.",
      "« Merci, dit-elle, et elle a l'air sincère. Tu verras. Ce ne sera pas si terrible. Ce ne sera presque rien. »",
      "Elle s'éloigne sur l'eau, sans se presser, vers la forme assise, et elle s'enroule à ses pieds. Là-bas, très loin, l'œil de la pierre est ouvert, et il te regarde. Tu ne le vois pas assez bien pour savoir ce qu'il y a dedans. Tu préfères ne pas savoir. La porte tient. Elle tiendra encore un peu. Moins qu'avant. Assez.",
      { with: "coliane", text: "Coliane se tait. Elle range ses couteaux, et elle tourne le dos, et elle remonte la pente sans t'attendre. Tu ne la rattrapes pas." },
      { with: "pip", text: "Pip reste sur ton épaule. Il ne brille presque plus. Il ne te quitte pas. C'est peut-être le pire." },
      { with: "aubin", text: "Frère Aubin fait le signe de la Main, pas sur toi : sur l'eau, là où tu as mis la main. Puis il remonte, lui aussi." },
    ],
    choices: [{ label: "Remonter vers le jour", big: true, to: "F_marche" }] },
  VF_marche_tardif: { act: "V", title: "La femme rappelée", place: "VF_l_fond",
    fx: { flag: "VF:oui", ep: ["histoire", 3000] },
    text: [
      "Tu te tournes vers l'eau, à ses pieds, là où la tache s'est enroulée, et tu l'appelles. Tu ne sais pas son nom. Tu n'en as pas besoin. Elle t'a toujours entendu{e}.",
      "Elle se déroule, lentement, et se lève, défaite, sans robe, sans cheveux : une forme de vase, à peine debout. Elle ne s'attendait pas à ce que tu l'appelles. Elle s'en remet vite. « Mon offre tient toujours, dit-elle. Je n'en ai jamais eu qu'une. »",
      "Tu mets la main dans son eau. « Oui. » Au-dessus de toi, la pierre ferme son œil. Elle ne le rouvre pas. Elle tient la porte, encore, un peu moins qu'avant, et elle ne te regardera plus jamais.",
      { with: "coliane", text: "Coliane se tait. Elle range ses couteaux, et elle tourne le dos, et elle remonte la pente sans t'attendre. Tu ne la rattrapes pas." },
      { with: "pip", text: "Pip quitte ton épaule. Il vole jusqu'à la main de pierre, il s'y pose une seconde, comme on pose la main sur l'épaule de quelqu'un qu'on laisse. Puis il revient. Il ne brille presque plus." },
      { with: "aubin", text: "Frère Aubin fait le signe de la Main sur l'eau, là où tu as mis la main. Puis il remonte, lui aussi." },
    ],
    choices: [{ label: "Remonter vers le jour", big: true, to: "F_marche" }] },
});

// ================================================================== the epilogue (one line per person, per side quest)
// epilogue(fin) -> [paragraph]: shared by the six endings; `fin` changes the few lines that the ending itself changes.
function epilogue(fin) {
  var sombre = fin === "triomphe" || fin === "maitre" || fin === "marche";
  var e = [];
  function add(cond, text) { e.push(cond ? L(cond, text) : text); }
  function T(title) { e.push("*" + title + "*"); }
  // toi(cond, up, down): a line about what the hero does afterwards; `down` when the hero never came back up.
  function toi(cond, up, down) {
    if (fin === "triomphe" || fin === "maitre") add(cond, down);
    else if (fin === "rescelle") { add(cond ? ALL(cond, N(H("VF:tient_heros"))) : N(H("VF:tient_heros")), up); add(cond ? ALL(cond, H("VF:tient_heros")) : H("VF:tient_heros"), down); }
    else add(cond, up);
  }

  // ------------------------------------------------ the Trois-Bornes (prologue)
  T("Les Trois-Bornes");
  add(null, sombre
    ? "À la Lanterne éteinte, Mère Ternes laisse l'enseigne éteinte, comme son nom le veut. Elle dit que les colporteurs trouveront bien la porte. Elle sert la soupe aux gens de la crête, le soir, et elle ne sert plus d'eau : seulement du cidre, et du lait de chèvre."
    : "À la Lanterne éteinte, Mère Ternes rallume la lanterne de l'enseigne, un soir de la fin de l'hiver, pour la première fois depuis que les trolls sont montés au château. Elle dit que c'est pour les colporteurs. Elle la laisse allumée toutes les nuits.");
  add(H("durn:marteau"), "Durn forge avec son marteau, celui au manche de frêne gravé d'une borne. On l'entend des trois bornes dès l'aube, et les gens du hameau disent qu'ils se lèvent avec lui. Il a gravé, sur la borne du milieu, à côté des cinq mains, une sixième. Elle est maladroite. Elle est là.");
  add(N(H("durn:marteau")), "Durn n'a jamais retrouvé son marteau. Il en a forgé un autre, qui ne tombe pas pareil dans la main, et il en parle à tous ceux qui passent, comme on parle d'un mort.");
  add(H("bergere:chien"), "Isaure monte sur la crête avec Poivre, qui a vieilli d'un coup après le chenil des trolls et qui court quand même devant les brebis. Elle tricote à l'abri du cairn des Six. Elle a appris à compter jusqu'à six, en passant devant.");
  add(ALL(N(H("bergere:chien")), H("poivre:libre")), "Poivre est redescendu tout seul de la crête, un soir d'hiver, maigre, la queue basse. Isaure l'a reconnu de loin. Elle n'a jamais su qui avait ouvert le chenil.");
  add(ALL(N(H("bergere:chien")), N(H("poivre:libre"))), "Isaure a pris un autre chien, un jeune, qui ne sait pas encore son métier. Elle l'a appelé Poivre aussi.");
  add(H("charbonnier:paix"), fin === "libere"
    ? "Thibaut, le cousin du charbonnier, travaille avec Blaise aux meules. Il parle peu. Il ne dit plus « elle tient ». Un matin de printemps, il pose la main à plat sur la terre de la clairière, longtemps, et il dit : « Il s'est levé. » Blaise ne comprend pas. Thibaut sourit."
    : fin === "rescelle" ? "Thibaut, le cousin du charbonnier, travaille avec Blaise aux meules. Il parle peu. Parfois, il pose la main à plat sur la terre et il écoute, et il dit : « Elle tient. Quelqu'un d'autre la tient. » Puis il retourne à sa pelle."
    : fin === "detruit" ? "Thibaut, le cousin du charbonnier, travaille avec Blaise aux meules. Il a posé la main sur la terre, un soir de l'hiver, et il l'a retirée très vite. « Elle ne tient plus, a-t-il dit. Il n'y a plus rien à tenir. » Ses cheveux blancs ont un peu foncé, depuis."
    : "Thibaut, le cousin du charbonnier, travaille avec Blaise aux meules. Il pose la main sur la terre, parfois, et il l'écoute, et il ne dit plus rien du tout. Blaise dit qu'il avait l'air moins triste quand il disait « elle tient ».");
  add(N(H("charbonnier:paix")), "Thibaut, le cousin du charbonnier, est toujours assis sur sa souche, à tailler son bout de bois. Quand on passe, il montre le sol, et il dit ce qu'il dit depuis le château. Personne ne lui a jamais demandé ce que ça voulait dire.");
  add(H("rouaix=payee"), "La veuve Rouaix garde sa maison. Elle file la laine tout l'hiver, la vend à la foire d'avril, et elle n'emprunte plus un denier à personne. Elle te garde un écheveau, au cas où tu repasserais.");
  add(H("rouaix=rusee"), "Maître Pons n'a pu prendre la maison de la veuve Rouaix qu'à la Saint-Jean de l'an quatre cent treize, et à la Saint-Jean, elle a payé, avec la laine de deux hivers. Pons dit partout que c'est un vol. Personne ne le croit.");
  add(H("rouaix=menace"), "La veuve Rouaix garde sa maison. Maître Pons ne remonte plus aux Trois-Bornes, et son valet a le nez de travers. Au hameau, on dit que tu as payé la dette à ta façon. On ne sait pas très bien si c'est un compliment.");
  add(H("rouaix=perdue"), "La maison de la veuve Rouaix a toujours ses volets cloués et son cadenas neuf. Mariette vit chez sa sœur, à Sorbe. Elle ne remonte jamais au hameau.");
  add(H("aglae=libre"), "Aglaé est à Sorbe-le-Bas, chez sa sœur, avec qui elle ne se parlait plus depuis vingt ans. Elles se disputent tous les jours. Elles ne se quittent plus.");
  add(ALL(H("aglae=reste"), N(H("grauk:mort"))), "Aglaé fait toujours la soupe au château des trolls, parce qu'elle l'a choisi. Elle a appris à Bourle à éplucher les oignons, et à Grauk à dire merci. Il le dit mal. Il le dit.");
  add(ALL(H("aglae=reste"), H("grauk:mort")), "Aglaé fait toujours la soupe au château des trolls. Le château n'a plus de roi, mais il a une cuisinière, et les trolls qui sont restés lui obéissent mieux qu'ils n'ont jamais obéi à Grauk.");
  add(H("aglae=ramenee"), "Aglaé tient la cuisine de la Lanterne éteinte avec Mère Ternes. Sa soupe est connue jusqu'à Sorbe. Bourle descend de la crête à chaque Saint-Martin pour en manger, et on le laisse entrer, à condition qu'il se baisse.");
  add(H("grauk:mort"), "Le château des trolls est vide, ou presque. La plupart sont partis vers le nord après la mort de Grauk, et la cheminée fume mal. Les gens des Trois-Bornes n'y montent pas. Ils n'en ont plus peur ; ils n'en ont plus envie.");
  add(ALL(H("grauk:vivant"), H("V:grauk_tient")), "Grauk et ses trolls ont tenu le puits de la Descente jusqu'au bout, à jeter des cailloux dans l'eau noire. Ils sont remontés après, en se plaignant du froid. Grauk a fait graver sur la porte de son château, par Durn, une sixième main, et il la montre à tous les visiteurs, qui sont rares.");
  add(ALL(H("grauk:vivant"), N(H("V:grauk_tient"))), "Grauk règne toujours sur son château de troncs. Il a fait déboucher l'escalier des caves. Il y descend, de temps en temps, et s'assied devant la pierre fendue, et il écoute. Il dit aux siens qu'elle ne chante plus. Il ne dit pas si ça lui manque.");

  // ------------------------------------------------ Brumefeuille (act I)
  T("Brumefeuille");
  add(H("puits:clair"), sombre
    ? "Le puits de Brumefeuille est clair. On y boit. On ne s'y penche plus, par habitude, et les enfants qui s'y penchent quand même disent que l'eau leur rend leur reflet avec un temps de retard. On les gronde. On ne regarde pas."
    : "Le puits de Brumefeuille est clair. On y boit, on y lave, on s'y penche, et l'eau renvoie le reflet de ceux qui s'y penchent, ni plus tôt ni plus tard. Le premier seau de chaque printemps, on le verse au pied du sanctuaire de la Main, sans trop savoir pourquoi.");
  add(N(H("puits:clair")), "Le puits de Brumefeuille reste fermé d'une planche clouée. On va chercher l'eau à la Sorbe, en amont du moulin, avec des seaux et des palanches, et les vieux disent que ça fait les épaules.");
  add(ALL(H("lune:remede"), H("jeannot:gueri")), "Lune a fait du remède contre la fièvre grise une recette qu'elle donne à qui la demande, écrite de sa main sur des bouts de parchemin. Jeannot Guérin l'aide à cueillir la mousse-de-lune ; il connaît les saules morts des marais mieux qu'elle, maintenant.");
  add(ALL(H("lune:remede"), N(H("jeannot:gueri"))), "Lune a fait du remède contre la fièvre grise une recette qu'elle donne à qui la demande. Elle l'a fait trop tard pour certains. Elle ne le dit pas, mais elle garde dans sa cuisine une petite chaise d'enfant dont personne ne se sert.");
  add(ALL(N(H("lune:remede")), H("jeannot:gueri")), "Lune n'a jamais eu sa mousse-de-lune. Jeannot Guérin a guéri quand même, quand le puits s'est éclairci, et Lune dit à qui veut l'entendre qu'elle n'y est pour rien. On ne la croit pas tout à fait.");
  add(ALL(N(H("lune:remede")), N(H("jeannot:gueri"))), "Lune n'a jamais eu sa mousse-de-lune. À Brumefeuille, on ne prononce plus le prénom de Jeannot Guérin devant sa mère.");
  add(H("charron=ouvert"), "Gilles Charron n'est plus maire. Le registre des onze maisons est resté à la halle, ouvert à la bonne page, et les gens le lisent en passant, comme on lit un avis de décès. Il vend toujours du grain. On le lui achète. On le compte deux fois.");
  add(H("charron=force"), "Gilles Charron est toujours maire, et il vend l'eau propre au prix de l'eau. Il ne sourit plus. Quand une femme de la haute Sorbe passe sur la place, il change de côté.");
  add(H("charron=achete"), "On se souvient longtemps, à Brumefeuille, du jour où quelqu'un a acheté toute l'eau de Charron pour la donner à la file. Charron aussi s'en souvient. Il ne l'a jamais revendue plus cher que ce jour-là.");
  toi(H("charron=complice"), "Gilles Charron est toujours maire. Il a fait bâtir une aile à sa maison, l'été suivant, et il a fait graver sur le linteau une main ouverte. Il t'envoie une lettre, chaque nouvel an, très aimable. Tu ne l'ouvres plus.",
    "Gilles Charron est toujours maire. Il a fait bâtir une aile à sa maison, l'été suivant, et graver sur le linteau une main ouverte. Il envoie chaque nouvel an une lettre très aimable à une adresse où personne ne l'ouvre.");
  add(H("charron=laisse"), "Gilles Charron est toujours maire, et toujours marchand de grain, et il a toujours raison. On ne lui a jamais rien reproché. Hortense, au Chaudron, sert sa soupe sans un mot de plus qu'il ne faut à tous ceux qui en parlent.");
  add(H("bucheron=soigne"), "Tiennot, le fils du bûcheron, coupe du bois avec son père dans le Rouvre. Il a gardé au poignet une veine grise qui ne s'en va pas. Il dit que c'est pour se souvenir de ne pas aller seul dans les combes. Il y va quand même.");
  add(H("bucheron=ramene"), "Tiennot, le fils du bûcheron, est vivant. Il a mis tout l'hiver à se remettre, et il parle encore, la nuit, à quelqu'un qui n'est pas là. Son père dort dans la même pièce que lui. Il ne dit pas à qui son fils parle.");
  add(H("bucheron=tard"), "Le bûcheron du Rouvre a taillé une petite croix de chêne pour son fils, et il l'a plantée au fond de la combe, dans le creux du chêne mort. Il y va le dimanche. Il y porte la petite cognée, et il la rapporte.");
  add(H("sauge=brulee"), "La Vieille Sauge vit toujours dans ses marais, avec sa dette brûlée. Elle chante la comptine des Six aux enfants qui s'égarent jusqu'à sa cabane, les six couplets, et elle ne s'arrête plus au cinquième.");
  add(H("sauge=gardee"), "La Vieille Sauge vit toujours dans ses marais. La barque que tu as tirée de la Noue est à Pernelle, maintenant, qui pêche avec. La Sauge dit que le noyé qui la gardait ne remonte plus. Elle ne dit pas si elle le regrette.");
  add(H("sauge=perdue"), "La Vieille Sauge vit toujours dans ses marais. La barque est toujours enchaînée dans la Noue, et le noyé la garde toujours. La Sauge y va, certains soirs, et elle lui parle. Elle dit qu'il a une jolie voix.");
  add(H("berthe=sauvee"), "Berthe vit au bord de son eau, avec ses chèvres. Elle ne remercie toujours personne. Les enfants qui lui jetaient des pierres lui portent son bois, l'hiver, et elle les paie en fromage, et elle compte les bûches devant eux.");
  add(H("berthe=cachee"), "Berthe est revenue dans sa maison au bord de l'eau quand on a su qui avait souillé le puits. Personne ne lui a fait d'excuses. Elle n'en a pas demandé. Elle a repris ses chèvres chez Hubert, une par une, et elle a laissé la plus belle à sa femme.");
  add(H("berthe=pendue"), "La maison de Berthe, au bord de l'eau, est vide. Ses chèvres ont été vendues à la foire. Quelqu'un a planté, devant la porte, un saule, qui a pris. Personne ne dit qui.");
  add(H("V:berthe_vivante"), "Elle ne sait pas que quelque part sous la montagne, une vitre d'eau a essayé de parler avec sa voix, et qu'on lui a répondu qu'elle était vivante. Elle le serait encore longtemps, d'ailleurs. Elle est têtue.");
  add(H("ruban=pere"), "Le ruban rouge de Margot est toujours noué au poignet de son père. Il ne l'enlève pas pour se laver.");
  add(H("ruban=tombe"), "Le ruban rouge de Margot est noué à la croix de chêne, contre le mur du sanctuaire, avec le bateau d'écorce. Il pâlit à la pluie. On le change, au printemps, sans savoir qui.");
  add(H("ruban=eau"), "Le ruban rouge de Margot est parti avec la Sorbe, vers les marais, vers ce qui se trouve plus bas. Il arrive qu'un pêcheur en remonte un bout dans son filet, d'un rouge passé. Il le rejette à l'eau.");
  add(ANY(H("V:margot_adieu"), H("V:margot_demasquee")), "Dans le puits de la Descente, une robe bleue est restée sur une marche, pliée. Personne n'y descendra pour la prendre.");
  // the miller: the last state wins (the Descent, then Hautecombe, then the choice of act I)
  add(ANY(H("barthelemy_v=ami"), H("barthelemy_v=reconcilie"), H("barthelemy_v=epargne")), "Barthélemy est remonté de la Descente. Il est rentré à Brumefeuille, par la route d'en bas, et il a rouvert le moulin. Il ne parle plus au bief. Il y a, sur la margelle de la roue, un petit bateau de bois qu'il repeint chaque printemps.");
  add(H("barthelemy_v=marche"), "Barthélemy n'est pas remonté. Il est resté dans le puits de la Descente, sur sa marche, à chanter avec la voix de sa fille. Peut-être qu'il y est heureux. On ne peut pas le savoir.");
  add(ANY(H("barthelemy_v=vaincu"), H("barthelemy_v=laisse")), "Barthélemy est resté sur la dernière marche du puits de la Descente, les pieds dans la farine. Le moulin de Brumefeuille ne tourne plus. Le village en a bâti un autre, plus bas, et le vieux pourrit doucement au bord du bief.");
  add(ALL(N(ANY(H("barthelemy_v=ami"), H("barthelemy_v=reconcilie"), H("barthelemy_v=epargne"), H("barthelemy_v=marche"), H("barthelemy_v=vaincu"), H("barthelemy_v=laisse"))), H("barthelemy:sort"), H("barthelemy=noye")),
    "Barthélemy est mort dans la citerne de Hautecombe, et les frères l'ont murée sur lui. À Brumefeuille, on a gravé son nom sous celui de sa fille, sur la croix de chêne, plus petit.");
  add(ALL(N(ANY(H("barthelemy_v=ami"), H("barthelemy_v=reconcilie"), H("barthelemy_v=epargne"), H("barthelemy_v=marche"), H("barthelemy_v=vaincu"), H("barthelemy_v=laisse"))), H("barthelemy:sort"), N(H("barthelemy=noye"))),
    "Barthélemy, le meunier, est quelque part sur les routes, ou à Hautecombe, à casser des pierres pour le cloître. On le voit passer, de loin en loin, un bandeau gris au bras. Il ne revient pas à Brumefeuille. On ne l'en empêcherait pas.");
  add(ALL(N(ANY(H("barthelemy_v=ami"), H("barthelemy_v=reconcilie"), H("barthelemy_v=epargne"), H("barthelemy_v=marche"), H("barthelemy_v=vaincu"), H("barthelemy_v=laisse"))), N(H("barthelemy:sort")), H("meunier=livre")),
    "Barthélemy, le meunier, a été jugé à Sorbe et envoyé casser des pierres. On ne sait pas ce qu'il est devenu. Le moulin de Brumefeuille tourne avec un autre meunier, qui ne parle pas au bief.");
  add(ALL(N(ANY(H("barthelemy_v=ami"), H("barthelemy_v=reconcilie"), H("barthelemy_v=epargne"), H("barthelemy_v=marche"), H("barthelemy_v=vaincu"), H("barthelemy_v=laisse"))), N(H("barthelemy:sort")), N(H("meunier=livre"))),
    "Barthélemy, le meunier, est parti de Brumefeuille en silence, un matin, avec un sac. Le moulin ne tourne plus. Le bief est clair, ou presque.");

  // ------------------------------------------------ the guardians (act II)
  T("Ferrance, Morteau et Thavar");
  add(H("livre=rendu"), "La chronique de l'an trois est revenue à l'Athénée, et Maître Corbin l'a fait enchaîner de nouveau, mais à une table où l'on peut s'asseoir. On y lit *Malvoran le Guérisseur*. Les étudiants en recopient la page, en cachette, puis plus en cachette du tout.");
  toi(H("livre=garde"), "La chronique de l'an trois est dans ta besace, ou dans ta maison, enveloppée dans une couverture. Personne ne l'a grattée, ni brûlée, ni recopiée par-dessus. Un jour, tu la donneras. Tu ne sais pas encore à qui.",
    "La chronique de l'an trois est restée là-haut, enveloppée dans une couverture, au fond d'une besace que quelqu'un a fini par ouvrir. Personne ne l'a grattée, ni brûlée. Elle attend qu'on la lise.");
  add(H("livre=vendu"), "La chronique de l'an trois est dans une bibliothèque d'Hautmont, ou au fond d'un poêle. L'homme aux gants blancs n'a jamais dit lequel. Bertille, la copiste, a quitté le Cercle avec sa part, et elle a ouvert une échoppe d'écrivain public à Ferrance. Elle refuse d'écrire les lettres d'amour.");
  add(H("livre=perdu"), "La chronique de l'an trois a disparu, une nuit, sur le pont des scories. Bertille la cherche encore dans les échoppes des fripiers. Elle dit qu'elle la reconnaîtrait à l'odeur.");
  add(H("greve=accord"), "Les souffleurs de verre de Ferrance ont leur carnet de veau, leurs apprentis payés, et une meneuse, Ombeline, qui ne sait toujours pas bien lire les chiffres et qui les fait lire à voix haute devant toute la rue. Le doyen ne passe plus par la rue des verriers.");
  add(H("greve=brisee"), "Les souffleurs de verre de Ferrance sont retournés à leurs fours. Ombeline n'y est pas retournée. Elle souffle le verre seule, dans une cave, à la lisière de la ville, et elle vend des fioles aux herboristes. Elle ne te salue pas quand tu passes.");
  add(H("greve=sang"), "Dans la rue des verriers, à Ferrance, il y a une plaque sur le mur de la verrerie, avec sept noms. Ombeline la nettoie tous les dimanches. Les sergents du prévôt ne passent plus par là.");
  add(ALL(H("ansgar=parle"), N(H("VF:tient_charline"))), "Ansgar Hildrand a ôté ses gants, à la Forge-Mère, et il ne les remet que pour sortir. Il dirige les forgerons de la voix. Sa fille lui écrit, ou passe, et ils se disputent sur la trempe, et ils ont l'air heureux.");
  add(ALL(H("ansgar=baume"), N(H("VF:tient_charline"))), "Ansgar Hildrand met le baume tous les soirs, seul, dans son atelier. Il parle un peu plus. Il a demandé une fois, à un apprenti, si on avait des nouvelles de sa fille. Il ne l'a pas redemandé.");
  add(ALL(H("ansgar=silence"), N(H("VF:tient_charline"))), "Ansgar Hildrand porte toujours ses gants. Il ne parle pas de sa fille. Il garde, sur l'établi de la Forge-Mère, un carnet qu'elle a oublié il y a six ans, et personne n'a le droit d'y toucher.");
  add(H("VF:tient_charline"), "Ansgar Hildrand a reçu le carnet de sa fille. Il ne sait pas le lire. Il le tient sur ses genoux, le soir, dans la Forge-Mère, et il en tourne les pages avec ses doigts raides, très lentement, pour regarder où elle frappait.");
  add(H("clou:reforge"), "Le feu de la forge d'Hildre, sous la montagne, s'est éteint. C'est Ansgar qui l'a éteint, de ses mains brûlées, après t'avoir rendu le Clou. Il dit qu'il ne le regrette pas. Il dit que c'était le dernier feu qu'on avait allumé pour une chaîne.");
  add(H("ida=dit"), "À Morteau, Ida tient la taverne de son père. Le petit Ivo, dès qu'il a su parler, a su qui était son père. Il le dit à tout le monde, au lavoir, au ponton, avec une fierté que personne n'arrive à lui reprocher.");
  add(H("ida=tu"), "À Morteau, Ida tient la taverne de son père, et le petit Ivo grandit sans savoir. Ida ne le lui dira pas. Elle a décidé, et c'est à elle.");
  add(H("ida=elle"), "À Morteau, Ida tient la taverne de son père. Elle a traversé la place, un jour, pour aller parler à un frère au bord du lavoir, et elle ne l'a jamais regretté. Le petit Ivo a un père qui lui écrit, ou qui passe, ou qui prie pour lui. Ça dépend des années.");
  add(H("ninon=sauvee"), "Ninon ne va plus au bout du ponton. Elle pêche avec son père, Herbin, qui s'est remis à se raser. Il fume les anguilles pour toute la rive.");
  add(H("ninon=partie"), "Ninon est à Saint-Sorlin, dans les collines, chez la sœur de son père. Il n'y a pas de lac à Saint-Sorlin. Elle a appris à traire les chèvres. Herbin vient la voir à chaque fête.");
  add(H("ninon=noyee"), "Au bout du ponton de Morteau, Herbin a cloué une planche neuve, la seule claire au milieu des grises. Il ne pêche plus de ce côté.");
  add(H("gages=payes"), "Au manoir de Thavar, Onfroi a inscrit dans son petit livre, à la date du jour, ton nom et le mot *avance*. Il n'a pas écrit le mot *remboursé*. Il l'écrira. Il est patient.");
  add(H("gages=thavary"), "Au manoir de Thavar, Onfroi, Guillemette et Josselin ont été payés de la main de Thavary, en or, sur la table des cuisines. Guillemette a acheté une vache. Josselin a fait ressemeler ses bottes. Onfroi a tout placé.");
  add(H("gages=argent"), "Au manoir de Thavar, la coupe de la dame Aude a été vendue à un orfèvre d'Orme-la-Dorée, et les gages des serviteurs payés pour deux ans. Onfroi dit que la dame Aude aurait approuvé. Il ne l'a pas connue. Il le dit quand même.");
  add(H("gages=non"), "Au manoir de Thavar, les trois serviteurs travaillent toujours sans gages. Onfroi tient ses comptes. Il en tient un de plus, depuis l'automne, qu'il ne montre à personne.");
  add(H("thavar_bornes=remises"), "Au bas du verger de Thavar, les bornes sont à leur place, au bord du ruisseau, la main sculptée tournée vers le manoir. Les fils de Groux passent devant sans les regarder.");
  add(H("thavar_bornes=jugees"), "Les bornes du verger de Thavar ont été remises par décision du bailli de Sorbe, avec un papier scellé. Groux l'a affiché dans sa cuisine, pour se le rappeler. Il paie, en plus, une amende en pommes.");
  add(H("thavar_bornes=forcees"), "Les bornes du verger de Thavar ont été remises une nuit, par les fils de Groux, sous la menace. Elles sont un peu de travers. Personne n'ose les redresser.");
  add(H("thavar_bornes=laissees"), "Les bornes du verger de Thavar sont restées où les fils de Groux les avaient poussées. Trente pas de vieux pommiers, ce n'est rien. Josselin ne ramasse plus les pommes de ce côté.");
  add(H("VF:tient_thavary"), "Dame Ermesinde de Thavar a reçu l'épée de sa petite-fille, posée sur la table de la grande salle. Elle l'a regardée longtemps. Elle n'a pas pleuré. Elle a fait refaire le toit de la chapelle, avec ce qu'elle avait, et elle y a fait graver deux noms au lieu d'un : Thavar, qui a eu peur, et Thavary, qui n'a pas eu peur.");
  add(ALL(N(H("VF:tient_thavary")), H("anneau:lettre")), "Dame Ermesinde de Thavar a fait porter l'Anneau jusque sous la montagne, par un vieil intendant aux bottes cirées, avec la lettre de son ancêtre. Elle dit à qui veut l'entendre qu'elle n'a jamais douté que la maison de Thavar finirait par descendre. Elle a seulement trouvé que ça prenait du temps.");
  add(ALL(N(H("VF:tient_thavary")), N(H("anneau:lettre"))), "Dame Ermesinde de Thavar tient toujours le manoir, avec trois serviteurs et beaucoup de dignité. Elle demande des nouvelles de l'Anneau à chaque voyageur. Elle ne demande pas de nouvelles de sa petite-fille. Elle les attend.");
  add(H("ivc_josse=mort"), "Josse Ferlan est enterré au bout du camp de Vaux, sans nom sur la planche. Ceux de Hautgrès qui sont encore en vie savent où.");
  add(H("ivc_josse=juge"), "Josse Ferlan a dit, devant ceux de Hautgrès, ce qu'il avait fait. Ils ne lui ont pas pardonné. Ils l'ont laissé vivre. Il porte l'eau, au camp, matin et soir, pour ceux de la haute Sorbe, et personne ne le remercie.");
  add(H("ivc_josse=parti"), "Josse Ferlan est parti du camp de Vaux sans se retourner, vers le sud. On dit qu'il soigne les malades de la fièvre grise, dans les villages du bas, sans se faire payer. On dit aussi qu'il boit.");
  add(H("ivc_josse=reste"), "Josse Ferlan commande toujours sa bande, au camp de Vaux, sous les tentes bleues. Il distribue le pain. Il n'a jamais dit merci pour le sixième.");
  add(ALL(N(ANY(H("ivc_josse=mort"), H("ivc_josse=juge"), H("ivc_josse=parti"), H("ivc_josse=reste"))), ANY(H("josse=soigne"), H("josse=menace"), H("josse=reconnu"))), "Josse Ferlan, l'homme du fossé de Morteau, a disparu dans les rangs du Cercle. On ne sait pas s'il est vivant.");
  add(H("V:josse_vu"), "Au fort de la Descente, un gant noir est resté par terre, sur le seuil d'une poterne. Celui qui l'a jeté ne l'a pas ramassé.");

  // ------------------------------------------------ the Order and the Circle
  T("L'Ordre et le Cercle");
  add(H("edrin=parle"), "Edrin, le Grand Maître, est mort l'hiver suivant, à Hautecombe, dans son fauteuil. Il avait parlé, sur le parvis, devant trois cents personnes. Ils étaient six. On le dit, maintenant, dans les commanderies, d'abord à voix basse, puis à voix normale.");
  add(H("edrin=tait"), "Edrin, le Grand Maître, est mort l'hiver suivant, à Hautecombe, sans avoir rien dit à personne. On a sculpté cinq mains sur son tombeau. La sixième place est restée lisse.");
  add(H("edrin=ecrit"), "Edrin, le Grand Maître, est mort l'hiver suivant. Ses sept feuillets, dictés une nuit, sont sous scellé à la commanderie du Val. Brann les a lus. Il dit qu'il les fera lire au chapitre. Il ne dit pas quand.");
  add(H("V:brann_fort"), "Brann, le sénéchal, a tenu la cour du fort de la Descente avec ses frères, pour la première fois depuis deux cents ans qu'un frère de l'Ordre n'était pas descendu plus bas que la porte. Il ne le raconte pas. Ceux qui étaient avec lui le racontent pour lui.");
  add(H("cloche:benie"), "La prière des veilleurs gravée à neuf sur la Cloche d'Ivo est celle qu'on a gravée à Hautecombe sur l'ordre de Brann. Il l'a choisie lui-même. Elle dit : *qu'il ne soit pas seul*.");
  add(H("jeton=ordre"), sombre
    ? "Le jeton de l'Ordre est toujours à ta ceinture. L'Ordre de la Main garde toujours une porte. Il ne sait toujours pas très bien ce qu'il y a derrière."
    : "Le jeton de l'Ordre est toujours à ta ceinture. Au Val, les frères ont changé la formule de leur serment, cet hiver : ils ne jurent plus de garder un monstre. Ils jurent de garder une porte, et ceux qui la tiennent.");
  add(H("jeton=cercle"), "Le jeton du Cercle est toujours dans ta poche. L'Athénée a ouvert ses bibliothèques, toutes, même celle du sous-sol, à qui le porte. On y a retrouvé, l'été suivant, la page arrachée du registre de Ferrance, pliée dans un traité de botanique. Personne ne sait qui l'y avait mise.");
  add(H("jeton=deux"), "Tu portes les deux jetons, le gris et l'os poli. L'Ordre et le Cercle se disputent toujours. Ils se disputent, maintenant, autour de la même table, où l'on garde pour toi un siège à chaque bout.");
  add(H("jeton=aucun"), "Tu n'as porté le jeton de personne. L'Ordre et le Cercle ne savent pas quoi faire de toi. C'est peut-être ce qu'ils ont de mieux à faire.");

  // ------------------------------------------------ the crowns (act III)
  T("L'Isarde et les couronnes");
  add(ALL(H("couronne=paix"), H("vendrel:demasque")), "La paix de l'Isarde tient. Nerys d'Aldaran et la duchesse Orsini l'ont signée au gué, sur une table de batelier, et elles ne s'aiment pas, et elles la tiennent. La mine d'Aldar a été rouverte, à la demande de Nerys, pour qu'on voie la galerie fermée. On l'a vue. On l'a refermée, en sachant pourquoi.");
  add(ALL(H("couronne=paix"), N(H("vendrel:demasque"))), "La paix de l'Isarde tient, à peu près. Personne ne sait très bien pourquoi on s'est battu. Les deux couronnes se surveillent de part et d'autre du gué, et les bateliers de Merle font payer le passage aux deux.");
  add(H("couronne=aldaran"), "Aldaran a gagné la guerre de l'Isarde. Le roi Aldric est mort à la Saint-André. Nerys règne. Elle a fait savoir à Vel-Orin qu'elle ne réclamerait pas les mines de sel. Elle n'a pas dit pourquoi. On dit qu'elle a lu des choses, dans les papiers de son père.");
  add(H("couronne=velorin"), "Vel-Orin a gagné la guerre de l'Isarde. La duchesse Orsini a ses mines de sel, et une rive de plus. Elle a fait frapper une monnaie neuve pour l'occasion. Morn, son maître-espion, dort toujours aussi peu.");
  add(H("merle:sauve"), "Merle-sur-Isarde a reconstruit ses deux granges et le toit de l'auberge. Les enfants y ramassent toujours les flèches dans le pré, mais ce sont de vieilles flèches, maintenant, rouillées, et ils en font des clôtures.");
  toi(H("nerys=portee"), "La lettre de Nerys est arrivée là où elle devait arriver. Elle n'en a jamais parlé. Elle t'a fait envoyer, l'été suivant, un livre de sa bibliothèque, en silence, avec une page cornée.",
    "La lettre de Nerys est arrivée là où elle devait arriver. Elle n'en a jamais parlé. Elle a fait chercher, l'été suivant, qui l'avait portée, pour lui envoyer un livre. On ne t'a pas trouvé{e}.");
  add(H("nerys=saisie"), "La lettre de Nerys a été prise dans la boue du camp par une main gantée de gris. Elle ne t'en a jamais voulu. Elle a écrit la suivante elle-même, à l'encre invisible.");
  add(H("nerys=trahie"), "La lettre de Nerys est restée sous le presse-papiers de cristal de Vendrel. Nerys l'a retrouvée, après. Elle ne t'a jamais reçu{e} à la cour. Elle a bien raison.");
  add(H("nerys=refusee"), "Nerys d'Aldaran a fait porter sa lettre par quelqu'un d'autre. Elle n'en a jamais parlé. Elle ne t'a jamais rien redemandé.");
  add(H("deserteur=gracie"), "Arnaud, le déserteur de Merle, a été gracié sur un bon de fourrage. Il est rentré chez lui, à la ferme de la veuve Morel, dont il a épousé la fille. Il garde le bon dans un cadre, au-dessus de la cheminée.");
  add(H("deserteur=evade"), "Arnaud, le déserteur, a passé la palissade avec toi, une nuit, et il a couru jusqu'aux collines. On dit qu'il garde des moutons sur l'autre versant, sous un autre nom. Il ne redescend jamais dans la vallée.");
  add(H("deserteur=pendu"), "Arnaud, le déserteur, a été pendu au camp d'Aldaran le lendemain de la nuit où tu as voulu le faire évader. On a enterré la clé avec lui. C'est le connétable qui l'a demandé.");
  add(H("deserteur=enrole"), "Arnaud, le déserteur, t'a servi de guide jusqu'au gué, et il en est revenu. Il porte encore le tabard bleu, au camp, pour la solde. Il dit qu'il n'a plus peur de passer les lignes la nuit. Il dit qu'il en a seulement assez.");
  add(H("fleches=ramenes"), "Tassin, le petit des flèches, a une jambe qui boite un peu. Tancrède, l'arbalétrier qui l'avait protégé, est rentré chez lui dans un cercueil vide, sur le bac des morts, et il s'est remis à marcher à Sainte-Orme. Il envoie à Tassin, chaque hiver, un carreau d'arbalète sculpté en oiseau.");
  add(H("fleches=livre"), "Tassin, le petit des flèches, est guéri. Tancrède, l'arbalétrier de Vel-Orin, a été échangé contre deux piquiers d'Aldaran à la fin de la guerre. Le curé de Merle dit qu'il ne regarde toujours pas les gens dans les yeux.");
  add(H("fleches=guillot"), "Tassin, le petit des flèches, a guéri de sa fièvre. Tiphaine, sa sœur, ne le laisse plus aller au pré. De l'arbalétrier qui l'avait protégé, on n'a jamais rien su.");
  add(H("fleches=tard"), "Au pré des Saules, à Merle, on a planté deux croix au bord du bras mort. Les enfants n'y ramassent plus de flèches.");
  add(H("otages=rachetes"), "Les six otages de Merle sont rentrés chez eux avec un reçu scellé de l'intendance de Vel-Orin. Ils l'ont cloué sur la porte de l'église.");
  add(H("otages=gracies"), "Les six otages de Merle sont rentrés chez eux sur trois lignes signées de la duchesse Orsini. Elle n'a jamais dit pourquoi. On suppose qu'elle a fait le compte.");
  add(H("otages=echanges"), "Les six otages de Merle ont été échangés contre un intendant de Vel-Orin qui vendait les tonnelets de sel aux vivandiers d'Aldaran. La duchesse a dit que c'était un bon prix.");
  add(H("otages=evades"), "Les six otages de Merle ont passé la Noue dans la brume, un matin, et les femmes de Merle les attendaient sur l'autre rive. On raconte encore l'histoire, à la veillée, et elle grandit chaque année.");
  add(H("otages=pendu"), "À Sainte-Orme, dans le cimetière des moniales, il y a une croix pour un homme de Merle qui n'était coupable que d'avoir été pris. Les cinq autres sont rentrés, plus tard. Ils ne parlent pas de lui.");
  add(H("otages=laisses"), "Les otages de Merle sont restés dans la grange aux dîmes jusqu'à la fin de la guerre. Ils en sont sortis, tous, plus maigres. Ils ne savent pas qui les a laissés là. Ils s'en doutent.");
  add(H("sel=denonce"), "Danese, l'intendant de la duchesse, a été pendu pour le sel. Les soldats de Vel-Orin mangent du sel blanc, maintenant. Ils ne savent pas pourquoi il a changé de goût.");
  add(H("sel=rendu"), "Danese, l'intendant de la duchesse, a remis le sel blanc dans les écuelles, et il a gardé sa place. Il te salue, quand il te croise, avec beaucoup de respect et un peu de haine.");
  add(H("sel=merle"), "Une nuit de la guerre, le sel de la duchesse est parti par l'ossuaire des moniales, jusqu'au chemin des vignes, et de là jusqu'à Merle. Mère Clotilde n'a jamais avoué. Les gens de Merle salent leurs anguilles avec, encore aujourd'hui.");
  add(H("sel=partage"), "Danese, l'intendant de la duchesse, vend toujours le sel gris aux soldats et le blanc aux vivandiers. Quatre couronnes neuves d'Orme-la-Dorée sont quelque part dans ta bourse, ou ne le sont plus.");
  add(ALL(H("morand:sort"), H("morand=sauve")), "Morand, le jeune frère pendu à l'orme de la croisée, a une cicatrice autour du cou qu'il cache sous un col de laine. Il est retourné à l'Ordre. Il fait les routes, maintenant, et il coupe toutes les cordes qu'il trouve aux arbres.");
  add(ALL(H("morand:sort"), H("morand=mort")), "Morand, le jeune frère de l'orme de la croisée, est enterré au pied de l'arbre, avec les deux autres. Quelqu'un a coupé la branche.");
  add(ALL(H("morand:sort"), H("morand=laisse")), "À l'orme de la croisée, sur la route de Fort-Gaudre, trois cordes pendent encore à la branche basse, vides. Personne n'ose les enlever.");
  add(ALL(H("freres_gaudre:sort"), H("freres_gaudre=libres")), "Frère Baudouin et les frères du cachot de Gaudre tiennent le fort, maintenant. Ils ont fait de la geôle une remise à grain. Ils y descendent en sifflant.");
  add(ALL(H("freres_gaudre:sort"), H("freres_gaudre=morts")), "Les frères du cachot de Gaudre sont enterrés derrière la chapelle du fort. Leurs noms sont sur le mur : Baudouin, Hugon, Lothaire, et les autres. Onze lettres du Val sont clouées dessous.");
  add(ALL(H("freres_gaudre:sort"), H("freres_gaudre=tard")), "Les frères du cachot de Gaudre ont attendu la douzième promesse du Val. Elle est venue trop tard pour deux d'entre eux. Baudouin le sait. Il ne te le reproche pas. Il compte, simplement.");
  add(ALL(H("cloche_gue:sort"), H("cloche_gue=reparee")), "La Gaudrine, la cloche du gué, sonne de nouveau, au-dessus de l'Isarde, à chaque crue et à chaque brouillard. Les bateliers disent qu'elle sonne plus juste qu'avant.");
  add(ALL(H("cloche_gue:sort"), H("cloche_gue=muette")), "La Gaudrine, la cloche du gué, pend toujours sans battant, au-dessus de l'Isarde. Les bateliers passent le brouillard à l'oreille, en s'appelant d'une barque à l'autre.");
  add(H("aymar=livre"), "Sire Aymar, commandeur de Gaudre, a été jugé par l'Ordre au Val. Brann l'a fait enfermer dans une cellule qui donne sur le gué. Il a demandé qu'on mette son épée dans la chapelle. On l'a fait.");
  add(H("aymar=tue"), "Sire Aymar, commandeur de Gaudre, est enterré sans son épée. On a remis l'épée de Gaudre à Baudouin, qui ne la porte pas.");
  add(H("aymar=enfui"), "Sire Aymar, commandeur de Gaudre, s'est enfui vers le sud avec l'épée de Gaudre. On le dit à Orme-la-Dorée, ou dans les collines, ou mort. On le cherche sans beaucoup d'entrain.");
  // Vendrel: the last state wins
  add(H("VF:vendrel_fini"), "Maître Vendrel n'est jamais remonté. À Hautmont, on a fait dire une messe pour le premier conseiller, mort au service du roi, sans dire où. Sa maison est allée à la couronne, faute d'héritier, avec une paire de gants blancs que personne n'a réclamée.");
  add(H("VF:vendrel_pris"), "Maître Vendrel n'est jamais remonté. Il est dans l'eau, maintenant, avec le reste. Il arrive, dans les puits du nord, qu'une voix polie demande l'heure à ceux qui se penchent.");
  add(ALL(N(ANY(H("VF:vendrel_fini"), H("VF:vendrel_pris"))), ANY(H("vendrel_v=mort"), H("vendrel_v=brise"))), "Maître Vendrel est mort sous la montagne, à la forge d'Hildre. Il ne reste de lui qu'une paire de gants blancs, posés à plat sur une enclume, et que personne n'ira chercher.");
  add(ALL(N(ANY(H("VF:vendrel_fini"), H("VF:vendrel_pris"))), H("vendrel_v=enchaine")), "Maître Vendrel actionne le soufflet de la forge d'Hildre, enchaîné par la cheville, à la place de son secrétaire. On ne sait pas combien de temps il tiendra. Il trouve toujours un autre moyen, disait-il.");
  add(ALL(N(ANY(H("VF:vendrel_fini"), H("VF:vendrel_pris"))), H("vendrel_v=epargne")), "Maître Vendrel est remonté seul, sans arme et sans tache. Il vit à Hautmont, dans une petite maison, sans charge. Il reçoit beaucoup. Nerys le fait surveiller. Il le sait. Il trouve ça très bien fait.");
  add(ALL(N(ANY(H("VF:vendrel_fini"), H("VF:vendrel_pris"))), ANY(H("vendrel_v=depouille"), H("vendrel_v=vainqueur"), H("vendrel_v=ombre_brulee"), H("vendrel_v=ombre_eclairee"), H("vendrel_v=ombre_dite"), H("vendrel_v=ombre_vaincue"))), "De Maître Vendrel, il reste à Hautmont un bureau vide, un presse-papiers de cristal, et des comptes que personne n'arrive à démêler. Ce qui était descendu sous la montagne n'est pas remonté.");
  // Veyra
  add(H("VF:veyra_noyee"), "Veyra de Hautcastel est au fond de la Brèche, dans la main de celui qu'elle voulait délivrer. Il l'a tenue, à la fin, comme il tenait la porte. Le Cercle a fait graver son nom à l'Athénée, sans dire comment elle était morte.");
  add(ALL(N(H("VF:veyra_noyee")), H("VF:veyra_face")), "Veyra de Hautcastel est remontée de la Descente. Elle a repris son épée grise, celle qu'elle avait posée sur un genou de pierre. Elle ne sert plus ni l'Ordre ni le Cercle. Elle fait les routes, et quand on lui demande ce qu'elle garde, elle dit : une porte. On ne comprend pas.");
  add(ALL(N(H("VF:veyra_noyee")), N(H("VF:veyra_face")), ANY(H("veyra:ralliee"), H("VF:veyra_contre"))), "Veyra de Hautcastel est remontée de la Descente avec ses gants noirs, qu'elle a brûlés au bord du glacier. Elle a dit au Cercle ce qu'elle avait vu. Le Cercle l'a écoutée. Pour une fois.");
  add(ALL(N(H("VF:veyra_noyee")), N(H("VF:veyra_face")), N(ANY(H("veyra:ralliee"), H("VF:veyra_contre"))), H("veyra=morte")), "Veyra de Hautcastel est morte au fort de la Descente, de ta main. Ses gants noirs l'ont remontée. Ils l'ont enterrée à Hautcastel, avec son épée grise et ses gants noirs.");
  add(ALL(N(H("VF:veyra_noyee")), N(H("VF:veyra_face")), N(ANY(H("veyra:ralliee"), H("VF:veyra_contre"), H("veyra=morte")))), "Veyra de Hautcastel est remontée de la Descente en silence à personne. Elle rêve encore, la nuit, d'une femme dans l'eau. Elle ne lui répond plus.");
  // the master
  toi(ANY(H("V:maitre_ramenee"), H("maitre=sauve")), "Ta maîtresse est vivante. Elle ne sait plus écrire, elle cherche ses mots, elle a peur de l'eau qui dort. Tu lui lis sa propre lettre, un soir, à voix haute. Elle écoute jusqu'au bout. Puis elle dit : « C'est bien écrit, pour quelqu'un qui ne savait pas. » Et elle rit.",
    "Ta maîtresse est vivante. Elle ne sait plus écrire, elle cherche ses mots, elle a peur de l'eau qui dort. Elle demande de tes nouvelles à chaque voyageur. Personne ne sait lui en donner. Elle relit sa lettre, la sienne, celle que tu as laissée sur la grève, et qu'on lui a rapportée.");
  toi(ALL(H("maitre=mort"), N(H("V:maitre_ramenee"))), "Ta maîtresse est sous une pierre sans nom, au-dessus de Merle. Tu y retournes, au printemps, avec un ciseau, et tu graves son nom. Tu graves aussi, dessous, une main ouverte. Tu ne sais pas si elle aurait aimé. Tu le fais quand même.",
    "Ta maîtresse est sous une pierre sans nom, au-dessus de Merle. Personne n'y grave son nom. Les ronces poussent dessus, et une main ouverte, que quelqu'un y a peinte à la chaux, s'efface à chaque pluie.");
  toi(ALL(H("maitre=perdu"), N(H("V:maitre_ramenee"))), "Ta maîtresse est dans l'eau. Il arrive qu'en te penchant sur une source, tu entendes *tiens ta garde haute*. Tu te tais. Tu tiens ta garde haute.",
    "Ta maîtresse est dans l'eau. Il arrive que l'eau qui vient jusqu'à toi dise *tiens ta garde haute*. Tu te tais. Tu tiens ta garde haute.");

  // ------------------------------------------------ the tainted land (act IV)
  T("La Sorbe souillée");
  add(null, "Anselme le colporteur fait toujours les routes, avec sa mule et sa charrette, et ce qu'il ne faut pas. On le croise à Brumefeuille, à Ferrance, à Merle. Il vend des cartes du Sceau, maintenant, avec six mains dessus. Elles sont toutes fausses. Elles se vendent très bien.");
  add(H("anselme=denonce"), "Depuis Vaux, Anselme ne vend plus de fioles. Il dit à qui veut l'entendre qu'on l'a dénoncé par jalousie. Il ne dit pas de qui.");
  add(H("anselme=source"), "La source qu'Anselme vendait en fioles coule pour tout le camp de Vaux, derrière une porte de planches que Garance a fait poser. Anselme passe devant en ronchonnant, et il en boit, en cachette.");
  toi(H("anselme=associe"), "Anselme t'envoie ta part, chaque saison, en petite monnaie, par des gens qu'il croise. Elle arrive toujours. Il dit que c'est le marché le plus honnête qu'il ait jamais passé. C'est sans doute vrai.",
    "Anselme envoie ta part, chaque saison, en petite monnaie, à une adresse où personne ne répond. Il continue. Il dit que c'est le marché le plus honnête qu'il ait jamais passé.");
  add(H("saintgilles=partage"), "Ceux de Saint-Gilles ont passé l'hiver dans la scierie de Vaux, avec les bœufs de Fulcran sous les mêmes bâches. Les vieux disent que les bœufs tiennent chaud. Fulcran dit que les vieux sentent mauvais. Ils sont tous vivants au printemps.");
  add(H("saintgilles=achete"), "Ceux de Saint-Gilles ont eu la scierie de Vaux pour l'hiver, contre trente sous. Les bœufs de Fulcran ont dormi dans le verger, sous ses propres couvertures. Ils ne sont pas morts. Probablement, avait-il dit. Il avait raison.");
  add(H("saintgilles=cave"), "Ceux de Saint-Gilles ont passé l'hiver dans la cave de Vaux, d'où tu avais chassé la chose de la flaque. Ils l'ont blanchie à la chaux. Ils y ont peint, au-dessus de la porte, une main ouverte, et une sixième, plus petite, un peu à l'écart.");
  add(H("saintgilles=charretiers"), "Ceux de Saint-Gilles ont passé l'hiver sous des toiles, au bord du camp, parce que Garance a choisi les bœufs. Elle avait raison pour le grain. Trois des vieux ne sont pas arrivés au printemps.");
  toi(H("passe:profite"), "Les terres de Saint-Gilles-des-Prés, que tu as rachetées pour rien il y a sept ans, valent toujours de l'or. Tu y es retourné{e}, une fois. Tu as rendu les titres à ceux qui étaient revenus. Ou tu ne les as pas rendus. C'est entre toi et ceux qui n'étaient pas revenus.",
    "Les terres de Saint-Gilles-des-Prés, que tu as rachetées pour rien il y a sept ans, valent toujours de l'or. Les titres sont à ton nom, dans le coffre d'un notaire de Sorbe, et personne ne vient les réclamer. Ceux qui sont revenus y labourent sans titre.");
  toi(H("passe:fui"), "Tu es retourné{e} à Saint-Gilles-des-Prés, une fois, après. Tu as cherché ceux qui étaient restés. Tu en as trouvé deux. Ils t'ont reconnu{e}. Ils t'ont offert à boire.",
    "À Saint-Gilles-des-Prés, deux de ceux qui étaient restés sont encore en vie. Ils ne savent pas où tu es. Ils t'auraient offert à boire.");
  add(H("passe:aide"), "À Saint-Gilles-des-Prés, il y a un temple, et dans le temple, une vieille femme qui se souvient de quelqu'un qui portait les malades, l'un après l'autre, jusqu'à ce que le temple soit plein. Elle ne sait pas ton nom. Elle se souvient de ton dos.");
  add(ALL(H("enfants:sort"), H("enfants=ramenes")), "Les enfants de Vaux sont redescendus de Hautecombe avec toi, les cinq, par le chemin des mulets, en chantant. Clarisse a grandi d'un pied. Loys veut entrer dans l'Ordre. Babet ne lâche plus la main d'Aymon.");
  add(ALL(H("enfants:sort"), H("enfants=abbaye")), "Les enfants de Vaux ont passé l'hiver à l'abbaye de Hautecombe, dans la chambre chaude au-dessus des cuisines. Frère Amaury leur a appris à tricoter. Ils tricotent des bonnets pour les frères, qui les portent pendant l'office.");
  add(ALL(H("pelerins:sort"), ANY(H("IVD:pel_eau"), H("IVD:pel_aubin"), H("IVD:pel_marque"))), "Gaspard, le frère de Bastienne, est redescendu de la montagne. Il a jeté sa médaille de pèlerin dans la Sorbe. Bastienne lave le linge au camp de Vaux et le fait sécher sur la borne où elle l'a attendu.");
  add(ALL(H("pelerins:sort"), N(ANY(H("IVD:pel_eau"), H("IVD:pel_aubin"), H("IVD:pel_marque")))), "Gaspard, le frère de Bastienne, est resté dans la montagne. Bastienne a sa médaille. Elle la porte. Elle ne monte plus sur la borne au bout du camp.");
  add(ALL(H("refuge:sort"), H("refuge=gueri")), "Joachim, le fils du chasseur, est guéri. Il chasse avec son père Firmin au-dessus du refuge, et il ne boit plus que l'eau qu'il a regardée.");
  add(ALL(H("refuge:sort"), H("refuge=marque")), "Joachim, le fils du chasseur, est guéri. La souillure qui le rongeait est dans ta main, maintenant, avec le reste. Il ne le sait pas. Son père, si.");
  add(ALL(H("refuge:sort"), H("refuge=abrege")), "Firmin le chasseur a enterré son fils sous le refuge de la Fenne, dans la terre qu'on ne gèle pas. Il ne t'a jamais remercié{e}. Il ne t'a jamais reproché. Il t'a laissé ses meilleures moufles.");
  add(ALL(H("refuge:sort"), H("refuge=descendu")), "Joachim, le fils du chasseur, a tenu jusqu'à Vaux. L'herboriste du camp l'a soigné, ou a essayé. Il est têtu, disait-il. Il tient ça de sa mère.");
  add(ALL(H("dragon=purifie"), H("ardhal:allie")), fin === "detruit"
    ? "Ardhal est remonté sur son glacier après avoir soufflé son dernier feu. Il dort, blanc, au fond de son antre. On dit qu'il ne se réveillera plus. On dit aussi qu'il a dit, avant de dormir, qu'il en avait assez vu."
    : "Ardhal est remonté sur son glacier, blanc comme la neige d'avant l'aube. Les chasseurs de la Fenne le voient voler, certains matins, très haut, au-dessus du massif. Il ne descend plus vers les villages. Il n'en a plus besoin.");
  add(ALL(H("dragon=purifie"), N(H("ardhal:allie"))), "Ardhal dort dans son glacier, blanc et lavé. Il ne doit rien à personne, il l'a dit. Les chasseurs de la Fenne disent qu'il ronfle.");
  add(H("dragon=tue"), "Le vieux dragon blanc de la Fenne est mort. Ses os sont restés sous la glace, dans la Descente. Les chasseurs du refuge disent que le glacier recule, depuis, d'un pas par an. Ils ne savent pas si c'est un bien.");
  add(ALL(H("dragon=lie"), H("V:ardhal_libere")), "Ardhal s'est enfoncé dans la glace, libre, quand tu as ouvert la main. Il ne te doit rien. Il a dit qu'il s'en souviendrait. Les dragons ont beaucoup de mémoire.");
  add(ALL(H("dragon=lie"), N(H("V:ardhal_libere"))), "Ardhal est toujours sous ta main, quelque part dans la glace de la Fenne. Tu le sens, la nuit, comme on sent un chien qui tire sur sa chaîne. Il ne tire plus très fort.");

  // ------------------------------------------------ the Descent (act V)
  T("La Descente");
  add(H("noyes_puits=nommes"), "Les noyés du puits de la Descente sont partis, un à un, chacun à son nom. Jehan Loriot. La mère Gertrude. Les trois petits Fournier. Leurs familles ne le sauront jamais. Toi, tu le sais.");
  add(H("noyes_puits=commandes"), "Les noyés du puits de la Descente se sont écartés devant ta main tachée. Ils attendent toujours, assis sur leurs marches. Ils attendent celle ou celui qui leur donnera un autre ordre.");
  add(H("noyes_puits=combattus"), "Les noyés du puits de la Descente sont retournés à l'eau, sous tes coups. L'eau les gardera. Elle garde tout.");
  add(H("noyes_puits=laisses"), "Les noyés du puits de la Descente attendent toujours sur leurs marches. Quelqu'un viendra, un jour, avec leurs noms.");
  add(H("secretaire=libre"), "Lucain Lormier, le secrétaire aux lettres, est remonté libre de la forge. Il s'est fait copiste à Ferrance. Il a lu toutes les lettres de Vendrel avant de les cacheter, et il s'en souvient. Il ne les recopie pour personne.");
  add(H("secretaire=laisse"), "Lucain Lormier, le secrétaire, est resté enchaîné au soufflet de la forge d'Hildre. Le soufflet s'est arrêté, à un moment. On ne sait pas si c'est lui qui s'est arrêté avant.");
  add(H("verset=aubin"), "Les moines de Saint-Ivo ont fini leur verset, en bas, avec la voix d'un frère qui était à la taverne, cette nuit-là. Le lac de Morteau a baissé d'un pied au printemps. On revoit le toit de la chapelle.");
  add(H("verset=pip"), "Les moines de Saint-Ivo ont fini leur verset, en bas, sur un air qu'une petite lumière fredonnait. Le lac de Morteau a baissé d'un pied au printemps. On revoit le toit de la chapelle.");
  add(H("verset=lu"), "Les moines de Saint-Ivo ont fini leur verset, en bas, quand quelqu'un l'a lu, mal, sans musique, à l'envers d'une page mouillée. Ça a suffi. Le lac de Morteau a baissé d'un pied au printemps.");
  add(H("verset=laisse"), "Les moines de Saint-Ivo chantent toujours, en bas, dans leur nef noyée, et s'arrêtent toujours au même mot. Quelqu'un leur dira la fin, un jour.");
  add(H("page=renvoye"), "Galien, le page de Veyra, est rentré à Ferrance avec ton mot pour sa mère. Il vend des chandelles dans la boutique. Il n'a plus jamais touché une arbalète.");
  add(H("page=messager"), "Galien, le page de Veyra, a rapporté le gant gris de l'ossuaire à la commanderie du Val. Brann l'a fait accrocher dans la salle des Cinq Mains, sous un écu vide. Galien est novice de l'Ordre. Il a quinze ans et l'air très sérieux.");
  add(H("page=reste"), "Galien, le page de Veyra, est resté au fort de la Descente, avec son arbalète trop grande. Il n'a plus peur. Il dit que c'est grâce à toi. Ce n'est pas tout à fait un compliment.");
  add(H("page=laisse"), "Galien, le page de Veyra, a monté sa garde au coin du mur du fort jusqu'au bout. Sa mère l'attend à Ferrance, dans la boutique de chandelles. Elle laisse une bougie allumée à la fenêtre.");
  add(H("pelerins=medailles"), "Les sept médailles des pèlerins gelés sont revenues dans leurs villages, une à une : Sorbe, Ferrance, Morteau, et les autres. Tu les as portées toi-même, ou tu les as confiées à des gens sûrs.");
  add(H("pelerins=noms"), "Les sept pèlerins gelés de la Descente ont des noms, maintenant, que tu sais par cœur. Tu les dis, parfois, avant de dormir.");
  add(H("pelerins=brises"), "Les sept pèlerins gelés de la Descente sont tombés en morceaux de glace quand tu as voulu reprendre leurs médailles. Tu en as rapporté une. Une seule. Tu ne sais pas à qui elle était.");
  add(H("pelerins=laisses"), "Les sept pèlerins gelés de la Descente sont toujours dans leur colonne de glace, debout, les mains jointes. Ils montent toujours. Ils n'arriveront pas.");
  add(H("dette=rendue"), "Ce que tu as laissé à ses pieds, au fond de la Brèche, y est resté. Personne n'ira le chercher. C'est la première chose qu'on lui ait donnée en quatre cents ans.");
  add(H("VF:lettre_lue"), "La lettre de Thavar a été lue à celui à qui elle était adressée, quatre cents ans après qu'on l'a écrite. Elle a fait rire. Thavar ne l'aurait jamais cru.");

  // ------------------------------------------------ the companions
  T("Ceux qui sont venus");
  if (fin === "libere") add({ present: "pip" }, "Pip ne sait pas qui suivre, de toi ou de lui. Alors il fait les deux. Il passe une saison sur ton épaule et une saison dans la main de Malvoran, et il raconte à chacun ce que fait l'autre, en s'embrouillant, et en riant.");
  if (fin === "rescelle") add(ALL({ present: "pip" }, N(H("VF:tient_pip")), H("VF:tient_heros")), "Pip est remonté avec les autres. Il redescend, certaines nuits, tout l'escalier des mains, jusqu'à la porte de bronze, et il brille dans la fente, longtemps, pour que tu le voies d'en bas.");
  if (fin === "libere") { /* Pip between the two of them: told just above */ }
  else if (fin === "rescelle") add(ALL({ present: "pip" }, N(H("VF:tient_pip")), N(H("VF:tient_heros"))), "Pip est resté avec toi. Sa lumière a changé, depuis le fond : elle est plus chaude, plus dorée. Il pose encore des questions. Il en pose une de plus, chaque soir : s'il fait jour, en bas. Tu dis que oui.");
  else if (fin === "detruit") add({ present: "pip" }, "Pip est resté avec toi. Sa lumière n'est jamais revenue tout à fait. Il pose moins de questions. Il ne te reproche rien. Il se pose sur ta main, le soir, au creux de la paume, et il y tient tout entier.");
  else if (fin === "marche") add({ present: "pip" }, "Pip est resté avec toi. C'est le pire, et c'est le mieux. Il ne brille presque plus. Il ne te quitte pas. Il ne pose plus de questions.");
  else if (fin === "maitre") add({ present: "pip" }, "Pip n'est jamais redescendu. On dit, dans les villages de la Sorbe, qu'une petite lumière passe parfois au-dessus des puits, la nuit, et que l'eau, sous elle, se tait.");
  else add({ present: "pip" }, "Pip s'est éteint le dernier. Il a brillé jusqu'au bout, au-dessus de l'eau, pour que tu le voies.");
  if (fin === "marche") add({ met: "coliane" }, "Coliane ne t'a jamais reparlé. On la dit dans la haute Sorbe, chasseuse de souillure, à Hautgrès qu'elle relève avec sept survivants et un vieillard. On dit qu'elle crache par terre quand on prononce ton nom. On dit qu'elle le prononce, parfois, seule.");
  else {
    add(ALL({ met: "coliane" }, H("coliane_arc=justice")), "Coliane est rentrée à Hautgrès avec les sept qui restaient. Ils relèvent le village, pierre par pierre, au-dessus de l'écluse murée. Elle chasse encore la souillure, quand il en reste. Elle garde, à chaque printemps, une pomme pour toi, et elle finit par la manger, en silence.");
    add(ALL({ met: "coliane" }, H("coliane_arc=pitie")), "Coliane chasse la souillure dans la haute Sorbe, seule, comme avant. Elle ne sait toujours pas si elle a eu raison de laisser partir Josse. Elle a décidé de ne jamais le savoir.");
    add(ALL({ met: "coliane" }, H("coliane_arc=vengeance")), "Coliane chasse la souillure dans la haute Sorbe, seule. Elle n'a plus rien de propre, dit-elle. Elle garde un couteau de moins dans sa ceinture, celui de Hautgrès. Elle l'a laissé dans le camp de Vaux.");
    add(ALL({ met: "coliane" }, N(ANY(H("coliane_arc=justice"), H("coliane_arc=pitie"), H("coliane_arc=vengeance")))), "Coliane chasse la souillure, quelque part dans les Marches. Elle n'est jamais retournée à Hautgrès. Elle dit qu'elle ira quand il n'y aura plus d'écluse nulle part.");
    add(ALL({ met: "coliane" }, H("VF:galet_jete")), "Le galet de Hautgrès est au fond de la Brèche. Il y a, depuis, quelque chose de propre dedans.");
  }
  add(H("gloup=tue"), "Dans la grotte du Rouvre, sur la roche, il reste une petite tache sèche, de la taille d'un pain. Les bêtes ne s'en approchent pas. Elles ne savent pas pourquoi.");
  add(ALL({ met: "gloup" }, H("gloup_arc=eau"), N(H("VF:tient_gloup"))), "Gloup est resté sous la tour d'Hildre, avec ceux de sa vase. On entend, la nuit, sous la cour, une chanson faite de bulles. Les réfugiés de Vaux disent que c'est le vent.");
  add(ALL({ present: "gloup" }, H("gloup_arc=propre"), N(H("VF:tient_gloup"))), "Gloup est propre, d'une clarté laiteuse, et il le reste. Il se colle à tes bottes. Il aime le pain, les chansons, et qu'on le lave le dimanche, même s'il n'en a plus besoin.");
  add(ALL({ present: "gloup" }, N(H("gloup_arc=propre")), N(H("VF:tient_gloup"))), "Gloup est resté ce qu'il est, de la couleur de l'eau d'en bas. Il se colle à tes bottes. Les enfants des villages ont peur de lui la première fois, et plus jamais après.");
  add(ALL({ met: "charline" }, N(H("VF:tient_charline")), H("charline_arc=forge")), "Charline a repris la Forge-Mère de Ferrance. Elle y forge des socs, des fers, des clous de charpente, et jamais de chaîne. Son père s'assied près du feu et lui dit qu'elle frappe trop fort. Elle frappe plus fort.");
  add(ALL({ met: "charline" }, N(H("VF:tient_charline")), H("charline_arc=brule")), "Charline a brûlé ce qui restait des mensonges du Cercle. Elle enseigne le feu à qui veut l'apprendre, dans une grange, sans diplôme et sans livre interdit. Ses élèves n'ont pas peur d'eux-mêmes. Elle y veille.");
  add(ALL({ met: "charline" }, N(H("VF:tient_charline")), H("charline_arc=pardon")), "Charline vit à Ferrance, près de son père. Elle n'a pas repris la forge. Elle lit, elle écrit, elle allume le feu de la cuisine d'un claquement de doigts, et Ansgar fait semblant de ne pas voir, et il sourit.");
  add(ALL({ met: "charline" }, N(H("VF:tient_charline")), N(ANY(H("charline_arc=forge"), H("charline_arc=brule"), H("charline_arc=pardon")))), "Charline Hildrand est retournée à ses livres. On la dit à l'Athénée, ou loin de l'Athénée. On dit qu'elle cherche toujours la page arrachée.");
  add(ALL({ met: "aubin" }, N(H("VF:tient_aubin")), H("aubin_arc=pretre")), "Frère Aubin a rouvert la chapelle de Saint-Ivo, maintenant que le lac a baissé. Il y dit l'office seul, puis avec deux novices, puis avec cinq. Il chante faux. Personne n'ose le lui dire.");
  add(ALL({ met: "aubin" }, N(H("VF:tient_aubin")), H("aubin_arc=quitte")), "Aubin a quitté l'habit. Il vit à Morteau, il répare les barques, et il apprend à son fils à nager. Il prie encore, le soir, sans le dire, pour ses frères et pour un homme de pierre.");
  add(ALL({ met: "aubin" }, N(H("VF:tient_aubin")), H("aubin_arc=offrande")), "Frère Aubin est remonté. Il avait promis d'aller à la Brèche à la place des autres. Il y est allé. Il en est revenu, parce que d'autres y sont allés avec lui. Il ne sait pas quoi faire de ce qui lui reste de vie. Il le passe à soigner.");
  add(ALL({ met: "aubin" }, N(H("VF:tient_aubin")), N(ANY(H("aubin_arc=pretre"), H("aubin_arc=quitte"), H("aubin_arc=offrande")))), "Frère Aubin est retourné à Morteau, dans sa sacristie, au bord du lac. Il ne prie plus. Il écoute.");
  add(ALL({ met: "thavary" }, H("thavary:trahit"), H("thavary_v=rendu")), "Thavary de Thavar est remontée chez sa grand-mère, sans l'Anneau, qu'elle t'a rendu. Elle ne parle jamais de la chapelle. Elle dort mal. Elle dort.");
  add(ALL({ met: "thavary" }, H("thavary:trahit"), H("thavary_v=garde")), "Thavary de Thavar a gardé l'Anneau. Elle est rentrée au manoir avec, et elle l'a posé sur la table de sa grand-mère. Ermesinde ne l'a pas touché. Il y est encore.");
  add(ALL({ met: "thavary" }, H("thavary:trahit"), ANY(H("thavary_v=vaincue"), H("thavary_v=remonte"))), "Thavary de Thavar est remontée chez sa grand-mère. Elle a laissé son épée au fort de la Descente. Elle s'entraîne avec un bâton, dans le verger, tous les matins, comme une novice.");
  add(ALL({ met: "thavary" }, H("thavary:trahit"), N(ANY(H("thavary_v=rendu"), H("thavary_v=garde"), H("thavary_v=vaincue"), H("thavary_v=remonte")))), "Thavary de Thavar est partie à la chapelle de la Descente, et on ne l'a plus revue. On dit qu'elle sert Vel-Orin, ou personne. Sa grand-mère met encore son couvert.");
  add(ALL({ met: "thavary" }, N(H("thavary:trahit")), N(H("VF:tient_thavary")), H("thavary_arc=honneur")), "Thavary de Thavar est rentrée au manoir. Elle a payé les dettes de sa maison, toutes, une à une, avec ce qu'elle avait et ce qu'elle a gagné. Il ne lui reste rien. Elle n'a jamais eu l'air aussi riche.");
  add(ALL({ met: "thavary" }, N(H("thavary:trahit")), N(H("VF:tient_thavary")), H("thavary_arc=liberee")), "Thavary de Thavar a laissé le manoir à sa grand-mère et elle est partie sur les routes, sans dette et sans nom à porter. Elle dort sur le dos, les bras ouverts. Elle ronfle.");
  add(ALL({ met: "thavary" }, N(H("thavary:trahit")), N(H("VF:tient_thavary")), H("thavary_arc=vengeance")), "Thavary de Thavar a remis l'épée de Thavar au mur. Elle va de cour en cour, et elle raconte, partout, ce que les cinq ont fait. On la reçoit de moins en moins. Elle s'en moque.");
  add(ALL({ met: "thavary" }, N(H("thavary:trahit")), N(H("VF:tient_thavary")), N(ANY(H("thavary_arc=honneur"), H("thavary_arc=liberee"), H("thavary_arc=vengeance")))), "Thavary de Thavar est rentrée au manoir, auprès de sa grand-mère. Elle taille le verger. Elle ne dit pas ce qu'elle a vu sous la montagne.");

  // ------------------------------------------------ the hero
  T("Toi");
  toi({ mark: { min: 4 } }, fin === "maitre" ? "Ta main gauche est noire jusqu'à l'épaule. Elle ne te fait plus mal du tout." : "Ta main gauche est restée noire jusqu'au coude. Elle ne te fait plus mal. Elle a chaud, toujours, même l'hiver. Tu la gardes dans ta poche quand tu passes près d'un puits.",
    "Ta main gauche est noire jusqu'à l'épaule. Elle ne te fait plus mal du tout.");
  add({ mark: { min: 2, max: 3 } }, "La tache de ta paume ne s'en va pas. Elle a pâli, certains jours, foncé d'autres. Tu as cessé de la regarder. Tu rêves d'eau, encore, une nuit par semaine.");
  add(ALL({ mark: { max: 1 } }, H("marque:eclat")), "La tache de ta paume a presque disparu. Il en reste un point, comme une écharde. Tu as rendu l'éclat, à la fin, ou tu l'as perdu, ou il s'est éteint. Ta main est à toi.");
  add(ALL({ mark: { max: 0 } }, N(H("marque:eclat"))), "Ta main est propre. Elle l'a toujours été. Ça t'a coûté, souvent. Tu ne le regrettes pas.");
  add(H("passe:ordre"), "Tu as porté le gant gris de l'Ordre trois ans, à garder des routes où il ne passait personne. Tu sais, maintenant, ce qu'on gardait au bout de ces routes.");
  add(H("passe:cercle"), "Tu as recopié, à l'Athénée, des livres que tu n'avais pas le droit de lire jusqu'au bout. Tu as lu la fin, maintenant. Tu sais pourquoi on te l'interdisait.");
  add(H("passe:libre"), "Tu n'as servi personne, avant, que ta propre parole. Tu ne sers toujours personne. Elle a pris du poids, ta parole.");
  return e;
}

// The endings' companions: the relics, by ending.
function cles(fin) {
  var e = [];
  if (fin === "rescelle") e.push("Les trois clés sont dans la porte, à leur place, et chacune y tient sa part. Le Clou de Hildre, la Cloche d'Ivo, l'Anneau de Thavar.");
  else if (fin === "detruit") e.push("Les trois clés ont fondu dans le feu blanc. Il n'y a plus de Clou, plus de Cloche, plus d'Anneau. Les maisons qui les gardaient n'ont plus rien à garder. Elles s'y font.");
  else if (fin === "libere") {
    e.push(L({ relic: "clou" }, "Tu as rapporté le Clou de Hildre à la Forge-Mère. Ansgar l'a posé en travers de l'enclume noire. Il n'en bougera plus. Il n'a plus rien à fermer."));
    e.push(L({ relic: "cloche" }, "Tu as rapporté la Cloche d'Ivo à Morteau. On l'a posée sur la pierre de l'autel de la chapelle, maintenant que le lac a baissé. Elle sonne seule, de temps en temps. On dit que c'est quand quelqu'un se lève quelque part."));
    e.push(L({ relic: "anneau" }, "Tu as rapporté l'Anneau de Thavar au manoir. Dame Ermesinde l'a mis à son doigt, pour la première fois de sa vie. Il est trop grand. Elle le garde."));
  } else {
    e.push(L({ relics: { min: 1 } }, "Tu as gardé ce qui te restait des clés. Elles ne chantent plus. Elles pèsent."));
  }
  e.push(L(ALL({ given: "clou" }, N(H("V:clou_rendu"))), "Le Clou de Hildre est resté à la Forge-Mère, où tu l'avais donné. Il n'est jamais descendu."));
  e.push(L(ALL({ given: "cloche" }, N(H("V:cloche_rendue"))), "La Cloche d'Ivo est restée à l'Ordre, où tu l'avais donnée. Elle n'est jamais descendue."));
  e.push(L(ALL({ given: "anneau" }, N(H("V:anneau_rendu"))), "L'Anneau de Thavar est resté au manoir, où tu l'avais rendu. Il n'est jamais descendu."));
  e.push(L(H("vole:anneau"), "L'Anneau de Thavar n'est pas revenu dans ta main. Il est quelque part, au doigt de quelqu'un qui l'a voulu plus que toi."));
  return e;
}

// ================================================================== the six endings
Object.assign(P, {
  F_rescelle: { act: "V", title: "Rescellé", end: true, place: "VF_l_fond",
    fx: { flag: ["fin:rescelle", "fin:atteinte"], quest: "V_sceau", ep: ["histoire", 10000] },
    text: [
      "Tu le couches dans l'eau, au pied de la porte. Autour de lui, l'eau s'éclaircit, d'abord sur une coudée, puis sur une toise, puis jusqu'à la grève, et elle devient l'eau d'un lac de montagne, froide et transparente, et on voit le fond : du gravier, des cailloux ronds, et, posée sur le gravier, une petite tache sombre qui ne bouge plus. La femme. Elle n'a plus de pleurs à boire. Elle sèche sur place, comme une flaque oubliée.",
      L(H("VF:tient_aubin"), "Frère Aubin est assis dos à la porte, la chaîne autour du poignet comme une étole, et il chante le verset. Il le chante juste. Il te fait signe de la tête : va. Tu remontes la pente en l'entendant chanter, jusqu'au fort, jusqu'à la forge, jusqu'au puits, et il te semble que tu l'entends encore à la porte de bronze, et sur le glacier, et longtemps après."),
      L(H("VF:tient_thavary"), "Thavary est assise dos à la porte, droite, les jambes croisées, la chaîne au poignet. Elle te salue de la main, à la manière ancienne, puisqu'elle n'a plus d'épée. « Dis à ma grand-mère que j'ai payé, dit-elle. Elle saura pour quoi. » Tu remontes avec l'épée de Thavar sur le dos. Elle est très lourde. Elle l'a toujours été."),
      L(H("VF:tient_charline"), "Charline est assise dos à la porte, la chaîne rouge autour des avant-bras, et le fond de la Brèche est éclairé par elle comme une forge la nuit. Elle a ouvert un livre sur ses genoux, celui que tu lui as laissé. « J'ai le temps de lire, dit-elle. Enfin. » Tu remontes avec son carnet contre ta poitrine."),
      L(H("VF:tient_gloup"), "Gloup est au fond de l'eau claire, une tache laiteuse au pied de la porte, et la chaîne y est attachée comme une barque à un ponton. Il fait des bulles. Elles remontent jusqu'à toi, rondes, une par une, et éclatent avec un petit bruit content. Tu remontes sans rien porter. Ta botte est très légère."),
      L(H("VF:tient_pip"), "La porte est allumée de l'intérieur, et la lumière passe par la sixième main comme par une fenêtre. Elle éclaire le fond de la Brèche, et la pente, et elle monte, faiblement, jusqu'au glacier. Tu remontes dans cette lumière. Tu n'as plus besoin de lanterne. Tu n'en auras plus besoin, jusqu'à la porte de bronze. Après, il fait jour."),
      L(H("VF:tient_heros"), "Ceux qui étaient avec toi remontent. Tu les regardes partir, du fond, aussi longtemps que tu peux, puis tu les entends, puis tu ne les entends plus. Le froid n'est pas celui que tu croyais. Ce n'est pas le noir, si on sait pourquoi on y est. Tu sais. Ce que tu sais du monde, désormais, tu le sais par l'eau qui descend jusqu'à toi, claire, chaque printemps un peu plus."),
      L(N(H("VF:tient_heros")), "Tu remontes. La Descente est vide. Le puits a baissé. La forge est froide. La chapelle est silencieuse. Le fort a levé sa herse. Le glacier est bleu. Tu pousses la porte de bronze, qui s'ouvre, et dehors il neige, et c'est le matin."),
      "Le Sceau tient. Il tient autrement. Celui qui le tient a choisi, et on sait son nom, et celui qu'il a remplacé a eu le sien jusqu'au bout. La souillure ne monte plus. Elle ne disparaît pas d'un coup : ce qui est sorti en quatre cents ans est dans la terre, et il faudra des années pour que les puits redeviennent tous clairs. Mais rien ne remonte plus. On peut commencer à laver.",
    ].concat(cles("rescelle"), epilogue("rescelle"), [
      L(H("VF:tient_heros"), "Sur la troisième borne des Trois-Bornes, à côté des cinq mains et du creux de la sixième, quelqu'un a gravé une main de plus, l'été suivant. Elle est petite. Elle est tournée vers le bas. Il y a un nom dessous, et c'est le tien."),
      L(H("VF:tient_pip"), "Sur la troisième borne des Trois-Bornes, les enfants ont pris l'habitude de poser une chandelle, les soirs d'hiver. Ils disent que c'est pour une petite lumière qui a froid. Personne ne leur a dit de le faire."),
      L(ANY(H("VF:tient_aubin"), H("VF:tient_thavary"), H("VF:tient_charline"), H("VF:tient_gloup")), "Sur la troisième borne des Trois-Bornes, à côté des cinq mains et du creux de la sixième, il y a un nom gravé, l'été suivant, par une main qui n'a pas l'habitude. Le nom de celui ou celle qui tient. Les gens qui passent le touchent du doigt. On ne sait pas qui a commencé."),
      "Et sous la Fenne, au fond, dans l'eau claire, un jeune homme dort enfin, avec son nom ou sans, et il n'a plus froid.",
    ]) },
  F_libere: { act: "V", title: "Libéré et guéri", end: true, place: "VF_l_fond",
    fx: { flag: ["fin:libere", "fin:atteinte"], quest: "V_sceau", ep: ["histoire", 10000] },
    text: [
      L(H("VF:gueri"), "Il vous faut trois jours pour remonter. Il ne sait plus marcher. Il réapprend sur les marches de l'escalier des mains, une à une, appuyé sur ton épaule, puis sur un bâton, puis sur rien. À chaque étage, il s'arrête. Au puits, il regarde l'eau qui baisse. À la forge, il touche l'enclume d'Hildre. À la chapelle, il s'assied sur le banc d'un moine. Au fort, il demande où sont Aldar et Orine, et on lui montre deux prie-Dieu tournés dos à dos, et il rit."),
      "La porte de bronze s'ouvre devant vous sans qu'il faille la pousser. Dehors, il neige. Malvoran s'arrête sur le seuil, les yeux fermés, le visage levé, et il laisse la neige lui tomber sur la figure, longtemps, en silence. Puis il ouvre la bouche et il en attrape un flocon, comme un enfant.",
      "La Brèche est fermée. Pas scellée : fermée, comme se ferme une plaie, avec une cicatrice. On peut descendre l'escalier des mains, encore, jusqu'au fond. Il n'y a plus d'eau noire. Il y a une grotte, et une porte qui ne donne sur rien, et des milliers de mains gravées, toutes tournées vers le bas, comme pour retenir quelque chose qui n'est plus là. La souillure ne monte plus. Ce qui est sorti en quatre cents ans reste à laver, et ça se lave mieux, depuis : l'eau claire mord dessus comme elle n'a jamais mordu.",
      "Malvoran passe l'hiver à Hautecombe, dans une cellule des frères, à manger de la soupe et à dormir. Au printemps, il part. Il a demandé une trousse de cuir et un bol en bois. On lui en a donné un neuf. Il l'a fêlé exprès, pour pouvoir le réparer avec du fil de lin. Il va de village en village, dans la Sorbe, il soigne la fièvre grise, il recoud les bûcherons. Il ne dit pas son nom aux gens qu'il soigne. Ils le savent quand même, au bout d'un moment. Ça ne leur fait pas peur. Ça leur fait drôle.",
    ].concat(cles("libere"), epilogue("libere"), [
      "Sur la troisième borne des Trois-Bornes, la sixième main, celle qu'on avait martelée jusqu'à la pierre nue, a été regravée. Pas par Durn : par un jeune homme maigre qui est passé un été, avec une trousse et un bol, et qui a demandé un ciseau. Il a mis la journée. Elle n'est pas tournée vers le bas, comme les cinq autres. Elle est ouverte, paume vers le ciel.",
      "Et dessous, il a gravé son nom.",
    ]) },
  F_detruit: { act: "V", title: "Détruit", end: true, place: "VF_l_fond",
    fx: { flag: ["fin:detruit", "fin:atteinte"], quest: "V_sceau", ep: ["histoire", 10000] },
    text: [
      L(H("VF:brise"), "Tu remontes dans la fumée. La Descente se défait derrière toi : l'escalier des mains se fend, le puits se vide, la forge s'écroule, le lac de la chapelle s'en va par une fissure, le fort s'enfonce. Quand tu pousses la porte de bronze, elle tombe de ses gonds. Dehors, il neige, et la neige est grise."),
      "Il n'y a plus de Sceau. Il n'y a plus de gardien. Il n'y a plus rien, sous la Fenne, qu'une fente noire dans la montagne, d'où monte une odeur de vase, et qui ne pousse plus. La femme de l'eau a brûlé avec celui dont elle était née. Elle ne parlera plus à personne. Elle ne promettra plus rien.",
      "Mais ce qu'elle a mis dans le monde y est resté. Les puits de la Sorbe sont noirs, ou gris, ou clairs selon les années. Les bêtes du Rouvre naissent grises, parfois. On lave à la main. On lave les puits à l'eau claire, seau par seau, on lave les champs en les laissant en jachère, on lave les gens avec des remèdes d'herboriste et de la patience. Ça prend des générations. On le sait dès le premier hiver. On commence quand même.",
      "L'Ordre de la Main n'a plus de porte à garder. Il garde les puits. Les frères vont de village en village avec des seaux, des fioles d'eau claire, et des registres où ils notent, chaque année, la couleur de l'eau. On les appelle les laveurs. Ils ont fini par s'appeler comme ça eux-mêmes.",
    ].concat(cles("detruit"), epilogue("detruit"), [
      "Sur la troisième borne des Trois-Bornes, la sixième main est toujours martelée. Personne ne la regrave. On ne sait pas très bien ce qu'il faudrait y mettre. Quelqu'un a écrit dessous, à la craie, un nom, et la pluie l'a effacé, et quelqu'un l'a récrit. Ça dure depuis des années.",
      "Il t'arrive de penser à son œil brun, dans le feu, et au mot que tu as peut-être entendu. Tu as décidé de croire que tu l'as entendu.",
    ]) },
  F_maitre: { act: "V", title: "Le nouveau maître", end: true, place: "VF_l_fond",
    fx: { flag: ["fin:maitre", "fin:atteinte"], quest: "V_sceau", ep: ["histoire", 10000] },
    text: [
      L(H("VF:maitre_assis"), "Ceux qui étaient avec toi sont remontés, ou se sont enfuis, ou sont restés sur la grève jusqu'à ce que la faim les fasse partir. Tu ne les as pas retenus. Tu aurais pu. Tu n'en avais pas besoin."),
      "Tu es assis{e} dos à la porte, et la porte est à toi. Tu l'ouvres d'un doigt, certains soirs, et l'eau noire monte dans un puits que tu as choisi, et quelqu'un qui le méritait s'y noie. Tu la refermes. Les rois se disputent. Tu fais monter l'eau dans les mines d'Aldar, et Aldaran se tait. Tu fais pourrir les vignes d'une colline, et Vel-Orin se tait. Les guerres cessent, parce que tu n'en veux pas. Les gens prient l'eau, dans les villages, et l'eau les écoute, et c'est toi.",
      "La femme n'est plus devant toi. Elle est dans ta main, dans ta bouche, dans tes yeux. Tu ne sais plus très bien où tu finis et où elle commence. Elle ne te ment pas. Elle choisit ce qu'elle te dit. De temps en temps, tu te demandes si c'est toi qui commandes à l'eau, ou l'eau qui commande à travers toi. Tu poses la question. Elle répond que c'est pareil. Elle ne ment presque jamais.",
      "Ce que tu sais des gens, désormais, tu le sais par l'eau : par les puits où ils se penchent, les seaux qu'ils tirent, les larmes qu'ils versent. Tu les entends tous. Voici ce qu'ils deviennent.",
    ].concat(cles("maitre"), epilogue("maitre"), [
      "Sur la troisième borne des Trois-Bornes, la sixième main est toujours martelée. Mais à côté, depuis un hiver, une tache noire suinte de la pierre, en forme de main ouverte, et elle ne sèche jamais. Les enfants n'osent pas la toucher. Les vieux la touchent, et prient.",
      "Et sous la Fenne, dans le noir, il y a une porte que personne ne tient plus fermée, et quelqu'un assis devant qui la tient ouverte d'un doigt, juste assez. Quelqu'un qui avait reçu, un soir, une lettre pliée en quatre : *Ne prends rien que tu ne saurais rendre.*",
    ]) },
  F_marche: { act: "V", title: "Le marché", end: true, place: "VF_l_fond",
    fx: { flag: ["fin:marche", "fin:atteinte"], quest: "V_sceau", ep: ["histoire", 10000] },
    text: [
      L(H("VF:oui"), "Tu remontes. La Descente est silencieuse derrière toi. Personne ne te barre le chemin. Les noyés du puits te regardent passer sans rien demander. À la porte de bronze, il neige, et la neige est blanche, et tout a l'air en ordre."),
      L(H("VF:offre_entendue"), "Elle tient parole. Elle a toujours tenu parole. Elle ne monte haut comme les puits qu'elle choisit, et elle n'en choisit pas beaucoup. Un par vallée. Un par an. Les gens s'y noient un peu, comme ils se sont toujours noyés. Pas plus."),
      "La paix vient. Aldaran et Vel-Orin signent au gué de l'Isarde un traité que personne n'a vraiment négocié, et qui tient. Les récoltes sont bonnes. La fièvre grise recule. Les gens disent que le pays va mieux, et c'est vrai. Ils ne savent pas pourquoi. Ils n'ont pas besoin de savoir. Elle, dans l'ombre, dans les puits, dans les citernes, écoute, et choisit, et règne, et personne ne le voit.",
      "Sous la Fenne, quelqu'un tient encore la porte. Un peu moins chaque année. Assez.",
      "Tu vis longtemps. Très longtemps. Ceux que tu aimes aussi, comme elle l'avait promis. Tu ne bois plus d'eau que tu n'as pas regardée. Tu la regardes, et elle te regarde, et elle te dit bonsoir, avec ta voix d'enfant.",
    ].concat(cles("marche"), epilogue("marche"), [
      "Sur la troisième borne des Trois-Bornes, la sixième main est toujours martelée. Personne ne s'en souvient plus. Les enfants comptent cinq mains, et ils ont raison.",
      "Et chaque année, à la même saison, un puits de la Sorbe noircit, et quelqu'un s'y penche, et entend la voix de quelqu'un qu'il a perdu. Tu sais lequel avant tout le monde. Tu te tais. Tu as dit oui.",
    ]) },
  F_triomphe: { act: "V", title: "La Voix triomphe", end: true, place: "VF_l_fond",
    fx: { flag: ["fin:triomphe", "fin:atteinte"], quest: "V_sceau", ep: ["histoire", 6000] },
    text: [
      L(H("VF:engloutie"), "La porte s'ouvre. Pas d'un coup : lentement, comme une porte de grange que le vent pousse, et derrière il n'y a rien qu'on puisse voir, seulement une eau qui sort, et qui monte, et qui ne s'arrêtera plus. Celui qui la tenait depuis quatre cents ans se défait en sable, et son œil te regarde, sous l'eau, jusqu'au bout, sans reproche. Il était si fatigué."),
      "L'eau monte la Descente en une nuit. Elle passe le glacier, la porte de bronze, les murailles noires de la Fenne. Elle descend dans la Sorbe par toutes les sources à la fois. Les puits noircissent. Les bêtes deviennent grises. Les gens entendent, au bord des seaux, la voix de ceux qu'ils ont perdus, et ils se penchent, et ils écoutent, et beaucoup ne se relèvent pas.",
      "Tu es dans l'eau. Tu n'es pas mort{e}. Tu n'es pas vivant{e} non plus. Tu es une des voix. Elle te garde près d'elle, parce que tu es venu{e} jusqu'au bout, et qu'elle aime ça, le courage. Elle te laisse regarder. Par l'eau, tu vois ceux que tu as connus, chacun à son tour, ce qu'ils font des jours qui leur restent avant que l'eau n'arrive chez eux. Certains ont le temps de beaucoup. Voici.",
    ].concat(cles("triomphe"), epilogue("triomphe"), [
      "Puis l'eau arrive aux Trois-Bornes. Elle monte le long de la troisième borne, et recouvre les cinq mains, une à une. La sixième, la martelée, elle la remplit, comme on remplit un creux, et pendant un instant, sous l'eau noire, il y a de nouveau six mains sur la borne.",
      "Et une voix de femme, très douce, qui dit ton nom.",
    ]) },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      VF_malvoran: { name: "Malvoran le Guérisseur", f: false, face: { age: "jeune", beard: "barbe" }, desc: "Le sixième fondateur, le plus jeune. Il soignait les gens de village en village, avec une trousse de cuir et un bol fêlé. Il a tenu la porte quatre cents ans." },
    },
    enemies: {
      vf_voix: { name: "La Voix", look: "ombre", pv: 260, att: 122, def: 45, dmg: 13, desc: "Une femme de vase aux cheveux d'algue, qui sort de l'eau sans jamais en sortir tout à fait. Elle frappe comme une vague : sans hâte, et de partout." },
      vf_voix_nue: { name: "La Voix, nommée", look: "ombre", pv: 190, att: 114, def: 40, dmg: 12, desc: "Ce qui reste d'elle quand on lui a dit ce qu'elle est : de l'eau sale qui veut vivre, sans visage à emprunter." },
      vf_voix_blessee: { name: "La Voix, à la seconde passe", look: "ombre", pv: 200, att: 116, def: 42, dmg: 12, desc: "Elle a perdu ses enfants de vase dans la première passe. Elle n'a rien perdu de sa patience." },
      vf_fille_vase: { name: "Fille de vase", look: "ombre", pv: 56, att: 104, def: 34, dmg: 9, flank: true, desc: "Une petite forme sans visage, sortie de la robe de la Voix. Elle se tient à la jambe des grands, et elle mord." },
    },
    places: {
      VF_l_fond: { ambiance: "eau", region: "VE_descente", name: "Le fond de la Brèche", map: "marches", x: 98, y: 18, arrive: "VF_seuil", desc: "Une grève de gravier noir, une eau tiède qui ne reflète rien, et au loin, assis contre une porte, celui qui la tient." },
    },
    quests: [
      { id: "VF_q_dette", act: "V", kind: "annexe", title: "Ce qu'on lui doit", start: "VF_malvoran", echo: "dette=rendue" },
    ],
    achievements: {
      VF_ach_relever: { title: "Jusqu'à ce qu'on vienne le relever", desc: "Prendre toi-même la place de celui qui tenait la porte.", if: { all: [{ has: "fin:rescelle" }, { has: "VF:tient_heros" }] } },
      VF_ach_bol: { title: "Un bol fêlé", desc: "Rendre son nom à Malvoran, le délivrer et le voir remonter au jour.", if: { has: "fin:libere" } },
    },
  },
};
