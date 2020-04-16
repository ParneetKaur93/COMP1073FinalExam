// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');
 //change documant to document
//changed the clickityclick to click

submitButton.addEventListener('click', function() { 
	
let input = document.querySelector('input[type = "text"]');
//created input element
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main[0].appendChild(para);
  //paragraph to para
   //changed the main element
  body.setAttribute('class', 'meow');
  console.log('=^..^='); 
}); 