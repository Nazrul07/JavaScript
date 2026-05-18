// Problem 2 — Multiple Independent Instances
let count = 0

function increment() {
  return ++count
}

increment() // 1
increment() // 2
// Impossible to have two separate independent counters


// Solve we can use closures to create multiple independent instances of the counter:
function createCounter(){
    let count = 0;
    return function increment(){
        return ++count
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1() // 1
counter1() // 2
counter2() // 1
counter2() // 2
counter1() // 3

console.log(counter1())
console.log(counter2())

// counter1.count will be undefined ->It is just a function — not an object with properties
// Each time we call these counters, the value will be incremented independently by 1.
console.log('------------------------')



// We can do something more clear
function newCounter() {
    let count = 0;

    return {
        increment: function() { return ++count; },
        decrement: function() { return --count; },
        getCount: function() { return count; }  // ✅ read without changing
    };
}

const counter11 = newCounter();

counter11.increment(); // 1
counter11.increment(); // 2
counter11.increment(); // 3
console.log(counter11.getCount()); // ✅ 3 — no increment!
counter11.decrement(); // 2
console.log(counter11.getCount()); // ✅ 2 — still no increment!


/*
Closure vs Class
-They solve the same problem (data privacy + related functions grouped together) but in different ways.

Differences:
1. Privacy: Closure — private by nature, no special syntax needed. Class — needs # for private fields/methods, otherwise public.

2. Memory Usage: Closure — each instance has its own copy of the functions, which can lead to higher memory usage if many instances are created. Class — methods are shared across instances, so they use less memory. Class is more efficient.

3. Inheritance: Closure — no built-in inheritance mechanism, you would need to manually set up prototypes or use other patterns. Class — has built-in support for inheritance using the extends keyword.

4. Checking the type:

// Class — you can check what something is
const c = new Counter();
console.log(c instanceof Counter); // ✅ true

// Closure — no way to check
const c = createCounter();
console.log(c instanceof ???);     // ❌ no way to know


Situation                                           Use

Simple, small, one-off functionality                ✅ Closure
Need many instances efficiently                     ✅ Class
Need inheritance                                    ✅ Class
Want truly private data (no # syntax)               ✅ Closure
Working in a team / large codebase                  ✅ Class (more readable)
Functional programming style                        ✅ Closure
Object oriented programming style                   ✅ Class
*/