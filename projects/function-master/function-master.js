//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  let objValues = []; // create a container to hole the new values
  for(let key in object){
      objValues.push(object[key]); // pushes values in to the array
  }
  
  return objValues; // returns the new array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let key2str; // will be use to build the string
    for(let key in object){
        if(key2str === undefined){ // 
            key2str = key; // assigns the first key to the string
        } else {
            key2str += ` ${key}`; // adds each key with a space
        }
    }
    return key2str; // returns the string

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let val2str = []; // create a container to hold the  values
    for(let key in object){
        if(typeof object[key] === 'string') // checks if the value is a string
        val2str.push(object[key]); // pushes value into the array
    }
    return val2str.join(' '); // joins the array into a string with a space
    
    
   
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
     // Must check to see if it is an array, null, date first because they all will return 'object' using typeof
   return typeof(collection) !== 'object' // checks to see if its not an edge case first
     ? false
     : Array.isArray(collection) // D.R.Y.
     ? 'array'
     : collection === null // then if it is a null
     ? false 
     : collection instanceof Date // then if it is a date
     ? false
     : 'object'; // if all else fails
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1); //changes the first char to uppercase and adds the rest of the string
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
       var str = string.toLowerCase().split(' '); // lowercases the whole string and splits it by the spaces into an array
        
        
           for (var i = 0; i < str.length; i++) { // loops over the array
        
              
               str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1); // changes each word at the zero index to capitals and concatanates the rest of the string. 
               
             
           }
           
           return str.join(' '); // joins array back into a string and then seperates words with a space
           
        }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`; // use the capitalizeWord function on the object's name
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`; // Use capitalizeWord on the objects name and species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // if the object has no noises array or if that array has no length return the first condition, if not the the second will return a string of noises
   return !object['noises'] || !object['noises'].length ? 'there are no noises': object.noises.join(' ');  
     
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
     // check to see if 'word' exists in 'string'. If so, index location of the word will be returned
      return string.indexOf(word) > -1 ? true : false;     
                               
    

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);  // use push method to add name argument to the friends array in the object
    return object;                      
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   if (object.friends){                                            // check if object passed in as argument has a friends element
        for (let i = 0; i < object['friends'].length; i++) {            // if so, iterate over discovered friends array
            if (object.friends[i] === name) {                       // if name arguement matches any value from friends array:
                return true;                                            // return true
            }
        }
    }
    return false;   
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
     const nonFriend = [];
     
     //loops through each index
     for(var i = 0; i < array.length; i++){
         
         //check if name is in friends list
         //if the friend name isnt there add it to the list
         //also check if the name is not the object prop
         if(name !== array[i].name && !array[i].friends.includes(name)){
             nonFriend.push(array[i].name);
         }
         
     }
     
     return nonFriend;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // updates/creates a key and assigns it a value
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for(let i = 0; i < array.length; i++){
        //loops through array length 
        
        //if the object has the propery within the index value
        if(object.hasOwnProperty(array[i])){
            
            //deletes the indexed value
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let noDup = []; // creaete a container to hold new values
    for(let i = 0; i <= array.length - 1; i++){ // loop over the array
        if(!noDup.includes(array[i])){ // check if element is already in array
            noDup.push(array[i]); // if not pushes the element into it
        }
    } return noDup; //returns an array

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}