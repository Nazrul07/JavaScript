// Mock API helper 1: Takes 100ms
const fetchProfile = () => new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Nazrul", title: "Engineer" }), 100);
});

// Mock API helper 2: Takes 100ms
const fetchNotifs = () => new Promise((resolve) => {
    setTimeout(() => resolve(["New Message", "System Update"]), 100);
});

// 1. Slow Waterfall Demo
async function runWaterfall() {
    console.log("--- Starting Waterfall ---");
    console.time("Waterfall Time");

    const profile = await fetchProfile();
    const notifs = await fetchNotifs();

    console.timeEnd("Waterfall Time");
    console.log("Result:", profile.name, notifs.length, "notifications\n");
}

// 2. Fast Parallel Demo
async function runParallel() {
    console.log("--- Starting Parallel ---");
    console.time("Parallel Time");

    const [profile, notifs] = await Promise.all([fetchProfile(), fetchNotifs()]);

    console.timeEnd("Parallel Time");
    console.log("Result:", profile.name, notifs.length, "notifications");
}

async function main() {
    await runWaterfall();
    await runParallel();
}

main();
