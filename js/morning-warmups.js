// "use strict";

// Write a JavaScript function that will return the shopping cart object with the most oranges.

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

function mostOranges(carts) {
    var solution = [];
    var winner = carts[0];
    var winningI = -1;
    carts.forEach(function(cart, index) {
        if (cart.oranges > winner.oranges) {
            winner = cart;
            winningI = index;
        }
    });
    solution.push(winner, winningI);
    return solution;
}

console.log(mostOranges(shoppingCarts));

// Write a JavaScript function that will return the number 5, but only when passed the string ‘five’.

function convertStringToNumFive(five) {
    if (five === 'five') {
        return 5;
    }
}

console.log(convertStringToNumFive('five'), 5);
console.log(convertStringToNumFive('three'), undefined);
console.log(convertStringToNumFive('5'), undefined);

// Write FizzBuzz in JavaScript.

function fizzBuzz(num) {
    for(var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(100);

function countUp(x){
    for(var i = 1; i <= x; i++){
        console.log(i);
    }
    return "Done counting!";
}

// Write a JavaScript function that takes in floating point number, and returns the number rounded down. It should return false for all inputs that aren’t numbers.

function roundDownFloat(num) {
    if (typeof num === 'number' && !isNaN(num)) {
        return Math.floor(num);
    }
}

// console.log(roundDownFloat(3.14));

// Write a JavaScript function that takes in an input and returns true if the input is a string, at least 8 characters in length. It should return false for all other input.

function stringWithAtleastEightChar(str) {
    return typeof str === 'string' && str.length >= 8;
}

// console.log(stringWithAtleastEightChar(88888888));


// Write a JavaScript function that returns the quotient of two numbers, but only when passed two numbers. It should return false in all other cases.

function quotient(n, m) {
    if (typeof n === 'number' && typeof m === 'number') {
        return n / m;
    } else {
        return false;
    }
}

// console.log(quotient(21,7), 3);
// console.log(quotient(21,"7"), false);
// console.log(quotient("21",7), false);


// Write a JavaScript function returns the message, “Hello there, stranger.” Alert the return from this function. Refactor so that it returns “Hello there, “ concatenated to an argument. Prompt the user to input a string, call the function, and alert the return. Refactor so that the function has ‘stranger’ as a default value for the parameter.

// function helloThere(string = "stranger") {
//     return 'Hello there, ' + string + '.';
// }
// var promptedResponse = prompt('Input string, plox.');
// alert(helloThere(promptedResponse));

//end of wednesday 10/9 warmup.

//write a function that prompts a user for an input and returns true if the
// number is greater than 5

function greaterThanFive(){
    var userNumber = parseInt(prompt("Please enter a number"));
    return userNumber > 5;
}

// Write a JavaScript function returns true only when passed a positive, even number.

function isEvenPositiveNum(num) {
    return num % 2 === 0 && num > 0;
}

// console.log(isEvenPositiveNum(2));
// console.log(isEvenPositiveNum(5));
// console.log(isEvenPositiveNum(-8));
// console.log(isEvenPositiveNum(0));

function checkType(x){
    return typeof(x);
}
// Write a JavaScript function that returns the perimeter of a quadrilateral.
function perimeterQuadrilateral(s1,s2,s3,s4) {
    return s1 + s2 + s3 + s4;
}

// console.log(perimeterQuadrilateral(3, 2, 5, 7));

//Write a function that returns the area of a circle when passed the diameter
function areaCircleDiameter(d) {
    var radius = d / 2;
    return 3.14 * Math.pow(radius, 2);
}

// console.log(areaCircleDiameter(5));

// write a function that takes in a string and returns it upper-cased
function upperCase(string) {
    return string.toUpperCase()
}

// console.log(upperCase("Bill"));
// console.log(upperCase("pineapple"));
// console.log(upperCase("pIZza THymE"));

//write a function that concatenates 3 strings
function concatenateThree(a,b,c){
    return a + " " + b + " " + c;
}

// console.log(concatenateThree("Good", "Morning", "Deimos"));

function equilateralTriangleArea(num) {
    return triangleArea(num,num,num);
}

// console.log(equilateralTriangleArea(3));
// console.log(triangleArea(3,3,3));

function firstElement(arr) {
    return arr[0];
}

// console.log(firstElement([1,2,3,4]));

function sayHi(){
    return "Hi";
}

// console.log(sayHi());

function sayHello(name) {
    return "Hello, " + name + "."
}

// console.log(sayHello("David"));

function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// console.log(sum(2,2));
// console.log(sum(3,4));

//write function to find the area of a triangle
//this function takes in 3 parameters
function triangleArea(a,b,c){
    //this variable stores half the perimeter
    var half = (a+b+c)/2;
    //the area is the squareroot of this
    var area = Math.sqrt(half * (half-a) * (half-b) * (half-c));
    //function returns the area
    return area;
}
//console log to see the result
// console.log(triangleArea(5, 6, 7));

//write a function that accepts an array and returns the length of that array

function arrayLength(array){
    return array.length
}

// console.log(arrayLength([1, 2, 3, 4, 5]));



//write a function that accepts an array that has a length of 5. Console log each element of that array

function logArray(arrayInput){
    // console.log(arrayInput);
    console.log(arrayInput[0]);
    console.log(arrayInput[1]);
    console.log(arrayInput[2]);
    console.log(arrayInput[3]);
    console.log(arrayInput[4]);


}

// logArray([1, 2, 3, 4, 5])



// Write a function called createPersonObject that takes in a name (that is a string) and an age (that is a number) and returns a person object containing the name and age.



// function createPersonObject(name, age){
//     var personObject = {};
//     personObject.name = name;
//     personObject.age = age;
//
//     return personObject;
//
// }


function createPersonObject(name, age){
    return {
        name: name,
        age: age
    }
}

console.log(createPersonObject("Hannah", 50));




















