let emailInput =document.getElementById("email");
let passwordInput=document.getElementById("password");
let loginBtn=document.getElementById("loginBtn");

loginBtn.addEventListener("click",

function()
{
    let email=emailInput.value.trim();
    let password=passwordInput.value.trim();
    let validEmail="admin@gmail.com";
    let validPassword="admin@123";
    if(email===validEmail && password ===validPassword){
        alert("Login Successfull");
        window.location.href="admin.html";
    }
    else{
            alert("Wrong Email or Password")
    }    
});
 function handleUpdateDriver(id){
    let fleet=fleets.find((f)=>f.id===id);
    if(!fleet)return;
    let newName=prompt
 }