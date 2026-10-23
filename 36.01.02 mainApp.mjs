// Notice:
// - Calculator has NO curly braces because it was the DEFAULT export.
// - { add, PI } MUST have curly braces because they were NAMED exports.
import Calculator, { add, PI } from "./36.01.01 mathUtils.mjs";

console.log("PI Constant:", PI);
console.log("Sum:", add(10, 5));

const calc = new Calculator();
console.log("Product:", calc.multiply(4, 5));
