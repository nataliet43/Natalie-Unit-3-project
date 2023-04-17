// Declare variables below to save the different sections (divs) of your story//
let optionOneButton = document.querySelector('.option-one');
let optionTwoButton = document.querySelector('.option-two');
let storyOpening = document.querySelector('.story-opening');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let Button = document.querySelector('.Button');
let clickme1 = document.querySelector('.click-me-1');
let clickme2 = document.querySelector('.click-me-2');
let optionOnescreen = document.querySelector('.option-one-screen');
let optionTwoscreen = document.querySelector('.option-two-screen');
//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
/*

button.onclick = function(){
  storyOpening.style.display = 'none';
}
*/
optionOneButton.onclick = function() {
  optionOnescreen.style.display = 'block';
  storyOpening.style.display = 'none';
};

optionTwoButton.onclick = function() {
  optionTwoscreen.style.display = 'block';
  storyOpening.style.display = 'none';
}
/*
clickme1.onclick = function(){
  optionOneScreen.style.display ='block';
  optionOneEnd.style.display = 'none';
}

clickme2.onclick = function(){
  optionTwoScreen.style.display ='block';
  optionTwoEnd.style.display = 'none';
}

*/

//
