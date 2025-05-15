//Title

//Variables
let seatsPerCar = ["so you dont want a car?", "May I suggest the BAC Mono?", "May I suggest the MX5?", "We have no three seated cars sorry",
    "May I suggest the Mini?", "May I suggest the Falcon?", "We have no six seated cars sorry", "May I suggest the Outlander?", "May I suggest the Estima?"];
var seatsInCarCounter = 0;
var carReselect;
var viewerName;
var userSeats;
/*****************************
Main code
*****************************/
console.log("Running homePage.css");


/***************************** 
Functions 
*****************************/
function askViewerName() {
    viewerName = prompt("What is your name friend?");
    testName = viewerName;
}

/*************************************************************************************
This asks the user how many seats they would like in their car,
and then reads the array to see what car is currently avaliable with that many seats.
*************************************************************************************/
function askUserSeats() {
    userSeats = prompt("hello " + testName + ", please enter how many seats you would like in your car" +
        "\nso that we can try and find a model that matches your reqirements?");
    alert(seatsPerCar[userSeats]);
    seatsInCarCounter = userSeats;
}


/***************************************************************************************
This function asks the user if they like their car and stores their answer in a variable
***************************************************************************************/
function askCarReselect() {
    carReselect = prompt("does this car interest you?")
    
    if (carReselect == "yes") {
        alert("Perfect")
    } else if (carReselect == "no") {
        reselectConfirm = prompt("Sorry, we dont have any more cars with " + seatsInCarCounter + " seats. \nWould you like to rent a different car?");
    } else {
        alert("What are you saying?")
    }
   
    if (reselectConfirm == "no") {
        alert("thank you for shopping at Robs Rentals, we will notify you via email when we restock our " + seatsInCarCounter + " seater range.")
    } else if (reselectConfirm == "yes") {
        alert("wwwww")
    } else {
        alert("I really dont understand sorry.")
    }
}

/*************************************************************************************
This function activates when the rent a car button is pressed
and procedes to call afew other functions which determine the right car for the user.
*************************************************************************************/
function rentACar() {
    viewerName = askViewerName();
    userSeats = askUserSeats();
    carReselect = askCarReselect();
}