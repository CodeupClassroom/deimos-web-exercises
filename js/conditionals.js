"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//1. I need a confirm to ask the user if they want to enter a number (if they dont want to enter a number game over)
//2. if they click confirm (we need a conditional) ask the user for a number (prompt)
//3. We need to check if this is a number or not a number
//4. If it is a number: even/odd, number +100, neg/pos
//5. if its not a number tell them its not a number

// var userConfirm = confirm("would you like to enter a number?");

// if(userConfirm){
	//true path

	// var userInput = prompt("Please enter a number.");
	//
	// console.log("The users number: " + userInput);
	//
	// //checking to see if the user number is a number
	// var isNumber = !isNaN(userInput);
	//
	// console.log("The user entered a number: " + isNumber);
	//
	// if(isNumber){
	// 	//true path - user has entered a number
	// 	var userNumber = parseFloat(userInput);
	//
	// 	var isEven = userNumber % 2 === 0;
	//
	// 	console.log("The users number is even: " + isEven);
	//
	// 	var evenMessage = (isEven) ? "Your number is even!" : "Your number is odd";
	// 	alert(evenMessage);
	//
	// 	alert(userNumber + 100);
	//
	// 	var posNegMessage = (userNumber >= 0) ? "Your number is positive." : "your number is negative";
	// 	alert(posNegMessage)
	//
	// } else {
	// 	alert("Hey thats not a number!");
	// }

// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color){
	var colorMessage;

	if(color === "blue"){
		colorMessage = "Wow, thats blue!";
	} else if (color === "red"){
		colorMessage = "Red is the color of my codeup cup ... most of the time!";
	} else if (color === "cyan"){
		colorMessage = "Cyan is a lame blue";
	} else {
		colorMessage = "I dont know that color!";
	}

	return colorMessage;
}

// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function analyzeColorSwitch(color){

	switch (color) {
		case "blue":
			return "blue is the color of the sky";
		case "red":
			return "strawberries are red";
		case "cyan":
			return "I dont know anything about cyan";
		default:
			return "You're just making up colors now!!!!";
	}

}
//
// console.log(analyzeColorSwitch("blue"));
// console.log(analyzeColorSwitch("red"));
// console.log(analyzeColorSwitch("cyan"));
// console.log(analyzeColorSwitch("green"));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("Please enter a color");
// alert(analyzeColorSwitch(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalPrice){
	var discountRate = 0;

	switch (luckyNumber) {
		case 0:
			discountRate = 0;
			break;
		case 1:
			discountRate = .1;
			break;
		case 2:
			discountRate = .25;
			break;
		case 3:
			discountRate = .35;
			break;
		case 4:
			 discountRate = .50;
			 break;
		case 5:
			discountRate = 1;
			break;
	}

	return totalPrice - (totalPrice * discountRate);

}

// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);

var totalBillPrompt = parseFloat(prompt("What was your total bill?"));

var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);

alert("Your lucky number is: " + luckyNumber + " Your total bill was: " + totalBillPrompt + " Your discount total is: " + finalAmount);
