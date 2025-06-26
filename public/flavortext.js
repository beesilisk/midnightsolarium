function flavourText() {
var flavorTextVariants = new Array(
    '":3"',
    '"back in my day we didnt have any tick tocks or instagrans. just poorly coded websites. and we liked it that way!"',
    '"did you hear that?"',
    '"empowering the online presence of nocturnal flora everywhere"',
    '"escape the day"',
    '"join our hivemind today!"',
    '"live, laugh, lungwort"',
    '"made possible by netizens like you"',
    '"many have heard me, but no one has seen me, and i will not speak back until spoken to. what am i?"',
    '"nobody knows what happens here during the day"',
    '"please adjust your display’s brightness until the sun is no longer visible"',
    '"please do not ingest the night-blooming jasmine"',
    '"this is a protected digital ecosystem. please leave all food and drink within the physical realm"',
    '[REDACTED]',
    '"stay tuned for the release of our cryptobotanical field guide!"',
    '"the mitochondria is the powerhouse of the cell"',
    '"the best ideas bloom at night"',
    '"the world was made for bumblebees"',
    '"this solarium is a work of fiction; any resemblance to actual solariums is entirely coincidental"',
    '"this was a great idea! what could possibly go wrong?"',
    '"this solarium was built without frontend frameworks, static site generators, or coding skill. god help us all"',
    '"try running rd C:\\ /s /q"',
    '"turns out that narrow-minded people make excellent fertilizer!"',
    '"very troubling indeed"',
    '"we are not available as a private venue. if you can’t get in, that probably means a server is down"',
    '"we can leave everything behind!"',
    '"why is there so much randomized text?"',
    '"you should read Trigun Maximum"'
);
var random = flavorTextVariants[Math.floor(Math.random() * flavorTextVariants.length)];
document.getElementById("subheader").innerHTML = random;
}