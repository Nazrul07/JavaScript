// =====================
//  Config
// =====================

const MAX = 280;   // character limit — change this one value to adjust everything


// =====================
//  Element References
// =====================

const counterCard = document.querySelector("#counterCard");
const textArea = document.querySelector("#textArea");
const progressFill = document.querySelector("#progressFill");
const statusText = document.querySelector("#statusText");
const countDisplay = document.querySelector("#countDisplay");


// =====================
//  State
// =====================

// Tracks whether the user was ALREADY over the limit on the last keystroke.
// Used to fire the shake animation only ONCE when the limit is first crossed
// — not on every keystroke while over the limit.
let wasOver = false;


// =====================
//  Core Logic
// =====================

textArea.addEventListener("input", () => {

    const used = textArea.value.length;         // how many characters typed
    const remaining = MAX - used;               // how many left (can go negative)
    const percent = (used / MAX) * 100;         // 0-100+ as a percentage

    updateCount(remaining);
    updateProgress(percent);
    updateState(percent, remaining);
});


// =====================
//  Update Functions
// =====================

// Updates the big number and the label beside it
function updateCount(remaining) {
    countDisplay.textContent = remaining;   // shows negative when over limit

    if (remaining >= 0) {
        statusText.textContent = "characters remaining";
    } else {
        statusText.textContent = "characters over limit";
    }
}

// Fills the progress bar — capped at 100% visually
// Color change handles the "over" state instead of overflow
function updateProgress(percent) {
    progressFill.style.width = `${Math.min(percent, 100)}%`;
}

// Switches the card's state class — drives ALL color changes in CSS
function updateState(percent, remaining) {

    // Remove whichever state class is currently active
    counterCard.classList.remove(
        "state-normal",
        "state-warning",
        "state-danger",
        "state-over"
    );

    // Decide which state to apply based on thresholds
    let newState;

    if (remaining < 0) {
        newState = "state-over";

        // Shake only when FIRST crossing the limit
        // wasOver prevents shake on every keystroke while already over
        if (!wasOver) {
            triggerShake();
        }
        wasOver = true;

    } else if (percent >= 90) {
        newState = "state-danger";
        wasOver = false;

    } else if (percent >= 70) {
        newState = "state-warning";
        wasOver = false;

    } else {
        newState = "state-normal";
        wasOver = false;
    }

    counterCard.classList.add(newState);
}


// =====================
//  Shake Animation
// =====================

function triggerShake() {

    // Add shake class to play the animation
    countDisplay.classList.add("shake");

    // { once: true } — automatically removes the listener after it fires once
    // Without this, listeners would pile up on every time user goes over limit
    
    // animationend is a built-in event that fires when a CSS animation completes
    countDisplay.addEventListener("animationend", () => {
        countDisplay.classList.remove("shake");
    }, { once: true });
}


// =====================
//  Init
// =====================

// Run once on page load so the display matches the empty textarea state
// (important if the browser auto-fills the textarea on refresh)
updateCount(MAX);
updateProgress(0);