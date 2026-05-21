/*
for...in  →  gives us the INDEX / KEY
for...of  →  gives us the VALUE
*/

// Array
const chars = ['a', 'b', 'c']

for(let i in chars) {
    console.log(`Index: ${i} Value: ${chars[i]}`)
}

for(let char of chars) {
    console.log(`Value: ${char}`)
}
console.log('------------------')


// Object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for(const key in person) {
    console.log(`Key: ${key}. Value: ${person[key]}`)
}

// for...of does not work on plain objects
// for(const value of person) {
//     console.log(value)   -> TypeError: person is not iterable
// }