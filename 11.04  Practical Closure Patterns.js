function memorize(fn){
    const cache = []    // ← created ONCE when memorize() is called. This is the closure that will be used to store results of fn() calls.

    return function(...args){               //...args collects ALL arguments into an array
        const key = JSON.stringify(args)    //converts entire args array into a string — used as cache label
        if(key in cache){
            return(console.log(`Cache Hit: ${cache[key]}`))
        }
        cache[key] = fn(...args)
        return (console.log(cache[key]))
    }
}

const slowSquare = (n) => {
    return n*n
}

const slowAdd = (a, b) => {
    return a + b
}

const fastSquare = memorize(slowSquare)
const fastAdd = memorize(slowAdd)
//   memorize() runs ONCE here
//   cache = [] created ONCE here
//   then memorize() is done — BUT cache stays alive!

fastSquare(5)   // ← returned function runs — cache still alive from before
fastSquare(5)
fastSquare(6)
console.log('-------------------')

fastAdd(2, 3)
fastAdd(3, 2)
fastAdd(2, 3)
fastAdd(10, 15)
/*
...args makes memoize REUSABLE for any function
         ↓
single parameter makes memoize work for ONE specific case only

memoize is a UTILITY function
meant to wrap ANY function and make it faster
so it must handle ANY number of arguments
*/


// The golden rule of closure
// Variables OUTSIDE the returned function  →  created once, live forever ✅
// Variables INSIDE the returned function   →  reset every single call ❌