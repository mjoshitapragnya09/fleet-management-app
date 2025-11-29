let emailInput =document.getElementById("email");
let passwordInput=document.getElementById("password");
let loginBtn=document.getElementById("loginBtn");

loginBtn.addEventListener("click",loginFunction);

function loginFunction()
{
    let email=emailInput.value.trim();
    let password=passwordInput.value.trim();
    let validEmail="admin@gmail.com";
    let validPassword="admin@123";
    if(email===" validEmail" && password===" validPassword"){
        alert("Login Successfull");
        window.location.href="admin.html";
    }
    else{
            alert("Wrong Email or Password")
    }    
}