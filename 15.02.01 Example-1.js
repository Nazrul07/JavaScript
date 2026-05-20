// this Behaves Differently in Regular vs Arrow Functions

// Regular function — this depends on WHO calls it
const obj1 = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`) // 'this' refers to the object that calls the function.
    }
}

obj1.greet()                     // Output: "Hello, my name is Alice"
console.log('-----------------------------')



// Arrow function — this is captured from OUTSIDE
const obj2 = {
    name: "Bob",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`) // 'this' does NOT refer to obj2, it captures 'this' from the surrounding scope (which is likely the global scope).
    }
}
obj2.greet()                     // Output: "Hello, my name is undefined" (or it may refer to the global object, depending on the environment)
console.log('-----------------------------')



//  Arrow inside a regular function
const obj3 = {
    name: "Jhosh",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`)       // 'this' refers to obj3

        const innerArrow = () => {
            console.log(`Inner arrow: Hello, my name is ${this.name}`)
        }
        innerArrow() // 'this' inside innerArrow still refers to obj3, because it captures 'this' from the greet function's context.
    }
}
obj3.greet()


/*
Regular this.name               : Bob 
Arrow inside regular, this.name : Bob ← captured from greet(), which owns obj3
*/