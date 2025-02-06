
export function printAge(age) {
    console.log(age)
}

class CustomerDetails {
    printFirstName(firstName){
        console.log(firstName)
    }
    /**
     * this methid will print the last name
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

export var customerDetails = new CustomerDetails ()