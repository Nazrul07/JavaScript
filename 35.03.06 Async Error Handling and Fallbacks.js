// Simulates an API call that fails:
const fetchUserPreferences = () => new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Database connection lost!")), 100);
});

// Default fallback preferences if the server fails:
const DEFAULT_PREFERENCES = {
    theme: "dark",
    language: "en",
    notificationsEnabled: true
};

// ====================================================================
// RESILIENT ASYNC FUNCTION WITH FALLBACK:
// ====================================================================
async function getUserSettings() {
    console.log("Fetching user preferences from server...");

    try {
        const preferences = await fetchUserPreferences();
        return preferences;
    } catch (error) {
        // 1. Log the error for monitoring:
        console.log("⚠️ Server error occurred:", error.message);

        // 2. Instead of crashing, return a safe fallback!
        console.log("ℹ️ Using default safe preferences instead.");
        return DEFAULT_PREFERENCES;
    } finally {
        // 3. Always runs: great for hiding loading spinners:
        console.log("✅ Preferences check completed.\n");
    }
}

async function main() {
    const settings = await getUserSettings();
    console.log("Final Active Settings:", settings);
}

main();
