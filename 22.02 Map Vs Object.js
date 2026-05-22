// Map Vs Object

// Map
const map = new Map()
map.set('name', 'John')
map.set('age', 30)
console.log(map.get('name'))    // John
console.log(map.get('age'))     // 30
console.log(map.has('name'))    // true
console.log(map.has('age'))     // true
console.log(map.size)           // 2
console.log('-------------------')

// Object
const obj = {
    name: 'John',
    age: 30
}
console.log(obj.name)       // John
console.log(obj.age)        // 30
console.log('name' in obj)  // true
console.log('age' in obj)   // true

// Main differences between Map and Object
// 1. Map allows keys of any type, while Object only allows strings and symbols as keys.
// 2. Map maintains the order of key-value pairs, while Object does not guarantee any order.
// 3. Map has built-in methods for iteration and manipulation, while Object requires manual handling for these operations.
// 4. Map is generally more efficient for large datasets and frequent additions/removals, while Object is more suitable for simple key-value pairs.