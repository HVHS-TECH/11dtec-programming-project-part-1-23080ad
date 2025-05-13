//Title

//Variables
let seatsPerCar = ["so you dont want a car?", "May i suggest the BAC Mono?", "MX5", "We have no three seated cars sorry",
    "Mini", "Falcon", "We have no six seated cars sorry", "Outlander", "Estima "];

/*****************************
Main code
*****************************/
console.log("Running homePage.css");


/***************************** 
Functions 
*****************************/
function askViewerName() {
    viewerName = prompt("What is your name friend?")
    testName = viewerName;
}

// This asks the user how many seats they would like in their and then tells them what car is currently avaliable with that many seats
function askUserSeats() {
    userSeats = prompt("hello " + testName + ", please enter how many seats you would like in your car" +
        "\nso that we can try and find a model that matches your reqirements?");
    alert(seatsPerCar[userSeats]);
}

function askCarReselect (){
    carReselect = prompt("does this car interest you?")
}

function rentACar() {
    viewerName = askViewerName();
    userSeats = askUserSeats();
    carReselect = askCarReselect ();
}