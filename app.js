'use strict'
function greeting() {
  let greeting = alert("Welcome to CARS4SALE.");
  answer();

}

function answer() {
  let answer = prompt("Would you like to shop with us? Yes or No");
  if (answer.toLowerCase() == "yes") {
    alert("Lets take a look at our inventory?");
  }
  else if (answer.toLowerCase() == "no") {
    alert("Are you sure?");
      
    
  }
  exit();
}


function exit() {
    let exit = alert("Thanks for Visiting");
    location.replace("https://www.javascripttutorial.net/");
}

  greeting();