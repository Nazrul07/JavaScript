// A closure is a function that remembers the variables from its outer scope even after that outer scope has finished executing.
// In C++, once a function returns, its local variables are gone. In JS, they can live on.

function makeCounter() {
    let count = 0; // this variable "survives" after makeCounter() returns

    return function() {     // this is the closure, it has access to count. just return without function is not a closure, it is just returning a value.
        count++;
        return count;
    }
}

const counter = makeCounter();      // makeCounter() is done BUT count is still alive
// because the returned function is still holding onto it
console.log(counter()); // 1 — function runs, increments count
console.log(counter()); // 2 — same count, still alive
console.log(counter()); // 3 — still remembers!
console.log('-------------')

// Each time we call makeCounter(), a new closure is created with its own count variable.
const anotherCounter = makeCounter();
console.log(anotherCounter()); // 1 - this is a different count variable than the one in counter() closure
console.log(anotherCounter()); // 2
console.log(anotherCounter()); // 3

// count is enclosed inside the returned function. That's a closure.