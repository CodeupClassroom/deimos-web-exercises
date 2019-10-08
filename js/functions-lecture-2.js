// (function(){

var dog = "Bean";

function bark(){
    var dog = "Rice";
    return dog + " says bark.";
};

console.log(dog);
console.log(bark());


var x = 1;
var z = 3;

function addThree(){
    var x = 4;
    var y = 5;
    var z = 6;
    return x + y + z;
}

console.log(addThree());
console.log(x);
console.log(z);
console.log(y);

// (function (){
// //    write everything inside of this IIFE
//
// })();
// })();