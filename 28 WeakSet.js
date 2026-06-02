// WeakSet - stores objects weakly, meaning that if there are no other references to an object in the WeakSet, it can be garbage collected.

const weakSet = new WeakSet();

let obj2 = { name: 'Tamim' }
weakSet.add(obj2)                   // Add an object to the WeakSet

console.log(weakSet.has(obj2))      // Output: true
weakSet.delete(obj2)                
console.log(weakSet.has(obj2))      // Output: false

/*
Main objective of WeakSet?

-> To allow objects to be garbage collected when they are no longer needed,
preventing memory leaks while still enabling the storage of objects in a collection without preventing their garbage collection.

In other words, WeakSet allows us to store objects without preventing them from being garbage collected when they are no longer referenced elsewhere in the code.
*/


/*
WeakMap/ WeakSet are not iterable, meaning we can't use for...of or other iteration methods to loop through their entries.
They have no .size.
They exist purely for memory-safe association of data with objects, without preventing garbage collection.
*/