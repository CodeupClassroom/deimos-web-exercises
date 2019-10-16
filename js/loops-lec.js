"use strict";
/*
* WHILE LOOPS
*/

//initialization
var i = 10;

while(i > 0){
    console.log(i);
    i--;
}
console.log("Loop is done");

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// while(i <= 90){
//     console.log(i+=10);
// }

// 2. Create a while loop that counts backwards from 50 - 1

var x = 50;

while(x >= 1){
    console.log(x);
    x--;
}

var myQuestion;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?

// while(!myQuestion){
//     myQuestion = confirm("Would you like to exit?");
// }


/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

do{
    myQuestion = confirm("Would you like to exit?");
}while(!myQuestion);

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"

do{
    var myColor = prompt("Your favorite color?");
}while(myColor !== "blue");

// 6. Refactor question 1 using a do-while loop.

do{
    console.log(i+=10);
}while(i < 100);

/*
* FOR LOOPS
*/

function countFrom(x){
    for(var j = x;j <= 100;j++){
        console.log(j);
    }
    return "Done counting!";
}

var randomColors = ["red","orange","yellow","blue","green"];

    for(var y = 0;y < randomColors.length;y++){
        if(y % 2 === 0){
            console.log(randomColors[y]);
        }
    }

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

for(var z = 0;z < myArray.length;z++){
    console.log(myArray[z]);
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

// Version 1
for(var s = 1;s < 101;s++){
    if(s %  15 === 0) console.log("FizzBuzz");
    else if(s % 5 === 0) console.log("Buzz");
    else if(s % 3 === 0) console.log("Fizz");
    else console.log(s);
}

//Version 2 one line
for(var s = 0; s < 100;)console.log((++s%3 ? '':'fizz') + (s%5 ? '':'buzz') || s);

// 9. Refactor question 1 using a for-loop

for(var b = 100; b > 1; b--){
    if(b === 10){
        console.log("this is: " + b);
        continue;
    }
    console.log(b);
}


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.

