//functions can act as class.

//es 5 style of creating objects 

function Employee(id = 0, name = '') {
    //instance variables
    this.id = id
    this.name = name
    //methods
    this.calculate = function () {
        return 1000
    }
}
//create object and store into variable which is called reference variable
//emp is variable
//let is keyword
//new is memory allocation operator
//Employee(1,'Subramanian') is constructor call
let emp = new Employee(1, 'Subramanian')
//access variable
console.log(emp.id, emp.name)
console.log(emp.calculate())


//es 6 style of creating object.

class Customer {
    id
    name
    constructor(id = 0, name = '') {
        this.id = id
        this.name = name
    }
    //methods
    calculateInvoice() {
        return 1000
    }
}
let customer = new Customer(1, 'Subramanian Murugan')

console.log(customer.id,customer.name)
console.log(customer.calculateInvoice())
