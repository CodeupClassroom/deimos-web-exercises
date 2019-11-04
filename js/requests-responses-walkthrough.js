$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");


    var car = {
        make: "Hyundai",
        model: "Santa Fe",
        year: 2020
    };

    JSON.stringify(car);


    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */

    // console.log($.ajax("https://hookb.in/Z2Zkbda7R6U1MVqkbNDJ?username=Bob"));

    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */

    // var person = {
    //     type: "POST",
    //     data: {
    //         first: "Jesse",
    //         last: "Pinkman",
    //         location: "unknown"
    //     }
    // };

    // console.log($.ajax("https://hookb.in/Z2Zkbda7R6U1MVqkbNDJ", person));

    /*
     * TO DO: Refactor the first example using a GET request object instead of
     * appending a query to the url.
     */

    // var bob = {
    //     type: "GET",
    //     data: {
    //        username: "Bob"
    //     }
    // };
    //
    // console.log($.ajax("https://hookb.in/Z2Zkbda7R6U1MVqkbNDJ", bob));
    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

    $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
        console.log(data);
    });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */

    // var starWarsFilms = $.ajax("https://swapi.co/api/films");
    //
    // starWarsFilms.done(function(data){
    //     console.log(data);
    // }).fail(function(jqXhr, status){
    //     console.log("You've been blocked.");
    //     console.log(jqXhr);
    //     console.log(status);
    //     console.log("Something wrong with your request...");
    // }).always(function(){
    //     console.log("loading...");
    // });


    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
    var myBooks = $.ajax("../data/books.json");

    function onSuccess (data){
        console.log(data);
    }

    function onFail(jqXhr){
        console.log("Check your file path.");
    }

    function onAlways(){
        console.log("Looking for books...");
    }
    myBooks.done(onSuccess);

    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */

    myBooks.fail(onFail);

    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */

    myBooks.always(onAlways);

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */


    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */

    var newHope = $.ajax("https://swapi.co/api/films", {
        type: "GET",
        data: {
            "search": "A New Hope"
        }
    });

    newHope.done(function(data){
        console.log("The director of A New Hope is: " + data.results[0].director);
    });


    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */

    var forceAwakens = $.get("https://swapi.co/api/films", {
            "search": "The Force Awakens"
    });

    forceAwakens.done(function(data){
        console.log(data);
    });

    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */

    var canterburyTales = $.get("../data/books.json");

    canterburyTales.done(function(data){
        var theAuthor;
        for(var i = 0; i < data.length; i++){
            if(data[i].author === "Geoffrey Chaucer"){
                theAuthor = data[i].author;
            }
        }
        console.log(theAuthor);
    });

    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */

    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */

    // this variable stores our request

    function generateBooks(){
        var requestBooks = $.ajax("data/books.json");

        // once request is done.. do this
        requestBooks.done(function(data){

            console.log(data);

            // iterate over books.json (array of objects)
            $.each(data,function(index,book){

                var content = "<h2>";
                content += book.title;
                content += "</h2>";
                content += "<h4>";
                content += book.author;
                content += "</h4>";

                // log each book title
                console.log(book.title);
                $('#main').append(content);
            });
        });

        requestBooks.fail(function(data){
            console.log("Something went wrong.");
        });
    }

    // call the function to generate data on page load
    generateBooks();
    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button that refreshes the contents of your html
     * without refreshing the page.
     */

    // event listener on refresh button
    $('#refresh').click(function(){
        // reset my html to empty string
        $('#main').html("");
        // call function to append new book list
        generateBooks();
    });

});