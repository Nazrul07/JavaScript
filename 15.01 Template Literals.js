// Why ES6 introduced Template Literals?


// 1. Readability — less clutter
let name = "Nazrul Islam"
let age = 25

// Old way — concatenation with +
// console.log("My name is " + name + " and I'm " + age + " years old.")

// New way — template literals with backticks and ${}
console.log(`My name is ${name} and I'm ${age} years old.`)
console.log('----------------------------------')



// 2. Multi-line strings — no hacks needed
// Old way — using \n for new lines
// console.log("This is line 1.\nThis is line 2.\nThis is line 3.")

// New way — just write it as is
// just use backticks and press Enter for new lines
console.log(`This is line 1.
This is line 2.
This is line 3.`)
console.log('----------------------------------')



// 3. We can put ANY expression inside ${}
let a = 10; let b = 20;

// Math
console.log(`Sum is ${a + b}`);                 // → Sum is 30
// Turnary operator
console.log(`Max is ${a > b ? a : b}`);         // → Max is 20
// Function call
console.log(`User name in uppercase is: ${name.toUpperCase()}`);
console.log('----------------------------------')




// 4. Avoids quote conflict headaches
// Old way — apostrophe breaks the string!
"I'm learning JavaScript"   // ❌ syntax issue with some parsers
'He said "hello"'           // ❌ need to swap quotes

// New way - Insted of using single or double quotes, we use backticks, so no conflict with apostrophes or quotes inside the string.
console.log(`I'm learning JavaScript`)
console.log(`He said "hello"`)