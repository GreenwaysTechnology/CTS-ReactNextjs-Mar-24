//callback function

function login(userName, password, resolve, reject) {
    if (userName == 'admin' && password === 'admin') {
        setTimeout(resolve, 5000, 'Login Success')
    } else {
        setTimeout(reject, 5000, 'Login Failed')
    }
}

function blockMe(message) {
    console.log(message)
}

blockMe('start')
login('admin', 'admin', function (response) {
    console.log(response)
}, function (err) {
    console.log(err)
})
blockMe('end')