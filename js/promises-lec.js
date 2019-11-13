// Promises represent an event that might or might not have happened yet. As such a promise can be in one of three states. Pending, resolved, and rejected.

/**
 * NOTE: In your development career it will be more important for you to know how to handle these three
 * states of a promise than to create a promise yourself.
 */

// To create a promise, keep in mind the following:

    const myPromise = new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve();
        } else {
            reject();
        }
    });

// The promise above is set up to resolve whenever the result of Math.random() is greater than .5, and will reject the promise if it is less than or equal to.

// It's worth noting we can handle the happy and sad paths similar to how we handled AJAX in jQuery. Instead of .done and .fail, however, we'll be using .then, and .catch.

myPromise.then(() => console.log("Yay!"));
myPromise.catch(() => console.log("Aw..."));

// Well, that's all fine and dandy, but let's try with a more robust example. Using promises and the .then method prevent use from having to enter what is known as 'Callback Hell.' Below I have the code of an example of making a call to the Pokemon API using AJAX in jQuery.


// Notice how when we submit our form, it will fire a get request to the page. If we want the behavior we were looking for, we'll need to prevent the default behavior of a button in our form.

// $('#submit').click(function(e) {
//     e.preventDefault();
//     $('#picture-example').html('<img src="img/Wedges-3s-200px.svg" alt="loading" class="kazuya">');
//     var val = $('input').val().toLowerCase();
//     if (val === 'dream team') {
//         $('#picture-example').html("");
//         $.ajax('https://pokeapi.co/api/v2/pokemon/dragonite').done(function (resp) {
//             $('#picture-example').append('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//             $.ajax('https://pokeapi.co/api/v2/pokemon/feraligatr').done(function (resp) {
//                 $('#picture-example').append('<img class="push over" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//                 $.ajax('https://pokeapi.co/api/v2/pokemon/nidoking').done(function (resp) {
//                     $('#picture-example').append('<img class="push over2" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//                     $.ajax('https://pokeapi.co/api/v2/pokemon/mamoswine').done(function (resp) {
//                         $('#picture-example').append('<img class="push over3" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//                         $.ajax('https://pokeapi.co/api/v2/pokemon/sylveon').done(function (resp) {
//                             $('#picture-example').append('<img class="push syl" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//                             $.ajax('https://pokeapi.co/api/v2/pokemon/sandslash').done(function (resp) {
//                                 $('#picture-example').append('<img class="push slash" src="' + resp.sprites.front_default + '" alt="' + val + '"><h4>These are David\'s favorite Pokémon.</h4>');
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     } else if (val === 'dark magician') {
//         $('#picture-example').html('<img class="dark-magician" src="img/dark-magician.png" alt="' + val + ' is not a Pokémon"><h4>The Dark Magician is not a Pokémon.</h4>');
//     } else if (val === 'kazuya') {
//         $('#picture-example').html('<img class="kazuya" src="img/kazuya.gif" alt="' + val + ' is not a Pokémon"><h4>Kazuya Mishima is not a Pokémon.</h4>');
//     }  else if (val === 'type: null' || val === "type:null" || val === 'typenull' || val === 'type null') {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/type-null').done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     } else if (val.split(" ").length >= 2) {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split(" ").join("-")).done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     } else {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split("'").join("")).done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     }
// });

// Notice in the above example, lines 36 - 53 feature requests to the API nested within other requests. This is done due to the Asynchronus nature of our requests. To have them not nested, would result in the code below.

// $('#submit').click(function(e) {
//     e.preventDefault();
//     $('#picture-example').html('<img src="img/Wedges-3s-200px.svg" alt="loading" class="kazuya">');
//     var val = $('input').val().toLowerCase();
//     if (val === 'dream team') {
//         $('#picture-example').html("");
//         $.ajax('https://pokeapi.co/api/v2/pokemon/dragonite').done(function (resp) {
//             $('#picture-example').append('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/feraligatr').done(function (resp) {
//             $('#picture-example').append('<img class="push over" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//             });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/nidoking').done(function (resp) {
//             $('#picture-example').append('<img class="push over2" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/mamoswine').done(function (resp) {
//             $('#picture-example').append('<img class="push over3" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/sylveon').done(function (resp) {
//             $('#picture-example').append('<img class="push syl" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//         $.ajax('https://pokeapi.co/api/v2/pokemon/sandslash').done(function (resp) {
//             $('#picture-example').append('<img class="push slash" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         });
//     } else if (val.includes('dark magician')) {
//         $('#picture-example').html('<img class="dark-magician" src="img/dark-magician.png" alt="' + val + ' is not a Pokémon"><h4>The Dark Magician is not a Pokémon.</h4>');
//     } else if (val === 'kazuya') {
//         $('#picture-example').html('<img class="kazuya" src="img/kazuya.gif" alt="' + val + ' is not a Pokémon">');
//     } else if (val === 'type: null' || val === "type:null" || val === 'typenull' || val === 'type null') {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/type-null').done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     } else if (val.split(" ").length >= 2) {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split(" ").join("-")).done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     } else {
//         $.ajax('https://pokeapi.co/api/v2/pokemon/' + val.split("'").join("")).done(function (resp) {
//             $('#picture-example').html('<img class="push" src="' + resp.sprites.front_default + '" alt="' + val + '">');
//         }).fail(function() {
//             $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
//         });
//     }
// });

// Notice how the pokemon appear out of order now? But if I wanted to avoid "Callback Hell" I can instead use a promise that I would get when I make a request using fetch.

$('#submit').click(function(e) {
    e.preventDefault();
    $('#picture-example').html('<img src="img/Wedges-3s-200px.svg" alt="loading" class="kazuya">');
    var val = $('input').val().toLowerCase();
    if (val === 'dream team') {
        $('#picture-example').html("");
        fetch('https://pokeapi.co/api/v2/pokemon/dragonite').then(resp => resp.json()).then(data => {
            $('#picture-example').append('<img class="push" src="' + data.sprites.front_default + '" alt="' + val + '">');
        })
            .then(() => fetch('https://pokeapi.co/api/v2/pokemon/feraligatr')).then(resp => resp.json()).then(data => {
            $('#picture-example').append('<img class="push over" src="' + data.sprites.front_default + '" alt="' + val + '">');
        })
            .then(() => fetch('https://pokeapi.co/api/v2/pokemon/nidoking')).then(resp => resp.json()).then(data => {
            $('#picture-example').append('<img class="push over2" src="' + data.sprites.front_default + '" alt="' + val + '">');
        })
            .then(() => fetch('https://pokeapi.co/api/v2/pokemon/mamoswine')).then(resp => resp.json()).then(data => {
            $('#picture-example').append('<img class="push over3" src="' + data.sprites.front_default + '" alt="' + val + '">');
        })
            .then(() => fetch('https://pokeapi.co/api/v2/pokemon/sylveon')).then(resp => resp.json()).then(data => {
            $('#picture-example').append('<img class="push syl" src="' + data.sprites.front_default + '" alt="' + val + '">');
        })
            .then(() => fetch('https://pokeapi.co/api/v2/pokemon/sandslash')).then(resp => resp.json()).then(data => {
            $('#picture-example').append('<img class="push slash" src="' + data.sprites.front_default + '" alt="' + val + '">')
                .catch(function() {
                    $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
                });
        });
    } else if (val.includes('dark magician')) {
        $('#picture-example').html('<img class="dark-magician" src="img/dark-magician.png" alt="' + val + ' is not a Pokémon"><h4>The Dark Magician is not a Pokémon.</h4>');
    } else if (val === 'kazuya') {
        $('#picture-example').html('<img class="kazuya" src="img/kazuya.gif" alt="' + val + ' is not a Pokémon">');
    } else if (val === 'type: null' || val === "type:null" || val === 'typenull' || val === 'type null') {
        fetch('https://pokeapi.co/api/v2/pokemon/type-null').then(resp => resp.json()).then(data => {
            $('#picture-example').html('<img class="push" src="' + data.sprites.front_default + '" alt="' + val + '">');
        }).catch(function() {
            $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
        });
    } else if (val.split(" ").length >= 2) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + val.split(" ").join("-")).then(resp => resp.json()).then(data => {
            $('#picture-example').html('<img class="push" src="' + data.sprites.front_default + '" alt="' + val + '">');
        }).catch(function() {
            $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
        });
    } else {
        fetch('https://pokeapi.co/api/v2/pokemon/' + val.split("'").join("")).then(resp => resp.json()).then(data => {
            $('#picture-example').html('<img class="push" src="' + data.sprites.front_default + '" alt="' + val + '">');
        }).catch(function() {
            $('#picture-example').html('<img class="greymon" src="img/metal-greymon.gif" alt="' + val + ' is not a Pokémon"><h4 class="pull">I\'m sorry. "'+ val +'" is not a Pokémon.</h4>');
        });
    }
});

// NOTE: You may have noticed I used a fetch before I changed the HTML. When I get back from a fetch request is the request itself, so I need to parse it into a readable stream (JSON). Here is a smaller example to illustrate:

fetch('https://pokeapi.co/api/v2/pokemon/mewtwo').then(data => console.log(data));

// fetch('https://pokeapi.co/api/v2/pokemon/mewtwo').then(response => response.json()).then(data => console.log(data));