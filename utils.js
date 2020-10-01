
export function gameFun() {
    const randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 1) computerChoice = 'rock';
    if (randomNumber === 2) computerChoice = 'paper';
    if (randomNumber === 3) computerChoice = 'scissor';
    
    return computerChoice;
}


export function doesUserWin(userChoice) {
    //draws
    const computerChoice = gameFun();

    if (userChoice === computerChoice){
        return 'draw';
    //wins
    } else if (userChoice === 'rock' && computerChoice === 'scissor'){
        return 'win';
    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'win';
    } else if (userChoice === 'scissor' && computerChoice === 'paper'){
        return 'win';
    // loses
    } else if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'lose';
    } else if (userChoice === 'paper' && computerChoice === 'scissor'){
        return 'lose';
    } else if (userChoice === 'scissor' && computerChoice === 'rock'){
        return 'lose';
    }
}






// export function doUserWin(userChoice, value){
//     return userChoice === value;
// }
//return userChoice === value;