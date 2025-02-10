// Write a JavaScript function to check if given string includes given symbol.
function stringScan (str, searchedSymbol) {
    if (str.indexOf(searchedSymbol) > -1) {
        console.log ("String " + str + " contains " + searchedSymbol) 
    } else {
        console.log ("String " + str + " DOESN'T contain " + searchedSymbol) 
    }
}

stringScan("1@qAz)", "<")
