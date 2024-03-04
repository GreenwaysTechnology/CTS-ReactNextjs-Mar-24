//resolve= success
//reject = failure
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject()
    }
}
login('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log( err)
})

login('foo', 'foo', (status) => {
    console.log('success')
}, (err) => {
    console.log('failed')
})