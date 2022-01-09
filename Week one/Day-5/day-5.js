//guess the number between 1 to 5

//prompt user
var userGuess = prompt("Guess a number between 1 and 10");

//using Math.random to chose one number 1-10
let number = Math.floor(Math.random() * 10);

//print userAnswer
console.log("You guessed: "+userGuess);

//correct or incorrect
if (number == userGuess){
    console.log("That's correct");
}
else{
    console.log("That's incorrect");
}