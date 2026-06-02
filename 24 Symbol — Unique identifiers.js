// Unique Keys That Never Clash
// What problem does it solve?

// Imagine two developers adding keys to same object

const user = {
    name: "Alex"
}

// Developer 1 adds
user.id = 123

// Developer 2 adds - Overwrites Developer 1's id
user.id = 999

console.log(user.id)
console.log('------------------------')

// Symbol fixes this - every Symbol is 100% unique forever
const id1 = Symbol("id")
const id2 = Symbol("id")

console.log(id1 === id2)        // False - same name but completely different
console.log(id1.description)    // id
console.log(id2.description)    // id
// same label, completely different symbols



// Compare with string - same string = same value
const s1 = "id"
const s2 = "id"

console.log(s1 === s2)      // true

// This is exactly WHY Symbol exists — two Symbols are NEVER equal even if they have the same label.