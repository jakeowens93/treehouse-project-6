const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const btnReset = document.querySelector('.btn__reset');


btnReset.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});