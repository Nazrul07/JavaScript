// JS has only ONE number type (no int/float/double distinction)
let a = 10;
let b = 10.5;

// Type changes at runtime - totally valid
let x = 42;
x = "hello"; // no error!
x = true;    // no error!

// Check type with typeof
console.log(typeof 42);        // "number"
console.log(typeof 0.0034);    // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  ← famous JS bug, just memorize it


// Just checking
let name = "Nazrul Islam";
console.log("My name is " + name + "."); // string concatenation