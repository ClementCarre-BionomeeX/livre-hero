// Les Fils de la Marée · what lies between the acts (Clément, 15/11: a reading nearer two hours).
// - Before each book of act II, a remembrance (souvenir) of the dead Doyenne: Sévan's oath at Nella's birth
//   (sevan:serment=absolu | besoin), Jasse's mother dying (jasse:souvenir=question | promesse), Oriane's first day as
//   secretary (oriane:aveu_ambition | oriane:servir). Read again in acts II and III, at midnight and in the fates.
// - Before each book of act III, a second remembrance: the iron key at the Saint-Martin (sevan_clef=prise | pourquoi),
//   Nella's first day at the palace (jasse_dame=demande | crie), the Doyenne's signature (oriane:signature | nom_propre).
// - Then the third day, from the morning to the lanterns: Sévan and an old boatman who asks for
//   the poppy (sevan:pavot2), then what he writes (sevan:lettre3); Jasse in the flood (jasse:registre, jasse:sauveur,
//   jasse:tombe); Oriane at the vigil of the dead (a visitor) and the speech she writes (discours=loi | verite | basport).
var SV_TEMPLE = { any: [{ has: "sevan_temple=soumis" }, { has: "sevan_temple=refus" }] };
var SV_TOUR = { all: [{ has: "rapport=public" }, { is: { sevan_cache: null } }, { not: SV_TEMPLE }] };
var SV_GOUGE = { all: [{ has: "sevan_cache=gouge" }, { not: SV_TEMPLE }] };
var SV_LIBRE = { all: [{ not: SV_TEMPLE }, { not: SV_TOUR }, { not: SV_GOUGE }] };
module.exports = {
  // ================================================================ act II: three remembrances
  S2V: { act: "II", title: "Il y a dix-neuf ans", souvenir: "Il y a dix-neuf ans",
    text: [
      "C'est un hiver de grande passe, le plus froid depuis trente ans. La lagune a gelé sur les bords, sur une largeur de dix pas, et les barques restent à quai. On t'a fait venir de nuit, par la porte du jardin, dans une maison du quai des Saules que la Doyenne loue sous un autre nom.",
      "Ermesinde Valcor a quarante-trois ans. Elle est couchée dans un lit de location, sous des draps d'emprunt, et elle serre les dents depuis six heures. En arrivant, elle t'a fait jurer le silence, et elle se l'impose d'abord à elle-même : de toute la nuit, elle n'a pas crié une fois.",
      "À l'aube, l'enfant vient. Une fille, petite, bleue, sans souffle. Tu la frottes, tu la retournes, tu lui souffles dans la bouche. Elle crache, elle hurle. Ermesinde rit en pleurant, une seule fois, puis elle tend les bras.",
      "Elle garde l'enfant contre elle une heure. Puis elle te la rend. « Les Ferrant viennent la prendre à midi. Ils ont perdu une petite fille le mois dernier. Ils l'appelleront comme ils voudront. » Elle te regarde. « Toi, tu sais. Jure-moi que tu ne diras rien. »",
    ],
    choices: [
      { label: "« Je le jure. Jusqu'à ma mort. »", fx: { set: { sevan_serment: "absolu" } }, to: "S2V_absolu", big: true },
      { label: "« Je le jure, jusqu'au jour où elle en aura besoin. »", fx: { set: { sevan_serment: "besoin" } }, to: "S2V_besoin", big: true },
    ] },
  S2V_absolu: { act: "II", title: "Le serment", souvenir: "Il y a dix-neuf ans",
    text: [
      "Ermesinde ferme les yeux. « Bien. » Elle s'en tient à ce mot. Tu sens qu'elle te croit, et que le poids vient de passer de ses épaules aux tiennes.",
      "Tu emportes l'enfant dans ton manteau jusqu'à la barque des Ferrant, à midi, dans le brouillard. La mère Ferrant la prend en silence. Le père paie le batelier avec une bourse trop lourde pour un passeur.",
      "Tu as tenu ce serment dix-neuf ans. Il pèse aujourd'hui le poids exact d'une jeune femme en cellule.",
    ],
    choices: [{ label: "Le jour des masques", to: "S2" }] },
  S2V_besoin: { act: "II", title: "Le serment", souvenir: "Il y a dix-neuf ans",
    text: [
      "Ermesinde te regarde longtemps. Elle sait ce que vaut une réserve dans un serment ; elle en a glissé dans tous les traités de la ville. « Et qui décidera du besoin ? — Moi. »",
      "Elle hoche la tête. « Alors décide bien. » Puis elle se tourne vers le mur, et tu emportes l'enfant.",
      "Dix-neuf ans plus tard, tu te demandes si ce jour est venu, ou s'il est passé sous ton nez.",
    ],
    choices: [{ label: "Le jour des masques", to: "S2" }] },

  J2V: { act: "II", title: "Il y a six ans", souvenir: "Il y a six ans",
    text: [
      "Ta mère meurt dans la chambre du haut, celle qui donne sur le canal des Vanniers, l'année de la fièvre des marais. Tu as seize ans. Nella en a treize ; elle est au palais depuis deux ans, et on lui a refusé la permission de venir.",
      "Ta mère a les lèvres sèches et les yeux trop grands. Elle te reconnaît mal. Elle t'appelle par le nom de ton père, puis par le tien. Puis elle te prend le poignet, avec une force qui te surprend.",
      "« Nella n'est pas à nous. Elle est à l'eau. »",
      "Elle répète la phrase deux fois. Puis elle lâche ton poignet et regarde le plafond comme on regarde un ciel.",
    ],
    choices: [
      { label: "« Quelle eau, maman ? Qu'est-ce que tu veux dire ? »", fx: { set: { jasse_souvenir: "question" }, clue: "eau" }, to: "J2V_question", big: true },
      { label: "« Je veillerai sur elle. Toujours. »", fx: { set: { jasse_souvenir: "promesse" } }, to: "J2V_promesse", big: true },
    ] },
  J2V_question: { act: "II", title: "L'eau", souvenir: "Il y a six ans",
    text: [
      "Ta mère tourne la tête vers toi. Pendant une seconde, elle est parfaitement lucide. « Demande à la vieille de l'Ancre. Pas maintenant. Le jour où on voudra te la prendre. »",
      "Puis elle se met à parler du prix du poisson, et elle meurt avant le soir, sur ce sujet-là.",
      "Tu as gardé la question pour toi. Tu as cru à la fièvre. Il a fallu une Doyenne morte pour que la phrase remonte, comme un noyé au printemps.",
    ],
    choices: [{ label: "Le jour des masques", to: "J2" }] },
  J2V_promesse: { act: "II", title: "La promesse", souvenir: "Il y a six ans",
    text: [
      "Ta mère sourit. A-t-elle entendu ? Tu l'ignores. Elle meurt avant le soir, la main dans la tienne.",
      "Le lendemain, tu vas au palais, et tu attends Nella trois heures à la porte des cuisines. Elle sort enfin, le tablier encore noué, et tu lui annonces la nouvelle. Devant toi, elle garde les yeux secs. Elle pleure le soir, sur le ponton, et tu restes à côté d'elle jusqu'à la nuit.",
      "Tu as tenu parole six ans. Aujourd'hui, tu cherches comment la tenir encore.",
    ],
    choices: [{ label: "Le jour des masques", to: "J2" }] },

  O2V: { act: "II", title: "Il y a douze ans", souvenir: "Il y a douze ans",
    text: [
      "C'est ton premier jour au palais. Tu as vingt-deux ans, une robe trop neuve, et trois plumes taillées dans ton écritoire. Ta tante te fait asseoir à la petite table, sous la fenêtre, et commence à dicter, les yeux sur le canal.",
      "Une lettre au doge de Lisse. Une lettre au Grand Argentier de l'époque, le père de Morvan. Une lettre à une veuve de Bas-Port qui réclame la barque de son mari. Ermesinde dicte les trois du même ton. Tu écris vite. Ta main tremble à la troisième.",
      "À midi, elle se tait, prend tes feuilles et les lit. Elle corrige une virgule. Puis elle relève les yeux.",
      "« Pourquoi veux-tu ce poste, Oriane ? Tu pourrais épouser n'importe qui. Pourquoi venir écrire mes lettres ? »",
    ],
    choices: [
      { label: "« Pour apprendre à gouverner. »", fx: { flag: "oriane:aveu_ambition" }, to: "O2V_ambition", big: true },
      { label: "« Pour vous servir, ma tante. »", fx: { flag: "oriane:servir" }, to: "O2V_servir", big: true },
    ] },
  O2V_ambition: { act: "II", title: "Une réponse", souvenir: "Il y a douze ans",
    text: [
      "Ermesinde te regarde un long moment. Puis elle rit, d'un vrai rire, le seul que tu lui entendras en douze ans.",
      "« Enfin quelqu'un d'honnête dans cette famille. » Elle te rend tes feuilles. « Alors écoute bien ce que je dicte, et plus encore ce que je ne dicte pas. »",
      "Tu l'as écoutée douze ans. Tu sais aujourd'hui que l'essentiel tenait dans les silences.",
    ],
    choices: [{ label: "Le jour des masques", to: "O2" }] },
  O2V_servir: { act: "II", title: "Une réponse", souvenir: "Il y a douze ans",
    text: [
      "Ermesinde te regarde un long moment. Puis elle reprend sa dictée, comme si tu avais répondu à côté.",
      "Le soir, en partant, elle s'arrête à ta table. « Tu as dit me servir. C'est une belle réponse. Elle est fausse, mais elle est belle. » Elle pose la main sur ton épaule, une seconde. « Un jour, tu me diras la vraie. »",
      "Tu as gardé cette réponse pour toi. Elle est morte avant.",
    ],
    choices: [{ label: "Le jour des masques", to: "O2" }] },

  // ================================================================ act III: three more remembrances, then the third day
  S3M: { act: "III", title: "La Saint-Martin", souvenir: "À la Saint-Martin",
    text: [
      "C'est un soir de novembre, il y a quatre mois. Il pleut sur la lagune depuis trois jours. Ermesinde Valcor t'a fait appeler pour une toux, et la toux est un prétexte : elle t'attend assise, habillée, devant le feu de son cabinet, avec deux verres de vin chaud.",
      "Elle parle d'abord des comptes de l'hospice, des toits du Temple qui fuient, du prix du bois. Puis elle sort de sa manche une clef de fer noir, longue comme la main, à l'anneau usé par cent ans de doigts. Elle la pose sur la table, entre les deux verres.",
      "« La clef du Temple. Elle dormait dans le tabernacle de la chapelle depuis la fondation. Mon sacristain me l'a apportée ce matin. Le père Anselme s'en apercevra dimanche. »",
      "Elle pousse la clef vers toi, du bout de l'index. « Tu la garderas. Et à partir de ce soir, c'est toi qui m'entendras en confession. J'ai des choses à dire, et je veux les dire à quelqu'un qui sait se taire. »",
    ],
    choices: [
      { label: "Prendre la clef, sans rien demander", fx: { set: { sevan_clef: "prise" } }, to: "S3M_prise", big: true },
      { label: "« Pourquoi moi, et pas le Temple ? »", fx: { set: { sevan_clef: "pourquoi" } }, to: "S3M_pourquoi", big: true },
    ] },
  S3M_prise: { act: "III", title: "La clef de fer", souvenir: "À la Saint-Martin",
    text: [
      "Tu prends la clef. Elle est froide, plus lourde qu'elle n'en a l'air : une demi-livre, au jugé. Tu la glisses dans la poche intérieure de ton manteau, celle où tu ranges tes lancettes.",
      "Ermesinde hoche la tête, satisfaite, comme on approuve un bon élève. « Voilà pourquoi toi. » Elle lève son verre. Vous buvez le vin chaud en silence, en écoutant la pluie.",
      "Ce soir-là, elle se confesse pendant une heure. Tu l'écoutes en regardant le feu. Quand tu repars, la clef pèse contre ta poitrine, et elle y pèse depuis quatre mois.",
    ],
    choices: [{ label: "Le troisième jour", to: "S3V" }] },
  S3M_pourquoi: { act: "III", title: "La clef de fer", souvenir: "À la Saint-Martin",
    text: [
      "Ermesinde sourit, de ce sourire de séance qui annonce une phrase préparée depuis longtemps.",
      "« Parce que le Temple a ses raisons d'ouvrir les coffres, et qu'il les appelle la volonté de la Marée. Toi, tu as seulement les miennes. Et parce qu'un médecin regarde ce qu'il a devant lui. Un prêtre regarde ce qu'il espère y trouver. »",
      "Tu prends la clef. Ce soir-là, elle se confesse pendant une heure. Tu retiens surtout la phrase d'avant, celle sur les médecins. Depuis, tu te demandes si elle disait vrai, ou si elle t'a flatté pour obtenir ton oui.",
    ],
    choices: [{ label: "Le troisième jour", to: "S3V" }] },

  J3M: { act: "III", title: "La porte des cuisines", souvenir: "Il y a huit ans",
    text: [
      "Nella a onze ans. C'est son premier jour au palais. Ta mère lui a cousu un tablier neuf dans une vieille nappe, et tu rames, à quatorze ans, la barque familiale jusqu'à la porte des cuisines, côté canal.",
      "Nella se tient très droite à l'avant, les mains sur les genoux. Elle a mis ses souliers du dimanche. Ses yeux restent secs. Toi, tu as envie de faire demi-tour à chaque coup de rame.",
      "À la porte des cuisines, une femme en manteau gris attend sur la marche, à côté de l'intendante, le capuchon sur la tête. Elle regarde Nella monter les marches. Elle la regarde longtemps, avec une attention qui t'échappe, comme on regarde une lettre attendue.",
      "Puis l'intendante emmène ta sœur, et la porte se ferme. La femme en gris reste sur la marche. Elle te regarde, toi, dans ta barque, avec ta rame trop grande.",
    ],
    choices: [
      { label: "« Qui êtes-vous, madame ? »", fx: { set: { jasse_dame: "demande" } }, to: "J3M_dame", big: true },
      { label: "Crier à la porte fermée : « Tu reviens quand tu veux, Nella ! »", fx: { set: { jasse_dame: "crie" } }, to: "J3M_crie", big: true },
    ] },
  J3M_dame: { act: "III", title: "La dame en gris", souvenir: "Il y a huit ans",
    text: [
      "La femme sourit. « Quelqu'un qui passait. » Elle descend une marche et te tend une pièce d'argent, une vraie, au sceau de la ville. « Pour le passeur. Ramène-la souvent voir ta mère. Ça lui fera du bien. »",
      "Tu prends la pièce. « Lui » : ta mère, ou Nella ? La question reste ouverte. La femme remonte, et la porte se ferme derrière elle aussi.",
      "Tu as gardé la pièce. Elle est dans la boîte à hameçons, sous ton banc de barque. Tu la regardes parfois, sans savoir pourquoi.",
    ],
    choices: [{ label: "Le troisième jour", to: "J3V" }] },
  J3M_crie: { act: "III", title: "La porte fermée", souvenir: "Il y a huit ans",
    text: [
      "Ta voix rebondit sur l'eau du canal. Une fenêtre s'ouvre au premier étage, et une tête de marmiton te fait une grimace. La porte reste fermée.",
      "La femme en gris te regarde avec une sorte de tendresse. « Elle t'a entendu, dit-elle. Elle a entendu. » Puis elle remonte les marches, et tu rentres seul, à contre-courant, en ramant trop fort.",
      "Des années plus tard, Nella t'a dit qu'elle avait entendu. Elle avait pleuré dans l'office, le front contre un sac de farine, et une dame inconnue lui avait essuyé les joues avec un mouchoir brodé.",
    ],
    choices: [{ label: "Le troisième jour", to: "J3V" }] },

  O3M: { act: "III", title: "La signature", souvenir: "Il y a deux ans",
    text: [
      "C'est un matin d'hiver, au cabinet. Ta tante a eu une mauvaise nuit ; ses mains tremblent sur la plume, et le premier décret de la journée porte une tache d'encre à la place du paraphe.",
      "Elle le froisse, sans colère. Elle en prend un autre, vierge, et le pousse vers toi avec la plume.",
      "« Signe. Mon nom, pas le tien. Je t'ai regardée écrire douze ans : tu as ma main mieux que moi. » Elle croise les bras. « Un jour, mes doigts refuseront. Ce jour-là, il faudra que quelqu'un signe pour moi, et que personne ne voie la différence. »",
      "Tu regardes le papier. *Ermesinde Valcor, Doyenne.* Tu connais chaque boucle de ce nom par cœur : le V ouvert, le l qui monte plus haut que le d.",
    ],
    choices: [
      { label: "Signer de son nom, d'un seul trait", fx: { flag: "oriane:signature" }, to: "O3M_signe", big: true },
      { label: "« Je signerai pour vous, ma tante. Mais de mon nom, sous le vôtre. »", fx: { flag: "oriane:nom_propre" }, to: "O3M_nom", big: true },
    ] },
  O3M_signe: { act: "III", title: "Deux mains", souvenir: "Il y a deux ans",
    text: [
      "Tu signes. La plume glisse, et la boucle du V tourne exactement comme il faut. Ermesinde prend le papier, le regarde à contre-jour, le pose à côté d'une vieille lettre de sa main.",
      "« Parfait », dit-elle. Elle a l'air contente, et un peu triste. Le décret part au Conseil le jour même. Personne ne remarque rien.",
      "Depuis, tu as signé pour elle quarante-trois fois. Tu as compté. Les dernières semaines, tu signais presque tout.",
    ],
    choices: [{ label: "Le troisième jour", to: "O3V" }] },
  O3M_nom: { act: "III", title: "Deux noms", souvenir: "Il y a deux ans",
    text: [
      "Ermesinde te regarde par-dessus ses lunettes. Puis elle hausse les épaules. « Comme tu voudras. » Elle signe elle-même, mal, d'une main qui tremble, et tu ajoutes dessous, en petit : *pour la Doyenne, O. Valcor, secrétaire.*",
      "Le Conseil en a parlé une semaine. Morvan a demandé, en séance, si la Doyenne gouvernait encore. Elle a répondu : « Plus que vous, monsieur. » On a ri, et l'affaire s'est éteinte.",
      "Depuis, tous les papiers que tu as signés pour elle portent ton nom, sous le sien. Ils sont aux archives, ouverts à tous.",
    ],
    choices: [{ label: "Le troisième jour", to: "O3V" }] },

  // ================================================================ act III: the third day
  // ---------------------------------------------------------------- Sévan: the old boatman
  S3V: { act: "III", title: "Le troisième jour", ambiance: "eau",
    fx: { until: 9 },
    text: [
      "Le troisième jour des Hautes-Eaux, la marée monte jusqu'à midi, plus haut que de toute l'année. On l'entend partout : un clapotis sous les portes, dans les caves, dans les escaliers des maisons basses.",
      { if: SV_TEMPLE, text: "Dans ta cellule du Temple, Gildas t'apporte le pain du matin. Il reste sur le seuil, gêné. « Maître. Mon grand-père est en bas, dans le cloître. On l'a porté jusqu'ici en barque. Il demande le médecin du Temple. Le Grand Prêtre a dit oui, pour une heure. »" },
      { if: SV_TOUR, text: "Dans ta cellule de la Tour, la capitaine Dorne vient elle-même ouvrir. « Le père de mon gardien de nuit se meurt au rez-de-chaussée. Les médecins de la ville sont tous au palais. Vous êtes le seul que j'ai sous la main. » Elle ajoute : « Sous la main, c'est le mot. »" },
      { if: SV_GOUGE, text: "Dans le grenier de l'Ancre Basse, la Mère Gouge te réveille à l'aube. « Mon cousin Anatole. Il étouffe depuis trois jours. Il te demande. Tout Bas-Port sait que tu es là, médecin. Ils savent aussi ce qu'on dit de toi. »" },
      { if: SV_LIBRE, text: "À l'hospice, la sœur portière te fait appeler dès l'aube. Un vieux batelier de Bas-Port, porté par ses fils dans une barque, à travers les canaux inondés. « Il ne veut que vous, maître. Il a dit votre nom. »" },
      "Il s'appelle Anatole. Il a soixante-dix-huit ans et les poumons pleins d'eau, la vieille maladie des bateliers. De la porte, tu l'entends respirer, comme une pompe qui aspire du sable. Tu comptes : trente souffles à la minute, courts. Les poumons sont pleins aux deux tiers.",
      "Il t'attrape la manche avec une main de cuir. « On dit que vous avez donné à la Doyenne de quoi partir tranquille. » Il tousse. « Je ne suis pas Doyen. Mais je voudrais partir pareil. »",
    ],
    choices: [
      { label: "Lui donner ce qu'il demande. Une dose pour dormir sans se réveiller", fx: { set: { sevan_pavot2: "donne" } }, to: "S3V_donne", big: true },
      { label: "Une dose pour la douleur seulement, juste ce qu'il faut", test: { dom: "savoir", diff: 0, label: "Médecine" },
        win: { fx: { set: { sevan_pavot2: "mesure" } }, to: "S3V_mesure" }, lose: { fx: { set: { sevan_pavot2: "trop" } }, to: "S3V_trop" } },
      { label: "Refuser le pavot, et rester avec lui jusqu'au bout", fx: { set: { sevan_pavot2: "veille" } }, to: "S3V_veille", big: true },
    ] },
  S3V_donne: { act: "III", title: "La deuxième fois", ambiance: "eau",
    fx: { until: 11 },
    text: [
      "Tu prépares la dose avec les mêmes gestes que l'autre nuit. Ils sont plus sûrs. Tu t'en aperçois, et tu t'en effraies.",
      "Anatole boit. Il te remercie. Il te parle de sa barque, de sa femme morte, d'un esturgeon de neuf pieds qu'il a pris l'année des grandes glaces. Il s'endort au milieu d'une phrase. Une heure plus tard, son souffle s'est arrêté, et son visage a l'air plus jeune.",
      "Tu restes assis à côté de lui. Cette fois, le flacon est resté dans ta main du début à la fin. Cette fois, c'est ta main, sans discussion.",
      "Tu te demandes si c'est plus facile. Tu sais que oui. C'est cela qui te garde cloué sur ta chaise.",
    ],
    choices: [{ label: "Fermer ses yeux", to: "S3V_apres" }] },
  S3V_mesure: { act: "III", title: "Juste ce qu'il faut", ambiance: "eau",
    fx: { until: 11 },
    text: [
      "Tu comptes les gouttes une à une. Assez pour desserrer la poitrine, trop peu pour éteindre la lampe. Anatole boit, grimace, attend.",
      "Au bout d'un quart d'heure, il respire mieux. Il reste éveillé. Il te regarde, étonné. « Ça ne m'a pas tué. — Non. — Je ne sais pas si je vous remercie. »",
      "Il vit jusqu'au soir. Il a le temps de voir ses fils, de les engueuler et de leur donner sa barque. Il meurt à la tombée du jour, réveillé, en tenant la main du plus jeune.",
      "Pour la première fois en trois jours, tu as trouvé la dose exacte. Elle existait. Tu avais oublié de la chercher.",
    ],
    choices: [{ label: "Le laisser à ses fils", fx: { ep: 300 }, to: "S3V_apres" }] },
  S3V_trop: { act: "III", title: "Une goutte de trop", ambiance: "eau",
    fx: { until: 11 },
    text: [
      "Tu comptes les gouttes. À la dernière, ta main tremble, et il en tombe deux.",
      "Anatole boit. Il soupire. Ses épaules se détendent, puis son visage, puis tout. Il s'endort pour de bon. C'est doux, et tu voulais autre chose.",
      "Tu restes longtemps penché sur lui. Tu as voulu être juste. Ta main a choisi autrement, comme l'autre nuit, et tu cherches encore si elle avait tort.",
    ],
    choices: [{ label: "Fermer ses yeux", to: "S3V_apres" }] },
  S3V_veille: { act: "III", title: "La veille", ambiance: "eau",
    fx: { until: 13 },
    text: [
      "« Non, Anatole. Pas ça. Mais je reste. »",
      "Il te maudit. Il te supplie. Il appelle sa femme morte et sa mère. Tu lui tiens la main. Tu lui essuies la bouche. Tu lui racontes n'importe quoi : la marée, le prix du poisson, les ragots de l'hospice. Il t'écoute par moments.",
      "Il meurt à une heure de l'après-midi, au plus haut de la marée, avec un bruit de vague qui se retire. Il a souffert jusqu'au bout. Tu étais là jusqu'au bout.",
      "Lequel de vous deux a eu raison ? Tu l'ignores. Tu sais seulement que tu es resté dans la chambre.",
    ],
    choices: [{ label: "Lui fermer les yeux", to: "S3V_apres" }] },
  S3V_apres: { act: "III", title: "L'après-midi",
    text: [
      { if: SV_TEMPLE, text: "Gildas raccompagne le corps de son grand-père jusqu'à la barque. En remontant, il te laisse une plume, de l'encre et trois feuilles. « Pour vos prières, maître. Ou pour autre chose. »" },
      { if: SV_TOUR, text: "La capitaine Dorne te ramène à ta cellule. Elle te laisse, en silence, son écritoire de campagne et une chandelle neuve." },
      { if: SV_GOUGE, text: "La Mère Gouge fait emporter Anatole vers le cimetière des Noyés. En passant, elle te pose sur l'épaule une main lourde comme une ancre. Puis elle te fait monter de l'encre et du papier." },
      { if: SV_LIBRE, text: "Les fils d'Anatole emportent leur père dans la barque. Tu remontes dans ta chambre de l'hospice. Sur ta table, ton écritoire t'attend." },
      { if: { has: "sevan_serment=absolu" }, text: "Tu as juré à Ermesinde, il y a dix-neuf ans, de te taire jusqu'à ta mort. Ce soir, tu vas devant le Conseil. Ce que tu y diras, tu l'ignores encore." },
      { if: { has: "sevan_serment=besoin" }, text: "Tu as juré à Ermesinde de te taire jusqu'au jour du besoin. Tu regardes la marée qui descend, et tu te dis que ce jour-là ressemble beaucoup à celui-ci." },
      "Il te reste quelques heures avant les lanternes. Tu prends une feuille. Tu sais à qui tu écris avant d'avoir trempé la plume.",
    ],
    choices: [
      { label: "À Dame Hélis, présidente du Conseil : tout ce que tu sais du poison, pour qu'elle l'ait en main à minuit", fx: { set: { sevan_lettre3: "helis" } }, to: "S3V_helis", big: true },
      { label: "À Nella : ce que tu n'as jamais su lui dire", fx: { set: { sevan_lettre3: "nella" } }, to: "S3V_nella", big: true },
      { label: "Brûler tes notes de ces trois jours, une à une, à la chandelle", fx: { set: { sevan_lettre3: "brule" } }, to: "S3V_brule" },
    ] },
  S3V_helis: { act: "III", title: "Pour la présidente",
    fx: { until: 18 },
    text: [
      "Tu écris quatre pages serrées. Les ongles striés, le sel trop fin, la salière, l'apothicaire de la Maison, le blanc d'Orcanne. Tu t'en tiens à ce que tu as vu de tes yeux. Tu signes de ton nom entier, avec ton titre de médecin.",
      { if: SV_TEMPLE, text: "Gildas glisse la lettre dans sa manche. Sa sœur porte le linge au palais tous les soirs." },
      { if: SV_TOUR, text: "Tu tends la lettre à la capitaine à travers la porte. Elle la lit et la cachette elle-même, au sceau du Guet. « Elle sera sur la table de la présidente avant l'heure. »" },
      { if: { any: [SV_GOUGE, SV_LIBRE] }, text: "Un gamin de Bas-Port part avec la lettre au palais, contre une pièce et la promesse d'une deuxième au retour. Il revient à six heures, la main tendue." },
    ],
    choices: [{ label: "Attendre le soir", to: "S3" }] },
  S3V_nella: { act: "III", title: "Pour Nella",
    fx: { until: 18 },
    text: [
      "Tu écris une page, puis tu la déchires. Tu en écris une autre. La troisième, tu la gardes.",
      "Tu lui écris la nuit de sa naissance. L'hiver de la grande passe, la maison de location du quai des Saules, l'enfant bleue qui ne respirait pas, le rire de sa mère. Tu lui écris qu'elle a été tenue une heure, et que cette heure-là a compté.",
      { if: { has: "sevan_serment=absolu" }, text: "Tu as juré de te taire jusqu'à ta mort. Tu plies la feuille et tu écris dessus : *À ouvrir quand je ne serai plus là.* C'est le seul moyen que tu trouves de tenir les deux." },
      { if: { has: "sevan_serment=besoin" }, text: "Tu plies la feuille et tu laisses le pli vierge. Le jour du besoin, c'est aujourd'hui. Tu le décides." },
    ],
    choices: [{ label: "Garder la lettre contre toi", to: "S3" }] },
  S3V_brule: { act: "III", title: "La chandelle",
    fx: { until: 18 },
    text: [
      "Tu brûles tes notes une à une. Les ongles. Le sel. La salière. Les noms. Le papier se tord dans la flamme, et l'encre brunit avant de noircir.",
      "À la fin, ce que tu sais tient tout entier dans ta tête. Là, personne ne peut le voler, ni le lire sans toi.",
      "Tu te sens plus léger. Sagesse ou lâcheté ? La question reste posée.",
    ],
    choices: [{ label: "Attendre le soir", to: "S3" }] },

  // ---------------------------------------------------------------- Jasse: the flood
  J3V: { act: "III", title: "La grande marée", place: "basport", ambiance: "eau",
    fx: { until: 8 },
    text: [
      "Le troisième jour, la marée monte à Bas-Port jusqu'au premier étage. Les gens vivent sur les toits, avec leurs poules et leurs matelas. On se passe le pain d'une fenêtre à l'autre au bout d'une gaffe. Les enfants pêchent dans les cuisines, et prennent des gobies entre les pieds des tables.",
      "Mo te trouve à l'aube, assis dans ta barque, à regarder l'eau monter sur la façade de l'Ancre Basse. Tu as compté les rangs de briques : elle a gagné quatre rangs depuis minuit.",
      { if: { has: "jasse_souvenir=promesse" }, text: "Tu as promis à ta mère de veiller sur Nella. Ce soir, tu tiendras cette promesse ou tu la perdras. D'ici là, la journée est longue, et Bas-Port a besoin de bras." },
      { if: { has: "jasse_souvenir=question" }, text: "Ta mère t'a dit de demander à la vieille de l'Ancre le jour où l'on voudrait te prendre Nella. Ce jour-là est passé depuis trois jours." },
      "« Il y a les vieux du pont Bas qui sont coincés, dit Mo. Et ta maison, celle de tes parents, la porte a lâché cette nuit. Tout flotte dedans. »",
    ],
    choices: [{ label: "Pousser ta barque", to: "J3V_hub" }] },
  J3V_hub: { act: "III", title: "Bas-Port sous l'eau", place: "basport", hub: true, noLead: true, backName: "Bas-Port sous l'eau",
    text: [
      { first: true, text: "Tu as jusqu'au soir : assez pour deux choses, si la marée te laisse faire." },
      { if: { clock: "j3v", min: 1, max: 1 }, text: "La marée est haute. Le soleil passe midi. Il te reste le temps d'une chose avant le soir." },
    ],
    choices: [
      { label: "Les vieux du pont Bas, coincés au deuxième étage", hide: { has: "jasse:pont3" }, to: "J3V_pont" },
      { label: "La maison des Ferrant, où tout flotte", hide: { has: "jasse:maison3" }, to: "J3V_maison" },
      { label: "Le cimetière des Noyés, où ta mère est enterrée", hide: { has: "jasse:tombe" }, to: "J3V_tombe" },
    ] },
  J3V_suite: { branch: [
    { if: { clock: "j3v", min: 2 }, fx: { until: 18 }, to: "J3V_soir" },
    { fx: { until: 13 }, to: "J3V_hub" },
  ] },
  J3V_pont: { act: "III", title: "Le pont Bas", place: "basport", ambiance: "eau",
    fx: { clock: { j3v: 1 }, flag: "jasse:pont3" },
    text: [
      "La maison du pont Bas est la plus vieille de Bas-Port, une bâtisse de bois tordu qui penche sur le canal depuis cent ans. Ce matin, elle penche davantage. Au deuxième étage, à la fenêtre, attendent quatre vieux et une chèvre.",
      "L'eau tire fort sous le pont. Le courant de la marée haute s'y engouffre comme dans un goulot. Deux barques ont déjà chaviré en essayant. Sur les toits d'en face, une centaine de gens regardent.",
    ],
    choices: [
      { label: "Lancer une corde jusqu'à la fenêtre, et passer la barque à contre-courant", test: { dom: "nature", diff: 0, label: "Effort" },
        win: { fx: { flag: "jasse:sauveur", ep: 300, regard: { gouge: "admiratif" } }, to: "J3V_pont_ok" }, lose: { to: "J3V_pont_rate" } },
    ] },
  J3V_pont_ok: { act: "III", title: "La chèvre", place: "basport", ambiance: "eau",
    text: [
      "Tu passes. La corde tient. Tu fais quatre voyages, un vieux à chaque fois, et le courant tire ta barque comme un chien tire sa laisse. Le quatrième vieux refuse de partir sans sa chèvre. Tu fais un cinquième voyage pour la chèvre, qui se montre la plus ingrate des cinq passagers.",
      "Quand tu reviens au quai, la centaine de gens des toits t'applaudit. Puis elle se tait, parce qu'à Bas-Port on applaudit peu les vivants. On leur paie à boire.",
      "Ce soir, si tu parles à Bas-Port, Bas-Port t'écoutera.",
    ],
    choices: [{ label: "Boire ce qu'on te tend", to: "J3V_suite" }] },
  J3V_pont_rate: { act: "III", title: "Le goulot", place: "basport", ambiance: "eau",
    fx: { pv: -3 },
    text: [
      "La corde glisse. Ta barque se met en travers, cogne la pile du pont et te jette à l'eau. Le courant te roule sous l'arche comme un galet. Tu ressors trente toises plus loin, contre un volet, et tu t'y accroches.",
      "Ce sont les neveux de la Mère Gouge qui sortent les vieux, une heure plus tard, avec une barque de six rameurs. Toi, tu craches de l'eau sur un toit.",
    ],
    choices: [{ label: "Reprendre ton souffle", to: "J3V_suite" }] },
  J3V_maison: { act: "III", title: "La maison des Ferrant", place: "basport", ambiance: "eau",
    fx: { clock: { j3v: 1 }, flag: "jasse:maison3" },
    text: [
      "La maison où tu as grandi est vide depuis la mort de ta mère. Tu as été incapable de la vendre comme d'y revenir. La porte d'en bas a lâché cette nuit, et la marée est entrée jusqu'à la deuxième marche de l'escalier.",
      "Tu entres en barque dans la cuisine. Les chaises flottent. Une poupée de chiffon tourne sur l'eau : celle de Nella. Le coffre de ton père, celui qu'il tenait fermé, flotte aussi, entre deux eaux, le couvercle entrouvert.",
    ],
    choices: [
      { label: "Repêcher le coffre et l'ouvrir", to: "J3V_coffre" },
      { label: "Prendre la poupée, et laisser le reste à la marée", fx: { flag: "jasse:poupee" }, to: "J3V_poupee" },
    ] },
  J3V_coffre: { act: "III", title: "Le registre", place: "basport", ambiance: "eau",
    fx: { flag: "jasse:registre" },
    text: [
      "Dans le coffre, enveloppé de toile cirée, tu trouves le registre de ton père. Un autre que celui des passes : petit, relié de cuir. Une page par an, depuis dix-neuf ans. Chaque hiver, une somme, toujours la même. *Reçu pour l'enfant.* Et au bas de la première page, d'une écriture que tu as vue sur les ordonnances du palais, une signature : *E. V.*",
      "En dessous, ton père a ajouté, de sa grosse écriture de passeur : *La petite est née le jour de la grande passe. On l'a appelée Nella, comme la nôtre.*",
      "Tu refermes le registre. Tes mains sont froides, et l'eau y est pour peu de chose.",
    ],
    choices: [{ label: "Le glisser sous ta chemise", to: "J3V_suite" }] },
  J3V_poupee: { act: "III", title: "La poupée", place: "basport", ambiance: "eau",
    text: [
      "Tu repêches la poupée et tu l'essores entre tes mains. Elle a perdu un œil de bouton depuis longtemps. Nella lui avait cousu un bandeau de pirate.",
      "Tu laisses le coffre de ton père tourner sur l'eau. Ce qu'il contenait appartenait à ton père, du moins tu le crois. Tu sors de la cuisine à reculons.",
    ],
    choices: [{ label: "Repartir", to: "J3V_suite" }] },
  J3V_tombe: { act: "III", title: "Le cimetière des Noyés", place: "basport", ambiance: "eau",
    fx: { clock: { j3v: 1 }, flag: "jasse:tombe", meet: "gouge" },
    text: [
      "Le cimetière des Noyés est une île basse, plantée de cyprès, où l'on enterre ceux que la lagune a pris. Ce matin, la marée couvre les tombes ; seules dépassent les croix, et les gens viennent en barque prier au-dessus de l'eau.",
      "La croix de ta mère est au bout de l'île, près du mur. Une barque est déjà amarrée à côté. Dedans, la Mère Gouge, seule, un bouquet de chardons bleus sur les genoux.",
      { if: { has: "gouge:sait_nella" }, text: "Sa prière va à la croix voisine, une vieille croix de bois sans nom, à demi pourrie. Elle te voit. « Tomas. Mon fils. Ils l'ont mis là, à côté de ta mère, l'hiver où il s'est noyé. Elle venait le voir, elle aussi. Je n'avais jamais compris pourquoi. »" },
      { if: { not: { has: "gouge:sait_nella" } }, text: "Sa prière va à la croix voisine, une vieille croix de bois sans nom. « Mon fils, dit-elle, le dos tourné. Tomas. Ta mère venait le voir, chaque hiver. Elle disait qu'elle lui devait une visite. Je n'ai jamais su pourquoi. »" },
    ],
    choices: [
      { label: "Lui dire ce que tu sais de Nella", if: { clue: "eau" }, why: "Tu ne sais rien qui la concerne.", fx: { set: { gouge: "allie" }, flag: "gouge:sait_nella", regard: { gouge: "allie" } }, to: "J3V_tombe_dit", big: true },
      { label: "Poser une pierre sur la croix de ta mère, et repartir", to: "J3V_tombe_part" },
    ] },
  J3V_tombe_dit: { act: "III", title: "Deux croix", place: "basport", ambiance: "eau",
    text: [
      "Tu lui dis la phrase de ta mère, et ce que tu as compris depuis. La Mère Gouge t'écoute, immobile, le bouquet de chardons serré dans sa main.",
      "Quand tu as fini, elle pose les chardons sur la croix de Tomas. Puis elle en arrache un et le pose sur celle de ta mère. « Elle l'a élevée. Ça mérite une fleur. »",
      "Elle détache sa barque. « Ce soir, toutes les barques de Bas-Port seront où tu voudras, passeur. Pour ma petite-fille. »",
    ],
    choices: [{ label: "La regarder partir", to: "J3V_suite" }] },
  J3V_tombe_part: { act: "III", title: "Une pierre", place: "basport", ambiance: "eau",
    text: [
      "Tu cherches une pierre, mais une île noyée garde ses pierres sous l'eau. Tu poses ton couteau en travers de la croix, puis tu le reprends. C'est ce que faisait ton père.",
      "La Mère Gouge te regarde faire. « Tu as les gestes de ton père. Lui aussi parlait peu. »",
    ],
    choices: [{ label: "Repartir", to: "J3V_suite" }] },
  J3V_soir: { act: "III", title: "La marée descend", place: "basport", ambiance: "eau",
    text: [
      "Vers six heures, la marée commence à descendre. Les gens redescendent des toits, essorent leurs matelas, comptent leurs poules. On allume les premières lanternes aux fenêtres.",
      { if: { has: "jasse_dame=demande" }, text: "Tu ouvres la boîte à hameçons, sous ton banc. La pièce d'argent au sceau de la ville est toujours là. Tu repenses à la dame en gris de la porte des cuisines, et à sa façon de regarder Nella." },
      { if: { has: "jasse_dame=crie" }, text: "Tu repenses à la porte des cuisines, il y a huit ans, et à ta voix sur le canal. Ce soir, tu voudrais crier la même phrase à une autre porte." },
      { if: { has: "jasse:registre" }, text: "Le registre de ton père pèse contre ta poitrine. *Reçu pour l'enfant. E. V.* Ce soir, si personne ne lit le testament, ce petit livre sera peut-être la seule preuve de qui est Nella." },
      { if: { has: "jasse:poupee" }, text: "La poupée de Nella sèche sur le banc de ta barque, son bandeau de pirate de travers." },
      { if: { has: "jasse:sauveur" }, text: "Partout où tu passes, on te salue. Un gamin te donne une anguille. Une femme te donne un baiser. Bas-Port t'a vu passer sous le pont Bas." },
    ],
    choices: [{ label: "La Nuit des Lanternes", to: "J3" }] },

  // ---------------------------------------------------------------- Oriane: the vigil, the speech
  O3V: { act: "III", title: "La chapelle ardente", place: "palais", ambiance: "chateau",
    fx: { until: 9 },
    text: [
      "Le troisième jour, Ermesinde Valcor repose dans la chapelle du palais, sur un lit de parade, les mains croisées sur la poitrine. Des cierges, des lys, et quatre gardes du Guet aux quatre coins. La ville entière défile depuis l'aube.",
      "La famille veille par tours de deux heures. Ton tour va de neuf à onze. Tu t'assieds sur le tabouret de velours, au pied du lit, et tu regardes ta tante.",
      { if: { has: "oriane:aveu_ambition" }, text: "Tu lui as dit, il y a douze ans, que tu venais apprendre à gouverner. Elle avait ri. Ce soir, on verra si tu as appris." },
      { if: { has: "oriane:servir" }, text: "Tu lui as dit, il y a douze ans, que tu venais la servir. Elle t'avait demandé, un jour, la vraie réponse. Tu la lui dirais maintenant, si elle pouvait l'entendre." },
      { if: { has: "oriane_malade=oui" }, text: "Tu as les mains froides. Le vin d'orange d'hier soir est encore dans ton sang. Tu les caches dans tes manches." },
      "Les gens passent. Ils s'inclinent, se signent, te disent un mot. Trois d'entre eux s'arrêtent plus longtemps.",
    ],
    choices: [
      { label: "Le Grand Argentier, venu seul, sans masque et sans cour", to: "O3V_morvan" },
      { label: "Une délégation des métiers : verriers, tisserands, charpentiers de marine", to: "O3V_metiers" },
      { label: "Une vieille femme de Bas-Port, pieds nus, un foulard sur la tête", to: "O3V_gouge" },
    ] },
  O3V_morvan: { act: "III", title: "Le Grand Argentier", place: "palais", ambiance: "chateau",
    fx: { meet: "morvan", flag: "oriane:veille_morvan" },
    text: [
      "Morvan s'agenouille au pied du lit, longtemps. Il prie, ou il fait semblant, avec un égal talent. Puis il se relève, s'approche de toi et parle à voix basse, les yeux sur la morte.",
      "« Elle était la plus grande adversaire que j'aie eue. Je l'admirais. Je voulais que vous le sachiez, avant ce soir. »",
      { if: { has: "oriane=pacte" }, text: "« Ce soir, vous ferez ce que nous avons dit. Et dans dix ans, quelqu'un dira de vous ce que je dis d'elle. »" },
      { if: { not: { has: "oriane=pacte" } }, text: "« Ce soir, vous allez perdre. Je ne m'en réjouis pas. Je vous aurais aimée à mes côtés. »" },
      "Il regarde les mains croisées de ta tante. Ses ongles. Il les regarde un peu trop longtemps.",
    ],
    choices: [
      { label: "« Ses ongles vous intéressent, monsieur ? »", fx: { flag: "oriane:ongles_morvan", clock: { preuves: 1 } }, to: "O3V_morvan_ongles", big: true },
      { label: "Le remercier, et le laisser partir", to: "O3V_discours" },
    ] },
  O3V_morvan_ongles: { act: "III", title: "Les ongles", place: "palais", ambiance: "chateau",
    text: [
      "Morvan garde les yeux sur les mains. Il sourit, très légèrement. « Les morts ont souvent les ongles pâles, madame. Votre médecin vous l'expliquera. »",
      "Il s'en va. Le garde du Guet le plus proche, un jeune sergent, a tout entendu. Il te regarde. Il note quelque chose sur sa tablette, en cachette.",
    ],
    choices: [{ label: "Reprendre ta veille", to: "O3V_discours" }] },
  O3V_metiers: { act: "III", title: "Les métiers", place: "palais", ambiance: "chateau",
    text: [
      "Ils sont six, en habit de fête, leur bonnet de corporation à la main. Le doyen des verriers parle pour tous : un homme rond, aux avant-bras brûlés de petites cicatrices blanches, une par goutte de verre tombée depuis quarante ans.",
      "« Madame. Nous avons huit sièges. Cinq d'entre eux sont à vendre, ce soir, au plus offrant. Nous ne voulons pas d'argent. Nous voulons que le prix du sel soit fixé par le Conseil, et non par la Maison. » Il regarde la morte. « Elle nous l'avait promis. Elle n'a pas eu le temps. »",
    ],
    choices: [
      { label: "« Je le promets. Sur elle. »", fx: { flag: "oriane:promet_sel", clock: { voix: 3 }, regard: { morvan: "hostile" } }, to: "O3V_metiers_oui", big: true },
      { label: "« Je ne promets rien sur un lit de mort. »", to: "O3V_metiers_non" },
    ] },
  O3V_metiers_oui: { act: "III", title: "Une promesse", place: "palais", ambiance: "chateau",
    text: [
      "Le verrier hoche la tête. Il pose sa main brûlée sur le bord du lit de parade, une seconde, comme pour prendre la morte à témoin. « Trois voix, madame. Les trois que je tiens. Les deux autres, c'est leur affaire. »",
    ],
    choices: [{ label: "Reprendre ta veille", to: "O3V_discours" }] },
  O3V_metiers_non: { act: "III", title: "Le bonnet", place: "palais", ambiance: "chateau",
    text: [
      "Le verrier remet son bonnet. « Vous êtes bien sa nièce. Elle disait la même chose. » Il s'en va, et les cinq autres derrière lui.",
    ],
    choices: [{ label: "Reprendre ta veille", to: "O3V_discours" }] },
  O3V_gouge: { act: "III", title: "La vieille femme", place: "palais", ambiance: "chateau",
    fx: { meet: "gouge", flag: "oriane:gouge3" },
    text: [
      "Les gardes ont voulu l'arrêter à la porte, à cause des pieds nus. Elle est passée quand même. Elle s'approche du lit, regarde longtemps la morte, puis te regarde.",
      "« Je suis la Mère Gouge, de l'Ancre Basse. Elle et moi, on ne s'est parlé qu'une fois, il y a dix-neuf ans, l'hiver de la grande passe. » Elle pose un chardon bleu sur la poitrine de ta tante, entre les lys. « Elle m'a demandé pardon. Pour quoi, je l'ai appris hier. »",
      { if: { has: "gouge:sait_nella" }, text: "« La petite est de mon sang, madame. Du sien et du mien. Ce soir, Bas-Port sera devant votre palais. Dites-moi ce que vous allez faire d'elle. »" },
      { if: { not: { has: "gouge:sait_nella" } }, text: "« Ce soir, Bas-Port sera devant votre palais. Dites-moi ce que vous allez faire pour nous. »" },
    ],
    choices: [
      { label: "« Si le testament de ma tante est lu, Bas-Port aura ce qu'elle a voulu. Je m'y engage. »", fx: { regard: { gouge: "allie" } }, to: "O3V_gouge_oui", big: true },
      { label: "« Je ferai ce que la loi me permet. »", to: "O3V_gouge_loi" },
    ] },
  O3V_gouge_oui: { act: "III", title: "Le chardon", place: "palais", ambiance: "chateau",
    text: [
      "La Mère Gouge hoche lentement la tête. « Ce soir, si vous le demandez, ils monteront les marches. Pas avant. » Elle s'en va, pieds nus sur le marbre, et laisse des traces mouillées que personne n'ose essuyer.",
    ],
    choices: [{ label: "Reprendre ta veille", to: "O3V_discours" }] },
  O3V_gouge_loi: { act: "III", title: "La loi", place: "palais", ambiance: "chateau",
    text: [
      "La Mère Gouge te regarde comme on regarde une marée qu'on connaît par cœur. « La loi. Elle vous a bien appris. » Elle s'en va, pieds nus.",
    ],
    choices: [{ label: "Reprendre ta veille", to: "O3V_discours" }] },
  O3V_discours: { act: "III", title: "Le discours", place: "saules", ambiance: "ville",
    fx: { until: 14 },
    text: [
      "Ton tour de veille fini, tu rentres aux Saules. Tu t'assieds à ton écritoire, celle de tes douze ans de dictée, et tu tailles trois plumes. Ce soir, avant le vote, la secrétaire du Conseil a le droit de parler la première. D'ordinaire, la secrétaire garde ce droit dans sa poche. Tu vas en user.",
      "Tu as quatre heures pour écrire ce que tu diras à quarante personnes, et à une ville entière debout aux fenêtres.",
      { if: { has: "oriane:veille_morvan" }, text: "Tu repenses aux yeux de Morvan sur les ongles de ta tante." },
      { if: { has: "oriane:gouge3" }, text: "Tu repenses aux traces mouillées des pieds nus sur le marbre de la chapelle." },
    ],
    choices: [
      { label: "Écrire la loi : le coffre, le testament, la règle, rien d'autre", fx: { set: { discours: "loi" } }, to: "O3V_ecrit" },
      { label: "Écrire la vérité : le sel, les ongles, la Maison des Sels", fx: { set: { discours: "verite" } }, to: "O3V_ecrit" },
      { label: "Écrire pour Bas-Port : ceux qui paient la marée et ne la votent pas", fx: { set: { discours: "basport" } }, to: "O3V_ecrit" },
    ] },
  O3V_ecrit: { act: "III", title: "Six pages", place: "saules", ambiance: "ville",
    fx: { until: 19 },
    text: [
      "Tu écris six pages, puis tu en barres deux. Tu lis le reste à voix haute, seule dans ton bureau, comme ta tante lisait ses lettres avant de les signer. Tu changes un mot, puis un autre.",
      { if: { has: "discours=loi" }, text: "C'est un discours froid et juste. Il fera pleurer peu de monde. Il fera peut-être voter quelques-uns." },
      { if: { has: "discours=verite" }, text: "C'est un discours dangereux. Si ce que tu dis ce soir reste sans preuve au moment du vote, il te coûtera des voix. S'il est prouvé, il t'en donnera." },
      { if: { has: "discours=basport" }, text: "C'est un discours qui fera peur aux vieilles maisons, et plaisir à la lagune. Tout dépendra de ce que la lagune fera ce soir." },
      "À sept heures, tu plies les pages et tu les glisses dans ta manche. Tu te fais coiffer. Tu mets ta chaîne de secrétaire.",
    ],
    choices: [{ label: "La Nuit des Lanternes", to: "O3" }] },
};
