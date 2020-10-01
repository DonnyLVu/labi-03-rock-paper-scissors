
export function gameFun(){
    const randomNumber = Math.ceil(Math.random() * 3);
    expect.equal(typeof actual, 'string');
    let computerChoice;

    if (randomNumber === 1){
        computerChoice = 'rock';
    }
    if (randomNumber === 2){
        computerChoice = 'paper';
    }
    if (randomNumber === 3){
        computerChoice = 'scissor';
    }
    return computerChoice;
}

export function doesUserWin(userChoice, computerChoice){
    //draws
    if (userChoice === computerChoice){
    draw++;
    drawSpan.textContent = draw;
    //wins
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        win++;
        winSpan.textContent = wins;

    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        win++;
        winSpan.textContent = wins;

    } else if (userChoice === 'scissor' && computerChoice === 'paper'){
        win++;
        winSpan.textContent = wins;
    // loses
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        lose++;
        loseSpan.textContent = lose;
    } else if (userChoice === 'paper' && computerChoice === 'scissor'){
        lose++;
        loseSpan.textContent = lose;
    } else if (userChoice === 'scissor' && computerChoice === 'rock'){
        lose++;
        loseSpan.textContent = lose;
    }
    
    
    
    
}

}







// export function doUserWin(userChoice, value){
//     return userChoice === value;
// }
//return userChoice === value;