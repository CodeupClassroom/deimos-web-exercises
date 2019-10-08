(function (){
//function keyword
//function name
//any parameters
function sayHello(){
    return "Hello!";
}

function subtraction(x,y){
    return x - y;
}

function addition(x,y){
    return x + y;
}

function multiplication(x = 3,y = 2){
    return x * y;
}

console.log(multiplication(5,3));
console.log(multiplication(6));
console.log(multiplication(undefined,7));

function division(x,y){
    return x/y;
}

// var division = function(x,y){
//     return x/y;
// };

// var multiplication = function(x,y){
//   return x * y;
// };
//function call
//passing in an argument for parameter

//sayHello returns a string, which we pass into a variable
var helloViv = sayHello("Vivian");

//log out contents of variable helloViv
console.log(helloViv);

//myNumber is storing 5
var myNumber = subtraction(10,5);
var myOtherNumber = addition(4,3);

console.log(subtraction(myNumber, myOtherNumber));

// var honkHorn = function(){
//     return "beep beep";
// }

function honkHorn(){
    return "beep beep";
}

})();



