//Promise Object creating using factory api

function blockMe(message) {
    console.log(message)
}
//promise factory api with success
function getFailure() {
    //returns promise Object
    return Promise.reject('failed')
}

function main() {
    blockMe('start')
    getFailure().catch(err => console.log(err))
    blockMe('end')
}
main()