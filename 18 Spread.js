// Spread ... — expands iterables

// Arrays
const a = [1, 2, 3]
const b = [4, 5, 6]

const combined = [...a, ...b]
const copy = [...a]

console.log("Array a  : ", a)
console.log("Array b  : ", b)
console.log("Combined : ", combined)
console.log("Copy of a: ", copy)

const withMiddle = [...a, 'Middle', ...b]
const withStart = ['Start', ...a]
const Max = Math.max(...a)

console.log("Max of a: ", Max)
console.log("Combined with middle word: ", withMiddle)
console.log("Combined with start word : ", withStart)
console.log('-----------------------------')



// Objects
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const combinedObj = { ...obj1, ...obj2 }
const updated = { ...obj1, b: 99 }

console.log("Object 1: ", obj1)
console.log("Object 2: ", obj2)
console.log("Combined Object: ", combinedObj)
console.log("Updated Object of obj1: ", updated)

// Clone and modify
const original = {name: 'Nazrul', age: 24}
const modified = {...original, age: 25}
console.log("Original Object: ", original)
console.log("Modified Object: ", modified)
console.log('-----------------------------')


// Spread strings into arrays
const chars = [..."Hello"]
console.log("Spread string into array: ", chars)

console.log("Length of chars array: ", chars.length)
for(const i in chars){
    console.log(`Index ${i}: ${chars[i]}`)
}
console.log('-----------------------------')


// Spread with functions
function sum(x, y, z) {
    return x + y + z
}
const numbers = [1, 2, 3]
const result = sum(...numbers)
console.log("Result of sum: ", result)

const nums1 = [3, 5, 1, 10]
const res1 = sum(...nums1)  // This will work but only for the first three elements of nums1
console.log("Result of sum with nums1: ", res1)

const nums2 = [4, 6]
const res2 = sum(...nums2, 7)   // This will work. First two from the array and 7 as the third argument.
console.log("Result of sum with nums2 and an extra argument: ", res2)

const res3 = sum(...nums2)
console.log("Result of sum with nums2 (missing third argument): ", res3)  // This will result in NaN because the third argument is missing.
// So more arguments than expected will be ignored, but fewer arguments will lead to undefined values for the missing parameters.
console.log('-----------------------------')




// Spread with sets and maps
const setA = new Set([1, 2, 3])
const setB = new Set([4, 5, 6])
const combinedSets = new Set([...setA, ...setB])
console.log("Combined Sets: ", combinedSets)

const mapA = new Map([['a', 1], ['b', 2]])
const mapB = new Map([['c', 3], ['d', 4]])
const combinedMaps = new Map([...mapA, ...mapB])
console.log("Combined Maps: ", combinedMaps)

// Map with duplicate keys
const mapC = new Map([['a', 10], ['e', 5]])
const combinedWithDuplicates = new Map([...mapA, ...mapC])
console.log("Combined Maps with duplicates (key 'a' will take the value from mapC): ", combinedWithDuplicates)