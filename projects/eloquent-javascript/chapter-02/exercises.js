
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
  // loop over the line
  for (let line = "#"; line.length <= size; line += "#") // line length must be equal to the size
  console.log(line); // prints each line with an additional "#"

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let n = 1; n <= 15; n++) { // loop up to 15
  let output = ""; // defined as an empty string
  if (n % 3 == 0) output += "fizz"; // if divisisble by 3 will print fizz if not string will stay empty
  if (n % 5 == 0) output += "buzz"; // if divisisble by 5 will add buzz to the fizz or 'empty string'
  console.log(output || n); // if output is an empty string will print n 
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
let board = ""; // define the board size as an empty string.

for (let y = 0; y < size; y++) { // loops for the y direction
  for (let x = 0; x < size; x++) { // loops for the x direction
    if ((x + y) % 2 == 0) { // if x + y is even the board will have a empty space at that position
      board += " ";
    } else {
      board += "#"; // if not it will be a hash
    }
  }
  board += "\n"; // at the end of each iteration of the y loop a newline will be added
}

console.log(board); // prints the board
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
