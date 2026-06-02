// Array.at() method allows us to access elements from an array using a relative index.
// It accepts both positive and negative integers as an argument.
// Positive integers count from the beginning of the array, while negative integers count from the end of the array.

const arr = [10, 20, 30, 40, 50]

console.log(arr.at(-2))     // Second last element
console.log(arr.at(-1))     // Last element
console.log(arr.at(0))      // First element



// Array.flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const nestedArr = [
    1,
    [2, 3],
    [4, [5, 6]],
    7,
    [4, [4, 5, 6, [10, 11, 20]]]
]

console.log(nestedArr.flat())           // [1, 2, 3, 4, [5, 6], 7]                      -> default depth is 1
console.log(nestedArr.flat(2))          // [1, 2, 3, 4, 5, 6, 7]                        -> flattening up to depth 2
console.log(nestedArr.flat(Infinity))   // [1, 2, 3, 4, 5, 6, 7, 4, 4, 5, 6, 10, 11, 20] -> flattening all levels of nesting
console.log('------------------------------')


// flatMap() -> map then flatten one level

const sentences = [
    "Hello world",
    "JavaScript is great",
    "I love coding"
]
console.log(sentences.flatMap(sentence => sentence.split(" ")))
// Equivalent to sentences.map(sentence => sentence.split(" ")).flat()
// flatMap() is more efficient as it avoids creating an intermediate array of arrays.