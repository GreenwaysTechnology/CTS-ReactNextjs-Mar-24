//Higher order functions: 
//function is value, so that we can assign function into variable

let hello = function () {
    console.log('hello')
}
hello()

//like other values we can pass function as parameter to another function

function add(a, b) {
    return a + b
}
//here 10 and 10 are values-numbers
console.log(add(10, 10))
let x = 10;
let y = 20;
console.log(add(x, y))

//function as parameter

//greet=function(){}
function sayGreet(greet){
  //call function
  greet()
}
let welcome = function(){
    console.log('welcome')
}
sayGreet(welcome)

sayGreet(function(){
    console.log('welcome')
})