// Act III, second half: the night of the thirty-ninth day (the black swords, the admiral at the water gate), the session
// of the fortieth day (the reading of the testament, the bound vote, the roll call) and the eight endings with their
// epilogue (a line per person and per side quest done).

// Intent: build(EndingKind) -> TextItem*
// Why: every ending closes the same threads (each side quest's echo, each companion, the hero's own secret), so the
// lines are written once here and each ending only words them its own way.
function epilogue(kind) {
  var guerre = kind === "guerre", exil = kind === "exil", proto = kind === "protectorat", regent = kind === "regent";
  var amiral = kind === "amiral", temple = kind === "temple", rep = kind === "republique";
  return [
    "—",
    // Bertin
    { if: { has: "bertin:libre" }, text: guerre ? "Bertin a rouvert une gargote sur le quai des Verriers, entre deux barricades. Il nourrit les deux camps, au même prix, et il garde ses prières pour lui." : "Bertin a repris les cuisines du palais. Le premier jour, il a fait la tourte aux anguilles que le prince aimait. Elle est restée entière sur la table. Le deuxième jour, Iselda l'a mangée entière, et le palais a recommencé à manger." },
    { if: { has: "bertin:garde" }, text: "Bertin est sorti de sa cellule du palais au quarante et unième jour, libre, sans un mot d'excuse. Il a laissé les cuisines et il est reparti dans son village, sur la terre ferme. « On m'a regardé comme un empoisonneur pendant un mois, a-t-il dit. Désormais, chaque fois que je salerais une soupe, on me regarderait les mains. »" },
    { if: { has: "bertin:abandonne" }, text: amiral ? "Bertin a été jugé par la cour de l'Arsenal, au quarante-deuxième jour. Le nouveau régent a signé sa grâce le soir même, en silence, et l'a fait embarquer pour les îles. Son innocence, il a dû se la dire tout seul." : "Bertin est mort dans la cave de l'Arsenal, au trente-troisième jour. Les fièvres, a dit le rapport. Tu as lu le rapport. Tu l'as signé." },
    // the bread
    { if: { has: "pain:accord" }, text: "La taxe du sel est restée suspendue. Les finances de la ville ont un trou, en bas d'une colonne, que Livia appelle *le pain de l'an des Deuils*." },
    { if: { has: "pain:requisition" }, text: "Ser Orsanne se souvient des greniers du port. Dans les livres de la Hanse, ton nom a sa propre page, et sur cette page, une seule ligne : *Je prends note.*" },
    { if: { has: "pain:bourse" }, text: "Les trois maisons du prince ont été vendues pour le pain des Canaux. Plus tard, quand elle a su, Iselda a dit que c'était la seule chose de son héritage qu'elle était contente d'avoir perdue." },
    { if: { any: [{ has: "taxe:suspendue" }, { has: "taxe:promise" }] }, text: proto ? "La taxe du sel a disparu dans le traité de Thérance, avec beaucoup d'autres choses." : "La taxe du sel a été rediscutée à chaque Conseil pendant six ans. Ser Orsanne a toujours apporté le même cahier." },
    // the fleet's pay
    { if: { has: "solde:payee" }, text: "La flotte a été payée. Les chansons sur l'amiral ont continué quand même ; elles sont devenues plus tendres." },
    { if: { has: "solde:therance" }, text: "On a su, plus tard, que la solde de la flotte avait été prêtée par Thérance. Les marins en veulent encore à l'amiral." },
    { if: { has: "solde:attente" }, text: "La flotte a attendu sa solde jusqu'à l'hiver. Trois galères ont déserté, une nuit de brouillard, avec leurs rameurs et leurs canons. Sous quel pavillon naviguent-elles ? On se le demande encore." },
    { if: { any: [{ has: "solde:gage" }, { has: "solde:temple" }] }, text: "Les gages de la flotte ont été rachetés, un à un, sur dix ans. Le dernier, c'était une cloche de bronze de l'Arsenal, et ce sont les rameurs qui l'ont payée." },
    // the salt-pans
    { if: { has: "salines:grain" }, text: "Le grain des salines a nourri les Canaux jusqu'à la récolte. On a donné à l'entrepôt de Morte-Eau un surnom de corps de garde." },
    { if: { has: "salines:sang" }, text: "Il y a, aux salines de Morte-Eau, une croix de bois qui penche, et que le village laisse en place." },
    { if: { has: "salines:chantage" }, text: "Le cahier de Morte-Eau est resté dans ton tiroir. Ser Orsanne a vendu son grain au prix d'avant, et chaque fois qu'il te croise, il te demande, très poliment, si tu as bien rangé tes papiers." },
    { if: { has: "salines:laisse" }, text: "Le grain de Morte-Eau est sorti des entrepôts le lendemain du vote, au prix fort. Tu es seul à savoir qu'il y dormait depuis un mois." },
    // the riot, the Canals
    { if: { has: "emeute:corps" }, text: "Aux Canaux, on raconte encore l'histoire du Garde du Sceau qui s'est mis entre les hallebardes et la foule, les mains vides. L'histoire grandit à chaque fois. Dans la dernière version, tu as arrêté une charge de cavalerie, dans une ville sans chevaux." },
    { if: { any: [{ has: "emeute:sang" }, { has: "emeute:reprimee" }] }, text: "Les morts de l'émeute du pain ont leurs noms gravés sur une pierre, au coin du pont des Rames. Les débardeurs y posent une miche, le jour anniversaire. Ton nom, chacun le lit entre les lignes." },
    { if: { has: "loge:brulee" }, text: rep ? "La Loge du Sel est restée en ruines. Sur ses pierres, les Rames ont mis une halle aux grains, et une plaque : *Ici, on a vendu le pain des pauvres.*" : "La Loge du Sel a été reconstruite en pierre blanche, plus haute qu'avant. Les débardeurs la saluent en crachant." },
    // Tessa
    { if: { has: "tessa:liberee" }, text: "Tessa Brisse est sortie de prison le matin du quarantième jour, à temps pour le vote. Pour tout remerciement, elle s'est tue pendant toute la séance, et son frère en est resté stupéfait." },
    { if: { all: [{ has: "tessa:arretee" }, { not: { has: "tessa:liberee" } }] }, text: rep ? "Tessa Brisse a été libérée par la république, le premier jour. Elle a passé la nuit à boire, et le lendemain matin à recompter les sacs." : "Tessa Brisse est restée en prison jusqu'à l'été. À sa sortie, elle a écrit sur le mur du palais, à la poix, en lettres d'un pied : *On recommence.*" },
    { if: { has: "tessa:retenue" }, text: "Tessa a tenu parole : les torches sont restées chez le tonnelier. Mais elle vient voir, une fois par mois, si toi, tu tiens la tienne." },
    { if: { has: "tessa:prise" }, text: "Tessa Brisse a gardé, de cette nuit-là, une cicatrice à la main et une dette envers toi qu'elle garde pour elle." },
    // the Grey man and his paymaster
    { if: { has: "odile:arretee" }, text: proto ? "Odile Varn a été libérée le jour où le traité a été signé. Une clause de bas de page. Elle est rentrée en Thérance dans une voiture fermée." : "Odile Varn a été condamnée à l'exil perpétuel. Elle a demandé une seule chose : qu'on lui laisse sa plume. On la lui a laissée. On dit qu'elle écrit, à Castel-Brume, l'histoire de l'an des Deuils, et qu'elle t'y traite durement." },
    { if: { has: "odile:renvoyee" }, text: "Odile Varn a été renvoyée en Thérance par son propre ambassadeur. On a appris l'hiver suivant que le duc Amaury l'avait reprise à son service. Elle est de ces gens qui retombent toujours sur un bureau." },
    { if: { has: "odile:retournee" }, text: "Odile Varn t'écrit encore, une fois par saison, sous un autre nom. Ses lettres sont exactes, précieuses, et à chacune tu te demandes à qui elle écrit le reste du temps." },
    { if: { has: "gris:fui" }, text: "Le Gris court toujours. Tu dors avec une lame sous l'oreiller. Tu dormiras toujours ainsi." },
    { if: { has: "grizzo:protege" }, text: "Grizzo, le commis de la Hanse, est entré au service du Sceau. Il compte mieux que Livia, ce qu'elle lui fait payer chaque jour." },
    { if: { any: [{ has: "grizzo:orsanne" }, { has: "grizzo:livre" }] }, text: "Grizzo, le commis à la plume derrière l'oreille, a disparu. Ser Orsanne dit qu'il est parti pour les îles. Ser Orsanne dit beaucoup de choses." },
    // Ansel
    { if: { all: [{ has: "ansel:garde" }, { not: { gone: "ansel" } }] }, text: "Maître Ansel est mort l'hiver suivant, dans son lit, d'une fièvre qu'il a laissée faire. Il a laissé ses livres à Iselda et une lettre pour toi. Elle tient en une ligne : *Merci de l'avoir porté.*" },
    { if: { has: "ansel:temoin" }, text: guerre ? "Le témoignage de Maître Ansel est resté dans sa gorge. Il soigne les blessés des barricades, des deux côtés ; c'est sa façon de répondre de ce qu'il a fait." : "Maître Ansel a été jugé pour la mort du prince, à sa propre demande, et acquitté au bout d'une heure par un tribunal qui pleurait. Il est retourné à sa pharmacie. Il ferme le soir de la Fête des Barques." },
    { if: { has: "ansel:livre" }, text: "Maître Ansel est mort dans les prisons du palais de justice avant son procès, d'une dose qu'il s'était gardée. On a trouvé, sur sa table, un livre ouvert, et la page marquée d'un ruban." },
    { if: { all: [{ has: "ansel:arrete" }, { not: { has: "ansel:sort" } }] }, text: "Maître Ansel est resté dans la tour jusqu'à la fin, et sa porte est restée close. Ce qu'il savait, il l'a emporté." },
    { if: { any: [{ has: "ansel:ordonne" }, { has: "ansel:coupe" }] }, text: "Tu te souviens, parfois, de la chambre du prince le premier matin, et de ce que tu as dit à Ansel ce jour-là. Lui t'a pardonné, tu le crois. Toi, tu t'en veux encore." },
    { if: { any: [{ has: "ansel:epargne" }, { has: "ansel:presse" }] }, text: "Ansel t'a dit un jour qu'il avait failli tout avouer dès le premier matin, et qu'il s'était retenu à cause de toi. Reproche ou merci, il t'a laissé deviner." },
    // the princess
    { if: { has: "liane:promesse" }, text: proto ? "La princesse Liane a tenu la régence avec une fermeté qui a surpris la ville. L'Île des Morts est restée entre vous, sous le même silence. C'est ce qui vous lie." : "La princesse Liane t'a écrit une fois, une seule, pour te remercier d'avoir tenu parole. La lettre était sans signature. Tu l'as brûlée, comme elle le demandait." },
    { if: { has: "liane:averti" }, text: "La princesse Liane a quitté le palais pour une maison sur la lagune, avec un jardin et un ponton. Iselda va la voir le dimanche, en barque. Elle rame elle-même." },
    { if: { all: [{ has: "liane:ghislain" }, { not: { has: "liane:sort" } }] }, text: "La princesse Liane te croit ignorant de tout. Elle t'a remercié d'avoir été discret, sur d'autres choses." },
    { if: { has: "liane:aveu" }, text: amiral ? "En public, la princesse et l'amiral s'évitent. On dit qu'ils se parlent ailleurs. On dit beaucoup de choses." : "Ce que la princesse t'a avoué, ce soir-là, est resté dans le cabinet du Sceau. Tu l'as rangé avec le reste." },
    { if: { has: "liane:amiral" }, text: "La princesse Liane et l'amiral ont été vus ensemble, une fois, sur le ponton de la maison de la lagune, à la nuit tombée. Ils se tenaient à un pas l'un de l'autre, et ils regardaient la même barque." },
    // the admiral
    { if: { any: [{ has: "amiral:humilie" }, { has: "amiral:nuit" }, { has: "amiral:affront" }] }, text: "L'amiral se souvient de ce que tu lui as fait endurer pendant le deuil. Il a l'élégance de se taire, et ce silence pèse plus qu'un reproche." },
    { if: { any: [{ has: "amiral:respect" }, { has: "amiral:aveu" }, { has: "toast:amiral" }] }, text: "L'amiral te salue, quand il te croise, comme on salue un officier : d'un coup de menton bref, et d'un regard qui dit le reste." },
    { if: { has: "ghislain:approche" }, text: "Iselda appelle l'amiral *oncle*, en public. En privé, elle se passe de mot : elle s'assied à côté de lui sur le quai et lui tend des coquillages, qu'il garde dans la poche de son uniforme." },
    { if: { has: "ghislain:ecarte" }, text: "L'amiral voit Iselda en public, toujours accompagné. Il tient la promesse que tu lui as arrachée sur l'Île des Morts. Était-ce une bonne promesse ? Tu te le demandes encore." },
    // Ysaure, the Temple
    { if: { any: [{ has: "ysaure:promesse" }, { has: "ysaure:tenue" }] }, text: temple ? "Ce que Mère Ysaure savait sur toi est resté dans son coffre. Le savoir lui suffisait." : "Mère Ysaure et toi vous tenez l'un l'autre, depuis le deuil, par des fils invisibles. Elle prie pour toi, dit-elle. Tu la crois." },
    { if: { has: "temple:education" }, text: "Iselda a suivi les leçons du Temple deux matins par semaine, comme convenu. Elle en revient avec des questions qui font soupirer Mère Ysaure. C'est sans doute ce que voulait le prince." },
    { if: { has: "livia:temple" }, text: "Livia est retournée au Temple une fois, pour l'enterrement de Sœur Ancille. Elle est restée sur le seuil. « Un jour, peut-être », a-t-elle dit." },
    { if: { any: [{ has: "oraison:vraie" }, { has: "oraison:justice" }, { has: "oraison:pain" }, { has: "oraison:paix" }, { has: "oraison:demandee" }] }, text: "On cite encore, aux funérailles des notables, une phrase de l'oraison de Corradin IV. On a oublié qui l'a prononcée le premier." },
    // the funerals, the first days
    { if: { any: [{ has: "fun:parole" }, { has: "fun:protege" }] }, text: "Des funérailles, on se souvient surtout du pont des Rames, et du Garde du Sceau qui a tenu la foule avec sa voix. C'est ainsi que commencent les légendes, et elles se passent de permission." },
    { if: { any: [{ has: "fun:hue" }, { has: "fun:laisse" }] }, text: "Des funérailles, on se souvient surtout des huées sur le pont des Rames. Toi seul te rappelles qui elles visaient." },
    proto ? null : { if: { has: "merande:apaise" }, text: "Le comte Mérande t'a envoyé, à son départ, une caisse de vin de Thérance et une carte : *Pour le repas des funérailles, que nous n'avons pas fini.*" },
    { if: { any: [{ has: "port:ouvert" }, { has: "port:fouille" }, { has: "port:ferme" }, { has: "port:trois" }] }, text: "On dit, sur le port, que tout s'est joué au premier Conseil, le matin du premier jour, quand le Sceau a dit ce qu'on faisait du port. On dit toujours que tout s'est joué au début. Ça rassure." },
    { if: { any: [{ has: "nuit:seul" }, { has: "nuit:joris" }] }, text: "Depuis le douzième jour, tu sors la nuit sous escorte. Tu as appris, à quarante ans passés, ce que c'est d'avoir peur des ruelles." },
    { if: { any: [{ has: "mort:doute" }, { has: "mort:ansel" }, { has: "mort:theran" }] }, text: "La mort de Corradin IV a sa page dans les chroniques de Sarvelle. La version officielle y tient trois lignes. Tu sais combien elle en a vraiment." },
    { if: { has: "testament:compris" }, text: "Tu relis parfois la lettre du prince, celle qui t'est adressée. Tu as compris, depuis, pourquoi il t'avait choisi. Tu t'en es senti moins seul, à défaut d'être consolé." },
    // Iselda
    { if: { has: "iselda:lagune" }, text: guerre ? "Iselda garde sous son oreiller un coquillage en spirale, blanc, de la taille d'un ongle. Elle dit qu'il fait le bruit de la lagune quand on le colle à l'oreille. Là où elle est, la mer est loin." : "Iselda a appris à nager. Elle plonge du ponton de l'Arsenal, au matin, et elle remonte chaque fois avec quelque chose dans la main." },
    { if: { any: [{ has: "iselda:barque" }, { has: "iselda:promesse" }] }, text: "Il t'arrive encore de prendre une barque à l'aube, seul avec une petite fille qui grandit et qui pose des questions de plus en plus difficiles." },
    { if: { has: "iselda:mensonge" }, text: "Iselda a fini par apprendre la vérité sur sa naissance, à quatorze ans, par une lettre que sa mère a laissée. Elle est venue te demander si tu savais. Tu as dit oui. Depuis, elle porte ses questions ailleurs." },
    { if: { any: [{ has: "iselda:testament" }, { has: "iselda:verite" }] }, text: "Iselda a recopié une phrase du testament de son père, une seule, sur la première page de son cahier de coquillages. Elle la garde pour elle. Tu sais laquelle." },
    { if: { any: [{ has: "iselda:rumeur" }, { has: "acte2:fuite" }] }, text: "Iselda s'en est tenue à cette fugue. Mais elle sait, maintenant, que l'Île des Morts est à une heure de rame, et qu'on y est tranquille." },
    { if: { has: "iselda:attend" }, text: "« Quand j'aurai seize ans, je choisirai », dit Iselda chaque fois qu'on l'appelle Altesse. Elle a l'air de compter les jours. Tu les comptes aussi." },
    // Joris
    { if: { has: "joris:fidele" }, text: "Joris Malteste est capitaine de la garde du Sceau. Il boit moins. Il dit que c'est à cause de toi, et que c'est une catastrophe." },
    { if: { has: "joris:ordre" }, text: "Joris a obéi, jusqu'au bout, comme un bon soldat. Il a demandé sa retraite au printemps. Tu la lui as accordée. Il t'a serré la main en regardant la porte." },
    { if: { has: "joris:releve" }, text: "Joris Malteste a rejoint l'Arsenal. On dit qu'il a retrouvé son ancien grade et son ancienne bouteille. Le palais a cessé de le voir." },
    { if: { any: [{ has: "joris:libre" }, { has: "joris:averti" }, { has: "joris:libre_choix" }] }, text: "Un soir, longtemps après, Joris t'a dit qu'il se souvenait mot pour mot de ce que tu lui avais dit, la nuit du vin, sur la loyauté. Il t'a laissé deviner si c'était ce qui l'avait décidé." },
    // the hero's secret
    { if: { has: "secret:avoue" }, text: "Ce que tu as avoué devant le Conseil, on te le rappelle encore, parfois, dans une taverne ou une séance. Tu l'entends d'une oreille calme. De tout l'an des Deuils, c'est le seul geste dont tu sois fier." },
    { if: { has: "secret:revele" }, text: "Ton secret court les canaux. On te regarde comme on regarde une cicatrice : avec curiosité d'abord, puis par habitude." },
    { if: { all: [{ has: "secret:repris" }, { any: [{ has: "lettres:brume" }, { has: "lettres:reprises" }] }] }, text: "Les lettres de ta main ont brûlé dans le poêle du cabinet, une à une. Tu as regardé chacune devenir noire. Tu attendais la liberté. C'est un sursis que tu as senti." },
    { if: { all: [{ has: "secret:repris" }, { not: { any: [{ has: "lettres:brume" }, { has: "lettres:reprises" }] } }] }, text: "Ce qui te tenait est en cendres. Tu es désormais le seul à savoir ce que tu as fait, et c'est déjà lourd." },
    { if: { has: "secret:surpris" }, text: "Sur la nuit où l'on t'a surpris dans les archives de l'ambassade, tout le monde se tait. C'est ce silence-là qui t'inquiète." },
    { if: { all: [{ has: "secret:cede" }, { not: { has: "secret:repris" } }, { not: { has: "secret:revele" } }] }, text: exil ? "Ce qu'on savait sur toi, on le sait toujours. Là où tu vas, cela pèse peu." : "Ce qu'on savait sur toi, on le sait toujours. Tu as payé une fois. On te demandera de payer encore. On le fait toujours." },
    // the house rule of the regency
    { if: { has: "testament:sans_dettes" }, text: "L'édit de remise des dettes du pain dort, avec ton sceau, dans le coffre de la Loge du Sel." },
    { if: { has: "testament:cache" }, text: "Le testament de Corradin IV est toujours dans le double fond du coffret. Tu es seul à l'avoir lu. Un jour, Iselda ouvrira le coffret, parce qu'elle ouvre tout. Tu te demandes ce qu'elle pensera de toi ce jour-là." },
    { if: { has: "amiral:veille" }, text: "Sarvelle ignore que l'amiral a passé la nuit du trente-neuvième assis sur les marches de la porte d'eau, le sabre sur les genoux. Toi, tu le sais, et de ce mois-là, c'est un des rares souvenirs qui te soient doux." },
    { if: { has: "amiral:repousse" }, text: "Il y a, sur les marches de la porte d'eau, une entaille de coutelas que les gardes montrent aux nouveaux. Contre qui on se battait, ils l'ont à moitié oublié." },
    { if: { has: "nuit:arsenal" }, text: "On raconte, aux Canaux, l'histoire de l'héritière qui a traversé le canal à la nage, la nuit des épées noires, pour aller réveiller la flotte. L'histoire t'a oublié. Iselda la corrige chaque fois qu'elle l'entend." },
    { if: { has: "testament:brule" }, text: "Le testament de Corradin IV est en cendres. À sa place, il y a une ville. Le temps dira si l'échange était bon." },
    // how many of the city's troubles the hero took in hand
    { if: { count: SORTS, min: 6 }, text: "Livia a fait relier les registres du deuil en un seul volume, épais comme un missel. Le cuisinier, le pain, la solde, les salines, les torches, la frontière, la garde : tu as mis la main à tout. Tu as échoué plus d'une fois. Chaque dossier, du moins, est passé sous tes yeux." },
    { if: { count: SORTS, max: 3 }, text: "Il reste, des quarante jours, une pile de dossiers restés fermés. Ils se sont réglés sans toi, en bien ou en mal, et tu évites de demander comment." },
    // where the hero comes from
    { if: { has: "passe:ardre" }, text: exil ? "Tu penses aux montagnes de l'Ardre, à un berger qui lisait à la lueur du feu. Il y a toujours de la place, là-haut, pour quelqu'un qui sait lire." : "Tu as fait envoyer, au printemps, une caisse de livres dans un village de l'Ardre, à l'adresse d'un vieux berger. La caisse est partie sans lettre. Il saura de qui elle vient." },
    { if: { has: "passe:therance" }, text: proto ? "Ta vieille famille de Thérance t'a écrit, le mois suivant, pour te féliciter. Le procès qu'elle perdait depuis trente ans s'est réglé tout seul. Sa lettre est restée sans réponse." : "On t'a rappelé, plus d'une fois, pendant ces quarante jours, que tu étais né de l'autre côté du fleuve. Tu as fini par répondre que la lagune aussi était née du fleuve." },
    { if: { has: "passe:marin" }, text: "Le soir, tu descends parfois sur le quai de l'Arsenal, et tu regardes les navires qui partent. Tu as été second d'un navire qui a coulé. Tu as tenu une ville qui flotte encore. Lequel des deux te ressemble le plus ? Tu cherches toujours." },
    // the duel at Castel-Brume, the salt ledger, the hidden testament
    { if: { has: "brume:duel" }, text: "On parle encore, dans les tavernes de Thérance, du Garde du Sceau qui a battu le capitaine Sorrède dans la cour de Castel-Brume. On en parle avec respect, et avec une rancune qui attendra son heure." },
    { if: { has: "orsanne:tenu" }, text: "Ser Orsanne t'envoie, chaque année, à la Saint-Sel, une boîte de dragées. La boîte arrive sans carte. Tu sais pourquoi il continue d'être aimable : tu as toujours le cahier." },
    { if: { has: "testament:seul" }, text: "Tu as porté le testament seul, pendant dix-huit jours, à l'insu de tes propres conseillers. Ils s'en souviennent, et ils gardent le reproche pour eux." },
    { if: { has: "testament:iselda" }, text: "Iselda a gardé l'habitude de lire par-dessus ton épaule tout ce que tu scelles. Elle dit qu'elle vérifie. Tu la laisses faire." },
    { if: { all: [{ has: "testament:lu" }, { not: { any: [{ has: "testament:public" }, { has: "testament:expurge" }] } }] }, text: "Il y a eu, pendant le deuil, une nuit où tu étais la seule personne vivante à savoir ce que voulait le prince. Il y en a encore une, et c'est toi." },
    // Livia
    { if: { conf: "livia", min: 40 }, text: regent ? "Livia est restée. Elle tient tes registres, elle relit tes actes, et elle barre, en marge, au crayon, tout ce qui ressemble à un mensonge. Il y a de plus en plus de crayon." : "Livia est restée au service du Sceau. Elle dit qu'elle restera jusqu'au jour où tu lui demanderas d'écrire un mensonge. Vous savez tous les deux que ce jour viendra. Reste à savoir qui partira." },
    { if: { conf: "livia", max: 39 }, text: "Livia a quitté le service du Sceau au printemps. Elle tient maintenant les archives de la ville, sur l'autre rive. Vous vous croisez sur les ponts. Elle te salue, et passe." },
  ].filter(Boolean);
}

var SORTS = [{ has: "bertin:sort" }, { has: "pain:sort" }, { has: "solde:sort" }, { has: "salines:sort" }, { has: "tessa:sort" }, { has: "brume:sort" }, { has: "joris:sort" }];
var BOUND = { all: [{ has: "secret:cede" }, { not: { has: "secret:repris" } }, { not: { has: "secret:revele" } }, { not: { has: "secret:avoue" } }] };
var CONSEIL_VOTES = [{ has: "appui:mer:conseil" }, { has: "appui:sel:conseil" }, { has: "appui:eaux:conseil" }, { has: "appui:rames:conseil" }];
var TOI_VOTES = [{ has: "appui:sel:toi" }, { has: "appui:eaux:toi" }, { has: "appui:rames:toi" }];
// Intent: endFx(EndingId) -> Fx = what every ending marks (its id, the shared "an ending was reached", the main quest)
function endFx(id) { return { quest: "T_conseil", flag: ["fin:" + id, "fin:atteinte"], ep: ["histoire", 10000] }; }

module.exports = {
  // ------------------------------------------------------------------ the night of the thirty-ninth day
  T_nuit: { act: "III", title: "La nuit du trente-neuvième jour", place: "palais",
    text: [
      "Le trente-neuvième jour finit sans coucher de soleil : un brouillard monte de la lagune vers quatre heures et mange la ville par le bas, d'abord les quais, puis les ponts, puis les fenêtres. À la nuit, on ne voit plus les lanternes à vingt pas.",
      "Tu fais fermer les grilles du palais. Tu fais doubler les gardes à la porte d'eau. Livia a posé sur ta table, à côté du coffret, ton discours à écrire : une feuille blanche, et une plume neuve.",
      { with: "livia", text: "« Vous devriez dormir », dit-elle. Elle reste sur sa chaise, et toi sur la tienne." },
      { if: { has: "passe:chasse" }, text: "Tu penses à la nuit de chasse au marais, il y a des années, quand tu as tiré le prince hors de la vase par le col. Tu lui as sauvé la vie une fois. La seconde t'a échappé." },
      { if: { has: "passe:refus" }, text: "Tu penses à la bourse que tu as refusée, le jour où il t'a rencontré. Il a ri. Il savait déjà qu'un jour il te demanderait de refuser bien davantage." },
      { if: { has: "passe:mystere" }, text: "Tu penses que tu sais, maintenant, pourquoi il t'a choisi. Il te l'a écrit. La chose pèse le même poids." },
      { with: "ansel", text: "Ansel est passé voir Iselda. Il redescend en disant qu'elle dort, ce qui est un mensonge de médecin, et qu'elle a demandé si tu étais encore debout, ce qui est vrai." },
      { if: { has: "joris:fidele" }, text: "Joris passe la tête par la porte. « La porte d'eau est à moi, dit-il. Six hommes, les meilleurs. Si quelqu'un frappe cette nuit, c'est moi qui ouvrirai, et il le regrettera. »" },
      { if: { has: "joris:ordre" }, text: "Joris tient la porte d'eau, comme il en a reçu l'ordre. Il a passé la soirée en bas, à son poste." },
      { if: { has: "joris:releve" }, text: "La porte d'eau est tenue par un sergent dont tu ignores le nom. Joris est à l'Arsenal depuis trois jours." },
      { if: { has: "brume:retrait" }, text: "Au milieu de la nuit, un courrier trempé apporte un billet du comte Mérande : *Les tentes noires sont pliées. Le duc est sur la route de Thérance, et il écume.* Livia le relit deux fois, puis elle va se coucher." },
      { if: { all: [{ not: { has: "brume:retrait" } }, { has: "coup:connu" }] }, text: "Tu sais ce qui vient : quarante épées noires, par le canal des Teinturiers, après la cloche de minuit. Tu as eu le temps de le préparer. Reste à voir si cela suffira." },
    ],
    choices: [
      { label: "Attendre l'aube à la fenêtre", hide: { not: { has: "brume:retrait" } }, to: "T_nuit_calme" },
      { label: "Faire une ronde jusqu'à la porte d'eau", hide: { has: "brume:retrait" }, to: "T_nuit_coup" },
    ] },

  T_nuit_calme: { act: "III", title: "Le brouillard", place: "palais",
    text: [
      "Les heures passent, vides. C'est la chose la plus difficile de toute l'année : tu écoutes chaque barque qui passe sous les fenêtres comme si elle portait la fin du monde.",
      { if: { all: [{ has: "joris:releve" }, { not: { has: "appui:mer:conseil" } }] }, text: "Vers trois heures, tu entends des rames. Beaucoup de rames, bien synchronisées, et le choc sourd d'une coque contre les marches de la porte d'eau. Puis des voix. Puis la grille qu'on ouvre de l'intérieur." },
      { if: { not: { all: [{ has: "joris:releve" }, { not: { has: "appui:mer:conseil" } }] } }, text: "À l'aube, le brouillard se lève d'un coup, comme un rideau. La ville est là, intacte, grise, mouillée. Les cloches du Temple sonnent le quarantième jour." },
    ],
    choices: [
      { label: "Descendre à la porte d'eau", hide: { not: { all: [{ has: "joris:releve" }, { not: { has: "appui:mer:conseil" } }] } }, to: "T_nuit_amiral" },
      { label: "Te rendre à la salle du Conseil", hide: { all: [{ has: "joris:releve" }, { not: { has: "appui:mer:conseil" } }] }, to: "T_seance" },
    ] },

  T_nuit_amiral: { act: "III", title: "La porte d'eau", place: "palais",
    text: [
      "Ils sont vingt, des marins de l'*Intrépide*, en vareuse de travail. Au milieu d'eux, l'amiral, tête nue. Le sergent de la porte d'eau se tient de côté, les yeux au sol.",
      "« Je suis venu chercher ma nièce, dit l'amiral. Pour la nuit. Pour sa sécurité. Elle sera à bord de mon vaisseau, et demain, après le vote, quel qu'il soit, je la ramènerai. Vous avez ma parole. »",
      "Il a l'air de le croire. C'est peut-être vrai. Mais demain matin, quand les Bancs entreront dans la salle, tout le monde saura où est l'héritière, et sur quel pont elle est gardée.",
    ],
    choices: [
      { label: "« Elle dort. Si vous voulez la protéger, restez ici, avec moi, et gardez la porte. »", test: { dom: "social", diff: -15, label: "Social", help: [{ after: "ghislain:approche", v: 20 }, { after: "liane:ghislain", v: 10 }, { after: "amiral:aveu", v: 10 }, { after: "amiral:respect", v: 10 }, { after: "ghislain:ecarte", v: -10 }] },
        win: { fx: { flag: "amiral:veille", fac: { mer: 10 } }, to: "T_nuit_amiral_reste" }, lose: { to: "T_nuit_amiral_force" } },
      { label: "Appeler la garde et lui barrer le passage", fx: { clock: { emprise: 1 } }, to: "T_nuit_amiral_combat" },
      { label: "Le laisser faire", fx: { flag: "amiral:iselda" }, to: "T_nuit_amiral_part" },
    ] },
  T_nuit_amiral_reste: { act: "III", title: "La garde", place: "palais",
    text: [
      "L'amiral te regarde longtemps. Puis il se tourne vers ses marins et leur dit de rentrer. Il reste seul sur les marches mouillées. Il tire son sabre et s'assied, la lame en travers des genoux, face à la lagune.",
      "Tu t'assieds à côté de lui. Vous vous taisez. Au bout d'une heure, il dit : « Elle ronfle ? » Tu dis que oui, un peu. Il rit tout bas, le visage dans les mains.",
      "À l'aube, il remonte dans sa barque en silence. Les cloches sonnent le quarantième jour.",
    ],
    choices: [{ label: "Te rendre à la salle du Conseil", to: "T_seance" }] },
  T_nuit_amiral_force: { act: "III", title: "Plus fort que le Sceau", place: "palais",
    text: [
      "« Je vous respecte, dit l'amiral. J'obéis à autre chose. » Il fait un signe. Ses marins passent devant toi, poliment, en te contournant, et montent l'escalier.",
      "Quand ils redescendent, Iselda est dans les bras d'un quartier-maître, enroulée dans une couverture, les yeux ouverts. Elle te suit des yeux, muette. La barque s'éloigne dans le brouillard.",
    ],
    fx: { flag: "amiral:iselda" },
    choices: [{ label: "Attendre l'aube", to: "T_seance" }] },
  T_nuit_amiral_part: { act: "III", title: "La barque", place: "palais",
    text: [
      "Tu t'écartes. Les marins montent, redescendent. Iselda passe devant toi dans une couverture, portée comme un paquet précieux. En passant, elle tend la main et touche ta manche.",
      "La barque s'éloigne dans le brouillard. Tu restes sur les marches jusqu'à l'aube.",
    ],
    choices: [{ label: "Te rendre à la salle du Conseil", to: "T_seance" }] },
  T_nuit_amiral_combat: { act: "III", title: "Les marins de l'Intrépide", place: "palais",
    combat: { title: "Les marins de l'amiral", enemies: [{ id: "marin", n: 2 }], terrain: "bati", spare: true,
      win: { fx: { flag: "amiral:repousse", fac: { mer: -20 }, ep: ["histoire", 3000] }, to: "T_nuit_amiral_repousse" },
      lose: { fx: { flag: "amiral:iselda", pv: -2 }, to: "T_nuit_amiral_force" } },
    text: [
      "Tu cries l'alarme. Les gardes du Sceau dévalent l'escalier ; les marins tirent leurs coutelas. Dans le brouillard, sur les marches glissantes, on se bat à l'aveugle, entre gens qui buvaient ensemble la semaine dernière.",
    ] },
  T_nuit_amiral_repousse: { act: "III", title: "La grille", place: "palais",
    text: [
      "Les marins reculent jusqu'à la barque, en traînant deux blessés. L'amiral est le dernier à monter. Il te regarde, debout à la poupe, dans un silence complet.",
      "On referme la grille. Tu remontes. Iselda est assise sur son lit, tout habillée, les chaussures aux pieds. « J'ai entendu, dit-elle. Je me suis préparée. Pour qui, je me le demandais. »",
    ],
    choices: [{ label: "Attendre l'aube", to: "T_seance" }] },

  // the black swords
  T_nuit_coup: { act: "III", title: "Les épées noires", place: "palais",
    text: [
      "Minuit sonne au Temple, étouffé par le brouillard. Au deuxième coup, tu entends un cri du côté du canal des Teinturiers. Au cinquième, un bruit de bois qui casse. Au douzième, il y a des hommes en noir dans la cour basse, cuirasses nues, l'épée à la main.",
      { if: { any: [{ has: "coup:connu" }, { has: "joris:fidele" }] }, text: "Ils trouvent la cour vide, et toutes les portes fermées, sauf une. Derrière celle-là, il y a toi, et les meilleurs hommes du Sceau." },
      { if: { not: { any: [{ has: "coup:connu" }, { has: "joris:fidele" }] } }, text: "Les gardes de la cour basse sont morts avant d'avoir crié. Les hommes en noir montent l'escalier d'honneur, en courant, droit vers les appartements d'Iselda." },
      { if: { has: "coup:affaibli" }, text: "Leur officier manque. Ils hésitent dans la cour, s'interpellent à voix basse, et ce flottement est un cadeau." },
    ],
    choices: [
      { label: "Les attendre au pied de l'escalier", hide: { any: [{ not: { any: [{ has: "coup:connu" }, { has: "joris:fidele" }] } }, { has: "coup:affaibli" }] }, to: "T_nuit_pret" },
      { label: "Les attendre au pied de l'escalier", hide: { any: [{ not: { any: [{ has: "coup:connu" }, { has: "joris:fidele" }] } }, { not: { has: "coup:affaibli" } }] }, to: "T_nuit_sans_chef" },
      { label: "Courir aux appartements d'Iselda", hide: { any: [{ has: "coup:connu" }, { has: "joris:fidele" }] }, to: "T_nuit_surpris" },
    ] },
  T_nuit_pret: { act: "III", title: "L'escalier", place: "palais",
    combat: { title: "Les épées noires", enemies: ["mercenaire", "capitaine_noir"], terrain: "bati",
      pretrap: { if: { has: "joris:fidele" }, text: "Joris surgit de l'ombre de la porte d'eau, avec ses six hommes, et prend les épées noires à revers. Le premier tombe sans se retourner." },
      win: { fx: { flag: "nuit:coup", ep: ["histoire", 5000] }, to: "T_nuit_apres" }, lose: { to: "F_guerre" } },
    text: [
      "Tu as choisi l'escalier parce qu'il est étroit et qu'on y monte à deux de front, au plus. Les hommes en noir arrivent, plus nombreux que prévu. Leur chef a une cuirasse noire et une voix d'officier.",
    ] },
  T_nuit_surpris: { act: "III", title: "La chambre d'Iselda", place: "palais",
    text: [
      "Tu arrives avant eux, de trois marches. Tu fermes la porte. Iselda est debout au milieu de la chambre, en chemise, un chandelier à la main, comme une arme. Ortensia est derrière elle, et elle tremble.",
      "Il y a deux sorties : la porte, et la fenêtre, qui donne sur le canal, deux étages plus bas.",
    ],
    choices: [
      { label: "Tenir la porte", hide: { has: "coup:affaibli" }, to: "T_nuit_porte" },
      { label: "Tenir la porte", hide: { not: { has: "coup:affaibli" } }, to: "T_nuit_sans_chef" },
      { label: "Sauter dans le canal avec Iselda, et gagner l'Arsenal à la nage", test: { dom: "nature", diff: -10, label: "Nature", help: [{ after: "iselda:lagune", v: 15 }] },
        win: { fx: { flag: ["nuit:arsenal", "nuit:coup"], fac: { mer: 15 } }, to: "T_nuit_arsenal" }, lose: { fx: { pv: -3 }, to: "T_nuit_chute" } },
    ] },
  T_nuit_porte: { act: "III", title: "La porte", place: "palais",
    combat: { title: "Les épées noires", enemies: [{ id: "mercenaire", n: 2 }, "capitaine_noir"], terrain: "bati",
      win: { fx: { flag: "nuit:coup", ep: ["histoire", 6000] }, to: "T_nuit_apres" }, lose: { to: "F_guerre" } },
    text: [
      { if: { seen: "T_nuit_chute" }, text: "Ils descendent les marches vers vous, trois et leur capitaine, à pas tranquilles. Tu te mets debout, ruisselant, entre eux et une enfant de neuf ans qui claque des dents.", else: "La porte cède au troisième coup d'épaule. Ils entrent. Tu es entre eux et une enfant de neuf ans qui tient un chandelier." },
    ] },
  T_nuit_sans_chef: { act: "III", title: "Sans capitaine", place: "palais",
    combat: { title: "Les épées noires", enemies: [{ id: "mercenaire", n: 3 }], terrain: "bati",
      pretrap: { if: { all: [{ has: "joris:fidele" }, { not: { seen: "T_nuit_surpris" } }] }, text: "Joris surgit de l'ombre de la porte d'eau, avec ses six hommes, et prend les épées noires à revers. Le premier tombe sans se retourner." },
      win: { fx: { flag: "nuit:coup", ep: ["histoire", 5000] }, to: "T_nuit_apres" }, lose: { to: "F_guerre" } },
    text: [
      { if: { not: { seen: "T_nuit_surpris" } }, text: "Tu as choisi l'escalier parce qu'il est étroit et qu'on y monte à deux de front, au plus. Les hommes en noir arrivent en désordre, en se bousculant. Celui qui crie les ordres a la voix qui tremble, et ses hommes regardent derrière eux." },
      { if: { all: [{ seen: "T_nuit_surpris" }, { not: { seen: "T_nuit_chute" } }] }, text: "La porte cède au troisième coup d'épaule. Ils entrent, trois, quatre, privés de leur officier : celui qui crie les ordres a la voix qui tremble, et ses hommes regardent derrière eux. Tu es entre eux et une enfant de neuf ans qui tient un chandelier." },
      { if: { seen: "T_nuit_chute" }, text: "Ils descendent les marches vers vous, privés de leur officier : celui qui crie les ordres a la voix qui tremble, et ses hommes regardent derrière eux. Tu te mets debout, ruisselant, entre eux et une enfant de neuf ans qui claque des dents." },
    ] },
  T_nuit_chute: { act: "III", title: "Le canal", place: "palais",
    text: [
      "Tu enjambes l'appui de la fenêtre, Iselda contre toi, et tu sautes. Tu sais tout de suite que c'est raté : ton pied accroche la corniche, et vous tombez de travers, et l'eau te frappe comme une porte.",
      "Quand tu remontes, à moitié assommé, Iselda te tient par le col et te tire vers l'escalier du palais, le seul qu'elle voie. En haut des marches, il y a des hommes en noir. C'est le seul chemin.",
    ],
    choices: [
      { label: "Te relever et les affronter", hide: { has: "coup:affaibli" }, to: "T_nuit_porte" },
      { label: "Te relever et les affronter", hide: { not: { has: "coup:affaibli" } }, to: "T_nuit_sans_chef" },
    ] },
  T_nuit_arsenal: { act: "III", title: "L'Arsenal", place: "arsenal",
    text: [
      "L'eau est noire et froide, et le brouillard si épais qu'on nage à l'oreille. Iselda nage mieux que toi. C'est elle qui trouve l'escalier de l'Arsenal, qui monte la première, et qui frappe à la poterne avec le poing.",
      "L'amiral descend lui-même, en chemise. Il la prend dans ses bras, la couvre de son manteau, et il hurle des ordres. En un quart d'heure, trois cents marins traversent la lagune vers le palais. À l'aube, les seules épées noires de Sarvelle rouillent au fond du canal.",
      "Toute la ville saura, avant midi, qui a sauvé l'héritière. Ton nom y sera, à côté d'un autre.",
    ],
    choices: [{ label: "Te rendre à la salle du Conseil", to: "T_seance" }] },
  T_nuit_apres: { act: "III", title: "Après", place: "palais",
    text: [
      "Quand c'est fini, il y a du sang sur l'escalier d'honneur, et une épée noire plantée dans la rampe, que trois hommes renoncent à retirer. On trouve sur le capitaine un ordre de marche au sceau du duc Amaury. Le comte Mérande, qu'on réveille, le lit, pâlit, et dit : « Le roi l'ignorait. » Peut-être.",
      { with: "joris", text: "Joris s'essuie le visage avec sa manche. « Bon, dit-il. Maintenant je peux boire ? »" },
      { with: "ansel", text: "Ansel recoud les blessés jusqu'à l'aube, sur la table de la salle des gardes. Il travaille en silence, les mains sûres." },
      "Iselda a tout entendu. Les yeux secs, elle demande si elle doit quand même aller au Conseil. Tu dis que oui.",
    ],
    choices: [{ label: "Te rendre à la salle du Conseil", to: "T_seance" }] },

  // ------------------------------------------------------------------ the fortieth day
  T_seance: { act: "III", title: "Le quarantième jour", place: "palais",
    text: [
      "La salle du Conseil est une longue pièce lambrissée, avec cinq bancs en arc de cercle et, au fond, un fauteuil vide, tendu de noir depuis quarante jours. Le public se presse dans la galerie : marchands, marins, débardeurs, dames en deuil, ambassadeurs. On a ouvert les fenêtres, et la lagune entre avec son odeur.",
      "Ser Orsanne au Banc du Sel, une serviette sur les genoux, comme à table. L'amiral au Banc de la Mer, en grand uniforme. Mère Ysaure au Banc des Eaux, les mains dans ses manches. Nello Brisse au Banc des Rames, debout, comme toujours. Et toi au Banc du Prince, le coffret d'ébène devant toi.",
      { if: { has: "amiral:iselda" }, text: "La chaise d'Iselda, à droite du fauteuil vide, est vide aussi. Tous les regards y passent, et se détournent. L'amiral regarde droit devant lui." },
      { if: { not: { has: "amiral:iselda" } }, text: "Iselda est assise à droite du fauteuil vide, sur une chaise trop haute pour elle. Elle a mis la robe noire du premier jour. Ses pieds pendent au-dessus du sol." },
      { if: { has: "nuit:coup" }, text: "Toute la ville sait, depuis l'aube, ce qui s'est passé cette nuit dans le palais. Quand tu entres, la galerie se tait d'un coup, puis quelqu'un commence à frapper du pied, puis tout le monde." },
      { if: { has: "nuit:arsenal" }, text: "Les marins de la galerie applaudissent l'amiral quand il entre. Pour toi, ils gardent les mains sur les genoux." },
      { if: { has: "odile:arretee" }, text: "Dans un coin de la galerie, entre deux gardes, Odile Varn. On l'a amenée pour qu'elle voie. Elle regarde la salle avec l'intérêt d'une secrétaire qui prend des notes." },
      { if: { has: "tessa:liberee" }, text: "Tessa Brisse est derrière son frère, les bras croisés, les poignets encore rouges des fers." },
      { if: { has: "ansel:temoin" }, text: "Maître Ansel est assis au premier rang de la galerie, sa canne entre les genoux. Il te fait un petit signe de tête. Il est prêt." },
      "Le greffier frappe trois coups. « Le Conseil des Cinq Bancs est réuni, au quarantième jour du deuil, pour donner un régent à la ville. Le Garde du Sceau a la parole. »",
    ],
    choices: [
      { label: "Ouvrir le coffret et lire le testament du prince, en entier", hide: { not: { item: "testament" } }, fx: { flag: "testament:public" }, to: "T_lecture" },
      { label: "Lire le testament, en sautant la première phrase", hide: { not: { item: "testament" } }, fx: { flag: "testament:expurge", clock: { emprise: 2 } }, to: "T_lecture_expurge" },
      { label: "Laisser le coffret fermé, et ouvrir le vote", hide: { not: { item: "testament" } }, fx: { flag: "testament:cache" }, to: "T_appel" },
      { label: "Jeter le testament dans le brasero, devant tout le monde", hide: { not: { item: "testament" } }, fx: { drop: "testament", flag: "testament:brule", clock: { emprise: 1 } }, to: "T_lecture_brule" },
    ] },
  T_lecture: { act: "III", title: "Le testament", place: "palais",
    text: [
      "Tu ouvres le coffret. Tu soulèves la matrice du Sceau. Tu fais jouer le double fond, et le bruit de l'ongle sur le bois s'entend jusqu'à la galerie. Tu déplies la feuille, et tu lis.",
      "*Moi, Corradin, quatrième du nom, sachant ma fin proche et la voulant, je laisse à ma ville ce que j'ai manqué à lui donner vivant.*",
      "*Je reconnais Iselda pour ma fille et mon héritière. Ma fille par choix, sinon par le sang.*",
      "Un bruit traverse la salle, comme une vague sous un ponton. Liane, dans la galerie, porte la main à sa bouche. L'amiral est de pierre. Mère Ysaure ferme les yeux.",
      { if: { any: [{ has: "iselda:sait" }, { has: "iselda:testament" }] }, text: "Iselda garde la tête haute. Elle regarde la salle, une rangée après l'autre, comme pour se souvenir de chaque visage." },
      { if: { not: { any: [{ has: "iselda:sait" }, { has: "iselda:testament" }] } }, text: "Iselda te regarde. Sur son visage, tu la vois comprendre, mot après mot, ce que tu lis. Elle l'apprend ici, devant toute la ville." },
      "*Je refuse la régence à mon frère, qui l'aimerait trop, et à ma femme, qui a trop peur. Je la confie aux Cinq Bancs ensemble, présidés par le Garde de mon Sceau, jusqu'aux seize ans de ma fille.*",
      "*J'ordonne la remise de toutes les dettes du pain contractées par les gens des Canaux auprès de la Hanse pendant mon règne. C'est un remboursement.*",
      { if: { has: "ansel:temoin" }, text: "Quand tu as fini, Ansel se lève dans la galerie. « J'étais là, dit-il, d'une voix qui porte. J'ai vu le prince écrire et sceller. Et la nuit même, à sa demande, je lui ai donné de quoi mourir. » Il se rassied. La salle retient son souffle." },
      { if: { has: "testament:sans_dettes" }, text: "Ser Orsanne pose sa serviette sur le banc. Il te regarde, et toute malice a quitté ses yeux. « Nous avions un accord », dit-il, assez bas pour que seuls les Bancs entendent. Puis, plus haut : « Le Banc du Sel reprend sa liberté. »" },
    ],
    choices: [
      { label: "Passer au vote", hide: { has: "testament:sans_dettes" }, to: "T_appel" },
      { label: "Passer au vote", hide: { not: { has: "testament:sans_dettes" } }, fx: { unflag: "appui:sel:conseil", flag: "sel:trahi", fac: { sel: -30, rames: 20 } }, to: "T_appel" },
    ] },
  T_lecture_expurge: { act: "III", title: "Le testament, moins une phrase", place: "palais",
    text: [
      "Tu ouvres le coffret, le double fond, et tu lis. Tu lis la volonté du prince, la régence des Cinq Bancs, la remise des dettes. Tu lis lentement, d'une voix posée. La première phrase, tu la sautes.",
      "Seuls ceux qui savent le remarquent. Mère Ysaure lève un sourcil. L'amiral serre la mâchoire. Dans la galerie, la princesse Liane te regarde comme on regarde quelqu'un qui vient de vous sauver d'une noyade en vous tenant la tête sous l'eau.",
      { with: "livia", text: "Livia, derrière toi, a cessé d'écrire. Sa plume est levée au-dessus du registre. Elle l'y tient suspendue." },
      { if: { has: "ansel:temoin" }, text: "Ansel se lève pour témoigner. Il dit qu'il a vu le prince écrire et sceller. Il dit ce qu'il a fait ensuite. Sur la première phrase, il se tait. En se rasseyant, il te regarde : il a compris, et il te laisse le poids." },
      { if: { has: "testament:sans_dettes" }, text: "Tu sautes aussi l'édit des dettes. Ser Orsanne hoche la tête, imperceptiblement, comme un marchand qui voit une livraison arriver à l'heure." },
    ],
    choices: [{ label: "Passer au vote", to: "T_appel" }] },
  T_lecture_brule: { act: "III", title: "Le brasero", place: "palais",
    text: [
      "Tu sors la feuille du double fond. Tu la montres à la salle, le sceau du prince bien en vue. Puis tu la poses sur les braises du brasero.",
      "Elle se recroqueville, noircit, s'enflamme. La salle la regarde brûler. Dans la galerie, quelqu'un rit, très fort, et s'arrête net.",
      "« C'était la dernière volonté de Corradin IV, dis-tu. Elle est morte avec lui. Que les vivants votent. »",
      { if: { has: "ansel:temoin" }, text: "Ansel s'est levé dans la galerie. Il te regarde. Il se rassied, muet. Ce qu'il savait vient de brûler, et sa faute avec." },
      { with: "livia", text: "Livia a laissé tomber sa plume. La plume reste par terre." },
    ],
    choices: [{ label: "Passer au vote", to: "T_appel" }] },

  // the roll call
  T_appel: { act: "III", title: "L'appel des Bancs", place: "palais",
    text: [
      "Le greffier appelle les Bancs, un par un, dans l'ordre de la Coutume. Chacun annoncera son candidat ; le Garde du Sceau votera le dernier, et sa voix tranchera en cas d'égalité.",
      { if: { has: "appui:mer:conseil" }, text: "« Le Banc de la Mer, dit l'amiral, vote pour le conseil de régence. » La galerie des marins gronde dans son dos. Il garde les yeux sur le greffier." },
      { if: { not: { has: "appui:mer:conseil" } }, text: "« Le Banc de la Mer vote pour lui-même, dit l'amiral. Pour la régence de l'amiral. Je le dis en face. »" },
      { if: { has: "appui:sel:conseil" }, text: "« Le Banc du Sel, dit Orsanne, vote pour le conseil. Les comptes sont les comptes. »" },
      { if: { has: "appui:sel:toi" }, text: "« Le Banc du Sel vote pour le Garde du Sceau, dit Orsanne. Il sait compter, et il sait ce qu'il nous doit. »" },
      { if: { has: "appui:sel:liane" }, text: "« Le Banc du Sel vote pour la princesse Liane, dit Orsanne, et pour le traité qui l'accompagne. » Le comte Mérande, dans la galerie, garde un visage lisse. C'est un homme bien élevé." },
      { if: { has: "appui:sel:republique" }, text: "« Le Banc du Sel, dit Orsanne, et il a l'air de mâcher quelque chose d'amer, vote pour une ville sans régent. Que Dieu me pardonne, je vais m'entendre avec les rameurs. »" },
      { if: { not: { any: [{ has: "appui:sel:conseil" }, { has: "appui:sel:toi" }, { has: "appui:sel:liane" }, { has: "appui:sel:republique" }] } }, text: "« Le Banc du Sel vote pour l'amiral, dit Orsanne. Les dettes de la flotte se négocient mieux avec un régent qui les a signées. »" },
      { if: { has: "appui:eaux:conseil" }, text: "« Le Banc des Eaux, dit Mère Ysaure, vote pour le conseil de régence, sous réserve de l'éducation de l'héritière. »" },
      { if: { has: "appui:eaux:toi" }, text: "« Le Banc des Eaux vote pour le Garde du Sceau », dit Mère Ysaure, et elle te regarde d'une façon qui te rappelle ce qu'elle sait." },
      { if: { not: { any: [{ has: "appui:eaux:conseil" }, { has: "appui:eaux:toi" }] } }, text: "« Le Banc des Eaux vote pour la tutelle du Temple, dit Mère Ysaure. L'enfant a besoin d'une mère, et la ville d'une conscience. »" },
      { if: { has: "appui:rames:conseil" }, text: "« Les Rames votent pour le conseil, dit Nello Brisse. Pour la première fois de notre vie, on vote pour un prince. Il est mort. Ça aide. »" },
      { if: { has: "appui:rames:toi" }, text: "« Les Rames votent pour le Garde du Sceau, dit Nello. Parce qu'il est venu aux Canaux quand il pleuvait. »" },
      { if: { has: "appui:rames:republique" }, text: "« Les Rames votent contre tout régent, dit Nello. Pour la république. Et je crois qu'elles auront de la compagnie. » Il regarde Iselda." },
      { if: { not: { any: [{ has: "appui:rames:conseil" }, { has: "appui:rames:toi" }, { has: "appui:rames:republique" }] } }, text: "« Les Rames s'abstiennent, dit Nello. Choisir son maître, très peu pour nous. On attend de voir lequel vous allez nous donner. »" },
      { if: { has: "secret:revele" }, text: "Quand le greffier se tourne vers le Banc du Prince, la galerie bruisse encore de ce qu'elle vient d'apprendre sur toi. On t'écoutera voter, et l'on votera sans toi." },
      "« Le Banc du Prince », dit le greffier.",
    ],
    choices: [
      { label: "Lire le billet qu'on vient de glisser sous ta main", hide: { not: BOUND }, to: "T_lie" },
      { label: "« Le Banc du Prince vote pour le conseil de régence que voulait le prince. »", hide: BOUND,
        if: { all: [{ any: [{ has: "testament:public" }, { has: "testament:expurge" }] }, { any: [{ all: [{ not: { has: "secret:revele" } }, { count: CONSEIL_VOTES, min: 1 }] }, { count: CONSEIL_VOTES, min: 2 }] }] },
        why: "Il faut que le testament ait été lu devant eux, et qu'un Banc te suive : jusque-là, le conseil de régence reste une idée à toi.", to: "F_conseil" },
      { label: "« Le Banc du Prince vote pour le Garde du Sceau. »", hide: { any: [BOUND, { not: { count: TOI_VOTES, min: 1 } }] }, if: { not: { has: "secret:revele" } }, why: "Après ce qu'on vient d'apprendre sur toi, la ville se refusera à toi.", to: "F_regent" },
      { label: "Donner la parole à Iselda", hide: { any: [BOUND, { not: { has: "iselda:renonce" } }] }, if: { all: [{ has: "appui:rames:republique" }, { not: { has: "amiral:iselda" } }] }, why: "Il faudrait qu'elle soit là, et qu'un Banc au moins soit prêt à l'entendre.", to: "T_iselda_parle" },
      { label: "« Le Banc du Prince vote pour la princesse Liane. »", hide: { any: [BOUND, { not: { has: "appui:sel:liane" } }] }, to: "F_protectorat" },
      { label: "« Le Banc du Prince vote pour la tutelle des Eaux. »", hide: { any: [BOUND, { has: "appui:eaux:conseil" }, { has: "appui:eaux:toi" }] }, to: "F_temple" },
      { label: "« Le Banc du Prince vote pour l'amiral. »", hide: BOUND, to: "F_amiral" },
      { label: "Poser le Sceau sur la table, et sortir", hide: BOUND, to: "F_exil" },
    ] },
  T_lie: { act: "III", title: "Le billet", place: "palais",
    text: [
      "Le billet se passe de signature.",
      { if: { has: "secret:theran" }, text: "*Le Banc du Prince vote pour la princesse Liane. Sinon, les lettres de Corne seront lues dans cette salle avant midi.* Tu lèves les yeux. Dans la galerie, à côté du comte, quelqu'un a une liasse sur les genoux." },
      { if: { has: "secret:sang" }, text: "*Le Banc du Prince vote pour la tutelle des Eaux. Sinon, le nom de Port-Varenne sera prononcé.* Tu lèves les yeux. Mère Ysaure prie, les yeux fermés." },
      { if: { has: "secret:dette" }, text: "*Le Banc du Prince vote pour l'amiral. Sinon, les reconnaissances seront lues. Avec les sommes.* Tu lèves les yeux. Ser Orsanne s'essuie les doigts dans sa serviette, un par un." },
      "Le greffier attend. La salle attend. Tu as payé une fois, déjà. C'est comme ça qu'on paie toujours.",
    ],
    choices: [
      { label: "Voter comme on te le demande", fx: { flag: "vote:lie", clock: { emprise: 1 } }, to: "T_lie_vote" },
      { label: "Te lever, et dire toi-même ce qu'ils menacent de dire", fx: { flag: ["secret:revele", "secret:avoue"], conf: { livia: 15, joris: 10 } }, to: "T_lie_aveu" },
      { label: "Froisser le billet et voter librement", fx: { flag: "secret:revele" }, to: "T_lie_refus" },
    ] },
  T_lie_vote: { act: "III", title: "Le prix", place: "palais",
    text: [
      "Tu plies le billet en quatre. Tu le glisses dans ta manche. Tu te lèves.",
      { with: "livia", text: "Livia, derrière toi, a vu ta main. Le texte du billet lui échappe. Elle sait pourtant que tu vas mentir." },
    ],
    choices: [
      { label: "« Le Banc du Prince vote pour la princesse Liane. »", hide: { not: { has: "secret:theran" } }, to: "F_protectorat" },
      { label: "« Le Banc du Prince vote pour la tutelle des Eaux. »", hide: { not: { has: "secret:sang" } }, to: "F_temple" },
      { label: "« Le Banc du Prince vote pour l'amiral. »", hide: { not: { has: "secret:dette" } }, to: "F_amiral" },
    ] },
  T_lie_aveu: { act: "III", title: "Ce qu'on dit soi-même", place: "palais",
    text: [
      "Tu te lèves. Tu poses le billet sur la table, à côté du coffret. Et tu dis, d'une voix nouvelle, ce que tu as fait.",
      { if: { has: "secret:theran" }, text: "Les lettres. Les renseignements sur la flotte, il y a douze ans. L'argent de Thérance. La faim qui te poussait, et qui te laisse entière ta faute." },
      { if: { has: "secret:sang" }, text: "Port-Varenne. L'homme qui battait ta sœur. La nuit, le couteau, le nom que tu as pris ensuite. Des regrets, tu ignores si tu en as, et tu te tais là-dessus." },
      { if: { has: "secret:dette" }, text: "Le jeu. Les reconnaissances. Les sommes, toutes, jusqu'au dernier denier, et le prince qui avait payé en silence." },
      "La salle se tait. Puis le greffier, pris de court, demande d'une petite voix si le Banc du Prince souhaite toujours voter. Tu dis que oui.",
    ],
    choices: [{ label: "Voter", to: "T_appel" }] },
  T_lie_refus: { act: "III", title: "Le billet froissé", place: "palais",
    text: [
      "Tu froisses le billet, et tu le laisses tomber par terre. Avant que tu aies ouvert la bouche, une voix s'élève dans la galerie, et lit, d'un ton égal, ce qu'il y avait à lire sur toi.",
      "Ça dure moins d'une minute. Quand c'est fini, les regards sur toi ont changé. Le greffier se racle la gorge.",
    ],
    choices: [{ label: "Voter", to: "T_appel" }] },
  T_iselda_parle: { act: "III", title: "La parole d'Iselda", place: "palais",
    text: [
      "« Le Banc du Prince donne sa parole à l'héritière », dis-tu. Le greffier ouvre la bouche pour invoquer la Coutume, et la referme.",
      "Iselda descend de sa chaise trop haute. Elle s'avance au milieu de l'arc des cinq Bancs. Elle est très petite, et la salle est très grande.",
      "« Mon père disait qu'il était le dernier prince, dit-elle. Je crois qu'il avait raison. Gardez vos régents. Je veux aller à l'école des Canaux et apprendre à compter, et nager, et quand j'aurai seize ans, je viendrai m'asseoir sur un banc, si on veut de moi, comme tout le monde. »",
      "Elle se retourne vers toi. « C'est bien comme ça ? » Toute la galerie s'est levée, et répond pour toi.",
    ],
    choices: [{ label: "« Le Banc du Prince vote pour la république. »", to: "F_republique" }] },

  // ------------------------------------------------------------------ endings
  F_conseil: { act: "III", title: "L'enfant couronnée", end: true, place: "palais", fx: endFx("conseil"),
    text: [
      "Le conseil de régence est proclamé à midi, sur les marches du palais. Les cinq Bancs signent l'acte l'un après l'autre ; le Sceau aux Deux Eaux scelle le tout. Iselda sera couronnée à seize ans, mais la ville l'appelle déjà *l'enfant couronnée*, et la galerie le crie quand elle sort sur le balcon.",
      { if: { has: "testament:public" }, text: "La ville sait tout, maintenant. Les deux pères, et la mort du prince. Pendant une semaine, on parle de cela seul. La deuxième semaine, on parle du prix du pain. C'est à ça qu'on reconnaît qu'une ville a survécu." },
      { if: { has: "testament:expurge" }, text: "Toi, tu en sais plus long que la ville. La première phrase du testament est dans ton tiroir, pliée en quatre, et chaque fois qu'Iselda te sourit, tu la sens." },
      { if: { all: [{ has: "testament:public" }, { not: { has: "sel:trahi" } }] }, text: "Les dettes du pain sont remises. Aux Canaux, on brûle les reconnaissances de la Hanse sur le pont des Rames, dans un feu de joie qui dure toute la nuit." },
      "Tu présides le conseil, chaque semaine, dans la salle lambrissée. Ce sont des séances interminables, sur des questions de péage et de vase dans les canaux. Tout le monde en sort vivant. Le prince disait que cela suffisait.",
      { if: { clock: "emprise", min: 5 }, text: "On te craint. Tu le sais. Tu as fait, pendant le deuil, des choses dures à des gens qui méritaient mieux, et ils s'en souviennent. Le conseil tient, mais il tient par toi, et tu doutes que ce soit la même chose." },
      { if: { clock: "emprise", max: 2 }, text: "On te fait confiance. C'est plus fragile que la crainte, et beaucoup plus solide." },
    ].concat(epilogue("conseil")) },
  F_amiral: { act: "III", title: "La régence de l'amiral", end: true, place: "palais", fx: endFx("amiral"),
    text: [
      "L'amiral Ghislain Térac est proclamé régent à midi. Pour tout discours, il monte sur les marches du palais, il salue la foule d'un coup de menton, et il redescend. La flotte tire une salve qui fait s'envoler toutes les mouettes de la lagune.",
      { if: { has: "vote:lie" }, text: "Tu as voté pour lui avec un billet dans ta manche. Il l'ignore. Il te remercie, le soir, d'une poignée de main d'officier, et tu as envie de te laver les mains." },
      { if: { any: [{ has: "testament:public" }, { has: "testament:expurge" }] }, text: "Il a entendu le testament de son frère, qui lui refusait la régence. Il l'a eue quand même. Il t'en veut un peu, et il s'en veut bien davantage." },
      { if: { has: "testament:public" }, text: "La ville sait qui il est pour Iselda. Dès qu'il la regarde en public, on chuchote. Alors il détourne les yeux, et Iselda se croit mal aimée. Tout ce que Corradin avait prévu arrive, une chose après l'autre." },
      "La flotte est payée. Les péniches de Thérance descendent le fleuve sous escorte de galères. Les Canaux mangent, et se taisent, et chantent moins. L'amiral gouverne comme il commande un navire : bien, et seul sur la dunette.",
      { if: { has: "amiral:iselda" }, text: "Iselda est revenue de l'*Intrépide* le soir du vote. Elle a dit que la cabine était petite et que les marins juraient tout le temps. Elle a dit qu'elle voulait y retourner." },
    ].concat(epilogue("amiral")) },
  F_temple: { act: "III", title: "La tutelle des Eaux", end: true, place: "temple", fx: endFx("temple"),
    text: [
      "Mère Ysaure prend la tutelle d'Iselda à midi, au nom du Temple, devant les cinq Bancs. Elle pose la main sur la tête de l'enfant, et elle la bénit, et la galerie se signe, presque toute.",
      "Iselda déménage au Temple le soir même, avec ses coquillages, dans une cellule blanche qui donne sur le cloître. Elle a le droit de voir sa mère le dimanche. Elle a le droit de voir l'amiral à Noël.",
      { if: { has: "vote:lie" }, text: "Mère Ysaure te remercie, après la séance, d'un regard. Le nom de Port-Varenne est resté dans sa bouche. Il y restera : elle te tient sans lui." },
      "La ville est gouvernée par un conseil de clercs, qui jeûnent le vendredi et qui ferment les tavernes à minuit. Le pain est distribué aux portes du Temple, à ceux qui assistent aux offices. Les Canaux vont aux offices. Ils y vont en traînant les pieds, et ils prennent le pain.",
      { with: "livia", text: "Livia a démissionné le soir même. « Je suis sortie de là une fois, dit-elle. Une fois suffit, même par procuration. »" },
    ].concat(epilogue("temple")) },
  F_protectorat: { act: "III", title: "La paix de Thérance", end: true, place: "ambassade", fx: endFx("protectorat"),
    text: [
      "La princesse Liane est proclamée régente à midi. Le comte Mérande signe le traité dans l'après-midi, à la table même du Conseil : Thérance lève le péage du fleuve, ouvre ses greniers, et garantit la paix. Sarvelle ouvre son port à la flotte de Thérance, et accueille une garnison de deux cents hommes, *pour la sécurité de la régente*.",
      "Le pain baisse dès la semaine suivante. Les péniches descendent le fleuve par centaines. On mange, à Sarvelle, mieux que depuis dix ans.",
      { if: { has: "nuit:coup" }, text: "La ville se souvient des épées noires de la nuit du trente-neuvième. Le comte jure que le roi en était innocent, et c'est peut-être vrai. Mais les débardeurs crachent sur les uniformes thérans, et les uniformes thérans regardent les débardeurs avec patience." },
      { if: { has: "vote:lie" }, text: "Le comte te remercie à voix basse, en te serrant la main. Il a l'air sincèrement désolé. Les lettres, il les garde." },
      "L'amiral a démissionné le soir même. La flotte a été réduite de moitié l'année suivante, par un traité annexe. Les marins sans solde ont trouvé du travail sur les péniches de Thérance.",
      "Dans dix ans, on dira que c'est le jour où Sarvelle a cessé d'être Sarvelle. On le dira en mangeant.",
    ].concat(epilogue("protectorat")) },
  F_republique: { act: "III", title: "La république des Rames", end: true, place: "canaux", fx: endFx("republique"),
    text: [
      "À midi, en guise de proclamation, une foule envahit la salle du Conseil, la galerie qui descend sur les Bancs, Nello Brisse porté en triomphe, Ser Orsanne qui se fait tout petit, et Iselda, sur les épaules d'un débardeur, qui rit.",
      "Le Conseil des Cinq Bancs devient le Conseil des Quatre. Le Banc du Prince est démonté le soir même et brûlé sur le pont des Rames. On te laisse garder le Sceau aux Deux Eaux : la république en a besoin pour sceller ses actes, et tu es seul à savoir t'en servir.",
      { if: { has: "testament:public" }, text: "Les dettes du pain sont remises dès le premier jour, par la république, au nom d'un prince mort. Nello dit que c'est la meilleure blague de l'histoire de Sarvelle." },
      { if: { has: "appui:sel:republique" }, text: "Ser Orsanne siège à côté de Nello, au Conseil des Quatre. Ils se disputent tous les jours, sur tout. Ils en restent aux mots. La Hanse vend son sel franc de taxe, les Canaux achètent leur pain comptant, et chacun croit avoir roulé l'autre." },
      "L'amiral a gardé la flotte, et la flotte a gardé la lagune. Thérance a envoyé un ambassadeur nouveau, plus jeune, qui cherche encore à qui parler.",
      "Iselda va à l'école des Canaux. Elle est mauvaise en calcul. Elle nage mieux que tout le monde.",
    ].concat(epilogue("republique")) },
  F_regent: { act: "III", title: "Le régent", end: true, place: "palais", fx: endFx("regent"),
    text: [
      "Tu es proclamé régent de Sarvelle à midi. C'est toi qui scelles l'acte de ta propre élection ; le greffier te tend le Sceau aux Deux Eaux, et ta main est ferme.",
      { if: { clock: "emprise", min: 6 }, text: "Le premier mois, tu fais arrêter trois capitaines de l'Arsenal, deux commis de la Hanse et un prédicateur du Temple. Le deuxième mois, ton nom se dit tout bas. Le troisième, Iselda cesse de te poser des questions. Tu gouvernes une ville propre, calme, nourrie et silencieuse. Les quarante jours t'ont appris tout ce qu'il fallait. Tu as tout retenu." },
      { if: { clock: "emprise", min: 3, max: 5 }, text: "Tu gouvernes comme tu as tenu le deuil : en jonglant. Un service ici, une menace là, une promesse qu'on tiendra peut-être. Ça marche. Ça marche même bien. Tu te demandes seulement, la nuit, combien de temps on peut jongler avant de laisser tomber quelque chose." },
      { if: { clock: "emprise", max: 2 }, text: "Tu gouvernes avec les Bancs. Tu les écoutes, tu les fais attendre, tu cèdes là où il faut. On dit à Sarvelle que le régent est un homme de rien, libre de tous. C'est vrai. C'est pour ça qu'on t'a choisi, et c'est pour ça qu'on te garde." },
      { if: { any: [{ has: "testament:public" }, { has: "testament:expurge" }] }, text: "Le prince avait voulu un conseil, présidé par son Garde. Il a eu son Garde, seul. Tu te demandes parfois s'il l'avait prévu, aussi. Il prévoyait tout." },
      "Iselda grandit dans le palais où tu gouvernes en son nom. Elle t'observe. Elle a seize ans dans sept ans. Tu comptes les jours, toi aussi, partagé entre l'impatience et la peur.",
    ].concat(epilogue("regent")) },
  F_guerre: { act: "III", title: "Les canaux en feu", end: true, place: "canaux", fx: endFx("guerre"),
    text: [
      "Les épées noires tiennent le palais au matin du quarantième jour. Iselda leur a échappé : Ortensia l'a cachée dans le passe-plat des cuisines, et un débardeur l'a sortie par le canal avant l'aube. Elles ont le Sceau.",
      "Le Conseil est mort avant de siéger. L'amiral débarque trois cents marins sur la place du palais, les Canaux dressent des barricades sur tous les ponts, la Hanse ferme ses entrepôts et lève sa propre garde, et le Temple sonne le tocsin trois jours de suite.",
      "Thérance envoie une armée, *pour rétablir l'ordre*. Elle s'arrête sur la rive de la lagune, parce que la flotte tient l'eau. On se bat pendant tout l'été, pont par pont, pour une ville à l'abandon.",
      "Toi, tu es vivant. On t'a ramassé dans l'escalier d'honneur, au matin, sous un tas de corps, et on t'a porté chez Ansel. Tu as passé l'été à apprendre à remarcher, et à écouter, de la fenêtre, le bruit des Canaux qui brûlent.",
    ].concat(epilogue("guerre")) },
  F_exil: { act: "III", title: "La barque de nuit", end: true, place: "canaux", fx: endFx("exil"),
    text: [
      "Tu poses le Sceau aux Deux Eaux sur la table du Conseil. Tu fais le tour de la salle, d'un pas égal, les yeux sur la porte, sous le silence. On te laisse aller. La porte se referme derrière toi, et à travers elle, tu entends le greffier rappeler les Bancs à l'ordre.",
      "On élit un régent sans toi. Tu l'apprends au port, sur un quai, de la bouche d'un marchand de seiches. Son nom, tu le sauras plus tard.",
      "Le soir, une barque de nuit t'attend, celle qui part pour les îles avec le courrier. Tu as un sac, une lettre de recommandation que Livia a écrite en pleurant de colère. C'est tout ton bagage.",
      { if: { not: { has: "amiral:iselda" } }, text: "Sur le ponton, au dernier moment, une petite silhouette en noir, essoufflée, qui a couru tout le long du quai des Verriers. Elle te met quelque chose dans la main. Un coquillage. Elle repart en courant, muette. La barque s'en va, et tu serres le coquillage dans ton poing." },
      "Sarvelle s'éloigne dans le brouillard. Tu as été, pendant quarante jours, la personne la plus puissante de la ville. Tu es resté libre de tous. Le prince avait raison, sur ce point comme sur le reste.",
    ].concat(epilogue("exil")) },
};
