// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-tisaacnola");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *   // be inside tisaacnola.github.io
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = array => _.filter(array, customer => customer.gender === "male").length;

var femaleCount = array => _.reduce(array, (counter, customer) => {
    if(customer.gender === 'female'){ 
        counter++; 
    } 
      return counter;
    }, 0);

var oldestCustomer = array => _.reduce(array, (oldest, currentCustomer) => oldest.age <= currentCustomer.age ? currentCustomer : oldest).name;


var youngestCustomer = array => _.reduce(array, (youngest, currentCustomer) => youngest.age <= currentCustomer.age ? youngest : currentCustomer).name;

var averageBalance = array => _.reduce(array, (total, currentCustomer) => total += Number(currentCustomer.balance.slice(1).replace(",", "")),0) / array.length;


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
