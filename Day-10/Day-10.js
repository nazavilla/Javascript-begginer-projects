//Magic ball using switch

//user na,e
let userName = promot('Insert your name here');
console.log("Hello, "+userName);
//user question
let userQuestion = 'it the world ending?';
console.log(`user: ${userName}, question: ${userQuestion}`);
//random number
let randomNumber = Math.floor(Math.random()*7);
//set ball variable
let eightBall = '';

switch(randomNumber){
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  case 8:
    eightBall = 'Signs point to yes';
    break;
}
console.log(eightBall);
