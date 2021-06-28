const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const heart = document.querySelectorAll('.tries img');
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
function getRandomPhraseAsArray (phrases) {
    var randomNumber = Math.floor(Math.random()*phrases.length);
    var randomPhrase = phrases[randomNumber];
    var splitPhrase = randomPhrase.split('');
    return splitPhrase
}

let phraseArray = getRandomPhraseAsArray(phrases);

// ======== Set the Game Display ========= //
function addPhraseToDisplay(){
    for (var i = 0; i < phraseArray.length; i++){
        var li = document.createElement('li');
        const character = phraseArray[i];
        var text = document.createTextNode(character);
        li.appendChild(text);
        document.querySelector("#phrase ul").appendChild(li);
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
    let guessedLetters = document.querySelectorAll('.letter');
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
    
    if (letterFound === null){
        heart[missed].src = 'images/lostHeart.png';
        missed += 1;
    }
    checkWin()
});

// ======== Reset Functions ======== //

function resetHearts(){
    missed = 0;
    for (let i = 0; i < heart.length; i++) {
        heart[i].src ='images/liveHeart.png';
    }
};
function deletePhrase(){
    const oldPhrase = phrase.querySelectorAll('li');
    for (let i = 0; i < oldPhrase.length; i++) {
        let ul = oldPhrase[i].parentNode;
        ul.removeChild(ul.firstElementChild);
    }
};
function resetButtons(){
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = '';
        buttons[i].disabled = false;
    }
};

btnReset.addEventListener('click', () => {
    if (btnReset.textContent === 'Play Again'){
        overlay.style.display = 'none';
        resetHearts();
        deletePhrase();
        resetButtons();
        let newPhrase = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newPhrase);
    }
});