"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

function random_post();
	var random_move;
    random_move = Math.random() * options.length;
    random_move = Math.floor(random_move);
    random_move = options[random_move];
    hold = random_move;
    return random_move;
}
