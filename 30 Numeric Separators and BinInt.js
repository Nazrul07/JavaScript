// Numeric separators - just for readability

const million = 1_000_000
const bytes = 0xFF_FF_FF
const pi = 3.14_159_265
const binary = 0b1010_0001

// But they don't change the value of the number
console.log(million)
console.log(bytes)
console.log(pi)
console.log(binary)


// BigInt - for numbers beyond Number .Max_SAFE_INTEGER
let bigInt = 1234567890123456789012345678901234567890n        // add 'n' at the end of the number to make it a BigInt
console.log(bigInt)

bigInt += 1n            // we can only use BigInt with BigInt, not with regular numbers
// bigInt += 1          // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(bigInt)


const huge = BigInt("1234567890123456789012345678901234567890")   // we can also create a BigInt from a string
console.log(huge)
console.log(typeof huge)        // "bigint"
console.log('-------------------')



let big = 19593002035903095n
console.log(big)
console.log(Number(big))        // 19593002035903096 - precision lost, because it's beyond Number.MAX_SAFE_INTEGER


// Maximum size of a BigInt is not limited by the number of bits, but by the available memory.
// Max safe Integer is 2^53 - 1, which is 9007199254740991. Beyond that, we can use BigInt to represent larger integers without losing precision.