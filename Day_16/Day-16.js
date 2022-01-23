

//WHALE TALK
//human phrase to be translated
var input = "Hello, human";
//vowls that exists
let vowels = ["a", "e", "i", "o", "u"];
//result after translations
let resultArray = [];

//iterate each of the letter of both arrays
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    //add the matching letters
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
    //double the vowl u
    if (input[i] === "u") {
      resultArray.push(input[i]);
    }
  }
}

//capitalize translation and join it to eliminate commas
resultArray = resultArray.join("").toUpperCase();
console.log(resultArray);
