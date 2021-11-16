'use strict'

alert("Welcome to CARS4SALE.") 

let greeting = prompt("Would you like to shop with us? Yes/No");

console.log(greeting);

if(greeting.toLowerCase() === "yes"){
    window.confirm("Would you like to see our inventory?");
}
else if(greeting.toLowerCase() === "no"){
    alert("Thanks for Visiting");
}

 