const add = function sum(a, b){ // This is a named function expression
    return a + b;
}

console.log(add(2, 5)); // Output: 7
console.log();
// console.log(sum(2, 5)); -> Error: sum function cannot be accessed outside of the function expression

/*
In a named function expression, the function has a name (in this case, "sum"),
but it is not accessible outside of the function expression.
The variable "add" holds the reference to the function,
and you can call it using "add(2, 5)".
However, trying to call "sum(2, 5)" will result in an error because "sum" is not defined in the outer scope.
*/



// Example of a named function expression with recursion
const factorial = function factFn(n) {
    if (n <= 1) return 1;
    return n * factFn(n - 1); // ✅ factFn is visible here, inside itself
};

console.log(factorial(5)); // ✅ 120
// console.log(factFn(5));    // ❌ ReferenceError: factFn is not defined