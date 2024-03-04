//es 6 class inheritance.

//base class
class Account {
    constructor() {
        console.log('account')
    }
    //
    deposit() {
        return 0
    }
}

//child class
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount')
    }
    //redefining(overriding)
    deposit() {
        return 1000
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())