const person = {
    name: 'Nazrul',
    age: 25,
    city: 'Dhaka'
}

// Basic
const {name, age} = person
console.log(name, age)
console.log('------------------')


// Renaming
const {name: fullName, age: years} = person
// from person object, take 'name' and 'age' and call it 'fullName' and 'years' respectively

console.log(fullName)
console.log(years)

console.log(name)       // these are from here const {name, age} = person
console.log(age)
console.log('------------------')


// Default values
const {
    country =  "Bangladesh",
    name: n
    // :  is for renaming, = is for default value
} = person

console.log(person)
console.log(n)
