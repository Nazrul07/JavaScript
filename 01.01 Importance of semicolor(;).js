// JavaScript has Automatic Semicolon Insertion (ASI) — the engine adds semicolons for us in most cases. But not always.

// Where we CAN skip the semicolon
let x = 5
let y = 10
let z = 15
// End of a normal statement — ASI handles it



// Where we MUST use a semicolon (or we'll get bugs)

// 1. When a line starts with '(' — looks like a function call
/*
let a = 5
(function() {
  console.log("This will cause an error without a semicolon above")
})()
*/
let a = 5;
(function() {
  console.log("This will work fine with a semicolon above")
})()


// 2. When a line starts with '[' — looks like array access
/*
let a = 1
["one", "two"].forEach(x => console.log(x))
*/
let b = 1;
["one", "two"].forEach(x => console.log(x))


// 3. When a line starts with a template literal `
/*
let hello = "HI"
`world`.toUpperCase()
*/
let hello = "HI";
`world`.toUpperCase()

    
// 4. Multiple statements on one line
// let c = 1 let d = 2 let e = 3    -> error: missing semicolons
let c = 1; let d = 2; let e = 3;