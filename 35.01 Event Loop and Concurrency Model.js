/*
      +-------------------------------------------------------+
      |                   CALL STACK (V8)                     |
      |   [ Executes JS code one frame at a time ]            |
      +-------------------------------------------------------+
                                ^
                                |  Pushes when Call Stack is EMPTY
     ==================== THE EVENT LOOP ====================
                                |
             +------------------+------------------+
             |                                     |
   [ MICROTASK QUEUE ]                   [ MACROTASK QUEUE ]
   - Promise .then/.catch                - setTimeout / setInterval
   - async / await                       - I/O / DOM Events
   - queueMicrotask()
   ⭐️ (Drained completely first!)         🐢 (One task per cycle)
*/


/*
    The Golden Rule of the Event Loop (The Algorithm):

    1. Run all synchronous code on the Call Stack from start to finish.
    2. When the Call Stack is completely empty:
    3. Drain the Microtask Queue COMPLETELY:
        -> Run microtask 1, microtask 2... until the Microtask Queue is completely empty!
        (Note: If a microtask schedules another microtask, that new microtask runs in the same cycle before any macrotask!)
    4. Only when the Microtask Queue is 100% empty, take ONE macrotask from the Macrotask Queue and push it onto the Call Stack.
    5. Repeat from Step 2.

    Key Rule to Memorize:
        Microtasks ALWAYS beat Macrotasks.
        Promises will always execute before setTimeout,
        even if setTimeout has a delay of 0ms!
*/

// Example
console.log("1. Script Start");

setTimeout(() => {
    console.log("2. setTimeout (0ms)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise Microtask 1");
}).then(() => {
    console.log("4. Promise Microtask 2");
});

queueMicrotask(() => {
    console.log("5. queueMicrotask");
});

console.log("6. Script End");

// Output order: 1 -> 6 -> 3 -> 5 -> 4 -> 2
// The Call Stack is NEVER interrupted mid-script.
// It must empty itself completely before any callbacks are processed.

/*
    JavaScript does not pause synchronous execution to check the queues.
    The entire script file runs on the Call Stack from line 1 to line 54 as one single continuous block:

    Line 38: Prints 1. Script Start.
    Line 40: Registers setTimeout (hands it off to Web APIs/macrotask queue).
    Line 44: Enqueues 3 into the Microtask Queue.
    Line 50: Enqueues 5 into the Microtask Queue.
    Line 54: Prints 6. Script End.

    Only after line 54 finishes is the Call Stack completely empty.
    That is the moment the Event Loop wakes up and looks at the Microtask Queue.


    The Microtask Queue is a standard FIFO (First-In, First-Out) queue.
    Let's trace it step-by-step:

    During synchronous execution:
        When line 44 runs, callback 3 is placed in the queue:
        Queue: [ Callback 3 ]

        When line 50 runs, queueMicrotask places callback 5 in the queue:
        Queue: [ Callback 3, Callback 5 ]

    Sync script ends. The Event Loop pulls the first item: Callback 3.
        Callback 3 runs and prints 3. Promise Microtask 1.
        Now (and only now) does its chained .then() attach Callback 4 to the back of the queue!
        Queue: [ Callback 5, Callback 4 ]

    The Event Loop pulls the next item: Callback 5.
        Callback 5 runs and prints 5. queueMicrotask.

    The Event Loop pulls the final item: Callback 4.
        Callback 4 runs and prints 4. Promise Microtask 2.

    Microtask queue is empty. Event loop finally executes the macrotask: Callback 2.
*/