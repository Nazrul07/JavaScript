// Problem 1 — Global Variables Get Messy


// General appraoch
let count = 0;
function increment(){
    count++;
    return count;
}

count = 99                  // oops, we just messed up our counter by changing count directly! 
console.log(increment());   // 100 - not what we expected!

// Solution: Closures

function makeCounter() {
    let count = 0; // this variable "survives" after makeCounter() returns

    return function(){
        return ++count;
    }
}
const counter1 = makeCounter();      // makeCounter() is done BUT count is still alive
counter1();
counter1();
console.log(counter1());

// We can make as many counter as we want with their own count varible.
const counter2 = makeCounter()
counter2();
counter2();
console.log(counter2());

// count is enclosed inside the returned function. That's a closure.