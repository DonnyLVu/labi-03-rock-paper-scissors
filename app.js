import { doesUserWin } from '../utils.js';

// import functions and grab DOM elements

const button = document.querySelector('#submit-button');
const winSpan = document.querySelector('#win-span');
const loseSpan = document.querySelector('#lose-span');
const resultSpan = document.querySelector('#result-span');
const drawSpan = document.querySelector('#draw-span');
// initialize state

let win = 0;
let lose = 0;
let draw = 0;
 
// set event listeners to update state and DOM

// event listener
button.addEventListener('click', () => {
    const radioButton = document.querySelector(':checked');
    const userChoice = radioButton.value;
    const results = doesUserWin(userChoice);

    winSpan.textContent = win;
    loseSpan.textContent = lose;
    drawSpan.textContent = draw;
     
    if (results === 'win') win++;
    if (results === 'lose') lose++;
    if (results === 'draw') draw++;
});