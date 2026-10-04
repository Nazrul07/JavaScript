// Server
//    ↓
// Response
//    │
//    ├── Headers
//    │      └── Content-Type
//    │
//    └── Body
//           ↓
//      Choose how to read it
//           │
//           ├── JSON → response.json()
//           └── Text → response.text()


// const result = response.json();     // result is not immediately the parsed object.

// Promise
//    ↓
// eventually
//    ↓
// parsed JavaScript data

// Similarly:
// const result = response.text();     // result is not immediately the text content.
// Promise
//    ↓
// eventually
//    ↓
// text content