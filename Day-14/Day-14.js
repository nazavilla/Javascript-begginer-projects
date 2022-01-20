//on day 14 i wanted to add score section to ROCK PAPER ANS SCISSOR PROGRAM


//generate target
const generateTarget = () => {
    //target
    return Math.floor(Math.random() * 9);
};

//scores and rounds
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let human = 4;
let computer = 2;
let target = generateTarget();


//udating score
const updateScore = winner => {
    if (winner === human){
        humanScore++;
    }
    else if(winner === computer){
        computerScore++;
    }
}

//comparing user vs computer
const compareGueses = () => {
    let humanWins = Math.abs(target - human);

    let computerWins = Math.abs(target - computer);
    if (humanWins <= computerWins){
        updateScore(human);
    }
    else {
        updateScore(computer);
    }
}

//create a new round
const advanceRound = () =>{
    currentRoundNumber++;
}

compareGueses();
console.log('User number: '+human);
console.log('Computer number: '+computer);
console.log('User new Score: '+humanScore);
console.log('Computer new Score: '+computerScore);
console.log('target: '+generateTarget());
advanceRound();
console.log(currentRoundNumber);
