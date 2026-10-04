// Think of them as different ways to read the response body:

// Response
//    │
//    └── body
//        │
//        ├── JSON  → response.json()
//        │
//        └── Text  → response.text()


// For example:

// JSON response: response.json()
// might give:
// [
//     { name: "Nazrul" },
//     { name: "Rahim" }
// ]

// Text response: response.text()
// might give:
// "Hello from the server!"