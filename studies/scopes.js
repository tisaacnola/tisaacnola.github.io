/**
 * SCOPES
 * 
 * 0. Scope refers to the space the a variable can access. There are two scopes global, which is visible throught the entire program
 * and local, which is visible with the block that it is scoped to.
 */
 
 // Local
     
    function favColor(string){
         
         var x = string; // x is locally scoped to this block
         console.log(x); //prints the string
         
     }
     favColor('Black'); // passes 'Black' as an argument and prints it to the console.
     
// Let/const are locally scoped to their blocks, while var variables are function scoped.
     
  // Global
     
     var favColor2 = 'Red'; // favColor is in the global scope.
      
      function print(string){
          
          console.log(string);// logs parameter to console
          
      }
      print(favColor2); //passes the global variable as the parameter for the function
  
// When global variables and function parameters have the same name, within the fuction we will access the parameter, but if in the global environment we will access the variable.
      
 