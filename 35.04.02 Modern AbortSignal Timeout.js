// A mock network request that takes a given duration to finish:
function mockNetworkRequest(durationMs, signal) {
    return new Promise((resolve, reject) => {
        // If the signal was ALREADY aborted before starting:
        if (signal?.aborted) {
            return reject(signal.reason);
        }

        const timer = setTimeout(() => {
            resolve("✅ Data fetched successfully!");
        }, durationMs);

        // Listen for the abort event if the signal triggers before the timer finishes:
        signal?.addEventListener("abort", () => {
            clearTimeout(timer);    // Free memory
            reject(signal.reason);  // Reject with TimeoutError or AbortError
        });
    });
}

// ====================================================================
// TEST 1: FAST REQUEST (Finishes before the 200ms timeout)
// ====================================================================
async function testFastRequest() {
    console.log("--- Test 1: Fast Request (50ms vs 200ms limit) ---");
    try {
        const result = await mockNetworkRequest(50, AbortSignal.timeout(200));
        console.log("Result:", result);
    } catch (err) {
        console.log("Error:", err.name, "-", err.message);
    }
}

// ====================================================================
// TEST 2: SLOW REQUEST (Exceeds the 100ms timeout limit)
// ====================================================================
async function testSlowRequest() {
    console.log("\n--- Test 2: Slow Request (300ms vs 100ms limit) ---");
    try {
        const result = await mockNetworkRequest(300, AbortSignal.timeout(100));
        console.log("Result:", result);
    } catch (err) {
        // In modern JS, err.name is "TimeoutError"
        console.log("Caught:", err.name, "-> Request took too long!");
    }
}

// ====================================================================
// TEST 3: REQUEST WITHOUT ANY SIGNAL (Optional Chaining in Action)
// ====================================================================
async function testWithoutSignal() {
    console.log("\n--- Test 3: Request without Signal (signal is undefined) ---");
    try {
        // We pass ONLY duration (80ms), signal is omitted (undefined):
        // Notice: signal?.aborted and signal?.addEventListener will NOT crash!
        const result = await mockNetworkRequest(80);
        console.log("Result:", result);
    } catch (err) {
        console.log("Error:", err.name, "-", err.message);
    }
}

async function main() {
    await testFastRequest();
    await testSlowRequest();
    await testWithoutSignal();
}

main();