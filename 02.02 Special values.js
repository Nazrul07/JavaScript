let a;              // undefined — declared but not assigned
let b = null;       // null — explicitly empty
let c = NaN;        // Not a Number — e.g., result of 0/0 or parseInt("abc")
let d = Infinity;   // e.g., 1/0

// Interesting quirks
console.log(NaN === NaN);       // false ← NaN is not equal to itself!
console.log(isNaN(NaN));        // true  ← use this to check
console.log(Infinity > 1000);   // true
console.log(-Infinity < -1000); // true
console.log();

// Just checking
console.log(a);     // undefined
console.log(b);     // null
console.log(c);     // NaN
console.log(d);     // Infinity
console.log(1/0);   // Infinity
console.log(0/0);   // NaN
console.log();

console.log(1/0 == Infinity); // true
console.log(0/0 == NaN);      // false ← NaN is not equal to anything, even itself!