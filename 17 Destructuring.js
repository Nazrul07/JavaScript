const [a, b, c] = [1, 2, 3]

// Skip Elements
const[first, , third] = [1, 2, 3]
console.log(third)

// Rest
const [head, ...tail] = [1, 2, 3, 4, 5]
console.log(head)
console.log(tail)

// Default values
const [x = 10, y = 20] = [5]
console.log(x)      // 5, because it's provided in the array
console.log(y)      // 20, because it's not provided in the array and uses the default value.
console.log('---------------------------------')


// Swap variables - clean JS trick
let m = 1, n = 2;   // must need to use ; here. This is the ASI(Automatic Semicolon Insertion) edge case.
[m, n] = [n, m]
console.log(m, n)
console.log('---------------------------------')


// Nested array destructuring
let [[a1, a2], [b1, b2]] = [[1, 2], [3, 4]]
console.log("Before swapping: ")
console.log(a1, a2)
console.log(b1, b2)
// nested swapping
console.log("After swapping: ");
[[a1, a2], [b1, b2]] = [[a2, a1], [b2, b1]]
console.log(a1, a2)
console.log(b1, b2)