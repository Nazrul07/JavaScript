const person = {
    name: 'Nazrul',
    age: 25,
    city: 'Chittagong',
    isEmployed: false
}

const {fullName, Age} = person
console.log(fullName)   // undefined
console.log(Age)        // undefined
/*
Array destructuring → matches by position
Object destructuring → matches by exact name
*/

// Correct way to destructure the object
const{name: fullName1, age: Age1} = person
console.log(fullName1)   // Nazrul
console.log(Age1)        // 25