// « La Comtesse n'arrive jamais » · the five endings: stopped and silent, stopped and told, the last metre on foot,
// the arrival in the market, and the grappling hook.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
module.exports = {
  F_arret: fin("arret", "Un mètre", "descente", [
    "Tu tournes les quatre molettes au hasard, d'un geste du pouce, comme on mélange des cartes. Le capot ciselé se referme avec un déclic. La Comtesse a suivi ton geste des yeux. Elle ne dit rien. Elle remet son collier en place sur sa nuque, là où le fermoir était propre, et elle referme les yeux.",
    "Les valets arrivent, hors d'haleine, avec le tapis rouge et la théière. Ils déroulent le tapis devant la roue avant, ils se remettent en place, et ils poussent, dans l'autre sens, vers le haut, vers le Domaine, au pas. On met quatre heures à remonter la Grande Descente. La Comtesse ne dit pas un mot. Le chef des valets non plus : il fait ses comptes, en silence, de ce que coûtera au syndicat le thé de six heures.",
    "Le lendemain matin, un petit écrin de cuir rouge t'attend sur ton lit, au quartier des valets. Dedans, une perle, une seule, grosse comme une noisette, et une carte de la main de la Comtesse, d'une écriture penchée : *Pour ce qui ne se dit pas.*",
    "Tu deviens, ce jour-là, son éventailleur, puis son confident, puis la seule personne du Domaine qui connaisse l'âge exact de la Comtesse de Tartineuil. Tu ne le dis jamais. C'est, d'une certaine façon, le seul endroit où tu sois jamais arrivé{e}.",
  ]),
  F_age: fin("age", "Quatre-vingt-cinq ans", "descente", [
    "Les valets arrivent, hors d'haleine. Tu leur racontes : la pente, les manettes, le collier, la photographie, et les quatre molettes. Tu dis le nombre. Tu ne vois pas, en le disant, le visage de la Comtesse. Tu le vois après.",
    "Au Domaine, la nouvelle fait le tour des terrasses avant minuit. *La Comtesse de Tartineuil est née en 1941.* Personne n'en savait rien, et tout le monde le dit à tout le monde, avec la gourmandise particulière qu'on réserve aux secrets des autres. On fait le calcul. On la trouve vieille. On la trouve jeune. On la trouve, surtout, connue, ce qui est pire que tout.",
    "La Comtesse ne sort plus. Pendant un mois, la moto reste au garage, sous une housse de soie. Puis, un soir, elle ressort, poussée par douze valets, sur le tapis rouge, et elle descend la Grande Descente, au pas, jusqu'en bas, jusqu'au panneau de Mirevaux, et elle le dépasse.",
    "« Puisque tout le monde sait mon âge, dit-elle, je peux bien arriver quelque part. » Elle entre dans le marché, à quatre-vingt-cinq ans, pour la première fois de sa vie, les yeux grands ouverts. Tu pousses à l'arrière. Elle ne t'a jamais pardonné. Elle ne t'a jamais renvoyé{e} non plus.",
  ]),
  F_pied: fin("pied", "Le dernier mètre", "mirevaux", [
    "« Madame, dis-tu, il ne reste qu'un mètre. À pied, cela ne compte pas comme une arrivée. C'est une promenade. »",
    "La Comtesse te regarde longtemps, avec l'attention d'une femme qui pèse un argument au gramme près. Puis elle descend de sa moto, pour la première fois depuis trente et un ans sans tapis rouge, et pose un soulier de soie grise dans la poussière de la route. Elle fait un pas. Puis un autre. Elle dépasse le panneau. Elle entre dans Mirevaux, en se promenant.",
    "Le marché du soir s'arrête de parler. Une vieille dame en soie, couverte de beurre, avec un collier de perles, s'avance entre les étals, regarde les tomates, touche une miche de pain, demande le prix. Le boulanger dit un sou. Elle n'a pas d'argent : une Tartineuil n'en porte jamais. Tu paies.",
    "Elle mange la miche, debout, au milieu du marché, morceau par morceau, en regardant les lampions. « C'est donc ça, dit-elle, arriver. » Elle ne dit pas si elle aime. Elle finit le pain.",
    "Quand les valets arrivent, avec la théière et le tapis rouge, ils trouvent la Comtesse de Tartineuil assise sur une caisse de légumes, à côté de toi, en train d'expliquer à la boulangère comment se tient un éventail. Elle remonte sur sa moto à minuit. Elle reviendra le mardi suivant, à pied, depuis le panneau. *Nous n'arrivons pas* : la devise ne dit rien des promenades.",
  ]),
  F_arrivee: fin("arrivee", "Arrivée", "mirevaux", [
    "La moto entre dans Mirevaux à quarante à l'heure, traverse la rue principale dans un silence de mort, passe sous les lampions du marché, renverse un étal de pastèques, un étal de chapeaux, un étal de pastèques encore, et s'arrête enfin, tout doucement, contre la fontaine de la place, dans un dernier jet de beurre.",
    "Le marché entier regarde la Comtesse. La Comtesse ouvre les yeux. Elle voit les étals, les lampions, les gens, une pastèque fendue sur ses genoux. Elle comprend. Elle est arrivée.",
    "Il y a un long moment de silence. Puis la Comtesse de Tartineuil, quatre-vingt-cinq ans, doyenne du Domaine, dernière de sa lignée, se met à rire. Personne au Domaine ne l'a jamais entendue rire. Elle rit si fort que son chignon se défait. Elle rit jusqu'aux larmes, la pastèque sur les genoux, au milieu du marché de Mirevaux.",
    "Au Domaine, on dit le lendemain qu'elle a eu un malaise. On efface sa devise de la selle. On la remplace par une autre, plus discrète, qu'elle a choisie elle-même et qu'elle t'a dictée : *Nous sommes arrivés une fois. C'était très bien.*",
  ]),
  F_crouton: fin("crouton", "Le grappin", "descente", [
    "Croûton lance le grappin. Tu l'attrapes au vol, d'une main gantée, et tu l'accroches au cadre de la moto. Croûton freine, la corde se tend, et ta moto, ta Comtesse et toi êtes tirés en arrière d'un coup, comme un poisson au bout d'une ligne, et vous vous immobilisez au milieu de la Grande Descente, sur le flanc, dans le sable, sans une égratignure.",
    "La Comtesse ouvre les yeux. Elle voit le désert, le ciel, une gamine en salopette penchée sur elle, une clé à molette à la main. « Qui êtes-vous ? — Croûton. Mécanicienne. » Elle regarde la moto. « Elle est cassée ? — Non. Elle est mal câblée. »",
    "Croûton demande, pour sa peine, une seule manette d'ivoire, la manette du repos. La Comtesse la lui donne, sans discuter : ce qui ne sert à rien n'a pas de prix, et elle a les moyens. Croûton la visse sur le guidon de sa propre moto, où elle n'actionne rien du tout. Elle trouve ça très beau.",
    "Les valets arrivent une heure plus tard, avec la théière. Ils remontent la moto sur la route, déroulent le tapis, et repoussent la Comtesse vers le Domaine. Elle n'est pas arrivée. Elle a vu une Demi-Sel de près, ce qui, pour une Tartineuil, est une aventure plus considérable encore, et qu'elle racontera jusqu'à sa mort, en changeant chaque fois le nombre de motards.",
  ]),
};
