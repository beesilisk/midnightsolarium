const poetry_dict = {
    'Ali, Kazim. "Explorer"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/149262/explorer-5c6467baea8b4">In the desert I swam myself earthword to know</a>',
    'Ammons, A. R. "Finishing Up"': '<a href="https://poems-for-you.com/poems/sair-finishing-up/">I wonder if I know enough to know what it’s really like</a>',
    'Ashberry, John. "Late Echo"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/34278/late-echo">In the same way, repeating the same things over and over</a>',
    'Atsitty, Tacey M. "Achaan aghádaana’ígíí"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/1651177/achaan-aghadaanaigii">Air bubbles try to settle</a>',
    'Bachmann, Beth. "On Beauty"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/148971/on-beauty-5c3f56cf165c2">Like shrapnel, light scatters.</a>',
    'Bar-Nadav, Hadara. "Thumb"': '<a href="https://poets.org/poem/thumb">A smile opens across the knuckle and disappears</a>',
    'Berry, Emily. "Allegiances"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/148096/allegiances">Oh, you think I test you?</a>',
    'Berry, Liz. "The Burning"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/152126/the-burning">with my dreams like black pearls in the clam of my mouth,</a>',
    'Bird, Caroline. "Megan Married Herself"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/91666/megan-married-herself">“You may now kiss the mirror.” Applause. Confetti.</a>',
    'Bogan, Louise. "Song"': '<a href="https://www.poetryfoundation.org/poems/148797/song-5c1a78129b904">Love me that I am undone.</a>',
    'Brooks, Gwendolyn. "To the Young Who Want to Die"': '<a href="https://getlitanthology.org/poemdetail/26/">Graves grow no green that you can use.</a>',
    'Brown, Jericho. "The Virus"': '<a href="https://poets.org/poem/virus">You vexed. Look. Look</a>',
    'Burt, Stephanie. "Advice from the Lights"': '<a href="https://www.poetryfoundation.org/poems/147471/advice-from-the-lights">You will want for nothing, and you will never be heard.</a>',
    'Caleshu, Rocket. "Come Back"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/149236/come-back">and this crack in the apparatus espied around</a>',
    'Chapman, Danielle. "Optimism"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/153791/optimism">the sea dragon oscillating galleon sails</a>',
    'Christle, Heather. "Pursuits"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/56470/pursuits">without having touched it</a>',
    'Clay, Adam. "Start This Record Over"': '<a href="https://www.poetryfoundation.org/poems/147200/start-this-record-over">a map of a thousand airless pines.</a>',
    'Cole, Peter. "Song of the Shattering Vessels"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/56233/song-of-the-shattering-vessels">if only we’re willing to take it apart.</a>',
    'Coleridge, Samuel Taylor. "Kubla Khan"': '<a href="https://www.poetryfoundation.org/poems/43991/kubla-khan">A sunny pleasure-dome with caves of ice!</a>',
    'Crane, Stephen. "In the Desert"': '<a href="https://poets.org/poem/desert">I saw a creature, naked, bestial,</a>',
    'Doshi, Tishani. "Girls Are Coming Out of the Woods"': '<a href="https://www.poetryfoundation.org/poems/152744/girls-are-coming-out-of-the-woods">is the smash of their miniscule hearts</a>',
    'Dzukogi, Saddiq. "So Much Memory"': '<a href="https://www.poetryfoundation.org/poems/159336/so-much-memory">and lets a song fall inside another song:</a>',
    'Gallagher, Tess. "Stolen Dress"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/149239/stolen-dress">gaze up into the star-brilliant firmament,</a>',
    'Gambito, Sarah. "Grace"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/150295/grace-5cfa852f5d239">gorgeous <em>belief</em></a>',
    'Giovanni, Nikki. "Allowables"': '<a href="https://www.best-poems.net/nikki-giovanni/allowables.html">To kill something</a>',
    'González, Ray. "Rattlesnakes Hammered on the Wall"': '<a href="https://www.poetryfoundation.org/poems/52732/rattlesnakes-hammered-on-the-wall">Seven of them pinned in blood by</a>',
    'Greer, Kerry. "I’d Drive Anywhere with You"': '<a href="https://rattle.com/id-drive-anywhere-with-you-by-kerry-greer/"><em>Will Heaven hit Andromeda too?</em></a>',
    'Hennessy, John. "More Sky Please"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/144393/more-sky-please-59bc0228ec8f3">crowbar the paint factory’s broken window frames rip</a>',
    'Hershey, Laura. "The Gamble"': '<a href="https://www.poetryfoundation.org/poems/155147/the-gamble">We must be kept safe: This is one of the lies</a>',
    'Hoffman, Richard. "Long Enough"': '<a href="https://www.poetryfoundation.org/poems/55694/long-enough">and all this time I have carried you in my head</a>',
    'Hopler, Jay. "Out of These Wounds, the Moon Will Rise"': '<a href="https://www.poetryfoundation.org/poems/158470/out-of-these-wounds-the-moon-will-rise">Maybe we can invent something; I’d like a new</a>',
    'Igloria, A. Luisa. "Absence, Presence"': '<a href="https://www.poetryfoundation.org/poems/154929/absence-presence">and save the bones for soup in these cold months</a>',
    'Jackson, A.B. "The Cliff-Top Monastery"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/118562/the-cliff-top-monastery">seven stones in a fruit picker’s pail,</a>',
    'L’Abbé, Sonnet. "Poor Speaker"': '<a href="https://rpo.library.utoronto.ca/content/poor-speaker">That’s the point. I get it. If you could say so, you would.</a>',
    'Landau, Deborah. "The End Game of Bloom"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/147877/the-end-game-of-bloom">This earth it is a banquet and laid on its table we.</a>',
    'Lechay, Dan. "Ghost Villanelle"': '<a href="https://www.poetryfoundation.org/poems/51826/ghost-villanelle">We never saw him, and we didn’t care.</a>',
    'Legris, Sylvia. "Cold Zodiac and Butchered Pig"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/58769/cold-zodiac-and-butchered-pig">Let the butcher carnival begin!</a>',
    'Llompart, Cecilia. "Do Not Speak of the Dead"': '<a href="https://poets.org/poem/do-not-speak-dead">down the gutter of the same sky. Somewhere</a>',
    'Lowell, Amy. "The Broken Fountain"': '<a href="https://www.poetryfoundation.org/poems/53775/the-broken-fountain">Bright squares of sky </a>',
    'Makue, Thabile. "and these are lips"': '<a href="https://www.poetryfoundation.org/poems/155567/and-these-are-lips">sweet sour falls simpler into the mouth </a>',
    'McCarthy, Thomas. "A Celtic Miscellany"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/148982/a-celtic-miscellany">Red as magic black as magic white as magic</a>',
    'McKeown, Kitchen. "Outbreaks"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/156405/outbreaks">then rethink it. i cough. reveal a wet moth.</a>',
    'Nezhukumatathil, Aimee. "The Woman Who Turned Down a Date with a Cherry Farmer"': '<a href="https://www.poetryfoundation.org/poems/145507/the-woman-who-turned-down-a-date-with-a-cherry-farmer">all askew and the tips of my fingers ran, of course, red</a>',
    'Nguyen, Hieu Minh. "Litany for the Animals Who Run from Me"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/148389/litany-for-the-animals-who-run-from-me">Anything can be a bird if you’re not careful.</a>',
    'Niedecker, Lorine. "[What horror to awake at night]"': '<a href="https://www.poetryfoundation.org/poems/52177/what-horror-to-awake-at-night">sitting around with Something’s wife.</a>',
    'Novey, Idra. "Nearly"': '<a href="https://poets.org/poem/nearly">While the blackout continued.</a>',
    'Nuernberger, Kathryn. "The Strange Girl Asks Politely To Be Called Princess"': '<a href="https://www.poetryfoundation.org/poems/90184/the-strange-girl-asks-politely-to-be-called-princess">like a porpoise. She collects things that melt</a>',
    'Ok, Cindy Juyoung. "The End of Crisis"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/157931/the-end-of-crisis">the overtaken shores and bodies of elders,</a>',
    'Olzmann, Matthew. "The Earthlings"': '<a href="https://poets.org/poem/earthlings">That’s a Quantum Annihilator; put that down.</a>',
    'Pastan, Linda. "The Deathwatch Beetle"': '<a href="https://www.poetryfoundation.org/poems/46837/the-deathwatch-beetle">but simply because of the sound</a>',
    'Pence, Charlotte. "As a Child, You Worried You Would Be an Orphan"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/156075/as-a-child-you-worried-you-would-be-an-orphan">worry not how you will eat, but how to hunger.</a>',
    'Plath, Sylvia. "Mad Girl’s Love Song"': '<a href="https://allpoetry.com/Mad-Girl%27s-Love-Song">(I think I made you up inside my head.)</a>',
    'Polonskaya, Anzhelina. "A Few Words about Van Gogh"': '<a href="https://www.poetryfoundation.org/poems/155134/a-few-words-about-van-gogh">I don’t even know whether this is a poem or a diary.</a>',
    'Rankine, Claudia. "what if"': '<a href="https://www.poetryfoundation.org/poems/158621/what-if-i">in the clarity of consciousness, what if nothing changes?</a>',
    'raum, nat. "in which we cruise to neon heights"': '<a href="https://www.broadkillreview.com/post/two-poems-by-nat-raum">first love’s roulette played like three treasure chests</a>',
    'Rice, Cale Young. "Haunted Seas"': '<a href="https://allpoetry.com/Haunted-Seas">Is gone — a spectral sound.</a>',
    'Riley, Atsuro. "Caw"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/148976/caw">Though not thicktrunk-ancient as some angel-oak,</a>',
    'Rosser, J. Allyn. "Communication"': '<a href="https://poets.org/poem/communication">don’t face it full-on; turn slightly left;</a>',
    'Rossetti, Christina. "The Poor Ghost"': '<a href="https://poets.org/poem/poor-ghost">My locks are uncurled with dripping drenching dew,</a>',
    'Salner, David. "Everything Goes"': '<a href="https://www.broadkillreview.com/post/everything-goes-by-david-salner">like a mirage in the rays of a long dead star.</a>',
    'Shapero, Natalie. "The Sky"': '<a href="https://poets.org/poem/sky-0">I’ve only ever seen effluents, seen wattage.</a>',
    'Shaughnessy, Brenda. "I’m Over the Moon"': '<a href="https://poets.org/poem/im-over-moon">You change shape and turn away, </a>',
    'Sheng, Wu. "Writing a Poem Is All I Can Do for You"': '<a href="https://www.poetryfoundation.org/poems/155139/writing-a-poem-is-all-i-can-do-for-you">And all I can do is write a poem </a>',
    'Smith, Patricia. "And He Stays Dead"': '<a href="https://getlitanthology.org/poemdetail/1122/">will yourself limp and succumb to damage. Passing days seal the hollow.</a>',
    'Solurch, Janine. "Forgotten Portraits"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/155225/forgotten-portraits">Your edges blur and you become</a>',
    'Svoboda, Terese. "Countess Lethargy"': '<a href="https://poets.org/poem/countess-lethargy">Dogs slink around her bed in hunger.</a>',
    'Taylor, Tess. "Punctuations & Wind"': '<a href="https://www.poetryfoundation.org/poems/155190/punctuations-wind">the old tree tossing & tossing & wild</a>',
    'Theis, Laura. "Ameisenverteilungsmaschine"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/157526/ameisenverteilungsmaschine">I decide it is now my favourite word I decide to write the poem</a>',
    'Torres, Angela Narciso. "After the Ambulance"': '<a href="https://poets.org/poem/after-ambulance">cocooned in plastic </a>',
    'Tracy, Kristen. "Happy Endings"': '<a href="https://www.poetryfoundation.org/poems/152732/happy-endings">because the bullet struck the whiskey flask</a>',
    'Tse, Chris. "I.R.L."': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/145480/irl">while your right foot taps – S.O.S., S.O.S., S.O.S.</a>',
    'Willard, Nancy. "How to Stuff a Pepper"': '<a href="http://www.madpoetssociety.com/blog/2020/1/4/21">a fever of pearls,</a>',
    'Willingham, Katie. "Internal Reasons and the Obscurity of Blame"': '<a href="https://www.poetryfoundation.org/poems/156955/internal-reasons-and-the-obscurity-of-blame">I run out of things to say about extinction. Cut a branch</a>',
    'Wrigley, Robert. "Human Knowledge"': '<a href="https://www.poetryfoundation.org/poems/141934/human-knowledge">No more paramilitary organizations for me,</a>',
    'Yevtushenko, Yevgeny. "There Are No Boring People In This World"': '<a href="https://workthoughts.com/2022/02/03/the-friday-poem-there-are-no-boring-people-in-this-world-by-yevgeny-yevtushenko/">All gone, all gone – there’s just no way to stop it.</a>',
    'Yezzi, David. "A Stop Before Starting"': '<a href="https://www.poetryfoundation.org/poems/56604/a-stop-before-starting">and coffee squelching in the fogged cafés.</a>',
    'Younge, Lesley. "Dispatch from the Edge of the Universe"': '<a href="https://www.poetryfoundation.org/poetrymagazine/poems/1639222/dispatch-from-the-edge-of-the-universe">end everything with Neptune,</a>'
};