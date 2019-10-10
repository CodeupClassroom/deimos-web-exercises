"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if(isAdmin){
	//show a specific navbar
// }

//Together: Send a 20% off coupon if its users birthday
// if(isBirthday){
	//send 20% coupon! Happy Birthday!
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = false;
//
// if(isRainy){
// 	alert("It's raining!");
// }

//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost < currentBalance){
// 	alert("you have enough money! Yay!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 5;
// if(numberOfLives === 0){
// 	alert("sorry game over!")
// }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing";
// if(weather === "snowing"){
// 	alert("its snowing!")
// }




//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 8;
// if(numberInput > 10){
// 	alert("number greater than 10!");
// }




//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = true;
//
// if(isAdmin){
// 	//show a specific navbar
// 	alert("User is admin!");
// } else {
// 	// show regular navbar
// 	alert("user is a regular user.");
// }



//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = false;
//
// if(isRainy){
// 	// show a raining icon or a dark blue background
// 	alert("its raining!");
// } else {
// 	//show a regular weather icon or a nice yellow background
// 	alert("have a nice day!");
// }




//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 5;
//
// if(numberOfLives === 0){
// 	alert("sorry game is over!");
// } else {
// 	alert("next level!")
// }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "snowing";
//
// if (weather === "snowing"){
// 	alert("its snowing");
// } else {
// 	alert("check back later for more details!");
// }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 5;
//
// if(numberInput > 10){
// 	alert("number greater than 10");
// } else {
// 	alert("number is less than 10")
// }



//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(numberOfLives){
// 	if(numberOfLives === 0){
// 		return "sorry game over";
// 	} else {
// 		return "next level!";
// 	}
// }

// function checkIfGameIsOver(numberOfLives){
// 	var returnMessage;
//
// 	if(numberOfLives === 0){
// 		returnMessage = "sorry game over";
// 	} else {
// 		returnMessage = "next level!";
// 	}
//
// 	return returnMessage
//
// }
//
// console.log(checkIfGameIsOver(6));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var age = confirm("Are you 13 years or older?");
//
// if(age === true){
// 	alert("You may proceed");
// } else {
// 	alert("you are not able to proceed!");
// }
//
//
//
// if(age){
// 	alert("You may proceed");
// } else {
// 	alert("you are not able to proceed!");
// }








// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "windy";
//
// if (weather === "snowing"){
// 	alert("its snowing!");
// } else if (weather === "raining"){
// 	alert ("its raining!");
// } else if (weather === "sunny"){
// 	alert("its sunny!");
// } else {
// 	alert ("have a nice day!");
// }


//Together: refactor the above statement as a function

// function checkWeather(weather){
//
// 	if (weather === "snowing"){
// 		alert("its snowing!");
// 	} else if (weather === "raining"){
// 		alert ("its raining!");
// 	} else if (weather === "sunny"){
// 		alert("its sunny!");
// 	} else {
// 		alert ("have a nice day!");
// 	}
//
// }
//
// checkWeather("sunny");




// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function checkTrafficLight(trafficLight){
// 	if(trafficLight === "green"){
// 		return "keep going";
// 	} else if (trafficLight === "yellow" ){
// 		return "slow down";
// 	} else if ( trafficLight === "red") {
// 		return "stop";
// 	} else {
// 		return "proceed with caution";
// 	}
// }


// function checkTrafficLight(trafficLight){
// 	var returnMessage;
//
// 	if(trafficLight === "green"){
// 		returnMessage = "keep going";
// 	} else if (trafficLight === "yellow" ){
// 		returnMessage = "slow down";
// 	} else if ( trafficLight === "red") {
// 		returnMessage = "stop";
// 	} else {
// 		returnMessage = "proceed with caution";
// 	}
//
// 	return returnMessage;
// }
//
// console.log(checkTrafficLight("yellow"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.


var userAge = 16;
var hasPermit = true;


//
// if(userAge < 15){
// 	alert("sorry you're not eligible for a permit!");
// } else {
// 	if(userAge === 15){
// 		alert("you can have a permit! yay!");
// 	} else if (userAge >=16 && hasPermit){
// 		alert('you can have a license');
// 	} else if (userAge >= 16 && !hasPermit){
// 		alert("sorry you need a permit first!");
// 	}
// }






// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = false;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = false;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "rainy";
//
// var weatherMessage;
//
// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
// console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!

// var weatherMessage = (weather === "rainy") ? "It's raining!" : "have a nice day";
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//Together:

var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else if (pizzaPreference === "ham"){
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}







var pizzaPreference = prompt("What kind of pizza do you like?");

// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
// 	case "ham":
// 		alert("I like ham");
// 		break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var weather = "rainy";

// switch (weather) {
// 	case "rainy":
// 		alert("its raining");
// 		break;
// 	case "sunny":
// 		alert("its sunny");
// 		break;
// 	case "snow":
// 		alert("its snowing!");
// 		break;
// 	default:
// 		alert("have a nice day");
// 		break;
//
// }


// function checkWeather(weather){
// 	var returnMessage;
//
// 	switch (weather) {
// 		case "rainy":
// 			returnMessage = "its raining";
// 			break;
// 		case "sunny":
// 			returnMessage = "its sunny";
// 			break;
// 		case "snow":
// 			returnMessage = "its snowing!";
// 			break;
// 		default:
// 			returnMessage = "have a nice day";
// 			break;
// 	}
//
// 	return returnMessage
//
// }




//TODO: Rewrite the intersection function from earlier as a switch statement.

// function checkTrafficLight(trafficLight){
// 	var returnMessage;
//
// 	if(trafficLight === "green"){
// 		returnMessage = "keep going";
// 	} else if (trafficLight === "yellow" ){
// 		returnMessage = "slow down";
// 	} else if ( trafficLight === "red") {
// 		returnMessage = "stop";
// 	} else {
// 		returnMessage = "proceed with caution";
// 	}
//
// 	return returnMessage;
// }
//
// console.log(checkTrafficLight("yellow"));


function checkTrafficLight(trafficLight){
	switch(trafficLight){
		case "green":
			return "keep going";
			break;
		case "yellow":
			return "slow down";
			break;
		case "red":
			return "stop";
			break;
		default:
			return "i dont know... or proceed with caution ... turn around"
	}

}

console.log(checkTrafficLight("purple"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

