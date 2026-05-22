// Object keys are always strings. Map keys can be anything (objects, functions, etc).

const map = new Map()

map.set('name', 'Alex')
map.set(42, 'number key')
map.set(true, 'boolean key')
map.set({ id: 1 }, 'object key')    // even object as keys!

console.log(map.get('name'))        // Alex
console.log(map.get(42))            // number key

console.log(map.has("name"))        // true

map.delete(42)                      // removes the key 42 and its value
console.log(map.has(42))            // false
console.log(map.size)               // 3
console.log(map)
console.log(map.keys())             // MapIterator { 'name', true, { id: 1 } }
console.log(map.values())           // MapIterator { 'Alex', 'boolean key', 'object key' }
map.clear()                         // removes all keys and values from the map
console.log(map.size)               // 0