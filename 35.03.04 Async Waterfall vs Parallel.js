/*
    The Scenario: Loading a User's Dashboard
    Imagine our web app needs two pieces of data to display the page:

    User Profile: takes 100ms to fetch from the server.
    User Notifications: takes 100ms to fetch from the server.
    Notice: Notifications do NOT depend on the profile. They are completely independent!
*/

// ❌ The Bad Way: The Sequential Waterfall (Takes 200ms)
// Look at what happens if we put await on every line one after another:

async function loadSlow() {
  console.time("Slow Waterfall");

  const profile = await fetchProfile();
  const notifications = await fetchNotifs();

  console.timeEnd("Slow Waterfall");
  return { profile, notifications };
}

/*
    ✅ The Good Way: The Parallel Promise.all (Takes 100ms)
    - Since they don't depend on each other, start both requests at the exact same time:
*/

async function loadFast() {
  console.time("Fast Parallel");

  // Both network requests fire immediately at the exact same moment:
  const profilePromise = fetchProfile();
  const notifsPromise = fetchNotifs();

  // Await both promises together:
  const [profile, notifications] = await Promise.all([
    profilePromise,
    notifsPromise,
  ]);

  console.timeEnd("Fast Parallel"); // Takes only ~100ms! (50% faster!)
  return { profile, notifications };
}
