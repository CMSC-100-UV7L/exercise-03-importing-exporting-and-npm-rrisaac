const { v4: uuidv4 } = require('uuid');

// This function accepts first and last name and generates a unique ID
const generateUniqueID = (firstName, lastName) => {
    
    const uuid = uuidv4().split("-")[0]; // generate uuid using uuid package then trim first delimited id consisting of 8 characters

    const final = ""; // initialize empty string for readability

    // returns uuid consisting of lowercase first character of first name, last name, and the manipulated uuid
    return final.concat(firstName.charAt(0).toLowerCase(), lastName.toLowerCase(), uuid)
};


module.exports.generateUniqueID = generateUniqueID;