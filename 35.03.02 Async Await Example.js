async function fetchUser() {
    console.log("2. Inside fetchUser (before await)");

    // JavaScript hits 'await' here:
    // It pauses fetchUser and steps out!

    const user = await Promise.resolve("Nazrul");

    // This part runs later as a Microtask:
    console.log("4. Inside fetchUser (after await) -> Got user: ", user);
}

console.log("1. Program Start");

fetchUser();

console.log("3. Program End");

/*
    1. "1. Program Start": (Synchronous code running on the Call Stack).
    2. fetchUser() is called:
        - The code before await runs synchronously -> 2. Inside fetchUser (before await).
        - It hits await Promise.resolve("Nazrul").
        - The engine pauses fetchUser right here and jumps out of the function!
    3. "3. Program End": (The main file continues running on the Call Stack).
    4. The main file finishes. The Call Stack is now empty!
    5. The Event Loop looks at the Microtask Queue and resumes fetchUser right where it was paused -> 4. Inside fetchUser (after await) -> Got user: Nazrul.
*/


// The async keyword ALWAYS returns a Promise.
// It does not care whether there is an await inside or not.