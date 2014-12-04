"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

document.getElementById('Post').addEventListener('click', RP_button);

var hold;

function Random_Post() {
  var random_answer;
  random_answer = Math.random() * options.length;
  random_answer = Math.floor(random_answer);
  random_answer = options[random_answer];
  hold = random_answer;
  return random_answer;
}

var options = ['Post1', 'Post2', 'Post3', 'Post4'];

function RP_button() {
  var RandomPost = document.getElementById(Random_Post());
  RandomPost.scrollIntoView(true);
}

