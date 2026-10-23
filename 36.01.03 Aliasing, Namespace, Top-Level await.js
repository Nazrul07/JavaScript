// 1. Aliasing with as (Avoiding Name Collisions)

// What if two different modules export a function with the same name (e.g. formatDate)?
// We can rename it on the fly using "as":

import { add as subTwoNumbers } from "./36.01.01 mathUtils.mjs";

console.log(`Sum of 10 & 5 is : ${subTwoNumbers(10, 5)}`);
console.log();



// 2. Namespacing with * as (Import Everything as an Object)
// If a module exports 10 different helpers
// and we want all of them under one namespace:

import * as MathTools from "./36.01.01 mathUtils.mjs";
console.log(MathTools);
console.log();

console.log(MathTools.add(5, 3));
console.log(MathTools.PI);
console.log(MathTools.subtract(10, 3));

// console.log(MathTools.default.multiply(2, 5)); 
// Need to create an instance of the class to use its methods. 
// Reason -> default export is a class and not a function. 
// Note -> If default export was a function, we could call it directly.
console.log(typeof new MathTools.default());    // Object
console.log(typeof MathTools.default);          // function

console.log(new MathTools.default().multiply(2, 5));
console.log(MathTools.default.divide(4, 2));



// 3. Top-Level await (ES2022 Modern Standard)
// In modern ES Modules, We can write await directly at the root level of our file.
// This is widely used in prodcution to load configuration, connect to databases or initialize services before the rest of the application runs:

// In an ES Module (.mjs), We do NOT need to wrap this in async function main()!
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();

console.log("Loaded title via Top-Level Await:", data.title);
