// Fetch Timeout with AbortSignal.timeout()

/*
- Let our application requests data from a server:

What happens if the server takes 30 seconds to respond?

- Our application might keep waiting longer than we would like.
- We can set a timeout so the request is automatically aborted if it takes too long.
*/

// Modern browsers provide: AbortSignal.timeout(milliseconds);

fetch("https://example.com/data", {
    signal: AbortSignal.timeout(5000)
});

// If the request hasn't completed before the timeout, the signal aborts it.

/* If the request completes within 5 seconds - Request completes normally.

If the timeout expires first - Request is aborted.
*/


fetch("https://jsonplaceholder.typicode.com/users", {
    signal: AbortSignal.timeout(5000)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log("Users:", data);
    })
    .catch(error => {
        if (error.name === "TimeoutError") { // A timeout-triggered abort normally rejects with a TimeoutError.
            console.log("Request took too long!");
        } else {
            console.log("Request failed:", error.message);
        }
    });


/*
How is this different from controller.abort()?

controller.abort()	                        AbortSignal.timeout()
We manually trigger cancellation.	        Cancellation happens automatically after the specified duration.
Useful for a Cancel button.	                Useful for limiting how long a request can take.
Uses an AbortController object.	            Creates a signal that aborts after a timeout.

Both use abort signals to cancel the Fetch operation.

// Cancel manually
controller.abort();

// Abort automatically after 5 seconds
signal: AbortSignal.timeout(5000)


a timeout abort normally produces a TimeoutError,
whereas a manual abort normally produces an AbortError.
*/