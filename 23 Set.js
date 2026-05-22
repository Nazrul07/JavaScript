const set = new Set([5, 3, 10, 8, 11, 5])       // duplicate values are ignored and maintain the order of insertion
console.log(set)

// Operations in set
set.add(15)
set.add(2)
set.delete(1)   // 1 is not in the set, so it will not be deleted. And will not throw an error
set.delete(3)
console.log(set)

console.log(set.has(11))    // true
console.log(set.size)       // 6

// Iteration
for (const value of set) {
    console.log(value)
}
console.log('------------------')

// Most common use - remove duplicates from an array
const nums = [1, 2, 3, 5, 5, 10, 10, 11]
const uniqueNums = [...new Set(nums)]
console.log(nums)
console.log(uniqueNums)


// Set operation (no built-in, but easy to implement)
const setA = new Set([1, 2, 3, 4])
const setB = new Set([3, 4, 5, 6])

// Union
const union = new Set([...setA, ...setB])

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)))
// Complexity: O(n) where n is the size of setA

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)))

console.log('Union:', union)
console.log('Intersection:', intersection)
console.log('Difference:', difference)