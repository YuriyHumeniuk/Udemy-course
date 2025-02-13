
// Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank)
function isStringBlank (str) {
    if (str.length == 0 || str.indexOf(" ") > -1) {
        console.log("String is blank")
    } else {
        console.log("String " + str + " is NOT blank")
    }
}

isStringBlank("Yuriy ")
 
