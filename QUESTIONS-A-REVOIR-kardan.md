# Le labyrinthe de Kardan · questions à revoir

Choices I applied without waiting, each with the recommendation I followed. Clément's answer can change any of them;
the story is data (histoires/src/kardan/*.js), so most changes are a few lines.

1. **Recognising Aurèle.** The outline asked for 2 clues out of 4 (knife, song, names, whistle). Applied: the whistle
   alone or the song alone is enough (a sign only he would know), and "say his name" needs 2 of the 4. Without any,
   the fight starts and he stops at your voice.
2. **Sharing the bond** needs 2 clues on "Que fait la Source ?" (the three journal pages, or Mattias' confession),
   not strictly 2 journal pages.
3. **The Aïeule's judgement** (ending 2) after the basin is broken: I read "the Source weakens" as "nobody holds it,
   but someone can still go down and drink". Maève does.
4. **The capture** happens when you go to bed at the inn from day 3 on. In "tout jouer" mode, that bed stays closed
   until the five quests of Act I are done; a bench in the common room lets you rest meanwhile.
5. **Barricading the door** needs 3 clues about Aurèle (otherwise the hero has no reason to distrust Hesna).
   **Pretending to sleep** needs the moon-thistle quest (Oriel teaches the smell).
6. **The knife** stays with the hero even when drugged and stripped: someone lays it on his chest, "rends-le-lui".
7. **Levels.** Act II starts at level 3 at least, Act III at level 6 at least (a catch-up, as in Malvoran). The 1,200
   test games mostly end at level 6 or 7, rarely 8. If you want 8 at the end, I raise the ending rewards.
8. **Climbing** uses the Discrétion domain (there is no Agility domain in the simplified rules).
9. **The assembly** is a Social test at −30 with help from everything you gathered (+15 the names read aloud, +15 the
   journal, +15 Tobie, +10 each for Oriel, Hesna, Garance, Odon and Aurèle, +5 Mattias), and −30 for each act of
   vengeance already done (granary, hostage).
10. **"Choix précédent"** (undo) is always available, 25 choices back. It makes the dice forgiving; I can limit it
    (one undo per passage, or none on rolls) if the kids abuse it.
11. **Saves.** On the published page, profiles and games are shared by everyone who opens the link with write access
    (each child picks their name; nobody's game is hidden from the others). Without that access, saves stay in the
    browser.
12. **Mattias** is not a companion who fights: he follows only if you leave by his passage, and appears in the
    epilogue either way.
13. **Gold** is useless in the maze and in Act III (nobody sells you anything); it only counts in Act I.
14. **Combat spells** (added 11/11 after "on est un mage, on a pas de sorts offensifs ?"). Mage: Trait de feu (Magie
    against the foe's defence, 5 damage) and Égide (+40 defence this exchange). Priest: Lumière qui brûle (4 damage) and
    Prière de soin (8 PV, once per fight). Bard: Note qui fend (4 damage) and Chant de désarroi (foes −25 this
    exchange), rolled in Social. No power points. Odds of winning the jackal fight (3,000 games): warrior 90 %, mage
    75 %, bard 72 %, priest 59 %, thief 49 % (no spell; a thief trick could come next), ranger has none either.
15. **Class techniques and group strategy** (green light 11/11, proposal: https://claude.ai/artifact/JoMSjJbqFqQJUtFjgmqN5f).
    The 6 recommendations were applied (techniques at start / level 3 / level 6; the thief flees only where the story
    allows it; a starting kit per class, the warrior's being a short sword; the hurtful techniques become "subdue"
    versions against Aurèle; a fallen companion gets up at 1 PV after the fight and loses 5 trust; companions share
    the hero's level). Kardan has 6 fights, not 7.
16. **Sleep and the soothing song against the Gardien.** They are level-6 techniques, but the Gardien comes at the end
    of Act II (levels 3 to 5). In a fight that can end in peace (`calm`), the mage and the bard get them at any
    level, so that scene (D_coeur_apaise) can be reached.
17. **Balance measured** (tests/combat-sim.js, 1,500 fights each): the warrior wins 87 to 100 % everywhere. The others
    win 70 to 100 % with a companion, 70 to 80 % alone, except:
    - the barricaded door (3 villagers, level 2): mage 51 %, priest 45 %, thief 10 %. Win or lose, the story goes on
      to the same capture; I left it hard;
    - the thief alone in a fight with no way out: weak (10 %), by design; he escapes 50 to 80 % where fleeing is allowed;
    - at level 6 in natural terrain, the ranger (traps, hiding) wins slightly more often than the warrior (98 vs 92 %
      against Bastien). The warrior keeps the strongest blows.
18. **Odon in front.** A mage or priest alone with Odon puts Odon in front (someone must stand there). Odon never
    strikes (he heals); "reste en arrière" sends him back and the hero takes the blows.
19. **Priest, healing first** (Clément, 11/11). Start: Prière de soin (any member, every exchange, no limit) and
    Lumière qui brûle (his ordinary blow, like the ranger's shot: with healing alone a lone priest won only 32 % of the
    jackal fight). Level 3: Bénédiction. Level 6: Cercle de guérison (the whole group, once a fight). Priest now:
    76 % alone against the jackals, 96 % with Odon, 68 % alone in the bone well.

20. **Clues told once** (Clément, 11/11: the barred 7 was hammered). Removed the reminders and explanations from 14
    passages and from the clue cards: the habit is told once, in the prologue portrait; afterwards the 7 is shown
    without "comme Aurèle", and the hero's recap scene no longer re-reads the clues. Kept two returns of the barred 7
    because they change meaning: the name on the cairn when Aurèle dies, and the date the hero barres himself on the
    milestone (northern ending). Remove those too?
21. **Companions act on their own; orders are for this exchange** (Clément, 11/11: Odon did nothing unless told).
    Each companion may get one free order per exchange (several companions, several orders); without one he acts as
    he sees fit. A healer tends anyone under 80 % of his PV (was 50 %), with an easy prayer (+40: Odon heals two
    times in three at level 1, was one in four), and takes the order « soigne X ». A pacifist with nobody to tend
    turns the blows aside with his staff: foes strike at −10 that exchange. Values are game choices.
