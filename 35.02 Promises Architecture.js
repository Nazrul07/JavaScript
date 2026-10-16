/*
====================================================================
TOPIC 35.02: PROMISES ARCHITECTURE (INDEX)
====================================================================

This topic is broken into 3 clean, dedicated files:

1. [35.02.01 Promise Basics.js]
   - The 3 states (Pending, Fulfilled, Rejected)
   - Synchronous executor vs Microtask Queue
   - Output trace: A -> B -> D -> C

2. [35.02.02 Promise Chaining.js]
   - Passing data from step to step
   - Returning values vs returning new Promises
   - Error catching with .catch()
   - Final cleanup with .finally()

3. [35.02.03 Promise Combinators.js]
   - Promise.all()       (All must succeed, fails fast)
   - Promise.race()      (First to settle wins)
   - Promise.any()       (First success wins)
   - Promise.allSettled()(Waits for all, never fails)
*/
