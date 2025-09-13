var rumArray = [
    'i know i shouldnt miss you<br>but whenever i think about you<br><br>██ ██████ ██ ███<br><br>maybe i just miss having someone<br>who could make me feel so strongly',
    'not every gift is given through an act of kindness<br><br>do i still need to be grateful?',
    'i want to rip your heart out of your chest<br>feel it beating against my clenched fist<br>before i swallow it whole',
    'do you feel breathtaken by everyday spectacles?',
    'are you lost?<br>&emsp;are you in danger?<br>&emsp;&emsp;are you hiding?<br>&emsp;&emsp;&emsp;are you scared?',
    'i think ive been left behind again',
    'this used to be a happy place<br>in a way, that hasnt changed<br>i know its cold and dark and lonely now<br><br>i find it refreshing<br><br>i try not to get lost here<br>i try not to make it your home',
    'i keep having dreams where im being chased<br>do you think thats why i always wake up tired?',
    'look! look! up in the sky!<br><br><br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;winter writhing shuddered sighs are sloughing off their cheap disguise to cry into the night<br><br><br><br>dont ask me why! dont ask me why!',
    'i spent so much time trying to become healthy<br>that i never learned how to be alive',
    'you keep saying you love me<br>im sure you think thats true<br>but i dont think the person you love<br>is truly me<br><br>maybe this love is my punishment for insincerity',
    'you wont get an apology<br><br>you wont get an explanation',
    'i think my life was meant to be a tragedy<br>luckily, i live to disappoint',
    'i had a dream where i got to say goodbye to you<br><br>but then i woke up<br><br>and you were still gone<br><br>i dont think im supposed to gain closure this way',
    'i used to want to redeem myself in your eyes. now all i want to do is disappoint you<br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;am i being juvenile? am i just an overgrown child acting out?<br><br>i want to believe im doing whats best for me<br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;but even now im still letting you control me',
    'this is the only home you get<br><br>you are not permitted to leave',
    'believe it or not, i used to be a decent writer. but now all my prose is flat and vapid<br><br>is this who i am now? will i ever convey anything meaningful again?<br><br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;maybe im just a shallow person with nothing to say',
    'i wish i didnt need to justify myself<br>i wish i didnt need to apologize for the space i fill<br>i wish i didnt need to temper my presence<br>i wish i could simply exist',
    'you may think im lacking in every way that matters<br><br>but im still here<br>im still alive<br><br>have i not already proven you wrong?',
    'like scales like pearls like fleets like birds<br>like teeth like knurls like finger whorls<br>like ferns unfurled like fleecy curls<br>like time rewound and lessons learned',
    'congratulations! you have grown into a beautiful swan!<br>too bad youll never forget how the ducks treated you',

    'you are nearing the end of your life<br>you are old but not old enough<br>you search for meaning at the bottom of an overfilled ashtray<br>you have lived long enough to see your ambition scraped off the side of the road<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;people wonder if you ever tried at all',
    'i understand the problem. no, really, ive figured it out. the thing is: you keep acting like youre entitled to me because you cannot comprehend how disgusting you are. it has never benefited you to look in the mirror, so you have no conception of what a spiteful little pustule youve become. there is so much in this world that is better than you, and you can only convince people otherwise by weaponizing their fear and ignorance. but you’re not even good at that, are you? you dont even bother to hide your repugnance from the world, yet you wonder why im ashamed of being associated with you. and i know you think youre listening to this explanation, but it is not in your nature to understand. the only way i can drag myself out of bed each morning is because i tell myself that someday, with enough hard work and luck on my side, i might someday be far away from you. the day will come where i can walk away from you and never return, because this is the only future where i can exist. this is the consequence of refusing to hold yourself to any standard of decency. you have made yourself unlovable and it’s your own fault. you expect me to give myself to you? youre lucky my hatred is all youll get',
    'maybe there is a god<br><br>maybe god is praying to us',
    'you could have done something else with the life you were given',
    'its like theres some unnameable quality about being a person<br>that everyone around me was born with<br>and i was born without',

    'its been a long time since i last heard from you<br>i hope you escaped<br>i hope you found the place we were looking for',
    'am i less anxious than i used to be?<br><br>or did i just learn how to stay productive without ever feeling safe?',
    'i will never be okay again<br><br>i will continue anyway',
    'YOU WILL NEVER MAKE IT TO HEAVEN<br>&emsp;&emsp;&emsp;&emsp;BUT CONGRATS ON GETTING THIS FAR',
    'the past is not a happy place<br><br>why do i keep going back?<br>am i trying to find something i missed before?',

    'does an<br><br>imperfect<br>saviour<br><br>have the right to<br><br>&emsp;&emsp;&emsp;&emsp;demand<br>&emsp;&emsp;&emsp;&emsp;worship<br>&emsp;&emsp;&emsp;&emsp;?',
    'EVERYTHING ABOUT YOU<br><br><br><br>&emsp;&emsp;&emsp;&emsp;IS<br><br><br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;NAUSEATING',
    'im tired of waking up<br><br><br>&emsp;&emsp;&emsp;&emsp;in the same place i fall asleep',
    'whats wrong?<br><br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;why are you looking at me like that?',
    'your doctor has never treated anyone like you before<br><br>why do you have to be such a difficult patient?',
    'i can feel the edges of the world<br>peeling paint and chipped drywall<br>there is nowhere other than here',

    "i love you more when you're gone",
    "& i dont know if we'll survive this",
    "its been a blur<br><br>but i know i dont regret a single second"
    ];
var randomIndex = Math.floor(Math.random() * rumArray.length);
document.write("<span id='output' style='top:" + get_random_height() + ";left:" + get_random_width() + ";'>")
document.getElementById('output').innerHTML = rumArray[randomIndex];