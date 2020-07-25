/**
 * CONTROL FLOW 
 * 0. Allows computers to make decisions by following true or false statements
 * 
 */

// 1. If statements
// Allow us to run a block of code provided a condition is true

var favAnimal = 'lion';

if (favAnimal === 'lion') {// Condition set is coerced to a boolean true or false value to determine if code block executes
  console.log('Roarrrrr!');
}

// 2. Else if statements
// Allow us to add more conditions to give more functionality and flexibility to our programs

if (favAnimal === 'goat') {// if the first condition in the initial if statement is false, we check the else if statement
  console.log('baaahhh');
} else if (favAnimal === 'lion') {// If there are multiple if else statements, the first condition corresponding to true will return
  console.log('RRRaRRr!');
} else if (favAnimal === 'dog'){
  console.log('woof');
}


// 3. Else statements
// Else statements allow us to declare a default case to run if all if and else if statements are false
if (favAnimal === 'snake') {
  console.log('sssssss');
} else if (favAnimal === 'cow') {
  console.log('moo!');
} else {
  console.log('Roarrrrr!'); // prints to the console
}

// 4. Switch statements
// Switch statements evalute based on cases
// Switch statements are useful when you have multiple values of an expression that require the same code

let favColor = 'Black';

switch (favColor) {
  case favColor = 'Red':
    console.log ('Go Go Red Ranger');
   break; // The break keyword is used to exit a case
  
  case favColor = 'Blue':
    console.log('Go Go Blue Ranger');
    break;
    
  case favColor = 'Black':
    console.log('My mans!');
    break;
    
  default: // will run if none of the case are met.
    console.log('I don\'t like that ranger');
    break;
}
