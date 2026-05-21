// Syntax variable
const f1 = (a, b) => {return a + b}     // full
const f2 = (a, b) => a + b              // implicit return
const f3 = a => a * a                   // single param, no parens needed
const f4 = () => "hello"                // no params, empty parens

// Returning an object
const makeObj = (name, age) => ({name, age}) // Note: wrap the object in parentheses to avoid confusion with the function body
const makeObj2 = (name, age) => {name, age}  // This will not work as expected, it will be treated as a block of code rather than an object literal

// Examples
console.log(f1(2, 3))                   // Output: 5
console.log(f2(2, 5))                   // Output: 7
console.log(f3(4))                      // Output: 16
console.log(`${f4()} World`)            // Output: "hello World"
console.log(makeObj("Alice", 25))       // Output: { name: "Alice", age: 25 }   -> Object
console.log(makeObj2("Bob", 30))        // Output: undefined -> This will not return the expected object, it will return undefined because the function body is treated as a block of code rather than an object literal.
console.log('-----------------------------')


// Note: Arrow functions do not have their own 'this' context, they inherit it from the surrounding scope. 
// This can lead to unexpected behavior when using 'this' inside an arrow function, especially in event handlers or methods of objects.

// Example of 'this in arrow function:
const obj = {
    name: "Charlie",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`)       // 'this' refers to the 'obj' context, so it will correctly log "Hello, my name is Charlie"
        }, 1000)
    }
}

obj.greet()                         // Output after 1 second: "Hello, my name is Charlie"


// Another example of 'this'
const obj2 = {
    name: "Jack",                   // ← this.name points HERE
    greet: function(name) {         // ← parameter name — completely separate
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`) // still "Jack"
        }, 500)
    }
}

obj2.greet("Nazrul") // Output: "Hello, my name is Jack"
//         ↑
//   "Nazrul" goes into parameter name
//   but is never used — this.name still reads from obj2