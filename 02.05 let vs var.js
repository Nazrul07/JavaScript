// let vs var — Complete Comparison

// 1. Scope — Biggest Difference

// var — FUNCTION scoped
function testVar() {
    if (true) {
        var name = "Charlie"   // lives in the whole function
    }
    console.log(name)          // → "Charlie" (leaked outside if block!)
}
testVar()


// let — BLOCK scoped
function testLet() {
    if (true) {
        let name = "Alina"     // lives ONLY inside this if block
    }
    // console.log(name)          // → ReferenceError: name is not defined
}
testLet()
console.log('---------------------')






// 2. Hoisting — var silently becomes undefined

// var — hoisted, silently undefined
console.log(name)   // → undefined  (no error, just silent bug)
var name = "Charlie"
console.log(name)   // → "Charlie"

/*
What JS actually does with var behind the scenes:
var name            // ← hoisted to top, value = undefined
console.log(name)   // → undefined
name = "Charlie"
console.log(name)   // → "Charlie"
*/


// let — hoisted but NOT initialized
// console.log(name)   // → ReferenceError: Cannot access 'name' before initialization
let name1 = "Alina"
// This is GOOD — at least you know something is wrong!
console.log('---------------------')




// 3. Re-declaration — var silently overwrites

// var — allows re-declaration, no warning
var name2 = "Charlie"
var name2 = "John"      // ← no error, silently overwrites
console.log(name2)      // → "John"
// You might not even realize you overwrote something


// let — blocks re-declaration
let name3 = "Alina"
// let name3 = "Sara"      // → SyntaxError: 'name3' has already been declared
// Error saves you from accidental overwrite
console.log('---------------------')




// 4. Global / Window Pollution

// var — attaches to window (browser)
/*
var name4 = "Charlie"
console.log(window.name4)   // → "Charlie"

// Danger — accidentally overwriting browser built-ins
var location = "Paris"     // killed window.location
var history  = []          // killed window.history


// let — never touches window
let name5 = "Alina"
console.log(window.name5)   // → undefined  window is safe
*/



// 5. Loop Problem — Classic Bug with var

// var in loop — BROKEN
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i)   
    }, 500)
}
// Output after 1 second:
// var i: 3   ← same value 3 times!
// var i: 3
// var i: 3
// (loop finished before setTimeout ran, i was already 3)


// let in loop — WORKS CORRECTLY
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("let i:", i)   
    }, 500)
}
// Output after 1 second:
// let i: 0  
// let i: 1 
// let i: 2 
// (each loop gets its OWN separate i)