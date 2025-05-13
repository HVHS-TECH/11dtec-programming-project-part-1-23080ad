//Title

//Variables
let seatsPerCar = ["so you dont want a car?","a","b","c"];

/*****************************
Main code
*****************************/
console.log("Running homePage.css");


/***************************** 
Functions 
*****************************/
function askViewerName(){
    viewerName = prompt("What is your name friend?")
}

function askUserSeats (){
    userSeats = prompt("how many seats would like in your car?");
     alert(seatsPerCar[userSeats]);
} 

function rentACar(){
    viewerName = askViewerName ();
    userSeats = askUserSeats ();
}