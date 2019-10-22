
"use strict";

var updateMessage = function() {
    var newMessage = document.getElementById("message").value;
    var oldMessage = document.getElementById("output").append( " " +newMessage);
    // document.getElementById("output").innerHTML = "<br>" + oldMessage + newMessage;
    document.getElementById("skillz").setAttribute("class", "highlight");
};


document.getElementById("updateMessage").addEventListener("click", updateMessage);

var bananas = document.getElementsByClassName("banana");

var handler = function() {
    bananas[0].style.backgroundColor = randomColor();
}

for (var i = 0; i<bananas.length; i++) {
    var j = i;
    bananas[j].addEventListener("dblclick", handler)
}

