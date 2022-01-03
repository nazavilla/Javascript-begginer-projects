//1 How many seconds there are in an hour

function secondsInHours(hours){
    //formula
    let seconds = hours * 3600;
    //return the new value of seconds
    return seconds;
}

//call function by  getting info from user.
secondsInHours(prompt("Write how many hours: "));





//2 Cilinder Volumen 

function CylinderVolumen(radius, height){

    /*Volumen of a cylinder Formula: 
        -where PI is calculated unsing the Math.PI method that way we do not have to define it. 
        -Radius elevated by 2, to obtain the area of an circumference. 
        -The area of a circumsference multiplied by the height is volume of a cylinder */
    
    const Volume = Math.PI * (radius * radius) * height;

    //return value of the volumen rounded to the result to one decimal using the toFixed method.
    return "The Volume of a cylinder is: " + Volume.toFixed(1);
}

//call function and ask the user for the 2 values using a prompt. 
CylinderVolumen(prompt("Please, insert radius of the cylinder:"), prompt("Please, insert the height  of the cylinder"));