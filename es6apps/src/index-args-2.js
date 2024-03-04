//args and parameters, returns 

//default arg:es 6 feature
function sayHello(name = 'Sweety') {
    console.log(`Your name is ${name}`)
}

sayHello('Subramanian')
sayHello()

function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`c ${c}`)
}
add(1, 2)
add()