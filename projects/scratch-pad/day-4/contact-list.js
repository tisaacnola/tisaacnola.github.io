// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
   
   // return an object 
  return  { 
      id,       // when key and value have the same name we only need one.
      nameFirst,
      nameLast
    };

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: l => contacts.length,
        
        addContact: c => contacts.push(c), // arrow function to pust new contacts
        
        findContact: f => {
            for(let i = 0; i <= contacts.length - 1; i++){ // search the indexed list
               for(let key in contacts[i]){ // searches the object 
                        // if object.nameFirst + object.nameLast === fullName return contact otherwise undefined.
                  return `${contacts[i].nameFirst} ${contacts[i].nameLast}` === f ? contacts[i] : undefined;
               } 
            }
        },
        removeContact: c => {
        for(let i = 0; i <= contacts.length - 1; i++){ // searches the indexed list
            for(let key in contacts[i]){ // searches the object
                if(contacts[i] === c) contacts.splice(i,1); // removes object if its a match at the index
             }
        }
        },
        printAllContactNames: p => {
            let names = []; // container to hold names
            for (let i = 0; i <= contacts.length - 1 ; i++) { // loop forward
                names[i] = `${contacts[i].nameFirst} ${contacts[i].nameLast}`; // assigns each index witn the first and last name of the current object
            }
            return names.join('\n'); // Joins array with a new line after each
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
