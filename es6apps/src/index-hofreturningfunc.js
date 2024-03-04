//how to return function from another function.

function add() {
    return 10 + 10
}
console.log(add())

function show() {
    return function () {
        return 'hello'
    }
}
const res = show()
console.log(res())

console.log(show()())

let greet = () => {
    return () => {
        return 'greet'
    }
}
console.log(greet()())

console.log(show()())

greet = () => () => 'greet'
console.log(greet()())