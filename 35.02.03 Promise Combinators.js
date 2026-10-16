/*
====================================================================
PART 3: THE 4 PROMISE COMBINATORS
====================================================================

When we want to handle MULTIPLE asynchronous operations at once,
JavaScript provides 4 built-in combinator methods:

1. Promise.all()        -> Fails fast. All must succeed.
2. Promise.allSettled() -> Never fails. Waits for all to finish.
3. Promise.any()        -> First successful promise wins.
4. Promise.race()       -> First to finish (success or error) wins.
*/

// ====================================================================
// OUR 3 TEST TASKS:
// ====================================================================
// Task A: takes 100ms -> SUCCEEDS with "Result A"
const taskA = () => new Promise((resolve) => {
    setTimeout(() => resolve("Result A (100ms)"), 100);
});

// Task B: takes 50ms  -> FAILS with an Error
const taskB = () => new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Task B Failed (50ms)")), 50);
});

// Task C: takes 200ms -> SUCCEEDS with "Result C"
const taskC = () => new Promise((resolve) => {
    setTimeout(() => resolve("Result C (200ms)"), 200);
});


// --------------------------------------------------------------------
// 1. Promise.all() -> ALL OR NOTHING (FAILS FAST)
// --------------------------------------------------------------------
// Task B fails at 50ms.
// Promise.all rejects immediately at 50ms without waiting for A or C!
Promise.all([taskA(), taskB(), taskC()])
    .then((results) => console.log("Promise.all succeeded:", results))
    .catch((err) => console.log("[1. Promise.all at 50ms]:", err.message));


// --------------------------------------------------------------------
// 2. Promise.race() -> FIRST TO FINISH WINS (SUCCESS OR ERROR)
// --------------------------------------------------------------------
// Task B finishes first at 50ms (even though it's an error).
// Promise.race rejects immediately at 50ms!
Promise.race([taskA(), taskB(), taskC()])
    .then((winner) => console.log("Promise.race won:", winner))
    .catch((err) => console.log("[2. Promise.race at 50ms]:", err.message));


// --------------------------------------------------------------------
// 3. Promise.any() -> FIRST SUCCESSFUL PROMISE WINS
// --------------------------------------------------------------------
// Task B fails at 50ms -> Promise.any IGNORES it and keeps waiting.
// Task A succeeds at 100ms -> Promise.any resolves immediately at 100ms!
Promise.any([taskA(), taskB(), taskC()])
    .then((firstSuccess) => {
        console.log("[3. Promise.any at 100ms FIRST SUCCESS]:", firstSuccess);
    })
    .catch((err) => console.log("All failed:", err.errors));


// --------------------------------------------------------------------
// 4. Promise.allSettled() -> WAITS FOR EVERYTHING (NEVER FAILS)
// --------------------------------------------------------------------
// It waits for Task C (200ms). When everything is done, it gives a full report.
Promise.allSettled([taskA(), taskB(), taskC()])
    .then((report) => {
        console.log("\n[4. Promise.allSettled at 200ms Full Report]:");
        report.forEach((item, index) => {
            const taskName = ["Task A", "Task B", "Task C"][index];
            if (item.status === "fulfilled") {
                console.log(`   ${taskName}: Succeeded with -> "${item.value}"`);
            } else {
                console.log(`   ${taskName}: Failed with    -> "${item.reason.message}"`);
            }
        });
    });
