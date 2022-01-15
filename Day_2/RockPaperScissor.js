//Rock Paper Scissors

    //userchoice
    let uOptions = prompt("You have three options, please write only one: \n Rock, Paper or Scissor: ").toLowerCase(); 

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

    function compare(choice1, choice2){
    //result
        if (choice1 == "rock" && choice2 == "paper"|
            choice1 == "paper" && choice2 == "scissor" |
            choice1 == "scissor" && choice2 == "rock" ) {
                return "Machine wins this time";
        }

        else if(choice1 == "paper" && choice2 == "rock"|
                choice1 == "scissor" && choice2 == "paper"|
                choice1 == "rock" && choice2 == "scissor"){ 
                    return "You won!";
        }
    }
        console.log("User choice: "+ uOptions);
        console.log("Computer choice: "+ computerChoice);
        compare(uOptions, computerChoice);