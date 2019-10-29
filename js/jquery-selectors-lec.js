"use strict";

$(document).ready(function() {
	//jQuery Docs ==> https://api.jquery.com/

	/**********************************************
	 * 		** General Selector Syntax **
	 *********************************************/
	// $('selector')




	/**********************************************
	 * 			** jQuery Methods **
	 *********************************************/

	// .html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.
	// .css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.


	/**********************************************
	 * 			** ID Selector **
	 *********************************************/
	// $('#some-id');

	// TODO TOGETHER: Select the contents/html of the id 'book-welcome' and set equal to the variable 'contents'. Console.log the contents
	// var contents = $("#book-welcome").html();
	// console.log(contents);


	// TODO TOGETHER: Change the background color of the id 'book-welcome'

	// $('#book-welcome').css('background-color', 'green');
	$('#book-welcome').css({'background-color':'green', 'color': 'yellow'});


	// TODO: Select the contents/html of the id 'book-bundle-one' and set equal to the variable 'bookBundle'. Console.log the contents
	// var bookBundle = $('#book-bundle-one').html();
	// console.log(bookBundle);


	// TODO: Change one css property of the id 'container'
	// $('#container').css('background-color', 'red');




	/**********************************************
	 * 			** CLASS Selector **
	 *********************************************/
	// $('.some-class');

	// TODO TOGETHER: Change the font size of all the .main-headings
	$('.main-headings').css('font-size', '60px');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/topupe/1/edit?js,output


	// TODO BONUS: Add additional class names to the page, and practice changing the css or viewing the contents



	/**********************************************
	 * 			** ELEMENT Selector **
	 *********************************************/
	//	$('tag_name')

	// TODO TOGETHER: Change the background color of all paragraph tags
	$('p').css('background-color', 'orange');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/gayir/1/edit?js,output


	// TODO BONUS: Add additional elements to the page, and practice changing the css or viewing the contents


	/**********************************************
	 * 			** MULTIPLE Selector **
	 *********************************************/
	// $("selector1, selector2, ...")


	// TODO TOGETHER: Change the background color of id 'mystery-genre' and 'book-bundle-three' to red

	// $("#mystery-genre, #book-bundle-three").css('background-color', "blue");



	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/qejeli/1/edit?output


	// TODO BONUS: Add additional elements to the page with ids and classes, and practice changing the css or viewing the contents


	/**********************************************
	 * 			** THE ALL Selector **
	 *********************************************/
	// $('*')
	// A common use is to put a border around every element to help see the layout of a page.

	// TODO TOGETHER: Create a border around all elements
	$('*').css('border', '1px solid red');



	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/fivucu/1/edit?js,output


});