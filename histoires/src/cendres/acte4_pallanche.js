// Act IV · Pallanche, a year later: the Great Book of the Living (everyone queues to be written, and what is written can
// be ceded), the city as the registre flag left it, the Widow, the Readers, Anseau's bells, Pie (who stayed near Linette
// by working for Mordace if he did not fall with the child), Linette back in the Tower as Page Eleven, Hylas kept in the
// vault as keeper of Anselin's register, the night raid on the Tower, and Mordace on the stairs with his lantern.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var REG_REINE = { has: "registre:reine" }, REG_GREF = { has: "registre:greffiers" }, REG_CLAN = { has: "registre:clans" };
var PIE_LA = { present: "pie" }, PIE_DEDANS = { not: { has: "rupture:avec:pie" } };
var HYLAS_LA = { has: "rupture:avec:hylas" };
var LIN_SORTIE = { has: "pie:choix=linette" };
module.exports = {
  IV_r_sud: P({ title: "La route des Cloches", place: null,
    text: [
      "Sur la route de Pallanche, une file. Des centaines de gens, à pied, en charrette, avec des enfants et des vieillards, qui descendent vers la ville. Ils ne fuient rien. Ils vont se faire écrire.",
      "« Le Grand Livre des vivants, t'explique une femme qui porte un nourrisson. À la tour. Tu donnes ton nom, ton village, tes enfants, et un greffier l'écrit. Après, la neige ne peut plus te prendre. Ils te donnent un jeton. » Elle te montre celui de son mari, un disque de plomb gravé d'une plume et d'une clé. « Ça coûte deux sous. Pour les enfants, c'est gratuit. »",
      "Tu regardes le jeton. Tu penses à Anselin, dans sa grange, qui écrivait les noms avant de les barrer. On ne peut faire oublier que ce qu'on a écrit.",
      { with: "hylas", text: "Hylas a pris le jeton dans ses doigts. Il le palpe longtemps. « Il a trouvé, dit-il tout bas. Il ne vole plus les noms. Il les fait apporter. »" },
    ],
    choices: [{ label: "Continuer vers Pallanche", fx: { clue: "n_livre_vivants" }, to: "@route" }] }),

  IV_pal_portes: P({ title: "Les portes de Pallanche", place: "pallanche",
    text: [
      "La ville aux cent cloches. Il y a un an, sur la colline, vous la regardiez blanchir sous la neige. Elle est blanche encore, mais de chaux : on a repeint les façades, et sur chaque façade, en lettres noires, les noms de ceux qui habitent derrière.",
      { if: REG_REINE, text: "À la porte du Nord, les gardes de la reine ont disparu. Des gardes noirs, au sceau de la plume et de la clé. La ville est à Mordace. Les armées de la reine campent à deux lieues, sans oser approcher. On dit que le Greffier-Majeur a menacé, s'il est assiégé, de céder l'armée entière, d'un trait de plume." },
      { if: REG_GREF, text: "À la porte du Nord, une potence neuve. Trois corps, en robe grise, avec un écriteau au cou : *Liseur.* La foule passe dessous sans lever les yeux. Les gardes noirs contrôlent chaque visage." },
      { if: REG_CLAN, text: "À la porte du Nord, des gardes noirs, et derrière eux, des greffiers en gris, qui regardent chaque visage, chaque paire d'yeux, et prennent des notes. Ils cherchent quelqu'un. Tu sais qui." },
      "Pour entrer, il faut faire la queue, donner son nom, et le voir écrire. Le greffier de la porte lève les yeux sur chaque visiteur, longtemps.",
    ],
    choices: [
      { label: "Faire la queue, et donner un faux nom", test: { dom: "social", label: "Le faux nom", help: [{ if: PIE_LA, v: 20 }, { if: { present: "lisandre" }, v: 10 }, { if: { present: "sansnom" }, v: -10 }] },
        win: { fx: { flag: "pal:entree=faux_nom", ep: ["perso", 1000] }, to: "IV_pal_entree" },
        lose: { fx: { flag: ["pal:entree=reperes", "pal:alerte"] }, to: "IV_pal_repere" } },
      { label: "Passer par la teinturerie, sous les remparts, comme Pie l'a appris", hide: { not: PIE_LA }, fx: { flag: "pal:entree=teinturiers", ep: ["perso", 800] }, to: "IV_pal_teinture" },
      { label: "Chercher les Liseurs. Ils ont sûrement une porte", hide: { not: REG_GREF }, to: "IV_pal_liseurs_porte" },
      { label: "Escalader le rempart de nuit, côté rivière", test: { dom: "discretion", label: "Le rempart", help: [{ if: { present: "corbe" }, v: 10 }, { if: { present: "givre" }, v: 10 }, { if: { present: "gaspard" }, v: -15 }] },
        win: { fx: { flag: "pal:entree=rempart", ep: ["perso", 1000] }, to: "IV_pal_entree" },
        lose: { fx: { pv: -3, flag: ["pal:entree=rempart", "pal:alerte"] }, to: "IV_pal_repere" } },
    ] }),

  IV_pal_teinture: P({ title: "La teinturerie", place: "pallanche",
    text: [
      "Pie vous fait longer la rivière jusqu'au déversoir des Teinturiers, là où l'eau sortait de la ville en trois couleurs. Une grille rouillée, une barre descellée depuis dix ans, qu'il remettait en place chaque fois en sortant. Elle est toujours descellée.",
      "« Rien ne change jamais, dans cette ville, dit-il. Sauf les noms sur les murs. » Vous entrez dans l'eau jusqu'aux genoux. De ce côté, elle était bleue ; elle est grise. Vous ressortez dans une cour où sèchent des draps gris.",
    ],
    choices: [{ label: "Entrer dans la ville", to: "IV_pal_entree" }] }),

  IV_pal_liseurs_porte: P({ title: "Les Liseurs", place: "pallanche",
    text: [
      "Tu ne cherches pas longtemps. Sur un mur, près de la porte, à hauteur d'enfant, quelqu'un a tracé à la craie une plume barrée d'un trait, puis une flèche. Tu suis les flèches jusqu'à un lavoir, hors les murs. Une lavandière, sans lever les yeux, dit : « Tu cherches qui ? »",
      "Tu dis : le Frère Orlan. Elle te mène à un égout, à une échelle, à une cave. Orlan est là, plus maigre, toujours enrhumé, entouré d'une dizaine de greffiers sans leur robe qui recopient des listes à la chandelle.",
      "« Les nôtres lisent sur les places, dit-il. Les gens écoutent. Puis ils vont faire la queue à la tour pour se faire écrire quand même. Ils ont peur, tu comprends. Peur d'être oubliés, alors ils donnent leur nom à celui qui fait oublier. » Il éternue. « Entre. Tu es attendu. Pas par nous. »",
    ],
    choices: [{ label: "Entrer dans la ville par les caves", fx: { flag: ["pal:entree=liseurs", "pal:orlan"], ep: ["perso", 1000] }, to: "IV_pal_entree" }] }),

  IV_pal_repere: P({ title: "Repérés", place: "pallanche",
    text: [
      { before: "pal:entree=rempart", text: "Le greffier de la porte te regarde une seconde de trop. Il écrit quelque chose, sur une autre feuille. Il fait signe à un garde, qui fait signe à un autre. Tu entres quand même : ils te laissent entrer." },
      { after: "pal:entree=rempart", text: "Une pierre roule sous ta main et tu tombes de haut, du bon côté du mur. Sur le chemin de ronde, une lanterne se penche. Personne ne crie. Personne ne descend : ils te laissent entrer." },
      "C'est pire. Pendant une heure, un homme en gris vous suit à vingt pas, dans les rues, sans se cacher.",
    ],
    choices: [
      { label: "Le semer dans les ruelles", test: { dom: "discretion", label: "Les ruelles", help: [{ if: PIE_LA, v: 20 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IV_pal_entree" }, lose: { to: "IV_pal_repere_combat" } },
      { label: "L'attendre au coin d'une rue", to: "IV_pal_repere_combat" },
    ] }),

  IV_pal_repere_combat: P({ title: "Le coin de la rue",
    combat: { title: "Les gardes noirs", enemies: [{ id: "garde_noir", n: 2 }], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Se jeter dans une cour et escalader", to: "IV_pal_entree" },
      win: { fx: { ep: ["seance", 1500] }, to: "IV_pal_entree" },
      lose: { fx: { pv: -4 }, to: "IV_pal_entree" } },
    text: ["L'homme en gris n'est pas seul. Il siffle, et deux gardes noirs sortent d'une porte cochère, l'épée déjà tirée."],
    choices: [] }),

  IV_pal_entree: P({ title: "Pallanche", place: "pallanche",
    text: [
      "Les rues que tu as connues. Les cent clochers, la tour des Greffiers au centre, plus haute que tous, avec à son sommet la plume et la clé de fer. Il y a la queue devant la tour, une queue qui fait trois fois le tour de la place aux Clercs.",
      "Il faut un endroit où dormir, des nouvelles, et quelqu'un qui connaisse la tour de l'intérieur.",
    ],
    choices: [{ label: "Chercher un toit", to: "IV_pal" }] }),

  IV_pal: P({ backName: "Pallanche", title: "Pallanche, un an après", place: "pallanche", hub: true, shop: "veuve",
    text: [
      { first: true, text: "La Veuve, aux Teinturiers, prend tout le monde, pourvu qu'on paie ou qu'on ait l'air de pouvoir payer un jour. C'est là que vous posez vos sacs." },
      { again: true, before: "pal:plan", text: "Les Teinturiers, l'arrière-boutique de la Veuve, vos sacs dans un coin. Dehors, la ville va son train, et la tour est toujours là, au-dessus des toits." },
      { if: { has: "pal:plan" }, text: "Vous savez comment entrer dans la tour. Il ne reste qu'à choisir la nuit." },
    ],
    choices: [
      { label: "L'arrière-boutique de la Veuve", hide: { seen: "IV_pal_veuve" }, to: "IV_pal_veuve" },
      { label: "Le clocher de Saint-Gilles", hide: { seen: "IV_pal_anseau" }, to: "IV_pal_anseau" },
      { label: "La place aux Clercs, et la queue devant la tour", hide: { seen: "IV_pal_queue" }, to: "IV_pal_queue" },
      { label: "La cave des Liseurs", hide: { any: [{ seen: "IV_pal_orlan" }, { not: REG_GREF }] }, to: "IV_pal_orlan" },
      { label: "Attendre Pie, la nuit, chez la Veuve", hide: { any: [{ seen: "IV_pal_pie" }, { not: PIE_DEDANS }, { not: { seen: "IV_pal_veuve" } }] }, to: "IV_pal_pie" },
      { label: "Pie veut passer derrière les Teinturiers", hide: { any: [{ seen: "IV_C_pie" }, { not: { present: "pie" } }] }, to: "IV_C_pie" },
      { label: "Hylas cherche une blanchisseuse, rue des Bassins", hide: { any: [{ seen: "IV_C_hylas" }, { not: { present: "hylas" } }] }, to: "IV_C_hylas" },
      { label: "Suivre Pie sur les toits", hide: { any: [{ seen: "IV_V_pie" }, { not: { present: "pie" } }] }, to: "IV_V_pie" },
      { label: "Hylas, qui t'attend dans l'arrière-boutique", hide: { any: [{ seen: "IV_V_hylas" }, { not: { present: "hylas" } }] }, to: "IV_V_hylas" },
      { label: "Lisandre, qui n'arrive pas à accorder son luth", hide: { any: [{ seen: "IV_V_lisandre" }, { not: { present: "lisandre" } }] }, to: "IV_V_lisandre" },
      { label: "Le jeune greffier du porche", hide: { any: [{ seen: "IV_Q_baudoin" }, { not: { seen: "IV_pal_queue" } }] }, to: "IV_Q_baudoin" },
      { label: "La potence de la place aux Clercs, à midi", hide: { any: [{ seen: "IV_Q_potence" }, { not: REG_GREF }] }, to: "IV_Q_potence" },
      { label: "L'hospice des Cédants, derrière Saint-Gilles", hide: { seen: "IV_Q_hospice" }, to: "IV_Q_hospice" },
      { label: "Des enfants, rue des Tonneliers", hide: { seen: "IV_Q_jetons" }, to: "IV_Q_jetons" },
      { label: "Le quartier des Teinturiers", hide: { seen: "IV_Q_bleu" }, to: "IV_Q_bleu" },
      { label: "Le vieux sacristain, sur le parvis de Saint-Gilles", hide: { seen: "IV_O_entree" }, to: "IV_O_entree" },
      { label: "L'écrivain public, au coin de la place aux Clercs", hide: { seen: "IV_pal_ecrivain" }, to: "IV_pal_ecrivain" },
      { label: "Hylas s'arrête rue des Teinturiers", hide: { any: [{ seen: "IV_pal_berengere" }, { not: { present: "hylas" } }, { not: { has: "hylas:berengere" } }] }, to: "IV_pal_berengere" },
      { label: "Préparer l'entrée dans la tour", if: { all: [{ seen: "IV_pal_veuve" }, { any: [{ has: "pal:lingerie" }, { seen: "IV_pal_anseau" }, { seen: "IV_pal_pie" }, { seen: "IV_pal_orlan" }, { has: "pal:baudoin" }] }] }, why: "Tu ne sais encore rien de la tour.", hide: { has: "pal:plan" }, to: "IV_pal_plan", big: true },
      { label: "Entrer dans la tour, cette nuit", if: { has: "pal:plan" }, why: "Il faut un plan.", to: "IV_tour_nuit", big: true },
    ] }),

  IV_pal_veuve: P({ title: "La Veuve", place: "pallanche",
    text: [
      "La Veuve est toujours petite, ronde, en noir, avec les yeux les plus gentils de Pallanche. Elle vous fait asseoir, et vous sert de la soupe, et ne pose aucune question avant que les bols soient vides.",
      { with: "pie", text: "Elle regarde Pie longtemps. « Tu as maigri, dit-elle. Et tu as l'air de quelqu'un qui a vu des choses. Ça te va mal. » Elle lui pince la joue, très fort." },
      { with: "pie", text: "« Ta sœur est à la tour, lui dit-elle. La Page Onze. »" },
      { without: "pie", text: "« La petite est à la tour, dit-elle. La Page Onze. La sœur de Pie. »" },
      { if: LIN_SORTIE, text: "« Les gris l'ont reprise cet automne, sur la route de Pont-de-Saule, quand la neige est tombée. Elle était seule, elle marchait vers le sud, elle cherchait quelqu'un. Ils l'ont reconnue à l'épi derrière la tête. Elle a de nouveau la tête rasée. Elle recopie le Grand Livre, avec les autres pages. »" },
      { if: { not: LIN_SORTIE }, text: "« Elle n'en est jamais sortie. Elle recopie le Grand Livre avec les autres pages, douze heures par jour. On la voit passer, le dimanche, en rang, pour la messe. Elle a grandi. Elle ne regarde personne. »" },
      { if: { all: [PIE_DEDANS, { not: PIE_LA }] }, text: "Elle se tait un moment. « Et ton ami Pie travaille pour le Greffier-Majeur. » Elle laisse tomber ça comme une pièce sur une table. « Faussaire en chef du Grand Livre. Il a une chambre dans la tour, avec une fenêtre. Il vient ici une nuit par semaine, boire un verre, et il ne parle à personne. Ce soir, c'est sa nuit. »" },
      { if: HYLAS_LA, text: "Puis elle regarde Hylas, qui a de nouveau les yeux blancs, et elle baisse la voix. « On dit qu'il garde un vieux au caveau, maintenant, depuis que vous êtes partis. Un greffier. Pour le livre noir. Il en faut toujours un, paraît-il. »" },
      { if: { not: HYLAS_LA }, text: "Puis, plus bas : « Et ton vieux greffier aveugle, il est au caveau. Mordace l'a repris l'an passé, au col, ou ailleurs. Il garde le livre noir. On dit qu'il ne remonte jamais. »" },
    ],
    choices: [{ label: "Remercier la Veuve", fx: { flag: "pal:veuve" }, to: "IV_pal" }] }),

  IV_pal_anseau: P({ title: "Saint-Gilles", place: "pallanche",
    text: [
      "Le clocher de Saint-Gilles. Anseau est là-haut, soixante et onze ans, au milieu de ses huit cloches.",
      { if: { has: "anseau:cloches" }, text: "Il sait leurs noms, maintenant, à toutes les huit. Il les a écrits sur les jougs à la peinture rouge. Il te reconnaît. « La nuit des Cloches, dit-il. On en a sonné une, vous et moi. On peut en sonner une autre. »" },
      { if: { not: { has: "anseau:cloches" } }, text: "Il a perdu le nom de ses cloches, et le sien, certains jours. Mais il sait sonner. « La tour sonne les heures, dit-il, et tout le monde se tait pour l'écouter. Si une cloche sonne à contretemps, tout le monde lève la tête. Même les gardes. Surtout les gardes. »" },
      "Il montre, de sa fenêtre, la tour des Greffiers. « Le clocher de la tour et le mien se répondent. Si je sonne à minuit et demi, la tour croit que c'est une alerte, et ses gardes montent tous au sommet, voir. Ça dure le temps d'un Ave. »",
    ],
    choices: [{ label: "« À minuit et demi, cette nuit-là. »", fx: { flag: "pal:anseau", ep: ["perso", 800] }, to: "IV_pal" }] }),

  IV_pal_queue: P({ title: "La queue", place: "pallanche",
    text: [
      "La queue fait trois fois le tour de la place. Les gens attendent depuis l'aube, assis sur leurs paquets. Ils avancent d'un pas tous les quarts d'heure. Au bout, sous le porche de la tour, dix greffiers à dix pupitres écrivent les noms, les villages, les enfants, et tendent les jetons.",
      "Un homme, devant toi, se retourne. « On dit qu'à la fin de l'été, quand tout le monde sera écrit, il n'y aura plus jamais de neige. » Il a l'air d'y croire. Il a besoin d'y croire.",
      "Tu regardes les pupitres. Tu regardes les mains des greffiers.",
      { if: { has: "proces:plume=rendu" }, text: "Une femme, plus loin, sort de la queue sans raison. Elle reste au milieu de la place, son enfant dans les bras, à regarder la tour. Puis elle s'en va, sans son jeton. Personne ne sait pourquoi. Toi, tu crois savoir." },
    ],
    choices: [{ fx: { flag: "pal:queue" }, back: "IV_pal" }] }),

  IV_pal_orlan: P({ title: "La cave", place: "pallanche",
    text: [
      "Dans la cave des Liseurs, Orlan déroule un plan de la tour sur une table, tenu aux quatre coins par des encriers. « Je l'ai dessiné de mémoire, dit-il. J'y ai vécu vingt ans. Le scriptorium des pages est au quatrième. Le caveau, sous les fondations. Entre les deux, l'escalier de service, qu'on ferme à clé à complies. »",
      "Il tapote un point. « La clé est au cou du portier. Le portier aime le vin de Corvanne, et on n'en trouve plus, à cause de la guerre. » Il sort une bouteille de sous la table. « Moi, j'en ai une. »",
    ],
    choices: [{ label: "Prendre la bouteille", fx: { flag: "pal:orlan_vin", item: "vin_corvanne", ep: ["perso", 800] }, to: "IV_pal" }] }),

  IV_pal_pie: P({ title: "La nuit de Pie", place: "pallanche",
    text: [
      "Il entre à onze heures, en manteau gris de greffier, avec des taches d'encre jusqu'aux coudes. Il commande un verre. Il se retourne. Il te voit.",
      "Il reste longtemps immobile. Puis il vient s'asseoir à ta table, en silence, et il boit son verre d'un coup.",
      "« Elle est là-haut, dit-il. Je suis allé la chercher, après la chute. Je l'ai cherchée tout l'automne. Ils l'avaient. Il m'a proposé un marché : je fabrique pour lui, et je la vois le dimanche, cinq minutes, à travers une grille. Elle ne me reconnaît pas. Elle me regarde comme on regarde un chien gentil. » Il pose le verre. « Je fabrique des noms. Des milliers. Des familles entières qui n'ont jamais existé, pour remplir les pages où il a barré les vraies. Je suis très bon. »",
      { if: { has: "pie:choix=boite" }, text: "Il tapote sa poitrine. Sous sa chemise, la boîte de plomb. « Je l'ai toujours. Je ne l'ai jamais ouverte. Je ne sais pas si c'est à moi de l'ouvrir, ou à elle. »" },
    ],
    choices: [
      { label: "« Aide-nous à la sortir. Cette nuit, ou la semaine prochaine. »", test: { dom: "social", label: "Pie", help: [{ if: { conf: "pie", min: 40 }, v: 20 }, { if: { has: "ame:linette" }, v: 25 }, { if: { has: "linette_avant:vue" }, v: 10 }] },
        win: { fx: { flag: ["pie:iv=aide", "pal:pie_dedans"], conf: { pie: 10 }, ep: ["perso", 1500] }, to: "IV_pal_pie_oui" },
        lose: { fx: { flag: "pie:iv=refus" }, to: "IV_pal_pie_non" } },
      { label: "Lui montrer qui est avec toi", hide: { not: { has: "ame:linette" } }, fx: { flag: ["pie:iv=aide", "pal:pie_dedans", "pie:voit_linette_avant"], conf: { pie: 25 }, ep: ["perso", 2500] }, to: "IV_pal_pie_petite" },
    ] }),

  IV_pal_pie_petite: P({ title: "La petite fille", place: "pallanche",
    text: [
      "Tu te lèves, et tu vas chercher, dans la chambre du haut, la petite fille au bonnet de travers. Elle descend l'escalier en se frottant les yeux. Elle voit Pie.",
      "Elle s'arrête sur la dernière marche. Elle penche la tête. « Tu es grand », dit-elle.",
      "Pie se lève si vite qu'il renverse le banc. Il se tait. Il ne peut rien dire. Elle descend la dernière marche, elle vient jusqu'à lui, et elle lui demande s'il vole toujours. Il dit oui. Il pleure comme un enfant, debout au milieu de la salle, et la Veuve fait sortir tout le monde.",
      "Plus tard, il te dit : « Cette nuit-là, je t'ouvre la porte de service. Et je monte au quatrième. Et je la redescends. Et si elles ne sont plus qu'une après, tant pis, tant mieux, je m'en fiche. Elle sera dehors. »",
    ],
    choices: [{ fx: { join: "pie" }, back: "IV_pal" }] }),

  IV_pal_pie_oui: P({ title: "Le marché", place: "pallanche",
    text: [
      "Il réfléchit longtemps. Il fait tourner son verre vide.",
      "« Je t'ouvre la porte de service, dit-il enfin. Je n'irai pas plus loin. S'il me voit, il la cède. Il me l'a dit. Une ligne, et elle n'a jamais existé. » Il se lève. « Mardi. Minuit et demi. Je serai le greffier qui dort sur la troisième marche. »",
    ],
    choices: [{ label: "Le laisser repartir", to: "IV_pal" }] }),

  IV_pal_pie_non: P({ title: "Le refus", place: "pallanche",
    text: [
      "« Non. » Il le dit doucement. « Tu ne sais pas ce qu'il fait de ceux qui essaient. Moi, je sais. J'en ai fabriqué les remplaçants. »",
      "Il se lève. Il pose deux sous sur la table, pour son verre. À la porte, il s'arrête. « Mardi, je ne dormirai pas sur la troisième marche de l'escalier de service, dit-il sans se retourner. Je ne dormirai pas du tout, en fait. Je serai au quatrième, avec les pages. Je compterai les chandelles. »",
      "Il sort.",
    ],
    choices: [{ fx: { flag: "pal:pie_indice" }, back: "IV_pal" }] }),

  IV_pal_plan: P({ title: "Le plan", place: "pallanche",
    fx: { flag: "pal:plan" },
    text: [
      "Vous étalez tout ce que vous savez sur la table de la Veuve.",
      { if: { has: "pal:anseau" }, text: "Anseau sonnera à minuit et demi. Les gardes monteront au sommet le temps d'un Ave." },
      { if: { has: "pal:pie_dedans" }, text: "Pie ouvrira la porte de service." },
      { if: { has: "pal:lingerie" }, text: "Le chariot de la lingerie monte jeudi, à trois heures, et sœur Aude n'a rien vu." },
      { if: { has: "pal:orlan_vin" }, text: "Il y a une bouteille de vin de Corvanne pour le portier." },
      { if: { has: "pal:baudoin" }, text: "Baudoin sera de garde au grand porche, et il sera très myope." },
      { if: HYLAS_LA, text: "Hylas connaît la tour marche par marche. « Je l'ai montée aveugle pendant trente ans, dit-il. Je peux la monter encore. Et le caveau, je l'ai gardé. Il ne fermera pas une porte que je ne sache ouvrir. »" },
      "Au quatrième, Linette. Au caveau, sous les fondations, le registre d'Anselin.",
      { if: { not: HYLAS_LA }, text: "Et Hylas." },
    ],
    choices: [{ label: "Attendre la nuit", to: "IV_pal" }] }),

  // ---- The night in the Tower
  IV_tour_nuit: P({ takes: "night", title: "Minuit", place: "pallanche",
    text: [
      "Minuit. La place aux Clercs est vide, la queue s'est dispersée, il reste des paquets oubliés et des enfants endormis sous le porche, que leurs parents reprendront à l'aube pour garder leur place.",
      "La tour monte dans le noir. Une seule fenêtre est allumée, tout en haut, sous la plume et la clé.",
    ],
    choices: [
      { label: "La porte de service, où Pie attend", hide: { not: { has: "pal:pie_dedans" } }, fx: { flag: "tour:entree=pie" }, to: "IV_tour_escalier" },
      { label: "La porte de service, avec le vin pour le portier", hide: { not: { has: "pal:orlan_vin" } }, fx: { drop: "vin_corvanne", flag: "tour:entree=vin" }, to: "IV_tour_portier" },
      { label: "Attendre la cloche d'Anseau, et passer par le grand porche", hide: { not: { has: "pal:anseau" } }, fx: { flag: "tour:entree=cloche" }, to: "IV_tour_cloche" },
      { label: "Le grand porche, où Baudoin est de garde", hide: { not: { has: "pal:baudoin" } }, fx: { flag: "tour:entree=baudoin" }, to: "IV_tour_escalier" },
      { label: "Sous les draps, dans le chariot de la lingerie", hide: { not: { has: "pal:lingerie" } }, fx: { flag: "tour:entree=lingerie" }, to: "IV_tour_lingerie" },
      { label: "Forcer la porte de service", fx: { flag: "tour:entree=force" }, to: "IV_tour_force" },
    ] }),

  IV_tour_portier: P({ title: "Le portier", place: "pallanche",
    text: ["Le portier ouvre le judas. Il voit la bouteille avant de voir vos visages. Il ouvre la porte. À la deuxième rasade, il raconte sa vie. À la cinquième, il dort, la clé de l'escalier toujours au cou. Tu la lui prends. Il sourit dans son sommeil."],
    choices: [{ label: "Monter", to: "IV_tour_escalier" }] }),

  IV_tour_cloche: P({ title: "La cloche", place: "pallanche",
    text: [
      "Minuit et demi. De l'autre côté de la ville, une cloche de Saint-Gilles sonne, seule, à contretemps. Un coup. Deux. La tour se tait pour écouter. Trois.",
      "Puis la tour répond, de son grand bourdon, et dans les étages des fenêtres s'allument, et des pas montent, des dizaines de pas, vers le sommet. Le grand porche est vide. Vous avez le temps d'un Ave.",
    ],
    choices: [{ label: "Monter", to: "IV_tour_escalier" }] }),

  IV_tour_force: P({ title: "La porte",
    combat: { title: "Le corps de garde", enemies: [{ id: "garde_noir", n: 3 }], terrain: "ville", range: "contact",
      win: { fx: { ep: ["seance", 2000], flag: "tour:alerte" }, to: "IV_tour_escalier" },
      lose: { fx: { pv: -5, flag: "tour:alerte" }, to: "IV_tour_escalier" } },
    text: ["La serrure cède au troisième coup. Le silence aussi. Derrière la porte, le corps de garde se lève en renversant les bancs."],
    choices: [] }),

  IV_tour_escalier: P({ title: "L'escalier de service", place: "pallanche",
    text: [
      "L'escalier tourne dans l'épaisseur du mur, étroit, sans fenêtre. Tu comptes les marches. Hylas les comptait, autrefois, pour ne pas se perdre.",
      { if: { has: "tour:alerte" }, text: "En bas, des voix. On vous cherche déjà. Il faut faire vite." },
      "Au quatrième, une porte sous laquelle passe de la lumière. En bas, sous vos pieds, la descente vers le caveau.",
    ],
    choices: [
      { label: "Monter au quatrième, chercher Linette", hide: { seen: "IV_tour_scriptorium" }, to: "IV_tour_scriptorium" },
      { label: "Descendre au caveau", hide: { seen: "IV_tour_caveau" }, to: "IV_tour_caveau" },
      { label: "Sortir", if: { all: [{ seen: "IV_tour_scriptorium" }, { seen: "IV_tour_caveau" }] }, why: "Pas avant d'avoir trouvé ce que tu es venu chercher.", to: "IV_tour_mordace", big: true },
    ] }),

  IV_tour_scriptorium: P({ title: "Le scriptorium", place: "pallanche",
    text: [
      "Une longue salle, cent pupitres, cent chandelles. À chaque pupitre, une page en gris, la tête rasée, qui recopie. Il est minuit passé et elles recopient. Elles ne lèvent pas les yeux.",
      { if: { has: "rupture:avec:pie" }, text: "Pie s'est arrêté sur le seuil. Il ne peut pas avancer. Il a les mains qui tremblent, ces mains qui n'ont jamais tremblé, sur aucune serrure." },
      "Au deuxième rang, une fille de onze ans, un épi derrière la tête, là où les cheveux repoussent. Elle compte les chandelles à voix basse, en écrivant.",
      { if: { all: [PIE_DEDANS, { not: { has: "pal:pie_dedans" } }, { has: "pal:pie_indice" }] }, text: "Au bout de la salle, debout près de la fenêtre, un greffier aux mains tachées d'encre compte les chandelles avec elle. Pie. Il te voit. Il reste immobile. Puis il hoche la tête, une fois, et il va vers sa sœur." },
      { if: { has: "pie:voit_linette_avant" }, text: "Pie est passé devant toi. Il s'agenouille près du pupitre. Elle lève les yeux. Elle le regarde comme on regarde un chien gentil." },
    ],
    choices: [
      { label: "Lui dire son nom, et celui de son frère", to: "IV_tour_linette" },
      { label: "Faire d'abord approcher la petite fille au bonnet", hide: { not: { has: "ame:linette" } }, to: "IV_tour_linette_une" },
    ] }),

  IV_tour_linette: P({ title: "Linette", place: "pallanche",
    text: [
      "Tu t'accroupis à côté d'elle. Tu dis : « Linette. » Elle s'arrête d'écrire. Elle te regarde. Tu dis : « Ton frère s'appelle Pie. Il vole. Il t'a appris à marcher sur les toits. »",
      // The box is on Pie: the scene needs him in the room (in the party, or at the window after pal:pie_indice).
      { if: { has: "pie:choix=boite" }, with: "pie", text: "Pie ouvre la boîte de plomb, là, sur le pupitre. Il en sort une lueur, très petite, comme une luciole. Elle monte, elle tourne, et elle se pose sur la tête rasée de sa sœur, sur l'épi. Linette ferme les yeux. Quand elle les rouvre, elle a neuf ans de souvenirs de plus. Elle dit : « Pie. Tu as mis le temps. »" },
      { if: { has: "pie:choix=boite" }, without: "pie", after: "pal:pie_indice", text: "Pie ouvre la boîte de plomb, là, sur le pupitre. Il en sort une lueur, très petite, comme une luciole. Elle monte, elle tourne, et elle se pose sur la tête rasée de sa sœur, sur l'épi. Linette ferme les yeux. Quand elle les rouvre, elle a neuf ans de souvenirs de plus. Elle dit : « Pie. Tu as mis le temps. »" },
      { if: { has: "pie:choix=boite" }, without: "pie", before: "pal:pie_indice", text: "Elle te regarde longtemps. Elle n'a pas de souvenirs à te rendre. Mais elle pose la plume. Elle se lève. Elle te donne la main, comme on obéit, et puis, au bout de trois pas, elle la serre, et ça, ce n'est plus de l'obéissance." },
      { if: { not: { has: "pie:choix=boite" } }, text: "Elle te regarde longtemps. Elle n'a pas de souvenirs à te rendre. Mais elle pose la plume. Elle se lève. Elle te donne la main, comme on obéit, et puis, au bout de trois pas, elle la serre, et ça, ce n'est plus de l'obéissance." },
    ],
    choices: [{ label: "Redescendre avec elle", fx: { join: "linette", flag: ["linette:iv=libre", "tour:linette"], ep: ["perso", 2000] }, back: "IV_tour_escalier" }] }),

  IV_tour_linette_une: P({ title: "Une seule", place: "pallanche",
    text: [
      "La petite fille au bonnet de travers est montée avec vous. Elle s'avance entre les pupitres, sans peur, en regardant les pages au travail comme on regarde un jeu qu'on ne comprend pas. Elle s'arrête au deuxième rang.",
      "Les deux se regardent. Neuf ans, onze ans. L'une a les genoux sales, l'autre la tête rasée. Elles ont le même épi.",
      "La petite tend la main, et touche la joue de la grande, exactement comme on vérifie qu'une page est sèche.",
      "Tout est noir et silencieux. Il y a, une seconde après, une seule fille au deuxième rang, de onze ans, avec un bonnet de laine de travers sur une tête rasée, qui regarde ses mains pleines d'encre, et qui se met à rire, d'un rire qui fait se retourner cent pages.",
      { with: "pie", text: "« Pie, dit-elle. Pie, tu as vu ? J'ai écrit toute la nuit. Je sais écrire ! »" },
      { without: "pie", after: "pal:pie_indice", text: "« Pie, dit-elle. Pie, tu as vu ? J'ai écrit toute la nuit. Je sais écrire ! »" },
      { without: "pie", before: "pal:pie_indice", text: "Elle lève la tête vers toi. « Tu as vu ? J'ai écrit toute la nuit. Je sais écrire ! »" },
    ],
    choices: [{ label: "Redescendre avec elle", fx: { join: "linette", flag: ["linette:iv=libre", "linette:une", "tour:linette"], ep: ["perso", 3000] }, back: "IV_tour_escalier" }] }),

  IV_tour_caveau: P({ title: "Le caveau", place: "pallanche",
    text: [
      "Trois cents marches. La pierre devient humide, puis froide, puis gelée. Au fond, une porte basse, une salle voûtée, et au milieu, sur un lutrin de fer, un registre noir, fermé, une plume et une clé gravées sur le dos.",
      { if: { not: HYLAS_LA }, text: "Devant le lutrin, sur un tabouret, un vieil homme aux yeux blancs, une canne d'ébène sur les genoux. Hylas. Il tourne la tête vers la porte." },
      { if: { all: [{ not: HYLAS_LA }, { not: { has: "hylas:oublie_enfant" } }] }, text: "« Je reconnais ton pas, dit-il. Tu marches comme ta mère. » Il ne se lève pas. « Il m'a mis là parce qu'il sait que je ne partirai pas. Quelqu'un doit garder. Tant qu'il est là, il ne l'ouvre pas sans moi. C'est tout ce que je peux. »" },
      { if: { all: [{ not: HYLAS_LA }, { has: "hylas:oublie_enfant" }] }, text: "« Qui est là ? » Il ne te reconnaît pas. Tu lui dis qui tu es. Il fronce les sourcils, il cherche. Puis il dit, très lentement : « Il y a un trou, là où tu devrais être. Je l'ai fait moi-même. Je ne sais plus pourquoi. Je sais que c'était pour toi. »" },
      { if: HYLAS_LA, text: "Hylas pose la main sur le lutrin. « Trente ans, dit-il. Trente ans, je suis descendu ici chaque soir, pour vérifier qu'il était fermé. » Il caresse la reliure. Le registre est entrouvert. Quelqu'un l'a ouvert, et ne l'a pas refermé." },
      "Tu t'approches. Le registre d'Anselin. Les milliers de noms barrés. Tu sais les dire, tous. Tu les as dits sur la place de Valcendre.",
    ],
    choices: [
      { label: "Prendre le registre. Il ne le gardera pas", fx: { item: "registre_anselin", flag: ["tour:anselin_pris", "tour:alerte"], ep: ["perso", 2500] }, to: "IV_tour_caveau_pris" },
      { label: "Le laisser. Prendre Hylas, et partir", hide: HYLAS_LA, fx: { flag: "tour:anselin_laisse" }, to: "IV_tour_caveau_hylas" },
      { label: "Le laisser, et partir", hide: { not: HYLAS_LA }, fx: { flag: "tour:anselin_laisse" }, to: "IV_tour_escalier" },
    ] }),

  IV_tour_caveau_pris: P({ title: "Le registre", place: "pallanche",
    text: [
      "Tu prends le registre. Il est lourd, et froid, et il ne brûle pas tes mains. Il brûlait celles de Corbe. Les tiennes, il les reconnaît.",
      "Au-dessus de vos têtes, très haut, une cloche se met à sonner. Pas celle d'Anseau. Celle de la tour. Il sait.",
      { if: { not: HYLAS_LA }, text: "Hylas se lève de son tabouret. « Bien, dit-il. Il était temps que quelqu'un le prenne. Il était temps que ce ne soit pas moi. » Il prend ton bras." },
    ],
    choices: [{ label: "Remonter, vite", fx: { join: "hylas" }, back: "IV_tour_escalier" }] }),

  IV_tour_caveau_hylas: P({ title: "Le gardien", place: "pallanche",
    text: [
      "Tu prends Hylas par le bras. Il résiste, d'abord. « Si je pars, il l'ouvrira. » Tu lui dis qu'il l'a déjà ouvert. Il se tait.",
      "Il se lève. Il pose la main une dernière fois sur la reliure, comme on pose la main sur un cercueil, et il te suit.",
    ],
    choices: [{ fx: { join: "hylas", flag: "hylas:iv=libre" }, back: "IV_tour_escalier" }] }),

  // ---- Mordace on the stairs
  IV_tour_mordace: P({ title: "La lanterne", place: "pallanche",
    text: [
      "Au palier du premier, quelqu'un attend, seul, une lanterne à la main. Un homme de trente-six ans qui en paraît cinquante, maigre, dans une robe de laine grise doublée de fourrure, en plein été. Il a froid. Il a toujours eu froid.",
      "Mordace.",
      "Il lève la lanterne pour voir ton visage. Il le regarde longtemps, comme il l'a regardé, il y a vingt ans, à la lueur de la même lanterne, au col, quand un greffier aveugle redescendait de la montagne avec un enfant de deux ans dans les bras.",
      "« Tu as les yeux de ton père, dit-il. Je ne vais pas t'arrêter. Je n'ai pas de gardes. Je les ai tous envoyés au sommet, écouter les cloches. » Il sourit. « Je voulais te voir. Juste te voir. Vingt ans, c'est long. »",
      { with: "hylas", text: "Il voit Hylas derrière toi. Quelque chose passe sur son visage, très vite, qui ressemble à de la tendresse, et qui n'en est pas. « Maître. Vous avez bonne mine. »" },
    ],
    choices: [{ label: "« Qu'est-ce que tu veux ? »", to: "IV_tour_mordace2" }] }),

  IV_tour_mordace2: P({ title: "L'offre", place: "pallanche",
    fx: { clue: "n_mordace_offre" },
    text: [
      "« Ce que je veux ? » Il réfléchit, comme devant une question neuve. « Que ça s'arrête. »",
      "« Le monde oublie, depuis toujours. Mal. Au hasard. Il oublie les morts qu'il faudrait garder et il garde les querelles qu'il faudrait oublier. Les fondateurs l'ont compris, et ils ont fait ça très mal aussi : un massacre, et un livre, et un trou. Moi, je fais ça bien. Tout le monde écrit. Tout est gardé, au même endroit, bien rangé. Et ce qui fait mal, on le cède, proprement. Une ligne. »",
      "« Il y a une guerre sur la Lisse. Corvanne et Esquarre vont se tuer sur un pont, pour une neige venue d'ailleurs. Je peux l'arrêter. Une ligne dans le Grand Livre : *Corvanne, cédée.* Et demain, plus personne ne se souvient qu'il y a eu une Corvanne, ni une guerre. Les Corvannais se réveillent Esquarrois, en paix, tous vivants. La reine me l'a demandé hier. Elle attend ma réponse. »",
      "« Mais une ligne comme ça, il faut quelqu'un pour la porter. Le pacte a besoin d'un passeur, quelqu'un des deux côtés. Toi. » Il baisse la lanterne. « Je ne te force pas. Je ne peux pas. Viens à la Lisse. Regarde le pont. Compte les morts. Et décide. »",
    ],
    choices: [
      { label: "« Jamais. »", fx: { flag: "mordace:iv=jamais" }, to: "IV_tour_mordace3" },
      { label: "Ne rien répondre", fx: { flag: "mordace:iv=silence" }, to: "IV_tour_mordace3" },
      { label: "« Et Sauvelune ? Tu l'as cédée aussi, pour la paix ? »", fx: { flag: "mordace:iv=sauvelune" }, to: "IV_tour_mordace_sv" },
    ] }),

  IV_tour_mordace_sv: P({ title: "Sauvelune", place: "pallanche",
    text: [
      "« Sauvelune, dit-il. Quatre cents noms. Le prix d'une nuit de cloches. » Il ne baisse pas les yeux. « Je l'ai cédée pour te trouver. Je savais que tu étais là-haut, quelque part, dans un village de la vallée. Je ne savais pas lequel. Alors j'ai fait neiger sur tous, un par un, en regardant qui se souvenait. Tu t'es souvenu. »",
      "Il a l'air presque désolé. « C'est toi qui m'as montré où tu étais. »",
    ],
    choices: [{ label: "Passer devant lui", fx: { flag: "enfant:sait_sauvelune" }, to: "IV_tour_mordace3" }] }),

  IV_tour_mordace3: P({ title: "La sortie", place: "pallanche",
    text: [
      "Il s'écarte. Il vous laisse passer. Il lève la lanterne pour éclairer les marches, poliment, comme un hôte qui raccompagne.",
      { if: { has: "tour:anselin_pris" }, text: "Il voit le registre noir sous ton bras. Il se tait. Ses mains, autour de la lanterne, se crispent, une seule fois. Puis il sourit. « Garde-le. Tu sauras lire ce qui est barré. Moi, je ne sais lire que ce que j'ai écrit. »" },
      "En bas, la porte est ouverte. Dehors, la place aux Clercs, la nuit, les paquets oubliés, les enfants qui dorment sous le porche.",
    ],
    choices: [{ label: "Sortir de Pallanche avant l'aube", to: "IV_pal_fuite" }] }),

  IV_pal_fuite: P({ title: "Avant l'aube", place: "pallanche",
    text: [
      { with: ["linette", "pie"], text: "Linette marche entre Pie et toi, et elle lit à voix haute, une par une, les enseignes des boutiques, et les noms peints sur les façades, tous, jusqu'aux Teinturiers." },
      { with: "linette", without: "pie", text: "Linette marche à côté de toi, et elle lit à voix haute, une par une, les enseignes des boutiques, et les noms peints sur les façades, tous, jusqu'aux Teinturiers." },
      { before: "iv:bleu=rendu", text: "Vous sortez de Pallanche par la teinturerie, dans l'eau grise jusqu'aux genoux. Personne ne vous suit. C'est le plus inquiétant." },
      { after: "iv:bleu=rendu", text: "Vous sortez de Pallanche par la teinturerie, dans l'eau bleue jusqu'aux genoux. Personne ne vous suit. C'est le plus inquiétant." },
      { if: { all: [PIE_DEDANS, { not: { present: "pie" } }] }, text: "Pie vous attend au déversoir. Il a jeté son manteau gris dans la rivière. Il a de l'encre jusqu'aux coudes, et il ne la lave pas." },
      "Au matin, sur la route, vous rattrapez une colonne de soldats de la reine qui monte vers l'est. Vers la Lisse.",
    ],
    choices: [{ label: "Suivre la route de l'est", fx: { join: "pie", flag: "iv:pallanche_fini", ep: ["histoire", 4000] }, travel: "r_iv_est" }] }),
};
