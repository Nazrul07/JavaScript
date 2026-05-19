// Scope = where a variable is accessible.

// Global Scope
var name = "John"; // Global variable

function greet(){
    console.log("Hello " + name); // Can access global variable
}
console.log(name); // Can access global variable
greet(); // Output: Hello John


// Local Scope
function localScopeExample(){
    var localVariable = "I'm local!";
    console.log(localVariable); // Can access local variable
}
localScopeExample();



// Function Scope
function outerFunction(){
    var outerVariable = "I'm outside!"; // Outer variable
    function innerFunction(){
        var innerVariable = "I'm inside!"; // Inner variable
        console.log(outerVariable); // Can access outer variable
        console.log(innerVariable); // Can access inner variable
    }
    innerFunction();
}
outerFunction();
// console.log(outerVariable); // Error: outerVariable is not defined
// console.log(innerVariable); // Error: innerVariable is not defined
// We cannot access outerVariable or innerVariable outside of their respective functions.
console.log("--------------------------------------------------");


let x = 10 // Global variable

function testScope() {
    x = 20; // Modifying global variable
    console.log("Inside function, x =", x); // Output: Inside function, x = 20
}

console.log("Before function call, x =", x); // Output: Before function call, x = 10
testScope();
console.log("After function call, x =", x); // Output: After function call, x = 20
console.log("--------------------------------------------------");



let y = 10; // Global variable
function testScope() {
    let y = 20; // Local variable with the same name
    console.log("Inside function, y =", y); // Output: Inside function, y = 20
}
console.log("Before function call, y =", y); // Output: Before function call, y = 10
testScope();
console.log("After function call, y =", y); // Output: After function call, y = 10
// Explanation: In this case, the local variable 'y' inside the function does not affect the global variable 'y'.
// The global variable remains unchanged outside the function.