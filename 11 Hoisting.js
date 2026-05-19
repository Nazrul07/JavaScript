// JS moves declarations to the top of their scope before execution.
// But only declarations, not initializations.

// console.log(a); // undefined
var a = 5
console.log(a)


/*
// What we write
console.log(a); // ???
var a = 5;
console.log(a);


// What JS actually sees (after hoisting)
var a;           // declaration hoisted to top
console.log(a);  // undefined — declared but not initialized yet!
a = 5;
console.log(a);  // 5
*/
console.log('----------------')


// let and const are hoisted too — but differently
/*
console.log(b); // ❌ ReferenceError — Temporal Dead Zone!
let b = 10;

// They exist in a Temporal Dead Zone (TDZ) — hoisted but not accessible until the line they're declared.
*/




// Function hoisting

// Function DECLARATIONS are fully hoisted
sayHi()     // ✅ works! "Hi"

function sayHi() {
    console.log("Hi")
}

// Function EXPRESSIONS are NOT hoisted
sayBye()    // ❌ ReferenceError
const sayBye = () => console.log("Bye");