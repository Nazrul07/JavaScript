// The Two Core Rules of async and await

// Rule 1: The async keyword ALWAYS returns a Promise

// Even if we return a plain number or string,
// JavaScript wraps it inside a Promise automatically:

async function getRole() {
    return "Software Engineer";
}

// Exactly the same as:
// function getRole() { return Promise.resolve("Software Engineer"); }

getRole().then((role) => console.log(role));


// Rule 2: The await keyword pauses ONLY that function

/*
    When JavaScript hits await:
    - It does not freeze the browser or server.
    - It pauses only the inside of that specific async function.
    - It hands control back to the main Call Stack so the rest of our program continues running.
    - When the awaited Promise finishes, the rest of the function resumes as a Microtask.
*/