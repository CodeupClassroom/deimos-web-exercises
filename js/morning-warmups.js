// "use strict";


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

console.log(isEvenPositiveNum(2));
console.log(isEvenPositiveNum(5));
console.log(isEvenPositiveNum(-8));
console.log(isEvenPositiveNum(0));

function checkType(x){
    return typeof(x);
}
// Write a JavaScript function that returns the perimeter of a quadrilateral.
function perimeterQuadrilateral(s1,s2,s3,s4) {
    return s1 + s2 + s3 + s4;
}

console.log(perimeterQuadrilateral(3, 2, 5, 7));

//Write a function that returns the area of a circle when passed the diameter
function areaCircleDiameter(d) {
    var radius = d / 2;
    return 3.14 * Math.pow(radius, 2);
}

console.log(areaCircleDiameter(5));

// write a function that takes in a string and returns it upper-cased
function upperCase(string) {
    return string.toUpperCase()
}

console.log(upperCase("Bill"));
console.log(upperCase("pineapple"));
console.log(upperCase("pIZza THymE"));

//write a function that concatenates 3 strings
function concatenateThree(a,b,c){
    return a + " " + b + " " + c;
}

console.log(concatenateThree("Good", "Morning", "Deimos"));

function equilateralTriangleArea(num) {
    return triangleArea(num,num,num);
}

console.log(equilateralTriangleArea(3));
console.log(triangleArea(3,3,3));

function firstElement(arr) {
    return arr[0];
}

console.log(firstElement([1,2,3,4]));

function sayHi(){
    return "Hi";
}

console.log(sayHi());

function sayHello(name) {
    return "Hello, " + name + "."
}

console.log(sayHello("David"));

function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

console.log(sum(2,2));
console.log(sum(3,4));

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
console.log(triangleArea(5, 6, 7));