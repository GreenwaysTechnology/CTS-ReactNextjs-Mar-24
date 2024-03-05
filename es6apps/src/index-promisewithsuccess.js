//Promise Object creating using factory api

function blockMe(message) {
    console.log(message)
}
//promise factory api with success
function getSuccess() {
    //returns promise Object
    return Promise.resolve('Success')
}

function main() {
    blockMe('start')
    getSuccess().then(res => console.log(res))
    blockMe('end')
}
main()