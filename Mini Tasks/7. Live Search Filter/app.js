// =====================
//  Element References
// =====================

const search      = document.querySelector("#search");
const items       = document.querySelectorAll("#list li");
const noResult    = document.querySelector("#noResult");
const resultCount = document.querySelector("#resultCount");


// =====================
//  Core Logic
// =====================

search.addEventListener("input", () => {

    // Step 1 — Normalize the query
    // .toLowerCase() so "Java" and "java" both match
    // .trim() removes accidental leading/trailing spaces
    const query = search.value.toLowerCase().trim();

    let visibleCount = 0;

    items.forEach(item => {

        // Step 2 — Normalize the item text the same way
        const text = item.textContent.toLowerCase();

        // Step 3 — Check if this item matches the query
        // .includes() returns true if text contains query as a substring
        const match = text.includes(query);

        // Step 4 — Show or hide the item
        // "" resets display to its default (block for li)
        // "none" hides it completely — takes up no space
        item.style.display = match ? "" : "none";

        if (match) visibleCount++;

        // Step 5 — Highlight the matching part
        if (query && match) {

            // Build a regex from the query string
            // "gi" flags: g = find ALL matches, i = case-insensitive
            // Wrapping in () creates a capture group → used as $1 below
            const regex = new RegExp(`(${query})`, "gi");

            // .replace() swaps every regex match with <mark>match</mark>
            // $1 refers to whatever was captured in the () group
            // This preserves the original casing (e.g. "Java" not "java")
            item.innerHTML = item.textContent.replace(
                regex,
                "<mark>$1</mark>"
            );

        } else {

            // Reset: remove any leftover <mark> tags
            // Re-assigning textContent strips all HTML safely
            item.textContent = item.textContent;

        }

    });

    // Step 6 — Update the result count label
    updateUI(visibleCount, query);

});


// =====================
//  UI Helpers
// =====================

function updateUI(visibleCount, query) {

    // Show "no results" message if nothing matched
    noResult.style.display = visibleCount === 0 ? "block" : "none";

    // Show result count only when the user has typed something
    if (query) {
        resultCount.textContent = `${visibleCount} of ${items.length} languages found`;
    } else {
        resultCount.textContent = "";   // clear when search is empty
    }

}