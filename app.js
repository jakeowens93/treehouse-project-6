const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phrases = [
    "Worm Hat",
    "Denim Chicken",
    "Night Man",
    "Donkey Brain",
    "Night Crawlers"
]

// ======== Start Game Button ========= //

btnReset.addEventListener('click', () => {
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
    for (var i = 0; i < phraseArray.length; i++){
        var li = document.createElement('li');
        const character = phraseArray[i];
        var text = document.createTextNode(character);
        li.appendChild(text);
        document.getElementById("phrase").appendChild(li);
        if (character === " "){
            li.classList.add("space");
        } else { 
            li.classList.add("letter");
        }
// ====== Print random phrase to console for testing purposes ====== //
        console.log(li);
    }
}
addPhraseToDisplay(phraseArray);

// ======== Letter Checker Function ======== //
function checkLetter(button){
    const letters = document.querySelectorAll('#phrase li');
    let match = null;
    const buttonLetter = button.textContent;
    for (var i = 0; i < letters.length; i++) {
        var li = letters[i];
        if (buttonLetter === li.textContent.toLowerCase()){
            li.className += ' ' + 'show';
            match = true;
        }   
    }
    return match;
}
//========= CheckWin Function ======== //
function checkWin (){
    let phraseLetters = document.querySelectorAll('.show');
    let guessedLetters = document.querySelectorAll('.letters');
    let title = document.querySelector('.title');

    if (phraseLetters.length === guessedLetters.length){
        overlay.classList.add('win');
        title.textContent = 'You Win!'
        overlay.style.display = 'flex';
        btnReset.textContent = 'Play Again';
    }
    if (missed > 4){
        overlay.classList.add('lose');
        title.textContent = 'You Lose!';
        overlay.style.display = 'flex';
        btnReset.textContent = 'Play Again';
    }
};

//========= Keyboard Event Listener ======== //
qwerty.addEventListener('click', e => {
    let button = e.target;
    let letterFound = checkLetter(button);
    if(button.className === 'chosen' || button.parentNode.className !== 'keyrow'){
        return null;
    }
    button.className = 'chosen';
    button.disabled = true;
    const heart = document.querySelectorAll('.tries img');
    if (letterFound === null){
        heart[missed].src = 'images/lostHeart.png';
        missed += 1;
    }
    checkWin()
});

