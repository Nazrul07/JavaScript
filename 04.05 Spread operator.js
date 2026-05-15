let a = [1, 5, 6]
let b = [2, 9, 10]
let c = [2, 5, 11]

let combined = [...a, ...b]
console.log(combined)

let combined1 = [...a, ...b, ...c]
console.log(combined1)

let combined2 = [...a, ...b, ...c, 99, 100]
console.log(combined2)

let combined3 = [99, 100, ...a, 240, 440, ...c]
console.log(combined3)
console.log()

// Copy
let copy = [...a]
console.log(copy)

copy.push(100);
console.log(copy)

console.log(a)
console.log()

// Max
console.log(Math.max(...combined3))


// Min
console.log(Math.min(...combined3))
console.log(Math.min(...a))