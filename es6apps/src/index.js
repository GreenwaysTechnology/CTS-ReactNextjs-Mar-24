//callback composition : the output of one callback will be input for another callback.

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { err: 'No User found' })
    }

}

const login = (user, resolve, reject) => {
    console.log('login is called')

    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}


const showdashboard = (status, resolve, reject) => {
    console.log('showdashboard is called')

    if (status === 'login success') {
        setTimeout(resolve, 1000, 'welcome to dashboard')
    } else {
        setTimeout(reject, 1000, 'Try again..')
    }
}

function main() {
    getUser((user) => {
        //console.log(user)
        login(user, (status) => {
            showdashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()