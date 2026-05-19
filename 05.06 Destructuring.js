let nums = [11, 32, 34, 35, 39, 40]

// Old Way
let first = nums[0]
let second = nums[1]
let third = nums[2]

console.log(first, second, third)

// New way - Destructuring
let [first1, second1, third1] = nums
console.log(first1, second1, third1)

let [f, s, ...rest] = nums
console.log(f, s)
console.log(rest)


let [f1, ...rest1] = nums
console.log(f1)
console.log(rest1)


// Skipping items
let [ , , third2] = nums
console.log(third2)

let studentScores = [95, 85, 75, 60, 40, 35, 10]
let [gold, silver, bronze, ...failed] = studentScores
console.log(gold, silver, bronze)
console.log(failed)

// let [first, ...rest, last] = [10, 20, 30] // ❌ SyntaxError  --> rest must be the last element in the destructuring assignment



// Object Destructuring
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}
// Old way
let name = person.name
let age = person.age
let city = person.city
console.log(name, age, city)

// New way - Object Destructuring
let { name : n, age: a, city: c } = person
// let { name: n, city: c, age: a } = person    -> order does not matter in object destructuring
console.log(n, a, c)