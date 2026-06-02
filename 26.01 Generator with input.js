// Send values in

function* calculator() {
    let result = 0
    while(true) {
        const input = yield result      // receive value sent via next()
        result += input
    }
}

const calc = calculator()
calc.next() // Start the generator
console.log(calc.next(10))  // Output: { value: 10, done: false }
console.log(calc.next(5))   // Output: { value: 15, done: false }
console.log(calc.next(3))   // Output: { value: 18, done: false }
console.log(calc.next(5).value) // Output: 23   -> .value is used to extract the value from the object returned by next() method

/*
Why always false here?

The done property is false because the generator function is designed to run indefinitely (it has an infinite loop).
The generator will only return done: true if it reaches a return statement or if it throws an error.
Since our calculator generator never reaches a return statement and does not throw an error, it will always yield values and thus always return done: false.
*/


/*
Main Purpose of Generator function?

The main purpose of a generator function is to allow us to define an iterative algorithm by writing a single function whose execution is not continuous.
Generators can be used to create iterators, manage asynchronous code, and implement complex control flows in a more readable and maintainable way.
*/

/*
Does we always need to use yield in generator function?

-> No, we do not always need to use yield in a generator function.
However, without yield, the generator function will not be able to pause its execution and return intermediate results.
In such cases, the generator will behave like a regular function and will execute to completion when called.
The yield keyword is essential for creating the unique behavior of generators, allowing them to produce a sequence of values over time rather than computing them all at once.
*/