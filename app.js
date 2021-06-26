const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');
const phrases = [
    "worm hat",
    "denim chicken",
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
const checkLetter = button => {
    const letters = document.querySelectorAll('li.letter');
    let match = null;
    const buttonLetter = button.textContent;
    for (var i = 0; i < letters.length; i++) {
        const li = letters[i];
        if (buttonLetter === li.textContent.toLowerCase()){
            letters[i].className = "show";
            match = button.textContent;
        } else { 
            return null;
        }
    }
}
//========= CheckWin Function ======== //
function checkWin (){

}

//========= Keyboard Event Listener ======== //
qwerty.addEventListener('click', e => {
    let btn = e.target;
    if(btn.className === 'chosen' || btn.parentNode.className !== 'keyrow'){
        return null;
    }
    btn.className = 'chosen';
    btn.disabled = true;
   var letterFound = checkLetter(btn);
  
});

