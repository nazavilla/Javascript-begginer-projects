//Calculating your next birthday

let youBirthday = prompt("Enter your next birthday")
console.log("your birthday is on "+ youBirthday);

let birthday = new Date(youBirthday);

let day = 1000 * 60 * 60 * 24

let today = new Date();
console.log("today's date is "+today);

let remainingDays = birthday - today;


if (remainingDays <= -day) {
    console.log("Hope you had a nice Birthday");
}
else if(remainingDays <= 0){
    console.log("Happy Birthday");
}

let days = Math.floor(remainingDays / day);
console.log(days+" days until your birthday!");
