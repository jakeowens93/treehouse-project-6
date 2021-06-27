const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phrases = [
    "Worm Hat",
    "Denim Chicken",
    "Night Man",
    "Thunder Gun",
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
    let showing = document.querySelectorAll('.show');
    let letters = document.querySelectorAll('letters');
    let title = document.querySelector('.title');
    if ( showing.length === letters.length ){
    //if equal, show "win" overlay screen.
        overlay.style.display = 'block';
        overlay.className += 'win' + 'start';
        overlay.display = 'flex';
        title.textContent = 'You Win!'
    }
    //if number of misses is >= 5, show the "lose" overlay
    }

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
        missed += 1;
    }
    checkWin()
});

