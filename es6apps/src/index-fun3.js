//args and parameters, returns 

//default arg:es 6 feature
function sayHello(name = 'Sweety') {
    return name
}

console.log(sayHello('Subramanian'))
console.log(sayHello())

function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a + b

}
console.log(add(1, 2))
console.log(add())