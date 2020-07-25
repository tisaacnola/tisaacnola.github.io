/**
 * DATATYPES;
 * 
 * 0. There are two datatypes in JavaScript: primitive and complex.  Primitive datatypes are numbers
 * null, undefined, string, and boolean values.  Complex datatypes are arrays, object and functions.
 * Primitive datatypes are immutable and copy by value while complex data types aggragate data
 * and are copy by reference.
 */
 
// 1. Numbers can be intergers, negatives, and decimals
var num = 3;
console.log(num); // prints 3

// 2. Strings are text
var string = "Hello World!";
console.log(string); // prints Hello World!

console.log(string[0]);// strings are indexed like arrays => prints H


console.log(string.length); // Using .length shows us how many characters are in the word => prints 12


// 3. Boolean - true or false/on or off/yes or no
let true1 = num < string.length;
let false1 = num > string.length;
console.log(true1); //prints true
console.log(false1); // prints false


//4. Arrays - Zero indexed list
var favPlayers = ["B.I.", "Zo", "Zion"]; // These items can be accessed using bracket notation

console.log(favPlayers[0]); // prints B.I.
console.log(favPlayers[1]); // prints Zo
console.log(favPlayers[2]); // prints Zion
console.log(favPlayers[favPlayers.length - 1]); // prints Zion


favPlayers[2] = "LeBron"; // They can also be changed using bracket notation // replacing Zion with LeBron
console.log(favPlayers); // prints ["B.I.", "Zo", "LeBron"];
console.log(favPlayers.length); // The .length property will tell us how many items are in an array // => prints 3

// Array methods
favPlayers.unshift("Kobe"); // Kobe will be added to the front of the array and  all others will shift 1 index up.
favPlayers.pop(); // Takes off LeBron the end of the array.
favPlayers.shift(); // Kobe will be removed from the front of the array and all others will shift down 1 index.
favPlayers.push("Zion"); // Zion will be added to the end of the array.


// 5. Objects are collection of key/value pairs that are called properties
let dog = { // written in curly brackets 
    // key: value pairs
    name: "Stitch", 
    breed: "French Bulldog",
    age: 1
};

// Objects can be accessed using dot notation and bracket notation
console.log(dog.name);// prints Stitch
console.log(dog['name']) ;// prints Stitch

// Information can be added the same way
dog.friends = ["Lilo", "Laura"];  // adds the array with a key of friends
console.log(dog);  // { name: "Stitch", breed: "French Bulldog", age: 1, friends: ["Lilo", "Laura"]}


// 6. Functions - reuseable blocks of code (First Class Objects) can be passed as arguments in other functions
function add(num1, num2) {
    return num1 + num2;
}

add(1, 9); // returns 10
console.log(1 + add(1, 8)); // prints 10


// 7. Undefined - prints when a variable has not be defined
var age;
console.log(age); // prints undefined 
age = 27;
console.log(age); // prints 27

// 8. Null - a value that the user has intentional set
var contacts = ['bill', 'ben', 'bob']; 
contacts[2] = null;
console.log(contacts); // prints ['bill', 'bob', null]

// 9. NaN - 'Not a Number' occurs when we try to perform actions like adding a letter to a number.
 console.log('A' / 2); // prints NAN
 
 
// 10. Infinity and Negative Infinity
// In javascript, infintiy and negative infinity are constants used to represent the highest and lowest possible numerical values.
// Evaluating a mathematical expression whose limit would evaluate to infinity would result in a value of infinity in javascript.

console.log(3 / 0);                   // Infinity
console.log(-3 / 0);                  // -Infinity
console.log(Infinity + Infinity);     // Infinity


// 11. Difference between primitive and complex datatypes

// Primitve values are immutable, cannot be larger than 8bytes and copy by value
// Complex values are mutable, can be of indefinite size and  copy by reference.


// 12. Copy by value vs. Copy by reference
// Primitive values are copied by value, while complex values are copied by reference
/* Copy by value means that a variable being assigned any primitive value 
simply copies the primitive value. The value changing later will have no 
effect on the copied value */

var favNum= 3;
var a = favNum;

console.log(favNum);
console.log(a);

favNum = 15;

console.log(favNum); // prints 15
console.log(a);     // is still equal to 3

/* Copy by reference means that a variable being assigned a complex value 
and refers to the same 'object'. If the value changes, it will update all 
references to that value */

var champ = {
  name: 'Tre'
};

var prez = champ;

prez['name'] = 'Laura';

console.log(champ); // prints Laura because the champ and prez point to the same object
