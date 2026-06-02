// Generator - function that can PAUSE and RESUME its execution with 'yield' keyword

function* generateSequence(start = 0) {     // here * means that this is a generator function
    while(true) {
        yield start++;  // Pauses here and returns the current value of 'start', then increments 'start' for the next call
    }
    // where 'yield' is used, the function execution is paused and the value is returned to the caller. If we didn't use 'yield', the function would run to completion and return a single value, rather than allowing us to get a sequence of values over time.
}

const gen = generateSequence(1); // Create a generator object starting from 1

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }

/*
Where is .next() method from?

-> The .next() method is a built-in method of generator objects in JavaScript.
When we call a generator function, it returns a generator object that has the .next() method.
This method is used to resume the execution of the generator function until the next 'yield' statement is encountered,
at which point it returns an object containing the value yielded and a boolean indicating
whether the generator has completed its execution (done: true) or not (done: false).
*/
console.log('-----------------------------')


// Finite Generator example
function* range(start, end) {
    for (let i = start; i <= end ; i++) {
        yield i;
    }
}

for(let n of range(1, 5)) {
    console.log(n)
}

/*
Working steps:
1. The 'range' generator function is defined to yield numbers from 'start' to 'end'.
2. When we use a for...of loop to iterate over the generator, it automatically calls the .next() method on the generator object returned by 'range(1, 5)'.
3. Each time .next() is called, the generator function executes until it hits the next 'yield' statement, at which point it returns the current value of 'i' and pauses execution.
4. The loop continues until the generator has yielded all values from 1 to 5, at which point it will indicate that the generator is done (done: true) and the loop will terminate.
*/