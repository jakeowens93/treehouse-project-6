const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');
const phrases = [
    "phrase 1",
    "phrase 2",
    "phrase 3",
    "phrase 4",
    "phrase 5"
]

// ======== Start Game Button ========= //

btnReset.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// ======== Random Phrase Function ========= //
function getRandomPhraseAsArray (arr) {
    var randomNumber = Math.floor(Math.random()*phrases.length);
    var randomPhrase = phrases[randomNumber];
    var splitPhrase = randomPhrase.split('');
    return splitPhrase
}
const phraseArray = getRandomPhraseAsArray(phrases);

// ======== Set the Game Display ========= //

function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
}