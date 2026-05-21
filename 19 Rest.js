//  Collects multiple values into array

// In functions
function sum(...nums){
    return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 5, 6))


// Max with regular parms - rest must be LAST

function first(a, b, ...rest){
    console.log(a, b, rest)
}
first(1, 3, 5, 10, 11, 20)

// In destructuring
const [head, ...tail] = [1, 2, 3, 4, 5]
const {a, ...others} = {a: 1, b:2, c:3, d:4}

console.log(head, tail)
console.log(a, others)

for(const val of tail){
    console.log(val)
}

// Spread vs Rest: Same syntax ... but opposite purposes.
// Spread expands, Rest collects.