// The classic problem — regular function loses 'this' in callbacks
function Timer() {
    this.seconds = 0        // this = Timer instance

    setInterval(function() {
        // this is now a brand new function
        // nobody is calling it like obj.method()
        // so this = global/undefined 
        this.seconds++
        console.log(this.seconds) // NaN — wrong this!
    }, 1000)

}
// new Timer()

/*
Timer() starts      → this = Timer
setInterval runs    → passes a brand new regular function
that function runs  → JS asks "who called this function?"
                    → nobody called it like obj.method()
                    → setInterval just fires it alone
                    → this = global/undefined
*/


// Solution 1: save this into a variable

function Timer1() {
    this.seconds = 0

    let self = this // save the reference to the current object

    setInterval(function() {
        self.seconds++              // use the saved reference
        console.log(self.seconds)   // works fine
    }, 1000)
}
// new Timer1()



// Solution 2: use an arrow function

function Timer2() {
    this.seconds = 0        // this = Timer

    setInterval(() => {
        // arrow function has no own this
        // looks OUTSIDE to Timer where it was written
        // borrows this from Timer
        this.seconds++
        console.log(this.seconds) // 1, 2, 3...
    }, 1000)
}

new Timer2()

/*
Timer() starts      → this = Timer
setInterval runs    → passes an arrow function
arrow function runs → "I have no own this"
                    → looks outside to where I was written
                    → written inside Timer()
                    → borrows this from Timer
*/


/*
Regular function  →  a new employee who just started
                     doesn't know who their boss is
                     until someone tells them directly

Arrow function    →  an employee who always looks at
                     their parent department for the boss
                     never forgets where they came from
*/