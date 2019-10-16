"use strict";

var x = 2;
while (x <= 65536) {
    console.log(x);
    x *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (allCones > conesBought) {
        allCones -= conesBought;
        console.log("Customer bought " + conesBought + " cones. There are " + allCones + " cones left in inventory.")
    } else if (allCones < conesBought) {
        console.log("Sorry. I cannot sell you " + conesBought + " cones. I only have " + allCones + " cones left in inventory.")
    } else {
        allCones -= conesBought;
        console.log("Yay! I can clock out! I sold all the cones in my inventory for the day!");
    }
}while (allCones > 0);
