var greeting;
var d = new Date();
var hours = d.getHours();
console.log(hours)

function greetCustomer() {
  
  if ( hours > 17 ) {
    greeting = "Good Evening";    
  }
  
  else if ( hours > 12 ) {
    greeting = "Good Afternoon";
  }
  else {
    greeting = "Good Morning";
  }
  
  /* this is inside the function but out of the if statements*/
  
  document.getElementById("output").innerHTML = greeting;
  
}

greetCustomer();
