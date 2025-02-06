//Declerative functions - canbe used in any order beforedefinition
helloOne()

function helloOne(){
    console.log('Hello one')
}

//Anonymos function - canbe used only after definition
// helloTwo() - won't work
var helloTwo = function(){
    console.log('Hello two')
}
helloTwo()

//ES6 function syntax - arrow function
var helloThree = () =>{
    console.log('Hello three')
}
helloThree()

//Function with arguments
function printName (name, lastName) {
    console.log(name + ' ' + lastName)
}
printName('Lucky', 'Smith')

//function with return

function multiplyByTwo (number) {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(4)
console.log(myResult)

//import function

import {printAge} from '../lessons/Helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../lessons/Helpers/printHelper.js'
helper.printAge(11)