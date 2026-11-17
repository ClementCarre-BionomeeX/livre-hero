// Les Trois Clefs d'Aiguemorne · act III, the common thread (second half): All Saints' night under the skylight of
// the Bon Larron, what the day gave, Maître Crochemore at his forge, and the vote on the plan (`plan_a3`):
// from below (dessous, the hand leads, tonight), at the vigil (veillee, the voice leads, tonight), at the office
// (office, the eye leads, tomorrow evening); a tie means each for oneself when the knell rings (glas).
// Sets monde:a3:fausse=fine|grossiere and sentence:connue for all three when the hand brought the Formulary back.
// Leads to: A3m_coup, A3o_coup, A3v_coup (tonight's plans) or A3c_apres (tomorrow's plans).
var POSTE = function (m, o, v) { return [{ if: { role: "a3", is: "main" }, to: m }, { if: { role: "a3", is: "oeil" }, to: o }, { to: v }]; };
var FORM = { any: [{ has: "monde:a3:formulaire=copie" }, { has: "monde:a3:formulaire=pris" }] };
var ELLE = { any: [{ has: "monde:a3:muettes" }, { has: "monde:a3:carnet" }, { has: "monde:a3:registre" }, { has: "monde:a3:anthelme" }, { has: "monde:a3:clos_dessous" }] };
module.exports = {
  passages: {
    A3c_rdv: { act: "III", title: "Sous la tabatière", place: "larron", ambiance: "nuit", charniere: true,
      fx: { until: 20 },
      text: [
        "Le petit deuil n'a pas de fenêtre. Il a sa tabatière, par où tombe ce soir un carré de ciel roux : dix cimetières rallumés, sous des nuages bas.",
        "La chandelle est par terre, entre les trois paillasses. Le chant de la crypte monte par le plancher. En bas, le père Trentain compte le tronc des âmes ; on entend tomber les sous dans une écuelle, un par un, avec un petit bruit de pluie.",
        "Tu es rentré{e}. Tu attends que les deux autres soient assis.",
      ],
      choices: [{ label: "Mettre en commun la Toussaint", to: "A3c_mise", big: true }] },

    A3c_mise: { act: "III", title: "Ce que la ville a rendu", place: "larron", ambiance: "nuit",
      text: [
        "Vous parlez bas, chacun son tour : d'abord ce qu'on a vu, ensuite ce qu'on en pense. Ce soir, la seconde moitié vient mal.",
        { if: { not: { role: "a3", is: "main" } }, text: "{qui:a3:main} a de la craie jusqu'aux cils, et garde une main à plat sur sa chemise, là où il y a un papier." },
        { if: { has: "monde:a3:chemin" }, text: "**Du côté de la main.** La ville est creuse, et l'on va sous la crypte à pied sec : par l'ossuaire, la galerie des Chantres, et une porte de fer qui a l'air close. Elle cède à la main.", else: "**Du côté de la main.** La ville est creuse, et l'on va sous la crypte ; mais la porte de fer de Monseigneur a tenu, et il ne reste que l'eau : vingt brasses sous la roche, dans le noir, que l'on passe une fois sans y prendre goût." },
        "Sous la Chapelle Ardente, il y a un puits à échelons, et en haut du puits le ventre du catafalque : une boîte de pierre où l'on tient assis, avec un volet qui s'ouvre, du dedans, à un pied de la main droite d'Aldebert.",
        { if: { has: "monde:a3:clef_dessin" }, text: "{qui:a3:main} déplie sa feuille sous la chandelle. La clef y est deux fois, sur ses deux faces, cotée à l'ongle : l'anneau en larme, sept cannelures, cinq dents, la croix à jour.", else: "{qui:a3:main} a vu la clef à un pied. Son croquis a l'anneau bon, la tige vraisemblable, et des dents qui changent de nombre d'une face à l'autre." },
        { if: { has: "monde:a3:fil" }, text: "La main du Gisant s'ouvre par un fil de laiton, qui descend dans la boîte de pierre et passe à trois pouces de l'épaule de qui s'y tient. Deux livres de traction. Cela ne grince pas, ou si peu." },
        { if: { has: "monde:a3:miracle" }, text: "Un chantre l'a vue remuer, cet après-midi. Toute la ville le saura avant minuit : on s'écrasera, cette nuit, à la grille." },
        { if: { has: "monde:a3:relais" }, text: "Les chantres se relaient un par un, à chaque heure : pendant un *Pater*, ils sont six, le nez dans leur livre. À minuit et à quatre heures, grand relais : les sept changent ensemble, en procession, le temps d'un *Miserere*, et l'on mouche la moitié des cierges." },
        { if: { has: "monde:a3:doyen_dessous" }, text: "Monseigneur sait qu'on est venu par-dessous. Il a dit qu'il mettrait deux hommes en bas." },
        { if: { has: "monde:a3:vieux_fer" }, text: "{qui:a3:main} pose encore, près de la chandelle, une petite clef grise, sans numéro, qui a cent ans. Personne ne demande où elle pendait." },
        { if: { has: "monde:a3:douce_dessin" }, text: "Et ceci, dit plus bas : les Gants-Noirs ont recopié le dessin. Sans-Bruit a la même feuille." },
        { if: { not: { role: "a3", is: "oeil" } }, text: "{qui:a3:oeil} a les mains bandées, de la terre sous les ongles, et n'a pas dormi." },
        { if: { has: "monde:a3:procession" }, text: "**Du côté de l'œil.** Demain soir, après la Levée, la Clef monte de la crypte au maître-autel dans une châsse de cristal, sur un brancard, portée par huit Bêcheurs. Dix-neuf marches, par la vis du nord, dont neuf dans le noir ; une station au milieu de la nef, sur deux tréteaux, le temps d'un *De profundis* ; puis l'autel.", else: "**Du côté de l'œil.** Demain soir, la Clef montera de la crypte à l'autel, portée par les Bêcheurs. Par où, en combien de temps, sous quels yeux : on ne l'a pas appris." },
        { if: { has: "monde:a3:becheurs" }, text: "{qui:a3:oeil} porte avec les sept autres. Arrière-main droite : le nez dans le cristal." },
        { if: { has: "monde:a3:vis" }, text: "La châsse ferme par un crochet d'argent, sans serrure. Dans le noir de la vis, le porteur d'arrière a une main libre pendant neuf marches." },
        { if: { has: "monde:a3:cachette" }, text: "On fouille les porteurs à la grille. On ne fouille ni les hampes du brancard, ni les tréteaux, qui dorment cette nuit dans l'appentis de Tassetrou, derrière un loquet." },
        { if: { has: "monde:a3:doyen_oeil" }, text: "Monseigneur a regardé les mains du huitième porteur. Il mettra quelqu'un près de lui dans l'escalier." },
        { if: { not: { role: "a3", is: "voix" } }, text: "{qui:a3:voix} sent le crêpe et la cire, et a gardé sur le bras un voile roulé." },
        { if: { has: "monde:a3:levee" }, text: "**Du côté de la voix.** La Levée se fait en bas, devant trente personnes. Les chantres se taisent. Monseigneur s'agenouille sur la troisième marche, dit sa phrase, et la main s'ouvre ; à cet instant douze pleurantes crient d'une seule voix, et tiennent le cri jusqu'à ce qu'il ait la Clef.", else: "**Du côté de la voix.** La Maison des Larmes a été vue du dedans : quarante voiles, que personne ne distingue. Comment se règle la Levée, la maison ne l'a pas dit." },
        { if: { has: "monde:a3:pleureuse" }, text: "Cette nuit, à la Grande Veillée, {qui:a3:voix} est à genoux en dedans de la grille, à la tête du catafalque, du côté de la main droite. De minuit à une heure.", else: "Cette nuit, à la Grande Veillée, {qui:a3:voix} est dans la nef, un cierge à la main, à dix-neuf marches de la main droite." },
        { if: { has: "monde:a3:clef_vue" }, text: "La clef est peinte à l'évêché, grandeur nature, par un homme qui comptait : une face, cinq dents, la croix. {qui:a3:voix} la récite." },
        { if: { has: "monde:a3:passage_larmes" }, text: "Il y a un escalier de lingerie, de la Maison à la sacristie de la crypte, que les Suisses ne gardent pas : on y entre voilé, on en sort voilé." },
        { if: { has: "monde:a3:larmes_aide" }, text: "Dame Scholastique lèvera son mouchoir quand on le lui fera dire, et quarante personnes pleureront à couvrir une hallebarde qui tombe." },
      ],
      choices: [{ label: "Passer aux gens", to: "A3c_gens", big: true }] },

    A3c_gens: { act: "III", title: "Ceux qu'il faudra compter", place: "larron", ambiance: "nuit",
      text: [
        "Il reste les personnes. À Ferrières, il y en avait une qui comptait tout. Ici, il y en a une qui écoute.",
        { if: { has: "monde:a3:doyen=charme" }, text: "**Monseigneur.** Il a parlé à {qui:a3:voix}, à midi, devant le corps du Remonteur. Il a aimé sa voix. Il la veut près du catafalque." },
        { if: { has: "monde:a3:doyen=soupcon" }, text: "**Monseigneur.** Il a parlé à {qui:a3:voix}, à midi, devant le corps du Remonteur. Il sait qui est sous ce voile. Il a dit : *venez ce soir, vous y serez à votre place.*" },
        { if: { all: [{ not: "monde:a3:doyen=charme" }, { not: "monde:a3:doyen=soupcon" }] }, text: "**Monseigneur.** Il vous attend. Il l'a fait afficher." },
        "À l'évêché, il y a trois chambres blanches, trois lits faits, trois carafes dont il change l'eau lui-même ; et sur chaque table de nuit, un petit carnet neuf, avec le nom d'un de vos postes.",
        { if: { has: "monde:a3:v_alerte" }, text: "Son aumônier a trouvé une pleurante dans son cabinet. Il a pris un numéro, et regardé une taille." },
        { if: { has: "monde:a3:douce_vue" }, text: "**Sans-Bruit.** Elle est dans la ville depuis quatre jours, en pleurante. Elle veut la clef cette nuit.", else: "**Sans-Bruit.** Personne ne l'a vue. Elle a pourtant cassé une roue sur la lande pour arriver avant vous." },
        { if: { has: "monde:a3:douce_plan" }, text: "Son chemin est connu : la petite porte de fer du Clos, au nord du cloître, et de là par-dessous, le long d'un fil de soie noire." },
        { if: { has: "monde:a3:fil_noir" }, text: "Ce fil, {qui:a3:main} l'a coupé. Elle cherchera sa route à tâtons." },
        { if: { has: "monde:a3:douce=treve" }, text: "Il y a trêve, jusqu'à la porte des Larmes : personne ne vend l'autre à l'évêque." },
        { if: { has: "monde:a3:douce=course" }, text: "Elle a dit : à qui arrive." },
        { if: { has: "monde:a3:douce_chassee" }, text: "Elle a perdu ce soir sa place en dedans de la grille : elle chante faux. Il lui reste le dessous." },
        { if: { has: "monde:a3:douce_doit" }, text: "Elle doit quelque chose à {qui:a3:voix}, depuis cet après-midi, et elle a horreur de devoir." },
        { if: { has: "monde:a3:cadenas_larron" }, text: "**Le prévôt.** Il arrive demain à la nuit, et il couche ici, au premier, dans le grand deuil. Sous ce plancher." },
        { if: { has: "monde:a3:cadenas_lettre" }, text: "Il a refusé le lit de l'évêque. Il lui a écrit trois questions : comment il sait où vont trois voleurs ; qui a payé le coche du Remonteur ; et qu'on n'enterre pas le corps avant qu'il ait regardé derrière l'oreille droite." },
        { if: { has: "monde:a3:anthelme" }, text: "**Le chanoine.** Dom Anthelme, archiviste, enterré mercredi aux Clochettes, bien portant lundi. {qui:a3:oeil} l'a sorti de terre cette nuit, vivant. Il est caché. Il avait dit à Monseigneur qu'il écrirait au prévôt." },
        { if: { has: "monde:a3:anthelme_repris" }, text: "**Le chanoine.** Dom Anthelme, archiviste, enterré mercredi aux Clochettes, a sonné cette nuit. Les Suisses l'ont repris avant qu'on ait fini de creuser. Il est à l'infirmerie de l'évêché, « veillé nuit et jour »." },
        { if: { has: "monde:a3:commande_balancier" }, text: "**Le Remonteur.** Le médecin-vérificateur a commandé son corps aux ressusciteurs, pour la fracture : à lever demain soir, pendant l'office, au dépositoire des Cadrans." },
        { if: { has: "monde:a3:balancier_garde" }, text: "{qui:a3:oeil} y a pourvu. Il aura sa fosse, et il sera dedans." },
        { if: { has: "monde:pleureuses:alliees" }, text: "**La Maison des Larmes.** Dame Scholastique sait tout, et regarde avec vous. Elle mènera ses quarante à Aiguemorne pour la Saint-Éloi." },
      ],
      choices: [{ label: "Continuer", to: [{ if: ELLE, to: "A3c_elle" }, { if: FORM, to: "A3c_s_su" }, { to: "A3c_forge" }], big: true }] },

    A3c_elle: { act: "III", title: "Un mot que personne ne dit", place: "larron", ambiance: "nuit",
      text: [
        "Il y a autre chose. Chacun l'a gardé pour la fin, parce que cela ne sert à rien pour la clef, et que cela pèse plus qu'elle.",
        { if: { has: "monde:a3:carnet" }, text: "{qui:a3:voix} sort de sa manche un carnet de moleskine, gras, et le pose ouvert sous la chandelle, à la page qu'il faut. Vous lisez à trois. *Elle a toussé tout l'hiver. Lui ai porté du sirop par le tour.* Plus bas : *J'ai dit : et elle ? Le Syndic a dit : quelle elle ?*" },
        { if: { has: "monde:a3:muettes" }, text: "{qui:a3:main} récite six phrases, dans l'ordre, les yeux fermés. Ce sont des derniers mots, que le Doyen garde dans un tiroir sans étiquette. *Dites à mon père que la quatrième roue accroche. La cause des meuniers était mal jugée ; je le savais. Elle écrit plus droit que moi, laissez-la faire. Ouvrez.* Six fiches sans nom, qui disent *a servi* : dix-neuf ans, huit, quatorze, trois, onze, cinq. Et une septième, qui attend : *a servi quarante-cinq ans*." },
        { if: { has: "monde:a3:clos_dessous" }, text: "Sous le cloître, il y a sept niches. Six cercueils de plomb. Le septième est neuf, ouvert, très court, et le plombier d'en bas a écrit dedans, à la craie : *à poser avant la Saint-Éloi*." },
        { if: { has: "monde:a3:registre" }, text: "{qui:a3:voix} a lu le registre de l'évêque. Sept femmes en cent cinq ans, qui ont *servi* : une fille d'horloger, une fille de greffier, une veuve de notaire, une maîtresse d'école. La première s'appelait Aubrine Crochemore. La septième s'appelle Ludivine Taillefer, enfant trouvée de la Morne. *Sert depuis quarante-cinq ans. Ce sera la dernière.*" },
        { if: { has: "monde:a3:anthelme" }, text: "Dom Anthelme a dit à {qui:a3:oeil} : *on ne grave pas le compte d'une vivante.* Et aussi : *les vieux chanoines les appelaient les Muettes.*" },
        "Vous vous taisez. La chandelle a un champignon, que personne ne mouche.",
        { if: { count: [{ has: "monde:a3:carnet" }, { has: "monde:a3:muettes" }, { has: "monde:a3:registre" }], min: 2 }, text: "Mis bout à bout, cela fait une personne. Elle est dans la Tour, derrière la porte aux trois serrures. Elle a une belle écriture, toute droite. Elle demande si les amandiers sont en fleur. Trois hommes ont décidé qu'il n'en faudrait plus ; et l'un d'eux a déjà tracé ses guillemets." },
        { if: { count: [{ has: "monde:a3:carnet" }, { has: "monde:a3:muettes" }, { has: "monde:a3:registre" }], min: 2 }, text: "Aucun de vous trois ne dit le mot qui vient ensuite. Il est trop gros pour une chambre sans fenêtre." },
        { if: { is: { reve: "nom" } }, text: "*Enfant trouvée de la Morne.* Tu as la main sur ta clef de baptême sans l'avoir décidé." },
        "« Loridan a dit : *la Langue du Juge* », finit par souffler quelqu'un. « Il a dit qu'on la lui rapporte. »",
        "Il a dit aussi, à la table de la Clef Tordue, que la personne qui payait n'était pas riche, et qu'elle avait peu de dépenses.",
      ],
      choices: [{ label: "Continuer", to: [{ if: FORM, to: "A3c_s_su" }, { to: "A3c_forge" }], big: true }] },

    A3c_s_su: { act: "III", title: "Cinq rubriques", place: "larron", ambiance: "nuit",
      fx: { flag: "sentence:connue", clue: "s_su" },
      text: [
        { if: { has: "monde:a3:formulaire=pris" }, text: "{qui:a3:main} tire de sa chemise deux feuillets de vélin, coupés au ras de la couture. L'écriture est fine, penchée. C'est celle du placard, sur la place.", else: "{qui:a3:main} retourne sa feuille. Au dos du dessin, il y a une demi-page de son écriture, copiée mot pour mot sur un cahier de vélin que Monseigneur avait laissé ouvert." },
        "*Formulaire du Scellement, pour servir en la Nuit des Clefs, après la Sentence.*",
        "Vous le lisez deux fois. La Sentence *selon le cylindre*, et le nom du Gouverneur *pour toujours*. Le plomb sur la porte aux trois serrures. Le tour de la chapelle muré à chaux et à sable, *le clerc de semaine ayant été envoyé ailleurs*. La dernière dalle du Clos. Les trois clefs dans la main du Gisant.",
        "Ce qu'on vous a dit à Ferrières par morceaux, un mémoire de graveur, un mot fondu dans un moule, tient ici en cinq lignes, avec l'heure. On ne veut pas seulement faire dire au Bronze un nom. On veut qu'il n'ait plus jamais à en dire un autre ; et ce qu'il y a derrière la porte, on le ferme avec.",
        { if: { has: "monde:a3:formulaire=pris" }, text: "Il manque deux feuillets à un cahier, sous la cathédrale. Il le sait depuis ce soir." },
      ],
      choices: [{ label: "Continuer", to: "A3c_forge", big: true }] },

    // ───────────────────────────── The forger ─────────────────────────────
    A3c_forge: { act: "III", title: "L'arrière-boutique", place: "larron", ambiance: "nuit", branch: [
      { if: { has: "monde:a3:clef_dessin" }, to: "A3c_forge_fine" }, { to: "A3c_forge_gros" }] },
    A3c_forge_fine: { act: "III", title: "D'après nature", place: "larron", ambiance: "nuit",
      fx: { set: { "monde:a3:fausse": "fine" }, until: 22 },
      text: [
        "Vous descendez. Maître Crochemore a allumé la forge du plombier ; il vous attend debout, en tablier de cuir, ses onze limes en rang, avec la figure d'un homme à qui l'on doit deux heures.",
        "Il prend la feuille. Il la tient à bout de bras, puis sous son nez. Il ne dit rien pendant le temps d'un *Pater*, ce qui est, de sa part, un hommage.",
        "« Cotée à l'ongle. » Il renifle. « Quel ongle ? Ah. Vous l'avez tracé en marge. C'est la première chose sensée que je vois faire à l'un de vous. » Son doigt suit le panneton. « Cinq dents. La quatrième est douteuse : vous avez mis une croix, vous avez bien fait, je la ferai moyenne. La croix à jour, au tiers du bord. Sept cannelures. » Il lève les yeux. « C'est une clef d'Aubry. Je reconnaîtrais sa façon de tailler une dent entre mille : il biseautait toujours la dernière, pour qu'elle entre sans forcer. Vous ne pouviez pas l'inventer. »",
        { if: { has: "monde:a3:vieux_fer" }, text: "Il prend ensuite la petite clef grise, la fait sonner sur l'enclume, la mord. « Du fer de cendre. On n'en coule plus depuis soixante ans ; la mine est noyée. Où avez-vous… Non. Ne me le dites pas. » Il la pose près du creuset avec un soin de bijoutier. « Je la fondrai dans l'anneau et dans la tige. Elle aura le gris. À un pied, à la lumière des cierges, un évêque n'y verra rien. »", else: "Il fouille sa caisse, en tire trois barreaux, les compare à la flamme. « Je n'ai pas le gris. Je l'aurai à peu près, à la fumée et au vinaigre. À la lueur des cierges, cela passera. Au grand jour, je ne le jurerais pas. »" },
        "Il se met à l'étau. Vous n'existez plus.",
        "Deux heures plus tard, il vous rappelle d'un coup de lime sur l'enclume. Elle est sur un chiffon, encore tiède : une larme, sept cannelures, cinq dents, une croix. Tu la prends. Elle a le poids de l'autre, ou ce que tu en imagines.",
        "« Elle n'ouvre rien, dit Maître Crochemore. Elle n'a jamais vu de serrure. C'est la seule chose que j'aie faite de ma vie qui ne marche pas, et c'est exprès. » Il essuie ses bésicles. « Emportez-la. Et votez, puisqu'il faut que vous votiez. »",
      ],
      choices: [{ label: "Remonter voter", to: "A3c_vote", big: true }] },
    A3c_forge_gros: { act: "III", title: "D'après ouï-dire", place: "larron", ambiance: "nuit",
      fx: { set: { "monde:a3:fausse": "grossiere" }, until: 22 },
      text: [
        "Vous descendez. Maître Crochemore a allumé la forge du plombier ; il vous attend debout, en tablier de cuir, ses onze limes en rang, avec la figure d'un homme à qui l'on doit deux heures.",
        { if: { has: "monde:a3:clef_vue" }, text: "Il écoute {qui:a3:voix} réciter le portrait. Il regarde le croquis de {qui:a3:main}. Il met les deux bout à bout, en homme qui assemble un mouvement avec des pièces de deux horloges.", else: "Il regarde le croquis de {qui:a3:main}, d'un côté, de l'autre. Il le retourne, comme si le dos pouvait en savoir plus long." },
        "« Un anneau en larme. Une tige cannelée. Une croix au milieu du panneton. Et des dents. » Il vous regarde par-dessus ses bésicles. « *Des dents.* Quatre, cinq, six, au choix du client. Je vous avais demandé une chose. »",
        "Il ne crie pas, ce qui est pire. Il prend un barreau, le pèse.",
        { if: { has: "monde:a3:clef_vue" }, text: "« Le peintre en a vu cinq, sur une face. Je ferai cinq. Pour leur longueur, je prendrai celles que mon aïeul donnait à ses clefs de sacristie, en priant qu'il n'ait pas eu ce jour-là une fantaisie. »", else: "« Je ferai cinq, parce que c'est un nombre d'église. Pour leur longueur, je prendrai celles que mon aïeul donnait à ses clefs de sacristie, en priant qu'il n'ait pas eu ce jour-là une fantaisie. »" },
        { if: { has: "monde:a3:vieux_fer" }, text: "Il prend la petite clef grise, la fait sonner, la mord. « Du fer de cendre. Bien. Au moins elle aura la couleur. De loin, sous des cierges, la couleur est tout ce qu'on voit d'une clef. »", else: "« Et je n'ai pas le gris. Je l'aurai à peu près, à la fumée et au vinaigre. »" },
        "Deux heures plus tard, elle est sur un chiffon, encore tiède. Elle ressemble. Tu la prends ; tu la tournes ; tu as vu l'autre, ou on te l'a décrite, et tu sens, sans pouvoir dire où, que celle-ci est une cousine.",
        "« À dix pas, dans une main, elle trompe un évêque, dit Maître Crochemore. À deux pas, elle trompe un bedeau. À un pied, elle ne trompe qu'un homme qui n'a jamais regardé. » Il range ses limes. « Tout dépend donc de savoir si Monseigneur a jamais regardé. Emportez-la. Et votez. »",
      ],
      choices: [{ label: "Remonter voter", to: "A3c_vote", big: true }] },

    // ───────────────────────────── The vote ─────────────────────────────
    A3c_vote: { act: "III", title: "Trois portes", place: "larron", ambiance: "nuit",
      text: [
        "Il est dix heures. Sur la place, la file de la Grande Veillée s'allonge déjà depuis le parvis : on entend, par la tabatière, ce piétinement de foule qui parle bas.",
        "La fausse clef est sur la paillasse du milieu, dans son chiffon. Vous prenez ce qu'il y a dans vos poches : un os de poulet, resté du souper ; un bout de cierge ; une plume, tombée d'un oreiller du père Trentain.",
        { if: { has: "monde:a3:fil" }, text: "**L'os : par-dessous.** Cette nuit, à minuit, au grand relais. On entre par les carrières, on monte dans le ventre du catafalque, on tire un fil de laiton : la main s'ouvre, on change la clef, on rend le fil. Sept chanoines tournent autour sans regarder. C'est le pays de la main : {qui:a3:main} mènerait.", else: "**L'os : par-dessous.** Cette nuit, à minuit, au grand relais. On entre par les carrières, on monte dans le ventre du catafalque, et l'on est à un pied de la main droite. Reste à l'ouvrir : elle est fermée depuis cent cinq ans, et l'on dit qu'il faudrait la casser. C'est le pays de la main : {qui:a3:main} mènerait." },
        { if: { has: "monde:a3:pleureuse" }, text: "**Le cierge : la Veillée.** Cette nuit, de minuit à une heure, {qui:a3:voix} est à genoux en dedans de la grille, à une longueur de bras du Gisant, sous un voile où l'on cacherait un chat. Dans la demi-nuit du grand relais, c'est une manche qui passe sur une main. C'est le pays de la voix : {qui:a3:voix} mènerait.", else: "**Le cierge : la Veillée.** Cette nuit, pendant le grand relais. {qui:a3:voix} est dans la nef ; il faudrait, d'ici minuit, gagner une place en dedans de la grille, où quatre pleurantes sont à genoux. C'est le pays de la voix : {qui:a3:voix} mènerait." },
        { if: { has: "monde:a3:becheurs" }, text: "**La plume : l'office.** Demain soir. On laisse Monseigneur lever la vraie clef devant son chapitre, la poser lui-même dans le cristal ; et c'est dans la vis du nord, pendant neuf marches de nuit, que le huitième porteur ouvre le crochet. C'est le pays de l'œil : {qui:a3:oeil} mènerait.", else: "**La plume : l'office.** Demain soir. On laisse Monseigneur lever la vraie clef, la poser dans le cristal, et on la change en route, entre la crypte et l'autel. Il faudrait être parmi les huit qui portent, et l'on n'y est pas. C'est le pays de l'œil : {qui:a3:oeil} mènerait." },
        "*Chacun met sa pièce dans le bonnet de nuit de Maître Crochemore, le poing fermé. S'il en sort trois différentes, il n'y aura pas de plan : chacun fera de son mieux, demain, quand sonnera le glas.*",
      ],
      choices: [
        { label: "L'os : par-dessous, cette nuit", voix: "plan_a3", option: "dessous", to: "A3c_urne" },
        { label: "Le cierge : la Veillée, cette nuit", voix: "plan_a3", option: "veillee", to: "A3c_urne" },
        { label: "La plume : l'office, demain soir", voix: "plan_a3", option: "office", to: "A3c_urne" },
      ] },
    A3c_urne: { act: "III", title: "Le bonnet de nuit", place: "larron", ambiance: "nuit", charniere: true,
      text: [
        "Tu as mis ta pièce dans le bonnet, le poing fermé. Cela n'a fait aucun bruit : un os, de la cire, une plume.",
        "Le bonnet est par terre, près de la chandelle. Maître Crochemore, qui l'a prêté de mauvaise grâce, attend sur le palier qu'on le lui rende.",
      ],
      choices: [{ label: "Retourner le bonnet", to: "A3c_tranche", big: true }] },
    A3c_tranche: { act: "III", title: "Le compte", place: "larron", branch: [
      { if: { scrutin: "plan_a3", is: "dessous" }, to: "A3c_plan_dessous" },
      { if: { scrutin: "plan_a3", is: "veillee" }, to: "A3c_plan_veillee" },
      { if: { scrutin: "plan_a3", is: "office" }, to: "A3c_plan_office" },
      { to: "A3c_plan_glas" }] },

    A3c_plan_dessous: { act: "III", title: "Par-dessous", place: "larron", ambiance: "nuit",
      text: [
        "Les os l'emportent. Ce sera cette nuit, par les carrières.",
        { if: { role: "a3", is: "main" }, text: "C'est ton pays. Tu prends la fausse clef, dans son chiffon, contre ta peau. Tu as deux heures pour refaire, de nuit, le chemin de ce matin, et pour être assis{e} dans la boîte de pierre quand le sablier des chantres se retournera sur minuit." },
        { if: { role: "a3", is: "oeil" }, text: "Tu seras dehors : le cloître, la petite porte de fer, les bouches des carrières. Quelqu'un d'autre veut descendre cette nuit par le même trou. Il faut que {qui:a3:main} n'ait personne dans le dos sous cette église, le temps d'un *Miserere*." },
        { if: { role: "a3", is: "voix" }, text: "Tu seras à la Veillée, sous ton voile, là où Dame Scholastique t'a mis{e}. Il faut quelqu'un près de cette grille pour voir ce que voient les chanoines, et pour leur donner autre chose à regarder." },
        "On ne se souhaite rien. La Douairière disait que la chance est une personne susceptible, et qu'il ne faut pas lui parler avant.",
      ],
      choices: [{ label: "Partir, chacun de son côté", to: POSTE("A3m_coup", "A3o_coup", "A3v_coup"), big: true }] },
    A3c_plan_veillee: { act: "III", title: "La Veillée", place: "larron", ambiance: "nuit",
      text: [
        "Les cierges l'emportent. Ce sera cette nuit, à la grille.",
        { if: { role: "a3", is: "voix" }, text: "C'est ton pays. Tu prends la fausse clef, dans son chiffon ; tu la couds d'un point dans la doublure de ta manche gauche, anneau en bas, qu'elle tombe dans ta paume quand tu baisseras le bras. Tu as deux heures pour être un voile parmi quarante, et une heure pour être celui du coin." },
        { if: { role: "a3", is: "main" }, text: "Tu seras dessous. Une main fermée depuis cent cinq ans ne s'ouvre pas pour une manche qui passe : il faut que quelqu'un, dans la boîte de pierre, lui donne la permission. Tu redescends par les carrières ; tu attendras que {qui:a3:voix} frappe du genou sur la dalle." },
        { if: { role: "a3", is: "oeil" }, text: "Tu seras dans la file des fidèles, un cierge à la main, à défiler devant la grille. Il faut quelqu'un à trois pas du catafalque pour occuper six chanoines, deux Suisses, et tout ce qui dans cette crypte a des yeux." },
        "On ne se souhaite rien. La Douairière disait que la chance est une personne susceptible, et qu'il ne faut pas lui parler avant.",
      ],
      choices: [{ label: "Partir, chacun de son côté", to: POSTE("A3m_coup", "A3o_coup", "A3v_coup"), big: true }] },
    A3c_plan_office: { act: "III", title: "L'office", place: "larron", ambiance: "nuit",
      text: [
        "Les plumes l'emportent. Ce sera demain soir, entre la crypte et l'autel.",
        { if: { role: "a3", is: "oeil" }, text: "C'est ton pays. Tu garderas la fausse clef. Elle descendra demain dans la crypte par un chemin que les Suisses ne fouillent pas, et elle remontera dans le cristal, sous le nez de toute une ville, à la place de l'autre." },
        { if: { role: "a3", is: "main" }, text: "Tu as cette nuit de l'ouvrage de menuisier, dans un appentis qui ferme au loquet. Demain, tu seras dans la nef : il y aura une chose à reprendre, et un chemin à tenir ouvert." },
        { if: { role: "a3", is: "voix" }, text: "Tu seras à la Levée, sous ton voile, où Dame Scholastique t'aura mis{e}. Il faut quelqu'un dans cette crypte pour voir les mains de Monseigneur, et pour crier au bon moment." },
        "Il reste une nuit et un jour. La Grande Veillée se fera sans vous ; vous irez y défiler, comme tout le monde, pour voir, et vous tâcherez de dormir.",
      ],
      choices: [{ label: "Souffler la chandelle", to: "A3c_apres", big: true }] },
    A3c_plan_glas: { act: "III", title: "Un os, un cierge, une plume", place: "larron", ambiance: "nuit",
      text: [
        "Tu retournes le bonnet. Il en tombe un os, un bout de cierge, une plume.",
        "Maître Crochemore, sur le palier, a entendu le silence. Il reprend son bonnet, regarde ce qu'il y a par terre, et dit seulement : « Trois horloges, trois heures. J'aurais dû m'y attendre. »",
        "Dans la maison Berlue, on ne recommence pas un vote. Il n'y aura donc ni carrières, ni Veillée. Il y aura demain soir, parce que c'est le dernier moment où la clef est encore dans cette ville ; et à l'office des Trépassés, on sonne le glas pendant toute la Levée.",
        { if: { role: "a3", is: "main" }, text: "Tu seras où sont les mains : dessous." },
        { if: { role: "a3", is: "oeil" }, text: "Tu seras où sont les yeux : dans la nef, avec ceux qui portent ou ceux qui regardent." },
        { if: { role: "a3", is: "voix" }, text: "Tu seras où sont les voix : sous un voile, parmi celles qui crient." },
        "On souffle la chandelle. La fausse clef reste sur la paillasse du milieu, dans son chiffon. Personne ne l'a prise ; ou bien chacun attend que les deux autres dorment.",
      ],
      choices: [{ label: "Tâcher de dormir", to: "A3c_apres", big: true }] },
  },

  extras: {
    scrutins: {
      plan_a3: { title: "Le moment de la clef de Cendre", options: { dessous: "Par-dessous", veillee: "La Veillée", office: "L'office" }, tie: "glas", tieSay: "Un os, un cierge, une plume : chacun fera de son mieux, quand sonnera le glas." },
    },
    clues: {
      s_su: { rev: "S", text: "Mis en commun à Ossevaux : le Formulaire du Scellement. Après la Sentence « selon le cylindre », le plomb sur la porte aux trois serrures, le tour de la chapelle muré, la dernière dalle du Clos, et les trois clefs dans la main du Gisant." },
    },
  },
};
