/**
 * HOISTING
 * 
 * 0. Hoisting refers to the procress of a computer 'dragging' variables and functions to the top.  This allows them to be prior to appearing the the program.
 */

// 1. Variables
    // Variable declarations are hoisted, not the initializations.
    // Var variables can be accessed before they are initialized, however they will always be undefined until then.
    // Unlike like var, let/const variables cannot be accessed before they are initialized, and will always throu a reference error.
    
console.log(favPlayer); // results in undefined
// console.log(youngStar);  //throws a reference error

var favPlayer = 'B.I.';
const youngStar = 'Zion';

console.log(favPlayer); // prints B.I. 
console.log(youngStar); // prints Zion

// 2. Functions
    // Are hoisted to the top which allows then to be used before being declared.
    // When using function expressions the variable declaration will be hoisted not it's value.

theFuture(); // prints B.I. and Zion

function theFuture() {
    return `${favPlayer} and ${youngStar}`;
}

// 3. The JS Interpreter
// At the start of a program the JS scans over the code and hoist all variable declarations and functions to the top of the code.
   
   