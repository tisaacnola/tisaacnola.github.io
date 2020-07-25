/* OPERATORS
 *
 * 0. Allow us to perform a varity of actions including assignments, arithmetic, comparison,
 * and logic. Most are binary but some are unary and there is even a ternary operator.
 */
 
 
//Assignment Operators (=, +=, -=, *=, /=)

//Assigns (=) a value to a variable
var number = 30;
console.log(number); //prints 30

// Add to and Reassign (+=) 
console.log(number += 5); // prints 35

// Subtract from and Reassign (-=) 
console.log(number -= 5); // prints 30 

// Multiply by and Reassign (*=) 
console.log(number *= 5); // prints 150

// Divide by and Reassign (/=) 
console.log(number /= 5); // prints 30


//2. Arithmetic Operators (+, -, *, /, %)

// Addition (+)
console.log(4 + 10); // => prints 14

// Subtraction (-)
console.log(41 - 27); // => prints 14

// Multiplication (*)
console.log(2 * 7); // => prints 14

// Division (/) 
console.log(70 / 5); // => prints 14

// Modulo  (%)
console.log(29 % 15); // => prints 14


// 3. Comparison Operators (<, >, <=, >=, ==, !=, ===, !==)
// Introduces logic into our programming by evaluating to true or false

// Less than (<), Less than or Equal to (<=)
console.log(3 < 5); // => prints true
console.log(23 <= 23);  // => prints true

// Greater than (>), Greater than or Equal to (>=)
console.log(3 > 5); // =>  prints false
console.log(23 >= 24);  // => prints false

// Non Strict Equality and Inequality (==, !=)
// Will coerce type  to match values
console.log(2 == '2'); // prints true
console.log(2 != '2'); // prints false

// Strict Equality and Inequality (===, !==)
// Will not coerce type to match values
console.log(2 === '2'); // prints false
console.log(2 !== '2'); // prints true



// 4. Logical Operators
// Able to join multiple pieces of logic


// AND (&&) BOTH sides MUST BE TRUE in order for the expression to be true
console.log(1 < 2  &&   95 === 95);   // =>prints true
console.log(1 > 2  &&   95 <= 95);  // => prints false 

// OR (||) ONLY ONE SIDE needs to be TRUE, so that the whole expression will be true
let ben = { coins: 10,  age: 7};
if (ben.coins > 5  || ben.age  > 10) {
console.log("You may enter the gameroom!"); // prints to because ONE side is true
}


// 5. Unary Operators (!, typeOf,) only needs one operand
let champs = 5;

// typeof()  identifies the the datatype
console.log(typeof(champs)); // prints number

// Bang/NOT (!) produces the effect of negation
console.log(!(typeof(champs) === 'number')); // prints false because champs is a number


// 6. Ternary Operator (condition ? ifTrue : ifFalse) if/else alternative
console.log(1 < 2 ? true : false); 
