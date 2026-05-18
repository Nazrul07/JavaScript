(function(){
    let secret = "hidden"
    console.log("Runs immediately")
})()

// console.log(secret) // ReferenceError: secret is not defined

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// It is a design pattern which produces a lexical scope using JavaScript's function scoping.
// This helps to avoid polluting the global namespace and allows for private variables and functions.

// Used to avoid polluting global scope. Common in older code before modules existed.


// Main difference --- IIFE runs immediately, while normal function runs when we call it.
// Normal function — we control WHEN it runs
function normalFunction() {
    console.log("This is a normal function.")
}
normalFunction();


// IIFE is not meant for data we want to access later.
// It is meant for code we just want to run once and throw away.

// When to use IIFE — run once, don't need the data later
(function() {
    console.log("Page loaded!")   // just needs to run once
    // no need to access anything later
})()