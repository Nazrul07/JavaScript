// =====================
//  State
// =====================

let draggedItem = null;         // the <li> currently being dragged
let dropPosition = null;        // "before" | "after" — where to insert


// =====================
//  Helper
// =====================

// Removes drop indicator classes from ALL items
function clearDropIndicators() {
    document.querySelectorAll(".list-item").forEach(item => {
        item.classList.remove("drop-above", "drop-below");
    });
}


// =====================
//  Drag Event Handlers
// =====================

function onDragStart(e) {

    draggedItem = this;   // "this" = the <li> the event fired on

    // Tell the browser this is a move operation (not copy)
    e.dataTransfer.effectAllowed = "move";

    // this.classList.add("dragging");

    // setTimeout trick — without this, the browser captures the element's
    // appearance for the ghost image BEFORE adding the class.
    // Delaying by 0ms means: add .dragging AFTER the ghost is captured.
    // Result: ghost looks normal, the original item looks faded.
    setTimeout(() => this.classList.add("dragging"), 0);
}


function onDragEnd() {

    // Cleanup — remove dragging style and all drop indicators
    this.classList.remove("dragging");
    clearDropIndicators();

    draggedItem = null;
    dropPosition = null;
}


function onDragOver(e) {

    // REQUIRED — without preventDefault(), drop event never fires
    // By default browser does not allow dropping — this enables it
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    // Don't show drop indicator when hovering over itself
    if (this === draggedItem) return;

    // --- Decide: insert before or after this item ---
    // Get the bounding box of the item being hovered over
    const rect = this.getBoundingClientRect();

    // midY = vertical center of this item
    const midY = rect.top + rect.height / 2;

    // If mouse is above the center → insert before
    // If mouse is below the center → insert after
    dropPosition = e.clientY < midY ? "before" : "after";

    // Show the visual indicator line
    clearDropIndicators();

    if (dropPosition === "before") {
        this.classList.add("drop-above");   // blue line on top
    } else {
        this.classList.add("drop-below");   // blue line on bottom
    }
}


function onDragLeave() {

    // Remove indicator when mouse leaves this item
    this.classList.remove("drop-above", "drop-below");
}


function onDrop(e) {

    e.preventDefault();

    // Don't do anything if dropped on itself
    if (this === draggedItem) return;

    // --- Reorder the DOM ---
    // .before() inserts draggedItem immediately BEFORE this item in the DOM
    // .after()  inserts draggedItem immediately AFTER  this item in the DOM
    // No need to manually remove draggedItem first —
    // before() and after() automatically move it from its current position
    if (dropPosition === "before") {
        this.before(draggedItem);
    } else {
        this.after(draggedItem);
    }

    clearDropIndicators();
}


// =====================
//  Attach Listeners
// =====================

// Get all list items and attach all 5 drag events to each one
document.querySelectorAll(".list-item").forEach(item => {
    item.addEventListener("dragstart", onDragStart);
    item.addEventListener("dragend", onDragEnd);
    item.addEventListener("dragover", onDragOver);
    item.addEventListener("dragleave", onDragLeave);
    item.addEventListener("drop", onDrop);
});