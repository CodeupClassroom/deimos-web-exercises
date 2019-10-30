// We've seen how much easier it is to write html and styling changes in jQuery. But now let's take a look at mouse events.

// With Vanilla JS, this would be done like this:

document.getElementById('importanter-circle').addEventListener('click', function() {
    this.style = 'background-image: url(img/europa.webp); background-size: cover;';
});

// With jQuery, we can do it even easier!

$('#important-circle').click(function() {
    $(this).css({
        'background-image': 'url(img/io.png)',
        'background-size': 'cover'
    });
});

// When we click on the smaller circle, the background image changes! Note that we can use the this keyword as well!

$('h1').dblclick(function(){
    $(this).html('The Bringer of Jollity')
});

$('.grandma').hover(function() {
    $(this).css('background-image','url(img/jupiter-coin.webp)');
}, function() {
    $(this).css('background-image','url(img/jupiter.webp)');
});

$('h1').mouseenter(function() {
    $(this).css({
        "color" : "rebeccapurple",
        "transition": "2s"
    }).html("jQuery Events are Fun!");
});

// $('#submit').click(function() {
//     var val = $('input').val().toLowerCase();
//     console.log(val);
//     if (val === 'pikachu') {
//         $('#picture-example').html('<img class="push" src="img/pikachu.gif" alt="pikachu gif">');
//     } else if (val === 'dragonite') {
//         $('#picture-example').html('<img class="push" src="img/dragonite.gif" alt="dragonite gif">');
//     } else {
//         $('#picture-example').html('<img class="push" src="img/you-were-close.png" alt="you were close">');
//     }
// });

// Notice how when we submit our form, it will fire a get request to the page. If we want the behavior we were looking for, we'll need to prevent the default behavior of a button in our form.

$('#submit').click(function(e) {
    e.preventDefault();
    var val = $('input').val().toLowerCase();
    console.log(val);
    if (val === 'pikachu') {
        $('#picture-example').html('<img class="push" src="img/pikachu.gif" alt="pikachu gif">');
    } else if (val === 'dragonite') {
        $('#picture-example').html('<img class="push" src="img/dragonite.gif" alt="dragonite gif">');
    } else {
        $('#picture-example').html('<img class="push" src="img/you-were-close.png" alt="you were close">');
    }
});