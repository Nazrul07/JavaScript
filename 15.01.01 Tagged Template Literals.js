// A tag is a function that processes template literal parts

// What a normal function does
function greet(name) {
    return `Hello, ${name}!`
}

console.log(greet('Alice'))


// Now a tagged template literal
function tag(strings, ...values) {
//            ^ -> text part ^ -> interpolated values ${} parts
    console.log('Strings: ', strings)   // An array of string literals
    console.log('Values: ', values)     // An array of interpolated values
    return 'Tagged template processed'
}
const name = 'Bob'
const testNumber = 42
console.log(tag`Hello, ${name} ${testNumber}!. Welcome to tagged template literals!`)