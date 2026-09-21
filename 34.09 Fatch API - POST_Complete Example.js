const user = {
    name: "Nazrul Islam",
    email: "Nazrul104n@gmail.com"
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)
})
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    })
    .then(data => {
        console.log("User created successfully:", data);
    })
    .catch(error => {
        console.log("There was a problem with the fetch operation:", error);
    })
    .finally(() => {
        console.log("Fetch operation completed.");
    });


/*
Flow of the work

fetch()
  ↓
POST request
  ↓
send JSON data
  ↓
Response
  ↓
response.ok
  ↓
response.json()
  ↓
parsed JavaScript data
  ↓
.then(data)
  ↓
.catch() if rejected/error
  ↓
.finally()

*/


/*
One important thing,
When sending data: JSON.stringify() is used to convert JavaScript objects into JSON strings.
When receiving data: response.json() is used to Response body → parsed JavaScript value.
*/