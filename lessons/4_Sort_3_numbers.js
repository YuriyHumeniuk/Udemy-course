// Write a JavaScript function with conditional statement to sort three numbers.
//1 solution
function sort_numbers (n1, n2, n3) {
    if (n1 > n2 && n2 > n3){
        console.log(n3, n2, n1)
    } else if (n1 > n3 && n3 > n2){
        console.log(n2, n3, n1)
    } else if (n2 > n1 && n1 > n3){
        console.log(n3, n1, n2)
    } else if (n2 > n3 && n3 > n1){
        console.log(n1, n3, n2)
    } else if (n3 > n1 && n1 > n2){
        console.log(n2, n1, n3)
    } else if (n3 > n2 && n2 > n1){
        console.log(n1, n2, n3)
    }   
}
sort_numbers(11111, 256, 44)


//2 solution 
let numbers = [11, 47, 2, 16, 56, 1, 548, 23, 96]
function sortNumbers (array) {
    return(array.sort((a, b) => a-b)) // sort numbers within array
}

console.log(sortNumbers (numbers))
