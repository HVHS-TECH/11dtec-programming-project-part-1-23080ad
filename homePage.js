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

/*************************************************************************************
This asks the user how many seats they would like in their car,
and then reads the array to see what car is currently avaliable with that many seats.
*************************************************************************************/
function askUserSeats() {
    userSeats = prompt("hello " + testName + ", please enter how many seats you would like in your car" +
        "\nso that we can try and find a model that matches your reqirements?");
    alert(seatsPerCar[userSeats]);
}


/***************************************************************************************
This function asks the user if they like their car and stores their answer in a variable
***************************************************************************************/
function askCarReselect() {
    carReselect = prompt("does this car interest you?")
    if (carReselect == "yes"){
        alert("hello unc")
    }else if (carReselect == "no"){
        alert("Sorry, we dont have any more cars with that many seats. \nWould you like to rent a different car?")
    }//else{

   // }
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