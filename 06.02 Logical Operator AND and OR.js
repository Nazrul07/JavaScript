// AND(&&) operator -  Keep going until something FAILS
let isLogedIn = true;
let username = "nazrul"

console.log(isLogedIn && username); // Output: "nazrul"
// Explanation: The AND operator (&&) returns the second operand (username),
// if the first operand (isLogedIn) is truthy.
// Since isLogedIn is true, it evaluates to "nazrul".
// If isLogedIn were false, it would return false instead.

if(isLogedIn && username) { // This block will execute if both isLogedIn is true and username is truthy (not empty or null)
    console.log("Welcome, " + username + "!");
}


let isAdmin = false;
let hasAccess = true;

console.log(isAdmin && hasAccess); // Output: false
console.log(hasAccess && isAdmin); // Output: false
// Explanation: In both cases, the AND operator (&&) returns false because isAdmin is false.
// The order of operands does not affect the result in this case,
// as both operands must be true for the result to be true.
if(isAdmin && hasAccess){ // This block will not execute because isAdmin is false
    console.log("Access granted.");
}
console.log()




// OR(||) operator - Keep going until something SUCCEEDS
isAdmin = false;
hasAccess = false;
let isEmployee = true;
let age = 30;

if (isAdmin || isEmployee || hasAccess){
    console.log("Access granted.");
}
console.log(isAdmin || hasAccess || age || isEmployee); // Output: 30
// Explanation: The OR operator (||) returns the first truthy operand it encounters.
// In this case, isAdmin is false, but age is 30 (truthy), so it returns 30.
// If all operands were false, it would return false instead.
// Instead of returning a boolean, the OR operator can return the actual value of the first truthy operand it finds.



// Default values pattern
function greet(name){
    name = name || "Guest";
    return "Hello, " + name + "!";
}

console.log(greet());           // Output: "Hello, Guest!"
console.log(greet("Alice"));    // Output: "Hello, Alice!"

age = 0;
console.log(age || 18);         // Output: 18
// Explanation: age is 0, which is falsy, so it returns 18 instead.

console.log(age ?? 18);         // Output: 0
// Explanation: The nullish coalescing operator (??) returns the right-hand operand (18)
// only if the left-hand operand (age) is null or undefined.
// Since age is 0 (not null or undefined), it returns 0 instead.

age = 12;
console.log(age ?? 18);         // Output: 12
// Explanation: Since age is 12 (not null or undefined),
// it returns 12 instead of the default value.