// =====================
//  Data
// =====================

// Array of objects — the single source of truth
// The table is entirely generated from this
const developers = [
    { name: "Alice Rahman", role: "Frontend Dev", city: "Dhaka", salary: 85000, status: "active" },
    { name: "Bob Hossain", role: "Backend Dev", city: "Chittagong", salary: 92000, status: "remote" },
    { name: "Clara Mim", role: "UI Designer", city: "Sylhet", salary: 74000, status: "contract" },
    { name: "David Khan", role: "Full Stack Dev", city: "Dhaka", salary: 105000, status: "active" },
    { name: "Eva Sultana", role: "DevOps", city: "Rajshahi", salary: 98000, status: "remote" },
    { name: "Farhan Islam", role: "Frontend Dev", city: "Dhaka", salary: 78000, status: "active" },
    { name: "Grace Akter", role: "Data Analyst", city: "Khulna", salary: 88000, status: "contract" },
    { name: "Hassan Ali", role: "Backend Dev", city: "Dhaka", salary: 95000, status: "active" },
    { name: "Irene Begum", role: "QA Engineer", city: "Chittagong", salary: 70000, status: "remote" },
    { name: "Jabir Ahmed", role: "Full Stack Dev", city: "Sylhet", salary: 110000, status: "active" },
    { name: "Karin Noor", role: "UI Designer", city: "Dhaka", salary: 76000, status: "contract" },
    { name: "Limon Sarker", role: "DevOps", city: "Rajshahi", salary: 102000, status: "remote" },
    { name: "Mina Chowdhury", role: "Frontend Dev", city: "Khulna", salary: 83000, status: "active" },
    { name: "Nabil Hasan", role: "Backend Dev", city: "Dhaka", salary: 97000, status: "active" },
    { name: "Olivia Rahman", role: "Data Analyst", city: "Chittagong", salary: 89000, status: "contract" },
    { name: "Pavel Karim", role: "Full Stack Dev", city: "Sylhet", salary: 108000, status: "remote" },
    { name: "Quinn Sultana", role: "UI Designer", city: "Dhaka", salary: 75000, status: "active" },
    { name: "Rachel Ahmed", role: "QA Engineer", city: "Rajshahi", salary: 72000, status: "contract" },
    { name: "Samiul Islam", role: "DevOps", city: "Khulna", salary: 99000, status: "remote" },
    { name: "Tania Akter", role: "Frontend Dev", city: "Dhaka", salary: 82000, status: "active" }
];


// =====================
//  Column Definitions
// =====================

// Defines what columns exist, their labels, and how to render each cell.
// Adding a new column = add one entry here — nothing else changes.
const columns = [
    {
        key: "name",
        label: "Name",
        render: (val) => `
            <div class="cell-name">
                <div class="avatar">${val.charAt(0)}</div>
                <span class="name-text">${val}</span>
            </div>`
    },
    {
        key: "role",
        label: "Role"
    },
    {
        key: "city",
        label: "City"
    },
    {
        key: "salary",
        label: "Salary",
        render: (val) =>
            `<span class="cell-salary">$${val.toLocaleString()}</span>`
    },
    {
        key: "status",
        label: "Status",
        render: (val) =>
            `<span class="badge badge-${val}">${val}</span>`
    },
];


// =====================
//  State
// =====================

let sortKey = "name";    // which column is currently sorted
let sortDir = "asc";     // "asc" | "desc"
let query = "";         // current search string


// =====================
//  Element References
// =====================

const tableHead = document.querySelector("#tableHead");
const tableBody = document.querySelector("#tableBody");
const emptyMsg = document.querySelector("#emptyMsg");
const rowCount = document.querySelector("#rowCount");
const searchInput = document.querySelector("#searchInput");


// =====================
//  Build Header (runs once)
// =====================

function buildHeader() {

    const tr = document.createElement("tr");

    columns.forEach(col => {

        const th = document.createElement("th");
        th.dataset.key = col.key;   // store key on element for click handler

        // Arrow span — shows ▲ or ▼ depending on sort direction
        th.innerHTML =
            `${col.label} <span class="sort-arrow">▲</span>`;

        // Click → sort by this column
        th.addEventListener("click", () => {

            if (sortKey === col.key) {
                // Same column clicked again → flip direction
                sortDir = sortDir === "asc" ? "desc" : "asc";
            } else {
                // New column → reset to ascending
                sortKey = col.key;
                sortDir = "asc";
            }

            renderTable();
        });

        tr.appendChild(th);
    });

    tableHead.appendChild(tr);
}


// =====================
//  Sort
// =====================

function getSortedData(data) {

    // .slice() creates a copy — never mutate the original array
    return data.slice().sort((a, b) => {

        let valA = a[sortKey];
        let valB = b[sortKey];

        // String comparison — case-insensitive
        if (typeof valA === "string") {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
            // localeCompare: returns -1, 0, or 1 — perfect for sort()
            return sortDir === "asc"
                ? valA.localeCompare(valB)
                : valB.localeCompare(valA);
        }

        // Number comparison
        return sortDir === "asc" ? valA - valB : valB - valA;
    });
}


// =====================
//  Filter (Search)
// =====================

function getFilteredData() {

    if (!query) return developers;   // no query → return all

    return developers.filter(dev => {
        // Check if any column value includes the search string
        return columns.some(col =>
            String(dev[col.key]).toLowerCase().includes(query)
        );
    });
}


// =====================
//  Render Table Body
// =====================

function renderTable() {

    // Step 1 — filter first, then sort the filtered results
    const filtered = getFilteredData();
    const sorted = getSortedData(filtered);

    // Step 2 — update header: mark sorted column, flip arrow
    document.querySelectorAll("#tableHead th").forEach(th => {
        th.classList.remove("sorted");
        const arrow = th.querySelector(".sort-arrow");

        if (th.dataset.key === sortKey) {
            th.classList.add("sorted");
            // ▲ for ascending, ▼ for descending
            arrow.textContent = sortDir === "asc" ? "▲" : "▼";
        } else {
            arrow.textContent = "▲";   // reset others to default
        }
    });

    // Step 3 — build rows using DocumentFragment for one DOM update
    const fragment = document.createDocumentFragment();

    sorted.forEach(dev => {

        const tr = document.createElement("tr");

        columns.forEach(col => {

            const td = document.createElement("td");
            const val = dev[col.key];

            // If column has a custom render function → use it
            // Otherwise just set the raw value as text
            if (col.render) {
                td.innerHTML = col.render(val);
            } else {
                td.textContent = val;
            }

            tr.appendChild(td);
        });

        fragment.appendChild(tr);
    });

    // Step 4 — replace body content in one shot
    tableBody.innerHTML = "";
    tableBody.appendChild(fragment);

    // Step 5 — update row count + empty message
    rowCount.textContent =
        `${sorted.length} of ${developers.length} developers`;

    emptyMsg.style.display = sorted.length === 0 ? "block" : "none";
}


// =====================
//  Search Listener
// =====================

searchInput.addEventListener("input", () => {
    query = searchInput.value.toLowerCase().trim();
    renderTable();
});


// =====================
//  Init
// =====================

buildHeader();    // build <thead> once
renderTable();    // build <tbody> with initial data