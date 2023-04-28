const { v4: uuidv4 } = require('uuid');
const { default: isEmail } = require('validator/lib/isemail');
const fs = require('fs');

// This function accepts first and last name and generates a unique ID
const generateUniqueID = (firstName, lastName) => {
    
    const uuid = uuidv4().split("-")[0]; // generate uuid using uuid package then trim first delimited id consisting of 8 characters

    // returns uuid consisting of lowercase first character of first name, last name, and the manipulated uuid
    return firstName.charAt(0).toLowerCase() + lastName.toLowerCase() + uuid
};

// This function accepts an array with the ff contents: first name (string), last name (string), email (string), age (number)

const addAccount = (array) => {

    // Check if all fields are present
    if (array.length == 4) {

        // First and Last name must be non-empty strings
        if (array[0].length !== 0 && array[1].length !== 0) {
            
            // Check email validity using validator package
            if (isEmail(array[2])) {

                // Age must be atleast 18
                if (array[3]>=18) {
                    
                    // initialize and assign placeholder of the string to be put in the file
                    const line = (array[0]+","+array[1]+","+array[2]+","+array[3]+","+generateUniqueID(array[0], array[1])+"\n");

                    // Using sa fs package, create file with the premade string input
                    fs.appendFileSync("users.txt",line);

                    // Reaching this point should return true
                    return true
                }
            }
        }
    }

    // Failing to do any of the above processes shall return false
    return false
}

module.exports.generateUniqueID = generateUniqueID;
module.exports.addAccount = addAccount;