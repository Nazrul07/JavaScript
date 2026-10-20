async function greet() {
    return "Hello";
}
// Because greet has async in front of it, JavaScript automatically waraps "Hello" inside Promise.resolve("Hello").
// This is exactly the same as:
// function greet() { return Promise.resolve("Hello"); }

const result = greet();
console.log(result);

// Output: Promise { 'Hello' }


// The async keyword ALWAYS returns a Promise.
// It does not care whether there is an await inside or not.

const testing = await greet();
console.log(testing);
// Output: Hello


// The await keyword pauses ONLY that function.
/*
    - It does not freeze the browser or server.
    - It pauses only the inside of that specific async function.
    - It hands control back to the main Call Stack so the rest of our program continues running.
    - When the awaited Promise finishes, the rest of the function resumes as a Microtask.
*/
