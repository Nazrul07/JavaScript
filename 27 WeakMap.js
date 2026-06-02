// WeakMap - keys MUST be objects, values can be anything
// When the object key has no other references, it can be garbage collected, and the entry in the WeakMap will be removed

const weakMap = new WeakMap();

let obj1 = { name: 'Shakib' }
weakMap.set(obj1, 'Cricketer')

console.log(weakMap.get(obj1))      // Output: 'Cricketer'

console.log(weakMap.has(obj1))      // Output: true
weakMap.delete(obj1)                
console.log(weakMap.has(obj1))      // Output: false

obj1 = null
// obj1 gets garbage collected, and the entry in the WeakMap is removed

console.log(weakMap.get(obj1))      // Output: undefined
console.log('-------------------------------')


// Use case - attach private data to objects without memory leaks.
// memory leak -> when we have data that is no longer needed but still occupies memory because there are references to it, preventing garbage collection.

const privateData = new WeakMap();

class Person {
    constructor(name, age) {
        privateData.set(this, { age })      // store private data
    }

    getAge() {
        return privateData.get(this).age    // access private data
    }
}

const person1 = new Person('Tamin', 30)
console.log(person1.getAge())    // Output: 30

// When person1 is no longer referenced, it can be garbage collected, and the private data will be removed from the WeakMap.


/*
Main objective of WeakMap?

-> To allow objects to be garbage collected when they are no longer needed,
preventing memory leaks while still enabling the association of data with those objects.
*/