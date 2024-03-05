//Promise Object creating using factory api

function blockMe(message) {
    console.log(message)
}
//promise factory api with success and failure
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login Success')
    } else {
        return Promise.reject('login failed')
    }
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    login('foo', 'bar')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    blockMe('end')
}
main()