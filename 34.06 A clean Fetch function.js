function getUsers() {

    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {

            if (!response.ok) {
                throw new Error(
                    `HTTP Error: ${response.status}`
                );
            }

            return response.json();
        });
}

getUsers()
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.log("Failed:", error.message);
    });