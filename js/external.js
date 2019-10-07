"use strict";

// console.log("Hello from external JavaScript!");
//
// alert("Welcome to my website.");
//
// var color = prompt("What is your favorite color?");
//
// alert('Coolio, ' + color + " is a rad color, my Dudeson™.");

// 3.1 Blockbuster, Sort of...

var lMRental = parseInt(prompt("Hey, how long would you like to rent The Little Mermaid?"));

var bBRental = parseInt(prompt("Hey, how long would you like to rent Brother Bear?"));

var hercRental = parseInt(prompt("Hey, how long would you like to rent Hercules?"));

alert("Alrighty, your total comes out to $" + (lMRental + bBRental + hercRental) * 3 + ".");

// 3.2 Independent Contractor
var googPay = parseInt(prompt("Working for Google pays $400/hr. How many hours of work was done at Google?")) * 400;

var fBPay = parseInt(prompt("Working for Facebook pays $350/hr. How many hours of work was done at Facebook?")) * 350;

var zonPay = parseInt(prompt("Working for Amazon pays $380/hr. How many hours of work was done at Amazon?")) * 380;

alert("Congrats, looks like you are going to be taking home: $" + (googPay + fBPay + zonPay) + ".");

// 3.3 Student Enrollment

var roomInClass = confirm("Is there room in Dr. Docter's Med 101 - Doctor's Studies?");

var studentHasRoomInSchedule = confirm("Does the student has a class at 8:30 AM?");

alert("Student signed up for class: " + (roomInClass && !studentHasRoomInSchedule) + ".");

// 3.4 Target Circle

var offerValid = confirm("Is the offer still valid?");

var howManyPurchased = parseInt(prompt("How many items are in the guest's cart?"));

var premiumMember = confirm("Is this customer a Kroger Plus Card Silver Special Awesome Sauce Member-rino?");

alert("Customer discount applied: " + (offerValid === true &&(howManyPurchased > 2 || premiumMember)) + ".");