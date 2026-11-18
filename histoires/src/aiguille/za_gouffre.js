// L'Île Folle-Aiguille · side story « Le gouffre de l'Écueil » (owes its question to Journey to the Centre of the Earth:
// how far down does a man's curiosity go before it stops being courage?). On the red reef, at the foot of the lava
// cliff, a mouth breathes warm air and the sound of the sea underneath. Professor Gaudrémont swears it goes down to
// the heart of the world, and goes down on a rope with the child. At the bottom, a hall of black glass and a lake that
// breathes with the tide. The child pulls him back up before the tide (za:remonte), lets him go further alone down a
// second shaft (za:seul), or cuts a piece of the glass for him and leaves (za:verre). Wired in A3n_ecueil.
module.exports = {
  passages: {
    ZA_bouche: { act: "III", title: "Le gouffre de l'Écueil", place: "ecueil_rouge", ambiance: "nature",
      text: [
        "C'est le professeur Gaudrémont qui la trouve, évidemment, parce qu'il cherche toujours ce qu'on ne lui a pas demandé de chercher. Elle est au pied de la falaise de lave, du côté du large, derrière un éboulis : une bouche dans la roche rouge, ronde, lisse, comme le trou qu'aurait fait un doigt énorme dans une pâte encore molle. Il en sort un souffle tiède, régulier, qui sent le soufre et le varech, et, si l'on tend l'oreille, très loin en dessous, un bruit de mer.",
        "« Un tube de lave ! tonne le professeur, à genoux devant l'ouverture, la barbe dans le souffle. Un conduit par où le feu de la terre est monté jusqu'au jour ! Et ce qui est monté, mon jeune ami, on peut le descendre ! » Il se relève, rouge de bonheur. « Ces messieurs de l'Académie m'ont dit, en séance, qu'on ne connaîtrait jamais l'intérieur du globe. Je compte leur en rapporter un morceau, avec ma carte de visite dessus. »",
        "Il a déjà une corde, la longue corde de chanvre qu'il traîne partout dans un sac, avec ses marteaux et ses bocaux. Il a une lanterne. Il lui manque quelqu'un pour tenir la corde en haut, et quelqu'un pour descendre avec lui, et il te regarde, toi, qui es les deux à la fois, avec l'innocence redoutable d'un homme de soixante ans qui n'a jamais eu peur de rien que de l'ennui.",
        "« Le second vous chercherait, si vous descendiez, dit-il. Moi, personne ne me cherchera. C'est l'avantage d'être insupportable. Venez-vous ? »",
      ],
      choices: [{ label: "Amarrer la corde à un bloc de lave, et descendre avec lui", to: "ZA_descente" }] },
    ZA_descente: { act: "III", title: "Le gouffre de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Le tube descend d'abord en pente douce, assez haut pour qu'on y marche courbé. Les parois sont lisses comme l'intérieur d'une bouteille, d'un rouge sombre qui devient noir à mesure qu'on s'enfonce, et la lanterne y allume des reflets mouillés, comme si la roche transpirait. Il fait chaud. Puis très chaud. Le souffle qui monte vous passe sur la figure à intervalles réguliers, et tu comprends au bout d'un moment pourquoi il est régulier : c'est la mer, en dessous, qui entre et sort, et qui pousse l'air devant elle. La montagne respire avec la marée.",
        "Le professeur parle tout le temps. Il nomme les roches. Il nomme les cristaux. Il nomme un petit crabe blanc, sans yeux, qui détale devant la lanterne, et lui donne son propre nom, en latin, à voix haute, avec une grande satisfaction. Puis la pente devient un puits. Vous descendez à la corde, l'un après l'autre, dans un noir où la lanterne n'éclaire que vos mains.",
        "En bas, la salle.",
        "Elle est immense. La lanterne n'en trouve pas les murs. Le sol est de verre noir, lisse, ondulé, comme une mer figée au milieu d'une tempête, et le plafond, quand le professeur lève la lanterne à bout de bras, est hérissé de longues aiguilles de verre qui pendent, fines, transparentes, par milliers, et qui tintent doucement au passage du souffle, comme un lustre dans une maison vide. Au fond, un lac. Noir, immobile, et qui, de temps en temps, sans bruit, monte d'un pouce sur ses rives de verre, et redescend.",
        "Le professeur Gaudrémont est debout au milieu de la salle, la lanterne levée, et il pleure. Il ne s'en aperçoit pas. « Personne, dit-il. Personne avant nous. Depuis que le monde est monde. »",
      ],
      choices: [{ label: "Le suivre au bord du lac", to: "ZA_lac" }] },
    ZA_lac: { act: "III", title: "Le gouffre de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Au bord du lac, la roche de verre plonge dans l'eau noire en pente douce. Et sur la droite, il y a un second puits, plus étroit, plus noir, d'où monte une chaleur de four et une odeur de soufre à vous tourner la tête. Le professeur s'y penche. Il laisse tomber un caillou. Vous comptez. Vous n'entendez rien.",
        "« Il continue, dit-il d'une voix changée, très basse, presque tendre. Il continue, mon ami. » Il commence à défaire la corde de sa taille, pour la passer autour d'un bec de verre, au bord du second puits. Ses mains tremblent d'impatience. « Une heure. Une heure seulement. Vous m'attendrez ici. »",
        "Au même instant, le lac monte. Pas d'un pouce : d'un pied, d'un coup, avec un grand soupir, et l'eau tiède te lèche les chevilles. Le souffle qui passe dans la salle devient un vent, et les milliers d'aiguilles de verre, au plafond, se mettent à sonner toutes ensemble, en un carillon aigu, affolé. La marée monte, là-haut. Le tube par où vous êtes descendus va se remplir, ou au moins le bas du puits. Tu ne sais pas combien de temps il vous reste. Tu sais qu'il en reste moins qu'une heure.",
        "Le professeur n'entend pas le carillon. Il regarde le second puits.",
      ],
      choices: [
        { label: "Le prendre par la manche, et le tirer vers la corde de remontée", fx: { flag: "za:remonte" }, to: "ZA_remonte" },
        { label: "Lui laisser la corde, et remonter seul{e} chercher du secours", fx: { flag: "za:seul" }, to: "ZA_seul" },
        { label: "Casser pour lui une aiguille de verre du plafond, la plus belle, et la lui mettre dans la main", fx: { flag: "za:verre" }, to: "ZA_verre" },
      ] },
    ZA_remonte: { act: "III", title: "Le gouffre de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Tu le prends par la manche. Il se dégage. Tu le reprends, des deux mains, et tu tires, et il se retourne vers toi avec une fureur de vieux lion, et lève la main. Puis il voit l'eau à vos genoux. Il l'entend, enfin, le carillon. Sa main retombe.",
        "La remontée est un cauchemar de corde mouillée et de lanterne éteinte. Le bas du puits est déjà noyé quand vous l'atteignez ; il faut nager deux brasses dans le noir, la corde entre les dents, avant de trouver les premières prises. En haut du tube, la lumière du jour vous éblouit comme un coup de poing. Vous vous couchez sur la lave chaude, tous les deux, en crachant de l'eau de mer, et le professeur reste longtemps en silence, les yeux au ciel.",
        "« Vous m'avez volé le centre de la Terre, dit-il enfin. » Il tourne la tête vers toi. « Et la vie, accessoirement. Je ne sais pas encore lequel des deux je vous pardonnerai le moins. » Puis il rit, de son grand rire de tonnerre, et te broie la main dans la sienne.",
      ],
      choices: [{ label: "Regagner la chaloupe", fx: { quest: "ZA" }, back: "A3n_ecueil" }] },
    ZA_seul: { act: "III", title: "Le gouffre de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Tu lui laisses la corde. Il ne te regarde même pas partir ; il descend déjà, dans le second puits, la lanterne à la ceinture, en chantant un air d'opéra. Tu remontes dans le noir, à tâtons, le long des parois de verre, avec l'eau qui te poursuit, et tu nages les deux brasses noyées du bas du puits sans savoir si tu en verras le bout.",
        "Tu cours à la chaloupe. Le second Quémeneur, quatre hommes, des cordes, des lanternes. Il faut attendre la marée basse ; il faut six heures. Pendant six heures, tu es assis{e} devant la bouche du tube, à écouter le souffle de la montagne, et à te demander ce que tu as fait.",
        "À la marée basse, le professeur Gaudrémont sort tout seul du tube, avant qu'on ait fini de dérouler les cordes. Il est trempé, noir de suie, une manche arrachée, sans lanterne, sans corde, sans chapeau, et il porte dans ses bras, comme un nouveau-né, une pierre rouge, veinée de vert, qu'il a ramassée tout au fond. « Il continue ! crie-t-il à Benoît Quémeneur, qui recule. Il continue, monsieur ! J'ai entendu le feu ! » Il te voit, s'arrête, et te pose la main sur la tête. « Vous avez bien fait. Moi aussi. C'est rare, d'avoir raison à deux. »",
      ],
      choices: [{ label: "Regagner la chaloupe", fx: { quest: "ZA" }, back: "A3n_ecueil" }] },
    ZA_verre: { act: "III", title: "Le gouffre de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Tu grimpes sur un bloc de verre, tu tends le bras, et tu casses, au plafond, une aiguille longue comme un avant-bras, transparente, avec une bulle d'air prise dedans comme un insecte dans l'ambre. Elle tinte en se cassant. Tu la portes au professeur, au bord du second puits. Tu la lui mets dans la main.",
        "Il la regarde. Il la tourne vers la lanterne. La lumière passe à travers, et allume dans la bulle d'air un petit soleil. Il oublie le puits. Il oublie le centre de la Terre. Il regarde l'aiguille de verre, et il dit, très doucement : « Ça s'est formé goutte à goutte, pendant dix mille ans, dans le noir, pour que personne ne le voie. Et vous me l'avez cassé. » Il lève les yeux. « Merci. »",
        "Il te suit vers la corde sans résister, l'aiguille de verre serrée contre sa poitrine, à deux mains, comme on porte un cierge dans une procession. Vous remontez de justesse, en nageant les dernières brasses du bas du puits, la lanterne éteinte. En haut, sur la lave chaude, il n'a pas lâché l'aiguille. Elle est intacte. Il l'emballe dans sa chemise, et il ne la montrera à personne, à bord, pas même à toi.",
      ],
      choices: [{ label: "Regagner la chaloupe", fx: { quest: "ZA" }, back: "A3n_ecueil" }] },
  },
  extras: {
    quests: [
      { id: "ZA", act: "III", kind: "annexe", title: "Le gouffre de l'Écueil", start: "ZA_bouche", doit: "centreterre", echo: ["za:remonte", "za:seul", "za:verre"] },
    ],
  },
};
