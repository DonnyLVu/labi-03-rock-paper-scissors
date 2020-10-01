
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

// export function doUserWin(userChoice, value){
//     return userChoice === value;
// }



//return userChoice === value;