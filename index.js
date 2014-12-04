"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var options = ['http://www.thedailydogblog.com/', 'http://www.alfiesblog.com/entlebucher-mountain-dogs-tips-training-humans/top-dog-blogs/', 'http://ohmydogblog.com/', 'http://campcookstown.com/dog-blogs/', 'http://herdogblog.com/', 'http://www.dogstardaily.com/blogs', 'http://www.lifewithdogs.tv/category/blog/','http://nodogaboutit.wordpress.com/','http://www.allthingsdogblog.com/']

function random_post() {
	
    var random_move
    random_move = Math.random() * options.length;
    random_move = Math.floor(random_move);
    return random_move;
    document.getElementById('response').innerHTML = random_post();
}
