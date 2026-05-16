// prefer these over loops
let nums = [-9, -3, -10, 0, 10, 13, 15, 20, 25, 30, 35]

// forEach - executes a provided function once for each array element
nums.forEach((num, index) => {
    console.log(num, index)
})
console.log('------------------')


// find - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
let firstEven = nums.find(x => x % 2 == 0)
console.log(firstEven)
console.log('------------------')


// filter - creates a new array with all elements that pass the test implemented by the provided function.
let evens = nums.filter(x => x % 2 == 0)
console.log(evens)
console.log('------------------')


// findIndex - returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
let firstNumberGreaterThan20 = nums.findIndex(x => x > 20)
console.log("First index of number greater than 20:", firstNumberGreaterThan20)
console.log('------------------')


// some - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let hasNumberDivisibleBy15 = nums.some(x => x % 15 == 0)
console.log("Has number divisible by 15:", hasNumberDivisibleBy15)
console.log('------------------')


// every - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let allNumbersArePositives = nums.every(x => x > 0)
console.log("All numbers are positive:", allNumbersArePositives)

let allNumbersAreLessThan40 = nums.every(x => x < 40)
console.log("All numbers are less than 40:", allNumbersAreLessThan40)

let allNumbersAreEven = nums.every(x => x % 2 == 0)
console.log("All numbers are even:", allNumbersAreEven)
console.log('------------------')


// includes - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasZero = nums.includes(0)
console.log("Has zero:", hasZero)

let has100 = nums.includes(100)
console.log("Has 100:", has100)
console.log('------------------')


// map - creates a new array populated with the results of calling a provided function on every element in the calling array.
let squares = nums.map(x => x * x)
console.log("Squares:", squares)
console.log('------------------')