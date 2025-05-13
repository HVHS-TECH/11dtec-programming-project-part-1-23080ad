//Title

//Variables


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
    userSeats = ["a","b","c"];
    let choice = prompt("");
}

function rentACar(){
    viewerName = askViewerName ();
    userSeats = askUserSeats ();
    alert(userSeats[choice]);
}