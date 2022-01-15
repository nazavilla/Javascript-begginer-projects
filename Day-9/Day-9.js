//Calculating tips
    //total
document.getElementById("submit").addEventListener("click", function(){
    
    let food = document.getElementById("food").value;
    //tip = 15% =0.15
    let tip = 0.15;
    //number of people
    let numberOfPeople = document.getElementById("numberOfPeople").value;
    //total     //round to 2 decimal place
    let total = (food * tip)/numberOfPeople;
//ADD MATH ROUND PLEASE
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("result").innerHTML = `$ ${total}`;

    console.log(total);
});