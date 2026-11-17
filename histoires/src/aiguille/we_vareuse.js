// L'Île Folle-Aiguille · side story « La vareuse » (owes its question to The Captain's Daughter: what does a dangerous man
// owe a child for a coat given in the rain?). Act II: at the Basse-Fosse, under the porch of a closed chapel, a sailor
// without a ship coughs in the rain, in shirtsleeves. The child gives him his pea jacket (we:vareuse), takes him to
// Gobert, who is looking for hands (we:gobert), or passes by (we:passe). Act III, on the way to Brisegrève, if he has
// signed on: Ronan Guillerm gives the jacket back and says what he is, a deserter from the Amirauté, whose face is on a
// notice in every port. The child keeps his secret (we:garde), sends him to the captain (we:capitaine), or tells
// Gobert (we:dit). Wired in A2m_bf and A3m_jours.
module.exports = {
  passages: {
    WE_porche: { act: "II", title: "La vareuse", place: "basse_fosse", ambiance: "nuit",
      fx: { meet: "guillerm" },
      text: [
        "Il pleut sur la Basse-Fosse comme il ne pleut que là, d'une pluie grasse, tiède, qui sent l'égout et le goudron, et qui coule des toits penchés en cordes si serrées qu'on croirait marcher derrière les barreaux d'une cage. Tu rentres au quai en rasant les murs. Sous le porche d'une chapelle fermée, celle des Cordiers, dont la porte est murée depuis une épidémie que personne ne date, quelqu'un tousse.",
        "C'est un homme. Il est assis sur la marche, le dos contre les planches, en chemise, sans veste, sans souliers, les bras croisés sur la poitrine. Il a trente ans peut-être, une barbe de huit jours, et des mains de marin, larges, couturées de vieilles brûlures de cordage. Il tousse d'une toux creuse, profonde, qui semble monter d'un puits, et chaque quinte le plie en deux. Il lève les yeux vers toi. Ce sont des yeux très pâles, presque blancs, qui te regardent avec une attention tranquille, sans rien demander, comme un homme qui évalue le temps qu'il fera.",
        "« Belle soirée, dit-il. Tu connais un navire qui cherche des bras, mousse ? Je sais tout faire, sauf mourir de froid, et ce soir j'apprends. » Il rit. La toux reprend. Tu portes, sur le dos, la vareuse de grosse laine que ton père t'a donnée au départ, la sienne, retaillée, qui sent encore le Fanal quand il pleut.",
      ],
      choices: [
        { label: "Ôter ta vareuse, et la lui donner", fx: { flag: "we:vareuse" }, to: "WE_vareuse" },
        { label: "Lui dire que Maître Gobert cherche des bras, et l'y conduire", fx: { flag: "we:gobert" }, to: "WE_gobert" },
        { label: "Lui souhaiter bonne chance, et passer ton chemin", fx: { flag: "we:passe" }, to: "WE_passe" },
      ] },
    WE_vareuse: { act: "II", title: "La vareuse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu l'ôtes. La pluie te tombe aussitôt sur les épaules comme une main froide. Tu la lui tends. Il la regarde un long moment, sans la prendre, avec ses yeux pâles. « C'est la vareuse d'un homme, dit-il. Retaillée. Quelqu'un t'aime. » Tu dis que c'est ton père. Il hoche la tête, et il la prend, et il la met, lentement, comme on revêt un habit de cérémonie. Elle lui va mal. Elle lui va.",
        "« Je m'appelle Ronan, dit-il. Ronan Guillerm. Retiens le nom. Pas pour moi. Pour toi : on doit toujours savoir le nom des gens à qui on a donné quelque chose. » Tu rentres au quai en courant sous la pluie, trempé{e} jusqu'aux os, et Petit-Jules te traite d'âne, et tu dors avec la fièvre.",
        "Le lendemain matin, sur le quai, devant le magasin, il y a la file de ceux qui veulent signer sur la Cormorane. Parmi eux, en vareuse de laine retaillée, rasé de frais, droit comme un mât, un homme aux yeux pâles. Gobert le tâte, lui fait faire un nœud, le regarde tousser, grogne, et le signe. Ronan Guillerm passe devant toi sans un regard, comme s'il ne t'avait jamais vu{e}. Tu comprends, au bout d'un moment, que c'est une politesse.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", back: "A2m_bf" }] },
    WE_gobert: { act: "II", title: "La vareuse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu lui dis que tu sers sur la Cormorane, qui arme pour le sud, et que Maître Gobert cherche des bras. Il se lève aussitôt, comme si la toux n'existait plus. Vous traversez la Basse-Fosse sous la pluie, lui en chemise, toi devant, jusqu'à la taverne du quai où Gobert, chaque soir, tient son comptoir de recrutement entre une pinte et une pipe.",
        "Gobert le regarde de bas en haut, puis de haut en bas, et il dit que c'est un tousseux, un va-nu-pieds, un gibier de potence, et qu'il ne prend pas les noyés. Tu lui dis qu'il a des mains de marin. Gobert te regarde. Il regarde les mains. Il lui fait faire un nœud de bouline, derrière son dos, les yeux fermés, ce qui est un jeu de bosco pour humilier les terriens. L'homme le fait en deux secondes. « Bon, dit Gobert. Mais s'il crève de sa toux, c'est toi qui le jettes à la mer, morveux. »",
        "L'homme signe d'une croix, puis, se reprenant, d'un nom : Ronan Guillerm. Il écrit bien, d'une écriture penchée, régulière, qui étonne Gobert et te frappe, toi. En sortant, sous la pluie, il te dit, très bas : « Tu as répondu de moi. Personne n'a répondu de moi depuis longtemps. Je ne l'oublierai pas, que ça te plaise ou non. »",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", back: "A2m_bf" }] },
    WE_passe: { act: "II", title: "La vareuse", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu lui souhaites bonne chance. Il te remercie avec une politesse parfaite, comme un homme qui reçoit des visites, et il tousse, et tu passes. Au coin de la rue, tu te retournes. Il est toujours assis sous le porche, les bras croisés, les yeux pâles ouverts sur la pluie.",
        "Le lendemain, en passant par la rue des Cordiers pour aller chercher des clous, tu regardes le porche de la chapelle murée. Il est vide. Sur la marche, il y a une flaque, et dans la flaque, une feuille de papier imprimé que la pluie a collée aux pavés, avec un visage dessiné dessus, à l'encre, et des lettres que l'eau a mangées. Tu ne t'arrêtes pas pour la lire. Tu es en retard pour les clous.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "WE" }, back: "A2m_bf" }] },
    WE_bord: { act: "III", title: "La vareuse", place: "cormorane", ambiance: "nuit",
      text: [
        "Il vient te trouver un soir de quart, au pied du mât de misaine, pendant que les autres chantent à l'avant. Il ne tousse plus. La mer lui a rendu des couleurs, et il est devenu, en trois semaines, l'un des meilleurs gabiers du bord, de ceux qu'on envoie aux empointures dans les coups de vent et qui reviennent en sifflant. ",
        { if: { has: "we:vareuse" }, text: "Il porte sur le bras la vareuse de ton père, lavée, recousue aux coudes, pliée comme un drapeau. « Je te la rends, dit-il. Avec les intérêts. » Dans la poche, il a glissé une pipe de bruyère neuve, qu'il a taillée lui-même pendant les quarts de nuit." },
        { if: { has: "we:gobert" }, text: "Il tient à la main un couteau de gabier, à lame courbe, avec un manche d'os qu'il a sculpté lui-même pendant les quarts de nuit : un mât, une voile, une vague. « Pour la caution, dit-il. Tu as répondu de moi. On paie ses cautions. »" },
        "Il s'assied à côté de toi, sur le pont, le dos contre le mât, et il regarde la mer noire un long moment. Puis il parle, à voix très basse, sans te regarder. Il s'appelle bien Ronan Guillerm. Il était gabier sur une corvette de l'Amirauté, la Diligente, il y a deux ans. Un officier a fait fouetter un mousse de douze ans jusqu'à ce qu'il en meure, pour une écoute mal tournée. Ronan a frappé l'officier. Une fois. L'officier est tombé dans l'écoutille. Il ne s'est pas relevé.",
        "« Depuis, il y a mon visage, dessiné, sur un papier, dans tous les ports où flotte le pavillon. Pas très ressemblant. Assez. » Il sourit, de ses yeux pâles. « À Brisegrève, il y a un fort, un gouverneur, et un commis de l'Amirauté qui monte à bord de chaque navire avec le rôle d'équipage. Je ne te demande rien. Je voulais seulement que quelqu'un sache qui dort dans le hamac à côté du tien, au cas où. Tu es la seule personne à bord à qui je dois quelque chose. On ne ment pas aux gens à qui on doit quelque chose. »",
      ],
      choices: [
        { label: "« Je n'ai rien entendu. Bonne nuit, Ronan. »", fx: { flag: "we:garde" }, to: "WE_garde" },
        { label: "« Va le dire à la capitaine. Elle saura quoi faire de toi. »", fx: { flag: "we:capitaine" }, to: "WE_capitaine" },
        { label: "Aller trouver Gobert, et tout lui dire", fx: { flag: "we:dit" }, to: "WE_dit" },
      ] },
    WE_garde: { act: "III", title: "La vareuse", place: "cormorane", ambiance: "nuit",
      text: [
        "Il hoche la tête. Il pose la vareuse sur tes genoux. Il se lève et retourne à l'avant, où l'on chante encore, et il chante avec les autres, d'une voix de baryton très juste qui fait se retourner Lemerle à la barre.",
        "À Brisegrève, le jour où le commis de l'Amirauté monte à bord avec son registre, ses lunettes et son mauvais caractère, Ronan Guillerm est en haut du grand mât, à l'empointure du grand hunier, en train de réparer une ralingue qui n'en avait pas besoin. Le commis appelle les noms. Gobert répond pour lui, sans lever les yeux : « Guillerm, gabier, au travail. » Le commis ne lève pas les siens. Il a faim. Il a des cors aux pieds. Il ne monte pas aux mâts.",
        "Tu gardes ce qu'il t'a donné jusqu'à la fin du voyage, et longtemps après. Tu sais, chaque fois que ta main le touche, que tu portes avec toi le silence d'un homme, et que ce silence pèse plus lourd que la chose.",
      ],
      choices: [{ label: "Reprendre ton quart", fx: { quest: "WE" }, back: "A3m_jours" }] },
    WE_capitaine: { act: "III", title: "La vareuse", place: "cormorane", ambiance: "nuit",
      text: [
        "Il te regarde longtemps. Il dit que c'est une drôle d'idée, d'aller se confesser à une femme qui commande au nom de ceux qui le pendront. Tu lui dis que la capitaine Ribaud ne commande au nom de personne, sur son pont, et qu'elle déteste deux choses, les menteurs et les officiers de l'Amirauté. Il rit. Il se lève. Il va frapper à la porte de la grand-chambre, à minuit, en chemise, comme un homme qui va se rendre.",
        "Il ressort une heure plus tard. Tu ne sais jamais ce qui s'est dit. Tu sais seulement qu'à Brisegrève, au moment où le commis de l'Amirauté monte à bord avec son registre, la capitaine le reçoit dans la grand-chambre avec une bouteille de vin de Varnèse et une conversation si charmante, si longue, si pleine de questions sur la santé de sa mère, que le commis redescend à la nuit, ivre et ravi, sans avoir ouvert son registre.",
        "Le lendemain, la capitaine passe près de toi sur le pont. Elle ne s'arrête pas. Elle dit seulement, en regardant la voilure : « Un homme qui frappe un officier pour un mousse, je le garde. Un mousse qui m'envoie ce genre d'homme, je le garde aussi. Ne recommence pas trop souvent. »",
      ],
      choices: [{ label: "Reprendre ton quart", fx: { quest: "WE" }, back: "A3m_jours" }] },
    WE_dit: { act: "III", title: "La vareuse", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu vas trouver Gobert dans sa cabine, où il compte ses aiguilles et son tabac à la lueur d'un bout de chandelle. Tu lui dis tout. Il t'écoute sans t'interrompre, en tirant sur sa pipe éteinte. Quand tu as fini, il pose la pipe. « Tu sais ce qu'on fait, sur une corvette, à un gabier qui rapporte ? demande-t-il. Rien. On n'a pas besoin. Les autres s'en chargent. » Il soupire. « Va te coucher. Tu as fait ton devoir. Je déteste qu'on fasse son devoir dans ma cabine. »",
        "À Brisegrève, la veille de l'arrivée du commis de l'Amirauté, Ronan Guillerm disparaît. Son hamac est vide au quart de quatre heures. La chaloupe est à sa place. On ne trouve rien, pas un bruit, pas une éclaboussure. Quelqu'un dit qu'il a nagé jusqu'à la côte, à deux milles, de nuit. Quelqu'un d'autre dit qu'on ne nage pas deux milles dans ces eaux-là. Gobert ne dit rien du tout.",
        "Sur ton hamac, il y a un bout de papier plié en quatre, avec une écriture penchée, régulière : *On ne ment pas aux gens à qui on doit quelque chose. Tu ne m'as pas menti non plus. C'est bien. — R. G.*",
      ],
      choices: [{ label: "Reprendre ton quart", fx: { quest: "WE" }, back: "A3m_jours" }] },
  },
  extras: {
    people: {
      guillerm: { name: "Ronan Guillerm", aka: ["l'homme aux yeux pâles", "le gabier qui tousse"], qui: "Marin sans navire rencontré sous un porche de la Basse-Fosse, un soir de pluie." },
    },
    quests: [
      { id: "WE", act: "II", kind: "annexe", title: "La vareuse", start: "WE_porche", doit: "filleducapitaine", echo: ["we:vareuse", "we:gobert", "we:passe", "we:garde", "we:capitaine", "we:dit"] },
    ],
  },
};
