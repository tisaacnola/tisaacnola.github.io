/**
 * STRING MANIPULATION
 * 
 * 0. Strings can be manipulated with operators and methods.
 * 
 */
 
/**
 * 1. Operators
 * (+) - will concatenate strings together
 * (+=) - will concatenate and assign a string to an existing string variable
 */
let goat = 'MJ';
let statement =  goat + " is the Greatest of All Time!"; 
console.log(statement); // prints "MJ is the Greatest of All Time!" 

let greeting = "Hello";
greeting += " World!";
console.log(greeting);// prints "Hello World!"


/**
 * 2. Methods
 * There are numerous methods that can act on a string.
 */


// charAt() - returns character at a specific location
console.log(greeting.charAt(0)); // prints H

// toUpperCase() - coverts a string to uppercase letters
console.log(greeting.toUpperCase()); //  prints "HELLO WORLD!" 

// toLowerCase() - coverts a string to lower case letters
console.log(greeting.toLowerCase()); // prints "hello world!"

// split(seperator) - coverts a string to an array by passing an optional seperator
console.log(greeting.split(' ')); // => prints ['Hello', "World!"]

// slice() - lets you select a part of a string
console.log(greeting.slice(0,5)); // prints "Hello"

// replace() - searches the string for a char or word and replaces it
console.log(greeting.replace(/Hello/,'Goodbye')); // prints "Goodbye World!"