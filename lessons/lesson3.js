//objects

var customer = {
    firstName: 'John', 
    lastName: 'Smith',
    cars: ["Volvo", "Kia", "Tesla"]
}
console.log(customer)
console.log(customer.firstName +" "+ customer.lastName) //concatination

//Dot notation
customer.firstName = "Mike"
console.log(customer.firstName)

//Bracket notation
customer['lastName'] = "Silver"
console.log(customer['lastName'])

console.log(`${customer.firstName} ${customer.lastName}`) //interpolation

//arrays - list of items
var car = ["Volvo", "Kia", "Tesla"]
car[1] = "BMW"
console,log(car[1])
console.log(customer.cars[2])
  