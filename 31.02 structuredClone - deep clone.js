const original = {
    a: 1,
    nested: {
        b: 2,
        c: [3, 4, 5]
    },
    arr: [1, 2, 3]
}

// Old way - using JSON methods - breaks with functions, dates etc.
const cloneOld = JSON.parse(JSON.stringify(original))
// JSON.stringify() -> static method coverts a JavaScript object or value into a JSON formatted string.

console.log(cloneOld) // { a: 1, nested: { b: 2, c: [3, 4, 5] }, arr: [1, 2, 3] }


// Modern way - handles Dates, Arrays, nested objects, and more
const cloneNew = structuredClone(original)
cloneNew.nested.b = 20      // Original not affected
console.log(cloneNew)
console.log(original)