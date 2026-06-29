// =====================
//  Element References
// =====================

// All tab buttons — NodeList of 3 buttons
const tabs = document.querySelectorAll(".tab");

// All panels — NodeList of 3 divs
const panels = document.querySelectorAll(".panel");


// =====================
//  Tab Click Handler
// =====================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Step 1 — Remove "active" from ALL tab buttons
        // We don't know which one was active before — so reset all of them
        tabs.forEach(t => t.classList.remove("active"));

        // Step 2 — Hide ALL panels by adding "hidden" to each
        // display:none hides them — defined in CSS
        panels.forEach(p => p.classList.add("hidden"));

        // Step 3 — Mark the clicked tab as active
        // "tab" here is the specific button that was clicked
        tab.classList.add("active");

        // Step 4 — Show the correct panel
        // Read data-target from the clicked button
        // e.g. <button data-target="tab2"> → targetId = "tab2"
        const targetId = tab.dataset.target;

        // Build a CSS ID selector: "tab2" → "#tab2"
        // Then find that panel and remove "hidden" to show it
        document.querySelector(`#${targetId}`).classList.remove("hidden");

    });

});