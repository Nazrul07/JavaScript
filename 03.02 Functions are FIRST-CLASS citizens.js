// Store function in a variable
const multiply = function(a, b) { // This is a function expression
    return a * b;
};

function divide(a, b) { // This is a function declaration
    return a / b;
}

console.log(multiply(5, 3));    // Output: 15
console.log(divide(10, 2));     // Output: 5

/*
Difference between function declaration and function expression:

1. Function Declaration:
- A function declaration defines a named function.
- It is hoisted, meaning it can be called before it is defined in the code.

2. Function Expression:
- A function expression defines a function as part of a larger expression, such as an assignment.
- It is not hoisted, meaning it cannot be called before it is defined in the code.
*/



/*
Example of Function Declaration:
console.log(greet()); // Output: Hello!
function greet() {
    return "Hello!";
}
console.log(greet()); // Output: Hello!


Example of Function Expression:
console.log(greet()); // Error: greet is not defined

const greet = function() {
    return "Hello!";
};

console.log(greet()); // Output: Hello!
*/