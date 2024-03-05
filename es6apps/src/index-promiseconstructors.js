//Promise Object creating using consturctor api

function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    //if you want to abstract existing callback apis , we can use promise constructor
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })

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