//logical operators
/*
// AND 
console.log(true && true) //TRUE
console.log(true && false) //FALSE

// OR
console.log(true || false) //TRUE
console.log(false || true) //TRUE

// NOT
console.log(!true) //FALSE
console.log(!false) //TRUE
*/
console.log(6 !== 10) // is 6 not equeato 10? - true

var ageIsMoreThan18 = true
var isHealthy = false
var eligibilityForDriving = ageIsMoreThan18 || isHealthy
console.log('This citizen is eligible for DL: ' + eligibilityForDriving)