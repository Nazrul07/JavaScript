/*
====================================================================
TOPIC 35.02.04: UNDERSTANDING "resolve" AND "reject"
====================================================================

1. WHAT IS "resolve"?
--------------------
When you write:
    new Promise((resolve, reject) => { ... })

You DID NOT create the "resolve" function! 
JavaScript built it under the hood and handed it to you as an argument.

"resolve" is a BUZZER function. Calling resolve(data) tells JavaScript:
  - "The background work is finished successfully!"
  - Change the Promise state from "PENDING" -> "FULFILLED".
  - Deliver this "data" to whoever is waiting with await or .then().


2. THE RESTAURANT BUZZER ANALOGY:
---------------------------------
  1. Customer orders food    -> Customer gets a Buzzer (new Promise in PENDING state).
  2. Customer waits at table -> Code writes: const food = await getFood();
  3. Kitchen cooks the food  -> Background operation (DB query, network fetch, timer).
  4. Kitchen hits buzzer     -> Code calls: resolve("Hot Burger 🍔");
  5. Buzzer rings at table   -> await unpauses! "food" variable gets "Hot Burger 🍔".
*/

// ====================================================================
// DEMO 1: A PROMISE RESOLVING AFTER A 1-SECOND TIMER
// ====================================================================

function orderBurger() {
    return new Promise((resolve, reject) => {
        console.log("Chef: Started cooking the burger in the kitchen...");

        setTimeout(() => {
            // When cooking is done after 1 second, the chef calls resolve()!
            // Whatever is passed inside resolve(...) will be delivered to the caller.
            resolve("Hot Burger 🍔");
        }, 1000);
    });
}

async function customerExperience() {
    console.log("Customer: Placed order. Waiting at table for the buzzer to ring...\n");

    // "await" pauses here until resolve() is called inside orderBurger:
    const food = await orderBurger();

    console.log("\nCustomer Buzzer Rang! Received food ->", food);
}


// ====================================================================
// DEMO 2: WHAT DOES "reject" DO?
// ====================================================================
// If something goes wrong, you call reject(error) instead of resolve().

function orderPizza(hasCheese) {
    return new Promise((resolve, reject) => {
        if (hasCheese) {
            resolve("Cheesy Pizza 🍕"); // Success path
        } else {
            // Error path: sends an Error to .catch() or try/catch
            reject(new Error("Kitchen ran out of cheese!"));
        }
    });
}

async function pizzaTest() {
    console.log("\n--- Pizza Order Test ---");

    try {
        const pizza = await orderPizza(false);
        console.log("Received:", pizza);
    } catch (err) {
        console.log("Order Failed! Reason:", err.message);
    }
}


// ====================================================================
// DEMO 3: WHAT IF YOU NEVER CALL resolve() OR reject()?
// ====================================================================
// The Promise remains in "PENDING" forever.
// Any "await" waiting on it will hang and freeze that function indefinitely!

function brokenOrder() {
    return new Promise((resolve, reject) => {
        // We forgot to call resolve()!
        // The buzzer never rings!
    });
}


// ====================================================================
// RUNNING THE DEMOS
// ====================================================================
async function main() {
    await customerExperience();
    await pizzaTest();
}

main();