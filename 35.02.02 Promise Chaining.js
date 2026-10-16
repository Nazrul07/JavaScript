/*
====================================================================
PART 2: PROMISE CHAINING & ERROR HANDLING
====================================================================

In real-world apps, we frequently need data from one step to start
the next step (e.g., Get User ID -> Fetch User Profile -> Extract Role).

THE 3 GOLDEN RULES OF CHAINING:
1. Returning a normal value from .then() automatically wraps it in a 
   resolved Promise and passes it to the NEXT .then().
2. Returning another Promise from .then() pauses the chain until that
   new Promise finishes.
3. .catch() at the bottom catches errors from ANY previous step in the chain.
4. .finally() ALWAYS runs at the very end, whether it succeeded or failed.
*/


/*
We can also handle errors in the middle of the chain using .catch()
with no .then() after it.
That way, the chain continues but the error is handled at that specific point.

Let's see that in action!
*/

// Step 1 helper: Returns user ID immediately
function fetchUserId() {
    return Promise.resolve(101);
}

// Step 2 helper: Simulates fetching profile from a server (takes 50ms)
function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "Nazrul", role: "Software Engineer" });
        }, 50);
    });
}

// ====================================================================
// THE CHAIN IN ACTION:
// ====================================================================

fetchUserId()
    .then((id) => {
        console.log("Step 1: Got User ID ->", id);

        // Rule 2: We return a NEW promise here!
        // The chain will pause and wait 50ms for fetchUserProfile to complete.
        return fetchUserProfile(id);
    })
    .then((profile) => {
        console.log("Step 2: Got User Profile ->", profile);

        // Rule 1: We return a normal string value here ("Software Engineer").
        // JavaScript automatically passes it to the next .then() as a resolved promise.
        return profile.role;
    })
    .then((role) => {
        console.log("Step 3: Extracted Role ->", role);
    })
    .catch((error) => {
        // If anything fails in Step 1, 2, or 3, execution jumps directly here!
        console.error("An error occurred in the chain:", error.message);
    })
    .finally(() => {
        // Always runs! Ideal for stopping loading spinners or cleaning up resources.
        console.log("Step 4: Chain complete! (Cleanup done)");
    });

/*
EXPECTED OUTPUT:
----------------
Step 1: Got User ID -> 101
Step 2: Got User Profile -> { id: 101, name: 'Nazrul', role: 'Software Engineer' }
Step 3: Extracted Role -> Software Engineer
Step 4: Chain complete! (Cleanup done)
*/