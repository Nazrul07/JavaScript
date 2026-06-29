// =====================
//  Element References
// =====================

const list = document.querySelector("#list");
const loader = document.querySelector("#loader");
const endMsg = document.querySelector("#endMsg");
const sentinel = document.querySelector("#sentinel");


// =====================
//  Config
// =====================

const ITEMS_PER_PAGE = 10;
const MAX_PAGES = 10;    // stop after 100 items total

let page = 1;
let loading = false;          // guard flag — prevents double-loading


// =====================
//  Fake Delay Helper
// =====================

// Simulates a network request delay (like fetching from an API)
// Returns a Promise that resolves after `ms` milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// =====================
//  Load More Items
// =====================

async function loadMore() {

    // Guard: if already loading or no more pages, do nothing
    if (loading || page > MAX_PAGES) return;

    loading = true;

    // Show the spinner
    loader.style.display = "flex";

    // Simulate network delay (300ms feels natural)
    await delay(300);

    // --- Build items using DocumentFragment ---
    // DocumentFragment is a lightweight container that lives in memory.
    // You build all items inside it first, then add to the DOM in ONE go.
    // This avoids triggering a browser reflow for every single item.
    // Without it: 10 items = 10 DOM updates = slow
    // With it:    10 items = 1  DOM update  = fast
    const fragment = document.createDocumentFragment();

    // Calculate start and end index for this page
    // page 1: i = 0  to 9
    // page 2: i = 10 to 19
    // page 3: i = 20 to 29
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = page * ITEMS_PER_PAGE;

    for (let i = start; i < end; i++) {

        const div = document.createElement("div");
        div.className = "item";

        // Number badge
        const badge = document.createElement("div");
        badge.className = "item-number";
        badge.textContent = i + 1;

        // Text content
        const text = document.createElement("div");

        const title = document.createElement("div");
        title.className = "item-text";
        title.textContent = `Item ${i + 1}`;

        const sub = document.createElement("div");
        sub.className = "item-sub";
        sub.textContent = `Page ${page} · Index ${i}`;

        text.append(title, sub);
        div.append(badge, text);
        fragment.append(div);
    }

    // One single DOM update — appends all 10 items at once
    list.append(fragment);

    page++;

    // Hide spinner
    loader.style.display = "none";
    loading = false;

    // If we've hit the max, stop observing and show end message
    if (page > MAX_PAGES) {
        observer.disconnect();              // stop watching sentinel
        endMsg.style.display = "block";     // show "No more items" message
    }
}


// =====================
//  IntersectionObserver
// =====================

const observer = new IntersectionObserver((entries) => {

    // entries[0] is the sentinel element
    // isIntersecting = true means sentinel entered the viewport
    if (entries[0].isIntersecting) {
        loadMore();
    }

}, {
    threshold: 1.0    // sentinel must be 100% visible before firing
});

// Start watching the sentinel
observer.observe(sentinel);


// =====================
//  Init — Load First Batch
// =====================

loadMore();