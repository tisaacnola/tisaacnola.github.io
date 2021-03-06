/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (array,string){// create a function search, parameters are array, for your animals, and string for what the animal is.
    for (var i = 0; i<= array.length-1; i++){//Using a for loop to loop over our entire array, and incrementing by 1 each loop. 
        if(array[i].name === string){//Using a conditional to return a value for our search engine. 
            return array[i];//return our animal object, with the information from our loop
        }
    }return null; //Before returning null, we are wanting our loop to fully be gone through. If our name is not in the entire loop, we will return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals,name,replacement){//create a function called replace, parameters are animals, name and replacement
//an array of animals, a string of animals name, object representing the replacement animal for search
 for (var i = 0; i<=animals.length -1; i++){// Using a for loop to loop over our entire array, and increment by 1 each loop.
     if(animals[i].name === name){// If the name of the animal from loop strictly equals name string of animals
         animals[i] = replacement;// set animals name = to replacement 
     }
 }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals,name){//Create a function called remove. Parameters, animals and name 
//An array of animals, and a name string of which you want to search 
    for( var i = 0; i<= animals.length - 1; i++){// Using a for loop to loop over our entire array, and increment by 1 each loop.
        if(animals[i].name === name){//If the name of the animal from loop strictly equals name string of animals
            animals.splice(i,1);//remove at index i, 1 item, using splice method 
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals,animal){//Create a function called add. Parameters are animals and animal. 
//An array of animals and an object to be added to animal.
if(animal.name.length > 0 && animal.species.length > 0){//If Length of animal name is > 0 and animal species length > 0, run through for loop.
    for( var i = 0; i<= animals.length -1; i++){//Using a for loop to loop over our entire array, and increment by 1 each loop.
        if(animals[i].name === animal.name){//If name of animal already exists, then fucntion returns.
            return;
        }
    }
    animals.push(animal);//Adding animal object into animals array 
    return;
}else{//failsafe
    return;
}
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
