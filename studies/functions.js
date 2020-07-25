/**
 * 
 * FUNCTIONS
 * Are made of 4 parts
 * 
 * 0. Name
 * 1. Arguments/parameters
 * 2. Body of code
 * 3. Return statement
 *
 * Parameters are placeholders for arguments in a function, while arguments are PASSED through a function 
 */


//---------Syntax---------//

// keyword  functionName (parameters){
  function myFirstFunction(paramOne, paramTwo){

    //-----body of code-----//

    return (paramOne + paramTwo); // return statement

  }
  myFirstFunction(1,3); // returns 4

 
    
//Declaration - creating the function

function myFunction(name, age){

  let user= {};
    user.name = name;
    user.age = age;

    return user;
}
myFunction(prompt('Name?'),prompt('Age?')); //prompt() allows user input
     
     


//Expressions - allow us to assign a function to a variable

var functionOne = function(name, age){

  let user = []; //create empty container for values
    
  user.push(name,age); //push values into array 
    
  console.log(`Hello ${user[0]}, you are ${user[1]} years old`); // Hello 'name', you are 'age' years old.
};

functionOne(prompt('Name?'),prompt('Age?'));



//CLOSURES
  /**
   * 0. Closure is any function that has access to variables outside its scope
   *    even afer it is returned
   * 
   * 1. Not all functions are closures
   * 
   * 2. A common misconception is that functions inside of another function are
   *    always a closure.
   */
  
    // 0 closures
      function name(){
        return 'Tre';
      }
    
    //1 closure because the inner function is calling the outer function's parameter
      function closureFunc(y){
        
        return (x) => {
          
          return x * y;
          
        };
      }