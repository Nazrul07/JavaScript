// Custom iterators

/*
First - What is an Iterator?
Think of it like a TV remote's next button:

Playlist: [1, 2, 3, 4, 5]
Press next -> gives 1, done? No
Press next -> gives 2, done? No
...
Press next -> gives 5, done? No
Press next -> gives undefined, done? Yes <- stop!
*/

// Build-In iterables
// These already have Symbol.iterator build in
for(let char of "Hello World") { }      // string
for(let item of [1, 2, 3]) { }          // Array
for(let item of new Set()) { }          // Set
for(let item of new Map()) { }          // Map


function range(start, end) {
    return {                        // return an pbject
        [Symbol.iterator]() {       // with iterator method
            let current = start

            return {                // returns another object
                next() {            // with next() method
                    if(current <= end) {
                        return {value: current++, done: false}
                    }
                    return {value: undefined, done: true}
                }
            }
        }
    }
}


/*
OUTER object - the iterable
just says "I know how to iterate"
{
    [Symbol.iterator]() {...}
}

INNER object - the actual iterator
does the real work of tracking position
{
    next() {...}
}


Outer Object -> "I have a Symbol.iterator, I'm iterable!"
Inner Object -> "I track current position and give next value."


next() {
    if(current <= end) {
        return { value: current++, done: false }
                          ↑                ↑
                    current value     not finished yet

    }
    return { value: undefined, done: true }
                                      ↑
                                finished! stop looping
}
*/

range(1, 4)
/*
next() → current=1 → { value: 1, done: false } → current becomes 2
next() → current=2 → { value: 2, done: false } → current becomes 3
next() → current=3 → { value: 3, done: false } → current becomes 4
next() → current=4 → { value: 4, done: false } → current becomes 5
next() → current=5 → 5 > 4 → { value: undefined, done: true } → STOP!
*/


// for...of secretly calls next() for us.
for(let n of range(1, 5)){
    console.log(n)
}
// for...of is just a clean shortcut for calling .next() repeatedly until done is true.