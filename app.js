import { doesUserWin } from '../utils.js';

// import functions and grab DOM elements

const button = document.querySelector('#submit-button');
const winSpan = document.querySelector('#win-span');
const loseSpan = document.querySelector('#lose-span');
const resultSpan = document.querySelector('#result-span');
const drawSpan = document.querySelector('#draw-span');
const resetButton = document.querySelector('#reset-button');
const resetSpan = document.querySelector('#reset-span');
// initialize state

let win = 0;
let lose = 0;
let draw = 0;
let resets = 0;
 
// set event listeners to update state and DOM

// event listener
button.addEventListener('click', () => {
    const radioButton = document.querySelector(':checked');
    const userChoice = radioButton.value;
    const results = doesUserWin(userChoice);
    winSpan.textContent = win;
    loseSpan.textContent = lose;
    drawSpan.textContent = draw;
    resetSpan.textContent = resets;
    

     
    if (results === 'win') win++; resultSpan.textContent = 'Win!';

    if (results === 'lose') lose++; resultSpan.textContent = 'Lose!';

    if (results === 'draw') draw++; resultSpan.textContent = 'Tie!';

    
});

resetButton.addEventListener('click', ()=>{
    
    if (win > 0){
        win = 0;
    }
    if (lose > 0){
        lose = 0;
    }
    
    if (draw > 0){
        draw = 0;
    }

    resets++;
    resetSpan.textContent = resets;
    
   
});