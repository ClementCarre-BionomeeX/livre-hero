// L'Île Folle-Aiguille · side story « La femme vendue » (owes its question to Hardy's The Mayor of Casterbridge: does
// twenty years of atonement buy back one night of drunkenness, and who has the right to reopen the account?). Act III,
// Victorine at Lannoz: a consumptive woman comes to the infirmary with her grown daughter. Twenty years ago, at the
// Michaelmas fair, a drunken peat-cutter sold her and their baby for five crowns to a passing sailor; he swore off drink
// the next morning and is now the master of the peat-cutters, the most respected man of the moor. The sailor is dead.
// She has a few months. She wants to know whether to tell him. Victorine examines her, goes to see the man, and decides:
// she tells him herself (tn:mari), tells the daughter who her father is (tn:fille), or keeps the mother's silence
// (tn:silence). Wired in A3x_lannoz.
module.exports = {
  passages: {
    TN_toux: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "village",
      fx: { meet: "bleuenn" },
      text: [
        "Elles montent à bord par la coupée, le premier soir, toutes les deux, la mère appuyée sur la fille. La mère a quarante ans, et on lui en donnerait soixante : grande, osseuse, vêtue d'un deuil passé au vert, avec des pommettes trop rouges sur un visage trop blanc, et cette toux sèche, courte, polie, qui s'excuse d'exister, que Victorine reconnaît de l'autre bout du pont, avant même de voir la femme. La fille a vingt ans, des joues de pomme, des bras de lavandière, et ce regard inquiet des enfants qui ont appris tôt à surveiller le souffle d'un parent.",
        "Elles ont entendu dire qu'il y avait une médecin à bord du navire qui a mouillé dans l'anse. Elles ont marché depuis le hameau de Penfoul, de l'autre côté de la lande. Elles ont de quoi payer. La mère pose sur la table de l'infirmerie une pièce d'argent, une seule, à l'effigie d'un roi mort.",
        "« Je m'appelle Bleuenn Le Hénaff, dit-elle. Veuve Le Hénaff. Ma fille s'appelle Gwenaëlle. Je voudrais savoir combien de temps il me reste. Je voudrais le savoir exactement. J'ai quelque chose à décider. »"
      ],
      choices: [
        { label: "Faire sortir la fille et examiner la mère", to: "TN_examen" }
      ] },
    TN_examen: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "village",
      text: [
        "Victorine envoie Gwenaëlle sur le pont, prendre l'air, et la fille obéit en regardant sa mère par-dessus son épaule, jusqu'à la porte.",
        "L'examen est court ; il suffit. L'oreille contre le dos maigre, Victorine entend ce qu'elle savait déjà : à droite, en haut, ce petit bruit de papier froissé, de feuilles mortes sous un pas ; à gauche, plus bas, un silence qui ne devrait pas être là. Le mouchoir, que la femme cache mal, a des taches rouilles. Les ongles sont bombés comme des verres de montre.",
        "Victorine se redresse. Elle a appris, à Varnèse, à mentir aux malades avec beaucoup de délicatesse. Elle regarde la femme, qui la regarde, et qui a payé avec un roi mort pour savoir exactement. Elle dit : « Six mois. Peut-être huit, si l'été est sec. Peut-être quatre, s'il ne l'est pas. »",
        "Bleuenn hoche la tête. Elle se rhabille, lentement, avec des gestes très exacts, comme quelqu'un qui range une maison avant un départ. Puis elle s'assied, et elle dit : « Alors je vais vous raconter. Parce qu'il faut que je le dise à quelqu'un qui part, et vous partez. »"
      ],
      choices: [
        { label: "L'écouter", to: "TN_recit" }
      ] },
    TN_recit: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "village",
      text: [
        "« Il y a vingt ans, à la foire de la Saint-Michel, ici, à Lannoz, sous la grande tente où l'on vendait le cidre et la soupe, mon mari a bu. Il buvait souvent, à l'époque, et il avait le vin mauvais : méchant de la langue, doux des poings. Il était tourbier. Il avait vingt-deux ans. Moi, dix-neuf, et la petite au sein.",
        "« Ce soir-là, il a dit, très fort, sous la tente, qu'une femme et un enfant, c'était une charge, et que si quelqu'un voulait la sienne, il la vendait. On a ri. Il a répété. On a ri moins. Il a dit un prix. Il y avait là un marin de passage, un homme doux, qui ne riait pas. Il a posé cinq écus sur la table. Mon mari les a pris. J'ai jeté mon alliance dans la soupe, et je suis partie avec le marin, la petite dans mon châle, sous les yeux de toute la foire. On voulait le punir, voyez-vous. On a réussi.",
        "« Le marin s'appelait Le Hénaff. Il m'a épousée à Morlenc, quand on m'a crue veuve, à force de le dire. Il a été bon. Il a élevé la petite comme la sienne. Il est mort l'hiver dernier, en mer. Gwenaëlle ne sait rien. Elle croit qu'elle est la fille d'un marin noyé. Elle a raison à moitié.",
        "« Et mon premier mari, il est toujours là. Ici. Il s'appelle Ambroise Bothorel. Il a juré, le lendemain de la foire, devant l'autel de la chapelle, qu'il ne boirait plus une goutte pendant vingt et un ans, un an pour chacune de ses années. Il a tenu. Aujourd'hui, c'est le maître des tourbiers. On vient de trois paroisses pour lui faire trancher les querelles. On dit qu'il est l'homme le plus juste de la lande. »",
        "Elle tousse. Elle s'essuie la bouche. « Je suis revenue à Lannoz pour mourir, parce que c'est chez moi. Et je ne sais pas s'il faut le lui dire. Ni à elle. Voilà ce que j'ai à décider, en six mois. »"
      ],
      choices: [
        { label: "Aller voir cet Ambroise Bothorel, le lendemain", to: "TN_tourbier" }
      ] },
    TN_tourbier: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "nature",
      fx: { meet: "bothorel" },
      text: [
        "Victorine le trouve à l'est de la lande, au bord d'une tourbière, au milieu de ses hommes, à trancher des briques de tourbe noire avec une bêche à deux tranchants, au même rythme qu'eux, sans rien qui le distingue que le silence qui se fait quand il parle.",
        "Un homme de quarante-deux ans, massif, voûté, grisonnant, avec des mains énormes et des yeux d'une douceur gênante, des yeux de vache qui aurait réfléchi. Il la reçoit avec une politesse grave. Il lui offre de l'eau, puisqu'il ne boit que ça. Il lui montre, sur le mur de sa cabane de tourbier, une planche où il a gravé au couteau des encoches, par rangées de douze. Il en manque une poignée pour arriver à vingt et un ans.",
        "« À la Saint-Michel prochaine, dit-il, j'aurai fini. Je ne sais pas encore si je boirai. Je crois que non. Je crois que j'ai perdu le goût. Mais je voudrais avoir le choix. »",
        "Elle lui demande, au hasard, pourquoi il a juré. Il la regarde longtemps de ses yeux doux. « Parce que j'ai fait une chose, dit-il, une nuit, qu'on ne répare pas. Alors je fais tous les jours une chose qui ne la répare pas non plus, mais qui me rappelle qu'elle est là. » Il reprend sa bêche. « On dit que je suis juste. Je suis surtout très occupé. »",
        "En partant, elle passe devant la chapelle. Au fond, près de l'autel, il y a un tronc pour les pauvres, et à côté, sur une étagère, un bol de terre où quelqu'un a posé, il y a longtemps, une alliance de cuivre noircie et cinq écus d'argent. Le sacristain dit qu'on a retrouvé l'alliance dans une marmite de soupe, à une foire, il y a vingt ans, et que le maître des tourbiers a demandé qu'on la garde là, avec les écus, que personne n'a le droit de prendre pour les pauvres. Il vient les regarder tous les dimanches."
      ],
      choices: [
        { label: "Retrouver Bleuenn, le soir, au hameau de Penfoul", to: "TN_penfoul" }
      ] },
    TN_penfoul: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "nuit",
      text: [
        "Le hameau de Penfoul, c'est trois maisons de pierre sèche au fond d'un repli de la lande, où l'on entend la mer sans la voir. Gwenaëlle fait la soupe. Sa mère est couchée dans le lit clos, la porte de bois ouverte, et tousse doucement, comme on frappe à une porte sans vouloir réveiller.",
        "Victorine s'assied au bord du lit. Elle raconte la tourbière, la planche aux encoches, l'alliance dans le bol de terre. Bleuenn écoute les yeux fermés. Elle sourit, à l'alliance. Puis elle cesse de sourire.",
        "« Si je le lui dis, dit-elle, il viendra. Il voudra m'épouser une deuxième fois, pour réparer. Il me soignera six mois, avec ses grandes mains. Et puis je mourrai, et il aura perdu sa femme deux fois, et la deuxième fois par ma faute. Si je le dis à la petite, elle aura un père qu'elle n'a pas choisi, et qui l'a vendue cinq écus. Si je ne dis rien, je meurs tranquille, et lui finit ses encoches, et elle reste la fille d'un marin noyé qui l'a aimée. »",
        "Elle ouvre les yeux. « Vous partez demain. Vous êtes la seule personne au monde à qui je peux demander ce qu'il faut faire sans que ça change rien après. Alors dites-moi. »",
        "Derrière, à la cheminée, Gwenaëlle a cessé de tourner la soupe. Elle a entendu, peut-être, juste assez pour se taire."
      ],
      choices: [
        { label: "Aller elle-même, cette nuit, frapper à la cabane du tourbier", fx: { flag: "tn:mari" }, to: "TN_mari" },
        { label: "Se tourner vers la cheminée, et parler à Gwenaëlle", fx: { flag: "tn:fille" }, to: "TN_fille" },
        { label: "Dire à Bleuenn que ce secret est le sien, et qu'elle a le droit de l'emporter", fx: { flag: "tn:silence" }, to: "TN_silence" }
      ] },
    TN_mari: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "nuit",
      text: [
        "Elle traverse la lande dans le noir, avec une lanterne et un garçon du hameau pour guide, entre les tourbières qui luisent comme des yeux crevés. La cabane du tourbier est éclairée. Il lit, à la chandelle, un almanach.",
        "Elle lui dit tout. Elle le dit vite, en médecin, comme on annonce une amputation : le nom, la foire, le marin, la petite, la maladie, les six mois. Il l'écoute debout, sans s'asseoir, les bras le long du corps. Quand elle a fini, il reste debout encore une minute entière. Puis il prend sa veste.",
        "Il traverse la lande à grands pas, sans lanterne, et Victorine a du mal à suivre. À Penfoul, il entre sans frapper. Il s'arrête au pied du lit clos. Bleuenn le regarde. Ils se regardent, vingt ans, en silence, au-dessus de la tête de Gwenaëlle, qui ne comprend pas.",
        "Puis il s'agenouille au pied du lit, ce grand homme, et il pose son front sur le bois, et il dit une seule chose, d'une voix qui n'a pas servi depuis longtemps : « J'ai encore tes cinq écus. Je n'y ai jamais touché. »",
        "Victorine sort. Elle laisse les trois dans la maison. Elle rentre seule à bord, à travers la lande, en se demandant ce qu'elle vient de faire, et si l'on a le droit d'offrir six mois de bonheur à un homme en sachant qu'ils lui coûteront tout le reste."
      ],
      choices: [
        { label: "Rentrer à bord, à l'aube", fx: { quest: "TN" }, back: "A3x_lannoz" }
      ] },
    TN_fille: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine se lève. Elle va à la cheminée. Elle prend la cuillère des mains de Gwenaëlle, et la pose. Elle lui dit qu'elle a tout entendu, et que c'est bien, et qu'elle a vingt ans, et qu'à vingt ans on a le droit de savoir de quoi est fait son propre nom.",
        "Derrière elle, Bleuenn proteste, faiblement, puis se tait.",
        "Gwenaëlle écoute l'histoire de la foire debout, les poings serrés sur son tablier. Elle ne pleure pas. Elle a des joues de pomme qui deviennent blanches, et c'est tout. Quand c'est fini, elle va s'asseoir au bord du lit, prend la main de sa mère, et lui dit, d'une voix très calme : « Tu aurais dû me le dire. Je l'aurais choisi, moi, s'il fallait le choisir. Et puis je l'aurais détesté. Et puis je l'aurais choisi. Tu m'as volé ça. »",
        "Le lendemain matin, avant l'appareillage, Victorine voit passer sur la lande, au loin, une silhouette de jeune femme qui marche vers l'est, vers les tourbières, d'un pas décidé, avec un panier au bras. Ce qu'il y avait dans le panier, et ce qui s'est dit au bord de la tourbière, elle l'ignore."
      ],
      choices: [
        { label: "Rentrer à bord, à l'aube", fx: { quest: "TN" }, back: "A3x_lannoz" }
      ] },
    TN_silence: { act: "III", title: "La femme vendue", place: "lannoz", ambiance: "nuit",
      text: [
        "Victorine dit à Bleuenn qu'un secret qu'on a porté vingt ans est un bien comme un autre, et qu'on a le droit de le léguer à qui l'on veut, y compris à la terre. Elle dit que ni Ambroise Bothorel ni Gwenaëlle n'ont besoin d'elle pour être ce qu'ils sont. Elle dit qu'un médecin qui part demain n'a aucun titre à décider d'une famille, et que c'est précisément pour cela qu'elle refuse.",
        "Bleuenn la regarde longtemps. Puis elle sourit, et ce sourire est le premier où il n'y ait pas de toux.",
        "« Alors je vais lui faire porter quelque chose, dit-elle. Pas un mot. Une chose. » Elle se soulève sur un coude, ouvre un coffret au chevet du lit, en tire un petit ruban bleu passé, effiloché, et le met dans la main de Victorine. « Le ruban de son bonnet. Elle le portait sous la tente, ce soir-là. Son père le lui avait noué lui-même, le matin, pour la foire. Mettez-le dans le bol de la chapelle, en passant. Il verra bien. Ou il ne verra pas. »",
        "Victorine passe à la chapelle avant de rentrer à bord. Elle pose le ruban dans le bol de terre, sur les cinq écus, à côté de l'alliance de cuivre noircie. Elle ne laisse aucun mot. Il y a maintenant, dans le bol, une alliance, cinq écus et un ruban bleu, et un homme qui, dimanche, en les regardant, comprendra, ou croira à un miracle, ce qui, pour un homme qui ne boit pas depuis vingt ans, revient à peu près au même."
      ],
      choices: [
        { label: "Rentrer à bord, à l'aube", fx: { quest: "TN" }, back: "A3x_lannoz" }
      ] }
  },
  extras: {
    people: {
      bleuenn: { name: "Bleuenn Le Hénaff", aka: ["la veuve de Penfoul"], f: true, qui: "Veuve d'un marin, poitrinaire, revenue mourir au hameau de Penfoul avec sa fille Gwenaëlle, vingt ans après une foire." },
      bothorel: { name: "Ambroise Bothorel", aka: ["le maître des tourbiers"], qui: "Maître des tourbiers de Lannoz, l'homme le plus juste de la lande, qui ne boit que de l'eau depuis vingt ans." }
    },
    quests: [
      { id: "TN", act: "III", kind: "annexe", title: "La femme vendue", start: "TN_toux", doit: "mairecasterbridge", echo: ["tn:mari", "tn:fille", "tn:silence"] }
    ]
  }
};
