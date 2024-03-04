//arrays - arrays are dynamic, array is object

let employeeList = [
    {
        id: 1,
        name: 'Subramanian',
        address: {
            city: 'Coimbatore'
        }
    },
    {
        id: 2,
        name: 'Murugan',
        address: {
            city: 'Coimbatore'
        }
    },
    {
        id: 3,
        name: 'Ram',
        address: {
            city: 'Chennai'
        }
    }
]
//iterate arrays: foreach,map,filter,reduce

employeeList.forEach((employee) => {
    console.log(employee.id, employee.name, employee.address.city)
})