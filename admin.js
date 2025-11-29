let fleets =[];
let regNoInput =document.getElementById("regNo");
let categoryInput =document.getElementById("category");
let driverInput=document.getElementById("driver");
let isAvailableInput=document.getElementById("isAvailable");
let addFleetBtn=document.getElementById("addFleet");
let cardsCountainer=document.getElementById("cardsContainer");
let errorMsg=document.getElementById("errorMsg");
let categoryFilter=document.getElementById("categoryFilter");
let availabilityFilter=document.getElementById("availabilityFilter");
let clearFilterBtn=document.getElementById("clearFilter");
addFleetBtn.addEventListener("click",
function (){
    let regNo=regNoInput.value.trim();
    let category=categoryInput.value;
    let driver=driverInput.value.trim();
    let isAvailable=isAvailableInput.checked;
    if(!regNo||!category||!driver){
        errorMsg.textContent="All fields are required";
        return;
    }
    errorMsg.textContent="";
    let newFleet={
        id:Date.now(),
        regNo,
        category,
        driver,
        availability

    };
    fleets.push(newFleet);
    renderCards(fleets);
    regNoInput.value="";
    categoryInput.value="";
    driverInput.value="";
    isAvailableInput.checked="Available";    
});
function renderCards(data){
    cardsCountainer.innerHTML="";
    data.forEach(function(fleet){
        let card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
        <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png" alt="Vehicle Image"/>
        <p><b>Reg No:</b> ${fleet.regNo}</p>
        <p><b>Category:</b> ${fleet.category}</p>
        <p><b>Driver:</b><span class="driver name"> ${fleet.driver}</span></p>
        <p><b>Availability:</b><span class="status-text"> ${fleet.availability}</span></p>
        <button class="change-btn">Change Availability</button>
        <button class="delete-btn">Delete Vehicle</button>
        `;
        let updateBtn=card.querySelector(".update-btn");
        let changeBtn=card.querySelector(".change-btn");
        let deleteBtn=card.querySelector(".delete-btn");

        updateBtn.addEventListener("click", function(){
            handleUpdateDriver(fleet.id);
        });
        changeBtn.addEventListener("click", function(){
            handleUpdateDriver(fleet.id);
        });
        deleteBtn.addEventListener("click", function(){
            handleUpdateDriver(fleet.id);
        });
        cardsCountainer.appendChild(card);
    });
}