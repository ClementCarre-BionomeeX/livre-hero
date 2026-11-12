// Act II · the southern company, chapter 4, "La grâce de la reine": the mêlée, the free trial, the peace song Mordace
// commissioned, the proclamation (the company's champion or the masked knight), and the grace asked in the great hall of
// the royal Archives, in front of the frosted iron chest. Lisandre leads ("tu").
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
function champ(h) { return { has: "sud:champion=" + h }; }
var FIGHTER = { any: [champ("ysolde"), champ("rodric"), champ("enfant")] };
var JOUTE = [{ if: champ("ysolde"), v: 35 }, { if: champ("rodric"), v: 35 }, { if: champ("enfant"), v: 15 }];
// The company wins the grace with the mêlée and one joust, or with the free trial if Lisandre is the champion.
var WIN = { any: [{ all: [{ has: "sud4:melee" }, { any: [{ has: "sud3:j1" }, { has: "sud3:j2" }] }] }, { has: "sud4:libre" }] };
module.exports = {
  II_S4_melee: P({ title: "La mêlée", place: "vasselin",
    text: [
      "Midi. Trente chevaliers dans le pré, à pied, en deux camps, épées émoussées, masses de bois. On frappe jusqu'à ce qu'il n'en reste qu'un debout. Le règlement interdit de tuer. Le règlement ne dit rien des os.",
      { if: champ("lisandre"), text: "Tu n'y es pas. Tu regardes depuis la barrière, avec les autres, et tu cherches le masque." },
      { if: { has: "rodric:oublie_champion" }, text: "Rodric s'avance dans le pré avec sa hache de bois, parce qu'on lui a dit de le faire. Il ne sait plus pourquoi il se bat. Il se bat quand même. C'est la seule chose qu'il n'a pas oubliée." },
      { if: FIGHTER, text: "Le masque est dans l'autre camp. Personne ne le voit. Les chevaliers qui tombent autour de lui ne savent pas qui les a frappés." },
      { if: { not: FIGHTER }, text: "Le masque est dans le pré. Personne ne le voit. Les chevaliers qui tombent autour de lui ne savent pas qui les a frappés." },
    ],
    choices: [
      { label: "Tenir le pré jusqu'au bout", hide: { not: FIGHTER }, test: { dom: "combat", label: "Mêlée", help: JOUTE.concat([{ if: { has: "rodric:oublie_champion" }, v: -10 }, { if: { has: "sud3:j2" }, v: 5 }, { if: { has: "sud3:ecuries" }, v: 5 }, { if: { has: "sud3:ecuyer_pris" }, v: 5 }, { if: { has: "sud3:conseil" }, v: 5 }]) },
        win: { fx: { flag: "sud4:melee", ep: ["perso", 1500] }, to: "II_S4_melee_ok" },
        lose: { fx: { flag: "sud4:melee_perdue" }, to: "II_S4_melee_rate" } },
      { label: "Regarder", hide: FIGHTER, to: "II_S4_melee_vue" },
    ] }),

  II_S4_melee_ok: P({ title: "Le dernier debout", place: "vasselin",
    text: [
      "À la fin, ils sont deux debout dans le pré piétiné. Ton champion, et le masque.",
      "Ils se regardent. Le masque baisse son épée. Il salue, très bas, à l'ancienne, comme on ne salue plus depuis trois cents ans. Puis il pose un genou à terre, et le héraut, qui ne sait plus qui est l'autre, proclame ton champion vainqueur de la mêlée.",
    ],
    choices: [{ label: "L'épreuve libre", to: "II_S4_libre" }] }),

  II_S4_melee_rate: P({ title: "Dans la boue", place: "vasselin",
    text: [
      "Un coup de masse, de dos, que personne n'a vu venir, et ton champion est dans la boue. Il se relève sur un coude pour voir la fin. À la fin, il n'y a plus qu'une silhouette debout dans le pré. La foule applaudit. Elle ne sait pas qui.",
    ],
    choices: [{ label: "L'épreuve libre", to: "II_S4_libre" }] }),

  II_S4_melee_vue: P({ title: "Le masque", place: "vasselin",
    text: ["Tu le regardes faire. Il ne frappe jamais deux fois. Il ne frappe jamais fort. Les chevaliers tombent autour de lui comme des épis, et se relèvent, étonnés, sans savoir ce qui les a touchés. À la fin, il est seul debout. La foule applaudit. Tu regardes ta paume. Le charbon s'est effacé. Tu le sais quand même."],
    choices: [{ label: "L'épreuve libre", to: "II_S4_libre" }] }),

  II_S4_libre: P({ title: "L'épreuve libre", place: "vasselin",
    text: [
      "L'après-midi, l'épreuve libre. Sur une estrade devant la loge, chacun montre ce qu'il sait faire : un jongleur, un archer qui coupe une pomme sur la tête de son fils, un poète, deux chanteurs. Messire Aubrac, en velours, avec sa voix superbe.",
      { if: { has: "aubrac:battu" }, text: "Il te voit dans la foule. Il se souvient de la grande salle du palais, et de ta réponse. Il chante moins fort que d'habitude." },
      { if: champ("lisandre"), text: "Puis c'est à toi. D'azur à la mouette d'argent. Le héraut lit le nom inventé. Tu montes." },
      { if: { not: champ("lisandre") }, text: "Le masque monte sur l'estrade le dernier. Il ne fait rien. Il reste debout, immobile, une minute entière. Puis il redescend. Personne ne se souvient de l'avoir vu. Les juges lui donnent la meilleure note, sans savoir pourquoi." },
    ],
    choices: [
      { label: "Chanter avec ta vraie voix", hide: { not: champ("lisandre") }, if: { souv: "lisandre:voix" }, why: "Tu ne sais plus où elle est.", test: { dom: "magie", label: "Voix", help: [{ if: { souv: "lisandre:port" }, v: 15 }, { if: { has: "sud:port_ami" }, v: 10 }] },
        win: { fx: { flag: "sud4:libre", ep: ["perso", 2000] }, to: "II_S4_libre_ok" },
        lose: { to: "II_S4_libre_rate" } },
      { label: "Chanter comme à la cour, juste et beau", hide: { not: champ("lisandre") }, test: { dom: "magie", label: "Chant" },
        win: { to: "II_S4_libre_rate" }, lose: { to: "II_S4_libre_rate" } },
      { label: "Attendre la cérémonie", hide: champ("lisandre"), to: "II_S4_ceremonie" },
    ] }),

  II_S4_libre_ok: P({ title: "La halle", place: "vasselin",
    text: [
      "Tu chantes le cri de la halle aux poissons, puis une chanson de port, rauque, trop grave, pas juste du tout. Les juges se regardent, choqués. Puis, du fond du pré, là où se tiennent les gens du port, quelqu'un reprend le refrain. Puis cent. Puis mille.",
      "Dans la loge, la reine ouvre les yeux. Elle se penche. Elle écoute, la bouche un peu ouverte, comme une petite fille.",
      "Le chevalier, au pied de l'estrade, a retiré son masque une seconde, pour mieux entendre.",
    ],
    choices: [{ label: "La cérémonie", to: "II_S4_ceremonie" }] }),

  II_S4_libre_rate: P({ title: "Une belle chanson", place: "vasselin",
    text: ["Tu chantes bien. Tu chantes toujours bien. Les juges hochent la tête, poliment. La foule applaudit, poliment. Après toi monte le masque, qui ne fait rien, une minute entière, et que personne ne se rappelle avoir vu. Les juges lui donnent la meilleure note."],
    choices: [{ label: "La cérémonie", to: "II_S4_ceremonie" }] }),

  II_S4_ceremonie: P({ title: "La chanson de la paix", place: "vasselin",
    text: [
      "Au coucher du soleil, avant la proclamation, la chanson de la paix. La reine se lève. Les ambassadeurs de Corvanne se lèvent. Tout le pré se lève.",
      { if: { has: "sud2:mordace=oui" }, text: "C'est toi qui la chantes. Les paroles sont dans ta manche, nouées d'un ruban gris. Tu les as lues. Ce sont de très beaux vers, qui parlent d'un pont, d'une rivière, et d'une eau qui emporte tout, et ils sont faits pour que celui qui les écoute laisse partir ce qu'il tient. Tu le sens dès la première ligne." },
      { if: { not: { has: "sud2:mordace=oui" } }, text: "C'est Messire Aubrac qui la chante. De très beaux vers, qui parlent d'un pont, d'une rivière, et d'une eau qui emporte tout. Au deuxième couplet, dans la tribune de Corvanne, des hommes commencent à sourire, d'un sourire vague, et se tournent vers les Esquarrois avec une sorte de bonne volonté sans mémoire." },
    ],
    choices: [
      { label: "Chanter ce que Mordace t'a donné. Tu as promis", hide: { not: { has: "sud2:mordace=oui" } }, fx: { flag: "sud4:paix=chantee", ep: ["perso", 600] }, to: "II_S4_paix_chantee" },
      { label: "Chanter à la place la ballade de Hautvent, la vraie", hide: { not: { has: "sud2:mordace=oui" } }, fx: { flag: "sud4:paix=hautvent", ep: ["perso", 1500] }, to: "II_S4_paix_hautvent" },
      { label: "Monter sur l'estrade et interrompre Aubrac", hide: { has: "sud2:mordace=oui" }, test: { dom: "social", label: "Audace", help: [{ if: { has: "aubrac:battu" }, v: 15 }] },
        win: { fx: { flag: "sud4:paix=interrompue", conf: { lisandre: 5 }, ep: ["perso", 1500] }, to: "II_S4_paix_interrompue" },
        lose: { fx: { flag: "sud4:paix=aubrac" }, to: "II_S4_proclamation" } },
      { label: "Laisser Aubrac chanter", hide: { has: "sud2:mordace=oui" }, fx: { flag: "sud4:paix=aubrac" }, to: "II_S4_proclamation" },
    ] }),

  II_S4_paix_chantee: P({ title: "Les beaux vers", place: "vasselin",
    text: [
      "Tu chantes. Tu chantes très bien. La musique que tu as mise sur ses mots est la plus belle que tu aies jamais écrite, et c'est pour ça que ça marche.",
      "Au troisième couplet, le pré entier sourit. Les Corvannais et les Esquarrois se serrent la main, au bas des tribunes, et se demandent, sans gêne, pourquoi ils se sont fait la guerre. Personne ne sait plus. Ils ont l'air heureux.",
      { if: { any: [{ has: "lisandre:ilan_dit" }, { has: "lisandre:ilan_ment" }] }, text: "Ilan, au premier rang, te regarde. Il sourit, comme les autres. Puis son sourire s'efface. Il est le seul. Il secoue la tête, lentement, et s'en va." },
      "Dans la loge, Mordace écrit.",
    ],
    choices: [{ label: "La proclamation", to: "II_S4_proclamation" }] }),

  II_S4_paix_hautvent: P({ title: "Hautvent", place: "vasselin",
    text: [
      "Tu ouvres la bouche pour chanter ses vers, et tu chantes autre chose. Hautvent. Le village de tisserands, moitié esquarrois, moitié corvannais, et ce qu'on en a fait, il y a trois semaines, sur ordre. Les faits du Frère Orlan, que tu connais par cœur. Les noms.",
      "Le pré se tait. Les Corvannais ne sourient pas. Les Esquarrois non plus. Ils se regardent. C'est très inconfortable, très long, très silencieux, et c'est la vérité.",
      "Dans la loge, Mordace a cessé d'écrire. Il te regarde, sans colère. Avec une sorte de tristesse.",
    ],
    choices: [{ label: "La proclamation", fx: { flag: "lisandre:hautvent_chante", conf: { lisandre: 10 } }, to: "II_S4_proclamation" }] }),

  II_S4_paix_interrompue: P({ title: "Aubrac", place: "vasselin",
    text: [
      "Tu montes sur l'estrade au milieu du deuxième couplet. Aubrac s'arrête, la bouche ouverte. Tu poses la main à plat sur les cordes de son luth, doucement, et tu dis, assez fort pour la tribune de Corvanne : « Pas celle-là, Messire. Une autre fois. »",
      "Aubrac te regarde. Puis, contre toute attente, il hoche la tête et descend. Le pré bourdonne. Les Corvannais ont cessé de sourire. Dans la loge, Mordace écrit quelque chose, une seule ligne, et la souligne.",
    ],
    choices: [{ label: "La proclamation", to: "II_S4_proclamation" }] }),

  II_S4_proclamation: P({ title: "La proclamation", place: "vasselin",
    text: [
      "Le héraut monte devant la loge. Il déroule un parchemin. Il lit les noms des vainqueurs des joutes, de la mêlée, de l'épreuve libre. Puis il lit celui qui recevra la grâce de la reine.",
      { after: "sud4:paix=aubrac", text: "Aubrac a chanté jusqu'au bout. Dans les tribunes, Corvannais et Esquarrois se sourient encore, sans trop savoir pourquoi." },
      { if: { all: [WIN, { not: champ("rodric") }, { not: champ("lisandre") }] }, text: "D'azur à la mouette d'argent. Le nom inventé. Ton champion." },
      { if: { all: [WIN, champ("lisandre")] }, text: "D'azur à la mouette d'argent. Le nom inventé. Toi." },
      { if: { all: [WIN, champ("rodric"), { not: { has: "sud:vrai_nom" } }] }, text: "Les couleurs de Corvanne. Le nom inventé. Ton champion." },
      { if: { all: [WIN, champ("rodric"), { has: "sud:vrai_nom" }] }, text: "Les couleurs de Corvanne. Rodric Trois-Cloches. Ton champion." },
      { if: { not: WIN }, text: "Il lit un blanc. Il se reprend, relit. Il lit : « Le chevalier au masque. » Et la foule applaudit quelqu'un dont elle ne sait rien." },
      "La reine se lève et tend la main vers la haute ville, vers la Tour des Archives. « Dans la grande salle, dit-elle, ce soir. » Elle hésite, regarde Mordace, qui hoche la tête. « Je tiendrai parole. »",
    ],
    choices: [
      { label: "Monter à la Tour, pour la grâce", hide: { not: WIN }, fx: { flag: "sud4:grace=nous", quest: "II_S_tournoi" }, to: "II_S4_tour" },
      { label: "Monter à la Tour dans la suite de la reine, pour voir", hide: WIN, if: { not: { has: "lisandre:disgrace" } }, why: "Tu es bannie de la cour.", fx: { flag: "sud4:grace=masque", quest: "II_S_tournoi" }, to: "II_S4_tour" },
      { label: "Monter à la Tour dans la foule des curieux, par l'escalier du peuple", hide: WIN, fx: { flag: "sud4:grace=masque", quest: "II_S_tournoi" }, to: "II_S4_tour" },
    ] }),

  II_S4_tour: P({ title: "La Tour des Archives", place: "vasselin",
    text: [
      "On monte à pied. Deux cents marches, dans une tour carrée, entre des étagères qui montent jusqu'aux voûtes, chargées de registres. Il fait de plus en plus froid. Aux paliers, les deux archivistes que Mordace a gardés, assis à leurs pupitres, écrivent sans lever la tête.",
      { if: { item: "plan_tour" }, text: "Tu reconnais tout : le palier de la serrure à trois pênes, le palier du chien, le palier où les Mouettes ont écrit *ne pas*. Le chien n'est pas là. Sa niche est pleine de neige." },
      "La grande salle est au sommet. Ronde, sous une coupole de verre. Au centre, sur une estrade, le coffre de fer noir, cerclé, couvert de givre. Autour, sur le dallage, un cercle de neige qui ne fond pas.",
      "La reine s'assied sur un trône qu'on a monté pour elle. Mordace se tient à côté du coffre, la main posée dessus.",
    ],
    choices: [
      { label: "Avancer vers le trône, pour la grâce", hide: { not: { has: "sud4:grace=nous" } }, to: "II_S4_grace" },
      { label: "Le chevalier au masque s'avance", hide: { not: { has: "sud4:grace=masque" } }, to: "II_S4_grace_masque" },
    ] }),

  II_S4_grace: P({ title: "La grâce", place: "vasselin",
    text: [
      { if: FIGHTER, text: "Ton champion s'agenouille devant la reine. Elle sourit, de son sourire égal. « Demandez. »" },
      { if: { not: FIGHTER }, text: "Tu t'agenouilles devant la reine. Elle sourit, de son sourire égal. « Demandez. »" },
      { if: FIGHTER, text: "Vous en avez parlé toute la nuit, à l'Ancre. Vous n'êtes pas tombés d'accord. C'est à toi de le souffler, maintenant. Une seule chose." },
      { if: { not: FIGHTER }, text: "Vous en avez parlé toute la nuit, à l'Ancre. Vous n'êtes pas tombés d'accord. C'est à toi de le dire, maintenant. Une seule chose." },
    ],
    choices: [
      { label: "« Ouvrez le coffre, Majesté. Devant nous. »", fx: { flag: "sud4:demande=coffre", ep: ["perso", 1500] }, to: "II_S4_coffre" },
      { label: "« Qu'on rende à Votre Majesté le nom de son fils. »", fx: { flag: "sud4:demande=aymeric", ep: ["perso", 1500] }, to: "II_S4_aymeric" },
      { label: "« Libérez les gens de Hautvent, et ceux de Corvanne, dans les caves de Pallanche. »", fx: { flag: "sud4:demande=hautvent", ep: ["perso", 1500] }, to: "II_S4_hautvent" },
      { label: "« Faites venir les registres du pont de Lisse, et lisez-les à voix haute. »", hide: { not: { present: "ysolde" } }, fx: { flag: "sud4:demande=lisse", ep: ["perso", 1500] }, to: "II_S4_lisse" },
    ] }),

  II_S4_coffre: P({ title: "Le coffre", place: "vasselin",
    text: [
      "La reine se tourne vers Mordace. Mordace ne bouge pas. « Majesté, dit-il doucement, ce coffre contient les cessions que vous m'avez confiées. Les ouvrir, c'est vous les rendre. Toutes. Ce soir. »",
      "La reine hésite. Elle a l'air d'avoir peur. Puis elle dit, d'une voix de petite fille : « J'ai donné ma parole. »",
      "Mordace sort ses trois clés, et ouvre les trois serrures, une à une. Le couvercle se soulève. Un souffle froid remplit la salle, et le givre sur le coffre fond d'un coup.",
      "Dedans, un seul livre. Immense, relié de noir, épais comme une poutre. Le Grand Registre. Mordace l'ouvre au hasard, pour montrer qu'il obéit.",
      "Tu vois la page. Une colonne de noms. Sauvelune, et dessous, quatre cents noms. Une autre : Sarlat. Une autre : Aymeric d'Esquarre, sa naissance, ses dents de lait, ses premiers mots, sa mort. Une autre, que tu lis à l'envers, très vite : *Ysolde de Brenne, capitaine. Le pont de Lisse.* Et en dessous, d'une écriture très ancienne, à demi effacée, d'autres noms, dans une langue que tu ne connais pas.",
      "Mordace referme le livre. « Sa Majesté a dit : ouvrir. Elle n'a pas dit : donner. »",
    ],
    choices: [{ label: "Relever les yeux", fx: { clue: "n_grand_registre", flag: "sud4:registre_vu" }, to: "II_S4_tumulte" }] }),

  II_S4_aymeric: P({ title: "Aymeric", place: "vasselin",
    text: [
      "La reine ne comprend pas. « Mon fils ? » Elle se tourne vers Mordace. « J'ai un fils ? »",
      "Mordace est devenu très pâle. Il ouvre le coffre, une serrure, deux, trois. Il sort du Grand Registre une feuille volante, glissée entre les pages, et la tient au-dessus de la flamme d'une chandelle, sans la brûler.",
      "« Majesté, dit-il, c'est vous qui me l'avez donné. Il vous faisait mal. Il vous faisait si mal que vous ne pouviez plus régner. Si je vous le rends, vous ne régnerez plus. » Il regarde, par les vitres de la coupole, la ville en bas, le pré, la paix toute neuve. « Vous voulez ça ? »",
      "La reine regarde la feuille. Elle tend la main.",
      "Mordace la lui donne. Elle la lit. Elle pousse un cri, un seul, que tu n'oublieras pas, et elle se plie en deux sur son trône, la feuille contre la poitrine.",
    ],
    choices: [{ label: "Aller à elle", fx: { flag: ["isaure:aymeric_rendu", "isaure:brisee"] }, to: "II_S4_tumulte" }] }),

  II_S4_hautvent: P({ title: "Hautvent", place: "vasselin",
    text: [
      "La reine fronce les sourcils. « Hautvent ? » Mordace se penche et lui parle à l'oreille, longtemps. Elle écoute. Puis elle dit : « Accordé. » Et elle ajoute, plus bas, pour elle-même : « Je ne savais pas que j'avais des prisonniers. »",
      "Mordace écrit l'ordre, de sa main, et le lui fait signer. Il le tend avec une courtoisie parfaite.",
      "« Ils sont libres, dit-il. Ils ne se souviennent plus d'où ils viennent. Mais ils sont libres. »",
    ],
    choices: [{ label: "Prendre l'ordre", fx: { flag: "hautvent:libres", item: "ordre_hautvent" }, to: "II_S4_tumulte" }] }),

  II_S4_lisse: P({ title: "Le pont de Lisse", place: "vasselin",
    text: [
      "Mordace sourit. « Mais bien sûr. » Il ouvre le coffre lui-même, les trois serrures, et sort du Grand Registre trois feuilles cousues ensemble. Il les tend à la reine. « Ce n'est pas long. »",
      "La reine lit à voix haute, de sa voix égale, sans comprendre ce qu'elle lit.",
      "*Le pont de Lisse, la nuit du quatorze brumaire, dernière nuit de la guerre. Les gens du village de Lisse-en-Corvanne, trois cents, femmes, vieillards, enfants, réfugiés sur le pont devant l'avance d'Esquarre. La capitaine Ysolde de Brenne, ayant reçu ordre de tenir le pont coûte que coûte, ordonne de le faire sauter. Elle est sur la rive. Elle regarde.*",
      { if: FIGHTER, text: "La reine lève les yeux. « C'est vous ? » demande-t-elle, poliment, à ton champion." },
      { if: { not: FIGHTER }, text: "La reine lève les yeux. « C'est vous ? » te demande-t-elle, poliment." },
      { if: champ("ysolde"), text: "Ysolde, à genoux devant elle, a fermé les yeux." },
      { if: { not: champ("ysolde") }, text: "Ysolde, dans le rang de ta suite, a fermé les yeux." },
    ],
    choices: [{ label: "Prendre les trois feuilles", fx: { flag: ["ysolde:lisse_sait", "sud4:lisse_lu"], item: "feuilles_lisse", quest: "II_S_lisse" }, to: "II_S4_tumulte" }] }),

  II_S4_grace_masque: P({ title: "Le masque", place: "vasselin",
    text: [
      "Le chevalier au masque s'agenouille devant la reine. Elle le regarde sans le voir. « Demandez », dit-elle, à quelqu'un, vaguement.",
      "« Le nom de mon père, dit-il. Il est dans ce coffre. »",
      "Mordace s'est figé. Pour la première fois, il a l'air de voir le chevalier. Il pâlit. « Vous », dit-il.",
      "La reine dit : « Accordé. » Elle ne sait pas à qui. Mordace hésite. Puis il ouvre le coffre, très lentement, les trois serrures. Il sort du Grand Registre une page, une seule, très vieille, presque noire.",
      "Le chevalier la prend. Il l'approche de son masque. Il lit. Et pendant une seconde, toute la salle se souvient de lui. Tu le vois, et tout le monde le voit : un garçon de vingt ans, très pâle, avec des yeux gris presque blancs, en larmes.",
      { if: { has: "sansnom:ancre_lisandre" }, text: "Il te cherche des yeux dans la foule. Il te trouve. Il fait de l'ombre." },
      "Puis la coupole de verre éclate.",
    ],
    choices: [{ label: "Lever les yeux", fx: { flag: "sansnom:page" }, to: "II_S4_tumulte" }] }),

  II_S4_tumulte: P({ title: "La coupole", place: "vasselin",
    text: [
      { if: { has: "sansnom:page" }, text: "Par la coupole brisée tombent des éclats de verre et de la neige, et avec la neige, des Glaneurs, cinq, six, qui se laissent tomber dans la salle comme des draps. Le chevalier au masque n'est plus là. Personne ne se souvient qu'il y était. Les Glaneurs cherchent quelque chose. Ils ne trouvent pas." },
      { if: { all: [{ not: { has: "sansnom:page" } }, { not: { has: "sud4:demande=hautvent" } }] }, text: "Mordace a refermé le coffre. Mais la salle n'est plus calme. La neige, autour du coffre, s'est mise à monter, lentement, comme une marée. Les gardes noirs se sont rapprochés. Mordace fait un geste, et ils se tournent vers vous." },
      { if: { has: "sud4:demande=hautvent" }, text: "Mordace n'a pas touché au coffre. Mais la salle n'est plus calme. La neige, autour du coffre, s'est mise à monter, lentement, comme une marée. Les gardes noirs se sont rapprochés. Mordace fait un geste, et ils se tournent vers vous." },
      "« Sortez-les », dit Mordace. Il ne crie pas. Il n'a pas besoin.",
      { if: { has: "isaure:brisee" }, text: "La reine pleure sur son trône, la feuille contre elle. Personne ne la regarde. Mordace, un instant, pose la main sur son épaule." },
      "On vous pousse dans l'escalier. Deux cents marches. Dehors, il fait nuit. La porte de la Tour se referme derrière vous.",
      { before: "sud4:demande=hautvent", text: "Il n'y a plus de tournoi. Il n'y a plus de grâce. Il reste un coffre, en haut d'une tour, et tu sais maintenant ce qu'il y a dedans." },
      { after: "sud4:demande=hautvent", text: "Il n'y a plus de tournoi. Il n'y a plus de grâce. Il reste un coffre, en haut d'une tour, et tu n'as toujours pas vu ce qu'il y a dedans." },
    ],
    choices: [{ label: "Cette nuit, on revient", fx: { flag: "ch2:sud:4", resume: "II_S5_nuit", catchup: 8, catchupAll: true, catchupWhy: "la grâce de la reine" }, to: "C2_carrefour", big: true }] }),
};
