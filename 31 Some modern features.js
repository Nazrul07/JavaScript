// Opposite of Object.entries() is Object.fromEntries()

const entries = [
    ["a", 1],
    ["b", 2],
    ["c", 3]
]

const obj = Object.fromEntries(entries)
// fromEntries() takes an array of key-value pairs and transforms it into an object.

console.log(obj) // { a: 1, b: 2, c: 3 }

// Super useful - transform an object
const prices = {
    apple: 1.5,
    banana: 0.75,
    orange: 1.25
}

const discountedPrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, parseFloat((value * 0.8).toFixed(2))])
)
// toFixed() returns a string. We used parseFloat() to convert it back to a number.


// .entries() gives us an array of key-value pairs.
// We can then use .map() to transform each pair, applying a 20% discount to the price.
// Finally, we use Object.fromEntries() to convert the array of discounted key-value pairs back into an object.

console.log(discountedPrices) // { apple: 1.2, banana: 0.6, orange: 1 }