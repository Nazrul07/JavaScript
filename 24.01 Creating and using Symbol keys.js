const ID = Symbol("id") // Create unique key. Here "id" is just a Label
//                 ↑
//          this is just a DESCRIPTION/LABEL
//          not a actual value
//          just helps us identify it when debugging

// Symbol is a unique identifier - the "id" part is just a human readable label, not the value itself.
console.log(ID)                 // Symbol(id)
console.log(ID.description)     // -> id    - description gives us label
console.log(ID.toString())      // -> Symbol(id) <- still full



const user = {
    name: "Alex",
    [ID]: 142   // <- must use [] to use Symbol as key
}

console.log(user[ID])           // Correct way
// console.log(user.ID)         // undefined - wrong way