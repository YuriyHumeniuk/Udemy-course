// Loops
//for (statement1; statement2; statement3){

//}
//fori loop
for (let i=0; i<5; i++) {
    console.log('Hi' + i)
}

var cars = ["Volvo", "Kia", "Tesla"]
//for of loop

for (let car of cars){
    console.log(car)
    if (car == "Kia"){
        break
    }
}

//ES6 synatx for each loop
cars.forEach(car=>
    console.log(car)
)