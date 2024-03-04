//Object destructuring: es6 feature...

// function showEmployee(employee) {
//     console.log(`id : ${employee.id}`)
//     console.log(`Name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }

//object destructuring
// function showEmployee(employee) {
//     //declare local variable,and destructre
//     const { id, name, address } = employee
//     console.log(`id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${address.city}`)
// }

//nest property destructuring
// function showEmployee(employee) {
//     //declare local variable,and destructre
//     const { id, name, address: { city } } = employee
//     console.log(`id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }

// const showEmployee = (employee) => {
//     //declare local variable,and destructre
//     const { id, name, address: { city } } = employee
//     console.log(`id : ${id}`)
//     console.log(`Name : ${name}`)
//     console.log(`City : ${city}`)
// }
const showEmployee = ({ id, name, address: { city } }) => {
    console.log(`id : ${id}`)
    console.log(`Name : ${name}`)
    console.log(`City : ${city}`)
}
showEmployee({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    }
})