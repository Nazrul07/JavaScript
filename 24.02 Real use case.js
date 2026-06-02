// Without Symbol - keys can accidentally clash

const user = {
    id: 1,
    name: "Alex"
}

user.id = 999   // <- accidentally overwrites id

// With Symbol - key is unique, can'b be overwrite accidentally

const ID = Symbol("id")
//                 ↑
//          just a label for debugging
//          not the value

const user1 = {
    [ID]: 1,                // <- Symbol as key
    name: "Alex"
}

user1.ID = 999              // <- just creates a normal 'ID', doesn't touch Symbol key

console.log(ID)
console.log(user1[ID])      // 1
console.log(user1.ID)       // 999 (separate key)
console.log(user1)


// ID.description   -> gives the label "id"
// ID.toString()    -> gives "Symbol(id)"
// ID               -> the unique symbol itself


// Symbol keys are hidden from normal iteration
console.log(Object.keys(user1))
console.log(Object.entries(user1))

// Get symbol keys
console.log(Object.getOwnPropertySymbols(user1))


// Golbal symbols - share across files
const globalSym = Symbol.for("shared")
const sameSym = Symbol.for("shared")

console.log(globalSym === sameSym)