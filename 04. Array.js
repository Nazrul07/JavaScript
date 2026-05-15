//  In JS, arrays are dynamic and can hold any type of data, including other arrays and objects.
// They are zero-indexed, meaning the first element is accessed with index 0.

let arr = [1, "hello world", 2, 3.4, null, '5']

console.log(arr) // Print the array as object

// Access
console.log(arr[0])
console.log(arr.length)
console.log(arr[arr.length - 1])

// Add/remove
arr.push(20)    // at the end
// complexity: O(1)
console.log(arr)

arr.unshift(0)  // at the beginning
// complexity: O(n)
console.log(arr)

arr.pop()       // remove from the end
// complexity: O(1)
console.log(arr)

arr.shift()    // remove from the beginning
// complexity: O(n)
console.log(arr)