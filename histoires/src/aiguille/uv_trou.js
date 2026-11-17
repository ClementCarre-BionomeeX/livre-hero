// L'Île Folle-Aiguille · side story « Le garçon du trou » (owes its question to Tolstoy's The Prisoner of the Caucasus:
// can a friendship grow across a war, and who has the right to free the prisoner it is born around?). Act IV, Victorine
// with the outlaws: the hunters have caught a young mutineer, Rolland, eighteen, who strayed into the Sylve after a
// goat. They keep him at the bottom of an old dry cistern behind the cascade, as a hostage against Malandain. Victorine
// comes to dress his ankle, and finds that Soazig, twelve, drops him figs every evening and asks him how houses are made.
// Rolland has begun to carve her a little house out of soft wood. Victorine helps him get away by night (uv:evade),
// tells Jeanne Brasdefer about the girl (uv:jeanne), or asks for him to be brought up and set to work in the camp
// under her word (uv:parole). Wired in XS_camp.
module.exports = {
  passages: {
    UV_citerne: { act: "IV", title: "Le garçon du trou", place: "sylve", ambiance: "nature",
      fx: { meet: "rolland" },
      text: [
        "Les chasseurs l'ont pris il y a trois jours, à une lieue de la grotte, en train de courir après une chèvre qu'il n'aurait jamais rattrapée. Un garçon des mutins, un de ceux de la plage. Ils l'ont ramené les mains liées, le pied tordu, et ils l'ont descendu, avec une corde, au fond d'une vieille citerne sèche, derrière la cascade, une gorge de pierre lisse de trois toises de profondeur, d'où l'on ne sort pas sans aide. Jeanne Brasdefer dit qu'on le garde. Elle dit que Malandain tient à ses hommes, et qu'un otage vaut bien qu'on laisse en paix les collets des chasseurs.",
        "On demande à Victorine de descendre lui voir la cheville, parce qu'il crie, la nuit, et que ça empêche les enfants de dormir. On la descend à la corde, avec sa trousse. Le fond de la citerne est sec, couvert de feuilles mortes et de coquilles de figues. Le garçon est assis contre la paroi, les genoux sous le menton. Il a dix-huit ans, peut-être moins, des cheveux paille, un visage d'enfant qui a grandi trop vite sous une barbe qui ne pousse pas. Il s'appelle Rolland. Il était novice sur la Cormorane. Il dit qu'il ne sait plus très bien pourquoi il est du côté de Malandain. Il dit que c'est le côté où il s'est trouvé.",
        "La cheville est foulée, pas cassée. Victorine la bande. Pendant qu'elle travaille, elle remarque, dans un coin du trou, sur une pierre plate, une petite chose de bois clair. Une maison. Une maison grande comme une main, taillée au couteau dans une branche tendre, avec un toit pointu, une porte, deux fenêtres, une cheminée. Tout autour, les copeaux. Rolland voit qu'elle regarde. Il rougit jusqu'aux oreilles.",
      ],
      choices: [{ label: "Lui demander pour qui est la maison", to: "UV_figues" }] },
    UV_figues: { act: "IV", title: "Le garçon du trou", place: "sylve", ambiance: "nature",
      text: [
        "C'est pour la petite, dit-il. La petite brune aux yeux gris, qui vient le soir, au bord du trou, quand les autres dorment. Elle lui jette des figues, une par une, en visant la tête, et quand il en attrape une, elle rit. Puis elle s'assied au bord, les jambes pendantes au-dessus du vide, et elle pose des questions. Comment on fait un toit. Pourquoi il ne tombe pas. Ce que ça fait, la pluie, dessus. Si on entend les voisins. Si on les connaît.",
        "« Je suis fils de couvreur, dit Rolland. À Morlenc, rue des Ardoisiers. J'ai passé mon enfance sur les toits. Alors je lui explique. Les chevrons, les lattes, les ardoises qu'on cloue en écailles, le faîtage. Elle ne comprend pas tout. Elle veut voir. Alors je lui fais une maison. » Il prend la petite chose de bois dans sa paume, avec délicatesse. « Il me manque les ardoises. Je n'ai que mon couteau, et ils me l'ont pris. J'ai fait le reste avec une pierre coupante. »",
        "Le soir, Victorine attend, cachée derrière les fougères, près du bord de la citerne. Soazig arrive, pieds nus, un pan de sa jupe relevé, plein de figues. Elle s'assied. Elle jette une figue. Une voix monte du trou, qui dit merci et demande si elle sait ce que c'est qu'une gouttière. Soazig dit que non. La voix explique. Soazig écoute, le menton dans les mains, avec un visage que Victorine ne lui a jamais vu : celui d'une enfant qu'on emmène ailleurs.",
        "Victorine sait ce que diraient les autres. Que c'est un mutin, un homme de Malandain, qu'il tirera peut-être demain sur la chapelle, qu'un otage n'est pas un ami, qu'une fille de douze ans au bord d'un trou de trois toises, la nuit, c'est une chute qui attend. Elle sait aussi ce qu'elle a vu : une enfant née dans une grotte qui apprend ce qu'est une maison, de la bouche d'un garçon enfermé dans un puits. Elle reste là longtemps, dans les fougères, à réfléchir.",
      ],
      choices: [
        { label: "Revenir la nuit, avec une corde, et le laisser partir", fx: { flag: "uv:evade" }, to: "UV_evade" },
        { label: "Aller dire à Jeanne Brasdefer où va Soazig le soir", fx: { flag: "uv:jeanne" }, to: "UV_jeanne" },
        { label: "Demander qu'on le remonte, et qu'il travaille au camp sur sa parole", fx: { flag: "uv:parole" }, to: "UV_parole" },
      ] },
    UV_evade: { act: "IV", title: "Le garçon du trou", place: "sylve", ambiance: "nuit",
      text: [
        "Elle revient à la deuxième heure de la nuit, avec la corde des chasseurs, prise à son clou près de l'entrée de la grotte. Elle l'attache à un tronc. Elle la laisse filer. Il y a un long silence au fond du trou, puis un frottement, un souffle, et Rolland apparaît au bord, les mains écorchées, la cheville bandée, haletant. Il la regarde. Il ne demande pas pourquoi. Il demande seulement s'il peut dire au revoir à la petite.",
        "Victorine dit non. Elle dit que, s'il la réveille, elle voudra venir, ou elle criera, ou elle pleurera, et que les trois sont pires. Rolland baisse la tête. Il sort de sa chemise la petite maison de bois, finie, avec un toit d'écailles de pomme de pin collées à la résine, en guise d'ardoises. Il la pose sur la pierre plate, au bord du trou, là où Soazig s'assied. Puis il s'en va en boitant dans la forêt, vers la plage, sans se retourner.",
        "Le matin, le camp découvre le trou vide et la corde pendue. Jeanne Brasdefer regarde la corde, puis Victorine, longtemps. Elle ne dit rien. Elle remet la corde à son clou elle-même. Les chasseurs grondent. Elle les fait taire d'un mot. Elle dit qu'un otage qu'on ne sait pas garder ne vaut rien, et qu'un garçon qui fait des maisons pour les enfants ne vaut rien non plus comme otage.",
        "Soazig trouve la maison sur la pierre plate. Elle ne pleure pas. Elle la prend, et la tourne, et regarde par les fenêtres, et compte les écailles du toit. Elle demande à Victorine si les vraies maisons ont des toits en écailles. Victorine dit que certaines. Soazig dit qu'elle en aura une, plus tard, ailleurs, et qu'elle saura comment elle tient. Elle garde la maison sous sa paillasse. Victorine se demande si elle a rendu un garçon à la guerre, ou une enfant à son rêve. Elle pense avoir fait les deux.",
      ],
      choices: [{ label: "Retourner au feu de la grotte", fx: { quest: "UV" }, back: "XS_camp" }] },
    UV_jeanne: { act: "IV", title: "Le garçon du trou", place: "sylve", ambiance: "nature",
      text: [
        "Victorine va trouver Jeanne Brasdefer au bord de l'eau, et lui dit tout. Le trou, les figues, les questions, la maison de bois. Jeanne écoute en plumant une poule d'eau. Elle ne s'étonne de rien. Elle dit qu'elle sait que la petite sort la nuit. Elle dit qu'elle ne savait pas où. Elle dit qu'elle la remercie. Puis elle se tait longtemps, et la poule d'eau, entre ses mains, perd ses plumes une à une.",
        "Le soir même, Jeanne fait interdire le bord de la citerne aux enfants. Elle y met un chasseur de garde. Soazig pleure, crie, griffe, et se fait enfermer dans le fond de la grotte, derrière le rideau d'eau. Au fond du trou, Rolland appelle, la nuit, un nom qu'on ne lui a jamais dit. Puis il cesse d'appeler.",
        "Le surlendemain, Jeanne échange le garçon, à la lisière de la Sylve, contre un sac de sel et la promesse qu'on laissera en paix les collets des chasseurs. Un homme de Malandain crache par terre pour sceller l'affaire. Victorine assiste à l'échange. Rolland passe devant elle en boitant, les mains liées, et la regarde, sans haine, avec une fatigue de vieil homme. Il a les mains vides. On a confisqué la maison de bois.",
        "Jeanne la remet à Victorine, le soir, sans un mot. Une petite maison grande comme une main, au toit inachevé. Victorine la garde dans sa trousse. Elle n'ose pas la donner à Soazig, qui ne lui parle plus. Elle se dit qu'elle a protégé une enfant d'une chute, d'un mutin, d'un chagrin plus grand plus tard. Elle se dit que c'est ce qu'une adulte doit faire. Elle se dit que Soazig, à douze ans, avait trouvé la seule fenêtre de la grotte, et qu'elle l'a fait murer.",
      ],
      choices: [{ label: "Retourner au feu de la grotte", fx: { quest: "UV" }, back: "XS_camp" }] },
    UV_parole: { act: "IV", title: "Le garçon du trou", place: "sylve", ambiance: "nature",
      text: [
        "Victorine va trouver Jeanne Brasdefer, et lui demande qu'on remonte le garçon. Elle dit qu'un otage au fond d'un trou ne vaut que sa peur, et qu'un otage au soleil vaut ses bras. Elle dit que sa cheville guérira mieux à la lumière. Elle dit qu'il est fils de couvreur, et que le toit de la grotte, du côté de la cascade, fuit depuis dix ans. Elle offre sa parole de médecin qu'il ne s'enfuira pas. Jeanne la regarde. Elle demande sur quoi repose cette parole. Victorine dit : sur une maison de bois.",
        "On remonte Rolland. Il jure sur ce qu'il a, c'est-à-dire sur sa mère, rue des Ardoisiers, qu'il ne s'enfuira pas avant qu'on le rende. Jeanne lui fait attacher une cloche de chèvre à la cheville, par principe. Puis elle lui montre la fuite, au fond de la grotte, où l'eau de la cascade s'infiltre entre deux rochers et pourrit les paillasses. Rolland regarde, tâte la roche, et demande des branches, de l'argile, et des écorces plates.",
        "Pendant deux jours, la cloche de chèvre tinte au-dessus de la grotte. Rolland travaille du lever au coucher. Soazig est toujours avec lui, autorisée, cette fois, en plein jour, à lui tendre les écorces une par une et à apprendre comment on les pose en écailles, chacune couvrant la moitié de la précédente, pour que l'eau glisse. Le troisième soir, il pleut. Il ne pleut plus dans le fond de la grotte. Les proscrits regardent le plafond avec une stupéfaction religieuse.",
        "Quand on l'échange, à la lisière, contre un sac de sel et la paix des collets, Rolland pleure en partant, ce qui surprend tout le monde, et lui le premier. Soazig lui donne une figue. Il la met dans sa poche. Il laisse derrière lui la petite maison de bois, finie, au toit d'écorce en écailles, et un toit véritable au-dessus de neuf personnes. Victorine se dit qu'elle a engagé sa parole sur un garçon des mutins, et qu'il l'a tenue mieux que bien des hommes de la chapelle. Elle se dit qu'on choisit son camp bien moins qu'on ne le croit, et qu'on choisit ce qu'on y construit.",
      ],
      choices: [{ label: "Retourner au feu de la grotte", fx: { quest: "UV" }, back: "XS_camp" }] },
  },
  extras: {
    people: {
      rolland: { name: "Rolland", aka: ["le garçon du trou", "le novice des mutins"], qui: "Novice de la Cormorane passé chez les mutins, fils d'un couvreur de Morlenc, que les proscrits ont pris dans la Sylve." },
    },
    quests: [
      { id: "UV", act: "IV", kind: "annexe", title: "Le garçon du trou", start: "UV_citerne", doit: "prisonniercaucase", echo: ["uv:evade", "uv:jeanne", "uv:parole"] },
    ],
  },
};
