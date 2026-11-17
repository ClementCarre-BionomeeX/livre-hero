// L'Île Folle-Aiguille · act IV, chapter IV.2 followed by the cook (second reading): a letter to Lisette, written by
// the beach fire on the back of a page of the log of provisions, which no ship will carry. He writes the island as it
// is (fargue:lettre_verite) or the island she asked for, the sun in a jar (fargue:lettre_soleil). Wired in A4f_jours.
module.exports = {
  passages: {
    YK_lettre: { act: "IV", title: "Lettre à Lisette", place: "plage", ambiance: "nuit", second: true,
      text: [
        "La nuit, quand les hommes dorment, ivres ou las, Fargue s'assied au bord du feu avec le cahier des vivres de la Cormorane, qu'il a pris dans la cambuse le jour de la débâcle par une habitude de maître-coq, et il arrache une page, et il écrit au dos, sur ses genoux, avec un crayon de charpentier.",
        "*Ma Lisette.*",
        "Il s'arrête là un long moment. Le feu craque. Au-dessus de lui, les étoiles du sud, énormes, trop nombreuses, trop proches, qu'il n'a pas revues depuis vingt et un ans et qui n'ont pas changé, ce qui lui paraît d'une insolence rare. Dans la forêt, derrière, une bête crie, une seule fois, d'une voix presque humaine, et se tait. La mer, devant, respire sur le sable avec un bruit de dormeur.",
        "Aucun navire ne portera cette lettre. Il le sait. Il écrit quand même. C'est la seule chose, sur cette île, qu'il fasse pour quelqu'un.",
      ],
      choices: [
        { label: "Lui écrire l'île comme elle est", to: "YK_verite" },
        { label: "Lui écrire l'île qu'elle a demandée", to: "YK_soleil" },
      ] },
    YK_verite: { act: "IV", title: "Lettre à Lisette", place: "plage", ambiance: "nuit", second: true,
      text: [
        "*Ma Lisette. Je suis sur une île où j'ai fait une chose très laide, il y a longtemps, avant toi. Je suis revenu pour l'argent de cette chose-là. Il y a eu un mort, avant-hier, sur la plage, et ce n'est pas le dernier. Les hommes avec qui je suis ne sont pas des hommes que je voudrais te présenter. Je suis leur chef. Je fais de mon mieux pour qu'ils tuent le moins possible. Ce n'est pas beaucoup, comme mieux.*",
        "*Il fait chaud. Les étoiles sont trop grosses. La soupe est bonne : je la fais.*",
        "*Si je ne rentre pas, Sœur Marthe a l'adresse d'un notaire. Si je rentre, je te raconterai tout, et tu choisiras si tu veux encore m'embrasser la main. Ton père, qui t'aime, ce qui ne l'excuse de rien.*",
        "Il relit. Il plie la page en quatre, et la met dans sa chemise, contre sa peau, là où il garde les choses qu'on ne prête pas. Il ne l'enverra jamais. Il l'a écrite. C'est déjà beaucoup plus qu'il n'a jamais dit à personne.",
      ],
      choices: [{ label: "Remettre du bois sur le feu", fx: { flag: "fargue:lettre_verite" }, back: "A4f_jours" }] },
    YK_soleil: { act: "IV", title: "Lettre à Lisette", place: "plage", ambiance: "nuit", second: true,
      text: [
        "*Ma Lisette. Je suis sur l'île du soleil. Il y en a tellement qu'on le ramasse à la pelle, le matin, sur la plage, comme du varech, et qu'on en remplit des bocaux. J'en ai rempli trois pour toi ; je les garde à l'ombre, pour qu'ils ne fondent pas.*",
        "*Il y a des perroquets qui parlent mieux que l'abbé, des oranges grosses comme ta tête, et une source qui guérit la toux, à ce qu'on dit. J'en rapporterai une barrique. Les hommes sont gentils. Ils chantent le soir. Je leur fais la soupe, et ils disent que c'est la meilleure des sept mers.*",
        "*Je rentre au printemps. Garde-moi une place à la fenêtre aux géraniums. Ton père.*",
        "Il relit. Chaque mot est un mensonge, sauf la soupe. Il trouve que c'est la plus belle lettre qu'il ait jamais écrite. Il la plie, la met dans sa chemise, contre sa peau. Il ne l'enverra jamais. Il la relira souvent, les jours suivants, pour y croire un peu.",
      ],
      choices: [{ label: "Remettre du bois sur le feu", fx: { flag: "fargue:lettre_soleil" }, back: "A4f_jours" }] },
  },
  extras: {},
};
