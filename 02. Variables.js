var x = 10;   // OLD - function scoped, avoid this
let y = 20;   // block scoped - use this for mutable variables
const z = 30; // block scoped - use this for constants

console.log(x);
console.log(y);
console.log(z);