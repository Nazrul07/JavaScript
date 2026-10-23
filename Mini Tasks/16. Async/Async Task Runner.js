async function executeWithRetry(asyncFn, maxRetries = 3, timeoutMs = 200) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            // Creating a fresh timeout singal for this attempt:
            const signal = AbortSignal.timeout(timeoutMs);

            // Run the async function and pass the signal:
            const result = await asyncFn(signal);

            return result;
        } catch (error) {
            console.log(`Attempt ${attempt} failed: ${error.name || error.message}`);

            // If this was our Last attempt, stop and throw an error:
            if (attempt === maxRetries) {
                throw new Error(`All ${maxRetries} retries failed!`);
            }

            console.log(`Retrying... (${attempt + 1} / ${maxRetries})`);
        }
    }
}

async function runBatch(tasks) {
    console.log("--- Starting Batch Execution ---");

    // Map each task to our executeWithRetry function:
    const promises = tasks.map((task) => executeWithRetry(task));

    // Wait for all of them in parallel using Promise.attSettled:
    const results = await Promise.allSettled(promises);

    return results;
}

// Mock Jobs
// Job A: Reliable (Takes 50ms, succeeds immediately on attempt 1)
const jobA = () => new Promise((resolve) => {
    setTimeout(() => resolve("Job A: Profile Loaded"), 50);
});

// Job B: Flaky (Fails on attempt 1, but succeeds on attempt 2)
let jobBAttempt = 0;
const jobB = () => new Promise((resolve, reject) => {
    jobBAttempt++;

    if (jobBAttempt === 1) {
        setTimeout(() => reject(new Error("503 Service Unavailable")), 50);
    } else {
        setTimeout(() => resolve("Job B: Orders Loaded on Retry!"), 50);
    }
});


// Job C: Broken (Takes 500ms, exceeding the 200ms timeout every signal time!)
const jobC = (signal) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve("Job C finished"), 500);

    signal?.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(signal.reason);   // Rejects with TimeoutError
    });
});


// The full batch test:
async function main() {
    const results = await runBatch([jobA, jobB, jobC]);

    console.log("\n=================================");
    console.log("FINAL BATCH SUMMARY REPORT:");
    console.log("=================================");

    results.forEach((res, index) => {
        const jobName = `Job ${["A", "B", "C"][index]}`;

        if (res.status === "fulfilled") {
            console.log(`${jobName} -> Success: `, res.value);
        } else {
            console.log(`${jobName} -> Failed: `, res.reason.message);
        }
    });
}

main();