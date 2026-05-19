// String to number
console.log(Number('32'))           // 32
console.log(Number(''))             // 0
console.log(Number('abc'))          // NaN
console.log(Number(true))           // 1
console.log(Number(null))           // 0
console.log(Number(undefined))      // NaN
console.log(Number('443Hello'))     // NaN
console.log('--------------------------')

console.log(parseInt('43px'))       // 43 - stops at first non-numeric char 'p'
console.log(parseInt('Hello55'))    // NaN - stops at 'H' word.
console.log(parseInt('  334'))      // 334 - skipes leading whitespace
console.log(parseInt('334 324'))    // 334 - stops at whitespace
console.log(parseInt('abc'))        // NaN
console.log('--------------------------')

console.log(parseFloat('3.443Hello'))   // 3.443 - same as parseInt
console.log('--------------------------')


// To boolean
console.log(Boolean(0))                 // false
console.log(Boolean(1))                 // true
console.log(Boolean("Hello"))           // true
console.log(Boolean([]))                // true
console.log(Boolean({}))                // true
console.log(Boolean(""))                // false
console.log(Boolean(null))              // false
console.log(Boolean(NaN))               // false
console.log(Boolean(0.001))             // true
console.log('--------------------------')



// Implicit coercion - tricky
console.log("5" + 3)                    // "53" ← + triggers string concatanation
console.log(typeof("5" + 3))            // string

console.log('5' - 2)                    // 3    ← - forces numeric conversion
console.log(typeof("5" - 2))            // number

console.log("5" * "3")                  // 15   ← * forces numeric conversion
console.log(typeof("5" * "3"))          // number

console.log("18" / "3")                 // 2    ← / forces numeric conversion
console.log(typeof("18" / "3"))         // number
console.log('------------------------')