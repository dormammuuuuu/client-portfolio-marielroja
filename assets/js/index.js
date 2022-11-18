AOS.init();

const lunaContent = `
The glare of the dawn came to pass. 
In a placid evanescent, the gloaming squelched any glint of the serene light.
Yet there's a sublime luminance, 
A splendid cirque ablaze in twilight.

Pensive arrival exposed her reticent allure. 
Riveting, tenacious, a little obscure.
Limpid blotches in her skin emanate a remote cure. 
The mesmerizing disk ensconced her flaws on the dusk—raw, ethereal, so pure.

Beneath her are desolate pieces bleeding for an ephemeral release;
Remnant of untold lives cherish the faraway rim, 
An affable companion to emit their poignant scream. 
Her lambent colors have touched them defenseless, 
Surrendering their Achilles' heel when stealth throes in their bone clutches. 

Fervent periods of the moon seize their 
lapses. 
Out of reach but her salient haven captures their secrets. 
Ardent faces groans to be saved before she vanishes slowly, 
Fragments of people she places in her memory.

She hovers for their gravity to realize—
She sees, she hears, she sympathizes. 
She's a ceaseless brevity, she won't be gone.
Darkness is her home even when she looks undone.
`

const whenItRainsContent = `
A feverish calm flood within the stream of  stirring rues, 
Ashen ambience soaks the hushed chord of a humming morose. 
Slate cloud holes an entrance for a clean stretch of time,
Cascade of the past rushes down with no breath to blame this time. 

Woes that ripples cheap intention strains the air, 
Timid scent of the mist engulfs—hesitant to dare.
Drowning in yellow sulks the bed of washed-out regrets, 
Pining for bitter faults to sink in these restless frigid sheets.

Swamp of haste made distinct faces depart with utter ease, 
Splashed by crooked chances bargained for fleeting defense.
Quivering from the crisp wind began to settle
Like a rapid gush of scattered efforts belittled. 

Despite the hurricane bursting, the resonant pound of the rain exhaled solace. 
Intertwined with the cold, vague warm trickles. A room for tranquility surfaces. 
The brazen fall of the rain waned after outpouring a breeze of taint—
Unsteady tiny kisses drenched the cynical scenery with barred iridescent.
`

const chromaticContent = `
Kaleidoscopic of colors linger in your gaze, 
Canorous music plays as I find myself anticipating.
You make me feel steady like I'm out of haze, 
The garish light that I've been waiting.

Gentle sprinkle caressed our skin—
Your harbor has protected me so far. 
It was the closest that we've ever been,
Nighing to you sedated my vivid scar.

The night goes slow when we walked under the moonlight. 
I counted one to three and breathe—let me now bare my heart. 
I'm headed for a free fall I may never have, 
Latching on to you every time I catch you leave. 

I uttered before that love is a jaded rack—
You told me that I should leave something that will hold me back. 
Can you be the certainty that I don't need to grope? 
How can a person resemble hope? 

If this ends in mayhem then color me blue. 
Crimson blooms when you focus on me, I will not rue. 
If this is bound for something good, make me your canvas.
Stroke your zeals, paint your mishaps and touch me with your hues.
`

const navToggler = document.getElementById('navToggler');
const navMenu = document.getElementById('navMenu');
navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
    console.log('clicked');
});

const close = document.getElementById('close');
const modal = document.getElementById('modal');
close.addEventListener('click', () => {
    modal.style.display = 'none'
});

const luna = document.getElementById('luna');
const chromatic = document.getElementById('chromatic')
const rain = document.getElementById('rain')
const title = document.getElementById('modal-title');
const content = document.getElementById('modal-content');
luna.addEventListener('click', () => {
    title.innerHTML = 'Luna';
    content.innerHTML = lunaContent;
    modal.style.display = 'block';
})

chromatic.addEventListener('click', () => {
    title.innerHTML = 'Chromatic';
    content.innerHTML = chromaticContent;
    modal.style.display = 'block';
})

rain.addEventListener('click', () => {
    title.innerHTML = 'When It Rains';
    content.innerHTML = whenItRainsContent;
    modal.style.display = 'block';
})