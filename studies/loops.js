/**
 * LOOPS
 * 
 * 0. We use loops to perform repetetive actions. This allows us to write cleaner and more efficient code.
 * Depending on the data type we have several ways to loop over datatypes.  This includes For Loops and while loops
 */

//For loops (start; stop; increment) can be used to loop over numbers, strings, and arrays

let myArray = [];


for (let i = 1; i < 11; i++){ // starting condition is 1, continue while i is less than 11 , increment i by one each loop
    myArray.push(i);
}

for (let i = 0; i < myArray.length; i++){ // Loops forwards over arrays
    console.log(myArray[i]);
}

for (let i = myArray.length - 1; i > 0; i--){ // Loops backwards over arrays
    console.log(myArray[i]);
}

//For-in loops over objects
 let superhero = {
  name: 'Static Shock',
  power: 'Electric manipulator',
  alias: true,
  age: 16
 };
 
 for (let key in superhero) {  //loops through the object and prints its values to console.
     console.log(superhero[key]);
 }
 
//While loops continue executing code while a condition is true.
let i = 11;
while(i > 1){
    console.log(i);
    i--;
}
