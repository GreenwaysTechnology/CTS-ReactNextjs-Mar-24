//object returning and destructuring

// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 1000
//     }
// }

// function getStock(id = 1, symbol = 'google', qty = 100, price = 1000) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }

//object destructuring with return object

// function getStock(id = 1, symbol = 'google', qty = 100, price = 1000) {

//     //here id:id , left:right, key:value ----> if it is same, we can remove any one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }

// const getStock = (id = 1, symbol = 'google', qty = 100, price = 1000) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStock = (id = 1, symbol = 'google', qty = 100, price = 1000) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock())
console.log(getStock(2, 'cts', 200, 350))