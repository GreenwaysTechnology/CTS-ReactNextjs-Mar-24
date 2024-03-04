//short cuts of arrow 
let hello = () => {
    console.log('hello')
}
hello()
//shortcut 1: if function body has only one line of code : we can remove {}

hello = () => console.log('hello')
hello()

//arrow with parameters 

let add = (a = 0, b = 0) => {
    let c = a + b
    return c
}
console.log(add(1, 1))

add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(1, 1))
//shortcut 2: if function body only return statement: we can remove {} and return statement

add = (a = 0, b = 0) => a + b

console.log(add(1, 1))

//single arg without default value, and return with some computation 
let getstock = (stock) => {
    return stock * 2
}

console.log(getstock(10))
//shortcut3: if fun have single arg without default value, only return: we can remove (),return , {}

getstock = stock => stock * 2

console.log(getstock(10))