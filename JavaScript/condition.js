let age = 24;

if (age >= 18) {
  //code to be executed if condition true
  console.log("You can vote in election");
} else {
  //code to be executed if none of the above condition
  console.log("You cannot vote in election");
}

let brand = "Chakki";

if (brand == "Chakki") {
  console.log("Yes I have chakki atta");
} else {
  console.log("I have atta of different brand");
}

let trafficLight = "green";

if (trafficLight == "red") {
  console.log("Stop");
} else if (trafficLight == "yellow") {
  console.log("Slow down");
} else if (trafficLight == "green") {
  console.log("Go ahead");
} else {
  console.log("Invalid signal");
}

var number = 10;

if (number === 0) {
  console.log("Neither even nor odd");
} else if (number % 2 == 0) {
  console.log("The Given Number is an even number");
} else {
  console.log("The Given Number is an odd number");
}

let day = 5;

switch (day) {
  case 1: {
    // code to be executed
    console.log("Sunday");
    break;
  }
  case 2: {
    // code to be executed
    console.log("Monday");
    break;
  }
  case 3: {
    // code to be executed
    console.log("Tuesday");
    break;
  }
  case 4: {
    // code to be executed
    console.log("Wednesda");
    break;
  }
  case 5: {
    // code to be executed
    console.log("Thursday");
    break;
  }
  case 6: {
    // code to be executed
    console.log("Friday");
    break;
  }
  case 7: {
    // code to be executed
    console.log("Saturday");
    break;
  }

  default:
    break;
}

let isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Yes user has access to PW skills lab");
} else {
  console.log("User donnot have has access to PW skills lab");
}

isUserLoggedIn ? console.log("Yes") : console.log("No");



let isCoursePurchased = true;

isUserLoggedIn ? (
    isCoursePurchased ? console.log('Access grantd'): console.log('Access denied')
    
) 
: console.log('Not logged in!');


