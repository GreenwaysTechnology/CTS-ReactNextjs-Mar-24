//callback function

function sayHello(greet) {
    setTimeout(greet, 5000)
}
function blockMe(message) {
    console.log(message)
}

blockMe('start')
sayHello(function () {
    console.log('hello')
})
blockMe('end')