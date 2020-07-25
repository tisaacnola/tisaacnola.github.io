/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * 3. There are three keywords that are used to declare variables var, let and const.
 * Modern Javascript uses ket and const to create variables while var is an older keyword for variable creation
 * 
 * 4. var and let are reassignable while const is not.
 * 
 * 5.var variables are function scoped while let and const variables are block scoped.  Scope refers to the space that 
 *  a variable can be accessed.
 */
 
 // 4.  Reassignablilty
 var goat = 'MJ';
 console.log(goat); // prints MJ
 goat = 'LeBron';
 console.log(goat); // prints LeBron
 
 let mvp = 'Kobe';
 console.log(mvp); // prints Kobe
 mvp = 'A.I.';
 console.log(mvp); // prints A.I.
 
 const impactful = 'LeBron';
 console.log(impactful); // prints LeBron
 // impactful = 'MJ'; // error not possible
 
 // 5. Scope
 function list(){
     var a = 1;
     let b = 2;
     const c = 3;
 }
 list();
 // None of the variables are accessible outside of the function list.  They are functon scoped.
 
 if(true){
     var e = 1;
     let f = 2;
     const g = 3;
 }
 //console.log(e, f, g);
 // only g is accessible here because variables declared with var are accessible in the global scope
 // if within a conditional statment.
 
 for(var i = 0; i < 30; i++){
     var j = 1;
     let k = 2;
     const l = 3;
 }
// console.log(j, k, l);
 // only j is accessible here because variables declared with var are accessible in the global scope
 // if within a loop statment.
 
 /**
  * 6. Hoisting refers to when variables are dragged to the top of the program so that the may be used during the program,
  * var varaibles are hoisted while let and const variables are not. Thus, var throws an undefined not reference error.
  */
  
  console.log(francophoneCountry); // prints undefined
  var francophoneCountry = 'Senegal';
  console.log(francophoneCountry); // prints Senegal
  
  //console.log(francophoneCountry2); // Throws a reference error
  //console.log(francophoneCountry3); // Throws a reference error
  
  let francophoneCountry2 = 'Haiti';
  const francophoneCountry3 = 'Congo';
  