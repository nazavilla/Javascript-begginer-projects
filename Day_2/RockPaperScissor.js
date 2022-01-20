//Rock Paper Scissors

    //userchoice
    let uOptions = 'rock'; 
    let userScore = 0;
    let pcScore = 0;
    let currentRoundNumber = 1;


    //computerChoice
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

      if (randomNumber === 1) {
        computerChoice = 'rock'
    }
        if (randomNumber === 2) {
        computerChoice = 'scissor'
    }
        if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    
    //arrow Function
    const compare = (choice1, choice2) => {
    //result
        if (choice1 == "rock" && choice2 == "paper"|
            choice1 == "paper" && choice2 == "scissor" |
            choice1 == "scissor" && choice2 == "rock" ) {
                userScore++;

        }

        else if(choice1 == "paper" && choice2 == "rock"|
                choice1 == "scissor" && choice2 == "paper"|
                choice1 == "rock" && choice2 == "scissor"){ 
                pcScore++;

        }
    }
        compare(uOptions, computerChoice);
        console.log("User choice: "+ uOptions);
        console.log("Computer choice: "+ computerChoice);
        console.log('User new Score: '+userScore);
        console.log('Computer new Score: '+pcScore);

//ROUNDS
const advanceRound = () =>{
    currentRoundNumber++;
}

advanceRound();
console.log('Round: '+currentRoundNumber);