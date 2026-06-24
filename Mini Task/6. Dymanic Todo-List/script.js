// =====================
//  Element References
// =====================

const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
const emptyMsg = document.querySelector("#emptyMsg");


// =====================
//  Helpers
// =====================

// Shows "No tasks" message when the list is empty
function updateEmptyMessage() {
    if (todoList.children.length === 0) {
        emptyMsg.style.display = "block";  // show message
    } else {
        emptyMsg.style.display = "none";   // hide message
    }
}


// =====================
//  Create a Todo Item
// =====================

function createTodoItem(text) {
    // --- Create elements ---
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // --- Set content ---
    span.textContent = text;
    deleteBtn.textContent = "Delete";

    // --- Set classes (matches CSS) ---
    li.classList.add("todo-item");
    deleteBtn.classList.add("delete-btn");

    // --- Delete functionality ---
    deleteBtn.addEventListener("click", () => {
        li.remove();                // remove the item from the list
        updateEmptyMessage();       // check if list is now empty
    });

    // --- Toggle done on span click ---
    span.addEventListener("click", () => {
        span.classList.toggle("done");   // toggle the "done" class
    });

    // --- Assemble: span + button go inside li ---
    li.append(span, deleteBtn);

    return li;
}


// =====================
//  Add a Todo
// =====================

function addTodo() {
    const text = input.value.trim();

    if(!text) return;                   // Don't add empty items

    todoList.append(createTodoItem(text));

    input.value = "";                   // Clear the input field
    input.focus();                      // Move cursor back to input

    updateEmptyMessage();               // Hide "No tasks" message
}


// =====================
//  Event Listeners
// =====================

// Click the Add button
addBtn.addEventListener("click", addTodo);

// Press Enter inside the input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
});


// =====================
//  Init
// =====================

updateEmptyMessage();   // run once on page load to set initial state