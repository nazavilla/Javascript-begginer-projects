
//GENERATING A PASSWORD

//function
function passwordGenerator(){
//length
var maxNumber = 8;
//characters
var set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ!@#$%^&*1234567890";
//var password;
let password = " ";
//for loop
for (var i = 0, n = set.length; i < maxNumber; i++ ){
    password += set.charAt(Math.floor(Math.random() * n));
    }
//return password
return "password: "+password;
}


passwordGenerator();