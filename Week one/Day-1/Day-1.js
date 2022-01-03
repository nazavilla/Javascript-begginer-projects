///////1. How many seconds there are in an hour/////////////////////////////////////////
//function 
function secondsInHours(hours){
    //formula
    let seconds = hours * 3600;
    //return the new value of seconds
    return seconds;
}

//call function by  getting info from user.
secondsInHours(prompt("Write how many hours: "));
