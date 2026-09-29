fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "New Name"
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
})
.then(data => {
    console.log("Updated:", data);
})
.catch(error => {
    console.log("Error:", error.message);
})
.finally(() => {
    console.log("Request finished");
});