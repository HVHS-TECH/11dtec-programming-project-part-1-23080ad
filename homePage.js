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

function askUserSeats() {
    userSeats = prompt("hello " + testName + ", please enter how many seats would like in your car" +
        "\nso that we can try and find a model that matches your reqirements?");
    alert(seatsPerCar[userSeats]);
}

function rentACar() {
    viewerName = askViewerName();
    userSeats = askUserSeats();
}