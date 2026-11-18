// L'Île Folle-Aiguille · side story « Le baptême de la lande » (owes its question to Hardy's The Three Strangers: whom
// do poor people protect when the law knocks at the door, the law or the man it is after?). Act III, the ship's boy at
// Lannoz: the shepherd Albin Coadic, met on the moor, invites the child to the christening feast of his second
// daughter, in his croft at the crossroads. In the rain three strangers come in one after another: a thin man who
// says he is a clockmaker, a jovial fat man who sings that he is the hangman going to the gallows of Kervoas for
// tomorrow, and a third who opens the door, sees the two others by the fire, and runs into the night. When the parish
// constable comes for the escaped prisoner, the child helps hide the man among the sheep (sm:cache), points the way
// (sm:dit), or runs after the third stranger (sm:frere). Optional: SM_chanson. Wired in A3o_lannoz.
module.exports = {
  passages: {
    SM_invitation: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "village",
      fx: { meet: "coadic" },
      text: [
        "Le berger Albin Coadic t'arrête sur la lande, le premier matin, en te tendant une main large comme une pelle. Il t'a vu aider à porter les cruches. Il dit que sa femme a eu une fille, la deuxième, il y a huit jours, et qu'on la baptise aujourd'hui, et qu'on fait la fête ce soir, à la chaumière du carrefour des Quatre-Vents, et qu'un enfant de la mer, à un baptême, ça porte bonheur. Il dit ça sans rire. Tu acceptes.",
        "La chaumière est seule, à la croisée de deux chemins de lande, sous un toit de genêt si bas qu'il touche presque les ajoncs. Le soir, il y a là vingt personnes, entassées autour du feu de tourbe, des bergers, des tourbiers, leurs femmes, un violoneux aveugle, un sonneur de bombarde, et une marmite de bouillie d'avoine qui ne désemplit pas. La pluie commence à la nuit. Une pluie de lande, oblique, têtue, qui tambourine sur le genêt comme mille doigts impatients.",
        "La femme de Coadic, une petite femme économe, compte les verres de cidre d'un œil inquiet, parce que la fête coûte, et que le berger, généreux, verse sans compter. Le bébé dort dans un berceau de bois, près du feu, au milieu du vacarme, d'un sommeil de souche.",
        "On danse. On a dansé une heure quand on frappe à la porte."
      ],
      choices: [
        { label: "Regarder qui entre", to: "SM_premier" }
      ] },
    SM_premier: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "nuit",
      fx: { meet: "moysan" },
      text: [
        "Le premier inconnu est un homme maigre, trempé jusqu'aux os, d'une quarantaine d'années, vêtu d'un habit de ville trop léger pour la lande, avec des souliers crevés. Il demande la permission de s'abriter le temps de l'averse. Coadic la lui donne, et une place au coin du feu, et une pipe, parce qu'il en a deux. L'homme remercie avec une politesse un peu trop soignée, et s'assied dos au mur, face à la porte.",
        "Il dit qu'il est horloger, qu'il va chercher du travail à Morlenc. Tu remarques ses mains, fines, avec des doigts de fileuse et un ongle long au petit doigt, pour les ressorts. Tu remarques aussi, quand il tend les mains au feu, que ses poignets portent chacun un anneau de peau rouge, à vif. Il voit que tu regardes. Il tire ses manches.",
        "On frappe de nouveau. Le deuxième inconnu entre sans attendre qu'on ouvre, en secouant la pluie de son chapeau comme un chien. Un gros homme jovial, rougeaud, en grand manteau gris, avec une voix de chantre. Il demande à boire avant de dire bonjour. Il s'assied à côté de l'horloger, sur le même banc, parce qu'il n'y a plus d'autre place. Il boit. Il boit beaucoup, et la femme de Coadic pâlit à chaque verre.",
        "Quand on lui demande son métier, le gros homme rit. Il dit qu'il va le chanter. Il se lève, il tape la mesure sur la table avec son verre, et il chante, d'une belle voix grave, une chanson à couplets dont le refrain dit qu'il va demain à Kervoas « nouer une cravate de chanvre au cou d'un voleur de moutons ». Tout le monde comprend. La salle se tait. L'horloger, à côté de lui, chante le refrain avec lui, très fort, d'une voix blanche."
      ],
      choices: [
        { label: "Écouter la chanson du bourreau jusqu'au dernier couplet", to: "SM_chanson", hide: { seen: "SM_chanson" } },
        { label: "Entendre frapper une troisième fois", to: "SM_troisieme" }
      ] },
    SM_chanson: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "nuit",
      fx: { meet: "rozier" },
      text: [
        "Le gros homme chante tous les couplets. Il y en a huit. Il les a écrits lui-même, dit-il, il s'appelle maître Rozier, il est exécuteur des hautes œuvres à Morlenc depuis vingt-deux ans, et il a le cœur à la chanson, parce qu'il faut bien. Il chante comment il a pendu un marquis qui lui a donné un pourboire, un faussaire qui lui a demandé de vérifier la corde, une femme qui a chanté avec lui jusqu'à la dernière marche.",
        "Au sixième couplet, il raconte celui de demain. Un horloger de Kervoas, dit la chanson, qui avait femme et enfants et pas de travail, et qui a volé un mouton, un seul, sur la lande, un soir de famine, pour nourrir les petits. Le tribunal l'a condamné à la corde, parce que la loi dit la corde pour le mouton. Il s'est évadé hier de la geôle, mais on le reprendra, chante le gros homme, on les reprend toujours, et demain à midi, la cravate.",
        "Il chante ça gaiement, en tapant du pied. Les rires se sont éteints. La femme de Coadic serre son bébé contre elle. Le violoneux aveugle a posé son violon. L'horloger, à côté du bourreau, reprend chaque refrain, d'une voix de plus en plus forte, de plus en plus fausse, en battant la mesure avec ses mains fines, et il sourit, d'un sourire fixe, avec des yeux de noyé.",
        "Coadic, au bout de la table, a cessé de verser à boire. Il regarde l'horloger. Il regarde ses poignets. Il regarde ses souliers crevés, pleins de boue de lande. Il reverse un verre de cidre à l'horloger, plein jusqu'au bord, en le regardant dans les yeux."
      ],
      choices: [
        { back: "SM_premier", label: "Retourner près du feu" }
      ] },
    SM_troisieme: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "On frappe une troisième fois. Coadic ouvre. Sur le seuil, sous la pluie, un jeune homme, vingt-cinq ans, maigre lui aussi, les cheveux collés, avec le même nez, la même bouche, le même front que l'horloger. Il dit bonsoir. Il demande le chemin de Kervoas. Puis il voit l'intérieur. Il voit le feu, et devant le feu, sur le même banc, côte à côte, l'horloger et le gros homme au manteau gris, qui lève son verre vers lui en chantant.",
        "Le jeune homme devient blanc comme un linge. Il recule d'un pas. Il regarde l'horloger, une seconde, avec une terreur et une tendresse si nues que tu détournes les yeux. Puis il fait volte-face et s'enfuit dans la nuit, en courant, sans refermer la porte. La pluie entre. Le feu se couche.",
        "Personne ne comprend. Puis tout le monde croit comprendre. Le bourreau se lève, renverse son verre, crie que c'est lui, le voleur de moutons, l'évadé, qu'il a eu peur en le reconnaissant, qu'il faut l'attraper. Et au même moment, au loin, du côté du bourg, on entend sonner le tocsin de la geôle : on a découvert l'évasion, on lance la battue.",
        "Les hommes de la noce sortent dans la pluie, avec des lanternes, derrière le bourreau. Dans la chaumière, il ne reste que les femmes, le bébé, le violoneux aveugle, et toi. L'horloger s'est levé, lui aussi. Il est debout près de la porte du fond, celle de la bergerie. Il te regarde. Il sait que tu as vu ses poignets. Dehors, déjà, on entend venir le pas lourd et les questions du garde champêtre, qui arrive du bourg avec un fusil et un papier."
      ],
      choices: [
        { label: "Ouvrir la porte de la bergerie, et cacher l'horloger parmi les moutons", fx: { flag: "sm:cache" }, to: "SM_cache" },
        { label: "Dire au garde où est l'homme qu'il cherche", fx: { flag: "sm:dit" }, to: "SM_dit" },
        { label: "Courir dans la nuit après le jeune homme qui s'est enfui", fx: { flag: "sm:frere" }, to: "SM_frere" }
      ] },
    SM_cache: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu ouvres la porte de la bergerie. Une odeur chaude de laine mouillée, de suint, de paille. Soixante moutons serrés les uns contre les autres, dans le noir, qui lèvent la tête ensemble. L'horloger entre. Tu le fais coucher au milieu d'eux, dans la paille, et tu ramènes sur lui une vieille peau de mouton qui sert de couverture au chien. Les bêtes, inquiètes, se resserrent autour de lui. En dix secondes, il a disparu. Il n'y a plus qu'un troupeau.",
        "Le garde champêtre entre, ruisselant, le fusil sous le bras. Il demande aux femmes si elles ont vu un homme maigre aux poignets écorchés. La femme de Coadic, sans lever les yeux de son bébé, dit qu'il est parti avec les autres, derrière le bourreau. Le garde jette un coup d'œil dans la bergerie, une lanterne à bout de bras. Soixante paires d'yeux jaunes le regardent. Il referme.",
        "La battue dure toute la nuit. On attrape, au matin, à une lieue de là, dans une tourbière, le jeune homme qui s'était enfui. On le ramène, les mains liées, au bourg. Au bourg, on apprend qui il est : le frère de l'évadé, venu de Morlenc à pied pour le voir une dernière fois avant la corde, et qui l'a trouvé assis à côté du bourreau. On le relâche. L'évadé, lui, on ne le retrouve pas.",
        "Quand tu repasses à la chaumière, à midi, le troupeau est sorti, et la bergerie est vide. Coadic t'attend sur le seuil. Il dit qu'il a compté ses moutons, ce matin. Il en a soixante. Il dit : « Le compte est bon. Personne ne m'a rien volé, cette fois. » Il te serre la main, de sa main de pelle. La femme de Coadic, derrière lui, tient le bébé, et, pour la première fois, elle ne compte rien."
      ],
      choices: [
        { label: "Repartir sur la lande", fx: { quest: "SM" }, back: "A3o_lannoz" }
      ] },
    SM_dit: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "nuit",
      text: [
        "Tu dis au garde que l'homme qu'il cherche est là, derrière la porte de la bergerie. Tu le dis parce que c'est la loi, et parce que tu as peur, et parce que le garde a un fusil. Les femmes te regardent. La femme de Coadic baisse les yeux sur son bébé. Le violoneux aveugle tourne la tête vers ta voix, lentement, comme pour se rappeler son timbre.",
        "Le garde ouvre la bergerie. L'horloger est là, debout, au milieu des moutons. Il ne se défend pas. Il tend les poignets, les anneaux de peau rouge, à vif. Il dit seulement, au garde, avec sa politesse un peu trop soignée : « Mon frère est venu me voir. Il était devant la porte. Dites-lui que je l'ai vu. » On l'emmène, sous la pluie.",
        "Les hommes de la noce reviennent à l'aube, bredouilles, trempés, avec le bourreau qui chante encore. Ils apprennent qu'on a repris l'évadé, ici même, au milieu de leur fête. Ils ne disent rien. Coadic regarde sa bergerie vide de son voleur. Il te regarde. Il te verse un verre de cidre, comme on paie une dette, et il ne t'adresse plus la parole.",
        "Le lendemain, à midi, tu entends, de la lande, la cloche de Kervoas qui sonne le glas, très loin, par-dessus les ajoncs. Tu ne sais pas si c'est pour lui. Tu ne sauras jamais. Tu sais que tu avais raison selon la loi, et tu sens, dans ta poitrine, que tu n'as plus envie d'entendre de violon de longtemps."
      ],
      choices: [
        { label: "Repartir sur la lande", fx: { quest: "SM" }, back: "A3o_lannoz" }
      ] },
    SM_frere: { act: "III", title: "Le baptême de la lande", place: "lannoz", ambiance: "nuit",
      fx: { meet: "malo_moysan" },
      text: [
        "Tu cours dans la nuit, sous la pluie, derrière le bruit des pas, dans les ajoncs qui griffent. Tu le rattrapes au bord d'une tourbière, où il s'est arrêté parce qu'il ne voit plus le chemin, à genoux dans la boue, à bout de souffle. Il croit que tu es la battue. Il lève les bras. Puis il voit ta taille, et il les baisse.",
        "Il s'appelle Malo Moysan. Il est le frère de l'horloger. Il est venu de Morlenc à pied, trois jours de marche, pour le voir une dernière fois à la geôle de Kervoas avant la corde. Il ne savait pas, pour l'évasion. Il s'est arrêté à la chaumière pour demander le chemin, et il a vu son frère assis à côté du bourreau, en train de chanter avec lui. Il dit qu'il a cru devenir fou. Il dit qu'il s'est enfui pour que son visage ne trahisse pas son frère, parce qu'il a toujours été incapable de mentir, et que tout le monde le dit, et qu'ils se ressemblent trop.",
        "Il pleure, dans la boue, à grands sanglots d'enfant. Tu le fais relever. Tu le guides, par les sentiers que la corvée d'eau t'a appris, loin de la tourbière, loin des lanternes de la battue, vers la côte, où il y a une anse avec des barques de pêcheurs, et un chemin vers Morlenc qui ne passe pas par Kervoas.",
        "À l'aube, à la pointe, il te demande ce que fait son frère. Tu dis que tu ne sais pas. Tu dis que, quand tu es parti{e}, il était debout près de la porte de la bergerie. Malo Moysan regarde la lande, longtemps, dans la lumière grise. Il dit : « Il a toujours su se cacher parmi les bêtes. Quand on était petits, il dormait dans l'étable. » Il sourit pour la première fois. Il s'en va vers le nord, à pied."
      ],
      choices: [
        { label: "Repartir sur la lande", fx: { quest: "SM" }, back: "A3o_lannoz" }
      ] }
  },
  extras: {
    people: {
      coadic: { name: "Albin Coadic", qui: "Berger de la lande de Lannoz, aux mains larges comme des pelles, qui fête le baptême de sa deuxième fille dans sa chaumière du carrefour des Quatre-Vents." },
      moysan: { name: "Urbain Moysan", qui: "Horloger maigre aux mains fines, condamné à la corde pour un mouton volé un soir de famine, évadé de la geôle de Kervoas." },
      rozier: { name: "Maître Rozier", qui: "Exécuteur des hautes œuvres de Morlenc, gros homme jovial à la voix de chantre, qui met ses pendaisons en chansons." },
      malo_moysan: { name: "Malo Moysan", qui: "Frère cadet de l'horloger, incapable de mentir, venu de Morlenc à pied pour voir son frère une dernière fois." }
    },
    quests: [
      { id: "SM", act: "III", kind: "annexe", title: "Le baptême de la lande", start: "SM_invitation", doit: "troisinconnus", echo: ["sm:cache", "sm:dit", "sm:frere"] }
    ]
  }
};
