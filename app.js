'use strict'
function greeting() {
  let greeting = alert("Welcome to CARS4SALE.");
  question();
}


function question() {
  let answer = prompt("Would you like to shop with us? Yes or No");
  if (answer.toLowerCase() == "yes") {
    alert("Lets take a look at our inventory?");
  }
  else if (answer.toLowerCase() == "no") {
    alert("Are you sure?");
  }
  

}

function surveyPrompt(){
  let proceed = confirm("would you like to take a survey question?");

  do
  
    
    if (proceed == false) {
      alert("are you sure");
      proceed = confirm("would you like to take a survey question? ");
    } else if (proceed = true) {
      alert("great");
      document.write('<img src="https://c.tenor.com/vJqyk5-JxY8AAAAC/happy-emoji.gif"/>');
      
    }
    while (proceed == false)




}

function survey(){
  let number = prompt("From 1 to 5. How likely are you to recomend our site to a friend");
  for(let smiley = 1; smiley <= number; smiley++ ){
      document.write('<img src="https://ih0.redbubble.net/avatar.1035593.140x140.jpg"/>');

     

    }

}

function exit(){
    let exit = alert("Thanks for Visiting");
    location.replace("https://www.javascripttutorial.net/");
}

 greeting(); 
 surveyPrompt();
 survey();
 exity();