/*
====================================================================
PART 1: PROMISE BASICS & THE 3 STATES
====================================================================

A Promise is an object representing the eventual result of an async operation.

It has 3 possible states:
  1. PENDING   : Initial state (work is still in progress).
  2. FULFILLED : Work finished successfully (resolve() was called).
  3. REJECTED  : Work failed with an error (reject() was called).

Rule: Once a Promise is settled (Fulfilled or Rejected), its state is 
PERMANENTLY FROZEN. Calling resolve() or reject() again does nothing.
*/

console.log("A");

const p = new Promise((resolve, reject) => {
    // ⚠️ The code inside this executor runs IMMEDIATELY on the Call Stack!
    console.log("B");

    resolve("Data Loaded");

    // ⚠️ Ignored! A promise cannot change state after resolving:
    resolve("Ignored");
});

// Any callback inside .then() is placed into the Microtask Queue.
// It will wait until ALL synchronous code finishes.
p.then((result) => {
    console.log("C (Microtask):", result);
});

console.log("D");

/*
EXPECTED OUTPUT:
----------------
A
B
D
C (Microtask): Data Loaded

WHY?
- "A" prints immediately (Line 18).
- Inside new Promise, "B" prints immediately (Line 22).
- resolve("Data Loaded") marks the promise as fulfilled.
- .then() registers callback "C" into the Microtask Queue (waiting).
- "D" prints immediately (Line 31).
- Synchronous code is now done! The engine runs the Microtask Queue:
- "C (Microtask): Data Loaded" prints last (Line 28).
*/
