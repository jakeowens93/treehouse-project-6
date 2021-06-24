const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');
const phrases = [
    "hello bitch",
    "you had all summer to figure out what you do",
    "bart harley jarvis",
    "hot topic pastor",
    "newt gingrich eating chili"
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
function addPhraseToDisplay(){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (var i = 0; i < phraseArray.length; i++){
        var li = document.createElement('li');
        var text = document.createTextNode(phraseArray[i]);
        li.appendChild(text);
        document.getElementById("phrase").appendChild(li);
        
        // phraseArray[i];
        // const ul = document.querySelector('#phrase ul');
        // list = document.createElement('li');
        // list.appendChild(text);
        // ul.appendChild(list);
        console.log(li);
    }
}
addPhraseToDisplay(phraseArray);

// ======== Letter Checker Function ======== //
// function checkLetter()