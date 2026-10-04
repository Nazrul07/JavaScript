// Not every HTTP response contains JSON.
// An API might return JSON, plain text, HTML, a file, an image, etc.


// response.json() is specifically for JSON
// We have already used

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
// This works when the response body contains JSON.

// For example: Content-Type: application/json

// and the body might be:
// {
//     "name": "Nazrul",
//     "age": 25
// }

// Then: response.json() will parse the JSON and return a JavaScript object.
// {
//     name: "Nazrul",
//     age: 25
// }




// What if the response is plain text?

// Suppose a server responds with: Content-Type: text/plain
// and the body is: Hello Nazrul!
// Using: response.json() -> would be inappropriate because the response isn't JSON.
// Instead, use: response.text()
// Example:

fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });



// Here:
// response.text()
//        ↓
//     Promise
//        ↓
// "Hello Nazrul!"
// Just like response.json(), response.text() also returns a Promise.