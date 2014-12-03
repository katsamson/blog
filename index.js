"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var options = ['Our First Dog Clothing Post!', 'Our Second Dog Clothing Post!', 'Our Third Dog Clothing Post!', 'Our Fourth Dog Clothing Post!', 'Our First Dog Post!', 'Our Second Dog Post!', 'Our Third Dog Post!', 'Our Fourth Dog Post!', 'Our Fourth Dog Cooking Post!', 'Our Third Dog Cooking Post!','Our Second Dog Cooking Post!','Our First Dog Cooking Post!']

function random_post();
	var random_move;
    random_move = Math.random() * options.length;
    random_move = Math.floor(random_move);
    random_move = options[random_move];
    hold = random_move;
    return random_move;
    document.getElementById('response').innerHTML = random_post();
}

