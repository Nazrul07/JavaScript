const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4]
])

for(let [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`)
}
console.log()

console.log(map.keys())
console.log(map.values())
console.log(map.entries())

// Convert to/from object
const obj = Object.fromEntries(map)         // Map -> Object
const map1 = new Map(Object.entries(obj))   // Object -> Map

console.log(obj)
console.log(map1)