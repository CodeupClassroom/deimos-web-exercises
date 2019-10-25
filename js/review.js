// functions
// loops
// arrays
// objects


function sayHello() {
    console.log("Hello");
}

var sayHello = function() {
    console.log("Hello");
}

var fizzBuzz = function(lastNum) {
    for (var i = 1; i <= lastNum; i++) {
        if (i % 15 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
} // end of fizzBuzz
    
    
//fizzBuzz("another number");

CSS_COLOR_NAMES.forEach(function(color) {
    console.log(color);
});


var changeColor = function(){
    document.getElementsByTagName("body")[0].style.background = randomColor();
    document.getElementById("play").style.color = randomColor();
}
setInterval(changeColor, 2000);

var pets = [{
    name: "Lagritha",
    species: "dog",
    breed: "Catahoula",
    color: ["black", "orange", "white"],
    bark: function() {
        return "RUFF";
    }
},
{
    name: "Fluffy",
    species: "Tarantula",
    breed: "Pink Toe",
    color: ["pink", "black", "green"],
    legs: 8
},
{
    name: "Korra",
    species: "dog",
    breed: "German Shepherd",
    color: ["grey"] 
}];

// var pets = [lagritha,fluffy, korra];
    //  "Fluffy", "Korra", "Pocky", "Bean", "Snurgle", "Ruo", "Vermuli"];

pets.forEach(function(pet){
    document.getElementById("pets").innerHTML += "<li><h3>"+pet.name+"</h3></li>";
})

console.log(pets[0].name);
console.log(pets[0].bark());