//DOM Document Object




function loggeate(event){
    event.preventDefault();
    let h1 = document.querySelector("#h1");
    h1.innerHTML = "incorrect password";
    let email = document.querySelector("form-email");
    email.innerHTML = "type email again";
    let password = document.querySelector("form-password");
    password.innerHTML = "type email again";

}

let button = document.querySelector("#submit");
button.addEventListener("click", loggeate);