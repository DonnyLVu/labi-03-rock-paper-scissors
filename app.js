import { gameFun, doesUserWin } from '../utils.js';

// import functions and grab DOM elements

const button = document.querySelector('#submit-button');
const winSpan = document.querySelector('#win-span');
const loseSpan = document.querySelector('#lose-span');
const perSpan = document.querySelector('#percentage-span');
const resultSpan = document.querySelector('#result-span');
const drawSpan = document.querySelector('#draw-span');
// initialize state

let wins = 0;
let total = 0;
let lose = 0;
let draws = 0;

// // set event listeners to update state and DOM

button.addEventListener('click', () => {
     const computerChoice = gameFun();
     const radioButton = document.querySelector('checked');
     const userChoice = radioButton.value;
}







//     //draws
//     if (userChoice === 'rock' && computerChoice === 'rock'){
//         draws++;
//         total++;

//         resultSpan.textContent = 'Draw!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
//     } else if (userChoice === 'paper' && computerChoice === 'paper'){
//         draws++;
//         total++;

//         resultSpan.textContent = 'Draw!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
//     } else if (userChoice === 'scissor' && computerChoice === 'scissor'){
//         draws++;
//         total++;

//         resultSpan.textContent = 'Draw!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
//     }
//     //wins
//     if (userChoice === 'rock' && computerChoice === 'scissor'){
//         wins++;
//         total++;

//         resultSpan.textContent = 'Win!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;

//     } else if (userChoice === 'scissor' && computerChoice === 'paper'){
//         wins++;
//         total++;

//         resultSpan.textContent = 'Win!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
    
//     } else if (userChoice === 'paper' && computerChoice === 'rock'){
//         wins++;
//         total++;

//         resultSpan.textContent = 'Win!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
    
//     }
//     //lose
//     if (userChoice === 'rock' && computerChoice === 'paper'){
//         lose++;
//         total++;

//         resultSpan.textContent = 'Lose!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;

//     } else if (userChoice === 'paper' && computerChoice === 'scissor'){
//         lose++;
//         total++;

//         resultSpan.textContent = 'Lose!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
//     } else if (userChoice === 'scissor' && computerChoice === 'rock'){
//         lose++;
//         total++;

//         resultSpan.textContent = 'Lose!';
//         winSpan.textContent = wins;
//         loseSpan.textContent = lose;
//         drawSpan.textContent = draws;
//         perSpan.textContent = `${(wins / total) * 100}%`;
    
//     }
   
// });