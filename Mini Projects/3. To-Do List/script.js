let tasks         = loadTasks(); 
let currentFilter = "all";


const taskForm   = document.querySelector("#taskForm");
const taskInput  = document.querySelector("#taskInput");
const taskList   = document.querySelector("#taskList");

const emptyMsg   = document.querySelector("#emptyMsg");

const listFooter = document.querySelector(".list-footer");
const taskCount  = document.querySelector("#taskCount");
const clearBtn   = document.querySelector("#clearBtn");


function loadTasks() {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
}

function saveTasks() {
    localStorage.setItem("todos", JSON.stringify(tasks));
}


function addTask(text) {
    const newTask = {
        id:        Date.now(),    // for unique id
        text:      text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
}


function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}


function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    saveTasks();
    renderTasks();
}


function updateTaskText(id, newText) {
    const task = tasks.find(t => t.id === id);
    if (task) task.text = newText;
    saveTasks();
    renderTasks();
}


function getFilteredTasks() {
    if (currentFilter === "active")    return tasks.filter(t => !t.completed);
    if (currentFilter === "completed") return tasks.filter(t =>  t.completed);
    return tasks;       // return everything
}


function renderTasks() {

    const filtered = getFilteredTasks();

    taskList.innerHTML = "";

    filtered.forEach(task => {

        // Creating list
        const li = document.createElement("li");
        li.className  = `task-item${task.completed ? " completed" : ""}`;
        li.dataset.id = task.id;

        const checkbox     = document.createElement("input");
        checkbox.type      = "checkbox";
        checkbox.className = "task-check";
        checkbox.checked   = task.completed;

        const span       = document.createElement("span");
        span.className   = "task-text";
        span.textContent = task.text;

        const editBtn       = document.createElement("button");
        editBtn.className   = "edit-btn";
        editBtn.textContent = "Edit";

        const deleteBtn       = document.createElement("button");
        deleteBtn.className   = "delete-btn";
        deleteBtn.textContent = "Delete";

        const actions     = document.createElement("div");
        actions.className = "task-actions";
        actions.append(editBtn, deleteBtn);

        // Wrap up everything and append
        li.append(checkbox, span, actions);
        taskList.appendChild(li);
    });

    updateFooter(filtered.length);
}

function updateFooter(visibleCount) {

    const activeCount = tasks.filter(t => !t.completed).length;

    taskCount.textContent = `${activeCount} task${activeCount !== 1 ? "s" : ""} left`;

    emptyMsg.style.display = visibleCount === 0 ? "block" : "none";

    listFooter.style.display = tasks.length > 0 ? "flex" : "none";
}


function startEdit(li, id, currentText) {

    const span    = li.querySelector(".task-text");
    const editBtn = li.querySelector(".edit-btn");

    const input     = document.createElement("input");
    input.type      = "text";
    input.className = "edit-input";
    input.value     = currentText;

    span.replaceWith(input);
    input.focus();
    input.select();

    editBtn.textContent = "Save";
    editBtn.className   = "save-btn";

    // Insert Cancel button right after Save
    const cancelBtn       = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.className   = "cancel-btn";
    editBtn.after(cancelBtn);

    // Keyboard shortcuts inside the edit input
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter")  saveEdit(id, input);        // Enter  -> save
        if (e.key === "Escape") renderTasks();              // Escape -> cancel
    });
}

function saveEdit(id, input) {
    const newText = input.value.trim();
    if (!newText) return; 
    updateTaskText(id, newText);
}


taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = taskInput.value.trim();
    if (!text) return;

    addTask(text);
    taskInput.value = "";
    taskInput.focus();
});


taskList.addEventListener("click", (e) => {

    const li = e.target.closest(".task-item");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("task-check")) {
        toggleTask(id);

    } else if (e.target.classList.contains("delete-btn")) {
        deleteTask(id);

    } else if (e.target.classList.contains("edit-btn")) {
        const text = li.querySelector(".task-text").textContent;
        startEdit(li, id, text);

    } else if (e.target.classList.contains("save-btn")) {
        const input = li.querySelector(".edit-input");
        if (input) saveEdit(id, input);

    } else if (e.target.classList.contains("cancel-btn")) {
        renderTasks();
    }
});


// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn")
                .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});


clearBtn.addEventListener("click", () => {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    renderTasks();
});


// initial: render whatever was saved in localStorage when the page first loads
renderTasks();