//function to define user options with a parameter: userInput
function getUserChoice(userInput) {
  //switch as a conditional to replace if/else since there are many options
  switch(userInput){
    case  'rock':
      return userInput;
      break;
    case 'paper':
      return userInput;
      break;
    case 'scissors':
      return userInput;
      break;
  }
};
//computer choices
function getComputerChoice(pc){
 pc = Math.floor(Math.random() * 2);
  if (pc === 0){
    return 'rock';
  }
  else if(pc ===1){
    return 'paper';
  }
  else{
    return 'scissor';
  }
}


//determine winner function
function determineWinner(userChoice, computerChoice){
  //if else condition to determine who wins 
  if (userChoice === 'rock' && computerChoice === 'paper') 
  {console.log('Computer won!');}
  else if (userChoice === 'paper'&& computerChoice === 'scissors')
  {console.log('Computer won!');}
  else if (userChoice === 'scissors' && computerChoice  === 'rock')
  {console.log('Computer won!');}

  else if (userChoice === computerChoice)
  {console.log('It\'s a tie! ');}
  
  else{console.log('user won');}
}
function playGame(){
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice(0);
 determineWinner(userChoice, computerChoice);
}

playGame();

