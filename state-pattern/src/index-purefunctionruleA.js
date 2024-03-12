//Pure function Rule a:

//pure function
function Hello(message) {
    return message ;
}
console.log(Hello('hello'))

//impure function
function Hai(message) {
    return message.toUpperCase();
}
console.log(Hai('hai'))
